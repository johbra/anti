goog.provide('re_com.radio_button');
re_com.radio_button.radio_button_part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.radio-button","wrapper","re-com.radio-button/wrapper",-353476521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","h-box","re-com.box/h-box",574665693,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.radio-button","input","re-com.radio-button/input",-846438746),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.radio-button","label","re-com.radio-button/label",855383327),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),"empty"], null)], null)], null);
re_com.radio_button.radio_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.radio_button.radio_button_part_structure):null);
re_com.radio_button.radio_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.radio_button.radio_button_parts_desc)):null);
re_com.radio_button.radio_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"selected value of the radio button group. See also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)," then this radio button is selected"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the radio button is clicked. Passed ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the radio button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names (applies to the label)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style map (applies to the label)"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.radio_button.radio_button_parts),re_com.args.src,re_com.args.debug_as], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(re_com.theme.args_desc,re_com.part.describe_args(re_com.radio_button.radio_button_part_structure))):null);
/**
 * I return the markup for a radio button, with an optional RHS label
 */
re_com.radio_button.radio_button = (function re_com$radio_button$radio_button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18269 = arguments.length;
var i__5877__auto___18270 = (0);
while(true){
if((i__5877__auto___18270 < len__5876__auto___18269)){
args__5882__auto__.push((arguments[i__5877__auto___18270]));

var G__18271 = (i__5877__auto___18270 + (1));
i__5877__auto___18270 = G__18271;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.radio_button.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.radio_button.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__18259){
var map__18260 = p__18259;
var map__18260__$1 = cljs.core.__destructure_map(map__18260);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18260__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18260__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18260__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__18273__delegate = function (p__18261){
var map__18262 = p__18261;
var map__18262__$1 = cljs.core.__destructure_map(map__18262);
var args = map__18262__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"model","model",331153215));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var label_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.radio_button.radio_button_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var model__$1 = re_com.util.deref_or_value(model);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var checked_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model__$1,value);
var callback_fn = (function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = on_change;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(disabled_QMARK___$1)) && ((!(checked_QMARK_))));
} else {
return and__5140__auto__;
}
})())){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
});
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.radio_button.radio_button_part_structure,args);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091),checked_QMARK_,new cljs.core.Keyword(null,"label-class","label-class",-2068991202),label_class,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),label_style], null)], null);
var input_part = part(new cljs.core.Keyword("re-com.radio-button","input","re-com.radio-button/input",-846438746),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
callback_fn();

return null;
})], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),81], null)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961)], null)], null));
var label_QMARK_ = re_com.part.get_part(re_com.radio_button.radio_button_part_structure,args,new cljs.core.Keyword("re-com.radio-button","label","re-com.radio-button/label",855383327));
var label_part = (cljs.core.truth_(label_QMARK_)?part(new cljs.core.Keyword("re-com.radio-button","label","re-com.radio-button/label",855383327),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
callback_fn();

return null;
})], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),89], null))], null)], null)):null);
return part(new cljs.core.Keyword("re-com.radio-button","wrapper","re-com.radio-button/wrapper",-353476521),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})()], null),args),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),96], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_part,label_part], null)], null)], null));
}
};
var G__18273 = function (var_args){
var p__18261 = null;
if (arguments.length > 0) {
var G__18277__i = 0, G__18277__a = new Array(arguments.length -  0);
while (G__18277__i < G__18277__a.length) {G__18277__a[G__18277__i] = arguments[G__18277__i + 0]; ++G__18277__i;}
  p__18261 = new cljs.core.IndexedSeq(G__18277__a,0,null);
} 
return G__18273__delegate.call(this,p__18261);};
G__18273.cljs$lang$maxFixedArity = 0;
G__18273.cljs$lang$applyTo = (function (arglist__18278){
var p__18261 = cljs.core.seq(arglist__18278);
return G__18273__delegate(p__18261);
});
G__18273.cljs$core$IFn$_invoke$arity$variadic = G__18273__delegate;
return G__18273;
})()
;
}));

(re_com.radio_button.radio_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.radio_button.radio_button.cljs$lang$applyTo = (function (seq18255){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18255));
}));


//# sourceMappingURL=re_com.radio_button.js.map
