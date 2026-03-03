goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__24059,p__24060){
var map__24061 = p__24059;
var map__24061__$1 = cljs.core.__destructure_map(map__24061);
var svc = map__24061__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24061__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24061__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24061__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24062 = p__24060;
var map__24062__$1 = cljs.core.__destructure_map(map__24062);
var msg = map__24062__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24062__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24062__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__24064,p__24065){
var map__24066 = p__24064;
var map__24066__$1 = cljs.core.__destructure_map(map__24066);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24066__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__24067 = p__24065;
var map__24067__$1 = cljs.core.__destructure_map(map__24067);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24067__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__24068,p__24069){
var map__24070 = p__24068;
var map__24070__$1 = cljs.core.__destructure_map(map__24070);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24070__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24070__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24071 = p__24069;
var map__24071__$1 = cljs.core.__destructure_map(map__24071);
var msg = map__24071__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24071__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__24072,tid){
var map__24073 = p__24072;
var map__24073__$1 = cljs.core.__destructure_map(map__24073);
var svc = map__24073__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24073__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__24079 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__24080 = null;
var count__24081 = (0);
var i__24082 = (0);
while(true){
if((i__24082 < count__24081)){
var vec__24093 = chunk__24080.cljs$core$IIndexed$_nth$arity$2(null,i__24082);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24093,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24093,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24110 = seq__24079;
var G__24111 = chunk__24080;
var G__24112 = count__24081;
var G__24113 = (i__24082 + (1));
seq__24079 = G__24110;
chunk__24080 = G__24111;
count__24081 = G__24112;
i__24082 = G__24113;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24079);
if(temp__5823__auto__){
var seq__24079__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24079__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__24079__$1);
var G__24114 = cljs.core.chunk_rest(seq__24079__$1);
var G__24115 = c__5673__auto__;
var G__24116 = cljs.core.count(c__5673__auto__);
var G__24117 = (0);
seq__24079 = G__24114;
chunk__24080 = G__24115;
count__24081 = G__24116;
i__24082 = G__24117;
continue;
} else {
var vec__24097 = cljs.core.first(seq__24079__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24097,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24097,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24118 = cljs.core.next(seq__24079__$1);
var G__24119 = null;
var G__24120 = (0);
var G__24121 = (0);
seq__24079 = G__24118;
chunk__24080 = G__24119;
count__24081 = G__24120;
i__24082 = G__24121;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__24075_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__24075_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__24076_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__24076_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__24077_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__24077_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__24078_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__24078_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__24102){
var map__24103 = p__24102;
var map__24103__$1 = cljs.core.__destructure_map(map__24103);
var svc = map__24103__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24103__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24103__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
