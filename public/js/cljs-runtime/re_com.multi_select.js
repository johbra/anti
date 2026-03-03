goog.provide('re_com.multi_select');
/**
 * Split a list of maps by a group key then return both the group
 */
re_com.multi_select.items_with_group_headings = (function re_com$multi_select$items_with_group_headings(items,group_fn,id_fn){
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(group_fn,items);
var group_headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18055_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"group","group",582596132)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(p1__18055_SHARP_) : group_fn.call(null,p1__18055_SHARP_)),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18055_SHARP_) : id_fn.call(null,p1__18055_SHARP_))], null),(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(p1__18055_SHARP_) : group_fn.call(null,p1__18055_SHARP_))]);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,groups));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of items based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.multi_select.filter_items = (function re_com$multi_select$filter_items(group_fn,filter_fn,filter_text){
var lower_filter_text = clojure.string.lower_case(filter_text);
return (function (item){
var group = (function (){var or__5142__auto__ = (group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(item) : group_fn.call(null,item));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var label = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((filter_fn.cljs$core$IFn$_invoke$arity$1 ? filter_fn.cljs$core$IFn$_invoke$arity$1(item) : filter_fn.call(null,item))));
return ((clojure.string.includes_QMARK_(clojure.string.lower_case(group),lower_filter_text)) || (clojure.string.includes_QMARK_(clojure.string.lower_case(label),lower_filter_text)));
});
});
/**
 * Filter a list of items based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.multi_select.filter_items_regex = (function re_com$multi_select$filter_items_regex(group_fn,filter_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e18061){if((e18061 instanceof Object)){
var e = e18061;
return null;
} else {
throw e18061;

}
}})();
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (re__$1,item){
if((re__$1 == null)){
return null;
} else {
var or__5142__auto__ = re__$1.test((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(item) : group_fn.call(null,item)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return re__$1.test((filter_fn.cljs$core$IFn$_invoke$arity$1 ? filter_fn.cljs$core$IFn$_invoke$arity$1(item) : filter_fn.call(null,item)));
}
}
}),re);
});
/**
 * Base function (before lifecycle metadata) to render a filter text box
 */
re_com.multi_select.filter_text_box = (function re_com$multi_select$filter_text_box(p__18063){
var map__18064 = p__18063;
var map__18064__$1 = cljs.core.__destructure_map(map__18064);
var map__18065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18064__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__18065__$1 = cljs.core.__destructure_map(map__18065);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18065__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var _STAR_filter_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18064__$1,new cljs.core.Keyword(null,"*filter-text","*filter-text",622880501));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18064__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var _STAR_warning_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18064__$1,new cljs.core.Keyword(null,"*warning-message","*warning-message",506396421));
var G__18070 = new cljs.core.Keyword("re-com.multi-select","filter-text-box","re-com.multi-select/filter-text-box",1777176393);
var G__18071 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18073 = new cljs.core.Keyword("re-com.multi-select","filter-input-text","re-com.multi-select/filter-input-text",-2096877455);
var G__18074 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.input_text.input_text,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-multi-select-filter-input-text",new cljs.core.Keyword(null,"model","model",331153215),_STAR_filter_text,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18062_SHARP_){
cljs.core.reset_BANG_(_STAR_filter_text,p1__18062_SHARP_);

return cljs.core.reset_BANG_(_STAR_warning_message,null);
})], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__18073,G__18074) : part.call(null,G__18073,G__18074));
})(),(function (){var G__18075 = new cljs.core.Keyword("re-com.multi-select","filter-reset-button","re-com.multi-select/filter-reset-button",-1751420013);
var G__18076 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.close_button.close_button,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_text,"");
})], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__18075,G__18076) : part.call(null,G__18075,G__18076));
})()], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__18070,G__18071) : part.call(null,G__18070,G__18071));
});
/**
 * Render a group heading and set up appropriate mouse events
 */
