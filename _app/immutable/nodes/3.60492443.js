import{s as J,c as T,n as S}from"../chunks/scheduler.f3763ce3.js";import{S as K,i as B,g,s as x,m as V,h as _,j as w,c as y,n as I,f,x as F,k as c,a as E,y as l,o as M,r as k,z as N,u as P,v as q,d as C,t as G,w as H}from"../chunks/index.5d2ffcdc.js";const Q=!1,W=Q,X=W,Y=!0,se=Object.freeze(Object.defineProperty({__proto__:null,csr:X,prerender:Y},Symbol.toStringTag,{value:"Module"}));function Z(d){let e,t,s,o,r,n,a,i,m,p,L,v,b,R='<button class="text-white">Github Repo</button>';return{c(){e=g("div"),t=g("img"),o=x(),r=g("div"),n=g("h4"),a=V(d[1]),i=x(),m=g("p"),p=V(d[2]),L=x(),v=g("a"),b=g("div"),b.innerHTML=R,this.h()},l(h){e=_(h,"DIV",{class:!0});var u=w(e);t=_(u,"IMG",{height:!0,class:!0,src:!0,alt:!0}),o=y(u),r=_(u,"DIV",{class:!0});var j=w(r);n=_(j,"H4",{class:!0});var D=w(n);a=I(D,d[1]),D.forEach(f),i=y(j),m=_(j,"P",{class:!0});var U=w(m);p=I(U,d[2]),U.forEach(f),L=y(j),v=_(j,"A",{href:!0});var A=w(v);b=_(A,"DIV",{class:!0,["data-svelte-h"]:!0}),F(b)!=="svelte-1p375vh"&&(b.innerHTML=R),A.forEach(f),j.forEach(f),u.forEach(f),this.h()},h(){c(t,"height","48"),c(t,"class","object-cover overflow-hidden rounded-md mt-3 w-full h-48"),T(t.src,s=d[0])||c(t,"src",s),c(t,"alt","Project"),c(n,"class","mb-3 text-xl font-semibold tracking-tight text-sky-300"),c(m,"class","mb-2 leading-normal text-white"),c(b,"class","m-5 p-3 bg-slate-700 rounded-md flex flex-1 justify-center"),c(v,"href",d[3]),c(r,"class","px-6 py-4"),c(e,"class","max-w-xs rounded-md bg-[#b7bdf8] dark:bg-[#24273a]")},m(h,u){E(h,e,u),l(e,t),l(e,o),l(e,r),l(r,n),l(n,a),l(r,i),l(r,m),l(m,p),l(r,L),l(r,v),l(v,b)},p(h,[u]){u&1&&!T(t.src,s=h[0])&&c(t,"src",s),u&2&&M(a,h[1]),u&4&&M(p,h[2]),u&8&&c(v,"href",h[3])},i:S,o:S,d(h){h&&f(e)}}}function $(d,e,t){let{imageSrc:s}=e,{title:o}=e,{description:r}=e,{projectURL:n}=e;return d.$$set=a=>{"imageSrc"in a&&t(0,s=a.imageSrc),"title"in a&&t(1,o=a.title),"description"in a&&t(2,r=a.description),"projectURL"in a&&t(3,n=a.projectURL)},[s,o,r,n]}class z extends K{constructor(e){super(),B(this,e,$,Z,J,{imageSrc:0,title:1,description:2,projectURL:3})}}const O=""+new URL("../assets/japdict.38bc6637.png",import.meta.url).href;function ee(d){let e,t,s,o,r,n,a;return o=new z({props:{imageSrc:O,title:"JapDict",description:"A japanese dictionary made in Vala with GTK 4 and Libadwaita",projectURL:"https://github.com/minemobs/japdict"}}),n=new z({props:{imageSrc:O,title:"This website",description:"A small portfolio of my current projects",projectURL:"https://github.com/minemobs/minemobs.github.io"}}),{c(){e=g("meta"),t=x(),s=g("div"),k(o.$$.fragment),r=x(),k(n.$$.fragment),this.h()},l(i){const m=N("svelte-1ds1qyu",document.head);e=_(m,"META",{name:!0,content:!0}),m.forEach(f),t=y(i),s=_(i,"DIV",{class:!0});var p=w(s);P(o.$$.fragment,p),r=y(p),P(n.$$.fragment,p),p.forEach(f),this.h()},h(){document.title="About",c(e,"name","description"),c(e,"content","About this app"),c(s,"class","flex flex-1 justify-center items-center gap-20")},m(i,m){l(document.head,e),E(i,t,m),E(i,s,m),q(o,s,null),l(s,r),q(n,s,null),a=!0},p:S,i(i){a||(C(o.$$.fragment,i),C(n.$$.fragment,i),a=!0)},o(i){G(o.$$.fragment,i),G(n.$$.fragment,i),a=!1},d(i){i&&(f(t),f(s)),f(e),H(o),H(n)}}}class re extends K{constructor(e){super(),B(this,e,null,ee,J,{})}}export{re as component,se as universal};
