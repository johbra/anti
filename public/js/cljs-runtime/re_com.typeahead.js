goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__17746){
var map__17747 = p__17746;
var map__17747__$1 = cljs.core.__destructure_map(map__17747);
var args = map__17747__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__17748 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__5142__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__17748,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__17748,external_model_value));
} else {
return G__17748;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__17751,event){
var map__17752 = p__17751;
var map__17752__$1 = cljs.core.__destructure_map(map__17752);
var state = map__17752__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17752__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17752__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17752__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__17753 = event;
var G__17753__$1 = (((G__17753 instanceof cljs.core.Keyword))?G__17753.fqn:null);
switch (G__17753__$1) {
case "input-text-blurred":
var and__5140__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__5140__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__5140__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__5140__auto__){
var or__5142__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__5140__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__17765,event){
var map__17768 = p__17765;
var map__17768__$1 = cljs.core.__destructure_map(map__17768);
var state = map__17768__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17768__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__17771 = event;
var G__17771__$1 = (((G__17771 instanceof cljs.core.Keyword))?G__17771.fqn:null);
switch (G__17771__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__17779,new_value){
var map__17782 = p__17779;
var map__17782__$1 = cljs.core.__destructure_map(map__17782);
var state = map__17782__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17782__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__17810,suggestion){
var map__17811 = p__17810;
var map__17811__$1 = cljs.core.__destructure_map(map__17811);
var state = map__17811__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17811__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__17812 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__17812,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__17812;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__17813,index){
var map__17814 = p__17813;
var map__17814__$1 = cljs.core.__destructure_map(map__17814);
var state = map__17814__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17814__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__17815 = state;
var G__17815__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17815,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__17815__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__17815__$1,suggestion):G__17815__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__17815__$2,suggestion);
} else {
return G__17815__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__17816,index){
var map__17817 = p__17816;
var map__17817__$1 = cljs.core.__destructure_map(map__17817);
var state = map__17817__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17817__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__17818){
var map__17821 = p__17818;
var map__17821__$1 = cljs.core.__destructure_map(map__17821);
var state = map__17821__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17822 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__17822,suggestion_active_index);
} else {
return G__17822;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__17827){
var map__17828 = p__17827;
var map__17828__$1 = cljs.core.__destructure_map(map__17828);
var state = map__17828__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17829 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__17829,re_com.typeahead.wrap(((function (){var or__5142__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__17829;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__17832){
var map__17833 = p__17832;
var map__17833__$1 = cljs.core.__destructure_map(map__17833);
var state = map__17833__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17833__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17833__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17834 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__17834,re_com.typeahead.wrap(((function (){var or__5142__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__17834;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__17835 = state;
var G__17835__$1 = re_com.typeahead.clear_suggestions(G__17835)
;
var G__17835__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__17835__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__17835__$2,null);
} else {
return G__17835__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__17836){
var map__17837 = p__17836;
var map__17837__$1 = cljs.core.__destructure_map(map__17837);
var state = map__17837__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17837__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17837__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17837__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__5140__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__5140__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5821__auto__ = (function (){var G__17839 = text;
var G__17840 = (function (p1__17838_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__17838_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__17839,G__17840) : data_source.call(null,G__17839,G__17840));
})();
if(cljs.core.truth_(temp__5821__auto__)){
var return_value = temp__5821__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__15374__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15375__auto__ = (function (){var switch__15210__auto__ = (function (state_17913){
var state_val_17914 = (state_17913[(1)]);
if((state_val_17914 === (1))){
var state_17913__$1 = state_17913;
var statearr_17922_18211 = state_17913__$1;
(statearr_17922_18211[(2)] = null);

(statearr_17922_18211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (2))){
var state_17913__$1 = state_17913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17913__$1,(4),c_search);
} else {
if((state_val_17914 === (3))){
var inst_17899 = (state_17913[(2)]);
var state_17913__$1 = state_17913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17913__$1,inst_17899);
} else {
if((state_val_17914 === (4))){
var inst_17866 = (state_17913[(7)]);
var inst_17866__$1 = (state_17913[(2)]);
var inst_17867 = cljs.core.deref(state_atom);
var inst_17868 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_17867);
var inst_17870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_17866__$1);
var state_17913__$1 = (function (){var statearr_17933 = state_17913;
(statearr_17933[(7)] = inst_17866__$1);

(statearr_17933[(8)] = inst_17868);

return statearr_17933;
})();
if(inst_17870){
var statearr_17937_18212 = state_17913__$1;
(statearr_17937_18212[(1)] = (5));

} else {
var statearr_17938_18213 = state_17913__$1;
(statearr_17938_18213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (5))){
var inst_17868 = (state_17913[(8)]);
var inst_17875 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_17876 = re_com.typeahead.search_data_source_BANG_(inst_17868,state_atom,"");
var state_17913__$1 = (function (){var statearr_17939 = state_17913;
(statearr_17939[(9)] = inst_17875);

return statearr_17939;
})();
var statearr_17940_18214 = state_17913__$1;
(statearr_17940_18214[(2)] = inst_17876);

(statearr_17940_18214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (6))){
var inst_17868 = (state_17913[(8)]);
var inst_17866 = (state_17913[(7)]);
var inst_17880 = re_com.typeahead.search_data_source_BANG_(inst_17868,state_atom,inst_17866);
var state_17913__$1 = state_17913;
var statearr_17941_18215 = state_17913__$1;
(statearr_17941_18215[(2)] = inst_17880);

(statearr_17941_18215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17914 === (7))){
var inst_17886 = (state_17913[(2)]);
var state_17913__$1 = (function (){var statearr_17942 = state_17913;
(statearr_17942[(10)] = inst_17886);

return statearr_17942;
})();
var statearr_17943_18216 = state_17913__$1;
(statearr_17943_18216[(2)] = null);

(statearr_17943_18216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto____0 = (function (){
var statearr_17944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17944[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto__);

(statearr_17944[(1)] = (1));

return statearr_17944;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto____1 = (function (state_17913){
while(true){
var ret_value__15212__auto__ = (function (){try{while(true){
var result__15213__auto__ = switch__15210__auto__(state_17913);
if(cljs.core.keyword_identical_QMARK_(result__15213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15213__auto__;
}
break;
}
}catch (e17945){var ex__15214__auto__ = e17945;
var statearr_17946_18217 = state_17913;
(statearr_17946_18217[(2)] = ex__15214__auto__);


if(cljs.core.seq((state_17913[(4)]))){
var statearr_17947_18218 = state_17913;
(statearr_17947_18218[(1)] = cljs.core.first((state_17913[(4)])));

} else {
throw ex__15214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18219 = state_17913;
state_17913 = G__18219;
continue;
} else {
return ret_value__15212__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto__ = function(state_17913){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto____1.call(this,state_17913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15211__auto__;
})()
})();
var state__15376__auto__ = (function (){var statearr_17948 = f__15375__auto__();
(statearr_17948[(6)] = c__15374__auto__);

return statearr_17948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15376__auto__);
}));

return c__15374__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__17951 = cljs.core.deref(state_atom);
var map__17951__$1 = cljs.core.__destructure_map(map__17951);
var state = map__17951__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__17949_SHARP_){
var G__17952 = p1__17949_SHARP_;
var G__17952__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__17952,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__17952__$1,new_text);
} else {
return G__17952__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__17954 = cljs.core._EQ_;
var expr__17955 = event.key;
if(cljs.core.truth_((pred__17954.cljs$core$IFn$_invoke$arity$2 ? pred__17954.cljs$core$IFn$_invoke$arity$2("ArrowUp",expr__17955) : pred__17954.call(null,"ArrowUp",expr__17955)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__17954.cljs$core$IFn$_invoke$arity$2 ? pred__17954.cljs$core$IFn$_invoke$arity$2("ArrowDown",expr__17955) : pred__17954.call(null,"ArrowDown",expr__17955)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__17954.cljs$core$IFn$_invoke$arity$2 ? pred__17954.cljs$core$IFn$_invoke$arity$2("Enter",expr__17955) : pred__17954.call(null,"Enter",expr__17955)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__17954.cljs$core$IFn$_invoke$arity$2 ? pred__17954.cljs$core$IFn$_invoke$arity$2("Escape",expr__17955) : pred__17954.call(null,"Escape",expr__17955)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__17954.cljs$core$IFn$_invoke$arity$2 ? pred__17954.cljs$core$IFn$_invoke$arity$2("Tab",expr__17955) : pred__17954.call(null,"Tab",expr__17955)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.typeahead","wrapper","re-com.typeahead/wrapper",-244385060),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","v-box","re-com.box/v-box",-981983886,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.typeahead","input","re-com.typeahead/input",-636700935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.input-text","input-text","re-com.input-text/input-text",1126759156,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.typeahead","suggestions-wrapper","re-com.typeahead/suggestions-wrapper",685256282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.typeahead","suggestions-container","re-com.typeahead/suggestions-container",1739847335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","v-box","re-com.box/v-box",-981983886,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.typeahead","throbber","re-com.typeahead/throbber",130327127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.throbber","throbber","re-com.throbber/throbber",1858792021,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.typeahead","suggestion","re-com.typeahead/suggestion",-103271028),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null)], null)], null)], null)], null);
re_com.typeahead.typeahead_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.typeahead.part_structure):null);
re_com.typeahead.typeahead_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.typeahead.typeahead_parts_desc)):null);
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Function that supplies suggestion objects. Accepts either (1) a string argument returning a collection of suggestions, or (2) a string and callback, returning ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null)," and calling the callback with suggestions later."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Initial value (should match suggestion objects from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Called with chosen suggestion. Timing controlled by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," only when choosing a suggestion. When false, invoke on every change (navigation or typing if not rigid)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"Update model on every keystroke (similar to not change-on-blur, but no changes when mouse is over suggestions)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When false, allow arbitrary text input instead of requiring selection from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"When true, disable user interaction"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Milliseconds to wait after input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Override default suggestion rendering. Receives the suggestion object, returns hiccup"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Convert chosen suggestion to string for input display"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Placeholder text when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"description","description",-1428560544),"CSS width (applies to wrapper)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS height (applies to input)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null)," for normal or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When true, display icon matching ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Tooltip text for status icon"], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.args.class$,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names (applies to input)"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.args.style,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles (applies to input)"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.args.attr,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null)," (applies to wrapper, not input)"], null)),re_com.args.pre,re_com.args.theme,re_com.args.parts(re_com.typeahead.typeahead_parts),re_com.args.src,re_com.args.debug_as], null),re_com.part.describe_args(re_com.typeahead.part_structure)):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18220 = arguments.length;
var i__5877__auto___18221 = (0);
while(true){
if((i__5877__auto___18221 < len__5876__auto___18220)){
args__5882__auto__.push((arguments[i__5877__auto___18221]));

var G__18222 = (i__5877__auto___18221 + (1));
i__5877__auto___18221 = G__18222;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__17978){
var map__17979 = p__17978;
var map__17979__$1 = cljs.core.__destructure_map(map__17979);
var args = map__17979__$1;
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17979__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17979__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var map__18023 = re_com.typeahead.make_typeahead_state(args);
var map__18023__$1 = cljs.core.__destructure_map(map__18023);
var state = map__18023__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18023__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18023__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__18027){
var map__18028 = p__18027;
var map__18028__$1 = cljs.core.__destructure_map(map__18028);
var args__$1 = map__18028__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"model","model",331153215));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var or__5142__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var map__18029 = cljs.core.deref(state_atom);
var map__18029__$1 = cljs.core.__destructure_map(map__18029);
var state__$1 = map__18029__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18029__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18029__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18029__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18029__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__5142__auto____$2 = re_com.util.deref_or_value(width);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return "250px";
}
})();
var height__$1 = re_com.util.deref_or_value(height);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.typeahead.part_structure,args__$1);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),waiting_QMARK_,new cljs.core.Keyword(null,"has-suggestions?","has-suggestions?",283559251),cljs.core.not_empty(suggestions),new cljs.core.Keyword(null,"show-suggestions?","show-suggestions?",827864355),(function (){var or__5142__auto____$2 = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return waiting_QMARK_;
}
})()], null)], null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return part(new cljs.core.Keyword("re-com.typeahead","wrapper","re-com.typeahead/wrapper",-244385060),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument((function (){var G__18045 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"src","src",-1651076051),src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$2 = debug_as;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})()], 0));
if(cljs.core.truth_(width__$1)){
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__18045,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null)], 0));
} else {
return G__18045;
}
})(),args__$1),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.typeahead","input","re-com.typeahead/input",-636700935),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.input_text.input_text,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),(function (){var G__18085 = cljs.core.select_keys(args__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736)], null));
var G__18085__$1 = (cljs.core.truth_(width__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18085,new cljs.core.Keyword(null,"width","width",-384071477),width__$1):G__18085);
if(cljs.core.truth_(height__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18085__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1);
} else {
return G__18085__$1;
}
})(),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"attr","attr",-604132353)],[placeholder,re_com_ctx,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),322], null)),status,false,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),disabled_QMARK_,status_icon_QMARK_,status_tooltip,input_text_model,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)])], null)),(cljs.core.truth_((function (){var or__5142__auto____$2 = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return waiting_QMARK_;
}
})())?part(new cljs.core.Keyword("re-com.typeahead","suggestions-wrapper","re-com.typeahead/suggestions-wrapper",685256282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),338], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.typeahead","suggestions-container","re-com.typeahead/suggestions-container",1739847335),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),345], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),351], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.typeahead","throbber","re-com.typeahead/throbber",130327127),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.throbber.throbber,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),358], null)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)], null)], null))], null):null),(function (){var iter__5628__auto__ = (function re_com$typeahead$typeahead_render_$_iter__18091(s__18092){
return (new cljs.core.LazySeq(null,(function (){
var s__18092__$1 = s__18092;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18092__$1);
if(temp__5823__auto__){
var s__18092__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18092__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__18092__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__18094 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__18093 = (0);
while(true){
if((i__18093 < size__5627__auto__)){
var vec__18095 = cljs.core._nth(c__5626__auto__,i__18093);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18095,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18095,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
var suggestion_ctx = cljs.core.assoc_in(re_com_ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),selected_QMARK_);
cljs.core.chunk_append(b__18094,part(new cljs.core.Keyword("re-com.typeahead","suggestion","re-com.typeahead/suggestion",-103271028),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),367], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),suggestion_ctx,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__18093,selected_QMARK_,suggestion_ctx,vec__18095,i,s,c__5626__auto__,size__5627__auto__,b__18094,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__18093,selected_QMARK_,suggestion_ctx,vec__18095,i,s,c__5626__auto__,size__5627__auto__,b__18094,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__18093,selected_QMARK_,suggestion_ctx,vec__18095,i,s,c__5626__auto__,size__5627__auto__,b__18094,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme){
return (function (p1__17970_SHARP_){
p1__17970_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__18093,selected_QMARK_,suggestion_ctx,vec__18095,i,s,c__5626__auto__,size__5627__auto__,b__18094,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme))
], null)], null)], null)));

