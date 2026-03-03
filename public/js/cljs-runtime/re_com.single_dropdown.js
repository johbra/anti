goog.provide('re_com.single_dropdown');
re_com.single_dropdown.part_structure = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","tooltip","re-com.single-dropdown/tooltip",-1711458803),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","chosen-container","re-com.single-dropdown/chosen-container",839841562),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","chosen-single","re-com.single-dropdown/chosen-single",1740854052)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","free-text-dropdown-top","re-com.single-dropdown/free-text-dropdown-top",-793736856)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","chosen-drop","re-com.single-dropdown/chosen-drop",1513653096),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","chosen-search","re-com.single-dropdown/chosen-search",2081812334)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","chosen-results","re-com.single-dropdown/chosen-results",2104463724),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","choice-item","re-com.single-dropdown/choice-item",-715535256)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","group-heading","re-com.single-dropdown/group-heading",-832915941)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","choices-loading","re-com.single-dropdown/choices-loading",21156903)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","choices-error","re-com.single-dropdown/choices-error",-2004224712)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.single-dropdown","choices-no-results","re-com.single-dropdown/choices-no-results",-233912787)], null)], null)], null)], null)], null);
re_com.single_dropdown.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.single_dropdown.part_structure):null);
re_com.single_dropdown.single_dropdown_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.single_dropdown.parts_desc)):null);
re_com.single_dropdown.fn_or_vector_of_maps_or_strings_QMARK_ = (function re_com$single_dropdown$fn_or_vector_of_maps_or_strings_QMARK_(v){
return ((cljs.core.fn_QMARK_(v)) || (((re_com.validate.vector_of_maps_QMARK_(v)) || (((cljs.core.sequential_QMARK_(v)) && (((cljs.core.empty_QMARK_(v)) || (typeof cljs.core.first(v) === 'string'))))))));
});
re_com.single_dropdown.args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of choices | r/atom | (opts, done, fail) -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.single_dropdown.fn_or_vector_of_maps_or_strings_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each is expected to have an id, label and, optionally, a group, provided by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":group-fn"], null),". May also be a callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(opts, done, fail)"], null)," where opts is map of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":filter-text"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":regex-filter?."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"the id of a choice | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the id of the selected choice. If nil, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":placeholder"], null)," text is shown"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when a new choice is selected. Passed the id of new choice"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its displayable label."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its group identifier"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"choice -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns the markup that will be rendered for that choice. Defaults to the label if no custom markup is required."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, a filter text field is placed at the top of the dropdown"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the filter text field will support JavaScript regular expressions. If false, just plain text"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text when no selection"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title?","title?",-1510254555),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, allows the title for the selected dropdown to be displayed via a mouse over. Handy when dropdown width is small and text is truncated"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS width. e.g.: \"500px\" or \"20em\""], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"240px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum height of the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"component's tabindex. A value of -1 removes from order"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"delay to debounce loading requests when using callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"free-text?","free-text?",1157444543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"is the text freely editable? If true then ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":chocies"], null)," is a vector of strings, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," is a string (atom) and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," is called with a string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"auto-complete?","auto-complete?",979505177),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"auto-complete text while typing using dropdown choices. Has no effect if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":free-text?"], null)," is not turned on"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"capitalize?","capitalize?",-2078576456),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"capitalize the first letter. Has no effect if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":free-text?"], null)," is not turned on"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"enter-drop?","enter-drop?",1054029717),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"should pressing Enter display the dropdown part?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cancelable?","cancelable?",-986378679),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"should pressing Esc or clicking outside the dropdown part cancel selection made with arrow keys?"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"set-to-filter","set-to-filter",1270184073),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),"set",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.set_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":filter-box?"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":free-text?"], null)," are turned on and there are no results, current text can be set to filter text ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-enter-press"], null)," and/or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-no-results-match-click"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-placeholder","filter-placeholder",-1736876526),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text in filter box when no filter"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"can-drop-above?","can-drop-above?",-1140582782),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"should the dropdown part be displayed above if it does not fit below the top part?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"drop-direction","drop-direction",-1450183017),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Overrides any behavior which would position the body dynamically (such as ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":can-drop-above?"], null),").",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":up"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":above"], null)," positions the body above the anchor, and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":down"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":dn"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":below"], null)," positions it below."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"est-item-height","est-item-height",-264466439),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(30),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"estimated dropdown item height (for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":can-drop-above?"], null),"). used only *before* the dropdown part is displayed to guess whether it fits below the top part or not which is later verified when the dropdown is displayed"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"just-drop?","just-drop?",-378249297),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"display just the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"repeat-change?","repeat-change?",-961675100),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"repeat ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," events if an already selected item is selected again"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"i18n","i18n",-563422499),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"internationalization map with optional keys ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":loading"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":no-results"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":no-results-match"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"() -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the dropdown part is displayed"], null),re_com.args.pre,re_com.args.theme,re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.src,re_com.args.parts(re_com.single_dropdown.single_dropdown_parts),re_com.args.debug], true):null);
/**
 * In a vector of maps (where each map has an :id), return the id of the choice offset posititions away
 * from id (usually +1 or -1 to go to next/previous). Also accepts :start and :end
 */
