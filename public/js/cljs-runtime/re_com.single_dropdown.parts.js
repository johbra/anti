goog.provide('re_com.single_dropdown.parts');
/**
 * Return text after insertion in place of selection
 */
re_com.single_dropdown.parts.insert = (function re_com$single_dropdown$parts$insert(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17500 = arguments.length;
var i__5877__auto___17501 = (0);
while(true){
if((i__5877__auto___17501 < len__5876__auto___17500)){
args__5882__auto__.push((arguments[i__5877__auto___17501]));

var G__17502 = (i__5877__auto___17501 + (1));
i__5877__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.single_dropdown.parts.insert.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.single_dropdown.parts.insert.cljs$core$IFn$_invoke$arity$variadic = (function (p__17415){
var map__17416 = p__17415;
var map__17416__$1 = cljs.core.__destructure_map(map__17416);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,new cljs.core.Keyword(null,"sel-start","sel-start",175359789));
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,new cljs.core.Keyword(null,"sel-end","sel-end",81085265));
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,new cljs.core.Keyword(null,"ins","ins",-1021983570));
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(text)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),sel_start):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ins)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(text)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,sel_end):null)));
}));

(re_com.single_dropdown.parts.insert.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.single_dropdown.parts.insert.cljs$lang$applyTo = (function (seq17405){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17405));
}));

/**
 * Return text/selection map after insertion in place of selection & completion
 */
re_com.single_dropdown.parts.auto_complete = (function re_com$single_dropdown$parts$auto_complete(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17503 = arguments.length;
var i__5877__auto___17504 = (0);
while(true){
if((i__5877__auto___17504 < len__5876__auto___17503)){
args__5882__auto__.push((arguments[i__5877__auto___17504]));

var G__17505 = (i__5877__auto___17504 + (1));
i__5877__auto___17504 = G__17505;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.single_dropdown.parts.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.single_dropdown.parts.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (p__17439){
var map__17440 = p__17439;
var map__17440__$1 = cljs.core.__destructure_map(map__17440);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,new cljs.core.Keyword(null,"sel-start","sel-start",175359789));
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,new cljs.core.Keyword(null,"sel-end","sel-end",81085265));
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17440__$1,new cljs.core.Keyword(null,"ins","ins",-1021983570));
var text_SINGLEQUOTE_ = re_com.single_dropdown.parts.insert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"sel-start","sel-start",175359789),sel_start,new cljs.core.Keyword(null,"sel-end","sel-end",81085265),sel_end,new cljs.core.Keyword(null,"ins","ins",-1021983570),ins], 0));
var find = (function (p1__17426_SHARP_){
return goog.string.caseInsensitiveStartsWith(p1__17426_SHARP_,text_SINGLEQUOTE_);
});
var ret = (function (){var temp__5823__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(find,choices));
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var choice = cljs.core.first(xs__6383__auto__);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_SINGLEQUOTE_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(choice,((text_SINGLEQUOTE_).length)))),new cljs.core.Keyword(null,"sel-start","sel-start",175359789),(sel_start + cljs.core.count(ins)),new cljs.core.Keyword(null,"sel-end","sel-end",81085265),cljs.core.count(choice)], null);
} else {
return null;
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sel-start","sel-start",175359789).cljs$core$IFn$_invoke$arity$1(ret),new cljs.core.Keyword(null,"sel-end","sel-end",81085265).cljs$core$IFn$_invoke$arity$1(ret))) && (cljs.core.seq(ins)))){
return ret;
} else {
return null;
}
}));

(re_com.single_dropdown.parts.auto_complete.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.single_dropdown.parts.auto_complete.cljs$lang$applyTo = (function (seq17434){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17434));
}));

