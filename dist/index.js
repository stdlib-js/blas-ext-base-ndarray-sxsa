"use strict";var v=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=v(function(y,t){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-sxsa/dist').ndarray,m=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function x(a){var r,e;return e=a[0],r=m(a[1]),l(n(e,0),r,d(e),q(e,0),o(e)),e}t.exports=x
});var c=require("path").join,f=require('@stdlib/utils-try-require/dist'),p=require('@stdlib/assert-is-error/dist'),g=s(),i,u=f(c(__dirname,"./native.js"));p(u)?i=g:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
