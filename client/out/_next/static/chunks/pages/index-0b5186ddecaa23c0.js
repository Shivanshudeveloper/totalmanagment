(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{49:function(e,i,n){"use strict";var s=n(5318);i.Z=void 0;var t=s(n(4938)),r=n(5893),a=(0,t.default)((0,r.jsx)("path",{d:"m19.77 5.03 1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"}),"DoneOutline");i.Z=a},7976:function(e,i,n){"use strict";var s=n(5318);i.Z=void 0;var t=s(n(4938)),r=n(5893),a=(0,t.default)((0,r.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");i.Z=a},8445:function(e,i,n){"use strict";n.d(i,{Z:function(){return f}});var s=n(3366),t=n(7462),r=n(7294),a=(n(5697),n(6010)),d=n(7463),l=n(5861),o=n(3616),c=n(1496),x=n(1420);function h(e){return(0,x.Z)("MuiCardHeader",e)}var p=(0,n(1271).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),j=n(5893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Z=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,i)=>(0,t.Z)({[`& .${p.title}`]:i.title,[`& .${p.subheader}`]:i.subheader},i.root)})({display:"flex",alignItems:"center",padding:16}),u=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,i)=>i.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,i)=>i.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,i)=>i.content})({flex:"1 1 auto"});var f=r.forwardRef((function(e,i){const n=(0,o.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:c,className:x,component:p="div",disableTypography:f=!1,subheader:y,subheaderTypographyProps:b,title:T,titleTypographyProps:C}=n,P=(0,s.Z)(n,m),k=(0,t.Z)({},n,{component:p,disableTypography:f}),w=(e=>{const{classes:i}=e;return(0,d.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,i)})(k);let N=T;null==N||N.type===l.Z||f||(N=(0,j.jsx)(l.Z,(0,t.Z)({variant:c?"body2":"h5",className:w.title,component:"span",display:"block"},C,{children:N})));let M=y;return null==M||M.type===l.Z||f||(M=(0,j.jsx)(l.Z,(0,t.Z)({variant:c?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},b,{children:M}))),(0,j.jsxs)(Z,(0,t.Z)({className:(0,a.Z)(w.root,x),as:p,ref:i,ownerState:k},P,{children:[c&&(0,j.jsx)(u,{className:w.avatar,ownerState:k,children:c}),(0,j.jsxs)(v,{className:w.content,ownerState:k,children:[N,M]}),r&&(0,j.jsx)(g,{className:w.action,ownerState:k,children:r})]}))}))},7948:function(e,i,n){"use strict";n.d(i,{Z:function(){return Z}});var s=n(3366),t=n(7462),r=n(7294),a=(n(5697),n(6010)),d=n(7463),l=n(3616),o=n(1496),c=n(1420);function x(e){return(0,c.Z)("MuiContainer",e)}(0,n(1271).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var h=n(8216),p=n(5893);const j=["className","component","disableGutters","fixed","maxWidth"],m=(0,o.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:n}=e;return[i.root,i[`maxWidth${(0,h.Z)(String(n.maxWidth))}`],n.fixed&&i.fixed,n.disableGutters&&i.disableGutters]}})((({theme:e,ownerState:i})=>(0,t.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:i})=>i.fixed&&Object.keys(e.breakpoints.values).reduce(((i,n)=>{const s=e.breakpoints.values[n];return 0!==s&&(i[e.breakpoints.up(n)]={maxWidth:`${s}${e.breakpoints.unit}`}),i}),{})),(({theme:e,ownerState:i})=>(0,t.Z)({},"xs"===i.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},i.maxWidth&&"xs"!==i.maxWidth&&{[e.breakpoints.up(i.maxWidth)]:{maxWidth:`${e.breakpoints.values[i.maxWidth]}${e.breakpoints.unit}`}})));var Z=r.forwardRef((function(e,i){const n=(0,l.Z)({props:e,name:"MuiContainer"}),{className:r,component:o="div",disableGutters:c=!1,fixed:Z=!1,maxWidth:u="lg"}=n,g=(0,s.Z)(n,j),v=(0,t.Z)({},n,{component:o,disableGutters:c,fixed:Z,maxWidth:u}),f=(e=>{const{classes:i,fixed:n,disableGutters:s,maxWidth:t}=e,r={root:["root",t&&`maxWidth${(0,h.Z)(String(t))}`,n&&"fixed",s&&"disableGutters"]};return(0,d.Z)(r,x,i)})(v);return(0,p.jsx)(m,(0,t.Z)({as:o,ownerState:v,className:(0,a.Z)(f.root,r),ref:i},g))}))},2882:function(e,i,n){"use strict";n.d(i,{Z:function(){return m}});var s=n(7462),t=n(3366),r=n(7294),a=(n(5697),n(6010)),d=n(7463),l=n(3616),o=n(1496),c=n(1420);function x(e){return(0,c.Z)("MuiTableContainer",e)}(0,n(1271).Z)("MuiTableContainer",["root"]);var h=n(5893);const p=["className","component"],j=(0,o.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,i)=>i.root})({width:"100%",overflowX:"auto"});var m=r.forwardRef((function(e,i){const n=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:o="div"}=n,c=(0,t.Z)(n,p),m=(0,s.Z)({},n,{component:o}),Z=(e=>{const{classes:i}=e;return(0,d.Z)({root:["root"]},x,i)})(m);return(0,h.jsx)(j,(0,s.Z)({ref:i,as:o,className:(0,a.Z)(Z.root,r),ownerState:m},c))}))},8581:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3486)}])},3486:function(e,i,n){"use strict";n.r(i);var s=n(5893),t=n(9008),r=n(7357),a=n(7948),d=n(5861),l=n(6886),o=n(9661),c=n(6242),x=n(8445),h=n(3193),p=(n(786),n(2753),n(7624)),j=n(4557),m=n(4096),Z=n(2844),u=n(4821),g=n(430),v=n(7906),f=n(295),y=n(8102),b=n(2882),T=n(3184),C=n(3816),P=n(5113),k=n(7976),w=n(49);function N(e,i,n,s,t){return{name:e,calories:i,fat:n,carbs:s,protein:t}}var M=[N("Frozen yoghurt",159,6,24,4),N("Ice cream sandwich",237,9,37,4.3),N("Eclair",262,16,24,6),N("Cupcake",305,3.7,67,4.3),N("Gingerbread",356,16,49,3.9)],D=[{title:"Office Management",desc:"1 open tasks, 9 tasks completed"},{title:"Project Management",desc:"2 open tasks, 4 tasks completed"},{title:"Video Calling App",desc:"3 open tasks, 13 tasks completed"},{title:"Digital Marketplace",desc:"1 open tasks, 19 tasks completed"}],W=[{id:"#INV-0001",client:"Global Technologies",dueDate:"11 Mar 2019",total:"$380",status:"Partially Paid"},{id:"#INV-0001",client:"T Technologies",dueDate:"11 Mar 2019",total:"$380",status:"Unpaid"},{id:"#INV-0001",client:"Docsup Technologies",dueDate:"11 Mar 2019",total:"$380",status:"Paid"}],R=[{id:"#INV-0001",client:"Global Technologies",dueDate:"11 Mar 2019",paymentType:"Paypal",paidAmount:"$380"},{id:"#INV-0001",client:"T Technologies",dueDate:"11 Mar 2019",paymentType:"Paypal",paidAmount:"$380"},{id:"#INV-0001",client:"Docsup Technologies",dueDate:"11 Mar 2019",paymentType:"Paypal",paidAmount:"$380"}],S=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.default,{children:(0,s.jsx)("title",{children:"Dashboard | Material Kit"})}),(0,s.jsx)(r.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,s.jsxs)(a.Z,{maxWidth:!1,children:[(0,s.jsx)(d.Z,{gutterBottom:!0,variant:"h5",children:"Welcome Admin!"}),(0,s.jsx)(d.Z,{gutterBottom:!0,variant:"h6",children:"Dashboard"}),(0,s.jsxs)(l.ZP,{container:!0,spacing:3,children:[(0,s.jsx)(l.ZP,{item:!0,lg:3,sm:6,xl:3,xs:12,children:(0,s.jsx)(h.k,{})}),(0,s.jsx)(l.ZP,{item:!0,xl:3,lg:3,sm:6,xs:12,children:(0,s.jsx)(m.D,{})}),(0,s.jsx)(l.ZP,{item:!0,xl:3,lg:3,sm:6,xs:12,children:(0,s.jsx)(j.W,{})}),(0,s.jsx)(l.ZP,{item:!0,xl:3,lg:3,sm:6,xs:12,children:(0,s.jsx)(Z.J,{sx:{height:"100%"}})}),(0,s.jsx)(l.ZP,{item:!0,xs:6,children:(0,s.jsx)(p.x,{})}),(0,s.jsx)(l.ZP,{item:!0,xs:6,children:(0,s.jsx)(u.ZP,{})}),(0,s.jsx)(l.ZP,{item:!0,sm:3,children:(0,s.jsxs)(a.Z,{sx:{backgroundColor:"#fff",padding:"1rem"},children:[(0,s.jsx)(d.Z,{variant:"body2",children:"New Employees"}),(0,s.jsx)(d.Z,{variant:"h5",children:"10"}),(0,s.jsx)(d.Z,{variant:"body1",children:"Overall Employees 218"})]})}),(0,s.jsx)(l.ZP,{item:!0,sm:3,children:(0,s.jsxs)(a.Z,{sx:{backgroundColor:"#fff",padding:"1rem"},children:[(0,s.jsx)(d.Z,{variant:"body2",children:"New Employees"}),(0,s.jsx)(d.Z,{variant:"h5",children:"10"}),(0,s.jsx)(d.Z,{variant:"body1",children:"Overall Employees 218"})]})}),(0,s.jsx)(l.ZP,{item:!0,sm:3,children:(0,s.jsxs)(a.Z,{sx:{backgroundColor:"#fff",padding:"1rem"},children:[(0,s.jsx)(d.Z,{variant:"body2",children:"New Employees"}),(0,s.jsx)(d.Z,{variant:"h5",children:"10"}),(0,s.jsx)(d.Z,{variant:"body1",children:"Overall Employees 218"})]})}),(0,s.jsx)(l.ZP,{item:!0,sm:3,children:(0,s.jsxs)(a.Z,{sx:{backgroundColor:"#fff",padding:"1rem"},children:[(0,s.jsx)(d.Z,{variant:"body2",children:"New Employees"}),(0,s.jsx)(d.Z,{variant:"h5",children:"10"}),(0,s.jsx)(d.Z,{variant:"body1",children:"Overall Employees 218"})]})}),(0,s.jsx)(l.ZP,{item:!0,sm:4,children:(0,s.jsxs)(a.Z,{sx:{backgroundColor:"#fff",padding:"1rem"},children:[(0,s.jsx)(d.Z,{children:"Statistics"}),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem",padding:"1rem",border:"0.5px solid #e0e0e0"},children:[(0,s.jsx)("div",{children:"Today Leave"}),(0,s.jsx)("div",{children:"28/84"})]})," ",(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem",padding:"1rem",border:"0.5px solid #e0e0e0"},children:[(0,s.jsx)("div",{children:"Pending Invoice"}),(0,s.jsx)("div",{children:"6/12"})]})," ",(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem",padding:"1rem",border:"0.5px solid #e0e0e0"},children:[(0,s.jsx)("div",{children:"Completed Projects"}),(0,s.jsx)("div",{children:"61/122"})]})," ",(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem",padding:"1rem",border:"0.5px solid #e0e0e0"},children:[(0,s.jsx)("div",{children:"Open Tickets"}),(0,s.jsx)("div",{children:"36/212"})]})," "]})}),(0,s.jsx)(l.ZP,{item:!0,sm:4,children:(0,s.jsxs)(a.Z,{sx:{backgroundColor:"#fff",padding:"1rem"},children:[(0,s.jsx)(d.Z,{variant:"h5",children:"Task Statistics"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsxs)("div",{style:{padding:"1rem",border:"0.5px solid #e0e0e0",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)(d.Z,{variant:"body1",children:"Total Tasks "}),(0,s.jsx)(d.Z,{variant:"h5",children:"385"})]}),(0,s.jsxs)("div",{style:{padding:"1rem",border:"0.5px solid #e0e0e0",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)(d.Z,{variant:"body1",children:"Overdue Tasks"}),(0,s.jsx)(d.Z,{variant:"h5",children:"15"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem"},children:[(0,s.jsx)("div",{children:"Completed Tasks"}),(0,s.jsx)("div",{children:"166"})]}),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem"},children:[(0,s.jsx)("div",{children:" Inprogress Tasks"}),(0,s.jsx)("div",{children:"126"})]})," ",(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem"},children:[(0,s.jsx)("div",{children:"On Hold Tasks"}),(0,s.jsx)("div",{children:"6"})]})," ",(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem"},children:[(0,s.jsx)("div",{children:"Pending Tasks"}),(0,s.jsx)("div",{children:"29"})]}),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:".5rem"},children:[(0,s.jsx)("div",{children:"Review Tasks"}),(0,s.jsx)("div",{children:"89"})]})]})]})]})}),(0,s.jsx)(l.ZP,{item:!0,sm:4,children:(0,s.jsxs)(a.Z,{sx:{backgroundColor:"#fff",padding:"1rem"},children:[(0,s.jsx)(d.Z,{variant:"h5",children:"Today Absent"}),(0,s.jsxs)("div",{style:{border:"0.25px solid #e0e0e0",padding:"1rem",marginTop:"10px"},children:[(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[(0,s.jsx)(o.Z,{sx:{width:35,height:35,marginRight:"5px"}}),(0,s.jsx)("div",{style:{padding:"5px"},children:(0,s.jsx)(d.Z,{variant:"body1",children:"John Doe"})})]}),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d.Z,{variant:"body1",children:"4 Sep 2019"}),(0,s.jsx)(d.Z,{variant:"body2",children:"Leave Date"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{style:{backgroundColor:"#FFE5E8",color:"#FF0000",borderRadius:"3px",padding:"2px 4px",fontSize:"12px"},children:"Pending"})})]})]}),(0,s.jsxs)("div",{style:{border:"0.25px solid #e0e0e0",padding:"1rem",marginTop:"10px"},children:[(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[(0,s.jsx)(o.Z,{sx:{width:35,height:35,marginRight:"5px"}}),(0,s.jsx)("div",{style:{padding:"5px"},children:(0,s.jsx)(d.Z,{variant:"body1",children:"John Doe"})})]}),(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d.Z,{variant:"body1",children:"4 Sep 2019"}),(0,s.jsx)(d.Z,{variant:"body2",children:"Leave Date"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{style:{backgroundColor:"#FFE5E8",color:"#FF0000",borderRadius:"3px",padding:"2px 4px",fontSize:"12px"},children:"Pending"})})]})]})]})}),(0,s.jsx)(l.ZP,{item:!0,xs:6,children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(x.Z,{title:"Invoices"}),(0,s.jsx)(b.Z,{component:P.Z,children:(0,s.jsxs)(v.Z,{sx:{minWidth:"100%"},"aria-label":"simple table",children:[(0,s.jsx)(T.Z,{children:(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(y.Z,{children:"Invoice ID"}),(0,s.jsx)(y.Z,{align:"left",children:"Client"}),(0,s.jsx)(y.Z,{align:"left",children:"Due Date"}),(0,s.jsx)(y.Z,{align:"left",children:"Total"}),(0,s.jsx)(y.Z,{align:"left",children:"Status"})]})}),(0,s.jsx)(f.Z,{children:W.map((function(e){return(0,s.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,s.jsx)(y.Z,{component:"th",scope:"row",children:e.id}),(0,s.jsx)(y.Z,{align:"left",children:e.client}),(0,s.jsx)(y.Z,{align:"left",children:e.dueDate}),(0,s.jsx)(y.Z,{align:"left",children:e.total}),(0,s.jsx)(y.Z,{align:"left",children:e.status})]},e.id)}))})]})})]})}),(0,s.jsx)(l.ZP,{item:!0,xs:6,children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(x.Z,{title:"Payments"}),(0,s.jsx)(b.Z,{component:P.Z,children:(0,s.jsxs)(v.Z,{sx:{minWidth:"100%"},"aria-label":"simple table",children:[(0,s.jsx)(T.Z,{children:(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(y.Z,{children:"Invoice ID"}),(0,s.jsx)(y.Z,{align:"left",children:"Client"}),(0,s.jsx)(y.Z,{align:"left",children:"Payment Type"}),(0,s.jsx)(y.Z,{align:"left",children:"Paid Date"}),(0,s.jsx)(y.Z,{align:"left",children:"Paid Amount"})]})}),(0,s.jsx)(f.Z,{children:R.map((function(e){return(0,s.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,s.jsx)(y.Z,{component:"th",scope:"row",children:e.id}),(0,s.jsx)(y.Z,{align:"left",children:e.client}),(0,s.jsx)(y.Z,{align:"left",children:e.paymentType}),(0,s.jsx)(y.Z,{align:"left",children:e.dueDate}),(0,s.jsx)(y.Z,{align:"left",children:e.paymentType})]},e.id)}))})]})})]})}),(0,s.jsxs)(l.ZP,{item:!0,xs:6,children:[(0,s.jsx)(c.Z,{children:(0,s.jsx)(x.Z,{title:"Clients"})}),(0,s.jsx)(b.Z,{component:P.Z,children:(0,s.jsxs)(v.Z,{sx:{minWidth:"100%"},"aria-label":"simple table",children:[(0,s.jsx)(T.Z,{children:(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(y.Z,{children:"Name"}),(0,s.jsx)(y.Z,{align:"right",children:"Email"}),(0,s.jsx)(y.Z,{align:"right",children:"Status"})]})}),(0,s.jsx)(f.Z,{children:M.map((function(e){return(0,s.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,s.jsx)(y.Z,{component:"th",scope:"row",children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",backgroundColor:"#fff"},children:[(0,s.jsx)(o.Z,{sx:{width:35,height:35,marginRight:"5px"}}),(0,s.jsxs)("div",{style:{padding:"5px"},children:[(0,s.jsx)(d.Z,{variant:"body1",children:"John Doe"}),(0,s.jsx)(d.Z,{gutterBottom:!0,variant:"body2",children:"CEO"})]})]})}),(0,s.jsx)(y.Z,{align:"right",children:"johndoe@domainname.com"}),(0,s.jsx)(y.Z,{align:"right",children:"Active"})]},e.name)}))})]})})]}),(0,s.jsx)(l.ZP,{item:!0,xs:6,children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(x.Z,{title:"Recent Projects"}),(0,s.jsx)(b.Z,{component:P.Z,children:(0,s.jsxs)(v.Z,{sx:{Width:"100%"},"aria-label":"simple table",children:[(0,s.jsx)(T.Z,{children:(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(y.Z,{children:"Project Name "}),(0,s.jsx)(y.Z,{align:"right",children:"Progress"}),(0,s.jsx)(y.Z,{align:"right",children:"Action"})]})}),(0,s.jsx)(f.Z,{children:D.map((function(e){return(0,s.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,s.jsxs)(y.Z,{component:"th",scope:"row",children:[(0,s.jsx)(d.Z,{variant:"h6",children:e.title}),(0,s.jsx)(d.Z,{variant:"body2",children:e.desc})]}),(0,s.jsx)(y.Z,{align:"center",children:(0,s.jsx)(w.Z,{})}),(0,s.jsx)(y.Z,{align:"center",children:(0,s.jsx)(k.Z,{})})]},e.title)}))})]})})]})})]})]})})]})};S.getLayout=function(e){return(0,s.jsx)(g.c,{children:e})},i.default=S}},function(e){e.O(0,[570,517,785,633,898,611,22,719,430,977,774,888,179],(function(){return i=8581,e(e.s=i);var i}));var i=e.O();_N_E=i}]);