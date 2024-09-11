var C=Object.defineProperty;var j=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,h as w,j as B,i as S,k as I,l as b,m as L,p as P,q as N,v as T,w as q,x as D}from"./scheduler.CMG-eXWX.js";let $=!1;function H(){$=!0}function M(){$=!1}function O(e,t,n,r){for(;e<t;){const l=e+(t-e>>1);n(l)<=r?e=l+1:t=l}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let l=0;for(let i=0;i<t.length;i++){const a=t[i].claim_order,o=(l>0&&t[n[l]].claim_order<=a?l+1:O(1,l,_=>t[n[_]].claim_order,a))-1;r[i]=n[o]+1;const u=o+1;n[u]=i,l=Math.max(u,l)}const f=[],s=[];let c=t.length-1;for(let i=n[l]+1;i!=0;i=r[i-1]){for(f.push(t[i-1]);c>=i;c--)s.push(t[c]);c--}for(;c>=0;c--)s.push(t[c]);f.reverse(),s.sort((i,a)=>i.claim_order-a.claim_order);for(let i=0,a=0;i<s.length;i++){for(;a<f.length&&s[i].claim_order>=f[a].claim_order;)a++;const o=a<f.length?f[a]:null;e.insertBefore(s[i],o)}}function R(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function V(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function ae(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,r,l=!1){G(e);const f=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const c=e[s];if(t(c)){const i=n(c);return i===void 0?e.splice(s,1):e[s]=i,l||(e.claim_info.last_index=s),c}}for(let s=e.claim_info.last_index-1;s>=0;s--){const c=e[s];if(t(c)){const i=n(c);return i===void 0?e.splice(s,1):e[s]=i,l?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,c}}return r()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function E(e,t,n,r){return A(e,l=>l.nodeName===t,l=>{const f=[];for(let s=0;s<l.attributes.length;s++){const c=l.attributes[s];n[c.name]||f.push(c.name)}f.forEach(s=>l.removeAttribute(s))},()=>r(t))}function ce(e,t,n){return E(e,t,n,V)}function fe(e,t,n){return E(e,t,n,W)}function J(e,t){return A(e,n=>n.nodeType===3,n=>{const r=""+t;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>x(t),!0)}function ue(e){return J(e," ")}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function _e(e,t,n){e.classList.toggle(t,!!n)}function me(e,t){return new e(t)}const m=new Set;let d;function he(){d={r:0,c:[],p:d}}function $e(){d.r||h(d.c),d=d.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function pe(e,t,n,r){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ye(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),b(()=>{const f=e.$$.on_mount.map(T).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),l.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(q.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,r,l,f,s=null,c=[-1]){const i=P;N(e);const a=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:l,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||i.$$.root};s&&s(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(u,_,...g)=>{const v=g.length?g[0]:_;return a.ctx&&l(a.ctx[u],a.ctx[u]=v)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](v),o&&Y(e,u)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){H();const u=F(t.target);a.fragment&&a.fragment.l(u),u.forEach(U)}else a.fragment&&a.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),M(),B()}N(i)}class ve{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{ae as A,le as B,_e as C,ne as D,ve as S,pe as a,x as b,ce as c,F as d,V as e,J as f,U as g,ue as h,ge as i,te as j,R as k,oe as l,re as m,$e as n,se as o,de as p,he as q,me as r,ie as s,K as t,ye as u,xe as v,Q as w,X as x,W as y,fe as z};
