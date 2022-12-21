/*! For license information please see voice-trigger-workflows.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var r;const l=window,a=l.trustedTypes,h=a?a.emptyScript:"",d=l.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=u){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:c).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:c;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(r=l.reactiveElementVersions)&&void 0!==r?r:l.reactiveElementVersions=[]).push("1.4.1");const $=window,m=$.trustedTypes,_=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,b="?"+f,y=`<${b}>`,A=document,x=(t="")=>A.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,C=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,T=/"/g,N=/^(?:script|style|textarea|title)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),U=H(1),R=(H(2),Symbol.for("lit-noChange")),M=Symbol.for("lit-nothing"),B=new WeakMap,I=A.createTreeWalker(A,129,null,!1),z=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=E;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===E?"!--"===a[1]?r=k:void 0!==a[1]?r=C:void 0!==a[2]?(N.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=O):void 0!==a[3]&&(r=O):r===O?">"===a[0]?(r=null!=n?n:E,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?O:'"'===a[3]?T:P):r===T||r===P?r=O:r===k||r===C?r=E:(r=O,n=void 0);const c=r===O&&t[e+1].startsWith("/>")?" ":"";o+=r===E?i+y:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+f+c):i+f+(-2===h?(s.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(l):l,s]};class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[a,h]=z(t,e);if(this.el=L.createElement(a,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?K:"@"===e[1]?Z:q})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split(f),e=t.length-1;if(e>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],x()),I.nextNode(),l.push({type:2,index:++n});s.append(t[e],x())}}}else if(8===s.nodeType)if(s.data===b)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(f,t+1));)l.push({type:7,index:n}),t+=f.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var n,o,r,l;if(e===R)return e;let a=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=S(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=j(t,a._$AS(t,e.values),a,s)),e}class J{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);I.currentNode=n;let o=I.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new D(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new F(o,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(o=I.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),S(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==R&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>w(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==M&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new J(n,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new L(t)),e}O(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new D(this.S(x()),this.S(x()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,s,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=j(this,t,e,0),o=!S(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=j(this,s[i+r],e,r),l===R&&(l=this._$AH[r]),o||(o=!S(l)||l!==this._$AH[r]),l===M?t=M:t!==M&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.P(t)}P(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends q{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===M?void 0:t}}const W=m?m.emptyScript:"";class K extends q{constructor(){super(...arguments),this.type=4}P(t){t&&t!==M?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class Z extends q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:M)===R)return;const s=this._$AH,n=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==M&&(s===M||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const G=$.litHtmlPolyfillSupport;var Q,X;null==G||G(L,D),(null!==(g=$.litHtmlVersions)&&void 0!==g?g:$.litHtmlVersions=[]).push("2.3.1");class Y extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new D(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}Y.finalized=!0,Y._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const et=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)})`*,*::after,*::before{border:0;margin:0;padding:0;box-sizing:border-box;font-family:sans-serif}#voice-trigger-workflow.light{--text: #131313;--bkg: #f7f7f7;--div: #dedede;--hover: #929292;--btn: #dedede;--triggerBtn: #008CBA;--triggerHoverText: white}#voice-trigger-workflow.dark{--text: #f7f7f7;--bkg: #121212;--div: #3b3b3b;--hover: #929292;--btn: #3b3b3b;--triggerBtn: #008CBA;--triggerHoverText: white}#voice-trigger-workflow{position:absolute;top:16px;margin-left:16px;z-index:1000}#btn{height:32px;width:32px;background-color:var(--btn);border-radius:50%;padding-top:8px;text-align:center}#btn svg{fill:var(--text)}#main{height:auto;width:fit-content;border-radius:4px;background-color:var(--bkg);box-shadow:0 4px 12px 0 rgba(0,0,0,.2);margin-top:8px;display:none}#main[opened]{display:block}#menu{height:auto;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;display:none}#menu[opened]{display:block}#menu p{padding:12px 24px;margin:0 16px;color:var(--text);border-bottom:2px solid var(--div);text-decoration:none;text-align:center}#menu p:nth-child(1){padding-top:24px}#menu p:nth-last-child(1){border-bottom:none;padding-bottom:24px}#menu p:hover{color:var(--hover)}.modal{display:flex;flex-direction:column;justify-content:space-between;color:var(--text);margin:20px;display:none}.modal[opened]{display:block}.modal header{border-bottom:1px solid var(--div);padding:10px 0px}.modal section{display:flex;flex-direction:column;justify-content:space-between}.modal section label{margin:10px 0px;font-size:14px}.modal section input{min-width:300px;padding:12px 12px;font-size:14px;border-radius:4px;border:1px solid var(--div);margin-bottom:10px}.modal section select{min-width:300px;padding:12px 12px;font-size:14px;border-radius:4px;border:1px solid var(--div);margin-bottom:10px}.modal footer{border-top:1px solid var(--div);display:flex;justify-content:flex-end;padding:8px 0px 8px 0px}.cancel-btn{padding:6px 12px;background-color:var(--bkg);border:1px solid var(--div);color:var(--text);border-radius:4px;margin-right:8px}.cancel-btn:hover{background-color:var(--div);color:var(--text)}.trigger-btn{padding:6px 12px;background-color:var(--bkg);color:var(--text);border:1px solid var(--triggerBtn);border-radius:4px}.trigger-btn:hover{background-color:var(--triggerBtn);color:var(--triggerTextHover)}`;customElements.define("voice-trigger-workflows",class extends Y{static get styles(){return[et]}static properties={darkmode:{},configJSON:{},taskMap:{},taskSelected:{},_mainIsOpen:{state:!0},_menuIsOpen:{state:!0},_showBtn:{state:!0},_config:{state:!0},_selected:{sate:!0}};constructor(){super(),this.darkmode=null,this.configJSON=null,this.taskMap=null,this.taskSelected=null,this._theme="",this._mainIsOpen=!1,this._menuIsOpen=!1,this._showBtn=!1,this._config=null,this._selected=null}connectedCallback(){super.connectedCallback(),this._theme=this.setTheme(),this._config=JSON.parse(JSON.stringify(this.configJSON))}updated(t){t.has("darkmode")&&(this._theme=this.setTheme(),this.requestUpdate()),t.has("taskSelected")&&(null==this.taskSelected?this._showBtn=!1:"telephony"==this.taskSelected.mediaType?this._showBtn=!0:this._showBtn=!1),t.has("taskMap")&&console.log("voice-trigger-workflow taskMap changed:",this.taskMap),t.has("configJSON")&&(this._config=JSON.parse(JSON.stringify(this.configJSON)))}setTheme(){return"true"==this.darkmode?"dark":"light"}btnClicked(){0==this._mainIsOpen?(this._mainIsOpen=!0,this._menuIsOpen=!0):(this._mainIsOpen=!1,this._menuIsOpen=!1,this._selected&&this.cancelClicked())}menuClicked(t){this._selected=t.target.getAttribute("data-id"),this.shadowRoot.querySelector(`[data-modal-id="${this._selected}"]`).setAttribute("opened",""),this.shadowRoot.querySelector("#menu").removeAttribute("opened")}cancelClicked(){const t=this._selected;this.shadowRoot.querySelector(`[data-modal-id="${t}"]`).removeAttribute("opened"),this._mainIsOpen=!1,this._menuIsOpen=!1,this._config[t].parameters&&this._config[t].parameters.forEach((e=>this.shadowRoot.querySelector(`[data-id-input="${t}"][name="${e.name}"]`).value="")),this._selected=null}triggerClicked(t){const e=t.target.getAttribute("data-id");let i={};this._config[e].parameters&&this._config[e].parameters.forEach((t=>{i[t.name]=this.shadowRoot.querySelector(`[data-id-input="${e}"][name="${t.name}"]`).value}));let s=this.taskSelected.interactionId,n=JSON.parse(JSON.stringify(this.taskMap.get(s)));i={...i,...n},async function(t,e){try{const i=await async function(t,e={}){const{timeout:i=6e3}=e,s=new AbortController,n=setTimeout((()=>s.abort()),i),o=await fetch(t,{...e,signal:s.signal});return clearTimeout(n),o}(t,{timeout:6e3,method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),s=await i.json();console.log("voice-trigger-workflow Post Result",i.status,s)}catch(t){console.log("voice-trigger-workflow Post Error",t)}}(this._config[e].url,i),this.cancelClicked()}modalSectionTemplate(t,e){if(t.parameters)return U`
        ${t.parameters.map((t=>"input"===t.type?U`
              <label>${t.label}</label>
              <input data-id-input="${e}" name="${t.name}" type="text">`:"select"===t.type?U`
              <label>${t.label}</label>
              <select data-id-input="${e}" name="${t.name}">
                ${t.values.map((t=>U`<option>${t}</option>`))}
              </select>
             `:"datetime"===t.type?U`
              <label>${t.label}</label>
              <input type="datetime-local" data-id-input="${e}" name="${t.name}">
            `:void 0))}
      `}render(){return U`
      ${this._showBtn?U`
          <div id="voice-trigger-workflow" .className=${this._theme}>
            <div id="btn" @click=${this.btnClicked}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/></svg></div>
            <div id="main" ?opened=${this._mainIsOpen}>
              <div id="menu" ?opened=${this._menuIsOpen}>
                ${this._config.map(((t,e)=>U`<p data-id="${e}" @click=${this.menuClicked}>${t.name}</p>`))}
              </div>
    
              ${this._config.map(((t,e)=>U`
                  <div data-modal-id="${e}" class="modal">
                    <header>
                      <p>Trigger ${t.name}?</p>
                    </header>

                    <section>
                      ${this.modalSectionTemplate(t,e)}
                    </section>
                    
                    <footer>
                      <button data-id="${e}" @click=${this.cancelClicked} class="cancel-btn">Cancel</button>
                      <button data-id="${e}" @click=${this.triggerClicked} class="trigger-btn">Trigger</button>
                    </footer>
                  </div>
                `))}
            </div>
          </div>
      `:U``}`}})})();