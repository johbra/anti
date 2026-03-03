goog.provide('re_com.pill_tabs');
re_com.pill_tabs.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.pill-tabs","wrapper","re-com.pill-tabs/wrapper",-921951177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.pill-tabs","tab","re-com.pill-tabs/tab",-470552744),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.pill-tabs","anchor","re-com.pill-tabs/anchor",1504647734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null);
re_com.pill_tabs.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.pill_tabs.part_structure):null);
re_com.pill_tabs.part_names = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.pill_tabs.parts_desc)):null);
re_com.pill_tabs.args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"atom | any",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18414_SHARP_){
var or__5142__auto__ = (((!((p1__18414_SHARP_ == null))))?(((((p1__18414_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__18414_SHARP_.cljs$core$IAtom$))))?true:(((!p1__18414_SHARP_.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18414_SHARP_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18414_SHARP_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return (!((p1__18414_SHARP_ == null)));
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"selection atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18415_SHARP_){
var or__5142__auto__ = cljs.core.vector_QMARK_(p1__18415_SHARP_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
if((!((p1__18415_SHARP_ == null)))){
if((((p1__18415_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__18415_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__18415_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18415_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18415_SHARP_);
}
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"vector of tabs or atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when selection changes"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"keyword | fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18416_SHARP_){
return (((p1__18416_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core.fn_QMARK_(p1__18416_SHARP_)));
}),new cljs.core.Keyword(null,"description","description",-1428560544),"function to extract id from tab"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"keyword | fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18417_SHARP_){
return (((p1__18417_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core.fn_QMARK_(p1__18417_SHARP_)));
}),new cljs.core.Keyword(null,"description","description",-1428560544),"function to extract label from tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18418_SHARP_){
var or__5142__auto__ = cljs.core.boolean_QMARK_(p1__18418_SHARP_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
if((!((p1__18418_SHARP_ == null)))){
if((((p1__18418_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__18418_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__18418_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18418_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18418_SHARP_);
}
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"disable all tabs"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"tab type"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"vertical layout"], null),re_com.args.class$,re_com.args.attr,re_com.args.parts(re_com.pill_tabs.part_names),re_com.args.src,re_com.args.debug_as], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.pill_tabs.part_structure)], 0))):null);
re_com.pill_tabs.pill_tabs = (function re_com$pill_tabs$pill_tabs(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18494 = arguments.length;
var i__5877__auto___18495 = (0);
while(true){
if((i__5877__auto___18495 < len__5876__auto___18494)){
args__5882__auto__.push((arguments[i__5877__auto___18495]));

var G__18496 = (i__5877__auto___18495 + (1));
i__5877__auto___18495 = G__18496;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.pill_tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.pill_tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18445){
var map__18446 = p__18445;
var map__18446__$1 = cljs.core.__destructure_map(map__18446);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18446__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18446__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme__$1 = re_com.theme.comp(theme,pre_theme);
return (function() { 
var G__18497__delegate = function (p__18476){
var map__18477 = p__18476;
var map__18477__$1 = cljs.core.__destructure_map(map__18477);
var props = map__18477__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18477__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18477__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18477__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18477__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18477__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18477__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var tab_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18477__$1,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18477__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.pill_tabs.args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var model__$1 = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18434_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model__$1,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18434_SHARP_) : id_fn.call(null,p1__18434_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error((""+"Assert failed: "+"model not found in tabs vector"+"\n"+"(not-empty (filter (fn* [p1__18434#] (= model (id-fn p1__18434#))) tabs))")))})());
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.pill_tabs.part_structure,props);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),vertical_QMARK_,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_type], null)], null);
return part(new cljs.core.Keyword("re-com.pill-tabs","wrapper","re-com.pill-tabs/wrapper",-921951177),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge,re_com.debug.__GT_attr(props)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__5628__auto__ = (function re_com$pill_tabs$iter__18479(s__18480){
return (new cljs.core.LazySeq(null,(function (){
var s__18480__$1 = s__18480;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18480__$1);
if(temp__5823__auto__){
var s__18480__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18480__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__18480__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__18482 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__18481 = (0);
while(true){
if((i__18481 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__18481);
var map__18484 = t;
var map__18484__$1 = cljs.core.__destructure_map(map__18484);
var disabled_QMARK___$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18484__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1);
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,model__$1);
var tab_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enable","enable",-1839114332),(cljs.core.truth_(disabled_QMARK___$2)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756)),new cljs.core.Keyword(null,"selectable","selectable",370587038),((selected_QMARK_)?new cljs.core.Keyword(null,"selected","selected",574897764):new cljs.core.Keyword(null,"unselected","unselected",-1210198137))], null);
var tab_re_com = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(re_com__$1),tab_state], 0))], null);
var tab_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_type,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null);
cljs.core.chunk_append(b__18482,part(new cljs.core.Keyword("re-com.pill-tabs","tab","re-com.pill-tabs/tab",-470552744),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),t,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tab_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),tab_re_com,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.pill-tabs","anchor","re-com.pill-tabs/anchor",1504647734),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tab_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),tab_re_com,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null)], null)], 0))], null))], null)], null)], 0))], null)));

var G__18508 = (i__18481 + (1));
i__18481 = G__18508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18482),re_com$pill_tabs$iter__18479(cljs.core.chunk_rest(s__18480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18482),null);
}
} else {
var t = cljs.core.first(s__18480__$2);
var map__18485 = t;
var map__18485__$1 = cljs.core.__destructure_map(map__18485);
var disabled_QMARK___$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18485__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1);
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,model__$1);
var tab_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enable","enable",-1839114332),(cljs.core.truth_(disabled_QMARK___$2)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756)),new cljs.core.Keyword(null,"selectable","selectable",370587038),((selected_QMARK_)?new cljs.core.Keyword(null,"selected","selected",574897764):new cljs.core.Keyword(null,"unselected","unselected",-1210198137))], null);
var tab_re_com = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(re_com__$1),tab_state], 0))], null);
var tab_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_type,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null);
return cljs.core.cons(part(new cljs.core.Keyword("re-com.pill-tabs","tab","re-com.pill-tabs/tab",-470552744),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),t,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tab_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),tab_re_com,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.pill-tabs","anchor","re-com.pill-tabs/anchor",1504647734),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tab_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),tab_re_com,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null)], null)], 0))], null))], null)], null)], 0))], null)),re_com$pill_tabs$iter__18479(cljs.core.rest(s__18480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(tabs__$1);
})()], null)], null));
}
};
var G__18497 = function (var_args){
var p__18476 = null;
if (arguments.length > 0) {
var G__18509__i = 0, G__18509__a = new Array(arguments.length -  0);
while (G__18509__i < G__18509__a.length) {G__18509__a[G__18509__i] = arguments[G__18509__i + 0]; ++G__18509__i;}
  p__18476 = new cljs.core.IndexedSeq(G__18509__a,0,null);
} 
return G__18497__delegate.call(this,p__18476);};
G__18497.cljs$lang$maxFixedArity = 0;
G__18497.cljs$lang$applyTo = (function (arglist__18510){
var p__18476 = cljs.core.seq(arglist__18510);
return G__18497__delegate(p__18476);
});
G__18497.cljs$core$IFn$_invoke$arity$variadic = G__18497__delegate;
return G__18497;
})()
;
}));

(re_com.pill_tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.pill_tabs.pill_tabs.cljs$lang$applyTo = (function (seq18435){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18435));
}));

re_com.pill_tabs.vertical_pill_tabs = (function re_com$pill_tabs$vertical_pill_tabs(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18511 = arguments.length;
var i__5877__auto___18512 = (0);
while(true){
if((i__5877__auto___18512 < len__5876__auto___18511)){
args__5882__auto__.push((arguments[i__5877__auto___18512]));

var G__18513 = (i__5877__auto___18512 + (1));
i__5877__auto___18512 = G__18513;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.pill_tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.pill_tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18487){
var map__18488 = p__18487;
var map__18488__$1 = cljs.core.__destructure_map(map__18488);
var props = map__18488__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.pill_tabs.pill_tabs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true)], null);
}));

(re_com.pill_tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.pill_tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq18486){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18486));
}));

re_com.pill_tabs.horizontal_pill_tabs = re_com.pill_tabs.pill_tabs;

//# sourceMappingURL=re_com.pill_tabs.js.map