var G__18223 = (i__18093 + (1));
i__18093 = G__18223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18094),re_com$typeahead$typeahead_render_$_iter__18091(cljs.core.chunk_rest(s__18092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18094),null);
}
} else {
var vec__18098 = cljs.core.first(s__18092__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18098,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18098,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
var suggestion_ctx = cljs.core.assoc_in(re_com_ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null),selected_QMARK_);
return cljs.core.cons(part(new cljs.core.Keyword("re-com.typeahead","suggestion","re-com.typeahead/suggestion",-103271028),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),367], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),suggestion_ctx,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,suggestion_ctx,vec__18098,i,s,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,suggestion_ctx,vec__18098,i,s,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,suggestion_ctx,vec__18098,i,s,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme){
return (function (p1__17970_SHARP_){
p1__17970_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,suggestion_ctx,vec__18098,i,s,s__18092__$2,temp__5823__auto__,map__18029,map__18029__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,height__$1,part,re_com_ctx,or__5142__auto____$1,map__18028,map__18028__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,placeholder,render_suggestion,width,data_source,src,debug_as,status,map__18023,map__18023__$1,state,c_search,c_input,state_atom,input_text_model,theme__$1,or__5142__auto__,map__17979,map__17979__$1,args,pre_theme,theme))
], null)], null)], null)),re_com$typeahead$typeahead_render_$_iter__18091(cljs.core.rest(s__18092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null))], null)], null)):null)], null)], null)], null));
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__18027 = null;
if (arguments.length > 0) {
var G__18224__i = 0, G__18224__a = new Array(arguments.length -  0);
while (G__18224__i < G__18224__a.length) {G__18224__a[G__18224__i] = arguments[G__18224__i + 0]; ++G__18224__i;}
  p__18027 = new cljs.core.IndexedSeq(G__18224__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__18027);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__18225){
var p__18027 = cljs.core.seq(arglist__18225);
return re_com$typeahead$typeahead_render__delegate(p__18027);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq17971){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17971));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__15374__auto___18226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15375__auto__ = (function (){var switch__15210__auto__ = (function (state_18163){
var state_val_18164 = (state_18163[(1)]);
if((state_val_18164 === (7))){
var inst_18106 = (state_18163[(2)]);
var state_18163__$1 = state_18163;
var statearr_18177_18227 = state_18163__$1;
(statearr_18177_18227[(2)] = inst_18106);

(statearr_18177_18227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (1))){
var inst_18101 = null;
var state_18163__$1 = (function (){var statearr_18178 = state_18163;
(statearr_18178[(7)] = inst_18101);

return statearr_18178;
})();
var statearr_18179_18228 = state_18163__$1;
(statearr_18179_18228[(2)] = null);

(statearr_18179_18228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (4))){
var state_18163__$1 = state_18163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18163__$1,(7),in$);
} else {
if((state_val_18164 === (15))){
var inst_18148 = (state_18163[(2)]);
var state_18163__$1 = (function (){var statearr_18180 = state_18163;
(statearr_18180[(8)] = inst_18148);

return statearr_18180;
})();
var statearr_18181_18229 = state_18163__$1;
(statearr_18181_18229[(2)] = null);

(statearr_18181_18229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (13))){
var inst_18134 = (state_18163[(9)]);
var inst_18150 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18134,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_18163__$1 = state_18163;
if(inst_18150){
var statearr_18182_18230 = state_18163__$1;
(statearr_18182_18230[(1)] = (16));

} else {
var statearr_18183_18231 = state_18163__$1;
(statearr_18183_18231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (6))){
var inst_18118 = (state_18163[(10)]);
var inst_18110 = (state_18163[(11)]);
var inst_18109 = (state_18163[(2)]);
var inst_18110__$1 = cljs.core.async.timeout(ms);
var inst_18118__$1 = in$;
var inst_18128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18129 = [inst_18118__$1,inst_18110__$1];
var inst_18130 = (new cljs.core.PersistentVector(null,2,(5),inst_18128,inst_18129,null));
var state_18163__$1 = (function (){var statearr_18184 = state_18163;
(statearr_18184[(12)] = inst_18109);

(statearr_18184[(11)] = inst_18110__$1);

(statearr_18184[(10)] = inst_18118__$1);

return statearr_18184;
})();
return cljs.core.async.ioc_alts_BANG_(state_18163__$1,(8),inst_18130);
} else {
if((state_val_18164 === (17))){
var state_18163__$1 = state_18163;
var statearr_18185_18232 = state_18163__$1;
(statearr_18185_18232[(2)] = null);

(statearr_18185_18232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (3))){
var inst_18161 = (state_18163[(2)]);
var state_18163__$1 = state_18163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18163__$1,inst_18161);
} else {
if((state_val_18164 === (12))){
var inst_18109 = (state_18163[(12)]);
var state_18163__$1 = state_18163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18163__$1,(15),out,inst_18109);
} else {
if((state_val_18164 === (2))){
var inst_18101 = (state_18163[(7)]);
var inst_18103 = (inst_18101 == null);
var state_18163__$1 = state_18163;
if(cljs.core.truth_(inst_18103)){
var statearr_18186_18233 = state_18163__$1;
(statearr_18186_18233[(1)] = (4));

} else {
var statearr_18187_18234 = state_18163__$1;
(statearr_18187_18234[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (11))){
var inst_18158 = (state_18163[(2)]);
var inst_18101 = inst_18158;
var state_18163__$1 = (function (){var statearr_18188 = state_18163;
(statearr_18188[(7)] = inst_18101);

return statearr_18188;
})();
var statearr_18189_18235 = state_18163__$1;
(statearr_18189_18235[(2)] = null);

(statearr_18189_18235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (9))){
var inst_18132 = (state_18163[(13)]);
var inst_18142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18132,(0),null);
var inst_18143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18132,(1),null);
var state_18163__$1 = (function (){var statearr_18190 = state_18163;
(statearr_18190[(14)] = inst_18143);

return statearr_18190;
})();
var statearr_18191_18236 = state_18163__$1;
(statearr_18191_18236[(2)] = inst_18142);

(statearr_18191_18236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (5))){
var inst_18101 = (state_18163[(7)]);
var state_18163__$1 = state_18163;
var statearr_18192_18237 = state_18163__$1;
(statearr_18192_18237[(2)] = inst_18101);

(statearr_18192_18237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (14))){
var inst_18156 = (state_18163[(2)]);
var state_18163__$1 = state_18163;
var statearr_18194_18238 = state_18163__$1;
(statearr_18194_18238[(2)] = inst_18156);

(statearr_18194_18238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (16))){
var inst_18133 = (state_18163[(15)]);
var state_18163__$1 = state_18163;
var statearr_18195_18239 = state_18163__$1;
(statearr_18195_18239[(2)] = inst_18133);

(statearr_18195_18239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (10))){
var inst_18134 = (state_18163[(9)]);
var inst_18110 = (state_18163[(11)]);
var inst_18145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18134,inst_18110);
var state_18163__$1 = state_18163;
if(inst_18145){
var statearr_18196_18240 = state_18163__$1;
(statearr_18196_18240[(1)] = (12));

} else {
var statearr_18198_18241 = state_18163__$1;
(statearr_18198_18241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (18))){
var inst_18154 = (state_18163[(2)]);
var state_18163__$1 = state_18163;
var statearr_18199_18242 = state_18163__$1;
(statearr_18199_18242[(2)] = inst_18154);

(statearr_18199_18242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18164 === (8))){
var inst_18132 = (state_18163[(13)]);
var inst_18134 = (state_18163[(9)]);
var inst_18118 = (state_18163[(10)]);
var inst_18132__$1 = (state_18163[(2)]);
var inst_18133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18132__$1,(0),null);
var inst_18134__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18132__$1,(1),null);
var inst_18137 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18134__$1,inst_18118);
var state_18163__$1 = (function (){var statearr_18200 = state_18163;
(statearr_18200[(13)] = inst_18132__$1);

(statearr_18200[(15)] = inst_18133);

(statearr_18200[(9)] = inst_18134__$1);

return statearr_18200;
})();
if(inst_18137){
var statearr_18201_18243 = state_18163__$1;
(statearr_18201_18243[(1)] = (9));

} else {
var statearr_18202_18244 = state_18163__$1;
(statearr_18202_18244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__15211__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__15211__auto____0 = (function (){
var statearr_18204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18204[(0)] = re_com$typeahead$debounce_$_state_machine__15211__auto__);

(statearr_18204[(1)] = (1));

return statearr_18204;
});
var re_com$typeahead$debounce_$_state_machine__15211__auto____1 = (function (state_18163){
while(true){
var ret_value__15212__auto__ = (function (){try{while(true){
var result__15213__auto__ = switch__15210__auto__(state_18163);
if(cljs.core.keyword_identical_QMARK_(result__15213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15213__auto__;
}
break;
}
}catch (e18205){var ex__15214__auto__ = e18205;
var statearr_18206_18245 = state_18163;
(statearr_18206_18245[(2)] = ex__15214__auto__);


if(cljs.core.seq((state_18163[(4)]))){
var statearr_18207_18246 = state_18163;
(statearr_18207_18246[(1)] = cljs.core.first((state_18163[(4)])));

} else {
throw ex__15214__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18247 = state_18163;
state_18163 = G__18247;
continue;
} else {
return ret_value__15212__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__15211__auto__ = function(state_18163){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__15211__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__15211__auto____1.call(this,state_18163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__15211__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__15211__auto____0;
re_com$typeahead$debounce_$_state_machine__15211__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__15211__auto____1;
return re_com$typeahead$debounce_$_state_machine__15211__auto__;
})()
})();
var state__15376__auto__ = (function (){var statearr_18208 = f__15375__auto__();
(statearr_18208[(6)] = c__15374__auto___18226);

return statearr_18208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15376__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
