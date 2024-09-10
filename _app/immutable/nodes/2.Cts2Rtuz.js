import{s as en,n as dt,o as Vs,f as eo,c as Qi,u as es,g as ts,b as ns,y as Mt,z as gi,A as Xi,B as yr,d as to,C as Lf,D as Th,E as Ch,F as Rh}from"../chunks/scheduler.CMG-eXWX.js";import{S as tn,i as nn,e as Ne,c as Fe,d as vt,g as re,o as $,j as Te,y as Ys,z as Zs,k as ze,s as qe,h as $e,t as Ke,a as je,p as Ph,A as no,u as pt,v as mt,w as gt,x as _t,m as Ih,n as Lh,q as Dh,b as qi,f as $i,B as Uh,l as Fs,C as im}from"../chunks/index.Bs9YOP5v.js";import{d as sm,w as io}from"../chunks/index.DNRxPlET.js";function Nh(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function rm(s){let e;return{c(){e=Ne("div"),this.h()},l(t){e=Fe(t,"DIV",{class:!0}),vt(e).forEach(re),this.h()},h(){$(e,"class","godrays svelte-yj6qld")},m(t,n){Te(t,e,n)},p:dt,i:dt,o:dt,d(t){t&&re(e)}}}class am extends tn{constructor(e){super(),nn(this,e,null,rm,en,{})}}function om(s){let e,t,n,i,r;return{c(){e=Ys("svg"),t=Ys("filter"),n=Ys("feTurbulence"),i=Ys("feBlend"),r=Ys("rect"),this.h()},l(a){e=Zs(a,"svg",{xmlns:!0,class:!0});var o=vt(e);t=Zs(o,"filter",{id:!0,x:!0,y:!0});var l=vt(t);n=Zs(l,"feTurbulence",{type:!0,baseFrequency:!0,numOctaves:!0}),vt(n).forEach(re),i=Zs(l,"feBlend",{mode:!0}),vt(i).forEach(re),l.forEach(re),r=Zs(o,"rect",{width:!0,height:!0,filter:!0}),vt(r).forEach(re),o.forEach(re),this.h()},h(){$(n,"type","fractalNoise"),$(n,"baseFrequency","0.8"),$(n,"numOctaves","1"),$(i,"mode","screen"),$(t,"id","noise"),$(t,"x","0"),$(t,"y","0"),$(r,"width",s[0]),$(r,"height",s[1]),$(r,"filter","url(#noise)"),$(e,"xmlns","http://www.w3.org/2000/svg"),$(e,"class","svelte-jy7os")},m(a,o){Te(a,e,o),ze(e,t),ze(t,n),ze(t,i),ze(e,r)},p(a,[o]){o&1&&$(r,"width",a[0]),o&2&&$(r,"height",a[1])},i:dt,o:dt,d(a){a&&re(e)}}}function lm(s,e,t){let n=0,i=0;Vs(()=>{document.addEventListener("resize",r),r()});function r(){t(0,n=window.innerWidth*1),t(1,i=window.innerHeight*1)}return[n,i]}class cm extends tn{constructor(e){super(),nn(this,e,lm,om,en,{})}}function hm(s){let e;return{c(){e=Ne("div"),this.h()},l(t){e=Fe(t,"DIV",{class:!0}),vt(e).forEach(re),this.h()},h(){$(e,"class","halftone svelte-ks6ndy")},m(t,n){Te(t,e,n),s[1](e)},p:dt,i:dt,o:dt,d(t){t&&re(e),s[1](null)}}}function um(s,e,t){Vs(()=>{document.addEventListener("scroll",i)});let n;function i(){const a=window.scrollY;n.style.setProperty("--bgPosition",`${-a/3}px`)}function r(a){eo[a?"unshift":"push"](()=>{n=a,t(0,n)})}return[n,r]}class fm extends tn{constructor(e){super(),nn(this,e,um,hm,en,{})}}function dm(s){let e,t,n,i,r,a;const o=s[5].default,l=Qi(o,s,s[4],null);return{c(){e=Ne("div"),t=Ne("div"),n=qe(),i=Ne("div"),r=Ne("div"),l&&l.c(),this.h()},l(c){e=Fe(c,"DIV",{class:!0});var h=vt(e);t=Fe(h,"DIV",{class:!0}),vt(t).forEach(re),n=$e(h),i=Fe(h,"DIV",{class:!0});var f=vt(i);r=Fe(f,"DIV",{class:!0});var u=vt(r);l&&l.l(u),u.forEach(re),f.forEach(re),h.forEach(re),this.h()},h(){$(t,"class","border svelte-uww50u"),$(r,"class","content svelte-uww50u"),$(i,"class","content-wrapper svelte-uww50u"),$(e,"class","card svelte-uww50u")},m(c,h){Te(c,e,h),ze(e,t),ze(e,n),ze(e,i),ze(i,r),l&&l.m(r,null),s[6](e),a=!0},p(c,[h]){l&&l.p&&(!a||h&16)&&es(l,o,c,c[4],a?ns(o,c[4],h,null):ts(c[4]),null)},i(c){a||(Ke(l,c),a=!0)},o(c){je(l,c),a=!1},d(c){c&&re(e),l&&l.d(c),s[6](null)}}}function pm(s,e,t){let{$$slots:n={},$$scope:i}=e,r,a=0,o=0,{padding:l=20}=e,{width:c}=e,{height:h}=e;Vs(()=>{window.addEventListener("mousemove",f),r.style.setProperty("--paddingX",`${l*1.15}px`),r.style.setProperty("--paddingY",`${l}px`),r.style.setProperty("--x","0px"),r.style.setProperty("--y","0px"),r.style.setProperty("--width","0px"),r.style.setProperty("--height","0px")});function f(d){a=d.clientX,o=d.clientY;const p=a-r.getBoundingClientRect().left,_=o-r.getBoundingClientRect().top;r.style.setProperty("--x",`${p}px`),r.style.setProperty("--y",`${_}px`),r.style.setProperty("--width",`${c}`),r.style.setProperty("--height",`${h}`)}function u(d){eo[d?"unshift":"push"](()=>{r=d,t(0,r)})}return s.$$set=d=>{"padding"in d&&t(1,l=d.padding),"width"in d&&t(2,c=d.width),"height"in d&&t(3,h=d.height),"$$scope"in d&&t(4,i=d.$$scope)},[r,l,c,h,i,n,u]}class Mn extends tn{constructor(e){super(),nn(this,e,pm,dm,en,{padding:1,width:2,height:3})}}function mm(s){let e,t;return{c(){e=Ne("img"),this.h()},l(n){e=Fe(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Mt(e.src,t="/email.svg")||$(e,"src",t),$(e,"alt",""),$(e,"class","svelte-n0bjqv")},m(n,i){Te(n,e,i)},d(n){n&&re(e)}}}function gm(s){let e,t;return{c(){e=Ne("img"),this.h()},l(n){e=Fe(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Mt(e.src,t="/linkedin.svg")||$(e,"src",t),$(e,"alt",""),$(e,"class","svelte-n0bjqv")},m(n,i){Te(n,e,i)},d(n){n&&re(e)}}}function _m(s){let e,t;return{c(){e=Ne("img"),this.h()},l(n){e=Fe(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Mt(e.src,t="/github.svg")||$(e,"src",t),$(e,"alt",""),$(e,"class","svelte-n0bjqv")},m(n,i){Te(n,e,i)},d(n){n&&re(e)}}}function vm(s){let e;function t(r,a){if(r[0]==="github")return _m;if(r[0]==="linkedin")return gm;if(r[0]==="email")return mm}let n=t(s),i=n&&n(s);return{c(){e=Ne("a"),i&&i.c(),this.h()},l(r){e=Fe(r,"A",{class:!0,href:!0,target:!0,rel:!0});var a=vt(e);i&&i.l(a),a.forEach(re),this.h()},h(){$(e,"class","button svelte-n0bjqv"),$(e,"href",s[1]),$(e,"target","_blank"),$(e,"rel","noopener noreferrer")},m(r,a){Te(r,e,a),i&&i.m(e,null)},p(r,[a]){n!==(n=t(r))&&(i&&i.d(1),i=n&&n(r),i&&(i.c(),i.m(e,null))),a&2&&$(e,"href",r[1])},i:dt,o:dt,d(r){r&&re(e),i&&i.d()}}}function xm(s,e,t){let{type:n}=e,{link:i}=e;return s.$$set=r=>{"type"in r&&t(0,n=r.type),"link"in r&&t(1,i=r.link)},[n,i]}class Ic extends tn{constructor(e){super(),nn(this,e,xm,vm,en,{type:0,link:1})}}function ym(s){let e;return{c(){e=Ne("div"),this.h()},l(t){e=Fe(t,"DIV",{style:!0,class:!0}),vt(e).forEach(re),this.h()},h(){Ph(e,"background-image","url("+s[0]+")"),$(e,"class","image svelte-3rsec7")},m(t,n){Te(t,e,n)},p(t,[n]){n&1&&Ph(e,"background-image","url("+t[0]+")")},i:dt,o:dt,d(t){t&&re(e)}}}function Mm(s,e,t){let{url:n}=e;return s.$$set=i=>{"url"in i&&t(0,n=i.url)},[n]}class Sm extends tn{constructor(e){super(),nn(this,e,Mm,ym,en,{url:0})}}function bm(s){let e,t=`<div class="header svelte-bye3jy"><img src="/me.jpeg" alt="" class="svelte-bye3jy"/> <h1 class="svelte-bye3jy"><span>Lucas de Jong</span></h1></div> <div><p>Hoi! Ik ben een gepassioneerde full-stack software-developer geintresseerd in mooie interfaces
			met goedwerkende backend-systemen.</p></div>`;return{c(){e=Ne("div"),e.innerHTML=t,this.h()},l(n){e=Fe(n,"DIV",{class:!0,"data-svelte-h":!0}),no(e)!=="svelte-1hnsr6y"&&(e.innerHTML=t),this.h()},h(){$(e,"class","me svelte-bye3jy")},m(n,i){Te(n,e,i)},p:dt,i:dt,o:dt,d(n){n&&re(e)}}}class wm extends tn{constructor(e){super(),nn(this,e,null,bm,en,{})}}function Em(s){let e,t,n,i,r;const a=s[3].default,o=Qi(a,s,s[2],null);return{c(){e=Ne("div"),t=Ne("div"),o&&o.c(),n=qe(),i=Ne("div"),this.h()},l(l){e=Fe(l,"DIV",{class:!0});var c=vt(e);t=Fe(c,"DIV",{class:!0});var h=vt(t);o&&o.l(h),n=$e(h),i=Fe(h,"DIV",{class:!0}),vt(i).forEach(re),h.forEach(re),c.forEach(re),this.h()},h(){$(i,"class","copied svelte-1bvkox8"),$(t,"class","content svelte-1bvkox8"),$(e,"class","scroller svelte-1bvkox8")},m(l,c){Te(l,e,c),ze(e,t),o&&o.m(t,null),ze(t,n),ze(t,i),s[4](i),s[5](t),r=!0},p(l,[c]){o&&o.p&&(!r||c&4)&&es(o,a,l,l[2],r?ns(a,l[2],c,null):ts(l[2]),null)},i(l){r||(Ke(o,l),r=!0)},o(l){je(o,l),r=!1},d(l){l&&re(e),o&&o.d(l),s[4](null),s[5](null)}}}function Am(s,e,t){let{$$slots:n={},$$scope:i}=e,r,a;Vs(()=>{const c=Array.from(r.children);c.sort(()=>Math.random()-.5),t(0,r.innerHTML="",r);for(const h of c)r.appendChild(h),a.appendChild(h.cloneNode(!0))});function o(c){eo[c?"unshift":"push"](()=>{a=c,t(1,a)})}function l(c){eo[c?"unshift":"push"](()=>{r=c,t(0,r)})}return s.$$set=c=>{"$$scope"in c&&t(2,i=c.$$scope)},[r,a,i,n,o,l]}class Tm extends tn{constructor(e){super(),nn(this,e,Am,Em,en,{})}}function Cm(s){let e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,g,m,y,v,x,P,E,C,L,b,M,R,U,N,D,O,G,te,W,he,pe,fe,He,et,X,ie;return{c(){e=Ne("img"),n=qe(),i=Ne("img"),a=qe(),o=Ne("img"),c=qe(),h=Ne("img"),u=qe(),d=Ne("img"),_=qe(),g=Ne("img"),y=qe(),v=Ne("img"),P=qe(),E=Ne("img"),L=qe(),b=Ne("img"),R=qe(),U=Ne("img"),D=qe(),O=Ne("img"),te=qe(),W=Ne("img"),pe=qe(),fe=Ne("img"),et=qe(),X=Ne("img"),this.h()},l(q){e=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),n=$e(q),i=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),a=$e(q),o=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),c=$e(q),h=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),u=$e(q),d=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),_=$e(q),g=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),y=$e(q),v=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),P=$e(q),E=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),L=$e(q),b=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),R=$e(q),U=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),D=$e(q),O=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),te=$e(q),W=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),pe=$e(q),fe=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),et=$e(q),X=Fe(q,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Mt(e.src,t="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg")||$(e,"src",t),$(e,"alt","Svelte"),$(e,"class","svelte-hij01"),Mt(i.src,r="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg")||$(i,"src",r),$(i,"alt","VSCode"),$(i,"class","svelte-hij01"),Mt(o.src,l="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg")||$(o,"src",l),$(o,"alt","C#"),$(o,"class","svelte-hij01"),Mt(h.src,f="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg")||$(h,"src",f),$(h,"alt","Git"),$(h,"class","svelte-hij01"),Mt(d.src,p="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg")||$(d,"src",p),$(d,"alt","Sass"),$(d,"class","svelte-hij01"),Mt(g.src,m="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")||$(g,"src",m),$(g,"alt","TypeScript"),$(g,"class","svelte-hij01"),Mt(v.src,x="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg")||$(v,"src",x),$(v,"alt","JavaScript"),$(v,"class","svelte-hij01"),Mt(E.src,C="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg")||$(E,"src",C),$(E,"alt","HTML5"),$(E,"class","svelte-hij01"),Mt(b.src,M="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg")||$(b,"src",M),$(b,"alt","CSS3"),$(b,"class","svelte-hij01"),Mt(U.src,N="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg")||$(U,"src",N),$(U,"alt","Figma"),$(U,"class","svelte-hij01"),Mt(O.src,G="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg")||$(O,"src",G),$(O,"alt","Rust"),$(O,"class","svelte-hij01"),Mt(W.src,he="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg")||$(W,"src",he),$(W,"alt",".NET"),$(W,"class","svelte-hij01"),Mt(fe.src,He="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg")||$(fe,"src",He),$(fe,"alt","Java"),$(fe,"class","svelte-hij01"),Mt(X.src,ie="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg")||$(X,"src",ie),$(X,"alt","MySQL"),$(X,"class","svelte-hij01")},m(q,ne){Te(q,e,ne),Te(q,n,ne),Te(q,i,ne),Te(q,a,ne),Te(q,o,ne),Te(q,c,ne),Te(q,h,ne),Te(q,u,ne),Te(q,d,ne),Te(q,_,ne),Te(q,g,ne),Te(q,y,ne),Te(q,v,ne),Te(q,P,ne),Te(q,E,ne),Te(q,L,ne),Te(q,b,ne),Te(q,R,ne),Te(q,U,ne),Te(q,D,ne),Te(q,O,ne),Te(q,te,ne),Te(q,W,ne),Te(q,pe,ne),Te(q,fe,ne),Te(q,et,ne),Te(q,X,ne)},p:dt,i:dt,o:dt,d(q){q&&(re(e),re(n),re(i),re(a),re(o),re(c),re(h),re(u),re(d),re(_),re(g),re(y),re(v),re(P),re(E),re(L),re(b),re(R),re(U),re(D),re(O),re(te),re(W),re(pe),re(fe),re(et),re(X))}}}class Rm extends tn{constructor(e){super(),nn(this,e,null,Cm,en,{})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="168",Pm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Im={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,fc=1,Uf=2,Lm=3,Dm=0,Lc=1,Nf=2,In=3,jn=0,jt=1,Ln=2,Jn=0,Vi=1,dc=2,pc=3,mc=4,Ff=5,di=100,Of=101,Bf=102,zf=103,kf=104,Vf=200,Hf=201,Gf=202,Wf=203,so=204,ro=205,Xf=206,qf=207,$f=208,Yf=209,Zf=210,Jf=211,Kf=212,jf=213,Qf=214,ed=0,td=1,nd=2,Mr=3,id=4,sd=5,rd=6,ad=7,Xr=0,od=1,ld=2,Kn=0,cd=1,hd=2,ud=3,fd=4,dd=5,pd=6,md=7,gc="attached",gd="detached",Bo=300,Qn=301,pi=302,Sr=303,br=304,Hs=306,wr=1e3,xn=1001,Er=1002,kt=1003,Dc=1004,Um=1004,Cs=1005,Nm=1005,Nt=1006,ur=1007,Fm=1007,Dn=1008,Om=1008,On=1009,Uc=1010,Nc=1011,Os=1012,zo=1013,ei=1014,an=1015,Gs=1016,ko=1017,Vo=1018,Yi=1020,Fc=35902,Oc=1021,Bc=1022,Kt=1023,zc=1024,kc=1025,Hi=1026,Zi=1027,Ho=1028,qr=1029,Vc=1030,Go=1031,Bm=1032,Wo=1033,fr=33776,dr=33777,pr=33778,mr=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,yo=37814,Mo=37815,So=37816,bo=37817,wo=37818,Eo=37819,Ao=37820,To=37821,gr=36492,Co=36494,Ro=36495,Hc=36283,Po=36284,Io=36285,Lo=36286,_d=2200,vd=2201,xd=2202,Ar=2300,Do=2301,ja=2302,Oi=2400,Bi=2401,Tr=2402,Xo=2500,Gc=2501,zm=0,km=1,Vm=2,yd=3200,Md=3201,Hm=3202,Gm=3203,_i=0,Sd=1,$n="",vn="srgb",ni="srgb-linear",qo="display-p3",$r="display-p3-linear",Cr="linear",yt="srgb",Rr="rec709",Pr="p3",Wm=0,Ui=7680,Xm=7681,qm=7682,$m=7683,Ym=34055,Zm=34056,Jm=5386,Km=512,jm=513,Qm=514,eg=515,tg=516,ng=517,ig=518,_c=519,bd=512,wd=513,Ed=514,Wc=515,Ad=516,Td=517,Cd=518,Rd=519,Ir=35044,sg=35048,rg=35040,ag=35045,og=35049,lg=35041,cg=35046,hg=35050,ug=35042,fg="100",vc="300 es",Un=2e3,Lr=2001;class Bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const Gi=Math.PI/180,Bs=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Xc(s,e){return(s%e+e)%e}function dg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function pg(s,e,t){return s!==e?(t-s)/(e-s):0}function _r(s,e,t){return(1-t)*s+t*e}function mg(s,e,t,n){return _r(s,e,1-Math.exp(-t*n))}function gg(s,e=1){return e-Math.abs(Xc(s,e*2)-e)}function _g(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yg(s,e){return s+Math.random()*(e-s)}function Mg(s){return s*(.5-Math.random())}function Sg(s){s!==void 0&&(Fh=s);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bg(s){return s*Gi}function wg(s){return s*Bs}function Eg(s){return(s&s-1)===0&&s!==0}function Ag(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Tg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rg={DEG2RAD:Gi,RAD2DEG:Bs,generateUUID:pn,clamp:Ct,euclideanModulo:Xc,mapLinear:dg,inverseLerp:pg,lerp:_r,damp:mg,pingpong:gg,smoothstep:_g,smootherstep:vg,randInt:xg,randFloat:yg,randFloatSpread:Mg,seededRandom:Sg,degToRad:bg,radToDeg:wg,isPowerOfTwo:Eg,ceilPowerOfTwo:Ag,floorPowerOfTwo:Tg,setQuaternionFromProperEuler:Cg,normalize:Je,denormalize:Jt};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,r,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],v=i[4],x=i[7],P=i[2],E=i[5],C=i[8];return r[0]=a*_+o*y+l*P,r[3]=a*g+o*v+l*E,r[6]=a*m+o*x+l*C,r[1]=c*_+h*y+f*P,r[4]=c*g+h*v+f*E,r[7]=c*m+h*x+f*C,r[2]=u*_+d*y+p*P,r[5]=u*g+d*v+p*E,r[8]=u*m+d*x+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=t*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new Ze;function Pd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const Pg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Rs(s,e){return new Pg[s](e)}function Dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Id(){const s=Dr("canvas");return s.style.display="block",s}const Oh={};function Us(s){s in Oh||(Oh[s]=!0,console.warn(s))}function Ig(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Bh=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[ni]:{transfer:Cr,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[vn]:{transfer:yt,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[$r]:{transfer:Cr,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(zh),fromReference:s=>s.applyMatrix3(Bh)},[qo]:{transfer:yt,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(zh),fromReference:s=>s.applyMatrix3(Bh).convertLinearToSRGB()}},Lg=new Set([ni,$r]),ot={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Js[e].toReference,i=Js[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Js[s].primaries},getTransfer:function(s){return s===$n?Cr:Js[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Js[e].luminanceCoefficients)}};function Ns(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Al(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class Ld{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Dr("canvas")),os.width=e.width,os.height=e.height;const n=os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ns(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dg=0;class zi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Tl(i[a].image)):r.push(Tl(i[a]))}else r=Tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ld.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ug=0;class Rt extends Bn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=xn,i=xn,r=Nt,a=Dn,o=Kt,l=On,c=Rt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=pn(),this.name="",this.source=new zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Bo;Rt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,P=(m+1)/2,E=(h+u)/4,C=(f+_)/4,L=(p+g)/4;return v>x&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=C/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=L/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-_)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends Bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $o extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ng extends An{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new $o(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class qc extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fg extends An{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new qc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class on{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(f!==_||l!==u||c!==d||h!==p){let g=1-o;const m=l*u+c*d+h*p+f*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const P=Math.sqrt(v),E=Math.atan2(P,m*y);g=Math.sin(g*E)/P,o=Math.sin(o*E)/P}const x=o*y;if(l=l*g+u*x,c=c*g+d*x,h=h*g+p*x,f=f*g+_*x,g===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-o*d,e[t+2]=c*p+h*d+o*u-l*f,e[t+3]=h*p-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cl=new T,kh=new on;class Qt{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),ra.subVectors(this.max,Ks),ls.subVectors(e.a,Ks),cs.subVectors(e.b,Ks),hs.subVectors(e.c,Ks),si.subVectors(cs,ls),ri.subVectors(hs,cs),Si.subVectors(ls,hs);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Si.z,Si.y,si.z,0,-si.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-si.y,si.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!Rl(t,ls,cs,hs,ra)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,ls,cs,hs,ra))?!1:(aa.crossVectors(si,ri),t=[aa.x,aa.y,aa.z],Rl(t,ls,cs,hs,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new T,new T,new T,new T,new T,new T,new T,new T],Sn=new T,sa=new Qt,ls=new T,cs=new T,hs=new T,si=new T,ri=new T,Si=new T,Ks=new T,ra=new T,aa=new T,bi=new T;function Rl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){bi.fromArray(s,r);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Og=new Qt,js=new T,Pl=new T;class qt{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Og.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Pl)),this.expandByPoint(js.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new T,Il=new T,oa=new T,ai=new T,Ll=new T,la=new T,Dl=new T;class Ws{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Il.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Il);const r=e.distanceTo(t)*.5,a=-this.direction.dot(oa),o=ai.dot(this.direction),l=-ai.dot(oa),c=ai.lengthSq(),h=Math.abs(1-a*a);let f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){const _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Il).addScaledVector(oa,u),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){Ll.subVectors(t,e),la.subVectors(n,e),Dl.crossVectors(Ll,la);let a=this.direction.dot(Dl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,e);const l=o*this.direction.dot(la.crossVectors(ai,la));if(l<0)return null;const c=o*this.direction.dot(Ll.cross(ai));if(c<0||l+c>a)return null;const h=-o*ai.dot(Dl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,g){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,g)}set(e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,p=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,p=o*h,_=o*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=p*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-_*f}else if(e.order==="XZY"){const u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bg,e,zg)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),oi.crossVectors(n,un),oi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),oi.crossVectors(n,un)),oi.normalize(),ca.crossVectors(un,oi),i[0]=oi.x,i[4]=ca.x,i[8]=un.x,i[1]=oi.y,i[5]=ca.y,i[9]=un.y,i[2]=oi.z,i[6]=ca.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],v=n[7],x=n[11],P=n[15],E=i[0],C=i[4],L=i[8],b=i[12],M=i[1],R=i[5],U=i[9],N=i[13],D=i[2],O=i[6],G=i[10],te=i[14],W=i[3],he=i[7],pe=i[11],fe=i[15];return r[0]=a*E+o*M+l*D+c*W,r[4]=a*C+o*R+l*O+c*he,r[8]=a*L+o*U+l*G+c*pe,r[12]=a*b+o*N+l*te+c*fe,r[1]=h*E+f*M+u*D+d*W,r[5]=h*C+f*R+u*O+d*he,r[9]=h*L+f*U+u*G+d*pe,r[13]=h*b+f*N+u*te+d*fe,r[2]=p*E+_*M+g*D+m*W,r[6]=p*C+_*R+g*O+m*he,r[10]=p*L+_*U+g*G+m*pe,r[14]=p*b+_*N+g*te+m*fe,r[3]=y*E+v*M+x*D+P*W,r[7]=y*C+v*R+x*O+P*he,r[11]=y*L+v*U+x*G+P*pe,r[15]=y*b+v*N+x*te+P*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*l*f-i*c*f-r*o*u+n*c*u+i*o*d-n*l*d)+_*(+t*l*d-t*c*u+r*a*u-i*a*d+i*c*h-r*l*h)+g*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+m*(-i*o*h-t*l*f+t*o*u+i*a*f-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],y=f*g*c-_*u*c+_*l*d-o*g*d-f*l*m+o*u*m,v=p*u*c-h*g*c-p*l*d+a*g*d+h*l*m-a*u*m,x=h*_*c-p*f*c+p*o*d-a*_*d-h*o*m+a*f*m,P=p*f*l-h*_*l-p*o*u+a*_*u+h*o*g-a*f*g,E=t*y+n*v+i*x+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=y*C,e[1]=(_*u*r-f*g*r-_*i*d+n*g*d+f*i*m-n*u*m)*C,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*m+n*l*m)*C,e[3]=(f*l*r-o*u*r-f*i*c+n*u*c+o*i*d-n*l*d)*C,e[4]=v*C,e[5]=(h*g*r-p*u*r+p*i*d-t*g*d-h*i*m+t*u*m)*C,e[6]=(p*l*r-a*g*r-p*i*c+t*g*c+a*i*m-t*l*m)*C,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*d+t*l*d)*C,e[8]=x*C,e[9]=(p*f*r-h*_*r-p*n*d+t*_*d+h*n*m-t*f*m)*C,e[10]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*m+t*o*m)*C,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*C,e[12]=P*C,e[13]=(h*_*i-p*f*i+p*n*u-t*_*u-h*n*g+t*f*g)*C,e[14]=(p*o*i-a*_*i-p*n*l+t*_*l+a*n*g-t*o*g)*C,e[15]=(a*f*i-h*o*i+h*n*l-t*f*l-a*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,_=a*h,g=a*f,m=o*f,y=l*c,v=l*h,x=l*f,P=n.x,E=n.y,C=n.z;return i[0]=(1-(_+m))*P,i[1]=(d+x)*P,i[2]=(p-v)*P,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(u+m))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(p+v)*C,i[9]=(g-y)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=us.set(i[0],i[1],i[2]).length();const a=us.set(i[4],i[5],i[6]).length(),o=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bn.copy(this);const c=1/r,h=1/a,f=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Un){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let d,p;if(o===Un)d=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Lr)d=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Un){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(a-r),u=(t+e)*c,d=(n+i)*h;let p,_;if(o===Un)p=(a+r)*f,_=-2*f;else if(o===Lr)p=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new T,bn=new Ie,Bg=new T(0,0,0),zg=new T(1,1,1),oi=new T,ca=new T,un=new T,Vh=new Ie,Hh=new on;class mn{constructor(e=0,t=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kg=0;const Gh=new T,fs=new on,Gn=new Ie,ha=new T,Qs=new T,Vg=new T,Hg=new on,Wh=new T(1,0,0),Xh=new T(0,1,0),qh=new T(0,0,1),$h={type:"added"},Gg={type:"removed"},ds={type:"childadded",child:null},Ul={type:"childremoved",child:null};class rt extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new T,t=new mn,n=new on,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ze}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Qs,ha,this.up):Gn.lookAt(ha,Qs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Gn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DEFAULT_UP=new T(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new T,Wn=new T,Nl=new T,Xn=new T,ps=new T,ms=new T,Yh=new T,Fl=new T,Ol=new T,Bl=new T;class dn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wn.subVectors(i,t),Wn.subVectors(n,t),Nl.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Wn),l=wn.dot(Nl),c=Wn.dot(Wn),h=Wn.dot(Nl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),Wn.subVectors(e,t),wn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),wn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ps.subVectors(i,n),ms.subVectors(r,n),Fl.subVectors(e,n);const l=ps.dot(Fl),c=ms.dot(Fl);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,i);const h=ps.dot(Ol),f=ms.dot(Ol);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ps,a);Bl.subVectors(e,r);const d=ps.dot(Bl),p=ms.dot(Bl);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ms,o);const g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return Yh.subVectors(r,i),o=(f-h)/(f-h+(d-p)),t.copy(i).addScaledVector(Yh,o);const m=1/(g+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ua={h:0,s:0,l:0};function zl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=Xc(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zl(a,r,e+1/3),this.g=zl(a,r,e),this.b=zl(a,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=Al(e.r),this.g=Al(e.g),this.b=Al(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ot.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ct(Wt.r*255,0,255))*65536+Math.round(Ct(Wt.g*255,0,255))*256+Math.round(Ct(Wt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=vn){ot.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(ua);const n=_r(li.h,ua.h,t),i=_r(li.s,ua.s,t),r=_r(li.l,ua.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new xe;xe.NAMES=Ud;let Wg=0;class $t extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Vi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vi extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yn=Xg();function Xg(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function rn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ct(s,-65504,65504),Yn.floatView[0]=s;const e=Yn.uint32View[0],t=e>>23&511;return Yn.baseTable[t]+((e&8388607)>>Yn.shiftTable[t])}function cr(s){const e=s>>10;return Yn.uint32View[0]=Yn.mantissaTable[Yn.offsetTable[e]+(s&1023)]+Yn.exponentTable[e],Yn.floatView[0]}const qg={toHalfFloat:rn,fromHalfFloat:cr},Ut=new T,fa=new Z;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ir,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Us("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ir&&(e.usage=this.usage),e}}class $g extends xt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Yg extends xt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Zg extends xt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Jg extends xt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class $c extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kg extends xt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Yc extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jg extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=cr(this.array[e*this.itemSize]);return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=rn(t),this}getY(e){let t=cr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=rn(t),this}getZ(e){let t=cr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=rn(t),this}getW(e){let t=cr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=rn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this.array[e+3]=rn(r),this}}class Ae extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qg=0;const _n=new Ie,kl=new rt,gs=new T,fn=new Qt,er=new Qt,Bt=new T;class Qe extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Yc:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fn.min,er.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,er.max),fn.expandByPoint(Bt)):(fn.expandByPoint(er.min),fn.expandByPoint(er.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bt.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),Bt.add(gs)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new T,l[L]=new T;const c=new T,h=new T,f=new T,u=new Z,d=new Z,p=new Z,_=new T,g=new T;function m(L,b,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),h.sub(c),f.sub(c),d.sub(u),p.sub(u);const R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(R),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(R),o[L].add(_),o[b].add(_),o[M].add(_),l[L].add(g),l[b].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,b=y.length;L<b;++L){const M=y[L],R=M.start,U=M.count;for(let N=R,D=R+U;N<D;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new T,x=new T,P=new T,E=new T;function C(L){P.fromBufferAttribute(i,L),E.copy(P);const b=o[L];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(E,b);const R=x.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,R)}for(let L=0,b=y.length;L<b;++L){const M=y[L],R=M.start,U=M.count;for(let N=R,D=R+U;N<D;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,f=new T;if(e)for(let u=0,d=e.count;u<d;u+=3){const p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new xt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new Ie,wi=new Ws,da=new qt,Jh=new T,_s=new T,vs=new T,xs=new T,Vl=new T,pa=new T,ma=new Z,ga=new Z,_a=new Z,Kh=new T,jh=new T,Qh=new T,va=new T,xa=new T;class It extends rt{constructor(e=new Qe,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Vl.fromBufferAttribute(f,e),a?pa.addScaledVector(Vl,h):pa.addScaledVector(Vl.sub(t),h))}t.add(pa)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(da.containsPoint(wi.origin)===!1&&(wi.intersectSphere(da,Jh)===null||wi.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,P=v;x<P;x+=3){const E=o.getX(x),C=o.getX(x+1),L=o.getX(x+2);i=ya(this,m,e,n,c,h,f,E,C,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=o.getX(g),v=o.getX(g+1),x=o.getX(g+2);i=ya(this,a,e,n,c,h,f,y,v,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=y,P=v;x<P;x+=3){const E=x,C=x+1,L=x+2;i=ya(this,m,e,n,c,h,f,E,C,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const y=g,v=g+1,x=g+2;i=ya(this,a,e,n,c,h,f,y,v,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function e_(s,e,t,n,i,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===jn,o),l===null)return null;xa.copy(o),xa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xa);return c<t.near||c>t.far?null:{distance:c,point:xa.clone(),object:s}}function ya(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,_s),s.getVertexPosition(l,vs),s.getVertexPosition(c,xs);const h=e_(s,e,t,n,_s,vs,xs,va);if(h){i&&(ma.fromBufferAttribute(i,o),ga.fromBufferAttribute(i,l),_a.fromBufferAttribute(i,c),h.uv=dn.getInterpolation(va,_s,vs,xs,ma,ga,_a,new Z)),r&&(ma.fromBufferAttribute(r,o),ga.fromBufferAttribute(r,l),_a.fromBufferAttribute(r,c),h.uv1=dn.getInterpolation(va,_s,vs,xs,ma,ga,_a,new Z)),a&&(Kh.fromBufferAttribute(a,o),jh.fromBufferAttribute(a,l),Qh.fromBufferAttribute(a,c),h.normal=dn.getInterpolation(va,_s,vs,xs,Kh,jh,Qh,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new T,materialIndex:0};dn.getNormal(_s,vs,xs,f.normal),h.face=f}return h}class is extends Qe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(f,2));function p(_,g,m,y,v,x,P,E,C,L,b){const M=x/C,R=P/L,U=x/2,N=P/2,D=E/2,O=C+1,G=L+1;let te=0,W=0;const he=new T;for(let pe=0;pe<G;pe++){const fe=pe*R-N;for(let He=0;He<O;He++){const et=He*M-U;he[_]=et*y,he[g]=fe*v,he[m]=D,c.push(he.x,he.y,he.z),he[_]=0,he[g]=0,he[m]=E>0?1:-1,h.push(he.x,he.y,he.z),f.push(He/C),f.push(1-pe/L),te+=1}}for(let pe=0;pe<L;pe++)for(let fe=0;fe<C;fe++){const He=u+fe+O*pe,et=u+fe+O*(pe+1),X=u+(fe+1)+O*(pe+1),ie=u+(fe+1)+O*pe;l.push(He,et,ie),l.push(et,X,ie),W+=6}o.addGroup(d,W,b),d+=W,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=zs(s[t]);for(const i in n)e[i]=n[i]}return e}function t_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Nd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Fd={clone:zs,merge:Zt};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zo extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new T,eu=new Z,tu=new Z;class zt extends Zo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Ms=1;class Od extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(ys,Ms,e,t);i.layers=this.layers,this.add(i);const r=new zt(ys,Ms,e,t);r.layers=this.layers,this.add(r);const a=new zt(ys,Ms,e,t);a.layers=this.layers,this.add(a);const o=new zt(ys,Ms,e,t);o.layers=this.layers,this.add(o);const l=new zt(ys,Ms,e,t);l.layers=this.layers,this.add(l);const c=new zt(ys,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Yr extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qn,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bd extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new is(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Jn});r.uniforms.tEquirect.value=t;const a=new It(i,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Nt),new Od(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Hl=new T,s_=new T,r_=new Ze;class fi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hl.subVectors(n,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||r_.getNormalMatrix(e),i=this.coplanarPoint(Hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new qt,Ma=new T;class Zr{constructor(e=new fi,t=new fi,n=new fi,i=new fi,r=new fi,a=new fi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,u-c,g-d,x-m).normalize(),n[1].setComponents(l+r,u+c,g+d,x+m).normalize(),n[2].setComponents(l+a,u+h,g+p,x+y).normalize(),n[3].setComponents(l-a,u-h,g-p,x-y).normalize(),n[4].setComponents(l-o,u-f,g-_,x-v).normalize(),t===Un)n[5].setComponents(l+o,u+f,g+_,x+v).normalize();else if(t===Lr)n[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ma.x=i.normal.x>0?e.max.x:e.min.x,Ma.y=i.normal.y>0?e.max.y:e.min.y,Ma.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function a_(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l._updateRange,u=l.updateRanges;if(s.bindBuffer(c,o),f.count===-1&&u.length===0&&s.bufferSubData(c,0,h),u.length!==0){for(let d=0,p=u.length;d<p;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(s.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Xs extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*u-a;for(let v=0;v<c;v++){const x=v*f-r;p.push(x,-y,0),_.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const v=y+c*m,x=y+c*(m+1),P=y+1+c*(m+1),E=y+1+c*m;d.push(v,x,E),d.push(x,P,E)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,__=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:o_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:h_,alphatest_fragment:u_,alphatest_pars_fragment:f_,aomap_fragment:d_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:g_,begin_vertex:__,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:y_,bumpmap_pars_fragment:M_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:E_,color_fragment:A_,color_pars_fragment:T_,color_pars_vertex:C_,color_vertex:R_,common:P_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:L_,displacementmap_pars_vertex:D_,displacementmap_vertex:U_,emissivemap_fragment:N_,emissivemap_pars_fragment:F_,colorspace_fragment:O_,colorspace_pars_fragment:B_,envmap_fragment:z_,envmap_common_pars_fragment:k_,envmap_pars_fragment:V_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:Q_,envmap_vertex:G_,fog_vertex:W_,fog_pars_vertex:X_,fog_fragment:q_,fog_pars_fragment:$_,gradientmap_pars_fragment:Y_,lightmap_pars_fragment:Z_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:K_,lights_pars_begin:j_,lights_toon_fragment:e0,lights_toon_pars_fragment:t0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:s0,lights_physical_pars_fragment:r0,lights_fragment_begin:a0,lights_fragment_maps:o0,lights_fragment_end:l0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:f0,map_fragment:d0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:v0,morphinstance_vertex:x0,morphcolor_vertex:y0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:b0,normal_fragment_begin:w0,normal_fragment_maps:E0,normal_pars_fragment:A0,normal_pars_vertex:T0,normal_vertex:C0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:U0,packing:N0,premultiplied_alpha_fragment:F0,project_vertex:O0,dithering_fragment:B0,dithering_pars_fragment:z0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:G0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:q0,skinning_pars_vertex:$0,skinning_vertex:Y0,skinnormal_vertex:Z0,specularmap_fragment:J0,specularmap_pars_fragment:K0,tonemapping_fragment:j0,tonemapping_pars_fragment:Q0,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:av,background_frag:ov,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:hv,cube_frag:uv,depth_vert:fv,depth_frag:dv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:yv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:bv,meshmatcap_vert:wv,meshmatcap_frag:Ev,meshnormal_vert:Av,meshnormal_frag:Tv,meshphong_vert:Cv,meshphong_frag:Rv,meshphysical_vert:Pv,meshphysical_frag:Iv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Nv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:zv},de={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},En={basic:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Zt([de.points,de.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Zt([de.common,de.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Zt([de.sprite,de.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Zt([de.common,de.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Zt([de.lights,de.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};En.physical={uniforms:Zt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Sa={r:0,b:0,g:0},Ai=new mn,kv=new Ie;function Vv(s,e,t,n,i,r,a){const o=new xe(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function p(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const x=p(y);x===null?m(o,l):x&&x.isColor&&(m(x,1),v=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,v){const x=p(v);x&&(x.isCubeTexture||x.mapping===Hs)?(h===void 0&&(h=new It(new is(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:zs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Ai)),h.material.toneMapped=ot.getTransfer(x.colorSpace)!==yt,(f!==x||u!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new It(new Xs(2,2),new Tn({name:"BackgroundMaterial",uniforms:zs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Sa,Nd(s)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:g}}function Hv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(M,R,U,N,D){let O=!1;const G=f(N,U,R);r!==G&&(r=G,c(r.object)),O=d(M,N,U,D),O&&p(M,N,U,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,x(M,R,U,N),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function f(M,R,U){const N=U.wireframe===!0;let D=n[M.id];D===void 0&&(D={},n[M.id]=D);let O=D[R.id];O===void 0&&(O={},D[R.id]=O);let G=O[N];return G===void 0&&(G=u(l()),O[N]=G),G}function u(M){const R=[],U=[],N=[];for(let D=0;D<t;D++)R[D]=0,U[D]=0,N[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:N,object:M,attributes:{},index:null}}function d(M,R,U,N){const D=r.attributes,O=R.attributes;let G=0;const te=U.getAttributes();for(const W in te)if(te[W].location>=0){const pe=D[W];let fe=O[W];if(fe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),pe===void 0||pe.attribute!==fe||fe&&pe.data!==fe.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function p(M,R,U,N){const D={},O=R.attributes;let G=0;const te=U.getAttributes();for(const W in te)if(te[W].location>=0){let pe=O[W];pe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const fe={};fe.attribute=pe,pe&&pe.data&&(fe.data=pe.data),D[W]=fe,G++}r.attributes=D,r.attributesNum=G,r.index=N}function _(){const M=r.newAttributes;for(let R=0,U=M.length;R<U;R++)M[R]=0}function g(M){m(M,0)}function m(M,R){const U=r.newAttributes,N=r.enabledAttributes,D=r.attributeDivisors;U[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),D[M]!==R&&(s.vertexAttribDivisor(M,R),D[M]=R)}function y(){const M=r.newAttributes,R=r.enabledAttributes;for(let U=0,N=R.length;U<N;U++)R[U]!==M[U]&&(s.disableVertexAttribArray(U),R[U]=0)}function v(M,R,U,N,D,O,G){G===!0?s.vertexAttribIPointer(M,R,U,D,O):s.vertexAttribPointer(M,R,U,N,D,O)}function x(M,R,U,N){_();const D=N.attributes,O=U.getAttributes(),G=R.defaultAttributeValues;for(const te in O){const W=O[te];if(W.location>=0){let he=D[te];if(he===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const pe=he.normalized,fe=he.itemSize,He=e.get(he);if(He===void 0)continue;const et=He.buffer,X=He.type,ie=He.bytesPerElement,q=X===s.INT||X===s.UNSIGNED_INT||he.gpuType===zo;if(he.isInterleavedBufferAttribute){const ne=he.data,Le=ne.stride,We=he.offset;if(ne.isInstancedInterleavedBuffer){for(let ke=0;ke<W.locationSize;ke++)m(W.location+ke,ne.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ke=0;ke<W.locationSize;ke++)g(W.location+ke);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ke=0;ke<W.locationSize;ke++)v(W.location+ke,fe/W.locationSize,X,pe,Le*ie,(We+fe/W.locationSize*ke)*ie,q)}else{if(he.isInstancedBufferAttribute){for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne,he.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ne=0;ne<W.locationSize;ne++)g(W.location+ne);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ne=0;ne<W.locationSize;ne++)v(W.location+ne,fe/W.locationSize,X,pe,fe*ie,fe/W.locationSize*ne*ie,q)}}else if(G!==void 0){const pe=G[te];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(W.location,pe);break;case 3:s.vertexAttrib3fv(W.location,pe);break;case 4:s.vertexAttrib4fv(W.location,pe);break;default:s.vertexAttrib1fv(W.location,pe)}}}}y()}function P(){L();for(const M in n){const R=n[M];for(const U in R){const N=R[U];for(const D in N)h(N[D].object),delete N[D];delete R[U]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const U in R){const N=R[U];for(const D in N)h(N[D].object),delete N[D];delete R[U]}delete n[M.id]}function C(M){for(const R in n){const U=n[R];if(U[M.id]===void 0)continue;const N=U[M.id];for(const D in N)h(N[D].object),delete N[D];delete U[M.id]}}function L(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Gv(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let p=0;p<f;p++)d+=h[p];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],h[p],u[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];for(let _=0;_<u.length;_++)t.update(p,n,u[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Kt&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===Gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==On&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==an&&!C)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:x,maxSamples:P}}function Xv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new fi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,v=y*4;let x=m.clippingState||null;l.value=x,x=h(p,u,v,d);for(let P=0;P!==v;++P)x[P]=t[P];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==_;++v,x+=4)a.copy(f[v]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function qv(s){let e=new WeakMap;function t(a,o){return o===Sr?a.mapping=Qn:o===br&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sr||o===br)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bd(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Jo extends Zo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,nu=[.125,.215,.35,.446,.526,.582],Fi=20,Gl=new Jo,iu=new xe;let Wl=null,Xl=0,ql=0,$l=!1;const Ni=(1+Math.sqrt(5))/2,Ss=1/Ni,su=[new T(-Ni,Ss,0),new T(Ni,Ss,0),new T(-Ss,0,Ni),new T(Ss,0,Ni),new T(0,Ni,-Ss),new T(0,Ni,Ss),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,ql),this._renderer.xr.enabled=$l,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Gs,format:Kt,colorSpace:ni,depthBuffer:!1},i=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$v(r)),this._blurMaterial=Yv(r,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,n,i){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(iu),h.toneMapping=Kn,h.autoClear=!1;const d=new vi({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),p=new It(new is,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(iu),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const v=this._cubeSize;ba(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qn||e.mapping===pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Gl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=su[(i-r-1)%su.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new It(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const m=[];let y=0;for(let C=0;C<Fi;++C){const L=C/_,b=Math.exp(-L*L/2);m.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;const x=this._sizeLods[i],P=3*x*(i>v-Ps?i-v+Ps:0),E=4*(this._cubeSize-x);ba(t,P,E,3*x,2*x),l.setRenderTarget(t),l.render(f,Gl)}}function $v(s){const e=[],t=[],n=[];let i=s;const r=s-Ps+1+nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ps?l=nu[a-s+Ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*d),v=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let E=0;E<d;E++){const C=E%3*2/3-1,L=E>2?0:-1,b=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];y.set(b,_*p*E),v.set(u,g*p*E);const M=[E,E,E,E,E,E];x.set(M,m*p*E)}const P=new Qe;P.setAttribute("position",new xt(y,_)),P.setAttribute("uv",new xt(v,g)),P.setAttribute("faceIndex",new xt(x,m)),e.push(P),i>Ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(s,e,t){const n=new An(s,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Yv(s,e,t){const n=new Float32Array(Fi),i=new T(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function au(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ou(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zv(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sr||l===br,h=l===Qn||l===pi;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new xc(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new xc(s)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kv(s,e,t,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);for(const p in u.morphAttributes){const _=u.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}u.removeEventListener("dispose",a),delete i[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],s.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,p=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const P=y[v+0],E=y[v+1],C=y[v+2];u.push(P,E,E,C,C,P)}}else if(p!==void 0){const y=p.array;_=p.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const P=v+0,E=v+1,C=v+2;u.push(P,E,E,C,C,P)}}else return;const g=new(Pd(u)?Yc:$c)(u,1);g.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function jv(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,u*a,p),t.update(d,n,p))}function h(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function f(u,d,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];for(let y=0;y<_.length;y++)t.update(m,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Qv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ex(s,e,t){const n=new WeakMap,i=new ft;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let x=o.attributes.position.count*v,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*P*4*f),C=new $o(E,x,P,f);C.type=an,C.needsUpdate=!0;const L=v*4;for(let M=0;M<f;M++){const R=g[M],U=m[M],N=y[M],D=x*P*4*M;for(let O=0;O<R.count;O++){const G=O*L;d===!0&&(i.fromBufferAttribute(R,O),E[D+G+0]=i.x,E[D+G+1]=i.y,E[D+G+2]=i.z,E[D+G+3]=0),p===!0&&(i.fromBufferAttribute(U,O),E[D+G+4]=i.x,E[D+G+5]=i.y,E[D+G+6]=i.z,E[D+G+7]=0),_===!0&&(i.fromBufferAttribute(N,O),E[D+G+8]=i.x,E[D+G+9]=i.y,E[D+G+10]=i.z,E[D+G+11]=N.itemSize===4?i.w:1)}}u={count:f,texture:C,size:new Z(x,P)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function tx(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Jc extends Rt{constructor(e,t,n,i,r,a,o,l,c,h=Hi){if(h!==Hi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=ei),n===void 0&&h===Zi&&(n=Yi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kd=new Rt,lu=new Jc(1,1),Vd=new $o,Hd=new qc,Gd=new Yr,cu=[],hu=[],uu=new Float32Array(16),fu=new Float32Array(9),du=new Float32Array(4);function qs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=cu[i];if(r===void 0&&(r=new Float32Array(i),cu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ko(s,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function nx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function ax(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;du.set(n),s.uniformMatrix2fv(this.addr,!1,du),Ot(t,n)}}function ox(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;fu.set(n),s.uniformMatrix3fv(this.addr,!1,fu),Ot(t,n)}}function lx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;uu.set(n),s.uniformMatrix4fv(this.addr,!1,uu),Ot(t,n)}}function cx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function ux(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function dx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function _x(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lu.compareFunction=Wc,r=lu):r=kd,t.setTexture2D(e||r,i)}function vx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hd,i)}function xx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gd,i)}function yx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vd,i)}function Mx(s){switch(s){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return fx;case 5125:return dx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return yx}}function Sx(s,e){s.uniform1fv(this.addr,e)}function bx(s,e){const t=qs(e,this.size,2);s.uniform2fv(this.addr,t)}function wx(s,e){const t=qs(e,this.size,3);s.uniform3fv(this.addr,t)}function Ex(s,e){const t=qs(e,this.size,4);s.uniform4fv(this.addr,t)}function Ax(s,e){const t=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tx(s,e){const t=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cx(s,e){const t=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Rx(s,e){s.uniform1iv(this.addr,e)}function Px(s,e){s.uniform2iv(this.addr,e)}function Ix(s,e){s.uniform3iv(this.addr,e)}function Lx(s,e){s.uniform4iv(this.addr,e)}function Dx(s,e){s.uniform1uiv(this.addr,e)}function Ux(s,e){s.uniform2uiv(this.addr,e)}function Nx(s,e){s.uniform3uiv(this.addr,e)}function Fx(s,e){s.uniform4uiv(this.addr,e)}function Ox(s,e,t){const n=this.cache,i=e.length,r=Ko(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||kd,r[a])}function Bx(s,e,t){const n=this.cache,i=e.length,r=Ko(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hd,r[a])}function zx(s,e,t){const n=this.cache,i=e.length,r=Ko(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Gd,r[a])}function kx(s,e,t){const n=this.cache,i=e.length,r=Ko(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vd,r[a])}function Vx(s){switch(s){case 5126:return Sx;case 35664:return bx;case 35665:return wx;case 35666:return Ex;case 35674:return Ax;case 35675:return Tx;case 35676:return Cx;case 5124:case 35670:return Rx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Ux;case 36295:return Nx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}class Hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mx(t.type)}}class Gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vx(t.type)}}class Wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function pu(s,e){s.seq.push(e),s.map[e.id]=e}function Xx(s,e,t){const n=s.name,i=n.length;for(Yl.lastIndex=0;;){const r=Yl.exec(n),a=Yl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pu(t,c===void 0?new Hx(o,s,e):new Gx(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Wx(o),pu(t,f)),t=f}}}class Qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Xx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function mu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const qx=37297;let $x=0;function Yx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Zx(s){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(s);let n;switch(e===t?n="":e===Pr&&t===Rr?n="LinearDisplayP3ToLinearSRGB":e===Rr&&t===Pr&&(n="LinearSRGBToLinearDisplayP3"),s){case ni:case $r:return[n,"LinearTransferOETF"];case vn:case qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function gu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Yx(s.getShaderSource(e),a)}else return i}function Jx(s,e){const t=Zx(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kx(s,e){let t;switch(e){case cd:t="Linear";break;case hd:t="Reinhard";break;case ud:t="Cineon";break;case fd:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wa=new T;function jx(){ot.getLuminanceCoefficients(wa);const s=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function ey(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ty(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function hr(s){return s!==""}function _u(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(s){return s.replace(ny,sy)}const iy=new Map;function sy(s,e){let t=Ue[e];if(t===void 0){const n=iy.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(s){return s.replace(ry,ay)}function ay(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function ly(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qn:case pi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function hy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xr:e="ENVMAP_BLENDING_MULTIPLY";break;case od:e="ENVMAP_BLENDING_MIX";break;case ld:e="ENVMAP_BLENDING_ADD";break}return e}function uy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fy(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=oy(t),c=ly(t),h=cy(t),f=hy(t),u=uy(t),d=Qx(t),p=ey(r),_=i.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hr).join(`
`),m.length>0&&(m+=`
`)):(g=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Jx("linearToOutputTexel",t.outputColorSpace),jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=yc(a),a=_u(a,t),a=vu(a,t),o=yc(o),o=_u(o,t),o=vu(o,t),a=xu(a),o=xu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+g+a,x=y+m+o,P=mu(i,i.VERTEX_SHADER,v),E=mu(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(R){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(P).trim(),D=i.getShaderInfoLog(E).trim();let O=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,E);else{const te=gu(i,P,"vertex"),W=gu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+te+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||D==="")&&(G=!1);G&&(R.diagnostics={runnable:O,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:D,prefix:m}})}i.deleteShader(P),i.deleteShader(E),L=new Qa(i,_),b=ty(i,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,qx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$x++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=E,this}let dy=0;class py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new my(e),t.set(e,n)),n}}class my{constructor(e){this.id=dy++,this.code=e,this.usedTimes=0}}function gy(s,e,t,n,i,r,a){const o=new Yo,l=new py,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,R,U,N){const D=U.fog,O=N.geometry,G=b.isMeshStandardMaterial?U.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),W=te&&te.mapping===Hs?te.image.height:null,he=p[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=pe!==void 0?pe.length:0;let He=0;O.morphAttributes.position!==void 0&&(He=1),O.morphAttributes.normal!==void 0&&(He=2),O.morphAttributes.color!==void 0&&(He=3);let et,X,ie,q;if(he){const lt=En[he];et=lt.vertexShader,X=lt.fragmentShader}else et=b.vertexShader,X=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),q=l.getFragmentShaderID(b);const ne=s.getRenderTarget(),Le=N.isInstancedMesh===!0,We=N.isBatchedMesh===!0,ke=!!b.map,at=!!b.matcap,A=!!te,oe=!!b.aoMap,se=!!b.lightMap,_e=!!b.bumpMap,Y=!!b.normalMap,De=!!b.displacementMap,ge=!!b.emissiveMap,Se=!!b.metalnessMap,I=!!b.roughnessMap,S=b.anisotropy>0,V=b.clearcoat>0,j=b.dispersion>0,K=b.iridescence>0,ee=b.sheen>0,Pe=b.transmission>0,me=S&&!!b.anisotropyMap,Me=V&&!!b.clearcoatMap,Ye=V&&!!b.clearcoatNormalMap,ae=V&&!!b.clearcoatRoughnessMap,ye=K&&!!b.iridescenceMap,nt=K&&!!b.iridescenceThicknessMap,Ge=ee&&!!b.sheenColorMap,be=ee&&!!b.sheenRoughnessMap,Xe=!!b.specularMap,tt=!!b.specularColorMap,St=!!b.specularIntensityMap,F=Pe&&!!b.transmissionMap,le=Pe&&!!b.thicknessMap,J=!!b.gradientMap,Q=!!b.alphaMap,ue=b.alphaTest>0,Oe=!!b.alphaHash,it=!!b.extensions;let Lt=Kn;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const Vt={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:et,fragmentShader:X,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:We,batchingColor:We&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ni,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:at,envMap:A,envMapMode:A&&te.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:se,bumpMap:_e,normalMap:Y,displacementMap:u&&De,emissiveMap:ge,normalMapObjectSpace:Y&&b.normalMapType===Sd,normalMapTangentSpace:Y&&b.normalMapType===_i,metalnessMap:Se,roughnessMap:I,anisotropy:S,anisotropyMap:me,clearcoat:V,clearcoatMap:Me,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ae,dispersion:j,iridescence:K,iridescenceMap:ye,iridescenceThicknessMap:nt,sheen:ee,sheenColorMap:Ge,sheenRoughnessMap:be,specularMap:Xe,specularColorMap:tt,specularIntensityMap:St,transmission:Pe,transmissionMap:F,thicknessMap:le,gradientMap:J,opaque:b.transparent===!1&&b.blending===Vi&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:Oe,combine:b.combine,mapUv:ke&&_(b.map.channel),aoMapUv:oe&&_(b.aoMap.channel),lightMapUv:se&&_(b.lightMap.channel),bumpMapUv:_e&&_(b.bumpMap.channel),normalMapUv:Y&&_(b.normalMap.channel),displacementMapUv:De&&_(b.displacementMap.channel),emissiveMapUv:ge&&_(b.emissiveMap.channel),metalnessMapUv:Se&&_(b.metalnessMap.channel),roughnessMapUv:I&&_(b.roughnessMap.channel),anisotropyMapUv:me&&_(b.anisotropyMap.channel),clearcoatMapUv:Me&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(b.sheenRoughnessMap.channel),specularMapUv:Xe&&_(b.specularMap.channel),specularColorMapUv:tt&&_(b.specularColorMap.channel),specularIntensityMapUv:St&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:le&&_(b.thicknessMap.channel),alphaMapUv:Q&&_(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Y||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(ke||Q),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:it&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&b.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function x(b){const M=p[b.type];let R;if(M){const U=En[M];R=Fd.clone(U.uniforms)}else R=b.uniforms;return R}function P(b,M){let R;for(let U=0,N=h.length;U<N;U++){const D=h[U];if(D.cacheKey===M){R=D,++R.usedTimes;break}}return R===void 0&&(R=new fy(s,M,b,r),h.push(R)),R}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:L}}function _y(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function vy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Su(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,u,d,p,_,g){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:p,renderOrder:f.renderOrder,z:_,group:g},s[e]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=p,m.renderOrder=f.renderOrder,m.z=_,m.group=g),e++,m}function o(f,u,d,p,_,g){const m=a(f,u,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(f,u,d,p,_,g){const m=a(f,u,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,u){t.length>1&&t.sort(f||vy),n.length>1&&n.sort(u||Mu),i.length>1&&i.sort(u||Mu)}function h(){for(let f=e,u=s.length;f<u;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function xy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Su,s.set(n,[a])):i>=r.length?(a=new Su,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function yy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new xe};break;case"SpotLight":t={position:new T,direction:new T,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function My(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Sy=0;function by(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wy(s){const e=new yy,t=My(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new Ie,a=new Ie;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,y=0,v=0,x=0,P=0,E=0,C=0;c.sort(by);for(let b=0,M=c.length;b<M;b++){const R=c[b],U=R.color,N=R.intensity,D=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*N,f+=U.g*N,u+=U.b*N;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],N);C++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const te=R.shadow,W=t.get(R);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=G,d++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(U).multiplyScalar(N),G.distance=D,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const te=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,te.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=te.matrix,R.castShadow){const W=t.get(R);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=O,x++}_++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(U).multiplyScalar(N),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=G,g++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const te=R.shadow,W=t.get(R);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=R.shadow.matrix,v++}n.point[p]=G,p++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(N),G.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[m]=G,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.directionalLength=d,L.pointLength=p,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=C,n.version=Sy++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function bu(s){const e=new wy(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ey(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new bu(s),e.set(i,[o])):r>=a.length?(o=new bu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Kc extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jc extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cy(s,e,t){let n=new Zr;const i=new Z,r=new Z,a=new ft,o=new Kc({depthPacking:Md}),l=new jc,c={},h=t.maxTextureSize,f={[jn]:jt,[jt]:jn,[Ln]:Ln},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Ay,fragmentShader:Ty}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new Qe;p.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let m=this.type;this.render=function(E,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Jn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=m!==In&&this.type===In,D=m===In&&this.type!==In;for(let O=0,G=E.length;O<G;O++){const te=E[O],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const he=W.getFrameExtents();if(i.multiply(he),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,W.mapSize.y=r.y)),W.map===null||N===!0||D===!0){const fe=this.type!==In?{minFilter:kt,magFilter:kt}:{};W.map!==null&&W.map.dispose(),W.map=new An(i.x,i.y,fe),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const pe=W.getViewportCount();for(let fe=0;fe<pe;fe++){const He=W.getViewport(fe);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),U.viewport(a),W.updateMatrices(te,fe),n=W.getFrustum(),x(C,L,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===In&&y(W,L),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(b,M,R)};function y(E,C){const L=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,L,u,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,L,d,_,null)}function v(E,C,L,b){let M=null;const R=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=M.uuid,N=C.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let O=D[N];O===void 0&&(O=M.clone(),D[N]=O,C.addEventListener("dispose",P)),M=O}if(M.visible=C.visible,M.wireframe=C.wireframe,b===In?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=s.properties.get(M);U.light=L}return M}function x(E,C,L,b,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===In)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const N=e.update(E),D=E.material;if(Array.isArray(D)){const O=N.groups;for(let G=0,te=O.length;G<te;G++){const W=O[G],he=D[W.materialIndex];if(he&&he.visible){const pe=v(E,he,b,M);E.onBeforeShadow(s,E,C,L,N,pe,W),s.renderBufferDirect(L,null,N,pe,E,W),E.onAfterShadow(s,E,C,L,N,pe,W)}}}else if(D.visible){const O=v(E,D,b,M);E.onBeforeShadow(s,E,C,L,N,O,null),s.renderBufferDirect(L,null,N,O,E,null),E.onAfterShadow(s,E,C,L,N,O,null)}}const U=E.children;for(let N=0,D=U.length;N<D;N++)x(U[N],C,L,b,M)}function P(E){E.target.removeEventListener("dispose",P);for(const L in c){const b=c[L],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function Ry(s){function e(){let F=!1;const le=new ft;let J=null;const Q=new ft(0,0,0,0);return{setMask:function(ue){J!==ue&&!F&&(s.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){F=ue},setClear:function(ue,Oe,it,Lt,Vt){Vt===!0&&(ue*=Lt,Oe*=Lt,it*=Lt),le.set(ue,Oe,it,Lt),Q.equals(le)===!1&&(s.clearColor(ue,Oe,it,Lt),Q.copy(le))},reset:function(){F=!1,J=null,Q.set(-1,0,0,0)}}}function t(){let F=!1,le=null,J=null,Q=null;return{setTest:function(ue){ue?q(s.DEPTH_TEST):ne(s.DEPTH_TEST)},setMask:function(ue){le!==ue&&!F&&(s.depthMask(ue),le=ue)},setFunc:function(ue){if(J!==ue){switch(ue){case ed:s.depthFunc(s.NEVER);break;case td:s.depthFunc(s.ALWAYS);break;case nd:s.depthFunc(s.LESS);break;case Mr:s.depthFunc(s.LEQUAL);break;case id:s.depthFunc(s.EQUAL);break;case sd:s.depthFunc(s.GEQUAL);break;case rd:s.depthFunc(s.GREATER);break;case ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ue}},setLocked:function(ue){F=ue},setClear:function(ue){Q!==ue&&(s.clearDepth(ue),Q=ue)},reset:function(){F=!1,le=null,J=null,Q=null}}}function n(){let F=!1,le=null,J=null,Q=null,ue=null,Oe=null,it=null,Lt=null,Vt=null;return{setTest:function(lt){F||(lt?q(s.STENCIL_TEST):ne(s.STENCIL_TEST))},setMask:function(lt){le!==lt&&!F&&(s.stencilMask(lt),le=lt)},setFunc:function(lt,kn,Pn){(J!==lt||Q!==kn||ue!==Pn)&&(s.stencilFunc(lt,kn,Pn),J=lt,Q=kn,ue=Pn)},setOp:function(lt,kn,Pn){(Oe!==lt||it!==kn||Lt!==Pn)&&(s.stencilOp(lt,kn,Pn),Oe=lt,it=kn,Lt=Pn)},setLocked:function(lt){F=lt},setClear:function(lt){Vt!==lt&&(s.clearStencil(lt),Vt=lt)},reset:function(){F=!1,le=null,J=null,Q=null,ue=null,Oe=null,it=null,Lt=null,Vt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,p=!1,_=null,g=null,m=null,y=null,v=null,x=null,P=null,E=new xe(0,0,0),C=0,L=!1,b=null,M=null,R=null,U=null,N=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),O=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),O=G>=2);let W=null,he={};const pe=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),He=new ft().fromArray(pe),et=new ft().fromArray(fe);function X(F,le,J,Q){const ue=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(F,Oe),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<J;it++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,ue):s.texImage2D(le+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ue);return Oe}const ie={};ie[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),q(s.DEPTH_TEST),r.setFunc(Mr),_e(!1),Y(fc),q(s.CULL_FACE),oe(Jn);function q(F){c[F]!==!0&&(s.enable(F),c[F]=!0)}function ne(F){c[F]!==!1&&(s.disable(F),c[F]=!1)}function Le(F,le){return h[F]!==le?(s.bindFramebuffer(F,le),h[F]=le,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=le),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=le),!0):!1}function We(F,le){let J=u,Q=!1;if(F){J=f.get(le),J===void 0&&(J=[],f.set(le,J));const ue=F.textures;if(J.length!==ue.length||J[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,it=ue.length;Oe<it;Oe++)J[Oe]=s.COLOR_ATTACHMENT0+Oe;J.length=ue.length,Q=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Q=!0);Q&&s.drawBuffers(J)}function ke(F){return d!==F?(s.useProgram(F),d=F,!0):!1}const at={[di]:s.FUNC_ADD,[Of]:s.FUNC_SUBTRACT,[Bf]:s.FUNC_REVERSE_SUBTRACT};at[zf]=s.MIN,at[kf]=s.MAX;const A={[Vf]:s.ZERO,[Hf]:s.ONE,[Gf]:s.SRC_COLOR,[so]:s.SRC_ALPHA,[Zf]:s.SRC_ALPHA_SATURATE,[$f]:s.DST_COLOR,[Xf]:s.DST_ALPHA,[Wf]:s.ONE_MINUS_SRC_COLOR,[ro]:s.ONE_MINUS_SRC_ALPHA,[Yf]:s.ONE_MINUS_DST_COLOR,[qf]:s.ONE_MINUS_DST_ALPHA,[Jf]:s.CONSTANT_COLOR,[Kf]:s.ONE_MINUS_CONSTANT_COLOR,[jf]:s.CONSTANT_ALPHA,[Qf]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(F,le,J,Q,ue,Oe,it,Lt,Vt,lt){if(F===Jn){p===!0&&(ne(s.BLEND),p=!1);return}if(p===!1&&(q(s.BLEND),p=!0),F!==Ff){if(F!==_||lt!==L){if((g!==di||v!==di)&&(s.blendEquation(s.FUNC_ADD),g=di,v=di),lt)switch(F){case Vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFunc(s.ONE,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,y=null,x=null,P=null,E.set(0,0,0),C=0,_=F,L=lt}return}ue=ue||le,Oe=Oe||J,it=it||Q,(le!==g||ue!==v)&&(s.blendEquationSeparate(at[le],at[ue]),g=le,v=ue),(J!==m||Q!==y||Oe!==x||it!==P)&&(s.blendFuncSeparate(A[J],A[Q],A[Oe],A[it]),m=J,y=Q,x=Oe,P=it),(Lt.equals(E)===!1||Vt!==C)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Vt),E.copy(Lt),C=Vt),_=F,L=!1}function se(F,le){F.side===Ln?ne(s.CULL_FACE):q(s.CULL_FACE);let J=F.side===jt;le&&(J=!J),_e(J),F.blending===Vi&&F.transparent===!1?oe(Jn):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),i.setMask(F.colorWrite);const Q=F.stencilWrite;a.setTest(Q),Q&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ge(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function Y(F){F!==Df?(q(s.CULL_FACE),F!==M&&(F===fc?s.cullFace(s.BACK):F===Uf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ne(s.CULL_FACE),M=F}function De(F){F!==R&&(O&&s.lineWidth(F),R=F)}function ge(F,le,J){F?(q(s.POLYGON_OFFSET_FILL),(U!==le||N!==J)&&(s.polygonOffset(le,J),U=le,N=J)):ne(s.POLYGON_OFFSET_FILL)}function Se(F){F?q(s.SCISSOR_TEST):ne(s.SCISSOR_TEST)}function I(F){F===void 0&&(F=s.TEXTURE0+D-1),W!==F&&(s.activeTexture(F),W=F)}function S(F,le,J){J===void 0&&(W===null?J=s.TEXTURE0+D-1:J=W);let Q=he[J];Q===void 0&&(Q={type:void 0,texture:void 0},he[J]=Q),(Q.type!==F||Q.texture!==le)&&(W!==J&&(s.activeTexture(J),W=J),s.bindTexture(F,le||ie[F]),Q.type=F,Q.texture=le)}function V(){const F=he[W];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(F){He.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function be(F){et.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),et.copy(F))}function Xe(F,le){let J=l.get(le);J===void 0&&(J=new WeakMap,l.set(le,J));let Q=J.get(F);Q===void 0&&(Q=s.getUniformBlockIndex(le,F.name),J.set(F,Q))}function tt(F,le){const Q=l.get(le).get(F);o.get(le)!==Q&&(s.uniformBlockBinding(le,Q,F.__bindingPointIndex),o.set(le,Q))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,he={},h={},f=new WeakMap,u=[],d=null,p=!1,_=null,g=null,m=null,y=null,v=null,x=null,P=null,E=new xe(0,0,0),C=0,L=!1,b=null,M=null,R=null,U=null,N=null,He.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:q,disable:ne,bindFramebuffer:Le,drawBuffers:We,useProgram:ke,setBlending:oe,setMaterial:se,setFlipSided:_e,setCullFace:Y,setLineWidth:De,setPolygonOffset:ge,setScissorTest:Se,activeTexture:I,bindTexture:S,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:ye,texImage3D:nt,updateUBOMapping:Xe,uniformBlockBinding:tt,texStorage2D:Ye,texStorage3D:ae,texSubImage2D:ee,texSubImage3D:Pe,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:Ge,viewport:be,reset:St}}function Py(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Iy(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Ly(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Mc(s,e,t,n){const i=Dy(n);switch(t){case Oc:return s*e;case zc:return s*e;case kc:return s*e*2;case Ho:return s*e/i.components*i.byteLength;case qr:return s*e/i.components*i.byteLength;case Vc:return s*e*2/i.components*i.byteLength;case Go:return s*e*2/i.components*i.byteLength;case Bc:return s*e*3/i.components*i.byteLength;case Kt:return s*e*4/i.components*i.byteLength;case Wo:return s*e*4/i.components*i.byteLength;case fr:case dr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(s,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(s,8)*Math.max(e,8)/2;case ho:case uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gr:case Co:case Ro:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hc:case Po:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Io:case Lo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dy(s){switch(s){case On:case Uc:return{byteLength:1,components:1};case Os:case Nc:case Gs:return{byteLength:2,components:1};case ko:case Vo:return{byteLength:2,components:4};case ei:case zo:case an:return{byteLength:4,components:1};case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const Uy={contain:Py,cover:Iy,fill:Ly,getByteLength:Mc};function Ny(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,S){return d?new OffscreenCanvas(I,S):Dr("canvas")}function _(I,S,V){let j=1;const K=Se(I);if((K.width>V||K.height>V)&&(j=V/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ee=Math.floor(j*K.width),Pe=Math.floor(j*K.height);f===void 0&&(f=p(ee,Pe));const me=S?p(ee,Pe):f;return me.width=ee,me.height=Pe,me.getContext("2d").drawImage(I,0,0,ee,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ee+"x"+Pe+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==kt&&I.minFilter!==Nt}function m(I){s.generateMipmap(I)}function y(I,S,V,j,K=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=S;if(S===s.RED&&(V===s.FLOAT&&(ee=s.R32F),V===s.HALF_FLOAT&&(ee=s.R16F),V===s.UNSIGNED_BYTE&&(ee=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.R8UI),V===s.UNSIGNED_SHORT&&(ee=s.R16UI),V===s.UNSIGNED_INT&&(ee=s.R32UI),V===s.BYTE&&(ee=s.R8I),V===s.SHORT&&(ee=s.R16I),V===s.INT&&(ee=s.R32I)),S===s.RG&&(V===s.FLOAT&&(ee=s.RG32F),V===s.HALF_FLOAT&&(ee=s.RG16F),V===s.UNSIGNED_BYTE&&(ee=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RG8UI),V===s.UNSIGNED_SHORT&&(ee=s.RG16UI),V===s.UNSIGNED_INT&&(ee=s.RG32UI),V===s.BYTE&&(ee=s.RG8I),V===s.SHORT&&(ee=s.RG16I),V===s.INT&&(ee=s.RG32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),S===s.RGBA){const Pe=K?Cr:ot.getTransfer(j);V===s.FLOAT&&(ee=s.RGBA32F),V===s.HALF_FLOAT&&(ee=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ee=Pe===yt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(I,S){let V;return I?S===null||S===ei||S===Yi?V=s.DEPTH24_STENCIL8:S===an?V=s.DEPTH32F_STENCIL8:S===Os&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ei||S===Yi?V=s.DEPTH_COMPONENT24:S===an?V=s.DEPTH_COMPONENT32F:S===Os&&(V=s.DEPTH_COMPONENT16),V}function x(I,S){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==kt&&I.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function P(I){const S=I.target;S.removeEventListener("dispose",P),C(S),S.isVideoTexture&&h.delete(S)}function E(I){const S=I.target;S.removeEventListener("dispose",E),b(S)}function C(I){const S=n.get(I);if(S.__webglInit===void 0)return;const V=I.source,j=u.get(V);if(j){const K=j[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(I),Object.keys(j).length===0&&u.delete(V)}n.remove(I)}function L(I){const S=n.get(I);s.deleteTexture(S.__webglTexture);const V=I.source,j=u.get(V);delete j[S.__cacheKey],a.memory.textures--}function b(I){const S=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let K=0;K<S.__webglFramebuffer[j].length;K++)s.deleteFramebuffer(S.__webglFramebuffer[j][K]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=I.textures;for(let j=0,K=V.length;j<K;j++){const ee=n.get(V[j]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(I)}let M=0;function R(){M=0}function U(){const I=M;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),M+=1,I}function N(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function D(I,S){const V=n.get(I);if(I.isVideoTexture&&De(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(V,I,S);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function O(I,S){const V=n.get(I);if(I.version>0&&V.__version!==I.version){et(V,I,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function G(I,S){const V=n.get(I);if(I.version>0&&V.__version!==I.version){et(V,I,S);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function te(I,S){const V=n.get(I);if(I.version>0&&V.__version!==I.version){X(V,I,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const W={[wr]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[Er]:s.MIRRORED_REPEAT},he={[kt]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[Cs]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[ur]:s.LINEAR_MIPMAP_NEAREST,[Dn]:s.LINEAR_MIPMAP_LINEAR},pe={[bd]:s.NEVER,[Rd]:s.ALWAYS,[wd]:s.LESS,[Wc]:s.LEQUAL,[Ed]:s.EQUAL,[Cd]:s.GEQUAL,[Ad]:s.GREATER,[Td]:s.NOTEQUAL};function fe(I,S){if(S.type===an&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Nt||S.magFilter===ur||S.magFilter===Cs||S.magFilter===Dn||S.minFilter===Nt||S.minFilter===ur||S.minFilter===Cs||S.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,W[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,W[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,W[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,he[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kt||S.minFilter!==Cs&&S.minFilter!==Dn||S.type===an&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",P));const j=S.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const ee=N(S);if(ee!==I.__cacheKey){K[ee]===void 0&&(K[ee]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[ee].usedTimes++;const Pe=K[I.__cacheKey];Pe!==void 0&&(K[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&L(S)),I.__cacheKey=ee,I.__webglTexture=K[ee].texture}return V}function et(I,S,V){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const K=He(I,S),ee=S.source;t.bindTexture(j,I.__webglTexture,s.TEXTURE0+V);const Pe=n.get(ee);if(ee.version!==Pe.__version||K===!0){t.activeTexture(s.TEXTURE0+V);const me=ot.getPrimaries(ot.workingColorSpace),Me=S.colorSpace===$n?null:ot.getPrimaries(S.colorSpace),Ye=S.colorSpace===$n||me===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ae=_(S.image,!1,i.maxTextureSize);ae=ge(S,ae);const ye=r.convert(S.format,S.colorSpace),nt=r.convert(S.type);let Ge=y(S.internalFormat,ye,nt,S.colorSpace,S.isVideoTexture);fe(j,S);let be;const Xe=S.mipmaps,tt=S.isVideoTexture!==!0,St=Pe.__version===void 0||K===!0,F=ee.dataReady,le=x(S,ae);if(S.isDepthTexture)Ge=v(S.format===Zi,S.type),St&&(tt?t.texStorage2D(s.TEXTURE_2D,1,Ge,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Ge,ae.width,ae.height,0,ye,nt,null));else if(S.isDataTexture)if(Xe.length>0){tt&&St&&t.texStorage2D(s.TEXTURE_2D,le,Ge,Xe[0].width,Xe[0].height);for(let J=0,Q=Xe.length;J<Q;J++)be=Xe[J],tt?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,be.width,be.height,ye,nt,be.data):t.texImage2D(s.TEXTURE_2D,J,Ge,be.width,be.height,0,ye,nt,be.data);S.generateMipmaps=!1}else tt?(St&&t.texStorage2D(s.TEXTURE_2D,le,Ge,ae.width,ae.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,ye,nt,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,ae.width,ae.height,0,ye,nt,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&St&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Ge,Xe[0].width,Xe[0].height,ae.depth);for(let J=0,Q=Xe.length;J<Q;J++)if(be=Xe[J],S.format!==Kt)if(ye!==null)if(tt){if(F)if(S.layerUpdates.size>0){const ue=Mc(be.width,be.height,S.format,S.type);for(const Oe of S.layerUpdates){const it=be.data.subarray(Oe*ue/be.data.BYTES_PER_ELEMENT,(Oe+1)*ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Oe,be.width,be.height,1,ye,it,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,ae.depth,ye,be.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Ge,be.width,be.height,ae.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,be.width,be.height,ae.depth,ye,nt,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Ge,be.width,be.height,ae.depth,0,ye,nt,be.data)}else{tt&&St&&t.texStorage2D(s.TEXTURE_2D,le,Ge,Xe[0].width,Xe[0].height);for(let J=0,Q=Xe.length;J<Q;J++)be=Xe[J],S.format!==Kt?ye!==null?tt?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Ge,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,be.width,be.height,ye,nt,be.data):t.texImage2D(s.TEXTURE_2D,J,Ge,be.width,be.height,0,ye,nt,be.data)}else if(S.isDataArrayTexture)if(tt){if(St&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Ge,ae.width,ae.height,ae.depth),F)if(S.layerUpdates.size>0){const J=Mc(ae.width,ae.height,S.format,S.type);for(const Q of S.layerUpdates){const ue=ae.data.subarray(Q*J/ae.data.BYTES_PER_ELEMENT,(Q+1)*J/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ae.width,ae.height,1,ye,nt,ue)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ye,nt,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,ae.width,ae.height,ae.depth,0,ye,nt,ae.data);else if(S.isData3DTexture)tt?(St&&t.texStorage3D(s.TEXTURE_3D,le,Ge,ae.width,ae.height,ae.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ye,nt,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,ae.width,ae.height,ae.depth,0,ye,nt,ae.data);else if(S.isFramebufferTexture){if(St)if(tt)t.texStorage2D(s.TEXTURE_2D,le,Ge,ae.width,ae.height);else{let J=ae.width,Q=ae.height;for(let ue=0;ue<le;ue++)t.texImage2D(s.TEXTURE_2D,ue,Ge,J,Q,0,ye,nt,null),J>>=1,Q>>=1}}else if(Xe.length>0){if(tt&&St){const J=Se(Xe[0]);t.texStorage2D(s.TEXTURE_2D,le,Ge,J.width,J.height)}for(let J=0,Q=Xe.length;J<Q;J++)be=Xe[J],tt?F&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ye,nt,be):t.texImage2D(s.TEXTURE_2D,J,Ge,ye,nt,be);S.generateMipmaps=!1}else if(tt){if(St){const J=Se(ae);t.texStorage2D(s.TEXTURE_2D,le,Ge,J.width,J.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,nt,ae)}else t.texImage2D(s.TEXTURE_2D,0,Ge,ye,nt,ae);g(S)&&m(j),Pe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function X(I,S,V){if(S.image.length!==6)return;const j=He(I,S),K=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);const ee=n.get(K);if(K.version!==ee.__version||j===!0){t.activeTexture(s.TEXTURE0+V);const Pe=ot.getPrimaries(ot.workingColorSpace),me=S.colorSpace===$n?null:ot.getPrimaries(S.colorSpace),Me=S.colorSpace===$n||Pe===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let Q=0;Q<6;Q++)!Ye&&!ae?ye[Q]=_(S.image[Q],!0,i.maxCubemapSize):ye[Q]=ae?S.image[Q].image:S.image[Q],ye[Q]=ge(S,ye[Q]);const nt=ye[0],Ge=r.convert(S.format,S.colorSpace),be=r.convert(S.type),Xe=y(S.internalFormat,Ge,be,S.colorSpace),tt=S.isVideoTexture!==!0,St=ee.__version===void 0||j===!0,F=K.dataReady;let le=x(S,nt);fe(s.TEXTURE_CUBE_MAP,S);let J;if(Ye){tt&&St&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Xe,nt.width,nt.height);for(let Q=0;Q<6;Q++){J=ye[Q].mipmaps;for(let ue=0;ue<J.length;ue++){const Oe=J[ue];S.format!==Kt?Ge!==null?tt?F&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,Oe.width,Oe.height,Ge,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,Xe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,Oe.width,Oe.height,Ge,be,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,Xe,Oe.width,Oe.height,0,Ge,be,Oe.data)}}}else{if(J=S.mipmaps,tt&&St){J.length>0&&le++;const Q=Se(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ae){tt?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ye[Q].width,ye[Q].height,Ge,be,ye[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,ye[Q].width,ye[Q].height,0,Ge,be,ye[Q].data);for(let ue=0;ue<J.length;ue++){const it=J[ue].image[Q].image;tt?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,it.width,it.height,Ge,be,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,Xe,it.width,it.height,0,Ge,be,it.data)}}else{tt?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ge,be,ye[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,Ge,be,ye[Q]);for(let ue=0;ue<J.length;ue++){const Oe=J[ue];tt?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,Ge,be,Oe.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,Xe,Ge,be,Oe.image[Q])}}}g(S)&&m(s.TEXTURE_CUBE_MAP),ee.__version=K.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ie(I,S,V,j,K,ee){const Pe=r.convert(V.format,V.colorSpace),me=r.convert(V.type),Me=y(V.internalFormat,Pe,me,V.colorSpace);if(!n.get(S).__hasExternalTextures){const ae=Math.max(1,S.width>>ee),ye=Math.max(1,S.height>>ee);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,ee,Me,ae,ye,S.depth,0,Pe,me,null):t.texImage2D(K,ee,Me,ae,ye,0,Pe,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Y(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,K,n.get(V).__webglTexture,0,_e(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,K,n.get(V).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function q(I,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){const j=S.depthTexture,K=j&&j.isDepthTexture?j.type:null,ee=v(S.stencilBuffer,K),Pe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=_e(S);Y(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,ee,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ee,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,I)}else{const j=S.textures;for(let K=0;K<j.length;K++){const ee=j[K],Pe=r.convert(ee.format,ee.colorSpace),me=r.convert(ee.type),Me=y(ee.internalFormat,Pe,me,ee.colorSpace),Ye=_e(S);V&&Y(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Me,S.width,S.height):Y(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Me,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Me,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ne(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const j=n.get(S.depthTexture).__webglTexture,K=_e(S);if(S.depthTexture.format===Hi)Y(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===Zi)Y(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Le(I){const S=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=j}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ne(S.__webglFramebuffer,I)}else if(V){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),q(S.__webglDepthbuffer[j],I,!1);else{const K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),q(S.__webglDepthbuffer,I,!1);else{const j=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,K)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(I,S,V){const j=n.get(I);S!==void 0&&ie(j.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Le(I)}function ke(I){const S=I.texture,V=n.get(I),j=n.get(S);I.addEventListener("dispose",E);const K=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Pe=K.length>1;if(Pe||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,a.memory.textures++),ee){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let Me=0;Me<S.mipmaps.length;Me++)V.__webglFramebuffer[me][Me]=s.createFramebuffer()}else V.__webglFramebuffer[me]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)V.__webglFramebuffer[me]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let me=0,Me=K.length;me<Me;me++){const Ye=n.get(K[me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&Y(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<K.length;me++){const Me=K[me];V.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[me]);const Ye=r.convert(Me.format,Me.colorSpace),ae=r.convert(Me.type),ye=y(Me.internalFormat,Ye,ae,Me.colorSpace,I.isXRRenderTarget===!0),nt=_e(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,ye,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,V.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),q(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),fe(s.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)ie(V.__webglFramebuffer[me][Me],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else ie(V.__webglFramebuffer[me],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,Me=K.length;me<Me;me++){const Ye=K[me],ae=n.get(Ye);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),fe(s.TEXTURE_2D,Ye),ie(V.__webglFramebuffer,I,Ye,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),g(Ye)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,j.__webglTexture),fe(me,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)ie(V.__webglFramebuffer[Me],I,S,s.COLOR_ATTACHMENT0,me,Me);else ie(V.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,me,0);g(S)&&m(me),t.unbindTexture()}I.depthBuffer&&Le(I)}function at(I){const S=I.textures;for(let V=0,j=S.length;V<j;V++){const K=S[V];if(g(K)){const ee=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Pe=n.get(K).__webglTexture;t.bindTexture(ee,Pe),m(ee),t.unbindTexture()}}}const A=[],oe=[];function se(I){if(I.samples>0){if(Y(I)===!1){const S=I.textures,V=I.width,j=I.height;let K=s.COLOR_BUFFER_BIT;const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(I),me=S.length>1;if(me)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);const Ye=n.get(S[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,V,j,0,0,V,j,K,s.NEAREST),l===!0&&(A.length=0,oe.length=0,A.push(s.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(A.push(ee),oe.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,oe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);const Ye=n.get(S[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function _e(I){return Math.min(i.maxSamples,I.samples)}function Y(I){const S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function De(I){const S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function ge(I,S){const V=I.colorSpace,j=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==ni&&V!==$n&&(ot.getTransfer(V)===yt?(j!==Kt||K!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Se(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=We,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Y}function Wd(s,e){function t(n,i=$n){let r;const a=ot.getTransfer(i);if(n===On)return s.UNSIGNED_BYTE;if(n===ko)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return s.BYTE;if(n===Nc)return s.SHORT;if(n===Os)return s.UNSIGNED_SHORT;if(n===zo)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===Gs)return s.HALF_FLOAT;if(n===Oc)return s.ALPHA;if(n===Bc)return s.RGB;if(n===Kt)return s.RGBA;if(n===zc)return s.LUMINANCE;if(n===kc)return s.LUMINANCE_ALPHA;if(n===Hi)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===Ho)return s.RED;if(n===qr)return s.RED_INTEGER;if(n===Vc)return s.RG;if(n===Go)return s.RG_INTEGER;if(n===Wo)return s.RGBA_INTEGER;if(n===fr||n===dr||n===pr||n===mr)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===Mo||n===So||n===bo||n===wo||n===Eo||n===Ao||n===To)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===Co||n===Ro)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Po||n===Io||n===Lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Xd extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Is extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:Oy,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ky extends Bn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null;const _=new zy,g=t.getContextAttributes();let m=null,y=null;const v=[],x=[],P=new Z;let E=null;const C=new zt;C.layers.enable(1),C.viewport=new ft;const L=new zt;L.layers.enable(2),L.viewport=new ft;const b=[C,L],M=new Xd;M.layers.enable(1),M.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=v[X];return ie===void 0&&(ie=new Zl,v[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=v[X];return ie===void 0&&(ie=new Zl,v[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=v[X];return ie===void 0&&(ie=new Zl,v[X]=ie),ie.getHandSpace()};function N(X){const ie=x.indexOf(X.inputSource);if(ie===-1)return;const q=v[ie];q!==void 0&&(q.update(X.inputSource,X.frame,c||a),q.dispatchEvent({type:X.type,data:X.inputSource}))}function D(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",O);for(let X=0;X<v.length;X++){const ie=x[X];ie!==null&&(x[X]=null,v[X].disconnect(ie))}R=null,U=null,_.reset(),e.setRenderTarget(m),d=null,u=null,f=null,i=null,y=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",D),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new An(d.framebufferWidth,d.framebufferHeight,{format:Kt,type:On,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,q=null,ne=null;g.depth&&(ne=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?Zi:Hi,q=g.stencil?Yi:ei);const Le={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};f=new XRWebGLBinding(i,t),u=f.createProjectionLayer(Le),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new An(u.textureWidth,u.textureHeight,{format:Kt,type:On,depthTexture:new Jc(u.textureWidth,u.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(X){for(let ie=0;ie<X.removed.length;ie++){const q=X.removed[ie],ne=x.indexOf(q);ne>=0&&(x[ne]=null,v[ne].disconnect(q))}for(let ie=0;ie<X.added.length;ie++){const q=X.added[ie];let ne=x.indexOf(q);if(ne===-1){for(let We=0;We<v.length;We++)if(We>=x.length){x.push(q),ne=We;break}else if(x[We]===null){x[We]=q,ne=We;break}if(ne===-1)break}const Le=v[ne];Le&&Le.connect(q)}}const G=new T,te=new T;function W(X,ie,q){G.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(q.matrixWorld);const ne=G.distanceTo(te),Le=ie.projectionMatrix.elements,We=q.projectionMatrix.elements,ke=Le[14]/(Le[10]-1),at=Le[14]/(Le[10]+1),A=(Le[9]+1)/Le[5],oe=(Le[9]-1)/Le[5],se=(Le[8]-1)/Le[0],_e=(We[8]+1)/We[0],Y=ke*se,De=ke*_e,ge=ne/(-se+_e),Se=ge*-se;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Se),X.translateZ(ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Le[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const I=ke+ge,S=at+ge,V=Y-Se,j=De+(ne-Se),K=A*at/S*I,ee=oe*at/S*I;X.projectionMatrix.makePerspective(V,j,K,ee,I,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function he(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ie=X.near,q=X.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(q=_.depthFar)),M.near=L.near=C.near=ie,M.far=L.far=C.far=q,(R!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,U=M.far);const ne=X.parent,Le=M.cameras;he(M,ne);for(let We=0;We<Le.length;We++)he(Le[We],ne);Le.length===2?W(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),pe(X,M,ne)};function pe(X,ie,q){q===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(q.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Bs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let fe=null;function He(X,ie){if(h=ie.getViewerPose(c||a),p=ie,h!==null){const q=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ne=!1;q.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let We=0;We<q.length;We++){const ke=q[We];let at=null;if(d!==null)at=d.getViewport(ke);else{const oe=f.getViewSubImage(u,ke);at=oe.viewport,We===0&&(e.setRenderTargetTextures(y,oe.colorTexture,u.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(y))}let A=b[We];A===void 0&&(A=new zt,A.layers.enable(We),A.viewport=new ft,b[We]=A),A.matrix.fromArray(ke.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(ke.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(at.x,at.y,at.width,at.height),We===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(A)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const We=f.getDepthInformation(q[0]);We&&We.isValid&&We.texture&&_.init(e,We,i.renderState)}}for(let q=0;q<v.length;q++){const ne=x[q],Le=v[q];ne!==null&&Le!==void 0&&Le.update(ne,ie,c||a)}fe&&fe(X,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}const et=new zd;et.setAnimationLoop(He),this.setAnimationLoop=function(X){fe=X},this.dispose=function(){}}}const Ti=new mn,Vy=new Ie;function Hy(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Nd(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),v=y.envMap,x=y.envMapRotation;v&&(g.envMap.value=v,Ti.copy(x),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),g.envMapRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(Ti)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gy(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(p(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));const P=v.program;n.updateUBOMapping(y,P);const E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function h(y){const v=f();y.__bindingPointIndex=v;const x=s.createBuffer(),P=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const v=i[y.id],x=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,C=x.length;E<C;E++){const L=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,M=L.length;b<M;b++){const R=L[b];if(d(R,E,b,P)===!0){const U=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let O=0;O<N.length;O++){const G=N[O],te=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+D,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,D),D+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,x,P){const E=y.value,C=v+"_"+x;if(P[C]===void 0)return typeof E=="number"||typeof E=="boolean"?P[C]=E:P[C]=E.clone(),!0;{const L=P[C];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return P[C]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function p(y){const v=y.uniforms;let x=0;const P=16;for(let C=0,L=v.length;C<L;C++){const b=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,R=b.length;M<R;M++){const U=b[M],N=Array.isArray(U.value)?U.value:[U.value];for(let D=0,O=N.length;D<O;D++){const G=N[D],te=_(G),W=x%P,he=W%te.boundary,pe=W+he;x+=he,pe!==0&&P-pe<te.storage&&(x+=P-pe),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=te.storage}}}const E=x%P;return E>0&&(x+=P-E),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){const v=y.target;v.removeEventListener("dispose",g);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Wy{constructor(e={}){const{canvas:t=Id(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Kn,this.toneMappingExposure=1;const v=this;let x=!1,P=0,E=0,C=null,L=-1,b=null;const M=new ft,R=new ft;let U=null;const N=new xe(0);let D=0,O=t.width,G=t.height,te=1,W=null,he=null;const pe=new ft(0,0,O,G),fe=new ft(0,0,O,G);let He=!1;const et=new Zr;let X=!1,ie=!1;const q=new Ie,ne=new T,Le=new ft,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function at(){return C===null?te:1}let A=n;function oe(w,B){return t.getContext(w,B)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ue,!1),A===null){const B="webgl2";if(A=oe(B,w),A===null)throw oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let se,_e,Y,De,ge,Se,I,S,V,j,K,ee,Pe,me,Me,Ye,ae,ye,nt,Ge,be,Xe,tt,St;function F(){se=new Jv(A),se.init(),Xe=new Wd(A,se),_e=new Wv(A,se,e,Xe),Y=new Ry(A),De=new Qv(A),ge=new _y,Se=new Ny(A,se,Y,ge,_e,Xe,De),I=new qv(v),S=new Zv(v),V=new a_(A),tt=new Hv(A,V),j=new Kv(A,V,De,tt),K=new tx(A,j,V,De),nt=new ex(A,_e,Se),Ye=new Xv(ge),ee=new gy(v,I,S,se,_e,tt,Ye),Pe=new Hy(v,ge),me=new xy,Me=new Ey(se),ye=new Vv(v,I,S,Y,K,u,l),ae=new Cy(v,K,_e),St=new Gy(A,De,_e,Y),Ge=new Gv(A,se,De),be=new jv(A,se,De),De.programs=ee.programs,v.capabilities=_e,v.extensions=se,v.properties=ge,v.renderLists=me,v.shadowMap=ae,v.state=Y,v.info=De}F();const le=new ky(v,A);this.xr=le,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(O,G,!1))},this.getSize=function(w){return w.set(O,G)},this.setSize=function(w,B,k=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,G=B,t.width=Math.floor(w*te),t.height=Math.floor(B*te),k===!0&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(O*te,G*te).floor()},this.setDrawingBufferSize=function(w,B,k){O=w,G=B,te=k,t.width=Math.floor(w*k),t.height=Math.floor(B*k),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(pe)},this.setViewport=function(w,B,k,H){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,B,k,H),Y.viewport(M.copy(pe).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(fe)},this.setScissor=function(w,B,k,H){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,B,k,H),Y.scissor(R.copy(fe).multiplyScalar(te).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){Y.setScissorTest(He=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(w=!0,B=!0,k=!0){let H=0;if(w){let z=!1;if(C!==null){const ce=C.texture.format;z=ce===Wo||ce===Go||ce===qr}if(z){const ce=C.texture.type,ve=ce===On||ce===ei||ce===Os||ce===Yi||ce===ko||ce===Vo,we=ye.getClearColor(),Ee=ye.getClearAlpha(),Be=we.r,Ve=we.g,Ce=we.b;ve?(d[0]=Be,d[1]=Ve,d[2]=Ce,d[3]=Ee,A.clearBufferuiv(A.COLOR,0,d)):(p[0]=Be,p[1]=Ve,p[2]=Ce,p[3]=Ee,A.clearBufferiv(A.COLOR,0,p))}else H|=A.COLOR_BUFFER_BIT}B&&(H|=A.DEPTH_BUFFER_BIT),k&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),Me.dispose(),ge.dispose(),I.dispose(),S.dispose(),K.dispose(),tt.dispose(),St.dispose(),ee.dispose(),le.dispose(),le.removeEventListener("sessionstart",Pn),le.removeEventListener("sessionend",yh),Mi.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=De.autoReset,B=ae.enabled,k=ae.autoUpdate,H=ae.needsUpdate,z=ae.type;F(),De.autoReset=w,ae.enabled=B,ae.autoUpdate=k,ae.needsUpdate=H,ae.type=z}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const B=w.target;B.removeEventListener("dispose",Oe),it(B)}function it(w){Lt(w),ge.remove(w)}function Lt(w){const B=ge.get(w).programs;B!==void 0&&(B.forEach(function(k){ee.releaseProgram(k)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,k,H,z,ce){B===null&&(B=We);const ve=z.isMesh&&z.matrixWorld.determinant()<0,we=Qp(w,B,k,H,z);Y.setMaterial(H,ve);let Ee=k.index,Be=1;if(H.wireframe===!0){if(Ee=j.getWireframeAttribute(k),Ee===void 0)return;Be=2}const Ve=k.drawRange,Ce=k.attributes.position;let ct=Ve.start*Be,Et=(Ve.start+Ve.count)*Be;ce!==null&&(ct=Math.max(ct,ce.start*Be),Et=Math.min(Et,(ce.start+ce.count)*Be)),Ee!==null?(ct=Math.max(ct,0),Et=Math.min(Et,Ee.count)):Ce!=null&&(ct=Math.max(ct,0),Et=Math.min(Et,Ce.count));const At=Et-ct;if(At<0||At===1/0)return;tt.setup(z,H,we,k,Ee);let cn,ht=Ge;if(Ee!==null&&(cn=V.get(Ee),ht=be,ht.setIndex(cn)),z.isMesh)H.wireframe===!0?(Y.setLineWidth(H.wireframeLinewidth*at()),ht.setMode(A.LINES)):ht.setMode(A.TRIANGLES);else if(z.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),Y.setLineWidth(Re*at()),z.isLineSegments?ht.setMode(A.LINES):z.isLineLoop?ht.setMode(A.LINE_LOOP):ht.setMode(A.LINE_STRIP)}else z.isPoints?ht.setMode(A.POINTS):z.isSprite&&ht.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ht.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Re=z._multiDrawStarts,Ht=z._multiDrawCounts,ut=z._multiDrawCount,yn=Ee?V.get(Ee).bytesPerElement:1,as=ge.get(H).currentProgram.getUniforms();for(let hn=0;hn<ut;hn++)as.setValue(A,"_gl_DrawID",hn),ht.render(Re[hn]/yn,Ht[hn])}else if(z.isInstancedMesh)ht.renderInstances(ct,At,z.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ht=Math.min(k.instanceCount,Re);ht.renderInstances(ct,At,Ht)}else ht.render(ct,At)};function Vt(w,B,k){w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,ia(w,B,k),w.side=jn,w.needsUpdate=!0,ia(w,B,k),w.side=Ln):ia(w,B,k)}this.compile=function(w,B,k=null){k===null&&(k=w),g=Me.get(k),g.init(B),y.push(g),k.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),w!==k&&w.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const H=new Set;return w.traverse(function(z){const ce=z.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const we=ce[ve];Vt(we,k,z),H.add(we)}else Vt(ce,k,z),H.add(ce)}),y.pop(),g=null,H},this.compileAsync=function(w,B,k=null){const H=this.compile(w,B,k);return new Promise(z=>{function ce(){if(H.forEach(function(ve){ge.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){z(w);return}setTimeout(ce,10)}se.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let lt=null;function kn(w){lt&&lt(w)}function Pn(){Mi.stop()}function yh(){Mi.start()}const Mi=new zd;Mi.setAnimationLoop(kn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(w){lt=w,le.setAnimationLoop(w),w===null?Mi.stop():Mi.start()},le.addEventListener("sessionstart",Pn),le.addEventListener("sessionend",yh),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(B),B=le.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,C),g=Me.get(w,y.length),g.init(B),y.push(g),q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(q),ie=this.localClippingEnabled,X=Ye.init(this.clippingPlanes,ie),_=me.get(w,m.length),_.init(),m.push(_),le.enabled===!0&&le.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&Ml(ce,B,-1/0,v.sortObjects)}Ml(w,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,he),ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ke&&ye.addToRenderList(_,w),this.info.render.frame++,X===!0&&Ye.beginShadows();const k=g.state.shadowsArray;ae.render(k,w,B),X===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,z=_.transmissive;if(g.setupLights(),B.isArrayCamera){const ce=B.cameras;if(z.length>0)for(let ve=0,we=ce.length;ve<we;ve++){const Ee=ce[ve];Sh(H,z,w,Ee)}ke&&ye.render(w);for(let ve=0,we=ce.length;ve<we;ve++){const Ee=ce[ve];Mh(_,w,Ee,Ee.viewport)}}else z.length>0&&Sh(H,z,w,B),ke&&ye.render(w),Mh(_,w,B);C!==null&&(Se.updateMultisampleRenderTarget(C),Se.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,B),tt.resetDefaultState(),L=-1,b=null,y.pop(),y.length>0?(g=y[y.length-1],X===!0&&Ye.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ml(w,B,k,H){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||et.intersectsSprite(w)){H&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(q);const ve=K.update(w),we=w.material;we.visible&&_.push(w,ve,we,k,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||et.intersectsObject(w))){const ve=K.update(w),we=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Le.copy(ve.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(q)),Array.isArray(we)){const Ee=ve.groups;for(let Be=0,Ve=Ee.length;Be<Ve;Be++){const Ce=Ee[Be],ct=we[Ce.materialIndex];ct&&ct.visible&&_.push(w,ve,ct,k,Le.z,Ce)}}else we.visible&&_.push(w,ve,we,k,Le.z,null)}}const ce=w.children;for(let ve=0,we=ce.length;ve<we;ve++)Ml(ce[ve],B,k,H)}function Mh(w,B,k,H){const z=w.opaque,ce=w.transmissive,ve=w.transparent;g.setupLightsView(k),X===!0&&Ye.setGlobalState(v.clippingPlanes,k),H&&Y.viewport(M.copy(H)),z.length>0&&na(z,B,k),ce.length>0&&na(ce,B,k),ve.length>0&&na(ve,B,k),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Sh(w,B,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[H.id]===void 0&&(g.state.transmissionRenderTarget[H.id]=new An(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Gs:On,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ce=g.state.transmissionRenderTarget[H.id],ve=H.viewport||M;ce.setSize(ve.z,ve.w);const we=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(N),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),ke&&ye.render(k);const Ee=v.toneMapping;v.toneMapping=Kn;const Be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),g.setupLightsView(H),X===!0&&Ye.setGlobalState(v.clippingPlanes,H),na(w,k,H),Se.updateMultisampleRenderTarget(ce),Se.updateRenderTargetMipmap(ce),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ce=0,ct=B.length;Ce<ct;Ce++){const Et=B[Ce],At=Et.object,cn=Et.geometry,ht=Et.material,Re=Et.group;if(ht.side===Ln&&At.layers.test(H.layers)){const Ht=ht.side;ht.side=jt,ht.needsUpdate=!0,bh(At,k,H,cn,ht,Re),ht.side=Ht,ht.needsUpdate=!0,Ve=!0}}Ve===!0&&(Se.updateMultisampleRenderTarget(ce),Se.updateRenderTargetMipmap(ce))}v.setRenderTarget(we),v.setClearColor(N,D),Be!==void 0&&(H.viewport=Be),v.toneMapping=Ee}function na(w,B,k){const H=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ce=w.length;z<ce;z++){const ve=w[z],we=ve.object,Ee=ve.geometry,Be=H===null?ve.material:H,Ve=ve.group;we.layers.test(k.layers)&&bh(we,B,k,Ee,Be,Ve)}}function bh(w,B,k,H,z,ce){w.onBeforeRender(v,B,k,H,z,ce),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(v,B,k,H,w,ce),z.transparent===!0&&z.side===Ln&&z.forceSinglePass===!1?(z.side=jt,z.needsUpdate=!0,v.renderBufferDirect(k,B,H,z,w,ce),z.side=jn,z.needsUpdate=!0,v.renderBufferDirect(k,B,H,z,w,ce),z.side=Ln):v.renderBufferDirect(k,B,H,z,w,ce),w.onAfterRender(v,B,k,H,z,ce)}function ia(w,B,k){B.isScene!==!0&&(B=We);const H=ge.get(w),z=g.state.lights,ce=g.state.shadowsArray,ve=z.state.version,we=ee.getParameters(w,z.state,ce,B,k),Ee=ee.getProgramCacheKey(we);let Be=H.programs;H.environment=w.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(w.isMeshStandardMaterial?S:I).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Oe),Be=new Map,H.programs=Be);let Ve=Be.get(Ee);if(Ve!==void 0){if(H.currentProgram===Ve&&H.lightsStateVersion===ve)return Eh(w,we),Ve}else we.uniforms=ee.getUniforms(w),w.onBeforeCompile(we,v),Ve=ee.acquireProgram(we,Ee),Be.set(Ee,Ve),H.uniforms=we.uniforms;const Ce=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=Ye.uniform),Eh(w,we),H.needsLights=tm(w),H.lightsStateVersion=ve,H.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMap.value=z.state.directionalShadowMap,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotShadowMap.value=z.state.spotShadowMap,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMap.value=z.state.pointShadowMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Ve,H.uniformsList=null,Ve}function wh(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Qa.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Eh(w,B){const k=ge.get(w);k.outputColorSpace=B.outputColorSpace,k.batching=B.batching,k.batchingColor=B.batchingColor,k.instancing=B.instancing,k.instancingColor=B.instancingColor,k.instancingMorph=B.instancingMorph,k.skinning=B.skinning,k.morphTargets=B.morphTargets,k.morphNormals=B.morphNormals,k.morphColors=B.morphColors,k.morphTargetsCount=B.morphTargetsCount,k.numClippingPlanes=B.numClippingPlanes,k.numIntersection=B.numClipIntersection,k.vertexAlphas=B.vertexAlphas,k.vertexTangents=B.vertexTangents,k.toneMapping=B.toneMapping}function Qp(w,B,k,H,z){B.isScene!==!0&&(B=We),Se.resetTextureUnits();const ce=B.fog,ve=H.isMeshStandardMaterial?B.environment:null,we=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ni,Ee=(H.isMeshStandardMaterial?S:I).get(H.envMap||ve),Be=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!k.morphAttributes.position,ct=!!k.morphAttributes.normal,Et=!!k.morphAttributes.color;let At=Kn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=v.toneMapping);const cn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=cn!==void 0?cn.length:0,Re=ge.get(H),Ht=g.state.lights;if(X===!0&&(ie===!0||w!==b)){const gn=w===b&&H.id===L;Ye.setState(H,w,gn)}let ut=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ht.state.version||Re.outputColorSpace!==we||z.isBatchedMesh&&Re.batching===!1||!z.isBatchedMesh&&Re.batching===!0||z.isBatchedMesh&&Re.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Re.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Re.instancing===!1||!z.isInstancedMesh&&Re.instancing===!0||z.isSkinnedMesh&&Re.skinning===!1||!z.isSkinnedMesh&&Re.skinning===!0||z.isInstancedMesh&&Re.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Re.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Re.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Re.instancingMorph===!1&&z.morphTexture!==null||Re.envMap!==Ee||H.fog===!0&&Re.fog!==ce||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ye.numPlanes||Re.numIntersection!==Ye.numIntersection)||Re.vertexAlphas!==Be||Re.vertexTangents!==Ve||Re.morphTargets!==Ce||Re.morphNormals!==ct||Re.morphColors!==Et||Re.toneMapping!==At||Re.morphTargetsCount!==ht)&&(ut=!0):(ut=!0,Re.__version=H.version);let yn=Re.currentProgram;ut===!0&&(yn=ia(H,B,z));let as=!1,hn=!1,Sl=!1;const Dt=yn.getUniforms(),ii=Re.uniforms;if(Y.useProgram(yn.program)&&(as=!0,hn=!0,Sl=!0),H.id!==L&&(L=H.id,hn=!0),as||b!==w){Dt.setValue(A,"projectionMatrix",w.projectionMatrix),Dt.setValue(A,"viewMatrix",w.matrixWorldInverse);const gn=Dt.map.cameraPosition;gn!==void 0&&gn.setValue(A,ne.setFromMatrixPosition(w.matrixWorld)),_e.logarithmicDepthBuffer&&Dt.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Dt.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,hn=!0,Sl=!0)}if(z.isSkinnedMesh){Dt.setOptional(A,z,"bindMatrix"),Dt.setOptional(A,z,"bindMatrixInverse");const gn=z.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Dt.setValue(A,"boneTexture",gn.boneTexture,Se))}z.isBatchedMesh&&(Dt.setOptional(A,z,"batchingTexture"),Dt.setValue(A,"batchingTexture",z._matricesTexture,Se),Dt.setOptional(A,z,"batchingIdTexture"),Dt.setValue(A,"batchingIdTexture",z._indirectTexture,Se),Dt.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&Dt.setValue(A,"batchingColorTexture",z._colorsTexture,Se));const bl=k.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0)&&nt.update(z,k,yn),(hn||Re.receiveShadow!==z.receiveShadow)&&(Re.receiveShadow=z.receiveShadow,Dt.setValue(A,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ii.envMap.value=Ee,ii.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&B.environment!==null&&(ii.envMapIntensity.value=B.environmentIntensity),hn&&(Dt.setValue(A,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&em(ii,Sl),ce&&H.fog===!0&&Pe.refreshFogUniforms(ii,ce),Pe.refreshMaterialUniforms(ii,H,te,G,g.state.transmissionRenderTarget[w.id]),Qa.upload(A,wh(Re),ii,Se)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qa.upload(A,wh(Re),ii,Se),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Dt.setValue(A,"center",z.center),Dt.setValue(A,"modelViewMatrix",z.modelViewMatrix),Dt.setValue(A,"normalMatrix",z.normalMatrix),Dt.setValue(A,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const gn=H.uniformsGroups;for(let wl=0,nm=gn.length;wl<nm;wl++){const Ah=gn[wl];St.update(Ah,yn),St.bind(Ah,yn)}}return yn}function em(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function tm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,B,k){ge.get(w.texture).__webglTexture=B,ge.get(w.depthTexture).__webglTexture=k;const H=ge.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const k=ge.get(w);k.__webglFramebuffer=B,k.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,k=0){C=w,P=B,E=k;let H=!0,z=null,ce=!1,ve=!1;if(w){const Ee=ge.get(w);if(Ee.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)Se.setupRenderTarget(w);else if(Ee.__hasExternalTextures)Se.rebindTextures(w,ge.get(w.texture).__webglTexture,ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(Ee.__boundDepthTexture!==Ce){if(Ce!==null&&ge.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const Ve=ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?z=Ve[B][k]:z=Ve[B],ce=!0):w.samples>0&&Se.useMultisampledRTT(w)===!1?z=ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[k]:z=Ve,M.copy(w.viewport),R.copy(w.scissor),U=w.scissorTest}else M.copy(pe).multiplyScalar(te).floor(),R.copy(fe).multiplyScalar(te).floor(),U=He;if(Y.bindFramebuffer(A.FRAMEBUFFER,z)&&H&&Y.drawBuffers(w,z),Y.viewport(M),Y.scissor(R),Y.setScissorTest(U),ce){const Ee=ge.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,k)}else if(ve){const Ee=ge.get(w.texture),Be=B||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ee.__webglTexture,k||0,Be)}L=-1},this.readRenderTargetPixels=function(w,B,k,H,z,ce,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Y.bindFramebuffer(A.FRAMEBUFFER,we);try{const Ee=w.texture,Be=Ee.format,Ve=Ee.type;if(!_e.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-H&&k>=0&&k<=w.height-z&&A.readPixels(B,k,H,z,Xe.convert(Be),Xe.convert(Ve),ce)}finally{const Ee=C!==null?ge.get(C).__webglFramebuffer:null;Y.bindFramebuffer(A.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(w,B,k,H,z,ce,ve){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){Y.bindFramebuffer(A.FRAMEBUFFER,we);try{const Ee=w.texture,Be=Ee.format,Ve=Ee.type;if(!_e.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-H&&k>=0&&k<=w.height-z){const Ce=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ce),A.bufferData(A.PIXEL_PACK_BUFFER,ce.byteLength,A.STREAM_READ),A.readPixels(B,k,H,z,Xe.convert(Be),Xe.convert(Ve),0),A.flush();const ct=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await Ig(A,ct,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,Ce),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ce)}finally{A.deleteBuffer(Ce),A.deleteSync(ct)}return ce}}finally{const Ee=C!==null?ge.get(C).__webglFramebuffer:null;Y.bindFramebuffer(A.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(w,B=null,k=0){w.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-k),z=Math.floor(w.image.width*H),ce=Math.floor(w.image.height*H),ve=B!==null?B.x:0,we=B!==null?B.y:0;Se.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,ve,we,z,ce),Y.unbindTexture()},this.copyTextureToTexture=function(w,B,k=null,H=null,z=0){w.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],B=arguments[2],z=arguments[3]||0,k=null);let ce,ve,we,Ee,Be,Ve;k!==null?(ce=k.max.x-k.min.x,ve=k.max.y-k.min.y,we=k.min.x,Ee=k.min.y):(ce=w.image.width,ve=w.image.height,we=0,Ee=0),H!==null?(Be=H.x,Ve=H.y):(Be=0,Ve=0);const Ce=Xe.convert(B.format),ct=Xe.convert(B.type);Se.setTexture2D(B,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);const Et=A.getParameter(A.UNPACK_ROW_LENGTH),At=A.getParameter(A.UNPACK_IMAGE_HEIGHT),cn=A.getParameter(A.UNPACK_SKIP_PIXELS),ht=A.getParameter(A.UNPACK_SKIP_ROWS),Re=A.getParameter(A.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[z]:w.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Ht.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ht.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,we),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ee),w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,z,Be,Ve,ce,ve,Ce,ct,Ht.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,z,Be,Ve,Ht.width,Ht.height,Ce,Ht.data):A.texSubImage2D(A.TEXTURE_2D,z,Be,Ve,ce,ve,Ce,ct,Ht),A.pixelStorei(A.UNPACK_ROW_LENGTH,Et),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At),A.pixelStorei(A.UNPACK_SKIP_PIXELS,cn),A.pixelStorei(A.UNPACK_SKIP_ROWS,ht),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Re),z===0&&B.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(w,B,k=null,H=null,z=0){w.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,w=arguments[2],B=arguments[3],z=arguments[4]||0);let ce,ve,we,Ee,Be,Ve,Ce,ct,Et;const At=w.isCompressedTexture?w.mipmaps[z]:w.image;k!==null?(ce=k.max.x-k.min.x,ve=k.max.y-k.min.y,we=k.max.z-k.min.z,Ee=k.min.x,Be=k.min.y,Ve=k.min.z):(ce=At.width,ve=At.height,we=At.depth,Ee=0,Be=0,Ve=0),H!==null?(Ce=H.x,ct=H.y,Et=H.z):(Ce=0,ct=0,Et=0);const cn=Xe.convert(B.format),ht=Xe.convert(B.type);let Re;if(B.isData3DTexture)Se.setTexture3D(B,0),Re=A.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Se.setTexture2DArray(B,0),Re=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);const Ht=A.getParameter(A.UNPACK_ROW_LENGTH),ut=A.getParameter(A.UNPACK_IMAGE_HEIGHT),yn=A.getParameter(A.UNPACK_SKIP_PIXELS),as=A.getParameter(A.UNPACK_SKIP_ROWS),hn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,At.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ee),A.pixelStorei(A.UNPACK_SKIP_ROWS,Be),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ve),w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Re,z,Ce,ct,Et,ce,ve,we,cn,ht,At.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(Re,z,Ce,ct,Et,ce,ve,we,cn,At.data):A.texSubImage3D(Re,z,Ce,ct,Et,ce,ve,we,cn,ht,At),A.pixelStorei(A.UNPACK_ROW_LENGTH,Ht),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ut),A.pixelStorei(A.UNPACK_SKIP_PIXELS,yn),A.pixelStorei(A.UNPACK_SKIP_ROWS,as),A.pixelStorei(A.UNPACK_SKIP_IMAGES,hn),z===0&&B.generateMipmaps&&A.generateMipmap(Re),Y.unbindTexture()},this.initRenderTarget=function(w){ge.get(w).__webglFramebuffer===void 0&&Se.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Se.setTextureCube(w,0):w.isData3DTexture?Se.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Se.setTexture2DArray(w,0):Se.setTexture2D(w,0),Y.unbindTexture()},this.resetState=function(){P=0,E=0,C=null,Y.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qo?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===$r?"display-p3":"srgb"}}class jo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new Qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qd extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class el{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ir,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Us("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new T;class Ji{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ji(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qc extends $t{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bs;const tr=new T,ws=new T,Es=new T,As=new Z,nr=new Z,$d=new Ie,Ea=new T,ir=new T,Aa=new T,wu=new Z,Jl=new Z,Eu=new Z;class Yd extends rt{constructor(e=new Qc){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new el(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Ji(n,3,0,!1)),bs.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=bs,this.material=e,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),$d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Es.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ta(Ea.set(-.5,-.5,0),Es,a,ws,i,r),Ta(ir.set(.5,-.5,0),Es,a,ws,i,r),Ta(Aa.set(.5,.5,0),Es,a,ws,i,r),wu.set(0,0),Jl.set(1,0),Eu.set(1,1);let o=e.ray.intersectTriangle(Ea,ir,Aa,!1,tr);if(o===null&&(Ta(ir.set(-.5,.5,0),Es,a,ws,i,r),Jl.set(0,1),o=e.ray.intersectTriangle(Ea,Aa,ir,!1,tr),o===null))return;const l=e.ray.origin.distanceTo(tr);l<e.near||l>e.far||t.push({distance:l,point:tr.clone(),uv:dn.getInterpolation(tr,Ea,ir,Aa,wu,Jl,Eu,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ta(s,e,t,n,i,r){As.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(nr.x=r*As.x-i*As.y,nr.y=i*As.x+r*As.y):nr.copy(As),s.copy(e),s.x+=nr.x,s.y+=nr.y,s.applyMatrix4($d)}const Ca=new T,Au=new T;class Zd extends rt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ca.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ca);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ca.setFromMatrixPosition(e.matrixWorld),Au.setFromMatrixPosition(this.matrixWorld);const n=Ca.distanceTo(Au)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Tu=new T,Cu=new ft,Ru=new ft,Xy=new T,Pu=new Ie,Ra=new T,Kl=new qt,Iu=new Ie,jl=new Ws;class Jd extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(i),e.ray.intersectsSphere(Kl)!==!1&&(Iu.copy(i).invert(),jl.copy(e.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Cu.fromBufferAttribute(i.attributes.skinIndex,e),Ru.fromBufferAttribute(i.attributes.skinWeight,e),Tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ru.getComponent(r);if(a!==0){const o=Cu.getComponent(r);Pu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xy.copy(Tu).applyMatrix4(Pu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eh extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nn extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=kt,h=kt,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lu=new Ie,qy=new Ie;class tl{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:qy;Lu.multiplyMatrices(o,t[r]),Lu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Nn(t,e,e,Kt,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new eh),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ks extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new Ie,Du=new Ie,Pa=[],Uu=new Qt,$y=new Ie,sr=new It,rr=new qt;class Kd extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$y)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Uu.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Uu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),rr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ts),Du.multiplyMatrices(n,Ts),sr.matrixWorld=Du,sr.raycast(e,Pa);for(let a=0,o=Pa.length;a<o;a++){const l=Pa[a];l.instanceId=r,l.object=this,t.push(l)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nn(new Float32Array(i*this.count),i,this.count,Ho,an));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Yy(s,e){return s.z-e.z}function Zy(s,e){return e.z-s.z}class Jy{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];r.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const hi=new Ie,Ql=new Ie,Ky=new Ie,jy=new xe(1,1,1),Nu=new Ie,ec=new Zr,Ia=new Qt,Ci=new qt,ar=new T,Fu=new T,Qy=new T,tc=new Jy,Xt=new It,La=[];function eM(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class jd extends It{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new Qe,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Nn(t,e,e,Kt,an);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Nn(t,e,e,qr,ei);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Nn(t,e,e,Kt,an);n.colorSpace=ot.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),f=new xt(h,l,c);t.setAttribute(r,f)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new xt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,hi),this.getBoundingBoxAt(r,Ia).applyMatrix4(hi),e.union(Ia)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,hi),this.getBoundingSphereAt(r,Ci).applyMatrix4(hi),e.union(Ci)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;Ky.toArray(i,t*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(jy.toArray(r.image.data,t*4),r.needsUpdate=!0),t}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const f=this._geometryCount;return this._geometryCount++,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Qt,sphereInitialized:!1,sphere:new qt}),this.setGeometryAt(f,e),f}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const d in n.attributes){const p=t.getAttribute(d),_=n.getAttribute(d);eM(p,_,l);const g=p.itemSize;for(let m=p.count,y=c;m<y;m++){const v=l+m;for(let x=0;x<g;x++)_.setComponent(v,x,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(i){const d=o.indexStart;for(let p=0;p<a.count;p++)r.setX(d+p,l+a.getX(p));for(let p=a.count,_=o.indexCount;p<_;p++)r.setX(d+p,l);r.needsUpdate=!0,r.addUpdateRange(d,o.indexCount)}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const f=this._drawRanges[e],u=t.getAttribute("position");return f.count=i?a.count:u.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=r.index,o=r.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let f=c;a&&(f=a.getX(f)),i.expandByPoint(ar.fromBufferAttribute(o,f))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Ia),Ia.getCenter(i.center);const a=r.index,o=r.attributes.position,l=this._drawRanges[e];let c=0;for(let h=l.start,f=l.start+l.count;h<f;h++){let u=h;a&&(u=a.getX(u)),ar.fromBufferAttribute(o,u),c=Math.max(c,i.center.distanceToSquared(ar))}i.radius=Math.sqrt(c),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,a=this.geometry;Xt.material=this.material,Xt.geometry.index=a.index,Xt.geometry.attributes=a.attributes,Xt.geometry.boundingBox===null&&(Xt.geometry.boundingBox=new Qt),Xt.geometry.boundingSphere===null&&(Xt.geometry.boundingSphere=new qt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];Xt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Xt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Xt.geometry.boundingBox),this.getBoundingSphereAt(c,Xt.geometry.boundingSphere),Xt.raycast(e,La);for(let f=0,u=La.length;f<u;f++){const d=La[f];d.object=this,d.batchId=o,t.push(d)}La.length=0}Xt.material=null,Xt.geometry.index=null,Xt.geometry.attributes={},Xt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,f=this._drawRanges,u=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;u&&(Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ec.setFromProjectionMatrix(Nu,e.coordinateSystem));let _=0;if(this.sortObjects){Ql.copy(this.matrixWorld).invert(),ar.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ql),Fu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ql);for(let y=0,v=l.length;y<v;y++)if(l[y].visible&&l[y].active){const x=l[y].geometryIndex;this.getMatrixAt(y,hi),this.getBoundingSphereAt(x,Ci).applyMatrix4(hi);let P=!1;if(u&&(P=!ec.intersectsSphere(Ci)),!P){const E=Qy.subVectors(Ci.center,ar).dot(Fu);tc.push(f[x],E,y)}}const g=tc.list,m=this.customSort;m===null?g.sort(r.transparent?Zy:Yy):m.call(this,g,n);for(let y=0,v=g.length;y<v;y++){const x=g[y];c[_]=x.start*o,h[_]=x.count,p[_]=x.index,_++}tc.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){const y=l[g].geometryIndex;let v=!1;if(u&&(this.getMatrixAt(g,hi),this.getBoundingSphereAt(y,Ci).applyMatrix4(hi),v=!ec.intersectsSphere(Ci)),!v){const x=f[y];c[_]=x.start*o,h[_]=x.count,p[_]=g,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class sn extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new T,No=new T,Ou=new Ie,or=new Ws,Da=new qt,nc=new T,Bu=new T;class mi extends rt{constructor(e=new Qe,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Uo.fromBufferAttribute(t,i-1),No.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uo.distanceTo(No);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Ou.copy(i).invert(),or.copy(e.ray).applyMatrix4(Ou);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=h.getX(_),y=h.getX(_+1),v=Ua(this,e,or,l,m,y);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=Ua(this,e,or,l,_,g);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=Ua(this,e,or,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Ua(this,e,or,l,p-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ua(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Uo.fromBufferAttribute(a,i),No.fromBufferAttribute(a,r),t.distanceSqToSegment(Uo,No,nc,Bu)>n)return;nc.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(nc);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const zu=new T,ku=new T;class zn extends mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zu.fromBufferAttribute(t,i),ku.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zu.distanceTo(ku);e.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qd extends mi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class th extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new Ie,Sc=new Ws,Na=new qt,Fa=new T;class ep extends rt{constructor(e=new Qe,t=new th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Vu.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,_=d;p<_;p++){const g=c.getX(p);Fa.fromBufferAttribute(f,g),Hu(Fa,g,l,i,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,_=d;p<_;p++)Fa.fromBufferAttribute(f,p),Hu(Fa,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hu(s,e,t,n,i,r,a){const o=Sc.distanceSqToPoint(s);if(o<t){const l=new T;Sc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class tM extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Nt,this.magFilter=r!==void 0?r:Nt,this.generateMipmaps=!1;const h=this;function f(){h.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class nM extends Rt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=kt,this.minFilter=kt,this.generateMipmaps=!1,this.needsUpdate=!0}}class nl extends Rt{constructor(e,t,n,i,r,a,o,l,c,h,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class iM extends nl{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=xn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends nl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Qn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class rM extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Z:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,i=[],r=[],a=[],o=new T,l=new Ie;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ct(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class il extends Cn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Z){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tp extends il{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Oa=new T,ic=new nh,sc=new nh,rc=new nh;class np extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Oa.subVectors(i[0],i[1]).add(i[0]),c=Oa);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Oa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),ic.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,g),sc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,g),rc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),sc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),rc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(ic.calc(l),sc.calc(l),rc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function aM(s,e){const t=1-s;return t*t*e}function oM(s,e){return 2*(1-s)*s*e}function lM(s,e){return s*s*e}function vr(s,e,t,n){return aM(s,e)+oM(s,t)+lM(s,n)}function cM(s,e){const t=1-s;return t*t*t*e}function hM(s,e){const t=1-s;return 3*t*t*s*e}function uM(s,e){return 3*(1-s)*s*s*e}function fM(s,e){return s*s*s*e}function xr(s,e,t,n,i){return cM(s,e)+hM(s,t)+uM(s,n)+fM(s,i)}class ih extends Cn{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,i.x,r.x,a.x,o.x),xr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ip extends Cn{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(e,i.x,r.x,a.x,o.x),xr(e,i.y,r.y,a.y,o.y),xr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sh extends Cn{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends Cn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rh extends Cn{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,i.x,r.x,a.x),vr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends Cn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(vr(e,i.x,r.x,a.x),vr(e,i.y,r.y,a.y),vr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Gu(o,l.x,c.x,h.x,f.x),Gu(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}var Fo=Object.freeze({__proto__:null,ArcCurve:tp,CatmullRomCurve3:np,CubicBezierCurve:ih,CubicBezierCurve3:ip,EllipseCurve:il,LineCurve:sh,LineCurve3:sp,QuadraticBezierCurve:rh,QuadraticBezierCurve3:ah,SplineCurve:oh});class rp extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Fo[i.type]().fromJSON(i))}return this}}class Ur extends rp{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sh(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new rh(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new ih(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new oh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new il(e,t,n,i,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jr extends Qe{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ct(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,f=new T,u=new Z,d=new T,p=new T,_=new T;let g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=t;y++){const v=n+y*h*i,x=Math.sin(v),P=Math.cos(v);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*x,f.y=e[E].y,f.z=e[E].x*P,a.push(f.x,f.y,f.z),u.x=y/t,u.y=E/(e.length-1),o.push(u.x,u.y);const C=l[3*E+0]*x,L=l[3*E+1],b=l[3*E+0]*P;c.push(C,L,b)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){const x=v+y*e.length,P=x,E=x+e.length,C=x+e.length+1,L=x+1;r.push(P,E,L),r.push(C,L,E)}this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.points,e.segments,e.phiStart,e.phiLength)}}class sl extends Jr{constructor(e=1,t=1,n=4,i=8){const r=new Ur;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new sl(e.radius,e.length,e.capSegments,e.radialSegments)}}class rl extends Qe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new T,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $s extends Qe{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let p=0;const _=[],g=n/2;let m=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function y(){const x=new T,P=new T;let E=0;const C=(t-e)/n;for(let L=0;L<=r;L++){const b=[],M=L/r,R=M*(t-e)+e;for(let U=0;U<=i;U++){const N=U/i,D=N*l+o,O=Math.sin(D),G=Math.cos(D);P.x=R*O,P.y=-M*n+g,P.z=R*G,f.push(P.x,P.y,P.z),x.set(O,C,G).normalize(),u.push(x.x,x.y,x.z),d.push(N,1-M),b.push(p++)}_.push(b)}for(let L=0;L<i;L++)for(let b=0;b<r;b++){const M=_[b][L],R=_[b+1][L],U=_[b+1][L+1],N=_[b][L+1];h.push(M,R,N),h.push(R,U,N),E+=6}c.addGroup(m,E,0),m+=E}function v(x){const P=p,E=new Z,C=new T;let L=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,g*M,0),u.push(0,M,0),d.push(.5,.5),p++;const R=p;for(let U=0;U<=i;U++){const D=U/i*l+o,O=Math.cos(D),G=Math.sin(D);C.x=b*G,C.y=g*M,C.z=b*O,f.push(C.x,C.y,C.z),u.push(0,M,0),E.x=O*.5+.5,E.y=G*.5*M+.5,d.push(E.x,E.y),p++}for(let U=0;U<i;U++){const N=P+U,D=R+U;x===!0?h.push(D,D+1,N):h.push(D+1,D,N),L+=3}c.addGroup(m,L,x===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class al extends $s{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new al(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xi extends Qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new T,x=new T,P=new T;for(let E=0;E<t.length;E+=3)d(t[E+0],v),d(t[E+1],x),d(t[E+2],P),l(v,x,P,y)}function l(y,v,x,P){const E=P+1,C=[];for(let L=0;L<=E;L++){C[L]=[];const b=y.clone().lerp(x,L/E),M=v.clone().lerp(x,L/E),R=E-L;for(let U=0;U<=R;U++)U===0&&L===E?C[L][U]=b:C[L][U]=b.clone().lerp(M,U/R)}for(let L=0;L<E;L++)for(let b=0;b<2*(E-L)-1;b++){const M=Math.floor(b/2);b%2===0?(u(C[L][M+1]),u(C[L+1][M]),u(C[L][M])):(u(C[L][M+1]),u(C[L+1][M+1]),u(C[L+1][M]))}}function c(y){const v=new T;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const y=new T;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const x=g(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;a.push(x,1-P)}p(),f()}function f(){for(let y=0;y<a.length;y+=6){const v=a[y+0],x=a[y+2],P=a[y+4],E=Math.max(v,x,P),C=Math.min(v,x,P);E>.9&&C<.1&&(v<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,v){const x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function p(){const y=new T,v=new T,x=new T,P=new T,E=new Z,C=new Z,L=new Z;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),P.copy(y).add(v).add(x).divideScalar(3);const R=g(P);_(E,M+0,y,R),_(C,M+2,v,R),_(L,M+4,x,R)}}function _(y,v,x,P){P<0&&y.x===1&&(a[v]=y.x-1),x.x===0&&x.z===0&&(a[v]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.vertices,e.indices,e.radius,e.details)}}class ol extends xi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}const Ba=new T,za=new T,ac=new T,ka=new dn;class ap extends Qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Gi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=ka;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),ka.getNormal(ac),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const v=(y+1)%3,x=f[y],P=f[v],E=ka[h[y]],C=ka[h[v]],L=`${x}_${P}`,b=`${P}_${x}`;b in u&&u[b]?(ac.dot(u[b].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(C.x,C.y,C.z)),u[b]=null):L in u||(u[L]={index0:c[y],index1:c[v],normal:ac.clone()})}}for(const p in u)if(u[p]){const{index0:_,index1:g}=u[p];Ba.fromBufferAttribute(o,_),za.fromBufferAttribute(o,g),d.push(Ba.x,Ba.y,Ba.z),d.push(za.x,za.y,za.z)}this.setAttribute("position",new Ae(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Wi extends Ur{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ur().fromJSON(i))}return this}}const dM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=op(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,u,d;if(n&&(r=vM(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let p=t;p<i;p+=t)f=s[p],u=s[p+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Nr(r,a,t,o,l,d,0),a}};function op(s,e,t,n,i){let r,a;if(i===RM(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Wu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Wu(r,s[r],s[r+1],a);return a&&ll(a,a.next)&&(Or(a),a=a.next),a}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ll(t,t.next)||bt(t.prev,t,t.next)===0)){if(Or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&bM(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?mM(s,n,i,r):pM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Or(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=gM(Ki(s),e,t),Nr(s,e,t,n,i,r,2)):a===2&&_M(s,e,t,n,i,r):Nr(Ki(s),e,t,n,i,r,1);break}}}function pM(s){const e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Ls(i,o,r,l,a,c,p.x,p.y)&&bt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function mM(s,e,t,n){const i=s.prev,r=s,a=s.next;if(bt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<f?h<u?h:u:f<u?f:u,_=o>l?o>c?o:c:l>c?l:c,g=h>f?h>u?h:u:f>u?f:u,m=bc(d,p,e,t,n),y=bc(_,g,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=m&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&Ls(o,h,l,f,c,u,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&Ls(o,h,l,f,c,u,x.x,x.y)&&bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&Ls(o,h,l,f,c,u,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&Ls(o,h,l,f,c,u,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gM(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ll(i,r)&&lp(i,n,n.next,r)&&Fr(i,r)&&Fr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Or(n),Or(n.next),n=s=r),n=n.next}while(n!==s);return Ki(n)}function _M(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&AM(a,o)){let l=cp(a,o);a=Ki(a,a.next),l=Ki(l,l.next),Nr(a,e,t,n,i,r,0),Nr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function vM(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=op(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(EM(c));for(i.sort(xM),r=0;r<i.length;r++)t=yM(i[r],t);return t}function xM(s,e){return s.x-e.x}function yM(s,e){const t=MM(s,e);if(!t)return e;const n=cp(t,s);return Ki(n,n.next),Ki(t,t.next)}function MM(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Ls(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Fr(t,s)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&SM(i,t)))&&(i=t,h=f)),t=t.next;while(t!==o);return i}function SM(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}function bM(s,e,t,n){let i=s;do i.z===0&&(i.z=bc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,wM(i)}function wM(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function bc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function EM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ls(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function AM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!TM(s,e)&&(Fr(s,e)&&Fr(e,s)&&CM(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||ll(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ll(s,e){return s.x===e.x&&s.y===e.y}function lp(s,e,t,n){const i=Ha(bt(s,e,t)),r=Ha(bt(s,e,n)),a=Ha(bt(t,n,s)),o=Ha(bt(t,n,e));return!!(i!==r&&a!==o||i===0&&Va(s,t,e)||r===0&&Va(s,n,e)||a===0&&Va(t,s,n)||o===0&&Va(t,e,n))}function Va(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ha(s){return s>0?1:s<0?-1:0}function TM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&lp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Fr(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}function CM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function cp(s,e){const t=new wc(s.i,s.x,s.y),n=new wc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wu(s,e,t,n){const i=new wc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Or(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RM(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Fn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Fn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Xu(e),qu(n,e);let a=e.length;t.forEach(Xu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,qu(n,t[l]);const o=dM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Xu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class cl extends Qe{constructor(e=new Wi([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ae(i,3)),this.setAttribute("uv",new Ae(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:PM;let v,x=!1,P,E,C,L;m&&(v=m.getSpacedPoints(h),x=!0,u=!1,P=m.computeFrenetFrames(h,!1),E=new T,C=new T,L=new T),u||(g=0,d=0,p=0,_=0);const b=o.extractPoints(c);let M=b.shape;const R=b.holes;if(!Fn.isClockWise(M)){M=M.reverse();for(let A=0,oe=R.length;A<oe;A++){const se=R[A];Fn.isClockWise(se)&&(R[A]=se.reverse())}}const N=Fn.triangulateShape(M,R),D=M;for(let A=0,oe=R.length;A<oe;A++){const se=R[A];M=M.concat(se)}function O(A,oe,se){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(oe,se)}const G=M.length,te=N.length;function W(A,oe,se){let _e,Y,De;const ge=A.x-oe.x,Se=A.y-oe.y,I=se.x-A.x,S=se.y-A.y,V=ge*ge+Se*Se,j=ge*S-Se*I;if(Math.abs(j)>Number.EPSILON){const K=Math.sqrt(V),ee=Math.sqrt(I*I+S*S),Pe=oe.x-Se/K,me=oe.y+ge/K,Me=se.x-S/ee,Ye=se.y+I/ee,ae=((Me-Pe)*S-(Ye-me)*I)/(ge*S-Se*I);_e=Pe+ge*ae-A.x,Y=me+Se*ae-A.y;const ye=_e*_e+Y*Y;if(ye<=2)return new Z(_e,Y);De=Math.sqrt(ye/2)}else{let K=!1;ge>Number.EPSILON?I>Number.EPSILON&&(K=!0):ge<-Number.EPSILON?I<-Number.EPSILON&&(K=!0):Math.sign(Se)===Math.sign(S)&&(K=!0),K?(_e=-Se,Y=ge,De=Math.sqrt(V)):(_e=ge,Y=Se,De=Math.sqrt(V/2))}return new Z(_e/De,Y/De)}const he=[];for(let A=0,oe=D.length,se=oe-1,_e=A+1;A<oe;A++,se++,_e++)se===oe&&(se=0),_e===oe&&(_e=0),he[A]=W(D[A],D[se],D[_e]);const pe=[];let fe,He=he.concat();for(let A=0,oe=R.length;A<oe;A++){const se=R[A];fe=[];for(let _e=0,Y=se.length,De=Y-1,ge=_e+1;_e<Y;_e++,De++,ge++)De===Y&&(De=0),ge===Y&&(ge=0),fe[_e]=W(se[_e],se[De],se[ge]);pe.push(fe),He=He.concat(fe)}for(let A=0;A<g;A++){const oe=A/g,se=d*Math.cos(oe*Math.PI/2),_e=p*Math.sin(oe*Math.PI/2)+_;for(let Y=0,De=D.length;Y<De;Y++){const ge=O(D[Y],he[Y],_e);ne(ge.x,ge.y,-se)}for(let Y=0,De=R.length;Y<De;Y++){const ge=R[Y];fe=pe[Y];for(let Se=0,I=ge.length;Se<I;Se++){const S=O(ge[Se],fe[Se],_e);ne(S.x,S.y,-se)}}}const et=p+_;for(let A=0;A<G;A++){const oe=u?O(M[A],He[A],et):M[A];x?(C.copy(P.normals[0]).multiplyScalar(oe.x),E.copy(P.binormals[0]).multiplyScalar(oe.y),L.copy(v[0]).add(C).add(E),ne(L.x,L.y,L.z)):ne(oe.x,oe.y,0)}for(let A=1;A<=h;A++)for(let oe=0;oe<G;oe++){const se=u?O(M[oe],He[oe],et):M[oe];x?(C.copy(P.normals[A]).multiplyScalar(se.x),E.copy(P.binormals[A]).multiplyScalar(se.y),L.copy(v[A]).add(C).add(E),ne(L.x,L.y,L.z)):ne(se.x,se.y,f/h*A)}for(let A=g-1;A>=0;A--){const oe=A/g,se=d*Math.cos(oe*Math.PI/2),_e=p*Math.sin(oe*Math.PI/2)+_;for(let Y=0,De=D.length;Y<De;Y++){const ge=O(D[Y],he[Y],_e);ne(ge.x,ge.y,f+se)}for(let Y=0,De=R.length;Y<De;Y++){const ge=R[Y];fe=pe[Y];for(let Se=0,I=ge.length;Se<I;Se++){const S=O(ge[Se],fe[Se],_e);x?ne(S.x,S.y+v[h-1].y,v[h-1].x+se):ne(S.x,S.y,f+se)}}}X(),ie();function X(){const A=i.length/3;if(u){let oe=0,se=G*oe;for(let _e=0;_e<te;_e++){const Y=N[_e];Le(Y[2]+se,Y[1]+se,Y[0]+se)}oe=h+g*2,se=G*oe;for(let _e=0;_e<te;_e++){const Y=N[_e];Le(Y[0]+se,Y[1]+se,Y[2]+se)}}else{for(let oe=0;oe<te;oe++){const se=N[oe];Le(se[2],se[1],se[0])}for(let oe=0;oe<te;oe++){const se=N[oe];Le(se[0]+G*h,se[1]+G*h,se[2]+G*h)}}n.addGroup(A,i.length/3-A,0)}function ie(){const A=i.length/3;let oe=0;q(D,oe),oe+=D.length;for(let se=0,_e=R.length;se<_e;se++){const Y=R[se];q(Y,oe),oe+=Y.length}n.addGroup(A,i.length/3-A,1)}function q(A,oe){let se=A.length;for(;--se>=0;){const _e=se;let Y=se-1;Y<0&&(Y=A.length-1);for(let De=0,ge=h+g*2;De<ge;De++){const Se=G*De,I=G*(De+1),S=oe+_e+Se,V=oe+Y+Se,j=oe+Y+I,K=oe+_e+I;We(S,V,j,K)}}}function ne(A,oe,se){l.push(A),l.push(oe),l.push(se)}function Le(A,oe,se){ke(A),ke(oe),ke(se);const _e=i.length/3,Y=y.generateTopUV(n,i,_e-3,_e-2,_e-1);at(Y[0]),at(Y[1]),at(Y[2])}function We(A,oe,se,_e){ke(A),ke(oe),ke(_e),ke(oe),ke(se),ke(_e);const Y=i.length/3,De=y.generateSideWallUV(n,i,Y-6,Y-3,Y-2,Y-1);at(De[0]),at(De[1]),at(De[3]),at(De[1]),at(De[2]),at(De[3])}function ke(A){i.push(l[A*3+0]),i.push(l[A*3+1]),i.push(l[A*3+2])}function at(A){r.push(A.x),r.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return IM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Fo[i.type]().fromJSON(i)),new cl(n,e.options)}}const PM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Z(r,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-f),new Z(u,1-p),new Z(_,1-m)]:[new Z(o,1-l),new Z(h,1-f),new Z(d,1-p),new Z(g,1-m)]}};function IM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hl extends xi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hl(e.radius,e.detail)}}class Kr extends xi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kr(e.radius,e.detail)}}class ul extends Qe{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,d=new T,p=new Z;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}f+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,v=y,x=y+n+1,P=y+n+2,E=y+1;o.push(v,x,E),o.push(x,P,E)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fl extends Qe{constructor(e=new Wi([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ae(i,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(a,2));function c(h){const f=i.length/3,u=h.extractPoints(t);let d=u.shape;const p=u.holes;Fn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Fn.isClockWise(y)===!0&&(p[g]=y.reverse())}const _=Fn.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];d=d.concat(y)}for(let g=0,m=d.length;g<m;g++){const y=d[g];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){const y=_[g],v=y[0]+f,x=y[1]+f,P=y[2]+f;n.push(v,x,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return LM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new fl(n,e.curveSegments)}}function LM(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class jr extends Qe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new T,u=new T,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const E=P/t;f.x=-e*Math.cos(i+E*r)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(i+E*r)*Math.sin(a+v*o),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(E+x,1-v),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const v=h[m][y+1],x=h[m][y],P=h[m+1][y],E=h[m+1][y+1];(m!==0||a>0)&&d.push(v,x,E),(m!==n-1||l<Math.PI)&&d.push(x,P,E)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dl extends xi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class pl extends Qe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new T,f=new T,u=new T;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,y=(i+1)*d+p;a.push(_,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ml extends Qe{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],f=new T,u=new T,d=new T,p=new T,_=new T,g=new T,m=new T;for(let v=0;v<=n;++v){const x=v/n*r*Math.PI*2;y(x,r,a,e,d),y(x+.01,r,a,e,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let P=0;P<=i;++P){const E=P/i*Math.PI*2,C=-t*Math.cos(E),L=t*Math.sin(E);f.x=d.x+(C*m.x+L*_.x),f.y=d.y+(C*m.y+L*_.y),f.z=d.z+(C*m.z+L*_.z),l.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),h.push(v/n),h.push(P/i)}}for(let v=1;v<=n;v++)for(let x=1;x<=i;x++){const P=(i+1)*(v-1)+(x-1),E=(i+1)*v+(x-1),C=(i+1)*v+x,L=(i+1)*(v-1)+x;o.push(P,E,L),o.push(E,C,L)}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2));function y(v,x,P,E,C){const L=Math.cos(v),b=Math.sin(v),M=P/x*v,R=Math.cos(M);C.x=E*(2+R)*.5*L,C.y=E*(2+R)*b*.5,C.z=E*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class gl extends Qe{constructor(e=new ah(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new Z;let h=new T;const f=[],u=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function _(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),y(),m()}function g(v){h=e.getPointAt(v/t,h);const x=a.normals[v],P=a.binormals[v];for(let E=0;E<=i;E++){const C=E/i*Math.PI*2,L=Math.sin(C),b=-Math.cos(C);l.x=b*x.x+L*P.x,l.y=b*x.y+L*P.y,l.z=b*x.z+L*P.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=t;v++)for(let x=1;x<=i;x++){const P=(i+1)*(v-1)+(x-1),E=(i+1)*v+(x-1),C=(i+1)*v+x,L=(i+1)*(v-1)+x;p.push(P,E,L),p.push(E,C,L)}}function y(){for(let v=0;v<=t;v++)for(let x=0;x<=i;x++)c.x=v/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gl(new Fo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class hp extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new T,r=new T;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let p=u,_=u+d;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),y=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,y),$u(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),$u(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function $u(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Yu=Object.freeze({__proto__:null,BoxGeometry:is,CapsuleGeometry:sl,CircleGeometry:rl,ConeGeometry:al,CylinderGeometry:$s,DodecahedronGeometry:ol,EdgesGeometry:ap,ExtrudeGeometry:cl,IcosahedronGeometry:hl,LatheGeometry:Jr,OctahedronGeometry:Kr,PlaneGeometry:Xs,PolyhedronGeometry:xi,RingGeometry:ul,ShapeGeometry:fl,SphereGeometry:jr,TetrahedronGeometry:dl,TorusGeometry:pl,TorusKnotGeometry:ml,TubeGeometry:gl,WireframeGeometry:hp});class up extends $t{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class fp extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lh extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dp extends lh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pp extends $t{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mp extends $t{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class gp extends $t{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class _p extends $t{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vp extends $t{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_i,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends sn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ki(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ec(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function ch(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function DM(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),f=[],u=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*i;if(!(p<t||p>=n)){f.push(c.times[d]);for(let _=0;_<h;++_)u.push(c.values[d*h+_])}}f.length!==0&&(c.times=ki(f,c.times.constructor),c.values=ki(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function UM(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let u=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=h,y=f-h;_=o.values.slice(m,y)}else if(r>=o.times[p]){const m=p*f+h,y=m+f-h;_=o.values.slice(m,y)}else{const m=o.createInterpolant(),y=h,v=f-h;m.evaluate(r),_=m.resultBuffer.slice(y,v)}l==="quaternion"&&new on().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const y=m*d+u;if(l==="quaternion")on.multiplyQuaternionsFlat(c.values,y,_,0,c.values,y);else{const v=d-u*2;for(let x=0;x<v;++x)c.values[y+x]-=_[x]}}}return s.blendMode=Gc,s}const NM={convertArray:ki,isTypedArray:yp,getKeyframeOrder:Mp,sortedArray:Ec,flattenJSON:ch,subclip:DM,makeClipAdditive:UM};class Qr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sp extends Qr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oi,endingEnd:Oi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bi:r=e,o=2*t-n;break;case Tr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bi:a=e,l=2*n-t;break;case Tr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,v=(-1-d)*g+(1.5+d)*_+.5*p,x=d*g-d*_;for(let P=0;P!==o;++P)r[P]=m*a[h+P]+y*a[c+P]+v*a[l+P]+x*a[f+P];return r}}class hh extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}}class bp extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ki(t,this.TimeBufferType),this.values=ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ki(e.times,Array),values:ki(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&yp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ja,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){const _=t[f+p];if(_!==t[u+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Do;class ss extends Rn{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ar;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class uh extends Rn{}uh.prototype.ValueTypeName="color";class Br extends Rn{}Br.prototype.ValueTypeName="number";class wp extends Qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)on.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ea extends Rn{InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}}ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends Rn{constructor(e,t,n){super(e,t,n)}}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ar;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Rn{}zr.prototype.ValueTypeName="vector";class kr{constructor(e="",t=-1,n=[],i=Xo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(OM(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Rn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Mp(l);l=Ec(l,1,h),c=Ec(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Br(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const f=h[1];let u=i[f];u||(i[f]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,p,_){if(d.length!==0){const g=[],m=[];ch(d,g,m,p),g.length!==0&&_.push(new f(u,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let _=0;_<u[p].morphTargets.length;_++)d[u[p].morphTargets[_]]=-1;for(const _ in d){const g=[],m=[];for(let y=0;y!==u[p].morphTargets.length;++y){const v=u[p];g.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Br(".morphTargetInfluence["+_+"]",g,m))}l=d.length*a}else{const d=".bones["+t[f].name+"]";n(zr,d+".position",u,"pos",i),n(ea,d+".quaternion",u,"rot",i),n(zr,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function FM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Br;case"vector":case"vector2":case"vector3":case"vector4":return zr;case"color":return uh;case"quaternion":return ea;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function OM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=FM(s.type);if(s.times===void 0){const t=[],n=[];ch(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class fh{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const Ep=new fh;class ln{constructor(e){this.manager=e!==void 0?e:Ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ln.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class BM extends Error{constructor(e,t){super(e),this.response=t}}class ti extends ln{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qn[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){f.read().then(({done:v,value:x})=>{if(v)m.close();else{_+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let E=0,C=h.length;E<C;E++){const L=h[E];L.onProgress&&L.onProgress(P)}m.enqueue(x),y()}},v=>{m.error(v)})}}});return new Response(g)}else throw new BM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Zn.add(e,c);const h=qn[e];delete qn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zM extends ln{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ti(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=kr.parse(e[n]);t.push(i)}return t}}class kM extends ln{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new nl,l=new ti(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(f){l.load(e[f],function(u){const d=r.parse(u,!0);a[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Nt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let f=0,u=e.length;f<u;++f)h(f);else l.load(e,function(f){const u=r.parse(f,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+_]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Nt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Vr extends ln{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Dr("img");function l(){h(),Zn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class VM extends ln{constructor(e){super(e)}load(e,t,n,i){const r=new Yr;r.colorSpace=vn;const a=new Vr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class HM extends ln{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Nn,o=new ti(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:xn,a.wrapT=c.wrapT!==void 0?c.wrapT:xn,a.magFilter=c.magFilter!==void 0?c.magFilter:Nt,a.minFilter=c.minFilter!==void 0?c.minFilter:Nt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Dn),c.mipmapCount===1&&(a.minFilter=Nt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class GM extends ln{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new Vr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class yi extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ap extends yi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const oc=new Ie,Zu=new T,Ju=new T;class dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WM extends dh{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tp extends yi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new WM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ku=new Ie,lr=new T,lc=new T;class XM extends dh{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),lc.copy(n.position),lc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lc),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku)}}class Cp extends yi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new XM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qM extends dh{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rp extends yi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new qM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pp extends yi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ip extends yi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Lp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Dp extends yi{constructor(e=new Lp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class _l extends ln{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new ti(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=_l.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new xe().setHex(a.value);break;case"v2":i.uniforms[r].value=new Z().fromArray(a.value);break;case"v3":i.uniforms[r].value=new T().fromArray(a.value);break;case"v4":i.uniforms[r].value=new ft().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Ze().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Ie().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Z().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:up,SpriteMaterial:Qc,RawShaderMaterial:fp,ShaderMaterial:Tn,PointsMaterial:th,MeshPhysicalMaterial:dp,MeshStandardMaterial:lh,MeshPhongMaterial:pp,MeshToonMaterial:mp,MeshNormalMaterial:gp,MeshLambertMaterial:_p,MeshDepthMaterial:Kc,MeshDistanceMaterial:jc,MeshBasicMaterial:vi,MeshMatcapMaterial:vp,LineDashedMaterial:xp,LineBasicMaterial:sn,Material:$t};return new t[e]}}class Ac{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Up extends Qe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Np extends ln{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ti(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const g=d.interleavedBuffers[p],m=r(d,g.buffer),y=Rs(g.type,m),v=new el(y,g.stride);return v.uuid=g.uuid,t[p]=v,v}function r(d,p){if(n[p]!==void 0)return n[p];const g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new Up:new Qe,o=e.data.index;if(o!==void 0){const d=Rs(o.type,o.array);a.setIndex(new xt(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let _;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);_=new Ji(g,p.itemSize,p.offset,p.normalized)}else{const g=Rs(p.type,p.array),m=p.isInstancedBufferAttribute?ks:xt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],_=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let v;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);v=new Ji(x,y.itemSize,y.offset,y.normalized)}else{const x=Rs(y.type,y.array);v=new xt(x,y.itemSize,y.normalized)}y.name!==void 0&&(v.name=y.name),_.push(v)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,p=f.length;d!==p;++d){const _=f[d];a.addGroup(_.start,_.count,_.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const d=new T;u.center!==void 0&&d.fromArray(u.center),a.boundingSphere=new qt(d,u.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class $M extends ln{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Ac.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ti(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){i!==void 0&&i(f),console.error("THREE:ObjectLoader: Can't parse "+e+".",f.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Ac.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new ti(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let f=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Wi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new tl().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Np;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Yu?o=Yu[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new _l;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=kr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Rs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new fh(t);r=new Vr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const f=e[c],u=f.url;if(Array.isArray(u)){const d=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new Nn(m.data,m.width,m.height)))}i[f.uuid]=new zi(d)}else{const d=o(f.url);i[f.uuid]=new zi(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Rs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Vr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Nn(p.data,p.width,p.height)))}n[l.uuid]=new zi(h)}else{const h=await r(l.url);n[l.uuid]=new zi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Yr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Nn:h=new Rt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,YM)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],ju),h.wrapT=n(o.wrap[1],ju)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Qu)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Qu)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let p=0,_=u.length;p<_;p++){const g=u[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),i[u]}let h,f;switch(e.type){case"Scene":a=new qd,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new xe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Qo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new jo(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new zt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Jo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Pp(e.color,e.intensity);break;case"DirectionalLight":a=new Rp(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Cp(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Ip(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Tp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Ap(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Dp().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),f=l(e.material),a=new Jd(h,f),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),f=l(e.material),a=new It(h,f);break;case"InstancedMesh":h=o(e.geometry),f=l(e.material);const u=e.count,d=e.instanceMatrix,p=e.instanceColor;a=new Kd(h,f,u),a.instanceMatrix=new ks(new Float32Array(d.array),16),p!==void 0&&(a.instanceColor=new ks(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(e.geometry),f=l(e.material),a=new jd(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,f),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const g=new Qt;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new qt;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Zd;break;case"Line":a=new mi(o(e.geometry),l(e.material));break;case"LineLoop":a=new Qd(o(e.geometry),l(e.material));break;case"LineSegments":a=new zn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new ep(o(e.geometry),l(e.material));break;case"Sprite":a=new Yd(l(e.material));break;case"Group":a=new Is;break;case"Bone":a=new eh;break;default:a=new rt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let d=0;d<u.length;d++)a.add(this.parseObject(u[d],t,n,i,r))}if(e.animations!==void 0){const u=e.animations;for(let d=0;d<u.length;d++){const p=u[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let d=0;d<u.length;d++){const p=u[d],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new rt}})}}const YM={UVMapping:Bo,CubeReflectionMapping:Qn,CubeRefractionMapping:pi,EquirectangularReflectionMapping:Sr,EquirectangularRefractionMapping:br,CubeUVReflectionMapping:Hs},ju={RepeatWrapping:wr,ClampToEdgeWrapping:xn,MirroredRepeatWrapping:Er},Qu={NearestFilter:kt,NearestMipmapNearestFilter:Dc,NearestMipmapLinearFilter:Cs,LinearFilter:Nt,LinearMipmapNearestFilter:ur,LinearMipmapLinearFilter:Dn};class ZM extends ln{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Zn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(e,l),r.manager.itemStart(e)}}let Ga;class ph{static getContext(){return Ga===void 0&&(Ga=new(window.AudioContext||window.webkitAudioContext)),Ga}static setContext(e){Ga=e}}class JM extends ln{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ti(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);ph.getContext().decodeAudioData(c,function(f){t(f)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const ef=new Ie,tf=new Ie,Ri=new Ie;class KM{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new zt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new zt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Ri.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Gi*t.fov*.5)/t.zoom;let o,l;tf.elements[12]=-i,ef.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Ri.elements[0]=2*t.near/(l-o),Ri.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Ri),o=-a*t.aspect-r,l=a*t.aspect-r,Ri.elements[0]=2*t.near/(l-o),Ri.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Ri)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(tf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ef)}}class Fp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nf(){return(typeof performance>"u"?Date:performance).now()}const Pi=new T,sf=new on,jM=new T,Ii=new T;class QM extends rt{constructor(){super(),this.type="AudioListener",this.context=ph.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Fp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Pi,sf,jM),Ii.set(0,0,-1).applyQuaternion(sf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Pi.x,i),t.positionY.linearRampToValueAtTime(Pi.y,i),t.positionZ.linearRampToValueAtTime(Pi.z,i),t.forwardX.linearRampToValueAtTime(Ii.x,i),t.forwardY.linearRampToValueAtTime(Ii.y,i),t.forwardZ.linearRampToValueAtTime(Ii.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Pi.x,Pi.y,Pi.z),t.setOrientation(Ii.x,Ii.y,Ii.z,n.x,n.y,n.z)}}class Op extends rt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Li=new T,rf=new on,eS=new T,Di=new T;class tS extends Op{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Li,rf,eS),Di.set(0,0,1).applyQuaternion(rf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Li.x,n),t.positionY.linearRampToValueAtTime(Li.y,n),t.positionZ.linearRampToValueAtTime(Li.z,n),t.orientationX.linearRampToValueAtTime(Di.x,n),t.orientationY.linearRampToValueAtTime(Di.y,n),t.orientationZ.linearRampToValueAtTime(Di.z,n)}else t.setPosition(Li.x,Li.y,Li.z),t.setOrientation(Di.x,Di.y,Di.z)}}class nS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Bp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){on.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;on.multiplyQuaternionsFlat(e,a,e,t,e,n),on.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const mh="\\[\\]\\.:\\/",iS=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",sS="[^"+mh.replace("\\.","")+"]",rS=/((?:WC+[\/:])*)/.source.replace("WC",gh),aS=/(WCOD+)?/.source.replace("WCOD",sS),oS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),lS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),cS=new RegExp("^"+rS+aS+oS+lS+"$"),hS=["material","materials","bones","map"];class uS{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iS,"")}static parseTrackName(e){const t=cS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);hS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=uS;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fS{constructor(){this.isAnimationObjectGroup=!0,this.uuid=pn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){const u=arguments[h],d=u.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(u);for(let _=0,g=a;_!==g;++_)r[_].push(new st(u,n[_],i[_]))}else if(p<c){o=e[p];const _=--c,g=e[_];t[g.uuid]=p,e[p]=g,t[d]=_,e[_]=u;for(let m=0,y=a;m!==y;++m){const v=r[m],x=v[_];let P=v[p];v[p]=x,P===void 0&&(P=new st(u,n[m],i[m])),v[_]=P}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const f=r++,u=e[f];t[u.uuid]=h,e[h]=u,t[c]=f,e[f]=l;for(let d=0,p=i;d!==p;++d){const _=n[d],g=_[f],m=_[h];_[h]=g,_[f]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,f=t[h];if(f!==void 0)if(delete t[h],f<r){const u=--r,d=e[u],p=--a,_=e[p];t[d.uuid]=f,e[f]=d,t[_.uuid]=u,e[u]=_,e.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],v=y[u],x=y[p];y[f]=v,y[u]=x,y.pop()}}else{const u=--a,d=e[u];u>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[f]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,f=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(f);for(let u=h,d=l.length;u!==d;++u){const p=l[u];f[u]=new st(p,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class zp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Oi,endingEnd:Oi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Gc:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Xo:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===xd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===_d){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Bi,i.endingEnd=Bi):(e?i.endingStart=this.zeroSlopeAtStart?Bi:Oi:i.endingStart=Tr,t?i.endingEnd=this.zeroSlopeAtEnd?Bi:Oi:i.endingEnd=Tr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const dS=new Float32Array(1);class pS extends Bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){const u=i[f],d=u.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[f]=p;else{if(p=a[f],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const _=t&&t._propertyBindings[f].binding.parsedPath;p=new Bp(st.create(n,d,_),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[f]=p}o[f].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete f[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hh(new Float32Array(2),new Float32Array(2),1,dS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?kr.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Xo),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new zp(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?kr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class _h{constructor(e){this.value=e}clone(){return new _h(this.value.clone===void 0?this.value:this.value.clone())}}let mS=0;class gS extends Bn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:mS++}),this.name="",this.usage=Ir,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class _S extends el{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class vS{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const af=new Ie;class xS{constructor(e,t,n=0,i=1/0){this.ray=new Ws(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(af),this}intersectObject(e,t=!0,n=[]){return Tc(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Tc(e[i],this,n,t);return n.sort(of),n}}function of(s,e){return s.distance-e.distance}function Tc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Tc(r[a],e,t,!0)}}class yS{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class MS{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class vh{constructor(e,t,n,i){vh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const lf=new Z;class SS{constructor(e=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=lf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cf=new T,Wa=new T;class bS{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cf.subVectors(e,this.start),Wa.subVectors(this.end,this.start);const n=Wa.dot(Wa);let r=Wa.dot(cf)/n;return t&&(r=Ct(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const hf=new T;class wS extends rt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Qe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ae(i,3));const r=new sn({fog:!1,toneMapped:!1});this.cone=new zn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),hf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(hf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ui=new T,Xa=new Ie,cc=new Ie;class ES extends zn{constructor(e){const t=kp(e),n=new Qe,i=[],r=[],a=new xe(0,0,1),o=new xe(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ae(i,3)),n.setAttribute("color",new Ae(r,3));const l=new sn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");cc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Xa.multiplyMatrices(cc,o.matrixWorld),ui.setFromMatrixPosition(Xa),i.setXYZ(a,ui.x,ui.y,ui.z),Xa.multiplyMatrices(cc,o.parent.matrixWorld),ui.setFromMatrixPosition(Xa),i.setXYZ(a+1,ui.x,ui.y,ui.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function kp(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,kp(s.children[t]));return e}class AS extends It{constructor(e,t,n){const i=new jr(t,4,2),r=new vi({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const TS=new T,uf=new xe,ff=new xe;class CS extends rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Kr(t);i.rotateY(Math.PI*.5),this.material=new vi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new xt(a,3)),this.add(new It(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");uf.copy(this.light.color),ff.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?uf:ff;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(TS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class RS extends zn{constructor(e=10,t=10,n=4473924,i=8947848){n=new xe(n),i=new xe(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=u===r?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new Qe;h.setAttribute("position",new Ae(l,3)),h.setAttribute("color",new Ae(c,3));const f=new sn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class PS extends zn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new xe(r),a=new xe(a);const o=[],l=[];if(t>1)for(let f=0;f<t;f++){const u=f/t*(Math.PI*2),d=Math.sin(u)*e,p=Math.cos(u)*e;o.push(0,0,0),o.push(d,0,p);const _=f&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let f=0;f<n;f++){const u=f&1?r:a,d=e-e/n*f;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;o.push(g,0,m),l.push(u.r,u.g,u.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new Qe;c.setAttribute("position",new Ae(o,3)),c.setAttribute("color",new Ae(l,3));const h=new sn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const df=new T,qa=new T,pf=new T;class IS extends rt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Qe;i.setAttribute("position",new Ae([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new sn({fog:!1,toneMapped:!1});this.lightPlane=new mi(i,r),this.add(this.lightPlane),i=new Qe,i.setAttribute("position",new Ae([0,0,0,0,0,1],3)),this.targetLine=new mi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),df.setFromMatrixPosition(this.light.matrixWorld),qa.setFromMatrixPosition(this.light.target.matrixWorld),pf.subVectors(qa,df),this.lightPlane.lookAt(qa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(qa),this.targetLine.scale.z=pf.length()}}const $a=new T,Tt=new Zo;class LS extends zn{constructor(e){const t=new Qe,n=new sn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Ae(i,3)),t.setAttribute("color",new Ae(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new xe(16755200),h=new xe(16711680),f=new xe(43775),u=new xe(16777215),d=new xe(3355443);this.setColors(c,h,f,u,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Tt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Pt("c",t,e,Tt,0,0,-1),Pt("t",t,e,Tt,0,0,1),Pt("n1",t,e,Tt,-n,-i,-1),Pt("n2",t,e,Tt,n,-i,-1),Pt("n3",t,e,Tt,-n,i,-1),Pt("n4",t,e,Tt,n,i,-1),Pt("f1",t,e,Tt,-n,-i,1),Pt("f2",t,e,Tt,n,-i,1),Pt("f3",t,e,Tt,-n,i,1),Pt("f4",t,e,Tt,n,i,1),Pt("u1",t,e,Tt,n*.7,i*1.1,-1),Pt("u2",t,e,Tt,-n*.7,i*1.1,-1),Pt("u3",t,e,Tt,0,i*2,-1),Pt("cf1",t,e,Tt,-n,0,1),Pt("cf2",t,e,Tt,n,0,1),Pt("cf3",t,e,Tt,0,-i,1),Pt("cf4",t,e,Tt,0,i,1),Pt("cn1",t,e,Tt,-n,0,-1),Pt("cn2",t,e,Tt,n,0,-1),Pt("cn3",t,e,Tt,0,-i,-1),Pt("cn4",t,e,Tt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pt(s,e,t,n,i,r,a){$a.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],$a.x,$a.y,$a.z)}}const Ya=new Qt;class DS extends zn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Qe;r.setIndex(new xt(n,1)),r.setAttribute("position",new xt(i,3)),super(r,new sn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ya.setFromObject(this.object),Ya.isEmpty())return;const t=Ya.min,n=Ya.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class US extends zn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Qe;r.setIndex(new xt(n,1)),r.setAttribute("position",new Ae(i,3)),super(r,new sn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class NS extends mi{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Qe;a.setAttribute("position",new Ae(r,3)),a.computeBoundingSphere(),super(a,new sn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Qe;l.setAttribute("position",new Ae(o,3)),l.computeBoundingSphere(),this.add(new It(l,new vi({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const mf=new T;let Za,hc;class FS extends rt{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Za===void 0&&(Za=new Qe,Za.setAttribute("position",new Ae([0,0,0,0,1,0],3)),hc=new $s(0,.5,1,5,1),hc.translate(0,-.5,0)),this.position.copy(t),this.line=new mi(Za,new sn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new It(hc,new vi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{mf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(mf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class OS extends zn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Qe;i.setAttribute("position",new Ae(t,3)),i.setAttribute("color",new Ae(n,3));const r=new sn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new xe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class BS{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ur,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let v=0,x=m.length;v<x;v++){const P=m[v],E=new Wi;E.curves=P.curves,y.push(E)}return y}function n(m,y){const v=y.length;let x=!1;for(let P=v-1,E=0;E<v;P=E++){let C=y[P],L=y[E],b=L.x-C.x,M=L.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=y[E],b=-b,L=y[P],M=-M),m.y<C.y||m.y>L.y)continue;if(m.y===C.y){if(m.x===C.x)return!0}else{const R=M*(m.x-C.x)-b*(m.y-C.y);if(R===0)return!0;if(R<0)continue;x=!x}}else{if(m.y!==C.y)continue;if(L.x<=m.x&&m.x<=C.x||C.x<=m.x&&m.x<=L.x)return!0}}return x}const i=Fn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Wi,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const f=[],u=[];let d=[],p=0,_;u[p]=void 0,d[p]=[];for(let m=0,y=r.length;m<y;m++)o=r[m],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&u[p]&&p++,u[p]={s:new Wi,p:_},u[p].s.curves=o.curves,h&&p++,d[p]=[]):d[p].push({h:o,p:_[0]});if(!u[0])return t(r);if(u.length>1){let m=!1,y=0;for(let v=0,x=u.length;v<x;v++)f[v]=[];for(let v=0,x=u.length;v<x;v++){const P=d[v];for(let E=0;E<P.length;E++){const C=P[E];let L=!0;for(let b=0;b<u.length;b++)n(C.p,u[b].p)&&(v!==b&&y++,L?(L=!1,f[b].push(C)):m=!0);L&&f[v].push(C)}}y>0&&m===!1&&(d=f)}let g;for(let m=0,y=u.length;m<y;m++){l=u[m].s,c.push(l),g=d[m];for(let v=0,x=g.length;v<x;v++)l.holes.push(g[v].h)}return c}}class zS extends Bn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class kS extends An{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const VS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:fd,AddEquation:di,AddOperation:ld,AdditiveAnimationBlendMode:Gc,AdditiveBlending:dc,AgXToneMapping:pd,AlphaFormat:Oc,AlwaysCompare:Rd,AlwaysDepth:td,AlwaysStencilFunc:_c,AmbientLight:Pp,AnimationAction:zp,AnimationClip:kr,AnimationLoader:zM,AnimationMixer:pS,AnimationObjectGroup:fS,AnimationUtils:NM,ArcCurve:tp,ArrayCamera:Xd,ArrowHelper:FS,AttachedBindMode:gc,Audio:Op,AudioAnalyser:nS,AudioContext:ph,AudioListener:QM,AudioLoader:JM,AxesHelper:OS,BackSide:jt,BasicDepthPacking:yd,BasicShadowMap:Dm,BatchedMesh:jd,Bone:eh,BooleanKeyframeTrack:ss,Box2:SS,Box3:Qt,Box3Helper:US,BoxGeometry:is,BoxHelper:DS,BufferAttribute:xt,BufferGeometry:Qe,BufferGeometryLoader:Np,ByteType:Uc,Cache:Zn,Camera:Zo,CameraHelper:LS,CanvasTexture:rM,CapsuleGeometry:sl,CatmullRomCurve3:np,CineonToneMapping:ud,CircleGeometry:rl,ClampToEdgeWrapping:xn,Clock:Fp,Color:xe,ColorKeyframeTrack:uh,ColorManagement:ot,CompressedArrayTexture:iM,CompressedCubeTexture:sM,CompressedTexture:nl,CompressedTextureLoader:kM,ConeGeometry:al,ConstantAlphaFactor:jf,ConstantColorFactor:Jf,Controls:zS,CubeCamera:Od,CubeReflectionMapping:Qn,CubeRefractionMapping:pi,CubeTexture:Yr,CubeTextureLoader:VM,CubeUVReflectionMapping:Hs,CubicBezierCurve:ih,CubicBezierCurve3:ip,CubicInterpolant:Sp,CullFaceBack:fc,CullFaceFront:Uf,CullFaceFrontBack:Lm,CullFaceNone:Df,Curve:Cn,CurvePath:rp,CustomBlending:Ff,CustomToneMapping:dd,CylinderGeometry:$s,Cylindrical:MS,Data3DTexture:qc,DataArrayTexture:$o,DataTexture:Nn,DataTextureLoader:HM,DataUtils:qg,DecrementStencilOp:$m,DecrementWrapStencilOp:Zm,DefaultLoadingManager:Ep,DepthFormat:Hi,DepthStencilFormat:Zi,DepthTexture:Jc,DetachedBindMode:gd,DirectionalLight:Rp,DirectionalLightHelper:IS,DiscreteInterpolant:bp,DisplayP3ColorSpace:qo,DodecahedronGeometry:ol,DoubleSide:Ln,DstAlphaFactor:Xf,DstColorFactor:$f,DynamicCopyUsage:hg,DynamicDrawUsage:sg,DynamicReadUsage:og,EdgesGeometry:ap,EllipseCurve:il,EqualCompare:Ed,EqualDepth:id,EqualStencilFunc:Qm,EquirectangularReflectionMapping:Sr,EquirectangularRefractionMapping:br,Euler:mn,EventDispatcher:Bn,ExtrudeGeometry:cl,FileLoader:ti,Float16BufferAttribute:jg,Float32BufferAttribute:Ae,FloatType:an,Fog:Qo,FogExp2:jo,FramebufferTexture:nM,FrontSide:jn,Frustum:Zr,GLBufferAttribute:vS,GLSL1:fg,GLSL3:vc,GreaterCompare:Ad,GreaterDepth:rd,GreaterEqualCompare:Cd,GreaterEqualDepth:sd,GreaterEqualStencilFunc:ig,GreaterStencilFunc:tg,GridHelper:RS,Group:Is,HalfFloatType:Gs,HemisphereLight:Ap,HemisphereLightHelper:CS,IcosahedronGeometry:hl,ImageBitmapLoader:ZM,ImageLoader:Vr,ImageUtils:Ld,IncrementStencilOp:qm,IncrementWrapStencilOp:Ym,InstancedBufferAttribute:ks,InstancedBufferGeometry:Up,InstancedInterleavedBuffer:_S,InstancedMesh:Kd,Int16BufferAttribute:Jg,Int32BufferAttribute:Kg,Int8BufferAttribute:$g,IntType:zo,InterleavedBuffer:el,InterleavedBufferAttribute:Ji,Interpolant:Qr,InterpolateDiscrete:Ar,InterpolateLinear:Do,InterpolateSmooth:ja,InvertStencilOp:Jm,KeepStencilOp:Ui,KeyframeTrack:Rn,LOD:Zd,LatheGeometry:Jr,Layers:Yo,LessCompare:wd,LessDepth:nd,LessEqualCompare:Wc,LessEqualDepth:Mr,LessEqualStencilFunc:eg,LessStencilFunc:jm,Light:yi,LightProbe:Dp,Line:mi,Line3:bS,LineBasicMaterial:sn,LineCurve:sh,LineCurve3:sp,LineDashedMaterial:xp,LineLoop:Qd,LineSegments:zn,LinearDisplayP3ColorSpace:$r,LinearFilter:Nt,LinearInterpolant:hh,LinearMipMapLinearFilter:Om,LinearMipMapNearestFilter:Fm,LinearMipmapLinearFilter:Dn,LinearMipmapNearestFilter:ur,LinearSRGBColorSpace:ni,LinearToneMapping:cd,LinearTransfer:Cr,Loader:ln,LoaderUtils:Ac,LoadingManager:fh,LoopOnce:_d,LoopPingPong:xd,LoopRepeat:vd,LuminanceAlphaFormat:kc,LuminanceFormat:zc,MOUSE:Pm,Material:$t,MaterialLoader:_l,MathUtils:Rg,Matrix2:vh,Matrix3:Ze,Matrix4:Ie,MaxEquation:kf,Mesh:It,MeshBasicMaterial:vi,MeshDepthMaterial:Kc,MeshDistanceMaterial:jc,MeshLambertMaterial:_p,MeshMatcapMaterial:vp,MeshNormalMaterial:gp,MeshPhongMaterial:pp,MeshPhysicalMaterial:dp,MeshStandardMaterial:lh,MeshToonMaterial:mp,MinEquation:zf,MirroredRepeatWrapping:Er,MixOperation:od,MultiplyBlending:mc,MultiplyOperation:Xr,NearestFilter:kt,NearestMipMapLinearFilter:Nm,NearestMipMapNearestFilter:Um,NearestMipmapLinearFilter:Cs,NearestMipmapNearestFilter:Dc,NeutralToneMapping:md,NeverCompare:bd,NeverDepth:ed,NeverStencilFunc:Km,NoBlending:Jn,NoColorSpace:$n,NoToneMapping:Kn,NormalAnimationBlendMode:Xo,NormalBlending:Vi,NotEqualCompare:Td,NotEqualDepth:ad,NotEqualStencilFunc:ng,NumberKeyframeTrack:Br,Object3D:rt,ObjectLoader:$M,ObjectSpaceNormalMap:Sd,OctahedronGeometry:Kr,OneFactor:Hf,OneMinusConstantAlphaFactor:Qf,OneMinusConstantColorFactor:Kf,OneMinusDstAlphaFactor:qf,OneMinusDstColorFactor:Yf,OneMinusSrcAlphaFactor:ro,OneMinusSrcColorFactor:Wf,OrthographicCamera:Jo,P3Primaries:Pr,PCFShadowMap:Lc,PCFSoftShadowMap:Nf,PMREMGenerator:xc,Path:Ur,PerspectiveCamera:zt,Plane:fi,PlaneGeometry:Xs,PlaneHelper:NS,PointLight:Cp,PointLightHelper:AS,Points:ep,PointsMaterial:th,PolarGridHelper:PS,PolyhedronGeometry:xi,PositionalAudio:tS,PropertyBinding:st,PropertyMixer:Bp,QuadraticBezierCurve:rh,QuadraticBezierCurve3:ah,Quaternion:on,QuaternionKeyframeTrack:ea,QuaternionLinearInterpolant:wp,RED_GREEN_RGTC2_Format:Io,RED_RGTC1_Format:Hc,REVISION:Oo,RGBADepthPacking:Md,RGBAFormat:Kt,RGBAIntegerFormat:Wo,RGBA_ASTC_10x10_Format:Eo,RGBA_ASTC_10x5_Format:So,RGBA_ASTC_10x6_Format:bo,RGBA_ASTC_10x8_Format:wo,RGBA_ASTC_12x10_Format:Ao,RGBA_ASTC_12x12_Format:To,RGBA_ASTC_4x4_Format:po,RGBA_ASTC_5x4_Format:mo,RGBA_ASTC_5x5_Format:go,RGBA_ASTC_6x5_Format:_o,RGBA_ASTC_6x6_Format:vo,RGBA_ASTC_8x5_Format:xo,RGBA_ASTC_8x6_Format:yo,RGBA_ASTC_8x8_Format:Mo,RGBA_BPTC_Format:gr,RGBA_ETC2_EAC_Format:fo,RGBA_PVRTC_2BPPV1_Format:co,RGBA_PVRTC_4BPPV1_Format:lo,RGBA_S3TC_DXT1_Format:dr,RGBA_S3TC_DXT3_Format:pr,RGBA_S3TC_DXT5_Format:mr,RGBDepthPacking:Hm,RGBFormat:Bc,RGBIntegerFormat:Bm,RGB_BPTC_SIGNED_Format:Co,RGB_BPTC_UNSIGNED_Format:Ro,RGB_ETC1_Format:ho,RGB_ETC2_Format:uo,RGB_PVRTC_2BPPV1_Format:oo,RGB_PVRTC_4BPPV1_Format:ao,RGB_S3TC_DXT1_Format:fr,RGDepthPacking:Gm,RGFormat:Vc,RGIntegerFormat:Go,RawShaderMaterial:fp,Ray:Ws,Raycaster:xS,Rec709Primaries:Rr,RectAreaLight:Ip,RedFormat:Ho,RedIntegerFormat:qr,ReinhardToneMapping:hd,RenderTarget:Dd,RepeatWrapping:wr,ReplaceStencilOp:Xm,ReverseSubtractEquation:Bf,RingGeometry:ul,SIGNED_RED_GREEN_RGTC2_Format:Lo,SIGNED_RED_RGTC1_Format:Po,SRGBColorSpace:vn,SRGBTransfer:yt,Scene:qd,ShaderChunk:Ue,ShaderLib:En,ShaderMaterial:Tn,ShadowMaterial:up,Shape:Wi,ShapeGeometry:fl,ShapePath:BS,ShapeUtils:Fn,ShortType:Nc,Skeleton:tl,SkeletonHelper:ES,SkinnedMesh:Jd,Source:zi,Sphere:qt,SphereGeometry:jr,Spherical:yS,SphericalHarmonics3:Lp,SplineCurve:oh,SpotLight:Tp,SpotLightHelper:wS,Sprite:Yd,SpriteMaterial:Qc,SrcAlphaFactor:so,SrcAlphaSaturateFactor:Zf,SrcColorFactor:Gf,StaticCopyUsage:cg,StaticDrawUsage:Ir,StaticReadUsage:ag,StereoCamera:KM,StreamCopyUsage:ug,StreamDrawUsage:rg,StreamReadUsage:lg,StringKeyframeTrack:rs,SubtractEquation:Of,SubtractiveBlending:pc,TOUCH:Im,TangentSpaceNormalMap:_i,TetrahedronGeometry:dl,Texture:Rt,TextureLoader:GM,TextureUtils:Uy,TorusGeometry:pl,TorusKnotGeometry:ml,Triangle:dn,TriangleFanDrawMode:Vm,TriangleStripDrawMode:km,TrianglesDrawMode:zm,TubeGeometry:gl,UVMapping:Bo,Uint16BufferAttribute:$c,Uint32BufferAttribute:Yc,Uint8BufferAttribute:Yg,Uint8ClampedBufferAttribute:Zg,Uniform:_h,UniformsGroup:gS,UniformsLib:de,UniformsUtils:Fd,UnsignedByteType:On,UnsignedInt248Type:Yi,UnsignedInt5999Type:Fc,UnsignedIntType:ei,UnsignedShort4444Type:ko,UnsignedShort5551Type:Vo,UnsignedShortType:Os,VSMShadowMap:In,Vector2:Z,Vector3:T,Vector4:ft,VectorKeyframeTrack:zr,VideoTexture:tM,WebGL3DRenderTarget:Fg,WebGLArrayRenderTarget:Ng,WebGLCoordinateSystem:Un,WebGLCubeRenderTarget:Bd,WebGLMultipleRenderTargets:kS,WebGLRenderTarget:An,WebGLRenderer:Wy,WebGLUtils:Wd,WebGPUCoordinateSystem:Lr,WireframeGeometry:hp,WrapAroundEnding:Tr,ZeroCurvatureEnding:Oi,ZeroFactor:Vf,ZeroSlopeEnding:Bi,ZeroStencilOp:Wm,createCanvasElement:Id},Symbol.toStringTag,{value:"Module"})),HS=(s,e)=>{const t=sm(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});gi(()=>{i(),n&&n()})},Vp=new zt(75,0,.1,1e3);Vp.position.z=5;Vp.lookAt(0,0,0);function Hp(s,e){const t=io(s);let n=s;const i=t.subscribe(o=>n=o);return gi(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const vl=()=>{const s=Xi("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},xh=Symbol("threlte-hierarchical-parent-context"),Gp=()=>Xi(xh),GS=s=>yr(xh,s),WS=s=>{const e=Hp(s);return yr(xh,e),e};function XS(s){let e;const t=s[7].default,n=Qi(t,s,s[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&es(n,t,i,i[6],e?ns(t,i[6],r,null):ts(i[6]),null)},i(i){e||(Ke(n,i),e=!0)},o(i){je(n,i),e=!1},d(i){n&&n.d(i)}}}const qS=()=>({onChildMount:Xi("threlte-hierarchical-object-on-mount"),onChildDestroy:Xi("threlte-hierarchical-object-on-destroy")});function $S(s,e,t){var g;let n,{$$slots:i={},$$scope:r}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const l=m=>{o==null||o(m)};let{onChildDestroy:c=void 0}=e;const h=m=>{c==null||c(m)},{invalidate:f}=vl(),u=Gp();to(s,u,m=>t(5,n=m));let{parent:d=n}=e;const p=qS();a&&((g=p.onChildMount)==null||g.call(p,a),f());const _=Hp(a,(m,y)=>{var v,x;y&&((v=p.onChildDestroy)==null||v.call(p,y),f()),m&&((x=p.onChildMount)==null||x.call(p,m),f())});return gi(()=>{var m;a&&((m=p.onChildDestroy)==null||m.call(p,a),f())}),yr("threlte-hierarchical-object-on-mount",l),yr("threlte-hierarchical-object-on-destroy",h),GS(_),s.$$set=m=>{"object"in m&&t(2,a=m.object),"onChildMount"in m&&t(3,o=m.onChildMount),"onChildDestroy"in m&&t(4,c=m.onChildDestroy),"parent"in m&&t(1,d=m.parent),"$$scope"in m&&t(6,r=m.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,d=n),s.$$.dirty&4&&_.set(a)},[u,d,a,o,c,n,r,i]}class YS extends tn{constructor(e){super(),nn(this,e,$S,XS,en,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function ZS(s){let e;const t=s[1].default,n=Qi(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&es(n,t,i,i[4],e?ns(t,i[4],r,null):ts(i[4]),null)},i(i){e||(Ke(n,i),e=!0)},o(i){je(n,i),e=!1},d(i){n&&n.d(i)}}}function JS(s){let e,t;return e=new YS({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[ZS]},$$scope:{ctx:s}}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function KS(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,a,o,i]}class jS extends tn{constructor(e){super(),nn(this,e,KS,JS,en,{object:0})}}const QS=()=>Xi("threlte-internal-context");function eb(s){let e;const t=s[9].default,n=Qi(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&es(n,t,i,i[8],e?ns(t,i[8],r,null):ts(i[8]),null)},i(i){e||(Ke(n,i),e=!0)},o(i){je(n,i),e=!1},d(i){n&&n.d(i)}}}const gf="threlte-disposable-object-context";function tb(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=QS();let{object:h=void 0}=e,f=h,{dispose:u=void 0}=e;const d=Xi(gf);to(s,d,g=>t(7,i=g));const p=io(u??i??!0);to(s,p,g=>t(6,n=g)),yr(gf,p);let _=n?o(h):[];return l(_),gi(()=>{c(_)}),s.$$set=g=>{"object"in g&&t(2,h=g.object),"dispose"in g&&t(3,u=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&p.set(u??i??!0),s.$$.dirty&116&&h!==f&&(c(_),t(5,_=n?o(h):[]),l(_),t(4,f=h))},[d,p,h,u,f,_,n,i,a,r]}class nb extends tn{constructor(e){super(),nn(this,e,tb,eb,en,{object:2,dispose:3})}}const ib=/^\s*class\s+/,sb=s=>typeof s!="function"?!1:ib.test(s.toString()),rb=s=>Array.isArray(s),_f=(s,e)=>sb(s)?rb(e)?new s(...e):new s:s,ab=s=>"isObject3D"in s,vf=s=>"dispose"in s,Wp=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},uc=Symbol("initialValueBeforeAttach"),ob=()=>{const{invalidate:s}=vl();let e=!1,t=uc,n,i,r;const a=(l,c,h)=>{if(o(),!h){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(h="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(c,l);else{const{target:f,key:u}=Wp(c,h);t=f[u],f[u]=l,i=f,r=u}e=!0,s()}},o=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==uc&&(i[r]=t,t=uc,i=void 0,r=void 0),e=!1,s())};return gi(()=>{o()}),{update:a}},lb=s=>s&&s.isCamera,Xp=s=>s&&s.isOrthographicCamera,qp=s=>s&&s.isPerspectiveCamera,cb=s=>qp(s)||Xp(s),hb=()=>{const{invalidate:s,size:e,camera:t}=vl();let n,i;gi(()=>{i==null||i()});const r=l=>{n&&(Xp(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):qp(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(l,c)=>{if(i==null||i(),c||!cb(l)){n=void 0;return}n=l,i=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!lb(l)||!c||(t.set(l),s())}}},$p=()=>{const s=Lf(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},ub=()=>{const s=$p(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,s("create",{ref:t,cleanup:o=>{e.push(o)}})},r=a=>{t=a,n&&i()};return Vs(()=>{i(),n=!0}),gi(()=>{e.forEach(a=>a())}),{updateRef:r}},xf=s=>!!(s!=null&&s.addEventListener),fb=()=>{const s=$p(),e=Lf(),t=l=>{l!=null&&l.type&&s(l.type,l)},n=(l,c)=>{xf(l)&&c.forEach(h=>{l.removeEventListener(h,t)})},i=(l,c)=>{xf(l)&&c.forEach(h=>{l.addEventListener(h,t)})},r=io(),a=io([]);return HS([r,a],([l,c])=>(i(l,c),()=>n(l,c))),Vs(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:l=>{r.set(l)}}},db=s=>{const t=Xi("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(c=>c(s)).filter(Boolean),i=n.flatMap(c=>c.pluginProps??[]);let r=[];return gi(()=>{r.forEach(c=>c())}),{updateRef:c=>{r.forEach(h=>h()),r=[],n.forEach(h=>{var u;const f=(u=h.onRefChange)==null?void 0:u.call(h,c);f&&r.push(f)})},updateProps:c=>{n.forEach(h=>{var f;(f=h.onPropsChange)==null||f.call(h,c)})},updateRestProps:c=>{n.forEach(h=>{var f;(f=h.onRestPropsChange)==null||f.call(h,c)})},pluginsProps:i}},pb=new Set(["$$scope","$$slots","type","args","attach","instance"]),mb=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),gb=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,yf=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},_b=()=>{const{invalidate:s}=vl(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(gb(o)){const f=e.get(a);if(f&&f.instance===r&&f.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=Wp(r,a);if(o!=null){const f=t.get(a);if(f)f(h,c,o);else{const u=yf(h,c,o);t.set(a,u),u(h,c,o)}}else yf(h,c,o)(h,c,o);l.manualCamera||mb.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(r,a,o)=>{var l;for(const c in a)!pb.has(c)&&!((l=o.pluginsProps)!=null&&l.includes(c))&&n(r,c,a[c],o),s()}}},vb=s=>({ref:s&2}),Mf=s=>({ref:s[1]}),xb=s=>({ref:s&2}),Sf=s=>({ref:s[1]});function bf(s){let e,t;return e=new nb({props:{object:s[1],dispose:s[0]}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function yb(s){let e;const t=s[10].default,n=Qi(t,s,s[11],Mf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&es(n,t,i,i[11],e?ns(t,i[11],r,vb):ts(i[11]),Mf)},i(i){e||(Ke(n,i),e=!0)},o(i){je(n,i),e=!1},d(i){n&&n.d(i)}}}function Mb(s){let e,t;return e=new jS({props:{object:s[1],$$slots:{default:[Sb]},$$scope:{ctx:s}}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function Sb(s){let e;const t=s[10].default,n=Qi(t,s,s[11],Sf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&es(n,t,i,i[11],e?ns(t,i[11],r,xb):ts(i[11]),Sf)},i(i){e||(Ke(n,i),e=!0)},o(i){je(n,i),e=!1},d(i){n&&n.d(i)}}}function bb(s){let e=vf(s[1]),t,n,i,r,a,o,l=e&&bf(s);const c=[Mb,yb],h=[];function f(u,d){return d&2&&(n=null),n==null&&(n=!!ab(u[1])),n?0:1}return i=f(s,-1),r=h[i]=c[i](s),{c(){l&&l.c(),t=qe(),r.c(),a=Ih()},l(u){l&&l.l(u),t=$e(u),r.l(u),a=Ih()},m(u,d){l&&l.m(u,d),Te(u,t,d),h[i].m(u,d),Te(u,a,d),o=!0},p(u,[d]){d&2&&(e=vf(u[1])),e?l?(l.p(u,d),d&2&&Ke(l,1)):(l=bf(u),l.c(),Ke(l,1),l.m(t.parentNode,t)):l&&(Dh(),je(l,1,1,()=>{l=null}),Lh());let p=i;i=f(u,d),i===p?h[i].p(u,d):(Dh(),je(h[p],1,1,()=>{h[p]=null}),Lh(),r=h[i],r?r.p(u,d):(r=h[i]=c[i](u),r.c()),Ke(r,1),r.m(a.parentNode,a))},i(u){o||(Ke(l),Ke(r),o=!0)},o(u){je(l),je(r),o=!1},d(u){u&&(re(t),re(a)),l&&l.d(u),h[i].d(u)}}}function wb(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=Th(e,n),r,{$$slots:a={},$$scope:o}=e,{is:l}=e,{args:c=void 0}=e,{attach:h=void 0}=e,{manual:f=void 0}=e,{makeDefault:u=void 0}=e,{dispose:d=void 0}=e;const p=Gp();to(s,p,R=>t(9,r=R));const _=ub();let g=_f(l,c);_.updateRef(g);let m=!1;const y=()=>{if(!m){m=!0;return}t(1,g=_f(l,c)),_.updateRef(g)};let{ref:v=g}=e;const x=WS(g),P=db({ref:g,props:e}),E=(P==null?void 0:P.pluginsProps)??[],C=_b(),L=hb(),b=ob(),M=fb();return s.$$set=R=>{t(23,e=Ch(Ch({},e),Rh(R))),t(22,i=Th(e,n)),"is"in R&&t(4,l=R.is),"args"in R&&t(5,c=R.args),"attach"in R&&t(6,h=R.attach),"manual"in R&&t(7,f=R.manual),"makeDefault"in R&&t(8,u=R.makeDefault),"dispose"in R&&t(0,d=R.dispose),"ref"in R&&t(3,v=R.ref),"$$scope"in R&&t(11,o=R.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&y(),s.$$.dirty&2&&t(3,v=g),s.$$.dirty&2&&x.set(g),C.updateProps(g,i,{manualCamera:f,pluginsProps:E}),s.$$.dirty&130&&L.update(g,f),s.$$.dirty&258&&L.makeDefaultCamera(g,u),s.$$.dirty&578&&b.update(g,r,h),s.$$.dirty&2&&M.updateRef(g),s.$$.dirty&2&&(P==null||P.updateRef(g)),P==null||P.updateProps(e),P==null||P.updateRestProps(i)},e=Rh(e),[d,g,p,v,l,c,h,f,u,r,a,o]}class Yp extends tn{constructor(e){super(),nn(this,e,wb,bb,en,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}}const Eb={},Ab=(s,e)=>{const t=Eb[e]||VS[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},Tb=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new Yp(Ab(n,s))}});new Proxy(class{},{construct(s,[e]){const t=e;return new Yp(t)},get(s,e){return Tb(e)}});new T;new T;new T;new Ie;new Ie;new It;`${Ue.logdepthbuf_pars_vertex}${Ue.fog_pars_vertex}${Ue.logdepthbuf_vertex}${Ue.fog_vertex}`;`${Ue.tonemapping_fragment}${Ue.colorspace_fragment}`;`${Ue.tonemapping_fragment}${Ue.colorspace_fragment}`;const Cb=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Rb=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Pb=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Ib=Pb,Lb=`
	${Cb}
	${Rb}
`;`${Ib}${Lb}${Ue.tonemapping_fragment}${Ue.colorspace_fragment}`;for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);var Zp={exports:{}};Zp.exports=xl;Zp.exports.default=xl;function xl(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Jp(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,f,u,d;if(n&&(r=Ob(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var p=t;p<i;p+=t)f=s[p],u=s[p+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Hr(r,a,t,o,l,d,0),a}function Jp(s,e,t,n,i){var r,a;if(i===Pc(s,e,t,n)>0)for(r=e;r<t;r+=n)a=wf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=wf(r,s[r],s[r+1],a);return a&&yl(a,a.next)&&(Wr(a),a=a.next),a}function ji(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(yl(t,t.next)||wt(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(s,e,t,n,i,r,a){if(s){!a&&r&&Hb(s,n,i,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ub(s,n,i,r):Db(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Wr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Nb(ji(s),e,t),Hr(s,e,t,n,i,r,2)):a===2&&Fb(s,e,t,n,i,r):Hr(ji(s),e,t,n,i,r,1);break}}}}function Db(s){var e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Ds(i,o,r,l,a,c,p.x,p.y)&&wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ub(s,e,t,n){var i=s.prev,r=s,a=s.next;if(wt(i,r,a)>=0)return!1;for(var o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<f?h<u?h:u:f<u?f:u,_=o>l?o>c?o:c:l>c?l:c,g=h>f?h>u?h:u:f>u?f:u,m=Cc(d,p,e,t,n),y=Cc(_,g,e,t,n),v=s.prevZ,x=s.nextZ;v&&v.z>=m&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&Ds(o,h,l,f,c,u,v.x,v.y)&&wt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&Ds(o,h,l,f,c,u,x.x,x.y)&&wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&Ds(o,h,l,f,c,u,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&Ds(o,h,l,f,c,u,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Nb(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!yl(i,r)&&Kp(i,n,n.next,r)&&Gr(i,r)&&Gr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wr(n),Wr(n.next),n=s=r),n=n.next}while(n!==s);return ji(n)}function Fb(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&Xb(a,o)){var l=jp(a,o);a=ji(a,a.next),l=ji(l,l.next),Hr(a,e,t,n,i,r,0),Hr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ob(s,e,t,n){var i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Jp(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Wb(c));for(i.sort(Bb),r=0;r<i.length;r++)t=zb(i[r],t);return t}function Bb(s,e){return s.x-e.x}function zb(s,e){var t=kb(s,e);if(!t)return e;var n=jp(t,s);return ji(n,n.next),ji(t,t.next)}function kb(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,f=1/0,u;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&Ds(i<h?n:r,i,c,h,i<h?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Gr(t,s)&&(u<f||u===f&&(t.x>a.x||t.x===a.x&&Vb(a,t)))&&(a=t,f=u)),t=t.next;while(t!==l);return a}function Vb(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function Hb(s,e,t,n){var i=s;do i.z===0&&(i.z=Cc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Gb(i)}function Gb(s){var e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Cc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Wb(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ds(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Xb(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!qb(s,e)&&(Gr(s,e)&&Gr(e,s)&&$b(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||yl(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function yl(s,e){return s.x===e.x&&s.y===e.y}function Kp(s,e,t,n){var i=Ka(wt(s,e,t)),r=Ka(wt(s,e,n)),a=Ka(wt(t,n,s)),o=Ka(wt(t,n,e));return!!(i!==r&&a!==o||i===0&&Ja(s,t,e)||r===0&&Ja(s,n,e)||a===0&&Ja(t,s,n)||o===0&&Ja(t,e,n))}function Ja(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ka(s){return s>0?1:s<0?-1:0}function qb(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Kp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Gr(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function $b(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function jp(s,e){var t=new Rc(s.i,s.x,s.y),n=new Rc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wf(s,e,t,n){var i=new Rc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}xl.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(Pc(s,0,r,t));if(i)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(Pc(s,c,h,t))}var f=0;for(o=0;o<n.length;o+=3){var u=n[o]*t,d=n[o+1]*t,p=n[o+2]*t;f+=Math.abs((s[u]-s[p])*(s[d+1]-s[u+1])-(s[u]-s[d])*(s[p+1]-s[u+1]))}return a===0&&f===0?0:Math.abs((f-a)/a)};function Pc(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}xl.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new Z;new Z;var Ef;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const l=i[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const l=i[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Ef||(Ef={}));function Af(s,e,t){const n=s.slice();return n[11]=e[t],n}function Tf(s){let e,t,n,i,r;return{c(){e=Ne("div"),t=qi(s[8]),n=qe(),i=Ne("img"),this.h()},l(a){e=Fe(a,"DIV",{class:!0});var o=vt(e);t=$i(o,s[8]),n=$e(o),i=Fe(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(re),this.h()},h(){Mt(i.src,r="/star.png")||$(i,"src",r),$(i,"alt",""),$(i,"class","svelte-t7f5x9"),$(e,"class","stars svelte-t7f5x9")},m(a,o){Te(a,e,o),ze(e,t),ze(e,n),ze(e,i)},p(a,o){o&256&&Fs(t,a[8])},d(a){a&&re(e)}}}function Cf(s){let e,t,n,i,r;return{c(){e=Ne("div"),t=qi(s[9]),n=qe(),i=Ne("img"),this.h()},l(a){e=Fe(a,"DIV",{class:!0});var o=vt(e);t=$i(o,s[9]),n=$e(o),i=Fe(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(re),this.h()},h(){Mt(i.src,r="/people.png")||$(i,"src",r),$(i,"alt",""),$(i,"class","svelte-t7f5x9"),$(e,"class","downloads svelte-t7f5x9")},m(a,o){Te(a,e,o),ze(e,t),ze(e,n),ze(e,i)},p(a,o){o&512&&Fs(t,a[9])},d(a){a&&re(e)}}}function Rf(s){let e,t,n;return{c(){e=Ne("video"),t=Ne("source"),this.h()},l(i){e=Fe(i,"VIDEO",{class:!0});var r=vt(e);t=Fe(r,"SOURCE",{src:!0}),r.forEach(re),this.h()},h(){Mt(t.src,n=`/${s[3]}`)||$(t,"src",n),e.autoplay=!0,e.muted=!0,e.loop=!0,e.playsInline=!0,$(e,"class","svelte-t7f5x9")},m(i,r){Te(i,e,r),ze(e,t)},p(i,r){r&8&&!Mt(t.src,n=`/${i[3]}`)&&$(t,"src",n)},d(i){i&&re(e)}}}function Yb(s){let e,t="Open source project op",n,i,r,a,o,l="GitHub";return{c(){e=Ne("span"),e.textContent=t,n=qe(),i=Ne("img"),a=qe(),o=Ne("span"),o.textContent=l,this.h()},l(c){e=Fe(c,"SPAN",{"data-svelte-h":!0}),no(e)!=="svelte-1xfv9ih"&&(e.textContent=t),n=$e(c),i=Fe(c,"IMG",{src:!0,alt:!0,class:!0}),a=$e(c),o=Fe(c,"SPAN",{"data-svelte-h":!0}),no(o)!=="svelte-1l01zul"&&(o.textContent=l),this.h()},h(){Mt(i.src,r="/github.svg")||$(i,"src",r),$(i,"alt",""),$(i,"class","svelte-t7f5x9")},m(c,h){Te(c,e,h),Te(c,n,h),Te(c,i,h),Te(c,a,h),Te(c,o,h)},p:dt,d(c){c&&(re(e),re(n),re(i),re(a),re(o))}}}function Zb(s){let e,t="Project bij",n,i,r,a,o,l;return{c(){e=Ne("span"),e.textContent=t,n=qe(),i=Ne("img"),a=qe(),o=Ne("span"),l=qi(s[4]),this.h()},l(c){e=Fe(c,"SPAN",{"data-svelte-h":!0}),no(e)!=="svelte-15nx4oq"&&(e.textContent=t),n=$e(c),i=Fe(c,"IMG",{src:!0,alt:!0,class:!0}),a=$e(c),o=Fe(c,"SPAN",{});var h=vt(o);l=$i(h,s[4]),h.forEach(re),this.h()},h(){Mt(i.src,r=`/${s[5]}`)||$(i,"src",r),$(i,"alt",""),$(i,"class","svelte-t7f5x9")},m(c,h){Te(c,e,h),Te(c,n,h),Te(c,i,h),Te(c,a,h),Te(c,o,h),ze(o,l)},p(c,h){h&32&&!Mt(i.src,r=`/${c[5]}`)&&$(i,"src",r),h&16&&Fs(l,c[4])},d(c){c&&(re(e),re(n),re(i),re(a),re(o))}}}function Pf(s){let e,t;return{c(){e=Ne("a"),t=qi("Github"),this.h()},l(n){e=Fe(n,"A",{href:!0,target:!0,rel:!0});var i=vt(e);t=$i(i,"Github"),i.forEach(re),this.h()},h(){$(e,"href",s[7]),$(e,"target","_blank"),$(e,"rel","noopener noreferrer")},m(n,i){Te(n,e,i),ze(e,t)},p(n,i){i&128&&$(e,"href",n[7])},d(n){n&&re(e)}}}function If(s){let e,t=s[11]+"",n;return{c(){e=Ne("span"),n=qi(t),this.h()},l(i){e=Fe(i,"SPAN",{class:!0});var r=vt(e);n=$i(r,t),r.forEach(re),this.h()},h(){$(e,"class","tag svelte-t7f5x9")},m(i,r){Te(i,e,r),ze(e,n)},p(i,r){r&64&&t!==(t=i[11]+"")&&Fs(n,t)},d(i){i&&re(e)}}}function Jb(s){let e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,g,m,y,v=s[8]&&Tf(s),x=s[9]&&Cf(s),P=s[3]&&Rf(s);function E(U,N){return U[4]!="GitHub"?Zb:Yb}let C=E(s),L=C(s),b=s[7]&&Pf(s),M=Nh(s[6]),R=[];for(let U=0;U<M.length;U+=1)R[U]=If(Af(s,M,U));return{c(){e=Ne("div"),v&&v.c(),t=qe(),x&&x.c(),n=qe(),i=Ne("div"),P&&P.c(),r=qe(),a=Ne("img"),l=qe(),c=Ne("div"),L.c(),h=qe(),f=Ne("div"),u=qi(s[0]),d=qe(),p=Ne("div"),_=qi(s[1]),g=qe(),b&&b.c(),m=qe(),y=Ne("div");for(let U=0;U<R.length;U+=1)R[U].c();this.h()},l(U){e=Fe(U,"DIV",{class:!0});var N=vt(e);v&&v.l(N),t=$e(N),x&&x.l(N),n=$e(N),i=Fe(N,"DIV",{class:!0});var D=vt(i);P&&P.l(D),r=$e(D),a=Fe(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(re),l=$e(N),c=Fe(N,"DIV",{class:!0});var O=vt(c);L.l(O),O.forEach(re),h=$e(N),f=Fe(N,"DIV",{class:!0});var G=vt(f);u=$i(G,s[0]),G.forEach(re),d=$e(N),p=Fe(N,"DIV",{class:!0});var te=vt(p);_=$i(te,s[1]),te.forEach(re),g=$e(N),b&&b.l(N),m=$e(N),y=Fe(N,"DIV",{class:!0});var W=vt(y);for(let he=0;he<R.length;he+=1)R[he].l(W);W.forEach(re),N.forEach(re),this.h()},h(){Mt(a.src,o=`/${s[2]}`)||$(a,"src",o),$(a,"alt",s[0]),$(a,"class","svelte-t7f5x9"),$(i,"class","media svelte-t7f5x9"),Uh(i,"video",s[3]),$(c,"class","subtitle svelte-t7f5x9"),$(f,"class","title svelte-t7f5x9"),$(p,"class","description svelte-t7f5x9"),$(y,"class","tags svelte-t7f5x9"),$(e,"class","project svelte-t7f5x9")},m(U,N){Te(U,e,N),v&&v.m(e,null),ze(e,t),x&&x.m(e,null),ze(e,n),ze(e,i),P&&P.m(i,null),ze(i,r),ze(i,a),ze(e,l),ze(e,c),L.m(c,null),ze(e,h),ze(e,f),ze(f,u),ze(e,d),ze(e,p),ze(p,_),ze(e,g),b&&b.m(e,null),ze(e,m),ze(e,y);for(let D=0;D<R.length;D+=1)R[D]&&R[D].m(y,null)},p(U,[N]){if(U[8]?v?v.p(U,N):(v=Tf(U),v.c(),v.m(e,t)):v&&(v.d(1),v=null),U[9]?x?x.p(U,N):(x=Cf(U),x.c(),x.m(e,n)):x&&(x.d(1),x=null),U[3]?P?P.p(U,N):(P=Rf(U),P.c(),P.m(i,r)):P&&(P.d(1),P=null),N&4&&!Mt(a.src,o=`/${U[2]}`)&&$(a,"src",o),N&1&&$(a,"alt",U[0]),N&8&&Uh(i,"video",U[3]),C===(C=E(U))&&L?L.p(U,N):(L.d(1),L=C(U),L&&(L.c(),L.m(c,null))),N&1&&Fs(u,U[0]),N&2&&Fs(_,U[1]),U[7]?b?b.p(U,N):(b=Pf(U),b.c(),b.m(e,m)):b&&(b.d(1),b=null),N&64){M=Nh(U[6]);let D;for(D=0;D<M.length;D+=1){const O=Af(U,M,D);R[D]?R[D].p(O,N):(R[D]=If(O),R[D].c(),R[D].m(y,null))}for(;D<R.length;D+=1)R[D].d(1);R.length=M.length}},i:dt,o:dt,d(U){U&&re(e),v&&v.d(),x&&x.d(),P&&P.d(),L.d(),b&&b.d(),im(R,U)}}}function Kb(s,e,t){let{title:n}=e,{description:i}=e,{image:r}=e,{video:a=void 0}=e,{location:o}=e,{locationEmoji:l}=e,{tags:c}=e,{github:h=void 0}=e,{link:f=void 0}=e,{stars:u=void 0}=e,{downloads:d=void 0}=e;return s.$$set=p=>{"title"in p&&t(0,n=p.title),"description"in p&&t(1,i=p.description),"image"in p&&t(2,r=p.image),"video"in p&&t(3,a=p.video),"location"in p&&t(4,o=p.location),"locationEmoji"in p&&t(5,l=p.locationEmoji),"tags"in p&&t(6,c=p.tags),"github"in p&&t(7,h=p.github),"link"in p&&t(10,f=p.link),"stars"in p&&t(8,u=p.stars),"downloads"in p&&t(9,d=p.downloads)},[n,i,r,a,o,l,c,h,u,d,f]}class ta extends tn{constructor(e){super(),nn(this,e,Kb,Jb,en,{title:0,description:1,image:2,video:3,location:4,locationEmoji:5,tags:6,github:7,link:10,stars:8,downloads:9})}}function jb(s){let e,t;return e=new wm({}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function Qb(s){let e,t;return e=new Ic({props:{type:"github",link:"https://github.com/Somfic"}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function ew(s){let e,t;return e=new Ic({props:{type:"linkedin",link:"https://www.linkedin.com/in/lvdejong/"}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function tw(s){let e,t;return e=new Ic({props:{type:"email",link:"mailto:lucas@somfic.dev"}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function nw(s){let e,t;return e=new Rm({}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function iw(s){let e,t;return e=new Tm({props:{$$slots:{default:[nw]},$$scope:{ctx:s}}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function sw(s){let e,t;return e=new Sm({props:{url:"location.png"}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function rw(s){let e,t;return e=new ta({props:{title:"EliteAPI",description:"Een .NET library voor het communiceren met het ruimte-spel 'Elite: Dangerous'.",locationEmoji:"school.png",location:"GitHub",image:"eliteapi.png",tags:["C#","Open source"],github:"https://github.com/Somfic/EliteAPI",stars:"100+",downloads:"17k+"}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function aw(s){let e,t;return e=new ta({props:{title:"Boebot",description:"Een robot die door middel van meerdere sensoren zelfstandig lijnen kan volgen, obstakels kan ontwijken en vracht kan vervoeren.",locationEmoji:"avans.png",location:"Avans Hogeschool",image:"boombot.jpg",video:"dejavu.mp4",tags:["Java","Hardware","Scrum"]}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function ow(s){let e,t;return e=new ta({props:{title:"Moviez",description:"Een webapplicatie met een overzicht van films die in mijn lokale bioscoop draaien, aangestuurd door de Kinepolis API.",locationEmoji:"school.png",location:"GitHub",image:"moviez.png",video:"moviez.mp4",tags:["Typescript","Svelte","SCSS","API"],github:"https://github.com/Somfic/moviez"}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function lw(s){let e,t;return e=new ta({props:{title:"Schoolplanner",description:"2D from-scratch grafische applicatie voor het plannen van schoolroosters en het simuleren van drukte op de gangen en in klaslokalen.",locationEmoji:"school.png",location:"Avans Hogeschool",image:"schoolplanner.png",video:"schoolplanner2.mp4",tags:["Java","Graphics","Scrum"],github:"https://github.com/Somfic/moviez"}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function cw(s){let e,t;return e=new ta({props:{title:"Eiland doolhoven",description:"2.5D from-scratch grafische applicatie voor het genereren van doolhoven op procedureel gegenereerde eilanden.",locationEmoji:"avans.png",location:"Avans Hogeschool",image:"maze.png",video:"maze.mp4",github:"https://github.com/Somfic/Infinity-Alphine",tags:["Java","Graphics","ECS"]}}),{c(){pt(e.$$.fragment)},l(n){mt(e.$$.fragment,n)},m(n,i){gt(e,n,i),t=!0},p:dt,i(n){t||(Ke(e.$$.fragment,n),t=!0)},o(n){je(e.$$.fragment,n),t=!1},d(n){_t(e,n)}}}function hw(s){let e,t,n,i,r,a,o,l,c,h,f,u,d,p,_,g,m,y,v,x,P,E,C,L,b,M,R,U,N;return e=new fm({}),n=new am({}),r=new cm({}),l=new Mn({props:{width:2,height:2,$$slots:{default:[jb]},$$scope:{ctx:s}}}),h=new Mn({props:{width:1,height:1,$$slots:{default:[Qb]},$$scope:{ctx:s}}}),u=new Mn({props:{width:1,height:1,$$slots:{default:[ew]},$$scope:{ctx:s}}}),p=new Mn({props:{width:2,height:1,$$slots:{default:[tw]},$$scope:{ctx:s}}}),g=new Mn({props:{width:4,height:1,$$slots:{default:[iw]},$$scope:{ctx:s}}}),y=new Mn({props:{width:2,height:2,padding:0,$$slots:{default:[sw]},$$scope:{ctx:s}}}),x=new Mn({props:{width:2,height:3,$$slots:{default:[rw]},$$scope:{ctx:s}}}),E=new Mn({props:{width:2,height:3,$$slots:{default:[aw]},$$scope:{ctx:s}}}),L=new Mn({props:{width:2,height:3,$$slots:{default:[ow]},$$scope:{ctx:s}}}),M=new Mn({props:{width:2,height:3,$$slots:{default:[lw]},$$scope:{ctx:s}}}),U=new Mn({props:{width:2,height:3,$$slots:{default:[cw]},$$scope:{ctx:s}}}),{c(){pt(e.$$.fragment),t=qe(),pt(n.$$.fragment),i=qe(),pt(r.$$.fragment),a=qe(),o=Ne("main"),pt(l.$$.fragment),c=qe(),pt(h.$$.fragment),f=qe(),pt(u.$$.fragment),d=qe(),pt(p.$$.fragment),_=qe(),pt(g.$$.fragment),m=qe(),pt(y.$$.fragment),v=qe(),pt(x.$$.fragment),P=qe(),pt(E.$$.fragment),C=qe(),pt(L.$$.fragment),b=qe(),pt(M.$$.fragment),R=qe(),pt(U.$$.fragment),this.h()},l(D){mt(e.$$.fragment,D),t=$e(D),mt(n.$$.fragment,D),i=$e(D),mt(r.$$.fragment,D),a=$e(D),o=Fe(D,"MAIN",{class:!0});var O=vt(o);mt(l.$$.fragment,O),c=$e(O),mt(h.$$.fragment,O),f=$e(O),mt(u.$$.fragment,O),d=$e(O),mt(p.$$.fragment,O),_=$e(O),mt(g.$$.fragment,O),m=$e(O),mt(y.$$.fragment,O),v=$e(O),mt(x.$$.fragment,O),P=$e(O),mt(E.$$.fragment,O),C=$e(O),mt(L.$$.fragment,O),b=$e(O),mt(M.$$.fragment,O),R=$e(O),mt(U.$$.fragment,O),O.forEach(re),this.h()},h(){$(o,"class","svelte-17rw5b6")},m(D,O){gt(e,D,O),Te(D,t,O),gt(n,D,O),Te(D,i,O),gt(r,D,O),Te(D,a,O),Te(D,o,O),gt(l,o,null),ze(o,c),gt(h,o,null),ze(o,f),gt(u,o,null),ze(o,d),gt(p,o,null),ze(o,_),gt(g,o,null),ze(o,m),gt(y,o,null),ze(o,v),gt(x,o,null),ze(o,P),gt(E,o,null),ze(o,C),gt(L,o,null),ze(o,b),gt(M,o,null),ze(o,R),gt(U,o,null),N=!0},p(D,[O]){const G={};O&1&&(G.$$scope={dirty:O,ctx:D}),l.$set(G);const te={};O&1&&(te.$$scope={dirty:O,ctx:D}),h.$set(te);const W={};O&1&&(W.$$scope={dirty:O,ctx:D}),u.$set(W);const he={};O&1&&(he.$$scope={dirty:O,ctx:D}),p.$set(he);const pe={};O&1&&(pe.$$scope={dirty:O,ctx:D}),g.$set(pe);const fe={};O&1&&(fe.$$scope={dirty:O,ctx:D}),y.$set(fe);const He={};O&1&&(He.$$scope={dirty:O,ctx:D}),x.$set(He);const et={};O&1&&(et.$$scope={dirty:O,ctx:D}),E.$set(et);const X={};O&1&&(X.$$scope={dirty:O,ctx:D}),L.$set(X);const ie={};O&1&&(ie.$$scope={dirty:O,ctx:D}),M.$set(ie);const q={};O&1&&(q.$$scope={dirty:O,ctx:D}),U.$set(q)},i(D){N||(Ke(e.$$.fragment,D),Ke(n.$$.fragment,D),Ke(r.$$.fragment,D),Ke(l.$$.fragment,D),Ke(h.$$.fragment,D),Ke(u.$$.fragment,D),Ke(p.$$.fragment,D),Ke(g.$$.fragment,D),Ke(y.$$.fragment,D),Ke(x.$$.fragment,D),Ke(E.$$.fragment,D),Ke(L.$$.fragment,D),Ke(M.$$.fragment,D),Ke(U.$$.fragment,D),N=!0)},o(D){je(e.$$.fragment,D),je(n.$$.fragment,D),je(r.$$.fragment,D),je(l.$$.fragment,D),je(h.$$.fragment,D),je(u.$$.fragment,D),je(p.$$.fragment,D),je(g.$$.fragment,D),je(y.$$.fragment,D),je(x.$$.fragment,D),je(E.$$.fragment,D),je(L.$$.fragment,D),je(M.$$.fragment,D),je(U.$$.fragment,D),N=!1},d(D){D&&(re(t),re(i),re(a),re(o)),_t(e,D),_t(n,D),_t(r,D),_t(l),_t(h),_t(u),_t(p),_t(g),_t(y),_t(x),_t(E),_t(L),_t(M),_t(U)}}}class pw extends tn{constructor(e){super(),nn(this,e,null,hw,en,{})}}export{pw as component};
