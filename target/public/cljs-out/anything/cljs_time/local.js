// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs_time.local');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('goog.date.DateTime');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24180){
var vec__24181 = p__24180;
var k = cljs.core.nth.call(null,vec__24181,(0),null);
var f = cljs.core.nth.call(null,vec__24181,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",-483947944)))?cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(function (p1__24179_SHARP_){
return cljs_time.core.to_default_time_zone.call(null,p1__24179_SHARP_);
})):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now.call(null);
});

/**
 * @interface
 */
cljs_time.local.ILocalCoerce = function(){};

var cljs_time$local$ILocalCoerce$to_local_date_time$dyn_24184 = (function (obj){
var x__5393__auto__ = (((obj == null))?null:obj);
var m__5394__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,obj);
} else {
var m__5392__auto__ = (cljs_time.local.to_local_date_time["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalCoerce.to-local-date-time",obj);
}
}
});
/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
return cljs_time$local$ILocalCoerce$to_local_date_time$dyn_24184.call(null,obj);
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first.call(null,(function (){var iter__5523__auto__ = (function cljs_time$local$from_local_string_$_iter__24185(s__24186){
return (new cljs.core.LazySeq(null,(function (){
var s__24186__$1 = s__24186;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__24186__$1);
if(temp__5825__auto__){
var s__24186__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24186__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__24186__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__24188 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__24187 = (0);
while(true){
if((i__24187 < size__5522__auto__)){
var f = cljs.core._nth.call(null,c__5521__auto__,i__24187);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e24189){if((e24189 instanceof Error)){
var _ = e24189;
return null;
} else {
throw e24189;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__24188,d);

var G__24191 = (i__24187 + (1));
i__24187 = G__24191;
continue;
} else {
var G__24192 = (i__24187 + (1));
i__24187 = G__24192;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24188),cljs_time$local$from_local_string_$_iter__24185.call(null,cljs.core.chunk_rest.call(null,s__24186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24188),null);
}
} else {
var f = cljs.core.first.call(null,s__24186__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e24190){if((e24190 instanceof Error)){
var _ = e24190;
return null;
} else {
throw e24190;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$local$from_local_string_$_iter__24185.call(null,cljs.core.rest.call(null,s__24186__$2)));
} else {
var G__24193 = cljs.core.rest.call(null,s__24186__$2);
s__24186__$1 = G__24193;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.vals.call(null,cljs_time.local._STAR_local_formatters_STAR_));
})());
});
(cljs_time.local.ILocalCoerce["null"] = true);

(cljs_time.local.to_local_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,date__$1));
}));

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,date_time__$1);
}));

(cljs_time.local.ILocalCoerce["number"] = true);

(cljs_time.local.to_local_date_time["number"] = (function (long$){
return cljs_time.local.as_local_date_time_from_time_zone.call(null,long$);
}));

(cljs_time.local.ILocalCoerce["string"] = true);

(cljs_time.local.to_local_date_time["string"] = (function (string){
return cljs_time.local.from_local_string.call(null,string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__5825__auto__ = cljs_time.local.to_local_date_time.call(null,obj);
if(cljs.core.truth_(temp__5825__auto__)){
var dt = temp__5825__auto__;
var temp__5825__auto____$1 = format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_);
if(cljs.core.truth_(temp__5825__auto____$1)){
var fmt = temp__5825__auto____$1;
return cljs_time.format.unparse.call(null,fmt,dt);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=local.js.map
