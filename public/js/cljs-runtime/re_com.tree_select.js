goog.provide('re_com.tree_select');
re_com.tree_select.tree_select_dropdown_parts_desc = ((re_com.config.include_args_desc_QMARK_)?((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]",new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-wrapper","dropdown-wrapper",-1728548532),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-backdrop","dropdown-backdrop",-1799029344),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Transparent, clickable backdrop. Shown when the dropdown is open."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-anchor-wrapper","dropdown-anchor-wrapper",1919508765),new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Wraps the :anchor part. Opens or closes the dropdown when clicked."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-anchor","dropdown-anchor",1567069189),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Displays the :label or :placeholder."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),"[:span]",new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"counter","counter",804008177)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-indicator","dropdown-indicator",-1832864927),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Displays an arrow, indicating whether the dropdown is open."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-body-wrapper","dropdown-body-wrapper",-1136494648),new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]",new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Shown when the dropdown is open. Provides intelligent positioning."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-body-header","dropdown-body-header",112673100),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-body-header","dropdown-body-header",112673100),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dropdown-body","dropdown-body",-638942177),new cljs.core.Keyword(null,"impl","impl",1677848700),"user-defined",new cljs.core.Keyword(null,"level","level",1290497552),(2)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"only-button","only-button",-1947150935),new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.tree-select","only-button","re-com.tree-select/only-button",1891242380,null),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Appears when hovering a choice or group, and when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":show-only-button?"], null)," is true. ","When clicked, selects only the single choice or group."], null)], null)], null):null):null);
re_com.tree_select.tree_select_dropdown_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tree_select.tree_select_dropdown_parts_desc)):null);
re_com.tree_select.tree_select_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tree-select",new cljs.core.Keyword(null,"impl","impl",1677848700),"[tree-select]"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tree-select-wrapper",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tree-select-choice",new cljs.core.Keyword(null,"impl","impl",1677848700),"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tree-select-group",new cljs.core.Keyword(null,"impl","impl",1677848700),"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tree-select-offset",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"expander","expander",379138924),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tree-select-expander",new cljs.core.Keyword(null,"impl","impl",1677848700),"[box]"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tree-select-checkbox",new cljs.core.Keyword(null,"impl","impl",1677848700),"[checkbox]"], null)], null):null);
re_com.tree_select.tree_select_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tree_select.tree_select_parts_desc)):null);
re_com.tree_select.tree_select_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each map represents a choice. Values corresponding to id, & label are extracted by the functions ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null),". See below."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"a set of ids | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.set_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The set of the ids for currently selected choices. If nil or empty, see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":placeholder"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"expanded-groups","expanded-groups",1899484598),new cljs.core.Keyword(null,"default","default",-1987822328),"(r/atom nil)",new cljs.core.Keyword(null,"type","type",1174270348),"a set of vectors of ids | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.set_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"The set of currently expanded group paths."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-group-expand","on-group-expand",-2067201617),new cljs.core.Keyword(null,"default","default",-1987822328),"#(reset! expanded-groups %)",new cljs.core.Keyword(null,"type","type",1174270348),"set of vectors of ids -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"This function is called whenever the set of expanded groups changes. This usually happens when the user clicks one of the triangular expander icons."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"initial-expanded-groups","initial-expanded-groups",1858995438),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword | set of paths",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"How to expand groups when the component first mounts."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"[set of choice ids, set of group vectors]  -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"This function is called whenever the selection changes. It is also responsible for updating the value of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," as needed."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"alpha"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Width of the outer wrapper."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Minimum width of the outer wrapper."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Maximum width of the outer wrapper."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Minimum height of the outer wrapper."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Maximum height of the outer wrapper."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"When true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When true, requires at least 1 choice to be selected. ","If clicking a choice would result in 0 choices being selected (i.e. a model value of #{}), ","then ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," will not be called."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"groups-first?","groups-first?",-1910091312),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When true, puts groups at the top of the list. Ungrouped items will appear last."], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choice-disabled-fn","choice-disabled-fn",-1164473367),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"choice map -> boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Predicate on the set of maps given by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"choices"], null),". Disables the subset of choices for which ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"choice-disabled?"], null)," returns ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"map -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function taking one argument (a map) and returns the unique identifier for that map. Called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),":label",new cljs.core.Keyword(null,"type","type",1174270348),"map -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function which can turn a choice into a displayable label. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),". Given one argument, a choice map, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"(comp name last)",new cljs.core.Keyword(null,"type","type",1174270348),"vector -> hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"A function which can turn a group vector into a displayable label. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":groups"], null),". Given one argument, a group vector, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"empty-means-full?","empty-means-full?",-1499037560),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"By default, an empty model (i.e. #{}) means that no checkboxes are checked. When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":empty-means-full?"], null)," is true, all checkboxes appear checked when the model is empty."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," function on blur, otherwise on any change (clicking any checkbox)"], null),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),(""+"When true, hovering over an item causes an \"only\" button to appear. "+"Clicking it will select that item, and deselect all others.")], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | vector",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class string, or vector of class strings (applies to the outer container)."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tree_select.tree_select_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null)], null):null);
re_com.tree_select.tree_select_dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_com.tree_select.tree_select_args_desc,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field-label-fn","field-label-fn",-1349527853),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string or hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),(""+"(Dropdown version only). Accepts a map, including keys :items, :group-label-fn and :label-fn. "+"Can return a string or hiccup, which will be rendered inside the dropdown anchor box.")], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-reset-button?","show-reset-button?",1558207977),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"When true, shows a small reset icon within the indicator part. By default, the icon looks like an X."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-reset","on-reset",1057446829),new cljs.core.Keyword(null,"default","default",-1987822328),"#(reset! model #{})",new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"This function is called when the user clicks the reset button."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field-label-fn","field-label-fn",-1349527853),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string or hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),(""+"Accepts a map, including keys :items, :group-label-fn and :label-fn. "+"Can return a string or hiccup, which will be rendered inside the dropdown anchor box.")], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alt-text-fn","alt-text-fn",622903484),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),(""+"Accepts a map, including keys :items, :group-label-fn and :label-fn. "+"Returns a string that will display in the native browser tooltip that appears on mouse hover.")], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/generic-dropdown"], null),"dropdown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/generic-dropdown"], null),"dropdown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652),new cljs.core.Keyword(null,"type","type",1174270348),"map -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/generic-dropdown"], null),"dropdown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/generic-dropdown"], null),"dropdown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-header","body-header",979543073),new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/generic-dropdown"], null),"dropdown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-footer","body-footer",17455137),new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.part_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/generic-dropdown"], null),"dropdown"], null)], null)], null)], null)):null);
re_com.tree_select.backdrop = (function re_com$tree_select$backdrop(p__18532){
var map__18533 = p__18532;
var map__18533__$1 = cljs.core.__destructure_map(map__18533);
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18533__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18533__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18533__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"noselect rc-backdrop "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (){var or__5142__auto__ = opacity;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return 0.0;
}
})()], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"style","style",-496642736)], null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_click)?(function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

return null;
}):null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)))], 0))], null);
});
re_com.tree_select.offset = (function re_com$tree_select$offset(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18919 = arguments.length;
var i__5877__auto___18920 = (0);
while(true){
if((i__5877__auto___18920 < len__5876__auto___18919)){
args__5882__auto__.push((arguments[i__5877__auto___18920]));

var G__18921 = (i__5877__auto___18920 + (1));
i__5877__auto___18920 = G__18921;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.tree_select.offset.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.tree_select.offset.cljs$core$IFn$_invoke$arity$variadic = (function (p__18536){
var map__18537 = p__18536;
var map__18537__$1 = cljs.core.__destructure_map(map__18537);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18537__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18537__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tree_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),315], null)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"style","style",-496642736)], null))),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__18544 = "rc-tree-select-offset ";
var G__18545 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2(G__18544,G__18545) : re_com.theme.merge_class.call(null,G__18544,G__18545));
})(),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"child","child",623967545),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"\u2BC8"))], null);
}));

