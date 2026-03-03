goog.provide('anything.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_){
return cljs.core.reset_BANG_(re_frame.db.app_db,anything.db.default_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"product-change","product-change",1433662987),(function (db,p__16200){
var vec__16201 = p__16200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16201,(0),null);
var product = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16201,(1),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16201,(2),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16201,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"invoice1","invoice1",1203720373),new cljs.core.Keyword(null,"items","items",1031954938),product,key], null),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"select-invoice","select-invoice",1574265685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16204){
var vec__16206 = p__16204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),new_value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-address","selected-address",763318752),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16218){
var vec__16220 = p__16218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16220,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-address","selected-address",763318752).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16237){
var vec__16238 = p__16237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16238,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),null], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new_value);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16261){
var vec__16262 = p__16261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16262,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16262,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__16274){
var vec__16275 = p__16274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16275,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16275,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-product","selected-product",1323310240).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));

//# sourceMappingURL=anything.events.js.map
