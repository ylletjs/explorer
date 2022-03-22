(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{5283:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function d(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}}function f(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"===typeof e}r.d(t,{ZP:function(){return ie}});var h=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),g={changes:function(e,t){return f(t)||h("changeType"),Object.keys(t).some((function(t){return r=e,n=t,!Object.prototype.hasOwnProperty.call(r,n);var r,n}))&&h("changeField"),t},selector:function(e){p(e)||h("selectorType")},handler:function(e){p(e)||f(e)||h("handlerType"),f(e)&&Object.values(e).some((function(e){return!p(e)}))&&h("handlersType")},initial:function(e){var t;e||h("initialIsRequired"),f(e)||h("initialType"),t=e,Object.keys(t).length||h("initialContent")}};function m(e,t){return p(t)?t(e.current):t}function y(e,t){return e.current=u(u({},e.current),t),t}function b(e,t,r){return p(t)?t(e.current):Object.keys(r).forEach((function(r){var n;return null===(n=t[r])||void 0===n?void 0:n.call(t,e.current[r])})),r}var v={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g.initial(e),g.handler(t);var r={current:e},n=d(b)(r,t),o=d(y)(r),i=d(g.changes)(e),s=d(m)(r);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return g.selector(e),e(r.current)}function c(e){l(n,o,i,s)(e)}return[a,c]}},w=v,O={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs"}};var j=function(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return t.apply(r,[].concat(o,n))}}};var T=function(e){return{}.toString.call(e).includes("Object")};var E={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},C=j((function(e,t){throw new Error(e[t]||e.default)}))(E),P={config:function(e){return e||C("configIsRequired"),T(e)||C("configType"),e.urls?(console.warn(E.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},M=P,R=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};var k=function e(t,r){return Object.keys(r).forEach((function(n){r[n]instanceof Object&&t[n]&&Object.assign(r[n],e(t[n],r[n]))})),i(i({},t),r)},_={type:"cancelation",msg:"operation is manually canceled"};var D,S,A=function(e){var t=!1,r=new Promise((function(r,n){e.then((function(e){return t?n(_):r(e)})),e.catch(n)}));return r.cancel=function(){return t=!0},r},q=w.create({config:O,isInitialized:!1,resolve:null,reject:null}),N=(S=2,function(e){if(Array.isArray(e))return e}(D=q)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(D,S)||function(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(D,S)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),I=N[0],x=N[1];function L(e){return document.body.appendChild(e)}function U(e){var t=I((function(e){return{config:e.config,reject:e.reject}})),r=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function $(){var e=I((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){e.resolve(t)}),(function(t){e.reject(t)}))}var V=new Promise((function(e,t){return x({resolve:e,reject:t})})),z={config:function(e){x((function(t){return{config:k(t.config,M.config(e))}}))},init:function(){if(!I((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return A(Promise.resolve(window.monaco));R(L,U)($),x({isInitialized:!0})}return A(V)}},F=z,W=r(7294),B=r(5697),H=r.n(B);const Y={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var Z=function({content:e}){return W.createElement("div",{style:Y},e)};var G={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function J({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperClassName:s}){return W.createElement("section",{style:{...G.wrapper,width:e,height:t},className:s},!r&&W.createElement(Z,{content:n}),W.createElement("div",{ref:o,style:{...G.fullWidth,...!r&&G.hide},className:i}))}J.propTypes={width:H().oneOfType([H().number,H().string]).isRequired,height:H().oneOfType([H().number,H().string]).isRequired,loading:H().oneOfType([H().element,H().string]).isRequired,isEditorReady:H().bool.isRequired,className:H().string,wrapperClassName:H().string};var X=J,K=(0,W.memo)(X);var Q=function(e){(0,W.useEffect)(e,[])};var ee=function(e,t,r=!0){const n=(0,W.useRef)(!0);(0,W.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)};function te(){}function re({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,editorDidMount:i,theme:s,width:a,height:c,loading:u,options:l,className:d,wrapperClassName:f}){const[p,h]=(0,W.useState)(!1),[g,m]=(0,W.useState)(!0),y=(0,W.useRef)(null),b=(0,W.useRef)(null),v=(0,W.useRef)(null),w=(0,W.useRef)(i);Q((()=>{const e=F.init();return e.then((e=>(b.current=e)&&m(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>y.current?T():e.cancel()})),ee((()=>{y.current.getModel().modified.setValue(t)}),[t],p),ee((()=>{y.current.getModel().original.setValue(e)}),[e],p),ee((()=>{const{original:e,modified:t}=y.current.getModel();b.current.editor.setModelLanguage(e,n||r),b.current.editor.setModelLanguage(t,o||r)}),[r,n,o],p),ee((()=>{b.current.editor.setTheme(s)}),[s],p),ee((()=>{y.current.updateOptions(l)}),[l],p);const O=(0,W.useCallback)((()=>{const i=b.current.editor.createModel(e,n||r),s=b.current.editor.createModel(t,o||r);y.current.setModel({original:i,modified:s})}),[r,t,o,e,n]),j=(0,W.useCallback)((()=>{y.current=b.current.editor.createDiffEditor(v.current,{automaticLayout:!0,...l}),O(),b.current.editor.setTheme(s),h(!0)}),[l,s,O]);(0,W.useEffect)((()=>{if(p){const{original:e,modified:t}=y.current.getModel();w.current(t.getValue.bind(t),e.getValue.bind(e),y.current)}}),[p]),(0,W.useEffect)((()=>{!g&&!p&&j()}),[g,p,j]);const T=()=>y.current.dispose();return W.createElement(K,{width:a,height:c,isEditorReady:p,loading:u,_ref:v,className:d,wrapperClassName:f})}re.propTypes={original:H().string,modified:H().string,language:H().string,originalLanguage:H().string,modifiedLanguage:H().string,editorDidMount:H().func,theme:H().string,width:H().oneOfType([H().number,H().string]),height:H().oneOfType([H().number,H().string]),loading:H().oneOfType([H().element,H().string]),options:H().object,className:H().string,wrapperClassName:H().string},re.defaultProps={editorDidMount:te,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{}};function ne({value:e,language:t,editorDidMount:r,theme:n,line:o,width:i,height:s,loading:a,options:c,overrideServices:u,_isControlledMode:l,className:d,wrapperClassName:f}){const[p,h]=(0,W.useState)(!1),[g,m]=(0,W.useState)(!0),y=(0,W.useRef)(null),b=(0,W.useRef)(null),v=(0,W.useRef)(null),w=(0,W.useRef)(r);Q((()=>{const e=F.init();return e.then((e=>(b.current=e)&&m(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>y.current?j():e.cancel()})),ee((()=>{y.current.updateOptions(c)}),[c],p),ee((()=>{if(y.current.getOption(b.current.editor.EditorOption.readOnly))y.current.setValue(e);else if(e!==y.current.getValue()){if(y.current.executeEdits("",[{range:y.current.getModel().getFullModelRange(),text:e,forceMoveMarkers:!0}]),l){const e=y.current.getModel();e.forceTokenization(e.getLineCount())}y.current.pushUndoStop()}}),[e],p),ee((()=>{b.current.editor.setModelLanguage(y.current.getModel(),t)}),[t],p),ee((()=>{y.current.setScrollPosition({scrollTop:o})}),[o],p),ee((()=>{b.current.editor.setTheme(n)}),[n],p);const O=(0,W.useCallback)((()=>{y.current=b.current.editor.create(v.current,{value:e,language:t,automaticLayout:!0,...c},u),b.current.editor.setTheme(n),h(!0)}),[t,c,u,n,e]);(0,W.useEffect)((()=>{p&&w.current(y.current.getValue.bind(y.current),y.current)}),[p]),(0,W.useEffect)((()=>{!g&&!p&&O()}),[g,p,O]);const j=()=>y.current.dispose();return W.createElement(K,{width:i,height:s,isEditorReady:p,loading:a,_ref:v,className:d,wrapperClassName:f})}ne.propTypes={value:H().string,language:H().string,editorDidMount:H().func,theme:H().string,line:H().number,width:H().oneOfType([H().number,H().string]),height:H().oneOfType([H().number,H().string]),loading:H().oneOfType([H().element,H().string]),options:H().object,className:H().string,wrapperClassName:H().string,overrideServices:H().object,_isControlledMode:H().bool},ne.defaultProps={editorDidMount:te,theme:"light",width:"100%",height:"100%",loading:"Loading...",options:{},overrideServices:{},_isControlledMode:!1};var oe=ne,ie=(0,W.memo)(oe);function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(this,arguments)}function ae({value:e,onChange:t,editorDidMount:r,...n}){const o=(0,W.useRef)(null),i=(0,W.useRef)(null),s=(0,W.useRef)(e);s.current=e;const a=(0,W.useCallback)((e=>{const r=o.current.getValue();if(s.current!==r){const n=t(e,r);"string"===typeof n&&r!==n&&o.current.setValue(n)}}),[t]),c=(0,W.useCallback)((()=>{var e;i.current=null===(e=o.current)||void 0===e?void 0:e.onDidChangeModelContent(a)}),[a]);(0,W.useEffect)((()=>(c(),()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.dispose()})),[c]);const u=(0,W.useCallback)(((e,t)=>{o.current=t,c(),r(e,t)}),[c,r]);return W.createElement(ie,se({value:e,editorDidMount:u,_isControlledMode:!0},n))}ae.propTypes={value:H().string,editorDidMount:H().func,onChange:H().func},ae.defaultProps={editorDidMount:te,onChange:te}},8508:function(e,t,r){"use strict";r.d(t,{m8:function(){return m}});var n=r(7294);const o=n.createContext({client:null});var i=r(7514),s=r.n(i);class a extends Error{constructor(e){super(e.statusText),this.name="HTTPError",this.response=e}}const c=e=>"[object Object]"===Object.prototype.toString.call(e),u=e=>e.replace(/[\w]([A-Z])/g,(function(e){return e[0]+"_"+e[1]})).toLowerCase(),l=e=>Object.keys(e).reduce(((t,r)=>(c(e[r])&&(e[r]=l(e[r])),e[r]instanceof Array?t[u(r)]=e[r].map(l):t[u(r)]=e[r],t)),{}),d=e=>e.reduce(((e,t)=>e.concat(Array.isArray(t)?d(t):t)),[]),f=(e,t="")=>Object.keys(e).map((r=>{const n=e.constructor===Array,o=n?d(e)[r]:e[r];return n?r=`${t}[]`:e.constructor===Object&&(r=t?`${t}[${r}]`:r),"object"===typeof o?f(o,r):`${r}=${encodeURIComponent(o)}`})).join("&"),p=(e,t)=>{if(!c(e)&&!c(t))return e;for(const r in t)null!==t[r]||void 0!==e[r]&&null!==e[r]?t[r]instanceof Array?(e[r]||(e[r]=[]),e[r]=e[r].concat(t[r])):c(t[r])?(c(e[r])||(e[r]={}),p(e[r],t[r])):(void 0===e&&(e={}),e[r]=t[r]):e[r]=null;return e};var h=class{delete(e,t,r={}){return this.request("delete",e,t,r)}get(e,t,r={}){return this.request("get",e,t,r)}post(e,t,r={}){return this.request("post",e,t,r)}put(e,t,r={}){return this.request("put",e,t,r)}request(e,t,r,n={}){const o={...n,method:e.toUpperCase()};if(r)if(["PUT","POST"].includes(e.toUpperCase()))o.body=r instanceof s()?r:JSON.stringify(r);else{if(r instanceof s())throw new TypeError("Unable to encode FormData for GET, DELETE requests");const e=f(r);e.length&&(t=`${t}?${e}`)}return fetch(t,o).then((e=>e.json().then((t=>{if(!e.ok)throw new a(t);return t}))))}};var g=class{constructor(e={}){this.config={},this.formData=void 0,this.middlewares=[],this.options={config:{},endpoint:"",headers:{"Content-Type":"application/json"},namespace:"wp/v2",nonce:"",resource:"",restore:!0},this.params={},this.transport=new h,"string"===typeof e&&(e={endpoint:e}),this._setupOptions(e)}_setupOptions(e={}){c(e)||(e=this.options),c(e.config)||(e.config={headers:{}}),this.middlewares=Array.isArray(e.middlewares)?e.middlewares:[],delete e.middlewares,this.transport=e.transport?e.transport:this.transport,delete e.transport;const t=p(e.config.headers,p(this.options.headers,e.headers||{}));e.config={...e.config,headers:{...t}},e.nonce&&(e.config.headers["X-WP-Nonce"]=e.nonce),delete(e=p(this.options,e)).headers,this.options=e}_getUrl(e){const{endpoint:t,namespace:r,resource:n}=this.options,o=String(e||""),i=t.replace(r,"").replace(/\/$/,"")+"/",s=n.replace(/^\/|\/$/g,"");return i+(r.replace(/^\/|\/$/g,"")+(s||o?"/":""))+s+(s&&o?"/":"")+o}_getParams(e){let t;return e=c(e)?l(e):{},t={...this.params,...e},this.formData instanceof s()&&(Object.keys(t).forEach((e=>{this.formData.append(e,t[e])})),t=this.formData),t}async _runMiddlewares(e){const t=this,{endpoint:r,namespace:n,resource:o}=this.options,i=async()=>{const s=t.middlewares.shift();return t.options={...t.options,namespace:n,resource:o,endpoint:r},s?("function"===typeof s&&await s.call(this,t,i),t):await e.call(this,t,i)};return await i()}discover(e){return this.transport.get(e,{rest_route:"/"}).then((e=>{if(c(e.routes))return e.routes["/"]._links.self;throw new Error("Unable to find the REST API")}))}embed(){return this.param("_embed",!0)}endpoint(e){return this.options.endpoint=e,this}file(e,t=""){const r=new(s());return r.append("file",e),this.header("Content-Type","multipart/form-data"),this.header("Content-Disposition",`attachment; filename=${t}`),this.formData=r,this}header(e,t=null){let{headers:r={}}=this.options.config;return"string"!==typeof e||t?("string"===typeof e?r[e]=t:r={...r,...e},this.options.config={...this.options.config,headers:{...r}},this):r[e]}namespace(e){return this.options.namespace=e,this}categories(){return this.resource("categories")}comments(){return this.resource("comments")}media(){return this.resource("media")}statuses(){return this.resource("statuses")}pages(){return this.resource("pages")}posts(){return this.resource("posts")}settings(){return this.resource("settings")}tags(){return this.resource("tags")}taxonomies(){return this.resource("taxonomies")}types(){return this.resource("types")}users(){return this.resource("users")}search(){return this.resource("search")}resource(e){return this.options.resource=e,this}param(e,t=null){return"string"!==typeof e||t?("string"===typeof e?this.params[e]=t:this.params={...this.params,...e},this):this.params[e]}slug(e,t={}){return this.request("get",{...t,per_page:1,slug:e}).then((e=>e[0]))}get(e="",t={}){return this.request("get",e,t)}create(e="",t={}){return this.request("post",e,t)}update(e="",t={}){return this.request("put",e,t)}delete(e="",t={}){return this.request("delete",e,t)}request(e,t="",r={}){return c(t)&&(r=t,t=""),new Promise((n=>{this._runMiddlewares((()=>{const o=this.transport[e.toLowerCase()](this._getUrl(t),this._getParams(r),this.options.config);n(o)}))}))}use(e){return Array.isArray(e)||(e=[e]),this.middlewares=this.middlewares.concat(e),this}};var m=(e={})=>{const t=(0,n.useContext)(o);return t.client?t.client:(0,n.useMemo)((()=>new g(e)),[])}},7514:function(e){e.exports=window.FormData},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);