(re_com.tree_select.offset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tree_select.offset.cljs$lang$applyTo = (function (seq18534){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18534));
}));

re_com.tree_select.only_button = (function re_com$tree_select$only_button(p__18548){
var map__18549 = p__18548;
var map__18549__$1 = cljs.core.__destructure_map(map__18549);
var solo_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18549__$1,new cljs.core.Keyword(null,"solo!","solo!",-685010672));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18549__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18549__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18549__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),solo_BANG_], null),attr], 0)),"only"], null);
});
re_com.tree_select.choice = (function re_com$tree_select$choice(p__18551){
var map__18552 = p__18551;
var map__18552__$1 = cljs.core.__destructure_map(map__18552);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var toggle_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"toggle!","toggle!",221329013));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.checkbox.checkbox,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tree_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),329], null)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__18553 = "rc-tree-select-choice";
var G__18554 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2(G__18553,G__18554) : re_com.theme.merge_class.call(null,G__18553,G__18554));
})(),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.into.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.Keyword(null,"model","model",331153215),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),toggle_BANG_,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null)], null)], null);
});
re_com.tree_select.choice_wrapper = (function re_com$tree_select$choice_wrapper(_){
var hover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__18578){
var map__18579 = p__18578;
var map__18579__$1 = cljs.core.__destructure_map(map__18579);
var props = map__18579__$1;
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var show_only_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
if(cljs.core.truth_(showing_QMARK_)){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,null);
})], null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.part.part.cljs$core$IFn$_invoke$arity$2(choice,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","choice","re-com.tree-select/choice",822859997),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tree_select.choice], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),(cljs.core.truth_((function (){var and__5140__auto__ = show_only_button_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(hover_QMARK_);
} else {
return and__5140__auto__;
}
})())?re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only-button","only-button",-1947150935).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","only-button","re-com.tree-select/only-button",250710853),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tree_select.only_button], null)):null)], null))], null);
} else {
return null;
}
});
});
re_com.tree_select.group_item = (function re_com$tree_select$group_item(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18937 = arguments.length;
var i__5877__auto___18938 = (0);
while(true){
if((i__5877__auto___18938 < len__5876__auto___18937)){
args__5882__auto__.push((arguments[i__5877__auto___18938]));

var G__18939 = (i__5877__auto___18938 + (1));
i__5877__auto___18938 = G__18939;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.tree_select.group_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.tree_select.group_item.cljs$core$IFn$_invoke$arity$variadic = (function (p__18602){
var map__18603 = p__18602;
var map__18603__$1 = cljs.core.__destructure_map(map__18603);
var props = map__18603__$1;
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var hide_show_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,new cljs.core.Keyword(null,"hide-show!","hide-show!",-387822116));
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18603__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
if(cljs.core.truth_(showing_QMARK_)){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tree_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),367], null)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__18604 = "rc-tree-select-group";
var G__18605 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2(G__18604,G__18605) : re_com.theme.merge_class.call(null,G__18604,G__18605));
})(),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tree_select.choice,cljs.core.into.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__18600_SHARP_){
if(cljs.core.truth_(p1__18600_SHARP_)){
return (p1__18600_SHARP_.indeterminate = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"some","some",-1951079573),checked_QMARK_));
} else {
return null;
}
})], null)], null))], null)], null)], null);
} else {
return null;
}
}));

(re_com.tree_select.group_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tree_select.group_item.cljs$lang$applyTo = (function (seq18601){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18601));
}));

