goog.provide('anything.views');
anything.views.product = (function anything$views$product(){
var sp = cljs.core.deref((function (){var G__19526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19526) : re_frame.alpha.subscribe.call(null,G__19526));
})());
var p = (function (){var G__19527 = cljs.core.deref((function (){var G__19528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"products","products",1876973544)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19528) : re_frame.alpha.subscribe.call(null,G__19528));
})());
return (sp.cljs$core$IFn$_invoke$arity$1 ? sp.cljs$core$IFn$_invoke$arity$1(G__19527) : sp.call(null,G__19527));
})();
var gettext = (function (e){
return parseInt(e);
});
var emit_amount = (function (p1__19517_SHARP_){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product-change","product-change",1433662987),sp,new cljs.core.Keyword(null,"amount","amount",364489504),gettext(p1__19517_SHARP_)], null));
});
var emit_price = (function (p1__19518_SHARP_){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"product-change","product-change",1433662987),sp,new cljs.core.Keyword(null,"price","price",22129180),gettext(p1__19518_SHARP_)], null));
});
if(cljs.core.truth_(sp)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Description: "], null),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(p)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Amount: "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),emit_amount,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),/^[-+]?[0-9]*$/,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"beige"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Price: "], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),emit_price,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),/^[-+]?[0-9]*$/,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"beige"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"Total: "], null),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(p)], null)], null)], null)], null);
} else {
return null;
}
});
anything.views.address = (function anything$views$address(adr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street: "], null),new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street-no: "], null),new cljs.core.Keyword(null,"street-no","street-no",10791405).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-name: "], null),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-code: "], null),new cljs.core.Keyword(null,"city-code","city-code",-237533935).cljs$core$IFn$_invoke$arity$1(adr)], null)], null)], null)], null);
});
anything.views.customer = (function anything$views$customer(cust){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"first-name: "], null),new cljs.core.Keyword(null,"first-name","first-name",-1559982131).cljs$core$IFn$_invoke$arity$1(cust)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"last-name: "], null),new cljs.core.Keyword(null,"last-name","last-name",-1695738974).cljs$core$IFn$_invoke$arity$1(cust)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"company: "], null),new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(cust)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"address. "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cust)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cust-address","selected-cust-address",661351326),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cust)], null));
})], null)], null)], null)], null)], null);
});
anything.views.customer_address = (function anything$views$customer_address(adr){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street: "], null),new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"street-no: "], null),new cljs.core.Keyword(null,"street-no","street-no",10791405).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-name: "], null),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(adr)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"80px",new cljs.core.Keyword(null,"child","child",623967545),"city-code: "], null),new cljs.core.Keyword(null,"city-code","city-code",-237533935).cljs$core$IFn$_invoke$arity$1(adr)], null)], null)], null)], null);
});
anything.views.invoice = (function anything$views$invoice(invoice){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"date:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(invoice)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"address:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"city-name","city-name",882040997).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(invoice)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-address","selected-address",763318752),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(invoice)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sum:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"Sum","Sum",-1967804812).cljs$core$IFn$_invoke$arity$1(invoice)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"VAT:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"VAT","VAT",438520368).cljs$core$IFn$_invoke$arity$1(invoice)))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"totals:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"child","child",623967545),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"totals","totals",1978625999).cljs$core$IFn$_invoke$arity$1(invoice)))], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(invoice))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"items:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec((function (){var iter__5628__auto__ = (function anything$views$invoice_$_iter__19592(s__19593){
return (new cljs.core.LazySeq(null,(function (){
var s__19593__$1 = s__19593;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19593__$1);
if(temp__5823__auto__){
var s__19593__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19593__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19593__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19595 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19594 = (0);
while(true){
if((i__19594 < size__5627__auto__)){
var vec__19598 = cljs.core._nth(c__5626__auto__,i__19594);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19598,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19598,(1),null);
cljs.core.chunk_append(b__19595,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19594,vec__19598,k,i,c__5626__auto__,size__5627__auto__,b__19595,s__19593__$2,temp__5823__auto__){
return (function (){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),k], null));
});})(i__19594,vec__19598,k,i,c__5626__auto__,size__5627__auto__,b__19595,s__19593__$2,temp__5823__auto__))
], null));

var G__19629 = (i__19594 + (1));
i__19594 = G__19629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19595),anything$views$invoice_$_iter__19592(cljs.core.chunk_rest(s__19593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19595),null);
}
} else {
var vec__19601 = cljs.core.first(s__19593__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__19601,k,i,s__19593__$2,temp__5823__auto__){
return (function (){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),k], null));
});})(vec__19601,k,i,s__19593__$2,temp__5823__auto__))
], null),anything$views$invoice_$_iter__19592(cljs.core.rest(s__19593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(invoice));
})())], null)], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(invoice))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"customer:"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"label","label",1718410804),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first-name","first-name",-1559982131).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(invoice)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last-name","last-name",-1695738974).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(invoice)))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),new cljs.core.Keyword(null,"customer","customer",1742966319).cljs$core$IFn$_invoke$arity$1(invoice)], null));
})], null)], null)], null):null)], null)], null);
});
anything.views.select_box = (function anything$views$select_box(lable,values,selected_value,callback_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),lable], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"AAAAAAAAA",new cljs.core.Keyword(null,"choices","choices",1385611597),(function (){var iter__5628__auto__ = (function anything$views$select_box_$_iter__19605(s__19606){
return (new cljs.core.LazySeq(null,(function (){
var s__19606__$1 = s__19606;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19606__$1);
if(temp__5823__auto__){
var s__19606__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19606__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19606__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19608 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19607 = (0);
while(true){
if((i__19607 < size__5627__auto__)){
var v = cljs.core._nth(c__5626__auto__,i__19607);
cljs.core.chunk_append(b__19608,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.Keyword(null,"label","label",1718410804),v], null));

var G__19632 = (i__19607 + (1));
i__19607 = G__19632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19608),anything$views$select_box_$_iter__19605(cljs.core.chunk_rest(s__19606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19608),null);
}
} else {
var v = cljs.core.first(s__19606__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null),new cljs.core.Keyword(null,"label","label",1718410804),v], null),anything$views$select_box_$_iter__19605(cljs.core.rest(s__19606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(values);
})(),new cljs.core.Keyword(null,"model","model",331153215),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_value,(0)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),selected_value], null)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"?",new cljs.core.Keyword(null,"on-change","on-change",-732046149),callback_fn], null)], null)], null);
});
anything.views.ui = (function anything$views$ui(){
var invcs = cljs.core.deref((function (){var G__19612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19612) : re_frame.alpha.subscribe.call(null,G__19612));
})());
var selctd_inv = cljs.core.deref((function (){var G__19613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19613) : re_frame.alpha.subscribe.call(null,G__19613));
})());
var selctd_prod = cljs.core.deref((function (){var G__19614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-product","selected-product",1323310240)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19614) : re_frame.alpha.subscribe.call(null,G__19614));
})());
var selctd_addr = cljs.core.deref((function (){var G__19615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-address","selected-address",763318752)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19615) : re_frame.alpha.subscribe.call(null,G__19615));
})());
var selctd_cust = cljs.core.deref((function (){var G__19618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19618) : re_frame.alpha.subscribe.call(null,G__19618));
})());
var selctd_cuad = cljs.core.deref((function (){var G__19619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cust-adr","selected-cust-adr",157759467)], null);
return (re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.alpha.subscribe.cljs$core$IFn$_invoke$arity$1(G__19619) : re_frame.alpha.subscribe.call(null,G__19619));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"A-Beispiel aus P-Schrift"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"12pt",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [anything.views.select_box("Invoices",cljs.core.vec(cljs.core.keys(invcs)),selctd_inv,(function (p1__19611_SHARP_){
return re_frame.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-invoice","select-invoice",1574265685),cljs.core.first(cljs.core.vals(p1__19611_SHARP_))], null));
})),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selctd_inv,(0)))))?anything.views.invoice((selctd_inv.cljs$core$IFn$_invoke$arity$1 ? selctd_inv.cljs$core$IFn$_invoke$arity$1(invcs) : selctd_inv.call(null,invcs))):null),(cljs.core.truth_(selctd_prod)?anything.views.product():null),(cljs.core.truth_(selctd_addr)?anything.views.address(selctd_addr):null),(cljs.core.truth_(selctd_cust)?anything.views.customer(selctd_cust):null),(cljs.core.truth_(selctd_cuad)?anything.views.customer_address(selctd_cuad):null)], null)], null)], null)], null);
});

//# sourceMappingURL=anything.views.js.map