re_com.single_dropdown.move_to_new_choice = (function re_com$single_dropdown$move_to_new_choice(choices,id_fn,id,offset){
var current_index = re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(id,choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], 0));
var new_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,new cljs.core.Keyword(null,"start","start",-355208981)))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,new cljs.core.Keyword(null,"end","end",-268185958)))?(cljs.core.count(choices) - (1)):(((current_index == null))?(0):cljs.core.mod((current_index + offset),cljs.core.count(choices))
)));
if(cljs.core.truth_((function (){var and__5140__auto__ = new_index;
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(choices) > (0));
} else {
return and__5140__auto__;
}
})())){
var G__17547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(choices,new_index);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__17547) : id_fn.call(null,G__17547));
} else {
return null;
}
});
/**
 * If necessary, inserts group headings entries into the choices
 */
re_com.single_dropdown.choices_with_group_headings = (function re_com$single_dropdown$choices_with_group_headings(opts,group_fn){
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(group_fn,opts);
var group_headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17548_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"group","group",582596132)],[cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),p1__17548_SHARP_]);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(group_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,groups)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of choices based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.single_dropdown.filter_choices = (function re_com$single_dropdown$filter_choices(choices,group_fn,label_fn,filter_text){
var lower_filter_text = clojure.string.lower_case(filter_text);
var filter_fn = (function (opt){
var group = ((((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)) == null))?"":(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
var label = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt))));
return (((clojure.string.lower_case(group).indexOf(lower_filter_text) >= (0))) || ((clojure.string.lower_case(label).indexOf(lower_filter_text) >= (0))));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.single_dropdown.filter_choices_regex = (function re_com$single_dropdown$filter_choices_regex(choices,group_fn,label_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e17561){if((e17561 instanceof Object)){
var _ = e17561;
return null;
} else {
throw e17561;

}
}})();
var filter_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (re__$1,opt){
if((re__$1 == null)){
return null;
} else {
var or__5142__auto__ = re__$1.test((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return re__$1.test((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
}
}
}),re);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices extra data within the choices vector
 */
re_com.single_dropdown.filter_choices_by_keyword = (function re_com$single_dropdown$filter_choices_by_keyword(choices,keyword,value){
var filter_fn = (function (opt){
return ((keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(opt) : keyword.call(null,opt)).indexOf(value) >= (0));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Load choices if choices is callback.
 */
re_com.single_dropdown.load_choices_STAR_ = (function re_com$single_dropdown$load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_){
var id = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)) + (1));
var callback = (function (p__17564){
var map__17565 = p__17564;
var map__17565__$1 = cljs.core.__destructure_map(map__17565);
var args = map__17565__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17565__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"choices","choices",1385611597),result], 0));
} else {
return null;
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"timer","timer",-1266967739),null], 0));

var G__17569 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),text,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668),regex_filter_QMARK_], null);
var G__17570 = (function (p1__17562_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),p1__17562_SHARP_], null));
});
var G__17571 = (function (p1__17563_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__17563_SHARP_], null));
});
return (choices.cljs$core$IFn$_invoke$arity$3 ? choices.cljs$core$IFn$_invoke$arity$3(G__17569,G__17570,G__17571) : choices.call(null,G__17569,G__17570,G__17571));
});
/**
 * Load choices or schedule loading depending on debounce?
 */