re_com.tree_select.group_wrapper = (function re_com$tree_select$group_wrapper(_){
var hover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__18607){
var map__18608 = p__18607;
var map__18608__$1 = cljs.core.__destructure_map(map__18608);
var props = map__18608__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var hide_show_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,new cljs.core.Keyword(null,"hide-show!","hide-show!",-387822116));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var show_only_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18608__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
if(cljs.core.truth_(showing_QMARK_)){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,null);
})], null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((level - (1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tree_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),391], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),hide_show_BANG_], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expander","expander",379138924),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expander","expander",379138924),new cljs.core.Keyword(null,"style","style",-496642736)], null))),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__18609 = "rc-tree-select-expander";
var G__18610 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expander","expander",379138924),new cljs.core.Keyword(null,"class","class",-2030961996)], null));
return (re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2(G__18609,G__18610) : re_com.theme.merge_class.call(null,G__18609,G__18610));
})(),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.util.triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"direction","direction",-633359395),(cljs.core.truth_(open_QMARK_)?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"right","right",-452581833))], null)], null)], null),re_com.part.part.cljs$core$IFn$_invoke$arity$2(re_com.tree_select.group_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","group-item","re-com.tree-select/group-item",-1526394954),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tree_select.group_item], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),(cljs.core.truth_((function (){var and__5140__auto__ = show_only_button_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(hover_QMARK_);
} else {
return and__5140__auto__;
}
})())?re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only-button","only-button",-1947150935).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","only-button","re-com.tree-select/only-button",250710853),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tree_select.only_button], null)):null)], null))], null);
} else {
return null;
}
});
});
re_com.tree_select.group_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348));
re_com.tree_select.ancestor_paths = (function re_com$tree_select$ancestor_paths(path){
var G__18611 = path;
var G__18611__$1 = (((G__18611 == null))?null:re_com.util.__GT_v(G__18611));
var G__18611__$2 = (((G__18611__$1 == null))?null:cljs.core.iterate(cljs.core.butlast,G__18611__$1));
var G__18611__$3 = (((G__18611__$2 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__18611__$2));
if((G__18611__$3 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,G__18611__$3);
}
});
re_com.tree_select.infer_groups = (function re_com$tree_select$infer_groups(items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(re_com.util.__GT_v),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(re_com.tree_select.ancestor_paths),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__18612_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"group","group",582596132),p1__18612_SHARP_], null);
})),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),items);
});
re_com.tree_select.infer_groups_STAR_ = cljs.core.memoize(re_com.tree_select.infer_groups);
re_com.tree_select.toggle = (function re_com$tree_select$toggle(s,k){
if(cljs.core.contains_QMARK_(s,k)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
} else {
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY)(s,k);
}
});
re_com.tree_select.descendant_QMARK_ = (function re_com$tree_select$descendant_QMARK_(group_v,item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_v,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(group_v),re_com.util.__GT_v(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(item)))));
});
re_com.tree_select.filter_descendants = (function re_com$tree_select$filter_descendants(group_v,choices){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.tree_select.descendant_QMARK_,group_v),choices);
});
re_com.tree_select.filter_descendants_STAR_ = cljs.core.memoize(re_com.tree_select.filter_descendants);
re_com.tree_select.sort_items = (function re_com$tree_select$sort_items(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18954 = arguments.length;
var i__5877__auto___18955 = (0);
while(true){
if((i__5877__auto___18955 < len__5876__auto___18954)){
args__5882__auto__.push((arguments[i__5877__auto___18955]));

var G__18957 = (i__5877__auto___18955 + (1));
i__5877__auto___18955 = G__18957;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.tree_select.sort_items.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.tree_select.sort_items.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__18644){
var map__18645 = p__18644;
var map__18645__$1 = cljs.core.__destructure_map(map__18645);
var groups_first_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18645__$1,new cljs.core.Keyword(null,"groups-first?","groups-first?",-1910091312));
var groupless_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"group","group",582596132));
var lexicographic_group = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__18634_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,re_com.util.__GT_v(p1__18634_SHARP_));
}),new cljs.core.Keyword(null,"group","group",582596132));
var leaf_QMARK_ = cljs.core.complement(re_com.tree_select.group_QMARK_);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,(function (){var G__18647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lexicographic_group,leaf_QMARK_], null);
if(cljs.core.truth_(groups_first_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [groupless_QMARK_], null),G__18647);
} else {
return G__18647;
}
})()),items);
}));

(re_com.tree_select.sort_items.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.tree_select.sort_items.cljs$lang$applyTo = (function (seq18635){
var G__18636 = cljs.core.first(seq18635);
var seq18635__$1 = cljs.core.next(seq18635);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18636,seq18635__$1);
}));

