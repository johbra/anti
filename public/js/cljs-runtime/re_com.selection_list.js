goog.provide('re_com.selection_list');
re_com.selection_list.label_style = (function re_com$selection_list$label_style(var_args){
var G__18297 = arguments.length;
switch (G__18297) {
case 2:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2 = (function (selected_QMARK_,as_exclusions_QMARK_){
return re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3(selected_QMARK_,as_exclusions_QMARK_,null);
}));

(re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$3 = (function (selected_QMARK_,as_exclusions_QMARK_,selected_color){
var base_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1px"], null);
var base_style__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return as_exclusions_QMARK_;
} else {
return and__5140__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], 0)):base_style);
var base_style__$2 = (cljs.core.truth_((function (){var and__5140__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return selected_color;
} else {
return and__5140__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),selected_color], null)], 0)):base_style__$1);
return base_style__$2;
}));

(re_com.selection_list.label_style.cljs$lang$maxFixedArity = 3);

re_com.selection_list.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","wrapper","re-com.selection-list/wrapper",-1120234222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","border","re-com.box/border",1958512590,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper for the selection list."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","list-group","re-com.selection-list/list-group",-19199975),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Container for the selection list items."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","list-group-item","re-com.selection-list/list-group-item",-1728671473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","item-content","re-com.selection-list/item-content",1203864654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","h-box","re-com.box/h-box",574665693,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","checkbox","re-com.selection-list/checkbox",-618871923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.checkbox","checkbox","re-com.checkbox/checkbox",1731093776,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","label","re-com.selection-list/label",1499467862)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","radio-button","re-com.selection-list/radio-button",1763844521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.radio-button","radio-button","re-com.radio-button/radio-button",-97081157,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","label","re-com.selection-list/label",1499467862)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.selection-list","only-button","re-com.selection-list/only-button",1861387751),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The 'only' button displayed next to each item when :show-only-button? is true"], null)], null)], null)], null)], null)], null);
re_com.selection_list.only_button_part = (function re_com$selection_list$only_button_part(p__18298){
var map__18299 = p__18298;
var map__18299__$1 = cljs.core.__destructure_map(map__18299);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18299__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(choice) : id_fn.call(null,choice));
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only-button","only-button",-1947150935).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
event.stopPropagation();

if(cljs.core.not(disabled_QMARK_)){
var G__18300_18362 = cljs.core.PersistentHashSet.createAsIfByAssoc([item_id]);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18300_18362) : on_change.call(null,G__18300_18362));
} else {
}

