goog.provide('re_com.bar_tabs');
re_com.bar_tabs.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.bar-tabs","wrapper","re-com.bar-tabs/wrapper",-1109350661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.bar-tabs","tooltip","re-com.bar-tabs/tooltip",1103004893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.bar-tabs","tooltip-label","re-com.bar-tabs/tooltip-label",-261365397)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.bar-tabs","button","re-com.bar-tabs/button",142976392),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null)], null)], null)], null);
re_com.bar_tabs.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.bar_tabs.part_structure):null);
re_com.bar_tabs.part_names = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.bar_tabs.parts_desc)):null);
re_com.bar_tabs.args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"atom | any",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18440_SHARP_){
var or__5142__auto__ = (((!((p1__18440_SHARP_ == null))))?(((((p1__18440_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__18440_SHARP_.cljs$core$IAtom$))))?true:(((!p1__18440_SHARP_.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18440_SHARP_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18440_SHARP_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return (!((p1__18440_SHARP_ == null)));
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"selection atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18441_SHARP_){
var or__5142__auto__ = cljs.core.vector_QMARK_(p1__18441_SHARP_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
if((!((p1__18441_SHARP_ == null)))){
if((((p1__18441_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__18441_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__18441_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18441_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18441_SHARP_);
}
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"vector of tabs or atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when selection changes"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"keyword | fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18442_SHARP_){
return (((p1__18442_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core.fn_QMARK_(p1__18442_SHARP_)));
}),new cljs.core.Keyword(null,"description","description",-1428560544),"function to extract id from tab"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"keyword | fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18443_SHARP_){
return (((p1__18443_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core.fn_QMARK_(p1__18443_SHARP_)));
}),new cljs.core.Keyword(null,"description","description",-1428560544),"function to extract label from tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),(function (p1__18444_SHARP_){
var or__5142__auto__ = cljs.core.boolean_QMARK_(p1__18444_SHARP_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
if((!((p1__18444_SHARP_ == null)))){
if((((p1__18444_SHARP_.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === p1__18444_SHARP_.cljs$core$IAtom$)))){
return true;
} else {
if((!p1__18444_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18444_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,p1__18444_SHARP_);
}
}
}),new cljs.core.Keyword(null,"description","description",-1428560544),"disable all tabs"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"tab type"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"vertical layout"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its tooltip"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"validate?","validate?",356227962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Validate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," against ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null)], null)], null),re_com.args.class$,re_com.args.attr,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Applies to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":button"], null)," part."], null)], null),re_com.args.parts(re_com.bar_tabs.part_names),re_com.args.src,re_com.args.debug_as], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.bar_tabs.part_structure)], 0))):null);
re_com.bar_tabs.tab_tooltip = (function re_com$bar_tabs$tab_tooltip(p__18450){
var map__18451 = p__18450;
var map__18451__$1 = cljs.core.__destructure_map(map__18451);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18451__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var anchor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18451__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/bar_tabs.cljs",new cljs.core.Keyword(null,"line","line",212345235),60], null)),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"showing?","showing?",2094921488),cljs.core.deref(showing_QMARK_),new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null);
});
re_com.bar_tabs.bar_tabs = (function re_com$bar_tabs$bar_tabs(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18561 = arguments.length;
var i__5877__auto___18562 = (0);
while(true){
if((i__5877__auto___18562 < len__5876__auto___18561)){
args__5882__auto__.push((arguments[i__5877__auto___18562]));

var G__18563 = (i__5877__auto___18562 + (1));
i__5877__auto___18562 = G__18563;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.bar_tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.bar_tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18464){
var map__18465 = p__18464;
var map__18465__$1 = cljs.core.__destructure_map(map__18465);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme__$1 = re_com.theme.comp(theme,pre_theme);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__18564__delegate = function (p__18470){
var map__18471 = p__18470;
var map__18471__$1 = cljs.core.__destructure_map(map__18471);
var props = map__18471__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18471__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18471__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var tab_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18471__$1,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.bar_tabs.args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var model__$1 = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18455_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model__$1,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18455_SHARP_) : id_fn.call(null,p1__18455_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error((""+"Assert failed: "+"model not found in tabs vector"+"\n"+"(not-empty (filter (fn* [p1__18455#] (= model (id-fn p1__18455#))) tabs))")))})());
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.bar_tabs.part_structure,props);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),vertical_QMARK_,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_type], null)], null);
return part(new cljs.core.Keyword("re-com.bar-tabs","wrapper","re-com.bar-tabs/wrapper",-1109350661),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge,re_com.debug.__GT_attr(props)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__5628__auto__ = (function re_com$bar_tabs$iter__18472(s__18473){
return (new cljs.core.LazySeq(null,(function (){
var s__18473__$1 = s__18473;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18473__$1);
if(temp__5823__auto__){
var s__18473__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18473__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__18473__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__18475 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__18474 = (0);
while(true){
if((i__18474 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__18474);
var map__18492 = t;
var map__18492__$1 = cljs.core.__destructure_map(map__18492);
var disabled_QMARK___$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18492__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1);
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,model__$1);
var tab_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enable","enable",-1839114332),(cljs.core.truth_(disabled_QMARK___$2)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756)),new cljs.core.Keyword(null,"selectable","selectable",370587038),((selected_QMARK_)?new cljs.core.Keyword(null,"selected","selected",574897764):new cljs.core.Keyword(null,"unselected","unselected",-1210198137))], null);
var tab_re_com = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(re_com__$1),tab_state], 0))], null);
var tab_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_type,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null);
var tooltip_part = (function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(id) : tooltip_fn.call(null,id)):null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"tooltip-label","tooltip-label",580903244).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(props));
}
}
})();
var button_part = part(new cljs.core.Keyword("re-com.bar-tabs","button","re-com.bar-tabs/button",142976392),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),t,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tab_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),tab_re_com,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null)], null),(cljs.core.truth_(tooltip_part)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,id);

