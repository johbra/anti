goog.provide('anything.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_){
return cljs.core.reset_BANG_(re_frame.db.app_db,anything.db.default_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"product-change","product-change",1433662987),(function (db,p__16146){
var vec__16147 = p__16146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16147,(0),null);
var product = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16147,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16147,(2),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16147,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"invoice1","invoice1",1203720373),new cljs.core.Keyword(null,"items","items",1031954938),product,key], null),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"select-invoice","select-invoice",1574265685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16151){
var vec__16152 = p__16151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16152,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16152,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-address","selected-address",763318752),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16155){
var vec__16156 = p__16155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16156,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16156,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-address","selected-address",763318752).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16159){
var vec__16160 = p__16159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16160,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16160,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),null], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new_value);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16164){
var vec__16165 = p__16164;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16168){
var vec__16169 = p__16168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16169,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16169,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-product","selected-product",1323310240).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));

//# sourceMappingURL=anything.events.js.map
