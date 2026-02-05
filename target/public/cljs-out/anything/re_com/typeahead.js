// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.throbber');
goog.require('re_com.input_text');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__23130){
var map__23131 = p__23130;
var map__23131__$1 = cljs.core.__destructure_map.call(null,map__23131);
var args = map__23131__$1;
var on_change = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__23132 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__5045__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__23132,external_model_value);
} else {
return G__23132;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__23133,event){
var map__23134 = p__23133;
var map__23134__$1 = cljs.core.__destructure_map.call(null,map__23134);
var state = map__23134__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__23134__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__23134__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__23134__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__23135 = event;
var G__23135__$1 = (((G__23135 instanceof cljs.core.Keyword))?G__23135.fqn:null);
switch (G__23135__$1) {
case "input-text-blurred":
var and__5043__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__5043__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__5043__auto__ = cljs.core.not.call(null,rigid_QMARK___$1);
if(and__5043__auto__){
var or__5045__auto__ = cljs.core.not.call(null,change_on_blur_QMARK___$1);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__5043__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__23137,event){
var map__23138 = p__23137;
var map__23138__$1 = cljs.core.__destructure_map.call(null,map__23138);
var state = map__23138__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__23138__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__23139 = event;
var G__23139__$1 = (((G__23139 instanceof cljs.core.Keyword))?G__23139.fqn:null);
switch (G__23139__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__23141,new_value){
var map__23142 = p__23141;
var map__23142__$1 = cljs.core.__destructure_map.call(null,map__23142);
var state = map__23142__$1;
var on_change = cljs.core.get.call(null,map__23142__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__23143,suggestion){
var map__23144 = p__23143;
var map__23144__$1 = cljs.core.__destructure_map.call(null,map__23144);
var state = map__23144__$1;
var suggestion_to_string = cljs.core.get.call(null,map__23144__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__23145 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__23145,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__23145;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__23146,index){
var map__23147 = p__23146;
var map__23147__$1 = cljs.core.__destructure_map.call(null,map__23147);
var state = map__23147__$1;
var suggestions = cljs.core.get.call(null,map__23147__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__23148 = state;
var G__23148__$1 = cljs.core.assoc.call(null,G__23148,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__23148__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__23148__$1,suggestion):G__23148__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__23148__$2,suggestion);
} else {
return G__23148__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__23149,index){
var map__23150 = p__23149;
var map__23150__$1 = cljs.core.__destructure_map.call(null,map__23150);
var state = map__23150__$1;
var suggestions = cljs.core.get.call(null,map__23150__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__23151){
var map__23152 = p__23151;
var map__23152__$1 = cljs.core.__destructure_map.call(null,map__23152);
var state = map__23152__$1;
var suggestion_active_index = cljs.core.get.call(null,map__23152__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__23153 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__23153,suggestion_active_index);
} else {
return G__23153;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__23154){
var map__23155 = p__23154;
var map__23155__$1 = cljs.core.__destructure_map.call(null,map__23155);
var state = map__23155__$1;
var suggestions = cljs.core.get.call(null,map__23155__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__23155__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__23156 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__23156,re_com.typeahead.wrap.call(null,((function (){var or__5045__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__23156;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__23157){
var map__23158 = p__23157;
var map__23158__$1 = cljs.core.__destructure_map.call(null,map__23158);
var state = map__23158__$1;
var suggestions = cljs.core.get.call(null,map__23158__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__23158__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__23159 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__23159,re_com.typeahead.wrap.call(null,((function (){var or__5045__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__23159;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__23160 = state;
var G__23160__$1 = re_com.typeahead.clear_suggestions.call(null,G__23160)
;
var G__23160__$2 = cljs.core.assoc.call(null,G__23160__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__23160__$2,null);
} else {
return G__23160__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__23161){
var map__23162 = p__23161;
var map__23162__$1 = cljs.core.__destructure_map.call(null,map__23162);
var state = map__23162__$1;
var input_text = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.call(null,map__23162__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__5043__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__5043__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,state,input_text);
} else {
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5823__auto__ = data_source.call(null,text,(function (p1__23163_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__23163_SHARP_);
}));
if(cljs.core.truth_(temp__5823__auto__)){
var return_value = temp__5823__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__21179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_23181){
var state_val_23182 = (state_23181[(1)]);
if((state_val_23182 === (1))){
var state_23181__$1 = state_23181;
var statearr_23183_23197 = state_23181__$1;
(statearr_23183_23197[(2)] = null);

(statearr_23183_23197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23182 === (2))){
var state_23181__$1 = state_23181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23181__$1,(4),c_search);
} else {
if((state_val_23182 === (3))){
var inst_23179 = (state_23181[(2)]);
var state_23181__$1 = state_23181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23181__$1,inst_23179);
} else {
if((state_val_23182 === (4))){
var inst_23166 = (state_23181[(7)]);
var inst_23166__$1 = (state_23181[(2)]);
var inst_23167 = cljs.core.deref.call(null,state_atom);
var inst_23168 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_23167);
var inst_23169 = cljs.core._EQ_.call(null,"",inst_23166__$1);
var state_23181__$1 = (function (){var statearr_23184 = state_23181;
(statearr_23184[(8)] = inst_23168);

(statearr_23184[(7)] = inst_23166__$1);

return statearr_23184;
})();
if(inst_23169){
var statearr_23185_23198 = state_23181__$1;
(statearr_23185_23198[(1)] = (5));

} else {
var statearr_23186_23199 = state_23181__$1;
(statearr_23186_23199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23182 === (5))){
var inst_23168 = (state_23181[(8)]);
var inst_23171 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_23172 = re_com.typeahead.search_data_source_BANG_.call(null,inst_23168,state_atom,"");
var state_23181__$1 = (function (){var statearr_23187 = state_23181;
(statearr_23187[(9)] = inst_23171);

return statearr_23187;
})();
var statearr_23188_23200 = state_23181__$1;
(statearr_23188_23200[(2)] = inst_23172);

(statearr_23188_23200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23182 === (6))){
var inst_23168 = (state_23181[(8)]);
var inst_23166 = (state_23181[(7)]);
var inst_23174 = re_com.typeahead.search_data_source_BANG_.call(null,inst_23168,state_atom,inst_23166);
var state_23181__$1 = state_23181;
var statearr_23189_23201 = state_23181__$1;
(statearr_23189_23201[(2)] = inst_23174);

(statearr_23189_23201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23182 === (7))){
var inst_23176 = (state_23181[(2)]);
var state_23181__$1 = (function (){var statearr_23190 = state_23181;
(statearr_23190[(10)] = inst_23176);

return statearr_23190;
})();
var statearr_23191_23202 = state_23181__$1;
(statearr_23191_23202[(2)] = null);

(statearr_23191_23202[(1)] = (2));


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
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto____0 = (function (){
var statearr_23192 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23192[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto__);

(statearr_23192[(1)] = (1));

return statearr_23192;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto____1 = (function (state_23181){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_23181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e23193){var ex__21109__auto__ = e23193;
var statearr_23194_23203 = state_23181;
(statearr_23194_23203[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_23181[(4)]))){
var statearr_23195_23204 = state_23181;
(statearr_23195_23204[(1)] = cljs.core.first.call(null,(state_23181[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23205 = state_23181;
state_23181 = G__23205;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto__ = function(state_23181){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto____1.call(this,state_23181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_23196 = f__21180__auto__.call(null);
(statearr_23196[(6)] = c__21179__auto__);

return statearr_23196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));

return c__21179__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__23207 = cljs.core.deref.call(null,state_atom);
var map__23207__$1 = cljs.core.__destructure_map.call(null,map__23207);
var state = map__23207__$1;
var input_text = cljs.core.get.call(null,map__23207__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__23207__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,(function (p1__23206_SHARP_){
var G__23208 = p1__23206_SHARP_;
var G__23208__$1 = cljs.core.assoc.call(null,G__23208,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__23208__$1,new_text);
} else {
return G__23208__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__23209 = cljs.core._EQ_;
var expr__23210 = event.which;
if(cljs.core.truth_(pred__23209.call(null,goog.events.KeyCodes.UP,expr__23210))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__23209.call(null,goog.events.KeyCodes.DOWN,expr__23210))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__23209.call(null,goog.events.KeyCodes.ENTER,expr__23210))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__23209.call(null,goog.events.KeyCodes.ESC,expr__23210))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__23209.call(null,goog.events.KeyCodes.TAB,expr__23210))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),null,new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),null,new cljs.core.Keyword(null,"throbber","throbber",-1896677161),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23230 = arguments.length;
var i__5770__auto___23231 = (0);
while(true){
if((i__5770__auto___23231 < len__5769__auto___23230)){
args__5775__auto__.push((arguments[i__5770__auto___23231]));

var G__23232 = (i__5770__auto___23231 + (1));
i__5770__auto___23231 = G__23232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__23214){
var map__23215 = p__23214;
var map__23215__$1 = cljs.core.__destructure_map.call(null,map__23215);
var args = map__23215__$1;
var or__5045__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var map__23216 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__23216__$1 = cljs.core.__destructure_map.call(null,map__23216);
var state = map__23216__$1;
var c_search = cljs.core.get.call(null,map__23216__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__23216__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__23217){
var map__23218 = p__23217;
var map__23218__$1 = cljs.core.__destructure_map.call(null,map__23218);
var args__$1 = map__23218__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var parts = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var src = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _rigid_QMARK_ = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var debug_as = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var status = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__23218__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5045__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var map__23219 = cljs.core.deref.call(null,state_atom);
var map__23219__$1 = cljs.core.__destructure_map.call(null,map__23219);
var state__$1 = map__23219__$1;
var suggestions = cljs.core.get.call(null,map__23219__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__23219__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__23219__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__23219__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__5045__auto____$2 = width;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5045__auto____$2 = debug_as;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null))),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),293], null)),new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__5045__auto____$2 = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),312], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),315], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),319], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),322], null)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-throbber ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"throbber","throbber",-1896677161),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join('')], null)], null):null),(function (){var iter__5523__auto__ = (function re_com$typeahead$typeahead_render_$_iter__23220(s__23221){
return (new cljs.core.LazySeq(null,(function (){
var s__23221__$1 = s__23221;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__23221__$1);
if(temp__5825__auto__){
var s__23221__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23221__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__23221__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__23223 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__23222 = (0);
while(true){
if((i__23222 < size__5522__auto__)){
var vec__23224 = cljs.core._nth.call(null,c__5521__auto__,i__23222);
var i = cljs.core.nth.call(null,vec__23224,(0),null);
var s = cljs.core.nth.call(null,vec__23224,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__23223,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),329], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__23222,selected_QMARK_,vec__23224,i,s,c__5521__auto__,size__5522__auto__,b__23223,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__23222,selected_QMARK_,vec__23224,i,s,c__5521__auto__,size__5522__auto__,b__23223,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__23222,selected_QMARK_,vec__23224,i,s,c__5521__auto__,size__5522__auto__,b__23223,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args){
return (function (p1__23212_SHARP_){
p1__23212_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__23222,selected_QMARK_,vec__23224,i,s,c__5521__auto__,size__5522__auto__,b__23223,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__23233 = (i__23222 + (1));
i__23222 = G__23233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23223),re_com$typeahead$typeahead_render_$_iter__23220.call(null,cljs.core.chunk_rest.call(null,s__23221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23223),null);
}
} else {
var vec__23227 = cljs.core.first.call(null,s__23221__$2);
var i = cljs.core.nth.call(null,vec__23227,(0),null);
var s = cljs.core.nth.call(null,vec__23227,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/tmp/anything-neu/target/public/cljs-out/anything/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),329], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__23227,i,s,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__23227,i,s,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__23227,i,s,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args){
return (function (p1__23212_SHARP_){
p1__23212_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__23227,i,s,s__23221__$2,temp__5825__auto__,map__23219,map__23219__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__5045__auto____$1,map__23218,map__23218__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__23216,map__23216__$1,state,c_search,c_input,state_atom,input_text_model,or__5045__auto__,map__23215,map__23215__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$typeahead_render_$_iter__23220.call(null,cljs.core.rest.call(null,s__23221__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__23217 = null;
if (arguments.length > 0) {
var G__23234__i = 0, G__23234__a = new Array(arguments.length -  0);
while (G__23234__i < G__23234__a.length) {G__23234__a[G__23234__i] = arguments[G__23234__i + 0]; ++G__23234__i;}
  p__23217 = new cljs.core.IndexedSeq(G__23234__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__23217);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__23235){
var p__23217 = cljs.core.seq(arglist__23235);
return re_com$typeahead$typeahead_render__delegate(p__23217);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq23213){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23213));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__21179__auto___23318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_23287){
var state_val_23288 = (state_23287[(1)]);
if((state_val_23288 === (7))){
var inst_23241 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
var statearr_23289_23319 = state_23287__$1;
(statearr_23289_23319[(2)] = inst_23241);

(statearr_23289_23319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (1))){
var inst_23236 = null;
var state_23287__$1 = (function (){var statearr_23290 = state_23287;
(statearr_23290[(7)] = inst_23236);

return statearr_23290;
})();
var statearr_23291_23320 = state_23287__$1;
(statearr_23291_23320[(2)] = null);

(statearr_23291_23320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (4))){
var state_23287__$1 = state_23287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23287__$1,(7),in$);
} else {
if((state_val_23288 === (15))){
var inst_23272 = (state_23287[(2)]);
var state_23287__$1 = (function (){var statearr_23292 = state_23287;
(statearr_23292[(8)] = inst_23272);

return statearr_23292;
})();
var statearr_23293_23321 = state_23287__$1;
(statearr_23293_23321[(2)] = null);

(statearr_23293_23321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (13))){
var inst_23260 = (state_23287[(9)]);
var inst_23274 = cljs.core._EQ_.call(null,inst_23260,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_23287__$1 = state_23287;
if(inst_23274){
var statearr_23294_23322 = state_23287__$1;
(statearr_23294_23322[(1)] = (16));

} else {
var statearr_23295_23323 = state_23287__$1;
(statearr_23295_23323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (6))){
var inst_23245 = (state_23287[(10)]);
var inst_23253 = (state_23287[(11)]);
var inst_23244 = (state_23287[(2)]);
var inst_23245__$1 = cljs.core.async.timeout.call(null,ms);
var inst_23253__$1 = in$;
var inst_23254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23255 = [inst_23253__$1,inst_23245__$1];
var inst_23256 = (new cljs.core.PersistentVector(null,2,(5),inst_23254,inst_23255,null));
var state_23287__$1 = (function (){var statearr_23296 = state_23287;
(statearr_23296[(12)] = inst_23244);

(statearr_23296[(10)] = inst_23245__$1);

(statearr_23296[(11)] = inst_23253__$1);

return statearr_23296;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23287__$1,(8),inst_23256);
} else {
if((state_val_23288 === (17))){
var state_23287__$1 = state_23287;
var statearr_23297_23324 = state_23287__$1;
(statearr_23297_23324[(2)] = null);

(statearr_23297_23324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (3))){
var inst_23285 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23287__$1,inst_23285);
} else {
if((state_val_23288 === (12))){
var inst_23244 = (state_23287[(12)]);
var state_23287__$1 = state_23287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23287__$1,(15),out,inst_23244);
} else {
if((state_val_23288 === (2))){
var inst_23236 = (state_23287[(7)]);
var inst_23238 = (inst_23236 == null);
var state_23287__$1 = state_23287;
if(cljs.core.truth_(inst_23238)){
var statearr_23298_23325 = state_23287__$1;
(statearr_23298_23325[(1)] = (4));

} else {
var statearr_23299_23326 = state_23287__$1;
(statearr_23299_23326[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (11))){
var inst_23282 = (state_23287[(2)]);
var inst_23236 = inst_23282;
var state_23287__$1 = (function (){var statearr_23300 = state_23287;
(statearr_23300[(7)] = inst_23236);

return statearr_23300;
})();
var statearr_23301_23327 = state_23287__$1;
(statearr_23301_23327[(2)] = null);

(statearr_23301_23327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (9))){
var inst_23258 = (state_23287[(13)]);
var inst_23266 = cljs.core.nth.call(null,inst_23258,(0),null);
var inst_23267 = cljs.core.nth.call(null,inst_23258,(1),null);
var state_23287__$1 = (function (){var statearr_23302 = state_23287;
(statearr_23302[(14)] = inst_23267);

return statearr_23302;
})();
var statearr_23303_23328 = state_23287__$1;
(statearr_23303_23328[(2)] = inst_23266);

(statearr_23303_23328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (5))){
var inst_23236 = (state_23287[(7)]);
var state_23287__$1 = state_23287;
var statearr_23304_23329 = state_23287__$1;
(statearr_23304_23329[(2)] = inst_23236);

(statearr_23304_23329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (14))){
var inst_23280 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
var statearr_23305_23330 = state_23287__$1;
(statearr_23305_23330[(2)] = inst_23280);

(statearr_23305_23330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (16))){
var inst_23259 = (state_23287[(15)]);
var state_23287__$1 = state_23287;
var statearr_23306_23331 = state_23287__$1;
(statearr_23306_23331[(2)] = inst_23259);

(statearr_23306_23331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (10))){
var inst_23260 = (state_23287[(9)]);
var inst_23245 = (state_23287[(10)]);
var inst_23269 = cljs.core._EQ_.call(null,inst_23260,inst_23245);
var state_23287__$1 = state_23287;
if(inst_23269){
var statearr_23307_23332 = state_23287__$1;
(statearr_23307_23332[(1)] = (12));

} else {
var statearr_23308_23333 = state_23287__$1;
(statearr_23308_23333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (18))){
var inst_23278 = (state_23287[(2)]);
var state_23287__$1 = state_23287;
var statearr_23309_23334 = state_23287__$1;
(statearr_23309_23334[(2)] = inst_23278);

(statearr_23309_23334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23288 === (8))){
var inst_23258 = (state_23287[(13)]);
var inst_23260 = (state_23287[(9)]);
var inst_23253 = (state_23287[(11)]);
var inst_23258__$1 = (state_23287[(2)]);
var inst_23259 = cljs.core.nth.call(null,inst_23258__$1,(0),null);
var inst_23260__$1 = cljs.core.nth.call(null,inst_23258__$1,(1),null);
var inst_23261 = cljs.core._EQ_.call(null,inst_23260__$1,inst_23253);
var state_23287__$1 = (function (){var statearr_23310 = state_23287;
(statearr_23310[(13)] = inst_23258__$1);

(statearr_23310[(15)] = inst_23259);

(statearr_23310[(9)] = inst_23260__$1);

return statearr_23310;
})();
if(inst_23261){
var statearr_23311_23335 = state_23287__$1;
(statearr_23311_23335[(1)] = (9));

} else {
var statearr_23312_23336 = state_23287__$1;
(statearr_23312_23336[(1)] = (10));

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
var re_com$typeahead$debounce_$_state_machine__21106__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__21106__auto____0 = (function (){
var statearr_23313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23313[(0)] = re_com$typeahead$debounce_$_state_machine__21106__auto__);

(statearr_23313[(1)] = (1));

return statearr_23313;
});
var re_com$typeahead$debounce_$_state_machine__21106__auto____1 = (function (state_23287){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_23287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e23314){var ex__21109__auto__ = e23314;
var statearr_23315_23337 = state_23287;
(statearr_23315_23337[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_23287[(4)]))){
var statearr_23316_23338 = state_23287;
(statearr_23316_23338[(1)] = cljs.core.first.call(null,(state_23287[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23339 = state_23287;
state_23287 = G__23339;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__21106__auto__ = function(state_23287){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__21106__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__21106__auto____1.call(this,state_23287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__21106__auto____0;
re_com$typeahead$debounce_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__21106__auto____1;
return re_com$typeahead$debounce_$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_23317 = f__21180__auto__.call(null);
(statearr_23317[(6)] = c__21179__auto___23318);

return statearr_23317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


return out;
});

//# sourceMappingURL=typeahead.js.map