return null;
});})(i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,((function (i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme){
return (function (p1__18456_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__18456_SHARP_)){
return null;
} else {
return p1__18456_SHARP_;
}
});})(i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme))
);

return null;
});})(i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme))
], null)], null):null)], 0)),new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null))], null));
cljs.core.chunk_append(b__18475,((cljs.core.not(tooltip_part))?button_part:part(new cljs.core.Keyword("re-com.bar-tabs","tooltip","re-com.bar-tabs/tooltip",1103004893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.bar_tabs.tab_tooltip,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),re_com.part.part.cljs$core$IFn$_invoke$arity$2(tooltip_part,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.bar-tabs","tooltip-label","re-com.bar-tabs/tooltip-label",-261365397),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),tooltip_position,new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,button_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing_QMARK_));
});})(i__18474,map__18492,map__18492__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,button_part,t,c__5626__auto__,size__5627__auto__,b__18475,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),button_part], null)], null))));

var G__18568 = (i__18474 + (1));
i__18474 = G__18568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18475),re_com$bar_tabs$iter__18472(cljs.core.chunk_rest(s__18473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18475),null);
}
} else {
var t = cljs.core.first(s__18473__$2);
var map__18521 = t;
var map__18521__$1 = cljs.core.__destructure_map(map__18521);
var disabled_QMARK___$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18521__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1);
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,model__$1);
var tab_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enable","enable",-1839114332),(cljs.core.truth_(disabled_QMARK___$2)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756)),new cljs.core.Keyword(null,"selectable","selectable",370587038),((selected_QMARK_)?new cljs.core.Keyword(null,"selected","selected",574897764):new cljs.core.Keyword(null,"unselected","unselected",-1210198137))], null);
var tab_re_com = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(re_com__$1),tab_state], 0))], null);
var tab_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495),tab_type,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null);
var tooltip_part = (function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(id) : tooltip_fn.call(null,id)):null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"tooltip-label","tooltip-label",580903244).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(props));
}
}
})();
var button_part = part(new cljs.core.Keyword("re-com.bar-tabs","button","re-com.bar-tabs/button",142976392),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),t,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tab_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),tab_re_com,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null)], null),(cljs.core.truth_(tooltip_part)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (map__18521,map__18521__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme){
return (function (event){
cljs.core.reset_BANG_(showing_QMARK_,id);

return null;
});})(map__18521,map__18521__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (map__18521,map__18521__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,(function (p1__18456_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__18456_SHARP_)){
return null;
} else {
return p1__18456_SHARP_;
}
}));

