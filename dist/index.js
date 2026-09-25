"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(f,i){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-ext-base-sxsa/dist').ndarray,c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function l(a){var r,e;return e=a[0],r=c(a[1]),d(s(e,0),r,q(e),n(e,0),v(e)),e}i.exports=l
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
