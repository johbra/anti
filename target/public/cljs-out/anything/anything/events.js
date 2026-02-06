// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('anything.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('anything.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,anything.db.default_db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"product-change","product-change",1433662987),(function (db,p__24420){
var vec__24421 = p__24420;
var _ = cljs.core.nth.call(null,vec__24421,(0),null);
var product = cljs.core.nth.call(null,vec__24421,(1),null);
var key = cljs.core.nth.call(null,vec__24421,(2),null);
var new_value = cljs.core.nth.call(null,vec__24421,(3),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"invoice1","invoice1",1203720373),new cljs.core.Keyword(null,"items","items",1031954938),product,key], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"invoice-sum","invoice-sum",-187368562),(function (db,p__24424){
var vec__24425 = p__24424;
var _ = cljs.core.nth.call(null,vec__24425,(0),null);
var key = cljs.core.nth.call(null,vec__24425,(1),null);
var new_value = cljs.core.nth.call(null,vec__24425,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),key,new cljs.core.Keyword(null,"Sum","Sum",-1967804812)], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"invoice-vat","invoice-vat",699241494),(function (db,p__24428){
var vec__24429 = p__24428;
var _ = cljs.core.nth.call(null,vec__24429,(0),null);
var key = cljs.core.nth.call(null,vec__24429,(1),null);
var new_value = cljs.core.nth.call(null,vec__24429,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),key,new cljs.core.Keyword(null,"VAT","VAT",438520368)], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"invoice-totals","invoice-totals",-616240666),(function (db,p__24432){
var vec__24433 = p__24432;
var _ = cljs.core.nth.call(null,vec__24433,(0),null);
var key = cljs.core.nth.call(null,vec__24433,(1),null);
var new_value = cljs.core.nth.call(null,vec__24433,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),key,new cljs.core.Keyword(null,"totals","totals",1978625999)], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-invoice","select-invoice",1574265685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24436){
var vec__24437 = p__24436;
var _ = cljs.core.nth.call(null,vec__24437,(0),null);
var new_value = cljs.core.nth.call(null,vec__24437,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24440){
var vec__24441 = p__24440;
var _ = cljs.core.nth.call(null,vec__24441,(0),null);
var new_value = cljs.core.nth.call(null,vec__24441,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-address","selected-address",763318752).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24444){
var vec__24445 = p__24444;
var _ = cljs.core.nth.call(null,vec__24445,(0),null);
var new_value = cljs.core.nth.call(null,vec__24445,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),null,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),null);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new_value);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24448){
var vec__24449 = p__24448;
var _ = cljs.core.nth.call(null,vec__24449,(0),null);
var new_value = cljs.core.nth.call(null,vec__24449,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24452){
var vec__24453 = p__24452;
var _ = cljs.core.nth.call(null,vec__24453,(0),null);
var new_value = cljs.core.nth.call(null,vec__24453,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-product","selected-product",1323310240).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));

//# sourceMappingURL=events.js.map
