// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('anything.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('re_com.core');
goog.require('cljs_time.local');
goog.require('cljs_time.core');
anything.core.heute = (function anything$core$heute(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.day.call(null,cljs_time.local.local_now.call(null))),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.month.call(null,cljs_time.local.local_now.call(null))),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.year.call(null,cljs_time.local.local_now.call(null)))].join('');
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
var db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invoice1","invoice1",1203720373),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"date","date",-1463434462),anything.core.heute.call(null),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"invoice-street",new cljs.core.Keyword(null,"street-no","street-no",10791405),"4711",new cljs.core.Keyword(null,"city-name","city-name",882040997),"Bremen",new cljs.core.Keyword(null,"city-code","city-code",-237533935),"28"], null),new cljs.core.Keyword(null,"Sum","Sum",-1967804812),(0),new cljs.core.Keyword(null,"VAT","VAT",438520368),(0),new cljs.core.Keyword(null,"totals","totals",1978625999),(0),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"product1","product1",-220064415),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"Product1",new cljs.core.Keyword(null,"amount","amount",364489504),(5),new cljs.core.Keyword(null,"price","price",22129180),(3),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null),new cljs.core.Keyword(null,"product2","product2",673269300),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"Product2",new cljs.core.Keyword(null,"amount","amount",364489504),(3),new cljs.core.Keyword(null,"price","price",22129180),(6),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null)], null),new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"Jack",new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Cust",new cljs.core.Keyword(null,"company","company",-340475075),"JC",new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"customer-street",new cljs.core.Keyword(null,"street-no","street-no",10791405),"2",new cljs.core.Keyword(null,"city-name","city-name",882040997),"Hamburg",new cljs.core.Keyword(null,"city-code","city-code",-237533935),"20"], null)], null)], null),new cljs.core.Keyword(null,"invoice2","invoice2",-848561671),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),anything.core.heute.call(null),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city-name","city-name",882040997),"Elmshorn"], null),new cljs.core.Keyword(null,"customer","customer",1742966319),null], null)], null),new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),(0),new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),null,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),null,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),null], null);
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"product-change","product-change",1433662987),(function (db,p__24416){
var vec__24417 = p__24416;
var _ = cljs.core.nth.call(null,vec__24417,(0),null);
var product = cljs.core.nth.call(null,vec__24417,(1),null);
var key = cljs.core.nth.call(null,vec__24417,(2),null);
var new_value = cljs.core.nth.call(null,vec__24417,(3),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.Keyword(null,"invoice1","invoice1",1203720373),new cljs.core.Keyword(null,"items","items",1031954938),product,key], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"invoice-sum","invoice-sum",-187368562),(function (db,p__24420){
var vec__24421 = p__24420;
var _ = cljs.core.nth.call(null,vec__24421,(0),null);
var key = cljs.core.nth.call(null,vec__24421,(1),null);
var new_value = cljs.core.nth.call(null,vec__24421,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),key,new cljs.core.Keyword(null,"Sum","Sum",-1967804812)], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"invoice-vat","invoice-vat",699241494),(function (db,p__24424){
var vec__24425 = p__24424;
var _ = cljs.core.nth.call(null,vec__24425,(0),null);
var key = cljs.core.nth.call(null,vec__24425,(1),null);
var new_value = cljs.core.nth.call(null,vec__24425,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),key,new cljs.core.Keyword(null,"VAT","VAT",438520368)], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"invoice-totals","invoice-totals",-616240666),(function (db,p__24428){
var vec__24429 = p__24428;
var _ = cljs.core.nth.call(null,vec__24429,(0),null);
var key = cljs.core.nth.call(null,vec__24429,(1),null);
var new_value = cljs.core.nth.call(null,vec__24429,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),key,new cljs.core.Keyword(null,"totals","totals",1978625999)], null),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-invoice","select-invoice",1574265685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24432){
var vec__24433 = p__24432;
var _ = cljs.core.nth.call(null,vec__24433,(0),null);
var new_value = cljs.core.nth.call(null,vec__24433,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24436){
var vec__24437 = p__24436;
var _ = cljs.core.nth.call(null,vec__24437,(0),null);
var new_value = cljs.core.nth.call(null,vec__24437,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-address","selected-address",763318752).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24440){
var vec__24441 = p__24440;
var _ = cljs.core.nth.call(null,vec__24441,(0),null);
var new_value = cljs.core.nth.call(null,vec__24441,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),null,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),null);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new_value);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24444){
var vec__24445 = p__24444;
var _ = cljs.core.nth.call(null,vec__24445,(0),null);
var new_value = cljs.core.nth.call(null,vec__24445,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__24448){
var vec__24449 = p__24448;
var _ = cljs.core.nth.call(null,vec__24449,(0),null);
var new_value = cljs.core.nth.call(null,vec__24449,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),(cljs.core.truth_(new cljs.core.Keyword(null,"selected-product","selected-product",1323310240).cljs$core$IFn$_invoke$arity$1(db))?null:new_value));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"products","products",1876973544),(function (db,_){
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"invoice1","invoice1",1203720373).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"invoices","invoices",1154128192),(function (db,_){
return new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),(function (db,_){
return new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),(function (db,_){
return new cljs.core.Keyword(null,"selected-product","selected-product",1323310240).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),(function (db,_){
return new cljs.core.Keyword(null,"selected-address","selected-address",763318752).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),(function (db,_){
return new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cust-adr","selected-cust-adr",157759467),(function (db,_){
return new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326).cljs$core$IFn$_invoke$arity$1(db);
}));
anything.core.product = (function anything$core$product(){
var sp = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240)], null)));
var p = sp.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"products","products",1876973544)], null))));
var ttl = (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p) * new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(p));
var gettext = (function (e){
return parseInt(e);
});
var emit_amount = (function (p1__24452_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product-change","product-change",1433662987),sp,new cljs.core.Keyword(null,"amount","amount",364489504),gettext.call(null,p1__24452_SHARP_)], null));
});
var emit_price = (function (p1__24453_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product-change","product-change",1433662987),sp,new cljs.core.Keyword(null,"price","price",22129180),gettext.call(null,p1__24453_SHARP_)], null));
});
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product-change","product-change",1433662987),sp,new cljs.core.Keyword(null,"total","total",1916810418),ttl], null));