return null;
});})(map__18521,map__18521__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,t,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme))
], null)], null):null)], 0)),new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null))], null));
return cljs.core.cons(((cljs.core.not(tooltip_part))?button_part:part(new cljs.core.Keyword("re-com.bar-tabs","tooltip","re-com.bar-tabs/tooltip",1103004893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.bar_tabs.tab_tooltip,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),re_com.part.part.cljs$core$IFn$_invoke$arity$2(tooltip_part,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.bar-tabs","tooltip-label","re-com.bar-tabs/tooltip-label",-261365397),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),tooltip_position,new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (map__18521,map__18521__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,button_part,t,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing_QMARK_));
});})(map__18521,map__18521__$1,disabled_QMARK___$2,id,label,selected_QMARK_,tab_state,tab_re_com,tab_props,tooltip_part,button_part,t,s__18473__$2,temp__5823__auto__,model__$1,tabs__$1,disabled_QMARK___$1,_,part,re_com__$1,or__5142__auto__,map__18471,map__18471__$1,props,disabled_QMARK_,on_change,model,label_fn,tabs,tooltip_fn,id_fn,tab_type,vertical_QMARK_,tooltip_position,theme__$1,showing_QMARK_,map__18465,map__18465__$1,theme,pre_theme))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),button_part], null)], null))),re_com$bar_tabs$iter__18472(cljs.core.rest(s__18473__$2)));
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
var G__18564 = function (var_args){
var p__18470 = null;
if (arguments.length > 0) {
var G__18573__i = 0, G__18573__a = new Array(arguments.length -  0);
while (G__18573__i < G__18573__a.length) {G__18573__a[G__18573__i] = arguments[G__18573__i + 0]; ++G__18573__i;}
  p__18470 = new cljs.core.IndexedSeq(G__18573__a,0,null);
} 
return G__18564__delegate.call(this,p__18470);};
G__18564.cljs$lang$maxFixedArity = 0;
G__18564.cljs$lang$applyTo = (function (arglist__18574){
var p__18470 = cljs.core.seq(arglist__18574);
return G__18564__delegate(p__18470);
});
G__18564.cljs$core$IFn$_invoke$arity$variadic = G__18564__delegate;
return G__18564;
})()
;
}));

(re_com.bar_tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.bar_tabs.bar_tabs.cljs$lang$applyTo = (function (seq18460){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18460));
}));

re_com.bar_tabs.vertical_bar_tabs = (function re_com$bar_tabs$vertical_bar_tabs(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18575 = arguments.length;
var i__5877__auto___18576 = (0);
while(true){
if((i__5877__auto___18576 < len__5876__auto___18575)){
args__5882__auto__.push((arguments[i__5877__auto___18576]));

var G__18577 = (i__5877__auto___18576 + (1));
i__5877__auto___18576 = G__18577;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.bar_tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.bar_tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__18538){
var map__18539 = p__18538;
var map__18539__$1 = cljs.core.__destructure_map(map__18539);
var props = map__18539__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.bar_tabs.bar_tabs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true)], null);
}));

(re_com.bar_tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.bar_tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq18535){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18535));
}));

re_com.bar_tabs.horizontal_bar_tabs = re_com.bar_tabs.bar_tabs;

//# sourceMappingURL=re_com.bar_tabs.js.map
