goog.provide('anything.db');
anything.db.default_db = (function (){var now = cljs_time.local.local_now();
var datum = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.day(now))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.month(now))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.year(now)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invoice1","invoice1",1203720373),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"date","date",-1463434462),datum,new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"invoice-street",new cljs.core.Keyword(null,"street-no","street-no",10791405),"4711",new cljs.core.Keyword(null,"city-name","city-name",882040997),"Bremen",new cljs.core.Keyword(null,"city-code","city-code",-237533935),"28"], null),new cljs.core.Keyword(null,"Sum","Sum",-1967804812),(0),new cljs.core.Keyword(null,"VAT","VAT",438520368),(0),new cljs.core.Keyword(null,"totals","totals",1978625999),(0),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"product1","product1",-220064415),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"Product1",new cljs.core.Keyword(null,"amount","amount",364489504),(5),new cljs.core.Keyword(null,"price","price",22129180),(3),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null),new cljs.core.Keyword(null,"product2","product2",673269300),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"Product2",new cljs.core.Keyword(null,"amount","amount",364489504),(3),new cljs.core.Keyword(null,"price","price",22129180),(6),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null)], null),new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"Jack",new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Cust",new cljs.core.Keyword(null,"company","company",-340475075),"JC",new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"customer-street",new cljs.core.Keyword(null,"street-no","street-no",10791405),"2",new cljs.core.Keyword(null,"city-name","city-name",882040997),"Hamburg",new cljs.core.Keyword(null,"city-code","city-code",-237533935),"20"], null)], null)], null),new cljs.core.Keyword(null,"invoice2","invoice2",-848561671),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),datum,new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city-name","city-name",882040997),"Elmshorn"], null),new cljs.core.Keyword(null,"customer","customer",1742966319),null], null)], null),new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),(0),new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),null,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),null,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),null], null);
})();
anything.db.product_flow = (function anything$db$product_flow(invoice_key,product_key){
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((function (){var G__16154 = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
return (invoice_key.cljs$core$IFn$_invoke$arity$1 ? invoice_key.cljs$core$IFn$_invoke$arity$1(G__16154) : invoice_key.call(null,G__16154));
})()))){
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(product_key)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938),product_key,new cljs.core.Keyword(null,"amount","amount",364489504)], null),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938),product_key,new cljs.core.Keyword(null,"price","price",22129180)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__16155){
var map__16156 = p__16155;
var map__16156__$1 = cljs.core.__destructure_map(map__16156);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16156__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16156__$1,new cljs.core.Keyword(null,"p","p",151049309));
return (a * p);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938),product_key,new cljs.core.Keyword(null,"total","total",1916810418)], null)], null));
} else {
return null;
}
});
anything.db.product_flows = (function anything$db$product_flows(){
var invoices = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
var invs = cljs.core.vec(cljs.core.keys(invoices));
var ips = (function (){var iter__5628__auto__ = (function anything$db$product_flows_$_iter__16157(s__16158){
return (new cljs.core.LazySeq(null,(function (){
var s__16158__$1 = s__16158;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16158__$1);
if(temp__5823__auto__){
var s__16158__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16158__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__16158__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__16160 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__16159 = (0);
while(true){
if((i__16159 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__16159);
cljs.core.chunk_append(b__16160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(invoices) : i.call(null,invoices)))))], null));

var G__16199 = (i__16159 + (1));
i__16159 = G__16199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16160),anything$db$product_flows_$_iter__16157(cljs.core.chunk_rest(s__16158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16160),null);
}
} else {
var i = cljs.core.first(s__16158__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(invoices) : i.call(null,invoices)))))], null),anything$db$product_flows_$_iter__16157(cljs.core.rest(s__16158__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(invs);
})();
var seq__16161 = cljs.core.seq(ips);
var chunk__16162 = null;
var count__16163 = (0);
var i__16164 = (0);
while(true){
if((i__16164 < count__16163)){
var x = chunk__16162.cljs$core$IIndexed$_nth$arity$2(null,i__16164);
var seq__16173_16205 = cljs.core.seq(cljs.core.second(x));
var chunk__16174_16209 = null;
var count__16175_16210 = (0);
var i__16176_16211 = (0);
while(true){
if((i__16176_16211 < count__16175_16210)){
var y_16212 = chunk__16174_16209.cljs$core$IIndexed$_nth$arity$2(null,i__16176_16211);
anything.db.product_flow(cljs.core.first(x),y_16212);


var G__16213 = seq__16173_16205;
var G__16214 = chunk__16174_16209;
var G__16215 = count__16175_16210;
var G__16216 = (i__16176_16211 + (1));
seq__16173_16205 = G__16213;
chunk__16174_16209 = G__16214;
count__16175_16210 = G__16215;
i__16176_16211 = G__16216;
continue;
} else {
var temp__5823__auto___16217 = cljs.core.seq(seq__16173_16205);
if(temp__5823__auto___16217){
var seq__16173_16219__$1 = temp__5823__auto___16217;
if(cljs.core.chunked_seq_QMARK_(seq__16173_16219__$1)){
var c__5673__auto___16223 = cljs.core.chunk_first(seq__16173_16219__$1);
var G__16224 = cljs.core.chunk_rest(seq__16173_16219__$1);
var G__16225 = c__5673__auto___16223;
var G__16226 = cljs.core.count(c__5673__auto___16223);
var G__16227 = (0);
seq__16173_16205 = G__16224;
chunk__16174_16209 = G__16225;
count__16175_16210 = G__16226;
i__16176_16211 = G__16227;
continue;
} else {
var y_16228 = cljs.core.first(seq__16173_16219__$1);
anything.db.product_flow(cljs.core.first(x),y_16228);


var G__16229 = cljs.core.next(seq__16173_16219__$1);
var G__16230 = null;
var G__16231 = (0);
var G__16232 = (0);
seq__16173_16205 = G__16229;
chunk__16174_16209 = G__16230;
count__16175_16210 = G__16231;
i__16176_16211 = G__16232;
continue;
}
} else {
}
}
break;
}


var G__16233 = seq__16161;
var G__16234 = chunk__16162;
var G__16235 = count__16163;
var G__16236 = (i__16164 + (1));
seq__16161 = G__16233;
chunk__16162 = G__16234;
count__16163 = G__16235;
i__16164 = G__16236;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16161);
if(temp__5823__auto__){
var seq__16161__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16161__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16161__$1);
var G__16241 = cljs.core.chunk_rest(seq__16161__$1);
var G__16242 = c__5673__auto__;
var G__16243 = cljs.core.count(c__5673__auto__);
var G__16244 = (0);
seq__16161 = G__16241;
chunk__16162 = G__16242;
count__16163 = G__16243;
i__16164 = G__16244;
continue;
} else {
var x = cljs.core.first(seq__16161__$1);
var seq__16177_16245 = cljs.core.seq(cljs.core.second(x));
var chunk__16178_16246 = null;
var count__16179_16247 = (0);
var i__16180_16248 = (0);
while(true){
if((i__16180_16248 < count__16179_16247)){
var y_16249 = chunk__16178_16246.cljs$core$IIndexed$_nth$arity$2(null,i__16180_16248);
anything.db.product_flow(cljs.core.first(x),y_16249);


var G__16250 = seq__16177_16245;
var G__16251 = chunk__16178_16246;
var G__16252 = count__16179_16247;
var G__16253 = (i__16180_16248 + (1));
seq__16177_16245 = G__16250;
chunk__16178_16246 = G__16251;
count__16179_16247 = G__16252;
i__16180_16248 = G__16253;
continue;
} else {
var temp__5823__auto___16254__$1 = cljs.core.seq(seq__16177_16245);
if(temp__5823__auto___16254__$1){
var seq__16177_16255__$1 = temp__5823__auto___16254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16177_16255__$1)){
var c__5673__auto___16256 = cljs.core.chunk_first(seq__16177_16255__$1);
var G__16257 = cljs.core.chunk_rest(seq__16177_16255__$1);
var G__16258 = c__5673__auto___16256;
var G__16259 = cljs.core.count(c__5673__auto___16256);
var G__16260 = (0);
seq__16177_16245 = G__16257;
chunk__16178_16246 = G__16258;
count__16179_16247 = G__16259;
i__16180_16248 = G__16260;
continue;
} else {
var y_16265 = cljs.core.first(seq__16177_16255__$1);
anything.db.product_flow(cljs.core.first(x),y_16265);


var G__16266 = cljs.core.next(seq__16177_16255__$1);
var G__16267 = null;
var G__16268 = (0);
var G__16269 = (0);
seq__16177_16245 = G__16266;
chunk__16178_16246 = G__16267;
count__16179_16247 = G__16268;
i__16180_16248 = G__16269;
continue;
}
} else {
}
}
break;
}


