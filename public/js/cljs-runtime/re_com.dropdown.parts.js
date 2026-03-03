goog.provide('re_com.dropdown.parts');
re_com.dropdown.parts.indicator = (function re_com$dropdown$parts$indicator(p__17301){
var map__17302 = p__17301;
var map__17302__$1 = cljs.core.__destructure_map(map__17302);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17302__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17302__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.util.triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"direction","direction",-633359395),(function (){var G__17303 = new cljs.core.Keyword(null,"openable","openable",1470121013).cljs$core$IFn$_invoke$arity$1(state);
var G__17303__$1 = (((G__17303 instanceof cljs.core.Keyword))?G__17303.fqn:null);
switch (G__17303__$1) {
case "open":
return new cljs.core.Keyword(null,"up","up",-269712113);

break;
case "closed":
return new cljs.core.Keyword(null,"down","down",1565245570);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17303__$1))));

}
})()], null)], null)], null);
});

//# sourceMappingURL=re_com.dropdown.parts.js.map