re_com.tree_select.group_label = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(clojure.string.capitalize,cljs.core.name,cljs.core.last,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group","group",582596132)], 0));
re_com.tree_select.current_choices = (function re_com$tree_select$current_choices(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18958 = arguments.length;
var i__5877__auto___18959 = (0);
while(true){
if((i__5877__auto___18959 < len__5876__auto___18958)){
args__5882__auto__.push((arguments[i__5877__auto___18959]));

var G__18960 = (i__5877__auto___18959 + (1));
i__5877__auto___18959 = G__18960;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.tree_select.current_choices.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.tree_select.current_choices.cljs$core$IFn$_invoke$arity$variadic = (function (model,choices,p__18656){
var map__18657 = p__18656;
var map__18657__$1 = cljs.core.__destructure_map(map__18657);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18657__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(model,id_fn),choices));
}));

(re_com.tree_select.current_choices.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.tree_select.current_choices.cljs$lang$applyTo = (function (seq18649){
var G__18650 = cljs.core.first(seq18649);
var seq18649__$1 = cljs.core.next(seq18649);
var G__18651 = cljs.core.first(seq18649__$1);
var seq18649__$2 = cljs.core.next(seq18649__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18650,G__18651,seq18649__$2);
}));

re_com.tree_select.current_groups = (function re_com$tree_select$current_groups(current_choices){
return re_com.tree_select.infer_groups_STAR_(current_choices);
});
re_com.tree_select.full_groups = (function re_com$tree_select$full_groups(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18961 = arguments.length;
var i__5877__auto___18962 = (0);
while(true){
if((i__5877__auto___18962 < len__5876__auto___18961)){
args__5882__auto__.push((arguments[i__5877__auto___18962]));

var G__18963 = (i__5877__auto___18962 + (1));
i__5877__auto___18962 = G__18963;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.tree_select.full_groups.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.tree_select.full_groups.cljs$core$IFn$_invoke$arity$variadic = (function (model,choices,p__18668){
var map__18669 = p__18668;
var map__18669__$1 = cljs.core.__destructure_map(map__18669);
var opts = map__18669__$1;
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18669__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var current_choices = re_com.tree_select.current_choices.cljs$core$IFn$_invoke$arity$variadic(model,choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
var current_groups = re_com.tree_select.current_groups(current_choices);
var full_QMARK_ = (function (p__18670){
var map__18672 = p__18670;
var map__18672__$1 = cljs.core.__destructure_map(map__18672);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18672__$1,new cljs.core.Keyword(null,"group","group",582596132));
var group_v = re_com.util.__GT_v(group);
var descendant_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,re_com.tree_select.filter_descendants_STAR_(group_v,choices));
return cljs.core.every_QMARK_(model,descendant_ids);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(full_QMARK_,current_groups));
}));

(re_com.tree_select.full_groups.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.tree_select.full_groups.cljs$lang$applyTo = (function (seq18661){
var G__18662 = cljs.core.first(seq18661);
var seq18661__$1 = cljs.core.next(seq18661);
var G__18663 = cljs.core.first(seq18661__$1);
var seq18661__$2 = cljs.core.next(seq18661__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18662,G__18663,seq18661__$2);
}));

re_com.tree_select.tree_select = (function re_com$tree_select$tree_select(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18964 = arguments.length;
var i__5877__auto___18965 = (0);
while(true){
if((i__5877__auto___18965 < len__5876__auto___18964)){
args__5882__auto__.push((arguments[i__5877__auto___18965]));

var G__18966 = (i__5877__auto___18965 + (1));
i__5877__auto___18965 = G__18966;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.tree_select.tree_select.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.tree_select.tree_select.cljs$core$IFn$_invoke$arity$variadic = (function (p__18737){
var map__18738 = p__18737;
var map__18738__$1 = cljs.core.__destructure_map(map__18738);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword(null,"model","model",331153215));
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var expanded_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18738__$1,new cljs.core.Keyword(null,"expanded-groups","expanded-groups",1899484598),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null));
var initial_expanded_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword(null,"initial-expanded-groups","initial-expanded-groups",1858995438));
var on_group_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword(null,"on-group-expand","on-group-expand",-2067201617));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18738__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var default_expanded_groups = expanded_groups;
var on_group_expand__$1 = (function (){var or__5142__auto__ = on_group_expand;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,expanded_groups);
}
})();
var choices__$1 = re_com.util.deref_or_value(choices);
var temp__5827__auto___18967 = re_com.util.deref_or_value(initial_expanded_groups);
if((temp__5827__auto___18967 == null)){
} else {
var initial_expanded_groups_18968__$1 = temp__5827__auto___18967;
var G__18742_18969 = (function (){var G__18743 = initial_expanded_groups_18968__$1;
var G__18743__$1 = (((G__18743 instanceof cljs.core.Keyword))?G__18743.fqn:null);
switch (G__18743__$1) {
case "all":
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),re_com.tree_select.infer_groups(choices__$1)));

break;
case "none":
return cljs.core.PersistentHashSet.EMPTY;

break;
case "chosen":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__18711_SHARP_){
return cljs.core.contains_QMARK_(re_com.util.deref_or_value(model),(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__18711_SHARP_) : id_fn.call(null,p1__18711_SHARP_)));
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(re_com.tree_select.ancestor_paths)),choices__$1);

break;
default:
return initial_expanded_groups_18968__$1;

}
})();
(on_group_expand__$1.cljs$core$IFn$_invoke$arity$1 ? on_group_expand__$1.cljs$core$IFn$_invoke$arity$1(G__18742_18969) : on_group_expand__$1.call(null,G__18742_18969));
}