re_com.multi_select.group_heading_item = (function re_com$multi_select$group_heading_item(){
var _STAR_mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$multi_select$group_heading_item_$_group_heading_render__delegate = function (p__18078){
var map__18079 = p__18078;
var map__18079__$1 = cljs.core.__destructure_map(map__18079);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"click-callback","click-callback",-609722293));
var double_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"double-click-callback","double-click-callback",-1057568442));
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"selected-item-id","selected-item-id",180338113));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(heading);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_item_id,id);
var class$ = ((selected_QMARK_)?"highlighted":(cljs.core.truth_(cljs.core.deref(_STAR_mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.group-result","li.group-result",1074686727),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?null:"pointer"),new cljs.core.Keyword(null,"color","color",1011675173),((selected_QMARK_)?"white":"#444")], null),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null)], 0)),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,false);

return null;
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(click_callback.cljs$core$IFn$_invoke$arity$2 ? click_callback.cljs$core$IFn$_invoke$arity$2(id,true) : click_callback.call(null,id,true));

return null;
})),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(double_click_callback.cljs$core$IFn$_invoke$arity$1 ? double_click_callback.cljs$core$IFn$_invoke$arity$1(id) : double_click_callback.call(null,id));

return null;
}))], null),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(heading)], null);
};
var re_com$multi_select$group_heading_item_$_group_heading_render = function (var_args){
var p__18078 = null;
if (arguments.length > 0) {
var G__18248__i = 0, G__18248__a = new Array(arguments.length -  0);
while (G__18248__i < G__18248__a.length) {G__18248__a[G__18248__i] = arguments[G__18248__i + 0]; ++G__18248__i;}
  p__18078 = new cljs.core.IndexedSeq(G__18248__a,0,null);
} 
return re_com$multi_select$group_heading_item_$_group_heading_render__delegate.call(this,p__18078);};
re_com$multi_select$group_heading_item_$_group_heading_render.cljs$lang$maxFixedArity = 0;
re_com$multi_select$group_heading_item_$_group_heading_render.cljs$lang$applyTo = (function (arglist__18249){
var p__18078 = cljs.core.seq(arglist__18249);
return re_com$multi_select$group_heading_item_$_group_heading_render__delegate(p__18078);
});
re_com$multi_select$group_heading_item_$_group_heading_render.cljs$core$IFn$_invoke$arity$variadic = re_com$multi_select$group_heading_item_$_group_heading_render__delegate;
return re_com$multi_select$group_heading_item_$_group_heading_render;
})()
;
});
/**
 * Render a list item and set up appropriate mouse events
 */
re_com.multi_select.list_item = (function re_com$multi_select$list_item(){
var _STAR_mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$multi_select$list_item_$_list_item_render__delegate = function (p__18080){
var map__18081 = p__18080;
var map__18081__$1 = cljs.core.__destructure_map(map__18081);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"item","item",249373802));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"click-callback","click-callback",-609722293));
var double_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"double-click-callback","double-click-callback",-1057568442));
var selected_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"selected-item-id","selected-item-id",180338113));
var group_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18081__$1,new cljs.core.Keyword(null,"group-selected?","group-selected?",-1959240379));
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected_item_id);
var class$ = ((((selected_QMARK_) && (cljs.core.not(disabled_QMARK_))))?"highlighted":(cljs.core.truth_(cljs.core.deref(_STAR_mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"active-result group-option "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(group_selected_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"hsl(208, 56%, 92%)"], null):null),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null)], 0)),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
cljs.core.reset_BANG_(_STAR_mouse_over_QMARK_,false);

return null;
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(click_callback.cljs$core$IFn$_invoke$arity$2 ? click_callback.cljs$core$IFn$_invoke$arity$2(id,false) : click_callback.call(null,id,false));

return null;
})),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(double_click_callback.cljs$core$IFn$_invoke$arity$1 ? double_click_callback.cljs$core$IFn$_invoke$arity$1(id) : double_click_callback.call(null,id));

return null;
}))], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null);
};
var re_com$multi_select$list_item_$_list_item_render = function (var_args){
var p__18080 = null;
if (arguments.length > 0) {
var G__18250__i = 0, G__18250__a = new Array(arguments.length -  0);
while (G__18250__i < G__18250__a.length) {G__18250__a[G__18250__i] = arguments[G__18250__i + 0]; ++G__18250__i;}
  p__18080 = new cljs.core.IndexedSeq(G__18250__a,0,null);
} 
return re_com$multi_select$list_item_$_list_item_render__delegate.call(this,p__18080);};
re_com$multi_select$list_item_$_list_item_render.cljs$lang$maxFixedArity = 0;
re_com$multi_select$list_item_$_list_item_render.cljs$lang$applyTo = (function (arglist__18251){
var p__18080 = cljs.core.seq(arglist__18251);
return re_com$multi_select$list_item_$_list_item_render__delegate(p__18080);
});
re_com$multi_select$list_item_$_list_item_render.cljs$core$IFn$_invoke$arity$variadic = re_com$multi_select$list_item_$_list_item_render__delegate;
return re_com$multi_select$list_item_$_list_item_render;
})()
;
});
/**
 * Render a list box which can be a single list or a grouped list
 */