re_com.single_dropdown.parts.handle_free_text_insertion = (function re_com$single_dropdown$parts$handle_free_text_insertion(p__17444){
var map__17445 = p__17444;
var map__17445__$1 = cljs.core.__destructure_map(map__17445);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"event","event",301435442));
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"ins","ins",-1021983570));
var auto_complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"auto-complete?","auto-complete?",979505177));
var capitalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"capitalize?","capitalize?",-2078576456));
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var internal_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"internal-model","internal-model",-643165393));
var free_text_sel_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"free-text-sel-range","free-text-sel-range",910028741));
var free_text_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17445__$1,new cljs.core.Keyword(null,"free-text-change","free-text-change",1979368274));
var input = event.target;
var input_sel_start = input.selectionStart;
var input_sel_end = input.selectionEnd;
var ins_SINGLEQUOTE_ = (function (){var G__17446 = ins;
if(cljs.core.truth_((function (){var and__5140__auto__ = capitalize_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (input_sel_start === (0));
} else {
return and__5140__auto__;
}
})())){
return re_com.util.capitalize_first_letter(G__17446);
} else {
return G__17446;
}
})();
var auto_complete_ret = (function (){var and__5140__auto__ = auto_complete_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return re_com.single_dropdown.parts.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"choices","choices",1385611597),choices,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.deref(internal_model),new cljs.core.Keyword(null,"sel-start","sel-start",175359789),input_sel_start,new cljs.core.Keyword(null,"sel-end","sel-end",81085265),input_sel_end,new cljs.core.Keyword(null,"ins","ins",-1021983570),ins_SINGLEQUOTE_], 0));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(auto_complete_ret)){
var map__17447 = auto_complete_ret;
var map__17447__$1 = cljs.core.__destructure_map(map__17447);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17447__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var sel_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17447__$1,new cljs.core.Keyword(null,"sel-start","sel-start",175359789));
var sel_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17447__$1,new cljs.core.Keyword(null,"sel-end","sel-end",81085265));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),text)){
input.setSelectionRange(sel_start,sel_end);
} else {
cljs.core.reset_BANG_(free_text_sel_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sel_start,sel_end], null));

(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(text) : free_text_change.call(null,text));
}

return event.preventDefault();
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ins,ins_SINGLEQUOTE_)){
cljs.core.reset_BANG_(free_text_sel_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(input_sel_start + cljs.core.count(ins)),(input_sel_start + cljs.core.count(ins))], null));

var G__17448_17509 = re_com.single_dropdown.parts.insert.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.deref(internal_model),new cljs.core.Keyword(null,"sel-start","sel-start",175359789),input_sel_start,new cljs.core.Keyword(null,"sel-end","sel-end",81085265),input_sel_end,new cljs.core.Keyword(null,"ins","ins",-1021983570),ins_SINGLEQUOTE_], 0));
(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(G__17448_17509) : free_text_change.call(null,G__17448_17509));

return event.preventDefault();
} else {
return null;
}
}
});
/**
 * Base function (before lifecycle metadata) to render the top part of the dropdown (free-text),
 *   with the editable area and the up/down arrow
 */
re_com.single_dropdown.parts.free_text_dropdown_top_base = (function re_com$single_dropdown$parts$free_text_dropdown_top_base(p__17452){
var map__17453 = p__17452;
var map__17453__$1 = cljs.core.__destructure_map(map__17453);
var free_text_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"free-text-input","free-text-input",-1754286599));
var auto_complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"auto-complete?","auto-complete?",979505177));
var select_free_text_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"select-free-text?","select-free-text?",7426714));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var dropdown_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"dropdown-click","dropdown-click",840191010));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var free_text_sel_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"free-text-sel-range","free-text-sel-range",910028741));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var drop_showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"drop-showing?","drop-showing?",-104540467));
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var internal_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"internal-model","internal-model",-643165393));
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var free_text_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"free-text-change","free-text-change",1979368274));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var free_text_focused_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"free-text-focused?","free-text-focused?",-1109034092));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688));
var capitalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"capitalize?","capitalize?",-2078576456));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen-choices","ul.chosen-choices",753954766),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.search-field","li.search-field",371261414),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.free-text","div.free-text",-1830216539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EEE"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],["off",tab_index,(function (event){
var ins_17515 = event.key;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ins_17515),(1))){
re_com.single_dropdown.parts.handle_free_text_insertion(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"ins","ins",-1021983570),ins_17515,new cljs.core.Keyword(null,"auto-complete?","auto-complete?",979505177),auto_complete_QMARK_,new cljs.core.Keyword(null,"capitalize?","capitalize?",-2078576456),capitalize_QMARK_,new cljs.core.Keyword(null,"choices","choices",1385611597),choices,new cljs.core.Keyword(null,"internal-model","internal-model",-643165393),internal_model,new cljs.core.Keyword(null,"free-text-sel-range","free-text-sel-range",910028741),free_text_sel_range,new cljs.core.Keyword(null,"free-text-change","free-text-change",1979368274),free_text_change], null));
} else {
}