return (function() { 
var re_com$tree_select$tree_select_render__delegate = function (p__18764){
var map__18765 = p__18764;
var map__18765__$1 = cljs.core.__destructure_map(map__18765);
var args = map__18765__$1;
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var show_only_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652));
var group_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var empty_means_full_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"empty-means-full?","empty-means-full?",-1499037560));
var choice_disabled_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"choice-disabled-fn","choice-disabled-fn",-1164473367));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var choices__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var on_group_expand__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"on-group-expand","on-group-expand",-2067201617));
var groups_first_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"groups-first?","groups-first?",-1910091312));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var map__18769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18765__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var map__18769__$1 = cljs.core.__destructure_map(map__18769);
var wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18769__$1,new cljs.core.Keyword(null,"wrapper","wrapper",-969103524));
var expanded_groups__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18765__$1,new cljs.core.Keyword(null,"expanded-groups","expanded-groups",1899484598),default_expanded_groups);
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tree_select.tree_select_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var choices__$3 = re_com.util.deref_or_value(choices__$2);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var model__$2 = re_com.util.deref_or_value(model__$1);
var label_fn__$1 = (function (){var or__5142__auto____$1 = label_fn;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"label","label",1718410804);
}
})();
var on_group_expand__$3 = (function (){var or__5142__auto____$1 = on_group_expand__$2;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,expanded_groups__$1);
}
})();
var expanded_groups__$2 = re_com.util.deref_or_value(expanded_groups__$1);
var group_label_fn__$1 = (function (){var or__5142__auto____$1 = group_label_fn;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return re_com.tree_select.group_label;
}
})();
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var full_QMARK_ = (function (){var or__5142__auto____$1 = (cljs.core.truth_(empty_means_full_QMARK_)?cljs.core.empty_QMARK_(model__$2):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.every_QMARK_(model__$2,cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,choices__$3));
}
})();
var items = re_com.tree_select.sort_items.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(choices__$3,re_com.tree_select.infer_groups_STAR_(choices__$3)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"groups-first?","groups-first?",-1910091312),groups_first_QMARK_], 0));
var item = (function (item_props){
var map__18794 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(item_props,new cljs.core.Keyword(null,"group","group",582596132),re_com.util.__GT_v);
var map__18794__$1 = cljs.core.__destructure_map(map__18794);
var item_props__$1 = map__18794__$1;
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18794__$1,new cljs.core.Keyword(null,"group","group",582596132));
if(cljs.core.truth_(re_com.tree_select.group_QMARK_(item_props__$1))){
var descendants = re_com.tree_select.filter_descendants_STAR_(group,choices__$3);
var descendant_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,descendants);
var checked_QMARK_ = ((full_QMARK_)?new cljs.core.Keyword(null,"all","all",892129742):((cljs.core.every_QMARK_(model__$2,descendant_ids))?new cljs.core.Keyword(null,"all","all",892129742):(cljs.core.truth_(cljs.core.some(model__$2,descendant_ids))?new cljs.core.Keyword(null,"some","some",-1951079573):null)));
var toggle_group = (function (p1__18712_SHARP_){
return cljs.core.set((function (){var G__18796 = p1__18712_SHARP_;
var G__18797 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,(function (){var G__18806 = descendants;
if(cljs.core.truth_(choice_disabled_fn)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(choice_disabled_fn,G__18806);
} else {
return G__18806;
}
})());
var fexpr__18795 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),checked_QMARK_))?clojure.set.difference:clojure.set.union);
return (fexpr__18795.cljs$core$IFn$_invoke$arity$2 ? fexpr__18795.cljs$core$IFn$_invoke$arity$2(G__18796,G__18797) : fexpr__18795.call(null,G__18796,G__18797));
})());
});
var new_groups = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132)),re_com.tree_select.full_groups.cljs$core$IFn$_invoke$arity$variadic(toggle_group(model__$2),choices__$3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], null)], 0)));
var group_props = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"solo!","solo!",-685010672),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"toggle!","toggle!",221329013),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"hide-show!","hide-show!",-387822116),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"model","model",331153215)],[checked_QMARK_,item_props__$1,parts,(function (event){
var new_model_18976 = cljs.core.set(descendant_ids);
var new_groups_18977__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132)),re_com.tree_select.full_groups.cljs$core$IFn$_invoke$arity$variadic(new_model_18976,choices__$3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], null)], 0)));
(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(new_model_18976,new_groups_18977__$1) : on_change.call(null,new_model_18976,new_groups_18977__$1));

return null;
}),theme__$1,cljs.core.count(group),cljs.core.every_QMARK_(cljs.core.set(expanded_groups__$2),cljs.core.rest(re_com.tree_select.ancestor_paths(group))),(group_label_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_label_fn__$1.cljs$core$IFn$_invoke$arity$1(item_props__$1) : group_label_fn__$1.call(null,item_props__$1)),cljs.core.contains_QMARK_(expanded_groups__$2,group),(function (event){
var new_model_18978 = toggle_group(model__$2);
if(((cljs.core.not(required_QMARK_)) || (cljs.core.seq(new_model_18978)))){
(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(new_model_18978,new_groups) : on_change.call(null,new_model_18978,new_groups));
} else {
}

return null;
}),(function (){var or__5142__auto____$1 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if(cljs.core.truth_(choice_disabled_fn)){
return cljs.core.every_QMARK_(choice_disabled_fn,descendants);
} else {
return null;
}
}
})(),(function (event){
var G__18808_18984 = re_com.tree_select.toggle(expanded_groups__$2,group);
(on_group_expand__$3.cljs$core$IFn$_invoke$arity$1 ? on_group_expand__$3.cljs$core$IFn$_invoke$arity$1(G__18808_18984) : on_group_expand__$3.call(null,G__18808_18984));

return null;
}),show_only_button_QMARK_,model__$2]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tree_select.group_wrapper,group_props], null);
} else {
var level = (cljs.core.count(group) + (1));
var choice_props = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"solo!","solo!",-685010672),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"toggle!","toggle!",221329013),new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"model","model",331153215)],[(function (){var or__5142__auto____$1 = full_QMARK_;
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(model__$2,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item_props__$1) : id_fn.call(null,item_props__$1)));
}
})(),item_props__$1,parts,(function (event){
var new_model_18985 = cljs.core.PersistentHashSet.createAsIfByAssoc([(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item_props__$1) : id_fn.call(null,item_props__$1))]);
var new_groups_18986 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132)),re_com.tree_select.full_groups.cljs$core$IFn$_invoke$arity$variadic(new_model_18985,choices__$3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], null)], 0)));
(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(new_model_18985,new_groups_18986) : on_change.call(null,new_model_18985,new_groups_18986));

return null;
}),theme__$1,level,((cljs.core.not(group))?true:cljs.core.every_QMARK_(cljs.core.set(expanded_groups__$2),re_com.tree_select.ancestor_paths(group))),(label_fn__$1.cljs$core$IFn$_invoke$arity$1 ? label_fn__$1.cljs$core$IFn$_invoke$arity$1(item_props__$1) : label_fn__$1.call(null,item_props__$1)),(function (event){
var new_model_18987 = re_com.tree_select.toggle(model__$2,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item_props__$1) : id_fn.call(null,item_props__$1)));
var new_groups_18988 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132)),re_com.tree_select.full_groups.cljs$core$IFn$_invoke$arity$variadic(new_model_18987,choices__$3,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], null)], 0)));
if(((cljs.core.not(required_QMARK_)) || (cljs.core.seq(new_model_18987)))){
(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(new_model_18987,new_groups_18988) : on_change.call(null,new_model_18987,new_groups_18988));
} else {
}

