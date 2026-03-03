goog.provide('re_com.progress_bar');
re_com.progress_bar.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.progress-bar","wrapper","re-com.progress-bar/wrapper",464530182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.progress-bar","container","re-com.progress-bar/container",-855971029),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.progress-bar","portion","re-com.progress-bar/portion",-1766687620)], null)], null)], null);
re_com.progress_bar.progress_bar_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.progress_bar.part_structure):null);
re_com.progress_bar.progress_bar_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.progress_bar.progress_bar_parts_desc)):null);
re_com.progress_bar.progress_bar_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider. A number between 0 and 100"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"striped?","striped?",-797214979),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the progress section is a set of animated stripes"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bar-class","bar-class",1668073058),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class name(s) for the actual progress bar itself, space separated"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.progress_bar.progress_bar_parts),re_com.args.src,re_com.args.debug_as], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.progress_bar.part_structure)], 0))):null);
/**
 * Render a bootstrap styled progress bar
 */
re_com.progress_bar.progress_bar = (function re_com$progress_bar$progress_bar(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18171 = arguments.length;
var i__5877__auto___18172 = (0);
while(true){
if((i__5877__auto___18172 < len__5876__auto___18171)){
args__5882__auto__.push((arguments[i__5877__auto___18172]));

var G__18173 = (i__5877__auto___18172 + (1));
i__5877__auto___18172 = G__18173;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.progress_bar.progress_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__18166){
var map__18167 = p__18166;
var map__18167__$1 = cljs.core.__destructure_map(map__18167);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18167__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18167__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__18174__delegate = function (p__18168){
var map__18169 = p__18168;
var map__18169__$1 = cljs.core.__destructure_map(map__18169);
var props = map__18169__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18169__$1,new cljs.core.Keyword(null,"width","width",-384071477),"100%");
var striped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,new cljs.core.Keyword(null,"striped?","striped?",-797214979));
var bar_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,new cljs.core.Keyword(null,"bar-class","bar-class",1668073058));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.progress_bar.progress_bar_args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var model__$1 = re_com.util.deref_or_value(model);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.progress_bar.part_structure,props);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),model__$1,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"striped?","striped?",-797214979),striped_QMARK_,new cljs.core.Keyword(null,"bar-class","bar-class",1668073058),bar_class], null)], null);
return part(new cljs.core.Keyword("re-com.progress-bar","wrapper","re-com.progress-bar/wrapper",464530182),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),props),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.progress-bar","container","re-com.progress-bar/container",-855971029),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.progress-bar","portion","re-com.progress-bar/portion",-1766687620),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),(function (){var G__18170 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"progressbar"], null)], null);
if(cljs.core.truth_(bar_class)){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(G__18170,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bar_class], 0));
} else {
return G__18170;
}
})(),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"striped?","striped?",-797214979),striped_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1)+"%"),new cljs.core.Keyword(null,"transition","transition",765692007),"none"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1)+"%")], null)], null)], null))], null)], null)], null))], null)], null));
}
};
var G__18174 = function (var_args){
var p__18168 = null;
if (arguments.length > 0) {
var G__18175__i = 0, G__18175__a = new Array(arguments.length -  0);
while (G__18175__i < G__18175__a.length) {G__18175__a[G__18175__i] = arguments[G__18175__i + 0]; ++G__18175__i;}
  p__18168 = new cljs.core.IndexedSeq(G__18175__a,0,null);
} 
return G__18174__delegate.call(this,p__18168);};
G__18174.cljs$lang$maxFixedArity = 0;
G__18174.cljs$lang$applyTo = (function (arglist__18176){
var p__18168 = cljs.core.seq(arglist__18176);
return G__18174__delegate(p__18168);
});
G__18174.cljs$core$IFn$_invoke$arity$variadic = G__18174__delegate;
return G__18174;
})()
;
}));

(re_com.progress_bar.progress_bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.progress_bar.progress_bar.cljs$lang$applyTo = (function (seq18165){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18165));
}));


//# sourceMappingURL=re_com.progress_bar.js.map
