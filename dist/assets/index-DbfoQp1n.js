var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var te=ee.prototype=new y;te.constructor=ee,g(te,v.prototype),te.isPureReactComponent=!0;var ne=Array.isArray;function re(){}var ie={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function oe(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function se(e,t){return oe(e.type,t,e.props)}function ce(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function le(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ue=/\/+/g;function de(e,t){return typeof e==`object`&&e&&e.key!=null?le(``+e.key):t.toString(36)}function fe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(re,re):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function pe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,pe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+de(e,0):a,ne(o)?(i=``,c!=null&&(i=c.replace(ue,`$&/`)+`/`),pe(o,r,i,``,function(e){return e})):o!=null&&(ce(o)&&(o=se(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ue,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ne(e))for(var u=0;u<e.length;u++)a=e[u],s=l+de(a,u),c+=pe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+de(a,u++),c+=pe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return pe(fe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function me(e,t,n){if(e==null)return e;var r=[],i=0;return pe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function he(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var b=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ge={map:me,forEach:function(e,t,n){me(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return me(e,function(){t++}),t},toArray:function(e){return me(e,function(e){return e})||[]},only:function(e){if(!ce(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ge,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ie.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ae.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return oe(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ae.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return oe(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ce,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:he}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ie.T,n={};ie.T=n;try{var r=e(),i=ie.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(re,b)}catch(e){b(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),ie.T=t}},e.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},e.use=function(e){return ie.H.use(e)},e.useActionState=function(e,t,n){return ie.H.useActionState(e,t,n)},e.useCallback=function(e,t){return ie.H.useCallback(e,t)},e.useContext=function(e){return ie.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return ie.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return ie.H.useEffect(e,t)},e.useEffectEvent=function(e){return ie.H.useEffectEvent(e)},e.useId=function(){return ie.H.useId()},e.useImperativeHandle=function(e,t,n){return ie.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return ie.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return ie.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return ie.H.useMemo(e,t)},e.useOptimistic=function(e,t){return ie.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return ie.H.useReducer(e,t,n)},e.useRef=function(e){return ie.H.useRef(e)},e.useState=function(e){return ie.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return ie.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return ie.H.useTransition()},e.version=`19.2.7`})),d=s(((e,t)=>{t.exports=u()})),f=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function ee(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function te(e){if(h=!1,ee(e),!m)if(n(c)!==null)m=!0,ne||(ne=!0,ce());else{var t=n(l);t!==null&&de(te,t.startTime-e)}}var ne=!1,re=-1,ie=5,ae=-1;function oe(){return g?!0:!(e.unstable_now()-ae<ie)}function se(){if(g=!1,ne){var t=e.unstable_now();ae=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(re),re=-1),p=!0;var a=f;try{b:{for(ee(t),d=n(c);d!==null&&!(d.expirationTime>t&&oe());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,ee(t),i=!0;break b}d===n(c)&&r(c),ee(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&de(te,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ce():ne=!1}}}var ce;if(typeof y==`function`)ce=function(){y(se)};else if(typeof MessageChannel<`u`){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=se,ce=function(){ue.postMessage(null)}}else ce=function(){_(se,0)};function de(t,n){re=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ie=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(re),re=-1):h=!0,de(te,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ne||(ne=!0,ce()))),r},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),h=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=s((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),te=Symbol.for(`react.profiler`),ne=Symbol.for(`react.consumer`),re=Symbol.for(`react.context`),ie=Symbol.for(`react.forward_ref`),ae=Symbol.for(`react.suspense`),oe=Symbol.for(`react.suspense_list`),se=Symbol.for(`react.memo`),ce=Symbol.for(`react.lazy`),le=Symbol.for(`react.activity`),ue=Symbol.for(`react.memo_cache_sentinel`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var pe=Symbol.for(`react.client.reference`);function me(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case te:return`Profiler`;case ee:return`StrictMode`;case ae:return`Suspense`;case oe:return`SuspenseList`;case le:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case re:return e.displayName||`Context`;case ne:return(e._context.displayName||`Context`)+`.Consumer`;case ie:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case se:return t=e.displayName||null,t===null?me(e.type)||`Memo`:t;case ce:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var he=Array.isArray,b=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},ve=[],ye=-1;function be(e){return{current:e}}function xe(e){0>ye||(e.current=ve[ye],ve[ye]=null,ye--)}function Se(e,t){ye++,ve[ye]=e.current,e.current=t}var Ce=be(null),we=be(null),Te=be(null),Ee=be(null);function De(e,t){switch(Se(Te,t),Se(we,e),Se(Ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}xe(Ce),Se(Ce,e)}function Oe(){xe(Ce),xe(we),xe(Te)}function ke(e){e.memoizedState!==null&&Se(Ee,e);var t=Ce.current,n=Hd(t,e.type);t!==n&&(Se(we,e),Se(Ce,n))}function Ae(e){we.current===e&&(xe(Ce),xe(we)),Ee.current===e&&(xe(Ee),Qf._currentValue=_e)}var je,Me;function Ne(e){if(je===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);je=t&&t[1]||``,Me=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+je+e+Me}var Pe=!1;function Fe(e,t){if(!e||Pe)return``;Pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Pe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ne(n):``}function Ie(e,t){switch(e.tag){case 26:case 27:case 5:return Ne(e.type);case 16:return Ne(`Lazy`);case 13:return e.child!==t&&t!==null?Ne(`Suspense Fallback`):Ne(`Suspense`);case 19:return Ne(`SuspenseList`);case 0:case 15:return Fe(e.type,!1);case 11:return Fe(e.type.render,!1);case 1:return Fe(e.type,!0);case 31:return Ne(`Activity`);default:return``}}function Le(e){try{var t=``,n=null;do t+=Ie(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Re=Object.prototype.hasOwnProperty,ze=t.unstable_scheduleCallback,Be=t.unstable_cancelCallback,Ve=t.unstable_shouldYield,He=t.unstable_requestPaint,Ue=t.unstable_now,We=t.unstable_getCurrentPriorityLevel,Ge=t.unstable_ImmediatePriority,Ke=t.unstable_UserBlockingPriority,qe=t.unstable_NormalPriority,Je=t.unstable_LowPriority,Ye=t.unstable_IdlePriority,Xe=t.log,Ze=t.unstable_setDisableYieldValue,Qe=null,$e=null;function et(e){if(typeof Xe==`function`&&Ze(e),$e&&typeof $e.setStrictMode==`function`)try{$e.setStrictMode(Qe,e)}catch{}}var tt=Math.clz32?Math.clz32:it,nt=Math.log,rt=Math.LN2;function it(e){return e>>>=0,e===0?32:31-(nt(e)/rt|0)|0}var at=256,ot=262144,st=4194304;function ct(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ct(n))):i=ct(o):i=ct(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ct(n))):i=ct(o)):i=ct(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function x(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(){var e=st;return st<<=1,!(st&62914560)&&(st=4194304),e}function ft(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-tt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ht(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ht(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-tt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function gt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function _t(e,t){var n=t&-t;return n=n&42?1:vt(n),(n&(e.suspendedLanes|t))===0?n:0}function vt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function bt(){var e=ge.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function xt(e,t){var n=ge.p;try{return ge.p=e,t()}finally{ge.p=n}}var St=Math.random().toString(36).slice(2),Ct=`__reactFiber$`+St,wt=`__reactProps$`+St,Tt=`__reactContainer$`+St,Et=`__reactEvents$`+St,Dt=`__reactListeners$`+St,Ot=`__reactHandles$`+St,kt=`__reactResources$`+St,At=`__reactMarker$`+St;function jt(e){delete e[Ct],delete e[wt],delete e[Et],delete e[Dt],delete e[Ot]}function Mt(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[Ct])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Nt(e){if(e=e[Ct]||e[Tt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Pt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ft(e){var t=e[kt];return t||=e[kt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function It(e){e[At]=!0}var Lt=new Set,Rt={};function zt(e,t){Bt(e,t),Bt(e+`Capture`,t)}function Bt(e,t){for(Rt[e]=t,e=0;e<t.length;e++)Lt.add(t[e])}var Vt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ht={},Ut={};function Wt(e){return Re.call(Ut,e)?!0:Re.call(Ht,e)?!1:Vt.test(e)?Ut[e]=!0:(Ht[e]=!0,!1)}function Gt(e,t,n){if(Wt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Yt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Xt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){if(!e._valueTracker){var t=Yt(e)?`checked`:`value`;e._valueTracker=Xt(e,t,``+e[t])}}function Qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Yt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function $t(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var en=/[\n"\\]/g;function tn(e){return e.replace(en,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function nn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Jt(t)):e.value!==``+Jt(t)&&(e.value=``+Jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):S(e,o,Jt(n)):S(e,o,Jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Jt(s):e.removeAttribute(`name`)}function rn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Zt(e);return}n=n==null?``:``+Jt(n),t=t==null?n:``+Jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Zt(e)}function S(e,t,n){t===`number`&&$t(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function on(e,t,n){if(t!=null&&(t=``+Jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Jt(n)}function sn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(he(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Zt(e)}function C(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function ln(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||cn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function un(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&ln(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&ln(e,o,t[o])}function dn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var fn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),pn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mn(e){return pn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function hn(){}var gn=null;function _n(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vn=null,yn=null;function bn(e){var t=Nt(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(nn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+tn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[wt]||null;if(!a)throw Error(i(90));nn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Qt(r)}break a;case`textarea`:on(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}}}var xn=!1;function Sn(e,t,n){if(xn)return e(t,n);xn=!0;try{return e(t)}finally{if(xn=!1,(vn!==null||yn!==null)&&(vu(),vn&&(t=vn,e=yn,yn=vn=null,bn(t),e)))for(t=0;t<e.length;t++)bn(e[t])}}function Cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[wt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var wn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),Tn=!1;if(wn)try{var En={};Object.defineProperty(En,"passive",{get:function(){Tn=!0}}),window.addEventListener(`test`,En,En),window.removeEventListener(`test`,En,En)}catch{Tn=!1}var Dn=null,On=null,kn=null;function An(){if(kn)return kn;var e,t=On,n=t.length,r,i=`value`in Dn?Dn.value:Dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return kn=i.slice(e,1<r?1-r:void 0)}function jn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mn(){return!0}function Nn(){return!1}function Pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Mn:Nn,this.isPropagationStopped=Nn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},In=Pn(Fn),Ln=m({},Fn,{view:0,detail:0}),Rn=Pn(Ln),zn,Bn,Vn,Hn=m({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Vn&&(Vn&&e.type===`mousemove`?(zn=e.screenX-Vn.screenX,Bn=e.screenY-Vn.screenY):Bn=zn=0,Vn=e),zn)},movementY:function(e){return`movementY`in e?e.movementY:Bn}}),Un=Pn(Hn),Wn=Pn(m({},Hn,{dataTransfer:0})),Gn=Pn(m({},Ln,{relatedTarget:0})),Kn=Pn(m({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0})),qn=Pn(m({},Fn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Jn=Pn(m({},Fn,{data:0})),Yn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Xn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zn[e])?!!t[e]:!1}function $n(){return Qn}var er=Pn(m({},Ln,{key:function(e){if(e.key){var t=Yn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=jn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Xn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(e){return e.type===`keypress`?jn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?jn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),tr=Pn(m({},Hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nr=Pn(m({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n})),rr=Pn(m({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0})),ir=Pn(m({},Hn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ar=Pn(m({},Fn,{newState:0,oldState:0})),or=[9,13,27,32],sr=wn&&`CompositionEvent`in window,cr=null;wn&&`documentMode`in document&&(cr=document.documentMode);var lr=wn&&`TextEvent`in window&&!cr,ur=wn&&(!sr||cr&&8<cr&&11>=cr),w=` `,dr=!1;function fr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function T(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var pr=!1;function mr(e,t){switch(e){case`compositionend`:return T(t);case`keypress`:return t.which===32?(dr=!0,w):null;case`textInput`:return e=t.data,e===w&&dr?null:e;default:return null}}function hr(e,t){if(pr)return e===`compositionend`||!sr&&fr(e,t)?(e=An(),kn=On=Dn=null,pr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var E={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!E[e.type]:t===`textarea`}function _r(e,t,n,r){vn?yn?yn.push(r):yn=[r]:vn=r,t=Td(t,`onChange`),0<t.length&&(n=new In(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var D=null,vr=null;function yr(e){vd(e,0)}function br(e){if(Qt(Pt(e)))return e}function O(e,t){if(e===`change`)return t}var xr=!1;if(wn){var Sr;if(wn){var k=`oninput`in document;if(!k){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),k=typeof Cr.oninput==`function`}Sr=k}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function wr(){D&&(D.detachEvent(`onpropertychange`,Tr),vr=D=null)}function Tr(e){if(e.propertyName===`value`&&br(vr)){var t=[];_r(t,vr,e,_n(e)),Sn(yr,t)}}function Er(e,t,n){e===`focusin`?(wr(),D=t,vr=n,D.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return br(vr)}function Or(e,t){if(e===`click`)return br(t)}function kr(e,t){if(e===`input`||e===`change`)return br(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function A(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Re.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function j(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?j(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$t(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=$t(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var M=wn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==$t(r)||(r=Ir,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&A(Rr,r)||(Rr=r,r=Td(Lr,`onSelect`),0<r.length&&(t=new In(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function N(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:N(`Animation`,`AnimationEnd`),animationiteration:N(`Animation`,`AnimationIteration`),animationstart:N(`Animation`,`AnimationStart`),transitionrun:N(`Transition`,`TransitionRun`),transitionstart:N(`Transition`,`TransitionStart`),transitioncancel:N(`Transition`,`TransitionCancel`),transitionend:N(`Transition`,`TransitionEnd`)},Hr={},P={};wn&&(P=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Ur(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in P)return Hr[e]=t[n];return e}var Wr=Ur(`animationend`),F=Ur(`animationiteration`),Gr=Ur(`animationstart`),Kr=Ur(`transitionrun`),I=Ur(`transitionstart`),qr=Ur(`transitioncancel`),Jr=Ur(`transitionend`),Yr=new Map,Xr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Xr.push(`scrollEnd`);function Zr(e,t){Yr.set(e,t),zt(t,[e])}var Qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},$r=[],ei=0,ti=0;function ni(){for(var e=ei,t=ti=ei=0;t<e;){var n=$r[t];$r[t++]=null;var r=$r[t];$r[t++]=null;var i=$r[t];$r[t++]=null;var a=$r[t];if($r[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&oi(n,i,a)}}function ri(e,t,n,r){$r[ei++]=e,$r[ei++]=t,$r[ei++]=n,$r[ei++]=r,ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ii(e,t,n,r){return ri(e,t,n,r),si(e)}function ai(e,t){return ri(e,null,null,t),si(e)}function oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-tt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function si(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,t,n,r){return new li(e,t,n,r)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fi(e,t){var n=e.alternate;return n===null?(n=ui(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)di(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,Ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case le:return e=ui(31,n,t,a),e.elementType=le,e.lanes=o,e;case y:return hi(n.children,a,o,t);case ee:s=8,a|=24;break;case te:return e=ui(12,n,t,a|2),e.elementType=te,e.lanes=o,e;case ae:return e=ui(13,n,t,a),e.elementType=ae,e.lanes=o,e;case oe:return e=ui(19,n,t,a),e.elementType=oe,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case re:s=10;break a;case ne:s=9;break a;case ie:s=11;break a;case se:s=14;break a;case ce:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ui(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function hi(e,t,n,r){return e=ui(7,e,r,t),e.lanes=n,e}function gi(e,t,n){return e=ui(6,e,null,t),e.lanes=n,e}function _i(e){var t=ui(18,null,null,0);return t.stateNode=e,t}function vi(e,t,n){return t=ui(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yi=new WeakMap;function bi(e,t){if(typeof e==`object`&&e){var n=yi.get(e);return n===void 0?(t={value:e,source:t,stack:Le(t)},yi.set(e,t),t):n}return{value:e,source:t,stack:Le(t)}}var xi=[],Si=0,Ci=null,wi=0,Ti=[],Ei=0,Di=null,Oi=1,ki=``;function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ci,Ci=e,wi=t}function ji(e,t,n){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Di=e;var r=Oi;e=ki;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var a=32-tt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-tt(t)+i|n<<i|r,ki=a+e}else Oi=1<<a|n<<i|r,ki=e}function Mi(e){e.return!==null&&(Ai(e,1),ji(e,1,0))}function Ni(e){for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null;for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,ki=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null}function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Oi=t.id,ki=t.overflow,Di=e}var Fi=null,Ii=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ct]=e,t[wt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),rn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),sn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=hn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Fi=Fi.return}}function Ui(e){if(e!==Fi)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ii&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ii=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ii=uf(e)}else t===27?(t=Ii,Zd(e.type)?(e=lf,lf=null,Ii=e):Ii=t):Ii=Fi?cf(e.stateNode.nextSibling):null;return!0}function Wi(){Ii=Fi=null,L=!1}function Gi(){var e=Li;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=be(null),Ji=null,Yi=null;function Xi(e,t,n){Se(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,xe(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ee.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=ud(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=b.S;b.S=function(e,t){Ql=Ue(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=be(null);function xa(){var e=ba.current;return e===null?Pl.pooledCache:e}function Sa(e,t){t===null?Se(ba,ba.current):Se(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hn,hn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(hn,hn);else{if(e=Pl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ce&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=mi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=hi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=mi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=vi(t,e.mode,n),t.return=e,t;case ce:return t=Aa(t),f(e,t,n)}if(he(t)||fe(t))return t=hi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===re)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ce:return n=Aa(n),p(e,t,n,r)}if(he(n)||fe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===re)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ce:return r=Aa(r),m(e,t,n,r,i)}if(he(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===re)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&Ai(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&Ai(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&Ai(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&Ai(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&Ai(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&Ai(a,g),u}function ee(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ce&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=hi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=mi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=vi(o,e.mode,c),c.return=e,e=c}return s(e);case ce:return o=Aa(o),ee(e,r,o,c)}if(he(o))return h(e,r,o,c);if(fe(o)){if(l=fe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return ee(e,r,Ia(o),c);if(o.$$typeof===re)return ee(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=ee(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=ui(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Nl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=si(e),oi(e,null,n),t}return ri(e,r,t,n),si(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Fl&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=be(null),to=be(0);function no(e,t){e=Vl,Se(to,e),Se(eo,t),Vl=e|t.baseLanes}function ro(){Se(to,Vl),Se(eo,eo.current)}function io(){Vl=to.current,xe(eo),xe(to)}var ao=be(null),oo=null;function so(e){var t=e.alternate;Se(R,R.current&1),Se(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){Se(R,R.current),Se(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(Se(R,R.current),Se(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){Se(R,R.current),Se(ao,ao.current)}function fo(e){xe(ao),oo===e&&(oo=null),xe(R)}var R=be(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,ho=null,go=null,_o=!1,vo=!1,yo=!1,B=0,bo=0,xo=null,So=0;function Co(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=e===null||e.memoizedState===null?Hs:Us,yo=!1,a=n(r,i),yo=!1,vo&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){b.H=Vs;var t=ho!==null&&ho.next!==null;if(mo=0,go=ho=z=null,_o=!1,bo=0,xo=null,t)throw Error(i(300));e===null||oc||(e=e.dependencies,e!==null&&ta(e)&&(oc=!0))}function Do(e,t,n,r){z=e;var a=0;do{if(vo&&(xo=null),bo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,go=ho=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}b.H=Ws,o=t(n,r)}while(vo);return o}function Oo(){var e=b.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(ho===null?null:ho.memoizedState)!==e&&(z.flags|=1024),t}function ko(){var e=B!==0;return B=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}mo=0,go=ho=z=null,vo=!1,bo=B=0,xo=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return go===null?z.memoizedState=go=e:go=go.next=e,go}function No(){if(ho===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=ho.next;var t=go===null?z.memoizedState:go.next;if(t!==null)go=t,ho=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));ho=e,e={memoizedState:ho.memoizedState,baseState:ho.baseState,baseQueue:ho.baseQueue,queue:ho.queue,next:null},go===null?z.memoizedState=go=e:go=go.next=e}return go}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(go===null?t.memoizedState:go.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===re)return ra(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ue;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(No(),ho,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(Fl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Ul|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(oc=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=No(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=z,a=No(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((ho||a).memoizedState,n);if(s&&(a.memoizedState=n,oc=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||go!==null&&go.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),Pl===null)throw Error(i(349));o||mo&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Po(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function qo(e){var t=ai(e,2);t!==null&&pu(t,e,2)}function Jo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),yo){et(!0);try{n()}finally{et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,ho,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};b.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=b.T,o={};b.T=o;try{var s=n(i,r),c=b.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),b.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(L){var n=Pl.formState;if(n!==null){a:{var r=z;if(L){if(Ii){b:{for(var i=Ii,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ii=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,z,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,z,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(No(),ho,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===wa?Ea:e}else r=t;t=No();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=No(),n=ho;if(n!==null)return as(t,n,e);No(),t=t.memoizedState,n=No();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Po(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return No().memoizedState}function us(e,t,n,r){var i=Mo();z.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=No();r=r===void 0?null:r;var a=i.memoizedState.inst;ho!==null&&r!==null&&wo(r,ho.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(z.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Po(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=No().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(Nl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),yo){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||mo&1073741824&&!(Fl&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),z.lanes|=e,Ul|=e,n)}function ws(e,t,n,r){return jr(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(Fl&261930)?(oc=!0,e.memoizedState=n):(e=fu(),z.lanes|=e,Ul|=e,t):(e=Cs(e,n,r),jr(e,t)||(oc=!0),e)}function Ts(e,t,n,r,i){var a=ge.p;ge.p=a!==0&&8>a?a:8;var o=b.T,s={};b.T=s,Ls(e,!1,t,n);try{var c=i(),l=b.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,va(c,r),du(e)):Is(e,t,r,du(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{ge.p=a,o!==null&&s.types!==null&&(o.types=s.types),b.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,_e,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:_e},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},du())}function As(){return ra(Qf)}function js(){return No().memoizedState}function Ms(){return No().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Ga(n);var r=Ka(t,e,n);r!==null&&(pu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=ii(e,t,n,r),n!==null&&(pu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,du())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ri(e,t,i,0),Pl===null&&ni(),!1}catch{}if(n=ii(e,t,i,r),n!==null)return pu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=ii(e,n,r,2),t!==null&&pu(t,e,2)}function Rs(e){var t=e.alternate;return e===z||t!==null&&t===z}function zs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}var Vs={readContext:ra,use:Io,useCallback:Co,useContext:Co,useEffect:Co,useImperativeHandle:Co,useLayoutEffect:Co,useInsertionEffect:Co,useMemo:Co,useReducer:Co,useRef:Co,useState:Co,useDebugValue:Co,useDeferredValue:Co,useTransition:Co,useSyncExternalStore:Co,useId:Co,useHostTransitionStatus:Co,useFormState:Co,useActionState:Co,useOptimistic:Co,useMemoCache:Co,useCacheRefresh:Co};Vs.useEffectEvent=Co;var Hs={readContext:ra,use:Io,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(yo){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(yo){et(!0);try{n(t)}finally{et(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Mo(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,z,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=Mo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Pl===null)throw Error(i(349));Fl&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=Pl.identifierPrefix;if(L){var n=ki,r=Oi;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=B++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return Mo().memoizedState=Ns.bind(null,z)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(Nl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:ra,use:Io,useCallback:xs,useContext:ra,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(No(),ho.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(No(),ho,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:ra,use:Io,useCallback:xs,useContext:ra,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=No();return ho===null?Cs(n,e,t):ws(n,ho.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=No();return ho===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,ho,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(pu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(pu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(pu(t,e,n),qa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!A(n,r)||!A(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){Qr(e)}function Zs(e){console.error(e)}function Qs(e){Qr(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ga(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=bi(r,n),a=tc(e.stateNode,r,a),Ja(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=bi(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),oc=!1;function sc(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(L&&s&&Mi(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?A:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(A(a,r)&&e.ref===t.ref)if(oc=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(oc=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Ba(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(co(t),(e=Ii)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,Ii=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(oc||ea(e,t,n,!1),a=(n&e.childLanes)!==0,oc||a){if(r=Pl,r!==null&&(s=_t(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ai(e,s),pu(r,e,s),ac;Tu(),t=hc(e,t,n)}else e=o.treeContext,Ii=cf(s.nextSibling),Fi=t,L=!0,Li=null,Ri=!1,e!==null&&Pi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return na(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!oc?(Ao(e,t,i),Mc(e,t,i)):(L&&r&&Mi(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!oc?(Ao(e,t,a),Mc(e,t,a)):(L&&r&&Mi(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=ci,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=ci,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ha||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ci,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ha||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Wi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Ca()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(R.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=Ii)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,Ii=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=hi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(so(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=hi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(oc||ea(e,t,n,!1),s=(n&e.childLanes)!==0,oc||s){if(s=Pl,s!==null&&(r=_t(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ai(e,r),pu(s,e,r),ac;af(c)||Tu(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ii=cf(c.nextSibling),Fi=t,L=!0,Li=null,Ri=!1,e!==null&&Pi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=fi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=hi(c,a,n,null),c.flags|=2):c=fi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=ui(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Ba(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,Se(R,o),sc(e,t,r,n),r=L?wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:ke(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(R,R.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)oc=!0;else{if(!Nc(e,n)&&!(t.flags&128))return oc=!1,Pc(e,t,n);oc=!!(e.flags&131072)}else oc=!1,L&&t.flags&1048576&&ji(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)di(e)?(r=Ys(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ie){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===se){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=me(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=bi(Error(i(424)),t),Ki(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ii=cf(e.firstChild),Fi=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(Te.current).createElement(n),r[Ct]=t,r[wt]=e,Pd(r,n,e),It(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ke(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,Te.current),Fi=t,Ri=!0,a=Ii,Zd(t.type)?(lf=a,Ii=cf(r.firstChild)):Ii=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=Ii)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,Fi=t,Ii=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),ke(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=Ii)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,Fi=t,Ii=null,e=!0)),e||Bi(t)),null;case 13:return Tc(e,t,n);case 4:return De(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=Pl,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function V(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw ja=Da,Ta}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:dt(),e.lanes|=t,ql|=t)}function zc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bc(t),null;case 1:return Bc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),Oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),Bc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(Bc(t),V(t,a,null,r,n)):(Bc(t),Lc(t,o))):o?o===e.memoizedState?(Bc(t),t.flags&=-16777217):(Ic(t),Bc(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),Bc(t),V(t,a,e,r,n)),null;case 27:if(Ae(t),n=Te.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Bc(t),null}e=Ce.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return Bc(t),null;case 5:if(Ae(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Bc(t),null}if(o=Ce.current,Ui(t))Vi(t,o);else{var s=Bd(Te.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ct]=t,o[wt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return Bc(t),V(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Te.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[Ct]=t,t.stateNode=e}return Bc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ct]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bc(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return Bc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ct]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bc(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),Bc(t),null);case 4:return Oe(),e===null&&xd(t.stateNode.containerInfo),Bc(t),null;case 10:return Zi(t.type),Bc(t),null;case 19:if(xe(R),r=t.memoizedState,r===null)return Bc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pi(n,e),n=n.sibling;return Se(R,R.current&1|2),L&&Ai(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ue()>$l&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return Bc(t),null}else 2*Ue()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Bc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ue(),e.sibling=null,n=R.current,Se(R,a?n&1|2:n&1),L&&Ai(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Bc(t),t.subtreeFlags&6&&(t.flags|=8192)):Bc(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&xe(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),Bc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),Oe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(R),null;case 4:return Oe(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&xe(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Uc(e,t){switch(Ni(t),t.tag){case 3:Zi(la),Oe();break;case 26:case 27:case 5:Ae(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:xe(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&xe(ba);break;case 24:Zi(la)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function H(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Uu(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function U(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[wt]=t}catch(t){Uu(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function W(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(W(e,t,n),e=e.sibling;e!==null;)W(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[Ct]=e,t[wt]=n}catch(t){Uu(e,e.return,t)}}var G=!1,el=!1,tl=!1,K=typeof WeakSet==`function`?WeakSet:Set,nl=null;function rl(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,nl=t;nl!==null;)if(t=nl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,nl=e;else for(;nl!==null;){switch(t=nl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,nl=e;break}nl=t.return}}function q(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Wc(5,n);break;case 1:if(gl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Gc(n),r&512&&U(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:gl(e,n),t===null&&r&4&&Jc(n),r&512&&U(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&cl(e,n);break;case 13:gl(e,n),r&4&&ll(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||G,!r){t=t!==null&&t.memoizedState!==null||el,i=G;var a=el;G=r,(el=t)&&!a?_l(e,n,(n.subtreeFlags&8772)!=0):gl(e,n),G=i,el=a}break;case 30:break;default:gl(e,n)}}function il(e){var t=e.alternate;t!==null&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&jt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var al=null,J=!1;function ol(e,t,n){for(n=n.child;n!==null;)sl(e,t,n),n=n.sibling}function sl(e,t,n){if($e&&typeof $e.onCommitFiberUnmount==`function`)try{$e.onCommitFiberUnmount(Qe,n)}catch{}switch(n.tag){case 26:el||qc(n,t),ol(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||qc(n,t);var r=al,i=J;Zd(n.type)&&(al=n.stateNode,J=!1),ol(e,t,n),pf(n.stateNode),al=r,J=i;break;case 5:el||qc(n,t);case 6:if(r=al,i=J,al=null,ol(e,t,n),al=r,J=i,al!==null)if(J)try{(al.nodeType===9?al.body:al.nodeName===`HTML`?al.ownerDocument.body:al).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{al.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:al!==null&&(J?(e=al,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(al,n.stateNode));break;case 4:r=al,i=J,al=n.stateNode.containerInfo,J=!0,ol(e,t,n),al=r,J=i;break;case 0:case 11:case 14:case 15:H(2,n,t),el||H(4,n,t),ol(e,t,n);break;case 1:el||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ol(e,t,n);break;case 21:ol(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,ol(e,t,n),el=r;break;default:ol(e,t,n)}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function ll(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ul(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new K),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new K),t;default:throw Error(i(435,e.tag))}}function Y(e,t){var n=ul(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){al=c.stateNode,J=!1;break a}break;case 5:al=c.stateNode,J=!1;break a;case 3:case 4:al=c.stateNode.containerInfo,J=!0;break a}c=c.return}if(al===null)throw Error(i(160));sl(o,s,a),al=null,J=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(H(3,e,e.return),Wc(3,e),H(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(el||n===null||qc(n,n.return)),r&64&&G&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=fl;if(dl(t,e),ml(e),r&512&&(el||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[At]||o[Ct]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[Ct]=e,It(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[Ct]=e,It(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(el||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(el||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{C(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=fl,fl=gf(t.containerInfo),dl(t,e),fl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}tl&&(tl=!1,hl(e));break;case 4:r=fl,fl=gf(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Y(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=Ue()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Y(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=G,d=el;if(G=u||a,el=d||l,dl(t,e),el=d,G=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||G||el||X(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Y(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Y(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(C(o,``),n.flags&=-33),Qc(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;W(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)q(e,t.alternate,t),t=t.sibling}function X(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:H(4,t,t.return),X(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),X(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),X(t);break;case 22:t.memoizedState===null&&X(t);break;case 30:X(t);break;default:X(t)}e=e.sibling}}function _l(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:_l(i,a,n),Wc(4,a);break;case 1:if(_l(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Gc(a),U(a,a.return);break;case 27:$c(a);case 26:case 5:_l(i,a,n),n&&r===null&&o&4&&Jc(a),U(a,a.return);break;case 12:_l(i,a,n);break;case 31:_l(i,a,n),n&&o&4&&cl(i,a);break;case 13:_l(i,a,n),n&&o&4&&ll(i,a);break;case 22:a.memoizedState===null&&_l(i,a,n),U(a,a.return);break;case 30:break;default:_l(i,a,n)}t=t.sibling}}function vl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Z(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function yl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bl(e,t,n,r),t=t.sibling}function bl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:yl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:yl(e,t,n,r);break;case 3:yl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){yl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else yl(e,t,n,r);break;case 31:yl(e,t,n,r);break;case 13:yl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?yl(e,t,n,r):(a._visibility|=2,xl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?yl(e,t,n,r):Sl(e,t),i&2048&&vl(o,t);break;case 24:yl(e,t,n,r),i&2048&&Z(t.alternate,t);break;default:yl(e,t,n,r)}}function xl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:xl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,xl(a,o,s,c,i)):u._visibility&2?xl(a,o,s,c,i):Sl(a,o),i&&l&2048&&vl(o.alternate,o);break;case 24:xl(a,o,s,c,i),i&&l&2048&&Z(o.alternate,o);break;default:xl(a,o,s,c,i)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Sl(n,r),i&2048&&vl(r.alternate,r);break;case 24:Sl(n,r),i&2048&&Z(r.alternate,r);break;default:Sl(n,r)}t=t.sibling}}var Cl=8192;function wl(e,t,n){if(e.subtreeFlags&Cl)for(e=e.child;e!==null;)Tl(e,t,n),e=e.sibling}function Tl(e,t,n){switch(e.tag){case 26:wl(e,t,n),e.flags&Cl&&e.memoizedState!==null&&Gf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:wl(e,t,n);break;case 3:case 4:var r=fl;fl=gf(e.stateNode.containerInfo),wl(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Cl,Cl=16777216,wl(e,t,n),Cl=r):wl(e,t,n));break;default:wl(e,t,n)}}function El(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Al(r,e)}El(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ol(e),e=e.sibling}function Ol(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&H(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,kl(e)):Dl(e);break;default:Dl(e)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Al(r,e)}El(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:H(8,t,t.return),kl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,kl(t));break;default:kl(t)}e=e.sibling}}function Al(e,t){for(;nl!==null;){var n=nl;switch(n.tag){case 0:case 11:case 15:H(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nl=r;else a:for(n=e;nl!==null;){r=nl;var i=r.sibling,a=r.return;if(il(r),r===n){nl=null;break a}if(i!==null){i.return=a,nl=i;break a}nl=a}}}var jl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},Ml=typeof WeakMap==`function`?WeakMap:Map,Nl=0,Pl=null,Q=null,Fl=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return Nl&2&&Fl!==0?Fl&-Fl:b.T===null?bt():ud()}function fu(){if(Kl===0)if(!(Fl&536870912)||L){var e=ot;ot<<=1,!(ot&3932160)&&(ot=262144),Kl=e}else Kl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Pl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Fl,Kl,!1)),pt(e,n),(!(Nl&2)||e!==Pl)&&(e===Pl&&(!(Nl&2)&&(Wl|=n),Hl===4&&_u(e,Fl,Kl,!1)),nd(e))}function mu(e,t,n){if(Nl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||x(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-Ue(),10<a)){if(_u(r,t,Kl,!Rl),lt(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hn},Tl(t,a,d);var m=(a&62914560)===a?Zl-Ue():(a&4194048)===a?Ql-Ue():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-tt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ht(e,n,t)}function vu(){return Nl&6?!0:(rd(0,!1),!1)}function yu(){if(Q!==null){if(Il===0)var e=Q.return;else e=Q,Yi=Ji=null,jo(e),Pa=null,Fa=0,e=Q;for(;e!==null;)Uc(e.alternate,e),e=e.return;Q=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Pl=e,Q=n=fi(e.current,null),Fl=t,Il=0,Ll=null,Rl=!1,zl=x(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-tt(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,ni(),n}function xu(e,t){z=null,b.H=Vs,t===wa||t===Ea?(t=Ma(),Il=3):t===Ta?(t=Ma(),Il=4):Il=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Q===null&&(Hl=1,$s(e,bi(t,e.current)))}function Su(){var e=ao.current;return e===null?!0:(Fl&4194048)===Fl?oo===null:(Fl&62914560)===Fl||Fl&536870912?e===oo:!1}function Cu(){var e=b.H;return b.H=Vs,e===null?Vs:e}function wu(){var e=b.A;return b.A=jl,e}function Tu(){Hl=4,Rl||(Fl&4194048)!==Fl&&ao.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Pl===null||_u(Pl,Fl,Kl,!1)}function Eu(e,t,n){var r=Nl;Nl|=2;var i=Cu(),a=wu();(Pl!==e||Fl!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Q!==null){var s=Q,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,Nl=r,b.H=i,b.A=a,Q===null&&(Pl=null,Fl=0,ni()),o}function Du(){for(;Q!==null;)Au(Q)}function Ou(e,t){var n=Nl;Nl|=2;var r=Cu(),a=wu();Pl!==e||Fl!==t?(eu=null,$l=Ue()+500,bu(e,t)):zl=x(e,t);a:do try{if(Il!==0&&Q!==null){t=Q;var o=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Pl!==e||(Il=7),nd(e)},o.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:Oa(o)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Q.tag){case 26:s=Q.memoizedState;case 5:case 27:var c=Q;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Q=l;else{var u=c.return;u===null?Q=null:(Q=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,o,5);break;case 6:Il=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return Yi=Ji=null,b.H=r,b.A=a,Nl=n,Q===null?(Pl=null,Fl=0,ni(),Hl):0}function ku(){for(;Q!==null&&!Ve();)Au(Q)}function Au(e){var t=Fc(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Q=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,Fl);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,Fl);break;case 5:jo(t);default:Uc(n,t),t=Q=pi(t,Vl),t=Fc(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Q=t}function Mu(e,t,n,r){Yi=Ji=null,jo(t),Pa=null,Fa=0;var i=t.return;try{if(ic(e,i,t,n,Fl)){Hl=1,$s(e,bi(n,e.current)),Q=null;return}}catch(t){if(i!==null)throw Q=i,t;Hl=1,$s(e,bi(n,e.current)),Q=null;return}t.flags&32768?(L||r===1?e=!0:zl||Fl&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Vc(t.alternate,t,Vl);if(n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,Q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=n}while(e!==null);Hl=6,Q=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(Nl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ti,mt(e,n,o,s,c,l),e===Pl&&(Q=Pl=null,Fl=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(qe,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=b.T,b.T=null,a=ge.p,ge.p=2,s=Nl,Nl|=4;try{rl(e,t,n)}finally{Nl=s,ge.p=a,b.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=b.T,b.T=null;var r=ge.p;ge.p=2;var i=Nl;Nl|=4;try{pl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&j(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var ee=d[s];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}sp=!!Rd,zd=Rd=null}finally{Nl=i,ge.p=r,b.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=b.T,b.T=null;var r=ge.p;ge.p=2;var i=Nl;Nl|=4;try{q(e,t.alternate,t)}finally{Nl=i,ge.p=r,b.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,He();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),yt(n),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot==`function`)try{$e.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=b.T,i=ge.p,ge.p=2,b.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{b.T=t,ge.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=yt(au),r=b.T,a=ge.p;try{ge.p=32>n?32:n,b.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,Nl&6)throw Error(i(331));var c=Nl;if(Nl|=4,Ol(o.current),bl(o,o.current,s,n),Nl=c,rd(0,!1),$e&&typeof $e.onPostCommitFiberRoot==`function`)try{$e.onPostCommitFiberRoot(Qe,o)}catch{}return!0}finally{ge.p=a,b.T=r,zu(e,t)}}function Hu(e,t,n){t=bi(n,t),t=tc(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(pt(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=bi(n,e),n=nc(2),r=Ka(t,n,2),r!==null&&(rc(n,r,t,e),pt(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ml;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Pl===e&&(Fl&n)===n&&(Hl===4||Hl===3&&(Fl&62914560)===Fl&&300>Ue()-Zl?!(Nl&2)&&bu(e,0):Gl|=n,ql===Fl&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=dt()),e=ai(e,t),e!==null&&(pt(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return ze(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-tt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Fl,a=lt(r,r===Pl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||x(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=Ue(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-tt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ut(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Pl,n=Fl,n=lt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Be(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||x(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Be(r),yt(n)){case 2:case 8:n=Ke;break;case 32:n=qe;break;case 268435456:n=Ye;break;default:n=qe}return r=sd.bind(null,e),n=ze(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Be(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Fl;return r=lt(e,e===Pl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,Ue()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){Nl&6?ze(Ge,id):ad()})}function ud(){if(td===0){var e=ma;e===0&&(e=at,at<<=1,!(at&261888)&&(at=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:mn(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[wt]||null).action),o=r.submitter;o&&(t=(t=o[wt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new In(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Xr.length;md++){var hd=Xr[md];Zr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Zr(Wr,`onAnimationEnd`),Zr(F,`onAnimationIteration`),Zr(Gr,`onAnimationStart`),Zr(`dblclick`,`onDoubleClick`),Zr(`focusin`,`onFocus`),Zr(`focusout`,`onBlur`),Zr(Kr,`onTransitionRun`),Zr(I,`onTransitionStart`),Zr(qr,`onTransitionCancel`),Zr(Jr,`onTransitionEnd`),Bt(`onMouseEnter`,[`mouseout`,`mouseover`]),Bt(`onMouseLeave`,[`mouseout`,`mouseover`]),Bt(`onPointerEnter`,[`pointerout`,`pointerover`]),Bt(`onPointerLeave`,[`pointerout`,`pointerover`]),zt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),zt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),zt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),zt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),zt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),zt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[Et];n===void 0&&(n=t[Et]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,Lt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!Tn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Sn(function(){var r=a,i=_n(n),s=[];a:{var c=Yr.get(e);if(c!==void 0){var l=In,u=e;switch(e){case`keypress`:if(jn(n)===0)break a;case`keydown`:case`keyup`:l=er;break;case`focusin`:u=`focus`,l=Gn;break;case`focusout`:u=`blur`,l=Gn;break;case`beforeblur`:case`afterblur`:l=Gn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Un;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Wn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=nr;break;case Wr:case F:case Gr:l=Kn;break;case Jr:l=rr;break;case`scroll`:case`scrollend`:l=Rn;break;case`wheel`:l=ir;break;case`copy`:case`cut`:case`paste`:l=qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=tr;break;case`toggle`:case`beforetoggle`:l=ar}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Cn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==gn&&(u=n.relatedTarget||n.fromElement)&&(Mt(u)||u[Tt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Mt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Un,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=tr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Pt(l),h=u==null?c:Pt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Mt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?Pt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=O;else if(gr(c))if(xr)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&dn(r.elementType)&&(v=O):v=Or;if(v&&=v(e,r)){_r(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&S(c,`number`,c.value)}switch(y=r?Pt(r):window,e){case`focusin`:(gr(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(M)break;case`keydown`:case`keyup`:Br(s,n,i)}var ee;if(sr)b:{switch(e){case`compositionstart`:var te=`onCompositionStart`;break b;case`compositionend`:te=`onCompositionEnd`;break b;case`compositionupdate`:te=`onCompositionUpdate`;break b}te=void 0}else pr?fr(e,n)&&(te=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(te=`onCompositionStart`);te&&(ur&&n.locale!==`ko`&&(pr||te!==`onCompositionStart`?te===`onCompositionEnd`&&pr&&(ee=An()):(Dn=i,On=`value`in Dn?Dn.value:Dn.textContent,pr=!0)),y=Td(r,te),0<y.length&&(te=new Jn(te,e,null,n,i),s.push({event:te,listeners:y}),ee?te.data=ee:(ee=T(n),ee!==null&&(te.data=ee)))),(ee=lr?mr(e,n):hr(e,n))&&(te=Td(r,`onBeforeInput`),0<te.length&&(y=new Jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:te}),y.data=ee)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Cn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=Cn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Cn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=Cn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||C(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&C(e,``+r);break;case`className`:Kt(e,`class`,r);break;case`tabIndex`:Kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Kt(e,n,r);break;case`style`:un(e,r,o);break;case`data`:if(t!==`object`){Kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=mn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=mn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=hn);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=mn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Gt(e,`popover`,r);break;case`xlinkActuate`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Gt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=fn.get(n)||n,Gt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:un(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?C(e,r):(typeof r==`number`||typeof r==`bigint`)&&C(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=hn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Rt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[wt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Gt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}rn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&an(e,!!r,n,!0):an(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}sn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(dn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}nn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?an(e,!!n,n?[]:``,!1):an(e,!!n,t,!0)):an(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}on(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(dn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[At]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),jt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[At])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);jt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=ge.d;ge.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=Nt(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=tn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),It(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+tn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+tn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+tn(n.imageSizes)+`"]`)):i+=`[href="`+tn(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),It(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+tn(r)+`"][href="`+tn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),It(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ft(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);It(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ft(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),It(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ft(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),It(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=Te.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ft(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ft(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ft(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+tn(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),It(t),e.head.appendChild(t))}function Pf(e){return`[src="`+tn(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+tn(n.href)+`"]`);if(r)return t.instance=r,It(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),It(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,It(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),It(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,It(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),It(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[At]||a[Ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,It(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),It(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:re,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ui(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=ci,e):ci}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(pu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ai(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=vt(t);var n=ai(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=b.T;b.T=null;var a=ge.p;try{ge.p=2,up(e,t,n,r)}finally{ge.p=a,b.T=i}}function lp(e,t,n,r){var i=b.T;b.T=null;var a=ge.p;try{ge.p=8,up(e,t,n,r)}finally{ge.p=a,b.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Nt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ct(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-tt(o);s.entanglements[1]|=c,o&=~c}nd(a),!(Nl&6)&&($l=Ue()+500,rd(0,!1))}}break;case 31:case 13:s=ai(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=_n(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(We()){case Ge:return 2;case Ke:return 8;case qe:case Je:return 32;case Ye:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Nt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,xt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,xt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gn=r,n.target.dispatchEvent(r),gn=null}else return t=Nt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Nt(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[wt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[wt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[Tt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=bt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:b,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Qe=zp.inject(Rp),$e=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[Tt]=t.current,xd(e),new Fp(t)}})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v,y,ee,te,ne=o((()=>{v=`modulepreload`,y=function(e){return`/`+e},ee={},te=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=y(t,n),t in ee)return;ee[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:v,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));function re(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ie(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return le(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ue(t)}return fe(t,n,null,e)}function ae(e,t){if(e===!1||e==null)throw Error(t)}function oe(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function se(){return Math.random().toString(36).substring(2,10)}function ce(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function le(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?de(t):t,state:n,key:t&&t.key||r||se(),mask:i}}function ue({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function de(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function fe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=re(e)?e:le(h.location,e,t);n&&n(r,e),l=u()+1;let d=ce(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=re(e)?e:le(h.location,e,t);n&&n(r,e),l=u();let i=ce(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return pe(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(cn,d),c=e,()=>{i.removeEventListener(cn,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function pe(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),ae(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ue(t);return i=i.replace(/ $/,`%20`),!n&&i.startsWith(`//`)&&(i=r+i),new URL(i,r)}function me(e,t,n=`/`){return he(e,t,n,!1)}function he(e,t,n,r,i){let a=Ee((typeof t==`string`?de(t):t).pathname||`/`,n);if(a==null)return null;let o=i??ge(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=Se(o[e],c,r);return s}function b(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ge(e){let t=_e(e);return ye(t),t}function _e(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;ae(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=vn([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(ae(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),_e(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:be(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of ve(e.path))a(e,t,!0,n)}),t}function ve(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=ve(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ye(e){e.sort((e,t)=>e.score===t.score?xe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}function be(e,t){let n=e.split(`/`),r=n.length;return n.some(hn)&&(r+=mn),t&&(r+=dn),n.filter(e=>!hn(e)).reduce((e,t)=>e+(ln.test(t)?un:t===``?fn:pn),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:vn([a,u.pathname]),pathnameBase:bn(vn([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=vn([a,u.pathnameBase]))}return o}function Ce(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){oe(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return oe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?de(e):e,a;return n?(n=_n(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:xn(r),hash:Sn(i)}}function Oe(e,t){let n=yn(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=de(e):(i={...e},ae(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),ae(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),ae(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}function Ne(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Pe(e){return vn(e.map(e=>e.route.path).filter(Boolean))||`/`}function Fe(e,t){let n=e;if(typeof n!=`string`||!gn.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(wn)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{oe(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}function Ie(){return rn.useContext(kn)}function Le(e){if(e.startsWith(`${Ln}:${Rn}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function Re(e){if(e.startsWith(`${Ln}:${zn}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Cn(t.status,t.statusText,t.data)}catch{}}function ze(e,{relative:t}={}){ae(Be(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=S.useContext(Nn),{hash:i,pathname:a,search:o}=Ge(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:vn([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Be(){return S.useContext(Pn)!=null}function Ve(){return ae(Be(),`useLocation() may be used only in the context of a <Router> component.`),S.useContext(Pn).location}function He(e){S.useContext(Nn).static||S.useLayoutEffect(e)}function Ue(){let{isDataRoute:e}=S.useContext(Fn);return e?st():We()}function We(){ae(Be(),`useNavigate() may be used only in the context of a <Router> component.`);let e=S.useContext(Dn),{basename:t,navigator:n}=S.useContext(Nn),{matches:r}=S.useContext(Fn),{pathname:i}=Ve(),a=JSON.stringify(je(r)),o=S.useRef(!1);return He(()=>{o.current=!0}),S.useCallback((r,s={})=>{if(oe(o.current,Bn),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:vn([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}function Ge(e,{relative:t}={}){let{matches:n}=S.useContext(Fn),{pathname:r}=Ve(),i=JSON.stringify(je(n));return S.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ke(e,t){return qe(e,t)}function qe(e,t,n){ae(Be(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=S.useContext(Nn),{matches:i}=S.useContext(Fn),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;ct(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=Ve(),d;if(t){let e=typeof t==`string`?de(t):t;ae(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):me(e,{pathname:p});oe(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),oe(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ze(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:vn([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:vn([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?S.createElement(Pn.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Je(){let e=ot(),t=Ne(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=S.createElement(S.Fragment,null,S.createElement(`p`,null,`💿 Hey developer 👋`),S.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,S.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,S.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),S.createElement(S.Fragment,null,S.createElement(`h2`,null,`Unexpected Application Error!`),S.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?S.createElement(`pre`,{style:i},n):null,o)}function Ye({children:e,error:t}){let{basename:n}=S.useContext(Nn);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Le(t.digest);if(e){let r=Un.get(t);if(r)throw r;let i=Fe(e.location,n);if(wn&&!Un.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Un.set(t,n),n}return S.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Xe({routeContext:e,match:t,children:n}){let r=S.useContext(Dn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(Fn.Provider,{value:e},n)}function Ze(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);ae(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Pe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Vn,o&&(s<0&&c===0?(ct(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?S.createElement(n.route.Component,null):n.route.element?n.route.element:e,S.createElement(Xe,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?S.createElement(Hn,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Qe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $e(e){let t=S.useContext(Dn);return ae(t,Qe(e)),t}function et(e){let t=S.useContext(On);return ae(t,Qe(e)),t}function tt(e){let t=S.useContext(Fn);return ae(t,Qe(e)),t}function nt(e){let t=tt(e),n=t.matches[t.matches.length-1];return ae(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function rt(){return nt(`useRouteId`)}function it(){let e=et(`useNavigation`);return S.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function at(){let{matches:e,loaderData:t}=et(`useMatches`);return S.useMemo(()=>e.map(e=>b(e,t)),[e,t])}function ot(){let e=S.useContext(In),t=et(`useRouteError`),n=nt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function st(){let{router:e}=$e(`useNavigate`),t=nt(`useNavigate`),n=S.useRef(!1);return He(()=>{n.current=!0}),S.useCallback(async(r,i={})=>{oe(n.current,Bn),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}function ct(e,t,n){!t&&!Wn[e]&&(Wn[e]=!0,oe(!1,n))}function lt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return qe(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function x(e){ae(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function ut({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){ae(!Be(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=an.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=de(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=an.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return oe(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:an.createElement(Nn.Provider,{value:c},an.createElement(Pn.Provider,{children:t,value:h}))}function dt({children:e,location:t}){return Ke(ft(e),t)}function ft(e,t=[]){let n=[];return an.Children.forEach(e,(e,r)=>{if(!an.isValidElement(e))return;let i=[...t,r];if(e.type===an.Fragment){n.push.apply(n,ft(e.props.children,i));return}ae(e.type===x,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ae(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ft(e.props.children,i)),n.push(a)}),n}function pt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function mt(e){return pt(e)&&e.tagName.toLowerCase()===`button`}function ht(e){return pt(e)&&e.tagName.toLowerCase()===`form`}function gt(e){return pt(e)&&e.tagName.toLowerCase()===`input`}function _t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vt(e,t){return e.button===0&&(!t||t===`_self`)&&!_t(e)}function yt(){if(qn===null)try{new FormData(document.createElement(`form`),0),qn=!1}catch{qn=!0}return qn}function bt(e){return e!=null&&!Jn.has(e)?(oe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kn}"`),null):e}function xt(e,t){let n,r,i,a,o;if(ht(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Gn,i=bt(e.getAttribute(`enctype`))||Kn,a=new FormData(e)}else if(mt(e)||gt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Gn,i=bt(e.getAttribute(`formenctype`))||bt(o.getAttribute(`enctype`))||Kn,a=new FormData(o,e),!yt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(pt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Gn,r=null,i=Kn,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function St(e){return e.replace(Xn,e=>Yn[e])}function Ct(e,t){if(e===!1||e==null)throw Error(t)}function wt(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ee(i.pathname,t)===`/`?i.pathname=`${yn(t)}/_root.${r}`:i.pathname=`${yn(i.pathname)}.${r}`,i}async function Tt(e,t){if(e.id in t)return t[e.id];try{let n=await te(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Et(e){return e!=null&&typeof e.page==`string`}function Dt(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Ot(e,t,n){return Nt((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Tt(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Dt).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function kt(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function At(e,t,{includeHydrateFallback:n}={}){return jt(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function jt(e){return[...new Set(e)]}function Mt(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Nt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Et(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Mt(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Pt(){let e=sn.useContext(Dn);return Ct(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Ft(){let e=sn.useContext(On);return Ct(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}function It(){let e=sn.useContext(Zn);return Ct(e,`You must render this element inside a <HydratedRouter> element`),e}function Lt(e,t){let n=sn.useContext(Zn),[r,i]=sn.useState(!1),[a,o]=sn.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=sn.useRef(null);sn.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),sn.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Rt(s,p),onBlur:Rt(c,m),onMouseEnter:Rt(l,p),onMouseLeave:Rt(u,m),onTouchStart:Rt(d,p)}]:[a,f,{}]:[!1,f,{}]}function Rt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function zt({page:e,...t}){let n=Ie(),{router:r}=Pt(),i=sn.useMemo(()=>me(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?sn.createElement(Vt,{page:e,matches:i,...t}):sn.createElement(Ht,{page:e,matches:i,...t}):null}function Bt(e){let{manifest:t,routeModules:n}=It(),[r,i]=sn.useState([]);return sn.useEffect(()=>{let r=!1;return Ot(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Vt({page:e,matches:t,...n}){let r=Ve(),{future:i}=It(),{basename:a}=Pt(),o=sn.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=wt(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return sn.createElement(sn.Fragment,null,o.map(e=>sn.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Ht({page:e,matches:t,...n}){let r=Ve(),{future:i,manifest:a,routeModules:o}=It(),{basename:s}=Pt(),{loaderData:c,matches:l}=Ft(),u=sn.useMemo(()=>kt(e,t,l,a,r,`data`),[e,t,l,a,r]),d=sn.useMemo(()=>kt(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=sn.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=wt(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=sn.useMemo(()=>At(d,a),[d,a]),m=Bt(d);return sn.createElement(sn.Fragment,null,f.map(e=>sn.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>sn.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>sn.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Ut(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}function Wt({basename:e,children:t,useTransitions:n,window:r}){let i=C.useRef();i.current??=ie({window:r,v5Compat:!0});let a=i.current,[o,s]=C.useState({action:a.action,location:a.location}),c=C.useCallback(e=>{n===!1?s(e):C.startTransition(()=>s(e))},[n]);return C.useLayoutEffect(()=>a.listen(c),[a,c]),C.createElement(ut,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Gt({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=C.useState({action:n.action,location:n.location}),o=C.useCallback(e=>{r===!1?a(e):C.startTransition(()=>a(e))},[r]);return C.useLayoutEffect(()=>n.listen(o),[n,o]),C.createElement(ut,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}function Kt({getKey:e,storageKey:t,...n}){let r=C.useContext(Zn),{basename:i}=C.useContext(Nn),a=Ve(),o=at();en({getKey:e,storageKey:t});let s=C.useMemo(()=>{if(!r||!e)return null;let t=$t(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return C.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${St(JSON.stringify(t||ar))}, ${St(JSON.stringify(s))})`}})}function qt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jt(e){let t=C.useContext(Dn);return ae(t,qt(e)),t}function Yt(e){let t=C.useContext(On);return ae(t,qt(e)),t}function Xt(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=Ue(),d=Ve(),f=Ge(e,{relative:o});return C.useCallback(p=>{if(vt(p,t)){p.preventDefault();let t=n===void 0?ue(d)===ue(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?C.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function Zt(){let{router:e}=Jt(`useSubmit`),{basename:t}=C.useContext(Nn),n=rt(),r=e.fetch,i=e.navigate;return C.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=xt(e,t);a.navigate===!1?await r(a.fetcherKey||ir(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Qt(e,{relative:t}={}){let{basename:n}=C.useContext(Nn),r=C.useContext(Fn);ae(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Ge(e||`.`,{relative:t})},o=Ve();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:vn([n,a.pathname])),ue(a)}function $t(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ee(e.pathname,n)||e.pathname},t)),i??=e.key,i}function en({getKey:e,storageKey:t}={}){let{router:n}=Jt(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Yt(`useScrollRestoration`),{basename:a}=C.useContext(Nn),o=Ve(),s=at(),c=it();C.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),tn(C.useCallback(()=>{if(c.state===`idle`){let t=$t(o,s,a,e);or[t]=window.scrollY}try{sessionStorage.setItem(t||ar,JSON.stringify(or))}catch(e){oe(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(C.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||ar);e&&(or=JSON.parse(e))}catch{}},[t]),C.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(or,()=>window.scrollY,e?(t,n)=>$t(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),C.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{oe(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function tn(e,t){let{capture:n}=t||{};C.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function nn(e,{relative:t}={}){let n=C.useContext(An);ae(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Jt(`useViewTransitionState`),i=Ge(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ce(i.pathname,o)!=null||Ce(i.pathname,a)!=null}var rn,S,an,on,sn,C,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr=o((()=>{rn=l(d(),1),S=l(d(),1),an=l(d(),1),d(),on=l(d(),1),sn=l(d(),1),d(),d(),d(),C=l(d(),1),d(),ne(),cn=`popstate`,ln=/^:[\w-]+$/,un=3,dn=2,fn=1,pn=10,mn=-2,hn=e=>e===`*`,gn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_n=e=>e.replace(/\/\/+/g,`/`),vn=e=>_n(e.join(`/`)),yn=e=>e.replace(/\/+$/,``),bn=e=>yn(e).replace(/^\/*/,`/`),xn=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Sn=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Cn=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}},wn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`),Tn=[`POST`,`PUT`,`PATCH`,`DELETE`],new Set(Tn),En=[`GET`,...Tn],new Set(En),Dn=rn.createContext(null),Dn.displayName=`DataRouter`,On=rn.createContext(null),On.displayName=`DataRouterState`,kn=rn.createContext(!1),An=rn.createContext({isTransitioning:!1}),An.displayName=`ViewTransition`,jn=rn.createContext(new Map),jn.displayName=`Fetchers`,Mn=rn.createContext(null),Mn.displayName=`Await`,Nn=rn.createContext(null),Nn.displayName=`Navigation`,Pn=rn.createContext(null),Pn.displayName=`Location`,Fn=rn.createContext({outlet:null,matches:[],isDataRoute:!1}),Fn.displayName=`Route`,In=rn.createContext(null),In.displayName=`RouteError`,Ln=`REACT_ROUTER_ERROR`,Rn=`REDIRECT`,zn=`ROUTE_ERROR_RESPONSE`,Bn=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`,S.createContext(null),Vn=S.createElement(Je,null),Hn=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=Re(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:S.createElement(Fn.Provider,{value:this.props.routeContext},S.createElement(In.Provider,{value:e,children:this.props.component}));return this.context?S.createElement(Ye,{error:e},t):t}},Hn.contextType=kn,Un=new WeakMap,Wn={},an.memo(lt),an.Component,Gn=`get`,Kn=`application/x-www-form-urlencoded`,qn=null,Jn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]),Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`),Yn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Xn=/[&><\u2028\u2029]/g,Zn=sn.createContext(void 0),Zn.displayName=`FrameworkContext`,on.Component,Qn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Qn&&(window.__reactRouterVersion=`7.17.0`)}catch{}Gt.displayName=`unstable_HistoryRouter`,$n=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,er=C.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=C.useContext(Nn),v=typeof l==`string`&&$n.test(l),y=Fe(l,h);l=y.to;let ee=ze(l,{relative:r}),te=Ve(),ne=null;if(o){let e=Me(o,[],te.mask?te.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:vn([h,e.pathname])),ne=g.createHref(e)}let[re,ie,ae]=Lt(n,p),oe=Xt(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function se(t){e&&e(t),t.defaultPrevented||oe(t)}let ce=!(y.isExternal||i),le=C.createElement(`a`,{...p,...ae,href:(ce?ne:void 0)||y.absoluteURL||ee,onClick:ce?se:e,ref:Ut(m,ie),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return re&&!v?C.createElement(C.Fragment,null,le,C.createElement(zt,{page:ee})):le}),er.displayName=`Link`,tr=C.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Ge(a,{relative:c.relative}),d=Ve(),f=C.useContext(On),{navigator:p,basename:m}=C.useContext(Nn),h=f!=null&&nn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ee(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,ee=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,te=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),ne={isActive:ee,isPending:te,isTransitioning:h},re=ee?e:void 0,ie;ie=typeof n==`function`?n(ne):[n,ee?`active`:null,te?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ae=typeof i==`function`?i(ne):i;return C.createElement(er,{...c,"aria-current":re,className:ie,ref:l,style:ae,to:a,viewTransition:o},typeof s==`function`?s(ne):s)}),tr.displayName=`NavLink`,nr=C.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Gn,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=C.useContext(Nn),g=Zt(),_=Qt(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&$n.test(s);return C.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?C.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})}),nr.displayName=`Form`,Kt.displayName=`ScrollRestoration`,rr=0,ir=()=>`__${String(++rr)}__`,ar=`react-router-scroll-positions`,or={}})),cr=o((()=>{sr()})),lr=o((()=>{cr()})),ur=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),w=s(((e,t)=>{t.exports=ur()}));function dr(){let[e,t]=(0,fr.useState)(!1);return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(`div`,{className:`html-wrapper`,children:[(0,T.jsxs)(`div`,{className:`head-wrapper`,children:[(0,T.jsx)(`meta`,{charSet:`UTF-8`}),(0,T.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,T.jsx)(`title`,{children:`About Us | ProWorldz`}),(0,T.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap`,rel:`stylesheet`}),(0,T.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`}),(0,T.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gap: 1.5rem;
            --sides: 1.5rem;
            /* UPDATED: Color Palette - Black & White Theme */
            --primary-red: #ff2a2f;
            --primary-red-hover: #ff2a2f;
            --secondary-red: #ff2a2f;
            --accent-red: #ff2a2f;
            --dark-bg: #000000;
            --darker-bg: #000000;
            --card-bg: #080808;
            --card-hover: #080808;
            --text-primary: #ffffff;
            --text-secondary: #a3a3a3;
            --text-muted: #737373;
            --border-color: rgba(139, 12, 16, 0.1);
            --border-hover: rgba(255, 255, 255, 0.2);
            
            /* Spacing */
            --container-width: 1280px;
            --section-padding: 8rem 2rem;
            --card-padding: 2rem;
            
            /* Effects */
            --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            --transition-fast: all 0.2s ease;
            --shadow-glow: 0 0 40px rgba(139, 12, 16, 0.1);
            --shadow-intense: 0 20px 60px rgba(139, 12, 16, 0.15);
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--dark-bg);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
            line-height: 1.2;
        }

        /* ========================================
           NAVIGATION
        ======================================== */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.98);
            border-bottom: 1px solid var(--border-hover);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 1.25rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.75rem;
            font-weight: 800;
            font-family: 'Space Grotesk', sans-serif;
            color: var(--text-primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: var(--transition-fast);
        }

        .logo:hover {
            transform: translateY(-2px);
        }

        .logo-accent {
            color: var(--primary-red);
        }

        .logo-img {
            width: 40px;
            height: 40px;
            object-fit: contain;
            filter: brightness(1.2);
            transition: var(--transition-smooth);
        }

        .logo:hover .logo-img {
            transform: rotate(10deg) scale(1.1);
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .logo-text {
            display: flex;
            align-items: center;
            gap: 0.1rem;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 3rem;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            position: relative;
            transition: var(--transition-fast);
        }

        .nav-links a::before {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-red);
            transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--text-primary);
        }

        .nav-links a:hover::before,
        .nav-links a.active::before {
            width: 100%;
        }

        .nav-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.75rem;
            background: var(--primary-red);
            color: var(--dark-bg);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            border-radius: 8px;
            transition: var(--transition-smooth);
            border: 1px solid transparent;
        }

        .nav-cta:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-glow);
            transform: translateY(-2px);
            color: var(--dark-bg);
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 0.5rem;
            z-index: 1001;
            background: none;
            border: none;
        }

        .menu-toggle span {
            width: 24px;
            height: 2px;
            background: var(--text-primary);
            transition: var(--transition-fast);
        }

        /* Mobile menu animation */
        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        /* ========================================
           HERO SECTION
        ======================================== */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 8rem 2rem 6rem;
            background: 
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 12, 16, 0.05) 0%, transparent 50%),
                var(--darker-bg);
            margin-top: 80px;
        }

        .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
                linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%),
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.01) 2px, rgba(255, 255, 255, 0.01) 4px);
            pointer-events: none;
        }

        .hero-content {
            max-width: 900px;
            text-align: center;
            position: relative;
            z-index: 2;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.25rem;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--secondary-red);
            margin-bottom: 2rem;
            animation: fadeInDown 0.8s ease;
        }

        .hero-badge i {
            animation: sparkle 1.5s infinite;
        }

        @keyframes sparkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .hero h1 {
            font-size: clamp(2rem, 5vw, 4.5rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 0.8s ease 0.2s both;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .hero p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
            animation: fadeInUp 0.8s ease 0.4s both;
        }

        /* ========================================
           STATS
        ======================================== */
        .stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 3rem;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.6s both;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: clamp(1.5rem, 3vw, 3rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            font-family: 'Space Grotesk', sans-serif;
        }

        .stat-label {
            font-size: 0.85rem;
            color: var(--text-secondary);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        /* ========================================
           BUTTONS
        ======================================== */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 10px;
            text-decoration: none;
            transition: var(--transition-smooth);
            position: relative;
            overflow: hidden;
            border: 2px solid transparent;
            cursor: pointer;
            font-family: inherit;
        }

        .btn-primary {
            background: var(--primary-red);
            color: var(--dark-bg);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
        }

        .btn-primary:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-intense);
            transform: translateY(-3px);
            color: var(--dark-bg);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background: rgba(139, 12, 16, 0.05);
            border-color: var(--primary-red);
            transform: translateY(-3px);
        }

        /* ========================================
           SECTIONS
        ======================================== */
        .section {
            padding: clamp(3rem, 8vw, 8rem) 2rem;
            position: relative;
        }

        .section.dark {
            background: var(--darker-bg);
        }

        .section-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 5rem;
        }

        .section-badge {
            display: inline-block;
            padding: 0.5rem 1.25rem;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--secondary-red);
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .section-title {
            font-size: clamp(1.75rem, 4vw, 3rem);
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .section-description {
            font-size: clamp(0.95rem, 2vw, 1.15rem);
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .highlight {
            color: var(--primary-red);
        }

        /* ========================================
           FEATURES GRID
        ======================================== */
        .features-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-red), var(--secondary-red));
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
        }

        .feature-card:hover {
            background: var(--card-hover);
            border-color: var(--border-hover);
            transform: translateY(-8px);
            box-shadow: var(--shadow-glow);
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition: var(--transition-smooth);
        }

        .feature-card:hover .feature-icon {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1) rotate(5deg);
        }

        .feature-icon i {
            font-size: 1.75rem;
            color: var(--text-primary);
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
            font-size: 0.95rem;
        }

        /* ========================================
           VALUES SECTION
        ======================================== */
        .values-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            align-items: start;
        }

        .value-content h2 {
            font-size: clamp(1.75rem, 4vw, 2.5rem);
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .value-content h2 span {
            color: var(--primary-red);
        }

        .value-content p {
            font-size: 1rem;
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .value-list {
            display: grid;
            gap: 1.5rem;
        }

        .value-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .value-item i {
            color: var(--primary-red);
            font-size: 1.5rem;
            margin-top: 0.25rem;
            flex-shrink: 0;
        }

        .value-item h4 {
            font-size: 1.15rem;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        .value-item p {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.95rem;
        }

        /* ========================================
           ACHIEVEMENTS SECTION
        ======================================== */
        .achievements-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .achievement-card {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .achievement-card:hover {
            transform: translateY(-5px);
            border-color: var(--border-hover);
            box-shadow: var(--shadow-glow);
        }

        .achievement-card h4 {
            color: var(--primary-red);
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .achievement-card p {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.95rem;
        }

        /* ========================================
           MESSAGE SECTION
        ======================================== */
        .message-section {
            max-width: 800px;
            margin: 0 auto;
            padding: 3rem 2rem;
            background: var(--card-bg);
            border-radius: 20px;
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
        }

        .message-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, var(--primary-red), var(--secondary-red));
        }

        .message-content {
            position: relative;
            z-index: 2;
        }

        .quote-icon {
            color: var(--primary-red);
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        .message-text {
            font-size: clamp(1rem, 2vw, 1.3rem);
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-style: italic;
        }

        .founder-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .founder-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .founder-title {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        /* ========================================
           EXPERTISE SECTION
        ======================================== */
        .expertise-container {
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .expertise-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-top: 3rem;
        }

        .expertise-item {
            background: rgba(255, 255, 255, 0.03);
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .expertise-item:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: var(--border-hover);
            transform: translateY(-3px);
        }

        .expertise-item i {
            color: var(--primary-red);
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .expertise-item h4 {
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }

        .expertise-item p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* ========================================
           MENTOR SLIDER SECTION
        ======================================== */
        .mentor-slider-section {
            padding: clamp(3rem, 6vw, 6rem) 2rem;
            background: var(--darker-bg);
        }

        .mentor-slider-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 4rem;
        }

        .mentor-slider-title {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .mentor-slider-subtitle {
            font-size: clamp(0.95rem, 2vw, 1.1rem);
            color: var(--text-secondary);
            line-height: 1.6;
        }

        .mentor-slider-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            border-radius: 20px;
        }

        .mentor-slider-wrapper {
            display: flex;
            transition: transform 0.5s ease;
        }

        .mentor-slide {
            min-width: 100%;
            display: flex;
            gap: 2rem;
            padding: 2rem;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
        }

        .mentor-image-container {
            flex: 0 0 280px;
            border-radius: 15px;
            overflow: hidden;
            height: 320px;
            background: rgba(139, 12, 16, 0.05);
        }

        .mentor-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .mentor-image:hover {
            transform: scale(1.05);
        }

        .mentor-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .mentor-name {
            font-size: clamp(1.3rem, 3vw, 2rem);
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        .mentor-role {
            font-size: 1rem;
            color: var(--primary-red);
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .mentor-description {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 1.5rem;
        }

        .mentor-expertise {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }

        .expertise-tag {
            background: rgba(139, 12, 16, 0.1);
            color: var(--accent-red);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .mentor-quote {
            font-style: italic;
            color: var(--text-secondary);
            border-left: 3px solid var(--primary-red);
            padding-left: 1rem;
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .slider-controls {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }

        .slider-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(139, 12, 16, 0.05);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-smooth);
            font-size: 1.2rem;
        }

        .slider-btn:hover {
            background: var(--primary-red);
            color: var(--dark-bg);
            border-color: var(--primary-red);
            transform: translateY(-2px);
        }

        .slider-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .slider-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--text-muted);
            cursor: pointer;
            transition: var(--transition-smooth);
        }

        .slider-dot.active {
            background: var(--primary-red);
            transform: scale(1.2);
        }

        /* ========================================
           MOTTO SECTION
        ======================================== */
        .motto-section {
            text-align: center;
            padding: clamp(2rem, 4vw, 4rem);
            background: rgba(139, 12, 16, 0.05);
            border-radius: 20px;
            margin: clamp(2rem, 4vw, 4rem) auto;
            max-width: 800px;
            border: 1px solid var(--border-color);
        }

        .motto-text {
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            font-family: 'Space Grotesk', sans-serif;
        }

        .motto-subtext {
            color: var(--text-secondary);
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
            letter-spacing: 0.05em;
        }

        /* ========================================
           CTA SECTION
        ======================================== */
        .cta-section {
            padding: clamp(3rem, 8vw, 8rem) 2rem;
            background: var(--darker-bg);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
                repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255, 255, 255, 0.03) 80px, rgba(255, 255, 255, 0.03) 82px);
            pointer-events: none;
        }

        .cta-content {
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        .cta-content h2 {
            font-size: clamp(1.75rem, 4vw, 3.5rem);
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .cta-content p {
            font-size: clamp(1rem, 2vw, 1.2rem);
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
        }

        /* ========================================
           FOOTER
        ======================================== */
        .footer {
            padding: 3rem 2rem 1.5rem;
            background: var(--darker-bg);
            border-top: 1px solid var(--border-color);
        }

        .footer-container {
            max-width: var(--container-width);
            margin: 0 auto;
            text-align: center;
        }

        .footer-bottom {
            padding-top: 1.5rem;
            border-top: 1px solid rgba(139, 12, 16, 0.05);
            color: var(--text-muted);
            font-size: 0.85rem;
        }

        .footer-bottom p {
            margin-bottom: 0.5rem;
        }

        /* ========================================
           ANIMATIONS
        ======================================== */
        .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
        }

        .fade-in-up:nth-child(1) { animation-delay: 0.1s; }
        .fade-in-up:nth-child(2) { animation-delay: 0.2s; }
        .fade-in-up:nth-child(3) { animation-delay: 0.3s; }
        .fade-in-up:nth-child(4) { animation-delay: 0.4s; }
        .fade-in-up:nth-child(5) { animation-delay: 0.5s; }
        .fade-in-up:nth-child(6) { animation-delay: 0.6s; }

        /* ========================================
           RESPONSIVE DESIGN
        ======================================== */

        /* MOBILE RESPONSIVENESS (under 768px) */
        @media (max-width: 767px) {
            /* Show mobile menu toggle */
            .menu-toggle {
                display: flex;
            }

            /* Hide desktop nav items */
            .nav-links {
                position: fixed;
                top: 0;
                right: -100%;
                width: 280px;
                height: 100vh;
                background: rgba(0, 0, 0, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                padding: 100px 2rem 2rem;
                gap: 1.5rem;
                transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border-left: 1px solid var(--border-color);
                z-index: 1000;
                list-style: none;
            }

            .nav-links.active {
                right: 0;
            }

            /* Show login button in mobile menu */
            .nav-links .nav-cta {
                display: flex;
                margin-top: 1rem;
                justify-content: center;
            }

            /* Hide desktop login button */
            .nav-container > .nav-cta {
                display: none;
            }

            /* Hero section mobile adjustments */
            .hero {
                padding: 100px 1.5rem 4rem;
                min-height: 90vh;
                margin-top: 70px;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
                margin-bottom: 2rem;
            }

            /* Section adjustments */
            .section {
                padding: 3.5rem 1.5rem;
            }

            .section-header {
                margin-bottom: 3rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .section-description {
                font-size: 1rem;
            }

            /* Grid adjustments */
            .features-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .feature-card {
                padding: 1.5rem;
            }

            /* Stats mobile */
            .stats {
                gap: 1.5rem;
                margin-top: 2rem;
            }

            .stat-number {
                font-size: 2rem;
            }

            .stat-label {
                font-size: 0.75rem;
            }

            .values-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .mentor-slide {
                flex-direction: column;
                gap: 1.5rem;
                padding: 1.5rem;
            }

            .mentor-image-container {
                flex: 0 0 auto;
                width: 100%;
                max-width: 350px;
                margin: 0 auto;
                height: 280px;
            }

            .mentor-content {
                width: 100%;
            }

            .message-section {
                padding: 2rem 1.5rem;
            }

            .achievements-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .cta-content {
                padding: 0 1rem;
            }

            .btn {
                padding: 0.875rem 2rem;
                font-size: 0.95rem;
            }

            .expertise-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
            }
        }

        /* Tablet Responsiveness */
        @media (min-width: 768px) and (max-width: 1024px) {
            .nav-container {
                padding: 1rem 1.5rem;
            }

            .nav-links {
                gap: 2rem;
            }

            .hero {
                padding: 6rem 2rem 4rem;
            }

            .hero h1 {
                font-size: 3rem;
            }

            .hero p {
                font-size: 1.2rem;
            }

            .section {
                padding: 5rem 1.5rem;
            }

            .section-title {
                font-size: 2.2rem;
            }

            .features-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }

            .mentor-slide {
                gap: 1.5rem;
                padding: 1.5rem;
            }

            .mentor-image-container {
                flex: 0 0 250px;
                height: 280px;
            }

            .values-grid {
                gap: 2rem;
            }

            .footer-top {
                grid-template-columns: repeat(2, 1fr);
                gap: 3rem;
            }
        }

        /* Small Mobile Devices (up to 480px) */
        @media (max-width: 480px) {
            .nav-container {
                padding: 1rem;
            }

            .logo {
                font-size: 1.5rem;
            }

            .logo-img {
                width: 32px;
                height: 32px;
            }

            .nav-links {
                width: 250px;
                padding: 90px 1.5rem 2rem;
            }

            .hero {
                padding: 3.5rem 1rem 2rem;
                margin-top: 60px;
            }

            .hero h1 {
                font-size: 1.8rem;
            }

            .hero p {
                font-size: 0.95rem;
            }

            .section {
                padding: 2.5rem 1rem;
            }

            .section-header {
                margin-bottom: 2rem;
            }

            .section-title {
                font-size: 1.5rem;
            }

            .section-description {
                font-size: 0.9rem;
            }

            .hero-badge,
            .section-badge {
                font-size: 0.75rem;
                padding: 0.4rem 1rem;
            }

            .stats {
                flex-direction: column;
                gap: 1rem;
            }

            .stat-number {
                font-size: 1.8rem;
            }

            .stat-label {
                font-size: 0.9rem;
            }

            /* Compact cards */
            .feature-card {
                padding: 1.25rem;
            }

            .feature-card h3 {
                font-size: 1.25rem;
            }

            .value-item i {
                font-size: 1.25rem;
            }

            .value-item h4 {
                font-size: 1rem;
            }

            .mentor-slide {
                padding: 1rem;
                gap: 1rem;
            }

            .mentor-image-container {
                height: 240px;
                max-width: 100%;
            }

            .expertise-grid {
                grid-template-columns: 1fr;
            }

            .expertise-item {
                padding: 1.25rem;
            }

            .expertise-item h4 {
                font-size: 0.95rem;
            }

            .expertise-item p {
                font-size: 0.85rem;
            }

            .message-section {
                padding: 1.5rem;
            }

            .quote-icon {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }

            .message-text {
                font-size: 1rem;
                margin-bottom: 1.5rem;
            }

            .founder-name {
                font-size: 1rem;
            }

            .founder-title {
                font-size: 0.85rem;
            }

            .motto-section {
                padding: 1.5rem;
                margin: 1.5rem auto;
            }

            .btn {
                padding: 0.75rem 1.5rem;
                font-size: 0.9rem;
                width: 100%;
            }

            .slider-btn {
                width: 40px;
                height: 40px;
                font-size: 1rem;
            }

            .footer {
                padding: 2rem 1rem 1rem;
            }

            .footer-bottom {
                padding-top: 1rem;
            }

            .footer-bottom p {
                margin-bottom: 0.5rem;
            }
        }

        /* Extra Large Screens */
        @media (min-width: 1440px) {
            .features-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 3rem;
            }
        }

        /* Landscape Mobile Devices */
        @media (max-height: 600px) and (orientation: landscape) {
            .hero {
                min-height: 120vh;
                padding: 4rem 2rem;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .nav-links {
                max-height: 80vh;
                overflow-y: auto;
                padding-top: 80px;
            }
        }

        /* iOS Safari Fixes */
        @supports (-webkit-touch-callout: none) {
            .hero {
                min-height: -webkit-fill-available;
            }

            .nav-links {
                padding-top: 120px;
            }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
            .btn,
            .nav-cta,
            .nav-links a {
                min-height: 44px;
                min-width: 44px;
            }

            .nav-links a {
                display: flex;
                align-items: center;
                padding: 10px 0;
            }

            /* Reduce hover effects on touch devices */
            .feature-card:hover {
                transform: translateY(-5px);
            }
        }

        /* Ensure proper container widths */
        .nav-container,
        .section-header,
        .features-grid,
        .footer-container {
            width: 100%;
            max-width: var(--container-width);
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        @media (min-width: 768px) {
            .nav-container,
            .section-header,
            .features-grid,
            .footer-container {
                padding-left: 2rem;
                padding-right: 2rem;
            }
        }

        /* Prevent horizontal scroll on mobile */
        @media (max-width: 767px) {
            body {
                overflow-x: hidden;
                width: 100%;
                position: relative;
            }

            .navbar {
                position: fixed;
                width: 100%;
            }

            .hero {
                padding-top: 80px;
            }
        }

        /* SCROLLBAR */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
        }
`}}),(0,T.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,T.jsxs)(`div`,{className:`body-wrapper`,children:[(0,T.jsx)(`nav`,{className:`navbar`,id:`navbar`,children:(0,T.jsxs)(`div`,{className:`nav-container`,children:[(0,T.jsxs)(`a`,{href:`/`,className:`logo`,children:[(0,T.jsx)(`img`,{src:`images/eaglone/p-eaglone.png`,alt:`ProWorldz Logo`,className:`logo-img`,loading:`lazy`}),(0,T.jsxs)(`span`,{className:`logo-text`,children:[`PRO`,(0,T.jsx)(`span`,{className:`logo-accent`,children:`WORLDZ`})]})]}),(0,T.jsxs)(`button`,{className:`menu-toggle`+(e?` active`:``),onClick:()=>t(!e),"aria-label":`Toggle menu`,children:[(0,T.jsx)(`span`,{}),(0,T.jsx)(`span`,{}),(0,T.jsx)(`span`,{})]}),(0,T.jsxs)(`ul`,{className:`nav-links`+(e?` active`:``),id:`navLinks`,children:[(0,T.jsx)(`li`,{children:(0,T.jsx)(`a`,{href:`/`,children:`Home`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(`a`,{href:`/about-home`,className:`active`,children:`About`})}),(0,T.jsx)(`li`,{children:(0,T.jsx)(`a`,{href:`/contact-home`,children:`Contact`})})]}),(0,T.jsxs)(`a`,{href:`/login`,className:`nav-cta`,children:[(0,T.jsx)(`i`,{className:`fas fa-sign-in-alt`}),`Login`]})]})}),(0,T.jsx)(`section`,{className:`hero`,id:`home`,children:(0,T.jsxs)(`div`,{className:`hero-content`,children:[(0,T.jsxs)(`div`,{className:`hero-badge fade-in-up`,children:[(0,T.jsx)(`i`,{className:`fas fa-info-circle`}),`About Our Mission`]}),(0,T.jsx)(`h1`,{className:`fade-in-up`,children:`Redefining Tech Education`}),(0,T.jsx)(`p`,{className:`fade-in-up`,children:`To empower learners by delivering a learning model built on 95% practical, hands-on training and 5% essential theoretical knowledge, combined with continuous real-world exposure.`}),(0,T.jsxs)(`div`,{className:`stats fade-in-up`,children:[(0,T.jsxs)(`div`,{className:`stat-item`,children:[(0,T.jsx)(`div`,{className:`stat-number`,"data-count":`95`,children:`0%`}),(0,T.jsx)(`div`,{className:`stat-label`,children:`Practical Training`})]}),(0,T.jsxs)(`div`,{className:`stat-item`,children:[(0,T.jsx)(`div`,{className:`stat-number`,"data-count":`1000`,children:`0+`}),(0,T.jsx)(`div`,{className:`stat-label`,children:`Learners Empowered`})]}),(0,T.jsxs)(`div`,{className:`stat-item`,children:[(0,T.jsx)(`div`,{className:`stat-number`,"data-count":`4`,children:`0+`}),(0,T.jsx)(`div`,{className:`stat-label`,children:`Major Initiatives`})]})]})]})}),(0,T.jsxs)(`section`,{className:`section`,children:[(0,T.jsxs)(`div`,{className:`section-header fade-in-up`,children:[(0,T.jsx)(`div`,{className:`section-badge`,children:`Our Identity`}),(0,T.jsxs)(`h2`,{className:`section-title`,children:[`Who `,(0,T.jsx)(`span`,{className:`highlight`,children:`We Are`})]}),(0,T.jsx)(`p`,{className:`section-description`,children:`ProWorldz is a technology learning and innovation platform, focused on hands-on training and real-world skills. We believe technology should be learned by doing, not just studying.`})]}),(0,T.jsx)(`div`,{className:`expertise-container fade-in-up`,children:(0,T.jsxs)(`div`,{className:`expertise-grid`,children:[(0,T.jsxs)(`div`,{className:`expertise-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-shield-alt`}),(0,T.jsx)(`h4`,{children:`Cybersecurity & Ethical Hacking`}),(0,T.jsx)(`p`,{children:`Comprehensive security training with real-world penetration testing`})]}),(0,T.jsxs)(`div`,{className:`expertise-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-code`}),(0,T.jsx)(`h4`,{children:`Web & App Development`}),(0,T.jsx)(`p`,{children:`Full-stack development with modern frameworks and technologies`})]}),(0,T.jsxs)(`div`,{className:`expertise-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-robot`}),(0,T.jsx)(`h4`,{children:`AI & IoT Solutions`}),(0,T.jsx)(`p`,{children:`Cutting-edge artificial intelligence and internet of things applications`})]}),(0,T.jsxs)(`div`,{className:`expertise-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-desktop`}),(0,T.jsx)(`h4`,{children:`Customized Operating Systems`}),(0,T.jsx)(`p`,{children:`Specialized OS development and customization for specific needs`})]}),(0,T.jsxs)(`div`,{className:`expertise-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-chalkboard-teacher`}),(0,T.jsx)(`h4`,{children:`Workshops & Academic Collaborations`}),(0,T.jsx)(`p`,{children:`Industry-academia partnerships and practical workshops`})]}),(0,T.jsxs)(`div`,{className:`expertise-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-bug`}),(0,T.jsx)(`h4`,{children:`Bug Hunter Elite Program`}),(0,T.jsx)(`p`,{children:`Flagship cybersecurity training for advanced threat detection`})]})]})})]}),(0,T.jsx)(`section`,{className:`section dark`,children:(0,T.jsxs)(`div`,{className:`values-grid`,children:[(0,T.jsxs)(`div`,{className:`value-content fade-in-up`,children:[(0,T.jsxs)(`h2`,{children:[`Our Core `,(0,T.jsx)(`span`,{children:`Values`})]}),(0,T.jsx)(`p`,{children:`We are committed to building a strong ecosystem of skilled learners, innovators, and problem solvers who can confidently apply technology in real-world scenarios.`})]}),(0,T.jsxs)(`div`,{className:`value-list fade-in-up`,children:[(0,T.jsxs)(`div`,{className:`value-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-star`}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h4`,{children:`Excellence`}),(0,T.jsx)(`p`,{children:`We are committed to delivering the highest standards in technology education and training. Through quality teaching, hands-on learning, and continuous improvement, we strive to help every learner achieve their best potential.`})]})]}),(0,T.jsxs)(`div`,{className:`value-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-lightbulb`}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h4`,{children:`Innovation`}),(0,T.jsx)(`p`,{children:`We embrace change and emerging technologies. By encouraging creativity, experimentation, and real-world problem solving, we ensure our learners stay ahead in a rapidly evolving tech industry.`})]})]}),(0,T.jsxs)(`div`,{className:`value-item`,children:[(0,T.jsx)(`i`,{className:`fas fa-users`}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h4`,{children:`Community`}),(0,T.jsx)(`p`,{children:`We believe growth happens together. ProWorldz fosters a supportive community of students, mentors, and professionals who collaborate, share knowledge, and grow collectively toward a stronger digital future.`})]})]})]})]})}),(0,T.jsxs)(`section`,{className:`section`,children:[(0,T.jsxs)(`div`,{className:`section-header fade-in-up`,children:[(0,T.jsx)(`div`,{className:`section-badge`,children:`Our Purpose`}),(0,T.jsxs)(`h2`,{className:`section-title`,children:[`Mission & `,(0,T.jsx)(`span`,{className:`highlight`,children:`Vision`})]})]}),(0,T.jsxs)(`div`,{className:`features-grid`,children:[(0,T.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,T.jsx)(`div`,{className:`feature-icon`,children:(0,T.jsx)(`i`,{className:`fas fa-bullseye`})}),(0,T.jsx)(`h3`,{children:`Our Mission`}),(0,T.jsx)(`p`,{children:`To empower learners by delivering a learning model built on 95% practical, hands-on training and 5% essential theoretical knowledge, combined with continuous real-world exposure. We bridge the gap between education and industry through project-based learning, real-time problem solving, and expert mentorship.`})]}),(0,T.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,T.jsx)(`div`,{className:`feature-icon`,children:(0,T.jsx)(`i`,{className:`fas fa-eye`})}),(0,T.jsx)(`h3`,{children:`Our Vision`}),(0,T.jsx)(`p`,{children:`To create a world where technology empowers individuals rather than intimidates them, by delivering practical, hands-on, and industry-focused education. We envision building a strong ecosystem of skilled learners, innovators, and problem solvers who contribute meaningfully to the future of the digital industry.`})]})]})]}),(0,T.jsxs)(`section`,{className:`section dark`,children:[(0,T.jsxs)(`div`,{className:`section-header fade-in-up`,children:[(0,T.jsx)(`div`,{className:`section-badge`,children:`Milestones`}),(0,T.jsxs)(`h2`,{className:`section-title`,children:[`Our `,(0,T.jsx)(`span`,{className:`highlight`,children:`Achievements`})]}),(0,T.jsx)(`p`,{className:`section-description`,children:`Recognized partnerships and impactful initiatives that demonstrate our commitment to technology education.`})]}),(0,T.jsxs)(`div`,{className:`achievements-grid fade-in-up`,children:[(0,T.jsxs)(`div`,{className:`achievement-card`,children:[(0,T.jsx)(`h4`,{children:`Prince Sri Venkateshwara College`}),(0,T.jsx)(`p`,{children:`Successfully organized and executed comprehensive cybersecurity training events and workshops for students.`})]}),(0,T.jsxs)(`div`,{className:`achievement-card`,children:[(0,T.jsx)(`h4`,{children:`AMET University`}),(0,T.jsx)(`p`,{children:`Implemented structured cybersecurity programs to enhance students' practical skills and industry readiness.`})]}),(0,T.jsxs)(`div`,{className:`achievement-card`,children:[(0,T.jsx)(`h4`,{children:`Women's Safety & Cyber Awareness`}),(0,T.jsx)(`p`,{children:`Conducted specialized training programs focusing on digital safety and cybersecurity awareness for women.`})]}),(0,T.jsxs)(`div`,{className:`achievement-card`,children:[(0,T.jsx)(`h4`,{children:`Education Trust Initiatives`}),(0,T.jsx)(`p`,{children:`Collaborated with educational trusts to deliver cybersecurity training to underprivileged communities.`})]})]})]}),(0,T.jsx)(`section`,{className:`section`,children:(0,T.jsx)(`div`,{className:`message-section fade-in-up`,children:(0,T.jsxs)(`div`,{className:`message-content`,children:[(0,T.jsx)(`div`,{className:`quote-icon`,children:(0,T.jsx)(`i`,{className:`fas fa-quote-left`})}),(0,T.jsx)(`p`,{className:`message-text`,children:`"Technology isn't difficult when taught the right way. At ProWorldz, we focus on building skills, confidence, and the right mindset to transform learners into industry-ready professionals."`}),(0,T.jsx)(`div`,{className:`founder-info`,children:(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`founder-name`,children:`Jaiganesh Lakshmanan`}),(0,T.jsx)(`div`,{className:`founder-title`,children:`Founder & CEO, ProWorldz`})]})})]})})}),(0,T.jsxs)(`section`,{className:`mentor-slider-section`,children:[(0,T.jsxs)(`div`,{className:`mentor-slider-header fade-in-up`,children:[(0,T.jsxs)(`h2`,{className:`mentor-slider-title`,children:[`Meet Our Expert `,(0,T.jsx)(`span`,{className:`highlight`,children:`Mentors`})]}),(0,T.jsx)(`p`,{className:`mentor-slider-subtitle`,children:`Learn from industry professionals with years of hands-on experience in cutting-edge technologies.`})]}),(0,T.jsxs)(`div`,{className:`mentor-slider-container fade-in-up`,children:[(0,T.jsxs)(`div`,{className:`mentor-slider-wrapper`,id:`mentorSlider`,children:[(0,T.jsxs)(`div`,{className:`mentor-slide`,children:[(0,T.jsx)(`div`,{className:`mentor-image-container`,children:(0,T.jsx)(`img`,{src:`images/outer/jg.png`,className:`mentor-image`,alt:`Mentor`,loading:`lazy`})}),(0,T.jsxs)(`div`,{className:`mentor-content`,children:[(0,T.jsx)(`h3`,{className:`mentor-name`,children:`Jaiganesh.L`}),(0,T.jsx)(`div`,{className:`mentor-role`,children:`Founder and CEO of Secure Worldz`}),(0,T.jsxs)(`div`,{className:`mentor-expertise`,children:[(0,T.jsx)(`span`,{className:`expertise-tag`,children:`Technology speaker`}),(0,T.jsx)(`span`,{className:`expertise-tag`,children:`Ethical hacker`}),(0,T.jsx)(`span`,{className:`expertise-tag`,children:`AI developer`}),(0,T.jsx)(`span`,{className:`expertise-tag`,children:`Business growth speaker`})]}),(0,T.jsx)(`p`,{className:`mentor-description`,children:`With over 10+ years of experience in cybersecurity, Alex has worked with Fortune 500 companies to strengthen their security infrastructure. He holds multiple certifications including CISSP, CEH, and OSCP. Alex specializes in vulnerability assessment and penetration testing, having discovered critical security flaws in major financial institutions.`}),(0,T.jsx)(`div`,{className:`mentor-quote`,children:`"Security is not a product, but a process. My goal is to teach students how to think like both defender and attacker."`})]})]}),(0,T.jsxs)(`div`,{className:`mentor-slide`,children:[(0,T.jsx)(`div`,{className:`mentor-image-container`,children:(0,T.jsx)(`img`,{src:``,className:`mentor-image`,alt:`Mentor`,loading:`lazy`})}),(0,T.jsxs)(`div`,{className:`mentor-content`,children:[(0,T.jsx)(`h3`,{className:`mentor-name`,children:`Mohamed hathim.A`}),(0,T.jsx)(`div`,{className:`mentor-role`,children:`SD of Secure Worldz`}),(0,T.jsxs)(`div`,{className:`mentor-expertise`,children:[(0,T.jsx)(`span`,{className:`expertise-tag`,children:`Network Security`}),(0,T.jsx)(`span`,{className:`expertise-tag`,children:`Penetration Testing`}),(0,T.jsx)(`span`,{className:`expertise-tag`,children:`Ethical Hacking`}),(0,T.jsx)(`span`,{className:`expertise-tag`,children:`Incident Response`})]}),(0,T.jsx)(`p`,{className:`mentor-description`,children:`Sarah has 8+ years of experience building scalable web applications for startups and enterprise clients. She's passionate about modern JavaScript frameworks and cloud-native development. Sarah has contributed to open-source projects and regularly speaks at tech conferences about web development best practices.`}),(0,T.jsx)(`div`,{className:`mentor-quote`,children:`"Great code is not just about solving problems, but about creating solutions that are maintainable and scalable for years to come."`})]})]})]}),(0,T.jsxs)(`div`,{className:`slider-controls`,children:[(0,T.jsx)(`button`,{className:`slider-btn prev-btn`,id:`prevBtn`,children:(0,T.jsx)(`i`,{className:`fas fa-chevron-left`})}),(0,T.jsx)(`button`,{className:`slider-btn next-btn`,id:`nextBtn`,children:(0,T.jsx)(`i`,{className:`fas fa-chevron-right`})})]}),(0,T.jsxs)(`div`,{className:`slider-dots`,id:`sliderDots`,children:[(0,T.jsx)(`span`,{className:`slider-dot active`,"data-slide":`0`}),(0,T.jsx)(`span`,{className:`slider-dot`,"data-slide":`1`})]})]})]}),(0,T.jsx)(`section`,{className:`section dark`,children:(0,T.jsxs)(`div`,{className:`motto-section fade-in-up`,children:[(0,T.jsx)(`div`,{className:`motto-text`,children:`"Think Smart. Build Skills. Own the Future."`}),(0,T.jsx)(`div`,{className:`motto-subtext`,children:`Our guiding principle for transforming tech education`})]})}),(0,T.jsx)(`section`,{className:`cta-section`,children:(0,T.jsxs)(`div`,{className:`cta-content fade-in-up`,children:[(0,T.jsx)(`h2`,{children:`Start Your Learning Journey`}),(0,T.jsx)(`p`,{children:`Join thousands of successful professionals who transformed their careers with our industry-focused education. Bridge the gap between education and industry with ProWorldz.`}),(0,T.jsxs)(`a`,{href:`/`,className:`btn btn-primary`,children:[`Explore Our Programs`,(0,T.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})}),(0,T.jsx)(`footer`,{className:`footer`,children:(0,T.jsx)(`div`,{className:`footer-container`,children:(0,T.jsxs)(`div`,{className:`footer-bottom`,children:[(0,T.jsx)(`p`,{children:`© 2026 ProWorldz. All rights reserved. | Empowering Future Tech Leaders`}),(0,T.jsx)(`p`,{children:`Bridging the gap between education and industry through practical, hands-on training`})]})})})]})]})})}var fr,T,pr=o((()=>{fr=l(d()),T=w()}));function mr(){let[e,t]=(0,hr.useState)(!1);return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(`div`,{className:`html-wrapper`,children:[(0,E.jsxs)(`div`,{className:`head-wrapper`,children:[(0,E.jsx)(`meta`,{charSet:`UTF-8`}),(0,E.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,E.jsx)(`title`,{children:`Contact Us | ProWorldz`}),(0,E.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap`,rel:`stylesheet`}),(0,E.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`}),(0,E.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
            --gap: 1.5rem;
            --sides: 1.5rem;
    --primary: #ff2a2f;
    --secondary: #ffffff;
    --accent: #ff2a2f;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --text-muted: #737373;
    --accent-red: #ff2a2f;
    --primary-red: #ff2a2f;
    --secondary-red: #ff2a2f;
    --success: #ffffff;
    --danger: #ffffff;
    --border-color: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(139, 12, 16, 0.15);
    --card-bg: rgba(255, 255, 255, 0.02);
    --card-hover: rgba(255, 255, 255, 0.04);
    --dark-bg: #000000;
    --darker-bg: #000000;
    --container-width: 1280px;
    --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: all 0.2s ease;
    --shadow-glow: 0 0 40px rgba(139, 12, 16, 0.1);
    --shadow-intense: 0 20px 60px rgba(139, 12, 16, 0.15);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--dark-bg);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    line-height: 1.2;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-color);
    transition: var(--transition-smooth);
}

.navbar.scrolled {
    background: rgba(0, 0, 0, 0.95);
    border-bottom: 1px solid var(--border-hover);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.nav-container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 1.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.75rem;
    font-weight: 800;
    font-family: 'Space Grotesk', sans-serif;
    color: var(--text-primary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: var(--transition-fast);
}

.logo:hover {
    transform: translateY(-2px);
}

.logo-accent {
    color: var(--primary-red);
}

.logo-img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: brightness(1.2);
    transition: var(--transition-smooth);
}

.logo:hover .logo-img {
    transform: rotate(10deg) scale(1.1);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 3rem;
    align-items: center;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    position: relative;
    transition: var(--transition-fast);
}

.nav-links a::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-red);
    transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--text-primary);
}

.nav-links a:hover::before,
.nav-links a.active::before {
    width: 100%;
}

.nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    background: linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%);
    color: #000000;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 8px;
    transition: var(--transition-smooth);
    border: 1px solid transparent;
}

.nav-cta:hover {
    background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
    box-shadow: var(--shadow-glow);
    transform: translateY(-2px);
    color: #000000;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
    background: none;
    border: none;
}

.menu-toggle span {
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    transition: var(--transition-fast);
}

.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: clamp(5rem, 8vw, 8rem) 2rem clamp(3rem, 6vw, 6rem);
    background: #000000;
    margin-top: clamp(60px, 8vw, 80px);
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
        linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.01) 2px, rgba(255, 255, 255, 0.01) 4px);
    pointer-events: none;
}

.hero-content {
    max-width: 900px;
    text-align: center;
    position: relative;
    z-index: 2;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    background: rgba(139, 12, 16, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    font-size: clamp(0.75rem, 1.5vw, 0.85rem);
    font-weight: 600;
    color: var(--secondary-red);
    margin-bottom: clamp(1rem, 2vw, 2rem);
    animation: fadeInDown 0.8s ease;
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

.hero h1 {
    font-size: clamp(2rem, 5vw, 4.5rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 0.8s ease 0.2s both;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.hero p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    color: var(--text-secondary);
    margin-bottom: 3rem;
    line-height: 1.8;
    animation: fadeInUp 0.8s ease 0.4s both;
}

.contact-section {
    padding: clamp(3rem, 8vw, 8rem) 2rem;
    background: var(--dark-bg);
    position: relative;
}

.section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 5rem;
}

.section-badge {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    background: rgba(139, 12, 16, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--secondary-red);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.section-title {
    font-size: clamp(1.75rem, 4vw, 3rem);
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.section-description {
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: var(--text-secondary);
    line-height: 1.8;
}

.contact-cards {
    max-width: var(--container-width);
    margin: 0 auto 6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
}

.contact-card {
    background: var(--card-bg);
    padding: 3rem 2.5rem;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    text-align: center;
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
}

.contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-red), var(--secondary-red));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
}

.contact-card:hover {
    background: var(--card-hover);
    border-color: var(--border-hover);
    transform: translateY(-10px);
    box-shadow: var(--shadow-intense);
}

.contact-card:hover::before {
    transform: scaleX(1);
}

.contact-icon {
    width: 80px;
    height: 80px;
    background: rgba(139, 12, 16, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    transition: var(--transition-smooth);
}

.contact-card:hover .contact-icon {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1) rotate(5deg);
}

.contact-icon i {
    font-size: 2.5rem;
    color: var(--text-primary);
}

.contact-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.contact-card p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.1rem;
}

.contact-form-section {
    padding: 0 2rem 8rem;
    background: var(--darker-bg);
    position: relative;
}

.contact-form-box {
    background: var(--card-bg);
    padding: 4rem;
    border-radius: 24px;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid var(--border-color);
    position: relative;
    overflow: hidden;
}

.contact-form-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-red), var(--secondary-red));
}

.contact-form-box h2 {
    text-align: center;
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.input-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.form-group {
    position: relative;
}

input, textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    transition: var(--transition-smooth);
}

input::placeholder,
textarea::placeholder {
    color: var(--text-muted);
    opacity: 0.7;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary-red);
    box-shadow: 0 0 0 3px rgba(139, 12, 16, 0.1);
    transform: translateY(-2px);
}

textarea {
    min-height: 180px;
    resize: vertical;
}

.submit-btn {
    background: linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%);
    border: none;
    padding: 1.25rem 3rem;
    border-radius: 12px;
    color: #000000;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
    font-family: 'Space Grotesk', sans-serif;
    width: 100%;
    margin-top: 1rem;
}

.submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.submit-btn:hover::before {
    left: 100%;
}

.submit-btn:hover {
    background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
    box-shadow: var(--shadow-intense);
    transform: translateY(-3px);
    color: #000000;
}

.footer {
    padding: 4rem 2rem 2rem;
    background: var(--darker-bg);
    border-top: 1px solid var(--border-color);
}

.footer-container {
    max-width: var(--container-width);
    margin: 0 auto;
    text-align: center;
}

.footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(139, 12, 16, 0.05);
    color: var(--text-muted);
    font-size: 0.9rem;
}

.fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.fade-in-up:nth-child(1) { animation-delay: 0.1s; }
.fade-in-up:nth-child(2) { animation-delay: 0.2s; }
.fade-in-up:nth-child(3) { animation-delay: 0.3s; }
.fade-in-up:nth-child(4) { animation-delay: 0.4s; }

@media (max-width: 1024px) {
    .contact-cards {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    
    .contact-card:last-child {
        grid-column: span 2;
        max-width: 400px;
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }
    
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: rgba(0, 0, 0, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 100px 2rem 2rem;
        gap: 1.5rem;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-left: 1px solid var(--border-color);
        z-index: 1000;
        list-style: none;
    }
    
    .nav-links.active {
        right: 0;
    }
    
    .nav-links .nav-cta {
        display: flex !important;
        margin-top: 1rem;
        justify-content: center;
    }
    
    .nav-container > .nav-cta {
        display: none !important;
    }
    
    .hero {
        padding: 100px 1.5rem 4rem;
        min-height: 90vh;
        margin-top: 70px;
    }
    
    .contact-cards {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .contact-card:last-child {
        grid-column: 1;
        max-width: 100%;
    }
    
    .contact-form-box {
        padding: 3rem 2rem;
    }
    
    .input-group {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .contact-card {
        padding: 2.5rem 2rem;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 3.5rem 1rem 2rem;
        margin-top: 60px;
    }
    
    .contact-card {
        padding: 2rem 1.5rem;
    }
    
    .contact-icon {
        width: 70px;
        height: 70px;
    }
    
    .contact-icon i {
        font-size: 2rem;
    }
    
    .contact-form-box {
        padding: 2.5rem 1.5rem;
    }
    
    input, textarea {
        padding: 1rem 1.25rem;
    }
    
    .submit-btn {
        padding: 1rem 2rem;
        font-size: 1rem;
    }
    
    .footer {
        padding: 2rem 1rem 1rem;
    }
}

body, h1, h2, h3, h4, h5, h6, p, span, div, li, a {
    font-weight: 700 !important;
}
`}}),(0,E.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,E.jsxs)(`div`,{className:`body-wrapper`,children:[(0,E.jsx)(`nav`,{className:`navbar`,id:`navbar`,children:(0,E.jsxs)(`div`,{className:`nav-container`,children:[(0,E.jsxs)(`a`,{href:`/`,className:`logo`,children:[(0,E.jsx)(`img`,{src:`images/eaglone/p-eaglone.png`,alt:`ProWorldz Logo`,className:`logo-img`,loading:`lazy`}),(0,E.jsxs)(`span`,{className:`logo-text`,children:[`PRO`,(0,E.jsx)(`span`,{className:`logo-accent`,children:`WORLDZ`})]})]}),(0,E.jsxs)(`div`,{className:`menu-toggle`+(e?` active`:``),onClick:()=>t(!e),children:[(0,E.jsx)(`span`,{}),(0,E.jsx)(`span`,{}),(0,E.jsx)(`span`,{})]}),(0,E.jsxs)(`ul`,{className:`nav-links`+(e?` active`:``),id:`navLinks`,children:[(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`/`,children:`Home`})}),(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`/about-home`,children:`About`})}),(0,E.jsx)(`li`,{children:(0,E.jsx)(`a`,{href:`/contact-home`,className:`active`,children:`Contact`})})]}),(0,E.jsxs)(`a`,{href:`/login`,className:`nav-cta`,children:[(0,E.jsx)(`i`,{className:`fas fa-sign-in-alt`}),`Login`]})]})}),(0,E.jsx)(`section`,{className:`hero`,id:`home`,children:(0,E.jsxs)(`div`,{className:`hero-content`,children:[(0,E.jsxs)(`div`,{className:`hero-badge`,children:[(0,E.jsx)(`i`,{className:`fas fa-headset`}),`Get in Touch`]}),(0,E.jsx)(`h1`,{children:`Contact ProWorldz`}),(0,E.jsx)(`p`,{children:`Have questions about our advanced technology courses? Our team is here to help you transform your career. Reach out to us today.`})]})}),(0,E.jsxs)(`section`,{className:`contact-section`,id:`contact`,children:[(0,E.jsxs)(`div`,{className:`section-header fade-in-up`,children:[(0,E.jsx)(`div`,{className:`section-badge`,children:`Contact Information`}),(0,E.jsx)(`h2`,{className:`section-title`,children:`How to Reach Us`}),(0,E.jsx)(`p`,{className:`section-description`,children:`Choose your preferred method of communication. We're committed to providing timely and helpful responses.`})]}),(0,E.jsxs)(`div`,{className:`contact-cards`,children:[(0,E.jsxs)(`div`,{className:`contact-card fade-in-up`,children:[(0,E.jsx)(`div`,{className:`contact-icon`,children:(0,E.jsx)(`i`,{className:`fas fa-envelope`})}),(0,E.jsx)(`h3`,{children:`Email`}),(0,E.jsx)(`p`,{children:`Proworldzacademy@gmail.com`})]}),(0,E.jsxs)(`div`,{className:`contact-card fade-in-up`,children:[(0,E.jsx)(`div`,{className:`contact-icon`,children:(0,E.jsx)(`i`,{className:`fas fa-phone`})}),(0,E.jsx)(`h3`,{children:`Phone`}),(0,E.jsx)(`p`,{children:`+91 78450 88387`})]}),(0,E.jsxs)(`div`,{className:`contact-card fade-in-up`,children:[(0,E.jsx)(`div`,{className:`contact-icon`,children:(0,E.jsx)(`i`,{className:`fas fa-location-dot`})}),(0,E.jsx)(`h3`,{children:`Location`}),(0,E.jsx)(`p`,{children:`Chennai, Tamil Nadu`})]})]})]}),(0,E.jsx)(`section`,{className:`contact-form-section`,children:(0,E.jsxs)(`div`,{className:`contact-form-box fade-in-up`,children:[(0,E.jsx)(`h2`,{children:`Send Us a Message`}),(0,E.jsxs)(`form`,{className:`contact-form`,id:`contactForm`,children:[(0,E.jsxs)(`div`,{className:`input-group`,children:[(0,E.jsx)(`div`,{className:`form-group`,children:(0,E.jsx)(`input`,{type:`text`,placeholder:`Your Name`,required:!0})}),(0,E.jsx)(`div`,{className:`form-group`,children:(0,E.jsx)(`input`,{type:`email`,placeholder:`Your Email`,required:!0})})]}),(0,E.jsx)(`div`,{className:`form-group`,children:(0,E.jsx)(`input`,{type:`text`,placeholder:`Subject`,required:!0})}),(0,E.jsx)(`div`,{className:`form-group`,children:(0,E.jsx)(`textarea`,{placeholder:`Your Message`,rows:`6`,required:!0})}),(0,E.jsxs)(`button`,{type:`submit`,className:`submit-btn`,children:[`Send Message`,(0,E.jsx)(`i`,{className:`fas fa-paper-plane`})]})]})]})}),(0,E.jsx)(`footer`,{className:`footer`,children:(0,E.jsx)(`div`,{className:`footer-container`,children:(0,E.jsx)(`div`,{className:`footer-bottom`,children:(0,E.jsx)(`p`,{children:`© 2026 ProWorldz. All rights reserved. | Privacy Policy | Terms of Service`})})})})]})]})})}var hr,E,gr=o((()=>{hr=l(d()),E=w()}));function _r(){return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(`div`,{className:`html-wrapper`,children:[(0,D.jsxs)(`div`,{className:`head-wrapper`,children:[(0,D.jsx)(`meta`,{charSet:`UTF-8`}),(0,D.jsx)(`title`,{children:`Course Details`}),(0,D.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap`,rel:`stylesheet`}),(0,D.jsx)(`link`,{rel:`stylesheet`,href:`course-details.css`}),(0,D.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,D.jsxs)(`div`,{className:`body-wrapper`,children:[(0,D.jsxs)(`section`,{className:`hero`,children:[(0,D.jsxs)(`div`,{className:`hero-left`,children:[(0,D.jsx)(`h1`,{id:`title`}),(0,D.jsx)(`p`,{id:`heroText`}),(0,D.jsx)(`button`,{className:`enroll-btn`,children:`Enroll Now`}),(0,D.jsxs)(`div`,{className:`meta`,children:[(0,D.jsx)(`span`,{id:`duration`}),(0,D.jsx)(`span`,{id:`price`})]})]}),(0,D.jsx)(`div`,{className:`hero-right`,children:(0,D.jsx)(`img`,{id:`heroImg`,alt:`dwwkdh`,loading:`lazy`})})]}),(0,D.jsxs)(`section`,{children:[(0,D.jsx)(`h2`,{children:`Things You Master`}),(0,D.jsx)(`div`,{id:`master`})]}),(0,D.jsxs)(`section`,{children:[(0,D.jsx)(`h2`,{children:`Topics Covered`}),(0,D.jsx)(`ul`,{id:`topics`})]}),(0,D.jsxs)(`section`,{children:[(0,D.jsx)(`h2`,{children:`Benefits`}),(0,D.jsx)(`div`,{id:`benefits`})]}),(0,D.jsxs)(`section`,{children:[(0,D.jsx)(`h2`,{children:`Mentor`}),(0,D.jsx)(`h3`,{id:`mentorName`}),(0,D.jsx)(`p`,{id:`mentorDesc`})]})]})]})})}var D,vr=o((()=>{d(),D=w()}));function yr(){let[e,t]=(0,br.useState)(!1);return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(`div`,{className:`html-wrapper`,children:[(0,O.jsxs)(`div`,{className:`head-wrapper`,children:[(0,O.jsx)(`meta`,{charSet:`UTF-8`}),(0,O.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,O.jsx)(`title`,{children:`ProWorldz | Advanced Technology Training`}),(0,O.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap`,rel:`stylesheet`}),(0,O.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`}),(0,O.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gap: 1.5rem;
            --sides: 1.5rem;
            /* UPDATED: Color Palette - Black & White Theme (like admin panel) */
            --primary-red: #ff2a2f;
            --primary-red-hover: #ff2a2f;
            --secondary-red: #ff2a2f;
            --accent-red: #ff2a2f;
            --dark-bg: #000000;
            --darker-bg: #000000;
            --card-bg: #080808;
            --card-hover: #080808;
            --text-primary: #ffffff;
            --text-secondary: #a3a3a3;
            --text-muted: #737373;
            --border-color: rgba(139, 12, 16, 0.1);
            --border-hover: rgba(255, 255, 255, 0.2);
            
            /* Spacing */
            --container-width: 1280px;
            --section-padding: 8rem 2rem;
            --card-padding: 2rem;
            
            /* Effects */
            --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            --transition-fast: all 0.2s ease;
            --shadow-glow: 0 0 40px rgba(139, 12, 16, 0.1);
            --shadow-intense: 0 20px 60px rgba(139, 12, 16, 0.15);
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--dark-bg);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
            line-height: 1.2;
        }

        /* ========================================
           NAVIGATION
        ======================================== */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.95);
            border-bottom: 1px solid var(--border-hover);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 1.25rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.75rem;
            font-weight: 800;
            font-family: 'Space Grotesk', sans-serif;
            color: var(--text-primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: var(--transition-fast);
        }

        .logo:hover {
            transform: translateY(-2px);
        }

        .logo-accent {
            color: var(--primary-red);
        }

        .logo-icon {
            width: 8px;
            height: 8px;
            background: var(--primary-red);
            border-radius: 50%;
            box-shadow: 0 0 20px var(--primary-red);
            animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 3rem;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            position: relative;
            transition: var(--transition-fast);
        }

        .nav-links a::before {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-red);
            transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--text-primary);
        }

        .nav-links a:hover::before,
        .nav-links a.active::before {
            width: 100%;
        }

        .nav-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.75rem;
            background: var(--primary-red);
            color: var(--dark-bg);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            border-radius: 8px;
            transition: var(--transition-smooth);
            border: 1px solid transparent;
        }

        .nav-cta:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-glow);
            transform: translateY(-2px);
            color: var(--dark-bg);
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 0.5rem;
        }

        .menu-toggle span {
            width: 24px;
            height: 2px;
            background: var(--text-primary);
            transition: var(--transition-fast);
        }

        /* ========================================
           HERO SECTION
        ======================================== */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 8rem 2rem 6rem;
            background: 
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 12, 16, 0.05) 0%, transparent 50%),
                var(--darker-bg);
        }

        .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
                linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%),
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.01) 2px, rgba(255, 255, 255, 0.01) 4px);
            pointer-events: none;
        }

        .hero-content {
            max-width: 900px;
            text-align: center;
            position: relative;
            z-index: 2;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.25rem;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--secondary-red);
            margin-bottom: 2rem;
            animation: fadeInDown 0.8s ease;
        }

        .hero-badge i {
            animation: sparkle 1.5s infinite;
        }

        @keyframes sparkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .hero h1 {
            font-size: 4.5rem;
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 0.8s ease 0.2s both;
        }

        .hero p {
            font-size: 1.3rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
            animation: fadeInUp 0.8s ease 0.4s both;
        }

        .hero-cta-group {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.6s both;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 10px;
            text-decoration: none;
            transition: var(--transition-smooth);
            position: relative;
            overflow: hidden;
            border: 2px solid transparent;
        }

        .btn-primary {
            background: var(--primary-red);
            color: var(--dark-bg);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
        }

        .btn-primary:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-intense);
            transform: translateY(-3px);
            color: var(--dark-bg);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background: rgba(139, 12, 16, 0.05);
            border-color: var(--primary-red);
            transform: translateY(-3px);
        }

        /* ========================================
           FEATURES SECTION
        ======================================== */
        .features {
            padding: var(--section-padding);
            background: var(--dark-bg);
            position: relative;
        }

        .section-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 5rem;
        }

        .section-badge {
            display: inline-block;
            padding: 0.5rem 1.25rem;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--secondary-red);
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .section-title {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .section-description {
            font-size: 1.15rem;
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .features-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-red), var(--secondary-red));
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
        }

        .feature-card:hover {
            background: var(--card-hover);
            border-color: var(--border-hover);
            transform: translateY(-8px);
            box-shadow: var(--shadow-glow);
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition: var(--transition-smooth);
        }

        .feature-card:hover .feature-icon {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1) rotate(5deg);
        }

        .feature-icon i {
            font-size: 1.75rem;
            color: var(--text-primary);
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
        }

        /* ========================================
           COURSES SECTION
        ======================================== */
        .courses {
            padding: var(--section-padding);
            background: var(--darker-bg);
            position: relative;
        }

        .courses-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 2.5rem;
        }

        .course-card {
            background: var(--card-bg);
            border-radius: 20px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            transition: var(--transition-smooth);
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .course-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(139, 12, 16, 0.1) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
        }

        .course-card:hover {
            border-color: var(--primary-red);
            transform: translateY(-10px);
            box-shadow: var(--shadow-intense);
        }

        .course-card:hover::after {
            opacity: 1;
        }

        .course-image {
            position: relative;
            height: 220px;
            overflow: hidden;
            background: linear-gradient(135deg, rgba(139, 12, 16, 0.1) 0%, rgba(139, 12, 16, 0.05) 100%);
        }

        .course-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .course-card:hover .course-image img {
            transform: scale(1.1);
        }

        .course-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-primary);
            text-transform: uppercase;
        }

        .course-body {
            padding: 2rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .course-body h3 {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
            transition: color 0.3s ease;
        }

        .course-card:hover .course-body h3 {
            color: var(--secondary-red);
        }

        .course-body p {
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 2rem;
            flex-grow: 1;
        }

        .course-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(139, 12, 16, 0.05);
        }

        .course-action {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.875rem 2rem;
            background: var(--primary-red);
            color: var(--dark-bg);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            border-radius: 10px;
            transition: var(--transition-smooth);
            width: 100%;
            justify-content: center;
        }

        .course-action:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-glow);
            transform: translateX(5px);
            color: var(--dark-bg);
        }

        .course-action i {
            transition: transform 0.3s ease;
        }

        .course-action:hover i {
            transform: translateX(5px);
        }

        /* ========================================
           STATS SECTION
        ======================================== */
        .stats {
            padding: 6rem 2rem;
            background: var(--card-bg);
            border-top: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
        }

        .stats-container {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary-red), var(--secondary-red));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            font-family: 'Space Grotesk', sans-serif;
        }

        .stat-label {
            font-size: 1rem;
            color: var(--text-secondary);
            font-weight: 500;
        }

        /* ========================================
           CTA SECTION
        ======================================== */
        .cta-section {
            padding: 8rem 2rem;
            background: 
                radial-gradient(circle at center, rgba(139, 12, 16, 0.1) 0%, transparent 70%),
                var(--darker-bg);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
                repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255, 255, 255, 0.03) 80px, rgba(255, 255, 255, 0.03) 82px);
            pointer-events: none;
        }

        .cta-content {
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        .cta-content h2 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .cta-content p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
        }

        /* ========================================
           FOOTER
        ======================================== */
        .footer {
            padding: 4rem 2rem 2rem;
            background: var(--darker-bg);
            border-top: 1px solid var(--border-color);
        }

        .footer-container {
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .footer-top {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 4rem;
            margin-bottom: 3rem;
        }

        .footer-brand h3 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
        }

        .footer-brand .logo-accent {
            color: var(--primary-red);
        }

        .footer-brand p {
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 1.5rem;
        }

        .social-links {
            display: flex;
            gap: 1rem;
        }

        .social-link {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition-smooth);
        }

        .social-link:hover {
            background: var(--primary-red);
            color: var(--dark-bg);
            transform: translateY(-3px);
        }

        .footer-column h4 {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.75rem;
        }

        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition-fast);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .footer-links a:hover {
            color: var(--primary-red);
            transform: translateX(5px);
        }

        .footer-bottom {
            padding-top: 2rem;
            border-top: 1px solid rgba(139, 12, 16, 0.05);
            text-align: center;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* ========================================
           ANIMATIONS
        ======================================== */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
        }

        /* Stagger animations */
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }
        .feature-card:nth-child(6) { animation-delay: 0.6s; }

        .course-card:nth-child(1) { animation-delay: 0.1s; }
        .course-card:nth-child(2) { animation-delay: 0.2s; }
        .course-card:nth-child(3) { animation-delay: 0.3s; }
        .course-card:nth-child(4) { animation-delay: 0.4s; }
        .course-card:nth-child(5) { animation-delay: 0.5s; }
        .course-card:nth-child(6) { animation-delay: 0.6s; }
        .course-card:nth-child(7) { animation-delay: 0.7s; }
        .course-card:nth-child(8) { animation-delay: 0.8s; }
        .course-card:nth-child(9) { animation-delay: 0.9s; }
        .course-card:nth-child(10) { animation-delay: 1s; }

        /* ===== LOGO STYLES WITH IMAGE ===== */
        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.75rem;
            font-weight: 800;
            font-family: 'Space Grotesk', sans-serif;
            color: var(--text-primary);
            text-decoration: none;
            transition: var(--transition-fast);
        }

        .logo-img {
            width: 40px;
            height: 40px;
            object-fit: contain;
            filter: brightness(1.2);
            transition: var(--transition-smooth);
        }

        .logo:hover .logo-img {
            transform: rotate(10deg) scale(1.1);
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .logo-text {
            display: flex;
            align-items: center;
            gap: 0.1rem;
        }

        .logo-icon {
            display: none;
        }

        body, h1, h2, h3, h4, h5, h6, p, span, div, li, a {
            font-weight: 700 !important;
        }

        /* ========================================
           RESPONSIVE ENHANCEMENTS
           (Add this at the end of your CSS)
        ======================================== */

        /* Course Grid Improvements */
        @media (min-width: 1200px) {
            .courses-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            /* Center the last course card */
            .courses-grid .course-card:last-child:nth-child(3n+1) {
                grid-column: 2;
                justify-self: center;
            }
        }

        @media (min-width: 768px) and (max-width: 1199px) {
            .courses-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            /* Center the last course card on tablet */
            .courses-grid .course-card:last-child:nth-child(2n+1) {
                grid-column: 1 / span 2;
                justify-self: center;
                max-width: 380px;
            }
        }

        /* Enhanced Mobile Responsiveness */
       @media (max-width: 767px) {
    .menu-toggle {
        display: flex;
        z-index: 1001;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: rgba(0, 0, 0, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 100px 2rem 2rem;
        gap: 1.5rem;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-left: 1px solid var(--border-color);
        z-index: 1000;
    }

    .nav-links.active {
        right: 0;
    }

    .nav-cta {
        display: none;
    }

    .hero {
        padding: 100px 1.5rem 4rem;
        min-height: 90vh;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }

    .hero-cta-group {
        flex-direction: column;
        gap: 1rem;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .section-header {
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-description {
        font-size: 1rem;
    }

    .features-grid,
    .courses-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0;
    }

    .feature-card {
        padding: 1.5rem;
    }

    .course-body {
        padding: 1.5rem;
    }

    .stats-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 0 1rem;
    }

    .stat-number {
        font-size: 2.5rem;
    }

    .cta-section {
        padding: 4rem 1.5rem;
    }

    .cta-content h2 {
        font-size: 2.5rem;
    }

    .footer {
        padding: 3rem 1.5rem 1.5rem;
    }

    .footer-top {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
        /* Tablet Responsiveness */
        @media (min-width: 768px) and (max-width: 1024px) {
            .hero h1 {
                font-size: 3rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .section-title {
                font-size: 2.2rem;
            }
            
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }
            
            .footer-top {
                grid-template-columns: repeat(2, 1fr);
                gap: 3rem;
            }
            
            /* Tablet hero spacing */
            .hero {
                padding: 6rem 2rem 4rem;
            }
            
            /* Tablet section spacing */
            .features,
            .courses,
            .cta-section {
                padding: 6rem 2rem;
            }
            
            /* Tablet navigation */
            .nav-links {
                gap: 2rem;
            }
        }

        /* Small Mobile Devices (up to 480px) */
        @media (max-width: 480px) {
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .hero p {
                font-size: 0.95rem;
            }
            
            .section-title {
                font-size: 1.5rem;
            }
            
            .section-description {
                font-size: 0.9rem;
            }
            
            .hero-badge,
            .section-badge {
                font-size: 0.75rem;
                padding: 0.4rem 1rem;
            }
            
            .stat-number {
                font-size: 1.8rem;
            }
            
            .stat-label {
                font-size: 0.9rem;
            }
            
            /* Ultra-compact mobile menu */
            .nav-container {
                padding: 1rem;
            }
            
            .logo {
                font-size: 1.5rem;
            }
            
            .logo-img {
                width: 32px;
                height: 32px;
            }
            
            /* Compact feature cards */
            .feature-card {
                padding: 1.25rem;
            }
            
            .feature-card h3 {
                font-size: 1.25rem;
            }
            
            /* Compact course cards */
            .course-body {
                padding: 1.5rem;
            }
            
            .course-body h3 {
                font-size: 1.4rem;
            }
            
            .course-action {
                padding: 0.75rem 1.5rem;
                font-size: 0.85rem;
            }
        }

        /* Extra Large Screens (1440px and above) */
        @media (min-width: 1440px) {
            .courses-grid {
                grid-template-columns: repeat(3, 400px);
                justify-content: center;
                gap: 3rem;
            }
            
            /* Center the last card */
            .courses-grid .course-card:last-child:nth-child(3n+1) {
                grid-column: 2;
            }
        }

        /* Landscape Mobile Devices */
        @media (max-height: 600px) and (orientation: landscape) {
            .hero {
                min-height: 120vh;
                padding: 4rem 2rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .nav-links {
                max-height: 80vh;
                overflow-y: auto;
            }
        }

        /* Fix for iOS Safari 100vh issue */
        @supports (-webkit-touch-callout: none) {
            .hero {
                min-height: -webkit-fill-available;
            }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
            .btn,
            .course-action,
            .nav-cta,
            .social-link {
                min-height: 44px;
                min-width: 44px;
            }
            
            .nav-links a {
                padding: 0.5rem;
                display: inline-block;
                min-height: 44px;
                line-height: 44px;
            }
            
            /* Remove hover effects on touch devices */
            .course-card:hover,
            .feature-card:hover {
                transform: none;
            }
            
            .btn:hover,
            .course-action:hover,
            .social-link:hover {
                transform: none;
            }
        }

        /* Fixed Positioning for Mobile */
        @media (max-width: 768px) {
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                background: rgba(0, 0, 0, 0.95);
                backdrop-filter: blur(10px);
            }
            
            /* Prevent horizontal scroll */
            body {
                overflow-x: hidden;
                width: 100%;
            }
            
            /* Ensure content doesn't hide behind fixed navbar */
            .hero {
                padding-top: 80px;
            }
        }

        .courses-grid {
    max-width: var(--container-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    padding: 0 1rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1199px) {
    .courses-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* Center the last course card on tablet when odd number */
    .courses-grid .course-card:last-child:nth-child(odd) {
        grid-column: 1 / span 2;
        justify-self: center;
        max-width: 380px;
    }
}

/* Desktop: 3 columns */
@media (min-width: 1200px) {
    .courses-grid {
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }
    
    /* Center the last course card when 10 items */
    .courses-grid:has(.course-card:nth-child(10):last-child) .course-card:last-child {
        grid-column: 2;
        justify-self: center;
    }
}
        /* Smooth scroll snap for sections */
        @media (min-width: 1024px) {
            .hero,
            .features,
            .courses,
            .cta-section {
                scroll-snap-align: start;
            }
        }
        .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* iOS Safari Fixes */
@supports (-webkit-touch-callout: none) {
    .hero {
        min-height: -webkit-fill-available;
    }
    
    .nav-links {
        padding-top: 120px;
    }
}

/* Prevent horizontal scroll on mobile */
@media (max-width: 767px) {
    body {
        overflow-x: hidden;
        width: 100%;
        position: relative;
    }
    
    .navbar {
        position: fixed;
        width: 100%;
    }
    
    .hero {
        padding-top: 80px;
    }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .btn,
    .course-action,
    .nav-cta,
    .social-link,
    .nav-links a {
        min-height: 44px;
        min-width: 44px;
    }
    
    .nav-links a {
        display: flex;
        align-items: center;
        padding: 10px 0;
    }
    
    /* Reduce hover effects on touch devices */
    .course-card:hover,
    .feature-card:hover {
        transform: translateY(-5px);
    }
}

/* Fix for images on mobile */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

.course-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

@media (max-width: 480px) {
    .course-image {
        height: 180px;
    }
    
    .hero h1 {
        font-size: 2rem;
        line-height: 1.1;
    }
    
    .hero p {
        font-size: 1rem;
    }
}

/* Ensure proper container widths */
.nav-container,
.section-header,
.courses-grid,
.features-grid,
.footer-container,
.stats-container {
    width: 100%;
    max-width: var(--container-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width: 768px) {
    .nav-container,
    .section-header,
    .courses-grid,
    .features-grid,
    .footer-container,
    .stats-container {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
`}}),(0,O.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,O.jsxs)(`div`,{className:`body-wrapper`,children:[(0,O.jsx)(`nav`,{className:`navbar`,id:`navbar`,children:(0,O.jsxs)(`div`,{className:`nav-container`,children:[(0,O.jsxs)(`a`,{href:`#`,className:`logo`,children:[(0,O.jsx)(`img`,{src:`images/eaglone/p-eaglone.png`,alt:`ProWorldz Logo`,className:`logo-img`,loading:`lazy`}),(0,O.jsxs)(`span`,{className:`logo-text`,children:[`PRO`,(0,O.jsx)(`span`,{className:`logo-accent`,children:`WORLDZ`})]})]}),(0,O.jsxs)(`div`,{className:`menu-toggle`+(e?` active`:``),onClick:()=>t(!e),children:[(0,O.jsx)(`span`,{}),(0,O.jsx)(`span`,{}),(0,O.jsx)(`span`,{})]}),(0,O.jsxs)(`ul`,{className:`nav-links`+(e?` active`:``),id:`navLinks`,children:[(0,O.jsx)(`li`,{children:(0,O.jsx)(`a`,{href:`/`,className:`active`,children:`Home`})}),(0,O.jsx)(`li`,{children:(0,O.jsx)(`a`,{href:`/about-home`,children:`About`})}),(0,O.jsx)(`li`,{children:(0,O.jsx)(`a`,{href:`/contact-home`,children:`Contact`})})]}),(0,O.jsxs)(`a`,{href:`/login`,className:`nav-cta`,children:[(0,O.jsx)(`i`,{className:`fas fa-sign-in-alt`}),`Login`]})]})}),(0,O.jsx)(`section`,{className:`hero`,id:`home`,children:(0,O.jsxs)(`div`,{className:`hero-content`,children:[(0,O.jsxs)(`div`,{className:`hero-badge`,children:[(0,O.jsx)(`i`,{className:`fas fa-star`}),`Premium Tech Training Platform`]}),(0,O.jsx)(`h1`,{children:`Master Advanced Technology Skills`}),(0,O.jsx)(`p`,{children:`Transform your career with industry-leading courses in cybersecurity, AI development, and cutting-edge technologies. Join thousands of professionals advancing their expertise.`}),(0,O.jsxs)(`div`,{className:`hero-cta-group`,children:[(0,O.jsxs)(`a`,{href:`#courses`,className:`btn btn-primary`,children:[`Explore Courses`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]}),(0,O.jsxs)(`a`,{href:`#features`,className:`btn btn-secondary`,children:[(0,O.jsx)(`i`,{className:`fas fa-play-circle`}),`See Features`]})]})]})}),(0,O.jsxs)(`section`,{className:`features`,id:`features`,children:[(0,O.jsxs)(`div`,{className:`section-header`,children:[(0,O.jsx)(`div`,{className:`section-badge`,children:`Why Choose Us`}),(0,O.jsx)(`h2`,{className:`section-title`,children:`Enterprise-Grade Learning Experience`}),(0,O.jsx)(`p`,{className:`section-description`,children:`Built for professionals who demand excellence. Our platform combines cutting-edge technology with expert instruction to deliver unmatched results.`})]}),(0,O.jsxs)(`div`,{className:`features-grid`,children:[(0,O.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`feature-icon`,children:(0,O.jsx)(`i`,{className:`fas fa-shield-alt`})}),(0,O.jsx)(`h3`,{children:`Industry-Leading Security`}),(0,O.jsx)(`p`,{children:`Learn from real-world cybersecurity scenarios with hands-on penetration testing, threat analysis, and advanced defense strategies.`})]}),(0,O.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`feature-icon`,children:(0,O.jsx)(`i`,{className:`fas fa-brain`})}),(0,O.jsx)(`h3`,{children:`AI-Powered Development`}),(0,O.jsx)(`p`,{children:`Master artificial intelligence and machine learning with practical projects that prepare you for the future of technology.`})]}),(0,O.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`feature-icon`,children:(0,O.jsx)(`i`,{className:`fas fa-rocket`})}),(0,O.jsx)(`h3`,{children:`Fast-Track Career Growth`}),(0,O.jsx)(`p`,{children:`Accelerate your professional development with industry-recognized certifications and direct pathways to high-demand roles.`})]}),(0,O.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`feature-icon`,children:(0,O.jsx)(`i`,{className:`fas fa-users`})}),(0,O.jsx)(`h3`,{children:`Expert Mentorship`}),(0,O.jsx)(`p`,{children:`Learn directly from industry veterans with years of real-world experience in leading tech companies and startups.`})]}),(0,O.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`feature-icon`,children:(0,O.jsx)(`i`,{className:`fas fa-laptop-code`})}),(0,O.jsx)(`h3`,{children:`Hands-On Projects`}),(0,O.jsx)(`p`,{children:`Build portfolio-worthy projects that demonstrate your skills to potential employers and clients in the tech industry.`})]}),(0,O.jsxs)(`div`,{className:`feature-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`feature-icon`,children:(0,O.jsx)(`i`,{className:`fas fa-infinity`})}),(0,O.jsx)(`h3`,{children:`Lifetime Access`}),(0,O.jsx)(`p`,{children:`Get unlimited access to all course materials, updates, and community resources for continuous learning and growth.`})]})]})]}),(0,O.jsxs)(`section`,{className:`courses`,id:`courses`,children:[(0,O.jsxs)(`div`,{className:`section-header`,children:[(0,O.jsx)(`h2`,{className:`section-title`,children:`Professional Training Courses`}),(0,O.jsx)(`p`,{className:`section-description`,children:`Comprehensive programs designed by industry experts to transform you into a sought-after technology professional.`})]}),(0,O.jsxs)(`div`,{className:`courses-grid`,children:[(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/secure-x.png`,alt:`Secure X`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`Secure X`}),(0,O.jsx)(`p`,{children:`Master advanced cybersecurity techniques and digital defense strategies. Learn to protect systems from sophisticated cyber threats and vulnerabilities.`}),(0,O.jsxs)(`a`,{href:`course-details/secure-x.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/ai.png`,alt:`AI Verse Web Labs`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`AI Verse Web Labs`}),(0,O.jsx)(`p`,{children:`Build intelligent web applications using AI-driven development, machine learning integration, and automated engineering workflows.`}),(0,O.jsxs)(`a`,{href:`course-details/Ai.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/hunt-elite.png`,alt:`Hunt Elite`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`Hunt Elite`}),(0,O.jsx)(`p`,{children:`Professional bug bounty hunting and exploit analysis. Learn advanced penetration testing and ethical hacking techniques.`}),(0,O.jsxs)(`a`,{href:`course-details/Hunt.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/creative-craft.png`,alt:`Creative Craft`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`Creative Craft`}),(0,O.jsx)(`p`,{children:`Master strategic visual communication design, branding, and UI/UX principles to create compelling digital experiences.`}),(0,O.jsxs)(`a`,{href:`course-details/Canva.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/py-desk.png`,alt:`Py Desk Systems`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`Py Desk Systems`}),(0,O.jsx)(`p`,{children:`Develop enterprise-grade desktop applications with Python. Master GUI frameworks and system-level programming.`}),(0,O.jsxs)(`a`,{href:`course-details/py.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/code-f.png`,alt:`Code Foundry`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`Code Foundry`}),(0,O.jsx)(`p`,{children:`Professional programming language mastery. Deep dive into best practices and advanced software engineering concepts.`}),(0,O.jsxs)(`a`,{href:`course-details/Code.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/startup.png`,alt:`Startup Gene Labs`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`Startup Gene Labs`}),(0,O.jsx)(`p`,{children:`Venture creation and startup scaling. Build, fund, and grow tech startups from idea to successful enterprise.`}),(0,O.jsxs)(`a`,{href:`course-details/startup.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/cli.png`,alt:`CLI++ Systems`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`CLI++ Systems`}),(0,O.jsx)(`p`,{children:`C++ command-line tool engineering for Linux. Build powerful system tools using advanced programming techniques.`}),(0,O.jsxs)(`a`,{href:`course-details/CLI.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,O.jsxs)(`div`,{className:`course-card fade-in-up`,children:[(0,O.jsx)(`div`,{className:`course-image`,children:(0,O.jsx)(`img`,{src:`images/jai-bro/app.png`,alt:`API Man`,loading:`lazy`})}),(0,O.jsxs)(`div`,{className:`course-body`,children:[(0,O.jsx)(`h3`,{children:`API Man`}),(0,O.jsx)(`p`,{children:`Master API development and management. Build RESTful and GraphQL APIs with scalable architecture patterns.`}),(0,O.jsxs)(`a`,{href:`course-details/api.pdf`,className:`course-action`,children:[`View Details`,(0,O.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]})]})]}),(0,O.jsx)(`section`,{className:`stats`,children:(0,O.jsxs)(`div`,{className:`stats-container`,children:[(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsx)(`div`,{className:`stat-number`,children:`30K+`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Active Students`})]}),(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsx)(`div`,{className:`stat-number`,children:`50+`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Expert Instructors`})]}),(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsx)(`div`,{className:`stat-number`,children:`98%`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Success Rate`})]}),(0,O.jsxs)(`div`,{className:`stat-item`,children:[(0,O.jsx)(`div`,{style:{animation:`none !important`,fontSize:`3rem !important`,background:`linear-gradient(135deg, var(--primary-red), var(--secondary-red)) !important`,WebkitBackgroundClip:`text !important`,WebkitTextFillColor:`transparent !important`,backgroundClip:`text !important`,marginBottom:`8px`},children:`24/7`}),(0,O.jsx)(`div`,{className:`stat-label`,children:`Support Available`})]})]})}),(0,O.jsx)(`section`,{className:`cta-section`,children:(0,O.jsxs)(`div`,{className:`cta-content`,children:[(0,O.jsx)(`h2`,{children:`Ready to Transform Your Career?`}),(0,O.jsx)(`p`,{children:`Join thousands of professionals who have already elevated their skills and secured their dream positions in the tech industry.`}),(0,O.jsxs)(`div`,{className:`hero-cta-group`,children:[(0,O.jsxs)(`a`,{href:`/login`,className:`btn btn-primary`,children:[(0,O.jsx)(`i`,{className:`fas fa-rocket`}),`Get Started Today`]}),(0,O.jsxs)(`a`,{href:`/contact-home`,className:`btn btn-secondary`,children:[(0,O.jsx)(`i`,{className:`fas fa-comments`}),`Talk to Our Team`]})]})]})}),(0,O.jsx)(`footer`,{className:`footer`,children:(0,O.jsx)(`div`,{className:`footer-container`,children:(0,O.jsx)(`div`,{className:`footer-bottom`,children:(0,O.jsx)(`p`,{children:`© 2026 ProWorldz. All rights reserved. | Privacy Policy | Terms of Service`})})})})]})]})})}var br,O,xr=o((()=>{br=l(d()),O=w()}));function Sr(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(`div`,{className:`html-wrapper`,children:[(0,k.jsxs)(`div`,{className:`head-wrapper`,children:[(0,k.jsx)(`meta`,{charSet:`UTF-8`}),(0,k.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,k.jsx)(`title`,{children:`Laboratory | Proworldz`}),(0,k.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.googleapis.com`}),(0,k.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossorigin:!0}),(0,k.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,k.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        /* ===== CSS RESET & BASE ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
            overscroll-behavior: auto;
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #000000;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
        }

        /* ===== CUSTOM FONTS ===== */
        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        /* ===== CUSTOM PROPERTIES (CSS Variables) ===== */
        :root {
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --card-foreground: #ffffff;
            --popover: #080808;
            --popover-foreground: #ffffff;
            --primary: #ff2a2f;
            --primary-foreground: #ffffff;
            --secondary: #080808;
            --secondary-foreground: #ffffff;
            --muted: #080808;
            --muted-foreground: #a0a0a0;
            --accent: rgba(248, 250, 252, 0.05);
            --accent-foreground: #ffffff;
            --border: rgba(139, 12, 16, 0.1);
            --pop: rgba(255, 255, 255, 0.025);
            --input: rgba(139, 12, 16, 0.15);
            --ring: rgba(148, 163, 184, 0.5);
            
            --success: #ff2a2f;
            --destructive: #ff2a2f;
            --warning: #8b0c10;
            
            --chart-1: #ff2a2f;
            --chart-2: #ff2a2f;
            --chart-3: #8b0c10;
            --chart-4: #ff2a2f;
            --chart-5: #ff2a2f;
            
            --sidebar: #080808;
            --sidebar-foreground: #ffffff;
            --sidebar-primary: #ff2a2f;
            --sidebar-primary-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-accent-foreground: #ffffff;
            --sidebar-border: rgba(139, 12, 16, 0.1);
            --sidebar-ring: rgba(148, 163, 184, 0.5);
            
            --gap: 1.5rem;
            --sides: 1.5rem;
            --header-mobile: 3.8rem;
        }

        /* DESKTOP-ONLY LAYOUT - Handled by app-theme-overrides.css */

        

        #loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            transition: opacity 0.5s ease, visibility 0.5s;
        }

        #loader {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(139, 92, 246, 0.1);
            border-top-color: #ff2a2f;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }

        #loader-text {
            font-family: 'Roboto Mono', monospace;
            font-size: 0.75rem;
            color: #ff2a2f;
            letter-spacing: 0.2em;
            animation: pulse-loader 1.5s infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-loader { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

        body.loaded #loader-wrapper {
            opacity: 0;
            visibility: hidden;
        }

        /* Left Sidebar - Navigation */
        

        /* Main Content Area - Handled by app-theme-overrides.css */

        /* ===== TYPOGRAPHY ===== */
        .font-display {
            font-family: 'Rebels', 'Roboto Mono', monospace;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .font-mono {
            font-family: 'Roboto Mono', monospace;
        }

        /* ===== UTILITY CLASSES ===== */
        .hidden {
            display: none !important;
        }

        .block {
            display: block;
        }

        .flex {
            display: flex;
        }

        .grid {
            display: grid;
        }

        .relative {
            position: relative;
        }

        .absolute {
            position: absolute;
        }

        .sticky {
            position: sticky;
        }

        .inset-0 {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        .inset-x-0 {
            left: 0;
            right: 0;
        }

        .top-0 {
            top: 0;
        }

        .bottom-0 {
            bottom: 0;
        }

        .right-0 {
            right: 0;
        }

        .left-0 {
            left: 0;
        }

        .z-10 {
            z-index: 10;
        }

        .z-20 {
            z-index: 20;
        }

        .z-30 {
            z-index: 30;
        }

        .z-40 {
            z-index: 40;
        }

        .z-50 {
            z-index: 50;
        }

        .w-full {
            width: 100%;
        }

        .h-full {
            height: 100%;
        }

        .h-screen {
            height: 100vh;
        }

        .min-h-screen {
            min-height: 100vh;
        }

        .size-full {
            width: 100%;
            height: 100%;
        }

        .aspect-square {
            aspect-ratio: 1 / 1;
        }

        .overflow-hidden {
            overflow: hidden;
        }

        .overflow-y-auto {
            overflow-y: auto;
        }

        .overflow-clip {
            overflow: clip;
        }

        .object-contain {
            object-fit: contain;
        }

        .object-cover {
            object-fit: cover;
        }

        .rounded {
            border-radius: 0.375rem;
        }

        .rounded-lg {
            border-radius: var(--radius);
        }

        .rounded-md {
            border-radius: calc(var(--radius) - 2px);
        }

        .rounded-sm {
            border-radius: calc(var(--radius) - 4px);
        }

        .rounded-full {
            border-radius: 9999px;
        }

        .border {
            border-width: 1px;
        }

        .border-2 {
            border-width: 2px;
        }

        .border-b {
            border-bottom-width: 1px;
        }

        .border-t {
            border-top-width: 1px;
        }

        .ring-2 {
            box-shadow: 0 0 0 2px var(--ring);
        }

        .ring-pop {
            box-shadow: 0 0 0 2px var(--pop);
        }

        .bg-background {
            background-color: var(--background);
        }

        .bg-foreground {
            background-color: var(--foreground);
        }

        .bg-primary {
            background-color: var(--primary);
        }

        .bg-secondary {
            background-color: var(--secondary);
        }

        .bg-muted {
            background-color: var(--muted);
        }

        .bg-accent {
            background-color: var(--accent);
        }

        .bg-card {
            background-color: var(--card);
        }

        .bg-success {
            background-color: var(--success);
        }

        .bg-warning {
            background-color: var(--warning);
        }

        .bg-destructive {
            background-color: var(--destructive);
        }

        .bg-sidebar {
            background-color: var(--sidebar);
        }

        .bg-sidebar-primary {
            background-color: var(--sidebar-primary);
        }

        .bg-sidebar-accent {
            background-color: var(--sidebar-accent);
        }

        .text-foreground {
            color: var(--foreground);
        }

        .text-primary {
            color: var(--primary);
        }

        .text-primary-foreground {
            color: var(--primary-foreground);
        }

        .text-secondary {
            color: var(--secondary);
        }

        .text-secondary-foreground {
            color: var(--secondary-foreground);
        }

        .text-muted {
            color: var(--muted);
        }

        .text-muted-foreground {
            color: var(--muted-foreground);
        }

        .text-success {
            color: var(--success);
        }

        .text-warning {
            color: var(--warning);
        }

        .text-destructive {
            color: var(--destructive);
        }

        .text-sidebar-foreground {
            color: var(--sidebar-foreground);
        }

        .text-sidebar-primary {
            color: var(--sidebar-primary);
        }

        .text-sidebar-primary-foreground {
            color: var(--sidebar-primary-foreground);
        }

        .text-sidebar-accent-foreground {
            color: var(--sidebar-accent-foreground);
        }

        .text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
        }

        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .text-base {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }

        .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        .text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        .text-5xl {
            font-size: 3rem;
            line-height: 1;
        }

        .font-normal {
            font-weight: 400;
        }

        .font-medium {
            font-weight: 500;
        }

        .font-semibold {
            font-weight: 600;
        }

        .font-bold {
            font-weight: 700;
        }

        .uppercase {
            text-transform: uppercase;
        }

        .italic {
            font-style: italic;
        }

        .text-center {
            text-align: center;
        }

        .text-right {
            text-align: right;
        }

        .opacity-0 {
            opacity: 0;
        }

        .opacity-10 {
            opacity: 0.1;
        }

        .opacity-20 {
            opacity: 0.2;
        }

        .opacity-30 {
            opacity: 0.3;
        }

        .opacity-40 {
            opacity: 0.4;
        }

        .opacity-50 {
            opacity: 0.5;
        }

        .opacity-60 {
            opacity: 0.6;
        }

        .opacity-70 {
            opacity: 0.7;
        }

        .opacity-80 {
            opacity: 0.8;
        }

        .opacity-90 {
            opacity: 0.9;
        }

        .opacity-100 {
            opacity: 1;
        }

        .grayscale {
            filter: grayscale(100%);
        }

        .cursor-pointer {
            cursor: pointer;
        }

        .cursor-grab {
            cursor: grab;
        }

        .cursor-grabbing {
            cursor: grabbing;
        }

        .select-none {
            user-select: none;
        }

        .transition-all {
            transition: all 0.3s ease;
        }

        .transition-colors {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        .transition-opacity {
            transition: opacity 0.3s ease;
        }

        .transition-transform {
            transition: transform 0.3s ease;
        }

        .duration-200 {
            transition-duration: 0.2s;
        }

        .duration-300 {
            transition-duration: 0.3s;
        }

        .duration-500 {
            transition-duration: 0.5s;
        }

        .ease-out {
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }

        .ease-in-out {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .group:hover .group-hover:opacity-100 {
            opacity: 1 !important;
        }

        .group:hover .group-hover:scale-105 {
            transform: scale(1.05);
        }

        .group:hover .group-hover:brightness-110 {
            filter: brightness(1.1);
        }

        /* ===== LAYOUT GRID ===== */
        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }

        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .grid-cols-12 {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }

        .col-span-1 {
            grid-column: span 1 / span 1;
        }

        .col-span-2 {
            grid-column: span 2 / span 2;
        }

        .col-span-3 {
            grid-column: span 3 / span 3;
        }

        .col-span-7 {
            grid-column: span 7 / span 7;
        }

        .gap-1 {
            gap: 0.25rem;
        }

        .gap-2 {
            gap: 0.5rem;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .gap-4 {
            gap: 1rem;
        }

        .gap-6 {
            gap: 1.5rem;
        }

        .gap-8 {
            gap: 2rem;
        }

        .gap-10 {
            gap: 2.5rem;
        }

        .gap-gap {
            gap: var(--gap);
        }

        .p-0 {
            padding: 0;
        }

        .p-1 {
            padding: 0.25rem;
        }

        .p-2 {
            padding: 0.5rem;
        }

        .p-3 {
            padding: 0.75rem;
        }

        .p-4 {
            padding: 1rem;
        }

        .p-6 {
            padding: 1.5rem;
        }

        .px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }

        .px-3 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
        }

        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .py-1 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
        }

        .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        .py-10 {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
        }

        .py-sides {
            padding-top: var(--sides);
            padding-bottom: var(--sides);
        }

        .px-sides {
            padding-left: var(--sides);
            padding-right: var(--sides);
        }

        .pt-1 {
            padding-top: 0.25rem;
        }

        .pt-2 {
            padding-top: 0.5rem;
        }

        .pt-4 {
            padding-top: 1rem;
        }

        .pb-1 {
            padding-bottom: 0.25rem;
        }

        .pb-4 {
            padding-bottom: 1rem;
        }

        .pl-2 {
            padding-left: 0.5rem;
        }

        .pl-3 {
            padding-left: 0.75rem;
        }

        .pl-4 {
            padding-left: 1rem;
        }

        .pr-1 {
            padding-right: 0.25rem;
        }

        .pr-2 {
            padding-right: 0.5rem;
        }

        .pr-3 {
            padding-right: 0.75rem;
        }

        .pr-4 {
            padding-right: 1rem;
        }

        .mt-1 {
            margin-top: 0.25rem;
        }

        .mt-2 {
            margin-top: 0.5rem;
        }

        .mt-auto {
            margin-top: auto;
        }

        .mb-1 {
            margin-bottom: 0.25rem;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }

        .mb-6 {
            margin-bottom: 1.5rem;
        }

        .ml-auto {
            margin-left: auto;
        }

        .mr-1 {
            margin-right: 0.25rem;
        }

        .mr-2 {
            margin-right: 0.5rem;
        }

        .mr-3 {
            margin-right: 0.75rem;
        }

        .space-y-1 > * + * {
            margin-top: 0.25rem;
        }

        .space-y-2 > * + * {
            margin-top: 0.5rem;
        }

        .space-y-3 > * + * {
            margin-top: 0.75rem;
        }

        .space-y-4 > * + * {
            margin-top: 1rem;
        }

        .space-y-6 > * + * {
            margin-top: 1.5rem;
        }

        .flex-1 {
            flex: 1 1 0%;
        }

        .flex-col {
            flex-direction: column;
        }

        .flex-row {
            flex-direction: row;
        }

        .items-start {
            align-items: flex-start;
        }

        .items-center {
            align-items: center;
        }

        .items-baseline {
            align-items: baseline;
        }

        .items-stretch {
            align-items: stretch;
        }

        .justify-start {
            justify-content: flex-start;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-between {
            justify-content: space-between;
        }

        .justify-end {
            justify-content: flex-end;
        }

        .min-w-0 {
            min-width: 0;
        }

        .max-w-xs {
            max-width: 20rem;
        }

        .max-w-sm {
            max-width: 24rem;
        }

        .max-w-md {
            max-width: 28rem;
        }

        .max-w-max {
            max-width: max-content;
        }

        .w-1/4 {
            width: 25%;
        }

        .w-14 {
            width: 3.5rem;
        }

        .w-16 {
            width: 4rem;
        }

        .w-56 {
            width: 14rem;
        }

        .w-80 {
            width: 20rem;
        }

        .h-5 {
            height: 1.25rem;
        }

        .h-6 {
            height: 1.5rem;
        }

        .h-7 {
            height: 1.75rem;
        }

        .h-8 {
            height: 2rem;
        }

        .h-10 {
            height: 2.5rem;
        }

        .h-12 {
            height: 3rem;
        }

        .h-14 {
            height: 3.5rem;
        }

        .h-32 {
            height: 8rem;
        }

        .h-header-mobile {
            height: var(--header-mobile);
        }

        .size-3 {
            width: 0.75rem;
            height: 0.75rem;
        }

        .size-4 {
            width: 1rem;
            height: 1rem;
        }

        .size-5 {
            width: 1.25rem;
            height: 1.25rem;
        }

        .size-6 {
            width: 1.5rem;
            height: 1.5rem;
        }

        .size-7 {
            width: 1.75rem;
            height: 1.75rem;
        }

        .size-9 {
            width: 2.25rem;
            height: 2.25rem;
        }

        .size-10 {
            width: 2.5rem;
            height: 2.5rem;
        }

        .size-12 {
            width: 3rem;
            height: 3rem;
        }

        .size-14 {
            width: 3.5rem;
            height: 3.5rem;
        }

        .size-16 {
            width: 4rem;
            height: 4rem;
        }

        .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        /* ===== CUSTOM COMPONENT STYLES ===== */
        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border: 1px solid transparent;
        }

        .badge-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
            border-color: var(--primary);
        }

        .badge-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .badge-outline {
            background-color: transparent;
            color: currentColor;
            border-color: currentColor;
        }

        .badge-outline-success {
            background-color: transparent;
            color: var(--success);
            border-color: var(--success);
        }

        .badge-outline-warning {
            background-color: transparent;
            color: var(--warning);
            border-color: var(--warning);
        }

        .badge-destructive {
            background-color: var(--destructive);
            color: white;
            border-color: var(--destructive);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid transparent;
            user-select: none;
            white-space: nowrap;
        }

        .button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .button-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
        }

        .button-default:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--primary) 90%, black);
        }

        .button-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .button-secondary:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--secondary) 90%, black);
        }

        .button-ghost {
            background-color: transparent;
            color: currentColor;
        }

        .button-ghost:hover:not(:disabled) {
            background-color: var(--accent);
        }

        .button-outline {
            background-color: transparent;
            color: currentColor;
            border-color: currentColor;
        }

        .button-outline:hover:not(:disabled) {
            background-color: var(--accent);
        }

        .button-sm {
            height: 2rem;
            padding: 0 0.75rem;
            font-size: 0.875rem;
        }

        .button-md {
            height: 2.5rem;
            padding: 0 1rem;
            font-size: 0.875rem;
        }

        .button-lg {
            height: 3rem;
            padding: 0 1.5rem;
            font-size: 1rem;
        }

        .button-xl {
            height: 3.5rem;
            padding: 0 2rem;
            font-size: 1rem;
        }

        .button-icon {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0;
        }

        .input {
            width: 100%;
            height: 2.5rem;
            padding: 0 0.75rem;
            background-color: var(--input);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            color: var(--foreground);
            font-family: inherit;
            font-size: 0.875rem;
            transition: border-color 0.2s;
        }

        .input:focus {
            outline: none;
            border-color: var(--ring);
        }

        .input::placeholder {
            color: var(--muted-foreground);
            opacity: 0.7;
        }

        .separator {
            width: 100%;
            height: 1px;
            background-color: var(--border);
        }

        .bullet {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--muted-foreground);
        }

        .bullet-success {
            background-color: var(--success);
        }

        .bullet-warning {
            background-color: var(--warning);
        }

        .bullet-destructive {
            background-color: var(--destructive);
        }

        .bullet-sm {
            width: 0.375rem;
            height: 0.375rem;
        }

        .sheet {
            position: fixed;
            z-index: 50;
            background-color: var(--background);
            transition: transform 0.3s ease;
        }

        .sheet-bottom {
            bottom: 0;
            left: 0;
            right: 0;
            transform: translateY(100%);
        }

        .sheet-bottom.open {
            transform: translateY(0);
        }

        .sheet-right {
            top: 0;
            right: 0;
            bottom: 0;
            transform: translateX(100%);
        }

        .sheet-right.open {
            transform: translateX(0);
        }

        .tooltip {
            position: relative;
        }

        .tooltip-content {
            position: absolute;
            z-index: 50;
            padding: 0.5rem 0.75rem;
            background-color: var(--popover);
            color: var(--popover-foreground);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            font-size: 0.875rem;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
        }

        .tooltip:hover .tooltip-content {
            opacity: 1;
        }

        .tabs-list {
            display: flex;
            gap: 0.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.5rem;
        }

        .tabs-trigger {
            padding: 0.5rem 1rem;
            background: transparent;
            border: none;
            color: var(--muted-foreground);
            font-family: inherit;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: color 0.2s;
            position: relative;
        }

        .tabs-trigger:hover {
            color: var(--foreground);
        }

        .tabs-trigger.active {
            color: var(--foreground);
        }

        .tabs-trigger.active::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--primary);
        }

        /* ===== SIDEBAR NAVIGATION STYLES ===== */
        

        .nav-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            margin-bottom: 0.5rem;
        }

        .nav-title .bullet {
            width: 0.375rem;
            height: 0.375rem;
        }

        .nav-title span {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--muted-foreground);
        }

        

        

        

        /* ===== ANIMATIONS ===== */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
            animation: slideUp 0.3s ease-out;
        }

        /* ===== LAB CARD STYLES ===== */
        .lab-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        .lab-card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
        }

        .lab-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--primary));
            z-index: 1;
        }

        .lab-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border-color: rgba(99, 102, 241, 0.3);
        }

        .lab-img {
            height: 180px;
            overflow: hidden;
            position: relative;
        }

        .lab-img::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
        }

        .lab-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
            filter: brightness(0.8) contrast(1.1);
        }

        .lab-card:hover .lab-img img {
            transform: scale(1.1);
            filter: brightness(1) contrast(1);
        }

        .lab-content {
            padding: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 1;
        }

        .lab-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: var(--foreground);
            position: relative;
            display: inline-block;
        }

        .lab-content h3::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--primary));
            border-radius: 2px;
            transition: width 0.3s ease;
        }

        .lab-card:hover .lab-content h3::after {
            width: 100%;
        }

        .lab-content p {
            color: var(--muted-foreground);
            line-height: 1.6;
            margin-bottom: 1.5rem;
            flex-grow: 1;
            font-size: 0.875rem;
        }

        .lab-btn {
            background: linear-gradient(45deg, var(--primary), var(--primary));
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 0.875rem;
            width: 100%;
            position: relative;
            overflow: hidden;
            font-family: inherit;
        }

        .lab-btn:hover {
            background: linear-gradient(45deg, var(--primary), var(--primary));
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(108, 99, 255, 0.3);
        }

        .lab-btn::after {
            content: '→';
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
            position: absolute;
            right: 1.5rem;
        }

        .lab-btn:hover::after {
            opacity: 1;
            transform: translateX(0);
        }

        /* ===== STATUS INDICATOR ===== */
        .status-indicator {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            padding: 0.375rem 0.75rem;
            background-color: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--success);
        }

        .status-dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--success);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        /* ===== CUSTOM SCROLLBAR ===== */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--muted);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--muted-foreground);
        }

        
        

        
        

        

        

        

        

        
        

        

        

        

        

        

        

        

        .ripple-container {
            position: relative;
            overflow: hidden;
        }

`}}),(0,k.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,k.jsxs)(`div`,{className:`body-wrapper`,children:[(0,k.jsxs)(`div`,{id:`loader-wrapper`,children:[(0,k.jsx)(`div`,{id:`loader`}),(0,k.jsx)(`div`,{id:`loader-text`,children:`INITIALIZING ECOSYSTEM...`})]}),(0,k.jsx)(`div`,{className:`desktop-container`,children:(0,k.jsxs)(`div`,{className:`desktop-main`,children:[(0,k.jsx)(`div`,{className:`card`,children:(0,k.jsx)(`div`,{className:`p-4 flex items-center justify-between`,children:(0,k.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,k.jsx)(`div`,{className:`size-9 rounded bg-primary flex items-center justify-center`,children:(0,k.jsxs)(`svg`,{className:`size-5 text-primary-foreground`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,k.jsx)(`path`,{stroke:`currentColor`,strokeWidth:`1.667`,d:`M16.228 3.772c1.31 1.31-.416 5.16-3.856 8.6-3.44 3.44-7.29 5.167-8.6 3.856-1.31-1.31.415-5.16 3.855-8.6 3.44-3.44 7.29-5.167 8.6-3.856Z`}),(0,k.jsx)(`path`,{stroke:`currentColor`,strokeWidth:`1.667`,d:`M16.228 16.228c-1.31 1.31-5.161-.416-8.601-3.855-3.44-3.44-5.166-7.29-3.856-8.601 1.31-1.31 5.162.416 8.601 3.855 3.44 3.44 5.166 7.29 3.856 8.601Z`})]})}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h1`,{className:`text-3xl font-display`,children:`Laboratory`}),(0,k.jsx)(`div`,{className:`text-sm text-muted-foreground`,children:`Access interactive coding environments and Linux terminal`})]})]})})}),(0,k.jsxs)(`section`,{className:`lab-grid fade-in`,children:[(0,k.jsxs)(`div`,{className:`lab-card animate-fadeIn`,children:[(0,k.jsx)(`div`,{className:`lab-img`,style:{height:`30cap`},children:(0,k.jsx)(`img`,{src:`images/eaglone/ep.png`,alt:`Compilers`,loading:`lazy`})}),(0,k.jsxs)(`div`,{className:`lab-content`,children:[(0,k.jsx)(`h3`,{children:`Compilers and Interpreters`}),(0,k.jsx)(`p`,{children:`Unleash your programming skills with our inbuilt compilers and interpreters. Code, compile, and test in multiple languages in a seamless environment designed for learning and experimentation.`}),(0,k.jsx)(`button`,{className:`lab-btn`,onClick:`location.href='lab/langs'`,children:`Go to lab`})]})]}),(0,k.jsxs)(`div`,{className:`lab-card animate-fadeIn`,style:{animationDelay:`0.1s`},children:[(0,k.jsx)(`div`,{className:`lab-img`,style:{height:`30cap`},children:(0,k.jsx)(`img`,{src:`images/eaglone/es.png`,alt:`linux terminal`,loading:`lazy`})}),(0,k.jsxs)(`div`,{className:`lab-content`,children:[(0,k.jsx)(`h3`,{children:`Linux Terminal`}),(0,k.jsx)(`p`,{children:`Master Linux commands with our inbuilt terminal. Practice shell scripting, system administration, and learn essential Linux skills in a safe, interactive environment.`}),(0,k.jsx)(`button`,{className:`lab-btn`,onClick:`location.href='lab/lin_term'`,children:`Go to lab`})]})]})]})]})})]})]})})}var k,Cr=o((()=>{d(),k=w()}));function wr(){let[e,t]=(0,Tr.useState)(``),[n,r]=(0,Tr.useState)(``),[i,a]=(0,Tr.useState)(!1),[o,s]=(0,Tr.useState)(!1),c=Ue();return(0,Er.jsx)(Er.Fragment,{children:(0,Er.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Er.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Er.jsx)(`meta`,{charSet:`UTF-8`}),(0,Er.jsx)(`title`,{children:`Login | SECURE WORLDZ`}),(0,Er.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,Er.jsx)(`link`,{rel:`icon`,type:`image/png`,href:`image.png`}),(0,Er.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap`,rel:`stylesheet`}),(0,Er.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`}),(0,Er.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
            --gap: 1.5rem;
            --sides: 1.5rem;
        --primary-red: #ff2a2f;
        --primary-red-hover: #ff2a2f;
        --secondary-red: #ff2a2f;
        --accent-red: #ff2a2f;
        --dark-bg: #000000;
        --darker-bg: #000000;
        --card-bg: #080808;
        --card-hover: #080808;
        --text-primary: #ffffff;
        --text-secondary: #a3a3a3;
        --text-muted: #737373;
        --border-color: rgba(139, 12, 16, 0.1);
        --border-hover: rgba(255, 255, 255, 0.2);
        --success: #ffffff;
        --danger: #ffffff;
        
        --shadow-glow: 0 0 40px rgba(139, 12, 16, 0.1);
        --shadow-intense: 0 20px 60px rgba(139, 12, 16, 0.15);
        --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        --transition-fast: all 0.2s ease;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Inter', sans-serif;
        background: var(--dark-bg);
        color: var(--text-primary);
        line-height: 1.6;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        position: relative;
    }

    h1, h2, h3, h4 {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        line-height: 1.2;
    }

    .auth-container {
        width: 100%;
        max-width: 420px;
        position: relative;
        z-index: 2;
    }

    .auth-box {
        background: var(--card-bg);
        padding: 3rem;
        border-radius: 20px;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-glow);
        position: relative;
        overflow: hidden;
        transition: var(--transition-smooth);
    }

    .brand {
        text-align: center;
        margin-bottom: 2.5rem;
    }

    .logo-img {
        width: 150px;
        height: 150px;
        object-fit: contain;
        margin: 0 auto 1.5rem;
        filter: brightness(1.2);
        transition: var(--transition-smooth);
    }

    .logo-img:hover {
        transform: rotate(10deg) scale(1.1);
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
    }

    .brand h1 {
        font-size: 2rem;
        font-weight: 900;
        background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
    }

    .brand p {
        color: var(--text-secondary);
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .form-group {
        position: relative;
        margin-bottom: 1.75rem;
    }

    .form-group input {
        width: 100%;
        padding: 1rem 1.25rem;
        background: rgba(139, 12, 16, 0.05);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        color: var(--text-primary);
        font-size: 0.95rem;
        font-family: 'Inter', sans-serif;
        transition: var(--transition-smooth);
        padding-right: 3rem;
    }

    .form-group label {
        position: absolute;
        top: 1rem;
        left: 1.25rem;
        color: var(--text-secondary);
        font-size: 0.95rem;
        pointer-events: none;
        transition: var(--transition-smooth);
        background: transparent;
    }

    .form-group input:focus + label,
    .form-group input:not(:placeholder-shown) + label {
        top: -0.75rem;
        left: 0.75rem;
        font-size: 0.75rem;
        color: var(--text-primary);
        padding: 0 0.5rem;
        background: var(--card-bg);
    }

    .password-toggle {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        font-size: 1rem;
        padding: 0.25rem;
        transition: var(--transition-fast);
    }

    .btn-login {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%);
        color: #000000;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: pointer;
        margin-top: 0.5rem;
        transition: var(--transition-smooth);
        font-family: 'Space Grotesk', sans-serif;
        position: relative;
        overflow: hidden;
    }

    .error {
        text-align: center;
        color: var(--text-primary);
        font-size: 0.875rem;
        margin: 0.75rem 0;
        display: none;
        background: rgba(139, 12, 16, 0.05);
        padding: 0.75rem;
        border-radius: 8px;
        border: 1px solid rgba(139, 12, 16, 0.1);
    }

    .loading {
        text-align: center;
        color: var(--text-primary);
        font-size: 0.875rem;
        margin: 0.75rem 0;
        display: none;
    }

    .loading::after {
        content: '';
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-left: 0.5rem;
        border: 2px solid var(--border-color);
        border-top-color: var(--text-primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        vertical-align: middle;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
        .auth-box { padding: 2.5rem; }
        .logo-img { width: 70px; height: 70px; }
        .brand h1 { font-size: 1.75rem; }
    }

    @media (max-width: 480px) {
        body { padding: 15px; }
        .auth-box { padding: 2rem; }
        .brand h1 { font-size: 1.5rem; }
        .brand p { font-size: 0.75rem; }
        .form-group input { padding: 0.875rem 1rem; font-size: 0.875rem; }
        .btn-login { padding: 0.875rem; font-size: 0.875rem; }
    }

    body, h1, h2, h3, h4, h5, h6, p, span, div, li, a, button, input {
        font-weight: 700 !important;
    }
`}}),(0,Er.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,Er.jsx)(`div`,{className:`body-wrapper`,children:(0,Er.jsx)(`div`,{className:`auth-container`,children:(0,Er.jsxs)(`div`,{className:`auth-box`,children:[(0,Er.jsxs)(`div`,{className:`brand`,children:[(0,Er.jsx)(`img`,{src:`images/eaglone/e-welcome-gen.png`,alt:`Secure Worldz Logo`,className:`logo-img`,loading:`lazy`}),(0,Er.jsx)(`h1`,{children:`SECURE WORLDZ`}),(0,Er.jsx)(`p`,{children:`Access your professional learning dashboard`})]}),(0,Er.jsxs)(`form`,{onSubmit:t=>{t.preventDefault(),a(!0),s(!1),setTimeout(()=>{a(!1),e===`user@example.com`&&n===`password123`?c(`/ss/dashboard`):s(!0)},1500)},children:[(0,Er.jsxs)(`div`,{className:`form-group`,children:[(0,Er.jsx)(`input`,{type:`email`,id:`mail-login`,name:`mail-login`,placeholder:` `,required:!0,value:e,onChange:e=>t(e.target.value)}),(0,Er.jsx)(`label`,{children:`Email Address`})]}),(0,Er.jsxs)(`div`,{className:`form-group`,children:[(0,Er.jsx)(`input`,{type:`password`,id:`passw-login`,name:`passw-login`,placeholder:` `,required:!0,value:n,onChange:e=>r(e.target.value)}),(0,Er.jsx)(`label`,{children:`Password`}),(0,Er.jsx)(`button`,{type:`button`,className:`password-toggle`,id:`togglePassword`,children:(0,Er.jsx)(`i`,{className:`fas fa-eye`})})]}),(0,Er.jsxs)(`div`,{className:`error`,id:`errorMessage`,style:{display:o?`block`:`none`},children:[(0,Er.jsx)(`i`,{className:`fas fa-exclamation-circle`}),` Invalid credentials. Please try again.`]}),(0,Er.jsx)(`div`,{className:`loading`,id:`loading`,style:{display:i?`block`:`none`},children:`Authenticating...`}),(0,Er.jsxs)(`button`,{type:`submit`,className:`btn-login`,id:`loginBtn`,disabled:i,children:[(0,Er.jsx)(`i`,{className:`fas fa-sign-in-alt`}),` `,i?`Logging in...`:`Login`]})]})]})})})]})})}var Tr,Er,Dr=o((()=>{Tr=l(d()),lr(),Er=w()}));function Or(){return(0,kr.jsxs)(kr.Fragment,{children:[(0,kr.jsx)(`div`,{id:`mobile-restriction-overlay`,className:`mobile-restriction-overlay`,children:(0,kr.jsxs)(`div`,{className:`restriction-content`,children:[(0,kr.jsx)(`div`,{className:`restriction-icon`,children:(0,kr.jsx)(`i`,{className:`fas fa-desktop`})}),(0,kr.jsx)(`h1`,{children:`PC/Laptop Required`}),(0,kr.jsxs)(`p`,{children:[`To ensure the best possible experience and full access to our interactive lab environments, please open this platform on a `,(0,kr.jsx)(`span`,{children:`Laptop or PC`}),`.`]}),(0,kr.jsx)(`div`,{className:`restriction-footer`,children:(0,kr.jsx)(`div`,{className:`badge`,children:`Desktop Only`})})]})}),(0,kr.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
.mobile-restriction-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 10000;
    background: radial-gradient(circle at center, #1a1a1a 0%, #000000 100%);
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
}

.restriction-content {
    max-width: 400px;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 3rem 2rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    animation: fadeInScale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.restriction-icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 42, 47, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
}

.restriction-icon i {
    font-size: 2.5rem;
    color: #ff2a2f;
    animation: pulseIcon 2s infinite;
}

.restriction-content h1 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #fff, #a0a0a0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-family: 'Space Grotesk', sans-serif;
}

.restriction-content p {
    color: #a0a0a0;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1rem;
}

.restriction-content p span {
    color: #ff2a2f;
    font-weight: 700;
}

.restriction-footer .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 42, 47, 0.1);
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ff2a2f;
    border: 1px solid rgba(255, 42, 47, 0.3);
}

@keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes pulseIcon {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
}

@media (max-width: 768px) {
    .mobile-restriction-overlay {
        display: flex;
    }
    body {
        overflow: hidden !important;
        position: fixed;
        width: 100%;
    }
}
`}})]})}var kr,Ar=o((()=>{d(),kr=w()}));function jr(){return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(`div`,{className:`html-wrapper`,children:[(0,A.jsxs)(`div`,{className:`head-wrapper`,children:[(0,A.jsx)(`meta`,{charSet:`UTF-8`}),(0,A.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,A.jsx)(`title`,{children:`Our Courses | ProWorldz`}),(0,A.jsx)(`link`,{rel:`icon`,type:`image/webp`,href:`image.png`}),(0,A.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,A.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`}),(0,A.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: rgba(229, 231, 235, 0.3);
    outline-color: rgba(156, 163, 175, 0.5);
    overscroll-behavior: auto;
}

body {
    font-family: 'Roboto Mono', monospace;
    background-color: #000000;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    overflow-x: hidden;
}


@font-face {
    font-family: "Rebels";
    src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


:root {
            --gap: 1.5rem;
            --sides: 1.5rem;
    --radius: 0.625rem;
    --background: #000000;
    --foreground: #ffffff;
    --card: #080808;
    --card-foreground: #ffffff;
    --popover: #080808;
    --popover-foreground: #ffffff;
    --primary: #ff2a2f;
    --primary-light: #a78bfa;
    --primary-foreground: #ffffff;
    --secondary: #080808;
    --secondary-foreground: #ffffff;
    --muted: #080808;
    --muted-foreground: #a0a0a0;
    --accent: rgba(248, 250, 252, 0.05);
    --accent-foreground: #ffffff;
    --border: rgba(139, 12, 16, 0.1);
    --input: rgba(139, 12, 16, 0.15);
    --ring: rgba(148, 163, 184, 0.5);
    
    --success: #ff2a2f;
    --destructive: #ff2a2f;
    --warning: #8b0c10;
    
    --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    --gradient-subtle: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(129, 131, 244, 0.1) 100%);
    --gradient-dark: linear-gradient(135deg, var(--background) 0%, var(--card) 100%);
    
    --sidebar: #080808;
    --sidebar-foreground: #ffffff;
    --sidebar-primary: #ff2a2f;
    --sidebar-primary-foreground: #ffffff;
    --sidebar-accent: rgba(248, 250, 252, 0.05);
    --sidebar-accent-foreground: #ffffff;
    --sidebar-border: rgba(139, 12, 16, 0.1);
    --sidebar-ring: rgba(148, 163, 184, 0.5);
    
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}


.desktop-container {
            display: grid !important;
    grid-template-columns: 280px 1fr !important;
    gap: var(--gap, 1.5rem) !important;
    min-height: 100vh !important;
    padding: var(--sides, 1.5rem) !important;
    background-color: var(--background) !important;
}



        body.loaded #loader-wrapper {
            opacity: 0;
            visibility: hidden;
        }
    



.card {
    background-color: var(--card);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    overflow: hidden;
}

.p-4 { padding: 1rem; }
.p-3 { padding: 0.75rem; }

.flex { display: flex; }
.items-center { align-items: center; }
.gap-3 { gap: 0.75rem; }
.size-12 { width: 3rem; height: 3rem; }
.bg-primary { background-color: var(--primary); }
.rounded-lg { border-radius: var(--radius); }
.text-primary-foreground { color: var(--primary-foreground); }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.font-display { font-family: 'Rebels', monospace; font-weight: 700; }
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-muted-foreground { color: var(--muted-foreground); }
.uppercase { text-transform: uppercase; }
.flex-1 { flex: 1 1 0%; }
.flex-shrink-0 { flex-shrink: 0; }




.space-y-1 > * + * {
    margin-top: 0.25rem;
}












.desktop-main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    max-height: calc(100vh - 3rem);
    padding-right: 0.5rem;
}


.page-header {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
}

.page-header h1 {
    font-family: 'Rebels', monospace;
    font-size: 3.5rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.page-header p {
    color: var(--muted-foreground);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}


.courses-container {
    display: grid;
     grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
    width: 100%;
}


  .course-card {
    background: linear-gradient(145deg, var(--card) 0%, rgba(8, 8, 8, 0.9) 100%);
    border-radius: 20px;
    border: 1px solid var(--border);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-xl);
}

.course-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
}

.course-card:hover {
    border-color: var(--primary);
    transform: translateY(-10px);
    box-shadow: var(--shadow-2xl);
}

.course-card:hover::after {
    opacity: 1;
}

.course-image {
    position: relative;
    height: 220px;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(129, 131, 244, 0.05) 100%);
}

.course-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-card:hover .course-image img {
    transform: scale(1.1);
}

.course-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--primary-light);
    text-transform: uppercase;
}

.course-body {
    padding: 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.course-body h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: var(--foreground);
    transition: color 0.3s ease;
    font-family: 'Rebels', monospace;
}

.course-card:hover .course-body h3 {
    color: var(--primary-light);
}

.course-body p {
    color: var(--muted-foreground);
    line-height: 1.7;
    margin-bottom: 2rem;
    flex-grow: 1;
    font-size: 0.95rem;
}

.course-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    background: var(--gradient-primary);
    color: var(--primary-foreground);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: none;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
}

.course-action:hover {
    background: var(--primary);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
    transform: translateX(5px);
}

.course-action i {
    transition: transform 0.3s ease;
}

.course-action:hover i {
    transform: translateX(5px);
}


.stats-section {
    padding: 6rem 2rem;
    background: var(--card);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    margin-bottom: 3rem;
}

.stats-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    font-family: 'Rebels', monospace;
}

.stat-label {
    font-size: 1rem;
    color: var(--muted-foreground);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}


.footer {
    text-align: center;
    padding: 2rem;
    color: var(--muted-foreground);
    border-top: 1px solid var(--border);
    margin-top: auto;
    font-size: 0.875rem;
}


.tv-noise {
    position: absolute;
    inset: 0;
    background: 
        repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
        ),
        repeating-linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
        );
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
    animation: tvNoise 0.1s infinite;
}

@keyframes tvNoise {
    0%, 100% { background-position: 0 0; }
    10% { background-position: -5% -10%; }
    20% { background-position: -15% 5%; }
    30% { background-position: 7% -25%; }
    40% { background-position: 20% 25%; }
    50% { background-position: -25% 10%; }
    60% { background-position: 15% 5%; }
    70% { background-position: 0 15%; }
    80% { background-position: 25% 35%; }
    90% { background-position: -10% 10%; }
}


@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    opacity: 0;
    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}


.course-card:nth-child(1) { animation-delay: 0.1s; }
.course-card:nth-child(2) { animation-delay: 0.2s; }
.course-card:nth-child(3) { animation-delay: 0.3s; }
.course-card:nth-child(4) { animation-delay: 0.4s; }
.course-card:nth-child(5) { animation-delay: 0.5s; }
.course-card:nth-child(6) { animation-delay: 0.6s; }
.course-card:nth-child(7) { animation-delay: 0.7s; }
.course-card:nth-child(8) { animation-delay: 0.8s; }
.course-card:nth-child(9) { animation-delay: 0.9s; }
.course-card:nth-child(10) { animation-delay: 1s; }


@media (max-width: 1400px) {
    .courses-container {
        gap: 2rem;
    }
}

@media (max-width: 1024px) {
    .desktop-container {
           display: flex !important;
        flex-direction: column !important;
    }

  .desktop-sidebar {
        display: none !important;
    }
  
    .courses-container {
     gap: 1.5rem;   
    }
    
    .page-header h1 {
        font-size: 2.75rem;
    }
}

@media (max-width: 768px) {
    .page-header h1 {
        font-size: 2.25rem;
    }
    
    .page-header p {
        font-size: 1rem;
        padding: 0 1rem;
    }
    
    .stats-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    
    .stat-number {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {  
    .page-header {
        margin-bottom: 1.5rem;
    }
    
    .page-header h1 {
        font-size: 2rem;
    }
    
    .course-body {
        padding: 1.5rem;
    }
    
    .course-body h3 {
        font-size: 1.4rem;
    }
    
    .stats-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .stat-number {
        font-size: 2rem;
    }
}

@media (max-width: 360px) {
    .page-header h1 {
        font-size: 1.75rem;
    }
}


.desktop-main::-webkit-scrollbar {
    width: 6px;
}

.desktop-main::-webkit-scrollbar-track {
    background: transparent;
}

.desktop-main::-webkit-scrollbar-thumb {
    background: var(--muted);
    border-radius: 3px;
}

.desktop-main::-webkit-scrollbar-thumb:hover {
    background: var(--muted-foreground);
}

        
        

        
        

        

        

        

        

        
        

        

        

        

        

        

        

        

        .ripple-container {
            position: relative;
            overflow: hidden;
        }

`}}),(0,A.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,A.jsxs)(`div`,{className:`body-wrapper`,children:[(0,A.jsx)(`div`,{className:`tv-noise`}),(0,A.jsxs)(`div`,{id:`loader-wrapper`,children:[(0,A.jsx)(`div`,{id:`loader`}),(0,A.jsx)(`div`,{id:`loader-text`,children:`INITIALIZING ECOSYSTEM...`})]}),(0,A.jsx)(`div`,{className:`desktop-container`,children:(0,A.jsxs)(`div`,{className:`desktop-main`,children:[(0,A.jsxs)(`section`,{className:`page-header animate-fadeIn`,children:[(0,A.jsx)(`h1`,{children:`Our Courses`}),(0,A.jsx)(`p`,{children:`Comprehensive programs designed by industry experts to transform you into a sought-after technology professional.`})]}),(0,A.jsxs)(`div`,{className:`courses-container`,children:[(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/secure-x.png`,alt:`Secure X`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Advanced`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`Secure X`}),(0,A.jsx)(`p`,{children:`Master advanced cybersecurity techniques and digital defense strategies. Learn to protect systems from sophisticated cyber threats and vulnerabilities.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/secure-x.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/ai.png`,alt:`AI Verse Web Labs`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Professional`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`AI Verse Web Labs`}),(0,A.jsx)(`p`,{children:`Build intelligent web applications using AI-driven development, machine learning integration, and automated engineering workflows.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/Ai.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/hunt-elite.png`,alt:`Hunt Elite`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Expert`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`Hunt Elite`}),(0,A.jsx)(`p`,{children:`Professional bug bounty hunting and exploit analysis. Learn advanced penetration testing and ethical hacking techniques.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/Bug.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/creative-craft.png`,alt:`Creative Craft`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Creative`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`Creative Craft`}),(0,A.jsx)(`p`,{children:`Master strategic visual communication design, branding, and UI/UX principles to create compelling digital experiences.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/Canva.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/py-desk.png`,alt:`Py Desk Systems`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Development`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`Py Desk Systems`}),(0,A.jsx)(`p`,{children:`Develop enterprise-grade desktop applications with Python. Master GUI frameworks and system-level programming.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/py.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/code-f.png`,alt:`Code Foundry`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Fundamental`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`Code Foundry`}),(0,A.jsx)(`p`,{children:`Professional programming language mastery. Deep dive into best practices and advanced software engineering concepts.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/Code.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/startup.png`,alt:`Startup Gene Labs`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Entrepreneurship`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`Startup Gene Labs`}),(0,A.jsx)(`p`,{children:`Venture creation and startup scaling. Build, fund, and grow tech startups from idea to successful enterprise.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/startup.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/cli.png`,alt:`CLI++ Systems`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Systems`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`CLI++ Systems`}),(0,A.jsx)(`p`,{children:`C++ command-line tool engineering for Linux. Build powerful system tools using advanced programming techniques.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/CLI.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]}),(0,A.jsxs)(`div`,{className:`course-card animate-fadeIn`,children:[(0,A.jsxs)(`div`,{className:`course-image`,children:[(0,A.jsx)(`img`,{src:`images/jai-bro/app.png`,alt:`API Man`,loading:`lazy`}),(0,A.jsx)(`div`,{className:`course-badge`,children:`Backend`})]}),(0,A.jsxs)(`div`,{className:`course-body`,children:[(0,A.jsx)(`h3`,{children:`API Man`}),(0,A.jsx)(`p`,{children:`Master API development and management. Build RESTful and GraphQL APIs with scalable architecture patterns.`}),(0,A.jsxs)(`button`,{onClick:()=>window.open(`/course-details/api.pdf`,`_blank`),className:`course-action`,children:[`View Details`,(0,A.jsx)(`i`,{className:`fas fa-arrow-right`})]})]})]})]})]})})]})]})})}var A,Mr=o((()=>{d(),A=w()}));function Nr(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{className:`dashboard-nav-container anim-1`,children:[(0,j.jsxs)(`div`,{className:`mobile-profile-header`,children:[(0,j.jsx)(`img`,{src:`{/* PHP code removed */}'`}),(0,j.jsxs)(`div`,{className:`mobile-profile-info`,children:[(0,j.jsx)(`div`,{className:`mobile-profile-name`}),(0,j.jsxs)(`div`,{className:`mobile-profile-stats`,children:[(0,j.jsx)(`i`,{className:`fas fa-coins`}),` `,` EC`]})]}),(0,j.jsx)(`a`,{href:`logout`,style:{color:`var(--destructive)`,fontSize:`1.1rem`},children:(0,j.jsx)(`i`,{className:`fas fa-power-off`})})]}),(0,j.jsx)(`div`,{className:`dashboard-nav-scroll`,children:(0,j.jsxs)(`div`,{className:`dashboard-nav-wrapper`,children:[(0,j.jsxs)(`a`,{href:`dashboard`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-th-large nav-icon`}),(0,j.jsx)(`span`,{children:`Dashboard`})]}),(0,j.jsxs)(`a`,{href:`lab`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-flask nav-icon`}),(0,j.jsx)(`span`,{children:`Laboratory`})]}),(0,j.jsxs)(`a`,{href:`owasp-lab`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-shield-halved nav-icon`}),(0,j.jsx)(`span`,{children:`OWASP Lab`})]}),(0,j.jsxs)(`a`,{href:`vulnerable-saas-app`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-box-open nav-icon`}),(0,j.jsx)(`span`,{children:`SaaS App`})]}),(0,j.jsxs)(`a`,{href:`tasks`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-tasks nav-icon`}),(0,j.jsx)(`span`,{children:`Tasks`})]}),(0,j.jsxs)(`a`,{href:`ourcourse`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-book nav-icon`}),(0,j.jsx)(`span`,{children:`Courses`})]}),(0,j.jsxs)(`a`,{href:`assignment`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-file-alt nav-icon`}),(0,j.jsx)(`span`,{children:`Projects`})]}),(0,j.jsxs)(`a`,{href:`leaderboard`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-medal nav-icon`}),(0,j.jsx)(`span`,{children:`Leaderboard`})]}),(0,j.jsxs)(`a`,{href:`teams`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-user-friends nav-icon`}),(0,j.jsx)(`span`,{children:`Teams`})]}),(0,j.jsxs)(`a`,{href:`tournament`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-trophy nav-icon`}),(0,j.jsx)(`span`,{children:`Tournament`})]}),(0,j.jsxs)(`a`,{href:`contactus`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-headset nav-icon`}),(0,j.jsx)(`span`,{children:`Support`})]}),(0,j.jsxs)(`a`,{href:`https://dragotool.shop/`,className:`nav-item ripple-container`,target:`_blank`,children:[(0,j.jsx)(`i`,{className:`fas fa-dragon nav-icon`}),(0,j.jsx)(`span`,{children:`Drago Tool`})]}),(0,j.jsxs)(`a`,{href:`eaglone_shop`,className:`nav-item {/* PHP code removed */} ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-store nav-icon`}),(0,j.jsx)(`span`,{children:`Shop`})]}),(0,j.jsxs)(`a`,{href:`https://ctf-page.vercel.app/`,className:`nav-item ripple-container`,target:`_blank`,children:[(0,j.jsx)(`i`,{className:`fas fa-flag nav-icon`}),(0,j.jsx)(`span`,{children:`CTF Page`})]}),(0,j.jsxs)(`a`,{href:`download`,className:`nav-item ripple-container`,children:[(0,j.jsx)(`i`,{className:`fas fa-laptop-code nav-icon`}),(0,j.jsx)(`span`,{children:`IDE`})]}),(0,j.jsxs)(`a`,{href:`logout`,className:`nav-item ripple-container`,style:{color:`var(--destructive)`},children:[(0,j.jsx)(`i`,{className:`fas fa-sign-out-alt nav-icon`}),(0,j.jsx)(`span`,{children:`Logout`})]})]})})]}),(0,j.jsxs)(`aside`,{className:`desktop-sidebar`,children:[(0,j.jsx)(`div`,{className:`card anim-1`,children:(0,j.jsxs)(`div`,{className:`profile-card`,children:[(0,j.jsx)(`div`,{className:`avatar-ring`,children:(0,j.jsx)(`img`,{src:`{/* PHP code removed */}'`})}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`div`,{className:`profile-name`}),(0,j.jsx)(`div`,{className:`profile-role`})]}),(0,j.jsxs)(`div`,{className:`coins-badge`,children:[(0,j.jsx)(`i`,{className:`fas fa-coins`}),(0,j.jsx)(`span`,{id:`coinDisplay`}),` EC`]})]})}),(0,j.jsx)(`div`,{className:`card anim-2`,children:(0,j.jsxs)(`div`,{style:{padding:`1rem 0.75rem`},children:[(0,j.jsx)(`div`,{className:`nav-label`,children:`Main Menu`}),(0,j.jsxs)(`div`,{className:`nav-section`,children:[(0,j.jsxs)(`a`,{href:`dashboard`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-th-large nav-icon`}),(0,j.jsx)(`span`,{children:`Dashboard`})]}),(0,j.jsxs)(`a`,{href:`lab`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-flask nav-icon`}),(0,j.jsx)(`span`,{children:`Laboratory`})]}),(0,j.jsxs)(`a`,{href:`owasp-lab`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-shield-halved nav-icon`}),(0,j.jsx)(`span`,{children:`OWASP Lab`})]}),(0,j.jsxs)(`a`,{href:`vulnerable-saas-app`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-box-open nav-icon`}),(0,j.jsx)(`span`,{children:`vulnerable Saas app`})]}),(0,j.jsxs)(`a`,{href:`tasks`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-tasks nav-icon`}),(0,j.jsx)(`span`,{children:`Tasks`})]}),(0,j.jsxs)(`a`,{href:`ourcourse`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-book nav-icon`}),(0,j.jsx)(`span`,{children:`Courses`})]}),(0,j.jsxs)(`a`,{href:`assignment`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-file-alt nav-icon`}),(0,j.jsx)(`span`,{children:`Projects`})]}),(0,j.jsxs)(`a`,{href:`leaderboard`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-medal nav-icon`}),(0,j.jsx)(`span`,{children:`Leaderboard`})]}),(0,j.jsxs)(`a`,{href:`teams`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-user-friends nav-icon`}),(0,j.jsx)(`span`,{children:`Teams`})]}),(0,j.jsxs)(`a`,{href:`tournament`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-trophy nav-icon`}),(0,j.jsx)(`span`,{children:`Tournament`})]})]}),(0,j.jsx)(`div`,{className:`nav-label`,style:{marginTop:`0.75rem`},children:`Tools & Support`}),(0,j.jsxs)(`div`,{className:`nav-section`,children:[(0,j.jsxs)(`a`,{href:`contactus`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-headset nav-icon`}),(0,j.jsx)(`span`,{children:`Support`})]}),(0,j.jsxs)(`a`,{href:`https://dragotool.shop/`,className:`nav-item`,target:`_blank`,children:[(0,j.jsx)(`i`,{className:`fas fa-dragon nav-icon`}),(0,j.jsx)(`span`,{children:`Drago Tool`})]}),(0,j.jsxs)(`a`,{href:`eaglone_shop`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-store nav-icon`}),(0,j.jsx)(`span`,{children:`Shop`})]}),(0,j.jsxs)(`a`,{href:`https://ctf-page.vercel.app/`,className:`nav-item`,target:`_blank`,children:[(0,j.jsx)(`i`,{className:`fas fa-flag nav-icon`}),(0,j.jsx)(`span`,{children:`CTF Page`})]}),(0,j.jsxs)(`a`,{href:`download`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-laptop-code nav-icon`}),(0,j.jsx)(`span`,{children:`IDE`})]})]}),(0,j.jsx)(`div`,{className:`nav-label`,style:{marginTop:`0.75rem`},children:`Account`}),(0,j.jsx)(`div`,{className:`nav-section`,children:(0,j.jsxs)(`a`,{href:`logout`,className:`nav-item`,children:[(0,j.jsx)(`i`,{className:`fas fa-sign-out-alt nav-icon`}),(0,j.jsx)(`span`,{children:`Logout`})]})})]})})]})]})}var j,Pr=o((()=>{d(),j=w()}));function Fr(){return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(`div`,{className:`html-wrapper`,children:[(0,M.jsxs)(`div`,{className:`head-wrapper`,children:[(0,M.jsx)(`meta`,{charSet:`UTF-8`}),(0,M.jsx)(`title`,{children:`Sign Up | PROWORLDZ`}),(0,M.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,M.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap`,rel:`stylesheet`}),(0,M.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
    /* ================= RESET ================= */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}

/* ================= THEME VARIABLES ================= */
:root{
  --bg-main:#000000;
  --bg-card:#080808;

  --primary: #ff2a2f;
  --accent: #ff2a2f;

  --text-main:#ffffff;
  --text-muted:#a0a0a0;

  --border:rgba(255,255,255,0.12);
  --shadow:0 20px 50px rgba(0,0,0,.6);

  --gradient:linear-gradient(135deg,#ff2a2f,#ff2a2f);
}

/* ================= BODY ================= */
body{
  background:
    radial-gradient(circle at 20% 20%, rgba(229,25,30,.08), transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(255,42,47,.08), transparent 45%),
    linear-gradient(180deg,#000000,#000000);
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  color:var(--text-main);
}

/* ================= CONTAINER ================= */
.auth-container{
  width:100%;
  max-width:520px;
}

/* ================= CARD ================= */
.auth-box{
  background:linear-gradient(180deg,rgba(8,8,8,.96),rgba(0,0,0,.98));
  padding:42px 40px;
  border-radius:26px;
  border:1px solid var(--border);
  box-shadow:var(--shadow);
  position:relative;
  overflow:hidden;
}

.auth-box::before{
  content:'';
  position:absolute;
  inset:0;
  background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.06),transparent 70%);
  animation:shine 4s infinite;
}

@keyframes shine{
  0%{transform:translateX(-100%)}
  100%{transform:translateX(100%)}
}

/* ================= TITLE ================= */
h2{
  text-align:center;
  font-size:28px;
  font-weight:700;
  margin-bottom:8px;
  background:var(--gradient);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  position:relative;
  z-index:1;
}

p{
  text-align:center;
  color:var(--text-muted);
  font-size:14px;
  margin-bottom:30px;
  position:relative;
  z-index:1;
}

/* ================= INPUT ================= */
.input-group{
  position:relative;
  margin-bottom:24px;
  z-index:1;
}

.input-group input{
  width:100%;
  padding:16px;
  background:rgba(255,255,255,.05);
  border:1px solid var(--border);
  border-radius:14px;
  color:#fff;
  font-size:15px;
  outline:none;
  transition:.3s;
}

.input-group input:focus{
  border-color:var(--primary);
  box-shadow:0 0 0 3px rgba(229,25,30,.25);
}

.input-group label{
  position:absolute;
  top:16px;
  left:16px;
  color:var(--text-muted);
  pointer-events:none;
  transition:.25s;
  background:transparent;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label{
  top:-9px;
  left:12px;
  font-size:12px;
  color:var(--primary);
  background:#080808;
  padding:0 8px;
}

/* ================= GENDER ================= */
.gender-group{
  display:flex;
  gap:14px;
  margin-bottom:26px;
  z-index:1;
}

.gender-option{
  flex:1;
  padding:14px;
  background:rgba(255,255,255,.05);
  border:1px solid var(--border);
  border-radius:14px;
  color:var(--text-muted);
  text-align:center;
  cursor:pointer;
  transition:.3s;
}

.gender-option:hover{
  border-color:var(--primary);
  color:#fff;
}

.gender-option.selected{
  background:rgba(229,25,30,.15);
  border-color:var(--primary);
  color:#fff;
  box-shadow:0 0 18px rgba(229,25,30,.35);
}

/* ================= BUTTON ================= */
button{
  width:100%;
  padding:16px;
  border:none;
  border-radius:16px;
  background:var(--gradient);
  color:#fff;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
  margin-top:10px;
  margin-bottom:22px;
  transition:.3s;
  z-index:1;
  position:relative;
}

button:hover{
  transform:translateY(-3px);
  box-shadow:0 15px 40px rgba(229,25,30,.45);
}

button:disabled{
  opacity:.6;
  cursor:not-allowed;
  transform:none;
}

/* ================= STATUS ================= */
.error{
  color:#ff2a2f;
  font-size:14px;
  margin-top:6px;
  display:none;
}

.success{
  color:#ff2a2f;
  font-size:14px;
  text-align:center;
  display:none;
}

.loading{
  text-align:center;
  color:var(--primary);
  margin:10px 0;
  display:none;
}

/* ================= SWITCH ================= */
.switch{
  display:block;
  text-align:center;
  font-size:14px;
  color:var(--text-muted);
  position:relative;
  z-index:1;
}

.switch a{
  color:var(--primary);
  font-weight:600;
  text-decoration:none;
}

.switch a:hover{
  text-decoration:underline;
}

/* ================= RESPONSIVE ================= */
@media(max-width:768px){
  .auth-box{padding:34px 30px}
  h2{font-size:24px}
  .gender-group{flex-direction:column}
}

@media(max-width:480px){
  .auth-box{padding:28px 22px;border-radius:20px}
  h2{font-size:22px}
  p{font-size:13px}
  button{padding:14px;font-size:15px}
}

@media(max-width:360px){
  .auth-box{padding:22px 18px}
  h2{font-size:20px}
}

    
    /* Responsive Design */
    @media (max-width: 768px) {
      .auth-container {
        max-width: 450px;
      }
      
      .auth-box {
        padding: 30px;
      }
      
      h2 {
        font-size: 24px;
      }
      
      .gender-group {
        flex-direction: column;
        gap: 10px;
      }
    }
    
    @media (max-width: 480px) {
      body {
        padding: 15px;
      }
      
      .auth-container {
        max-width: 100%;
      }
      
      .auth-box {
        padding: 25px 20px;
        border-radius: 15px;
      }
      
      h2 {
        font-size: 22px;
      }
      
      p {
        font-size: 13px;
      }
      
      .input-group input {
        padding: 14px;
        font-size: 15px;
      }
      
      button {
        padding: 14px;
        font-size: 15px;
      }
    }
    
    @media (max-width: 360px) {
      .auth-box {
        padding: 20px 15px;
      }
      
      h2 {
        font-size: 20px;
      }
      
      .input-group input {
        padding: 12px;
      }
      
      button {
        padding: 12px;
      }
    }
`}}),(0,M.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,M.jsx)(`div`,{className:`body-wrapper`,children:(0,M.jsx)(`div`,{className:`auth-container`,children:(0,M.jsxs)(`div`,{className:`auth-box`,children:[(0,M.jsx)(`h2`,{children:`Create Your Account`}),(0,M.jsx)(`p`,{children:`Join PROWORLDZ and start your tech journey`}),(0,M.jsxs)(`form`,{id:`signupForm`,children:[(0,M.jsxs)(`div`,{className:`input-group`,children:[(0,M.jsx)(`input`,{type:`text`,id:`student-name`,name:`student-name`,required:!0,placeholder:` `}),(0,M.jsx)(`label`,{htmlFor:`student-name`,children:`Full Name`}),(0,M.jsx)(`div`,{className:`error`,id:`nameError`,children:`Please enter your full name`})]}),(0,M.jsxs)(`div`,{className:`input-group`,children:[(0,M.jsx)(`input`,{type:`email`,id:`email`,name:`email`,required:!0,placeholder:` `}),(0,M.jsx)(`label`,{htmlFor:`email`,children:`Email Address`}),(0,M.jsx)(`div`,{className:`error`,id:`emailError`,children:`Please enter a valid email`})]}),(0,M.jsxs)(`div`,{className:`gender-group`,children:[(0,M.jsx)(`div`,{className:`gender-option`,"data-value":`male`,children:`Male`}),(0,M.jsx)(`div`,{className:`gender-option`,"data-value":`female`,children:`Female`}),(0,M.jsx)(`div`,{className:`gender-option`,"data-value":`other`,children:`Other`})]}),(0,M.jsx)(`input`,{type:`hidden`,id:`gender`,name:`gender`}),(0,M.jsxs)(`div`,{className:`input-group`,children:[(0,M.jsx)(`input`,{type:`tel`,id:`phone`,name:`phone`,required:!0,placeholder:` `}),(0,M.jsx)(`label`,{htmlFor:`phone`,children:`Mobile Number`}),(0,M.jsx)(`div`,{className:`error`,id:`phoneError`,children:`Please enter a valid phone number`})]}),(0,M.jsxs)(`div`,{className:`input-group`,children:[(0,M.jsx)(`input`,{type:`password`,id:`passw`,name:`passw`,required:!0,placeholder:` `}),(0,M.jsx)(`label`,{htmlFor:`passw`,children:`Password`}),(0,M.jsx)(`div`,{className:`error`,id:`passwError`,children:`Password must be at least 8 characters`})]}),(0,M.jsxs)(`div`,{className:`input-group`,children:[(0,M.jsx)(`input`,{type:`password`,id:`confirm-passw`,name:`confirm-passw`,required:!0,placeholder:` `}),(0,M.jsx)(`label`,{htmlFor:`confirm-passw`,children:`Confirm Password`}),(0,M.jsx)(`div`,{className:`error`,id:`confirmError`,children:`Passwords do not match`})]}),(0,M.jsx)(`div`,{className:`error`,id:`formError`}),(0,M.jsx)(`div`,{className:`success`,id:`formSuccess`}),(0,M.jsx)(`div`,{className:`loading`,id:`loading`,children:`Creating account...`}),(0,M.jsx)(`button`,{type:`submit`,id:`submitBtn`,children:`Create Account`}),(0,M.jsxs)(`span`,{className:`switch`,children:[`Already have an account?`,(0,M.jsx)(`a`,{href:`login`,children:`Login`})]})]})]})})})]})})}var M,Ir=o((()=>{d(),M=w()}));function Lr(){return(0,Rr.jsx)(Rr.Fragment,{children:(0,Rr.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Rr.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Rr.jsx)(`meta`,{charSet:`UTF-8`}),(0,Rr.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,Rr.jsx)(`title`,{children:`Vulnerable SaaS App | ProWorldz`}),(0,Rr.jsx)(`link`,{rel:`icon`,type:`image/png`,href:`image.png`}),(0,Rr.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,Rr.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`}),(0,Rr.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gap: 1.5rem;
            --sides: 1.5rem;
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --primary: #ff2a2f;
            --primary-light: #8183f4;
            --muted-foreground: #a0a0a0;
            --border: rgba(139, 12, 16, 0.1);
            --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background: var(--background);
            color: var(--foreground);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        body::before,
        body::after {
            content: "";
            position: fixed;
            border-radius: 999px;
            filter: blur(100px);
            opacity: 0.22;
            pointer-events: none;
            z-index: 0;
            animation: ambient-float 16s ease-in-out infinite alternate;
        }

        body::before {
            width: 360px;
            height: 360px;
            background: rgba(255, 42, 47, 0.4);
            top: -140px;
            right: -120px;
        }

        body::after {
            width: 330px;
            height: 330px;
            background: rgba(129, 131, 244, 0.4);
            left: -140px;
            bottom: -120px;
            animation-delay: 0.9s;
        }

        .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap);
            min-height: 100vh;
            padding: var(--sides);
            background: var(--background);
            position: relative;
            z-index: 1;
        }

        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            overflow-y: auto;
            max-height: calc(100vh - 3rem);
            padding-right: 0.5rem;
            position: relative;
        }

        .desktop-main::-webkit-scrollbar {
            width: 6px;
        }

        .desktop-main::-webkit-scrollbar-track {
            background: transparent;
        }

        .desktop-main::-webkit-scrollbar-thumb {
            background: rgba(160, 160, 160, 0.45);
            border-radius: 999px;
        }

        .page-header {
            border: 1px solid var(--border);
            border-radius: var(--radius);
            background: linear-gradient(145deg, rgba(8, 8, 8, 0.95) 0%, rgba(8, 8, 8, 0.75) 100%);
            padding: 1.75rem;
            position: relative;
            overflow: hidden;
            box-shadow: 0 14px 40px rgba(0, 0, 0, 0.38);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .page-header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--gradient-primary);
            opacity: 0.85;
        }

        .page-header::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
                radial-gradient(circle at 85% 18%, rgba(255, 42, 47, 0.14) 0%, transparent 42%),
                radial-gradient(circle at 15% 82%, rgba(129, 131, 244, 0.15) 0%, transparent 40%);
            pointer-events: none;
        }

        .page-header:hover {
            border-color: rgba(255, 42, 47, 0.28);
            box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
        }

        .page-header h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            z-index: 1;
            animation: heading-glow 3.2s ease-in-out infinite alternate;
        }

        .page-header p {
            color: var(--muted-foreground);
            line-height: 1.6;
            position: relative;
            z-index: 1;
        }

        .apps-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
            perspective: 1100px;
        }

        .app-card {
            border: 1px solid var(--border);
            border-radius: var(--radius);
            background: linear-gradient(145deg, rgba(8, 8, 8, 0.95) 0%, rgba(8, 8, 8, 0.75) 100%);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: relative;
            overflow: hidden;
            transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.34);
        }

        .app-card::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 2px;
            background: var(--gradient-primary);
            opacity: 0.82;
        }

        .app-card::after {
            content: "";
            position: absolute;
            top: -140%;
            left: -55%;
            width: 58%;
            height: 300%;
            background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.08) 45%, transparent 100%);
            transform: rotate(22deg);
            transition: transform 0.75s ease;
            pointer-events: none;
        }

        .app-card:hover {
            border-color: rgba(255, 42, 47, 0.3);
            box-shadow: 0 22px 46px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 42, 47, 0.13);
            transform: translateY(-4px);
        }

        .app-card:hover::after {
            transform: translateX(220px) rotate(22deg);
        }

        .app-title {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            text-shadow: 0 0 12px rgba(255, 42, 47, 0.18);
            position: relative;
            z-index: 1;
        }

        .app-subtitle {
            color: var(--muted-foreground);
            font-size: 0.9rem;
            line-height: 1.5;
            min-height: 2.6rem;
            position: relative;
            z-index: 1;
        }

        .download-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.55rem;
            width: fit-content;
            padding: 0.7rem 1.15rem;
            border-radius: 0.55rem;
            text-decoration: none;
            font-weight: 600;
            color: #fff;
            border: 1px solid rgba(255, 42, 47, 0.4);
            background: linear-gradient(135deg, rgba(255, 42, 47, 0.95) 0%, rgba(129, 131, 244, 0.95) 100%);
            transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
            background-size: 200% 200%;
            animation: gradient-flow 4.2s ease infinite;
            position: relative;
            z-index: 1;
        }

        .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 24px rgba(255, 42, 47, 0.26);
            filter: saturate(1.1);
        }

        .download-btn i {
            transition: transform 0.2s ease;
        }

        .download-btn:hover i {
            transform: translateY(1px);
        }

        .download-btn:focus-visible {
            outline: 2px solid rgba(129, 131, 244, 0.75);
            outline-offset: 2px;
        }

        .reveal-item {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(4px);
            transition: opacity 0.55s ease, transform 0.55s ease, filter 0.55s ease;
            transition-delay: var(--reveal-delay, 0s);
        }

        .reveal-item.is-visible {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
        }

        @keyframes ambient-float {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(14px, -12px, 0) scale(1.08); }
        }

        @keyframes gradient-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes heading-glow {
            0% { text-shadow: 0 0 0 rgba(255, 42, 47, 0); }
            100% { text-shadow: 0 0 16px rgba(255, 42, 47, 0.22); }
        }

        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation: none !important;
                transition: none !important;
            }

            .reveal-item {
                opacity: 1;
                transform: none;
                filter: none;
            }
        }

        @media (max-width: 1024px) {
            .desktop-container {
                grid-template-columns: 1fr;
            }

            .desktop-main {
                max-height: none;
                overflow: visible;
                padding-right: 0;
            }

            .apps-grid {
                grid-template-columns: 1fr;
            }
        }
    `}}),(0,Rr.jsx)(`link`,{rel:`stylesheet`,href:`app-theme-overrides.css?v=20260518`})]}),(0,Rr.jsx)(`div`,{className:`body-wrapper`,children:(0,Rr.jsx)(`div`,{className:`desktop-container`,children:(0,Rr.jsxs)(`main`,{className:`desktop-main`,children:[(0,Rr.jsxs)(`section`,{className:`page-header reveal-item`,children:[(0,Rr.jsx)(`h1`,{children:`Vulnerable SaaS App`}),(0,Rr.jsx)(`p`,{children:`Download the vulnerable training projects used in SecureX practical labs.`})]}),(0,Rr.jsx)(`section`,{className:`apps-grid`,children:(0,Rr.jsxs)(`article`,{className:`app-card reveal-item`,children:[(0,Rr.jsx)(`h2`,{className:`app-title`}),(0,Rr.jsx)(`p`,{className:`app-subtitle`}),(0,Rr.jsxs)(`a`,{className:`download-btn`,href:`{/* PHP code removed */}`,download:!0,children:[(0,Rr.jsx)(`i`,{className:`fas fa-download`}),`Download`]})]})})]})})})]})})}var Rr,zr=o((()=>{d(),Rr=w()}));function Br(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(`div`,{className:`html-wrapper`,children:[(0,N.jsxs)(`div`,{className:`head-wrapper`,children:[(0,N.jsx)(`meta`,{charSet:`UTF-8`}),(0,N.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,N.jsx)(`title`,{children:`C++ compiler - ProWorldz`}),(0,N.jsx)(`link`,{rel:`icon`,type:`image/png`,href:`../image.png`}),(0,N.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.googleapis.com`}),(0,N.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossorigin:!0}),(0,N.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,N.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`}),(0,N.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        *{margin:0;padding:0;box-sizing:border-box;border-color:rgba(229,231,235,0.3);outline-color:rgba(156,163,175,0.5);overscroll-behavior:none;}
        body{font-family:'Roboto Mono',monospace;background-color:#000000;color:#ffffff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:auto;}
        @font-face{font-family:"Rebels";src:url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");font-weight:normal;font-style:normal;font-display:swap;}
        :root{--radius:0.625rem;--background:#000000;--foreground:#ffffff;--card:#080808;--card-foreground:#ffffff;--popover:#080808;--popover-foreground:#ffffff;--primary: #e5191e;--primary-foreground:#ffffff;--secondary:#080808;--secondary-foreground:#ffffff;--muted:#080808;--muted-foreground:#a0a0a0;--accent:rgba(248,250,252,0.05);--accent-foreground:#ffffff;--border:rgba(255,255,255,0.1);--input:rgba(255,255,255,0.15);--ring:rgba(148,163,184,0.5);--success:#ff2a2f;--destructive:#e5191e;--warning:#8b0c10;--sidebar:#080808;--sidebar-foreground:#ffffff;--sidebar-primary:#e5191e;--sidebar-primary-foreground:#ffffff;--sidebar-accent:rgba(248,250,252,0.05);--sidebar-accent-foreground:#ffffff;--sidebar-border:rgba(255,255,255,0.1);--sidebar-ring:rgba(148,163,184,0.5);--gap:1.5rem;--sides:1.5rem;}
        .desktop-container{display:grid;grid-template-columns:1fr;gap:var(--gap);min-height:100vh;padding:var(--sides);background-color:var(--background);}
        .desktop-main{display:flex;flex-direction:column;gap:var(--gap);}
        .font-display{font-family:'Rebels','Roboto Mono',monospace;font-weight:700;letter-spacing:-0.02em;}
        .flex{display:flex;}.grid{display:grid;}.relative{position:relative;}.absolute{position:absolute;}.w-full{width:100%;}.h-full{height:100%;}
        .rounded-lg{border-radius:var(--radius);}.rounded-md{border-radius:calc(var(--radius)-2px);}.border{border-width:1px;}.border-2{border-width:2px;}
        .bg-card{background-color:var(--card);}.bg-accent{background-color:var(--accent);}.bg-primary{background-color:var(--primary);}.bg-secondary{background-color:var(--secondary);}
        .text-foreground{color:var(--foreground);}.text-primary{color:var(--primary);}.text-primary-foreground{color:var(--primary-foreground);}.text-muted-foreground{color:var(--muted-foreground);}
        .text-success{color:var(--success);}.text-destructive{color:var(--destructive);}
        .text-xs{font-size:0.75rem;line-height:1rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-base{font-size:1rem;line-height:1.5rem;}
        .text-lg{font-size:1.125rem;line-height:1.75rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}
        .text-3xl{font-size:1.875rem;line-height:2.25rem;}.font-medium{font-weight:500;}.font-semibold{font-weight:600;}.font-bold{font-weight:700;}
        .uppercase{text-transform:uppercase;}.text-center{text-align:center;}.cursor-pointer{cursor:pointer;}
        .transition-all{transition:all 0.3s ease;}.transition-colors{transition:background-color 0.3s ease,border-color 0.3s ease,color 0.3s ease;}
        .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr));}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
        .gap-2{gap:0.5rem;}.gap-3{gap:0.75rem;}.gap-4{gap:1rem;}.gap-6{gap:1.5rem;}.gap-8{gap:2rem;}.gap-gap{gap:var(--gap);}
        .p-3{padding:0.75rem;}.p-4{padding:1rem;}.p-6{padding:1.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}
        .py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}
        .py-6{padding-top:1.5rem;padding-bottom:1.5rem;}.pt-4{padding-top:1rem;}.pb-4{padding-bottom:1rem;}.pr-4{padding-right:1rem;}
        .mt-2{margin-top:0.5rem;}.mb-2{margin-bottom:0.5rem;}.mb-4{margin-bottom:1rem;}.mb-6{margin-bottom:1.5rem;}
        .space-y-2>*+*{margin-top:0.5rem;}.space-y-3>*+*{margin-top:0.75rem;}.space-y-4>*+*{margin-top:1rem;}
        .flex-1{flex:1 1 0%;}.flex-col{flex-direction:column;}.items-center{align-items:center;}.items-start{align-items:flex-start;}
        .justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.size-10{width:2.5rem;height:2.5rem;}
        .size-12{width:3rem;height:3rem;}.size-16{width:4rem;height:4rem;}
        .card{background-color:var(--card);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;}
        .badge{display:inline-flex;align-items:center;justify-content:center;border-radius:9999px;padding:0.25rem 0.75rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;border:1px solid transparent;}
        .badge-destructive{background-color:var(--destructive);color:white;border-color:var(--destructive);}
        .button{display:inline-flex;align-items:center;justify-content:center;border-radius:calc(var(--radius)-2px);font-weight:500;text-transform:uppercase;letter-spacing:0.05em;transition:all 0.2s;cursor:pointer;border:1px solid transparent;user-select:none;white-space:nowrap;}
        .button-default{background-color:var(--primary);color:var(--primary-foreground);}
        .button-default:hover:not(:disabled){background-color:color-mix(in srgb,var(--primary) 90%,black);transform:translateY(-2px);}
        .button-secondary{background-color:var(--secondary);color:var(--secondary-foreground);border-color:var(--border);}
        .button-secondary:hover:not(:disabled){background-color:color-mix(in srgb,var(--secondary) 90%,black);transform:translateY(-2px);}
        .button-ghost{background-color:transparent;color:currentColor;}
        .button-ghost:hover:not(:disabled){background-color:var(--accent);}
        .button-lg{height:3rem;padding:0 1.5rem;font-size:1rem;}.button-xl{height:3.5rem;padding:0 2rem;font-size:1rem;}
        @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes slideUp{from{transform:translateY(20px);opacity:0;}to{transform:translateY(0);opacity:1;}}
        @keyframes pulse{0%{opacity:1;}50%{opacity:0.5;}100%{opacity:1;}}@keyframes coinSpin{0%{transform:rotateY(0deg) scale(1);}50%{transform:rotateY(180deg) scale(1.2);}100%{transform:rotateY(360deg) scale(1);}}
        .animate-fadeIn{animation:fadeIn 0.3s ease-out;}.animate-slideUp{animation:slideUp 0.3s ease-out;}.animate-pulse{animation:pulse 2s infinite;}.animate-coin-spin{animation:coinSpin 1s ease-in-out;}
        ::-webkit-scrollbar{width:6px;height:6px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:var(--muted);border-radius:3px;}::-webkit-scrollbar-thumb:hover{background:var(--muted-foreground);}
        .coin-notification{position:fixed;top:20px;right:20px;z-index:1000;background:linear-gradient(135deg,#8b0c10,#8b0c10);color:#000;padding:1rem 1.5rem;border-radius:var(--radius);box-shadow:0 10px 25px rgba(245,158,11,0.3);display:flex;align-items:center;gap:0.75rem;transform:translateX(120%);transition:transform 0.3s ease;}
        .coin-notification.show{transform:translateX(0);}.coin-notification i{font-size:1.5rem;animation:coinSpin 2s infinite;}
        .coin-notification .coin-info{display:flex;flex-direction:column;}.coin-notification .coin-amount{font-weight:700;font-size:1.25rem;}.coin-notification .coin-message{font-size:0.875rem;opacity:0.8;}
        .coin-timer{position:fixed;bottom:20px;right:20px;z-index:999;background:rgba(8, 8, 8,0.9);border:1px solid var(--border);padding:0.75rem 1.25rem;border-radius:var(--radius);display:flex;align-items:center;gap:0.75rem;backdrop-filter:blur(10px);}
        .coin-timer .timer-label{font-size:0.875rem;color:var(--muted-foreground);}.coin-timer .timer-display{font-weight:700;color:var(--success);font-size:1.125rem;}.coin-timer .timer-icon{color:var(--warning);}
        .interpreter-header{background:linear-gradient(135deg,var(--card) 0%,rgba(8, 8, 8,0.9) 100%);border-bottom:1px solid var(--border);margin-bottom:2rem;position:relative;overflow:hidden;}
        .interpreter-header::before{content:'';position:absolute;top:0;right:0;width:300px;height:100%;background:radial-gradient(circle at center,rgba(99,102,241,0.1) 0%,transparent 70%);}
        .interpreter-hero{padding:2rem;position:relative;z-index:1;}.interpreter-hero h1{font-size:2.8rem;margin-bottom:0.5rem;background:linear-gradient(135deg,var(--primary) 0%,#e5191e 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-0.02em;}
        .interpreter-hero p{font-size:1.2rem;color:var(--muted-foreground);max-width:600px;line-height:1.6;}
        .environment-info{display:flex;gap:2rem;margin-top:1.5rem;flex-wrap:wrap;}
        .env-item{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:calc(var(--radius)-2px);font-size:0.875rem;}
        .env-item i{color:var(--primary);}.interpreter-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem;height:600px;margin-bottom:2rem;}
        @media (max-width:1024px){.interpreter-grid{grid-template-columns:1fr;height:auto;min-height:800px;}}
        .editor-section,.output-section{background:linear-gradient(135deg,var(--card) 0%,rgba(8, 8, 8,0.9) 100%);border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem;display:flex;flex-direction:column;transition:all 0.3s ease;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.3);}
        .editor-section::before,.output-section::before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(to right,var(--primary),#e5191e);}
        .editor-section:hover,.output-section:hover{transform:translateY(-2px);border-color:var(--primary);box-shadow:0 10px 40px rgba(99,102,241,0.3);}
        .section-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--border);}
        .section-header h3{font-size:1.3rem;font-weight:600;color:var(--foreground);display:flex;align-items:center;gap:0.75rem;}.section-header h3 i{color:var(--primary);font-size:1.2rem;}
        .status-indicator{display:flex;align-items:center;gap:0.75rem;font-size:0.875rem;color:var(--muted-foreground);}
        .status-dot{width:10px;height:10px;border-radius:50%;background:var(--success);}.status-dot.loading{background:var(--warning);animation:pulse 1.5s infinite;}.status-dot.error{background:var(--destructive);}
        .code-editor-container{flex:1;background:rgba(8, 8, 8,0.5);border:1px solid var(--border);border-radius:calc(var(--radius)-2px);overflow:hidden;position:relative;min-height:400px;}
        .code-editor-container textarea{width:100%;height:100%;min-height:380px;background:transparent;color:var(--foreground);border:none;outline:none;padding:1.25rem;font-family:'Roboto Mono',monospace;font-size:15px;line-height:1.6;resize:vertical;white-space:pre;overflow:auto;}

        .output-display,#output{flex:1;background:rgba(8, 8, 8,0.5);border:1px solid var(--border);border-radius:calc(var(--radius)-2px);padding:1.5rem;font-family:'Roboto Mono',monospace;font-size:15px;line-height:1.6;color:var(--foreground);white-space:pre-wrap;word-break:break-word;overflow-y:auto;}

        .output-success{color:var(--success);}.output-error{color:var(--destructive);}.output-info{color:var(--primary);}
        .controls-section{background:linear-gradient(135deg,var(--card) 0%,rgba(8, 8, 8,0.9) 100%);border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.3);}
        .controls-section::before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(to right,#e5191e,var(--primary));}
        .controls-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;}
        .shortcut-hint{margin-top:1.5rem;padding:1rem;background:rgba(99,102,241,0.1);border-left:4px solid var(--primary);border-radius:0 calc(var(--radius)-2px) calc(var(--radius)-2px) 0;font-size:0.9rem;color:var(--muted-foreground);display:flex;align-items:center;gap:0.5rem;}
        .shortcut-hint i{color:var(--primary);}.shortcut-hint kbd{background:var(--secondary);padding:0.25rem 0.75rem;border-radius:calc(var(--radius)-4px);font-family:'Roboto Mono',monospace;font-size:0.875rem;border:1px solid var(--border);color:var(--foreground);margin:0 0.25rem;}
        .editor-stats{display:flex;align-items:center;gap:1.5rem;margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);font-size:0.875rem;color:var(--muted-foreground);}
        .stat-item{display:flex;align-items:center;gap:0.5rem;}@media (max-width:768px){.desktop-container{padding:1rem;}.interpreter-hero h1{font-size:2.2rem;}.interpreter-hero p{font-size:1rem;}.interpreter-grid{height:auto;min-height:700px;}
        .editor-section,.output-section{padding:1.25rem;}.controls-grid{grid-template-columns:1fr;}.environment-info{gap:1rem;}.env-item{padding:0.5rem 0.75rem;font-size:0.8rem;}
        .coin-notification{left:20px;right:20px;width:calc(100%-40px);}}
    `}})]}),(0,N.jsx)(`div`,{className:`body-wrapper`,children:(0,N.jsx)(`div`,{className:`desktop-container`,children:(0,N.jsxs)(`div`,{className:`desktop-main`,children:[(0,N.jsxs)(`div`,{className:`card interpreter-header`,children:[(0,N.jsxs)(`div`,{className:`interpreter-hero`,children:[(0,N.jsx)(`h1`,{className:`font-display`,children:`C++ compiler`}),(0,N.jsx)(`a`,{href:`../langs`,style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`,padding:`0.6rem 1.2rem`,marginTop:`1rem`,background:`linear-gradient(135deg,#e5191e,#e5191e)`,color:`#ffffff`,textDecoration:`none`,fontSize:`0.9rem`,fontWeight:`600`,letterSpacing:`0.05em`,borderRadius:`0.5rem`,border:`1px solid rgba(255,255,255,0.15)`,boxShadow:`0 6px 18px rgba(99,102,241,0.35)`,transition:`all 0.25s ease`},onmouseover:`this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 30px rgba(99,102,241,0.5)'`,onmouseout:`this.style.transform='translateY(0)';this.style.boxShadow='0 6px 18px rgba(99,102,241,0.35)'`,children:`← Back to Lab`})]}),(0,N.jsx)(`div`,{style:{padding:`0.5rem`},id:`shower-pending-assign-banner`,children:(0,N.jsx)(`h4`,{id:`pending-assign-banner`})})]}),(0,N.jsxs)(`div`,{className:`interpreter-grid`,children:[(0,N.jsxs)(`div`,{className:`editor-section`,children:[(0,N.jsxs)(`div`,{className:`section-header`,children:[(0,N.jsxs)(`h3`,{children:[(0,N.jsx)(`i`,{className:`fas fa-code`}),` Code Editor`]}),(0,N.jsxs)(`div`,{className:`status-indicator`,children:[(0,N.jsx)(`div`,{className:`status-dot`,id:`statusDot`}),(0,N.jsx)(`span`,{id:`statusText`,children:`Ready`})]})]}),(0,N.jsx)(`div`,{className:`code-editor-container`,children:(0,N.jsx)(`textarea`,{id:`code`,placeholder:``,defaultValue:``})}),(0,N.jsxs)(`div`,{className:`shortcut-hint`,children:[(0,N.jsx)(`i`,{className:`fas fa-keyboard`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Keyboard Shortcuts:`}),` `,(0,N.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,N.jsx)(`kbd`,{children:`Enter`}),` Run Code • `,(0,N.jsx)(`kbd`,{children:`Tab`}),` Indent • `,(0,N.jsx)(`kbd`,{children:`Shift`}),` + `,(0,N.jsx)(`kbd`,{children:`Tab`}),` Outdent`]})]})]}),(0,N.jsxs)(`div`,{className:`output-section`,children:[(0,N.jsxs)(`div`,{className:`section-header`,children:[(0,N.jsxs)(`h3`,{children:[(0,N.jsx)(`i`,{className:`fas fa-terminal`}),` Output Console`]}),(0,N.jsx)(`div`,{className:`status-indicator`,children:(0,N.jsx)(`span`,{id:`executionTime`,children:`Ready`})})]}),(0,N.jsx)(`div`,{id:`output`,className:`output-display`,children:`Ready to execute code...`})]})]}),(0,N.jsx)(`div`,{className:`controls-section`,children:(0,N.jsxs)(`div`,{className:`controls-grid`,children:[(0,N.jsxs)(`button`,{onClick:`runPHP()`,className:`button button-lg button-default`,id:`runBtn`,children:[(0,N.jsx)(`i`,{className:`fas fa-play`}),` Execute Code`]}),(0,N.jsxs)(`button`,{onClick:`clearCode()`,className:`button button-lg button-secondary`,children:[(0,N.jsx)(`i`,{className:`fas fa-eraser`}),` Clear Editor`]}),(0,N.jsxs)(`button`,{onClick:`saveToFile()`,className:`button button-lg button-ghost`,children:[(0,N.jsx)(`i`,{className:`fas fa-download`}),` Save Script`]})]})})]})})})]})})}var N,Vr=o((()=>{d(),N=w()}));function Hr(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(`div`,{className:`html-wrapper`,children:[(0,P.jsxs)(`div`,{className:`head-wrapper`,children:[(0,P.jsx)(`meta`,{charSet:`UTF-8`}),(0,P.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,P.jsx)(`title`,{children:`Python Interpreter - ProWorldz`}),(0,P.jsx)(`link`,{rel:`icon`,type:`image/png`,href:`../image.png`}),(0,P.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.googleapis.com`}),(0,P.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossorigin:!0}),(0,P.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,P.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`}),(0,P.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
            overscroll-behavior: none;
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #000000;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: auto;
        }

        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        :root {
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --card-foreground: #ffffff;
            --popover: #080808;
            --popover-foreground: #ffffff;
            --primary: #e5191e;
            --primary-foreground: #ffffff;
            --secondary: #080808;
            --secondary-foreground: #ffffff;
            --muted: #080808;
            --muted-foreground: #a0a0a0;
            --accent: rgba(248, 250, 252, 0.05);
            --accent-foreground: #ffffff;
            --border: rgba(139, 12, 16, 0.1);
            --input: rgba(139, 12, 16, 0.15);
            --ring: rgba(148, 163, 184, 0.5);
            --success: #ff2a2f;
            --destructive: #e5191e;
            --warning: #8b0c10;
            --sidebar: #080808;
            --sidebar-foreground: #ffffff;
            --sidebar-primary: #e5191e;
            --sidebar-primary-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-accent-foreground: #ffffff;
            --sidebar-border: rgba(139, 12, 16, 0.1);
            --sidebar-ring: rgba(148, 163, 184, 0.5);
            --gap: 1.5rem;
            --sides: 1.5rem;
        }

        .desktop-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--gap);
            min-height: 100vh;
            padding: var(--sides);
            background-color: var(--background);
        }

        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        .font-display {
            font-family: 'Rebels', 'Roboto Mono', monospace;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .flex {
            display: flex;
        }

        .grid {
            display: grid;
        }

        .relative {
            position: relative;
        }

        .absolute {
            position: absolute;
        }

        .w-full {
            width: 100%;
        }

        .h-full {
            height: 100%;
        }

        .rounded-lg {
            border-radius: var(--radius);
        }

        .rounded-md {
            border-radius: calc(var(--radius) - 2px);
        }

        .border {
            border-width: 1px;
        }

        .border-2 {
            border-width: 2px;
        }

        .bg-card {
            background-color: var(--card);
        }

        .bg-accent {
            background-color: var(--accent);
        }

        .bg-primary {
            background-color: var(--primary);
        }

        .bg-secondary {
            background-color: var(--secondary);
        }

        .text-foreground {
            color: var(--foreground);
        }

        .text-primary {
            color: var(--primary);
        }

        .text-primary-foreground {
            color: var(--primary-foreground);
        }

        .text-muted-foreground {
            color: var(--muted-foreground);
        }

        .text-success {
            color: var(--success);
        }

        .text-destructive {
            color: var(--destructive);
        }

        .text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
        }

        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .text-base {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }

        .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        .font-medium {
            font-weight: 500;
        }

        .font-semibold {
            font-weight: 600;
        }

        .font-bold {
            font-weight: 700;
        }

        .uppercase {
            text-transform: uppercase;
        }

        .text-center {
            text-align: center;
        }

        .cursor-pointer {
            cursor: pointer;
        }

        .transition-all {
            transition: all 0.3s ease;
        }

        .transition-colors {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }

        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .gap-2 {
            gap: 0.5rem;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .gap-4 {
            gap: 1rem;
        }

        .gap-6 {
            gap: 1.5rem;
        }

        .gap-8 {
            gap: 2rem;
        }

        .gap-gap {
            gap: var(--gap);
        }

        .p-3 {
            padding: 0.75rem;
        }

        .p-4 {
            padding: 1rem;
        }

        .p-6 {
            padding: 1.5rem;
        }

        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .pt-4 {
            padding-top: 1rem;
        }

        .pb-4 {
            padding-bottom: 1rem;
        }

        .pr-4 {
            padding-right: 1rem;
        }

        .mt-2 {
            margin-top: 0.5rem;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }

        .mb-6 {
            margin-bottom: 1.5rem;
        }

        .space-y-2 > * + * {
            margin-top: 0.5rem;
        }

        .space-y-3 > * + * {
            margin-top: 0.75rem;
        }

        .space-y-4 > * + * {
            margin-top: 1rem;
        }

        .flex-1 {
            flex: 1 1 0%;
        }

        .flex-col {
            flex-direction: column;
        }

        .items-center {
            align-items: center;
        }

        .items-start {
            align-items: flex-start;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-between {
            justify-content: space-between;
        }

        .size-10 {
            width: 2.5rem;
            height: 2.5rem;
        }

        .size-12 {
            width: 3rem;
            height: 3rem;
        }

        .size-16 {
            width: 4rem;
            height: 4rem;
        }

        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border: 1px solid transparent;
        }

        .badge-destructive {
            background-color: var(--destructive);
            color: white;
            border-color: var(--destructive);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid transparent;
            user-select: none;
            white-space: nowrap;
        }

        .button-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
        }

        .button-default:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--primary) 90%, black);
            transform: translateY(-2px);
        }

        .button-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .button-secondary:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--secondary) 90%, black);
            transform: translateY(-2px);
        }

        .button-ghost {
            background-color: transparent;
            color: currentColor;
        }

        .button-ghost:hover:not(:disabled) {
            background-color: var(--accent);
        }

        .button-lg {
            height: 3rem;
            padding: 0 1.5rem;
            font-size: 1rem;
        }

        .button-xl {
            height: 3.5rem;
            padding: 0 2rem;
            font-size: 1rem;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes pulse {
            0% {
                opacity: 1;
            }
            50% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }

        @keyframes coinSpin {
            0% {
                transform: rotateY(0deg) scale(1);
            }
            50% {
                transform: rotateY(180deg) scale(1.2);
            }
            100% {
                transform: rotateY(360deg) scale(1);
            }
        }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
            animation: slideUp 0.3s ease-out;
        }

        .animate-pulse {
            animation: pulse 2s infinite;
        }

        .animate-coin-spin {
            animation: coinSpin 1s ease-in-out;
        }

        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--muted);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--muted-foreground);
        }

        .coin-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: linear-gradient(135deg, #8b0c10, #8b0c10);
            color: #000;
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
            box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            transform: translateX(120%);
            transition: transform 0.3s ease;
        }

        .coin-notification.show {
            transform: translateX(0);
        }

        .coin-notification i {
            font-size: 1.5rem;
            animation: coinSpin 2s infinite;
        }

        .coin-notification .coin-info {
            display: flex;
            flex-direction: column;
        }

        .coin-notification .coin-amount {
            font-weight: 700;
            font-size: 1.25rem;
        }

        .coin-notification .coin-message {
            font-size: 0.875rem;
            opacity: 0.8;
        }

        .coin-timer {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999;
            background: rgba(8, 8, 8, 0.9);
            border: 1px solid var(--border);
            padding: 0.75rem 1.25rem;
            border-radius: var(--radius);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            backdrop-filter: blur(10px);
        }

        .coin-timer .timer-label {
            font-size: 0.875rem;
            color: var(--muted-foreground);
        }

        .coin-timer .timer-display {
            font-weight: 700;
            color: var(--success);
            font-size: 1.125rem;
        }

        .coin-timer .timer-icon {
            color: var(--warning);
        }

        .interpreter-header {
            background: linear-gradient(135deg, var(--card) 0%, rgba(8, 8, 8, 0.9) 100%);
            border-bottom: 1px solid var(--border);
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;
        }

        .interpreter-header::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 100%;
            background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
        }

        .interpreter-hero {
            padding: 2rem;
            position: relative;
            z-index: 1;
        }

        .interpreter-hero h1 {
            font-size: 2.8rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--primary) 0%, #e5191e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -0.02em;
        }

        .interpreter-hero p {
            font-size: 1.2rem;
            color: var(--muted-foreground);
            max-width: 600px;
            line-height: 1.6;
        }

        .environment-info {
            display: flex;
            gap: 2rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
        }

        .env-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: calc(var(--radius) - 2px);
            font-size: 0.875rem;
        }

        .env-item i {
            color: var(--primary);
        }

        .interpreter-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            height: 600px;
            margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
            .interpreter-grid {
                grid-template-columns: 1fr;
                height: auto;
                min-height: 800px;
            }
        }

        .editor-section,
        .output-section {
            background: linear-gradient(135deg, var(--card) 0%, rgba(8, 8, 8, 0.9) 100%);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .editor-section::before,
        .output-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, var(--primary), #e5191e);
        }

        .editor-section:hover,
        .output-section:hover {
            transform: translateY(-2px);
            border-color: var(--primary);
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
        }

        .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
        }

        .section-header h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--foreground);
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .section-header h3 i {
            color: var(--primary);
            font-size: 1.2rem;
        }

        .status-indicator {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.875rem;
            color: var(--muted-foreground);
        }

        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--success);
        }

        .status-dot.loading {
            background: var(--warning);
            animation: pulse 1.5s infinite;
        }

        .status-dot.error {
            background: var(--destructive);
        }

        .code-editor-container {
            flex: 1;
            background: rgba(8, 8, 8, 0.5);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            overflow: hidden;
            position: relative;
            min-height: 400px;
        }
        .code-editor-container textarea {
            width: 100%;
            height: 100%;
            min-height: 380px;
            background: transparent;
            color: var(--foreground);
            border: none;
            outline: none;
            padding: 1.25rem;
            font-family: 'Roboto Mono', monospace;
            font-size: 15px;
            line-height: 1.6;
            resize: vertical;
            white-space: pre;
            overflow: auto;
        }
            color: var(--foreground);
            background: transparent;
            border: none;
            outline: none;
            resize: none;
            white-space: pre;
            tab-size: 4;
            caret-color: var(--primary);
        }


            color: var(--muted-foreground);
            opacity: 0.6;
        }


            width: 8px;
        }


            background: transparent;
        }


            background: var(--muted);
            border-radius: 4px;
        }


            background: var(--muted-foreground);
        }

        .output-display,

            flex: 1;
            background: rgba(8, 8, 8, 0.5);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            padding: 1.5rem;
            font-family: 'Roboto Mono', monospace;
            font-size: 15px;
            line-height: 1.6;
            color: var(--foreground);
            white-space: pre-wrap;
            word-break: break-word;
            overflow-y: auto;
        }


        .output-display::-webkit-scrollbar {
            width: 8px;
        }


        .output-display::-webkit-scrollbar-track {
            background: transparent;
        }


        .output-display::-webkit-scrollbar-thumb {
            background: var(--muted);
            border-radius: 4px;
        }


        .output-display::-webkit-scrollbar-thumb:hover {
            background: var(--muted-foreground);
        }

        .output-success {
            color: var(--success);
        }

        .output-error {
            color: var(--destructive);
        }

        .output-info {
            color: var(--primary);
        }

        .controls-section {
            background: linear-gradient(135deg, var(--card) 0%, rgba(8, 8, 8, 0.9) 100%);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .controls-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, #e5191e, var(--primary));
        }

        .controls-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .shortcut-hint {
            margin-top: 1.5rem;
            padding: 1rem;
            background: rgba(99, 102, 241, 0.1);
            border-left: 4px solid var(--primary);
            border-radius: 0 calc(var(--radius) - 2px) calc(var(--radius) - 2px) 0;
            font-size: 0.9rem;
            color: var(--muted-foreground);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .shortcut-hint i {
            color: var(--primary);
        }

        .shortcut-hint kbd {
            background: var(--secondary);
            padding: 0.25rem 0.75rem;
            border-radius: calc(var(--radius) - 4px);
            font-family: 'Roboto Mono', monospace;
            font-size: 0.875rem;
            border: 1px solid var(--border);
            color: var(--foreground);
            margin: 0 0.25rem;
        }

        .editor-stats {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border);
            font-size: 0.875rem;
            color: var(--muted-foreground);
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        @media (max-width: 768px) {
            .desktop-container {
                padding: 1rem;
            }

            .interpreter-hero h1 {
                font-size: 2.2rem;
            }

            .interpreter-hero p {
                font-size: 1rem;
            }

            .interpreter-grid {
                height: auto;
                min-height: 700px;
            }

            .editor-section,
            .output-section {
                padding: 1.25rem;
            }

            .controls-grid {
                grid-template-columns: 1fr;
            }

            .environment-info {
                gap: 1rem;
            }

            .env-item {
                padding: 0.5rem 0.75rem;
                font-size: 0.8rem;
            }

            .coin-notification {
                left: 20px;
                right: 20px;
                width: calc(100% - 40px);
            }
        }
    `}})]}),(0,P.jsx)(`div`,{className:`body-wrapper`,children:(0,P.jsx)(`div`,{className:`desktop-container`,children:(0,P.jsxs)(`div`,{className:`desktop-main`,children:[(0,P.jsxs)(`div`,{className:`card interpreter-header`,children:[(0,P.jsxs)(`div`,{className:`interpreter-hero`,children:[(0,P.jsx)(`h1`,{className:`font-display`,children:`Python Interpreter`}),(0,P.jsx)(`a`,{href:`../langs`,style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`,padding:`0.6rem 1.2rem`,marginTop:`1rem`,background:`linear-gradient(135deg,#e5191e,#e5191e)`,color:`#ffffff`,textDecoration:`none`,fontSize:`0.9rem`,fontWeight:`600`,letterSpacing:`0.05em`,borderRadius:`0.5rem`,border:`1px solid rgba(255,255,255,0.15)`,boxShadow:`0 6px 18px rgba(99,102,241,0.35)`,transition:`all 0.25s ease`},onmouseover:`this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 30px rgba(99,102,241,0.5)'`,onmouseout:`this.style.transform='translateY(0)';this.style.boxShadow='0 6px 18px rgba(99,102,241,0.35)'`,children:`← Back to Lab`})]}),(0,P.jsx)(`div`,{style:{padding:`0.5rem`},id:`shower-pending-assign-banner`,children:(0,P.jsx)(`h4`,{id:`pending-assign-banner`})})]}),(0,P.jsxs)(`div`,{className:`interpreter-grid`,children:[(0,P.jsxs)(`div`,{className:`editor-section`,children:[(0,P.jsxs)(`div`,{className:`section-header`,children:[(0,P.jsxs)(`h3`,{children:[(0,P.jsx)(`i`,{className:`fas fa-code`}),` Code Editor`]}),(0,P.jsxs)(`div`,{className:`status-indicator`,children:[(0,P.jsx)(`div`,{className:`status-dot`,id:`statusDot`}),(0,P.jsx)(`span`,{id:`statusText`,children:`Initializing...`})]})]}),(0,P.jsx)(`div`,{className:`code-editor-container`,children:(0,P.jsx)(`textarea`,{id:`code`,placeholder:`# Welcome to ProWorldz Python Interpreter...`,children:`print("Welcome to ProWorldz Python Interpreter")`})}),(0,P.jsxs)(`div`,{className:`shortcut-hint`,children:[(0,P.jsx)(`i`,{className:`fas fa-keyboard`}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`strong`,{children:`Keyboard Shortcuts:`}),(0,P.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,P.jsx)(`kbd`,{children:`Enter`}),` Run Code •`,(0,P.jsx)(`kbd`,{children:`Tab`}),` Indent •`,(0,P.jsx)(`kbd`,{children:`Shift`}),` + `,(0,P.jsx)(`kbd`,{children:`Tab`}),` Outdent`]})]})]}),(0,P.jsxs)(`div`,{className:`output-section`,children:[(0,P.jsxs)(`div`,{className:`section-header`,children:[(0,P.jsxs)(`h3`,{children:[(0,P.jsx)(`i`,{className:`fas fa-terminal`}),` Output Console`]}),(0,P.jsx)(`div`,{className:`status-indicator`,children:(0,P.jsx)(`span`,{id:`executionTime`,children:`Ready`})})]}),(0,P.jsx)(`div`,{id:`output`,className:`output-display`,children:`Ready to execute code...`})]})]}),(0,P.jsx)(`div`,{className:`controls-section`,children:(0,P.jsxs)(`div`,{className:`controls-grid`,children:[(0,P.jsxs)(`button`,{onClick:`runPython()`,className:`button button-lg button-default`,id:`runBtn`,children:[(0,P.jsx)(`i`,{className:`fas fa-play`}),` Execute Code`]}),(0,P.jsxs)(`button`,{onClick:`clearCode()`,className:`button button-lg button-secondary`,children:[(0,P.jsx)(`i`,{className:`fas fa-eraser`}),` Clear Editor`]}),(0,P.jsxs)(`button`,{onClick:`resetInterpreter()`,className:`button button-lg button-ghost`,children:[(0,P.jsx)(`i`,{className:`fas fa-redo`}),` Reset Environment`]}),(0,P.jsxs)(`button`,{onClick:`saveToFile()`,className:`button button-lg button-ghost`,children:[(0,P.jsx)(`i`,{className:`fas fa-download`}),` Save Script`]})]})})]})})})]})})}var P,Ur=o((()=>{d(),P=w()}));function Wr(){return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(`div`,{className:`html-wrapper`,children:[(0,F.jsxs)(`div`,{className:`head-wrapper`,children:[(0,F.jsx)(`meta`,{charSet:`UTF-8`}),(0,F.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,F.jsx)(`title`,{children:`Programming Labs | ProWorldz`}),(0,F.jsx)(`link`,{rel:`icon`,type:`image/png`,href:`../image.png`}),(0,F.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.googleapis.com`}),(0,F.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossorigin:!0}),(0,F.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,F.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`}),(0,F.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
            overscroll-behavior: none;
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #000000;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-width: 1280px;
            overflow-x: auto;
        }

        
        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        
        :root {
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --card-foreground: #ffffff;
            --popover: #080808;
            --popover-foreground: #ffffff;
            --primary: #e5191e;
            --primary-foreground: #ffffff;
            --secondary: #080808;
            --secondary-foreground: #ffffff;
            --muted: #080808;
            --muted-foreground: #a0a0a0;
            --accent: rgba(248, 250, 252, 0.05);
            --accent-foreground: #ffffff;
            --border: rgba(139, 12, 16, 0.1);
            --input: rgba(139, 12, 16, 0.15);
            --ring: rgba(148, 163, 184, 0.5);
            
            --success: #ff2a2f;
            --destructive: #e5191e;
            --warning: #8b0c10;
            
            --sidebar: #080808;
            --sidebar-foreground: #ffffff;
            --sidebar-primary: #e5191e;
            --sidebar-primary-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-accent-foreground: #ffffff;
            --sidebar-border: rgba(139, 12, 16, 0.1);
            --sidebar-ring: rgba(148, 163, 184, 0.5);
            
            --gap: 1.5rem;
            --sides: 1.5rem;
            --header-mobile: 3.8rem;
        }

        
        .desktop-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--gap);
            min-height: 100vh;
            padding: var(--sides);
            background-color: var(--background);
        }

        
        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        
        .font-display {
            font-family: 'Rebels', 'Roboto Mono', monospace;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        
        .flex {
            display: flex;
        }

        .grid {
            display: grid;
        }

        .relative {
            position: relative;
        }

        .absolute {
            position: absolute;
        }

        .w-full {
            width: 100%;
        }

        .h-full {
            height: 100%;
        }

        .rounded-lg {
            border-radius: var(--radius);
        }

        .rounded-md {
            border-radius: calc(var(--radius) - 2px);
        }

        .border {
            border-width: 1px;
        }

        .border-2 {
            border-width: 2px;
        }

        .bg-card {
            background-color: var(--card);
        }

        .bg-accent {
            background-color: var(--accent);
        }

        .bg-primary {
            background-color: var(--primary);
        }

        .bg-secondary {
            background-color: var(--secondary);
        }

        .text-foreground {
            color: var(--foreground);
        }

        .text-primary {
            color: var(--primary);
        }

        .text-primary-foreground {
            color: var(--primary-foreground);
        }

        .text-muted-foreground {
            color: var(--muted-foreground);
        }

        .text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
        }

        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .text-base {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }

        .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        .font-medium {
            font-weight: 500;
        }

        .font-semibold {
            font-weight: 600;
        }

        .font-bold {
            font-weight: 700;
        }

        .uppercase {
            text-transform: uppercase;
        }

        .text-center {
            text-align: center;
        }

        .cursor-pointer {
            cursor: pointer;
        }

        .transition-all {
            transition: all 0.3s ease;
        }

        .transition-colors {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        
        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }

        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .gap-2 {
            gap: 0.5rem;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .gap-4 {
            gap: 1rem;
        }

        .gap-6 {
            gap: 1.5rem;
        }

        .gap-8 {
            gap: 2rem;
        }

        .gap-gap {
            gap: var(--gap);
        }

        .p-3 {
            padding: 0.75rem;
        }

        .p-4 {
            padding: 1rem;
        }

        .p-6 {
            padding: 1.5rem;
        }

        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .pt-4 {
            padding-top: 1rem;
        }

        .pb-4 {
            padding-bottom: 1rem;
        }

        .pr-4 {
            padding-right: 1rem;
        }

        .mt-2 {
            margin-top: 0.5rem;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }

        .mb-6 {
            margin-bottom: 1.5rem;
        }

        .space-y-2 > * + * {
            margin-top: 0.5rem;
        }

        .space-y-3 > * + * {
            margin-top: 0.75rem;
        }

        .space-y-4 > * + * {
            margin-top: 1rem;
        }

        .flex-1 {
            flex: 1 1 0%;
        }

        .flex-col {
            flex-direction: column;
        }

        .items-center {
            align-items: center;
        }

        .items-start {
            align-items: flex-start;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-between {
            justify-content: space-between;
        }

        .size-10 {
            width: 2.5rem;
            height: 2.5rem;
        }

        .size-12 {
            width: 3rem;
            height: 3rem;
        }

        .size-16 {
            width: 4rem;
            height: 4rem;
        }

        
        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border: 1px solid transparent;
        }

        .badge-destructive {
            background-color: var(--destructive);
            color: white;
            border-color: var(--destructive);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid transparent;
            user-select: none;
            white-space: nowrap;
        }

        .button-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
        }

        .button-default:hover {
            background-color: color-mix(in srgb, var(--primary) 90%, black);
        }

        .button-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .button-secondary:hover {
            background-color: color-mix(in srgb, var(--secondary) 90%, black);
        }

        .button-ghost {
            background-color: transparent;
            color: currentColor;
        }

        .button-ghost:hover {
            background-color: var(--accent);
        }

        .button-sm {
            height: 2rem;
            padding: 0 0.75rem;
            font-size: 0.875rem;
        }

        .button-lg {
            height: 3rem;
            padding: 0 1.5rem;
            font-size: 1rem;
        }

        .button-xl {
            height: 3.5rem;
            padding: 0 2rem;
            font-size: 1rem;
        }

        
        .nav-section {
            margin-bottom: 1.5rem;
        }

        .nav-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            margin-bottom: 0.5rem;
        }

        .nav-title span {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--muted-foreground);
        }

        .nav-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: calc(var(--radius) - 2px);
            text-decoration: none;
            color: var(--sidebar-foreground);
            transition: all 0.2s;
            margin-bottom: 0.25rem;
        }

        .nav-item:hover {
            background-color: var(--sidebar-accent);
        }

        .nav-item.active {
            background-color: var(--sidebar-primary);
            color: var(--sidebar-primary-foreground);
        }

        .nav-icon {
            width: 1.25rem;
            height: 1.25rem;
            flex-shrink: 0;
        }

        .nav-label {
            font-size: 0.875rem;
            font-weight: 500;
            text-transform: uppercase;
        }

        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
            animation: slideUp 0.3s ease-out;
        }

        
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--muted);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--muted-foreground);
        }

        
        .lab-header {
            background: linear-gradient(135deg, var(--card) 0%, rgba(8, 8, 8, 0.9) 100%);
            border-bottom: 1px solid var(--border);
            margin-bottom: 2rem;
        }

        .lab-hero {
            padding: 3rem 2rem;
        }

        .lab-hero h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--primary) 0%, #e5191e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .lab-hero p {
            font-size: 1.1rem;
            color: var(--muted-foreground);
        }

        .lab-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin: 2rem 0;
        }

        @media (max-width: 1024px) {
            .lab-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .lab-grid {
                grid-template-columns: 1fr;
            }
        }

        .lab-card {
            background: linear-gradient(135deg, var(--card) 0%, rgba(8, 8, 8, 0.8) 100%);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .lab-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, var(--primary), #e5191e);
        }

        .lab-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
        }

        .lab-card-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--primary) 0%, #e5191e 100%);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 2.5rem;
            color: white;
        }

        .lab-card-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--foreground);
            font-family: 'Rebels', monospace;
        }

        .lab-card-content p {
            color: var(--muted-foreground);
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .back-btn-container {
            margin-bottom: 1.5rem;
        }

        .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            background: var(--secondary);
            color: var(--secondary-foreground);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            text-decoration: none;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.2s;
        }

        .back-btn:hover {
            background: color-mix(in srgb, var(--secondary) 90%, black);
            transform: translateY(-2px);
        }

        .notification-btn {
            position: relative;
            width: 48px;
            height: 48px;
            border-radius: calc(var(--radius) - 2px);
            background: var(--accent);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
        }

        .notification-btn:hover {
            background: rgba(99, 102, 241, 0.1);
            border-color: var(--primary);
        }

        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--destructive);
            color: white;
            font-size: 0.75rem;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        }

        .header-profile {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .profile-avatar {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, var(--primary) 0%, #e5191e 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            color: white;
            font-size: 1.1rem;
        }

        .profile-info h4 {
            font-size: 1rem;
            margin-bottom: 0.25rem;
            color: var(--foreground);
        }

        .profile-info p {
            font-size: 0.875rem;
            color: var(--muted-foreground);
        }

        @media (max-width: 768px) {
            .desktop-container {
                grid-template-columns: 1fr;
                padding: 1rem;
            }

            .desktop-sidebar {
                display: none;
            }

            .lab-hero h1 {
                font-size: 2rem;
            }

            .lab-hero p {
                font-size: 1rem;
            }

            .lab-card {
                padding: 1.5rem;
            }
        }
    `}})]}),(0,F.jsx)(`div`,{className:`body-wrapper`,children:(0,F.jsx)(`div`,{className:`desktop-container`,children:(0,F.jsxs)(`div`,{className:`desktop-main`,children:[(0,F.jsx)(`div`,{className:`card lab-header`,children:(0,F.jsxs)(`div`,{className:`lab-hero`,children:[(0,F.jsx)(`div`,{className:`flex items-start justify-between mb-6`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h1`,{className:`font-display`,children:`Coding Language Labs`}),(0,F.jsx)(`p`,{children:`Interactive programming environments for learning and practice`})]})}),(0,F.jsx)(`div`,{className:`back-btn-container`,children:(0,F.jsxs)(`a`,{href:`../lab`,className:`back-btn`,children:[(0,F.jsx)(`i`,{className:`fas fa-arrow-left`}),(0,F.jsx)(`span`,{children:`Back to Lab`})]})})]})}),(0,F.jsxs)(`div`,{className:`lab-grid`,children:[(0,F.jsxs)(`div`,{className:`lab-card animate-fadeIn`,children:[(0,F.jsx)(`div`,{className:`lab-card-icon`,children:(0,F.jsx)(`img`,{src:`https://cdn-icons-png.flaticon.com/512/5968/5968350.png`,alt:`Python`,style:{width:`60px`,height:`60px`,objectFit:`contain`},loading:`lazy`})}),(0,F.jsxs)(`div`,{className:`lab-card-content`,children:[(0,F.jsx)(`h3`,{children:`Python Lab`}),(0,F.jsx)(`p`,{children:`Write, run and debug Python code in our interactive environment. Perfect for beginners and advanced developers alike.`}),(0,F.jsx)(`a`,{className:`button button-lg button-default w-full`,href:`codings/pythoni`,style:{textDecoration:`none`},children:`Go to Python Lab`})]})]}),(0,F.jsxs)(`div`,{className:`lab-card animate-fadeIn`,style:{animationDelay:`0.1s`},children:[(0,F.jsx)(`div`,{className:`lab-card-icon`,children:(0,F.jsx)(`img`,{src:`https://cdn-icons-png.flaticon.com/512/6132/6132222.png`,alt:`C++`,style:{width:`60px`,height:`60px`,objectFit:`contain`},loading:`lazy`})}),(0,F.jsxs)(`div`,{className:`lab-card-content`,children:[(0,F.jsx)(`h3`,{children:`C++ Lab`}),(0,F.jsx)(`p`,{children:`Compile and execute C++ programs with our dedicated lab. Supports C++11, C++14, C++17 and C++20 standards.`}),(0,F.jsx)(`a`,{className:`button button-lg button-default w-full`,href:`codings/cpp`,style:{textDecoration:`none`},children:`Go to C++ Lab`})]})]}),(0,F.jsxs)(`div`,{className:`lab-card animate-fadeIn`,style:{animationDelay:`0.2s`},children:[(0,F.jsx)(`div`,{className:`lab-card-icon`,children:(0,F.jsx)(`img`,{src:`https://cdn-icons-png.flaticon.com/512/5968/5968332.png`,alt:`PHP`,style:{width:`60px`,height:`60px`,objectFit:`contain`},loading:`lazy`})}),(0,F.jsxs)(`div`,{className:`lab-card-content`,children:[(0,F.jsx)(`h3`,{children:`PHP Lab`}),(0,F.jsx)(`p`,{children:`Compile and execute PHP scripts with our dedicated lab. Supports modern PHP versions with fast and secure execution.`}),(0,F.jsx)(`a`,{className:`button button-lg button-default w-full`,href:`codings/php`,style:{textDecoration:`none`},children:`Go to PHP Lab`})]})]}),(0,F.jsxs)(`div`,{className:`lab-card animate-fadeIn`,style:{animationDelay:`0.3s`},children:[(0,F.jsx)(`div`,{className:`lab-card-icon`,children:(0,F.jsx)(`img`,{src:`https://cdn-icons-png.flaticon.com/512/5968/5968292.png`,alt:`JavaScript`,style:{width:`60px`,height:`60px`,objectFit:`contain`},loading:`lazy`})}),(0,F.jsxs)(`div`,{className:`lab-card-content`,children:[(0,F.jsx)(`h3`,{children:`JS Lab`}),(0,F.jsx)(`p`,{children:`Compile and execute JavaScript programs with our dedicated lab. Supports modern Node.js runtime for server-side execution.`}),(0,F.jsx)(`a`,{className:`button button-lg button-default w-full`,href:`codings/js`,style:{textDecoration:`none`},children:`Go to JS Lab`})]})]})]})]})})})]})})}var F,Gr=o((()=>{d(),F=w()}));function Kr(){return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(`div`,{className:`html-wrapper`,children:[(0,I.jsxs)(`div`,{className:`head-wrapper`,children:[(0,I.jsx)(`meta`,{charSet:`UTF-8`}),(0,I.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,I.jsx)(`title`,{children:`Terminal`}),(0,I.jsx)(`link`,{rel:`icon`,type:`image/png`,href:`../image.png`}),(0,I.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.googleapis.com`}),(0,I.jsx)(`link`,{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossorigin:!0}),(0,I.jsx)(`link`,{href:`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap`,rel:`stylesheet`}),(0,I.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`}),(0,I.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
            overscroll-behavior: none;
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #000000;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-width: 100%;
            overflow-x: hidden;
        }

        
        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        
        :root {
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --card-foreground: #ffffff;
            --popover: #080808;
            --popover-foreground: #ffffff;
            --primary: #e5191e;
            --primary-foreground: #ffffff;
            --secondary: #080808;
            --secondary-foreground: #ffffff;
            --muted: #080808;
            --muted-foreground: #a0a0a0;
            --accent: rgba(248, 250, 252, 0.05);
            --accent-foreground: #ffffff;
            --border: rgba(139, 12, 16, 0.1);
            --pop: rgba(255, 255, 255, 0.025);
            --input: rgba(139, 12, 16, 0.15);
            --ring: rgba(148, 163, 184, 0.5);
            
            --success: #ff2a2f;
            --destructive: #e5191e;
            --warning: #8b0c10;
            
            --chart-1: #e5191e;
            --chart-2: #ff2a2f;
            --chart-3: #8b0c10;
            --chart-4: #e5191e;
            --chart-5: #e5191e;
            
            --sidebar: #080808;
            --sidebar-foreground: #ffffff;
            --sidebar-primary: #e5191e;
            --sidebar-primary-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-accent-foreground: #ffffff;
            --sidebar-border: rgba(139, 12, 16, 0.1);
            --sidebar-ring: rgba(148, 163, 184, 0.5);
            
            --gap: 1.5rem;
            --sides: 1.5rem;
            --header-mobile: 3.8rem;
            
            
            --terminal-bg: #0a0a0f;
            --terminal-text: #e0e0ff;
            --terminal-prompt: #ff2a2f;
            --terminal-user: #e5191e;
            --terminal-host: #e5191e;
            --terminal-path: #8b0c10;
            --terminal-error: #e5191e;
            --terminal-success: #ff2a2f;
            --terminal-directory: #569cd6;
            --terminal-file: #ce9178;
            --terminal-executable: #d7ba7d;
        }

        
        .desktop-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--gap);
            min-height: 100vh;
            padding: var(--sides);
            background-color: var(--background);
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
        }

        
        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        
        .font-display {
            font-family: 'Rebels', 'Roboto Mono', monospace;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        
        .hidden {
            display: none !important;
        }

        .block {
            display: block;
        }

        .flex {
            display: flex;
        }

        .grid {
            display: grid;
        }

        .relative {
            position: relative;
        }

        .absolute {
            position: absolute;
        }

        .sticky {
            position: sticky;
        }

        .inset-0 {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        .w-full {
            width: 100%;
        }

        .h-full {
            height: 100%;
        }

        .h-screen {
            height: 100vh;
        }

        .min-h-screen {
            min-height: 100vh;
        }

        .size-full {
            width: 100%;
            height: 100%;
        }

        .rounded-lg {
            border-radius: var(--radius);
        }

        .rounded-md {
            border-radius: calc(var(--radius) - 2px);
        }

        .rounded-sm {
            border-radius: calc(var(--radius) - 4px);
        }

        .rounded-full {
            border-radius: 9999px;
        }

        .border {
            border-width: 1px;
        }

        .border-2 {
            border-width: 2px;
        }

        .border-b {
            border-bottom-width: 1px;
        }

        .border-t {
            border-top-width: 1px;
        }

        .ring-2 {
            box-shadow: 0 0 0 2px var(--ring);
        }

        .ring-pop {
            box-shadow: 0 0 0 2px var(--pop);
        }

        .bg-background {
            background-color: var(--background);
        }

        .bg-foreground {
            background-color: var(--foreground);
        }

        .bg-primary {
            background-color: var(--primary);
        }

        .bg-secondary {
            background-color: var(--secondary);
        }

        .bg-muted {
            background-color: var(--muted);
        }

        .bg-accent {
            background-color: var(--accent);
        }

        .bg-card {
            background-color: var(--card);
        }

        .bg-success {
            background-color: var(--success);
        }

        .bg-warning {
            background-color: var(--warning);
        }

        .bg-destructive {
            background-color: var(--destructive);
        }

        .bg-sidebar {
            background-color: var(--sidebar);
        }

        .bg-sidebar-primary {
            background-color: var(--sidebar-primary);
        }

        .bg-sidebar-accent {
            background-color: var(--sidebar-accent);
        }

        .text-foreground {
            color: var(--foreground);
        }

        .text-primary {
            color: var(--primary);
        }

        .text-primary-foreground {
            color: var(--primary-foreground);
        }

        .text-secondary {
            color: var(--secondary);
        }

        .text-secondary-foreground {
            color: var(--secondary-foreground);
        }

        .text-muted {
            color: var(--muted);
        }

        .text-muted-foreground {
            color: var(--muted-foreground);
        }

        .text-success {
            color: var(--success);
        }

        .text-warning {
            color: var(--warning);
        }

        .text-destructive {
            color: var(--destructive);
        }

        .text-sidebar-foreground {
            color: var(--sidebar-foreground);
        }

        .text-sidebar-primary {
            color: var(--sidebar-primary);
        }

        .text-sidebar-primary-foreground {
            color: var(--sidebar-primary-foreground);
        }

        .text-sidebar-accent-foreground {
            color: var(--sidebar-accent-foreground);
        }

        .text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
        }

        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .text-base {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }

        .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        .text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        .text-5xl {
            font-size: 3rem;
            line-height: 1;
        }

        .font-normal {
            font-weight: 400;
        }

        .font-medium {
            font-weight: 500;
        }

        .font-semibold {
            font-weight: 600;
        }

        .font-bold {
            font-weight: 700;
        }

        .uppercase {
            text-transform: uppercase;
        }

        .italic {
            font-style: italic;
        }

        .text-center {
            text-align: center;
        }

        .text-right {
            text-align: right;
        }

        .opacity-0 {
            opacity: 0;
        }

        .opacity-10 {
            opacity: 0.1;
        }

        .opacity-20 {
            opacity: 0.2;
        }

        .opacity-30 {
            opacity: 0.3;
        }

        .opacity-40 {
            opacity: 0.4;
        }

        .opacity-50 {
            opacity: 0.5;
        }

        .opacity-60 {
            opacity: 0.6;
        }

        .opacity-70 {
            opacity: 0.7;
        }

        .opacity-80 {
            opacity: 0.8;
        }

        .opacity-90 {
            opacity: 0.9;
        }

        .opacity-100 {
            opacity: 1;
        }

        .grayscale {
            filter: grayscale(100%);
        }

        .cursor-pointer {
            cursor: pointer;
        }

        .cursor-grab {
            cursor: grab;
        }

        .cursor-grabbing {
            cursor: grabbing;
        }

        .select-none {
            user-select: none;
        }

        .transition-all {
            transition: all 0.3s ease;
        }

        .transition-colors {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        .transition-opacity {
            transition: opacity 0.3s ease;
        }

        .transition-transform {
            transition: transform 0.3s ease;
        }

        .duration-200 {
            transition-duration: 0.2s;
        }

        .duration-300 {
            transition-duration: 0.3s;
        }

        .duration-500 {
            transition-duration: 0.5s;
        }

        .ease-out {
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }

        .ease-in-out {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .group:hover .group-hover:opacity-100 {
            opacity: 1 !important;
        }

        .group:hover .group-hover:scale-105 {
            transform: scale(1.05);
        }

        .group:hover .group-hover:brightness-110 {
            filter: brightness(1.1);
        }

        
        .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }

        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .grid-cols-12 {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }

        .col-span-1 {
            grid-column: span 1 / span 1;
        }

        .col-span-2 {
            grid-column: span 2 / span 2;
        }

        .col-span-3 {
            grid-column: span 3 / span 3;
        }

        .col-span-7 {
            grid-column: span 7 / span 7;
        }

        .gap-1 {
            gap: 0.25rem;
        }

        .gap-2 {
            gap: 0.5rem;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .gap-4 {
            gap: 1rem;
        }

        .gap-6 {
            gap: 1.5rem;
        }

        .gap-8 {
            gap: 2rem;
        }

        .gap-10 {
            gap: 2.5rem;
        }

        .gap-gap {
            gap: var(--gap);
        }

        .p-0 {
            padding: 0;
        }

        .p-1 {
            padding: 0.25rem;
        }

        .p-2 {
            padding: 0.5rem;
        }

        .p-3 {
            padding: 0.75rem;
        }

        .p-4 {
            padding: 1rem;
        }

        .p-6 {
            padding: 1.5rem;
        }

        .px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }

        .px-3 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
        }

        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .py-1 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
        }

        .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        .py-10 {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
        }

        .py-sides {
            padding-top: var(--sides);
            padding-bottom: var(--sides);
        }

        .px-sides {
            padding-left: var(--sides);
            padding-right: var(--sides);
        }

        .pt-1 {
            padding-top: 0.25rem;
        }

        .pt-2 {
            padding-top: 0.5rem;
        }

        .pt-4 {
            padding-top: 1rem;
        }

        .pb-1 {
            padding-bottom: 0.25rem;
        }

        .pb-4 {
            padding-bottom: 1rem;
        }

        .pl-2 {
            padding-left: 0.5rem;
        }

        .pl-3 {
            padding-left: 0.75rem;
        }

        .pl-4 {
            padding-left: 1rem;
        }

        .pr-1 {
            padding-right: 0.25rem;
        }

        .pr-2 {
            padding-right: 0.5rem;
        }

        .pr-3 {
            padding-right: 0.75rem;
        }

        .pr-4 {
            padding-right: 1rem;
        }

        .mt-1 {
            margin-top: 0.25rem;
        }

        .mt-2 {
            margin-top: 0.5rem;
        }

        .mt-auto {
            margin-top: auto;
        }

        .mb-1 {
            margin-bottom: 0.25rem;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }

        .mb-6 {
            margin-bottom: 1.5rem;
        }

        .ml-auto {
            margin-left: auto;
        }

        .mr-1 {
            margin-right: 0.25rem;
        }

        .mr-2 {
            margin-right: 0.5rem;
        }

        .mr-3 {
            margin-right: 0.75rem;
        }

        .space-y-1 > * + * {
            margin-top: 0.25rem;
        }

        .space-y-2 > * + * {
            margin-top: 0.5rem;
        }

        .space-y-3 > * + * {
            margin-top: 0.75rem;
        }

        .space-y-4 > * + * {
            margin-top: 1rem;
        }

        .space-y-6 > * + * {
            margin-top: 1.5rem;
        }

        .flex-1 {
            flex: 1 1 0%;
        }

        .flex-col {
            flex-direction: column;
        }

        .flex-row {
            flex-direction: row;
        }

        .items-start {
            align-items: flex-start;
        }

        .items-center {
            align-items: center;
        }

        .items-baseline {
            align-items: baseline;
        }

        .items-stretch {
            align-items: stretch;
        }

        .justify-start {
            justify-content: flex-start;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-between {
            justify-content: space-between;
        }

        .justify-end {
            justify-content: flex-end;
        }

        .min-w-0 {
            min-width: 0;
        }

        .max-w-xs {
            max-width: 20rem;
        }

        .max-w-sm {
            max-width: 24rem;
        }

        .max-w-md {
            max-width: 28rem;
        }

        .max-w-max {
            max-width: max-content;
        }

        .w-1/4 {
            width: 25%;
        }

        .w-14 {
            width: 3.5rem;
        }

        .w-16 {
            width: 4rem;
        }

        .w-56 {
            width: 14rem;
        }

        .w-80 {
            width: 20rem;
        }

        .h-5 {
            height: 1.25rem;
        }

        .h-6 {
            height: 1.5rem;
        }

        .h-7 {
            height: 1.75rem;
        }

        .h-8 {
            height: 2rem;
        }

        .h-10 {
            height: 2.5rem;
        }

        .h-12 {
            height: 3rem;
        }

        .h-14 {
            height: 3.5rem;
        }

        .h-32 {
            height: 8rem;
        }

        .h-header-mobile {
            height: var(--header-mobile);
        }

        .size-3 {
            width: 0.75rem;
            height: 0.75rem;
        }

        .size-4 {
            width: 1rem;
            height: 1rem;
        }

        .size-5 {
            width: 1.25rem;
            height: 1.25rem;
        }

        .size-6 {
            width: 1.5rem;
            height: 1.5rem;
        }

        .size-7 {
            width: 1.75rem;
            height: 1.75rem;
        }

        .size-9 {
            width: 2.25rem;
            height: 2.25rem;
        }

        .size-10 {
            width: 2.5rem;
            height: 2.5rem;
        }

        .size-12 {
            width: 3rem;
            height: 3rem;
        }

        .size-14 {
            width: 3.5rem;
            height: 3.5rem;
        }

        .size-16 {
            width: 4rem;
            height: 4rem;
        }

        .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        
        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border: 1px solid transparent;
        }

        .badge-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
            border-color: var(--primary);
        }

        .badge-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .badge-outline {
            background-color: transparent;
            color: currentColor;
            border-color: currentColor;
        }

        .badge-outline-success {
            background-color: transparent;
            color: var(--success);
            border-color: var(--success);
        }

        .badge-outline-warning {
            background-color: transparent;
            color: var(--warning);
            border-color: var(--warning);
        }

        .badge-destructive {
            background-color: var(--destructive);
            color: white;
            border-color: var(--destructive);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid transparent;
            user-select: none;
            white-space: nowrap;
        }

        .button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .button-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
        }

        .button-default:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--primary) 90%, black);
        }

        .button-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .button-secondary:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--secondary) 90%, black);
        }

        .button-ghost {
            background-color: transparent;
            color: currentColor;
        }

        .button-ghost:hover:not(:disabled) {
            background-color: var(--accent);
        }

        .button-outline {
            background-color: transparent;
            color: currentColor;
            border-color: currentColor;
        }

        .button-outline:hover:not(:disabled) {
            background-color: var(--accent);
        }

        .button-sm {
            height: 2rem;
            padding: 0 0.75rem;
            font-size: 0.875rem;
        }

        .button-md {
            height: 2.5rem;
            padding: 0 1rem;
            font-size: 0.875rem;
        }

        .button-lg {
            height: 3rem;
            padding: 0 1.5rem;
            font-size: 1rem;
        }

        .button-xl {
            height: 3.5rem;
            padding: 0 2rem;
            font-size: 1rem;
        }

        .button-icon {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0;
        }

        .input {
            width: 100%;
            height: 2.5rem;
            padding: 0 0.75rem;
            background-color: var(--input);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            color: var(--foreground);
            font-family: inherit;
            font-size: 0.875rem;
            transition: border-color 0.2s;
        }

        .input:focus {
            outline: none;
            border-color: var(--ring);
        }

        .input::placeholder {
            color: var(--muted-foreground);
            opacity: 0.7;
        }

        .separator {
            width: 100%;
            height: 1px;
            background-color: var(--border);
        }

        .bullet {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--muted-foreground);
        }

        .bullet-success {
            background-color: var(--success);
        }

        .bullet-warning {
            background-color: var(--warning);
        }

        .bullet-destructive {
            background-color: var(--destructive);
        }

        .bullet-sm {
            width: 0.375rem;
            height: 0.375rem;
        }

        .sheet {
            position: fixed;
            z-index: 50;
            background-color: var(--background);
            transition: transform 0.3s ease;
        }

        .sheet-bottom {
            bottom: 0;
            left: 0;
            right: 0;
            transform: translateY(100%);
        }

        .sheet-bottom.open {
            transform: translateY(0);
        }

        .sheet-right {
            top: 0;
            right: 0;
            bottom: 0;
            transform: translateX(100%);
        }

        .sheet-right.open {
            transform: translateX(0);
        }

        .tooltip {
            position: relative;
        }

        .tooltip-content {
            position: absolute;
            z-index: 50;
            padding: 0.5rem 0.75rem;
            background-color: var(--popover);
            color: var(--popover-foreground);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            font-size: 0.875rem;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
        }

        .tooltip:hover .tooltip-content {
            opacity: 1;
        }

        .tabs-list {
            display: flex;
            gap: 0.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.5rem;
        }

        .tabs-trigger {
            padding: 0.5rem 1rem;
            background: transparent;
            border: none;
            color: var(--muted-foreground);
            font-family: inherit;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: color 0.2s;
            position: relative;
        }

        .tabs-trigger:hover {
            color: var(--foreground);
        }

        .tabs-trigger.active {
            color: var(--foreground);
        }

        .tabs-trigger.active::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--primary);
        }

        
        .terminal-header {
            padding: 1.5rem;
            border-bottom: 1px solid transparent;
            background-color: var(--card);
        }

        .terminal-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            background-color: var(--terminal-bg);
            border-radius: var(--radius);
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
            width: 100%;
            max-width: 100%;
            min-height: 70vh;
        }

        .terminal-controls {
            padding: 0.75rem 1rem;
            background-color: var(--secondary);
            border-bottom: 1px solid transparent;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .control-buttons {
            display: flex;
            gap: 0.5rem;
        }

        .control-btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .control-btn:hover {
            opacity: 0.8;
        }

        .control-btn.close {
            background-color: var(--destructive);
        }

        .control-btn.minimize {
            background-color: var(--warning);
        }

        .control-btn.maximize {
            background-color: var(--success);
        }

        .terminal-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 0.75rem;
            color: var(--muted-foreground);
        }

        .terminal-body {
            flex: 1;
            overflow: auto;
            padding: 1rem 1.25rem;
            font-family: 'Roboto Mono', monospace;
            font-size: 14px;
            line-height: 1.4;
            border: 0;
            box-shadow: none;
            background: linear-gradient(180deg, rgba(12,14,22,0.98) 0%, rgba(8,10,18,0.98) 100%);
            word-break: break-word;
        }

        #terminal {
            min-height: 60vh;
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: var(--terminal-text);
        }

        #terminal:focus {
            outline: none;
            box-shadow: none;
        }


        
        .terminal-line {
            margin-bottom: 2px;
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
        }

        .prompt {
            color: var(--terminal-prompt);
            font-weight: bold;
        }

        .user {
            color: var(--terminal-user);
        }

        .host {
            color: var(--terminal-host);
        }

        .path {
            color: var(--terminal-path);
        }

        .command {
            color: var(--terminal-text);
        }

        .output {
            color: var(--terminal-text);
            opacity: 0.9;
            white-space: pre-wrap;
            word-wrap: break-word;
            background: transparent;
            border: none;
        }

        .error {
            color: var(--terminal-error);
        }

        .success {
            color: var(--terminal-success);
        }

        .directory {
            color: var(--terminal-directory);
        }

        .file {
            color: var(--terminal-file);
        }

        .executable {
            color: var(--terminal-executable);
        }

        .link {
            color: #d7ba7d;
        }

        .welcome-message {
            color: var(--muted-foreground);
            margin-bottom: 1rem;
            line-height: 1.5;
        }

        .input-line {
            display: flex;
            align-items: baseline;
            margin-bottom: 0;
        }

        .command-input {
            background: transparent;
            border: none;
            color: var(--terminal-text);
            font-family: 'Roboto Mono', monospace;
            font-size: 14px;
            outline: none;
            padding: 0;
            margin-left: 0.5rem;
            flex: 1;
            caret-color: var(--terminal-text);
        }

        .command-input:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .cursor {
            display: inline-block;
            background: var(--terminal-text);
            animation: blink 1s infinite;
            width: 8px;
            height: 16px;
            margin-left: 2px;
            vertical-align: middle;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
            animation: slideUp 0.3s ease-out;
        }

        .animate-slideDown {
            animation: slideDown 0.3s ease-out;
        }

        
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--muted);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--muted-foreground);
        }

        
        .fullscreen {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            background-color: var(--terminal-bg);
            padding: 0;
            margin: 0;
            border-radius: 0;
        }

        .fullscreen .terminal-body {
            height: calc(100vh - 60px);
        }

        
        .tv-noise {
            position: absolute;
            inset: 0;
            background: 
                repeating-linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.1) 0px,
                    rgba(0, 0, 0, 0.1) 1px,
                    transparent 1px,
                    transparent 2px
                ),
                repeating-linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.1) 0px,
                    rgba(0, 0, 0, 0.1) 1px,
                    transparent 1px,
                    transparent 2px
                );
            opacity: 0.1;
            pointer-events: none;
            z-index: 1;
        }

        
        @media (max-width: 768px) {
            body {
                min-width: 100%;
                overflow-x: hidden;
            }
            
            .desktop-container {
                grid-template-columns: 1fr;
                padding: 1rem;
                min-width: 100%;
                width: 100%;
            }
            
            .desktop-sidebar {
                display: none;
            }
            
            .terminal-body {
                font-size: 12px;
            }
        }
    `}})]}),(0,I.jsx)(`div`,{className:`body-wrapper`,children:(0,I.jsx)(`div`,{className:`desktop-container`,children:(0,I.jsxs)(`div`,{className:`desktop-main`,children:[(0,I.jsx)(`div`,{className:`card animate-fadeIn`,children:(0,I.jsx)(`div`,{className:`terminal-header`,children:(0,I.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(`div`,{className:`size-9 rounded bg-primary flex items-center justify-center`,children:(0,I.jsx)(`i`,{className:`fas fa-terminal text-primary-foreground text-lg`})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h1`,{className:`text-3xl font-display`,children:`Proworldz Terminal`}),(0,I.jsx)(`div`,{className:`text-sm text-muted-foreground`,children:`Ubuntu 22.04 LTS - Interactive Shell`}),(0,I.jsx)(`div`,{className:`text-sm text-muted-foreground`,children:`Warning : Refresh this can loss your command line data`})]})]}),(0,I.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,I.jsxs)(`button`,{className:`button button-secondary button-sm`,onClick:`goBack()`,children:[(0,I.jsx)(`i`,{className:`fas fa-arrow-left mr-2`}),`Back to Dashboard`]})})]})})}),(0,I.jsxs)(`div`,{className:`terminal-container animate-slideUp`,style:{animationDelay:`0.1s`},children:[(0,I.jsxs)(`div`,{className:`terminal-controls`,children:[(0,I.jsxs)(`div`,{className:`control-buttons`,children:[(0,I.jsx)(`button`,{className:`control-btn close`,onClick:`clearTerminal()`,title:`Clear Terminal`}),(0,I.jsx)(`button`,{className:`control-btn minimize`,onClick:`minimizeTerminal()`,title:`Minimize`}),(0,I.jsx)(`button`,{className:`control-btn maximize`,onClick:`toggleFullscreen()`,title:`Fullscreen`})]}),(0,I.jsxs)(`div`,{className:`terminal-info`,children:[(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`i`,{className:`fas fa-microchip`}),` Ubuntu 22.04 LTS`]}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`i`,{className:`fas fa-user`}),` `]}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`i`,{className:`fas fa-folder`}),` ~`]})]})]}),(0,I.jsx)(`div`,{className:`terminal-body`,children:(0,I.jsx)(`div`,{id:`terminal`,tabIndex:`0`})})]})]})})})]})})}var I,qr=o((()=>{d(),I=w()}));function Jr(){return(0,Yr.jsx)(Yr.Fragment,{children:(0,Yr.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Yr.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Yr.jsx)(`meta`,{charSet:`UTF-8`}),(0,Yr.jsx)(`title`,{children:`Nexora IAM | Chain Auth`}),(0,Yr.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Yr.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fdfdfd; font-family: 'Inter', sans-serif; }`}})]}),(0,Yr.jsx)(`div`,{className:`body-wrapper`,children:(0,Yr.jsx)(`div`,{className:`container`,style:{maxWidth:`600px`},children:(0,Yr.jsxs)(`div`,{className:`card border-0 shadow-lg p-5 rounded-5 bg-white`,children:[(0,Yr.jsx)(`h3`,{className:`fw-bold mb-4`,children:`Advanced Infrastructure Logic`}),(0,Yr.jsx)(`div`,{className:`alert alert-danger small`}),(0,Yr.jsxs)(`form`,{method:`POST`,children:[(0,Yr.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-1`,children:`GLOBAL_UID`}),(0,Yr.jsx)(`input`,{type:`text`,name:`user`,className:`form-control mb-3`,placeholder:`rootadmin`,required:!0}),(0,Yr.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-1`,children:`SECURITY_KEY`}),(0,Yr.jsx)(`input`,{type:`password`,name:`pass`,className:`form-control mb-4`,placeholder:`••••••••`,required:!0}),(0,Yr.jsx)(`button`,{className:`btn btn-dark w-100 py-3 fw-bold`,children:`Proceed to Layer 2`})]}),(0,Yr.jsxs)(`form`,{method:`POST`,children:[(0,Yr.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,Yr.jsx)(`h5`,{className:`fw-bold mt-2`,children:`Secondary MFA Protocol`}),(0,Yr.jsxs)(`p`,{className:`text-muted small`,children:[`Enter the 4-digit security PIN for `,(0,Yr.jsx)(`b`,{})]})]}),(0,Yr.jsx)(`input`,{type:`text`,name:`pin`,className:`form-control mb-4 text-center fs-2 fw-bold`,placeholder:`0000`,maxLength:`4`,required:!0}),(0,Yr.jsx)(`button`,{className:`btn btn-primary w-100 py-3 fw-bold`,children:`Verify Identity Core`})]}),(0,Yr.jsxs)(`div`,{className:`alert alert-success p-4 border-0 shadow-sm rounded-4 text-center`,children:[(0,Yr.jsx)(`h4`,{className:`fw-bold`,children:`Root Authentication Successful`}),(0,Yr.jsx)(`p`,{className:`small opacity-75`,children:`Global Infrastructure Flag Access Granted:`}),(0,Yr.jsx)(`div`,{className:`bg-white p-3 rounded border fw-bold text-danger`})]}),(0,Yr.jsx)(`a`,{href:`?step=1`,className:`btn btn-link w-100 mt-4 text-muted small`,children:`Invalidate Local Auth`})]})})})]})})}var Yr,Xr=o((()=>{d(),Yr=w()}));function Zr(){return(0,Qr.jsx)(Qr.Fragment,{children:(0,Qr.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Qr.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Qr.jsx)(`meta`,{charSet:`UTF-8`}),(0,Qr.jsx)(`title`,{children:`Nexora IAM | Fixation Portal`}),(0,Qr.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Qr.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #0b0e14; color: #94a3b8; font-family: 'Inter', sans-serif; }`}})]}),(0,Qr.jsx)(`div`,{className:`body-wrapper`,children:(0,Qr.jsxs)(`div`,{className:`container`,style:{maxWidth:`500px`},children:[(0,Qr.jsxs)(`div`,{className:`card border-0 shadow-lg p-5 bg-dark text-white rounded-5`,children:[(0,Qr.jsx)(`h4`,{className:`fw-bold mb-4`,children:`Authorized: `}),(0,Qr.jsx)(`div`,{className:`bg-success bg-opacity-10 p-3 rounded text-info small mb-4`,children:`VAULT_DATA: `}),(0,Qr.jsx)(`a`,{href:`?logout=1`,className:`btn btn-outline-danger btn-sm`,children:`Discard Identity`})]}),(0,Qr.jsxs)(`div`,{className:`card border-0 shadow p-5 rounded-5 bg-white text-dark`,children:[(0,Qr.jsx)(`h4`,{className:`fw-bold mb-4 text-center`,children:`Infrastructure Login`}),(0,Qr.jsx)(`div`,{className:`alert alert-danger small`}),(0,Qr.jsxs)(`form`,{method:`POST`,children:[(0,Qr.jsx)(`input`,{type:`text`,name:`u`,className:`form-control mb-3`,placeholder:`Director ID`,required:!0}),(0,Qr.jsx)(`input`,{type:`password`,name:`p`,className:`form-control mb-4`,placeholder:`Security Key`,required:!0}),(0,Qr.jsx)(`button`,{className:`btn btn-dark w-100 py-3 fw-bold`,children:`Login to IAM Node`})]}),(0,Qr.jsxs)(`div`,{className:`mt-4 text-center x-small text-muted opacity-50`,children:[`URL Tracking ID: `,(0,Qr.jsx)(`code`,{})]})]})]})})]})})}var Qr,$r=o((()=>{d(),Qr=w()}));function ei(){return(0,ti.jsx)(ti.Fragment,{children:(0,ti.jsxs)(`div`,{className:`html-wrapper`,children:[(0,ti.jsxs)(`div`,{className:`head-wrapper`,children:[(0,ti.jsx)(`meta`,{charSet:`UTF-8`}),(0,ti.jsx)(`title`,{children:`Nexora IAM | Identity Lookup`}),(0,ti.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,ti.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f0f2f5; font-family: 'Segoe UI', sans-serif; }`}})]}),(0,ti.jsx)(`div`,{className:`body-wrapper`,children:(0,ti.jsxs)(`div`,{className:`container`,style:{maxWidth:`500px`},children:[(0,ti.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,ti.jsx)(`h5`,{className:`fw-bold mb-4`,children:`Identity Verification Gateway`}),(0,ti.jsx)(`div`,{className:`alert {/* PHP echo removed */} small font-monospace`}),(0,ti.jsxs)(`form`,{method:`POST`,children:[(0,ti.jsx)(`input`,{type:`text`,name:`user_id`,className:`form-control mb-3`,placeholder:`Employee ID (e.g. jdoe_66)`,required:!0}),(0,ti.jsx)(`input`,{type:`password`,name:`pass`,className:`form-control mb-4`,placeholder:`Corporate Password`,required:!0}),(0,ti.jsx)(`button`,{className:`btn btn-dark w-100 py-2`,children:`Query Vault`})]})]}),(0,ti.jsx)(`p`,{className:`text-center x-small text-muted opacity-50`,children:`Information Disclosure Policy: All login attempts are audited for metadata intelligence.`})]})})]})})}var ti,ni=o((()=>{d(),ti=w()}));function ri(){return(0,ii.jsx)(ii.Fragment,{children:(0,ii.jsxs)(`div`,{className:`html-wrapper`,children:[(0,ii.jsxs)(`div`,{className:`head-wrapper`,children:[(0,ii.jsx)(`meta`,{charSet:`UTF-8`}),(0,ii.jsx)(`title`,{children:`Nexora IAM | Dashboard`}),(0,ii.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,ii.jsx)(`div`,{className:`body-wrapper`,children:(0,ii.jsx)(`div`,{className:`container`,children:(0,ii.jsxs)(`div`,{className:`card border-0 shadow-sm p-5 rounded-5 bg-white`,children:[(0,ii.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Enterprise Access Overview`}),(0,ii.jsxs)(`div`,{className:`row g-4`,children:[(0,ii.jsx)(`div`,{className:`col-md-4`,children:(0,ii.jsxs)(`div`,{className:`p-4 bg-primary text-white rounded-4`,children:[(0,ii.jsx)(`h6`,{className:`fw-bold mb-1 opacity-75`,children:`IDENTITY`}),(0,ii.jsx)(`h4`,{})]})}),(0,ii.jsx)(`div`,{className:`col-md-4`,children:(0,ii.jsxs)(`div`,{className:`p-4 bg-dark text-white rounded-4`,children:[(0,ii.jsx)(`h6`,{className:`fw-bold mb-1 opacity-75`,children:`ROLE`}),(0,ii.jsx)(`h4`,{})]})})]}),(0,ii.jsxs)(`div`,{className:`mt-5 p-4 border border-warning bg-warning bg-opacity-10 rounded-4`,children:[(0,ii.jsx)(`h5`,{className:`fw-bold text-dark`,children:`SECURE FLAG REVEALED`}),(0,ii.jsx)(`p`,{className:`mb-0 text-danger fw-bold`,children:`FLAG: `})]}),(0,ii.jsx)(`hr`,{className:`my-5`}),(0,ii.jsx)(`a`,{href:`logout`,className:`btn btn-outline-dark`,children:`Terminate Session`})]})})})]})})}var ii,ai=o((()=>{d(),ii=w()}));function oi(){return(0,si.jsx)(si.Fragment,{children:(0,si.jsxs)(`div`,{className:`html-wrapper`,children:[(0,si.jsxs)(`div`,{className:`head-wrapper`,children:[(0,si.jsx)(`meta`,{charSet:`UTF-8`}),(0,si.jsx)(`title`,{children:`Nexora IAM | Access`}),(0,si.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,si.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif; }
        .login-card { background: #1e293b; border: 1px solid #334155; max-width: 450px; margin: 100px auto; }
    `}})]}),(0,si.jsx)(`div`,{className:`body-wrapper`,children:(0,si.jsxs)(`div`,{className:`card login-card p-5 rounded-5 shadow-2xl`,children:[(0,si.jsx)(`h3`,{className:`fw-bold mb-4 text-center`,children:`Identity Portal`}),(0,si.jsx)(`div`,{className:`alert alert-danger font-monospace small`}),(0,si.jsxs)(`form`,{method:`POST`,children:[(0,si.jsxs)(`div`,{className:`mb-3`,children:[(0,si.jsx)(`label`,{className:`x-small fw-bold opacity-50`,children:`ENT_ID`}),(0,si.jsx)(`input`,{type:`text`,name:`username`,className:`form-control bg-dark border-secondary text-white`,placeholder:`admin`,required:!0})]}),(0,si.jsxs)(`div`,{className:`mb-4`,children:[(0,si.jsx)(`label`,{className:`x-small fw-bold opacity-50`,children:`SECURITY_KEY`}),(0,si.jsx)(`input`,{type:`password`,name:`password`,className:`form-control bg-dark border-secondary text-white`,placeholder:`••••••••`,required:!0})]}),(0,si.jsx)(`button`,{className:`btn btn-primary w-100 py-3 fw-bold`,children:`Authenticate Session`})]}),(0,si.jsx)(`div`,{className:`mt-4 text-center x-small text-muted opacity-30`,children:`Internal Note: Session protected by Nexora Zero-Trust v1.4`})]})})]})})}var si,ci=o((()=>{d(),si=w()}));function li(){return(0,ui.jsx)(ui.Fragment,{children:(0,ui.jsxs)(`div`,{className:`html-wrapper`,children:[(0,ui.jsxs)(`div`,{className:`head-wrapper`,children:[(0,ui.jsx)(`meta`,{charSet:`UTF-8`}),(0,ui.jsx)(`title`,{children:`Nexora IAM | Recovery`}),(0,ui.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,ui.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fdfdfd; font-family: 'Segoe UI', sans-serif; }`}})]}),(0,ui.jsx)(`div`,{className:`body-wrapper`,children:(0,ui.jsx)(`div`,{className:`container`,style:{maxWidth:`600px`},children:(0,ui.jsxs)(`div`,{className:`card border-0 shadow-sm p-5 rounded-5 bg-white`,children:[(0,ui.jsx)(`h3`,{className:`fw-bold mb-4`,children:`Enterprise Account Recovery`}),(0,ui.jsx)(`div`,{className:`alert alert-dark p-4 rounded-4 font-monospace small`}),(0,ui.jsx)(`a`,{href:`index`,className:`btn btn-link`,children:`Back to Recovery Home`}),(0,ui.jsx)(`div`,{className:`alert alert-success small`}),(0,ui.jsxs)(`form`,{method:`POST`,children:[(0,ui.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-2`,children:`CORPORATE EMAIL ADDRESS`}),(0,ui.jsx)(`input`,{type:`email`,name:`email`,className:`form-control mb-4`,placeholder:`user@nexora.internal`,required:!0}),(0,ui.jsx)(`button`,{className:`btn btn-info text-white w-100 py-2 fw-bold`,children:`Request Access Reset`})]}),(0,ui.jsx)(`div`,{className:`mt-4 p-3 bg-light rounded text-center x-small text-muted border border-dashed`,children:`Note: Tokens are cryptographically tied to your identity and timestamp (v8.1).`})]})})})]})})}var ui,di=o((()=>{d(),ui=w()}));function fi(){return(0,pi.jsx)(pi.Fragment,{children:(0,pi.jsxs)(`div`,{className:`html-wrapper`,children:[(0,pi.jsxs)(`div`,{className:`head-wrapper`,children:[(0,pi.jsx)(`meta`,{charSet:`UTF-8`}),(0,pi.jsx)(`title`,{children:`Nexora IAM | Sessions`}),(0,pi.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,pi.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f8fafc; font-family: 'Inter', sans-serif; }`}})]}),(0,pi.jsx)(`div`,{className:`body-wrapper`,children:(0,pi.jsxs)(`div`,{className:`container`,children:[(0,pi.jsxs)(`div`,{className:`card border-0 shadow-lg p-5 rounded-5 bg-dark text-white`,children:[(0,pi.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Enterprise Profile: `}),(0,pi.jsxs)(`div`,{className:`alert alert-info py-2`,children:[`Session ID: `,(0,pi.jsx)(`code`,{})]}),(0,pi.jsxs)(`p`,{children:[`System Flag: `,(0,pi.jsx)(`span`,{className:`text-warning fw-bold`})]}),(0,pi.jsx)(`a`,{href:`logout`,className:`btn btn-outline-light btn-sm mt-4`,children:`Invalidate Access`})]}),(0,pi.jsxs)(`div`,{className:`card border-0 shadow p-5 rounded-5 mt-5`,style:{maxWidth:`450px`,margin:`auto`},children:[(0,pi.jsx)(`h4`,{className:`fw-bold mb-4`,children:`IAM Node Login`}),(0,pi.jsxs)(`form`,{method:`POST`,children:[(0,pi.jsx)(`input`,{type:`text`,name:`u`,className:`form-control mb-3`,placeholder:`Username (try guest_acc)`,required:!0}),(0,pi.jsx)(`input`,{type:`password`,name:`p`,className:`form-control mb-4`,placeholder:`Password`,required:!0}),(0,pi.jsx)(`button`,{className:`btn btn-primary w-100 py-3 fw-bold`,children:`Initialize Identity`})]})]})]})})]})})}var pi,mi=o((()=>{d(),pi=w()}));function hi(){return(0,gi.jsx)(gi.Fragment,{children:(0,gi.jsxs)(`div`,{className:`card p-4`,children:[(0,gi.jsx)(`h3`,{}),(0,gi.jsx)(`p`,{className:`text-muted`,children:`Report ID: `}),(0,gi.jsx)(`hr`,{}),(0,gi.jsx)(`div`,{className:`bg-light p-3`}),(0,gi.jsx)(`a`,{href:`dashboard`,className:`mt-3`,children:`Back to List`})]})})}var gi,_i=o((()=>{d(),gi=w()}));function vi(){return(0,yi.jsx)(yi.Fragment,{children:(0,yi.jsxs)(`div`,{className:`html-wrapper`,children:[(0,yi.jsxs)(`div`,{className:`head-wrapper`,children:[(0,yi.jsx)(`title`,{children:`Privilege Leak`}),(0,yi.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,yi.jsx)(`div`,{className:`body-wrapper`,children:(0,yi.jsx)(`div`,{className:`container pt-5`})})]})})}var yi,bi=o((()=>{d(),yi=w()}));function xi(){return(0,Si.jsx)(Si.Fragment,{children:(0,Si.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Si.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Si.jsx)(`title`,{children:`Role Bypass`}),(0,Si.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,Si.jsxs)(`div`,{className:`body-wrapper`,children:[(0,Si.jsx)(`nav`,{className:`navbar navbar-dark bg-primary`,children:(0,Si.jsx)(`div`,{className:`container`,children:(0,Si.jsx)(`a`,{className:`navbar-brand`,children:`RoleManager`})})}),(0,Si.jsx)(`div`,{className:`container mt-4`})]})]})})}var Si,Ci=o((()=>{d(),Si=w()}));function wi(){return(0,Ti.jsxs)(Ti.Fragment,{children:[(0,Ti.jsx)(`div`,{className:`list-group`,children:(0,Ti.jsx)(`a`,{href:`view?doc_id={/* PHP echo removed */}`,className:`list-group-item list-group-item-action`})}),(0,Ti.jsx)(`div`,{className:`mt-4 alert alert-warning`,children:`Only public documents are listed here.`})]})}var Ti,Ei=o((()=>{d(),Ti=w()}));function Di(){return(0,Oi.jsx)(Oi.Fragment,{children:(0,Oi.jsxs)(`div`,{className:`text-center p-5`,children:[(0,Oi.jsx)(`h1`,{children:`Corporate Document Repository`}),(0,Oi.jsx)(`p`,{children:`Securely viewing company documents.`}),(0,Oi.jsx)(`a`,{href:`login`,className:`btn btn-primary`,children:`Sign In`})]})})}var Oi,ki=o((()=>{d(),Oi=w()}));function Ai(){return(0,ji.jsx)(ji.Fragment,{children:(0,ji.jsx)(`div`,{className:`row justify-content-center`,children:(0,ji.jsxs)(`div`,{className:`col-md-4 card p-4`,children:[(0,ji.jsx)(`h3`,{children:`Login`}),(0,ji.jsxs)(`form`,{method:`POST`,children:[(0,ji.jsxs)(`div`,{className:`mb-3`,children:[(0,ji.jsx)(`label`,{children:`Username`}),(0,ji.jsx)(`input`,{type:`text`,name:`username`,className:`form-control`})]}),(0,ji.jsxs)(`div`,{className:`mb-3`,children:[(0,ji.jsx)(`label`,{children:`Password`}),(0,ji.jsx)(`input`,{type:`password`,name:`password`,className:`form-control`})]}),(0,ji.jsx)(`button`,{className:`btn btn-primary w-100`,children:`Login`})]}),(0,ji.jsx)(`p`,{className:`mt-2 text-muted`,children:`user1 / pass123`})]})})})}var ji,Mi=o((()=>{d(),ji=w()}));function Ni(){return(0,Pi.jsx)(Pi.Fragment,{children:(0,Pi.jsxs)(`div`,{className:`card p-4`,children:[(0,Pi.jsx)(`h2`,{}),(0,Pi.jsx)(`hr`,{}),(0,Pi.jsx)(`div`,{className:`p-3 bg-white border rounded`}),(0,Pi.jsx)(`a`,{href:`dashboard`,className:`btn btn-secondary mt-3`,children:`Back`})]})})}var Pi,Fi=o((()=>{d(),Pi=w()}));function Ii(){return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(`div`,{className:`row`,children:(0,L.jsxs)(`div`,{className:`col-md-12`,children:[(0,L.jsx)(`h2`,{children:`Dashboard`}),(0,L.jsxs)(`p`,{children:[`Welcome back, `,(0,L.jsx)(`strong`,{}),`!`]}),(0,L.jsxs)(`div`,{className:`card mt-4 p-4`,children:[(0,L.jsx)(`h5`,{children:`Quick Actions`}),(0,L.jsx)(`div`,{className:`list-group mt-2`,children:(0,L.jsx)(`a`,{href:`profile?id={/* PHP echo removed */}`,className:`list-group-item list-group-item-action`,children:`View My Profile`})})]})]})})})}var L,Li=o((()=>{d(),L=w()}));function Ri(){return(0,zi.jsx)(zi.Fragment,{children:(0,zi.jsx)(`div`,{className:`row justify-content-center`,children:(0,zi.jsxs)(`div`,{className:`col-md-8 text-center`,children:[(0,zi.jsx)(`h1`,{className:`display-4 fw-bold mb-4`,children:`Welcome to Profile Access Lab`}),(0,zi.jsx)(`p`,{className:`lead`,children:`In this challenge, you need to find the administrator's secret information.`}),(0,zi.jsx)(`hr`,{}),(0,zi.jsx)(`div`,{className:`mt-4`,children:(0,zi.jsx)(`a`,{href:`login`,className:`btn btn-primary btn-lg px-5`,children:`Start Challenge`})})]})})})}var zi,Bi=o((()=>{d(),zi=w()}));function Vi(){return(0,Hi.jsx)(Hi.Fragment,{children:(0,Hi.jsx)(`div`,{className:`row justify-content-center`,children:(0,Hi.jsx)(`div`,{className:`col-md-4`,children:(0,Hi.jsxs)(`div`,{className:`card p-4`,children:[(0,Hi.jsx)(`h3`,{className:`text-center mb-4`,children:`Login`}),(0,Hi.jsx)(`div`,{className:`alert alert-danger`}),(0,Hi.jsxs)(`form`,{method:`POST`,children:[(0,Hi.jsxs)(`div`,{className:`mb-3`,children:[(0,Hi.jsx)(`label`,{children:`Username`}),(0,Hi.jsx)(`input`,{type:`text`,name:`username`,className:`form-control`,required:!0})]}),(0,Hi.jsxs)(`div`,{className:`mb-3`,children:[(0,Hi.jsx)(`label`,{children:`Password`}),(0,Hi.jsx)(`input`,{type:`password`,name:`password`,className:`form-control`,required:!0})]}),(0,Hi.jsx)(`button`,{type:`submit`,className:`btn btn-dark w-100`,children:`Login`})]}),(0,Hi.jsx)(`div`,{className:`mt-3 text-center text-muted`,children:(0,Hi.jsxs)(`small`,{children:[`Try: `,(0,Hi.jsx)(`b`,{children:`user1 / pass123`})]})})]})})})})}var Hi,Ui=o((()=>{d(),Hi=w()}));function Wi(){return(0,Gi.jsx)(Gi.Fragment,{children:(0,Gi.jsx)(`div`,{className:`row justify-content-center`,children:(0,Gi.jsx)(`div`,{className:`col-md-6`,children:(0,Gi.jsxs)(`div`,{className:`card p-4`,children:[(0,Gi.jsx)(`h3`,{className:`mb-4`,children:`User Profile: `}),(0,Gi.jsxs)(`p`,{children:[(0,Gi.jsx)(`strong`,{children:`Role:`}),` `]}),(0,Gi.jsx)(`p`,{children:(0,Gi.jsx)(`strong`,{children:`Bio:`})}),(0,Gi.jsx)(`div`,{className:`alert alert-info`}),(0,Gi.jsx)(`a`,{href:`dashboard`,className:`btn btn-secondary mt-3`,children:`Back to Dashboard`})]})})})})}var Gi,Ki=o((()=>{d(),Gi=w()}));function qi(){return(0,Ji.jsx)(Ji.Fragment,{children:(0,Ji.jsxs)(`div`,{className:`card p-4 border-danger`,children:[(0,Ji.jsx)(`h2`,{className:`text-danger`,children:`Admin Control Panel`}),(0,Ji.jsx)(`p`,{children:`This is a highly sensitive area.`}),(0,Ji.jsxs)(`div`,{className:`alert alert-warning`,children:[(0,Ji.jsx)(`strong`,{children:`FLAG:`}),` `]})]})})}var Ji,Yi=o((()=>{d(),Ji=w()}));function Xi(){return(0,Zi.jsxs)(Zi.Fragment,{children:[(0,Zi.jsxs)(`div`,{className:`alert alert-success`,children:[`You are admin. `,(0,Zi.jsx)(`a`,{href:`admin`,children:`Go to Admin Panel`})]}),(0,Zi.jsx)(`div`,{className:`alert alert-secondary`,children:`Standard user account. No administrative features available.`})]})}var Zi,Qi=o((()=>{d(),Zi=w()}));function $i(){return(0,ea.jsx)(ea.Fragment,{children:(0,ea.jsxs)(`div`,{className:`text-center p-5`,children:[(0,ea.jsx)(`h1`,{children:`Welcome`}),(0,ea.jsx)(`a`,{href:`login`,className:`btn btn-primary`,children:`Login`})]})})}var ea,ta=o((()=>{d(),ea=w()}));function na(){return(0,ra.jsx)(ra.Fragment,{children:(0,ra.jsx)(`div`,{className:`row justify-content-center`,children:(0,ra.jsxs)(`div`,{className:`col-md-4 card p-4`,children:[(0,ra.jsx)(`h3`,{children:`Login`}),(0,ra.jsxs)(`form`,{method:`POST`,children:[(0,ra.jsx)(`input`,{type:`text`,name:`username`,className:`form-control mb-2`,placeholder:`Username`}),(0,ra.jsx)(`input`,{type:`password`,name:`password`,className:`form-control mb-2`,placeholder:`Password`}),(0,ra.jsx)(`button`,{className:`btn btn-primary w-100`,children:`Login`})]}),(0,ra.jsx)(`p`,{className:`mt-2 text-muted`,children:`user1 / pass123`})]})})})}var ra,ia=o((()=>{d(),ra=w()}));function aa(){return(0,oa.jsx)(oa.Fragment,{children:(0,oa.jsxs)(`div`,{className:`container mt-5`,children:[(0,oa.jsx)(`h3`,{children:`Developer Console`}),(0,oa.jsxs)(`p`,{children:[`Your User ID: `,(0,oa.jsx)(`code`,{})]}),(0,oa.jsxs)(`p`,{children:[`Test the internal API: `,(0,oa.jsx)(`a`,{href:`api?user_id={/* PHP echo removed */}`,target:`_blank`,children:`api.php?user_id=`})]})]})})}var oa,sa=o((()=>{d(),oa=w()}));function ca(){return(0,la.jsx)(la.Fragment,{children:(0,la.jsxs)(`div`,{className:`container text-center py-5`,children:[(0,la.jsx)(`h1`,{children:`API Development Platform`}),(0,la.jsx)(`p`,{children:`Our API is secure and uses modern endpoints.`}),(0,la.jsx)(`a`,{href:`login`,className:`btn btn-dark`,children:`Login to Console`})]})})}var la,ua=o((()=>{d(),la=w()}));function da(){return(0,fa.jsx)(fa.Fragment,{children:(0,fa.jsx)(`div`,{className:`container mt-5`,children:(0,fa.jsx)(`div`,{className:`row justify-content-center`,children:(0,fa.jsx)(`div`,{className:`col-md-4`,children:(0,fa.jsxs)(`form`,{method:`POST`,children:[(0,fa.jsx)(`h3`,{children:`Login`}),(0,fa.jsx)(`input`,{name:`username`,className:`form-control mb-2`,placeholder:`Username`}),(0,fa.jsx)(`input`,{type:`password`,name:`password`,className:`form-control mb-2`,placeholder:`Password`}),(0,fa.jsx)(`button`,{className:`btn btn-primary w-100`,children:`Login`})]})})})})})}var fa,pa=o((()=>{d(),fa=w()}));function ma(){return(0,ha.jsx)(ha.Fragment,{children:(0,ha.jsxs)(`div`,{className:`html-wrapper`,children:[(0,ha.jsxs)(`div`,{className:`head-wrapper`,children:[(0,ha.jsx)(`title`,{children:`API Hack`}),(0,ha.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,ha.jsx)(`div`,{className:`body-wrapper`})]})})}var ha,ga=o((()=>{d(),ha=w()}));function _a(){return(0,va.jsx)(va.Fragment,{children:(0,va.jsxs)(`div`,{className:`html-wrapper`,children:[(0,va.jsxs)(`div`,{className:`head-wrapper`,children:[(0,va.jsx)(`meta`,{charSet:`UTF-8`}),(0,va.jsx)(`title`,{children:`Nexora | Key Manager`}),(0,va.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,va.jsx)(`div`,{className:`body-wrapper`,children:(0,va.jsxs)(`div`,{className:`container`,children:[(0,va.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Enterprise Key Management`}),(0,va.jsxs)(`div`,{className:`row g-4`,children:[(0,va.jsx)(`div`,{className:`col-md-7`,children:(0,va.jsxs)(`div`,{className:`card p-4 rounded-4 border-0 shadow-sm`,children:[(0,va.jsx)(`h6`,{className:`fw-bold text-muted small mb-3`,children:`PROTECTED BLOB`}),(0,va.jsx)(`div`,{className:`p-3 bg-dark text-warning rounded font-monospace small mb-3`}),(0,va.jsx)(`form`,{method:`GET`,children:(0,va.jsxs)(`div`,{className:`input-group`,children:[(0,va.jsx)(`input`,{type:`text`,name:`k`,className:`form-control`,placeholder:`Enter API Key`}),(0,va.jsx)(`button`,{className:`btn btn-dark`,children:`Decrypt`})]})}),(0,va.jsxs)(`div`,{className:`mt-4 p-3 border-start border-4 border-primary bg-primary bg-opacity-10`,children:[`Result: `,(0,va.jsx)(`code`,{className:`fw-bold`})]})]})}),(0,va.jsx)(`div`,{className:`col-md-5`,children:(0,va.jsxs)(`div`,{className:`card p-4 rounded-4 border-0 shadow-sm bg-info bg-opacity-10 text-info`,children:[(0,va.jsxs)(`h6`,{className:`fw-bold small mb-2`,children:[(0,va.jsx)(`i`,{className:`bi bi-info-circle`}),` Security Notice`]}),(0,va.jsxs)(`p`,{className:`small mb-0 opacity-75`,children:[`All master keys are stored in `,(0,va.jsx)(`code`,{children:`config.php`}),` within a restricted environment. (VULNERABILITY HINT: Search for hardcoded keys in source if you could steal it)`]}),(0,va.jsx)(`hr`,{}),(0,va.jsx)(`small`,{className:`x-small`,children:`Key Policy: NEX-2024-STD-V1`})]})})]})]})})]})})}var va,ya=o((()=>{d(),va=w()}));function ba(){return(0,xa.jsx)(xa.Fragment,{children:(0,xa.jsxs)(`div`,{className:`html-wrapper`,children:[(0,xa.jsxs)(`div`,{className:`head-wrapper`,children:[(0,xa.jsx)(`meta`,{charSet:`UTF-8`}),(0,xa.jsx)(`title`,{children:`Nexora | Encrypted Storage`}),(0,xa.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,xa.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #0f172a; color: #f8fafc; font-family: 'Outfit', sans-serif; }
        .card { background: #1e293b; border: 1px solid #334155; }
    `}})]}),(0,xa.jsx)(`div`,{className:`body-wrapper`,children:(0,xa.jsxs)(`div`,{className:`container`,children:[(0,xa.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Encrypted Secrets Vault`}),(0,xa.jsx)(`div`,{className:`row g-4`,children:(0,xa.jsx)(`div`,{className:`col-md-6`,children:(0,xa.jsxs)(`div`,{className:`card p-4 rounded-4`,children:[(0,xa.jsx)(`h6`,{className:`text-info fw-bold mb-2`}),(0,xa.jsx)(`div`,{className:`bg-black bg-opacity-50 p-3 rounded font-monospace text-warning small`}),(0,xa.jsxs)(`div`,{className:`mt-3 text-muted x-small`,children:[(0,xa.jsx)(`i`,{className:`bi bi-lock-fill`}),` Algorithm: AES-B64-Enterprise`]})]})})})]})})]})})}var xa,Sa=o((()=>{d(),xa=w()}));function Ca(){return(0,wa.jsx)(wa.Fragment,{children:(0,wa.jsxs)(`div`,{className:`html-wrapper`,children:[(0,wa.jsxs)(`div`,{className:`head-wrapper`,children:[(0,wa.jsx)(`meta`,{charSet:`UTF-8`}),(0,wa.jsx)(`title`,{children:`Nexora | Dashboard`}),(0,wa.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,wa.jsx)(`div`,{className:`body-wrapper`,children:(0,wa.jsxs)(`div`,{className:`container`,children:[(0,wa.jsxs)(`div`,{className:`alert alert-success border-0 shadow-sm p-4 rounded-4`,children:[(0,wa.jsxs)(`h5`,{className:`fw-bold`,children:[(0,wa.jsx)(`i`,{className:`bi bi-shield-check`}),` Welcome, `]}),(0,wa.jsx)(`p`,{className:`mb-0`,children:`Your identity has been verified via Nexora Secure Hashing.`})]}),(0,wa.jsx)(`div`,{className:`card border-0 shadow mt-4`,children:(0,wa.jsxs)(`div`,{className:`card-body`,children:[(0,wa.jsx)(`h6`,{className:`fw-bold text-muted small mb-3`,children:`SYSTEM FLAG [ENCRYPTED]`}),(0,wa.jsxs)(`div`,{className:`bg-light p-3 rounded font-monospace`,children:[`FLAG`,a04_weak_hash_01]})]})}),(0,wa.jsx)(`a`,{href:`logout`,className:`btn btn-link mt-4 text-muted small`,children:`Terminate Session`})]})})]})})}var wa,Ta=o((()=>{d(),wa=w()}));function Ea(){return(0,Da.jsx)(Da.Fragment,{children:(0,Da.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Da.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Da.jsx)(`meta`,{charSet:`UTF-8`}),(0,Da.jsx)(`title`,{children:`Nexora | Identity Gateway`}),(0,Da.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Da.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f8fafc; font-family: 'Inter', sans-serif; }
        .login-card { max-width: 400px; margin: 100px auto; border: none; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
    `}})]}),(0,Da.jsx)(`div`,{className:`body-wrapper`,children:(0,Da.jsx)(`div`,{className:`card login-card`,children:(0,Da.jsxs)(`div`,{className:`card-body p-4 text-center`,children:[(0,Da.jsx)(`h4`,{className:`fw-bold mb-4`,children:`Identity Access`}),(0,Da.jsx)(`div`,{className:`alert alert-danger small`}),(0,Da.jsxs)(`form`,{method:`POST`,children:[(0,Da.jsx)(`input`,{type:`text`,name:`username`,className:`form-control mb-3`,placeholder:`Administrator ID`,required:!0}),(0,Da.jsx)(`input`,{type:`password`,name:`password`,className:`form-control mb-4`,placeholder:`Master Password`,required:!0}),(0,Da.jsx)(`button`,{className:`btn btn-dark w-100 py-2`,children:`Decrypt & Authorize`})]}),(0,Da.jsx)(`p`,{className:`mt-4 text-muted x-small opacity-50`,children:`Authorized by Nexora Crypcore v2.1`})]})})})]})})}var Da,Oa=o((()=>{d(),Da=w()}));function ka(){return(0,Aa.jsx)(Aa.Fragment,{children:(0,Aa.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Aa.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Aa.jsx)(`meta`,{charSet:`UTF-8`}),(0,Aa.jsx)(`title`,{children:`Nexora | Identity Tokens`}),(0,Aa.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,Aa.jsx)(`div`,{className:`body-wrapper`,children:(0,Aa.jsxs)(`div`,{className:`container`,style:{maxWidth:`600px`},children:[(0,Aa.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Token verification Service`}),(0,Aa.jsxs)(`div`,{className:`card border-0 shadow-lg bg-dark text-white p-4 rounded-4 mb-4`,children:[(0,Aa.jsx)(`h5`,{className:`fw-bold`,children:`Administrator Access Confirmed`}),(0,Aa.jsxs)(`p`,{children:[`Vault Key: `,(0,Aa.jsxs)(`span`,{className:`bg-warning text-dark px-2 rounded`,children:[`FLAG`,a04_token_predict_03]})]}),(0,Aa.jsx)(`small`,{className:`opacity-50`,children:`Token generated: `})]}),(0,Aa.jsxs)(`div`,{className:`card border-0 shadow p-4 rounded-4 mb-4`,children:[(0,Aa.jsxs)(`form`,{method:`POST`,children:[(0,Aa.jsx)(`label`,{className:`form-label small fw-bold`,children:`Request Session Authorization`}),(0,Aa.jsxs)(`div`,{className:`input-group`,children:[(0,Aa.jsx)(`input`,{type:`text`,name:`user`,className:`form-control`,placeholder:`Enter Employee ID: guest_u1`,required:!0}),(0,Aa.jsx)(`button`,{className:`btn btn-dark`,children:`Issue Token`})]})]}),(0,Aa.jsxs)(`div`,{className:`mt-4 p-3 bg-light rounded text-center small border`,children:[`Your Current Token: `,(0,Aa.jsx)(`code`,{}),(0,Aa.jsx)(`br`,{}),(0,Aa.jsx)(`small`,{className:`text-muted`,children:`Issued on: `})]})]}),(0,Aa.jsx)(`p`,{className:`text-center text-muted x-small opacity-50`,children:`Cryptographic tokens are valid for 24 hours.`})]})})]})})}var Aa,ja=o((()=>{d(),Aa=w()}));function Ma(){return(0,Na.jsxs)(`div`,{style:{fontFamily:`sans-serif`,textAlign:`center`,padding:`50px`},children:[(0,Na.jsx)(`h2`,{children:`Lab DB Connection Error`}),(0,Na.jsx)(`p`,{children:`DB connection error`})]})}var Na,Pa=o((()=>{d(),Na=w()}));function Fa(){return(0,Ia.jsx)(Ia.Fragment,{children:(0,Ia.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Ia.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Ia.jsx)(`meta`,{charSet:`UTF-8`}),(0,Ia.jsx)(`title`,{children:`Nexora | Crash Exploit`}),(0,Ia.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,Ia.jsx)(`div`,{className:`body-wrapper`,children:(0,Ia.jsxs)(`div`,{className:`container`,style:{maxWidth:`800px`},children:[(0,Ia.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Infrastructure Crash Dashboard`}),(0,Ia.jsx)(`a`,{href:`index`,className:`btn btn-outline-danger btn-sm mt-4`,children:`Hot-Reload Kernel`}),(0,Ia.jsxs)(`div`,{className:`card p-5 bg-secondary bg-opacity-10 border-secondary border-opacity-20 text-white rounded-5`,children:[(0,Ia.jsx)(`h4`,{className:`fw-bold mb-4`,children:`Dynamic Instruction Input`}),(0,Ia.jsx)(`form`,{method:`GET`,children:(0,Ia.jsx)(`input`,{type:`text`,name:`exploit`,className:`form-control bg-dark border-secondary text-white mb-4 py-3 font-monospace`,placeholder:`SYS_PING_01`,value:`{/* PHP echo removed */}`})})]})]})})]})})}var Ia,La=o((()=>{d(),Ia=w()}));function Ra(){return(0,za.jsx)(za.Fragment,{children:(0,za.jsxs)(`div`,{className:`html-wrapper`,children:[(0,za.jsxs)(`div`,{className:`head-wrapper`,children:[(0,za.jsx)(`meta`,{charSet:`UTF-8`}),(0,za.jsx)(`title`,{children:`Nexora | Exception Chain`}),(0,za.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,za.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif; }`}})]}),(0,za.jsx)(`div`,{className:`body-wrapper`,children:(0,za.jsxs)(`div`,{className:`container`,style:{maxWidth:`600px`},children:[(0,za.jsx)(`h2`,{className:`fw-bold mb-4 text-white`,children:`Execution Chain Monitor`}),(0,za.jsxs)(`div`,{className:`alert alert-success border-0 p-5 rounded-5 shadow-lg`,children:[(0,za.jsx)(`h4`,{className:`fw-bold`,children:`CHAIN_VALIDATION_BYPASS`}),(0,za.jsx)(`p`,{className:`small`,children:`Administrative instructions accepted skipping Step 1 validation.`}),(0,za.jsx)(`hr`,{}),(0,za.jsxs)(`div`,{className:`fw-bold text-dark`,children:[`CORE_FLAG: FLAG`,a10_chain_break_05]})]}),(0,za.jsx)(`a`,{href:`index`,className:`btn btn-outline-light btn-sm mt-3`,children:`Reset Chain`}),(0,za.jsxs)(`div`,{className:`card p-5 bg-slate-900 border-slate-800 rounded-5 shadow text-white`,children:[(0,za.jsx)(`h5`,{className:`fw-bold mb-4`,children:`Multi-Stage Instruction`}),(0,za.jsxs)(`form`,{method:`POST`,children:[(0,za.jsxs)(`div`,{className:`mb-3`,children:[(0,za.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-1`,children:`STAGING_IDENTIFIER`}),(0,za.jsx)(`input`,{type:`text`,name:`username`,className:`form-control bg-transparent border-slate-700 text-white`,placeholder:`admin`,required:!0})]}),(0,za.jsxs)(`div`,{className:`mb-4`,children:[(0,za.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-1`,children:`PAYLOAD_INPUT`}),(0,za.jsx)(`input`,{type:`text`,name:`input`,className:`form-control bg-transparent border-slate-700 text-white`,placeholder:`standard_task`,required:!0})]}),(0,za.jsx)(`input`,{type:`hidden`,name:`process`,value:`1`}),(0,za.jsx)(`input`,{type:`hidden`,name:`action`,value:`DEPLOY`}),(0,za.jsx)(`button`,{className:`btn btn-primary w-100 py-3 fw-bold shadow`,children:`Initialize Deployment`})]})]})]})})]})})}var za,Ba=o((()=>{d(),za=w()}));function Va(){return(0,Ha.jsx)(Ha.Fragment,{children:(0,Ha.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Ha.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Ha.jsx)(`meta`,{charSet:`UTF-8`}),(0,Ha.jsx)(`title`,{children:`Nexora | Action Validation`}),(0,Ha.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Ha.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f1f5f9; font-family: 'Segoe UI', serif; }`}})]}),(0,Ha.jsx)(`div`,{className:`body-wrapper`,children:(0,Ha.jsxs)(`div`,{className:`container`,style:{maxWidth:`600px`},children:[(0,Ha.jsxs)(`div`,{className:`card border-0 shadow-lg p-5 rounded-5 bg-white text-center`,children:[(0,Ha.jsx)(`h3`,{className:`fw-bold mb-4`,children:`Request Validation Engine`}),(0,Ha.jsx)(`p`,{className:`text-muted small mb-5`,children:`Enter your unique Process ID to begin execution cycle.`}),(0,Ha.jsxs)(`form`,{method:`GET`,className:`mt-4`,children:[(0,Ha.jsx)(`input`,{type:`text`,name:`proc_id`,className:`form-control text-center mb-4 py-3 fw-bold fs-4`,placeholder:`0000`,required:!0}),(0,Ha.jsx)(`button`,{className:`btn btn-primary w-100 py-2 fw-bold shadow`,children:`Initiate Process`})]})]}),(0,Ha.jsx)(`div`,{className:`mt-4 p-3 border border-dashed rounded text-center x-small opacity-50`,children:`Note: Process IDs must be valid Nexora-assigned integers.`})]})})]})})}var Ha,Ua=o((()=>{d(),Ha=w()}));function Wa(){return(0,Ga.jsx)(Ga.Fragment,{children:(0,Ga.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Ga.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Ga.jsx)(`meta`,{charSet:`UTF-8`}),(0,Ga.jsx)(`title`,{children:`Nexora | Verbose Errors`}),(0,Ga.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Ga.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f8fafc; font-family: 'Inter', sans-serif; }`}})]}),(0,Ga.jsx)(`div`,{className:`body-wrapper`,children:(0,Ga.jsxs)(`div`,{className:`container`,style:{maxWidth:`800px`},children:[(0,Ga.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Application Runtime Mirror`}),(0,Ga.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,Ga.jsx)(`h6`,{className:`text-muted small fw-bold mb-3`,children:`RESOURCE_QUERY_INTERFACE`}),(0,Ga.jsx)(`form`,{method:`GET`,className:`mb-0`,children:(0,Ga.jsx)(`div`,{className:`input-group`,children:(0,Ga.jsx)(`input`,{type:`text`,name:`source`,className:`form-control`,placeholder:`app_module.json`,value:`{/* PHP echo removed */}`})})})]}),(0,Ga.jsx)(`div`,{className:`mt-5 text-center x-small text-muted opacity-50`,children:`Platform Error Level: E_ALL | Log: NEX_RUNTIME.log`})]})})]})})}var Ga,Ka=o((()=>{d(),Ga=w()}));function qa(){return(0,Ja.jsx)(Ja.Fragment,{children:(0,Ja.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Ja.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Ja.jsx)(`meta`,{charSet:`UTF-8`}),(0,Ja.jsx)(`title`,{children:`Nexora | Fallback Logic`}),(0,Ja.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Ja.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fbfbfb; font-family: 'Inter', sans-serif; }`}})]}),(0,Ja.jsx)(`div`,{className:`body-wrapper`,children:(0,Ja.jsxs)(`div`,{className:`container`,style:{maxWidth:`600px`},children:[(0,Ja.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Integrity Fallback System`}),(0,Ja.jsxs)(`p`,{className:`mt-4 text-center x-small text-muted opacity-50`,children:[`System requires `,(0,Ja.jsx)(`code`,{children:`perm=user`}),` for baseline access.`]})]})})]})})}var Ja,Ya=o((()=>{d(),Ja=w()}));function Xa(){return(0,Za.jsx)(Za.Fragment,{children:(0,Za.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Za.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Za.jsx)(`meta`,{charSet:`UTF-8`}),(0,Za.jsx)(`title`,{children:`Nexora | Flow Control`}),(0,Za.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Za.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fdfdfd; font-family: 'Inter', sans-serif; }`}})]}),(0,Za.jsx)(`div`,{className:`body-wrapper`,children:(0,Za.jsx)(`div`,{className:`container`,style:{maxWidth:`800px`},children:(0,Za.jsxs)(`p`,{className:`mt-4 text-center x-small text-muted opacity-50`,children:[`Internal Note: Tokens are processed via the `,(0,Za.jsx)(`code`,{children:`token`}),` parameter. Use `,(0,Za.jsx)(`code`,{children:`force_admin=1`}),` for developer testing.`]})})})]})})}var Za,Qa=o((()=>{d(),Za=w()}));function $a(){return(0,eo.jsx)(eo.Fragment,{children:(0,eo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,eo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,eo.jsx)(`meta`,{charSet:`UTF-8`}),(0,eo.jsx)(`title`,{children:`Nexora | Advanced API`}),(0,eo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,eo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f0f2f5; font-family: 'Consolas', monospace; }
        .api-card { border: 1px solid #e2e8f0; border-top: 5px solid #3b82f6; }
    `}})]}),(0,eo.jsx)(`div`,{className:`body-wrapper`,children:(0,eo.jsx)(`div`,{className:`container`,style:{maxWidth:`800px`},children:(0,eo.jsxs)(`div`,{className:`card p-5 api-card shadow-lg rounded-4`,children:[(0,eo.jsxs)(`h4`,{className:`fw-bold text-dark mb-4`,children:[(0,eo.jsx)(`i`,{className:`bi bi-cpu-fill text-primary`}),` Nexora Intel API Interface`]}),(0,eo.jsx)(`p`,{className:`text-muted small mb-5`,children:`Interface for secondary intelligence nodes to fetch sector-specific analytics data.`}),(0,eo.jsx)(`form`,{method:`GET`,className:`row g-3 mb-5`,children:(0,eo.jsxs)(`div`,{className:`col-md-6`,children:[(0,eo.jsx)(`label`,{className:`x-small fw-bold mb-1 opacity-50`,children:`API_KEY`}),(0,eo.jsx)(`input`,{type:`text`,name:`api_key`,className:`form-control`,placeholder:`X-NEX-0091`,value:`{/* PHP echo removed */}`})]})}),(0,eo.jsxs)(`div`,{className:`mt-4 text-center x-small text-muted opacity-50`,children:[`Internal Documentation: `,(0,eo.jsx)(`code`,{children:`/api/v2/docs?token=predictable`})]})]})})})]})})}var eo,to=o((()=>{d(),eo=w()}));function no(){return(0,ro.jsx)(ro.Fragment,{children:(0,ro.jsxs)(`div`,{className:`html-wrapper`,children:[(0,ro.jsxs)(`div`,{className:`head-wrapper`,children:[(0,ro.jsx)(`meta`,{charSet:`UTF-8`}),(0,ro.jsx)(`title`,{children:`Nexora | Logic Builder`}),(0,ro.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,ro.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #0f172a; color: #f8fafc; font-family: 'Outfit', sans-serif; }
        .logic-card { background: #1e293b; border: 2px solid #334155; }
    `}})]}),(0,ro.jsx)(`div`,{className:`body-wrapper`,children:(0,ro.jsx)(`div`,{className:`container`,style:{maxWidth:`800px`},children:(0,ro.jsxs)(`div`,{className:`card logic-card p-5 rounded-5 shadow-2l`,children:[(0,ro.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Enterprise Logic Orchestration`}),(0,ro.jsx)(`p`,{className:`text-muted small mb-5`,children:`Define custom dynamic filtering logic for direct access to the intelligence cluster data streams.`}),(0,ro.jsx)(`div`,{className:`p-4 bg-black bg-opacity-30 rounded-4 border border-dark mb-4`,children:(0,ro.jsxs)(`form`,{method:`GET`,children:[(0,ro.jsx)(`label`,{className:`x-small fw-bold mb-2 text-primary opacity-75`,children:`DYNAMIC_LOGIC_EXPRESSION`}),(0,ro.jsx)(`textarea`,{name:`condition`,className:`form-control bg-transparent border-secondary text-white font-monospace`,rows:`3`,placeholder:`sector_id == 'HQ' AND metric_limit < 500`}),(0,ro.jsx)(`button`,{className:`btn btn-primary w-100 mt-3 py-3 fw-bold`,children:`Evaluate & Query Cluster`})]})}),(0,ro.jsxs)(`div`,{className:`p-4 bg-light bg-opacity-5 rounded-4 border border-secondary border-opacity-20 font-monospace small`,children:[(0,ro.jsx)(`div`,{className:`mb-2 opacity-50 x-small fw-bold`,children:`EVAL_ENGINE_OUTPUT`}),(0,ro.jsx)(`div`,{className:`{/* PHP echo removed */}`})]}),(0,ro.jsxs)(`div`,{className:`mt-5 p-3 bg-primary bg-opacity-10 border border-primary border-opacity-10 rounded-4 x-small text-center`,children:[(0,ro.jsx)(`i`,{className:`bi bi-info-circle me-1`}),` Nexora Logic Engine v4 matches patterns against official NIST-32 logic standard.`]})]})})})]})})}var ro,io=o((()=>{d(),ro=w()}));function ao(){return(0,oo.jsx)(oo.Fragment,{children:(0,oo.jsx)(`div`,{className:`row justify-content-center`,children:(0,oo.jsx)(`div`,{className:`col-md-8`,children:(0,oo.jsxs)(`div`,{className:`card p-5 search-box border-0`,children:[(0,oo.jsx)(`h3`,{className:`fw-bold mb-4`,children:`Internal Employee Directory`}),(0,oo.jsx)(`p`,{className:`text-muted small mb-4`,children:`Secure lookup for enterprise personnel across all global intelligence sectors.`}),(0,oo.jsx)(`form`,{action:`search`,method:`GET`,className:`mb-0`,children:(0,oo.jsxs)(`div`,{className:`input-group`,children:[(0,oo.jsx)(`input`,{type:`text`,name:`name`,className:`form-control form-control-lg bg-light`,placeholder:`Search by name (e.g. John)`,required:!0}),(0,oo.jsx)(`button`,{className:`btn btn-primary px-5 fw-bold`,children:`Query Identity`})]})}),(0,oo.jsxs)(`div`,{className:`mt-4 p-3 bg-light rounded text-center x-small text-muted border border-dashed`,children:[(0,oo.jsx)(`i`,{className:`bi bi-shield-lock me-1`}),` Input validated successfully by Intelligence Gateway`]})]})})})})}var oo,so=o((()=>{d(),oo=w()}));function co(){return(0,lo.jsx)(lo.Fragment,{children:(0,lo.jsx)(`div`,{className:`row justify-content-center`,children:(0,lo.jsxs)(`div`,{className:`col-md-9`,children:[(0,lo.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-4`,children:[(0,lo.jsx)(`h4`,{className:`fw-bold m-0`,children:`Directory Query Results`}),(0,lo.jsx)(`a`,{href:`index`,className:`btn btn-outline-dark btn-sm`,children:`New Search`})]}),(0,lo.jsx)(`div`,{className:`alert alert-danger font-monospace small`}),(0,lo.jsx)(`div`,{className:`card border-0 shadow-sm rounded-4 overflow-hidden`,children:(0,lo.jsx)(`div`,{className:`table-responsive`,children:(0,lo.jsxs)(`table`,{className:`table table-hover mb-0`,children:[(0,lo.jsx)(`thead`,{className:`table-dark`,children:(0,lo.jsxs)(`tr`,{children:[(0,lo.jsx)(`th`,{className:`ps-4`,children:`FULL NAME`}),(0,lo.jsx)(`th`,{children:`POSITION`}),(0,lo.jsx)(`th`,{className:`pe-4`,children:`DEPARTMENT`})]})}),(0,lo.jsxs)(`tbody`,{children:[(0,lo.jsx)(`tr`,{children:(0,lo.jsx)(`td`,{colSpan:`3`,className:`text-center py-5 text-muted`,children:`No personnel matches found.`})}),(0,lo.jsxs)(`tr`,{children:[(0,lo.jsx)(`td`,{className:`ps-4 fw-bold`}),(0,lo.jsx)(`td`,{}),(0,lo.jsx)(`td`,{className:`pe-4`,children:(0,lo.jsx)(`span`,{className:`badge bg-light text-dark border`})})]})]})]})})}),(0,lo.jsxs)(`div`,{className:`mt-4 p-3 bg-white rounded border small text-muted font-monospace`,children:[(0,lo.jsx)(`i`,{className:`bi bi-info-circle me-1`}),` EXEC_LOG: `]})]})})})}var lo,uo=o((()=>{d(),lo=w()}));function fo(){return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(`div`,{className:`html-wrapper`,children:[(0,R.jsxs)(`div`,{className:`head-wrapper`,children:[(0,R.jsx)(`meta`,{charSet:`UTF-8`}),(0,R.jsx)(`title`,{children:`Nexora Intel | Identity`}),(0,R.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,R.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f4f6f9; font-family: 'Inter', sans-serif; }
        .search-box { background: white; border-radius: 15px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    `}})]}),(0,R.jsxs)(`div`,{className:`body-wrapper`,children:[(0,R.jsx)(`nav`,{className:`navbar navbar-dark bg-dark mb-5 p-3`,children:(0,R.jsx)(`div`,{className:`container`,children:(0,R.jsxs)(`a`,{className:`navbar-brand fw-bold`,href:`index`,children:[`NEXORA INTEL `,(0,R.jsx)(`span`,{className:`ms-2 fw-light opacity-50 small`,children:`Internal Directory`})]})})}),(0,R.jsx)(`div`,{className:`container`})]})]})})}var R,po=o((()=>{d(),R=w()}));function mo(){return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(`div`,{className:`row pt-5`,children:[(0,z.jsxs)(`div`,{className:`col-md-3`,children:[(0,z.jsxs)(`div`,{className:`list-group shadow-sm border-0 rounded-4 overflow-hidden`,children:[(0,z.jsx)(`a`,{href:`?dept=Finance`,className:`list-group-item list-group-item-action {/* PHP echo removed */}`,children:`Finance Results`}),(0,z.jsx)(`a`,{href:`?dept=HR`,className:`list-group-item list-group-item-action {/* PHP echo removed */}`,children:`Identity (HR)`}),(0,z.jsx)(`a`,{href:`?dept=Operations`,className:`list-group-item list-group-item-action {/* PHP echo removed */}`,children:`Ops Data`})]}),(0,z.jsxs)(`div`,{className:`mt-4 p-3 bg-white rounded border small opacity-75`,children:[(0,z.jsx)(`h6`,{className:`fw-bold x-small opacity-50 mb-2`,children:`SECURE LOG`}),(0,z.jsx)(`code`,{className:`x-small text-dark text-break`,children:`ID: `})]})]}),(0,z.jsxs)(`div`,{className:`col-md-9`,children:[(0,z.jsx)(`h3`,{className:`fw-bold mb-4`,children:`Enterprise Analytics Reports`}),(0,z.jsx)(`div`,{className:`row g-4`,children:(0,z.jsx)(`div`,{className:`col-md-6`,children:(0,z.jsxs)(`div`,{className:`card border-0 shadow-sm rounded-4 h-100 p-4`,children:[(0,z.jsx)(`h5`,{className:`fw-bold mb-2`}),(0,z.jsxs)(`p`,{className:`small text-muted mb-3`,children:[`Sector: `,(0,z.jsx)(`span`,{className:`badge bg-light text-dark border`})]}),(0,z.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mt-auto border-top pt-3`,children:[(0,z.jsx)(`span`,{className:`x-small fw-bold text-uppercase opacity-50`,children:`Security: `}),(0,z.jsx)(`a`,{href:`view?id={/* PHP echo removed */}`,className:`btn btn-sm btn-dark px-3`,children:`Open Data`})]})]})})})]})]})})}var z,ho=o((()=>{d(),z=w()}));function go(){return(0,_o.jsx)(_o.Fragment,{children:(0,_o.jsx)(`div`,{className:`row justify-content-center py-5`,children:(0,_o.jsxs)(`div`,{className:`col-md-8`,children:[(0,_o.jsx)(`div`,{className:`mb-4`,children:(0,_o.jsxs)(`a`,{href:`index`,className:`btn btn-link text-dark ps-0 small`,children:[(0,_o.jsx)(`i`,{className:`bi bi-arrow-left`}),` Infrastructure Repository`]})}),(0,_o.jsxs)(`div`,{className:`card p-5 border-0 shadow-lg rounded-5 bg-white`,children:[(0,_o.jsx)(`h1`,{className:`fw-bold mb-2`}),(0,_o.jsxs)(`p`,{className:`text-muted small border-bottom pb-4 mb-4`,children:[`Sector: `,` | Analytics Access: `]}),(0,_o.jsx)(`div`,{className:`report-content lh-lg text-secondary`}),(0,_o.jsxs)(`div`,{className:`mt-5 p-4 bg-light rounded-4 border border-dashed font-monospace text-center`,children:[(0,_o.jsx)(`h6`,{className:`fw-bold x-small text-muted mb-2`,children:`CRYPTOGRAPHIC INTEGRITY HASH`}),(0,_o.jsx)(`div`,{className:`text-primary`}),(0,_o.jsx)(`small`,{className:`x-small opacity-50 mt-2 d-block`,children:`Source code: SEC-KEY-`})]})]}),(0,_o.jsx)(`div`,{className:`alert alert-danger`,children:`Report not found.`}),(0,_o.jsx)(`a`,{href:`index`,className:`btn btn-dark`,children:`Back to Repository`})]})})})}var _o,vo=o((()=>{d(),_o=w()}));function yo(){return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(`div`,{className:`html-wrapper`,children:[(0,B.jsxs)(`div`,{className:`head-wrapper`,children:[(0,B.jsx)(`meta`,{charSet:`UTF-8`}),(0,B.jsx)(`title`,{children:`Nexora | Asset Allocation`}),(0,B.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,B.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f1f5f9; font-family: 'Inter', sans-serif; }
        .step-indicator { width: 40px; height: 40px; line-height: 40px; text-align: center; border-radius: 50%; background: #cbd5e1; color: white; display: inline-block; }
        .active { background: #0f172a; }
    `}})]}),(0,B.jsx)(`div`,{className:`body-wrapper`,children:(0,B.jsxs)(`div`,{className:`container`,style:{maxWidth:`600px`},children:[(0,B.jsx)(`h2`,{className:`fw-bold mb-4 text-center`,children:`New Asset Allocation`}),(0,B.jsxs)(`div`,{className:`text-center mb-5 d-flex justify-content-center align-items-center gap-3`,children:[(0,B.jsx)(`div`,{className:`step-indicator {/* PHP echo removed */}`,children:`1`}),(0,B.jsx)(`div`,{className:`progress w-25`,style:{height:`2px`},children:(0,B.jsx)(`div`,{className:`progress-bar bg-dark`,style:{width:`100%`}})}),(0,B.jsx)(`div`,{className:`step-indicator {/* PHP echo removed */}`,children:`2`}),(0,B.jsx)(`div`,{className:`progress w-25`,style:{height:`2px`},children:(0,B.jsx)(`div`,{className:`progress-bar bg-dark`,style:{width:`0%`}})}),(0,B.jsx)(`div`,{className:`step-indicator {/* PHP echo removed */}`,children:`3`})]}),(0,B.jsxs)(`div`,{className:`card p-5 border-0 shadow-sm rounded-5 bg-white`,children:[(0,B.jsxs)(`form`,{method:`POST`,children:[(0,B.jsx)(`h4`,{className:`fw-bold mb-4`,children:`Resource Identification`}),(0,B.jsxs)(`div`,{className:`mb-3`,children:[(0,B.jsx)(`label`,{className:`small fw-bold opacity-50`,children:`ASSET_ID`}),(0,B.jsx)(`input`,{type:`text`,name:`asset_id`,className:`form-control`,placeholder:`NEX-771`,required:!0})]}),(0,B.jsxs)(`div`,{className:`mb-4`,children:[(0,B.jsx)(`label`,{className:`small fw-bold opacity-50`,children:`TARGET_DEPARTMENT`}),(0,B.jsx)(`input`,{type:`text`,name:`department`,className:`form-control`,placeholder:`IT-Security`,required:!0})]}),(0,B.jsx)(`input`,{type:`hidden`,name:`step`,value:`2`}),(0,B.jsx)(`button`,{className:`btn btn-dark w-100 py-3 fw-bold`,children:`Next: Security Clearance`})]}),(0,B.jsxs)(`div`,{className:`text-center py-4`,children:[(0,B.jsx)(`i`,{className:`bi bi-clock-history fs-1 text-warning`}),(0,B.jsx)(`h4`,{className:`fw-bold mt-3`,children:`Verifying Credentials`}),(0,B.jsx)(`p`,{className:`text-muted small`,children:`Our automated system is performing a background check on the allocation request. Please wait...`}),(0,B.jsx)(`div`,{className:`spinner-border text-dark mt-3`,role:`status`})]})]})]})})]})})}var B,bo=o((()=>{d(),B=w()}));function xo(){return(0,So.jsx)(So.Fragment,{children:(0,So.jsxs)(`div`,{className:`html-wrapper`,children:[(0,So.jsxs)(`div`,{className:`head-wrapper`,children:[(0,So.jsx)(`meta`,{charSet:`UTF-8`}),(0,So.jsx)(`title`,{children:`Nexora | Account Management`}),(0,So.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,So.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f4f6f8; font-family: 'Inter', sans-serif; }`}})]}),(0,So.jsx)(`div`,{className:`body-wrapper`,children:(0,So.jsx)(`div`,{className:`container`,style:{maxWidth:`800px`},children:(0,So.jsxs)(`div`,{className:`row g-4`,children:[(0,So.jsx)(`div`,{className:`col-md-6`,children:(0,So.jsxs)(`div`,{className:`card p-4 border-0 shadow-sm rounded-4 h-100`,children:[(0,So.jsx)(`h6`,{className:`fw-bold small opacity-50 mb-3`,children:`SYSTEM STATUS`}),(0,So.jsxs)(`p`,{className:`mb-0 small`,children:[`Authorization Module: `,(0,So.jsx)(`b`,{children:`Active`})]}),(0,So.jsxs)(`p`,{className:`mb-0 small`,children:[`Hybrid Role Engine: `,(0,So.jsx)(`span`,{className:`text-success fw-bold`,children:`v3.4-PRO`})]})]})}),(0,So.jsx)(`div`,{className:`col-md-6`,children:(0,So.jsxs)(`div`,{className:`card p-4 border-0 shadow-sm rounded-4 h-100`,children:[(0,So.jsx)(`h6`,{className:`fw-bold small opacity-50 mb-3`,children:`USER CONTEXT`}),(0,So.jsxs)(`p`,{className:`mb-0 small`,children:[`Current Identity: `,(0,So.jsx)(`code`,{})]}),(0,So.jsxs)(`p`,{className:`mb-0 small`,children:[`Active Role: `,(0,So.jsx)(`span`,{className:`badge bg-dark`})]})]})})]})})})]})})}var So,Co=o((()=>{d(),So=w()}));function wo(){return(0,To.jsx)(To.Fragment,{children:(0,To.jsxs)(`div`,{className:`html-wrapper`,children:[(0,To.jsxs)(`div`,{className:`head-wrapper`,children:[(0,To.jsx)(`meta`,{charSet:`UTF-8`}),(0,To.jsx)(`title`,{children:`Nexora | Expense Approvals`}),(0,To.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,To.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f4f7fa; font-family: 'Inter', sans-serif; }
        .workflow-step { opacity: 0.5; }
        .active-step { opacity: 1; border-left: 4px solid #0d6efd; }
    `}})]}),(0,To.jsx)(`div`,{className:`body-wrapper`,children:(0,To.jsxs)(`div`,{className:`container`,style:{maxWidth:`800px`},children:[(0,To.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Nexora Business Workflow`}),(0,To.jsxs)(`div`,{className:`row g-4`,children:[(0,To.jsxs)(`div`,{className:`col-md-4`,children:[(0,To.jsxs)(`div`,{className:`card p-3 mb-2 {/* PHP echo removed */}`,children:[(0,To.jsx)(`h6`,{className:`fw-bold mb-0 small`,children:`Step 1`}),(0,To.jsx)(`span`,{className:`x-small text-muted`,children:`HR Approval`})]}),(0,To.jsxs)(`div`,{className:`card p-3 mb-2 workflow-step`,children:[(0,To.jsx)(`h6`,{className:`fw-bold mb-0 small`,children:`Step 2`}),(0,To.jsx)(`span`,{className:`x-small text-muted`,children:`Manager Review`})]}),(0,To.jsxs)(`div`,{className:`card p-3 mb-2 {/* PHP echo removed */}`,children:[(0,To.jsx)(`h6`,{className:`fw-bold mb-0 small`,children:`Step 3`}),(0,To.jsx)(`span`,{className:`x-small text-muted`,children:`CFO Finalization`})]})]}),(0,To.jsx)(`div`,{className:`col-md-8`})]})]})})]})})}var To,Eo=o((()=>{d(),To=w()}));function Do(){return(0,Oo.jsx)(Oo.Fragment,{children:(0,Oo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Oo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Oo.jsx)(`meta`,{charSet:`UTF-8`}),(0,Oo.jsx)(`title`,{children:`Nexora | Identity Recovery`}),(0,Oo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Oo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f8fafc; font-family: 'Outfit', sans-serif; }`}})]}),(0,Oo.jsx)(`div`,{className:`body-wrapper`,children:(0,Oo.jsx)(`div`,{className:`container`,style:{maxWidth:`500px`},children:(0,Oo.jsx)(`p`,{className:`mt-4 text-center text-muted small opacity-50`,children:`Identity protection powered by Nexora SecureFlow v2.0`})})})]})})}var Oo,ko=o((()=>{d(),Oo=w()}));function Ao(){return(0,jo.jsx)(jo.Fragment,{children:(0,jo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,jo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,jo.jsx)(`meta`,{charSet:`UTF-8`}),(0,jo.jsx)(`title`,{children:`Nexora | Billing & Discounts`}),(0,jo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,jo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fdfdfd; font-family: 'Segoe UI', sans-serif; }`}})]}),(0,jo.jsx)(`div`,{className:`body-wrapper`,children:(0,jo.jsxs)(`div`,{className:`container`,style:{maxWidth:`600px`},children:[(0,jo.jsxs)(`div`,{className:`card border-0 shadow-lg p-5 rounded-5 mt-5`,children:[(0,jo.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Enterprise Checkout`}),(0,jo.jsxs)(`div`,{className:`d-flex justify-content-between mb-2`,children:[(0,jo.jsx)(`span`,{className:`text-muted`,children:`Software Subscription (Annual)`}),(0,jo.jsxs)(`span`,{className:`fw-bold text-dark`,children:[`$`,`.00`]})]}),(0,jo.jsxs)(`div`,{className:`d-flex justify-content-between text-success mb-4 pb-4 border-bottom`,children:[(0,jo.jsxs)(`span`,{children:[`Enterprise Discount (`,`%)`]}),(0,jo.jsx)(`span`,{children:`-$`})]}),(0,jo.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center`,children:[(0,jo.jsx)(`h4`,{className:`fw-bold m-0`,children:`Total Due`}),(0,jo.jsx)(`h3`,{className:`fw-bold m-0 text-primary`,children:`$`})]}),(0,jo.jsx)(`button`,{className:`btn btn-dark w-100 py-3 mt-5 fw-bold rounded shadow`,children:`Finalize Transaction`})]}),(0,jo.jsxs)(`div`,{className:`mt-4 p-4 text-center small text-muted`,children:[`Internal Note: High-volume partners can apply discounts via the `,(0,jo.jsx)(`code`,{children:`rate`}),` parameter in the partner URL.`]})]})})]})})}var jo,Mo=o((()=>{d(),jo=w()}));function No(){return(0,Po.jsx)(Po.Fragment,{children:(0,Po.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Po.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Po.jsx)(`meta`,{charSet:`UTF-8`}),(0,Po.jsx)(`title`,{children:`Nexora | Feature Activation`}),(0,Po.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Po.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif; }
    `}})]}),(0,Po.jsx)(`div`,{className:`body-wrapper`,children:(0,Po.jsxs)(`div`,{className:`container py-5`,children:[(0,Po.jsx)(`h1`,{className:`fw-bold mb-4`,children:`Nexora Feature Roadmap`}),(0,Po.jsxs)(`div`,{className:`row g-4`,children:[(0,Po.jsx)(`div`,{className:`col-md-6`,children:(0,Po.jsxs)(`div`,{className:`card p-5 bg-dark text-white border-secondary h-100 rounded-5`,children:[(0,Po.jsx)(`h4`,{className:`fw-bold`,children:`Standard Analytics`}),(0,Po.jsx)(`p`,{className:`text-secondary small`,children:`Access to basic infrastructure metrics and logs.`}),(0,Po.jsx)(`button`,{className:`btn btn-outline-secondary disabled w-100 mt-auto`,children:`Active`})]})}),(0,Po.jsx)(`div`,{className:`col-md-6`,children:(0,Po.jsxs)(`div`,{className:`card p-5 {/* PHP echo removed */} h-100 rounded-5 transition`,children:[(0,Po.jsx)(`h4`,{className:`{/* PHP echo removed */} fw-bold`,children:`Enterprise Predictive AI`}),(0,Po.jsx)(`p`,{className:`small`,children:`Real-time threat detection and AI-powered forecasting.`}),(0,Po.jsxs)(`div`,{className:`mt-4 p-3 bg-primary bg-opacity-10 border border-primary text-primary rounded small`,children:[(0,Po.jsx)(`b`,{children:`PREMIUM ACCESS ACTIVATED`}),(0,Po.jsx)(`br`,{}),`SEC_KEY: FLAG`,a06_feature_unlock_04]}),(0,Po.jsx)(`button`,{className:`btn btn-primary w-100 mt-auto py-2 fw-bold`,children:`Explore Analytics`}),(0,Po.jsx)(`p`,{className:`text-danger fw-bold x-small p-2 bg-danger bg-opacity-10 rounded text-center`,children:`UPGRADE REQUIRED`}),(0,Po.jsx)(`button`,{className:`btn btn-outline-secondary w-100 mt-auto`,disabled:!0,children:`Purchase Upgrade`})]})})]}),(0,Po.jsxs)(`div`,{className:`mt-5 p-4 border border-secondary border-dashed rounded-4 text-center text-muted small`,children:[(0,Po.jsx)(`i`,{className:`bi bi-info-circle me-1`}),` Developer Notice: Test enterprise features by enabling the `,(0,Po.jsx)(`code`,{children:`premium`}),` operational flag in the debug URL.`]})]})})]})})}var Po,Fo=o((()=>{d(),Po=w()}));function Io(){return(0,Lo.jsx)(Lo.Fragment,{children:(0,Lo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Lo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Lo.jsx)(`meta`,{charSet:`UTF-8`}),(0,Lo.jsx)(`title`,{children:`Nexora | Integrity Chain`}),(0,Lo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Lo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #fdfdfd; font-family: 'Inter', sans-serif; }
        .step-circle { width: 35px; height: 35px; line-height: 35px; text-align: center; border-radius: 50%; background: #e2e8f0; color: #64748b; font-weight: bold; }
        .active-step { background: #0f172a; color: white; }
    `}})]}),(0,Lo.jsx)(`div`,{className:`body-wrapper`,children:(0,Lo.jsxs)(`div`,{className:`container`,style:{maxWidth:`700px`},children:[(0,Lo.jsx)(`h2`,{className:`fw-bold mb-5 text-center`,children:`Multi-Stage Integrity Pipeline`}),(0,Lo.jsxs)(`div`,{className:`d-flex justify-content-center align-items-center gap-3 mb-5`,children:[(0,Lo.jsx)(`div`,{className:`step-circle {/* PHP echo removed */}`,children:`1`}),(0,Lo.jsx)(`div`,{className:`border-top w-25`}),(0,Lo.jsx)(`div`,{className:`step-circle {/* PHP echo removed */}`,children:`2`}),(0,Lo.jsx)(`div`,{className:`border-top w-25`}),(0,Lo.jsx)(`div`,{className:`step-circle {/* PHP echo removed */}`,children:`3`})]}),(0,Lo.jsxs)(`div`,{className:`card p-5 border-0 shadow-sm rounded-5 bg-white text-center`,children:[(0,Lo.jsx)(`h4`,{className:`fw-bold mb-3`,children:`Payload Staging`}),(0,Lo.jsx)(`p`,{className:`text-muted small`,children:`Select the infrastructure bundle to upload to the staging area.`}),(0,Lo.jsx)(`a`,{href:`?step=2&source=patch_v8.bundle`,className:`btn btn-dark px-5 py-2`,children:`Stage Bundle`}),(0,Lo.jsx)(`h4`,{className:`fw-bold mb-3 text-warning`,children:`Integrity Verification`}),(0,Lo.jsx)(`p`,{className:`text-muted small`,children:`The system is performing a deep-packet inspection and checksum comparison. [IN_PROGRESS]`}),(0,Lo.jsx)(`div`,{className:`spinner-border text-warning mt-3 mb-4`,role:`status`}),(0,Lo.jsx)(`p`,{className:`x-small text-muted mb-0`,children:`System Log: Mirroring patch_v8.bundle to Secure_Vault...`}),(0,Lo.jsx)(`hr`,{className:`my-4`}),(0,Lo.jsx)(`a`,{href:`?step=3&source=patch_v8.bundle&verified=true`,className:`btn btn-outline-dark btn-sm`,children:`Force Release [DEBUG ONLY]`})]}),(0,Lo.jsx)(`div`,{className:`mt-4 text-center x-small text-muted opacity-30`,children:`Secure Pipeline v9.3. Integrity of intermediate stage must be maintained.`})]})})]})})}var Lo,Ro=o((()=>{d(),Lo=w()}));function zo(){return(0,Bo.jsx)(Bo.Fragment,{children:(0,Bo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Bo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Bo.jsx)(`meta`,{charSet:`UTF-8`}),(0,Bo.jsx)(`title`,{children:`Nexora | Signature Core`}),(0,Bo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Bo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #0f172a; color: #94a3b8; font-family: 'Inter', sans-serif; }`}})]}),(0,Bo.jsx)(`div`,{className:`body-wrapper`,children:(0,Bo.jsx)(`div`,{className:`container`,style:{maxWidth:`800px`},children:(0,Bo.jsxs)(`div`,{className:`card p-5 bg-slate-900 border border-slate-800 rounded-5 shadow-2xl`,children:[(0,Bo.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-5`,children:[(0,Bo.jsx)(`h2`,{className:`text-white fw-bold m-0`,children:`Cryptographic Instruction Center`}),(0,Bo.jsx)(`span`,{className:`badge {/* PHP echo removed */} p-2 px-3`})]}),(0,Bo.jsxs)(`form`,{method:`POST`,children:[(0,Bo.jsxs)(`div`,{className:`mb-4`,children:[(0,Bo.jsx)(`label`,{className:`x-small fw-bold mb-2 opacity-50`,children:`INSTRUCTION_SET (PAYLOAD)`}),(0,Bo.jsx)(`input`,{type:`text`,name:`payload`,className:`form-control bg-transparent border-slate-700 text-white font-monospace`,value:`standard_ping_request`,required:!0})]}),(0,Bo.jsxs)(`div`,{className:`mb-4`,children:[(0,Bo.jsx)(`label`,{className:`x-small fw-bold mb-2 opacity-50`,children:`DIGITAL_SIGNATURE (MD5)`}),(0,Bo.jsx)(`input`,{type:`text`,name:`sig`,className:`form-control bg-transparent border-slate-700 text-primary font-monospace`,placeholder:`md5_of_payload`,required:!0})]}),(0,Bo.jsx)(`button`,{className:`btn btn-primary w-100 py-3 fw-bold shadow-lg`,children:`Verify & Execute Instruction`})]}),(0,Bo.jsxs)(`div`,{className:`mt-5 p-4 bg-slate-950 rounded-4 border border-slate-800 text-center x-small opacity-50 font-monospace`,children:[`Developer Debugging Key: Use `,(0,Bo.jsx)(`code`,{children:`md5()`}),` for manual signature calculation.`]})]})})})]})})}var Bo,Vo=o((()=>{d(),Bo=w()}));function Ho(){return(0,Uo.jsx)(Uo.Fragment,{children:(0,Uo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Uo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Uo.jsx)(`meta`,{charSet:`UTF-8`}),(0,Uo.jsx)(`title`,{children:`Nexora | File Checker`}),(0,Uo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Uo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f0f4f8; font-family: 'Segoe UI', serif; }`}})]}),(0,Uo.jsx)(`div`,{className:`body-wrapper`,children:(0,Uo.jsxs)(`div`,{className:`container`,style:{maxWidth:`700px`},children:[(0,Uo.jsxs)(`div`,{className:`card border-0 shadow p-5 rounded-5 bg-white`,children:[(0,Uo.jsx)(`h3`,{className:`fw-bold mb-4`,children:`Package Integrity Monitor`}),(0,Uo.jsx)(`p`,{className:`text-muted small mb-4`,children:`Verify software integrity against the Nexora Global Checksum Registry.`}),(0,Uo.jsx)(`div`,{className:`alert {/* PHP echo removed */} p-4 rounded-4 mb-4 small`}),(0,Uo.jsxs)(`form`,{method:`POST`,children:[(0,Uo.jsxs)(`div`,{className:`mb-3`,children:[(0,Uo.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-1`,children:`DOWNLOADED PACKAGE`}),(0,Uo.jsx)(`select`,{name:`file`,className:`form-select`,children:(0,Uo.jsxs)(`option`,{value:`{/* PHP echo removed */}`,children:[` (`,`)`]})})]}),(0,Uo.jsxs)(`div`,{className:`mb-4`,children:[(0,Uo.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-1`,children:`PROVIDED CHECKSUM (MD5-HEX)`}),(0,Uo.jsx)(`input`,{type:`text`,name:`hash`,className:`form-control`,placeholder:`d41d8cd98f00b204e9800998ecf8427e`,required:!0})]}),(0,Uo.jsx)(`button`,{className:`btn btn-dark w-100 py-2 fw-bold`,children:`Verify Binary Integrity`})]})]}),(0,Uo.jsx)(`p`,{className:`mt-4 text-center x-small text-muted opacity-50`,children:`Authorized Checksum Engine v1.0.8. Cross-verified with NIST.`})]})})]})})}var Uo,Wo=o((()=>{d(),Uo=w()}));function Go(){return(0,Ko.jsx)(Ko.Fragment,{children:(0,Ko.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Ko.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Ko.jsx)(`meta`,{charSet:`UTF-8`}),(0,Ko.jsx)(`title`,{children:`Nexora | Data Trust`}),(0,Ko.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Ko.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fbfbfb; font-family: 'Inter', sans-serif; }`}})]}),(0,Ko.jsx)(`div`,{className:`body-wrapper`,children:(0,Ko.jsx)(`div`,{className:`container`,style:{maxWidth:`600px`},children:(0,Ko.jsxs)(`div`,{className:`card border-0 shadow-lg p-5 rounded-5 bg-white`,children:[(0,Ko.jsx)(`h2`,{className:`fw-bold mb-4 text-center`,children:`Data Integrity Gate`}),(0,Ko.jsxs)(`form`,{method:`POST`,className:`mt-4`,children:[(0,Ko.jsx)(`label`,{className:`x-small fw-bold opacity-50 mb-2`,children:`RAW_DATA_PACKET (JSON)`}),(0,Ko.jsx)(`textarea`,{name:`data`,className:`form-control font-monospace mb-4`,rows:`6`}),(0,Ko.jsx)(`button`,{className:`btn btn-dark w-100 py-3 fw-bold shadow`,children:`Submit and Verify Packet`})]}),(0,Ko.jsx)(`div`,{className:`mt-4 p-3 bg-light rounded text-center x-small opacity-50 italic`,children:`“Trust but Verify” protocol v2.1 active.`})]})})})]})})}var Ko,qo=o((()=>{d(),Ko=w()}));function Jo(){return(0,Yo.jsx)(Yo.Fragment,{children:(0,Yo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Yo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Yo.jsx)(`meta`,{charSet:`UTF-8`}),(0,Yo.jsx)(`title`,{children:`Nexora | Update Importer`}),(0,Yo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Yo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #111827; color: #f9fafb; font-family: 'Consolas', monospace; }`}})]}),(0,Yo.jsx)(`div`,{className:`body-wrapper`,children:(0,Yo.jsxs)(`div`,{className:`container`,style:{maxWidth:`900px`},children:[(0,Yo.jsxs)(`h2`,{className:`fw-bold mb-5`,children:[(0,Yo.jsx)(`i`,{className:`bi bi-cloud-download`}),` Deployment Orchestrator`]}),(0,Yo.jsx)(`div`,{className:`row g-4 mt-2`,children:(0,Yo.jsx)(`div`,{className:`col-md-6`,children:(0,Yo.jsxs)(`div`,{className:`card bg-gray-800 border-gray-700 p-4 rounded-4 h-100 text-white`,style:{background:`#1f2937`,border:`1px solid #374151`},children:[(0,Yo.jsxs)(`div`,{className:`d-flex justify-content-between mb-3`,children:[(0,Yo.jsx)(`span`,{className:`badge {/* PHP echo removed */}`}),(0,Yo.jsx)(`span`,{className:`x-small opacity-50`,children:`v`})]}),(0,Yo.jsx)(`h5`,{className:`fw-bold mb-3`}),(0,Yo.jsx)(`a`,{href:`?source=https://mirrors.nexora.dev/updates/{/* PHP echo removed */}.pkg`,className:`btn btn-outline-primary btn-sm mt-auto py-2 fw-bold`,children:`Import from Mirror`})]})})}),(0,Yo.jsxs)(`div`,{className:`mt-5 text-center x-small opacity-30`,children:[`Internal Note: Developer custom mirror can be injected via the `,(0,Yo.jsx)(`code`,{children:`source`}),` parameter.`]})]})})]})})}var Yo,Xo=o((()=>{d(),Yo=w()}));function Zo(){return(0,Qo.jsx)(Qo.Fragment,{children:(0,Qo.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Qo.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Qo.jsx)(`meta`,{charSet:`UTF-8`}),(0,Qo.jsx)(`title`,{children:`Nexora | Log Injection`}),(0,Qo.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Qo.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fdfdfd; font-family: 'monospace'; font-size: 0.9rem; }`}})]}),(0,Qo.jsx)(`div`,{className:`body-wrapper`,children:(0,Qo.jsxs)(`div`,{className:`container`,style:{maxWidth:`800px`},children:[(0,Qo.jsx)(`h4`,{className:`fw-bold mb-4`,children:`Enterprise Log Processor [v4.1]`}),(0,Qo.jsx)(`div`,{className:`alert alert-info py-4 border-0 shadow-sm rounded-4 mb-4`}),(0,Qo.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,Qo.jsx)(`h6`,{className:`text-muted small fw-bold mb-3`,children:`Audit Stream Monitor`}),(0,Qo.jsx)(`div`,{className:`bg-black text-white p-4 rounded-4 shadow-lg`,style:{height:`400px`,overflowY:`auto`,whiteSpace:`pre-wrap`}})]}),(0,Qo.jsx)(`form`,{method:`GET`,className:`mt-4`,children:(0,Qo.jsxs)(`div`,{className:`input-group`,children:[(0,Qo.jsx)(`span`,{className:`input-group-text bg-light border-0`,children:`Instruction`}),(0,Qo.jsx)(`input`,{type:`text`,name:`input`,className:`form-control`,placeholder:`QUERY_STATUS`,value:``}),(0,Qo.jsx)(`button`,{className:`btn btn-dark`,children:`Log Metadata`})]})})]})})]})})}var Qo,$o=o((()=>{d(),Qo=w()}));function es(){return(0,ts.jsx)(ts.Fragment,{children:(0,ts.jsxs)(`div`,{className:`html-wrapper`,children:[(0,ts.jsxs)(`div`,{className:`head-wrapper`,children:[(0,ts.jsx)(`meta`,{charSet:`UTF-8`}),(0,ts.jsx)(`title`,{children:`Nexora | Audit Events`}),(0,ts.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,ts.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f8fafc; font-family: 'Inter', sans-serif; }
        .log-viewer { background: #1e293b; color: #94a3b8; font-family: 'Consolas', monospace; height: 350px; overflow-y: auto; padding: 20px; border-radius: 12px; }
    `}})]}),(0,ts.jsx)(`div`,{className:`body-wrapper`,children:(0,ts.jsxs)(`div`,{className:`container`,style:{maxWidth:`800px`},children:[(0,ts.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Security Event Collector`}),(0,ts.jsxs)(`div`,{className:`alert alert-success border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,ts.jsx)(`h5`,{className:`fw-bold text-dark`,children:`ADMINISTRATIVE ACCESS GRANTED`}),(0,ts.jsx)(`p`,{className:`mb-0 small text-muted`,children:`You have reached the unrestricted audit core.`}),(0,ts.jsx)(`hr`,{}),(0,ts.jsxs)(`div`,{className:`fw-bold text-danger`,children:[`SYSTEM_FLAG: FLAG`,a09_missing_logs_01]})]}),(0,ts.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,ts.jsx)(`h6`,{className:`text-muted small fw-bold mb-3`,children:`CONSOLIDATED AUDIT TRAIL`}),(0,ts.jsx)(`div`,{className:`log-viewer mb-4`,children:(0,ts.jsx)(`div`,{className:`mb-1 small`,children:` `})}),(0,ts.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center`,children:[(0,ts.jsx)(`span`,{className:`x-small text-muted italic`,children:`Total events captured: `}),(0,ts.jsx)(`a`,{href:`?action=escalate`,className:`btn btn-outline-dark btn-sm`,children:`Request Root Elevation`})]})]}),(0,ts.jsx)(`div`,{className:`mt-5 text-center x-small text-muted opacity-50`,children:`Audit logging powered by Nexora LogStream v8.2.3`})]})})]})})}var ts,ns=o((()=>{d(),ts=w()}));function rs(){return(0,is.jsx)(is.Fragment,{children:(0,is.jsxs)(`div`,{className:`html-wrapper`,children:[(0,is.jsxs)(`div`,{className:`head-wrapper`,children:[(0,is.jsx)(`meta`,{charSet:`UTF-8`}),(0,is.jsx)(`title`,{children:`Nexora | Task Logging`}),(0,is.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,is.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #f1f5f9; font-family: 'Segoe UI', serif; }`}})]}),(0,is.jsx)(`div`,{className:`body-wrapper`,children:(0,is.jsxs)(`div`,{className:`container`,style:{maxWidth:`650px`},children:[(0,is.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,is.jsx)(`h4`,{className:`fw-bold mb-3 text-center`,children:`Development Task Runner`}),(0,is.jsx)(`p`,{className:`text-muted small text-center mb-4`,children:`Select a system task to execute within the Nexora environment.`}),(0,is.jsxs)(`div`,{className:`d-flex gap-2 justify-content-center mb-4`,children:[(0,is.jsx)(`a`,{href:`?task=SYNC_DATA`,className:`btn btn-dark btn-sm px-4`,children:`Sync Data`}),(0,is.jsx)(`a`,{href:`?task=RELOAD_NODES`,className:`btn btn-dark btn-sm px-4`,children:`Reload Nodes`}),(0,is.jsx)(`a`,{href:`?task=GET_SECRET_KEY`,className:`btn btn-primary btn-sm px-4 fw-bold`,children:`Reveal Secret`})]}),(0,is.jsx)(`div`,{className:`alert alert-info py-2 small text-center`})]}),(0,is.jsx)(`div`,{className:`card border-0 shadow-sm rounded-4 overflow-hidden`,children:(0,is.jsxs)(`div`,{className:`bg-dark text-success p-3 small font-monospace`,style:{height:`200px`,overflowY:`auto`},children:[(0,is.jsx)(`div`,{className:`opacity-50 mb-2 border-bottom border-secondary pb-1`,children:`[SYSTEM_ACTIVITY_LOG]`}),(0,is.jsxs)(`div`,{className:`text-warning fw-bold mt-2`,children:[` UNAUTHORIZED_REVEAL: FLAG`,a09_weak_logging_02]})]})}),(0,is.jsx)(`p`,{className:`mt-4 text-center x-small text-muted opacity-50`,children:`Note: All tasks are logged for non-repudiation purposes.`})]})})]})})}var is,as=o((()=>{d(),is=w()}));function os(){return(0,ss.jsx)(ss.Fragment,{children:(0,ss.jsxs)(`div`,{className:`html-wrapper`,children:[(0,ss.jsxs)(`div`,{className:`head-wrapper`,children:[(0,ss.jsx)(`meta`,{charSet:`UTF-8`}),(0,ss.jsx)(`title`,{children:`Nexora | Alert Monitor`}),(0,ss.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,ss.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #0f172a; color: #cbd5e1; font-family: 'Inter', sans-serif; }`}})]}),(0,ss.jsx)(`div`,{className:`body-wrapper`,children:(0,ss.jsxs)(`div`,{className:`container`,style:{maxWidth:`700px`},children:[(0,ss.jsx)(`h3`,{className:`fw-bold mb-4 text-white`,children:`Central Security Monitoring`}),(0,ss.jsxs)(`div`,{className:`alert alert-danger border-0 shadow-lg p-5 rounded-5 animate__animated animate__shakeX`,children:[(0,ss.jsxs)(`h4`,{className:`fw-bold`,children:[(0,ss.jsx)(`i`,{className:`bi bi-exclamation-triangle-fill`}),` INTRUSION ALERT`]}),(0,ss.jsx)(`p`,{className:`mb-0 small`})]}),(0,ss.jsxs)(`div`,{className:`card p-5 bg-slate-800 border-0 rounded-5 shadow text-center`,style:{background:`#1e293b`},children:[(0,ss.jsxs)(`h5`,{className:`text-white fw-bold mb-3`,children:[`Monitoring Status: `,(0,ss.jsx)(`span`,{className:`text-success`,children:`NOMINAL`})]}),(0,ss.jsxs)(`p`,{className:`small text-muted mb-4 text-break`,children:[`Attempted failures in current window: `,` / 5`]}),(0,ss.jsxs)(`div`,{className:`d-flex justify-content-center gap-3`,children:[(0,ss.jsx)(`a`,{href:`?retry=1`,className:`btn btn-outline-light btn-sm px-4`,children:`Perform Secure Trial`}),(0,ss.jsx)(`a`,{href:`?retry=1&bypass_bypass=1`,className:`btn btn-outline-primary btn-sm px-4 fw-bold`,children:`Manual Probe (Logged)`})]})]}),(0,ss.jsxs)(`div`,{className:`mt-5 p-4 bg-primary bg-opacity-10 border border-primary border-opacity-10 rounded-4 text-center x-small`,children:[(0,ss.jsx)(`i`,{className:`bi bi-info-circle me-1`}),` Admin Hinweis: Internal testing requires bypassing the alert counter via `,(0,ss.jsx)(`code`,{children:`reset_counter=1`}),`.`,(0,ss.jsx)(`br`,{}),(0,ss.jsx)(`br`,{}),(0,ss.jsxs)(`span`,{className:`text-success fw-bold`,children:[`BYPASS_SUCCESS: FLAG`,a09_alert_bypass_04]})]})]})})]})})}var ss,cs=o((()=>{d(),ss=w()}));function ls(){return(0,us.jsx)(us.Fragment,{children:(0,us.jsxs)(`div`,{className:`html-wrapper`,children:[(0,us.jsxs)(`div`,{className:`head-wrapper`,children:[(0,us.jsx)(`meta`,{charSet:`UTF-8`}),(0,us.jsx)(`title`,{children:`Nexora | External Collector`}),(0,us.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,us.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`body { background: #fdfdfd; font-family: 'Inter', sans-serif; }`}})]}),(0,us.jsx)(`div`,{className:`body-wrapper`,children:(0,us.jsxs)(`div`,{className:`container`,style:{maxWidth:`800px`},children:[(0,us.jsx)(`h2`,{className:`fw-bold mb-4`,children:`Enterprise Event Sink`}),(0,us.jsx)(`div`,{className:`alert alert-danger font-monospace small`}),(0,us.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,us.jsx)(`h6`,{className:`text-muted small fw-bold mb-3 text-uppercase opacity-50`,children:`Log Submit Portal`}),(0,us.jsx)(`form`,{method:`POST`,children:(0,us.jsxs)(`div`,{className:`input-group`,children:[(0,us.jsx)(`input`,{type:`text`,name:`log_entry`,className:`form-control`,placeholder:`Reporting system status: OK`,required:!0}),(0,us.jsx)(`button`,{className:`btn btn-dark`,children:`Append to Audit`})]})})]}),(0,us.jsx)(`div`,{className:`bg-black text-info p-4 rounded-4 shadow-lg font-monospace small`,style:{height:`350px`,overflowY:`auto`}})]})})]})})}var us,ds=o((()=>{d(),us=w()}));function fs(){return(0,ps.jsx)(ps.Fragment,{children:(0,ps.jsxs)(`div`,{className:`card p-4 border-danger shadow`,children:[(0,ps.jsx)(`h3`,{className:`text-danger`,children:`LEGACY ADMIN PANEL`}),(0,ps.jsx)(`hr`,{}),(0,ps.jsxs)(`div`,{className:`alert alert-warning`,children:[(0,ps.jsx)(`strong`,{children:`Warning:`}),` This panel is pending deletion. Please migrate all data to the new dashboard immediately.`]}),(0,ps.jsx)(`h5`,{children:`System Flag Retrieval:`}),(0,ps.jsx)(`div`,{className:`bg-dark text-white p-3 rounded mt-2`,children:(0,ps.jsx)(`code`,{children:`SYSTEM_FLAG: `})}),(0,ps.jsx)(`div`,{className:`mt-4`,children:(0,ps.jsx)(`a`,{href:`dashboard`,className:`btn btn-outline-danger btn-sm`,children:`Return to Main Portal`})})]})})}var ps,ms=o((()=>{d(),ps=w()}));function hs(){return(0,gs.jsxs)(gs.Fragment,{children:[(0,gs.jsx)(`div`,{className:`alert alert-secondary`,children:`Viewing guest records... (Admin access required for sensitive data)`}),(0,gs.jsx)(`div`,{className:`mt-4 border p-3 rounded bg-white`,children:(0,gs.jsx)(`p`,{className:`text-muted`,children:`No records found for current user role.`})})]})}var gs,_s=o((()=>{d(),gs=w()}));function vs(){return(0,ys.jsx)(ys.Fragment,{children:(0,ys.jsxs)(`div`,{className:`card p-5 shadow-sm text-center`,children:[(0,ys.jsx)(`h2`,{children:`HR Employee Management Portal`}),(0,ys.jsx)(`p`,{className:`mt-3`,children:`A secure portal for managing employee records and payroll.`}),(0,ys.jsx)(`div`,{className:`mt-4`,children:(0,ys.jsx)(`a`,{href:`login`,className:`btn btn-secondary px-5`,children:`Login`})})]})})}var ys,bs=o((()=>{d(),ys=w()}));function xs(){return(0,Ss.jsx)(Ss.Fragment,{children:(0,Ss.jsx)(`div`,{className:`row justify-content-center`,children:(0,Ss.jsxs)(`div`,{className:`col-md-4 card p-4 shadow`,children:[(0,Ss.jsx)(`h3`,{children:`HR Login`}),(0,Ss.jsx)(`form`,{method:`POST`,children:(0,Ss.jsx)(`button`,{className:`btn btn-secondary w-100`,children:`Guest Pass`})})]})})})}var Ss,Cs=o((()=>{d(),Ss=w()}));function ws(){return(0,Ts.jsx)(Ts.Fragment,{children:(0,Ts.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Ts.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Ts.jsx)(`title`,{children:`Corporate HR`}),(0,Ts.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,Ts.jsxs)(`div`,{className:`body-wrapper`,children:[(0,Ts.jsx)(`nav`,{className:`navbar navbar-dark bg-secondary mb-4`,children:(0,Ts.jsx)(`div`,{className:`container`,children:(0,Ts.jsx)(`a`,{className:`navbar-brand`,children:`HRPortal`})})}),(0,Ts.jsx)(`div`,{className:`container`})]})]})})}var Ts,Es=o((()=>{d(),Ts=w()}));function Ds(){return(0,Os.jsxs)(Os.Fragment,{children:[(0,Os.jsx)(`div`,{className:`alert alert-info`,children:`Dashboard Access Granted. Current Env: `}),(0,Os.jsx)(`p`,{children:`Sensitive operations are locked. System backup scheduled for tomorrow.`}),(0,Os.jsx)(`p`,{className:`small text-muted`,children:`Maintenance Note: System logs archived at /system/backups/`})]})}var Os,ks=o((()=>{d(),Os=w()}));function As(){return(0,js.jsx)(js.Fragment,{children:(0,js.jsxs)(`div`,{className:`container`,children:[(0,js.jsx)(`h1`,{className:`display-3 fw-bold`,children:`Enterprise Cloud Console`}),(0,js.jsx)(`p`,{className:`lead`,children:`Secure multi-cloud management for modern enterprises.`}),(0,js.jsx)(`div`,{className:`mt-5`,children:(0,js.jsx)(`a`,{href:`login`,className:`btn btn-outline-light btn-lg`,children:`Admin Login`})})]})})}var js,Ms=o((()=>{d(),js=w()}));function Ns(){return(0,Ps.jsx)(Ps.Fragment,{children:(0,Ps.jsx)(`div`,{className:`row justify-content-center`,children:(0,Ps.jsx)(`div`,{className:`col-md-4`,children:(0,Ps.jsxs)(`div`,{className:`card bg-secondary p-4 shadow-lg text-start`,children:[(0,Ps.jsx)(`h3`,{className:`mb-3`,children:`Login`}),(0,Ps.jsxs)(`form`,{method:`POST`,children:[(0,Ps.jsx)(`input`,{name:`u`,className:`form-control mb-3`,placeholder:`Username`}),(0,Ps.jsx)(`input`,{type:`password`,name:`p`,className:`form-control mb-3`,placeholder:`Password`}),(0,Ps.jsx)(`button`,{className:`btn btn-primary w-100`,children:`Sign In`})]})]})})})})}var Ps,Fs=o((()=>{d(),Ps=w()}));function Is(){return(0,Ls.jsx)(Ls.Fragment,{children:(0,Ls.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Ls.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Ls.jsx)(`title`,{children:`Asset Manager`}),(0,Ls.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,Ls.jsx)(`div`,{className:`body-wrapper`})]})})}var Ls,Rs=o((()=>{d(),Ls=w()}));function zs(){return(0,Bs.jsx)(Bs.Fragment,{children:(0,Bs.jsx)(`div`,{className:`row`,children:(0,Bs.jsx)(`div`,{className:`col-md-12`,children:(0,Bs.jsxs)(`div`,{className:`card shadow p-4`,children:[(0,Bs.jsxs)(`h2`,{className:`fw-bold`,children:[`Welcome, `,`!`]}),(0,Bs.jsxs)(`p`,{className:`text-muted`,children:[`Current System Status: `,(0,Bs.jsx)(`span`,{className:`badge bg-success`,children:`Production`})]}),(0,Bs.jsx)(`hr`,{}),(0,Bs.jsx)(`p`,{children:`Your access level is restricted. Only basic analytics are visible.`}),(0,Bs.jsxs)(`div`,{className:`row mt-4`,children:[(0,Bs.jsx)(`div`,{className:`col-md-4`,children:(0,Bs.jsxs)(`div`,{className:`p-3 border rounded text-center`,children:[(0,Bs.jsx)(`h4`,{className:`fw-bold`,children:`124`}),(0,Bs.jsx)(`small`,{className:`text-muted`,children:`Active Sessions`})]})}),(0,Bs.jsx)(`div`,{className:`col-md-4`,children:(0,Bs.jsxs)(`div`,{className:`p-3 border rounded text-center`,children:[(0,Bs.jsx)(`h4`,{className:`fw-bold`,children:`99.9%`}),(0,Bs.jsx)(`small`,{className:`text-muted`,children:`Uptime`})]})}),(0,Bs.jsx)(`div`,{className:`col-md-4`,children:(0,Bs.jsxs)(`div`,{className:`p-3 border rounded text-center`,children:[(0,Bs.jsx)(`h4`,{className:`fw-bold`,children:`0`}),(0,Bs.jsx)(`small`,{className:`text-muted`,children:`Pending Errors`})]})})]})]})})})})}var Bs,Vs=o((()=>{d(),Bs=w()}));function Hs(){return(0,Us.jsx)(Us.Fragment,{children:(0,Us.jsx)(`div`,{className:`row`,children:(0,Us.jsx)(`div`,{className:`col-md-12`,children:(0,Us.jsxs)(`div`,{className:`card shadow p-4 border-danger`,children:[(0,Us.jsx)(`h2`,{className:`text-danger fw-bold`,children:`Internal System Debug`}),(0,Us.jsx)(`p`,{className:`text-muted`,children:`Warning: This page contains sensitive system state information.`}),(0,Us.jsx)(`hr`,{}),(0,Us.jsx)(`h5`,{className:`fw-bold mt-3 text-primary`,children:`Global Constants`}),(0,Us.jsx)(`div`,{className:`bg-dark text-white p-3 rounded`,children:(0,Us.jsx)(`pre`,{children:`DEBUG_MODE: ENABLED PLATFORM_VERSION: 1.0.4-staging SYSTEM_FLAG: `})}),(0,Us.jsx)(`h5`,{className:`fw-bold mt-4 text-primary`,children:`Session Variable Dump`}),(0,Us.jsx)(`div`,{className:`bg-light p-3 rounded border`,children:(0,Us.jsx)(`pre`,{})}),(0,Us.jsx)(`h5`,{className:`fw-bold mt-4 text-primary`,children:`Server Environment Overview`}),(0,Us.jsx)(`div`,{className:`table-responsive`,children:(0,Us.jsx)(`table`,{className:`table table-sm text-muted`,children:(0,Us.jsxs)(`tr`,{children:[(0,Us.jsx)(`td`,{className:`fw-bold`}),(0,Us.jsx)(`td`,{className:`text-break`})]})})})]})})})})}var Us,Ws=o((()=>{d(),Us=w()}));function Gs(){return(0,Ks.jsx)(Ks.Fragment,{children:(0,Ks.jsx)(`div`,{className:`row justify-content-center`,children:(0,Ks.jsxs)(`div`,{className:`col-md-8 text-center pt-5`,children:[(0,Ks.jsx)(`h1`,{className:`display-5 fw-bold text-dark`,children:`Enterprise Resource Portal`}),(0,Ks.jsx)(`p`,{className:`lead text-muted`,children:`A secure environment for internal asset management.`}),(0,Ks.jsx)(`hr`,{className:`my-4`}),(0,Ks.jsx)(`div`,{className:`mt-4`,children:(0,Ks.jsx)(`a`,{href:`login`,className:`btn btn-primary btn-lg px-5 shadow`,children:`Get Started`})})]})})})}var Ks,qs=o((()=>{d(),Ks=w()}));function Js(){return(0,Ys.jsx)(Ys.Fragment,{children:(0,Ys.jsx)(`div`,{className:`row justify-content-center pt-5`,children:(0,Ys.jsx)(`div`,{className:`col-md-4`,children:(0,Ys.jsxs)(`div`,{className:`card shadow p-4`,children:[(0,Ys.jsx)(`h3`,{className:`text-center mb-4 fw-bold`,children:`Login`}),(0,Ys.jsx)(`div`,{className:`alert alert-danger`}),(0,Ys.jsxs)(`form`,{method:`POST`,children:[(0,Ys.jsxs)(`div`,{className:`mb-3`,children:[(0,Ys.jsx)(`label`,{className:`form-label`,children:`Username`}),(0,Ys.jsx)(`input`,{type:`text`,name:`username`,className:`form-control`,placeholder:`user1`,required:!0})]}),(0,Ys.jsxs)(`div`,{className:`mb-3`,children:[(0,Ys.jsx)(`label`,{className:`form-label`,children:`Password`}),(0,Ys.jsx)(`input`,{type:`password`,name:`password`,className:`form-control`,placeholder:`pass123`,required:!0})]}),(0,Ys.jsx)(`button`,{type:`submit`,className:`btn btn-primary w-100 py-2`,children:`Sign In`})]})]})})})})}var Ys,Xs=o((()=>{d(),Ys=w()}));function Zs(){return(0,Qs.jsx)(Qs.Fragment,{children:(0,Qs.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Qs.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Qs.jsx)(`meta`,{charSet:`UTF-8`}),(0,Qs.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,Qs.jsx)(`title`,{children:`A02 - Security Misconfiguration`}),(0,Qs.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Qs.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background-color: #f4f7f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .navbar { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); }
        .card { border: none; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .btn-primary { background: #2a5298; border: none; }
        .btn-primary:hover { background: #1e3c72; }
    `}})]}),(0,Qs.jsxs)(`div`,{className:`body-wrapper`,children:[(0,Qs.jsx)(`nav`,{className:`navbar navbar-expand-lg navbar-dark shadow-sm mb-4`,children:(0,Qs.jsxs)(`div`,{className:`container`,children:[(0,Qs.jsx)(`a`,{className:`navbar-brand fw-bold`,href:`index`,children:`🛡️ OWASP Lab A02`}),(0,Qs.jsx)(`div`,{className:`collapse navbar-collapse`,children:(0,Qs.jsxs)(`ul`,{className:`navbar-nav ms-auto`,children:[(0,Qs.jsx)(`li`,{className:`nav-item`,children:(0,Qs.jsx)(`a`,{className:`nav-link`,href:`dashboard`,children:`Dashboard`})}),(0,Qs.jsx)(`li`,{className:`nav-item`,children:(0,Qs.jsx)(`a`,{className:`nav-link text-danger`,href:`login?logout=1`,children:`Logout`})}),(0,Qs.jsx)(`li`,{className:`nav-item`,children:(0,Qs.jsx)(`a`,{className:`nav-link`,href:`login`,children:`Login`})})]})})]})}),(0,Qs.jsx)(`div`,{className:`container`})]})]})})}var Qs,$s=o((()=>{d(),Qs=w()}));function ec(){return(0,tc.jsxs)(tc.Fragment,{children:[(0,tc.jsx)(`div`,{className:`alert alert-success`,children:`Welcome to the Secure Dashboard!`}),(0,tc.jsx)(`p`,{children:`System is properly configured for production. No leaks detected.`}),(0,tc.jsx)(`p`,{className:`text-muted small`,children:`Reference: Security Misconfiguration (A02)`})]})}var tc,nc=o((()=>{d(),tc=w()}));function rc(){return(0,ic.jsx)(ic.Fragment,{children:(0,ic.jsxs)(`div`,{className:`text-center py-5`,children:[(0,ic.jsx)(`h1`,{children:`Asset Management Gateway`}),(0,ic.jsx)(`p`,{children:`Please log in to manage your corporate assets.`}),(0,ic.jsx)(`a`,{href:`login`,className:`btn btn-primary`,children:`Login Now`})]})})}var ic,ac=o((()=>{d(),ic=w()}));function oc(){return(0,sc.jsx)(sc.Fragment,{children:(0,sc.jsx)(`div`,{className:`row justify-content-center`,children:(0,sc.jsx)(`div`,{className:`col-md-4 card p-4 shadow`,children:(0,sc.jsxs)(`form`,{method:`POST`,children:[(0,sc.jsx)(`h3`,{children:`Login`}),(0,sc.jsx)(`input`,{name:`u`,className:`form-control mb-2`,placeholder:`Admin`}),(0,sc.jsx)(`input`,{type:`password`,name:`p`,className:`form-control mb-2`,placeholder:`Password`}),(0,sc.jsx)(`button`,{className:`btn btn-primary w-100`,children:`Login`})]})})})})}var sc,cc=o((()=>{d(),sc=w()}));function lc(){return(0,uc.jsx)(uc.Fragment,{children:(0,uc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,uc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,uc.jsx)(`title`,{children:`Secure Assets`}),(0,uc.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,uc.jsxs)(`div`,{className:`body-wrapper`,children:[(0,uc.jsx)(`nav`,{className:`navbar navbar-dark bg-primary mb-4`,children:(0,uc.jsxs)(`div`,{className:`container`,children:[(0,uc.jsx)(`a`,{className:`navbar-brand`,href:`index`,children:`AssetPortal`}),(0,uc.jsx)(`div`,{className:`navbar-nav ms-auto`,children:(0,uc.jsx)(`a`,{className:`nav-link`,href:`login?logout=1`,children:`Logout`})})]})}),(0,uc.jsx)(`div`,{className:`container`})]})]})})}var uc,dc=o((()=>{d(),uc=w()}));function fc(){return(0,pc.jsx)(pc.Fragment,{children:(0,pc.jsx)(`div`,{className:`row`,children:(0,pc.jsx)(`div`,{className:`col-md-12`,children:(0,pc.jsxs)(`div`,{className:`card shadow p-4`,children:[(0,pc.jsx)(`h3`,{className:`fw-bold`,children:`Security Audit Results`}),(0,pc.jsx)(`hr`,{}),(0,pc.jsxs)(`div`,{className:`alert alert-warning`,children:[(0,pc.jsx)(`strong`,{children:`Warning:`}),` Several critical security headers are missing from the response.`]}),(0,pc.jsx)(`h5`,{className:`mt-4`,children:`Detected Headers:`}),(0,pc.jsx)(`ul`,{className:`list-group mb-4`,children:(0,pc.jsx)(`li`,{className:`list-group-item`,children:(0,pc.jsx)(`code`,{})})}),(0,pc.jsx)(`h5`,{className:`text-danger mt-4`,children:`Security Recommendations:`}),(0,pc.jsx)(`div`,{className:`p-3 bg-light border rounded`,children:(0,pc.jsxs)(`ul`,{children:[(0,pc.jsxs)(`li`,{children:[`Set `,(0,pc.jsx)(`strong`,{children:`X-Frame-Options: DENY`}),` to prevent Clickjacking.`]}),(0,pc.jsxs)(`li`,{children:[`Set `,(0,pc.jsx)(`strong`,{children:`Content-Security-Policy`}),` to prevent XSS.`]}),(0,pc.jsxs)(`li`,{children:[`Verify: `,(0,pc.jsx)(`code`,{children:`FLAG{6d6973636f6e6669675f3034}`}),` in audit logs.`]})]})})]})})})})}var pc,mc=o((()=>{d(),pc=w()}));function hc(){return(0,gc.jsx)(gc.Fragment,{children:(0,gc.jsx)(`div`,{className:`container py-5`,children:(0,gc.jsxs)(`div`,{className:`card p-4 shadow-sm text-center`,children:[(0,gc.jsx)(`h1`,{className:`text-primary`,children:`HTTP Header Security Auditor`}),(0,gc.jsx)(`p`,{className:`mt-3`,children:`Analyzing your response headers for misconfigurations...`}),(0,gc.jsx)(`hr`,{}),(0,gc.jsx)(`div`,{className:`mt-3`,children:(0,gc.jsx)(`a`,{href:`dashboard`,className:`btn btn-primary`,children:`Run Header Scan`})})]})})})}var gc,_c=o((()=>{d(),gc=w()}));function vc(){return(0,yc.jsx)(yc.Fragment,{children:(0,yc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,yc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,yc.jsx)(`title`,{children:`Header Audit`}),(0,yc.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,yc.jsx)(`div`,{className:`body-wrapper`})]})})}var yc,bc=o((()=>{d(),yc=w()}));function xc(){return(0,Sc.jsxs)(Sc.Fragment,{children:[(0,Sc.jsx)(`div`,{className:`alert alert-info`,children:`Record for ID not found in the local cache.`}),(0,Sc.jsx)(`div`,{className:`alert alert-warning`,children:`Error: Record ID missing. Check system logs at /var/www/internal/logs/error.log`})]})}var Sc,Cc=o((()=>{d(),Sc=w()}));function wc(){return(0,Tc.jsx)(Tc.Fragment,{children:(0,Tc.jsxs)(`div`,{className:`card p-5 text-center`,children:[(0,Tc.jsx)(`h2`,{children:`Internal Records Search`}),(0,Tc.jsxs)(`form`,{action:`dashboard`,method:`GET`,className:`mt-3`,children:[(0,Tc.jsx)(`input`,{type:`text`,name:`id`,className:`form-control mb-3`,placeholder:`Enter Record ID (e.g. 100)`}),(0,Tc.jsx)(`button`,{className:`btn btn-dark w-100`,children:`Search`})]})]})})}var Tc,Ec=o((()=>{d(),Tc=w()}));function Dc(){return(0,Oc.jsx)(Oc.Fragment,{children:(0,Oc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Oc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Oc.jsx)(`title`,{children:`Search Portal`}),(0,Oc.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`})]}),(0,Oc.jsxs)(`div`,{className:`body-wrapper`,children:[(0,Oc.jsx)(`nav`,{className:`navbar navbar-dark bg-dark mb-4`,children:(0,Oc.jsx)(`div`,{className:`container`,children:(0,Oc.jsx)(`a`,{className:`navbar-brand`,children:`SearchDB`})})}),(0,Oc.jsx)(`div`,{className:`container`})]})]})})}var Oc,kc=o((()=>{d(),Oc=w()}));function Ac(){return(0,jc.jsx)(jc.Fragment,{children:(0,jc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,jc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,jc.jsx)(`meta`,{charSet:`UTF-8`}),(0,jc.jsx)(`title`,{children:`Nexora | Module Loader`}),(0,jc.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,jc.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #0f172a; color: #94a3b8; font-family: 'Inter', sans-serif; }
    `}})]}),(0,jc.jsx)(`div`,{className:`body-wrapper`,children:(0,jc.jsx)(`div`,{className:`container`,style:{maxWidth:`700px`},children:(0,jc.jsxs)(`div`,{className:`card bg-slate-900 border border-slate-800 p-5 rounded-5 shadow-2xl`,children:[(0,jc.jsx)(`h2`,{className:`text-white fw-bold mb-4`,children:`Core Module Orchestrator`}),(0,jc.jsx)(`p`,{className:`small mb-5`,children:`Dynamically load internal infrastructure modules for system configuration.`}),(0,jc.jsx)(`div`,{className:`p-4 bg-slate-950 rounded-4 border border-slate-800 mb-4`,children:(0,jc.jsxs)(`form`,{method:`GET`,children:[(0,jc.jsx)(`label`,{className:`x-small fw-bold mb-2`,children:`TARGET MODULE IDENTIFIER`}),(0,jc.jsx)(`div`,{className:`input-group`,children:(0,jc.jsx)(`input`,{type:`text`,name:`module`,className:`form-control bg-transparent border-slate-700 text-white`,placeholder:`network_config.json`,value:`{/* PHP echo removed */}`})})]})}),(0,jc.jsx)(`div`,{className:`mt-5 text-center x-small opacity-50`,children:`Authorized by Nexora Internal Kernel v0.81`})]})})})]})})}var jc,Mc=o((()=>{d(),jc=w()}));function Nc(){return(0,Pc.jsx)(Pc.Fragment,{children:(0,Pc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Pc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Pc.jsx)(`meta`,{charSet:`UTF-8`}),(0,Pc.jsx)(`title`,{children:`Nexora | Signature Bypass`}),(0,Pc.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Pc.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #0c0a09; color: #d6d3d1; font-family: 'JetBrains Mono', monospace; }
        .sig-box { border: 2px solid #292524; background: #1c1917; padding: 40px; border-radius: 24px; box-shadow: 0 0 40px rgba(0,0,0,0.5); }
    `}})]}),(0,Pc.jsx)(`div`,{className:`body-wrapper`,children:(0,Pc.jsxs)(`div`,{className:`container`,style:{maxWidth:`800px`},children:[(0,Pc.jsxs)(`div`,{className:`sig-box mb-5`,children:[(0,Pc.jsx)(`h3`,{className:`text-white fw-bold mb-4`,children:`Enterprise Authenticator`}),(0,Pc.jsx)(`p`,{className:`small text-muted mb-4 text-uppercase fw-bold letter-spacing-1`,children:`Binary Signature Verification System [v8.4]`}),(0,Pc.jsxs)(`form`,{method:`POST`,children:[(0,Pc.jsxs)(`div`,{className:`mb-3`,children:[(0,Pc.jsx)(`label`,{className:`x-small fw-bold opacity-50`,children:`PACKAGE BLOB NAME`}),(0,Pc.jsx)(`input`,{type:`text`,name:`package`,className:`form-control bg-stone-900 border-stone-800 text-stone-300`,value:`NEXORA_OFFICIAL_PATCH_V4`})]}),(0,Pc.jsxs)(`div`,{className:`mb-4`,children:[(0,Pc.jsx)(`label`,{className:`x-small fw-bold opacity-50`,children:`DIGITAL SIGNATURE (MD5-HEX)`}),(0,Pc.jsx)(`input`,{type:`text`,name:`sig`,className:`form-control bg-stone-900 border-stone-800 text-stone-400`,placeholder:`e39f8b... (calculated from official patch)`})]}),(0,Pc.jsx)(`button`,{className:`btn btn-warning w-100 py-3 fw-bold`,children:`Verify & Apply Infrastructure Patches`})]}),(0,Pc.jsxs)(`div`,{className:`mt-5 p-4 bg-stone-950 rounded-4 border border-stone-800 small`,style:{minHeight:`150px`},children:[(0,Pc.jsx)(`span`,{className:`opacity-25`,children:`Auth logs will appear here...`}),(0,Pc.jsx)(`div`,{className:`mb-2`,children:` `})]})]}),(0,Pc.jsx)(`p`,{className:`text-center x-small opacity-30`,children:`© 2024 Nexora Cryptographic Security Division (Simulated)`})]})})]})})}var Pc,Fc=o((()=>{d(),Pc=w()}));function Ic(){return(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(`div`,{className:`html-wrapper`,children:[(0,V.jsxs)(`div`,{className:`head-wrapper`,children:[(0,V.jsx)(`meta`,{charSet:`UTF-8`}),(0,V.jsx)(`title`,{children:`Nexora | Plugin Loader`}),(0,V.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,V.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f8fafc; font-family: 'Inter', sans-serif; }
        .dev-header { background: #0f172a; color: white; padding: 2rem; border-bottom: 4px solid #3b82f6; }
    `}})]}),(0,V.jsxs)(`div`,{className:`body-wrapper`,children:[(0,V.jsx)(`div`,{className:`head-wrapper`,children:(0,V.jsxs)(`div`,{className:`container`,children:[(0,V.jsxs)(`h2`,{className:`fw-bold m-0`,children:[(0,V.jsx)(`i`,{className:`bi bi-cpu`}),` Nexora Hot-Load Portal`]}),(0,V.jsx)(`p`,{className:`m-0 opacity-50 small`,children:`Automated DevOps Integration Layer v4.1`})]})}),(0,V.jsx)(`div`,{className:`container py-5`,children:(0,V.jsxs)(`div`,{className:`row g-4`,children:[(0,V.jsxs)(`div`,{className:`col-md-7`,children:[(0,V.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 mb-4`,children:[(0,V.jsx)(`h5`,{className:`fw-bold mb-4`,children:`Dynamic Module Injection`}),(0,V.jsx)(`p`,{className:`text-muted small`,children:`Enter the official mirror URL for the plugin package you wish to deploy to the Nexora environment.`}),(0,V.jsx)(`form`,{method:`GET`,children:(0,V.jsxs)(`div`,{className:`input-group`,children:[(0,V.jsx)(`input`,{type:`text`,name:`plugin_url`,className:`form-control`,placeholder:`https://mirrors.nexora.dev/plugins/legacy_log.php`}),(0,V.jsx)(`button`,{className:`btn btn-primary px-4`,children:`Deploy Module`})]})}),(0,V.jsxs)(`div`,{className:`mt-4 p-3 bg-light rounded text-center x-small text-muted`,children:[(0,V.jsx)(`i`,{className:`bi bi-shield-check me-1`}),` Nexora Signature Verification Service Active`]})]}),(0,V.jsx)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 bg-dark text-light font-monospace small`,children:(0,V.jsxs)(`div`,{className:`d-flex justify-content-between border-bottom border-secondary pb-2 mb-3`,children:[(0,V.jsx)(`span`,{children:`TERMINAL OUTPUT`}),(0,V.jsx)(`span`,{className:`text-success`,children:`[ONLINE]`})]})})]}),(0,V.jsx)(`div`,{className:`col-md-5`,children:(0,V.jsxs)(`div`,{className:`card border-0 shadow-sm p-4 rounded-4 bg-primary text-white`,children:[(0,V.jsx)(`h6`,{className:`fw-bold mb-3`,children:`Developer Quick-Links`}),(0,V.jsxs)(`ul`,{className:`list-unstyled mb-0 small opacity-75`,children:[(0,V.jsxs)(`li`,{className:`mb-2`,children:[`Official Mirror: `,(0,V.jsx)(`code`,{children:`https://mirrors.nexora.dev/v1`})]}),(0,V.jsxs)(`li`,{className:`mb-2`,children:[`Legacy Assets: `,(0,V.jsx)(`code`,{children:`https://cdn.legacy.nexora.dev/`})]}),(0,V.jsxs)(`li`,{children:[`Support: `,(0,V.jsx)(`code`,{children:`dev-ops@nexora.internal`})]})]})]})})]})})]})]})})}var V,Lc=o((()=>{d(),V=w()}));function Rc(){return(0,zc.jsx)(zc.Fragment,{children:(0,zc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,zc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,zc.jsx)(`meta`,{charSet:`UTF-8`}),(0,zc.jsx)(`title`,{children:`Nexora | Update Center`}),(0,zc.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,zc.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #111827; color: white; font-family: 'Consolas', monospace; }
        .update-box { border: 1px solid #374151; background: #1f2937; margin-top: 50px; }
    `}})]}),(0,zc.jsx)(`div`,{className:`body-wrapper`,children:(0,zc.jsx)(`div`,{className:`container`,style:{maxWidth:`800px`},children:(0,zc.jsxs)(`div`,{className:`card update-box rounded-4 overflow-hidden border-0 shadow-lg`,children:[(0,zc.jsx)(`div`,{className:`bg-primary bg-opacity-20 p-4 border-bottom border-primary border-opacity-30`,children:(0,zc.jsxs)(`h4`,{className:`m-0 fw-bold`,children:[(0,zc.jsx)(`i`,{className:`bi bi-arrow-repeat`}),` Nexora OS Update Center`]})}),(0,zc.jsxs)(`div`,{className:`card-body p-4`,children:[(0,zc.jsx)(`p`,{className:`text-muted small`,children:`Supply an authorized Nexora update mirror host to pull the latest infrastructure patches.`}),(0,zc.jsx)(`form`,{method:`POST`,className:`mb-4`,children:(0,zc.jsxs)(`div`,{className:`input-group`,children:[(0,zc.jsx)(`input`,{type:`text`,name:`update_host`,className:`form-control bg-dark border-secondary text-white`,placeholder:`https://cdn.nexora.dev`,required:!0}),(0,zc.jsx)(`button`,{className:`btn btn-primary px-4 fw-bold`,children:`Pull Update`})]})}),(0,zc.jsxs)(`div`,{className:`bg-black bg-opacity-50 rounded-3 p-4 small`,style:{minHeight:`200px`},children:[(0,zc.jsx)(`span`,{className:`opacity-25`,children:`Ready to receive update instructions...`}),(0,zc.jsx)(`div`,{className:`mb-2 text-info`,children:` `})]})]}),(0,zc.jsxs)(`div`,{className:`card-footer bg-black bg-opacity-30 border-0 p-3 text-center opacity-50 small`,children:[(0,zc.jsx)(`i`,{className:`bi bi-shield-check`}),` FIPS 140-2 Cryptographic Validation Active`]})]})})})]})})}var zc,Bc=o((()=>{d(),zc=w()}));function Vc(){return(0,Hc.jsx)(Hc.Fragment,{children:(0,Hc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Hc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Hc.jsx)(`meta`,{charSet:`UTF-8`}),(0,Hc.jsx)(`title`,{children:`Nexora | Marketplace`}),(0,Hc.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,Hc.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f8fafc; }
        .v-check { color: #3b82f6; cursor: help; }
        .marketplace-header { background: white; border-bottom: 2px solid #e2e8f0; padding: 3rem 0; }
    `}})]}),(0,Hc.jsxs)(`div`,{className:`body-wrapper`,children:[(0,Hc.jsx)(`div`,{className:`marketplace-header mb-5`,children:(0,Hc.jsxs)(`div`,{className:`container text-center`,children:[(0,Hc.jsx)(`h1`,{className:`fw-bold`,children:`Nexora App Marketplace`}),(0,Hc.jsx)(`p`,{className:`text-muted`,children:`Trusted integrations for your DevOps pipeline.`})]})}),(0,Hc.jsxs)(`div`,{className:`container`,style:{maxWidth:`900px`},children:[(0,Hc.jsx)(`div`,{className:`alert alert-info border-0 shadow-sm p-4 rounded-4 mb-5 text-center`}),(0,Hc.jsx)(`div`,{className:`row g-4`,children:(0,Hc.jsx)(`div`,{className:`col-md-4`,children:(0,Hc.jsxs)(`div`,{className:`card h-100 border-0 shadow-sm rounded-4 text-center p-4 hvr-grow`,children:[(0,Hc.jsx)(`div`,{className:`fs-1 text-primary mb-3`,children:(0,Hc.jsx)(`i`,{className:`bi bi-box-seam`})}),(0,Hc.jsx)(`h5`,{className:`fw-bold mb-1`}),(0,Hc.jsx)(`p`,{className:`text-muted small mb-3`,children:`by `}),(0,Hc.jsxs)(`div`,{className:`v-check small fw-bold mb-3 d-block`,children:[(0,Hc.jsx)(`i`,{className:`bi bi-patch-check-fill`}),` VERIFIED BY NEXORA`]}),(0,Hc.jsx)(`div`,{className:`text-muted x-small mb-3 d-block`,children:`COMMUNITY MODULE`}),(0,Hc.jsx)(`a`,{href:`?source=https://marketplace.nexora.dev/download/{/* PHP echo removed */}`,className:`btn btn-outline-primary btn-sm w-100 py-2 fw-bold`,children:`Install & Verify`})]})})})]})]})]})})}var Hc,Uc=o((()=>{d(),Hc=w()}));function Wc(){return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(`div`,{className:`html-wrapper`,children:[(0,H.jsxs)(`div`,{className:`head-wrapper`,children:[(0,H.jsx)(`meta`,{charSet:`UTF-8`}),(0,H.jsx)(`title`,{children:`Nexora | Package Installer`}),(0,H.jsx)(`link`,{href:`https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`,rel:`stylesheet`}),(0,H.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { background: #f0f2f5; font-family: 'Segoe UI', serif; }
        .installer-ui { max-width: 700px; margin: 50px auto; }
        .v-badge { font-size: 0.6rem; padding: 2px 8px; background: #e1f5fe; color: #0288d1; border-radius: 10px; font-weight: bold; }
    `}})]}),(0,H.jsx)(`div`,{className:`body-wrapper`,children:(0,H.jsx)(`div`,{className:`installer-ui`,children:(0,H.jsxs)(`div`,{className:`card border-0 shadow-sm p-5 rounded-5`,children:[(0,H.jsx)(`h3`,{className:`fw-bold mb-1`,children:`Nexora Package Installer`}),(0,H.jsx)(`p`,{className:`text-muted small mb-4`,children:`Enterprise distribution cluster v2.9-beta`}),(0,H.jsxs)(`div`,{className:`p-4 bg-light border border-info border-opacity-25 rounded-4 mb-4`,children:[(0,H.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-3`,children:[(0,H.jsx)(`span`,{className:`small fw-bold text-secondary`,children:`SOURCE CONFIGURATION`}),(0,H.jsxs)(`span`,{className:`v-badge`,children:[(0,H.jsx)(`i`,{className:`bi bi-patch-check-fill`}),` AUTO-VERIFY ACTIVE`]})]}),(0,H.jsxs)(`form`,{method:`GET`,children:[(0,H.jsxs)(`div`,{className:`mb-3`,children:[(0,H.jsx)(`label`,{className:`x-small fw-bold opacity-50`,children:`MIRROR URL`}),(0,H.jsx)(`input`,{type:`text`,name:`install_url`,className:`form-control`,placeholder:`https://nexora.dev/packages/core-tools.tar.gz`,required:!0})]}),(0,H.jsx)(`button`,{className:`btn btn-info text-white w-100 py-2 fw-bold shadow-sm`,children:`Initialize Secure Install`})]})]}),(0,H.jsxs)(`div`,{className:`mt-4`,children:[(0,H.jsx)(`h6`,{className:`fw-bold small opacity-50 mb-3`,children:`INTERNAL TRUSTED MIRRORS`}),(0,H.jsxs)(`div`,{className:`list-group list-group-flush rounded-3 border`,children:[(0,H.jsxs)(`div`,{className:`list-group-item d-flex justify-content-between py-2`,children:[(0,H.jsx)(`span`,{className:`small`,children:`cdn-internal.nexora.infra`}),(0,H.jsxs)(`span`,{className:`text-success small`,children:[(0,H.jsx)(`i`,{className:`bi bi-check2-circle`}),` Official`]})]}),(0,H.jsxs)(`div`,{className:`list-group-item d-flex justify-content-between py-2`,children:[(0,H.jsx)(`span`,{className:`small`,children:`legacy-builds.internal`}),(0,H.jsxs)(`span`,{className:`text-warning small`,children:[(0,H.jsx)(`i`,{className:`bi bi-exclamation-circle`}),` Legacy`]})]})]})]})]})})})]})})}var H,Gc=o((()=>{d(),H=w()}));function Kc(){return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(`div`,{className:`html-wrapper`,children:[(0,U.jsxs)(`div`,{className:`head-wrapper`,children:[(0,U.jsx)(`meta`,{charSet:`UTF-8`}),(0,U.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,U.jsx)(`title`,{children:`Dashboard — EduPortal`}),(0,U.jsx)(`meta`,{name:`description`,content:`Student learning analytics dashboard.`}),(0,U.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,U.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
.dash-wrap{padding:28px 36px;max-width:1300px}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
.grade-letter{font-size:52px;font-weight:900;letter-spacing:-2px;line-height:1}
.ring-wrap{position:relative;display:inline-flex;align-items:center;justify-content:center}
.ring-pct{position:absolute;font-size:17px;font-weight:800;color:var(--text-white)}
.activity-card{padding:24px 26px}
.timeline{padding-top:8px}
.tl-item{display:flex;gap:14px;padding-bottom:18px;position:relative}
.tl-item:not(:last-child)::after{content:'';position:absolute;left:10px;top:22px;bottom:0;width:1px;background:var(--border)}
.tl-dot{width:20px;height:20px;border-radius:50%;background:rgba(108,99,255,.2);border:2px solid var(--primary);flex-shrink:0;position:relative;z-index:1;margin-top:3px}
.tl-dot::after{content:'';width:7px;height:7px;border-radius:50%;background:var(--primary);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
.tl-body{flex:1}
.tl-name{font-size:13px;font-weight:600;color:var(--text-primary)}
.tl-meta{font-size:12px;color:var(--text-muted)}
.empty-timeline{text-align:center;padding:28px;color:var(--text-muted);font-size:13px}

/* Wave Visualization */
.streak-card { position: relative; overflow: hidden; padding: 28px 36px; background: rgba(10,12,30,0.6) !important; border-color: rgba(108,99,255,0.2) !important; }
.wave-box { position: absolute; bottom: 0; left: 0; width: 100%; height: 70%; pointer-events: none; opacity: 0.35; z-index: 0; }
.wave { position: absolute; bottom: 0; left: 0; width: 200%; height: 100%; background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,30 C150,110 350,0 600,30 C850,60 1050,110 1200,30 L1200,120 L0,120 Z" fill="%236c63ff"/></svg>'); background-size: 50% 100%; animation: waveFlow 12s linear infinite; }
.wave:nth-child(2) { opacity: 0.5; height: 90%; animation: waveFlow 8s linear infinite reverse; background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,50 C150,120 350,10 600,50 C850,90 1050,120 1200,50 L1200,120 L0,120 Z" fill="%2300d4aa"/></svg>'); }
@keyframes waveFlow { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.streak-content { position: relative; z-index: 1; display: flex; align-items: center; gap: 20px; width: 100%; }
`}})]}),(0,U.jsxs)(`div`,{className:`body-wrapper`,children:[(0,U.jsx)(`div`,{className:`orb orb-1`}),(0,U.jsx)(`div`,{className:`orb orb-2`}),(0,U.jsxs)(`main`,{className:`main`,children:[(0,U.jsx)(`div`,{className:`topbar`,style:{width:`100%`},children:(0,U.jsxs)(`div`,{className:`topbar-content`,children:[(0,U.jsxs)(`div`,{className:`topbar-left`,style:{},children:[(0,U.jsx)(`h1`,{children:`Welcome back, Data Needed 👋`}),(0,U.jsx)(`p`,{children:`Data Needed`})]}),(0,U.jsxs)(`div`,{className:`topbar-right`,children:[(0,U.jsxs)(`div`,{className:`topbar-bell`,children:[(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,U.jsx)(`path`,{d:`M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0`})}),(0,U.jsx)(`span`,{className:`topbar-bell-dot`})]}),(0,U.jsx)(`div`,{className:`topbar-avatar`,title:`Profile`,onClick:()=>window.location.href=`profile`,children:`Data Needed`})]})]})}),(0,U.jsx)(`div`,{className:`content-wrap`,children:(0,U.jsxs)(`div`,{className:`dash-wrap`,children:[(0,U.jsxs)(`div`,{className:`kpi-grid`,children:[(0,U.jsxs)(`div`,{className:`kpi-card card`,"data-reveal":`up`,"data-delay":`1`,children:[(0,U.jsx)(`div`,{className:`kpi-card-icon kpi-icon-purple`,children:(0,U.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,U.jsx)(`path`,{d:`M9 11l3 3L22 4`}),(0,U.jsx)(`path`,{d:`M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11`})]})}),(0,U.jsx)(`div`,{className:`kpi-label`,children:`Total Tasks`}),(0,U.jsx)(`div`,{className:`kpi-value`,"data-count":`20`,id:`kpi-total`,children:`0`}),(0,U.jsxs)(`div`,{className:`kpi-trend`,children:[(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,style:{width:`13px`,height:`13px`,stroke:`currentColor`,fill:`none`,strokeWidth:`2.5`},children:(0,U.jsx)(`polyline`,{points:`18 15 12 9 6 15`})}),`20 available`]})]}),(0,U.jsxs)(`div`,{className:`kpi-card card`,"data-reveal":`up`,"data-delay":`2`,children:[(0,U.jsx)(`div`,{className:`kpi-card-icon kpi-icon-blue`,children:(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,U.jsx)(`path`,{d:`M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z`})})}),(0,U.jsx)(`div`,{className:`kpi-label`,children:`Python Progress`}),(0,U.jsxs)(`div`,{style:{margin:`8px 0`,display:`flex`,alignItems:`center`,gap:`14px`},children:[(0,U.jsxs)(`div`,{className:`ring-wrap`,"data-ring":`0`,"data-ring-stat":`python`,"data-r":`38`,children:[(0,U.jsxs)(`svg`,{width:`90`,height:`90`,viewBox:`0 0 90 90`,children:[(0,U.jsx)(`circle`,{className:`ring-bg`,cx:`45`,cy:`45`,r:`38`}),(0,U.jsx)(`circle`,{className:`ring-fill`,cx:`45`,cy:`45`,r:`38`,stroke:`var(--info)`,style:{strokeDasharray:`238.76`,strokeDashoffset:`238.76`,transformOrigin:`center`,transform:`rotate(-90deg)`}})]}),(0,U.jsx)(`div`,{className:`ring-pct`,id:`py-ring-pct`,children:`0%`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--text-muted)`},children:`Completed`}),(0,U.jsxs)(`div`,{style:{fontSize:`22px`,fontWeight:`800`,color:`var(--text-white)`},children:[(0,U.jsx)(`span`,{"data-stat-count-py":!0,children:`0`}),`/10`]})]})]})]}),(0,U.jsxs)(`div`,{className:`kpi-card card`,"data-reveal":`up`,"data-delay":`3`,children:[(0,U.jsx)(`div`,{className:`kpi-card-icon kpi-icon-green`,children:(0,U.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,U.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,U.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]})}),(0,U.jsx)(`div`,{className:`kpi-label`,children:`Linux Progress`}),(0,U.jsxs)(`div`,{style:{margin:`8px 0`,display:`flex`,alignItems:`center`,gap:`14px`},children:[(0,U.jsxs)(`div`,{className:`ring-wrap`,"data-ring":`0`,"data-ring-stat":`linux`,"data-r":`38`,children:[(0,U.jsxs)(`svg`,{width:`90`,height:`90`,viewBox:`0 0 90 90`,children:[(0,U.jsx)(`circle`,{className:`ring-bg`,cx:`45`,cy:`45`,r:`38`}),(0,U.jsx)(`circle`,{className:`ring-fill`,cx:`45`,cy:`45`,r:`38`,stroke:`var(--success)`,style:{strokeDasharray:`238.76`,strokeDashoffset:`238.76`,transformOrigin:`center`,transform:`rotate(-90deg)`}})]}),(0,U.jsx)(`div`,{className:`ring-pct`,id:`lx-ring-pct`,children:`0%`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--text-muted)`},children:`Completed`}),(0,U.jsxs)(`div`,{style:{fontSize:`22px`,fontWeight:`800`,color:`var(--text-white)`},children:[(0,U.jsx)(`span`,{"data-stat-count-lx":!0,children:`0`}),`/10`]})]})]})]}),(0,U.jsxs)(`div`,{className:`kpi-card card`,"data-reveal":`up`,"data-delay":`4`,style:{textAlign:`center`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},children:[(0,U.jsx)(`div`,{className:`kpi-card-icon kpi-icon-amber`,style:{margin:`0 auto 10px`},children:(0,U.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,U.jsx)(`polygon`,{points:`12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2`})})}),(0,U.jsx)(`div`,{className:`kpi-label`,children:`Overall Grade`}),(0,U.jsx)(`div`,{className:`grade-letter`,id:`grade-letter`,style:{color:`var(--warning)`},children:`—`}),(0,U.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--text-muted)`,marginTop:`4px`},id:`grade-sub`,children:`Complete tasks to earn`})]})]}),(0,U.jsx)(`div`,{className:`row-wrap`,style:{marginTop:`24px`},children:(0,U.jsxs)(`div`,{className:`card activity-card`,"data-reveal":`up`,style:{minHeight:`500px`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`20px`},children:[(0,U.jsx)(`div`,{style:{fontSize:`18px`,fontWeight:`700`,color:`var(--text-white)`},children:`Recent Activity Tracking`}),(0,U.jsx)(`a`,{href:`tasks`,style:{fontSize:`13px`,color:`var(--primary-light)`},children:`Browse Tasks →`})]}),(0,U.jsx)(`div`,{className:`timeline`,id:`activity-timeline`,children:(0,U.jsx)(`div`,{className:`empty-timeline`,children:`Start your journey to see your activity logs here.`})})]})}),(0,U.jsxs)(`div`,{className:`card streak-card`,"data-reveal":`up`,style:{marginTop:`24px`},children:[(0,U.jsxs)(`div`,{className:`wave-box`,children:[(0,U.jsx)(`div`,{className:`wave`}),(0,U.jsx)(`div`,{className:`wave`})]}),(0,U.jsxs)(`div`,{className:`streak-content`,children:[(0,U.jsx)(`div`,{style:{fontSize:`42px`,filter:`drop-shadow(0 0 10px rgba(255,100,0,0.3))`},children:`🔥`}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`div`,{style:{fontSize:`16px`,fontWeight:`800`,color:`var(--text-white)`,textShadow:`0 2px 10px rgba(0,0,0,0.5)`},children:`Daily Learning Momentum`}),(0,U.jsx)(`div`,{style:{fontSize:`13px`,color:`rgba(255,255,255,0.7)`},children:`Your consistency is your superpower. Keep the wave going!`})]}),(0,U.jsxs)(`div`,{style:{marginLeft:`auto`,textAlign:`right`},children:[(0,U.jsx)(`div`,{className:`streak-num`,id:`streak-num`,style:{textShadow:`0 0 20px var(--primary)`},children:`1`}),(0,U.jsx)(`div`,{className:`streak-label`,style:{color:`var(--text-white)`,opacity:`0.8`},children:`day streak`})]})]})]})]})})]})]})]})})}var U,qc=o((()=>{d(),U=w()}));function Jc(){return(0,Yc.jsx)(Yc.Fragment,{children:(0,Yc.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Yc.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Yc.jsx)(`meta`,{charSet:`UTF-8`}),(0,Yc.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,Yc.jsx)(`title`,{children:`Login — EduPortal`}),(0,Yc.jsx)(`meta`,{name:`description`,content:`Student learning portal login.`}),(0,Yc.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,Yc.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
body{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}
.login-wrap{width:100%;max-width:420px;animation:pageEnter .6s ease both}
.login-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-xl);padding:40px;backdrop-filter:blur(20px);position:relative;overflow:hidden}
.login-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--primary),var(--secondary),var(--primary))}
.login-logo{width:56px;height:56px;border-radius:var(--r-lg);background:linear-gradient(135deg,var(--primary),var(--primary-dark));display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 6px 20px var(--primary-glow)}
.login-logo svg{width:28px;height:28px;stroke:white;fill:none;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}
.login-title{font-size:24px;font-weight:800;color:var(--text-white);text-align:center;letter-spacing:-.5px;margin-bottom:4px}
.login-sub{font-size:14px;color:var(--text-muted);text-align:center;margin-bottom:28px}
.form-group{margin-bottom:16px}
.form-label{display:block;font-size:13px;font-weight:600;color:var(--text-secondary);margin-bottom:7px}
.form-input{width:100%;background:rgba(255,255,255,.04);border:1.5px solid var(--border);border-radius:var(--r-md);padding:12px 16px;color:var(--text-primary);font-family:var(--font-ui);font-size:14px;outline:none;transition:all var(--t-norm)}
.form-input::placeholder{color:var(--text-muted)}
.form-input:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(108,99,255,.15);background:rgba(255,255,255,.06)}
.form-error{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:var(--r-md);padding:10px 14px;font-size:13px;color:var(--danger);margin-bottom:16px;display:flex;align-items:center;gap:8px}
.login-submit{width:100%;padding:13px;border-radius:var(--r-md);background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;font-family:var(--font-ui);transition:all var(--t-norm);letter-spacing:-.1px;position:relative;overflow:hidden}
.login-submit:hover{transform:translateY(-1px);box-shadow:0 8px 25px var(--primary-glow)}
.demo-hint{margin-top:18px;text-align:center;font-size:12px;color:var(--text-muted);background:rgba(255,255,255,.03);border-radius:var(--r-sm);padding:10px;border:1px solid var(--border)}
.demo-hint code{color:var(--primary-light);font-family:var(--font-code)}
`}})]}),(0,Yc.jsxs)(`div`,{className:`body-wrapper`,children:[(0,Yc.jsx)(`div`,{className:`orb orb-1`}),(0,Yc.jsx)(`div`,{className:`orb orb-2`}),(0,Yc.jsx)(`div`,{className:`login-wrap`,children:(0,Yc.jsxs)(`div`,{className:`login-card`,children:[(0,Yc.jsx)(`div`,{className:`login-logo`,children:(0,Yc.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,Yc.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})})}),(0,Yc.jsx)(`h1`,{className:`login-title`,children:`EduPortal`}),(0,Yc.jsx)(`p`,{className:`login-sub`,children:`Sign in to your student account`}),(0,Yc.jsxs)(`form`,{method:`POST`,id:`login-form`,children:[(0,Yc.jsxs)(`div`,{className:`form-group`,children:[(0,Yc.jsx)(`label`,{className:`form-label`,htmlFor:`username`,children:`Username`}),(0,Yc.jsx)(`input`,{type:`text`,id:`username`,name:`username`,className:`form-input`,placeholder:`Enter your username`,required:!0,autoComplete:`username`,defaultValue:``})]}),(0,Yc.jsxs)(`div`,{className:`form-group`,children:[(0,Yc.jsx)(`label`,{className:`form-label`,htmlFor:`password`,children:`Password`}),(0,Yc.jsx)(`input`,{type:`password`,id:`password`,name:`password`,className:`form-input`,placeholder:`Enter your password`,required:!0,autoComplete:`current-password`})]}),(0,Yc.jsx)(`button`,{type:`submit`,className:`login-submit btn`,children:`Sign In →`})]}),(0,Yc.jsxs)(`div`,{className:`demo-hint`,children:[`Demo credentials: `,(0,Yc.jsx)(`code`,{children:`student`}),` / `,(0,Yc.jsx)(`code`,{children:`password`})]})]})})]})]})})}var Yc,Xc=o((()=>{d(),Yc=w()}));function Zc(){return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(`div`,{className:`html-wrapper`,children:[(0,W.jsxs)(`div`,{className:`head-wrapper`,children:[(0,W.jsx)(`meta`,{charSet:`UTF-8`}),(0,W.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,W.jsx)(`title`,{children:`Linux Learning — EduPortal`}),(0,W.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,W.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
.search-sticky{position:sticky;top:0;z-index:200;background:rgba(10,10,20,.90);backdrop-filter:blur(16px);padding:20px 36px;border-bottom:1px solid var(--border)}
.cmds-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:28px 36px;max-width:1300px}
.cmd-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-lg);padding:18px 16px;cursor:pointer;transition:all var(--t-norm)}
.cmd-card:hover{border-color:var(--border-hover);transform:translateY(-3px);box-shadow:var(--shadow-md);background:var(--bg-card-hover)}
.cmd-name{font-family:var(--font-code);font-size:17px;font-weight:700;color:var(--secondary);margin-bottom:5px}
.cmd-card-desc{font-size:12px;color:var(--text-muted);line-height:1.4}
/* Command manual modal */
.cmd-modal-box{background:var(--bg-card-solid);border:1px solid var(--border);border-radius:var(--r-xl);width:92%;max-width:740px;max-height:88vh;overflow-y:auto;transform:scale(.88) translateY(16px);opacity:0;transition:transform var(--t-spring),opacity var(--t-slow)}
.modal-overlay.open .cmd-modal-box{transform:scale(1) translateY(0);opacity:1}
.cmd-syntax-box{background:#0c0c0c;border:1px solid rgba(255,255,255,.06);border-radius:var(--r-md);padding:14px 18px;font-family:var(--font-code);font-size:14px;color:var(--secondary);margin:10px 0}
.flags-table{width:100%;border-collapse:collapse;font-size:13px;margin:10px 0}
.flags-table th{text-align:left;padding:7px 12px;border-bottom:1px solid var(--border);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted)}
.flags-table td{padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.03);color:var(--text-secondary)}
.flags-table td:first-child{font-family:var(--font-code);color:var(--primary-light);width:26%}
.flags-table td:last-child{color:var(--text-muted);font-size:12px}
.ex-box{background:#0c0c0c;border:1px solid rgba(255,255,255,.05);border-radius:var(--r-sm);padding:10px 14px;margin-bottom:8px;display:flex;gap:12px;align-items:flex-start}
.ex-cmd{font-family:var(--font-code);font-size:12px;color:#00ff41;min-width:210px;flex-shrink:0}
.ex-desc{font-size:12px;color:var(--text-muted)}
.related{display:flex;flex-wrap:wrap;gap:8px;padding:14px 28px}
.rel-pill{background:rgba(108,99,255,.1);border:1px solid rgba(108,99,255,.2);color:var(--primary-light);padding:4px 12px;border-radius:var(--r-full);font-family:var(--font-code);font-size:12px;cursor:pointer;transition:all var(--t-fast)}
.rel-pill:hover{background:rgba(108,99,255,.2)}
`}})]}),(0,W.jsxs)(`div`,{className:`body-wrapper`,children:[(0,W.jsx)(`div`,{className:`orb orb-2`}),(0,W.jsxs)(`main`,{className:`main`,children:[(0,W.jsx)(`div`,{className:`topbar`,children:(0,W.jsxs)(`div`,{className:`topbar-content`,children:[(0,W.jsxs)(`div`,{className:`topbar-left`,children:[(0,W.jsxs)(`h1`,{style:{display:`flex`,alignItems:`center`,gap:`15px`},children:[(0,W.jsxs)(`svg`,{style:{width:`24px`,height:`24px`,color:`var(--primary-light)`},viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,W.jsx)(`path`,{d:`m18 16 4-4-4-4`}),(0,W.jsx)(`path`,{d:`m6 8-4 4 4 4`}),(0,W.jsx)(`path`,{d:`m14.5 4-5 16`})]}),`Command Manual reference`]}),(0,W.jsx)(`p`,{style:{paddingLeft:`39px`},children:`Interactive documentation for core bash utilities`})]}),(0,W.jsxs)(`div`,{className:`topbar-right`,children:[(0,W.jsx)(`a`,{href:`terminal`,target:`_blank`,className:`btn btn-success btn-sm`,children:`▶ Launch Terminal`}),(0,W.jsx)(`a`,{href:`profile`,className:`topbar-avatar`})]})]})}),(0,W.jsxs)(`div`,{className:`content-wrap`,children:[(0,W.jsx)(`div`,{className:`search-sticky`,children:(0,W.jsxs)(`div`,{className:`search-wrap`,style:{maxWidth:`520px`,margin:`0 auto`},children:[(0,W.jsx)(`span`,{className:`s-icon`,children:(0,W.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,W.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,W.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]})}),(0,W.jsx)(`input`,{type:`text`,id:`lx-search`,className:`search-input`,placeholder:`Search commands… (e.g. grep, chmod, tar)`})]})}),(0,W.jsx)(`div`,{className:`cmds-grid`,id:`cmds-grid`,children:(0,W.jsxs)(`div`,{className:`cmd-card`,"data-reveal":`up`,"data-cmd":`{/* PHP echo removed */}`,onClick:`showCmd({/* PHP echo removed */})`,children:[(0,W.jsx)(`div`,{className:`cmd-name`}),(0,W.jsx)(`div`,{className:`cmd-card-desc`})]})}),(0,W.jsx)(`div`,{style:{textAlign:`center`,paddingBottom:`44px`},children:(0,W.jsxs)(`a`,{href:`terminal`,target:`_blank`,className:`btn btn-success btn-lg btn-pulse`,children:[(0,W.jsxs)(`svg`,{style:{width:`18px`,height:`18px`,marginRight:`8px`,verticalAlign:`text-top`},viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,W.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`}),(0,W.jsx)(`path`,{d:`m7 8 3 3-3 3`}),(0,W.jsx)(`path`,{d:`M12 14h4`})]}),`Practice in Terminal`]})})]})]}),(0,W.jsx)(`div`,{className:`modal-overlay`,id:`cmd-modal`,children:(0,W.jsxs)(`div`,{className:`cmd-modal-box`,children:[(0,W.jsxs)(`div`,{className:`modal-head`,children:[(0,W.jsx)(`h2`,{className:`modal-title`,id:`cmd-title`,style:{fontFamily:`var(--font-code)`,color:`var(--secondary)`}}),(0,W.jsx)(`button`,{className:`modal-close`,onClick:`closeModal('cmd-modal')`,children:`✕`})]}),(0,W.jsx)(`div`,{className:`modal-body`,id:`cmd-body`}),(0,W.jsx)(`div`,{id:`cmd-related`,className:`related`})]})})]})]})})}var W,Qc=o((()=>{d(),W=w()}));function $c(){return(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(`div`,{className:`html-wrapper`,children:[(0,G.jsxs)(`div`,{className:`head-wrapper`,children:[(0,G.jsx)(`meta`,{charSet:`UTF-8`}),(0,G.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,G.jsx)(`title`,{children:`Linux — EduPortal`}),(0,G.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,G.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
.lx-hero{padding:44px 36px 28px}
.lx-hero h1{font-size:34px;font-weight:900;color:var(--text-white);letter-spacing:-1px;margin-bottom:8px}
.lx-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:0 36px;max-width:1200px}
.lx-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-xl);padding:32px 28px;display:flex;flex-direction:column;align-items:center;text-align:center;transition:all var(--t-norm);position:relative;overflow:hidden;backdrop-filter:blur(12px)}
.lx-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:var(--r-xl) var(--r-xl) 0 0}
.lx-card:nth-child(1)::before{background:linear-gradient(90deg,var(--primary),var(--primary-light))}
.lx-card:nth-child(2)::before{background:linear-gradient(90deg,var(--success),#4ADE80)}
.lx-card:nth-child(3)::before{background:linear-gradient(90deg,var(--secondary),var(--info))}
.lx-card:hover{border-color:var(--border-hover);transform:translateY(-5px);box-shadow:var(--shadow-xl)}
.lx-card-icon{width:72px;height:72px;border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:18px}
.lx-card:nth-child(1) .lx-card-icon{background:rgba(108,99,255,.15)}
.lx-card:nth-child(2) .lx-card-icon{background:rgba(34,197,94,.15)}
.lx-card:nth-child(3) .lx-card-icon{background:rgba(0,212,170,.15)}
.lx-card-title{font-size:19px;font-weight:800;color:var(--text-white);margin-bottom:12px}
.lx-card-text{font-size:14px;color:var(--text-secondary);line-height:1.75;flex:1}
.lx-card-text strong{color:var(--text-primary)}
.cmd-pill{display:inline-block;background:rgba(108,99,255,.12);border:1px solid rgba(108,99,255,.2);color:var(--primary-light);padding:1px 8px;border-radius:4px;font-family:var(--font-code);font-size:12px;margin:1px}
.lx-actions{display:flex;align-items:center;justify-content:center;gap:0;padding:40px 36px;flex-wrap:wrap}
.or-divider{padding:0 20px;color:var(--text-muted);font-size:13px}
/* Terminal */
.terminal-box{background:#0c0c0c;border-radius:var(--r-xl);overflow:hidden;display:flex;flex-direction:column;width:92%;max-width:900px;height:560px;border:1px solid #2a2a2a;box-shadow:0 24px 80px rgba(0,0,0,.85);transform:scale(.88);opacity:0;transition:transform var(--t-spring),opacity var(--t-slow);resize:both;min-width:380px;min-height:280px}
.modal-overlay.open .terminal-box{transform:scale(1);opacity:1}
`}})]}),(0,G.jsxs)(`div`,{className:`body-wrapper`,children:[(0,G.jsx)(`div`,{className:`orb orb-1`}),(0,G.jsxs)(`main`,{className:`main`,children:[(0,G.jsx)(`div`,{className:`topbar`,children:(0,G.jsxs)(`div`,{className:`topbar-content`,children:[(0,G.jsxs)(`div`,{className:`topbar-left`,children:[(0,G.jsx)(`h1`,{children:`Linux`}),(0,G.jsx)(`p`,{children:`Documentation, commands & interactive terminal`})]}),(0,G.jsx)(`div`,{className:`topbar-right`,children:(0,G.jsx)(`a`,{href:`profile`,className:`topbar-avatar`})})]})}),(0,G.jsxs)(`div`,{className:`content-wrap`,children:[(0,G.jsxs)(`div`,{className:`lx-hero`,children:[(0,G.jsx)(`h1`,{children:`🐧 Linux fundamentals`}),(0,G.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:`15px`},children:`Understand the OS that powers the internet, then practice in a real terminal.`})]}),(0,G.jsxs)(`div`,{className:`lx-cards`,children:[(0,G.jsxs)(`div`,{className:`lx-card`,"data-reveal":`left`,"data-delay":`1`,children:[(0,G.jsx)(`div`,{className:`lx-card-icon`,children:`🐧`}),(0,G.jsx)(`div`,{className:`lx-card-title`,children:`What is Linux?`}),(0,G.jsxs)(`div`,{className:`lx-card-text`,children:[`Linux is an open-source, Unix-like operating system kernel first released by `,(0,G.jsx)(`strong`,{children:`Linus Torvalds`}),` in 1991. It forms the core of distributions (distros) like `,(0,G.jsx)(`strong`,{children:`Ubuntu, Fedora, and Debian`}),`. Known for its stability, security, and flexibility, Linux allows users to view, modify, and distribute its source code freely. It powers everything from smartphones (Android) to supercomputers, web servers, and IoT devices.`]})]}),(0,G.jsxs)(`div`,{className:`lx-card`,"data-reveal":`up`,"data-delay":`2`,children:[(0,G.jsx)(`div`,{className:`lx-card-icon`,children:`🖥️`}),(0,G.jsx)(`div`,{className:`lx-card-title`,children:`Purpose & Uses`}),(0,G.jsxs)(`div`,{className:`lx-card-text`,children:[`Linux serves as the backbone of modern computing. Primary uses include: `,(0,G.jsx)(`strong`,{children:`Web Servers`}),` (90%+ of websites run Apache/Nginx on Linux), `,(0,G.jsx)(`strong`,{children:`Cloud Computing`}),` (AWS, GCP, Azure all use Linux), `,(0,G.jsx)(`strong`,{children:`Development`}),` (Python, Java, Node.js work natively), `,(0,G.jsx)(`strong`,{children:`Cybersecurity`}),` (Kali Linux for pen testing), and `,(0,G.jsx)(`strong`,{children:`Embedded Systems`}),` (routers, smart TVs, autonomous vehicles). Its modular design makes it adaptable for any need.`]})]}),(0,G.jsxs)(`div`,{className:`lx-card`,"data-reveal":`right`,"data-delay":`3`,children:[(0,G.jsx)(`div`,{className:`lx-card-icon`,children:`💻`}),(0,G.jsx)(`div`,{className:`lx-card-title`,children:`Commands & Why?`}),(0,G.jsxs)(`div`,{className:`lx-card-text`,children:[`Commands give precise, scriptable control over the OS. Key categories:`,(0,G.jsx)(`br`,{}),(0,G.jsx)(`br`,{}),(0,G.jsx)(`strong`,{children:`File Mgmt:`}),` `,(0,G.jsx)(`span`,{className:`cmd-pill`,children:`ls`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`cd`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`cp`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`mv`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`rm`}),(0,G.jsx)(`br`,{}),(0,G.jsx)(`strong`,{children:`Info:`}),` `,(0,G.jsx)(`span`,{className:`cmd-pill`,children:`top`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`uname`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`df`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`free`}),(0,G.jsx)(`br`,{}),(0,G.jsx)(`strong`,{children:`Network:`}),` `,(0,G.jsx)(`span`,{className:`cmd-pill`,children:`ssh`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`ping`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`wget`}),(0,G.jsx)(`br`,{}),(0,G.jsx)(`strong`,{children:`Security:`}),` `,(0,G.jsx)(`span`,{className:`cmd-pill`,children:`chmod`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`passwd`}),(0,G.jsx)(`span`,{className:`cmd-pill`,children:`sudo`}),(0,G.jsx)(`br`,{}),(0,G.jsx)(`br`,{}),`Commands enable remote server management, automation with bash scripts, and faster operations than any GUI.`]})]})]}),(0,G.jsxs)(`div`,{className:`lx-actions`,children:[(0,G.jsx)(`a`,{href:`linux-learning`,className:`btn btn-primary btn-lg`,children:`Learn Commands →`}),(0,G.jsx)(`span`,{className:`or-divider`,children:`or`}),(0,G.jsx)(`a`,{href:`terminal`,target:`_blank`,className:`btn btn-success btn-lg btn-pulse`,children:`Launch Terminal >_`})]})]})]})]})]})})}var G,el=o((()=>{d(),G=w()}));function tl(){return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(`div`,{className:`html-wrapper`,children:[(0,K.jsxs)(`div`,{className:`head-wrapper`,children:[(0,K.jsx)(`meta`,{charSet:`UTF-8`}),(0,K.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,K.jsx)(`title`,{children:`Profile — EduPortal`}),(0,K.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,K.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
.profile-main { padding: 40px; max-width: 900px; margin: 0 auto; animation: pageIn 0.5s ease both; }
.info-pcard { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-xl); padding: 40px; backdrop-filter: blur(20px); box-shadow: var(--shadow-lg); }
.p-header { display: flex; align-items: center; gap: 32px; margin-bottom: 40px; padding-bottom: 32px; border-bottom: 1px solid var(--border); }
.p-avatar-large { width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; font-size: 40px; box-shadow: 0 10px 30px var(--primary-glow); }
.p-title-wrap h2 { font-size: 28px; font-weight: 800; color: var(--text-white); margin-bottom: 4px; letter-spacing: -0.5px; }
.p-title-wrap p { color: var(--text-muted); font-size: 14px; }

.p-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
.p-detail-item { background: rgba(255,255,255,0.02); padding: 18px 22px; border-radius: var(--r-md); border: 1px solid var(--border); }
.p-detail-label { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
.p-detail-value { font-size: 15px; font-weight: 600; color: var(--text-white); }

.edit-actions { display: flex; gap: 12px; }

/* Edit Modal */
#edit-modal .modal-box { max-width: 460px; padding: 28px; }
.form-group { margin-bottom: 18px; }
.form-label { display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 8px; }
.form-input { width: 100%; background: rgba(255,255,255,0.05); border: 1.5px solid var(--border); padding: 12px 14px; border-radius: var(--r-md); color: #fff; outline: none; transition: all var(--t-norm); font-family: var(--font-ui); }
.form-input:focus { border-color: var(--primary); background: rgba(255,255,255,0.08); }
`}})]}),(0,K.jsxs)(`div`,{className:`body-wrapper`,children:[(0,K.jsx)(`div`,{className:`orb orb-1`}),(0,K.jsx)(`div`,{className:`orb orb-2`}),(0,K.jsxs)(`main`,{className:`main`,children:[(0,K.jsx)(`div`,{className:`topbar`,children:(0,K.jsx)(`div`,{className:`topbar-content`,children:(0,K.jsxs)(`div`,{className:`topbar-left`,children:[(0,K.jsx)(`h1`,{children:`Profile Settings`}),(0,K.jsx)(`p`,{children:`Update your personal information`})]})})}),(0,K.jsx)(`div`,{className:`profile-main`,children:(0,K.jsxs)(`div`,{className:`info-pcard`,style:{marginTop:`10cap`},children:[(0,K.jsxs)(`div`,{className:`p-header`,children:[(0,K.jsx)(`div`,{className:`p-avatar-large`,children:`👨‍💻`}),(0,K.jsxs)(`div`,{className:`p-title-wrap`,children:[(0,K.jsx)(`h2`,{id:`disp-name`}),(0,K.jsx)(`p`,{id:`disp-title`,children:`Computer Science & Engineering Student`})]})]}),(0,K.jsxs)(`div`,{className:`p-details-grid`,children:[(0,K.jsxs)(`div`,{className:`p-detail-item`,children:[(0,K.jsx)(`div`,{className:`p-detail-label`,children:`Full Name`}),(0,K.jsx)(`div`,{className:`p-detail-value`,id:`val-name`})]}),(0,K.jsxs)(`div`,{className:`p-detail-item`,children:[(0,K.jsx)(`div`,{className:`p-detail-label`,children:`Student ID`}),(0,K.jsx)(`div`,{className:`p-detail-value`,children:`STU-2024-XP91`})]}),(0,K.jsxs)(`div`,{className:`p-detail-item`,children:[(0,K.jsx)(`div`,{className:`p-detail-label`,children:`Email Address`}),(0,K.jsx)(`div`,{className:`p-detail-value`,children:`alex.johnson@eduportal.com`})]}),(0,K.jsxs)(`div`,{className:`p-detail-item`,children:[(0,K.jsx)(`div`,{className:`p-detail-label`,children:`Primary Path`}),(0,K.jsx)(`div`,{className:`p-detail-value`,children:`Full-Stack Development`})]})]}),(0,K.jsxs)(`div`,{className:`edit-actions`,children:[(0,K.jsx)(`button`,{className:`btn btn-primary`,onClick:`openModal('edit-modal')`,children:`Edit Profile`}),(0,K.jsx)(`button`,{className:`btn btn-secondary`,onClick:`showToast('Password reset sent to email','info')`,children:`Reset Password`})]})]})})]}),(0,K.jsx)(`div`,{className:`modal-overlay`,id:`edit-modal`,children:(0,K.jsxs)(`div`,{className:`modal-box`,children:[(0,K.jsxs)(`div`,{className:`modal-head`,children:[(0,K.jsx)(`h2`,{className:`modal-title`,children:`Update Information`}),(0,K.jsx)(`button`,{className:`modal-close`,onClick:`closeModal('edit-modal')`,children:`✕`})]}),(0,K.jsxs)(`div`,{className:`modal-body`,children:[(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsx)(`label`,{className:`form-label`,children:`Display Name`}),(0,K.jsx)(`input`,{type:`text`,className:`form-input`,defaultValue:``,id:`edit-name`})]}),(0,K.jsxs)(`div`,{className:`form-group`,children:[(0,K.jsx)(`label`,{className:`form-label`,children:`Professional Title`}),(0,K.jsx)(`input`,{type:`text`,className:`form-input`,value:`Computer Science & Engineering Student`,id:`edit-title`})]}),(0,K.jsx)(`button`,{className:`btn btn-primary`,style:{width:`100%`,marginTop:`10px`},onClick:`saveProfile()`,children:`Apply Changes`})]})]})})]})]})})}var K,nl=o((()=>{d(),K=w()}));function rl(){return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(`div`,{className:`html-wrapper`,children:[(0,q.jsxs)(`div`,{className:`head-wrapper`,children:[(0,q.jsx)(`meta`,{charSet:`UTF-8`}),(0,q.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,q.jsx)(`title`,{children:`Python Learning — EduPortal`}),(0,q.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,q.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
.search-sticky{position:sticky;top:0;z-index:200;background:rgba(10,10,20,.9);backdrop-filter:blur(16px);padding:20px 36px;border-bottom:1px solid var(--border)}
.concepts-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:20px;padding:28px 36px;max-width:1100px;margin:0 auto}
.concept-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-xl);padding:26px;transition:all var(--t-norm);cursor:pointer;position:relative;overflow:hidden}
.concept-card:hover{border-color:var(--primary);transform:translateY(-4px);box-shadow:var(--shadow-xl)}
.concept-icon{margin-bottom:14px; color: var(--primary-light)}
.concept-icon svg{width:28px;height:28px}
.concept-title{font-size:17px;font-weight:700;color:var(--text-white);margin-bottom:8px;text-transform:capitalize}
.concept-desc{font-size:13px;color:var(--text-muted);line-height:1.65;margin-bottom:18px}
.read-more{font-size:12px;font-weight:700;color:var(--primary-light);background:none;border:none;cursor:pointer;padding:0;font-family:var(--font-ui);display:flex;align-items:center;gap:4px}
.read-more:hover{color:var(--primary)}
`}})]}),(0,q.jsxs)(`div`,{className:`body-wrapper`,children:[(0,q.jsx)(`div`,{className:`orb orb-2`}),(0,q.jsxs)(`main`,{className:`main`,children:[(0,q.jsx)(`div`,{className:`topbar`,children:(0,q.jsxs)(`div`,{className:`topbar-content`,children:[(0,q.jsxs)(`div`,{className:`topbar-left`,children:[(0,q.jsxs)(`h1`,{style:{display:`flex`,alignItems:`center`,gap:`15px`},children:[(0,q.jsxs)(`svg`,{style:{width:`24px`,height:`24px`,color:`var(--primary-light)`},viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,q.jsx)(`path`,{d:`M4 19.5A2.5 2.5 0 0 1 6.5 17H20`}),(0,q.jsx)(`path`,{d:`M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z`})]}),`Resource Library`]}),(0,q.jsx)(`p`,{style:{paddingLeft:`39px`},children:`Python built-in modules & functional references`})]}),(0,q.jsx)(`div`,{className:`topbar-right`,children:(0,q.jsx)(`a`,{href:`profile`,className:`topbar-avatar`})})]})}),(0,q.jsxs)(`div`,{className:`content-wrap`,children:[(0,q.jsx)(`div`,{className:`search-sticky`,children:(0,q.jsxs)(`div`,{className:`search-wrap`,style:{maxWidth:`580px`,margin:`0 auto`},children:[(0,q.jsx)(`span`,{className:`s-icon`,children:(0,q.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,q.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,q.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]})}),(0,q.jsx)(`input`,{type:`text`,id:`py-search`,className:`search-input`,placeholder:`Search built-ins (e.g. print, len) or modules (e.g. math)...`}),(0,q.jsx)(`button`,{id:`py-search-btn`,className:`btn btn-primary btn-sm`,style:{position:`absolute`,right:`6px`,top:`50%`,transform:`translateY(-50%)`},children:`Search`})]})}),(0,q.jsx)(`div`,{className:`concepts-grid`,children:(0,q.jsxs)(`div`,{className:`concept-card`,"data-reveal":`up`,"data-delay":`{/* PHP echo removed */}s`,onClick:`openModuleDocs('{/* PHP echo removed */}')`,children:[(0,q.jsx)(`div`,{className:`concept-icon`,children:(0,q.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,q.jsx)(`div`,{className:`concept-title`}),(0,q.jsx)(`div`,{className:`concept-desc`}),(0,q.jsx)(`button`,{className:`read-more`,children:`Learn Module →`})]})})]})]}),(0,q.jsx)(`div`,{className:`modal-overlay`,id:`fn-modal`,children:(0,q.jsxs)(`div`,{className:`fn-modal-box`,children:[(0,q.jsxs)(`div`,{className:`modal-head`,children:[(0,q.jsx)(`h2`,{className:`modal-title`,id:`fn-modal-title`,children:`Documentation`}),(0,q.jsx)(`button`,{className:`modal-close`,onClick:`closeModal('fn-modal')`,"aria-label":`Close`,children:`✕`})]}),(0,q.jsx)(`div`,{className:`modal-body`,id:`fn-modal-body`})]})})]})]})})}var q,il=o((()=>{d(),q=w()}));function al(){return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(`div`,{className:`html-wrapper`,children:[(0,J.jsxs)(`div`,{className:`head-wrapper`,children:[(0,J.jsx)(`meta`,{charSet:`UTF-8`}),(0,J.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,J.jsx)(`title`,{children:`Python — EduPortal`}),(0,J.jsx)(`meta`,{name:`description`,content:`Python programming documentation with interactive interpreter.`}),(0,J.jsx)(`link`,{rel:`stylesheet`,href:`style.css`})]}),(0,J.jsxs)(`div`,{className:`body-wrapper`,children:[(0,J.jsx)(`div`,{className:`orb orb-1`}),(0,J.jsxs)(`main`,{className:`main`,children:[(0,J.jsx)(`div`,{className:`topbar`,children:(0,J.jsxs)(`div`,{className:`topbar-content`,children:[(0,J.jsxs)(`div`,{className:`topbar-left`,children:[(0,J.jsx)(`h1`,{children:`Python`}),(0,J.jsx)(`p`,{children:`Documentation & interactive interpreter`})]}),(0,J.jsx)(`div`,{className:`topbar-right`,children:(0,J.jsx)(`a`,{href:`profile`,className:`topbar-avatar`})})]})}),(0,J.jsxs)(`div`,{className:`content-wrap`,children:[(0,J.jsxs)(`div`,{className:`py-hero`,children:[(0,J.jsxs)(`h1`,{children:[`Python Environment`,(0,J.jsx)(`span`,{className:`cursor-blink`})]}),(0,J.jsx)(`p`,{style:{color:`var(--text-muted)`,fontSize:`15px`},children:`Browse docs below, then jump into the live interpreter to practice.`})]}),(0,J.jsx)(`div`,{className:`doc-wrap`,children:(0,J.jsxs)(`div`,{className:`doc-card`,"data-reveal":`up`,"data-delay":`{/* PHP echo removed */}`,children:[(0,J.jsxs)(`div`,{className:`doc-card-head {/* PHP echo removed */}`,onClick:`toggleDoc(this)`,children:[(0,J.jsx)(`div`,{className:`doc-card-icon`,style:{background:`{/* PHP echo removed */}`}}),(0,J.jsx)(`div`,{className:`doc-card-title`}),(0,J.jsx)(`span`,{className:`doc-card-arrow`,children:`▼`})]}),(0,J.jsx)(`div`,{className:`doc-body {/* PHP echo removed */}`})]})}),(0,J.jsxs)(`div`,{className:`py-actions`,children:[(0,J.jsx)(`a`,{href:`python-learning`,className:`btn btn-primary btn-lg`,children:`Start Learning →`}),(0,J.jsx)(`span`,{className:`or-divider`,children:`or`}),(0,J.jsx)(`button`,{className:`btn btn-secondary btn-lg`,onClick:`openModal('interp-modal')`,children:`Open Interpreter >_`})]})]})]}),(0,J.jsx)(`div`,{className:`modal-overlay`,id:`interp-modal`,children:(0,J.jsxs)(`div`,{className:`interp-box`,children:[(0,J.jsxs)(`div`,{className:`interp-bar`,children:[(0,J.jsxs)(`div`,{className:`terminal-dots`,children:[(0,J.jsx)(`span`,{className:`t-dot red`,onClick:`closeModal('interp-modal')`}),(0,J.jsx)(`span`,{className:`t-dot yellow`}),(0,J.jsx)(`span`,{className:`t-dot green`,id:`interp-max-btn`})]}),(0,J.jsxs)(`div`,{className:`interp-bar-title`,children:[(0,J.jsx)(`svg`,{viewBox:`0 0 24 24`,style:{width:`16px`,height:`16px`,marginRight:`8px`,verticalAlign:`middle`,fill:`var(--primary-light)`},children:(0,J.jsx)(`path`,{d:`M12 2C8.5 2 7 3.5 7 5v2h5v1H5.5C3.6 8 2 9.6 2 12s1.6 4 3.5 4H7v-2.5C7 11.5 8.5 10 12 10s5 1.5 5 3.5V17c0 2.8-1.2 5-5 5s-5-2.2-5-5`})}),`main.py — Python 3.10`]}),(0,J.jsx)(`button`,{className:`modal-close`,onClick:`closeModal('interp-modal')`,children:`✕`})]}),(0,J.jsxs)(`div`,{className:`interp-main`,children:[(0,J.jsxs)(`div`,{className:`interp-editor-pane`,children:[(0,J.jsxs)(`div`,{className:`editor-toolbar`,children:[(0,J.jsx)(`button`,{className:`btn btn-primary btn-sm`,id:`interp-run-btn`,style:{padding:`4px 14px`,fontSize:`12px`},children:`▶ Run Code`}),(0,J.jsx)(`div`,{style:{width:`1px`,height:`20px`,background:`rgba(255,255,255,0.1)`}}),(0,J.jsx)(`span`,{style:{fontSize:`11px`,color:`var(--text-muted)`},children:`Auto-save enabled`})]}),(0,J.jsxs)(`div`,{className:`editor-container`,children:[(0,J.jsx)(`div`,{id:`interp-line-nums`,children:`1`}),(0,J.jsx)(`div`,{className:`interp-backdrop`,id:`interp-backdrop`}),(0,J.jsxs)(`textarea`,{id:`interp-editor`,spellcheck:`false`,oninput:`updateEditor()`,children:[`# Professional Python Environment import math def greet(name): print(f"Hello, `,name,`!") print(f"The square root of 16 is `,math.sqrt(16),`") greet("Student")`]})]})]}),(0,J.jsxs)(`div`,{className:`interp-console-pane`,children:[(0,J.jsxs)(`div`,{className:`console-header`,children:[(0,J.jsx)(`span`,{children:`Output Console`}),(0,J.jsx)(`button`,{onClick:`document.getElementById('interp-output').innerHTML=''`,style:{background:`none`,border:`none`,color:`inherit`,cursor:`pointer`},children:`Clear`})]}),(0,J.jsx)(`div`,{id:`interp-output`,children:`// Click Run to execute code...`})]})]})]})})]})]})})}var J,ol=o((()=>{d(),J=w()}));function sl(){return(0,cl.jsxs)(cl.Fragment,{children:[(0,cl.jsxs)(`div`,{className:`sb-logo`,children:[(0,cl.jsx)(`div`,{className:`sb-logo-mark`}),(0,cl.jsx)(`span`,{className:`sb-logo-text`,children:`EduPortal`})]}),(0,cl.jsx)(`div`,{className:`sb-nav`}),(0,cl.jsx)(`div`,{className:`sb-footer`})]})}var cl,ll=o((()=>{d(),cl=w()}));function ul(){return(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsxs)(`div`,{className:`html-wrapper`,children:[(0,Y.jsxs)(`div`,{className:`head-wrapper`,children:[(0,Y.jsx)(`meta`,{charSet:`UTF-8`}),(0,Y.jsx)(`meta`,{name:`viewport`,content:`width=device-width,initial-scale=1`}),(0,Y.jsx)(`title`,{children:`Tasks — EduPortal`}),(0,Y.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,Y.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
.tasks-wrap{padding:28px 36px;max-width:940px}
.tasks-head{margin-bottom:28px}
.tasks-head h1{font-size:28px;font-weight:800;color:var(--text-white);margin-bottom:4px}
.tasks-head p{color:var(--text-muted);font-size:14px}
.tasks-tabs{margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.section-progress{display:flex;align-items:center;gap:12px;font-size:13px;color:var(--text-muted)}
.section-progress strong{color:var(--text-primary)}
.prog-mini{width:140px;height:6px;background:rgba(255,255,255,.06);border-radius:var(--r-full);overflow:hidden}
.prog-mini-fill{height:100%;border-radius:var(--r-full);width:0%;transition:width 1.1s cubic-bezier(.4,0,.2,1)}
`}})]}),(0,Y.jsxs)(`div`,{className:`body-wrapper`,children:[(0,Y.jsx)(`div`,{className:`orb orb-1`}),(0,Y.jsxs)(`main`,{className:`main`,children:[(0,Y.jsx)(`div`,{className:`topbar`,children:(0,Y.jsxs)(`div`,{className:`topbar-content`,children:[(0,Y.jsxs)(`div`,{className:`topbar-left`,children:[(0,Y.jsx)(`h1`,{children:`Tasks`}),(0,Y.jsx)(`p`,{children:`Track your learning progress`})]}),(0,Y.jsx)(`div`,{className:`topbar-right`,children:(0,Y.jsx)(`a`,{href:`profile`,className:`topbar-avatar`})})]})}),(0,Y.jsx)(`div`,{className:`content-wrap`,children:(0,Y.jsxs)(`div`,{className:`tasks-wrap`,"data-tabs-wrap":!0,children:[(0,Y.jsxs)(`div`,{className:`tasks-head`,children:[(0,Y.jsx)(`h1`,{children:`🚀 Learning Tasks`}),(0,Y.jsx)(`p`,{children:`Select a task to enter the interactive environment and start practice.`})]}),(0,Y.jsx)(`div`,{className:`tasks-tabs`,children:(0,Y.jsxs)(`div`,{className:`tabs`,children:[(0,Y.jsxs)(`button`,{className:`tab-btn active`,"data-tab":`python`,children:[(0,Y.jsxs)(`svg`,{viewBox:`0 0 18 18`,style:{width:`15px`,height:`15px`,stroke:`currentColor`,fill:`none`,strokeWidth:`1.75`},children:[(0,Y.jsx)(`path`,{d:`M9 1.5C6.38 1.5 5.25 2.63 5.25 3.75v1.5H9v.75H4.13C2.7 6 1.5 7.2 1.5 9s1.2 3 2.63 3H5.25V10.5C5.25 8.63 6.38 7.5 9 7.5s3.75 1.13 3.75 3V12c0 2.1-.9 3.75-3.75 3.75`}),(0,Y.jsx)(`circle`,{cx:`7.13`,cy:`3.75`,r:`.75`})]}),`Python Tasks`]}),(0,Y.jsxs)(`button`,{className:`tab-btn`,"data-tab":`linux`,children:[(0,Y.jsxs)(`svg`,{viewBox:`0 0 18 18`,style:{width:`15px`,height:`15px`,stroke:`currentColor`,fill:`none`,strokeWidth:`1.75`},children:[(0,Y.jsx)(`rect`,{x:`2`,y:`3`,width:`14`,height:`10`,rx:`1`}),(0,Y.jsx)(`polyline`,{points:`2 13 9 8 16 13`})]}),`Linux Tasks`]})]})}),(0,Y.jsx)(`div`,{className:`tab-content active`,"data-tab-content":`python`,children:(0,Y.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},id:`py-task-list`,children:(0,Y.jsxs)(`div`,{className:`task-card`,"data-id":`{/* PHP echo removed */}`,"data-reveal":`up`,"data-delay":`{/* PHP echo removed */}`,children:[(0,Y.jsx)(`div`,{className:`task-num`}),(0,Y.jsxs)(`div`,{className:`task-body`,children:[(0,Y.jsx)(`div`,{className:`task-title`}),(0,Y.jsx)(`div`,{className:`task-desc`}),(0,Y.jsx)(`div`,{className:`task-meta`,children:(0,Y.jsx)(`span`,{className:`badge {/* PHP echo removed */}`})})]}),(0,Y.jsx)(`div`,{className:`task-actions`,children:(0,Y.jsx)(`button`,{className:`complete-btn`,onClick:`location='{/* PHP echo removed */}'`,children:`Enter Task`})})]})})}),(0,Y.jsx)(`div`,{className:`tab-content`,"data-tab-content":`linux`,children:(0,Y.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},id:`lx-task-list`,children:(0,Y.jsxs)(`div`,{className:`task-card`,"data-id":`{/* PHP echo removed */}`,"data-reveal":`up`,"data-delay":`{/* PHP echo removed */}`,children:[(0,Y.jsx)(`div`,{className:`task-num`}),(0,Y.jsxs)(`div`,{className:`task-body`,children:[(0,Y.jsx)(`div`,{className:`task-title`}),(0,Y.jsx)(`div`,{className:`task-desc`}),(0,Y.jsx)(`div`,{className:`task-meta`,children:(0,Y.jsx)(`span`,{className:`badge {/* PHP echo removed */}`})})]}),(0,Y.jsx)(`div`,{className:`task-actions`,children:(0,Y.jsx)(`button`,{className:`complete-btn`,onClick:`location='{/* PHP echo removed */}'`,children:`Enter Task`})})]})})})]})})]})]})]})})}var Y,dl=o((()=>{d(),Y=w()}));function fl(){return(0,pl.jsx)(pl.Fragment,{children:(0,pl.jsxs)(`div`,{className:`html-wrapper`,children:[(0,pl.jsxs)(`div`,{className:`head-wrapper`,children:[(0,pl.jsx)(`meta`,{charSet:`UTF-8`}),(0,pl.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,pl.jsx)(`title`,{children:`Linux Terminal — EduPortal`}),(0,pl.jsx)(`link`,{rel:`stylesheet`,href:`style.css`}),(0,pl.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        body { margin: 0; padding: 0; background: #000; overflow: hidden; height: 100vh; }
        .terminal-fullscreen {
            width: 100vw;
            height: 100vh;
            background: #0c0c0c;
            display: flex;
            flex-direction: column;
            font-family: var(--font-code);
        }
        .terminal-bar-fs {
            background: #1a1a1a;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #333;
            user-select: none;
        }
        .terminal-dots-fs { display: flex; gap: 8px; margin-right: 15px; }
        .t-dot-fs { width: 12px; height: 12px; border-radius: 50%; }
        #terminal-output {
            flex: 1;
            padding: 20px 24px;
            overflow-y: auto;
            color: #ddd;
            font-size: 15px;
            line-height: 1.5;
            cursor: text;
        }
        .terminal-input-row-inline {
            display: flex;
            align-items: center;
            width: 100%;
        }
        #terminal-input {
            background: none;
            border: none;
            color: #fff;
            flex: 1;
            outline: none;
            font-family: inherit;
            font-size: inherit;
            caret-color: #00D4AA;
            padding: 0;
            margin: 0;
        }
        #terminal-prompt-display { color: #00D4AA; font-weight: 700; margin-right: 10px; white-space: nowrap; }
        .t-line { margin-bottom: 2px; white-space: pre-wrap; }
        .t-dir-str { color: #61afef; font-weight: 700; }
        .t-file-str { color: #ddd; }
        .t-cmd-str { color: #e5c07b; }
        .t-prompt-str { color: #00D4AA; font-weight: 700; margin-right: 8px; }
        .t-out-str { color: #98c379; }
        .t-err-str { color: #e06c75; }
        
        /* Ensure input is always visible at the end of the content */
        #terminal-buffer { display: flex; flex-direction: column; }
    `}})]}),(0,pl.jsx)(`div`,{className:`body-wrapper`,children:(0,pl.jsxs)(`div`,{className:`terminal-fullscreen`,children:[(0,pl.jsxs)(`div`,{className:`terminal-bar-fs`,children:[(0,pl.jsxs)(`div`,{className:`terminal-dots-fs`,children:[(0,pl.jsx)(`div`,{className:`t-dot-fs`,style:{background:`#ff5f56`,cursor:`pointer`},onClick:`window.close()`}),(0,pl.jsx)(`div`,{className:`t-dot-fs`,style:{background:`#ffbd2e`}}),(0,pl.jsx)(`div`,{className:`t-dot-fs`,style:{background:`#27c93f`}})]}),(0,pl.jsx)(`div`,{style:{flex:`1`,textAlign:`center`,color:`#666`,fontSize:`12px`,fontWeight:`600`},children:`student@linux-env — bash (Professional Terminal Environment)`}),(0,pl.jsx)(`button`,{onClick:`window.close()`,style:{background:`none`,border:`none`,color:`#555`,cursor:`pointer`,fontSize:`18px`,marginLeft:`15px`},children:`✕`})]}),(0,pl.jsxs)(`div`,{id:`terminal-output`,onClick:`document.getElementById('terminal-input').focus()`,children:[(0,pl.jsxs)(`div`,{id:`terminal-buffer`,children:[(0,pl.jsx)(`div`,{className:`t-line`,style:{color:`#00D4AA`,fontWeight:`700`,marginBottom:`10px`},children:`Linux Terminal Simulator v3.0 — Practice Environment`}),(0,pl.jsx)(`div`,{className:`t-line`,style:{color:`#666`,marginBottom:`20px`},children:`Type 'help' for available commands. Welcome to the sandbox.`})]}),(0,pl.jsxs)(`div`,{className:`terminal-input-row-inline`,children:[(0,pl.jsx)(`span`,{id:`terminal-prompt-display`,children:`student@linux-env:~$ `}),(0,pl.jsx)(`input`,{type:`text`,id:`terminal-input`,autoComplete:`off`,spellcheck:`false`,autofocus:!0})]})]})]})})]})})}var pl,ml=o((()=>{d(),pl=w()}));function hl(){let[e,t]=(0,gl.useState)(!1),[n,r]=(0,gl.useState)(``),[i,a]=(0,gl.useState)(``),[o,s]=(0,gl.useState)(!1),[c,l]=(0,gl.useState)(!1);return(0,X.jsx)(X.Fragment,{children:(0,X.jsxs)(`div`,{className:`html-wrapper`,children:[(0,X.jsxs)(`div`,{className:`head-wrapper`,children:[(0,X.jsx)(`meta`,{charSet:`UTF-8`}),(0,X.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1.0`}),(0,X.jsx)(`title`,{children:`ProWorldz - Admin Dashboard`}),(0,X.jsx)(`link`,{rel:`stylesheet`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`}),(0,X.jsx)(`link`,{rel:`icon`,type:`image/png`,href:`../images/eaglone/p-eaglone.png`}),(0,X.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #e5191e;
            --secondary: #ffffff;
            --accent: #ff2a2f;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --success: #ff2a2f;
            --danger: #e5191e;
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.12);
            --shadow-md: 0 4px 16px rgba(0,0,0,0.15);
            --shadow-lg: 0 8px 32px rgba(0,0,0,0.2);
            --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            --font-body: 'Poppins', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #000000 0%, #0f0f0f 100%);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            font-family: var(--font-body);
            overflow-x: hidden;
        }

        .login-wrapper {
            display: flex;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .login-container {
            width: 100%;
            max-width: 400px;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            animation: slideUpFade 0.6s ease 0.1s both;
        }

        @keyframes slideUpFade {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .login-header {
            background: linear-gradient(135deg, #000000 0%, #080808 100%);
            padding: 40px 30px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .login-logo {
            font-size: 48px;
            margin-bottom: 20px;
            display: inline-block;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: logoFloat 3s ease-in-out infinite;
        }

        @keyframes logoFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        .login-header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .login-header p {
            color: var(--text-secondary);
            font-size: 13px;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 500;
        }

        .login-body {
            padding: 40px 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: var(--text-primary);
        }

        .form-input {
            width: 100%;
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            color: var(--text-primary);
            font-family: var(--font-body);
            font-size: 14px;
            transition: var(--transition);
            outline: none;
        }

        .form-input::placeholder {
            color: rgba(255, 255, 255, 0.4);
        }

        .form-input:focus {
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.06);
            box-shadow: 0 0 0 3px rgba(139, 12, 16, 0.05);
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px 24px;
            border: none;
            border-radius: 10px;
            font-family: var(--font-body);
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            outline: none;
            text-decoration: none;
        }

        .btn-primary {
            width: 100%;
            background: linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%);
            color: #000000;
            border: none;
        }

        .btn-primary:hover:not(:disabled) {
            background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .btn-sm {
            padding: 8px 16px;
            font-size: 12px;
            width: auto;
        }

        .btn-danger {
            background: rgba(239, 68, 68, 0.1);
            color: #e5191e;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .btn-danger:hover {
            background: rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.5);
        }

        .btn-success {
            background: rgba(16, 185, 129, 0.1);
            color: #ff2a2f;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .btn-success:hover {
            background: rgba(16, 185, 129, 0.2);
            border-color: rgba(16, 185, 129, 0.5);
        }

        .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-top-color: #000000;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .alert {
            padding: 12px 16px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 13px;
            animation: slideDownAlert 0.3s ease;
        }

        @keyframes slideDownAlert {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .alert-danger {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #fecaca;
        }

        .alert-success {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #ff2a2f;
        }

        .hidden {
            display: none !important;
        }

        .dashboard-wrapper {
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            width: 280px;
            background: rgba(0, 0, 0, 0.6);
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            padding: 30px 0;
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            overflow-y: auto;
            z-index: 1000;
        }

        .sidebar-logo {
            padding: 0 25px 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sidebar-logo-icon {
            font-size: 28px;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sidebar-logo-text h2 {
            font-size: 16px;
            font-weight: 700;
        }

        .sidebar-logo-text p {
            font-size: 12px;
            color: var(--text-secondary);
        }

        .nav-section {
            margin-bottom: 30px;
            padding: 0 15px;
        }

        .nav-section-title {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: rgba(255, 255, 255, 0.4);
            padding: 0 10px;
            margin-bottom: 12px;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            border-radius: 10px;
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition);
            font-size: 14px;
            font-weight: 500;
            position: relative;
            margin-bottom: 6px;
            cursor: pointer;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
        }

        .nav-link:hover {
            color: var(--text-primary);
            background: rgba(255, 255, 255, 0.06);
        }

        .nav-link.active {
            color: var(--text-primary);
            background: rgba(139, 12, 16, 0.1);
        }

        .nav-link.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 24px;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            border-radius: 0 2px 2px 0;
        }

        .main-content {
            flex: 1;
            margin-left: 280px;
            padding: 40px;
            overflow-y: auto;
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .top-bar-title h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .top-bar-title p {
            font-size: 14px;
            color: var(--text-secondary);
        }

        .user-menu {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .user-info {
            text-align: right;
        }

        .user-name {
            font-size: 14px;
            font-weight: 600;
        }

        .user-role {
            font-size: 12px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .user-avatar {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            background: linear-gradient(135deg, rgba(139, 12, 16, 0.1) 0%, rgba(139, 12, 16, 0.05) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            border: 1px solid rgba(139, 12, 16, 0.1);
        }

        .content-section {
            display: none;
        }

        .content-section.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        .section-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 30px;
            color: var(--text-primary);
        }

        .form-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
        }

        .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .form-group-full {
            margin-bottom: 20px;
        }

        .form-group-full textarea {
            min-height: 100px;
            font-family: var(--font-body);
            padding: 12px 16px;
        }

        .table-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            overflow-x: auto;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
        }

        .data-table thead {
            border-bottom: 2px solid rgba(139, 12, 16, 0.1);
        }

        .data-table th {
            padding: 16px;
            text-align: left;
            font-weight: 600;
            color: var(--text-secondary);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .data-table td {
            padding: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 14px;
        }

        .data-table tbody tr:hover {
            background: rgba(255, 255, 255, 0.03);
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            animation: fadeIn 0.3s ease;
        }

        .modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: rgba(0, 0, 0, 0.95);
            border: 1px solid rgba(139, 12, 16, 0.1);
            border-radius: 16px;
            padding: 40px;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(139, 12, 16, 0.1);
        }

        .modal-header h2 {
            font-size: 22px;
            font-weight: 700;
        }

        .close-btn {
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 24px;
            cursor: pointer;
            transition: var(--transition);
        }

        .close-btn:hover {
            color: var(--danger);
        }

        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .info-item {
            background: rgba(255, 255, 255, 0.03);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .info-label {
            font-size: 12px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: block;
        }

        .info-value {
            font-size: 15px;
            color: var(--text-primary);
            font-weight: 500;
            word-break: break-word;
        }

        .logout-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            background: rgba(239, 68, 68, 0.1);
            color: #e5191e;
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 10px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: var(--transition);
        }

        .logout-btn:hover {
            background: rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.5);
        }

        .action-buttons {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
        }

        .empty-state i {
            font-size: 48px;
            margin-bottom: 20px;
            opacity: 0.5;
        }

        @media (max-width: 768px) {
            .main-content {
                margin-left: 0;
                padding: 20px;
            }

            .sidebar {
                width: 250px;
                transform: translateX(-100%);
                transition: var(--transition);
            }

            .sidebar.show {
                transform: translateX(0);
            }

            .info-grid {
                grid-template-columns: 1fr;
            }

            .form-row {
                grid-template-columns: 1fr;
            }
        }
    `}})]}),(0,X.jsx)(`div`,{className:`body-wrapper`,children:e?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`div`,{className:`dashboard-wrapper`,children:[(0,X.jsxs)(`div`,{className:`sidebar`,children:[(0,X.jsxs)(`div`,{className:`sidebar-logo`,children:[(0,X.jsx)(`div`,{className:`sidebar-logo-icon`,children:(0,X.jsx)(`i`,{className:`fas fa-graduation-cap`})}),(0,X.jsxs)(`div`,{className:`sidebar-logo-text`,children:[(0,X.jsx)(`h2`,{children:`ProWorldz`}),(0,X.jsx)(`p`,{children:`Admin Panel`})]})]}),(0,X.jsxs)(`nav`,{className:`nav-section`,children:[(0,X.jsx)(`div`,{className:`nav-section-title`,children:`Menu`}),(0,X.jsxs)(`button`,{className:`nav-link active`,"data-section":`student-entry`,children:[(0,X.jsx)(`i`,{className:`fas fa-user-plus`}),`Student Entry`]}),(0,X.jsxs)(`button`,{className:`nav-link`,"data-section":`student-management`,children:[(0,X.jsx)(`i`,{className:`fas fa-users`}),`Student Management`]}),(0,X.jsxs)(`button`,{className:`nav-link`,"data-section":`admin-management`,children:[(0,X.jsx)(`i`,{className:`fas fa-shield-alt`}),`Admin Management`]}),(0,X.jsxs)(`button`,{className:`nav-link active`,"data-section":`student-entry`,children:[(0,X.jsx)(`i`,{className:`fas fa-user-plus`}),`Student Entry`]}),(0,X.jsxs)(`button`,{className:`nav-link`,"data-section":`student-management`,children:[(0,X.jsx)(`i`,{className:`fas fa-users`}),`Student Management`]}),(0,X.jsx)(`div`,{className:`nav-section-title`,style:{marginTop:`30px`},children:`Account`}),(0,X.jsxs)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),t(!1),r(``),a(``)},className:`nav-link`,children:[(0,X.jsx)(`i`,{className:`fas fa-sign-out-alt`}),`Logout`]})]})]}),(0,X.jsxs)(`div`,{className:`main-content`,children:[(0,X.jsxs)(`div`,{className:`top-bar`,children:[(0,X.jsxs)(`div`,{className:`top-bar-title`,children:[(0,X.jsx)(`h1`,{id:`page-title`,children:`Dashboard`}),(0,X.jsx)(`p`,{id:`page-subtitle`,children:`Manage your system`})]}),(0,X.jsxs)(`div`,{className:`user-menu`,children:[(0,X.jsxs)(`div`,{className:`user-info`,children:[(0,X.jsx)(`div`,{className:`user-name`,children:`Data Needed`}),(0,X.jsx)(`div`,{className:`user-role`,children:`Data Needed`})]}),(0,X.jsx)(`div`,{className:`user-avatar`,children:`Data Needed`})]})]}),(0,X.jsxs)(`div`,{id:`student-entry`,className:`content-section active`,children:[(0,X.jsx)(`h2`,{className:`section-title`,children:`Add New Student`}),(0,X.jsx)(`div`,{className:`form-container`,children:(0,X.jsxs)(`form`,{id:`student-form`,onSubmit:`addStudent(event)`,children:[(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Student ID`}),(0,X.jsx)(`input`,{type:`text`,name:`id`,className:`form-input`,placeholder:`Enter student ID`,required:!0})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Full Name`}),(0,X.jsx)(`input`,{type:`text`,name:`name`,className:`form-input`,placeholder:`Enter student name`,required:!0})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Email`}),(0,X.jsx)(`input`,{type:`email`,name:`email`,className:`form-input`,placeholder:`Enter email`,required:!0})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Phone`}),(0,X.jsx)(`input`,{type:`text`,name:`phone`,className:`form-input`,placeholder:`Enter phone number`})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Date of Birth`}),(0,X.jsx)(`input`,{type:`date`,name:`dob`,className:`form-input`})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Gender`}),(0,X.jsxs)(`select`,{name:`gender`,className:`form-input`,children:[(0,X.jsx)(`option`,{value:`Male`,style:{color:`black`},children:`Male`}),(0,X.jsx)(`option`,{value:`Female`,style:{color:`black`},children:`Female`}),(0,X.jsx)(`option`,{value:`Other`,style:{color:`black`},children:`Other`})]})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Course`}),(0,X.jsxs)(`select`,{name:`course`,className:`form-input`,children:[(0,X.jsx)(`option`,{value:``,style:{color:`black`},children:`Select Course`}),(0,X.jsx)(`option`,{value:`Secure X`,style:{color:`black`},children:`Secure X`}),(0,X.jsx)(`option`,{value:`AI Verse Web Labs`,style:{color:`black`},children:`AI Verse Web Labs`}),(0,X.jsx)(`option`,{value:`Hunt Elite`,style:{color:`black`},children:`Hunt Elite`}),(0,X.jsx)(`option`,{value:`Creative Craft`,style:{color:`black`},children:`Creative Craft`}),(0,X.jsx)(`option`,{value:`Py Desk Systems`,style:{color:`black`},children:`Py Desk Systems`}),(0,X.jsx)(`option`,{value:`Biz Dev`,style:{color:`black`},children:`Biz Dev`}),(0,X.jsx)(`option`,{value:`Code Foundry`,style:{color:`black`},children:`Code Foundry`}),(0,X.jsx)(`option`,{value:`Startup Gene Labs`,style:{color:`black`},children:`Startup Gene Labs`}),(0,X.jsx)(`option`,{value:`CLI++ Systems`,style:{color:`black`},children:`CLI++ Systems`}),(0,X.jsx)(`option`,{value:`APMAN`,style:{color:`black`},children:`APMAN`})]})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Eagle Coins`}),(0,X.jsx)(`input`,{type:`number`,name:`eagle_coins`,className:`form-input`,placeholder:`0`,value:`0`})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Mother Name`}),(0,X.jsx)(`input`,{type:`text`,name:`mother_name`,className:`form-input`,placeholder:`Enter mother's name`})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Mother Phone`}),(0,X.jsx)(`input`,{type:`text`,name:`mother_phone`,className:`form-input`,placeholder:`Enter mother's phone`})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Father Name`}),(0,X.jsx)(`input`,{type:`text`,name:`father_name`,className:`form-input`,placeholder:`Enter father's name`})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Father Phone`}),(0,X.jsx)(`input`,{type:`text`,name:`father_phone`,className:`form-input`,placeholder:`Enter father's phone`})]})]}),(0,X.jsx)(`div`,{className:`form-row`,children:(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Access`}),(0,X.jsxs)(`select`,{name:`access`,className:`form-input`,style:{backgroundColor:`#000000`,color:`white`},children:[(0,X.jsx)(`option`,{value:`false`,children:`False`}),(0,X.jsx)(`option`,{value:`true`,children:`True`})]})]})}),(0,X.jsxs)(`div`,{className:`form-group-full`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Address`}),(0,X.jsx)(`textarea`,{name:`address`,className:`form-input`,placeholder:`Enter student address`})]}),(0,X.jsx)(`div`,{className:`action-buttons`,children:(0,X.jsxs)(`button`,{type:`submit`,className:`btn btn-success btn-sm`,children:[(0,X.jsx)(`i`,{className:`fas fa-plus`}),` Add Student`]})})]})})]}),(0,X.jsxs)(`div`,{id:`student-management`,className:`content-section`,children:[(0,X.jsx)(`h2`,{className:`section-title`,children:`Student Management`}),(0,X.jsx)(`div`,{id:`students-alert`}),(0,X.jsx)(`div`,{className:`table-container`,children:(0,X.jsxs)(`table`,{className:`data-table`,id:`students-table`,children:[(0,X.jsx)(`thead`,{children:(0,X.jsxs)(`tr`,{children:[(0,X.jsx)(`th`,{children:`ID`}),(0,X.jsx)(`th`,{children:`Name`}),(0,X.jsx)(`th`,{children:`Email`}),(0,X.jsx)(`th`,{children:`Phone`}),(0,X.jsx)(`th`,{children:`Course`}),(0,X.jsx)(`th`,{children:`Eagle Coins`}),(0,X.jsx)(`th`,{children:`Action`})]})}),(0,X.jsx)(`tbody`,{id:`students-tbody`,children:(0,X.jsx)(`tr`,{children:(0,X.jsx)(`td`,{colSpan:`7`,style:{textAlign:`center`,padding:`40px`},children:`Loading...`})})})]})})]}),(0,X.jsxs)(`div`,{id:`admin-management`,className:`content-section`,children:[(0,X.jsx)(`h2`,{className:`section-title`,children:`Admin Management`}),(0,X.jsxs)(`div`,{className:`form-container`,children:[(0,X.jsx)(`h3`,{style:{marginBottom:`20px`,fontSize:`18px`},children:`Add New Admin`}),(0,X.jsxs)(`form`,{id:`admin-form`,onSubmit:`addAdmin(event)`,children:[(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Username`}),(0,X.jsx)(`input`,{type:`text`,name:`username`,className:`form-input`,placeholder:`Enter username`,required:!0})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Password`}),(0,X.jsx)(`input`,{type:`password`,name:`password`,className:`form-input`,placeholder:`Enter password`,required:!0})]})]}),(0,X.jsx)(`div`,{className:`form-row`,children:(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Role`}),(0,X.jsxs)(`select`,{name:`role`,className:`form-input`,style:{backgroundColor:`#000000`},children:[(0,X.jsx)(`option`,{value:`admin`,style:{color:`white`},children:`Admin`}),(0,X.jsx)(`option`,{value:`root`,style:{color:`white`},children:`Root`})]})]})}),(0,X.jsx)(`div`,{className:`action-buttons`,children:(0,X.jsxs)(`button`,{type:`submit`,className:`btn btn-success btn-sm`,children:[(0,X.jsx)(`i`,{className:`fas fa-plus`}),` Add Admin`]})})]})]}),(0,X.jsx)(`div`,{id:`admins-alert`}),(0,X.jsx)(`div`,{className:`table-container`,children:(0,X.jsxs)(`table`,{className:`data-table`,id:`admins-table`,children:[(0,X.jsx)(`thead`,{children:(0,X.jsxs)(`tr`,{children:[(0,X.jsx)(`th`,{children:`Username`}),(0,X.jsx)(`th`,{children:`Role`}),(0,X.jsx)(`th`,{children:`Action`})]})}),(0,X.jsx)(`tbody`,{id:`admins-tbody`,children:(0,X.jsx)(`tr`,{children:(0,X.jsx)(`td`,{colSpan:`3`,style:{textAlign:`center`,padding:`40px`},children:`Loading...`})})})]})})]})]})]}),(0,X.jsx)(`div`,{id:`student-modal`,className:`modal`,children:(0,X.jsxs)(`div`,{className:`modal-content`,children:[(0,X.jsxs)(`div`,{className:`modal-header`,children:[(0,X.jsx)(`h2`,{children:`Student Information`}),(0,X.jsx)(`button`,{className:`close-btn`,onClick:`closeModal('student-modal')`,children:`×`})]}),(0,X.jsx)(`div`,{id:`modal-body`}),(0,X.jsxs)(`div`,{className:`action-buttons`,style:{marginTop:`30px`},children:[(0,X.jsxs)(`button`,{className:`btn btn-danger btn-sm`,id:`delete-btn`,onClick:`deleteStudent()`,children:[(0,X.jsx)(`i`,{className:`fas fa-trash`}),` Delete Student`]}),(0,X.jsxs)(`button`,{className:`btn btn-success btn-sm`,id:`edit-btn`,onClick:`editStudent()`,children:[(0,X.jsx)(`i`,{className:`fas fa-edit`}),` Edit Student`]}),(0,X.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:`closeModal('student-modal')`,children:`Close`})]})]})}),(0,X.jsx)(`div`,{id:`edit-modal`,className:`modal`,children:(0,X.jsxs)(`div`,{className:`modal-content`,children:[(0,X.jsxs)(`div`,{className:`modal-header`,children:[(0,X.jsx)(`h2`,{children:`Edit Student`}),(0,X.jsx)(`button`,{className:`close-btn`,onClick:`closeModal('edit-modal')`,children:`×`})]}),(0,X.jsxs)(`form`,{id:`edit-form`,onSubmit:`saveEditedStudent(event)`,children:[(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Student ID`}),(0,X.jsx)(`input`,{type:`text`,name:`id`,className:`form-input`,readonly:!0})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Full Name`}),(0,X.jsx)(`input`,{type:`text`,name:`name`,className:`form-input`,required:!0})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Email`}),(0,X.jsx)(`input`,{type:`email`,name:`email`,className:`form-input`,required:!0})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Phone`}),(0,X.jsx)(`input`,{type:`text`,name:`phone`,className:`form-input`})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Date of Birth`}),(0,X.jsx)(`input`,{type:`date`,name:`dob`,className:`form-input`})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Gender`}),(0,X.jsxs)(`select`,{name:`gender`,className:`form-input`,children:[(0,X.jsx)(`option`,{value:``,children:`Select Gender`}),(0,X.jsx)(`option`,{value:`Male`,children:`Male`}),(0,X.jsx)(`option`,{value:`Female`,children:`Female`}),(0,X.jsx)(`option`,{value:`Other`,children:`Other`})]})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Course`}),(0,X.jsx)(`input`,{type:`text`,name:`course`,className:`form-input`})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Eagle Coins`}),(0,X.jsx)(`input`,{type:`number`,name:`eagle_coins`,className:`form-input`})]})]}),(0,X.jsx)(`div`,{className:`form-row`,children:(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Access`}),(0,X.jsxs)(`select`,{name:`access`,className:`form-input`,style:{backgroundColor:`#000000`,color:`white`},children:[(0,X.jsx)(`option`,{value:`false`,children:`False`}),(0,X.jsx)(`option`,{value:`true`,children:`True`})]})]})}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Mother Name`}),(0,X.jsx)(`input`,{type:`text`,name:`mother_name`,className:`form-input`})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Mother Phone`}),(0,X.jsx)(`input`,{type:`text`,name:`mother_phone`,className:`form-input`})]})]}),(0,X.jsxs)(`div`,{className:`form-row`,children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Father Name`}),(0,X.jsx)(`input`,{type:`text`,name:`father_name`,className:`form-input`})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Father Phone`}),(0,X.jsx)(`input`,{type:`text`,name:`father_phone`,className:`form-input`})]})]}),(0,X.jsxs)(`div`,{className:`form-group-full`,children:[(0,X.jsx)(`label`,{className:`form-label`,children:`Address`}),(0,X.jsx)(`textarea`,{name:`address`,className:`form-input`})]}),(0,X.jsxs)(`div`,{className:`action-buttons`,style:{marginTop:`30px`},children:[(0,X.jsxs)(`button`,{type:`submit`,className:`btn btn-success btn-sm`,children:[(0,X.jsx)(`i`,{className:`fas fa-save`}),` Save Changes`]}),(0,X.jsx)(`button`,{type:`button`,className:`btn btn-danger btn-sm`,onClick:`closeModal('edit-modal')`,children:`Cancel`})]})]})]})})]}):(0,X.jsx)(`div`,{className:`login-wrapper`,children:(0,X.jsxs)(`div`,{className:`login-container`,children:[(0,X.jsxs)(`div`,{className:`login-header`,children:[(0,X.jsx)(`div`,{className:`login-logo`,children:(0,X.jsx)(`i`,{className:`fas fa-graduation-cap`})}),(0,X.jsx)(`h1`,{children:`ProWorldz Admin`}),(0,X.jsx)(`p`,{children:`Student Management System`})]}),(0,X.jsxs)(`div`,{className:`login-body`,children:[(0,X.jsxs)(`div`,{id:`login-error`,className:`alert alert-danger ${c?``:`hidden`}`,children:[(0,X.jsx)(`i`,{className:`fas fa-circle-exclamation`}),(0,X.jsx)(`span`,{id:`error-text`,children:`Invalid credentials`})]}),(0,X.jsxs)(`div`,{id:`login-success`,className:`alert alert-success hidden`,children:[(0,X.jsx)(`i`,{className:`fas fa-check-circle`}),(0,X.jsx)(`span`,{id:`success-text`,children:`Login successful!`})]}),(0,X.jsxs)(`form`,{id:`login-form`,onSubmit:e=>{e.preventDefault(),s(!0),l(!1),setTimeout(()=>{s(!1),n===`admin`&&i===`admin123`?t(!0):l(!0)},1500)},children:[(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,htmlFor:`username`,children:`Username`}),(0,X.jsx)(`input`,{type:`text`,id:`username`,name:`username`,className:`form-input`,placeholder:`Enter username`,required:!0,value:n,onChange:e=>r(e.target.value)})]}),(0,X.jsxs)(`div`,{className:`form-group`,children:[(0,X.jsx)(`label`,{className:`form-label`,htmlFor:`password`,children:`Password`}),(0,X.jsx)(`input`,{type:`password`,id:`password`,name:`password`,className:`form-input`,placeholder:`Enter password`,required:!0,value:i,onChange:e=>a(e.target.value)})]}),(0,X.jsxs)(`button`,{type:`submit`,className:`btn btn-primary`,id:`login-button`,disabled:o,children:[(0,X.jsx)(`span`,{id:`button-text`,children:o?`Logging in...`:`Login`}),o&&(0,X.jsx)(`div`,{id:`spinner`,className:`spinner`})]})]})]})]})})})]})})}var gl,X,_l=o((()=>{gl=l(d()),X=w()}));function vl(){return(0,Z.jsx)(Wt,{children:(0,Z.jsxs)(dt,{children:[(0,Z.jsx)(x,{path:`/about-home`,element:(0,Z.jsx)(dr,{})}),(0,Z.jsx)(x,{path:`/contact-home`,element:(0,Z.jsx)(mr,{})}),(0,Z.jsx)(x,{path:`/course-details`,element:(0,Z.jsx)(_r,{})}),(0,Z.jsx)(x,{path:`/`,element:(0,Z.jsx)(yr,{})}),(0,Z.jsx)(x,{path:`/lab`,element:(0,Z.jsx)(Sr,{})}),(0,Z.jsx)(x,{path:`/login`,element:(0,Z.jsx)(wr,{})}),(0,Z.jsx)(x,{path:`/mobile-block`,element:(0,Z.jsx)(Or,{})}),(0,Z.jsx)(x,{path:`/ourcourse`,element:(0,Z.jsx)(jr,{})}),(0,Z.jsx)(x,{path:`/sidebar`,element:(0,Z.jsx)(Nr,{})}),(0,Z.jsx)(x,{path:`/signup`,element:(0,Z.jsx)(Fr,{})}),(0,Z.jsx)(x,{path:`/vulnerable-saas-app`,element:(0,Z.jsx)(Lr,{})}),(0,Z.jsx)(x,{path:`/lab/codings/cpp`,element:(0,Z.jsx)(Br,{})}),(0,Z.jsx)(x,{path:`/lab/codings/pythoni`,element:(0,Z.jsx)(Hr,{})}),(0,Z.jsx)(x,{path:`/lab/langs`,element:(0,Z.jsx)(Wr,{})}),(0,Z.jsx)(x,{path:`/lab/lin_term`,element:(0,Z.jsx)(Kr,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/advanced/auth-bypass-chain`,element:(0,Z.jsx)(Jr,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/advanced/auth-bypass-chain/index`,element:(0,Z.jsx)(Jr,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/advanced/session-fixation`,element:(0,Z.jsx)(Zr,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/advanced/session-fixation/index`,element:(0,Z.jsx)(Zr,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/beginner/user-enumeration`,element:(0,Z.jsx)(ei,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/beginner/user-enumeration/index`,element:(0,Z.jsx)(ei,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/beginner/weak-login/dashboard`,element:(0,Z.jsx)(ri,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/beginner/weak-login`,element:(0,Z.jsx)(oi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/beginner/weak-login/index`,element:(0,Z.jsx)(oi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/intermediate/reset-token`,element:(0,Z.jsx)(li,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/intermediate/reset-token/index`,element:(0,Z.jsx)(li,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/intermediate/weak-session`,element:(0,Z.jsx)(fi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/authentication-failures/intermediate/weak-session/index`,element:(0,Z.jsx)(fi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/advanced/horizontal-privilege-leak/report`,element:(0,Z.jsx)(hi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/advanced/horizontal-privilege-leak/templates/header`,element:(0,Z.jsx)(vi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/advanced/multi-role-bypass/templates/header`,element:(0,Z.jsx)(xi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/document-viewer/dashboard`,element:(0,Z.jsx)(wi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/document-viewer`,element:(0,Z.jsx)(Di,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/document-viewer/index`,element:(0,Z.jsx)(Di,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/document-viewer/login`,element:(0,Z.jsx)(Ai,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/document-viewer/view`,element:(0,Z.jsx)(Ni,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/profile-access/dashboard`,element:(0,Z.jsx)(Ii,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/profile-access`,element:(0,Z.jsx)(Ri,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/profile-access/index`,element:(0,Z.jsx)(Ri,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/profile-access/login`,element:(0,Z.jsx)(Vi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/beginner/profile-access/profile`,element:(0,Z.jsx)(Wi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/admin-panel-bypass/admin`,element:(0,Z.jsx)(qi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/admin-panel-bypass/dashboard`,element:(0,Z.jsx)(Xi,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/admin-panel-bypass`,element:(0,Z.jsx)($i,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/admin-panel-bypass/index`,element:(0,Z.jsx)($i,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/admin-panel-bypass/login`,element:(0,Z.jsx)(na,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/id-guessing-api/dashboard`,element:(0,Z.jsx)(aa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/id-guessing-api`,element:(0,Z.jsx)(ca,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/id-guessing-api/index`,element:(0,Z.jsx)(ca,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/id-guessing-api/login`,element:(0,Z.jsx)(da,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/broken-access/intermediate/id-guessing-api/templates/header`,element:(0,Z.jsx)(ma,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/advanced/hardcoded-key`,element:(0,Z.jsx)(_a,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/advanced/hardcoded-key/index`,element:(0,Z.jsx)(_a,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/beginner/base64-storage`,element:(0,Z.jsx)(ba,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/beginner/base64-storage/index`,element:(0,Z.jsx)(ba,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/beginner/weak-hash/dashboard`,element:(0,Z.jsx)(Ca,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/beginner/weak-hash`,element:(0,Z.jsx)(Ea,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/beginner/weak-hash/index`,element:(0,Z.jsx)(Ea,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/intermediate/predictable-token`,element:(0,Z.jsx)(ka,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/crypto-failures/intermediate/predictable-token/index`,element:(0,Z.jsx)(ka,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/db`,element:(0,Z.jsx)(Ma,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/advanced/crash-exploit`,element:(0,Z.jsx)(Fa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/advanced/crash-exploit/index`,element:(0,Z.jsx)(Fa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/advanced/exception-chain`,element:(0,Z.jsx)(Ra,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/advanced/exception-chain/index`,element:(0,Z.jsx)(Ra,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/beginner/missing-validation`,element:(0,Z.jsx)(Va,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/beginner/missing-validation/index`,element:(0,Z.jsx)(Va,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/beginner/verbose-errors`,element:(0,Z.jsx)(Wa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/beginner/verbose-errors/index`,element:(0,Z.jsx)(Wa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/intermediate/fallback-bypass`,element:(0,Z.jsx)(qa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/intermediate/fallback-bypass/index`,element:(0,Z.jsx)(qa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/intermediate/improper-handling`,element:(0,Z.jsx)(Xa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/exception-failures/intermediate/improper-handling/index`,element:(0,Z.jsx)(Xa,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/advanced/chained-injection-api`,element:(0,Z.jsx)($a,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/advanced/chained-injection-api/index`,element:(0,Z.jsx)($a,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/advanced/dynamic-query-builder`,element:(0,Z.jsx)(no,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/advanced/dynamic-query-builder/index`,element:(0,Z.jsx)(no,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/beginner/employee-search`,element:(0,Z.jsx)(ao,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/beginner/employee-search/index`,element:(0,Z.jsx)(ao,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/beginner/employee-search/search`,element:(0,Z.jsx)(co,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/beginner/employee-search/templates/header`,element:(0,Z.jsx)(fo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/beginner/report-viewer`,element:(0,Z.jsx)(mo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/beginner/report-viewer/index`,element:(0,Z.jsx)(mo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/injection/beginner/report-viewer/view`,element:(0,Z.jsx)(go,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/advanced/multi-step-bypass`,element:(0,Z.jsx)(yo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/advanced/multi-step-bypass/index`,element:(0,Z.jsx)(yo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/advanced/role-confusion-flow`,element:(0,Z.jsx)(xo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/advanced/role-confusion-flow/index`,element:(0,Z.jsx)(xo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/beginner/approval-flow`,element:(0,Z.jsx)(wo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/beginner/approval-flow/index`,element:(0,Z.jsx)(wo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/beginner/reset-workflow`,element:(0,Z.jsx)(Do,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/beginner/reset-workflow/index`,element:(0,Z.jsx)(Do,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/intermediate/discount-engine`,element:(0,Z.jsx)(Ao,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/intermediate/discount-engine/index`,element:(0,Z.jsx)(Ao,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/intermediate/feature-unlock`,element:(0,Z.jsx)(No,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/insecure-design/intermediate/feature-unlock/index`,element:(0,Z.jsx)(No,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/advanced/integrity-chain-break`,element:(0,Z.jsx)(Io,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/advanced/integrity-chain-break/index`,element:(0,Z.jsx)(Io,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/advanced/signature-bypass`,element:(0,Z.jsx)(zo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/advanced/signature-bypass/index`,element:(0,Z.jsx)(zo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/beginner/file-checker`,element:(0,Z.jsx)(Ho,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/beginner/file-checker/index`,element:(0,Z.jsx)(Ho,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/intermediate/data-trust-engine`,element:(0,Z.jsx)(Go,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/intermediate/data-trust-engine/index`,element:(0,Z.jsx)(Go,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/intermediate/update-importer`,element:(0,Z.jsx)(Jo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/integrity-failures/intermediate/update-importer/index`,element:(0,Z.jsx)(Jo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/advanced/log-injection-chain`,element:(0,Z.jsx)(Zo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/advanced/log-injection-chain/index`,element:(0,Z.jsx)(Zo,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/beginner/missing-logs`,element:(0,Z.jsx)(es,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/beginner/missing-logs/index`,element:(0,Z.jsx)(es,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/beginner/weak-logging`,element:(0,Z.jsx)(rs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/beginner/weak-logging/index`,element:(0,Z.jsx)(rs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/intermediate/alert-bypass`,element:(0,Z.jsx)(os,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/intermediate/alert-bypass/index`,element:(0,Z.jsx)(os,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/intermediate/log-tampering`,element:(0,Z.jsx)(ls,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/logging-failures/intermediate/log-tampering/index`,element:(0,Z.jsx)(ls,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/admin-misroute/admin-old`,element:(0,Z.jsx)(fs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/admin-misroute/dashboard`,element:(0,Z.jsx)(hs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/admin-misroute`,element:(0,Z.jsx)(vs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/admin-misroute/index`,element:(0,Z.jsx)(vs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/admin-misroute/login`,element:(0,Z.jsx)(xs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/admin-misroute/templates/header`,element:(0,Z.jsx)(ws,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/backup-exposure/dashboard`,element:(0,Z.jsx)(Ds,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/backup-exposure`,element:(0,Z.jsx)(As,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/backup-exposure/index`,element:(0,Z.jsx)(As,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/backup-exposure/login`,element:(0,Z.jsx)(Ns,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/advanced/backup-exposure/templates/header`,element:(0,Z.jsx)(Is,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/debug-panel/dashboard`,element:(0,Z.jsx)(zs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/debug-panel/debug`,element:(0,Z.jsx)(Hs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/debug-panel`,element:(0,Z.jsx)(Gs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/debug-panel/index`,element:(0,Z.jsx)(Gs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/debug-panel/login`,element:(0,Z.jsx)(Js,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/debug-panel/templates/header`,element:(0,Z.jsx)(Zs,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/exposed-config/dashboard`,element:(0,Z.jsx)(ec,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/exposed-config`,element:(0,Z.jsx)(rc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/exposed-config/index`,element:(0,Z.jsx)(rc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/exposed-config/login`,element:(0,Z.jsx)(oc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/beginner/exposed-config/templates/header`,element:(0,Z.jsx)(lc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/insecure-headers/dashboard`,element:(0,Z.jsx)(fc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/insecure-headers`,element:(0,Z.jsx)(hc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/insecure-headers/index`,element:(0,Z.jsx)(hc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/insecure-headers/templates/header`,element:(0,Z.jsx)(vc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/verbose-errors/dashboard`,element:(0,Z.jsx)(xc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/verbose-errors`,element:(0,Z.jsx)(wc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/verbose-errors/index`,element:(0,Z.jsx)(wc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/security-misconfig/intermediate/verbose-errors/templates/header`,element:(0,Z.jsx)(Dc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/advanced/loader-manipulation`,element:(0,Z.jsx)(Ac,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/advanced/loader-manipulation/index`,element:(0,Z.jsx)(Ac,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/advanced/update-signature-bypass`,element:(0,Z.jsx)(Nc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/advanced/update-signature-bypass/index`,element:(0,Z.jsx)(Nc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/beginner/plugin-loader`,element:(0,Z.jsx)(Ic,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/beginner/plugin-loader/index`,element:(0,Z.jsx)(Ic,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/beginner/update-center`,element:(0,Z.jsx)(Rc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/beginner/update-center/index`,element:(0,Z.jsx)(Rc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/intermediate/marketplace-trust`,element:(0,Z.jsx)(Vc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/intermediate/marketplace-trust/index`,element:(0,Z.jsx)(Vc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/intermediate/package-installer`,element:(0,Z.jsx)(Wc,{})}),(0,Z.jsx)(x,{path:`/owasp_lab/supply-chain/intermediate/package-installer/index`,element:(0,Z.jsx)(Wc,{})}),(0,Z.jsx)(x,{path:`/ss/dashboard`,element:(0,Z.jsx)(Kc,{})}),(0,Z.jsx)(x,{path:`/ss`,element:(0,Z.jsx)(Jc,{})}),(0,Z.jsx)(x,{path:`/ss/index`,element:(0,Z.jsx)(Jc,{})}),(0,Z.jsx)(x,{path:`/ss/linux-learning`,element:(0,Z.jsx)(Zc,{})}),(0,Z.jsx)(x,{path:`/ss/linux`,element:(0,Z.jsx)($c,{})}),(0,Z.jsx)(x,{path:`/ss/profile`,element:(0,Z.jsx)(tl,{})}),(0,Z.jsx)(x,{path:`/ss/python-learning`,element:(0,Z.jsx)(rl,{})}),(0,Z.jsx)(x,{path:`/ss/python`,element:(0,Z.jsx)(al,{})}),(0,Z.jsx)(x,{path:`/ss/sidebar`,element:(0,Z.jsx)(sl,{})}),(0,Z.jsx)(x,{path:`/ss/tasks`,element:(0,Z.jsx)(ul,{})}),(0,Z.jsx)(x,{path:`/ss/terminal`,element:(0,Z.jsx)(fl,{})}),(0,Z.jsx)(x,{path:`/_admin`,element:(0,Z.jsx)(hl,{})}),(0,Z.jsx)(x,{path:`/_admin/index`,element:(0,Z.jsx)(hl,{})})]})})}var Z,yl=o((()=>{d(),lr(),pr(),gr(),vr(),xr(),Cr(),Dr(),Ar(),Mr(),Pr(),Ir(),zr(),Vr(),Ur(),Gr(),qr(),Xr(),$r(),ni(),ai(),ci(),di(),mi(),_i(),bi(),Ci(),Ei(),ki(),Mi(),Fi(),Li(),Bi(),Ui(),Ki(),Yi(),Qi(),ta(),ia(),sa(),ua(),pa(),ga(),ya(),Sa(),Ta(),Oa(),ja(),Pa(),La(),Ba(),Ua(),Ka(),Ya(),Qa(),to(),io(),so(),uo(),po(),ho(),vo(),bo(),Co(),Eo(),ko(),Mo(),Fo(),Ro(),Vo(),Wo(),qo(),Xo(),$o(),ns(),as(),cs(),ds(),ms(),_s(),bs(),Cs(),Es(),ks(),Ms(),Fs(),Rs(),Vs(),Ws(),qs(),Xs(),$s(),nc(),ac(),cc(),dc(),mc(),_c(),bc(),Cc(),Ec(),kc(),Mc(),Fc(),Lc(),Bc(),Uc(),Gc(),qc(),Xc(),Qc(),el(),nl(),il(),ol(),ll(),dl(),ml(),_l(),Z=w()}));s((()=>{var e=l(d()),t=l(_());yl();var n=w();t.createRoot(document.getElementById(`root`)).render((0,n.jsx)(e.StrictMode,{children:(0,n.jsx)(vl,{})}))}))();