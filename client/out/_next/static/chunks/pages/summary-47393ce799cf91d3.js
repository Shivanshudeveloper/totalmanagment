(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{9308:function(r,i,t){"use strict";var n=t(5318);i.Z=void 0;var e=n(t(4938)),a=t(5893),o=(0,e.default)((0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");i.Z=o},9903:function(r,i,t){"use strict";var n=t(5318);i.Z=void 0;var e=n(t(4938)),a=t(5893),o=(0,e.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");i.Z=o},6886:function(r,i,t){"use strict";t.d(i,{ZP:function(){return y}});var n=t(3366),e=t(7462),a=t(7294),o=(t(5697),t(6010)),s=t(5408),l=t(9707),c=t(7463),x=t(1496),d=t(3616);var m=a.createContext(),g=t(1420);function h(r){return(0,g.Z)("MuiGrid",r)}const u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=(0,t(1271).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((r=>`spacing-xs-${r}`)),...["column-reverse","column","row-reverse","row"].map((r=>`direction-xs-${r}`)),...["nowrap","wrap-reverse","wrap"].map((r=>`wrap-xs-${r}`)),...u.map((r=>`grid-xs-${r}`)),...u.map((r=>`grid-sm-${r}`)),...u.map((r=>`grid-md-${r}`)),...u.map((r=>`grid-lg-${r}`)),...u.map((r=>`grid-xl-${r}`))]),Z=t(5893);const j=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function P(r){const i=parseFloat(r);return`${i}${String(r).replace(String(i),"")||"px"}`}const f=(0,x.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(r,i)=>{const{container:t,direction:n,item:e,lg:a,md:o,sm:s,spacing:l,wrap:c,xl:x,xs:d,zeroMinWidth:m}=r.ownerState;return[i.root,t&&i.container,e&&i.item,m&&i.zeroMinWidth,t&&0!==l&&i[`spacing-xs-${String(l)}`],"row"!==n&&i[`direction-xs-${String(n)}`],"wrap"!==c&&i[`wrap-xs-${String(c)}`],!1!==d&&i[`grid-xs-${String(d)}`],!1!==s&&i[`grid-sm-${String(s)}`],!1!==o&&i[`grid-md-${String(o)}`],!1!==a&&i[`grid-lg-${String(a)}`],!1!==x&&i[`grid-xl-${String(x)}`]]}})((({ownerState:r})=>(0,e.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"nowrap"===r.wrap&&{flexWrap:"nowrap"},"reverse"===r.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:r,ownerState:i}){return(0,s.k9)({theme:r},i.direction,(r=>{const i={flexDirection:r};return 0===r.indexOf("column")&&(i[`& > .${p.item}`]={maxWidth:"none"}),i}))}),(function({theme:r,ownerState:i}){const{container:t,rowSpacing:n}=i;let e={};return t&&0!==n&&(e=(0,s.k9)({theme:r},n,(i=>{const t=r.spacing(i);return"0px"!==t?{marginTop:`-${P(t)}`,[`& > .${p.item}`]:{paddingTop:P(t)}}:{}}))),e}),(function({theme:r,ownerState:i}){const{container:t,columnSpacing:n}=i;let e={};return t&&0!==n&&(e=(0,s.k9)({theme:r},n,(i=>{const t=r.spacing(i);return"0px"!==t?{width:`calc(100% + ${P(t)})`,marginLeft:`-${P(t)}`,[`& > .${p.item}`]:{paddingLeft:P(t)}}:{}}))),e}),(({theme:r,ownerState:i})=>r.breakpoints.keys.reduce(((t,n)=>(function(r,i,t,n){const a=n[t];if(!a)return;let o={};if(!0===a)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===a)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const r=(0,s.P$)({values:n.columns,base:i.breakpoints.values}),l=Math.round(a/r[t]*1e8)/1e6+"%";let c={};if(n.container&&n.item&&0!==n.columnSpacing){const r=i.spacing(n.columnSpacing);if("0px"!==r){const i=`calc(${l} + ${P(r)})`;c={flexBasis:i,maxWidth:i}}}o=(0,e.Z)({flexBasis:l,flexGrow:0,maxWidth:l},c)}0===i.breakpoints.values[t]?Object.assign(r,o):r[i.breakpoints.up(t)]=o}(t,r,n,i),t)),{})));var y=a.forwardRef((function(r,i){const t=(0,d.Z)({props:r,name:"MuiGrid"}),s=(0,l.Z)(t),{className:x,columns:g,columnSpacing:u,component:p="div",container:P=!1,direction:y="row",item:v=!1,lg:S=!1,md:w=!1,rowSpacing:b,sm:B=!1,spacing:$=0,wrap:M="wrap",xl:W=!1,xs:z=!1,zeroMinWidth:k=!1}=s,C=(0,n.Z)(s,j),D=b||$,L=u||$,N=a.useContext(m),_=g||N||12,E=(0,e.Z)({},s,{columns:_,container:P,direction:y,item:v,lg:S,md:w,sm:B,rowSpacing:D,columnSpacing:L,wrap:M,xl:W,xs:z,zeroMinWidth:k}),O=(r=>{const{classes:i,container:t,direction:n,item:e,lg:a,md:o,sm:s,spacing:l,wrap:x,xl:d,xs:m,zeroMinWidth:g}=r,u={root:["root",t&&"container",e&&"item",g&&"zeroMinWidth",t&&0!==l&&`spacing-xs-${String(l)}`,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==x&&`wrap-xs-${String(x)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==o&&`grid-md-${String(o)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,c.Z)(u,h,i)})(E);return G=(0,Z.jsx)(f,(0,e.Z)({ownerState:E,className:(0,o.Z)(O.root,x),as:p,ref:i},C)),12!==_?(0,Z.jsx)(m.Provider,{value:_,children:G}):G;var G}))},8229:function(r,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/summary",function(){return t(8033)}])},8033:function(r,i,t){"use strict";t.r(i);var n=t(5893),e=t(9008),a=t(1057),o=t(7357),s=t(6886),l=t(6242),c=t(4267),x=t(5861),d=t(7720),m=t(6447),g=t(9308),h=t(9903),u=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.default,{children:(0,n.jsx)("title",{children:"Summary | Material Kit"})}),(0,n.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",marginY:"10px"},children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",pb:3},children:(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},xs:12,children:[(0,n.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:"Supervitory Organization"}),(0,n.jsxs)(x.Z,{align:"left",color:"textPrimary",variant:"body2",children:["Hr supply chain (Brand Lindsey)"," "]})]}),(0,n.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:"Location"}),(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body2",children:"699 Marlboro DC"})]}),(0,n.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:"Manager"}),(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body2",children:"Brandy Linseney"})]}),(0,n.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:"Employee ID"}),(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body2",children:"83408140"})]})]})})})}),(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",marginY:"10px"},children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h5",children:"Education"}),(0,n.jsxs)(s.ZP,{item:!0,xs:12,sx:{paddingY:"10px"},children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:"National Volunteer Service"}),(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body2",children:"American red cross - Present - 6 Months"})]}),(0,n.jsx)(d.Z,{}),(0,n.jsxs)(s.ZP,{item:!0,xs:12,sx:{paddingY:"10px"},children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:"National Volunteer Service"}),(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body2",children:"American red cross - Present - 6 Months"})]}),(0,n.jsx)(d.Z,{}),(0,n.jsx)(a.Z,{variant:"contained",component:"span",sx:{width:"100%",textAlign:"center",marginY:"20px"},children:"Add"}),(0,n.jsx)(x.Z,{align:"center",color:"textPrimary",gutterBottom:!0,variant:"h5"}),(0,n.jsx)(x.Z,{align:"center",color:"textPrimary",variant:"body1"})]})}),(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",marginY:"10px"},children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h5",children:"Upload my Experience"}),(0,n.jsx)(a.Z,{variant:"contained",component:"span",children:"Upload"})]})})]}),(0,n.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",marginY:"10px"},children:(0,n.jsx)(c.Z,{children:(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:7},children:[(0,n.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Job Details"}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Employee ID"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"23841300"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Supervisiory Organization"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"Nocovda Top Supervisor Org"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Position"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"Recurting Coord 1"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Business Title"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"Recurting Coord 1"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Job Profile"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"Recurting Coord 1"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Location"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsxs)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:[(0,n.jsx)(g.Z,{}),"699 Malboro"]})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Employee Type"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"Regular"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Hire Date"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"12/12/2020"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Original Hire Date"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"12/12/2020"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Continuous Service Date"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"12/12/2020"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Management Level"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"Level 12 - Individual Contributor Track"})]})]}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Length of Service"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:"0 year(s), 11 Month(s), 23 Day(s)"})]})]})]}),(0,n.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Contact Information - Public"}),(0,n.jsxs)(s.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[(0,n.jsx)(s.ZP,{item:!0,xs:4,children:(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Email"})}),(0,n.jsxs)(s.ZP,{item:!0,xs:8,children:[" ",(0,n.jsxs)(x.Z,{align:"left",color:"textPrimary",variant:"body1",children:[(0,n.jsx)(h.Z,{}),"prathmeshsadake@gmail.com"]})]})]}),(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h6",children:"Work Address"}),(0,n.jsxs)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:[(0,n.jsx)(g.Z,{}),"714 Lowes Alley, Saint Clairsville Ohio, United States"]})]})]})})}),(0,n.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column"},children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"h5",children:"Job History"}),(0,n.jsx)(o.Z,{sx:{display:"flex",pb:3},children:(0,n.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",gutterBottom:!0,variant:"body1",children:"National Volunteer Service"}),(0,n.jsx)(x.Z,{align:"left",color:"textPrimary",variant:"body2",children:"American red cross - Present - 6 Months"})]})})]})})]})]})})]})};u.getLayout=function(r){return(0,n.jsx)(m.c,{children:r})},i.default=u}},function(r){r.O(0,[979,573,43,447,774,888,179],(function(){return i=8229,r(r.s=i);var i}));var i=r.O();_N_E=i}]);