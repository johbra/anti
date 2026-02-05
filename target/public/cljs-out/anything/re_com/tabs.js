// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('reagent.core');
re_com.tabs.horizontal_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:ul]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tab",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tab-anchor",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:a]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.horizontal_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.horizontal_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,re_com.tabs.horizontal_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23350 = arguments.length;
var i__5770__auto___23351 = (0);
while(true){
if((i__5770__auto___23351 < len__5769__auto___23350)){
args__5775__auto__.push((arguments[i__5770__auto___23351]));

var G__23352 = (i__5770__auto___23351 + (1));
i__5770__auto___23351 = G__23352;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23344){
var map__23345 = p__23344;
var map__23345__$1 = cljs.core.__destructure_map.call(null,map__23345);
var args = map__23345__$1;
var on_change = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var id_fn = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__23345__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.horizontal_tabs_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__23342_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__23342_SHARP_));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__23342#] (= current (id-fn p1__23342#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["nav nav-tabs noselect rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null)))], null),re_com.debug.__GT_attr.call(null,args),attr),(function (){var iter__5523__auto__ = (function re_com$tabs$iter__23346(s__23347){
return (new cljs.core.LazySeq(null,(function (){
var s__23347__$1 = s__23347;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__23347__$1);
if(temp__5825__auto__){
var s__23347__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23347__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__23347__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__23349 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__23348 = (0);
while(true){
if((i__23348 < size__5522__auto__)){
var t = cljs.core._nth.call(null,c__5521__auto__,i__23348);
cljs.core.chunk_append.call(null,b__23349,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__23348,id,label,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23349,s__23347__$2,temp__5825__auto__,current,tabs__$1,_,or__5045__auto__,map__23345,map__23345__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
on_change.call(null,id);

return null;
});})(i__23348,id,label,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23349,s__23347__$2,temp__5825__auto__,current,tabs__$1,_,or__5045__auto__,map__23345,map__23345__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),label], null)], null);
})());

var G__23353 = (i__23348 + (1));
i__23348 = G__23353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23349),re_com$tabs$iter__23346.call(null,cljs.core.chunk_rest.call(null,s__23347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23349),null);
}
} else {
var t = cljs.core.first.call(null,s__23347__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__23347__$2,temp__5825__auto__,current,tabs__$1,_,or__5045__auto__,map__23345,map__23345__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__23347__$2,temp__5825__auto__,current,tabs__$1,_,or__5045__auto__,map__23345,map__23345__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),label], null)], null);
})(),re_com$tabs$iter__23346.call(null,cljs.core.rest.call(null,s__23347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,tabs__$1);
})()], null);
}
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq23343){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23343));
}));

