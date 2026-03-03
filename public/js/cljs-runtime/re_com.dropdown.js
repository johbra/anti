goog.provide('re_com.dropdown');
re_com.dropdown.dropdown_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Transparent, clickable backdrop. Shown when the dropdown is open."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor-wrapper","anchor-wrapper",162103487),new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Wraps the :anchor part. Opens or closes the dropdown when clicked."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Displays the :label or :placeholder."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"indicator","indicator",1928219637),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Displays an arrow, indicating whether the dropdown is open."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-wrapper","body-wrapper",-1657089346),new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Shown when the dropdown is open. Provides intelligent positioning."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-header","body-header",979543073),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-footer","body-footer",17455137),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2)], null)], null):null);
re_com.dropdown.dropdown_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.dropdown.dropdown_parts_desc)):null);
re_com.dropdown.dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"True when the dropdown is open.",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"Called when the dropdown opens or closes.",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"default","default",-1987822328),"re-com.dropdown/anchor",new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"required?","required?",-872514462),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"String, hiccup or function. When a function, acceps keyword args ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":placholder"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":theme"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":state"], null)," "," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":transition!"], null),". Returns either a string or hiccup, which shows within the clickable dropdown box."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"indicator","indicator",1928219637),new cljs.core.Keyword(null,"required?","required?",-872514462),false,new cljs.core.Keyword(null,"default","default",-1987822328),"re-com.dropdown/indicator",new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"A triangle, indicating whether the dropdown is open or closed."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"required?","required?",-872514462),false,new cljs.core.Keyword(null,"default","default",-1987822328),"re-com.dropdown/backdrop",new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Renders a visual overlay, behind the `:anchor` and `:body` parts, when the dropdown is open."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-backdrop?","show-backdrop?",2092542985),new cljs.core.Keyword(null,"required?","required?",-872514462),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When true, the `:backdrop` part will be rendered when the dropdown is open."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required?","required?",-872514462),true,new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),(""+"Displays when the dropdown is open. "+"Appears either above or below the :anchor, "+"depending on available screen-space. When a function, "+":body is passed the same keyword arguments as :anchor.")], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-header","body-header",979543073),new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Appears at the top of the :body part."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-footer","body-footer",17455137),new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Appears at the bottom of the :body part."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":dropdown"], null)," adds this to the body's dynamically-generated x-position."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":dropdown"], null)," adds this to the body's dynamically-generated y-position."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"toward-center","toward-center",95810865),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Determines how to position the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":body"], null)," part. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":toward-center"], null)," dynamically re-positions it, while ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":up"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":down"], null)," force it toward a static direction."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"description","description",-1428560544),"component's tabindex. A value of -1 removes from order",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"height of the :anchor-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"width of the :anchor-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"height of the :body-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-height","body-height",1854374988),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"width of the :body-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-width","body-width",-568519096),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"height of the :body-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"min-height of the :body-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"max-height of the :body-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"width of the :anchor-wrapper and :body-wrapper parts",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"height of the :body-wrapper part",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"min-width of the :anchor-wrapper and :body-wrapper parts",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"max-width of the :anchor-wrapper and :body-wrapper parts",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),(""+"passed as a prop to the :anchor part. The default :anchor "+"part will display :label inside a the clickable dropdown box."),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),"\"Select an item\"",new cljs.core.Keyword(null,"description","description",-1428560544),(""+"passed as a prop to the :anchor part. The default :anchor part will "+"show :placeholder in the clickable box if there is no :label."),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below.",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.dropdown.dropdown_parts)], null)], null),re_com.args.std):null);
re_com.dropdown.anchor = (function re_com$dropdown$anchor(p__17650){
var map__17651 = p__17650;
var map__17651__$1 = cljs.core.__destructure_map(map__17651);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),attr], 0)),(function (){var or__5142__auto__ = label;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return placeholder;
}
})()], null);
});
re_com.dropdown.backdrop = (function re_com$dropdown$backdrop(p__17652){
var map__17653 = p__17652;
var map__17653__$1 = cljs.core.__destructure_map(map__17653);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17653__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17653__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17653__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),attr], 0))], null);
});
re_com.dropdown.nearest = (function re_com$dropdown$nearest(x,a,b){
if((Math.abs((a - x)) < Math.abs((b - x)))){
return a;
} else {
return b;
}
});
/**
 * Returns an [x y] position for body, relative to anchor.
 *   Considers two possible vertical positions - above or below the anchor.
 *   If one vertical position clips outside the viewport, chooses the opposite position.
 *   If both vertical positions clip, picks the vertical position whose midpoint
 *   is nearest the viewport's midpoint.
 *   Calculates a left-justified horizontal position, constrained by the viewport width
 *   and the right edge of the anchor.
 * 
 *   In other words, the body slides left & right within the anchor width,
 *   and blinks up & down, to find the least cut-off position.
 */
