goog.provide('re_com.checkbox');
re_com.checkbox.part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.checkbox","wrapper","re-com.checkbox/wrapper",-185371050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","h-box","re-com.core/h-box",-920824865,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.checkbox","input","re-com.checkbox/input",-679905117),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.checkbox","label","re-com.checkbox/label",19607322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null);
re_com.checkbox.checkbox_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.checkbox.part_structure):null);
re_com.checkbox.checkbox_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.checkbox.checkbox_parts_desc)):null);
re_com.checkbox.checkbox_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__17086_SHARP_){
var or__5142__auto__ = (p1__17086_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (!((p1__17086_SHARP_ == null)));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
if((!((p1__17086_SHARP_ == null)))){
if((((p1__17086_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__17086_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__17086_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17086_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17086_SHARP_);
}
}
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"holds state of the checkbox when it is called"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the checkbox is clicked. Passed the new value of the checkbox"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__17087_SHARP_){
var or__5142__auto__ = (p1__17087_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (!((p1__17087_SHARP_ == null)));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
if((!((p1__17087_SHARP_ == null)))){
if((((p1__17087_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__17087_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__17087_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17087_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__17087_SHARP_);
}
}
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"if true, user interaction is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style map (applies to the label)"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.checkbox.checkbox_parts),re_com.args.src,re_com.args.debug_as], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.checkbox.part_structure)], 0))):null);
/**
 * Displays a single checkbox with optional label
 */
re_com.checkbox.checkbox = (function re_com$checkbox$checkbox(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17101 = arguments.length;
var i__5877__auto___17102 = (0);
while(true){
if((i__5877__auto___17102 < len__5876__auto___17101)){
args__5882__auto__.push((arguments[i__5877__auto___17102]));

var G__17103 = (i__5877__auto___17102 + (1));
i__5877__auto___17102 = G__17103;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.checkbox.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.checkbox.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__17092){
var map__17093 = p__17092;
var map__17093__$1 = cljs.core.__destructure_map(map__17093);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17093__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17093__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__17105__delegate = function (p__17094){
var map__17095 = p__17094;
var map__17095__$1 = cljs.core.__destructure_map(map__17095);
var props = map__17095__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.checkbox.checkbox_args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.checkbox.part_structure,props);
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var label_provided_QMARK_ = re_com.part.get_part(re_com.checkbox.part_structure,props,new cljs.core.Keyword("re-com.checkbox","label","re-com.checkbox/label",19607322));
var callback_fn = (function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = on_change;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__5140__auto__;
}
})())){
var G__17096 = cljs.core.not(model__$1);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17096) : on_change.call(null,G__17096));
} else {
return null;
}
});
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"model","model",331153215),model__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202),label_class,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),label_style,new cljs.core.Keyword(null,"label-provided?","label-provided?",-1297544208),label_provided_QMARK_], null)], null);
return part(new cljs.core.Keyword("re-com.checkbox","wrapper","re-com.checkbox/wrapper",-185371050),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(cljs.core.PersistentArrayMap.EMPTY,props),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.checkbox","input","re-com.checkbox/input",-679905117),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$(model__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
callback_fn();

return null;
})], null)], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),(function (){var G__17097 = cljs.core.PersistentArrayMap.EMPTY;
var G__17097__$1 = (cljs.core.truth_(class$)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17097,new cljs.core.Keyword(null,"class","class",-2030961996),class$):G__17097);
var G__17097__$2 = (cljs.core.truth_(style)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17097__$1,new cljs.core.Keyword(null,"style","style",-496642736),style):G__17097__$1);
if(cljs.core.truth_(attr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17097__$2,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
} else {
return G__17097__$2;
}
})()], null)),(cljs.core.truth_(label_provided_QMARK_)?part(new cljs.core.Keyword("re-com.checkbox","label","re-com.checkbox/label",19607322),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
callback_fn();

return null;
})], null)], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),(function (){var G__17098 = cljs.core.PersistentArrayMap.EMPTY;
var G__17098__$1 = (cljs.core.truth_(label_class)?re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(G__17098,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label_class], 0)):G__17098);
if(cljs.core.truth_(label_style)){
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__17098__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label_style], 0));
} else {
return G__17098__$1;
}
})()], null)):null)], null)], null)], null));
}
};
var G__17105 = function (var_args){
var p__17094 = null;
if (arguments.length > 0) {
var G__17112__i = 0, G__17112__a = new Array(arguments.length -  0);
while (G__17112__i < G__17112__a.length) {G__17112__a[G__17112__i] = arguments[G__17112__i + 0]; ++G__17112__i;}
  p__17094 = new cljs.core.IndexedSeq(G__17112__a,0,null);
} 
return G__17105__delegate.call(this,p__17094);};
G__17105.cljs$lang$maxFixedArity = 0;
G__17105.cljs$lang$applyTo = (function (arglist__17113){
var p__17094 = cljs.core.seq(arglist__17113);
return G__17105__delegate(p__17094);
});
G__17105.cljs$core$IFn$_invoke$arity$variadic = G__17105__delegate;
return G__17105;
})()
;
}));

(re_com.checkbox.checkbox.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.checkbox.checkbox.cljs$lang$applyTo = (function (seq17091){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17091));
}));


//# sourceMappingURL=re_com.checkbox.js.map
