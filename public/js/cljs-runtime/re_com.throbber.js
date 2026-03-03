goog.provide('re_com.throbber');
re_com.throbber.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.throbber","wrapper","re-com.throbber/wrapper",-232048079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.throbber","throbber","re-com.throbber/throbber",218260494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.throbber","segment","re-com.throbber/segment",-529719489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null)], null)], null)], null);
re_com.throbber.throbber_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.throbber.part_structure):null);
re_com.throbber.throbber_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.throbber.throbber_parts_desc)):null);
re_com.throbber.throbber_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.throbber_size_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.throbber_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"#999",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS color"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.throbber.throbber_parts),re_com.args.src,re_com.args.debug_as], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.throbber.part_structure)], 0))):null);
/**
 * Render an animated throbber using CSS
 */
re_com.throbber.throbber = (function re_com$throbber$throbber(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17636 = arguments.length;
var i__5877__auto___17637 = (0);
while(true){
if((i__5877__auto___17637 < len__5876__auto___17636)){
args__5882__auto__.push((arguments[i__5877__auto___17637]));

var G__17638 = (i__5877__auto___17637 + (1));
i__5877__auto___17637 = G__17638;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.throbber.throbber.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.throbber.throbber.cljs$core$IFn$_invoke$arity$variadic = (function (p__17628){
var map__17629 = p__17628;
var map__17629__$1 = cljs.core.__destructure_map(map__17629);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17629__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17629__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__17639__delegate = function (p__17630){
var map__17631 = p__17630;
var map__17631__$1 = cljs.core.__destructure_map(map__17631);
var props = map__17631__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17631__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"regular","regular",-1153375582));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17631__$1,new cljs.core.Keyword(null,"color","color",1011675173),"#999");
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.throbber.throbber_args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.throbber.part_structure,props);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null);
return part(new cljs.core.Keyword("re-com.throbber","wrapper","re-com.throbber/wrapper",-232048079),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),re_com.debug.__GT_attr(props)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.throbber","throbber","re-com.throbber/throbber",218260494),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__5628__auto__ = (function re_com$throbber$iter__17632(s__17633){
return (new cljs.core.LazySeq(null,(function (){
var s__17633__$1 = s__17633;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17633__$1);
if(temp__5823__auto__){
var s__17633__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17633__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__17633__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__17635 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__17634 = (0);
while(true){
if((i__17634 < size__5627__auto__)){
var _ = cljs.core._nth(c__5626__auto__,i__17634);
cljs.core.chunk_append(b__17635,part(new cljs.core.Keyword("re-com.throbber","segment","re-com.throbber/segment",-529719489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921)], null)], null)));

var G__17640 = (i__17634 + (1));
i__17634 = G__17640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17635),re_com$throbber$iter__17632(cljs.core.chunk_rest(s__17633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17635),null);
}
} else {
var _ = cljs.core.first(s__17633__$2);
return cljs.core.cons(part(new cljs.core.Keyword("re-com.throbber","segment","re-com.throbber/segment",-529719489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921)], null)], null)),re_com$throbber$iter__17632(cljs.core.rest(s__17633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8)));
})()], null)], null))], null)], null));
}
};
var G__17639 = function (var_args){
var p__17630 = null;
if (arguments.length > 0) {
var G__17641__i = 0, G__17641__a = new Array(arguments.length -  0);
while (G__17641__i < G__17641__a.length) {G__17641__a[G__17641__i] = arguments[G__17641__i + 0]; ++G__17641__i;}
  p__17630 = new cljs.core.IndexedSeq(G__17641__a,0,null);
} 
return G__17639__delegate.call(this,p__17630);};
G__17639.cljs$lang$maxFixedArity = 0;
G__17639.cljs$lang$applyTo = (function (arglist__17642){
var p__17630 = cljs.core.seq(arglist__17642);
return G__17639__delegate(p__17630);
});
G__17639.cljs$core$IFn$_invoke$arity$variadic = G__17639__delegate;
return G__17639;
})()
;
}));

(re_com.throbber.throbber.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.throbber.throbber.cljs$lang$applyTo = (function (seq17627){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17627));
}));


//# sourceMappingURL=re_com.throbber.js.map