re_com.dropdown.optimize_position_BANG_ = (function re_com$dropdown$optimize_position_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17741 = arguments.length;
var i__5877__auto___17742 = (0);
while(true){
if((i__5877__auto___17742 < len__5876__auto___17741)){
args__5882__auto__.push((arguments[i__5877__auto___17742]));

var G__17743 = (i__5877__auto___17742 + (1));
i__5877__auto___17742 = G__17743;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.dropdown.optimize_position_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.dropdown.optimize_position_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (anchor_el,body_el,p__17658){
var map__17659 = p__17658;
var map__17659__$1 = cljs.core.__destructure_map(map__17659);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17659__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17659__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17659__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var a_rect = anchor_el.getBoundingClientRect();
var a_x = a_rect.x;
var a_y = a_rect.y;
var a_h = a_rect.height;
var a_w = a_rect.width;
var a_bot = a_rect.bottom;
var b_h = body_el.offsetHeight;
var b_w = body_el.offsetWidth;
var w_h = window.innerHeight;
var v_mid_y = (w_h / (2));
var lo_mid_y = (a_bot + (b_w / (2)));
var hi_mid_y = (a_y - (b_h / (2)));
var bot_clipped_QMARK_ = (w_h < (a_bot + b_h));
var top_clipped_QMARK_ = ((a_y - b_h) < (0));
var top_best_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hi_mid_y,re_com.dropdown.nearest(v_mid_y,lo_mid_y,hi_mid_y));
var v_pos = (((!(((top_clipped_QMARK_) || (bot_clipped_QMARK_)))))?new cljs.core.Keyword(null,"low","low",-1601362409):((((top_clipped_QMARK_) && (bot_clipped_QMARK_)))?new cljs.core.Keyword(null,"low","low",-1601362409):((bot_clipped_QMARK_)?new cljs.core.Keyword(null,"high","high",2027297808):((top_clipped_QMARK_)?new cljs.core.Keyword(null,"low","low",-1601362409):((top_best_QMARK_)?new cljs.core.Keyword(null,"high","high",2027297808):new cljs.core.Keyword(null,"low","low",-1601362409)
)))));
var left_bound = cljs.core.max.cljs$core$IFn$_invoke$arity$2((- a_x),(0));
var right_bound = cljs.core.max.cljs$core$IFn$_invoke$arity$2((a_w - b_w),(0));
var hi_y = (- b_h);
var lo_y = a_h;
var best_x = cljs.core.min.cljs$core$IFn$_invoke$arity$2(left_bound,right_bound);
var best_y = (function (){var G__17661 = v_pos;
var G__17661__$1 = (((G__17661 instanceof cljs.core.Keyword))?G__17661.fqn:null);
switch (G__17661__$1) {
case "low":
return lo_y;

break;
case "high":
return hi_y;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17661__$1))));

}
})();
var best_y__$1 = (function (){var G__17664 = direction;
var G__17664__$1 = (((G__17664 instanceof cljs.core.Keyword))?G__17664.fqn:null);
switch (G__17664__$1) {
case "up":
return hi_y;

break;
case "down":
return lo_y;

break;
default:
return best_y;

}
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset_x,offset_y], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a_x,a_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_x,best_y__$1], null)));
}));

(re_com.dropdown.optimize_position_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.dropdown.optimize_position_BANG_.cljs$lang$applyTo = (function (seq17655){
var G__17656 = cljs.core.first(seq17655);
var seq17655__$1 = cljs.core.next(seq17655);
var G__17657 = cljs.core.first(seq17655__$1);
var seq17655__$2 = cljs.core.next(seq17655__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17656,G__17657,seq17655__$2);
}));

