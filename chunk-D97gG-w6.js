import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,E,cv as ji,d1 as Op,s,r as r$1,aE as Bp,by as vle,dc as rh,bp as mT,b,aR as ty,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut$1,P as Pp,bw as Ax,aY as cg,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,bd as na,bC as Vp,aQ as dt$1,al as lx,am as pw,an as $0,ap as hw,aq as G0,X as we,as as $l,at as uo,au as fo,cc as Xo,aP as Da,ai as ya,dd as po,aU as IR,a2 as GE,de as TO,a4 as oN,cb as Wx,a6 as cN,df as Yx,dg as ER,cO as co,cQ as wO,av as nx,aw as tx,ay as rx,K as KC,a3 as D3,ax as gx,bq as qx,F as uw,a5 as aN,az as Qy,aB as $x,aA as Jy,c3 as zo}from'./main-6SPFG3VI.js';var ft=()=>({table:"PO Table",angular:"PO-UI"}),Ct=r=>[r],Ye=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&Ul(0,"po-table",0),l&2&&YE("p-items",Jx(2,Ct,Qx(1,ft)));},dependencies:[ty],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table Basic"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-basic/sample-po-table-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-table-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Tt,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ye],encapsulation:2})}return r})();var ce=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(a){return {text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return `${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var ot=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=ji.Medium;filterType=Op.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:Op.startsWith},{label:"Contains",value:Op.contains},{label:"Ends With",value:Op.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(a){this.event=a;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(a){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(a){this.height&&(this.items=a);}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=ji.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(C(ce))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&$l(zo,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first);}},standalone:false,features:[we([ce])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=lx();wl(0,"po-table",1),ut$1("p-all-selected",function(){return o.changeEvent("p-all-selected")})("p-all-unselected",function(){return o.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return o.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return o.changeEvent("p-collapsed")})("p-expanded",function(){return o.changeEvent("p-expanded")})("p-selected",function(){return o.changeEvent("p-selected")})("p-show-more",function(){return o.showMore()})("p-unselected",function(){return o.changeEvent("p-unselected")})("p-delete-items",function(d){return o.deleteItems(d)}),ng(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3),ng(),Ul(4,"po-divider"),wl(5,"div",2)(6,"po-button",4),ut$1("p-click",function(){return o.addItem()}),ng()(),Ul(7,"po-divider"),wl(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),pw("ngModelChange",function(d){return Qy(m),$x(o.columnsName,d)||(o.columnsName=d),Jy(d)}),ut$1("p-change",function(){return o.updateColumns()}),ng(),$0(),ng(),wl(12,"div",2)(13,"po-radio-group",6),pw("ngModelChange",function(d){return Qy(m),$x(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),Jy(d)}),ng(),$0(),wl(14,"po-switch",7),pw("ngModelChange",function(d){return Qy(m),$x(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),Jy(d)}),ng(),$0(),ng(),wl(15,"div",2)(16,"po-checkbox-group",8),pw("ngModelChange",function(d){return Qy(m),$x(o.properties,d)||(o.properties=d),Jy(d)}),ng(),$0(),ng(),wl(17,"div",2)(18,"po-checkbox-group",9),pw("ngModelChange",function(d){return Qy(m),$x(o.actionsDefinition,d)||(o.actionsDefinition=d),Jy(d)}),ut$1("p-change",function(){return o.changeActionOptions()}),ng(),$0(),ng(),wl(19,"div",2)(20,"po-radio-group",10),pw("ngModelChange",function(d){return Qy(m),$x(o.spacing,d)||(o.spacing=d),Jy(d)}),ng(),$0(),ng(),wl(21,"div",2)(22,"po-checkbox-group",11),pw("ngModelChange",function(d){return Qy(m),$x(o.selection,d)||(o.selection=d),Jy(d)}),ut$1("p-change",function(){return o.changeSelectionOptions()}),ng(),$0(),wl(23,"po-radio-group",12),pw("ngModelChange",function(d){return Qy(m),$x(o.filterType,d)||(o.filterType=d),Jy(d)}),ng(),$0(),wl(24,"po-radio-group",13),pw("ngModelChange",function(d){return Qy(m),$x(o.componentsSize,d)||(o.componentsSize=d),Jy(d)}),ng(),$0(),ng(),wl(25,"div",2)(26,"po-input",14),pw("ngModelChange",function(d){return Qy(m),$x(o.literals,d)||(o.literals=d),Jy(d)}),ut$1("p-change",function(){return o.changeLiterals()}),ng(),$0(),wl(27,"po-input",15),pw("ngModelChange",function(d){return Qy(m),$x(o.filteredColumns,d)||(o.filteredColumns=d),Jy(d)}),ut$1("p-change",function(){return o.changeFilteredColumns()}),ng(),$0(),wl(28,"po-number",16),pw("ngModelChange",function(d){return Qy(m),$x(o.height,d)||(o.height=d),Jy(d)}),ng(),$0(),wl(29,"po-number",17),pw("ngModelChange",function(d){return Qy(m),$x(o.maxColumns,d)||(o.maxColumns=d),Jy(d)}),ng(),$0(),ng(),wl(30,"div",2)(31,"po-button",18),ut$1("p-click",function(){return o.restore()}),ng()()(),wl(32,"po-modal",19),Ul(33,"po-info",20),ng();}l&2&&(YE("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),Pp(3),YE("p-value",o.event),Pp(8),hw("ngModel",o.columnsName),YE("p-options",o.columnsOptions),G0(),Pp(2),hw("ngModel",o.columnsDefinition.detail.detail.typeHeader),YE("p-options",o.typeHeaderOptions),G0(),Pp(),hw("ngModel",o.columnsDefinition.detail.detail.hideSelect),G0(),Pp(2),hw("ngModel",o.properties),YE("p-options",o.propertiesOptions),G0(),Pp(2),hw("ngModel",o.actionsDefinition),YE("p-options",o.actionsDefinitionOptions),G0(),Pp(2),hw("ngModel",o.spacing),YE("p-options",o.typeSpacing),G0(),Pp(2),hw("ngModel",o.selection),YE("p-options",o.selectionOptions),G0(),Pp(),hw("ngModel",o.filterType),YE("p-options",o.filterModeOptions),G0(),Pp(),hw("ngModel",o.componentsSize),YE("p-options",o.componentsSizeOptions),G0(),Pp(2),hw("ngModel",o.literals),G0(),Pp(),hw("ngModel",o.filteredColumns),G0(),Pp(),hw("ngModel",o.height),G0(),Pp(),hw("ngModel",o.maxColumns),G0(),Pp(4),YE("p-value",o.currentItem));},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ha,ga,na,Vp,dt$1,ty],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table Labs"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-labs/sample-po-table-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-components-size]="componentsSize"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-change-fixed-columns)="changeEvent('p-change-fixed-columns')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-9"
      p-columns="3"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-3"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      p-columns="4"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="spacing"
      [(ngModel)]="spacing"
      p-columns="4"
      p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      p-label="Spacing"
      [p-options]="typeSpacing"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="selection"
      [(ngModel)]="selection"
      p-columns="4"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="4"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-help="Height of table"
      p-label="Height"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoSearchFilterMode,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  componentsSize: string;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.componentsSize = 'medium';
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12',
    'caption-tag-01',
    'caption-tag-03',
    'caption-tag-06',
    'caption-tag-08',
    'caption-tag-11',
    'caption-tag-13',
    'caption-tag-16',
    'caption-tag-18',
    'caption-tag-21',
    'caption-tag-23',
    'caption-tag-26',
    'caption-tag-28',
    'caption-tag-31',
    'caption-tag-33'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' },
          { value: 'caption-tag-01', color: 'caption-tag-01', label: 'Caption 01' },
          { value: 'caption-tag-03', color: 'caption-tag-03', label: 'Caption 03' },
          { value: 'caption-tag-06', color: 'caption-tag-06', label: 'Caption 06' },
          { value: 'caption-tag-08', color: 'caption-tag-08', label: 'Caption 08' },
          { value: 'caption-tag-11', color: 'caption-tag-11', label: 'Caption 11' },
          { value: 'caption-tag-13', color: 'caption-tag-13', label: 'Caption 13' },
          { value: 'caption-tag-16', color: 'caption-tag-16', label: 'Caption 16' },
          { value: 'caption-tag-18', color: 'caption-tag-18', label: 'Caption 18' },
          { value: 'caption-tag-21', color: 'caption-tag-21', label: 'Caption 21' },
          { value: 'caption-tag-23', color: 'caption-tag-23', label: 'Caption 23' },
          { value: 'caption-tag-26', color: 'caption-tag-26', label: 'Caption 26' },
          { value: 'caption-tag-28', color: 'caption-tag-28', label: 'Caption 28' },
          { value: 'caption-tag-31', color: 'caption-tag-31', label: 'Caption 31' },
          { value: 'caption-tag-33', color: 'caption-tag-33', label: 'Caption 33' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'caption-tag-08' : 'caption-tag-13';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-table-labs"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,At,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ot],encapsulation:2})}return r})();var kt=["table"],lt=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=s(r$1({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(a){this.sampleService=a;}onChangeColumns(a){try{this.columns=JSON.parse(a);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&$l(kt,5),l&2){let m;uo(m=fo())&&(o.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=lx();wl(0,"div",1)(1,"po-input",2),pw("ngModelChange",function(d){return Qy(m),$x(o.service,d)||(o.service=d),Jy(d)}),ut$1("p-change",function(){return o.changeService(o.service)}),ng(),$0(),ng(),wl(2,"div",1),Ul(3,"po-divider",3),wl(4,"po-textarea",4),pw("ngModelChange",function(d){return Qy(m),$x(o.stringColumns,d)||(o.stringColumns=d),Jy(d)}),ut$1("p-change",function(d){return o.onChangeColumns(d)}),ng(),$0(),ng(),wl(5,"div",1),Ul(6,"po-divider",5),wl(7,"po-input",6),pw("ngModelChange",function(d){return Qy(m),$x(o.key,d)||(o.key=d),Jy(d)}),ng(),$0(),wl(8,"po-input",7),pw("ngModelChange",function(d){return Qy(m),$x(o.value,d)||(o.value=d),Jy(d)}),ng(),$0(),ng(),wl(9,"div",1)(10,"po-button",8),ut$1("p-click",function(){return o.addFilter(o.key,o.value)}),ng()(),wl(11,"div",1)(12,"po-disclaimer-group",9),ut$1("p-remove",function(d){return o.removeItem(d)})("p-remove-all",function(){return o.removeAllItems()}),ng()(),wl(13,"div",1),Ul(14,"po-table",10,0),ng();}l&2&&(Pp(),hw("ngModel",o.service),G0(),Pp(3),hw("ngModel",o.stringColumns),YE("p-rows",5),G0(),Pp(3),hw("ngModel",o.key),G0(),Pp(),hw("ngModel",o.value),G0(),Pp(2),YE("p-disabled",!o.key||!o.value),Pp(2),YE("p-disclaimers",o.filters),Pp(2),YE("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[iY,ck,Pe,Xo,di,Yo,Da,ty],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table using API"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-table-with-api"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ft,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,lt],encapsulation:2})}return r})();var be=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function qt(r,K){if(r&1){let a=lx();wl(0,"po-widget",2)(1,"div",3)(2,"po-select",4),pw("ngModelChange",function(o){let m=Qy(a).$implicit;return $x(m.status,o)||(m.status=o),Jy(o)}),ng(),$0(),ng(),wl(3,"div",3),Ul(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),ng()();}if(r&2){let a=K.$implicit,l=gx();YE("p-title",qx("Transport detail ",a.code)),Pp(2),hw("ngModel",a.status),YE("p-options",l.statusOptions),G0(),Pp(2),YE("p-value",a.batch_product),Pp(),YE("p-value",a.driver),Pp(),YE("p-value",a.license_plate);}}var mt=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(C(be))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([be])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(wl(0,"po-table",0),GE(1,qt,7,7,"ng-template",1),ng()),l&2&&(YE("p-auto-collapse",true)("p-columns",o.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",o.items)("p-sort",true)("p-striped",true),Pp(),YE("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered));},dependencies:[iY,ck,ya,Vp,ty,po,IR],encapsulation:2,changeDetection:1})}return r})();var Rt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table - Transport"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-transport/sample-po-table-transport.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'caption-tag-23', label: 'Delivered' },
          { value: 'transport', color: 'caption-tag-14', label: 'Transport' },
          { value: 'production', color: 'caption-tag-03', label: 'Production' },
          { value: 'stock', color: 'caption-tag-33', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-table-transport"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Rt,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,mt],encapsulation:2})}return r})();var Ee=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var dt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>s(r$1({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}});}confirmItems(a){a.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(a){a.value&&(this.total-=a.value);}deleteItems(a){this.items=a;}details(a){this.detail=a,this.poModal.open();}remove(a){this.poTable.removeItem(a);}discount(a){if(!a.disableDiscount){let l=s(r$1({},a),{value:a.value-a.value*.2,disableDiscount:true});this.poTable.updateItem(a,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(a){a.value&&(this.total+=a.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(a){localStorage.setItem("initial-columns",a);}getDescription(a){return `Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(C(Ee),C(Bp),C(vle))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&$l(zo,7)(ER,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first),uo(m=fo())&&(o.poTable=m.first);}},standalone:false,features:[we([Ee,vle])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(wl(0,"div",0),Ux(1,"Choose one or more promotional airfares"),ng(),Ul(2,"po-divider"),wl(3,"po-table",1),ut$1("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),ng(),Ul(4,"po-divider")(5,"po-info",2),oN(6,"currency"),Ul(7,"po-info",3),wl(8,"div",4)(9,"po-button",5),ut$1("p-click",function(){return o.addToCart()}),ng(),wl(10,"po-button",6),ut$1("p-click",function(){return o.expandAll()}),ng(),wl(11,"po-button",7),ut$1("p-click",function(){return o.collapseAll()}),ng()(),wl(12,"po-modal",8),Ul(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),ng()),l&2&&(Pp(3),YE("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",false),Pp(2),YE("p-value",Wx(cN(6,21,o.total,"USD"))),Pp(2),YE("p-value",o.totalExpanded),Pp(5),YE("p-title",Yx("",o.detail?.destination," - ",o.detail?.country)),Pp(),YE("p-value",o.detail==null?null:o.detail.airline),Pp(),YE("p-value",o.detail==null?null:o.detail.initials),Pp(),YE("p-value",o.detail==null?null:o.detail.class));},dependencies:[Pe,di,Vp,dt$1,ty,TO],encapsulation:2,changeDetection:1})}return r})();var Ht=r=>({"docs-sample-code-tabs":r}),pt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table - Airfare"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="$safeNavigationMigration(detail?.airline)"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="$safeNavigationMigration(detail?.initials)"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="$safeNavigationMigration(detail?.class)"> </po-info>
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'caption-tag-13', label: 'Available' },
          { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
          { value: 'closed', color: 'caption-tag-03', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-table-airfare"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ht,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,dt],encapsulation:2})}return r})();var H=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(H||{});var Se=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=false){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],fe=m.split(".")[1];return a[d][fe]<l[d][fe]?p===rh.Ascending?-1:1:p===rh.Ascending?1:-1}else return a[m]<l[m]?p===rh.Ascending?-1:1:p===rh.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Qt(r,K){if(r&1&&(wl(0,"div"),Ux(1),oN(2,"uppercase"),ng()),r&2){let a=K.$implicit;Ax(qx("badge ",a)),Pp(),uw(aN(2,4,a));}}function Gt(r,K){if(r&1&&(wl(0,"ul")(1,"li",4),Ux(2),ng(),Ul(3,"po-divider"),ng()),r&2){let a=K.$implicit;Pp(2),uw(a);}}var ct=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(a){return a?.component?.status===H.Experimental?"caption-tag-08":"caption-tag-13"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open();}goToDocumentation(a){this.router.navigate([a?.component?.link]);}showMore(a){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=false;},4e3);}sort(a){this.items=this.getItems(a);}showAlert(a){alert(a);}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite;}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(C(Se),C(Cn))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&$l(zo,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first);}},standalone:false,features:[we([Se])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,o){l&1&&(wl(0,"div",0),Ux(1,"PO UI Library"),ng(),Ul(2,"po-divider"),wl(3,"po-table",1),ut$1("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),GE(4,Qt,3,6,"ng-template",2),ng(),wl(5,"po-modal",3),nx(6,Gt,4,1,"ul",null,tx),ng()),l&2&&(Pp(3),YE("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",true),Pp(),YE("p-property","component.type"),Pp(),YE("p-title",Yx("",o.title," - ",o.extraInformation?.component)),Pp(),rx(o.extraInformation?.extras));},dependencies:[di,dt$1,ty,co,wO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var $t=r=>({"docs-sample-code-tabs":r}),ut=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table - Po Field Components"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-components/sample-po-table-components.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<po-divider />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  @for (extra of extraInformation?.extras; track extra) {
    <ul>
      <li class="po-font-text">{ { extra }}</li>
      <po-divider />
    </ul>
  }