return null;
}),new cljs.core.Keyword(null,"children","children",-940561982),"only"], null)], null));
});
re_com.selection_list.checkbox_part = (function re_com$selection_list$checkbox_part(p__18301){
var map__18302 = p__18301;
var map__18302__$1 = cljs.core.__destructure_map(map__18302);
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var as_exclusions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18302__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(choice) : id_fn.call(null,choice));
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.checkbox.checkbox,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.selection-list","checkbox","re-com.selection-list/checkbox",-618871923),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/selection_list.cljs",new cljs.core.Keyword(null,"line","line",212345235),67], null)),new cljs.core.Keyword(null,"model","model",331153215),(!(((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(item_id) : selected.call(null,item_id)) == null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(item_id) : selected.call(null,item_id)),as_exclusions_QMARK_),new cljs.core.Keyword(null,"label","label",1718410804),re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),label_fn,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.selection-list","label","re-com.selection-list/label",1499467862),new cljs.core.Keyword(null,"props","props",453281727),choice], null))], null)], null));
});
re_com.selection_list.radio_part = (function re_com$selection_list$radio_part(p__18309){
var map__18310 = p__18309;
var map__18310__$1 = cljs.core.__destructure_map(map__18310);
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var as_exclusions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18310__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(choice) : id_fn.call(null,choice));
var selected_QMARK_ = (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(item_id) : selected.call(null,item_id));
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radio-button","radio-button",1176268647).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.radio_button.radio_button,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.selection-list","radio-button","re-com.selection-list/radio-button",1763844521),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/selection_list.cljs",new cljs.core.Keyword(null,"line","line",212345235),86], null)),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.first(selected),new cljs.core.Keyword(null,"value","value",305978217),item_id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),re_com.selection_list.label_style.cljs$core$IFn$_invoke$arity$2(selected_QMARK_,as_exclusions_QMARK_),new cljs.core.Keyword(null,"label","label",1718410804),re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),label_fn,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.selection-list","label","re-com.selection-list/label",1499467862),new cljs.core.Keyword(null,"props","props",453281727),choice], null))], null)], null));
});
re_com.selection_list.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.selection_list.part_structure):null);
re_com.selection_list.parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.selection_list.parts_desc)):null);
re_com.selection_list.args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of choices | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the selectable items. Elements can be strings or more interesting data items like {:label \"some name\" :sort 5}. Also see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," below (list of maps also allowed)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"set of :ids within :choices | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.set_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the currently selected items. Note: items are considered distinct"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"set of :ids -> nil | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a callback which will be passed set of the ids (as defined by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id-fn"], null),") of the selected items"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, use check boxes, otherwise radio buttons"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, selected items are shown with struck-out labels"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, at least one item must be selected. Note: being able to un-select a radio button is not a common use case, so this should probably be set to true when in single select mode"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"250px\". When specified, item labels may be clipped. Otherwise based on widest label"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"150px\". Size beyond which items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style e.g. \"150px\". If there are less items then this height, box will shrink. If there are more, items will scroll"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the time input will be disabled. Can be atom or value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the list will be displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"item-renderer","item-renderer",-743065410),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"choice, id-fn, selected, on-change, disabled?, label-fn, required?, as-exclusions? -> hiccup | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called for each element during setup, the returned component renders the element, responds to clicks etc."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, an 'only' button will be displayed next to each item, allowing the user to select only that item"], null)], null),re_com.args.std,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.args.parts(re_com.selection_list.parts)], null),re_com.part.describe_args(re_com.selection_list.part_structure)], 0)):null);
/**
 * Produce a list box with items arranged vertically
 */
re_com.selection_list.selection_list = (function re_com$selection_list$selection_list(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18364 = arguments.length;
var i__5877__auto___18365 = (0);
while(true){
if((i__5877__auto___18365 < len__5876__auto___18364)){
args__5882__auto__.push((arguments[i__5877__auto___18365]));

var G__18366 = (i__5877__auto___18365 + (1));
i__5877__auto___18365 = G__18366;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.selection_list.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__18320){
var map__18321 = p__18320;
var map__18321__$1 = cljs.core.__destructure_map(map__18321);
var args = map__18321__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var show_only_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),false);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var item_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"item-renderer","item-renderer",-743065410));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"required?","required?",-872514462),false);
var as_exclusions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),false);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),false);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var multi_select_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18321__$1,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__18370__delegate = function (p__18324){
var map__18325 = p__18324;
var map__18325__$1 = cljs.core.__destructure_map(map__18325);
var args__$1 = map__18325__$1;
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.selection_list.args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var choices__$1 = re_com.util.deref_or_value(choices);
var model__$1 = re_com.util.deref_or_value(model);
var on_change__$1 = re_com.util.deref_or_value(on_change);
var multi_select_QMARK___$1 = re_com.util.deref_or_value(multi_select_QMARK_);
var as_exclusions_QMARK___$1 = re_com.util.deref_or_value(as_exclusions_QMARK_);
var required_QMARK___$1 = re_com.util.deref_or_value(required_QMARK_);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var hide_border_QMARK___$1 = re_com.util.deref_or_value(hide_border_QMARK_);
var item_renderer__$1 = re_com.util.deref_or_value(item_renderer);
var show_only_button_QMARK___$1 = re_com.util.deref_or_value(show_only_button_QMARK_);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.selection_list.part_structure,(re_com.part.descend.cljs$core$IFn$_invoke$arity$2 ? re_com.part.descend.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.Keyword("re-com.core","selection-list","re-com.core/selection-list",-34446429)) : re_com.part.descend.call(null,args__$1,new cljs.core.Keyword("re-com.core","selection-list","re-com.core/selection-list",-34446429))));
var selected = (cljs.core.truth_(multi_select_QMARK___$1)?model__$1:cljs.core.set((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first(model__$1)],null))));
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK___$1)?new cljs.core.Keyword(null,"hidden","hidden",-312506092):new cljs.core.Keyword(null,"shown","shown",-1564457683)),new cljs.core.Keyword(null,"interaction","interaction",-2143888916),(cljs.core.truth_(disabled_QMARK___$1)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756))], null)], null);
var list_group_items = (function (){var iter__5628__auto__ = (function re_com$selection_list$iter__18326(s__18327){
return (new cljs.core.LazySeq(null,(function (){
var s__18327__$1 = s__18327;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18327__$1);
if(temp__5823__auto__){
var s__18327__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18327__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__18327__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__18329 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__18328 = (0);
while(true){
if((i__18328 < size__5627__auto__)){
var choice = cljs.core._nth(c__5626__auto__,i__18328);
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(choice) : id_fn.call(null,choice));
var selected_QMARK_ = (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(item_id) : selected.call(null,item_id));
var on_change_checkbox = ((function (i__18328,item_id,selected_QMARK_,choice,c__5626__auto__,size__5627__auto__,b__18329,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
} else {
var only_item_QMARK__18372 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,cljs.core.first(selected))));
if(cljs.core.truth_((function (){var and__5140__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return only_item_QMARK__18372;
} else {
return and__5140__auto__;
}
})())){
} else {
if(cljs.core.truth_((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(item_id) : selected.call(null,item_id)))){
var G__18330_18373 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected,item_id);
(on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(G__18330_18373) : on_change__$1.call(null,G__18330_18373));
} else {
var G__18331_18374 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected,item_id);
(on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(G__18331_18374) : on_change__$1.call(null,G__18331_18374));
}
}
}

return null;
});})(i__18328,item_id,selected_QMARK_,choice,c__5626__auto__,size__5627__auto__,b__18329,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_))
;
var on_change_radio = ((function (i__18328,item_id,selected_QMARK_,on_change_checkbox,choice,c__5626__auto__,size__5627__auto__,b__18329,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return selected_QMARK_;
} else {
return and__5140__auto__;
}
})())){
} else {
var G__18335_18376 = (cljs.core.truth_(selected_QMARK_)?cljs.core.PersistentHashSet.EMPTY:cljs.core.PersistentHashSet.createAsIfByAssoc([item_id]));
(on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(G__18335_18376) : on_change__$1.call(null,G__18335_18376));
}
}

