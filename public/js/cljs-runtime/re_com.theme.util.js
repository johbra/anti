goog.provide('re_com.theme.util');
re_com.theme.util.merge_class = (function re_com$theme$util$merge_class(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16158 = arguments.length;
var i__5877__auto___16159 = (0);
while(true){
if((i__5877__auto___16159 < len__5876__auto___16158)){
args__5882__auto__.push((arguments[i__5877__auto___16159]));

var G__16161 = (i__5877__auto___16159 + (1));
i__5877__auto___16159 = G__16161;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.theme.util.merge_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.theme.util.merge_class.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.flatten(classes));
}));

(re_com.theme.util.merge_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.theme.util.merge_class.cljs$lang$applyTo = (function (seq16140){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16140));
}));

re_com.theme.util.style = (function re_com$theme$util$style(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16162 = arguments.length;
var i__5877__auto___16163 = (0);
while(true){
if((i__5877__auto___16163 < len__5876__auto___16162)){
args__5882__auto__.push((arguments[i__5877__auto___16163]));

var G__16164 = (i__5877__auto___16163 + (1));
i__5877__auto___16163 = G__16164;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic = (function (props,styles){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,props,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,styles);
}));

(re_com.theme.util.style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.theme.util.style.cljs$lang$applyTo = (function (seq16141){
var G__16142 = cljs.core.first(seq16141);
var seq16141__$1 = cljs.core.next(seq16141);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16142,seq16141__$1);
}));

re_com.theme.util.attr = (function re_com$theme$util$attr(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16165 = arguments.length;
var i__5877__auto___16166 = (0);
while(true){
if((i__5877__auto___16166 < len__5876__auto___16165)){
args__5882__auto__.push((arguments[i__5877__auto___16166]));

var G__16167 = (i__5877__auto___16166 + (1));
i__5877__auto___16166 = G__16167;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic = (function (props,attrs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,props,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge,attrs);
}));

(re_com.theme.util.attr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.theme.util.attr.cljs$lang$applyTo = (function (seq16143){
var G__16144 = cljs.core.first(seq16143);
var seq16143__$1 = cljs.core.next(seq16143);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16144,seq16143__$1);
}));

re_com.theme.util.class$ = (function re_com$theme$util$class(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16168 = arguments.length;
var i__5877__auto___16169 = (0);
while(true){
if((i__5877__auto___16169 < len__5876__auto___16168)){
args__5882__auto__.push((arguments[i__5877__auto___16169]));

var G__16170 = (i__5877__auto___16169 + (1));
i__5877__auto___16169 = G__16170;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic = (function (props,classes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,props,new cljs.core.Keyword(null,"class","class",-2030961996),re_com.theme.util.merge_class,classes);
}));

(re_com.theme.util.class$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.theme.util.class$.cljs$lang$applyTo = (function (seq16146){
var G__16147 = cljs.core.first(seq16146);
var seq16146__$1 = cljs.core.next(seq16146);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16147,seq16146__$1);
}));

re_com.theme.util.__GT_v = (function re_com$theme$util$__GT_v(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
if((x == null)){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
}
});
re_com.theme.util.merge_props_rf = (function re_com$theme$util$merge_props_rf(acc,p__16152){
var map__16154 = p__16152;
var map__16154__$1 = cljs.core.__destructure_map(map__16154);
var m = map__16154__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16154__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16154__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16154__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(function (){var G__16156 = m;
var G__16156__$1 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"class","class",-2030961996)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16156,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_com.theme.util.__GT_v(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(acc)),re_com.theme.util.__GT_v(class$))):G__16156);
var G__16156__$2 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"attr","attr",-604132353)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16156__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(acc),attr], 0))):G__16156__$1);
if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"style","style",-496642736))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16156__$2,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(acc),style], 0)));
} else {
return G__16156__$2;
}
})()], 0));
});
re_com.theme.util.merge_props = (function re_com$theme$util$merge_props(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16172 = arguments.length;
var i__5877__auto___16173 = (0);
while(true){
if((i__5877__auto___16173 < len__5876__auto___16172)){
args__5882__auto__.push((arguments[i__5877__auto___16173]));

var G__16174 = (i__5877__auto___16173 + (1));
i__5877__auto___16173 = G__16174;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_com.theme.util.merge_props_rf,cljs.core.PersistentArrayMap.EMPTY,ms);
}));

(re_com.theme.util.merge_props.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.theme.util.merge_props.cljs$lang$applyTo = (function (seq16157){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16157));
}));


//# sourceMappingURL=re_com.theme.util.js.map
