goog.provide('re_frame.register.alpha');
if((typeof re_frame !== 'undefined') && (typeof re_frame.register !== 'undefined') && (typeof re_frame.register.alpha !== 'undefined') && (typeof re_frame.register.alpha.reg !== 'undefined')){
} else {
re_frame.register.alpha.reg = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16202 = cljs.core.get_global_hierarchy;
return (fexpr__16202.cljs$core$IFn$_invoke$arity$0 ? fexpr__16202.cljs$core$IFn$_invoke$arity$0() : fexpr__16202.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-frame.register.alpha","reg"),(function() { 
var G__16206__delegate = function (kind,_){
return kind;
};
var G__16206 = function (kind,var_args){
var _ = null;
if (arguments.length > 1) {
var G__16207__i = 0, G__16207__a = new Array(arguments.length -  1);
while (G__16207__i < G__16207__a.length) {G__16207__a[G__16207__i] = arguments[G__16207__i + 1]; ++G__16207__i;}
  _ = new cljs.core.IndexedSeq(G__16207__a,0,null);
} 
return G__16206__delegate.call(this,kind,_);};
G__16206.cljs$lang$maxFixedArity = 1;
G__16206.cljs$lang$applyTo = (function (arglist__16208){
var kind = cljs.core.first(arglist__16208);
var _ = cljs.core.rest(arglist__16208);
return G__16206__delegate(kind,_);
});
G__16206.cljs$core$IFn$_invoke$arity$variadic = G__16206__delegate;
return G__16206;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
re_frame.register.alpha.lifecycle__GT_method = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=re_frame.register.alpha.js.map