return null;
});})(i__18328,item_id,selected_QMARK_,on_change_checkbox,choice,c__5626__auto__,size__5627__auto__,b__18329,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_))
;
var props = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652)],[label_fn,required_QMARK___$1,as_exclusions_QMARK___$1,selected,parts,id_fn,theme__$1,choice,on_change__$1,disabled_QMARK___$1,show_only_button_QMARK___$1]);
cljs.core.chunk_append(b__18329,part(new cljs.core.Keyword("re-com.selection-list","list-group-item","re-com.selection-list/list-group-item",-1728671473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"key","key",-1516042587),choice,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(multi_select_QMARK___$1)?on_change_checkbox:on_change_radio)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.selection-list","item-content","re-com.selection-list/item-content",1203864654),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),(function (){var or__5142__auto____$1 = (cljs.core.truth_(item_renderer__$1)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_renderer__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(props),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285)], null)):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (cljs.core.truth_(multi_select_QMARK___$1)?re_com.selection_list.checkbox_part:null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return re_com.selection_list.radio_part;
}
}
})()], null)),(cljs.core.truth_((function (){var and__5140__auto__ = multi_select_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return show_only_button_QMARK___$1;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.selection_list.only_button_part,props], null):null)], null)], null)], null)));

var G__18379 = (i__18328 + (1));
i__18328 = G__18379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18329),re_com$selection_list$iter__18326(cljs.core.chunk_rest(s__18327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18329),null);
}
} else {
var choice = cljs.core.first(s__18327__$2);
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(choice) : id_fn.call(null,choice));
var selected_QMARK_ = (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(item_id) : selected.call(null,item_id));
var on_change_checkbox = ((function (item_id,selected_QMARK_,choice,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
} else {
var only_item_QMARK__18380 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item_id,cljs.core.first(selected))));
if(cljs.core.truth_((function (){var and__5140__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return only_item_QMARK__18380;
} else {
return and__5140__auto__;
}
})())){
} else {
if(cljs.core.truth_((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(item_id) : selected.call(null,item_id)))){
var G__18340_18381 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected,item_id);
(on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(G__18340_18381) : on_change__$1.call(null,G__18340_18381));
} else {
var G__18341_18382 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected,item_id);
(on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(G__18341_18382) : on_change__$1.call(null,G__18341_18382));
}
}
}