return null;
}),placeholder,disabled_QMARK_,(function (p1__17451_SHARP_){
return cljs.core.reset_BANG_(free_text_input,p1__17451_SHARP_);
}),(function (event){
cljs.core.reset_BANG_(free_text_focused_QMARK_,true);

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

return null;
}),cljs.core.deref(internal_model),(function (event){
if(cljs.core.truth_(filter_box_QMARK_)){
} else {
(cancel.cljs$core$IFn$_invoke$arity$0 ? cancel.cljs$core$IFn$_invoke$arity$0() : cancel.call(null));
}

cljs.core.reset_BANG_(free_text_focused_QMARK_,false);

return null;
}),"text",(function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
(cancel.cljs$core$IFn$_invoke$arity$0 ? cancel.cljs$core$IFn$_invoke$arity$0() : cancel.call(null));

event.preventDefault();
} else {
}

return null;
}),(function (event){
var ins_17517 = event.clipboardData.getData("Text");
re_com.single_dropdown.parts.handle_free_text_insertion(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"ins","ins",-1021983570),ins_17517,new cljs.core.Keyword(null,"auto-complete?","auto-complete?",979505177),auto_complete_QMARK_,new cljs.core.Keyword(null,"capitalize?","capitalize?",-2078576456),capitalize_QMARK_,new cljs.core.Keyword(null,"choices","choices",1385611597),choices,new cljs.core.Keyword(null,"internal-model","internal-model",-643165393),internal_model,new cljs.core.Keyword(null,"free-text-sel-range","free-text-sel-range",910028741),free_text_sel_range,new cljs.core.Keyword(null,"free-text-change","free-text-change",1979368274),free_text_change], null));

return null;
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style], 0)),class$,(function (event){
var value_17523 = event.target.value;
var G__17460_17524 = (function (){var G__17461 = value_17523;
if(cljs.core.truth_(capitalize_QMARK_)){
return re_com.util.capitalize_first_letter(G__17461);
} else {
return G__17461;
}
})();
(free_text_change.cljs$core$IFn$_invoke$arity$1 ? free_text_change.cljs$core$IFn$_invoke$arity$1(G__17460_17524) : free_text_change.call(null,G__17460_17524));

return null;
}),(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.stopPropagation();

event.preventDefault();
}

return null;
})]),attr], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.b-wrapper","span.b-wrapper",126573946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));

if(cljs.core.truth_(cljs.core.deref(free_text_focused_QMARK_))){
event.preventDefault();
} else {
}

return null;
})], null),((cljs.core.not(disabled_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null):null)], null)], null)], null)], null);
});
/**
 * Render the top part of the dropdown (free-text), with the editable area and the up/down arrow
 */
re_com.single_dropdown.parts.free_text_dropdown_top = cljs.core.with_meta(re_com.single_dropdown.parts.free_text_dropdown_top_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (p1__17462_SHARP_){
var vec__17463 = reagent.core.argv(p1__17462_SHARP_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17463,(0),null);
var map__17466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17463,(1),null);
var map__17466__$1 = cljs.core.__destructure_map(map__17466);
var free_text_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17466__$1,new cljs.core.Keyword(null,"free-text-input","free-text-input",-1754286599));
var select_free_text_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17466__$1,new cljs.core.Keyword(null,"select-free-text?","select-free-text?",7426714));
var free_text_focused_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17466__$1,new cljs.core.Keyword(null,"free-text-focused?","free-text-focused?",-1109034092));
var free_text_sel_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17466__$1,new cljs.core.Keyword(null,"free-text-sel-range","free-text-sel-range",910028741));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(free_text_input);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.deref(select_free_text_QMARK_);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.deref(free_text_focused_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.deref(free_text_input).select();
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(free_text_input);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(free_text_sel_range);
} else {
return and__5140__auto__;
}
})())){
cljs.core.deref(free_text_input).setSelectionRange(cljs.core.first(cljs.core.deref(free_text_sel_range)),cljs.core.second(cljs.core.deref(free_text_sel_range)));

return cljs.core.reset_BANG_(free_text_sel_range,null);
} else {
return null;
}
})], null));
re_com.single_dropdown.parts.chosen_single = (function re_com$single_dropdown$parts$chosen_single(_){
var ignore_click = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__17471){
var map__17472 = p__17471;
var map__17472__$1 = cljs.core.__destructure_map(map__17472);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var dropdown_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"dropdown-click","dropdown-click",840191010));
var drop_showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"drop-showing?","drop-showing?",-104540467));
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688));
var ___$1 = reagent.core.set_state(reagent.core.current_component(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),filter_box_QMARK_], null));
var anchor = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(function (){var or__5142__auto__ = tab_index;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(cljs.core.deref(ignore_click))){
cljs.core.reset_BANG_(ignore_click,false);
} else {
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
(key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"Enter")){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
})], null),attr], 0))], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(anchor,children);
});
});
/**
 * Render a filter text box
 */
