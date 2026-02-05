// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16516__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16517__i = 0, G__16517__a = new Array(arguments.length -  0);
while (G__16517__i < G__16517__a.length) {G__16517__a[G__16517__i] = arguments[G__16517__i + 0]; ++G__16517__i;}
  args = new cljs.core.IndexedSeq(G__16517__a,0,null);
} 
return G__16516__delegate.call(this,args);};
G__16516.cljs$lang$maxFixedArity = 0;
G__16516.cljs$lang$applyTo = (function (arglist__16518){
var args = cljs.core.seq(arglist__16518);
return G__16516__delegate(args);
});
G__16516.cljs$core$IFn$_invoke$arity$variadic = G__16516__delegate;
return G__16516;
})()
);

(o.error = (function() { 
var G__16519__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16520__i = 0, G__16520__a = new Array(arguments.length -  0);
while (G__16520__i < G__16520__a.length) {G__16520__a[G__16520__i] = arguments[G__16520__i + 0]; ++G__16520__i;}
  args = new cljs.core.IndexedSeq(G__16520__a,0,null);
} 
return G__16519__delegate.call(this,args);};
G__16519.cljs$lang$maxFixedArity = 0;
G__16519.cljs$lang$applyTo = (function (arglist__16521){
var args = cljs.core.seq(arglist__16521);
return G__16519__delegate(args);
});
G__16519.cljs$core$IFn$_invoke$arity$variadic = G__16519__delegate;
return G__16519;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
