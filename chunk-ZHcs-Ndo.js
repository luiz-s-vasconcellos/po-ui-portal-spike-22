import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,S,d4 as Ji,dB as $p,s,r as r$1,aV as Xp,c9 as Qde,dJ as yh,c3 as wT,C,b6 as U3,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt$1,H as Lp,ar as Fx,au as dg,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt$1,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,bL as H3,cd as sme,b5 as Ko,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,W as we,av as zl,aw as uo,ax as fo,cN as I3,b4 as rme,aJ as nme,dK as she,b9 as ONe,a2 as WE,dL as kO,a4 as dN,cM as Qx,a6 as pN,as as eN,dn as ahe,dq as AO,aQ as cx,aR as ax,aS as lx,t as tb,a3 as SNe,aA as Ex,bv as Jx,I as dw,a5 as hN,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ut=()=>({table:"PO Table",angular:"PO-UI"}),bt=r=>[r],Ge=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&Hl(0,"po-table",0),l&2&&ZE("p-items",oN(2,bt,iN(1,ut)));},dependencies:[U3],encapsulation:2,changeDetection:1})}return r})();var St=r=>({"docs-sample-code-tabs":r}),Je=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table Basic"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-basic/sample-po-table-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-table-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,St,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ge],encapsulation:2})}return r})();var se=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(a){return {text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return {text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return (Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return [{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return `${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Xe=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=Ji.Medium;filterType=$p.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:true},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:true},{label:"Single select",value:"singleSelect",disabled:true}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:$p.startsWith},{label:"Contains",value:$p.contains},{label:"Ends With",value:$p.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns();}ngOnInit(){this.restore();}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++;}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction();}changeEvent(a){this.event=a;}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals);}catch(a){this.customLiterals=void 0;}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/);}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction();}deleteItems(a){this.height&&(this.items=a);}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open();}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=Ji.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions();}showMore(){this.addItem();}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a]);});}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns();}static \u0275fac=function(l){return new(l||r)(w(se))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&zl(Ko,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first);}},standalone:false,features:[we([se])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=gx();Cl(0,"po-table",1),dt$1("p-all-selected",function(){return o.changeEvent("p-all-selected")})("p-all-unselected",function(){return o.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return o.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return o.changeEvent("p-collapsed")})("p-expanded",function(){return o.changeEvent("p-expanded")})("p-selected",function(){return o.changeEvent("p-selected")})("p-show-more",function(){return o.showMore()})("p-unselected",function(){return o.changeEvent("p-unselected")})("p-delete-items",function(d){return o.deleteItems(d)}),og(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3),og(),Hl(4,"po-divider"),Cl(5,"div",2)(6,"po-button",4),dt$1("p-click",function(){return o.addItem()}),og()(),Hl(7,"po-divider"),Cl(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),gw("ngModelChange",function(d){return Jy(m),Zx(o.columnsName,d)||(o.columnsName=d),e_(d)}),dt$1("p-change",function(){return o.updateColumns()}),og(),Z0(),og(),Cl(12,"div",2)(13,"po-radio-group",6),gw("ngModelChange",function(d){return Jy(m),Zx(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),e_(d)}),og(),Z0(),Cl(14,"po-switch",7),gw("ngModelChange",function(d){return Jy(m),Zx(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),e_(d)}),og(),Z0(),og(),Cl(15,"div",2)(16,"po-checkbox-group",8),gw("ngModelChange",function(d){return Jy(m),Zx(o.properties,d)||(o.properties=d),e_(d)}),og(),Z0(),og(),Cl(17,"div",2)(18,"po-checkbox-group",9),gw("ngModelChange",function(d){return Jy(m),Zx(o.actionsDefinition,d)||(o.actionsDefinition=d),e_(d)}),dt$1("p-change",function(){return o.changeActionOptions()}),og(),Z0(),og(),Cl(19,"div",2)(20,"po-radio-group",10),gw("ngModelChange",function(d){return Jy(m),Zx(o.spacing,d)||(o.spacing=d),e_(d)}),og(),Z0(),og(),Cl(21,"div",2)(22,"po-checkbox-group",11),gw("ngModelChange",function(d){return Jy(m),Zx(o.selection,d)||(o.selection=d),e_(d)}),dt$1("p-change",function(){return o.changeSelectionOptions()}),og(),Z0(),Cl(23,"po-radio-group",12),gw("ngModelChange",function(d){return Jy(m),Zx(o.filterType,d)||(o.filterType=d),e_(d)}),og(),Z0(),Cl(24,"po-radio-group",13),gw("ngModelChange",function(d){return Jy(m),Zx(o.componentsSize,d)||(o.componentsSize=d),e_(d)}),og(),Z0(),og(),Cl(25,"div",2)(26,"po-input",14),gw("ngModelChange",function(d){return Jy(m),Zx(o.literals,d)||(o.literals=d),e_(d)}),dt$1("p-change",function(){return o.changeLiterals()}),og(),Z0(),Cl(27,"po-input",15),gw("ngModelChange",function(d){return Jy(m),Zx(o.filteredColumns,d)||(o.filteredColumns=d),e_(d)}),dt$1("p-change",function(){return o.changeFilteredColumns()}),og(),Z0(),Cl(28,"po-number",16),gw("ngModelChange",function(d){return Jy(m),Zx(o.height,d)||(o.height=d),e_(d)}),og(),Z0(),Cl(29,"po-number",17),gw("ngModelChange",function(d){return Jy(m),Zx(o.maxColumns,d)||(o.maxColumns=d),e_(d)}),og(),Z0(),og(),Cl(30,"div",2)(31,"po-button",18),dt$1("p-click",function(){return o.restore()}),og()()(),Cl(32,"po-modal",19),Hl(33,"po-info",20),og();}l&2&&(ZE("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),Lp(3),ZE("p-value",o.event),Lp(8),pw("ngModel",o.columnsName),ZE("p-options",o.columnsOptions),X0(),Lp(2),pw("ngModel",o.columnsDefinition.detail.detail.typeHeader),ZE("p-options",o.typeHeaderOptions),X0(),Lp(),pw("ngModel",o.columnsDefinition.detail.detail.hideSelect),X0(),Lp(2),pw("ngModel",o.properties),ZE("p-options",o.propertiesOptions),X0(),Lp(2),pw("ngModel",o.actionsDefinition),ZE("p-options",o.actionsDefinitionOptions),X0(),Lp(2),pw("ngModel",o.spacing),ZE("p-options",o.typeSpacing),X0(),Lp(2),pw("ngModel",o.selection),ZE("p-options",o.selectionOptions),X0(),Lp(),pw("ngModel",o.filterType),ZE("p-options",o.filterModeOptions),X0(),Lp(),pw("ngModel",o.componentsSize),ZE("p-options",o.componentsSizeOptions),X0(),Lp(2),pw("ngModel",o.literals),X0(),Lp(),pw("ngModel",o.filteredColumns),X0(),Lp(),pw("ngModel",o.height),X0(),Lp(),pw("ngModel",o.maxColumns),X0(),Lp(4),ZE("p-value",o.currentItem));},dependencies:[lY,sY,aY,gk,fk,Qt$1,_v,L3,q3,Hhe,Nde,H3,sme,Ko,U3],encapsulation:2,changeDetection:1})}return r})();var vt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-labs-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table Labs"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-labs/sample-po-table-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-table
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-table-labs"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,vt,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Xe],encapsulation:2})}return r})();var Ct=["table"],Ye=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=s(r$1({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs();}changeService(a){this.sampleService=a;}onChangeColumns(a){try{this.columns=JSON.parse(a);}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns];}}removeAllItems(){this.tableComponent.applyFilters({});}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params);}resetInputs(){this.key=void 0,this.value=void 0;}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o];}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&zl(Ct,5),l&2){let m;uo(m=fo())&&(o.tableComponent=m.first);}},standalone:false,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=gx();Cl(0,"div",1)(1,"po-input",2),gw("ngModelChange",function(d){return Jy(m),Zx(o.service,d)||(o.service=d),e_(d)}),dt$1("p-change",function(){return o.changeService(o.service)}),og(),Z0(),og(),Cl(2,"div",1),Hl(3,"po-divider",3),Cl(4,"po-textarea",4),gw("ngModelChange",function(d){return Jy(m),Zx(o.stringColumns,d)||(o.stringColumns=d),e_(d)}),dt$1("p-change",function(d){return o.onChangeColumns(d)}),og(),Z0(),og(),Cl(5,"div",1),Hl(6,"po-divider",5),Cl(7,"po-input",6),gw("ngModelChange",function(d){return Jy(m),Zx(o.key,d)||(o.key=d),e_(d)}),og(),Z0(),Cl(8,"po-input",7),gw("ngModelChange",function(d){return Jy(m),Zx(o.value,d)||(o.value=d),e_(d)}),og(),Z0(),og(),Cl(9,"div",1)(10,"po-button",8),dt$1("p-click",function(){return o.addFilter(o.key,o.value)}),og()(),Cl(11,"div",1)(12,"po-disclaimer-group",9),dt$1("p-remove",function(d){return o.removeItem(d)})("p-remove-all",function(){return o.removeAllItems()}),og()(),Cl(13,"div",1),Hl(14,"po-table",10,0),og();}l&2&&(Lp(),pw("ngModel",o.service),X0(),Lp(3),pw("ngModel",o.stringColumns),ZE("p-rows",5),X0(),Lp(3),pw("ngModel",o.key),X0(),Lp(),pw("ngModel",o.value),X0(),Lp(2),ZE("p-disabled",!o.key||!o.value),Lp(2),ZE("p-disclaimers",o.filters),Lp(2),ZE("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",false)("p-infinite-scroll",true));},dependencies:[sY,gk,Qt$1,I3,_v,q3,rme,U3],encapsulation:2,changeDetection:1})}return r})();var Tt=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table using API"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-table-with-api"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Tt,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ye],encapsulation:2})}return r})();var de=(()=>{class r{getColumns(){return [{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:false},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:false},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:false},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return [{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return `00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function wt(r,J){if(r&1){let a=gx();Cl(0,"po-widget",2)(1,"div",3)(2,"po-select",4),gw("ngModelChange",function(o){let m=Jy(a).$implicit;return Zx(m.status,o)||(m.status=o),e_(o)}),og(),Z0(),og(),Cl(3,"div",3),Hl(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),og()();}if(r&2){let a=J.$implicit,l=Ex();ZE("p-title",Jx("Transport detail ",a.code)),Lp(2),pw("ngModel",a.status),ZE("p-options",l.statusOptions),X0(),Lp(2),ZE("p-value",a.batch_product),Lp(),ZE("p-value",a.driver),Lp(),ZE("p-value",a.license_plate);}}var et=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a;}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems();}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport"]],standalone:false,features:[we([de])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(Cl(0,"po-table",0),WE(1,wt,7,7,"ng-template",1),og()),l&2&&(ZE("p-auto-collapse",true)("p-columns",o.columns)("p-hide-columns-manager",true)("p-hide-table-search",false)("p-items",o.items)("p-sort",true)("p-striped",true),Lp(),ZE("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered));},dependencies:[sY,gk,nme,sme,U3,she,ONe],encapsulation:2,changeDetection:1})}return r})();var At=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-transport-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table - Transport"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-transport/sample-po-table-transport.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-table
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-table-transport"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,At,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,et],encapsulation:2})}return r})();var pe=(()=>{class r{getColumns(){return [{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return [{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:false,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:false,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:false,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:false,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:true,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:false,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:false,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:false,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:true,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:false,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:true,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:true,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:false,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:true,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:false,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:false,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:true,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:false,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var nt=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o;}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems();}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>s(r$1({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l;}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return  -1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}});}confirmItems(a){a.forEach(l=>{switch(l.status){case "available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case "reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case "closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows();}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l));});}decreaseTotal(a){a.value&&(this.total-=a.value);}deleteItems(a){this.items=a;}details(a){this.detail=a,this.poModal.open();}remove(a){this.poTable.removeItem(a);}discount(a){if(!a.disableDiscount){let l=s(r$1({},a),{value:a.value-a.value*.2,disableDiscount:true});this.poTable.updateItem(a,l);}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l));});}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded;}onExpandDetail(){this.totalExpanded+=1;}sumTotal(a){a.value&&(this.total+=a.value);}restoreColumn(){this.columns=this.columnsDefault;}changeColumnVisible(a){localStorage.setItem("initial-columns",a);}getDescription(a){return `Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(pe),w(Xp),w(Qde))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&zl(Ko,7)(U3,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first),uo(m=fo())&&(o.poTable=m.first);}},standalone:false,features:[we([pe,Qde])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(Cl(0,"div",0),qx(1,"Choose one or more promotional airfares"),og(),Hl(2,"po-divider"),Cl(3,"po-table",1),dt$1("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),og(),Hl(4,"po-divider")(5,"po-info",2),dN(6,"currency"),Hl(7,"po-info",3),Cl(8,"div",4)(9,"po-button",5),dt$1("p-click",function(){return o.addToCart()}),og(),Cl(10,"po-button",6),dt$1("p-click",function(){return o.expandAll()}),og(),Cl(11,"po-button",7),dt$1("p-click",function(){return o.collapseAll()}),og()(),Cl(12,"po-modal",8),Hl(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),og()),l&2&&(Lp(3),ZE("p-container",true)("p-height",400)("p-hide-batch-actions",false)("p-hide-table-search",false)("p-selectable",true)("p-sort",true)("p-striped",true)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",false),Lp(2),ZE("p-value",Qx(pN(6,21,o.total,"USD"))),Lp(2),ZE("p-value",o.totalExpanded),Lp(5),ZE("p-title",eN("",o.detail?.destination," - ",o.detail?.country)),Lp(),ZE("p-value",o.detail==null?null:o.detail.airline),Lp(),ZE("p-value",o.detail==null?null:o.detail.initials),Lp(),ZE("p-value",o.detail==null?null:o.detail.class));},dependencies:[Qt$1,_v,sme,Ko,U3,kO],encapsulation:2,changeDetection:1})}return r})();var Ft=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table - Airfare"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-table-airfare"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ft,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,nt],encapsulation:2})}return r})();var H=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(H||{});var ce=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=false){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],xe=m.split(".")[1];return a[d][xe]<l[d][xe]?p===yh.Ascending?-1:1:p===yh.Ascending?1:-1}else return a[m]<l[m]?p===yh.Ascending?-1:1:p===yh.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Bt(r,J){if(r&1&&(Cl(0,"div"),qx(1),dN(2,"uppercase"),og()),r&2){let a=J.$implicit;Fx(Jx("badge ",a)),Lp(),dw(hN(2,4,a));}}function Rt(r,J){if(r&1&&(Cl(0,"ul")(1,"li",4),qx(2),og(),Hl(3,"po-divider"),og()),r&2){let a=J.$implicit;Lp(2),dw(a);}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=false;title;isLoading=false;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l);},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:false,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l;}ngOnInit(){this.items=this.sampleComponents.getItems();}experimentalColor(a){return a?.component?.status===H.Experimental?"caption-tag-08":"caption-tag-13"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open();}goToDocumentation(a){this.router.navigate([a?.component?.link]);}showMore(a){this.isLoading=true,this.showMoreDisabled=true,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=false;},4e3);}sort(a){this.items=this.getItems(a);}showAlert(a){alert(a);}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite;}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(w(ce),w(Cn))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&zl(Ko,7),l&2){let m;uo(m=fo())&&(o.poModal=m.first);}},standalone:false,features:[we([ce])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,o){l&1&&(Cl(0,"div",0),qx(1,"PO UI Library"),og(),Hl(2,"po-divider"),Cl(3,"po-table",1),dt$1("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),WE(4,Bt,3,6,"ng-template",2),og(),Cl(5,"po-modal",3),cx(6,Rt,4,1,"ul",null,ax),og()),l&2&&(Lp(3),ZE("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",true),Lp(),ZE("p-property","component.type"),Lp(),ZE("p-title",eN("",o.title," - ",o.extraInformation?.component)),Lp(),lx(o.extraInformation?.extras));},dependencies:[_v,Ko,U3,ahe,AO],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"],changeDetection:1})}return r})();var Nt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-components-view"]],standalone:false,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table - Po Field Components"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-components/sample-po-table-components.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-components/sample-po-table-components.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-table-components/sample-po-table-components.enum.ts"),og(),Cl(23,"pre",9),qx(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),og(),Cl(25,"label",6),qx(26,"sample-po-table-components/sample-po-table-components.service.ts"),og(),Cl(27,"pre",9),qx(28,`import { Injectable } from '@angular/core';

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
`),og()()(),Cl(29,"po-tab",10)(30,"div")(31,"label",6),qx(32,"sample-po-table-components/sample-po-table-components.component.css"),og(),Cl(33,"pre",11),qx(34,`.badge {
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
`),og()()()()(),Cl(35,"div",12),Hl(36,"sample-po-table-components"),og(),Hl(37,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Nt,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ot],encapsulation:2})}return r})();var ue=(()=>{class r{http;constructor(a){this.http=a;}getColumns(){return [{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(wT("items"))}static \u0275fac=function(l){return new(l||r)(C(tb))};static \u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var jt=["POItemsOri"],Wt=["POItemsSelected"],lt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a;}ngOnInit(){this.getColumns(),this.getItems();}getColumns(){this.columns=this.service.getColumns();}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)});}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else {let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items];}}deleteItems(a){this.items=a,this.itemsSelected=[];}static \u0275fac=function(l){return new(l||r)(w(ue))};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&zl(jt,7)(Wt,7),l&2){let m;uo(m=fo())&&(o.poItemsOri=m.first),uo(m=fo())&&(o.poItemsSelected=m.first);}},standalone:false,features:[we([ue])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){l&1&&(Cl(0,"div",2)(1,"div",3)(2,"div",4),qx(3,"Choose one or more heroes for your team"),og(),Cl(4,"po-table",5,0),dt$1("p-selected",function(p){return o.changeOptions(p,"new")})("p-unselected",function(p){return o.changeOptions(p,"change")})("p-delete-items",function(p){return o.deleteItems(p)}),og()(),Cl(6,"div",3)(7,"div",4),qx(8,"Here your chosen heroes"),og(),Hl(9,"po-table",6,1),og()()),l&2&&(Lp(4),ZE("p-columns",o.columns)("p-infinite-scroll",true)("p-hide-select-all",true)("p-hide-table-search",false)("p-items",o.items)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false),Lp(5),ZE("p-columns",o.columns)("p-hide-table-search",false)("p-striped",true)("p-infinite-scroll",true)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",true)("p-text-wrap",true)("p-virtual-scroll",false));},dependencies:[U3],encapsulation:2,changeDetection:1})}return r})();var Qt=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table - Heroes"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row po-pb-2">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-table-heroes"),og(),Hl(27,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Qt,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,lt],encapsulation:2})}return r})();var Jt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),$t=r=>[r],mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable"]],standalone:false,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(Cl(0,"div",0),qx(1,` Choose one column and drag to another horizontal position in the table and drop
`),og(),Hl(2,"po-divider")(3,"po-table",1)),l&2&&(Lp(3),ZE("p-items",oN(5,$t,iN(4,Jt)))("p-draggable",true)("p-hide-columns-manager",true)("p-hide-table-search",false));},dependencies:[_v,U3],encapsulation:2,changeDetection:1})}return r})();var Kt=r=>({"docs-sample-code-tabs":r}),st=(()=>{class r{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Table Drag and Drop"),og(),Cl(4,"a",2),dt$1("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-table-draggable"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Kt,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,mt],encapsulation:2})}return r})();var dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=Un({type:r,selectors:[["sample-po-table-doc"]],standalone:false,decls:4661,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoTableModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-table"),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoTableComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),og(),Cl(15,"p"),qx(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Cl(17,"strong"),qx(18,"Carregar mais resultados"),og(),qx(19,"."),og(),Cl(20,"blockquote")(21,"p"),qx(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),Cl(23,"a",6)(24,"code"),qx(25,"p-table-row-template"),og()(),qx(26,"."),og()(),Cl(27,"blockquote")(28,"p"),qx(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),Cl(30,"a",7)(31,"code"),qx(32,"p-table-column-template"),og()(),qx(33,`
e `),Cl(34,"a",8)(35,"code"),qx(36,"p-table-cell-template"),og()(),qx(37,"."),og()(),Cl(38,"p"),qx(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),og(),Cl(40,"p"),qx(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),Cl(42,"em"),qx(43,"scroll"),og(),qx(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),og(),Cl(45,"h4"),qx(46,"Tokens customiz\xE1veis"),og(),Cl(47,"p"),qx(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(49,"blockquote")(50,"p"),qx(51,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(52,"a",9),qx(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(54,"."),og()(),Cl(55,"table")(56,"thead")(57,"tr")(58,"th"),qx(59,"Propriedade"),og(),Cl(60,"th"),qx(61,"Descri\xE7\xE3o"),og(),Cl(62,"th"),qx(63,"Valor Padr\xE3o"),og()()(),Cl(64,"tbody")(65,"tr")(66,"td")(67,"strong"),qx(68,"Default Values"),og()(),Hl(69,"td")(70,"td"),og(),Cl(71,"tr")(72,"td")(73,"code"),qx(74,"--font-family"),og()(),Cl(75,"td"),qx(76,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(77,"td")(78,"code"),qx(79,"var(--font-family-theme)"),og()()(),Cl(80,"tr")(81,"td")(82,"code"),qx(83,"--background-color"),og()(),Cl(84,"td"),qx(85,"Cor de background"),og(),Cl(86,"td")(87,"code"),qx(88,"var(--color-neutral-light-00)"),og()()(),Cl(89,"tr")(90,"td")(91,"code"),qx(92,"--color"),og()(),Cl(93,"td"),qx(94,"Cor principal da table"),og(),Cl(95,"td")(96,"code"),qx(97,"var(--color-neutral-dark-95)"),og()()(),Cl(98,"tr")(99,"td")(100,"code"),qx(101,"--background-striped-color"),og()(),Cl(102,"td"),qx(103,"Cor do background quando striped"),og(),Cl(104,"td")(105,"code"),qx(106,"var(--color-neutral-light-05)"),og()()(),Cl(107,"tr")(108,"td")(109,"code"),qx(110,"--color-line"),og()(),Cl(111,"td"),qx(112,"Cor das linhas"),og(),Cl(113,"td")(114,"code"),qx(115,"var(--color-neutral-mid-40)"),og()()(),Cl(116,"tr")(117,"td")(118,"strong"),qx(119,"Hover"),og()(),Hl(120,"td")(121,"td"),og(),Cl(122,"tr")(123,"td")(124,"code"),qx(125,"--color-hover"),og()(),Cl(126,"td"),qx(127,"Cor principal no estado hover"),og(),Cl(128,"td")(129,"code"),qx(130,"var(--color-action-hover)"),og()()(),Cl(131,"tr")(132,"td")(133,"code"),qx(134,"--background-color-hover"),og()(),Cl(135,"td"),qx(136,"Cor de background no estado hover"),og(),Cl(137,"td")(138,"code"),qx(139,"var(--color-brand-01-lighter)"),og()()(),Cl(140,"tr")(141,"td")(142,"strong"),qx(143,"Focused"),og()(),Hl(144,"td")(145,"td"),og(),Cl(146,"tr")(147,"td")(148,"code"),qx(149,"--outline-color-focused"),og()(),Cl(150,"td"),qx(151,"Cor do outline do estado de focus"),og(),Cl(152,"td")(153,"code"),qx(154,"var(--color-action-focus)"),og()()(),Cl(155,"tr")(156,"td")(157,"strong"),qx(158,"Disabled"),og()(),Hl(159,"td")(160,"td"),og(),Cl(161,"tr")(162,"td")(163,"code"),qx(164,"--color-disabled"),og()(),Cl(165,"td"),qx(166,"Cor principal no estado disabled"),og(),Cl(167,"td")(168,"code"),qx(169,"var(--color-neutral-mid-40)"),og()()(),Cl(170,"tr")(171,"td")(172,"strong"),qx(173,"Headline"),og()(),Hl(174,"td")(175,"td"),og(),Cl(176,"tr")(177,"td")(178,"code"),qx(179,"--background-color-headline"),og(),qx(180," \xA0"),og(),Cl(181,"td"),qx(182,"Cor do cabe\xE7alho"),og(),Cl(183,"td")(184,"code"),qx(185,"var(--color-neutral-light-10)"),og()()(),Cl(186,"tr")(187,"td")(188,"code"),qx(189,"--font-weight-headline"),og()(),Cl(190,"td"),qx(191,"Peso da fonte do cabe\xE7alho"),og(),Cl(192,"td")(193,"code"),qx(194,"var(--font-weight-bold)"),og()()(),Cl(195,"tr")(196,"td")(197,"strong"),qx(198,"Selected"),og()(),Hl(199,"td")(200,"td"),og(),Cl(201,"tr")(202,"td")(203,"code"),qx(204,"--background-color-selected"),og(),qx(205,"\xA0"),og(),Cl(206,"td"),qx(207,"Cor de background no estado de selecionado"),og(),Cl(208,"td")(209,"code"),qx(210,"var(--color-brand-01-lightest)"),og()()(),Cl(211,"tr")(212,"td")(213,"strong"),qx(214,"Actived"),og()(),Hl(215,"td")(216,"td"),og(),Cl(217,"tr")(218,"td")(219,"code"),qx(220,"--color-actived"),og()(),Cl(221,"td"),qx(222,"Cor do texto no estado de selecionado"),og(),Cl(223,"td")(224,"code"),qx(225,"var(--color-neutral-dark-90)"),og()()(),Cl(226,"tr")(227,"td")(228,"code"),qx(229,"--background-color-actived"),og()(),Cl(230,"td"),qx(231,"Cor de background no estado de selecionado"),og(),Cl(232,"td")(233,"code"),qx(234,"var(--color-brand-01-light)"),og()()()()()(),Cl(235,"div",10)(236,"h4",11),qx(237,"Seletor"),og(),Cl(238,"pre",12),qx(239,`<po-table
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
`),og()(),Cl(240,"h4",13),qx(241,"Propriedades"),og(),Cl(242,"table",14)(243,"tr",15)(244,"th",16),qx(245,"Nome"),og(),Cl(246,"th",16),qx(247,"Tipo"),og(),Cl(248,"th",16),qx(249,"Padr\xE3o"),og(),Cl(250,"th",16),qx(251,"Descri\xE7\xE3o"),og()(),Cl(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),qx(256," p-actions-right"),Hl(257,"br"),og()()(),Cl(258,"td",21)(259,"code",22),qx(260,"boolean"),og()(),Cl(261,"td",23)(262,"p")(263,"code"),qx(264,"false"),og()()(),Cl(265,"td",24)(266,"em")(267,"strong"),qx(268,"(opcional)"),og()(),Cl(269,"p"),qx(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),og()()(),Cl(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),qx(275," p-actions"),Hl(276,"br"),og()()(),Cl(277,"td",21)(278,"code",25),qx(279,"PoTableAction[]"),og()(),Cl(280,"td",23),qx(281,"-"),og(),Cl(282,"td",24)(283,"em")(284,"strong"),qx(285,"(opcional)"),og()(),Cl(286,"p"),qx(287,"Define uma lista de a\xE7\xF5es."),og(),Cl(288,"p"),qx(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Cl(290,"a",26)(291,"strong"),qx(292,"an an-dots-three"),og()(),qx(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),og(),Cl(294,"p")(295,"strong"),qx(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),og()(),Cl(297,"ul")(298,"li"),qx(299,"a lista conter valores inv\xE1lidos ou indefinidos."),og(),Cl(300,"li"),qx(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),og()()()(),Cl(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),qx(306," (p-all-selected)"),Hl(307,"br"),og()()(),Cl(308,"td",21)(309,"code",29),qx(310,"EventEmitter"),og()(),Cl(311,"td",23),qx(312,"-"),og(),Cl(313,"td",24)(314,"em")(315,"strong"),qx(316,"(opcional)"),og()(),Cl(317,"p"),qx(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),Cl(319,"em"),qx(320,"checkbox"),og(),qx(321," que seleciona todas as linhas."),og()()(),Cl(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),qx(326," (p-all-unselected)"),Hl(327,"br"),og()()(),Cl(328,"td",21)(329,"code",29),qx(330,"EventEmitter"),og()(),Cl(331,"td",23),qx(332,"-"),og(),Cl(333,"td",24)(334,"em")(335,"strong"),qx(336,"(opcional)"),og()(),Cl(337,"p"),qx(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),Cl(339,"em"),qx(340,"checkbox"),og(),qx(341," que seleciona todas as linhas."),og()()(),Cl(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),qx(346," p-auto-collapse"),Hl(347,"br"),og()()(),Cl(348,"td",21)(349,"code",22),qx(350,"boolean"),og()(),Cl(351,"td",23)(352,"p")(353,"code"),qx(354,"false"),og()()(),Cl(355,"td",24)(356,"em")(357,"strong"),qx(358,"(opcional)"),og()(),Cl(359,"p"),qx(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),og()()(),Cl(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),qx(365," (p-change-fixed-columns)"),Hl(366,"br"),og()()(),Cl(367,"td",21)(368,"code",29),qx(369,"EventEmitter"),og()(),Cl(370,"td",23),qx(371,"-"),og(),Cl(372,"td",24)(373,"em")(374,"strong"),qx(375,"(opcional)"),og()(),Cl(376,"p"),qx(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),og(),Cl(378,"p"),qx(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),og(),Cl(380,"blockquote")(381,"p"),qx(382,"Incompat\xEDvel com "),Cl(383,"code"),qx(384,"p-hide-action-fixed-columns"),og(),qx(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),og()()()(),Cl(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),qx(390," (p-change-visible-columns)"),Hl(391,"br"),og()()(),Cl(392,"td",21)(393,"code",29),qx(394,"EventEmitter"),og()(),Cl(395,"td",23),qx(396,"-"),og(),Cl(397,"td",24)(398,"em")(399,"strong"),qx(400,"(opcional)"),og()(),Cl(401,"p"),qx(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Cl(403,"p"),qx(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Cl(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),qx(409," (p-collapsed)"),Hl(410,"br"),og()()(),Cl(411,"td",21)(412,"code",29),qx(413,"EventEmitter"),og()(),Cl(414,"td",23),qx(415,"-"),og(),Cl(416,"td",24)(417,"em")(418,"strong"),qx(419,"(opcional)"),og()(),Cl(420,"p"),qx(421,"Evento executado ao colapsar uma linha do "),Cl(422,"code"),qx(423,"po-table"),og(),qx(424,"."),og(),Cl(425,"blockquote")(426,"p"),qx(427,"Como par\xE2metro o componente envia o item colapsado."),og()()()(),Cl(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),qx(432," (p-restore-column-manager)"),Hl(433,"br"),og()()(),Cl(434,"td",21)(435,"code",29),qx(436,"EventEmitter"),og()(),Cl(437,"td",23),qx(438,"-"),og(),Cl(439,"td",24)(440,"em")(441,"strong"),qx(442,"(opcional)"),og()(),Cl(443,"p"),qx(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Cl(445,"p"),qx(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og()()(),Cl(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),qx(451," p-columns"),Hl(452,"br"),og()()(),Cl(453,"td",21)(454,"code",30),qx(455,"PoTableColumn[]"),og()(),Cl(456,"td",23),qx(457,"-"),og(),Cl(458,"td",24)(459,"em")(460,"strong"),qx(461,"(opcional)"),og()(),Cl(462,"p"),qx(463,"Lista das colunas da tabela, deve receber um "),Cl(464,"em"),qx(465,"array"),og(),qx(466," de objetos que implementam a interface "),Cl(467,"code"),qx(468,"PoTableColumn"),og(),qx(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),og(),Cl(470,"blockquote")(471,"p"),qx(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),og()()()(),Cl(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),qx(477," p-components-size"),Hl(478,"br"),og()()(),Cl(479,"td",21)(480,"code",31),qx(481,"string"),og()(),Cl(482,"td",23)(483,"p")(484,"code"),qx(485,"medium"),og()()(),Cl(486,"td",24)(487,"em")(488,"strong"),qx(489,"(opcional)"),og()(),Cl(490,"p"),qx(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),og(),Cl(492,"ul")(493,"li")(494,"code"),qx(495,"small"),og(),qx(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(497,"li")(498,"code"),qx(499,"medium"),og(),qx(500,": aplica a medida medium de cada componente."),og()(),Cl(501,"blockquote")(502,"p"),qx(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(504,"code"),qx(505,"medium"),og(),qx(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(507,"a",32),qx(508,"po-theme"),og(),qx(509,"."),og()()()(),Cl(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),qx(514," p-container"),Hl(515,"br"),og()()(),Cl(516,"td",21)(517,"code",31),qx(518,"string"),og()(),Cl(519,"td",23)(520,"p")(521,"code"),qx(522,"border"),og()()(),Cl(523,"td",24)(524,"em")(525,"strong"),qx(526,"(opcional)"),og()(),Cl(527,"p"),qx(528,"Adiciona um contorno arredondado ao "),Cl(529,"code"),qx(530,"po-table"),og(),qx(531,", as op\xE7\xF5es s\xE3o:"),og(),Cl(532,"ul")(533,"li")(534,"code"),qx(535,"border"),og(),qx(536,": com bordas/linhas."),og(),Cl(537,"li")(538,"code"),qx(539,"shadow"),og(),qx(540,": com sombras."),og()()()(),Cl(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),qx(545," p-draggable"),Hl(546,"br"),og()()(),Cl(547,"td",21)(548,"code",22),qx(549,"boolean"),og()(),Cl(550,"td",23)(551,"p")(552,"code"),qx(553,"false"),og()()(),Cl(554,"td",24)(555,"em")(556,"strong"),qx(557,"(opcional)"),og()(),Cl(558,"p"),qx(559,"Habilita o modo drag and drop para as colunas da tabela."),og()()(),Cl(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),qx(564," (p-delete-items)"),Hl(565,"br"),og()()(),Cl(566,"td",21)(567,"code",29),qx(568,"EventEmitter"),og()(),Cl(569,"td",23),qx(570,"-"),og(),Cl(571,"td",24)(572,"em")(573,"strong"),qx(574,"(opcional)"),og()(),Cl(575,"p"),qx(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),og(),Cl(577,"pre")(578,"code"),qx(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()(),Cl(580,"blockquote")(581,"p"),qx(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),og()()()(),Cl(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),qx(587," (p-expanded)"),Hl(588,"br"),og()()(),Cl(589,"td",21)(590,"code",29),qx(591,"EventEmitter"),og()(),Cl(592,"td",23),qx(593,"-"),og(),Cl(594,"td",24)(595,"em")(596,"strong"),qx(597,"(opcional)"),og()(),Cl(598,"p"),qx(599,"Evento executado ao expandir uma linha do "),Cl(600,"code"),qx(601,"po-table"),og(),qx(602,"."),og(),Cl(603,"blockquote")(604,"p"),qx(605,"Como par\xE2metro o componente envia o item expandido."),og()()()(),Cl(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),qx(610," p-filter-type"),Hl(611,"br"),og()()(),Cl(612,"td",21)(613,"code",33),qx(614,"PoSearchFilterMode"),og()(),Cl(615,"td",23)(616,"p")(617,"code"),qx(618,"startsWith"),og()()(),Cl(619,"td",24)(620,"em")(621,"strong"),qx(622,"(opcional)"),og()(),Cl(623,"p"),qx(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),og(),Cl(625,"blockquote")(626,"p"),qx(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),og()()()(),Cl(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),qx(632," p-filtered-columns"),Hl(633,"br"),og()()(),Cl(634,"td",21)(635,"code",34),qx(636,"Array<string>"),og()(),Cl(637,"td",23),qx(638,"-"),og(),Cl(639,"td",24)(640,"em")(641,"strong"),qx(642,"(opcional)"),og()(),Cl(643,"p"),qx(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),og()()(),Cl(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),qx(649," p-height"),Hl(650,"br"),og()()(),Cl(651,"td",21)(652,"code",35),qx(653,"number"),og()(),Cl(654,"td",23),qx(655,"-"),og(),Cl(656,"td",24)(657,"em")(658,"strong"),qx(659,"(opcional)"),og()(),Cl(660,"p"),qx(661,"Define a altura da tabela em "),Cl(662,"em"),qx(663,"pixels"),og(),qx(664," e fixa o cabe\xE7alho."),og(),Cl(665,"p"),qx(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),Cl(667,"code"),qx(668,"virtual-scroll"),og(),qx(669," na tabela melhorando a performance."),og()()(),Cl(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),qx(674," p-hide-action-fixed-columns"),Hl(675,"br"),og()()(),Cl(676,"td",21)(677,"code",22),qx(678,"boolean"),og()(),Cl(679,"td",23)(680,"p")(681,"code"),qx(682,"false"),og()()(),Cl(683,"td",24)(684,"em")(685,"strong"),qx(686,"(opcional)"),og()(),Cl(687,"p"),qx(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),og()()(),Cl(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),qx(693," p-hide-batch-actions"),Hl(694,"br"),og()()(),Cl(695,"td",21)(696,"code",22),qx(697,"boolean"),og()(),Cl(698,"td",23)(699,"p")(700,"code"),qx(701,"true"),og()()(),Cl(702,"td",24)(703,"em")(704,"strong"),qx(705,"(opcional)"),og()(),Cl(706,"p"),qx(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),og()()(),Cl(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),qx(712," p-hide-columns-manager"),Hl(713,"br"),og()()(),Cl(714,"td",21)(715,"code",22),qx(716,"boolean"),og()(),Cl(717,"td",23)(718,"p")(719,"code"),qx(720,"false"),og()()(),Cl(721,"td",24)(722,"em")(723,"strong"),qx(724,"(opcional)"),og()(),Cl(725,"p"),qx(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),og()()(),Cl(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),qx(731," p-hide-detail"),Hl(732,"br"),og()()(),Cl(733,"td",21)(734,"code",22),qx(735,"boolean"),og()(),Cl(736,"td",23)(737,"p")(738,"code"),qx(739,"false"),og()()(),Cl(740,"td",24)(741,"em")(742,"strong"),qx(743,"(opcional)"),og()(),Cl(744,"p"),qx(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),og()()(),Cl(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),qx(750," p-hide-select-all"),Hl(751,"br"),og()()(),Cl(752,"td",21)(753,"code",22),qx(754,"boolean"),og()(),Cl(755,"td",23)(756,"p")(757,"code"),qx(758,"false"),og()()(),Cl(759,"td",24)(760,"p"),qx(761,"Esconde o "),Cl(762,"em"),qx(763,"checkbox"),og(),qx(764," para sele\xE7\xE3o de todas as linhas."),og(),Cl(765,"blockquote")(766,"p"),qx(767,"Sempre receber\xE1 "),Cl(768,"em"),qx(769,"true"),og(),qx(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),og()()()(),Cl(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),qx(775," p-hide-table-search"),Hl(776,"br"),og()()(),Cl(777,"td",21)(778,"code",22),qx(779,"boolean"),og()(),Cl(780,"td",23)(781,"p")(782,"code"),qx(783,"true"),og()()(),Cl(784,"td",24)(785,"em")(786,"strong"),qx(787,"(opcional)"),og()(),Cl(788,"p"),qx(789,"Permite que o campo de pesquisa seja escondido."),og()()(),Cl(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),qx(794," p-infinite-scroll"),Hl(795,"br"),og()()(),Cl(796,"td",21)(797,"code",22),qx(798,"boolean"),og()(),Cl(799,"td",23)(800,"p")(801,"code"),qx(802,"false"),og()()(),Cl(803,"td",24)(804,"em")(805,"strong"),qx(806,"(opcional)"),og()(),Cl(807,"p"),qx(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Cl(809,"code"),qx(810,"p-show-more"),og(),qx(811,"."),og(),Cl(812,"p")(813,"strong"),qx(814,"Regras de utiliza\xE7\xE3o:"),og()(),Cl(815,"ul")(816,"li"),qx(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),Cl(818,"code"),qx(819,"p-height"),og(),qx(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),og()()()(),Cl(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),qx(825," p-infinite-scroll-distance"),Hl(826,"br"),og()()(),Cl(827,"td",21)(828,"code",35),qx(829,"number"),og()(),Cl(830,"td",23),qx(831,"-"),og(),Cl(832,"td",24)(833,"em")(834,"strong"),qx(835,"(opcional)"),og()(),Cl(836,"p"),qx(837,"Define o percentual necess\xE1rio para disparar o evento "),Cl(838,"code"),qx(839,"p-show-more"),og(),qx(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),og(),Cl(841,"p")(842,"strong"),qx(843,"Exemplos:"),og()(),Cl(844,"ul")(845,"li"),qx(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),Cl(847,"code"),qx(848,"p-show-more"),og(),qx(849," ser\xE1 disparado."),og()()()(),Cl(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),qx(854," p-items"),Hl(855,"br"),og()()(),Cl(856,"td",21)(857,"code",36),qx(858,"any[]"),og()(),Cl(859,"td",23),qx(860,"-"),og(),Cl(861,"td",24)(862,"p"),qx(863,"Lista de itens da tabela."),og(),Cl(864,"blockquote")(865,"p"),qx(866,"Se falso, ser\xE1 inicializado como um "),Cl(867,"em"),qx(868,"array"),og(),qx(869," vazio."),og()()()(),Cl(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),qx(874," p-literals"),Hl(875,"br"),og()()(),Cl(876,"td",21)(877,"code",37),qx(878,"PoTableLiterals"),og()(),Cl(879,"td",23),qx(880,"-"),og(),Cl(881,"td",24)(882,"em")(883,"strong"),qx(884,"(opcional)"),og()(),Cl(885,"p"),qx(886,"Objeto com as literais usadas no "),Cl(887,"code"),qx(888,"po-table"),og(),qx(889,"."),og(),Cl(890,"p"),qx(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),og(),Cl(892,"pre")(893,"code"),qx(894,`const customLiterals: PoTableLiterals = {
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
`),og()(),Cl(895,"p"),qx(896,"Ou passando apenas as literais que deseja customizar:"),og(),Cl(897,"pre")(898,"code"),qx(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),og()(),Cl(900,"p"),qx(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(902,"pre")(903,"code"),qx(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),og()(),Cl(905,"blockquote")(906,"p"),qx(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Cl(908,"a",38)(909,"code"),qx(910,"PoI18nService"),og()(),qx(911," ou do browser."),og()()()(),Cl(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),qx(916," p-loading"),Hl(917,"br"),og()()(),Cl(918,"td",21)(919,"code",22),qx(920,"boolean"),og()(),Cl(921,"td",23)(922,"p")(923,"code"),qx(924,"false"),og()()(),Cl(925,"td",24)(926,"em")(927,"strong"),qx(928,"(opcional)"),og()(),Cl(929,"p"),qx(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),Cl(931,"em"),qx(932,"table"),og(),qx(933,"."),og()()(),Cl(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),qx(938," p-loading-show-more"),Hl(939,"br"),og()()(),Cl(940,"td",21)(941,"code",22),qx(942,"boolean"),og()(),Cl(943,"td",23)(944,"p")(945,"code"),qx(946,"false"),og()()(),Cl(947,"td",24)(948,"em")(949,"strong"),qx(950,"(opcional)"),og()(),Cl(951,"p"),qx(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),og()()(),Cl(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),qx(957," p-max-columns"),Hl(958,"br"),og()()(),Cl(959,"td",21)(960,"code",35),qx(961,"number"),og()(),Cl(962,"td",23),qx(963,"-"),og(),Cl(964,"td",24)(965,"em")(966,"strong"),qx(967,"(opcional)"),og()(),Cl(968,"p"),qx(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),og(),Cl(970,"p"),qx(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),og()()(),Cl(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),qx(976," p-param-delete-api"),Hl(977,"br"),og()()(),Cl(978,"td",21)(979,"code",31),qx(980,"string"),og()(),Cl(981,"td",23)(982,"p")(983,"code"),qx(984,"id"),og()()(),Cl(985,"td",24)(986,"em")(987,"strong"),qx(988,"(opcional)"),og()(),Cl(989,"p"),qx(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),og(),Cl(991,"p"),qx(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),Cl(993,"code"),qx(994,"p-service-delete"),og(),qx(995," em conjunto."),og()()(),Cl(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),qx(1e3," p-selectable"),Hl(1001,"br"),og()()(),Cl(1002,"td",21)(1003,"code",22),qx(1004,"boolean"),og()(),Cl(1005,"td",23)(1006,"p")(1007,"code"),qx(1008,"false"),og()()(),Cl(1009,"td",24)(1010,"em")(1011,"strong"),qx(1012,"(opcional)"),og()(),Cl(1013,"p"),qx(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),Cl(1015,"code"),qx(1016,"p-single-select"),og(),qx(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),og(),Cl(1018,"p")(1019,"strong"),qx(1020,"Importante:"),og()(),Cl(1021,"ul")(1022,"li"),qx(1023,"As linhas de detalhe definidas em "),Cl(1024,"code"),qx(1025,"PoTableDetail"),og(),qx(1026," possuem comportamento independente da linha mestre;"),og(),Cl(1027,"li"),qx(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),Cl(1029,"code"),qx(1030,"$selected"),og(),qx(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Cl(1032,"code"),qx(1033,"item.$selected"),og(),qx(1034," ou "),Cl(1035,"code"),qx(1036,"item['$selected']"),og(),qx(1037,"."),og()()()(),Cl(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),qx(1042," p-selectable-entire-line"),Hl(1043,"br"),og()()(),Cl(1044,"td",21)(1045,"code",22),qx(1046,"boolean"),og()(),Cl(1047,"td",23)(1048,"p")(1049,"code"),qx(1050,"true"),og()()(),Cl(1051,"td",24)(1052,"p"),qx(1053,"Permite selecionar um item da tabela clicando na linha."),og(),Cl(1054,"blockquote")(1055,"p"),qx(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),Cl(1057,"code"),qx(1058,"false"),og(),qx(1059,"."),og()()()(),Cl(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),qx(1064," (p-selected)"),Hl(1065,"br"),og()()(),Cl(1066,"td",21)(1067,"code",29),qx(1068,"EventEmitter"),og()(),Cl(1069,"td",23),qx(1070,"-"),og(),Cl(1071,"td",24)(1072,"em")(1073,"strong"),qx(1074,"(opcional)"),og()(),Cl(1075,"p"),qx(1076,"Evento executado ao selecionar uma linha do "),Cl(1077,"code"),qx(1078,"po-table"),og(),qx(1079,"."),og()()(),Cl(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),qx(1084," p-service-api"),Hl(1085,"br"),og()()(),Cl(1086,"td",21)(1087,"code",31),qx(1088,"string"),og()(),Cl(1089,"td",23),qx(1090,"-"),og(),Cl(1091,"td",24)(1092,"em")(1093,"strong"),qx(1094,"(opcional)"),og()(),Cl(1095,"p"),qx(1096,"URL da API respons\xE1vel por retornar os registros."),og(),Cl(1097,"p"),qx(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),Cl(1099,"code"),qx(1100,"page"),og(),qx(1101," e "),Cl(1102,"code"),qx(1103,"pageSize"),og(),qx(1104,", conforme abaixo:"),og(),Cl(1105,"pre")(1106,"code"),qx(1107,`url + ?page=1&pageSize=10
`),og()(),Cl(1108,"p"),qx(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),Cl(1110,"code"),qx(1111,"order"),og(),qx(1112,", por exemplo:"),og(),Cl(1113,"ul")(1114,"li")(1115,"p"),qx(1116,"Coluna decrescente:"),og(),Cl(1117,"pre")(1118,"code"),qx(1119,`url + ?page=1&pageSize=10&order=-name
`),og()()(),Cl(1120,"li")(1121,"p"),qx(1122,"Coluna ascendente:"),og(),Cl(1123,"pre")(1124,"code"),qx(1125,`url + ?page=1&pageSize=10&order=name
`),og()()()(),Cl(1126,"blockquote")(1127,"p"),qx(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Cl(1129,"a",39),qx(1130,"API do PO UI"),og(),qx(1131,"."),og()()()(),Cl(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),qx(1136," p-service-delete"),Hl(1137,"br"),og()()(),Cl(1138,"td",21)(1139,"code",31),qx(1140,"string"),og()(),Cl(1141,"td",23),qx(1142,"-"),og(),Cl(1143,"td",24)(1144,"em")(1145,"strong"),qx(1146,"(opcional)"),og()(),Cl(1147,"p"),qx(1148,"URL da API respons\xE1vel por excluir os registros."),og(),Cl(1149,"p"),qx(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),Cl(1151,"code"),qx(1152,"p-param-delete-api"),og(),qx(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Cl(1154,"code"),qx(1155,"id"),og(),qx(1156,"."),og(),Cl(1157,"blockquote")(1158,"p"),qx(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),Cl(1160,"a",39),qx(1161,"API do PO UI"),og(),qx(1162,"."),og()()()(),Cl(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),qx(1167," (p-show-more)"),Hl(1168,"br"),og()()(),Cl(1169,"td",21)(1170,"code",29),qx(1171,"EventEmitter"),og()(),Cl(1172,"td",23),qx(1173,"-"),og(),Cl(1174,"td",24)(1175,"em")(1176,"strong"),qx(1177,"(opcional)"),og()(),Cl(1178,"p"),qx(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),og(),Cl(1180,"p"),qx(1181,"Recebe um objeto "),Cl(1182,"code"),qx(1183,"{ column, type }"),og(),qx(1184," onde:"),og(),Cl(1185,"ul")(1186,"li"),qx(1187,"column ("),Cl(1188,"code"),qx(1189,"PoTableColumn"),og(),qx(1190,"): objeto da coluna que est\xE1 ordenada."),og(),Cl(1191,"li"),qx(1192,"type ("),Cl(1193,"code"),qx(1194,"PoTableColumnSortType"),og(),qx(1195,"): tipo da ordena\xE7\xE3o."),og()()()(),Cl(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),qx(1200," p-show-more-disabled"),Hl(1201,"br"),og()()(),Cl(1202,"td",21)(1203,"code",22),qx(1204,"boolean"),og()(),Cl(1205,"td",23)(1206,"p")(1207,"code"),qx(1208,"false"),og()()(),Cl(1209,"td",24)(1210,"p"),qx(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),og()()(),Cl(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),qx(1216," p-single-select"),Hl(1217,"br"),og()()(),Cl(1218,"td",21)(1219,"code",22),qx(1220,"boolean"),og()(),Cl(1221,"td",23),qx(1222,"-"),og(),Cl(1223,"td",24)(1224,"p"),qx(1225,"Define que somente uma linha da tabela pode ser selecionada."),og(),Cl(1226,"blockquote")(1227,"p"),qx(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),og()()()(),Cl(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),qx(1233," p-sort"),Hl(1234,"br"),og()()(),Cl(1235,"td",21)(1236,"code",22),qx(1237,"boolean"),og()(),Cl(1238,"td",23)(1239,"p")(1240,"code"),qx(1241,"false"),og()()(),Cl(1242,"td",24)(1243,"em")(1244,"strong"),qx(1245,"(opcional)"),og()(),Cl(1246,"p"),qx(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),og()()(),Cl(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),qx(1252," (p-sort-by)"),Hl(1253,"br"),og()()(),Cl(1254,"td",21)(1255,"code",29),qx(1256,"EventEmitter"),og()(),Cl(1257,"td",23),qx(1258,"-"),og(),Cl(1259,"td",24)(1260,"em")(1261,"strong"),qx(1262,"(opcional)"),og()(),Cl(1263,"p"),qx(1264,"Evento executado ao ordenar colunas da tabela."),og(),Cl(1265,"p"),qx(1266,"Recebe um objeto "),Cl(1267,"code"),qx(1268,"{ column, type }"),og(),qx(1269," onde:"),og(),Cl(1270,"ul")(1271,"li"),qx(1272,"column ("),Cl(1273,"code"),qx(1274,"PoTableColumn"),og(),qx(1275,"): objeto da coluna que foi clicada/ordenada."),og(),Cl(1276,"li"),qx(1277,"type ("),Cl(1278,"code"),qx(1279,"PoTableColumnSortType"),og(),qx(1280,"): tipo da ordena\xE7\xE3o."),og()()()(),Cl(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),qx(1285," p-spacing"),Hl(1286,"br"),og()()(),Cl(1287,"td",21)(1288,"code",31),qx(1289,"string"),og()(),Cl(1290,"td",23)(1291,"p")(1292,"code"),qx(1293,"medium"),og()()(),Cl(1294,"td",24)(1295,"em")(1296,"strong"),qx(1297,"(opcional)"),og()(),Cl(1298,"p"),qx(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Cl(1300,"strong"),qx(1301,"PoTableColumnSpacing"),og(),qx(1302,"."),og(),Cl(1303,"blockquote")(1304,"p"),qx(1305,"Em n\xEDvel de acessibilidade "),Cl(1306,"strong"),qx(1307,"AA"),og(),qx(1308,", caso o valor de "),Cl(1309,"code"),qx(1310,"p-spacing"),og(),qx(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),Cl(1312,"code"),qx(1313,"extraSmall"),og(),qx(1314,`
nos seguintes cen\xE1rios:`),og(),Cl(1315,"ul")(1316,"li"),qx(1317,"Quando o valor de "),Cl(1318,"code"),qx(1319,"p-components-size"),og(),qx(1320," for "),Cl(1321,"code"),qx(1322,"small"),og(),qx(1323,";"),og(),Cl(1324,"li"),qx(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),Cl(1326,"code"),qx(1327,"small"),og(),qx(1328,` no
`),Cl(1329,"a",32),qx(1330,"servi\xE7o de tema"),og(),qx(1331,"."),og()()()()(),Cl(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),qx(1336," p-striped"),Hl(1337,"br"),og()()(),Cl(1338,"td",21)(1339,"code",22),qx(1340,"boolean"),og()(),Cl(1341,"td",23)(1342,"p")(1343,"code"),qx(1344,"false"),og()()(),Cl(1345,"td",24)(1346,"p"),qx(1347,"Habilita ou desabilita o estilo listrado da tabela ("),Cl(1348,"code"),qx(1349,"striped"),og(),qx(1350,")."),og(),Cl(1351,"blockquote")(1352,"p"),qx(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),og()()()(),Cl(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),qx(1358," p-text-wrap"),Hl(1359,"br"),og()()(),Cl(1360,"td",21)(1361,"code",22),qx(1362,"boolean"),og()(),Cl(1363,"td",23)(1364,"p")(1365,"code"),qx(1366,"false"),og()()(),Cl(1367,"td",24)(1368,"em")(1369,"strong"),qx(1370,"(opcional)"),og()(),Cl(1371,"p"),qx(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og(),Cl(1373,"blockquote")(1374,"p"),qx(1375,"Incompat\xEDvel com "),Cl(1376,"code"),qx(1377,"virtual-scroll"),og(),qx(1378,", que requer altura fixa nas linhas."),og()()()(),Cl(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),qx(1383," (p-unselected)"),Hl(1384,"br"),og()()(),Cl(1385,"td",21)(1386,"code",29),qx(1387,"EventEmitter"),og()(),Cl(1388,"td",23),qx(1389,"-"),og(),Cl(1390,"td",24)(1391,"em")(1392,"strong"),qx(1393,"(opcional)"),og()(),Cl(1394,"p"),qx(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),Cl(1396,"code"),qx(1397,"po-table"),og(),qx(1398,"."),og()()(),Cl(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),qx(1403," p-virtual-scroll"),Hl(1404,"br"),og()()(),Cl(1405,"td",21)(1406,"code",22),qx(1407,"boolean"),og()(),Cl(1408,"td",23)(1409,"p")(1410,"code"),qx(1411,"true"),og()()(),Cl(1412,"td",24)(1413,"em")(1414,"strong"),qx(1415,"(opcional)"),og()(),Cl(1416,"p"),qx(1417,"Habilita o "),Cl(1418,"code"),qx(1419,"virtual-scroll"),og(),qx(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Cl(1421,"code"),qx(1422,"p-height"),og(),qx(1423,") para funcionar corretamente."),og(),Cl(1424,"blockquote")(1425,"p"),qx(1426,"Incompat\xEDvel com "),Cl(1427,"code"),qx(1428,"p-text-wrap"),og(),qx(1429," e "),Cl(1430,"code"),qx(1431,"master-detail"),og(),qx(1432,", pois o "),Cl(1433,"code"),qx(1434,"virtual-scroll"),og(),qx(1435," exige altura fixa nas linhas."),og()()()()(),Cl(1436,"h3",13),qx(1437,"M\xE9todos"),og(),Cl(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),qx(1444," applyFilters "),og()()()()(),Cl(1445,"tr",24)(1446,"td",24)(1447,"p"),qx(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),og(),Cl(1449,"p"),qx(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),og(),Cl(1451,"pre")(1452,"code"),qx(1453,`url + ?page=1&pageSize=10
`),og()(),Cl(1454,"blockquote")(1455,"p"),qx(1456,"Obs: os par\xE2metros "),Cl(1457,"code"),qx(1458,"page"),og(),qx(1459," e "),Cl(1460,"code"),qx(1461,"pageSize"),og(),qx(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),og()(),Cl(1463,"p"),qx(1464,"Caso sejam informados os par\xE2metros "),Cl(1465,"code"),qx(1466,"{ name: 'JOHN', age: '23' }"),og(),qx(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),og(),Cl(1468,"pre")(1469,"code"),qx(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),og()()()()(),Cl(1471,"h5")(1472,"b"),qx(1473,"Par\xE2metros"),og()(),Cl(1474,"table",14)(1475,"tr",15)(1476,"th",16),qx(1477,"Nome"),og(),Cl(1478,"th",16),qx(1479,"Tipo"),og(),Cl(1480,"th",16),qx(1481,"Descri\xE7\xE3o"),og()(),Cl(1482,"tr",17)(1483,"td",18),qx(1484," queryParams"),og(),Cl(1485,"td",21)(1486,"code",42),qx(1487," { key: value } "),og()(),Cl(1488,"td",24)(1489,"p"),qx(1490,"Formato do objeto a ser enviado."),og(),Cl(1491,"blockquote")(1492,"p"),qx(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),og()()()()(),Hl(1494,"br"),Cl(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),qx(1501," applyFixedColumns "),og()()()()(),Cl(1502,"tr",24)(1503,"td",24)(1504,"p"),qx(1505,"Verifica se columns possuem a propriedade width."),og()()()(),Hl(1506,"br"),Cl(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),qx(1513," collapse "),og()()()()(),Cl(1514,"tr",24)(1515,"td",24)(1516,"p"),qx(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),og()()()(),Cl(1518,"h5")(1519,"b"),qx(1520,"Par\xE2metros"),og()(),Cl(1521,"table",14)(1522,"tr",15)(1523,"th",16),qx(1524,"Nome"),og(),Cl(1525,"th",16),qx(1526,"Tipo"),og(),Cl(1527,"th",16),qx(1528,"Descri\xE7\xE3o"),og()(),Cl(1529,"tr",17)(1530,"td",18),qx(1531," rowIndex"),og(),Cl(1532,"td",21)(1533,"code",43),qx(1534," number "),og()(),Cl(1535,"td",24)(1536,"p"),qx(1537,"\xCDndice da linha que ser\xE1 colapsada."),og(),Cl(1538,"blockquote")(1539,"p"),qx(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),Hl(1541,"br"),Cl(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),qx(1548," expand "),og()()()()(),Cl(1549,"tr",24)(1550,"td",24)(1551,"p"),qx(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),og()()()(),Cl(1553,"h5")(1554,"b"),qx(1555,"Par\xE2metros"),og()(),Cl(1556,"table",14)(1557,"tr",15)(1558,"th",16),qx(1559,"Nome"),og(),Cl(1560,"th",16),qx(1561,"Tipo"),og(),Cl(1562,"th",16),qx(1563,"Descri\xE7\xE3o"),og()(),Cl(1564,"tr",17)(1565,"td",18),qx(1566," rowIndex"),og(),Cl(1567,"td",21)(1568,"code",43),qx(1569," number "),og()(),Cl(1570,"td",24)(1571,"p"),qx(1572,"\xCDndice da linha que ser\xE1 expandida."),og(),Cl(1573,"blockquote")(1574,"p"),qx(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),og()()()()(),Hl(1576,"br"),Cl(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),qx(1583," getSelectedRows "),og()()()()(),Cl(1584,"tr",24)(1585,"td",24)(1586,"p"),qx(1587,"Retorna as linhas do "),Cl(1588,"code"),qx(1589,"po-table"),og(),qx(1590," que est\xE3o selecionadas."),og()()()(),Hl(1591,"br"),Cl(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),qx(1598," getUnselectedRows "),og()()()()(),Cl(1599,"tr",24)(1600,"td",24)(1601,"p"),qx(1602,"Retorna as linhas do "),Cl(1603,"code"),qx(1604,"po-table"),og(),qx(1605," que n\xE3o est\xE3o selecionadas."),og()()()(),Hl(1606,"br"),Cl(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),qx(1613," unselectRows "),og()()()()(),Cl(1614,"tr",24)(1615,"td",24)(1616,"p"),qx(1617,"Desmarca as linhas que est\xE3o selecionadas."),og()()()(),Hl(1618,"br"),Cl(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),qx(1625," unselectRowItem "),og()()()()(),Cl(1626,"tr",24)(1627,"td",24)(1628,"p"),qx(1629,"Desmarca uma linha que est\xE1 selecionada."),og()()()(),Hl(1630,"br"),Cl(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),qx(1637," selectRowItem "),og()()()()(),Cl(1638,"tr",24)(1639,"td",24)(1640,"p"),qx(1641,"Seleciona uma linha do 'po-table'."),og()()()(),Hl(1642,"br"),Cl(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),qx(1649," deleteItems "),og()()()()(),Cl(1650,"tr",24)(1651,"td",24)(1652,"p"),qx(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Cl(1654,"code"),qx(1655,"p-service-delete"),og(),qx(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),og(),Cl(1657,"p"),qx(1658,"Ao utilizar "),Cl(1659,"code"),qx(1660,"p-service-delete"),og(),qx(1661," mas sem a propriedade "),Cl(1662,"code"),qx(1663,"p-service-api"),og(),qx(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),og(),Cl(1665,"p"),qx(1666,"Caso a tabela utilize "),Cl(1667,"code"),qx(1668,"p-height"),og(),qx(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),Cl(1670,"code"),qx(1671,"(p-delete-items)"),og(),qx(1672,", por exemplo:"),og(),Cl(1673,"pre")(1674,"code"),qx(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),og()()()()(),Hl(1676,"br"),Cl(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),qx(1683," removeItem "),og()()()()(),Cl(1684,"tr",24)(1685,"td",24)(1686,"p"),qx(1687,"M\xE9todo que remove um item da tabela."),og()()()(),Cl(1688,"h5")(1689,"b"),qx(1690,"Par\xE2metros"),og()(),Cl(1691,"table",14)(1692,"tr",15)(1693,"th",16),qx(1694,"Nome"),og(),Cl(1695,"th",16),qx(1696,"Tipo"),og(),Cl(1697,"th",16),qx(1698,"Descri\xE7\xE3o"),og()(),Cl(1699,"tr",17)(1700,"td",18),qx(1701," item"),og(),Cl(1702,"td",21)(1703,"code",35),qx(1704," number "),og(),Cl(1705,"code",42),qx(1706," { key: value } "),og()(),Cl(1707,"td",24)(1708,"p"),qx(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),og(),Cl(1710,"blockquote")(1711,"p"),qx(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),og()()()()(),Hl(1713,"br"),Cl(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),qx(1720," updateItem "),og()()()()(),Cl(1721,"tr",24)(1722,"td",24)(1723,"p"),qx(1724,"M\xE9todo que atualiza um item da tabela."),og()()()(),Cl(1725,"h5")(1726,"b"),qx(1727,"Par\xE2metros"),og()(),Cl(1728,"table",14)(1729,"tr",15)(1730,"th",16),qx(1731,"Nome"),og(),Cl(1732,"th",16),qx(1733,"Tipo"),og(),Cl(1734,"th",16),qx(1735,"Descri\xE7\xE3o"),og()(),Cl(1736,"tr",17)(1737,"td",18),qx(1738," item"),og(),Cl(1739,"td",21)(1740,"code",35),qx(1741," number "),og(),Cl(1742,"code",42),qx(1743," { key: value } "),og()(),Cl(1744,"td",24)(1745,"p"),qx(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),og()()(),Cl(1747,"tr",17)(1748,"td",18),qx(1749," updatedItem"),og(),Cl(1750,"td",21)(1751,"code",42),qx(1752," { key: value } "),og()(),Cl(1753,"td",24)(1754,"p"),qx(1755,"Item que foi atualizado."),og(),Cl(1756,"blockquote")(1757,"p"),qx(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),og()()()()(),Hl(1759,"br"),Cl(1760,"h3"),qx(1761,"Interfaces"),og(),Cl(1762,"h4",44)(1763,"code",5),qx(1764,"PoTableAction"),og()(),Cl(1765,"div",2)(1766,"p"),qx(1767,"Interface para lista de a\xE7\xF5es do componente. "),og()(),Cl(1768,"h4",13),qx(1769,"Propriedades"),og(),Cl(1770,"table",14)(1771,"tr",15)(1772,"th",16),qx(1773,"Nome"),og(),Cl(1774,"th",16),qx(1775,"Tipo"),og(),Cl(1776,"th",16),qx(1777,"Descri\xE7\xE3o"),og()(),Cl(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),qx(1782," action"),Hl(1783,"br"),og()()(),Cl(1784,"td",21)(1785,"code",45),qx(1786,"Function"),og()(),Cl(1787,"td",24)(1788,"em")(1789,"strong"),qx(1790,"(opcional)"),og()(),Cl(1791,"p"),qx(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),og(),Cl(1793,"p"),qx(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(1795,"code"),qx(1796,"subItems"),og(),qx(1797,"."),og(),Cl(1798,"blockquote")(1799,"p"),qx(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),Cl(1801,"em"),qx(1802,"bind"),og(),qx(1803,`:
`),Cl(1804,"code"),qx(1805,"action: this.myFunction.bind(this)"),og()()()()(),Cl(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),qx(1810," disabled"),Hl(1811,"br"),og()()(),Cl(1812,"td",21)(1813,"code",22),qx(1814,"boolean "),og(),Cl(1815,"code",45),qx(1816," Function"),og()(),Cl(1817,"td",24)(1818,"em")(1819,"strong"),qx(1820,"(opcional)"),og()(),Cl(1821,"p"),qx(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()(),Cl(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),qx(1827," icon"),Hl(1828,"br"),og()()(),Cl(1829,"td",21)(1830,"code",31),qx(1831,"string "),og(),Cl(1832,"code",46),qx(1833," TemplateRef<void>"),og()(),Cl(1834,"td",24)(1835,"em")(1836,"strong"),qx(1837,"(opcional)"),og()(),Cl(1838,"p"),qx(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),og(),Cl(1840,"p"),qx(1841,"Aceita \xEDcones da "),Cl(1842,"a",26),qx(1843,"Biblioteca de \xEDcones"),og(),qx(1844,`, fontes externas (ex: Font Awesome)
ou um `),Cl(1845,"code"),qx(1846,"TemplateRef"),og(),qx(1847," para \xEDcones customizados."),og(),Cl(1848,"pre")(1849,"code"),qx(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),og()()()(),Cl(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),qx(1855," label"),Hl(1856,"br"),og()()(),Cl(1857,"td",21)(1858,"code",31),qx(1859,"string"),og()(),Cl(1860,"td",24)(1861,"p"),qx(1862,"R\xF3tulo da a\xE7\xE3o."),og(),Cl(1863,"p"),qx(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),Cl(1865,"code"),qx(1866,"subItems"),og(),qx(1867,"."),og()()(),Cl(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),qx(1872," selected"),Hl(1873,"br"),og()()(),Cl(1874,"td",21)(1875,"code",22),qx(1876,"boolean"),og()(),Cl(1877,"td",24)(1878,"em")(1879,"strong"),qx(1880,"(opcional)"),og()(),Cl(1881,"p"),qx(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),og()()(),Cl(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),qx(1887," separator"),Hl(1888,"br"),og()()(),Cl(1889,"td",21)(1890,"code",22),qx(1891,"boolean"),og()(),Cl(1892,"td",24)(1893,"em")(1894,"strong"),qx(1895,"(opcional)"),og()(),Cl(1896,"p"),qx(1897,"Atribui uma linha separadora acima do item."),og()()(),Cl(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),qx(1902," subItems"),Hl(1903,"br"),og()()(),Cl(1904,"td",21)(1905,"code",47),qx(1906,"Array<PoPopupAction>"),og()(),Cl(1907,"td",24)(1908,"em")(1909,"strong"),qx(1910,"(opcional)"),og()(),Cl(1911,"p"),qx(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),og(),Cl(1913,"p"),qx(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),og(),Cl(1915,"blockquote")(1916,"p"),qx(1917,"As propriedades "),Cl(1918,"code"),qx(1919,"disabled"),og(),qx(1920,", "),Cl(1921,"code"),qx(1922,"type"),og(),qx(1923," e "),Cl(1924,"code"),qx(1925,"visible"),og(),qx(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),og()(),Cl(1927,"blockquote")(1928,"p"),qx(1929,"Quando "),Cl(1930,"code"),qx(1931,"url"),og(),qx(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),og()(),Cl(1933,"blockquote")(1934,"p"),qx(1935,"Em subn\xEDveis aninhados, o "),Cl(1936,"code"),qx(1937,"icon"),og(),qx(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),og()()()(),Cl(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),qx(1943," type"),Hl(1944,"br"),og()()(),Cl(1945,"td",21)(1946,"code",31),qx(1947,"string"),og()(),Cl(1948,"td",24)(1949,"em")(1950,"strong"),qx(1951,"(opcional)"),og()(),Cl(1952,"p"),qx(1953,"Define a cor do item."),og(),Cl(1954,"p"),qx(1955,"Valores v\xE1lidos:"),og(),Cl(1956,"ul")(1957,"li")(1958,"code"),qx(1959,"default"),og()(),Cl(1960,"li")(1961,"code"),qx(1962,"danger"),og()()()()(),Cl(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),qx(1967," url"),Hl(1968,"br"),og()()(),Cl(1969,"td",21)(1970,"code",31),qx(1971,"string"),og()(),Cl(1972,"td",24)(1973,"em")(1974,"strong"),qx(1975,"(opcional)"),og()(),Cl(1976,"p"),qx(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),og(),Cl(1978,"p"),qx(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Cl(1980,"code"),qx(1981,"url"),og(),qx(1982," \xE9 informada em um agrupador, o clique "),Cl(1983,"strong"),qx(1984,"n\xE3o abrir\xE1 os subitens"),og(),qx(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),og(),Cl(1986,"blockquote")(1987,"p"),qx(1988,"Quando informada, tem prioridade sobre a propriedade "),Cl(1989,"code"),qx(1990,"action"),og(),qx(1991,"."),og()()()(),Cl(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),qx(1996," visible"),Hl(1997,"br"),og()()(),Cl(1998,"td",21)(1999,"code",22),qx(2e3,"boolean "),og(),Cl(2001,"code",45),qx(2002," Function"),og()(),Cl(2003,"td",24)(2004,"em")(2005,"strong"),qx(2006,"(opcional)"),og()(),Cl(2007,"p"),qx(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),og()()()(),Cl(2009,"h4",44)(2010,"code",5),qx(2011,"PoTableBoolean"),og()(),Cl(2012,"div",2)(2013,"p"),qx(2014,"Interface que define as colunas booleanas do "),Cl(2015,"code"),qx(2016,"po-table"),og(),qx(2017,"."),og()(),Cl(2018,"h4",13),qx(2019,"Propriedades"),og(),Cl(2020,"table",14)(2021,"tr",15)(2022,"th",16),qx(2023,"Nome"),og(),Cl(2024,"th",16),qx(2025,"Tipo"),og(),Cl(2026,"th",16),qx(2027,"Descri\xE7\xE3o"),og()(),Cl(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),qx(2032," falseLabel"),Hl(2033,"br"),og()()(),Cl(2034,"td",21)(2035,"code",31),qx(2036,"string"),og()(),Cl(2037,"td",24)(2038,"em")(2039,"strong"),qx(2040,"(opcional)"),og()(),Cl(2041,"p"),qx(2042,"Define o r\xF3tulo para valores "),Cl(2043,"code"),qx(2044,"false"),og(),qx(2045,"."),og()()(),Cl(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),qx(2050," trueLabel"),Hl(2051,"br"),og()()(),Cl(2052,"td",21)(2053,"code",31),qx(2054,"string"),og()(),Cl(2055,"td",24)(2056,"em")(2057,"strong"),qx(2058,"(opcional)"),og()(),Cl(2059,"p"),qx(2060,"Define o r\xF3tulo para valores "),Cl(2061,"code"),qx(2062,"true"),og(),qx(2063,"."),og()()()(),Cl(2064,"h4",44)(2065,"code",5),qx(2066,"PoTableColumnSort"),og()(),Cl(2067,"div",2)(2068,"p"),qx(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),og()(),Cl(2070,"h4",13),qx(2071,"Propriedades"),og(),Cl(2072,"table",14)(2073,"tr",15)(2074,"th",16),qx(2075,"Nome"),og(),Cl(2076,"th",16),qx(2077,"Tipo"),og(),Cl(2078,"th",16),qx(2079,"Descri\xE7\xE3o"),og()(),Cl(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),qx(2084," column"),Hl(2085,"br"),og()()(),Cl(2086,"td",21)(2087,"code",48),qx(2088,"PoTableColumn"),og()(),Cl(2089,"td",24)(2090,"em")(2091,"strong"),qx(2092,"(opcional)"),og()(),Cl(2093,"p"),qx(2094,"Coluna pela qual a tabela est\xE1 ordenada."),og()()(),Cl(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),qx(2099," type"),Hl(2100,"br"),og()()(),Cl(2101,"td",21)(2102,"code",49),qx(2103,"PoTableColumnSortType"),og()(),Cl(2104,"td",24)(2105,"p"),qx(2106,"Tipo da ordena\xE7\xE3o."),og()()()(),Cl(2107,"h4",44)(2108,"code",5),qx(2109,"PoTableColumn"),og()(),Cl(2110,"div",2)(2111,"p"),qx(2112,"Interface para configura\xE7\xE3o das colunas do "),Cl(2113,"code"),qx(2114,"po-table"),og(),qx(2115,"."),og(),Cl(2116,"p"),qx(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),og()(),Cl(2118,"h4",13),qx(2119,"Propriedades"),og(),Cl(2120,"table",14)(2121,"tr",15)(2122,"th",16),qx(2123,"Nome"),og(),Cl(2124,"th",16),qx(2125,"Tipo"),og(),Cl(2126,"th",16),qx(2127,"Descri\xE7\xE3o"),og()(),Cl(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),qx(2132," action"),Hl(2133,"br"),og()()(),Cl(2134,"td",21)(2135,"code",45),qx(2136,"Function"),og()(),Cl(2137,"td",24)(2138,"em")(2139,"strong"),qx(2140,"(opcional)"),og()(),Cl(2141,"p"),qx(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),Cl(2143,"code"),qx(2144,"link"),og(),qx(2145," ou "),Cl(2146,"code"),qx(2147,"icon"),og(),qx(2148,"."),og(),Cl(2149,"blockquote")(2150,"p"),qx(2151,"Quando for do tipo "),Cl(2152,"code"),qx(2153,"link"),og(),qx(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),og()(),Cl(2155,"blockquote")(2156,"p"),qx(2157,"Quando for do tipo "),Cl(2158,"code"),qx(2159,"icon"),og(),qx(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),og()()()(),Cl(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),qx(2165," boolean"),Hl(2166,"br"),og()()(),Cl(2167,"td",21)(2168,"code",50),qx(2169,"PoTableBoolean"),og()(),Cl(2170,"td",24)(2171,"em")(2172,"strong"),qx(2173,"(opcional)"),og()(),Cl(2174,"p"),qx(2175,"Define um objeto do tipo "),Cl(2176,"code"),qx(2177,"PoTableBoolean"),og(),qx(2178," para as colunas do tipo "),Cl(2179,"em"),qx(2180,"boolean"),og(),qx(2181,". Por exemplo:"),og(),Cl(2182,"pre")(2183,"code"),qx(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),og()(),Cl(2185,"blockquote")(2186,"p"),qx(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),Cl(2188,"em"),qx(2189,"boolean"),og(),qx(2190,`,
esta exibir\xE1 por padr\xE3o `),Cl(2191,"code"),qx(2192,"Sim"),og(),qx(2193," e "),Cl(2194,"code"),qx(2195,"N\xE3o"),og(),qx(2196," de acordo com os valores "),Cl(2197,"em"),qx(2198,"booleanos"),og(),qx(2199,"."),og()()()(),Cl(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),qx(2204," color"),Hl(2205,"br"),og()()(),Cl(2206,"td",21)(2207,"code",31),qx(2208,"string "),og(),Cl(2209,"code",45),qx(2210," Function"),og()(),Cl(2211,"td",24)(2212,"em")(2213,"strong"),qx(2214,"(opcional)"),og()(),Cl(2215,"p"),qx(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),og(),Cl(2217,"p"),qx(2218,"Valores v\xE1lidos:"),og(),Cl(2219,"ul")(2220,"li"),Hl(2221,"span",51),Cl(2222,"code"),qx(2223,"color-01"),og()(),Cl(2224,"li"),Hl(2225,"span",52),Cl(2226,"code"),qx(2227,"color-02"),og()(),Cl(2228,"li"),Hl(2229,"span",53),Cl(2230,"code"),qx(2231,"color-03"),og()(),Cl(2232,"li"),Hl(2233,"span",54),Cl(2234,"code"),qx(2235,"color-04"),og()(),Cl(2236,"li"),Hl(2237,"span",55),Cl(2238,"code"),qx(2239,"color-05"),og()(),Cl(2240,"li"),Hl(2241,"span",56),Cl(2242,"code"),qx(2243,"color-06"),og()(),Cl(2244,"li"),Hl(2245,"span",57),Cl(2246,"code"),qx(2247,"color-07"),og()(),Cl(2248,"li"),Hl(2249,"span",58),Cl(2250,"code"),qx(2251,"color-08"),og()(),Cl(2252,"li"),Hl(2253,"span",59),Cl(2254,"code"),qx(2255,"color-09"),og()(),Cl(2256,"li"),Hl(2257,"span",60),Cl(2258,"code"),qx(2259,"color-10"),og()(),Cl(2260,"li"),Hl(2261,"span",61),Cl(2262,"code"),qx(2263,"color-11"),og()(),Cl(2264,"li"),Hl(2265,"span",62),Cl(2266,"code"),qx(2267,"color-12"),og()()(),Cl(2268,"blockquote")(2269,"p"),qx(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Cl(2271,"strong"),qx(2272,"Caption Tag Colors"),og(),qx(2273,":"),og()(),Cl(2274,"ul")(2275,"li"),Hl(2276,"span",63),Cl(2277,"code"),qx(2278,"caption-tag-01"),og(),Hl(2279,"span",64),Cl(2280,"code"),qx(2281,"caption-tag-02"),og(),Hl(2282,"span",65),Cl(2283,"code"),qx(2284,"caption-tag-03"),og(),Hl(2285,"span",66),Cl(2286,"code"),qx(2287,"caption-tag-04"),og(),Hl(2288,"span",67),Cl(2289,"code"),qx(2290,"caption-tag-05"),og()(),Cl(2291,"li"),Hl(2292,"span",68),Cl(2293,"code"),qx(2294,"caption-tag-06"),og(),Hl(2295,"span",69),Cl(2296,"code"),qx(2297,"caption-tag-07"),og(),Hl(2298,"span",70),Cl(2299,"code"),qx(2300,"caption-tag-08"),og(),Hl(2301,"span",71),Cl(2302,"code"),qx(2303,"caption-tag-09"),og(),Hl(2304,"span",72),Cl(2305,"code"),qx(2306,"caption-tag-10"),og()(),Cl(2307,"li"),Hl(2308,"span",73),Cl(2309,"code"),qx(2310,"caption-tag-11"),og(),Hl(2311,"span",74),Cl(2312,"code"),qx(2313,"caption-tag-12"),og(),Hl(2314,"span",75),Cl(2315,"code"),qx(2316,"caption-tag-13"),og(),Hl(2317,"span",76),Cl(2318,"code"),qx(2319,"caption-tag-14"),og(),Hl(2320,"span",77),Cl(2321,"code"),qx(2322,"caption-tag-15"),og()(),Cl(2323,"li"),Hl(2324,"span",78),Cl(2325,"code"),qx(2326,"caption-tag-16"),og(),Hl(2327,"span",79),Cl(2328,"code"),qx(2329,"caption-tag-17"),og(),Hl(2330,"span",80),Cl(2331,"code"),qx(2332,"caption-tag-18"),og(),Hl(2333,"span",81),Cl(2334,"code"),qx(2335,"caption-tag-19"),og(),Hl(2336,"span",82),Cl(2337,"code"),qx(2338,"caption-tag-20"),og()(),Cl(2339,"li"),Hl(2340,"span",83),Cl(2341,"code"),qx(2342,"caption-tag-21"),og(),Hl(2343,"span",84),Cl(2344,"code"),qx(2345,"caption-tag-22"),og(),Hl(2346,"span",85),Cl(2347,"code"),qx(2348,"caption-tag-23"),og(),Hl(2349,"span",86),Cl(2350,"code"),qx(2351,"caption-tag-24"),og(),Hl(2352,"span",87),Cl(2353,"code"),qx(2354,"caption-tag-25"),og()(),Cl(2355,"li"),Hl(2356,"span",88),Cl(2357,"code"),qx(2358,"caption-tag-26"),og(),Hl(2359,"span",89),Cl(2360,"code"),qx(2361,"caption-tag-27"),og(),Hl(2362,"span",90),Cl(2363,"code"),qx(2364,"caption-tag-28"),og(),Hl(2365,"span",91),Cl(2366,"code"),qx(2367,"caption-tag-29"),og(),Hl(2368,"span",92),Cl(2369,"code"),qx(2370,"caption-tag-30"),og()(),Cl(2371,"li"),Hl(2372,"span",93),Cl(2373,"code"),qx(2374,"caption-tag-31"),og(),Hl(2375,"span",94),Cl(2376,"code"),qx(2377,"caption-tag-32"),og(),Hl(2378,"span",95),Cl(2379,"code"),qx(2380,"caption-tag-33"),og(),Hl(2381,"span",96),Cl(2382,"code"),qx(2383,"caption-tag-34"),og(),Hl(2384,"span",97),Cl(2385,"code"),qx(2386,"caption-tag-35"),og()()(),Cl(2387,"blockquote")(2388,"p"),qx(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),og()(),Cl(2390,"pre")(2391,"code"),qx(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),og()(),Cl(2393,"blockquote")(2394,"p"),qx(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),Cl(2396,"code"),qx(2397,"icons"),og(),qx(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),og()(),Cl(2399,"pre")(2400,"code"),qx(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),og()()()(),Cl(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),qx(2406," detail"),Hl(2407,"br"),og()()(),Cl(2408,"td",21)(2409,"code",98),qx(2410,"PoTableDetail"),og()(),Cl(2411,"td",24)(2412,"em")(2413,"strong"),qx(2414,"(opcional)"),og()(),Cl(2415,"p"),qx(2416,"Define um objeto que segue a interface "),Cl(2417,"code"),qx(2418,"PoTableDetail"),og(),qx(2419,", para as colunas de detalhes. Por exemplo:"),og(),Cl(2420,"pre")(2421,"code"),qx(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),og()()()(),Cl(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),qx(2427," disabled"),Hl(2428,"br"),og()()(),Cl(2429,"td",21)(2430,"code",45),qx(2431,"Function"),og()(),Cl(2432,"td",24)(2433,"em")(2434,"strong"),qx(2435,"(opcional)"),og()(),Cl(2436,"p"),qx(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),Cl(2438,"em"),qx(2439,"link"),og(),qx(2440," e sua a\xE7\xE3o."),og(),Cl(2441,"blockquote")(2442,"p"),qx(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),Cl(2444,"code"),qx(2445,"link"),og(),qx(2446,"."),og()()()(),Cl(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),qx(2451," format"),Hl(2452,"br"),og()()(),Cl(2453,"td",21)(2454,"code",31),qx(2455,"string"),og()(),Cl(2456,"td",24)(2457,"em")(2458,"strong"),qx(2459,"(opcional)"),og()(),Cl(2460,"p"),qx(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),og(),Cl(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),qx(2466,"Formata\xE7\xE3o"),og(),Cl(2467,"th"),qx(2468,"Type da Coluna"),og(),Cl(2469,"th"),qx(2470,"Descri\xE7\xE3o"),og(),Cl(2471,"th"),qx(2472,"Exemplos"),og()()(),Cl(2473,"tbody")(2474,"tr")(2475,"td"),qx(2476,"Monet\xE1rio"),og(),Cl(2477,"td")(2478,"code"),qx(2479,"currency"),og()(),Cl(2480,"td"),qx(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),og(),Cl(2482,"td")(2483,"code"),qx(2484,"'BRL'"),og(),qx(2485,", "),Cl(2486,"code"),qx(2487,"'USD'"),og(),qx(2488,", "),Cl(2489,"code"),qx(2490,"'EUR'"),og(),qx(2491,", "),Cl(2492,"code"),qx(2493,"'RUB'"),og()()(),Cl(2494,"tr")(2495,"td"),qx(2496,"Data"),og(),Cl(2497,"td")(2498,"code"),qx(2499,"date"),og()(),Cl(2500,"td"),qx(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),og(),Cl(2502,"td")(2503,"code"),qx(2504,"'dd/MM/yyyy'"),og(),qx(2505,", "),Cl(2506,"code"),qx(2507,"'dd-MM-yy'"),og(),qx(2508,", "),Cl(2509,"code"),qx(2510,"'mm/dd/yyyy'"),og()()(),Cl(2511,"tr")(2512,"td"),qx(2513,"Hora"),og(),Cl(2514,"td")(2515,"code"),qx(2516,"time"),og()(),Cl(2517,"td"),qx(2518,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),og(),Cl(2519,"td")(2520,"code"),qx(2521,"'HH:mm'"),og(),qx(2522,", "),Cl(2523,"code"),qx(2524,"'HH:mm:ss.ffffff'"),og(),qx(2525,", "),Cl(2526,"code"),qx(2527,"'HH:mm:ss.ff'"),og(),qx(2528,", "),Cl(2529,"code"),qx(2530,"'mm:ss.fff'"),og()()(),Cl(2531,"tr")(2532,"td"),qx(2533,"N\xFAmero"),og(),Cl(2534,"td")(2535,"code"),qx(2536,"number"),og()(),Cl(2537,"td"),qx(2538,"Aceita um valor seguindo o padr\xE3o "),Cl(2539,"a",99)(2540,"strong"),qx(2541,"DecimalPipe"),og()(),qx(2542," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),og(),Cl(2543,"td")(2544,"code"),qx(2545,"'1.2-5'"),og(),qx(2546," (ex.: "),Cl(2547,"code"),qx(2548,"50"),og(),qx(2549," \u2192 "),Cl(2550,"code"),qx(2551,"50.00"),og(),qx(2552,")"),og()()()(),Cl(2553,"p"),qx(2554,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),og()()(),Cl(2555,"tr",17)(2556,"td",18)(2557,"div",19)(2558,"span",20),qx(2559," icons"),Hl(2560,"br"),og()()(),Cl(2561,"td",21)(2562,"code",100),qx(2563,"Array<PoTableColumnIcon>"),og()(),Cl(2564,"td",24)(2565,"em")(2566,"strong"),qx(2567,"(opcional)"),og()(),Cl(2568,"p"),qx(2569,"Define um "),Cl(2570,"em"),qx(2571,"array"),og(),qx(2572," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),Cl(2573,"code"),qx(2574,"action"),og(),qx(2575," e "),Cl(2576,"code"),qx(2577,"color"),og(),qx(2578,`
definidos na coluna, \xE0 partir do `),Cl(2579,"em"),qx(2580,"value"),og(),qx(2581," da "),Cl(2582,"a",101)(2583,"code"),qx(2584,"PoTableColumnIcon"),og()(),qx(2585,", por exemplo:"),og(),Cl(2586,"pre")(2587,"code"),qx(2588,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),og()(),Cl(2589,"pre")(2590,"code"),qx(2591,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),og()()()(),Cl(2592,"tr",17)(2593,"td",18)(2594,"div",19)(2595,"span",20),qx(2596," label"),Hl(2597,"br"),og()()(),Cl(2598,"td",21)(2599,"code",31),qx(2600,"string"),og()(),Cl(2601,"td",24)(2602,"em")(2603,"strong"),qx(2604,"(opcional)"),og()(),Cl(2605,"p"),qx(2606,"Texto para t\xEDtulo da coluna."),og(),Cl(2607,"p"),qx(2608,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Cl(2609,"em"),qx(2610,"label"),og(),qx(2611," o valor da propriedade "),Cl(2612,"em"),qx(2613,"property"),og(),qx(2614," com a primeira letra em mai\xFAsculo."),og()()(),Cl(2615,"tr",17)(2616,"td",18)(2617,"div",19)(2618,"span",20),qx(2619," labels"),Hl(2620,"br"),og()()(),Cl(2621,"td",21)(2622,"code",102),qx(2623,"Array<PoTableColumnLabel>"),og()(),Cl(2624,"td",24)(2625,"em")(2626,"strong"),qx(2627,"(opcional)"),og()(),Cl(2628,"p"),qx(2629,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Cl(2630,"code"),qx(2631,"PoTableColumnLabel"),og(),qx(2632," na qual devem ser definidas os labels. Por exemplo:"),og(),Cl(2633,"pre")(2634,"code"),qx(2635,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),og()()()(),Cl(2636,"tr",17)(2637,"td",18)(2638,"div",19)(2639,"span",20),qx(2640," link"),Hl(2641,"br"),og()()(),Cl(2642,"td",21)(2643,"code",31),qx(2644,"string"),og()(),Cl(2645,"td",24)(2646,"em")(2647,"strong"),qx(2648,"(opcional)"),og()(),Cl(2649,"p"),qx(2650,"Define o nome da propriedade que conter\xE1 o "),Cl(2651,"code"),qx(2652,"link"),og(),qx(2653," a ser redirecionado."),og()()(),Cl(2654,"tr",17)(2655,"td",18)(2656,"div",19)(2657,"span",20),qx(2658," property"),Hl(2659,"br"),og()()(),Cl(2660,"td",21)(2661,"code",31),qx(2662,"string"),og()(),Cl(2663,"td",24)(2664,"em")(2665,"strong"),qx(2666,"(opcional)"),og()(),Cl(2667,"p"),qx(2668,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),og(),Cl(2669,"pre")(2670,"code"),qx(2671,`{ property: 'address.street', label: 'Rua' }
`),og()()()(),Cl(2672,"tr",17)(2673,"td",18)(2674,"div",19)(2675,"span",20),qx(2676," sortable"),Hl(2677,"br"),og()()(),Cl(2678,"td",21)(2679,"code",22),qx(2680,"boolean"),og()(),Cl(2681,"td",24)(2682,"em")(2683,"strong"),qx(2684,"(opcional)"),og()(),Cl(2685,"p"),qx(2686,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),og()()(),Cl(2687,"tr",17)(2688,"td",18)(2689,"div",19)(2690,"span",20),qx(2691," subtitles"),Hl(2692,"br"),og()()(),Cl(2693,"td",21)(2694,"code",103),qx(2695,"Array<PoTableSubtitleColumn>"),og()(),Cl(2696,"td",24)(2697,"em")(2698,"strong"),qx(2699,"(opcional)"),og()(),Cl(2700,"p"),qx(2701,"Define um array de objetos para as colunas de legenda. Onde, "),Cl(2702,"code"),qx(2703,"subtitles"),og(),qx(2704,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),og(),Cl(2705,"pre")(2706,"code"),qx(2707,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),og()(),Cl(2708,"p"),qx(2709,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),og()()(),Cl(2710,"tr",17)(2711,"td",18)(2712,"div",19)(2713,"span",20),qx(2714," tooltip"),Hl(2715,"br"),og()()(),Cl(2716,"td",21)(2717,"code",31),qx(2718,"string"),og()(),Cl(2719,"td",24)(2720,"em")(2721,"strong"),qx(2722,"(opcional)"),og()(),Cl(2723,"p"),qx(2724,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Cl(2725,"em"),qx(2726,"mouse"),og(),qx(2727," sobre um texto."),og(),Cl(2728,"blockquote")(2729,"p"),qx(2730,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),Cl(2731,"em"),qx(2732,"link"),og(),qx(2733,"."),og()(),Cl(2734,"blockquote")(2735,"p"),qx(2736,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Cl(2737,"em"),qx(2738,"tooltip"),og(),qx(2739," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),og()()()(),Cl(2740,"tr",17)(2741,"td",18)(2742,"div",19)(2743,"span",20),qx(2744," type"),Hl(2745,"br"),og()()(),Cl(2746,"td",21)(2747,"code",31),qx(2748,"string"),og()(),Cl(2749,"td",24)(2750,"em")(2751,"strong"),qx(2752,"(opcional)"),og()(),Cl(2753,"p"),qx(2754,"Tipo da coluna."),og(),Cl(2755,"p"),qx(2756,"Valores v\xE1lidos:"),og(),Cl(2757,"ul")(2758,"li")(2759,"p")(2760,"code"),qx(2761,"boolean"),og(),qx(2762,": Exibir\xE1 por padr\xE3o "),Cl(2763,"code"),qx(2764,"Sim"),og(),qx(2765," e "),Cl(2766,"code"),qx(2767,"N\xE3o"),og(),qx(2768," de acordo com os valores "),Cl(2769,"em"),qx(2770,"booleanos"),og(),qx(2771,"."),og(),Cl(2772,"blockquote")(2773,"p"),qx(2774,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),Cl(2775,"code"),qx(2776,"boolean"),og(),qx(2777," desta interface."),og()()(),Cl(2778,"li")(2779,"p")(2780,"code"),qx(2781,"currency"),og(),qx(2782,": valores monet\xE1rios."),og()(),Cl(2783,"li")(2784,"p")(2785,"code"),qx(2786,"date"),og(),qx(2787,": valor de datas."),og(),Cl(2788,"ul")(2789,"li"),qx(2790,"Aceita os tipos "),Cl(2791,"em"),qx(2792,"string"),og(),qx(2793," e "),Cl(2794,"em"),qx(2795,"Date"),og(),qx(2796,` padr\xE3o do Javascript,
por exemplo: `),Cl(2797,"code"),qx(2798,"'2017-11-28'"),og(),qx(2799," ou "),Cl(2800,"code"),qx(2801,"new Date(2017, 10, 28)"),og(),qx(2802,"."),og()()(),Cl(2803,"li")(2804,"p")(2805,"code"),qx(2806,"dateTime"),og(),qx(2807,": valor de data com hor\xE1rio."),og(),Cl(2808,"ul")(2809,"li"),qx(2810,"Aceita o tipo "),Cl(2811,"em"),qx(2812,"string"),og(),qx(2813," no formato "),Cl(2814,"strong"),qx(2815,"ISO-8601"),og(),qx(2816," extendido "),Cl(2817,"strong"),qx(2818,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),qx(2819,`
e o tipo `),Cl(2820,"em"),qx(2821,"Date"),og(),qx(2822," padr\xE3o do Javascript, por exemplo: "),Cl(2823,"code"),qx(2824,"'2017-11-28T00:00:00-02:00'"),og(),qx(2825," ou "),Cl(2826,"code"),qx(2827,"new Date(2017, 10, 28)"),og(),qx(2828,"."),og()()(),Cl(2829,"li")(2830,"p")(2831,"code"),qx(2832,"detail"),og(),qx(2833,": array de objetos para o master-detail."),og(),Cl(2834,"ul")(2835,"li"),qx(2836,"Incompat\xEDvel com "),Cl(2837,"code"),qx(2838,"virtual-scroll"),og(),qx(2839,", que requer altura fixa nas linhas."),og()()(),Cl(2840,"li")(2841,"p")(2842,"code"),qx(2843,"icon"),og(),qx(2844,": "),Cl(2845,"em"),qx(2846,"array"),og(),qx(2847," de "),Cl(2848,"em"),qx(2849,"string"),og(),qx(2850," ou objetos para a coluna de \xEDcones."),og()(),Cl(2851,"li")(2852,"p")(2853,"code"),qx(2854,"label"),og(),qx(2855,": texto com destaque."),og()(),Cl(2856,"li")(2857,"p")(2858,"code"),qx(2859,"link"),og(),qx(2860,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),og()(),Cl(2861,"li")(2862,"p")(2863,"code"),qx(2864,"number"),og(),qx(2865,": valores num\xE9ricos."),og()(),Cl(2866,"li")(2867,"p")(2868,"code"),qx(2869,"string"),og(),qx(2870,": textos."),og()(),Cl(2871,"li")(2872,"p")(2873,"code"),qx(2874,"subtitle"),og(),qx(2875,": array de objetos para a coluna de legenda."),og()(),Cl(2876,"li")(2877,"p")(2878,"code"),qx(2879,"time"),og(),qx(2880,": valor de hor\xE1rio."),og(),Cl(2881,"ul")(2882,"li"),qx(2883,"Aceita o tipo "),Cl(2884,"em"),qx(2885,"string"),og(),qx(2886," nos formatos "),Cl(2887,"strong"),qx(2888,"'HH:mm:ss'"),og(),qx(2889," ou "),Cl(2890,"strong"),qx(2891,"'HH:mm:ss.ffffff'"),og(),qx(2892,", por exemplo: "),Cl(2893,"code"),qx(2894,"'23:12:45'"),og(),qx(2895,"."),og()()(),Cl(2896,"li")(2897,"p")(2898,"code"),qx(2899,"cellTemplate"),og(),qx(2900,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Cl(2901,"a",8),qx(2902,"PoTableCellTemplate"),og(),qx(2903,"."),og()(),Cl(2904,"li")(2905,"p")(2906,"code"),qx(2907,"columnTemplate"),og(),qx(2908,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Cl(2909,"a",7),qx(2910,"PoTableColumnTemplate"),og(),qx(2911,"."),og()()()()(),Cl(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),qx(2916," visible"),Hl(2917,"br"),og()()(),Cl(2918,"td",21)(2919,"code",22),qx(2920,"boolean"),og()(),Cl(2921,"td",24)(2922,"em")(2923,"strong"),qx(2924,"(opcional)"),og()(),Cl(2925,"p"),qx(2926,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Cl(2927,"strong"),qx(2928,"gerenciador de colunas"),og(),qx(2929,"."),og(),Cl(2930,"blockquote")(2931,"p"),qx(2932,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),Cl(2933,"code"),qx(2934,"p-max-columns"),og(),qx(2935,"."),og()()()(),Cl(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),qx(2940," width"),Hl(2941,"br"),og()()(),Cl(2942,"td",21)(2943,"code",31),qx(2944,"string"),og()(),Cl(2945,"td",24)(2946,"em")(2947,"strong"),qx(2948,"(opcional)"),og()(),Cl(2949,"p"),qx(2950,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),og(),Cl(2951,"ul")(2952,"li"),qx(2953,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),og(),Cl(2954,"li"),qx(2955,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),og()()()()(),Cl(2956,"h4",44)(2957,"code",5),qx(2958,"PoTableLiterals"),og()(),Cl(2959,"div",2)(2960,"p"),qx(2961,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(2962,"code"),qx(2963,"po-table"),og(),qx(2964,"."),og()(),Cl(2965,"h4",13),qx(2966,"Propriedades"),og(),Cl(2967,"table",14)(2968,"tr",15)(2969,"th",16),qx(2970,"Nome"),og(),Cl(2971,"th",16),qx(2972,"Tipo"),og(),Cl(2973,"th",16),qx(2974,"Descri\xE7\xE3o"),og()(),Cl(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),qx(2979," bodyDelete"),Hl(2980,"br"),og()()(),Cl(2981,"td",21)(2982,"code",31),qx(2983,"string"),og()(),Cl(2984,"td",24)(2985,"em")(2986,"strong"),qx(2987,"(opcional)"),og()(),Cl(2988,"p"),qx(2989,"Texto no corpo do Modal de exclus\xE3o"),og()()(),Cl(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),qx(2994," cancel"),Hl(2995,"br"),og()()(),Cl(2996,"td",21)(2997,"code",31),qx(2998,"string"),og()(),Cl(2999,"td",24)(3e3,"em")(3001,"strong"),qx(3002,"(opcional)"),og()(),Cl(3003,"p"),qx(3004,"Texto no Modal para cancelar a exclus\xE3o"),og()()(),Cl(3005,"tr",17)(3006,"td",18)(3007,"div",19)(3008,"span",20),qx(3009," columnsManager"),Hl(3010,"br"),og()()(),Cl(3011,"td",21)(3012,"code",31),qx(3013,"string"),og()(),Cl(3014,"td",24)(3015,"em")(3016,"strong"),qx(3017,"(opcional)"),og()(),Cl(3018,"p"),qx(3019,"Texto do "),Cl(3020,"strong"),qx(3021,"Gerenciador de colunas"),og(),qx(3022," localizado no canto superior direito da tabela."),og()()(),Cl(3023,"tr",17)(3024,"td",18)(3025,"div",19)(3026,"span",20),qx(3027," completeSubtitle"),Hl(3028,"br"),og()()(),Cl(3029,"td",21)(3030,"code",31),qx(3031,"string"),og()(),Cl(3032,"td",24)(3033,"em")(3034,"strong"),qx(3035,"(opcional)"),og()(),Cl(3036,"p"),qx(3037,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),og()()(),Cl(3038,"tr",17)(3039,"td",18)(3040,"div",19)(3041,"span",20),qx(3042," delete"),Hl(3043,"br"),og()()(),Cl(3044,"td",21)(3045,"code",31),qx(3046,"string"),og()(),Cl(3047,"td",24)(3048,"em")(3049,"strong"),qx(3050,"(opcional)"),og()(),Cl(3051,"p"),qx(3052,"Texto no Modal para confirmar a exclus\xE3o"),og()()(),Cl(3053,"tr",17)(3054,"td",18)(3055,"div",19)(3056,"span",20),qx(3057," deleteApiError"),Hl(3058,"br"),og()()(),Cl(3059,"td",21)(3060,"code",31),qx(3061,"string"),og()(),Cl(3062,"td",24)(3063,"em")(3064,"strong"),qx(3065,"(opcional)"),og()(),Cl(3066,"p"),qx(3067,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),og()()(),Cl(3068,"tr",17)(3069,"td",18)(3070,"div",19)(3071,"span",20),qx(3072," deleteSuccessful"),Hl(3073,"br"),og()()(),Cl(3074,"td",21)(3075,"code",31),qx(3076,"string"),og()(),Cl(3077,"td",24)(3078,"em")(3079,"strong"),qx(3080,"(opcional)"),og()(),Cl(3081,"p"),qx(3082,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),og()()(),Cl(3083,"tr",17)(3084,"td",18)(3085,"div",19)(3086,"span",20),qx(3087," loadMoreData"),Hl(3088,"br"),og()()(),Cl(3089,"td",21)(3090,"code",31),qx(3091,"string"),og()(),Cl(3092,"td",24)(3093,"em")(3094,"strong"),qx(3095,"(opcional)"),og()(),Cl(3096,"p"),qx(3097,"Texto do bot\xE3o de "),Cl(3098,"strong"),qx(3099,"Carregar mais resultados"),og(),qx(3100," localizado no rodap\xE9 da tabela."),og()()(),Cl(3101,"tr",17)(3102,"td",18)(3103,"div",19)(3104,"span",20),qx(3105," loadingData"),Hl(3106,"br"),og()()(),Cl(3107,"td",21)(3108,"code",31),qx(3109,"string"),og()(),Cl(3110,"td",24)(3111,"em")(3112,"strong"),qx(3113,"(opcional)"),og()(),Cl(3114,"p"),qx(3115,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),og()()(),Cl(3116,"tr",17)(3117,"td",18)(3118,"div",19)(3119,"span",20),qx(3120," multipleItems"),Hl(3121,"br"),og()()(),Cl(3122,"td",21)(3123,"code",31),qx(3124,"string"),og()(),Cl(3125,"td",24)(3126,"em")(3127,"strong"),qx(3128,"(opcional)"),og()(),Cl(3129,"p"),qx(3130,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Cl(3131,"tr",17)(3132,"td",18)(3133,"div",19)(3134,"span",20),qx(3135," noColumns"),Hl(3136,"br"),og()()(),Cl(3137,"td",21)(3138,"code",31),qx(3139,"string"),og()(),Cl(3140,"td",24)(3141,"em")(3142,"strong"),qx(3143,"(opcional)"),og()(),Cl(3144,"p"),qx(3145,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),og()()(),Cl(3146,"tr",17)(3147,"td",18)(3148,"div",19)(3149,"span",20),qx(3150," noData"),Hl(3151,"br"),og()()(),Cl(3152,"td",21)(3153,"code",31),qx(3154,"string"),og()(),Cl(3155,"td",24)(3156,"em")(3157,"strong"),qx(3158,"(opcional)"),og()(),Cl(3159,"p"),qx(3160,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),og()()(),Cl(3161,"tr",17)(3162,"td",18)(3163,"div",19)(3164,"span",20),qx(3165," noItem"),Hl(3166,"br"),og()()(),Cl(3167,"td",21)(3168,"code",31),qx(3169,"string"),og()(),Cl(3170,"td",24)(3171,"em")(3172,"strong"),qx(3173,"(opcional)"),og()(),Cl(3174,"p"),qx(3175,"Texto exibido quando nenhum item for selecionado no checkbox."),og()()(),Cl(3176,"tr",17)(3177,"td",18)(3178,"div",19)(3179,"span",20),qx(3180," noVisibleColumn"),Hl(3181,"br"),og()()(),Cl(3182,"td",21)(3183,"code",31),qx(3184,"string"),og()(),Cl(3185,"td",24)(3186,"em")(3187,"strong"),qx(3188,"(opcional)"),og()(),Cl(3189,"p"),qx(3190,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),og()()(),Cl(3191,"tr",17)(3192,"td",18)(3193,"div",19)(3194,"span",20),qx(3195," oneItem"),Hl(3196,"br"),og()()(),Cl(3197,"td",21)(3198,"code",31),qx(3199,"string"),og()(),Cl(3200,"td",24)(3201,"em")(3202,"strong"),qx(3203,"(opcional)"),og()(),Cl(3204,"p"),qx(3205,"Texto exibido quando apenas 1 item for selecionado no checkbox."),og()()(),Cl(3206,"tr",17)(3207,"td",18)(3208,"div",19)(3209,"span",20),qx(3210," seeCompleteSubtitle"),Hl(3211,"br"),og()()(),Cl(3212,"td",21)(3213,"code",31),qx(3214,"string"),og()(),Cl(3215,"td",24)(3216,"em")(3217,"strong"),qx(3218,"(opcional)"),og()(),Cl(3219,"p"),qx(3220,"Texto do bot\xE3o "),Cl(3221,"strong"),qx(3222,"Ver legenda completa"),og(),qx(3223," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),og()()()(),Cl(3224,"h4",44)(3225,"code",5),qx(3226,"PoTableColumnIcon"),og()(),Cl(3227,"div",2)(3228,"p"),Hl(3229,"a",104),og(),Cl(3230,"p"),qx(3231,"Interface que define a coluna com \xEDcone(s) do "),Cl(3232,"code"),qx(3233,"po-table"),og(),qx(3234,"."),og()(),Cl(3235,"h4",13),qx(3236,"Propriedades"),og(),Cl(3237,"table",14)(3238,"tr",15)(3239,"th",16),qx(3240,"Nome"),og(),Cl(3241,"th",16),qx(3242,"Tipo"),og(),Cl(3243,"th",16),qx(3244,"Descri\xE7\xE3o"),og()(),Cl(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),qx(3249," action"),Hl(3250,"br"),og()()(),Cl(3251,"td",21)(3252,"code",45),qx(3253,"Function"),og()(),Cl(3254,"td",24)(3255,"em")(3256,"strong"),qx(3257,"(opcional)"),og()(),Cl(3258,"p"),qx(3259,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),og()()(),Cl(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),qx(3264," color"),Hl(3265,"br"),og()()(),Cl(3266,"td",21)(3267,"code",31),qx(3268,"string "),og(),Cl(3269,"code",45),qx(3270," Function"),og()(),Cl(3271,"td",24)(3272,"em")(3273,"strong"),qx(3274,"(opcional)"),og()(),Cl(3275,"p"),qx(3276,"Define a cor do \xEDcone."),og(),Cl(3277,"p"),qx(3278,"Valores v\xE1lidos:"),og(),Cl(3279,"ul")(3280,"li"),Hl(3281,"span",51),Cl(3282,"code"),qx(3283,"color-01"),og()(),Cl(3284,"li"),Hl(3285,"span",52),Cl(3286,"code"),qx(3287,"color-02"),og()(),Cl(3288,"li"),Hl(3289,"span",53),Cl(3290,"code"),qx(3291,"color-03"),og()(),Cl(3292,"li"),Hl(3293,"span",54),Cl(3294,"code"),qx(3295,"color-04"),og()(),Cl(3296,"li"),Hl(3297,"span",55),Cl(3298,"code"),qx(3299,"color-05"),og()(),Cl(3300,"li"),Hl(3301,"span",56),Cl(3302,"code"),qx(3303,"color-06"),og()(),Cl(3304,"li"),Hl(3305,"span",57),Cl(3306,"code"),qx(3307,"color-07"),og()(),Cl(3308,"li"),Hl(3309,"span",58),Cl(3310,"code"),qx(3311,"color-08"),og()(),Cl(3312,"li"),Hl(3313,"span",59),Cl(3314,"code"),qx(3315,"color-09"),og()(),Cl(3316,"li"),Hl(3317,"span",60),Cl(3318,"code"),qx(3319,"color-10"),og()(),Cl(3320,"li"),Hl(3321,"span",61),Cl(3322,"code"),qx(3323,"color-11"),og()(),Cl(3324,"li"),Hl(3325,"span",62),Cl(3326,"code"),qx(3327,"color-12"),og()()(),Cl(3328,"blockquote")(3329,"p"),qx(3330,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Cl(3331,"strong"),qx(3332,"Caption Tag Colors"),og(),qx(3333,":"),og()(),Cl(3334,"ul")(3335,"li"),Hl(3336,"span",63),Cl(3337,"code"),qx(3338,"caption-tag-01"),og(),Hl(3339,"span",64),Cl(3340,"code"),qx(3341,"caption-tag-02"),og(),Hl(3342,"span",65),Cl(3343,"code"),qx(3344,"caption-tag-03"),og(),Hl(3345,"span",66),Cl(3346,"code"),qx(3347,"caption-tag-04"),og(),Hl(3348,"span",67),Cl(3349,"code"),qx(3350,"caption-tag-05"),og()(),Cl(3351,"li"),Hl(3352,"span",68),Cl(3353,"code"),qx(3354,"caption-tag-06"),og(),Hl(3355,"span",69),Cl(3356,"code"),qx(3357,"caption-tag-07"),og(),Hl(3358,"span",70),Cl(3359,"code"),qx(3360,"caption-tag-08"),og(),Hl(3361,"span",71),Cl(3362,"code"),qx(3363,"caption-tag-09"),og(),Hl(3364,"span",72),Cl(3365,"code"),qx(3366,"caption-tag-10"),og()(),Cl(3367,"li"),Hl(3368,"span",73),Cl(3369,"code"),qx(3370,"caption-tag-11"),og(),Hl(3371,"span",74),Cl(3372,"code"),qx(3373,"caption-tag-12"),og(),Hl(3374,"span",75),Cl(3375,"code"),qx(3376,"caption-tag-13"),og(),Hl(3377,"span",76),Cl(3378,"code"),qx(3379,"caption-tag-14"),og(),Hl(3380,"span",77),Cl(3381,"code"),qx(3382,"caption-tag-15"),og()(),Cl(3383,"li"),Hl(3384,"span",78),Cl(3385,"code"),qx(3386,"caption-tag-16"),og(),Hl(3387,"span",79),Cl(3388,"code"),qx(3389,"caption-tag-17"),og(),Hl(3390,"span",80),Cl(3391,"code"),qx(3392,"caption-tag-18"),og(),Hl(3393,"span",81),Cl(3394,"code"),qx(3395,"caption-tag-19"),og(),Hl(3396,"span",82),Cl(3397,"code"),qx(3398,"caption-tag-20"),og()(),Cl(3399,"li"),Hl(3400,"span",83),Cl(3401,"code"),qx(3402,"caption-tag-21"),og(),Hl(3403,"span",84),Cl(3404,"code"),qx(3405,"caption-tag-22"),og(),Hl(3406,"span",85),Cl(3407,"code"),qx(3408,"caption-tag-23"),og(),Hl(3409,"span",86),Cl(3410,"code"),qx(3411,"caption-tag-24"),og(),Hl(3412,"span",87),Cl(3413,"code"),qx(3414,"caption-tag-25"),og()(),Cl(3415,"li"),Hl(3416,"span",88),Cl(3417,"code"),qx(3418,"caption-tag-26"),og(),Hl(3419,"span",89),Cl(3420,"code"),qx(3421,"caption-tag-27"),og(),Hl(3422,"span",90),Cl(3423,"code"),qx(3424,"caption-tag-28"),og(),Hl(3425,"span",91),Cl(3426,"code"),qx(3427,"caption-tag-29"),og(),Hl(3428,"span",92),Cl(3429,"code"),qx(3430,"caption-tag-30"),og()(),Cl(3431,"li"),Hl(3432,"span",93),Cl(3433,"code"),qx(3434,"caption-tag-31"),og(),Hl(3435,"span",94),Cl(3436,"code"),qx(3437,"caption-tag-32"),og(),Hl(3438,"span",95),Cl(3439,"code"),qx(3440,"caption-tag-33"),og(),Hl(3441,"span",96),Cl(3442,"code"),qx(3443,"caption-tag-34"),og(),Hl(3444,"span",97),Cl(3445,"code"),qx(3446,"caption-tag-35"),og()()()()(),Cl(3447,"tr",17)(3448,"td",18)(3449,"div",19)(3450,"span",20),qx(3451," disabled"),Hl(3452,"br"),og()()(),Cl(3453,"td",21)(3454,"code",45),qx(3455,"Function"),og()(),Cl(3456,"td",24)(3457,"em")(3458,"strong"),qx(3459,"(opcional)"),og()(),Cl(3460,"p"),qx(3461,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),og()()(),Cl(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),qx(3466," icon"),Hl(3467,"br"),og()()(),Cl(3468,"td",21)(3469,"code",31),qx(3470,"string "),og(),Cl(3471,"code",46),qx(3472," TemplateRef<void>"),og()(),Cl(3473,"td",24)(3474,"em")(3475,"strong"),qx(3476,"(opcional)"),og()(),Cl(3477,"p"),qx(3478,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(3479,"a",26),qx(3480,"Biblioteca de \xEDcones"),og(),qx(3481,". conforme exemplo abaixo:"),og(),Cl(3482,"pre")(3483,"code"),qx(3484,`[ { icon: 'an an-plus' } ]
`),og()(),Cl(3485,"p"),qx(3486,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),og(),Cl(3487,"pre")(3488,"code"),qx(3489,`[ {  icon: 'fas fa-plus' } ]
`),og()(),Cl(3490,"p"),qx(3491,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(3492,"code"),qx(3493,"TemplateRef"),og(),qx(3494,`, conforme exemplo abaixo:
`),Cl(3495,"code"),qx(3496,"component.html"),og(),qx(3497,":"),og(),Cl(3498,"pre")(3499,"code"),qx(3500,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),og()(),Cl(3501,"p")(3502,"code"),qx(3503,"component.ts"),og(),qx(3504,":"),og(),Cl(3505,"pre")(3506,"code"),qx(3507,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),og()(),Cl(3508,"blockquote")(3509,"p"),qx(3510,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),Cl(3511,"code"),qx(3512,"value"),og(),qx(3513,"."),og()()()(),Cl(3514,"tr",17)(3515,"td",18)(3516,"div",19)(3517,"span",20),qx(3518," tooltip"),Hl(3519,"br"),og()()(),Cl(3520,"td",21)(3521,"code",31),qx(3522,"string"),og()(),Cl(3523,"td",24)(3524,"em")(3525,"strong"),qx(3526,"(opcional)"),og()(),Cl(3527,"p"),qx(3528,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Cl(3529,"em"),qx(3530,"mouse"),og(),qx(3531," em cima do \xEDcone."),og()()(),Cl(3532,"tr",17)(3533,"td",18)(3534,"div",19)(3535,"span",20),qx(3536," value"),Hl(3537,"br"),og()()(),Cl(3538,"td",21)(3539,"code",31),qx(3540,"string"),og()(),Cl(3541,"td",24)(3542,"p"),qx(3543,"Define o valor do \xEDcone que ser\xE1 exibido."),og()()()(),Cl(3544,"h4",44)(3545,"code",5),qx(3546,"PoTableColumnLabel"),og()(),Cl(3547,"div",2)(3548,"p"),qx(3549,"Interface para configura\xE7\xE3o das colunas de labels do "),Cl(3550,"code"),qx(3551,"po-table"),og(),qx(3552,"."),og()(),Cl(3553,"h4",13),qx(3554,"Propriedades"),og(),Cl(3555,"table",14)(3556,"tr",15)(3557,"th",16),qx(3558,"Nome"),og(),Cl(3559,"th",16),qx(3560,"Tipo"),og(),Cl(3561,"th",16),qx(3562,"Descri\xE7\xE3o"),og()(),Cl(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),qx(3567," color"),Hl(3568,"br"),og()()(),Cl(3569,"td",21)(3570,"code",31),qx(3571,"string"),og()(),Cl(3572,"td",24)(3573,"em")(3574,"strong"),qx(3575,"(opcional)"),og()(),Cl(3576,"p"),qx(3577,"Define a cor do label."),og(),Cl(3578,"p"),qx(3579,"Valores v\xE1lidos:"),og(),Cl(3580,"ul")(3581,"li"),Hl(3582,"span",51),Cl(3583,"code"),qx(3584,"color-01"),og()(),Cl(3585,"li"),Hl(3586,"span",52),Cl(3587,"code"),qx(3588,"color-02"),og()(),Cl(3589,"li"),Hl(3590,"span",53),Cl(3591,"code"),qx(3592,"color-03"),og()(),Cl(3593,"li"),Hl(3594,"span",54),Cl(3595,"code"),qx(3596,"color-04"),og()(),Cl(3597,"li"),Hl(3598,"span",55),Cl(3599,"code"),qx(3600,"color-05"),og()(),Cl(3601,"li"),Hl(3602,"span",56),Cl(3603,"code"),qx(3604,"color-06"),og()(),Cl(3605,"li"),Hl(3606,"span",57),Cl(3607,"code"),qx(3608,"color-07"),og()(),Cl(3609,"li"),Hl(3610,"span",58),Cl(3611,"code"),qx(3612,"color-08"),og()(),Cl(3613,"li"),Hl(3614,"span",59),Cl(3615,"code"),qx(3616,"color-09"),og()(),Cl(3617,"li"),Hl(3618,"span",60),Cl(3619,"code"),qx(3620,"color-10"),og()(),Cl(3621,"li"),Hl(3622,"span",61),Cl(3623,"code"),qx(3624,"color-11"),og()(),Cl(3625,"li"),Hl(3626,"span",62),Cl(3627,"code"),qx(3628,"color-12"),og()()(),Cl(3629,"blockquote")(3630,"p"),qx(3631,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Cl(3632,"strong"),qx(3633,"Caption Tag Colors"),og(),qx(3634,":"),og()(),Cl(3635,"ul")(3636,"li"),Hl(3637,"span",63),Cl(3638,"code"),qx(3639,"caption-tag-01"),og(),Hl(3640,"span",64),Cl(3641,"code"),qx(3642,"caption-tag-02"),og(),Hl(3643,"span",65),Cl(3644,"code"),qx(3645,"caption-tag-03"),og(),Hl(3646,"span",66),Cl(3647,"code"),qx(3648,"caption-tag-04"),og(),Hl(3649,"span",67),Cl(3650,"code"),qx(3651,"caption-tag-05"),og()(),Cl(3652,"li"),Hl(3653,"span",68),Cl(3654,"code"),qx(3655,"caption-tag-06"),og(),Hl(3656,"span",69),Cl(3657,"code"),qx(3658,"caption-tag-07"),og(),Hl(3659,"span",70),Cl(3660,"code"),qx(3661,"caption-tag-08"),og(),Hl(3662,"span",71),Cl(3663,"code"),qx(3664,"caption-tag-09"),og(),Hl(3665,"span",72),Cl(3666,"code"),qx(3667,"caption-tag-10"),og()(),Cl(3668,"li"),Hl(3669,"span",73),Cl(3670,"code"),qx(3671,"caption-tag-11"),og(),Hl(3672,"span",74),Cl(3673,"code"),qx(3674,"caption-tag-12"),og(),Hl(3675,"span",75),Cl(3676,"code"),qx(3677,"caption-tag-13"),og(),Hl(3678,"span",76),Cl(3679,"code"),qx(3680,"caption-tag-14"),og(),Hl(3681,"span",77),Cl(3682,"code"),qx(3683,"caption-tag-15"),og()(),Cl(3684,"li"),Hl(3685,"span",78),Cl(3686,"code"),qx(3687,"caption-tag-16"),og(),Hl(3688,"span",79),Cl(3689,"code"),qx(3690,"caption-tag-17"),og(),Hl(3691,"span",80),Cl(3692,"code"),qx(3693,"caption-tag-18"),og(),Hl(3694,"span",81),Cl(3695,"code"),qx(3696,"caption-tag-19"),og(),Hl(3697,"span",82),Cl(3698,"code"),qx(3699,"caption-tag-20"),og()(),Cl(3700,"li"),Hl(3701,"span",83),Cl(3702,"code"),qx(3703,"caption-tag-21"),og(),Hl(3704,"span",84),Cl(3705,"code"),qx(3706,"caption-tag-22"),og(),Hl(3707,"span",85),Cl(3708,"code"),qx(3709,"caption-tag-23"),og(),Hl(3710,"span",86),Cl(3711,"code"),qx(3712,"caption-tag-24"),og(),Hl(3713,"span",87),Cl(3714,"code"),qx(3715,"caption-tag-25"),og()(),Cl(3716,"li"),Hl(3717,"span",88),Cl(3718,"code"),qx(3719,"caption-tag-26"),og(),Hl(3720,"span",89),Cl(3721,"code"),qx(3722,"caption-tag-27"),og(),Hl(3723,"span",90),Cl(3724,"code"),qx(3725,"caption-tag-28"),og(),Hl(3726,"span",91),Cl(3727,"code"),qx(3728,"caption-tag-29"),og(),Hl(3729,"span",92),Cl(3730,"code"),qx(3731,"caption-tag-30"),og()(),Cl(3732,"li"),Hl(3733,"span",93),Cl(3734,"code"),qx(3735,"caption-tag-31"),og(),Hl(3736,"span",94),Cl(3737,"code"),qx(3738,"caption-tag-32"),og(),Hl(3739,"span",95),Cl(3740,"code"),qx(3741,"caption-tag-33"),og(),Hl(3742,"span",96),Cl(3743,"code"),qx(3744,"caption-tag-34"),og(),Hl(3745,"span",97),Cl(3746,"code"),qx(3747,"caption-tag-35"),og()()(),Cl(3748,"p"),qx(3749,"Exemplo de uso:"),og(),Cl(3750,"pre")(3751,"code"),qx(3752,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),og()()()(),Cl(3753,"tr",17)(3754,"td",18)(3755,"div",19)(3756,"span",20),qx(3757," icon"),Hl(3758,"br"),og()()(),Cl(3759,"td",21)(3760,"code",22),qx(3761,"boolean "),og(),Cl(3762,"code",31),qx(3763," string "),og(),Cl(3764,"code",46),qx(3765," TemplateRef<void>"),og()(),Cl(3766,"td",24)(3767,"em")(3768,"strong"),qx(3769,"(opcional)"),og()(),Cl(3770,"p"),qx(3771,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),Cl(3772,"em"),qx(3773,"tag"),og(),qx(3774,"."),og(),Cl(3775,"p"),qx(3776,"Quando "),Cl(3777,"code"),qx(3778,"p-type"),og(),qx(3779," estiver definida, basta informar um valor igual a "),Cl(3780,"code"),qx(3781,"true"),og(),qx(3782," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),og(),Cl(3783,"ul")(3784,"li"),Hl(3785,"span",105),qx(3786," - "),Cl(3787,"code"),qx(3788,"success"),og()(),Cl(3789,"li"),Hl(3790,"span",106),qx(3791," - "),Cl(3792,"code"),qx(3793,"warning"),og()(),Cl(3794,"li"),Hl(3795,"span",107),qx(3796," - "),Cl(3797,"code"),qx(3798,"danger"),og()(),Cl(3799,"li"),Hl(3800,"span",108),qx(3801," - "),Cl(3802,"code"),qx(3803,"info"),og()()(),Cl(3804,"p"),qx(3805,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(3806,"a",26),qx(3807,"Biblioteca de \xEDcones"),og(),qx(3808,". conforme exemplo abaixo:"),og(),Cl(3809,"pre")(3810,"code"),qx(3811,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),og()(),Cl(3812,"p"),qx(3813,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(3814,"em"),qx(3815,"Font Awesome"),og(),qx(3816,", da seguinte forma:"),og(),Cl(3817,"pre")(3818,"code"),qx(3819,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),og()(),Cl(3820,"p"),qx(3821,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(3822,"code"),qx(3823,"TemplateRef"),og(),qx(3824,", conforme exemplo abaixo:"),og(),Cl(3825,"pre")(3826,"code"),qx(3827,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(3828,"blockquote")(3829,"p"),qx(3830,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(3831,"code"),qx(3832,"font-size: inherit"),og(),qx(3833," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(3834,"tr",17)(3835,"td",18)(3836,"div",19)(3837,"span",20),qx(3838," label"),Hl(3839,"br"),og()()(),Cl(3840,"td",21)(3841,"code",31),qx(3842,"string"),og()(),Cl(3843,"td",24)(3844,"p"),qx(3845,"Texto que ser\xE1 exibido na coluna."),og()()(),Cl(3846,"tr",17)(3847,"td",18)(3848,"div",19)(3849,"span",20),qx(3850," textColor"),Hl(3851,"br"),og()()(),Cl(3852,"td",21)(3853,"code",31),qx(3854,"string"),og()(),Cl(3855,"td",24)(3856,"em")(3857,"strong"),qx(3858,"(opcional)"),og()(),Cl(3859,"p"),qx(3860,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Cl(3861,"ul")(3862,"li")(3863,"p"),qx(3864,"Hexadeximal, por exemplo "),Cl(3865,"code"),qx(3866,"#c64840"),og(),qx(3867,";"),og()(),Cl(3868,"li")(3869,"p"),qx(3870,"RGB, como "),Cl(3871,"code"),qx(3872,"rgb(0, 0, 165)"),og(),qx(3873,";"),og()(),Cl(3874,"li")(3875,"p"),qx(3876,"O nome da cor, por exemplo "),Cl(3877,"code"),qx(3878,"blue"),og(),qx(3879,";"),og()(),Cl(3880,"li")(3881,"p"),qx(3882,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),og(),Cl(3883,"ul")(3884,"li"),Hl(3885,"span",51),Cl(3886,"code"),qx(3887,"color-01"),og()(),Cl(3888,"li"),Hl(3889,"span",52),Cl(3890,"code"),qx(3891,"color-02"),og()(),Cl(3892,"li"),Hl(3893,"span",53),Cl(3894,"code"),qx(3895,"color-03"),og()(),Cl(3896,"li"),Hl(3897,"span",54),Cl(3898,"code"),qx(3899,"color-04"),og()(),Cl(3900,"li"),Hl(3901,"span",55),Cl(3902,"code"),qx(3903,"color-05"),og()(),Cl(3904,"li"),Hl(3905,"span",56),Cl(3906,"code"),qx(3907,"color-06"),og()(),Cl(3908,"li"),Hl(3909,"span",57),Cl(3910,"code"),qx(3911,"color-07"),og()(),Cl(3912,"li"),Hl(3913,"span",58),Cl(3914,"code"),qx(3915,"color-08"),og()(),Cl(3916,"li"),Hl(3917,"span",59),Cl(3918,"code"),qx(3919,"color-09"),og()(),Cl(3920,"li"),Hl(3921,"span",60),Cl(3922,"code"),qx(3923,"color-10"),og()(),Cl(3924,"li"),Hl(3925,"span",61),Cl(3926,"code"),qx(3927,"color-11"),og()(),Cl(3928,"li"),Hl(3929,"span",62),Cl(3930,"code"),qx(3931,"color-12"),og()()()(),Cl(3932,"li")(3933,"p"),qx(3934,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),og()()(),Cl(3935,"blockquote")(3936,"p")(3937,"strong"),qx(3938,"Aten\xE7\xE3o:"),og(),qx(3939," A propriedade "),Cl(3940,"code"),qx(3941,"p-type"),og(),qx(3942," sobrep\xF5e esta defini\xE7\xE3o."),og()(),Cl(3943,"blockquote")(3944,"p")(3945,"strong"),qx(3946,"Aten\xE7\xE3o:"),og(),qx(3947," As cores da paleta "),Cl(3948,"strong"),qx(3949,"Caption Tag Colors"),og(),qx(3950," ("),Cl(3951,"code"),qx(3952,"caption-tag-01"),og(),qx(3953," a "),Cl(3954,"code"),qx(3955,"caption-tag-35"),og(),qx(3956,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),og()()()(),Cl(3957,"tr",17)(3958,"td",18)(3959,"div",19)(3960,"span",20),qx(3961," tooltip"),Hl(3962,"br"),og()()(),Cl(3963,"td",21)(3964,"code",31),qx(3965,"string"),og()(),Cl(3966,"td",24)(3967,"em")(3968,"strong"),qx(3969,"(opcional)"),og()(),Cl(3970,"p"),qx(3971,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),Cl(3972,"em"),qx(3973,"mouse"),og(),qx(3974," em cima do "),Cl(3975,"em"),qx(3976,"label"),og(),qx(3977,"."),og(),Cl(3978,"blockquote")(3979,"p"),qx(3980,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),og()()()(),Cl(3981,"tr",17)(3982,"td",18)(3983,"div",19)(3984,"span",20),qx(3985," type"),Hl(3986,"br"),og()()(),Cl(3987,"td",21)(3988,"code",109),qx(3989,"PoTagType"),og()(),Cl(3990,"td",24)(3991,"em")(3992,"strong"),qx(3993,"(opcional)"),og()(),Cl(3994,"p"),qx(3995,"Define o tipo da "),Cl(3996,"em"),qx(3997,"tag"),og(),qx(3998,"."),og(),Cl(3999,"p"),qx(4e3,"Valores v\xE1lidos:"),og(),Cl(4001,"ul")(4002,"li")(4003,"code"),qx(4004,"success"),og(),qx(4005,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),og(),Cl(4006,"li")(4007,"code"),qx(4008,"warning"),og(),qx(4009,": cor amarela que representa aviso ou advert\xEAncia."),og(),Cl(4010,"li")(4011,"code"),qx(4012,"danger"),og(),qx(4013,": cor vermelha para erro ou aviso cr\xEDtico."),og(),Cl(4014,"li")(4015,"code"),qx(4016,"info"),og(),qx(4017,": cor cinza escuro que caracteriza conte\xFAdo informativo."),og()(),Cl(4018,"blockquote")(4019,"p"),qx(4020,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),Cl(4021,"code"),qx(4022,"p-color"),og(),qx(4023," e "),Cl(4024,"code"),qx(4025,"p-icon"),og(),qx(4026," somente ser\xE1 exibido caso seja "),Cl(4027,"code"),qx(4028,"true"),og(),qx(4029,"."),og()()()(),Cl(4030,"tr",17)(4031,"td",18)(4032,"div",19)(4033,"span",20),qx(4034," value"),Hl(4035,"br"),og()()(),Cl(4036,"td",21)(4037,"code",31),qx(4038,"string "),og(),Cl(4039,"code",35),qx(4040," number"),og()(),Cl(4041,"td",24)(4042,"p"),qx(4043,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Cl(4044,"h4",44)(4045,"code",5),qx(4046,"PoTableDetailColumn"),og()(),Cl(4047,"div",2)(4048,"p"),qx(4049,"Interface para configura\xE7\xE3o das colunas do "),Cl(4050,"code"),qx(4051,"po-table-detail"),og(),qx(4052,"."),og()(),Cl(4053,"h4",13),qx(4054,"Propriedades"),og(),Cl(4055,"table",14)(4056,"tr",15)(4057,"th",16),qx(4058,"Nome"),og(),Cl(4059,"th",16),qx(4060,"Tipo"),og(),Cl(4061,"th",16),qx(4062,"Descri\xE7\xE3o"),og()(),Cl(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),qx(4067," format"),Hl(4068,"br"),og()()(),Cl(4069,"td",21)(4070,"code",31),qx(4071,"string"),og()(),Cl(4072,"td",24)(4073,"em")(4074,"strong"),qx(4075,"(opcional)"),og()(),Cl(4076,"p"),qx(4077,"Formato de exibi\xE7\xE3o do valor da coluna:"),og(),Cl(4078,"ul")(4079,"li")(4080,"p"),qx(4081,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),og()(),Cl(4082,"li")(4083,"p"),qx(4084,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og()(),Cl(4085,"li")(4086,"p"),qx(4087,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),og()(),Cl(4088,"li")(4089,"p"),qx(4090,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),Cl(4091,"a",110)(4092,"strong"),qx(4093,"DecimalPipe"),og()(),qx(4094," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),og(),Cl(4095,"ul")(4096,"li"),qx(4097,"Valor de entrada: "),Cl(4098,"code"),qx(4099,"50"),og(),qx(4100," e valor para formata\xE7\xE3o: "),Cl(4101,"code"),qx(4102,"'1.2-5'"),og(),qx(4103," o resultado ser\xE1: "),Cl(4104,"code"),qx(4105,"50.00"),og()()()()()()(),Cl(4106,"tr",17)(4107,"td",18)(4108,"div",19)(4109,"span",20),qx(4110," label"),Hl(4111,"br"),og()()(),Cl(4112,"td",21)(4113,"code",31),qx(4114,"string"),og()(),Cl(4115,"td",24)(4116,"em")(4117,"strong"),qx(4118,"(opcional)"),og()(),Cl(4119,"p"),qx(4120,"Texto para t\xEDtulo da coluna."),og()()(),Cl(4121,"tr",17)(4122,"td",18)(4123,"div",19)(4124,"span",20),qx(4125," property"),Hl(4126,"br"),og()()(),Cl(4127,"td",21)(4128,"code",31),qx(4129,"string"),og()(),Cl(4130,"td",24)(4131,"em")(4132,"strong"),qx(4133,"(opcional)"),og()(),Cl(4134,"p"),qx(4135,"Nome identificador da coluna."),og()()(),Cl(4136,"tr",17)(4137,"td",18)(4138,"div",19)(4139,"span",20),qx(4140," type"),Hl(4141,"br"),og()()(),Cl(4142,"td",21)(4143,"code",31),qx(4144,"string"),og()(),Cl(4145,"td",24)(4146,"em")(4147,"strong"),qx(4148,"(opcional)"),og()(),Cl(4149,"p"),qx(4150,"Tipo da coluna."),og(),Cl(4151,"p"),qx(4152,"Valores v\xE1lidos:"),og(),Cl(4153,"ul")(4154,"li")(4155,"p")(4156,"code"),qx(4157,"currency"),og(),qx(4158,": valores monet\xE1rios."),og()(),Cl(4159,"li")(4160,"p")(4161,"code"),qx(4162,"date"),og(),qx(4163,": valor de datas."),og(),Cl(4164,"ul")(4165,"li"),qx(4166,"Aceita os tipos "),Cl(4167,"em"),qx(4168,"string"),og(),qx(4169," e "),Cl(4170,"em"),qx(4171,"Date"),og(),qx(4172,` padr\xE3o do Javascript,
por exemplo: `),Cl(4173,"code"),qx(4174,"'2017-11-28'"),og(),qx(4175," ou "),Cl(4176,"code"),qx(4177,"new Date(2017, 10, 28)"),og(),qx(4178,"."),og()()(),Cl(4179,"li")(4180,"p")(4181,"code"),qx(4182,"time"),og(),qx(4183,": valor de hor\xE1rio."),og()(),Cl(4184,"li")(4185,"p")(4186,"code"),qx(4187,"number"),og(),qx(4188,": valores num\xE9ricos."),og()(),Cl(4189,"li")(4190,"p")(4191,"code"),qx(4192,"dateTime"),og(),qx(4193,": valor de data com hor\xE1rio."),og(),Cl(4194,"ul")(4195,"li"),qx(4196,"Aceita o tipo "),Cl(4197,"em"),qx(4198,"string"),og(),qx(4199," no formato "),Cl(4200,"strong"),qx(4201,"ISO-8601"),og(),qx(4202," extendido "),Cl(4203,"strong"),qx(4204,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),qx(4205,`
e o tipo `),Cl(4206,"em"),qx(4207,"Date"),og(),qx(4208," padr\xE3o do Javascript, por exemplo: "),Cl(4209,"code"),qx(4210,"'2017-11-28T00:00:00-02:00'"),og(),qx(4211," ou "),Cl(4212,"code"),qx(4213,"new Date(2017, 10, 28)"),og(),qx(4214,"."),og(),Cl(4215,"li"),qx(4216,"Aceita o tipo "),Cl(4217,"em"),qx(4218,"string"),og(),qx(4219," nos formatos "),Cl(4220,"strong"),qx(4221,"'HH:mm:ss'"),og(),qx(4222," ou "),Cl(4223,"strong"),qx(4224,"'HH:mm:ss.ffffff'"),og(),qx(4225,", por exemplo: "),Cl(4226,"code"),qx(4227,"'23:12:45'"),og(),qx(4228,"."),og()()()()()()(),Cl(4229,"h4",44)(4230,"code",5),qx(4231,"PoTableDetail"),og()(),Cl(4232,"div",2)(4233,"p"),qx(4234,"Interface para configura\xE7\xE3o do "),Cl(4235,"em"),qx(4236,"detail"),og(),qx(4237," do componente "),Cl(4238,"code"),qx(4239,"po-table"),og(),qx(4240,"."),og()(),Cl(4241,"h4",13),qx(4242,"Propriedades"),og(),Cl(4243,"table",14)(4244,"tr",15)(4245,"th",16),qx(4246,"Nome"),og(),Cl(4247,"th",16),qx(4248,"Tipo"),og(),Cl(4249,"th",16),qx(4250,"Descri\xE7\xE3o"),og()(),Cl(4251,"tr",17)(4252,"td",18)(4253,"div",19)(4254,"span",20),qx(4255," columns"),Hl(4256,"br"),og()()(),Cl(4257,"td",21)(4258,"code",111),qx(4259,"Array<PoTableDetailColumn>"),og()(),Cl(4260,"td",24)(4261,"p"),qx(4262,"Define uma lista do tipo "),Cl(4263,"code"),qx(4264,"PoTableDetailColumn"),og(),qx(4265," para as colunas do objet "),Cl(4266,"em"),qx(4267,"detail"),og(),qx(4268,". Por exemplo:"),og(),Cl(4269,"pre")(4270,"code"),qx(4271,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),og()()()(),Cl(4272,"tr",17)(4273,"td",18)(4274,"div",19)(4275,"span",20),qx(4276," hideSelect"),Hl(4277,"br"),og()()(),Cl(4278,"td",21)(4279,"code",22),qx(4280,"boolean"),og()(),Cl(4281,"td",24)(4282,"em")(4283,"strong"),qx(4284,"(opcional)"),og()(),Cl(4285,"p"),qx(4286,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),og()()(),Cl(4287,"tr",17)(4288,"td",18)(4289,"div",19)(4290,"span",20),qx(4291," typeHeader"),Hl(4292,"br"),og()()(),Cl(4293,"td",21)(4294,"code",31),qx(4295,"string"),og()(),Cl(4296,"td",24)(4297,"em")(4298,"strong"),qx(4299,"(opcional)"),og()(),Cl(4300,"p"),qx(4301,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),Cl(4302,"em"),qx(4303,"detail"),og(),qx(4304," ."),og(),Cl(4305,"p"),qx(4306,"Valores v\xE1lidos:"),og(),Cl(4307,"ul")(4308,"li")(4309,"code"),qx(4310,"inline"),og(),qx(4311,": Atribui o cabe\xE7alho na mesma linha do "),Cl(4312,"em"),qx(4313,"detail"),og(),qx(4314,"."),og(),Cl(4315,"li")(4316,"code"),qx(4317,"top"),og(),qx(4318,": Atribui o cabe\xE7alho acima do "),Cl(4319,"em"),qx(4320,"detail"),og(),qx(4321,", id\xEAntico ao "),Cl(4322,"code"),qx(4323,"po-table"),og(),qx(4324,"."),og(),Cl(4325,"li")(4326,"code"),qx(4327,"none"),og(),qx(4328,": Remove o cabe\xE7alho do "),Cl(4329,"em"),qx(4330,"detail"),og(),qx(4331,"."),og()()()()(),Cl(4332,"h4",44)(4333,"code",5),qx(4334,"PoTableSubtitleColumn"),og()(),Cl(4335,"div",2)(4336,"p"),qx(4337,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),og()(),Cl(4338,"h4",13),qx(4339,"Propriedades"),og(),Cl(4340,"table",14)(4341,"tr",15)(4342,"th",16),qx(4343,"Nome"),og(),Cl(4344,"th",16),qx(4345,"Tipo"),og(),Cl(4346,"th",16),qx(4347,"Descri\xE7\xE3o"),og()(),Cl(4348,"tr",17)(4349,"td",18)(4350,"div",19)(4351,"span",20),qx(4352," color"),Hl(4353,"br"),og()()(),Cl(4354,"td",21)(4355,"code",31),qx(4356,"string"),og()(),Cl(4357,"td",24)(4358,"em")(4359,"strong"),qx(4360,"(opcional)"),og()(),Cl(4361,"p"),qx(4362,"Define a cor do "),Cl(4363,"em"),qx(4364,"status"),og(),qx(4365,"."),og(),Cl(4366,"p"),qx(4367,"Valores v\xE1lidos:"),og(),Cl(4368,"ul")(4369,"li"),Hl(4370,"span",51),Cl(4371,"code"),qx(4372,"color-01"),og()(),Cl(4373,"li"),Hl(4374,"span",52),Cl(4375,"code"),qx(4376,"color-02"),og()(),Cl(4377,"li"),Hl(4378,"span",53),Cl(4379,"code"),qx(4380,"color-03"),og()(),Cl(4381,"li"),Hl(4382,"span",54),Cl(4383,"code"),qx(4384,"color-04"),og()(),Cl(4385,"li"),Hl(4386,"span",55),Cl(4387,"code"),qx(4388,"color-05"),og()(),Cl(4389,"li"),Hl(4390,"span",56),Cl(4391,"code"),qx(4392,"color-06"),og()(),Cl(4393,"li"),Hl(4394,"span",57),Cl(4395,"code"),qx(4396,"color-07"),og()(),Cl(4397,"li"),Hl(4398,"span",58),Cl(4399,"code"),qx(4400,"color-08"),og()(),Cl(4401,"li"),Hl(4402,"span",59),Cl(4403,"code"),qx(4404,"color-09"),og()(),Cl(4405,"li"),Hl(4406,"span",60),Cl(4407,"code"),qx(4408,"color-10"),og()(),Cl(4409,"li"),Hl(4410,"span",61),Cl(4411,"code"),qx(4412,"color-11"),og()(),Cl(4413,"li"),Hl(4414,"span",62),Cl(4415,"code"),qx(4416,"color-12"),og()()(),Cl(4417,"blockquote")(4418,"p"),qx(4419,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),Cl(4420,"strong"),qx(4421,"Caption Tag Colors"),og(),qx(4422,":"),og()(),Cl(4423,"ul")(4424,"li"),Hl(4425,"span",63),Cl(4426,"code"),qx(4427,"caption-tag-01"),og(),Hl(4428,"span",64),Cl(4429,"code"),qx(4430,"caption-tag-02"),og(),Hl(4431,"span",65),Cl(4432,"code"),qx(4433,"caption-tag-03"),og(),Hl(4434,"span",66),Cl(4435,"code"),qx(4436,"caption-tag-04"),og(),Hl(4437,"span",67),Cl(4438,"code"),qx(4439,"caption-tag-05"),og()(),Cl(4440,"li"),Hl(4441,"span",68),Cl(4442,"code"),qx(4443,"caption-tag-06"),og(),Hl(4444,"span",69),Cl(4445,"code"),qx(4446,"caption-tag-07"),og(),Hl(4447,"span",70),Cl(4448,"code"),qx(4449,"caption-tag-08"),og(),Hl(4450,"span",71),Cl(4451,"code"),qx(4452,"caption-tag-09"),og(),Hl(4453,"span",72),Cl(4454,"code"),qx(4455,"caption-tag-10"),og()(),Cl(4456,"li"),Hl(4457,"span",73),Cl(4458,"code"),qx(4459,"caption-tag-11"),og(),Hl(4460,"span",74),Cl(4461,"code"),qx(4462,"caption-tag-12"),og(),Hl(4463,"span",75),Cl(4464,"code"),qx(4465,"caption-tag-13"),og(),Hl(4466,"span",76),Cl(4467,"code"),qx(4468,"caption-tag-14"),og(),Hl(4469,"span",77),Cl(4470,"code"),qx(4471,"caption-tag-15"),og()(),Cl(4472,"li"),Hl(4473,"span",78),Cl(4474,"code"),qx(4475,"caption-tag-16"),og(),Hl(4476,"span",79),Cl(4477,"code"),qx(4478,"caption-tag-17"),og(),Hl(4479,"span",80),Cl(4480,"code"),qx(4481,"caption-tag-18"),og(),Hl(4482,"span",81),Cl(4483,"code"),qx(4484,"caption-tag-19"),og(),Hl(4485,"span",82),Cl(4486,"code"),qx(4487,"caption-tag-20"),og()(),Cl(4488,"li"),Hl(4489,"span",83),Cl(4490,"code"),qx(4491,"caption-tag-21"),og(),Hl(4492,"span",84),Cl(4493,"code"),qx(4494,"caption-tag-22"),og(),Hl(4495,"span",85),Cl(4496,"code"),qx(4497,"caption-tag-23"),og(),Hl(4498,"span",86),Cl(4499,"code"),qx(4500,"caption-tag-24"),og(),Hl(4501,"span",87),Cl(4502,"code"),qx(4503,"caption-tag-25"),og()(),Cl(4504,"li"),Hl(4505,"span",88),Cl(4506,"code"),qx(4507,"caption-tag-26"),og(),Hl(4508,"span",89),Cl(4509,"code"),qx(4510,"caption-tag-27"),og(),Hl(4511,"span",90),Cl(4512,"code"),qx(4513,"caption-tag-28"),og(),Hl(4514,"span",91),Cl(4515,"code"),qx(4516,"caption-tag-29"),og(),Hl(4517,"span",92),Cl(4518,"code"),qx(4519,"caption-tag-30"),og()(),Cl(4520,"li"),Hl(4521,"span",93),Cl(4522,"code"),qx(4523,"caption-tag-31"),og(),Hl(4524,"span",94),Cl(4525,"code"),qx(4526,"caption-tag-32"),og(),Hl(4527,"span",95),Cl(4528,"code"),qx(4529,"caption-tag-33"),og(),Hl(4530,"span",96),Cl(4531,"code"),qx(4532,"caption-tag-34"),og(),Hl(4533,"span",97),Cl(4534,"code"),qx(4535,"caption-tag-35"),og()()()()(),Cl(4536,"tr",17)(4537,"td",18)(4538,"div",19)(4539,"span",20),qx(4540," content"),Hl(4541,"br"),og()()(),Cl(4542,"td",21)(4543,"code",31),qx(4544,"string"),og()(),Cl(4545,"td",24)(4546,"p"),qx(4547,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),og()()(),Cl(4548,"tr",17)(4549,"td",18)(4550,"div",19)(4551,"span",20),qx(4552," label"),Hl(4553,"br"),og()()(),Cl(4554,"td",21)(4555,"code",31),qx(4556,"string"),og()(),Cl(4557,"td",24)(4558,"p"),qx(4559,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),og()()(),Cl(4560,"tr",17)(4561,"td",18)(4562,"div",19)(4563,"span",20),qx(4564," value"),Hl(4565,"br"),og()()(),Cl(4566,"td",21)(4567,"code",31),qx(4568,"string "),og(),Cl(4569,"code",35),qx(4570," number"),og()(),Cl(4571,"td",24)(4572,"p"),qx(4573,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),og()()()(),Cl(4574,"h3"),qx(4575,"Enums"),og(),Cl(4576,"h4",4)(4577,"code",5),qx(4578,"PoTableColumnSortType"),og()(),Cl(4579,"div",2)(4580,"p"),qx(4581,"Tipos de ordena\xE7\xE3o das colunas da tabela."),og()(),Cl(4582,"h4",13),qx(4583,"Propriedades"),og(),Cl(4584,"table",14)(4585,"tr",15)(4586,"th",16),qx(4587,"Nome"),og(),Cl(4588,"th",16),qx(4589,"Descri\xE7\xE3o"),og()(),Cl(4590,"tr",17)(4591,"td",18)(4592,"div",19)(4593,"span",20),qx(4594," Ascending"),Hl(4595,"br"),og()()(),Cl(4596,"td",24)(4597,"p"),qx(4598,"Ordena\xE7\xE3o ascendente"),og()()(),Cl(4599,"tr",17)(4600,"td",18)(4601,"div",19)(4602,"span",20),qx(4603," Descending"),Hl(4604,"br"),og()()(),Cl(4605,"td",24)(4606,"p"),qx(4607,"Ordena\xE7\xE3o descendente"),og()()()(),Cl(4608,"h4",4)(4609,"code",5),qx(4610,"PoTableColumnSpacing"),og()(),Cl(4611,"div",2)(4612,"p"),qx(4613,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),Cl(4614,"strong"),qx(4615,"p-spacing"),og(),qx(4616,") do po-table."),og()(),Cl(4617,"h4",13),qx(4618,"Propriedades"),og(),Cl(4619,"table",14)(4620,"tr",15)(4621,"th",16),qx(4622,"Nome"),og(),Cl(4623,"th",16),qx(4624,"Descri\xE7\xE3o"),og()(),Cl(4625,"tr",17)(4626,"td",18)(4627,"div",19)(4628,"span",20),qx(4629," ExtraSmall"),Hl(4630,"br"),og()()(),Cl(4631,"td",24)(4632,"p"),qx(4633,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),og()()(),Cl(4634,"tr",17)(4635,"td",18)(4636,"div",19)(4637,"span",20),qx(4638," Small"),Hl(4639,"br"),og()()(),Cl(4640,"td",24)(4641,"p"),qx(4642,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),og()()(),Cl(4643,"tr",17)(4644,"td",18)(4645,"div",19)(4646,"span",20),qx(4647," Medium"),Hl(4648,"br"),og()()(),Cl(4649,"td",24)(4650,"p"),qx(4651,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),og()()(),Cl(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),qx(4656," Large"),Hl(4657,"br"),og()()(),Cl(4658,"td",24)(4659,"p"),qx(4660,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),og()()()()());},dependencies:[Zr],encapsulation:2})}return r})();var pt=(()=>{class r{route;router;sub;hidePoWebSample=true;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||r)(w(Xn),w(Cn))};static \u0275cmp=Un({type:r,selectors:[["ng-component"]],standalone:false,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt$1("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-table-doc"),og(),Cl(4,"po-tab",3),dt$1("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),og()()()),l&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,Je,Ke,Ze,tt,it,at,rt,st,dt],encapsulation:2})}return r})();var en=[{path:"",component:pt}],ct=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[bL.forChild(en),bL]})}return r})();var ai=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=fe({type:r});static \u0275inj=ue$1({imports:[ca,ct]})}return r})();export{ai as DocPoTableModule};