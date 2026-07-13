import {f as fe,u as ue$1,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,I,c$ as Xi,dv as Up,h as s,r as r$1,aW as Yp,c5 as Ode,dD as _h,b$ as IT,b,b7 as M3,L as Gl,O as nw,bs as mN,a7 as gN,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt$1,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,c8 as Tde,bH as k3,c9 as jhe,b6 as Yo,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,Q as we,av as Yl,aw as uo,ax as fo,cI as y3,b5 as Ghe,aJ as Whe,dE as jue,ba as vNe,a2 as JE,dF as WO,a4 as wN,cH as lN,a6 as IN,as as dN,dh as $ue,dj as BO,aQ as _x,aR as yx,aS as Dx,i as ib,a3 as sNe,aA as Nx,br as uN,J as yw,a5 as bN,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var ut=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Ge=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,a){l&1&&Gl(0,"po-table",0),l&2&&nw("p-items",mN(2,bt,gN(1,ut)));},dependencies:[M3],encapsulation:2,changeDetection:1})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table Basic"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-basic/sample-po-table-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-table-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,St,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ge],encapsulation:2,changeDetection:1})}return r})();var se=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(o){return {text:`Text ${o}`,page:`Link ${o}`,link:"https://po-ui.io/",number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],a=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59),m=o<10?"0"+o.toString():o.toString(),p=l<10?"0"+l.toString():l.toString(),d=a<10?"0"+a.toString():a.toString();return `${m}:${p}:${d}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xe=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=Xi.Medium;filterType=Up.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:Up.startsWith},{label:"Contains",value:Up.contains},{label:"Ends With",value:Up.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(o){this.event=o;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(o){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let o=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(o){this.height&&(this.items=o);}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=Xi.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(w(se))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,a){if(l&1&&Yl(Yo,7),l&2){let m;uo(m=fo())&&(a.poModal=m.first);}},standalone:false,features:[we([se])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,a){if(l&1){let m=Sx();Tl(0,"po-table",1),ht("p-all-selected",function(){return a.changeEvent("p-all-selected")})("p-all-unselected",function(){return a.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return a.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return a.changeEvent("p-collapsed")})("p-expanded",function(){return a.changeEvent("p-expanded")})("p-selected",function(){return a.changeEvent("p-selected")})("p-show-more",function(){return a.showMore()})("p-unselected",function(){return a.changeEvent("p-unselected")})("p-delete-items",function(d){return a.deleteItems(d)}),sg(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3),sg(),Gl(4,"po-divider"),Tl(5,"div",2)(6,"po-button",4),ht("p-click",function(){return a.addItem()}),sg()(),Gl(7,"po-divider"),Tl(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),ww("ngModelChange",function(d){return Ky(m),sN(a.columnsName,d)||(a.columnsName=d),Xy(d)}),ht("p-change",function(){return a.updateColumns()}),sg(),r0(),sg(),Tl(12,"div",2)(13,"po-radio-group",6),ww("ngModelChange",function(d){return Ky(m),sN(a.columnsDefinition.detail.detail.typeHeader,d)||(a.columnsDefinition.detail.detail.typeHeader=d),Xy(d)}),sg(),r0(),Tl(14,"po-switch",7),ww("ngModelChange",function(d){return Ky(m),sN(a.columnsDefinition.detail.detail.hideSelect,d)||(a.columnsDefinition.detail.detail.hideSelect=d),Xy(d)}),sg(),r0(),sg(),Tl(15,"div",2)(16,"po-checkbox-group",8),ww("ngModelChange",function(d){return Ky(m),sN(a.properties,d)||(a.properties=d),Xy(d)}),sg(),r0(),sg(),Tl(17,"div",2)(18,"po-checkbox-group",9),ww("ngModelChange",function(d){return Ky(m),sN(a.actionsDefinition,d)||(a.actionsDefinition=d),Xy(d)}),ht("p-change",function(){return a.changeActionOptions()}),sg(),r0(),sg(),Tl(19,"div",2)(20,"po-radio-group",10),ww("ngModelChange",function(d){return Ky(m),sN(a.spacing,d)||(a.spacing=d),Xy(d)}),sg(),r0(),sg(),Tl(21,"div",2)(22,"po-checkbox-group",11),ww("ngModelChange",function(d){return Ky(m),sN(a.selection,d)||(a.selection=d),Xy(d)}),ht("p-change",function(){return a.changeSelectionOptions()}),sg(),r0(),Tl(23,"po-radio-group",12),ww("ngModelChange",function(d){return Ky(m),sN(a.filterType,d)||(a.filterType=d),Xy(d)}),sg(),r0(),Tl(24,"po-radio-group",13),ww("ngModelChange",function(d){return Ky(m),sN(a.componentsSize,d)||(a.componentsSize=d),Xy(d)}),sg(),r0(),sg(),Tl(25,"div",2)(26,"po-input",14),ww("ngModelChange",function(d){return Ky(m),sN(a.literals,d)||(a.literals=d),Xy(d)}),ht("p-change",function(){return a.changeLiterals()}),sg(),r0(),Tl(27,"po-input",15),ww("ngModelChange",function(d){return Ky(m),sN(a.filteredColumns,d)||(a.filteredColumns=d),Xy(d)}),ht("p-change",function(){return a.changeFilteredColumns()}),sg(),r0(),Tl(28,"po-number",16),ww("ngModelChange",function(d){return Ky(m),sN(a.height,d)||(a.height=d),Xy(d)}),sg(),r0(),Tl(29,"po-number",17),ww("ngModelChange",function(d){return Ky(m),sN(a.maxColumns,d)||(a.maxColumns=d),Xy(d)}),sg(),r0(),sg(),Tl(30,"div",2)(31,"po-button",18),ht("p-click",function(){return a.restore()}),sg()()(),Tl(32,"po-modal",19),Gl(33,"po-info",20),sg();}l&2&&(nw("p-actions",a.actions)("p-actions-right",a.properties.includes("actionsRight"))("p-columns",a.columns)("p-container",a.container)("p-height",a.height)("p-filter-type",a.filterType)("p-components-size",a.componentsSize)("p-hide-detail",a.properties.includes("hideDetail"))("p-hide-columns-manager",a.properties.includes("hideColumnsManager"))("p-hide-batch-actions",a.properties.includes("hideBatchActions"))("p-hide-table-search",a.properties.includes("hideTableSearch"))("p-hide-select-all",a.selection.includes("hideSelectAll"))("p-items",a.items)("p-literals",a.customLiterals)("p-filtered-columns",a.filteredColumns)("p-loading",a.properties.includes("loading"))("p-max-columns",a.maxColumns)("p-selectable",a.selection.includes("selectable"))("p-spacing",a.spacing)("p-loading-show-more",a.properties.includes("loadingShowMore"))("p-show-more-disabled",a.properties.includes("showMoreDisabled"))("p-single-select",a.selection.includes("singleSelect"))("p-sort",a.properties.includes("sort"))("p-striped",a.properties.includes("striped"))("p-virtual-scroll",a.properties.includes("virtualScroll"))("p-auto-collapse",a.properties.includes("autoCollapse"))("p-draggable",a.properties.includes("draggable"))("p-hide-action-fixed-columns",a.properties.includes("fixed")),Vp(3),nw("p-value",a.event),Vp(8),Ew("ngModel",a.columnsName),nw("p-options",a.columnsOptions),o0(),Vp(2),Ew("ngModel",a.columnsDefinition.detail.detail.typeHeader),nw("p-options",a.typeHeaderOptions),o0(),Vp(),Ew("ngModel",a.columnsDefinition.detail.detail.hideSelect),o0(),Vp(2),Ew("ngModel",a.properties),nw("p-options",a.propertiesOptions),o0(),Vp(2),Ew("ngModel",a.actionsDefinition),nw("p-options",a.actionsDefinitionOptions),o0(),Vp(2),Ew("ngModel",a.spacing),nw("p-options",a.typeSpacing),o0(),Vp(2),Ew("ngModel",a.selection),nw("p-options",a.selectionOptions),o0(),Vp(),Ew("ngModel",a.filterType),nw("p-options",a.filterModeOptions),o0(),Vp(),Ew("ngModel",a.componentsSize),nw("p-options",a.componentsSizeOptions),o0(),Vp(2),Ew("ngModel",a.literals),o0(),Vp(),Ew("ngModel",a.filteredColumns),o0(),Vp(),Ew("ngModel",a.height),o0(),Vp(),Ew("ngModel",a.maxColumns),o0(),Vp(4),nw("p-value",a.currentItem));},dependencies:[oY,nY,rY,Sk,Ck,Qt$1,mv,b3,L3,Bhe,Tde,k3,jhe,Yo,M3],encapsulation:2,changeDetection:1})}return r})();var vt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table Labs"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-labs/sample-po-table-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-table
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-labs"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,vt,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Xe],encapsulation:2,changeDetection:1})}return r})();var Ct=["table"],Ze=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r$1({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(o){this.sampleService=o;}onChangeColumns(o){try{this.columns=JSON.parse(o);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,a){if(l&1&&Yl(Ct,5),l&2){let m;uo(m=fo())&&(a.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,a){if(l&1){let m=Sx();Tl(0,"div",1)(1,"po-input",2),ww("ngModelChange",function(d){return Ky(m),sN(a.service,d)||(a.service=d),Xy(d)}),ht("p-change",function(){return a.changeService(a.service)}),sg(),r0(),sg(),Tl(2,"div",1),Gl(3,"po-divider",3),Tl(4,"po-textarea",4),ww("ngModelChange",function(d){return Ky(m),sN(a.stringColumns,d)||(a.stringColumns=d),Xy(d)}),ht("p-change",function(d){return a.onChangeColumns(d)}),sg(),r0(),sg(),Tl(5,"div",1),Gl(6,"po-divider",5),Tl(7,"po-input",6),ww("ngModelChange",function(d){return Ky(m),sN(a.key,d)||(a.key=d),Xy(d)}),sg(),r0(),Tl(8,"po-input",7),ww("ngModelChange",function(d){return Ky(m),sN(a.value,d)||(a.value=d),Xy(d)}),sg(),r0(),sg(),Tl(9,"div",1)(10,"po-button",8),ht("p-click",function(){return a.addFilter(a.key,a.value)}),sg()(),Tl(11,"div",1)(12,"po-disclaimer-group",9),ht("p-remove",function(d){return a.removeItem(d)})("p-remove-all",function(){return a.removeAllItems()}),sg()(),Tl(13,"div",1),Gl(14,"po-table",10,0),sg();}l&2&&(Vp(),Ew("ngModel",a.service),o0(),Vp(3),Ew("ngModel",a.stringColumns),nw("p-rows",5),o0(),Vp(3),Ew("ngModel",a.key),o0(),Vp(),Ew("ngModel",a.value),o0(),Vp(2),nw("p-disabled",!a.key||!a.value),Vp(2),nw("p-disclaimers",a.filters),Vp(2),nw("p-columns",a.columns)("p-service-api",a.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[nY,Sk,Qt$1,y3,mv,L3,Ghe,M3],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ye=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table using API"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-table-with-api"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Tt,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Ze],encapsulation:2,changeDetection:1})}return r})();var de=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),a=o<10?"0"+o.toString():o.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${a}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function wt(r,J){if(r&1){let o=Sx();Tl(0,"po-widget",2)(1,"div",3)(2,"po-select",4),ww("ngModelChange",function(a){let m=Ky(o).$implicit;return sN(m.status,a)||(m.status=a),Xy(a)}),sg(),r0(),sg(),Tl(3,"div",3),Gl(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),sg()();}if(r&2){let o=J.$implicit,l=Nx();nw("p-title",uN("Transport detail ",o.code)),Vp(2),Ew("ngModel",o.status),nw("p-options",l.statusOptions),o0(),Vp(2),nw("p-value",o.batch_product),Vp(),nw("p-value",o.driver),Vp(),nw("p-value",o.license_plate);}}var et=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(o){this.transportService=o;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(o,l){return o.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([de])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,a){l&1&&(Tl(0,"po-table",0),JE(1,wt,7,7,"ng-template",1),sg()),l&2&&(nw("p-auto-collapse",true)("p-columns",a.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",a.items)("p-sort",true)("p-striped",true),Vp(),nw("p-table-row-template-arrow-direction","right")("p-table-row-template-show",a.isUndelivered));},dependencies:[nY,Sk,Whe,jhe,M3,jue,vNe],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table - Transport"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-transport/sample-po-table-transport.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-table
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-transport"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,At,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,et],encapsulation:2,changeDetection:1})}return r})();var pe=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var nt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(a=>s(r$1({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(o,l){let a=localStorage.getItem("initial-columns").split(","),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}});}confirmItems(o){o.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(o){o.value&&(this.total-=o.value);}deleteItems(o){this.items=o;}details(o){this.detail=o,this.poModal.open();}remove(o){this.poTable.removeItem(o);}discount(o){if(!o.disableDiscount){let l=s(r$1({},o),{value:o.value-o.value*.2,disableDiscount:true});this.poTable.updateItem(o,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(o){o.value&&(this.total+=o.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(o){localStorage.setItem("initial-columns",o);}getDescription(o){return `Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(pe),w(Yp),w(Ode))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,a){if(l&1&&Yl(Yo,7)(M3,7),l&2){let m;uo(m=fo())&&(a.poModal=m.first),uo(m=fo())&&(a.poTable=m.first);}},standalone:false,features:[we([pe,Ode])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,a){l&1&&(Tl(0,"div",0),iN(1,"Choose one or more promotional airfares"),sg(),Gl(2,"po-divider"),Tl(3,"po-table",1),ht("p-collapsed",function(){return a.onCollapseDetail()})("p-expanded",function(){return a.onExpandDetail()})("p-selected",function(p){return a.sumTotal(p)})("p-unselected",function(p){return a.decreaseTotal(p)})("p-change-visible-columns",function(p){return a.changeColumnVisible(p)})("p-restore-column-manager",function(){return a.restoreColumn()})("p-delete-items",function(p){return a.deleteItems(p)}),sg(),Gl(4,"po-divider")(5,"po-info",2),wN(6,"currency"),Gl(7,"po-info",3),Tl(8,"div",4)(9,"po-button",5),ht("p-click",function(){return a.addToCart()}),sg(),Tl(10,"po-button",6),ht("p-click",function(){return a.expandAll()}),sg(),Tl(11,"po-button",7),ht("p-click",function(){return a.collapseAll()}),sg()(),Tl(12,"po-modal",8),Gl(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),sg()),l&2&&(Vp(3),nw("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",a.actions)("p-columns",a.columns)("p-items",a.items)("p-max-columns",7)("p-virtual-scroll",false),Vp(2),nw("p-value",lN(IN(6,21,a.total,"USD"))),Vp(2),nw("p-value",a.totalExpanded),Vp(5),nw("p-title",dN("",a.detail?.destination," - ",a.detail?.country)),Vp(),nw("p-value",a.detail==null?null:a.detail.airline),Vp(),nw("p-value",a.detail==null?null:a.detail.initials),Vp(),nw("p-value",a.detail==null?null:a.detail.class));},dependencies:[Qt$1,mv,jhe,Yo,M3,WO],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table - Airfare"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-airfare"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ft,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,nt],encapsulation:2,changeDetection:1})}return r})();var z=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(z||{});var ce=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(o,l=false){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(".").length>1){let d=m.split(".")[0],xe=m.split(".")[1];return o[d][xe]<l[d][xe]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}else return o[m]<l[m]?p===_h.Ascending?-1:1:p===_h.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,J){if(r&1&&(Tl(0,"div"),iN(1),wN(2,"uppercase"),sg()),r&2){let o=J.$implicit;qx(uN("badge ",o)),Vp(),yw(bN(2,4,o));}}function Rt(r,J){if(r&1&&(Tl(0,"ul")(1,"li",4),iN(2),sg(),Gl(3,"po-divider"),sg()),r&2){let o=J.$implicit;Vp(2),yw(o);}}var at=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:z.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:z.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:z.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(o,l)=>{this.extras(o,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(o,l){this.sampleComponents=o,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(o){return o?.component?.status===z.Experimental?"caption-tag-08":"caption-tag-13"}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open();}goToDocumentation(o){this.router.navigate([o?.component?.link]);}showMore(o){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=false;},4e3);}sort(o){this.items=this.getItems(o);}showAlert(o){alert(o);}canGoToDocumentation(o){return o?.component?.status!==z.Stable}canShowExtras(o){return o?.component?.status!==z.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite;}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(w(ce),w(wn))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,a){if(l&1&&Yl(Yo,7),l&2){let m;uo(m=fo())&&(a.poModal=m.first);}},standalone:false,features:[we([ce])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,a){l&1&&(Tl(0,"div",0),iN(1,"PO UI Library"),sg(),Gl(2,"po-divider"),Tl(3,"po-table",1),ht("p-show-more",function(p){return a.showMore(p)})("p-sort-by",function(p){return a.sort(p)}),JE(4,Bt,3,6,"ng-template",2),sg(),Tl(5,"po-modal",3),_x(6,Rt,4,1,"ul",null,yx),sg()),l&2&&(Vp(3),nw("p-loading-show-more",a.isLoading)("p-columns",a.columns)("p-items",a.items)("p-show-more-disabled",a.showMoreDisabled)("p-sort",true),Vp(),nw("p-property","component.type"),Vp(),nw("p-title",dN("",a.title," - ",a.extraInformation?.component)),Vp(),Dx(a.extraInformation?.extras));},dependencies:[mv,Yo,M3,$ue,BO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var Nt=r=>({"docs-sample-code-tabs":r}),ot=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table - Po Field Components"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-components/sample-po-table-components.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-components/sample-po-table-components.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-table-components/sample-po-table-components.enum.ts"),sg(),Tl(23,"pre",9),iN(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),sg(),Tl(25,"label",6),iN(26,"sample-po-table-components/sample-po-table-components.service.ts"),sg(),Tl(27,"pre",9),iN(28,`import { Injectable } from '@angular/core';

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
`),sg()()(),Tl(29,"po-tab",10)(30,"div")(31,"label",6),iN(32,"sample-po-table-components/sample-po-table-components.component.css"),sg(),Tl(33,"pre",11),iN(34,`.badge {
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
`),sg()()()()(),Tl(35,"div",12),Gl(36,"sample-po-table-components"),sg(),Gl(37,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Nt,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,at],encapsulation:2,changeDetection:1})}return r})();var ue=(()=>{class r{http;constructor(o){this.http=o;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(IT("items"))}static \u0275fac=function(l){return new(l||r)(b(ib))};static \u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=["POItemsOri"],Wt=["POItemsSelected"],lt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)});}changeOptions(o,l){if(l==="new")this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else {let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(o){this.items=o,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(w(ue))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,a){if(l&1&&Yl(jt,7)(Wt,7),l&2){let m;uo(m=fo())&&(a.poItemsOri=m.first),uo(m=fo())&&(a.poItemsSelected=m.first);}},standalone:false,features:[we([ue])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,a){l&1&&(Tl(0,"div",2)(1,"div",3)(2,"div",4),iN(3,"Choose one or more heroes for your team"),sg(),Tl(4,"po-table",5,0),ht("p-selected",function(p){return a.changeOptions(p,"new")})("p-unselected",function(p){return a.changeOptions(p,"change")})("p-delete-items",function(p){return a.deleteItems(p)}),sg()(),Tl(6,"div",3)(7,"div",4),iN(8,"Here your chosen heroes"),sg(),Gl(9,"po-table",6,1),sg()()),l&2&&(Vp(4),nw("p-columns",a.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",a.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Vp(5),nw("p-columns",a.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",a.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[M3],encapsulation:2,changeDetection:1})}return r})();var Qt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table - Heroes"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row po-pb-2">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-table-heroes"),sg(),Gl(27,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Qt,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,lt],encapsulation:2,changeDetection:1})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),$t=r=>[r],mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,a){l&1&&(Tl(0,"div",0),iN(1,` Choose one column and drag to another horizontal position in the table and drop
`),sg(),Gl(2,"po-divider")(3,"po-table",1)),l&2&&(Vp(3),nw("p-items",mN(5,$t,gN(4,Jt)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[mv,M3],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Table Drag and Drop"),sg(),Tl(4,"a",2),ht("click",function(){return a.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-table-draggable"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+a.sampleCodeButtonIcon),Vp(),fg(" ",a.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Kt,a.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,mt],encapsulation:2,changeDetection:1})}return r})();var dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4775,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,a){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoTableModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-table"),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoTableComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),sg(),Tl(15,"p"),iN(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Tl(17,"strong"),iN(18,"Carregar mais resultados"),sg(),iN(19,"."),sg(),Tl(20,"blockquote")(21,"p"),iN(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),Tl(23,"a",6)(24,"code"),iN(25,"p-table-row-template"),sg()(),iN(26,"."),sg()(),Tl(27,"blockquote")(28,"p"),iN(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),Tl(30,"a",7)(31,"code"),iN(32,"p-table-column-template"),sg()(),iN(33,`
e `),Tl(34,"a",8)(35,"code"),iN(36,"p-table-cell-template"),sg()(),iN(37,"."),sg()(),Tl(38,"p"),iN(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),sg(),Tl(40,"p"),iN(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),Tl(42,"em"),iN(43,"scroll"),sg(),iN(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),sg(),Tl(45,"h4"),iN(46,"Tokens customiz\xE1veis"),sg(),Tl(47,"p"),iN(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(49,"blockquote")(50,"p"),iN(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(52,"a",9),iN(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(54,"."),sg()(),Tl(55,"table")(56,"thead")(57,"tr")(58,"th"),iN(59,"Propriedade"),sg(),Tl(60,"th"),iN(61,"Descri\xE7\xE3o"),sg(),Tl(62,"th"),iN(63,"Valor Padr\xE3o"),sg()()(),Tl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),iN(68,"Default Values"),sg()(),Gl(69,"td")(70,"td"),sg(),Tl(71,"tr")(72,"td")(73,"code"),iN(74,"--font-family"),sg()(),Tl(75,"td"),iN(76,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(77,"td")(78,"code"),iN(79,"var(--font-family-theme)"),sg()()(),Tl(80,"tr")(81,"td")(82,"code"),iN(83,"--background-color"),sg()(),Tl(84,"td"),iN(85,"Cor de background"),sg(),Tl(86,"td")(87,"code"),iN(88,"var(--color-neutral-light-00)"),sg()()(),Tl(89,"tr")(90,"td")(91,"code"),iN(92,"--color"),sg()(),Tl(93,"td"),iN(94,"Cor principal da table"),sg(),Tl(95,"td")(96,"code"),iN(97,"var(--color-neutral-dark-95)"),sg()()(),Tl(98,"tr")(99,"td")(100,"code"),iN(101,"--background-striped-color"),sg()(),Tl(102,"td"),iN(103,"Cor do background quando striped"),sg(),Tl(104,"td")(105,"code"),iN(106,"var(--color-neutral-light-05)"),sg()()(),Tl(107,"tr")(108,"td")(109,"code"),iN(110,"--color-line"),sg()(),Tl(111,"td"),iN(112,"Cor das linhas"),sg(),Tl(113,"td")(114,"code"),iN(115,"var(--color-neutral-mid-40)"),sg()()(),Tl(116,"tr")(117,"td")(118,"strong"),iN(119,"Hover"),sg()(),Gl(120,"td")(121,"td"),sg(),Tl(122,"tr")(123,"td")(124,"code"),iN(125,"--color-hover"),sg()(),Tl(126,"td"),iN(127,"Cor principal no estado hover"),sg(),Tl(128,"td")(129,"code"),iN(130,"var(--color-action-hover)"),sg()()(),Tl(131,"tr")(132,"td")(133,"code"),iN(134,"--background-color-hover"),sg()(),Tl(135,"td"),iN(136,"Cor de background no estado hover"),sg(),Tl(137,"td")(138,"code"),iN(139,"var(--color-brand-01-lighter)"),sg()()(),Tl(140,"tr")(141,"td")(142,"strong"),iN(143,"Focused"),sg()(),Gl(144,"td")(145,"td"),sg(),Tl(146,"tr")(147,"td")(148,"code"),iN(149,"--outline-color-focused"),sg()(),Tl(150,"td"),iN(151,"Cor do outline do estado de focus"),sg(),Tl(152,"td")(153,"code"),iN(154,"var(--color-action-focus)"),sg()()(),Tl(155,"tr")(156,"td")(157,"strong"),iN(158,"Disabled"),sg()(),Gl(159,"td")(160,"td"),sg(),Tl(161,"tr")(162,"td")(163,"code"),iN(164,"--color-disabled"),sg()(),Tl(165,"td"),iN(166,"Cor principal no estado disabled"),sg(),Tl(167,"td")(168,"code"),iN(169,"var(--color-neutral-mid-40)"),sg()()(),Tl(170,"tr")(171,"td")(172,"strong"),iN(173,"Headline"),sg()(),Gl(174,"td")(175,"td"),sg(),Tl(176,"tr")(177,"td")(178,"code"),iN(179,"--background-color-headline"),sg(),iN(180," \xA0"),sg(),Tl(181,"td"),iN(182,"Cor do cabe\xE7alho"),sg(),Tl(183,"td")(184,"code"),iN(185,"var(--color-neutral-light-10)"),sg()()(),Tl(186,"tr")(187,"td")(188,"code"),iN(189,"--font-weight-headline"),sg()(),Tl(190,"td"),iN(191,"Peso da fonte do cabe\xE7alho"),sg(),Tl(192,"td")(193,"code"),iN(194,"var(--font-weight-bold)"),sg()()(),Tl(195,"tr")(196,"td")(197,"strong"),iN(198,"Selected"),sg()(),Gl(199,"td")(200,"td"),sg(),Tl(201,"tr")(202,"td")(203,"code"),iN(204,"--background-color-selected"),sg(),iN(205,"\xA0"),sg(),Tl(206,"td"),iN(207,"Cor de background no estado de selecionado"),sg(),Tl(208,"td")(209,"code"),iN(210,"var(--color-brand-01-lightest)"),sg()()(),Tl(211,"tr")(212,"td")(213,"strong"),iN(214,"Actived"),sg()(),Gl(215,"td")(216,"td"),sg(),Tl(217,"tr")(218,"td")(219,"code"),iN(220,"--color-actived"),sg()(),Tl(221,"td"),iN(222,"Cor do texto no estado de selecionado"),sg(),Tl(223,"td")(224,"code"),iN(225,"var(--color-neutral-dark-90)"),sg()()(),Tl(226,"tr")(227,"td")(228,"code"),iN(229,"--background-color-actived"),sg()(),Tl(230,"td"),iN(231,"Cor de background no estado de selecionado"),sg(),Tl(232,"td")(233,"code"),iN(234,"var(--color-brand-01-light)"),sg()()()()()(),Tl(235,"div",10)(236,"h4",11),iN(237,"Seletor"),sg(),Tl(238,"pre",12),iN(239,`<po-table
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
`),sg()(),Tl(240,"h4",13),iN(241,"Propriedades"),sg(),Tl(242,"table",14)(243,"tr",15)(244,"th",16),iN(245,"Nome"),sg(),Tl(246,"th",16),iN(247,"Tipo"),sg(),Tl(248,"th",16),iN(249,"Padr\xE3o"),sg(),Tl(250,"th",16),iN(251,"Descri\xE7\xE3o"),sg()(),Tl(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),iN(256," p-actions-right"),Gl(257,"br"),sg()()(),Tl(258,"td",21)(259,"code",22),iN(260,"boolean"),sg()(),Tl(261,"td",23)(262,"p")(263,"code"),iN(264,"false"),sg()()(),Tl(265,"td",24)(266,"em")(267,"strong"),iN(268,"(opcional)"),sg()(),Tl(269,"p"),iN(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),sg()()(),Tl(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),iN(275," p-actions"),Gl(276,"br"),sg()()(),Tl(277,"td",21)(278,"code",25),iN(279,"PoTableAction[]"),sg()(),Tl(280,"td",23),iN(281,"-"),sg(),Tl(282,"td",24)(283,"em")(284,"strong"),iN(285,"(opcional)"),sg()(),Tl(286,"p"),iN(287,"Define uma lista de a\xE7\xF5es."),sg(),Tl(288,"p"),iN(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Tl(290,"a",26)(291,"strong"),iN(292,"an an-dots-three"),sg()(),iN(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),sg(),Tl(294,"p")(295,"strong"),iN(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),sg()(),Tl(297,"ul")(298,"li"),iN(299,"a lista conter valores inv\xE1lidos ou indefinidos."),sg(),Tl(300,"li"),iN(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),sg()()()(),Tl(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),iN(306," (p-all-selected)"),Gl(307,"br"),sg()()(),Tl(308,"td",21)(309,"code",29),iN(310,"EventEmitter"),sg()(),Tl(311,"td",23),iN(312,"-"),sg(),Tl(313,"td",24)(314,"em")(315,"strong"),iN(316,"(opcional)"),sg()(),Tl(317,"p"),iN(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),Tl(319,"em"),iN(320,"checkbox"),sg(),iN(321," que seleciona todas as linhas."),sg()()(),Tl(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),iN(326," (p-all-unselected)"),Gl(327,"br"),sg()()(),Tl(328,"td",21)(329,"code",29),iN(330,"EventEmitter"),sg()(),Tl(331,"td",23),iN(332,"-"),sg(),Tl(333,"td",24)(334,"em")(335,"strong"),iN(336,"(opcional)"),sg()(),Tl(337,"p"),iN(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),Tl(339,"em"),iN(340,"checkbox"),sg(),iN(341," que seleciona todas as linhas."),sg()()(),Tl(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),iN(346," p-auto-collapse"),Gl(347,"br"),sg()()(),Tl(348,"td",21)(349,"code",22),iN(350,"boolean"),sg()(),Tl(351,"td",23)(352,"p")(353,"code"),iN(354,"false"),sg()()(),Tl(355,"td",24)(356,"em")(357,"strong"),iN(358,"(opcional)"),sg()(),Tl(359,"p"),iN(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),sg()()(),Tl(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),iN(365," (p-change-fixed-columns)"),Gl(366,"br"),sg()()(),Tl(367,"td",21)(368,"code",29),iN(369,"EventEmitter"),sg()(),Tl(370,"td",23),iN(371,"-"),sg(),Tl(372,"td",24)(373,"em")(374,"strong"),iN(375,"(opcional)"),sg()(),Tl(376,"p"),iN(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),sg(),Tl(378,"p"),iN(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),sg(),Tl(380,"blockquote")(381,"p"),iN(382,"Incompat\xEDvel com "),Tl(383,"code"),iN(384,"p-hide-action-fixed-columns"),sg(),iN(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),sg()()()(),Tl(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),iN(390," (p-change-visible-columns)"),Gl(391,"br"),sg()()(),Tl(392,"td",21)(393,"code",29),iN(394,"EventEmitter"),sg()(),Tl(395,"td",23),iN(396,"-"),sg(),Tl(397,"td",24)(398,"em")(399,"strong"),iN(400,"(opcional)"),sg()(),Tl(401,"p"),iN(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(403,"p"),iN(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),iN(409," (p-collapsed)"),Gl(410,"br"),sg()()(),Tl(411,"td",21)(412,"code",29),iN(413,"EventEmitter"),sg()(),Tl(414,"td",23),iN(415,"-"),sg(),Tl(416,"td",24)(417,"em")(418,"strong"),iN(419,"(opcional)"),sg()(),Tl(420,"p"),iN(421,"Evento executado ao colapsar uma linha do "),Tl(422,"code"),iN(423,"po-table"),sg(),iN(424,"."),sg(),Tl(425,"blockquote")(426,"p"),iN(427,"Como par\xE2metro o componente envia o item colapsado."),sg()()()(),Tl(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),iN(432," (p-restore-column-manager)"),Gl(433,"br"),sg()()(),Tl(434,"td",21)(435,"code",29),iN(436,"EventEmitter"),sg()(),Tl(437,"td",23),iN(438,"-"),sg(),Tl(439,"td",24)(440,"em")(441,"strong"),iN(442,"(opcional)"),sg()(),Tl(443,"p"),iN(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(445,"p"),iN(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg()()(),Tl(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),iN(451," p-columns"),Gl(452,"br"),sg()()(),Tl(453,"td",21)(454,"code",30),iN(455,"PoTableColumn[]"),sg()(),Tl(456,"td",23),iN(457,"-"),sg(),Tl(458,"td",24)(459,"em")(460,"strong"),iN(461,"(opcional)"),sg()(),Tl(462,"p"),iN(463,"Lista das colunas da tabela, deve receber um "),Tl(464,"em"),iN(465,"array"),sg(),iN(466," de objetos que implementam a interface "),Tl(467,"code"),iN(468,"PoTableColumn"),sg(),iN(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),sg(),Tl(470,"blockquote")(471,"p"),iN(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),sg()()()(),Tl(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),iN(477," p-components-size"),Gl(478,"br"),sg()()(),Tl(479,"td",21)(480,"code",31),iN(481,"string"),sg()(),Tl(482,"td",23)(483,"p")(484,"code"),iN(485,"medium"),sg()()(),Tl(486,"td",24)(487,"em")(488,"strong"),iN(489,"(opcional)"),sg()(),Tl(490,"p"),iN(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),sg(),Tl(492,"ul")(493,"li")(494,"code"),iN(495,"small"),sg(),iN(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(497,"li")(498,"code"),iN(499,"medium"),sg(),iN(500,": aplica a medida medium de cada componente."),sg()(),Tl(501,"blockquote")(502,"p"),iN(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(504,"code"),iN(505,"medium"),sg(),iN(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(507,"a",32),iN(508,"po-theme"),sg(),iN(509,"."),sg()()()(),Tl(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),iN(514," p-container"),Gl(515,"br"),sg()()(),Tl(516,"td",21)(517,"code",31),iN(518,"string"),sg()(),Tl(519,"td",23)(520,"p")(521,"code"),iN(522,"border"),sg()()(),Tl(523,"td",24)(524,"em")(525,"strong"),iN(526,"(opcional)"),sg()(),Tl(527,"p"),iN(528,"Adiciona um contorno arredondado ao "),Tl(529,"code"),iN(530,"po-table"),sg(),iN(531,", as op\xE7\xF5es s\xE3o:"),sg(),Tl(532,"ul")(533,"li")(534,"code"),iN(535,"border"),sg(),iN(536,": com bordas/linhas."),sg(),Tl(537,"li")(538,"code"),iN(539,"shadow"),sg(),iN(540,": com sombras."),sg()()()(),Tl(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),iN(545," p-draggable"),Gl(546,"br"),sg()()(),Tl(547,"td",21)(548,"code",22),iN(549,"boolean"),sg()(),Tl(550,"td",23)(551,"p")(552,"code"),iN(553,"false"),sg()()(),Tl(554,"td",24)(555,"em")(556,"strong"),iN(557,"(opcional)"),sg()(),Tl(558,"p"),iN(559,"Habilita o modo drag and drop para as colunas da tabela."),sg()()(),Tl(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),iN(564," (p-delete-items)"),Gl(565,"br"),sg()()(),Tl(566,"td",21)(567,"code",29),iN(568,"EventEmitter"),sg()(),Tl(569,"td",23),iN(570,"-"),sg(),Tl(571,"td",24)(572,"em")(573,"strong"),iN(574,"(opcional)"),sg()(),Tl(575,"p"),iN(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),sg(),Tl(577,"pre")(578,"code"),iN(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),sg()(),Tl(580,"blockquote")(581,"p"),iN(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),sg()()()(),Tl(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),iN(587," (p-expanded)"),Gl(588,"br"),sg()()(),Tl(589,"td",21)(590,"code",29),iN(591,"EventEmitter"),sg()(),Tl(592,"td",23),iN(593,"-"),sg(),Tl(594,"td",24)(595,"em")(596,"strong"),iN(597,"(opcional)"),sg()(),Tl(598,"p"),iN(599,"Evento executado ao expandir uma linha do "),Tl(600,"code"),iN(601,"po-table"),sg(),iN(602,"."),sg(),Tl(603,"blockquote")(604,"p"),iN(605,"Como par\xE2metro o componente envia o item expandido."),sg()()()(),Tl(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),iN(610," p-filter-type"),Gl(611,"br"),sg()()(),Tl(612,"td",21)(613,"code",33),iN(614,"PoSearchFilterMode"),sg()(),Tl(615,"td",23)(616,"p")(617,"code"),iN(618,"startsWith"),sg()()(),Tl(619,"td",24)(620,"em")(621,"strong"),iN(622,"(opcional)"),sg()(),Tl(623,"p"),iN(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),sg(),Tl(625,"blockquote")(626,"p"),iN(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),sg()()()(),Tl(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),iN(632," p-filtered-columns"),Gl(633,"br"),sg()()(),Tl(634,"td",21)(635,"code",34),iN(636,"Array<string>"),sg()(),Tl(637,"td",23),iN(638,"-"),sg(),Tl(639,"td",24)(640,"em")(641,"strong"),iN(642,"(opcional)"),sg()(),Tl(643,"p"),iN(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),sg()()(),Tl(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),iN(649," p-height"),Gl(650,"br"),sg()()(),Tl(651,"td",21)(652,"code",35),iN(653,"number"),sg()(),Tl(654,"td",23),iN(655,"-"),sg(),Tl(656,"td",24)(657,"em")(658,"strong"),iN(659,"(opcional)"),sg()(),Tl(660,"p"),iN(661,"Define a altura da tabela em "),Tl(662,"em"),iN(663,"pixels"),sg(),iN(664," e fixa o cabe\xE7alho."),sg(),Tl(665,"p"),iN(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),Tl(667,"code"),iN(668,"virtual-scroll"),sg(),iN(669," na tabela melhorando a performance."),sg()()(),Tl(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),iN(674," p-hide-action-fixed-columns"),Gl(675,"br"),sg()()(),Tl(676,"td",21)(677,"code",22),iN(678,"boolean"),sg()(),Tl(679,"td",23)(680,"p")(681,"code"),iN(682,"false"),sg()()(),Tl(683,"td",24)(684,"em")(685,"strong"),iN(686,"(opcional)"),sg()(),Tl(687,"p"),iN(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),sg()()(),Tl(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),iN(693," p-hide-batch-actions"),Gl(694,"br"),sg()()(),Tl(695,"td",21)(696,"code",22),iN(697,"boolean"),sg()(),Tl(698,"td",23)(699,"p")(700,"code"),iN(701,"true"),sg()()(),Tl(702,"td",24)(703,"em")(704,"strong"),iN(705,"(opcional)"),sg()(),Tl(706,"p"),iN(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),sg()()(),Tl(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),iN(712," p-hide-columns-manager"),Gl(713,"br"),sg()()(),Tl(714,"td",21)(715,"code",22),iN(716,"boolean"),sg()(),Tl(717,"td",23)(718,"p")(719,"code"),iN(720,"false"),sg()()(),Tl(721,"td",24)(722,"em")(723,"strong"),iN(724,"(opcional)"),sg()(),Tl(725,"p"),iN(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),sg()()(),Tl(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),iN(731," p-hide-detail"),Gl(732,"br"),sg()()(),Tl(733,"td",21)(734,"code",22),iN(735,"boolean"),sg()(),Tl(736,"td",23)(737,"p")(738,"code"),iN(739,"false"),sg()()(),Tl(740,"td",24)(741,"em")(742,"strong"),iN(743,"(opcional)"),sg()(),Tl(744,"p"),iN(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),sg()()(),Tl(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),iN(750," p-hide-select-all"),Gl(751,"br"),sg()()(),Tl(752,"td",21)(753,"code",22),iN(754,"boolean"),sg()(),Tl(755,"td",23)(756,"p")(757,"code"),iN(758,"false"),sg()()(),Tl(759,"td",24)(760,"p"),iN(761,"Esconde o "),Tl(762,"em"),iN(763,"checkbox"),sg(),iN(764," para sele\xE7\xE3o de todas as linhas."),sg(),Tl(765,"blockquote")(766,"p"),iN(767,"Sempre receber\xE1 "),Tl(768,"em"),iN(769,"true"),sg(),iN(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),sg()()()(),Tl(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),iN(775," p-hide-table-search"),Gl(776,"br"),sg()()(),Tl(777,"td",21)(778,"code",22),iN(779,"boolean"),sg()(),Tl(780,"td",23)(781,"p")(782,"code"),iN(783,"true"),sg()()(),Tl(784,"td",24)(785,"em")(786,"strong"),iN(787,"(opcional)"),sg()(),Tl(788,"p"),iN(789,"Permite que o campo de pesquisa seja escondido."),sg()()(),Tl(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),iN(794," p-infinite-scroll"),Gl(795,"br"),sg()()(),Tl(796,"td",21)(797,"code",22),iN(798,"boolean"),sg()(),Tl(799,"td",23)(800,"p")(801,"code"),iN(802,"false"),sg()()(),Tl(803,"td",24)(804,"em")(805,"strong"),iN(806,"(opcional)"),sg()(),Tl(807,"p"),iN(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Tl(809,"code"),iN(810,"p-show-more"),sg(),iN(811,"."),sg(),Tl(812,"p")(813,"strong"),iN(814,"Regras de utiliza\xE7\xE3o:"),sg()(),Tl(815,"ul")(816,"li"),iN(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),Tl(818,"code"),iN(819,"p-height"),sg(),iN(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),sg()()()(),Tl(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),iN(825," p-infinite-scroll-distance"),Gl(826,"br"),sg()()(),Tl(827,"td",21)(828,"code",35),iN(829,"number"),sg()(),Tl(830,"td",23),iN(831,"-"),sg(),Tl(832,"td",24)(833,"em")(834,"strong"),iN(835,"(opcional)"),sg()(),Tl(836,"p"),iN(837,"Define o percentual necess\xE1rio para disparar o evento "),Tl(838,"code"),iN(839,"p-show-more"),sg(),iN(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),sg(),Tl(841,"p")(842,"strong"),iN(843,"Exemplos:"),sg()(),Tl(844,"ul")(845,"li"),iN(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),Tl(847,"code"),iN(848,"p-show-more"),sg(),iN(849," ser\xE1 disparado."),sg()()()(),Tl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),iN(854," p-items"),Gl(855,"br"),sg()()(),Tl(856,"td",21)(857,"code",36),iN(858,"any[]"),sg()(),Tl(859,"td",23),iN(860,"-"),sg(),Tl(861,"td",24)(862,"p"),iN(863,"Lista de itens da tabela."),sg(),Tl(864,"blockquote")(865,"p"),iN(866,"Se falso, ser\xE1 inicializado como um "),Tl(867,"em"),iN(868,"array"),sg(),iN(869," vazio."),sg()()()(),Tl(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),iN(874," p-literals"),Gl(875,"br"),sg()()(),Tl(876,"td",21)(877,"code",37),iN(878,"PoTableLiterals"),sg()(),Tl(879,"td",23),iN(880,"-"),sg(),Tl(881,"td",24)(882,"em")(883,"strong"),iN(884,"(opcional)"),sg()(),Tl(885,"p"),iN(886,"Objeto com as literais usadas no "),Tl(887,"code"),iN(888,"po-table"),sg(),iN(889,"."),sg(),Tl(890,"p"),iN(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),sg(),Tl(892,"pre")(893,"code"),iN(894,`const customLiterals: PoTableLiterals = {
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
`),sg()(),Tl(895,"p"),iN(896,"Ou passando apenas as literais que deseja customizar:"),sg(),Tl(897,"pre")(898,"code"),iN(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),sg()(),Tl(900,"p"),iN(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(902,"pre")(903,"code"),iN(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),sg()(),Tl(905,"blockquote")(906,"p"),iN(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(908,"a",38)(909,"code"),iN(910,"PoI18nService"),sg()(),iN(911," ou do browser."),sg()()()(),Tl(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),iN(916," p-loading"),Gl(917,"br"),sg()()(),Tl(918,"td",21)(919,"code",22),iN(920,"boolean"),sg()(),Tl(921,"td",23)(922,"p")(923,"code"),iN(924,"false"),sg()()(),Tl(925,"td",24)(926,"em")(927,"strong"),iN(928,"(opcional)"),sg()(),Tl(929,"p"),iN(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),Tl(931,"em"),iN(932,"table"),sg(),iN(933,"."),sg()()(),Tl(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),iN(938," p-loading-show-more"),Gl(939,"br"),sg()()(),Tl(940,"td",21)(941,"code",22),iN(942,"boolean"),sg()(),Tl(943,"td",23)(944,"p")(945,"code"),iN(946,"false"),sg()()(),Tl(947,"td",24)(948,"em")(949,"strong"),iN(950,"(opcional)"),sg()(),Tl(951,"p"),iN(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),sg()()(),Tl(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),iN(957," p-max-columns"),Gl(958,"br"),sg()()(),Tl(959,"td",21)(960,"code",35),iN(961,"number"),sg()(),Tl(962,"td",23),iN(963,"-"),sg(),Tl(964,"td",24)(965,"em")(966,"strong"),iN(967,"(opcional)"),sg()(),Tl(968,"p"),iN(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),sg(),Tl(970,"p"),iN(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),sg()()(),Tl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),iN(976," p-param-delete-api"),Gl(977,"br"),sg()()(),Tl(978,"td",21)(979,"code",31),iN(980,"string"),sg()(),Tl(981,"td",23)(982,"p")(983,"code"),iN(984,"id"),sg()()(),Tl(985,"td",24)(986,"em")(987,"strong"),iN(988,"(opcional)"),sg()(),Tl(989,"p"),iN(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),sg(),Tl(991,"p"),iN(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),Tl(993,"code"),iN(994,"p-service-delete"),sg(),iN(995," em conjunto."),sg()()(),Tl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),iN(1e3," p-selectable"),Gl(1001,"br"),sg()()(),Tl(1002,"td",21)(1003,"code",22),iN(1004,"boolean"),sg()(),Tl(1005,"td",23)(1006,"p")(1007,"code"),iN(1008,"false"),sg()()(),Tl(1009,"td",24)(1010,"em")(1011,"strong"),iN(1012,"(opcional)"),sg()(),Tl(1013,"p"),iN(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),Tl(1015,"code"),iN(1016,"p-single-select"),sg(),iN(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),sg(),Tl(1018,"p")(1019,"strong"),iN(1020,"Importante:"),sg()(),Tl(1021,"ul")(1022,"li"),iN(1023,"As linhas de detalhe definidas em "),Tl(1024,"code"),iN(1025,"PoTableDetail"),sg(),iN(1026," possuem comportamento independente da linha mestre;"),sg(),Tl(1027,"li"),iN(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),Tl(1029,"code"),iN(1030,"$selected"),sg(),iN(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Tl(1032,"code"),iN(1033,"item.$selected"),sg(),iN(1034," ou "),Tl(1035,"code"),iN(1036,"item['$selected']"),sg(),iN(1037,"."),sg()()()(),Tl(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),iN(1042," p-selectable-entire-line"),Gl(1043,"br"),sg()()(),Tl(1044,"td",21)(1045,"code",22),iN(1046,"boolean"),sg()(),Tl(1047,"td",23)(1048,"p")(1049,"code"),iN(1050,"true"),sg()()(),Tl(1051,"td",24)(1052,"p"),iN(1053,"Permite selecionar um item da tabela clicando na linha."),sg(),Tl(1054,"blockquote")(1055,"p"),iN(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),Tl(1057,"code"),iN(1058,"false"),sg(),iN(1059,"."),sg()()()(),Tl(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),iN(1064," (p-selected)"),Gl(1065,"br"),sg()()(),Tl(1066,"td",21)(1067,"code",29),iN(1068,"EventEmitter"),sg()(),Tl(1069,"td",23),iN(1070,"-"),sg(),Tl(1071,"td",24)(1072,"em")(1073,"strong"),iN(1074,"(opcional)"),sg()(),Tl(1075,"p"),iN(1076,"Evento executado ao selecionar uma linha do "),Tl(1077,"code"),iN(1078,"po-table"),sg(),iN(1079,"."),sg()()(),Tl(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),iN(1084," p-service-api"),Gl(1085,"br"),sg()()(),Tl(1086,"td",21)(1087,"code",31),iN(1088,"string"),sg()(),Tl(1089,"td",23),iN(1090,"-"),sg(),Tl(1091,"td",24)(1092,"em")(1093,"strong"),iN(1094,"(opcional)"),sg()(),Tl(1095,"p"),iN(1096,"URL da API respons\xE1vel por retornar os registros."),sg(),Tl(1097,"p"),iN(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),Tl(1099,"code"),iN(1100,"page"),sg(),iN(1101," e "),Tl(1102,"code"),iN(1103,"pageSize"),sg(),iN(1104,", conforme abaixo:"),sg(),Tl(1105,"pre")(1106,"code"),iN(1107,`url + ?page=1&pageSize=10
`),sg()(),Tl(1108,"p"),iN(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Tl(1110,"code"),iN(1111,"order"),sg(),iN(1112,", por exemplo:"),sg(),Tl(1113,"ul")(1114,"li")(1115,"p"),iN(1116,"Coluna decrescente:"),sg(),Tl(1117,"pre")(1118,"code"),iN(1119,`url + ?page=1&pageSize=10&order=-name
`),sg()()(),Tl(1120,"li")(1121,"p"),iN(1122,"Coluna ascendente:"),sg(),Tl(1123,"pre")(1124,"code"),iN(1125,`url + ?page=1&pageSize=10&order=name
`),sg()()()(),Tl(1126,"blockquote")(1127,"p"),iN(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Tl(1129,"a",39),iN(1130,"API do PO UI"),sg(),iN(1131,"."),sg()()()(),Tl(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),iN(1136," p-service-delete"),Gl(1137,"br"),sg()()(),Tl(1138,"td",21)(1139,"code",31),iN(1140,"string"),sg()(),Tl(1141,"td",23),iN(1142,"-"),sg(),Tl(1143,"td",24)(1144,"em")(1145,"strong"),iN(1146,"(opcional)"),sg()(),Tl(1147,"p"),iN(1148,"URL da API respons\xE1vel por excluir os registros."),sg(),Tl(1149,"p"),iN(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),Tl(1151,"code"),iN(1152,"p-param-delete-api"),sg(),iN(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Tl(1154,"code"),iN(1155,"id"),sg(),iN(1156,"."),sg(),Tl(1157,"blockquote")(1158,"p"),iN(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Tl(1160,"a",39),iN(1161,"API do PO UI"),sg(),iN(1162,"."),sg()()()(),Tl(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),iN(1167," (p-show-more)"),Gl(1168,"br"),sg()()(),Tl(1169,"td",21)(1170,"code",29),iN(1171,"EventEmitter"),sg()(),Tl(1172,"td",23),iN(1173,"-"),sg(),Tl(1174,"td",24)(1175,"em")(1176,"strong"),iN(1177,"(opcional)"),sg()(),Tl(1178,"p"),iN(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),sg(),Tl(1180,"p"),iN(1181,"Recebe um objeto "),Tl(1182,"code"),iN(1183,"{ column, type }"),sg(),iN(1184," onde:"),sg(),Tl(1185,"ul")(1186,"li"),iN(1187,"column ("),Tl(1188,"code"),iN(1189,"PoTableColumn"),sg(),iN(1190,"): objeto da coluna que est\xE1 ordenada."),sg(),Tl(1191,"li"),iN(1192,"type ("),Tl(1193,"code"),iN(1194,"PoTableColumnSortType"),sg(),iN(1195,"): tipo da ordena\xE7\xE3o."),sg()()()(),Tl(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),iN(1200," p-show-more-disabled"),Gl(1201,"br"),sg()()(),Tl(1202,"td",21)(1203,"code",22),iN(1204,"boolean"),sg()(),Tl(1205,"td",23)(1206,"p")(1207,"code"),iN(1208,"false"),sg()()(),Tl(1209,"td",24)(1210,"p"),iN(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),sg()()(),Tl(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),iN(1216," p-single-select"),Gl(1217,"br"),sg()()(),Tl(1218,"td",21)(1219,"code",22),iN(1220,"boolean"),sg()(),Tl(1221,"td",23),iN(1222,"-"),sg(),Tl(1223,"td",24)(1224,"p"),iN(1225,"Define que somente uma linha da tabela pode ser selecionada."),sg(),Tl(1226,"blockquote")(1227,"p"),iN(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),sg()()()(),Tl(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),iN(1233," p-sort"),Gl(1234,"br"),sg()()(),Tl(1235,"td",21)(1236,"code",22),iN(1237,"boolean"),sg()(),Tl(1238,"td",23)(1239,"p")(1240,"code"),iN(1241,"false"),sg()()(),Tl(1242,"td",24)(1243,"em")(1244,"strong"),iN(1245,"(opcional)"),sg()(),Tl(1246,"p"),iN(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),sg()()(),Tl(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),iN(1252," (p-sort-by)"),Gl(1253,"br"),sg()()(),Tl(1254,"td",21)(1255,"code",29),iN(1256,"EventEmitter"),sg()(),Tl(1257,"td",23),iN(1258,"-"),sg(),Tl(1259,"td",24)(1260,"em")(1261,"strong"),iN(1262,"(opcional)"),sg()(),Tl(1263,"p"),iN(1264,"Evento executado ao ordenar colunas da tabela."),sg(),Tl(1265,"p"),iN(1266,"Recebe um objeto "),Tl(1267,"code"),iN(1268,"{ column, type }"),sg(),iN(1269," onde:"),sg(),Tl(1270,"ul")(1271,"li"),iN(1272,"column ("),Tl(1273,"code"),iN(1274,"PoTableColumn"),sg(),iN(1275,"): objeto da coluna que foi clicada/ordenada."),sg(),Tl(1276,"li"),iN(1277,"type ("),Tl(1278,"code"),iN(1279,"PoTableColumnSortType"),sg(),iN(1280,"): tipo da ordena\xE7\xE3o."),sg()()()(),Tl(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),iN(1285," p-spacing"),Gl(1286,"br"),sg()()(),Tl(1287,"td",21)(1288,"code",31),iN(1289,"string"),sg()(),Tl(1290,"td",23)(1291,"p")(1292,"code"),iN(1293,"medium"),sg()()(),Tl(1294,"td",24)(1295,"em")(1296,"strong"),iN(1297,"(opcional)"),sg()(),Tl(1298,"p"),iN(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Tl(1300,"strong"),iN(1301,"PoTableColumnSpacing"),sg(),iN(1302,"."),sg(),Tl(1303,"blockquote")(1304,"p"),iN(1305,"Em n\xEDvel de acessibilidade "),Tl(1306,"strong"),iN(1307,"AA"),sg(),iN(1308,", caso o valor de "),Tl(1309,"code"),iN(1310,"p-spacing"),sg(),iN(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Tl(1312,"code"),iN(1313,"extraSmall"),sg(),iN(1314,`
nos seguintes cen\xE1rios:`),sg(),Tl(1315,"ul")(1316,"li"),iN(1317,"Quando o valor de "),Tl(1318,"code"),iN(1319,"p-components-size"),sg(),iN(1320," for "),Tl(1321,"code"),iN(1322,"small"),sg(),iN(1323,";"),sg(),Tl(1324,"li"),iN(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),Tl(1326,"code"),iN(1327,"small"),sg(),iN(1328,` no
`),Tl(1329,"a",32),iN(1330,"servi\xE7o de tema"),sg(),iN(1331,"."),sg()()()()(),Tl(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),iN(1336," p-striped"),Gl(1337,"br"),sg()()(),Tl(1338,"td",21)(1339,"code",22),iN(1340,"boolean"),sg()(),Tl(1341,"td",23)(1342,"p")(1343,"code"),iN(1344,"false"),sg()()(),Tl(1345,"td",24)(1346,"p"),iN(1347,"Habilita ou desabilita o estilo listrado da tabela ("),Tl(1348,"code"),iN(1349,"striped"),sg(),iN(1350,")."),sg(),Tl(1351,"blockquote")(1352,"p"),iN(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),sg()()()(),Tl(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),iN(1358," p-text-wrap"),Gl(1359,"br"),sg()()(),Tl(1360,"td",21)(1361,"code",22),iN(1362,"boolean"),sg()(),Tl(1363,"td",23)(1364,"p")(1365,"code"),iN(1366,"false"),sg()()(),Tl(1367,"td",24)(1368,"em")(1369,"strong"),iN(1370,"(opcional)"),sg()(),Tl(1371,"p"),iN(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg(),Tl(1373,"blockquote")(1374,"p"),iN(1375,"Incompat\xEDvel com "),Tl(1376,"code"),iN(1377,"virtual-scroll"),sg(),iN(1378,", que requer altura fixa nas linhas."),sg()()()(),Tl(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),iN(1383," (p-unselected)"),Gl(1384,"br"),sg()()(),Tl(1385,"td",21)(1386,"code",29),iN(1387,"EventEmitter"),sg()(),Tl(1388,"td",23),iN(1389,"-"),sg(),Tl(1390,"td",24)(1391,"em")(1392,"strong"),iN(1393,"(opcional)"),sg()(),Tl(1394,"p"),iN(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),Tl(1396,"code"),iN(1397,"po-table"),sg(),iN(1398,"."),sg()()(),Tl(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),iN(1403," p-virtual-scroll"),Gl(1404,"br"),sg()()(),Tl(1405,"td",21)(1406,"code",22),iN(1407,"boolean"),sg()(),Tl(1408,"td",23)(1409,"p")(1410,"code"),iN(1411,"true"),sg()()(),Tl(1412,"td",24)(1413,"em")(1414,"strong"),iN(1415,"(opcional)"),sg()(),Tl(1416,"p"),iN(1417,"Habilita o "),Tl(1418,"code"),iN(1419,"virtual-scroll"),sg(),iN(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Tl(1421,"code"),iN(1422,"p-height"),sg(),iN(1423,") para funcionar corretamente."),sg(),Tl(1424,"blockquote")(1425,"p"),iN(1426,"Incompat\xEDvel com "),Tl(1427,"code"),iN(1428,"p-text-wrap"),sg(),iN(1429," e "),Tl(1430,"code"),iN(1431,"master-detail"),sg(),iN(1432,", pois o "),Tl(1433,"code"),iN(1434,"virtual-scroll"),sg(),iN(1435," exige altura fixa nas linhas."),sg()()()()(),Tl(1436,"h3",13),iN(1437,"M\xE9todos"),sg(),Tl(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),iN(1444," applyFilters "),sg()()()()(),Tl(1445,"tr",24)(1446,"td",24)(1447,"p"),iN(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),sg(),Tl(1449,"p"),iN(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),sg(),Tl(1451,"pre")(1452,"code"),iN(1453,`url + ?page=1&pageSize=10
`),sg()(),Tl(1454,"blockquote")(1455,"p"),iN(1456,"Obs: os par\xE2metros "),Tl(1457,"code"),iN(1458,"page"),sg(),iN(1459," e "),Tl(1460,"code"),iN(1461,"pageSize"),sg(),iN(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),sg()(),Tl(1463,"p"),iN(1464,"Caso sejam informados os par\xE2metros "),Tl(1465,"code"),iN(1466,"{ name: 'JOHN', age: '23' }"),sg(),iN(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),sg(),Tl(1468,"pre")(1469,"code"),iN(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),sg()()()()(),Tl(1471,"h5")(1472,"b"),iN(1473,"Par\xE2metros"),sg()(),Tl(1474,"table",14)(1475,"tr",15)(1476,"th",16),iN(1477,"Nome"),sg(),Tl(1478,"th",16),iN(1479,"Tipo"),sg(),Tl(1480,"th",16),iN(1481,"Descri\xE7\xE3o"),sg()(),Tl(1482,"tr",17)(1483,"td",18),iN(1484," queryParams"),sg(),Tl(1485,"td",21)(1486,"code",42),iN(1487," { key: value } "),sg()(),Tl(1488,"td",24)(1489,"p"),iN(1490,"Formato do objeto a ser enviado."),sg(),Tl(1491,"blockquote")(1492,"p"),iN(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),sg()()()()(),Gl(1494,"br"),Tl(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),iN(1501," applyFixedColumns "),sg()()()()(),Tl(1502,"tr",24)(1503,"td",24)(1504,"p"),iN(1505,"Verifica se columns possuem a propriedade width."),sg()()()(),Gl(1506,"br"),Tl(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),iN(1513," collapse "),sg()()()()(),Tl(1514,"tr",24)(1515,"td",24)(1516,"p"),iN(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),sg()()()(),Tl(1518,"h5")(1519,"b"),iN(1520,"Par\xE2metros"),sg()(),Tl(1521,"table",14)(1522,"tr",15)(1523,"th",16),iN(1524,"Nome"),sg(),Tl(1525,"th",16),iN(1526,"Tipo"),sg(),Tl(1527,"th",16),iN(1528,"Descri\xE7\xE3o"),sg()(),Tl(1529,"tr",17)(1530,"td",18),iN(1531," rowIndex"),sg(),Tl(1532,"td",21)(1533,"code",43),iN(1534," number "),sg()(),Tl(1535,"td",24)(1536,"p"),iN(1537,"\xCDndice da linha que ser\xE1 colapsada."),sg(),Tl(1538,"blockquote")(1539,"p"),iN(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),sg()()()()(),Gl(1541,"br"),Tl(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),iN(1548," expand "),sg()()()()(),Tl(1549,"tr",24)(1550,"td",24)(1551,"p"),iN(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),sg()()()(),Tl(1553,"h5")(1554,"b"),iN(1555,"Par\xE2metros"),sg()(),Tl(1556,"table",14)(1557,"tr",15)(1558,"th",16),iN(1559,"Nome"),sg(),Tl(1560,"th",16),iN(1561,"Tipo"),sg(),Tl(1562,"th",16),iN(1563,"Descri\xE7\xE3o"),sg()(),Tl(1564,"tr",17)(1565,"td",18),iN(1566," rowIndex"),sg(),Tl(1567,"td",21)(1568,"code",43),iN(1569," number "),sg()(),Tl(1570,"td",24)(1571,"p"),iN(1572,"\xCDndice da linha que ser\xE1 expandida."),sg(),Tl(1573,"blockquote")(1574,"p"),iN(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),sg()()()()(),Gl(1576,"br"),Tl(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),iN(1583," getSelectedRows "),sg()()()()(),Tl(1584,"tr",24)(1585,"td",24)(1586,"p"),iN(1587,"Retorna as linhas do "),Tl(1588,"code"),iN(1589,"po-table"),sg(),iN(1590," que est\xE3o selecionadas."),sg()()()(),Gl(1591,"br"),Tl(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),iN(1598," getUnselectedRows "),sg()()()()(),Tl(1599,"tr",24)(1600,"td",24)(1601,"p"),iN(1602,"Retorna as linhas do "),Tl(1603,"code"),iN(1604,"po-table"),sg(),iN(1605," que n\xE3o est\xE3o selecionadas."),sg()()()(),Gl(1606,"br"),Tl(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),iN(1613," unselectRows "),sg()()()()(),Tl(1614,"tr",24)(1615,"td",24)(1616,"p"),iN(1617,"Desmarca as linhas que est\xE3o selecionadas."),sg()()()(),Gl(1618,"br"),Tl(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),iN(1625," unselectRowItem "),sg()()()()(),Tl(1626,"tr",24)(1627,"td",24)(1628,"p"),iN(1629,"Desmarca uma linha que est\xE1 selecionada."),sg()()()(),Gl(1630,"br"),Tl(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),iN(1637," selectRowItem "),sg()()()()(),Tl(1638,"tr",24)(1639,"td",24)(1640,"p"),iN(1641,"Seleciona uma linha do 'po-table'."),sg()()()(),Gl(1642,"br"),Tl(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),iN(1649," deleteItems "),sg()()()()(),Tl(1650,"tr",24)(1651,"td",24)(1652,"p"),iN(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Tl(1654,"code"),iN(1655,"p-service-delete"),sg(),iN(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),sg(),Tl(1657,"p"),iN(1658,"Ao utilizar "),Tl(1659,"code"),iN(1660,"p-service-delete"),sg(),iN(1661," mas sem a propriedade "),Tl(1662,"code"),iN(1663,"p-service-api"),sg(),iN(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),sg(),Tl(1665,"p"),iN(1666,"Caso a tabela utilize "),Tl(1667,"code"),iN(1668,"p-height"),sg(),iN(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),Tl(1670,"code"),iN(1671,"(p-delete-items)"),sg(),iN(1672,", por exemplo:"),sg(),Tl(1673,"pre")(1674,"code"),iN(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),sg()()()()(),Gl(1676,"br"),Tl(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),iN(1683," removeItem "),sg()()()()(),Tl(1684,"tr",24)(1685,"td",24)(1686,"p"),iN(1687,"M\xE9todo que remove um item da tabela."),sg()()()(),Tl(1688,"h5")(1689,"b"),iN(1690,"Par\xE2metros"),sg()(),Tl(1691,"table",14)(1692,"tr",15)(1693,"th",16),iN(1694,"Nome"),sg(),Tl(1695,"th",16),iN(1696,"Tipo"),sg(),Tl(1697,"th",16),iN(1698,"Descri\xE7\xE3o"),sg()(),Tl(1699,"tr",17)(1700,"td",18),iN(1701," item"),sg(),Tl(1702,"td",21)(1703,"code",35),iN(1704," number "),sg(),Tl(1705,"code",42),iN(1706," { key: value } "),sg()(),Tl(1707,"td",24)(1708,"p"),iN(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),sg(),Tl(1710,"blockquote")(1711,"p"),iN(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),sg()()()()(),Gl(1713,"br"),Tl(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),iN(1720," updateItem "),sg()()()()(),Tl(1721,"tr",24)(1722,"td",24)(1723,"p"),iN(1724,"M\xE9todo que atualiza um item da tabela."),sg()()()(),Tl(1725,"h5")(1726,"b"),iN(1727,"Par\xE2metros"),sg()(),Tl(1728,"table",14)(1729,"tr",15)(1730,"th",16),iN(1731,"Nome"),sg(),Tl(1732,"th",16),iN(1733,"Tipo"),sg(),Tl(1734,"th",16),iN(1735,"Descri\xE7\xE3o"),sg()(),Tl(1736,"tr",17)(1737,"td",18),iN(1738," item"),sg(),Tl(1739,"td",21)(1740,"code",35),iN(1741," number "),sg(),Tl(1742,"code",42),iN(1743," { key: value } "),sg()(),Tl(1744,"td",24)(1745,"p"),iN(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),sg()()(),Tl(1747,"tr",17)(1748,"td",18),iN(1749," updatedItem"),sg(),Tl(1750,"td",21)(1751,"code",42),iN(1752," { key: value } "),sg()(),Tl(1753,"td",24)(1754,"p"),iN(1755,"Item que foi atualizado."),sg(),Tl(1756,"blockquote")(1757,"p"),iN(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),sg()()()()(),Gl(1759,"br"),Tl(1760,"h3"),iN(1761,"Interfaces"),sg(),Tl(1762,"h4",44)(1763,"code",5),iN(1764,"PoTableAction"),sg()(),Tl(1765,"div",2)(1766,"p"),iN(1767,"Interface para lista de a\xE7\xF5es do componente. "),sg()(),Tl(1768,"h4",13),iN(1769,"Propriedades"),sg(),Tl(1770,"table",14)(1771,"tr",15)(1772,"th",16),iN(1773,"Nome"),sg(),Tl(1774,"th",16),iN(1775,"Tipo"),sg(),Tl(1776,"th",16),iN(1777,"Descri\xE7\xE3o"),sg()(),Tl(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),iN(1782," action"),Gl(1783,"br"),sg()()(),Tl(1784,"td",21)(1785,"code",45),iN(1786,"Function"),sg()(),Tl(1787,"td",24)(1788,"em")(1789,"strong"),iN(1790,"(opcional)"),sg()(),Tl(1791,"p"),iN(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),sg(),Tl(1793,"p"),iN(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(1795,"code"),iN(1796,"subItems"),sg(),iN(1797,"."),sg(),Tl(1798,"blockquote")(1799,"p"),iN(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Tl(1801,"em"),iN(1802,"bind"),sg(),iN(1803,`:
`),Tl(1804,"code"),iN(1805,"action: this.myFunction.bind(this)"),sg()()()()(),Tl(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),iN(1810," disabled"),Gl(1811,"br"),sg()()(),Tl(1812,"td",21)(1813,"code",22),iN(1814,"boolean "),sg(),Tl(1815,"code",45),iN(1816," Function"),sg()(),Tl(1817,"td",24)(1818,"em")(1819,"strong"),iN(1820,"(opcional)"),sg()(),Tl(1821,"p"),iN(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()(),Tl(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),iN(1827," icon"),Gl(1828,"br"),sg()()(),Tl(1829,"td",21)(1830,"code",31),iN(1831,"string "),sg(),Tl(1832,"code",46),iN(1833," TemplateRef<void>"),sg()(),Tl(1834,"td",24)(1835,"em")(1836,"strong"),iN(1837,"(opcional)"),sg()(),Tl(1838,"p"),iN(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),sg(),Tl(1840,"p"),iN(1841,"Aceita \xEDcones da "),Tl(1842,"a",26),iN(1843,"Biblioteca de \xEDcones"),sg(),iN(1844,`, fontes externas (ex: Font Awesome)
ou um `),Tl(1845,"code"),iN(1846,"TemplateRef"),sg(),iN(1847," para \xEDcones customizados."),sg(),Tl(1848,"pre")(1849,"code"),iN(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),sg()()()(),Tl(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),iN(1855," label"),Gl(1856,"br"),sg()()(),Tl(1857,"td",21)(1858,"code",31),iN(1859,"string"),sg()(),Tl(1860,"td",24)(1861,"p"),iN(1862,"R\xF3tulo da a\xE7\xE3o."),sg(),Tl(1863,"p"),iN(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Tl(1865,"code"),iN(1866,"subItems"),sg(),iN(1867,"."),sg()()(),Tl(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),iN(1872," selected"),Gl(1873,"br"),sg()()(),Tl(1874,"td",21)(1875,"code",22),iN(1876,"boolean"),sg()(),Tl(1877,"td",24)(1878,"em")(1879,"strong"),iN(1880,"(opcional)"),sg()(),Tl(1881,"p"),iN(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),sg()()(),Tl(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),iN(1887," separator"),Gl(1888,"br"),sg()()(),Tl(1889,"td",21)(1890,"code",22),iN(1891,"boolean"),sg()(),Tl(1892,"td",24)(1893,"em")(1894,"strong"),iN(1895,"(opcional)"),sg()(),Tl(1896,"p"),iN(1897,"Atribui uma linha separadora acima do item."),sg()()(),Tl(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),iN(1902," subItems"),Gl(1903,"br"),sg()()(),Tl(1904,"td",21)(1905,"code",47),iN(1906,"Array<PoPopupAction>"),sg()(),Tl(1907,"td",24)(1908,"em")(1909,"strong"),iN(1910,"(opcional)"),sg()(),Tl(1911,"p"),iN(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),sg(),Tl(1913,"p"),iN(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),sg(),Tl(1915,"blockquote")(1916,"p"),iN(1917,"As propriedades "),Tl(1918,"code"),iN(1919,"disabled"),sg(),iN(1920,", "),Tl(1921,"code"),iN(1922,"type"),sg(),iN(1923," e "),Tl(1924,"code"),iN(1925,"visible"),sg(),iN(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),sg()(),Tl(1927,"blockquote")(1928,"p"),iN(1929,"Quando "),Tl(1930,"code"),iN(1931,"url"),sg(),iN(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),sg()(),Tl(1933,"blockquote")(1934,"p"),iN(1935,"Em subn\xEDveis aninhados, o "),Tl(1936,"code"),iN(1937,"icon"),sg(),iN(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),sg()()()(),Tl(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),iN(1943," type"),Gl(1944,"br"),sg()()(),Tl(1945,"td",21)(1946,"code",31),iN(1947,"string"),sg()(),Tl(1948,"td",24)(1949,"em")(1950,"strong"),iN(1951,"(opcional)"),sg()(),Tl(1952,"p"),iN(1953,"Define a cor do item."),sg(),Tl(1954,"p"),iN(1955,"Valores v\xE1lidos:"),sg(),Tl(1956,"ul")(1957,"li")(1958,"code"),iN(1959,"default"),sg()(),Tl(1960,"li")(1961,"code"),iN(1962,"danger"),sg()()()()(),Tl(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),iN(1967," url"),Gl(1968,"br"),sg()()(),Tl(1969,"td",21)(1970,"code",31),iN(1971,"string"),sg()(),Tl(1972,"td",24)(1973,"em")(1974,"strong"),iN(1975,"(opcional)"),sg()(),Tl(1976,"p"),iN(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),sg(),Tl(1978,"p"),iN(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(1980,"code"),iN(1981,"url"),sg(),iN(1982," \xE9 informada em um agrupador, o clique "),Tl(1983,"strong"),iN(1984,"n\xE3o abrir\xE1 os subitens"),sg(),iN(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),sg(),Tl(1986,"blockquote")(1987,"p"),iN(1988,"Quando informada, tem prioridade sobre a propriedade "),Tl(1989,"code"),iN(1990,"action"),sg(),iN(1991,"."),sg()()()(),Tl(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),iN(1996," visible"),Gl(1997,"br"),sg()()(),Tl(1998,"td",21)(1999,"code",22),iN(2e3,"boolean "),sg(),Tl(2001,"code",45),iN(2002," Function"),sg()(),Tl(2003,"td",24)(2004,"em")(2005,"strong"),iN(2006,"(opcional)"),sg()(),Tl(2007,"p"),iN(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),sg()()()(),Tl(2009,"h4",44)(2010,"code",5),iN(2011,"PoTableBoolean"),sg()(),Tl(2012,"div",2)(2013,"p"),iN(2014,"Interface que define as colunas booleanas do "),Tl(2015,"code"),iN(2016,"po-table"),sg(),iN(2017,"."),sg()(),Tl(2018,"h4",13),iN(2019,"Propriedades"),sg(),Tl(2020,"table",14)(2021,"tr",15)(2022,"th",16),iN(2023,"Nome"),sg(),Tl(2024,"th",16),iN(2025,"Tipo"),sg(),Tl(2026,"th",16),iN(2027,"Descri\xE7\xE3o"),sg()(),Tl(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),iN(2032," falseLabel"),Gl(2033,"br"),sg()()(),Tl(2034,"td",21)(2035,"code",31),iN(2036,"string"),sg()(),Tl(2037,"td",24)(2038,"em")(2039,"strong"),iN(2040,"(opcional)"),sg()(),Tl(2041,"p"),iN(2042,"Define o r\xF3tulo para valores "),Tl(2043,"code"),iN(2044,"false"),sg(),iN(2045,"."),sg()()(),Tl(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),iN(2050," trueLabel"),Gl(2051,"br"),sg()()(),Tl(2052,"td",21)(2053,"code",31),iN(2054,"string"),sg()(),Tl(2055,"td",24)(2056,"em")(2057,"strong"),iN(2058,"(opcional)"),sg()(),Tl(2059,"p"),iN(2060,"Define o r\xF3tulo para valores "),Tl(2061,"code"),iN(2062,"true"),sg(),iN(2063,"."),sg()()()(),Tl(2064,"h4",44)(2065,"code",5),iN(2066,"PoTableColumnSort"),sg()(),Tl(2067,"div",2)(2068,"p"),iN(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),sg()(),Tl(2070,"h4",13),iN(2071,"Propriedades"),sg(),Tl(2072,"table",14)(2073,"tr",15)(2074,"th",16),iN(2075,"Nome"),sg(),Tl(2076,"th",16),iN(2077,"Tipo"),sg(),Tl(2078,"th",16),iN(2079,"Descri\xE7\xE3o"),sg()(),Tl(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),iN(2084," column"),Gl(2085,"br"),sg()()(),Tl(2086,"td",21)(2087,"code",48),iN(2088,"PoTableColumn"),sg()(),Tl(2089,"td",24)(2090,"em")(2091,"strong"),iN(2092,"(opcional)"),sg()(),Tl(2093,"p"),iN(2094,"Coluna pela qual a tabela est\xE1 ordenada."),sg()()(),Tl(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),iN(2099," type"),Gl(2100,"br"),sg()()(),Tl(2101,"td",21)(2102,"code",49),iN(2103,"PoTableColumnSortType"),sg()(),Tl(2104,"td",24)(2105,"p"),iN(2106,"Tipo da ordena\xE7\xE3o."),sg()()()(),Tl(2107,"h4",44)(2108,"code",5),iN(2109,"PoTableColumn"),sg()(),Tl(2110,"div",2)(2111,"p"),iN(2112,"Interface para configura\xE7\xE3o das colunas do "),Tl(2113,"code"),iN(2114,"po-table"),sg(),iN(2115,"."),sg(),Tl(2116,"p"),iN(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),sg()(),Tl(2118,"h4",13),iN(2119,"Propriedades"),sg(),Tl(2120,"table",14)(2121,"tr",15)(2122,"th",16),iN(2123,"Nome"),sg(),Tl(2124,"th",16),iN(2125,"Tipo"),sg(),Tl(2126,"th",16),iN(2127,"Descri\xE7\xE3o"),sg()(),Tl(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),iN(2132," action"),Gl(2133,"br"),sg()()(),Tl(2134,"td",21)(2135,"code",45),iN(2136,"Function"),sg()(),Tl(2137,"td",24)(2138,"em")(2139,"strong"),iN(2140,"(opcional)"),sg()(),Tl(2141,"p"),iN(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),Tl(2143,"code"),iN(2144,"link"),sg(),iN(2145," ou "),Tl(2146,"code"),iN(2147,"icon"),sg(),iN(2148,"."),sg(),Tl(2149,"blockquote")(2150,"p"),iN(2151,"Quando for do tipo "),Tl(2152,"code"),iN(2153,"link"),sg(),iN(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),sg()(),Tl(2155,"blockquote")(2156,"p"),iN(2157,"Quando for do tipo "),Tl(2158,"code"),iN(2159,"icon"),sg(),iN(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),sg()()()(),Tl(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),iN(2165," boolean"),Gl(2166,"br"),sg()()(),Tl(2167,"td",21)(2168,"code",50),iN(2169,"PoTableBoolean"),sg()(),Tl(2170,"td",24)(2171,"em")(2172,"strong"),iN(2173,"(opcional)"),sg()(),Tl(2174,"p"),iN(2175,"Define um objeto do tipo "),Tl(2176,"code"),iN(2177,"PoTableBoolean"),sg(),iN(2178," para as colunas do tipo "),Tl(2179,"em"),iN(2180,"boolean"),sg(),iN(2181,". Por exemplo:"),sg(),Tl(2182,"pre")(2183,"code"),iN(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),sg()(),Tl(2185,"blockquote")(2186,"p"),iN(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),Tl(2188,"em"),iN(2189,"boolean"),sg(),iN(2190,`,
esta exibir\xE1 por padr\xE3o `),Tl(2191,"code"),iN(2192,"Sim"),sg(),iN(2193," e "),Tl(2194,"code"),iN(2195,"N\xE3o"),sg(),iN(2196," de acordo com os valores "),Tl(2197,"em"),iN(2198,"booleanos"),sg(),iN(2199,"."),sg()()()(),Tl(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),iN(2204," color"),Gl(2205,"br"),sg()()(),Tl(2206,"td",21)(2207,"code",31),iN(2208,"string "),sg(),Tl(2209,"code",45),iN(2210," Function"),sg()(),Tl(2211,"td",24)(2212,"em")(2213,"strong"),iN(2214,"(opcional)"),sg()(),Tl(2215,"p"),iN(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),sg(),Tl(2217,"p"),iN(2218,"Valores v\xE1lidos:"),sg(),Tl(2219,"ul")(2220,"li"),Gl(2221,"span",51),Tl(2222,"code"),iN(2223,"color-01"),sg()(),Tl(2224,"li"),Gl(2225,"span",52),Tl(2226,"code"),iN(2227,"color-02"),sg()(),Tl(2228,"li"),Gl(2229,"span",53),Tl(2230,"code"),iN(2231,"color-03"),sg()(),Tl(2232,"li"),Gl(2233,"span",54),Tl(2234,"code"),iN(2235,"color-04"),sg()(),Tl(2236,"li"),Gl(2237,"span",55),Tl(2238,"code"),iN(2239,"color-05"),sg()(),Tl(2240,"li"),Gl(2241,"span",56),Tl(2242,"code"),iN(2243,"color-06"),sg()(),Tl(2244,"li"),Gl(2245,"span",57),Tl(2246,"code"),iN(2247,"color-07"),sg()(),Tl(2248,"li"),Gl(2249,"span",58),Tl(2250,"code"),iN(2251,"color-08"),sg()(),Tl(2252,"li"),Gl(2253,"span",59),Tl(2254,"code"),iN(2255,"color-09"),sg()(),Tl(2256,"li"),Gl(2257,"span",60),Tl(2258,"code"),iN(2259,"color-10"),sg()(),Tl(2260,"li"),Gl(2261,"span",61),Tl(2262,"code"),iN(2263,"color-11"),sg()(),Tl(2264,"li"),Gl(2265,"span",62),Tl(2266,"code"),iN(2267,"color-12"),sg()()(),Tl(2268,"blockquote")(2269,"p"),iN(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(2271,"strong"),iN(2272,"Caption Tag Colors"),sg(),iN(2273,":"),sg()(),Tl(2274,"ul")(2275,"li"),Gl(2276,"span",63),Tl(2277,"code"),iN(2278,"caption-tag-01"),sg(),Gl(2279,"span",64),Tl(2280,"code"),iN(2281,"caption-tag-02"),sg(),Gl(2282,"span",65),Tl(2283,"code"),iN(2284,"caption-tag-03"),sg(),Gl(2285,"span",66),Tl(2286,"code"),iN(2287,"caption-tag-04"),sg(),Gl(2288,"span",67),Tl(2289,"code"),iN(2290,"caption-tag-05"),sg()(),Tl(2291,"li"),Gl(2292,"span",68),Tl(2293,"code"),iN(2294,"caption-tag-06"),sg(),Gl(2295,"span",69),Tl(2296,"code"),iN(2297,"caption-tag-07"),sg(),Gl(2298,"span",70),Tl(2299,"code"),iN(2300,"caption-tag-08"),sg(),Gl(2301,"span",71),Tl(2302,"code"),iN(2303,"caption-tag-09"),sg(),Gl(2304,"span",72),Tl(2305,"code"),iN(2306,"caption-tag-10"),sg()(),Tl(2307,"li"),Gl(2308,"span",73),Tl(2309,"code"),iN(2310,"caption-tag-11"),sg(),Gl(2311,"span",74),Tl(2312,"code"),iN(2313,"caption-tag-12"),sg(),Gl(2314,"span",75),Tl(2315,"code"),iN(2316,"caption-tag-13"),sg(),Gl(2317,"span",76),Tl(2318,"code"),iN(2319,"caption-tag-14"),sg(),Gl(2320,"span",77),Tl(2321,"code"),iN(2322,"caption-tag-15"),sg()(),Tl(2323,"li"),Gl(2324,"span",78),Tl(2325,"code"),iN(2326,"caption-tag-16"),sg(),Gl(2327,"span",79),Tl(2328,"code"),iN(2329,"caption-tag-17"),sg(),Gl(2330,"span",80),Tl(2331,"code"),iN(2332,"caption-tag-18"),sg(),Gl(2333,"span",81),Tl(2334,"code"),iN(2335,"caption-tag-19"),sg(),Gl(2336,"span",82),Tl(2337,"code"),iN(2338,"caption-tag-20"),sg()(),Tl(2339,"li"),Gl(2340,"span",83),Tl(2341,"code"),iN(2342,"caption-tag-21"),sg(),Gl(2343,"span",84),Tl(2344,"code"),iN(2345,"caption-tag-22"),sg(),Gl(2346,"span",85),Tl(2347,"code"),iN(2348,"caption-tag-23"),sg(),Gl(2349,"span",86),Tl(2350,"code"),iN(2351,"caption-tag-24"),sg(),Gl(2352,"span",87),Tl(2353,"code"),iN(2354,"caption-tag-25"),sg()(),Tl(2355,"li"),Gl(2356,"span",88),Tl(2357,"code"),iN(2358,"caption-tag-26"),sg(),Gl(2359,"span",89),Tl(2360,"code"),iN(2361,"caption-tag-27"),sg(),Gl(2362,"span",90),Tl(2363,"code"),iN(2364,"caption-tag-28"),sg(),Gl(2365,"span",91),Tl(2366,"code"),iN(2367,"caption-tag-29"),sg(),Gl(2368,"span",92),Tl(2369,"code"),iN(2370,"caption-tag-30"),sg()(),Tl(2371,"li"),Gl(2372,"span",93),Tl(2373,"code"),iN(2374,"caption-tag-31"),sg(),Gl(2375,"span",94),Tl(2376,"code"),iN(2377,"caption-tag-32"),sg(),Gl(2378,"span",95),Tl(2379,"code"),iN(2380,"caption-tag-33"),sg(),Gl(2381,"span",96),Tl(2382,"code"),iN(2383,"caption-tag-34"),sg(),Gl(2384,"span",97),Tl(2385,"code"),iN(2386,"caption-tag-35"),sg()()(),Tl(2387,"blockquote")(2388,"p"),iN(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),sg()(),Tl(2390,"pre")(2391,"code"),iN(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),sg()(),Tl(2393,"blockquote")(2394,"p"),iN(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),Tl(2396,"code"),iN(2397,"icons"),sg(),iN(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),sg()(),Tl(2399,"pre")(2400,"code"),iN(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),sg()()()(),Tl(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),iN(2406," detail"),Gl(2407,"br"),sg()()(),Tl(2408,"td",21)(2409,"code",98),iN(2410,"PoTableDetail"),sg()(),Tl(2411,"td",24)(2412,"em")(2413,"strong"),iN(2414,"(opcional)"),sg()(),Tl(2415,"p"),iN(2416,"Define um objeto que segue a interface "),Tl(2417,"code"),iN(2418,"PoTableDetail"),sg(),iN(2419,", para as colunas de detalhes. Por exemplo:"),sg(),Tl(2420,"pre")(2421,"code"),iN(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),sg()()()(),Tl(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),iN(2427," disabled"),Gl(2428,"br"),sg()()(),Tl(2429,"td",21)(2430,"code",45),iN(2431,"Function"),sg()(),Tl(2432,"td",24)(2433,"em")(2434,"strong"),iN(2435,"(opcional)"),sg()(),Tl(2436,"p"),iN(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),Tl(2438,"em"),iN(2439,"link"),sg(),iN(2440," e sua a\xE7\xE3o."),sg(),Tl(2441,"blockquote")(2442,"p"),iN(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),Tl(2444,"code"),iN(2445,"link"),sg(),iN(2446,"."),sg()()()(),Tl(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),iN(2451," format"),Gl(2452,"br"),sg()()(),Tl(2453,"td",21)(2454,"code",31),iN(2455,"string"),sg()(),Tl(2456,"td",24)(2457,"em")(2458,"strong"),iN(2459,"(opcional)"),sg()(),Tl(2460,"p"),iN(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),sg(),Tl(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),iN(2466,"Formata\xE7\xE3o"),sg(),Tl(2467,"th"),iN(2468,"Type da Coluna"),sg(),Tl(2469,"th"),iN(2470,"Descri\xE7\xE3o"),sg(),Tl(2471,"th"),iN(2472,"Exemplos"),sg()()(),Tl(2473,"tbody")(2474,"tr")(2475,"td"),iN(2476,"Monet\xE1rio"),sg(),Tl(2477,"td")(2478,"code"),iN(2479,"currency"),sg()(),Tl(2480,"td"),iN(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),sg(),Tl(2482,"td")(2483,"code"),iN(2484,"'BRL'"),sg(),iN(2485,", "),Tl(2486,"code"),iN(2487,"'USD'"),sg(),iN(2488,", "),Tl(2489,"code"),iN(2490,"'EUR'"),sg(),iN(2491,", "),Tl(2492,"code"),iN(2493,"'RUB'"),sg()()(),Tl(2494,"tr")(2495,"td"),iN(2496,"Data"),sg(),Tl(2497,"td")(2498,"code"),iN(2499,"date"),sg()(),Tl(2500,"td"),iN(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),sg(),Tl(2502,"td")(2503,"code"),iN(2504,"'dd/MM/yyyy'"),sg(),iN(2505,", "),Tl(2506,"code"),iN(2507,"'dd-MM-yy'"),sg(),iN(2508,", "),Tl(2509,"code"),iN(2510,"'mm/dd/yyyy'"),sg()()(),Tl(2511,"tr")(2512,"td"),iN(2513,"Data/Hora"),sg(),Tl(2514,"td")(2515,"code"),iN(2516,"dateTime"),sg()(),Tl(2517,"td"),iN(2518,"Aceita os caracteres de dia(dd), m\xEAs(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e per\xEDodo(a para AM/PM). Caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy HH:mm:ss'"),sg(),Tl(2519,"td")(2520,"code"),iN(2521,"'dd/MM/yyyy HH:mm'"),sg(),iN(2522,", "),Tl(2523,"code"),iN(2524,"'dd/MM/yyyy HH:mm:ss'"),sg(),iN(2525,", "),Tl(2526,"code"),iN(2527,"'dd/MM/yyyy HH:mm:ss.SSS'"),sg(),iN(2528,", "),Tl(2529,"code"),iN(2530,"'MM/dd/yyyy hh:mm a'"),sg(),iN(2531,", "),Tl(2532,"code"),iN(2533,"'yyyy-MM-dd HH:mm'"),sg(),iN(2534,", "),Tl(2535,"code"),iN(2536,"'short'"),sg(),iN(2537,", "),Tl(2538,"code"),iN(2539,"'medium'"),sg()()(),Tl(2540,"tr")(2541,"td"),iN(2542,"Hora"),sg(),Tl(2543,"td")(2544,"code"),iN(2545,"time"),sg()(),Tl(2546,"td"),iN(2547,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),sg(),Tl(2548,"td")(2549,"code"),iN(2550,"'HH:mm'"),sg(),iN(2551,", "),Tl(2552,"code"),iN(2553,"'HH:mm:ss.ffffff'"),sg(),iN(2554,", "),Tl(2555,"code"),iN(2556,"'HH:mm:ss.ff'"),sg(),iN(2557,", "),Tl(2558,"code"),iN(2559,"'mm:ss.fff'"),sg()()(),Tl(2560,"tr")(2561,"td"),iN(2562,"N\xFAmero"),sg(),Tl(2563,"td")(2564,"code"),iN(2565,"number"),sg()(),Tl(2566,"td"),iN(2567,"Aceita um valor seguindo o padr\xE3o "),Tl(2568,"a",99)(2569,"strong"),iN(2570,"DecimalPipe"),sg()(),iN(2571," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),sg(),Tl(2572,"td")(2573,"code"),iN(2574,"'1.2-5'"),sg(),iN(2575," (ex.: "),Tl(2576,"code"),iN(2577,"50"),sg(),iN(2578," \u2192 "),Tl(2579,"code"),iN(2580,"50.00"),sg(),iN(2581,")"),sg()()()(),Tl(2582,"p"),iN(2583,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),sg()()(),Tl(2584,"tr",17)(2585,"td",18)(2586,"div",19)(2587,"span",20),iN(2588," icons"),Gl(2589,"br"),sg()()(),Tl(2590,"td",21)(2591,"code",100),iN(2592,"Array<PoTableColumnIcon>"),sg()(),Tl(2593,"td",24)(2594,"em")(2595,"strong"),iN(2596,"(opcional)"),sg()(),Tl(2597,"p"),iN(2598,"Define um "),Tl(2599,"em"),iN(2600,"array"),sg(),iN(2601," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),Tl(2602,"code"),iN(2603,"action"),sg(),iN(2604," e "),Tl(2605,"code"),iN(2606,"color"),sg(),iN(2607,`
definidos na coluna, \xE0 partir do `),Tl(2608,"em"),iN(2609,"value"),sg(),iN(2610," da "),Tl(2611,"a",101)(2612,"code"),iN(2613,"PoTableColumnIcon"),sg()(),iN(2614,", por exemplo:"),sg(),Tl(2615,"pre")(2616,"code"),iN(2617,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),sg()(),Tl(2618,"pre")(2619,"code"),iN(2620,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),sg()()()(),Tl(2621,"tr",17)(2622,"td",18)(2623,"div",19)(2624,"span",20),iN(2625," label"),Gl(2626,"br"),sg()()(),Tl(2627,"td",21)(2628,"code",31),iN(2629,"string"),sg()(),Tl(2630,"td",24)(2631,"em")(2632,"strong"),iN(2633,"(opcional)"),sg()(),Tl(2634,"p"),iN(2635,"Texto para t\xEDtulo da coluna."),sg(),Tl(2636,"p"),iN(2637,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(2638,"em"),iN(2639,"label"),sg(),iN(2640," o valor da propriedade "),Tl(2641,"em"),iN(2642,"property"),sg(),iN(2643," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(2644,"tr",17)(2645,"td",18)(2646,"div",19)(2647,"span",20),iN(2648," labels"),Gl(2649,"br"),sg()()(),Tl(2650,"td",21)(2651,"code",102),iN(2652,"Array<PoTableColumnLabel>"),sg()(),Tl(2653,"td",24)(2654,"em")(2655,"strong"),iN(2656,"(opcional)"),sg()(),Tl(2657,"p"),iN(2658,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Tl(2659,"code"),iN(2660,"PoTableColumnLabel"),sg(),iN(2661," na qual devem ser definidas os labels. Por exemplo:"),sg(),Tl(2662,"pre")(2663,"code"),iN(2664,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),sg()()()(),Tl(2665,"tr",17)(2666,"td",18)(2667,"div",19)(2668,"span",20),iN(2669," link"),Gl(2670,"br"),sg()()(),Tl(2671,"td",21)(2672,"code",31),iN(2673,"string"),sg()(),Tl(2674,"td",24)(2675,"em")(2676,"strong"),iN(2677,"(opcional)"),sg()(),Tl(2678,"p"),iN(2679,"Define o nome da propriedade que conter\xE1 o "),Tl(2680,"code"),iN(2681,"link"),sg(),iN(2682," a ser redirecionado."),sg()()(),Tl(2683,"tr",17)(2684,"td",18)(2685,"div",19)(2686,"span",20),iN(2687," mask"),Gl(2688,"br"),sg()()(),Tl(2689,"td",21)(2690,"code",31),iN(2691,"string"),sg()(),Tl(2692,"td",24)(2693,"em")(2694,"strong"),iN(2695,"(opcional)"),sg()(),Tl(2696,"p"),iN(2697,"Define uma m\xE1scara para formata\xE7\xE3o do valor exibido na coluna."),sg(),Tl(2698,"p"),iN(2699,"A m\xE1scara \xE9 aplicada somente para "),Tl(2700,"strong"),iN(2701,"exibi\xE7\xE3o"),sg(),iN(2702,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),sg(),Tl(2703,"p"),iN(2704,"Caracteres v\xE1lidos para a m\xE1scara:"),sg(),Tl(2705,"ul")(2706,"li")(2707,"code"),iN(2708,"9"),sg(),iN(2709," : aceita um d\xEDgito num\xE9rico (0-9)."),sg(),Tl(2710,"li")(2711,"code"),iN(2712,"@"),sg(),iN(2713," : aceita um caractere alfab\xE9tico (a-z, A-Z)."),sg(),Tl(2714,"li")(2715,"code"),iN(2716,"w"),sg(),iN(2717," : aceita um caractere alfanum\xE9rico (a-z, A-Z, 0-9)."),sg(),Tl(2718,"li"),iN(2719,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Tl(2720,"code"),iN(2721,"."),sg(),iN(2722,", "),Tl(2723,"code"),iN(2724,"-"),sg(),iN(2725,", "),Tl(2726,"code"),iN(2727,"/"),sg(),iN(2728,", "),Tl(2729,"code"),iN(2730,"("),sg(),iN(2731,", "),Tl(2732,"code"),iN(2733,")"),sg(),iN(2734,", "),Tl(2735,"code"),iN(2736,"+"),sg(),iN(2737,", "),Gl(2738,"code"),iN(2739,")."),sg()(),Tl(2740,"p"),iN(2741,"Exemplos de uso:"),sg(),Tl(2742,"pre")(2743,"code"),iN(2744,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),sg()(),Tl(2745,"blockquote")(2746,"p"),iN(2747,"Esta propriedade \xE9 utilizada apenas para colunas do tipo "),Tl(2748,"code"),iN(2749,"string"),sg(),iN(2750,` (padr\xE3o).
Caso a coluna possua um `),Tl(2751,"code"),iN(2752,"type"),sg(),iN(2753," diferente de "),Tl(2754,"code"),iN(2755,"string"),sg(),iN(2756,", a m\xE1scara ser\xE1 ignorada."),sg()()()(),Tl(2757,"tr",17)(2758,"td",18)(2759,"div",19)(2760,"span",20),iN(2761," property"),Gl(2762,"br"),sg()()(),Tl(2763,"td",21)(2764,"code",31),iN(2765,"string"),sg()(),Tl(2766,"td",24)(2767,"em")(2768,"strong"),iN(2769,"(opcional)"),sg()(),Tl(2770,"p"),iN(2771,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),sg(),Tl(2772,"pre")(2773,"code"),iN(2774,`{ property: 'address.street', label: 'Rua' }
`),sg()()()(),Tl(2775,"tr",17)(2776,"td",18)(2777,"div",19)(2778,"span",20),iN(2779," sortable"),Gl(2780,"br"),sg()()(),Tl(2781,"td",21)(2782,"code",22),iN(2783,"boolean"),sg()(),Tl(2784,"td",24)(2785,"em")(2786,"strong"),iN(2787,"(opcional)"),sg()(),Tl(2788,"p"),iN(2789,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),sg()()(),Tl(2790,"tr",17)(2791,"td",18)(2792,"div",19)(2793,"span",20),iN(2794," subtitles"),Gl(2795,"br"),sg()()(),Tl(2796,"td",21)(2797,"code",103),iN(2798,"Array<PoTableSubtitleColumn>"),sg()(),Tl(2799,"td",24)(2800,"em")(2801,"strong"),iN(2802,"(opcional)"),sg()(),Tl(2803,"p"),iN(2804,"Define um array de objetos para as colunas de legenda. Onde, "),Tl(2805,"code"),iN(2806,"subtitles"),sg(),iN(2807,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),sg(),Tl(2808,"pre")(2809,"code"),iN(2810,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),sg()(),Tl(2811,"p"),iN(2812,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),sg()()(),Tl(2813,"tr",17)(2814,"td",18)(2815,"div",19)(2816,"span",20),iN(2817," tooltip"),Gl(2818,"br"),sg()()(),Tl(2819,"td",21)(2820,"code",31),iN(2821,"string"),sg()(),Tl(2822,"td",24)(2823,"em")(2824,"strong"),iN(2825,"(opcional)"),sg()(),Tl(2826,"p"),iN(2827,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Tl(2828,"em"),iN(2829,"mouse"),sg(),iN(2830," sobre um texto."),sg(),Tl(2831,"blockquote")(2832,"p"),iN(2833,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),Tl(2834,"em"),iN(2835,"link"),sg(),iN(2836,"."),sg()(),Tl(2837,"blockquote")(2838,"p"),iN(2839,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Tl(2840,"em"),iN(2841,"tooltip"),sg(),iN(2842," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),sg()()()(),Tl(2843,"tr",17)(2844,"td",18)(2845,"div",19)(2846,"span",20),iN(2847," type"),Gl(2848,"br"),sg()()(),Tl(2849,"td",21)(2850,"code",31),iN(2851,"string"),sg()(),Tl(2852,"td",24)(2853,"em")(2854,"strong"),iN(2855,"(opcional)"),sg()(),Tl(2856,"p"),iN(2857,"Tipo da coluna."),sg(),Tl(2858,"p"),iN(2859,"Valores v\xE1lidos:"),sg(),Tl(2860,"ul")(2861,"li")(2862,"p")(2863,"code"),iN(2864,"boolean"),sg(),iN(2865,": Exibir\xE1 por padr\xE3o "),Tl(2866,"code"),iN(2867,"Sim"),sg(),iN(2868," e "),Tl(2869,"code"),iN(2870,"N\xE3o"),sg(),iN(2871," de acordo com os valores "),Tl(2872,"em"),iN(2873,"booleanos"),sg(),iN(2874,"."),sg(),Tl(2875,"blockquote")(2876,"p"),iN(2877,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),Tl(2878,"code"),iN(2879,"boolean"),sg(),iN(2880," desta interface."),sg()()(),Tl(2881,"li")(2882,"p")(2883,"code"),iN(2884,"currency"),sg(),iN(2885,": valores monet\xE1rios."),sg()(),Tl(2886,"li")(2887,"p")(2888,"code"),iN(2889,"date"),sg(),iN(2890,": valor de datas."),sg(),Tl(2891,"ul")(2892,"li"),iN(2893,"Aceita os tipos "),Tl(2894,"em"),iN(2895,"string"),sg(),iN(2896," e "),Tl(2897,"em"),iN(2898,"Date"),sg(),iN(2899,` padr\xE3o do Javascript,
por exemplo: `),Tl(2900,"code"),iN(2901,"'2017-11-28'"),sg(),iN(2902," ou "),Tl(2903,"code"),iN(2904,"new Date(2017, 10, 28)"),sg(),iN(2905,"."),sg()()(),Tl(2906,"li")(2907,"p")(2908,"code"),iN(2909,"dateTime"),sg(),iN(2910,": valor de data com hor\xE1rio."),sg(),Tl(2911,"ul")(2912,"li"),iN(2913,"Aceita o tipo "),Tl(2914,"em"),iN(2915,"string"),sg(),iN(2916," no formato "),Tl(2917,"strong"),iN(2918,"ISO-8601"),sg(),iN(2919," extendido "),Tl(2920,"strong"),iN(2921,"'yyyy-mm-ddTHH:mm:ss+|-hh:mm'"),sg(),iN(2922,`
ou `),Tl(2923,"strong"),iN(2924,"'yyyy-mm-ddTHH:mm+|-hh:mm'"),sg(),iN(2925,` (sem segundos),
e o tipo `),Tl(2926,"em"),iN(2927,"Date"),sg(),iN(2928," padr\xE3o do Javascript, por exemplo: "),Tl(2929,"code"),iN(2930,"'2017-11-28T00:00:00-02:00'"),sg(),iN(2931,", "),Tl(2932,"code"),iN(2933,"'2017-11-28T14:30-02:00'"),sg(),iN(2934," ou "),Tl(2935,"code"),iN(2936,"new Date(2017, 10, 28)"),sg(),iN(2937,"."),sg(),Tl(2938,"li"),iN(2939,"A formata\xE7\xE3o de exibi\xE7\xE3o pode ser configurada pela propriedade "),Tl(2940,"code"),iN(2941,"format"),sg(),iN(2942,"."),sg()()(),Tl(2943,"li")(2944,"p")(2945,"code"),iN(2946,"detail"),sg(),iN(2947,": array de objetos para o master-detail."),sg(),Tl(2948,"ul")(2949,"li"),iN(2950,"Incompat\xEDvel com "),Tl(2951,"code"),iN(2952,"virtual-scroll"),sg(),iN(2953,", que requer altura fixa nas linhas."),sg()()(),Tl(2954,"li")(2955,"p")(2956,"code"),iN(2957,"icon"),sg(),iN(2958,": "),Tl(2959,"em"),iN(2960,"array"),sg(),iN(2961," de "),Tl(2962,"em"),iN(2963,"string"),sg(),iN(2964," ou objetos para a coluna de \xEDcones."),sg()(),Tl(2965,"li")(2966,"p")(2967,"code"),iN(2968,"label"),sg(),iN(2969,": texto com destaque."),sg()(),Tl(2970,"li")(2971,"p")(2972,"code"),iN(2973,"link"),sg(),iN(2974,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),sg()(),Tl(2975,"li")(2976,"p")(2977,"code"),iN(2978,"number"),sg(),iN(2979,": valores num\xE9ricos."),sg()(),Tl(2980,"li")(2981,"p")(2982,"code"),iN(2983,"string"),sg(),iN(2984,": textos."),sg()(),Tl(2985,"li")(2986,"p")(2987,"code"),iN(2988,"subtitle"),sg(),iN(2989,": array de objetos para a coluna de legenda."),sg()(),Tl(2990,"li")(2991,"p")(2992,"code"),iN(2993,"time"),sg(),iN(2994,": valor de hor\xE1rio."),sg(),Tl(2995,"ul")(2996,"li"),iN(2997,"Aceita o tipo "),Tl(2998,"em"),iN(2999,"string"),sg(),iN(3e3," nos formatos "),Tl(3001,"strong"),iN(3002,"'HH:mm:ss'"),sg(),iN(3003," ou "),Tl(3004,"strong"),iN(3005,"'HH:mm:ss.ffffff'"),sg(),iN(3006,", por exemplo: "),Tl(3007,"code"),iN(3008,"'23:12:45'"),sg(),iN(3009,"."),sg()()(),Tl(3010,"li")(3011,"p")(3012,"code"),iN(3013,"cellTemplate"),sg(),iN(3014,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Tl(3015,"a",8),iN(3016,"PoTableCellTemplate"),sg(),iN(3017,"."),sg()(),Tl(3018,"li")(3019,"p")(3020,"code"),iN(3021,"columnTemplate"),sg(),iN(3022,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Tl(3023,"a",7),iN(3024,"PoTableColumnTemplate"),sg(),iN(3025,"."),sg()()()()(),Tl(3026,"tr",17)(3027,"td",18)(3028,"div",19)(3029,"span",20),iN(3030," visible"),Gl(3031,"br"),sg()()(),Tl(3032,"td",21)(3033,"code",22),iN(3034,"boolean"),sg()(),Tl(3035,"td",24)(3036,"em")(3037,"strong"),iN(3038,"(opcional)"),sg()(),Tl(3039,"p"),iN(3040,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Tl(3041,"strong"),iN(3042,"gerenciador de colunas"),sg(),iN(3043,"."),sg(),Tl(3044,"blockquote")(3045,"p"),iN(3046,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),Tl(3047,"code"),iN(3048,"p-max-columns"),sg(),iN(3049,"."),sg()()()(),Tl(3050,"tr",17)(3051,"td",18)(3052,"div",19)(3053,"span",20),iN(3054," width"),Gl(3055,"br"),sg()()(),Tl(3056,"td",21)(3057,"code",31),iN(3058,"string"),sg()(),Tl(3059,"td",24)(3060,"em")(3061,"strong"),iN(3062,"(opcional)"),sg()(),Tl(3063,"p"),iN(3064,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),sg(),Tl(3065,"ul")(3066,"li"),iN(3067,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),sg(),Tl(3068,"li"),iN(3069,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),sg()()()()(),Tl(3070,"h4",44)(3071,"code",5),iN(3072,"PoTableLiterals"),sg()(),Tl(3073,"div",2)(3074,"p"),iN(3075,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(3076,"code"),iN(3077,"po-table"),sg(),iN(3078,"."),sg()(),Tl(3079,"h4",13),iN(3080,"Propriedades"),sg(),Tl(3081,"table",14)(3082,"tr",15)(3083,"th",16),iN(3084,"Nome"),sg(),Tl(3085,"th",16),iN(3086,"Tipo"),sg(),Tl(3087,"th",16),iN(3088,"Descri\xE7\xE3o"),sg()(),Tl(3089,"tr",17)(3090,"td",18)(3091,"div",19)(3092,"span",20),iN(3093," bodyDelete"),Gl(3094,"br"),sg()()(),Tl(3095,"td",21)(3096,"code",31),iN(3097,"string"),sg()(),Tl(3098,"td",24)(3099,"em")(3100,"strong"),iN(3101,"(opcional)"),sg()(),Tl(3102,"p"),iN(3103,"Texto no corpo do Modal de exclus\xE3o"),sg()()(),Tl(3104,"tr",17)(3105,"td",18)(3106,"div",19)(3107,"span",20),iN(3108," cancel"),Gl(3109,"br"),sg()()(),Tl(3110,"td",21)(3111,"code",31),iN(3112,"string"),sg()(),Tl(3113,"td",24)(3114,"em")(3115,"strong"),iN(3116,"(opcional)"),sg()(),Tl(3117,"p"),iN(3118,"Texto no Modal para cancelar a exclus\xE3o"),sg()()(),Tl(3119,"tr",17)(3120,"td",18)(3121,"div",19)(3122,"span",20),iN(3123," columnsManager"),Gl(3124,"br"),sg()()(),Tl(3125,"td",21)(3126,"code",31),iN(3127,"string"),sg()(),Tl(3128,"td",24)(3129,"em")(3130,"strong"),iN(3131,"(opcional)"),sg()(),Tl(3132,"p"),iN(3133,"Texto do "),Tl(3134,"strong"),iN(3135,"Gerenciador de colunas"),sg(),iN(3136," localizado no canto superior direito da tabela."),sg()()(),Tl(3137,"tr",17)(3138,"td",18)(3139,"div",19)(3140,"span",20),iN(3141," completeSubtitle"),Gl(3142,"br"),sg()()(),Tl(3143,"td",21)(3144,"code",31),iN(3145,"string"),sg()(),Tl(3146,"td",24)(3147,"em")(3148,"strong"),iN(3149,"(opcional)"),sg()(),Tl(3150,"p"),iN(3151,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),sg()()(),Tl(3152,"tr",17)(3153,"td",18)(3154,"div",19)(3155,"span",20),iN(3156," delete"),Gl(3157,"br"),sg()()(),Tl(3158,"td",21)(3159,"code",31),iN(3160,"string"),sg()(),Tl(3161,"td",24)(3162,"em")(3163,"strong"),iN(3164,"(opcional)"),sg()(),Tl(3165,"p"),iN(3166,"Texto no Modal para confirmar a exclus\xE3o"),sg()()(),Tl(3167,"tr",17)(3168,"td",18)(3169,"div",19)(3170,"span",20),iN(3171," deleteApiError"),Gl(3172,"br"),sg()()(),Tl(3173,"td",21)(3174,"code",31),iN(3175,"string"),sg()(),Tl(3176,"td",24)(3177,"em")(3178,"strong"),iN(3179,"(opcional)"),sg()(),Tl(3180,"p"),iN(3181,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),sg()()(),Tl(3182,"tr",17)(3183,"td",18)(3184,"div",19)(3185,"span",20),iN(3186," deleteSuccessful"),Gl(3187,"br"),sg()()(),Tl(3188,"td",21)(3189,"code",31),iN(3190,"string"),sg()(),Tl(3191,"td",24)(3192,"em")(3193,"strong"),iN(3194,"(opcional)"),sg()(),Tl(3195,"p"),iN(3196,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),sg()()(),Tl(3197,"tr",17)(3198,"td",18)(3199,"div",19)(3200,"span",20),iN(3201," loadMoreData"),Gl(3202,"br"),sg()()(),Tl(3203,"td",21)(3204,"code",31),iN(3205,"string"),sg()(),Tl(3206,"td",24)(3207,"em")(3208,"strong"),iN(3209,"(opcional)"),sg()(),Tl(3210,"p"),iN(3211,"Texto do bot\xE3o de "),Tl(3212,"strong"),iN(3213,"Carregar mais resultados"),sg(),iN(3214," localizado no rodap\xE9 da tabela."),sg()()(),Tl(3215,"tr",17)(3216,"td",18)(3217,"div",19)(3218,"span",20),iN(3219," loadingData"),Gl(3220,"br"),sg()()(),Tl(3221,"td",21)(3222,"code",31),iN(3223,"string"),sg()(),Tl(3224,"td",24)(3225,"em")(3226,"strong"),iN(3227,"(opcional)"),sg()(),Tl(3228,"p"),iN(3229,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),sg()()(),Tl(3230,"tr",17)(3231,"td",18)(3232,"div",19)(3233,"span",20),iN(3234," multipleItems"),Gl(3235,"br"),sg()()(),Tl(3236,"td",21)(3237,"code",31),iN(3238,"string"),sg()(),Tl(3239,"td",24)(3240,"em")(3241,"strong"),iN(3242,"(opcional)"),sg()(),Tl(3243,"p"),iN(3244,"Texto exibido quando apenas 1 item for selecionado no checkbox."),sg()()(),Tl(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),iN(3249," noColumns"),Gl(3250,"br"),sg()()(),Tl(3251,"td",21)(3252,"code",31),iN(3253,"string"),sg()(),Tl(3254,"td",24)(3255,"em")(3256,"strong"),iN(3257,"(opcional)"),sg()(),Tl(3258,"p"),iN(3259,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),sg()()(),Tl(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),iN(3264," noData"),Gl(3265,"br"),sg()()(),Tl(3266,"td",21)(3267,"code",31),iN(3268,"string"),sg()(),Tl(3269,"td",24)(3270,"em")(3271,"strong"),iN(3272,"(opcional)"),sg()(),Tl(3273,"p"),iN(3274,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),sg()()(),Tl(3275,"tr",17)(3276,"td",18)(3277,"div",19)(3278,"span",20),iN(3279," noItem"),Gl(3280,"br"),sg()()(),Tl(3281,"td",21)(3282,"code",31),iN(3283,"string"),sg()(),Tl(3284,"td",24)(3285,"em")(3286,"strong"),iN(3287,"(opcional)"),sg()(),Tl(3288,"p"),iN(3289,"Texto exibido quando nenhum item for selecionado no checkbox."),sg()()(),Tl(3290,"tr",17)(3291,"td",18)(3292,"div",19)(3293,"span",20),iN(3294," noVisibleColumn"),Gl(3295,"br"),sg()()(),Tl(3296,"td",21)(3297,"code",31),iN(3298,"string"),sg()(),Tl(3299,"td",24)(3300,"em")(3301,"strong"),iN(3302,"(opcional)"),sg()(),Tl(3303,"p"),iN(3304,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),sg()()(),Tl(3305,"tr",17)(3306,"td",18)(3307,"div",19)(3308,"span",20),iN(3309," oneItem"),Gl(3310,"br"),sg()()(),Tl(3311,"td",21)(3312,"code",31),iN(3313,"string"),sg()(),Tl(3314,"td",24)(3315,"em")(3316,"strong"),iN(3317,"(opcional)"),sg()(),Tl(3318,"p"),iN(3319,"Texto exibido quando apenas 1 item for selecionado no checkbox."),sg()()(),Tl(3320,"tr",17)(3321,"td",18)(3322,"div",19)(3323,"span",20),iN(3324," seeCompleteSubtitle"),Gl(3325,"br"),sg()()(),Tl(3326,"td",21)(3327,"code",31),iN(3328,"string"),sg()(),Tl(3329,"td",24)(3330,"em")(3331,"strong"),iN(3332,"(opcional)"),sg()(),Tl(3333,"p"),iN(3334,"Texto do bot\xE3o "),Tl(3335,"strong"),iN(3336,"Ver legenda completa"),sg(),iN(3337," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),sg()()()(),Tl(3338,"h4",44)(3339,"code",5),iN(3340,"PoTableColumnIcon"),sg()(),Tl(3341,"div",2)(3342,"p"),Gl(3343,"a",104),sg(),Tl(3344,"p"),iN(3345,"Interface que define a coluna com \xEDcone(s) do "),Tl(3346,"code"),iN(3347,"po-table"),sg(),iN(3348,"."),sg()(),Tl(3349,"h4",13),iN(3350,"Propriedades"),sg(),Tl(3351,"table",14)(3352,"tr",15)(3353,"th",16),iN(3354,"Nome"),sg(),Tl(3355,"th",16),iN(3356,"Tipo"),sg(),Tl(3357,"th",16),iN(3358,"Descri\xE7\xE3o"),sg()(),Tl(3359,"tr",17)(3360,"td",18)(3361,"div",19)(3362,"span",20),iN(3363," action"),Gl(3364,"br"),sg()()(),Tl(3365,"td",21)(3366,"code",45),iN(3367,"Function"),sg()(),Tl(3368,"td",24)(3369,"em")(3370,"strong"),iN(3371,"(opcional)"),sg()(),Tl(3372,"p"),iN(3373,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),sg()()(),Tl(3374,"tr",17)(3375,"td",18)(3376,"div",19)(3377,"span",20),iN(3378," color"),Gl(3379,"br"),sg()()(),Tl(3380,"td",21)(3381,"code",31),iN(3382,"string "),sg(),Tl(3383,"code",45),iN(3384," Function"),sg()(),Tl(3385,"td",24)(3386,"em")(3387,"strong"),iN(3388,"(opcional)"),sg()(),Tl(3389,"p"),iN(3390,"Define a cor do \xEDcone."),sg(),Tl(3391,"p"),iN(3392,"Valores v\xE1lidos:"),sg(),Tl(3393,"ul")(3394,"li"),Gl(3395,"span",51),Tl(3396,"code"),iN(3397,"color-01"),sg()(),Tl(3398,"li"),Gl(3399,"span",52),Tl(3400,"code"),iN(3401,"color-02"),sg()(),Tl(3402,"li"),Gl(3403,"span",53),Tl(3404,"code"),iN(3405,"color-03"),sg()(),Tl(3406,"li"),Gl(3407,"span",54),Tl(3408,"code"),iN(3409,"color-04"),sg()(),Tl(3410,"li"),Gl(3411,"span",55),Tl(3412,"code"),iN(3413,"color-05"),sg()(),Tl(3414,"li"),Gl(3415,"span",56),Tl(3416,"code"),iN(3417,"color-06"),sg()(),Tl(3418,"li"),Gl(3419,"span",57),Tl(3420,"code"),iN(3421,"color-07"),sg()(),Tl(3422,"li"),Gl(3423,"span",58),Tl(3424,"code"),iN(3425,"color-08"),sg()(),Tl(3426,"li"),Gl(3427,"span",59),Tl(3428,"code"),iN(3429,"color-09"),sg()(),Tl(3430,"li"),Gl(3431,"span",60),Tl(3432,"code"),iN(3433,"color-10"),sg()(),Tl(3434,"li"),Gl(3435,"span",61),Tl(3436,"code"),iN(3437,"color-11"),sg()(),Tl(3438,"li"),Gl(3439,"span",62),Tl(3440,"code"),iN(3441,"color-12"),sg()()(),Tl(3442,"blockquote")(3443,"p"),iN(3444,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(3445,"strong"),iN(3446,"Caption Tag Colors"),sg(),iN(3447,":"),sg()(),Tl(3448,"ul")(3449,"li"),Gl(3450,"span",63),Tl(3451,"code"),iN(3452,"caption-tag-01"),sg(),Gl(3453,"span",64),Tl(3454,"code"),iN(3455,"caption-tag-02"),sg(),Gl(3456,"span",65),Tl(3457,"code"),iN(3458,"caption-tag-03"),sg(),Gl(3459,"span",66),Tl(3460,"code"),iN(3461,"caption-tag-04"),sg(),Gl(3462,"span",67),Tl(3463,"code"),iN(3464,"caption-tag-05"),sg()(),Tl(3465,"li"),Gl(3466,"span",68),Tl(3467,"code"),iN(3468,"caption-tag-06"),sg(),Gl(3469,"span",69),Tl(3470,"code"),iN(3471,"caption-tag-07"),sg(),Gl(3472,"span",70),Tl(3473,"code"),iN(3474,"caption-tag-08"),sg(),Gl(3475,"span",71),Tl(3476,"code"),iN(3477,"caption-tag-09"),sg(),Gl(3478,"span",72),Tl(3479,"code"),iN(3480,"caption-tag-10"),sg()(),Tl(3481,"li"),Gl(3482,"span",73),Tl(3483,"code"),iN(3484,"caption-tag-11"),sg(),Gl(3485,"span",74),Tl(3486,"code"),iN(3487,"caption-tag-12"),sg(),Gl(3488,"span",75),Tl(3489,"code"),iN(3490,"caption-tag-13"),sg(),Gl(3491,"span",76),Tl(3492,"code"),iN(3493,"caption-tag-14"),sg(),Gl(3494,"span",77),Tl(3495,"code"),iN(3496,"caption-tag-15"),sg()(),Tl(3497,"li"),Gl(3498,"span",78),Tl(3499,"code"),iN(3500,"caption-tag-16"),sg(),Gl(3501,"span",79),Tl(3502,"code"),iN(3503,"caption-tag-17"),sg(),Gl(3504,"span",80),Tl(3505,"code"),iN(3506,"caption-tag-18"),sg(),Gl(3507,"span",81),Tl(3508,"code"),iN(3509,"caption-tag-19"),sg(),Gl(3510,"span",82),Tl(3511,"code"),iN(3512,"caption-tag-20"),sg()(),Tl(3513,"li"),Gl(3514,"span",83),Tl(3515,"code"),iN(3516,"caption-tag-21"),sg(),Gl(3517,"span",84),Tl(3518,"code"),iN(3519,"caption-tag-22"),sg(),Gl(3520,"span",85),Tl(3521,"code"),iN(3522,"caption-tag-23"),sg(),Gl(3523,"span",86),Tl(3524,"code"),iN(3525,"caption-tag-24"),sg(),Gl(3526,"span",87),Tl(3527,"code"),iN(3528,"caption-tag-25"),sg()(),Tl(3529,"li"),Gl(3530,"span",88),Tl(3531,"code"),iN(3532,"caption-tag-26"),sg(),Gl(3533,"span",89),Tl(3534,"code"),iN(3535,"caption-tag-27"),sg(),Gl(3536,"span",90),Tl(3537,"code"),iN(3538,"caption-tag-28"),sg(),Gl(3539,"span",91),Tl(3540,"code"),iN(3541,"caption-tag-29"),sg(),Gl(3542,"span",92),Tl(3543,"code"),iN(3544,"caption-tag-30"),sg()(),Tl(3545,"li"),Gl(3546,"span",93),Tl(3547,"code"),iN(3548,"caption-tag-31"),sg(),Gl(3549,"span",94),Tl(3550,"code"),iN(3551,"caption-tag-32"),sg(),Gl(3552,"span",95),Tl(3553,"code"),iN(3554,"caption-tag-33"),sg(),Gl(3555,"span",96),Tl(3556,"code"),iN(3557,"caption-tag-34"),sg(),Gl(3558,"span",97),Tl(3559,"code"),iN(3560,"caption-tag-35"),sg()()()()(),Tl(3561,"tr",17)(3562,"td",18)(3563,"div",19)(3564,"span",20),iN(3565," disabled"),Gl(3566,"br"),sg()()(),Tl(3567,"td",21)(3568,"code",45),iN(3569,"Function"),sg()(),Tl(3570,"td",24)(3571,"em")(3572,"strong"),iN(3573,"(opcional)"),sg()(),Tl(3574,"p"),iN(3575,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),sg()()(),Tl(3576,"tr",17)(3577,"td",18)(3578,"div",19)(3579,"span",20),iN(3580," icon"),Gl(3581,"br"),sg()()(),Tl(3582,"td",21)(3583,"code",31),iN(3584,"string "),sg(),Tl(3585,"code",46),iN(3586," TemplateRef<void>"),sg()(),Tl(3587,"td",24)(3588,"em")(3589,"strong"),iN(3590,"(opcional)"),sg()(),Tl(3591,"p"),iN(3592,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(3593,"a",26),iN(3594,"Biblioteca de \xEDcones"),sg(),iN(3595,". conforme exemplo abaixo:"),sg(),Tl(3596,"pre")(3597,"code"),iN(3598,`[ { icon: 'an an-plus' } ]
`),sg()(),Tl(3599,"p"),iN(3600,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),sg(),Tl(3601,"pre")(3602,"code"),iN(3603,`[ {  icon: 'fas fa-plus' } ]
`),sg()(),Tl(3604,"p"),iN(3605,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(3606,"code"),iN(3607,"TemplateRef"),sg(),iN(3608,`, conforme exemplo abaixo:
`),Tl(3609,"code"),iN(3610,"component.html"),sg(),iN(3611,":"),sg(),Tl(3612,"pre")(3613,"code"),iN(3614,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),sg()(),Tl(3615,"p")(3616,"code"),iN(3617,"component.ts"),sg(),iN(3618,":"),sg(),Tl(3619,"pre")(3620,"code"),iN(3621,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),sg()(),Tl(3622,"blockquote")(3623,"p"),iN(3624,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),Tl(3625,"code"),iN(3626,"value"),sg(),iN(3627,"."),sg()()()(),Tl(3628,"tr",17)(3629,"td",18)(3630,"div",19)(3631,"span",20),iN(3632," tooltip"),Gl(3633,"br"),sg()()(),Tl(3634,"td",21)(3635,"code",31),iN(3636,"string"),sg()(),Tl(3637,"td",24)(3638,"em")(3639,"strong"),iN(3640,"(opcional)"),sg()(),Tl(3641,"p"),iN(3642,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Tl(3643,"em"),iN(3644,"mouse"),sg(),iN(3645," em cima do \xEDcone."),sg()()(),Tl(3646,"tr",17)(3647,"td",18)(3648,"div",19)(3649,"span",20),iN(3650," value"),Gl(3651,"br"),sg()()(),Tl(3652,"td",21)(3653,"code",31),iN(3654,"string"),sg()(),Tl(3655,"td",24)(3656,"p"),iN(3657,"Define o valor do \xEDcone que ser\xE1 exibido."),sg()()()(),Tl(3658,"h4",44)(3659,"code",5),iN(3660,"PoTableColumnLabel"),sg()(),Tl(3661,"div",2)(3662,"p"),iN(3663,"Interface para configura\xE7\xE3o das colunas de labels do "),Tl(3664,"code"),iN(3665,"po-table"),sg(),iN(3666,"."),sg()(),Tl(3667,"h4",13),iN(3668,"Propriedades"),sg(),Tl(3669,"table",14)(3670,"tr",15)(3671,"th",16),iN(3672,"Nome"),sg(),Tl(3673,"th",16),iN(3674,"Tipo"),sg(),Tl(3675,"th",16),iN(3676,"Descri\xE7\xE3o"),sg()(),Tl(3677,"tr",17)(3678,"td",18)(3679,"div",19)(3680,"span",20),iN(3681," color"),Gl(3682,"br"),sg()()(),Tl(3683,"td",21)(3684,"code",31),iN(3685,"string"),sg()(),Tl(3686,"td",24)(3687,"em")(3688,"strong"),iN(3689,"(opcional)"),sg()(),Tl(3690,"p"),iN(3691,"Define a cor do label."),sg(),Tl(3692,"p"),iN(3693,"Valores v\xE1lidos:"),sg(),Tl(3694,"ul")(3695,"li"),Gl(3696,"span",51),Tl(3697,"code"),iN(3698,"color-01"),sg()(),Tl(3699,"li"),Gl(3700,"span",52),Tl(3701,"code"),iN(3702,"color-02"),sg()(),Tl(3703,"li"),Gl(3704,"span",53),Tl(3705,"code"),iN(3706,"color-03"),sg()(),Tl(3707,"li"),Gl(3708,"span",54),Tl(3709,"code"),iN(3710,"color-04"),sg()(),Tl(3711,"li"),Gl(3712,"span",55),Tl(3713,"code"),iN(3714,"color-05"),sg()(),Tl(3715,"li"),Gl(3716,"span",56),Tl(3717,"code"),iN(3718,"color-06"),sg()(),Tl(3719,"li"),Gl(3720,"span",57),Tl(3721,"code"),iN(3722,"color-07"),sg()(),Tl(3723,"li"),Gl(3724,"span",58),Tl(3725,"code"),iN(3726,"color-08"),sg()(),Tl(3727,"li"),Gl(3728,"span",59),Tl(3729,"code"),iN(3730,"color-09"),sg()(),Tl(3731,"li"),Gl(3732,"span",60),Tl(3733,"code"),iN(3734,"color-10"),sg()(),Tl(3735,"li"),Gl(3736,"span",61),Tl(3737,"code"),iN(3738,"color-11"),sg()(),Tl(3739,"li"),Gl(3740,"span",62),Tl(3741,"code"),iN(3742,"color-12"),sg()()(),Tl(3743,"blockquote")(3744,"p"),iN(3745,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(3746,"strong"),iN(3747,"Caption Tag Colors"),sg(),iN(3748,":"),sg()(),Tl(3749,"ul")(3750,"li"),Gl(3751,"span",63),Tl(3752,"code"),iN(3753,"caption-tag-01"),sg(),Gl(3754,"span",64),Tl(3755,"code"),iN(3756,"caption-tag-02"),sg(),Gl(3757,"span",65),Tl(3758,"code"),iN(3759,"caption-tag-03"),sg(),Gl(3760,"span",66),Tl(3761,"code"),iN(3762,"caption-tag-04"),sg(),Gl(3763,"span",67),Tl(3764,"code"),iN(3765,"caption-tag-05"),sg()(),Tl(3766,"li"),Gl(3767,"span",68),Tl(3768,"code"),iN(3769,"caption-tag-06"),sg(),Gl(3770,"span",69),Tl(3771,"code"),iN(3772,"caption-tag-07"),sg(),Gl(3773,"span",70),Tl(3774,"code"),iN(3775,"caption-tag-08"),sg(),Gl(3776,"span",71),Tl(3777,"code"),iN(3778,"caption-tag-09"),sg(),Gl(3779,"span",72),Tl(3780,"code"),iN(3781,"caption-tag-10"),sg()(),Tl(3782,"li"),Gl(3783,"span",73),Tl(3784,"code"),iN(3785,"caption-tag-11"),sg(),Gl(3786,"span",74),Tl(3787,"code"),iN(3788,"caption-tag-12"),sg(),Gl(3789,"span",75),Tl(3790,"code"),iN(3791,"caption-tag-13"),sg(),Gl(3792,"span",76),Tl(3793,"code"),iN(3794,"caption-tag-14"),sg(),Gl(3795,"span",77),Tl(3796,"code"),iN(3797,"caption-tag-15"),sg()(),Tl(3798,"li"),Gl(3799,"span",78),Tl(3800,"code"),iN(3801,"caption-tag-16"),sg(),Gl(3802,"span",79),Tl(3803,"code"),iN(3804,"caption-tag-17"),sg(),Gl(3805,"span",80),Tl(3806,"code"),iN(3807,"caption-tag-18"),sg(),Gl(3808,"span",81),Tl(3809,"code"),iN(3810,"caption-tag-19"),sg(),Gl(3811,"span",82),Tl(3812,"code"),iN(3813,"caption-tag-20"),sg()(),Tl(3814,"li"),Gl(3815,"span",83),Tl(3816,"code"),iN(3817,"caption-tag-21"),sg(),Gl(3818,"span",84),Tl(3819,"code"),iN(3820,"caption-tag-22"),sg(),Gl(3821,"span",85),Tl(3822,"code"),iN(3823,"caption-tag-23"),sg(),Gl(3824,"span",86),Tl(3825,"code"),iN(3826,"caption-tag-24"),sg(),Gl(3827,"span",87),Tl(3828,"code"),iN(3829,"caption-tag-25"),sg()(),Tl(3830,"li"),Gl(3831,"span",88),Tl(3832,"code"),iN(3833,"caption-tag-26"),sg(),Gl(3834,"span",89),Tl(3835,"code"),iN(3836,"caption-tag-27"),sg(),Gl(3837,"span",90),Tl(3838,"code"),iN(3839,"caption-tag-28"),sg(),Gl(3840,"span",91),Tl(3841,"code"),iN(3842,"caption-tag-29"),sg(),Gl(3843,"span",92),Tl(3844,"code"),iN(3845,"caption-tag-30"),sg()(),Tl(3846,"li"),Gl(3847,"span",93),Tl(3848,"code"),iN(3849,"caption-tag-31"),sg(),Gl(3850,"span",94),Tl(3851,"code"),iN(3852,"caption-tag-32"),sg(),Gl(3853,"span",95),Tl(3854,"code"),iN(3855,"caption-tag-33"),sg(),Gl(3856,"span",96),Tl(3857,"code"),iN(3858,"caption-tag-34"),sg(),Gl(3859,"span",97),Tl(3860,"code"),iN(3861,"caption-tag-35"),sg()()(),Tl(3862,"p"),iN(3863,"Exemplo de uso:"),sg(),Tl(3864,"pre")(3865,"code"),iN(3866,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),sg()()()(),Tl(3867,"tr",17)(3868,"td",18)(3869,"div",19)(3870,"span",20),iN(3871," icon"),Gl(3872,"br"),sg()()(),Tl(3873,"td",21)(3874,"code",22),iN(3875,"boolean "),sg(),Tl(3876,"code",31),iN(3877," string "),sg(),Tl(3878,"code",46),iN(3879," TemplateRef<void>"),sg()(),Tl(3880,"td",24)(3881,"em")(3882,"strong"),iN(3883,"(opcional)"),sg()(),Tl(3884,"p"),iN(3885,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Tl(3886,"em"),iN(3887,"tag"),sg(),iN(3888,"."),sg(),Tl(3889,"p"),iN(3890,"Quando "),Tl(3891,"code"),iN(3892,"p-type"),sg(),iN(3893," estiver definida, basta informar um valor igual a "),Tl(3894,"code"),iN(3895,"true"),sg(),iN(3896," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),sg(),Tl(3897,"ul")(3898,"li"),Gl(3899,"span",105),iN(3900," - "),Tl(3901,"code"),iN(3902,"success"),sg()(),Tl(3903,"li"),Gl(3904,"span",106),iN(3905," - "),Tl(3906,"code"),iN(3907,"warning"),sg()(),Tl(3908,"li"),Gl(3909,"span",107),iN(3910," - "),Tl(3911,"code"),iN(3912,"danger"),sg()(),Tl(3913,"li"),Gl(3914,"span",108),iN(3915," - "),Tl(3916,"code"),iN(3917,"info"),sg()()(),Tl(3918,"p"),iN(3919,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(3920,"a",26),iN(3921,"Biblioteca de \xEDcones"),sg(),iN(3922,". conforme exemplo abaixo:"),sg(),Tl(3923,"pre")(3924,"code"),iN(3925,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),sg()(),Tl(3926,"p"),iN(3927,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(3928,"em"),iN(3929,"Font Awesome"),sg(),iN(3930,", da seguinte forma:"),sg(),Tl(3931,"pre")(3932,"code"),iN(3933,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),sg()(),Tl(3934,"p"),iN(3935,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(3936,"code"),iN(3937,"TemplateRef"),sg(),iN(3938,", conforme exemplo abaixo:"),sg(),Tl(3939,"pre")(3940,"code"),iN(3941,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(3942,"blockquote")(3943,"p"),iN(3944,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(3945,"code"),iN(3946,"font-size: inherit"),sg(),iN(3947," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(3948,"tr",17)(3949,"td",18)(3950,"div",19)(3951,"span",20),iN(3952," label"),Gl(3953,"br"),sg()()(),Tl(3954,"td",21)(3955,"code",31),iN(3956,"string"),sg()(),Tl(3957,"td",24)(3958,"p"),iN(3959,"Texto que ser\xE1 exibido na coluna."),sg()()(),Tl(3960,"tr",17)(3961,"td",18)(3962,"div",19)(3963,"span",20),iN(3964," textColor"),Gl(3965,"br"),sg()()(),Tl(3966,"td",21)(3967,"code",31),iN(3968,"string"),sg()(),Tl(3969,"td",24)(3970,"em")(3971,"strong"),iN(3972,"(opcional)"),sg()(),Tl(3973,"p"),iN(3974,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Tl(3975,"ul")(3976,"li")(3977,"p"),iN(3978,"Hexadeximal, por exemplo "),Tl(3979,"code"),iN(3980,"#c64840"),sg(),iN(3981,";"),sg()(),Tl(3982,"li")(3983,"p"),iN(3984,"RGB, como "),Tl(3985,"code"),iN(3986,"rgb(0, 0, 165)"),sg(),iN(3987,";"),sg()(),Tl(3988,"li")(3989,"p"),iN(3990,"O nome da cor, por exemplo "),Tl(3991,"code"),iN(3992,"blue"),sg(),iN(3993,";"),sg()(),Tl(3994,"li")(3995,"p"),iN(3996,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),sg(),Tl(3997,"ul")(3998,"li"),Gl(3999,"span",51),Tl(4e3,"code"),iN(4001,"color-01"),sg()(),Tl(4002,"li"),Gl(4003,"span",52),Tl(4004,"code"),iN(4005,"color-02"),sg()(),Tl(4006,"li"),Gl(4007,"span",53),Tl(4008,"code"),iN(4009,"color-03"),sg()(),Tl(4010,"li"),Gl(4011,"span",54),Tl(4012,"code"),iN(4013,"color-04"),sg()(),Tl(4014,"li"),Gl(4015,"span",55),Tl(4016,"code"),iN(4017,"color-05"),sg()(),Tl(4018,"li"),Gl(4019,"span",56),Tl(4020,"code"),iN(4021,"color-06"),sg()(),Tl(4022,"li"),Gl(4023,"span",57),Tl(4024,"code"),iN(4025,"color-07"),sg()(),Tl(4026,"li"),Gl(4027,"span",58),Tl(4028,"code"),iN(4029,"color-08"),sg()(),Tl(4030,"li"),Gl(4031,"span",59),Tl(4032,"code"),iN(4033,"color-09"),sg()(),Tl(4034,"li"),Gl(4035,"span",60),Tl(4036,"code"),iN(4037,"color-10"),sg()(),Tl(4038,"li"),Gl(4039,"span",61),Tl(4040,"code"),iN(4041,"color-11"),sg()(),Tl(4042,"li"),Gl(4043,"span",62),Tl(4044,"code"),iN(4045,"color-12"),sg()()()(),Tl(4046,"li")(4047,"p"),iN(4048,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),sg()()(),Tl(4049,"blockquote")(4050,"p")(4051,"strong"),iN(4052,"Aten\xE7\xE3o:"),sg(),iN(4053," A propriedade "),Tl(4054,"code"),iN(4055,"p-type"),sg(),iN(4056," sobrep\xF5e esta defini\xE7\xE3o."),sg()(),Tl(4057,"blockquote")(4058,"p")(4059,"strong"),iN(4060,"Aten\xE7\xE3o:"),sg(),iN(4061," As cores da paleta "),Tl(4062,"strong"),iN(4063,"Caption Tag Colors"),sg(),iN(4064," ("),Tl(4065,"code"),iN(4066,"caption-tag-01"),sg(),iN(4067," a "),Tl(4068,"code"),iN(4069,"caption-tag-35"),sg(),iN(4070,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),sg()()()(),Tl(4071,"tr",17)(4072,"td",18)(4073,"div",19)(4074,"span",20),iN(4075," tooltip"),Gl(4076,"br"),sg()()(),Tl(4077,"td",21)(4078,"code",31),iN(4079,"string"),sg()(),Tl(4080,"td",24)(4081,"em")(4082,"strong"),iN(4083,"(opcional)"),sg()(),Tl(4084,"p"),iN(4085,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Tl(4086,"em"),iN(4087,"mouse"),sg(),iN(4088," em cima do "),Tl(4089,"em"),iN(4090,"label"),sg(),iN(4091,"."),sg(),Tl(4092,"blockquote")(4093,"p"),iN(4094,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),sg()()()(),Tl(4095,"tr",17)(4096,"td",18)(4097,"div",19)(4098,"span",20),iN(4099," type"),Gl(4100,"br"),sg()()(),Tl(4101,"td",21)(4102,"code",109),iN(4103,"PoTagType"),sg()(),Tl(4104,"td",24)(4105,"em")(4106,"strong"),iN(4107,"(opcional)"),sg()(),Tl(4108,"p"),iN(4109,"Define o tipo da "),Tl(4110,"em"),iN(4111,"tag"),sg(),iN(4112,"."),sg(),Tl(4113,"p"),iN(4114,"Valores v\xE1lidos:"),sg(),Tl(4115,"ul")(4116,"li")(4117,"code"),iN(4118,"success"),sg(),iN(4119,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),sg(),Tl(4120,"li")(4121,"code"),iN(4122,"warning"),sg(),iN(4123,": cor amarela que representa aviso ou advert\xEAncia."),sg(),Tl(4124,"li")(4125,"code"),iN(4126,"danger"),sg(),iN(4127,": cor vermelha para erro ou aviso cr\xEDtico."),sg(),Tl(4128,"li")(4129,"code"),iN(4130,"info"),sg(),iN(4131,": cor cinza escuro que caracteriza conte\xFAdo informativo."),sg()(),Tl(4132,"blockquote")(4133,"p"),iN(4134,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Tl(4135,"code"),iN(4136,"p-color"),sg(),iN(4137," e "),Tl(4138,"code"),iN(4139,"p-icon"),sg(),iN(4140," somente ser\xE1 exibido caso seja "),Tl(4141,"code"),iN(4142,"true"),sg(),iN(4143,"."),sg()()()(),Tl(4144,"tr",17)(4145,"td",18)(4146,"div",19)(4147,"span",20),iN(4148," value"),Gl(4149,"br"),sg()()(),Tl(4150,"td",21)(4151,"code",31),iN(4152,"string "),sg(),Tl(4153,"code",35),iN(4154," number"),sg()(),Tl(4155,"td",24)(4156,"p"),iN(4157,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),sg()()()(),Tl(4158,"h4",44)(4159,"code",5),iN(4160,"PoTableDetailColumn"),sg()(),Tl(4161,"div",2)(4162,"p"),iN(4163,"Interface para configura\xE7\xE3o das colunas do "),Tl(4164,"code"),iN(4165,"po-table-detail"),sg(),iN(4166,"."),sg()(),Tl(4167,"h4",13),iN(4168,"Propriedades"),sg(),Tl(4169,"table",14)(4170,"tr",15)(4171,"th",16),iN(4172,"Nome"),sg(),Tl(4173,"th",16),iN(4174,"Tipo"),sg(),Tl(4175,"th",16),iN(4176,"Descri\xE7\xE3o"),sg()(),Tl(4177,"tr",17)(4178,"td",18)(4179,"div",19)(4180,"span",20),iN(4181," format"),Gl(4182,"br"),sg()()(),Tl(4183,"td",21)(4184,"code",31),iN(4185,"string"),sg()(),Tl(4186,"td",24)(4187,"em")(4188,"strong"),iN(4189,"(opcional)"),sg()(),Tl(4190,"p"),iN(4191,"Formato de exibi\xE7\xE3o do valor da coluna:"),sg(),Tl(4192,"ul")(4193,"li")(4194,"p"),iN(4195,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),sg()(),Tl(4196,"li")(4197,"p"),iN(4198,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg()(),Tl(4199,"li")(4200,"p"),iN(4201,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),sg()(),Tl(4202,"li")(4203,"p"),iN(4204,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),Tl(4205,"a",110)(4206,"strong"),iN(4207,"DecimalPipe"),sg()(),iN(4208," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),sg(),Tl(4209,"ul")(4210,"li"),iN(4211,"Valor de entrada: "),Tl(4212,"code"),iN(4213,"50"),sg(),iN(4214," e valor para formata\xE7\xE3o: "),Tl(4215,"code"),iN(4216,"'1.2-5'"),sg(),iN(4217," o resultado ser\xE1: "),Tl(4218,"code"),iN(4219,"50.00"),sg()()()()()()(),Tl(4220,"tr",17)(4221,"td",18)(4222,"div",19)(4223,"span",20),iN(4224," label"),Gl(4225,"br"),sg()()(),Tl(4226,"td",21)(4227,"code",31),iN(4228,"string"),sg()(),Tl(4229,"td",24)(4230,"em")(4231,"strong"),iN(4232,"(opcional)"),sg()(),Tl(4233,"p"),iN(4234,"Texto para t\xEDtulo da coluna."),sg()()(),Tl(4235,"tr",17)(4236,"td",18)(4237,"div",19)(4238,"span",20),iN(4239," property"),Gl(4240,"br"),sg()()(),Tl(4241,"td",21)(4242,"code",31),iN(4243,"string"),sg()(),Tl(4244,"td",24)(4245,"em")(4246,"strong"),iN(4247,"(opcional)"),sg()(),Tl(4248,"p"),iN(4249,"Nome identificador da coluna."),sg()()(),Tl(4250,"tr",17)(4251,"td",18)(4252,"div",19)(4253,"span",20),iN(4254," type"),Gl(4255,"br"),sg()()(),Tl(4256,"td",21)(4257,"code",31),iN(4258,"string"),sg()(),Tl(4259,"td",24)(4260,"em")(4261,"strong"),iN(4262,"(opcional)"),sg()(),Tl(4263,"p"),iN(4264,"Tipo da coluna."),sg(),Tl(4265,"p"),iN(4266,"Valores v\xE1lidos:"),sg(),Tl(4267,"ul")(4268,"li")(4269,"p")(4270,"code"),iN(4271,"currency"),sg(),iN(4272,": valores monet\xE1rios."),sg()(),Tl(4273,"li")(4274,"p")(4275,"code"),iN(4276,"date"),sg(),iN(4277,": valor de datas."),sg(),Tl(4278,"ul")(4279,"li"),iN(4280,"Aceita os tipos "),Tl(4281,"em"),iN(4282,"string"),sg(),iN(4283," e "),Tl(4284,"em"),iN(4285,"Date"),sg(),iN(4286,` padr\xE3o do Javascript,
por exemplo: `),Tl(4287,"code"),iN(4288,"'2017-11-28'"),sg(),iN(4289," ou "),Tl(4290,"code"),iN(4291,"new Date(2017, 10, 28)"),sg(),iN(4292,"."),sg()()(),Tl(4293,"li")(4294,"p")(4295,"code"),iN(4296,"time"),sg(),iN(4297,": valor de hor\xE1rio."),sg()(),Tl(4298,"li")(4299,"p")(4300,"code"),iN(4301,"number"),sg(),iN(4302,": valores num\xE9ricos."),sg()(),Tl(4303,"li")(4304,"p")(4305,"code"),iN(4306,"dateTime"),sg(),iN(4307,": valor de data com hor\xE1rio."),sg(),Tl(4308,"ul")(4309,"li"),iN(4310,"Aceita o tipo "),Tl(4311,"em"),iN(4312,"string"),sg(),iN(4313," no formato "),Tl(4314,"strong"),iN(4315,"ISO-8601"),sg(),iN(4316," extendido "),Tl(4317,"strong"),iN(4318,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),iN(4319,`
e o tipo `),Tl(4320,"em"),iN(4321,"Date"),sg(),iN(4322," padr\xE3o do Javascript, por exemplo: "),Tl(4323,"code"),iN(4324,"'2017-11-28T00:00:00-02:00'"),sg(),iN(4325," ou "),Tl(4326,"code"),iN(4327,"new Date(2017, 10, 28)"),sg(),iN(4328,"."),sg(),Tl(4329,"li"),iN(4330,"Aceita o tipo "),Tl(4331,"em"),iN(4332,"string"),sg(),iN(4333," nos formatos "),Tl(4334,"strong"),iN(4335,"'HH:mm:ss'"),sg(),iN(4336," ou "),Tl(4337,"strong"),iN(4338,"'HH:mm:ss.ffffff'"),sg(),iN(4339,", por exemplo: "),Tl(4340,"code"),iN(4341,"'23:12:45'"),sg(),iN(4342,"."),sg()()()()()()(),Tl(4343,"h4",44)(4344,"code",5),iN(4345,"PoTableDetail"),sg()(),Tl(4346,"div",2)(4347,"p"),iN(4348,"Interface para configura\xE7\xE3o do "),Tl(4349,"em"),iN(4350,"detail"),sg(),iN(4351," do componente "),Tl(4352,"code"),iN(4353,"po-table"),sg(),iN(4354,"."),sg()(),Tl(4355,"h4",13),iN(4356,"Propriedades"),sg(),Tl(4357,"table",14)(4358,"tr",15)(4359,"th",16),iN(4360,"Nome"),sg(),Tl(4361,"th",16),iN(4362,"Tipo"),sg(),Tl(4363,"th",16),iN(4364,"Descri\xE7\xE3o"),sg()(),Tl(4365,"tr",17)(4366,"td",18)(4367,"div",19)(4368,"span",20),iN(4369," columns"),Gl(4370,"br"),sg()()(),Tl(4371,"td",21)(4372,"code",111),iN(4373,"Array<PoTableDetailColumn>"),sg()(),Tl(4374,"td",24)(4375,"p"),iN(4376,"Define uma lista do tipo "),Tl(4377,"code"),iN(4378,"PoTableDetailColumn"),sg(),iN(4379," para as colunas do objet "),Tl(4380,"em"),iN(4381,"detail"),sg(),iN(4382,". Por exemplo:"),sg(),Tl(4383,"pre")(4384,"code"),iN(4385,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),sg()()()(),Tl(4386,"tr",17)(4387,"td",18)(4388,"div",19)(4389,"span",20),iN(4390," hideSelect"),Gl(4391,"br"),sg()()(),Tl(4392,"td",21)(4393,"code",22),iN(4394,"boolean"),sg()(),Tl(4395,"td",24)(4396,"em")(4397,"strong"),iN(4398,"(opcional)"),sg()(),Tl(4399,"p"),iN(4400,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),sg()()(),Tl(4401,"tr",17)(4402,"td",18)(4403,"div",19)(4404,"span",20),iN(4405," typeHeader"),Gl(4406,"br"),sg()()(),Tl(4407,"td",21)(4408,"code",31),iN(4409,"string"),sg()(),Tl(4410,"td",24)(4411,"em")(4412,"strong"),iN(4413,"(opcional)"),sg()(),Tl(4414,"p"),iN(4415,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),Tl(4416,"em"),iN(4417,"detail"),sg(),iN(4418," ."),sg(),Tl(4419,"p"),iN(4420,"Valores v\xE1lidos:"),sg(),Tl(4421,"ul")(4422,"li")(4423,"code"),iN(4424,"inline"),sg(),iN(4425,": Atribui o cabe\xE7alho na mesma linha do "),Tl(4426,"em"),iN(4427,"detail"),sg(),iN(4428,"."),sg(),Tl(4429,"li")(4430,"code"),iN(4431,"top"),sg(),iN(4432,": Atribui o cabe\xE7alho acima do "),Tl(4433,"em"),iN(4434,"detail"),sg(),iN(4435,", id\xEAntico ao "),Tl(4436,"code"),iN(4437,"po-table"),sg(),iN(4438,"."),sg(),Tl(4439,"li")(4440,"code"),iN(4441,"none"),sg(),iN(4442,": Remove o cabe\xE7alho do "),Tl(4443,"em"),iN(4444,"detail"),sg(),iN(4445,"."),sg()()()()(),Tl(4446,"h4",44)(4447,"code",5),iN(4448,"PoTableSubtitleColumn"),sg()(),Tl(4449,"div",2)(4450,"p"),iN(4451,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),sg()(),Tl(4452,"h4",13),iN(4453,"Propriedades"),sg(),Tl(4454,"table",14)(4455,"tr",15)(4456,"th",16),iN(4457,"Nome"),sg(),Tl(4458,"th",16),iN(4459,"Tipo"),sg(),Tl(4460,"th",16),iN(4461,"Descri\xE7\xE3o"),sg()(),Tl(4462,"tr",17)(4463,"td",18)(4464,"div",19)(4465,"span",20),iN(4466," color"),Gl(4467,"br"),sg()()(),Tl(4468,"td",21)(4469,"code",31),iN(4470,"string"),sg()(),Tl(4471,"td",24)(4472,"em")(4473,"strong"),iN(4474,"(opcional)"),sg()(),Tl(4475,"p"),iN(4476,"Define a cor do "),Tl(4477,"em"),iN(4478,"status"),sg(),iN(4479,"."),sg(),Tl(4480,"p"),iN(4481,"Valores v\xE1lidos:"),sg(),Tl(4482,"ul")(4483,"li"),Gl(4484,"span",51),Tl(4485,"code"),iN(4486,"color-01"),sg()(),Tl(4487,"li"),Gl(4488,"span",52),Tl(4489,"code"),iN(4490,"color-02"),sg()(),Tl(4491,"li"),Gl(4492,"span",53),Tl(4493,"code"),iN(4494,"color-03"),sg()(),Tl(4495,"li"),Gl(4496,"span",54),Tl(4497,"code"),iN(4498,"color-04"),sg()(),Tl(4499,"li"),Gl(4500,"span",55),Tl(4501,"code"),iN(4502,"color-05"),sg()(),Tl(4503,"li"),Gl(4504,"span",56),Tl(4505,"code"),iN(4506,"color-06"),sg()(),Tl(4507,"li"),Gl(4508,"span",57),Tl(4509,"code"),iN(4510,"color-07"),sg()(),Tl(4511,"li"),Gl(4512,"span",58),Tl(4513,"code"),iN(4514,"color-08"),sg()(),Tl(4515,"li"),Gl(4516,"span",59),Tl(4517,"code"),iN(4518,"color-09"),sg()(),Tl(4519,"li"),Gl(4520,"span",60),Tl(4521,"code"),iN(4522,"color-10"),sg()(),Tl(4523,"li"),Gl(4524,"span",61),Tl(4525,"code"),iN(4526,"color-11"),sg()(),Tl(4527,"li"),Gl(4528,"span",62),Tl(4529,"code"),iN(4530,"color-12"),sg()()(),Tl(4531,"blockquote")(4532,"p"),iN(4533,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Tl(4534,"strong"),iN(4535,"Caption Tag Colors"),sg(),iN(4536,":"),sg()(),Tl(4537,"ul")(4538,"li"),Gl(4539,"span",63),Tl(4540,"code"),iN(4541,"caption-tag-01"),sg(),Gl(4542,"span",64),Tl(4543,"code"),iN(4544,"caption-tag-02"),sg(),Gl(4545,"span",65),Tl(4546,"code"),iN(4547,"caption-tag-03"),sg(),Gl(4548,"span",66),Tl(4549,"code"),iN(4550,"caption-tag-04"),sg(),Gl(4551,"span",67),Tl(4552,"code"),iN(4553,"caption-tag-05"),sg()(),Tl(4554,"li"),Gl(4555,"span",68),Tl(4556,"code"),iN(4557,"caption-tag-06"),sg(),Gl(4558,"span",69),Tl(4559,"code"),iN(4560,"caption-tag-07"),sg(),Gl(4561,"span",70),Tl(4562,"code"),iN(4563,"caption-tag-08"),sg(),Gl(4564,"span",71),Tl(4565,"code"),iN(4566,"caption-tag-09"),sg(),Gl(4567,"span",72),Tl(4568,"code"),iN(4569,"caption-tag-10"),sg()(),Tl(4570,"li"),Gl(4571,"span",73),Tl(4572,"code"),iN(4573,"caption-tag-11"),sg(),Gl(4574,"span",74),Tl(4575,"code"),iN(4576,"caption-tag-12"),sg(),Gl(4577,"span",75),Tl(4578,"code"),iN(4579,"caption-tag-13"),sg(),Gl(4580,"span",76),Tl(4581,"code"),iN(4582,"caption-tag-14"),sg(),Gl(4583,"span",77),Tl(4584,"code"),iN(4585,"caption-tag-15"),sg()(),Tl(4586,"li"),Gl(4587,"span",78),Tl(4588,"code"),iN(4589,"caption-tag-16"),sg(),Gl(4590,"span",79),Tl(4591,"code"),iN(4592,"caption-tag-17"),sg(),Gl(4593,"span",80),Tl(4594,"code"),iN(4595,"caption-tag-18"),sg(),Gl(4596,"span",81),Tl(4597,"code"),iN(4598,"caption-tag-19"),sg(),Gl(4599,"span",82),Tl(4600,"code"),iN(4601,"caption-tag-20"),sg()(),Tl(4602,"li"),Gl(4603,"span",83),Tl(4604,"code"),iN(4605,"caption-tag-21"),sg(),Gl(4606,"span",84),Tl(4607,"code"),iN(4608,"caption-tag-22"),sg(),Gl(4609,"span",85),Tl(4610,"code"),iN(4611,"caption-tag-23"),sg(),Gl(4612,"span",86),Tl(4613,"code"),iN(4614,"caption-tag-24"),sg(),Gl(4615,"span",87),Tl(4616,"code"),iN(4617,"caption-tag-25"),sg()(),Tl(4618,"li"),Gl(4619,"span",88),Tl(4620,"code"),iN(4621,"caption-tag-26"),sg(),Gl(4622,"span",89),Tl(4623,"code"),iN(4624,"caption-tag-27"),sg(),Gl(4625,"span",90),Tl(4626,"code"),iN(4627,"caption-tag-28"),sg(),Gl(4628,"span",91),Tl(4629,"code"),iN(4630,"caption-tag-29"),sg(),Gl(4631,"span",92),Tl(4632,"code"),iN(4633,"caption-tag-30"),sg()(),Tl(4634,"li"),Gl(4635,"span",93),Tl(4636,"code"),iN(4637,"caption-tag-31"),sg(),Gl(4638,"span",94),Tl(4639,"code"),iN(4640,"caption-tag-32"),sg(),Gl(4641,"span",95),Tl(4642,"code"),iN(4643,"caption-tag-33"),sg(),Gl(4644,"span",96),Tl(4645,"code"),iN(4646,"caption-tag-34"),sg(),Gl(4647,"span",97),Tl(4648,"code"),iN(4649,"caption-tag-35"),sg()()()()(),Tl(4650,"tr",17)(4651,"td",18)(4652,"div",19)(4653,"span",20),iN(4654," content"),Gl(4655,"br"),sg()()(),Tl(4656,"td",21)(4657,"code",31),iN(4658,"string"),sg()(),Tl(4659,"td",24)(4660,"p"),iN(4661,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),sg()()(),Tl(4662,"tr",17)(4663,"td",18)(4664,"div",19)(4665,"span",20),iN(4666," label"),Gl(4667,"br"),sg()()(),Tl(4668,"td",21)(4669,"code",31),iN(4670,"string"),sg()(),Tl(4671,"td",24)(4672,"p"),iN(4673,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),sg()()(),Tl(4674,"tr",17)(4675,"td",18)(4676,"div",19)(4677,"span",20),iN(4678," value"),Gl(4679,"br"),sg()()(),Tl(4680,"td",21)(4681,"code",31),iN(4682,"string "),sg(),Tl(4683,"code",35),iN(4684," number"),sg()(),Tl(4685,"td",24)(4686,"p"),iN(4687,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),sg()()()(),Tl(4688,"h3"),iN(4689,"Enums"),sg(),Tl(4690,"h4",4)(4691,"code",5),iN(4692,"PoTableColumnSortType"),sg()(),Tl(4693,"div",2)(4694,"p"),iN(4695,"Tipos de ordena\xE7\xE3o das colunas da tabela."),sg()(),Tl(4696,"h4",13),iN(4697,"Propriedades"),sg(),Tl(4698,"table",14)(4699,"tr",15)(4700,"th",16),iN(4701,"Nome"),sg(),Tl(4702,"th",16),iN(4703,"Descri\xE7\xE3o"),sg()(),Tl(4704,"tr",17)(4705,"td",18)(4706,"div",19)(4707,"span",20),iN(4708," Ascending"),Gl(4709,"br"),sg()()(),Tl(4710,"td",24)(4711,"p"),iN(4712,"Ordena\xE7\xE3o ascendente"),sg()()(),Tl(4713,"tr",17)(4714,"td",18)(4715,"div",19)(4716,"span",20),iN(4717," Descending"),Gl(4718,"br"),sg()()(),Tl(4719,"td",24)(4720,"p"),iN(4721,"Ordena\xE7\xE3o descendente"),sg()()()(),Tl(4722,"h4",4)(4723,"code",5),iN(4724,"PoTableColumnSpacing"),sg()(),Tl(4725,"div",2)(4726,"p"),iN(4727,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Tl(4728,"strong"),iN(4729,"p-spacing"),sg(),iN(4730,") do po-table."),sg()(),Tl(4731,"h4",13),iN(4732,"Propriedades"),sg(),Tl(4733,"table",14)(4734,"tr",15)(4735,"th",16),iN(4736,"Nome"),sg(),Tl(4737,"th",16),iN(4738,"Descri\xE7\xE3o"),sg()(),Tl(4739,"tr",17)(4740,"td",18)(4741,"div",19)(4742,"span",20),iN(4743," ExtraSmall"),Gl(4744,"br"),sg()()(),Tl(4745,"td",24)(4746,"p"),iN(4747,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),sg()()(),Tl(4748,"tr",17)(4749,"td",18)(4750,"div",19)(4751,"span",20),iN(4752," Small"),Gl(4753,"br"),sg()()(),Tl(4754,"td",24)(4755,"p"),iN(4756,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(4757,"tr",17)(4758,"td",18)(4759,"div",19)(4760,"span",20),iN(4761," Medium"),Gl(4762,"br"),sg()()(),Tl(4763,"td",24)(4764,"p"),iN(4765,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),sg()()(),Tl(4766,"tr",17)(4767,"td",18)(4768,"div",19)(4769,"span",20),iN(4770," Large"),Gl(4771,"br"),sg()()(),Tl(4772,"td",24)(4773,"p"),iN(4774,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return r})();var pt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(wn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return a.changeTab("doc")}),Gl(3,"sample-po-table-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return a.changeTab("web")}),Gl(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),sg()()()),l&2&&(nw("p-actions",a.actions),Vp(2),nw("p-active",a.activeTab==="doc"),Vp(2),nw("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"));},dependencies:[sNe,Ume,$me,Je,Ke,Ye,tt,it,ot,rt,st,dt],encapsulation:2,changeDetection:1})}return r})();var en=[{path:"",component:pt}],ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[DL.forChild(en),DL]})}return r})();var oi=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[sr,ct]})}return r})();export{oi as DocPoTableModule};