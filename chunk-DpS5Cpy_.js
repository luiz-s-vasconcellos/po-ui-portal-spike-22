import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,I,c$ as Xi,dv as Up,s,e as r$1,aW as Yp,c5 as Ode,dD as _h,b$ as bT,c as b,b7 as E3,J as Gl,M as tw,bs as hN,a7 as fN,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt$1,b1 as mv,c4 as C3,b4 as O3,cp as Nhe,c8 as Sde,bH as k3,c9 as $he,b6 as Yo,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,O as we,av as Yl,aw as uo,ax as fo,cI as b3,b5 as qhe,aJ as Uhe,dE as $ue,ba as gNe,a2 as QE,dF as HO,a4 as _N,cH as sN,a6 as wN,as as cN,dh as Gue,dj as LO,aQ as mx,aR as gx,aS as vx,r as rb,a3 as aNe,aA as Rx,br as aN,H as vw,a5 as EN,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ut=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Ge=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&Gl(0,"po-table",0),l&2&&tw("p-items",hN(2,bt,fN(1,ut)));},dependencies:[E3],encapsulation:2,changeDetection:1})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-basic/sample-po-table-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-table-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,St,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ge],encapsulation:2})}return r})();var se=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(a){return {text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return `${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xe=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=Xi.Medium;filterType=Up.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(a){this.event=a;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(a){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(a){this.height&&(this.items=a);}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=Xi.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(w(se))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&Yl(Yo,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first);}},standalone:false,features:[we([se])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=Cx();Tl(0,"po-table",1),ht("p-all-selected",function(){return o.changeEvent("p-all-selected")})("p-all-unselected",function(){return o.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return o.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return o.changeEvent("p-collapsed")})("p-expanded",function(){return o.changeEvent("p-expanded")})("p-selected",function(){return o.changeEvent("p-selected")})("p-show-more",function(){return o.showMore()})("p-unselected",function(){return o.changeEvent("p-unselected")})("p-delete-items",function(d){return o.deleteItems(d)}),sg(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3),sg(),Gl(4,"po-divider"),Tl(5,"div",2)(6,"po-button",4),ht("p-click",function(){return o.addItem()}),sg()(),Gl(7,"po-divider"),Tl(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),Ew("ngModelChange",function(d){return Ky(m),rN(o.columnsName,d)||(o.columnsName=d),Xy(d)}),ht("p-change",function(){return o.updateColumns()}),sg(),t0(),sg(),Tl(12,"div",2)(13,"po-radio-group",6),Ew("ngModelChange",function(d){return Ky(m),rN(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),Xy(d)}),sg(),t0(),Tl(14,"po-switch",7),Ew("ngModelChange",function(d){return Ky(m),rN(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),Xy(d)}),sg(),t0(),sg(),Tl(15,"div",2)(16,"po-checkbox-group",8),Ew("ngModelChange",function(d){return Ky(m),rN(o.properties,d)||(o.properties=d),Xy(d)}),sg(),t0(),sg(),Tl(17,"div",2)(18,"po-checkbox-group",9),Ew("ngModelChange",function(d){return Ky(m),rN(o.actionsDefinition,d)||(o.actionsDefinition=d),Xy(d)}),ht("p-change",function(){return o.changeActionOptions()}),sg(),t0(),sg(),Tl(19,"div",2)(20,"po-radio-group",10),Ew("ngModelChange",function(d){return Ky(m),rN(o.spacing,d)||(o.spacing=d),Xy(d)}),sg(),t0(),sg(),Tl(21,"div",2)(22,"po-checkbox-group",11),Ew("ngModelChange",function(d){return Ky(m),rN(o.selection,d)||(o.selection=d),Xy(d)}),ht("p-change",function(){return o.changeSelectionOptions()}),sg(),t0(),Tl(23,"po-radio-group",12),Ew("ngModelChange",function(d){return Ky(m),rN(o.filterType,d)||(o.filterType=d),Xy(d)}),sg(),t0(),Tl(24,"po-radio-group",13),Ew("ngModelChange",function(d){return Ky(m),rN(o.componentsSize,d)||(o.componentsSize=d),Xy(d)}),sg(),t0(),sg(),Tl(25,"div",2)(26,"po-input",14),Ew("ngModelChange",function(d){return Ky(m),rN(o.literals,d)||(o.literals=d),Xy(d)}),ht("p-change",function(){return o.changeLiterals()}),sg(),t0(),Tl(27,"po-input",15),Ew("ngModelChange",function(d){return Ky(m),rN(o.filteredColumns,d)||(o.filteredColumns=d),Xy(d)}),ht("p-change",function(){return o.changeFilteredColumns()}),sg(),t0(),Tl(28,"po-number",16),Ew("ngModelChange",function(d){return Ky(m),rN(o.height,d)||(o.height=d),Xy(d)}),sg(),t0(),Tl(29,"po-number",17),Ew("ngModelChange",function(d){return Ky(m),rN(o.maxColumns,d)||(o.maxColumns=d),Xy(d)}),sg(),t0(),sg(),Tl(30,"div",2)(31,"po-button",18),ht("p-click",function(){return o.restore()}),sg()()(),Tl(32,"po-modal",19),Gl(33,"po-info",20),sg();}l&2&&(tw("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),Vp(3),tw("p-value",o.event),Vp(8),Dw("ngModel",o.columnsName),tw("p-options",o.columnsOptions),r0(),Vp(2),Dw("ngModel",o.columnsDefinition.detail.detail.typeHeader),tw("p-options",o.typeHeaderOptions),r0(),Vp(),Dw("ngModel",o.columnsDefinition.detail.detail.hideSelect),r0(),Vp(2),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),r0(),Vp(2),Dw("ngModel",o.actionsDefinition),tw("p-options",o.actionsDefinitionOptions),r0(),Vp(2),Dw("ngModel",o.spacing),tw("p-options",o.typeSpacing),r0(),Vp(2),Dw("ngModel",o.selection),tw("p-options",o.selectionOptions),r0(),Vp(),Dw("ngModel",o.filterType),tw("p-options",o.filterModeOptions),r0(),Vp(),Dw("ngModel",o.componentsSize),tw("p-options",o.componentsSizeOptions),r0(),Vp(2),Dw("ngModel",o.literals),r0(),Vp(),Dw("ngModel",o.filteredColumns),r0(),Vp(),Dw("ngModel",o.height),r0(),Vp(),Dw("ngModel",o.maxColumns),r0(),Vp(4),tw("p-value",o.currentItem));},dependencies:[nY,J9,eY,Ck,Dk,Qt$1,mv,C3,O3,Nhe,Sde,k3,$he,Yo,E3],encapsulation:2,changeDetection:1})}return r})();var vt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-labs/sample-po-table-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-table
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-labs"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,vt,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Xe],encapsulation:2})}return r})();var Ct=["table"],Ye=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=s(r$1({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(a){this.sampleService=a;}onChangeColumns(a){try{this.columns=JSON.parse(a);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&Yl(Ct,5),l&2){let m;uo(m=fo())&&(o.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=Cx();Tl(0,"div",1)(1,"po-input",2),Ew("ngModelChange",function(d){return Ky(m),rN(o.service,d)||(o.service=d),Xy(d)}),ht("p-change",function(){return o.changeService(o.service)}),sg(),t0(),sg(),Tl(2,"div",1),Gl(3,"po-divider",3),Tl(4,"po-textarea",4),Ew("ngModelChange",function(d){return Ky(m),rN(o.stringColumns,d)||(o.stringColumns=d),Xy(d)}),ht("p-change",function(d){return o.onChangeColumns(d)}),sg(),t0(),sg(),Tl(5,"div",1),Gl(6,"po-divider",5),Tl(7,"po-input",6),Ew("ngModelChange",function(d){return Ky(m),rN(o.key,d)||(o.key=d),Xy(d)}),sg(),t0(),Tl(8,"po-input",7),Ew("ngModelChange",function(d){return Ky(m),rN(o.value,d)||(o.value=d),Xy(d)}),sg(),t0(),sg(),Tl(9,"div",1)(10,"po-button",8),ht("p-click",function(){return o.addFilter(o.key,o.value)}),sg()(),Tl(11,"div",1)(12,"po-disclaimer-group",9),ht("p-remove",function(d){return o.removeItem(d)})("p-remove-all",function(){return o.removeAllItems()}),sg()(),Tl(13,"div",1),Gl(14,"po-table",10,0),sg();}l&2&&(Vp(),Dw("ngModel",o.service),r0(),Vp(3),Dw("ngModel",o.stringColumns),tw("p-rows",5),r0(),Vp(3),Dw("ngModel",o.key),r0(),Vp(),Dw("ngModel",o.value),r0(),Vp(2),tw("p-disabled",!o.key||!o.value),Vp(2),tw("p-disclaimers",o.filters),Vp(2),tw("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[J9,Ck,Qt$1,b3,mv,O3,qhe,E3],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table using API"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-table-with-api"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Tt,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ye],encapsulation:2})}return r})();var de=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function wt(r,J){if(r&1){let a=Cx();Tl(0,"po-widget",2)(1,"div",3)(2,"po-select",4),Ew("ngModelChange",function(o){let m=Ky(a).$implicit;return rN(m.status,o)||(m.status=o),Xy(o)}),sg(),t0(),sg(),Tl(3,"div",3),Gl(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),sg()();}if(r&2){let a=J.$implicit,l=Rx();tw("p-title",aN("Transport detail ",a.code)),Vp(2),Dw("ngModel",a.status),tw("p-options",l.statusOptions),r0(),Vp(2),tw("p-value",a.batch_product),Vp(),tw("p-value",a.driver),Vp(),tw("p-value",a.license_plate);}}var et=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([de])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(Tl(0,"po-table",0),QE(1,wt,7,7,"ng-template",1),sg()),l&2&&(tw("p-auto-collapse",true)("p-columns",o.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",o.items)("p-sort",true)("p-striped",true),Vp(),tw("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered));},dependencies:[J9,Ck,Uhe,$he,E3,$ue,gNe],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table - Transport"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-transport/sample-po-table-transport.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-table
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-transport"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,At,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,et],encapsulation:2})}return r})();var pe=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var nt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>s(r$1({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}});}confirmItems(a){a.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(a){a.value&&(this.total-=a.value);}deleteItems(a){this.items=a;}details(a){this.detail=a,this.poModal.open();}remove(a){this.poTable.removeItem(a);}discount(a){if(!a.disableDiscount){let l=s(r$1({},a),{value:a.value-a.value*.2,disableDiscount:true});this.poTable.updateItem(a,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(a){a.value&&(this.total+=a.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(a){localStorage.setItem("initial-columns",a);}getDescription(a){return `Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(pe),w(Yp),w(Ode))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&Yl(Yo,7)(E3,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first),uo(m=fo())&&(o.poTable=m.first);}},standalone:false,features:[we([pe,Ode])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(Tl(0,"div",0),tN(1,"Choose one or more promotional airfares"),sg(),Gl(2,"po-divider"),Tl(3,"po-table",1),ht("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),sg(),Gl(4,"po-divider")(5,"po-info",2),_N(6,"currency"),Gl(7,"po-info",3),Tl(8,"div",4)(9,"po-button",5),ht("p-click",function(){return o.addToCart()}),sg(),Tl(10,"po-button",6),ht("p-click",function(){return o.expandAll()}),sg(),Tl(11,"po-button",7),ht("p-click",function(){return o.collapseAll()}),sg()(),Tl(12,"po-modal",8),Gl(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),sg()),l&2&&(Vp(3),tw("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",false),Vp(2),tw("p-value",sN(wN(6,21,o.total,"USD"))),Vp(2),tw("p-value",o.totalExpanded),Vp(5),tw("p-title",cN("",o.detail?.destination," - ",o.detail?.country)),Vp(),tw("p-value",o.detail==null?null:o.detail.airline),Vp(),tw("p-value",o.detail==null?null:o.detail.initials),Vp(),tw("p-value",o.detail==null?null:o.detail.class));},dependencies:[Qt$1,mv,$he,Yo,E3,HO],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table - Airfare"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-airfare"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ft,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,nt],encapsulation:2})}return r})();var H=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(H||{});var ce=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=false){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],xe=m.split(".")[1];return a[d][xe]<l[d][xe]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}else return a[m]<l[m]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,J){if(r&1&&(Tl(0,"div"),tN(1),_N(2,"uppercase"),sg()),r&2){let a=J.$implicit;zx(aN("badge ",a)),Vp(),vw(EN(2,4,a));}}function Rt(r,J){if(r&1&&(Tl(0,"ul")(1,"li",4),tN(2),sg(),Gl(3,"po-divider"),sg()),r&2){let a=J.$implicit;Vp(2),vw(a);}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(a){return a?.component?.status===H.Experimental?"caption-tag-08":"caption-tag-13"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open();}goToDocumentation(a){this.router.navigate([a?.component?.link]);}showMore(a){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=false;},4e3);}sort(a){this.items=this.getItems(a);}showAlert(a){alert(a);}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite;}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(w(ce),w(wn))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&Yl(Yo,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first);}},standalone:false,features:[we([ce])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,o){l&1&&(Tl(0,"div",0),tN(1,"PO UI Library"),sg(),Gl(2,"po-divider"),Tl(3,"po-table",1),ht("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),QE(4,Bt,3,6,"ng-template",2),sg(),Tl(5,"po-modal",3),mx(6,Rt,4,1,"ul",null,gx),sg()),l&2&&(Vp(3),tw("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",true),Vp(),tw("p-property","component.type"),Vp(),tw("p-title",cN("",o.title," - ",o.extraInformation?.component)),Vp(),vx(o.extraInformation?.extras));},dependencies:[mv,Yo,E3,Gue,LO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var Nt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table - Po Field Components"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-components/sample-po-table-components.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-components/sample-po-table-components.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-table-components/sample-po-table-components.enum.ts"),sg(),Tl(23,"pre",9),tN(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),sg(),Tl(25,"label",6),tN(26,"sample-po-table-components/sample-po-table-components.service.ts"),sg(),Tl(27,"pre",9),tN(28,`import { Injectable } from '@angular/core';

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
`),sg()()(),Tl(29,"po-tab",10)(30,"div")(31,"label",6),tN(32,"sample-po-table-components/sample-po-table-components.component.css"),sg(),Tl(33,"pre",11),tN(34,`.badge {
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
`),sg()()()()(),Tl(35,"div",12),Gl(36,"sample-po-table-components"),sg(),Gl(37,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Nt,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ot],encapsulation:2})}return r})();var ue=(()=>{class r{http;constructor(a){this.http=a;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(bT("items"))}static \u0275fac=function(l){return new(l||r)(b(rb))};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=["POItemsOri"],Wt=["POItemsSelected"],lt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)});}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else {let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(a){this.items=a,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(w(ue))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&Yl(jt,7)(Wt,7),l&2){let m;uo(m=fo())&&(o.poItemsOri=m.first),uo(m=fo())&&(o.poItemsSelected=m.first);}},standalone:false,features:[we([ue])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){l&1&&(Tl(0,"div",2)(1,"div",3)(2,"div",4),tN(3,"Choose one or more heroes for your team"),sg(),Tl(4,"po-table",5,0),ht("p-selected",function(p){return o.changeOptions(p,"new")})("p-unselected",function(p){return o.changeOptions(p,"change")})("p-delete-items",function(p){return o.deleteItems(p)}),sg()(),Tl(6,"div",3)(7,"div",4),tN(8,"Here your chosen heroes"),sg(),Gl(9,"po-table",6,1),sg()()),l&2&&(Vp(4),tw("p-columns",o.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",o.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Vp(5),tw("p-columns",o.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[E3],encapsulation:2,changeDetection:1})}return r})();var Qt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table - Heroes"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row po-pb-2">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-heroes"),sg(),Gl(27,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Qt,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,lt],encapsulation:2})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),$t=r=>[r],mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(Tl(0,"div",0),tN(1,` Choose one column and drag to another horizontal position in the table and drop
`),sg(),Gl(2,"po-divider")(3,"po-table",1)),l&2&&(Vp(3),tw("p-items",hN(5,$t,fN(4,Jt)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[mv,E3],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Table Drag and Drop"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-table-draggable"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Kt,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,mt],encapsulation:2})}return r})();var dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4661,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-table"),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoTableComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),sg(),Tl(15,"p"),tN(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Tl(17,"strong"),tN(18,"Carregar mais resultados"),sg(),tN(19,"."),sg(),Tl(20,"blockquote")(21,"p"),tN(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),Tl(23,"a",6)(24,"code"),tN(25,"p-table-row-template"),sg()(),tN(26,"."),sg()(),Tl(27,"blockquote")(28,"p"),tN(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),Tl(30,"a",7)(31,"code"),tN(32,"p-table-column-template"),sg()(),tN(33,`
e `),Tl(34,"a",8)(35,"code"),tN(36,"p-table-cell-template"),sg()(),tN(37,"."),sg()(),Tl(38,"p"),tN(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),sg(),Tl(40,"p"),tN(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),Tl(42,"em"),tN(43,"scroll"),sg(),tN(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),sg(),Tl(45,"h4"),tN(46,"Tokens customiz\xE1veis"),sg(),Tl(47,"p"),tN(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(49,"blockquote")(50,"p"),tN(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(52,"a",9),tN(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(54,"."),sg()(),Tl(55,"table")(56,"thead")(57,"tr")(58,"th"),tN(59,"Propriedade"),sg(),Tl(60,"th"),tN(61,"Descri\xE7\xE3o"),sg(),Tl(62,"th"),tN(63,"Valor Padr\xE3o"),sg()()(),Tl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),tN(68,"Default Values"),sg()(),Gl(69,"td")(70,"td"),sg(),Tl(71,"tr")(72,"td")(73,"code"),tN(74,"--font-family"),sg()(),Tl(75,"td"),tN(76,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(77,"td")(78,"code"),tN(79,"var(--font-family-theme)"),sg()()(),Tl(80,"tr")(81,"td")(82,"code"),tN(83,"--background-color"),sg()(),Tl(84,"td"),tN(85,"Cor de background"),sg(),Tl(86,"td")(87,"code"),tN(88,"var(--color-neutral-light-00)"),sg()()(),Tl(89,"tr")(90,"td")(91,"code"),tN(92,"--color"),sg()(),Tl(93,"td"),tN(94,"Cor principal da table"),sg(),Tl(95,"td")(96,"code"),tN(97,"var(--color-neutral-dark-95)"),sg()()(),Tl(98,"tr")(99,"td")(100,"code"),tN(101,"--background-striped-color"),sg()(),Tl(102,"td"),tN(103,"Cor do background quando striped"),sg(),Tl(104,"td")(105,"code"),tN(106,"var(--color-neutral-light-05)"),sg()()(),Tl(107,"tr")(108,"td")(109,"code"),tN(110,"--color-line"),sg()(),Tl(111,"td"),tN(112,"Cor das linhas"),sg(),Tl(113,"td")(114,"code"),tN(115,"var(--color-neutral-mid-40)"),sg()()(),Tl(116,"tr")(117,"td")(118,"strong"),tN(119,"Hover"),sg()(),Gl(120,"td")(121,"td"),sg(),Tl(122,"tr")(123,"td")(124,"code"),tN(125,"--color-hover"),sg()(),Tl(126,"td"),tN(127,"Cor principal no estado hover"),sg(),Tl(128,"td")(129,"code"),tN(130,"var(--color-action-hover)"),sg()()(),Tl(131,"tr")(132,"td")(133,"code"),tN(134,"--background-color-hover"),sg()(),Tl(135,"td"),tN(136,"Cor de background no estado hover"),sg(),Tl(137,"td")(138,"code"),tN(139,"var(--color-brand-01-lighter)"),sg()()(),Tl(140,"tr")(141,"td")(142,"strong"),tN(143,"Focused"),sg()(),Gl(144,"td")(145,"td"),sg(),Tl(146,"tr")(147,"td")(148,"code"),tN(149,"--outline-color-focused"),sg()(),Tl(150,"td"),tN(151,"Cor do outline do estado de focus"),sg(),Tl(152,"td")(153,"code"),tN(154,"var(--color-action-focus)"),sg()()(),Tl(155,"tr")(156,"td")(157,"strong"),tN(158,"Disabled"),sg()(),Gl(159,"td")(160,"td"),sg(),Tl(161,"tr")(162,"td")(163,"code"),tN(164,"--color-disabled"),sg()(),Tl(165,"td"),tN(166,"Cor principal no estado disabled"),sg(),Tl(167,"td")(168,"code"),tN(169,"var(--color-neutral-mid-40)"),sg()()(),Tl(170,"tr")(171,"td")(172,"strong"),tN(173,"Headline"),sg()(),Gl(174,"td")(175,"td"),sg(),Tl(176,"tr")(177,"td")(178,"code"),tN(179,"--background-color-headline"),sg(),tN(180," \xA0"),sg(),Tl(181,"td"),tN(182,"Cor do cabe\xE7alho"),sg(),Tl(183,"td")(184,"code"),tN(185,"var(--color-neutral-light-10)"),sg()()(),Tl(186,"tr")(187,"td")(188,"code"),tN(189,"--font-weight-headline"),sg()(),Tl(190,"td"),tN(191,"Peso da fonte do cabe\xE7alho"),sg(),Tl(192,"td")(193,"code"),tN(194,"var(--font-weight-bold)"),sg()()(),Tl(195,"tr")(196,"td")(197,"strong"),tN(198,"Selected"),sg()(),Gl(199,"td")(200,"td"),sg(),Tl(201,"tr")(202,"td")(203,"code"),tN(204,"--background-color-selected"),sg(),tN(205,"\xA0"),sg(),Tl(206,"td"),tN(207,"Cor de background no estado de selecionado"),sg(),Tl(208,"td")(209,"code"),tN(210,"var(--color-brand-01-lightest)"),sg()()(),Tl(211,"tr")(212,"td")(213,"strong"),tN(214,"Actived"),sg()(),Gl(215,"td")(216,"td"),sg(),Tl(217,"tr")(218,"td")(219,"code"),tN(220,"--color-actived"),sg()(),Tl(221,"td"),tN(222,"Cor do texto no estado de selecionado"),sg(),Tl(223,"td")(224,"code"),tN(225,"var(--color-neutral-dark-90)"),sg()()(),Tl(226,"tr")(227,"td")(228,"code"),tN(229,"--background-color-actived"),sg()(),Tl(230,"td"),tN(231,"Cor de background no estado de selecionado"),sg(),Tl(232,"td")(233,"code"),tN(234,"var(--color-brand-01-light)"),sg()()()()()(),Tl(235,"div",10)(236,"h4",11),tN(237,"Seletor"),sg(),Tl(238,"pre",12),tN(239,`<po-table
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
`),sg()(),Tl(240,"h4",13),tN(241,"Propriedades"),sg(),Tl(242,"table",14)(243,"tr",15)(244,"th",16),tN(245,"Nome"),sg(),Tl(246,"th",16),tN(247,"Tipo"),sg(),Tl(248,"th",16),tN(249,"Padr\xE3o"),sg(),Tl(250,"th",16),tN(251,"Descri\xE7\xE3o"),sg()(),Tl(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),tN(256," p-actions-right"),Gl(257,"br"),sg()()(),Tl(258,"td",21)(259,"code",22),tN(260,"boolean"),sg()(),Tl(261,"td",23)(262,"p")(263,"code"),tN(264,"false"),sg()()(),Tl(265,"td",24)(266,"em")(267,"strong"),tN(268,"(opcional)"),sg()(),Tl(269,"p"),tN(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),sg()()(),Tl(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),tN(275," p-actions"),Gl(276,"br"),sg()()(),Tl(277,"td",21)(278,"code",25),tN(279,"PoTableAction[]"),sg()(),Tl(280,"td",23),tN(281,"-"),sg(),Tl(282,"td",24)(283,"em")(284,"strong"),tN(285,"(opcional)"),sg()(),Tl(286,"p"),tN(287,"Define uma lista de a\xE7\xF5es."),sg(),Tl(288,"p"),tN(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Tl(290,"a",26)(291,"strong"),tN(292,"an an-dots-three"),sg()(),tN(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),sg(),Tl(294,"p")(295,"strong"),tN(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),sg()(),Tl(297,"ul")(298,"li"),tN(299,"a lista conter valores inv\xE1lidos ou indefinidos."),sg(),Tl(300,"li"),tN(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),sg()()()(),Tl(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),tN(306," (p-all-selected)"),Gl(307,"br"),sg()()(),Tl(308,"td",21)(309,"code",29),tN(310,"EventEmitter"),sg()(),Tl(311,"td",23),tN(312,"-"),sg(),Tl(313,"td",24)(314,"em")(315,"strong"),tN(316,"(opcional)"),sg()(),Tl(317,"p"),tN(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),Tl(319,"em"),tN(320,"checkbox"),sg(),tN(321," que seleciona todas as linhas."),sg()()(),Tl(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),tN(326," (p-all-unselected)"),Gl(327,"br"),sg()()(),Tl(328,"td",21)(329,"code",29),tN(330,"EventEmitter"),sg()(),Tl(331,"td",23),tN(332,"-"),sg(),Tl(333,"td",24)(334,"em")(335,"strong"),tN(336,"(opcional)"),sg()(),Tl(337,"p"),tN(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),Tl(339,"em"),tN(340,"checkbox"),sg(),tN(341," que seleciona todas as linhas."),sg()()(),Tl(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),tN(346," p-auto-collapse"),Gl(347,"br"),sg()()(),Tl(348,"td",21)(349,"code",22),tN(350,"boolean"),sg()(),Tl(351,"td",23)(352,"p")(353,"code"),tN(354,"false"),sg()()(),Tl(355,"td",24)(356,"em")(357,"strong"),tN(358,"(opcional)"),sg()(),Tl(359,"p"),tN(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),sg()()(),Tl(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),tN(365," (p-change-fixed-columns)"),Gl(366,"br"),sg()()(),Tl(367,"td",21)(368,"code",29),tN(369,"EventEmitter"),sg()(),Tl(370,"td",23),tN(371,"-"),sg(),Tl(372,"td",24)(373,"em")(374,"strong"),tN(375,"(opcional)"),sg()(),Tl(376,"p"),tN(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),sg(),Tl(378,"p"),tN(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),sg(),Tl(380,"blockquote")(381,"p"),tN(382,"Incompat\xEDvel com "),Tl(383,"code"),tN(384,"p-hide-action-fixed-columns"),sg(),tN(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),sg()()()(),Tl(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),tN(390," (p-change-visible-columns)"),Gl(391,"br"),sg()()(),Tl(392,"td",21)(393,"code",29),tN(394,"EventEmitter"),sg()(),Tl(395,"td",23),tN(396,"-"),sg(),Tl(397,"td",24)(398,"em")(399,"strong"),tN(400,"(opcional)"),sg()(),Tl(401,"p"),tN(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(403,"p"),tN(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),tN(409," (p-collapsed)"),Gl(410,"br"),sg()()(),Tl(411,"td",21)(412,"code",29),tN(413,"EventEmitter"),sg()(),Tl(414,"td",23),tN(415,"-"),sg(),Tl(416,"td",24)(417,"em")(418,"strong"),tN(419,"(opcional)"),sg()(),Tl(420,"p"),tN(421,"Evento executado ao colapsar uma linha do "),Tl(422,"code"),tN(423,"po-table"),sg(),tN(424,"."),sg(),Tl(425,"blockquote")(426,"p"),tN(427,"Como par\xE2metro o componente envia o item colapsado."),sg()()()(),Tl(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),tN(432," (p-restore-column-manager)"),Gl(433,"br"),sg()()(),Tl(434,"td",21)(435,"code",29),tN(436,"EventEmitter"),sg()(),Tl(437,"td",23),tN(438,"-"),sg(),Tl(439,"td",24)(440,"em")(441,"strong"),tN(442,"(opcional)"),sg()(),Tl(443,"p"),tN(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(445,"p"),tN(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),tN(451," p-columns"),Gl(452,"br"),sg()()(),Tl(453,"td",21)(454,"code",30),tN(455,"PoTableColumn[]"),sg()(),Tl(456,"td",23),tN(457,"-"),sg(),Tl(458,"td",24)(459,"em")(460,"strong"),tN(461,"(opcional)"),sg()(),Tl(462,"p"),tN(463,"Lista das colunas da tabela, deve receber um "),Tl(464,"em"),tN(465,"array"),sg(),tN(466," de objetos que implementam a interface "),Tl(467,"code"),tN(468,"PoTableColumn"),sg(),tN(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),sg(),Tl(470,"blockquote")(471,"p"),tN(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),sg()()()(),Tl(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),tN(477," p-components-size"),Gl(478,"br"),sg()()(),Tl(479,"td",21)(480,"code",31),tN(481,"string"),sg()(),Tl(482,"td",23)(483,"p")(484,"code"),tN(485,"medium"),sg()()(),Tl(486,"td",24)(487,"em")(488,"strong"),tN(489,"(opcional)"),sg()(),Tl(490,"p"),tN(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),sg(),Tl(492,"ul")(493,"li")(494,"code"),tN(495,"small"),sg(),tN(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(497,"li")(498,"code"),tN(499,"medium"),sg(),tN(500,": aplica a medida medium de cada componente."),sg()(),Tl(501,"blockquote")(502,"p"),tN(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(504,"code"),tN(505,"medium"),sg(),tN(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(507,"a",32),tN(508,"po-theme"),sg(),tN(509,"."),sg()()()(),Tl(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),tN(514," p-container"),Gl(515,"br"),sg()()(),Tl(516,"td",21)(517,"code",31),tN(518,"string"),sg()(),Tl(519,"td",23)(520,"p")(521,"code"),tN(522,"border"),sg()()(),Tl(523,"td",24)(524,"em")(525,"strong"),tN(526,"(opcional)"),sg()(),Tl(527,"p"),tN(528,"Adiciona um contorno arredondado ao "),Tl(529,"code"),tN(530,"po-table"),sg(),tN(531,", as op\xE7\xF5es s\xE3o:"),sg(),Tl(532,"ul")(533,"li")(534,"code"),tN(535,"border"),sg(),tN(536,": com bordas/linhas."),sg(),Tl(537,"li")(538,"code"),tN(539,"shadow"),sg(),tN(540,": com sombras."),sg()()()(),Tl(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),tN(545," p-draggable"),Gl(546,"br"),sg()()(),Tl(547,"td",21)(548,"code",22),tN(549,"boolean"),sg()(),Tl(550,"td",23)(551,"p")(552,"code"),tN(553,"false"),sg()()(),Tl(554,"td",24)(555,"em")(556,"strong"),tN(557,"(opcional)"),sg()(),Tl(558,"p"),tN(559,"Habilita o modo drag and drop para as colunas da tabela."),sg()()(),Tl(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),tN(564," (p-delete-items)"),Gl(565,"br"),sg()()(),Tl(566,"td",21)(567,"code",29),tN(568,"EventEmitter"),sg()(),Tl(569,"td",23),tN(570,"-"),sg(),Tl(571,"td",24)(572,"em")(573,"strong"),tN(574,"(opcional)"),sg()(),Tl(575,"p"),tN(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),sg(),Tl(577,"pre")(578,"code"),tN(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),sg()(),Tl(580,"blockquote")(581,"p"),tN(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),sg()()()(),Tl(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),tN(587," (p-expanded)"),Gl(588,"br"),sg()()(),Tl(589,"td",21)(590,"code",29),tN(591,"EventEmitter"),sg()(),Tl(592,"td",23),tN(593,"-"),sg(),Tl(594,"td",24)(595,"em")(596,"strong"),tN(597,"(opcional)"),sg()(),Tl(598,"p"),tN(599,"Evento executado ao expandir uma linha do "),Tl(600,"code"),tN(601,"po-table"),sg(),tN(602,"."),sg(),Tl(603,"blockquote")(604,"p"),tN(605,"Como par\xE2metro o componente envia o item expandido."),sg()()()(),Tl(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),tN(610," p-filter-type"),Gl(611,"br"),sg()()(),Tl(612,"td",21)(613,"code",33),tN(614,"PoSearchFilterMode"),sg()(),Tl(615,"td",23)(616,"p")(617,"code"),tN(618,"startsWith"),sg()()(),Tl(619,"td",24)(620,"em")(621,"strong"),tN(622,"(opcional)"),sg()(),Tl(623,"p"),tN(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),sg(),Tl(625,"blockquote")(626,"p"),tN(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),sg()()()(),Tl(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),tN(632," p-filtered-columns"),Gl(633,"br"),sg()()(),Tl(634,"td",21)(635,"code",34),tN(636,"Array<string>"),sg()(),Tl(637,"td",23),tN(638,"-"),sg(),Tl(639,"td",24)(640,"em")(641,"strong"),tN(642,"(opcional)"),sg()(),Tl(643,"p"),tN(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),sg()()(),Tl(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),tN(649," p-height"),Gl(650,"br"),sg()()(),Tl(651,"td",21)(652,"code",35),tN(653,"number"),sg()(),Tl(654,"td",23),tN(655,"-"),sg(),Tl(656,"td",24)(657,"em")(658,"strong"),tN(659,"(opcional)"),sg()(),Tl(660,"p"),tN(661,"Define a altura da tabela em "),Tl(662,"em"),tN(663,"pixels"),sg(),tN(664," e fixa o cabe\xE7alho."),sg(),Tl(665,"p"),tN(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),Tl(667,"code"),tN(668,"virtual-scroll"),sg(),tN(669," na tabela melhorando a performance."),sg()()(),Tl(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),tN(674," p-hide-action-fixed-columns"),Gl(675,"br"),sg()()(),Tl(676,"td",21)(677,"code",22),tN(678,"boolean"),sg()(),Tl(679,"td",23)(680,"p")(681,"code"),tN(682,"false"),sg()()(),Tl(683,"td",24)(684,"em")(685,"strong"),tN(686,"(opcional)"),sg()(),Tl(687,"p"),tN(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),sg()()(),Tl(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),tN(693," p-hide-batch-actions"),Gl(694,"br"),sg()()(),Tl(695,"td",21)(696,"code",22),tN(697,"boolean"),sg()(),Tl(698,"td",23)(699,"p")(700,"code"),tN(701,"true"),sg()()(),Tl(702,"td",24)(703,"em")(704,"strong"),tN(705,"(opcional)"),sg()(),Tl(706,"p"),tN(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),sg()()(),Tl(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),tN(712," p-hide-columns-manager"),Gl(713,"br"),sg()()(),Tl(714,"td",21)(715,"code",22),tN(716,"boolean"),sg()(),Tl(717,"td",23)(718,"p")(719,"code"),tN(720,"false"),sg()()(),Tl(721,"td",24)(722,"em")(723,"strong"),tN(724,"(opcional)"),sg()(),Tl(725,"p"),tN(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),sg()()(),Tl(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),tN(731," p-hide-detail"),Gl(732,"br"),sg()()(),Tl(733,"td",21)(734,"code",22),tN(735,"boolean"),sg()(),Tl(736,"td",23)(737,"p")(738,"code"),tN(739,"false"),sg()()(),Tl(740,"td",24)(741,"em")(742,"strong"),tN(743,"(opcional)"),sg()(),Tl(744,"p"),tN(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),sg()()(),Tl(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),tN(750," p-hide-select-all"),Gl(751,"br"),sg()()(),Tl(752,"td",21)(753,"code",22),tN(754,"boolean"),sg()(),Tl(755,"td",23)(756,"p")(757,"code"),tN(758,"false"),sg()()(),Tl(759,"td",24)(760,"p"),tN(761,"Esconde o "),Tl(762,"em"),tN(763,"checkbox"),sg(),tN(764," para sele\xE7\xE3o de todas as linhas."),sg(),Tl(765,"blockquote")(766,"p"),tN(767,"Sempre receber\xE1 "),Tl(768,"em"),tN(769,"true"),sg(),tN(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),sg()()()(),Tl(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),tN(775," p-hide-table-search"),Gl(776,"br"),sg()()(),Tl(777,"td",21)(778,"code",22),tN(779,"boolean"),sg()(),Tl(780,"td",23)(781,"p")(782,"code"),tN(783,"true"),sg()()(),Tl(784,"td",24)(785,"em")(786,"strong"),tN(787,"(opcional)"),sg()(),Tl(788,"p"),tN(789,"Permite que o campo de pesquisa seja escondido."),sg()()(),Tl(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),tN(794," p-infinite-scroll"),Gl(795,"br"),sg()()(),Tl(796,"td",21)(797,"code",22),tN(798,"boolean"),sg()(),Tl(799,"td",23)(800,"p")(801,"code"),tN(802,"false"),sg()()(),Tl(803,"td",24)(804,"em")(805,"strong"),tN(806,"(opcional)"),sg()(),Tl(807,"p"),tN(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Tl(809,"code"),tN(810,"p-show-more"),sg(),tN(811,"."),sg(),Tl(812,"p")(813,"strong"),tN(814,"Regras de utiliza\xE7\xE3o:"),sg()(),Tl(815,"ul")(816,"li"),tN(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),Tl(818,"code"),tN(819,"p-height"),sg(),tN(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),sg()()()(),Tl(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),tN(825," p-infinite-scroll-distance"),Gl(826,"br"),sg()()(),Tl(827,"td",21)(828,"code",35),tN(829,"number"),sg()(),Tl(830,"td",23),tN(831,"-"),sg(),Tl(832,"td",24)(833,"em")(834,"strong"),tN(835,"(opcional)"),sg()(),Tl(836,"p"),tN(837,"Define o percentual necess\xE1rio para disparar o evento "),Tl(838,"code"),tN(839,"p-show-more"),sg(),tN(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),sg(),Tl(841,"p")(842,"strong"),tN(843,"Exemplos:"),sg()(),Tl(844,"ul")(845,"li"),tN(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),Tl(847,"code"),tN(848,"p-show-more"),sg(),tN(849," ser\xE1 disparado."),sg()()()(),Tl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),tN(854," p-items"),Gl(855,"br"),sg()()(),Tl(856,"td",21)(857,"code",36),tN(858,"any[]"),sg()(),Tl(859,"td",23),tN(860,"-"),sg(),Tl(861,"td",24)(862,"p"),tN(863,"Lista de itens da tabela."),sg(),Tl(864,"blockquote")(865,"p"),tN(866,"Se falso, ser\xE1 inicializado como um "),Tl(867,"em"),tN(868,"array"),sg(),tN(869," vazio."),sg()()()(),Tl(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),tN(874," p-literals"),Gl(875,"br"),sg()()(),Tl(876,"td",21)(877,"code",37),tN(878,"PoTableLiterals"),sg()(),Tl(879,"td",23),tN(880,"-"),sg(),Tl(881,"td",24)(882,"em")(883,"strong"),tN(884,"(opcional)"),sg()(),Tl(885,"p"),tN(886,"Objeto com as literais usadas no "),Tl(887,"code"),tN(888,"po-table"),sg(),tN(889,"."),sg(),Tl(890,"p"),tN(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(892,"pre")(893,"code"),tN(894,`const customLiterals: PoTableLiterals = {
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
`),sg()(),Tl(895,"p"),tN(896,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(897,"pre")(898,"code"),tN(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),sg()(),Tl(900,"p"),tN(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(902,"pre")(903,"code"),tN(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),sg()(),Tl(905,"blockquote")(906,"p"),tN(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(908,"a",38)(909,"code"),tN(910,"PoI18nService"),sg()(),tN(911," ou do browser."),sg()()()(),Tl(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),tN(916," p-loading"),Gl(917,"br"),sg()()(),Tl(918,"td",21)(919,"code",22),tN(920,"boolean"),sg()(),Tl(921,"td",23)(922,"p")(923,"code"),tN(924,"false"),sg()()(),Tl(925,"td",24)(926,"em")(927,"strong"),tN(928,"(opcional)"),sg()(),Tl(929,"p"),tN(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),Tl(931,"em"),tN(932,"table"),sg(),tN(933,"."),sg()()(),Tl(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),tN(938," p-loading-show-more"),Gl(939,"br"),sg()()(),Tl(940,"td",21)(941,"code",22),tN(942,"boolean"),sg()(),Tl(943,"td",23)(944,"p")(945,"code"),tN(946,"false"),sg()()(),Tl(947,"td",24)(948,"em")(949,"strong"),tN(950,"(opcional)"),sg()(),Tl(951,"p"),tN(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),sg()()(),Tl(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),tN(957," p-max-columns"),Gl(958,"br"),sg()()(),Tl(959,"td",21)(960,"code",35),tN(961,"number"),sg()(),Tl(962,"td",23),tN(963,"-"),sg(),Tl(964,"td",24)(965,"em")(966,"strong"),tN(967,"(opcional)"),sg()(),Tl(968,"p"),tN(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),sg(),Tl(970,"p"),tN(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),sg()()(),Tl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),tN(976," p-param-delete-api"),Gl(977,"br"),sg()()(),Tl(978,"td",21)(979,"code",31),tN(980,"string"),sg()(),Tl(981,"td",23)(982,"p")(983,"code"),tN(984,"id"),sg()()(),Tl(985,"td",24)(986,"em")(987,"strong"),tN(988,"(opcional)"),sg()(),Tl(989,"p"),tN(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),sg(),Tl(991,"p"),tN(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),Tl(993,"code"),tN(994,"p-service-delete"),sg(),tN(995," em conjunto."),sg()()(),Tl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),tN(1e3," p-selectable"),Gl(1001,"br"),sg()()(),Tl(1002,"td",21)(1003,"code",22),tN(1004,"boolean"),sg()(),Tl(1005,"td",23)(1006,"p")(1007,"code"),tN(1008,"false"),sg()()(),Tl(1009,"td",24)(1010,"em")(1011,"strong"),tN(1012,"(opcional)"),sg()(),Tl(1013,"p"),tN(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),Tl(1015,"code"),tN(1016,"p-single-select"),sg(),tN(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),sg(),Tl(1018,"p")(1019,"strong"),tN(1020,"Importante:"),sg()(),Tl(1021,"ul")(1022,"li"),tN(1023,"As linhas de detalhe definidas em "),Tl(1024,"code"),tN(1025,"PoTableDetail"),sg(),tN(1026," possuem comportamento independente da linha mestre;"),sg(),Tl(1027,"li"),tN(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),Tl(1029,"code"),tN(1030,"$selected"),sg(),tN(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Tl(1032,"code"),tN(1033,"item.$selected"),sg(),tN(1034," ou "),Tl(1035,"code"),tN(1036,"item['$selected']"),sg(),tN(1037,"."),sg()()()(),Tl(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),tN(1042," p-selectable-entire-line"),Gl(1043,"br"),sg()()(),Tl(1044,"td",21)(1045,"code",22),tN(1046,"boolean"),sg()(),Tl(1047,"td",23)(1048,"p")(1049,"code"),tN(1050,"true"),sg()()(),Tl(1051,"td",24)(1052,"p"),tN(1053,"Permite selecionar um item da tabela clicando na linha."),sg(),Tl(1054,"blockquote")(1055,"p"),tN(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),Tl(1057,"code"),tN(1058,"false"),sg(),tN(1059,"."),sg()()()(),Tl(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),tN(1064," (p-selected)"),Gl(1065,"br"),sg()()(),Tl(1066,"td",21)(1067,"code",29),tN(1068,"EventEmitter"),sg()(),Tl(1069,"td",23),tN(1070,"-"),sg(),Tl(1071,"td",24)(1072,"em")(1073,"strong"),tN(1074,"(opcional)"),sg()(),Tl(1075,"p"),tN(1076,"Evento executado ao selecionar uma linha do "),Tl(1077,"code"),tN(1078,"po-table"),sg(),tN(1079,"."),sg()()(),Tl(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),tN(1084," p-service-api"),Gl(1085,"br"),sg()()(),Tl(1086,"td",21)(1087,"code",31),tN(1088,"string"),sg()(),Tl(1089,"td",23),tN(1090,"-"),sg(),Tl(1091,"td",24)(1092,"em")(1093,"strong"),tN(1094,"(opcional)"),sg()(),Tl(1095,"p"),tN(1096,"URL da API respons\xE1vel por retornar os registros."),sg(),Tl(1097,"p"),tN(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),Tl(1099,"code"),tN(1100,"page"),sg(),tN(1101," e "),Tl(1102,"code"),tN(1103,"pageSize"),sg(),tN(1104,", conforme abaixo:"),sg(),Tl(1105,"pre")(1106,"code"),tN(1107,`url + ?page=1&pageSize=10
`),sg()(),Tl(1108,"p"),tN(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Tl(1110,"code"),tN(1111,"order"),sg(),tN(1112,", por exemplo:"),sg(),Tl(1113,"ul")(1114,"li")(1115,"p"),tN(1116,"Coluna decrescente:"),sg(),Tl(1117,"pre")(1118,"code"),tN(1119,`url + ?page=1&pageSize=10&order=-name
`),sg()()(),Tl(1120,"li")(1121,"p"),tN(1122,"Coluna ascendente:"),sg(),Tl(1123,"pre")(1124,"code"),tN(1125,`url + ?page=1&pageSize=10&order=name
`),sg()()()(),Tl(1126,"blockquote")(1127,"p"),tN(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Tl(1129,"a",39),tN(1130,"API do PO UI"),sg(),tN(1131,"."),sg()()()(),Tl(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),tN(1136," p-service-delete"),Gl(1137,"br"),sg()()(),Tl(1138,"td",21)(1139,"code",31),tN(1140,"string"),sg()(),Tl(1141,"td",23),tN(1142,"-"),sg(),Tl(1143,"td",24)(1144,"em")(1145,"strong"),tN(1146,"(opcional)"),sg()(),Tl(1147,"p"),tN(1148,"URL da API respons\xE1vel por excluir os registros."),sg(),Tl(1149,"p"),tN(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),Tl(1151,"code"),tN(1152,"p-param-delete-api"),sg(),tN(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Tl(1154,"code"),tN(1155,"id"),sg(),tN(1156,"."),sg(),Tl(1157,"blockquote")(1158,"p"),tN(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Tl(1160,"a",39),tN(1161,"API do PO UI"),sg(),tN(1162,"."),sg()()()(),Tl(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),tN(1167," (p-show-more)"),Gl(1168,"br"),sg()()(),Tl(1169,"td",21)(1170,"code",29),tN(1171,"EventEmitter"),sg()(),Tl(1172,"td",23),tN(1173,"-"),sg(),Tl(1174,"td",24)(1175,"em")(1176,"strong"),tN(1177,"(opcional)"),sg()(),Tl(1178,"p"),tN(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),sg(),Tl(1180,"p"),tN(1181,"Recebe um objeto "),Tl(1182,"code"),tN(1183,"{ column, type }"),sg(),tN(1184," onde:"),sg(),Tl(1185,"ul")(1186,"li"),tN(1187,"column ("),Tl(1188,"code"),tN(1189,"PoTableColumn"),sg(),tN(1190,"): objeto da coluna que est\xE1 ordenada."),sg(),Tl(1191,"li"),tN(1192,"type ("),Tl(1193,"code"),tN(1194,"PoTableColumnSortType"),sg(),tN(1195,"): tipo da ordena\xE7\xE3o."),sg()()()(),Tl(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),tN(1200," p-show-more-disabled"),Gl(1201,"br"),sg()()(),Tl(1202,"td",21)(1203,"code",22),tN(1204,"boolean"),sg()(),Tl(1205,"td",23)(1206,"p")(1207,"code"),tN(1208,"false"),sg()()(),Tl(1209,"td",24)(1210,"p"),tN(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),sg()()(),Tl(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),tN(1216," p-single-select"),Gl(1217,"br"),sg()()(),Tl(1218,"td",21)(1219,"code",22),tN(1220,"boolean"),sg()(),Tl(1221,"td",23),tN(1222,"-"),sg(),Tl(1223,"td",24)(1224,"p"),tN(1225,"Define que somente uma linha da tabela pode ser selecionada."),sg(),Tl(1226,"blockquote")(1227,"p"),tN(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),sg()()()(),Tl(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),tN(1233," p-sort"),Gl(1234,"br"),sg()()(),Tl(1235,"td",21)(1236,"code",22),tN(1237,"boolean"),sg()(),Tl(1238,"td",23)(1239,"p")(1240,"code"),tN(1241,"false"),sg()()(),Tl(1242,"td",24)(1243,"em")(1244,"strong"),tN(1245,"(opcional)"),sg()(),Tl(1246,"p"),tN(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),sg()()(),Tl(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),tN(1252," (p-sort-by)"),Gl(1253,"br"),sg()()(),Tl(1254,"td",21)(1255,"code",29),tN(1256,"EventEmitter"),sg()(),Tl(1257,"td",23),tN(1258,"-"),sg(),Tl(1259,"td",24)(1260,"em")(1261,"strong"),tN(1262,"(opcional)"),sg()(),Tl(1263,"p"),tN(1264,"Evento executado ao ordenar colunas da tabela."),sg(),Tl(1265,"p"),tN(1266,"Recebe um objeto "),Tl(1267,"code"),tN(1268,"{ column, type }"),sg(),tN(1269," onde:"),sg(),Tl(1270,"ul")(1271,"li"),tN(1272,"column ("),Tl(1273,"code"),tN(1274,"PoTableColumn"),sg(),tN(1275,"): objeto da coluna que foi clicada/ordenada."),sg(),Tl(1276,"li"),tN(1277,"type ("),Tl(1278,"code"),tN(1279,"PoTableColumnSortType"),sg(),tN(1280,"): tipo da ordena\xE7\xE3o."),sg()()()(),Tl(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),tN(1285," p-spacing"),Gl(1286,"br"),sg()()(),Tl(1287,"td",21)(1288,"code",31),tN(1289,"string"),sg()(),Tl(1290,"td",23)(1291,"p")(1292,"code"),tN(1293,"medium"),sg()()(),Tl(1294,"td",24)(1295,"em")(1296,"strong"),tN(1297,"(opcional)"),sg()(),Tl(1298,"p"),tN(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Tl(1300,"strong"),tN(1301,"PoTableColumnSpacing"),sg(),tN(1302,"."),sg(),Tl(1303,"blockquote")(1304,"p"),tN(1305,"Em n\xEDvel de acessibilidade "),Tl(1306,"strong"),tN(1307,"AA"),sg(),tN(1308,", caso o valor de "),Tl(1309,"code"),tN(1310,"p-spacing"),sg(),tN(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Tl(1312,"code"),tN(1313,"extraSmall"),sg(),tN(1314,`
nos seguintes cen\xE1rios:`),sg(),Tl(1315,"ul")(1316,"li"),tN(1317,"Quando o valor de "),Tl(1318,"code"),tN(1319,"p-components-size"),sg(),tN(1320," for "),Tl(1321,"code"),tN(1322,"small"),sg(),tN(1323,";"),sg(),Tl(1324,"li"),tN(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),Tl(1326,"code"),tN(1327,"small"),sg(),tN(1328,` no
`),Tl(1329,"a",32),tN(1330,"servi\xE7o de tema"),sg(),tN(1331,"."),sg()()()()(),Tl(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),tN(1336," p-striped"),Gl(1337,"br"),sg()()(),Tl(1338,"td",21)(1339,"code",22),tN(1340,"boolean"),sg()(),Tl(1341,"td",23)(1342,"p")(1343,"code"),tN(1344,"false"),sg()()(),Tl(1345,"td",24)(1346,"p"),tN(1347,"Habilita ou desabilita o estilo listrado da tabela ("),Tl(1348,"code"),tN(1349,"striped"),sg(),tN(1350,")."),sg(),Tl(1351,"blockquote")(1352,"p"),tN(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),sg()()()(),Tl(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),tN(1358," p-text-wrap"),Gl(1359,"br"),sg()()(),Tl(1360,"td",21)(1361,"code",22),tN(1362,"boolean"),sg()(),Tl(1363,"td",23)(1364,"p")(1365,"code"),tN(1366,"false"),sg()()(),Tl(1367,"td",24)(1368,"em")(1369,"strong"),tN(1370,"(opcional)"),sg()(),Tl(1371,"p"),tN(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg(),Tl(1373,"blockquote")(1374,"p"),tN(1375,"Incompat\xEDvel com "),Tl(1376,"code"),tN(1377,"virtual-scroll"),sg(),tN(1378,", que requer altura fixa nas linhas."),sg()()()(),Tl(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),tN(1383," (p-unselected)"),Gl(1384,"br"),sg()()(),Tl(1385,"td",21)(1386,"code",29),tN(1387,"EventEmitter"),sg()(),Tl(1388,"td",23),tN(1389,"-"),sg(),Tl(1390,"td",24)(1391,"em")(1392,"strong"),tN(1393,"(opcional)"),sg()(),Tl(1394,"p"),tN(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),Tl(1396,"code"),tN(1397,"po-table"),sg(),tN(1398,"."),sg()()(),Tl(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),tN(1403," p-virtual-scroll"),Gl(1404,"br"),sg()()(),Tl(1405,"td",21)(1406,"code",22),tN(1407,"boolean"),sg()(),Tl(1408,"td",23)(1409,"p")(1410,"code"),tN(1411,"true"),sg()()(),Tl(1412,"td",24)(1413,"em")(1414,"strong"),tN(1415,"(opcional)"),sg()(),Tl(1416,"p"),tN(1417,"Habilita o "),Tl(1418,"code"),tN(1419,"virtual-scroll"),sg(),tN(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Tl(1421,"code"),tN(1422,"p-height"),sg(),tN(1423,") para funcionar corretamente."),sg(),Tl(1424,"blockquote")(1425,"p"),tN(1426,"Incompat\xEDvel com "),Tl(1427,"code"),tN(1428,"p-text-wrap"),sg(),tN(1429," e "),Tl(1430,"code"),tN(1431,"master-detail"),sg(),tN(1432,", pois o "),Tl(1433,"code"),tN(1434,"virtual-scroll"),sg(),tN(1435," exige altura fixa nas linhas."),sg()()()()(),Tl(1436,"h3",13),tN(1437,"M\xE9todos"),sg(),Tl(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),tN(1444," applyFilters "),sg()()()()(),Tl(1445,"tr",24)(1446,"td",24)(1447,"p"),tN(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),sg(),Tl(1449,"p"),tN(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),sg(),Tl(1451,"pre")(1452,"code"),tN(1453,`url + ?page=1&pageSize=10
`),sg()(),Tl(1454,"blockquote")(1455,"p"),tN(1456,"Obs: os par\xE2metros "),Tl(1457,"code"),tN(1458,"page"),sg(),tN(1459," e "),Tl(1460,"code"),tN(1461,"pageSize"),sg(),tN(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),sg()(),Tl(1463,"p"),tN(1464,"Caso sejam informados os par\xE2metros "),Tl(1465,"code"),tN(1466,"{ name: 'JOHN', age: '23' }"),sg(),tN(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),sg(),Tl(1468,"pre")(1469,"code"),tN(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),sg()()()()(),Tl(1471,"h5")(1472,"b"),tN(1473,"Par\xE2metros"),sg()(),Tl(1474,"table",14)(1475,"tr",15)(1476,"th",16),tN(1477,"Nome"),sg(),Tl(1478,"th",16),tN(1479,"Tipo"),sg(),Tl(1480,"th",16),tN(1481,"Descri\xE7\xE3o"),sg()(),Tl(1482,"tr",17)(1483,"td",18),tN(1484," queryParams"),sg(),Tl(1485,"td",21)(1486,"code",42),tN(1487," { key: value } "),sg()(),Tl(1488,"td",24)(1489,"p"),tN(1490,"Formato do objeto a ser enviado."),sg(),Tl(1491,"blockquote")(1492,"p"),tN(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),sg()()()()(),Gl(1494,"br"),Tl(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),tN(1501," applyFixedColumns "),sg()()()()(),Tl(1502,"tr",24)(1503,"td",24)(1504,"p"),tN(1505,"Verifica se columns possuem a propriedade width."),sg()()()(),Gl(1506,"br"),Tl(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),tN(1513," collapse "),sg()()()()(),Tl(1514,"tr",24)(1515,"td",24)(1516,"p"),tN(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),sg()()()(),Tl(1518,"h5")(1519,"b"),tN(1520,"Par\xE2metros"),sg()(),Tl(1521,"table",14)(1522,"tr",15)(1523,"th",16),tN(1524,"Nome"),sg(),Tl(1525,"th",16),tN(1526,"Tipo"),sg(),Tl(1527,"th",16),tN(1528,"Descri\xE7\xE3o"),sg()(),Tl(1529,"tr",17)(1530,"td",18),tN(1531," rowIndex"),sg(),Tl(1532,"td",21)(1533,"code",43),tN(1534," number "),sg()(),Tl(1535,"td",24)(1536,"p"),tN(1537,"\xCDndice da linha que ser\xE1 colapsada."),sg(),Tl(1538,"blockquote")(1539,"p"),tN(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),sg()()()()(),Gl(1541,"br"),Tl(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),tN(1548," expand "),sg()()()()(),Tl(1549,"tr",24)(1550,"td",24)(1551,"p"),tN(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),sg()()()(),Tl(1553,"h5")(1554,"b"),tN(1555,"Par\xE2metros"),sg()(),Tl(1556,"table",14)(1557,"tr",15)(1558,"th",16),tN(1559,"Nome"),sg(),Tl(1560,"th",16),tN(1561,"Tipo"),sg(),Tl(1562,"th",16),tN(1563,"Descri\xE7\xE3o"),sg()(),Tl(1564,"tr",17)(1565,"td",18),tN(1566," rowIndex"),sg(),Tl(1567,"td",21)(1568,"code",43),tN(1569," number "),sg()(),Tl(1570,"td",24)(1571,"p"),tN(1572,"\xCDndice da linha que ser\xE1 expandida."),sg(),Tl(1573,"blockquote")(1574,"p"),tN(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),sg()()()()(),Gl(1576,"br"),Tl(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),tN(1583," getSelectedRows "),sg()()()()(),Tl(1584,"tr",24)(1585,"td",24)(1586,"p"),tN(1587,"Retorna as linhas do "),Tl(1588,"code"),tN(1589,"po-table"),sg(),tN(1590," que est\xE3o selecionadas."),sg()()()(),Gl(1591,"br"),Tl(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),tN(1598," getUnselectedRows "),sg()()()()(),Tl(1599,"tr",24)(1600,"td",24)(1601,"p"),tN(1602,"Retorna as linhas do "),Tl(1603,"code"),tN(1604,"po-table"),sg(),tN(1605," que n\xE3o est\xE3o selecionadas."),sg()()()(),Gl(1606,"br"),Tl(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),tN(1613," unselectRows "),sg()()()()(),Tl(1614,"tr",24)(1615,"td",24)(1616,"p"),tN(1617,"Desmarca as linhas que est\xE3o selecionadas."),sg()()()(),Gl(1618,"br"),Tl(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),tN(1625," unselectRowItem "),sg()()()()(),Tl(1626,"tr",24)(1627,"td",24)(1628,"p"),tN(1629,"Desmarca uma linha que est\xE1 selecionada."),sg()()()(),Gl(1630,"br"),Tl(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),tN(1637," selectRowItem "),sg()()()()(),Tl(1638,"tr",24)(1639,"td",24)(1640,"p"),tN(1641,"Seleciona uma linha do 'po-table'."),sg()()()(),Gl(1642,"br"),Tl(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),tN(1649," deleteItems "),sg()()()()(),Tl(1650,"tr",24)(1651,"td",24)(1652,"p"),tN(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Tl(1654,"code"),tN(1655,"p-service-delete"),sg(),tN(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),sg(),Tl(1657,"p"),tN(1658,"Ao utilizar "),Tl(1659,"code"),tN(1660,"p-service-delete"),sg(),tN(1661," mas sem a propriedade "),Tl(1662,"code"),tN(1663,"p-service-api"),sg(),tN(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),sg(),Tl(1665,"p"),tN(1666,"Caso a tabela utilize "),Tl(1667,"code"),tN(1668,"p-height"),sg(),tN(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),Tl(1670,"code"),tN(1671,"(p-delete-items)"),sg(),tN(1672,", por exemplo:"),sg(),Tl(1673,"pre")(1674,"code"),tN(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),sg()()()()(),Gl(1676,"br"),Tl(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),tN(1683," removeItem "),sg()()()()(),Tl(1684,"tr",24)(1685,"td",24)(1686,"p"),tN(1687,"M\xE9todo que remove um item da tabela."),sg()()()(),Tl(1688,"h5")(1689,"b"),tN(1690,"Par\xE2metros"),sg()(),Tl(1691,"table",14)(1692,"tr",15)(1693,"th",16),tN(1694,"Nome"),sg(),Tl(1695,"th",16),tN(1696,"Tipo"),sg(),Tl(1697,"th",16),tN(1698,"Descri\xE7\xE3o"),sg()(),Tl(1699,"tr",17)(1700,"td",18),tN(1701," item"),sg(),Tl(1702,"td",21)(1703,"code",35),tN(1704," number "),sg(),Tl(1705,"code",42),tN(1706," { key: value } "),sg()(),Tl(1707,"td",24)(1708,"p"),tN(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),sg(),Tl(1710,"blockquote")(1711,"p"),tN(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),sg()()()()(),Gl(1713,"br"),Tl(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),tN(1720," updateItem "),sg()()()()(),Tl(1721,"tr",24)(1722,"td",24)(1723,"p"),tN(1724,"M\xE9todo que atualiza um item da tabela."),sg()()()(),Tl(1725,"h5")(1726,"b"),tN(1727,"Par\xE2metros"),sg()(),Tl(1728,"table",14)(1729,"tr",15)(1730,"th",16),tN(1731,"Nome"),sg(),Tl(1732,"th",16),tN(1733,"Tipo"),sg(),Tl(1734,"th",16),tN(1735,"Descri\xE7\xE3o"),sg()(),Tl(1736,"tr",17)(1737,"td",18),tN(1738," item"),sg(),Tl(1739,"td",21)(1740,"code",35),tN(1741," number "),sg(),Tl(1742,"code",42),tN(1743," { key: value } "),sg()(),Tl(1744,"td",24)(1745,"p"),tN(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),sg()()(),Tl(1747,"tr",17)(1748,"td",18),tN(1749," updatedItem"),sg(),Tl(1750,"td",21)(1751,"code",42),tN(1752," { key: value } "),sg()(),Tl(1753,"td",24)(1754,"p"),tN(1755,"Item que foi atualizado."),sg(),Tl(1756,"blockquote")(1757,"p"),tN(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),sg()()()()(),Gl(1759,"br"),Tl(1760,"h3"),tN(1761,"Interfaces"),sg(),Tl(1762,"h4",44)(1763,"code",5),tN(1764,"PoTableAction"),sg()(),Tl(1765,"div",2)(1766,"p"),tN(1767,"Interface para lista de a\xE7\xF5es do componente. "),sg()(),Tl(1768,"h4",13),tN(1769,"Propriedades"),sg(),Tl(1770,"table",14)(1771,"tr",15)(1772,"th",16),tN(1773,"Nome"),sg(),Tl(1774,"th",16),tN(1775,"Tipo"),sg(),Tl(1776,"th",16),tN(1777,"Descri\xE7\xE3o"),sg()(),Tl(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),tN(1782," action"),Gl(1783,"br"),sg()()(),Tl(1784,"td",21)(1785,"code",45),tN(1786,"Function"),sg()(),Tl(1787,"td",24)(1788,"em")(1789,"strong"),tN(1790,"(opcional)"),sg()(),Tl(1791,"p"),tN(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(1793,"p"),tN(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(1795,"code"),tN(1796,"subItems"),sg(),tN(1797,"."),sg(),Tl(1798,"blockquote")(1799,"p"),tN(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(1801,"em"),tN(1802,"bind"),sg(),tN(1803,`:
`),Tl(1804,"code"),tN(1805,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),tN(1810," disabled"),Gl(1811,"br"),sg()()(),Tl(1812,"td",21)(1813,"code",22),tN(1814,"boolean "),sg(),Tl(1815,"code",45),tN(1816," Function"),sg()(),Tl(1817,"td",24)(1818,"em")(1819,"strong"),tN(1820,"(opcional)"),sg()(),Tl(1821,"p"),tN(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),tN(1827," icon"),Gl(1828,"br"),sg()()(),Tl(1829,"td",21)(1830,"code",31),tN(1831,"string "),sg(),Tl(1832,"code",46),tN(1833," TemplateRef<void>"),sg()(),Tl(1834,"td",24)(1835,"em")(1836,"strong"),tN(1837,"(opcional)"),sg()(),Tl(1838,"p"),tN(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(1840,"p"),tN(1841,"Aceita \xEDcones da "),Tl(1842,"a",26),tN(1843,"Biblioteca de \xEDcones"),sg(),tN(1844,`, fontes externas (ex: Font Awesome)
ou um `),Tl(1845,"code"),tN(1846,"TemplateRef"),sg(),tN(1847," para \xEDcones customizados."),sg(),Tl(1848,"pre")(1849,"code"),tN(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),tN(1855," label"),Gl(1856,"br"),sg()()(),Tl(1857,"td",21)(1858,"code",31),tN(1859,"string"),sg()(),Tl(1860,"td",24)(1861,"p"),tN(1862,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(1863,"p"),tN(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(1865,"code"),tN(1866,"subItems"),sg(),tN(1867,"."),sg()()(),Tl(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),tN(1872," selected"),Gl(1873,"br"),sg()()(),Tl(1874,"td",21)(1875,"code",22),tN(1876,"boolean"),sg()(),Tl(1877,"td",24)(1878,"em")(1879,"strong"),tN(1880,"(opcional)"),sg()(),Tl(1881,"p"),tN(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),tN(1887," separator"),Gl(1888,"br"),sg()()(),Tl(1889,"td",21)(1890,"code",22),tN(1891,"boolean"),sg()(),Tl(1892,"td",24)(1893,"em")(1894,"strong"),tN(1895,"(opcional)"),sg()(),Tl(1896,"p"),tN(1897,"Atribui uma linha separadora acima do item."),sg()()(),Tl(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),tN(1902," subItems"),Gl(1903,"br"),sg()()(),Tl(1904,"td",21)(1905,"code",47),tN(1906,"Array<PoPopupAction>"),sg()(),Tl(1907,"td",24)(1908,"em")(1909,"strong"),tN(1910,"(opcional)"),sg()(),Tl(1911,"p"),tN(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(1913,"p"),tN(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(1915,"blockquote")(1916,"p"),tN(1917,"As propriedades "),Tl(1918,"code"),tN(1919,"disabled"),sg(),tN(1920,", "),Tl(1921,"code"),tN(1922,"type"),sg(),tN(1923," e "),Tl(1924,"code"),tN(1925,"visible"),sg(),tN(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(1927,"blockquote")(1928,"p"),tN(1929,"Quando "),Tl(1930,"code"),tN(1931,"url"),sg(),tN(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(1933,"blockquote")(1934,"p"),tN(1935,"Em subn\xEDveis aninhados, o "),Tl(1936,"code"),tN(1937,"icon"),sg(),tN(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),tN(1943," type"),Gl(1944,"br"),sg()()(),Tl(1945,"td",21)(1946,"code",31),tN(1947,"string"),sg()(),Tl(1948,"td",24)(1949,"em")(1950,"strong"),tN(1951,"(opcional)"),sg()(),Tl(1952,"p"),tN(1953,"Define a cor do item."),sg(),Tl(1954,"p"),tN(1955,"Valores v\xE1lidos:"),sg(),Tl(1956,"ul")(1957,"li")(1958,"code"),tN(1959,"default"),sg()(),Tl(1960,"li")(1961,"code"),tN(1962,"danger"),sg()()()()(),Tl(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),tN(1967," url"),Gl(1968,"br"),sg()()(),Tl(1969,"td",21)(1970,"code",31),tN(1971,"string"),sg()(),Tl(1972,"td",24)(1973,"em")(1974,"strong"),tN(1975,"(opcional)"),sg()(),Tl(1976,"p"),tN(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(1978,"p"),tN(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1980,"code"),tN(1981,"url"),sg(),tN(1982," \xE9 informada em um agrupador, o clique "),Tl(1983,"strong"),tN(1984,"n\xE3o abrir\xE1 os subitens"),sg(),tN(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(1986,"blockquote")(1987,"p"),tN(1988,"Quando informada, tem prioridade sobre a propriedade "),Tl(1989,"code"),tN(1990,"action"),sg(),tN(1991,"."),sg()()()(),Tl(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),tN(1996," visible"),Gl(1997,"br"),sg()()(),Tl(1998,"td",21)(1999,"code",22),tN(2e3,"boolean "),sg(),Tl(2001,"code",45),tN(2002," Function"),sg()(),Tl(2003,"td",24)(2004,"em")(2005,"strong"),tN(2006,"(opcional)"),sg()(),Tl(2007,"p"),tN(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Tl(2009,"h4",44)(2010,"code",5),tN(2011,"PoTableBoolean"),sg()(),Tl(2012,"div",2)(2013,"p"),tN(2014,"Interface que define as colunas booleanas do "),Tl(2015,"code"),tN(2016,"po-table"),sg(),tN(2017,"."),sg()(),Tl(2018,"h4",13),tN(2019,"Propriedades"),sg(),Tl(2020,"table",14)(2021,"tr",15)(2022,"th",16),tN(2023,"Nome"),sg(),Tl(2024,"th",16),tN(2025,"Tipo"),sg(),Tl(2026,"th",16),tN(2027,"Descri\xE7\xE3o"),sg()(),Tl(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),tN(2032," falseLabel"),Gl(2033,"br"),sg()()(),Tl(2034,"td",21)(2035,"code",31),tN(2036,"string"),sg()(),Tl(2037,"td",24)(2038,"em")(2039,"strong"),tN(2040,"(opcional)"),sg()(),Tl(2041,"p"),tN(2042,"Define o r\xF3tulo para valores "),Tl(2043,"code"),tN(2044,"false"),sg(),tN(2045,"."),sg()()(),Tl(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),tN(2050," trueLabel"),Gl(2051,"br"),sg()()(),Tl(2052,"td",21)(2053,"code",31),tN(2054,"string"),sg()(),Tl(2055,"td",24)(2056,"em")(2057,"strong"),tN(2058,"(opcional)"),sg()(),Tl(2059,"p"),tN(2060,"Define o r\xF3tulo para valores "),Tl(2061,"code"),tN(2062,"true"),sg(),tN(2063,"."),sg()()()(),Tl(2064,"h4",44)(2065,"code",5),tN(2066,"PoTableColumnSort"),sg()(),Tl(2067,"div",2)(2068,"p"),tN(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),sg()(),Tl(2070,"h4",13),tN(2071,"Propriedades"),sg(),Tl(2072,"table",14)(2073,"tr",15)(2074,"th",16),tN(2075,"Nome"),sg(),Tl(2076,"th",16),tN(2077,"Tipo"),sg(),Tl(2078,"th",16),tN(2079,"Descri\xE7\xE3o"),sg()(),Tl(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),tN(2084," column"),Gl(2085,"br"),sg()()(),Tl(2086,"td",21)(2087,"code",48),tN(2088,"PoTableColumn"),sg()(),Tl(2089,"td",24)(2090,"em")(2091,"strong"),tN(2092,"(opcional)"),sg()(),Tl(2093,"p"),tN(2094,"Coluna pela qual a tabela est\xE1 ordenada."),sg()()(),Tl(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),tN(2099," type"),Gl(2100,"br"),sg()()(),Tl(2101,"td",21)(2102,"code",49),tN(2103,"PoTableColumnSortType"),sg()(),Tl(2104,"td",24)(2105,"p"),tN(2106,"Tipo da ordena\xE7\xE3o."),sg()()()(),Tl(2107,"h4",44)(2108,"code",5),tN(2109,"PoTableColumn"),sg()(),Tl(2110,"div",2)(2111,"p"),tN(2112,"Interface para configura\xE7\xE3o das colunas do "),Tl(2113,"code"),tN(2114,"po-table"),sg(),tN(2115,"."),sg(),Tl(2116,"p"),tN(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),sg()(),Tl(2118,"h4",13),tN(2119,"Propriedades"),sg(),Tl(2120,"table",14)(2121,"tr",15)(2122,"th",16),tN(2123,"Nome"),sg(),Tl(2124,"th",16),tN(2125,"Tipo"),sg(),Tl(2126,"th",16),tN(2127,"Descri\xE7\xE3o"),sg()(),Tl(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),tN(2132," action"),Gl(2133,"br"),sg()()(),Tl(2134,"td",21)(2135,"code",45),tN(2136,"Function"),sg()(),Tl(2137,"td",24)(2138,"em")(2139,"strong"),tN(2140,"(opcional)"),sg()(),Tl(2141,"p"),tN(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),Tl(2143,"code"),tN(2144,"link"),sg(),tN(2145," ou "),Tl(2146,"code"),tN(2147,"icon"),sg(),tN(2148,"."),sg(),Tl(2149,"blockquote")(2150,"p"),tN(2151,"Quando for do tipo "),Tl(2152,"code"),tN(2153,"link"),sg(),tN(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),sg()(),Tl(2155,"blockquote")(2156,"p"),tN(2157,"Quando for do tipo "),Tl(2158,"code"),tN(2159,"icon"),sg(),tN(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),sg()()()(),Tl(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),tN(2165," boolean"),Gl(2166,"br"),sg()()(),Tl(2167,"td",21)(2168,"code",50),tN(2169,"PoTableBoolean"),sg()(),Tl(2170,"td",24)(2171,"em")(2172,"strong"),tN(2173,"(opcional)"),sg()(),Tl(2174,"p"),tN(2175,"Define um objeto do tipo "),Tl(2176,"code"),tN(2177,"PoTableBoolean"),sg(),tN(2178," para as colunas do tipo "),Tl(2179,"em"),tN(2180,"boolean"),sg(),tN(2181,". Por exemplo:"),sg(),Tl(2182,"pre")(2183,"code"),tN(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),sg()(),Tl(2185,"blockquote")(2186,"p"),tN(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),Tl(2188,"em"),tN(2189,"boolean"),sg(),tN(2190,`,
esta exibir\xE1 por padr\xE3o `),Tl(2191,"code"),tN(2192,"Sim"),sg(),tN(2193," e "),Tl(2194,"code"),tN(2195,"N\xE3o"),sg(),tN(2196," de acordo com os valores "),Tl(2197,"em"),tN(2198,"booleanos"),sg(),tN(2199,"."),sg()()()(),Tl(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),tN(2204," color"),Gl(2205,"br"),sg()()(),Tl(2206,"td",21)(2207,"code",31),tN(2208,"string "),sg(),Tl(2209,"code",45),tN(2210," Function"),sg()(),Tl(2211,"td",24)(2212,"em")(2213,"strong"),tN(2214,"(opcional)"),sg()(),Tl(2215,"p"),tN(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),sg(),Tl(2217,"p"),tN(2218,"Valores v\xE1lidos:"),sg(),Tl(2219,"ul")(2220,"li"),Gl(2221,"span",51),Tl(2222,"code"),tN(2223,"color-01"),sg()(),Tl(2224,"li"),Gl(2225,"span",52),Tl(2226,"code"),tN(2227,"color-02"),sg()(),Tl(2228,"li"),Gl(2229,"span",53),Tl(2230,"code"),tN(2231,"color-03"),sg()(),Tl(2232,"li"),Gl(2233,"span",54),Tl(2234,"code"),tN(2235,"color-04"),sg()(),Tl(2236,"li"),Gl(2237,"span",55),Tl(2238,"code"),tN(2239,"color-05"),sg()(),Tl(2240,"li"),Gl(2241,"span",56),Tl(2242,"code"),tN(2243,"color-06"),sg()(),Tl(2244,"li"),Gl(2245,"span",57),Tl(2246,"code"),tN(2247,"color-07"),sg()(),Tl(2248,"li"),Gl(2249,"span",58),Tl(2250,"code"),tN(2251,"color-08"),sg()(),Tl(2252,"li"),Gl(2253,"span",59),Tl(2254,"code"),tN(2255,"color-09"),sg()(),Tl(2256,"li"),Gl(2257,"span",60),Tl(2258,"code"),tN(2259,"color-10"),sg()(),Tl(2260,"li"),Gl(2261,"span",61),Tl(2262,"code"),tN(2263,"color-11"),sg()(),Tl(2264,"li"),Gl(2265,"span",62),Tl(2266,"code"),tN(2267,"color-12"),sg()()(),Tl(2268,"blockquote")(2269,"p"),tN(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(2271,"strong"),tN(2272,"Caption Tag Colors"),sg(),tN(2273,":"),sg()(),Tl(2274,"ul")(2275,"li"),Gl(2276,"span",63),Tl(2277,"code"),tN(2278,"caption-tag-01"),sg(),Gl(2279,"span",64),Tl(2280,"code"),tN(2281,"caption-tag-02"),sg(),Gl(2282,"span",65),Tl(2283,"code"),tN(2284,"caption-tag-03"),sg(),Gl(2285,"span",66),Tl(2286,"code"),tN(2287,"caption-tag-04"),sg(),Gl(2288,"span",67),Tl(2289,"code"),tN(2290,"caption-tag-05"),sg()(),Tl(2291,"li"),Gl(2292,"span",68),Tl(2293,"code"),tN(2294,"caption-tag-06"),sg(),Gl(2295,"span",69),Tl(2296,"code"),tN(2297,"caption-tag-07"),sg(),Gl(2298,"span",70),Tl(2299,"code"),tN(2300,"caption-tag-08"),sg(),Gl(2301,"span",71),Tl(2302,"code"),tN(2303,"caption-tag-09"),sg(),Gl(2304,"span",72),Tl(2305,"code"),tN(2306,"caption-tag-10"),sg()(),Tl(2307,"li"),Gl(2308,"span",73),Tl(2309,"code"),tN(2310,"caption-tag-11"),sg(),Gl(2311,"span",74),Tl(2312,"code"),tN(2313,"caption-tag-12"),sg(),Gl(2314,"span",75),Tl(2315,"code"),tN(2316,"caption-tag-13"),sg(),Gl(2317,"span",76),Tl(2318,"code"),tN(2319,"caption-tag-14"),sg(),Gl(2320,"span",77),Tl(2321,"code"),tN(2322,"caption-tag-15"),sg()(),Tl(2323,"li"),Gl(2324,"span",78),Tl(2325,"code"),tN(2326,"caption-tag-16"),sg(),Gl(2327,"span",79),Tl(2328,"code"),tN(2329,"caption-tag-17"),sg(),Gl(2330,"span",80),Tl(2331,"code"),tN(2332,"caption-tag-18"),sg(),Gl(2333,"span",81),Tl(2334,"code"),tN(2335,"caption-tag-19"),sg(),Gl(2336,"span",82),Tl(2337,"code"),tN(2338,"caption-tag-20"),sg()(),Tl(2339,"li"),Gl(2340,"span",83),Tl(2341,"code"),tN(2342,"caption-tag-21"),sg(),Gl(2343,"span",84),Tl(2344,"code"),tN(2345,"caption-tag-22"),sg(),Gl(2346,"span",85),Tl(2347,"code"),tN(2348,"caption-tag-23"),sg(),Gl(2349,"span",86),Tl(2350,"code"),tN(2351,"caption-tag-24"),sg(),Gl(2352,"span",87),Tl(2353,"code"),tN(2354,"caption-tag-25"),sg()(),Tl(2355,"li"),Gl(2356,"span",88),Tl(2357,"code"),tN(2358,"caption-tag-26"),sg(),Gl(2359,"span",89),Tl(2360,"code"),tN(2361,"caption-tag-27"),sg(),Gl(2362,"span",90),Tl(2363,"code"),tN(2364,"caption-tag-28"),sg(),Gl(2365,"span",91),Tl(2366,"code"),tN(2367,"caption-tag-29"),sg(),Gl(2368,"span",92),Tl(2369,"code"),tN(2370,"caption-tag-30"),sg()(),Tl(2371,"li"),Gl(2372,"span",93),Tl(2373,"code"),tN(2374,"caption-tag-31"),sg(),Gl(2375,"span",94),Tl(2376,"code"),tN(2377,"caption-tag-32"),sg(),Gl(2378,"span",95),Tl(2379,"code"),tN(2380,"caption-tag-33"),sg(),Gl(2381,"span",96),Tl(2382,"code"),tN(2383,"caption-tag-34"),sg(),Gl(2384,"span",97),Tl(2385,"code"),tN(2386,"caption-tag-35"),sg()()(),Tl(2387,"blockquote")(2388,"p"),tN(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),sg()(),Tl(2390,"pre")(2391,"code"),tN(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),sg()(),Tl(2393,"blockquote")(2394,"p"),tN(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),Tl(2396,"code"),tN(2397,"icons"),sg(),tN(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),sg()(),Tl(2399,"pre")(2400,"code"),tN(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),sg()()()(),Tl(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),tN(2406," detail"),Gl(2407,"br"),sg()()(),Tl(2408,"td",21)(2409,"code",98),tN(2410,"PoTableDetail"),sg()(),Tl(2411,"td",24)(2412,"em")(2413,"strong"),tN(2414,"(opcional)"),sg()(),Tl(2415,"p"),tN(2416,"Define um objeto que segue a interface "),Tl(2417,"code"),tN(2418,"PoTableDetail"),sg(),tN(2419,", para as colunas de detalhes. Por exemplo:"),sg(),Tl(2420,"pre")(2421,"code"),tN(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),sg()()()(),Tl(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),tN(2427," disabled"),Gl(2428,"br"),sg()()(),Tl(2429,"td",21)(2430,"code",45),tN(2431,"Function"),sg()(),Tl(2432,"td",24)(2433,"em")(2434,"strong"),tN(2435,"(opcional)"),sg()(),Tl(2436,"p"),tN(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),Tl(2438,"em"),tN(2439,"link"),sg(),tN(2440," e sua a\xE7\xE3o."),sg(),Tl(2441,"blockquote")(2442,"p"),tN(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),Tl(2444,"code"),tN(2445,"link"),sg(),tN(2446,"."),sg()()()(),Tl(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),tN(2451," format"),Gl(2452,"br"),sg()()(),Tl(2453,"td",21)(2454,"code",31),tN(2455,"string"),sg()(),Tl(2456,"td",24)(2457,"em")(2458,"strong"),tN(2459,"(opcional)"),sg()(),Tl(2460,"p"),tN(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),sg(),Tl(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),tN(2466,"Formata\xE7\xE3o"),sg(),Tl(2467,"th"),tN(2468,"Type da Coluna"),sg(),Tl(2469,"th"),tN(2470,"Descri\xE7\xE3o"),sg(),Tl(2471,"th"),tN(2472,"Exemplos"),sg()()(),Tl(2473,"tbody")(2474,"tr")(2475,"td"),tN(2476,"Monet\xE1rio"),sg(),Tl(2477,"td")(2478,"code"),tN(2479,"currency"),sg()(),Tl(2480,"td"),tN(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),sg(),Tl(2482,"td")(2483,"code"),tN(2484,"'BRL'"),sg(),tN(2485,", "),Tl(2486,"code"),tN(2487,"'USD'"),sg(),tN(2488,", "),Tl(2489,"code"),tN(2490,"'EUR'"),sg(),tN(2491,", "),Tl(2492,"code"),tN(2493,"'RUB'"),sg()()(),Tl(2494,"tr")(2495,"td"),tN(2496,"Data"),sg(),Tl(2497,"td")(2498,"code"),tN(2499,"date"),sg()(),Tl(2500,"td"),tN(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),sg(),Tl(2502,"td")(2503,"code"),tN(2504,"'dd/MM/yyyy'"),sg(),tN(2505,", "),Tl(2506,"code"),tN(2507,"'dd-MM-yy'"),sg(),tN(2508,", "),Tl(2509,"code"),tN(2510,"'mm/dd/yyyy'"),sg()()(),Tl(2511,"tr")(2512,"td"),tN(2513,"Hora"),sg(),Tl(2514,"td")(2515,"code"),tN(2516,"time"),sg()(),Tl(2517,"td"),tN(2518,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),sg(),Tl(2519,"td")(2520,"code"),tN(2521,"'HH:mm'"),sg(),tN(2522,", "),Tl(2523,"code"),tN(2524,"'HH:mm:ss.ffffff'"),sg(),tN(2525,", "),Tl(2526,"code"),tN(2527,"'HH:mm:ss.ff'"),sg(),tN(2528,", "),Tl(2529,"code"),tN(2530,"'mm:ss.fff'"),sg()()(),Tl(2531,"tr")(2532,"td"),tN(2533,"N\xFAmero"),sg(),Tl(2534,"td")(2535,"code"),tN(2536,"number"),sg()(),Tl(2537,"td"),tN(2538,"Aceita um valor seguindo o padr\xE3o "),Tl(2539,"a",99)(2540,"strong"),tN(2541,"DecimalPipe"),sg()(),tN(2542," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),sg(),Tl(2543,"td")(2544,"code"),tN(2545,"'1.2-5'"),sg(),tN(2546," (ex.: "),Tl(2547,"code"),tN(2548,"50"),sg(),tN(2549," \u2192 "),Tl(2550,"code"),tN(2551,"50.00"),sg(),tN(2552,")"),sg()()()(),Tl(2553,"p"),tN(2554,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),sg()()(),Tl(2555,"tr",17)(2556,"td",18)(2557,"div",19)(2558,"span",20),tN(2559," icons"),Gl(2560,"br"),sg()()(),Tl(2561,"td",21)(2562,"code",100),tN(2563,"Array<PoTableColumnIcon>"),sg()(),Tl(2564,"td",24)(2565,"em")(2566,"strong"),tN(2567,"(opcional)"),sg()(),Tl(2568,"p"),tN(2569,"Define um "),Tl(2570,"em"),tN(2571,"array"),sg(),tN(2572," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),Tl(2573,"code"),tN(2574,"action"),sg(),tN(2575," e "),Tl(2576,"code"),tN(2577,"color"),sg(),tN(2578,`
definidos na coluna, \xE0 partir do `),Tl(2579,"em"),tN(2580,"value"),sg(),tN(2581," da "),Tl(2582,"a",101)(2583,"code"),tN(2584,"PoTableColumnIcon"),sg()(),tN(2585,", por exemplo:"),sg(),Tl(2586,"pre")(2587,"code"),tN(2588,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),sg()(),Tl(2589,"pre")(2590,"code"),tN(2591,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),sg()()()(),Tl(2592,"tr",17)(2593,"td",18)(2594,"div",19)(2595,"span",20),tN(2596," label"),Gl(2597,"br"),sg()()(),Tl(2598,"td",21)(2599,"code",31),tN(2600,"string"),sg()(),Tl(2601,"td",24)(2602,"em")(2603,"strong"),tN(2604,"(opcional)"),sg()(),Tl(2605,"p"),tN(2606,"Texto para t\xEDtulo da coluna."),sg(),Tl(2607,"p"),tN(2608,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(2609,"em"),tN(2610,"label"),sg(),tN(2611," o valor da propriedade "),Tl(2612,"em"),tN(2613,"property"),sg(),tN(2614," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(2615,"tr",17)(2616,"td",18)(2617,"div",19)(2618,"span",20),tN(2619," labels"),Gl(2620,"br"),sg()()(),Tl(2621,"td",21)(2622,"code",102),tN(2623,"Array<PoTableColumnLabel>"),sg()(),Tl(2624,"td",24)(2625,"em")(2626,"strong"),tN(2627,"(opcional)"),sg()(),Tl(2628,"p"),tN(2629,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Tl(2630,"code"),tN(2631,"PoTableColumnLabel"),sg(),tN(2632," na qual devem ser definidas os labels. Por exemplo:"),sg(),Tl(2633,"pre")(2634,"code"),tN(2635,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),sg()()()(),Tl(2636,"tr",17)(2637,"td",18)(2638,"div",19)(2639,"span",20),tN(2640," link"),Gl(2641,"br"),sg()()(),Tl(2642,"td",21)(2643,"code",31),tN(2644,"string"),sg()(),Tl(2645,"td",24)(2646,"em")(2647,"strong"),tN(2648,"(opcional)"),sg()(),Tl(2649,"p"),tN(2650,"Define o nome da propriedade que conter\xE1 o "),Tl(2651,"code"),tN(2652,"link"),sg(),tN(2653," a ser redirecionado."),sg()()(),Tl(2654,"tr",17)(2655,"td",18)(2656,"div",19)(2657,"span",20),tN(2658," property"),Gl(2659,"br"),sg()()(),Tl(2660,"td",21)(2661,"code",31),tN(2662,"string"),sg()(),Tl(2663,"td",24)(2664,"em")(2665,"strong"),tN(2666,"(opcional)"),sg()(),Tl(2667,"p"),tN(2668,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),sg(),Tl(2669,"pre")(2670,"code"),tN(2671,`{ property: 'address.street', label: 'Rua' }
`),sg()()()(),Tl(2672,"tr",17)(2673,"td",18)(2674,"div",19)(2675,"span",20),tN(2676," sortable"),Gl(2677,"br"),sg()()(),Tl(2678,"td",21)(2679,"code",22),tN(2680,"boolean"),sg()(),Tl(2681,"td",24)(2682,"em")(2683,"strong"),tN(2684,"(opcional)"),sg()(),Tl(2685,"p"),tN(2686,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),sg()()(),Tl(2687,"tr",17)(2688,"td",18)(2689,"div",19)(2690,"span",20),tN(2691," subtitles"),Gl(2692,"br"),sg()()(),Tl(2693,"td",21)(2694,"code",103),tN(2695,"Array<PoTableSubtitleColumn>"),sg()(),Tl(2696,"td",24)(2697,"em")(2698,"strong"),tN(2699,"(opcional)"),sg()(),Tl(2700,"p"),tN(2701,"Define um array de objetos para as colunas de legenda. Onde, "),Tl(2702,"code"),tN(2703,"subtitles"),sg(),tN(2704,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),sg(),Tl(2705,"pre")(2706,"code"),tN(2707,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),sg()(),Tl(2708,"p"),tN(2709,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),sg()()(),Tl(2710,"tr",17)(2711,"td",18)(2712,"div",19)(2713,"span",20),tN(2714," tooltip"),Gl(2715,"br"),sg()()(),Tl(2716,"td",21)(2717,"code",31),tN(2718,"string"),sg()(),Tl(2719,"td",24)(2720,"em")(2721,"strong"),tN(2722,"(opcional)"),sg()(),Tl(2723,"p"),tN(2724,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Tl(2725,"em"),tN(2726,"mouse"),sg(),tN(2727," sobre um texto."),sg(),Tl(2728,"blockquote")(2729,"p"),tN(2730,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),Tl(2731,"em"),tN(2732,"link"),sg(),tN(2733,"."),sg()(),Tl(2734,"blockquote")(2735,"p"),tN(2736,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Tl(2737,"em"),tN(2738,"tooltip"),sg(),tN(2739," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),sg()()()(),Tl(2740,"tr",17)(2741,"td",18)(2742,"div",19)(2743,"span",20),tN(2744," type"),Gl(2745,"br"),sg()()(),Tl(2746,"td",21)(2747,"code",31),tN(2748,"string"),sg()(),Tl(2749,"td",24)(2750,"em")(2751,"strong"),tN(2752,"(opcional)"),sg()(),Tl(2753,"p"),tN(2754,"Tipo da coluna."),sg(),Tl(2755,"p"),tN(2756,"Valores v\xE1lidos:"),sg(),Tl(2757,"ul")(2758,"li")(2759,"p")(2760,"code"),tN(2761,"boolean"),sg(),tN(2762,": Exibir\xE1 por padr\xE3o "),Tl(2763,"code"),tN(2764,"Sim"),sg(),tN(2765," e "),Tl(2766,"code"),tN(2767,"N\xE3o"),sg(),tN(2768," de acordo com os valores "),Tl(2769,"em"),tN(2770,"booleanos"),sg(),tN(2771,"."),sg(),Tl(2772,"blockquote")(2773,"p"),tN(2774,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),Tl(2775,"code"),tN(2776,"boolean"),sg(),tN(2777," desta interface."),sg()()(),Tl(2778,"li")(2779,"p")(2780,"code"),tN(2781,"currency"),sg(),tN(2782,": valores monet\xE1rios."),sg()(),Tl(2783,"li")(2784,"p")(2785,"code"),tN(2786,"date"),sg(),tN(2787,": valor de datas."),sg(),Tl(2788,"ul")(2789,"li"),tN(2790,"Aceita os tipos "),Tl(2791,"em"),tN(2792,"string"),sg(),tN(2793," e "),Tl(2794,"em"),tN(2795,"Date"),sg(),tN(2796,` padr\xE3o do Javascript,
por exemplo: `),Tl(2797,"code"),tN(2798,"'2017-11-28'"),sg(),tN(2799," ou "),Tl(2800,"code"),tN(2801,"new Date(2017, 10, 28)"),sg(),tN(2802,"."),sg()()(),Tl(2803,"li")(2804,"p")(2805,"code"),tN(2806,"dateTime"),sg(),tN(2807,": valor de data com hor\xE1rio."),sg(),Tl(2808,"ul")(2809,"li"),tN(2810,"Aceita o tipo "),Tl(2811,"em"),tN(2812,"string"),sg(),tN(2813," no formato "),Tl(2814,"strong"),tN(2815,"ISO-8601"),sg(),tN(2816," extendido "),Tl(2817,"strong"),tN(2818,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),tN(2819,`
e o tipo `),Tl(2820,"em"),tN(2821,"Date"),sg(),tN(2822," padr\xE3o do Javascript, por exemplo: "),Tl(2823,"code"),tN(2824,"'2017-11-28T00:00:00-02:00'"),sg(),tN(2825," ou "),Tl(2826,"code"),tN(2827,"new Date(2017, 10, 28)"),sg(),tN(2828,"."),sg()()(),Tl(2829,"li")(2830,"p")(2831,"code"),tN(2832,"detail"),sg(),tN(2833,": array de objetos para o master-detail."),sg(),Tl(2834,"ul")(2835,"li"),tN(2836,"Incompat\xEDvel com "),Tl(2837,"code"),tN(2838,"virtual-scroll"),sg(),tN(2839,", que requer altura fixa nas linhas."),sg()()(),Tl(2840,"li")(2841,"p")(2842,"code"),tN(2843,"icon"),sg(),tN(2844,": "),Tl(2845,"em"),tN(2846,"array"),sg(),tN(2847," de "),Tl(2848,"em"),tN(2849,"string"),sg(),tN(2850," ou objetos para a coluna de \xEDcones."),sg()(),Tl(2851,"li")(2852,"p")(2853,"code"),tN(2854,"label"),sg(),tN(2855,": texto com destaque."),sg()(),Tl(2856,"li")(2857,"p")(2858,"code"),tN(2859,"link"),sg(),tN(2860,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),sg()(),Tl(2861,"li")(2862,"p")(2863,"code"),tN(2864,"number"),sg(),tN(2865,": valores num\xE9ricos."),sg()(),Tl(2866,"li")(2867,"p")(2868,"code"),tN(2869,"string"),sg(),tN(2870,": textos."),sg()(),Tl(2871,"li")(2872,"p")(2873,"code"),tN(2874,"subtitle"),sg(),tN(2875,": array de objetos para a coluna de legenda."),sg()(),Tl(2876,"li")(2877,"p")(2878,"code"),tN(2879,"time"),sg(),tN(2880,": valor de hor\xE1rio."),sg(),Tl(2881,"ul")(2882,"li"),tN(2883,"Aceita o tipo "),Tl(2884,"em"),tN(2885,"string"),sg(),tN(2886," nos formatos "),Tl(2887,"strong"),tN(2888,"'HH:mm:ss'"),sg(),tN(2889," ou "),Tl(2890,"strong"),tN(2891,"'HH:mm:ss.ffffff'"),sg(),tN(2892,", por exemplo: "),Tl(2893,"code"),tN(2894,"'23:12:45'"),sg(),tN(2895,"."),sg()()(),Tl(2896,"li")(2897,"p")(2898,"code"),tN(2899,"cellTemplate"),sg(),tN(2900,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Tl(2901,"a",8),tN(2902,"PoTableCellTemplate"),sg(),tN(2903,"."),sg()(),Tl(2904,"li")(2905,"p")(2906,"code"),tN(2907,"columnTemplate"),sg(),tN(2908,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Tl(2909,"a",7),tN(2910,"PoTableColumnTemplate"),sg(),tN(2911,"."),sg()()()()(),Tl(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),tN(2916," visible"),Gl(2917,"br"),sg()()(),Tl(2918,"td",21)(2919,"code",22),tN(2920,"boolean"),sg()(),Tl(2921,"td",24)(2922,"em")(2923,"strong"),tN(2924,"(opcional)"),sg()(),Tl(2925,"p"),tN(2926,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Tl(2927,"strong"),tN(2928,"gerenciador de colunas"),sg(),tN(2929,"."),sg(),Tl(2930,"blockquote")(2931,"p"),tN(2932,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),Tl(2933,"code"),tN(2934,"p-max-columns"),sg(),tN(2935,"."),sg()()()(),Tl(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),tN(2940," width"),Gl(2941,"br"),sg()()(),Tl(2942,"td",21)(2943,"code",31),tN(2944,"string"),sg()(),Tl(2945,"td",24)(2946,"em")(2947,"strong"),tN(2948,"(opcional)"),sg()(),Tl(2949,"p"),tN(2950,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),sg(),Tl(2951,"ul")(2952,"li"),tN(2953,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),sg(),Tl(2954,"li"),tN(2955,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),sg()()()()(),Tl(2956,"h4",44)(2957,"code",5),tN(2958,"PoTableLiterals"),sg()(),Tl(2959,"div",2)(2960,"p"),tN(2961,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(2962,"code"),tN(2963,"po-table"),sg(),tN(2964,"."),sg()(),Tl(2965,"h4",13),tN(2966,"Propriedades"),sg(),Tl(2967,"table",14)(2968,"tr",15)(2969,"th",16),tN(2970,"Nome"),sg(),Tl(2971,"th",16),tN(2972,"Tipo"),sg(),Tl(2973,"th",16),tN(2974,"Descri\xE7\xE3o"),sg()(),Tl(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),tN(2979," bodyDelete"),Gl(2980,"br"),sg()()(),Tl(2981,"td",21)(2982,"code",31),tN(2983,"string"),sg()(),Tl(2984,"td",24)(2985,"em")(2986,"strong"),tN(2987,"(opcional)"),sg()(),Tl(2988,"p"),tN(2989,"Texto no corpo do Modal de exclus\xE3o"),sg()()(),Tl(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),tN(2994," cancel"),Gl(2995,"br"),sg()()(),Tl(2996,"td",21)(2997,"code",31),tN(2998,"string"),sg()(),Tl(2999,"td",24)(3e3,"em")(3001,"strong"),tN(3002,"(opcional)"),sg()(),Tl(3003,"p"),tN(3004,"Texto no Modal para cancelar a exclus\xE3o"),sg()()(),Tl(3005,"tr",17)(3006,"td",18)(3007,"div",19)(3008,"span",20),tN(3009," columnsManager"),Gl(3010,"br"),sg()()(),Tl(3011,"td",21)(3012,"code",31),tN(3013,"string"),sg()(),Tl(3014,"td",24)(3015,"em")(3016,"strong"),tN(3017,"(opcional)"),sg()(),Tl(3018,"p"),tN(3019,"Texto do "),Tl(3020,"strong"),tN(3021,"Gerenciador de colunas"),sg(),tN(3022," localizado no canto superior direito da tabela."),sg()()(),Tl(3023,"tr",17)(3024,"td",18)(3025,"div",19)(3026,"span",20),tN(3027," completeSubtitle"),Gl(3028,"br"),sg()()(),Tl(3029,"td",21)(3030,"code",31),tN(3031,"string"),sg()(),Tl(3032,"td",24)(3033,"em")(3034,"strong"),tN(3035,"(opcional)"),sg()(),Tl(3036,"p"),tN(3037,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),sg()()(),Tl(3038,"tr",17)(3039,"td",18)(3040,"div",19)(3041,"span",20),tN(3042," delete"),Gl(3043,"br"),sg()()(),Tl(3044,"td",21)(3045,"code",31),tN(3046,"string"),sg()(),Tl(3047,"td",24)(3048,"em")(3049,"strong"),tN(3050,"(opcional)"),sg()(),Tl(3051,"p"),tN(3052,"Texto no Modal para confirmar a exclus\xE3o"),sg()()(),Tl(3053,"tr",17)(3054,"td",18)(3055,"div",19)(3056,"span",20),tN(3057," deleteApiError"),Gl(3058,"br"),sg()()(),Tl(3059,"td",21)(3060,"code",31),tN(3061,"string"),sg()(),Tl(3062,"td",24)(3063,"em")(3064,"strong"),tN(3065,"(opcional)"),sg()(),Tl(3066,"p"),tN(3067,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),sg()()(),Tl(3068,"tr",17)(3069,"td",18)(3070,"div",19)(3071,"span",20),tN(3072," deleteSuccessful"),Gl(3073,"br"),sg()()(),Tl(3074,"td",21)(3075,"code",31),tN(3076,"string"),sg()(),Tl(3077,"td",24)(3078,"em")(3079,"strong"),tN(3080,"(opcional)"),sg()(),Tl(3081,"p"),tN(3082,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),sg()()(),Tl(3083,"tr",17)(3084,"td",18)(3085,"div",19)(3086,"span",20),tN(3087," loadMoreData"),Gl(3088,"br"),sg()()(),Tl(3089,"td",21)(3090,"code",31),tN(3091,"string"),sg()(),Tl(3092,"td",24)(3093,"em")(3094,"strong"),tN(3095,"(opcional)"),sg()(),Tl(3096,"p"),tN(3097,"Texto do bot\xE3o de "),Tl(3098,"strong"),tN(3099,"Carregar mais resultados"),sg(),tN(3100," localizado no rodap\xE9 da tabela."),sg()()(),Tl(3101,"tr",17)(3102,"td",18)(3103,"div",19)(3104,"span",20),tN(3105," loadingData"),Gl(3106,"br"),sg()()(),Tl(3107,"td",21)(3108,"code",31),tN(3109,"string"),sg()(),Tl(3110,"td",24)(3111,"em")(3112,"strong"),tN(3113,"(opcional)"),sg()(),Tl(3114,"p"),tN(3115,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),sg()()(),Tl(3116,"tr",17)(3117,"td",18)(3118,"div",19)(3119,"span",20),tN(3120," multipleItems"),Gl(3121,"br"),sg()()(),Tl(3122,"td",21)(3123,"code",31),tN(3124,"string"),sg()(),Tl(3125,"td",24)(3126,"em")(3127,"strong"),tN(3128,"(opcional)"),sg()(),Tl(3129,"p"),tN(3130,"Texto exibido quando apenas 1 item for selecionado no checkbox."),sg()()(),Tl(3131,"tr",17)(3132,"td",18)(3133,"div",19)(3134,"span",20),tN(3135," noColumns"),Gl(3136,"br"),sg()()(),Tl(3137,"td",21)(3138,"code",31),tN(3139,"string"),sg()(),Tl(3140,"td",24)(3141,"em")(3142,"strong"),tN(3143,"(opcional)"),sg()(),Tl(3144,"p"),tN(3145,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),sg()()(),Tl(3146,"tr",17)(3147,"td",18)(3148,"div",19)(3149,"span",20),tN(3150," noData"),Gl(3151,"br"),sg()()(),Tl(3152,"td",21)(3153,"code",31),tN(3154,"string"),sg()(),Tl(3155,"td",24)(3156,"em")(3157,"strong"),tN(3158,"(opcional)"),sg()(),Tl(3159,"p"),tN(3160,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),sg()()(),Tl(3161,"tr",17)(3162,"td",18)(3163,"div",19)(3164,"span",20),tN(3165," noItem"),Gl(3166,"br"),sg()()(),Tl(3167,"td",21)(3168,"code",31),tN(3169,"string"),sg()(),Tl(3170,"td",24)(3171,"em")(3172,"strong"),tN(3173,"(opcional)"),sg()(),Tl(3174,"p"),tN(3175,"Texto exibido quando nenhum item for selecionado no checkbox."),sg()()(),Tl(3176,"tr",17)(3177,"td",18)(3178,"div",19)(3179,"span",20),tN(3180," noVisibleColumn"),Gl(3181,"br"),sg()()(),Tl(3182,"td",21)(3183,"code",31),tN(3184,"string"),sg()(),Tl(3185,"td",24)(3186,"em")(3187,"strong"),tN(3188,"(opcional)"),sg()(),Tl(3189,"p"),tN(3190,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),sg()()(),Tl(3191,"tr",17)(3192,"td",18)(3193,"div",19)(3194,"span",20),tN(3195," oneItem"),Gl(3196,"br"),sg()()(),Tl(3197,"td",21)(3198,"code",31),tN(3199,"string"),sg()(),Tl(3200,"td",24)(3201,"em")(3202,"strong"),tN(3203,"(opcional)"),sg()(),Tl(3204,"p"),tN(3205,"Texto exibido quando apenas 1 item for selecionado no checkbox."),sg()()(),Tl(3206,"tr",17)(3207,"td",18)(3208,"div",19)(3209,"span",20),tN(3210," seeCompleteSubtitle"),Gl(3211,"br"),sg()()(),Tl(3212,"td",21)(3213,"code",31),tN(3214,"string"),sg()(),Tl(3215,"td",24)(3216,"em")(3217,"strong"),tN(3218,"(opcional)"),sg()(),Tl(3219,"p"),tN(3220,"Texto do bot\xE3o "),Tl(3221,"strong"),tN(3222,"Ver legenda completa"),sg(),tN(3223," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),sg()()()(),Tl(3224,"h4",44)(3225,"code",5),tN(3226,"PoTableColumnIcon"),sg()(),Tl(3227,"div",2)(3228,"p"),Gl(3229,"a",104),sg(),Tl(3230,"p"),tN(3231,"Interface que define a coluna com \xEDcone(s) do "),Tl(3232,"code"),tN(3233,"po-table"),sg(),tN(3234,"."),sg()(),Tl(3235,"h4",13),tN(3236,"Propriedades"),sg(),Tl(3237,"table",14)(3238,"tr",15)(3239,"th",16),tN(3240,"Nome"),sg(),Tl(3241,"th",16),tN(3242,"Tipo"),sg(),Tl(3243,"th",16),tN(3244,"Descri\xE7\xE3o"),sg()(),Tl(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),tN(3249," action"),Gl(3250,"br"),sg()()(),Tl(3251,"td",21)(3252,"code",45),tN(3253,"Function"),sg()(),Tl(3254,"td",24)(3255,"em")(3256,"strong"),tN(3257,"(opcional)"),sg()(),Tl(3258,"p"),tN(3259,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),sg()()(),Tl(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),tN(3264," color"),Gl(3265,"br"),sg()()(),Tl(3266,"td",21)(3267,"code",31),tN(3268,"string "),sg(),Tl(3269,"code",45),tN(3270," Function"),sg()(),Tl(3271,"td",24)(3272,"em")(3273,"strong"),tN(3274,"(opcional)"),sg()(),Tl(3275,"p"),tN(3276,"Define a cor do \xEDcone."),sg(),Tl(3277,"p"),tN(3278,"Valores v\xE1lidos:"),sg(),Tl(3279,"ul")(3280,"li"),Gl(3281,"span",51),Tl(3282,"code"),tN(3283,"color-01"),sg()(),Tl(3284,"li"),Gl(3285,"span",52),Tl(3286,"code"),tN(3287,"color-02"),sg()(),Tl(3288,"li"),Gl(3289,"span",53),Tl(3290,"code"),tN(3291,"color-03"),sg()(),Tl(3292,"li"),Gl(3293,"span",54),Tl(3294,"code"),tN(3295,"color-04"),sg()(),Tl(3296,"li"),Gl(3297,"span",55),Tl(3298,"code"),tN(3299,"color-05"),sg()(),Tl(3300,"li"),Gl(3301,"span",56),Tl(3302,"code"),tN(3303,"color-06"),sg()(),Tl(3304,"li"),Gl(3305,"span",57),Tl(3306,"code"),tN(3307,"color-07"),sg()(),Tl(3308,"li"),Gl(3309,"span",58),Tl(3310,"code"),tN(3311,"color-08"),sg()(),Tl(3312,"li"),Gl(3313,"span",59),Tl(3314,"code"),tN(3315,"color-09"),sg()(),Tl(3316,"li"),Gl(3317,"span",60),Tl(3318,"code"),tN(3319,"color-10"),sg()(),Tl(3320,"li"),Gl(3321,"span",61),Tl(3322,"code"),tN(3323,"color-11"),sg()(),Tl(3324,"li"),Gl(3325,"span",62),Tl(3326,"code"),tN(3327,"color-12"),sg()()(),Tl(3328,"blockquote")(3329,"p"),tN(3330,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(3331,"strong"),tN(3332,"Caption Tag Colors"),sg(),tN(3333,":"),sg()(),Tl(3334,"ul")(3335,"li"),Gl(3336,"span",63),Tl(3337,"code"),tN(3338,"caption-tag-01"),sg(),Gl(3339,"span",64),Tl(3340,"code"),tN(3341,"caption-tag-02"),sg(),Gl(3342,"span",65),Tl(3343,"code"),tN(3344,"caption-tag-03"),sg(),Gl(3345,"span",66),Tl(3346,"code"),tN(3347,"caption-tag-04"),sg(),Gl(3348,"span",67),Tl(3349,"code"),tN(3350,"caption-tag-05"),sg()(),Tl(3351,"li"),Gl(3352,"span",68),Tl(3353,"code"),tN(3354,"caption-tag-06"),sg(),Gl(3355,"span",69),Tl(3356,"code"),tN(3357,"caption-tag-07"),sg(),Gl(3358,"span",70),Tl(3359,"code"),tN(3360,"caption-tag-08"),sg(),Gl(3361,"span",71),Tl(3362,"code"),tN(3363,"caption-tag-09"),sg(),Gl(3364,"span",72),Tl(3365,"code"),tN(3366,"caption-tag-10"),sg()(),Tl(3367,"li"),Gl(3368,"span",73),Tl(3369,"code"),tN(3370,"caption-tag-11"),sg(),Gl(3371,"span",74),Tl(3372,"code"),tN(3373,"caption-tag-12"),sg(),Gl(3374,"span",75),Tl(3375,"code"),tN(3376,"caption-tag-13"),sg(),Gl(3377,"span",76),Tl(3378,"code"),tN(3379,"caption-tag-14"),sg(),Gl(3380,"span",77),Tl(3381,"code"),tN(3382,"caption-tag-15"),sg()(),Tl(3383,"li"),Gl(3384,"span",78),Tl(3385,"code"),tN(3386,"caption-tag-16"),sg(),Gl(3387,"span",79),Tl(3388,"code"),tN(3389,"caption-tag-17"),sg(),Gl(3390,"span",80),Tl(3391,"code"),tN(3392,"caption-tag-18"),sg(),Gl(3393,"span",81),Tl(3394,"code"),tN(3395,"caption-tag-19"),sg(),Gl(3396,"span",82),Tl(3397,"code"),tN(3398,"caption-tag-20"),sg()(),Tl(3399,"li"),Gl(3400,"span",83),Tl(3401,"code"),tN(3402,"caption-tag-21"),sg(),Gl(3403,"span",84),Tl(3404,"code"),tN(3405,"caption-tag-22"),sg(),Gl(3406,"span",85),Tl(3407,"code"),tN(3408,"caption-tag-23"),sg(),Gl(3409,"span",86),Tl(3410,"code"),tN(3411,"caption-tag-24"),sg(),Gl(3412,"span",87),Tl(3413,"code"),tN(3414,"caption-tag-25"),sg()(),Tl(3415,"li"),Gl(3416,"span",88),Tl(3417,"code"),tN(3418,"caption-tag-26"),sg(),Gl(3419,"span",89),Tl(3420,"code"),tN(3421,"caption-tag-27"),sg(),Gl(3422,"span",90),Tl(3423,"code"),tN(3424,"caption-tag-28"),sg(),Gl(3425,"span",91),Tl(3426,"code"),tN(3427,"caption-tag-29"),sg(),Gl(3428,"span",92),Tl(3429,"code"),tN(3430,"caption-tag-30"),sg()(),Tl(3431,"li"),Gl(3432,"span",93),Tl(3433,"code"),tN(3434,"caption-tag-31"),sg(),Gl(3435,"span",94),Tl(3436,"code"),tN(3437,"caption-tag-32"),sg(),Gl(3438,"span",95),Tl(3439,"code"),tN(3440,"caption-tag-33"),sg(),Gl(3441,"span",96),Tl(3442,"code"),tN(3443,"caption-tag-34"),sg(),Gl(3444,"span",97),Tl(3445,"code"),tN(3446,"caption-tag-35"),sg()()()()(),Tl(3447,"tr",17)(3448,"td",18)(3449,"div",19)(3450,"span",20),tN(3451," disabled"),Gl(3452,"br"),sg()()(),Tl(3453,"td",21)(3454,"code",45),tN(3455,"Function"),sg()(),Tl(3456,"td",24)(3457,"em")(3458,"strong"),tN(3459,"(opcional)"),sg()(),Tl(3460,"p"),tN(3461,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),sg()()(),Tl(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),tN(3466," icon"),Gl(3467,"br"),sg()()(),Tl(3468,"td",21)(3469,"code",31),tN(3470,"string "),sg(),Tl(3471,"code",46),tN(3472," TemplateRef<void>"),sg()(),Tl(3473,"td",24)(3474,"em")(3475,"strong"),tN(3476,"(opcional)"),sg()(),Tl(3477,"p"),tN(3478,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(3479,"a",26),tN(3480,"Biblioteca de \xEDcones"),sg(),tN(3481,". conforme exemplo abaixo:"),sg(),Tl(3482,"pre")(3483,"code"),tN(3484,`[ { icon: 'an an-plus' } ]
`),sg()(),Tl(3485,"p"),tN(3486,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Tl(3487,"pre")(3488,"code"),tN(3489,`[ {  icon: 'fas fa-plus' } ]
`),sg()(),Tl(3490,"p"),tN(3491,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(3492,"code"),tN(3493,"TemplateRef"),sg(),tN(3494,`, conforme exemplo abaixo:
`),Tl(3495,"code"),tN(3496,"component.html"),sg(),tN(3497,":"),sg(),Tl(3498,"pre")(3499,"code"),tN(3500,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),sg()(),Tl(3501,"p")(3502,"code"),tN(3503,"component.ts"),sg(),tN(3504,":"),sg(),Tl(3505,"pre")(3506,"code"),tN(3507,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),sg()(),Tl(3508,"blockquote")(3509,"p"),tN(3510,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),Tl(3511,"code"),tN(3512,"value"),sg(),tN(3513,"."),sg()()()(),Tl(3514,"tr",17)(3515,"td",18)(3516,"div",19)(3517,"span",20),tN(3518," tooltip"),Gl(3519,"br"),sg()()(),Tl(3520,"td",21)(3521,"code",31),tN(3522,"string"),sg()(),Tl(3523,"td",24)(3524,"em")(3525,"strong"),tN(3526,"(opcional)"),sg()(),Tl(3527,"p"),tN(3528,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Tl(3529,"em"),tN(3530,"mouse"),sg(),tN(3531," em cima do \xEDcone."),sg()()(),Tl(3532,"tr",17)(3533,"td",18)(3534,"div",19)(3535,"span",20),tN(3536," value"),Gl(3537,"br"),sg()()(),Tl(3538,"td",21)(3539,"code",31),tN(3540,"string"),sg()(),Tl(3541,"td",24)(3542,"p"),tN(3543,"Define o valor do \xEDcone que ser\xE1 exibido."),sg()()()(),Tl(3544,"h4",44)(3545,"code",5),tN(3546,"PoTableColumnLabel"),sg()(),Tl(3547,"div",2)(3548,"p"),tN(3549,"Interface para configura\xE7\xE3o das colunas de labels do "),Tl(3550,"code"),tN(3551,"po-table"),sg(),tN(3552,"."),sg()(),Tl(3553,"h4",13),tN(3554,"Propriedades"),sg(),Tl(3555,"table",14)(3556,"tr",15)(3557,"th",16),tN(3558,"Nome"),sg(),Tl(3559,"th",16),tN(3560,"Tipo"),sg(),Tl(3561,"th",16),tN(3562,"Descri\xE7\xE3o"),sg()(),Tl(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),tN(3567," color"),Gl(3568,"br"),sg()()(),Tl(3569,"td",21)(3570,"code",31),tN(3571,"string"),sg()(),Tl(3572,"td",24)(3573,"em")(3574,"strong"),tN(3575,"(opcional)"),sg()(),Tl(3576,"p"),tN(3577,"Define a cor do label."),sg(),Tl(3578,"p"),tN(3579,"Valores v\xE1lidos:"),sg(),Tl(3580,"ul")(3581,"li"),Gl(3582,"span",51),Tl(3583,"code"),tN(3584,"color-01"),sg()(),Tl(3585,"li"),Gl(3586,"span",52),Tl(3587,"code"),tN(3588,"color-02"),sg()(),Tl(3589,"li"),Gl(3590,"span",53),Tl(3591,"code"),tN(3592,"color-03"),sg()(),Tl(3593,"li"),Gl(3594,"span",54),Tl(3595,"code"),tN(3596,"color-04"),sg()(),Tl(3597,"li"),Gl(3598,"span",55),Tl(3599,"code"),tN(3600,"color-05"),sg()(),Tl(3601,"li"),Gl(3602,"span",56),Tl(3603,"code"),tN(3604,"color-06"),sg()(),Tl(3605,"li"),Gl(3606,"span",57),Tl(3607,"code"),tN(3608,"color-07"),sg()(),Tl(3609,"li"),Gl(3610,"span",58),Tl(3611,"code"),tN(3612,"color-08"),sg()(),Tl(3613,"li"),Gl(3614,"span",59),Tl(3615,"code"),tN(3616,"color-09"),sg()(),Tl(3617,"li"),Gl(3618,"span",60),Tl(3619,"code"),tN(3620,"color-10"),sg()(),Tl(3621,"li"),Gl(3622,"span",61),Tl(3623,"code"),tN(3624,"color-11"),sg()(),Tl(3625,"li"),Gl(3626,"span",62),Tl(3627,"code"),tN(3628,"color-12"),sg()()(),Tl(3629,"blockquote")(3630,"p"),tN(3631,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(3632,"strong"),tN(3633,"Caption Tag Colors"),sg(),tN(3634,":"),sg()(),Tl(3635,"ul")(3636,"li"),Gl(3637,"span",63),Tl(3638,"code"),tN(3639,"caption-tag-01"),sg(),Gl(3640,"span",64),Tl(3641,"code"),tN(3642,"caption-tag-02"),sg(),Gl(3643,"span",65),Tl(3644,"code"),tN(3645,"caption-tag-03"),sg(),Gl(3646,"span",66),Tl(3647,"code"),tN(3648,"caption-tag-04"),sg(),Gl(3649,"span",67),Tl(3650,"code"),tN(3651,"caption-tag-05"),sg()(),Tl(3652,"li"),Gl(3653,"span",68),Tl(3654,"code"),tN(3655,"caption-tag-06"),sg(),Gl(3656,"span",69),Tl(3657,"code"),tN(3658,"caption-tag-07"),sg(),Gl(3659,"span",70),Tl(3660,"code"),tN(3661,"caption-tag-08"),sg(),Gl(3662,"span",71),Tl(3663,"code"),tN(3664,"caption-tag-09"),sg(),Gl(3665,"span",72),Tl(3666,"code"),tN(3667,"caption-tag-10"),sg()(),Tl(3668,"li"),Gl(3669,"span",73),Tl(3670,"code"),tN(3671,"caption-tag-11"),sg(),Gl(3672,"span",74),Tl(3673,"code"),tN(3674,"caption-tag-12"),sg(),Gl(3675,"span",75),Tl(3676,"code"),tN(3677,"caption-tag-13"),sg(),Gl(3678,"span",76),Tl(3679,"code"),tN(3680,"caption-tag-14"),sg(),Gl(3681,"span",77),Tl(3682,"code"),tN(3683,"caption-tag-15"),sg()(),Tl(3684,"li"),Gl(3685,"span",78),Tl(3686,"code"),tN(3687,"caption-tag-16"),sg(),Gl(3688,"span",79),Tl(3689,"code"),tN(3690,"caption-tag-17"),sg(),Gl(3691,"span",80),Tl(3692,"code"),tN(3693,"caption-tag-18"),sg(),Gl(3694,"span",81),Tl(3695,"code"),tN(3696,"caption-tag-19"),sg(),Gl(3697,"span",82),Tl(3698,"code"),tN(3699,"caption-tag-20"),sg()(),Tl(3700,"li"),Gl(3701,"span",83),Tl(3702,"code"),tN(3703,"caption-tag-21"),sg(),Gl(3704,"span",84),Tl(3705,"code"),tN(3706,"caption-tag-22"),sg(),Gl(3707,"span",85),Tl(3708,"code"),tN(3709,"caption-tag-23"),sg(),Gl(3710,"span",86),Tl(3711,"code"),tN(3712,"caption-tag-24"),sg(),Gl(3713,"span",87),Tl(3714,"code"),tN(3715,"caption-tag-25"),sg()(),Tl(3716,"li"),Gl(3717,"span",88),Tl(3718,"code"),tN(3719,"caption-tag-26"),sg(),Gl(3720,"span",89),Tl(3721,"code"),tN(3722,"caption-tag-27"),sg(),Gl(3723,"span",90),Tl(3724,"code"),tN(3725,"caption-tag-28"),sg(),Gl(3726,"span",91),Tl(3727,"code"),tN(3728,"caption-tag-29"),sg(),Gl(3729,"span",92),Tl(3730,"code"),tN(3731,"caption-tag-30"),sg()(),Tl(3732,"li"),Gl(3733,"span",93),Tl(3734,"code"),tN(3735,"caption-tag-31"),sg(),Gl(3736,"span",94),Tl(3737,"code"),tN(3738,"caption-tag-32"),sg(),Gl(3739,"span",95),Tl(3740,"code"),tN(3741,"caption-tag-33"),sg(),Gl(3742,"span",96),Tl(3743,"code"),tN(3744,"caption-tag-34"),sg(),Gl(3745,"span",97),Tl(3746,"code"),tN(3747,"caption-tag-35"),sg()()(),Tl(3748,"p"),tN(3749,"Exemplo de uso:"),sg(),Tl(3750,"pre")(3751,"code"),tN(3752,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),sg()()()(),Tl(3753,"tr",17)(3754,"td",18)(3755,"div",19)(3756,"span",20),tN(3757," icon"),Gl(3758,"br"),sg()()(),Tl(3759,"td",21)(3760,"code",22),tN(3761,"boolean "),sg(),Tl(3762,"code",31),tN(3763," string "),sg(),Tl(3764,"code",46),tN(3765," TemplateRef<void>"),sg()(),Tl(3766,"td",24)(3767,"em")(3768,"strong"),tN(3769,"(opcional)"),sg()(),Tl(3770,"p"),tN(3771,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Tl(3772,"em"),tN(3773,"tag"),sg(),tN(3774,"."),sg(),Tl(3775,"p"),tN(3776,"Quando "),Tl(3777,"code"),tN(3778,"p-type"),sg(),tN(3779," estiver definida, basta informar um valor igual a "),Tl(3780,"code"),tN(3781,"true"),sg(),tN(3782," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),sg(),Tl(3783,"ul")(3784,"li"),Gl(3785,"span",105),tN(3786," - "),Tl(3787,"code"),tN(3788,"success"),sg()(),Tl(3789,"li"),Gl(3790,"span",106),tN(3791," - "),Tl(3792,"code"),tN(3793,"warning"),sg()(),Tl(3794,"li"),Gl(3795,"span",107),tN(3796," - "),Tl(3797,"code"),tN(3798,"danger"),sg()(),Tl(3799,"li"),Gl(3800,"span",108),tN(3801," - "),Tl(3802,"code"),tN(3803,"info"),sg()()(),Tl(3804,"p"),tN(3805,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(3806,"a",26),tN(3807,"Biblioteca de \xEDcones"),sg(),tN(3808,". conforme exemplo abaixo:"),sg(),Tl(3809,"pre")(3810,"code"),tN(3811,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),sg()(),Tl(3812,"p"),tN(3813,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(3814,"em"),tN(3815,"Font Awesome"),sg(),tN(3816,", da seguinte forma:"),sg(),Tl(3817,"pre")(3818,"code"),tN(3819,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),sg()(),Tl(3820,"p"),tN(3821,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(3822,"code"),tN(3823,"TemplateRef"),sg(),tN(3824,", conforme exemplo abaixo:"),sg(),Tl(3825,"pre")(3826,"code"),tN(3827,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(3828,"blockquote")(3829,"p"),tN(3830,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(3831,"code"),tN(3832,"font-size: inherit"),sg(),tN(3833," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(3834,"tr",17)(3835,"td",18)(3836,"div",19)(3837,"span",20),tN(3838," label"),Gl(3839,"br"),sg()()(),Tl(3840,"td",21)(3841,"code",31),tN(3842,"string"),sg()(),Tl(3843,"td",24)(3844,"p"),tN(3845,"Texto que ser\xE1 exibido na coluna."),sg()()(),Tl(3846,"tr",17)(3847,"td",18)(3848,"div",19)(3849,"span",20),tN(3850," textColor"),Gl(3851,"br"),sg()()(),Tl(3852,"td",21)(3853,"code",31),tN(3854,"string"),sg()(),Tl(3855,"td",24)(3856,"em")(3857,"strong"),tN(3858,"(opcional)"),sg()(),Tl(3859,"p"),tN(3860,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Tl(3861,"ul")(3862,"li")(3863,"p"),tN(3864,"Hexadeximal, por exemplo "),Tl(3865,"code"),tN(3866,"#c64840"),sg(),tN(3867,";"),sg()(),Tl(3868,"li")(3869,"p"),tN(3870,"RGB, como "),Tl(3871,"code"),tN(3872,"rgb(0, 0, 165)"),sg(),tN(3873,";"),sg()(),Tl(3874,"li")(3875,"p"),tN(3876,"O nome da cor, por exemplo "),Tl(3877,"code"),tN(3878,"blue"),sg(),tN(3879,";"),sg()(),Tl(3880,"li")(3881,"p"),tN(3882,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),sg(),Tl(3883,"ul")(3884,"li"),Gl(3885,"span",51),Tl(3886,"code"),tN(3887,"color-01"),sg()(),Tl(3888,"li"),Gl(3889,"span",52),Tl(3890,"code"),tN(3891,"color-02"),sg()(),Tl(3892,"li"),Gl(3893,"span",53),Tl(3894,"code"),tN(3895,"color-03"),sg()(),Tl(3896,"li"),Gl(3897,"span",54),Tl(3898,"code"),tN(3899,"color-04"),sg()(),Tl(3900,"li"),Gl(3901,"span",55),Tl(3902,"code"),tN(3903,"color-05"),sg()(),Tl(3904,"li"),Gl(3905,"span",56),Tl(3906,"code"),tN(3907,"color-06"),sg()(),Tl(3908,"li"),Gl(3909,"span",57),Tl(3910,"code"),tN(3911,"color-07"),sg()(),Tl(3912,"li"),Gl(3913,"span",58),Tl(3914,"code"),tN(3915,"color-08"),sg()(),Tl(3916,"li"),Gl(3917,"span",59),Tl(3918,"code"),tN(3919,"color-09"),sg()(),Tl(3920,"li"),Gl(3921,"span",60),Tl(3922,"code"),tN(3923,"color-10"),sg()(),Tl(3924,"li"),Gl(3925,"span",61),Tl(3926,"code"),tN(3927,"color-11"),sg()(),Tl(3928,"li"),Gl(3929,"span",62),Tl(3930,"code"),tN(3931,"color-12"),sg()()()(),Tl(3932,"li")(3933,"p"),tN(3934,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),sg()()(),Tl(3935,"blockquote")(3936,"p")(3937,"strong"),tN(3938,"Aten\xE7\xE3o:"),sg(),tN(3939," A propriedade "),Tl(3940,"code"),tN(3941,"p-type"),sg(),tN(3942," sobrep\xF5e esta defini\xE7\xE3o."),sg()(),Tl(3943,"blockquote")(3944,"p")(3945,"strong"),tN(3946,"Aten\xE7\xE3o:"),sg(),tN(3947," As cores da paleta "),Tl(3948,"strong"),tN(3949,"Caption Tag Colors"),sg(),tN(3950," ("),Tl(3951,"code"),tN(3952,"caption-tag-01"),sg(),tN(3953," a "),Tl(3954,"code"),tN(3955,"caption-tag-35"),sg(),tN(3956,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),sg()()()(),Tl(3957,"tr",17)(3958,"td",18)(3959,"div",19)(3960,"span",20),tN(3961," tooltip"),Gl(3962,"br"),sg()()(),Tl(3963,"td",21)(3964,"code",31),tN(3965,"string"),sg()(),Tl(3966,"td",24)(3967,"em")(3968,"strong"),tN(3969,"(opcional)"),sg()(),Tl(3970,"p"),tN(3971,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Tl(3972,"em"),tN(3973,"mouse"),sg(),tN(3974," em cima do "),Tl(3975,"em"),tN(3976,"label"),sg(),tN(3977,"."),sg(),Tl(3978,"blockquote")(3979,"p"),tN(3980,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),sg()()()(),Tl(3981,"tr",17)(3982,"td",18)(3983,"div",19)(3984,"span",20),tN(3985," type"),Gl(3986,"br"),sg()()(),Tl(3987,"td",21)(3988,"code",109),tN(3989,"PoTagType"),sg()(),Tl(3990,"td",24)(3991,"em")(3992,"strong"),tN(3993,"(opcional)"),sg()(),Tl(3994,"p"),tN(3995,"Define o tipo da "),Tl(3996,"em"),tN(3997,"tag"),sg(),tN(3998,"."),sg(),Tl(3999,"p"),tN(4e3,"Valores v\xE1lidos:"),sg(),Tl(4001,"ul")(4002,"li")(4003,"code"),tN(4004,"success"),sg(),tN(4005,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),sg(),Tl(4006,"li")(4007,"code"),tN(4008,"warning"),sg(),tN(4009,": cor amarela que representa aviso ou advert\xEAncia."),sg(),Tl(4010,"li")(4011,"code"),tN(4012,"danger"),sg(),tN(4013,": cor vermelha para erro ou aviso cr\xEDtico."),sg(),Tl(4014,"li")(4015,"code"),tN(4016,"info"),sg(),tN(4017,": cor cinza escuro que caracteriza conte\xFAdo informativo."),sg()(),Tl(4018,"blockquote")(4019,"p"),tN(4020,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Tl(4021,"code"),tN(4022,"p-color"),sg(),tN(4023," e "),Tl(4024,"code"),tN(4025,"p-icon"),sg(),tN(4026," somente ser\xE1 exibido caso seja "),Tl(4027,"code"),tN(4028,"true"),sg(),tN(4029,"."),sg()()()(),Tl(4030,"tr",17)(4031,"td",18)(4032,"div",19)(4033,"span",20),tN(4034," value"),Gl(4035,"br"),sg()()(),Tl(4036,"td",21)(4037,"code",31),tN(4038,"string "),sg(),Tl(4039,"code",35),tN(4040," number"),sg()(),Tl(4041,"td",24)(4042,"p"),tN(4043,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),sg()()()(),Tl(4044,"h4",44)(4045,"code",5),tN(4046,"PoTableDetailColumn"),sg()(),Tl(4047,"div",2)(4048,"p"),tN(4049,"Interface para configura\xE7\xE3o das colunas do "),Tl(4050,"code"),tN(4051,"po-table-detail"),sg(),tN(4052,"."),sg()(),Tl(4053,"h4",13),tN(4054,"Propriedades"),sg(),Tl(4055,"table",14)(4056,"tr",15)(4057,"th",16),tN(4058,"Nome"),sg(),Tl(4059,"th",16),tN(4060,"Tipo"),sg(),Tl(4061,"th",16),tN(4062,"Descri\xE7\xE3o"),sg()(),Tl(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),tN(4067," format"),Gl(4068,"br"),sg()()(),Tl(4069,"td",21)(4070,"code",31),tN(4071,"string"),sg()(),Tl(4072,"td",24)(4073,"em")(4074,"strong"),tN(4075,"(opcional)"),sg()(),Tl(4076,"p"),tN(4077,"Formato de exibi\xE7\xE3o do valor da coluna:"),sg(),Tl(4078,"ul")(4079,"li")(4080,"p"),tN(4081,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),sg()(),Tl(4082,"li")(4083,"p"),tN(4084,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg()(),Tl(4085,"li")(4086,"p"),tN(4087,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),sg()(),Tl(4088,"li")(4089,"p"),tN(4090,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),Tl(4091,"a",110)(4092,"strong"),tN(4093,"DecimalPipe"),sg()(),tN(4094," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),sg(),Tl(4095,"ul")(4096,"li"),tN(4097,"Valor de entrada: "),Tl(4098,"code"),tN(4099,"50"),sg(),tN(4100," e valor para formata\xE7\xE3o: "),Tl(4101,"code"),tN(4102,"'1.2-5'"),sg(),tN(4103," o resultado ser\xE1: "),Tl(4104,"code"),tN(4105,"50.00"),sg()()()()()()(),Tl(4106,"tr",17)(4107,"td",18)(4108,"div",19)(4109,"span",20),tN(4110," label"),Gl(4111,"br"),sg()()(),Tl(4112,"td",21)(4113,"code",31),tN(4114,"string"),sg()(),Tl(4115,"td",24)(4116,"em")(4117,"strong"),tN(4118,"(opcional)"),sg()(),Tl(4119,"p"),tN(4120,"Texto para t\xEDtulo da coluna."),sg()()(),Tl(4121,"tr",17)(4122,"td",18)(4123,"div",19)(4124,"span",20),tN(4125," property"),Gl(4126,"br"),sg()()(),Tl(4127,"td",21)(4128,"code",31),tN(4129,"string"),sg()(),Tl(4130,"td",24)(4131,"em")(4132,"strong"),tN(4133,"(opcional)"),sg()(),Tl(4134,"p"),tN(4135,"Nome identificador da coluna."),sg()()(),Tl(4136,"tr",17)(4137,"td",18)(4138,"div",19)(4139,"span",20),tN(4140," type"),Gl(4141,"br"),sg()()(),Tl(4142,"td",21)(4143,"code",31),tN(4144,"string"),sg()(),Tl(4145,"td",24)(4146,"em")(4147,"strong"),tN(4148,"(opcional)"),sg()(),Tl(4149,"p"),tN(4150,"Tipo da coluna."),sg(),Tl(4151,"p"),tN(4152,"Valores v\xE1lidos:"),sg(),Tl(4153,"ul")(4154,"li")(4155,"p")(4156,"code"),tN(4157,"currency"),sg(),tN(4158,": valores monet\xE1rios."),sg()(),Tl(4159,"li")(4160,"p")(4161,"code"),tN(4162,"date"),sg(),tN(4163,": valor de datas."),sg(),Tl(4164,"ul")(4165,"li"),tN(4166,"Aceita os tipos "),Tl(4167,"em"),tN(4168,"string"),sg(),tN(4169," e "),Tl(4170,"em"),tN(4171,"Date"),sg(),tN(4172,` padr\xE3o do Javascript,
por exemplo: `),Tl(4173,"code"),tN(4174,"'2017-11-28'"),sg(),tN(4175," ou "),Tl(4176,"code"),tN(4177,"new Date(2017, 10, 28)"),sg(),tN(4178,"."),sg()()(),Tl(4179,"li")(4180,"p")(4181,"code"),tN(4182,"time"),sg(),tN(4183,": valor de hor\xE1rio."),sg()(),Tl(4184,"li")(4185,"p")(4186,"code"),tN(4187,"number"),sg(),tN(4188,": valores num\xE9ricos."),sg()(),Tl(4189,"li")(4190,"p")(4191,"code"),tN(4192,"dateTime"),sg(),tN(4193,": valor de data com hor\xE1rio."),sg(),Tl(4194,"ul")(4195,"li"),tN(4196,"Aceita o tipo "),Tl(4197,"em"),tN(4198,"string"),sg(),tN(4199," no formato "),Tl(4200,"strong"),tN(4201,"ISO-8601"),sg(),tN(4202," extendido "),Tl(4203,"strong"),tN(4204,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),tN(4205,`
e o tipo `),Tl(4206,"em"),tN(4207,"Date"),sg(),tN(4208," padr\xE3o do Javascript, por exemplo: "),Tl(4209,"code"),tN(4210,"'2017-11-28T00:00:00-02:00'"),sg(),tN(4211," ou "),Tl(4212,"code"),tN(4213,"new Date(2017, 10, 28)"),sg(),tN(4214,"."),sg(),Tl(4215,"li"),tN(4216,"Aceita o tipo "),Tl(4217,"em"),tN(4218,"string"),sg(),tN(4219," nos formatos "),Tl(4220,"strong"),tN(4221,"'HH:mm:ss'"),sg(),tN(4222," ou "),Tl(4223,"strong"),tN(4224,"'HH:mm:ss.ffffff'"),sg(),tN(4225,", por exemplo: "),Tl(4226,"code"),tN(4227,"'23:12:45'"),sg(),tN(4228,"."),sg()()()()()()(),Tl(4229,"h4",44)(4230,"code",5),tN(4231,"PoTableDetail"),sg()(),Tl(4232,"div",2)(4233,"p"),tN(4234,"Interface para configura\xE7\xE3o do "),Tl(4235,"em"),tN(4236,"detail"),sg(),tN(4237," do componente "),Tl(4238,"code"),tN(4239,"po-table"),sg(),tN(4240,"."),sg()(),Tl(4241,"h4",13),tN(4242,"Propriedades"),sg(),Tl(4243,"table",14)(4244,"tr",15)(4245,"th",16),tN(4246,"Nome"),sg(),Tl(4247,"th",16),tN(4248,"Tipo"),sg(),Tl(4249,"th",16),tN(4250,"Descri\xE7\xE3o"),sg()(),Tl(4251,"tr",17)(4252,"td",18)(4253,"div",19)(4254,"span",20),tN(4255," columns"),Gl(4256,"br"),sg()()(),Tl(4257,"td",21)(4258,"code",111),tN(4259,"Array<PoTableDetailColumn>"),sg()(),Tl(4260,"td",24)(4261,"p"),tN(4262,"Define uma lista do tipo "),Tl(4263,"code"),tN(4264,"PoTableDetailColumn"),sg(),tN(4265," para as colunas do objet "),Tl(4266,"em"),tN(4267,"detail"),sg(),tN(4268,". Por exemplo:"),sg(),Tl(4269,"pre")(4270,"code"),tN(4271,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),sg()()()(),Tl(4272,"tr",17)(4273,"td",18)(4274,"div",19)(4275,"span",20),tN(4276," hideSelect"),Gl(4277,"br"),sg()()(),Tl(4278,"td",21)(4279,"code",22),tN(4280,"boolean"),sg()(),Tl(4281,"td",24)(4282,"em")(4283,"strong"),tN(4284,"(opcional)"),sg()(),Tl(4285,"p"),tN(4286,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),sg()()(),Tl(4287,"tr",17)(4288,"td",18)(4289,"div",19)(4290,"span",20),tN(4291," typeHeader"),Gl(4292,"br"),sg()()(),Tl(4293,"td",21)(4294,"code",31),tN(4295,"string"),sg()(),Tl(4296,"td",24)(4297,"em")(4298,"strong"),tN(4299,"(opcional)"),sg()(),Tl(4300,"p"),tN(4301,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),Tl(4302,"em"),tN(4303,"detail"),sg(),tN(4304," ."),sg(),Tl(4305,"p"),tN(4306,"Valores v\xE1lidos:"),sg(),Tl(4307,"ul")(4308,"li")(4309,"code"),tN(4310,"inline"),sg(),tN(4311,": Atribui o cabe\xE7alho na mesma linha do "),Tl(4312,"em"),tN(4313,"detail"),sg(),tN(4314,"."),sg(),Tl(4315,"li")(4316,"code"),tN(4317,"top"),sg(),tN(4318,": Atribui o cabe\xE7alho acima do "),Tl(4319,"em"),tN(4320,"detail"),sg(),tN(4321,", id\xEAntico ao "),Tl(4322,"code"),tN(4323,"po-table"),sg(),tN(4324,"."),sg(),Tl(4325,"li")(4326,"code"),tN(4327,"none"),sg(),tN(4328,": Remove o cabe\xE7alho do "),Tl(4329,"em"),tN(4330,"detail"),sg(),tN(4331,"."),sg()()()()(),Tl(4332,"h4",44)(4333,"code",5),tN(4334,"PoTableSubtitleColumn"),sg()(),Tl(4335,"div",2)(4336,"p"),tN(4337,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),sg()(),Tl(4338,"h4",13),tN(4339,"Propriedades"),sg(),Tl(4340,"table",14)(4341,"tr",15)(4342,"th",16),tN(4343,"Nome"),sg(),Tl(4344,"th",16),tN(4345,"Tipo"),sg(),Tl(4346,"th",16),tN(4347,"Descri\xE7\xE3o"),sg()(),Tl(4348,"tr",17)(4349,"td",18)(4350,"div",19)(4351,"span",20),tN(4352," color"),Gl(4353,"br"),sg()()(),Tl(4354,"td",21)(4355,"code",31),tN(4356,"string"),sg()(),Tl(4357,"td",24)(4358,"em")(4359,"strong"),tN(4360,"(opcional)"),sg()(),Tl(4361,"p"),tN(4362,"Define a cor do "),Tl(4363,"em"),tN(4364,"status"),sg(),tN(4365,"."),sg(),Tl(4366,"p"),tN(4367,"Valores v\xE1lidos:"),sg(),Tl(4368,"ul")(4369,"li"),Gl(4370,"span",51),Tl(4371,"code"),tN(4372,"color-01"),sg()(),Tl(4373,"li"),Gl(4374,"span",52),Tl(4375,"code"),tN(4376,"color-02"),sg()(),Tl(4377,"li"),Gl(4378,"span",53),Tl(4379,"code"),tN(4380,"color-03"),sg()(),Tl(4381,"li"),Gl(4382,"span",54),Tl(4383,"code"),tN(4384,"color-04"),sg()(),Tl(4385,"li"),Gl(4386,"span",55),Tl(4387,"code"),tN(4388,"color-05"),sg()(),Tl(4389,"li"),Gl(4390,"span",56),Tl(4391,"code"),tN(4392,"color-06"),sg()(),Tl(4393,"li"),Gl(4394,"span",57),Tl(4395,"code"),tN(4396,"color-07"),sg()(),Tl(4397,"li"),Gl(4398,"span",58),Tl(4399,"code"),tN(4400,"color-08"),sg()(),Tl(4401,"li"),Gl(4402,"span",59),Tl(4403,"code"),tN(4404,"color-09"),sg()(),Tl(4405,"li"),Gl(4406,"span",60),Tl(4407,"code"),tN(4408,"color-10"),sg()(),Tl(4409,"li"),Gl(4410,"span",61),Tl(4411,"code"),tN(4412,"color-11"),sg()(),Tl(4413,"li"),Gl(4414,"span",62),Tl(4415,"code"),tN(4416,"color-12"),sg()()(),Tl(4417,"blockquote")(4418,"p"),tN(4419,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(4420,"strong"),tN(4421,"Caption Tag Colors"),sg(),tN(4422,":"),sg()(),Tl(4423,"ul")(4424,"li"),Gl(4425,"span",63),Tl(4426,"code"),tN(4427,"caption-tag-01"),sg(),Gl(4428,"span",64),Tl(4429,"code"),tN(4430,"caption-tag-02"),sg(),Gl(4431,"span",65),Tl(4432,"code"),tN(4433,"caption-tag-03"),sg(),Gl(4434,"span",66),Tl(4435,"code"),tN(4436,"caption-tag-04"),sg(),Gl(4437,"span",67),Tl(4438,"code"),tN(4439,"caption-tag-05"),sg()(),Tl(4440,"li"),Gl(4441,"span",68),Tl(4442,"code"),tN(4443,"caption-tag-06"),sg(),Gl(4444,"span",69),Tl(4445,"code"),tN(4446,"caption-tag-07"),sg(),Gl(4447,"span",70),Tl(4448,"code"),tN(4449,"caption-tag-08"),sg(),Gl(4450,"span",71),Tl(4451,"code"),tN(4452,"caption-tag-09"),sg(),Gl(4453,"span",72),Tl(4454,"code"),tN(4455,"caption-tag-10"),sg()(),Tl(4456,"li"),Gl(4457,"span",73),Tl(4458,"code"),tN(4459,"caption-tag-11"),sg(),Gl(4460,"span",74),Tl(4461,"code"),tN(4462,"caption-tag-12"),sg(),Gl(4463,"span",75),Tl(4464,"code"),tN(4465,"caption-tag-13"),sg(),Gl(4466,"span",76),Tl(4467,"code"),tN(4468,"caption-tag-14"),sg(),Gl(4469,"span",77),Tl(4470,"code"),tN(4471,"caption-tag-15"),sg()(),Tl(4472,"li"),Gl(4473,"span",78),Tl(4474,"code"),tN(4475,"caption-tag-16"),sg(),Gl(4476,"span",79),Tl(4477,"code"),tN(4478,"caption-tag-17"),sg(),Gl(4479,"span",80),Tl(4480,"code"),tN(4481,"caption-tag-18"),sg(),Gl(4482,"span",81),Tl(4483,"code"),tN(4484,"caption-tag-19"),sg(),Gl(4485,"span",82),Tl(4486,"code"),tN(4487,"caption-tag-20"),sg()(),Tl(4488,"li"),Gl(4489,"span",83),Tl(4490,"code"),tN(4491,"caption-tag-21"),sg(),Gl(4492,"span",84),Tl(4493,"code"),tN(4494,"caption-tag-22"),sg(),Gl(4495,"span",85),Tl(4496,"code"),tN(4497,"caption-tag-23"),sg(),Gl(4498,"span",86),Tl(4499,"code"),tN(4500,"caption-tag-24"),sg(),Gl(4501,"span",87),Tl(4502,"code"),tN(4503,"caption-tag-25"),sg()(),Tl(4504,"li"),Gl(4505,"span",88),Tl(4506,"code"),tN(4507,"caption-tag-26"),sg(),Gl(4508,"span",89),Tl(4509,"code"),tN(4510,"caption-tag-27"),sg(),Gl(4511,"span",90),Tl(4512,"code"),tN(4513,"caption-tag-28"),sg(),Gl(4514,"span",91),Tl(4515,"code"),tN(4516,"caption-tag-29"),sg(),Gl(4517,"span",92),Tl(4518,"code"),tN(4519,"caption-tag-30"),sg()(),Tl(4520,"li"),Gl(4521,"span",93),Tl(4522,"code"),tN(4523,"caption-tag-31"),sg(),Gl(4524,"span",94),Tl(4525,"code"),tN(4526,"caption-tag-32"),sg(),Gl(4527,"span",95),Tl(4528,"code"),tN(4529,"caption-tag-33"),sg(),Gl(4530,"span",96),Tl(4531,"code"),tN(4532,"caption-tag-34"),sg(),Gl(4533,"span",97),Tl(4534,"code"),tN(4535,"caption-tag-35"),sg()()()()(),Tl(4536,"tr",17)(4537,"td",18)(4538,"div",19)(4539,"span",20),tN(4540," content"),Gl(4541,"br"),sg()()(),Tl(4542,"td",21)(4543,"code",31),tN(4544,"string"),sg()(),Tl(4545,"td",24)(4546,"p"),tN(4547,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),sg()()(),Tl(4548,"tr",17)(4549,"td",18)(4550,"div",19)(4551,"span",20),tN(4552," label"),Gl(4553,"br"),sg()()(),Tl(4554,"td",21)(4555,"code",31),tN(4556,"string"),sg()(),Tl(4557,"td",24)(4558,"p"),tN(4559,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),sg()()(),Tl(4560,"tr",17)(4561,"td",18)(4562,"div",19)(4563,"span",20),tN(4564," value"),Gl(4565,"br"),sg()()(),Tl(4566,"td",21)(4567,"code",31),tN(4568,"string "),sg(),Tl(4569,"code",35),tN(4570," number"),sg()(),Tl(4571,"td",24)(4572,"p"),tN(4573,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),sg()()()(),Tl(4574,"h3"),tN(4575,"Enums"),sg(),Tl(4576,"h4",4)(4577,"code",5),tN(4578,"PoTableColumnSortType"),sg()(),Tl(4579,"div",2)(4580,"p"),tN(4581,"Tipos de ordena\xE7\xE3o das colunas da tabela."),sg()(),Tl(4582,"h4",13),tN(4583,"Propriedades"),sg(),Tl(4584,"table",14)(4585,"tr",15)(4586,"th",16),tN(4587,"Nome"),sg(),Tl(4588,"th",16),tN(4589,"Descri\xE7\xE3o"),sg()(),Tl(4590,"tr",17)(4591,"td",18)(4592,"div",19)(4593,"span",20),tN(4594," Ascending"),Gl(4595,"br"),sg()()(),Tl(4596,"td",24)(4597,"p"),tN(4598,"Ordena\xE7\xE3o ascendente"),sg()()(),Tl(4599,"tr",17)(4600,"td",18)(4601,"div",19)(4602,"span",20),tN(4603," Descending"),Gl(4604,"br"),sg()()(),Tl(4605,"td",24)(4606,"p"),tN(4607,"Ordena\xE7\xE3o descendente"),sg()()()(),Tl(4608,"h4",4)(4609,"code",5),tN(4610,"PoTableColumnSpacing"),sg()(),Tl(4611,"div",2)(4612,"p"),tN(4613,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Tl(4614,"strong"),tN(4615,"p-spacing"),sg(),tN(4616,") do po-table."),sg()(),Tl(4617,"h4",13),tN(4618,"Propriedades"),sg(),Tl(4619,"table",14)(4620,"tr",15)(4621,"th",16),tN(4622,"Nome"),sg(),Tl(4623,"th",16),tN(4624,"Descri\xE7\xE3o"),sg()(),Tl(4625,"tr",17)(4626,"td",18)(4627,"div",19)(4628,"span",20),tN(4629," ExtraSmall"),Gl(4630,"br"),sg()()(),Tl(4631,"td",24)(4632,"p"),tN(4633,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),sg()()(),Tl(4634,"tr",17)(4635,"td",18)(4636,"div",19)(4637,"span",20),tN(4638," Small"),Gl(4639,"br"),sg()()(),Tl(4640,"td",24)(4641,"p"),tN(4642,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(4643,"tr",17)(4644,"td",18)(4645,"div",19)(4646,"span",20),tN(4647," Medium"),Gl(4648,"br"),sg()()(),Tl(4649,"td",24)(4650,"p"),tN(4651,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),tN(4656," Large"),Gl(4657,"br"),sg()()(),Tl(4658,"td",24)(4659,"p"),tN(4660,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return r})();var pt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(wn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-table-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),sg()()()),l&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,Je,Ke,Ze,tt,it,at,rt,st,dt],encapsulation:2})}return r})();var en=[{path:"",component:pt}],ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[vL.forChild(en),vL]})}return r})();var ai=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[ar,ct]})}return r})();export{ai as DocPoTableModule};