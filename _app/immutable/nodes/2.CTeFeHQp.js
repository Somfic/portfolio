import{s as Wt,n as st,o as Hs,f as Mr,c as ts,u as ns,g as is,b as ss,y as pt,z as yi,A as Zi,B as Sr,d as no,C as Nf,D as Ph,E as Ih,F as Lh}from"../chunks/scheduler.CMG-eXWX.js";import{S as Xt,i as $t,e as Te,c as Ce,d as at,g as ne,o as q,j as Me,y as Zs,z as Js,k as ye,A as om,s as Ue,h as Ne,t as De,a as Oe,p as ra,B as io,u as Ze,v as Je,w as Ke,x as je,m as Dh,n as dc,q as pc,b as pn,f as mn,l as Cn,C as Uh,D as lm}from"../chunks/index.qew3E0Gd.js";import{d as cm,w as so}from"../chunks/index.DNRxPlET.js";function Nh(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function hm(s){let e;return{c(){e=Te("div"),this.h()},l(t){e=Ce(t,"DIV",{class:!0}),at(e).forEach(ne),this.h()},h(){q(e,"class","godrays svelte-yj6qld")},m(t,n){Me(t,e,n)},p:st,i:st,o:st,d(t){t&&ne(e)}}}class um extends Xt{constructor(e){super(),$t(this,e,null,hm,Wt,{})}}function fm(s){let e,t,n,i,r,a,o;return{c(){e=Zs("svg"),t=Zs("filter"),n=Zs("feTurbulence"),i=Zs("feBlend"),r=Zs("rect"),this.h()},l(l){e=Js(l,"svg",{xmlns:!0,class:!0});var c=at(e);t=Js(c,"filter",{id:!0,x:!0,y:!0});var h=at(t);n=Js(h,"feTurbulence",{type:!0,baseFrequency:!0,numOctaves:!0}),at(n).forEach(ne),i=Js(h,"feBlend",{mode:!0}),at(i).forEach(ne),h.forEach(ne),r=Js(c,"rect",{width:!0,height:!0,filter:!0}),at(r).forEach(ne),c.forEach(ne),this.h()},h(){q(n,"type","fractalNoise"),q(n,"baseFrequency","0.8"),q(n,"numOctaves","1"),q(i,"mode","screen"),q(t,"id","noise"),q(t,"x","0"),q(t,"y","0"),q(r,"width",dm),q(r,"height",pm),q(r,"filter","url(#noise)"),q(e,"xmlns","http://www.w3.org/2000/svg"),q(e,"class","svelte-jy7os")},m(l,c){Me(l,e,c),ye(e,t),ye(t,n),ye(t,i),ye(e,r),a||(o=om(e,"resize",onresize),a=!0)},p:st,i:st,o:st,d(l){l&&ne(e),a=!1,o()}}}let dm=1e4,pm=1e4;class mm extends Xt{constructor(e){super(),$t(this,e,null,fm,Wt,{})}}function gm(s){let e;return{c(){e=Te("div"),this.h()},l(t){e=Ce(t,"DIV",{class:!0}),at(e).forEach(ne),this.h()},h(){q(e,"class","halftone svelte-ks6ndy")},m(t,n){Me(t,e,n),s[1](e)},p:st,i:st,o:st,d(t){t&&ne(e),s[1](null)}}}function _m(s,e,t){Hs(()=>{document.addEventListener("scroll",i)});let n;function i(){const a=window.scrollY;n.style.setProperty("--bgPosition",`${-a/3}px`)}function r(a){Mr[a?"unshift":"push"](()=>{n=a,t(0,n)})}return[n,r]}class vm extends Xt{constructor(e){super(),$t(this,e,_m,gm,Wt,{})}}function xm(s){let e,t,n,i,r,a;const o=s[8].default,l=ts(o,s,s[7],null);return{c(){e=Te("div"),t=Te("div"),n=Ue(),i=Te("div"),r=Te("div"),l&&l.c(),this.h()},l(c){e=Ce(c,"DIV",{class:!0});var h=at(e);t=Ce(h,"DIV",{class:!0}),at(t).forEach(ne),n=Ne(h),i=Ce(h,"DIV",{class:!0});var f=at(i);r=Ce(f,"DIV",{class:!0});var u=at(r);l&&l.l(u),u.forEach(ne),f.forEach(ne),h.forEach(ne),this.h()},h(){q(t,"class","border svelte-cp33ax"),q(r,"class","content svelte-cp33ax"),q(i,"class","content-wrapper svelte-cp33ax"),q(e,"class","card svelte-cp33ax")},m(c,h){Me(c,e,h),ye(e,t),ye(e,n),ye(e,i),ye(i,r),l&&l.m(r,null),s[9](e),a=!0},p(c,[h]){l&&l.p&&(!a||h&128)&&ns(l,o,c,c[7],a?ss(o,c[7],h,null):is(c[7]),null)},i(c){a||(De(l,c),a=!0)},o(c){Oe(l,c),a=!1},d(c){c&&ne(e),l&&l.d(c),s[9](null)}}}function ym(s,e,t){let{$$slots:n={},$$scope:i}=e,r,a=0,o=0,{padding:l=30}=e,{width:c}=e,{width_m:h=c}=e,{width_s:f=12}=e,{height:u}=e,{height_m:d=u}=e,m=(Math.random()-.5)*2;Hs(()=>{window.addEventListener("mousemove",_),r.style.setProperty("--paddingX",`${l*1.15}px`),r.style.setProperty("--paddingY",`${l}px`),r.style.setProperty("--x","-1000px"),r.style.setProperty("--y","-1000px"),r.style.setProperty("--width",`${c}`),r.style.setProperty("--width-m",`${h}`),r.style.setProperty("--width-s",`${f}`),r.style.setProperty("--height",`${u}`),r.style.setProperty("--height-m",`${d}`),r.style.setProperty("--rotate",`${m}deg`)});function _(p){a=p.clientX,o=p.clientY;const x=a-r.getBoundingClientRect().left,v=o-r.getBoundingClientRect().top;r.style.setProperty("--x",`${x}px`),r.style.setProperty("--y",`${v}px`)}function g(p){Mr[p?"unshift":"push"](()=>{r=p,t(0,r)})}return s.$$set=p=>{"padding"in p&&t(1,l=p.padding),"width"in p&&t(2,c=p.width),"width_m"in p&&t(3,h=p.width_m),"width_s"in p&&t(4,f=p.width_s),"height"in p&&t(5,u=p.height),"height_m"in p&&t(6,d=p.height_m),"$$scope"in p&&t(7,i=p.$$scope)},[r,l,c,h,f,u,d,i,n,g]}class Bt extends Xt{constructor(e){super(),$t(this,e,ym,xm,Wt,{padding:1,width:2,width_m:3,width_s:4,height:5,height_m:6})}}function Mm(s){let e,t;return{c(){e=Te("img"),this.h()},l(n){e=Ce(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){pt(e.src,t="/email.svg")||q(e,"src",t),q(e,"alt",""),q(e,"class","svelte-478kms")},m(n,i){Me(n,e,i)},d(n){n&&ne(e)}}}function Sm(s){let e,t;return{c(){e=Te("img"),this.h()},l(n){e=Ce(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){pt(e.src,t="/linkedin.svg")||q(e,"src",t),q(e,"alt",""),q(e,"class","svelte-478kms")},m(n,i){Me(n,e,i)},d(n){n&&ne(e)}}}function bm(s){let e,t;return{c(){e=Te("img"),this.h()},l(n){e=Ce(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){pt(e.src,t="/github.svg")||q(e,"src",t),q(e,"alt",""),q(e,"class","svelte-478kms")},m(n,i){Me(n,e,i)},d(n){n&&ne(e)}}}function wm(s){let e;function t(r,a){if(r[0]==="github")return bm;if(r[0]==="linkedin")return Sm;if(r[0]==="email")return Mm}let n=t(s),i=n&&n(s);return{c(){e=Te("a"),i&&i.c(),this.h()},l(r){e=Ce(r,"A",{class:!0,href:!0,target:!0,rel:!0});var a=at(e);i&&i.l(a),a.forEach(ne),this.h()},h(){q(e,"class","button svelte-478kms"),q(e,"href",s[1]),q(e,"target","_blank"),q(e,"rel","noopener noreferrer")},m(r,a){Me(r,e,a),i&&i.m(e,null)},p(r,[a]){n!==(n=t(r))&&(i&&i.d(1),i=n&&n(r),i&&(i.c(),i.m(e,null))),a&2&&q(e,"href",r[1])},i:st,o:st,d(r){r&&ne(e),i&&i.d()}}}function Em(s,e,t){let{type:n}=e,{link:i}=e;return s.$$set=r=>{"type"in r&&t(0,n=r.type),"link"in r&&t(1,i=r.link)},[n,i]}class Uc extends Xt{constructor(e){super(),$t(this,e,Em,wm,Wt,{type:0,link:1})}}function Am(s){let e;return{c(){e=Te("div"),this.h()},l(t){e=Ce(t,"DIV",{style:!0,class:!0}),at(e).forEach(ne),this.h()},h(){ra(e,"background-image","url("+s[1]+")"),q(e,"class","image svelte-15hj2gr"),ra(e,"background-size",s[0])},m(t,n){Me(t,e,n)},p(t,[n]){n&2&&ra(e,"background-image","url("+t[1]+")");const i=n&2;(n&3||i)&&ra(e,"background-size",t[0])},i:st,o:st,d(t){t&&ne(e)}}}function Tm(s,e,t){let{fit:n="cover"}=e,{url:i}=e;return s.$$set=r=>{"fit"in r&&t(0,n=r.fit),"url"in r&&t(1,i=r.url)},[n,i]}class Ff extends Xt{constructor(e){super(),$t(this,e,Tm,Am,Wt,{fit:0,url:1})}}function Cm(s){let e,t=`<div class="header svelte-1uds5r4"><img src="/me.jpeg" alt="" class="svelte-1uds5r4"/> <h1 class="svelte-1uds5r4">Lucas de Jong</h1></div> <div><p>Hoi! Ik ben een gepassioneerde full-stack software-developer geintresseerd in mooie interfaces
			en goedwerkende backend-systemen.</p></div>`;return{c(){e=Te("div"),e.innerHTML=t,this.h()},l(n){e=Ce(n,"DIV",{class:!0,"data-svelte-h":!0}),io(e)!=="svelte-1af3qa2"&&(e.innerHTML=t),this.h()},h(){q(e,"class","me svelte-1uds5r4")},m(n,i){Me(n,e,i)},p:st,i:st,o:st,d(n){n&&ne(e)}}}class Rm extends Xt{constructor(e){super(),$t(this,e,null,Cm,Wt,{})}}function Pm(s){let e,t,n,i,r;const a=s[3].default,o=ts(a,s,s[2],null);return{c(){e=Te("div"),t=Te("div"),o&&o.c(),n=Ue(),i=Te("div"),this.h()},l(l){e=Ce(l,"DIV",{class:!0});var c=at(e);t=Ce(c,"DIV",{class:!0});var h=at(t);o&&o.l(h),n=Ne(h),i=Ce(h,"DIV",{class:!0}),at(i).forEach(ne),h.forEach(ne),c.forEach(ne),this.h()},h(){q(i,"class","copied svelte-b9mr9i"),q(t,"class","content svelte-b9mr9i"),q(e,"class","scroller svelte-b9mr9i")},m(l,c){Me(l,e,c),ye(e,t),o&&o.m(t,null),ye(t,n),ye(t,i),s[4](i),s[5](t),r=!0},p(l,[c]){o&&o.p&&(!r||c&4)&&ns(o,a,l,l[2],r?ss(a,l[2],c,null):is(l[2]),null)},i(l){r||(De(o,l),r=!0)},o(l){Oe(o,l),r=!1},d(l){l&&ne(e),o&&o.d(l),s[4](null),s[5](null)}}}function Im(s,e,t){let{$$slots:n={},$$scope:i}=e,r,a;Hs(()=>{const c=Array.from(r.children);c.sort(()=>Math.random()-.5),t(0,r.innerHTML="",r);for(const h of c)r.appendChild(h),a.appendChild(h.cloneNode(!0))});function o(c){Mr[c?"unshift":"push"](()=>{a=c,t(1,a)})}function l(c){Mr[c?"unshift":"push"](()=>{r=c,t(0,r)})}return s.$$set=c=>{"$$scope"in c&&t(2,i=c.$$scope)},[r,a,i,n,o,l]}class Lm extends Xt{constructor(e){super(),$t(this,e,Im,Pm,Wt,{})}}function Dm(s){let e,t,n,i,r,a,o,l,c,h,f,u,d,m,_,g,p,x,v,y,R,w,T,P,b,M,I,O,k,F,K,D,G,z,he,ue,pe,Ve,Qe,Z,oe,_e,le,Y,J,Fe,ot,A,ae,re;return{c(){e=Te("img"),n=Ue(),i=Te("img"),a=Ue(),o=Te("img"),c=Ue(),h=Te("img"),u=Ue(),d=Te("img"),_=Ue(),g=Te("img"),x=Ue(),v=Te("img"),R=Ue(),w=Te("img"),P=Ue(),b=Te("img"),I=Ue(),O=Te("img"),F=Ue(),K=Te("img"),G=Ue(),z=Te("img"),ue=Ue(),pe=Te("img"),Qe=Ue(),Z=Te("img"),_e=Ue(),le=Te("img"),J=Ue(),Fe=Te("img"),A=Ue(),ae=Te("img"),this.h()},l(W){e=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),n=Ne(W),i=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),a=Ne(W),o=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),c=Ne(W),h=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),u=Ne(W),d=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),_=Ne(W),g=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),x=Ne(W),v=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),R=Ne(W),w=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),P=Ne(W),b=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),I=Ne(W),O=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),F=Ne(W),K=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),G=Ne(W),z=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),ue=Ne(W),pe=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),Qe=Ne(W),Z=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),_e=Ne(W),le=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),J=Ne(W),Fe=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),A=Ne(W),ae=Ce(W,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){pt(e.src,t="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg")||q(e,"src",t),q(e,"alt","Svelte"),q(e,"class","svelte-1da65zi"),pt(i.src,r="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg")||q(i,"src",r),q(i,"alt","VSCode"),q(i,"class","svelte-1da65zi"),pt(o.src,l="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg")||q(o,"src",l),q(o,"alt","C#"),q(o,"class","svelte-1da65zi"),pt(h.src,f="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg")||q(h,"src",f),q(h,"alt","Git"),q(h,"class","svelte-1da65zi"),pt(d.src,m="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg")||q(d,"src",m),q(d,"alt","Sass"),q(d,"class","svelte-1da65zi"),pt(g.src,p="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")||q(g,"src",p),q(g,"alt","TypeScript"),q(g,"class","svelte-1da65zi"),pt(v.src,y="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg")||q(v,"src",y),q(v,"alt","JavaScript"),q(v,"class","svelte-1da65zi"),pt(w.src,T="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg")||q(w,"src",T),q(w,"alt","HTML5"),q(w,"class","svelte-1da65zi"),pt(b.src,M="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg")||q(b,"src",M),q(b,"alt","CSS3"),q(b,"class","svelte-1da65zi"),pt(O.src,k="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg")||q(O,"src",k),q(O,"alt","Figma"),q(O,"class","svelte-1da65zi"),pt(K.src,D="https://miro.medium.com/v2/resize:fit:786/format:webp/1*5GTKx0a2tf7mAMYnplvBeg.png")||q(K,"src",D),q(K,"alt","Rust"),q(K,"class","svelte-1da65zi"),pt(z.src,he="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg")||q(z,"src",he),q(z,"alt",".NET"),q(z,"class","svelte-1da65zi"),pt(pe.src,Ve="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg")||q(pe,"src",Ve),q(pe,"alt","Java"),q(pe,"class","svelte-1da65zi"),pt(Z.src,oe="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg")||q(Z,"src",oe),q(Z,"alt","MySQL"),q(Z,"class","svelte-1da65zi"),pt(le.src,Y="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg")||q(le,"src",Y),q(le,"alt","Node.js"),q(le,"class","svelte-1da65zi"),pt(Fe.src,ot="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg")||q(Fe,"src",ot),q(Fe,"alt","Bun"),q(Fe,"class","svelte-1da65zi"),pt(ae.src,re="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-823jqxdr.png")||q(ae,"src",re),q(ae,"alt","GitHub"),q(ae,"class","svelte-1da65zi")},m(W,V){Me(W,e,V),Me(W,n,V),Me(W,i,V),Me(W,a,V),Me(W,o,V),Me(W,c,V),Me(W,h,V),Me(W,u,V),Me(W,d,V),Me(W,_,V),Me(W,g,V),Me(W,x,V),Me(W,v,V),Me(W,R,V),Me(W,w,V),Me(W,P,V),Me(W,b,V),Me(W,I,V),Me(W,O,V),Me(W,F,V),Me(W,K,V),Me(W,G,V),Me(W,z,V),Me(W,ue,V),Me(W,pe,V),Me(W,Qe,V),Me(W,Z,V),Me(W,_e,V),Me(W,le,V),Me(W,J,V),Me(W,Fe,V),Me(W,A,V),Me(W,ae,V)},p:st,i:st,o:st,d(W){W&&(ne(e),ne(n),ne(i),ne(a),ne(o),ne(c),ne(h),ne(u),ne(d),ne(_),ne(g),ne(x),ne(v),ne(R),ne(w),ne(P),ne(b),ne(I),ne(O),ne(F),ne(K),ne(G),ne(z),ne(ue),ne(pe),ne(Qe),ne(Z),ne(_e),ne(le),ne(J),ne(Fe),ne(A),ne(ae))}}}class Um extends Xt{constructor(e){super(),$t(this,e,null,Dm,Wt,{})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="168",Nm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Of=0,mc=1,Bf=2,Om=3,Bm=0,Nc=1,zf=2,Un=3,ni=0,nn=1,Nn=2,ei=0,Xi=1,gc=2,_c=3,vc=4,kf=5,_i=100,Vf=101,Hf=102,Gf=103,Wf=104,Xf=200,$f=201,qf=202,Yf=203,ro=204,ao=205,Zf=206,Jf=207,Kf=208,jf=209,Qf=210,ed=211,td=212,nd=213,id=214,sd=0,rd=1,ad=2,br=3,od=4,ld=5,cd=6,hd=7,qr=0,ud=1,fd=2,ti=0,dd=1,pd=2,md=3,gd=4,_d=5,vd=6,xd=7,xc="attached",yd="detached",zo=300,ii=301,vi=302,wr=303,Er=304,Gs=306,Ar=1e3,Sn=1001,Tr=1002,Vt=1003,Fc=1004,zm=1004,Ps=1005,km=1005,Nt=1006,fr=1007,Vm=1007,Fn=1008,Hm=1008,kn=1009,Oc=1010,Bc=1011,Bs=1012,ko=1013,si=1014,on=1015,Ws=1016,Vo=1017,Ho=1018,Ji=1020,zc=35902,kc=1021,Vc=1022,tn=1023,Hc=1024,Gc=1025,$i=1026,Ki=1027,Go=1028,Yr=1029,Wc=1030,Wo=1031,Gm=1032,Xo=1033,dr=33776,pr=33777,mr=33778,gr=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,yo=37813,Mo=37814,So=37815,bo=37816,wo=37817,Eo=37818,Ao=37819,To=37820,Co=37821,_r=36492,Ro=36494,Po=36495,Xc=36283,Io=36284,Lo=36285,Do=36286,Md=2200,Sd=2201,bd=2202,Cr=2300,Uo=2301,eo=2302,Vi=2400,Hi=2401,Rr=2402,$o=2500,$c=2501,Wm=0,Xm=1,$m=2,wd=3200,Ed=3201,qm=3202,Ym=3203,Mi=0,Ad=1,Kn="",Mn="srgb",ai="srgb-linear",qo="display-p3",Zr="display-p3-linear",Pr="linear",Mt="srgb",Ir="rec709",Lr="p3",Zm=0,Bi=7680,Jm=7681,Km=7682,jm=7683,Qm=34055,eg=34056,tg=5386,ng=512,ig=513,sg=514,rg=515,ag=516,og=517,lg=518,yc=519,Td=512,Cd=513,Rd=514,qc=515,Pd=516,Id=517,Ld=518,Dd=519,Dr=35044,cg=35048,hg=35040,ug=35045,fg=35049,dg=35041,pg=35046,mg=35050,gg=35042,_g="100",Mc="300 es",On=2e3,Ur=2001;class Vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const qi=Math.PI/180,zs=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Yc(s,e){return(s%e+e)%e}function vg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function xg(s,e,t){return s!==e?(t-s)/(e-s):0}function vr(s,e,t){return(1-t)*s+t*e}function yg(s,e,t,n){return vr(s,e,1-Math.exp(-t*n))}function Mg(s,e=1){return e-Math.abs(Yc(s,e*2)-e)}function Sg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function wg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Eg(s,e){return s+Math.random()*(e-s)}function Ag(s){return s*(.5-Math.random())}function Tg(s){s!==void 0&&(Fh=s);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cg(s){return s*qi}function Rg(s){return s*zs}function Pg(s){return(s&s-1)===0&&s!==0}function Ig(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function en(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ug={DEG2RAD:qi,RAD2DEG:zs,generateUUID:_n,clamp:Ct,euclideanModulo:Yc,mapLinear:vg,inverseLerp:xg,lerp:vr,damp:yg,pingpong:Mg,smoothstep:Sg,smootherstep:bg,randInt:wg,randFloat:Eg,randFloatSpread:Ag,seededRandom:Tg,degToRad:Cg,radToDeg:Rg,isPowerOfTwo:Pg,ceilPowerOfTwo:Ig,floorPowerOfTwo:Lg,setQuaternionFromProperEuler:Dg,normalize:it,denormalize:en};class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,i,r,a,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],v=i[4],y=i[7],R=i[2],w=i[5],T=i[8];return r[0]=a*_+o*x+l*R,r[3]=a*g+o*v+l*w,r[6]=a*p+o*y+l*T,r[1]=c*_+h*x+f*R,r[4]=c*g+h*v+f*w,r[7]=c*p+h*y+f*T,r[2]=u*_+d*x+m*R,r[5]=u*g+d*v+m*w,r[8]=u*p+d*y+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new nt;function Ud(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const Ng={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Is(s,e){return new Ng[s](e)}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nd(){const s=Nr("canvas");return s.style.display="block",s}const Oh={};function Fs(s){s in Oh||(Oh[s]=!0,console.warn(s))}function Fg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Bh=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[ai]:{transfer:Pr,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Mn]:{transfer:Mt,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zr]:{transfer:Pr,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(zh),fromReference:s=>s.applyMatrix3(Bh)},[qo]:{transfer:Mt,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(zh),fromReference:s=>s.applyMatrix3(Bh).convertLinearToSRGB()}},Og=new Set([ai,Zr]),dt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Og.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ks[e].toReference,i=Ks[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ks[s].primaries},getTransfer:function(s){return s===Kn?Pr:Ks[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Ks[e].luminanceCoefficients)}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class Fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Nr("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Os(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bg=0;class Gi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Cl(i[a].image)):r.push(Cl(i[a]))}else r=Cl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zg=0;class Rt extends Vn{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Sn,i=Sn,r=Nt,a=Fn,o=tn,l=kn,c=Rt.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=_n(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=zo;Rt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,R=(p+1)/2,w=(h+u)/4,T=(f+_)/4,P=(m+g)/4;return v>y&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=T/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=T/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends Vn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yo extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kg extends Rn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Yo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Zc extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vg extends Rn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Zc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const u=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(f!==_||l!==u||c!==d||h!==m){let g=1-o;const p=l*u+c*d+h*m+f*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,p*x);g=Math.sin(g*w)/R,o=Math.sin(o*w)/R}const y=o*x;if(l=l*g+u*y,c=c*g+d*y,h=h*g+m*y,f=f*g+_*y,g===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new C,kh=new ln;class sn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),oa.subVectors(this.max,js),hs.subVectors(e.a,js),us.subVectors(e.b,js),fs.subVectors(e.c,js),li.subVectors(us,hs),ci.subVectors(fs,us),Ai.subVectors(hs,fs);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ai.z,Ai.y,li.z,0,-li.x,ci.z,0,-ci.x,Ai.z,0,-Ai.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ai.y,Ai.x,0];return!Pl(t,hs,us,fs,oa)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,hs,us,fs,oa))?!1:(la.crossVectors(li,ci),t=[la.x,la.y,la.z],Pl(t,hs,us,fs,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new C,new C,new C,new C,new C,new C,new C,new C],wn=new C,aa=new sn,hs=new C,us=new C,fs=new C,li=new C,ci=new C,Ai=new C,js=new C,oa=new C,la=new C,Ti=new C;function Pl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ti.fromArray(s,r);const o=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Hg=new sn,Qs=new C,Il=new C;class Jt{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Il)),this.expandByPoint(Qs.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new C,Ll=new C,ca=new C,hi=new C,Dl=new C,ha=new C,Ul=new C;class Xs{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ll.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Ll);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=hi.dot(this.direction),l=-hi.dot(ca),c=hi.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ll).addScaledVector(ca,u),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){Dl.subVectors(t,e),ha.subVectors(n,e),Ul.crossVectors(Dl,ha);let a=this.direction.dot(Ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const l=o*this.direction.dot(ha.crossVectors(hi,ha));if(l<0)return null;const c=o*this.direction.dot(Dl.cross(hi));if(c<0||l+c>a)return null;const h=-o*hi.dot(Ul);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,i,r,a,o,l,c,h,f,u,d,m,_,g){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,u,d,m,_,g)}set(e,t,n,i,r,a,o,l,c,h,f,u,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;t[0]=u+_*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,m=o*h,_=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-_*f}else if(e.order==="XZY"){const u=a*l,d=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gg,e,Wg)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),ua.crossVectors(fn,ui),i[0]=ui.x,i[4]=ua.x,i[8]=fn.x,i[1]=ui.y,i[5]=ua.y,i[9]=fn.y,i[2]=ui.z,i[6]=ua.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],y=n[11],R=n[15],w=i[0],T=i[4],P=i[8],b=i[12],M=i[1],I=i[5],O=i[9],k=i[13],F=i[2],K=i[6],D=i[10],G=i[14],z=i[3],he=i[7],ue=i[11],pe=i[15];return r[0]=a*w+o*M+l*F+c*z,r[4]=a*T+o*I+l*K+c*he,r[8]=a*P+o*O+l*D+c*ue,r[12]=a*b+o*k+l*G+c*pe,r[1]=h*w+f*M+u*F+d*z,r[5]=h*T+f*I+u*K+d*he,r[9]=h*P+f*O+u*D+d*ue,r[13]=h*b+f*k+u*G+d*pe,r[2]=m*w+_*M+g*F+p*z,r[6]=m*T+_*I+g*K+p*he,r[10]=m*P+_*O+g*D+p*ue,r[14]=m*b+_*k+g*G+p*pe,r[3]=x*w+v*M+y*F+R*z,r[7]=x*T+v*I+y*K+R*he,r[11]=x*P+v*O+y*D+R*ue,r[15]=x*b+v*k+y*G+R*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*f-i*c*f-r*o*u+n*c*u+i*o*d-n*l*d)+_*(+t*l*d-t*c*u+r*a*u-i*a*d+i*c*h-r*l*h)+g*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-t*l*f+t*o*u+i*a*f-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=f*g*c-_*u*c+_*l*d-o*g*d-f*l*p+o*u*p,v=m*u*c-h*g*c-m*l*d+a*g*d+h*l*p-a*u*p,y=h*_*c-m*f*c+m*o*d-a*_*d-h*o*p+a*f*p,R=m*f*l-h*_*l-m*o*u+a*_*u+h*o*g-a*f*g,w=t*x+n*v+i*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(_*u*r-f*g*r-_*i*d+n*g*d+f*i*p-n*u*p)*T,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*p+n*l*p)*T,e[3]=(f*l*r-o*u*r-f*i*c+n*u*c+o*i*d-n*l*d)*T,e[4]=v*T,e[5]=(h*g*r-m*u*r+m*i*d-t*g*d-h*i*p+t*u*p)*T,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*p-t*l*p)*T,e[7]=(a*u*r-h*l*r+h*i*c-t*u*c-a*i*d+t*l*d)*T,e[8]=y*T,e[9]=(m*f*r-h*_*r-m*n*d+t*_*d+h*n*p-t*f*p)*T,e[10]=(a*_*r-m*o*r+m*n*c-t*_*c-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*T,e[12]=R*T,e[13]=(h*_*i-m*f*i+m*n*u-t*_*u-h*n*g+t*f*g)*T,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*g-t*o*g)*T,e[15]=(a*f*i-h*o*i+h*n*l-t*f*l-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,_=a*h,g=a*f,p=o*f,x=l*c,v=l*h,y=l*f,R=n.x,w=n.y,T=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+y)*R,i[2]=(m-v)*R,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(u+p))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(m+v)*T,i[9]=(g-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/r,h=1/a,f=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,t.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=On){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i);let d,m;if(o===On)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ur)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=On){const l=this.elements,c=1/(t-e),h=1/(n-i),f=1/(a-r),u=(t+e)*c,d=(n+i)*h;let m,_;if(o===On)m=(a+r)*f,_=-2*f;else if(o===Ur)m=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new C,En=new Ge,Gg=new C(0,0,0),Wg=new C(1,1,1),ui=new C,ua=new C,fn=new C,Vh=new Ge,Hh=new ln;class vn{constructor(e=0,t=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xg=0;const Gh=new C,ps=new ln,qn=new Ge,fa=new C,er=new C,$g=new C,qg=new ln,Wh=new C(1,0,0),Xh=new C(0,1,0),$h=new C(0,0,1),qh={type:"added"},Yg={type:"removed"},ms={type:"childadded",child:null},Nl={type:"childremoved",child:null};class ft extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new C,t=new vn,n=new ln,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new nt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(er,fa,this.up):qn.lookAt(fa,er,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(qn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new C(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new C,Yn=new C,Fl=new C,Zn=new C,gs=new C,_s=new C,Yh=new C,Ol=new C,Bl=new C,zl=new C;class gn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),Yn.subVectors(n,t),Fl.subVectors(e,t);const a=An.dot(An),o=An.dot(Yn),l=An.dot(Fl),c=Yn.dot(Yn),h=Yn.dot(Fl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),Yn.subVectors(e,t),An.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;gs.subVectors(i,n),_s.subVectors(r,n),Ol.subVectors(e,n);const l=gs.dot(Ol),c=_s.dot(Ol);if(l<=0&&c<=0)return t.copy(n);Bl.subVectors(e,i);const h=gs.dot(Bl),f=_s.dot(Bl);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gs,a);zl.subVectors(e,r);const d=gs.dot(zl),m=_s.dot(zl);if(m>=0&&d<=m)return t.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(_s,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Yh.subVectors(r,i),o=(f-h)/(f-h+(d-m)),t.copy(i).addScaledVector(Yh,o);const p=1/(g+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},da={h:0,s:0,l:0};function kl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Yc(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kl(a,r,e+1/3),this.g=kl(a,r,e),this.b=kl(a,r,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=Bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return dt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Ct(Yt.r*255,0,255))*65536+Math.round(Ct(Yt.g*255,0,255))*256+Math.round(Ct(Yt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,r=Yt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Mn){dt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(da);const n=vr(fi.h,da.h,t),i=vr(fi.s,da.s,t),r=vr(fi.l,da.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new be;be.NAMES=Bd;let Zg=0;class Kt extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Xi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=ao,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=Jg();function Jg(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function an(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ct(s,-65504,65504),jn.floatView[0]=s;const e=jn.uint32View[0],t=e>>23&511;return jn.baseTable[t]+((e&8388607)>>jn.shiftTable[t])}function hr(s){const e=s>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(s&1023)]+jn.exponentTable[e],jn.floatView[0]}const Kg={toHalfFloat:an,fromHalfFloat:hr},Ut=new C,pa=new ee;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dr&&(e.usage=this.usage),e}}class jg extends yt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Qg extends yt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class e_ extends yt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class t_ extends yt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Jc extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class n_ extends yt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Kc extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class i_ extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=hr(this.array[e*this.itemSize]);return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=an(t),this}getY(e){let t=hr(this.array[e*this.itemSize+1]);return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=an(t),this}getZ(e){let t=hr(this.array[e*this.itemSize+2]);return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=an(t),this}getW(e){let t=hr(this.array[e*this.itemSize+3]);return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=an(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=an(t),this.array[e+1]=an(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=an(t),this.array[e+1]=an(n),this.array[e+2]=an(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=an(t),this.array[e+1]=an(n),this.array[e+2]=an(i),this.array[e+3]=an(r),this}}class Le extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let s_=0;const yn=new Ge,Vl=new ft,vs=new C,dn=new sn,tr=new sn,zt=new C;class rt extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ud(e)?Kc:Jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(dn.min,tr.min),dn.expandByPoint(zt),zt.addVectors(dn.max,tr.max),dn.expandByPoint(zt)):(dn.expandByPoint(tr.min),dn.expandByPoint(tr.max))}dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),zt.add(vs)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new C,l[P]=new C;const c=new C,h=new C,f=new C,u=new ee,d=new ee,m=new ee,_=new C,g=new C;function p(P,b,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),o[P].add(_),o[b].add(_),o[M].add(_),l[P].add(g),l[b].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,O=M.count;for(let k=I,F=I+O;k<F;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new C,y=new C,R=new C,w=new C;function T(P){R.fromBufferAttribute(i,P),w.copy(R);const b=o[P];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(w,b);const I=y.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,O=M.count;for(let k=I,F=I+O;k<F;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new yt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new Ge,Ci=new Xs,ma=new Jt,Jh=new C,xs=new C,ys=new C,Ms=new C,Hl=new C,ga=new C,_a=new ee,va=new ee,xa=new ee,Kh=new C,jh=new C,Qh=new C,ya=new C,Ma=new C;class It extends ft{constructor(e=new rt,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Hl.fromBufferAttribute(f,e),a?ga.addScaledVector(Hl,h):ga.addScaledVector(Hl.sub(t),h))}t.add(ga)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(ma.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ma,Jh)===null||Ci.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,R=v;y<R;y+=3){const w=o.getX(y),T=o.getX(y+1),P=o.getX(y+2);i=Sa(this,p,e,n,c,h,f,w,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);i=Sa(this,a,e,n,c,h,f,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,R=v;y<R;y+=3){const w=y,T=y+1,P=y+2;i=Sa(this,p,e,n,c,h,f,w,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,y=g+2;i=Sa(this,a,e,n,c,h,f,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function r_(s,e,t,n,i,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ni,o),l===null)return null;Ma.copy(o),Ma.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:s}}function Sa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,xs),s.getVertexPosition(l,ys),s.getVertexPosition(c,Ms);const h=r_(s,e,t,n,xs,ys,Ms,ya);if(h){i&&(_a.fromBufferAttribute(i,o),va.fromBufferAttribute(i,l),xa.fromBufferAttribute(i,c),h.uv=gn.getInterpolation(ya,xs,ys,Ms,_a,va,xa,new ee)),r&&(_a.fromBufferAttribute(r,o),va.fromBufferAttribute(r,l),xa.fromBufferAttribute(r,c),h.uv1=gn.getInterpolation(ya,xs,ys,Ms,_a,va,xa,new ee)),a&&(Kh.fromBufferAttribute(a,o),jh.fromBufferAttribute(a,l),Qh.fromBufferAttribute(a,c),h.normal=gn.getInterpolation(ya,xs,ys,Ms,Kh,jh,Qh,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};gn.getNormal(xs,ys,Ms,f.normal),h.face=f}return h}class rs extends rt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function m(_,g,p,x,v,y,R,w,T,P,b){const M=y/T,I=R/P,O=y/2,k=R/2,F=w/2,K=T+1,D=P+1;let G=0,z=0;const he=new C;for(let ue=0;ue<D;ue++){const pe=ue*I-k;for(let Ve=0;Ve<K;Ve++){const Qe=Ve*M-O;he[_]=Qe*x,he[g]=pe*v,he[p]=F,c.push(he.x,he.y,he.z),he[_]=0,he[g]=0,he[p]=w>0?1:-1,h.push(he.x,he.y,he.z),f.push(Ve/T),f.push(1-ue/P),G+=1}}for(let ue=0;ue<P;ue++)for(let pe=0;pe<T;pe++){const Ve=u+pe+K*ue,Qe=u+pe+K*(ue+1),Z=u+(pe+1)+K*(ue+1),oe=u+(pe+1)+K*ue;l.push(Ve,Qe,oe),l.push(Qe,Z,oe),z+=6}o.addGroup(d,z,b),d+=z,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=ks(s[t]);for(const i in n)e[i]=n[i]}return e}function a_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const kd={clone:ks,merge:Qt};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=l_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=a_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jo extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new C,eu=new ee,tu=new ee;class kt extends Jo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,bs=1;class Vd extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(Ss,bs,e,t);i.layers=this.layers,this.add(i);const r=new kt(Ss,bs,e,t);r.layers=this.layers,this.add(r);const a=new kt(Ss,bs,e,t);a.layers=this.layers,this.add(a);const o=new kt(Ss,bs,e,t);o.layers=this.layers,this.add(o);const l=new kt(Ss,bs,e,t);l.layers=this.layers,this.add(l);const c=new kt(Ss,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Jr extends Rt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hd extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rs(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ei});r.uniforms.tEquirect.value=t;const a=new It(i,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Nt),new Vd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Gl=new C,c_=new C,h_=new nt;class gi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gl.subVectors(n,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||h_.getNormalMatrix(e),i=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Jt,ba=new C;class Kr{constructor(e=new gi,t=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],f=i[6],u=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,u-c,g-d,y-p).normalize(),n[1].setComponents(l+r,u+c,g+d,y+p).normalize(),n[2].setComponents(l+a,u+h,g+m,y+x).normalize(),n[3].setComponents(l-a,u-h,g-m,y-x).normalize(),n[4].setComponents(l-o,u-f,g-_,y-v).normalize(),t===On)n[5].setComponents(l+o,u+f,g+_,y+v).normalize();else if(t===Ur)n[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function u_(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l._updateRange,u=l.updateRanges;if(s.bindBuffer(c,o),f.count===-1&&u.length===0&&s.bufferSubData(c,0,h),u.length!==0){for(let d=0,m=u.length;d<m;d++){const _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(s.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class $s extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*u-a;for(let v=0;v<c;v++){const y=v*f-r;m.push(y,-x,0),_.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,y=x+c*(p+1),R=x+1+c*(p+1),w=x+1+c*p;d.push(v,y,w),d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
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
#endif`,p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
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
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y_=`#ifdef USE_BATCHING
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
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E_=`#ifdef USE_IRIDESCENCE
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
#endif`,A_=`#ifdef USE_BUMPMAP
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N_=`#define PI 3.141592653589793
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
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O_=`vec3 transformedNormal = objectNormal;
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
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",G_=`
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
}`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q_=`#ifdef USE_GRADIENTMAP
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
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
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
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
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
#endif`,hv=`struct PhysicalMaterial {
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
}`,uv=`
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
#endif`,fv=`#if defined( RE_IndirectDiffuse )
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,Sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
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
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jv=`float getShadowMask() {
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
}`,Kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,x0=`#define DISTANCE
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
}`,y0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
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
}`,w0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,A0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,C0=`#define LAMBERT
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
}`,R0=`#define MATCAP
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
}`,P0=`#define MATCAP
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
}`,I0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,D0=`#define PHONG
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
}`,U0=`#define PHONG
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
}`,N0=`#define STANDARD
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
}`,F0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,B0=`#define TOON
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
}`,z0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,W0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:f_,alphahash_pars_fragment:d_,alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:g_,alphatest_pars_fragment:__,aomap_fragment:v_,aomap_pars_fragment:x_,batching_pars_vertex:y_,batching_vertex:M_,begin_vertex:S_,beginnormal_vertex:b_,bsdfs:w_,iridescence_fragment:E_,bumpmap_pars_fragment:A_,clipping_planes_fragment:T_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:P_,color_fragment:I_,color_pars_fragment:L_,color_pars_vertex:D_,color_vertex:U_,common:N_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:O_,displacementmap_pars_vertex:B_,displacementmap_vertex:z_,emissivemap_fragment:k_,emissivemap_pars_fragment:V_,colorspace_fragment:H_,colorspace_pars_fragment:G_,envmap_fragment:W_,envmap_common_pars_fragment:X_,envmap_pars_fragment:$_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:sv,envmap_vertex:Y_,fog_vertex:Z_,fog_pars_vertex:J_,fog_fragment:K_,fog_pars_fragment:j_,gradientmap_pars_fragment:Q_,lightmap_pars_fragment:ev,lights_lambert_fragment:tv,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:rv,lights_toon_pars_fragment:av,lights_phong_fragment:ov,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:hv,lights_fragment_begin:uv,lights_fragment_maps:fv,lights_fragment_end:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:_v,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:yv,map_particle_pars_fragment:Mv,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:bv,morphinstance_vertex:wv,morphcolor_vertex:Ev,morphnormal_vertex:Av,morphtarget_pars_vertex:Tv,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Pv,normal_pars_fragment:Iv,normal_pars_vertex:Lv,normal_vertex:Dv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:Bv,opaque_fragment:zv,packing:kv,premultiplied_alpha_fragment:Vv,project_vertex:Hv,dithering_fragment:Gv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:Yv,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:Kv,skinning_pars_vertex:jv,skinning_vertex:Qv,skinnormal_vertex:e0,specularmap_fragment:t0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:l0,uv_vertex:c0,worldpos_vertex:h0,background_vert:u0,background_frag:f0,backgroundCube_vert:d0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:_0,depth_frag:v0,distanceRGBA_vert:x0,distanceRGBA_frag:y0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:b0,linedashed_frag:w0,meshbasic_vert:E0,meshbasic_frag:A0,meshlambert_vert:T0,meshlambert_frag:C0,meshmatcap_vert:R0,meshmatcap_frag:P0,meshnormal_vert:I0,meshnormal_frag:L0,meshphong_vert:D0,meshphong_frag:U0,meshphysical_vert:N0,meshphysical_frag:F0,meshtoon_vert:O0,meshtoon_frag:B0,points_vert:z0,points_frag:k0,shadow_vert:V0,shadow_frag:H0,sprite_vert:G0,sprite_frag:W0},xe={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Tn={basic:{uniforms:Qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new be(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Qt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Qt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new be(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Qt([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Qt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Qt([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Qt([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Qt([xe.common,xe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Qt([xe.lights,xe.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Tn.physical={uniforms:Qt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const wa={r:0,b:0,g:0},Pi=new vn,X0=new Ge;function $0(s,e,t,n,i,r,a){const o=new be(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const y=m(x);y===null?p(o,l):y&&y.isColor&&(p(y,1),v=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,v){const y=m(v);y&&(y.isCubeTexture||y.mapping===Gs)?(h===void 0&&(h=new It(new rs(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ks(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pi.copy(v.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Pi)),h.material.toneMapped=dt.getTransfer(y.colorSpace)!==Mt,(f!==y||u!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new It(new $s(2,2),new Pn({name:"BackgroundMaterial",uniforms:ks(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=dt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(wa,zd(s)),n.buffers.color.setClear(wa.r,wa.g,wa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:g}}function q0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(M,I,O,k,F){let K=!1;const D=f(k,O,I);r!==D&&(r=D,c(r.object)),K=d(M,k,O,F),K&&m(M,k,O,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(M,I,O,k),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function f(M,I,O){const k=O.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let K=F[I.id];K===void 0&&(K={},F[I.id]=K);let D=K[k];return D===void 0&&(D=u(l()),K[k]=D),D}function u(M){const I=[],O=[],k=[];for(let F=0;F<t;F++)I[F]=0,O[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:k,object:M,attributes:{},index:null}}function d(M,I,O,k){const F=r.attributes,K=I.attributes;let D=0;const G=O.getAttributes();for(const z in G)if(G[z].location>=0){const ue=F[z];let pe=K[z];if(pe===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;D++}return r.attributesNum!==D||r.index!==k}function m(M,I,O,k){const F={},K=I.attributes;let D=0;const G=O.getAttributes();for(const z in G)if(G[z].location>=0){let ue=K[z];ue===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),F[z]=pe,D++}r.attributes=F,r.attributesNum=D,r.index=k}function _(){const M=r.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const O=r.newAttributes,k=r.enabledAttributes,F=r.attributeDivisors;O[M]=1,k[M]===0&&(s.enableVertexAttribArray(M),k[M]=1),F[M]!==I&&(s.vertexAttribDivisor(M,I),F[M]=I)}function x(){const M=r.newAttributes,I=r.enabledAttributes;for(let O=0,k=I.length;O<k;O++)I[O]!==M[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function v(M,I,O,k,F,K,D){D===!0?s.vertexAttribIPointer(M,I,O,F,K):s.vertexAttribPointer(M,I,O,k,F,K)}function y(M,I,O,k){_();const F=k.attributes,K=O.getAttributes(),D=I.defaultAttributeValues;for(const G in K){const z=K[G];if(z.location>=0){let he=F[G];if(he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const ue=he.normalized,pe=he.itemSize,Ve=e.get(he);if(Ve===void 0)continue;const Qe=Ve.buffer,Z=Ve.type,oe=Ve.bytesPerElement,_e=Z===s.INT||Z===s.UNSIGNED_INT||he.gpuType===ko;if(he.isInterleavedBufferAttribute){const le=he.data,Y=le.stride,J=he.offset;if(le.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)p(z.location+Fe,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)g(z.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let Fe=0;Fe<z.locationSize;Fe++)v(z.location+Fe,pe/z.locationSize,Z,ue,Y*oe,(J+pe/z.locationSize*Fe)*oe,_e)}else{if(he.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)p(z.location+le,he.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let le=0;le<z.locationSize;le++)g(z.location+le);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let le=0;le<z.locationSize;le++)v(z.location+le,pe/z.locationSize,Z,ue,pe*oe,pe/z.locationSize*le*oe,_e)}}else if(D!==void 0){const ue=D[G];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(z.location,ue);break;case 3:s.vertexAttrib3fv(z.location,ue);break;case 4:s.vertexAttrib4fv(z.location,ue);break;default:s.vertexAttrib1fv(z.location,ue)}}}}x()}function R(){P();for(const M in n){const I=n[M];for(const O in I){const k=I[O];for(const F in k)h(k[F].object),delete k[F];delete I[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const O in I){const k=I[O];for(const F in k)h(k[F].object),delete k[F];delete I[O]}delete n[M.id]}function T(M){for(const I in n){const O=n[I];if(O[M.id]===void 0)continue;const k=O[M.id];for(const F in k)h(k[F].object),delete k[F];delete O[M.id]}}function P(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Y0(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];for(let _=0;_<u.length;_++)t.update(m,n,u[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==tn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==on&&!T)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:y,maxSamples:R}}function J0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new gi,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,v=x*4;let y=p.clippingState||null;l.value=y,y=h(m,u,v,d);for(let R=0;R!==v;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)a.copy(f[v]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function K0(s){let e=new WeakMap;function t(a,o){return o===wr?a.mapping=ii:o===Er&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wr||o===Er)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hd(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ko extends Jo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ls=4,nu=[.125,.215,.35,.446,.526,.582],ki=20,Wl=new Ko,iu=new be;let Xl=null,$l=0,ql=0,Yl=!1;const zi=(1+Math.sqrt(5))/2,ws=1/zi,su=[new C(-zi,ws,0),new C(zi,ws,0),new C(-ws,0,zi),new C(ws,0,zi),new C(0,zi,-ws),new C(0,zi,ws),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,$l,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Ws,format:tn,colorSpace:ai,depthBuffer:!1},i=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=Q0(r,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,n,i){const o=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(iu),h.toneMapping=ti,h.autoClear=!1;const d=new Si({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new It(new rs,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(iu),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Ea(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=su[(i-r-1)%su.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new It(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):ki;g>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);const p=[];let x=0;for(let T=0;T<ki;++T){const P=T/_,b=Math.exp(-P*P/2);p.push(b),T===0?x+=b:T<g&&(x+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=m,u.mipInt.value=v-n;const y=this._sizeLods[i],R=3*y*(i>v-Ls?i-v+Ls:0),w=4*(this._cubeSize-y);Ea(t,R,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Wl)}}function j0(s){const e=[],t=[],n=[];let i=s;const r=s-Ls+1+nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ls?l=nu[a-s+Ls-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,P=w>2?0:-1,b=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(b,_*m*w),v.set(u,g*m*w);const M=[w,w,w,w,w,w];y.set(M,p*m*w)}const R=new rt;R.setAttribute("position",new yt(x,_)),R.setAttribute("uv",new yt(v,g)),R.setAttribute("faceIndex",new yt(y,p)),e.push(R),i>Ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(s,e,t){const n=new Rn(s,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Q0(s,e,t){const n=new Float32Array(ki),i=new C(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function au(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ou(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function ex(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===wr||l===Er,h=l===ii||l===vi;if(c||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Sc(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Sc(s)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nx(s,e,t,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}u.removeEventListener("dispose",a),delete i[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],s.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const R=x[v+0],w=x[v+1],T=x[v+2];u.push(R,w,w,T,T,R)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const R=v+0,w=v+1,T=v+2;u.push(R,w,w,T,T,R)}}else return;const g=new(Ud(u)?Kc:Jc)(u,1);g.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function ix(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,u*a,m),t.update(d,n,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function f(u,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x];for(let x=0;x<_.length;x++)t.update(p,n,_[x])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function sx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rx(s,e,t){const n=new WeakMap,i=new xt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*R*4*f),T=new Yo(w,y,R,f);T.type=on,T.needsUpdate=!0;const P=v*4;for(let M=0;M<f;M++){const I=g[M],O=p[M],k=x[M],F=y*R*4*M;for(let K=0;K<I.count;K++){const D=K*P;d===!0&&(i.fromBufferAttribute(I,K),w[F+D+0]=i.x,w[F+D+1]=i.y,w[F+D+2]=i.z,w[F+D+3]=0),m===!0&&(i.fromBufferAttribute(O,K),w[F+D+4]=i.x,w[F+D+5]=i.y,w[F+D+6]=i.z,w[F+D+7]=0),_===!0&&(i.fromBufferAttribute(k,K),w[F+D+8]=i.x,w[F+D+9]=i.y,w[F+D+10]=i.z,w[F+D+11]=k.itemSize===4?i.w:1)}}u={count:f,texture:T,size:new ee(y,R)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ax(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Qc extends Rt{constructor(e,t,n,i,r,a,o,l,c,h=$i){if(h!==$i&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=si),n===void 0&&h===Ki&&(n=Ji),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wd=new Rt,lu=new Qc(1,1),Xd=new Yo,$d=new Zc,qd=new Jr,cu=[],hu=[],uu=new Float32Array(16),fu=new Float32Array(9),du=new Float32Array(4);function qs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=cu[i];if(r===void 0&&(r=new Float32Array(i),cu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function jo(s,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ox(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function ux(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;du.set(n),s.uniformMatrix2fv(this.addr,!1,du),Ot(t,n)}}function fx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;fu.set(n),s.uniformMatrix3fv(this.addr,!1,fu),Ot(t,n)}}function dx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;uu.set(n),s.uniformMatrix4fv(this.addr,!1,uu),Ot(t,n)}}function px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function vx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function xx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function Sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lu.compareFunction=qc,r=lu):r=Wd,t.setTexture2D(e||r,i)}function bx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$d,i)}function wx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qd,i)}function Ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xd,i)}function Ax(s){switch(s){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return xx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Tx(s,e){s.uniform1fv(this.addr,e)}function Cx(s,e){const t=qs(e,this.size,2);s.uniform2fv(this.addr,t)}function Rx(s,e){const t=qs(e,this.size,3);s.uniform3fv(this.addr,t)}function Px(s,e){const t=qs(e,this.size,4);s.uniform4fv(this.addr,t)}function Ix(s,e){const t=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Lx(s,e){const t=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Dx(s,e){const t=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ux(s,e){s.uniform1iv(this.addr,e)}function Nx(s,e){s.uniform2iv(this.addr,e)}function Fx(s,e){s.uniform3iv(this.addr,e)}function Ox(s,e){s.uniform4iv(this.addr,e)}function Bx(s,e){s.uniform1uiv(this.addr,e)}function zx(s,e){s.uniform2uiv(this.addr,e)}function kx(s,e){s.uniform3uiv(this.addr,e)}function Vx(s,e){s.uniform4uiv(this.addr,e)}function Hx(s,e,t){const n=this.cache,i=e.length,r=jo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wd,r[a])}function Gx(s,e,t){const n=this.cache,i=e.length,r=jo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$d,r[a])}function Wx(s,e,t){const n=this.cache,i=e.length,r=jo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qd,r[a])}function Xx(s,e,t){const n=this.cache,i=e.length,r=jo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xd,r[a])}function $x(s){switch(s){case 5126:return Tx;case 35664:return Cx;case 35665:return Rx;case 35666:return Px;case 35674:return Ix;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return kx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}class qx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ax(t.type)}}class Yx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$x(t.type)}}class Zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function pu(s,e){s.seq.push(e),s.map[e.id]=e}function Jx(s,e,t){const n=s.name,i=n.length;for(Zl.lastIndex=0;;){const r=Zl.exec(n),a=Zl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pu(t,c===void 0?new qx(o,s,e):new Yx(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Zx(o),pu(t,f)),t=f}}}class to{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Jx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function mu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Kx=37297;let jx=0;function Qx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ey(s){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(s);let n;switch(e===t?n="":e===Lr&&t===Ir?n="LinearDisplayP3ToLinearSRGB":e===Ir&&t===Lr&&(n="LinearSRGBToLinearDisplayP3"),s){case ai:case Zr:return[n,"LinearTransferOETF"];case Mn:case qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function gu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qx(s.getShaderSource(e),a)}else return i}function ty(s,e){const t=ey(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ny(s,e){let t;switch(e){case dd:t="Linear";break;case pd:t="Reinhard";break;case md:t="Cineon";break;case gd:t="ACESFilmic";break;case vd:t="AgX";break;case xd:t="Neutral";break;case _d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Aa=new C;function iy(){dt.getLuminanceCoefficients(Aa);const s=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function ry(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ay(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ur(s){return s!==""}function _u(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(oy,cy)}const ly=new Map;function cy(s,e){let t=We[e];if(t===void 0){const n=ly.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}const hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(s){return s.replace(hy,uy)}function uy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function fy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function dy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ii:case vi:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function my(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qr:e="ENVMAP_BLENDING_MULTIPLY";break;case ud:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function gy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _y(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fy(t),c=dy(t),h=py(t),f=my(t),u=gy(t),d=sy(t),m=ry(r),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ur).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(g=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?We.tonemapping_pars_fragment:"",t.toneMapping!==ti?ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ty("linearToOutputTexel",t.outputColorSpace),iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=bc(a),a=_u(a,t),a=vu(a,t),o=bc(o),o=_u(o,t),o=vu(o,t),a=xu(a),o=xu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+g+a,y=x+p+o,R=mu(i,i.VERTEX_SHADER,v),w=mu(i,i.FRAGMENT_SHADER,y);i.attachShader(_,R),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(w).trim();let K=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,w);else{const G=gu(i,R,"vertex"),z=gu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+G+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||F==="")&&(D=!1);D&&(I.diagnostics={runnable:K,programLog:O,vertexShader:{log:k,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(R),i.deleteShader(w),P=new to(i,_),b=ay(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Kx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let vy=0;class xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yy(e),t.set(e,n)),n}}class yy{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}}function My(s,e,t,n,i,r,a){const o=new Zo,l=new xy,c=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,O,k){const F=O.fog,K=k.geometry,D=b.isMeshStandardMaterial?O.environment:null,G=(b.isMeshStandardMaterial?t:e).get(b.envMap||D),z=G&&G.mapping===Gs?G.image.height:null,he=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pe=ue!==void 0?ue.length:0;let Ve=0;K.morphAttributes.position!==void 0&&(Ve=1),K.morphAttributes.normal!==void 0&&(Ve=2),K.morphAttributes.color!==void 0&&(Ve=3);let Qe,Z,oe,_e;if(he){const mt=Tn[he];Qe=mt.vertexShader,Z=mt.fragmentShader}else Qe=b.vertexShader,Z=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const le=s.getRenderTarget(),Y=k.isInstancedMesh===!0,J=k.isBatchedMesh===!0,Fe=!!b.map,ot=!!b.matcap,A=!!G,ae=!!b.aoMap,re=!!b.lightMap,W=!!b.bumpMap,V=!!b.normalMap,He=!!b.displacementMap,ve=!!b.emissiveMap,we=!!b.metalnessMap,L=!!b.roughnessMap,S=b.anisotropy>0,H=b.clearcoat>0,Q=b.dispersion>0,j=b.iridescence>0,ie=b.sheen>0,Be=b.transmission>0,ge=S&&!!b.anisotropyMap,Ae=H&&!!b.clearcoatMap,tt=H&&!!b.clearcoatNormalMap,ce=H&&!!b.clearcoatRoughnessMap,Ee=j&&!!b.iridescenceMap,ct=j&&!!b.iridescenceThicknessMap,Ye=ie&&!!b.sheenColorMap,Re=ie&&!!b.sheenRoughnessMap,et=!!b.specularMap,lt=!!b.specularColorMap,St=!!b.specularIntensityMap,U=Be&&!!b.transmissionMap,fe=Be&&!!b.thicknessMap,te=!!b.gradientMap,se=!!b.alphaMap,me=b.alphaTest>0,Xe=!!b.alphaHash,ht=!!b.extensions;let Lt=ti;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const Ht={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:Z,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:J,batchingColor:J&&k._colorsTexture!==null,instancing:Y,instancingColor:Y&&k.instanceColor!==null,instancingMorph:Y&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ai,alphaToCoverage:!!b.alphaToCoverage,map:Fe,matcap:ot,envMap:A,envMapMode:A&&G.mapping,envMapCubeUVHeight:z,aoMap:ae,lightMap:re,bumpMap:W,normalMap:V,displacementMap:u&&He,emissiveMap:ve,normalMapObjectSpace:V&&b.normalMapType===Ad,normalMapTangentSpace:V&&b.normalMapType===Mi,metalnessMap:we,roughnessMap:L,anisotropy:S,anisotropyMap:ge,clearcoat:H,clearcoatMap:Ae,clearcoatNormalMap:tt,clearcoatRoughnessMap:ce,dispersion:Q,iridescence:j,iridescenceMap:Ee,iridescenceThicknessMap:ct,sheen:ie,sheenColorMap:Ye,sheenRoughnessMap:Re,specularMap:et,specularColorMap:lt,specularIntensityMap:St,transmission:Be,transmissionMap:U,thicknessMap:fe,gradientMap:te,opaque:b.transparent===!1&&b.blending===Xi&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:Xe,combine:b.combine,mapUv:Fe&&_(b.map.channel),aoMapUv:ae&&_(b.aoMap.channel),lightMapUv:re&&_(b.lightMap.channel),bumpMapUv:W&&_(b.bumpMap.channel),normalMapUv:V&&_(b.normalMap.channel),displacementMapUv:He&&_(b.displacementMap.channel),emissiveMapUv:ve&&_(b.emissiveMap.channel),metalnessMapUv:we&&_(b.metalnessMap.channel),roughnessMapUv:L&&_(b.roughnessMap.channel),anisotropyMapUv:ge&&_(b.anisotropyMap.channel),clearcoatMapUv:Ae&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(b.sheenRoughnessMap.channel),specularMapUv:et&&_(b.specularMap.channel),specularColorMapUv:lt&&_(b.specularColorMap.channel),specularIntensityMapUv:St&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:fe&&_(b.thicknessMap.channel),alphaMapUv:se&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(V||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Fe||se),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Fe&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Nn,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(M,b),v(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function y(b){const M=m[b.type];let I;if(M){const O=Tn[M];I=kd.clone(O.uniforms)}else I=b.uniforms;return I}function R(b,M){let I;for(let O=0,k=h.length;O<k;O++){const F=h[O];if(F.cacheKey===M){I=F,++I.usedTimes;break}}return I===void 0&&(I=new _y(s,M,b,r),h.push(I)),I}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:P}}function Sy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function by(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Su(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,u,d,m,_,g){let p=s[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},s[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function o(f,u,d,m,_,g){const p=a(f,u,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,u,d,m,_,g){const p=a(f,u,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||by),n.length>1&&n.sort(u||Mu),i.length>1&&i.sort(u||Mu)}function h(){for(let f=e,u=s.length;f<u;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function wy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Su,s.set(n,[a])):i>=r.length?(a=new Su,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ey(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new be};break;case"SpotLight":t={position:new C,direction:new C,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Ay(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ty=0;function Cy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ry(s){const e=new Ey,t=Ay(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Ge,a=new Ge;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,x=0,v=0,y=0,R=0,w=0,T=0;c.sort(Cy);for(let b=0,M=c.length;b<M;b++){const I=c[b],O=I.color,k=I.intensity,F=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*k,f+=O.g*k,u+=O.b*k;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],k);T++}else if(I.isDirectionalLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,z=t.get(I);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=I.shadow.matrix,x++}n.directional[d]=D,d++}else if(I.isSpotLight){const D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(O).multiplyScalar(k),D.distance=F,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[_]=D;const G=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,G.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=K,y++}_++}else if(I.isRectAreaLight){const D=e.get(I);D.color.copy(O).multiplyScalar(k),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=D,g++}else if(I.isPointLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){const G=I.shadow,z=t.get(I);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=I.shadow.matrix,v++}n.point[m]=D,m++}else if(I.isHemisphereLight){const D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(k),D.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=D,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=T,n.version=Ty++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function bu(s){const e=new Ry(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Py(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new bu(s),e.set(i,[o])):r>=a.length?(o=new bu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class eh extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class th extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
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
}`;function Dy(s,e,t){let n=new Kr;const i=new ee,r=new ee,a=new xt,o=new eh({depthPacking:Ed}),l=new th,c={},h=t.maxTextureSize,f={[ni]:nn,[nn]:ni,[Nn]:Nn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Iy,fragmentShader:Ly}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new rt;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let p=this.type;this.render=function(w,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ei),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==Un&&this.type===Un,F=p===Un&&this.type!==Un;for(let K=0,D=w.length;K<D;K++){const G=w[K],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const he=z.getFrameExtents();if(i.multiply(he),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,z.mapSize.y=r.y)),z.map===null||k===!0||F===!0){const pe=this.type!==Un?{minFilter:Vt,magFilter:Vt}:{};z.map!==null&&z.map.dispose(),z.map=new Rn(i.x,i.y,pe),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ue=z.getViewportCount();for(let pe=0;pe<ue;pe++){const Ve=z.getViewport(pe);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),O.viewport(a),z.updateMatrices(G,pe),n=z.getFrustum(),y(T,P,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Un&&x(z,P),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,M,I)};function x(w,T){const P=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,P,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,P,d,_,null)}function v(w,T,P,b){let M=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=M.uuid,k=T.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let K=F[k];K===void 0&&(K=M.clone(),F[k]=K,T.addEventListener("dispose",R)),M=K}if(M.visible=T.visible,M.wireframe=T.wireframe,b===Un?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=P}return M}function y(w,T,P,b,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const k=e.update(w),F=w.material;if(Array.isArray(F)){const K=k.groups;for(let D=0,G=K.length;D<G;D++){const z=K[D],he=F[z.materialIndex];if(he&&he.visible){const ue=v(w,he,b,M);w.onBeforeShadow(s,w,T,P,k,ue,z),s.renderBufferDirect(P,null,k,ue,w,z),w.onAfterShadow(s,w,T,P,k,ue,z)}}}else if(F.visible){const K=v(w,F,b,M);w.onBeforeShadow(s,w,T,P,k,K,null),s.renderBufferDirect(P,null,k,K,w,null),w.onAfterShadow(s,w,T,P,k,K,null)}}const O=w.children;for(let k=0,F=O.length;k<F;k++)y(O[k],T,P,b,M)}function R(w){w.target.removeEventListener("dispose",R);for(const P in c){const b=c[P],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function Uy(s){function e(){let U=!1;const fe=new xt;let te=null;const se=new xt(0,0,0,0);return{setMask:function(me){te!==me&&!U&&(s.colorMask(me,me,me,me),te=me)},setLocked:function(me){U=me},setClear:function(me,Xe,ht,Lt,Ht){Ht===!0&&(me*=Lt,Xe*=Lt,ht*=Lt),fe.set(me,Xe,ht,Lt),se.equals(fe)===!1&&(s.clearColor(me,Xe,ht,Lt),se.copy(fe))},reset:function(){U=!1,te=null,se.set(-1,0,0,0)}}}function t(){let U=!1,fe=null,te=null,se=null;return{setTest:function(me){me?_e(s.DEPTH_TEST):le(s.DEPTH_TEST)},setMask:function(me){fe!==me&&!U&&(s.depthMask(me),fe=me)},setFunc:function(me){if(te!==me){switch(me){case sd:s.depthFunc(s.NEVER);break;case rd:s.depthFunc(s.ALWAYS);break;case ad:s.depthFunc(s.LESS);break;case br:s.depthFunc(s.LEQUAL);break;case od:s.depthFunc(s.EQUAL);break;case ld:s.depthFunc(s.GEQUAL);break;case cd:s.depthFunc(s.GREATER);break;case hd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=me}},setLocked:function(me){U=me},setClear:function(me){se!==me&&(s.clearDepth(me),se=me)},reset:function(){U=!1,fe=null,te=null,se=null}}}function n(){let U=!1,fe=null,te=null,se=null,me=null,Xe=null,ht=null,Lt=null,Ht=null;return{setTest:function(mt){U||(mt?_e(s.STENCIL_TEST):le(s.STENCIL_TEST))},setMask:function(mt){fe!==mt&&!U&&(s.stencilMask(mt),fe=mt)},setFunc:function(mt,Wn,Dn){(te!==mt||se!==Wn||me!==Dn)&&(s.stencilFunc(mt,Wn,Dn),te=mt,se=Wn,me=Dn)},setOp:function(mt,Wn,Dn){(Xe!==mt||ht!==Wn||Lt!==Dn)&&(s.stencilOp(mt,Wn,Dn),Xe=mt,ht=Wn,Lt=Dn)},setLocked:function(mt){U=mt},setClear:function(mt){Ht!==mt&&(s.clearStencil(mt),Ht=mt)},reset:function(){U=!1,fe=null,te=null,se=null,me=null,Xe=null,ht=null,Lt=null,Ht=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,m=!1,_=null,g=null,p=null,x=null,v=null,y=null,R=null,w=new be(0,0,0),T=0,P=!1,b=null,M=null,I=null,O=null,k=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,D=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=D>=1):G.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=D>=2);let z=null,he={};const ue=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),Ve=new xt().fromArray(ue),Qe=new xt().fromArray(pe);function Z(U,fe,te,se){const me=new Uint8Array(4),Xe=s.createTexture();s.bindTexture(U,Xe),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<te;ht++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(fe+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return Xe}const oe={};oe[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_e(s.DEPTH_TEST),r.setFunc(br),W(!1),V(mc),_e(s.CULL_FACE),ae(ei);function _e(U){c[U]!==!0&&(s.enable(U),c[U]=!0)}function le(U){c[U]!==!1&&(s.disable(U),c[U]=!1)}function Y(U,fe){return h[U]!==fe?(s.bindFramebuffer(U,fe),h[U]=fe,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=fe),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function J(U,fe){let te=u,se=!1;if(U){te=f.get(fe),te===void 0&&(te=[],f.set(fe,te));const me=U.textures;if(te.length!==me.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Xe=0,ht=me.length;Xe<ht;Xe++)te[Xe]=s.COLOR_ATTACHMENT0+Xe;te.length=me.length,se=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,se=!0);se&&s.drawBuffers(te)}function Fe(U){return d!==U?(s.useProgram(U),d=U,!0):!1}const ot={[_i]:s.FUNC_ADD,[Vf]:s.FUNC_SUBTRACT,[Hf]:s.FUNC_REVERSE_SUBTRACT};ot[Gf]=s.MIN,ot[Wf]=s.MAX;const A={[Xf]:s.ZERO,[$f]:s.ONE,[qf]:s.SRC_COLOR,[ro]:s.SRC_ALPHA,[Qf]:s.SRC_ALPHA_SATURATE,[Kf]:s.DST_COLOR,[Zf]:s.DST_ALPHA,[Yf]:s.ONE_MINUS_SRC_COLOR,[ao]:s.ONE_MINUS_SRC_ALPHA,[jf]:s.ONE_MINUS_DST_COLOR,[Jf]:s.ONE_MINUS_DST_ALPHA,[ed]:s.CONSTANT_COLOR,[td]:s.ONE_MINUS_CONSTANT_COLOR,[nd]:s.CONSTANT_ALPHA,[id]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(U,fe,te,se,me,Xe,ht,Lt,Ht,mt){if(U===ei){m===!0&&(le(s.BLEND),m=!1);return}if(m===!1&&(_e(s.BLEND),m=!0),U!==kf){if(U!==_||mt!==P){if((g!==_i||v!==_i)&&(s.blendEquation(s.FUNC_ADD),g=_i,v=_i),mt)switch(U){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gc:s.blendFunc(s.ONE,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,x=null,y=null,R=null,w.set(0,0,0),T=0,_=U,P=mt}return}me=me||fe,Xe=Xe||te,ht=ht||se,(fe!==g||me!==v)&&(s.blendEquationSeparate(ot[fe],ot[me]),g=fe,v=me),(te!==p||se!==x||Xe!==y||ht!==R)&&(s.blendFuncSeparate(A[te],A[se],A[Xe],A[ht]),p=te,x=se,y=Xe,R=ht),(Lt.equals(w)===!1||Ht!==T)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Ht),w.copy(Lt),T=Ht),_=U,P=!1}function re(U,fe){U.side===Nn?le(s.CULL_FACE):_e(s.CULL_FACE);let te=U.side===nn;fe&&(te=!te),W(te),U.blending===Xi&&U.transparent===!1?ae(ei):ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),i.setMask(U.colorWrite);const se=U.stencilWrite;a.setTest(se),se&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):le(s.SAMPLE_ALPHA_TO_COVERAGE)}function W(U){b!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),b=U)}function V(U){U!==Of?(_e(s.CULL_FACE),U!==M&&(U===mc?s.cullFace(s.BACK):U===Bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):le(s.CULL_FACE),M=U}function He(U){U!==I&&(K&&s.lineWidth(U),I=U)}function ve(U,fe,te){U?(_e(s.POLYGON_OFFSET_FILL),(O!==fe||k!==te)&&(s.polygonOffset(fe,te),O=fe,k=te)):le(s.POLYGON_OFFSET_FILL)}function we(U){U?_e(s.SCISSOR_TEST):le(s.SCISSOR_TEST)}function L(U){U===void 0&&(U=s.TEXTURE0+F-1),z!==U&&(s.activeTexture(U),z=U)}function S(U,fe,te){te===void 0&&(z===null?te=s.TEXTURE0+F-1:te=z);let se=he[te];se===void 0&&(se={type:void 0,texture:void 0},he[te]=se),(se.type!==U||se.texture!==fe)&&(z!==te&&(s.activeTexture(te),z=te),s.bindTexture(U,fe||oe[U]),se.type=U,se.texture=fe)}function H(){const U=he[z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(U){Ve.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function Re(U){Qe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Qe.copy(U))}function et(U,fe){let te=l.get(fe);te===void 0&&(te=new WeakMap,l.set(fe,te));let se=te.get(U);se===void 0&&(se=s.getUniformBlockIndex(fe,U.name),te.set(U,se))}function lt(U,fe){const se=l.get(fe).get(U);o.get(fe)!==se&&(s.uniformBlockBinding(fe,se,U.__bindingPointIndex),o.set(fe,se))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},z=null,he={},h={},f=new WeakMap,u=[],d=null,m=!1,_=null,g=null,p=null,x=null,v=null,y=null,R=null,w=new be(0,0,0),T=0,P=!1,b=null,M=null,I=null,O=null,k=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:_e,disable:le,bindFramebuffer:Y,drawBuffers:J,useProgram:Fe,setBlending:ae,setMaterial:re,setFlipSided:W,setCullFace:V,setLineWidth:He,setPolygonOffset:ve,setScissorTest:we,activeTexture:L,bindTexture:S,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:j,texImage2D:Ee,texImage3D:ct,updateUBOMapping:et,uniformBlockBinding:lt,texStorage2D:tt,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:Be,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ae,scissor:Ye,viewport:Re,reset:St}}function Ny(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Fy(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Oy(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function wc(s,e,t,n){const i=By(n);switch(t){case kc:return s*e;case Hc:return s*e;case Gc:return s*e*2;case Go:return s*e/i.components*i.byteLength;case Yr:return s*e/i.components*i.byteLength;case Wc:return s*e*2/i.components*i.byteLength;case Wo:return s*e*2/i.components*i.byteLength;case Vc:return s*e*3/i.components*i.byteLength;case tn:return s*e*4/i.components*i.byteLength;case Xo:return s*e*4/i.components*i.byteLength;case dr:case pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lo:case ho:return Math.max(s,16)*Math.max(e,8)/4;case oo:case co:return Math.max(s,8)*Math.max(e,8)/2;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Co:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _r:case Ro:case Po:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xc:case Io:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Lo:case Do:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function By(s){switch(s){case kn:case Oc:return{byteLength:1,components:1};case Bs:case Bc:case Ws:return{byteLength:2,components:1};case Vo:case Ho:return{byteLength:2,components:4};case si:case ko:case on:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const zy={contain:Ny,cover:Fy,fill:Oy,getByteLength:wc};function ky(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,S){return d?new OffscreenCanvas(L,S):Nr("canvas")}function _(L,S,H){let Q=1;const j=we(L);if((j.width>H||j.height>H)&&(Q=H/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ie=Math.floor(Q*j.width),Be=Math.floor(Q*j.height);f===void 0&&(f=m(ie,Be));const ge=S?m(ie,Be):f;return ge.width=ie,ge.height=Be,ge.getContext("2d").drawImage(L,0,0,ie,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ie+"x"+Be+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Vt&&L.minFilter!==Nt}function p(L){s.generateMipmap(L)}function x(L,S,H,Q,j=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=S;if(S===s.RED&&(H===s.FLOAT&&(ie=s.R32F),H===s.HALF_FLOAT&&(ie=s.R16F),H===s.UNSIGNED_BYTE&&(ie=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ie=s.R8UI),H===s.UNSIGNED_SHORT&&(ie=s.R16UI),H===s.UNSIGNED_INT&&(ie=s.R32UI),H===s.BYTE&&(ie=s.R8I),H===s.SHORT&&(ie=s.R16I),H===s.INT&&(ie=s.R32I)),S===s.RG&&(H===s.FLOAT&&(ie=s.RG32F),H===s.HALF_FLOAT&&(ie=s.RG16F),H===s.UNSIGNED_BYTE&&(ie=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ie=s.RG8UI),H===s.UNSIGNED_SHORT&&(ie=s.RG16UI),H===s.UNSIGNED_INT&&(ie=s.RG32UI),H===s.BYTE&&(ie=s.RG8I),H===s.SHORT&&(ie=s.RG16I),H===s.INT&&(ie=s.RG32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),S===s.RGBA){const Be=j?Pr:dt.getTransfer(Q);H===s.FLOAT&&(ie=s.RGBA32F),H===s.HALF_FLOAT&&(ie=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ie=Be===Mt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(L,S){let H;return L?S===null||S===si||S===Ji?H=s.DEPTH24_STENCIL8:S===on?H=s.DEPTH32F_STENCIL8:S===Bs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===si||S===Ji?H=s.DEPTH_COMPONENT24:S===on?H=s.DEPTH_COMPONENT32F:S===Bs&&(H=s.DEPTH_COMPONENT16),H}function y(L,S){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Vt&&L.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function R(L){const S=L.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&h.delete(S)}function w(L){const S=L.target;S.removeEventListener("dispose",w),b(S)}function T(L){const S=n.get(L);if(S.__webglInit===void 0)return;const H=L.source,Q=u.get(H);if(Q){const j=Q[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(L),Object.keys(Q).length===0&&u.delete(H)}n.remove(L)}function P(L){const S=n.get(L);s.deleteTexture(S.__webglTexture);const H=L.source,Q=u.get(H);delete Q[S.__cacheKey],a.memory.textures--}function b(L){const S=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let j=0;j<S.__webglFramebuffer[Q].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[Q][j]);else s.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[Q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=L.textures;for(let Q=0,j=H.length;Q<j;Q++){const ie=n.get(H[Q]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(H[Q])}n.remove(L)}let M=0;function I(){M=0}function O(){const L=M;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),M+=1,L}function k(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function F(L,S){const H=n.get(L);if(L.isVideoTexture&&He(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(H,L,S);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function K(L,S){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Qe(H,L,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function D(L,S){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Qe(H,L,S);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function G(L,S){const H=n.get(L);if(L.version>0&&H.__version!==L.version){Z(H,L,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const z={[Ar]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},he={[Vt]:s.NEAREST,[Fc]:s.NEAREST_MIPMAP_NEAREST,[Ps]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[fr]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},ue={[Td]:s.NEVER,[Dd]:s.ALWAYS,[Cd]:s.LESS,[qc]:s.LEQUAL,[Rd]:s.EQUAL,[Ld]:s.GEQUAL,[Pd]:s.GREATER,[Id]:s.NOTEQUAL};function pe(L,S){if(S.type===on&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Nt||S.magFilter===fr||S.magFilter===Ps||S.magFilter===Fn||S.minFilter===Nt||S.minFilter===fr||S.minFilter===Ps||S.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,z[S.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,z[S.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,z[S.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,he[S.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==Ps&&S.minFilter!==Fn||S.type===on&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ve(L,S){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",R));const Q=S.source;let j=u.get(Q);j===void 0&&(j={},u.set(Q,j));const ie=k(S);if(ie!==L.__cacheKey){j[ie]===void 0&&(j[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[ie].usedTimes++;const Be=j[L.__cacheKey];Be!==void 0&&(j[L.__cacheKey].usedTimes--,Be.usedTimes===0&&P(S)),L.__cacheKey=ie,L.__webglTexture=j[ie].texture}return H}function Qe(L,S,H){let Q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=s.TEXTURE_3D);const j=Ve(L,S),ie=S.source;t.bindTexture(Q,L.__webglTexture,s.TEXTURE0+H);const Be=n.get(ie);if(ie.version!==Be.__version||j===!0){t.activeTexture(s.TEXTURE0+H);const ge=dt.getPrimaries(dt.workingColorSpace),Ae=S.colorSpace===Kn?null:dt.getPrimaries(S.colorSpace),tt=S.colorSpace===Kn||ge===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ce=_(S.image,!1,i.maxTextureSize);ce=ve(S,ce);const Ee=r.convert(S.format,S.colorSpace),ct=r.convert(S.type);let Ye=x(S.internalFormat,Ee,ct,S.colorSpace,S.isVideoTexture);pe(Q,S);let Re;const et=S.mipmaps,lt=S.isVideoTexture!==!0,St=Be.__version===void 0||j===!0,U=ie.dataReady,fe=y(S,ce);if(S.isDepthTexture)Ye=v(S.format===Ki,S.type),St&&(lt?t.texStorage2D(s.TEXTURE_2D,1,Ye,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,Ye,ce.width,ce.height,0,Ee,ct,null));else if(S.isDataTexture)if(et.length>0){lt&&St&&t.texStorage2D(s.TEXTURE_2D,fe,Ye,et[0].width,et[0].height);for(let te=0,se=et.length;te<se;te++)Re=et[te],lt?U&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Re.width,Re.height,Ee,ct,Re.data):t.texImage2D(s.TEXTURE_2D,te,Ye,Re.width,Re.height,0,Ee,ct,Re.data);S.generateMipmaps=!1}else lt?(St&&t.texStorage2D(s.TEXTURE_2D,fe,Ye,ce.width,ce.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,Ee,ct,ce.data)):t.texImage2D(s.TEXTURE_2D,0,Ye,ce.width,ce.height,0,Ee,ct,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){lt&&St&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Ye,et[0].width,et[0].height,ce.depth);for(let te=0,se=et.length;te<se;te++)if(Re=et[te],S.format!==tn)if(Ee!==null)if(lt){if(U)if(S.layerUpdates.size>0){const me=wc(Re.width,Re.height,S.format,S.type);for(const Xe of S.layerUpdates){const ht=Re.data.subarray(Xe*me/Re.data.BYTES_PER_ELEMENT,(Xe+1)*me/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Xe,Re.width,Re.height,1,Ee,ht,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Re.width,Re.height,ce.depth,Ee,Re.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ye,Re.width,Re.height,ce.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Re.width,Re.height,ce.depth,Ee,ct,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ye,Re.width,Re.height,ce.depth,0,Ee,ct,Re.data)}else{lt&&St&&t.texStorage2D(s.TEXTURE_2D,fe,Ye,et[0].width,et[0].height);for(let te=0,se=et.length;te<se;te++)Re=et[te],S.format!==tn?Ee!==null?lt?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,Re.width,Re.height,Ee,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ye,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?U&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Re.width,Re.height,Ee,ct,Re.data):t.texImage2D(s.TEXTURE_2D,te,Ye,Re.width,Re.height,0,Ee,ct,Re.data)}else if(S.isDataArrayTexture)if(lt){if(St&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Ye,ce.width,ce.height,ce.depth),U)if(S.layerUpdates.size>0){const te=wc(ce.width,ce.height,S.format,S.type);for(const se of S.layerUpdates){const me=ce.data.subarray(se*te/ce.data.BYTES_PER_ELEMENT,(se+1)*te/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,Ee,ct,me)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ee,ct,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ye,ce.width,ce.height,ce.depth,0,Ee,ct,ce.data);else if(S.isData3DTexture)lt?(St&&t.texStorage3D(s.TEXTURE_3D,fe,Ye,ce.width,ce.height,ce.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ee,ct,ce.data)):t.texImage3D(s.TEXTURE_3D,0,Ye,ce.width,ce.height,ce.depth,0,Ee,ct,ce.data);else if(S.isFramebufferTexture){if(St)if(lt)t.texStorage2D(s.TEXTURE_2D,fe,Ye,ce.width,ce.height);else{let te=ce.width,se=ce.height;for(let me=0;me<fe;me++)t.texImage2D(s.TEXTURE_2D,me,Ye,te,se,0,Ee,ct,null),te>>=1,se>>=1}}else if(et.length>0){if(lt&&St){const te=we(et[0]);t.texStorage2D(s.TEXTURE_2D,fe,Ye,te.width,te.height)}for(let te=0,se=et.length;te<se;te++)Re=et[te],lt?U&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ee,ct,Re):t.texImage2D(s.TEXTURE_2D,te,Ye,Ee,ct,Re);S.generateMipmaps=!1}else if(lt){if(St){const te=we(ce);t.texStorage2D(s.TEXTURE_2D,fe,Ye,te.width,te.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,ct,ce)}else t.texImage2D(s.TEXTURE_2D,0,Ye,Ee,ct,ce);g(S)&&p(Q),Be.__version=ie.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Z(L,S,H){if(S.image.length!==6)return;const Q=Ve(L,S),j=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+H);const ie=n.get(j);if(j.version!==ie.__version||Q===!0){t.activeTexture(s.TEXTURE0+H);const Be=dt.getPrimaries(dt.workingColorSpace),ge=S.colorSpace===Kn?null:dt.getPrimaries(S.colorSpace),Ae=S.colorSpace===Kn||Be===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const tt=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let se=0;se<6;se++)!tt&&!ce?Ee[se]=_(S.image[se],!0,i.maxCubemapSize):Ee[se]=ce?S.image[se].image:S.image[se],Ee[se]=ve(S,Ee[se]);const ct=Ee[0],Ye=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),et=x(S.internalFormat,Ye,Re,S.colorSpace),lt=S.isVideoTexture!==!0,St=ie.__version===void 0||Q===!0,U=j.dataReady;let fe=y(S,ct);pe(s.TEXTURE_CUBE_MAP,S);let te;if(tt){lt&&St&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,et,ct.width,ct.height);for(let se=0;se<6;se++){te=Ee[se].mipmaps;for(let me=0;me<te.length;me++){const Xe=te[me];S.format!==tn?Ye!==null?lt?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Xe.width,Xe.height,Ye,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,et,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Xe.width,Xe.height,Ye,Re,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,et,Xe.width,Xe.height,0,Ye,Re,Xe.data)}}}else{if(te=S.mipmaps,lt&&St){te.length>0&&fe++;const se=we(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,et,se.width,se.height)}for(let se=0;se<6;se++)if(ce){lt?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ee[se].width,Ee[se].height,Ye,Re,Ee[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,et,Ee[se].width,Ee[se].height,0,Ye,Re,Ee[se].data);for(let me=0;me<te.length;me++){const ht=te[me].image[se].image;lt?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,ht.width,ht.height,Ye,Re,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,et,ht.width,ht.height,0,Ye,Re,ht.data)}}else{lt?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ye,Re,Ee[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,et,Ye,Re,Ee[se]);for(let me=0;me<te.length;me++){const Xe=te[me];lt?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Ye,Re,Xe.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,et,Ye,Re,Xe.image[se])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),ie.__version=j.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function oe(L,S,H,Q,j,ie){const Be=r.convert(H.format,H.colorSpace),ge=r.convert(H.type),Ae=x(H.internalFormat,Be,ge,H.colorSpace);if(!n.get(S).__hasExternalTextures){const ce=Math.max(1,S.width>>ie),Ee=Math.max(1,S.height>>ie);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,ie,Ae,ce,Ee,S.depth,0,Be,ge,null):t.texImage2D(j,ie,Ae,ce,Ee,0,Be,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),V(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,j,n.get(H).__webglTexture,0,W(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,j,n.get(H).__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(L,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,L),S.depthBuffer){const Q=S.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,ie=v(S.stencilBuffer,j),Be=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=W(S);V(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,ie,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ie,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ie,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,L)}else{const Q=S.textures;for(let j=0;j<Q.length;j++){const ie=Q[j],Be=r.convert(ie.format,ie.colorSpace),ge=r.convert(ie.type),Ae=x(ie.internalFormat,Be,ge,ie.colorSpace),tt=W(S);H&&V(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Ae,S.width,S.height):V(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Ae,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,j=W(S);if(S.depthTexture.format===$i)V(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Ki)V(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Y(L){const S=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Q}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,L)}else if(H){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=s.createRenderbuffer(),_e(S.__webglDepthbuffer[Q],L,!1);else{const j=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),_e(S.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(L,S,H){const Q=n.get(L);S!==void 0&&oe(Q.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Y(L)}function Fe(L){const S=L.texture,H=n.get(L),Q=n.get(S);L.addEventListener("dispose",w);const j=L.textures,ie=L.isWebGLCubeRenderTarget===!0,Be=j.length>1;if(Be||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=S.version,a.memory.textures++),ie){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)H.__webglFramebuffer[ge][Ae]=s.createFramebuffer()}else H.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)H.__webglFramebuffer[ge]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Be)for(let ge=0,Ae=j.length;ge<Ae;ge++){const tt=n.get(j[ge]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&V(L)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<j.length;ge++){const Ae=j[ge];H.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);const tt=r.convert(Ae.format,Ae.colorSpace),ce=r.convert(Ae.type),Ee=x(Ae.internalFormat,tt,ce,Ae.colorSpace,L.isXRRenderTarget===!0),ct=W(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ee,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(s.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)oe(H.__webglFramebuffer[ge][Ae],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae);else oe(H.__webglFramebuffer[ge],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let ge=0,Ae=j.length;ge<Ae;ge++){const tt=j[ge],ce=n.get(tt);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),pe(s.TEXTURE_2D,tt),oe(H.__webglFramebuffer,L,tt,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,0),g(tt)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,Q.__webglTexture),pe(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)oe(H.__webglFramebuffer[Ae],L,S,s.COLOR_ATTACHMENT0,ge,Ae);else oe(H.__webglFramebuffer,L,S,s.COLOR_ATTACHMENT0,ge,0);g(S)&&p(ge),t.unbindTexture()}L.depthBuffer&&Y(L)}function ot(L){const S=L.textures;for(let H=0,Q=S.length;H<Q;H++){const j=S[H];if(g(j)){const ie=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Be=n.get(j).__webglTexture;t.bindTexture(ie,Be),p(ie),t.unbindTexture()}}}const A=[],ae=[];function re(L){if(L.samples>0){if(V(L)===!1){const S=L.textures,H=L.width,Q=L.height;let j=s.COLOR_BUFFER_BIT;const ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=n.get(L),ge=S.length>1;if(ge)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ae]);const tt=n.get(S[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,H,Q,0,0,H,Q,j,s.NEAREST),l===!0&&(A.length=0,ae.length=0,A.push(s.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(A.push(ie),ae.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ae)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ae]);const tt=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const S=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function W(L){return Math.min(i.maxSamples,L.samples)}function V(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(L){const S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function ve(L,S){const H=L.colorSpace,Q=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==ai&&H!==Kn&&(dt.getTransfer(H)===Mt?(Q!==tn||j!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=D,this.setTextureCube=G,this.rebindTextures=J,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=V}function Yd(s,e){function t(n,i=Kn){let r;const a=dt.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===Vo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return s.BYTE;if(n===Bc)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===ko)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===Ws)return s.HALF_FLOAT;if(n===kc)return s.ALPHA;if(n===Vc)return s.RGB;if(n===tn)return s.RGBA;if(n===Hc)return s.LUMINANCE;if(n===Gc)return s.LUMINANCE_ALPHA;if(n===$i)return s.DEPTH_COMPONENT;if(n===Ki)return s.DEPTH_STENCIL;if(n===Go)return s.RED;if(n===Yr)return s.RED_INTEGER;if(n===Wc)return s.RG;if(n===Wo)return s.RG_INTEGER;if(n===Xo)return s.RGBA_INTEGER;if(n===dr||n===pr||n===mr||n===gr)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===Mo||n===So||n===bo||n===wo||n===Eo||n===Ao||n===To||n===Co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Ro||n===Po)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===Io||n===Lo||n===Do)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Zd extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ds extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vy={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ds;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
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

}`;class Wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xy extends Vn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=new Wy,g=t.getContextAttributes();let p=null,x=null;const v=[],y=[],R=new ee;let w=null;const T=new kt;T.layers.enable(1),T.viewport=new xt;const P=new kt;P.layers.enable(2),P.viewport=new xt;const b=[T,P],M=new Zd;M.layers.enable(1),M.layers.enable(2);let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=v[Z];return oe===void 0&&(oe=new Jl,v[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=v[Z];return oe===void 0&&(oe=new Jl,v[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=v[Z];return oe===void 0&&(oe=new Jl,v[Z]=oe),oe.getHandSpace()};function k(Z){const oe=y.indexOf(Z.inputSource);if(oe===-1)return;const _e=v[oe];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",K);for(let Z=0;Z<v.length;Z++){const oe=y[Z];oe!==null&&(y[Z]=null,v[Z].disconnect(oe))}I=null,O=null,_.reset(),e.setRenderTarget(p),d=null,u=null,f=null,i=null,x=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",F),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Rn(d.framebufferWidth,d.framebufferHeight,{format:tn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,_e=null,le=null;g.depth&&(le=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?Ki:$i,_e=g.stencil?Ji:si);const Y={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=new XRWebGLBinding(i,t),u=f.createProjectionLayer(Y),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Rn(u.textureWidth,u.textureHeight,{format:tn,type:kn,depthTexture:new Qc(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Z){for(let oe=0;oe<Z.removed.length;oe++){const _e=Z.removed[oe],le=y.indexOf(_e);le>=0&&(y[le]=null,v[le].disconnect(_e))}for(let oe=0;oe<Z.added.length;oe++){const _e=Z.added[oe];let le=y.indexOf(_e);if(le===-1){for(let J=0;J<v.length;J++)if(J>=y.length){y.push(_e),le=J;break}else if(y[J]===null){y[J]=_e,le=J;break}if(le===-1)break}const Y=v[le];Y&&Y.connect(_e)}}const D=new C,G=new C;function z(Z,oe,_e){D.setFromMatrixPosition(oe.matrixWorld),G.setFromMatrixPosition(_e.matrixWorld);const le=D.distanceTo(G),Y=oe.projectionMatrix.elements,J=_e.projectionMatrix.elements,Fe=Y[14]/(Y[10]-1),ot=Y[14]/(Y[10]+1),A=(Y[9]+1)/Y[5],ae=(Y[9]-1)/Y[5],re=(Y[8]-1)/Y[0],W=(J[8]+1)/J[0],V=Fe*re,He=Fe*W,ve=le/(-re+W),we=ve*-re;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(we),Z.translateZ(ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Y[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const L=Fe+ve,S=ot+ve,H=V-we,Q=He+(le-we),j=A*ot/S*L,ie=ae*ot/S*L;Z.projectionMatrix.makePerspective(H,Q,j,ie,L,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let oe=Z.near,_e=Z.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),M.near=P.near=T.near=oe,M.far=P.far=T.far=_e,(I!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,O=M.far);const le=Z.parent,Y=M.cameras;he(M,le);for(let J=0;J<Y.length;J++)he(Y[J],le);Y.length===2?z(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),ue(Z,M,le)};function ue(Z,oe,_e){_e===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let pe=null;function Ve(Z,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let le=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let J=0;J<_e.length;J++){const Fe=_e[J];let ot=null;if(d!==null)ot=d.getViewport(Fe);else{const ae=f.getViewSubImage(u,Fe);ot=ae.viewport,J===0&&(e.setRenderTargetTextures(x,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(x))}let A=b[J];A===void 0&&(A=new kt,A.layers.enable(J),A.viewport=new xt,b[J]=A),A.matrix.fromArray(Fe.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Fe.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(ot.x,ot.y,ot.width,ot.height),J===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(A)}const Y=i.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const J=f.getDepthInformation(_e[0]);J&&J.isValid&&J.texture&&_.init(e,J,i.renderState)}}for(let _e=0;_e<v.length;_e++){const le=y[_e],Y=v[_e];le!==null&&Y!==void 0&&Y.update(le,oe,c||a)}pe&&pe(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const Qe=new Gd;Qe.setAnimationLoop(Ve),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}}const Ii=new vn,$y=new Ge;function qy(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zd(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(Ii)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yy(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(m(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",g));const R=v.program;n.updateUBOMapping(x,R);const w=e.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const v=f();x.__bindingPointIndex=v;const y=s.createBuffer(),R=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const v=i[x.id],y=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,T=y.length;w<T;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,M=P.length;b<M;b++){const I=P[b];if(d(I,w,b,R)===!0){const O=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let K=0;K<k.length;K++){const D=k[K],G=_(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,O+F,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,y,R){const w=x.value,T=v+"_"+y;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const P=R[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[T]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(x){const v=x.uniforms;let y=0;const R=16;for(let T=0,P=v.length;T<P;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,I=b.length;M<I;M++){const O=b[M],k=Array.isArray(O.value)?O.value:[O.value];for(let F=0,K=k.length;F<K;F++){const D=k[F],G=_(D),z=y%R,he=z%G.boundary,ue=z+he;y+=he,ue!==0&&R-ue<G.storage&&(y+=R-ue),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=G.storage}}}const w=y%R;return w>0&&(y+=R-w),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Zy{constructor(e={}){const{canvas:t=Nd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=ti,this.toneMappingExposure=1;const v=this;let y=!1,R=0,w=0,T=null,P=-1,b=null;const M=new xt,I=new xt;let O=null;const k=new be(0);let F=0,K=t.width,D=t.height,G=1,z=null,he=null;const ue=new xt(0,0,K,D),pe=new xt(0,0,K,D);let Ve=!1;const Qe=new Kr;let Z=!1,oe=!1;const _e=new Ge,le=new C,Y=new xt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ot(){return T===null?G:1}let A=n;function ae(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",me,!1),A===null){const N="webgl2";if(A=ae(N,E),A===null)throw ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let re,W,V,He,ve,we,L,S,H,Q,j,ie,Be,ge,Ae,tt,ce,Ee,ct,Ye,Re,et,lt,St;function U(){re=new tx(A),re.init(),et=new Yd(A,re),W=new Z0(A,re,e,et),V=new Uy(A),He=new sx(A),ve=new Sy,we=new ky(A,re,V,ve,W,et,He),L=new K0(v),S=new ex(v),H=new u_(A),lt=new q0(A,H),Q=new nx(A,H,He,lt),j=new ax(A,Q,H,He),ct=new rx(A,W,we),tt=new J0(ve),ie=new My(v,L,S,re,W,lt,tt),Be=new qy(v,ve),ge=new wy,Ae=new Py(re),Ee=new $0(v,L,S,V,j,u,l),ce=new Dy(v,j,W),St=new Yy(A,He,W,V),Ye=new Y0(A,re,He),Re=new ix(A,re,He),He.programs=ie.programs,v.capabilities=W,v.extensions=re,v.properties=ve,v.renderLists=ge,v.shadowMap=ce,v.state=V,v.info=He}U();const fe=new Xy(v,A);this.xr=fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(K,D,!1))},this.getSize=function(E){return E.set(K,D)},this.setSize=function(E,N,X=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,D=N,t.width=Math.floor(E*G),t.height=Math.floor(N*G),X===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(K*G,D*G).floor()},this.setDrawingBufferSize=function(E,N,X){K=E,D=N,G=X,t.width=Math.floor(E*X),t.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,N,X,$){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,N,X,$),V.viewport(M.copy(ue).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(pe)},this.setScissor=function(E,N,X,$){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,N,X,$),V.scissor(I.copy(pe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){V.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,N=!0,X=!0){let $=0;if(E){let B=!1;if(T!==null){const de=T.texture.format;B=de===Xo||de===Wo||de===Yr}if(B){const de=T.texture.type,Se=de===kn||de===si||de===Bs||de===Ji||de===Vo||de===Ho,Pe=Ee.getClearColor(),Ie=Ee.getClearAlpha(),$e=Pe.r,qe=Pe.g,ze=Pe.b;Se?(d[0]=$e,d[1]=qe,d[2]=ze,d[3]=Ie,A.clearBufferuiv(A.COLOR,0,d)):(m[0]=$e,m[1]=qe,m[2]=ze,m[3]=Ie,A.clearBufferiv(A.COLOR,0,m))}else $|=A.COLOR_BUFFER_BIT}N&&($|=A.DEPTH_BUFFER_BIT),X&&($|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ge.dispose(),Ae.dispose(),ve.dispose(),L.dispose(),S.dispose(),j.dispose(),lt.dispose(),St.dispose(),ie.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Dn),fe.removeEventListener("sessionend",bh),Ei.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=He.autoReset,N=ce.enabled,X=ce.autoUpdate,$=ce.needsUpdate,B=ce.type;U(),He.autoReset=E,ce.enabled=N,ce.autoUpdate=X,ce.needsUpdate=$,ce.type=B}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const N=E.target;N.removeEventListener("dispose",Xe),ht(N)}function ht(E){Lt(E),ve.remove(E)}function Lt(E){const N=ve.get(E).programs;N!==void 0&&(N.forEach(function(X){ie.releaseProgram(X)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,$,B,de){N===null&&(N=J);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Pe=im(E,N,X,$,B);V.setMaterial($,Se);let Ie=X.index,$e=1;if($.wireframe===!0){if(Ie=Q.getWireframeAttribute(X),Ie===void 0)return;$e=2}const qe=X.drawRange,ze=X.attributes.position;let gt=qe.start*$e,Et=(qe.start+qe.count)*$e;de!==null&&(gt=Math.max(gt,de.start*$e),Et=Math.min(Et,(de.start+de.count)*$e)),Ie!==null?(gt=Math.max(gt,0),Et=Math.min(Et,Ie.count)):ze!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,ze.count));const At=Et-gt;if(At<0||At===1/0)return;lt.setup(B,$,Pe,X,Ie);let hn,_t=Ye;if(Ie!==null&&(hn=H.get(Ie),_t=Re,_t.setIndex(hn)),B.isMesh)$.wireframe===!0?(V.setLineWidth($.wireframeLinewidth*ot()),_t.setMode(A.LINES)):_t.setMode(A.TRIANGLES);else if(B.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),V.setLineWidth(ke*ot()),B.isLineSegments?_t.setMode(A.LINES):B.isLineLoop?_t.setMode(A.LINE_LOOP):_t.setMode(A.LINE_STRIP)}else B.isPoints?_t.setMode(A.POINTS):B.isSprite&&_t.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)_t.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))_t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ke=B._multiDrawStarts,Gt=B._multiDrawCounts,vt=B._multiDrawCount,bn=Ie?H.get(Ie).bytesPerElement:1,ls=ve.get($).currentProgram.getUniforms();for(let un=0;un<vt;un++)ls.setValue(A,"_gl_DrawID",un),_t.render(ke[un]/bn,Gt[un])}else if(B.isInstancedMesh)_t.renderInstances(gt,At,B.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Gt=Math.min(X.instanceCount,ke);_t.renderInstances(gt,At,Gt)}else _t.render(gt,At)};function Ht(E,N,X){E.transparent===!0&&E.side===Nn&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,sa(E,N,X),E.side=ni,E.needsUpdate=!0,sa(E,N,X),E.side=Nn):sa(E,N,X)}this.compile=function(E,N,X=null){X===null&&(X=E),g=Ae.get(X),g.init(N),x.push(g),X.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const $=new Set;return E.traverse(function(B){const de=B.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Pe=de[Se];Ht(Pe,X,B),$.add(Pe)}else Ht(de,X,B),$.add(de)}),x.pop(),g=null,$},this.compileAsync=function(E,N,X=null){const $=this.compile(E,N,X);return new Promise(B=>{function de(){if($.forEach(function(Se){ve.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){B(E);return}setTimeout(de,10)}re.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let mt=null;function Wn(E){mt&&mt(E)}function Dn(){Ei.stop()}function bh(){Ei.start()}const Ei=new Gd;Ei.setAnimationLoop(Wn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){mt=E,fe.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},fe.addEventListener("sessionstart",Dn),fe.addEventListener("sessionend",bh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,T),g=Ae.get(E,x.length),g.init(N),x.push(g),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(_e),oe=this.localClippingEnabled,Z=tt.init(this.clippingPlanes,oe),_=ge.get(E,p.length),_.init(),p.push(_),fe.enabled===!0&&fe.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&Sl(de,N,-1/0,v.sortObjects)}Sl(E,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,he),Fe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Fe&&Ee.addToRenderList(_,E),this.info.render.frame++,Z===!0&&tt.beginShadows();const X=g.state.shadowsArray;ce.render(X,E,N),Z===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,B=_.transmissive;if(g.setupLights(),N.isArrayCamera){const de=N.cameras;if(B.length>0)for(let Se=0,Pe=de.length;Se<Pe;Se++){const Ie=de[Se];Eh($,B,E,Ie)}Fe&&Ee.render(E);for(let Se=0,Pe=de.length;Se<Pe;Se++){const Ie=de[Se];wh(_,E,Ie,Ie.viewport)}}else B.length>0&&Eh($,B,E,N),Fe&&Ee.render(E),wh(_,E,N);T!==null&&(we.updateMultisampleRenderTarget(T),we.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,N),lt.resetDefaultState(),P=-1,b=null,x.pop(),x.length>0?(g=x[x.length-1],Z===!0&&tt.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Sl(E,N,X,$){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Qe.intersectsSprite(E)){$&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Se=j.update(E),Pe=E.material;Pe.visible&&_.push(E,Se,Pe,X,Y.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Qe.intersectsObject(E))){const Se=j.update(E),Pe=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Y.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Y.copy(Se.boundingSphere.center)),Y.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(Pe)){const Ie=Se.groups;for(let $e=0,qe=Ie.length;$e<qe;$e++){const ze=Ie[$e],gt=Pe[ze.materialIndex];gt&&gt.visible&&_.push(E,Se,gt,X,Y.z,ze)}}else Pe.visible&&_.push(E,Se,Pe,X,Y.z,null)}}const de=E.children;for(let Se=0,Pe=de.length;Se<Pe;Se++)Sl(de[Se],N,X,$)}function wh(E,N,X,$){const B=E.opaque,de=E.transmissive,Se=E.transparent;g.setupLightsView(X),Z===!0&&tt.setGlobalState(v.clippingPlanes,X),$&&V.viewport(M.copy($)),B.length>0&&ia(B,N,X),de.length>0&&ia(de,N,X),Se.length>0&&ia(Se,N,X),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Eh(E,N,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Rn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Ws:kn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const de=g.state.transmissionRenderTarget[$.id],Se=$.viewport||M;de.setSize(Se.z,Se.w);const Pe=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(k),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&Ee.render(X);const Ie=v.toneMapping;v.toneMapping=ti;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),Z===!0&&tt.setGlobalState(v.clippingPlanes,$),ia(E,X,$),we.updateMultisampleRenderTarget(de),we.updateRenderTargetMipmap(de),re.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ze=0,gt=N.length;ze<gt;ze++){const Et=N[ze],At=Et.object,hn=Et.geometry,_t=Et.material,ke=Et.group;if(_t.side===Nn&&At.layers.test($.layers)){const Gt=_t.side;_t.side=nn,_t.needsUpdate=!0,Ah(At,X,$,hn,_t,ke),_t.side=Gt,_t.needsUpdate=!0,qe=!0}}qe===!0&&(we.updateMultisampleRenderTarget(de),we.updateRenderTargetMipmap(de))}v.setRenderTarget(Pe),v.setClearColor(k,F),$e!==void 0&&($.viewport=$e),v.toneMapping=Ie}function ia(E,N,X){const $=N.isScene===!0?N.overrideMaterial:null;for(let B=0,de=E.length;B<de;B++){const Se=E[B],Pe=Se.object,Ie=Se.geometry,$e=$===null?Se.material:$,qe=Se.group;Pe.layers.test(X.layers)&&Ah(Pe,N,X,Ie,$e,qe)}}function Ah(E,N,X,$,B,de){E.onBeforeRender(v,N,X,$,B,de),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,N,X,$,E,de),B.transparent===!0&&B.side===Nn&&B.forceSinglePass===!1?(B.side=nn,B.needsUpdate=!0,v.renderBufferDirect(X,N,$,B,E,de),B.side=ni,B.needsUpdate=!0,v.renderBufferDirect(X,N,$,B,E,de),B.side=Nn):v.renderBufferDirect(X,N,$,B,E,de),E.onAfterRender(v,N,X,$,B,de)}function sa(E,N,X){N.isScene!==!0&&(N=J);const $=ve.get(E),B=g.state.lights,de=g.state.shadowsArray,Se=B.state.version,Pe=ie.getParameters(E,B.state,de,N,X),Ie=ie.getProgramCacheKey(Pe);let $e=$.programs;$.environment=E.isMeshStandardMaterial?N.environment:null,$.fog=N.fog,$.envMap=(E.isMeshStandardMaterial?S:L).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,$e===void 0&&(E.addEventListener("dispose",Xe),$e=new Map,$.programs=$e);let qe=$e.get(Ie);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===Se)return Ch(E,Pe),qe}else Pe.uniforms=ie.getUniforms(E),E.onBeforeCompile(Pe,v),qe=ie.acquireProgram(Pe,Ie),$e.set(Ie,qe),$.uniforms=Pe.uniforms;const ze=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=tt.uniform),Ch(E,Pe),$.needsLights=rm(E),$.lightsStateVersion=Se,$.needsLights&&(ze.ambientLightColor.value=B.state.ambient,ze.lightProbe.value=B.state.probe,ze.directionalLights.value=B.state.directional,ze.directionalLightShadows.value=B.state.directionalShadow,ze.spotLights.value=B.state.spot,ze.spotLightShadows.value=B.state.spotShadow,ze.rectAreaLights.value=B.state.rectArea,ze.ltc_1.value=B.state.rectAreaLTC1,ze.ltc_2.value=B.state.rectAreaLTC2,ze.pointLights.value=B.state.point,ze.pointLightShadows.value=B.state.pointShadow,ze.hemisphereLights.value=B.state.hemi,ze.directionalShadowMap.value=B.state.directionalShadowMap,ze.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ze.spotShadowMap.value=B.state.spotShadowMap,ze.spotLightMatrix.value=B.state.spotLightMatrix,ze.spotLightMap.value=B.state.spotLightMap,ze.pointShadowMap.value=B.state.pointShadowMap,ze.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=qe,$.uniformsList=null,qe}function Th(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=to.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ch(E,N){const X=ve.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function im(E,N,X,$,B){N.isScene!==!0&&(N=J),we.resetTextureUnits();const de=N.fog,Se=$.isMeshStandardMaterial?N.environment:null,Pe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ai,Ie=($.isMeshStandardMaterial?S:L).get($.envMap||Se),$e=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!X.morphAttributes.position,gt=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color;let At=ti;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(At=v.toneMapping);const hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=hn!==void 0?hn.length:0,ke=ve.get($),Gt=g.state.lights;if(Z===!0&&(oe===!0||E!==b)){const xn=E===b&&$.id===P;tt.setState($,E,xn)}let vt=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Gt.state.version||ke.outputColorSpace!==Pe||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isBatchedMesh&&ke.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ke.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==Ie||$.fog===!0&&ke.fog!==de||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==tt.numPlanes||ke.numIntersection!==tt.numIntersection)||ke.vertexAlphas!==$e||ke.vertexTangents!==qe||ke.morphTargets!==ze||ke.morphNormals!==gt||ke.morphColors!==Et||ke.toneMapping!==At||ke.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,ke.__version=$.version);let bn=ke.currentProgram;vt===!0&&(bn=sa($,N,B));let ls=!1,un=!1,bl=!1;const Dt=bn.getUniforms(),oi=ke.uniforms;if(V.useProgram(bn.program)&&(ls=!0,un=!0,bl=!0),$.id!==P&&(P=$.id,un=!0),ls||b!==E){Dt.setValue(A,"projectionMatrix",E.projectionMatrix),Dt.setValue(A,"viewMatrix",E.matrixWorldInverse);const xn=Dt.map.cameraPosition;xn!==void 0&&xn.setValue(A,le.setFromMatrixPosition(E.matrixWorld)),W.logarithmicDepthBuffer&&Dt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,un=!0,bl=!0)}if(B.isSkinnedMesh){Dt.setOptional(A,B,"bindMatrix"),Dt.setOptional(A,B,"bindMatrixInverse");const xn=B.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Dt.setValue(A,"boneTexture",xn.boneTexture,we))}B.isBatchedMesh&&(Dt.setOptional(A,B,"batchingTexture"),Dt.setValue(A,"batchingTexture",B._matricesTexture,we),Dt.setOptional(A,B,"batchingIdTexture"),Dt.setValue(A,"batchingIdTexture",B._indirectTexture,we),Dt.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&Dt.setValue(A,"batchingColorTexture",B._colorsTexture,we));const wl=X.morphAttributes;if((wl.position!==void 0||wl.normal!==void 0||wl.color!==void 0)&&ct.update(B,X,bn),(un||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,Dt.setValue(A,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(oi.envMap.value=Ie,oi.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&N.environment!==null&&(oi.envMapIntensity.value=N.environmentIntensity),un&&(Dt.setValue(A,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&sm(oi,bl),de&&$.fog===!0&&Be.refreshFogUniforms(oi,de),Be.refreshMaterialUniforms(oi,$,G,D,g.state.transmissionRenderTarget[E.id]),to.upload(A,Th(ke),oi,we)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(to.upload(A,Th(ke),oi,we),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(A,"center",B.center),Dt.setValue(A,"modelViewMatrix",B.modelViewMatrix),Dt.setValue(A,"normalMatrix",B.normalMatrix),Dt.setValue(A,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const xn=$.uniformsGroups;for(let El=0,am=xn.length;El<am;El++){const Rh=xn[El];St.update(Rh,bn),St.bind(Rh,bn)}}return bn}function sm(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function rm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,X){ve.get(E.texture).__webglTexture=N,ve.get(E.depthTexture).__webglTexture=X;const $=ve.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const X=ve.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){T=E,R=N,w=X;let $=!0,B=null,de=!1,Se=!1;if(E){const Ie=ve.get(E);if(Ie.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(A.FRAMEBUFFER,null),$=!1;else if(Ie.__webglFramebuffer===void 0)we.setupRenderTarget(E);else if(Ie.__hasExternalTextures)we.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(Ie.__boundDepthTexture!==ze){if(ze!==null&&ve.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(E)}}const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Se=!0);const qe=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[N])?B=qe[N][X]:B=qe[N],de=!0):E.samples>0&&we.useMultisampledRTT(E)===!1?B=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?B=qe[X]:B=qe,M.copy(E.viewport),I.copy(E.scissor),O=E.scissorTest}else M.copy(ue).multiplyScalar(G).floor(),I.copy(pe).multiplyScalar(G).floor(),O=Ve;if(V.bindFramebuffer(A.FRAMEBUFFER,B)&&$&&V.drawBuffers(E,B),V.viewport(M),V.scissor(I),V.setScissorTest(O),de){const Ie=ve.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,X)}else if(Se){const Ie=ve.get(E.texture),$e=N||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,$e)}P=-1},this.readRenderTargetPixels=function(E,N,X,$,B,de,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){V.bindFramebuffer(A.FRAMEBUFFER,Pe);try{const Ie=E.texture,$e=Ie.format,qe=Ie.type;if(!W.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-$&&X>=0&&X<=E.height-B&&A.readPixels(N,X,$,B,et.convert($e),et.convert(qe),de)}finally{const Ie=T!==null?ve.get(T).__webglFramebuffer:null;V.bindFramebuffer(A.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,N,X,$,B,de,Se){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){V.bindFramebuffer(A.FRAMEBUFFER,Pe);try{const Ie=E.texture,$e=Ie.format,qe=Ie.type;if(!W.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-$&&X>=0&&X<=E.height-B){const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,de.byteLength,A.STREAM_READ),A.readPixels(N,X,$,B,et.convert($e),et.convert(qe),0),A.flush();const gt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await Fg(A,gt,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,de)}finally{A.deleteBuffer(ze),A.deleteSync(gt)}return de}}finally{const Ie=T!==null?ve.get(T).__webglFramebuffer:null;V.bindFramebuffer(A.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,N=null,X=0){E.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-X),B=Math.floor(E.image.width*$),de=Math.floor(E.image.height*$),Se=N!==null?N.x:0,Pe=N!==null?N.y:0;we.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,Se,Pe,B,de),V.unbindTexture()},this.copyTextureToTexture=function(E,N,X=null,$=null,B=0){E.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],N=arguments[2],B=arguments[3]||0,X=null);let de,Se,Pe,Ie,$e,qe;X!==null?(de=X.max.x-X.min.x,Se=X.max.y-X.min.y,Pe=X.min.x,Ie=X.min.y):(de=E.image.width,Se=E.image.height,Pe=0,Ie=0),$!==null?($e=$.x,qe=$.y):($e=0,qe=0);const ze=et.convert(N.format),gt=et.convert(N.type);we.setTexture2D(N,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const Et=A.getParameter(A.UNPACK_ROW_LENGTH),At=A.getParameter(A.UNPACK_IMAGE_HEIGHT),hn=A.getParameter(A.UNPACK_SKIP_PIXELS),_t=A.getParameter(A.UNPACK_SKIP_ROWS),ke=A.getParameter(A.UNPACK_SKIP_IMAGES),Gt=E.isCompressedTexture?E.mipmaps[B]:E.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Gt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Gt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ie),E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,B,$e,qe,de,Se,ze,gt,Gt.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,B,$e,qe,Gt.width,Gt.height,ze,Gt.data):A.texSubImage2D(A.TEXTURE_2D,B,$e,qe,de,Se,ze,gt,Gt),A.pixelStorei(A.UNPACK_ROW_LENGTH,Et),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At),A.pixelStorei(A.UNPACK_SKIP_PIXELS,hn),A.pixelStorei(A.UNPACK_SKIP_ROWS,_t),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ke),B===0&&N.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(E,N,X=null,$=null,B=0){E.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,E=arguments[2],N=arguments[3],B=arguments[4]||0);let de,Se,Pe,Ie,$e,qe,ze,gt,Et;const At=E.isCompressedTexture?E.mipmaps[B]:E.image;X!==null?(de=X.max.x-X.min.x,Se=X.max.y-X.min.y,Pe=X.max.z-X.min.z,Ie=X.min.x,$e=X.min.y,qe=X.min.z):(de=At.width,Se=At.height,Pe=At.depth,Ie=0,$e=0,qe=0),$!==null?(ze=$.x,gt=$.y,Et=$.z):(ze=0,gt=0,Et=0);const hn=et.convert(N.format),_t=et.convert(N.type);let ke;if(N.isData3DTexture)we.setTexture3D(N,0),ke=A.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)we.setTexture2DArray(N,0),ke=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const Gt=A.getParameter(A.UNPACK_ROW_LENGTH),vt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),bn=A.getParameter(A.UNPACK_SKIP_PIXELS),ls=A.getParameter(A.UNPACK_SKIP_ROWS),un=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,At.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,At.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ie),A.pixelStorei(A.UNPACK_SKIP_ROWS,$e),A.pixelStorei(A.UNPACK_SKIP_IMAGES,qe),E.isDataTexture||E.isData3DTexture?A.texSubImage3D(ke,B,ze,gt,Et,de,Se,Pe,hn,_t,At.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(ke,B,ze,gt,Et,de,Se,Pe,hn,At.data):A.texSubImage3D(ke,B,ze,gt,Et,de,Se,Pe,hn,_t,At),A.pixelStorei(A.UNPACK_ROW_LENGTH,Gt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,bn),A.pixelStorei(A.UNPACK_SKIP_ROWS,ls),A.pixelStorei(A.UNPACK_SKIP_IMAGES,un),B===0&&N.generateMipmaps&&A.generateMipmap(ke),V.unbindTexture()},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&we.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?we.setTextureCube(E,0):E.isData3DTexture?we.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?we.setTexture2DArray(E,0):we.setTexture2D(E,0),V.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,V.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qo?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Zr?"display-p3":"srgb"}}class Qo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new Qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class el{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new el(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jd extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Fs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new C;class ji{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ji(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nh extends Kt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const nr=new C,As=new C,Ts=new C,Cs=new ee,ir=new ee,Kd=new Ge,Ta=new C,sr=new C,Ca=new C,wu=new ee,Kl=new ee,Eu=new ee;class jd extends ft{constructor(e=new nh){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new rt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tl(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new ji(n,3,0,!1)),Es.setAttribute("uv",new ji(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Kd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Ts.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ra(Ta.set(-.5,-.5,0),Ts,a,As,i,r),Ra(sr.set(.5,-.5,0),Ts,a,As,i,r),Ra(Ca.set(.5,.5,0),Ts,a,As,i,r),wu.set(0,0),Kl.set(1,0),Eu.set(1,1);let o=e.ray.intersectTriangle(Ta,sr,Ca,!1,nr);if(o===null&&(Ra(sr.set(-.5,.5,0),Ts,a,As,i,r),Kl.set(0,1),o=e.ray.intersectTriangle(Ta,Ca,sr,!1,nr),o===null))return;const l=e.ray.origin.distanceTo(nr);l<e.near||l>e.far||t.push({distance:l,point:nr.clone(),uv:gn.getInterpolation(nr,Ta,sr,Ca,wu,Kl,Eu,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ra(s,e,t,n,i,r){Cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ir.x=r*Cs.x-i*Cs.y,ir.y=i*Cs.x+r*Cs.y):ir.copy(Cs),s.copy(e),s.x+=ir.x,s.y+=ir.y,s.applyMatrix4(Kd)}const Pa=new C,Au=new C;class Qd extends ft{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Pa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Pa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Pa.setFromMatrixPosition(e.matrixWorld),Au.setFromMatrixPosition(this.matrixWorld);const n=Pa.distanceTo(Au)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Tu=new C,Cu=new xt,Ru=new xt,Jy=new C,Pu=new Ge,Ia=new C,jl=new Jt,Iu=new Ge,Ql=new Xs;class ep extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xc,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jl.copy(this.boundingSphere),jl.applyMatrix4(i),e.ray.intersectsSphere(jl)!==!1&&(Iu.copy(i).invert(),Ql.copy(e.ray).applyMatrix4(Iu),!(this.boundingBox!==null&&Ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Cu.fromBufferAttribute(i.attributes.skinIndex,e),Ru.fromBufferAttribute(i.attributes.skinWeight,e),Tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ru.getComponent(r);if(a!==0){const o=Cu.getComponent(r);Pu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jy.copy(Tu).applyMatrix4(Pu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ih extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bn extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Vt,h=Vt,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lu=new Ge,Ky=new Ge;class nl{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Ky;Lu.multiplyMatrices(o,t[r]),Lu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Bn(t,e,e,tn,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ih),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vs extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new Ge,Du=new Ge,La=[],Uu=new sn,jy=new Ge,rr=new It,ar=new Jt;class tp extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Uu.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Uu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),ar.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),Du.multiplyMatrices(n,Rs),rr.matrixWorld=Du,rr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){const l=La[a];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bn(new Float32Array(i*this.count),i,this.count,Go,on));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Qy(s,e){return s.z-e.z}function eM(s,e){return e.z-s.z}class tM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];r.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const pi=new Ge,ec=new Ge,nM=new Ge,iM=new be(1,1,1),Nu=new Ge,tc=new Kr,Da=new sn,Li=new Jt,or=new C,Fu=new C,sM=new C,nc=new tM,Zt=new It,Ua=[];function rM(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class np extends It{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new rt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Bn(t,e,e,tn,on);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Bn(t,e,e,Yr,si);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Bn(t,e,e,tn,on);n.colorSpace=dt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),f=new yt(h,l,c);t.setAttribute(r,f)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new yt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,pi),this.getBoundingBoxAt(r,Da).applyMatrix4(pi),e.union(Da)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,pi),this.getBoundingSphereAt(r,Li).applyMatrix4(pi),e.union(Li)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;nM.toArray(i,t*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(iM.toArray(r.image.data,t*4),r.needsUpdate=!0),t}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const f=this._geometryCount;return this._geometryCount++,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new sn,sphereInitialized:!1,sphere:new Jt}),this.setGeometryAt(f,e),f}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const d in n.attributes){const m=t.getAttribute(d),_=n.getAttribute(d);rM(m,_,l);const g=m.itemSize;for(let p=m.count,x=c;p<x;p++){const v=l+p;for(let y=0;y<g;y++)_.setComponent(v,y,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(i){const d=o.indexStart;for(let m=0;m<a.count;m++)r.setX(d+m,l+a.getX(m));for(let m=a.count,_=o.indexCount;m<_;m++)r.setX(d+m,l);r.needsUpdate=!0,r.addUpdateRange(d,o.indexCount)}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const f=this._drawRanges[e],u=t.getAttribute("position");return f.count=i?a.count:u.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=r.index,o=r.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let f=c;a&&(f=a.getX(f)),i.expandByPoint(or.fromBufferAttribute(o,f))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Da),Da.getCenter(i.center);const a=r.index,o=r.attributes.position,l=this._drawRanges[e];let c=0;for(let h=l.start,f=l.start+l.count;h<f;h++){let u=h;a&&(u=a.getX(u)),or.fromBufferAttribute(o,u),c=Math.max(c,i.center.distanceToSquared(or))}i.radius=Math.sqrt(c),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,a=this.geometry;Zt.material=this.material,Zt.geometry.index=a.index,Zt.geometry.attributes=a.attributes,Zt.geometry.boundingBox===null&&(Zt.geometry.boundingBox=new sn),Zt.geometry.boundingSphere===null&&(Zt.geometry.boundingSphere=new Jt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];Zt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Zt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Zt.geometry.boundingBox),this.getBoundingSphereAt(c,Zt.geometry.boundingSphere),Zt.raycast(e,Ua);for(let f=0,u=Ua.length;f<u;f++){const d=Ua[f];d.object=this,d.batchId=o,t.push(d)}Ua.length=0}Zt.material=null,Zt.geometry.index=null,Zt.geometry.attributes={},Zt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,f=this._drawRanges,u=this.perObjectFrustumCulled,d=this._indirectTexture,m=d.image.data;u&&(Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),tc.setFromProjectionMatrix(Nu,e.coordinateSystem));let _=0;if(this.sortObjects){ec.copy(this.matrixWorld).invert(),or.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ec),Fu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ec);for(let x=0,v=l.length;x<v;x++)if(l[x].visible&&l[x].active){const y=l[x].geometryIndex;this.getMatrixAt(x,pi),this.getBoundingSphereAt(y,Li).applyMatrix4(pi);let R=!1;if(u&&(R=!tc.intersectsSphere(Li)),!R){const w=sM.subVectors(Li.center,or).dot(Fu);nc.push(f[y],w,x)}}const g=nc.list,p=this.customSort;p===null?g.sort(r.transparent?eM:Qy):p.call(this,g,n);for(let x=0,v=g.length;x<v;x++){const y=g[x];c[_]=y.start*o,h[_]=y.count,m[_]=y.index,_++}nc.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){const x=l[g].geometryIndex;let v=!1;if(u&&(this.getMatrixAt(g,pi),this.getBoundingSphereAt(x,Li).applyMatrix4(pi),v=!tc.intersectsSphere(Li)),!v){const y=f[x];c[_]=y.start*o,h[_]=y.count,m[_]=g,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class rn extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new C,Fo=new C,Ou=new Ge,lr=new Xs,Na=new Jt,ic=new C,Bu=new C;class xi extends ft{constructor(e=new rt,t=new rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)No.fromBufferAttribute(t,i-1),Fo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=No.distanceTo(Fo);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Ou.copy(i).invert(),lr.copy(e.ray).applyMatrix4(Ou);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),v=Fa(this,e,lr,l,p,x);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=Fa(this,e,lr,l,_,g);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){const p=Fa(this,e,lr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Fa(this,e,lr,l,m-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fa(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(No.fromBufferAttribute(a,i),Fo.fromBufferAttribute(a,r),t.distanceSqToSegment(No,Fo,ic,Bu)>n)return;ic.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ic);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const zu=new C,ku=new C;class Hn extends xi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zu.fromBufferAttribute(t,i),ku.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zu.distanceTo(ku);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ip extends xi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sh extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new Ge,Ec=new Xs,Oa=new Jt,Ba=new C;class sp extends ft{constructor(e=new rt,t=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Vu.copy(i).invert(),Ec.copy(e.ray).applyMatrix4(Vu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,_=d;m<_;m++){const g=c.getX(m);Ba.fromBufferAttribute(f,g),Hu(Ba,g,l,i,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,_=d;m<_;m++)Ba.fromBufferAttribute(f,m),Hu(Ba,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hu(s,e,t,n,i,r,a){const o=Ec.distanceSqToPoint(s);if(o<t){const l=new C;Ec.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class aM extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Nt,this.magFilter=r!==void 0?r:Nt,this.generateMipmaps=!1;const h=this;function f(){h.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class oM extends Rt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Vt,this.minFilter=Vt,this.generateMipmaps=!1,this.needsUpdate=!0}}class il extends Rt{constructor(e,t,n,i,r,a,o,l,c,h,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class lM extends il{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Sn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends il{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ii),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class hM extends Rt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ee:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],a=[],o=new C,l=new Ge;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ct(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sl extends In{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ee){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rp extends sl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function rh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const za=new C,sc=new rh,rc=new rh,ac=new rh;class ap extends In{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(za.subVectors(i[0],i[1]).add(i[0]),c=za);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(za.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),sc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,g),rc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,g),ac.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),rc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ac.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(sc.calc(l),rc.calc(l),ac.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gu(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function uM(s,e){const t=1-s;return t*t*e}function fM(s,e){return 2*(1-s)*s*e}function dM(s,e){return s*s*e}function xr(s,e,t,n){return uM(s,e)+fM(s,t)+dM(s,n)}function pM(s,e){const t=1-s;return t*t*t*e}function mM(s,e){const t=1-s;return 3*t*t*s*e}function gM(s,e){return 3*(1-s)*s*s*e}function _M(s,e){return s*s*s*e}function yr(s,e,t,n,i){return pM(s,e)+mM(s,t)+gM(s,n)+_M(s,i)}class ah extends In{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,i.x,r.x,a.x,o.x),yr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class op extends In{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,i.x,r.x,a.x,o.x),yr(e,i.y,r.y,a.y,o.y),yr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oh extends In{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lp extends In{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lh extends In{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,i.x,r.x,a.x),xr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends In{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xr(e,i.x,r.x,a.x),xr(e,i.y,r.y,a.y),xr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Gu(o,l.x,c.x,h.x,f.x),Gu(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ee().fromArray(i))}return this}}var Oo=Object.freeze({__proto__:null,ArcCurve:rp,CatmullRomCurve3:ap,CubicBezierCurve:ah,CubicBezierCurve3:op,EllipseCurve:sl,LineCurve:oh,LineCurve3:lp,QuadraticBezierCurve:lh,QuadraticBezierCurve3:ch,SplineCurve:hh});class cp extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Oo[i.type]().fromJSON(i))}return this}}class Fr extends cp{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new oh(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new lh(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new ah(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new hh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new sl(e,t,n,i,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jr extends rt{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ct(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,f=new C,u=new ee,d=new C,m=new C,_=new C;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let x=0;x<=t;x++){const v=n+x*h*i,y=Math.sin(v),R=Math.cos(v);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*y,f.y=e[w].y,f.z=e[w].x*R,a.push(f.x,f.y,f.z),u.x=x/t,u.y=w/(e.length-1),o.push(u.x,u.y);const T=l[3*w+0]*y,P=l[3*w+1],b=l[3*w+0]*R;c.push(T,P,b)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,R=y,w=y+e.length,T=y+e.length+1,P=y+1;r.push(R,w,P),r.push(T,P,w)}this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("uv",new Le(o,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.points,e.segments,e.phiStart,e.phiLength)}}class rl extends jr{constructor(e=1,t=1,n=4,i=8){const r=new Fr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new rl(e.radius,e.length,e.capSegments,e.radialSegments)}}class al extends rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new C,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ys extends rt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function x(){const y=new C,R=new C;let w=0;const T=(t-e)/n;for(let P=0;P<=r;P++){const b=[],M=P/r,I=M*(t-e)+e;for(let O=0;O<=i;O++){const k=O/i,F=k*l+o,K=Math.sin(F),D=Math.cos(F);R.x=I*K,R.y=-M*n+g,R.z=I*D,f.push(R.x,R.y,R.z),y.set(K,T,D).normalize(),u.push(y.x,y.y,y.z),d.push(k,1-M),b.push(m++)}_.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const M=_[b][P],I=_[b+1][P],O=_[b+1][P+1],k=_[b][P+1];h.push(M,I,k),h.push(I,O,k),w+=6}c.addGroup(p,w,0),p+=w}function v(y){const R=m,w=new ee,T=new C;let P=0;const b=y===!0?e:t,M=y===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,g*M,0),u.push(0,M,0),d.push(.5,.5),m++;const I=m;for(let O=0;O<=i;O++){const F=O/i*l+o,K=Math.cos(F),D=Math.sin(F);T.x=b*D,T.y=g*M,T.z=b*K,f.push(T.x,T.y,T.z),u.push(0,M,0),w.x=K*.5+.5,w.y=D*.5*M+.5,d.push(w.x,w.y),m++}for(let O=0;O<i;O++){const k=R+O,F=I+O;y===!0?h.push(F,F+1,k):h.push(F+1,F,k),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends Ys{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ol(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bi extends rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const v=new C,y=new C,R=new C;for(let w=0;w<t.length;w+=3)d(t[w+0],v),d(t[w+1],y),d(t[w+2],R),l(v,y,R,x)}function l(x,v,y,R){const w=R+1,T=[];for(let P=0;P<=w;P++){T[P]=[];const b=x.clone().lerp(y,P/w),M=v.clone().lerp(y,P/w),I=w-P;for(let O=0;O<=I;O++)O===0&&P===w?T[P][O]=b:T[P][O]=b.clone().lerp(M,O/I)}for(let P=0;P<w;P++)for(let b=0;b<2*(w-P)-1;b++){const M=Math.floor(b/2);b%2===0?(u(T[P][M+1]),u(T[P+1][M]),u(T[P][M])):(u(T[P][M+1]),u(T[P+1][M+1]),u(T[P+1][M]))}}function c(x){const v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const x=new C;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const y=g(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;a.push(y,1-R)}m(),f()}function f(){for(let x=0;x<a.length;x+=6){const v=a[x+0],y=a[x+2],R=a[x+4],w=Math.max(v,y,R),T=Math.min(v,y,R);w>.9&&T<.1&&(v<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function m(){const x=new C,v=new C,y=new C,R=new C,w=new ee,T=new ee,P=new ee;for(let b=0,M=0;b<r.length;b+=9,M+=6){x.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),w.set(a[M+0],a[M+1]),T.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),R.copy(x).add(v).add(y).divideScalar(3);const I=g(R);_(w,M+0,x,I),_(T,M+2,v,I),_(P,M+4,y,I)}}function _(x,v,y,R){R<0&&x.x===1&&(a[v]=x.x-1),y.x===0&&y.z===0&&(a[v]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.vertices,e.indices,e.radius,e.details)}}class ll extends bi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ll(e.radius,e.detail)}}const ka=new C,Va=new C,oc=new C,Ha=new gn;class hp extends rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(qi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:p}=Ha;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ha.getNormal(oc),f[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,f[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,f[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const v=(x+1)%3,y=f[x],R=f[v],w=Ha[h[x]],T=Ha[h[v]],P=`${y}_${R}`,b=`${R}_${y}`;b in u&&u[b]?(oc.dot(u[b].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(T.x,T.y,T.z)),u[b]=null):P in u||(u[P]={index0:c[x],index1:c[v],normal:oc.clone()})}}for(const m in u)if(u[m]){const{index0:_,index1:g}=u[m];ka.fromBufferAttribute(o,_),Va.fromBufferAttribute(o,g),d.push(ka.x,ka.y,ka.z),d.push(Va.x,Va.y,Va.z)}this.setAttribute("position",new Le(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yi extends Fr{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Fr().fromJSON(i))}return this}}const vM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=up(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,u,d;if(n&&(r=bM(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)f=s[m],u=s[m+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Or(r,a,t,o,l,d,0),a}};function up(s,e,t,n,i){let r,a;if(i===UM(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Wu(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Wu(r,s[r],s[r+1],a);return a&&cl(a,a.next)&&(zr(a),a=a.next),a}function Qi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(cl(t,t.next)||bt(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Or(s,e,t,n,i,r,a){if(!s)return;!a&&r&&CM(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?yM(s,n,i,r):xM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),zr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=MM(Qi(s),e,t),Or(s,e,t,n,i,r,2)):a===2&&SM(s,e,t,n,i,r):Or(Qi(s),e,t,n,i,r,1);break}}}function xM(s){const e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Us(i,o,r,l,a,c,m.x,m.y)&&bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yM(s,e,t,n){const i=s.prev,r=s,a=s.next;if(bt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,_=o>l?o>c?o:c:l>c?l:c,g=h>f?h>u?h:u:f>u?f:u,p=Ac(d,m,e,t,n),x=Ac(_,g,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Us(o,h,l,f,c,u,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Us(o,h,l,f,c,u,y.x,y.y)&&bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Us(o,h,l,f,c,u,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Us(o,h,l,f,c,u,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function MM(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!cl(i,r)&&fp(i,n,n.next,r)&&Br(i,r)&&Br(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),zr(n),zr(n.next),n=s=r),n=n.next}while(n!==s);return Qi(n)}function SM(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&IM(a,o)){let l=dp(a,o);a=Qi(a,a.next),l=Qi(l,l.next),Or(a,e,t,n,i,r,0),Or(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function bM(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=up(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(PM(c));for(i.sort(wM),r=0;r<i.length;r++)t=EM(i[r],t);return t}function wM(s,e){return s.x-e.x}function EM(s,e){const t=AM(s,e);if(!t)return e;const n=dp(t,s);return Qi(n,n.next),Qi(t,t.next)}function AM(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Us(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Br(t,s)&&(f<h||f===h&&(t.x>i.x||t.x===i.x&&TM(i,t)))&&(i=t,h=f)),t=t.next;while(t!==o);return i}function TM(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}function CM(s,e,t,n){let i=s;do i.z===0&&(i.z=Ac(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,RM(i)}function RM(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Ac(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function PM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Us(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function IM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!LM(s,e)&&(Br(s,e)&&Br(e,s)&&DM(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||cl(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function cl(s,e){return s.x===e.x&&s.y===e.y}function fp(s,e,t,n){const i=Wa(bt(s,e,t)),r=Wa(bt(s,e,n)),a=Wa(bt(t,n,s)),o=Wa(bt(t,n,e));return!!(i!==r&&a!==o||i===0&&Ga(s,t,e)||r===0&&Ga(s,n,e)||a===0&&Ga(t,s,n)||o===0&&Ga(t,e,n))}function Ga(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Wa(s){return s>0?1:s<0?-1:0}function LM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&fp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Br(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}function DM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function dp(s,e){const t=new Tc(s.i,s.x,s.y),n=new Tc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wu(s,e,t,n){const i=new Tc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Tc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function UM(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class zn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return zn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Xu(e),$u(n,e);let a=e.length;t.forEach(Xu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,$u(n,t[l]);const o=vM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Xu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function $u(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class hl extends rt{constructor(e=new Yi([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:NM;let v,y=!1,R,w,T,P;p&&(v=p.getSpacedPoints(h),y=!0,u=!1,R=p.computeFrenetFrames(h,!1),w=new C,T=new C,P=new C),u||(g=0,d=0,m=0,_=0);const b=o.extractPoints(c);let M=b.shape;const I=b.holes;if(!zn.isClockWise(M)){M=M.reverse();for(let A=0,ae=I.length;A<ae;A++){const re=I[A];zn.isClockWise(re)&&(I[A]=re.reverse())}}const k=zn.triangulateShape(M,I),F=M;for(let A=0,ae=I.length;A<ae;A++){const re=I[A];M=M.concat(re)}function K(A,ae,re){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(ae,re)}const D=M.length,G=k.length;function z(A,ae,re){let W,V,He;const ve=A.x-ae.x,we=A.y-ae.y,L=re.x-A.x,S=re.y-A.y,H=ve*ve+we*we,Q=ve*S-we*L;if(Math.abs(Q)>Number.EPSILON){const j=Math.sqrt(H),ie=Math.sqrt(L*L+S*S),Be=ae.x-we/j,ge=ae.y+ve/j,Ae=re.x-S/ie,tt=re.y+L/ie,ce=((Ae-Be)*S-(tt-ge)*L)/(ve*S-we*L);W=Be+ve*ce-A.x,V=ge+we*ce-A.y;const Ee=W*W+V*V;if(Ee<=2)return new ee(W,V);He=Math.sqrt(Ee/2)}else{let j=!1;ve>Number.EPSILON?L>Number.EPSILON&&(j=!0):ve<-Number.EPSILON?L<-Number.EPSILON&&(j=!0):Math.sign(we)===Math.sign(S)&&(j=!0),j?(W=-we,V=ve,He=Math.sqrt(H)):(W=ve,V=we,He=Math.sqrt(H/2))}return new ee(W/He,V/He)}const he=[];for(let A=0,ae=F.length,re=ae-1,W=A+1;A<ae;A++,re++,W++)re===ae&&(re=0),W===ae&&(W=0),he[A]=z(F[A],F[re],F[W]);const ue=[];let pe,Ve=he.concat();for(let A=0,ae=I.length;A<ae;A++){const re=I[A];pe=[];for(let W=0,V=re.length,He=V-1,ve=W+1;W<V;W++,He++,ve++)He===V&&(He=0),ve===V&&(ve=0),pe[W]=z(re[W],re[He],re[ve]);ue.push(pe),Ve=Ve.concat(pe)}for(let A=0;A<g;A++){const ae=A/g,re=d*Math.cos(ae*Math.PI/2),W=m*Math.sin(ae*Math.PI/2)+_;for(let V=0,He=F.length;V<He;V++){const ve=K(F[V],he[V],W);le(ve.x,ve.y,-re)}for(let V=0,He=I.length;V<He;V++){const ve=I[V];pe=ue[V];for(let we=0,L=ve.length;we<L;we++){const S=K(ve[we],pe[we],W);le(S.x,S.y,-re)}}}const Qe=m+_;for(let A=0;A<D;A++){const ae=u?K(M[A],Ve[A],Qe):M[A];y?(T.copy(R.normals[0]).multiplyScalar(ae.x),w.copy(R.binormals[0]).multiplyScalar(ae.y),P.copy(v[0]).add(T).add(w),le(P.x,P.y,P.z)):le(ae.x,ae.y,0)}for(let A=1;A<=h;A++)for(let ae=0;ae<D;ae++){const re=u?K(M[ae],Ve[ae],Qe):M[ae];y?(T.copy(R.normals[A]).multiplyScalar(re.x),w.copy(R.binormals[A]).multiplyScalar(re.y),P.copy(v[A]).add(T).add(w),le(P.x,P.y,P.z)):le(re.x,re.y,f/h*A)}for(let A=g-1;A>=0;A--){const ae=A/g,re=d*Math.cos(ae*Math.PI/2),W=m*Math.sin(ae*Math.PI/2)+_;for(let V=0,He=F.length;V<He;V++){const ve=K(F[V],he[V],W);le(ve.x,ve.y,f+re)}for(let V=0,He=I.length;V<He;V++){const ve=I[V];pe=ue[V];for(let we=0,L=ve.length;we<L;we++){const S=K(ve[we],pe[we],W);y?le(S.x,S.y+v[h-1].y,v[h-1].x+re):le(S.x,S.y,f+re)}}}Z(),oe();function Z(){const A=i.length/3;if(u){let ae=0,re=D*ae;for(let W=0;W<G;W++){const V=k[W];Y(V[2]+re,V[1]+re,V[0]+re)}ae=h+g*2,re=D*ae;for(let W=0;W<G;W++){const V=k[W];Y(V[0]+re,V[1]+re,V[2]+re)}}else{for(let ae=0;ae<G;ae++){const re=k[ae];Y(re[2],re[1],re[0])}for(let ae=0;ae<G;ae++){const re=k[ae];Y(re[0]+D*h,re[1]+D*h,re[2]+D*h)}}n.addGroup(A,i.length/3-A,0)}function oe(){const A=i.length/3;let ae=0;_e(F,ae),ae+=F.length;for(let re=0,W=I.length;re<W;re++){const V=I[re];_e(V,ae),ae+=V.length}n.addGroup(A,i.length/3-A,1)}function _e(A,ae){let re=A.length;for(;--re>=0;){const W=re;let V=re-1;V<0&&(V=A.length-1);for(let He=0,ve=h+g*2;He<ve;He++){const we=D*He,L=D*(He+1),S=ae+W+we,H=ae+V+we,Q=ae+V+L,j=ae+W+L;J(S,H,Q,j)}}}function le(A,ae,re){l.push(A),l.push(ae),l.push(re)}function Y(A,ae,re){Fe(A),Fe(ae),Fe(re);const W=i.length/3,V=x.generateTopUV(n,i,W-3,W-2,W-1);ot(V[0]),ot(V[1]),ot(V[2])}function J(A,ae,re,W){Fe(A),Fe(ae),Fe(W),Fe(ae),Fe(re),Fe(W);const V=i.length/3,He=x.generateSideWallUV(n,i,V-6,V-3,V-2,V-1);ot(He[0]),ot(He[1]),ot(He[3]),ot(He[1]),ot(He[2]),ot(He[3])}function Fe(A){i.push(l[A*3+0]),i.push(l[A*3+1]),i.push(l[A*3+2])}function ot(A){r.push(A.x),r.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return FM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Oo[i.type]().fromJSON(i)),new hl(n,e.options)}}const NM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ee(r,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-f),new ee(u,1-m),new ee(_,1-p)]:[new ee(o,1-l),new ee(h,1-f),new ee(d,1-m),new ee(g,1-p)]}};function FM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ul extends bi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ul(e.radius,e.detail)}}class Qr extends bi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qr(e.radius,e.detail)}}class fl extends rt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,d=new C,m=new ee;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,v=x,y=x+n+1,R=x+n+2,w=x+1;o.push(v,y,w),o.push(y,R,w)}}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dl extends rt{constructor(e=new Yi([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(i,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(a,2));function c(h){const f=i.length/3,u=h.extractPoints(t);let d=u.shape;const m=u.holes;zn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];zn.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=zn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],v=x[0]+f,y=x[1]+f,R=x[2]+f;n.push(v,y,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return OM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new dl(n,e.curveSegments)}}function OM(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class ea extends rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new C,u=new C,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const w=R/t;f.x=-e*Math.cos(i+w*r)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(i+w*r)*Math.sin(a+v*o),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(w+y,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=h[p][x+1],y=h[p][x],R=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&d.push(v,y,w),(p!==n-1||l<Math.PI)&&d.push(y,R,w)}this.setIndex(d),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pl extends bi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pl(e.radius,e.detail)}}class ml extends rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new C,f=new C,u=new C;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,x=(i+1)*d+m;a.push(_,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gl extends rt{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],f=new C,u=new C,d=new C,m=new C,_=new C,g=new C,p=new C;for(let v=0;v<=n;++v){const y=v/n*r*Math.PI*2;x(y,r,a,e,d),x(y+.01,r,a,e,m),g.subVectors(m,d),p.addVectors(m,d),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let R=0;R<=i;++R){const w=R/i*Math.PI*2,T=-t*Math.cos(w),P=t*Math.sin(w);f.x=d.x+(T*p.x+P*_.x),f.y=d.y+(T*p.y+P*_.y),f.z=d.z+(T*p.z+P*_.z),l.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),h.push(v/n),h.push(R/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){const R=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),T=(i+1)*v+y,P=(i+1)*(v-1)+y;o.push(R,w,P),o.push(w,T,P)}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2));function x(v,y,R,w,T){const P=Math.cos(v),b=Math.sin(v),M=R/y*v,I=Math.cos(M);T.x=w*(2+I)*.5*P,T.y=w*(2+I)*b*.5,T.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class _l extends rt{constructor(e=new ch(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new ee;let h=new C;const f=[],u=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function _(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),x(),p()}function g(v){h=e.getPointAt(v/t,h);const y=a.normals[v],R=a.binormals[v];for(let w=0;w<=i;w++){const T=w/i*Math.PI*2,P=Math.sin(T),b=-Math.cos(T);l.x=b*y.x+P*R.x,l.y=b*y.y+P*R.y,l.z=b*y.z+P*R.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const R=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),T=(i+1)*v+y,P=(i+1)*(v-1)+y;m.push(R,w,P),m.push(w,T,P)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _l(new Oo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class pp extends rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new C,r=new C;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let m=u,_=u+d;m<_;m+=3)for(let g=0;g<3;g++){const p=o.getX(m+g),x=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,x),qu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),qu(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function qu(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Yu=Object.freeze({__proto__:null,BoxGeometry:rs,CapsuleGeometry:rl,CircleGeometry:al,ConeGeometry:ol,CylinderGeometry:Ys,DodecahedronGeometry:ll,EdgesGeometry:hp,ExtrudeGeometry:hl,IcosahedronGeometry:ul,LatheGeometry:jr,OctahedronGeometry:Qr,PlaneGeometry:$s,PolyhedronGeometry:bi,RingGeometry:fl,ShapeGeometry:dl,SphereGeometry:ea,TetrahedronGeometry:pl,TorusGeometry:ml,TorusKnotGeometry:gl,TubeGeometry:_l,WireframeGeometry:pp});class mp extends Kt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class gp extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uh extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _p extends uh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vp extends Kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends Kt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class yp extends Kt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Mp extends Kt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sp extends Kt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mi,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bp extends rn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Wi(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function wp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ep(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function fh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function BM(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),f=[],u=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*i;if(!(m<t||m>=n)){f.push(c.times[d]);for(let _=0;_<h;++_)u.push(c.values[d*h+_])}}f.length!==0&&(c.times=Wi(f,c.times.constructor),c.values=Wi(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function zM(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const f=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let u=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);const m=o.times.length-1;let _;if(r<=o.times[0]){const p=h,x=f-h;_=o.values.slice(p,x)}else if(r>=o.times[m]){const p=m*f+h,x=p+f-h;_=o.values.slice(p,x)}else{const p=o.createInterpolant(),x=h,v=f-h;p.evaluate(r),_=p.resultBuffer.slice(x,v)}l==="quaternion"&&new ln().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let p=0;p<g;++p){const x=p*d+u;if(l==="quaternion")ln.multiplyQuaternionsFlat(c.values,x,_,0,c.values,x);else{const v=d-u*2;for(let y=0;y<v;++y)c.values[x+y]-=_[y]}}}return s.blendMode=$c,s}const kM={convertArray:Wi,isTypedArray:wp,getKeyframeOrder:Ep,sortedArray:Cc,flattenJSON:fh,subclip:BM,makeClipAdditive:zM};class ta{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ap extends ta{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hi:r=e,o=2*t-n;break;case Rr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hi:a=e,l=2*n-t;break;case Rr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-u*g+2*u*_-u*m,x=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*m+1,v=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+x*a[c+R]+v*a[l+R]+y*a[f+R];return r}}class dh extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}}class Tp extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wi(t,this.TimeBufferType),this.values=Wi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wi(e.times,Array),values:Wi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ap(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case Uo:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&wp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===eo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){const _=t[f+m];if(_!==t[u+m]||_!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Uo;class as extends Ln{constructor(e,t,n){super(e,t,n)}}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Cr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class ph extends Ln{}ph.prototype.ValueTypeName="color";class kr extends Ln{}kr.prototype.ValueTypeName="number";class Cp extends ta{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)ln.slerpFlat(r,0,a,c-o,a,c,l);return r}}class na extends Ln{InterpolantFactoryMethodLinear(e){return new Cp(this.times,this.values,this.getValueSize(),e)}}na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Ln{constructor(e,t,n){super(e,t,n)}}os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Cr;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends Ln{}Vr.prototype.ValueTypeName="vector";class Hr{constructor(e="",t=-1,n=[],i=$o){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(HM(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Ep(l);l=Cc(l,1,h),c=Cc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new kr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const f=h[1];let u=i[f];u||(i[f]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,m,_){if(d.length!==0){const g=[],p=[];fh(d,g,p,m),g.length!==0&&_.push(new f(u,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)d[u[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let x=0;x!==u[m].morphTargets.length;++x){const v=u[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new kr(".morphTargetInfluence["+_+"]",g,p))}l=d.length*a}else{const d=".bones["+t[f].name+"]";n(Vr,d+".position",u,"pos",i),n(na,d+".quaternion",u,"rot",i),n(Vr,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function VM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return Vr;case"color":return ph;case"quaternion":return na;case"bool":case"boolean":return as;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function HM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=VM(s.type);if(s.times===void 0){const t=[],n=[];fh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mh{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const Rp=new mh;class cn{constructor(e){this.manager=e!==void 0?e:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class GM extends Error{constructor(e,t){super(e),this.response=t}}class ri extends cn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Jn[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){f.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,T=h.length;w<T;w++){const P=h[w];P.onProgress&&P.onProgress(R)}p.enqueue(y),x()}},v=>{p.error(v)})}}});return new Response(g)}else throw new GM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Qn.add(e,c);const h=Jn[e];delete Jn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Jn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class WM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ri(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Hr.parse(e[n]);t.push(i)}return t}}class XM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new il,l=new ri(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(f){l.load(e[f],function(u){const d=r.parse(u,!0);a[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Nt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let f=0,u=e.length;f<u;++f)h(f);else l.load(e,function(f){const u=r.parse(f,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let m=0;m<d;m++){a[m]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)a[m].mipmaps.push(u.mipmaps[m*u.mipmapCount+_]),a[m].format=u.format,a[m].width=u.width,a[m].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=Nt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class Gr extends cn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Nr("img");function l(){h(),Qn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class $M extends cn{constructor(e){super(e)}load(e,t,n,i){const r=new Jr;r.colorSpace=Mn;const a=new Gr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class qM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Bn,o=new ri(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Sn,a.wrapT=c.wrapT!==void 0?c.wrapT:Sn,a.magFilter=c.magFilter!==void 0?c.magFilter:Nt,a.minFilter=c.minFilter!==void 0?c.minFilter:Nt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Fn),c.mipmapCount===1&&(a.minFilter=Nt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class YM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new Gr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class wi extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pp extends wi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const lc=new Ge,Zu=new C,Ju=new C;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZM extends gh{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ip extends wi{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ZM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ku=new Ge,cr=new C,cc=new C;class JM extends gh{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),cc.copy(n.position),cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cc),n.updateMatrixWorld(),i.makeTranslation(-cr.x,-cr.y,-cr.z),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku)}}class Lp extends wi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new JM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KM extends gh{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dp extends wi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new KM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Up extends wi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Np extends wi{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Fp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Op extends wi{constructor(e=new Fp,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class vl extends cn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=vl.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new be().setHex(a.value);break;case"v2":i.uniforms[r].value=new ee().fromArray(a.value);break;case"v3":i.uniforms[r].value=new C().fromArray(a.value);break;case"v4":i.uniforms[r].value=new xt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new nt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Ge().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new ee().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:mp,SpriteMaterial:nh,RawShaderMaterial:gp,ShaderMaterial:Pn,PointsMaterial:sh,MeshPhysicalMaterial:_p,MeshStandardMaterial:uh,MeshPhongMaterial:vp,MeshToonMaterial:xp,MeshNormalMaterial:yp,MeshLambertMaterial:Mp,MeshDepthMaterial:eh,MeshDistanceMaterial:th,MeshBasicMaterial:Si,MeshMatcapMaterial:Sp,LineDashedMaterial:bp,LineBasicMaterial:rn,Material:Kt};return new t[e]}}class Rc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bp extends rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class zp extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,m){if(t[m]!==void 0)return t[m];const g=d.interleavedBuffers[m],p=r(d,g.buffer),x=Is(g.type,p),v=new tl(x,g.stride);return v.uuid=g.uuid,t[m]=v,v}function r(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const a=e.isInstancedBufferGeometry?new Bp:new rt,o=e.data.index;if(o!==void 0){const d=Is(o.type,o.array);a.setIndex(new yt(d,1))}const l=e.data.attributes;for(const d in l){const m=l[d];let _;if(m.isInterleavedBufferAttribute){const g=i(e.data,m.data);_=new ji(g,m.itemSize,m.offset,m.normalized)}else{const g=Is(m.type,m.array),p=m.isInstancedBufferAttribute?Vs:yt;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const m=c[d],_=[];for(let g=0,p=m.length;g<p;g++){const x=m[g];let v;if(x.isInterleavedBufferAttribute){const y=i(e.data,x.data);v=new ji(y,x.itemSize,x.offset,x.normalized)}else{const y=Is(x.type,x.array);v=new yt(y,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),_.push(v)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,m=f.length;d!==m;++d){const _=f[d];a.addGroup(_.start,_.count,_.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const d=new C;u.center!==void 0&&d.fromArray(u.center),a.boundingSphere=new Jt(d,u.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class jM extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Rc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new ri(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){i!==void 0&&i(f),console.error("THREE:ObjectLoader: Can't parse "+e+".",f.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Rc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new ri(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let f=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Yi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new nl().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new zp;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Yu?o=Yu[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new vl;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Hr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:Is(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new mh(t);r=new Gr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const f=e[c],u=f.url;if(Array.isArray(u)){const d=[];for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new Bn(p.data,p.width,p.height)))}i[f.uuid]=new Gi(d)}else{const d=o(f.url);i[f.uuid]=new Gi(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:Is(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Gr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f],m=await r(d);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new Bn(m.data,m.width,m.height)))}n[l.uuid]=new Gi(h)}else{const h=await r(l.url);n[l.uuid]=new Gi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Jr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Bn:h=new Rt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,QM)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],ju),h.wrapT=n(o.wrap[1],ju)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Qu)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Qu)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let m=0,_=u.length;m<_;m++){const g=u[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),i[u]}let h,f;switch(e.type){case"Scene":a=new Jd,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new be(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new el(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Qo(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new kt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Ko(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Up(e.color,e.intensity);break;case"DirectionalLight":a=new Dp(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Lp(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Np(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Ip(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Pp(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Op().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),f=l(e.material),a=new ep(h,f),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),f=l(e.material),a=new It(h,f);break;case"InstancedMesh":h=o(e.geometry),f=l(e.material);const u=e.count,d=e.instanceMatrix,m=e.instanceColor;a=new tp(h,f,u),a.instanceMatrix=new Vs(new Float32Array(d.array),16),m!==void 0&&(a.instanceColor=new Vs(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),f=l(e.material),a=new np(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,f),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const g=new sn;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const p=new Jt;return p.radius=_.sphereRadius,p.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:p}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Qd;break;case"Line":a=new xi(o(e.geometry),l(e.material));break;case"LineLoop":a=new ip(o(e.geometry),l(e.material));break;case"LineSegments":a=new Hn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new sp(o(e.geometry),l(e.material));break;case"Sprite":a=new jd(l(e.material));break;case"Group":a=new Ds;break;case"Bone":a=new ih;break;default:a=new ft}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let d=0;d<u.length;d++)a.add(this.parseObject(u[d],t,n,i,r))}if(e.animations!==void 0){const u=e.animations;for(let d=0;d<u.length;d++){const m=u[d];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let d=0;d<u.length;d++){const m=u[d],_=a.getObjectByProperty("uuid",m.object);_!==void 0&&a.addLevel(_,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new ft}})}}const QM={UVMapping:zo,CubeReflectionMapping:ii,CubeRefractionMapping:vi,EquirectangularReflectionMapping:wr,EquirectangularRefractionMapping:Er,CubeUVReflectionMapping:Gs},ju={RepeatWrapping:Ar,ClampToEdgeWrapping:Sn,MirroredRepeatWrapping:Tr},Qu={NearestFilter:Vt,NearestMipmapNearestFilter:Fc,NearestMipmapLinearFilter:Ps,LinearFilter:Nt,LinearMipmapNearestFilter:fr,LinearMipmapLinearFilter:Fn};class eS extends cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Qn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(e,l),r.manager.itemStart(e)}}let Xa;class _h{static getContext(){return Xa===void 0&&(Xa=new(window.AudioContext||window.webkitAudioContext)),Xa}static setContext(e){Xa=e}}class tS extends cn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ri(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);_h.getContext().decodeAudioData(c,function(f){t(f)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const ef=new Ge,tf=new Ge,Di=new Ge;class nS{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new kt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new kt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Di.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(qi*t.fov*.5)/t.zoom;let o,l;tf.elements[12]=-i,ef.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,Di.elements[0]=2*t.near/(l-o),Di.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Di),o=-a*t.aspect-r,l=a*t.aspect-r,Di.elements[0]=2*t.near/(l-o),Di.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Di)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(tf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ef)}}class kp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nf(){return(typeof performance>"u"?Date:performance).now()}const Ui=new C,sf=new ln,iS=new C,Ni=new C;class sS extends ft{constructor(){super(),this.type="AudioListener",this.context=_h.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new kp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ui,sf,iS),Ni.set(0,0,-1).applyQuaternion(sf),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ui.x,i),t.positionY.linearRampToValueAtTime(Ui.y,i),t.positionZ.linearRampToValueAtTime(Ui.z,i),t.forwardX.linearRampToValueAtTime(Ni.x,i),t.forwardY.linearRampToValueAtTime(Ni.y,i),t.forwardZ.linearRampToValueAtTime(Ni.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Ui.x,Ui.y,Ui.z),t.setOrientation(Ni.x,Ni.y,Ni.z,n.x,n.y,n.z)}}class Vp extends ft{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Fi=new C,rf=new ln,rS=new C,Oi=new C;class aS extends Vp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Fi,rf,rS),Oi.set(0,0,1).applyQuaternion(rf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Fi.x,n),t.positionY.linearRampToValueAtTime(Fi.y,n),t.positionZ.linearRampToValueAtTime(Fi.z,n),t.orientationX.linearRampToValueAtTime(Oi.x,n),t.orientationY.linearRampToValueAtTime(Oi.y,n),t.orientationZ.linearRampToValueAtTime(Oi.z,n)}else t.setPosition(Fi.x,Fi.y,Fi.z),t.setOrientation(Oi.x,Oi.y,Oi.z)}}class oS{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Hp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){ln.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;ln.multiplyQuaternionsFlat(e,a,e,t,e,n),ln.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const vh="\\[\\]\\.:\\/",lS=new RegExp("["+vh+"]","g"),xh="[^"+vh+"]",cS="[^"+vh.replace("\\.","")+"]",hS=/((?:WC+[\/:])*)/.source.replace("WC",xh),uS=/(WCOD+)?/.source.replace("WCOD",cS),fS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),dS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),pS=new RegExp("^"+hS+uS+fS+dS+"$"),mS=["material","materials","bones","map"];class gS{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lS,"")}static parseTrackName(e){const t=pS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=gS;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _S{constructor(){this.isAnimationObjectGroup=!0,this.uuid=_n(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){const u=arguments[h],d=u.uuid;let m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(u);for(let _=0,g=a;_!==g;++_)r[_].push(new ut(u,n[_],i[_]))}else if(m<c){o=e[m];const _=--c,g=e[_];t[g.uuid]=m,e[m]=g,t[d]=_,e[_]=u;for(let p=0,x=a;p!==x;++p){const v=r[p],y=v[_];let R=v[m];v[m]=y,R===void 0&&(R=new ut(u,n[p],i[p])),v[_]=R}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const f=r++,u=e[f];t[u.uuid]=h,e[h]=u,t[c]=f,e[f]=l;for(let d=0,m=i;d!==m;++d){const _=n[d],g=_[f],p=_[h];_[h]=g,_[f]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,f=t[h];if(f!==void 0)if(delete t[h],f<r){const u=--r,d=e[u],m=--a,_=e[m];t[d.uuid]=f,e[f]=d,t[_.uuid]=u,e[u]=_,e.pop();for(let g=0,p=i;g!==p;++g){const x=n[g],v=x[u],y=x[m];x[f]=v,x[u]=y,x.pop()}}else{const u=--a,d=e[u];u>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let m=0,_=i;m!==_;++m){const g=n[m];g[f]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,f=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(f);for(let u=h,d=l.length;u!==d;++u){const m=l[u];f[u]=new ut(m,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Gp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Sd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case $c:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case $o:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===bd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Md){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hi,i.endingEnd=Hi):(e?i.endingStart=this.zeroSlopeAtStart?Hi:Vi:i.endingStart=Rr,t?i.endingEnd=this.zeroSlopeAtEnd?Hi:Vi:i.endingEnd=Rr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const vS=new Float32Array(1);class xS extends Vn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){const u=i[f],d=u.name;let m=h[d];if(m!==void 0)++m.referenceCount,a[f]=m;else{if(m=a[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=t&&t._propertyBindings[f].binding.parsedPath;m=new Hp(ut.create(n,d,_),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[f]=m}o[f].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete f[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new dh(new Float32Array(2),new Float32Array(2),1,vS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Hr.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=$o),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Gp(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Hr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class yh{constructor(e){this.value=e}clone(){return new yh(this.value.clone===void 0?this.value:this.value.clone())}}let yS=0;class MS extends Vn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:yS++}),this.name="",this.usage=Dr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class SS extends tl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class bS{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const af=new Ge;class wS{constructor(e,t,n=0,i=1/0){this.ray=new Xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(af),this}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(of),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Pc(e[i],this,n,t);return n.sort(of),n}}function of(s,e){return s.distance-e.distance}function Pc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Pc(r[a],e,t,!0)}}class ES{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class AS{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Mh{constructor(e,t,n,i){Mh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const lf=new ee;class TS{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=lf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cf=new C,$a=new C;class CS{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cf.subVectors(e,this.start),$a.subVectors(this.end,this.start);const n=$a.dot($a);let r=$a.dot(cf)/n;return t&&(r=Ct(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const hf=new C;class RS extends ft{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new rt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Le(i,3));const r=new rn({fog:!1,toneMapped:!1});this.cone=new Hn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),hf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(hf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const mi=new C,qa=new Ge,hc=new Ge;class PS extends Hn{constructor(e){const t=Wp(e),n=new rt,i=[],r=[],a=new be(0,0,1),o=new be(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Le(i,3)),n.setAttribute("color",new Le(r,3));const l=new rn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");hc.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(qa.multiplyMatrices(hc,o.matrixWorld),mi.setFromMatrixPosition(qa),i.setXYZ(a,mi.x,mi.y,mi.z),qa.multiplyMatrices(hc,o.parent.matrixWorld),mi.setFromMatrixPosition(qa),i.setXYZ(a+1,mi.x,mi.y,mi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wp(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Wp(s.children[t]));return e}class IS extends It{constructor(e,t,n){const i=new ea(t,4,2),r=new Si({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const LS=new C,uf=new be,ff=new be;class DS extends ft{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Qr(t);i.rotateY(Math.PI*.5),this.material=new Si({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new yt(a,3)),this.add(new It(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");uf.copy(this.light.color),ff.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?uf:ff;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(LS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class US extends Hn{constructor(e=10,t=10,n=4473924,i=8947848){n=new be(n),i=new be(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,m=-o;u<=t;u++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const _=u===r?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new rt;h.setAttribute("position",new Le(l,3)),h.setAttribute("color",new Le(c,3));const f=new rn({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class NS extends Hn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new be(r),a=new be(a);const o=[],l=[];if(t>1)for(let f=0;f<t;f++){const u=f/t*(Math.PI*2),d=Math.sin(u)*e,m=Math.cos(u)*e;o.push(0,0,0),o.push(d,0,m);const _=f&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let f=0;f<n;f++){const u=f&1?r:a,d=e-e/n*f;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*d,p=Math.cos(_)*d;o.push(g,0,p),l.push(u.r,u.g,u.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*d,p=Math.cos(_)*d,o.push(g,0,p),l.push(u.r,u.g,u.b)}}const c=new rt;c.setAttribute("position",new Le(o,3)),c.setAttribute("color",new Le(l,3));const h=new rn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const df=new C,Ya=new C,pf=new C;class FS extends ft{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new rt;i.setAttribute("position",new Le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new rn({fog:!1,toneMapped:!1});this.lightPlane=new xi(i,r),this.add(this.lightPlane),i=new rt,i.setAttribute("position",new Le([0,0,0,0,0,1],3)),this.targetLine=new xi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),df.setFromMatrixPosition(this.light.matrixWorld),Ya.setFromMatrixPosition(this.light.target.matrixWorld),pf.subVectors(Ya,df),this.lightPlane.lookAt(Ya),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ya),this.targetLine.scale.z=pf.length()}}const Za=new C,Tt=new Jo;class OS extends Hn{constructor(e){const t=new rt,n=new rn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,_){l(m),l(_)}function l(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Le(i,3)),t.setAttribute("color",new Le(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new be(16755200),h=new be(16711680),f=new be(43775),u=new be(16777215),d=new be(3355443);this.setColors(c,h,f,u,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Tt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Pt("c",t,e,Tt,0,0,-1),Pt("t",t,e,Tt,0,0,1),Pt("n1",t,e,Tt,-n,-i,-1),Pt("n2",t,e,Tt,n,-i,-1),Pt("n3",t,e,Tt,-n,i,-1),Pt("n4",t,e,Tt,n,i,-1),Pt("f1",t,e,Tt,-n,-i,1),Pt("f2",t,e,Tt,n,-i,1),Pt("f3",t,e,Tt,-n,i,1),Pt("f4",t,e,Tt,n,i,1),Pt("u1",t,e,Tt,n*.7,i*1.1,-1),Pt("u2",t,e,Tt,-n*.7,i*1.1,-1),Pt("u3",t,e,Tt,0,i*2,-1),Pt("cf1",t,e,Tt,-n,0,1),Pt("cf2",t,e,Tt,n,0,1),Pt("cf3",t,e,Tt,0,-i,1),Pt("cf4",t,e,Tt,0,i,1),Pt("cn1",t,e,Tt,-n,0,-1),Pt("cn2",t,e,Tt,n,0,-1),Pt("cn3",t,e,Tt,0,-i,-1),Pt("cn4",t,e,Tt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pt(s,e,t,n,i,r,a){Za.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Za.x,Za.y,Za.z)}}const Ja=new sn;class BS extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new rt;r.setIndex(new yt(n,1)),r.setAttribute("position",new yt(i,3)),super(r,new rn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ja.setFromObject(this.object),Ja.isEmpty())return;const t=Ja.min,n=Ja.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class zS extends Hn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new rt;r.setIndex(new yt(n,1)),r.setAttribute("position",new Le(i,3)),super(r,new rn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class kS extends xi{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new rt;a.setAttribute("position",new Le(r,3)),a.computeBoundingSphere(),super(a,new rn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new rt;l.setAttribute("position",new Le(o,3)),l.computeBoundingSphere(),this.add(new It(l,new Si({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const mf=new C;let Ka,uc;class VS extends ft{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ka===void 0&&(Ka=new rt,Ka.setAttribute("position",new Le([0,0,0,0,1,0],3)),uc=new Ys(0,.5,1,5,1),uc.translate(0,-.5,0)),this.position.copy(t),this.line=new xi(Ka,new rn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new It(uc,new Si({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{mf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(mf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class HS extends Hn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new rt;i.setAttribute("position",new Le(t,3)),i.setAttribute("color",new Le(n,3));const r=new rn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new be,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class GS{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Fr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let v=0,y=p.length;v<y;v++){const R=p[v],w=new Yi;w.curves=R.curves,x.push(w)}return x}function n(p,x){const v=x.length;let y=!1;for(let R=v-1,w=0;w<v;R=w++){let T=x[R],P=x[w],b=P.x-T.x,M=P.y-T.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(T=x[w],b=-b,P=x[R],M=-M),p.y<T.y||p.y>P.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const I=M*(p.x-T.x)-b*(p.y-T.y);if(I===0)return!0;if(I<0)continue;y=!y}}else{if(p.y!==T.y)continue;if(P.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=P.x)return!0}}return y}const i=zn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Yi,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const f=[],u=[];let d=[],m=0,_;u[m]=void 0,d[m]=[];for(let p=0,x=r.length;p<x;p++)o=r[p],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&u[m]&&m++,u[m]={s:new Yi,p:_},u[m].s.curves=o.curves,h&&m++,d[m]=[]):d[m].push({h:o,p:_[0]});if(!u[0])return t(r);if(u.length>1){let p=!1,x=0;for(let v=0,y=u.length;v<y;v++)f[v]=[];for(let v=0,y=u.length;v<y;v++){const R=d[v];for(let w=0;w<R.length;w++){const T=R[w];let P=!0;for(let b=0;b<u.length;b++)n(T.p,u[b].p)&&(v!==b&&x++,P?(P=!1,f[b].push(T)):p=!0);P&&f[v].push(T)}}x>0&&p===!1&&(d=f)}let g;for(let p=0,x=u.length;p<x;p++){l=u[p].s,c.push(l),g=d[p];for(let v=0,y=g.length;v<y;v++)l.holes.push(g[v].h)}return c}}class WS extends Vn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class XS extends Rn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);const $S=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:gd,AddEquation:_i,AddOperation:fd,AdditiveAnimationBlendMode:$c,AdditiveBlending:gc,AgXToneMapping:vd,AlphaFormat:kc,AlwaysCompare:Dd,AlwaysDepth:rd,AlwaysStencilFunc:yc,AmbientLight:Up,AnimationAction:Gp,AnimationClip:Hr,AnimationLoader:WM,AnimationMixer:xS,AnimationObjectGroup:_S,AnimationUtils:kM,ArcCurve:rp,ArrayCamera:Zd,ArrowHelper:VS,AttachedBindMode:xc,Audio:Vp,AudioAnalyser:oS,AudioContext:_h,AudioListener:sS,AudioLoader:tS,AxesHelper:HS,BackSide:nn,BasicDepthPacking:wd,BasicShadowMap:Bm,BatchedMesh:np,Bone:ih,BooleanKeyframeTrack:as,Box2:TS,Box3:sn,Box3Helper:zS,BoxGeometry:rs,BoxHelper:BS,BufferAttribute:yt,BufferGeometry:rt,BufferGeometryLoader:zp,ByteType:Oc,Cache:Qn,Camera:Jo,CameraHelper:OS,CanvasTexture:hM,CapsuleGeometry:rl,CatmullRomCurve3:ap,CineonToneMapping:md,CircleGeometry:al,ClampToEdgeWrapping:Sn,Clock:kp,Color:be,ColorKeyframeTrack:ph,ColorManagement:dt,CompressedArrayTexture:lM,CompressedCubeTexture:cM,CompressedTexture:il,CompressedTextureLoader:XM,ConeGeometry:ol,ConstantAlphaFactor:nd,ConstantColorFactor:ed,Controls:WS,CubeCamera:Vd,CubeReflectionMapping:ii,CubeRefractionMapping:vi,CubeTexture:Jr,CubeTextureLoader:$M,CubeUVReflectionMapping:Gs,CubicBezierCurve:ah,CubicBezierCurve3:op,CubicInterpolant:Ap,CullFaceBack:mc,CullFaceFront:Bf,CullFaceFrontBack:Om,CullFaceNone:Of,Curve:In,CurvePath:cp,CustomBlending:kf,CustomToneMapping:_d,CylinderGeometry:Ys,Cylindrical:AS,Data3DTexture:Zc,DataArrayTexture:Yo,DataTexture:Bn,DataTextureLoader:qM,DataUtils:Kg,DecrementStencilOp:jm,DecrementWrapStencilOp:eg,DefaultLoadingManager:Rp,DepthFormat:$i,DepthStencilFormat:Ki,DepthTexture:Qc,DetachedBindMode:yd,DirectionalLight:Dp,DirectionalLightHelper:FS,DiscreteInterpolant:Tp,DisplayP3ColorSpace:qo,DodecahedronGeometry:ll,DoubleSide:Nn,DstAlphaFactor:Zf,DstColorFactor:Kf,DynamicCopyUsage:mg,DynamicDrawUsage:cg,DynamicReadUsage:fg,EdgesGeometry:hp,EllipseCurve:sl,EqualCompare:Rd,EqualDepth:od,EqualStencilFunc:sg,EquirectangularReflectionMapping:wr,EquirectangularRefractionMapping:Er,Euler:vn,EventDispatcher:Vn,ExtrudeGeometry:hl,FileLoader:ri,Float16BufferAttribute:i_,Float32BufferAttribute:Le,FloatType:on,Fog:el,FogExp2:Qo,FramebufferTexture:oM,FrontSide:ni,Frustum:Kr,GLBufferAttribute:bS,GLSL1:_g,GLSL3:Mc,GreaterCompare:Pd,GreaterDepth:cd,GreaterEqualCompare:Ld,GreaterEqualDepth:ld,GreaterEqualStencilFunc:lg,GreaterStencilFunc:ag,GridHelper:US,Group:Ds,HalfFloatType:Ws,HemisphereLight:Pp,HemisphereLightHelper:DS,IcosahedronGeometry:ul,ImageBitmapLoader:eS,ImageLoader:Gr,ImageUtils:Fd,IncrementStencilOp:Km,IncrementWrapStencilOp:Qm,InstancedBufferAttribute:Vs,InstancedBufferGeometry:Bp,InstancedInterleavedBuffer:SS,InstancedMesh:tp,Int16BufferAttribute:t_,Int32BufferAttribute:n_,Int8BufferAttribute:jg,IntType:ko,InterleavedBuffer:tl,InterleavedBufferAttribute:ji,Interpolant:ta,InterpolateDiscrete:Cr,InterpolateLinear:Uo,InterpolateSmooth:eo,InvertStencilOp:tg,KeepStencilOp:Bi,KeyframeTrack:Ln,LOD:Qd,LatheGeometry:jr,Layers:Zo,LessCompare:Cd,LessDepth:ad,LessEqualCompare:qc,LessEqualDepth:br,LessEqualStencilFunc:rg,LessStencilFunc:ig,Light:wi,LightProbe:Op,Line:xi,Line3:CS,LineBasicMaterial:rn,LineCurve:oh,LineCurve3:lp,LineDashedMaterial:bp,LineLoop:ip,LineSegments:Hn,LinearDisplayP3ColorSpace:Zr,LinearFilter:Nt,LinearInterpolant:dh,LinearMipMapLinearFilter:Hm,LinearMipMapNearestFilter:Vm,LinearMipmapLinearFilter:Fn,LinearMipmapNearestFilter:fr,LinearSRGBColorSpace:ai,LinearToneMapping:dd,LinearTransfer:Pr,Loader:cn,LoaderUtils:Rc,LoadingManager:mh,LoopOnce:Md,LoopPingPong:bd,LoopRepeat:Sd,LuminanceAlphaFormat:Gc,LuminanceFormat:Hc,MOUSE:Nm,Material:Kt,MaterialLoader:vl,MathUtils:Ug,Matrix2:Mh,Matrix3:nt,Matrix4:Ge,MaxEquation:Wf,Mesh:It,MeshBasicMaterial:Si,MeshDepthMaterial:eh,MeshDistanceMaterial:th,MeshLambertMaterial:Mp,MeshMatcapMaterial:Sp,MeshNormalMaterial:yp,MeshPhongMaterial:vp,MeshPhysicalMaterial:_p,MeshStandardMaterial:uh,MeshToonMaterial:xp,MinEquation:Gf,MirroredRepeatWrapping:Tr,MixOperation:ud,MultiplyBlending:vc,MultiplyOperation:qr,NearestFilter:Vt,NearestMipMapLinearFilter:km,NearestMipMapNearestFilter:zm,NearestMipmapLinearFilter:Ps,NearestMipmapNearestFilter:Fc,NeutralToneMapping:xd,NeverCompare:Td,NeverDepth:sd,NeverStencilFunc:ng,NoBlending:ei,NoColorSpace:Kn,NoToneMapping:ti,NormalAnimationBlendMode:$o,NormalBlending:Xi,NotEqualCompare:Id,NotEqualDepth:hd,NotEqualStencilFunc:og,NumberKeyframeTrack:kr,Object3D:ft,ObjectLoader:jM,ObjectSpaceNormalMap:Ad,OctahedronGeometry:Qr,OneFactor:$f,OneMinusConstantAlphaFactor:id,OneMinusConstantColorFactor:td,OneMinusDstAlphaFactor:Jf,OneMinusDstColorFactor:jf,OneMinusSrcAlphaFactor:ao,OneMinusSrcColorFactor:Yf,OrthographicCamera:Ko,P3Primaries:Lr,PCFShadowMap:Nc,PCFSoftShadowMap:zf,PMREMGenerator:Sc,Path:Fr,PerspectiveCamera:kt,Plane:gi,PlaneGeometry:$s,PlaneHelper:kS,PointLight:Lp,PointLightHelper:IS,Points:sp,PointsMaterial:sh,PolarGridHelper:NS,PolyhedronGeometry:bi,PositionalAudio:aS,PropertyBinding:ut,PropertyMixer:Hp,QuadraticBezierCurve:lh,QuadraticBezierCurve3:ch,Quaternion:ln,QuaternionKeyframeTrack:na,QuaternionLinearInterpolant:Cp,RED_GREEN_RGTC2_Format:Lo,RED_RGTC1_Format:Xc,REVISION:Bo,RGBADepthPacking:Ed,RGBAFormat:tn,RGBAIntegerFormat:Xo,RGBA_ASTC_10x10_Format:Ao,RGBA_ASTC_10x5_Format:bo,RGBA_ASTC_10x6_Format:wo,RGBA_ASTC_10x8_Format:Eo,RGBA_ASTC_12x10_Format:To,RGBA_ASTC_12x12_Format:Co,RGBA_ASTC_4x4_Format:mo,RGBA_ASTC_5x4_Format:go,RGBA_ASTC_5x5_Format:_o,RGBA_ASTC_6x5_Format:vo,RGBA_ASTC_6x6_Format:xo,RGBA_ASTC_8x5_Format:yo,RGBA_ASTC_8x6_Format:Mo,RGBA_ASTC_8x8_Format:So,RGBA_BPTC_Format:_r,RGBA_ETC2_EAC_Format:po,RGBA_PVRTC_2BPPV1_Format:ho,RGBA_PVRTC_4BPPV1_Format:co,RGBA_S3TC_DXT1_Format:pr,RGBA_S3TC_DXT3_Format:mr,RGBA_S3TC_DXT5_Format:gr,RGBDepthPacking:qm,RGBFormat:Vc,RGBIntegerFormat:Gm,RGB_BPTC_SIGNED_Format:Ro,RGB_BPTC_UNSIGNED_Format:Po,RGB_ETC1_Format:uo,RGB_ETC2_Format:fo,RGB_PVRTC_2BPPV1_Format:lo,RGB_PVRTC_4BPPV1_Format:oo,RGB_S3TC_DXT1_Format:dr,RGDepthPacking:Ym,RGFormat:Wc,RGIntegerFormat:Wo,RawShaderMaterial:gp,Ray:Xs,Raycaster:wS,Rec709Primaries:Ir,RectAreaLight:Np,RedFormat:Go,RedIntegerFormat:Yr,ReinhardToneMapping:pd,RenderTarget:Od,RepeatWrapping:Ar,ReplaceStencilOp:Jm,ReverseSubtractEquation:Hf,RingGeometry:fl,SIGNED_RED_GREEN_RGTC2_Format:Do,SIGNED_RED_RGTC1_Format:Io,SRGBColorSpace:Mn,SRGBTransfer:Mt,Scene:Jd,ShaderChunk:We,ShaderLib:Tn,ShaderMaterial:Pn,ShadowMaterial:mp,Shape:Yi,ShapeGeometry:dl,ShapePath:GS,ShapeUtils:zn,ShortType:Bc,Skeleton:nl,SkeletonHelper:PS,SkinnedMesh:ep,Source:Gi,Sphere:Jt,SphereGeometry:ea,Spherical:ES,SphericalHarmonics3:Fp,SplineCurve:hh,SpotLight:Ip,SpotLightHelper:RS,Sprite:jd,SpriteMaterial:nh,SrcAlphaFactor:ro,SrcAlphaSaturateFactor:Qf,SrcColorFactor:qf,StaticCopyUsage:pg,StaticDrawUsage:Dr,StaticReadUsage:ug,StereoCamera:nS,StreamCopyUsage:gg,StreamDrawUsage:hg,StreamReadUsage:dg,StringKeyframeTrack:os,SubtractEquation:Vf,SubtractiveBlending:_c,TOUCH:Fm,TangentSpaceNormalMap:Mi,TetrahedronGeometry:pl,Texture:Rt,TextureLoader:YM,TextureUtils:zy,TorusGeometry:ml,TorusKnotGeometry:gl,Triangle:gn,TriangleFanDrawMode:$m,TriangleStripDrawMode:Xm,TrianglesDrawMode:Wm,TubeGeometry:_l,UVMapping:zo,Uint16BufferAttribute:Jc,Uint32BufferAttribute:Kc,Uint8BufferAttribute:Qg,Uint8ClampedBufferAttribute:e_,Uniform:yh,UniformsGroup:MS,UniformsLib:xe,UniformsUtils:kd,UnsignedByteType:kn,UnsignedInt248Type:Ji,UnsignedInt5999Type:zc,UnsignedIntType:si,UnsignedShort4444Type:Vo,UnsignedShort5551Type:Ho,UnsignedShortType:Bs,VSMShadowMap:Un,Vector2:ee,Vector3:C,Vector4:xt,VectorKeyframeTrack:Vr,VideoTexture:aM,WebGL3DRenderTarget:Vg,WebGLArrayRenderTarget:kg,WebGLCoordinateSystem:On,WebGLCubeRenderTarget:Hd,WebGLMultipleRenderTargets:XS,WebGLRenderTarget:Rn,WebGLRenderer:Zy,WebGLUtils:Yd,WebGPUCoordinateSystem:Ur,WireframeGeometry:pp,WrapAroundEnding:Rr,ZeroCurvatureEnding:Vi,ZeroFactor:Xf,ZeroSlopeEnding:Hi,ZeroStencilOp:Zm,createCanvasElement:Nd},Symbol.toStringTag,{value:"Module"})),qS=(s,e)=>{const t=cm(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});yi(()=>{i(),n&&n()})},Xp=new kt(75,0,.1,1e3);Xp.position.z=5;Xp.lookAt(0,0,0);function $p(s,e){const t=so(s);let n=s;const i=t.subscribe(o=>n=o);return yi(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const xl=()=>{const s=Zi("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},Sh=Symbol("threlte-hierarchical-parent-context"),qp=()=>Zi(Sh),YS=s=>Sr(Sh,s),ZS=s=>{const e=$p(s);return Sr(Sh,e),e};function JS(s){let e;const t=s[7].default,n=ts(t,s,s[6],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&ns(n,t,i,i[6],e?ss(t,i[6],r,null):is(i[6]),null)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}const KS=()=>({onChildMount:Zi("threlte-hierarchical-object-on-mount"),onChildDestroy:Zi("threlte-hierarchical-object-on-destroy")});function jS(s,e,t){var g;let n,{$$slots:i={},$$scope:r}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const l=p=>{o==null||o(p)};let{onChildDestroy:c=void 0}=e;const h=p=>{c==null||c(p)},{invalidate:f}=xl(),u=qp();no(s,u,p=>t(5,n=p));let{parent:d=n}=e;const m=KS();a&&((g=m.onChildMount)==null||g.call(m,a),f());const _=$p(a,(p,x)=>{var v,y;x&&((v=m.onChildDestroy)==null||v.call(m,x),f()),p&&((y=m.onChildMount)==null||y.call(m,p),f())});return yi(()=>{var p;a&&((p=m.onChildDestroy)==null||p.call(m,a),f())}),Sr("threlte-hierarchical-object-on-mount",l),Sr("threlte-hierarchical-object-on-destroy",h),YS(_),s.$$set=p=>{"object"in p&&t(2,a=p.object),"onChildMount"in p&&t(3,o=p.onChildMount),"onChildDestroy"in p&&t(4,c=p.onChildDestroy),"parent"in p&&t(1,d=p.parent),"$$scope"in p&&t(6,r=p.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,d=n),s.$$.dirty&4&&_.set(a)},[u,d,a,o,c,n,r,i]}class QS extends Xt{constructor(e){super(),$t(this,e,jS,JS,Wt,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function eb(s){let e;const t=s[1].default,n=ts(t,s,s[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&ns(n,t,i,i[4],e?ss(t,i[4],r,null):is(i[4]),null)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function tb(s){let e,t;return e=new QS({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[eb]},$$scope:{ctx:s}}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function nb(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,a,o,i]}class ib extends Xt{constructor(e){super(),$t(this,e,nb,tb,Wt,{object:0})}}const sb=()=>Zi("threlte-internal-context");function rb(s){let e;const t=s[9].default,n=ts(t,s,s[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&ns(n,t,i,i[8],e?ss(t,i[8],r,null):is(i[8]),null)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}const gf="threlte-disposable-object-context";function ab(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=sb();let{object:h=void 0}=e,f=h,{dispose:u=void 0}=e;const d=Zi(gf);no(s,d,g=>t(7,i=g));const m=so(u??i??!0);no(s,m,g=>t(6,n=g)),Sr(gf,m);let _=n?o(h):[];return l(_),yi(()=>{c(_)}),s.$$set=g=>{"object"in g&&t(2,h=g.object),"dispose"in g&&t(3,u=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&m.set(u??i??!0),s.$$.dirty&116&&h!==f&&(c(_),t(5,_=n?o(h):[]),l(_),t(4,f=h))},[d,m,h,u,f,_,n,i,a,r]}class ob extends Xt{constructor(e){super(),$t(this,e,ab,rb,Wt,{object:2,dispose:3})}}const lb=/^\s*class\s+/,cb=s=>typeof s!="function"?!1:lb.test(s.toString()),hb=s=>Array.isArray(s),_f=(s,e)=>cb(s)?hb(e)?new s(...e):new s:s,ub=s=>"isObject3D"in s,vf=s=>"dispose"in s,Yp=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},fc=Symbol("initialValueBeforeAttach"),fb=()=>{const{invalidate:s}=xl();let e=!1,t=fc,n,i,r;const a=(l,c,h)=>{if(o(),!h){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(h="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(c,l);else{const{target:f,key:u}=Yp(c,h);t=f[u],f[u]=l,i=f,r=u}e=!0,s()}},o=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==fc&&(i[r]=t,t=fc,i=void 0,r=void 0),e=!1,s())};return yi(()=>{o()}),{update:a}},db=s=>s&&s.isCamera,Zp=s=>s&&s.isOrthographicCamera,Jp=s=>s&&s.isPerspectiveCamera,pb=s=>Jp(s)||Zp(s),mb=()=>{const{invalidate:s,size:e,camera:t}=xl();let n,i;yi(()=>{i==null||i()});const r=l=>{n&&(Zp(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):Jp(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(l,c)=>{if(i==null||i(),c||!pb(l)){n=void 0;return}n=l,i=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!db(l)||!c||(t.set(l),s())}}},Kp=()=>{const s=Nf(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},gb=()=>{const s=Kp(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,s("create",{ref:t,cleanup:o=>{e.push(o)}})},r=a=>{t=a,n&&i()};return Hs(()=>{i(),n=!0}),yi(()=>{e.forEach(a=>a())}),{updateRef:r}},xf=s=>!!(s!=null&&s.addEventListener),_b=()=>{const s=Kp(),e=Nf(),t=l=>{l!=null&&l.type&&s(l.type,l)},n=(l,c)=>{xf(l)&&c.forEach(h=>{l.removeEventListener(h,t)})},i=(l,c)=>{xf(l)&&c.forEach(h=>{l.addEventListener(h,t)})},r=so(),a=so([]);return qS([r,a],([l,c])=>(i(l,c),()=>n(l,c))),Hs(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:l=>{r.set(l)}}},vb=s=>{const t=Zi("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(c=>c(s)).filter(Boolean),i=n.flatMap(c=>c.pluginProps??[]);let r=[];return yi(()=>{r.forEach(c=>c())}),{updateRef:c=>{r.forEach(h=>h()),r=[],n.forEach(h=>{var u;const f=(u=h.onRefChange)==null?void 0:u.call(h,c);f&&r.push(f)})},updateProps:c=>{n.forEach(h=>{var f;(f=h.onPropsChange)==null||f.call(h,c)})},updateRestProps:c=>{n.forEach(h=>{var f;(f=h.onRestPropsChange)==null||f.call(h,c)})},pluginsProps:i}},xb=new Set(["$$scope","$$slots","type","args","attach","instance"]),yb=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),Mb=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,yf=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},Sb=()=>{const{invalidate:s}=xl(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(Mb(o)){const f=e.get(a);if(f&&f.instance===r&&f.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=Yp(r,a);if(o!=null){const f=t.get(a);if(f)f(h,c,o);else{const u=yf(h,c,o);t.set(a,u),u(h,c,o)}}else yf(h,c,o)(h,c,o);l.manualCamera||yb.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(r,a,o)=>{var l;for(const c in a)!xb.has(c)&&!((l=o.pluginsProps)!=null&&l.includes(c))&&n(r,c,a[c],o),s()}}},bb=s=>({ref:s&2}),Mf=s=>({ref:s[1]}),wb=s=>({ref:s&2}),Sf=s=>({ref:s[1]});function bf(s){let e,t;return e=new ob({props:{object:s[1],dispose:s[0]}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Eb(s){let e;const t=s[10].default,n=ts(t,s,s[11],Mf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&ns(n,t,i,i[11],e?ss(t,i[11],r,bb):is(i[11]),Mf)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function Ab(s){let e,t;return e=new ib({props:{object:s[1],$$slots:{default:[Tb]},$$scope:{ctx:s}}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Tb(s){let e;const t=s[10].default,n=ts(t,s,s[11],Sf);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&ns(n,t,i,i[11],e?ss(t,i[11],r,wb):is(i[11]),Sf)},i(i){e||(De(n,i),e=!0)},o(i){Oe(n,i),e=!1},d(i){n&&n.d(i)}}}function Cb(s){let e=vf(s[1]),t,n,i,r,a,o,l=e&&bf(s);const c=[Ab,Eb],h=[];function f(u,d){return d&2&&(n=null),n==null&&(n=!!ub(u[1])),n?0:1}return i=f(s,-1),r=h[i]=c[i](s),{c(){l&&l.c(),t=Ue(),r.c(),a=Dh()},l(u){l&&l.l(u),t=Ne(u),r.l(u),a=Dh()},m(u,d){l&&l.m(u,d),Me(u,t,d),h[i].m(u,d),Me(u,a,d),o=!0},p(u,[d]){d&2&&(e=vf(u[1])),e?l?(l.p(u,d),d&2&&De(l,1)):(l=bf(u),l.c(),De(l,1),l.m(t.parentNode,t)):l&&(pc(),Oe(l,1,1,()=>{l=null}),dc());let m=i;i=f(u,d),i===m?h[i].p(u,d):(pc(),Oe(h[m],1,1,()=>{h[m]=null}),dc(),r=h[i],r?r.p(u,d):(r=h[i]=c[i](u),r.c()),De(r,1),r.m(a.parentNode,a))},i(u){o||(De(l),De(r),o=!0)},o(u){Oe(l),Oe(r),o=!1},d(u){u&&(ne(t),ne(a)),l&&l.d(u),h[i].d(u)}}}function Rb(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=Ph(e,n),r,{$$slots:a={},$$scope:o}=e,{is:l}=e,{args:c=void 0}=e,{attach:h=void 0}=e,{manual:f=void 0}=e,{makeDefault:u=void 0}=e,{dispose:d=void 0}=e;const m=qp();no(s,m,I=>t(9,r=I));const _=gb();let g=_f(l,c);_.updateRef(g);let p=!1;const x=()=>{if(!p){p=!0;return}t(1,g=_f(l,c)),_.updateRef(g)};let{ref:v=g}=e;const y=ZS(g),R=vb({ref:g,props:e}),w=(R==null?void 0:R.pluginsProps)??[],T=Sb(),P=mb(),b=fb(),M=_b();return s.$$set=I=>{t(23,e=Ih(Ih({},e),Lh(I))),t(22,i=Ph(e,n)),"is"in I&&t(4,l=I.is),"args"in I&&t(5,c=I.args),"attach"in I&&t(6,h=I.attach),"manual"in I&&t(7,f=I.manual),"makeDefault"in I&&t(8,u=I.makeDefault),"dispose"in I&&t(0,d=I.dispose),"ref"in I&&t(3,v=I.ref),"$$scope"in I&&t(11,o=I.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&x(),s.$$.dirty&2&&t(3,v=g),s.$$.dirty&2&&y.set(g),T.updateProps(g,i,{manualCamera:f,pluginsProps:w}),s.$$.dirty&130&&P.update(g,f),s.$$.dirty&258&&P.makeDefaultCamera(g,u),s.$$.dirty&578&&b.update(g,r,h),s.$$.dirty&2&&M.updateRef(g),s.$$.dirty&2&&(R==null||R.updateRef(g)),R==null||R.updateProps(e),R==null||R.updateRestProps(i)},e=Lh(e),[d,g,m,v,l,c,h,f,u,r,a,o]}class jp extends Xt{constructor(e){super(),$t(this,e,Rb,Cb,Wt,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}}const Pb={},Ib=(s,e)=>{const t=Pb[e]||$S[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},Lb=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new jp(Ib(n,s))}});new Proxy(class{},{construct(s,[e]){const t=e;return new jp(t)},get(s,e){return Lb(e)}});new C;new C;new C;new Ge;new Ge;new It;`${We.logdepthbuf_pars_vertex}${We.fog_pars_vertex}${We.logdepthbuf_vertex}${We.fog_vertex}`;`${We.tonemapping_fragment}${We.colorspace_fragment}`;`${We.tonemapping_fragment}${We.colorspace_fragment}`;const Db=`

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
`,Ub=`

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
`,Nb=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Fb=Nb,Ob=`
	${Db}
	${Ub}
`;`${Fb}${Ob}${We.tonemapping_fragment}${We.colorspace_fragment}`;for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);var Qp={exports:{}};Qp.exports=yl;Qp.exports.default=yl;function yl(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=em(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,f,u,d;if(n&&(r=Hb(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var m=t;m<i;m+=t)f=s[m],u=s[m+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Wr(r,a,t,o,l,d,0),a}function em(s,e,t,n,i){var r,a;if(i===Dc(s,e,t,n)>0)for(r=e;r<t;r+=n)a=wf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=wf(r,s[r],s[r+1],a);return a&&Ml(a,a.next)&&($r(a),a=a.next),a}function es(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(Ml(t,t.next)||wt(t.prev,t,t.next)===0)){if($r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(s,e,t,n,i,r,a){if(s){!a&&r&&qb(s,n,i,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?zb(s,n,i,r):Bb(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),$r(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=kb(es(s),e,t),Wr(s,e,t,n,i,r,2)):a===2&&Vb(s,e,t,n,i,r):Wr(es(s),e,t,n,i,r,1);break}}}}function Bb(s){var e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=n.next;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ns(i,o,r,l,a,c,m.x,m.y)&&wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function zb(s,e,t,n){var i=s.prev,r=s,a=s.next;if(wt(i,r,a)>=0)return!1;for(var o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,_=o>l?o>c?o:c:l>c?l:c,g=h>f?h>u?h:u:f>u?f:u,p=Ic(d,m,e,t,n),x=Ic(_,g,e,t,n),v=s.prevZ,y=s.nextZ;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Ns(o,h,l,f,c,u,v.x,v.y)&&wt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ns(o,h,l,f,c,u,y.x,y.y)&&wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&Ns(o,h,l,f,c,u,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==a&&Ns(o,h,l,f,c,u,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kb(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!Ml(i,r)&&tm(i,n,n.next,r)&&Xr(i,r)&&Xr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$r(n),$r(n.next),n=s=r),n=n.next}while(n!==s);return es(n)}function Vb(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&Jb(a,o)){var l=nm(a,o);a=es(a,a.next),l=es(l,l.next),Wr(a,e,t,n,i,r,0),Wr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Hb(s,e,t,n){var i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=em(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Zb(c));for(i.sort(Gb),r=0;r<i.length;r++)t=Wb(i[r],t);return t}function Gb(s,e){return s.x-e.x}function Wb(s,e){var t=Xb(s,e);if(!t)return e;var n=nm(t,s);return es(n,n.next),es(t,t.next)}function Xb(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,f=1/0,u;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&Ns(i<h?n:r,i,c,h,i<h?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Xr(t,s)&&(u<f||u===f&&(t.x>a.x||t.x===a.x&&$b(a,t)))&&(a=t,f=u)),t=t.next;while(t!==l);return a}function $b(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function qb(s,e,t,n){var i=s;do i.z===0&&(i.z=Ic(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Yb(i)}function Yb(s){var e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Ic(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Zb(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ns(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Jb(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Kb(s,e)&&(Xr(s,e)&&Xr(e,s)&&jb(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||Ml(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ml(s,e){return s.x===e.x&&s.y===e.y}function tm(s,e,t,n){var i=Qa(wt(s,e,t)),r=Qa(wt(s,e,n)),a=Qa(wt(t,n,s)),o=Qa(wt(t,n,e));return!!(i!==r&&a!==o||i===0&&ja(s,t,e)||r===0&&ja(s,n,e)||a===0&&ja(t,s,n)||o===0&&ja(t,e,n))}function ja(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Qa(s){return s>0?1:s<0?-1:0}function Kb(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&tm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Xr(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function jb(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function nm(s,e){var t=new Lc(s.i,s.x,s.y),n=new Lc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wf(s,e,t,n){var i=new Lc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Lc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}yl.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(Dc(s,0,r,t));if(i)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(Dc(s,c,h,t))}var f=0;for(o=0;o<n.length;o+=3){var u=n[o]*t,d=n[o+1]*t,m=n[o+2]*t;f+=Math.abs((s[u]-s[m])*(s[d+1]-s[u+1])-(s[u]-s[d])*(s[m+1]-s[u+1]))}return a===0&&f===0?0:Math.abs((f-a)/a)};function Dc(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}yl.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};new ee;new ee;var Ef;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const l=i[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const l=i[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Ef||(Ef={}));const Af={Svelte:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",VSCode:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg","C#":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",Git:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",SASS:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",TypeScript:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",JavaScript:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",HTML:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",CSS:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",Figma:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",Rust:"https://miro.medium.com/v2/resize:fit:786/format:webp/1*5GTKx0a2tf7mAMYnplvBeg.png",".NET":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",Java:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",MySQL:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg","C++":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg","Node.js":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",Bun:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",Vue:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg","Three.js":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg"};function Qb(s){let e,t;return{c(){e=Te("img"),this.h()},l(n){e=Ce(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){pt(e.src,t=s[1])||q(e,"src",t),q(e,"alt",s[0]),q(e,"class","svelte-cbp1jf")},m(n,i){Me(n,e,i)},p(n,i){i&1&&q(e,"alt",n[0])},d(n){n&&ne(e)}}}function ew(s){let e,t,n,i,r=s[1]&&Qb(s);return{c(){e=Te("div"),r&&r.c(),t=Ue(),n=Te("p"),i=pn(s[0]),this.h()},l(a){e=Ce(a,"DIV",{class:!0});var o=at(e);r&&r.l(o),t=Ne(o),n=Ce(o,"P",{class:!0});var l=at(n);i=mn(l,s[0]),l.forEach(ne),o.forEach(ne),this.h()},h(){q(n,"class","svelte-cbp1jf"),q(e,"class","tag svelte-cbp1jf")},m(a,o){Me(a,e,o),r&&r.m(e,null),ye(e,t),ye(e,n),ye(n,i)},p(a,[o]){a[1]&&r.p(a,o),o&1&&Cn(i,a[0])},i:st,o:st,d(a){a&&ne(e),r&&r.d()}}}function tw(s,e,t){let{tag:n}=e,i=Object.keys(Af),a=Object.values(Af)[i.indexOf(n)];return s.$$set=o=>{"tag"in o&&t(0,n=o.tag)},[n,a]}class nw extends Xt{constructor(e){super(),$t(this,e,tw,ew,Wt,{tag:0})}}function Tf(s,e,t){const n=s.slice();return n[15]=e[t],n}function Cf(s){let e,t,n,i,r;return{c(){e=Te("div"),t=pn(s[8]),n=Ue(),i=Te("img"),this.h()},l(a){e=Ce(a,"DIV",{class:!0});var o=at(e);t=mn(o,s[8]),n=Ne(o),i=Ce(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(ne),this.h()},h(){pt(i.src,r="/star.png")||q(i,"src",r),q(i,"alt",""),q(i,"class","svelte-v6xnty"),q(e,"class","stars svelte-v6xnty")},m(a,o){Me(a,e,o),ye(e,t),ye(e,n),ye(e,i)},p(a,o){o&256&&Cn(t,a[8])},d(a){a&&ne(e)}}}function Rf(s){let e,t,n,i,r;return{c(){e=Te("div"),t=pn(s[9]),n=Ue(),i=Te("img"),this.h()},l(a){e=Ce(a,"DIV",{class:!0});var o=at(e);t=mn(o,s[9]),n=Ne(o),i=Ce(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(ne),this.h()},h(){pt(i.src,r="/people.png")||q(i,"src",r),q(i,"alt",""),q(i,"class","svelte-v6xnty"),q(e,"class","downloads svelte-v6xnty")},m(a,o){Me(a,e,o),ye(e,t),ye(e,n),ye(e,i)},p(a,o){o&512&&Cn(t,a[9])},d(a){a&&ne(e)}}}function Pf(s){let e,t,n,i,r;return{c(){e=Te("div"),t=pn(s[10]),n=Ue(),i=Te("img"),this.h()},l(a){e=Ce(a,"DIV",{class:!0});var o=at(e);t=mn(o,s[10]),n=Ne(o),i=Ce(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(ne),this.h()},h(){pt(i.src,r="/twitch.png")||q(i,"src",r),q(i,"alt",""),q(i,"class","svelte-v6xnty"),q(e,"class","streamers svelte-v6xnty")},m(a,o){Me(a,e,o),ye(e,t),ye(e,n),ye(e,i)},p(a,o){o&1024&&Cn(t,a[10])},d(a){a&&ne(e)}}}function If(s){let e,t;return{c(){e=Te("video"),this.h()},l(n){e=Ce(n,"VIDEO",{src:!0,class:!0});var i=at(e);i.forEach(ne),this.h()},h(){pt(e.src,t=`/${s[3]}`)||q(e,"src",t),e.autoplay=!0,e.muted=!0,e.loop=!0,e.playsInline=!0,q(e,"class","svelte-v6xnty")},m(n,i){Me(n,e,i),s[13](e)},p(n,i){i&8&&!pt(e.src,t=`/${n[3]}`)&&q(e,"src",t)},d(n){n&&ne(e),s[13](null)}}}function iw(s){let e,t="Open source project op",n,i,r,a,o,l="GitHub";return{c(){e=Te("span"),e.textContent=t,n=Ue(),i=Te("img"),a=Ue(),o=Te("span"),o.textContent=l,this.h()},l(c){e=Ce(c,"SPAN",{"data-svelte-h":!0}),io(e)!=="svelte-1xfv9ih"&&(e.textContent=t),n=Ne(c),i=Ce(c,"IMG",{src:!0,alt:!0,class:!0}),a=Ne(c),o=Ce(c,"SPAN",{"data-svelte-h":!0}),io(o)!=="svelte-1l01zul"&&(o.textContent=l),this.h()},h(){pt(i.src,r="/github.svg")||q(i,"src",r),q(i,"alt",""),q(i,"class","svelte-v6xnty")},m(c,h){Me(c,e,h),Me(c,n,h),Me(c,i,h),Me(c,a,h),Me(c,o,h)},p:st,d(c){c&&(ne(e),ne(n),ne(i),ne(a),ne(o))}}}function sw(s){let e,t="Project bij",n,i,r,a,o,l;return{c(){e=Te("span"),e.textContent=t,n=Ue(),i=Te("img"),a=Ue(),o=Te("span"),l=pn(s[4]),this.h()},l(c){e=Ce(c,"SPAN",{"data-svelte-h":!0}),io(e)!=="svelte-15nx4oq"&&(e.textContent=t),n=Ne(c),i=Ce(c,"IMG",{src:!0,alt:!0,class:!0}),a=Ne(c),o=Ce(c,"SPAN",{});var h=at(o);l=mn(h,s[4]),h.forEach(ne),this.h()},h(){pt(i.src,r=`/${s[5]}`)||q(i,"src",r),q(i,"alt",""),q(i,"class","svelte-v6xnty")},m(c,h){Me(c,e,h),Me(c,n,h),Me(c,i,h),Me(c,a,h),Me(c,o,h),ye(o,l)},p(c,h){h&32&&!pt(i.src,r=`/${c[5]}`)&&q(i,"src",r),h&16&&Cn(l,c[4])},d(c){c&&(ne(e),ne(n),ne(i),ne(a),ne(o))}}}function Lf(s){let e,t;return{c(){e=Te("a"),t=pn("Github"),this.h()},l(n){e=Ce(n,"A",{href:!0,target:!0,rel:!0});var i=at(e);t=mn(i,"Github"),i.forEach(ne),this.h()},h(){q(e,"href",s[7]),q(e,"target","_blank"),q(e,"rel","noopener noreferrer")},m(n,i){Me(n,e,i),ye(e,t)},p(n,i){i&128&&q(e,"href",n[7])},d(n){n&&ne(e)}}}function Df(s){let e,t;return e=new nw({props:{tag:s[15]}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p(n,i){const r={};i&64&&(r.tag=n[15]),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function rw(s){let e,t,n,i,r,a,o,l,c,h,f,u,d,m,_,g,p,x,v,y,R=s[8]&&Cf(s),w=s[9]&&Rf(s),T=s[10]&&Pf(s),P=s[3]&&If(s);function b(D,G){return D[4]!="GitHub"?sw:iw}let M=b(s),I=M(s),O=s[7]&&Lf(s),k=Nh(s[6]),F=[];for(let D=0;D<k.length;D+=1)F[D]=Df(Tf(s,k,D));const K=D=>Oe(F[D],1,1,()=>{F[D]=null});return{c(){e=Te("div"),R&&R.c(),t=Ue(),w&&w.c(),n=Ue(),T&&T.c(),i=Ue(),r=Te("div"),P&&P.c(),a=Ue(),o=Te("img"),c=Ue(),h=Te("div"),I.c(),f=Ue(),u=Te("div"),d=pn(s[0]),m=Ue(),_=Te("div"),g=pn(s[1]),p=Ue(),O&&O.c(),x=Ue(),v=Te("div");for(let D=0;D<F.length;D+=1)F[D].c();this.h()},l(D){e=Ce(D,"DIV",{class:!0});var G=at(e);R&&R.l(G),t=Ne(G),w&&w.l(G),n=Ne(G),T&&T.l(G),i=Ne(G),r=Ce(G,"DIV",{class:!0});var z=at(r);P&&P.l(z),a=Ne(z),o=Ce(z,"IMG",{src:!0,alt:!0,class:!0}),z.forEach(ne),c=Ne(G),h=Ce(G,"DIV",{class:!0});var he=at(h);I.l(he),he.forEach(ne),f=Ne(G),u=Ce(G,"DIV",{class:!0});var ue=at(u);d=mn(ue,s[0]),ue.forEach(ne),m=Ne(G),_=Ce(G,"DIV",{class:!0});var pe=at(_);g=mn(pe,s[1]),pe.forEach(ne),p=Ne(G),O&&O.l(G),x=Ne(G),v=Ce(G,"DIV",{class:!0});var Ve=at(v);for(let Qe=0;Qe<F.length;Qe+=1)F[Qe].l(Ve);Ve.forEach(ne),G.forEach(ne),this.h()},h(){pt(o.src,l=`/${s[2]}`)||q(o,"src",l),q(o,"alt",s[0]),q(o,"class","svelte-v6xnty"),q(r,"class","media svelte-v6xnty"),Uh(r,"video",s[3]),q(h,"class","subtitle svelte-v6xnty"),q(u,"class","title svelte-v6xnty"),q(_,"class","description svelte-v6xnty"),q(v,"class","tags svelte-v6xnty"),q(e,"class","project svelte-v6xnty")},m(D,G){Me(D,e,G),R&&R.m(e,null),ye(e,t),w&&w.m(e,null),ye(e,n),T&&T.m(e,null),ye(e,i),ye(e,r),P&&P.m(r,null),ye(r,a),ye(r,o),ye(e,c),ye(e,h),I.m(h,null),ye(e,f),ye(e,u),ye(u,d),ye(e,m),ye(e,_),ye(_,g),ye(e,p),O&&O.m(e,null),ye(e,x),ye(e,v);for(let z=0;z<F.length;z+=1)F[z]&&F[z].m(v,null);y=!0},p(D,[G]){if(D[8]?R?R.p(D,G):(R=Cf(D),R.c(),R.m(e,t)):R&&(R.d(1),R=null),D[9]?w?w.p(D,G):(w=Rf(D),w.c(),w.m(e,n)):w&&(w.d(1),w=null),D[10]?T?T.p(D,G):(T=Pf(D),T.c(),T.m(e,i)):T&&(T.d(1),T=null),D[3]?P?P.p(D,G):(P=If(D),P.c(),P.m(r,a)):P&&(P.d(1),P=null),(!y||G&4&&!pt(o.src,l=`/${D[2]}`))&&q(o,"src",l),(!y||G&1)&&q(o,"alt",D[0]),(!y||G&8)&&Uh(r,"video",D[3]),M===(M=b(D))&&I?I.p(D,G):(I.d(1),I=M(D),I&&(I.c(),I.m(h,null))),(!y||G&1)&&Cn(d,D[0]),(!y||G&2)&&Cn(g,D[1]),D[7]?O?O.p(D,G):(O=Lf(D),O.c(),O.m(e,x)):O&&(O.d(1),O=null),G&64){k=Nh(D[6]);let z;for(z=0;z<k.length;z+=1){const he=Tf(D,k,z);F[z]?(F[z].p(he,G),De(F[z],1)):(F[z]=Df(he),F[z].c(),De(F[z],1),F[z].m(v,null))}for(pc(),z=k.length;z<F.length;z+=1)K(z);dc()}},i(D){if(!y){for(let G=0;G<k.length;G+=1)De(F[G]);y=!0}},o(D){F=F.filter(Boolean);for(let G=0;G<F.length;G+=1)Oe(F[G]);y=!1},d(D){D&&ne(e),R&&R.d(),w&&w.d(),T&&T.d(),P&&P.d(),I.d(),O&&O.d(),lm(F,D)}}}function aw(s,e,t){let{title:n}=e,{description:i}=e,{image:r}=e,{video:a=void 0}=e,{location:o}=e,{locationEmoji:l}=e,{tags:c}=e,{github:h=void 0}=e,{link:f=void 0}=e,{stars:u=void 0}=e,{downloads:d=void 0}=e,{streamers:m=void 0}=e,_,g=!1;Hs(()=>{const x=(y,R)=>{if(!_)return;const w=_.getBoundingClientRect(),T=w.left+w.width/2,P=w.top+w.height/2,b=Math.sqrt((T-y)**2+(P-R)**2);b>500&&g?(g=!1,_.pause()):b<=500&&!g&&(g=!0,_==null||_.play())},v=y=>{x(y.clientX,y.clientY)};a&&(document.addEventListener("mousemove",v),document.addEventListener("scroll",()=>x(window.innerWidth/2,window.innerHeight/2)))});function p(x){Mr[x?"unshift":"push"](()=>{_=x,t(11,_)})}return s.$$set=x=>{"title"in x&&t(0,n=x.title),"description"in x&&t(1,i=x.description),"image"in x&&t(2,r=x.image),"video"in x&&t(3,a=x.video),"location"in x&&t(4,o=x.location),"locationEmoji"in x&&t(5,l=x.locationEmoji),"tags"in x&&t(6,c=x.tags),"github"in x&&t(7,h=x.github),"link"in x&&t(12,f=x.link),"stars"in x&&t(8,u=x.stars),"downloads"in x&&t(9,d=x.downloads),"streamers"in x&&t(10,m=x.streamers)},[n,i,r,a,o,l,c,h,u,d,m,_,f,p]}class Gn extends Xt{constructor(e){super(),$t(this,e,aw,rw,Wt,{title:0,description:1,image:2,video:3,location:4,locationEmoji:5,tags:6,github:7,link:12,stars:8,downloads:9,streamers:10})}}function ow(s){let e,t,n,i,r,a,o,l,c,h,f,u,d,m;return{c(){e=Te("div"),t=Te("div"),n=pn(s[0]),i=Ue(),r=Te("div"),a=Te("div"),o=pn(s[1]),l=Ue(),c=Te("div"),h=Te("div"),f=pn(s[2]),u=pn(`
			-
			`),d=Te("div"),m=pn(s[3]),this.h()},l(_){e=Ce(_,"DIV",{class:!0});var g=at(e);t=Ce(g,"DIV",{class:!0});var p=at(t);n=mn(p,s[0]),p.forEach(ne),i=Ne(g),r=Ce(g,"DIV",{class:!0});var x=at(r);a=Ce(x,"DIV",{class:!0});var v=at(a);o=mn(v,s[1]),v.forEach(ne),l=Ne(x),c=Ce(x,"DIV",{class:!0});var y=at(c);h=Ce(y,"DIV",{class:!0});var R=at(h);f=mn(R,s[2]),R.forEach(ne),u=mn(y,`
			-
			`),d=Ce(y,"DIV",{class:!0});var w=at(d);m=mn(w,s[3]),w.forEach(ne),y.forEach(ne),x.forEach(ne),g.forEach(ne),this.h()},h(){q(t,"class","title svelte-11l95ev"),q(a,"class","location svelte-11l95ev"),q(h,"class","start"),q(d,"class","end"),q(c,"class","years svelte-11l95ev"),q(r,"class","description svelte-11l95ev"),q(e,"class","experience svelte-11l95ev")},m(_,g){Me(_,e,g),ye(e,t),ye(t,n),ye(e,i),ye(e,r),ye(r,a),ye(a,o),ye(r,l),ye(r,c),ye(c,h),ye(h,f),ye(c,u),ye(c,d),ye(d,m)},p(_,[g]){g&1&&Cn(n,_[0]),g&2&&Cn(o,_[1]),g&4&&Cn(f,_[2]),g&8&&Cn(m,_[3])},i:st,o:st,d(_){_&&ne(e)}}}function lw(s,e,t){let{title:n}=e,{location:i}=e,{image:r}=e,{start:a}=e,{end:o}=e;return s.$$set=l=>{"title"in l&&t(0,n=l.title),"location"in l&&t(1,i=l.location),"image"in l&&t(4,r=l.image),"start"in l&&t(2,a=l.start),"end"in l&&t(3,o=l.end)},[n,i,a,o,r]}class Uf extends Xt{constructor(e){super(),$t(this,e,lw,ow,Wt,{title:0,location:1,image:4,start:2,end:3})}}function cw(s){let e,t;return e=new Rm({}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function hw(s){let e,t;return e=new Uc({props:{type:"github",link:"https://github.com/Somfic"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function uw(s){let e,t;return e=new Uc({props:{type:"linkedin",link:"https://www.linkedin.com/in/lvdejong/"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function fw(s){let e,t;return e=new Uc({props:{type:"email",link:"mailto:lucas@somfic.dev"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function dw(s){let e,t;return e=new Um({}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function pw(s){let e,t;return e=new Lm({props:{$$slots:{default:[dw]},$$scope:{ctx:s}}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function mw(s){let e,t,n,i,r;return t=new Uf({props:{title:"HBO Technische Informatica",location:"Avans Hogeschool",image:"avans.png",start:"2021",end:"2024"}}),i=new Uf({props:{title:"HBO Informatica",location:"Avans Hogeschool",image:"avans.png",start:"2019",end:"2021"}}),{c(){e=Te("div"),Ze(t.$$.fragment),n=Ue(),Ze(i.$$.fragment),this.h()},l(a){e=Ce(a,"DIV",{class:!0});var o=at(e);Je(t.$$.fragment,o),n=Ne(o),Je(i.$$.fragment,o),o.forEach(ne),this.h()},h(){q(e,"class","experience svelte-1dry5se")},m(a,o){Me(a,e,o),Ke(t,e,null),ye(e,n),Ke(i,e,null),r=!0},p:st,i(a){r||(De(t.$$.fragment,a),De(i.$$.fragment,a),r=!0)},o(a){Oe(t.$$.fragment,a),Oe(i.$$.fragment,a),r=!1},d(a){a&&ne(e),je(t),je(i)}}}function gw(s){let e,t;return e=new Ff({props:{fit:"cover",url:"walle2.gif"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function _w(s){let e,t;return e=new Ff({props:{url:"location.png"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function vw(s){let e,t;return e=new Gn({props:{title:"EliteAPI",description:".NET API voor het communiceren met het ruimte-spel 'Elite: Dangerous'. Populair bij Twitch-streamers om stemcommando's te gebruiken.",locationEmoji:"school.png",location:"GitHub",image:"eliteapi.png",tags:["C#","Open source"],github:"https://github.com/Somfic/EliteAPI",stars:"100+",downloads:"17.000+",streamers:"10+"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function xw(s){let e,t;return e=new Gn({props:{title:"Boebot",description:"Een robot die door middel van meerdere sensoren zelfstandig lijnen kan volgen, obstakels kan ontwijken en vracht kan vervoeren.",locationEmoji:"avans.png",location:"Avans Hogeschool",image:"boombot.jpg",video:"dejavu.mp4",tags:["Java","Hardware","Scrum"],github:"https://github.com/Somfic/1.2-AutomatischGeleidVoertuig"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function yw(s){let e,t;return e=new Gn({props:{title:"Moviez",description:"Een webapplicatie met een overzicht van films die in mijn lokale bioscoop draaien, aangestuurd door de Kinepolis API.",locationEmoji:"school.png",location:"GitHub",image:"moviez.png",video:"moviez.mp4",tags:["TypeScript","Svelte","SASS","API"],github:"https://github.com/Somfic/moviez"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Mw(s){let e,t;return e=new Gn({props:{title:"Schoolplanner",description:"2D from-scratch grafische applicatie voor het plannen van schoolroosters en het simuleren van drukte op de gangen en in klaslokalen.",locationEmoji:"avans.png",location:"Avans Hogeschool",image:"schoolplanner.png",video:"schoolplanner2.mp4",tags:["Java","Graphics","Scrum"],github:"https://github.com/Somfic/1.3-SchoolPlanner"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Sw(s){let e,t;return e=new Gn({props:{title:"Eiland doolhoven",description:"2.5D from-scratch grafische applicatie voor het genereren van doolhoven op procedureel gegenereerde eilanden.",locationEmoji:"avans.png",location:"Avans Hogeschool",image:"maze.png",video:"maze.mp4",github:"https://github.com/Somfic/Infinity-Alphine",tags:["Java","Graphics","ECS"]}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function bw(s){let e,t;return e=new Gn({props:{title:"Committer",description:"CLI tool om consistente commit-berichten te genereren volgens de Gitmoji richtlijnen.",locationEmoji:"avans.png",location:"GitHub",image:"committer.png",video:"committer.mov",github:"https://github.com/Somfic/committer",tags:["Rust","CLI"]}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function ww(s){let e,t;return e=new Gn({props:{title:"Skool Workshop",description:"Full-stack web applicatie voor het beheren van workshops en inschrijvingen voor 'SkoolWorkshop', een workshop-oraganisatie in Breda.",locationEmoji:"avans.png",location:"Avans Hogeschool",image:"skoolworkshop.png",github:"https://github.com/Somfic/skoolworkshop",tags:["JavaScript","Node.js","MySQL"]}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Ew(s){let e,t;return e=new Gn({props:{title:"Elektronische deurbel",description:"Een elektronische deurbel met een ESP32 microcontroller die audioberichten kan opnemen en afspelen, en via een internetconnectie de radio kan afspelen.",locationEmoji:"avans.png",location:"Avans Hogeschool",image:"dingdong.jpg",video:"dingdong.mp4",github:"https://github.com/Somfic/skoolworkshop",tags:["C++","Hardware","Scrum"]}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Aw(s){let e,t;return e=new Gn({props:{title:"ed-journal",description:"Een EliteAPI rewrite in Rust. Gebruikt om speler-gegevens van het ruimte-spel 'Elite: Dangerous' te analyseren en intressante informatie te extraheren.",locationEmoji:"avans.png",location:"GitHub",image:"edjournal.jpg",github:"https://github.com/rster2002/ed-journals",tags:["Rust"],stars:"2"}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Tw(s){let e,t;return e=new Gn({props:{title:"Spotivibe",description:"Een webapplicatie die de Spotify API gebruikt om muziek live te visualiseren met lichteffecten gebaseerd op tempo, beats en stemming in een 3D-omgeving met Three.js.",locationEmoji:"avans.png",location:"GitHub",image:"spotivibe.png",video:"spotivibe.mp4",github:"https://github.com/Somfic/vibes",tags:["Vue","JavaScript","Three.js"]}}),{c(){Ze(e.$$.fragment)},l(n){Je(e.$$.fragment,n)},m(n,i){Ke(e,n,i),t=!0},p:st,i(n){t||(De(e.$$.fragment,n),t=!0)},o(n){Oe(e.$$.fragment,n),t=!1},d(n){je(e,n)}}}function Cw(s){let e,t,n,i,r,a,o,l,c,h,f,u,d,m,_,g,p,x,v,y,R,w,T,P,b,M,I,O,k,F,K,D,G,z,he,ue,pe,Ve,Qe,Z,oe,_e,le;return e=new vm({}),n=new um({}),r=new mm({}),l=new Bt({props:{width:6,width_m:8,height:2,$$slots:{default:[cw]},$$scope:{ctx:s}}}),h=new Bt({props:{width:3,width_m:4,height:1,$$slots:{default:[hw]},$$scope:{ctx:s}}}),u=new Bt({props:{width:3,width_m:4,height:1,$$slots:{default:[uw]},$$scope:{ctx:s}}}),m=new Bt({props:{width:6,width_m:6,height:1,$$slots:{default:[fw]},$$scope:{ctx:s}}}),g=new Bt({props:{width:12,width_m:12,height:1,$$slots:{default:[pw]},$$scope:{ctx:s}}}),x=new Bt({props:{width:9,width_m:8,height:1,$$slots:{default:[mw]},$$scope:{ctx:s}}}),y=new Bt({props:{width:3,width_m:6,height:1,padding:1,$$slots:{default:[gw]},$$scope:{ctx:s}}}),w=new Bt({props:{width:6,width_m:4,height:2,height_m:1,padding:1,$$slots:{default:[_w]},$$scope:{ctx:s}}}),P=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[vw]},$$scope:{ctx:s}}}),M=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[xw]},$$scope:{ctx:s}}}),O=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[yw]},$$scope:{ctx:s}}}),F=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[Mw]},$$scope:{ctx:s}}}),D=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[Sw]},$$scope:{ctx:s}}}),z=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[bw]},$$scope:{ctx:s}}}),ue=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[ww]},$$scope:{ctx:s}}}),Ve=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[Ew]},$$scope:{ctx:s}}}),Z=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[Aw]},$$scope:{ctx:s}}}),_e=new Bt({props:{width:6,width_m:12,height:3,$$slots:{default:[Tw]},$$scope:{ctx:s}}}),{c(){Ze(e.$$.fragment),t=Ue(),Ze(n.$$.fragment),i=Ue(),Ze(r.$$.fragment),a=Ue(),o=Te("main"),Ze(l.$$.fragment),c=Ue(),Ze(h.$$.fragment),f=Ue(),Ze(u.$$.fragment),d=Ue(),Ze(m.$$.fragment),_=Ue(),Ze(g.$$.fragment),p=Ue(),Ze(x.$$.fragment),v=Ue(),Ze(y.$$.fragment),R=Ue(),Ze(w.$$.fragment),T=Ue(),Ze(P.$$.fragment),b=Ue(),Ze(M.$$.fragment),I=Ue(),Ze(O.$$.fragment),k=Ue(),Ze(F.$$.fragment),K=Ue(),Ze(D.$$.fragment),G=Ue(),Ze(z.$$.fragment),he=Ue(),Ze(ue.$$.fragment),pe=Ue(),Ze(Ve.$$.fragment),Qe=Ue(),Ze(Z.$$.fragment),oe=Ue(),Ze(_e.$$.fragment),this.h()},l(Y){Je(e.$$.fragment,Y),t=Ne(Y),Je(n.$$.fragment,Y),i=Ne(Y),Je(r.$$.fragment,Y),a=Ne(Y),o=Ce(Y,"MAIN",{class:!0});var J=at(o);Je(l.$$.fragment,J),c=Ne(J),Je(h.$$.fragment,J),f=Ne(J),Je(u.$$.fragment,J),d=Ne(J),Je(m.$$.fragment,J),_=Ne(J),Je(g.$$.fragment,J),p=Ne(J),Je(x.$$.fragment,J),v=Ne(J),Je(y.$$.fragment,J),R=Ne(J),Je(w.$$.fragment,J),T=Ne(J),Je(P.$$.fragment,J),b=Ne(J),Je(M.$$.fragment,J),I=Ne(J),Je(O.$$.fragment,J),k=Ne(J),Je(F.$$.fragment,J),K=Ne(J),Je(D.$$.fragment,J),G=Ne(J),Je(z.$$.fragment,J),he=Ne(J),Je(ue.$$.fragment,J),pe=Ne(J),Je(Ve.$$.fragment,J),Qe=Ne(J),Je(Z.$$.fragment,J),oe=Ne(J),Je(_e.$$.fragment,J),J.forEach(ne),this.h()},h(){q(o,"class","svelte-1dry5se")},m(Y,J){Ke(e,Y,J),Me(Y,t,J),Ke(n,Y,J),Me(Y,i,J),Ke(r,Y,J),Me(Y,a,J),Me(Y,o,J),Ke(l,o,null),ye(o,c),Ke(h,o,null),ye(o,f),Ke(u,o,null),ye(o,d),Ke(m,o,null),ye(o,_),Ke(g,o,null),ye(o,p),Ke(x,o,null),ye(o,v),Ke(y,o,null),ye(o,R),Ke(w,o,null),ye(o,T),Ke(P,o,null),ye(o,b),Ke(M,o,null),ye(o,I),Ke(O,o,null),ye(o,k),Ke(F,o,null),ye(o,K),Ke(D,o,null),ye(o,G),Ke(z,o,null),ye(o,he),Ke(ue,o,null),ye(o,pe),Ke(Ve,o,null),ye(o,Qe),Ke(Z,o,null),ye(o,oe),Ke(_e,o,null),le=!0},p(Y,[J]){const Fe={};J&1&&(Fe.$$scope={dirty:J,ctx:Y}),l.$set(Fe);const ot={};J&1&&(ot.$$scope={dirty:J,ctx:Y}),h.$set(ot);const A={};J&1&&(A.$$scope={dirty:J,ctx:Y}),u.$set(A);const ae={};J&1&&(ae.$$scope={dirty:J,ctx:Y}),m.$set(ae);const re={};J&1&&(re.$$scope={dirty:J,ctx:Y}),g.$set(re);const W={};J&1&&(W.$$scope={dirty:J,ctx:Y}),x.$set(W);const V={};J&1&&(V.$$scope={dirty:J,ctx:Y}),y.$set(V);const He={};J&1&&(He.$$scope={dirty:J,ctx:Y}),w.$set(He);const ve={};J&1&&(ve.$$scope={dirty:J,ctx:Y}),P.$set(ve);const we={};J&1&&(we.$$scope={dirty:J,ctx:Y}),M.$set(we);const L={};J&1&&(L.$$scope={dirty:J,ctx:Y}),O.$set(L);const S={};J&1&&(S.$$scope={dirty:J,ctx:Y}),F.$set(S);const H={};J&1&&(H.$$scope={dirty:J,ctx:Y}),D.$set(H);const Q={};J&1&&(Q.$$scope={dirty:J,ctx:Y}),z.$set(Q);const j={};J&1&&(j.$$scope={dirty:J,ctx:Y}),ue.$set(j);const ie={};J&1&&(ie.$$scope={dirty:J,ctx:Y}),Ve.$set(ie);const Be={};J&1&&(Be.$$scope={dirty:J,ctx:Y}),Z.$set(Be);const ge={};J&1&&(ge.$$scope={dirty:J,ctx:Y}),_e.$set(ge)},i(Y){le||(De(e.$$.fragment,Y),De(n.$$.fragment,Y),De(r.$$.fragment,Y),De(l.$$.fragment,Y),De(h.$$.fragment,Y),De(u.$$.fragment,Y),De(m.$$.fragment,Y),De(g.$$.fragment,Y),De(x.$$.fragment,Y),De(y.$$.fragment,Y),De(w.$$.fragment,Y),De(P.$$.fragment,Y),De(M.$$.fragment,Y),De(O.$$.fragment,Y),De(F.$$.fragment,Y),De(D.$$.fragment,Y),De(z.$$.fragment,Y),De(ue.$$.fragment,Y),De(Ve.$$.fragment,Y),De(Z.$$.fragment,Y),De(_e.$$.fragment,Y),le=!0)},o(Y){Oe(e.$$.fragment,Y),Oe(n.$$.fragment,Y),Oe(r.$$.fragment,Y),Oe(l.$$.fragment,Y),Oe(h.$$.fragment,Y),Oe(u.$$.fragment,Y),Oe(m.$$.fragment,Y),Oe(g.$$.fragment,Y),Oe(x.$$.fragment,Y),Oe(y.$$.fragment,Y),Oe(w.$$.fragment,Y),Oe(P.$$.fragment,Y),Oe(M.$$.fragment,Y),Oe(O.$$.fragment,Y),Oe(F.$$.fragment,Y),Oe(D.$$.fragment,Y),Oe(z.$$.fragment,Y),Oe(ue.$$.fragment,Y),Oe(Ve.$$.fragment,Y),Oe(Z.$$.fragment,Y),Oe(_e.$$.fragment,Y),le=!1},d(Y){Y&&(ne(t),ne(i),ne(a),ne(o)),je(e,Y),je(n,Y),je(r,Y),je(l),je(h),je(u),je(m),je(g),je(x),je(y),je(w),je(P),je(M),je(O),je(F),je(D),je(z),je(ue),je(Ve),je(Z),je(_e)}}}class Lw extends Xt{constructor(e){super(),$t(this,e,null,Cw,Wt,{})}}export{Lw as component};