re_com.multi_select.list_box = (function re_com$multi_select$list_box(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18252 = arguments.length;
var i__5877__auto___18253 = (0);
while(true){
if((i__5877__auto___18253 < len__5876__auto___18252)){
args__5882__auto__.push((arguments[i__5877__auto___18253]));

var G__18254 = (i__5877__auto___18253 + (1));
i__5877__auto___18253 = G__18254;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.multi_select.list_box.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.multi_select.list_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__18086){
var map__18087 = p__18086;
var map__18087__$1 = cljs.core.__destructure_map(map__18087);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"group-fn","group-fn",129203707));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var double_click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"double-click-callback","double-click-callback",-1057568442));
var click_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"click-callback","click-callback",-609722293));
var _STAR_current_item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"*current-item-id","*current-item-id",-119097013));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var filter_choices_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"filter-choices-text","filter-choices-text",-253084589));
var group_heading_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18087__$1,new cljs.core.Keyword(null,"group-heading-selected?","group-heading-selected?",-154747592));
var vec__18088 = re_com.multi_select.items_with_group_headings(items,group_fn,id_fn);
var group_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(0),null);
var group_item_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(1),null);
var has_group_names_QMARK_ = (!((((new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.first(group_names)) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(group_item_lists))))));
var make_list_item = (function (item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.list_item,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"click-callback","click-callback",-609722293),click_callback,new cljs.core.Keyword(null,"double-click-callback","double-click-callback",-1057568442),double_click_callback,new cljs.core.Keyword(null,"selected-item-id","selected-item-id",180338113),cljs.core.deref(_STAR_current_item_id),new cljs.core.Keyword(null,"group-selected?","group-selected?",-1959240379),(cljs.core.truth_(group_heading_selected_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_item_id)),(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(item) : group_fn.call(null,item))):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item))))], null));
});
var make_items = (function (items__$1){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_list_item,items__$1));
});
var make_group_heading_item = (function (heading){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.group_heading_item,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"click-callback","click-callback",-609722293),click_callback,new cljs.core.Keyword(null,"double-click-callback","double-click-callback",-1057568442),double_click_callback,new cljs.core.Keyword(null,"selected-item-id","selected-item-id",180338113),cljs.core.deref(_STAR_current_item_id)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(heading)], null));
});
var make_heading_then_items = (function (heading,items__$1){
return cljs.core.cons(make_group_heading_item(heading),make_items(items__$1));
});
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(disabled_QMARK_)?"bm-multi-select-list-disabled":"bm-multi-select-list"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fafafa",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen-results","ul.chosen-results",-932618517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"none"], null)], null),(((cljs.core.count(items) > (0)))?((has_group_names_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(make_heading_then_items,group_names,group_item_lists))):make_items(cljs.core.first(group_item_lists))):((clojure.string.blank_QMARK_(filter_choices_text))?"":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.no-results","li.no-results",-717682399),(""+"No results match \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter_choices_text)+"\"")], null)))], null)], null);
}));

(re_com.multi_select.list_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.multi_select.list_box.cljs$lang$applyTo = (function (seq18084){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18084));
}));