re_com.dropdown.body_wrapper = (function re_com$dropdown$body_wrapper(p__17669){
var map__17670 = p__17669;
var map__17670__$1 = cljs.core.__destructure_map(map__17670);
var map__17671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__17671__$1 = cljs.core.__destructure_map(map__17671);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var anchor_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"anchor-ref","anchor-ref",-2073624017));
var body_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"body-ref","body-ref",-1816963435));
var anchor_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var set_body_ref_BANG_ = (function (p1__17668_SHARP_){
return cljs.core.reset_BANG_(body_ref,p1__17668_SHARP_);
});
var optimize_position_BANG_ = (function (){
return cljs.core.reset_BANG_(anchor_position,re_com.dropdown.optimize_position_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(anchor_ref),cljs.core.deref(body_ref),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),re_com.util.deref_or_value(offset_y),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),re_com.util.deref_or_value(offset_x)], null)], 0)));
});
var animation_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var start_loop_BANG_ = (function re_com$dropdown$body_wrapper_$_start_loop(){
return cljs.core.reset_BANG_(animation_id,requestAnimationFrame((function (){
optimize_position_BANG_();

return re_com$dropdown$body_wrapper_$_start_loop();
})));
});
var stop_loop_BANG_ = (function (){
var temp__5823__auto__ = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
cancelAnimationFrame(id);

return cljs.core.reset_BANG_(animation_id,null);
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
optimize_position_BANG_();

return start_loop_BANG_();
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
stop_loop_BANG_();

return cljs.core.reset_BANG_(anchor_position,null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__17680){
var map__17681 = p__17680;
var map__17681__$1 = cljs.core.__destructure_map(map__17681);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17681__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var post_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17681__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684));
var vec__17682 = cljs.core.deref(anchor_position);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17682,(1),null);
var G__17685 = new cljs.core.Keyword("re-com.dropdown","body-wrapper","re-com.dropdown/body-wrapper",-1183586298);
var G__17686 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"anchor-top","anchor-top",-1120009728),top,new cljs.core.Keyword(null,"anchor-left","anchor-left",1763853440),left,new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),set_body_ref_BANG_], null),new cljs.core.Keyword(null,"children","children",-940561982),children], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),post_props], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17685,G__17686) : part.call(null,G__17685,G__17686));
})], null));
});
re_com.dropdown.click_outside_QMARK_ = (function re_com$dropdown$click_outside_QMARK_(element,event){
var target = event.target;
return cljs.core.not(element.contains(target));
});
/**
 * A clickable anchor above an openable, floating body.
 */
re_com.dropdown.dropdown = (function re_com$dropdown$dropdown(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17758 = arguments.length;
var i__5877__auto___17759 = (0);
while(true){
if((i__5877__auto___17759 < len__5876__auto___17758)){
args__5882__auto__.push((arguments[i__5877__auto___17759]));

var G__17760 = (i__5877__auto___17759 + (1));
i__5877__auto___17759 = G__17760;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.dropdown.dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__17692){
var map__17693 = p__17692;
var map__17693__$1 = cljs.core.__destructure_map(map__17693);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17693__$1,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var default_model = model;
var vec__17695 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}));
var focused_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(0),null);
var anchor_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(1),null);
var body_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(2),null);
var anchor_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(3),null);
var anchor_ref_BANG_ = (function (p1__17689_SHARP_){
return cljs.core.reset_BANG_(anchor_ref,p1__17689_SHARP_);
});
var transitionable = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(re_com.util.deref_or_value(model))?new cljs.core.Keyword(null,"in","in",-1531184865):new cljs.core.Keyword(null,"out","out",-910545517)));
return (function() { 
var re_com$dropdown$dropdown_render__delegate = function (p__17698){
var map__17700 = p__17698;
var map__17700__$1 = cljs.core.__destructure_map(map__17700);
var args = map__17700__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17700__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"toward-center","toward-center",95810865));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17700__$1,new cljs.core.Keyword(null,"model","model",331153215),default_model);
var anchor_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520));
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var anchor_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17700__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select an item");
var body_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"body-width","body-width",-568519096));
var show_backdrop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"show-backdrop?","show-backdrop?",2092542985));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var body_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"body-height","body-height",1854374988));
var from_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"part","part",77757738));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17700__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.dropdown.dropdown_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"openable","openable",1470121013),(cljs.core.truth_(re_com.util.deref_or_value(model__$1))?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)),new cljs.core.Keyword(null,"enable","enable",-1839114332),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756)),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),tab_index,new cljs.core.Keyword(null,"focusable","focusable",1031236480),(cljs.core.truth_(re_com.util.deref_or_value(focused_QMARK_))?new cljs.core.Keyword(null,"focused","focused",1851572115):new cljs.core.Keyword(null,"blurred","blurred",944900151)),new cljs.core.Keyword(null,"transitionable","transitionable",-1988279536),cljs.core.deref(transitionable)], null);
var open_BANG_ = (function re_com$dropdown$dropdown_render_$_open_BANG_(){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(true) : on_change.call(null,true));

document.addEventListener("click",on_document_click);

return transition_BANG_(new cljs.core.Keyword(null,"enter","enter",1792452624));
});
var open_default_BANG_ = (function re_com$dropdown$dropdown_render_$_open_default_BANG_(){
cljs.core.reset_BANG_(model__$1,true);

document.addEventListener("click",on_document_click);

return transition_BANG_(new cljs.core.Keyword(null,"enter","enter",1792452624));
});
var close_BANG_ = (function re_com$dropdown$dropdown_render_$_close_BANG_(){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(false) : on_change.call(null,false));

document.removeEventListener("click",on_document_click);

return transition_BANG_(new cljs.core.Keyword(null,"exit","exit",351849638));
});
var close_default_BANG_ = (function re_com$dropdown$dropdown_render_$_close_default_BANG_(){
cljs.core.reset_BANG_(model__$1,false);

document.removeEventListener("click",on_document_click);

return transition_BANG_(new cljs.core.Keyword(null,"exit","exit",351849638));
});
var transition_BANG_ = (function re_com$dropdown$dropdown_render_$_transition_BANG_(k){
var G__17720 = k;
var G__17720__$1 = (((G__17720 instanceof cljs.core.Keyword))?G__17720.fqn:null);
switch (G__17720__$1) {
case "toggle":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"openable","openable",1470121013).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"open","open",-1763596448))){
return (cljs.core.truth_(on_change)?close_BANG_:close_default_BANG_)();
} else {
return (cljs.core.truth_(on_change)?open_BANG_:open_default_BANG_)();
}