</po-modal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-components/sample-po-table-components.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'caption-tag-13',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'caption-tag-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'caption-tag-03',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10%',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'caption-tag-08' : 'caption-tag-13';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'caption-tag-08' : 'caption-tag-13';
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-table-components/sample-po-table-components.enum.ts"),ng(),wl(23,"pre",9),Ux(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),ng(),wl(25,"label",6),Ux(26,"sample-po-table-components/sample-po-table-components.service.ts"),ng(),wl(27,"pre",9),Ux(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),ng()()(),wl(29,"po-tab",10)(30,"div")(31,"label",6),Ux(32,"sample-po-table-components/sample-po-table-components.component.css"),ng(),wl(33,"pre",11),Ux(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),ng()()()()(),wl(35,"div",12),Ul(36,"sample-po-table-components"),ng(),Ul(37,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,$t,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ct],encapsulation:2})}return r})();var xe=(()=>{class r{http;constructor(a){this.http=a;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(mT("items"))}static \u0275fac=function(l){return new(l||r)(b(KC))};static \u0275prov=E({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Yt=["POItemsOri"],Zt=["POItemsSelected"],bt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)});}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else {let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(a){this.items=a,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(C(xe))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&$l(Yt,7)(Zt,7),l&2){let m;uo(m=fo())&&(o.poItemsOri=m.first),uo(m=fo())&&(o.poItemsSelected=m.first);}},standalone:false,features:[we([xe])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){l&1&&(wl(0,"div",2)(1,"div",3)(2,"div",4),Ux(3,"Choose one or more heroes for your team"),ng(),wl(4,"po-table",5,0),ut$1("p-selected",function(p){return o.changeOptions(p,"new")})("p-unselected",function(p){return o.changeOptions(p,"change")})("p-delete-items",function(p){return o.deleteItems(p)}),ng()(),wl(6,"div",3)(7,"div",4),Ux(8,"Here your chosen heroes"),ng(),Ul(9,"po-table",6,1),ng()()),l&2&&(Pp(4),YE("p-columns",o.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",o.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Pp(5),YE("p-columns",o.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[ty],encapsulation:2,changeDetection:1})}return r})();var tn=r=>({"docs-sample-code-tabs":r}),Et=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table - Heroes"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-table-heroes"),ng(),Ul(27,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,tn,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,bt],encapsulation:2})}return r})();var on=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),an=r=>[r],St=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(wl(0,"div",0),Ux(1,` Choose one column and drag to another horizontal position in the table and drop
`),ng(),Ul(2,"po-divider")(3,"po-table",1)),l&2&&(Pp(3),YE("p-items",Jx(5,an,Qx(4,on)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[di,ty],encapsulation:2,changeDetection:1})}return r})();var rn=r=>({"docs-sample-code-tabs":r}),xt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Table Drag and Drop"),ng(),wl(4,"a",2),ut$1("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-table-draggable"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,rn,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,St],encapsulation:2})}return r})();var ht=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4661,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoTableModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-table"),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoTableComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),ng(),wl(15,"p"),Ux(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),wl(17,"strong"),Ux(18,"Carregar mais resultados"),ng(),Ux(19,"."),ng(),wl(20,"blockquote")(21,"p"),Ux(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),wl(23,"a",6)(24,"code"),Ux(25,"p-table-row-template"),ng()(),Ux(26,"."),ng()(),wl(27,"blockquote")(28,"p"),Ux(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),wl(30,"a",7)(31,"code"),Ux(32,"p-table-column-template"),ng()(),Ux(33,`
e `),wl(34,"a",8)(35,"code"),Ux(36,"p-table-cell-template"),ng()(),Ux(37,"."),ng()(),wl(38,"p"),Ux(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),ng(),wl(40,"p"),Ux(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),wl(42,"em"),Ux(43,"scroll"),ng(),Ux(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),ng(),wl(45,"h4"),Ux(46,"Tokens customiz\xE1veis"),ng(),wl(47,"p"),Ux(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(49,"blockquote")(50,"p"),Ux(51,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(52,"a",9),Ux(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(54,"."),ng()(),wl(55,"table")(56,"thead")(57,"tr")(58,"th"),Ux(59,"Propriedade"),ng(),wl(60,"th"),Ux(61,"Descri\xE7\xE3o"),ng(),wl(62,"th"),Ux(63,"Valor Padr\xE3o"),ng()()(),wl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),Ux(68,"Default Values"),ng()(),Ul(69,"td")(70,"td"),ng(),wl(71,"tr")(72,"td")(73,"code"),Ux(74,"--font-family"),ng()(),wl(75,"td"),Ux(76,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(77,"td")(78,"code"),Ux(79,"var(--font-family-theme)"),ng()()(),wl(80,"tr")(81,"td")(82,"code"),Ux(83,"--background-color"),ng()(),wl(84,"td"),Ux(85,"Cor de background"),ng(),wl(86,"td")(87,"code"),Ux(88,"var(--color-neutral-light-00)"),ng()()(),wl(89,"tr")(90,"td")(91,"code"),Ux(92,"--color"),ng()(),wl(93,"td"),Ux(94,"Cor principal da table"),ng(),wl(95,"td")(96,"code"),Ux(97,"var(--color-neutral-dark-95)"),ng()()(),wl(98,"tr")(99,"td")(100,"code"),Ux(101,"--background-striped-color"),ng()(),wl(102,"td"),Ux(103,"Cor do background quando striped"),ng(),wl(104,"td")(105,"code"),Ux(106,"var(--color-neutral-light-05)"),ng()()(),wl(107,"tr")(108,"td")(109,"code"),Ux(110,"--color-line"),ng()(),wl(111,"td"),Ux(112,"Cor das linhas"),ng(),wl(113,"td")(114,"code"),Ux(115,"var(--color-neutral-mid-40)"),ng()()(),wl(116,"tr")(117,"td")(118,"strong"),Ux(119,"Hover"),ng()(),Ul(120,"td")(121,"td"),ng(),wl(122,"tr")(123,"td")(124,"code"),Ux(125,"--color-hover"),ng()(),wl(126,"td"),Ux(127,"Cor principal no estado hover"),ng(),wl(128,"td")(129,"code"),Ux(130,"var(--color-action-hover)"),ng()()(),wl(131,"tr")(132,"td")(133,"code"),Ux(134,"--background-color-hover"),ng()(),wl(135,"td"),Ux(136,"Cor de background no estado hover"),ng(),wl(137,"td")(138,"code"),Ux(139,"var(--color-brand-01-lighter)"),ng()()(),wl(140,"tr")(141,"td")(142,"strong"),Ux(143,"Focused"),ng()(),Ul(144,"td")(145,"td"),ng(),wl(146,"tr")(147,"td")(148,"code"),Ux(149,"--outline-color-focused"),ng()(),wl(150,"td"),Ux(151,"Cor do outline do estado de focus"),ng(),wl(152,"td")(153,"code"),Ux(154,"var(--color-action-focus)"),ng()()(),wl(155,"tr")(156,"td")(157,"strong"),Ux(158,"Disabled"),ng()(),Ul(159,"td")(160,"td"),ng(),wl(161,"tr")(162,"td")(163,"code"),Ux(164,"--color-disabled"),ng()(),wl(165,"td"),Ux(166,"Cor principal no estado disabled"),ng(),wl(167,"td")(168,"code"),Ux(169,"var(--color-neutral-mid-40)"),ng()()(),wl(170,"tr")(171,"td")(172,"strong"),Ux(173,"Headline"),ng()(),Ul(174,"td")(175,"td"),ng(),wl(176,"tr")(177,"td")(178,"code"),Ux(179,"--background-color-headline"),ng(),Ux(180," \xA0"),ng(),wl(181,"td"),Ux(182,"Cor do cabe\xE7alho"),ng(),wl(183,"td")(184,"code"),Ux(185,"var(--color-neutral-light-10)"),ng()()(),wl(186,"tr")(187,"td")(188,"code"),Ux(189,"--font-weight-headline"),ng()(),wl(190,"td"),Ux(191,"Peso da fonte do cabe\xE7alho"),ng(),wl(192,"td")(193,"code"),Ux(194,"var(--font-weight-bold)"),ng()()(),wl(195,"tr")(196,"td")(197,"strong"),Ux(198,"Selected"),ng()(),Ul(199,"td")(200,"td"),ng(),wl(201,"tr")(202,"td")(203,"code"),Ux(204,"--background-color-selected"),ng(),Ux(205,"\xA0"),ng(),wl(206,"td"),Ux(207,"Cor de background no estado de selecionado"),ng(),wl(208,"td")(209,"code"),Ux(210,"var(--color-brand-01-lightest)"),ng()()(),wl(211,"tr")(212,"td")(213,"strong"),Ux(214,"Actived"),ng()(),Ul(215,"td")(216,"td"),ng(),wl(217,"tr")(218,"td")(219,"code"),Ux(220,"--color-actived"),ng()(),wl(221,"td"),Ux(222,"Cor do texto no estado de selecionado"),ng(),wl(223,"td")(224,"code"),Ux(225,"var(--color-neutral-dark-90)"),ng()()(),wl(226,"tr")(227,"td")(228,"code"),Ux(229,"--background-color-actived"),ng()(),wl(230,"td"),Ux(231,"Cor de background no estado de selecionado"),ng(),wl(232,"td")(233,"code"),Ux(234,"var(--color-brand-01-light)"),ng()()()()()(),wl(235,"div",10)(236,"h4",11),Ux(237,"Seletor"),ng(),wl(238,"pre",12),Ux(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-fixed-columns)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-components-size="string"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="string"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),ng()(),wl(240,"h4",13),Ux(241,"Propriedades"),ng(),wl(242,"table",14)(243,"tr",15)(244,"th",16),Ux(245,"Nome"),ng(),wl(246,"th",16),Ux(247,"Tipo"),ng(),wl(248,"th",16),Ux(249,"Padr\xE3o"),ng(),wl(250,"th",16),Ux(251,"Descri\xE7\xE3o"),ng()(),wl(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),Ux(256," p-actions-right"),Ul(257,"br"),ng()()(),wl(258,"td",21)(259,"code",22),Ux(260,"boolean"),ng()(),wl(261,"td",23)(262,"p")(263,"code"),Ux(264,"false"),ng()()(),wl(265,"td",24)(266,"em")(267,"strong"),Ux(268,"(opcional)"),ng()(),wl(269,"p"),Ux(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),ng()()(),wl(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),Ux(275," p-actions"),Ul(276,"br"),ng()()(),wl(277,"td",21)(278,"code",25),Ux(279,"PoTableAction[]"),ng()(),wl(280,"td",23),Ux(281,"-"),ng(),wl(282,"td",24)(283,"em")(284,"strong"),Ux(285,"(opcional)"),ng()(),wl(286,"p"),Ux(287,"Define uma lista de a\xE7\xF5es."),ng(),wl(288,"p"),Ux(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),wl(290,"a",26)(291,"strong"),Ux(292,"an an-dots-three"),ng()(),Ux(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),ng(),wl(294,"p")(295,"strong"),Ux(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),ng()(),wl(297,"ul")(298,"li"),Ux(299,"a lista conter valores inv\xE1lidos ou indefinidos."),ng(),wl(300,"li"),Ux(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),ng()()()(),wl(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),Ux(306," (p-all-selected)"),Ul(307,"br"),ng()()(),wl(308,"td",21)(309,"code",29),Ux(310,"EventEmitter"),ng()(),wl(311,"td",23),Ux(312,"-"),ng(),wl(313,"td",24)(314,"em")(315,"strong"),Ux(316,"(opcional)"),ng()(),wl(317,"p"),Ux(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),wl(319,"em"),Ux(320,"checkbox"),ng(),Ux(321," que seleciona todas as linhas."),ng()()(),wl(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),Ux(326," (p-all-unselected)"),Ul(327,"br"),ng()()(),wl(328,"td",21)(329,"code",29),Ux(330,"EventEmitter"),ng()(),wl(331,"td",23),Ux(332,"-"),ng(),wl(333,"td",24)(334,"em")(335,"strong"),Ux(336,"(opcional)"),ng()(),wl(337,"p"),Ux(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),wl(339,"em"),Ux(340,"checkbox"),ng(),Ux(341," que seleciona todas as linhas."),ng()()(),wl(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),Ux(346," p-auto-collapse"),Ul(347,"br"),ng()()(),wl(348,"td",21)(349,"code",22),Ux(350,"boolean"),ng()(),wl(351,"td",23)(352,"p")(353,"code"),Ux(354,"false"),ng()()(),wl(355,"td",24)(356,"em")(357,"strong"),Ux(358,"(opcional)"),ng()(),wl(359,"p"),Ux(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),ng()()(),wl(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),Ux(365," (p-change-fixed-columns)"),Ul(366,"br"),ng()()(),wl(367,"td",21)(368,"code",29),Ux(369,"EventEmitter"),ng()(),wl(370,"td",23),Ux(371,"-"),ng(),wl(372,"td",24)(373,"em")(374,"strong"),Ux(375,"(opcional)"),ng()(),wl(376,"p"),Ux(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),ng(),wl(378,"p"),Ux(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),ng(),wl(380,"blockquote")(381,"p"),Ux(382,"Incompat\xEDvel com "),wl(383,"code"),Ux(384,"p-hide-action-fixed-columns"),ng(),Ux(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),ng()()()(),wl(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),Ux(390," (p-change-visible-columns)"),Ul(391,"br"),ng()()(),wl(392,"td",21)(393,"code",29),Ux(394,"EventEmitter"),ng()(),wl(395,"td",23),Ux(396,"-"),ng(),wl(397,"td",24)(398,"em")(399,"strong"),Ux(400,"(opcional)"),ng()(),wl(401,"p"),Ux(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),ng(),wl(403,"p"),Ux(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng()()(),wl(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),Ux(409," (p-collapsed)"),Ul(410,"br"),ng()()(),wl(411,"td",21)(412,"code",29),Ux(413,"EventEmitter"),ng()(),wl(414,"td",23),Ux(415,"-"),ng(),wl(416,"td",24)(417,"em")(418,"strong"),Ux(419,"(opcional)"),ng()(),wl(420,"p"),Ux(421,"Evento executado ao colapsar uma linha do "),wl(422,"code"),Ux(423,"po-table"),ng(),Ux(424,"."),ng(),wl(425,"blockquote")(426,"p"),Ux(427,"Como par\xE2metro o componente envia o item colapsado."),ng()()()(),wl(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),Ux(432," (p-restore-column-manager)"),Ul(433,"br"),ng()()(),wl(434,"td",21)(435,"code",29),Ux(436,"EventEmitter"),ng()(),wl(437,"td",23),Ux(438,"-"),ng(),wl(439,"td",24)(440,"em")(441,"strong"),Ux(442,"(opcional)"),ng()(),wl(443,"p"),Ux(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),ng(),wl(445,"p"),Ux(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng()()(),wl(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),Ux(451," p-columns"),Ul(452,"br"),ng()()(),wl(453,"td",21)(454,"code",30),Ux(455,"PoTableColumn[]"),ng()(),wl(456,"td",23),Ux(457,"-"),ng(),wl(458,"td",24)(459,"em")(460,"strong"),Ux(461,"(opcional)"),ng()(),wl(462,"p"),Ux(463,"Lista das colunas da tabela, deve receber um "),wl(464,"em"),Ux(465,"array"),ng(),Ux(466," de objetos que implementam a interface "),wl(467,"code"),Ux(468,"PoTableColumn"),ng(),Ux(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),ng(),wl(470,"blockquote")(471,"p"),Ux(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),ng()()()(),wl(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),Ux(477," p-components-size"),Ul(478,"br"),ng()()(),wl(479,"td",21)(480,"code",31),Ux(481,"string"),ng()(),wl(482,"td",23)(483,"p")(484,"code"),Ux(485,"medium"),ng()()(),wl(486,"td",24)(487,"em")(488,"strong"),Ux(489,"(opcional)"),ng()(),wl(490,"p"),Ux(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),ng(),wl(492,"ul")(493,"li")(494,"code"),Ux(495,"small"),ng(),Ux(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(497,"li")(498,"code"),Ux(499,"medium"),ng(),Ux(500,": aplica a medida medium de cada componente."),ng()(),wl(501,"blockquote")(502,"p"),Ux(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(504,"code"),Ux(505,"medium"),ng(),Ux(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(507,"a",32),Ux(508,"po-theme"),ng(),Ux(509,"."),ng()()()(),wl(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),Ux(514," p-container"),Ul(515,"br"),ng()()(),wl(516,"td",21)(517,"code",31),Ux(518,"string"),ng()(),wl(519,"td",23)(520,"p")(521,"code"),Ux(522,"border"),ng()()(),wl(523,"td",24)(524,"em")(525,"strong"),Ux(526,"(opcional)"),ng()(),wl(527,"p"),Ux(528,"Adiciona um contorno arredondado ao "),wl(529,"code"),Ux(530,"po-table"),ng(),Ux(531,", as op\xE7\xF5es s\xE3o:"),ng(),wl(532,"ul")(533,"li")(534,"code"),Ux(535,"border"),ng(),Ux(536,": com bordas/linhas."),ng(),wl(537,"li")(538,"code"),Ux(539,"shadow"),ng(),Ux(540,": com sombras."),ng()()()(),wl(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),Ux(545," p-draggable"),Ul(546,"br"),ng()()(),wl(547,"td",21)(548,"code",22),Ux(549,"boolean"),ng()(),wl(550,"td",23)(551,"p")(552,"code"),Ux(553,"false"),ng()()(),wl(554,"td",24)(555,"em")(556,"strong"),Ux(557,"(opcional)"),ng()(),wl(558,"p"),Ux(559,"Habilita o modo drag and drop para as colunas da tabela."),ng()()(),wl(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),Ux(564," (p-delete-items)"),Ul(565,"br"),ng()()(),wl(566,"td",21)(567,"code",29),Ux(568,"EventEmitter"),ng()(),wl(569,"td",23),Ux(570,"-"),ng(),wl(571,"td",24)(572,"em")(573,"strong"),Ux(574,"(opcional)"),ng()(),wl(575,"p"),Ux(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),ng(),wl(577,"pre")(578,"code"),Ux(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),ng()(),wl(580,"blockquote")(581,"p"),Ux(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),ng()()()(),wl(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),Ux(587," (p-expanded)"),Ul(588,"br"),ng()()(),wl(589,"td",21)(590,"code",29),Ux(591,"EventEmitter"),ng()(),wl(592,"td",23),Ux(593,"-"),ng(),wl(594,"td",24)(595,"em")(596,"strong"),Ux(597,"(opcional)"),ng()(),wl(598,"p"),Ux(599,"Evento executado ao expandir uma linha do "),wl(600,"code"),Ux(601,"po-table"),ng(),Ux(602,"."),ng(),wl(603,"blockquote")(604,"p"),Ux(605,"Como par\xE2metro o componente envia o item expandido."),ng()()()(),wl(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),Ux(610," p-filter-type"),Ul(611,"br"),ng()()(),wl(612,"td",21)(613,"code",33),Ux(614,"PoSearchFilterMode"),ng()(),wl(615,"td",23)(616,"p")(617,"code"),Ux(618,"startsWith"),ng()()(),wl(619,"td",24)(620,"em")(621,"strong"),Ux(622,"(opcional)"),ng()(),wl(623,"p"),Ux(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),ng(),wl(625,"blockquote")(626,"p"),Ux(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),ng()()()(),wl(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),Ux(632," p-filtered-columns"),Ul(633,"br"),ng()()(),wl(634,"td",21)(635,"code",34),Ux(636,"Array<string>"),ng()(),wl(637,"td",23),Ux(638,"-"),ng(),wl(639,"td",24)(640,"em")(641,"strong"),Ux(642,"(opcional)"),ng()(),wl(643,"p"),Ux(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),ng()()(),wl(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),Ux(649," p-height"),Ul(650,"br"),ng()()(),wl(651,"td",21)(652,"code",35),Ux(653,"number"),ng()(),wl(654,"td",23),Ux(655,"-"),ng(),wl(656,"td",24)(657,"em")(658,"strong"),Ux(659,"(opcional)"),ng()(),wl(660,"p"),Ux(661,"Define a altura da tabela em "),wl(662,"em"),Ux(663,"pixels"),ng(),Ux(664," e fixa o cabe\xE7alho."),ng(),wl(665,"p"),Ux(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),wl(667,"code"),Ux(668,"virtual-scroll"),ng(),Ux(669," na tabela melhorando a performance."),ng()()(),wl(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),Ux(674," p-hide-action-fixed-columns"),Ul(675,"br"),ng()()(),wl(676,"td",21)(677,"code",22),Ux(678,"boolean"),ng()(),wl(679,"td",23)(680,"p")(681,"code"),Ux(682,"false"),ng()()(),wl(683,"td",24)(684,"em")(685,"strong"),Ux(686,"(opcional)"),ng()(),wl(687,"p"),Ux(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),ng()()(),wl(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),Ux(693," p-hide-batch-actions"),Ul(694,"br"),ng()()(),wl(695,"td",21)(696,"code",22),Ux(697,"boolean"),ng()(),wl(698,"td",23)(699,"p")(700,"code"),Ux(701,"true"),ng()()(),wl(702,"td",24)(703,"em")(704,"strong"),Ux(705,"(opcional)"),ng()(),wl(706,"p"),Ux(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),ng()()(),wl(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),Ux(712," p-hide-columns-manager"),Ul(713,"br"),ng()()(),wl(714,"td",21)(715,"code",22),Ux(716,"boolean"),ng()(),wl(717,"td",23)(718,"p")(719,"code"),Ux(720,"false"),ng()()(),wl(721,"td",24)(722,"em")(723,"strong"),Ux(724,"(opcional)"),ng()(),wl(725,"p"),Ux(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),ng()()(),wl(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),Ux(731," p-hide-detail"),Ul(732,"br"),ng()()(),wl(733,"td",21)(734,"code",22),Ux(735,"boolean"),ng()(),wl(736,"td",23)(737,"p")(738,"code"),Ux(739,"false"),ng()()(),wl(740,"td",24)(741,"em")(742,"strong"),Ux(743,"(opcional)"),ng()(),wl(744,"p"),Ux(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),ng()()(),wl(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),Ux(750," p-hide-select-all"),Ul(751,"br"),ng()()(),wl(752,"td",21)(753,"code",22),Ux(754,"boolean"),ng()(),wl(755,"td",23)(756,"p")(757,"code"),Ux(758,"false"),ng()()(),wl(759,"td",24)(760,"p"),Ux(761,"Esconde o "),wl(762,"em"),Ux(763,"checkbox"),ng(),Ux(764," para sele\xE7\xE3o de todas as linhas."),ng(),wl(765,"blockquote")(766,"p"),Ux(767,"Sempre receber\xE1 "),wl(768,"em"),Ux(769,"true"),ng(),Ux(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),ng()()()(),wl(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),Ux(775," p-hide-table-search"),Ul(776,"br"),ng()()(),wl(777,"td",21)(778,"code",22),Ux(779,"boolean"),ng()(),wl(780,"td",23)(781,"p")(782,"code"),Ux(783,"true"),ng()()(),wl(784,"td",24)(785,"em")(786,"strong"),Ux(787,"(opcional)"),ng()(),wl(788,"p"),Ux(789,"Permite que o campo de pesquisa seja escondido."),ng()()(),wl(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),Ux(794," p-infinite-scroll"),Ul(795,"br"),ng()()(),wl(796,"td",21)(797,"code",22),Ux(798,"boolean"),ng()(),wl(799,"td",23)(800,"p")(801,"code"),Ux(802,"false"),ng()()(),wl(803,"td",24)(804,"em")(805,"strong"),Ux(806,"(opcional)"),ng()(),wl(807,"p"),Ux(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),wl(809,"code"),Ux(810,"p-show-more"),ng(),Ux(811,"."),ng(),wl(812,"p")(813,"strong"),Ux(814,"Regras de utiliza\xE7\xE3o:"),ng()(),wl(815,"ul")(816,"li"),Ux(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),wl(818,"code"),Ux(819,"p-height"),ng(),Ux(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),ng()()()(),wl(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),Ux(825," p-infinite-scroll-distance"),Ul(826,"br"),ng()()(),wl(827,"td",21)(828,"code",35),Ux(829,"number"),ng()(),wl(830,"td",23),Ux(831,"-"),ng(),wl(832,"td",24)(833,"em")(834,"strong"),Ux(835,"(opcional)"),ng()(),wl(836,"p"),Ux(837,"Define o percentual necess\xE1rio para disparar o evento "),wl(838,"code"),Ux(839,"p-show-more"),ng(),Ux(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),ng(),wl(841,"p")(842,"strong"),Ux(843,"Exemplos:"),ng()(),wl(844,"ul")(845,"li"),Ux(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),wl(847,"code"),Ux(848,"p-show-more"),ng(),Ux(849," ser\xE1 disparado."),ng()()()(),wl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),Ux(854," p-items"),Ul(855,"br"),ng()()(),wl(856,"td",21)(857,"code",36),Ux(858,"any[]"),ng()(),wl(859,"td",23),Ux(860,"-"),ng(),wl(861,"td",24)(862,"p"),Ux(863,"Lista de itens da tabela."),ng(),wl(864,"blockquote")(865,"p"),Ux(866,"Se falso, ser\xE1 inicializado como um "),wl(867,"em"),Ux(868,"array"),ng(),Ux(869," vazio."),ng()()()(),wl(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),Ux(874," p-literals"),Ul(875,"br"),ng()()(),wl(876,"td",21)(877,"code",37),Ux(878,"PoTableLiterals"),ng()(),wl(879,"td",23),Ux(880,"-"),ng(),wl(881,"td",24)(882,"em")(883,"strong"),Ux(884,"(opcional)"),ng()(),wl(885,"p"),Ux(886,"Objeto com as literais usadas no "),wl(887,"code"),Ux(888,"po-table"),ng(),Ux(889,"."),ng(),wl(890,"p"),Ux(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),ng(),wl(892,"pre")(893,"code"),Ux(894,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};
`),ng()(),wl(895,"p"),Ux(896,"Ou passando apenas as literais que deseja customizar:"),ng(),wl(897,"pre")(898,"code"),Ux(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),ng()(),wl(900,"p"),Ux(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(902,"pre")(903,"code"),Ux(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),ng()(),wl(905,"blockquote")(906,"p"),Ux(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),wl(908,"a",38)(909,"code"),Ux(910,"PoI18nService"),ng()(),Ux(911," ou do browser."),ng()()()(),wl(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),Ux(916," p-loading"),Ul(917,"br"),ng()()(),wl(918,"td",21)(919,"code",22),Ux(920,"boolean"),ng()(),wl(921,"td",23)(922,"p")(923,"code"),Ux(924,"false"),ng()()(),wl(925,"td",24)(926,"em")(927,"strong"),Ux(928,"(opcional)"),ng()(),wl(929,"p"),Ux(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),wl(931,"em"),Ux(932,"table"),ng(),Ux(933,"."),ng()()(),wl(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),Ux(938," p-loading-show-more"),Ul(939,"br"),ng()()(),wl(940,"td",21)(941,"code",22),Ux(942,"boolean"),ng()(),wl(943,"td",23)(944,"p")(945,"code"),Ux(946,"false"),ng()()(),wl(947,"td",24)(948,"em")(949,"strong"),Ux(950,"(opcional)"),ng()(),wl(951,"p"),Ux(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),ng()()(),wl(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),Ux(957," p-max-columns"),Ul(958,"br"),ng()()(),wl(959,"td",21)(960,"code",35),Ux(961,"number"),ng()(),wl(962,"td",23),Ux(963,"-"),ng(),wl(964,"td",24)(965,"em")(966,"strong"),Ux(967,"(opcional)"),ng()(),wl(968,"p"),Ux(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),ng(),wl(970,"p"),Ux(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),ng()()(),wl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),Ux(976," p-param-delete-api"),Ul(977,"br"),ng()()(),wl(978,"td",21)(979,"code",31),Ux(980,"string"),ng()(),wl(981,"td",23)(982,"p")(983,"code"),Ux(984,"id"),ng()()(),wl(985,"td",24)(986,"em")(987,"strong"),Ux(988,"(opcional)"),ng()(),wl(989,"p"),Ux(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),ng(),wl(991,"p"),Ux(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),wl(993,"code"),Ux(994,"p-service-delete"),ng(),Ux(995," em conjunto."),ng()()(),wl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),Ux(1e3," p-selectable"),Ul(1001,"br"),ng()()(),wl(1002,"td",21)(1003,"code",22),Ux(1004,"boolean"),ng()(),wl(1005,"td",23)(1006,"p")(1007,"code"),Ux(1008,"false"),ng()()(),wl(1009,"td",24)(1010,"em")(1011,"strong"),Ux(1012,"(opcional)"),ng()(),wl(1013,"p"),Ux(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),wl(1015,"code"),Ux(1016,"p-single-select"),ng(),Ux(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),ng(),wl(1018,"p")(1019,"strong"),Ux(1020,"Importante:"),ng()(),wl(1021,"ul")(1022,"li"),Ux(1023,"As linhas de detalhe definidas em "),wl(1024,"code"),Ux(1025,"PoTableDetail"),ng(),Ux(1026," possuem comportamento independente da linha mestre;"),ng(),wl(1027,"li"),Ux(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),wl(1029,"code"),Ux(1030,"$selected"),ng(),Ux(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),wl(1032,"code"),Ux(1033,"item.$selected"),ng(),Ux(1034," ou "),wl(1035,"code"),Ux(1036,"item['$selected']"),ng(),Ux(1037,"."),ng()()()(),wl(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),Ux(1042," p-selectable-entire-line"),Ul(1043,"br"),ng()()(),wl(1044,"td",21)(1045,"code",22),Ux(1046,"boolean"),ng()(),wl(1047,"td",23)(1048,"p")(1049,"code"),Ux(1050,"true"),ng()()(),wl(1051,"td",24)(1052,"p"),Ux(1053,"Permite selecionar um item da tabela clicando na linha."),ng(),wl(1054,"blockquote")(1055,"p"),Ux(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),wl(1057,"code"),Ux(1058,"false"),ng(),Ux(1059,"."),ng()()()(),wl(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),Ux(1064," (p-selected)"),Ul(1065,"br"),ng()()(),wl(1066,"td",21)(1067,"code",29),Ux(1068,"EventEmitter"),ng()(),wl(1069,"td",23),Ux(1070,"-"),ng(),wl(1071,"td",24)(1072,"em")(1073,"strong"),Ux(1074,"(opcional)"),ng()(),wl(1075,"p"),Ux(1076,"Evento executado ao selecionar uma linha do "),wl(1077,"code"),Ux(1078,"po-table"),ng(),Ux(1079,"."),ng()()(),wl(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),Ux(1084," p-service-api"),Ul(1085,"br"),ng()()(),wl(1086,"td",21)(1087,"code",31),Ux(1088,"string"),ng()(),wl(1089,"td",23),Ux(1090,"-"),ng(),wl(1091,"td",24)(1092,"em")(1093,"strong"),Ux(1094,"(opcional)"),ng()(),wl(1095,"p"),Ux(1096,"URL da API respons\xE1vel por retornar os registros."),ng(),wl(1097,"p"),Ux(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),wl(1099,"code"),Ux(1100,"page"),ng(),Ux(1101," e "),wl(1102,"code"),Ux(1103,"pageSize"),ng(),Ux(1104,", conforme abaixo:"),ng(),wl(1105,"pre")(1106,"code"),Ux(1107,`url + ?page=1&pageSize=10
`),ng()(),wl(1108,"p"),Ux(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),wl(1110,"code"),Ux(1111,"order"),ng(),Ux(1112,", por exemplo:"),ng(),wl(1113,"ul")(1114,"li")(1115,"p"),Ux(1116,"Coluna decrescente:"),ng(),wl(1117,"pre")(1118,"code"),Ux(1119,`url + ?page=1&pageSize=10&order=-name
`),ng()()(),wl(1120,"li")(1121,"p"),Ux(1122,"Coluna ascendente:"),ng(),wl(1123,"pre")(1124,"code"),Ux(1125,`url + ?page=1&pageSize=10&order=name
`),ng()()()(),wl(1126,"blockquote")(1127,"p"),Ux(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),wl(1129,"a",39),Ux(1130,"API do PO UI"),ng(),Ux(1131,"."),ng()()()(),wl(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),Ux(1136," p-service-delete"),Ul(1137,"br"),ng()()(),wl(1138,"td",21)(1139,"code",31),Ux(1140,"string"),ng()(),wl(1141,"td",23),Ux(1142,"-"),ng(),wl(1143,"td",24)(1144,"em")(1145,"strong"),Ux(1146,"(opcional)"),ng()(),wl(1147,"p"),Ux(1148,"URL da API respons\xE1vel por excluir os registros."),ng(),wl(1149,"p"),Ux(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),wl(1151,"code"),Ux(1152,"p-param-delete-api"),ng(),Ux(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),wl(1154,"code"),Ux(1155,"id"),ng(),Ux(1156,"."),ng(),wl(1157,"blockquote")(1158,"p"),Ux(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),wl(1160,"a",39),Ux(1161,"API do PO UI"),ng(),Ux(1162,"."),ng()()()(),wl(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),Ux(1167," (p-show-more)"),Ul(1168,"br"),ng()()(),wl(1169,"td",21)(1170,"code",29),Ux(1171,"EventEmitter"),ng()(),wl(1172,"td",23),Ux(1173,"-"),ng(),wl(1174,"td",24)(1175,"em")(1176,"strong"),Ux(1177,"(opcional)"),ng()(),wl(1178,"p"),Ux(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),ng(),wl(1180,"p"),Ux(1181,"Recebe um objeto "),wl(1182,"code"),Ux(1183,"{ column, type }"),ng(),Ux(1184," onde:"),ng(),wl(1185,"ul")(1186,"li"),Ux(1187,"column ("),wl(1188,"code"),Ux(1189,"PoTableColumn"),ng(),Ux(1190,"): objeto da coluna que est\xE1 ordenada."),ng(),wl(1191,"li"),Ux(1192,"type ("),wl(1193,"code"),Ux(1194,"PoTableColumnSortType"),ng(),Ux(1195,"): tipo da ordena\xE7\xE3o."),ng()()()(),wl(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),Ux(1200," p-show-more-disabled"),Ul(1201,"br"),ng()()(),wl(1202,"td",21)(1203,"code",22),Ux(1204,"boolean"),ng()(),wl(1205,"td",23)(1206,"p")(1207,"code"),Ux(1208,"false"),ng()()(),wl(1209,"td",24)(1210,"p"),Ux(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),ng()()(),wl(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),Ux(1216," p-single-select"),Ul(1217,"br"),ng()()(),wl(1218,"td",21)(1219,"code",22),Ux(1220,"boolean"),ng()(),wl(1221,"td",23),Ux(1222,"-"),ng(),wl(1223,"td",24)(1224,"p"),Ux(1225,"Define que somente uma linha da tabela pode ser selecionada."),ng(),wl(1226,"blockquote")(1227,"p"),Ux(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),ng()()()(),wl(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),Ux(1233," p-sort"),Ul(1234,"br"),ng()()(),wl(1235,"td",21)(1236,"code",22),Ux(1237,"boolean"),ng()(),wl(1238,"td",23)(1239,"p")(1240,"code"),Ux(1241,"false"),ng()()(),wl(1242,"td",24)(1243,"em")(1244,"strong"),Ux(1245,"(opcional)"),ng()(),wl(1246,"p"),Ux(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),ng()()(),wl(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),Ux(1252," (p-sort-by)"),Ul(1253,"br"),ng()()(),wl(1254,"td",21)(1255,"code",29),Ux(1256,"EventEmitter"),ng()(),wl(1257,"td",23),Ux(1258,"-"),ng(),wl(1259,"td",24)(1260,"em")(1261,"strong"),Ux(1262,"(opcional)"),ng()(),wl(1263,"p"),Ux(1264,"Evento executado ao ordenar colunas da tabela."),ng(),wl(1265,"p"),Ux(1266,"Recebe um objeto "),wl(1267,"code"),Ux(1268,"{ column, type }"),ng(),Ux(1269," onde:"),ng(),wl(1270,"ul")(1271,"li"),Ux(1272,"column ("),wl(1273,"code"),Ux(1274,"PoTableColumn"),ng(),Ux(1275,"): objeto da coluna que foi clicada/ordenada."),ng(),wl(1276,"li"),Ux(1277,"type ("),wl(1278,"code"),Ux(1279,"PoTableColumnSortType"),ng(),Ux(1280,"): tipo da ordena\xE7\xE3o."),ng()()()(),wl(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),Ux(1285," p-spacing"),Ul(1286,"br"),ng()()(),wl(1287,"td",21)(1288,"code",31),Ux(1289,"string"),ng()(),wl(1290,"td",23)(1291,"p")(1292,"code"),Ux(1293,"medium"),ng()()(),wl(1294,"td",24)(1295,"em")(1296,"strong"),Ux(1297,"(opcional)"),ng()(),wl(1298,"p"),Ux(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),wl(1300,"strong"),Ux(1301,"PoTableColumnSpacing"),ng(),Ux(1302,"."),ng(),wl(1303,"blockquote")(1304,"p"),Ux(1305,"Em n\xEDvel de acessibilidade "),wl(1306,"strong"),Ux(1307,"AA"),ng(),Ux(1308,", caso o valor de "),wl(1309,"code"),Ux(1310,"p-spacing"),ng(),Ux(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),wl(1312,"code"),Ux(1313,"extraSmall"),ng(),Ux(1314,`
nos seguintes cen\xE1rios:`),ng(),wl(1315,"ul")(1316,"li"),Ux(1317,"Quando o valor de "),wl(1318,"code"),Ux(1319,"p-components-size"),ng(),Ux(1320," for "),wl(1321,"code"),Ux(1322,"small"),ng(),Ux(1323,";"),ng(),wl(1324,"li"),Ux(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),wl(1326,"code"),Ux(1327,"small"),ng(),Ux(1328,` no
`),wl(1329,"a",32),Ux(1330,"servi\xE7o de tema"),ng(),Ux(1331,"."),ng()()()()(),wl(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),Ux(1336," p-striped"),Ul(1337,"br"),ng()()(),wl(1338,"td",21)(1339,"code",22),Ux(1340,"boolean"),ng()(),wl(1341,"td",23)(1342,"p")(1343,"code"),Ux(1344,"false"),ng()()(),wl(1345,"td",24)(1346,"p"),Ux(1347,"Habilita ou desabilita o estilo listrado da tabela ("),wl(1348,"code"),Ux(1349,"striped"),ng(),Ux(1350,")."),ng(),wl(1351,"blockquote")(1352,"p"),Ux(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),ng()()()(),wl(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),Ux(1358," p-text-wrap"),Ul(1359,"br"),ng()()(),wl(1360,"td",21)(1361,"code",22),Ux(1362,"boolean"),ng()(),wl(1363,"td",23)(1364,"p")(1365,"code"),Ux(1366,"false"),ng()()(),wl(1367,"td",24)(1368,"em")(1369,"strong"),Ux(1370,"(opcional)"),ng()(),wl(1371,"p"),Ux(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng(),wl(1373,"blockquote")(1374,"p"),Ux(1375,"Incompat\xEDvel com "),wl(1376,"code"),Ux(1377,"virtual-scroll"),ng(),Ux(1378,", que requer altura fixa nas linhas."),ng()()()(),wl(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),Ux(1383," (p-unselected)"),Ul(1384,"br"),ng()()(),wl(1385,"td",21)(1386,"code",29),Ux(1387,"EventEmitter"),ng()(),wl(1388,"td",23),Ux(1389,"-"),ng(),wl(1390,"td",24)(1391,"em")(1392,"strong"),Ux(1393,"(opcional)"),ng()(),wl(1394,"p"),Ux(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),wl(1396,"code"),Ux(1397,"po-table"),ng(),Ux(1398,"."),ng()()(),wl(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),Ux(1403," p-virtual-scroll"),Ul(1404,"br"),ng()()(),wl(1405,"td",21)(1406,"code",22),Ux(1407,"boolean"),ng()(),wl(1408,"td",23)(1409,"p")(1410,"code"),Ux(1411,"true"),ng()()(),wl(1412,"td",24)(1413,"em")(1414,"strong"),Ux(1415,"(opcional)"),ng()(),wl(1416,"p"),Ux(1417,"Habilita o "),wl(1418,"code"),Ux(1419,"virtual-scroll"),ng(),Ux(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),wl(1421,"code"),Ux(1422,"p-height"),ng(),Ux(1423,") para funcionar corretamente."),ng(),wl(1424,"blockquote")(1425,"p"),Ux(1426,"Incompat\xEDvel com "),wl(1427,"code"),Ux(1428,"p-text-wrap"),ng(),Ux(1429," e "),wl(1430,"code"),Ux(1431,"master-detail"),ng(),Ux(1432,", pois o "),wl(1433,"code"),Ux(1434,"virtual-scroll"),ng(),Ux(1435," exige altura fixa nas linhas."),ng()()()()(),wl(1436,"h3",13),Ux(1437,"M\xE9todos"),ng(),wl(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),Ux(1444," applyFilters "),ng()()()()(),wl(1445,"tr",24)(1446,"td",24)(1447,"p"),Ux(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),ng(),wl(1449,"p"),Ux(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),ng(),wl(1451,"pre")(1452,"code"),Ux(1453,`url + ?page=1&pageSize=10
`),ng()(),wl(1454,"blockquote")(1455,"p"),Ux(1456,"Obs: os par\xE2metros "),wl(1457,"code"),Ux(1458,"page"),ng(),Ux(1459," e "),wl(1460,"code"),Ux(1461,"pageSize"),ng(),Ux(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),ng()(),wl(1463,"p"),Ux(1464,"Caso sejam informados os par\xE2metros "),wl(1465,"code"),Ux(1466,"{ name: 'JOHN', age: '23' }"),ng(),Ux(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),ng(),wl(1468,"pre")(1469,"code"),Ux(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),ng()()()()(),wl(1471,"h5")(1472,"b"),Ux(1473,"Par\xE2metros"),ng()(),wl(1474,"table",14)(1475,"tr",15)(1476,"th",16),Ux(1477,"Nome"),ng(),wl(1478,"th",16),Ux(1479,"Tipo"),ng(),wl(1480,"th",16),Ux(1481,"Descri\xE7\xE3o"),ng()(),wl(1482,"tr",17)(1483,"td",18),Ux(1484," queryParams"),ng(),wl(1485,"td",21)(1486,"code",42),Ux(1487," { key: value } "),ng()(),wl(1488,"td",24)(1489,"p"),Ux(1490,"Formato do objeto a ser enviado."),ng(),wl(1491,"blockquote")(1492,"p"),Ux(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),ng()()()()(),Ul(1494,"br"),wl(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),Ux(1501," applyFixedColumns "),ng()()()()(),wl(1502,"tr",24)(1503,"td",24)(1504,"p"),Ux(1505,"Verifica se columns possuem a propriedade width."),ng()()()(),Ul(1506,"br"),wl(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),Ux(1513," collapse "),ng()()()()(),wl(1514,"tr",24)(1515,"td",24)(1516,"p"),Ux(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),ng()()()(),wl(1518,"h5")(1519,"b"),Ux(1520,"Par\xE2metros"),ng()(),wl(1521,"table",14)(1522,"tr",15)(1523,"th",16),Ux(1524,"Nome"),ng(),wl(1525,"th",16),Ux(1526,"Tipo"),ng(),wl(1527,"th",16),Ux(1528,"Descri\xE7\xE3o"),ng()(),wl(1529,"tr",17)(1530,"td",18),Ux(1531," rowIndex"),ng(),wl(1532,"td",21)(1533,"code",43),Ux(1534," number "),ng()(),wl(1535,"td",24)(1536,"p"),Ux(1537,"\xCDndice da linha que ser\xE1 colapsada."),ng(),wl(1538,"blockquote")(1539,"p"),Ux(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),ng()()()()(),Ul(1541,"br"),wl(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),Ux(1548," expand "),ng()()()()(),wl(1549,"tr",24)(1550,"td",24)(1551,"p"),Ux(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),ng()()()(),wl(1553,"h5")(1554,"b"),Ux(1555,"Par\xE2metros"),ng()(),wl(1556,"table",14)(1557,"tr",15)(1558,"th",16),Ux(1559,"Nome"),ng(),wl(1560,"th",16),Ux(1561,"Tipo"),ng(),wl(1562,"th",16),Ux(1563,"Descri\xE7\xE3o"),ng()(),wl(1564,"tr",17)(1565,"td",18),Ux(1566," rowIndex"),ng(),wl(1567,"td",21)(1568,"code",43),Ux(1569," number "),ng()(),wl(1570,"td",24)(1571,"p"),Ux(1572,"\xCDndice da linha que ser\xE1 expandida."),ng(),wl(1573,"blockquote")(1574,"p"),Ux(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),ng()()()()(),Ul(1576,"br"),wl(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),Ux(1583," getSelectedRows "),ng()()()()(),wl(1584,"tr",24)(1585,"td",24)(1586,"p"),Ux(1587,"Retorna as linhas do "),wl(1588,"code"),Ux(1589,"po-table"),ng(),Ux(1590," que est\xE3o selecionadas."),ng()()()(),Ul(1591,"br"),wl(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),Ux(1598," getUnselectedRows "),ng()()()()(),wl(1599,"tr",24)(1600,"td",24)(1601,"p"),Ux(1602,"Retorna as linhas do "),wl(1603,"code"),Ux(1604,"po-table"),ng(),Ux(1605," que n\xE3o est\xE3o selecionadas."),ng()()()(),Ul(1606,"br"),wl(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),Ux(1613," unselectRows "),ng()()()()(),wl(1614,"tr",24)(1615,"td",24)(1616,"p"),Ux(1617,"Desmarca as linhas que est\xE3o selecionadas."),ng()()()(),Ul(1618,"br"),wl(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),Ux(1625," unselectRowItem "),ng()()()()(),wl(1626,"tr",24)(1627,"td",24)(1628,"p"),Ux(1629,"Desmarca uma linha que est\xE1 selecionada."),ng()()()(),Ul(1630,"br"),wl(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),Ux(1637," selectRowItem "),ng()()()()(),wl(1638,"tr",24)(1639,"td",24)(1640,"p"),Ux(1641,"Seleciona uma linha do 'po-table'."),ng()()()(),Ul(1642,"br"),wl(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),Ux(1649," deleteItems "),ng()()()()(),wl(1650,"tr",24)(1651,"td",24)(1652,"p"),Ux(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),wl(1654,"code"),Ux(1655,"p-service-delete"),ng(),Ux(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),ng(),wl(1657,"p"),Ux(1658,"Ao utilizar "),wl(1659,"code"),Ux(1660,"p-service-delete"),ng(),Ux(1661," mas sem a propriedade "),wl(1662,"code"),Ux(1663,"p-service-api"),ng(),Ux(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),ng(),wl(1665,"p"),Ux(1666,"Caso a tabela utilize "),wl(1667,"code"),Ux(1668,"p-height"),ng(),Ux(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),wl(1670,"code"),Ux(1671,"(p-delete-items)"),ng(),Ux(1672,", por exemplo:"),ng(),wl(1673,"pre")(1674,"code"),Ux(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),ng()()()()(),Ul(1676,"br"),wl(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),Ux(1683," removeItem "),ng()()()()(),wl(1684,"tr",24)(1685,"td",24)(1686,"p"),Ux(1687,"M\xE9todo que remove um item da tabela."),ng()()()(),wl(1688,"h5")(1689,"b"),Ux(1690,"Par\xE2metros"),ng()(),wl(1691,"table",14)(1692,"tr",15)(1693,"th",16),Ux(1694,"Nome"),ng(),wl(1695,"th",16),Ux(1696,"Tipo"),ng(),wl(1697,"th",16),Ux(1698,"Descri\xE7\xE3o"),ng()(),wl(1699,"tr",17)(1700,"td",18),Ux(1701," item"),ng(),wl(1702,"td",21)(1703,"code",35),Ux(1704," number "),ng(),wl(1705,"code",42),Ux(1706," { key: value } "),ng()(),wl(1707,"td",24)(1708,"p"),Ux(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),ng(),wl(1710,"blockquote")(1711,"p"),Ux(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),ng()()()()(),Ul(1713,"br"),wl(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),Ux(1720," updateItem "),ng()()()()(),wl(1721,"tr",24)(1722,"td",24)(1723,"p"),Ux(1724,"M\xE9todo que atualiza um item da tabela."),ng()()()(),wl(1725,"h5")(1726,"b"),Ux(1727,"Par\xE2metros"),ng()(),wl(1728,"table",14)(1729,"tr",15)(1730,"th",16),Ux(1731,"Nome"),ng(),wl(1732,"th",16),Ux(1733,"Tipo"),ng(),wl(1734,"th",16),Ux(1735,"Descri\xE7\xE3o"),ng()(),wl(1736,"tr",17)(1737,"td",18),Ux(1738," item"),ng(),wl(1739,"td",21)(1740,"code",35),Ux(1741," number "),ng(),wl(1742,"code",42),Ux(1743," { key: value } "),ng()(),wl(1744,"td",24)(1745,"p"),Ux(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),ng()()(),wl(1747,"tr",17)(1748,"td",18),Ux(1749," updatedItem"),ng(),wl(1750,"td",21)(1751,"code",42),Ux(1752," { key: value } "),ng()(),wl(1753,"td",24)(1754,"p"),Ux(1755,"Item que foi atualizado."),ng(),wl(1756,"blockquote")(1757,"p"),Ux(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),ng()()()()(),Ul(1759,"br"),wl(1760,"h3"),Ux(1761,"Interfaces"),ng(),wl(1762,"h4",44)(1763,"code",5),Ux(1764,"PoTableAction"),ng()(),wl(1765,"div",2)(1766,"p"),Ux(1767,"Interface para lista de a\xE7\xF5es do componente. "),ng()(),wl(1768,"h4",13),Ux(1769,"Propriedades"),ng(),wl(1770,"table",14)(1771,"tr",15)(1772,"th",16),Ux(1773,"Nome"),ng(),wl(1774,"th",16),Ux(1775,"Tipo"),ng(),wl(1776,"th",16),Ux(1777,"Descri\xE7\xE3o"),ng()(),wl(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),Ux(1782," action"),Ul(1783,"br"),ng()()(),wl(1784,"td",21)(1785,"code",45),Ux(1786,"Function"),ng()(),wl(1787,"td",24)(1788,"em")(1789,"strong"),Ux(1790,"(opcional)"),ng()(),wl(1791,"p"),Ux(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),ng(),wl(1793,"p"),Ux(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(1795,"code"),Ux(1796,"subItems"),ng(),Ux(1797,"."),ng(),wl(1798,"blockquote")(1799,"p"),Ux(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),wl(1801,"em"),Ux(1802,"bind"),ng(),Ux(1803,`:
`),wl(1804,"code"),Ux(1805,"action: this.myFunction.bind(this)"),ng()()()()(),wl(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),Ux(1810," disabled"),Ul(1811,"br"),ng()()(),wl(1812,"td",21)(1813,"code",22),Ux(1814,"boolean "),ng(),wl(1815,"code",45),Ux(1816," Function"),ng()(),wl(1817,"td",24)(1818,"em")(1819,"strong"),Ux(1820,"(opcional)"),ng()(),wl(1821,"p"),Ux(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()(),wl(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),Ux(1827," icon"),Ul(1828,"br"),ng()()(),wl(1829,"td",21)(1830,"code",31),Ux(1831,"string "),ng(),wl(1832,"code",46),Ux(1833," TemplateRef<void>"),ng()(),wl(1834,"td",24)(1835,"em")(1836,"strong"),Ux(1837,"(opcional)"),ng()(),wl(1838,"p"),Ux(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),ng(),wl(1840,"p"),Ux(1841,"Aceita \xEDcones da "),wl(1842,"a",26),Ux(1843,"Biblioteca de \xEDcones"),ng(),Ux(1844,`, fontes externas (ex: Font Awesome)
ou um `),wl(1845,"code"),Ux(1846,"TemplateRef"),ng(),Ux(1847," para \xEDcones customizados."),ng(),wl(1848,"pre")(1849,"code"),Ux(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ng()()()(),wl(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),Ux(1855," label"),Ul(1856,"br"),ng()()(),wl(1857,"td",21)(1858,"code",31),Ux(1859,"string"),ng()(),wl(1860,"td",24)(1861,"p"),Ux(1862,"R\xF3tulo da a\xE7\xE3o."),ng(),wl(1863,"p"),Ux(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),wl(1865,"code"),Ux(1866,"subItems"),ng(),Ux(1867,"."),ng()()(),wl(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),Ux(1872," selected"),Ul(1873,"br"),ng()()(),wl(1874,"td",21)(1875,"code",22),Ux(1876,"boolean"),ng()(),wl(1877,"td",24)(1878,"em")(1879,"strong"),Ux(1880,"(opcional)"),ng()(),wl(1881,"p"),Ux(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),ng()()(),wl(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),Ux(1887," separator"),Ul(1888,"br"),ng()()(),wl(1889,"td",21)(1890,"code",22),Ux(1891,"boolean"),ng()(),wl(1892,"td",24)(1893,"em")(1894,"strong"),Ux(1895,"(opcional)"),ng()(),wl(1896,"p"),Ux(1897,"Atribui uma linha separadora acima do item."),ng()()(),wl(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),Ux(1902," subItems"),Ul(1903,"br"),ng()()(),wl(1904,"td",21)(1905,"code",47),Ux(1906,"Array<PoPopupAction>"),ng()(),wl(1907,"td",24)(1908,"em")(1909,"strong"),Ux(1910,"(opcional)"),ng()(),wl(1911,"p"),Ux(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),ng(),wl(1913,"p"),Ux(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ng(),wl(1915,"blockquote")(1916,"p"),Ux(1917,"As propriedades "),wl(1918,"code"),Ux(1919,"disabled"),ng(),Ux(1920,", "),wl(1921,"code"),Ux(1922,"type"),ng(),Ux(1923," e "),wl(1924,"code"),Ux(1925,"visible"),ng(),Ux(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),ng()(),wl(1927,"blockquote")(1928,"p"),Ux(1929,"Quando "),wl(1930,"code"),Ux(1931,"url"),ng(),Ux(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),ng()(),wl(1933,"blockquote")(1934,"p"),Ux(1935,"Em subn\xEDveis aninhados, o "),wl(1936,"code"),Ux(1937,"icon"),ng(),Ux(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),ng()()()(),wl(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),Ux(1943," type"),Ul(1944,"br"),ng()()(),wl(1945,"td",21)(1946,"code",31),Ux(1947,"string"),ng()(),wl(1948,"td",24)(1949,"em")(1950,"strong"),Ux(1951,"(opcional)"),ng()(),wl(1952,"p"),Ux(1953,"Define a cor do item."),ng(),wl(1954,"p"),Ux(1955,"Valores v\xE1lidos:"),ng(),wl(1956,"ul")(1957,"li")(1958,"code"),Ux(1959,"default"),ng()(),wl(1960,"li")(1961,"code"),Ux(1962,"danger"),ng()()()()(),wl(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),Ux(1967," url"),Ul(1968,"br"),ng()()(),wl(1969,"td",21)(1970,"code",31),Ux(1971,"string"),ng()(),wl(1972,"td",24)(1973,"em")(1974,"strong"),Ux(1975,"(opcional)"),ng()(),wl(1976,"p"),Ux(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),ng(),wl(1978,"p"),Ux(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),wl(1980,"code"),Ux(1981,"url"),ng(),Ux(1982," \xE9 informada em um agrupador, o clique "),wl(1983,"strong"),Ux(1984,"n\xE3o abrir\xE1 os subitens"),ng(),Ux(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ng(),wl(1986,"blockquote")(1987,"p"),Ux(1988,"Quando informada, tem prioridade sobre a propriedade "),wl(1989,"code"),Ux(1990,"action"),ng(),Ux(1991,"."),ng()()()(),wl(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),Ux(1996," visible"),Ul(1997,"br"),ng()()(),wl(1998,"td",21)(1999,"code",22),Ux(2e3,"boolean "),ng(),wl(2001,"code",45),Ux(2002," Function"),ng()(),wl(2003,"td",24)(2004,"em")(2005,"strong"),Ux(2006,"(opcional)"),ng()(),wl(2007,"p"),Ux(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),ng()()()(),wl(2009,"h4",44)(2010,"code",5),Ux(2011,"PoTableBoolean"),ng()(),wl(2012,"div",2)(2013,"p"),Ux(2014,"Interface que define as colunas booleanas do "),wl(2015,"code"),Ux(2016,"po-table"),ng(),Ux(2017,"."),ng()(),wl(2018,"h4",13),Ux(2019,"Propriedades"),ng(),wl(2020,"table",14)(2021,"tr",15)(2022,"th",16),Ux(2023,"Nome"),ng(),wl(2024,"th",16),Ux(2025,"Tipo"),ng(),wl(2026,"th",16),Ux(2027,"Descri\xE7\xE3o"),ng()(),wl(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),Ux(2032," falseLabel"),Ul(2033,"br"),ng()()(),wl(2034,"td",21)(2035,"code",31),Ux(2036,"string"),ng()(),wl(2037,"td",24)(2038,"em")(2039,"strong"),Ux(2040,"(opcional)"),ng()(),wl(2041,"p"),Ux(2042,"Define o r\xF3tulo para valores "),wl(2043,"code"),Ux(2044,"false"),ng(),Ux(2045,"."),ng()()(),wl(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),Ux(2050," trueLabel"),Ul(2051,"br"),ng()()(),wl(2052,"td",21)(2053,"code",31),Ux(2054,"string"),ng()(),wl(2055,"td",24)(2056,"em")(2057,"strong"),Ux(2058,"(opcional)"),ng()(),wl(2059,"p"),Ux(2060,"Define o r\xF3tulo para valores "),wl(2061,"code"),Ux(2062,"true"),ng(),Ux(2063,"."),ng()()()(),wl(2064,"h4",44)(2065,"code",5),Ux(2066,"PoTableColumnSort"),ng()(),wl(2067,"div",2)(2068,"p"),Ux(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),ng()(),wl(2070,"h4",13),Ux(2071,"Propriedades"),ng(),wl(2072,"table",14)(2073,"tr",15)(2074,"th",16),Ux(2075,"Nome"),ng(),wl(2076,"th",16),Ux(2077,"Tipo"),ng(),wl(2078,"th",16),Ux(2079,"Descri\xE7\xE3o"),ng()(),wl(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),Ux(2084," column"),Ul(2085,"br"),ng()()(),wl(2086,"td",21)(2087,"code",48),Ux(2088,"PoTableColumn"),ng()(),wl(2089,"td",24)(2090,"em")(2091,"strong"),Ux(2092,"(opcional)"),ng()(),wl(2093,"p"),Ux(2094,"Coluna pela qual a tabela est\xE1 ordenada."),ng()()(),wl(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),Ux(2099," type"),Ul(2100,"br"),ng()()(),wl(2101,"td",21)(2102,"code",49),Ux(2103,"PoTableColumnSortType"),ng()(),wl(2104,"td",24)(2105,"p"),Ux(2106,"Tipo da ordena\xE7\xE3o."),ng()()()(),wl(2107,"h4",44)(2108,"code",5),Ux(2109,"PoTableColumn"),ng()(),wl(2110,"div",2)(2111,"p"),Ux(2112,"Interface para configura\xE7\xE3o das colunas do "),wl(2113,"code"),Ux(2114,"po-table"),ng(),Ux(2115,"."),ng(),wl(2116,"p"),Ux(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),ng()(),wl(2118,"h4",13),Ux(2119,"Propriedades"),ng(),wl(2120,"table",14)(2121,"tr",15)(2122,"th",16),Ux(2123,"Nome"),ng(),wl(2124,"th",16),Ux(2125,"Tipo"),ng(),wl(2126,"th",16),Ux(2127,"Descri\xE7\xE3o"),ng()(),wl(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),Ux(2132," action"),Ul(2133,"br"),ng()()(),wl(2134,"td",21)(2135,"code",45),Ux(2136,"Function"),ng()(),wl(2137,"td",24)(2138,"em")(2139,"strong"),Ux(2140,"(opcional)"),ng()(),wl(2141,"p"),Ux(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),wl(2143,"code"),Ux(2144,"link"),ng(),Ux(2145," ou "),wl(2146,"code"),Ux(2147,"icon"),ng(),Ux(2148,"."),ng(),wl(2149,"blockquote")(2150,"p"),Ux(2151,"Quando for do tipo "),wl(2152,"code"),Ux(2153,"link"),ng(),Ux(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),ng()(),wl(2155,"blockquote")(2156,"p"),Ux(2157,"Quando for do tipo "),wl(2158,"code"),Ux(2159,"icon"),ng(),Ux(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),ng()()()(),wl(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),Ux(2165," boolean"),Ul(2166,"br"),ng()()(),wl(2167,"td",21)(2168,"code",50),Ux(2169,"PoTableBoolean"),ng()(),wl(2170,"td",24)(2171,"em")(2172,"strong"),Ux(2173,"(opcional)"),ng()(),wl(2174,"p"),Ux(2175,"Define um objeto do tipo "),wl(2176,"code"),Ux(2177,"PoTableBoolean"),ng(),Ux(2178," para as colunas do tipo "),wl(2179,"em"),Ux(2180,"boolean"),ng(),Ux(2181,". Por exemplo:"),ng(),wl(2182,"pre")(2183,"code"),Ux(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),ng()(),wl(2185,"blockquote")(2186,"p"),Ux(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),wl(2188,"em"),Ux(2189,"boolean"),ng(),Ux(2190,`,
esta exibir\xE1 por padr\xE3o `),wl(2191,"code"),Ux(2192,"Sim"),ng(),Ux(2193," e "),wl(2194,"code"),Ux(2195,"N\xE3o"),ng(),Ux(2196," de acordo com os valores "),wl(2197,"em"),Ux(2198,"booleanos"),ng(),Ux(2199,"."),ng()()()(),wl(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),Ux(2204," color"),Ul(2205,"br"),ng()()(),wl(2206,"td",21)(2207,"code",31),Ux(2208,"string "),ng(),wl(2209,"code",45),Ux(2210," Function"),ng()(),wl(2211,"td",24)(2212,"em")(2213,"strong"),Ux(2214,"(opcional)"),ng()(),wl(2215,"p"),Ux(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),ng(),wl(2217,"p"),Ux(2218,"Valores v\xE1lidos:"),ng(),wl(2219,"ul")(2220,"li"),Ul(2221,"span",51),wl(2222,"code"),Ux(2223,"color-01"),ng()(),wl(2224,"li"),Ul(2225,"span",52),wl(2226,"code"),Ux(2227,"color-02"),ng()(),wl(2228,"li"),Ul(2229,"span",53),wl(2230,"code"),Ux(2231,"color-03"),ng()(),wl(2232,"li"),Ul(2233,"span",54),wl(2234,"code"),Ux(2235,"color-04"),ng()(),wl(2236,"li"),Ul(2237,"span",55),wl(2238,"code"),Ux(2239,"color-05"),ng()(),wl(2240,"li"),Ul(2241,"span",56),wl(2242,"code"),Ux(2243,"color-06"),ng()(),wl(2244,"li"),Ul(2245,"span",57),wl(2246,"code"),Ux(2247,"color-07"),ng()(),wl(2248,"li"),Ul(2249,"span",58),wl(2250,"code"),Ux(2251,"color-08"),ng()(),wl(2252,"li"),Ul(2253,"span",59),wl(2254,"code"),Ux(2255,"color-09"),ng()(),wl(2256,"li"),Ul(2257,"span",60),wl(2258,"code"),Ux(2259,"color-10"),ng()(),wl(2260,"li"),Ul(2261,"span",61),wl(2262,"code"),Ux(2263,"color-11"),ng()(),wl(2264,"li"),Ul(2265,"span",62),wl(2266,"code"),Ux(2267,"color-12"),ng()()(),wl(2268,"blockquote")(2269,"p"),Ux(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),wl(2271,"strong"),Ux(2272,"Caption Tag Colors"),ng(),Ux(2273,":"),ng()(),wl(2274,"ul")(2275,"li"),Ul(2276,"span",63),wl(2277,"code"),Ux(2278,"caption-tag-01"),ng(),Ul(2279,"span",64),wl(2280,"code"),Ux(2281,"caption-tag-02"),ng(),Ul(2282,"span",65),wl(2283,"code"),Ux(2284,"caption-tag-03"),ng(),Ul(2285,"span",66),wl(2286,"code"),Ux(2287,"caption-tag-04"),ng(),Ul(2288,"span",67),wl(2289,"code"),Ux(2290,"caption-tag-05"),ng()(),wl(2291,"li"),Ul(2292,"span",68),wl(2293,"code"),Ux(2294,"caption-tag-06"),ng(),Ul(2295,"span",69),wl(2296,"code"),Ux(2297,"caption-tag-07"),ng(),Ul(2298,"span",70),wl(2299,"code"),Ux(2300,"caption-tag-08"),ng(),Ul(2301,"span",71),wl(2302,"code"),Ux(2303,"caption-tag-09"),ng(),Ul(2304,"span",72),wl(2305,"code"),Ux(2306,"caption-tag-10"),ng()(),wl(2307,"li"),Ul(2308,"span",73),wl(2309,"code"),Ux(2310,"caption-tag-11"),ng(),Ul(2311,"span",74),wl(2312,"code"),Ux(2313,"caption-tag-12"),ng(),Ul(2314,"span",75),wl(2315,"code"),Ux(2316,"caption-tag-13"),ng(),Ul(2317,"span",76),wl(2318,"code"),Ux(2319,"caption-tag-14"),ng(),Ul(2320,"span",77),wl(2321,"code"),Ux(2322,"caption-tag-15"),ng()(),wl(2323,"li"),Ul(2324,"span",78),wl(2325,"code"),Ux(2326,"caption-tag-16"),ng(),Ul(2327,"span",79),wl(2328,"code"),Ux(2329,"caption-tag-17"),ng(),Ul(2330,"span",80),wl(2331,"code"),Ux(2332,"caption-tag-18"),ng(),Ul(2333,"span",81),wl(2334,"code"),Ux(2335,"caption-tag-19"),ng(),Ul(2336,"span",82),wl(2337,"code"),Ux(2338,"caption-tag-20"),ng()(),wl(2339,"li"),Ul(2340,"span",83),wl(2341,"code"),Ux(2342,"caption-tag-21"),ng(),Ul(2343,"span",84),wl(2344,"code"),Ux(2345,"caption-tag-22"),ng(),Ul(2346,"span",85),wl(2347,"code"),Ux(2348,"caption-tag-23"),ng(),Ul(2349,"span",86),wl(2350,"code"),Ux(2351,"caption-tag-24"),ng(),Ul(2352,"span",87),wl(2353,"code"),Ux(2354,"caption-tag-25"),ng()(),wl(2355,"li"),Ul(2356,"span",88),wl(2357,"code"),Ux(2358,"caption-tag-26"),ng(),Ul(2359,"span",89),wl(2360,"code"),Ux(2361,"caption-tag-27"),ng(),Ul(2362,"span",90),wl(2363,"code"),Ux(2364,"caption-tag-28"),ng(),Ul(2365,"span",91),wl(2366,"code"),Ux(2367,"caption-tag-29"),ng(),Ul(2368,"span",92),wl(2369,"code"),Ux(2370,"caption-tag-30"),ng()(),wl(2371,"li"),Ul(2372,"span",93),wl(2373,"code"),Ux(2374,"caption-tag-31"),ng(),Ul(2375,"span",94),wl(2376,"code"),Ux(2377,"caption-tag-32"),ng(),Ul(2378,"span",95),wl(2379,"code"),Ux(2380,"caption-tag-33"),ng(),Ul(2381,"span",96),wl(2382,"code"),Ux(2383,"caption-tag-34"),ng(),Ul(2384,"span",97),wl(2385,"code"),Ux(2386,"caption-tag-35"),ng()()(),wl(2387,"blockquote")(2388,"p"),Ux(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),ng()(),wl(2390,"pre")(2391,"code"),Ux(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),ng()(),wl(2393,"blockquote")(2394,"p"),Ux(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),wl(2396,"code"),Ux(2397,"icons"),ng(),Ux(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),ng()(),wl(2399,"pre")(2400,"code"),Ux(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),ng()()()(),wl(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),Ux(2406," detail"),Ul(2407,"br"),ng()()(),wl(2408,"td",21)(2409,"code",98),Ux(2410,"PoTableDetail"),ng()(),wl(2411,"td",24)(2412,"em")(2413,"strong"),Ux(2414,"(opcional)"),ng()(),wl(2415,"p"),Ux(2416,"Define um objeto que segue a interface "),wl(2417,"code"),Ux(2418,"PoTableDetail"),ng(),Ux(2419,", para as colunas de detalhes. Por exemplo:"),ng(),wl(2420,"pre")(2421,"code"),Ux(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),ng()()()(),wl(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),Ux(2427," disabled"),Ul(2428,"br"),ng()()(),wl(2429,"td",21)(2430,"code",45),Ux(2431,"Function"),ng()(),wl(2432,"td",24)(2433,"em")(2434,"strong"),Ux(2435,"(opcional)"),ng()(),wl(2436,"p"),Ux(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),wl(2438,"em"),Ux(2439,"link"),ng(),Ux(2440," e sua a\xE7\xE3o."),ng(),wl(2441,"blockquote")(2442,"p"),Ux(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),wl(2444,"code"),Ux(2445,"link"),ng(),Ux(2446,"."),ng()()()(),wl(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),Ux(2451," format"),Ul(2452,"br"),ng()()(),wl(2453,"td",21)(2454,"code",31),Ux(2455,"string"),ng()(),wl(2456,"td",24)(2457,"em")(2458,"strong"),Ux(2459,"(opcional)"),ng()(),wl(2460,"p"),Ux(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),ng(),wl(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),Ux(2466,"Formata\xE7\xE3o"),ng(),wl(2467,"th"),Ux(2468,"Type da Coluna"),ng(),wl(2469,"th"),Ux(2470,"Descri\xE7\xE3o"),ng(),wl(2471,"th"),Ux(2472,"Exemplos"),ng()()(),wl(2473,"tbody")(2474,"tr")(2475,"td"),Ux(2476,"Monet\xE1rio"),ng(),wl(2477,"td")(2478,"code"),Ux(2479,"currency"),ng()(),wl(2480,"td"),Ux(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),ng(),wl(2482,"td")(2483,"code"),Ux(2484,"'BRL'"),ng(),Ux(2485,", "),wl(2486,"code"),Ux(2487,"'USD'"),ng(),Ux(2488,", "),wl(2489,"code"),Ux(2490,"'EUR'"),ng(),Ux(2491,", "),wl(2492,"code"),Ux(2493,"'RUB'"),ng()()(),wl(2494,"tr")(2495,"td"),Ux(2496,"Data"),ng(),wl(2497,"td")(2498,"code"),Ux(2499,"date"),ng()(),wl(2500,"td"),Ux(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),ng(),wl(2502,"td")(2503,"code"),Ux(2504,"'dd/MM/yyyy'"),ng(),Ux(2505,", "),wl(2506,"code"),Ux(2507,"'dd-MM-yy'"),ng(),Ux(2508,", "),wl(2509,"code"),Ux(2510,"'mm/dd/yyyy'"),ng()()(),wl(2511,"tr")(2512,"td"),Ux(2513,"Hora"),ng(),wl(2514,"td")(2515,"code"),Ux(2516,"time"),ng()(),wl(2517,"td"),Ux(2518,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),ng(),wl(2519,"td")(2520,"code"),Ux(2521,"'HH:mm'"),ng(),Ux(2522,", "),wl(2523,"code"),Ux(2524,"'HH:mm:ss.ffffff'"),ng(),Ux(2525,", "),wl(2526,"code"),Ux(2527,"'HH:mm:ss.ff'"),ng(),Ux(2528,", "),wl(2529,"code"),Ux(2530,"'mm:ss.fff'"),ng()()(),wl(2531,"tr")(2532,"td"),Ux(2533,"N\xFAmero"),ng(),wl(2534,"td")(2535,"code"),Ux(2536,"number"),ng()(),wl(2537,"td"),Ux(2538,"Aceita um valor seguindo o padr\xE3o "),wl(2539,"a",99)(2540,"strong"),Ux(2541,"DecimalPipe"),ng()(),Ux(2542," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),ng(),wl(2543,"td")(2544,"code"),Ux(2545,"'1.2-5'"),ng(),Ux(2546," (ex.: "),wl(2547,"code"),Ux(2548,"50"),ng(),Ux(2549," \u2192 "),wl(2550,"code"),Ux(2551,"50.00"),ng(),Ux(2552,")"),ng()()()(),wl(2553,"p"),Ux(2554,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),ng()()(),wl(2555,"tr",17)(2556,"td",18)(2557,"div",19)(2558,"span",20),Ux(2559," icons"),Ul(2560,"br"),ng()()(),wl(2561,"td",21)(2562,"code",100),Ux(2563,"Array<PoTableColumnIcon>"),ng()(),wl(2564,"td",24)(2565,"em")(2566,"strong"),Ux(2567,"(opcional)"),ng()(),wl(2568,"p"),Ux(2569,"Define um "),wl(2570,"em"),Ux(2571,"array"),ng(),Ux(2572," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),wl(2573,"code"),Ux(2574,"action"),ng(),Ux(2575," e "),wl(2576,"code"),Ux(2577,"color"),ng(),Ux(2578,`
definidos na coluna, \xE0 partir do `),wl(2579,"em"),Ux(2580,"value"),ng(),Ux(2581," da "),wl(2582,"a",101)(2583,"code"),Ux(2584,"PoTableColumnIcon"),ng()(),Ux(2585,", por exemplo:"),ng(),wl(2586,"pre")(2587,"code"),Ux(2588,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),ng()(),wl(2589,"pre")(2590,"code"),Ux(2591,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),ng()()()(),wl(2592,"tr",17)(2593,"td",18)(2594,"div",19)(2595,"span",20),Ux(2596," label"),Ul(2597,"br"),ng()()(),wl(2598,"td",21)(2599,"code",31),Ux(2600,"string"),ng()(),wl(2601,"td",24)(2602,"em")(2603,"strong"),Ux(2604,"(opcional)"),ng()(),wl(2605,"p"),Ux(2606,"Texto para t\xEDtulo da coluna."),ng(),wl(2607,"p"),Ux(2608,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),wl(2609,"em"),Ux(2610,"label"),ng(),Ux(2611," o valor da propriedade "),wl(2612,"em"),Ux(2613,"property"),ng(),Ux(2614," com a primeira letra em mai\xFAsculo."),ng()()(),wl(2615,"tr",17)(2616,"td",18)(2617,"div",19)(2618,"span",20),Ux(2619," labels"),Ul(2620,"br"),ng()()(),wl(2621,"td",21)(2622,"code",102),Ux(2623,"Array<PoTableColumnLabel>"),ng()(),wl(2624,"td",24)(2625,"em")(2626,"strong"),Ux(2627,"(opcional)"),ng()(),wl(2628,"p"),Ux(2629,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),wl(2630,"code"),Ux(2631,"PoTableColumnLabel"),ng(),Ux(2632," na qual devem ser definidas os labels. Por exemplo:"),ng(),wl(2633,"pre")(2634,"code"),Ux(2635,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),ng()()()(),wl(2636,"tr",17)(2637,"td",18)(2638,"div",19)(2639,"span",20),Ux(2640," link"),Ul(2641,"br"),ng()()(),wl(2642,"td",21)(2643,"code",31),Ux(2644,"string"),ng()(),wl(2645,"td",24)(2646,"em")(2647,"strong"),Ux(2648,"(opcional)"),ng()(),wl(2649,"p"),Ux(2650,"Define o nome da propriedade que conter\xE1 o "),wl(2651,"code"),Ux(2652,"link"),ng(),Ux(2653," a ser redirecionado."),ng()()(),wl(2654,"tr",17)(2655,"td",18)(2656,"div",19)(2657,"span",20),Ux(2658," property"),Ul(2659,"br"),ng()()(),wl(2660,"td",21)(2661,"code",31),Ux(2662,"string"),ng()(),wl(2663,"td",24)(2664,"em")(2665,"strong"),Ux(2666,"(opcional)"),ng()(),wl(2667,"p"),Ux(2668,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),ng(),wl(2669,"pre")(2670,"code"),Ux(2671,`{ property: 'address.street', label: 'Rua' }
`),ng()()()(),wl(2672,"tr",17)(2673,"td",18)(2674,"div",19)(2675,"span",20),Ux(2676," sortable"),Ul(2677,"br"),ng()()(),wl(2678,"td",21)(2679,"code",22),Ux(2680,"boolean"),ng()(),wl(2681,"td",24)(2682,"em")(2683,"strong"),Ux(2684,"(opcional)"),ng()(),wl(2685,"p"),Ux(2686,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),ng()()(),wl(2687,"tr",17)(2688,"td",18)(2689,"div",19)(2690,"span",20),Ux(2691," subtitles"),Ul(2692,"br"),ng()()(),wl(2693,"td",21)(2694,"code",103),Ux(2695,"Array<PoTableSubtitleColumn>"),ng()(),wl(2696,"td",24)(2697,"em")(2698,"strong"),Ux(2699,"(opcional)"),ng()(),wl(2700,"p"),Ux(2701,"Define um array de objetos para as colunas de legenda. Onde, "),wl(2702,"code"),Ux(2703,"subtitles"),ng(),Ux(2704,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),ng(),wl(2705,"pre")(2706,"code"),Ux(2707,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),ng()(),wl(2708,"p"),Ux(2709,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),ng()()(),wl(2710,"tr",17)(2711,"td",18)(2712,"div",19)(2713,"span",20),Ux(2714," tooltip"),Ul(2715,"br"),ng()()(),wl(2716,"td",21)(2717,"code",31),Ux(2718,"string"),ng()(),wl(2719,"td",24)(2720,"em")(2721,"strong"),Ux(2722,"(opcional)"),ng()(),wl(2723,"p"),Ux(2724,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),wl(2725,"em"),Ux(2726,"mouse"),ng(),Ux(2727," sobre um texto."),ng(),wl(2728,"blockquote")(2729,"p"),Ux(2730,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),wl(2731,"em"),Ux(2732,"link"),ng(),Ux(2733,"."),ng()(),wl(2734,"blockquote")(2735,"p"),Ux(2736,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),wl(2737,"em"),Ux(2738,"tooltip"),ng(),Ux(2739," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),ng()()()(),wl(2740,"tr",17)(2741,"td",18)(2742,"div",19)(2743,"span",20),Ux(2744," type"),Ul(2745,"br"),ng()()(),wl(2746,"td",21)(2747,"code",31),Ux(2748,"string"),ng()(),wl(2749,"td",24)(2750,"em")(2751,"strong"),Ux(2752,"(opcional)"),ng()(),wl(2753,"p"),Ux(2754,"Tipo da coluna."),ng(),wl(2755,"p"),Ux(2756,"Valores v\xE1lidos:"),ng(),wl(2757,"ul")(2758,"li")(2759,"p")(2760,"code"),Ux(2761,"boolean"),ng(),Ux(2762,": Exibir\xE1 por padr\xE3o "),wl(2763,"code"),Ux(2764,"Sim"),ng(),Ux(2765," e "),wl(2766,"code"),Ux(2767,"N\xE3o"),ng(),Ux(2768," de acordo com os valores "),wl(2769,"em"),Ux(2770,"booleanos"),ng(),Ux(2771,"."),ng(),wl(2772,"blockquote")(2773,"p"),Ux(2774,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),wl(2775,"code"),Ux(2776,"boolean"),ng(),Ux(2777," desta interface."),ng()()(),wl(2778,"li")(2779,"p")(2780,"code"),Ux(2781,"currency"),ng(),Ux(2782,": valores monet\xE1rios."),ng()(),wl(2783,"li")(2784,"p")(2785,"code"),Ux(2786,"date"),ng(),Ux(2787,": valor de datas."),ng(),wl(2788,"ul")(2789,"li"),Ux(2790,"Aceita os tipos "),wl(2791,"em"),Ux(2792,"string"),ng(),Ux(2793," e "),wl(2794,"em"),Ux(2795,"Date"),ng(),Ux(2796,` padr\xE3o do Javascript,
por exemplo: `),wl(2797,"code"),Ux(2798,"'2017-11-28'"),ng(),Ux(2799," ou "),wl(2800,"code"),Ux(2801,"new Date(2017, 10, 28)"),ng(),Ux(2802,"."),ng()()(),wl(2803,"li")(2804,"p")(2805,"code"),Ux(2806,"dateTime"),ng(),Ux(2807,": valor de data com hor\xE1rio."),ng(),wl(2808,"ul")(2809,"li"),Ux(2810,"Aceita o tipo "),wl(2811,"em"),Ux(2812,"string"),ng(),Ux(2813," no formato "),wl(2814,"strong"),Ux(2815,"ISO-8601"),ng(),Ux(2816," extendido "),wl(2817,"strong"),Ux(2818,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),ng(),Ux(2819,`
e o tipo `),wl(2820,"em"),Ux(2821,"Date"),ng(),Ux(2822," padr\xE3o do Javascript, por exemplo: "),wl(2823,"code"),Ux(2824,"'2017-11-28T00:00:00-02:00'"),ng(),Ux(2825," ou "),wl(2826,"code"),Ux(2827,"new Date(2017, 10, 28)"),ng(),Ux(2828,"."),ng()()(),wl(2829,"li")(2830,"p")(2831,"code"),Ux(2832,"detail"),ng(),Ux(2833,": array de objetos para o master-detail."),ng(),wl(2834,"ul")(2835,"li"),Ux(2836,"Incompat\xEDvel com "),wl(2837,"code"),Ux(2838,"virtual-scroll"),ng(),Ux(2839,", que requer altura fixa nas linhas."),ng()()(),wl(2840,"li")(2841,"p")(2842,"code"),Ux(2843,"icon"),ng(),Ux(2844,": "),wl(2845,"em"),Ux(2846,"array"),ng(),Ux(2847," de "),wl(2848,"em"),Ux(2849,"string"),ng(),Ux(2850," ou objetos para a coluna de \xEDcones."),ng()(),wl(2851,"li")(2852,"p")(2853,"code"),Ux(2854,"label"),ng(),Ux(2855,": texto com destaque."),ng()(),wl(2856,"li")(2857,"p")(2858,"code"),Ux(2859,"link"),ng(),Ux(2860,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),ng()(),wl(2861,"li")(2862,"p")(2863,"code"),Ux(2864,"number"),ng(),Ux(2865,": valores num\xE9ricos."),ng()(),wl(2866,"li")(2867,"p")(2868,"code"),Ux(2869,"string"),ng(),Ux(2870,": textos."),ng()(),wl(2871,"li")(2872,"p")(2873,"code"),Ux(2874,"subtitle"),ng(),Ux(2875,": array de objetos para a coluna de legenda."),ng()(),wl(2876,"li")(2877,"p")(2878,"code"),Ux(2879,"time"),ng(),Ux(2880,": valor de hor\xE1rio."),ng(),wl(2881,"ul")(2882,"li"),Ux(2883,"Aceita o tipo "),wl(2884,"em"),Ux(2885,"string"),ng(),Ux(2886," nos formatos "),wl(2887,"strong"),Ux(2888,"'HH:mm:ss'"),ng(),Ux(2889," ou "),wl(2890,"strong"),Ux(2891,"'HH:mm:ss.ffffff'"),ng(),Ux(2892,", por exemplo: "),wl(2893,"code"),Ux(2894,"'23:12:45'"),ng(),Ux(2895,"."),ng()()(),wl(2896,"li")(2897,"p")(2898,"code"),Ux(2899,"cellTemplate"),ng(),Ux(2900,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),wl(2901,"a",8),Ux(2902,"PoTableCellTemplate"),ng(),Ux(2903,"."),ng()(),wl(2904,"li")(2905,"p")(2906,"code"),Ux(2907,"columnTemplate"),ng(),Ux(2908,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),wl(2909,"a",7),Ux(2910,"PoTableColumnTemplate"),ng(),Ux(2911,"."),ng()()()()(),wl(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),Ux(2916," visible"),Ul(2917,"br"),ng()()(),wl(2918,"td",21)(2919,"code",22),Ux(2920,"boolean"),ng()(),wl(2921,"td",24)(2922,"em")(2923,"strong"),Ux(2924,"(opcional)"),ng()(),wl(2925,"p"),Ux(2926,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),wl(2927,"strong"),Ux(2928,"gerenciador de colunas"),ng(),Ux(2929,"."),ng(),wl(2930,"blockquote")(2931,"p"),Ux(2932,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),wl(2933,"code"),Ux(2934,"p-max-columns"),ng(),Ux(2935,"."),ng()()()(),wl(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),Ux(2940," width"),Ul(2941,"br"),ng()()(),wl(2942,"td",21)(2943,"code",31),Ux(2944,"string"),ng()(),wl(2945,"td",24)(2946,"em")(2947,"strong"),Ux(2948,"(opcional)"),ng()(),wl(2949,"p"),Ux(2950,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),ng(),wl(2951,"ul")(2952,"li"),Ux(2953,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),ng(),wl(2954,"li"),Ux(2955,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),ng()()()()(),wl(2956,"h4",44)(2957,"code",5),Ux(2958,"PoTableLiterals"),ng()(),wl(2959,"div",2)(2960,"p"),Ux(2961,"Interface para defini\xE7\xE3o das literais usadas no "),wl(2962,"code"),Ux(2963,"po-table"),ng(),Ux(2964,"."),ng()(),wl(2965,"h4",13),Ux(2966,"Propriedades"),ng(),wl(2967,"table",14)(2968,"tr",15)(2969,"th",16),Ux(2970,"Nome"),ng(),wl(2971,"th",16),Ux(2972,"Tipo"),ng(),wl(2973,"th",16),Ux(2974,"Descri\xE7\xE3o"),ng()(),wl(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),Ux(2979," bodyDelete"),Ul(2980,"br"),ng()()(),wl(2981,"td",21)(2982,"code",31),Ux(2983,"string"),ng()(),wl(2984,"td",24)(2985,"em")(2986,"strong"),Ux(2987,"(opcional)"),ng()(),wl(2988,"p"),Ux(2989,"Texto no corpo do Modal de exclus\xE3o"),ng()()(),wl(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),Ux(2994," cancel"),Ul(2995,"br"),ng()()(),wl(2996,"td",21)(2997,"code",31),Ux(2998,"string"),ng()(),wl(2999,"td",24)(3e3,"em")(3001,"strong"),Ux(3002,"(opcional)"),ng()(),wl(3003,"p"),Ux(3004,"Texto no Modal para cancelar a exclus\xE3o"),ng()()(),wl(3005,"tr",17)(3006,"td",18)(3007,"div",19)(3008,"span",20),Ux(3009," columnsManager"),Ul(3010,"br"),ng()()(),wl(3011,"td",21)(3012,"code",31),Ux(3013,"string"),ng()(),wl(3014,"td",24)(3015,"em")(3016,"strong"),Ux(3017,"(opcional)"),ng()(),wl(3018,"p"),Ux(3019,"Texto do "),wl(3020,"strong"),Ux(3021,"Gerenciador de colunas"),ng(),Ux(3022," localizado no canto superior direito da tabela."),ng()()(),wl(3023,"tr",17)(3024,"td",18)(3025,"div",19)(3026,"span",20),Ux(3027," completeSubtitle"),Ul(3028,"br"),ng()()(),wl(3029,"td",21)(3030,"code",31),Ux(3031,"string"),ng()(),wl(3032,"td",24)(3033,"em")(3034,"strong"),Ux(3035,"(opcional)"),ng()(),wl(3036,"p"),Ux(3037,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),ng()()(),wl(3038,"tr",17)(3039,"td",18)(3040,"div",19)(3041,"span",20),Ux(3042," delete"),Ul(3043,"br"),ng()()(),wl(3044,"td",21)(3045,"code",31),Ux(3046,"string"),ng()(),wl(3047,"td",24)(3048,"em")(3049,"strong"),Ux(3050,"(opcional)"),ng()(),wl(3051,"p"),Ux(3052,"Texto no Modal para confirmar a exclus\xE3o"),ng()()(),wl(3053,"tr",17)(3054,"td",18)(3055,"div",19)(3056,"span",20),Ux(3057," deleteApiError"),Ul(3058,"br"),ng()()(),wl(3059,"td",21)(3060,"code",31),Ux(3061,"string"),ng()(),wl(3062,"td",24)(3063,"em")(3064,"strong"),Ux(3065,"(opcional)"),ng()(),wl(3066,"p"),Ux(3067,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),ng()()(),wl(3068,"tr",17)(3069,"td",18)(3070,"div",19)(3071,"span",20),Ux(3072," deleteSuccessful"),Ul(3073,"br"),ng()()(),wl(3074,"td",21)(3075,"code",31),Ux(3076,"string"),ng()(),wl(3077,"td",24)(3078,"em")(3079,"strong"),Ux(3080,"(opcional)"),ng()(),wl(3081,"p"),Ux(3082,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),ng()()(),wl(3083,"tr",17)(3084,"td",18)(3085,"div",19)(3086,"span",20),Ux(3087," loadMoreData"),Ul(3088,"br"),ng()()(),wl(3089,"td",21)(3090,"code",31),Ux(3091,"string"),ng()(),wl(3092,"td",24)(3093,"em")(3094,"strong"),Ux(3095,"(opcional)"),ng()(),wl(3096,"p"),Ux(3097,"Texto do bot\xE3o de "),wl(3098,"strong"),Ux(3099,"Carregar mais resultados"),ng(),Ux(3100," localizado no rodap\xE9 da tabela."),ng()()(),wl(3101,"tr",17)(3102,"td",18)(3103,"div",19)(3104,"span",20),Ux(3105," loadingData"),Ul(3106,"br"),ng()()(),wl(3107,"td",21)(3108,"code",31),Ux(3109,"string"),ng()(),wl(3110,"td",24)(3111,"em")(3112,"strong"),Ux(3113,"(opcional)"),ng()(),wl(3114,"p"),Ux(3115,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),ng()()(),wl(3116,"tr",17)(3117,"td",18)(3118,"div",19)(3119,"span",20),Ux(3120," multipleItems"),Ul(3121,"br"),ng()()(),wl(3122,"td",21)(3123,"code",31),Ux(3124,"string"),ng()(),wl(3125,"td",24)(3126,"em")(3127,"strong"),Ux(3128,"(opcional)"),ng()(),wl(3129,"p"),Ux(3130,"Texto exibido quando apenas 1 item for selecionado no checkbox."),ng()()(),wl(3131,"tr",17)(3132,"td",18)(3133,"div",19)(3134,"span",20),Ux(3135," noColumns"),Ul(3136,"br"),ng()()(),wl(3137,"td",21)(3138,"code",31),Ux(3139,"string"),ng()(),wl(3140,"td",24)(3141,"em")(3142,"strong"),Ux(3143,"(opcional)"),ng()(),wl(3144,"p"),Ux(3145,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),ng()()(),wl(3146,"tr",17)(3147,"td",18)(3148,"div",19)(3149,"span",20),Ux(3150," noData"),Ul(3151,"br"),ng()()(),wl(3152,"td",21)(3153,"code",31),Ux(3154,"string"),ng()(),wl(3155,"td",24)(3156,"em")(3157,"strong"),Ux(3158,"(opcional)"),ng()(),wl(3159,"p"),Ux(3160,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),ng()()(),wl(3161,"tr",17)(3162,"td",18)(3163,"div",19)(3164,"span",20),Ux(3165," noItem"),Ul(3166,"br"),ng()()(),wl(3167,"td",21)(3168,"code",31),Ux(3169,"string"),ng()(),wl(3170,"td",24)(3171,"em")(3172,"strong"),Ux(3173,"(opcional)"),ng()(),wl(3174,"p"),Ux(3175,"Texto exibido quando nenhum item for selecionado no checkbox."),ng()()(),wl(3176,"tr",17)(3177,"td",18)(3178,"div",19)(3179,"span",20),Ux(3180," noVisibleColumn"),Ul(3181,"br"),ng()()(),wl(3182,"td",21)(3183,"code",31),Ux(3184,"string"),ng()(),wl(3185,"td",24)(3186,"em")(3187,"strong"),Ux(3188,"(opcional)"),ng()(),wl(3189,"p"),Ux(3190,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),ng()()(),wl(3191,"tr",17)(3192,"td",18)(3193,"div",19)(3194,"span",20),Ux(3195," oneItem"),Ul(3196,"br"),ng()()(),wl(3197,"td",21)(3198,"code",31),Ux(3199,"string"),ng()(),wl(3200,"td",24)(3201,"em")(3202,"strong"),Ux(3203,"(opcional)"),ng()(),wl(3204,"p"),Ux(3205,"Texto exibido quando apenas 1 item for selecionado no checkbox."),ng()()(),wl(3206,"tr",17)(3207,"td",18)(3208,"div",19)(3209,"span",20),Ux(3210," seeCompleteSubtitle"),Ul(3211,"br"),ng()()(),wl(3212,"td",21)(3213,"code",31),Ux(3214,"string"),ng()(),wl(3215,"td",24)(3216,"em")(3217,"strong"),Ux(3218,"(opcional)"),ng()(),wl(3219,"p"),Ux(3220,"Texto do bot\xE3o "),wl(3221,"strong"),Ux(3222,"Ver legenda completa"),ng(),Ux(3223," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),ng()()()(),wl(3224,"h4",44)(3225,"code",5),Ux(3226,"PoTableColumnIcon"),ng()(),wl(3227,"div",2)(3228,"p"),Ul(3229,"a",104),ng(),wl(3230,"p"),Ux(3231,"Interface que define a coluna com \xEDcone(s) do "),wl(3232,"code"),Ux(3233,"po-table"),ng(),Ux(3234,"."),ng()(),wl(3235,"h4",13),Ux(3236,"Propriedades"),ng(),wl(3237,"table",14)(3238,"tr",15)(3239,"th",16),Ux(3240,"Nome"),ng(),wl(3241,"th",16),Ux(3242,"Tipo"),ng(),wl(3243,"th",16),Ux(3244,"Descri\xE7\xE3o"),ng()(),wl(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),Ux(3249," action"),Ul(3250,"br"),ng()()(),wl(3251,"td",21)(3252,"code",45),Ux(3253,"Function"),ng()(),wl(3254,"td",24)(3255,"em")(3256,"strong"),Ux(3257,"(opcional)"),ng()(),wl(3258,"p"),Ux(3259,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),ng()()(),wl(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),Ux(3264," color"),Ul(3265,"br"),ng()()(),wl(3266,"td",21)(3267,"code",31),Ux(3268,"string "),ng(),wl(3269,"code",45),Ux(3270," Function"),ng()(),wl(3271,"td",24)(3272,"em")(3273,"strong"),Ux(3274,"(opcional)"),ng()(),wl(3275,"p"),Ux(3276,"Define a cor do \xEDcone."),ng(),wl(3277,"p"),Ux(3278,"Valores v\xE1lidos:"),ng(),wl(3279,"ul")(3280,"li"),Ul(3281,"span",51),wl(3282,"code"),Ux(3283,"color-01"),ng()(),wl(3284,"li"),Ul(3285,"span",52),wl(3286,"code"),Ux(3287,"color-02"),ng()(),wl(3288,"li"),Ul(3289,"span",53),wl(3290,"code"),Ux(3291,"color-03"),ng()(),wl(3292,"li"),Ul(3293,"span",54),wl(3294,"code"),Ux(3295,"color-04"),ng()(),wl(3296,"li"),Ul(3297,"span",55),wl(3298,"code"),Ux(3299,"color-05"),ng()(),wl(3300,"li"),Ul(3301,"span",56),wl(3302,"code"),Ux(3303,"color-06"),ng()(),wl(3304,"li"),Ul(3305,"span",57),wl(3306,"code"),Ux(3307,"color-07"),ng()(),wl(3308,"li"),Ul(3309,"span",58),wl(3310,"code"),Ux(3311,"color-08"),ng()(),wl(3312,"li"),Ul(3313,"span",59),wl(3314,"code"),Ux(3315,"color-09"),ng()(),wl(3316,"li"),Ul(3317,"span",60),wl(3318,"code"),Ux(3319,"color-10"),ng()(),wl(3320,"li"),Ul(3321,"span",61),wl(3322,"code"),Ux(3323,"color-11"),ng()(),wl(3324,"li"),Ul(3325,"span",62),wl(3326,"code"),Ux(3327,"color-12"),ng()()(),wl(3328,"blockquote")(3329,"p"),Ux(3330,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),wl(3331,"strong"),Ux(3332,"Caption Tag Colors"),ng(),Ux(3333,":"),ng()(),wl(3334,"ul")(3335,"li"),Ul(3336,"span",63),wl(3337,"code"),Ux(3338,"caption-tag-01"),ng(),Ul(3339,"span",64),wl(3340,"code"),Ux(3341,"caption-tag-02"),ng(),Ul(3342,"span",65),wl(3343,"code"),Ux(3344,"caption-tag-03"),ng(),Ul(3345,"span",66),wl(3346,"code"),Ux(3347,"caption-tag-04"),ng(),Ul(3348,"span",67),wl(3349,"code"),Ux(3350,"caption-tag-05"),ng()(),wl(3351,"li"),Ul(3352,"span",68),wl(3353,"code"),Ux(3354,"caption-tag-06"),ng(),Ul(3355,"span",69),wl(3356,"code"),Ux(3357,"caption-tag-07"),ng(),Ul(3358,"span",70),wl(3359,"code"),Ux(3360,"caption-tag-08"),ng(),Ul(3361,"span",71),wl(3362,"code"),Ux(3363,"caption-tag-09"),ng(),Ul(3364,"span",72),wl(3365,"code"),Ux(3366,"caption-tag-10"),ng()(),wl(3367,"li"),Ul(3368,"span",73),wl(3369,"code"),Ux(3370,"caption-tag-11"),ng(),Ul(3371,"span",74),wl(3372,"code"),Ux(3373,"caption-tag-12"),ng(),Ul(3374,"span",75),wl(3375,"code"),Ux(3376,"caption-tag-13"),ng(),Ul(3377,"span",76),wl(3378,"code"),Ux(3379,"caption-tag-14"),ng(),Ul(3380,"span",77),wl(3381,"code"),Ux(3382,"caption-tag-15"),ng()(),wl(3383,"li"),Ul(3384,"span",78),wl(3385,"code"),Ux(3386,"caption-tag-16"),ng(),Ul(3387,"span",79),wl(3388,"code"),Ux(3389,"caption-tag-17"),ng(),Ul(3390,"span",80),wl(3391,"code"),Ux(3392,"caption-tag-18"),ng(),Ul(3393,"span",81),wl(3394,"code"),Ux(3395,"caption-tag-19"),ng(),Ul(3396,"span",82),wl(3397,"code"),Ux(3398,"caption-tag-20"),ng()(),wl(3399,"li"),Ul(3400,"span",83),wl(3401,"code"),Ux(3402,"caption-tag-21"),ng(),Ul(3403,"span",84),wl(3404,"code"),Ux(3405,"caption-tag-22"),ng(),Ul(3406,"span",85),wl(3407,"code"),Ux(3408,"caption-tag-23"),ng(),Ul(3409,"span",86),wl(3410,"code"),Ux(3411,"caption-tag-24"),ng(),Ul(3412,"span",87),wl(3413,"code"),Ux(3414,"caption-tag-25"),ng()(),wl(3415,"li"),Ul(3416,"span",88),wl(3417,"code"),Ux(3418,"caption-tag-26"),ng(),Ul(3419,"span",89),wl(3420,"code"),Ux(3421,"caption-tag-27"),ng(),Ul(3422,"span",90),wl(3423,"code"),Ux(3424,"caption-tag-28"),ng(),Ul(3425,"span",91),wl(3426,"code"),Ux(3427,"caption-tag-29"),ng(),Ul(3428,"span",92),wl(3429,"code"),Ux(3430,"caption-tag-30"),ng()(),wl(3431,"li"),Ul(3432,"span",93),wl(3433,"code"),Ux(3434,"caption-tag-31"),ng(),Ul(3435,"span",94),wl(3436,"code"),Ux(3437,"caption-tag-32"),ng(),Ul(3438,"span",95),wl(3439,"code"),Ux(3440,"caption-tag-33"),ng(),Ul(3441,"span",96),wl(3442,"code"),Ux(3443,"caption-tag-34"),ng(),Ul(3444,"span",97),wl(3445,"code"),Ux(3446,"caption-tag-35"),ng()()()()(),wl(3447,"tr",17)(3448,"td",18)(3449,"div",19)(3450,"span",20),Ux(3451," disabled"),Ul(3452,"br"),ng()()(),wl(3453,"td",21)(3454,"code",45),Ux(3455,"Function"),ng()(),wl(3456,"td",24)(3457,"em")(3458,"strong"),Ux(3459,"(opcional)"),ng()(),wl(3460,"p"),Ux(3461,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),ng()()(),wl(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),Ux(3466," icon"),Ul(3467,"br"),ng()()(),wl(3468,"td",21)(3469,"code",31),Ux(3470,"string "),ng(),wl(3471,"code",46),Ux(3472," TemplateRef<void>"),ng()(),wl(3473,"td",24)(3474,"em")(3475,"strong"),Ux(3476,"(opcional)"),ng()(),wl(3477,"p"),Ux(3478,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(3479,"a",26),Ux(3480,"Biblioteca de \xEDcones"),ng(),Ux(3481,". conforme exemplo abaixo:"),ng(),wl(3482,"pre")(3483,"code"),Ux(3484,`[ { icon: 'an an-plus' } ]
`),ng()(),wl(3485,"p"),Ux(3486,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),ng(),wl(3487,"pre")(3488,"code"),Ux(3489,`[ {  icon: 'fas fa-plus' } ]
`),ng()(),wl(3490,"p"),Ux(3491,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(3492,"code"),Ux(3493,"TemplateRef"),ng(),Ux(3494,`, conforme exemplo abaixo:
`),wl(3495,"code"),Ux(3496,"component.html"),ng(),Ux(3497,":"),ng(),wl(3498,"pre")(3499,"code"),Ux(3500,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),ng()(),wl(3501,"p")(3502,"code"),Ux(3503,"component.ts"),ng(),Ux(3504,":"),ng(),wl(3505,"pre")(3506,"code"),Ux(3507,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),ng()(),wl(3508,"blockquote")(3509,"p"),Ux(3510,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),wl(3511,"code"),Ux(3512,"value"),ng(),Ux(3513,"."),ng()()()(),wl(3514,"tr",17)(3515,"td",18)(3516,"div",19)(3517,"span",20),Ux(3518," tooltip"),Ul(3519,"br"),ng()()(),wl(3520,"td",21)(3521,"code",31),Ux(3522,"string"),ng()(),wl(3523,"td",24)(3524,"em")(3525,"strong"),Ux(3526,"(opcional)"),ng()(),wl(3527,"p"),Ux(3528,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),wl(3529,"em"),Ux(3530,"mouse"),ng(),Ux(3531," em cima do \xEDcone."),ng()()(),wl(3532,"tr",17)(3533,"td",18)(3534,"div",19)(3535,"span",20),Ux(3536," value"),Ul(3537,"br"),ng()()(),wl(3538,"td",21)(3539,"code",31),Ux(3540,"string"),ng()(),wl(3541,"td",24)(3542,"p"),Ux(3543,"Define o valor do \xEDcone que ser\xE1 exibido."),ng()()()(),wl(3544,"h4",44)(3545,"code",5),Ux(3546,"PoTableColumnLabel"),ng()(),wl(3547,"div",2)(3548,"p"),Ux(3549,"Interface para configura\xE7\xE3o das colunas de labels do "),wl(3550,"code"),Ux(3551,"po-table"),ng(),Ux(3552,"."),ng()(),wl(3553,"h4",13),Ux(3554,"Propriedades"),ng(),wl(3555,"table",14)(3556,"tr",15)(3557,"th",16),Ux(3558,"Nome"),ng(),wl(3559,"th",16),Ux(3560,"Tipo"),ng(),wl(3561,"th",16),Ux(3562,"Descri\xE7\xE3o"),ng()(),wl(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),Ux(3567," color"),Ul(3568,"br"),ng()()(),wl(3569,"td",21)(3570,"code",31),Ux(3571,"string"),ng()(),wl(3572,"td",24)(3573,"em")(3574,"strong"),Ux(3575,"(opcional)"),ng()(),wl(3576,"p"),Ux(3577,"Define a cor do label."),ng(),wl(3578,"p"),Ux(3579,"Valores v\xE1lidos:"),ng(),wl(3580,"ul")(3581,"li"),Ul(3582,"span",51),wl(3583,"code"),Ux(3584,"color-01"),ng()(),wl(3585,"li"),Ul(3586,"span",52),wl(3587,"code"),Ux(3588,"color-02"),ng()(),wl(3589,"li"),Ul(3590,"span",53),wl(3591,"code"),Ux(3592,"color-03"),ng()(),wl(3593,"li"),Ul(3594,"span",54),wl(3595,"code"),Ux(3596,"color-04"),ng()(),wl(3597,"li"),Ul(3598,"span",55),wl(3599,"code"),Ux(3600,"color-05"),ng()(),wl(3601,"li"),Ul(3602,"span",56),wl(3603,"code"),Ux(3604,"color-06"),ng()(),wl(3605,"li"),Ul(3606,"span",57),wl(3607,"code"),Ux(3608,"color-07"),ng()(),wl(3609,"li"),Ul(3610,"span",58),wl(3611,"code"),Ux(3612,"color-08"),ng()(),wl(3613,"li"),Ul(3614,"span",59),wl(3615,"code"),Ux(3616,"color-09"),ng()(),wl(3617,"li"),Ul(3618,"span",60),wl(3619,"code"),Ux(3620,"color-10"),ng()(),wl(3621,"li"),Ul(3622,"span",61),wl(3623,"code"),Ux(3624,"color-11"),ng()(),wl(3625,"li"),Ul(3626,"span",62),wl(3627,"code"),Ux(3628,"color-12"),ng()()(),wl(3629,"blockquote")(3630,"p"),Ux(3631,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),wl(3632,"strong"),Ux(3633,"Caption Tag Colors"),ng(),Ux(3634,":"),ng()(),wl(3635,"ul")(3636,"li"),Ul(3637,"span",63),wl(3638,"code"),Ux(3639,"caption-tag-01"),ng(),Ul(3640,"span",64),wl(3641,"code"),Ux(3642,"caption-tag-02"),ng(),Ul(3643,"span",65),wl(3644,"code"),Ux(3645,"caption-tag-03"),ng(),Ul(3646,"span",66),wl(3647,"code"),Ux(3648,"caption-tag-04"),ng(),Ul(3649,"span",67),wl(3650,"code"),Ux(3651,"caption-tag-05"),ng()(),wl(3652,"li"),Ul(3653,"span",68),wl(3654,"code"),Ux(3655,"caption-tag-06"),ng(),Ul(3656,"span",69),wl(3657,"code"),Ux(3658,"caption-tag-07"),ng(),Ul(3659,"span",70),wl(3660,"code"),Ux(3661,"caption-tag-08"),ng(),Ul(3662,"span",71),wl(3663,"code"),Ux(3664,"caption-tag-09"),ng(),Ul(3665,"span",72),wl(3666,"code"),Ux(3667,"caption-tag-10"),ng()(),wl(3668,"li"),Ul(3669,"span",73),wl(3670,"code"),Ux(3671,"caption-tag-11"),ng(),Ul(3672,"span",74),wl(3673,"code"),Ux(3674,"caption-tag-12"),ng(),Ul(3675,"span",75),wl(3676,"code"),Ux(3677,"caption-tag-13"),ng(),Ul(3678,"span",76),wl(3679,"code"),Ux(3680,"caption-tag-14"),ng(),Ul(3681,"span",77),wl(3682,"code"),Ux(3683,"caption-tag-15"),ng()(),wl(3684,"li"),Ul(3685,"span",78),wl(3686,"code"),Ux(3687,"caption-tag-16"),ng(),Ul(3688,"span",79),wl(3689,"code"),Ux(3690,"caption-tag-17"),ng(),Ul(3691,"span",80),wl(3692,"code"),Ux(3693,"caption-tag-18"),ng(),Ul(3694,"span",81),wl(3695,"code"),Ux(3696,"caption-tag-19"),ng(),Ul(3697,"span",82),wl(3698,"code"),Ux(3699,"caption-tag-20"),ng()(),wl(3700,"li"),Ul(3701,"span",83),wl(3702,"code"),Ux(3703,"caption-tag-21"),ng(),Ul(3704,"span",84),wl(3705,"code"),Ux(3706,"caption-tag-22"),ng(),Ul(3707,"span",85),wl(3708,"code"),Ux(3709,"caption-tag-23"),ng(),Ul(3710,"span",86),wl(3711,"code"),Ux(3712,"caption-tag-24"),ng(),Ul(3713,"span",87),wl(3714,"code"),Ux(3715,"caption-tag-25"),ng()(),wl(3716,"li"),Ul(3717,"span",88),wl(3718,"code"),Ux(3719,"caption-tag-26"),ng(),Ul(3720,"span",89),wl(3721,"code"),Ux(3722,"caption-tag-27"),ng(),Ul(3723,"span",90),wl(3724,"code"),Ux(3725,"caption-tag-28"),ng(),Ul(3726,"span",91),wl(3727,"code"),Ux(3728,"caption-tag-29"),ng(),Ul(3729,"span",92),wl(3730,"code"),Ux(3731,"caption-tag-30"),ng()(),wl(3732,"li"),Ul(3733,"span",93),wl(3734,"code"),Ux(3735,"caption-tag-31"),ng(),Ul(3736,"span",94),wl(3737,"code"),Ux(3738,"caption-tag-32"),ng(),Ul(3739,"span",95),wl(3740,"code"),Ux(3741,"caption-tag-33"),ng(),Ul(3742,"span",96),wl(3743,"code"),Ux(3744,"caption-tag-34"),ng(),Ul(3745,"span",97),wl(3746,"code"),Ux(3747,"caption-tag-35"),ng()()(),wl(3748,"p"),Ux(3749,"Exemplo de uso:"),ng(),wl(3750,"pre")(3751,"code"),Ux(3752,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),ng()()()(),wl(3753,"tr",17)(3754,"td",18)(3755,"div",19)(3756,"span",20),Ux(3757," icon"),Ul(3758,"br"),ng()()(),wl(3759,"td",21)(3760,"code",22),Ux(3761,"boolean "),ng(),wl(3762,"code",31),Ux(3763," string "),ng(),wl(3764,"code",46),Ux(3765," TemplateRef<void>"),ng()(),wl(3766,"td",24)(3767,"em")(3768,"strong"),Ux(3769,"(opcional)"),ng()(),wl(3770,"p"),Ux(3771,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),wl(3772,"em"),Ux(3773,"tag"),ng(),Ux(3774,"."),ng(),wl(3775,"p"),Ux(3776,"Quando "),wl(3777,"code"),Ux(3778,"p-type"),ng(),Ux(3779," estiver definida, basta informar um valor igual a "),wl(3780,"code"),Ux(3781,"true"),ng(),Ux(3782," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),ng(),wl(3783,"ul")(3784,"li"),Ul(3785,"span",105),Ux(3786," - "),wl(3787,"code"),Ux(3788,"success"),ng()(),wl(3789,"li"),Ul(3790,"span",106),Ux(3791," - "),wl(3792,"code"),Ux(3793,"warning"),ng()(),wl(3794,"li"),Ul(3795,"span",107),Ux(3796," - "),wl(3797,"code"),Ux(3798,"danger"),ng()(),wl(3799,"li"),Ul(3800,"span",108),Ux(3801," - "),wl(3802,"code"),Ux(3803,"info"),ng()()(),wl(3804,"p"),Ux(3805,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(3806,"a",26),Ux(3807,"Biblioteca de \xEDcones"),ng(),Ux(3808,". conforme exemplo abaixo:"),ng(),wl(3809,"pre")(3810,"code"),Ux(3811,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),ng()(),wl(3812,"p"),Ux(3813,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(3814,"em"),Ux(3815,"Font Awesome"),ng(),Ux(3816,", da seguinte forma:"),ng(),wl(3817,"pre")(3818,"code"),Ux(3819,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),ng()(),wl(3820,"p"),Ux(3821,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(3822,"code"),Ux(3823,"TemplateRef"),ng(),Ux(3824,", conforme exemplo abaixo:"),ng(),wl(3825,"pre")(3826,"code"),Ux(3827,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(3828,"blockquote")(3829,"p"),Ux(3830,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(3831,"code"),Ux(3832,"font-size: inherit"),ng(),Ux(3833," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(3834,"tr",17)(3835,"td",18)(3836,"div",19)(3837,"span",20),Ux(3838," label"),Ul(3839,"br"),ng()()(),wl(3840,"td",21)(3841,"code",31),Ux(3842,"string"),ng()(),wl(3843,"td",24)(3844,"p"),Ux(3845,"Texto que ser\xE1 exibido na coluna."),ng()()(),wl(3846,"tr",17)(3847,"td",18)(3848,"div",19)(3849,"span",20),Ux(3850," textColor"),Ul(3851,"br"),ng()()(),wl(3852,"td",21)(3853,"code",31),Ux(3854,"string"),ng()(),wl(3855,"td",24)(3856,"em")(3857,"strong"),Ux(3858,"(opcional)"),ng()(),wl(3859,"p"),Ux(3860,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),ng(),wl(3861,"ul")(3862,"li")(3863,"p"),Ux(3864,"Hexadeximal, por exemplo "),wl(3865,"code"),Ux(3866,"#c64840"),ng(),Ux(3867,";"),ng()(),wl(3868,"li")(3869,"p"),Ux(3870,"RGB, como "),wl(3871,"code"),Ux(3872,"rgb(0, 0, 165)"),ng(),Ux(3873,";"),ng()(),wl(3874,"li")(3875,"p"),Ux(3876,"O nome da cor, por exemplo "),wl(3877,"code"),Ux(3878,"blue"),ng(),Ux(3879,";"),ng()(),wl(3880,"li")(3881,"p"),Ux(3882,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),ng(),wl(3883,"ul")(3884,"li"),Ul(3885,"span",51),wl(3886,"code"),Ux(3887,"color-01"),ng()(),wl(3888,"li"),Ul(3889,"span",52),wl(3890,"code"),Ux(3891,"color-02"),ng()(),wl(3892,"li"),Ul(3893,"span",53),wl(3894,"code"),Ux(3895,"color-03"),ng()(),wl(3896,"li"),Ul(3897,"span",54),wl(3898,"code"),Ux(3899,"color-04"),ng()(),wl(3900,"li"),Ul(3901,"span",55),wl(3902,"code"),Ux(3903,"color-05"),ng()(),wl(3904,"li"),Ul(3905,"span",56),wl(3906,"code"),Ux(3907,"color-06"),ng()(),wl(3908,"li"),Ul(3909,"span",57),wl(3910,"code"),Ux(3911,"color-07"),ng()(),wl(3912,"li"),Ul(3913,"span",58),wl(3914,"code"),Ux(3915,"color-08"),ng()(),wl(3916,"li"),Ul(3917,"span",59),wl(3918,"code"),Ux(3919,"color-09"),ng()(),wl(3920,"li"),Ul(3921,"span",60),wl(3922,"code"),Ux(3923,"color-10"),ng()(),wl(3924,"li"),Ul(3925,"span",61),wl(3926,"code"),Ux(3927,"color-11"),ng()(),wl(3928,"li"),Ul(3929,"span",62),wl(3930,"code"),Ux(3931,"color-12"),ng()()()(),wl(3932,"li")(3933,"p"),Ux(3934,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),ng()()(),wl(3935,"blockquote")(3936,"p")(3937,"strong"),Ux(3938,"Aten\xE7\xE3o:"),ng(),Ux(3939," A propriedade "),wl(3940,"code"),Ux(3941,"p-type"),ng(),Ux(3942," sobrep\xF5e esta defini\xE7\xE3o."),ng()(),wl(3943,"blockquote")(3944,"p")(3945,"strong"),Ux(3946,"Aten\xE7\xE3o:"),ng(),Ux(3947," As cores da paleta "),wl(3948,"strong"),Ux(3949,"Caption Tag Colors"),ng(),Ux(3950," ("),wl(3951,"code"),Ux(3952,"caption-tag-01"),ng(),Ux(3953," a "),wl(3954,"code"),Ux(3955,"caption-tag-35"),ng(),Ux(3956,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),ng()()()(),wl(3957,"tr",17)(3958,"td",18)(3959,"div",19)(3960,"span",20),Ux(3961," tooltip"),Ul(3962,"br"),ng()()(),wl(3963,"td",21)(3964,"code",31),Ux(3965,"string"),ng()(),wl(3966,"td",24)(3967,"em")(3968,"strong"),Ux(3969,"(opcional)"),ng()(),wl(3970,"p"),Ux(3971,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),wl(3972,"em"),Ux(3973,"mouse"),ng(),Ux(3974," em cima do "),wl(3975,"em"),Ux(3976,"label"),ng(),Ux(3977,"."),ng(),wl(3978,"blockquote")(3979,"p"),Ux(3980,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),ng()()()(),wl(3981,"tr",17)(3982,"td",18)(3983,"div",19)(3984,"span",20),Ux(3985," type"),Ul(3986,"br"),ng()()(),wl(3987,"td",21)(3988,"code",109),Ux(3989,"PoTagType"),ng()(),wl(3990,"td",24)(3991,"em")(3992,"strong"),Ux(3993,"(opcional)"),ng()(),wl(3994,"p"),Ux(3995,"Define o tipo da "),wl(3996,"em"),Ux(3997,"tag"),ng(),Ux(3998,"."),ng(),wl(3999,"p"),Ux(4e3,"Valores v\xE1lidos:"),ng(),wl(4001,"ul")(4002,"li")(4003,"code"),Ux(4004,"success"),ng(),Ux(4005,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),ng(),wl(4006,"li")(4007,"code"),Ux(4008,"warning"),ng(),Ux(4009,": cor amarela que representa aviso ou advert\xEAncia."),ng(),wl(4010,"li")(4011,"code"),Ux(4012,"danger"),ng(),Ux(4013,": cor vermelha para erro ou aviso cr\xEDtico."),ng(),wl(4014,"li")(4015,"code"),Ux(4016,"info"),ng(),Ux(4017,": cor cinza escuro que caracteriza conte\xFAdo informativo."),ng()(),wl(4018,"blockquote")(4019,"p"),Ux(4020,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),wl(4021,"code"),Ux(4022,"p-color"),ng(),Ux(4023," e "),wl(4024,"code"),Ux(4025,"p-icon"),ng(),Ux(4026," somente ser\xE1 exibido caso seja "),wl(4027,"code"),Ux(4028,"true"),ng(),Ux(4029,"."),ng()()()(),wl(4030,"tr",17)(4031,"td",18)(4032,"div",19)(4033,"span",20),Ux(4034," value"),Ul(4035,"br"),ng()()(),wl(4036,"td",21)(4037,"code",31),Ux(4038,"string "),ng(),wl(4039,"code",35),Ux(4040," number"),ng()(),wl(4041,"td",24)(4042,"p"),Ux(4043,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),ng()()()(),wl(4044,"h4",44)(4045,"code",5),Ux(4046,"PoTableDetailColumn"),ng()(),wl(4047,"div",2)(4048,"p"),Ux(4049,"Interface para configura\xE7\xE3o das colunas do "),wl(4050,"code"),Ux(4051,"po-table-detail"),ng(),Ux(4052,"."),ng()(),wl(4053,"h4",13),Ux(4054,"Propriedades"),ng(),wl(4055,"table",14)(4056,"tr",15)(4057,"th",16),Ux(4058,"Nome"),ng(),wl(4059,"th",16),Ux(4060,"Tipo"),ng(),wl(4061,"th",16),Ux(4062,"Descri\xE7\xE3o"),ng()(),wl(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),Ux(4067," format"),Ul(4068,"br"),ng()()(),wl(4069,"td",21)(4070,"code",31),Ux(4071,"string"),ng()(),wl(4072,"td",24)(4073,"em")(4074,"strong"),Ux(4075,"(opcional)"),ng()(),wl(4076,"p"),Ux(4077,"Formato de exibi\xE7\xE3o do valor da coluna:"),ng(),wl(4078,"ul")(4079,"li")(4080,"p"),Ux(4081,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),ng()(),wl(4082,"li")(4083,"p"),Ux(4084,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ng()(),wl(4085,"li")(4086,"p"),Ux(4087,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),ng()(),wl(4088,"li")(4089,"p"),Ux(4090,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),wl(4091,"a",110)(4092,"strong"),Ux(4093,"DecimalPipe"),ng()(),Ux(4094," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),ng(),wl(4095,"ul")(4096,"li"),Ux(4097,"Valor de entrada: "),wl(4098,"code"),Ux(4099,"50"),ng(),Ux(4100," e valor para formata\xE7\xE3o: "),wl(4101,"code"),Ux(4102,"'1.2-5'"),ng(),Ux(4103," o resultado ser\xE1: "),wl(4104,"code"),Ux(4105,"50.00"),ng()()()()()()(),wl(4106,"tr",17)(4107,"td",18)(4108,"div",19)(4109,"span",20),Ux(4110," label"),Ul(4111,"br"),ng()()(),wl(4112,"td",21)(4113,"code",31),Ux(4114,"string"),ng()(),wl(4115,"td",24)(4116,"em")(4117,"strong"),Ux(4118,"(opcional)"),ng()(),wl(4119,"p"),Ux(4120,"Texto para t\xEDtulo da coluna."),ng()()(),wl(4121,"tr",17)(4122,"td",18)(4123,"div",19)(4124,"span",20),Ux(4125," property"),Ul(4126,"br"),ng()()(),wl(4127,"td",21)(4128,"code",31),Ux(4129,"string"),ng()(),wl(4130,"td",24)(4131,"em")(4132,"strong"),Ux(4133,"(opcional)"),ng()(),wl(4134,"p"),Ux(4135,"Nome identificador da coluna."),ng()()(),wl(4136,"tr",17)(4137,"td",18)(4138,"div",19)(4139,"span",20),Ux(4140," type"),Ul(4141,"br"),ng()()(),wl(4142,"td",21)(4143,"code",31),Ux(4144,"string"),ng()(),wl(4145,"td",24)(4146,"em")(4147,"strong"),Ux(4148,"(opcional)"),ng()(),wl(4149,"p"),Ux(4150,"Tipo da coluna."),ng(),wl(4151,"p"),Ux(4152,"Valores v\xE1lidos:"),ng(),wl(4153,"ul")(4154,"li")(4155,"p")(4156,"code"),Ux(4157,"currency"),ng(),Ux(4158,": valores monet\xE1rios."),ng()(),wl(4159,"li")(4160,"p")(4161,"code"),Ux(4162,"date"),ng(),Ux(4163,": valor de datas."),ng(),wl(4164,"ul")(4165,"li"),Ux(4166,"Aceita os tipos "),wl(4167,"em"),Ux(4168,"string"),ng(),Ux(4169," e "),wl(4170,"em"),Ux(4171,"Date"),ng(),Ux(4172,` padr\xE3o do Javascript,
por exemplo: `),wl(4173,"code"),Ux(4174,"'2017-11-28'"),ng(),Ux(4175," ou "),wl(4176,"code"),Ux(4177,"new Date(2017, 10, 28)"),ng(),Ux(4178,"."),ng()()(),wl(4179,"li")(4180,"p")(4181,"code"),Ux(4182,"time"),ng(),Ux(4183,": valor de hor\xE1rio."),ng()(),wl(4184,"li")(4185,"p")(4186,"code"),Ux(4187,"number"),ng(),Ux(4188,": valores num\xE9ricos."),ng()(),wl(4189,"li")(4190,"p")(4191,"code"),Ux(4192,"dateTime"),ng(),Ux(4193,": valor de data com hor\xE1rio."),ng(),wl(4194,"ul")(4195,"li"),Ux(4196,"Aceita o tipo "),wl(4197,"em"),Ux(4198,"string"),ng(),Ux(4199," no formato "),wl(4200,"strong"),Ux(4201,"ISO-8601"),ng(),Ux(4202," extendido "),wl(4203,"strong"),Ux(4204,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),ng(),Ux(4205,`
e o tipo `),wl(4206,"em"),Ux(4207,"Date"),ng(),Ux(4208," padr\xE3o do Javascript, por exemplo: "),wl(4209,"code"),Ux(4210,"'2017-11-28T00:00:00-02:00'"),ng(),Ux(4211," ou "),wl(4212,"code"),Ux(4213,"new Date(2017, 10, 28)"),ng(),Ux(4214,"."),ng(),wl(4215,"li"),Ux(4216,"Aceita o tipo "),wl(4217,"em"),Ux(4218,"string"),ng(),Ux(4219," nos formatos "),wl(4220,"strong"),Ux(4221,"'HH:mm:ss'"),ng(),Ux(4222," ou "),wl(4223,"strong"),Ux(4224,"'HH:mm:ss.ffffff'"),ng(),Ux(4225,", por exemplo: "),wl(4226,"code"),Ux(4227,"'23:12:45'"),ng(),Ux(4228,"."),ng()()()()()()(),wl(4229,"h4",44)(4230,"code",5),Ux(4231,"PoTableDetail"),ng()(),wl(4232,"div",2)(4233,"p"),Ux(4234,"Interface para configura\xE7\xE3o do "),wl(4235,"em"),Ux(4236,"detail"),ng(),Ux(4237," do componente "),wl(4238,"code"),Ux(4239,"po-table"),ng(),Ux(4240,"."),ng()(),wl(4241,"h4",13),Ux(4242,"Propriedades"),ng(),wl(4243,"table",14)(4244,"tr",15)(4245,"th",16),Ux(4246,"Nome"),ng(),wl(4247,"th",16),Ux(4248,"Tipo"),ng(),wl(4249,"th",16),Ux(4250,"Descri\xE7\xE3o"),ng()(),wl(4251,"tr",17)(4252,"td",18)(4253,"div",19)(4254,"span",20),Ux(4255," columns"),Ul(4256,"br"),ng()()(),wl(4257,"td",21)(4258,"code",111),Ux(4259,"Array<PoTableDetailColumn>"),ng()(),wl(4260,"td",24)(4261,"p"),Ux(4262,"Define uma lista do tipo "),wl(4263,"code"),Ux(4264,"PoTableDetailColumn"),ng(),Ux(4265," para as colunas do objet "),wl(4266,"em"),Ux(4267,"detail"),ng(),Ux(4268,". Por exemplo:"),ng(),wl(4269,"pre")(4270,"code"),Ux(4271,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),ng()()()(),wl(4272,"tr",17)(4273,"td",18)(4274,"div",19)(4275,"span",20),Ux(4276," hideSelect"),Ul(4277,"br"),ng()()(),wl(4278,"td",21)(4279,"code",22),Ux(4280,"boolean"),ng()(),wl(4281,"td",24)(4282,"em")(4283,"strong"),Ux(4284,"(opcional)"),ng()(),wl(4285,"p"),Ux(4286,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),ng()()(),wl(4287,"tr",17)(4288,"td",18)(4289,"div",19)(4290,"span",20),Ux(4291," typeHeader"),Ul(4292,"br"),ng()()(),wl(4293,"td",21)(4294,"code",31),Ux(4295,"string"),ng()(),wl(4296,"td",24)(4297,"em")(4298,"strong"),Ux(4299,"(opcional)"),ng()(),wl(4300,"p"),Ux(4301,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),wl(4302,"em"),Ux(4303,"detail"),ng(),Ux(4304," ."),ng(),wl(4305,"p"),Ux(4306,"Valores v\xE1lidos:"),ng(),wl(4307,"ul")(4308,"li")(4309,"code"),Ux(4310,"inline"),ng(),Ux(4311,": Atribui o cabe\xE7alho na mesma linha do "),wl(4312,"em"),Ux(4313,"detail"),ng(),Ux(4314,"."),ng(),wl(4315,"li")(4316,"code"),Ux(4317,"top"),ng(),Ux(4318,": Atribui o cabe\xE7alho acima do "),wl(4319,"em"),Ux(4320,"detail"),ng(),Ux(4321,", id\xEAntico ao "),wl(4322,"code"),Ux(4323,"po-table"),ng(),Ux(4324,"."),ng(),wl(4325,"li")(4326,"code"),Ux(4327,"none"),ng(),Ux(4328,": Remove o cabe\xE7alho do "),wl(4329,"em"),Ux(4330,"detail"),ng(),Ux(4331,"."),ng()()()()(),wl(4332,"h4",44)(4333,"code",5),Ux(4334,"PoTableSubtitleColumn"),ng()(),wl(4335,"div",2)(4336,"p"),Ux(4337,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),ng()(),wl(4338,"h4",13),Ux(4339,"Propriedades"),ng(),wl(4340,"table",14)(4341,"tr",15)(4342,"th",16),Ux(4343,"Nome"),ng(),wl(4344,"th",16),Ux(4345,"Tipo"),ng(),wl(4346,"th",16),Ux(4347,"Descri\xE7\xE3o"),ng()(),wl(4348,"tr",17)(4349,"td",18)(4350,"div",19)(4351,"span",20),Ux(4352," color"),Ul(4353,"br"),ng()()(),wl(4354,"td",21)(4355,"code",31),Ux(4356,"string"),ng()(),wl(4357,"td",24)(4358,"em")(4359,"strong"),Ux(4360,"(opcional)"),ng()(),wl(4361,"p"),Ux(4362,"Define a cor do "),wl(4363,"em"),Ux(4364,"status"),ng(),Ux(4365,"."),ng(),wl(4366,"p"),Ux(4367,"Valores v\xE1lidos:"),ng(),wl(4368,"ul")(4369,"li"),Ul(4370,"span",51),wl(4371,"code"),Ux(4372,"color-01"),ng()(),wl(4373,"li"),Ul(4374,"span",52),wl(4375,"code"),Ux(4376,"color-02"),ng()(),wl(4377,"li"),Ul(4378,"span",53),wl(4379,"code"),Ux(4380,"color-03"),ng()(),wl(4381,"li"),Ul(4382,"span",54),wl(4383,"code"),Ux(4384,"color-04"),ng()(),wl(4385,"li"),Ul(4386,"span",55),wl(4387,"code"),Ux(4388,"color-05"),ng()(),wl(4389,"li"),Ul(4390,"span",56),wl(4391,"code"),Ux(4392,"color-06"),ng()(),wl(4393,"li"),Ul(4394,"span",57),wl(4395,"code"),Ux(4396,"color-07"),ng()(),wl(4397,"li"),Ul(4398,"span",58),wl(4399,"code"),Ux(4400,"color-08"),ng()(),wl(4401,"li"),Ul(4402,"span",59),wl(4403,"code"),Ux(4404,"color-09"),ng()(),wl(4405,"li"),Ul(4406,"span",60),wl(4407,"code"),Ux(4408,"color-10"),ng()(),wl(4409,"li"),Ul(4410,"span",61),wl(4411,"code"),Ux(4412,"color-11"),ng()(),wl(4413,"li"),Ul(4414,"span",62),wl(4415,"code"),Ux(4416,"color-12"),ng()()(),wl(4417,"blockquote")(4418,"p"),Ux(4419,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),wl(4420,"strong"),Ux(4421,"Caption Tag Colors"),ng(),Ux(4422,":"),ng()(),wl(4423,"ul")(4424,"li"),Ul(4425,"span",63),wl(4426,"code"),Ux(4427,"caption-tag-01"),ng(),Ul(4428,"span",64),wl(4429,"code"),Ux(4430,"caption-tag-02"),ng(),Ul(4431,"span",65),wl(4432,"code"),Ux(4433,"caption-tag-03"),ng(),Ul(4434,"span",66),wl(4435,"code"),Ux(4436,"caption-tag-04"),ng(),Ul(4437,"span",67),wl(4438,"code"),Ux(4439,"caption-tag-05"),ng()(),wl(4440,"li"),Ul(4441,"span",68),wl(4442,"code"),Ux(4443,"caption-tag-06"),ng(),Ul(4444,"span",69),wl(4445,"code"),Ux(4446,"caption-tag-07"),ng(),Ul(4447,"span",70),wl(4448,"code"),Ux(4449,"caption-tag-08"),ng(),Ul(4450,"span",71),wl(4451,"code"),Ux(4452,"caption-tag-09"),ng(),Ul(4453,"span",72),wl(4454,"code"),Ux(4455,"caption-tag-10"),ng()(),wl(4456,"li"),Ul(4457,"span",73),wl(4458,"code"),Ux(4459,"caption-tag-11"),ng(),Ul(4460,"span",74),wl(4461,"code"),Ux(4462,"caption-tag-12"),ng(),Ul(4463,"span",75),wl(4464,"code"),Ux(4465,"caption-tag-13"),ng(),Ul(4466,"span",76),wl(4467,"code"),Ux(4468,"caption-tag-14"),ng(),Ul(4469,"span",77),wl(4470,"code"),Ux(4471,"caption-tag-15"),ng()(),wl(4472,"li"),Ul(4473,"span",78),wl(4474,"code"),Ux(4475,"caption-tag-16"),ng(),Ul(4476,"span",79),wl(4477,"code"),Ux(4478,"caption-tag-17"),ng(),Ul(4479,"span",80),wl(4480,"code"),Ux(4481,"caption-tag-18"),ng(),Ul(4482,"span",81),wl(4483,"code"),Ux(4484,"caption-tag-19"),ng(),Ul(4485,"span",82),wl(4486,"code"),Ux(4487,"caption-tag-20"),ng()(),wl(4488,"li"),Ul(4489,"span",83),wl(4490,"code"),Ux(4491,"caption-tag-21"),ng(),Ul(4492,"span",84),wl(4493,"code"),Ux(4494,"caption-tag-22"),ng(),Ul(4495,"span",85),wl(4496,"code"),Ux(4497,"caption-tag-23"),ng(),Ul(4498,"span",86),wl(4499,"code"),Ux(4500,"caption-tag-24"),ng(),Ul(4501,"span",87),wl(4502,"code"),Ux(4503,"caption-tag-25"),ng()(),wl(4504,"li"),Ul(4505,"span",88),wl(4506,"code"),Ux(4507,"caption-tag-26"),ng(),Ul(4508,"span",89),wl(4509,"code"),Ux(4510,"caption-tag-27"),ng(),Ul(4511,"span",90),wl(4512,"code"),Ux(4513,"caption-tag-28"),ng(),Ul(4514,"span",91),wl(4515,"code"),Ux(4516,"caption-tag-29"),ng(),Ul(4517,"span",92),wl(4518,"code"),Ux(4519,"caption-tag-30"),ng()(),wl(4520,"li"),Ul(4521,"span",93),wl(4522,"code"),Ux(4523,"caption-tag-31"),ng(),Ul(4524,"span",94),wl(4525,"code"),Ux(4526,"caption-tag-32"),ng(),Ul(4527,"span",95),wl(4528,"code"),Ux(4529,"caption-tag-33"),ng(),Ul(4530,"span",96),wl(4531,"code"),Ux(4532,"caption-tag-34"),ng(),Ul(4533,"span",97),wl(4534,"code"),Ux(4535,"caption-tag-35"),ng()()()()(),wl(4536,"tr",17)(4537,"td",18)(4538,"div",19)(4539,"span",20),Ux(4540," content"),Ul(4541,"br"),ng()()(),wl(4542,"td",21)(4543,"code",31),Ux(4544,"string"),ng()(),wl(4545,"td",24)(4546,"p"),Ux(4547,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),ng()()(),wl(4548,"tr",17)(4549,"td",18)(4550,"div",19)(4551,"span",20),Ux(4552," label"),Ul(4553,"br"),ng()()(),wl(4554,"td",21)(4555,"code",31),Ux(4556,"string"),ng()(),wl(4557,"td",24)(4558,"p"),Ux(4559,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),ng()()(),wl(4560,"tr",17)(4561,"td",18)(4562,"div",19)(4563,"span",20),Ux(4564," value"),Ul(4565,"br"),ng()()(),wl(4566,"td",21)(4567,"code",31),Ux(4568,"string "),ng(),wl(4569,"code",35),Ux(4570," number"),ng()(),wl(4571,"td",24)(4572,"p"),Ux(4573,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),ng()()()(),wl(4574,"h3"),Ux(4575,"Enums"),ng(),wl(4576,"h4",4)(4577,"code",5),Ux(4578,"PoTableColumnSortType"),ng()(),wl(4579,"div",2)(4580,"p"),Ux(4581,"Tipos de ordena\xE7\xE3o das colunas da tabela."),ng()(),wl(4582,"h4",13),Ux(4583,"Propriedades"),ng(),wl(4584,"table",14)(4585,"tr",15)(4586,"th",16),Ux(4587,"Nome"),ng(),wl(4588,"th",16),Ux(4589,"Descri\xE7\xE3o"),ng()(),wl(4590,"tr",17)(4591,"td",18)(4592,"div",19)(4593,"span",20),Ux(4594," Ascending"),Ul(4595,"br"),ng()()(),wl(4596,"td",24)(4597,"p"),Ux(4598,"Ordena\xE7\xE3o ascendente"),ng()()(),wl(4599,"tr",17)(4600,"td",18)(4601,"div",19)(4602,"span",20),Ux(4603," Descending"),Ul(4604,"br"),ng()()(),wl(4605,"td",24)(4606,"p"),Ux(4607,"Ordena\xE7\xE3o descendente"),ng()()()(),wl(4608,"h4",4)(4609,"code",5),Ux(4610,"PoTableColumnSpacing"),ng()(),wl(4611,"div",2)(4612,"p"),Ux(4613,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),wl(4614,"strong"),Ux(4615,"p-spacing"),ng(),Ux(4616,") do po-table."),ng()(),wl(4617,"h4",13),Ux(4618,"Propriedades"),ng(),wl(4619,"table",14)(4620,"tr",15)(4621,"th",16),Ux(4622,"Nome"),ng(),wl(4623,"th",16),Ux(4624,"Descri\xE7\xE3o"),ng()(),wl(4625,"tr",17)(4626,"td",18)(4627,"div",19)(4628,"span",20),Ux(4629," ExtraSmall"),Ul(4630,"br"),ng()()(),wl(4631,"td",24)(4632,"p"),Ux(4633,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),ng()()(),wl(4634,"tr",17)(4635,"td",18)(4636,"div",19)(4637,"span",20),Ux(4638," Small"),Ul(4639,"br"),ng()()(),wl(4640,"td",24)(4641,"p"),Ux(4642,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),ng()()(),wl(4643,"tr",17)(4644,"td",18)(4645,"div",19)(4646,"span",20),Ux(4647," Medium"),Ul(4648,"br"),ng()()(),wl(4649,"td",24)(4650,"p"),Ux(4651,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),ng()()(),wl(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),Ux(4656," Large"),Ul(4657,"br"),ng()()(),wl(4658,"td",24)(4659,"p"),Ux(4660,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),ng()()()()());},dependencies:[fP],encapsulation:2})}return r})();var gt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(C(Xn),C(Cn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut$1("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-table-doc"),ng(),wl(4,"po-tab",3),ut$1("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),ng()()()),l&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,Ze,at,rt,st,pt,ut,Et,xt,ht],encapsulation:2})}return r})();var dn=[{path:"",component:gt}],vt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue({imports:[vL.forChild(dn),vL]})}return r})();var Di=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue({imports:[u5,vt]})}return r})();export{Di as DocPoTableModule};