import{h as V,text as w}from"hyperapp";var p=0,h=1,m=2,y=3,C=4,u=5,A=6,I=7,G=8,L=9,E=i=>i==" "||i=="	"||i==`
`||i=="\r",X=(i,l)=>{let r,R,n,P,o=[],s,t="",e=p,g=!0,T=f=>(f||f===0)&&o.push(typeof f=="string"?w(f):typeof f=="number"?w(""+f):f),S=(f,c=f.flat(2))=>{T(r.call?r(n,c):V(r,n,c)),e=p},a=f=>{f&&(t=t.trimEnd()),t&&T(t),g=!1,t=""},N=()=>{P=[o,r,n,P],o=[],e=p},O=(f=e)=>{r=t,t="",n={},e=f},d=(f=e)=>{n[t]=!0,e=f,t=""},b=f=>{n[R]=f,e=u,t=""},M=()=>{let f=o;[o,r,n,P]=P,S(f)};for(let f=0;f<i.length;f++){for(let c=0;c<i[f].length;c++)s=i[f][c],e==p?s=="<"?e=m:E(s)?s==`
`?g=!0:g||(e=h,t=s):(e=h,t=s):e==h?s=="<"?e=m:s==`
`?(a(!1),g=!0,e=p):t+=s:e==m?s=="/"?(e=y,a(!0)):(e=C,a(!1),t=s):e==y?s==">"&&M():e==C?E(s)?O(u):s=="/"?O(A):s==">"?(O(),N()):t+=s:e==A?s==">"&&S([]):e==u?s=="."||(s=="/"?e=A:s==">"?N():E(s)||(t=s,e=I)):e==I?s=="="?(R=t,e=G):s==">"?(d(),N()):s=="/"?d(A):E(s)?d(u):t+=s:e==G?s=='"'&&(e=L,t=""):e==L&&(s=='"'?b(t):t+=s);e==m?(r=l[f],n={},e=u):e==h?(a(!l[f]),T(l[f])):e==u?n={...n,...l[f]}:e==G?b(l[f]):e==L?t+=l[f]:e==p&&l[f]!=null&&T(l[f])}return o=o.flat(2),o.length>1?o:o[0]},F=(i,...l)=>X(i,l);export{F as default};
//# sourceMappingURL=index.mjs.map
