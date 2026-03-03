goog.provide('re_com.slider');
re_com.slider.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.slider","wrapper","re-com.slider/wrapper",467746228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.slider","input","re-com.slider/input",-57707199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961)], null)], null)], null);
re_com.slider.slider_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.slider.part_structure):null);
re_com.slider.slider_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.slider.slider_parts_desc)):null);
re_com.slider.slider_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the slider is moved. Passed the new value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the minimum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(100),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(1),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"step value between min and max"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"400px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't change the slider"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.slider.slider_parts),re_com.args.src,re_com.args.debug_as], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(re_com.theme.args_desc,re_com.part.describe_args(re_com.slider.part_structure))):null);
/**
 * Returns markup for an HTML5 slider input
 */
re_com.slider.slider = (function re_com$slider$slider(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18344 = arguments.length;
var i__5877__auto___18345 = (0);
while(true){
if((i__5877__auto___18345 < len__5876__auto___18344)){
args__5882__auto__.push((arguments[i__5877__auto___18345]));

var G__18346 = (i__5877__auto___18345 + (1));
i__5877__auto___18345 = G__18346;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.slider.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.slider.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__18317){
var map__18318 = p__18317;
var map__18318__$1 = cljs.core.__destructure_map(map__18318);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18318__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18318__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18318__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__18348__delegate = function (p__18322){
var map__18323 = p__18322;
var map__18323__$1 = cljs.core.__destructure_map(map__18323);
var args = map__18323__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,new cljs.core.Keyword(null,"model","model",331153215));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18323__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18323__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18323__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.slider.slider_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.slider.part_structure,args);
var model__$1 = re_com.util.deref_or_value(model);
var min__$1 = re_com.util.deref_or_value(min);
var max__$1 = re_com.util.deref_or_value(max);
var step__$1 = re_com.util.deref_or_value(step);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"width","width",-384071477),width], null)], null);
return part(new cljs.core.Keyword("re-com.slider","wrapper","re-com.slider/wrapper",467746228),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),re_com.debug.__GT_attr(args),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})()], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.slider","input","re-com.slider/input",-57707199),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min__$1,new cljs.core.Keyword(null,"max","max",61366548),max__$1,new cljs.core.Keyword(null,"step","step",1288888124),step__$1,new cljs.core.Keyword(null,"value","value",305978217),model__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
var G__18337_18353 = Number(event.target.value);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18337_18353) : on_change.call(null,G__18337_18353));

return null;
})], null)], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null))], null)], null));
}
};
var G__18348 = function (var_args){
var p__18322 = null;
if (arguments.length > 0) {
var G__18354__i = 0, G__18354__a = new Array(arguments.length -  0);
while (G__18354__i < G__18354__a.length) {G__18354__a[G__18354__i] = arguments[G__18354__i + 0]; ++G__18354__i;}
  p__18322 = new cljs.core.IndexedSeq(G__18354__a,0,null);
} 
return G__18348__delegate.call(this,p__18322);};
G__18348.cljs$lang$maxFixedArity = 0;
G__18348.cljs$lang$applyTo = (function (arglist__18355){
var p__18322 = cljs.core.seq(arglist__18355);
return G__18348__delegate(p__18322);
});
G__18348.cljs$core$IFn$_invoke$arity$variadic = G__18348__delegate;
return G__18348;
})()
;
}));

(re_com.slider.slider.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.slider.slider.cljs$lang$applyTo = (function (seq18308){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18308));
}));


//# sourceMappingURL=re_com.slider.js.map