re_com.single_dropdown.parts.chosen_search = (function re_com$single_dropdown$parts$chosen_search(_){
var focus_BANG_ = (function (p1__17478_SHARP_){
if(cljs.core.truth_(p1__17478_SHARP_)){
return p1__17478_SHARP_.focus();
} else {
return null;
}
});
return (function (p__17479){
var map__17480 = p__17479;
var map__17480__$1 = cljs.core.__destructure_map(map__17480);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var drop_showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"drop-showing?","drop-showing?",-104540467));
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var filter_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"filter-placeholder","filter-placeholder",-1736876526));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17480__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chosen-search","div.chosen-search",-210987404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],["off",filter_placeholder,focus_BANG_,re_com.util.deref_or_value(model),(function (event){
cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return null;
}),"text",style,class$,(function (event){
var G__17481_17534 = event.target.value;
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17481_17534) : on_change.call(null,G__17481_17534));

return null;
}),(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.stopPropagation();

event.preventDefault();
}

return null;
})]),attr], 0))], null)], null),children);
});
});
re_com.single_dropdown.parts.show_selected_item = (function re_com$single_dropdown$parts$show_selected_item(node){
var item_offset_top = node.offsetTop;
var item_offset_bottom = (item_offset_top + node.clientHeight);
var parent = node.parentNode;
var parent_height = parent.clientHeight;
var parent_visible_top = parent.scrollTop;
var parent_visible_bottom = (parent_visible_top + parent_height);
var new_scroll_top = (((item_offset_bottom > parent_visible_bottom))?cljs.core.max.cljs$core$IFn$_invoke$arity$2((item_offset_bottom - parent_height),(0)):(((item_offset_top < parent_visible_top))?item_offset_top:null));
if(cljs.core.truth_(new_scroll_top)){
return (parent.scrollTop = new_scroll_top);
} else {
return null;
}
});
/**
 * Render a choice item and set up appropriate mouse events
 */
re_com.single_dropdown.parts.choice_item = (function re_com$single_dropdown$parts$choice_item(p__17489){
var map__17490 = p__17489;
var map__17490__$1 = cljs.core.__destructure_map(map__17490);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17490__$1,new cljs.core.Keyword(null,"model","model",331153215));
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _BANG_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,_BANG_ref);
var show_BANG_ = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(model),id)){
return re_com.single_dropdown.parts.show_selected_item(cljs.core.deref(_BANG_ref));
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),show_BANG_,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),show_BANG_,new cljs.core.Keyword(null,"display-name","display-name",694513143),"choice-item",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__17491){
var map__17492 = p__17491;
var map__17492__$1 = cljs.core.__destructure_map(map__17492);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17492__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17492__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17492__$1,new cljs.core.Keyword(null,"model","model",331153215));
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(model__$1),id__$1);
var class$ = ((selected)?"highlighted":(cljs.core.truth_(cljs.core.deref(mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"active-result group-option "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)),new cljs.core.Keyword(null,"ref","ref",1289896967),ref_BANG_,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(id__$1) : on_click.call(null,id__$1));

event.preventDefault();

return null;
})], null),label], null);
})], null));
});

//# sourceMappingURL=re_com.single_dropdown.parts.js.map