var G__16270 = cljs.core.next(seq__16161__$1);
var G__16271 = null;
var G__16272 = (0);
var G__16273 = (0);
seq__16161 = G__16270;
chunk__16162 = G__16271;
count__16163 = G__16272;
i__16164 = G__16273;
continue;
}
} else {
return null;
}
}
break;
}
});
anything.db.invoice_sum_flow = (function anything$db$invoice_sum_flow(invoice_key){
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((function (){var G__16181 = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
return (invoice_key.cljs$core$IFn$_invoke$arity$1 ? invoice_key.cljs$core$IFn$_invoke$arity$1(G__16181) : invoice_key.call(null,G__16181));
})()))){
var p_keys = cljs.core.vec(cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(anything.db.default_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938)], null))));
var flows = (function (){var iter__5628__auto__ = (function anything$db$invoice_sum_flow_$_iter__16182(s__16183){
return (new cljs.core.LazySeq(null,(function (){
var s__16183__$1 = s__16183;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16183__$1);
if(temp__5823__auto__){
var s__16183__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16183__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__16183__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__16185 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__16184 = (0);
while(true){
if((i__16184 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__16184);
cljs.core.chunk_append(b__16185,re_frame.alpha.flow_LT__(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p))))));

var G__16278 = (i__16184 + (1));
i__16184 = G__16278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16185),anything$db$invoice_sum_flow_$_iter__16182(cljs.core.chunk_rest(s__16183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16185),null);
}
} else {
var p = cljs.core.first(s__16183__$2);
return cljs.core.cons(re_frame.alpha.flow_LT__(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p))))),anything$db$invoice_sum_flow_$_iter__16182(cljs.core.rest(s__16183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(p_keys);
})();
var inputs = cljs.core.zipmap(p_keys,flows);
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-sum")),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),inputs,new cljs.core.Keyword(null,"output","output",-1105869043),(function (t){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.vals(t));
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"Sum","Sum",-1967804812)], null)], null));
} else {
return null;
}
});
anything.db.invoice_sum_flows = (function anything$db$invoice_sum_flows(){
var inv_keys = cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db)));
var seq__16186 = cljs.core.seq(inv_keys);
var chunk__16187 = null;
var count__16188 = (0);
var i__16189 = (0);
while(true){
if((i__16189 < count__16188)){
var i = chunk__16187.cljs$core$IIndexed$_nth$arity$2(null,i__16189);
anything.db.invoice_sum_flow(i);


var G__16279 = seq__16186;
var G__16280 = chunk__16187;
var G__16281 = count__16188;
var G__16282 = (i__16189 + (1));
seq__16186 = G__16279;
chunk__16187 = G__16280;
count__16188 = G__16281;
i__16189 = G__16282;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16186);
if(temp__5823__auto__){
var seq__16186__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16186__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16186__$1);
var G__16283 = cljs.core.chunk_rest(seq__16186__$1);
var G__16284 = c__5673__auto__;
var G__16285 = cljs.core.count(c__5673__auto__);
var G__16286 = (0);
seq__16186 = G__16283;
chunk__16187 = G__16284;
count__16188 = G__16285;
i__16189 = G__16286;
continue;
} else {
var i = cljs.core.first(seq__16186__$1);
anything.db.invoice_sum_flow(i);


var G__16287 = cljs.core.next(seq__16186__$1);
var G__16288 = null;
var G__16289 = (0);
var G__16290 = (0);
seq__16186 = G__16287;
chunk__16187 = G__16288;
count__16188 = G__16289;
i__16189 = G__16290;
continue;
}
} else {
return null;
}
}
break;
}
});
anything.db.invoice_field_flow = (function anything$db$invoice_field_flow(invoice_key,field,f){
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((function (){var G__16190 = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
return (invoice_key.cljs$core$IFn$_invoke$arity$1 ? invoice_key.cljs$core$IFn$_invoke$arity$1(G__16190) : invoice_key.call(null,G__16190));
})()))){
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(field)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sum","sum",136986814),re_frame.alpha.flow_LT__(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-sum")))], null),new cljs.core.Keyword(null,"output","output",-1105869043),f,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,field], null)], null));
} else {
return null;
}
});
anything.db.vat = (function anything$db$vat(p__16191){
var map__16192 = p__16191;
var map__16192__$1 = cljs.core.__destructure_map(map__16192);
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16192__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
return (0.19 * sum).toLocaleString("de-DE",[]);
});
anything.db.totals = (function anything$db$totals(p__16193){
var map__16194 = p__16193;
var map__16194__$1 = cljs.core.__destructure_map(map__16194);
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16194__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
return (1.19 * sum).toLocaleString("de-DE",[]);
});
anything.db.invoice_field_flows = (function anything$db$invoice_field_flows(field,f){
var inv_keys = cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db)));
var seq__16195 = cljs.core.seq(inv_keys);
var chunk__16196 = null;
var count__16197 = (0);
var i__16198 = (0);
while(true){
if((i__16198 < count__16197)){
var i = chunk__16196.cljs$core$IIndexed$_nth$arity$2(null,i__16198);
anything.db.invoice_field_flow(i,field,f);


var G__16291 = seq__16195;
var G__16292 = chunk__16196;
var G__16293 = count__16197;
var G__16294 = (i__16198 + (1));
seq__16195 = G__16291;
chunk__16196 = G__16292;
count__16197 = G__16293;
i__16198 = G__16294;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16195);
if(temp__5823__auto__){
var seq__16195__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16195__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16195__$1);
var G__16295 = cljs.core.chunk_rest(seq__16195__$1);
var G__16296 = c__5673__auto__;
var G__16297 = cljs.core.count(c__5673__auto__);
var G__16298 = (0);
seq__16195 = G__16295;
chunk__16196 = G__16296;
count__16197 = G__16297;
i__16198 = G__16298;
continue;
} else {
var i = cljs.core.first(seq__16195__$1);
anything.db.invoice_field_flow(i,field,f);


var G__16299 = cljs.core.next(seq__16195__$1);
var G__16300 = null;
var G__16301 = (0);
var G__16302 = (0);
seq__16195 = G__16299;
chunk__16196 = G__16300;
count__16197 = G__16301;
i__16198 = G__16302;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=anything.db.js.map