re_com.multi_select.part_structure = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","container","re-com.multi-select/container",1698832080),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"h-box","h-box",1637186817,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","left","re-com.multi-select/left",1021020600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"v-box","v-box",5238454,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","left-label-container","re-com.multi-select/left-label-container",1702181564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"h-box","h-box",1637186817,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","left-label","re-com.multi-select/left-label",1741602102),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","left-label-item-count","re-com.multi-select/left-label-item-count",1945569801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","left-list-box","re-com.multi-select/left-list-box",751444925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"list-box","list-box",1635533184,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","filter-text-box","re-com.multi-select/filter-text-box",1777176393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"h-box","h-box",1637186817,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","filter-input-text","re-com.multi-select/filter-input-text",-2096877455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"input-text","input-text",304234413,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","filter-reset-button","re-com.multi-select/filter-reset-button",-1751420013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"close-button","close-button",-768897648,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","left-filter-result-count","re-com.multi-select/left-filter-result-count",1569617788),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"label","label",-936024965,null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","middle-container","re-com.multi-select/middle-container",-1366807098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"v-box","v-box",5238454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","middle-top-spacer","re-com.multi-select/middle-top-spacer",-538345503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"box","box",-1123515375,null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","middle","re-com.multi-select/middle",157881762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"v-box","v-box",5238454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","include-all-button","re-com.multi-select/include-all-button",-637394151),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"button","button",-1197855826,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","include-selected-button","re-com.multi-select/include-selected-button",941524719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"button","button",-1197855826,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","exclude-selected-button","re-com.multi-select/exclude-selected-button",1061550384),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"button","button",-1197855826,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","exclude-all-button","re-com.multi-select/exclude-all-button",1646627822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"button","button",-1197855826,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","middle-bottom-spacer","re-com.multi-select/middle-bottom-spacer",2066798474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"box","box",-1123515375,null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","right","re-com.multi-select/right",673715824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"v-box","v-box",5238454,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","warning-message","re-com.multi-select/warning-message",623614280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"label","label",-936024965,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","right-label-container","re-com.multi-select/right-label-container",-1237896934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"h-box","h-box",1637186817,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","right-label","re-com.multi-select/right-label",-1939788251),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","right-label-item-count","re-com.multi-select/right-label-item-count",-1589958503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","right-list-box","re-com.multi-select/right-list-box",-214461030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"list-box","list-box",1635533184,null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","filter-text-box","re-com.multi-select/filter-text-box",1777176393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"h-box","h-box",1637186817,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","filter-input-text","re-com.multi-select/filter-input-text",-2096877455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"input-text","input-text",304234413,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","filter-reset-button","re-com.multi-select/filter-reset-button",-1751420013),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"close-button","close-button",-768897648,null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.multi-select","right-filter-result-count","re-com.multi-select/right-filter-result-count",1022992973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol(null,"label","label",-936024965,null)], null)], null)], null)], null):null);
re_com.multi_select.multi_select_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.multi_select.part_structure):null);
re_com.multi_select.multi_select_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.multi_select.multi_select_parts_desc)):null);
re_com.multi_select.multi_select_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each map represents a choice. Values corresponding to id, label and, ","optionally, a group, are extracted by the functions ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":group-fn"], null),". See below."], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function taking one argument (a map) and returns the unique identifier ","for that map. Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function taking one argument (a map) and returns the displayable label ","for that map. Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),"str\u2218label-fn",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function taking one argument (a map) and returns the string to filter by. ","Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),". (Note: items are also filtered by group-fn)"], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function taking one argument (a map) and returns the group identifier ","for that map. Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),"compare",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The comparator function used with ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"cljs.core/sort-by"], null)," to sort choices."], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map, map -> integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a set of the ids for currently selected choices. If nil, see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":placeholder"], null),"."], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"a set of ids | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"when true, at least one item must be selected",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"description","description",-1428560544),"maximum number of items that can be selected",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-selected-items","max-selected-items",2143819689),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"label displayed above the left list",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"left-label","left-label",-1662718913),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"label displayed above the right list",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"right-label","right-label",1465344334),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function that will be called when the selection changes. ","Passed the set of selected ids. See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null),"."], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"if true, no user selection is allowed",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"if true, a filter text field is placed at the bottom of the component",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if true, the filter text field will support JavaScript regular expressions. ","If false, just plain text"], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"background text when no selection",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS width. e.g.: \"500px\" or \"20em\"",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"the specific height of the component",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum height of the component",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"component's tabindex. A value of -1 removes from the tab order",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below.",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.multi_select.multi_select_parts)], null)], null),re_com.args.std):null);
/**
 * Render a multi-select component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 * {:id "US" :label "United States"  :group "Group 1"}
 * {:id "GB" :label "United Kingdom" :group "Group 1"}
 * {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.multi_select.multi_select = (function re_com$multi_select$multi_select(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18256 = arguments.length;
var i__5877__auto___18257 = (0);
while(true){
if((i__5877__auto___18257 < len__5876__auto___18256)){
args__5882__auto__.push((arguments[i__5877__auto___18257]));

var G__18258 = (i__5877__auto___18257 + (1));
i__5877__auto___18257 = G__18258;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.multi_select.multi_select.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.multi_select.multi_select.cljs$core$IFn$_invoke$arity$variadic = (function (p__18122){
var map__18123 = p__18122;
var map__18123__$1 = cljs.core.__destructure_map(map__18123);
var args = map__18123__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18123__$1,new cljs.core.Keyword(null,"model","model",331153215));
var pre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18123__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18123__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18123__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),cljs.core.identity);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18123__$1,new cljs.core.Keyword(null,"src","src",-1651076051));

var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.multi_select.multi_select_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var theme__$1 = re_com.theme.comp(pre,theme);
var _STAR_external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var _STAR_internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_external_model));
var _STAR_current_choice_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_current_selection_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_choice_group_heading_selected_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_selection_group_heading_selected_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_warning_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _STAR_filter_choices_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var _STAR_filter_selections_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function() { 
var re_com$multi_select$multi_select_render__delegate = function (p__18124){
var map__18125 = p__18124;
var map__18125__$1 = cljs.core.__destructure_map(map__18125);
var args__$1 = map__18125__$1;
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18125__$1,new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"group","group",582596132));
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var left_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"left-label","left-label",-1662718913));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18125__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18125__$1,new cljs.core.Keyword(null,"required?","required?",-872514462),false);
var sort_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18125__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),cljs.core.compare);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var max_selected_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"max-selected-items","max-selected-items",2143819689));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var regex_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18125__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var right_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"right-label","right-label",1465344334));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688));
var or__5142__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.multi_select.multi_select_args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.multi_select.part_structure,args__$1);
var required_QMARK___$1 = re_com.util.deref_or_value(required_QMARK_);
var filter_box_QMARK___$1 = re_com.util.deref_or_value(filter_box_QMARK_);
var regex_filter_QMARK___$1 = re_com.util.deref_or_value(regex_filter_QMARK_);
var min_msg = "Must have at least one";
var max_msg = (""+"Max items allowed is "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_selected_items));
var group_fn__$1 = (function (){var or__5142__auto____$2 = group_fn;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword("re-com.multi-select","$$$","re-com.multi-select/$$$",-567571741);
}
})();
var choices__$1 = cljs.core.set(re_com.util.deref_or_value(choices));
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value(regex_filter_QMARK___$1);
var _STAR_latest_ext_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model__$1));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_external_model),cljs.core.deref(_STAR_latest_ext_model)))?(function (){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_latest_ext_model));

return cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.deref(_STAR_latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__5140__auto__ = on_change;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__5140__auto__;
}
})();
var excludable_QMARK_ = (function (){var and__5140__auto__ = cljs.core.deref(_STAR_current_selection_id);
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(cljs.core.deref(_STAR_internal_model)) > (cljs.core.truth_(required_QMARK___$1)?(1):(0)));
} else {
return and__5140__auto__;
}
})();
var filter_fn__$1 = (function (){var or__5142__auto____$2 = filter_fn;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,label_fn);
}
})();
var choices_filter_fn = (cljs.core.truth_(regex_filter_QMARK___$2)?re_com.multi_select.filter_items_regex(group_fn__$1,filter_fn__$1,cljs.core.deref(_STAR_filter_choices_text)):re_com.multi_select.filter_items(group_fn__$1,filter_fn__$1,cljs.core.deref(_STAR_filter_choices_text)));
var filtered_choices = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_fn__$1,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(choices_filter_fn,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18119_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(_STAR_internal_model),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18119_SHARP_) : id_fn.call(null,p1__18119_SHARP_)));
}),choices__$1))));
var selections = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_fn__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18120_SHARP_){
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(p1__18120_SHARP_,choices__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], 0));
}),cljs.core.deref(_STAR_internal_model))));
var selections_filter_fn = (cljs.core.truth_(regex_filter_QMARK___$2)?re_com.multi_select.filter_items_regex(group_fn__$1,filter_fn__$1,cljs.core.deref(_STAR_filter_selections_text)):re_com.multi_select.filter_items(group_fn__$1,filter_fn__$1,cljs.core.deref(_STAR_filter_selections_text)));
var filtered_selections = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_fn__$1,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(selections_filter_fn,selections)));
var potential_count = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,choices__$1)),cljs.core.deref(_STAR_internal_model)));
var chosen_count = cljs.core.count(selections);
var choice_click = (function (id,group_heading_selected_QMARK_){
cljs.core.reset_BANG_(_STAR_current_choice_id,id);

cljs.core.reset_BANG_(_STAR_choice_group_heading_selected_QMARK_,group_heading_selected_QMARK_);

return cljs.core.reset_BANG_(_STAR_warning_message,null);
});
var selection_click = (function (id,group_heading_selected_QMARK_){
cljs.core.reset_BANG_(_STAR_current_selection_id,id);

cljs.core.reset_BANG_(_STAR_selection_group_heading_selected_QMARK_,group_heading_selected_QMARK_);

return cljs.core.reset_BANG_(_STAR_warning_message,null);
});
var include_filtered_click = (function (){
if((((!((max_selected_items == null)))) && (((cljs.core.count(cljs.core.deref(_STAR_internal_model)) + cljs.core.count(filtered_choices)) > max_selected_items)))){
cljs.core.reset_BANG_(_STAR_warning_message,max_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,filtered_choices))));

cljs.core.reset_BANG_(_STAR_warning_message,null);
}

if(cljs.core.truth_((function (){var and__5140__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__18126_18263 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18126_18263) : on_change.call(null,G__18126_18263));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_choice_id,null);
});
var include_click = (function (){
if(cljs.core.truth_(cljs.core.deref(_STAR_choice_group_heading_selected_QMARK_))){
var choices_to_include_18264 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_choice_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_choices)));
if((((!((max_selected_items == null)))) && (((cljs.core.count(cljs.core.deref(_STAR_internal_model)) + cljs.core.count(choices_to_include_18264)) > max_selected_items)))){
cljs.core.reset_BANG_(_STAR_warning_message,max_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),choices_to_include_18264)));

cljs.core.reset_BANG_(_STAR_choice_group_heading_selected_QMARK_,false);
}
} else {
if((((!((max_selected_items == null)))) && ((cljs.core.count(cljs.core.deref(_STAR_internal_model)) >= max_selected_items)))){
cljs.core.reset_BANG_(_STAR_warning_message,max_msg);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_internal_model,cljs.core.conj,cljs.core.deref(_STAR_current_choice_id));

cljs.core.reset_BANG_(_STAR_warning_message,null);
}
}

if(cljs.core.truth_((function (){var and__5140__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__18127_18265 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18127_18265) : on_change.call(null,G__18127_18265));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_choice_id,null);
});
var exclude_click = (function (){
if(cljs.core.truth_(excludable_QMARK_)){
if(cljs.core.truth_(cljs.core.deref(_STAR_selection_group_heading_selected_QMARK_))){
var new_internal_model_18266 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_selection_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_selections))));
if(cljs.core.truth_((function (){var and__5140__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.empty_QMARK_(new_internal_model_18266);
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(cljs.core.deref(_STAR_internal_model))]));

cljs.core.reset_BANG_(_STAR_warning_message,min_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,new_internal_model_18266);

cljs.core.reset_BANG_(_STAR_selection_group_heading_selected_QMARK_,false);

cljs.core.reset_BANG_(_STAR_warning_message,null);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_internal_model,cljs.core.disj,cljs.core.deref(_STAR_current_selection_id));

cljs.core.reset_BANG_(_STAR_warning_message,null);
}
} else {
cljs.core.reset_BANG_(_STAR_warning_message,min_msg);
}

if(cljs.core.truth_((function (){var and__5140__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__18135_18267 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18135_18267) : on_change.call(null,G__18135_18267));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_selection_id,null);
});
var exclude_filtered_click = (function (){
var new_internal_model = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,filtered_selections)));
if(cljs.core.truth_((function (){var and__5140__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(new_internal_model) === (0));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_internal_model,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(cljs.core.deref(_STAR_internal_model))]));

cljs.core.reset_BANG_(_STAR_warning_message,min_msg);
} else {
cljs.core.reset_BANG_(_STAR_internal_model,new_internal_model);

cljs.core.reset_BANG_(_STAR_warning_message,null);
}

if(cljs.core.truth_((function (){var and__5140__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_internal_model),cljs.core.deref(_STAR_latest_ext_model));
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(_STAR_external_model,cljs.core.deref(_STAR_internal_model));

var G__18136_18268 = cljs.core.deref(_STAR_internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18136_18268) : on_change.call(null,G__18136_18268));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_selection_id,null);
});
return part(new cljs.core.Keyword("re-com.multi-select","container","re-com.multi-select/container",1698832080),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(args__$1),attr], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),re_com.box.flex_child_style((cljs.core.truth_(width)?"0 0 auto":"auto"))], 0))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.multi-select","inner-container","re-com.multi-select/inner-container",161678205),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),539], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.multi-select","left","re-com.multi-select/left",1021020600),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),545], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(left_label)?(((!(typeof left_label === 'string')))?left_label:part(new cljs.core.Keyword("re-com.multi-select","left-label-container","re-com.multi-select/left-label-container",1702181564),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),554], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.multi-select","left-label","re-com.multi-select/left-label",1741602102),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_label], null)], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","left-label-item-count","re-com.multi-select/left-label-item-count",1945569801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_choices_text)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.util.pluralize(potential_count,"item")], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"showing "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(filtered_choices))+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(potential_count))], null))], null)], null))], null)], null)], null))):null),part(new cljs.core.Keyword("re-com.multi-select","left-list-box","re-com.multi-select/left-list-box",751444925),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.multi_select.list_box,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"double-click-callback","double-click-callback",-1057568442),new cljs.core.Keyword(null,"click-callback","click-callback",-609722293),new cljs.core.Keyword(null,"*current-item-id","*current-item-id",-119097013),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"filter-choices-text","filter-choices-text",-253084589),new cljs.core.Keyword(null,"group-heading-selected?","group-heading-selected?",-154747592),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[label_fn,include_click,choice_click,_STAR_current_choice_id,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),572], null)),id_fn,cljs.core.deref(_STAR_filter_choices_text),cljs.core.deref(_STAR_choice_group_heading_selected_QMARK_),filtered_choices,group_fn__$1,disabled_QMARK___$1])], null)),(cljs.core.truth_(filter_box_QMARK___$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),586], null)),new cljs.core.Keyword(null,"size","size",1098693007),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.filter_text_box,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part-fn","part-fn",1984437584),part,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1], null),new cljs.core.Keyword(null,"*filter-text","*filter-text",622880501),_STAR_filter_choices_text,new cljs.core.Keyword(null,"*warning-message","*warning-message",506396421),_STAR_warning_message,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),595], null)),new cljs.core.Keyword(null,"size","size",1098693007),"4px"], null),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_choices_text)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),599], null)),new cljs.core.Keyword(null,"label","label",1718410804),goog.string.unescapeEntities("&nbsp;"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"smaller"], null)], null):part(new cljs.core.Keyword("re-com.multi-select","left-filter-result-count","re-com.multi-select/left-filter-result-count",1569617788),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.label,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),605], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Found ",re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(filtered_choices),"match",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["matches"], 0))," containing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.deref(_STAR_filter_choices_text)], null)], null)], null)], null)))], null):null)], null)], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","middle-container","re-com.multi-select/middle-container",-1366807098),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),615], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.multi-select","middle-spacer","re-com.multi-select/middle-spacer",780303324),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),620], null)),new cljs.core.Keyword(null,"child","child",623967545),""], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","middle","re-com.multi-select/middle",157881762),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),626], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.multi-select","include-all-button","re-com.multi-select/include-all-button",-637394151),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.buttons.button,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),632], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3("zmdi","zmdi-hc-fw-rc","zmdi-fast-forward") : re_com.theme.merge_class.call(null,"zmdi","zmdi-hc-fw-rc","zmdi-fast-forward"))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"-1px"], null)], null),(""+" include "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_choices_text)))?potential_count:cljs.core.count(filtered_choices))))], null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var or__5142__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return (cljs.core.count(filtered_choices) === (0));
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),include_filtered_click], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","include-selected-button","re-com.multi-select/include-selected-button",941524719),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.buttons.button,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),646], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3("zmdi","zmdi-hc-fw-rc","zmdi-play") : re_com.theme.merge_class.call(null,"zmdi","zmdi-hc-fw-rc","zmdi-play"))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"-1px"], null)], null),(""+" include "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(_STAR_choice_group_heading_selected_QMARK_))?cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_choice_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_choices)):null)))], null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var or__5142__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.not(cljs.core.deref(_STAR_current_choice_id));
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),include_click], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","exclude-selected-button","re-com.multi-select/exclude-selected-button",1061550384),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.buttons.button,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),660], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$4("zmdi","zmdi-hc-fw-rc","zmdi-play","zmdi-hc-rotate-180") : re_com.theme.merge_class.call(null,"zmdi","zmdi-hc-fw-rc","zmdi-play","zmdi-hc-rotate-180"))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"-1px"], null)], null),(""+" exclude "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(_STAR_selection_group_heading_selected_QMARK_))?cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(_STAR_current_selection_id)),(group_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : group_fn__$1.call(null,item)));
}),filtered_selections)):null)))], null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var or__5142__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.not(excludable_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),exclude_click], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","exclude-all-button","re-com.multi-select/exclude-all-button",1646627822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.buttons.button,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),675], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3("zmdi","zmdi-hc-fw-rc","zmdi-fast-rewind") : re_com.theme.merge_class.call(null,"zmdi","zmdi-hc-fw-rc","zmdi-fast-rewind"))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"-1px"], null)], null),(""+" exclude "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_selections_text)))?chosen_count:cljs.core.count(filtered_selections))))], null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var or__5142__auto____$2 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return (((cljs.core.count(filtered_selections) === (0))) || ((!((cljs.core.count(cljs.core.deref(_STAR_internal_model)) > (cljs.core.truth_(required_QMARK___$1)?(1):(0)))))));
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),exclude_filtered_click], null)], null))], null)], null)], null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),686], null)),new cljs.core.Keyword(null,"size","size",1098693007),(""+"0 2 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(filter_box_QMARK___$1)?"55px":"0px"))),new cljs.core.Keyword(null,"child","child",623967545),""], null)], null)], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","right","re-com.multi-select/right",673715824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),694], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.multi-select","warning-message","re-com.multi-select/warning-message",623614280),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.label,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),701], null)),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref(_STAR_warning_message),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref(_STAR_warning_message))?cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),new cljs.core.Keyword(null,"height","height",1025178622)],["white","green",(1),"0","3px 6px","5000ms","0px","absolute","0px","rc-multi-select-fade-warning-msg","25px"]):null)], null)], null)),(cljs.core.truth_(right_label)?((typeof right_label === 'string')?part(new cljs.core.Keyword("re-com.multi-select","right-label-container","re-com.multi-select/right-label-container",-1237896934),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),721], null)),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.multi-select","right-label","re-com.multi-select/right-label",-1939788251),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_label], null)], null)], null)),part(new cljs.core.Keyword("re-com.multi-select","right-label-item-count","re-com.multi-select/right-label-item-count",-1589958503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_selections_text)))?re_com.util.pluralize(chosen_count,"item"):(""+"showing "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(filtered_selections))+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chosen_count)))], null)], null)], null))], null)], null)], null)):right_label):null),part(new cljs.core.Keyword("re-com.multi-select","right-list-box","re-com.multi-select/right-list-box",-214461030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.multi_select.list_box,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"double-click-callback","double-click-callback",-1057568442),new cljs.core.Keyword(null,"click-callback","click-callback",-609722293),new cljs.core.Keyword(null,"*current-item-id","*current-item-id",-119097013),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"filter-choices-text","filter-choices-text",-253084589),new cljs.core.Keyword(null,"group-heading-selected?","group-heading-selected?",-154747592),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[label_fn,exclude_click,selection_click,_STAR_current_selection_id,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),739], null)),id_fn,cljs.core.deref(_STAR_filter_selections_text),cljs.core.deref(_STAR_selection_group_heading_selected_QMARK_),filtered_selections,group_fn__$1,disabled_QMARK___$1])], null)),(cljs.core.truth_(filter_box_QMARK___$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"4px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.multi_select.filter_text_box,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*filter-text","*filter-text",622880501),_STAR_filter_selections_text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"*warning-message","*warning-message",506396421),_STAR_warning_message,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584),part], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"4px"], null),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_filter_selections_text)))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),762], null)),new cljs.core.Keyword(null,"label","label",1718410804),goog.string.unescapeEntities("&nbsp;"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"smaller"], null)], null):part(new cljs.core.Keyword("re-com.multi-select","right-filter-result-count","re-com.multi-select/right-filter-result-count",1022992973),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.label,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/multi_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),768], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Found ",re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.count(filtered_selections),"match",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["matches"], 0))," containing ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.deref(_STAR_filter_selections_text)], null)], null)], null)], null)))], null):null)], null)], null)], null))], null)], null)], null))], null)], null)], null));
}
};
var re_com$multi_select$multi_select_render = function (var_args){
var p__18124 = null;
if (arguments.length > 0) {
var G__18290__i = 0, G__18290__a = new Array(arguments.length -  0);
while (G__18290__i < G__18290__a.length) {G__18290__a[G__18290__i] = arguments[G__18290__i + 0]; ++G__18290__i;}
  p__18124 = new cljs.core.IndexedSeq(G__18290__a,0,null);
} 
return re_com$multi_select$multi_select_render__delegate.call(this,p__18124);};
re_com$multi_select$multi_select_render.cljs$lang$maxFixedArity = 0;
re_com$multi_select$multi_select_render.cljs$lang$applyTo = (function (arglist__18291){
var p__18124 = cljs.core.seq(arglist__18291);
return re_com$multi_select$multi_select_render__delegate(p__18124);
});
re_com$multi_select$multi_select_render.cljs$core$IFn$_invoke$arity$variadic = re_com$multi_select$multi_select_render__delegate;
return re_com$multi_select$multi_select_render;
})()
;
}
}));

(re_com.multi_select.multi_select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.multi_select.multi_select.cljs$lang$applyTo = (function (seq18121){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18121));
}));


//# sourceMappingURL=re_com.multi_select.js.map