if(cljs.core.truth_(sp)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Description: "], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(p)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Amount: "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),emit_amount,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),/^[-+]?[0-9]*$/,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"beige"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Price: "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),emit_price,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),/^[-+]?[0-9]*$/,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"beige"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Total: "], null),ttl], null)], null)], null)], null);
} else {
return null;
}
});
anything.core.address = (function anything$core$address(adr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street: "], null),new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street-no: "], null),new cljs.core.Keyword(null,"street-no","street-no",10791405).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-name: "], null),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-code: "], null),new cljs.core.Keyword(null,"city-code","city-code",-237533935).cljs$core$IFn$_invoke$arity$1(adr)], null)], null)], null)], null);
});
anything.core.customer = (function anything$core$customer(cust){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"first-name: "], null),new cljs.core.Keyword(null,"first-name","first-name",-1559982131).cljs$core$IFn$_invoke$arity$1(cust)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"last-name: "], null),new cljs.core.Keyword(null,"last-name","last-name",-1695738974).cljs$core$IFn$_invoke$arity$1(cust)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"company: "], null),new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(cust)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"address. "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cust)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cust)], null));
})], null)], null)], null)], null)], null);
});
anything.core.customer_address = (function anything$core$customer_address(adr){
cljs.core.println.call(null,adr);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street: "], null),new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street-no: "], null),new cljs.core.Keyword(null,"street-no","street-no",10791405).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-name: "], null),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-code: "], null),new cljs.core.Keyword(null,"city-code","city-code",-237533935).cljs$core$IFn$_invoke$arity$1(adr)], null)], null)], null)], null);
});
anything.core.invoice = (function anything$core$invoice(inv){
var prodcts = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"products","products",1876973544)], null)));
var invoice_key = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426)], null)));
var sum = cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (p1__24454_SHARP_){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__24454_SHARP_) * new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(p1__24454_SHARP_));
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inv))));
var _ = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoice-sum","invoice-sum",-187368562),invoice_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sum)], null));
var ___$1 = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoice-vat","invoice-vat",699241494),invoice_key,(0.19 * sum).toLocaleString("de-DE",[])], null));
var ___$2 = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoice-totals","invoice-totals",-616240666),invoice_key,(1.19 * sum).toLocaleString("de-DE",[])], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"date:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(inv)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"address:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(inv)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-address","selected-address",763318752),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(inv)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sum:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Sum","Sum",-1967804812).cljs$core$IFn$_invoke$arity$1(inv))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"VAT:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"VAT","VAT",438520368).cljs$core$IFn$_invoke$arity$1(inv))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"totals:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"totals","totals",1978625999).cljs$core$IFn$_invoke$arity$1(inv))], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inv))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"items:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,(function (){var iter__5523__auto__ = (function anything$core$invoice_$_iter__24455(s__24456){
return (new cljs.core.LazySeq(null,(function (){
var s__24456__$1 = s__24456;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__24456__$1);
if(temp__5825__auto__){
var s__24456__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24456__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__24456__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__24458 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__24457 = (0);
while(true){
if((i__24457 < size__5522__auto__)){
var vec__24459 = cljs.core._nth.call(null,c__5521__auto__,i__24457);
var k = cljs.core.nth.call(null,vec__24459,(0),null);
var v = cljs.core.nth.call(null,vec__24459,(1),null);
cljs.core.chunk_append.call(null,b__24458,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),k,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24457,vec__24459,k,v,c__5521__auto__,size__5522__auto__,b__24458,s__24456__$2,temp__5825__auto__,prodcts,invoice_key,sum,_,___$1,___$2){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),k], null));
});})(i__24457,vec__24459,k,v,c__5521__auto__,size__5522__auto__,b__24458,s__24456__$2,temp__5825__auto__,prodcts,invoice_key,sum,_,___$1,___$2))
], null));

