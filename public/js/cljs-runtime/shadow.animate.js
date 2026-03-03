goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_23779 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_23779(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_23781 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_23781(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_23788 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_23788(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_23793 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_23793(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_23799 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_23799(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23143){
var vec__23144 = p__23143;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration)+"ms"+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5140__auto__ = delay;
if(cljs.core.truth_(and__5140__auto__)){
return (delay > (0));
} else {
return and__5140__auto__;
}
})())){
return (""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay)+"ms");
} else {
return null;
}
})()));
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_23804 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_23804(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_23806 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_23806(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_23810 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_23810(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_23811 = (function (animator){
var x__5498__auto__ = (((animator == null))?null:animator);
var m__5499__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5499__auto__.call(null,animator));
} else {
var m__5497__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5497__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_23811(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5741__auto__ = self__.items.length;
var i__18056__auto__ = (0);
while(true){
if((i__18056__auto__ < n__5741__auto__)){
var map__23299_23812 = (self__.items[i__18056__auto__]);
var map__23299_23813__$1 = cljs.core.__destructure_map(map__23299_23812);
var el_23814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23813__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_23815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23299_23813__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_23814,from_23815);

var G__23816 = (i__18056__auto__ + (1));
i__18056__auto__ = G__23816;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5741__auto__ = self__.items.length;
var i__18056__auto__ = (0);
while(true){
if((i__18056__auto__ < n__5741__auto__)){
var map__23301_23817 = (self__.items[i__18056__auto__]);
var map__23301_23818__$1 = cljs.core.__destructure_map(map__23301_23817);
var el_23819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301_23818__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_23820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301_23818__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_23821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23301_23818__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_23820["transition"] = transition_23821);

goog.style.setStyle(el_23819,to_23820);

var G__23822 = (i__18056__auto__ + (1));
i__18056__auto__ = G__23822;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5741__auto__ = self__.items.length;
var i__18056__auto__ = (0);
while(true){
if((i__18056__auto__ < n__5741__auto__)){
var map__23304_23824 = (self__.items[i__18056__auto__]);
var map__23304_23825__$1 = cljs.core.__destructure_map(map__23304_23824);
var el_23826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23304_23825__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_23827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23304_23825__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_23827["transition"] = null);

goog.style.setStyle(el_23826,toggles_23827);

var G__23828 = (i__18056__auto__ + (1));
i__18056__auto__ = G__23828;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k23316,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__23322 = k23316;
var G__23322__$1 = (((G__23322 instanceof cljs.core.Keyword))?G__23322.fqn:null);
switch (G__23322__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23316,else__5451__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__23323){
var vec__23324 = p__23323;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23315){
var self__ = this;
var G__23315__$1 = this;
return (new cljs.core.RecordIter((0),G__23315__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23317,other23318){
var self__ = this;
var this23317__$1 = this;
return (((!((other23318 == null)))) && ((((this23317__$1.constructor === other23318.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23317__$1.el,other23318.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23317__$1.from,other23318.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23317__$1.to,other23318.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23317__$1.toggles,other23318.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23317__$1.transition,other23318.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23317__$1.__extmap,other23318.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k23316){
var self__ = this;
var this__5455__auto____$1 = this;
var G__23466 = k23316;
var G__23466__$1 = (((G__23466 instanceof cljs.core.Keyword))?G__23466.fqn:null);
switch (G__23466__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23316);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__23315){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__23474 = cljs.core.keyword_identical_QMARK_;
var expr__23475 = k__5457__auto__;
if(cljs.core.truth_((pred__23474.cljs$core$IFn$_invoke$arity$2 ? pred__23474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__23475) : pred__23474.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__23475)))){
return (new shadow.animate.AnimationStep(G__23315,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23474.cljs$core$IFn$_invoke$arity$2 ? pred__23474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__23475) : pred__23474.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__23475)))){
return (new shadow.animate.AnimationStep(self__.el,G__23315,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23474.cljs$core$IFn$_invoke$arity$2 ? pred__23474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__23475) : pred__23474.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__23475)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__23315,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23474.cljs$core$IFn$_invoke$arity$2 ? pred__23474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__23475) : pred__23474.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__23475)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__23315,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23474.cljs$core$IFn$_invoke$arity$2 ? pred__23474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__23475) : pred__23474.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__23475)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__23315,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__23315),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__23315){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__23315,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__23319){
var extmap__5490__auto__ = (function (){var G__23481 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23319,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__23319)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23481);
} else {
return G__23481;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__23319),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__23319),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__23319),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__23319),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__23319),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$animate$setup_$_iter__23499(s__23500){
return (new cljs.core.LazySeq(null,(function (){
var s__23500__$1 = s__23500;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__23500__$1);
if(temp__5823__auto__){
var s__23500__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23500__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__23500__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__23502 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__23501 = (0);
while(true){
if((i__23501 < size__5627__auto__)){
var vec__23507 = cljs.core._nth(c__5626__auto__,i__23501);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23507,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23507,(1),null);
cljs.core.chunk_append(b__23502,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__23860 = (i__23501 + (1));
i__23501 = G__23860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23502),shadow$animate$setup_$_iter__23499(cljs.core.chunk_rest(s__23500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23502),null);
}
} else {
var vec__23515 = cljs.core.first(s__23500__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23515,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23515,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__23499(cljs.core.rest(s__23500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__18168__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_23529){
var state_val_23530 = (state_23529[(1)]);
if((state_val_23530 === (1))){
var inst_23523 = shadow.animate.get_duration(animator);
var inst_23524 = cljs.core.async.timeout(inst_23523);
var state_23529__$1 = state_23529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23529__$1,(2),inst_23524);
} else {
if((state_val_23530 === (2))){
var inst_23526 = (state_23529[(2)]);
var inst_23527 = shadow.animate.finish_BANG_(animator);
var state_23529__$1 = (function (){var statearr_23531 = state_23529;
(statearr_23531[(7)] = inst_23526);

(statearr_23531[(8)] = inst_23527);

return statearr_23531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23529__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__17905__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__17905__auto____0 = (function (){
var statearr_23532 = [null,null,null,null,null,null,null,null,null];
(statearr_23532[(0)] = shadow$animate$continue_BANG__$_state_machine__17905__auto__);

(statearr_23532[(1)] = (1));

return statearr_23532;
});
var shadow$animate$continue_BANG__$_state_machine__17905__auto____1 = (function (state_23529){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_23529);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e23533){var ex__17908__auto__ = e23533;
var statearr_23534_23861 = state_23529;
(statearr_23534_23861[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_23529[(4)]))){
var statearr_23535_23862 = state_23529;
(statearr_23535_23862[(1)] = cljs.core.first((state_23529[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23863 = state_23529;
state_23529 = G__23863;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__17905__auto__ = function(state_23529){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__17905__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__17905__auto____1.call(this,state_23529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__17905__auto____0;
shadow$animate$continue_BANG__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__17905__auto____1;
return shadow$animate$continue_BANG__$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_23545 = f__18169__auto__();
(statearr_23545[(6)] = c__18168__auto__);

return statearr_23545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));

return c__18168__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23553 = (function (attr,from,to,timing,delay,meta23554){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta23554 = meta23554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23555,meta23554__$1){
var self__ = this;
var _23555__$1 = this;
return (new shadow.animate.t_shadow$animate23553(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta23554__$1));
}));

(shadow.animate.t_shadow$animate23553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23555){
var self__ = this;
var _23555__$1 = this;
return self__.meta23554;
}));

(shadow.animate.t_shadow$animate23553.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23553.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate23553.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate23553.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23553.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate23553.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate23553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta23554","meta23554",888596355,null)], null);
}));

(shadow.animate.t_shadow$animate23553.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23553.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23553");

(shadow.animate.t_shadow$animate23553.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23553");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23553.
 */
shadow.animate.__GT_t_shadow$animate23553 = (function shadow$animate$__GT_t_shadow$animate23553(attr,from,to,timing,delay,meta23554){
return (new shadow.animate.t_shadow$animate23553(attr,from,to,timing,delay,meta23554));
});


/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__23552 = arguments.length;
switch (G__23552) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
return (new shadow.animate.t_shadow$animate23553(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23559 = (function (attr,from,to,meta23560){
this.attr = attr;
this.from = from;
this.to = to;
this.meta23560 = meta23560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23561,meta23560__$1){
var self__ = this;
var _23561__$1 = this;
return (new shadow.animate.t_shadow$animate23559(self__.attr,self__.from,self__.to,meta23560__$1));
}));

(shadow.animate.t_shadow$animate23559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23561){
var self__ = this;
var _23561__$1 = this;
return self__.meta23560;
}));

(shadow.animate.t_shadow$animate23559.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23559.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23559.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate23559.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate23559.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23559.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta23560","meta23560",-511101670,null)], null);
}));

(shadow.animate.t_shadow$animate23559.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23559.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23559");

(shadow.animate.t_shadow$animate23559.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23559");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23559.
 */
shadow.animate.__GT_t_shadow$animate23559 = (function shadow$animate$__GT_t_shadow$animate23559(attr,from,to,meta23560){
return (new shadow.animate.t_shadow$animate23559(attr,from,to,meta23560));
});


shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
return (new shadow.animate.t_shadow$animate23559(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23570 = (function (attrs,meta23571){
this.attrs = attrs;
this.meta23571 = meta23571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23572,meta23571__$1){
var self__ = this;
var _23572__$1 = this;
return (new shadow.animate.t_shadow$animate23570(self__.attrs,meta23571__$1));
}));

(shadow.animate.t_shadow$animate23570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23572){
var self__ = this;
var _23572__$1 = this;
return self__.meta23571;
}));

(shadow.animate.t_shadow$animate23570.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23570.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23570.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate23570.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23570.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23570.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23571","meta23571",643199602,null)], null);
}));

(shadow.animate.t_shadow$animate23570.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23570.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23570");

(shadow.animate.t_shadow$animate23570.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23570");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23570.
 */
shadow.animate.__GT_t_shadow$animate23570 = (function shadow$animate$__GT_t_shadow$animate23570(attrs,meta23571){
return (new shadow.animate.t_shadow$animate23570(attrs,meta23571));
});


/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__23569 = arguments.length;
switch (G__23569) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
return (new shadow.animate.t_shadow$animate23570(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23574 = (function (attr,meta23575){
this.attr = attr;
this.meta23575 = meta23575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23576,meta23575__$1){
var self__ = this;
var _23576__$1 = this;
return (new shadow.animate.t_shadow$animate23574(self__.attr,meta23575__$1));
}));

(shadow.animate.t_shadow$animate23574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23576){
var self__ = this;
var _23576__$1 = this;
return self__.meta23575;
}));

(shadow.animate.t_shadow$animate23574.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23574.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23574.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23574.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate23574.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23574.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta23575","meta23575",-355995486,null)], null);
}));

(shadow.animate.t_shadow$animate23574.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23574.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23574");

(shadow.animate.t_shadow$animate23574.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23574");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23574.
 */
shadow.animate.__GT_t_shadow$animate23574 = (function shadow$animate$__GT_t_shadow$animate23574(attr,meta23575){
return (new shadow.animate.t_shadow$animate23574(attr,meta23575));
});


/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
return (new shadow.animate.t_shadow$animate23574(attr,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23588 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta23589){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta23589 = meta23589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23590,meta23589__$1){
var self__ = this;
var _23590__$1 = this;
return (new shadow.animate.t_shadow$animate23588(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta23589__$1));
}));

(shadow.animate.t_shadow$animate23588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23590){
var self__ = this;
var _23590__$1 = this;
return self__.meta23589;
}));

(shadow.animate.t_shadow$animate23588.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23588.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate23588.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate23588.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate23588.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate23588.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate23588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta23589","meta23589",-1474820121,null)], null);
}));

(shadow.animate.t_shadow$animate23588.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23588.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23588");

(shadow.animate.t_shadow$animate23588.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23588");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23588.
 */
shadow.animate.__GT_t_shadow$animate23588 = (function shadow$animate$__GT_t_shadow$animate23588(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta23589){
return (new shadow.animate.t_shadow$animate23588(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta23589));
});



/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23603 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta23604){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta23604 = meta23604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23605,meta23604__$1){
var self__ = this;
var _23605__$1 = this;
return (new shadow.animate.t_shadow$animate23603(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta23604__$1));
}));

(shadow.animate.t_shadow$animate23603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23605){
var self__ = this;
var _23605__$1 = this;
return self__.meta23604;
}));

(shadow.animate.t_shadow$animate23603.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23603.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate23603.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate23603.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate23603.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate23603.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate23603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta23604","meta23604",-1791323138,null)], null);
}));

(shadow.animate.t_shadow$animate23603.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23603.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23603");

(shadow.animate.t_shadow$animate23603.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23603");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23603.
 */
shadow.animate.__GT_t_shadow$animate23603 = (function shadow$animate$__GT_t_shadow$animate23603(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta23604){
return (new shadow.animate.t_shadow$animate23603(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta23604));
});


shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23866 = arguments.length;
var i__5877__auto___23867 = (0);
while(true){
if((i__5877__auto___23867 < len__5876__auto___23866)){
args__5882__auto__.push((arguments[i__5877__auto___23867]));

var G__23868 = (i__5877__auto___23867 + (1));
i__5877__auto___23867 = G__23868;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5821__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var adef = temp__5821__auto__;
var G__23869 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__23870 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__23871 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__23872 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__23873 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__23874 = cljs.core.rest(transitions__$1);
to = G__23869;
from = G__23870;
toggles = G__23871;
timings = G__23872;
delays = G__23873;
transitions__$1 = G__23874;
continue;
} else {
return (new shadow.animate.t_shadow$animate23603(transitions__$1,to,from,toggles,timings,delays,temp__5821__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq23580){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23580));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__23621 = arguments.length;
switch (G__23621) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__23625 = arguments.length;
switch (G__23625) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix)+"-transform"));

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23629 = (function (from,to,timing,delay,meta23630){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta23630 = meta23630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23631,meta23630__$1){
var self__ = this;
var _23631__$1 = this;
return (new shadow.animate.t_shadow$animate23629(self__.from,self__.to,self__.timing,self__.delay,meta23630__$1));
}));

(shadow.animate.t_shadow$animate23629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23631){
var self__ = this;
var _23631__$1 = this;
return self__.meta23630;
}));

(shadow.animate.t_shadow$animate23629.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23629.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateY("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from)+")")], null);
}));