re_com.tabs.bar_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-tooltip",new cljs.core.Keyword(null,"impl","impl",1677848700),"[popover-tooltip]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-btn",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:button]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.bar_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.bar_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__23354_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__23354_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its tooltip"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"validate?","validate?",356227962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Validate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," against ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,re_com.tabs.bar_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null)):null);
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23366 = arguments.length;
var i__5770__auto___23367 = (0);
while(true){
if((i__5770__auto___23367 < len__5769__auto___23366)){
args__5775__auto__.push((arguments[i__5770__auto___23367]));

var G__23368 = (i__5770__auto___23367 + (1));
i__5770__auto___23367 = G__23368;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23358){
var map__23359 = p__23358;
var map__23359__$1 = cljs.core.__destructure_map.call(null,map__23359);
var args = map__23359__$1;
var validate_QMARK_ = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var on_change = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var tooltip_fn = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731));
var id_fn = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var tooltip_position = cljs.core.get.call(null,map__23359__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var showing = reagent.core.atom.call(null,null);
return (function() { 
var G__23369__delegate = function (p__23360){
var map__23361 = p__23360;
var map__23361__$1 = cljs.core.__destructure_map.call(null,map__23361);
var model__$1 = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs__$1 = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var current = re_com.util.deref_or_value.call(null,model__$1);
var tabs__$2 = re_com.util.deref_or_value.call(null,tabs__$1);
var _ = (cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not.call(null,validate_QMARK_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__23355_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__23355_SHARP_));
}),tabs__$2));
}
})())?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(or (not validate?) (not-empty (filter (fn* [p1__23355#] (= current (id-fn p1__23355#))) tabs)))"].join('')))})());
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null)))], null),re_com.debug.__GT_attr.call(null,args),attr)], null),(function (){var iter__5523__auto__ = (function re_com$tabs$iter__23362(s__23363){
return (new cljs.core.LazySeq(null,(function (){
var s__23363__$1 = s__23363;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__23363__$1);
if(temp__5825__auto__){
var s__23363__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23363__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__23363__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__23365 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__23364 = (0);
while(true){
if((i__23364 < size__5522__auto__)){
var t = cljs.core._nth.call(null,c__5521__auto__,i__23364);
cljs.core.chunk_append.call(null,b__23365,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var tooltip = (cljs.core.truth_(tooltip_fn)?tooltip_fn.call(null,t):null);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
on_change.call(null,id);

return null;
});})(i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_.call(null,showing,id);

return null;
});})(i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.call(null,showing,((function (i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__23356_SHARP_){
if(cljs.core._EQ_.call(null,id,p1__23356_SHARP_)){
return null;
} else {
return p1__23356_SHARP_;
}
});})(i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(i__23364,id,label,tooltip,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/tabs.cljs",new cljs.core.Keyword(null,"line","line",212345235),141], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5045__auto__ = tooltip_position;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track.call(null,((function (i__23364,id,label,tooltip,selected_QMARK_,the_button,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.call(null,id,cljs.core.deref.call(null,showing));
});})(i__23364,id,label,tooltip,selected_QMARK_,the_button,t,c__5521__auto__,size__5522__auto__,b__23365,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})());

var G__23370 = (i__23364 + (1));
i__23364 = G__23370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23365),re_com$tabs$iter__23362.call(null,cljs.core.chunk_rest.call(null,s__23363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23365),null);
}
} else {
var t = cljs.core.first.call(null,s__23363__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var tooltip = (cljs.core.truth_(tooltip_fn)?tooltip_fn.call(null,t):null);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,tooltip,selected_QMARK_,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (id,label,tooltip,selected_QMARK_,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_.call(null,showing,id);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (id,label,tooltip,selected_QMARK_,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.call(null,showing,(function (p1__23356_SHARP_){
if(cljs.core._EQ_.call(null,id,p1__23356_SHARP_)){
return null;
} else {
return p1__23356_SHARP_;
}
}));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/tabs.cljs",new cljs.core.Keyword(null,"line","line",212345235),141], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5045__auto__ = tooltip_position;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track.call(null,((function (id,label,tooltip,selected_QMARK_,the_button,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.call(null,id,cljs.core.deref.call(null,showing));
});})(id,label,tooltip,selected_QMARK_,the_button,t,s__23363__$2,temp__5825__auto__,current,tabs__$2,_,map__23361,map__23361__$1,model__$1,tabs__$1,showing,map__23359,map__23359__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})(),re_com$tabs$iter__23362.call(null,cljs.core.rest.call(null,s__23363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,tabs__$2);
})());
};
var G__23369 = function (var_args){
var p__23360 = null;
if (arguments.length > 0) {
var G__23371__i = 0, G__23371__a = new Array(arguments.length -  0);
while (G__23371__i < G__23371__a.length) {G__23371__a[G__23371__i] = arguments[G__23371__i + 0]; ++G__23371__i;}
  p__23360 = new cljs.core.IndexedSeq(G__23371__a,0,null);
} 
return G__23369__delegate.call(this,p__23360);};
G__23369.cljs$lang$maxFixedArity = 0;
G__23369.cljs$lang$applyTo = (function (arglist__23372){
var p__23360 = cljs.core.seq(arglist__23372);
return G__23369__delegate(p__23360);
});
G__23369.cljs$core$IFn$_invoke$arity$variadic = G__23369__delegate;
return G__23369;
})()
;
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq23357){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23357));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23376 = arguments.length;
var i__5770__auto___23377 = (0);
while(true){
if((i__5770__auto___23377 < len__5769__auto___23376)){
args__5775__auto__.push((arguments[i__5770__auto___23377]));

var G__23378 = (i__5770__auto___23377 + (1));
i__5770__auto___23377 = G__23378;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23374){
var map__23375 = p__23374;
var map__23375__$1 = cljs.core.__destructure_map.call(null,map__23375);
var args = map__23375__$1;
var validate_QMARK_ = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var on_change = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var tooltip_fn = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var src = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tooltip_position = cljs.core.get.call(null,map__23375__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),tooltip_fn,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),tooltip_position,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"validate?","validate?",356227962),validate_QMARK_);
}
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq23373){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23373));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23382 = arguments.length;
var i__5770__auto___23383 = (0);
while(true){
if((i__5770__auto___23383 < len__5769__auto___23382)){
args__5775__auto__.push((arguments[i__5770__auto___23383]));

var G__23384 = (i__5770__auto___23383 + (1));
i__5770__auto___23383 = G__23384;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23380){
var map__23381 = p__23380;
var map__23381__$1 = cljs.core.__destructure_map.call(null,map__23381);
var args = map__23381__$1;
var validate_QMARK_ = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var on_change = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.tabs.bar_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"validate?","validate?",356227962),validate_QMARK_);
}
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq23379){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23379));
}));

