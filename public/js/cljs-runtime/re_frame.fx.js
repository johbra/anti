goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16746 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16747 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16747);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___16861 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___16861)){
var new_db_16862 = temp__5823__auto___16861;
var fexpr__16750_16863 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16750_16863.cljs$core$IFn$_invoke$arity$1 ? fexpr__16750_16863.cljs$core$IFn$_invoke$arity$1(new_db_16862) : fexpr__16750_16863.call(null,new_db_16862));
} else {
}

var seq__16751 = cljs.core.seq(effects_without_db);
var chunk__16752 = null;
var count__16753 = (0);
var i__16754 = (0);
while(true){
if((i__16754 < count__16753)){
var vec__16767 = chunk__16752.cljs$core$IIndexed$_nth$arity$2(null,i__16754);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16767,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16767,(1),null);
var temp__5821__auto___16864 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___16864)){
var effect_fn_16865 = temp__5821__auto___16864;
(effect_fn_16865.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16865.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16865.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__16866 = seq__16751;
var G__16867 = chunk__16752;
var G__16868 = count__16753;
var G__16869 = (i__16754 + (1));
seq__16751 = G__16866;
chunk__16752 = G__16867;
count__16753 = G__16868;
i__16754 = G__16869;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16751);
if(temp__5823__auto__){
var seq__16751__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16751__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16751__$1);
var G__16870 = cljs.core.chunk_rest(seq__16751__$1);
var G__16871 = c__5673__auto__;
var G__16872 = cljs.core.count(c__5673__auto__);
var G__16873 = (0);
seq__16751 = G__16870;
chunk__16752 = G__16871;
count__16753 = G__16872;
i__16754 = G__16873;
continue;
} else {
var vec__16771 = cljs.core.first(seq__16751__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16771,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16771,(1),null);
var temp__5821__auto___16874 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___16874)){
var effect_fn_16875 = temp__5821__auto___16874;
(effect_fn_16875.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16875.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16875.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__16876 = cljs.core.next(seq__16751__$1);
var G__16877 = null;
var G__16878 = (0);
var G__16879 = (0);
seq__16751 = G__16876;
chunk__16752 = G__16877;
count__16753 = G__16878;
i__16754 = G__16879;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16181__auto___16880 = re_frame.interop.now();
var duration__16182__auto___16881 = (end__16181__auto___16880 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16182__auto___16881,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16181__auto___16880);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16746);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___16882 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___16882)){
var new_db_16883 = temp__5823__auto___16882;
var fexpr__16775_16884 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16775_16884.cljs$core$IFn$_invoke$arity$1 ? fexpr__16775_16884.cljs$core$IFn$_invoke$arity$1(new_db_16883) : fexpr__16775_16884.call(null,new_db_16883));
} else {
}

var seq__16778 = cljs.core.seq(effects_without_db);
var chunk__16779 = null;
var count__16780 = (0);
var i__16781 = (0);
while(true){
if((i__16781 < count__16780)){
var vec__16791 = chunk__16779.cljs$core$IIndexed$_nth$arity$2(null,i__16781);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16791,(1),null);
var temp__5821__auto___16885 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___16885)){
var effect_fn_16886 = temp__5821__auto___16885;
(effect_fn_16886.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16886.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16886.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__16887 = seq__16778;
var G__16888 = chunk__16779;
var G__16889 = count__16780;
var G__16890 = (i__16781 + (1));
seq__16778 = G__16887;
chunk__16779 = G__16888;
count__16780 = G__16889;
i__16781 = G__16890;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16778);
if(temp__5823__auto__){
var seq__16778__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16778__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16778__$1);
var G__16891 = cljs.core.chunk_rest(seq__16778__$1);
var G__16892 = c__5673__auto__;
var G__16893 = cljs.core.count(c__5673__auto__);
var G__16894 = (0);
seq__16778 = G__16891;
chunk__16779 = G__16892;
count__16780 = G__16893;
i__16781 = G__16894;
continue;
} else {
var vec__16803 = cljs.core.first(seq__16778__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16803,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16803,(1),null);
var temp__5821__auto___16895 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___16895)){
var effect_fn_16896 = temp__5821__auto___16895;
(effect_fn_16896.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16896.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16896.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?(""+"You may be trying to return a coeffect map from an event-fx handler. "+"See https://day8.github.io/re-frame/use-cofx-as-fx/"):null)], 0));
}