break;
case "open":
return (cljs.core.truth_(on_change)?open_BANG_:open_default_BANG_)();

break;
case "close":
return (cljs.core.truth_(on_change)?close_BANG_:close_default_BANG_)();

break;
case "focus":
return cljs.core.reset_BANG_(focused_QMARK_,true);

break;
case "blur":
return cljs.core.reset_BANG_(focused_QMARK_,false);

break;
case "enter":
cljs.core.reset_BANG_(transitionable,new cljs.core.Keyword(null,"entering","entering",-413471949));

return setTimeout((function (){
return cljs.core.reset_BANG_(transitionable,new cljs.core.Keyword(null,"in","in",-1531184865));
}),(100));

break;
case "exit":
cljs.core.reset_BANG_(transitionable,new cljs.core.Keyword(null,"exiting","exiting",1968554212));

return setTimeout((function (){
return cljs.core.reset_BANG_(transitionable,new cljs.core.Keyword(null,"out","out",-910545517));
}),(100));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17720__$1))));

}
});
var on_document_click = (function re_com$dropdown$dropdown_render_$_on_document_click(event){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(anchor_ref);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.deref(body_ref);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((re_com.dropdown.click_outside_QMARK_(cljs.core.deref(anchor_ref),event)) && (re_com.dropdown.click_outside_QMARK_(cljs.core.deref(body_ref),event)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return transition_BANG_(new cljs.core.Keyword(null,"close","close",1835149582));
} else {
return null;
}
});
var part_props = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null),new cljs.core.Keyword(null,"indicator","indicator",1928219637),re_com.dropdown.parts.indicator], null);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var parts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parts,cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword("re-com.dropdown","body","re-com.dropdown/body",1506363683),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword("re-com.dropdown","anchor","re-com.dropdown/anchor",812839969),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword("re-com.dropdown","wrapper","re-com.dropdown/wrapper",1783074340),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword("re-com.dropdown","backdrop","re-com.dropdown/backdrop",358193923),new cljs.core.Keyword(null,"anchor-wrapper","anchor-wrapper",162103487),new cljs.core.Keyword("re-com.dropdown","anchor-wrapper","re-com.dropdown/anchor-wrapper",-310465993),new cljs.core.Keyword(null,"body-header","body-header",979543073),new cljs.core.Keyword("re-com.dropdown","body-header","re-com.dropdown/body-header",374701321),new cljs.core.Keyword(null,"body-footer","body-footer",17455137),new cljs.core.Keyword("re-com.dropdown","body-footer","re-com.dropdown/body-footer",-453027111)], null))], 0));
var part = (function() { 
var G__17787__delegate = function (id,p__17722){
var map__17723 = p__17722;
var map__17723__$1 = cljs.core.__destructure_map(map__17723);
var opts = map__17723__$1;
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(parts__$1,id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id)))),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),id], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"from","from",1815293044)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),from_part));
};
var G__17787 = function (id,var_args){
var p__17722 = null;
if (arguments.length > 1) {
var G__17790__i = 0, G__17790__a = new Array(arguments.length -  1);
while (G__17790__i < G__17790__a.length) {G__17790__a[G__17790__i] = arguments[G__17790__i + 1]; ++G__17790__i;}
  p__17722 = new cljs.core.IndexedSeq(G__17790__a,0,null);
} 
return G__17787__delegate.call(this,id,p__17722);};
G__17787.cljs$lang$maxFixedArity = 1;
G__17787.cljs$lang$applyTo = (function (arglist__17791){
var id = cljs.core.first(arglist__17791);
var p__17722 = cljs.core.rest(arglist__17791);
return G__17787__delegate(id,p__17722);
});
G__17787.cljs$core$IFn$_invoke$arity$variadic = G__17787__delegate;
return G__17787;
})()
;
return part(new cljs.core.Keyword("re-com.dropdown","wrapper","re-com.dropdown/wrapper",1783074340),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(args)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),416], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__5140__auto__ = show_backdrop_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"transitionable","transitionable",-1988279536).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__5140__auto__;
}
})())?part(new cljs.core.Keyword("re-com.dropdown","backdrop","re-com.dropdown/backdrop",358193923),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),part_props,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.backdrop], null)):null),part(new cljs.core.Keyword("re-com.dropdown","anchor-wrapper","re-com.dropdown/anchor-wrapper",-310465993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),425], null)),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),anchor_ref_BANG_], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.dropdown","anchor","re-com.dropdown/anchor",812839969),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),part_props,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.anchor], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),part(new cljs.core.Keyword("re-com.dropdown","indicator","re-com.dropdown/indicator",1318417581),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),part_props,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.parts.indicator], null))], null)], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"max-width","max-width",-1939924051)], null)),(cljs.core.truth_(anchor_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),anchor_height], null):null),(cljs.core.truth_(anchor_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),anchor_width], null):null)], 0))], null)], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"openable","openable",1470121013).cljs$core$IFn$_invoke$arity$1(state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.body_wrapper,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"anchor-ref","anchor-ref",-2073624017),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"body-ref","body-ref",-1816963435),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665),new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.Keyword(null,"direction","direction",-633359395)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.dropdown","body-header","re-com.dropdown/body-header",374701321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),part_props], null)),part(new cljs.core.Keyword("re-com.dropdown","body","re-com.dropdown/body",1506363683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),part_props], null)),part(new cljs.core.Keyword("re-com.dropdown","body-footer","re-com.dropdown/body-footer",-453027111),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),part_props], null))], null),offset_y,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part-fn","part-fn",1984437584),part], null),parts__$1,anchor_ref,theme__$1,body_ref,offset_x,anchor_position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"max-height","max-height",-612563804)], null)),(cljs.core.truth_(body_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),body_height], null):null),(cljs.core.truth_(body_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),body_width], null):null)], 0))], null),direction])], null):null)], null)], null)], null));
}
};
var re_com$dropdown$dropdown_render = function (var_args){
var p__17698 = null;
if (arguments.length > 0) {
var G__17798__i = 0, G__17798__a = new Array(arguments.length -  0);
while (G__17798__i < G__17798__a.length) {G__17798__a[G__17798__i] = arguments[G__17798__i + 0]; ++G__17798__i;}
  p__17698 = new cljs.core.IndexedSeq(G__17798__a,0,null);
} 
return re_com$dropdown$dropdown_render__delegate.call(this,p__17698);};
re_com$dropdown$dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$dropdown$dropdown_render.cljs$lang$applyTo = (function (arglist__17800){
var p__17698 = cljs.core.seq(arglist__17800);
return re_com$dropdown$dropdown_render__delegate(p__17698);
});
re_com$dropdown$dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$dropdown$dropdown_render__delegate;
return re_com$dropdown$dropdown_render;
})()
;
}));

(re_com.dropdown.dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.dropdown.dropdown.cljs$lang$applyTo = (function (seq17690){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17690));
}));


//# sourceMappingURL=re_com.dropdown.js.map