(shadow.animate.t_shadow$animate23629.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateY("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to)+")")], null);
}));

(shadow.animate.t_shadow$animate23629.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate23629.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23629.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate23629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta23630","meta23630",-1614731191,null)], null);
}));

(shadow.animate.t_shadow$animate23629.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23629.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23629");

(shadow.animate.t_shadow$animate23629.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23629");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23629.
 */
shadow.animate.__GT_t_shadow$animate23629 = (function shadow$animate$__GT_t_shadow$animate23629(from,to,timing,delay,meta23630){
return (new shadow.animate.t_shadow$animate23629(from,to,timing,delay,meta23630));
});


shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__23628 = arguments.length;
switch (G__23628) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate23629(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate23659 = (function (from,to,timing,delay,meta23660){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta23660 = meta23660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate23659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23661,meta23660__$1){
var self__ = this;
var _23661__$1 = this;
return (new shadow.animate.t_shadow$animate23659(self__.from,self__.to,self__.timing,self__.delay,meta23660__$1));
}));

(shadow.animate.t_shadow$animate23659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23661){
var self__ = this;
var _23661__$1 = this;
return self__.meta23660;
}));

(shadow.animate.t_shadow$animate23659.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate23659.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateX("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from)+")")], null);
}));

(shadow.animate.t_shadow$animate23659.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateX("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to)+")")], null);
}));

(shadow.animate.t_shadow$animate23659.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate23659.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate23659.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate23659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta23660","meta23660",-158040122,null)], null);
}));

(shadow.animate.t_shadow$animate23659.cljs$lang$type = true);

(shadow.animate.t_shadow$animate23659.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate23659");

(shadow.animate.t_shadow$animate23659.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.animate/t_shadow$animate23659");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate23659.
 */
shadow.animate.__GT_t_shadow$animate23659 = (function shadow$animate$__GT_t_shadow$animate23659(from,to,timing,delay,meta23660){
return (new shadow.animate.t_shadow$animate23659(from,to,timing,delay,meta23660));
});


shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__23651 = arguments.length;
switch (G__23651) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate23659(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