return null;
}),choice,(function (){var or__5142__auto____$1 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if(cljs.core.truth_(choice_disabled_fn)){
return (choice_disabled_fn.cljs$core$IFn$_invoke$arity$1 ? choice_disabled_fn.cljs$core$IFn$_invoke$arity$1(item_props__$1) : choice_disabled_fn.call(null,item_props__$1));
} else {
return null;
}
}
})(),show_only_button_QMARK_,model__$2]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tree_select.choice_wrapper,choice_props], null);
}
});
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(wrapper,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","wrapper","re-com.tree-select/wrapper",1564041184),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tree_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),579], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(item,items)], null)], null));
}
};
var re_com$tree_select$tree_select_render = function (var_args){
var p__18764 = null;
if (arguments.length > 0) {
var G__18995__i = 0, G__18995__a = new Array(arguments.length -  0);
while (G__18995__i < G__18995__a.length) {G__18995__a[G__18995__i] = arguments[G__18995__i + 0]; ++G__18995__i;}
  p__18764 = new cljs.core.IndexedSeq(G__18995__a,0,null);
} 
return re_com$tree_select$tree_select_render__delegate.call(this,p__18764);};
re_com$tree_select$tree_select_render.cljs$lang$maxFixedArity = 0;
re_com$tree_select$tree_select_render.cljs$lang$applyTo = (function (arglist__18996){
var p__18764 = cljs.core.seq(arglist__18996);
return re_com$tree_select$tree_select_render__delegate(p__18764);
});
re_com$tree_select$tree_select_render.cljs$core$IFn$_invoke$arity$variadic = re_com$tree_select$tree_select_render__delegate;
return re_com$tree_select$tree_select_render;
})()
;
}));

(re_com.tree_select.tree_select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tree_select.tree_select.cljs$lang$applyTo = (function (seq18719){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18719));
}));

re_com.tree_select.field_label = (function re_com$tree_select$field_label(p__18812){
var map__18813 = p__18812;
var map__18813__$1 = cljs.core.__destructure_map(map__18813);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18813__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var group_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18813__$1,new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18813__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
if(cljs.core.seq(items)){
var item_label_fn = (function (p1__18811_SHARP_){
var fexpr__18814 = (cljs.core.truth_(re_com.tree_select.group_QMARK_(p1__18811_SHARP_))?group_label_fn:label_fn);
return (fexpr__18814.cljs$core$IFn$_invoke$arity$1 ? fexpr__18814.cljs$core$IFn$_invoke$arity$1(p1__18811_SHARP_) : fexpr__18814.call(null,p1__18811_SHARP_));
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(item_label_fn,items));
} else {
return null;
}
});
re_com.tree_select.distinct_by_id = (function re_com$tree_select$distinct_by_id(id_fn,coll){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,coll);
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(re_com.util.item_for_id,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(ids),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(coll),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], null)));
});
re_com.tree_select.labelable_items = (function re_com$tree_select$labelable_items(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18998 = arguments.length;
var i__5877__auto___18999 = (0);
while(true){
if((i__5877__auto___18999 < len__5876__auto___18998)){
args__5882__auto__.push((arguments[i__5877__auto___18999]));

var G__19004 = (i__5877__auto___18999 + (1));
i__5877__auto___18999 = G__19004;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.tree_select.labelable_items.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.tree_select.labelable_items.cljs$core$IFn$_invoke$arity$variadic = (function (model,choices,p__18826){
var map__18827 = p__18826;
var map__18827__$1 = cljs.core.__destructure_map(map__18827);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18827__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var current_choices = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(model,id_fn),choices));
var current_groups = re_com.tree_select.infer_groups_STAR_(current_choices);
var full_QMARK_ = (function (p__18829){
var map__18830 = p__18829;
var map__18830__$1 = cljs.core.__destructure_map(map__18830);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18830__$1,new cljs.core.Keyword(null,"group","group",582596132));
var group_v = re_com.util.__GT_v(group);
var descendant_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,re_com.tree_select.filter_descendants_STAR_(group_v,choices));
return cljs.core.every_QMARK_(model,descendant_ids);
});
var full_groups = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(full_QMARK_,current_groups));
var highest_groups = (function (){var G__18834 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"group","group",582596132)),full_groups);
var vec__18836 = G__18834;
var seq__18837 = cljs.core.seq(vec__18836);
var first__18838 = cljs.core.first(seq__18837);
var seq__18837__$1 = cljs.core.next(seq__18837);
var group = first__18838;
var remainder = seq__18837__$1;
var acc = cljs.core.PersistentVector.EMPTY;
var G__18834__$1 = G__18834;
var acc__$1 = acc;
while(true){
var vec__18844 = G__18834__$1;
var seq__18845 = cljs.core.seq(vec__18844);
var first__18846 = cljs.core.first(seq__18845);
var seq__18845__$1 = cljs.core.next(seq__18845);
var group__$1 = first__18846;
var remainder__$1 = seq__18845__$1;
var acc__$2 = acc__$1;
if(cljs.core.not(group__$1)){
return acc__$2;
} else {
var group_v = re_com.util.__GT_v(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(group__$1));
var G__19006 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.tree_select.descendant_QMARK_,group_v),remainder__$1);
var G__19007 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$2,group__$1);
G__18834__$1 = G__19006;
acc__$1 = G__19007;
continue;
}
break;
}
})();
var highest_group_descendants = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__18818_SHARP_){
return re_com.tree_select.filter_descendants_STAR_(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(p1__18818_SHARP_),current_choices);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([highest_groups], 0)));
return re_com.tree_select.sort_items(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(highest_group_descendants,cljs.core.into.cljs$core$IFn$_invoke$arity$2(current_choices,highest_groups)));
}));

(re_com.tree_select.labelable_items.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.tree_select.labelable_items.cljs$lang$applyTo = (function (seq18820){
var G__18821 = cljs.core.first(seq18820);
var seq18820__$1 = cljs.core.next(seq18820);
var G__18822 = cljs.core.first(seq18820__$1);
var seq18820__$2 = cljs.core.next(seq18820__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18821,G__18822,seq18820__$2);
}));