return null;
});})(item_id,selected_QMARK_,choice,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_))
;
var on_change_radio = ((function (item_id,selected_QMARK_,on_change_checkbox,choice,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return selected_QMARK_;
} else {
return and__5140__auto__;
}
})())){
} else {
var G__18342_18383 = (cljs.core.truth_(selected_QMARK_)?cljs.core.PersistentHashSet.EMPTY:cljs.core.PersistentHashSet.createAsIfByAssoc([item_id]));
(on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(G__18342_18383) : on_change__$1.call(null,G__18342_18383));
}
}

return null;
});})(item_id,selected_QMARK_,on_change_checkbox,choice,s__18327__$2,temp__5823__auto__,choices__$1,model__$1,on_change__$1,multi_select_QMARK___$1,as_exclusions_QMARK___$1,required_QMARK___$1,disabled_QMARK___$1,hide_border_QMARK___$1,item_renderer__$1,show_only_button_QMARK___$1,part,selected,re_com_ctx,or__5142__auto__,map__18325,map__18325__$1,args__$1,theme__$1,map__18321,map__18321__$1,args,disabled_QMARK_,pre_theme,on_change,show_only_button_QMARK_,height,item_renderer,model,attr,label_fn,required_QMARK_,as_exclusions_QMARK_,max_height,hide_border_QMARK_,parts,width,src,choices,id_fn,style,theme,debug_as,class$,multi_select_QMARK_))
;
var props = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652)],[label_fn,required_QMARK___$1,as_exclusions_QMARK___$1,selected,parts,id_fn,theme__$1,choice,on_change__$1,disabled_QMARK___$1,show_only_button_QMARK___$1]);
return cljs.core.cons(part(new cljs.core.Keyword("re-com.selection-list","list-group-item","re-com.selection-list/list-group-item",-1728671473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"key","key",-1516042587),choice,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(multi_select_QMARK___$1)?on_change_checkbox:on_change_radio)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.selection-list","item-content","re-com.selection-list/item-content",1203864654),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),(function (){var or__5142__auto____$1 = (cljs.core.truth_(item_renderer__$1)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_renderer__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(props),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"as-exclusions?","as-exclusions?",-55596285)], null)):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (cljs.core.truth_(multi_select_QMARK___$1)?re_com.selection_list.checkbox_part:null);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return re_com.selection_list.radio_part;
}
}
})()], null)),(cljs.core.truth_((function (){var and__5140__auto__ = multi_select_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return show_only_button_QMARK___$1;
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.selection_list.only_button_part,props], null):null)], null)], null)], null)),re_com$selection_list$iter__18326(cljs.core.rest(s__18327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(choices__$1);
})();
return part(new cljs.core.Keyword("re-com.selection-list","wrapper","re-com.selection-list/wrapper",-1120234222),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.border,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.selection-list","list-group","re-com.selection-list/list-group",-19199975),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.select_keys(args__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"max-height","max-height",-612563804)], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),list_group_items], null)], null))], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(args__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})()], null)], 0))], null));
}
};
var G__18370 = function (var_args){
var p__18324 = null;
if (arguments.length > 0) {
var G__18384__i = 0, G__18384__a = new Array(arguments.length -  0);
while (G__18384__i < G__18384__a.length) {G__18384__a[G__18384__i] = arguments[G__18384__i + 0]; ++G__18384__i;}
  p__18324 = new cljs.core.IndexedSeq(G__18384__a,0,null);
} 
return G__18370__delegate.call(this,p__18324);};
G__18370.cljs$lang$maxFixedArity = 0;
G__18370.cljs$lang$applyTo = (function (arglist__18385){
var p__18324 = cljs.core.seq(arglist__18385);
return G__18370__delegate(p__18324);
});
G__18370.cljs$core$IFn$_invoke$arity$variadic = G__18370__delegate;
return G__18370;
})()
;
}));

(re_com.selection_list.selection_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.selection_list.selection_list.cljs$lang$applyTo = (function (seq18319){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18319));
}));


//# sourceMappingURL=re_com.selection_list.js.map