var G__16897 = cljs.core.next(seq__16778__$1);
var G__16898 = null;
var G__16899 = (0);
var G__16900 = (0);
seq__16778 = G__16897;
chunk__16779 = G__16898;
count__16780 = G__16899;
i__16781 = G__16900;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__16813){
var map__16814 = p__16813;
var map__16814__$1 = cljs.core.__destructure_map(map__16814);
var effect = map__16814__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16814__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16814__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__16815 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16816 = null;
var count__16817 = (0);
var i__16818 = (0);
while(true){
if((i__16818 < count__16817)){
var effect = chunk__16816.cljs$core$IIndexed$_nth$arity$2(null,i__16818);
re_frame.fx.dispatch_later(effect);


var G__16901 = seq__16815;
var G__16902 = chunk__16816;
var G__16903 = count__16817;
var G__16904 = (i__16818 + (1));
seq__16815 = G__16901;
chunk__16816 = G__16902;
count__16817 = G__16903;
i__16818 = G__16904;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16815);
if(temp__5823__auto__){
var seq__16815__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16815__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16815__$1);
var G__16905 = cljs.core.chunk_rest(seq__16815__$1);
var G__16906 = c__5673__auto__;
var G__16907 = cljs.core.count(c__5673__auto__);
var G__16908 = (0);
seq__16815 = G__16905;
chunk__16816 = G__16906;
count__16817 = G__16907;
i__16818 = G__16908;
continue;
} else {
var effect = cljs.core.first(seq__16815__$1);
re_frame.fx.dispatch_later(effect);


var G__16909 = cljs.core.next(seq__16815__$1);
var G__16910 = null;
var G__16911 = (0);
var G__16912 = (0);
seq__16815 = G__16909;
chunk__16816 = G__16910;
count__16817 = G__16911;
i__16818 = G__16912;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16831 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16832 = null;
var count__16833 = (0);
var i__16834 = (0);
while(true){
if((i__16834 < count__16833)){
var vec__16841 = chunk__16832.cljs$core$IIndexed$_nth$arity$2(null,i__16834);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16841,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16841,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___16913 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___16913)){
var effect_fn_16914 = temp__5821__auto___16913;
(effect_fn_16914.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16914.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16914.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16915 = seq__16831;
var G__16916 = chunk__16832;
var G__16917 = count__16833;
var G__16918 = (i__16834 + (1));
seq__16831 = G__16915;
chunk__16832 = G__16916;
count__16833 = G__16917;
i__16834 = G__16918;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16831);
if(temp__5823__auto__){
var seq__16831__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16831__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16831__$1);
var G__16919 = cljs.core.chunk_rest(seq__16831__$1);
var G__16920 = c__5673__auto__;
var G__16921 = cljs.core.count(c__5673__auto__);
var G__16922 = (0);
seq__16831 = G__16919;
chunk__16832 = G__16920;
count__16833 = G__16921;
i__16834 = G__16922;
continue;
} else {
var vec__16848 = cljs.core.first(seq__16831__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16848,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16848,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___16923 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___16923)){
var effect_fn_16924 = temp__5821__auto___16923;
(effect_fn_16924.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16924.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16924.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16925 = cljs.core.next(seq__16831__$1);
var G__16926 = null;
var G__16927 = (0);
var G__16928 = (0);
seq__16831 = G__16925;
chunk__16832 = G__16926;
count__16833 = G__16927;
i__16834 = G__16928;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16851 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16852 = null;
var count__16853 = (0);
var i__16854 = (0);
while(true){
if((i__16854 < count__16853)){
var event = chunk__16852.cljs$core$IIndexed$_nth$arity$2(null,i__16854);
re_frame.router.dispatch(event);


var G__16929 = seq__16851;
var G__16930 = chunk__16852;
var G__16931 = count__16853;
var G__16932 = (i__16854 + (1));
seq__16851 = G__16929;
chunk__16852 = G__16930;
count__16853 = G__16931;
i__16854 = G__16932;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16851);
if(temp__5823__auto__){
var seq__16851__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16851__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16851__$1);
var G__16933 = cljs.core.chunk_rest(seq__16851__$1);
var G__16934 = c__5673__auto__;
var G__16935 = cljs.core.count(c__5673__auto__);
var G__16936 = (0);
seq__16851 = G__16933;
chunk__16852 = G__16934;
count__16853 = G__16935;
i__16854 = G__16936;
continue;
} else {
var event = cljs.core.first(seq__16851__$1);
re_frame.router.dispatch(event);


var G__16937 = cljs.core.next(seq__16851__$1);
var G__16938 = null;
var G__16939 = (0);
var G__16940 = (0);
seq__16851 = G__16937;
chunk__16852 = G__16938;
count__16853 = G__16939;
i__16854 = G__16940;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16855 = cljs.core.seq(value);
var chunk__16856 = null;
var count__16857 = (0);
var i__16858 = (0);
while(true){
if((i__16858 < count__16857)){
var event = chunk__16856.cljs$core$IIndexed$_nth$arity$2(null,i__16858);
clear_event(event);


var G__16941 = seq__16855;
var G__16942 = chunk__16856;
var G__16943 = count__16857;
var G__16944 = (i__16858 + (1));
seq__16855 = G__16941;
chunk__16856 = G__16942;
count__16857 = G__16943;
i__16858 = G__16944;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16855);
if(temp__5823__auto__){
var seq__16855__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16855__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16855__$1);
var G__16945 = cljs.core.chunk_rest(seq__16855__$1);
var G__16946 = c__5673__auto__;
var G__16947 = cljs.core.count(c__5673__auto__);
var G__16948 = (0);
seq__16855 = G__16945;
chunk__16856 = G__16946;
count__16857 = G__16947;
i__16858 = G__16948;
continue;
} else {
var event = cljs.core.first(seq__16855__$1);
clear_event(event);


var G__16949 = cljs.core.next(seq__16855__$1);
var G__16950 = null;
var G__16951 = (0);
var G__16952 = (0);
seq__16855 = G__16949;
chunk__16856 = G__16950;
count__16857 = G__16951;
i__16858 = G__16952;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16859 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16860 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16860);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16181__auto___16953 = re_frame.interop.now();
var duration__16182__auto___16954 = (end__16181__auto___16953 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16182__auto___16954,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16181__auto___16953);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16859);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
