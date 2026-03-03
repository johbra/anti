goog.provide('re_com.tag_dropdown');
re_com.tag_dropdown.label_style = (function re_com$tag_dropdown$label_style(var_args){
var G__18483 = arguments.length;
switch (G__18483) {
case 2:
return re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$2 = (function (selected_QMARK_,as_exclusions_QMARK_){
return re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$3(selected_QMARK_,as_exclusions_QMARK_,null);
}));

(re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$3 = (function (selected_QMARK_,as_exclusions_QMARK_,selected_color){
var base_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1px",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null);
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

(re_com.tag_dropdown.label_style.cljs$lang$maxFixedArity = 3);

re_com.tag_dropdown.text_tag = (function re_com$tag_dropdown$text_tag(){
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$tag_dropdown$text_tag_$_text_tag_render__delegate = function (p__18489){
var map__18490 = p__18489;
var map__18490__$1 = cljs.core.__destructure_map(map__18490);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_unselect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"on-unselect","on-unselect",279420763));
var hover_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18490__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var description_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"description-fn","description-fn",-1507979835));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18490__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18490__$1,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109));
var tag_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(tag_data) : id_fn.call(null,tag_data));
var tag_id_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_id);
var clickable_QMARK_ = (((!((on_click == null)))) && (cljs.core.not(disabled_QMARK_)));
var unselectable_QMARK_ = (((!((on_unselect == null)))) && (cljs.core.not(disabled_QMARK_)));
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag_data),new cljs.core.Keyword(null,"$placeholder$","$placeholder$",223628665));
var border = ((placeholder_QMARK_)?"1px dashed #828282":null);
var tag_label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(tag_data) : label_fn.call(null,tag_data));
var tag_description = (cljs.core.truth_(description_fn)?(description_fn.cljs$core$IFn$_invoke$arity$1 ? description_fn.cljs$core$IFn$_invoke$arity$1(tag_data) : description_fn.call(null,tag_data)):null);
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),56], null)),new cljs.core.Keyword(null,"class","class",-2030961996),(""+"rc-tag-dropdown-tag "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_id_kw,new cljs.core.Keyword(null,"class","class",-2030961996)], null)))),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_id_kw,new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_id_kw,new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),62], null)),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"justify","justify",-722524056),((placeholder_QMARK_)?new cljs.core.Keyword(null,"end","end",-268185958):new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.Keyword(null,"min-width","min-width",1926193728),((placeholder_QMARK_)?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(tag_data):null),new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 4px",new cljs.core.Keyword(null,"margin","margin",-995903681),re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),((placeholder_QMARK_)?(0):(6)),(2),(0)], 0)),new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$3("noselect","rc-text-tag",class$) : re_com.theme.merge_class.call(null,"noselect","rc-text-tag",class$)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(tag_data),new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core.not(disabled_QMARK_))?"pointer":"default"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"border","border",1444987323),border,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px"], null),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(over_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__5140__auto__;
}
})())?hover_style:null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),tooltip,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(((placeholder_QMARK_) && (cljs.core.not(disabled_QMARK_)))){
var G__18514_18581 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag_data);
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__18514_18581) : on_click.call(null,G__18514_18581));
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
cljs.core.reset_BANG_(over_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
cljs.core.reset_BANG_(over_QMARK_,false);

return null;
})], null),attr], 0)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((placeholder_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),91], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"hsl(194, 61%, 85%)"], null),new cljs.core.Keyword(null,"child","child",623967545),goog.string.unescapeEntities("&#9660;")], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),95], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),((clickable_QMARK_)?"pointer":null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(clickable_QMARK_){
var G__18517_18582 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag_data);
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__18517_18582) : on_click.call(null,G__18517_18582));
} else {
}

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),(function (){var or__5142__auto__ = tag_label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "???";
}
})()], null)),((((unselectable_QMARK_) && ((!(placeholder_QMARK_)))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),104], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),107], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px"], null),new cljs.core.Keyword(null,"child","child",623967545),"|"], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),112], null)),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"hover-color","hover-color",663962326),"#ccc",new cljs.core.Keyword(null,"div-size","div-size",1661625995),(13),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(unselectable_QMARK_){
var G__18522 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag_data);
return (on_unselect.cljs$core$IFn$_invoke$arity$1 ? on_unselect.cljs$core$IFn$_invoke$arity$1(G__18522) : on_unselect.call(null,G__18522));
} else {
return null;
}
})], null)], null)], null):null)], null)], null),(cljs.core.truth_(tag_description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#586069"], null)], null),tag_description], null):null)], null)], null);
};
var re_com$tag_dropdown$text_tag_$_text_tag_render = function (var_args){
var p__18489 = null;
if (arguments.length > 0) {
var G__18585__i = 0, G__18585__a = new Array(arguments.length -  0);
while (G__18585__i < G__18585__a.length) {G__18585__a[G__18585__i] = arguments[G__18585__i + 0]; ++G__18585__i;}
  p__18489 = new cljs.core.IndexedSeq(G__18585__a,0,null);
} 
return re_com$tag_dropdown$text_tag_$_text_tag_render__delegate.call(this,p__18489);};
re_com$tag_dropdown$text_tag_$_text_tag_render.cljs$lang$maxFixedArity = 0;
re_com$tag_dropdown$text_tag_$_text_tag_render.cljs$lang$applyTo = (function (arglist__18586){
var p__18489 = cljs.core.seq(arglist__18586);
return re_com$tag_dropdown$text_tag_$_text_tag_render__delegate(p__18489);
});
re_com$tag_dropdown$text_tag_$_text_tag_render.cljs$core$IFn$_invoke$arity$variadic = re_com$tag_dropdown$text_tag_$_text_tag_render__delegate;
return re_com$tag_dropdown$text_tag_$_text_tag_render;
})()
;
});
re_com.tag_dropdown.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","popover-anchor-wrapper","re-com.tag-dropdown/popover-anchor-wrapper",-1790254909),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","main","re-com.tag-dropdown/main",-286617352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tag-dropdown",new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","h-box","re-com.core/h-box",-920824865,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","tags","re-com.tag-dropdown/tags",-656944674),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","h-box","re-com.core/h-box",-920824865,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","tag","re-com.tag-dropdown/tag",1648429332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each individual tag can be independently targeted ","with the keyword of its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","placeholder-tag","re-com.tag-dropdown/placeholder-tag",253989700)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","placeholder-message","re-com.tag-dropdown/placeholder-message",-708245409)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","actions","re-com.tag-dropdown/actions",-2142606713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","h-box","re-com.core/h-box",-920824865,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","gap","re-com.tag-dropdown/gap",-1283574399)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","counter","re-com.tag-dropdown/counter",-541799060),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","label","re-com.core/label",1621981885,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The selection counter displayed to the left ","of the close button"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","close-button","re-com.tag-dropdown/close-button",189588160),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","close-button","re-com.core/close-button",1252237274,null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","popover-content-wrapper","re-com.tag-dropdown/popover-content-wrapper",-1381540238),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","selection-list","re-com.tag-dropdown/selection-list",323223904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","selection-list","re-com.core/selection-list",1606085098,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.tag-dropdown","text-tag","re-com.tag-dropdown/text-tag",404193023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.tag-dropdown","text-tag","re-com.tag-dropdown/text-tag",2044724550,null)], null)], null)], null)], null)], null);
re_com.tag_dropdown.parts_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_com.part.describe(re_com.tag_dropdown.part_structure),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18531_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__18531_SHARP_,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.inc));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18530_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__18530_SHARP_));
}),re_com.selection_list.parts_desc))):null);
re_com.tag_dropdown.tag_dropdown_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tag_dropdown.parts_desc)):null);
re_com.tag_dropdown.tag_dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each map represents a choice. Values corresponding to id, label, short label and tag background color are extracted by the functions ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":short-label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":background-color"], null),". See below."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"a set of ids | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The set of the ids for currently selected choices. If nil or empty, see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":placeholder"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Background text shown when there's no selection."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"This function is called whenever the selection changes. Called with one argument, the set of selected ids. See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, at least one item must be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"unselect-buttons?","unselect-buttons?",-1841823085),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"When true, \"X\" buttons will be added to the display of selected tags (on the right), allowing the user to directly unselect them."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"When true, an 'Only' button will be displayed next to each item in the dropdown, allowing the user to select only that item."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-counter?","show-counter?",-292828728),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"When true, a counter showing the number of selected items will be displayed in the anchor to the left of the close button."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),":label",new cljs.core.Keyword(null,"type","type",1174270348),"map -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function which can turn a choice into a displayable label. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),". Given one argument, a choice map, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description-fn","description-fn",-1507979835),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),":description",new cljs.core.Keyword(null,"type","type",1174270348),"map -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function which can turn a choice into a displayable description. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),". Given one argument, a choice map, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"abbrev-fn","abbrev-fn",589483206),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"choice -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function which can turn a choice into an abbreviated label. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),". Given one argument, a choice map, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"abbrev-threshold","abbrev-threshold",-726872663),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The text displayed for selected choices is obtained via either ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"abbrev-fn"], null),". When the total number of characters displayed is less than this argument then ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," will be used, otherwise ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"abbrev-fn"], null),". You should set this value taking into account the width of this component. If not set, only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," is used."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the CSS min-width, like \"100px\" or \"20em\". This is the natural display width of the Component. It prevents the width from becoming smaller than the value specified, yet allows growth horizontally if sufficient choices are selected up to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":max-width"], null)," or unbounded growth if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":max-width"], null)," is not provided."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS max-width, like \"100px\" or \"20em\". It prevents the width from becoming larger than the value specified. If sufficient choices are selected to go beyond the maximum then some choices will be hidden by overflow."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"25px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the specific height of the component"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"380px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum height of the dropdown menu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tag_dropdown.tag_dropdown_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
re_com.tag_dropdown.tag_dropdown = (function re_com$tag_dropdown$tag_dropdown(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18591 = arguments.length;
var i__5877__auto___18592 = (0);
while(true){
if((i__5877__auto___18592 < len__5876__auto___18591)){
args__5882__auto__.push((arguments[i__5877__auto___18592]));

var G__18593 = (i__5877__auto___18592 + (1));
i__5877__auto___18592 = G__18593;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.tag_dropdown.tag_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.tag_dropdown.tag_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__18556){
var map__18557 = p__18556;
var map__18557__$1 = cljs.core.__destructure_map(map__18557);
var args = map__18557__$1;
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18557__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18557__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tag_dropdown.tag_dropdown_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var transition_BANG_ = (function (p1__18546_SHARP_){
var G__18558 = p1__18546_SHARP_;
var G__18558__$1 = (((G__18558 instanceof cljs.core.Keyword))?G__18558.fqn:null);
switch (G__18558__$1) {
case "open":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "close":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18558__$1))));

}
});
return (function() { 
var re_com$tag_dropdown$tag_dropdown_render__delegate = function (p__18559){
var map__18560 = p__18559;
var map__18560__$1 = cljs.core.__destructure_map(map__18560);
var args__$1 = map__18560__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var show_only_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18560__$1,new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),false);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18560__$1,new cljs.core.Keyword(null,"height","height",1025178622),"25px");
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"model","model",331153215));
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18560__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18560__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804),"380px");
var description_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18560__$1,new cljs.core.Keyword(null,"description-fn","description-fn",-1507979835),new cljs.core.Keyword(null,"description","description",-1428560544));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var abbrev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"abbrev-fn","abbrev-fn",589483206));
var show_counter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18560__$1,new cljs.core.Keyword(null,"show-counter?","show-counter?",-292828728),false);
var abbrev_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"abbrev-threshold","abbrev-threshold",-726872663));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var unselect_buttons_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18560__$1,new cljs.core.Keyword(null,"unselect-buttons?","unselect-buttons?",-1841823085));
var or__5142__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tag_dropdown.tag_dropdown_args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.tag_dropdown.part_structure,(re_com.part.descend.cljs$core$IFn$_invoke$arity$2 ? re_com.part.descend.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.Keyword("re-com.core","tag-dropdown","re-com.core/tag-dropdown",-1415164943)) : re_com.part.descend.call(null,args__$1,new cljs.core.Keyword("re-com.core","tag-dropdown","re-com.core/tag-dropdown",-1415164943))));
var choices__$1 = re_com.util.deref_or_value(choices);
var model__$1 = re_com.util.deref_or_value(model);
var abbrev_threshold__$1 = re_com.util.deref_or_value(abbrev_threshold);
var required_QMARK___$1 = re_com.util.deref_or_value(required_QMARK_);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var unselect_buttons_QMARK___$1 = re_com.util.deref_or_value(unselect_buttons_QMARK_);
var show_only_button_QMARK___$1 = re_com.util.deref_or_value(show_only_button_QMARK_);
var show_counter_QMARK___$1 = re_com.util.deref_or_value(show_counter_QMARK_);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interaction","interaction",-2143888916),(cljs.core.truth_(disabled_QMARK___$1)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756))], null)], null);
var choices_num_chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,choice){
if(cljs.core.contains_QMARK_(model__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(choice))){
return (n + cljs.core.count((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(choice) : label_fn.call(null,choice))));
} else {
return n;
}
}),(0),choices__$1);
var abbrev_QMARK_ = (((choices_num_chars >= abbrev_threshold__$1)) && (((typeof abbrev_threshold__$1 === 'number') && (cljs.core.fn_QMARK_(abbrev_fn)))));
var placeholder_tag = part(new cljs.core.Keyword("re-com.tag-dropdown","placeholder-tag","re-com.tag-dropdown/placeholder-tag",253989700),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tag_dropdown.text_tag,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"$placeholder$","$placeholder$",223628665),new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"width","width",-384071477),((abbrev_QMARK_)?"20px":"40px")], null)], null)], null));
var tag_list_body = part(new cljs.core.Keyword("re-com.tag-dropdown","selection-list","re-com.tag-dropdown/selection-list",323223904),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.selection_list.selection_list,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"model","model",331153215)],[required_QMARK___$1,max_height,true,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(parts,re_com.selection_list.parts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),(function (tag){
return part(new cljs.core.Keyword("re-com.tag-dropdown","text-tag","re-com.tag-dropdown/text-tag",404193023),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tag_dropdown.text_tag,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"description-fn","description-fn",-1507979835),description_fn,new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),tag], null)], null));
})], null)], 0)),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),240], null)),choices__$1,true,(function (p1__18547_SHARP_){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(p1__18547_SHARP_) : on_change.call(null,p1__18547_SHARP_));
}),disabled_QMARK___$1,show_only_button_QMARK___$1,model__$1])], null));
var tag = (function (p__18565){
var map__18566 = p__18565;
var map__18566__$1 = cljs.core.__destructure_map(map__18566);
var tag = map__18566__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18566__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18566__$1,new cljs.core.Keyword(null,"label","label",1718410804));
if(cljs.core.contains_QMARK_(model__$1,id)){
return part(new cljs.core.Keyword("re-com.tag-dropdown","text-tag","re-com.tag-dropdown/text-tag",404193023),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tag_dropdown.text_tag,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),((abbrev_QMARK_)?abbrev_fn:label_fn),new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),tag,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),label,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(showing_QMARK_,true);
}),new cljs.core.Keyword(null,"on-unselect","on-unselect",279420763),(cljs.core.truth_((function (){var and__5140__auto__ = unselect_buttons_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(model__$1));
if(and__5140__auto____$1){
return required_QMARK___$1;
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
})())?(function (p1__18550_SHARP_){
var G__18567 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(model__$1,p1__18550_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18567) : on_change.call(null,G__18567));
}):null),new cljs.core.Keyword(null,"hover-style","hover-style",976094077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.8"], null),new cljs.core.Keyword(null,"parts","parts",849007691),parts], null)], null));
} else {
return null;
}
});
var tag_main = part(new cljs.core.Keyword("re-com.tag-dropdown","main","re-com.tag-dropdown/main",-286617352),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),282], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.tag-dropdown","tags","re-com.tag-dropdown/tags",-656944674),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),292], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tag,choices__$1),(cljs.core.truth_(disabled_QMARK___$1)?null:placeholder_tag),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null)], null),(cljs.core.truth_((function (){var and__5140__auto__ = (cljs.core.count(model__$1) === (0));
if(and__5140__auto__){
return placeholder;
} else {
return and__5140__auto__;
}
})())?part(new cljs.core.Keyword("re-com.tag-dropdown","placeholder-message","re-com.tag-dropdown/placeholder-message",-708245409),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),303], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",623967545),placeholder], null)], null)):null)], 0))], null)], null)),part(new cljs.core.Keyword("re-com.tag-dropdown","actions","re-com.tag-dropdown/actions",-2142606713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),308], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.tag-dropdown","gap","re-com.tag-dropdown/gap",-1283574399),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.gap,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"8px"], null)], null)),(cljs.core.truth_((function (){var and__5140__auto__ = show_counter_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_empty(model__$1);
} else {
return and__5140__auto__;
}
})())?part(new cljs.core.Keyword("re-com.tag-dropdown","counter","re-com.tag-dropdown/counter",-541799060),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.label,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),319], null)),new cljs.core.Keyword(null,"label","label",1718410804),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(model__$1)))], null)], null)):null),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not_empty(model__$1);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(disabled_QMARK___$1)) && (cljs.core.not(required_QMARK___$1)));
} else {
return and__5140__auto__;
}
})())?part(new cljs.core.Keyword("re-com.tag-dropdown","close-button","re-com.tag-dropdown/close-button",189588160),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.close_button.close_button,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),325], null)),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__18569 = cljs.core.PersistentHashSet.EMPTY;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18569) : on_change.call(null,G__18569));
})], null)], null)):null)], null)], null)], null))], null)], null)], null));
return part(new cljs.core.Keyword("re-com.tag-dropdown","popover-anchor-wrapper","re-com.tag-dropdown/popover-anchor-wrapper",-1790254909),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$2 = debug_as;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})()], null),args__$1),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),tag_main,new cljs.core.Keyword(null,"popover","popover",-1809582136),part(new cljs.core.Keyword("re-com.tag-dropdown","popover-content-wrapper","re-com.tag-dropdown/popover-content-wrapper",-1381540238),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tag_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),342], null)),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"body","body",-2049205669),tag_list_body], null)], null))], null)], null));
}
};
var re_com$tag_dropdown$tag_dropdown_render = function (var_args){
var p__18559 = null;
if (arguments.length > 0) {
var G__18598__i = 0, G__18598__a = new Array(arguments.length -  0);
while (G__18598__i < G__18598__a.length) {G__18598__a[G__18598__i] = arguments[G__18598__i + 0]; ++G__18598__i;}
  p__18559 = new cljs.core.IndexedSeq(G__18598__a,0,null);
} 
return re_com$tag_dropdown$tag_dropdown_render__delegate.call(this,p__18559);};
re_com$tag_dropdown$tag_dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$tag_dropdown$tag_dropdown_render.cljs$lang$applyTo = (function (arglist__18599){
var p__18559 = cljs.core.seq(arglist__18599);
return re_com$tag_dropdown$tag_dropdown_render__delegate(p__18559);
});
re_com$tag_dropdown$tag_dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$tag_dropdown$tag_dropdown_render__delegate;
return re_com$tag_dropdown$tag_dropdown_render;
})()
;
}
}));

(re_com.tag_dropdown.tag_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tag_dropdown.tag_dropdown.cljs$lang$applyTo = (function (seq18555){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18555));
}));


//# sourceMappingURL=re_com.tag_dropdown.js.map
