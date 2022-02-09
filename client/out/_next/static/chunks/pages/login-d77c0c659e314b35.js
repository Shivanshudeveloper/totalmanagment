(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6815:function(e,r,i){"use strict";i.d(r,{Z:function(){return g}});var o=i(3366),n=i(7462),t=i(7294),l=(i(5697),i(6010)),a=i(7463),s=i(5704),d=i(4423),u=i(1496),c=i(8216),m=i(1420);function h(e){return(0,m.Z)("MuiFormHelperText",e)}var p=(0,i(1271).Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),x=i(3616),f=i(5893);const Z=["children","className","component","disabled","error","filled","focused","margin","required","variant"],v=(0,u.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e;return[r.root,i.size&&r[`size${(0,c.Z)(i.size)}`],i.contained&&r.contained,i.filled&&r.filled]}})((({theme:e,ownerState:r})=>(0,n.Z)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${p.disabled}`]:{color:e.palette.text.disabled},[`&.${p.error}`]:{color:e.palette.error.main}},"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})));var g=t.forwardRef((function(e,r){const i=(0,x.Z)({props:e,name:"MuiFormHelperText"}),{children:t,className:u,component:m="p"}=i,p=(0,o.Z)(i,Z),g=(0,d.Z)(),w=(0,s.Z)({props:i,muiFormControl:g,states:["variant","size","disabled","error","filled","focused","required"]}),b=(0,n.Z)({},i,{component:m,contained:"filled"===w.variant||"outlined"===w.variant,variant:w.variant,size:w.size,disabled:w.disabled,error:w.error,filled:w.filled,focused:w.focused,required:w.required}),C=(e=>{const{classes:r,contained:i,size:o,disabled:n,error:t,filled:l,focused:s,required:d}=e,u={root:["root",n&&"disabled",t&&"error",o&&`size${(0,c.Z)(o)}`,i&&"contained",s&&"focused",l&&"filled",d&&"required"]};return(0,a.Z)(u,h,r)})(b);return(0,f.jsx)(v,(0,n.Z)({as:m,ownerState:b,className:(0,l.Z)(C.root,u),ref:r},p,{children:" "===t?(0,f.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):t}))}))},135:function(e,r,i){"use strict";i.d(r,{Z:function(){return j}});var o=i(7462),n=i(3366),t=i(7294),l=(i(5697),i(6010)),a=i(7463),s=i(1496),d=i(3616),u=i(89),c=i(8288),m=i(7058),h=i(3841),p=i(4054),x=i(6815),f=i(5018),Z=i(1420);function v(e){return(0,Z.Z)("MuiTextField",e)}(0,i(1271).Z)("MuiTextField",["root"]);var g=i(5893);const w=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],b={standard:u.Z,filled:c.Z,outlined:m.Z},C=(0,s.ZP)(p.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,r)=>r.root})({});var j=t.forwardRef((function(e,r){const i=(0,d.Z)({props:e,name:"MuiTextField"}),{autoComplete:s,autoFocus:u=!1,children:c,className:m,color:p="primary",defaultValue:Z,disabled:j=!1,error:y=!1,FormHelperTextProps:L,fullWidth:F=!1,helperText:S,id:P,InputLabelProps:T,inputProps:R,InputProps:q,inputRef:_,label:z,maxRows:M,minRows:B,multiline:N=!1,name:I,onBlur:W,onChange:k,onFocus:H,placeholder:E,required:$=!1,rows:V,select:A=!1,SelectProps:G,type:D,value:O,variant:X="outlined"}=i,K=(0,n.Z)(i,w),U=(0,o.Z)({},i,{autoFocus:u,color:p,disabled:j,error:y,fullWidth:F,multiline:N,required:$,select:A,variant:X}),J=(e=>{const{classes:r}=e;return(0,a.Z)({root:["root"]},v,r)})(U);const Q={};if("outlined"===X&&(T&&"undefined"!==typeof T.shrink&&(Q.notched=T.shrink),z)){var Y;const e=null!=(Y=null==T?void 0:T.required)?Y:$;Q.label=(0,g.jsxs)(t.Fragment,{children:[z,e&&"\xa0*"]})}A&&(G&&G.native||(Q.id=void 0),Q["aria-describedby"]=void 0);const ee=S&&P?`${P}-helper-text`:void 0,re=z&&P?`${P}-label`:void 0,ie=b[X],oe=(0,g.jsx)(ie,(0,o.Z)({"aria-describedby":ee,autoComplete:s,autoFocus:u,defaultValue:Z,fullWidth:F,multiline:N,name:I,rows:V,maxRows:M,minRows:B,type:D,value:O,id:P,inputRef:_,onBlur:W,onChange:k,onFocus:H,placeholder:E,inputProps:R},Q,q));return(0,g.jsxs)(C,(0,o.Z)({className:(0,l.Z)(J.root,m),disabled:j,error:y,fullWidth:F,ref:r,required:$,color:p,variant:X,ownerState:U},K,{children:[z&&(0,g.jsx)(h.Z,(0,o.Z)({htmlFor:P,id:re},T,{children:z})),A?(0,g.jsx)(f.Z,(0,o.Z)({"aria-describedby":ee,id:P,labelId:re,value:O,input:oe},G,{children:c})):oe,S&&(0,g.jsx)(x.Z,(0,o.Z)({id:ee},L,{children:S}))]}))}))},7156:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return i(6964)}])},6964:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return w}});var o=i(5893),n=i(9008),t=i(1664),l=i(1163),a=i(2175),s=i(4231),d=i(7357),u=i(7948),c=i(1057),m=i(5861),h=i(6886),p=i(135),x=i(122),f=i(1023),Z=i(2066),v=(0,Z.Z)((0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,o.jsx)("path",{d:"M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z"})}),"Facebook"),g=(0,Z.Z)((0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,o.jsx)("path",{d:"M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z"})}),"Google"),w=function(){var e=(0,l.useRouter)(),r=(0,a.TA)({initialValues:{email:"demo@devias.io",password:"Password123"},validationSchema:s.Ry({email:s.Z_().email("Must be a valid email").max(255).required("Email is required"),password:s.Z_().max(255).required("Password is required")}),onSubmit:function(){e.push("/")}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.default,{children:(0,o.jsx)("title",{children:"Login | Material Kit"})}),(0,o.jsx)(d.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,o.jsxs)(u.Z,{maxWidth:"sm",children:[(0,o.jsx)(t.default,{href:"/",passHref:!0,children:(0,o.jsx)(c.Z,{component:"a",startIcon:(0,o.jsx)(f.Z,{fontSize:"small"}),children:"Dashboard"})}),(0,o.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,o.jsxs)(d.Z,{sx:{my:3},children:[(0,o.jsx)(m.Z,{color:"textPrimary",variant:"h4",children:"Sign in"}),(0,o.jsx)(m.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Sign in on the internal platform"})]}),(0,o.jsxs)(h.ZP,{container:!0,spacing:3,children:[(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(c.Z,{color:"info",fullWidth:!0,startIcon:(0,o.jsx)(v,{}),onClick:r.handleSubmit,size:"large",variant:"contained",children:"Login with Facebook"})}),(0,o.jsx)(h.ZP,{item:!0,xs:12,md:6,children:(0,o.jsx)(c.Z,{fullWidth:!0,color:"error",startIcon:(0,o.jsx)(g,{}),onClick:r.handleSubmit,size:"large",variant:"contained",children:"Login with Google"})})]}),(0,o.jsx)(d.Z,{sx:{pb:1,pt:3},children:(0,o.jsx)(m.Z,{align:"center",color:"textSecondary",variant:"body1",children:"or login with email address"})}),(0,o.jsx)(p.Z,{error:Boolean(r.touched.email&&r.errors.email),fullWidth:!0,helperText:r.touched.email&&r.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,type:"email",value:r.values.email,variant:"outlined"}),(0,o.jsx)(p.Z,{error:Boolean(r.touched.password&&r.errors.password),fullWidth:!0,helperText:r.touched.password&&r.errors.password,label:"Password",margin:"normal",name:"password",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.password,variant:"outlined"}),(0,o.jsx)(d.Z,{sx:{py:2},children:(0,o.jsx)(c.Z,{color:"primary",disabled:r.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In Now"})}),(0,o.jsxs)(m.Z,{color:"textSecondary",variant:"body2",children:["Don't have an account?"," ",(0,o.jsx)(t.default,{href:"/register",children:(0,o.jsx)(x.Z,{to:"/register",variant:"subtitle2",underline:"hover",sx:{cursor:"pointer"},children:"Sign Up"})})]})]})]})})]})}}},function(e){e.O(0,[517,785,898,63,865,774,888,179],(function(){return r=7156,e(e.s=r);var r}));var r=e.O();_N_E=r}]);