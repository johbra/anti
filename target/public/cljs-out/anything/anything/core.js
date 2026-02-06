// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('anything.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('anything.db');
goog.require('anything.views');
goog.require('anything.events');
goog.require('anything.subs');
goog.require('reagent.dom');
goog.require('re_com.core');
anything.core.main = (function anything$core$main(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anything.views.ui], null),document.getElementById("app"));
});
goog.exportSymbol('anything.core.main', anything.core.main);
anything.core.re_render = (function anything$core$re_render(){
return anything.core.main.call(null);
});
if((typeof anything !== 'undefined') && (typeof anything.core !== 'undefined') && (typeof anything.core.start_up !== 'undefined')){
} else {
anything.core.start_up = (function (){
anything.core.main.call(null);

console.log(cljs.core.deref.call(null,re_frame.db.app_db));

return true;
})()
;
}

//# sourceMappingURL=core.js.map
