import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Wx,Bi as kx,Br as RE,Di as he$1,Dn as wn,Dt as aae,En as wa,Ft as e4,H as Jie,Hn as AN,Ki as ok,Kn as BP,Li as kL,M as Ete,Ni as jN,Pr as Ox,Q as Pze,Qi as pt$1,Qt as m4,Rr as Qn,Sa as zO,Sn as vf,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Vr as RN,Wi as mg,Wt as ioe,Xn as C9,Yn as Bx,Zr as VN,ai as aN,an as p4,ar as FN,b as Au,bt as Xie,ci as be$1,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ft as Tu,ga as wn$1,gi as ek,gn as tae,ha as wN,hi as e_,hr as IN,i as _a,in as ooe,ir as FM,ji as hw,ki as ho,kr as Nx,la as ug,li as cE,lr as Hn,ma as w,mn as t4,mr as IE,nn as ob,oi as b9,pr as I,qi as p0,qr as TE,r as Ta,ra as sE,rr as E,sa as ue,si as bN,tr as DN,un as roe,vr as Jv,wn as voe,wt as _4,xi as fo}from"./main-LIMZAZLW.js";var St=()=>({table:`PO Table`,angular:`PO-UI`});var xt=r=>[r];var $e=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-items`]],template:function(l,a){l&1&&Kc(0,`po-table`,0),l&2&&cE(`p-items`,AN(2,xt,RN(1,St)))},dependencies:[m4],encapsulation:2,changeDetection:1})}return r})();var gt=r=>({"docs-sample-code-tabs":r});var Je=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-basic/sample-po-table-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-basic/sample-po-table-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-table-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,gt,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,$e],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{colors=[`color-01`,`color-02`,`color-03`,`color-04`,`color-05`,`color-06`,`color-07`,`color-08`,`color-09`,`color-10`,`color-11`,`color-12`,`caption-tag-01`,`caption-tag-03`,`caption-tag-06`,`caption-tag-08`,`caption-tag-11`,`caption-tag-13`,`caption-tag-16`,`caption-tag-18`,`caption-tag-21`,`caption-tag-23`,`caption-tag-26`,`caption-tag-28`,`caption-tag-31`,`caption-tag-33`];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:`https://po-ui.io/`,number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:`Detail Information 1`,date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:`Detail Information 2`,date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:`text`,width:`30%`},number:{property:`number`,type:`number`},date:{property:`date`,type:`date`},time:{property:`time`,type:`time`},dateTime:{property:`dateTime`,label:`DateTime`,type:`dateTime`},currency:{property:`currency`,type:`currency`,format:`USD`},link:{property:`page`,label:`Link`,type:`link`},icon:{property:`icon`,type:`icon`},boolean:{property:`boolean`,type:`boolean`},subtitle:{property:`subtitle`,type:`subtitle`,width:`10%`,subtitles:[{value:`color-01`,color:`color-01`,label:`Color 1`,content:`1`},{value:`color-02`,color:`color-02`,label:`Color 2`,content:`2`},{value:`color-03`,color:`color-03`,label:`Color 3`,content:`3`},{value:`color-04`,color:`color-04`,label:`Color 4`,content:`4`},{value:`color-05`,color:`color-05`,label:`Color 5`,content:`5`},{value:`color-06`,color:`color-06`,label:`Color 6`,content:`6`},{value:`color-07`,color:`color-07`,label:`Color 7`,content:`7`},{value:`color-08`,color:`color-08`,label:`Color 8`,content:`8`},{value:`color-09`,color:`color-09`,label:`Color 9`,content:`9`},{value:`color-10`,color:`color-10`,label:`Color 10`,content:`10`},{value:`color-11`,color:`color-11`,label:`Color 11`,content:`11`},{value:`color-12`,color:`color-12`,label:`Color 12`,content:`12`}]},label:{property:`label`,type:`label`,width:`10%`,labels:[{value:`color-01`,color:`color-01`,label:`Color 1`},{value:`color-02`,color:`color-02`,label:`Color 2`},{value:`color-03`,color:`color-03`,label:`Color 3`},{value:`color-04`,color:`color-04`,label:`Color 4`},{value:`color-05`,color:`color-05`,label:`Color 5`},{value:`color-06`,color:`color-06`,label:`Color 6`},{value:`color-07`,color:`color-07`,label:`Color 7`},{value:`color-08`,color:`color-08`,label:`Color 8`},{value:`color-09`,color:`color-09`,label:`Color 9`},{value:`color-10`,color:`color-10`,label:`Color 10`},{value:`color-11`,color:`color-11`,label:`Color 11`},{value:`color-12`,color:`color-12`,label:`Color 12`},{value:`caption-tag-01`,color:`caption-tag-01`,label:`Caption 01`},{value:`caption-tag-03`,color:`caption-tag-03`,label:`Caption 03`},{value:`caption-tag-06`,color:`caption-tag-06`,label:`Caption 06`},{value:`caption-tag-08`,color:`caption-tag-08`,label:`Caption 08`},{value:`caption-tag-11`,color:`caption-tag-11`,label:`Caption 11`},{value:`caption-tag-13`,color:`caption-tag-13`,label:`Caption 13`},{value:`caption-tag-16`,color:`caption-tag-16`,label:`Caption 16`},{value:`caption-tag-18`,color:`caption-tag-18`,label:`Caption 18`},{value:`caption-tag-21`,color:`caption-tag-21`,label:`Caption 21`},{value:`caption-tag-23`,color:`caption-tag-23`,label:`Caption 23`},{value:`caption-tag-26`,color:`caption-tag-26`,label:`Caption 26`},{value:`caption-tag-28`,color:`caption-tag-28`,label:`Caption 28`},{value:`caption-tag-31`,color:`caption-tag-31`,label:`Caption 31`},{value:`caption-tag-33`,color:`caption-tag-33`,label:`Caption 33`}]},color:{property:`color`,width:`10%`,color:this.changeColor},detail:{property:`detail`,type:`detail`,detail:{columns:[{property:`info`,label:`Detail`},{property:`date`,label:`Detail Date`,type:`date`,format:`dd-MM-yy`},{property:`time`,label:`Detail Time`,type:`time`},{property:`currency`,label:`Detail Currency`,type:`currency`}],typeHeader:`inline`}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?`caption-tag-08`:`caption-tag-13`}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=[`an an-copy`,`an an-check`,`an an-camera`,`an an-plant`,`an an-building-apartment`],a=[`an an-trash`,`an an-newspaper`,`an an-gas-pump`,`an an-chats`,`an an-bluetooth`],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return`${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}:${a<10?`0`+a.toString():a.toString()}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Ke=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:`First Action`};actionTableSecond={action:this.openModal.bind(this),label:`Second Action`};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=[`hideBatchActions`,`hideTableSearch`];selection;spacing=wn.Medium;filterType=Tu.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:`Actions`,value:`actions`},{label:`Disable first action`,value:`disableAction`,disabled:!0},{label:`Single action`,value:`singleAction`},{label:`First action visible`,value:`visibleAction`}];selectionOptions=[{label:`Selectable`,value:`selectable`},{label:`Hide select all`,value:`hideSelectAll`,disabled:!0},{label:`Single select`,value:`singleSelect`,disabled:!0}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filterModeOptions=[{label:`Starts With`,value:Tu.startsWith},{label:`Contains`,value:Tu.contains},{label:`Ends With`,value:Tu.endsWith}];columnsOptions=[{value:`text`,label:`Text`},{value:`link`,label:`Link`},{value:`number`,label:`Number`},{value:`currency`,label:`Currency`},{value:`date`,label:`Date`},{value:`time`,label:`Time`},{value:`dateTime`,label:`DateTime`},{value:`subtitle`,label:`Subtitle`},{value:`detail`,label:`Detail`},{value:`label`,label:`Label`},{value:`color`,label:`Color`},{value:`icon`,label:`Icon`},{value:`boolean`,label:`Boolean`}];propertiesOptions=[{label:`Sort`,value:`sort`},{label:`Striped`,value:`striped`},{label:`Show more disabled`,value:`showMoreDisabled`},{label:`Loading show more`,value:`loadingShowMore`},{label:`Hide detail`,value:`hideDetail`},{label:`Loading`,value:`loading`},{label:`Auto collapse`,value:`autoCollapse`},{label:`Hide columns manager`,value:`hideColumnsManager`},{label:`Hide batch actions`,value:`hideBatchActions`},{label:`Actions Right`,value:`actionsRight`},{label:`Draggable`,value:`draggable`},{label:`Hide action fixed columns`,value:`fixed`},{label:`Hide Table Search`,value:`hideTableSearch`},{label:`Virtual Scroll`,value:`virtualScroll`}];typeHeaderOptions=[{label:`Inline`,value:`inline`},{label:`None`,value:`none`},{label:`Top`,value:`top`}];typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes(`singleSelect`),l=this.selection.includes(`selectable`);this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container=``,this.customLiterals=void 0,this.height=void 0,this.componentsSize=`medium`,this.items=[],this.itemIndex=0,this.literals=``,this.maxColumns=void 0,this.properties=[`hideBatchActions`,`hideTableSearch`],this.selection=[],this.spacing=wn.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static ɵfac=function(l){return new(l||r)(E(Ee))};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-labs`]],viewQuery:function(l,a){if(l&1&&Xc(wa,7),l&2){let m;fo(m=ho())&&(a.poModal=m.first)}},standalone:!1,features:[be$1([Ee])],decls:34,vars:51,consts:[[`f`,`ngForm`],[3,`p-all-selected`,`p-all-unselected`,`p-change-fixed-columns`,`p-collapsed`,`p-expanded`,`p-selected`,`p-show-more`,`p-unselected`,`p-delete-items`,`p-actions`,`p-actions-right`,`p-columns`,`p-container`,`p-height`,`p-filter-type`,`p-components-size`,`p-hide-detail`,`p-hide-columns-manager`,`p-hide-batch-actions`,`p-hide-table-search`,`p-hide-select-all`,`p-items`,`p-literals`,`p-filtered-columns`,`p-loading`,`p-max-columns`,`p-selectable`,`p-spacing`,`p-loading-show-more`,`p-show-more-disabled`,`p-single-select`,`p-sort`,`p-striped`,`p-virtual-scroll`,`p-auto-collapse`,`p-draggable`,`p-hide-action-fixed-columns`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`name`,`columnsName`,`p-label`,`Columns`,`p-columns`,`4`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-columns`,`3`,`name`,`typeHeader`,`p-label`,`Column detail typeHeader`,1,`po-lg-9`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hideSelect`,`p-label`,`Column detail hideSelect`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,`p-columns`,`4`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionsDefinition`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Actions`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`selection`,`p-columns`,`4`,`p-help`,`To enable 'hide select all' and 'single select' check 'selectable'.`,`p-label`,`Selection`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas não definidas"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filteredColumns`,`p-help`,`Ex.: "text, time"`,`p-label`,`Filter Columns`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Height of table`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxColumns`,`p-clean`,``,`p-help`,`Max columns to be visible`,`p-label`,`Max Columns`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,`p-title`,`PO Table`],[`p-label`,`Chosen Item:`,3,`p-value`]],template:function(l,a){if(l&1){let m=Bx();Ac(0,`po-table`,1),pt$1(`p-all-selected`,function(){return a.changeEvent(`p-all-selected`)})(`p-all-unselected`,function(){return a.changeEvent(`p-all-unselected`)})(`p-change-fixed-columns`,function(){return a.changeEvent(`p-change-fixed-columns`)})(`p-collapsed`,function(){return a.changeEvent(`p-collapsed`)})(`p-expanded`,function(){return a.changeEvent(`p-expanded`)})(`p-selected`,function(){return a.changeEvent(`p-selected`)})(`p-show-more`,function(){return a.showMore()})(`p-unselected`,function(){return a.changeEvent(`p-unselected`)})(`p-delete-items`,function(s){return a.deleteItems(s)}),ug(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3),ug(),Kc(4,`po-divider`),Ac(5,`div`,2)(6,`po-button`,4),pt$1(`p-click`,function(){return a.addItem()}),ug()(),Kc(7,`po-divider`),Ac(8,`form`,null,0)(10,`div`,2)(11,`po-checkbox-group`,5),RE(`ngModelChange`,function(s){return Jv(m),DN(a.columnsName,s)||(a.columnsName=s),e_(s)}),pt$1(`p-change`,function(){return a.updateColumns()}),ug(),p0(),ug(),Ac(12,`div`,2)(13,`po-radio-group`,6),RE(`ngModelChange`,function(s){return Jv(m),DN(a.columnsDefinition.detail.detail.typeHeader,s)||(a.columnsDefinition.detail.detail.typeHeader=s),e_(s)}),ug(),p0(),Ac(14,`po-switch`,7),RE(`ngModelChange`,function(s){return Jv(m),DN(a.columnsDefinition.detail.detail.hideSelect,s)||(a.columnsDefinition.detail.detail.hideSelect=s),e_(s)}),ug(),p0(),ug(),Ac(15,`div`,2)(16,`po-checkbox-group`,8),RE(`ngModelChange`,function(s){return Jv(m),DN(a.properties,s)||(a.properties=s),e_(s)}),ug(),p0(),ug(),Ac(17,`div`,2)(18,`po-checkbox-group`,9),RE(`ngModelChange`,function(s){return Jv(m),DN(a.actionsDefinition,s)||(a.actionsDefinition=s),e_(s)}),pt$1(`p-change`,function(){return a.changeActionOptions()}),ug(),p0(),ug(),Ac(19,`div`,2)(20,`po-radio-group`,10),RE(`ngModelChange`,function(s){return Jv(m),DN(a.spacing,s)||(a.spacing=s),e_(s)}),ug(),p0(),ug(),Ac(21,`div`,2)(22,`po-checkbox-group`,11),RE(`ngModelChange`,function(s){return Jv(m),DN(a.selection,s)||(a.selection=s),e_(s)}),pt$1(`p-change`,function(){return a.changeSelectionOptions()}),ug(),p0(),Ac(23,`po-radio-group`,12),RE(`ngModelChange`,function(s){return Jv(m),DN(a.filterType,s)||(a.filterType=s),e_(s)}),ug(),p0(),Ac(24,`po-radio-group`,13),RE(`ngModelChange`,function(s){return Jv(m),DN(a.componentsSize,s)||(a.componentsSize=s),e_(s)}),ug(),p0(),ug(),Ac(25,`div`,2)(26,`po-input`,14),RE(`ngModelChange`,function(s){return Jv(m),DN(a.literals,s)||(a.literals=s),e_(s)}),pt$1(`p-change`,function(){return a.changeLiterals()}),ug(),p0(),Ac(27,`po-input`,15),RE(`ngModelChange`,function(s){return Jv(m),DN(a.filteredColumns,s)||(a.filteredColumns=s),e_(s)}),pt$1(`p-change`,function(){return a.changeFilteredColumns()}),ug(),p0(),Ac(28,`po-number`,16),RE(`ngModelChange`,function(s){return Jv(m),DN(a.height,s)||(a.height=s),e_(s)}),ug(),p0(),Ac(29,`po-number`,17),RE(`ngModelChange`,function(s){return Jv(m),DN(a.maxColumns,s)||(a.maxColumns=s),e_(s)}),ug(),p0(),ug(),Ac(30,`div`,2)(31,`po-button`,18),pt$1(`p-click`,function(){return a.restore()}),ug()()(),Ac(32,`po-modal`,19),Kc(33,`po-info`,20),ug()}l&2&&(cE(`p-actions`,a.actions)(`p-actions-right`,a.properties.includes(`actionsRight`))(`p-columns`,a.columns)(`p-container`,a.container)(`p-height`,a.height)(`p-filter-type`,a.filterType)(`p-components-size`,a.componentsSize)(`p-hide-detail`,a.properties.includes(`hideDetail`))(`p-hide-columns-manager`,a.properties.includes(`hideColumnsManager`))(`p-hide-batch-actions`,a.properties.includes(`hideBatchActions`))(`p-hide-table-search`,a.properties.includes(`hideTableSearch`))(`p-hide-select-all`,a.selection.includes(`hideSelectAll`))(`p-items`,a.items)(`p-literals`,a.customLiterals)(`p-filtered-columns`,a.filteredColumns)(`p-loading`,a.properties.includes(`loading`))(`p-max-columns`,a.maxColumns)(`p-selectable`,a.selection.includes(`selectable`))(`p-spacing`,a.spacing)(`p-loading-show-more`,a.properties.includes(`loadingShowMore`))(`p-show-more-disabled`,a.properties.includes(`showMoreDisabled`))(`p-single-select`,a.selection.includes(`singleSelect`))(`p-sort`,a.properties.includes(`sort`))(`p-striped`,a.properties.includes(`striped`))(`p-virtual-scroll`,a.properties.includes(`virtualScroll`))(`p-auto-collapse`,a.properties.includes(`autoCollapse`))(`p-draggable`,a.properties.includes(`draggable`))(`p-hide-action-fixed-columns`,a.properties.includes(`fixed`)),Hp(3),cE(`p-value`,a.event),Hp(8),TE(`ngModel`,a.columnsName),cE(`p-options`,a.columnsOptions),m0(),Hp(2),TE(`ngModel`,a.columnsDefinition.detail.detail.typeHeader),cE(`p-options`,a.typeHeaderOptions),m0(),Hp(),TE(`ngModel`,a.columnsDefinition.detail.detail.hideSelect),m0(),Hp(2),TE(`ngModel`,a.properties),cE(`p-options`,a.propertiesOptions),m0(),Hp(2),TE(`ngModel`,a.actionsDefinition),cE(`p-options`,a.actionsDefinitionOptions),m0(),Hp(2),TE(`ngModel`,a.spacing),cE(`p-options`,a.typeSpacing),m0(),Hp(2),TE(`ngModel`,a.selection),cE(`p-options`,a.selectionOptions),m0(),Hp(),TE(`ngModel`,a.filterType),cE(`p-options`,a.filterModeOptions),m0(),Hp(),TE(`ngModel`,a.componentsSize),cE(`p-options`,a.componentsSizeOptions),m0(),Hp(2),TE(`ngModel`,a.literals),m0(),Hp(),TE(`ngModel`,a.filteredColumns),m0(),Hp(),TE(`ngModel`,a.height),m0(),Hp(),TE(`ngModel`,a.maxColumns),m0(),Hp(4),cE(`p-value`,a.currentItem))},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Jne,Cte,p4,roe,wa,m4],encapsulation:2,changeDetection:1})}return r})();var Ct=r=>({"docs-sample-code-tabs":r});var Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-labs/sample-po-table-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-table
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-labs/sample-po-table-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-table-labs/sample-po-table-labs.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-table-labs`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ct,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ke],encapsulation:2,changeDetection:1})}return r})();var Pt=[`table`];var Ye=(()=>{class r$1{tableComponent;service=``;key;value;sampleService=``;params;filters=[];columns=[{property:`id`},{property:`name`}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Hn({type:r$1,selectors:[[`sample-po-table-with-api`]],viewQuery:function(l,a){if(l&1&&Xc(Pt,5),l&2){let m;fo(m=ho())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[[`table`,``],[1,`po-row`],[`p-label`,`URL API service`,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Columns`,1,`po-md-12`],[`p-label`,`Columns`,`p-help`,`[{ property: 'name' }]`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-rows`],[`p-label`,`Filters`,1,`po-md-12`],[`p-label`,`Key`,`p-help`,`Object key`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Value`,`p-help`,`Object value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Filter`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-mt-1`,`po-md-12`,3,`p-remove`,`p-remove-all`,`p-disclaimers`],[1,`po-mt-1`,`po-md-12`,3,`p-columns`,`p-service-api`,`p-height`,`p-hide-table-search`,`p-infinite-scroll`]],template:function(l,a){if(l&1){let m=Bx();Ac(0,`div`,1)(1,`po-input`,2),RE(`ngModelChange`,function(s){return Jv(m),DN(a.service,s)||(a.service=s),e_(s)}),pt$1(`p-change`,function(){return a.changeService(a.service)}),ug(),p0(),ug(),Ac(2,`div`,1),Kc(3,`po-divider`,3),Ac(4,`po-textarea`,4),RE(`ngModelChange`,function(s){return Jv(m),DN(a.stringColumns,s)||(a.stringColumns=s),e_(s)}),pt$1(`p-change`,function(s){return a.onChangeColumns(s)}),ug(),p0(),ug(),Ac(5,`div`,1),Kc(6,`po-divider`,5),Ac(7,`po-input`,6),RE(`ngModelChange`,function(s){return Jv(m),DN(a.key,s)||(a.key=s),e_(s)}),ug(),p0(),Ac(8,`po-input`,7),RE(`ngModelChange`,function(s){return Jv(m),DN(a.value,s)||(a.value=s),e_(s)}),ug(),p0(),ug(),Ac(9,`div`,1)(10,`po-button`,8),pt$1(`p-click`,function(){return a.addFilter(a.key,a.value)}),ug()(),Ac(11,`div`,1)(12,`po-disclaimer-group`,9),pt$1(`p-remove`,function(s){return a.removeItem(s)})(`p-remove-all`,function(){return a.removeAllItems()}),ug()(),Ac(13,`div`,1),Kc(14,`po-table`,10,0),ug()}l&2&&(Hp(),TE(`ngModel`,a.service),m0(),Hp(3),TE(`ngModel`,a.stringColumns),cE(`p-rows`,5),m0(),Hp(3),TE(`ngModel`,a.key),m0(),Hp(),TE(`ngModel`,a.value),m0(),Hp(2),cE(`p-disabled`,!a.key||!a.value),Hp(2),cE(`p-disclaimers`,a.filters),Hp(2),cE(`p-columns`,a.columns)(`p-service-api`,a.sampleService)(`p-height`,300)(`p-hide-table-search`,!1)(`p-infinite-scroll`,!0))},dependencies:[D9,BP,ni,e4,ob,_4,ooe,m4],encapsulation:2,changeDetection:1})}return r$1})();var wt=r=>({"docs-sample-code-tabs":r});var et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-with-api-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table using API`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-with-api/sample-po-table-with-api.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-with-api/sample-po-table-with-api.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-table-with-api`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,wt,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ye],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r{getColumns(){return[{property:`code`,type:`number`,width:`8%`},{property:`product`},{property:`customer`},{property:`exit_forecast`,label:`Exit forecast`,type:`dateTime`},{property:`time_since_purchase`,label:`Time since purchase`,type:`time`,visible:!1},{property:`quantity`,label:`Quantity (Tons)`,type:`number`,width:`15%`,visible:!1},{property:`icms`,label:`ICMS`,type:`number`,format:`1.2-5`,visible:!1},{property:`status`,type:`label`,width:`8%`,labels:[{value:`delivered`,color:`caption-tag-23`,label:`Delivered`},{value:`transport`,color:`caption-tag-14`,label:`Transport`},{value:`production`,color:`caption-tag-03`,label:`Production`},{value:`stock`,color:`caption-tag-33`,label:`Stock`,icon:`an an-package`}]}]}getItems(){return[{code:1200,product:`Rice`,customer:`Angeloni`,quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`delivered`,license_plate:`MDJD9191`,batch_product:18041822,driver:`José Oliveira`},{code:1355,product:`Margarine`,customer:`Giassi`,quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`XXA5454`,batch_product:18041821,driver:`Francisco Pereira`},{code:1496,product:`Wheat flour`,customer:`Walmart`,quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`QEW5779`,batch_product:18041820,driver:`Pedro da Costa`},{code:1712,product:`Milk`,customer:`Carrefour`,quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`WWW1247`,batch_product:18041819,driver:`João da Silva`},{code:1881,product:`Oil`,customer:`Carrefour`,quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`XXI2312`,batch_product:18041825,driver:`Antonio Lima`},{code:1551,product:`Cream cheese`,customer:`Barbosa`,quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`stock`,license_plate:`XXI2359`,batch_product:18041888,driver:`Vitoria Felix`}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59);return`00:${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}`}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function kt(r,W){if(r&1){let o=Bx();Ac(0,`po-widget`,2)(1,`div`,3)(2,`po-select`,4),RE(`ngModelChange`,function(a){let m=Jv(o).$implicit;return DN(m.status,a)||(m.status=a),e_(a)}),ug(),p0(),ug(),Ac(3,`div`,3),Kc(4,`po-info`,5)(5,`po-info`,6)(6,`po-info`,7),ug()()}if(r&2){let o=W.$implicit,l=Wx();cE(`p-title`,wN(`Transport detail `,o.code)),Hp(2),TE(`ngModel`,o.status),cE(`p-options`,l.statusOptions),m0(),Hp(2),cE(`p-value`,o.batch_product),Hp(),cE(`p-value`,o.driver),Hp(),cE(`p-value`,o.license_plate)}}var tt=(()=>{class r{transportService;columns;items;statusOptions=[{label:`Delivered`,value:`delivered`},{label:`Transport`,value:`transport`},{label:`Production`,value:`production`}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!==`delivered`}static ɵfac=function(l){return new(l||r)(E(be))};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-transport`]],standalone:!1,features:[be$1([be])],decls:2,vars:9,consts:[[`p-spacing`,`large`,3,`p-auto-collapse`,`p-columns`,`p-hide-columns-manager`,`p-hide-table-search`,`p-items`,`p-sort`,`p-striped`],[`p-table-row-template`,``,3,`p-table-row-template-arrow-direction`,`p-table-row-template-show`],[3,`p-title`],[1,`po-row`],[`name`,`status`,`p-label`,`Transport status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Batch of product`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`Driver`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`License plate`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`]],template:function(l,a){l&1&&(Ac(0,`po-table`,0),sE(1,kt,7,7,`ng-template`,1),ug()),l&2&&(cE(`p-auto-collapse`,!0)(`p-columns`,a.columns)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-sort`,!0)(`p-striped`,!0),Hp(),cE(`p-table-row-template-arrow-direction`,`right`)(`p-table-row-template-show`,a.isUndelivered))},dependencies:[D9,BP,ioe,roe,m4,Jie,Pze],encapsulation:2,changeDetection:1})}return r})();var It=r=>({"docs-sample-code-tabs":r});var nt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-transport-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table - Transport`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-transport/sample-po-table-transport.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-table
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-transport/sample-po-table-transport.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-table-transport/sample-po-table-transport.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-table-transport`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,It,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,tt],encapsulation:2,changeDetection:1})}return r})();var Se=(()=>{class r{getColumns(){return[{property:`status`,type:`label`,labels:[{value:`available`,color:`caption-tag-13`,label:`Available`},{value:`reserved`,color:`caption-tag-08`,label:`Reserved`},{value:`closed`,color:`caption-tag-03`,label:`Closed`}]},{property:`country`},{property:`destination`},{property:`region`,type:`subtitle`,width:`180px`,subtitles:[{value:`Alps`,color:`color-01`,label:`Alps`,content:`AL`},{value:`Australasia`,color:`color-02`,label:`Australasia`,content:`AU`},{value:`British Isle`,color:`color-03`,label:`British Isle`,content:`BI`},{value:`Caucasus`,color:`color-04`,label:`Caucasus`,content:`CA`},{value:`Danube`,color:`color-05`,label:`Danube`,content:`DA`},{value:`East Asia`,color:`color-06`,label:`East Asia`,content:`EA`},{value:`Latin America`,color:`color-07`,label:`Latin America`,content:`LA`},{value:`Mediterranean`,color:`color-08`,label:`Mediterranean`,content:`ME`},{value:`Nordics`,color:`color-09`,label:`Nordics`,content:`NO`},{value:`North America`,color:`color-10`,label:`North America`,content:`NA`},{value:`Southern Africa`,color:`color-11`,label:`Southern Africa`,content:`SA`},{value:`Western Africa`,color:`color-12`,label:`Western Africa`,content:`WA`}]},{property:`date`,type:`date`},{property:`returnDate`,label:`Return Date`,type:`date`},{property:`value`,type:`currency`,format:`USD`},{property:`id`,label:`Flight Number`,type:`number`},{property:`onBoardService`,label:`On Board Service`,type:`boolean`,boolean:{trueLabel:`Yes`,falseLabel:`No`}},{property:`detail`,label:`Details`,type:`detail`,detail:{columns:[{property:`package`},{property:`tour`},{property:`time`,label:`Departure time`,type:`time`,format:`HH:mm`},{property:`distance`,label:`Distance (Miles)`,type:`number`,format:`1.0-5`}],typeHeader:`top`}}]}getItems(){return[{id:11234,initials:`BR`,country:`Brazil`,value:1e3,date:`2018-10-09`,returnDate:`2018-11-01`,class:`Economic`,onBoardService:!1,destination:`Rio de Janeiro`,airline:`Azul`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`20:10:10`,distance:`1000`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`09:15:19`,distance:`2000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`07:10:20`,distance:`3000`}]},{id:22467,initials:`FR`,country:`France`,value:5e3,date:`2019-12-13`,returnDate:`2019-12-31`,class:`Economic`,onBoardService:!1,destination:`Paris`,airline:`British Airways`,status:`closed`,region:`Alps`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`10:15:10`,distance:`4800`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`22:15:10`,distance:`11000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`10:15:10`,distance:`1000`}]},{id:40670,initials:`SN`,country:`Senegal`,value:3200,date:`2017-11-22`,returnDate:`2018-12-01`,class:`Economic`,onBoardService:!1,destination:`Dakar`,airline:`Iberia`,status:`closed`,region:`Western Africa`},{id:34679,initials:`PT`,country:`Portugal`,value:5500,date:`2017-10-10`,returnDate:`2018-10-20`,class:`Economic`,onBoardService:!1,destination:`Lisbon`,airline:`Air Europa`,status:`closed`,region:`Mediterranean`},{id:48999,initials:`RU`,country:`Russia`,value:6700,date:`2019-01-17`,returnDate:`2019-02-20`,class:`First Class`,onBoardService:!0,destination:`Moscow`,airline:`Lufthansa`,status:`reserved`,region:`Caucasus`},{id:48999,initials:`US`,country:`United States`,value:2700.49,date:`2018-10-17`,returnDate:`2018-10-29`,class:`Economic`,onBoardService:!1,destination:`Los Angeles`,airline:`American Airlines`,status:`reserved`,region:`North America`},{id:54563,initials:`CL`,country:`Chile`,value:2e3,date:`2018-10-20`,returnDate:`2018-11-01`,destination:`Cusco`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`available`,region:`Latin America`},{id:64568,initials:`MX`,country:`Mexico`,value:2100,date:`2018-03-10`,returnDate:`2018-05-09`,destination:`Mexico City`,class:`Economic`,onBoardService:!1,airline:`Aero México`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`12:10:10`,distance:`2200`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`11:10:10`,distance:`1500`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`16:10:10`,distance:`1800`}]},{id:75456,initials:`IE`,country:`Ireland`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Cork`,class:`First Class`,onBoardService:!0,airline:`Lufthansa`,status:`reserved`,region:`British Isle`},{id:23445,initials:`ZA`,country:`South Africa`,value:1900,date:`2018-12-10`,returnDate:`2018-12-25`,destination:`Cape Town`,class:`Economic`,onBoardService:!1,airline:`South African Airways`,status:`available`,region:`Southern Africa`},{id:19238,initials:`AU`,country:`Australia`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Sydney`,class:`First Class`,onBoardService:!0,airline:`Jetstar Airways`,status:`reserved`,region:`Australasia`},{id:85456,initials:`JP`,country:`Japan`,value:5900,date:`2018-10-25`,returnDate:`2018-11-10`,destination:`Tokio`,class:`Executive`,onBoardService:!0,airline:`Japan Airlines`,status:`available`,region:`East Asia`},{id:94565,initials:`CN`,country:`China`,value:2900,date:`2018-10-10`,returnDate:`2018-10-25`,destination:`Beijing`,class:`Economic`,onBoardService:!1,airline:`Malaysia Airlines`,status:`available`,region:`East Asia`},{id:32330,initials:`UK`,country:`England`,value:2090.5,date:`2018-10-07`,returnDate:`2018-11-15`,destination:`London`,class:`Executive`,onBoardService:!0,airline:`British Airways`,status:`available`,region:`British Isle`},{id:14560,initials:`CA`,country:`Canada`,value:2090.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Quebec`,class:`Economic`,onBoardService:!1,airline:`American Airlines`,status:`available`,region:`North America`},{id:93800,initials:`IS`,country:`Iceland`,value:6300,date:`2018-10-12`,returnDate:`2018-10-27`,destination:`Reykjavík`,class:`Economic`,onBoardService:!1,airline:`Star Alliance`,status:`available`,region:`Nordics`},{id:34239,initials:`DE`,country:`Germany`,value:3070.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Berlin`,class:`Executive`,onBoardService:!0,airline:`LATAM`,status:`available`,region:`Danube`},{id:45611,initials:`AR`,country:`Argentina`,value:3500.5,date:`2018-12-07`,returnDate:`2018-12-29`,destination:`Ushuaia`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`reserved`,region:`Latin America`}]}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var it=(()=>{class r$2{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:`an an-currency-circle-dollar`,label:`Apply Discount`,disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:`an an-info`,label:`Details`},{action:this.remove.bind(this),icon:`po-icon an an-trash`,label:`Remove`}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem(`initial-columns`)){this.initialColumns=localStorage.getItem(`initial-columns`).split(`,`);let l=[...this.columns.map(a=>s(r({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem(`initial-columns`).split(`,`),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:`Add to cart`,message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case`available`:this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case`reserved`:this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case`closed`:this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`)}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=s(r({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem(`initial-columns`,o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static ɵfac=function(l){return new(l||r$2)(E(Se),E(Au),E(Ete))};static ɵcmp=Hn({type:r$2,selectors:[[`sample-po-table-airfare`]],viewQuery:function(l,a){if(l&1&&Xc(wa,7)(m4,7),l&2){let m;fo(m=ho())&&(a.poModal=m.first),fo(m=ho())&&(a.poTable=m.first)}},standalone:!1,features:[be$1([Se,Ete])],decls:16,vars:24,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-change-visible-columns`,`p-restore-column-manager`,`p-delete-items`,`p-container`,`p-height`,`p-hide-batch-actions`,`p-hide-table-search`,`p-selectable`,`p-sort`,`p-striped`,`p-actions`,`p-columns`,`p-items`,`p-max-columns`,`p-virtual-scroll`],[`p-label`,`Total Value`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[`p-label`,`Expanded Itens`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[1,`po-row`],[`p-icon`,`an an-shopping-cart-simple`,`p-label`,`Add items to cart`,1,`po-md-3`,3,`p-click`],[`p-label`,`Expand all detail`,1,`po-md-3`,3,`p-click`],[`p-label`,`Collapse all detail`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[`p-label`,`Airline`,1,`po-sm-6`,3,`p-value`],[`p-label`,`Initials`,1,`po-sm-2`,3,`p-value`],[`p-label`,`Class`,1,`po-sm-4`,3,`p-value`]],template:function(l,a){l&1&&(Ac(0,`div`,0),vN(1,`Choose one or more promotional airfares`),ug(),Kc(2,`po-divider`),Ac(3,`po-table`,1),pt$1(`p-collapsed`,function(){return a.onCollapseDetail()})(`p-expanded`,function(){return a.onExpandDetail()})(`p-selected`,function(p){return a.sumTotal(p)})(`p-unselected`,function(p){return a.decreaseTotal(p)})(`p-change-visible-columns`,function(p){return a.changeColumnVisible(p)})(`p-restore-column-manager`,function(){return a.restoreColumn()})(`p-delete-items`,function(p){return a.deleteItems(p)}),ug(),Kc(4,`po-divider`)(5,`po-info`,2),FN(6,`currency`),Kc(7,`po-info`,3),Ac(8,`div`,4)(9,`po-button`,5),pt$1(`p-click`,function(){return a.addToCart()}),ug(),Ac(10,`po-button`,6),pt$1(`p-click`,function(){return a.expandAll()}),ug(),Ac(11,`po-button`,7),pt$1(`p-click`,function(){return a.collapseAll()}),ug()(),Ac(12,`po-modal`,8),Kc(13,`po-info`,9)(14,`po-info`,10)(15,`po-info`,11),ug()),l&2&&(Hp(3),cE(`p-container`,!0)(`p-height`,400)(`p-hide-batch-actions`,!1)(`p-hide-table-search`,!1)(`p-selectable`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-actions`,a.actions)(`p-columns`,a.columns)(`p-items`,a.items)(`p-max-columns`,7)(`p-virtual-scroll`,!1),Hp(2),cE(`p-value`,bN(jN(6,21,a.total,`USD`))),Hp(2),cE(`p-value`,a.totalExpanded),Hp(5),cE(`p-title`,IN(``,a.detail?.destination,` - `,a.detail?.country)),Hp(),cE(`p-value`,a.detail?.airline),Hp(),cE(`p-value`,a.detail?.initials),Hp(),cE(`p-value`,a.detail?.class))},dependencies:[ni,ob,roe,wa,m4,ok],encapsulation:2,changeDetection:1})}return r$2})();var Lt=r=>({"docs-sample-code-tabs":r});var at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-airfare-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table - Airfare`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-airfare/sample-po-table-airfare.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-airfare/sample-po-table-airfare.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-table-airfare/sample-po-table-airfare.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-table-airfare`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Lt,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,it],encapsulation:2,changeDetection:1})}return r})();var H;(function(r){r[r.Stable=0]=`Stable`,r[r.Experimental=1]=`Experimental`,r[r.RoadMap=2]=`RoadMap`})(H||(H={}));var xe=(()=>{class r{items=[{component:{favorite:[`favorite`,`documentation`],name:`PO Select`,description:`Display a list of items and allows selection`,link:`/documentation/po-select`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Checkbox`,description:`Group of square buttons that allows multiple items to be selected`,link:`/documentation/po-checkbox-group`,extra:`Best Practices`,extras:[`Short and objective texts for items`,`Use with short lists`,`For big lists use PO Multiselect`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Login`,description:`Template for authentication`,link:`/documentation/po-page-login`,extra:`Features`,extras:[],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Number`,description:`Input that allows only numbers`,link:`/documentation/po-number`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Dynamic Table`,description:`Template for list resources with a table`,link:`/documentation/po-page-dynamic-table`,extra:`Features`,extras:[`6 defaults actions`,`Use Metadata to build your page`,`No code`,`Customization`],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Combo`,description:`Display a list of items with filter and allows selection`,link:`/documentation/po-combo`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Notification`,description:`Show notification easily and quickly`,link:`/documentation/po-notification`,extra:`Features`,extras:[`4 types of notifications`,`Define time for your notifications`,`Use actions in your notification`],status:0,type:`service`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Multiselect`,description:`Display a list of items and allows multiple selection`,link:`/documentation/po-multiselect`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[],name:`PO Grid`,description:`Create a grid for edition`,link:`/documentation/po-grid`,extra:`Features`,extras:[],status:2,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Input`,description:`Input for general texts`,link:`/documentation/po-input`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Textarea`,description:`Larger input for big texts`,link:`/documentation/po-textarea`,extra:`Best Practices`,extras:[`Recommended to large texts like observations and details`,`For short texts use po-input`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Datepicker`,description:`Input with calendar for dates`,link:`/documentation/po-datepicker`,extra:`Features`,extras:[`Multiple idioms ( pt, es , en)`,`Custom date formats`,`Period validation (start date and end date)`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Email`,description:`Input that allows valid email texts (username@email.com)`,link:`/documentation/po-email`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Url`,description:`Input that expects a valid url as text (http://www.url.com)`,link:`/documentation/po-url`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Password`,description:`Input with bullet text to type passwords`,link:`/documentation/po-password`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Login`,description:`Input with a user icon that represents a login field`,link:`/documentation/po-login`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Upload`,description:`Upload file(s) with a loading bar`,link:`/documentation/po-upload`,extra:`Features`,extras:[`Multiple file selection`,`Automatic upload after click`,`File format and size restriction`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Avatar`,description:`Creates a circle with a picture inside`,link:`/documentation/po-avatar`,extra:`Features`,extras:[`Multiple sizes`,`Default image`],status:0,type:`component`}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(`.`).length>1){let s=m.split(`.`)[0],ye=m.split(`.`)[1];return o[s][ye]<l[s][ye]?p===vf.Ascending?-1:1:p===vf.Ascending?1:-1}else return o[m]<l[m]?p===vf.Ascending?-1:1:p===vf.Ascending?1:-1}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Vt(r,W){if(r&1&&(Ac(0,`div`),vN(1),FN(2,`uppercase`),ug()),r&2){let o=W.$implicit;aN(wN(`badge `,o)),Hp(),IE(VN(2,4,o))}}function zt(r,W){if(r&1&&(Ac(0,`ul`)(1,`li`,4),vN(2),ug(),Kc(3,`po-divider`),ug()),r&2){let o=W.$implicit;Hp(2),IE(o)}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:`component.status`,type:`label`,label:`Status`,width:`5%`,labels:[{value:H.Stable,color:`caption-tag-13`,label:`Stable`,textColor:`white`,tooltip:`Published component`},{value:H.Experimental,color:`caption-tag-08`,label:`Experimental`,textColor:`white`,tooltip:`Component in homologation`},{value:H.RoadMap,color:`caption-tag-03`,label:`Roadmap`,textColor:`white`,tooltip:`Component in roadmap`}]},{property:`component.name`,label:`Name`,type:`link`},{property:`component.type`,label:`Type`,type:`columnTemplate`,width:`10%`},{property:`component.description`,label:`Descrição`,color:this.experimentalColor.bind(this)},{property:`component.extra`,label:`Extras`,width:`10%`,type:`link`,tooltip:`Additional details`,action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:`component.favorite`,label:`Actions`,type:`icon`,sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:`an an-star`,tooltip:`Favorite`,value:`favorite`},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:`an an-arrow-square-out`,tooltip:`Click to go to documentation`,value:`documentation`}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===H.Experimental?`caption-tag-08`:`caption-tag-13`}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==H.Stable}canShowExtras(o){return o?.component?.status!==H.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?`caption-tag-08`:`caption-tag-13`}static ɵfac=function(l){return new(l||r)(E(xe),E(wn$1))};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-components`]],viewQuery:function(l,a){if(l&1&&Xc(wa,7),l&2){let m;fo(m=ho())&&(a.poModal=m.first)}},standalone:!1,features:[be$1([xe])],decls:8,vars:9,consts:[[1,`po-font-text-large`,`po-text-color-neutral-dark-40`],[`p-container`,`shadow`,3,`p-show-more`,`p-sort-by`,`p-loading-show-more`,`p-columns`,`p-items`,`p-show-more-disabled`,`p-sort`],[`p-table-column-template`,``,3,`p-property`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[1,`po-font-text`]],template:function(l,a){l&1&&(Ac(0,`div`,0),vN(1,`PO UI Library`),ug(),Kc(2,`po-divider`),Ac(3,`po-table`,1),pt$1(`p-show-more`,function(p){return a.showMore(p)})(`p-sort-by`,function(p){return a.sort(p)}),sE(4,Vt,3,6,`ng-template`,2),ug(),Ac(5,`po-modal`,3),Ox(6,zt,4,1,`ul`,null,Nx),ug()),l&2&&(Hp(3),cE(`p-loading-show-more`,a.isLoading)(`p-columns`,a.columns)(`p-items`,a.items)(`p-show-more-disabled`,a.showMoreDisabled)(`p-sort`,!0),Hp(),cE(`p-property`,`component.type`),Hp(),cE(`p-title`,IN(``,a.title,` - `,a.extraInformation?.component)),Hp(),kx(a.extraInformation?.extras))},dependencies:[ob,wa,m4,Xie,ek],styles:[`.badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}`],changeDetection:1})}return r})();var jt=r=>({"docs-sample-code-tabs":r});var lt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-components-view`]],standalone:!1,decls:38,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table - Po Field Components`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-components/sample-po-table-components.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-components/sample-po-table-components.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-table-components/sample-po-table-components.enum.ts`),ug(),Ac(23,`pre`,9),vN(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),ug(),Ac(25,`label`,6),vN(26,`sample-po-table-components/sample-po-table-components.service.ts`),ug(),Ac(27,`pre`,9),vN(28,`import { Injectable } from '@angular/core';

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
`),ug()()(),Ac(29,`po-tab`,10)(30,`div`)(31,`label`,6),vN(32,`sample-po-table-components/sample-po-table-components.component.css`),ug(),Ac(33,`pre`,11),vN(34,`.badge {
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
`),ug()()()()(),Ac(35,`div`,12),Kc(36,`sample-po-table-components`),ug(),Kc(37,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,jt,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ot],encapsulation:2,changeDetection:1})}return r})();var he=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:`id`,label:`Id`,type:`string`,width:`90px`},{property:`label`,label:`Name`,type:`string`,width:`90px`},{property:`email`,label:`E-mail`,type:`string`,width:`120px`}]}getItems(){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes`).pipe(FM(`items`))}static ɵfac=function(l){return new(l||r)(w(hw))};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Qt=[`POItemsOri`];var Gt=[`POItemsSelected`];var rt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l===`new`)this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static ɵfac=function(l){return new(l||r)(E(he))};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-heroes`]],viewQuery:function(l,a){if(l&1&&Xc(Qt,7)(Gt,7),l&2){let m;fo(m=ho())&&(a.poItemsOri=m.first),fo(m=ho())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[be$1([he])],decls:11,vars:16,consts:[[`POItemsOri`,``],[`POItemsSelected`,``],[1,`po-row`,`po-pb-2`],[1,`po-md-6`],[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[`p-selectable`,`true`,`p-infinite-scroll-distance`,`80`,`p-height`,`300`,3,`p-selected`,`p-unselected`,`p-delete-items`,`p-columns`,`p-infinite-scroll`,`p-hide-select-all`,`p-hide-table-search`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`],[`p-height`,`300`,3,`p-columns`,`p-hide-table-search`,`p-striped`,`p-infinite-scroll`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`]],template:function(l,a){l&1&&(Ac(0,`div`,2)(1,`div`,3)(2,`div`,4),vN(3,`Choose one or more heroes for your team`),ug(),Ac(4,`po-table`,5,0),pt$1(`p-selected`,function(p){return a.changeOptions(p,`new`)})(`p-unselected`,function(p){return a.changeOptions(p,`change`)})(`p-delete-items`,function(p){return a.deleteItems(p)}),ug()(),Ac(6,`div`,3)(7,`div`,4),vN(8,`Here your chosen heroes`),ug(),Kc(9,`po-table`,6,1),ug()()),l&2&&(Hp(4),cE(`p-columns`,a.columns)(`p-infinite-scroll`,!0)(`p-hide-select-all`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1),Hp(5),cE(`p-columns`,a.columns)(`p-hide-table-search`,!1)(`p-striped`,!0)(`p-infinite-scroll`,!0)(`p-items`,a.itemsSelected)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1))},dependencies:[m4],encapsulation:2,changeDetection:1})}return r})();var Jt=r=>({"docs-sample-code-tabs":r});var mt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table - Heroes`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-heroes/sample-po-table-heroes.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row po-pb-2">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-heroes/sample-po-table-heroes.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-table-heroes/sample-po-table-heroes.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-table-heroes`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Jt,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,rt],encapsulation:2,changeDetection:1})}return r})();var Kt=()=>({code:`001`,table:`PO Table`,angular:`PO-UI`});var Zt=r=>[r];var dt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-draggable`]],standalone:!1,decls:4,vars:7,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-items`,`p-draggable`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(l,a){l&1&&(Ac(0,`div`,0),vN(1,` Choose one column and drag to another horizontal position in the table and drop
`),ug(),Kc(2,`po-divider`)(3,`po-table`,1)),l&2&&(Hp(3),cE(`p-items`,AN(5,Zt,RN(4,Kt)))(`p-draggable`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[ob,m4],encapsulation:2,changeDetection:1})}return r})();var en=r=>({"docs-sample-code-tabs":r});var st=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-draggable-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table Drag and Drop`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-draggable/sample-po-table-draggable.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-draggable/sample-po-table-draggable.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-table-draggable`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,en,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,dt],encapsulation:2,changeDetection:1})}return r})();function nn(r,W){if(r&1){let o=Bx();Ac(0,`po-filter-chip`,6),pt$1(`p-selected-change`,function(a){let m=Jv(o).$implicit,p=Wx();return e_(p.onSuggestionChange(m,a))}),ug()}if(r&2){let o=W.$implicit,l=Wx();cE(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}var pt=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=[`salário acima de 15000`,`funcionários de Curitiba`,`departamento Engenharia com salário acima de 10000`,`admitidos depois de 2020`,`com menos de 30 anos`,`de São Paulo com salário abaixo de 15000`,`departamento Design`,`salário entre 8000 e 12000`];AI_URL=`https://po-sample-api.onrender.com/v1/ai/filter`;columns=[{property:`name`,label:`Nome`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`},{property:`department`,label:`Departamento`},{property:`salary`,label:`Salário`,type:`currency`,format:`BRL`},{property:`hireDate`,label:`Admissão`,type:`date`}];items=[{name:`Tony Stark`,age:34,city:`São Paulo`,department:`Engenharia`,salary:12e3,hireDate:`2019-03-15`},{name:`Rachel Green`,age:28,city:`Curitiba`,department:`Design`,salary:8500,hireDate:`2021-07-01`},{name:`Michael Scott`,age:42,city:`São Paulo`,department:`Gestão`,salary:18e3,hireDate:`2015-11-20`},{name:`Hermione Granger`,age:25,city:`Recife`,department:`Engenharia`,salary:7200,hireDate:`2023-01-10`},{name:`Walter White`,age:30,city:`Belo Horizonte`,department:`Design`,salary:9500,hireDate:`2020-05-18`},{name:`Monica Geller`,age:38,city:`Rio de Janeiro`,department:`Gestão`,salary:15e3,hireDate:`2017-09-03`},{name:`Peter Parker`,age:27,city:`São Paulo`,department:`Engenharia`,salary:1e4,hireDate:`2022-04-12`},{name:`Daenerys Targaryen`,age:45,city:`Curitiba`,department:`Engenharia`,salary:21e3,hireDate:`2012-06-30`}];searchAiField={url:this.AI_URL,placeholder:`Ex: engenheiros de São Paulo com salário acima de 10000`};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||r)(E(Au))};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-search-ai`]],viewQuery:function(l,a){if(l&1&&Xc(m4,5),l&2){let m;fo(m=ho())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,`po-font-text-large-bold`,`po-mt-2`,`po-mb-1`],[1,`po-font-text-small`,`po-mb-2`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[3,`p-search-ai-result`,`p-search-ai-low-confidence`,`p-search-ai-error`,`p-columns`,`p-items`,`p-search-ai-field`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`]],template:function(l,a){l&1&&(Ac(0,`p`,0),vN(1,`PO Search A.I.`),ug(),Ac(2,`p`,1),vN(3,` O `),Ac(4,`strong`),vN(5,`PO Search A.I.`),ug(),vN(6,` é um recurso de busca inteligente integrado ao `),Ac(7,`code`),vN(8,`po-table`),ug(),vN(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),ug(),Ac(10,`p`,2),vN(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),ug(),Ac(12,`div`,3),Ox(13,nn,1,3,`po-filter-chip`,4,Nx),ug(),Ac(15,`po-table`,5),pt$1(`p-search-ai-result`,function(p){return a.onAiResult(p)})(`p-search-ai-low-confidence`,function(p){return a.onAiLowConfidence(p)})(`p-search-ai-error`,function(p){return a.onAiError(p)}),ug()),l&2&&(Hp(13),kx(a.examples),Hp(2),cE(`p-columns`,a.columns)(`p-items`,a.items)(`p-search-ai-field`,a.searchAiField))},dependencies:[voe,m4],encapsulation:2})}return r})();var on=r=>({"docs-sample-code-tabs":r});var ct=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-search-ai-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Table - Search A.I.`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return a.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
<p class="po-font-text-small po-mb-2" style="color: var(--color-neutral-mid-tone)">
  O <strong>PO Search A.I.</strong> \xE9 um recurso de busca inteligente integrado ao <code>po-table</code> que utiliza
  intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve
  o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa
  inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
</p>
<p class="po-font-text-small po-mt-2 po-mb-1" style="color: var(--color-neutral-mid-tone)">
  Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
</p>
<div class="po-mb-1" style="display: flex; flex-wrap: wrap; gap: 0.5rem">
  @for (ex of examples; track ex) {
    <po-filter-chip
      [p-label]="ex"
      [p-selected]="selectedSuggestion === ex"
      [p-disabled]="suggestionsLocked && selectedSuggestion !== ex"
      (p-selected-change)="onSuggestionChange(ex, $event)"
    ></po-filter-chip>
  }
</div>
<po-table
  [p-columns]="columns"
  [p-items]="items"
  [p-search-ai-field]="searchAiField"
  (p-search-ai-result)="onAiResult($event)"
  (p-search-ai-low-confidence)="onAiLowConfidence($event)"
  (p-search-ai-error)="onAiError($event)"
>
</po-table>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild } from '@angular/core';

import {
  PoFilterChipSelectedChange,
  PoNotificationService,
  PoSearchAiError,
  PoSearchAiResult,
  PoTableColumn,
  PoTableComponent,
  PoTableSearchAiField
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-search-ai',
  templateUrl: './sample-po-table-search-ai.component.html',
  standalone: false
})
export class SamplePoTableSearchAiComponent {
  @ViewChild(PoTableComponent) table: PoTableComponent;

  selectedSuggestion: string;
  suggestionsLocked = false;

  readonly examples: Array<string> = [
    'sal\xE1rio acima de 15000',
    'funcion\xE1rios de Curitiba',
    'departamento Engenharia com sal\xE1rio acima de 10000',
    'admitidos depois de 2020',
    'com menos de 30 anos',
    'de S\xE3o Paulo com sal\xE1rio abaixo de 15000',
    'departamento Design',
    'sal\xE1rio entre 8000 e 12000'
  ];

  AI_URL = 'https://po-sample-api.onrender.com/v1/ai/filter';
  readonly columns: Array<PoTableColumn> = [
    { property: 'name', label: 'Nome' },
    { property: 'age', label: 'Idade', type: 'number' },
    { property: 'city', label: 'Cidade' },
    { property: 'department', label: 'Departamento' },
    { property: 'salary', label: 'Sal\xE1rio', type: 'currency', format: 'BRL' },
    { property: 'hireDate', label: 'Admiss\xE3o', type: 'date' }
  ];

  readonly items: Array<any> = [
    { name: 'Tony Stark', age: 34, city: 'S\xE3o Paulo', department: 'Engenharia', salary: 12000, hireDate: '2019-03-15' },
    { name: 'Rachel Green', age: 28, city: 'Curitiba', department: 'Design', salary: 8500, hireDate: '2021-07-01' },
    { name: 'Michael Scott', age: 42, city: 'S\xE3o Paulo', department: 'Gest\xE3o', salary: 18000, hireDate: '2015-11-20' },
    {
      name: 'Hermione Granger',
      age: 25,
      city: 'Recife',
      department: 'Engenharia',
      salary: 7200,
      hireDate: '2023-01-10'
    },
    {
      name: 'Walter White',
      age: 30,
      city: 'Belo Horizonte',
      department: 'Design',
      salary: 9500,
      hireDate: '2020-05-18'
    },
    {
      name: 'Monica Geller',
      age: 38,
      city: 'Rio de Janeiro',
      department: 'Gest\xE3o',
      salary: 15000,
      hireDate: '2017-09-03'
    },
    {
      name: 'Peter Parker',
      age: 27,
      city: 'S\xE3o Paulo',
      department: 'Engenharia',
      salary: 10000,
      hireDate: '2022-04-12'
    },
    {
      name: 'Daenerys Targaryen',
      age: 45,
      city: 'Curitiba',
      department: 'Engenharia',
      salary: 21000,
      hireDate: '2012-06-30'
    }
  ];

  readonly searchAiField: PoTableSearchAiField = {
    url: this.AI_URL,
    placeholder: 'Ex: engenheiros de S\xE3o Paulo com sal\xE1rio acima de 10000'
  };

  private readonly SUGGESTION_LOCK_TIME = 3000;
  private lockTimeout: ReturnType<typeof setTimeout>;

  constructor(private poNotification: PoNotificationService) {}

  applySuggestion(query: string): void {
    this.table.updateSearchAIQuery(query, true);
  }

  onSuggestionChange(query: string, event: PoFilterChipSelectedChange): void {
    if (!event.selected || this.suggestionsLocked) {
      return;
    }

    this.selectedSuggestion = query;
    this.applySuggestion(query);
    this.lockSuggestions();
  }

  onAiResult(result: PoSearchAiResult): void {
    this.poNotification.success(\`Busca conclu\xEDda para "\${result.query}".\`);
  }

  onAiLowConfidence(result: PoSearchAiResult): void {
    this.poNotification.warning(
      \`Baixa confian\xE7a (\${Math.round((result.confidence ?? 0) * 100)}%): verifique se o resultado reflete a busca por "\${result.query}".\`
    );
  }

  onAiError(error: PoSearchAiError): void {
    this.poNotification.error(\`Erro \${error.statusCode}: \${error.message}\`);
  }

  private lockSuggestions(): void {
    this.suggestionsLocked = true;
    clearTimeout(this.lockTimeout);
    this.lockTimeout = setTimeout(() => {
      this.suggestionsLocked = false;
    }, this.SUGGESTION_LOCK_TIME);
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-table-search-ai`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+a.sampleCodeButtonIcon),Hp(),mg(` `,a.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,on,a.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,pt],encapsulation:2,changeDetection:1})}return r})();var ut=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Hn({type:r,selectors:[[`sample-po-table-doc`]],standalone:!1,decls:5451,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table-row-template`],[`href`,`/documentation/po-table-column-template`],[`href`,`/documentation/po-table-cell-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableAction[]`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn[]`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoTableLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTableSearchAiField`],[`href`,`https://github.com/po-ui/po-sample-api`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`{`,`key:`,`value`,`}`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumnSortType`],[`pan`,``,1,`docs-api-property-type`,`PoTableBoolean`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoTableDetail`],[`href`,`https://angular.dev/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnIcon>`],[`href`,`documentation/po-table#tableColumnIcon`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnLabel>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableSubtitleColumn>`],[`pan`,``,1,`docs-api-property-type`,`'auto'`],[`pan`,``,1,`docs-api-property-type`,`'parser'`],[`pan`,``,1,`docs-api-property-type`,`'server'`],[`pan`,``,1,`docs-api-property-type`,`'none'`],[`pan`,``,1,`docs-api-property-type`,`((result:`,`PoSearchAiResult)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`tableColumnIcon`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableDetailColumn>`]],template:function(l,a){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-table`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoTableComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),ug(),Ac(15,`p`),vN(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Ac(17,`strong`),vN(18,`Carregar mais resultados`),ug(),vN(19,`.`),ug(),Ac(20,`blockquote`)(21,`p`),vN(22,`As linhas de detalhes podem também ser customizadas através do `),Ac(23,`a`,6)(24,`code`),vN(25,`p-table-row-template`),ug()(),vN(26,`.`),ug()(),Ac(27,`blockquote`)(28,`p`),vN(29,`As colunas podem ser customizadas através dos templates `),Ac(30,`a`,7)(31,`code`),vN(32,`p-table-column-template`),ug()(),vN(33,`
e `),Ac(34,`a`,8)(35,`code`),vN(36,`p-table-cell-template`),ug()(),vN(37,`.`),ug()(),Ac(38,`p`),vN(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),ug(),Ac(40,`p`),vN(41,`Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um `),Ac(42,`em`),vN(43,`scroll`),ug(),vN(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),ug(),Ac(45,`h4`),vN(46,`Tokens customizáveis`),ug(),Ac(47,`p`),vN(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(49,`blockquote`)(50,`p`),vN(51,`Para maiores informações, acesse o guia `),Ac(52,`a`,9),vN(53,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(54,`.`),ug()(),Ac(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),vN(59,`Propriedade`),ug(),Ac(60,`th`),vN(61,`Descrição`),ug(),Ac(62,`th`),vN(63,`Valor Padrão`),ug()()(),Ac(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),vN(68,`Default Values`),ug()(),Kc(69,`td`)(70,`td`),ug(),Ac(71,`tr`)(72,`td`)(73,`code`),vN(74,`--font-family`),ug()(),Ac(75,`td`),vN(76,`Família tipográfica usada`),ug(),Ac(77,`td`)(78,`code`),vN(79,`var(--font-family-theme)`),ug()()(),Ac(80,`tr`)(81,`td`)(82,`code`),vN(83,`--background-color`),ug()(),Ac(84,`td`),vN(85,`Cor de background`),ug(),Ac(86,`td`)(87,`code`),vN(88,`var(--color-neutral-light-00)`),ug()()(),Ac(89,`tr`)(90,`td`)(91,`code`),vN(92,`--color`),ug()(),Ac(93,`td`),vN(94,`Cor principal da table`),ug(),Ac(95,`td`)(96,`code`),vN(97,`var(--color-neutral-dark-95)`),ug()()(),Ac(98,`tr`)(99,`td`)(100,`code`),vN(101,`--background-striped-color`),ug()(),Ac(102,`td`),vN(103,`Cor do background quando striped`),ug(),Ac(104,`td`)(105,`code`),vN(106,`var(--color-neutral-light-05)`),ug()()(),Ac(107,`tr`)(108,`td`)(109,`code`),vN(110,`--color-line`),ug()(),Ac(111,`td`),vN(112,`Cor das linhas`),ug(),Ac(113,`td`)(114,`code`),vN(115,`var(--color-neutral-mid-40)`),ug()()(),Ac(116,`tr`)(117,`td`)(118,`strong`),vN(119,`Hover`),ug()(),Kc(120,`td`)(121,`td`),ug(),Ac(122,`tr`)(123,`td`)(124,`code`),vN(125,`--color-hover`),ug()(),Ac(126,`td`),vN(127,`Cor principal no estado hover`),ug(),Ac(128,`td`)(129,`code`),vN(130,`var(--color-action-hover)`),ug()()(),Ac(131,`tr`)(132,`td`)(133,`code`),vN(134,`--background-color-hover`),ug()(),Ac(135,`td`),vN(136,`Cor de background no estado hover`),ug(),Ac(137,`td`)(138,`code`),vN(139,`var(--color-brand-01-lighter)`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`strong`),vN(143,`Focused`),ug()(),Kc(144,`td`)(145,`td`),ug(),Ac(146,`tr`)(147,`td`)(148,`code`),vN(149,`--outline-color-focused`),ug()(),Ac(150,`td`),vN(151,`Cor do outline do estado de focus`),ug(),Ac(152,`td`)(153,`code`),vN(154,`var(--color-action-focus)`),ug()()(),Ac(155,`tr`)(156,`td`)(157,`strong`),vN(158,`Disabled`),ug()(),Kc(159,`td`)(160,`td`),ug(),Ac(161,`tr`)(162,`td`)(163,`code`),vN(164,`--color-disabled`),ug()(),Ac(165,`td`),vN(166,`Cor principal no estado disabled`),ug(),Ac(167,`td`)(168,`code`),vN(169,`var(--color-neutral-mid-40)`),ug()()(),Ac(170,`tr`)(171,`td`)(172,`strong`),vN(173,`Headline`),ug()(),Kc(174,`td`)(175,`td`),ug(),Ac(176,`tr`)(177,`td`)(178,`code`),vN(179,`--background-color-headline`),ug(),vN(180,` \xA0`),ug(),Ac(181,`td`),vN(182,`Cor do cabeçalho`),ug(),Ac(183,`td`)(184,`code`),vN(185,`var(--color-neutral-light-10)`),ug()()(),Ac(186,`tr`)(187,`td`)(188,`code`),vN(189,`--font-weight-headline`),ug()(),Ac(190,`td`),vN(191,`Peso da fonte do cabeçalho`),ug(),Ac(192,`td`)(193,`code`),vN(194,`var(--font-weight-bold)`),ug()()(),Ac(195,`tr`)(196,`td`)(197,`strong`),vN(198,`Selected`),ug()(),Kc(199,`td`)(200,`td`),ug(),Ac(201,`tr`)(202,`td`)(203,`code`),vN(204,`--background-color-selected`),ug(),vN(205,`\xA0`),ug(),Ac(206,`td`),vN(207,`Cor de background no estado de selecionado`),ug(),Ac(208,`td`)(209,`code`),vN(210,`var(--color-brand-01-lightest)`),ug()()(),Ac(211,`tr`)(212,`td`)(213,`strong`),vN(214,`Actived`),ug()(),Kc(215,`td`)(216,`td`),ug(),Ac(217,`tr`)(218,`td`)(219,`code`),vN(220,`--color-actived`),ug()(),Ac(221,`td`),vN(222,`Cor do texto no estado de selecionado`),ug(),Ac(223,`td`)(224,`code`),vN(225,`var(--color-neutral-dark-90)`),ug()()(),Ac(226,`tr`)(227,`td`)(228,`code`),vN(229,`--background-color-actived`),ug()(),Ac(230,`td`),vN(231,`Cor de background no estado de selecionado`),ug(),Ac(232,`td`)(233,`code`),vN(234,`var(--color-brand-01-light)`),ug()()()()()(),Ac(235,`div`,10)(236,`h4`,11),vN(237,`Seletor`),ug(),Ac(238,`pre`,12),vN(239,`<po-table
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
    (p-search-ai-error)="EventEmitter"
    p-search-ai-field="PoTableSearchAiField"
    (p-search-ai-low-confidence)="EventEmitter"
    (p-search-ai-result)="EventEmitter"
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
`),ug()(),Ac(240,`h4`,13),vN(241,`Propriedades`),ug(),Ac(242,`table`,14)(243,`tr`,15)(244,`th`,16),vN(245,`Nome`),ug(),Ac(246,`th`,16),vN(247,`Tipo`),ug(),Ac(248,`th`,16),vN(249,`Padrão`),ug(),Ac(250,`th`,16),vN(251,`Descrição`),ug()(),Ac(252,`tr`,17)(253,`td`,18)(254,`div`,19)(255,`span`,20),vN(256,` p-actions-right`),Kc(257,`br`),ug()()(),Ac(258,`td`,21)(259,`code`,22),vN(260,`boolean`),ug()(),Ac(261,`td`,23)(262,`p`)(263,`code`),vN(264,`false`),ug()()(),Ac(265,`td`,24)(266,`em`)(267,`strong`),vN(268,`(opcional)`),ug()(),Ac(269,`p`),vN(270,`Define que a coluna de ações ficará no lado direito da tabela.`),ug()()(),Ac(271,`tr`,17)(272,`td`,18)(273,`div`,19)(274,`span`,20),vN(275,` p-actions`),Kc(276,`br`),ug()()(),Ac(277,`td`,21)(278,`code`,25),vN(279,`PoTableAction[]`),ug()(),Ac(280,`td`,23),vN(281,`-`),ug(),Ac(282,`td`,24)(283,`em`)(284,`strong`),vN(285,`(opcional)`),ug()(),Ac(286,`p`),vN(287,`Define uma lista de ações.`),ug(),Ac(288,`p`),vN(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Ac(290,`a`,26)(291,`strong`),vN(292,`an an-dots-three`),ug()(),vN(293,` que listará as ações ao ser clicado.`),ug(),Ac(294,`p`)(295,`strong`),vN(296,`A coluna de ações não será exibida quando:`),ug()(),Ac(297,`ul`)(298,`li`),vN(299,`a lista conter valores inválidos ou indefinidos.`),ug(),Ac(300,`li`),vN(301,`tenha uma única ação e a mesma não for visível.`),ug()()()(),Ac(302,`tr`,17)(303,`td`,18)(304,`div`,27)(305,`span`,28),vN(306,` (p-all-selected)`),Kc(307,`br`),ug()()(),Ac(308,`td`,21)(309,`code`,29),vN(310,`EventEmitter`),ug()(),Ac(311,`td`,23),vN(312,`-`),ug(),Ac(313,`td`,24)(314,`em`)(315,`strong`),vN(316,`(opcional)`),ug()(),Ac(317,`p`),vN(318,`Evento executado quando todas as linhas são selecionadas por meio do `),Ac(319,`em`),vN(320,`checkbox`),ug(),vN(321,` que seleciona todas as linhas.`),ug()()(),Ac(322,`tr`,17)(323,`td`,18)(324,`div`,27)(325,`span`,28),vN(326,` (p-all-unselected)`),Kc(327,`br`),ug()()(),Ac(328,`td`,21)(329,`code`,29),vN(330,`EventEmitter`),ug()(),Ac(331,`td`,23),vN(332,`-`),ug(),Ac(333,`td`,24)(334,`em`)(335,`strong`),vN(336,`(opcional)`),ug()(),Ac(337,`p`),vN(338,`Evento executado quando a seleção das linhas é desmarcada por meio do `),Ac(339,`em`),vN(340,`checkbox`),ug(),vN(341,` que seleciona todas as linhas.`),ug()()(),Ac(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),vN(346,` p-auto-collapse`),Kc(347,`br`),ug()()(),Ac(348,`td`,21)(349,`code`,22),vN(350,`boolean`),ug()(),Ac(351,`td`,23)(352,`p`)(353,`code`),vN(354,`false`),ug()()(),Ac(355,`td`,24)(356,`em`)(357,`strong`),vN(358,`(opcional)`),ug()(),Ac(359,`p`),vN(360,`Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.`),ug()()(),Ac(361,`tr`,17)(362,`td`,18)(363,`div`,27)(364,`span`,28),vN(365,` (p-change-fixed-columns)`),Kc(366,`br`),ug()()(),Ac(367,`td`,21)(368,`code`,29),vN(369,`EventEmitter`),ug()(),Ac(370,`td`,23),vN(371,`-`),ug(),Ac(372,`td`,24)(373,`em`)(374,`strong`),vN(375,`(opcional)`),ug()(),Ac(376,`p`),vN(377,`Evento disparado ao alterar o estado de fixação de uma coluna no gerenciador de colunas.`),ug(),Ac(378,`p`),vN(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),ug(),Ac(380,`blockquote`)(381,`p`),vN(382,`Incompatível com `),Ac(383,`code`),vN(384,`p-hide-action-fixed-columns`),ug(),vN(385,`. Quando esta propriedade estiver ativa, o evento não será disparado.`),ug()()()(),Ac(386,`tr`,17)(387,`td`,18)(388,`div`,27)(389,`span`,28),vN(390,` (p-change-visible-columns)`),Kc(391,`br`),ug()()(),Ac(392,`td`,21)(393,`code`,29),vN(394,`EventEmitter`),ug()(),Ac(395,`td`,23),vN(396,`-`),ug(),Ac(397,`td`,24)(398,`em`)(399,`strong`),vN(400,`(opcional)`),ug()(),Ac(401,`p`),vN(402,`Evento disparado ao fechar o page slide do gerenciador de colunas após alterar as colunas visíveis.`),ug(),Ac(403,`p`),vN(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug()()(),Ac(405,`tr`,17)(406,`td`,18)(407,`div`,27)(408,`span`,28),vN(409,` (p-collapsed)`),Kc(410,`br`),ug()()(),Ac(411,`td`,21)(412,`code`,29),vN(413,`EventEmitter`),ug()(),Ac(414,`td`,23),vN(415,`-`),ug(),Ac(416,`td`,24)(417,`em`)(418,`strong`),vN(419,`(opcional)`),ug()(),Ac(420,`p`),vN(421,`Evento executado ao colapsar uma linha do `),Ac(422,`code`),vN(423,`po-table`),ug(),vN(424,`.`),ug(),Ac(425,`blockquote`)(426,`p`),vN(427,`Como parâmetro o componente envia o item colapsado.`),ug()()()(),Ac(428,`tr`,17)(429,`td`,18)(430,`div`,27)(431,`span`,28),vN(432,` (p-restore-column-manager)`),Kc(433,`br`),ug()()(),Ac(434,`td`,21)(435,`code`,29),vN(436,`EventEmitter`),ug()(),Ac(437,`td`,23),vN(438,`-`),ug(),Ac(439,`td`,24)(440,`em`)(441,`strong`),vN(442,`(opcional)`),ug()(),Ac(443,`p`),vN(444,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ug(),Ac(445,`p`),vN(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug()()(),Ac(447,`tr`,17)(448,`td`,18)(449,`div`,19)(450,`span`,20),vN(451,` p-columns`),Kc(452,`br`),ug()()(),Ac(453,`td`,21)(454,`code`,30),vN(455,`PoTableColumn[]`),ug()(),Ac(456,`td`,23),vN(457,`-`),ug(),Ac(458,`td`,24)(459,`em`)(460,`strong`),vN(461,`(opcional)`),ug()(),Ac(462,`p`),vN(463,`Lista das colunas da tabela, deve receber um `),Ac(464,`em`),vN(465,`array`),ug(),vN(466,` de objetos que implementam a interface `),Ac(467,`code`),vN(468,`PoTableColumn`),ug(),vN(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),ug(),Ac(470,`blockquote`)(471,`p`),vN(472,`Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.`),ug()()()(),Ac(473,`tr`,17)(474,`td`,18)(475,`div`,19)(476,`span`,20),vN(477,` p-components-size`),Kc(478,`br`),ug()()(),Ac(479,`td`,21)(480,`code`,31),vN(481,`string`),ug()(),Ac(482,`td`,23)(483,`p`)(484,`code`),vN(485,`medium`),ug()()(),Ac(486,`td`,24)(487,`em`)(488,`strong`),vN(489,`(opcional)`),ug()(),Ac(490,`p`),vN(491,`Define o tamanho dos componentes de formulário no table:`),ug(),Ac(492,`ul`)(493,`li`)(494,`code`),vN(495,`small`),ug(),vN(496,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(497,`li`)(498,`code`),vN(499,`medium`),ug(),vN(500,`: aplica a medida medium de cada componente.`),ug()(),Ac(501,`blockquote`)(502,`p`),vN(503,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(504,`code`),vN(505,`medium`),ug(),vN(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(507,`a`,32),vN(508,`po-theme`),ug(),vN(509,`.`),ug()()()(),Ac(510,`tr`,17)(511,`td`,18)(512,`div`,19)(513,`span`,20),vN(514,` p-container`),Kc(515,`br`),ug()()(),Ac(516,`td`,21)(517,`code`,31),vN(518,`string`),ug()(),Ac(519,`td`,23)(520,`p`)(521,`code`),vN(522,`border`),ug()()(),Ac(523,`td`,24)(524,`em`)(525,`strong`),vN(526,`(opcional)`),ug()(),Ac(527,`p`),vN(528,`Adiciona um contorno arredondado ao `),Ac(529,`code`),vN(530,`po-table`),ug(),vN(531,`, as opções são:`),ug(),Ac(532,`ul`)(533,`li`)(534,`code`),vN(535,`border`),ug(),vN(536,`: com bordas/linhas.`),ug(),Ac(537,`li`)(538,`code`),vN(539,`shadow`),ug(),vN(540,`: com sombras.`),ug()()()(),Ac(541,`tr`,17)(542,`td`,18)(543,`div`,19)(544,`span`,20),vN(545,` p-draggable`),Kc(546,`br`),ug()()(),Ac(547,`td`,21)(548,`code`,22),vN(549,`boolean`),ug()(),Ac(550,`td`,23)(551,`p`)(552,`code`),vN(553,`false`),ug()()(),Ac(554,`td`,24)(555,`em`)(556,`strong`),vN(557,`(opcional)`),ug()(),Ac(558,`p`),vN(559,`Habilita o modo drag and drop para as colunas da tabela.`),ug()()(),Ac(560,`tr`,17)(561,`td`,18)(562,`div`,27)(563,`span`,28),vN(564,` (p-delete-items)`),Kc(565,`br`),ug()()(),Ac(566,`td`,21)(567,`code`,29),vN(568,`EventEmitter`),ug()(),Ac(569,`td`,23),vN(570,`-`),ug(),Ac(571,`td`,24)(572,`em`)(573,`strong`),vN(574,`(opcional)`),ug()(),Ac(575,`p`),vN(576,`Evento executado após o método de exclusão ser finalizado.`),ug(),Ac(577,`pre`)(578,`code`),vN(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),ug()(),Ac(580,`blockquote`)(581,`p`),vN(582,`Como parâmetro o componente envia a lista atualizada, sem os itens excluídos.`),ug()()()(),Ac(583,`tr`,17)(584,`td`,18)(585,`div`,27)(586,`span`,28),vN(587,` (p-expanded)`),Kc(588,`br`),ug()()(),Ac(589,`td`,21)(590,`code`,29),vN(591,`EventEmitter`),ug()(),Ac(592,`td`,23),vN(593,`-`),ug(),Ac(594,`td`,24)(595,`em`)(596,`strong`),vN(597,`(opcional)`),ug()(),Ac(598,`p`),vN(599,`Evento executado ao expandir uma linha do `),Ac(600,`code`),vN(601,`po-table`),ug(),vN(602,`.`),ug(),Ac(603,`blockquote`)(604,`p`),vN(605,`Como parâmetro o componente envia o item expandido.`),ug()()()(),Ac(606,`tr`,17)(607,`td`,18)(608,`div`,19)(609,`span`,20),vN(610,` p-filter-type`),Kc(611,`br`),ug()()(),Ac(612,`td`,21)(613,`code`,33),vN(614,`PoSearchFilterMode`),ug()(),Ac(615,`td`,23)(616,`p`)(617,`code`),vN(618,`startsWith`),ug()()(),Ac(619,`td`,24)(620,`em`)(621,`strong`),vN(622,`(opcional)`),ug()(),Ac(623,`p`),vN(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),ug(),Ac(625,`blockquote`)(626,`p`),vN(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),ug()()()(),Ac(628,`tr`,17)(629,`td`,18)(630,`div`,19)(631,`span`,20),vN(632,` p-filtered-columns`),Kc(633,`br`),ug()()(),Ac(634,`td`,21)(635,`code`,34),vN(636,`Array<string>`),ug()(),Ac(637,`td`,23),vN(638,`-`),ug(),Ac(639,`td`,24)(640,`em`)(641,`strong`),vN(642,`(opcional)`),ug()(),Ac(643,`p`),vN(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),ug()()(),Ac(645,`tr`,17)(646,`td`,18)(647,`div`,19)(648,`span`,20),vN(649,` p-height`),Kc(650,`br`),ug()()(),Ac(651,`td`,21)(652,`code`,35),vN(653,`number`),ug()(),Ac(654,`td`,23),vN(655,`-`),ug(),Ac(656,`td`,24)(657,`em`)(658,`strong`),vN(659,`(opcional)`),ug()(),Ac(660,`p`),vN(661,`Define a altura da tabela em `),Ac(662,`em`),vN(663,`pixels`),ug(),vN(664,` e fixa o cabeçalho.`),ug(),Ac(665,`p`),vN(666,`Ao utilizar essa propriedade será inserido o `),Ac(667,`code`),vN(668,`virtual-scroll`),ug(),vN(669,` na tabela melhorando a performance.`),ug()()(),Ac(670,`tr`,17)(671,`td`,18)(672,`div`,19)(673,`span`,20),vN(674,` p-hide-action-fixed-columns`),Kc(675,`br`),ug()()(),Ac(676,`td`,21)(677,`code`,22),vN(678,`boolean`),ug()(),Ac(679,`td`,23)(680,`p`)(681,`code`),vN(682,`false`),ug()()(),Ac(683,`td`,24)(684,`em`)(685,`strong`),vN(686,`(opcional)`),ug()(),Ac(687,`p`),vN(688,`Permite que as ações para fixar uma coluna da tabela sejam escondidas.`),ug()()(),Ac(689,`tr`,17)(690,`td`,18)(691,`div`,19)(692,`span`,20),vN(693,` p-hide-batch-actions`),Kc(694,`br`),ug()()(),Ac(695,`td`,21)(696,`code`,22),vN(697,`boolean`),ug()(),Ac(698,`td`,23)(699,`p`)(700,`code`),vN(701,`true`),ug()()(),Ac(702,`td`,24)(703,`em`)(704,`strong`),vN(705,`(opcional)`),ug()(),Ac(706,`p`),vN(707,`Permite que as ações em lote, responsável por excluir e exibir a quantidade de itens, sejam escondidas.`),ug()()(),Ac(708,`tr`,17)(709,`td`,18)(710,`div`,19)(711,`span`,20),vN(712,` p-hide-columns-manager`),Kc(713,`br`),ug()()(),Ac(714,`td`,21)(715,`code`,22),vN(716,`boolean`),ug()(),Ac(717,`td`,23)(718,`p`)(719,`code`),vN(720,`false`),ug()()(),Ac(721,`td`,24)(722,`em`)(723,`strong`),vN(724,`(opcional)`),ug()(),Ac(725,`p`),vN(726,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),ug()()(),Ac(727,`tr`,17)(728,`td`,18)(729,`div`,19)(730,`span`,20),vN(731,` p-hide-detail`),Kc(732,`br`),ug()()(),Ac(733,`td`,21)(734,`code`,22),vN(735,`boolean`),ug()(),Ac(736,`td`,23)(737,`p`)(738,`code`),vN(739,`false`),ug()()(),Ac(740,`td`,24)(741,`em`)(742,`strong`),vN(743,`(opcional)`),ug()(),Ac(744,`p`),vN(745,`Habilita a visualização da lista de detalhes de cada linha da coluna.`),ug()()(),Ac(746,`tr`,17)(747,`td`,18)(748,`div`,19)(749,`span`,20),vN(750,` p-hide-select-all`),Kc(751,`br`),ug()()(),Ac(752,`td`,21)(753,`code`,22),vN(754,`boolean`),ug()(),Ac(755,`td`,23)(756,`p`)(757,`code`),vN(758,`false`),ug()()(),Ac(759,`td`,24)(760,`p`),vN(761,`Esconde o `),Ac(762,`em`),vN(763,`checkbox`),ug(),vN(764,` para seleção de todas as linhas.`),ug(),Ac(765,`blockquote`)(766,`p`),vN(767,`Sempre receberá `),Ac(768,`em`),vN(769,`true`),ug(),vN(770,` caso a seleção de apenas uma linha esteja ativa.`),ug()()()(),Ac(771,`tr`,17)(772,`td`,18)(773,`div`,19)(774,`span`,20),vN(775,` p-hide-table-search`),Kc(776,`br`),ug()()(),Ac(777,`td`,21)(778,`code`,22),vN(779,`boolean`),ug()(),Ac(780,`td`,23)(781,`p`)(782,`code`),vN(783,`true`),ug()()(),Ac(784,`td`,24)(785,`em`)(786,`strong`),vN(787,`(opcional)`),ug()(),Ac(788,`p`),vN(789,`Permite que o campo de pesquisa seja escondido.`),ug()()(),Ac(790,`tr`,17)(791,`td`,18)(792,`div`,19)(793,`span`,20),vN(794,` p-infinite-scroll`),Kc(795,`br`),ug()()(),Ac(796,`td`,21)(797,`code`,22),vN(798,`boolean`),ug()(),Ac(799,`td`,23)(800,`p`)(801,`code`),vN(802,`false`),ug()()(),Ac(803,`td`,24)(804,`em`)(805,`strong`),vN(806,`(opcional)`),ug()(),Ac(807,`p`),vN(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Ac(809,`code`),vN(810,`p-show-more`),ug(),vN(811,`.`),ug(),Ac(812,`p`)(813,`strong`),vN(814,`Regras de utilização:`),ug()(),Ac(815,`ul`)(816,`li`),vN(817,`O scroll infinito só funciona para tabelas que utilizam a propriedade `),Ac(818,`code`),vN(819,`p-height`),ug(),vN(820,` e que possuem o scroll já na carga inicial dos dados.`),ug()()()(),Ac(821,`tr`,17)(822,`td`,18)(823,`div`,19)(824,`span`,20),vN(825,` p-infinite-scroll-distance`),Kc(826,`br`),ug()()(),Ac(827,`td`,21)(828,`code`,35),vN(829,`number`),ug()(),Ac(830,`td`,23),vN(831,`-`),ug(),Ac(832,`td`,24)(833,`em`)(834,`strong`),vN(835,`(opcional)`),ug()(),Ac(836,`p`),vN(837,`Define o percentual necessário para disparar o evento `),Ac(838,`code`),vN(839,`p-show-more`),ug(),vN(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),ug(),Ac(841,`p`)(842,`strong`),vN(843,`Exemplos:`),ug()(),Ac(844,`ul`)(845,`li`),vN(846,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o `),Ac(847,`code`),vN(848,`p-show-more`),ug(),vN(849,` será disparado.`),ug()()()(),Ac(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),vN(854,` p-items`),Kc(855,`br`),ug()()(),Ac(856,`td`,21)(857,`code`,36),vN(858,`any[]`),ug()(),Ac(859,`td`,23),vN(860,`-`),ug(),Ac(861,`td`,24)(862,`p`),vN(863,`Lista de itens da tabela.`),ug(),Ac(864,`blockquote`)(865,`p`),vN(866,`Se falso, será inicializado como um `),Ac(867,`em`),vN(868,`array`),ug(),vN(869,` vazio.`),ug()()()(),Ac(870,`tr`,17)(871,`td`,18)(872,`div`,19)(873,`span`,20),vN(874,` p-literals`),Kc(875,`br`),ug()()(),Ac(876,`td`,21)(877,`code`,37),vN(878,`PoTableLiterals`),ug()(),Ac(879,`td`,23),vN(880,`-`),ug(),Ac(881,`td`,24)(882,`em`)(883,`strong`),vN(884,`(opcional)`),ug()(),Ac(885,`p`),vN(886,`Objeto com as literais usadas no `),Ac(887,`code`),vN(888,`po-table`),ug(),vN(889,`.`),ug(),Ac(890,`p`),vN(891,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(892,`pre`)(893,`code`),vN(894,`const customLiterals: PoTableLiterals = {
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
`),ug()(),Ac(895,`p`),vN(896,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(897,`pre`)(898,`code`),vN(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),ug()(),Ac(900,`p`),vN(901,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(902,`pre`)(903,`code`),vN(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),ug()(),Ac(905,`blockquote`)(906,`p`),vN(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(908,`a`,38)(909,`code`),vN(910,`PoI18nService`),ug()(),vN(911,` ou do browser.`),ug()()()(),Ac(912,`tr`,17)(913,`td`,18)(914,`div`,19)(915,`span`,20),vN(916,` p-loading`),Kc(917,`br`),ug()()(),Ac(918,`td`,21)(919,`code`,22),vN(920,`boolean`),ug()(),Ac(921,`td`,23)(922,`p`)(923,`code`),vN(924,`false`),ug()()(),Ac(925,`td`,24)(926,`em`)(927,`strong`),vN(928,`(opcional)`),ug()(),Ac(929,`p`),vN(930,`Bloqueia a interação do usuário com os dados da `),Ac(931,`em`),vN(932,`table`),ug(),vN(933,`.`),ug()()(),Ac(934,`tr`,17)(935,`td`,18)(936,`div`,19)(937,`span`,20),vN(938,` p-loading-show-more`),Kc(939,`br`),ug()()(),Ac(940,`td`,21)(941,`code`,22),vN(942,`boolean`),ug()(),Ac(943,`td`,23)(944,`p`)(945,`code`),vN(946,`false`),ug()()(),Ac(947,`td`,24)(948,`em`)(949,`strong`),vN(950,`(opcional)`),ug()(),Ac(951,`p`),vN(952,`Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".`),ug()()(),Ac(953,`tr`,17)(954,`td`,18)(955,`div`,19)(956,`span`,20),vN(957,` p-max-columns`),Kc(958,`br`),ug()()(),Ac(959,`td`,21)(960,`code`,35),vN(961,`number`),ug()(),Ac(962,`td`,23),vN(963,`-`),ug(),Ac(964,`td`,24)(965,`em`)(966,`strong`),vN(967,`(opcional)`),ug()(),Ac(968,`p`),vN(969,`Define uma quantidade máxima de colunas que serão exibidas na tabela.`),ug(),Ac(970,`p`),vN(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),ug()()(),Ac(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),vN(976,` p-param-delete-api`),Kc(977,`br`),ug()()(),Ac(978,`td`,21)(979,`code`,31),vN(980,`string`),ug()(),Ac(981,`td`,23)(982,`p`)(983,`code`),vN(984,`id`),ug()()(),Ac(985,`td`,24)(986,`em`)(987,`strong`),vN(988,`(opcional)`),ug()(),Ac(989,`p`),vN(990,`Adiciona o parâmetro a ser enviado para a requisição de DELETE.`),ug(),Ac(991,`p`),vN(992,`É necessário a utilização da propriedade `),Ac(993,`code`),vN(994,`p-service-delete`),ug(),vN(995,` em conjunto.`),ug()()(),Ac(996,`tr`,17)(997,`td`,18)(998,`div`,27)(999,`span`,28),vN(1e3,` (p-search-ai-error)`),Kc(1001,`br`),ug()()(),Ac(1002,`td`,21)(1003,`code`,29),vN(1004,`EventEmitter`),ug()(),Ac(1005,`td`,23),vN(1006,`-`),ug(),Ac(1007,`td`,24)(1008,`em`)(1009,`strong`),vN(1010,`(opcional)`),ug()(),Ac(1011,`p`),vN(1012,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),Ac(1013,`code`),vN(1014,`p-search-ai-field`),ug(),vN(1015,`.`),ug(),Ac(1016,`p`),vN(1017,`O parâmetro enviado é um objeto `),Ac(1018,`code`),vN(1019,`PoSearchAiError`),ug(),vN(1020,` contendo:`),ug(),Ac(1021,`ul`)(1022,`li`)(1023,`code`),vN(1024,`statusCode`),ug(),vN(1025,`: código HTTP do erro (ex: `),Ac(1026,`code`),vN(1027,`408`),ug(),vN(1028,` para timeout, `),Ac(1029,`code`),vN(1030,`500`),ug(),vN(1031,` para erro interno).`),ug(),Ac(1032,`li`)(1033,`code`),vN(1034,`message`),ug(),vN(1035,`: mensagem descritiva do erro.`),ug()()()(),Ac(1036,`tr`,17)(1037,`td`,18)(1038,`div`,19)(1039,`span`,20),vN(1040,` p-search-ai-field`),Kc(1041,`br`),ug()()(),Ac(1042,`td`,21)(1043,`code`,39),vN(1044,`PoTableSearchAiField`),ug()(),Ac(1045,`td`,23),vN(1046,`-`),ug(),Ac(1047,`td`,24)(1048,`em`)(1049,`strong`),vN(1050,`(opcional)`),ug()(),Ac(1051,`p`),vN(1052,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),Ac(1053,`code`),vN(1054,`po-search`),ug(),vN(1055,`) pelo componente `),Ac(1056,`code`),vN(1057,`po-search-ai`),ug(),vN(1058,` na barra de ações.`),ug(),Ac(1059,`p`),vN(1060,`Recebe um objeto do tipo `),Ac(1061,`code`),vN(1062,`PoTableSearchAiField`),ug(),vN(1063,` com as configurações necessárias:`),ug(),Ac(1064,`ul`)(1065,`li`)(1066,`code`),vN(1067,`url`),ug(),Ac(1068,`em`),vN(1069,`(obrigatório)`),ug(),vN(1070,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),Ac(1071,`a`,40)(1072,`code`),vN(1073,`po-sample-api`),ug()(),vN(1074,`.`),ug(),Ac(1075,`li`)(1076,`code`),vN(1077,`columns`),ug(),vN(1078,`: lista de colunas enviadas à IA; quando omitida, são derivadas de `),Ac(1079,`code`),vN(1080,`p-columns`),ug(),vN(1081,`.`),ug(),Ac(1082,`li`)(1083,`code`),vN(1084,`minConfidence`),ug(),vN(1085,`: confiança mínima para aplicação automática do filtro (padrão `),Ac(1086,`code`),vN(1087,`0.5`),ug(),vN(1088,`).`),ug(),Ac(1089,`li`)(1090,`code`),vN(1091,`timeout`),ug(),vN(1092,`: tempo máximo de espera pela resposta da IA em ms (padrão `),Ac(1093,`code`),vN(1094,`10000`),ug(),vN(1095,`).`),ug(),Ac(1096,`li`)(1097,`code`),vN(1098,`placeholder`),ug(),vN(1099,`: texto exibido como placeholder no campo.`),ug(),Ac(1100,`li`)(1101,`code`),vN(1102,`literals`),ug(),vN(1103,`: literais customizadas do `),Ac(1104,`code`),vN(1105,`po-search-ai`),ug(),vN(1106,`.`),ug(),Ac(1107,`li`)(1108,`code`),vN(1109,`apply`),ug(),vN(1110,`: estratégia de aplicação do filtro — `),Ac(1111,`code`),vN(1112,`'auto'`),ug(),vN(1113,` (padrão), `),Ac(1114,`code`),vN(1115,`'parser'`),ug(),vN(1116,`, `),Ac(1117,`code`),vN(1118,`'server'`),ug(),vN(1119,`, `),Ac(1120,`code`),vN(1121,`'none'`),ug(),vN(1122,`
ou uma fun\xE7\xE3o `),Ac(1123,`code`),vN(1124,`(result: PoSearchAiResult) => void`),ug(),vN(1125,`.`),ug()(),Ac(1126,`p`),vN(1127,`Quando esta propriedade está definida, os eventos `),Ac(1128,`code`),vN(1129,`p-search-ai-result`),ug(),vN(1130,`, `),Ac(1131,`code`),vN(1132,`p-search-ai-low-confidence`),ug(),vN(1133,`
e `),Ac(1134,`code`),vN(1135,`p-search-ai-error`),ug(),vN(1136,` ficam disponíveis para tratamento customizado.`),ug()()(),Ac(1137,`tr`,17)(1138,`td`,18)(1139,`div`,27)(1140,`span`,28),vN(1141,` (p-search-ai-low-confidence)`),Kc(1142,`br`),ug()()(),Ac(1143,`td`,21)(1144,`code`,29),vN(1145,`EventEmitter`),ug()(),Ac(1146,`td`,23),vN(1147,`-`),ug(),Ac(1148,`td`,24)(1149,`em`)(1150,`strong`),vN(1151,`(opcional)`),ug()(),Ac(1152,`p`),vN(1153,`Evento emitido quando o `),Ac(1154,`code`),vN(1155,`po-search-ai`),ug(),vN(1156,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),Ac(1157,`code`),vN(1158,`minConfidence`),ug(),vN(1159,` configurado em `),Ac(1160,`code`),vN(1161,`p-search-ai-field`),ug(),vN(1162,`. Nesse caso, o filtro `),Ac(1163,`strong`),vN(1164,`não`),ug(),vN(1165,` \xE9 aplicado
automaticamente.`),ug(),Ac(1166,`p`),vN(1167,`O parâmetro enviado é um objeto `),Ac(1168,`code`),vN(1169,`PoSearchAiResult`),ug(),vN(1170,` com os mesmos campos de `),Ac(1171,`code`),vN(1172,`p-search-ai-result`),ug(),vN(1173,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),ug()()(),Ac(1174,`tr`,17)(1175,`td`,18)(1176,`div`,27)(1177,`span`,28),vN(1178,` (p-search-ai-result)`),Kc(1179,`br`),ug()()(),Ac(1180,`td`,21)(1181,`code`,29),vN(1182,`EventEmitter`),ug()(),Ac(1183,`td`,23),vN(1184,`-`),ug(),Ac(1185,`td`,24)(1186,`em`)(1187,`strong`),vN(1188,`(opcional)`),ug()(),Ac(1189,`p`),vN(1190,`Evento emitido quando o `),Ac(1191,`code`),vN(1192,`po-search-ai`),ug(),vN(1193,` retorna um resultado com confian\xE7a igual ou superior
ao `),Ac(1194,`code`),vN(1195,`minConfidence`),ug(),vN(1196,` configurado em `),Ac(1197,`code`),vN(1198,`p-search-ai-field`),ug(),vN(1199,`.`),ug(),Ac(1200,`p`),vN(1201,`O parâmetro enviado é um objeto `),Ac(1202,`code`),vN(1203,`PoSearchAiResult`),ug(),vN(1204,` contendo:`),ug(),Ac(1205,`ul`)(1206,`li`)(1207,`code`),vN(1208,`filter`),ug(),vN(1209,`: string de filtro OData v4 gerada pela IA (ex: `),Ac(1210,`code`),vN(1211,`"city eq 'SP' and salary gt 5000"`),ug(),vN(1212,`).`),ug(),Ac(1213,`li`)(1214,`code`),vN(1215,`description`),ug(),vN(1216,`: descrição em linguagem natural do filtro aplicado.`),ug(),Ac(1217,`li`)(1218,`code`),vN(1219,`confidence`),ug(),vN(1220,`: nível de confiança da resposta (0.0 a 1.0).`),ug()(),Ac(1221,`blockquote`)(1222,`p`),vN(1223,`Quando `),Ac(1224,`code`),vN(1225,`apply`),ug(),vN(1226,` for diferente de `),Ac(1227,`code`),vN(1228,`'none'`),ug(),vN(1229,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),ug()()()(),Ac(1230,`tr`,17)(1231,`td`,18)(1232,`div`,19)(1233,`span`,20),vN(1234,` p-selectable`),Kc(1235,`br`),ug()()(),Ac(1236,`td`,21)(1237,`code`,22),vN(1238,`boolean`),ug()(),Ac(1239,`td`,23)(1240,`p`)(1241,`code`),vN(1242,`false`),ug()()(),Ac(1243,`td`,24)(1244,`em`)(1245,`strong`),vN(1246,`(opcional)`),ug()(),Ac(1247,`p`),vN(1248,`Permite a seleção de linhas na tabela e, caso a propriedade `),Ac(1249,`code`),vN(1250,`p-single-select`),ug(),vN(1251,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),ug(),Ac(1252,`p`)(1253,`strong`),vN(1254,`Importante:`),ug()(),Ac(1255,`ul`)(1256,`li`),vN(1257,`As linhas de detalhe definidas em `),Ac(1258,`code`),vN(1259,`PoTableDetail`),ug(),vN(1260,` possuem comportamento independente da linha mestre;`),ug(),Ac(1261,`li`),vN(1262,`Cada linha possui por padrão a propriedade dinâmica `),Ac(1263,`code`),vN(1264,`$selected`),ug(),vN(1265,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Ac(1266,`code`),vN(1267,`item.$selected`),ug(),vN(1268,` ou `),Ac(1269,`code`),vN(1270,`item['$selected']`),ug(),vN(1271,`.`),ug()()()(),Ac(1272,`tr`,17)(1273,`td`,18)(1274,`div`,19)(1275,`span`,20),vN(1276,` p-selectable-entire-line`),Kc(1277,`br`),ug()()(),Ac(1278,`td`,21)(1279,`code`,22),vN(1280,`boolean`),ug()(),Ac(1281,`td`,23)(1282,`p`)(1283,`code`),vN(1284,`true`),ug()()(),Ac(1285,`td`,24)(1286,`p`),vN(1287,`Permite selecionar um item da tabela clicando na linha.`),ug(),Ac(1288,`blockquote`)(1289,`p`),vN(1290,`Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `),Ac(1291,`code`),vN(1292,`false`),ug(),vN(1293,`.`),ug()()()(),Ac(1294,`tr`,17)(1295,`td`,18)(1296,`div`,27)(1297,`span`,28),vN(1298,` (p-selected)`),Kc(1299,`br`),ug()()(),Ac(1300,`td`,21)(1301,`code`,29),vN(1302,`EventEmitter`),ug()(),Ac(1303,`td`,23),vN(1304,`-`),ug(),Ac(1305,`td`,24)(1306,`em`)(1307,`strong`),vN(1308,`(opcional)`),ug()(),Ac(1309,`p`),vN(1310,`Evento executado ao selecionar uma linha do `),Ac(1311,`code`),vN(1312,`po-table`),ug(),vN(1313,`.`),ug()()(),Ac(1314,`tr`,17)(1315,`td`,18)(1316,`div`,19)(1317,`span`,20),vN(1318,` p-service-api`),Kc(1319,`br`),ug()()(),Ac(1320,`td`,21)(1321,`code`,31),vN(1322,`string`),ug()(),Ac(1323,`td`,23),vN(1324,`-`),ug(),Ac(1325,`td`,24)(1326,`em`)(1327,`strong`),vN(1328,`(opcional)`),ug()(),Ac(1329,`p`),vN(1330,`URL da API responsável por retornar os registros.`),ug(),Ac(1331,`p`),vN(1332,`Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `),Ac(1333,`code`),vN(1334,`page`),ug(),vN(1335,` e `),Ac(1336,`code`),vN(1337,`pageSize`),ug(),vN(1338,`, conforme abaixo:`),ug(),Ac(1339,`pre`)(1340,`code`),vN(1341,`url + ?page=1&pageSize=10
`),ug()(),Ac(1342,`p`),vN(1343,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Ac(1344,`code`),vN(1345,`order`),ug(),vN(1346,`, por exemplo:`),ug(),Ac(1347,`ul`)(1348,`li`)(1349,`p`),vN(1350,`Coluna decrescente:`),ug(),Ac(1351,`pre`)(1352,`code`),vN(1353,`url + ?page=1&pageSize=10&order=-name
`),ug()()(),Ac(1354,`li`)(1355,`p`),vN(1356,`Coluna ascendente:`),ug(),Ac(1357,`pre`)(1358,`code`),vN(1359,`url + ?page=1&pageSize=10&order=name
`),ug()()()(),Ac(1360,`blockquote`)(1361,`p`),vN(1362,`Esta URL deve retornar e receber os dados no padrão de `),Ac(1363,`a`,41),vN(1364,`API do PO UI`),ug(),vN(1365,`.`),ug()()()(),Ac(1366,`tr`,17)(1367,`td`,18)(1368,`div`,19)(1369,`span`,20),vN(1370,` p-service-delete`),Kc(1371,`br`),ug()()(),Ac(1372,`td`,21)(1373,`code`,31),vN(1374,`string`),ug()(),Ac(1375,`td`,23),vN(1376,`-`),ug(),Ac(1377,`td`,24)(1378,`em`)(1379,`strong`),vN(1380,`(opcional)`),ug()(),Ac(1381,`p`),vN(1382,`URL da API responsável por excluir os registros.`),ug(),Ac(1383,`p`),vN(1384,`Ao selecionar o botão de excluir itens, essa url será executada utilizando o parâmetro enviado na propriedade `),Ac(1385,`code`),vN(1386,`p-param-delete-api`),ug(),vN(1387,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Ac(1388,`code`),vN(1389,`id`),ug(),vN(1390,`.`),ug(),Ac(1391,`blockquote`)(1392,`p`),vN(1393,`Esta URL deve retornar e receber os dados no padrão de `),Ac(1394,`a`,41),vN(1395,`API do PO UI`),ug(),vN(1396,`.`),ug()()()(),Ac(1397,`tr`,17)(1398,`td`,18)(1399,`div`,27)(1400,`span`,28),vN(1401,` (p-show-more)`),Kc(1402,`br`),ug()()(),Ac(1403,`td`,21)(1404,`code`,29),vN(1405,`EventEmitter`),ug()(),Ac(1406,`td`,23),vN(1407,`-`),ug(),Ac(1408,`td`,24)(1409,`em`)(1410,`strong`),vN(1411,`(opcional)`),ug()(),Ac(1412,`p`),vN(1413,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),ug(),Ac(1414,`p`),vN(1415,`Recebe um objeto `),Ac(1416,`code`),vN(1417,`{ column, type }`),ug(),vN(1418,` onde:`),ug(),Ac(1419,`ul`)(1420,`li`),vN(1421,`column (`),Ac(1422,`code`),vN(1423,`PoTableColumn`),ug(),vN(1424,`): objeto da coluna que está ordenada.`),ug(),Ac(1425,`li`),vN(1426,`type (`),Ac(1427,`code`),vN(1428,`PoTableColumnSortType`),ug(),vN(1429,`): tipo da ordenação.`),ug()()()(),Ac(1430,`tr`,17)(1431,`td`,18)(1432,`div`,19)(1433,`span`,20),vN(1434,` p-show-more-disabled`),Kc(1435,`br`),ug()()(),Ac(1436,`td`,21)(1437,`code`,22),vN(1438,`boolean`),ug()(),Ac(1439,`td`,23)(1440,`p`)(1441,`code`),vN(1442,`false`),ug()()(),Ac(1443,`td`,24)(1444,`p`),vN(1445,`Se verdadeiro, torna habilitado o botão "Carregar mais resultados".`),ug()()(),Ac(1446,`tr`,17)(1447,`td`,18)(1448,`div`,19)(1449,`span`,20),vN(1450,` p-single-select`),Kc(1451,`br`),ug()()(),Ac(1452,`td`,21)(1453,`code`,22),vN(1454,`boolean`),ug()(),Ac(1455,`td`,23),vN(1456,`-`),ug(),Ac(1457,`td`,24)(1458,`p`),vN(1459,`Define que somente uma linha da tabela pode ser selecionada.`),ug(),Ac(1460,`blockquote`)(1461,`p`),vN(1462,`Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.`),ug()()()(),Ac(1463,`tr`,17)(1464,`td`,18)(1465,`div`,19)(1466,`span`,20),vN(1467,` p-sort`),Kc(1468,`br`),ug()()(),Ac(1469,`td`,21)(1470,`code`,22),vN(1471,`boolean`),ug()(),Ac(1472,`td`,23)(1473,`p`)(1474,`code`),vN(1475,`false`),ug()()(),Ac(1476,`td`,24)(1477,`em`)(1478,`strong`),vN(1479,`(opcional)`),ug()(),Ac(1480,`p`),vN(1481,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),ug()()(),Ac(1482,`tr`,17)(1483,`td`,18)(1484,`div`,27)(1485,`span`,28),vN(1486,` (p-sort-by)`),Kc(1487,`br`),ug()()(),Ac(1488,`td`,21)(1489,`code`,29),vN(1490,`EventEmitter`),ug()(),Ac(1491,`td`,23),vN(1492,`-`),ug(),Ac(1493,`td`,24)(1494,`em`)(1495,`strong`),vN(1496,`(opcional)`),ug()(),Ac(1497,`p`),vN(1498,`Evento executado ao ordenar colunas da tabela.`),ug(),Ac(1499,`p`),vN(1500,`Recebe um objeto `),Ac(1501,`code`),vN(1502,`{ column, type }`),ug(),vN(1503,` onde:`),ug(),Ac(1504,`ul`)(1505,`li`),vN(1506,`column (`),Ac(1507,`code`),vN(1508,`PoTableColumn`),ug(),vN(1509,`): objeto da coluna que foi clicada/ordenada.`),ug(),Ac(1510,`li`),vN(1511,`type (`),Ac(1512,`code`),vN(1513,`PoTableColumnSortType`),ug(),vN(1514,`): tipo da ordenação.`),ug()()()(),Ac(1515,`tr`,17)(1516,`td`,18)(1517,`div`,19)(1518,`span`,20),vN(1519,` p-spacing`),Kc(1520,`br`),ug()()(),Ac(1521,`td`,21)(1522,`code`,31),vN(1523,`string`),ug()(),Ac(1524,`td`,23)(1525,`p`)(1526,`code`),vN(1527,`medium`),ug()()(),Ac(1528,`td`,24)(1529,`em`)(1530,`strong`),vN(1531,`(opcional)`),ug()(),Ac(1532,`p`),vN(1533,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Ac(1534,`strong`),vN(1535,`PoTableColumnSpacing`),ug(),vN(1536,`.`),ug(),Ac(1537,`blockquote`)(1538,`p`),vN(1539,`Em nível de acessibilidade `),Ac(1540,`strong`),vN(1541,`AA`),ug(),vN(1542,`, caso o valor de `),Ac(1543,`code`),vN(1544,`p-spacing`),ug(),vN(1545,` não seja definido, o valor padrão será `),Ac(1546,`code`),vN(1547,`extraSmall`),ug(),vN(1548,`
nos seguintes cen\xE1rios:`),ug(),Ac(1549,`ul`)(1550,`li`),vN(1551,`Quando o valor de `),Ac(1552,`code`),vN(1553,`p-components-size`),ug(),vN(1554,` for `),Ac(1555,`code`),vN(1556,`small`),ug(),vN(1557,`;`),ug(),Ac(1558,`li`),vN(1559,`Quando o valor padrão dos componentes for configurado como `),Ac(1560,`code`),vN(1561,`small`),ug(),vN(1562,` no
`),Ac(1563,`a`,32),vN(1564,`serviço de tema`),ug(),vN(1565,`.`),ug()()()()(),Ac(1566,`tr`,17)(1567,`td`,18)(1568,`div`,19)(1569,`span`,20),vN(1570,` p-striped`),Kc(1571,`br`),ug()()(),Ac(1572,`td`,21)(1573,`code`,22),vN(1574,`boolean`),ug()(),Ac(1575,`td`,23)(1576,`p`)(1577,`code`),vN(1578,`false`),ug()()(),Ac(1579,`td`,24)(1580,`p`),vN(1581,`Habilita ou desabilita o estilo listrado da tabela (`),Ac(1582,`code`),vN(1583,`striped`),ug(),vN(1584,`).`),ug(),Ac(1585,`blockquote`)(1586,`p`),vN(1587,`Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.`),ug()()()(),Ac(1588,`tr`,17)(1589,`td`,18)(1590,`div`,19)(1591,`span`,20),vN(1592,` p-text-wrap`),Kc(1593,`br`),ug()()(),Ac(1594,`td`,21)(1595,`code`,22),vN(1596,`boolean`),ug()(),Ac(1597,`td`,23)(1598,`p`)(1599,`code`),vN(1600,`false`),ug()()(),Ac(1601,`td`,24)(1602,`em`)(1603,`strong`),vN(1604,`(opcional)`),ug()(),Ac(1605,`p`),vN(1606,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug(),Ac(1607,`blockquote`)(1608,`p`),vN(1609,`Incompatível com `),Ac(1610,`code`),vN(1611,`virtual-scroll`),ug(),vN(1612,`, que requer altura fixa nas linhas.`),ug()()()(),Ac(1613,`tr`,17)(1614,`td`,18)(1615,`div`,27)(1616,`span`,28),vN(1617,` (p-unselected)`),Kc(1618,`br`),ug()()(),Ac(1619,`td`,21)(1620,`code`,29),vN(1621,`EventEmitter`),ug()(),Ac(1622,`td`,23),vN(1623,`-`),ug(),Ac(1624,`td`,24)(1625,`em`)(1626,`strong`),vN(1627,`(opcional)`),ug()(),Ac(1628,`p`),vN(1629,`Evento executado ao desmarcar a seleção de uma linha do `),Ac(1630,`code`),vN(1631,`po-table`),ug(),vN(1632,`.`),ug()()(),Ac(1633,`tr`,17)(1634,`td`,18)(1635,`div`,19)(1636,`span`,20),vN(1637,` p-virtual-scroll`),Kc(1638,`br`),ug()()(),Ac(1639,`td`,21)(1640,`code`,22),vN(1641,`boolean`),ug()(),Ac(1642,`td`,23)(1643,`p`)(1644,`code`),vN(1645,`true`),ug()()(),Ac(1646,`td`,24)(1647,`em`)(1648,`strong`),vN(1649,`(opcional)`),ug()(),Ac(1650,`p`),vN(1651,`Habilita o `),Ac(1652,`code`),vN(1653,`virtual-scroll`),ug(),vN(1654,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Ac(1655,`code`),vN(1656,`p-height`),ug(),vN(1657,`) para funcionar corretamente.`),ug(),Ac(1658,`blockquote`)(1659,`p`),vN(1660,`Incompatível com `),Ac(1661,`code`),vN(1662,`p-text-wrap`),ug(),vN(1663,` e `),Ac(1664,`code`),vN(1665,`master-detail`),ug(),vN(1666,`, pois o `),Ac(1667,`code`),vN(1668,`virtual-scroll`),ug(),vN(1669,` exige altura fixa nas linhas.`),ug()()()()(),Ac(1670,`h3`,13),vN(1671,`Métodos`),ug(),Ac(1672,`table`,42)(1673,`tr`,17)(1674,`th`,43)(1675,`div`,19)(1676,`h4`)(1677,`span`,20),vN(1678,` applyFilters `),ug()()()()(),Ac(1679,`tr`,24)(1680,`td`,24)(1681,`p`),vN(1682,`Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.`),ug(),Ac(1683,`p`),vN(1684,`Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:`),ug(),Ac(1685,`pre`)(1686,`code`),vN(1687,`url + ?page=1&pageSize=10
`),ug()(),Ac(1688,`blockquote`)(1689,`p`),vN(1690,`Obs: os parâmetros `),Ac(1691,`code`),vN(1692,`page`),ug(),vN(1693,` e `),Ac(1694,`code`),vN(1695,`pageSize`),ug(),vN(1696,` sempre serão chamados independente de ser enviados outros parâmetros.`),ug()(),Ac(1697,`p`),vN(1698,`Caso sejam informados os parâmetros `),Ac(1699,`code`),vN(1700,`{ name: 'JOHN', age: '23' }`),ug(),vN(1701,`, todos serão adicionados ao GET, conforme abaixo:`),ug(),Ac(1702,`pre`)(1703,`code`),vN(1704,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),ug()()()()(),Ac(1705,`h5`)(1706,`b`),vN(1707,`Parâmetros`),ug()(),Ac(1708,`table`,14)(1709,`tr`,15)(1710,`th`,16),vN(1711,`Nome`),ug(),Ac(1712,`th`,16),vN(1713,`Tipo`),ug(),Ac(1714,`th`,16),vN(1715,`Descrição`),ug()(),Ac(1716,`tr`,17)(1717,`td`,18),vN(1718,` queryParams`),ug(),Ac(1719,`td`,21)(1720,`code`,44),vN(1721,` { key: value } `),ug()(),Ac(1722,`td`,24)(1723,`p`),vN(1724,`Formato do objeto a ser enviado.`),ug(),Ac(1725,`blockquote`)(1726,`p`),vN(1727,`Pode ser utilizada qualquer string como key, e qualquer string ou number como value.`),ug()()()()(),Kc(1728,`br`),Ac(1729,`table`,42)(1730,`tr`,17)(1731,`th`,43)(1732,`div`,19)(1733,`h4`)(1734,`span`,20),vN(1735,` applyFixedColumns `),ug()()()()(),Ac(1736,`tr`,24)(1737,`td`,24)(1738,`p`),vN(1739,`Verifica se columns possuem a propriedade width.`),ug()()()(),Kc(1740,`br`),Ac(1741,`table`,42)(1742,`tr`,17)(1743,`th`,43)(1744,`div`,19)(1745,`h4`)(1746,`span`,20),vN(1747,` collapse `),ug()()()()(),Ac(1748,`tr`,24)(1749,`td`,24)(1750,`p`),vN(1751,`Método que colapsa uma linha com detalhe quando executada.`),ug()()()(),Ac(1752,`h5`)(1753,`b`),vN(1754,`Parâmetros`),ug()(),Ac(1755,`table`,14)(1756,`tr`,15)(1757,`th`,16),vN(1758,`Nome`),ug(),Ac(1759,`th`,16),vN(1760,`Tipo`),ug(),Ac(1761,`th`,16),vN(1762,`Descrição`),ug()(),Ac(1763,`tr`,17)(1764,`td`,18),vN(1765,` rowIndex`),ug(),Ac(1766,`td`,21)(1767,`code`,45),vN(1768,` number `),ug()(),Ac(1769,`td`,24)(1770,`p`),vN(1771,`Índice da linha que será colapsada.`),ug(),Ac(1772,`blockquote`)(1773,`p`),vN(1774,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),ug()()()()(),Kc(1775,`br`),Ac(1776,`table`,42)(1777,`tr`,17)(1778,`th`,43)(1779,`div`,19)(1780,`h4`)(1781,`span`,20),vN(1782,` expand `),ug()()()()(),Ac(1783,`tr`,24)(1784,`td`,24)(1785,`p`),vN(1786,`Método que expande uma linha com detalhe quando executada.`),ug()()()(),Ac(1787,`h5`)(1788,`b`),vN(1789,`Parâmetros`),ug()(),Ac(1790,`table`,14)(1791,`tr`,15)(1792,`th`,16),vN(1793,`Nome`),ug(),Ac(1794,`th`,16),vN(1795,`Tipo`),ug(),Ac(1796,`th`,16),vN(1797,`Descrição`),ug()(),Ac(1798,`tr`,17)(1799,`td`,18),vN(1800,` rowIndex`),ug(),Ac(1801,`td`,21)(1802,`code`,45),vN(1803,` number `),ug()(),Ac(1804,`td`,24)(1805,`p`),vN(1806,`Índice da linha que será expandida.`),ug(),Ac(1807,`blockquote`)(1808,`p`),vN(1809,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),ug()()()()(),Kc(1810,`br`),Ac(1811,`table`,42)(1812,`tr`,17)(1813,`th`,43)(1814,`div`,19)(1815,`h4`)(1816,`span`,20),vN(1817,` getSelectedRows `),ug()()()()(),Ac(1818,`tr`,24)(1819,`td`,24)(1820,`p`),vN(1821,`Retorna as linhas do `),Ac(1822,`code`),vN(1823,`po-table`),ug(),vN(1824,` que estão selecionadas.`),ug()()()(),Kc(1825,`br`),Ac(1826,`table`,42)(1827,`tr`,17)(1828,`th`,43)(1829,`div`,19)(1830,`h4`)(1831,`span`,20),vN(1832,` getUnselectedRows `),ug()()()()(),Ac(1833,`tr`,24)(1834,`td`,24)(1835,`p`),vN(1836,`Retorna as linhas do `),Ac(1837,`code`),vN(1838,`po-table`),ug(),vN(1839,` que não estão selecionadas.`),ug()()()(),Kc(1840,`br`),Ac(1841,`table`,42)(1842,`tr`,17)(1843,`th`,43)(1844,`div`,19)(1845,`h4`)(1846,`span`,20),vN(1847,` unselectRows `),ug()()()()(),Ac(1848,`tr`,24)(1849,`td`,24)(1850,`p`),vN(1851,`Desmarca as linhas que estão selecionadas.`),ug()()()(),Kc(1852,`br`),Ac(1853,`table`,42)(1854,`tr`,17)(1855,`th`,43)(1856,`div`,19)(1857,`h4`)(1858,`span`,20),vN(1859,` unselectRowItem `),ug()()()()(),Ac(1860,`tr`,24)(1861,`td`,24)(1862,`p`),vN(1863,`Desmarca uma linha que está selecionada.`),ug()()()(),Kc(1864,`br`),Ac(1865,`table`,42)(1866,`tr`,17)(1867,`th`,43)(1868,`div`,19)(1869,`h4`)(1870,`span`,20),vN(1871,` selectRowItem `),ug()()()()(),Ac(1872,`tr`,24)(1873,`td`,24)(1874,`p`),vN(1875,`Seleciona uma linha do 'po-table'.`),ug()()()(),Kc(1876,`br`),Ac(1877,`table`,42)(1878,`tr`,17)(1879,`th`,43)(1880,`div`,19)(1881,`h4`)(1882,`span`,20),vN(1883,` deleteItems `),ug()()()()(),Ac(1884,`tr`,24)(1885,`td`,24)(1886,`p`),vN(1887,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Ac(1888,`code`),vN(1889,`p-service-delete`),ug(),vN(1890,`, será necessário excluir 1 item por vez.`),ug(),Ac(1891,`p`),vN(1892,`Ao utilizar `),Ac(1893,`code`),vN(1894,`p-service-delete`),ug(),vN(1895,` mas sem a propriedade `),Ac(1896,`code`),vN(1897,`p-service-api`),ug(),vN(1898,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),ug(),Ac(1899,`p`),vN(1900,`Caso a tabela utilize `),Ac(1901,`code`),vN(1902,`p-height`),ug(),vN(1903,` e esteja sem serviço, é necessário a reatribuição dos itens utilizando o evento `),Ac(1904,`code`),vN(1905,`(p-delete-items)`),ug(),vN(1906,`, por exemplo:`),ug(),Ac(1907,`pre`)(1908,`code`),vN(1909,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),ug()()()()(),Kc(1910,`br`),Ac(1911,`table`,42)(1912,`tr`,17)(1913,`th`,43)(1914,`div`,19)(1915,`h4`)(1916,`span`,20),vN(1917,` updateSearchAIQuery `),ug()()()()(),Ac(1918,`tr`,24)(1919,`td`,24)(1920,`p`),vN(1921,`Atualiza programaticamente o valor do campo de busca por IA (`),Ac(1922,`code`),vN(1923,`po-search-ai`),ug(),vN(1924,`) integrado \xE0 tabela
via `),Ac(1925,`code`),vN(1926,`p-search-ai-field`),ug(),vN(1927,`.`),ug(),Ac(1928,`p`),vN(1929,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),ug(),Ac(1930,`blockquote`)(1931,`p`),vN(1932,`Só tem efeito quando a propriedade `),Ac(1933,`code`),vN(1934,`p-search-ai-field`),ug(),vN(1935,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),ug()()()()(),Ac(1936,`h5`)(1937,`b`),vN(1938,`Parâmetros`),ug()(),Ac(1939,`table`,14)(1940,`tr`,15)(1941,`th`,16),vN(1942,`Nome`),ug(),Ac(1943,`th`,16),vN(1944,`Tipo`),ug(),Ac(1945,`th`,16),vN(1946,`Descrição`),ug()(),Ac(1947,`tr`,17)(1948,`td`,18),vN(1949,` value`),ug(),Ac(1950,`td`,21)(1951,`code`,45),vN(1952,` string `),ug()(),Ac(1953,`td`,24)(1954,`p`),vN(1955,`Texto da consulta a ser inserido no campo de busca por IA.`),ug()()(),Ac(1956,`tr`,17)(1957,`td`,18),vN(1958,` triggerSearch`),ug(),Ac(1959,`td`,21)(1960,`code`,45),vN(1961,` boolean `),ug()(),Ac(1962,`td`,24)(1963,`p`),vN(1964,`Quando `),Ac(1965,`code`),vN(1966,`true`),ug(),vN(1967,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),Ac(1968,`code`),vN(1969,`false`),ug(),Ac(1970,`em`),vN(1971,`(padrão)`),ug(),vN(1972,`, apenas preenche o campo.`),ug()()()(),Kc(1973,`br`),Ac(1974,`table`,42)(1975,`tr`,17)(1976,`th`,43)(1977,`div`,19)(1978,`h4`)(1979,`span`,20),vN(1980,` removeItem `),ug()()()()(),Ac(1981,`tr`,24)(1982,`td`,24)(1983,`p`),vN(1984,`Método que remove um item da tabela.`),ug()()()(),Ac(1985,`h5`)(1986,`b`),vN(1987,`Parâmetros`),ug()(),Ac(1988,`table`,14)(1989,`tr`,15)(1990,`th`,16),vN(1991,`Nome`),ug(),Ac(1992,`th`,16),vN(1993,`Tipo`),ug(),Ac(1994,`th`,16),vN(1995,`Descrição`),ug()(),Ac(1996,`tr`,17)(1997,`td`,18),vN(1998,` item`),ug(),Ac(1999,`td`,21)(2e3,`code`,35),vN(2001,` number `),ug(),Ac(2002,`code`,44),vN(2003,` { key: value } `),ug()(),Ac(2004,`td`,24)(2005,`p`),vN(2006,`Índice da linha ou o item que será removido.`),ug(),Ac(2007,`blockquote`)(2008,`p`),vN(2009,`Ao remover o item, a linha que o representa será excluída da tabela.`),ug()()()()(),Kc(2010,`br`),Ac(2011,`table`,42)(2012,`tr`,17)(2013,`th`,43)(2014,`div`,19)(2015,`h4`)(2016,`span`,20),vN(2017,` updateItem `),ug()()()()(),Ac(2018,`tr`,24)(2019,`td`,24)(2020,`p`),vN(2021,`Método que atualiza um item da tabela.`),ug()()()(),Ac(2022,`h5`)(2023,`b`),vN(2024,`Parâmetros`),ug()(),Ac(2025,`table`,14)(2026,`tr`,15)(2027,`th`,16),vN(2028,`Nome`),ug(),Ac(2029,`th`,16),vN(2030,`Tipo`),ug(),Ac(2031,`th`,16),vN(2032,`Descrição`),ug()(),Ac(2033,`tr`,17)(2034,`td`,18),vN(2035,` item`),ug(),Ac(2036,`td`,21)(2037,`code`,35),vN(2038,` number `),ug(),Ac(2039,`code`,44),vN(2040,` { key: value } `),ug()(),Ac(2041,`td`,24)(2042,`p`),vN(2043,`Índice da linha ou o item que será atualizado.`),ug()()(),Ac(2044,`tr`,17)(2045,`td`,18),vN(2046,` updatedItem`),ug(),Ac(2047,`td`,21)(2048,`code`,44),vN(2049,` { key: value } `),ug()(),Ac(2050,`td`,24)(2051,`p`),vN(2052,`Item que foi atualizado.`),ug(),Ac(2053,`blockquote`)(2054,`p`),vN(2055,`Ao atualizar o item, a informação será alterada na tabela.`),ug()()()()(),Kc(2056,`br`),Ac(2057,`h3`),vN(2058,`Interfaces`),ug(),Ac(2059,`h4`,46)(2060,`code`,5),vN(2061,`PoTableAction`),ug()(),Ac(2062,`div`,2)(2063,`p`),vN(2064,`Interface para lista de ações do componente. `),ug()(),Ac(2065,`h4`,13),vN(2066,`Propriedades`),ug(),Ac(2067,`table`,14)(2068,`tr`,15)(2069,`th`,16),vN(2070,`Nome`),ug(),Ac(2071,`th`,16),vN(2072,`Tipo`),ug(),Ac(2073,`th`,16),vN(2074,`Descrição`),ug()(),Ac(2075,`tr`,17)(2076,`td`,18)(2077,`div`,19)(2078,`span`,20),vN(2079,` action`),Kc(2080,`br`),ug()()(),Ac(2081,`td`,21)(2082,`code`,47),vN(2083,`Function`),ug()(),Ac(2084,`td`,24)(2085,`em`)(2086,`strong`),vN(2087,`(opcional)`),ug()(),Ac(2088,`p`),vN(2089,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ug(),Ac(2090,`p`),vN(2091,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ac(2092,`code`),vN(2093,`subItems`),ug(),vN(2094,`.`),ug(),Ac(2095,`blockquote`)(2096,`p`),vN(2097,`Para que a função seja executada no contexto do componente, utilize `),Ac(2098,`em`),vN(2099,`bind`),ug(),vN(2100,`:
`),Ac(2101,`code`),vN(2102,`action: this.myFunction.bind(this)`),ug()()()()(),Ac(2103,`tr`,17)(2104,`td`,18)(2105,`div`,19)(2106,`span`,20),vN(2107,` disabled`),Kc(2108,`br`),ug()()(),Ac(2109,`td`,21)(2110,`code`,22),vN(2111,`boolean `),ug(),Ac(2112,`code`,47),vN(2113,` Function`),ug()(),Ac(2114,`td`,24)(2115,`em`)(2116,`strong`),vN(2117,`(opcional)`),ug()(),Ac(2118,`p`),vN(2119,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()(),Ac(2120,`tr`,17)(2121,`td`,18)(2122,`div`,19)(2123,`span`,20),vN(2124,` icon`),Kc(2125,`br`),ug()()(),Ac(2126,`td`,21)(2127,`code`,31),vN(2128,`string `),ug(),Ac(2129,`code`,48),vN(2130,` TemplateRef<void>`),ug()(),Ac(2131,`td`,24)(2132,`em`)(2133,`strong`),vN(2134,`(opcional)`),ug()(),Ac(2135,`p`),vN(2136,`Ícone exibido ao lado esquerdo do rótulo.`),ug(),Ac(2137,`p`),vN(2138,`Aceita ícones da `),Ac(2139,`a`,26),vN(2140,`Biblioteca de ícones`),ug(),vN(2141,`, fontes externas (ex: Font Awesome)
ou um `),Ac(2142,`code`),vN(2143,`TemplateRef`),ug(),vN(2144,` para ícones customizados.`),ug(),Ac(2145,`pre`)(2146,`code`),vN(2147,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ug()()()(),Ac(2148,`tr`,17)(2149,`td`,18)(2150,`div`,19)(2151,`span`,20),vN(2152,` label`),Kc(2153,`br`),ug()()(),Ac(2154,`td`,21)(2155,`code`,31),vN(2156,`string`),ug()(),Ac(2157,`td`,24)(2158,`p`),vN(2159,`Rótulo da ação.`),ug(),Ac(2160,`p`),vN(2161,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ac(2162,`code`),vN(2163,`subItems`),ug(),vN(2164,`.`),ug()()(),Ac(2165,`tr`,17)(2166,`td`,18)(2167,`div`,19)(2168,`span`,20),vN(2169,` selected`),Kc(2170,`br`),ug()()(),Ac(2171,`td`,21)(2172,`code`,22),vN(2173,`boolean`),ug()(),Ac(2174,`td`,24)(2175,`em`)(2176,`strong`),vN(2177,`(opcional)`),ug()(),Ac(2178,`p`),vN(2179,`Define se a ação está selecionada.`),ug()()(),Ac(2180,`tr`,17)(2181,`td`,18)(2182,`div`,19)(2183,`span`,20),vN(2184,` separator`),Kc(2185,`br`),ug()()(),Ac(2186,`td`,21)(2187,`code`,22),vN(2188,`boolean`),ug()(),Ac(2189,`td`,24)(2190,`em`)(2191,`strong`),vN(2192,`(opcional)`),ug()(),Ac(2193,`p`),vN(2194,`Atribui uma linha separadora acima do item.`),ug()()(),Ac(2195,`tr`,17)(2196,`td`,18)(2197,`div`,19)(2198,`span`,20),vN(2199,` subItems`),Kc(2200,`br`),ug()()(),Ac(2201,`td`,21)(2202,`code`,49),vN(2203,`Array<PoPopupAction>`),ug()(),Ac(2204,`td`,24)(2205,`em`)(2206,`strong`),vN(2207,`(opcional)`),ug()(),Ac(2208,`p`),vN(2209,`Define uma lista de subitens para criação de menus aninhados.`),ug(),Ac(2210,`p`),vN(2211,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ug(),Ac(2212,`blockquote`)(2213,`p`),vN(2214,`As propriedades `),Ac(2215,`code`),vN(2216,`disabled`),ug(),vN(2217,`, `),Ac(2218,`code`),vN(2219,`type`),ug(),vN(2220,` e `),Ac(2221,`code`),vN(2222,`visible`),ug(),vN(2223,` não são aplicadas visualmente ao item agrupador.`),ug()(),Ac(2224,`blockquote`)(2225,`p`),vN(2226,`Quando `),Ac(2227,`code`),vN(2228,`url`),ug(),vN(2229,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ug()(),Ac(2230,`blockquote`)(2231,`p`),vN(2232,`Em subníveis aninhados, o `),Ac(2233,`code`),vN(2234,`icon`),ug(),vN(2235,` do agrupador é substituído pelo indicador de navegação (seta).`),ug()()()(),Ac(2236,`tr`,17)(2237,`td`,18)(2238,`div`,19)(2239,`span`,20),vN(2240,` type`),Kc(2241,`br`),ug()()(),Ac(2242,`td`,21)(2243,`code`,31),vN(2244,`string`),ug()(),Ac(2245,`td`,24)(2246,`em`)(2247,`strong`),vN(2248,`(opcional)`),ug()(),Ac(2249,`p`),vN(2250,`Define a cor do item.`),ug(),Ac(2251,`p`),vN(2252,`Valores válidos:`),ug(),Ac(2253,`ul`)(2254,`li`)(2255,`code`),vN(2256,`default`),ug()(),Ac(2257,`li`)(2258,`code`),vN(2259,`danger`),ug()()()()(),Ac(2260,`tr`,17)(2261,`td`,18)(2262,`div`,19)(2263,`span`,20),vN(2264,` url`),Kc(2265,`br`),ug()()(),Ac(2266,`td`,21)(2267,`code`,31),vN(2268,`string`),ug()(),Ac(2269,`td`,24)(2270,`em`)(2271,`strong`),vN(2272,`(opcional)`),ug()(),Ac(2273,`p`),vN(2274,`URL para redirecionamento. Aceita rotas internas e links externos.`),ug(),Ac(2275,`p`),vN(2276,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ac(2277,`code`),vN(2278,`url`),ug(),vN(2279,` é informada em um agrupador, o clique `),Ac(2280,`strong`),vN(2281,`não abrirá os subitens`),ug(),vN(2282,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ug(),Ac(2283,`blockquote`)(2284,`p`),vN(2285,`Quando informada, tem prioridade sobre a propriedade `),Ac(2286,`code`),vN(2287,`action`),ug(),vN(2288,`.`),ug()()()(),Ac(2289,`tr`,17)(2290,`td`,18)(2291,`div`,19)(2292,`span`,20),vN(2293,` visible`),Kc(2294,`br`),ug()()(),Ac(2295,`td`,21)(2296,`code`,22),vN(2297,`boolean `),ug(),Ac(2298,`code`,47),vN(2299,` Function`),ug()(),Ac(2300,`td`,24)(2301,`em`)(2302,`strong`),vN(2303,`(opcional)`),ug()(),Ac(2304,`p`),vN(2305,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ug()()()(),Ac(2306,`h4`,46)(2307,`code`,5),vN(2308,`PoTableBoolean`),ug()(),Ac(2309,`div`,2)(2310,`p`),vN(2311,`Interface que define as colunas booleanas do `),Ac(2312,`code`),vN(2313,`po-table`),ug(),vN(2314,`.`),ug()(),Ac(2315,`h4`,13),vN(2316,`Propriedades`),ug(),Ac(2317,`table`,14)(2318,`tr`,15)(2319,`th`,16),vN(2320,`Nome`),ug(),Ac(2321,`th`,16),vN(2322,`Tipo`),ug(),Ac(2323,`th`,16),vN(2324,`Descrição`),ug()(),Ac(2325,`tr`,17)(2326,`td`,18)(2327,`div`,19)(2328,`span`,20),vN(2329,` falseLabel`),Kc(2330,`br`),ug()()(),Ac(2331,`td`,21)(2332,`code`,31),vN(2333,`string`),ug()(),Ac(2334,`td`,24)(2335,`em`)(2336,`strong`),vN(2337,`(opcional)`),ug()(),Ac(2338,`p`),vN(2339,`Define o rótulo para valores `),Ac(2340,`code`),vN(2341,`false`),ug(),vN(2342,`.`),ug()()(),Ac(2343,`tr`,17)(2344,`td`,18)(2345,`div`,19)(2346,`span`,20),vN(2347,` trueLabel`),Kc(2348,`br`),ug()()(),Ac(2349,`td`,21)(2350,`code`,31),vN(2351,`string`),ug()(),Ac(2352,`td`,24)(2353,`em`)(2354,`strong`),vN(2355,`(opcional)`),ug()(),Ac(2356,`p`),vN(2357,`Define o rótulo para valores `),Ac(2358,`code`),vN(2359,`true`),ug(),vN(2360,`.`),ug()()()(),Ac(2361,`h4`,46)(2362,`code`,5),vN(2363,`PoTableColumnSort`),ug()(),Ac(2364,`div`,2)(2365,`p`),vN(2366,`Interface para ordenação das colunas do componente table.`),ug()(),Ac(2367,`h4`,13),vN(2368,`Propriedades`),ug(),Ac(2369,`table`,14)(2370,`tr`,15)(2371,`th`,16),vN(2372,`Nome`),ug(),Ac(2373,`th`,16),vN(2374,`Tipo`),ug(),Ac(2375,`th`,16),vN(2376,`Descrição`),ug()(),Ac(2377,`tr`,17)(2378,`td`,18)(2379,`div`,19)(2380,`span`,20),vN(2381,` column`),Kc(2382,`br`),ug()()(),Ac(2383,`td`,21)(2384,`code`,50),vN(2385,`PoTableColumn`),ug()(),Ac(2386,`td`,24)(2387,`em`)(2388,`strong`),vN(2389,`(opcional)`),ug()(),Ac(2390,`p`),vN(2391,`Coluna pela qual a tabela está ordenada.`),ug()()(),Ac(2392,`tr`,17)(2393,`td`,18)(2394,`div`,19)(2395,`span`,20),vN(2396,` type`),Kc(2397,`br`),ug()()(),Ac(2398,`td`,21)(2399,`code`,51),vN(2400,`PoTableColumnSortType`),ug()(),Ac(2401,`td`,24)(2402,`p`),vN(2403,`Tipo da ordenação.`),ug()()()(),Ac(2404,`h4`,46)(2405,`code`,5),vN(2406,`PoTableColumn`),ug()(),Ac(2407,`div`,2)(2408,`p`),vN(2409,`Interface para configuração das colunas do `),Ac(2410,`code`),vN(2411,`po-table`),ug(),vN(2412,`.`),ug(),Ac(2413,`p`),vN(2414,`As definições das colunas serão aplicadas linha a linha.`),ug()(),Ac(2415,`h4`,13),vN(2416,`Propriedades`),ug(),Ac(2417,`table`,14)(2418,`tr`,15)(2419,`th`,16),vN(2420,`Nome`),ug(),Ac(2421,`th`,16),vN(2422,`Tipo`),ug(),Ac(2423,`th`,16),vN(2424,`Descrição`),ug()(),Ac(2425,`tr`,17)(2426,`td`,18)(2427,`div`,19)(2428,`span`,20),vN(2429,` action`),Kc(2430,`br`),ug()()(),Ac(2431,`td`,21)(2432,`code`,47),vN(2433,`Function`),ug()(),Ac(2434,`td`,24)(2435,`em`)(2436,`strong`),vN(2437,`(opcional)`),ug()(),Ac(2438,`p`),vN(2439,`Define uma ação na coluna quando o tipo da coluna for `),Ac(2440,`code`),vN(2441,`link`),ug(),vN(2442,` ou `),Ac(2443,`code`),vN(2444,`icon`),ug(),vN(2445,`.`),ug(),Ac(2446,`blockquote`)(2447,`p`),vN(2448,`Quando for do tipo `),Ac(2449,`code`),vN(2450,`link`),ug(),vN(2451,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),ug()(),Ac(2452,`blockquote`)(2453,`p`),vN(2454,`Quando for do tipo `),Ac(2455,`code`),vN(2456,`icon`),ug(),vN(2457,` enviará o objeto completo da linha e o segundo parâmetro será a definição da coluna.`),ug()()()(),Ac(2458,`tr`,17)(2459,`td`,18)(2460,`div`,19)(2461,`span`,20),vN(2462,` boolean`),Kc(2463,`br`),ug()()(),Ac(2464,`td`,21)(2465,`code`,52),vN(2466,`PoTableBoolean`),ug()(),Ac(2467,`td`,24)(2468,`em`)(2469,`strong`),vN(2470,`(opcional)`),ug()(),Ac(2471,`p`),vN(2472,`Define um objeto do tipo `),Ac(2473,`code`),vN(2474,`PoTableBoolean`),ug(),vN(2475,` para as colunas do tipo `),Ac(2476,`em`),vN(2477,`boolean`),ug(),vN(2478,`. Por exemplo:`),ug(),Ac(2479,`pre`)(2480,`code`),vN(2481,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),ug()(),Ac(2482,`blockquote`)(2483,`p`),vN(2484,`Caso não seja definido um objeto para colunas do tipo `),Ac(2485,`em`),vN(2486,`boolean`),ug(),vN(2487,`,
esta exibir\xE1 por padr\xE3o `),Ac(2488,`code`),vN(2489,`Sim`),ug(),vN(2490,` e `),Ac(2491,`code`),vN(2492,`Não`),ug(),vN(2493,` de acordo com os valores `),Ac(2494,`em`),vN(2495,`booleanos`),ug(),vN(2496,`.`),ug()()()(),Ac(2497,`tr`,17)(2498,`td`,18)(2499,`div`,19)(2500,`span`,20),vN(2501,` color`),Kc(2502,`br`),ug()()(),Ac(2503,`td`,21)(2504,`code`,31),vN(2505,`string `),ug(),Ac(2506,`code`,47),vN(2507,` Function`),ug()(),Ac(2508,`td`,24)(2509,`em`)(2510,`strong`),vN(2511,`(opcional)`),ug()(),Ac(2512,`p`),vN(2513,`Define a cor que será aplicada no conteúdo da coluna.`),ug(),Ac(2514,`p`),vN(2515,`Valores válidos:`),ug(),Ac(2516,`ul`)(2517,`li`),Kc(2518,`span`,53),Ac(2519,`code`),vN(2520,`color-01`),ug()(),Ac(2521,`li`),Kc(2522,`span`,54),Ac(2523,`code`),vN(2524,`color-02`),ug()(),Ac(2525,`li`),Kc(2526,`span`,55),Ac(2527,`code`),vN(2528,`color-03`),ug()(),Ac(2529,`li`),Kc(2530,`span`,56),Ac(2531,`code`),vN(2532,`color-04`),ug()(),Ac(2533,`li`),Kc(2534,`span`,57),Ac(2535,`code`),vN(2536,`color-05`),ug()(),Ac(2537,`li`),Kc(2538,`span`,58),Ac(2539,`code`),vN(2540,`color-06`),ug()(),Ac(2541,`li`),Kc(2542,`span`,59),Ac(2543,`code`),vN(2544,`color-07`),ug()(),Ac(2545,`li`),Kc(2546,`span`,60),Ac(2547,`code`),vN(2548,`color-08`),ug()(),Ac(2549,`li`),Kc(2550,`span`,61),Ac(2551,`code`),vN(2552,`color-09`),ug()(),Ac(2553,`li`),Kc(2554,`span`,62),Ac(2555,`code`),vN(2556,`color-10`),ug()(),Ac(2557,`li`),Kc(2558,`span`,63),Ac(2559,`code`),vN(2560,`color-11`),ug()(),Ac(2561,`li`),Kc(2562,`span`,64),Ac(2563,`code`),vN(2564,`color-12`),ug()()(),Ac(2565,`blockquote`)(2566,`p`),vN(2567,`Também é possível utilizar as 35 cores da paleta `),Ac(2568,`strong`),vN(2569,`Caption Tag Colors`),ug(),vN(2570,`:`),ug()(),Ac(2571,`ul`)(2572,`li`),Kc(2573,`span`,65),Ac(2574,`code`),vN(2575,`caption-tag-01`),ug(),Kc(2576,`span`,66),Ac(2577,`code`),vN(2578,`caption-tag-02`),ug(),Kc(2579,`span`,67),Ac(2580,`code`),vN(2581,`caption-tag-03`),ug(),Kc(2582,`span`,68),Ac(2583,`code`),vN(2584,`caption-tag-04`),ug(),Kc(2585,`span`,69),Ac(2586,`code`),vN(2587,`caption-tag-05`),ug()(),Ac(2588,`li`),Kc(2589,`span`,70),Ac(2590,`code`),vN(2591,`caption-tag-06`),ug(),Kc(2592,`span`,71),Ac(2593,`code`),vN(2594,`caption-tag-07`),ug(),Kc(2595,`span`,72),Ac(2596,`code`),vN(2597,`caption-tag-08`),ug(),Kc(2598,`span`,73),Ac(2599,`code`),vN(2600,`caption-tag-09`),ug(),Kc(2601,`span`,74),Ac(2602,`code`),vN(2603,`caption-tag-10`),ug()(),Ac(2604,`li`),Kc(2605,`span`,75),Ac(2606,`code`),vN(2607,`caption-tag-11`),ug(),Kc(2608,`span`,76),Ac(2609,`code`),vN(2610,`caption-tag-12`),ug(),Kc(2611,`span`,77),Ac(2612,`code`),vN(2613,`caption-tag-13`),ug(),Kc(2614,`span`,78),Ac(2615,`code`),vN(2616,`caption-tag-14`),ug(),Kc(2617,`span`,79),Ac(2618,`code`),vN(2619,`caption-tag-15`),ug()(),Ac(2620,`li`),Kc(2621,`span`,80),Ac(2622,`code`),vN(2623,`caption-tag-16`),ug(),Kc(2624,`span`,81),Ac(2625,`code`),vN(2626,`caption-tag-17`),ug(),Kc(2627,`span`,82),Ac(2628,`code`),vN(2629,`caption-tag-18`),ug(),Kc(2630,`span`,83),Ac(2631,`code`),vN(2632,`caption-tag-19`),ug(),Kc(2633,`span`,84),Ac(2634,`code`),vN(2635,`caption-tag-20`),ug()(),Ac(2636,`li`),Kc(2637,`span`,85),Ac(2638,`code`),vN(2639,`caption-tag-21`),ug(),Kc(2640,`span`,86),Ac(2641,`code`),vN(2642,`caption-tag-22`),ug(),Kc(2643,`span`,87),Ac(2644,`code`),vN(2645,`caption-tag-23`),ug(),Kc(2646,`span`,88),Ac(2647,`code`),vN(2648,`caption-tag-24`),ug(),Kc(2649,`span`,89),Ac(2650,`code`),vN(2651,`caption-tag-25`),ug()(),Ac(2652,`li`),Kc(2653,`span`,90),Ac(2654,`code`),vN(2655,`caption-tag-26`),ug(),Kc(2656,`span`,91),Ac(2657,`code`),vN(2658,`caption-tag-27`),ug(),Kc(2659,`span`,92),Ac(2660,`code`),vN(2661,`caption-tag-28`),ug(),Kc(2662,`span`,93),Ac(2663,`code`),vN(2664,`caption-tag-29`),ug(),Kc(2665,`span`,94),Ac(2666,`code`),vN(2667,`caption-tag-30`),ug()(),Ac(2668,`li`),Kc(2669,`span`,95),Ac(2670,`code`),vN(2671,`caption-tag-31`),ug(),Kc(2672,`span`,96),Ac(2673,`code`),vN(2674,`caption-tag-32`),ug(),Kc(2675,`span`,97),Ac(2676,`code`),vN(2677,`caption-tag-33`),ug(),Kc(2678,`span`,98),Ac(2679,`code`),vN(2680,`caption-tag-34`),ug(),Kc(2681,`span`,99),Ac(2682,`code`),vN(2683,`caption-tag-35`),ug()()(),Ac(2684,`blockquote`)(2685,`p`),vN(2686,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),ug()(),Ac(2687,`pre`)(2688,`code`),vN(2689,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),ug()(),Ac(2690,`blockquote`)(2691,`p`),vN(2692,`É possível também usá-la na coluna do tipo `),Ac(2693,`code`),vN(2694,`icons`),ug(),vN(2695,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),ug()(),Ac(2696,`pre`)(2697,`code`),vN(2698,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),ug()()()(),Ac(2699,`tr`,17)(2700,`td`,18)(2701,`div`,19)(2702,`span`,20),vN(2703,` detail`),Kc(2704,`br`),ug()()(),Ac(2705,`td`,21)(2706,`code`,100),vN(2707,`PoTableDetail`),ug()(),Ac(2708,`td`,24)(2709,`em`)(2710,`strong`),vN(2711,`(opcional)`),ug()(),Ac(2712,`p`),vN(2713,`Define um objeto que segue a interface `),Ac(2714,`code`),vN(2715,`PoTableDetail`),ug(),vN(2716,`, para as colunas de detalhes. Por exemplo:`),ug(),Ac(2717,`pre`)(2718,`code`),vN(2719,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),ug()()()(),Ac(2720,`tr`,17)(2721,`td`,18)(2722,`div`,19)(2723,`span`,20),vN(2724,` disabled`),Kc(2725,`br`),ug()()(),Ac(2726,`td`,21)(2727,`code`,47),vN(2728,`Function`),ug()(),Ac(2729,`td`,24)(2730,`em`)(2731,`strong`),vN(2732,`(opcional)`),ug()(),Ac(2733,`p`),vN(2734,`Função que deve retornar um booleano para habilitar ou desabilitar o `),Ac(2735,`em`),vN(2736,`link`),ug(),vN(2737,` e sua ação.`),ug(),Ac(2738,`blockquote`)(2739,`p`),vN(2740,`Propriedade disponível nas colunas do tipo `),Ac(2741,`code`),vN(2742,`link`),ug(),vN(2743,`.`),ug()()()(),Ac(2744,`tr`,17)(2745,`td`,18)(2746,`div`,19)(2747,`span`,20),vN(2748,` format`),Kc(2749,`br`),ug()()(),Ac(2750,`td`,21)(2751,`code`,31),vN(2752,`string`),ug()(),Ac(2753,`td`,24)(2754,`em`)(2755,`strong`),vN(2756,`(opcional)`),ug()(),Ac(2757,`p`),vN(2758,`Formato de exibição do valor da coluna.`),ug(),Ac(2759,`table`)(2760,`thead`)(2761,`tr`)(2762,`th`),vN(2763,`Formatação`),ug(),Ac(2764,`th`),vN(2765,`Type da Coluna`),ug(),Ac(2766,`th`),vN(2767,`Descrição`),ug(),Ac(2768,`th`),vN(2769,`Exemplos`),ug()()(),Ac(2770,`tbody`)(2771,`tr`)(2772,`td`),vN(2773,`Monetário`),ug(),Ac(2774,`td`)(2775,`code`),vN(2776,`currency`),ug()(),Ac(2777,`td`),vN(2778,`Formato para valores monetários. Informe o código da moeda (ISO 4217).`),ug(),Ac(2779,`td`)(2780,`code`),vN(2781,`'BRL'`),ug(),vN(2782,`, `),Ac(2783,`code`),vN(2784,`'USD'`),ug(),vN(2785,`, `),Ac(2786,`code`),vN(2787,`'EUR'`),ug(),vN(2788,`, `),Ac(2789,`code`),vN(2790,`'RUB'`),ug()()(),Ac(2791,`tr`)(2792,`td`),vN(2793,`Data`),ug(),Ac(2794,`td`)(2795,`code`),vN(2796,`date`),ug()(),Ac(2797,`td`),vN(2798,`Aceita apenas os caracteres de dia(dd), mês(MM) e ano (yyyy ou yy), caso não seja informado um formato o mesmo será 'dd/MM/yyyy'`),ug(),Ac(2799,`td`)(2800,`code`),vN(2801,`'dd/MM/yyyy'`),ug(),vN(2802,`, `),Ac(2803,`code`),vN(2804,`'dd-MM-yy'`),ug(),vN(2805,`, `),Ac(2806,`code`),vN(2807,`'mm/dd/yyyy'`),ug()()(),Ac(2808,`tr`)(2809,`td`),vN(2810,`Data/Hora`),ug(),Ac(2811,`td`)(2812,`code`),vN(2813,`dateTime`),ug()(),Ac(2814,`td`),vN(2815,`Aceita os caracteres de dia(dd), mês(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e período(a para AM/PM). Caso não seja informado um formato o mesmo será 'dd/MM/yyyy HH:mm:ss'`),ug(),Ac(2816,`td`)(2817,`code`),vN(2818,`'dd/MM/yyyy HH:mm'`),ug(),vN(2819,`, `),Ac(2820,`code`),vN(2821,`'dd/MM/yyyy HH:mm:ss'`),ug(),vN(2822,`, `),Ac(2823,`code`),vN(2824,`'dd/MM/yyyy HH:mm:ss.SSS'`),ug(),vN(2825,`, `),Ac(2826,`code`),vN(2827,`'MM/dd/yyyy hh:mm a'`),ug(),vN(2828,`, `),Ac(2829,`code`),vN(2830,`'yyyy-MM-dd HH:mm'`),ug(),vN(2831,`, `),Ac(2832,`code`),vN(2833,`'short'`),ug(),vN(2834,`, `),Ac(2835,`code`),vN(2836,`'medium'`),ug()()(),Ac(2837,`tr`)(2838,`td`),vN(2839,`Hora`),ug(),Ac(2840,`td`)(2841,`code`),vN(2842,`time`),ug()(),Ac(2843,`td`),vN(2844,`Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos são opcionais, caso não seja informado um formato o mesmo será 'HH:mm:ss'`),ug(),Ac(2845,`td`)(2846,`code`),vN(2847,`'HH:mm'`),ug(),vN(2848,`, `),Ac(2849,`code`),vN(2850,`'HH:mm:ss.ffffff'`),ug(),vN(2851,`, `),Ac(2852,`code`),vN(2853,`'HH:mm:ss.ff'`),ug(),vN(2854,`, `),Ac(2855,`code`),vN(2856,`'mm:ss.fff'`),ug()()(),Ac(2857,`tr`)(2858,`td`),vN(2859,`Número`),ug(),Ac(2860,`td`)(2861,`code`),vN(2862,`number`),ug()(),Ac(2863,`td`),vN(2864,`Aceita um valor seguindo o padrão `),Ac(2865,`a`,101)(2866,`strong`),vN(2867,`DecimalPipe`),ug()(),vN(2868,` para formatação, e caso não seja informado, o número será exibido na sua forma original.`),ug(),Ac(2869,`td`)(2870,`code`),vN(2871,`'1.2-5'`),ug(),vN(2872,` (ex.: `),Ac(2873,`code`),vN(2874,`50`),ug(),vN(2875,` → `),Ac(2876,`code`),vN(2877,`50.00`),ug(),vN(2878,`)`),ug()()()(),Ac(2879,`p`),vN(2880,`Observação: caso não seja informado um formato, o valor será exibido em sua forma original.`),ug()()(),Ac(2881,`tr`,17)(2882,`td`,18)(2883,`div`,19)(2884,`span`,20),vN(2885,` icons`),Kc(2886,`br`),ug()()(),Ac(2887,`td`,21)(2888,`code`,102),vN(2889,`Array<PoTableColumnIcon>`),ug()(),Ac(2890,`td`,24)(2891,`em`)(2892,`strong`),vN(2893,`(opcional)`),ug()(),Ac(2894,`p`),vN(2895,`Define um `),Ac(2896,`em`),vN(2897,`array`),ug(),vN(2898,` de objetos para colunas de ícones que irá sobrepor os valores como `),Ac(2899,`code`),vN(2900,`action`),ug(),vN(2901,` e `),Ac(2902,`code`),vN(2903,`color`),ug(),vN(2904,`
definidos na coluna, \xE0 partir do `),Ac(2905,`em`),vN(2906,`value`),ug(),vN(2907,` da `),Ac(2908,`a`,103)(2909,`code`),vN(2910,`PoTableColumnIcon`),ug()(),vN(2911,`, por exemplo:`),ug(),Ac(2912,`pre`)(2913,`code`),vN(2914,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),ug()(),Ac(2915,`pre`)(2916,`code`),vN(2917,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),ug()()()(),Ac(2918,`tr`,17)(2919,`td`,18)(2920,`div`,19)(2921,`span`,20),vN(2922,` label`),Kc(2923,`br`),ug()()(),Ac(2924,`td`,21)(2925,`code`,31),vN(2926,`string`),ug()(),Ac(2927,`td`,24)(2928,`em`)(2929,`strong`),vN(2930,`(opcional)`),ug()(),Ac(2931,`p`),vN(2932,`Texto para título da coluna.`),ug(),Ac(2933,`p`),vN(2934,`Caso não seja informado, será utilizado como `),Ac(2935,`em`),vN(2936,`label`),ug(),vN(2937,` o valor da propriedade `),Ac(2938,`em`),vN(2939,`property`),ug(),vN(2940,` com a primeira letra em maiúsculo.`),ug()()(),Ac(2941,`tr`,17)(2942,`td`,18)(2943,`div`,19)(2944,`span`,20),vN(2945,` labels`),Kc(2946,`br`),ug()()(),Ac(2947,`td`,21)(2948,`code`,104),vN(2949,`Array<PoTableColumnLabel>`),ug()(),Ac(2950,`td`,24)(2951,`em`)(2952,`strong`),vN(2953,`(opcional)`),ug()(),Ac(2954,`p`),vN(2955,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Ac(2956,`code`),vN(2957,`PoTableColumnLabel`),ug(),vN(2958,` na qual devem ser definidas os labels. Por exemplo:`),ug(),Ac(2959,`pre`)(2960,`code`),vN(2961,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),ug()()()(),Ac(2962,`tr`,17)(2963,`td`,18)(2964,`div`,19)(2965,`span`,20),vN(2966,` link`),Kc(2967,`br`),ug()()(),Ac(2968,`td`,21)(2969,`code`,31),vN(2970,`string`),ug()(),Ac(2971,`td`,24)(2972,`em`)(2973,`strong`),vN(2974,`(opcional)`),ug()(),Ac(2975,`p`),vN(2976,`Define o nome da propriedade que conterá o `),Ac(2977,`code`),vN(2978,`link`),ug(),vN(2979,` a ser redirecionado.`),ug()()(),Ac(2980,`tr`,17)(2981,`td`,18)(2982,`div`,19)(2983,`span`,20),vN(2984,` mask`),Kc(2985,`br`),ug()()(),Ac(2986,`td`,21)(2987,`code`,31),vN(2988,`string`),ug()(),Ac(2989,`td`,24)(2990,`em`)(2991,`strong`),vN(2992,`(opcional)`),ug()(),Ac(2993,`p`),vN(2994,`Define uma máscara para formatação do valor exibido na coluna.`),ug(),Ac(2995,`p`),vN(2996,`A máscara é aplicada somente para `),Ac(2997,`strong`),vN(2998,`exibição`),ug(),vN(2999,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),ug(),Ac(3e3,`p`),vN(3001,`Caracteres válidos para a máscara:`),ug(),Ac(3002,`ul`)(3003,`li`)(3004,`code`),vN(3005,`9`),ug(),vN(3006,` : aceita um dígito numérico (0-9).`),ug(),Ac(3007,`li`)(3008,`code`),vN(3009,`@`),ug(),vN(3010,` : aceita um caractere alfabético (a-z, A-Z).`),ug(),Ac(3011,`li`)(3012,`code`),vN(3013,`w`),ug(),vN(3014,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),ug(),Ac(3015,`li`),vN(3016,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Ac(3017,`code`),vN(3018,`.`),ug(),vN(3019,`, `),Ac(3020,`code`),vN(3021,`-`),ug(),vN(3022,`, `),Ac(3023,`code`),vN(3024,`/`),ug(),vN(3025,`, `),Ac(3026,`code`),vN(3027,`(`),ug(),vN(3028,`, `),Ac(3029,`code`),vN(3030,`)`),ug(),vN(3031,`, `),Ac(3032,`code`),vN(3033,`+`),ug(),vN(3034,`, `),Kc(3035,`code`),vN(3036,`).`),ug()(),Ac(3037,`p`),vN(3038,`Exemplos de uso:`),ug(),Ac(3039,`pre`)(3040,`code`),vN(3041,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),ug()(),Ac(3042,`blockquote`)(3043,`p`),vN(3044,`Esta propriedade é utilizada apenas para colunas do tipo `),Ac(3045,`code`),vN(3046,`string`),ug(),vN(3047,` (padr\xE3o).
Caso a coluna possua um `),Ac(3048,`code`),vN(3049,`type`),ug(),vN(3050,` diferente de `),Ac(3051,`code`),vN(3052,`string`),ug(),vN(3053,`, a máscara será ignorada.`),ug()()()(),Ac(3054,`tr`,17)(3055,`td`,18)(3056,`div`,19)(3057,`span`,20),vN(3058,` property`),Kc(3059,`br`),ug()()(),Ac(3060,`td`,21)(3061,`code`,31),vN(3062,`string`),ug()(),Ac(3063,`td`,24)(3064,`em`)(3065,`strong`),vN(3066,`(opcional)`),ug()(),Ac(3067,`p`),vN(3068,`Nome identificador da coluna. Também permite objetos aninhados conforme exemplo abaixo.`),ug(),Ac(3069,`pre`)(3070,`code`),vN(3071,`{ property: 'address.street', label: 'Rua' }
`),ug()()()(),Ac(3072,`tr`,17)(3073,`td`,18)(3074,`div`,19)(3075,`span`,20),vN(3076,` searchAiIgnore`),Kc(3077,`br`),ug()()(),Ac(3078,`td`,21)(3079,`code`,22),vN(3080,`boolean`),ug()(),Ac(3081,`td`,24)(3082,`em`)(3083,`strong`),vN(3084,`(opcional)`),ug()(),Ac(3085,`p`),vN(3086,`Quando `),Ac(3087,`code`),vN(3088,`true`),ug(),vN(3089,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),Ac(3090,`code`),vN(3091,`p-search-ai-field`),ug(),vN(3092,`, independentemente de estar visível na tabela.`),ug(),Ac(3093,`p`),vN(3094,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),ug()()(),Ac(3095,`tr`,17)(3096,`td`,18)(3097,`div`,19)(3098,`span`,20),vN(3099,` sortable`),Kc(3100,`br`),ug()()(),Ac(3101,`td`,21)(3102,`code`,22),vN(3103,`boolean`),ug()(),Ac(3104,`td`,24)(3105,`em`)(3106,`strong`),vN(3107,`(opcional)`),ug()(),Ac(3108,`p`),vN(3109,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),ug()()(),Ac(3110,`tr`,17)(3111,`td`,18)(3112,`div`,19)(3113,`span`,20),vN(3114,` subtitles`),Kc(3115,`br`),ug()()(),Ac(3116,`td`,21)(3117,`code`,105),vN(3118,`Array<PoTableSubtitleColumn>`),ug()(),Ac(3119,`td`,24)(3120,`em`)(3121,`strong`),vN(3122,`(opcional)`),ug()(),Ac(3123,`p`),vN(3124,`Define um array de objetos para as colunas de legenda. Onde, `),Ac(3125,`code`),vN(3126,`subtitles`),ug(),vN(3127,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),ug(),Ac(3128,`pre`)(3129,`code`),vN(3130,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),ug()(),Ac(3131,`p`),vN(3132,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),ug()()(),Ac(3133,`tr`,17)(3134,`td`,18)(3135,`div`,19)(3136,`span`,20),vN(3137,` tooltip`),Kc(3138,`br`),ug()()(),Ac(3139,`td`,21)(3140,`code`,31),vN(3141,`string`),ug()(),Ac(3142,`td`,24)(3143,`em`)(3144,`strong`),vN(3145,`(opcional)`),ug()(),Ac(3146,`p`),vN(3147,`Define um texto de ajuda que será exibido ao passar o `),Ac(3148,`em`),vN(3149,`mouse`),ug(),vN(3150,` sobre um texto.`),ug(),Ac(3151,`blockquote`)(3152,`p`),vN(3153,`O tooltip só será visível se for uma coluna do tipo `),Ac(3154,`em`),vN(3155,`link`),ug(),vN(3156,`.`),ug()(),Ac(3157,`blockquote`)(3158,`p`),vN(3159,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Ac(3160,`em`),vN(3161,`tooltip`),ug(),vN(3162,` e será exibido justamente o conteúdo da célula.`),ug()()()(),Ac(3163,`tr`,17)(3164,`td`,18)(3165,`div`,19)(3166,`span`,20),vN(3167,` type`),Kc(3168,`br`),ug()()(),Ac(3169,`td`,21)(3170,`code`,31),vN(3171,`string`),ug()(),Ac(3172,`td`,24)(3173,`em`)(3174,`strong`),vN(3175,`(opcional)`),ug()(),Ac(3176,`p`),vN(3177,`Tipo da coluna.`),ug(),Ac(3178,`p`),vN(3179,`Valores válidos:`),ug(),Ac(3180,`ul`)(3181,`li`)(3182,`p`)(3183,`code`),vN(3184,`boolean`),ug(),vN(3185,`: Exibirá por padrão `),Ac(3186,`code`),vN(3187,`Sim`),ug(),vN(3188,` e `),Ac(3189,`code`),vN(3190,`Não`),ug(),vN(3191,` de acordo com os valores `),Ac(3192,`em`),vN(3193,`booleanos`),ug(),vN(3194,`.`),ug(),Ac(3195,`blockquote`)(3196,`p`),vN(3197,`Caso necessite exibir valores diferentes do padrão, deve-se utilizar a propriedade `),Ac(3198,`code`),vN(3199,`boolean`),ug(),vN(3200,` desta interface.`),ug()()(),Ac(3201,`li`)(3202,`p`)(3203,`code`),vN(3204,`currency`),ug(),vN(3205,`: valores monetários.`),ug()(),Ac(3206,`li`)(3207,`p`)(3208,`code`),vN(3209,`date`),ug(),vN(3210,`: valor de datas.`),ug(),Ac(3211,`ul`)(3212,`li`),vN(3213,`Aceita os tipos `),Ac(3214,`em`),vN(3215,`string`),ug(),vN(3216,` e `),Ac(3217,`em`),vN(3218,`Date`),ug(),vN(3219,` padr\xE3o do Javascript,
por exemplo: `),Ac(3220,`code`),vN(3221,`'2017-11-28'`),ug(),vN(3222,` ou `),Ac(3223,`code`),vN(3224,`new Date(2017, 10, 28)`),ug(),vN(3225,`.`),ug()()(),Ac(3226,`li`)(3227,`p`)(3228,`code`),vN(3229,`dateTime`),ug(),vN(3230,`: valor de data com horário.`),ug(),Ac(3231,`ul`)(3232,`li`),vN(3233,`Aceita o tipo `),Ac(3234,`em`),vN(3235,`string`),ug(),vN(3236,` no formato `),Ac(3237,`strong`),vN(3238,`ISO-8601`),ug(),vN(3239,` extendido `),Ac(3240,`strong`),vN(3241,`'yyyy-mm-ddTHH:mm:ss+|-hh:mm'`),ug(),vN(3242,`
ou `),Ac(3243,`strong`),vN(3244,`'yyyy-mm-ddTHH:mm+|-hh:mm'`),ug(),vN(3245,` (sem segundos),
e o tipo `),Ac(3246,`em`),vN(3247,`Date`),ug(),vN(3248,` padrão do Javascript, por exemplo: `),Ac(3249,`code`),vN(3250,`'2017-11-28T00:00:00-02:00'`),ug(),vN(3251,`, `),Ac(3252,`code`),vN(3253,`'2017-11-28T14:30-02:00'`),ug(),vN(3254,` ou `),Ac(3255,`code`),vN(3256,`new Date(2017, 10, 28)`),ug(),vN(3257,`.`),ug(),Ac(3258,`li`),vN(3259,`A formatação de exibição pode ser configurada pela propriedade `),Ac(3260,`code`),vN(3261,`format`),ug(),vN(3262,`.`),ug()()(),Ac(3263,`li`)(3264,`p`)(3265,`code`),vN(3266,`detail`),ug(),vN(3267,`: array de objetos para o master-detail.`),ug(),Ac(3268,`ul`)(3269,`li`),vN(3270,`Incompatível com `),Ac(3271,`code`),vN(3272,`virtual-scroll`),ug(),vN(3273,`, que requer altura fixa nas linhas.`),ug()()(),Ac(3274,`li`)(3275,`p`)(3276,`code`),vN(3277,`icon`),ug(),vN(3278,`: `),Ac(3279,`em`),vN(3280,`array`),ug(),vN(3281,` de `),Ac(3282,`em`),vN(3283,`string`),ug(),vN(3284,` ou objetos para a coluna de ícones.`),ug()(),Ac(3285,`li`)(3286,`p`)(3287,`code`),vN(3288,`label`),ug(),vN(3289,`: texto com destaque.`),ug()(),Ac(3290,`li`)(3291,`p`)(3292,`code`),vN(3293,`link`),ug(),vN(3294,`: habilita link na coluna para ação ou navegação.`),ug()(),Ac(3295,`li`)(3296,`p`)(3297,`code`),vN(3298,`number`),ug(),vN(3299,`: valores numéricos.`),ug()(),Ac(3300,`li`)(3301,`p`)(3302,`code`),vN(3303,`string`),ug(),vN(3304,`: textos.`),ug()(),Ac(3305,`li`)(3306,`p`)(3307,`code`),vN(3308,`subtitle`),ug(),vN(3309,`: array de objetos para a coluna de legenda.`),ug()(),Ac(3310,`li`)(3311,`p`)(3312,`code`),vN(3313,`time`),ug(),vN(3314,`: valor de horário.`),ug(),Ac(3315,`ul`)(3316,`li`),vN(3317,`Aceita o tipo `),Ac(3318,`em`),vN(3319,`string`),ug(),vN(3320,` nos formatos `),Ac(3321,`strong`),vN(3322,`'HH:mm:ss'`),ug(),vN(3323,` ou `),Ac(3324,`strong`),vN(3325,`'HH:mm:ss.ffffff'`),ug(),vN(3326,`, por exemplo: `),Ac(3327,`code`),vN(3328,`'23:12:45'`),ug(),vN(3329,`.`),ug()()(),Ac(3330,`li`)(3331,`p`)(3332,`code`),vN(3333,`cellTemplate`),ug(),vN(3334,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Ac(3335,`a`,8),vN(3336,`PoTableCellTemplate`),ug(),vN(3337,`.`),ug()(),Ac(3338,`li`)(3339,`p`)(3340,`code`),vN(3341,`columnTemplate`),ug(),vN(3342,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Ac(3343,`a`,7),vN(3344,`PoTableColumnTemplate`),ug(),vN(3345,`.`),ug()()()()(),Ac(3346,`tr`,17)(3347,`td`,18)(3348,`div`,19)(3349,`span`,20),vN(3350,` visible`),Kc(3351,`br`),ug()()(),Ac(3352,`td`,21)(3353,`code`,22),vN(3354,`boolean`),ug()(),Ac(3355,`td`,24)(3356,`em`)(3357,`strong`),vN(3358,`(opcional)`),ug()(),Ac(3359,`p`),vN(3360,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Ac(3361,`strong`),vN(3362,`gerenciador de colunas`),ug(),vN(3363,`.`),ug(),Ac(3364,`blockquote`)(3365,`p`),vN(3366,`A disponibilidade de visualização pode limitar-se de acordo com a definição de `),Ac(3367,`code`),vN(3368,`p-max-columns`),ug(),vN(3369,`.`),ug()()()(),Ac(3370,`tr`,17)(3371,`td`,18)(3372,`div`,19)(3373,`span`,20),vN(3374,` width`),Kc(3375,`br`),ug()()(),Ac(3376,`td`,21)(3377,`code`,31),vN(3378,`string`),ug()(),Ac(3379,`td`,24)(3380,`em`)(3381,`strong`),vN(3382,`(opcional)`),ug()(),Ac(3383,`p`),vN(3384,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),ug(),Ac(3385,`ul`)(3386,`li`),vN(3387,`para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px`),ug(),Ac(3388,`li`),vN(3389,`para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px`),ug()()()()(),Ac(3390,`h4`,46)(3391,`code`,5),vN(3392,`PoTableLiterals`),ug()(),Ac(3393,`div`,2)(3394,`p`),vN(3395,`Interface para definição das literais usadas no `),Ac(3396,`code`),vN(3397,`po-table`),ug(),vN(3398,`.`),ug()(),Ac(3399,`h4`,13),vN(3400,`Propriedades`),ug(),Ac(3401,`table`,14)(3402,`tr`,15)(3403,`th`,16),vN(3404,`Nome`),ug(),Ac(3405,`th`,16),vN(3406,`Tipo`),ug(),Ac(3407,`th`,16),vN(3408,`Descrição`),ug()(),Ac(3409,`tr`,17)(3410,`td`,18)(3411,`div`,19)(3412,`span`,20),vN(3413,` bodyDelete`),Kc(3414,`br`),ug()()(),Ac(3415,`td`,21)(3416,`code`,31),vN(3417,`string`),ug()(),Ac(3418,`td`,24)(3419,`em`)(3420,`strong`),vN(3421,`(opcional)`),ug()(),Ac(3422,`p`),vN(3423,`Texto no corpo do Modal de exclusão`),ug()()(),Ac(3424,`tr`,17)(3425,`td`,18)(3426,`div`,19)(3427,`span`,20),vN(3428,` cancel`),Kc(3429,`br`),ug()()(),Ac(3430,`td`,21)(3431,`code`,31),vN(3432,`string`),ug()(),Ac(3433,`td`,24)(3434,`em`)(3435,`strong`),vN(3436,`(opcional)`),ug()(),Ac(3437,`p`),vN(3438,`Texto no Modal para cancelar a exclusão`),ug()()(),Ac(3439,`tr`,17)(3440,`td`,18)(3441,`div`,19)(3442,`span`,20),vN(3443,` columnsManager`),Kc(3444,`br`),ug()()(),Ac(3445,`td`,21)(3446,`code`,31),vN(3447,`string`),ug()(),Ac(3448,`td`,24)(3449,`em`)(3450,`strong`),vN(3451,`(opcional)`),ug()(),Ac(3452,`p`),vN(3453,`Texto do `),Ac(3454,`strong`),vN(3455,`Gerenciador de colunas`),ug(),vN(3456,` localizado no canto superior direito da tabela.`),ug()()(),Ac(3457,`tr`,17)(3458,`td`,18)(3459,`div`,19)(3460,`span`,20),vN(3461,` completeSubtitle`),Kc(3462,`br`),ug()()(),Ac(3463,`td`,21)(3464,`code`,31),vN(3465,`string`),ug()(),Ac(3466,`td`,24)(3467,`em`)(3468,`strong`),vN(3469,`(opcional)`),ug()(),Ac(3470,`p`),vN(3471,`Título da modal 'Legenda completa' que aparece ao clicar no botão 'Ver legenda completa'.`),ug()()(),Ac(3472,`tr`,17)(3473,`td`,18)(3474,`div`,19)(3475,`span`,20),vN(3476,` delete`),Kc(3477,`br`),ug()()(),Ac(3478,`td`,21)(3479,`code`,31),vN(3480,`string`),ug()(),Ac(3481,`td`,24)(3482,`em`)(3483,`strong`),vN(3484,`(opcional)`),ug()(),Ac(3485,`p`),vN(3486,`Texto no Modal para confirmar a exclusão`),ug()()(),Ac(3487,`tr`,17)(3488,`td`,18)(3489,`div`,19)(3490,`span`,20),vN(3491,` deleteApiError`),Kc(3492,`br`),ug()()(),Ac(3493,`td`,21)(3494,`code`,31),vN(3495,`string`),ug()(),Ac(3496,`td`,24)(3497,`em`)(3498,`strong`),vN(3499,`(opcional)`),ug()(),Ac(3500,`p`),vN(3501,`Texto de notificação de erro na requisição Delete`),ug()()(),Ac(3502,`tr`,17)(3503,`td`,18)(3504,`div`,19)(3505,`span`,20),vN(3506,` deleteSuccessful`),Kc(3507,`br`),ug()()(),Ac(3508,`td`,21)(3509,`code`,31),vN(3510,`string`),ug()(),Ac(3511,`td`,24)(3512,`em`)(3513,`strong`),vN(3514,`(opcional)`),ug()(),Ac(3515,`p`),vN(3516,`Texto de notificação de remoção com sucesso`),ug()()(),Ac(3517,`tr`,17)(3518,`td`,18)(3519,`div`,19)(3520,`span`,20),vN(3521,` loadMoreData`),Kc(3522,`br`),ug()()(),Ac(3523,`td`,21)(3524,`code`,31),vN(3525,`string`),ug()(),Ac(3526,`td`,24)(3527,`em`)(3528,`strong`),vN(3529,`(opcional)`),ug()(),Ac(3530,`p`),vN(3531,`Texto do botão de `),Ac(3532,`strong`),vN(3533,`Carregar mais resultados`),ug(),vN(3534,` localizado no rodapé da tabela.`),ug()()(),Ac(3535,`tr`,17)(3536,`td`,18)(3537,`div`,19)(3538,`span`,20),vN(3539,` loadingData`),Kc(3540,`br`),ug()()(),Ac(3541,`td`,21)(3542,`code`,31),vN(3543,`string`),ug()(),Ac(3544,`td`,24)(3545,`em`)(3546,`strong`),vN(3547,`(opcional)`),ug()(),Ac(3548,`p`),vN(3549,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),ug()()(),Ac(3550,`tr`,17)(3551,`td`,18)(3552,`div`,19)(3553,`span`,20),vN(3554,` multipleItems`),Kc(3555,`br`),ug()()(),Ac(3556,`td`,21)(3557,`code`,31),vN(3558,`string`),ug()(),Ac(3559,`td`,24)(3560,`em`)(3561,`strong`),vN(3562,`(opcional)`),ug()(),Ac(3563,`p`),vN(3564,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),ug()()(),Ac(3565,`tr`,17)(3566,`td`,18)(3567,`div`,19)(3568,`span`,20),vN(3569,` noColumns`),Kc(3570,`br`),ug()()(),Ac(3571,`td`,21)(3572,`code`,31),vN(3573,`string`),ug()(),Ac(3574,`td`,24)(3575,`em`)(3576,`strong`),vN(3577,`(opcional)`),ug()(),Ac(3578,`p`),vN(3579,`Texto exibido quando não existem colunas definidas para a tabela.`),ug()()(),Ac(3580,`tr`,17)(3581,`td`,18)(3582,`div`,19)(3583,`span`,20),vN(3584,` noData`),Kc(3585,`br`),ug()()(),Ac(3586,`td`,21)(3587,`code`,31),vN(3588,`string`),ug()(),Ac(3589,`td`,24)(3590,`em`)(3591,`strong`),vN(3592,`(opcional)`),ug()(),Ac(3593,`p`),vN(3594,`Texto exibido quando não existem itens para serem exibidos na tabela.`),ug()()(),Ac(3595,`tr`,17)(3596,`td`,18)(3597,`div`,19)(3598,`span`,20),vN(3599,` noItem`),Kc(3600,`br`),ug()()(),Ac(3601,`td`,21)(3602,`code`,31),vN(3603,`string`),ug()(),Ac(3604,`td`,24)(3605,`em`)(3606,`strong`),vN(3607,`(opcional)`),ug()(),Ac(3608,`p`),vN(3609,`Texto exibido quando nenhum item for selecionado no checkbox.`),ug()()(),Ac(3610,`tr`,17)(3611,`td`,18)(3612,`div`,19)(3613,`span`,20),vN(3614,` noVisibleColumn`),Kc(3615,`br`),ug()()(),Ac(3616,`td`,21)(3617,`code`,31),vN(3618,`string`),ug()(),Ac(3619,`td`,24)(3620,`em`)(3621,`strong`),vN(3622,`(opcional)`),ug()(),Ac(3623,`p`),vN(3624,`Texto exibido quando não existem colunas visíveis para a tabela.`),ug()()(),Ac(3625,`tr`,17)(3626,`td`,18)(3627,`div`,19)(3628,`span`,20),vN(3629,` oneItem`),Kc(3630,`br`),ug()()(),Ac(3631,`td`,21)(3632,`code`,31),vN(3633,`string`),ug()(),Ac(3634,`td`,24)(3635,`em`)(3636,`strong`),vN(3637,`(opcional)`),ug()(),Ac(3638,`p`),vN(3639,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),ug()()(),Ac(3640,`tr`,17)(3641,`td`,18)(3642,`div`,19)(3643,`span`,20),vN(3644,` searchAiPlaceholder`),Kc(3645,`br`),ug()()(),Ac(3646,`td`,21)(3647,`code`,31),vN(3648,`string`),ug()(),Ac(3649,`td`,24)(3650,`em`)(3651,`strong`),vN(3652,`(opcional)`),ug()(),Ac(3653,`p`),vN(3654,`Texto exibido como placeholder padrão no campo de busca por IA (`),Ac(3655,`code`),vN(3656,`p-search-ai-field`),ug(),vN(3657,`) quando nenhum `),Ac(3658,`code`),vN(3659,`placeholder`),ug(),vN(3660,` é informado.`),ug()()(),Ac(3661,`tr`,17)(3662,`td`,18)(3663,`div`,19)(3664,`span`,20),vN(3665,` seeCompleteSubtitle`),Kc(3666,`br`),ug()()(),Ac(3667,`td`,21)(3668,`code`,31),vN(3669,`string`),ug()(),Ac(3670,`td`,24)(3671,`em`)(3672,`strong`),vN(3673,`(opcional)`),ug()(),Ac(3674,`p`),vN(3675,`Texto do botão `),Ac(3676,`strong`),vN(3677,`Ver legenda completa`),ug(),vN(3678,` que aparece quando o rodapé de legendas é maior que a tabela.`),ug()()()(),Ac(3679,`h4`,46)(3680,`code`,5),vN(3681,`PoTableSearchAiField`),ug()(),Ac(3682,`div`,2)(3683,`p`),vN(3684,`Interface de configuração da busca por IA integrada ao `),Ac(3685,`code`),vN(3686,`po-table`),ug(),vN(3687,`, utilizada pela
propriedade `),Ac(3688,`code`),vN(3689,`p-search-ai-field`),ug(),vN(3690,`.`),ug(),Ac(3691,`p`),vN(3692,`Quando configurada, a tabela renderiza um campo `),Ac(3693,`code`),vN(3694,`po-search-ai`),ug(),vN(3695,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),Ac(3696,`code`),vN(3697,`po-search`),ug(),vN(3698,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),Ac(3699,`code`),vN(3700,`apply`),ug(),vN(3701,`.`),ug(),Ac(3702,`h4`),vN(3703,`Endpoint de IA (`),Ac(3704,`code`),vN(3705,`url`),ug(),vN(3706,`)`),ug(),Ac(3707,`p`),vN(3708,`O campo `),Ac(3709,`code`),vN(3710,`url`),ug(),vN(3711,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),Ac(3712,`code`),vN(3713,`po-search-ai`),ug(),vN(3714,`: recebe `),Ac(3715,`code`),vN(3716,`{ query, columns }`),ug(),vN(3717,` via `),Ac(3718,`code`),vN(3719,`POST`),ug(),vN(3720,` e responde com
`),Ac(3721,`code`),vN(3722,`{ filter, description, confidence }`),ug(),vN(3723,`.`),ug(),Ac(3724,`blockquote`)(3725,`p`),vN(3726,`A integração com a LLM e a guarda de chaves devem ocorrer `),Ac(3727,`strong`),vN(3728,`no backend`),ug(),vN(3729,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),Ac(3730,`a`,40)(3731,`code`),vN(3732,`po-sample-api`),ug()(),vN(3733,`.`),ug()(),Ac(3734,`h4`),vN(3735,`Colunas enviadas à IA`),ug(),Ac(3736,`p`),vN(3737,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),Ac(3738,`code`),vN(3739,`p-columns`),ug(),vN(3740,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),Ac(3741,`code`),vN(3742,`searchAiIgnore: true`),ug(),vN(3743,`. O campo `),Ac(3744,`code`),vN(3745,`columns`),ug(),vN(3746,` permite sobrescrever esse comportamento.`),ug(),Ac(3747,`h4`),vN(3748,`Estratégia de aplicação do filtro (`),Ac(3749,`code`),vN(3750,`apply`),ug(),vN(3751,`)`),ug(),Ac(3752,`table`)(3753,`thead`)(3754,`tr`)(3755,`th`),vN(3756,`Valor`),ug(),Ac(3757,`th`),vN(3758,`Comportamento`),ug()()(),Ac(3759,`tbody`)(3760,`tr`)(3761,`td`)(3762,`code`),vN(3763,`'auto'`),ug(),vN(3764,` (padrão)`),ug(),Ac(3765,`td`),vN(3766,`Modo serviço: envia `),Ac(3767,`code`),vN(3768,`$filter`),ug(),vN(3769,` ao `),Ac(3770,`code`),vN(3771,`p-service-api`),ug(),vN(3772,`; modo local: aplica o parser OData interno sobre `),Ac(3773,`code`),vN(3774,`p-items`),ug(),vN(3775,`.`),ug()(),Ac(3776,`tr`)(3777,`td`)(3778,`code`),vN(3779,`'parser'`),ug()(),Ac(3780,`td`),vN(3781,`Sempre usa o parser OData interno. No modo serviço, busca todos os dados e filtra localmente.`),ug()(),Ac(3782,`tr`)(3783,`td`)(3784,`code`),vN(3785,`'server'`),ug()(),Ac(3786,`td`),vN(3787,`Sempre delega o filtro ao `),Ac(3788,`code`),vN(3789,`p-service-api`),ug(),vN(3790,` via `),Ac(3791,`code`),vN(3792,`$filter`),ug(),vN(3793,`.`),ug()(),Ac(3794,`tr`)(3795,`td`)(3796,`code`),vN(3797,`'none'`),ug()(),Ac(3798,`td`),vN(3799,`Não aplica o filtro; apenas emite `),Ac(3800,`code`),vN(3801,`p-search-ai-result`),ug(),vN(3802,` para o desenvolvedor tratar.`),ug()(),Ac(3803,`tr`)(3804,`td`)(3805,`code`),vN(3806,`(result) => void`),ug()(),Ac(3807,`td`),vN(3808,`Override total: o desenvolvedor recebe o resultado e assume o controle.`),ug()()()()(),Ac(3809,`h4`,13),vN(3810,`Propriedades`),ug(),Ac(3811,`table`,14)(3812,`tr`,15)(3813,`th`,16),vN(3814,`Nome`),ug(),Ac(3815,`th`,16),vN(3816,`Tipo`),ug(),Ac(3817,`th`,16),vN(3818,`Descrição`),ug()(),Ac(3819,`tr`,17)(3820,`td`,18)(3821,`div`,19)(3822,`span`,20),vN(3823,` apply`),Kc(3824,`br`),ug()()(),Ac(3825,`td`,21)(3826,`code`,106),vN(3827,`'auto' `),ug(),Ac(3828,`code`,107),vN(3829,` 'parser' `),ug(),Ac(3830,`code`,108),vN(3831,` 'server' `),ug(),Ac(3832,`code`,109),vN(3833,` 'none' `),ug(),Ac(3834,`code`,110),vN(3835,` ((result: PoSearchAiResult) => void)`),ug()(),Ac(3836,`td`,24)(3837,`em`)(3838,`strong`),vN(3839,`(opcional)`),ug()(),Ac(3840,`p`),vN(3841,`Define como o filtro OData retornado pela IA é aplicado à tabela.`),ug(),Ac(3842,`ul`)(3843,`li`)(3844,`code`),vN(3845,`'auto'`),ug(),Ac(3846,`em`),vN(3847,`(padrão)`),ug(),vN(3848,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),Ac(3849,`code`),vN(3850,`$filter`),ug(),vN(3851,` ao `),Ac(3852,`code`),vN(3853,`p-service-api`),ug(),vN(3854,`; modo local usa o parser
OData interno sobre `),Ac(3855,`code`),vN(3856,`p-items`),ug(),vN(3857,`.`),ug(),Ac(3858,`li`)(3859,`code`),vN(3860,`'parser'`),ug(),vN(3861,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),ug(),Ac(3862,`li`)(3863,`code`),vN(3864,`'server'`),ug(),vN(3865,`: sempre envia `),Ac(3866,`code`),vN(3867,`$filter`),ug(),vN(3868,` ao `),Ac(3869,`code`),vN(3870,`p-service-api`),ug(),vN(3871,`, independentemente
do modo da tabela.`),ug(),Ac(3872,`li`)(3873,`code`),vN(3874,`'none'`),ug(),vN(3875,`: não aplica o filtro; apenas emite `),Ac(3876,`code`),vN(3877,`p-search-ai-result`),ug(),vN(3878,`.`),ug(),Ac(3879,`li`)(3880,`code`),vN(3881,`(result: PoSearchAiResult) => void`),ug(),vN(3882,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),ug()()()(),Ac(3883,`tr`,17)(3884,`td`,18)(3885,`div`,19)(3886,`span`,20),vN(3887,` columns`),Kc(3888,`br`),ug()()(),Ac(3889,`td`,21)(3890,`code`,111),vN(3891,`Array<PoSearchAiColumn>`),ug()(),Ac(3892,`td`,24)(3893,`em`)(3894,`strong`),vN(3895,`(opcional)`),ug()(),Ac(3896,`p`),vN(3897,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),Ac(3898,`code`),vN(3899,`p-columns`),ug(),vN(3900,` da tabela, excluindo colunas com
`),Ac(3901,`code`),vN(3902,`visible: false`),ug(),vN(3903,` ou `),Ac(3904,`code`),vN(3905,`searchAiIgnore: true`),ug(),vN(3906,`.`),ug()()(),Ac(3907,`tr`,17)(3908,`td`,18)(3909,`div`,19)(3910,`span`,20),vN(3911,` literals`),Kc(3912,`br`),ug()()(),Ac(3913,`td`,21)(3914,`code`,112),vN(3915,`PoSearchAiLiterals`),ug()(),Ac(3916,`td`,24)(3917,`em`)(3918,`strong`),vN(3919,`(opcional)`),ug()(),Ac(3920,`p`),vN(3921,`Objeto com os literais usados pelo `),Ac(3922,`code`),vN(3923,`po-search-ai`),ug(),vN(3924,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),ug()()(),Ac(3925,`tr`,17)(3926,`td`,18)(3927,`div`,19)(3928,`span`,20),vN(3929,` minConfidence`),Kc(3930,`br`),ug()()(),Ac(3931,`td`,21)(3932,`code`,35),vN(3933,`number`),ug()(),Ac(3934,`td`,24)(3935,`em`)(3936,`strong`),vN(3937,`(opcional)`),ug()(),Ac(3938,`p`),vN(3939,`Nível mínimo de confiança (`),Ac(3940,`code`),vN(3941,`0.0`),ug(),vN(3942,` a `),Ac(3943,`code`),vN(3944,`1.0`),ug(),vN(3945,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),Ac(3946,`code`),vN(3947,`p-search-ai-low-confidence`),ug(),vN(3948,` é emitido em vez de `),Ac(3949,`code`),vN(3950,`p-search-ai-result`),ug(),vN(3951,`.`),ug()()(),Ac(3952,`tr`,17)(3953,`td`,18)(3954,`div`,19)(3955,`span`,20),vN(3956,` placeholder`),Kc(3957,`br`),ug()()(),Ac(3958,`td`,21)(3959,`code`,31),vN(3960,`string`),ug()(),Ac(3961,`td`,24)(3962,`em`)(3963,`strong`),vN(3964,`(opcional)`),ug()(),Ac(3965,`p`),vN(3966,`Texto exibido como placeholder no campo de busca por IA.`),ug()()(),Ac(3967,`tr`,17)(3968,`td`,18)(3969,`div`,19)(3970,`span`,20),vN(3971,` timeout`),Kc(3972,`br`),ug()()(),Ac(3973,`td`,21)(3974,`code`,35),vN(3975,`number`),ug()(),Ac(3976,`td`,24)(3977,`em`)(3978,`strong`),vN(3979,`(opcional)`),ug()(),Ac(3980,`p`),vN(3981,`Tempo máximo de espera (em milissegundos) pela resposta do endpoint de IA.`),ug()()(),Ac(3982,`tr`,17)(3983,`td`,18)(3984,`div`,19)(3985,`span`,20),vN(3986,` url`),Kc(3987,`br`),ug()()(),Ac(3988,`td`,21)(3989,`code`,31),vN(3990,`string`),ug()(),Ac(3991,`td`,24)(3992,`p`),vN(3993,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),Ac(3994,`code`),vN(3995,`po-search-ai`),ug(),vN(3996,` via `),Ac(3997,`code`),vN(3998,`p-url`),ug(),vN(3999,`.`),ug(),Ac(4e3,`p`),vN(4001,`O endpoint deve seguir o contrato do backend de referência (`),Ac(4002,`code`),vN(4003,`po-sample-api`),ug(),vN(4004,`):`),ug(),Ac(4005,`ul`)(4006,`li`),vN(4007,`Recebe: `),Ac(4008,`code`),vN(4009,`POST { query: string, columns: PoSearchAiColumn[] }`),ug()(),Ac(4010,`li`),vN(4011,`Responde: `),Ac(4012,`code`),vN(4013,`{ filter: string, description: string, confidence: number }`),ug()()()()()(),Ac(4014,`h4`,46)(4015,`code`,5),vN(4016,`PoTableColumnIcon`),ug()(),Ac(4017,`div`,2)(4018,`p`),Kc(4019,`a`,113),ug(),Ac(4020,`p`),vN(4021,`Interface que define a coluna com ícone(s) do `),Ac(4022,`code`),vN(4023,`po-table`),ug(),vN(4024,`.`),ug()(),Ac(4025,`h4`,13),vN(4026,`Propriedades`),ug(),Ac(4027,`table`,14)(4028,`tr`,15)(4029,`th`,16),vN(4030,`Nome`),ug(),Ac(4031,`th`,16),vN(4032,`Tipo`),ug(),Ac(4033,`th`,16),vN(4034,`Descrição`),ug()(),Ac(4035,`tr`,17)(4036,`td`,18)(4037,`div`,19)(4038,`span`,20),vN(4039,` action`),Kc(4040,`br`),ug()()(),Ac(4041,`td`,21)(4042,`code`,47),vN(4043,`Function`),ug()(),Ac(4044,`td`,24)(4045,`em`)(4046,`strong`),vN(4047,`(opcional)`),ug()(),Ac(4048,`p`),vN(4049,`Define a ação que será executada ao clicar no ícone.`),ug()()(),Ac(4050,`tr`,17)(4051,`td`,18)(4052,`div`,19)(4053,`span`,20),vN(4054,` color`),Kc(4055,`br`),ug()()(),Ac(4056,`td`,21)(4057,`code`,31),vN(4058,`string `),ug(),Ac(4059,`code`,47),vN(4060,` Function`),ug()(),Ac(4061,`td`,24)(4062,`em`)(4063,`strong`),vN(4064,`(opcional)`),ug()(),Ac(4065,`p`),vN(4066,`Define a cor do ícone.`),ug(),Ac(4067,`p`),vN(4068,`Valores válidos:`),ug(),Ac(4069,`ul`)(4070,`li`),Kc(4071,`span`,53),Ac(4072,`code`),vN(4073,`color-01`),ug()(),Ac(4074,`li`),Kc(4075,`span`,54),Ac(4076,`code`),vN(4077,`color-02`),ug()(),Ac(4078,`li`),Kc(4079,`span`,55),Ac(4080,`code`),vN(4081,`color-03`),ug()(),Ac(4082,`li`),Kc(4083,`span`,56),Ac(4084,`code`),vN(4085,`color-04`),ug()(),Ac(4086,`li`),Kc(4087,`span`,57),Ac(4088,`code`),vN(4089,`color-05`),ug()(),Ac(4090,`li`),Kc(4091,`span`,58),Ac(4092,`code`),vN(4093,`color-06`),ug()(),Ac(4094,`li`),Kc(4095,`span`,59),Ac(4096,`code`),vN(4097,`color-07`),ug()(),Ac(4098,`li`),Kc(4099,`span`,60),Ac(4100,`code`),vN(4101,`color-08`),ug()(),Ac(4102,`li`),Kc(4103,`span`,61),Ac(4104,`code`),vN(4105,`color-09`),ug()(),Ac(4106,`li`),Kc(4107,`span`,62),Ac(4108,`code`),vN(4109,`color-10`),ug()(),Ac(4110,`li`),Kc(4111,`span`,63),Ac(4112,`code`),vN(4113,`color-11`),ug()(),Ac(4114,`li`),Kc(4115,`span`,64),Ac(4116,`code`),vN(4117,`color-12`),ug()()(),Ac(4118,`blockquote`)(4119,`p`),vN(4120,`Também é possível utilizar as 35 cores da paleta `),Ac(4121,`strong`),vN(4122,`Caption Tag Colors`),ug(),vN(4123,`:`),ug()(),Ac(4124,`ul`)(4125,`li`),Kc(4126,`span`,65),Ac(4127,`code`),vN(4128,`caption-tag-01`),ug(),Kc(4129,`span`,66),Ac(4130,`code`),vN(4131,`caption-tag-02`),ug(),Kc(4132,`span`,67),Ac(4133,`code`),vN(4134,`caption-tag-03`),ug(),Kc(4135,`span`,68),Ac(4136,`code`),vN(4137,`caption-tag-04`),ug(),Kc(4138,`span`,69),Ac(4139,`code`),vN(4140,`caption-tag-05`),ug()(),Ac(4141,`li`),Kc(4142,`span`,70),Ac(4143,`code`),vN(4144,`caption-tag-06`),ug(),Kc(4145,`span`,71),Ac(4146,`code`),vN(4147,`caption-tag-07`),ug(),Kc(4148,`span`,72),Ac(4149,`code`),vN(4150,`caption-tag-08`),ug(),Kc(4151,`span`,73),Ac(4152,`code`),vN(4153,`caption-tag-09`),ug(),Kc(4154,`span`,74),Ac(4155,`code`),vN(4156,`caption-tag-10`),ug()(),Ac(4157,`li`),Kc(4158,`span`,75),Ac(4159,`code`),vN(4160,`caption-tag-11`),ug(),Kc(4161,`span`,76),Ac(4162,`code`),vN(4163,`caption-tag-12`),ug(),Kc(4164,`span`,77),Ac(4165,`code`),vN(4166,`caption-tag-13`),ug(),Kc(4167,`span`,78),Ac(4168,`code`),vN(4169,`caption-tag-14`),ug(),Kc(4170,`span`,79),Ac(4171,`code`),vN(4172,`caption-tag-15`),ug()(),Ac(4173,`li`),Kc(4174,`span`,80),Ac(4175,`code`),vN(4176,`caption-tag-16`),ug(),Kc(4177,`span`,81),Ac(4178,`code`),vN(4179,`caption-tag-17`),ug(),Kc(4180,`span`,82),Ac(4181,`code`),vN(4182,`caption-tag-18`),ug(),Kc(4183,`span`,83),Ac(4184,`code`),vN(4185,`caption-tag-19`),ug(),Kc(4186,`span`,84),Ac(4187,`code`),vN(4188,`caption-tag-20`),ug()(),Ac(4189,`li`),Kc(4190,`span`,85),Ac(4191,`code`),vN(4192,`caption-tag-21`),ug(),Kc(4193,`span`,86),Ac(4194,`code`),vN(4195,`caption-tag-22`),ug(),Kc(4196,`span`,87),Ac(4197,`code`),vN(4198,`caption-tag-23`),ug(),Kc(4199,`span`,88),Ac(4200,`code`),vN(4201,`caption-tag-24`),ug(),Kc(4202,`span`,89),Ac(4203,`code`),vN(4204,`caption-tag-25`),ug()(),Ac(4205,`li`),Kc(4206,`span`,90),Ac(4207,`code`),vN(4208,`caption-tag-26`),ug(),Kc(4209,`span`,91),Ac(4210,`code`),vN(4211,`caption-tag-27`),ug(),Kc(4212,`span`,92),Ac(4213,`code`),vN(4214,`caption-tag-28`),ug(),Kc(4215,`span`,93),Ac(4216,`code`),vN(4217,`caption-tag-29`),ug(),Kc(4218,`span`,94),Ac(4219,`code`),vN(4220,`caption-tag-30`),ug()(),Ac(4221,`li`),Kc(4222,`span`,95),Ac(4223,`code`),vN(4224,`caption-tag-31`),ug(),Kc(4225,`span`,96),Ac(4226,`code`),vN(4227,`caption-tag-32`),ug(),Kc(4228,`span`,97),Ac(4229,`code`),vN(4230,`caption-tag-33`),ug(),Kc(4231,`span`,98),Ac(4232,`code`),vN(4233,`caption-tag-34`),ug(),Kc(4234,`span`,99),Ac(4235,`code`),vN(4236,`caption-tag-35`),ug()()()()(),Ac(4237,`tr`,17)(4238,`td`,18)(4239,`div`,19)(4240,`span`,20),vN(4241,` disabled`),Kc(4242,`br`),ug()()(),Ac(4243,`td`,21)(4244,`code`,47),vN(4245,`Function`),ug()(),Ac(4246,`td`,24)(4247,`em`)(4248,`strong`),vN(4249,`(opcional)`),ug()(),Ac(4250,`p`),vN(4251,`Função que deve retornar um booleano para habilitar ou desabilitar o ícone e sua ação.`),ug()()(),Ac(4252,`tr`,17)(4253,`td`,18)(4254,`div`,19)(4255,`span`,20),vN(4256,` icon`),Kc(4257,`br`),ug()()(),Ac(4258,`td`,21)(4259,`code`,31),vN(4260,`string `),ug(),Ac(4261,`code`,48),vN(4262,` TemplateRef<void>`),ug()(),Ac(4263,`td`,24)(4264,`em`)(4265,`strong`),vN(4266,`(opcional)`),ug()(),Ac(4267,`p`),vN(4268,`É possível usar qualquer um dos ícones da `),Ac(4269,`a`,26),vN(4270,`Biblioteca de ícones`),ug(),vN(4271,`. conforme exemplo abaixo:`),ug(),Ac(4272,`pre`)(4273,`code`),vN(4274,`[ { icon: 'an an-plus' } ]
`),ug()(),Ac(4275,`p`),vN(4276,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ug(),Ac(4277,`pre`)(4278,`code`),vN(4279,`[ {  icon: 'fas fa-plus' } ]
`),ug()(),Ac(4280,`p`),vN(4281,`Outra opção seria a customização do ícone através do `),Ac(4282,`code`),vN(4283,`TemplateRef`),ug(),vN(4284,`, conforme exemplo abaixo:
`),Ac(4285,`code`),vN(4286,`component.html`),ug(),vN(4287,`:`),ug(),Ac(4288,`pre`)(4289,`code`),vN(4290,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),ug()(),Ac(4291,`p`)(4292,`code`),vN(4293,`component.ts`),ug(),vN(4294,`:`),ug(),Ac(4295,`pre`)(4296,`code`),vN(4297,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),ug()(),Ac(4298,`blockquote`)(4299,`p`),vN(4300,`Caso esta propriedade não seja definida, a mesma receberá o valor contido em `),Ac(4301,`code`),vN(4302,`value`),ug(),vN(4303,`.`),ug()()()(),Ac(4304,`tr`,17)(4305,`td`,18)(4306,`div`,19)(4307,`span`,20),vN(4308,` tooltip`),Kc(4309,`br`),ug()()(),Ac(4310,`td`,21)(4311,`code`,31),vN(4312,`string`),ug()(),Ac(4313,`td`,24)(4314,`em`)(4315,`strong`),vN(4316,`(opcional)`),ug()(),Ac(4317,`p`),vN(4318,`Define um texto de ajuda que será exibido ao passar o `),Ac(4319,`em`),vN(4320,`mouse`),ug(),vN(4321,` em cima do ícone.`),ug()()(),Ac(4322,`tr`,17)(4323,`td`,18)(4324,`div`,19)(4325,`span`,20),vN(4326,` value`),Kc(4327,`br`),ug()()(),Ac(4328,`td`,21)(4329,`code`,31),vN(4330,`string`),ug()(),Ac(4331,`td`,24)(4332,`p`),vN(4333,`Define o valor do ícone que será exibido.`),ug()()()(),Ac(4334,`h4`,46)(4335,`code`,5),vN(4336,`PoTableColumnLabel`),ug()(),Ac(4337,`div`,2)(4338,`p`),vN(4339,`Interface para configuração das colunas de labels do `),Ac(4340,`code`),vN(4341,`po-table`),ug(),vN(4342,`.`),ug()(),Ac(4343,`h4`,13),vN(4344,`Propriedades`),ug(),Ac(4345,`table`,14)(4346,`tr`,15)(4347,`th`,16),vN(4348,`Nome`),ug(),Ac(4349,`th`,16),vN(4350,`Tipo`),ug(),Ac(4351,`th`,16),vN(4352,`Descrição`),ug()(),Ac(4353,`tr`,17)(4354,`td`,18)(4355,`div`,19)(4356,`span`,20),vN(4357,` color`),Kc(4358,`br`),ug()()(),Ac(4359,`td`,21)(4360,`code`,31),vN(4361,`string`),ug()(),Ac(4362,`td`,24)(4363,`em`)(4364,`strong`),vN(4365,`(opcional)`),ug()(),Ac(4366,`p`),vN(4367,`Define a cor do label.`),ug(),Ac(4368,`p`),vN(4369,`Valores válidos:`),ug(),Ac(4370,`ul`)(4371,`li`),Kc(4372,`span`,53),Ac(4373,`code`),vN(4374,`color-01`),ug()(),Ac(4375,`li`),Kc(4376,`span`,54),Ac(4377,`code`),vN(4378,`color-02`),ug()(),Ac(4379,`li`),Kc(4380,`span`,55),Ac(4381,`code`),vN(4382,`color-03`),ug()(),Ac(4383,`li`),Kc(4384,`span`,56),Ac(4385,`code`),vN(4386,`color-04`),ug()(),Ac(4387,`li`),Kc(4388,`span`,57),Ac(4389,`code`),vN(4390,`color-05`),ug()(),Ac(4391,`li`),Kc(4392,`span`,58),Ac(4393,`code`),vN(4394,`color-06`),ug()(),Ac(4395,`li`),Kc(4396,`span`,59),Ac(4397,`code`),vN(4398,`color-07`),ug()(),Ac(4399,`li`),Kc(4400,`span`,60),Ac(4401,`code`),vN(4402,`color-08`),ug()(),Ac(4403,`li`),Kc(4404,`span`,61),Ac(4405,`code`),vN(4406,`color-09`),ug()(),Ac(4407,`li`),Kc(4408,`span`,62),Ac(4409,`code`),vN(4410,`color-10`),ug()(),Ac(4411,`li`),Kc(4412,`span`,63),Ac(4413,`code`),vN(4414,`color-11`),ug()(),Ac(4415,`li`),Kc(4416,`span`,64),Ac(4417,`code`),vN(4418,`color-12`),ug()()(),Ac(4419,`blockquote`)(4420,`p`),vN(4421,`Também é possível utilizar as 35 cores da paleta `),Ac(4422,`strong`),vN(4423,`Caption Tag Colors`),ug(),vN(4424,`:`),ug()(),Ac(4425,`ul`)(4426,`li`),Kc(4427,`span`,65),Ac(4428,`code`),vN(4429,`caption-tag-01`),ug(),Kc(4430,`span`,66),Ac(4431,`code`),vN(4432,`caption-tag-02`),ug(),Kc(4433,`span`,67),Ac(4434,`code`),vN(4435,`caption-tag-03`),ug(),Kc(4436,`span`,68),Ac(4437,`code`),vN(4438,`caption-tag-04`),ug(),Kc(4439,`span`,69),Ac(4440,`code`),vN(4441,`caption-tag-05`),ug()(),Ac(4442,`li`),Kc(4443,`span`,70),Ac(4444,`code`),vN(4445,`caption-tag-06`),ug(),Kc(4446,`span`,71),Ac(4447,`code`),vN(4448,`caption-tag-07`),ug(),Kc(4449,`span`,72),Ac(4450,`code`),vN(4451,`caption-tag-08`),ug(),Kc(4452,`span`,73),Ac(4453,`code`),vN(4454,`caption-tag-09`),ug(),Kc(4455,`span`,74),Ac(4456,`code`),vN(4457,`caption-tag-10`),ug()(),Ac(4458,`li`),Kc(4459,`span`,75),Ac(4460,`code`),vN(4461,`caption-tag-11`),ug(),Kc(4462,`span`,76),Ac(4463,`code`),vN(4464,`caption-tag-12`),ug(),Kc(4465,`span`,77),Ac(4466,`code`),vN(4467,`caption-tag-13`),ug(),Kc(4468,`span`,78),Ac(4469,`code`),vN(4470,`caption-tag-14`),ug(),Kc(4471,`span`,79),Ac(4472,`code`),vN(4473,`caption-tag-15`),ug()(),Ac(4474,`li`),Kc(4475,`span`,80),Ac(4476,`code`),vN(4477,`caption-tag-16`),ug(),Kc(4478,`span`,81),Ac(4479,`code`),vN(4480,`caption-tag-17`),ug(),Kc(4481,`span`,82),Ac(4482,`code`),vN(4483,`caption-tag-18`),ug(),Kc(4484,`span`,83),Ac(4485,`code`),vN(4486,`caption-tag-19`),ug(),Kc(4487,`span`,84),Ac(4488,`code`),vN(4489,`caption-tag-20`),ug()(),Ac(4490,`li`),Kc(4491,`span`,85),Ac(4492,`code`),vN(4493,`caption-tag-21`),ug(),Kc(4494,`span`,86),Ac(4495,`code`),vN(4496,`caption-tag-22`),ug(),Kc(4497,`span`,87),Ac(4498,`code`),vN(4499,`caption-tag-23`),ug(),Kc(4500,`span`,88),Ac(4501,`code`),vN(4502,`caption-tag-24`),ug(),Kc(4503,`span`,89),Ac(4504,`code`),vN(4505,`caption-tag-25`),ug()(),Ac(4506,`li`),Kc(4507,`span`,90),Ac(4508,`code`),vN(4509,`caption-tag-26`),ug(),Kc(4510,`span`,91),Ac(4511,`code`),vN(4512,`caption-tag-27`),ug(),Kc(4513,`span`,92),Ac(4514,`code`),vN(4515,`caption-tag-28`),ug(),Kc(4516,`span`,93),Ac(4517,`code`),vN(4518,`caption-tag-29`),ug(),Kc(4519,`span`,94),Ac(4520,`code`),vN(4521,`caption-tag-30`),ug()(),Ac(4522,`li`),Kc(4523,`span`,95),Ac(4524,`code`),vN(4525,`caption-tag-31`),ug(),Kc(4526,`span`,96),Ac(4527,`code`),vN(4528,`caption-tag-32`),ug(),Kc(4529,`span`,97),Ac(4530,`code`),vN(4531,`caption-tag-33`),ug(),Kc(4532,`span`,98),Ac(4533,`code`),vN(4534,`caption-tag-34`),ug(),Kc(4535,`span`,99),Ac(4536,`code`),vN(4537,`caption-tag-35`),ug()()(),Ac(4538,`p`),vN(4539,`Exemplo de uso:`),ug(),Ac(4540,`pre`)(4541,`code`),vN(4542,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),ug()()()(),Ac(4543,`tr`,17)(4544,`td`,18)(4545,`div`,19)(4546,`span`,20),vN(4547,` icon`),Kc(4548,`br`),ug()()(),Ac(4549,`td`,21)(4550,`code`,22),vN(4551,`boolean `),ug(),Ac(4552,`code`,31),vN(4553,` string `),ug(),Ac(4554,`code`,48),vN(4555,` TemplateRef<void>`),ug()(),Ac(4556,`td`,24)(4557,`em`)(4558,`strong`),vN(4559,`(opcional)`),ug()(),Ac(4560,`p`),vN(4561,`Define ou ativa um ícone que será exibido ao lado do valor da `),Ac(4562,`em`),vN(4563,`tag`),ug(),vN(4564,`.`),ug(),Ac(4565,`p`),vN(4566,`Quando `),Ac(4567,`code`),vN(4568,`p-type`),ug(),vN(4569,` estiver definida, basta informar um valor igual a `),Ac(4570,`code`),vN(4571,`true`),ug(),vN(4572,` para que o ícone seja exibido conforme descrições abaixo:`),ug(),Ac(4573,`ul`)(4574,`li`),Kc(4575,`span`,114),vN(4576,` - `),Ac(4577,`code`),vN(4578,`success`),ug()(),Ac(4579,`li`),Kc(4580,`span`,115),vN(4581,` - `),Ac(4582,`code`),vN(4583,`warning`),ug()(),Ac(4584,`li`),Kc(4585,`span`,116),vN(4586,` - `),Ac(4587,`code`),vN(4588,`danger`),ug()(),Ac(4589,`li`),Kc(4590,`span`,117),vN(4591,` - `),Ac(4592,`code`),vN(4593,`info`),ug()()(),Ac(4594,`p`),vN(4595,`Também É possível usar qualquer um dos ícones da `),Ac(4596,`a`,26),vN(4597,`Biblioteca de ícones`),ug(),vN(4598,`. conforme exemplo abaixo:`),ug(),Ac(4599,`pre`)(4600,`code`),vN(4601,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),ug()(),Ac(4602,`p`),vN(4603,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(4604,`em`),vN(4605,`Font Awesome`),ug(),vN(4606,`, da seguinte forma:`),ug(),Ac(4607,`pre`)(4608,`code`),vN(4609,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),ug()(),Ac(4610,`p`),vN(4611,`Outra opção seria a customização do ícone através do `),Ac(4612,`code`),vN(4613,`TemplateRef`),ug(),vN(4614,`, conforme exemplo abaixo:`),ug(),Ac(4615,`pre`)(4616,`code`),vN(4617,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(4618,`blockquote`)(4619,`p`),vN(4620,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(4621,`code`),vN(4622,`font-size: inherit`),ug(),vN(4623,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(4624,`tr`,17)(4625,`td`,18)(4626,`div`,19)(4627,`span`,20),vN(4628,` label`),Kc(4629,`br`),ug()()(),Ac(4630,`td`,21)(4631,`code`,31),vN(4632,`string`),ug()(),Ac(4633,`td`,24)(4634,`p`),vN(4635,`Texto que será exibido na coluna.`),ug()()(),Ac(4636,`tr`,17)(4637,`td`,18)(4638,`div`,19)(4639,`span`,20),vN(4640,` textColor`),Kc(4641,`br`),ug()()(),Ac(4642,`td`,21)(4643,`code`,31),vN(4644,`string`),ug()(),Ac(4645,`td`,24)(4646,`em`)(4647,`strong`),vN(4648,`(opcional)`),ug()(),Ac(4649,`p`),vN(4650,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),ug(),Ac(4651,`ul`)(4652,`li`)(4653,`p`),vN(4654,`Hexadeximal, por exemplo `),Ac(4655,`code`),vN(4656,`#c64840`),ug(),vN(4657,`;`),ug()(),Ac(4658,`li`)(4659,`p`),vN(4660,`RGB, como `),Ac(4661,`code`),vN(4662,`rgb(0, 0, 165)`),ug(),vN(4663,`;`),ug()(),Ac(4664,`li`)(4665,`p`),vN(4666,`O nome da cor, por exemplo `),Ac(4667,`code`),vN(4668,`blue`),ug(),vN(4669,`;`),ug()(),Ac(4670,`li`)(4671,`p`),vN(4672,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),ug(),Ac(4673,`ul`)(4674,`li`),Kc(4675,`span`,53),Ac(4676,`code`),vN(4677,`color-01`),ug()(),Ac(4678,`li`),Kc(4679,`span`,54),Ac(4680,`code`),vN(4681,`color-02`),ug()(),Ac(4682,`li`),Kc(4683,`span`,55),Ac(4684,`code`),vN(4685,`color-03`),ug()(),Ac(4686,`li`),Kc(4687,`span`,56),Ac(4688,`code`),vN(4689,`color-04`),ug()(),Ac(4690,`li`),Kc(4691,`span`,57),Ac(4692,`code`),vN(4693,`color-05`),ug()(),Ac(4694,`li`),Kc(4695,`span`,58),Ac(4696,`code`),vN(4697,`color-06`),ug()(),Ac(4698,`li`),Kc(4699,`span`,59),Ac(4700,`code`),vN(4701,`color-07`),ug()(),Ac(4702,`li`),Kc(4703,`span`,60),Ac(4704,`code`),vN(4705,`color-08`),ug()(),Ac(4706,`li`),Kc(4707,`span`,61),Ac(4708,`code`),vN(4709,`color-09`),ug()(),Ac(4710,`li`),Kc(4711,`span`,62),Ac(4712,`code`),vN(4713,`color-10`),ug()(),Ac(4714,`li`),Kc(4715,`span`,63),Ac(4716,`code`),vN(4717,`color-11`),ug()(),Ac(4718,`li`),Kc(4719,`span`,64),Ac(4720,`code`),vN(4721,`color-12`),ug()()()(),Ac(4722,`li`)(4723,`p`),vN(4724,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),ug()()(),Ac(4725,`blockquote`)(4726,`p`)(4727,`strong`),vN(4728,`Atenção:`),ug(),vN(4729,` A propriedade `),Ac(4730,`code`),vN(4731,`p-type`),ug(),vN(4732,` sobrepõe esta definição.`),ug()(),Ac(4733,`blockquote`)(4734,`p`)(4735,`strong`),vN(4736,`Atenção:`),ug(),vN(4737,` As cores da paleta `),Ac(4738,`strong`),vN(4739,`Caption Tag Colors`),ug(),vN(4740,` (`),Ac(4741,`code`),vN(4742,`caption-tag-01`),ug(),vN(4743,` a `),Ac(4744,`code`),vN(4745,`caption-tag-35`),ug(),vN(4746,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),ug()()()(),Ac(4747,`tr`,17)(4748,`td`,18)(4749,`div`,19)(4750,`span`,20),vN(4751,` tooltip`),Kc(4752,`br`),ug()()(),Ac(4753,`td`,21)(4754,`code`,31),vN(4755,`string`),ug()(),Ac(4756,`td`,24)(4757,`em`)(4758,`strong`),vN(4759,`(opcional)`),ug()(),Ac(4760,`p`),vN(4761,`Define um texto de ajuda que será exibido ao passar o `),Ac(4762,`em`),vN(4763,`mouse`),ug(),vN(4764,` em cima do `),Ac(4765,`em`),vN(4766,`label`),ug(),vN(4767,`.`),ug(),Ac(4768,`blockquote`)(4769,`p`),vN(4770,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),ug()()()(),Ac(4771,`tr`,17)(4772,`td`,18)(4773,`div`,19)(4774,`span`,20),vN(4775,` type`),Kc(4776,`br`),ug()()(),Ac(4777,`td`,21)(4778,`code`,118),vN(4779,`PoTagType`),ug()(),Ac(4780,`td`,24)(4781,`em`)(4782,`strong`),vN(4783,`(opcional)`),ug()(),Ac(4784,`p`),vN(4785,`Define o tipo da `),Ac(4786,`em`),vN(4787,`tag`),ug(),vN(4788,`.`),ug(),Ac(4789,`p`),vN(4790,`Valores válidos:`),ug(),Ac(4791,`ul`)(4792,`li`)(4793,`code`),vN(4794,`success`),ug(),vN(4795,`: cor verde utilizada para simbolizar sucesso ou êxito.`),ug(),Ac(4796,`li`)(4797,`code`),vN(4798,`warning`),ug(),vN(4799,`: cor amarela que representa aviso ou advertência.`),ug(),Ac(4800,`li`)(4801,`code`),vN(4802,`danger`),ug(),vN(4803,`: cor vermelha para erro ou aviso crítico.`),ug(),Ac(4804,`li`)(4805,`code`),vN(4806,`info`),ug(),vN(4807,`: cor cinza escuro que caracteriza conteúdo informativo.`),ug()(),Ac(4808,`blockquote`)(4809,`p`),vN(4810,`Quando esta propriedade for definida, irá sobrepor a definição de `),Ac(4811,`code`),vN(4812,`p-color`),ug(),vN(4813,` e `),Ac(4814,`code`),vN(4815,`p-icon`),ug(),vN(4816,` somente será exibido caso seja `),Ac(4817,`code`),vN(4818,`true`),ug(),vN(4819,`.`),ug()()()(),Ac(4820,`tr`,17)(4821,`td`,18)(4822,`div`,19)(4823,`span`,20),vN(4824,` value`),Kc(4825,`br`),ug()()(),Ac(4826,`td`,21)(4827,`code`,31),vN(4828,`string `),ug(),Ac(4829,`code`,35),vN(4830,` number`),ug()(),Ac(4831,`td`,24)(4832,`p`),vN(4833,`Valor que será usado como referência para exibição do conteúdo na coluna.`),ug()()()(),Ac(4834,`h4`,46)(4835,`code`,5),vN(4836,`PoTableDetailColumn`),ug()(),Ac(4837,`div`,2)(4838,`p`),vN(4839,`Interface para configuração das colunas do `),Ac(4840,`code`),vN(4841,`po-table-detail`),ug(),vN(4842,`.`),ug()(),Ac(4843,`h4`,13),vN(4844,`Propriedades`),ug(),Ac(4845,`table`,14)(4846,`tr`,15)(4847,`th`,16),vN(4848,`Nome`),ug(),Ac(4849,`th`,16),vN(4850,`Tipo`),ug(),Ac(4851,`th`,16),vN(4852,`Descrição`),ug()(),Ac(4853,`tr`,17)(4854,`td`,18)(4855,`div`,19)(4856,`span`,20),vN(4857,` format`),Kc(4858,`br`),ug()()(),Ac(4859,`td`,21)(4860,`code`,31),vN(4861,`string`),ug()(),Ac(4862,`td`,24)(4863,`em`)(4864,`strong`),vN(4865,`(opcional)`),ug()(),Ac(4866,`p`),vN(4867,`Formato de exibição do valor da coluna:`),ug(),Ac(4868,`ul`)(4869,`li`)(4870,`p`),vN(4871,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),ug()(),Ac(4872,`li`)(4873,`p`),vN(4874,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ug()(),Ac(4875,`li`)(4876,`p`),vN(4877,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),ug()(),Ac(4878,`li`)(4879,`p`),vN(4880,`Formato para números (number): aceita um valor seguindo o padrão `),Ac(4881,`a`,119)(4882,`strong`),vN(4883,`DecimalPipe`),ug()(),vN(4884,` para formatação, e caso não seja informado, o número será exibido na sua forma original. Exemplo:`),ug(),Ac(4885,`ul`)(4886,`li`),vN(4887,`Valor de entrada: `),Ac(4888,`code`),vN(4889,`50`),ug(),vN(4890,` e valor para formatação: `),Ac(4891,`code`),vN(4892,`'1.2-5'`),ug(),vN(4893,` o resultado será: `),Ac(4894,`code`),vN(4895,`50.00`),ug()()()()()()(),Ac(4896,`tr`,17)(4897,`td`,18)(4898,`div`,19)(4899,`span`,20),vN(4900,` label`),Kc(4901,`br`),ug()()(),Ac(4902,`td`,21)(4903,`code`,31),vN(4904,`string`),ug()(),Ac(4905,`td`,24)(4906,`em`)(4907,`strong`),vN(4908,`(opcional)`),ug()(),Ac(4909,`p`),vN(4910,`Texto para título da coluna.`),ug()()(),Ac(4911,`tr`,17)(4912,`td`,18)(4913,`div`,19)(4914,`span`,20),vN(4915,` property`),Kc(4916,`br`),ug()()(),Ac(4917,`td`,21)(4918,`code`,31),vN(4919,`string`),ug()(),Ac(4920,`td`,24)(4921,`em`)(4922,`strong`),vN(4923,`(opcional)`),ug()(),Ac(4924,`p`),vN(4925,`Nome identificador da coluna.`),ug()()(),Ac(4926,`tr`,17)(4927,`td`,18)(4928,`div`,19)(4929,`span`,20),vN(4930,` type`),Kc(4931,`br`),ug()()(),Ac(4932,`td`,21)(4933,`code`,31),vN(4934,`string`),ug()(),Ac(4935,`td`,24)(4936,`em`)(4937,`strong`),vN(4938,`(opcional)`),ug()(),Ac(4939,`p`),vN(4940,`Tipo da coluna.`),ug(),Ac(4941,`p`),vN(4942,`Valores válidos:`),ug(),Ac(4943,`ul`)(4944,`li`)(4945,`p`)(4946,`code`),vN(4947,`currency`),ug(),vN(4948,`: valores monetários.`),ug()(),Ac(4949,`li`)(4950,`p`)(4951,`code`),vN(4952,`date`),ug(),vN(4953,`: valor de datas.`),ug(),Ac(4954,`ul`)(4955,`li`),vN(4956,`Aceita os tipos `),Ac(4957,`em`),vN(4958,`string`),ug(),vN(4959,` e `),Ac(4960,`em`),vN(4961,`Date`),ug(),vN(4962,` padr\xE3o do Javascript,
por exemplo: `),Ac(4963,`code`),vN(4964,`'2017-11-28'`),ug(),vN(4965,` ou `),Ac(4966,`code`),vN(4967,`new Date(2017, 10, 28)`),ug(),vN(4968,`.`),ug()()(),Ac(4969,`li`)(4970,`p`)(4971,`code`),vN(4972,`time`),ug(),vN(4973,`: valor de horário.`),ug()(),Ac(4974,`li`)(4975,`p`)(4976,`code`),vN(4977,`number`),ug(),vN(4978,`: valores numéricos.`),ug()(),Ac(4979,`li`)(4980,`p`)(4981,`code`),vN(4982,`dateTime`),ug(),vN(4983,`: valor de data com horário.`),ug(),Ac(4984,`ul`)(4985,`li`),vN(4986,`Aceita o tipo `),Ac(4987,`em`),vN(4988,`string`),ug(),vN(4989,` no formato `),Ac(4990,`strong`),vN(4991,`ISO-8601`),ug(),vN(4992,` extendido `),Ac(4993,`strong`),vN(4994,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ug(),vN(4995,`
e o tipo `),Ac(4996,`em`),vN(4997,`Date`),ug(),vN(4998,` padrão do Javascript, por exemplo: `),Ac(4999,`code`),vN(5e3,`'2017-11-28T00:00:00-02:00'`),ug(),vN(5001,` ou `),Ac(5002,`code`),vN(5003,`new Date(2017, 10, 28)`),ug(),vN(5004,`.`),ug(),Ac(5005,`li`),vN(5006,`Aceita o tipo `),Ac(5007,`em`),vN(5008,`string`),ug(),vN(5009,` nos formatos `),Ac(5010,`strong`),vN(5011,`'HH:mm:ss'`),ug(),vN(5012,` ou `),Ac(5013,`strong`),vN(5014,`'HH:mm:ss.ffffff'`),ug(),vN(5015,`, por exemplo: `),Ac(5016,`code`),vN(5017,`'23:12:45'`),ug(),vN(5018,`.`),ug()()()()()()(),Ac(5019,`h4`,46)(5020,`code`,5),vN(5021,`PoTableDetail`),ug()(),Ac(5022,`div`,2)(5023,`p`),vN(5024,`Interface para configuração do `),Ac(5025,`em`),vN(5026,`detail`),ug(),vN(5027,` do componente `),Ac(5028,`code`),vN(5029,`po-table`),ug(),vN(5030,`.`),ug()(),Ac(5031,`h4`,13),vN(5032,`Propriedades`),ug(),Ac(5033,`table`,14)(5034,`tr`,15)(5035,`th`,16),vN(5036,`Nome`),ug(),Ac(5037,`th`,16),vN(5038,`Tipo`),ug(),Ac(5039,`th`,16),vN(5040,`Descrição`),ug()(),Ac(5041,`tr`,17)(5042,`td`,18)(5043,`div`,19)(5044,`span`,20),vN(5045,` columns`),Kc(5046,`br`),ug()()(),Ac(5047,`td`,21)(5048,`code`,120),vN(5049,`Array<PoTableDetailColumn>`),ug()(),Ac(5050,`td`,24)(5051,`p`),vN(5052,`Define uma lista do tipo `),Ac(5053,`code`),vN(5054,`PoTableDetailColumn`),ug(),vN(5055,` para as colunas do objet `),Ac(5056,`em`),vN(5057,`detail`),ug(),vN(5058,`. Por exemplo:`),ug(),Ac(5059,`pre`)(5060,`code`),vN(5061,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),ug()()()(),Ac(5062,`tr`,17)(5063,`td`,18)(5064,`div`,19)(5065,`span`,20),vN(5066,` hideSelect`),Kc(5067,`br`),ug()()(),Ac(5068,`td`,21)(5069,`code`,22),vN(5070,`boolean`),ug()(),Ac(5071,`td`,24)(5072,`em`)(5073,`strong`),vN(5074,`(opcional)`),ug()(),Ac(5075,`p`),vN(5076,`Define se o checkbox de seleção do detail será exibido. Valor padrão 'false'.`),ug()()(),Ac(5077,`tr`,17)(5078,`td`,18)(5079,`div`,19)(5080,`span`,20),vN(5081,` typeHeader`),Kc(5082,`br`),ug()()(),Ac(5083,`td`,21)(5084,`code`,31),vN(5085,`string`),ug()(),Ac(5086,`td`,24)(5087,`em`)(5088,`strong`),vN(5089,`(opcional)`),ug()(),Ac(5090,`p`),vN(5091,`Define o tipo de cabeçalho para o conteúdo do `),Ac(5092,`em`),vN(5093,`detail`),ug(),vN(5094,` .`),ug(),Ac(5095,`p`),vN(5096,`Valores válidos:`),ug(),Ac(5097,`ul`)(5098,`li`)(5099,`code`),vN(5100,`inline`),ug(),vN(5101,`: Atribui o cabeçalho na mesma linha do `),Ac(5102,`em`),vN(5103,`detail`),ug(),vN(5104,`.`),ug(),Ac(5105,`li`)(5106,`code`),vN(5107,`top`),ug(),vN(5108,`: Atribui o cabeçalho acima do `),Ac(5109,`em`),vN(5110,`detail`),ug(),vN(5111,`, idêntico ao `),Ac(5112,`code`),vN(5113,`po-table`),ug(),vN(5114,`.`),ug(),Ac(5115,`li`)(5116,`code`),vN(5117,`none`),ug(),vN(5118,`: Remove o cabeçalho do `),Ac(5119,`em`),vN(5120,`detail`),ug(),vN(5121,`.`),ug()()()()(),Ac(5122,`h4`,46)(5123,`code`,5),vN(5124,`PoTableSubtitleColumn`),ug()(),Ac(5125,`div`,2)(5126,`p`),vN(5127,`Interface para configuração das colunas de legenda do Po-Table.`),ug()(),Ac(5128,`h4`,13),vN(5129,`Propriedades`),ug(),Ac(5130,`table`,14)(5131,`tr`,15)(5132,`th`,16),vN(5133,`Nome`),ug(),Ac(5134,`th`,16),vN(5135,`Tipo`),ug(),Ac(5136,`th`,16),vN(5137,`Descrição`),ug()(),Ac(5138,`tr`,17)(5139,`td`,18)(5140,`div`,19)(5141,`span`,20),vN(5142,` color`),Kc(5143,`br`),ug()()(),Ac(5144,`td`,21)(5145,`code`,31),vN(5146,`string`),ug()(),Ac(5147,`td`,24)(5148,`em`)(5149,`strong`),vN(5150,`(opcional)`),ug()(),Ac(5151,`p`),vN(5152,`Define a cor do `),Ac(5153,`em`),vN(5154,`status`),ug(),vN(5155,`.`),ug(),Ac(5156,`p`),vN(5157,`Valores válidos:`),ug(),Ac(5158,`ul`)(5159,`li`),Kc(5160,`span`,53),Ac(5161,`code`),vN(5162,`color-01`),ug()(),Ac(5163,`li`),Kc(5164,`span`,54),Ac(5165,`code`),vN(5166,`color-02`),ug()(),Ac(5167,`li`),Kc(5168,`span`,55),Ac(5169,`code`),vN(5170,`color-03`),ug()(),Ac(5171,`li`),Kc(5172,`span`,56),Ac(5173,`code`),vN(5174,`color-04`),ug()(),Ac(5175,`li`),Kc(5176,`span`,57),Ac(5177,`code`),vN(5178,`color-05`),ug()(),Ac(5179,`li`),Kc(5180,`span`,58),Ac(5181,`code`),vN(5182,`color-06`),ug()(),Ac(5183,`li`),Kc(5184,`span`,59),Ac(5185,`code`),vN(5186,`color-07`),ug()(),Ac(5187,`li`),Kc(5188,`span`,60),Ac(5189,`code`),vN(5190,`color-08`),ug()(),Ac(5191,`li`),Kc(5192,`span`,61),Ac(5193,`code`),vN(5194,`color-09`),ug()(),Ac(5195,`li`),Kc(5196,`span`,62),Ac(5197,`code`),vN(5198,`color-10`),ug()(),Ac(5199,`li`),Kc(5200,`span`,63),Ac(5201,`code`),vN(5202,`color-11`),ug()(),Ac(5203,`li`),Kc(5204,`span`,64),Ac(5205,`code`),vN(5206,`color-12`),ug()()(),Ac(5207,`blockquote`)(5208,`p`),vN(5209,`Também é possível utilizar as 35 cores da paleta `),Ac(5210,`strong`),vN(5211,`Caption Tag Colors`),ug(),vN(5212,`:`),ug()(),Ac(5213,`ul`)(5214,`li`),Kc(5215,`span`,65),Ac(5216,`code`),vN(5217,`caption-tag-01`),ug(),Kc(5218,`span`,66),Ac(5219,`code`),vN(5220,`caption-tag-02`),ug(),Kc(5221,`span`,67),Ac(5222,`code`),vN(5223,`caption-tag-03`),ug(),Kc(5224,`span`,68),Ac(5225,`code`),vN(5226,`caption-tag-04`),ug(),Kc(5227,`span`,69),Ac(5228,`code`),vN(5229,`caption-tag-05`),ug()(),Ac(5230,`li`),Kc(5231,`span`,70),Ac(5232,`code`),vN(5233,`caption-tag-06`),ug(),Kc(5234,`span`,71),Ac(5235,`code`),vN(5236,`caption-tag-07`),ug(),Kc(5237,`span`,72),Ac(5238,`code`),vN(5239,`caption-tag-08`),ug(),Kc(5240,`span`,73),Ac(5241,`code`),vN(5242,`caption-tag-09`),ug(),Kc(5243,`span`,74),Ac(5244,`code`),vN(5245,`caption-tag-10`),ug()(),Ac(5246,`li`),Kc(5247,`span`,75),Ac(5248,`code`),vN(5249,`caption-tag-11`),ug(),Kc(5250,`span`,76),Ac(5251,`code`),vN(5252,`caption-tag-12`),ug(),Kc(5253,`span`,77),Ac(5254,`code`),vN(5255,`caption-tag-13`),ug(),Kc(5256,`span`,78),Ac(5257,`code`),vN(5258,`caption-tag-14`),ug(),Kc(5259,`span`,79),Ac(5260,`code`),vN(5261,`caption-tag-15`),ug()(),Ac(5262,`li`),Kc(5263,`span`,80),Ac(5264,`code`),vN(5265,`caption-tag-16`),ug(),Kc(5266,`span`,81),Ac(5267,`code`),vN(5268,`caption-tag-17`),ug(),Kc(5269,`span`,82),Ac(5270,`code`),vN(5271,`caption-tag-18`),ug(),Kc(5272,`span`,83),Ac(5273,`code`),vN(5274,`caption-tag-19`),ug(),Kc(5275,`span`,84),Ac(5276,`code`),vN(5277,`caption-tag-20`),ug()(),Ac(5278,`li`),Kc(5279,`span`,85),Ac(5280,`code`),vN(5281,`caption-tag-21`),ug(),Kc(5282,`span`,86),Ac(5283,`code`),vN(5284,`caption-tag-22`),ug(),Kc(5285,`span`,87),Ac(5286,`code`),vN(5287,`caption-tag-23`),ug(),Kc(5288,`span`,88),Ac(5289,`code`),vN(5290,`caption-tag-24`),ug(),Kc(5291,`span`,89),Ac(5292,`code`),vN(5293,`caption-tag-25`),ug()(),Ac(5294,`li`),Kc(5295,`span`,90),Ac(5296,`code`),vN(5297,`caption-tag-26`),ug(),Kc(5298,`span`,91),Ac(5299,`code`),vN(5300,`caption-tag-27`),ug(),Kc(5301,`span`,92),Ac(5302,`code`),vN(5303,`caption-tag-28`),ug(),Kc(5304,`span`,93),Ac(5305,`code`),vN(5306,`caption-tag-29`),ug(),Kc(5307,`span`,94),Ac(5308,`code`),vN(5309,`caption-tag-30`),ug()(),Ac(5310,`li`),Kc(5311,`span`,95),Ac(5312,`code`),vN(5313,`caption-tag-31`),ug(),Kc(5314,`span`,96),Ac(5315,`code`),vN(5316,`caption-tag-32`),ug(),Kc(5317,`span`,97),Ac(5318,`code`),vN(5319,`caption-tag-33`),ug(),Kc(5320,`span`,98),Ac(5321,`code`),vN(5322,`caption-tag-34`),ug(),Kc(5323,`span`,99),Ac(5324,`code`),vN(5325,`caption-tag-35`),ug()()()()(),Ac(5326,`tr`,17)(5327,`td`,18)(5328,`div`,19)(5329,`span`,20),vN(5330,` content`),Kc(5331,`br`),ug()()(),Ac(5332,`td`,21)(5333,`code`,31),vN(5334,`string`),ug()(),Ac(5335,`td`,24)(5336,`p`),vN(5337,`Conteúdo que será exibido na coluna da tabela.`),ug()()(),Ac(5338,`tr`,17)(5339,`td`,18)(5340,`div`,19)(5341,`span`,20),vN(5342,` label`),Kc(5343,`br`),ug()()(),Ac(5344,`td`,21)(5345,`code`,31),vN(5346,`string`),ug()(),Ac(5347,`td`,24)(5348,`p`),vN(5349,`Texto que será exibido no rodapé da tabela como legenda.`),ug()()(),Ac(5350,`tr`,17)(5351,`td`,18)(5352,`div`,19)(5353,`span`,20),vN(5354,` value`),Kc(5355,`br`),ug()()(),Ac(5356,`td`,21)(5357,`code`,31),vN(5358,`string `),ug(),Ac(5359,`code`,35),vN(5360,` number`),ug()(),Ac(5361,`td`,24)(5362,`p`),vN(5363,`Valor que será usado como referência para exibição do conteúdo na coluna.`),ug()()()(),Ac(5364,`h3`),vN(5365,`Enums`),ug(),Ac(5366,`h4`,4)(5367,`code`,5),vN(5368,`PoTableColumnSortType`),ug()(),Ac(5369,`div`,2)(5370,`p`),vN(5371,`Tipos de ordenação das colunas da tabela.`),ug()(),Ac(5372,`h4`,13),vN(5373,`Propriedades`),ug(),Ac(5374,`table`,14)(5375,`tr`,15)(5376,`th`,16),vN(5377,`Nome`),ug(),Ac(5378,`th`,16),vN(5379,`Descrição`),ug()(),Ac(5380,`tr`,17)(5381,`td`,18)(5382,`div`,19)(5383,`span`,20),vN(5384,` Ascending`),Kc(5385,`br`),ug()()(),Ac(5386,`td`,24)(5387,`p`),vN(5388,`Ordenação ascendente`),ug()()(),Ac(5389,`tr`,17)(5390,`td`,18)(5391,`div`,19)(5392,`span`,20),vN(5393,` Descending`),Kc(5394,`br`),ug()()(),Ac(5395,`td`,24)(5396,`p`),vN(5397,`Ordenação descendente`),ug()()()(),Ac(5398,`h4`,4)(5399,`code`,5),vN(5400,`PoTableColumnSpacing`),ug()(),Ac(5401,`div`,2)(5402,`p`),vN(5403,`Tipos de espaçamento interno (padding) das células (`),Ac(5404,`strong`),vN(5405,`p-spacing`),ug(),vN(5406,`) do po-table.`),ug()(),Ac(5407,`h4`,13),vN(5408,`Propriedades`),ug(),Ac(5409,`table`,14)(5410,`tr`,15)(5411,`th`,16),vN(5412,`Nome`),ug(),Ac(5413,`th`,16),vN(5414,`Descrição`),ug()(),Ac(5415,`tr`,17)(5416,`td`,18)(5417,`div`,19)(5418,`span`,20),vN(5419,` ExtraSmall`),Kc(5420,`br`),ug()()(),Ac(5421,`td`,24)(5422,`p`),vN(5423,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),ug()()(),Ac(5424,`tr`,17)(5425,`td`,18)(5426,`div`,19)(5427,`span`,20),vN(5428,` Small`),Kc(5429,`br`),ug()()(),Ac(5430,`td`,24)(5431,`p`),vN(5432,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),ug()()(),Ac(5433,`tr`,17)(5434,`td`,18)(5435,`div`,19)(5436,`span`,20),vN(5437,` Medium`),Kc(5438,`br`),ug()()(),Ac(5439,`td`,24)(5440,`p`),vN(5441,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),ug()()(),Ac(5442,`tr`,17)(5443,`td`,18)(5444,`div`,19)(5445,`span`,20),vN(5446,` Large`),Kc(5447,`br`),ug()()(),Ac(5448,`td`,24)(5449,`p`),vN(5450,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return r})();var mn=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(E(Qn),E(wn$1))};static ɵcmp=Hn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:14,vars:4,consts:[[`p-title`,`Table`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return a.changeTab(`doc`)}),Kc(3,`sample-po-table-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return a.changeTab(`web`)}),Kc(5,`sample-po-table-basic-view`)(6,`sample-po-table-labs-view`)(7,`sample-po-table-with-api-view`)(8,`sample-po-table-transport-view`)(9,`sample-po-table-airfare-view`)(10,`sample-po-table-components-view`)(11,`sample-po-table-heroes-view`)(12,`sample-po-table-draggable-view`)(13,`sample-po-table-search-ai-view`),ug()()()),l&2&&(cE(`p-actions`,a.actions),Hp(2),cE(`p-active`,a.activeTab===`doc`),Hp(2),cE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[vze,tae,aae,Je,Ze,et,nt,at,lt,mt,st,ct,ut],encapsulation:2,changeDetection:1})}return r})()}];var bt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue({imports:[kL.forChild(mn),kL]})}return r})();var xi=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue({imports:[Ta,bt]})}return r})();export{xi as DocPoTableModule};