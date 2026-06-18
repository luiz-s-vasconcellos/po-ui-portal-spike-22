import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,w,c$ as Xi,dw as Up,s,c as r$1,aW as Yp,c5 as zde,dE as _h,b$ as ET,I,b7 as A3,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt$1,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,bH as E3,c9 as Qhe,b6 as Yo,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,X as we,av as ql,aw as lo,ax as uo,cI as C3,b5 as jhe,aJ as Ghe,dF as Que,ba as bNe,a2 as QE,dG as jO,a4 as vN,cH as iN,a6 as DN,as as sN,di as Yue,dk as PO,aQ as px,aR as hx,aS as gx,r as rb,a3 as pNe,aA as Tx,br as oN,A as vw,a5 as _N,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var ut=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Ge=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&Wl(0,"po-table",0),l&2&&tw("p-items",dN(2,bt,uN(1,ut)));},dependencies:[A3],encapsulation:2,changeDetection:1})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-basic/sample-po-table-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,St,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ge],encapsulation:2})}return r})();var se=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(a){return {text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return `${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xe=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=Xi.Medium;filterType=Up.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(a){this.event=a;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(a){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(a){this.height&&(this.items=a);}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=Xi.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(C(se))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(o.poModal=m.first);}},standalone:false,features:[we([se])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=Ex();Sl(0,"po-table",1),ht("p-all-selected",function(){return o.changeEvent("p-all-selected")})("p-all-unselected",function(){return o.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return o.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return o.changeEvent("p-collapsed")})("p-expanded",function(){return o.changeEvent("p-expanded")})("p-selected",function(){return o.changeEvent("p-selected")})("p-show-more",function(){return o.showMore()})("p-unselected",function(){return o.changeEvent("p-unselected")})("p-delete-items",function(d){return o.deleteItems(d)}),sg(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3),sg(),Wl(4,"po-divider"),Sl(5,"div",2)(6,"po-button",4),ht("p-click",function(){return o.addItem()}),sg()(),Wl(7,"po-divider"),Sl(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),Ew("ngModelChange",function(d){return Xy(m),tN(o.columnsName,d)||(o.columnsName=d),Qy(d)}),ht("p-change",function(){return o.updateColumns()}),sg(),JA(),sg(),Sl(12,"div",2)(13,"po-radio-group",6),Ew("ngModelChange",function(d){return Xy(m),tN(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),Qy(d)}),sg(),JA(),Sl(14,"po-switch",7),Ew("ngModelChange",function(d){return Xy(m),tN(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),Qy(d)}),sg(),JA(),sg(),Sl(15,"div",2)(16,"po-checkbox-group",8),Ew("ngModelChange",function(d){return Xy(m),tN(o.properties,d)||(o.properties=d),Qy(d)}),sg(),JA(),sg(),Sl(17,"div",2)(18,"po-checkbox-group",9),Ew("ngModelChange",function(d){return Xy(m),tN(o.actionsDefinition,d)||(o.actionsDefinition=d),Qy(d)}),ht("p-change",function(){return o.changeActionOptions()}),sg(),JA(),sg(),Sl(19,"div",2)(20,"po-radio-group",10),Ew("ngModelChange",function(d){return Xy(m),tN(o.spacing,d)||(o.spacing=d),Qy(d)}),sg(),JA(),sg(),Sl(21,"div",2)(22,"po-checkbox-group",11),Ew("ngModelChange",function(d){return Xy(m),tN(o.selection,d)||(o.selection=d),Qy(d)}),ht("p-change",function(){return o.changeSelectionOptions()}),sg(),JA(),Sl(23,"po-radio-group",12),Ew("ngModelChange",function(d){return Xy(m),tN(o.filterType,d)||(o.filterType=d),Qy(d)}),sg(),JA(),Sl(24,"po-radio-group",13),Ew("ngModelChange",function(d){return Xy(m),tN(o.componentsSize,d)||(o.componentsSize=d),Qy(d)}),sg(),JA(),sg(),Sl(25,"div",2)(26,"po-input",14),Ew("ngModelChange",function(d){return Xy(m),tN(o.literals,d)||(o.literals=d),Qy(d)}),ht("p-change",function(){return o.changeLiterals()}),sg(),JA(),Sl(27,"po-input",15),Ew("ngModelChange",function(d){return Xy(m),tN(o.filteredColumns,d)||(o.filteredColumns=d),Qy(d)}),ht("p-change",function(){return o.changeFilteredColumns()}),sg(),JA(),Sl(28,"po-number",16),Ew("ngModelChange",function(d){return Xy(m),tN(o.height,d)||(o.height=d),Qy(d)}),sg(),JA(),Sl(29,"po-number",17),Ew("ngModelChange",function(d){return Xy(m),tN(o.maxColumns,d)||(o.maxColumns=d),Qy(d)}),sg(),JA(),sg(),Sl(30,"div",2)(31,"po-button",18),ht("p-click",function(){return o.restore()}),sg()()(),Sl(32,"po-modal",19),Wl(33,"po-info",20),sg();}l&2&&(tw("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),Vp(3),tw("p-value",o.event),Vp(8),Dw("ngModel",o.columnsName),tw("p-options",o.columnsOptions),t0(),Vp(2),Dw("ngModel",o.columnsDefinition.detail.detail.typeHeader),tw("p-options",o.typeHeaderOptions),t0(),Vp(),Dw("ngModel",o.columnsDefinition.detail.detail.hideSelect),t0(),Vp(2),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),t0(),Vp(2),Dw("ngModel",o.actionsDefinition),tw("p-options",o.actionsDefinitionOptions),t0(),Vp(2),Dw("ngModel",o.spacing),tw("p-options",o.typeSpacing),t0(),Vp(2),Dw("ngModel",o.selection),tw("p-options",o.selectionOptions),t0(),Vp(),Dw("ngModel",o.filterType),tw("p-options",o.filterModeOptions),t0(),Vp(),Dw("ngModel",o.componentsSize),tw("p-options",o.componentsSizeOptions),t0(),Vp(2),Dw("ngModel",o.literals),t0(),Vp(),Dw("ngModel",o.filteredColumns),t0(),Vp(),Dw("ngModel",o.height),t0(),Vp(),Dw("ngModel",o.maxColumns),t0(),Vp(4),tw("p-value",o.currentItem));},dependencies:[J9,K9,X9,Dk,vk,Qt$1,mv,x3,F3,Uhe,Pde,E3,Qhe,Yo,A3],encapsulation:2,changeDetection:1})}return r})();var vt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-labs/sample-po-table-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-table
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-labs"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,vt,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Xe],encapsulation:2})}return r})();var Ct=["table"],Ye=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=s(r$1({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(a){this.sampleService=a;}onChangeColumns(a){try{this.columns=JSON.parse(a);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&ql(Ct,5),l&2){let m;lo(m=uo())&&(o.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=Ex();Sl(0,"div",1)(1,"po-input",2),Ew("ngModelChange",function(d){return Xy(m),tN(o.service,d)||(o.service=d),Qy(d)}),ht("p-change",function(){return o.changeService(o.service)}),sg(),JA(),sg(),Sl(2,"div",1),Wl(3,"po-divider",3),Sl(4,"po-textarea",4),Ew("ngModelChange",function(d){return Xy(m),tN(o.stringColumns,d)||(o.stringColumns=d),Qy(d)}),ht("p-change",function(d){return o.onChangeColumns(d)}),sg(),JA(),sg(),Sl(5,"div",1),Wl(6,"po-divider",5),Sl(7,"po-input",6),Ew("ngModelChange",function(d){return Xy(m),tN(o.key,d)||(o.key=d),Qy(d)}),sg(),JA(),Sl(8,"po-input",7),Ew("ngModelChange",function(d){return Xy(m),tN(o.value,d)||(o.value=d),Qy(d)}),sg(),JA(),sg(),Sl(9,"div",1)(10,"po-button",8),ht("p-click",function(){return o.addFilter(o.key,o.value)}),sg()(),Sl(11,"div",1)(12,"po-disclaimer-group",9),ht("p-remove",function(d){return o.removeItem(d)})("p-remove-all",function(){return o.removeAllItems()}),sg()(),Sl(13,"div",1),Wl(14,"po-table",10,0),sg();}l&2&&(Vp(),Dw("ngModel",o.service),t0(),Vp(3),Dw("ngModel",o.stringColumns),tw("p-rows",5),t0(),Vp(3),Dw("ngModel",o.key),t0(),Vp(),Dw("ngModel",o.value),t0(),Vp(2),tw("p-disabled",!o.key||!o.value),Vp(2),tw("p-disclaimers",o.filters),Vp(2),tw("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[K9,Dk,Qt$1,C3,mv,F3,jhe,A3],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table using API"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-with-api"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Tt,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ye],encapsulation:2})}return r})();var de=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function wt(r,J){if(r&1){let a=Ex();Sl(0,"po-widget",2)(1,"div",3)(2,"po-select",4),Ew("ngModelChange",function(o){let m=Xy(a).$implicit;return tN(m.status,o)||(m.status=o),Qy(o)}),sg(),JA(),sg(),Sl(3,"div",3),Wl(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),sg()();}if(r&2){let a=J.$implicit,l=Tx();tw("p-title",oN("Transport detail ",a.code)),Vp(2),Dw("ngModel",a.status),tw("p-options",l.statusOptions),t0(),Vp(2),tw("p-value",a.batch_product),Vp(),tw("p-value",a.driver),Vp(),tw("p-value",a.license_plate);}}var et=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(C(de))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([de])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(Sl(0,"po-table",0),QE(1,wt,7,7,"ng-template",1),sg()),l&2&&(tw("p-auto-collapse",true)("p-columns",o.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",o.items)("p-sort",true)("p-striped",true),Vp(),tw("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered));},dependencies:[K9,Dk,Ghe,Qhe,A3,Que,bNe],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table - Transport"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-transport/sample-po-table-transport.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-table
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-transport"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,At,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,et],encapsulation:2})}return r})();var pe=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var nt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>s(r$1({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}});}confirmItems(a){a.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(a){a.value&&(this.total-=a.value);}deleteItems(a){this.items=a;}details(a){this.detail=a,this.poModal.open();}remove(a){this.poTable.removeItem(a);}discount(a){if(!a.disableDiscount){let l=s(r$1({},a),{value:a.value-a.value*.2,disableDiscount:true});this.poTable.updateItem(a,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(a){a.value&&(this.total+=a.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(a){localStorage.setItem("initial-columns",a);}getDescription(a){return `Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(C(pe),C(Yp),C(zde))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7)(A3,7),l&2){let m;lo(m=uo())&&(o.poModal=m.first),lo(m=uo())&&(o.poTable=m.first);}},standalone:false,features:[we([pe,zde])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(Sl(0,"div",0),Jx(1,"Choose one or more promotional airfares"),sg(),Wl(2,"po-divider"),Sl(3,"po-table",1),ht("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),sg(),Wl(4,"po-divider")(5,"po-info",2),vN(6,"currency"),Wl(7,"po-info",3),Sl(8,"div",4)(9,"po-button",5),ht("p-click",function(){return o.addToCart()}),sg(),Sl(10,"po-button",6),ht("p-click",function(){return o.expandAll()}),sg(),Sl(11,"po-button",7),ht("p-click",function(){return o.collapseAll()}),sg()(),Sl(12,"po-modal",8),Wl(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),sg()),l&2&&(Vp(3),tw("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",false),Vp(2),tw("p-value",iN(DN(6,21,o.total,"USD"))),Vp(2),tw("p-value",o.totalExpanded),Vp(5),tw("p-title",sN("",o.detail?.destination," - ",o.detail?.country)),Vp(),tw("p-value",o.detail==null?null:o.detail.airline),Vp(),tw("p-value",o.detail==null?null:o.detail.initials),Vp(),tw("p-value",o.detail==null?null:o.detail.class));},dependencies:[Qt$1,mv,Qhe,Yo,A3,jO],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table - Airfare"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-airfare"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ft,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,nt],encapsulation:2})}return r})();var H=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(H||{});var ce=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=false){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],xe=m.split(".")[1];return a[d][xe]<l[d][xe]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}else return a[m]<l[m]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,J){if(r&1&&(Sl(0,"div"),Jx(1),vN(2,"uppercase"),sg()),r&2){let a=J.$implicit;Hx(oN("badge ",a)),Vp(),vw(_N(2,4,a));}}function Rt(r,J){if(r&1&&(Sl(0,"ul")(1,"li",4),Jx(2),sg(),Wl(3,"po-divider"),sg()),r&2){let a=J.$implicit;Vp(2),vw(a);}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(a){return a?.component?.status===H.Experimental?"caption-tag-08":"caption-tag-13"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open();}goToDocumentation(a){this.router.navigate([a?.component?.link]);}showMore(a){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=false;},4e3);}sort(a){this.items=this.getItems(a);}showAlert(a){alert(a);}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite;}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(C(ce),C(wn))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&ql(Yo,7),l&2){let m;lo(m=uo())&&(o.poModal=m.first);}},standalone:false,features:[we([ce])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,o){l&1&&(Sl(0,"div",0),Jx(1,"PO UI Library"),sg(),Wl(2,"po-divider"),Sl(3,"po-table",1),ht("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),QE(4,Bt,3,6,"ng-template",2),sg(),Sl(5,"po-modal",3),px(6,Rt,4,1,"ul",null,hx),sg()),l&2&&(Vp(3),tw("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",true),Vp(),tw("p-property","component.type"),Vp(),tw("p-title",sN("",o.title," - ",o.extraInformation?.component)),Vp(),gx(o.extraInformation?.extras));},dependencies:[mv,Yo,A3,Yue,PO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var Nt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table - Po Field Components"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-components/sample-po-table-components.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-components/sample-po-table-components.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-table-components/sample-po-table-components.enum.ts"),sg(),Sl(23,"pre",9),Jx(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),sg(),Sl(25,"label",6),Jx(26,"sample-po-table-components/sample-po-table-components.service.ts"),sg(),Sl(27,"pre",9),Jx(28,`import { Injectable } from '@angular/core';

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
`),sg()()(),Sl(29,"po-tab",10)(30,"div")(31,"label",6),Jx(32,"sample-po-table-components/sample-po-table-components.component.css"),sg(),Sl(33,"pre",11),Jx(34,`.badge {
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
`),sg()()()()(),Sl(35,"div",12),Wl(36,"sample-po-table-components"),sg(),Wl(37,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Nt,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ot],encapsulation:2})}return r})();var ue=(()=>{class r{http;constructor(a){this.http=a;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(ET("items"))}static \u0275fac=function(l){return new(l||r)(I(rb))};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=["POItemsOri"],Wt=["POItemsSelected"],lt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)});}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else {let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(a){this.items=a,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(C(ue))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&ql(jt,7)(Wt,7),l&2){let m;lo(m=uo())&&(o.poItemsOri=m.first),lo(m=uo())&&(o.poItemsSelected=m.first);}},standalone:false,features:[we([ue])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){l&1&&(Sl(0,"div",2)(1,"div",3)(2,"div",4),Jx(3,"Choose one or more heroes for your team"),sg(),Sl(4,"po-table",5,0),ht("p-selected",function(p){return o.changeOptions(p,"new")})("p-unselected",function(p){return o.changeOptions(p,"change")})("p-delete-items",function(p){return o.deleteItems(p)}),sg()(),Sl(6,"div",3)(7,"div",4),Jx(8,"Here your chosen heroes"),sg(),Wl(9,"po-table",6,1),sg()()),l&2&&(Vp(4),tw("p-columns",o.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",o.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Vp(5),tw("p-columns",o.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[A3],encapsulation:2,changeDetection:1})}return r})();var Qt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table - Heroes"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row po-pb-2">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-table-heroes"),sg(),Wl(27,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Qt,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,lt],encapsulation:2})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),$t=r=>[r],mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(Sl(0,"div",0),Jx(1,` Choose one column and drag to another horizontal position in the table and drop
`),sg(),Wl(2,"po-divider")(3,"po-table",1)),l&2&&(Vp(3),tw("p-items",dN(5,$t,uN(4,Jt)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[mv,A3],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Table Drag and Drop"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-table-draggable"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Kt,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,mt],encapsulation:2})}return r})();var dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4661,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-table"),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoTableComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),sg(),Sl(15,"p"),Jx(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Sl(17,"strong"),Jx(18,"Carregar mais resultados"),sg(),Jx(19,"."),sg(),Sl(20,"blockquote")(21,"p"),Jx(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),Sl(23,"a",6)(24,"code"),Jx(25,"p-table-row-template"),sg()(),Jx(26,"."),sg()(),Sl(27,"blockquote")(28,"p"),Jx(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),Sl(30,"a",7)(31,"code"),Jx(32,"p-table-column-template"),sg()(),Jx(33,`
e `),Sl(34,"a",8)(35,"code"),Jx(36,"p-table-cell-template"),sg()(),Jx(37,"."),sg()(),Sl(38,"p"),Jx(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),sg(),Sl(40,"p"),Jx(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),Sl(42,"em"),Jx(43,"scroll"),sg(),Jx(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),sg(),Sl(45,"h4"),Jx(46,"Tokens customiz\xE1veis"),sg(),Sl(47,"p"),Jx(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(49,"blockquote")(50,"p"),Jx(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(52,"a",9),Jx(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(54,"."),sg()(),Sl(55,"table")(56,"thead")(57,"tr")(58,"th"),Jx(59,"Propriedade"),sg(),Sl(60,"th"),Jx(61,"Descri\xE7\xE3o"),sg(),Sl(62,"th"),Jx(63,"Valor Padr\xE3o"),sg()()(),Sl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),Jx(68,"Default Values"),sg()(),Wl(69,"td")(70,"td"),sg(),Sl(71,"tr")(72,"td")(73,"code"),Jx(74,"--font-family"),sg()(),Sl(75,"td"),Jx(76,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(77,"td")(78,"code"),Jx(79,"var(--font-family-theme)"),sg()()(),Sl(80,"tr")(81,"td")(82,"code"),Jx(83,"--background-color"),sg()(),Sl(84,"td"),Jx(85,"Cor de background"),sg(),Sl(86,"td")(87,"code"),Jx(88,"var(--color-neutral-light-00)"),sg()()(),Sl(89,"tr")(90,"td")(91,"code"),Jx(92,"--color"),sg()(),Sl(93,"td"),Jx(94,"Cor principal da table"),sg(),Sl(95,"td")(96,"code"),Jx(97,"var(--color-neutral-dark-95)"),sg()()(),Sl(98,"tr")(99,"td")(100,"code"),Jx(101,"--background-striped-color"),sg()(),Sl(102,"td"),Jx(103,"Cor do background quando striped"),sg(),Sl(104,"td")(105,"code"),Jx(106,"var(--color-neutral-light-05)"),sg()()(),Sl(107,"tr")(108,"td")(109,"code"),Jx(110,"--color-line"),sg()(),Sl(111,"td"),Jx(112,"Cor das linhas"),sg(),Sl(113,"td")(114,"code"),Jx(115,"var(--color-neutral-mid-40)"),sg()()(),Sl(116,"tr")(117,"td")(118,"strong"),Jx(119,"Hover"),sg()(),Wl(120,"td")(121,"td"),sg(),Sl(122,"tr")(123,"td")(124,"code"),Jx(125,"--color-hover"),sg()(),Sl(126,"td"),Jx(127,"Cor principal no estado hover"),sg(),Sl(128,"td")(129,"code"),Jx(130,"var(--color-action-hover)"),sg()()(),Sl(131,"tr")(132,"td")(133,"code"),Jx(134,"--background-color-hover"),sg()(),Sl(135,"td"),Jx(136,"Cor de background no estado hover"),sg(),Sl(137,"td")(138,"code"),Jx(139,"var(--color-brand-01-lighter)"),sg()()(),Sl(140,"tr")(141,"td")(142,"strong"),Jx(143,"Focused"),sg()(),Wl(144,"td")(145,"td"),sg(),Sl(146,"tr")(147,"td")(148,"code"),Jx(149,"--outline-color-focused"),sg()(),Sl(150,"td"),Jx(151,"Cor do outline do estado de focus"),sg(),Sl(152,"td")(153,"code"),Jx(154,"var(--color-action-focus)"),sg()()(),Sl(155,"tr")(156,"td")(157,"strong"),Jx(158,"Disabled"),sg()(),Wl(159,"td")(160,"td"),sg(),Sl(161,"tr")(162,"td")(163,"code"),Jx(164,"--color-disabled"),sg()(),Sl(165,"td"),Jx(166,"Cor principal no estado disabled"),sg(),Sl(167,"td")(168,"code"),Jx(169,"var(--color-neutral-mid-40)"),sg()()(),Sl(170,"tr")(171,"td")(172,"strong"),Jx(173,"Headline"),sg()(),Wl(174,"td")(175,"td"),sg(),Sl(176,"tr")(177,"td")(178,"code"),Jx(179,"--background-color-headline"),sg(),Jx(180," \xA0"),sg(),Sl(181,"td"),Jx(182,"Cor do cabe\xE7alho"),sg(),Sl(183,"td")(184,"code"),Jx(185,"var(--color-neutral-light-10)"),sg()()(),Sl(186,"tr")(187,"td")(188,"code"),Jx(189,"--font-weight-headline"),sg()(),Sl(190,"td"),Jx(191,"Peso da fonte do cabe\xE7alho"),sg(),Sl(192,"td")(193,"code"),Jx(194,"var(--font-weight-bold)"),sg()()(),Sl(195,"tr")(196,"td")(197,"strong"),Jx(198,"Selected"),sg()(),Wl(199,"td")(200,"td"),sg(),Sl(201,"tr")(202,"td")(203,"code"),Jx(204,"--background-color-selected"),sg(),Jx(205,"\xA0"),sg(),Sl(206,"td"),Jx(207,"Cor de background no estado de selecionado"),sg(),Sl(208,"td")(209,"code"),Jx(210,"var(--color-brand-01-lightest)"),sg()()(),Sl(211,"tr")(212,"td")(213,"strong"),Jx(214,"Actived"),sg()(),Wl(215,"td")(216,"td"),sg(),Sl(217,"tr")(218,"td")(219,"code"),Jx(220,"--color-actived"),sg()(),Sl(221,"td"),Jx(222,"Cor do texto no estado de selecionado"),sg(),Sl(223,"td")(224,"code"),Jx(225,"var(--color-neutral-dark-90)"),sg()()(),Sl(226,"tr")(227,"td")(228,"code"),Jx(229,"--background-color-actived"),sg()(),Sl(230,"td"),Jx(231,"Cor de background no estado de selecionado"),sg(),Sl(232,"td")(233,"code"),Jx(234,"var(--color-brand-01-light)"),sg()()()()()(),Sl(235,"div",10)(236,"h4",11),Jx(237,"Seletor"),sg(),Sl(238,"pre",12),Jx(239,`<po-table
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
`),sg()(),Sl(240,"h4",13),Jx(241,"Propriedades"),sg(),Sl(242,"table",14)(243,"tr",15)(244,"th",16),Jx(245,"Nome"),sg(),Sl(246,"th",16),Jx(247,"Tipo"),sg(),Sl(248,"th",16),Jx(249,"Padr\xE3o"),sg(),Sl(250,"th",16),Jx(251,"Descri\xE7\xE3o"),sg()(),Sl(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),Jx(256," p-actions-right"),Wl(257,"br"),sg()()(),Sl(258,"td",21)(259,"code",22),Jx(260,"boolean"),sg()(),Sl(261,"td",23)(262,"p")(263,"code"),Jx(264,"false"),sg()()(),Sl(265,"td",24)(266,"em")(267,"strong"),Jx(268,"(opcional)"),sg()(),Sl(269,"p"),Jx(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),sg()()(),Sl(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),Jx(275," p-actions"),Wl(276,"br"),sg()()(),Sl(277,"td",21)(278,"code",25),Jx(279,"PoTableAction[]"),sg()(),Sl(280,"td",23),Jx(281,"-"),sg(),Sl(282,"td",24)(283,"em")(284,"strong"),Jx(285,"(opcional)"),sg()(),Sl(286,"p"),Jx(287,"Define uma lista de a\xE7\xF5es."),sg(),Sl(288,"p"),Jx(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Sl(290,"a",26)(291,"strong"),Jx(292,"an an-dots-three"),sg()(),Jx(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),sg(),Sl(294,"p")(295,"strong"),Jx(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),sg()(),Sl(297,"ul")(298,"li"),Jx(299,"a lista conter valores inv\xE1lidos ou indefinidos."),sg(),Sl(300,"li"),Jx(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),sg()()()(),Sl(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),Jx(306," (p-all-selected)"),Wl(307,"br"),sg()()(),Sl(308,"td",21)(309,"code",29),Jx(310,"EventEmitter"),sg()(),Sl(311,"td",23),Jx(312,"-"),sg(),Sl(313,"td",24)(314,"em")(315,"strong"),Jx(316,"(opcional)"),sg()(),Sl(317,"p"),Jx(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),Sl(319,"em"),Jx(320,"checkbox"),sg(),Jx(321," que seleciona todas as linhas."),sg()()(),Sl(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),Jx(326," (p-all-unselected)"),Wl(327,"br"),sg()()(),Sl(328,"td",21)(329,"code",29),Jx(330,"EventEmitter"),sg()(),Sl(331,"td",23),Jx(332,"-"),sg(),Sl(333,"td",24)(334,"em")(335,"strong"),Jx(336,"(opcional)"),sg()(),Sl(337,"p"),Jx(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),Sl(339,"em"),Jx(340,"checkbox"),sg(),Jx(341," que seleciona todas as linhas."),sg()()(),Sl(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),Jx(346," p-auto-collapse"),Wl(347,"br"),sg()()(),Sl(348,"td",21)(349,"code",22),Jx(350,"boolean"),sg()(),Sl(351,"td",23)(352,"p")(353,"code"),Jx(354,"false"),sg()()(),Sl(355,"td",24)(356,"em")(357,"strong"),Jx(358,"(opcional)"),sg()(),Sl(359,"p"),Jx(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),sg()()(),Sl(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),Jx(365," (p-change-fixed-columns)"),Wl(366,"br"),sg()()(),Sl(367,"td",21)(368,"code",29),Jx(369,"EventEmitter"),sg()(),Sl(370,"td",23),Jx(371,"-"),sg(),Sl(372,"td",24)(373,"em")(374,"strong"),Jx(375,"(opcional)"),sg()(),Sl(376,"p"),Jx(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),sg(),Sl(378,"p"),Jx(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),sg(),Sl(380,"blockquote")(381,"p"),Jx(382,"Incompat\xEDvel com "),Sl(383,"code"),Jx(384,"p-hide-action-fixed-columns"),sg(),Jx(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),sg()()()(),Sl(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),Jx(390," (p-change-visible-columns)"),Wl(391,"br"),sg()()(),Sl(392,"td",21)(393,"code",29),Jx(394,"EventEmitter"),sg()(),Sl(395,"td",23),Jx(396,"-"),sg(),Sl(397,"td",24)(398,"em")(399,"strong"),Jx(400,"(opcional)"),sg()(),Sl(401,"p"),Jx(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Sl(403,"p"),Jx(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Sl(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),Jx(409," (p-collapsed)"),Wl(410,"br"),sg()()(),Sl(411,"td",21)(412,"code",29),Jx(413,"EventEmitter"),sg()(),Sl(414,"td",23),Jx(415,"-"),sg(),Sl(416,"td",24)(417,"em")(418,"strong"),Jx(419,"(opcional)"),sg()(),Sl(420,"p"),Jx(421,"Evento executado ao colapsar uma linha do "),Sl(422,"code"),Jx(423,"po-table"),sg(),Jx(424,"."),sg(),Sl(425,"blockquote")(426,"p"),Jx(427,"Como par\xE2metro o componente envia o item colapsado."),sg()()()(),Sl(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),Jx(432," (p-restore-column-manager)"),Wl(433,"br"),sg()()(),Sl(434,"td",21)(435,"code",29),Jx(436,"EventEmitter"),sg()(),Sl(437,"td",23),Jx(438,"-"),sg(),Sl(439,"td",24)(440,"em")(441,"strong"),Jx(442,"(opcional)"),sg()(),Sl(443,"p"),Jx(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Sl(445,"p"),Jx(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Sl(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),Jx(451," p-columns"),Wl(452,"br"),sg()()(),Sl(453,"td",21)(454,"code",30),Jx(455,"PoTableColumn[]"),sg()(),Sl(456,"td",23),Jx(457,"-"),sg(),Sl(458,"td",24)(459,"em")(460,"strong"),Jx(461,"(opcional)"),sg()(),Sl(462,"p"),Jx(463,"Lista das colunas da tabela, deve receber um "),Sl(464,"em"),Jx(465,"array"),sg(),Jx(466," de objetos que implementam a interface "),Sl(467,"code"),Jx(468,"PoTableColumn"),sg(),Jx(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),sg(),Sl(470,"blockquote")(471,"p"),Jx(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),sg()()()(),Sl(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),Jx(477," p-components-size"),Wl(478,"br"),sg()()(),Sl(479,"td",21)(480,"code",31),Jx(481,"string"),sg()(),Sl(482,"td",23)(483,"p")(484,"code"),Jx(485,"medium"),sg()()(),Sl(486,"td",24)(487,"em")(488,"strong"),Jx(489,"(opcional)"),sg()(),Sl(490,"p"),Jx(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),sg(),Sl(492,"ul")(493,"li")(494,"code"),Jx(495,"small"),sg(),Jx(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(497,"li")(498,"code"),Jx(499,"medium"),sg(),Jx(500,": aplica a medida medium de cada componente."),sg()(),Sl(501,"blockquote")(502,"p"),Jx(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(504,"code"),Jx(505,"medium"),sg(),Jx(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(507,"a",32),Jx(508,"po-theme"),sg(),Jx(509,"."),sg()()()(),Sl(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),Jx(514," p-container"),Wl(515,"br"),sg()()(),Sl(516,"td",21)(517,"code",31),Jx(518,"string"),sg()(),Sl(519,"td",23)(520,"p")(521,"code"),Jx(522,"border"),sg()()(),Sl(523,"td",24)(524,"em")(525,"strong"),Jx(526,"(opcional)"),sg()(),Sl(527,"p"),Jx(528,"Adiciona um contorno arredondado ao "),Sl(529,"code"),Jx(530,"po-table"),sg(),Jx(531,", as op\xE7\xF5es s\xE3o:"),sg(),Sl(532,"ul")(533,"li")(534,"code"),Jx(535,"border"),sg(),Jx(536,": com bordas/linhas."),sg(),Sl(537,"li")(538,"code"),Jx(539,"shadow"),sg(),Jx(540,": com sombras."),sg()()()(),Sl(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),Jx(545," p-draggable"),Wl(546,"br"),sg()()(),Sl(547,"td",21)(548,"code",22),Jx(549,"boolean"),sg()(),Sl(550,"td",23)(551,"p")(552,"code"),Jx(553,"false"),sg()()(),Sl(554,"td",24)(555,"em")(556,"strong"),Jx(557,"(opcional)"),sg()(),Sl(558,"p"),Jx(559,"Habilita o modo drag and drop para as colunas da tabela."),sg()()(),Sl(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),Jx(564," (p-delete-items)"),Wl(565,"br"),sg()()(),Sl(566,"td",21)(567,"code",29),Jx(568,"EventEmitter"),sg()(),Sl(569,"td",23),Jx(570,"-"),sg(),Sl(571,"td",24)(572,"em")(573,"strong"),Jx(574,"(opcional)"),sg()(),Sl(575,"p"),Jx(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),sg(),Sl(577,"pre")(578,"code"),Jx(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),sg()(),Sl(580,"blockquote")(581,"p"),Jx(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),sg()()()(),Sl(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),Jx(587," (p-expanded)"),Wl(588,"br"),sg()()(),Sl(589,"td",21)(590,"code",29),Jx(591,"EventEmitter"),sg()(),Sl(592,"td",23),Jx(593,"-"),sg(),Sl(594,"td",24)(595,"em")(596,"strong"),Jx(597,"(opcional)"),sg()(),Sl(598,"p"),Jx(599,"Evento executado ao expandir uma linha do "),Sl(600,"code"),Jx(601,"po-table"),sg(),Jx(602,"."),sg(),Sl(603,"blockquote")(604,"p"),Jx(605,"Como par\xE2metro o componente envia o item expandido."),sg()()()(),Sl(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),Jx(610," p-filter-type"),Wl(611,"br"),sg()()(),Sl(612,"td",21)(613,"code",33),Jx(614,"PoSearchFilterMode"),sg()(),Sl(615,"td",23)(616,"p")(617,"code"),Jx(618,"startsWith"),sg()()(),Sl(619,"td",24)(620,"em")(621,"strong"),Jx(622,"(opcional)"),sg()(),Sl(623,"p"),Jx(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),sg(),Sl(625,"blockquote")(626,"p"),Jx(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),sg()()()(),Sl(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),Jx(632," p-filtered-columns"),Wl(633,"br"),sg()()(),Sl(634,"td",21)(635,"code",34),Jx(636,"Array<string>"),sg()(),Sl(637,"td",23),Jx(638,"-"),sg(),Sl(639,"td",24)(640,"em")(641,"strong"),Jx(642,"(opcional)"),sg()(),Sl(643,"p"),Jx(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),sg()()(),Sl(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),Jx(649," p-height"),Wl(650,"br"),sg()()(),Sl(651,"td",21)(652,"code",35),Jx(653,"number"),sg()(),Sl(654,"td",23),Jx(655,"-"),sg(),Sl(656,"td",24)(657,"em")(658,"strong"),Jx(659,"(opcional)"),sg()(),Sl(660,"p"),Jx(661,"Define a altura da tabela em "),Sl(662,"em"),Jx(663,"pixels"),sg(),Jx(664," e fixa o cabe\xE7alho."),sg(),Sl(665,"p"),Jx(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),Sl(667,"code"),Jx(668,"virtual-scroll"),sg(),Jx(669," na tabela melhorando a performance."),sg()()(),Sl(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),Jx(674," p-hide-action-fixed-columns"),Wl(675,"br"),sg()()(),Sl(676,"td",21)(677,"code",22),Jx(678,"boolean"),sg()(),Sl(679,"td",23)(680,"p")(681,"code"),Jx(682,"false"),sg()()(),Sl(683,"td",24)(684,"em")(685,"strong"),Jx(686,"(opcional)"),sg()(),Sl(687,"p"),Jx(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),sg()()(),Sl(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),Jx(693," p-hide-batch-actions"),Wl(694,"br"),sg()()(),Sl(695,"td",21)(696,"code",22),Jx(697,"boolean"),sg()(),Sl(698,"td",23)(699,"p")(700,"code"),Jx(701,"true"),sg()()(),Sl(702,"td",24)(703,"em")(704,"strong"),Jx(705,"(opcional)"),sg()(),Sl(706,"p"),Jx(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),sg()()(),Sl(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),Jx(712," p-hide-columns-manager"),Wl(713,"br"),sg()()(),Sl(714,"td",21)(715,"code",22),Jx(716,"boolean"),sg()(),Sl(717,"td",23)(718,"p")(719,"code"),Jx(720,"false"),sg()()(),Sl(721,"td",24)(722,"em")(723,"strong"),Jx(724,"(opcional)"),sg()(),Sl(725,"p"),Jx(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),sg()()(),Sl(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),Jx(731," p-hide-detail"),Wl(732,"br"),sg()()(),Sl(733,"td",21)(734,"code",22),Jx(735,"boolean"),sg()(),Sl(736,"td",23)(737,"p")(738,"code"),Jx(739,"false"),sg()()(),Sl(740,"td",24)(741,"em")(742,"strong"),Jx(743,"(opcional)"),sg()(),Sl(744,"p"),Jx(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),sg()()(),Sl(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),Jx(750," p-hide-select-all"),Wl(751,"br"),sg()()(),Sl(752,"td",21)(753,"code",22),Jx(754,"boolean"),sg()(),Sl(755,"td",23)(756,"p")(757,"code"),Jx(758,"false"),sg()()(),Sl(759,"td",24)(760,"p"),Jx(761,"Esconde o "),Sl(762,"em"),Jx(763,"checkbox"),sg(),Jx(764," para sele\xE7\xE3o de todas as linhas."),sg(),Sl(765,"blockquote")(766,"p"),Jx(767,"Sempre receber\xE1 "),Sl(768,"em"),Jx(769,"true"),sg(),Jx(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),sg()()()(),Sl(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),Jx(775," p-hide-table-search"),Wl(776,"br"),sg()()(),Sl(777,"td",21)(778,"code",22),Jx(779,"boolean"),sg()(),Sl(780,"td",23)(781,"p")(782,"code"),Jx(783,"true"),sg()()(),Sl(784,"td",24)(785,"em")(786,"strong"),Jx(787,"(opcional)"),sg()(),Sl(788,"p"),Jx(789,"Permite que o campo de pesquisa seja escondido."),sg()()(),Sl(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),Jx(794," p-infinite-scroll"),Wl(795,"br"),sg()()(),Sl(796,"td",21)(797,"code",22),Jx(798,"boolean"),sg()(),Sl(799,"td",23)(800,"p")(801,"code"),Jx(802,"false"),sg()()(),Sl(803,"td",24)(804,"em")(805,"strong"),Jx(806,"(opcional)"),sg()(),Sl(807,"p"),Jx(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Sl(809,"code"),Jx(810,"p-show-more"),sg(),Jx(811,"."),sg(),Sl(812,"p")(813,"strong"),Jx(814,"Regras de utiliza\xE7\xE3o:"),sg()(),Sl(815,"ul")(816,"li"),Jx(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),Sl(818,"code"),Jx(819,"p-height"),sg(),Jx(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),sg()()()(),Sl(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),Jx(825," p-infinite-scroll-distance"),Wl(826,"br"),sg()()(),Sl(827,"td",21)(828,"code",35),Jx(829,"number"),sg()(),Sl(830,"td",23),Jx(831,"-"),sg(),Sl(832,"td",24)(833,"em")(834,"strong"),Jx(835,"(opcional)"),sg()(),Sl(836,"p"),Jx(837,"Define o percentual necess\xE1rio para disparar o evento "),Sl(838,"code"),Jx(839,"p-show-more"),sg(),Jx(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),sg(),Sl(841,"p")(842,"strong"),Jx(843,"Exemplos:"),sg()(),Sl(844,"ul")(845,"li"),Jx(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),Sl(847,"code"),Jx(848,"p-show-more"),sg(),Jx(849," ser\xE1 disparado."),sg()()()(),Sl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),Jx(854," p-items"),Wl(855,"br"),sg()()(),Sl(856,"td",21)(857,"code",36),Jx(858,"any[]"),sg()(),Sl(859,"td",23),Jx(860,"-"),sg(),Sl(861,"td",24)(862,"p"),Jx(863,"Lista de itens da tabela."),sg(),Sl(864,"blockquote")(865,"p"),Jx(866,"Se falso, ser\xE1 inicializado como um "),Sl(867,"em"),Jx(868,"array"),sg(),Jx(869," vazio."),sg()()()(),Sl(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),Jx(874," p-literals"),Wl(875,"br"),sg()()(),Sl(876,"td",21)(877,"code",37),Jx(878,"PoTableLiterals"),sg()(),Sl(879,"td",23),Jx(880,"-"),sg(),Sl(881,"td",24)(882,"em")(883,"strong"),Jx(884,"(opcional)"),sg()(),Sl(885,"p"),Jx(886,"Objeto com as literais usadas no "),Sl(887,"code"),Jx(888,"po-table"),sg(),Jx(889,"."),sg(),Sl(890,"p"),Jx(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Sl(892,"pre")(893,"code"),Jx(894,`const customLiterals: PoTableLiterals = {
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
`),sg()(),Sl(895,"p"),Jx(896,"Ou passando apenas as literais que deseja customizar:"),sg(),Sl(897,"pre")(898,"code"),Jx(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),sg()(),Sl(900,"p"),Jx(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(902,"pre")(903,"code"),Jx(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),sg()(),Sl(905,"blockquote")(906,"p"),Jx(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Sl(908,"a",38)(909,"code"),Jx(910,"PoI18nService"),sg()(),Jx(911," ou do browser."),sg()()()(),Sl(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),Jx(916," p-loading"),Wl(917,"br"),sg()()(),Sl(918,"td",21)(919,"code",22),Jx(920,"boolean"),sg()(),Sl(921,"td",23)(922,"p")(923,"code"),Jx(924,"false"),sg()()(),Sl(925,"td",24)(926,"em")(927,"strong"),Jx(928,"(opcional)"),sg()(),Sl(929,"p"),Jx(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),Sl(931,"em"),Jx(932,"table"),sg(),Jx(933,"."),sg()()(),Sl(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),Jx(938," p-loading-show-more"),Wl(939,"br"),sg()()(),Sl(940,"td",21)(941,"code",22),Jx(942,"boolean"),sg()(),Sl(943,"td",23)(944,"p")(945,"code"),Jx(946,"false"),sg()()(),Sl(947,"td",24)(948,"em")(949,"strong"),Jx(950,"(opcional)"),sg()(),Sl(951,"p"),Jx(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),sg()()(),Sl(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),Jx(957," p-max-columns"),Wl(958,"br"),sg()()(),Sl(959,"td",21)(960,"code",35),Jx(961,"number"),sg()(),Sl(962,"td",23),Jx(963,"-"),sg(),Sl(964,"td",24)(965,"em")(966,"strong"),Jx(967,"(opcional)"),sg()(),Sl(968,"p"),Jx(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),sg(),Sl(970,"p"),Jx(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),sg()()(),Sl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),Jx(976," p-param-delete-api"),Wl(977,"br"),sg()()(),Sl(978,"td",21)(979,"code",31),Jx(980,"string"),sg()(),Sl(981,"td",23)(982,"p")(983,"code"),Jx(984,"id"),sg()()(),Sl(985,"td",24)(986,"em")(987,"strong"),Jx(988,"(opcional)"),sg()(),Sl(989,"p"),Jx(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),sg(),Sl(991,"p"),Jx(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),Sl(993,"code"),Jx(994,"p-service-delete"),sg(),Jx(995," em conjunto."),sg()()(),Sl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),Jx(1e3," p-selectable"),Wl(1001,"br"),sg()()(),Sl(1002,"td",21)(1003,"code",22),Jx(1004,"boolean"),sg()(),Sl(1005,"td",23)(1006,"p")(1007,"code"),Jx(1008,"false"),sg()()(),Sl(1009,"td",24)(1010,"em")(1011,"strong"),Jx(1012,"(opcional)"),sg()(),Sl(1013,"p"),Jx(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),Sl(1015,"code"),Jx(1016,"p-single-select"),sg(),Jx(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),sg(),Sl(1018,"p")(1019,"strong"),Jx(1020,"Importante:"),sg()(),Sl(1021,"ul")(1022,"li"),Jx(1023,"As linhas de detalhe definidas em "),Sl(1024,"code"),Jx(1025,"PoTableDetail"),sg(),Jx(1026," possuem comportamento independente da linha mestre;"),sg(),Sl(1027,"li"),Jx(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),Sl(1029,"code"),Jx(1030,"$selected"),sg(),Jx(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Sl(1032,"code"),Jx(1033,"item.$selected"),sg(),Jx(1034," ou "),Sl(1035,"code"),Jx(1036,"item['$selected']"),sg(),Jx(1037,"."),sg()()()(),Sl(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),Jx(1042," p-selectable-entire-line"),Wl(1043,"br"),sg()()(),Sl(1044,"td",21)(1045,"code",22),Jx(1046,"boolean"),sg()(),Sl(1047,"td",23)(1048,"p")(1049,"code"),Jx(1050,"true"),sg()()(),Sl(1051,"td",24)(1052,"p"),Jx(1053,"Permite selecionar um item da tabela clicando na linha."),sg(),Sl(1054,"blockquote")(1055,"p"),Jx(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),Sl(1057,"code"),Jx(1058,"false"),sg(),Jx(1059,"."),sg()()()(),Sl(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),Jx(1064," (p-selected)"),Wl(1065,"br"),sg()()(),Sl(1066,"td",21)(1067,"code",29),Jx(1068,"EventEmitter"),sg()(),Sl(1069,"td",23),Jx(1070,"-"),sg(),Sl(1071,"td",24)(1072,"em")(1073,"strong"),Jx(1074,"(opcional)"),sg()(),Sl(1075,"p"),Jx(1076,"Evento executado ao selecionar uma linha do "),Sl(1077,"code"),Jx(1078,"po-table"),sg(),Jx(1079,"."),sg()()(),Sl(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),Jx(1084," p-service-api"),Wl(1085,"br"),sg()()(),Sl(1086,"td",21)(1087,"code",31),Jx(1088,"string"),sg()(),Sl(1089,"td",23),Jx(1090,"-"),sg(),Sl(1091,"td",24)(1092,"em")(1093,"strong"),Jx(1094,"(opcional)"),sg()(),Sl(1095,"p"),Jx(1096,"URL da API respons\xE1vel por retornar os registros."),sg(),Sl(1097,"p"),Jx(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),Sl(1099,"code"),Jx(1100,"page"),sg(),Jx(1101," e "),Sl(1102,"code"),Jx(1103,"pageSize"),sg(),Jx(1104,", conforme abaixo:"),sg(),Sl(1105,"pre")(1106,"code"),Jx(1107,`url + ?page=1&pageSize=10
`),sg()(),Sl(1108,"p"),Jx(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Sl(1110,"code"),Jx(1111,"order"),sg(),Jx(1112,", por exemplo:"),sg(),Sl(1113,"ul")(1114,"li")(1115,"p"),Jx(1116,"Coluna decrescente:"),sg(),Sl(1117,"pre")(1118,"code"),Jx(1119,`url + ?page=1&pageSize=10&order=-name
`),sg()()(),Sl(1120,"li")(1121,"p"),Jx(1122,"Coluna ascendente:"),sg(),Sl(1123,"pre")(1124,"code"),Jx(1125,`url + ?page=1&pageSize=10&order=name
`),sg()()()(),Sl(1126,"blockquote")(1127,"p"),Jx(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(1129,"a",39),Jx(1130,"API do PO UI"),sg(),Jx(1131,"."),sg()()()(),Sl(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),Jx(1136," p-service-delete"),Wl(1137,"br"),sg()()(),Sl(1138,"td",21)(1139,"code",31),Jx(1140,"string"),sg()(),Sl(1141,"td",23),Jx(1142,"-"),sg(),Sl(1143,"td",24)(1144,"em")(1145,"strong"),Jx(1146,"(opcional)"),sg()(),Sl(1147,"p"),Jx(1148,"URL da API respons\xE1vel por excluir os registros."),sg(),Sl(1149,"p"),Jx(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),Sl(1151,"code"),Jx(1152,"p-param-delete-api"),sg(),Jx(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Sl(1154,"code"),Jx(1155,"id"),sg(),Jx(1156,"."),sg(),Sl(1157,"blockquote")(1158,"p"),Jx(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Sl(1160,"a",39),Jx(1161,"API do PO UI"),sg(),Jx(1162,"."),sg()()()(),Sl(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),Jx(1167," (p-show-more)"),Wl(1168,"br"),sg()()(),Sl(1169,"td",21)(1170,"code",29),Jx(1171,"EventEmitter"),sg()(),Sl(1172,"td",23),Jx(1173,"-"),sg(),Sl(1174,"td",24)(1175,"em")(1176,"strong"),Jx(1177,"(opcional)"),sg()(),Sl(1178,"p"),Jx(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),sg(),Sl(1180,"p"),Jx(1181,"Recebe um objeto "),Sl(1182,"code"),Jx(1183,"{ column, type }"),sg(),Jx(1184," onde:"),sg(),Sl(1185,"ul")(1186,"li"),Jx(1187,"column ("),Sl(1188,"code"),Jx(1189,"PoTableColumn"),sg(),Jx(1190,"): objeto da coluna que est\xE1 ordenada."),sg(),Sl(1191,"li"),Jx(1192,"type ("),Sl(1193,"code"),Jx(1194,"PoTableColumnSortType"),sg(),Jx(1195,"): tipo da ordena\xE7\xE3o."),sg()()()(),Sl(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),Jx(1200," p-show-more-disabled"),Wl(1201,"br"),sg()()(),Sl(1202,"td",21)(1203,"code",22),Jx(1204,"boolean"),sg()(),Sl(1205,"td",23)(1206,"p")(1207,"code"),Jx(1208,"false"),sg()()(),Sl(1209,"td",24)(1210,"p"),Jx(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),sg()()(),Sl(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),Jx(1216," p-single-select"),Wl(1217,"br"),sg()()(),Sl(1218,"td",21)(1219,"code",22),Jx(1220,"boolean"),sg()(),Sl(1221,"td",23),Jx(1222,"-"),sg(),Sl(1223,"td",24)(1224,"p"),Jx(1225,"Define que somente uma linha da tabela pode ser selecionada."),sg(),Sl(1226,"blockquote")(1227,"p"),Jx(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),sg()()()(),Sl(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),Jx(1233," p-sort"),Wl(1234,"br"),sg()()(),Sl(1235,"td",21)(1236,"code",22),Jx(1237,"boolean"),sg()(),Sl(1238,"td",23)(1239,"p")(1240,"code"),Jx(1241,"false"),sg()()(),Sl(1242,"td",24)(1243,"em")(1244,"strong"),Jx(1245,"(opcional)"),sg()(),Sl(1246,"p"),Jx(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),sg()()(),Sl(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),Jx(1252," (p-sort-by)"),Wl(1253,"br"),sg()()(),Sl(1254,"td",21)(1255,"code",29),Jx(1256,"EventEmitter"),sg()(),Sl(1257,"td",23),Jx(1258,"-"),sg(),Sl(1259,"td",24)(1260,"em")(1261,"strong"),Jx(1262,"(opcional)"),sg()(),Sl(1263,"p"),Jx(1264,"Evento executado ao ordenar colunas da tabela."),sg(),Sl(1265,"p"),Jx(1266,"Recebe um objeto "),Sl(1267,"code"),Jx(1268,"{ column, type }"),sg(),Jx(1269," onde:"),sg(),Sl(1270,"ul")(1271,"li"),Jx(1272,"column ("),Sl(1273,"code"),Jx(1274,"PoTableColumn"),sg(),Jx(1275,"): objeto da coluna que foi clicada/ordenada."),sg(),Sl(1276,"li"),Jx(1277,"type ("),Sl(1278,"code"),Jx(1279,"PoTableColumnSortType"),sg(),Jx(1280,"): tipo da ordena\xE7\xE3o."),sg()()()(),Sl(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),Jx(1285," p-spacing"),Wl(1286,"br"),sg()()(),Sl(1287,"td",21)(1288,"code",31),Jx(1289,"string"),sg()(),Sl(1290,"td",23)(1291,"p")(1292,"code"),Jx(1293,"medium"),sg()()(),Sl(1294,"td",24)(1295,"em")(1296,"strong"),Jx(1297,"(opcional)"),sg()(),Sl(1298,"p"),Jx(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Sl(1300,"strong"),Jx(1301,"PoTableColumnSpacing"),sg(),Jx(1302,"."),sg(),Sl(1303,"blockquote")(1304,"p"),Jx(1305,"Em n\xEDvel de acessibilidade "),Sl(1306,"strong"),Jx(1307,"AA"),sg(),Jx(1308,", caso o valor de "),Sl(1309,"code"),Jx(1310,"p-spacing"),sg(),Jx(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Sl(1312,"code"),Jx(1313,"extraSmall"),sg(),Jx(1314,`
nos seguintes cen\xE1rios:`),sg(),Sl(1315,"ul")(1316,"li"),Jx(1317,"Quando o valor de "),Sl(1318,"code"),Jx(1319,"p-components-size"),sg(),Jx(1320," for "),Sl(1321,"code"),Jx(1322,"small"),sg(),Jx(1323,";"),sg(),Sl(1324,"li"),Jx(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),Sl(1326,"code"),Jx(1327,"small"),sg(),Jx(1328,` no
`),Sl(1329,"a",32),Jx(1330,"servi\xE7o de tema"),sg(),Jx(1331,"."),sg()()()()(),Sl(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),Jx(1336," p-striped"),Wl(1337,"br"),sg()()(),Sl(1338,"td",21)(1339,"code",22),Jx(1340,"boolean"),sg()(),Sl(1341,"td",23)(1342,"p")(1343,"code"),Jx(1344,"false"),sg()()(),Sl(1345,"td",24)(1346,"p"),Jx(1347,"Habilita ou desabilita o estilo listrado da tabela ("),Sl(1348,"code"),Jx(1349,"striped"),sg(),Jx(1350,")."),sg(),Sl(1351,"blockquote")(1352,"p"),Jx(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),sg()()()(),Sl(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),Jx(1358," p-text-wrap"),Wl(1359,"br"),sg()()(),Sl(1360,"td",21)(1361,"code",22),Jx(1362,"boolean"),sg()(),Sl(1363,"td",23)(1364,"p")(1365,"code"),Jx(1366,"false"),sg()()(),Sl(1367,"td",24)(1368,"em")(1369,"strong"),Jx(1370,"(opcional)"),sg()(),Sl(1371,"p"),Jx(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg(),Sl(1373,"blockquote")(1374,"p"),Jx(1375,"Incompat\xEDvel com "),Sl(1376,"code"),Jx(1377,"virtual-scroll"),sg(),Jx(1378,", que requer altura fixa nas linhas."),sg()()()(),Sl(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),Jx(1383," (p-unselected)"),Wl(1384,"br"),sg()()(),Sl(1385,"td",21)(1386,"code",29),Jx(1387,"EventEmitter"),sg()(),Sl(1388,"td",23),Jx(1389,"-"),sg(),Sl(1390,"td",24)(1391,"em")(1392,"strong"),Jx(1393,"(opcional)"),sg()(),Sl(1394,"p"),Jx(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),Sl(1396,"code"),Jx(1397,"po-table"),sg(),Jx(1398,"."),sg()()(),Sl(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),Jx(1403," p-virtual-scroll"),Wl(1404,"br"),sg()()(),Sl(1405,"td",21)(1406,"code",22),Jx(1407,"boolean"),sg()(),Sl(1408,"td",23)(1409,"p")(1410,"code"),Jx(1411,"true"),sg()()(),Sl(1412,"td",24)(1413,"em")(1414,"strong"),Jx(1415,"(opcional)"),sg()(),Sl(1416,"p"),Jx(1417,"Habilita o "),Sl(1418,"code"),Jx(1419,"virtual-scroll"),sg(),Jx(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Sl(1421,"code"),Jx(1422,"p-height"),sg(),Jx(1423,") para funcionar corretamente."),sg(),Sl(1424,"blockquote")(1425,"p"),Jx(1426,"Incompat\xEDvel com "),Sl(1427,"code"),Jx(1428,"p-text-wrap"),sg(),Jx(1429," e "),Sl(1430,"code"),Jx(1431,"master-detail"),sg(),Jx(1432,", pois o "),Sl(1433,"code"),Jx(1434,"virtual-scroll"),sg(),Jx(1435," exige altura fixa nas linhas."),sg()()()()(),Sl(1436,"h3",13),Jx(1437,"M\xE9todos"),sg(),Sl(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),Jx(1444," applyFilters "),sg()()()()(),Sl(1445,"tr",24)(1446,"td",24)(1447,"p"),Jx(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),sg(),Sl(1449,"p"),Jx(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),sg(),Sl(1451,"pre")(1452,"code"),Jx(1453,`url + ?page=1&pageSize=10
`),sg()(),Sl(1454,"blockquote")(1455,"p"),Jx(1456,"Obs: os par\xE2metros "),Sl(1457,"code"),Jx(1458,"page"),sg(),Jx(1459," e "),Sl(1460,"code"),Jx(1461,"pageSize"),sg(),Jx(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),sg()(),Sl(1463,"p"),Jx(1464,"Caso sejam informados os par\xE2metros "),Sl(1465,"code"),Jx(1466,"{ name: 'JOHN', age: '23' }"),sg(),Jx(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),sg(),Sl(1468,"pre")(1469,"code"),Jx(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),sg()()()()(),Sl(1471,"h5")(1472,"b"),Jx(1473,"Par\xE2metros"),sg()(),Sl(1474,"table",14)(1475,"tr",15)(1476,"th",16),Jx(1477,"Nome"),sg(),Sl(1478,"th",16),Jx(1479,"Tipo"),sg(),Sl(1480,"th",16),Jx(1481,"Descri\xE7\xE3o"),sg()(),Sl(1482,"tr",17)(1483,"td",18),Jx(1484," queryParams"),sg(),Sl(1485,"td",21)(1486,"code",42),Jx(1487," { key: value } "),sg()(),Sl(1488,"td",24)(1489,"p"),Jx(1490,"Formato do objeto a ser enviado."),sg(),Sl(1491,"blockquote")(1492,"p"),Jx(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),sg()()()()(),Wl(1494,"br"),Sl(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),Jx(1501," applyFixedColumns "),sg()()()()(),Sl(1502,"tr",24)(1503,"td",24)(1504,"p"),Jx(1505,"Verifica se columns possuem a propriedade width."),sg()()()(),Wl(1506,"br"),Sl(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),Jx(1513," collapse "),sg()()()()(),Sl(1514,"tr",24)(1515,"td",24)(1516,"p"),Jx(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),sg()()()(),Sl(1518,"h5")(1519,"b"),Jx(1520,"Par\xE2metros"),sg()(),Sl(1521,"table",14)(1522,"tr",15)(1523,"th",16),Jx(1524,"Nome"),sg(),Sl(1525,"th",16),Jx(1526,"Tipo"),sg(),Sl(1527,"th",16),Jx(1528,"Descri\xE7\xE3o"),sg()(),Sl(1529,"tr",17)(1530,"td",18),Jx(1531," rowIndex"),sg(),Sl(1532,"td",21)(1533,"code",43),Jx(1534," number "),sg()(),Sl(1535,"td",24)(1536,"p"),Jx(1537,"\xCDndice da linha que ser\xE1 colapsada."),sg(),Sl(1538,"blockquote")(1539,"p"),Jx(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),sg()()()()(),Wl(1541,"br"),Sl(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),Jx(1548," expand "),sg()()()()(),Sl(1549,"tr",24)(1550,"td",24)(1551,"p"),Jx(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),sg()()()(),Sl(1553,"h5")(1554,"b"),Jx(1555,"Par\xE2metros"),sg()(),Sl(1556,"table",14)(1557,"tr",15)(1558,"th",16),Jx(1559,"Nome"),sg(),Sl(1560,"th",16),Jx(1561,"Tipo"),sg(),Sl(1562,"th",16),Jx(1563,"Descri\xE7\xE3o"),sg()(),Sl(1564,"tr",17)(1565,"td",18),Jx(1566," rowIndex"),sg(),Sl(1567,"td",21)(1568,"code",43),Jx(1569," number "),sg()(),Sl(1570,"td",24)(1571,"p"),Jx(1572,"\xCDndice da linha que ser\xE1 expandida."),sg(),Sl(1573,"blockquote")(1574,"p"),Jx(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),sg()()()()(),Wl(1576,"br"),Sl(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),Jx(1583," getSelectedRows "),sg()()()()(),Sl(1584,"tr",24)(1585,"td",24)(1586,"p"),Jx(1587,"Retorna as linhas do "),Sl(1588,"code"),Jx(1589,"po-table"),sg(),Jx(1590," que est\xE3o selecionadas."),sg()()()(),Wl(1591,"br"),Sl(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),Jx(1598," getUnselectedRows "),sg()()()()(),Sl(1599,"tr",24)(1600,"td",24)(1601,"p"),Jx(1602,"Retorna as linhas do "),Sl(1603,"code"),Jx(1604,"po-table"),sg(),Jx(1605," que n\xE3o est\xE3o selecionadas."),sg()()()(),Wl(1606,"br"),Sl(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),Jx(1613," unselectRows "),sg()()()()(),Sl(1614,"tr",24)(1615,"td",24)(1616,"p"),Jx(1617,"Desmarca as linhas que est\xE3o selecionadas."),sg()()()(),Wl(1618,"br"),Sl(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),Jx(1625," unselectRowItem "),sg()()()()(),Sl(1626,"tr",24)(1627,"td",24)(1628,"p"),Jx(1629,"Desmarca uma linha que est\xE1 selecionada."),sg()()()(),Wl(1630,"br"),Sl(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),Jx(1637," selectRowItem "),sg()()()()(),Sl(1638,"tr",24)(1639,"td",24)(1640,"p"),Jx(1641,"Seleciona uma linha do 'po-table'."),sg()()()(),Wl(1642,"br"),Sl(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),Jx(1649," deleteItems "),sg()()()()(),Sl(1650,"tr",24)(1651,"td",24)(1652,"p"),Jx(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Sl(1654,"code"),Jx(1655,"p-service-delete"),sg(),Jx(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),sg(),Sl(1657,"p"),Jx(1658,"Ao utilizar "),Sl(1659,"code"),Jx(1660,"p-service-delete"),sg(),Jx(1661," mas sem a propriedade "),Sl(1662,"code"),Jx(1663,"p-service-api"),sg(),Jx(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),sg(),Sl(1665,"p"),Jx(1666,"Caso a tabela utilize "),Sl(1667,"code"),Jx(1668,"p-height"),sg(),Jx(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),Sl(1670,"code"),Jx(1671,"(p-delete-items)"),sg(),Jx(1672,", por exemplo:"),sg(),Sl(1673,"pre")(1674,"code"),Jx(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),sg()()()()(),Wl(1676,"br"),Sl(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),Jx(1683," removeItem "),sg()()()()(),Sl(1684,"tr",24)(1685,"td",24)(1686,"p"),Jx(1687,"M\xE9todo que remove um item da tabela."),sg()()()(),Sl(1688,"h5")(1689,"b"),Jx(1690,"Par\xE2metros"),sg()(),Sl(1691,"table",14)(1692,"tr",15)(1693,"th",16),Jx(1694,"Nome"),sg(),Sl(1695,"th",16),Jx(1696,"Tipo"),sg(),Sl(1697,"th",16),Jx(1698,"Descri\xE7\xE3o"),sg()(),Sl(1699,"tr",17)(1700,"td",18),Jx(1701," item"),sg(),Sl(1702,"td",21)(1703,"code",35),Jx(1704," number "),sg(),Sl(1705,"code",42),Jx(1706," { key: value } "),sg()(),Sl(1707,"td",24)(1708,"p"),Jx(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),sg(),Sl(1710,"blockquote")(1711,"p"),Jx(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),sg()()()()(),Wl(1713,"br"),Sl(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),Jx(1720," updateItem "),sg()()()()(),Sl(1721,"tr",24)(1722,"td",24)(1723,"p"),Jx(1724,"M\xE9todo que atualiza um item da tabela."),sg()()()(),Sl(1725,"h5")(1726,"b"),Jx(1727,"Par\xE2metros"),sg()(),Sl(1728,"table",14)(1729,"tr",15)(1730,"th",16),Jx(1731,"Nome"),sg(),Sl(1732,"th",16),Jx(1733,"Tipo"),sg(),Sl(1734,"th",16),Jx(1735,"Descri\xE7\xE3o"),sg()(),Sl(1736,"tr",17)(1737,"td",18),Jx(1738," item"),sg(),Sl(1739,"td",21)(1740,"code",35),Jx(1741," number "),sg(),Sl(1742,"code",42),Jx(1743," { key: value } "),sg()(),Sl(1744,"td",24)(1745,"p"),Jx(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),sg()()(),Sl(1747,"tr",17)(1748,"td",18),Jx(1749," updatedItem"),sg(),Sl(1750,"td",21)(1751,"code",42),Jx(1752," { key: value } "),sg()(),Sl(1753,"td",24)(1754,"p"),Jx(1755,"Item que foi atualizado."),sg(),Sl(1756,"blockquote")(1757,"p"),Jx(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),sg()()()()(),Wl(1759,"br"),Sl(1760,"h3"),Jx(1761,"Interfaces"),sg(),Sl(1762,"h4",44)(1763,"code",5),Jx(1764,"PoTableAction"),sg()(),Sl(1765,"div",2)(1766,"p"),Jx(1767,"Interface para lista de a\xE7\xF5es do componente. "),sg()(),Sl(1768,"h4",13),Jx(1769,"Propriedades"),sg(),Sl(1770,"table",14)(1771,"tr",15)(1772,"th",16),Jx(1773,"Nome"),sg(),Sl(1774,"th",16),Jx(1775,"Tipo"),sg(),Sl(1776,"th",16),Jx(1777,"Descri\xE7\xE3o"),sg()(),Sl(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),Jx(1782," action"),Wl(1783,"br"),sg()()(),Sl(1784,"td",21)(1785,"code",45),Jx(1786,"Function"),sg()(),Sl(1787,"td",24)(1788,"em")(1789,"strong"),Jx(1790,"(opcional)"),sg()(),Sl(1791,"p"),Jx(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Sl(1793,"p"),Jx(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1795,"code"),Jx(1796,"subItems"),sg(),Jx(1797,"."),sg(),Sl(1798,"blockquote")(1799,"p"),Jx(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Sl(1801,"em"),Jx(1802,"bind"),sg(),Jx(1803,`:
`),Sl(1804,"code"),Jx(1805,"action: this.myFunction.bind(this)"),sg()()()()(),Sl(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),Jx(1810," disabled"),Wl(1811,"br"),sg()()(),Sl(1812,"td",21)(1813,"code",22),Jx(1814,"boolean "),sg(),Sl(1815,"code",45),Jx(1816," Function"),sg()(),Sl(1817,"td",24)(1818,"em")(1819,"strong"),Jx(1820,"(opcional)"),sg()(),Sl(1821,"p"),Jx(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Sl(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),Jx(1827," icon"),Wl(1828,"br"),sg()()(),Sl(1829,"td",21)(1830,"code",31),Jx(1831,"string "),sg(),Sl(1832,"code",46),Jx(1833," TemplateRef<void>"),sg()(),Sl(1834,"td",24)(1835,"em")(1836,"strong"),Jx(1837,"(opcional)"),sg()(),Sl(1838,"p"),Jx(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Sl(1840,"p"),Jx(1841,"Aceita \xEDcones da "),Sl(1842,"a",26),Jx(1843,"Biblioteca de \xEDcones"),sg(),Jx(1844,`, fontes externas (ex: Font Awesome)
ou um `),Sl(1845,"code"),Jx(1846,"TemplateRef"),sg(),Jx(1847," para \xEDcones customizados."),sg(),Sl(1848,"pre")(1849,"code"),Jx(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Sl(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),Jx(1855," label"),Wl(1856,"br"),sg()()(),Sl(1857,"td",21)(1858,"code",31),Jx(1859,"string"),sg()(),Sl(1860,"td",24)(1861,"p"),Jx(1862,"R\xF3tulo da a\xE7\xE3o."),sg(),Sl(1863,"p"),Jx(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Sl(1865,"code"),Jx(1866,"subItems"),sg(),Jx(1867,"."),sg()()(),Sl(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),Jx(1872," selected"),Wl(1873,"br"),sg()()(),Sl(1874,"td",21)(1875,"code",22),Jx(1876,"boolean"),sg()(),Sl(1877,"td",24)(1878,"em")(1879,"strong"),Jx(1880,"(opcional)"),sg()(),Sl(1881,"p"),Jx(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Sl(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),Jx(1887," separator"),Wl(1888,"br"),sg()()(),Sl(1889,"td",21)(1890,"code",22),Jx(1891,"boolean"),sg()(),Sl(1892,"td",24)(1893,"em")(1894,"strong"),Jx(1895,"(opcional)"),sg()(),Sl(1896,"p"),Jx(1897,"Atribui uma linha separadora acima do item."),sg()()(),Sl(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),Jx(1902," subItems"),Wl(1903,"br"),sg()()(),Sl(1904,"td",21)(1905,"code",47),Jx(1906,"Array<PoPopupAction>"),sg()(),Sl(1907,"td",24)(1908,"em")(1909,"strong"),Jx(1910,"(opcional)"),sg()(),Sl(1911,"p"),Jx(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Sl(1913,"p"),Jx(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Sl(1915,"blockquote")(1916,"p"),Jx(1917,"As propriedades "),Sl(1918,"code"),Jx(1919,"disabled"),sg(),Jx(1920,", "),Sl(1921,"code"),Jx(1922,"type"),sg(),Jx(1923," e "),Sl(1924,"code"),Jx(1925,"visible"),sg(),Jx(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Sl(1927,"blockquote")(1928,"p"),Jx(1929,"Quando "),Sl(1930,"code"),Jx(1931,"url"),sg(),Jx(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Sl(1933,"blockquote")(1934,"p"),Jx(1935,"Em subn\xEDveis aninhados, o "),Sl(1936,"code"),Jx(1937,"icon"),sg(),Jx(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Sl(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),Jx(1943," type"),Wl(1944,"br"),sg()()(),Sl(1945,"td",21)(1946,"code",31),Jx(1947,"string"),sg()(),Sl(1948,"td",24)(1949,"em")(1950,"strong"),Jx(1951,"(opcional)"),sg()(),Sl(1952,"p"),Jx(1953,"Define a cor do item."),sg(),Sl(1954,"p"),Jx(1955,"Valores v\xE1lidos:"),sg(),Sl(1956,"ul")(1957,"li")(1958,"code"),Jx(1959,"default"),sg()(),Sl(1960,"li")(1961,"code"),Jx(1962,"danger"),sg()()()()(),Sl(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),Jx(1967," url"),Wl(1968,"br"),sg()()(),Sl(1969,"td",21)(1970,"code",31),Jx(1971,"string"),sg()(),Sl(1972,"td",24)(1973,"em")(1974,"strong"),Jx(1975,"(opcional)"),sg()(),Sl(1976,"p"),Jx(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Sl(1978,"p"),Jx(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Sl(1980,"code"),Jx(1981,"url"),sg(),Jx(1982," \xE9 informada em um agrupador, o clique "),Sl(1983,"strong"),Jx(1984,"n\xE3o abrir\xE1 os subitens"),sg(),Jx(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Sl(1986,"blockquote")(1987,"p"),Jx(1988,"Quando informada, tem prioridade sobre a propriedade "),Sl(1989,"code"),Jx(1990,"action"),sg(),Jx(1991,"."),sg()()()(),Sl(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),Jx(1996," visible"),Wl(1997,"br"),sg()()(),Sl(1998,"td",21)(1999,"code",22),Jx(2e3,"boolean "),sg(),Sl(2001,"code",45),Jx(2002," Function"),sg()(),Sl(2003,"td",24)(2004,"em")(2005,"strong"),Jx(2006,"(opcional)"),sg()(),Sl(2007,"p"),Jx(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Sl(2009,"h4",44)(2010,"code",5),Jx(2011,"PoTableBoolean"),sg()(),Sl(2012,"div",2)(2013,"p"),Jx(2014,"Interface que define as colunas booleanas do "),Sl(2015,"code"),Jx(2016,"po-table"),sg(),Jx(2017,"."),sg()(),Sl(2018,"h4",13),Jx(2019,"Propriedades"),sg(),Sl(2020,"table",14)(2021,"tr",15)(2022,"th",16),Jx(2023,"Nome"),sg(),Sl(2024,"th",16),Jx(2025,"Tipo"),sg(),Sl(2026,"th",16),Jx(2027,"Descri\xE7\xE3o"),sg()(),Sl(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),Jx(2032," falseLabel"),Wl(2033,"br"),sg()()(),Sl(2034,"td",21)(2035,"code",31),Jx(2036,"string"),sg()(),Sl(2037,"td",24)(2038,"em")(2039,"strong"),Jx(2040,"(opcional)"),sg()(),Sl(2041,"p"),Jx(2042,"Define o r\xF3tulo para valores "),Sl(2043,"code"),Jx(2044,"false"),sg(),Jx(2045,"."),sg()()(),Sl(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),Jx(2050," trueLabel"),Wl(2051,"br"),sg()()(),Sl(2052,"td",21)(2053,"code",31),Jx(2054,"string"),sg()(),Sl(2055,"td",24)(2056,"em")(2057,"strong"),Jx(2058,"(opcional)"),sg()(),Sl(2059,"p"),Jx(2060,"Define o r\xF3tulo para valores "),Sl(2061,"code"),Jx(2062,"true"),sg(),Jx(2063,"."),sg()()()(),Sl(2064,"h4",44)(2065,"code",5),Jx(2066,"PoTableColumnSort"),sg()(),Sl(2067,"div",2)(2068,"p"),Jx(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),sg()(),Sl(2070,"h4",13),Jx(2071,"Propriedades"),sg(),Sl(2072,"table",14)(2073,"tr",15)(2074,"th",16),Jx(2075,"Nome"),sg(),Sl(2076,"th",16),Jx(2077,"Tipo"),sg(),Sl(2078,"th",16),Jx(2079,"Descri\xE7\xE3o"),sg()(),Sl(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),Jx(2084," column"),Wl(2085,"br"),sg()()(),Sl(2086,"td",21)(2087,"code",48),Jx(2088,"PoTableColumn"),sg()(),Sl(2089,"td",24)(2090,"em")(2091,"strong"),Jx(2092,"(opcional)"),sg()(),Sl(2093,"p"),Jx(2094,"Coluna pela qual a tabela est\xE1 ordenada."),sg()()(),Sl(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),Jx(2099," type"),Wl(2100,"br"),sg()()(),Sl(2101,"td",21)(2102,"code",49),Jx(2103,"PoTableColumnSortType"),sg()(),Sl(2104,"td",24)(2105,"p"),Jx(2106,"Tipo da ordena\xE7\xE3o."),sg()()()(),Sl(2107,"h4",44)(2108,"code",5),Jx(2109,"PoTableColumn"),sg()(),Sl(2110,"div",2)(2111,"p"),Jx(2112,"Interface para configura\xE7\xE3o das colunas do "),Sl(2113,"code"),Jx(2114,"po-table"),sg(),Jx(2115,"."),sg(),Sl(2116,"p"),Jx(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),sg()(),Sl(2118,"h4",13),Jx(2119,"Propriedades"),sg(),Sl(2120,"table",14)(2121,"tr",15)(2122,"th",16),Jx(2123,"Nome"),sg(),Sl(2124,"th",16),Jx(2125,"Tipo"),sg(),Sl(2126,"th",16),Jx(2127,"Descri\xE7\xE3o"),sg()(),Sl(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),Jx(2132," action"),Wl(2133,"br"),sg()()(),Sl(2134,"td",21)(2135,"code",45),Jx(2136,"Function"),sg()(),Sl(2137,"td",24)(2138,"em")(2139,"strong"),Jx(2140,"(opcional)"),sg()(),Sl(2141,"p"),Jx(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),Sl(2143,"code"),Jx(2144,"link"),sg(),Jx(2145," ou "),Sl(2146,"code"),Jx(2147,"icon"),sg(),Jx(2148,"."),sg(),Sl(2149,"blockquote")(2150,"p"),Jx(2151,"Quando for do tipo "),Sl(2152,"code"),Jx(2153,"link"),sg(),Jx(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),sg()(),Sl(2155,"blockquote")(2156,"p"),Jx(2157,"Quando for do tipo "),Sl(2158,"code"),Jx(2159,"icon"),sg(),Jx(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),sg()()()(),Sl(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),Jx(2165," boolean"),Wl(2166,"br"),sg()()(),Sl(2167,"td",21)(2168,"code",50),Jx(2169,"PoTableBoolean"),sg()(),Sl(2170,"td",24)(2171,"em")(2172,"strong"),Jx(2173,"(opcional)"),sg()(),Sl(2174,"p"),Jx(2175,"Define um objeto do tipo "),Sl(2176,"code"),Jx(2177,"PoTableBoolean"),sg(),Jx(2178," para as colunas do tipo "),Sl(2179,"em"),Jx(2180,"boolean"),sg(),Jx(2181,". Por exemplo:"),sg(),Sl(2182,"pre")(2183,"code"),Jx(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),sg()(),Sl(2185,"blockquote")(2186,"p"),Jx(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),Sl(2188,"em"),Jx(2189,"boolean"),sg(),Jx(2190,`,
esta exibir\xE1 por padr\xE3o `),Sl(2191,"code"),Jx(2192,"Sim"),sg(),Jx(2193," e "),Sl(2194,"code"),Jx(2195,"N\xE3o"),sg(),Jx(2196," de acordo com os valores "),Sl(2197,"em"),Jx(2198,"booleanos"),sg(),Jx(2199,"."),sg()()()(),Sl(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),Jx(2204," color"),Wl(2205,"br"),sg()()(),Sl(2206,"td",21)(2207,"code",31),Jx(2208,"string "),sg(),Sl(2209,"code",45),Jx(2210," Function"),sg()(),Sl(2211,"td",24)(2212,"em")(2213,"strong"),Jx(2214,"(opcional)"),sg()(),Sl(2215,"p"),Jx(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),sg(),Sl(2217,"p"),Jx(2218,"Valores v\xE1lidos:"),sg(),Sl(2219,"ul")(2220,"li"),Wl(2221,"span",51),Sl(2222,"code"),Jx(2223,"color-01"),sg()(),Sl(2224,"li"),Wl(2225,"span",52),Sl(2226,"code"),Jx(2227,"color-02"),sg()(),Sl(2228,"li"),Wl(2229,"span",53),Sl(2230,"code"),Jx(2231,"color-03"),sg()(),Sl(2232,"li"),Wl(2233,"span",54),Sl(2234,"code"),Jx(2235,"color-04"),sg()(),Sl(2236,"li"),Wl(2237,"span",55),Sl(2238,"code"),Jx(2239,"color-05"),sg()(),Sl(2240,"li"),Wl(2241,"span",56),Sl(2242,"code"),Jx(2243,"color-06"),sg()(),Sl(2244,"li"),Wl(2245,"span",57),Sl(2246,"code"),Jx(2247,"color-07"),sg()(),Sl(2248,"li"),Wl(2249,"span",58),Sl(2250,"code"),Jx(2251,"color-08"),sg()(),Sl(2252,"li"),Wl(2253,"span",59),Sl(2254,"code"),Jx(2255,"color-09"),sg()(),Sl(2256,"li"),Wl(2257,"span",60),Sl(2258,"code"),Jx(2259,"color-10"),sg()(),Sl(2260,"li"),Wl(2261,"span",61),Sl(2262,"code"),Jx(2263,"color-11"),sg()(),Sl(2264,"li"),Wl(2265,"span",62),Sl(2266,"code"),Jx(2267,"color-12"),sg()()(),Sl(2268,"blockquote")(2269,"p"),Jx(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(2271,"strong"),Jx(2272,"Caption Tag Colors"),sg(),Jx(2273,":"),sg()(),Sl(2274,"ul")(2275,"li"),Wl(2276,"span",63),Sl(2277,"code"),Jx(2278,"caption-tag-01"),sg(),Wl(2279,"span",64),Sl(2280,"code"),Jx(2281,"caption-tag-02"),sg(),Wl(2282,"span",65),Sl(2283,"code"),Jx(2284,"caption-tag-03"),sg(),Wl(2285,"span",66),Sl(2286,"code"),Jx(2287,"caption-tag-04"),sg(),Wl(2288,"span",67),Sl(2289,"code"),Jx(2290,"caption-tag-05"),sg()(),Sl(2291,"li"),Wl(2292,"span",68),Sl(2293,"code"),Jx(2294,"caption-tag-06"),sg(),Wl(2295,"span",69),Sl(2296,"code"),Jx(2297,"caption-tag-07"),sg(),Wl(2298,"span",70),Sl(2299,"code"),Jx(2300,"caption-tag-08"),sg(),Wl(2301,"span",71),Sl(2302,"code"),Jx(2303,"caption-tag-09"),sg(),Wl(2304,"span",72),Sl(2305,"code"),Jx(2306,"caption-tag-10"),sg()(),Sl(2307,"li"),Wl(2308,"span",73),Sl(2309,"code"),Jx(2310,"caption-tag-11"),sg(),Wl(2311,"span",74),Sl(2312,"code"),Jx(2313,"caption-tag-12"),sg(),Wl(2314,"span",75),Sl(2315,"code"),Jx(2316,"caption-tag-13"),sg(),Wl(2317,"span",76),Sl(2318,"code"),Jx(2319,"caption-tag-14"),sg(),Wl(2320,"span",77),Sl(2321,"code"),Jx(2322,"caption-tag-15"),sg()(),Sl(2323,"li"),Wl(2324,"span",78),Sl(2325,"code"),Jx(2326,"caption-tag-16"),sg(),Wl(2327,"span",79),Sl(2328,"code"),Jx(2329,"caption-tag-17"),sg(),Wl(2330,"span",80),Sl(2331,"code"),Jx(2332,"caption-tag-18"),sg(),Wl(2333,"span",81),Sl(2334,"code"),Jx(2335,"caption-tag-19"),sg(),Wl(2336,"span",82),Sl(2337,"code"),Jx(2338,"caption-tag-20"),sg()(),Sl(2339,"li"),Wl(2340,"span",83),Sl(2341,"code"),Jx(2342,"caption-tag-21"),sg(),Wl(2343,"span",84),Sl(2344,"code"),Jx(2345,"caption-tag-22"),sg(),Wl(2346,"span",85),Sl(2347,"code"),Jx(2348,"caption-tag-23"),sg(),Wl(2349,"span",86),Sl(2350,"code"),Jx(2351,"caption-tag-24"),sg(),Wl(2352,"span",87),Sl(2353,"code"),Jx(2354,"caption-tag-25"),sg()(),Sl(2355,"li"),Wl(2356,"span",88),Sl(2357,"code"),Jx(2358,"caption-tag-26"),sg(),Wl(2359,"span",89),Sl(2360,"code"),Jx(2361,"caption-tag-27"),sg(),Wl(2362,"span",90),Sl(2363,"code"),Jx(2364,"caption-tag-28"),sg(),Wl(2365,"span",91),Sl(2366,"code"),Jx(2367,"caption-tag-29"),sg(),Wl(2368,"span",92),Sl(2369,"code"),Jx(2370,"caption-tag-30"),sg()(),Sl(2371,"li"),Wl(2372,"span",93),Sl(2373,"code"),Jx(2374,"caption-tag-31"),sg(),Wl(2375,"span",94),Sl(2376,"code"),Jx(2377,"caption-tag-32"),sg(),Wl(2378,"span",95),Sl(2379,"code"),Jx(2380,"caption-tag-33"),sg(),Wl(2381,"span",96),Sl(2382,"code"),Jx(2383,"caption-tag-34"),sg(),Wl(2384,"span",97),Sl(2385,"code"),Jx(2386,"caption-tag-35"),sg()()(),Sl(2387,"blockquote")(2388,"p"),Jx(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),sg()(),Sl(2390,"pre")(2391,"code"),Jx(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),sg()(),Sl(2393,"blockquote")(2394,"p"),Jx(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),Sl(2396,"code"),Jx(2397,"icons"),sg(),Jx(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),sg()(),Sl(2399,"pre")(2400,"code"),Jx(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),sg()()()(),Sl(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),Jx(2406," detail"),Wl(2407,"br"),sg()()(),Sl(2408,"td",21)(2409,"code",98),Jx(2410,"PoTableDetail"),sg()(),Sl(2411,"td",24)(2412,"em")(2413,"strong"),Jx(2414,"(opcional)"),sg()(),Sl(2415,"p"),Jx(2416,"Define um objeto que segue a interface "),Sl(2417,"code"),Jx(2418,"PoTableDetail"),sg(),Jx(2419,", para as colunas de detalhes. Por exemplo:"),sg(),Sl(2420,"pre")(2421,"code"),Jx(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),sg()()()(),Sl(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),Jx(2427," disabled"),Wl(2428,"br"),sg()()(),Sl(2429,"td",21)(2430,"code",45),Jx(2431,"Function"),sg()(),Sl(2432,"td",24)(2433,"em")(2434,"strong"),Jx(2435,"(opcional)"),sg()(),Sl(2436,"p"),Jx(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),Sl(2438,"em"),Jx(2439,"link"),sg(),Jx(2440," e sua a\xE7\xE3o."),sg(),Sl(2441,"blockquote")(2442,"p"),Jx(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),Sl(2444,"code"),Jx(2445,"link"),sg(),Jx(2446,"."),sg()()()(),Sl(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),Jx(2451," format"),Wl(2452,"br"),sg()()(),Sl(2453,"td",21)(2454,"code",31),Jx(2455,"string"),sg()(),Sl(2456,"td",24)(2457,"em")(2458,"strong"),Jx(2459,"(opcional)"),sg()(),Sl(2460,"p"),Jx(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),sg(),Sl(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),Jx(2466,"Formata\xE7\xE3o"),sg(),Sl(2467,"th"),Jx(2468,"Type da Coluna"),sg(),Sl(2469,"th"),Jx(2470,"Descri\xE7\xE3o"),sg(),Sl(2471,"th"),Jx(2472,"Exemplos"),sg()()(),Sl(2473,"tbody")(2474,"tr")(2475,"td"),Jx(2476,"Monet\xE1rio"),sg(),Sl(2477,"td")(2478,"code"),Jx(2479,"currency"),sg()(),Sl(2480,"td"),Jx(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),sg(),Sl(2482,"td")(2483,"code"),Jx(2484,"'BRL'"),sg(),Jx(2485,", "),Sl(2486,"code"),Jx(2487,"'USD'"),sg(),Jx(2488,", "),Sl(2489,"code"),Jx(2490,"'EUR'"),sg(),Jx(2491,", "),Sl(2492,"code"),Jx(2493,"'RUB'"),sg()()(),Sl(2494,"tr")(2495,"td"),Jx(2496,"Data"),sg(),Sl(2497,"td")(2498,"code"),Jx(2499,"date"),sg()(),Sl(2500,"td"),Jx(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),sg(),Sl(2502,"td")(2503,"code"),Jx(2504,"'dd/MM/yyyy'"),sg(),Jx(2505,", "),Sl(2506,"code"),Jx(2507,"'dd-MM-yy'"),sg(),Jx(2508,", "),Sl(2509,"code"),Jx(2510,"'mm/dd/yyyy'"),sg()()(),Sl(2511,"tr")(2512,"td"),Jx(2513,"Hora"),sg(),Sl(2514,"td")(2515,"code"),Jx(2516,"time"),sg()(),Sl(2517,"td"),Jx(2518,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),sg(),Sl(2519,"td")(2520,"code"),Jx(2521,"'HH:mm'"),sg(),Jx(2522,", "),Sl(2523,"code"),Jx(2524,"'HH:mm:ss.ffffff'"),sg(),Jx(2525,", "),Sl(2526,"code"),Jx(2527,"'HH:mm:ss.ff'"),sg(),Jx(2528,", "),Sl(2529,"code"),Jx(2530,"'mm:ss.fff'"),sg()()(),Sl(2531,"tr")(2532,"td"),Jx(2533,"N\xFAmero"),sg(),Sl(2534,"td")(2535,"code"),Jx(2536,"number"),sg()(),Sl(2537,"td"),Jx(2538,"Aceita um valor seguindo o padr\xE3o "),Sl(2539,"a",99)(2540,"strong"),Jx(2541,"DecimalPipe"),sg()(),Jx(2542," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),sg(),Sl(2543,"td")(2544,"code"),Jx(2545,"'1.2-5'"),sg(),Jx(2546," (ex.: "),Sl(2547,"code"),Jx(2548,"50"),sg(),Jx(2549," \u2192 "),Sl(2550,"code"),Jx(2551,"50.00"),sg(),Jx(2552,")"),sg()()()(),Sl(2553,"p"),Jx(2554,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),sg()()(),Sl(2555,"tr",17)(2556,"td",18)(2557,"div",19)(2558,"span",20),Jx(2559," icons"),Wl(2560,"br"),sg()()(),Sl(2561,"td",21)(2562,"code",100),Jx(2563,"Array<PoTableColumnIcon>"),sg()(),Sl(2564,"td",24)(2565,"em")(2566,"strong"),Jx(2567,"(opcional)"),sg()(),Sl(2568,"p"),Jx(2569,"Define um "),Sl(2570,"em"),Jx(2571,"array"),sg(),Jx(2572," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),Sl(2573,"code"),Jx(2574,"action"),sg(),Jx(2575," e "),Sl(2576,"code"),Jx(2577,"color"),sg(),Jx(2578,`
definidos na coluna, \xE0 partir do `),Sl(2579,"em"),Jx(2580,"value"),sg(),Jx(2581," da "),Sl(2582,"a",101)(2583,"code"),Jx(2584,"PoTableColumnIcon"),sg()(),Jx(2585,", por exemplo:"),sg(),Sl(2586,"pre")(2587,"code"),Jx(2588,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),sg()(),Sl(2589,"pre")(2590,"code"),Jx(2591,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),sg()()()(),Sl(2592,"tr",17)(2593,"td",18)(2594,"div",19)(2595,"span",20),Jx(2596," label"),Wl(2597,"br"),sg()()(),Sl(2598,"td",21)(2599,"code",31),Jx(2600,"string"),sg()(),Sl(2601,"td",24)(2602,"em")(2603,"strong"),Jx(2604,"(opcional)"),sg()(),Sl(2605,"p"),Jx(2606,"Texto para t\xEDtulo da coluna."),sg(),Sl(2607,"p"),Jx(2608,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(2609,"em"),Jx(2610,"label"),sg(),Jx(2611," o valor da propriedade "),Sl(2612,"em"),Jx(2613,"property"),sg(),Jx(2614," com a primeira letra em mai\xFAsculo."),sg()()(),Sl(2615,"tr",17)(2616,"td",18)(2617,"div",19)(2618,"span",20),Jx(2619," labels"),Wl(2620,"br"),sg()()(),Sl(2621,"td",21)(2622,"code",102),Jx(2623,"Array<PoTableColumnLabel>"),sg()(),Sl(2624,"td",24)(2625,"em")(2626,"strong"),Jx(2627,"(opcional)"),sg()(),Sl(2628,"p"),Jx(2629,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Sl(2630,"code"),Jx(2631,"PoTableColumnLabel"),sg(),Jx(2632," na qual devem ser definidas os labels. Por exemplo:"),sg(),Sl(2633,"pre")(2634,"code"),Jx(2635,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),sg()()()(),Sl(2636,"tr",17)(2637,"td",18)(2638,"div",19)(2639,"span",20),Jx(2640," link"),Wl(2641,"br"),sg()()(),Sl(2642,"td",21)(2643,"code",31),Jx(2644,"string"),sg()(),Sl(2645,"td",24)(2646,"em")(2647,"strong"),Jx(2648,"(opcional)"),sg()(),Sl(2649,"p"),Jx(2650,"Define o nome da propriedade que conter\xE1 o "),Sl(2651,"code"),Jx(2652,"link"),sg(),Jx(2653," a ser redirecionado."),sg()()(),Sl(2654,"tr",17)(2655,"td",18)(2656,"div",19)(2657,"span",20),Jx(2658," property"),Wl(2659,"br"),sg()()(),Sl(2660,"td",21)(2661,"code",31),Jx(2662,"string"),sg()(),Sl(2663,"td",24)(2664,"em")(2665,"strong"),Jx(2666,"(opcional)"),sg()(),Sl(2667,"p"),Jx(2668,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),sg(),Sl(2669,"pre")(2670,"code"),Jx(2671,`{ property: 'address.street', label: 'Rua' }
`),sg()()()(),Sl(2672,"tr",17)(2673,"td",18)(2674,"div",19)(2675,"span",20),Jx(2676," sortable"),Wl(2677,"br"),sg()()(),Sl(2678,"td",21)(2679,"code",22),Jx(2680,"boolean"),sg()(),Sl(2681,"td",24)(2682,"em")(2683,"strong"),Jx(2684,"(opcional)"),sg()(),Sl(2685,"p"),Jx(2686,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),sg()()(),Sl(2687,"tr",17)(2688,"td",18)(2689,"div",19)(2690,"span",20),Jx(2691," subtitles"),Wl(2692,"br"),sg()()(),Sl(2693,"td",21)(2694,"code",103),Jx(2695,"Array<PoTableSubtitleColumn>"),sg()(),Sl(2696,"td",24)(2697,"em")(2698,"strong"),Jx(2699,"(opcional)"),sg()(),Sl(2700,"p"),Jx(2701,"Define um array de objetos para as colunas de legenda. Onde, "),Sl(2702,"code"),Jx(2703,"subtitles"),sg(),Jx(2704,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),sg(),Sl(2705,"pre")(2706,"code"),Jx(2707,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),sg()(),Sl(2708,"p"),Jx(2709,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),sg()()(),Sl(2710,"tr",17)(2711,"td",18)(2712,"div",19)(2713,"span",20),Jx(2714," tooltip"),Wl(2715,"br"),sg()()(),Sl(2716,"td",21)(2717,"code",31),Jx(2718,"string"),sg()(),Sl(2719,"td",24)(2720,"em")(2721,"strong"),Jx(2722,"(opcional)"),sg()(),Sl(2723,"p"),Jx(2724,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(2725,"em"),Jx(2726,"mouse"),sg(),Jx(2727," sobre um texto."),sg(),Sl(2728,"blockquote")(2729,"p"),Jx(2730,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),Sl(2731,"em"),Jx(2732,"link"),sg(),Jx(2733,"."),sg()(),Sl(2734,"blockquote")(2735,"p"),Jx(2736,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Sl(2737,"em"),Jx(2738,"tooltip"),sg(),Jx(2739," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),sg()()()(),Sl(2740,"tr",17)(2741,"td",18)(2742,"div",19)(2743,"span",20),Jx(2744," type"),Wl(2745,"br"),sg()()(),Sl(2746,"td",21)(2747,"code",31),Jx(2748,"string"),sg()(),Sl(2749,"td",24)(2750,"em")(2751,"strong"),Jx(2752,"(opcional)"),sg()(),Sl(2753,"p"),Jx(2754,"Tipo da coluna."),sg(),Sl(2755,"p"),Jx(2756,"Valores v\xE1lidos:"),sg(),Sl(2757,"ul")(2758,"li")(2759,"p")(2760,"code"),Jx(2761,"boolean"),sg(),Jx(2762,": Exibir\xE1 por padr\xE3o "),Sl(2763,"code"),Jx(2764,"Sim"),sg(),Jx(2765," e "),Sl(2766,"code"),Jx(2767,"N\xE3o"),sg(),Jx(2768," de acordo com os valores "),Sl(2769,"em"),Jx(2770,"booleanos"),sg(),Jx(2771,"."),sg(),Sl(2772,"blockquote")(2773,"p"),Jx(2774,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),Sl(2775,"code"),Jx(2776,"boolean"),sg(),Jx(2777," desta interface."),sg()()(),Sl(2778,"li")(2779,"p")(2780,"code"),Jx(2781,"currency"),sg(),Jx(2782,": valores monet\xE1rios."),sg()(),Sl(2783,"li")(2784,"p")(2785,"code"),Jx(2786,"date"),sg(),Jx(2787,": valor de datas."),sg(),Sl(2788,"ul")(2789,"li"),Jx(2790,"Aceita os tipos "),Sl(2791,"em"),Jx(2792,"string"),sg(),Jx(2793," e "),Sl(2794,"em"),Jx(2795,"Date"),sg(),Jx(2796,` padr\xE3o do Javascript,
por exemplo: `),Sl(2797,"code"),Jx(2798,"'2017-11-28'"),sg(),Jx(2799," ou "),Sl(2800,"code"),Jx(2801,"new Date(2017, 10, 28)"),sg(),Jx(2802,"."),sg()()(),Sl(2803,"li")(2804,"p")(2805,"code"),Jx(2806,"dateTime"),sg(),Jx(2807,": valor de data com hor\xE1rio."),sg(),Sl(2808,"ul")(2809,"li"),Jx(2810,"Aceita o tipo "),Sl(2811,"em"),Jx(2812,"string"),sg(),Jx(2813," no formato "),Sl(2814,"strong"),Jx(2815,"ISO-8601"),sg(),Jx(2816," extendido "),Sl(2817,"strong"),Jx(2818,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),Jx(2819,`
e o tipo `),Sl(2820,"em"),Jx(2821,"Date"),sg(),Jx(2822," padr\xE3o do Javascript, por exemplo: "),Sl(2823,"code"),Jx(2824,"'2017-11-28T00:00:00-02:00'"),sg(),Jx(2825," ou "),Sl(2826,"code"),Jx(2827,"new Date(2017, 10, 28)"),sg(),Jx(2828,"."),sg()()(),Sl(2829,"li")(2830,"p")(2831,"code"),Jx(2832,"detail"),sg(),Jx(2833,": array de objetos para o master-detail."),sg(),Sl(2834,"ul")(2835,"li"),Jx(2836,"Incompat\xEDvel com "),Sl(2837,"code"),Jx(2838,"virtual-scroll"),sg(),Jx(2839,", que requer altura fixa nas linhas."),sg()()(),Sl(2840,"li")(2841,"p")(2842,"code"),Jx(2843,"icon"),sg(),Jx(2844,": "),Sl(2845,"em"),Jx(2846,"array"),sg(),Jx(2847," de "),Sl(2848,"em"),Jx(2849,"string"),sg(),Jx(2850," ou objetos para a coluna de \xEDcones."),sg()(),Sl(2851,"li")(2852,"p")(2853,"code"),Jx(2854,"label"),sg(),Jx(2855,": texto com destaque."),sg()(),Sl(2856,"li")(2857,"p")(2858,"code"),Jx(2859,"link"),sg(),Jx(2860,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),sg()(),Sl(2861,"li")(2862,"p")(2863,"code"),Jx(2864,"number"),sg(),Jx(2865,": valores num\xE9ricos."),sg()(),Sl(2866,"li")(2867,"p")(2868,"code"),Jx(2869,"string"),sg(),Jx(2870,": textos."),sg()(),Sl(2871,"li")(2872,"p")(2873,"code"),Jx(2874,"subtitle"),sg(),Jx(2875,": array de objetos para a coluna de legenda."),sg()(),Sl(2876,"li")(2877,"p")(2878,"code"),Jx(2879,"time"),sg(),Jx(2880,": valor de hor\xE1rio."),sg(),Sl(2881,"ul")(2882,"li"),Jx(2883,"Aceita o tipo "),Sl(2884,"em"),Jx(2885,"string"),sg(),Jx(2886," nos formatos "),Sl(2887,"strong"),Jx(2888,"'HH:mm:ss'"),sg(),Jx(2889," ou "),Sl(2890,"strong"),Jx(2891,"'HH:mm:ss.ffffff'"),sg(),Jx(2892,", por exemplo: "),Sl(2893,"code"),Jx(2894,"'23:12:45'"),sg(),Jx(2895,"."),sg()()(),Sl(2896,"li")(2897,"p")(2898,"code"),Jx(2899,"cellTemplate"),sg(),Jx(2900,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Sl(2901,"a",8),Jx(2902,"PoTableCellTemplate"),sg(),Jx(2903,"."),sg()(),Sl(2904,"li")(2905,"p")(2906,"code"),Jx(2907,"columnTemplate"),sg(),Jx(2908,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Sl(2909,"a",7),Jx(2910,"PoTableColumnTemplate"),sg(),Jx(2911,"."),sg()()()()(),Sl(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),Jx(2916," visible"),Wl(2917,"br"),sg()()(),Sl(2918,"td",21)(2919,"code",22),Jx(2920,"boolean"),sg()(),Sl(2921,"td",24)(2922,"em")(2923,"strong"),Jx(2924,"(opcional)"),sg()(),Sl(2925,"p"),Jx(2926,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Sl(2927,"strong"),Jx(2928,"gerenciador de colunas"),sg(),Jx(2929,"."),sg(),Sl(2930,"blockquote")(2931,"p"),Jx(2932,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),Sl(2933,"code"),Jx(2934,"p-max-columns"),sg(),Jx(2935,"."),sg()()()(),Sl(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),Jx(2940," width"),Wl(2941,"br"),sg()()(),Sl(2942,"td",21)(2943,"code",31),Jx(2944,"string"),sg()(),Sl(2945,"td",24)(2946,"em")(2947,"strong"),Jx(2948,"(opcional)"),sg()(),Sl(2949,"p"),Jx(2950,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),sg(),Sl(2951,"ul")(2952,"li"),Jx(2953,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),sg(),Sl(2954,"li"),Jx(2955,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),sg()()()()(),Sl(2956,"h4",44)(2957,"code",5),Jx(2958,"PoTableLiterals"),sg()(),Sl(2959,"div",2)(2960,"p"),Jx(2961,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(2962,"code"),Jx(2963,"po-table"),sg(),Jx(2964,"."),sg()(),Sl(2965,"h4",13),Jx(2966,"Propriedades"),sg(),Sl(2967,"table",14)(2968,"tr",15)(2969,"th",16),Jx(2970,"Nome"),sg(),Sl(2971,"th",16),Jx(2972,"Tipo"),sg(),Sl(2973,"th",16),Jx(2974,"Descri\xE7\xE3o"),sg()(),Sl(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),Jx(2979," bodyDelete"),Wl(2980,"br"),sg()()(),Sl(2981,"td",21)(2982,"code",31),Jx(2983,"string"),sg()(),Sl(2984,"td",24)(2985,"em")(2986,"strong"),Jx(2987,"(opcional)"),sg()(),Sl(2988,"p"),Jx(2989,"Texto no corpo do Modal de exclus\xE3o"),sg()()(),Sl(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),Jx(2994," cancel"),Wl(2995,"br"),sg()()(),Sl(2996,"td",21)(2997,"code",31),Jx(2998,"string"),sg()(),Sl(2999,"td",24)(3e3,"em")(3001,"strong"),Jx(3002,"(opcional)"),sg()(),Sl(3003,"p"),Jx(3004,"Texto no Modal para cancelar a exclus\xE3o"),sg()()(),Sl(3005,"tr",17)(3006,"td",18)(3007,"div",19)(3008,"span",20),Jx(3009," columnsManager"),Wl(3010,"br"),sg()()(),Sl(3011,"td",21)(3012,"code",31),Jx(3013,"string"),sg()(),Sl(3014,"td",24)(3015,"em")(3016,"strong"),Jx(3017,"(opcional)"),sg()(),Sl(3018,"p"),Jx(3019,"Texto do "),Sl(3020,"strong"),Jx(3021,"Gerenciador de colunas"),sg(),Jx(3022," localizado no canto superior direito da tabela."),sg()()(),Sl(3023,"tr",17)(3024,"td",18)(3025,"div",19)(3026,"span",20),Jx(3027," completeSubtitle"),Wl(3028,"br"),sg()()(),Sl(3029,"td",21)(3030,"code",31),Jx(3031,"string"),sg()(),Sl(3032,"td",24)(3033,"em")(3034,"strong"),Jx(3035,"(opcional)"),sg()(),Sl(3036,"p"),Jx(3037,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),sg()()(),Sl(3038,"tr",17)(3039,"td",18)(3040,"div",19)(3041,"span",20),Jx(3042," delete"),Wl(3043,"br"),sg()()(),Sl(3044,"td",21)(3045,"code",31),Jx(3046,"string"),sg()(),Sl(3047,"td",24)(3048,"em")(3049,"strong"),Jx(3050,"(opcional)"),sg()(),Sl(3051,"p"),Jx(3052,"Texto no Modal para confirmar a exclus\xE3o"),sg()()(),Sl(3053,"tr",17)(3054,"td",18)(3055,"div",19)(3056,"span",20),Jx(3057," deleteApiError"),Wl(3058,"br"),sg()()(),Sl(3059,"td",21)(3060,"code",31),Jx(3061,"string"),sg()(),Sl(3062,"td",24)(3063,"em")(3064,"strong"),Jx(3065,"(opcional)"),sg()(),Sl(3066,"p"),Jx(3067,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),sg()()(),Sl(3068,"tr",17)(3069,"td",18)(3070,"div",19)(3071,"span",20),Jx(3072," deleteSuccessful"),Wl(3073,"br"),sg()()(),Sl(3074,"td",21)(3075,"code",31),Jx(3076,"string"),sg()(),Sl(3077,"td",24)(3078,"em")(3079,"strong"),Jx(3080,"(opcional)"),sg()(),Sl(3081,"p"),Jx(3082,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),sg()()(),Sl(3083,"tr",17)(3084,"td",18)(3085,"div",19)(3086,"span",20),Jx(3087," loadMoreData"),Wl(3088,"br"),sg()()(),Sl(3089,"td",21)(3090,"code",31),Jx(3091,"string"),sg()(),Sl(3092,"td",24)(3093,"em")(3094,"strong"),Jx(3095,"(opcional)"),sg()(),Sl(3096,"p"),Jx(3097,"Texto do bot\xE3o de "),Sl(3098,"strong"),Jx(3099,"Carregar mais resultados"),sg(),Jx(3100," localizado no rodap\xE9 da tabela."),sg()()(),Sl(3101,"tr",17)(3102,"td",18)(3103,"div",19)(3104,"span",20),Jx(3105," loadingData"),Wl(3106,"br"),sg()()(),Sl(3107,"td",21)(3108,"code",31),Jx(3109,"string"),sg()(),Sl(3110,"td",24)(3111,"em")(3112,"strong"),Jx(3113,"(opcional)"),sg()(),Sl(3114,"p"),Jx(3115,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),sg()()(),Sl(3116,"tr",17)(3117,"td",18)(3118,"div",19)(3119,"span",20),Jx(3120," multipleItems"),Wl(3121,"br"),sg()()(),Sl(3122,"td",21)(3123,"code",31),Jx(3124,"string"),sg()(),Sl(3125,"td",24)(3126,"em")(3127,"strong"),Jx(3128,"(opcional)"),sg()(),Sl(3129,"p"),Jx(3130,"Texto exibido quando apenas 1 item for selecionado no checkbox."),sg()()(),Sl(3131,"tr",17)(3132,"td",18)(3133,"div",19)(3134,"span",20),Jx(3135," noColumns"),Wl(3136,"br"),sg()()(),Sl(3137,"td",21)(3138,"code",31),Jx(3139,"string"),sg()(),Sl(3140,"td",24)(3141,"em")(3142,"strong"),Jx(3143,"(opcional)"),sg()(),Sl(3144,"p"),Jx(3145,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),sg()()(),Sl(3146,"tr",17)(3147,"td",18)(3148,"div",19)(3149,"span",20),Jx(3150," noData"),Wl(3151,"br"),sg()()(),Sl(3152,"td",21)(3153,"code",31),Jx(3154,"string"),sg()(),Sl(3155,"td",24)(3156,"em")(3157,"strong"),Jx(3158,"(opcional)"),sg()(),Sl(3159,"p"),Jx(3160,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),sg()()(),Sl(3161,"tr",17)(3162,"td",18)(3163,"div",19)(3164,"span",20),Jx(3165," noItem"),Wl(3166,"br"),sg()()(),Sl(3167,"td",21)(3168,"code",31),Jx(3169,"string"),sg()(),Sl(3170,"td",24)(3171,"em")(3172,"strong"),Jx(3173,"(opcional)"),sg()(),Sl(3174,"p"),Jx(3175,"Texto exibido quando nenhum item for selecionado no checkbox."),sg()()(),Sl(3176,"tr",17)(3177,"td",18)(3178,"div",19)(3179,"span",20),Jx(3180," noVisibleColumn"),Wl(3181,"br"),sg()()(),Sl(3182,"td",21)(3183,"code",31),Jx(3184,"string"),sg()(),Sl(3185,"td",24)(3186,"em")(3187,"strong"),Jx(3188,"(opcional)"),sg()(),Sl(3189,"p"),Jx(3190,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),sg()()(),Sl(3191,"tr",17)(3192,"td",18)(3193,"div",19)(3194,"span",20),Jx(3195," oneItem"),Wl(3196,"br"),sg()()(),Sl(3197,"td",21)(3198,"code",31),Jx(3199,"string"),sg()(),Sl(3200,"td",24)(3201,"em")(3202,"strong"),Jx(3203,"(opcional)"),sg()(),Sl(3204,"p"),Jx(3205,"Texto exibido quando apenas 1 item for selecionado no checkbox."),sg()()(),Sl(3206,"tr",17)(3207,"td",18)(3208,"div",19)(3209,"span",20),Jx(3210," seeCompleteSubtitle"),Wl(3211,"br"),sg()()(),Sl(3212,"td",21)(3213,"code",31),Jx(3214,"string"),sg()(),Sl(3215,"td",24)(3216,"em")(3217,"strong"),Jx(3218,"(opcional)"),sg()(),Sl(3219,"p"),Jx(3220,"Texto do bot\xE3o "),Sl(3221,"strong"),Jx(3222,"Ver legenda completa"),sg(),Jx(3223," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),sg()()()(),Sl(3224,"h4",44)(3225,"code",5),Jx(3226,"PoTableColumnIcon"),sg()(),Sl(3227,"div",2)(3228,"p"),Wl(3229,"a",104),sg(),Sl(3230,"p"),Jx(3231,"Interface que define a coluna com \xEDcone(s) do "),Sl(3232,"code"),Jx(3233,"po-table"),sg(),Jx(3234,"."),sg()(),Sl(3235,"h4",13),Jx(3236,"Propriedades"),sg(),Sl(3237,"table",14)(3238,"tr",15)(3239,"th",16),Jx(3240,"Nome"),sg(),Sl(3241,"th",16),Jx(3242,"Tipo"),sg(),Sl(3243,"th",16),Jx(3244,"Descri\xE7\xE3o"),sg()(),Sl(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),Jx(3249," action"),Wl(3250,"br"),sg()()(),Sl(3251,"td",21)(3252,"code",45),Jx(3253,"Function"),sg()(),Sl(3254,"td",24)(3255,"em")(3256,"strong"),Jx(3257,"(opcional)"),sg()(),Sl(3258,"p"),Jx(3259,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),sg()()(),Sl(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),Jx(3264," color"),Wl(3265,"br"),sg()()(),Sl(3266,"td",21)(3267,"code",31),Jx(3268,"string "),sg(),Sl(3269,"code",45),Jx(3270," Function"),sg()(),Sl(3271,"td",24)(3272,"em")(3273,"strong"),Jx(3274,"(opcional)"),sg()(),Sl(3275,"p"),Jx(3276,"Define a cor do \xEDcone."),sg(),Sl(3277,"p"),Jx(3278,"Valores v\xE1lidos:"),sg(),Sl(3279,"ul")(3280,"li"),Wl(3281,"span",51),Sl(3282,"code"),Jx(3283,"color-01"),sg()(),Sl(3284,"li"),Wl(3285,"span",52),Sl(3286,"code"),Jx(3287,"color-02"),sg()(),Sl(3288,"li"),Wl(3289,"span",53),Sl(3290,"code"),Jx(3291,"color-03"),sg()(),Sl(3292,"li"),Wl(3293,"span",54),Sl(3294,"code"),Jx(3295,"color-04"),sg()(),Sl(3296,"li"),Wl(3297,"span",55),Sl(3298,"code"),Jx(3299,"color-05"),sg()(),Sl(3300,"li"),Wl(3301,"span",56),Sl(3302,"code"),Jx(3303,"color-06"),sg()(),Sl(3304,"li"),Wl(3305,"span",57),Sl(3306,"code"),Jx(3307,"color-07"),sg()(),Sl(3308,"li"),Wl(3309,"span",58),Sl(3310,"code"),Jx(3311,"color-08"),sg()(),Sl(3312,"li"),Wl(3313,"span",59),Sl(3314,"code"),Jx(3315,"color-09"),sg()(),Sl(3316,"li"),Wl(3317,"span",60),Sl(3318,"code"),Jx(3319,"color-10"),sg()(),Sl(3320,"li"),Wl(3321,"span",61),Sl(3322,"code"),Jx(3323,"color-11"),sg()(),Sl(3324,"li"),Wl(3325,"span",62),Sl(3326,"code"),Jx(3327,"color-12"),sg()()(),Sl(3328,"blockquote")(3329,"p"),Jx(3330,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(3331,"strong"),Jx(3332,"Caption Tag Colors"),sg(),Jx(3333,":"),sg()(),Sl(3334,"ul")(3335,"li"),Wl(3336,"span",63),Sl(3337,"code"),Jx(3338,"caption-tag-01"),sg(),Wl(3339,"span",64),Sl(3340,"code"),Jx(3341,"caption-tag-02"),sg(),Wl(3342,"span",65),Sl(3343,"code"),Jx(3344,"caption-tag-03"),sg(),Wl(3345,"span",66),Sl(3346,"code"),Jx(3347,"caption-tag-04"),sg(),Wl(3348,"span",67),Sl(3349,"code"),Jx(3350,"caption-tag-05"),sg()(),Sl(3351,"li"),Wl(3352,"span",68),Sl(3353,"code"),Jx(3354,"caption-tag-06"),sg(),Wl(3355,"span",69),Sl(3356,"code"),Jx(3357,"caption-tag-07"),sg(),Wl(3358,"span",70),Sl(3359,"code"),Jx(3360,"caption-tag-08"),sg(),Wl(3361,"span",71),Sl(3362,"code"),Jx(3363,"caption-tag-09"),sg(),Wl(3364,"span",72),Sl(3365,"code"),Jx(3366,"caption-tag-10"),sg()(),Sl(3367,"li"),Wl(3368,"span",73),Sl(3369,"code"),Jx(3370,"caption-tag-11"),sg(),Wl(3371,"span",74),Sl(3372,"code"),Jx(3373,"caption-tag-12"),sg(),Wl(3374,"span",75),Sl(3375,"code"),Jx(3376,"caption-tag-13"),sg(),Wl(3377,"span",76),Sl(3378,"code"),Jx(3379,"caption-tag-14"),sg(),Wl(3380,"span",77),Sl(3381,"code"),Jx(3382,"caption-tag-15"),sg()(),Sl(3383,"li"),Wl(3384,"span",78),Sl(3385,"code"),Jx(3386,"caption-tag-16"),sg(),Wl(3387,"span",79),Sl(3388,"code"),Jx(3389,"caption-tag-17"),sg(),Wl(3390,"span",80),Sl(3391,"code"),Jx(3392,"caption-tag-18"),sg(),Wl(3393,"span",81),Sl(3394,"code"),Jx(3395,"caption-tag-19"),sg(),Wl(3396,"span",82),Sl(3397,"code"),Jx(3398,"caption-tag-20"),sg()(),Sl(3399,"li"),Wl(3400,"span",83),Sl(3401,"code"),Jx(3402,"caption-tag-21"),sg(),Wl(3403,"span",84),Sl(3404,"code"),Jx(3405,"caption-tag-22"),sg(),Wl(3406,"span",85),Sl(3407,"code"),Jx(3408,"caption-tag-23"),sg(),Wl(3409,"span",86),Sl(3410,"code"),Jx(3411,"caption-tag-24"),sg(),Wl(3412,"span",87),Sl(3413,"code"),Jx(3414,"caption-tag-25"),sg()(),Sl(3415,"li"),Wl(3416,"span",88),Sl(3417,"code"),Jx(3418,"caption-tag-26"),sg(),Wl(3419,"span",89),Sl(3420,"code"),Jx(3421,"caption-tag-27"),sg(),Wl(3422,"span",90),Sl(3423,"code"),Jx(3424,"caption-tag-28"),sg(),Wl(3425,"span",91),Sl(3426,"code"),Jx(3427,"caption-tag-29"),sg(),Wl(3428,"span",92),Sl(3429,"code"),Jx(3430,"caption-tag-30"),sg()(),Sl(3431,"li"),Wl(3432,"span",93),Sl(3433,"code"),Jx(3434,"caption-tag-31"),sg(),Wl(3435,"span",94),Sl(3436,"code"),Jx(3437,"caption-tag-32"),sg(),Wl(3438,"span",95),Sl(3439,"code"),Jx(3440,"caption-tag-33"),sg(),Wl(3441,"span",96),Sl(3442,"code"),Jx(3443,"caption-tag-34"),sg(),Wl(3444,"span",97),Sl(3445,"code"),Jx(3446,"caption-tag-35"),sg()()()()(),Sl(3447,"tr",17)(3448,"td",18)(3449,"div",19)(3450,"span",20),Jx(3451," disabled"),Wl(3452,"br"),sg()()(),Sl(3453,"td",21)(3454,"code",45),Jx(3455,"Function"),sg()(),Sl(3456,"td",24)(3457,"em")(3458,"strong"),Jx(3459,"(opcional)"),sg()(),Sl(3460,"p"),Jx(3461,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),sg()()(),Sl(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),Jx(3466," icon"),Wl(3467,"br"),sg()()(),Sl(3468,"td",21)(3469,"code",31),Jx(3470,"string "),sg(),Sl(3471,"code",46),Jx(3472," TemplateRef<void>"),sg()(),Sl(3473,"td",24)(3474,"em")(3475,"strong"),Jx(3476,"(opcional)"),sg()(),Sl(3477,"p"),Jx(3478,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(3479,"a",26),Jx(3480,"Biblioteca de \xEDcones"),sg(),Jx(3481,". conforme exemplo abaixo:"),sg(),Sl(3482,"pre")(3483,"code"),Jx(3484,`[ { icon: 'an an-plus' } ]
`),sg()(),Sl(3485,"p"),Jx(3486,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Sl(3487,"pre")(3488,"code"),Jx(3489,`[ {  icon: 'fas fa-plus' } ]
`),sg()(),Sl(3490,"p"),Jx(3491,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(3492,"code"),Jx(3493,"TemplateRef"),sg(),Jx(3494,`, conforme exemplo abaixo:
`),Sl(3495,"code"),Jx(3496,"component.html"),sg(),Jx(3497,":"),sg(),Sl(3498,"pre")(3499,"code"),Jx(3500,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),sg()(),Sl(3501,"p")(3502,"code"),Jx(3503,"component.ts"),sg(),Jx(3504,":"),sg(),Sl(3505,"pre")(3506,"code"),Jx(3507,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),sg()(),Sl(3508,"blockquote")(3509,"p"),Jx(3510,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),Sl(3511,"code"),Jx(3512,"value"),sg(),Jx(3513,"."),sg()()()(),Sl(3514,"tr",17)(3515,"td",18)(3516,"div",19)(3517,"span",20),Jx(3518," tooltip"),Wl(3519,"br"),sg()()(),Sl(3520,"td",21)(3521,"code",31),Jx(3522,"string"),sg()(),Sl(3523,"td",24)(3524,"em")(3525,"strong"),Jx(3526,"(opcional)"),sg()(),Sl(3527,"p"),Jx(3528,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(3529,"em"),Jx(3530,"mouse"),sg(),Jx(3531," em cima do \xEDcone."),sg()()(),Sl(3532,"tr",17)(3533,"td",18)(3534,"div",19)(3535,"span",20),Jx(3536," value"),Wl(3537,"br"),sg()()(),Sl(3538,"td",21)(3539,"code",31),Jx(3540,"string"),sg()(),Sl(3541,"td",24)(3542,"p"),Jx(3543,"Define o valor do \xEDcone que ser\xE1 exibido."),sg()()()(),Sl(3544,"h4",44)(3545,"code",5),Jx(3546,"PoTableColumnLabel"),sg()(),Sl(3547,"div",2)(3548,"p"),Jx(3549,"Interface para configura\xE7\xE3o das colunas de labels do "),Sl(3550,"code"),Jx(3551,"po-table"),sg(),Jx(3552,"."),sg()(),Sl(3553,"h4",13),Jx(3554,"Propriedades"),sg(),Sl(3555,"table",14)(3556,"tr",15)(3557,"th",16),Jx(3558,"Nome"),sg(),Sl(3559,"th",16),Jx(3560,"Tipo"),sg(),Sl(3561,"th",16),Jx(3562,"Descri\xE7\xE3o"),sg()(),Sl(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),Jx(3567," color"),Wl(3568,"br"),sg()()(),Sl(3569,"td",21)(3570,"code",31),Jx(3571,"string"),sg()(),Sl(3572,"td",24)(3573,"em")(3574,"strong"),Jx(3575,"(opcional)"),sg()(),Sl(3576,"p"),Jx(3577,"Define a cor do label."),sg(),Sl(3578,"p"),Jx(3579,"Valores v\xE1lidos:"),sg(),Sl(3580,"ul")(3581,"li"),Wl(3582,"span",51),Sl(3583,"code"),Jx(3584,"color-01"),sg()(),Sl(3585,"li"),Wl(3586,"span",52),Sl(3587,"code"),Jx(3588,"color-02"),sg()(),Sl(3589,"li"),Wl(3590,"span",53),Sl(3591,"code"),Jx(3592,"color-03"),sg()(),Sl(3593,"li"),Wl(3594,"span",54),Sl(3595,"code"),Jx(3596,"color-04"),sg()(),Sl(3597,"li"),Wl(3598,"span",55),Sl(3599,"code"),Jx(3600,"color-05"),sg()(),Sl(3601,"li"),Wl(3602,"span",56),Sl(3603,"code"),Jx(3604,"color-06"),sg()(),Sl(3605,"li"),Wl(3606,"span",57),Sl(3607,"code"),Jx(3608,"color-07"),sg()(),Sl(3609,"li"),Wl(3610,"span",58),Sl(3611,"code"),Jx(3612,"color-08"),sg()(),Sl(3613,"li"),Wl(3614,"span",59),Sl(3615,"code"),Jx(3616,"color-09"),sg()(),Sl(3617,"li"),Wl(3618,"span",60),Sl(3619,"code"),Jx(3620,"color-10"),sg()(),Sl(3621,"li"),Wl(3622,"span",61),Sl(3623,"code"),Jx(3624,"color-11"),sg()(),Sl(3625,"li"),Wl(3626,"span",62),Sl(3627,"code"),Jx(3628,"color-12"),sg()()(),Sl(3629,"blockquote")(3630,"p"),Jx(3631,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(3632,"strong"),Jx(3633,"Caption Tag Colors"),sg(),Jx(3634,":"),sg()(),Sl(3635,"ul")(3636,"li"),Wl(3637,"span",63),Sl(3638,"code"),Jx(3639,"caption-tag-01"),sg(),Wl(3640,"span",64),Sl(3641,"code"),Jx(3642,"caption-tag-02"),sg(),Wl(3643,"span",65),Sl(3644,"code"),Jx(3645,"caption-tag-03"),sg(),Wl(3646,"span",66),Sl(3647,"code"),Jx(3648,"caption-tag-04"),sg(),Wl(3649,"span",67),Sl(3650,"code"),Jx(3651,"caption-tag-05"),sg()(),Sl(3652,"li"),Wl(3653,"span",68),Sl(3654,"code"),Jx(3655,"caption-tag-06"),sg(),Wl(3656,"span",69),Sl(3657,"code"),Jx(3658,"caption-tag-07"),sg(),Wl(3659,"span",70),Sl(3660,"code"),Jx(3661,"caption-tag-08"),sg(),Wl(3662,"span",71),Sl(3663,"code"),Jx(3664,"caption-tag-09"),sg(),Wl(3665,"span",72),Sl(3666,"code"),Jx(3667,"caption-tag-10"),sg()(),Sl(3668,"li"),Wl(3669,"span",73),Sl(3670,"code"),Jx(3671,"caption-tag-11"),sg(),Wl(3672,"span",74),Sl(3673,"code"),Jx(3674,"caption-tag-12"),sg(),Wl(3675,"span",75),Sl(3676,"code"),Jx(3677,"caption-tag-13"),sg(),Wl(3678,"span",76),Sl(3679,"code"),Jx(3680,"caption-tag-14"),sg(),Wl(3681,"span",77),Sl(3682,"code"),Jx(3683,"caption-tag-15"),sg()(),Sl(3684,"li"),Wl(3685,"span",78),Sl(3686,"code"),Jx(3687,"caption-tag-16"),sg(),Wl(3688,"span",79),Sl(3689,"code"),Jx(3690,"caption-tag-17"),sg(),Wl(3691,"span",80),Sl(3692,"code"),Jx(3693,"caption-tag-18"),sg(),Wl(3694,"span",81),Sl(3695,"code"),Jx(3696,"caption-tag-19"),sg(),Wl(3697,"span",82),Sl(3698,"code"),Jx(3699,"caption-tag-20"),sg()(),Sl(3700,"li"),Wl(3701,"span",83),Sl(3702,"code"),Jx(3703,"caption-tag-21"),sg(),Wl(3704,"span",84),Sl(3705,"code"),Jx(3706,"caption-tag-22"),sg(),Wl(3707,"span",85),Sl(3708,"code"),Jx(3709,"caption-tag-23"),sg(),Wl(3710,"span",86),Sl(3711,"code"),Jx(3712,"caption-tag-24"),sg(),Wl(3713,"span",87),Sl(3714,"code"),Jx(3715,"caption-tag-25"),sg()(),Sl(3716,"li"),Wl(3717,"span",88),Sl(3718,"code"),Jx(3719,"caption-tag-26"),sg(),Wl(3720,"span",89),Sl(3721,"code"),Jx(3722,"caption-tag-27"),sg(),Wl(3723,"span",90),Sl(3724,"code"),Jx(3725,"caption-tag-28"),sg(),Wl(3726,"span",91),Sl(3727,"code"),Jx(3728,"caption-tag-29"),sg(),Wl(3729,"span",92),Sl(3730,"code"),Jx(3731,"caption-tag-30"),sg()(),Sl(3732,"li"),Wl(3733,"span",93),Sl(3734,"code"),Jx(3735,"caption-tag-31"),sg(),Wl(3736,"span",94),Sl(3737,"code"),Jx(3738,"caption-tag-32"),sg(),Wl(3739,"span",95),Sl(3740,"code"),Jx(3741,"caption-tag-33"),sg(),Wl(3742,"span",96),Sl(3743,"code"),Jx(3744,"caption-tag-34"),sg(),Wl(3745,"span",97),Sl(3746,"code"),Jx(3747,"caption-tag-35"),sg()()(),Sl(3748,"p"),Jx(3749,"Exemplo de uso:"),sg(),Sl(3750,"pre")(3751,"code"),Jx(3752,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),sg()()()(),Sl(3753,"tr",17)(3754,"td",18)(3755,"div",19)(3756,"span",20),Jx(3757," icon"),Wl(3758,"br"),sg()()(),Sl(3759,"td",21)(3760,"code",22),Jx(3761,"boolean "),sg(),Sl(3762,"code",31),Jx(3763," string "),sg(),Sl(3764,"code",46),Jx(3765," TemplateRef<void>"),sg()(),Sl(3766,"td",24)(3767,"em")(3768,"strong"),Jx(3769,"(opcional)"),sg()(),Sl(3770,"p"),Jx(3771,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Sl(3772,"em"),Jx(3773,"tag"),sg(),Jx(3774,"."),sg(),Sl(3775,"p"),Jx(3776,"Quando "),Sl(3777,"code"),Jx(3778,"p-type"),sg(),Jx(3779," estiver definida, basta informar um valor igual a "),Sl(3780,"code"),Jx(3781,"true"),sg(),Jx(3782," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),sg(),Sl(3783,"ul")(3784,"li"),Wl(3785,"span",105),Jx(3786," - "),Sl(3787,"code"),Jx(3788,"success"),sg()(),Sl(3789,"li"),Wl(3790,"span",106),Jx(3791," - "),Sl(3792,"code"),Jx(3793,"warning"),sg()(),Sl(3794,"li"),Wl(3795,"span",107),Jx(3796," - "),Sl(3797,"code"),Jx(3798,"danger"),sg()(),Sl(3799,"li"),Wl(3800,"span",108),Jx(3801," - "),Sl(3802,"code"),Jx(3803,"info"),sg()()(),Sl(3804,"p"),Jx(3805,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(3806,"a",26),Jx(3807,"Biblioteca de \xEDcones"),sg(),Jx(3808,". conforme exemplo abaixo:"),sg(),Sl(3809,"pre")(3810,"code"),Jx(3811,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),sg()(),Sl(3812,"p"),Jx(3813,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(3814,"em"),Jx(3815,"Font Awesome"),sg(),Jx(3816,", da seguinte forma:"),sg(),Sl(3817,"pre")(3818,"code"),Jx(3819,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),sg()(),Sl(3820,"p"),Jx(3821,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(3822,"code"),Jx(3823,"TemplateRef"),sg(),Jx(3824,", conforme exemplo abaixo:"),sg(),Sl(3825,"pre")(3826,"code"),Jx(3827,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(3828,"blockquote")(3829,"p"),Jx(3830,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(3831,"code"),Jx(3832,"font-size: inherit"),sg(),Jx(3833," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(3834,"tr",17)(3835,"td",18)(3836,"div",19)(3837,"span",20),Jx(3838," label"),Wl(3839,"br"),sg()()(),Sl(3840,"td",21)(3841,"code",31),Jx(3842,"string"),sg()(),Sl(3843,"td",24)(3844,"p"),Jx(3845,"Texto que ser\xE1 exibido na coluna."),sg()()(),Sl(3846,"tr",17)(3847,"td",18)(3848,"div",19)(3849,"span",20),Jx(3850," textColor"),Wl(3851,"br"),sg()()(),Sl(3852,"td",21)(3853,"code",31),Jx(3854,"string"),sg()(),Sl(3855,"td",24)(3856,"em")(3857,"strong"),Jx(3858,"(opcional)"),sg()(),Sl(3859,"p"),Jx(3860,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Sl(3861,"ul")(3862,"li")(3863,"p"),Jx(3864,"Hexadeximal, por exemplo "),Sl(3865,"code"),Jx(3866,"#c64840"),sg(),Jx(3867,";"),sg()(),Sl(3868,"li")(3869,"p"),Jx(3870,"RGB, como "),Sl(3871,"code"),Jx(3872,"rgb(0, 0, 165)"),sg(),Jx(3873,";"),sg()(),Sl(3874,"li")(3875,"p"),Jx(3876,"O nome da cor, por exemplo "),Sl(3877,"code"),Jx(3878,"blue"),sg(),Jx(3879,";"),sg()(),Sl(3880,"li")(3881,"p"),Jx(3882,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),sg(),Sl(3883,"ul")(3884,"li"),Wl(3885,"span",51),Sl(3886,"code"),Jx(3887,"color-01"),sg()(),Sl(3888,"li"),Wl(3889,"span",52),Sl(3890,"code"),Jx(3891,"color-02"),sg()(),Sl(3892,"li"),Wl(3893,"span",53),Sl(3894,"code"),Jx(3895,"color-03"),sg()(),Sl(3896,"li"),Wl(3897,"span",54),Sl(3898,"code"),Jx(3899,"color-04"),sg()(),Sl(3900,"li"),Wl(3901,"span",55),Sl(3902,"code"),Jx(3903,"color-05"),sg()(),Sl(3904,"li"),Wl(3905,"span",56),Sl(3906,"code"),Jx(3907,"color-06"),sg()(),Sl(3908,"li"),Wl(3909,"span",57),Sl(3910,"code"),Jx(3911,"color-07"),sg()(),Sl(3912,"li"),Wl(3913,"span",58),Sl(3914,"code"),Jx(3915,"color-08"),sg()(),Sl(3916,"li"),Wl(3917,"span",59),Sl(3918,"code"),Jx(3919,"color-09"),sg()(),Sl(3920,"li"),Wl(3921,"span",60),Sl(3922,"code"),Jx(3923,"color-10"),sg()(),Sl(3924,"li"),Wl(3925,"span",61),Sl(3926,"code"),Jx(3927,"color-11"),sg()(),Sl(3928,"li"),Wl(3929,"span",62),Sl(3930,"code"),Jx(3931,"color-12"),sg()()()(),Sl(3932,"li")(3933,"p"),Jx(3934,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),sg()()(),Sl(3935,"blockquote")(3936,"p")(3937,"strong"),Jx(3938,"Aten\xE7\xE3o:"),sg(),Jx(3939," A propriedade "),Sl(3940,"code"),Jx(3941,"p-type"),sg(),Jx(3942," sobrep\xF5e esta defini\xE7\xE3o."),sg()(),Sl(3943,"blockquote")(3944,"p")(3945,"strong"),Jx(3946,"Aten\xE7\xE3o:"),sg(),Jx(3947," As cores da paleta "),Sl(3948,"strong"),Jx(3949,"Caption Tag Colors"),sg(),Jx(3950," ("),Sl(3951,"code"),Jx(3952,"caption-tag-01"),sg(),Jx(3953," a "),Sl(3954,"code"),Jx(3955,"caption-tag-35"),sg(),Jx(3956,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),sg()()()(),Sl(3957,"tr",17)(3958,"td",18)(3959,"div",19)(3960,"span",20),Jx(3961," tooltip"),Wl(3962,"br"),sg()()(),Sl(3963,"td",21)(3964,"code",31),Jx(3965,"string"),sg()(),Sl(3966,"td",24)(3967,"em")(3968,"strong"),Jx(3969,"(opcional)"),sg()(),Sl(3970,"p"),Jx(3971,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Sl(3972,"em"),Jx(3973,"mouse"),sg(),Jx(3974," em cima do "),Sl(3975,"em"),Jx(3976,"label"),sg(),Jx(3977,"."),sg(),Sl(3978,"blockquote")(3979,"p"),Jx(3980,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),sg()()()(),Sl(3981,"tr",17)(3982,"td",18)(3983,"div",19)(3984,"span",20),Jx(3985," type"),Wl(3986,"br"),sg()()(),Sl(3987,"td",21)(3988,"code",109),Jx(3989,"PoTagType"),sg()(),Sl(3990,"td",24)(3991,"em")(3992,"strong"),Jx(3993,"(opcional)"),sg()(),Sl(3994,"p"),Jx(3995,"Define o tipo da "),Sl(3996,"em"),Jx(3997,"tag"),sg(),Jx(3998,"."),sg(),Sl(3999,"p"),Jx(4e3,"Valores v\xE1lidos:"),sg(),Sl(4001,"ul")(4002,"li")(4003,"code"),Jx(4004,"success"),sg(),Jx(4005,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),sg(),Sl(4006,"li")(4007,"code"),Jx(4008,"warning"),sg(),Jx(4009,": cor amarela que representa aviso ou advert\xEAncia."),sg(),Sl(4010,"li")(4011,"code"),Jx(4012,"danger"),sg(),Jx(4013,": cor vermelha para erro ou aviso cr\xEDtico."),sg(),Sl(4014,"li")(4015,"code"),Jx(4016,"info"),sg(),Jx(4017,": cor cinza escuro que caracteriza conte\xFAdo informativo."),sg()(),Sl(4018,"blockquote")(4019,"p"),Jx(4020,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Sl(4021,"code"),Jx(4022,"p-color"),sg(),Jx(4023," e "),Sl(4024,"code"),Jx(4025,"p-icon"),sg(),Jx(4026," somente ser\xE1 exibido caso seja "),Sl(4027,"code"),Jx(4028,"true"),sg(),Jx(4029,"."),sg()()()(),Sl(4030,"tr",17)(4031,"td",18)(4032,"div",19)(4033,"span",20),Jx(4034," value"),Wl(4035,"br"),sg()()(),Sl(4036,"td",21)(4037,"code",31),Jx(4038,"string "),sg(),Sl(4039,"code",35),Jx(4040," number"),sg()(),Sl(4041,"td",24)(4042,"p"),Jx(4043,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),sg()()()(),Sl(4044,"h4",44)(4045,"code",5),Jx(4046,"PoTableDetailColumn"),sg()(),Sl(4047,"div",2)(4048,"p"),Jx(4049,"Interface para configura\xE7\xE3o das colunas do "),Sl(4050,"code"),Jx(4051,"po-table-detail"),sg(),Jx(4052,"."),sg()(),Sl(4053,"h4",13),Jx(4054,"Propriedades"),sg(),Sl(4055,"table",14)(4056,"tr",15)(4057,"th",16),Jx(4058,"Nome"),sg(),Sl(4059,"th",16),Jx(4060,"Tipo"),sg(),Sl(4061,"th",16),Jx(4062,"Descri\xE7\xE3o"),sg()(),Sl(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),Jx(4067," format"),Wl(4068,"br"),sg()()(),Sl(4069,"td",21)(4070,"code",31),Jx(4071,"string"),sg()(),Sl(4072,"td",24)(4073,"em")(4074,"strong"),Jx(4075,"(opcional)"),sg()(),Sl(4076,"p"),Jx(4077,"Formato de exibi\xE7\xE3o do valor da coluna:"),sg(),Sl(4078,"ul")(4079,"li")(4080,"p"),Jx(4081,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),sg()(),Sl(4082,"li")(4083,"p"),Jx(4084,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg()(),Sl(4085,"li")(4086,"p"),Jx(4087,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),sg()(),Sl(4088,"li")(4089,"p"),Jx(4090,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),Sl(4091,"a",110)(4092,"strong"),Jx(4093,"DecimalPipe"),sg()(),Jx(4094," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),sg(),Sl(4095,"ul")(4096,"li"),Jx(4097,"Valor de entrada: "),Sl(4098,"code"),Jx(4099,"50"),sg(),Jx(4100," e valor para formata\xE7\xE3o: "),Sl(4101,"code"),Jx(4102,"'1.2-5'"),sg(),Jx(4103," o resultado ser\xE1: "),Sl(4104,"code"),Jx(4105,"50.00"),sg()()()()()()(),Sl(4106,"tr",17)(4107,"td",18)(4108,"div",19)(4109,"span",20),Jx(4110," label"),Wl(4111,"br"),sg()()(),Sl(4112,"td",21)(4113,"code",31),Jx(4114,"string"),sg()(),Sl(4115,"td",24)(4116,"em")(4117,"strong"),Jx(4118,"(opcional)"),sg()(),Sl(4119,"p"),Jx(4120,"Texto para t\xEDtulo da coluna."),sg()()(),Sl(4121,"tr",17)(4122,"td",18)(4123,"div",19)(4124,"span",20),Jx(4125," property"),Wl(4126,"br"),sg()()(),Sl(4127,"td",21)(4128,"code",31),Jx(4129,"string"),sg()(),Sl(4130,"td",24)(4131,"em")(4132,"strong"),Jx(4133,"(opcional)"),sg()(),Sl(4134,"p"),Jx(4135,"Nome identificador da coluna."),sg()()(),Sl(4136,"tr",17)(4137,"td",18)(4138,"div",19)(4139,"span",20),Jx(4140," type"),Wl(4141,"br"),sg()()(),Sl(4142,"td",21)(4143,"code",31),Jx(4144,"string"),sg()(),Sl(4145,"td",24)(4146,"em")(4147,"strong"),Jx(4148,"(opcional)"),sg()(),Sl(4149,"p"),Jx(4150,"Tipo da coluna."),sg(),Sl(4151,"p"),Jx(4152,"Valores v\xE1lidos:"),sg(),Sl(4153,"ul")(4154,"li")(4155,"p")(4156,"code"),Jx(4157,"currency"),sg(),Jx(4158,": valores monet\xE1rios."),sg()(),Sl(4159,"li")(4160,"p")(4161,"code"),Jx(4162,"date"),sg(),Jx(4163,": valor de datas."),sg(),Sl(4164,"ul")(4165,"li"),Jx(4166,"Aceita os tipos "),Sl(4167,"em"),Jx(4168,"string"),sg(),Jx(4169," e "),Sl(4170,"em"),Jx(4171,"Date"),sg(),Jx(4172,` padr\xE3o do Javascript,
por exemplo: `),Sl(4173,"code"),Jx(4174,"'2017-11-28'"),sg(),Jx(4175," ou "),Sl(4176,"code"),Jx(4177,"new Date(2017, 10, 28)"),sg(),Jx(4178,"."),sg()()(),Sl(4179,"li")(4180,"p")(4181,"code"),Jx(4182,"time"),sg(),Jx(4183,": valor de hor\xE1rio."),sg()(),Sl(4184,"li")(4185,"p")(4186,"code"),Jx(4187,"number"),sg(),Jx(4188,": valores num\xE9ricos."),sg()(),Sl(4189,"li")(4190,"p")(4191,"code"),Jx(4192,"dateTime"),sg(),Jx(4193,": valor de data com hor\xE1rio."),sg(),Sl(4194,"ul")(4195,"li"),Jx(4196,"Aceita o tipo "),Sl(4197,"em"),Jx(4198,"string"),sg(),Jx(4199," no formato "),Sl(4200,"strong"),Jx(4201,"ISO-8601"),sg(),Jx(4202," extendido "),Sl(4203,"strong"),Jx(4204,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),Jx(4205,`
e o tipo `),Sl(4206,"em"),Jx(4207,"Date"),sg(),Jx(4208," padr\xE3o do Javascript, por exemplo: "),Sl(4209,"code"),Jx(4210,"'2017-11-28T00:00:00-02:00'"),sg(),Jx(4211," ou "),Sl(4212,"code"),Jx(4213,"new Date(2017, 10, 28)"),sg(),Jx(4214,"."),sg(),Sl(4215,"li"),Jx(4216,"Aceita o tipo "),Sl(4217,"em"),Jx(4218,"string"),sg(),Jx(4219," nos formatos "),Sl(4220,"strong"),Jx(4221,"'HH:mm:ss'"),sg(),Jx(4222," ou "),Sl(4223,"strong"),Jx(4224,"'HH:mm:ss.ffffff'"),sg(),Jx(4225,", por exemplo: "),Sl(4226,"code"),Jx(4227,"'23:12:45'"),sg(),Jx(4228,"."),sg()()()()()()(),Sl(4229,"h4",44)(4230,"code",5),Jx(4231,"PoTableDetail"),sg()(),Sl(4232,"div",2)(4233,"p"),Jx(4234,"Interface para configura\xE7\xE3o do "),Sl(4235,"em"),Jx(4236,"detail"),sg(),Jx(4237," do componente "),Sl(4238,"code"),Jx(4239,"po-table"),sg(),Jx(4240,"."),sg()(),Sl(4241,"h4",13),Jx(4242,"Propriedades"),sg(),Sl(4243,"table",14)(4244,"tr",15)(4245,"th",16),Jx(4246,"Nome"),sg(),Sl(4247,"th",16),Jx(4248,"Tipo"),sg(),Sl(4249,"th",16),Jx(4250,"Descri\xE7\xE3o"),sg()(),Sl(4251,"tr",17)(4252,"td",18)(4253,"div",19)(4254,"span",20),Jx(4255," columns"),Wl(4256,"br"),sg()()(),Sl(4257,"td",21)(4258,"code",111),Jx(4259,"Array<PoTableDetailColumn>"),sg()(),Sl(4260,"td",24)(4261,"p"),Jx(4262,"Define uma lista do tipo "),Sl(4263,"code"),Jx(4264,"PoTableDetailColumn"),sg(),Jx(4265," para as colunas do objet "),Sl(4266,"em"),Jx(4267,"detail"),sg(),Jx(4268,". Por exemplo:"),sg(),Sl(4269,"pre")(4270,"code"),Jx(4271,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),sg()()()(),Sl(4272,"tr",17)(4273,"td",18)(4274,"div",19)(4275,"span",20),Jx(4276," hideSelect"),Wl(4277,"br"),sg()()(),Sl(4278,"td",21)(4279,"code",22),Jx(4280,"boolean"),sg()(),Sl(4281,"td",24)(4282,"em")(4283,"strong"),Jx(4284,"(opcional)"),sg()(),Sl(4285,"p"),Jx(4286,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),sg()()(),Sl(4287,"tr",17)(4288,"td",18)(4289,"div",19)(4290,"span",20),Jx(4291," typeHeader"),Wl(4292,"br"),sg()()(),Sl(4293,"td",21)(4294,"code",31),Jx(4295,"string"),sg()(),Sl(4296,"td",24)(4297,"em")(4298,"strong"),Jx(4299,"(opcional)"),sg()(),Sl(4300,"p"),Jx(4301,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),Sl(4302,"em"),Jx(4303,"detail"),sg(),Jx(4304," ."),sg(),Sl(4305,"p"),Jx(4306,"Valores v\xE1lidos:"),sg(),Sl(4307,"ul")(4308,"li")(4309,"code"),Jx(4310,"inline"),sg(),Jx(4311,": Atribui o cabe\xE7alho na mesma linha do "),Sl(4312,"em"),Jx(4313,"detail"),sg(),Jx(4314,"."),sg(),Sl(4315,"li")(4316,"code"),Jx(4317,"top"),sg(),Jx(4318,": Atribui o cabe\xE7alho acima do "),Sl(4319,"em"),Jx(4320,"detail"),sg(),Jx(4321,", id\xEAntico ao "),Sl(4322,"code"),Jx(4323,"po-table"),sg(),Jx(4324,"."),sg(),Sl(4325,"li")(4326,"code"),Jx(4327,"none"),sg(),Jx(4328,": Remove o cabe\xE7alho do "),Sl(4329,"em"),Jx(4330,"detail"),sg(),Jx(4331,"."),sg()()()()(),Sl(4332,"h4",44)(4333,"code",5),Jx(4334,"PoTableSubtitleColumn"),sg()(),Sl(4335,"div",2)(4336,"p"),Jx(4337,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),sg()(),Sl(4338,"h4",13),Jx(4339,"Propriedades"),sg(),Sl(4340,"table",14)(4341,"tr",15)(4342,"th",16),Jx(4343,"Nome"),sg(),Sl(4344,"th",16),Jx(4345,"Tipo"),sg(),Sl(4346,"th",16),Jx(4347,"Descri\xE7\xE3o"),sg()(),Sl(4348,"tr",17)(4349,"td",18)(4350,"div",19)(4351,"span",20),Jx(4352," color"),Wl(4353,"br"),sg()()(),Sl(4354,"td",21)(4355,"code",31),Jx(4356,"string"),sg()(),Sl(4357,"td",24)(4358,"em")(4359,"strong"),Jx(4360,"(opcional)"),sg()(),Sl(4361,"p"),Jx(4362,"Define a cor do "),Sl(4363,"em"),Jx(4364,"status"),sg(),Jx(4365,"."),sg(),Sl(4366,"p"),Jx(4367,"Valores v\xE1lidos:"),sg(),Sl(4368,"ul")(4369,"li"),Wl(4370,"span",51),Sl(4371,"code"),Jx(4372,"color-01"),sg()(),Sl(4373,"li"),Wl(4374,"span",52),Sl(4375,"code"),Jx(4376,"color-02"),sg()(),Sl(4377,"li"),Wl(4378,"span",53),Sl(4379,"code"),Jx(4380,"color-03"),sg()(),Sl(4381,"li"),Wl(4382,"span",54),Sl(4383,"code"),Jx(4384,"color-04"),sg()(),Sl(4385,"li"),Wl(4386,"span",55),Sl(4387,"code"),Jx(4388,"color-05"),sg()(),Sl(4389,"li"),Wl(4390,"span",56),Sl(4391,"code"),Jx(4392,"color-06"),sg()(),Sl(4393,"li"),Wl(4394,"span",57),Sl(4395,"code"),Jx(4396,"color-07"),sg()(),Sl(4397,"li"),Wl(4398,"span",58),Sl(4399,"code"),Jx(4400,"color-08"),sg()(),Sl(4401,"li"),Wl(4402,"span",59),Sl(4403,"code"),Jx(4404,"color-09"),sg()(),Sl(4405,"li"),Wl(4406,"span",60),Sl(4407,"code"),Jx(4408,"color-10"),sg()(),Sl(4409,"li"),Wl(4410,"span",61),Sl(4411,"code"),Jx(4412,"color-11"),sg()(),Sl(4413,"li"),Wl(4414,"span",62),Sl(4415,"code"),Jx(4416,"color-12"),sg()()(),Sl(4417,"blockquote")(4418,"p"),Jx(4419,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Sl(4420,"strong"),Jx(4421,"Caption Tag Colors"),sg(),Jx(4422,":"),sg()(),Sl(4423,"ul")(4424,"li"),Wl(4425,"span",63),Sl(4426,"code"),Jx(4427,"caption-tag-01"),sg(),Wl(4428,"span",64),Sl(4429,"code"),Jx(4430,"caption-tag-02"),sg(),Wl(4431,"span",65),Sl(4432,"code"),Jx(4433,"caption-tag-03"),sg(),Wl(4434,"span",66),Sl(4435,"code"),Jx(4436,"caption-tag-04"),sg(),Wl(4437,"span",67),Sl(4438,"code"),Jx(4439,"caption-tag-05"),sg()(),Sl(4440,"li"),Wl(4441,"span",68),Sl(4442,"code"),Jx(4443,"caption-tag-06"),sg(),Wl(4444,"span",69),Sl(4445,"code"),Jx(4446,"caption-tag-07"),sg(),Wl(4447,"span",70),Sl(4448,"code"),Jx(4449,"caption-tag-08"),sg(),Wl(4450,"span",71),Sl(4451,"code"),Jx(4452,"caption-tag-09"),sg(),Wl(4453,"span",72),Sl(4454,"code"),Jx(4455,"caption-tag-10"),sg()(),Sl(4456,"li"),Wl(4457,"span",73),Sl(4458,"code"),Jx(4459,"caption-tag-11"),sg(),Wl(4460,"span",74),Sl(4461,"code"),Jx(4462,"caption-tag-12"),sg(),Wl(4463,"span",75),Sl(4464,"code"),Jx(4465,"caption-tag-13"),sg(),Wl(4466,"span",76),Sl(4467,"code"),Jx(4468,"caption-tag-14"),sg(),Wl(4469,"span",77),Sl(4470,"code"),Jx(4471,"caption-tag-15"),sg()(),Sl(4472,"li"),Wl(4473,"span",78),Sl(4474,"code"),Jx(4475,"caption-tag-16"),sg(),Wl(4476,"span",79),Sl(4477,"code"),Jx(4478,"caption-tag-17"),sg(),Wl(4479,"span",80),Sl(4480,"code"),Jx(4481,"caption-tag-18"),sg(),Wl(4482,"span",81),Sl(4483,"code"),Jx(4484,"caption-tag-19"),sg(),Wl(4485,"span",82),Sl(4486,"code"),Jx(4487,"caption-tag-20"),sg()(),Sl(4488,"li"),Wl(4489,"span",83),Sl(4490,"code"),Jx(4491,"caption-tag-21"),sg(),Wl(4492,"span",84),Sl(4493,"code"),Jx(4494,"caption-tag-22"),sg(),Wl(4495,"span",85),Sl(4496,"code"),Jx(4497,"caption-tag-23"),sg(),Wl(4498,"span",86),Sl(4499,"code"),Jx(4500,"caption-tag-24"),sg(),Wl(4501,"span",87),Sl(4502,"code"),Jx(4503,"caption-tag-25"),sg()(),Sl(4504,"li"),Wl(4505,"span",88),Sl(4506,"code"),Jx(4507,"caption-tag-26"),sg(),Wl(4508,"span",89),Sl(4509,"code"),Jx(4510,"caption-tag-27"),sg(),Wl(4511,"span",90),Sl(4512,"code"),Jx(4513,"caption-tag-28"),sg(),Wl(4514,"span",91),Sl(4515,"code"),Jx(4516,"caption-tag-29"),sg(),Wl(4517,"span",92),Sl(4518,"code"),Jx(4519,"caption-tag-30"),sg()(),Sl(4520,"li"),Wl(4521,"span",93),Sl(4522,"code"),Jx(4523,"caption-tag-31"),sg(),Wl(4524,"span",94),Sl(4525,"code"),Jx(4526,"caption-tag-32"),sg(),Wl(4527,"span",95),Sl(4528,"code"),Jx(4529,"caption-tag-33"),sg(),Wl(4530,"span",96),Sl(4531,"code"),Jx(4532,"caption-tag-34"),sg(),Wl(4533,"span",97),Sl(4534,"code"),Jx(4535,"caption-tag-35"),sg()()()()(),Sl(4536,"tr",17)(4537,"td",18)(4538,"div",19)(4539,"span",20),Jx(4540," content"),Wl(4541,"br"),sg()()(),Sl(4542,"td",21)(4543,"code",31),Jx(4544,"string"),sg()(),Sl(4545,"td",24)(4546,"p"),Jx(4547,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),sg()()(),Sl(4548,"tr",17)(4549,"td",18)(4550,"div",19)(4551,"span",20),Jx(4552," label"),Wl(4553,"br"),sg()()(),Sl(4554,"td",21)(4555,"code",31),Jx(4556,"string"),sg()(),Sl(4557,"td",24)(4558,"p"),Jx(4559,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),sg()()(),Sl(4560,"tr",17)(4561,"td",18)(4562,"div",19)(4563,"span",20),Jx(4564," value"),Wl(4565,"br"),sg()()(),Sl(4566,"td",21)(4567,"code",31),Jx(4568,"string "),sg(),Sl(4569,"code",35),Jx(4570," number"),sg()(),Sl(4571,"td",24)(4572,"p"),Jx(4573,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),sg()()()(),Sl(4574,"h3"),Jx(4575,"Enums"),sg(),Sl(4576,"h4",4)(4577,"code",5),Jx(4578,"PoTableColumnSortType"),sg()(),Sl(4579,"div",2)(4580,"p"),Jx(4581,"Tipos de ordena\xE7\xE3o das colunas da tabela."),sg()(),Sl(4582,"h4",13),Jx(4583,"Propriedades"),sg(),Sl(4584,"table",14)(4585,"tr",15)(4586,"th",16),Jx(4587,"Nome"),sg(),Sl(4588,"th",16),Jx(4589,"Descri\xE7\xE3o"),sg()(),Sl(4590,"tr",17)(4591,"td",18)(4592,"div",19)(4593,"span",20),Jx(4594," Ascending"),Wl(4595,"br"),sg()()(),Sl(4596,"td",24)(4597,"p"),Jx(4598,"Ordena\xE7\xE3o ascendente"),sg()()(),Sl(4599,"tr",17)(4600,"td",18)(4601,"div",19)(4602,"span",20),Jx(4603," Descending"),Wl(4604,"br"),sg()()(),Sl(4605,"td",24)(4606,"p"),Jx(4607,"Ordena\xE7\xE3o descendente"),sg()()()(),Sl(4608,"h4",4)(4609,"code",5),Jx(4610,"PoTableColumnSpacing"),sg()(),Sl(4611,"div",2)(4612,"p"),Jx(4613,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Sl(4614,"strong"),Jx(4615,"p-spacing"),sg(),Jx(4616,") do po-table."),sg()(),Sl(4617,"h4",13),Jx(4618,"Propriedades"),sg(),Sl(4619,"table",14)(4620,"tr",15)(4621,"th",16),Jx(4622,"Nome"),sg(),Sl(4623,"th",16),Jx(4624,"Descri\xE7\xE3o"),sg()(),Sl(4625,"tr",17)(4626,"td",18)(4627,"div",19)(4628,"span",20),Jx(4629," ExtraSmall"),Wl(4630,"br"),sg()()(),Sl(4631,"td",24)(4632,"p"),Jx(4633,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),sg()()(),Sl(4634,"tr",17)(4635,"td",18)(4636,"div",19)(4637,"span",20),Jx(4638," Small"),Wl(4639,"br"),sg()()(),Sl(4640,"td",24)(4641,"p"),Jx(4642,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),sg()()(),Sl(4643,"tr",17)(4644,"td",18)(4645,"div",19)(4646,"span",20),Jx(4647," Medium"),Wl(4648,"br"),sg()()(),Sl(4649,"td",24)(4650,"p"),Jx(4651,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),sg()()(),Sl(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),Jx(4656," Large"),Wl(4657,"br"),sg()()(),Sl(4658,"td",24)(4659,"p"),Jx(4660,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return r})();var pt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(C(Xn),C(wn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-table-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),sg()()()),l&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,Je,Ke,Ze,tt,it,at,rt,st,dt],encapsulation:2})}return r})();var en=[{path:"",component:pt}],ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[pL.forChild(en),pL]})}return r})();var ai=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[ar,ct]})}return r})();export{ai as DocPoTableModule};