re_com.single_dropdown.load_choices = (function re_com$single_dropdown$load_choices(choices_state,choices,debounce_delay,text,regex_filter_QMARK_,debounce_QMARK_){
if(cljs.core.fn_QMARK_(choices)){
var temp__5823__auto___17643 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
if(cljs.core.truth_(temp__5823__auto___17643)){
var timer_17644 = temp__5823__auto___17643;
clearTimeout(timer_17644);
} else {
}

if(cljs.core.truth_(debounce_QMARK_)){
var timer = setTimeout((function (){
return re_com.single_dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}),debounce_delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),timer);
} else {
return re_com.single_dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}
} else {
return null;
}
});
/**
 * Render a single dropdown component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 *    {:id "US" :label "United States"  :group "Group 1"}
 *    {:id "GB" :label "United Kingdom" :group "Group 1"}
 *    {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.single_dropdown.single_dropdown = (function re_com$single_dropdown$single_dropdown(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17645 = arguments.length;
var i__5877__auto___17646 = (0);
while(true){
if((i__5877__auto___17646 < len__5876__auto___17645)){
args__5882__auto__.push((arguments[i__5877__auto___17646]));

var G__17647 = (i__5877__auto___17646 + (1));
i__5877__auto___17646 = G__17647;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.single_dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.single_dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__17586){
var map__17587 = p__17586;
var map__17587__$1 = cljs.core.__destructure_map(map__17587);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17587__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17587__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__17648__delegate = function (p__17588){
var map__17589 = p__17588;
var map__17589__$1 = cljs.core.__destructure_map(map__17589);
var args = map__17589__$1;
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17589__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17589__$1,new cljs.core.Keyword(null,"model","model",331153215));
var regex_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17589__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17589__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),(250));
var just_drop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17589__$1,new cljs.core.Keyword(null,"just-drop?","just-drop?",-378249297));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.single_dropdown.args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var drop_showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(just_drop_QMARK_));
var filter_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var choices_fn_QMARK_ = cljs.core.fn_QMARK_(choices);
var choices_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),choices_fn_QMARK_,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"timer","timer",-1266967739),null], null));
var load_choices = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_com.single_dropdown.load_choices,choices_state,choices,debounce_delay);
var set_filter_text = (function (text,p__17590,debounce_QMARK_){
var map__17591 = p__17590;
var map__17591__$1 = cljs.core.__destructure_map(map__17591);
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17591__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
load_choices(text,regex_filter_QMARK___$1,debounce_QMARK_);

return cljs.core.reset_BANG_(filter_text,text);
});
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var showing_QMARK_ = reagent.core.track((function (){
var and__5140__auto__ = cljs.core.not(cljs.core.deref(drop_showing_QMARK_));
if(and__5140__auto__){
return cljs.core.deref(over_QMARK_);
} else {
return and__5140__auto__;
}
}));
var free_text_focused_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var free_text_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var select_free_text_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var free_text_sel_range = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var focus_free_text = (function (){
if(cljs.core.truth_(cljs.core.deref(free_text_input))){
return cljs.core.deref(free_text_input).focus();
} else {
return null;
}
});
var anchor_el = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var body_el = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var anchor_ref_BANG_ = (function (p1__17572_SHARP_){
return cljs.core.reset_BANG_(anchor_el,p1__17572_SHARP_);
});
var body_ref_BANG_ = (function (p1__17573_SHARP_){
return cljs.core.reset_BANG_(body_el,p1__17573_SHARP_);
});
var focus_anchor = (function (){
var G__17592 = cljs.core.deref(anchor_el);
var G__17592__$1 = (((G__17592 == null))?null:G__17592.getElementsByClassName("chosen-single"));
var G__17592__$2 = (((G__17592__$1 == null))?null:G__17592__$1.item((0)));
if((G__17592__$2 == null)){
return null;
} else {
return G__17592__$2.focus();
}
});
var transition_BANG_ = (function (p1__17574_SHARP_){
var G__17593 = p1__17574_SHARP_;
var G__17593__$1 = (((G__17593 instanceof cljs.core.Keyword))?G__17593.fqn:null);
switch (G__17593__$1) {
case "mouse-over":
return cljs.core.reset_BANG_(over_QMARK_,true);

break;
case "mouse-out":
return cljs.core.reset_BANG_(over_QMARK_,false);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17593__$1))));

}
});
load_choices("",regex_filter_QMARK_,false);

return (function() { 
var re_com$single_dropdown$single_dropdown_render__delegate = function (p__17594){
var map__17595 = p__17594;
var map__17595__$1 = cljs.core.__destructure_map(map__17595);
var args__$1 = map__17595__$1;
var est_item_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17595__$1,new cljs.core.Keyword(null,"est-item-height","est-item-height",-264466439),(30));
var auto_complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"auto-complete?","auto-complete?",979505177));
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17595__$1,new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"group","group",582596132));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"model","model",331153215));
var free_text_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"free-text?","free-text?",1157444543));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17595__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var can_drop_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"can-drop-above?","can-drop-above?",-1140582782));
var repeat_change_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"repeat-change?","repeat-change?",-961675100));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"title?","title?",-1510254555));
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518));
var cancelable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17595__$1,new cljs.core.Keyword(null,"cancelable?","cancelable?",-986378679),true);
var set_to_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"set-to-filter","set-to-filter",1270184073));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491));
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
var choices__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17595__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var filter_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"filter-placeholder","filter-placeholder",-1736876526));
var enter_drop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17595__$1,new cljs.core.Keyword(null,"enter-drop?","enter-drop?",1054029717),true);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var drop_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"drop-direction","drop-direction",-1450183017));
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688));
var capitalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17595__$1,new cljs.core.Keyword(null,"capitalize?","capitalize?",-2078576456));
var or__5142__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.single_dropdown.args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var choices__$2 = ((choices_fn_QMARK_)?new cljs.core.Keyword(null,"choices","choices",1385611597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)):re_com.util.deref_or_value(choices__$1));
var id_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:id_fn);
var label_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:label_fn);
var render_fn__$1 = (cljs.core.truth_(free_text_QMARK_)?cljs.core.identity:(function (){var or__5142__auto____$2 = render_fn;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return label_fn__$1;
}
})());
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value(regex_filter_QMARK___$1);
var latest_ext_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model__$1));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),cljs.core.deref(latest_ext_model)))?(function (){
cljs.core.reset_BANG_(external_model,cljs.core.deref(latest_ext_model));

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__5140__auto__ = on_change;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__5140__auto__;
}
})();
var call_on_change = (function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(latest_ext_model));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
return repeat_change_QMARK_;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(external_model,cljs.core.deref(internal_model));

var G__17596 = cljs.core.deref(internal_model);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17596) : on_change.call(null,G__17596));
} else {
return null;
}
});
var callback = (function (p1__17575_SHARP_){
cljs.core.reset_BANG_(internal_model,(function (){var G__17597 = p1__17575_SHARP_;
if(cljs.core.truth_((function (){var and__5140__auto__ = free_text_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return capitalize_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return re_com.util.capitalize_first_letter(G__17597);
} else {
return G__17597;
}
})());

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

call_on_change();

var current_drop_showing_QMARK__17654 = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(current_drop_showing_QMARK__17654)){
focus_free_text();
} else {
}

if(cljs.core.truth_(just_drop_QMARK_)){
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,cljs.core.not(current_drop_showing_QMARK__17654));
}

if(cljs.core.truth_(current_drop_showing_QMARK__17654)){
focus_anchor();
} else {
}

return set_filter_text("",args__$1,false);
});
var free_text_change = (function (p1__17576_SHARP_){
cljs.core.reset_BANG_(internal_model,p1__17576_SHARP_);

cljs.core.reset_BANG_(select_free_text_QMARK_,false);

return call_on_change();
});
var cancel = (function (){
if(cljs.core.truth_(cljs.core.deref(free_text_focused_QMARK_))){
} else {
focus_free_text();
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));
});
var dropdown_click = (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
return cancel();
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,true);

focus_free_text();

return cljs.core.reset_BANG_(select_free_text_QMARK_,true);
}
}
});
var filtered_choices = ((choices_fn_QMARK_)?choices__$2:(cljs.core.truth_(regex_filter_QMARK___$2)?re_com.single_dropdown.filter_choices_regex(choices__$2,group_fn,label_fn__$1,cljs.core.deref(filter_text)):re_com.single_dropdown.filter_choices(choices__$2,group_fn,label_fn__$1,cljs.core.deref(filter_text))));
var visible_count = (function (){
var results_node = (function (){var and__5140__auto__ = cljs.core.deref(anchor_el);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(anchor_el).getElementsByClassName("chosen-results").item((0));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = results_node;
if(cljs.core.truth_(and__5140__auto__)){
return results_node.firstChild;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.quot(results_node.clientHeight,results_node.firstChild.offsetHeight);
} else {
return (0);
}
});
var est_drop_height = (function (){
var items_height = (cljs.core.count(filtered_choices) * est_item_height);
var drop_margin = (12);
var filter_height = (32);
var maxh = ((cljs.core.not(max_height))?(240):((clojure.string.ends_with_QMARK_(max_height,"px"))?parseInt(max_height,(10)):(function (){
re_com.validate.log_warning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["max-height is not in pxs, using 240px for estimation"], 0));

return (240);
})()

));
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(((items_height + drop_margin) + (cljs.core.truth_(filter_box_QMARK_)?filter_height:(0))),maxh);
});
var drop_height = reagent.core.track((function (){
var temp__5821__auto__ = (function (){var and__5140__auto__ = cljs.core.deref(anchor_el);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(anchor_el).getElementsByClassName("chosen-drop").item((0));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var drop_node = temp__5821__auto__;
return drop_node.getBoundingClientRect().height;
} else {
return est_drop_height();
}
}));
var top_height = (34);
var drop_above_QMARK_ = (cljs.core.truth_((function (){var fexpr__17598 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"above","above",-1286866470),null], null), null);
return (fexpr__17598.cljs$core$IFn$_invoke$arity$1 ? fexpr__17598.cljs$core$IFn$_invoke$arity$1(drop_direction) : fexpr__17598.call(null,drop_direction));
})())?true:(cljs.core.truth_((function (){var fexpr__17599 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"dn","dn",1073628915),null,new cljs.core.Keyword(null,"below","below",-926774883),null], null), null);
return (fexpr__17599.cljs$core$IFn$_invoke$arity$1 ? fexpr__17599.cljs$core$IFn$_invoke$arity$1(drop_direction) : fexpr__17599.call(null,drop_direction));
})())?false:reagent.core.track((function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = can_drop_above_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.deref(anchor_el);
} else {
return and__5140__auto__;
}
})())){
var node_top = cljs.core.deref(anchor_el).getBoundingClientRect().top;
var window_height = document.documentElement.clientHeight;
var clip_bot_QMARK_ = (((node_top + top_height) + cljs.core.deref(drop_height)) > window_height);
var clip_top_QMARK_ = ((node_top - cljs.core.deref(drop_height)) < (0));
if(clip_top_QMARK_){
return false;
} else {
if(clip_bot_QMARK_){
return true;
} else {
return null;
}
}
} else {
return null;
}
}))
));
var press_enter = (function (){
var drop_was_showing_QMARK_ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"on-enter-press","on-enter-press",1454045387).cljs$core$IFn$_invoke$arity$1(set_to_filter);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.seq(cljs.core.deref(filter_text));
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs.core.empty_QMARK_(filtered_choices);
if(and__5140__auto____$2){
var and__5140__auto____$3 = free_text_QMARK_;
if(cljs.core.truth_(and__5140__auto____$3)){
return cljs.core.deref(drop_showing_QMARK_);
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
callback(cljs.core.deref(filter_text));
} else {
if(cljs.core.truth_((function (){var or__5142__auto____$2 = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return enter_drop_QMARK_;
}
})())){
callback(cljs.core.deref(internal_model));
} else {
}
}
}

return cljs.core.not(drop_was_showing_QMARK_);
});
var press_escape = (function (){
var drop_was_showing_QMARK_ = cljs.core.deref(drop_showing_QMARK_);
cancel();

if(cljs.core.truth_(drop_was_showing_QMARK_)){
focus_anchor();
} else {
}

return cljs.core.not(drop_was_showing_QMARK_);
});
var press_tab = (function (shift_key_QMARK_){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
var drop_was_showing_QMARK__17667 = cljs.core.deref(drop_showing_QMARK_);
call_on_change();

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

if(cljs.core.truth_((function (){var and__5140__auto__ = drop_was_showing_QMARK__17667;
if(cljs.core.truth_(and__5140__auto__)){
return shift_key_QMARK_;
} else {
return and__5140__auto__;
}
})())){
focus_anchor();
} else {
}
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return true;
});
var press_arrow = (function (offset){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(filtered_choices);
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(internal_model,re_com.single_dropdown.move_to_new_choice(filtered_choices,id_fn__$1,cljs.core.deref(internal_model),offset));

if(cljs.core.truth_(cancelable_QMARK_)){
} else {
call_on_change();
}
} else {
}

cljs.core.reset_BANG_(drop_showing_QMARK_,true);

cljs.core.reset_BANG_(select_free_text_QMARK_,true);

return true;
});
var press_up = (function (){
return press_arrow((-1));
});
var press_down = (function (){
return press_arrow((1));
});
var press_page_up = (function (){
return press_arrow((- (visible_count() - (1))));
});
var press_page_down = (function (){
return press_arrow((visible_count() - (1)));
});
var press_home_or_end = (function (offset){
if(((cljs.core.not(cljs.core.deref(free_text_focused_QMARK_))) && (cljs.core.seq(filtered_choices)))){
cljs.core.reset_BANG_(internal_model,re_com.single_dropdown.move_to_new_choice(filtered_choices,id_fn__$1,cljs.core.deref(internal_model),offset));

cljs.core.reset_BANG_(select_free_text_QMARK_,true);
} else {
}

return true;
});
var press_home = (function (){
return press_home_or_end(new cljs.core.Keyword(null,"start","start",-355208981));
});
var press_end = (function (){
return press_home_or_end(new cljs.core.Keyword(null,"end","end",-268185958));
});
var key_handler = (function (p1__17577_SHARP_){
if(cljs.core.truth_(disabled_QMARK___$1)){
return false;
} else {
var G__17619 = p1__17577_SHARP_.key;
switch (G__17619) {
case "Enter":
return press_enter();

break;
case "Escape":
return press_escape();

break;
case "Tab":
return press_tab(p1__17577_SHARP_.shiftKey);

break;
case "ArrowUp":
return press_up();

break;
case "ArrowDown":
return press_down();

break;
case "PageUp":
return press_page_up();

break;
case "PageDown":
return press_page_down();

break;
case "Home":
return press_home();

break;
case "End":
return press_end();

break;
default:
var or__5142__auto____$2 = filter_box_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return free_text_QMARK_;
}

}
}
});
var ___$1 = (cljs.core.truth_(tooltip)?cljs.core.add_watch(drop_showing_QMARK_,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),(function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
})):null);
var ___$2 = (cljs.core.truth_(on_drop)?cljs.core.add_watch(drop_showing_QMARK_,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__17580_SHARP_,p2__17581_SHARP_,p3__17578_SHARP_,p4__17579_SHARP_){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(p3__17578_SHARP_);
if(and__5140__auto__){
return p4__17579_SHARP_;
} else {
return and__5140__auto__;
}
})())){
return (on_drop.cljs$core$IFn$_invoke$arity$0 ? on_drop.cljs$core$IFn$_invoke$arity$0() : on_drop.call(null));
} else {
return null;
}
})):null);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.single_dropdown.part_structure,args__$1);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"free-text?","free-text?",1157444543),free_text_QMARK_,new cljs.core.Keyword(null,"drop-showing?","drop-showing?",-104540467),cljs.core.deref(drop_showing_QMARK_),new cljs.core.Keyword(null,"focused?","focused?",-1922723333),cljs.core.deref(free_text_focused_QMARK_),new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),tooltip,new cljs.core.Keyword(null,"chosen-drop","chosen-drop",1349975153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(re_com.util.deref_or_value(drop_above_QMARK_))?new cljs.core.Keyword(null,"above","above",-1286866470):new cljs.core.Keyword(null,"below","below",-926774883))], null)], null),new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_], null);
var text = (((!((cljs.core.deref(internal_model) == null))))?(function (){var G__17621 = re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(internal_model),choices__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn__$1], 0));
return (label_fn__$1.cljs$core$IFn$_invoke$arity$1 ? label_fn__$1.cljs$core$IFn$_invoke$arity$1(G__17621) : label_fn__$1.call(null,G__17621));
})():placeholder);
var chosen_single = part(new cljs.core.Keyword("re-com.single-dropdown","chosen-single","re-com.single-dropdown/chosen-single",1740854052),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.parts.chosen_single,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"drop-showing?","drop-showing?",-104540467),drop_showing_QMARK_,new cljs.core.Keyword(null,"dropdown-click","dropdown-click",840191010),dropdown_click,new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),filter_box_QMARK_,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),key_handler,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),tab_index,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(title_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),text], null):null),text], null),((cljs.core.not(disabled_QMARK___$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.parts.indicator,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"8px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.5px"], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"openable","openable",1470121013),(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359))], null)], null)], null):null)], null)], null)], null));
var chosen_results = part(new cljs.core.Keyword("re-com.single-dropdown","chosen-results","re-com.single-dropdown/chosen-results",2104463724),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_((function (){var and__5140__auto__ = choices_fn_QMARK_;
if(and__5140__auto__){
return new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.single-dropdown","choices-loading","re-com.single-dropdown/choices-loading",21156903),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"i18n","i18n",-563422499),i18n,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(i18n,new cljs.core.Keyword(null,"loading","loading",-737050189),"Loading...")], null)], null)], null))], null):(cljs.core.truth_((function (){var and__5140__auto__ = choices_fn_QMARK_;
if(and__5140__auto__){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.single-dropdown","choices-error","re-com.single-dropdown/choices-error",-2004224712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state))], null)], null)], null))], null):(((cljs.core.count(filtered_choices) > (0)))?(function (){var vec__17622 = re_com.single_dropdown.choices_with_group_headings(filtered_choices,group_fn);
var group_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(0),null);
var group_opt_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17622,(1),null);
var choice_item = (function (p1__17582_SHARP_){
var id = (id_fn__$1.cljs$core$IFn$_invoke$arity$1 ? id_fn__$1.cljs$core$IFn$_invoke$arity$1(p1__17582_SHARP_) : id_fn__$1.call(null,p1__17582_SHARP_));
return part(new cljs.core.Keyword("re-com.single-dropdown","choice-item","re-com.single-dropdown/choice-item",-715535256),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.parts.choice_item,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"label","label",1718410804),(render_fn__$1.cljs$core$IFn$_invoke$arity$1 ? render_fn__$1.cljs$core$IFn$_invoke$arity$1(p1__17582_SHARP_) : render_fn__$1.call(null,p1__17582_SHARP_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),callback,new cljs.core.Keyword(null,"model","model",331153215),internal_model], null)], null));
});
var h_then_choices = (function (p__17625,opts){
var map__17626 = p__17625;
var map__17626__$1 = cljs.core.__destructure_map(map__17626);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17626__$1,new cljs.core.Keyword(null,"group","group",582596132));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.single-dropdown","group-heading","re-com.single-dropdown/group-heading",-832915941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group], null)], null)], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(choice_item,opts));
});
var no_group_names_QMARK_ = (new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.first(group_names)) == null);
var no_headings_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(group_opt_lists));
if(((no_headings_QMARK_) && (no_group_names_QMARK_))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(choice_item,cljs.core.first(group_opt_lists));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(h_then_choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group_names,group_opt_lists], 0));
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.single-dropdown","choices-no-results","re-com.single-dropdown/choices-no-results",-233912787),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"on-no-results-match-click","on-no-results-match-click",1927765286).cljs$core$IFn$_invoke$arity$1(set_to_filter);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.seq(cljs.core.deref(filter_text));
if(and__5140__auto____$1){
return free_text_QMARK_;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
callback(cljs.core.deref(filter_text));
} else {
}

return null;
})], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format((function (){var or__5142__auto____$2 = (function (){var and__5140__auto__ = cljs.core.seq(cljs.core.deref(filter_text));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"no-results-match","no-results-match",-1830285472).cljs$core$IFn$_invoke$arity$1(i18n);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = (function (){var and__5140__auto__ = cljs.core.empty_QMARK_(cljs.core.deref(filter_text));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"no-results","no-results",1269438172).cljs$core$IFn$_invoke$arity$1(i18n);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = new cljs.core.Keyword(null,"no-results-match","no-results-match",-1830285472).cljs$core$IFn$_invoke$arity$1(i18n);
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return "No results match \"%s\"";
}
}
}
})(),cljs.core.deref(filter_text))], null)], null)], null))], null)
)))], null)], null));
var free_text_dropdown_top = part(new cljs.core.Keyword("re-com.single-dropdown","free-text-dropdown-top","re-com.single-dropdown/free-text-dropdown-top",-793736856),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.parts.free_text_dropdown_top,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"dropdown-click","dropdown-click",840191010),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"free-text-sel-range","free-text-sel-range",910028741),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"drop-showing?","drop-showing?",-104540467),new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),new cljs.core.Keyword(null,"internal-model","internal-model",-643165393),new cljs.core.Keyword(null,"free-text-change","free-text-change",1979368274),new cljs.core.Keyword(null,"free-text-focused?","free-text-focused?",-1109034092),new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),new cljs.core.Keyword(null,"capitalize?","capitalize?",-2078576456),new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.Keyword(null,"auto-complete?","auto-complete?",979505177),new cljs.core.Keyword(null,"free-text-input","free-text-input",-1754286599),new cljs.core.Keyword(null,"select-free-text?","select-free-text?",7426714),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)],[tab_index,dropdown_click,placeholder,free_text_sel_range,width,choices__$2,drop_showing_QMARK_,key_handler,internal_model,free_text_change,free_text_focused_QMARK_,filter_box_QMARK_,capitalize_QMARK_,cancel,auto_complete_QMARK_,free_text_input,select_free_text_QMARK_,disabled_QMARK___$1])], null));
var chosen_drop = part(new cljs.core.Keyword("re-com.single-dropdown","chosen-drop","re-com.single-dropdown/chosen-drop",1513653096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top-height","top-height",938042046),top_height,new cljs.core.Keyword(null,"drop-height","drop-height",-1605359619),cljs.core.deref(drop_height),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),body_ref_BANG_], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto____$2 = filter_box_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.not(free_text_QMARK_);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(just_drop_QMARK_);
} else {
return and__5140__auto__;
}
})())?part(new cljs.core.Keyword("re-com.single-dropdown","chosen-search","re-com.single-dropdown/chosen-search",2081812334),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.parts.chosen_search,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-box","filter-box",396686276),(cljs.core.truth_(re_com.util.deref_or_value(filter_box_QMARK_))?new cljs.core.Keyword(null,"showing","showing",798009604):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null),new cljs.core.Keyword(null,"model","model",331153215),filter_text,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),key_handler,new cljs.core.Keyword(null,"drop-showing?","drop-showing?",-104540467),drop_showing_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17583_SHARP_){
return set_filter_text(p1__17583_SHARP_,args__$1,true);
}),new cljs.core.Keyword(null,"filter-placeholder","filter-placeholder",-1736876526),filter_placeholder], null)], null)):null),chosen_results], null)], null)], null));
var chosen_container = part(new cljs.core.Keyword("re-com.single-dropdown","chosen-container","re-com.single-dropdown/chosen-container",839841562),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(args__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style], 0)),args__$1),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style((cljs.core.truth_(width)?"0 0 auto":"auto")),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),anchor_ref_BANG_], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(just_drop_QMARK_)?null:(cljs.core.truth_(free_text_QMARK_)?free_text_dropdown_top:chosen_single)),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__5140__auto__;
}
})())?chosen_drop:null)], null)], null)], null));
if(cljs.core.not(tooltip)){
return chosen_container;
} else {
return part(new cljs.core.Keyword("re-com.single-dropdown","tooltip","re-com.single-dropdown/tooltip",-1711458803),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/single_dropdown.cljs",new cljs.core.Keyword(null,"line","line",212345235),550], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5142__auto____$2 = tooltip_position;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),chosen_container], null)], null));
}
}
};
var re_com$single_dropdown$single_dropdown_render = function (var_args){
var p__17594 = null;
if (arguments.length > 0) {
var G__17703__i = 0, G__17703__a = new Array(arguments.length -  0);
while (G__17703__i < G__17703__a.length) {G__17703__a[G__17703__i] = arguments[G__17703__i + 0]; ++G__17703__i;}
  p__17594 = new cljs.core.IndexedSeq(G__17703__a,0,null);
} 
return re_com$single_dropdown$single_dropdown_render__delegate.call(this,p__17594);};
re_com$single_dropdown$single_dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$single_dropdown$single_dropdown_render.cljs$lang$applyTo = (function (arglist__17704){
var p__17594 = cljs.core.seq(arglist__17704);
return re_com$single_dropdown$single_dropdown_render__delegate(p__17594);
});
re_com$single_dropdown$single_dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$single_dropdown$single_dropdown_render__delegate;
return re_com$single_dropdown$single_dropdown_render;
})()
;
}
};
var G__17648 = function (var_args){
var p__17588 = null;
if (arguments.length > 0) {
var G__17705__i = 0, G__17705__a = new Array(arguments.length -  0);
while (G__17705__i < G__17705__a.length) {G__17705__a[G__17705__i] = arguments[G__17705__i + 0]; ++G__17705__i;}
  p__17588 = new cljs.core.IndexedSeq(G__17705__a,0,null);
} 
return G__17648__delegate.call(this,p__17588);};
G__17648.cljs$lang$maxFixedArity = 0;
G__17648.cljs$lang$applyTo = (function (arglist__17706){
var p__17588 = cljs.core.seq(arglist__17706);
return G__17648__delegate(p__17588);
});
G__17648.cljs$core$IFn$_invoke$arity$variadic = G__17648__delegate;
return G__17648;
})()
;
}));

(re_com.single_dropdown.single_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.single_dropdown.single_dropdown.cljs$lang$applyTo = (function (seq17585){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17585));
}));


//# sourceMappingURL=re_com.single_dropdown.js.map