var G__24465 = (i__24457 + (1));
i__24457 = G__24465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24458),anything$core$invoice_$_iter__24455.call(null,cljs.core.chunk_rest.call(null,s__24456__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24458),null);
}
} else {
var vec__24462 = cljs.core.first.call(null,s__24456__$2);
var k = cljs.core.nth.call(null,vec__24462,(0),null);
var v = cljs.core.nth.call(null,vec__24462,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),k,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__24462,k,v,s__24456__$2,temp__5825__auto__,prodcts,invoice_key,sum,_,___$1,___$2){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),k], null));
});})(vec__24462,k,v,s__24456__$2,temp__5825__auto__,prodcts,invoice_key,sum,_,___$1,___$2))
], null),anything$core$invoice_$_iter__24455.call(null,cljs.core.rest.call(null,s__24456__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(inv));
})())], null)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(inv))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"customer:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first-name","first-name",-1559982131).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(inv)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last-name","last-name",-1695738974).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(inv)))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(inv)], null));
})], null)], null)], null):null)], null)], null);
});
anything.core.select_box = (function anything$core$select_box(lable,values,selected_value,callback_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),lable], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"AAAAAAAAA",new cljs.core.Keyword(null,"choices","choices",1385611597),(function (){var iter__5523__auto__ = (function anything$core$select_box_$_iter__24466(s__24467){
return (new cljs.core.LazySeq(null,(function (){
var s__24467__$1 = s__24467;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__24467__$1);
if(temp__5825__auto__){
var s__24467__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24467__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__24467__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__24469 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__24468 = (0);
while(true){
if((i__24468 < size__5522__auto__)){
var v = cljs.core._nth.call(null,c__5521__auto__,i__24468);
cljs.core.chunk_append.call(null,b__24469,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.Keyword(null,"label","label",1718410804),v], null));

var G__24470 = (i__24468 + (1));
i__24468 = G__24470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24469),anything$core$select_box_$_iter__24466.call(null,cljs.core.chunk_rest.call(null,s__24467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24469),null);
}
} else {
var v = cljs.core.first.call(null,s__24467__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.Keyword(null,"label","label",1718410804),v], null),anything$core$select_box_$_iter__24466.call(null,cljs.core.rest.call(null,s__24467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,values);
})(),new cljs.core.Keyword(null,"model","model",331153215),((cljs.core._EQ_.call(null,selected_value,(0)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),selected_value], null)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"?",new cljs.core.Keyword(null,"on-change","on-change",-732046149),callback_fn], null)], null)], null);
});
anything.core.ui = (function anything$core$ui(){
var invcs = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192)], null)));
var selctd_inv = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426)], null)));
var selctd_prod = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240)], null)));
var selctd_addr = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-address","selected-address",763318752)], null)));
var selctd_cust = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940)], null)));
var selctd_cuad = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cust-adr","selected-cust-adr",157759467)], null)));
var _ = null;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Anything-Beispiel aus P-Schrift"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [anything.core.select_box.call(null,"Invoices",cljs.core.vec.call(null,cljs.core.keys.call(null,invcs)),selctd_inv,(function (p1__24471_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-invoice","select-invoice",1574265685),cljs.core.first.call(null,cljs.core.vals.call(null,p1__24471_SHARP_))], null));
})),(((!(cljs.core._EQ_.call(null,selctd_inv,(0)))))?anything.core.invoice.call(null,selctd_inv.call(null,invcs)):null),(cljs.core.truth_(selctd_prod)?anything.core.product.call(null):null),(cljs.core.truth_(selctd_addr)?anything.core.address.call(null,selctd_addr):null),(cljs.core.truth_(selctd_cust)?anything.core.customer.call(null,selctd_cust):null),(cljs.core.truth_(selctd_cuad)?anything.core.customer_address.call(null,selctd_cuad):null)], null)], null)], null)], null);
});
anything.core.main = (function anything$core$main(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anything.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('anything.core.main', anything.core.main);
anything.core.re_render = (function anything$core$re_render(){
return anything.core.main.call(null);
});
if((typeof anything !== 'undefined') && (typeof anything.core !== 'undefined') && (typeof anything.core.start_up !== 'undefined')){
} else {
anything.core.start_up = (function (){
anything.core.main.call(null);

console.log(cljs.core.deref.call(null,re_frame.db.app_db));

return true;
})()
;
}

//# sourceMappingURL=core.js.map