re_com.tabs.pill_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:ul]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-pill",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-anchor",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:a]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.pill_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.pill_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__23385_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__23385_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,re_com.tabs.pill_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null)):null);
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23394 = arguments.length;
var i__5770__auto___23395 = (0);
while(true){
if((i__5770__auto___23395 < len__5769__auto___23394)){
args__5775__auto__.push((arguments[i__5770__auto___23395]));

var G__23396 = (i__5770__auto___23395 + (1));
i__5770__auto___23395 = G__23396;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23388){
var map__23389 = p__23388;
var map__23389__$1 = cljs.core.__destructure_map.call(null,map__23389);
var args = map__23389__$1;
var on_change = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value.call(null,model);
var tabs__$1 = re_com.util.deref_or_value.call(null,tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__23386_SHARP_){
return cljs.core._EQ_.call(null,current,id_fn.call(null,p1__23386_SHARP_));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__23386#] (= current (id-fn p1__23386#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),re_com.debug.__GT_attr.call(null,args),attr),(function (){var iter__5523__auto__ = (function re_com$tabs$iter__23390(s__23391){
return (new cljs.core.LazySeq(null,(function (){
var s__23391__$1 = s__23391;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__23391__$1);
if(temp__5825__auto__){
var s__23391__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23391__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__23391__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__23393 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__23392 = (0);
while(true){
if((i__23392 < size__5522__auto__)){
var t = cljs.core._nth.call(null,c__5521__auto__,i__23392);
cljs.core.chunk_append.call(null,b__23393,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__23392,id,label,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23393,s__23391__$2,temp__5825__auto__,current,tabs__$1,_,map__23389,map__23389__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(i__23392,id,label,selected_QMARK_,t,c__5521__auto__,size__5522__auto__,b__23393,s__23391__$2,temp__5825__auto__,current,tabs__$1,_,map__23389,map__23389__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),label], null)], null);
})());

var G__23397 = (i__23392 + (1));
i__23392 = G__23397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23393),re_com$tabs$iter__23390.call(null,cljs.core.chunk_rest.call(null,s__23391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23393),null);
}
} else {
var t = cljs.core.first.call(null,s__23391__$2);
return cljs.core.cons.call(null,(function (){var id = id_fn.call(null,t);
var label = label_fn.call(null,t);
var selected_QMARK_ = cljs.core._EQ_.call(null,id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__23391__$2,temp__5825__auto__,current,tabs__$1,_,map__23389,map__23389__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
on_change.call(null,id);

return null;
});})(id,label,selected_QMARK_,t,s__23391__$2,temp__5825__auto__,current,tabs__$1,_,map__23389,map__23389__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),label], null)], null);
})(),re_com$tabs$iter__23390.call(null,cljs.core.rest.call(null,s__23391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq23387){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23387));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23401 = arguments.length;
var i__5770__auto___23402 = (0);
while(true){
if((i__5770__auto___23402 < len__5769__auto___23401)){
args__5775__auto__.push((arguments[i__5770__auto___23402]));

var G__23403 = (i__5770__auto___23402 + (1));
i__5770__auto___23402 = G__23403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23399){
var map__23400 = p__23399;
var map__23400__$1 = cljs.core.__destructure_map.call(null,map__23400);
var args = map__23400__$1;
var on_change = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.call(null,map__23400__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as);
}
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq23398){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23398));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23407 = arguments.length;
var i__5770__auto___23408 = (0);
while(true){
if((i__5770__auto___23408 < len__5769__auto___23407)){
args__5775__auto__.push((arguments[i__5770__auto___23408]));

var G__23409 = (i__5770__auto___23408 + (1));
i__5770__auto___23408 = G__23409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__23405){
var map__23406 = p__23405;
var map__23406__$1 = cljs.core.__destructure_map.call(null,map__23406);
var args = map__23406__$1;
var on_change = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.tabs.pill_tabs.call(null,new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as);
}
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq23404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23404));
}));


//# sourceMappingURL=tabs.js.map
