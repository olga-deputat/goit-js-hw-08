!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var i,r,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(h,t),d?y(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=g();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?y(e):(i=r=void 0,a)}function T(){var e=g(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?a:w(g())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form"),S=O.querySelector('input[name="email"]'),h=O.querySelector('textarea[name="message"]'),w="feedback-form-state",T=e(t)((function(){var e={email:S.value,message:h.value};localStorage.setItem(w,JSON.stringify(e))}),500);document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem(w);if(e){var t=JSON.parse(e);S.value=t.email||"",h.value=t.message||""}})),O.addEventListener("input",(function(){T()})),O.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:S.value,message:h.value}),localStorage.removeItem(w),S.value="",h.value=""}))}();
//# sourceMappingURL=03-feedback.2348df5a.js.map