re_com.tree_select.tree_select_dropdown = (function re_com$tree_select$tree_select_dropdown(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19009 = arguments.length;
var i__5877__auto___19010 = (0);
while(true){
if((i__5877__auto___19010 < len__5876__auto___19009)){
args__5882__auto__.push((arguments[i__5877__auto___19010]));

var G__19011 = (i__5877__auto___19010 + (1));
i__5877__auto___19010 = G__19011;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.tree_select.tree_select_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.tree_select.tree_select_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__18863){
var map__18864 = p__18863;
var map__18864__$1 = cljs.core.__destructure_map(map__18864);
var expanded_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18864__$1,new cljs.core.Keyword(null,"expanded-groups","expanded-groups",1899484598),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18864__$1,new cljs.core.Keyword(null,"model","model",331153215));
var default_expanded_groups = expanded_groups;
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var prev_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var vec__18865 = reagent.core.argv(this$);
var seq__18866 = cljs.core.seq(vec__18865);
var first__18867 = cljs.core.first(seq__18866);
var seq__18866__$1 = cljs.core.next(seq__18866);
var _ = first__18867;
var map__18868 = seq__18866__$1;
var map__18868__$1 = cljs.core.__destructure_map(map__18868);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18868__$1,new cljs.core.Keyword(null,"model","model",331153215));
var model_value = re_com.util.deref_or_value(model__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(model_value,re_com.util.deref_or_value(prev_model))){
cljs.core.reset_BANG_(internal_model,model_value);

return cljs.core.reset_BANG_(prev_model,model_value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var re_com$tree_select$tree_select_dropdown_render__delegate = function (p__18871){
var map__18872 = p__18871;
var map__18872__$1 = cljs.core.__destructure_map(map__18872);
var args = map__18872__$1;
var choice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var show_only_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652));
var alt_text_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"alt-text-fn","alt-text-fn",622903484));
var group_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"model","model",331153215));
var anchor_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520));
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18872__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var body_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"body-header","body-header",979543073));
var body_footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"body-footer","body-footer",17455137));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var anchor_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18872__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select an item...");
var empty_means_full_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"empty-means-full?","empty-means-full?",-1499037560));
var show_reset_button_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"show-reset-button?","show-reset-button?",1558207977));
var choice_disabled_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"choice-disabled-fn","choice-disabled-fn",-1164473367));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var on_reset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var initial_expanded_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"initial-expanded-groups","initial-expanded-groups",1858995438));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18872__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var groups_first_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"groups-first?","groups-first?",-1910091312));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var field_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"field-label-fn","field-label-fn",-1349527853));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var expanded_groups__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18872__$1,new cljs.core.Keyword(null,"expanded-groups","expanded-groups",1899484598),default_expanded_groups);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enable","enable",-1839114332),((cljs.core.not(disabled_QMARK_))?new cljs.core.Keyword(null,"enabled","enabled",1195909756):new cljs.core.Keyword(null,"disabled","disabled",-1529784218))], null);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var label_fn__$1 = (function (){var or__5142__auto__ = label_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"label","label",1718410804);
}
})();
var alt_text_fn__$1 = (function (){var or__5142__auto__ = alt_text_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (p1__18851_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto____$1 = label_fn__$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"label","label",1718410804);
}
})(),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__18851_SHARP_)));
});
}
})();
var group_label_fn__$1 = (function (){var or__5142__auto__ = group_label_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.name,cljs.core.last,new cljs.core.Keyword(null,"group","group",582596132));
}
})();
var field_label_fn__$1 = (function (){var or__5142__auto__ = field_label_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return re_com.tree_select.field_label;
}
})();
var labelable_items = re_com.tree_select.labelable_items.cljs$core$IFn$_invoke$arity$variadic(re_com.util.deref_or_value(model__$1),re_com.util.deref_or_value(choices),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], null)], 0));
var anchor_label = (function (){var G__18882 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),re_com.tree_select.distinct_by_id(id_fn,labelable_items),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn__$1,new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155),group_label_fn__$1], null);
return (field_label_fn__$1.cljs$core$IFn$_invoke$arity$1 ? field_label_fn__$1.cljs$core$IFn$_invoke$arity$1(G__18882) : field_label_fn__$1.call(null,G__18882));
})();
var on_reset__$1 = (function (){var or__5142__auto__ = on_reset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (event){
var G__18884_19020 = cljs.core.PersistentHashSet.EMPTY;
var G__18885_19021 = re_com.util.deref_or_value(expanded_groups__$1);
(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__18884_19020,G__18885_19021) : on_change.call(null,G__18884_19020,G__18885_19021));

return null;
});
}
})();
var body = (function (p__18886){
var map__18887 = p__18886;
var map__18887__$1 = cljs.core.__destructure_map(map__18887);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18887__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18887__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18887__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(re_com.tree_select.tree_select,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","dropdown-body","re-com.tree-select/dropdown-body",720859555),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required?","required?",-872514462),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"empty-means-full?","empty-means-full?",-1499037560),new cljs.core.Keyword(null,"choice-disabled-fn","choice-disabled-fn",-1164473367),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"initial-expanded-groups","initial-expanded-groups",1858995438),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"groups-first?","groups-first?",-1910091312),new cljs.core.Keyword(null,"expanded-groups","expanded-groups",1899484598),new cljs.core.Keyword(null,"choice","choice",-1375170727),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155),new cljs.core.Keyword(null,"model","model",331153215)],[min_width,label_fn__$1,required_QMARK_,min_height,empty_means_full_QMARK_,choice_disabled_fn,choices,max_width,initial_expanded_groups,id_fn,groups_first_QMARK_,expanded_groups__$1,choice,(cljs.core.truth_(change_on_blur_QMARK___$1)?(function (p1__18852_SHARP_){
return cljs.core.reset_BANG_(internal_model,p1__18852_SHARP_);
}):on_change),disabled_QMARK_,show_only_button_QMARK_,group_label_fn__$1,(cljs.core.truth_(change_on_blur_QMARK___$1)?internal_model:model__$1)])], null));
});
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.Keyword("re-com.tree-select","dropdown","re-com.tree-select/dropdown",-619731439))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","dropdown","re-com.tree-select/dropdown",-619731439),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.dropdown,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(args)], null),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520),new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"model","model",331153215)],[anchor_height,anchor_width,placeholder,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"body-header","body-header",979543073),new cljs.core.Keyword(null,"body-footer","body-footer",17455137),new cljs.core.Keyword(null,"indicator","indicator",1928219637),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"body-wrapper","body-wrapper",-1657089346),new cljs.core.Keyword(null,"anchor-wrapper","anchor-wrapper",162103487)],[body_header,body_footer,(function (props){
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.Keyword(null,"dropdown-indicator","dropdown-indicator",-1832864927),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.Keyword("re-com.tree-select","dropdown-indicator","re-com.tree-select/dropdown-indicator",96714981))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","dropdown-indicator","re-com.tree-select/dropdown-indicator",96714981),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.part.part.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","counter","re-com.tree-select/counter",-1561857427),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",623967545),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.truth_(change_on_blur_QMARK___$1)?cljs.core.deref(internal_model):re_com.util.deref_or_value(model__$1)))))], null)], null)),re_com.part.part.cljs$core$IFn$_invoke$arity$2(re_com.dropdown.parts.indicator,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","dropdown-indicator","re-com.tree-select/dropdown-indicator",96714981),new cljs.core.Keyword(null,"props","props",453281727),props], null)),(cljs.core.truth_(re_com.util.deref_or_value(show_reset_button_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.util.x_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_reset__$1)?(function (event){
event.stopPropagation();

var G__18898_19031 = re_com.util.deref_or_value(model__$1);
var G__18899_19032 = re_com.util.deref_or_value(expanded_groups__$1);
(on_reset__$1.cljs$core$IFn$_invoke$arity$2 ? on_reset__$1.cljs$core$IFn$_invoke$arity$2(G__18898_19031,G__18899_19032) : on_reset__$1.call(null,G__18898_19031,G__18899_19032));

return null;
}):null)], null)], null):null)], null)], null)], null));
}),new cljs.core.Keyword(null,"dropdown-anchor","dropdown-anchor",1567069189).cljs$core$IFn$_invoke$arity$1(parts),body,new cljs.core.Keyword(null,"dropdown-backdrop","dropdown-backdrop",-1799029344).cljs$core$IFn$_invoke$arity$1(parts),new cljs.core.Keyword(null,"dropdown-wrapper","dropdown-wrapper",-1728548532).cljs$core$IFn$_invoke$arity$1(parts),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5142__auto__ = width;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "221px";
}
})(),new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null)], null),new cljs.core.Keyword(null,"dropdown-body-wrapper","dropdown-body-wrapper",-1136494648).cljs$core$IFn$_invoke$arity$1(parts)], 0)),new cljs.core.Keyword(null,"dropdown-anchor-wrapper","dropdown-anchor-wrapper",1919508765).cljs$core$IFn$_invoke$arity$1(parts)]),new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dropdown","dropdown",1343185805).cljs$core$IFn$_invoke$arity$1(parts))], 0)),width,theme__$1,re_com.part.part.cljs$core$IFn$_invoke$arity$2(label,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.tree-select","label","re-com.tree-select/label",-111075912),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"labelable-items","labelable-items",1728100459),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"attr","attr",-604132353)],[label_fn__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anchor_label], null),placeholder,labelable_items,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tree_select.cljs",new cljs.core.Keyword(null,"line","line",212345235),704], null)),state,id_fn,new cljs.core.Keyword(null,"span","span",1394872991),group_label_fn__$1,re_com.util.deref_or_value(model__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var G__18901 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),labelable_items,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn__$1,new cljs.core.Keyword(null,"group-label-fn","group-label-fn",-1050449155),group_label_fn__$1], null);
return (alt_text_fn__$1.cljs$core$IFn$_invoke$arity$1 ? alt_text_fn__$1.cljs$core$IFn$_invoke$arity$1(G__18901) : alt_text_fn__$1.call(null,G__18901));
})()], null)])], null)),(cljs.core.truth_(change_on_blur_QMARK___$1)?(function (open_QMARK_){
cljs.core.reset_BANG_(showing_QMARK_,open_QMARK_);

if(((cljs.core.not(open_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),re_com.util.deref_or_value(model__$1))))){
var G__18902 = cljs.core.deref(internal_model);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__18902) : on_change.call(null,G__18902));
} else {
return null;
}
}):null),showing_QMARK_])], null));
};
var re_com$tree_select$tree_select_dropdown_render = function (var_args){
var p__18871 = null;
if (arguments.length > 0) {
var G__19036__i = 0, G__19036__a = new Array(arguments.length -  0);
while (G__19036__i < G__19036__a.length) {G__19036__a[G__19036__i] = arguments[G__19036__i + 0]; ++G__19036__i;}
  p__18871 = new cljs.core.IndexedSeq(G__19036__a,0,null);
} 
return re_com$tree_select$tree_select_dropdown_render__delegate.call(this,p__18871);};
re_com$tree_select$tree_select_dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$tree_select$tree_select_dropdown_render.cljs$lang$applyTo = (function (arglist__19037){
var p__18871 = cljs.core.seq(arglist__19037);
return re_com$tree_select$tree_select_dropdown_render__delegate(p__18871);
});
re_com$tree_select$tree_select_dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$tree_select$tree_select_dropdown_render__delegate;
return re_com$tree_select$tree_select_dropdown_render;
})()
], null));
}));

(re_com.tree_select.tree_select_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tree_select.tree_select_dropdown.cljs$lang$applyTo = (function (seq18859){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18859));
}));


//# sourceMappingURL=re_com.tree_select.js.map
