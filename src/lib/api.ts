export async function queryCached<T>(url: string): Promise<T> {
	// Use localstorage to cache the data
	const cacheKey = `cache_:${url}`;
	const cacheJson = localStorage.getItem(cacheKey);

	if (cacheJson) {
		const cache = JSON.parse(cacheJson) as CachedResponse<T>;

		const queriedAt = new Date(cache.queried_at);
		const now = new Date();

		// Cache for 1 hour
		if (now.getTime() - queriedAt.getTime() < 60 * 60 * 1000) {
			return cache.data;
		}

		// Cache expired
		localStorage.removeItem(cacheKey);
	}

	// Fetch the data
	const response = await fetch(url);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	// Cache the data
	const cached: CachedResponse<T> = {
		queried_at: new Date(),
		data
	};
	localStorage.setItem(cacheKey, JSON.stringify(cached));

	return data;
}

interface CachedResponse<T> {
	queried_at: Date;
	data: T;
}
