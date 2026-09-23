import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as ow,$r as Vx,Ar as PT,Br as TN,Cr as Nx,D as Cu,Dn as uf,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt$1,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,Lt as _n,M as ECe,Mi as gg,Mn as xbe,Mr as QO,Ni as he$1,O as Cye,P as Eu,Pn as xye,Qi as oN,Qn as EN,Sa as yN,Si as db,Ti as f0,Ui as lg,Un as Ax,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_ as $8e,_a as wN,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ca as rP,cn as lU,da as uo,dn as oU,dr as LN,ea as p0,er as FN,ga as w,gi as bw,hn as q4,ir as I,kn as vr,kr as PN,l as ar,mi as b,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,pt as Pbe,q as J4,qn as CN,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,w as Bbe,wa as zx,xa as xx}from"./main-NT5YGKBQ.js";var St=()=>({table:`PO Table`,angular:`PO-UI`});var xt=r=>[r];var $e=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-items`]],template:function(l,a){l&1&&ql(0,`po-table`,0),l&2&&cw(`p-items`,MN(2,xt,TN(1,St)))},dependencies:[oU],encapsulation:2,changeDetection:1})}return r})();var gt=r=>({"docs-sample-code-tabs":r});var Je=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-basic/sample-po-table-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-basic/sample-po-table-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-table-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,gt,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,$e],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{colors=[`color-01`,`color-02`,`color-03`,`color-04`,`color-05`,`color-06`,`color-07`,`color-08`,`color-09`,`color-10`,`color-11`,`color-12`,`caption-tag-01`,`caption-tag-03`,`caption-tag-06`,`caption-tag-08`,`caption-tag-11`,`caption-tag-13`,`caption-tag-16`,`caption-tag-18`,`caption-tag-21`,`caption-tag-23`,`caption-tag-26`,`caption-tag-28`,`caption-tag-31`,`caption-tag-33`];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:`https://po-ui.io/`,number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:`Detail Information 1`,date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:`Detail Information 2`,date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:`text`,width:`30%`},number:{property:`number`,type:`number`},date:{property:`date`,type:`date`},time:{property:`time`,type:`time`},dateTime:{property:`dateTime`,label:`DateTime`,type:`dateTime`},currency:{property:`currency`,type:`currency`,format:`USD`},link:{property:`page`,label:`Link`,type:`link`},icon:{property:`icon`,type:`icon`},boolean:{property:`boolean`,type:`boolean`},subtitle:{property:`subtitle`,type:`subtitle`,width:`10%`,subtitles:[{value:`color-01`,color:`color-01`,label:`Color 1`,content:`1`},{value:`color-02`,color:`color-02`,label:`Color 2`,content:`2`},{value:`color-03`,color:`color-03`,label:`Color 3`,content:`3`},{value:`color-04`,color:`color-04`,label:`Color 4`,content:`4`},{value:`color-05`,color:`color-05`,label:`Color 5`,content:`5`},{value:`color-06`,color:`color-06`,label:`Color 6`,content:`6`},{value:`color-07`,color:`color-07`,label:`Color 7`,content:`7`},{value:`color-08`,color:`color-08`,label:`Color 8`,content:`8`},{value:`color-09`,color:`color-09`,label:`Color 9`,content:`9`},{value:`color-10`,color:`color-10`,label:`Color 10`,content:`10`},{value:`color-11`,color:`color-11`,label:`Color 11`,content:`11`},{value:`color-12`,color:`color-12`,label:`Color 12`,content:`12`}]},label:{property:`label`,type:`label`,width:`10%`,labels:[{value:`color-01`,color:`color-01`,label:`Color 1`},{value:`color-02`,color:`color-02`,label:`Color 2`},{value:`color-03`,color:`color-03`,label:`Color 3`},{value:`color-04`,color:`color-04`,label:`Color 4`},{value:`color-05`,color:`color-05`,label:`Color 5`},{value:`color-06`,color:`color-06`,label:`Color 6`},{value:`color-07`,color:`color-07`,label:`Color 7`},{value:`color-08`,color:`color-08`,label:`Color 8`},{value:`color-09`,color:`color-09`,label:`Color 9`},{value:`color-10`,color:`color-10`,label:`Color 10`},{value:`color-11`,color:`color-11`,label:`Color 11`},{value:`color-12`,color:`color-12`,label:`Color 12`},{value:`caption-tag-01`,color:`caption-tag-01`,label:`Caption 01`},{value:`caption-tag-03`,color:`caption-tag-03`,label:`Caption 03`},{value:`caption-tag-06`,color:`caption-tag-06`,label:`Caption 06`},{value:`caption-tag-08`,color:`caption-tag-08`,label:`Caption 08`},{value:`caption-tag-11`,color:`caption-tag-11`,label:`Caption 11`},{value:`caption-tag-13`,color:`caption-tag-13`,label:`Caption 13`},{value:`caption-tag-16`,color:`caption-tag-16`,label:`Caption 16`},{value:`caption-tag-18`,color:`caption-tag-18`,label:`Caption 18`},{value:`caption-tag-21`,color:`caption-tag-21`,label:`Caption 21`},{value:`caption-tag-23`,color:`caption-tag-23`,label:`Caption 23`},{value:`caption-tag-26`,color:`caption-tag-26`,label:`Caption 26`},{value:`caption-tag-28`,color:`caption-tag-28`,label:`Caption 28`},{value:`caption-tag-31`,color:`caption-tag-31`,label:`Caption 31`},{value:`caption-tag-33`,color:`caption-tag-33`,label:`Caption 33`}]},color:{property:`color`,width:`10%`,color:this.changeColor},detail:{property:`detail`,type:`detail`,detail:{columns:[{property:`info`,label:`Detail`},{property:`date`,label:`Detail Date`,type:`date`,format:`dd-MM-yy`},{property:`time`,label:`Detail Time`,type:`time`},{property:`currency`,label:`Detail Currency`,type:`currency`}],typeHeader:`inline`}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?`caption-tag-08`:`caption-tag-13`}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=[`an an-copy`,`an an-check`,`an an-camera`,`an an-plant`,`an an-building-apartment`],a=[`an an-trash`,`an an-newspaper`,`an an-gas-pump`,`an an-chats`,`an an-bluetooth`],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return`${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}:${a<10?`0`+a.toString():a.toString()}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Ke=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:`First Action`};actionTableSecond={action:this.openModal.bind(this),label:`Second Action`};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=[`hideBatchActions`,`hideTableSearch`];selection;spacing=_n.Medium;filterType=Cu.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:`Actions`,value:`actions`},{label:`Disable first action`,value:`disableAction`,disabled:!0},{label:`Single action`,value:`singleAction`},{label:`First action visible`,value:`visibleAction`}];selectionOptions=[{label:`Selectable`,value:`selectable`},{label:`Hide select all`,value:`hideSelectAll`,disabled:!0},{label:`Single select`,value:`singleSelect`,disabled:!0}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filterModeOptions=[{label:`Starts With`,value:Cu.startsWith},{label:`Contains`,value:Cu.contains},{label:`Ends With`,value:Cu.endsWith}];columnsOptions=[{value:`text`,label:`Text`},{value:`link`,label:`Link`},{value:`number`,label:`Number`},{value:`currency`,label:`Currency`},{value:`date`,label:`Date`},{value:`time`,label:`Time`},{value:`dateTime`,label:`DateTime`},{value:`subtitle`,label:`Subtitle`},{value:`detail`,label:`Detail`},{value:`label`,label:`Label`},{value:`color`,label:`Color`},{value:`icon`,label:`Icon`},{value:`boolean`,label:`Boolean`}];propertiesOptions=[{label:`Sort`,value:`sort`},{label:`Striped`,value:`striped`},{label:`Show more disabled`,value:`showMoreDisabled`},{label:`Loading show more`,value:`loadingShowMore`},{label:`Hide detail`,value:`hideDetail`},{label:`Loading`,value:`loading`},{label:`Auto collapse`,value:`autoCollapse`},{label:`Hide columns manager`,value:`hideColumnsManager`},{label:`Hide batch actions`,value:`hideBatchActions`},{label:`Actions Right`,value:`actionsRight`},{label:`Draggable`,value:`draggable`},{label:`Hide action fixed columns`,value:`fixed`},{label:`Hide Table Search`,value:`hideTableSearch`},{label:`Virtual Scroll`,value:`virtualScroll`}];typeHeaderOptions=[{label:`Inline`,value:`inline`},{label:`None`,value:`none`},{label:`Top`,value:`top`}];typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes(`singleSelect`),l=this.selection.includes(`selectable`);this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container=``,this.customLiterals=void 0,this.height=void 0,this.componentsSize=`medium`,this.items=[],this.itemIndex=0,this.literals=``,this.maxColumns=void 0,this.properties=[`hideBatchActions`,`hideTableSearch`],this.selection=[],this.spacing=_n.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static ɵfac=function(l){return new(l||r)(w(Ee))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-labs`]],viewQuery:function(l,a){if(l&1&&Zl(vr,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first)}},standalone:!1,features:[Ce([Ee])],decls:34,vars:51,consts:[[`f`,`ngForm`],[3,`p-all-selected`,`p-all-unselected`,`p-change-fixed-columns`,`p-collapsed`,`p-expanded`,`p-selected`,`p-show-more`,`p-unselected`,`p-delete-items`,`p-actions`,`p-actions-right`,`p-columns`,`p-container`,`p-height`,`p-filter-type`,`p-components-size`,`p-hide-detail`,`p-hide-columns-manager`,`p-hide-batch-actions`,`p-hide-table-search`,`p-hide-select-all`,`p-items`,`p-literals`,`p-filtered-columns`,`p-loading`,`p-max-columns`,`p-selectable`,`p-spacing`,`p-loading-show-more`,`p-show-more-disabled`,`p-single-select`,`p-sort`,`p-striped`,`p-virtual-scroll`,`p-auto-collapse`,`p-draggable`,`p-hide-action-fixed-columns`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`name`,`columnsName`,`p-label`,`Columns`,`p-columns`,`4`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-columns`,`3`,`name`,`typeHeader`,`p-label`,`Column detail typeHeader`,1,`po-lg-9`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hideSelect`,`p-label`,`Column detail hideSelect`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,`p-columns`,`4`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionsDefinition`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Actions`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`selection`,`p-columns`,`4`,`p-help`,`To enable 'hide select all' and 'single select' check 'selectable'.`,`p-label`,`Selection`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas não definidas"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filteredColumns`,`p-help`,`Ex.: "text, time"`,`p-label`,`Filter Columns`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Height of table`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxColumns`,`p-clean`,``,`p-help`,`Max columns to be visible`,`p-label`,`Max Columns`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,`p-title`,`PO Table`],[`p-label`,`Chosen Item:`,3,`p-value`]],template:function(l,a){if(l&1){let m=Vx();Ml(0,`po-table`,1),ht(`p-all-selected`,function(){return a.changeEvent(`p-all-selected`)})(`p-all-unselected`,function(){return a.changeEvent(`p-all-unselected`)})(`p-change-fixed-columns`,function(){return a.changeEvent(`p-change-fixed-columns`)})(`p-collapsed`,function(){return a.changeEvent(`p-collapsed`)})(`p-expanded`,function(){return a.changeEvent(`p-expanded`)})(`p-selected`,function(){return a.changeEvent(`p-selected`)})(`p-show-more`,function(){return a.showMore()})(`p-unselected`,function(){return a.changeEvent(`p-unselected`)})(`p-delete-items`,function(s){return a.deleteItems(s)}),lg(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3),lg(),ql(4,`po-divider`),Ml(5,`div`,2)(6,`po-button`,4),ht(`p-click`,function(){return a.addItem()}),lg()(),ql(7,`po-divider`),Ml(8,`form`,null,0)(10,`div`,2)(11,`po-checkbox-group`,5),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.columnsName,s)||(a.columnsName=s),Jy(s)}),ht(`p-change`,function(){return a.updateColumns()}),lg(),f0(),lg(),Ml(12,`div`,2)(13,`po-radio-group`,6),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.columnsDefinition.detail.detail.typeHeader,s)||(a.columnsDefinition.detail.detail.typeHeader=s),Jy(s)}),lg(),f0(),Ml(14,`po-switch`,7),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.columnsDefinition.detail.detail.hideSelect,s)||(a.columnsDefinition.detail.detail.hideSelect=s),Jy(s)}),lg(),f0(),lg(),Ml(15,`div`,2)(16,`po-checkbox-group`,8),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.properties,s)||(a.properties=s),Jy(s)}),lg(),f0(),lg(),Ml(17,`div`,2)(18,`po-checkbox-group`,9),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.actionsDefinition,s)||(a.actionsDefinition=s),Jy(s)}),ht(`p-change`,function(){return a.changeActionOptions()}),lg(),f0(),lg(),Ml(19,`div`,2)(20,`po-radio-group`,10),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.spacing,s)||(a.spacing=s),Jy(s)}),lg(),f0(),lg(),Ml(21,`div`,2)(22,`po-checkbox-group`,11),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.selection,s)||(a.selection=s),Jy(s)}),ht(`p-change`,function(){return a.changeSelectionOptions()}),lg(),f0(),Ml(23,`po-radio-group`,12),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.filterType,s)||(a.filterType=s),Jy(s)}),lg(),f0(),Ml(24,`po-radio-group`,13),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.componentsSize,s)||(a.componentsSize=s),Jy(s)}),lg(),f0(),lg(),Ml(25,`div`,2)(26,`po-input`,14),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.literals,s)||(a.literals=s),Jy(s)}),ht(`p-change`,function(){return a.changeLiterals()}),lg(),f0(),Ml(27,`po-input`,15),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.filteredColumns,s)||(a.filteredColumns=s),Jy(s)}),ht(`p-change`,function(){return a.changeFilteredColumns()}),lg(),f0(),Ml(28,`po-number`,16),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.height,s)||(a.height=s),Jy(s)}),lg(),f0(),Ml(29,`po-number`,17),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.maxColumns,s)||(a.maxColumns=s),Jy(s)}),lg(),f0(),lg(),Ml(30,`div`,2)(31,`po-button`,18),ht(`p-click`,function(){return a.restore()}),lg()()(),Ml(32,`po-modal`,19),ql(33,`po-info`,20),lg()}l&2&&(cw(`p-actions`,a.actions)(`p-actions-right`,a.properties.includes(`actionsRight`))(`p-columns`,a.columns)(`p-container`,a.container)(`p-height`,a.height)(`p-filter-type`,a.filterType)(`p-components-size`,a.componentsSize)(`p-hide-detail`,a.properties.includes(`hideDetail`))(`p-hide-columns-manager`,a.properties.includes(`hideColumnsManager`))(`p-hide-batch-actions`,a.properties.includes(`hideBatchActions`))(`p-hide-table-search`,a.properties.includes(`hideTableSearch`))(`p-hide-select-all`,a.selection.includes(`hideSelectAll`))(`p-items`,a.items)(`p-literals`,a.customLiterals)(`p-filtered-columns`,a.filteredColumns)(`p-loading`,a.properties.includes(`loading`))(`p-max-columns`,a.maxColumns)(`p-selectable`,a.selection.includes(`selectable`))(`p-spacing`,a.spacing)(`p-loading-show-more`,a.properties.includes(`loadingShowMore`))(`p-show-more-disabled`,a.properties.includes(`showMoreDisabled`))(`p-single-select`,a.selection.includes(`singleSelect`))(`p-sort`,a.properties.includes(`sort`))(`p-striped`,a.properties.includes(`striped`))(`p-virtual-scroll`,a.properties.includes(`virtualScroll`))(`p-auto-collapse`,a.properties.includes(`autoCollapse`))(`p-draggable`,a.properties.includes(`draggable`))(`p-hide-action-fixed-columns`,a.properties.includes(`fixed`)),Up(3),cw(`p-value`,a.event),Up(8),Tw(`ngModel`,a.columnsName),cw(`p-options`,a.columnsOptions),p0(),Up(2),Tw(`ngModel`,a.columnsDefinition.detail.detail.typeHeader),cw(`p-options`,a.typeHeaderOptions),p0(),Up(),Tw(`ngModel`,a.columnsDefinition.detail.detail.hideSelect),p0(),Up(2),Tw(`ngModel`,a.properties),cw(`p-options`,a.propertiesOptions),p0(),Up(2),Tw(`ngModel`,a.actionsDefinition),cw(`p-options`,a.actionsDefinitionOptions),p0(),Up(2),Tw(`ngModel`,a.spacing),cw(`p-options`,a.typeSpacing),p0(),Up(2),Tw(`ngModel`,a.selection),cw(`p-options`,a.selectionOptions),p0(),Up(),Tw(`ngModel`,a.filterType),cw(`p-options`,a.filterModeOptions),p0(),Up(),Tw(`ngModel`,a.componentsSize),cw(`p-options`,a.componentsSizeOptions),p0(),Up(2),Tw(`ngModel`,a.literals),p0(),Up(),Tw(`ngModel`,a.filteredColumns),p0(),Up(),Tw(`ngModel`,a.height),p0(),Up(),Tw(`ngModel`,a.maxColumns),p0(),Up(4),cw(`p-value`,a.currentItem))},dependencies:[IY,wY,CY,Vk,kk,Zt$1,nb,G4,lU,xbe,q0e,J4,kbe,vr,oU],encapsulation:2,changeDetection:1})}return r})();var Ct=r=>({"docs-sample-code-tabs":r});var Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-labs/sample-po-table-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-table
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-labs/sample-po-table-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-table-labs/sample-po-table-labs.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-table-labs`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ct,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ke],encapsulation:2,changeDetection:1})}return r})();var Pt=[`table`];var Ye=(()=>{class r$1{tableComponent;service=``;key;value;sampleService=``;params;filters=[];columns=[{property:`id`},{property:`name`}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Un({type:r$1,selectors:[[`sample-po-table-with-api`]],viewQuery:function(l,a){if(l&1&&Zl(Pt,5),l&2){let m;lo(m=uo())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[[`table`,``],[1,`po-row`],[`p-label`,`URL API service`,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Columns`,1,`po-md-12`],[`p-label`,`Columns`,`p-help`,`[{ property: 'name' }]`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-rows`],[`p-label`,`Filters`,1,`po-md-12`],[`p-label`,`Key`,`p-help`,`Object key`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Value`,`p-help`,`Object value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Filter`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-mt-1`,`po-md-12`,3,`p-remove`,`p-remove-all`,`p-disclaimers`],[1,`po-mt-1`,`po-md-12`,3,`p-columns`,`p-service-api`,`p-height`,`p-hide-table-search`,`p-infinite-scroll`]],template:function(l,a){if(l&1){let m=Vx();Ml(0,`div`,1)(1,`po-input`,2),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.service,s)||(a.service=s),Jy(s)}),ht(`p-change`,function(){return a.changeService(a.service)}),lg(),f0(),lg(),Ml(2,`div`,1),ql(3,`po-divider`,3),Ml(4,`po-textarea`,4),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.stringColumns,s)||(a.stringColumns=s),Jy(s)}),ht(`p-change`,function(s){return a.onChangeColumns(s)}),lg(),f0(),lg(),Ml(5,`div`,1),ql(6,`po-divider`,5),Ml(7,`po-input`,6),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.key,s)||(a.key=s),Jy(s)}),lg(),f0(),Ml(8,`po-input`,7),Mw(`ngModelChange`,function(s){return Qy(m),yN(a.value,s)||(a.value=s),Jy(s)}),lg(),f0(),lg(),Ml(9,`div`,1)(10,`po-button`,8),ht(`p-click`,function(){return a.addFilter(a.key,a.value)}),lg()(),Ml(11,`div`,1)(12,`po-disclaimer-group`,9),ht(`p-remove`,function(s){return a.removeItem(s)})(`p-remove-all`,function(){return a.removeAllItems()}),lg()(),Ml(13,`div`,1),ql(14,`po-table`,10,0),lg()}l&2&&(Up(),Tw(`ngModel`,a.service),p0(),Up(3),Tw(`ngModel`,a.stringColumns),cw(`p-rows`,5),p0(),Up(3),Tw(`ngModel`,a.key),p0(),Up(),Tw(`ngModel`,a.value),p0(),Up(2),cw(`p-disabled`,!a.key||!a.value),Up(2),cw(`p-disclaimers`,a.filters),Up(2),cw(`p-columns`,a.columns)(`p-service-api`,a.sampleService)(`p-height`,300)(`p-hide-table-search`,!1)(`p-infinite-scroll`,!0))},dependencies:[wY,Vk,Zt$1,q4,nb,lU,Pbe,oU],encapsulation:2,changeDetection:1})}return r$1})();var wt=r=>({"docs-sample-code-tabs":r});var et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-with-api-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table using API`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-with-api/sample-po-table-with-api.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-with-api/sample-po-table-with-api.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-table-with-api`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,wt,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ye],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r{getColumns(){return[{property:`code`,type:`number`,width:`8%`},{property:`product`},{property:`customer`},{property:`exit_forecast`,label:`Exit forecast`,type:`dateTime`},{property:`time_since_purchase`,label:`Time since purchase`,type:`time`,visible:!1},{property:`quantity`,label:`Quantity (Tons)`,type:`number`,width:`15%`,visible:!1},{property:`icms`,label:`ICMS`,type:`number`,format:`1.2-5`,visible:!1},{property:`status`,type:`label`,width:`8%`,labels:[{value:`delivered`,color:`caption-tag-23`,label:`Delivered`},{value:`transport`,color:`caption-tag-14`,label:`Transport`},{value:`production`,color:`caption-tag-03`,label:`Production`},{value:`stock`,color:`caption-tag-33`,label:`Stock`,icon:`an an-package`}]}]}getItems(){return[{code:1200,product:`Rice`,customer:`Angeloni`,quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`delivered`,license_plate:`MDJD9191`,batch_product:18041822,driver:`José Oliveira`},{code:1355,product:`Margarine`,customer:`Giassi`,quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`XXA5454`,batch_product:18041821,driver:`Francisco Pereira`},{code:1496,product:`Wheat flour`,customer:`Walmart`,quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`QEW5779`,batch_product:18041820,driver:`Pedro da Costa`},{code:1712,product:`Milk`,customer:`Carrefour`,quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`WWW1247`,batch_product:18041819,driver:`João da Silva`},{code:1881,product:`Oil`,customer:`Carrefour`,quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`XXI2312`,batch_product:18041825,driver:`Antonio Lima`},{code:1551,product:`Cream cheese`,customer:`Barbosa`,quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`stock`,license_plate:`XXI2359`,batch_product:18041888,driver:`Vitoria Felix`}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59);return`00:${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}`}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function kt(r,W){if(r&1){let o=Vx();Ml(0,`po-widget`,2)(1,`div`,3)(2,`po-select`,4),Mw(`ngModelChange`,function(a){let m=Qy(o).$implicit;return yN(m.status,a)||(m.status=a),Jy(a)}),lg(),f0(),lg(),Ml(3,`div`,3),ql(4,`po-info`,5)(5,`po-info`,6)(6,`po-info`,7),lg()()}if(r&2){let o=W.$implicit,l=zx();cw(`p-title`,wN(`Transport detail `,o.code)),Up(2),Tw(`ngModel`,o.status),cw(`p-options`,l.statusOptions),p0(),Up(2),cw(`p-value`,o.batch_product),Up(),cw(`p-value`,o.driver),Up(),cw(`p-value`,o.license_plate)}}var tt=(()=>{class r{transportService;columns;items;statusOptions=[{label:`Delivered`,value:`delivered`},{label:`Transport`,value:`transport`},{label:`Production`,value:`production`}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!==`delivered`}static ɵfac=function(l){return new(l||r)(w(be))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-transport`]],standalone:!1,features:[Ce([be])],decls:2,vars:9,consts:[[`p-spacing`,`large`,3,`p-auto-collapse`,`p-columns`,`p-hide-columns-manager`,`p-hide-table-search`,`p-items`,`p-sort`,`p-striped`],[`p-table-row-template`,``,3,`p-table-row-template-arrow-direction`,`p-table-row-template-show`],[3,`p-title`],[1,`po-row`],[`name`,`status`,`p-label`,`Transport status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Batch of product`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`Driver`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`License plate`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`]],template:function(l,a){l&1&&(Ml(0,`po-table`,0),ow(1,kt,7,7,`ng-template`,1),lg()),l&2&&(cw(`p-auto-collapse`,!0)(`p-columns`,a.columns)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-sort`,!0)(`p-striped`,!0),Up(),cw(`p-table-row-template-arrow-direction`,`right`)(`p-table-row-template-show`,a.isUndelivered))},dependencies:[wY,Vk,Tbe,kbe,oU,xye,$8e],encapsulation:2,changeDetection:1})}return r})();var It=r=>({"docs-sample-code-tabs":r});var nt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-transport-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table - Transport`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-transport/sample-po-table-transport.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-table
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-transport/sample-po-table-transport.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-table-transport/sample-po-table-transport.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-table-transport`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,It,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,tt],encapsulation:2,changeDetection:1})}return r})();var Se=(()=>{class r{getColumns(){return[{property:`status`,type:`label`,labels:[{value:`available`,color:`caption-tag-13`,label:`Available`},{value:`reserved`,color:`caption-tag-08`,label:`Reserved`},{value:`closed`,color:`caption-tag-03`,label:`Closed`}]},{property:`country`},{property:`destination`},{property:`region`,type:`subtitle`,width:`180px`,subtitles:[{value:`Alps`,color:`color-01`,label:`Alps`,content:`AL`},{value:`Australasia`,color:`color-02`,label:`Australasia`,content:`AU`},{value:`British Isle`,color:`color-03`,label:`British Isle`,content:`BI`},{value:`Caucasus`,color:`color-04`,label:`Caucasus`,content:`CA`},{value:`Danube`,color:`color-05`,label:`Danube`,content:`DA`},{value:`East Asia`,color:`color-06`,label:`East Asia`,content:`EA`},{value:`Latin America`,color:`color-07`,label:`Latin America`,content:`LA`},{value:`Mediterranean`,color:`color-08`,label:`Mediterranean`,content:`ME`},{value:`Nordics`,color:`color-09`,label:`Nordics`,content:`NO`},{value:`North America`,color:`color-10`,label:`North America`,content:`NA`},{value:`Southern Africa`,color:`color-11`,label:`Southern Africa`,content:`SA`},{value:`Western Africa`,color:`color-12`,label:`Western Africa`,content:`WA`}]},{property:`date`,type:`date`},{property:`returnDate`,label:`Return Date`,type:`date`},{property:`value`,type:`currency`,format:`USD`},{property:`id`,label:`Flight Number`,type:`number`},{property:`onBoardService`,label:`On Board Service`,type:`boolean`,boolean:{trueLabel:`Yes`,falseLabel:`No`}},{property:`detail`,label:`Details`,type:`detail`,detail:{columns:[{property:`package`},{property:`tour`},{property:`time`,label:`Departure time`,type:`time`,format:`HH:mm`},{property:`distance`,label:`Distance (Miles)`,type:`number`,format:`1.0-5`}],typeHeader:`top`}}]}getItems(){return[{id:11234,initials:`BR`,country:`Brazil`,value:1e3,date:`2018-10-09`,returnDate:`2018-11-01`,class:`Economic`,onBoardService:!1,destination:`Rio de Janeiro`,airline:`Azul`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`20:10:10`,distance:`1000`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`09:15:19`,distance:`2000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`07:10:20`,distance:`3000`}]},{id:22467,initials:`FR`,country:`France`,value:5e3,date:`2019-12-13`,returnDate:`2019-12-31`,class:`Economic`,onBoardService:!1,destination:`Paris`,airline:`British Airways`,status:`closed`,region:`Alps`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`10:15:10`,distance:`4800`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`22:15:10`,distance:`11000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`10:15:10`,distance:`1000`}]},{id:40670,initials:`SN`,country:`Senegal`,value:3200,date:`2017-11-22`,returnDate:`2018-12-01`,class:`Economic`,onBoardService:!1,destination:`Dakar`,airline:`Iberia`,status:`closed`,region:`Western Africa`},{id:34679,initials:`PT`,country:`Portugal`,value:5500,date:`2017-10-10`,returnDate:`2018-10-20`,class:`Economic`,onBoardService:!1,destination:`Lisbon`,airline:`Air Europa`,status:`closed`,region:`Mediterranean`},{id:48999,initials:`RU`,country:`Russia`,value:6700,date:`2019-01-17`,returnDate:`2019-02-20`,class:`First Class`,onBoardService:!0,destination:`Moscow`,airline:`Lufthansa`,status:`reserved`,region:`Caucasus`},{id:48999,initials:`US`,country:`United States`,value:2700.49,date:`2018-10-17`,returnDate:`2018-10-29`,class:`Economic`,onBoardService:!1,destination:`Los Angeles`,airline:`American Airlines`,status:`reserved`,region:`North America`},{id:54563,initials:`CL`,country:`Chile`,value:2e3,date:`2018-10-20`,returnDate:`2018-11-01`,destination:`Cusco`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`available`,region:`Latin America`},{id:64568,initials:`MX`,country:`Mexico`,value:2100,date:`2018-03-10`,returnDate:`2018-05-09`,destination:`Mexico City`,class:`Economic`,onBoardService:!1,airline:`Aero México`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`12:10:10`,distance:`2200`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`11:10:10`,distance:`1500`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`16:10:10`,distance:`1800`}]},{id:75456,initials:`IE`,country:`Ireland`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Cork`,class:`First Class`,onBoardService:!0,airline:`Lufthansa`,status:`reserved`,region:`British Isle`},{id:23445,initials:`ZA`,country:`South Africa`,value:1900,date:`2018-12-10`,returnDate:`2018-12-25`,destination:`Cape Town`,class:`Economic`,onBoardService:!1,airline:`South African Airways`,status:`available`,region:`Southern Africa`},{id:19238,initials:`AU`,country:`Australia`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Sydney`,class:`First Class`,onBoardService:!0,airline:`Jetstar Airways`,status:`reserved`,region:`Australasia`},{id:85456,initials:`JP`,country:`Japan`,value:5900,date:`2018-10-25`,returnDate:`2018-11-10`,destination:`Tokio`,class:`Executive`,onBoardService:!0,airline:`Japan Airlines`,status:`available`,region:`East Asia`},{id:94565,initials:`CN`,country:`China`,value:2900,date:`2018-10-10`,returnDate:`2018-10-25`,destination:`Beijing`,class:`Economic`,onBoardService:!1,airline:`Malaysia Airlines`,status:`available`,region:`East Asia`},{id:32330,initials:`UK`,country:`England`,value:2090.5,date:`2018-10-07`,returnDate:`2018-11-15`,destination:`London`,class:`Executive`,onBoardService:!0,airline:`British Airways`,status:`available`,region:`British Isle`},{id:14560,initials:`CA`,country:`Canada`,value:2090.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Quebec`,class:`Economic`,onBoardService:!1,airline:`American Airlines`,status:`available`,region:`North America`},{id:93800,initials:`IS`,country:`Iceland`,value:6300,date:`2018-10-12`,returnDate:`2018-10-27`,destination:`Reykjavík`,class:`Economic`,onBoardService:!1,airline:`Star Alliance`,status:`available`,region:`Nordics`},{id:34239,initials:`DE`,country:`Germany`,value:3070.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Berlin`,class:`Executive`,onBoardService:!0,airline:`LATAM`,status:`available`,region:`Danube`},{id:45611,initials:`AR`,country:`Argentina`,value:3500.5,date:`2018-12-07`,returnDate:`2018-12-29`,destination:`Ushuaia`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`reserved`,region:`Latin America`}]}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var it=(()=>{class r$2{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:`an an-currency-circle-dollar`,label:`Apply Discount`,disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:`an an-info`,label:`Details`},{action:this.remove.bind(this),icon:`po-icon an an-trash`,label:`Remove`}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem(`initial-columns`)){this.initialColumns=localStorage.getItem(`initial-columns`).split(`,`);let l=[...this.columns.map(a=>s(r({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem(`initial-columns`).split(`,`),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:`Add to cart`,message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case`available`:this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case`reserved`:this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case`closed`:this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=s(r({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem(`initial-columns`,o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static ɵfac=function(l){return new(l||r$2)(w(Se),w(Eu),w(e_e))};static ɵcmp=Un({type:r$2,selectors:[[`sample-po-table-airfare`]],viewQuery:function(l,a){if(l&1&&Zl(vr,7)(oU,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first),lo(m=uo())&&(a.poTable=m.first)}},standalone:!1,features:[Ce([Se,e_e])],decls:16,vars:24,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-change-visible-columns`,`p-restore-column-manager`,`p-delete-items`,`p-container`,`p-height`,`p-hide-batch-actions`,`p-hide-table-search`,`p-selectable`,`p-sort`,`p-striped`,`p-actions`,`p-columns`,`p-items`,`p-max-columns`,`p-virtual-scroll`],[`p-label`,`Total Value`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[`p-label`,`Expanded Itens`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[1,`po-row`],[`p-icon`,`an an-shopping-cart-simple`,`p-label`,`Add items to cart`,1,`po-md-3`,3,`p-click`],[`p-label`,`Expand all detail`,1,`po-md-3`,3,`p-click`],[`p-label`,`Collapse all detail`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[`p-label`,`Airline`,1,`po-sm-6`,3,`p-value`],[`p-label`,`Initials`,1,`po-sm-2`,3,`p-value`],[`p-label`,`Class`,1,`po-sm-4`,3,`p-value`]],template:function(l,a){l&1&&(Ml(0,`div`,0),mN(1,`Choose one or more promotional airfares`),lg(),ql(2,`po-divider`),Ml(3,`po-table`,1),ht(`p-collapsed`,function(){return a.onCollapseDetail()})(`p-expanded`,function(){return a.onExpandDetail()})(`p-selected`,function(p){return a.sumTotal(p)})(`p-unselected`,function(p){return a.decreaseTotal(p)})(`p-change-visible-columns`,function(p){return a.changeColumnVisible(p)})(`p-restore-column-manager`,function(){return a.restoreColumn()})(`p-delete-items`,function(p){return a.deleteItems(p)}),lg(),ql(4,`po-divider`)(5,`po-info`,2),PN(6,`currency`),ql(7,`po-info`,3),Ml(8,`div`,4)(9,`po-button`,5),ht(`p-click`,function(){return a.addToCart()}),lg(),Ml(10,`po-button`,6),ht(`p-click`,function(){return a.expandAll()}),lg(),Ml(11,`po-button`,7),ht(`p-click`,function(){return a.collapseAll()}),lg()(),Ml(12,`po-modal`,8),ql(13,`po-info`,9)(14,`po-info`,10)(15,`po-info`,11),lg()),l&2&&(Up(3),cw(`p-container`,!0)(`p-height`,400)(`p-hide-batch-actions`,!1)(`p-hide-table-search`,!1)(`p-selectable`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-actions`,a.actions)(`p-columns`,a.columns)(`p-items`,a.items)(`p-max-columns`,7)(`p-virtual-scroll`,!1),Up(2),cw(`p-value`,EN(LN(6,21,a.total,`USD`))),Up(2),cw(`p-value`,a.totalExpanded),Up(5),cw(`p-title`,CN(``,a.detail?.destination,` - `,a.detail?.country)),Up(),cw(`p-value`,a.detail?.airline),Up(),cw(`p-value`,a.detail?.initials),Up(),cw(`p-value`,a.detail?.class))},dependencies:[Zt$1,nb,kbe,vr,oU,rP],encapsulation:2,changeDetection:1})}return r$2})();var Lt=r=>({"docs-sample-code-tabs":r});var at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-airfare-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table - Airfare`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-airfare/sample-po-table-airfare.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-airfare/sample-po-table-airfare.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-table-airfare/sample-po-table-airfare.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-table-airfare`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Lt,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,it],encapsulation:2,changeDetection:1})}return r})();var j=(function(r){return r[r.Stable=0]=`Stable`,r[r.Experimental=1]=`Experimental`,r[r.RoadMap=2]=`RoadMap`,r})(j||{});var xe=(()=>{class r{items=[{component:{favorite:[`favorite`,`documentation`],name:`PO Select`,description:`Display a list of items and allows selection`,link:`/documentation/po-select`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Checkbox`,description:`Group of square buttons that allows multiple items to be selected`,link:`/documentation/po-checkbox-group`,extra:`Best Practices`,extras:[`Short and objective texts for items`,`Use with short lists`,`For big lists use PO Multiselect`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Login`,description:`Template for authentication`,link:`/documentation/po-page-login`,extra:`Features`,extras:[],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Number`,description:`Input that allows only numbers`,link:`/documentation/po-number`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Dynamic Table`,description:`Template for list resources with a table`,link:`/documentation/po-page-dynamic-table`,extra:`Features`,extras:[`6 defaults actions`,`Use Metadata to build your page`,`No code`,`Customization`],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Combo`,description:`Display a list of items with filter and allows selection`,link:`/documentation/po-combo`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Notification`,description:`Show notification easily and quickly`,link:`/documentation/po-notification`,extra:`Features`,extras:[`4 types of notifications`,`Define time for your notifications`,`Use actions in your notification`],status:0,type:`service`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Multiselect`,description:`Display a list of items and allows multiple selection`,link:`/documentation/po-multiselect`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[],name:`PO Grid`,description:`Create a grid for edition`,link:`/documentation/po-grid`,extra:`Features`,extras:[],status:2,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Input`,description:`Input for general texts`,link:`/documentation/po-input`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Textarea`,description:`Larger input for big texts`,link:`/documentation/po-textarea`,extra:`Best Practices`,extras:[`Recommended to large texts like observations and details`,`For short texts use po-input`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Datepicker`,description:`Input with calendar for dates`,link:`/documentation/po-datepicker`,extra:`Features`,extras:[`Multiple idioms ( pt, es , en)`,`Custom date formats`,`Period validation (start date and end date)`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Email`,description:`Input that allows valid email texts (username@email.com)`,link:`/documentation/po-email`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Url`,description:`Input that expects a valid url as text (http://www.url.com)`,link:`/documentation/po-url`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Password`,description:`Input with bullet text to type passwords`,link:`/documentation/po-password`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Login`,description:`Input with a user icon that represents a login field`,link:`/documentation/po-login`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Upload`,description:`Upload file(s) with a loading bar`,link:`/documentation/po-upload`,extra:`Features`,extras:[`Multiple file selection`,`Automatic upload after click`,`File format and size restriction`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Avatar`,description:`Creates a circle with a picture inside`,link:`/documentation/po-avatar`,extra:`Features`,extras:[`Multiple sizes`,`Default image`],status:0,type:`component`}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(`.`).length>1){let s=m.split(`.`)[0],ye=m.split(`.`)[1];return o[s][ye]<l[s][ye]?p===uf.Ascending?-1:1:p===uf.Ascending?1:-1}else return o[m]<l[m]?p===uf.Ascending?-1:1:p===uf.Ascending?1:-1}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Vt(r,W){if(r&1&&(Ml(0,`div`),mN(1),PN(2,`uppercase`),lg()),r&2){let o=W.$implicit;oN(wN(`badge `,o)),Up(),bw(FN(2,4,o))}}function zt(r,W){if(r&1&&(Ml(0,`ul`)(1,`li`,4),mN(2),lg(),ql(3,`po-divider`),lg()),r&2){let o=W.$implicit;Up(2),bw(o)}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:`component.status`,type:`label`,label:`Status`,width:`5%`,labels:[{value:j.Stable,color:`caption-tag-13`,label:`Stable`,textColor:`white`,tooltip:`Published component`},{value:j.Experimental,color:`caption-tag-08`,label:`Experimental`,textColor:`white`,tooltip:`Component in homologation`},{value:j.RoadMap,color:`caption-tag-03`,label:`Roadmap`,textColor:`white`,tooltip:`Component in roadmap`}]},{property:`component.name`,label:`Name`,type:`link`},{property:`component.type`,label:`Type`,type:`columnTemplate`,width:`10%`},{property:`component.description`,label:`Descrição`,color:this.experimentalColor.bind(this)},{property:`component.extra`,label:`Extras`,width:`10%`,type:`link`,tooltip:`Additional details`,action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:`component.favorite`,label:`Actions`,type:`icon`,sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:`an an-star`,tooltip:`Favorite`,value:`favorite`},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:`an an-arrow-square-out`,tooltip:`Click to go to documentation`,value:`documentation`}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===j.Experimental?`caption-tag-08`:`caption-tag-13`}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==j.Stable}canShowExtras(o){return o?.component?.status!==j.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?`caption-tag-08`:`caption-tag-13`}static ɵfac=function(l){return new(l||r)(w(xe),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-components`]],viewQuery:function(l,a){if(l&1&&Zl(vr,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first)}},standalone:!1,features:[Ce([xe])],decls:8,vars:9,consts:[[1,`po-font-text-large`,`po-text-color-neutral-dark-40`],[`p-container`,`shadow`,3,`p-show-more`,`p-sort-by`,`p-loading-show-more`,`p-columns`,`p-items`,`p-show-more-disabled`,`p-sort`],[`p-table-column-template`,``,3,`p-property`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[1,`po-font-text`]],template:function(l,a){l&1&&(Ml(0,`div`,0),mN(1,`PO UI Library`),lg(),ql(2,`po-divider`),Ml(3,`po-table`,1),ht(`p-show-more`,function(p){return a.showMore(p)})(`p-sort-by`,function(p){return a.sort(p)}),ow(4,Vt,3,6,`ng-template`,2),lg(),Ml(5,`po-modal`,3),xx(6,zt,4,1,`ul`,null,Ax),lg()),l&2&&(Up(3),cw(`p-loading-show-more`,a.isLoading)(`p-columns`,a.columns)(`p-items`,a.items)(`p-show-more-disabled`,a.showMoreDisabled)(`p-sort`,!0),Up(),cw(`p-property`,`component.type`),Up(),cw(`p-title`,CN(``,a.title,` - `,a.extraInformation?.component)),Up(),Nx(a.extraInformation?.extras))},dependencies:[nb,vr,oU,Cye,QO],styles:[`.badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}`],changeDetection:1})}return r})();var jt=r=>({"docs-sample-code-tabs":r});var lt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-components-view`]],standalone:!1,decls:38,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table - Po Field Components`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-components/sample-po-table-components.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-components/sample-po-table-components.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-table-components/sample-po-table-components.enum.ts`),lg(),Ml(23,`pre`,9),mN(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),lg(),Ml(25,`label`,6),mN(26,`sample-po-table-components/sample-po-table-components.service.ts`),lg(),Ml(27,`pre`,9),mN(28,`import { Injectable } from '@angular/core';

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
`),lg()()(),Ml(29,`po-tab`,10)(30,`div`)(31,`label`,6),mN(32,`sample-po-table-components/sample-po-table-components.component.css`),lg(),Ml(33,`pre`,11),mN(34,`.badge {
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
`),lg()()()()(),Ml(35,`div`,12),ql(36,`sample-po-table-components`),lg(),ql(37,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,jt,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ot],encapsulation:2,changeDetection:1})}return r})();var he=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:`id`,label:`Id`,type:`string`,width:`90px`},{property:`label`,label:`Name`,type:`string`,width:`90px`},{property:`email`,label:`E-mail`,type:`string`,width:`120px`}]}getItems(){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes`).pipe(PT(`items`))}static ɵfac=function(l){return new(l||r)(b(db))};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Qt=[`POItemsOri`];var Gt=[`POItemsSelected`];var rt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l===`new`)this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static ɵfac=function(l){return new(l||r)(w(he))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-heroes`]],viewQuery:function(l,a){if(l&1&&Zl(Qt,7)(Gt,7),l&2){let m;lo(m=uo())&&(a.poItemsOri=m.first),lo(m=uo())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[Ce([he])],decls:11,vars:16,consts:[[`POItemsOri`,``],[`POItemsSelected`,``],[1,`po-row`,`po-pb-2`],[1,`po-md-6`],[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[`p-selectable`,`true`,`p-infinite-scroll-distance`,`80`,`p-height`,`300`,3,`p-selected`,`p-unselected`,`p-delete-items`,`p-columns`,`p-infinite-scroll`,`p-hide-select-all`,`p-hide-table-search`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`],[`p-height`,`300`,3,`p-columns`,`p-hide-table-search`,`p-striped`,`p-infinite-scroll`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`]],template:function(l,a){l&1&&(Ml(0,`div`,2)(1,`div`,3)(2,`div`,4),mN(3,`Choose one or more heroes for your team`),lg(),Ml(4,`po-table`,5,0),ht(`p-selected`,function(p){return a.changeOptions(p,`new`)})(`p-unselected`,function(p){return a.changeOptions(p,`change`)})(`p-delete-items`,function(p){return a.deleteItems(p)}),lg()(),Ml(6,`div`,3)(7,`div`,4),mN(8,`Here your chosen heroes`),lg(),ql(9,`po-table`,6,1),lg()()),l&2&&(Up(4),cw(`p-columns`,a.columns)(`p-infinite-scroll`,!0)(`p-hide-select-all`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1),Up(5),cw(`p-columns`,a.columns)(`p-hide-table-search`,!1)(`p-striped`,!0)(`p-infinite-scroll`,!0)(`p-items`,a.itemsSelected)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1))},dependencies:[oU],encapsulation:2,changeDetection:1})}return r})();var Jt=r=>({"docs-sample-code-tabs":r});var mt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table - Heroes`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-heroes/sample-po-table-heroes.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row po-pb-2">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-heroes/sample-po-table-heroes.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-table-heroes/sample-po-table-heroes.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-table-heroes`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Jt,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,rt],encapsulation:2,changeDetection:1})}return r})();var Kt=()=>({code:`001`,table:`PO Table`,angular:`PO-UI`});var Zt=r=>[r];var dt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-draggable`]],standalone:!1,decls:4,vars:7,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-items`,`p-draggable`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(l,a){l&1&&(Ml(0,`div`,0),mN(1,` Choose one column and drag to another horizontal position in the table and drop
`),lg(),ql(2,`po-divider`)(3,`po-table`,1)),l&2&&(Up(3),cw(`p-items`,MN(5,Zt,TN(4,Kt)))(`p-draggable`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[nb,oU],encapsulation:2,changeDetection:1})}return r})();var en=r=>({"docs-sample-code-tabs":r});var st=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-draggable-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table Drag and Drop`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-draggable/sample-po-table-draggable.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-draggable/sample-po-table-draggable.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-table-draggable`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,en,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,dt],encapsulation:2,changeDetection:1})}return r})();function nn(r,W){if(r&1){let o=Vx();Ml(0,`po-filter-chip`,6),ht(`p-selected-change`,function(a){let m=Qy(o).$implicit;return Jy(zx().onSuggestionChange(m,a))}),lg()}if(r&2){let o=W.$implicit,l=zx();cw(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}var pt=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=[`salário acima de 15000`,`funcionários de Curitiba`,`departamento Engenharia com salário acima de 10000`,`admitidos depois de 2020`,`com menos de 30 anos`,`de São Paulo com salário abaixo de 15000`,`departamento Design`,`salário entre 8000 e 12000`];AI_URL=`https://po-sample-api.onrender.com/v1/ai/filter`;columns=[{property:`name`,label:`Nome`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`},{property:`department`,label:`Departamento`},{property:`salary`,label:`Salário`,type:`currency`,format:`BRL`},{property:`hireDate`,label:`Admissão`,type:`date`}];items=[{name:`Tony Stark`,age:34,city:`São Paulo`,department:`Engenharia`,salary:12e3,hireDate:`2019-03-15`},{name:`Rachel Green`,age:28,city:`Curitiba`,department:`Design`,salary:8500,hireDate:`2021-07-01`},{name:`Michael Scott`,age:42,city:`São Paulo`,department:`Gestão`,salary:18e3,hireDate:`2015-11-20`},{name:`Hermione Granger`,age:25,city:`Recife`,department:`Engenharia`,salary:7200,hireDate:`2023-01-10`},{name:`Walter White`,age:30,city:`Belo Horizonte`,department:`Design`,salary:9500,hireDate:`2020-05-18`},{name:`Monica Geller`,age:38,city:`Rio de Janeiro`,department:`Gestão`,salary:15e3,hireDate:`2017-09-03`},{name:`Peter Parker`,age:27,city:`São Paulo`,department:`Engenharia`,salary:1e4,hireDate:`2022-04-12`},{name:`Daenerys Targaryen`,age:45,city:`Curitiba`,department:`Engenharia`,salary:21e3,hireDate:`2012-06-30`}];searchAiField={url:this.AI_URL,placeholder:`Ex: engenheiros de São Paulo com salário acima de 10000`};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||r)(w(Eu))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-search-ai`]],viewQuery:function(l,a){if(l&1&&Zl(oU,5),l&2){let m;lo(m=uo())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,`po-font-text-large-bold`,`po-mt-2`,`po-mb-1`],[1,`po-font-text-small`,`po-mb-2`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[3,`p-search-ai-result`,`p-search-ai-low-confidence`,`p-search-ai-error`,`p-columns`,`p-items`,`p-search-ai-field`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`]],template:function(l,a){l&1&&(Ml(0,`p`,0),mN(1,`PO Search A.I.`),lg(),Ml(2,`p`,1),mN(3,` O `),Ml(4,`strong`),mN(5,`PO Search A.I.`),lg(),mN(6,` é um recurso de busca inteligente integrado ao `),Ml(7,`code`),mN(8,`po-table`),lg(),mN(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),lg(),Ml(10,`p`,2),mN(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),lg(),Ml(12,`div`,3),xx(13,nn,1,3,`po-filter-chip`,4,Ax),lg(),Ml(15,`po-table`,5),ht(`p-search-ai-result`,function(p){return a.onAiResult(p)})(`p-search-ai-low-confidence`,function(p){return a.onAiLowConfidence(p)})(`p-search-ai-error`,function(p){return a.onAiError(p)}),lg()),l&2&&(Up(13),Nx(a.examples),Up(2),cw(`p-columns`,a.columns)(`p-items`,a.items)(`p-search-ai-field`,a.searchAiField))},dependencies:[Bbe,oU],encapsulation:2})}return r})();var on=r=>({"docs-sample-code-tabs":r});var ct=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-search-ai-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Table - Search A.I. (EXPERIMENTAL)`),lg(),Ml(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-table-search-ai`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+a.sampleCodeButtonIcon),Up(),gg(` `,a.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,on,a.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pt],encapsulation:2,changeDetection:1})}return r})();var ut=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-doc`]],standalone:!1,decls:5451,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table-row-template`],[`href`,`/documentation/po-table-column-template`],[`href`,`/documentation/po-table-cell-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableAction[]`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn[]`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoTableLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTableSearchAiField`],[`href`,`https://github.com/po-ui/po-sample-api`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`{`,`key:`,`value`,`}`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumnSortType`],[`pan`,``,1,`docs-api-property-type`,`PoTableBoolean`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoTableDetail`],[`href`,`https://angular.dev/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnIcon>`],[`href`,`documentation/po-table#tableColumnIcon`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnLabel>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableSubtitleColumn>`],[`pan`,``,1,`docs-api-property-type`,`'auto'`],[`pan`,``,1,`docs-api-property-type`,`'parser'`],[`pan`,``,1,`docs-api-property-type`,`'server'`],[`pan`,``,1,`docs-api-property-type`,`'none'`],[`pan`,``,1,`docs-api-property-type`,`((result:`,`PoSearchAiResult)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`tableColumnIcon`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableDetailColumn>`]],template:function(l,a){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoTableModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-table`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoTableComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),lg(),Ml(15,`p`),mN(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Ml(17,`strong`),mN(18,`Carregar mais resultados`),lg(),mN(19,`.`),lg(),Ml(20,`blockquote`)(21,`p`),mN(22,`As linhas de detalhes podem também ser customizadas através do `),Ml(23,`a`,6)(24,`code`),mN(25,`p-table-row-template`),lg()(),mN(26,`.`),lg()(),Ml(27,`blockquote`)(28,`p`),mN(29,`As colunas podem ser customizadas através dos templates `),Ml(30,`a`,7)(31,`code`),mN(32,`p-table-column-template`),lg()(),mN(33,`
e `),Ml(34,`a`,8)(35,`code`),mN(36,`p-table-cell-template`),lg()(),mN(37,`.`),lg()(),Ml(38,`p`),mN(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),lg(),Ml(40,`p`),mN(41,`Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um `),Ml(42,`em`),mN(43,`scroll`),lg(),mN(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),lg(),Ml(45,`h4`),mN(46,`Tokens customizáveis`),lg(),Ml(47,`p`),mN(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(49,`blockquote`)(50,`p`),mN(51,`Para maiores informações, acesse o guia `),Ml(52,`a`,9),mN(53,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(54,`.`),lg()(),Ml(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),mN(59,`Propriedade`),lg(),Ml(60,`th`),mN(61,`Descrição`),lg(),Ml(62,`th`),mN(63,`Valor Padrão`),lg()()(),Ml(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),mN(68,`Default Values`),lg()(),ql(69,`td`)(70,`td`),lg(),Ml(71,`tr`)(72,`td`)(73,`code`),mN(74,`--font-family`),lg()(),Ml(75,`td`),mN(76,`Família tipográfica usada`),lg(),Ml(77,`td`)(78,`code`),mN(79,`var(--font-family-theme)`),lg()()(),Ml(80,`tr`)(81,`td`)(82,`code`),mN(83,`--background-color`),lg()(),Ml(84,`td`),mN(85,`Cor de background`),lg(),Ml(86,`td`)(87,`code`),mN(88,`var(--color-neutral-light-00)`),lg()()(),Ml(89,`tr`)(90,`td`)(91,`code`),mN(92,`--color`),lg()(),Ml(93,`td`),mN(94,`Cor principal da table`),lg(),Ml(95,`td`)(96,`code`),mN(97,`var(--color-neutral-dark-95)`),lg()()(),Ml(98,`tr`)(99,`td`)(100,`code`),mN(101,`--background-striped-color`),lg()(),Ml(102,`td`),mN(103,`Cor do background quando striped`),lg(),Ml(104,`td`)(105,`code`),mN(106,`var(--color-neutral-light-05)`),lg()()(),Ml(107,`tr`)(108,`td`)(109,`code`),mN(110,`--color-line`),lg()(),Ml(111,`td`),mN(112,`Cor das linhas`),lg(),Ml(113,`td`)(114,`code`),mN(115,`var(--color-neutral-mid-40)`),lg()()(),Ml(116,`tr`)(117,`td`)(118,`strong`),mN(119,`Hover`),lg()(),ql(120,`td`)(121,`td`),lg(),Ml(122,`tr`)(123,`td`)(124,`code`),mN(125,`--color-hover`),lg()(),Ml(126,`td`),mN(127,`Cor principal no estado hover`),lg(),Ml(128,`td`)(129,`code`),mN(130,`var(--color-action-hover)`),lg()()(),Ml(131,`tr`)(132,`td`)(133,`code`),mN(134,`--background-color-hover`),lg()(),Ml(135,`td`),mN(136,`Cor de background no estado hover`),lg(),Ml(137,`td`)(138,`code`),mN(139,`var(--color-brand-01-lighter)`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`strong`),mN(143,`Focused`),lg()(),ql(144,`td`)(145,`td`),lg(),Ml(146,`tr`)(147,`td`)(148,`code`),mN(149,`--outline-color-focused`),lg()(),Ml(150,`td`),mN(151,`Cor do outline do estado de focus`),lg(),Ml(152,`td`)(153,`code`),mN(154,`var(--color-action-focus)`),lg()()(),Ml(155,`tr`)(156,`td`)(157,`strong`),mN(158,`Disabled`),lg()(),ql(159,`td`)(160,`td`),lg(),Ml(161,`tr`)(162,`td`)(163,`code`),mN(164,`--color-disabled`),lg()(),Ml(165,`td`),mN(166,`Cor principal no estado disabled`),lg(),Ml(167,`td`)(168,`code`),mN(169,`var(--color-neutral-mid-40)`),lg()()(),Ml(170,`tr`)(171,`td`)(172,`strong`),mN(173,`Headline`),lg()(),ql(174,`td`)(175,`td`),lg(),Ml(176,`tr`)(177,`td`)(178,`code`),mN(179,`--background-color-headline`),lg(),mN(180,` \xA0`),lg(),Ml(181,`td`),mN(182,`Cor do cabeçalho`),lg(),Ml(183,`td`)(184,`code`),mN(185,`var(--color-neutral-light-10)`),lg()()(),Ml(186,`tr`)(187,`td`)(188,`code`),mN(189,`--font-weight-headline`),lg()(),Ml(190,`td`),mN(191,`Peso da fonte do cabeçalho`),lg(),Ml(192,`td`)(193,`code`),mN(194,`var(--font-weight-bold)`),lg()()(),Ml(195,`tr`)(196,`td`)(197,`strong`),mN(198,`Selected`),lg()(),ql(199,`td`)(200,`td`),lg(),Ml(201,`tr`)(202,`td`)(203,`code`),mN(204,`--background-color-selected`),lg(),mN(205,`\xA0`),lg(),Ml(206,`td`),mN(207,`Cor de background no estado de selecionado`),lg(),Ml(208,`td`)(209,`code`),mN(210,`var(--color-brand-01-lightest)`),lg()()(),Ml(211,`tr`)(212,`td`)(213,`strong`),mN(214,`Actived`),lg()(),ql(215,`td`)(216,`td`),lg(),Ml(217,`tr`)(218,`td`)(219,`code`),mN(220,`--color-actived`),lg()(),Ml(221,`td`),mN(222,`Cor do texto no estado de selecionado`),lg(),Ml(223,`td`)(224,`code`),mN(225,`var(--color-neutral-dark-90)`),lg()()(),Ml(226,`tr`)(227,`td`)(228,`code`),mN(229,`--background-color-actived`),lg()(),Ml(230,`td`),mN(231,`Cor de background no estado de selecionado`),lg(),Ml(232,`td`)(233,`code`),mN(234,`var(--color-brand-01-light)`),lg()()()()()(),Ml(235,`div`,10)(236,`h4`,11),mN(237,`Seletor`),lg(),Ml(238,`pre`,12),mN(239,`<po-table
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
`),lg()(),Ml(240,`h4`,13),mN(241,`Propriedades`),lg(),Ml(242,`table`,14)(243,`tr`,15)(244,`th`,16),mN(245,`Nome`),lg(),Ml(246,`th`,16),mN(247,`Tipo`),lg(),Ml(248,`th`,16),mN(249,`Padrão`),lg(),Ml(250,`th`,16),mN(251,`Descrição`),lg()(),Ml(252,`tr`,17)(253,`td`,18)(254,`div`,19)(255,`span`,20),mN(256,` p-actions-right`),ql(257,`br`),lg()()(),Ml(258,`td`,21)(259,`code`,22),mN(260,`boolean`),lg()(),Ml(261,`td`,23)(262,`p`)(263,`code`),mN(264,`false`),lg()()(),Ml(265,`td`,24)(266,`em`)(267,`strong`),mN(268,`(opcional)`),lg()(),Ml(269,`p`),mN(270,`Define que a coluna de ações ficará no lado direito da tabela.`),lg()()(),Ml(271,`tr`,17)(272,`td`,18)(273,`div`,19)(274,`span`,20),mN(275,` p-actions`),ql(276,`br`),lg()()(),Ml(277,`td`,21)(278,`code`,25),mN(279,`PoTableAction[]`),lg()(),Ml(280,`td`,23),mN(281,`-`),lg(),Ml(282,`td`,24)(283,`em`)(284,`strong`),mN(285,`(opcional)`),lg()(),Ml(286,`p`),mN(287,`Define uma lista de ações.`),lg(),Ml(288,`p`),mN(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Ml(290,`a`,26)(291,`strong`),mN(292,`an an-dots-three`),lg()(),mN(293,` que listará as ações ao ser clicado.`),lg(),Ml(294,`p`)(295,`strong`),mN(296,`A coluna de ações não será exibida quando:`),lg()(),Ml(297,`ul`)(298,`li`),mN(299,`a lista conter valores inválidos ou indefinidos.`),lg(),Ml(300,`li`),mN(301,`tenha uma única ação e a mesma não for visível.`),lg()()()(),Ml(302,`tr`,17)(303,`td`,18)(304,`div`,27)(305,`span`,28),mN(306,` (p-all-selected)`),ql(307,`br`),lg()()(),Ml(308,`td`,21)(309,`code`,29),mN(310,`EventEmitter`),lg()(),Ml(311,`td`,23),mN(312,`-`),lg(),Ml(313,`td`,24)(314,`em`)(315,`strong`),mN(316,`(opcional)`),lg()(),Ml(317,`p`),mN(318,`Evento executado quando todas as linhas são selecionadas por meio do `),Ml(319,`em`),mN(320,`checkbox`),lg(),mN(321,` que seleciona todas as linhas.`),lg()()(),Ml(322,`tr`,17)(323,`td`,18)(324,`div`,27)(325,`span`,28),mN(326,` (p-all-unselected)`),ql(327,`br`),lg()()(),Ml(328,`td`,21)(329,`code`,29),mN(330,`EventEmitter`),lg()(),Ml(331,`td`,23),mN(332,`-`),lg(),Ml(333,`td`,24)(334,`em`)(335,`strong`),mN(336,`(opcional)`),lg()(),Ml(337,`p`),mN(338,`Evento executado quando a seleção das linhas é desmarcada por meio do `),Ml(339,`em`),mN(340,`checkbox`),lg(),mN(341,` que seleciona todas as linhas.`),lg()()(),Ml(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),mN(346,` p-auto-collapse`),ql(347,`br`),lg()()(),Ml(348,`td`,21)(349,`code`,22),mN(350,`boolean`),lg()(),Ml(351,`td`,23)(352,`p`)(353,`code`),mN(354,`false`),lg()()(),Ml(355,`td`,24)(356,`em`)(357,`strong`),mN(358,`(opcional)`),lg()(),Ml(359,`p`),mN(360,`Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.`),lg()()(),Ml(361,`tr`,17)(362,`td`,18)(363,`div`,27)(364,`span`,28),mN(365,` (p-change-fixed-columns)`),ql(366,`br`),lg()()(),Ml(367,`td`,21)(368,`code`,29),mN(369,`EventEmitter`),lg()(),Ml(370,`td`,23),mN(371,`-`),lg(),Ml(372,`td`,24)(373,`em`)(374,`strong`),mN(375,`(opcional)`),lg()(),Ml(376,`p`),mN(377,`Evento disparado ao alterar o estado de fixação de uma coluna no gerenciador de colunas.`),lg(),Ml(378,`p`),mN(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),lg(),Ml(380,`blockquote`)(381,`p`),mN(382,`Incompatível com `),Ml(383,`code`),mN(384,`p-hide-action-fixed-columns`),lg(),mN(385,`. Quando esta propriedade estiver ativa, o evento não será disparado.`),lg()()()(),Ml(386,`tr`,17)(387,`td`,18)(388,`div`,27)(389,`span`,28),mN(390,` (p-change-visible-columns)`),ql(391,`br`),lg()()(),Ml(392,`td`,21)(393,`code`,29),mN(394,`EventEmitter`),lg()(),Ml(395,`td`,23),mN(396,`-`),lg(),Ml(397,`td`,24)(398,`em`)(399,`strong`),mN(400,`(opcional)`),lg()(),Ml(401,`p`),mN(402,`Evento disparado ao fechar o page slide do gerenciador de colunas após alterar as colunas visíveis.`),lg(),Ml(403,`p`),mN(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg()()(),Ml(405,`tr`,17)(406,`td`,18)(407,`div`,27)(408,`span`,28),mN(409,` (p-collapsed)`),ql(410,`br`),lg()()(),Ml(411,`td`,21)(412,`code`,29),mN(413,`EventEmitter`),lg()(),Ml(414,`td`,23),mN(415,`-`),lg(),Ml(416,`td`,24)(417,`em`)(418,`strong`),mN(419,`(opcional)`),lg()(),Ml(420,`p`),mN(421,`Evento executado ao colapsar uma linha do `),Ml(422,`code`),mN(423,`po-table`),lg(),mN(424,`.`),lg(),Ml(425,`blockquote`)(426,`p`),mN(427,`Como parâmetro o componente envia o item colapsado.`),lg()()()(),Ml(428,`tr`,17)(429,`td`,18)(430,`div`,27)(431,`span`,28),mN(432,` (p-restore-column-manager)`),ql(433,`br`),lg()()(),Ml(434,`td`,21)(435,`code`,29),mN(436,`EventEmitter`),lg()(),Ml(437,`td`,23),mN(438,`-`),lg(),Ml(439,`td`,24)(440,`em`)(441,`strong`),mN(442,`(opcional)`),lg()(),Ml(443,`p`),mN(444,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),lg(),Ml(445,`p`),mN(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg()()(),Ml(447,`tr`,17)(448,`td`,18)(449,`div`,19)(450,`span`,20),mN(451,` p-columns`),ql(452,`br`),lg()()(),Ml(453,`td`,21)(454,`code`,30),mN(455,`PoTableColumn[]`),lg()(),Ml(456,`td`,23),mN(457,`-`),lg(),Ml(458,`td`,24)(459,`em`)(460,`strong`),mN(461,`(opcional)`),lg()(),Ml(462,`p`),mN(463,`Lista das colunas da tabela, deve receber um `),Ml(464,`em`),mN(465,`array`),lg(),mN(466,` de objetos que implementam a interface `),Ml(467,`code`),mN(468,`PoTableColumn`),lg(),mN(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),lg(),Ml(470,`blockquote`)(471,`p`),mN(472,`Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.`),lg()()()(),Ml(473,`tr`,17)(474,`td`,18)(475,`div`,19)(476,`span`,20),mN(477,` p-components-size`),ql(478,`br`),lg()()(),Ml(479,`td`,21)(480,`code`,31),mN(481,`string`),lg()(),Ml(482,`td`,23)(483,`p`)(484,`code`),mN(485,`medium`),lg()()(),Ml(486,`td`,24)(487,`em`)(488,`strong`),mN(489,`(opcional)`),lg()(),Ml(490,`p`),mN(491,`Define o tamanho dos componentes de formulário no table:`),lg(),Ml(492,`ul`)(493,`li`)(494,`code`),mN(495,`small`),lg(),mN(496,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(497,`li`)(498,`code`),mN(499,`medium`),lg(),mN(500,`: aplica a medida medium de cada componente.`),lg()(),Ml(501,`blockquote`)(502,`p`),mN(503,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(504,`code`),mN(505,`medium`),lg(),mN(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(507,`a`,32),mN(508,`po-theme`),lg(),mN(509,`.`),lg()()()(),Ml(510,`tr`,17)(511,`td`,18)(512,`div`,19)(513,`span`,20),mN(514,` p-container`),ql(515,`br`),lg()()(),Ml(516,`td`,21)(517,`code`,31),mN(518,`string`),lg()(),Ml(519,`td`,23)(520,`p`)(521,`code`),mN(522,`border`),lg()()(),Ml(523,`td`,24)(524,`em`)(525,`strong`),mN(526,`(opcional)`),lg()(),Ml(527,`p`),mN(528,`Adiciona um contorno arredondado ao `),Ml(529,`code`),mN(530,`po-table`),lg(),mN(531,`, as opções são:`),lg(),Ml(532,`ul`)(533,`li`)(534,`code`),mN(535,`border`),lg(),mN(536,`: com bordas/linhas.`),lg(),Ml(537,`li`)(538,`code`),mN(539,`shadow`),lg(),mN(540,`: com sombras.`),lg()()()(),Ml(541,`tr`,17)(542,`td`,18)(543,`div`,19)(544,`span`,20),mN(545,` p-draggable`),ql(546,`br`),lg()()(),Ml(547,`td`,21)(548,`code`,22),mN(549,`boolean`),lg()(),Ml(550,`td`,23)(551,`p`)(552,`code`),mN(553,`false`),lg()()(),Ml(554,`td`,24)(555,`em`)(556,`strong`),mN(557,`(opcional)`),lg()(),Ml(558,`p`),mN(559,`Habilita o modo drag and drop para as colunas da tabela.`),lg()()(),Ml(560,`tr`,17)(561,`td`,18)(562,`div`,27)(563,`span`,28),mN(564,` (p-delete-items)`),ql(565,`br`),lg()()(),Ml(566,`td`,21)(567,`code`,29),mN(568,`EventEmitter`),lg()(),Ml(569,`td`,23),mN(570,`-`),lg(),Ml(571,`td`,24)(572,`em`)(573,`strong`),mN(574,`(opcional)`),lg()(),Ml(575,`p`),mN(576,`Evento executado após o método de exclusão ser finalizado.`),lg(),Ml(577,`pre`)(578,`code`),mN(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),lg()(),Ml(580,`blockquote`)(581,`p`),mN(582,`Como parâmetro o componente envia a lista atualizada, sem os itens excluídos.`),lg()()()(),Ml(583,`tr`,17)(584,`td`,18)(585,`div`,27)(586,`span`,28),mN(587,` (p-expanded)`),ql(588,`br`),lg()()(),Ml(589,`td`,21)(590,`code`,29),mN(591,`EventEmitter`),lg()(),Ml(592,`td`,23),mN(593,`-`),lg(),Ml(594,`td`,24)(595,`em`)(596,`strong`),mN(597,`(opcional)`),lg()(),Ml(598,`p`),mN(599,`Evento executado ao expandir uma linha do `),Ml(600,`code`),mN(601,`po-table`),lg(),mN(602,`.`),lg(),Ml(603,`blockquote`)(604,`p`),mN(605,`Como parâmetro o componente envia o item expandido.`),lg()()()(),Ml(606,`tr`,17)(607,`td`,18)(608,`div`,19)(609,`span`,20),mN(610,` p-filter-type`),ql(611,`br`),lg()()(),Ml(612,`td`,21)(613,`code`,33),mN(614,`PoSearchFilterMode`),lg()(),Ml(615,`td`,23)(616,`p`)(617,`code`),mN(618,`startsWith`),lg()()(),Ml(619,`td`,24)(620,`em`)(621,`strong`),mN(622,`(opcional)`),lg()(),Ml(623,`p`),mN(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),lg(),Ml(625,`blockquote`)(626,`p`),mN(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),lg()()()(),Ml(628,`tr`,17)(629,`td`,18)(630,`div`,19)(631,`span`,20),mN(632,` p-filtered-columns`),ql(633,`br`),lg()()(),Ml(634,`td`,21)(635,`code`,34),mN(636,`Array<string>`),lg()(),Ml(637,`td`,23),mN(638,`-`),lg(),Ml(639,`td`,24)(640,`em`)(641,`strong`),mN(642,`(opcional)`),lg()(),Ml(643,`p`),mN(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),lg()()(),Ml(645,`tr`,17)(646,`td`,18)(647,`div`,19)(648,`span`,20),mN(649,` p-height`),ql(650,`br`),lg()()(),Ml(651,`td`,21)(652,`code`,35),mN(653,`number`),lg()(),Ml(654,`td`,23),mN(655,`-`),lg(),Ml(656,`td`,24)(657,`em`)(658,`strong`),mN(659,`(opcional)`),lg()(),Ml(660,`p`),mN(661,`Define a altura da tabela em `),Ml(662,`em`),mN(663,`pixels`),lg(),mN(664,` e fixa o cabeçalho.`),lg(),Ml(665,`p`),mN(666,`Ao utilizar essa propriedade será inserido o `),Ml(667,`code`),mN(668,`virtual-scroll`),lg(),mN(669,` na tabela melhorando a performance.`),lg()()(),Ml(670,`tr`,17)(671,`td`,18)(672,`div`,19)(673,`span`,20),mN(674,` p-hide-action-fixed-columns`),ql(675,`br`),lg()()(),Ml(676,`td`,21)(677,`code`,22),mN(678,`boolean`),lg()(),Ml(679,`td`,23)(680,`p`)(681,`code`),mN(682,`false`),lg()()(),Ml(683,`td`,24)(684,`em`)(685,`strong`),mN(686,`(opcional)`),lg()(),Ml(687,`p`),mN(688,`Permite que as ações para fixar uma coluna da tabela sejam escondidas.`),lg()()(),Ml(689,`tr`,17)(690,`td`,18)(691,`div`,19)(692,`span`,20),mN(693,` p-hide-batch-actions`),ql(694,`br`),lg()()(),Ml(695,`td`,21)(696,`code`,22),mN(697,`boolean`),lg()(),Ml(698,`td`,23)(699,`p`)(700,`code`),mN(701,`true`),lg()()(),Ml(702,`td`,24)(703,`em`)(704,`strong`),mN(705,`(opcional)`),lg()(),Ml(706,`p`),mN(707,`Permite que as ações em lote, responsável por excluir e exibir a quantidade de itens, sejam escondidas.`),lg()()(),Ml(708,`tr`,17)(709,`td`,18)(710,`div`,19)(711,`span`,20),mN(712,` p-hide-columns-manager`),ql(713,`br`),lg()()(),Ml(714,`td`,21)(715,`code`,22),mN(716,`boolean`),lg()(),Ml(717,`td`,23)(718,`p`)(719,`code`),mN(720,`false`),lg()()(),Ml(721,`td`,24)(722,`em`)(723,`strong`),mN(724,`(opcional)`),lg()(),Ml(725,`p`),mN(726,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),lg()()(),Ml(727,`tr`,17)(728,`td`,18)(729,`div`,19)(730,`span`,20),mN(731,` p-hide-detail`),ql(732,`br`),lg()()(),Ml(733,`td`,21)(734,`code`,22),mN(735,`boolean`),lg()(),Ml(736,`td`,23)(737,`p`)(738,`code`),mN(739,`false`),lg()()(),Ml(740,`td`,24)(741,`em`)(742,`strong`),mN(743,`(opcional)`),lg()(),Ml(744,`p`),mN(745,`Habilita a visualização da lista de detalhes de cada linha da coluna.`),lg()()(),Ml(746,`tr`,17)(747,`td`,18)(748,`div`,19)(749,`span`,20),mN(750,` p-hide-select-all`),ql(751,`br`),lg()()(),Ml(752,`td`,21)(753,`code`,22),mN(754,`boolean`),lg()(),Ml(755,`td`,23)(756,`p`)(757,`code`),mN(758,`false`),lg()()(),Ml(759,`td`,24)(760,`p`),mN(761,`Esconde o `),Ml(762,`em`),mN(763,`checkbox`),lg(),mN(764,` para seleção de todas as linhas.`),lg(),Ml(765,`blockquote`)(766,`p`),mN(767,`Sempre receberá `),Ml(768,`em`),mN(769,`true`),lg(),mN(770,` caso a seleção de apenas uma linha esteja ativa.`),lg()()()(),Ml(771,`tr`,17)(772,`td`,18)(773,`div`,19)(774,`span`,20),mN(775,` p-hide-table-search`),ql(776,`br`),lg()()(),Ml(777,`td`,21)(778,`code`,22),mN(779,`boolean`),lg()(),Ml(780,`td`,23)(781,`p`)(782,`code`),mN(783,`true`),lg()()(),Ml(784,`td`,24)(785,`em`)(786,`strong`),mN(787,`(opcional)`),lg()(),Ml(788,`p`),mN(789,`Permite que o campo de pesquisa seja escondido.`),lg()()(),Ml(790,`tr`,17)(791,`td`,18)(792,`div`,19)(793,`span`,20),mN(794,` p-infinite-scroll`),ql(795,`br`),lg()()(),Ml(796,`td`,21)(797,`code`,22),mN(798,`boolean`),lg()(),Ml(799,`td`,23)(800,`p`)(801,`code`),mN(802,`false`),lg()()(),Ml(803,`td`,24)(804,`em`)(805,`strong`),mN(806,`(opcional)`),lg()(),Ml(807,`p`),mN(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Ml(809,`code`),mN(810,`p-show-more`),lg(),mN(811,`.`),lg(),Ml(812,`p`)(813,`strong`),mN(814,`Regras de utilização:`),lg()(),Ml(815,`ul`)(816,`li`),mN(817,`O scroll infinito só funciona para tabelas que utilizam a propriedade `),Ml(818,`code`),mN(819,`p-height`),lg(),mN(820,` e que possuem o scroll já na carga inicial dos dados.`),lg()()()(),Ml(821,`tr`,17)(822,`td`,18)(823,`div`,19)(824,`span`,20),mN(825,` p-infinite-scroll-distance`),ql(826,`br`),lg()()(),Ml(827,`td`,21)(828,`code`,35),mN(829,`number`),lg()(),Ml(830,`td`,23),mN(831,`-`),lg(),Ml(832,`td`,24)(833,`em`)(834,`strong`),mN(835,`(opcional)`),lg()(),Ml(836,`p`),mN(837,`Define o percentual necessário para disparar o evento `),Ml(838,`code`),mN(839,`p-show-more`),lg(),mN(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),lg(),Ml(841,`p`)(842,`strong`),mN(843,`Exemplos:`),lg()(),Ml(844,`ul`)(845,`li`),mN(846,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o `),Ml(847,`code`),mN(848,`p-show-more`),lg(),mN(849,` será disparado.`),lg()()()(),Ml(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),mN(854,` p-items`),ql(855,`br`),lg()()(),Ml(856,`td`,21)(857,`code`,36),mN(858,`any[]`),lg()(),Ml(859,`td`,23),mN(860,`-`),lg(),Ml(861,`td`,24)(862,`p`),mN(863,`Lista de itens da tabela.`),lg(),Ml(864,`blockquote`)(865,`p`),mN(866,`Se falso, será inicializado como um `),Ml(867,`em`),mN(868,`array`),lg(),mN(869,` vazio.`),lg()()()(),Ml(870,`tr`,17)(871,`td`,18)(872,`div`,19)(873,`span`,20),mN(874,` p-literals`),ql(875,`br`),lg()()(),Ml(876,`td`,21)(877,`code`,37),mN(878,`PoTableLiterals`),lg()(),Ml(879,`td`,23),mN(880,`-`),lg(),Ml(881,`td`,24)(882,`em`)(883,`strong`),mN(884,`(opcional)`),lg()(),Ml(885,`p`),mN(886,`Objeto com as literais usadas no `),Ml(887,`code`),mN(888,`po-table`),lg(),mN(889,`.`),lg(),Ml(890,`p`),mN(891,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(892,`pre`)(893,`code`),mN(894,`const customLiterals: PoTableLiterals = {
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
`),lg()(),Ml(895,`p`),mN(896,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(897,`pre`)(898,`code`),mN(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),lg()(),Ml(900,`p`),mN(901,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(902,`pre`)(903,`code`),mN(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),lg()(),Ml(905,`blockquote`)(906,`p`),mN(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(908,`a`,38)(909,`code`),mN(910,`PoI18nService`),lg()(),mN(911,` ou do browser.`),lg()()()(),Ml(912,`tr`,17)(913,`td`,18)(914,`div`,19)(915,`span`,20),mN(916,` p-loading`),ql(917,`br`),lg()()(),Ml(918,`td`,21)(919,`code`,22),mN(920,`boolean`),lg()(),Ml(921,`td`,23)(922,`p`)(923,`code`),mN(924,`false`),lg()()(),Ml(925,`td`,24)(926,`em`)(927,`strong`),mN(928,`(opcional)`),lg()(),Ml(929,`p`),mN(930,`Bloqueia a interação do usuário com os dados da `),Ml(931,`em`),mN(932,`table`),lg(),mN(933,`.`),lg()()(),Ml(934,`tr`,17)(935,`td`,18)(936,`div`,19)(937,`span`,20),mN(938,` p-loading-show-more`),ql(939,`br`),lg()()(),Ml(940,`td`,21)(941,`code`,22),mN(942,`boolean`),lg()(),Ml(943,`td`,23)(944,`p`)(945,`code`),mN(946,`false`),lg()()(),Ml(947,`td`,24)(948,`em`)(949,`strong`),mN(950,`(opcional)`),lg()(),Ml(951,`p`),mN(952,`Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".`),lg()()(),Ml(953,`tr`,17)(954,`td`,18)(955,`div`,19)(956,`span`,20),mN(957,` p-max-columns`),ql(958,`br`),lg()()(),Ml(959,`td`,21)(960,`code`,35),mN(961,`number`),lg()(),Ml(962,`td`,23),mN(963,`-`),lg(),Ml(964,`td`,24)(965,`em`)(966,`strong`),mN(967,`(opcional)`),lg()(),Ml(968,`p`),mN(969,`Define uma quantidade máxima de colunas que serão exibidas na tabela.`),lg(),Ml(970,`p`),mN(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),lg()()(),Ml(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),mN(976,` p-param-delete-api`),ql(977,`br`),lg()()(),Ml(978,`td`,21)(979,`code`,31),mN(980,`string`),lg()(),Ml(981,`td`,23)(982,`p`)(983,`code`),mN(984,`id`),lg()()(),Ml(985,`td`,24)(986,`em`)(987,`strong`),mN(988,`(opcional)`),lg()(),Ml(989,`p`),mN(990,`Adiciona o parâmetro a ser enviado para a requisição de DELETE.`),lg(),Ml(991,`p`),mN(992,`É necessário a utilização da propriedade `),Ml(993,`code`),mN(994,`p-service-delete`),lg(),mN(995,` em conjunto.`),lg()()(),Ml(996,`tr`,17)(997,`td`,18)(998,`div`,27)(999,`span`,28),mN(1e3,` (p-search-ai-error)`),ql(1001,`br`),lg()()(),Ml(1002,`td`,21)(1003,`code`,29),mN(1004,`EventEmitter`),lg()(),Ml(1005,`td`,23),mN(1006,`-`),lg(),Ml(1007,`td`,24)(1008,`em`)(1009,`strong`),mN(1010,`(opcional)`),lg()(),Ml(1011,`p`),mN(1012,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),Ml(1013,`code`),mN(1014,`p-search-ai-field`),lg(),mN(1015,`.`),lg(),Ml(1016,`p`),mN(1017,`O parâmetro enviado é um objeto `),Ml(1018,`code`),mN(1019,`PoSearchAiError`),lg(),mN(1020,` contendo:`),lg(),Ml(1021,`ul`)(1022,`li`)(1023,`code`),mN(1024,`statusCode`),lg(),mN(1025,`: código HTTP do erro (ex: `),Ml(1026,`code`),mN(1027,`408`),lg(),mN(1028,` para timeout, `),Ml(1029,`code`),mN(1030,`500`),lg(),mN(1031,` para erro interno).`),lg(),Ml(1032,`li`)(1033,`code`),mN(1034,`message`),lg(),mN(1035,`: mensagem descritiva do erro.`),lg()()()(),Ml(1036,`tr`,17)(1037,`td`,18)(1038,`div`,19)(1039,`span`,20),mN(1040,` p-search-ai-field`),ql(1041,`br`),lg()()(),Ml(1042,`td`,21)(1043,`code`,39),mN(1044,`PoTableSearchAiField`),lg()(),Ml(1045,`td`,23),mN(1046,`-`),lg(),Ml(1047,`td`,24)(1048,`em`)(1049,`strong`),mN(1050,`(opcional)`),lg()(),Ml(1051,`p`),mN(1052,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),Ml(1053,`code`),mN(1054,`po-search`),lg(),mN(1055,`) pelo componente `),Ml(1056,`code`),mN(1057,`po-search-ai`),lg(),mN(1058,` na barra de ações.`),lg(),Ml(1059,`p`),mN(1060,`Recebe um objeto do tipo `),Ml(1061,`code`),mN(1062,`PoTableSearchAiField`),lg(),mN(1063,` com as configurações necessárias:`),lg(),Ml(1064,`ul`)(1065,`li`)(1066,`code`),mN(1067,`url`),lg(),Ml(1068,`em`),mN(1069,`(obrigatório)`),lg(),mN(1070,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),Ml(1071,`a`,40)(1072,`code`),mN(1073,`po-sample-api`),lg()(),mN(1074,`.`),lg(),Ml(1075,`li`)(1076,`code`),mN(1077,`columns`),lg(),mN(1078,`: lista de colunas enviadas à IA; quando omitida, são derivadas de `),Ml(1079,`code`),mN(1080,`p-columns`),lg(),mN(1081,`.`),lg(),Ml(1082,`li`)(1083,`code`),mN(1084,`minConfidence`),lg(),mN(1085,`: confiança mínima para aplicação automática do filtro (padrão `),Ml(1086,`code`),mN(1087,`0.5`),lg(),mN(1088,`).`),lg(),Ml(1089,`li`)(1090,`code`),mN(1091,`timeout`),lg(),mN(1092,`: tempo máximo de espera pela resposta da IA em ms (padrão `),Ml(1093,`code`),mN(1094,`10000`),lg(),mN(1095,`).`),lg(),Ml(1096,`li`)(1097,`code`),mN(1098,`placeholder`),lg(),mN(1099,`: texto exibido como placeholder no campo.`),lg(),Ml(1100,`li`)(1101,`code`),mN(1102,`literals`),lg(),mN(1103,`: literais customizadas do `),Ml(1104,`code`),mN(1105,`po-search-ai`),lg(),mN(1106,`.`),lg(),Ml(1107,`li`)(1108,`code`),mN(1109,`apply`),lg(),mN(1110,`: estratégia de aplicação do filtro — `),Ml(1111,`code`),mN(1112,`'auto'`),lg(),mN(1113,` (padrão), `),Ml(1114,`code`),mN(1115,`'parser'`),lg(),mN(1116,`, `),Ml(1117,`code`),mN(1118,`'server'`),lg(),mN(1119,`, `),Ml(1120,`code`),mN(1121,`'none'`),lg(),mN(1122,`
ou uma fun\xE7\xE3o `),Ml(1123,`code`),mN(1124,`(result: PoSearchAiResult) => void`),lg(),mN(1125,`.`),lg()(),Ml(1126,`p`),mN(1127,`Quando esta propriedade está definida, os eventos `),Ml(1128,`code`),mN(1129,`p-search-ai-result`),lg(),mN(1130,`, `),Ml(1131,`code`),mN(1132,`p-search-ai-low-confidence`),lg(),mN(1133,`
e `),Ml(1134,`code`),mN(1135,`p-search-ai-error`),lg(),mN(1136,` ficam disponíveis para tratamento customizado.`),lg()()(),Ml(1137,`tr`,17)(1138,`td`,18)(1139,`div`,27)(1140,`span`,28),mN(1141,` (p-search-ai-low-confidence)`),ql(1142,`br`),lg()()(),Ml(1143,`td`,21)(1144,`code`,29),mN(1145,`EventEmitter`),lg()(),Ml(1146,`td`,23),mN(1147,`-`),lg(),Ml(1148,`td`,24)(1149,`em`)(1150,`strong`),mN(1151,`(opcional)`),lg()(),Ml(1152,`p`),mN(1153,`Evento emitido quando o `),Ml(1154,`code`),mN(1155,`po-search-ai`),lg(),mN(1156,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),Ml(1157,`code`),mN(1158,`minConfidence`),lg(),mN(1159,` configurado em `),Ml(1160,`code`),mN(1161,`p-search-ai-field`),lg(),mN(1162,`. Nesse caso, o filtro `),Ml(1163,`strong`),mN(1164,`não`),lg(),mN(1165,` \xE9 aplicado
automaticamente.`),lg(),Ml(1166,`p`),mN(1167,`O parâmetro enviado é um objeto `),Ml(1168,`code`),mN(1169,`PoSearchAiResult`),lg(),mN(1170,` com os mesmos campos de `),Ml(1171,`code`),mN(1172,`p-search-ai-result`),lg(),mN(1173,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),lg()()(),Ml(1174,`tr`,17)(1175,`td`,18)(1176,`div`,27)(1177,`span`,28),mN(1178,` (p-search-ai-result)`),ql(1179,`br`),lg()()(),Ml(1180,`td`,21)(1181,`code`,29),mN(1182,`EventEmitter`),lg()(),Ml(1183,`td`,23),mN(1184,`-`),lg(),Ml(1185,`td`,24)(1186,`em`)(1187,`strong`),mN(1188,`(opcional)`),lg()(),Ml(1189,`p`),mN(1190,`Evento emitido quando o `),Ml(1191,`code`),mN(1192,`po-search-ai`),lg(),mN(1193,` retorna um resultado com confian\xE7a igual ou superior
ao `),Ml(1194,`code`),mN(1195,`minConfidence`),lg(),mN(1196,` configurado em `),Ml(1197,`code`),mN(1198,`p-search-ai-field`),lg(),mN(1199,`.`),lg(),Ml(1200,`p`),mN(1201,`O parâmetro enviado é um objeto `),Ml(1202,`code`),mN(1203,`PoSearchAiResult`),lg(),mN(1204,` contendo:`),lg(),Ml(1205,`ul`)(1206,`li`)(1207,`code`),mN(1208,`filter`),lg(),mN(1209,`: string de filtro OData v4 gerada pela IA (ex: `),Ml(1210,`code`),mN(1211,`"city eq 'SP' and salary gt 5000"`),lg(),mN(1212,`).`),lg(),Ml(1213,`li`)(1214,`code`),mN(1215,`description`),lg(),mN(1216,`: descrição em linguagem natural do filtro aplicado.`),lg(),Ml(1217,`li`)(1218,`code`),mN(1219,`confidence`),lg(),mN(1220,`: nível de confiança da resposta (0.0 a 1.0).`),lg()(),Ml(1221,`blockquote`)(1222,`p`),mN(1223,`Quando `),Ml(1224,`code`),mN(1225,`apply`),lg(),mN(1226,` for diferente de `),Ml(1227,`code`),mN(1228,`'none'`),lg(),mN(1229,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),lg()()()(),Ml(1230,`tr`,17)(1231,`td`,18)(1232,`div`,19)(1233,`span`,20),mN(1234,` p-selectable`),ql(1235,`br`),lg()()(),Ml(1236,`td`,21)(1237,`code`,22),mN(1238,`boolean`),lg()(),Ml(1239,`td`,23)(1240,`p`)(1241,`code`),mN(1242,`false`),lg()()(),Ml(1243,`td`,24)(1244,`em`)(1245,`strong`),mN(1246,`(opcional)`),lg()(),Ml(1247,`p`),mN(1248,`Permite a seleção de linhas na tabela e, caso a propriedade `),Ml(1249,`code`),mN(1250,`p-single-select`),lg(),mN(1251,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),lg(),Ml(1252,`p`)(1253,`strong`),mN(1254,`Importante:`),lg()(),Ml(1255,`ul`)(1256,`li`),mN(1257,`As linhas de detalhe definidas em `),Ml(1258,`code`),mN(1259,`PoTableDetail`),lg(),mN(1260,` possuem comportamento independente da linha mestre;`),lg(),Ml(1261,`li`),mN(1262,`Cada linha possui por padrão a propriedade dinâmica `),Ml(1263,`code`),mN(1264,`$selected`),lg(),mN(1265,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Ml(1266,`code`),mN(1267,`item.$selected`),lg(),mN(1268,` ou `),Ml(1269,`code`),mN(1270,`item['$selected']`),lg(),mN(1271,`.`),lg()()()(),Ml(1272,`tr`,17)(1273,`td`,18)(1274,`div`,19)(1275,`span`,20),mN(1276,` p-selectable-entire-line`),ql(1277,`br`),lg()()(),Ml(1278,`td`,21)(1279,`code`,22),mN(1280,`boolean`),lg()(),Ml(1281,`td`,23)(1282,`p`)(1283,`code`),mN(1284,`true`),lg()()(),Ml(1285,`td`,24)(1286,`p`),mN(1287,`Permite selecionar um item da tabela clicando na linha.`),lg(),Ml(1288,`blockquote`)(1289,`p`),mN(1290,`Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `),Ml(1291,`code`),mN(1292,`false`),lg(),mN(1293,`.`),lg()()()(),Ml(1294,`tr`,17)(1295,`td`,18)(1296,`div`,27)(1297,`span`,28),mN(1298,` (p-selected)`),ql(1299,`br`),lg()()(),Ml(1300,`td`,21)(1301,`code`,29),mN(1302,`EventEmitter`),lg()(),Ml(1303,`td`,23),mN(1304,`-`),lg(),Ml(1305,`td`,24)(1306,`em`)(1307,`strong`),mN(1308,`(opcional)`),lg()(),Ml(1309,`p`),mN(1310,`Evento executado ao selecionar uma linha do `),Ml(1311,`code`),mN(1312,`po-table`),lg(),mN(1313,`.`),lg()()(),Ml(1314,`tr`,17)(1315,`td`,18)(1316,`div`,19)(1317,`span`,20),mN(1318,` p-service-api`),ql(1319,`br`),lg()()(),Ml(1320,`td`,21)(1321,`code`,31),mN(1322,`string`),lg()(),Ml(1323,`td`,23),mN(1324,`-`),lg(),Ml(1325,`td`,24)(1326,`em`)(1327,`strong`),mN(1328,`(opcional)`),lg()(),Ml(1329,`p`),mN(1330,`URL da API responsável por retornar os registros.`),lg(),Ml(1331,`p`),mN(1332,`Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `),Ml(1333,`code`),mN(1334,`page`),lg(),mN(1335,` e `),Ml(1336,`code`),mN(1337,`pageSize`),lg(),mN(1338,`, conforme abaixo:`),lg(),Ml(1339,`pre`)(1340,`code`),mN(1341,`url + ?page=1&pageSize=10
`),lg()(),Ml(1342,`p`),mN(1343,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Ml(1344,`code`),mN(1345,`order`),lg(),mN(1346,`, por exemplo:`),lg(),Ml(1347,`ul`)(1348,`li`)(1349,`p`),mN(1350,`Coluna decrescente:`),lg(),Ml(1351,`pre`)(1352,`code`),mN(1353,`url + ?page=1&pageSize=10&order=-name
`),lg()()(),Ml(1354,`li`)(1355,`p`),mN(1356,`Coluna ascendente:`),lg(),Ml(1357,`pre`)(1358,`code`),mN(1359,`url + ?page=1&pageSize=10&order=name
`),lg()()()(),Ml(1360,`blockquote`)(1361,`p`),mN(1362,`Esta URL deve retornar e receber os dados no padrão de `),Ml(1363,`a`,41),mN(1364,`API do PO UI`),lg(),mN(1365,`.`),lg()()()(),Ml(1366,`tr`,17)(1367,`td`,18)(1368,`div`,19)(1369,`span`,20),mN(1370,` p-service-delete`),ql(1371,`br`),lg()()(),Ml(1372,`td`,21)(1373,`code`,31),mN(1374,`string`),lg()(),Ml(1375,`td`,23),mN(1376,`-`),lg(),Ml(1377,`td`,24)(1378,`em`)(1379,`strong`),mN(1380,`(opcional)`),lg()(),Ml(1381,`p`),mN(1382,`URL da API responsável por excluir os registros.`),lg(),Ml(1383,`p`),mN(1384,`Ao selecionar o botão de excluir itens, essa url será executada utilizando o parâmetro enviado na propriedade `),Ml(1385,`code`),mN(1386,`p-param-delete-api`),lg(),mN(1387,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Ml(1388,`code`),mN(1389,`id`),lg(),mN(1390,`.`),lg(),Ml(1391,`blockquote`)(1392,`p`),mN(1393,`Esta URL deve retornar e receber os dados no padrão de `),Ml(1394,`a`,41),mN(1395,`API do PO UI`),lg(),mN(1396,`.`),lg()()()(),Ml(1397,`tr`,17)(1398,`td`,18)(1399,`div`,27)(1400,`span`,28),mN(1401,` (p-show-more)`),ql(1402,`br`),lg()()(),Ml(1403,`td`,21)(1404,`code`,29),mN(1405,`EventEmitter`),lg()(),Ml(1406,`td`,23),mN(1407,`-`),lg(),Ml(1408,`td`,24)(1409,`em`)(1410,`strong`),mN(1411,`(opcional)`),lg()(),Ml(1412,`p`),mN(1413,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),lg(),Ml(1414,`p`),mN(1415,`Recebe um objeto `),Ml(1416,`code`),mN(1417,`{ column, type }`),lg(),mN(1418,` onde:`),lg(),Ml(1419,`ul`)(1420,`li`),mN(1421,`column (`),Ml(1422,`code`),mN(1423,`PoTableColumn`),lg(),mN(1424,`): objeto da coluna que está ordenada.`),lg(),Ml(1425,`li`),mN(1426,`type (`),Ml(1427,`code`),mN(1428,`PoTableColumnSortType`),lg(),mN(1429,`): tipo da ordenação.`),lg()()()(),Ml(1430,`tr`,17)(1431,`td`,18)(1432,`div`,19)(1433,`span`,20),mN(1434,` p-show-more-disabled`),ql(1435,`br`),lg()()(),Ml(1436,`td`,21)(1437,`code`,22),mN(1438,`boolean`),lg()(),Ml(1439,`td`,23)(1440,`p`)(1441,`code`),mN(1442,`false`),lg()()(),Ml(1443,`td`,24)(1444,`p`),mN(1445,`Se verdadeiro, torna habilitado o botão "Carregar mais resultados".`),lg()()(),Ml(1446,`tr`,17)(1447,`td`,18)(1448,`div`,19)(1449,`span`,20),mN(1450,` p-single-select`),ql(1451,`br`),lg()()(),Ml(1452,`td`,21)(1453,`code`,22),mN(1454,`boolean`),lg()(),Ml(1455,`td`,23),mN(1456,`-`),lg(),Ml(1457,`td`,24)(1458,`p`),mN(1459,`Define que somente uma linha da tabela pode ser selecionada.`),lg(),Ml(1460,`blockquote`)(1461,`p`),mN(1462,`Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.`),lg()()()(),Ml(1463,`tr`,17)(1464,`td`,18)(1465,`div`,19)(1466,`span`,20),mN(1467,` p-sort`),ql(1468,`br`),lg()()(),Ml(1469,`td`,21)(1470,`code`,22),mN(1471,`boolean`),lg()(),Ml(1472,`td`,23)(1473,`p`)(1474,`code`),mN(1475,`false`),lg()()(),Ml(1476,`td`,24)(1477,`em`)(1478,`strong`),mN(1479,`(opcional)`),lg()(),Ml(1480,`p`),mN(1481,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),lg()()(),Ml(1482,`tr`,17)(1483,`td`,18)(1484,`div`,27)(1485,`span`,28),mN(1486,` (p-sort-by)`),ql(1487,`br`),lg()()(),Ml(1488,`td`,21)(1489,`code`,29),mN(1490,`EventEmitter`),lg()(),Ml(1491,`td`,23),mN(1492,`-`),lg(),Ml(1493,`td`,24)(1494,`em`)(1495,`strong`),mN(1496,`(opcional)`),lg()(),Ml(1497,`p`),mN(1498,`Evento executado ao ordenar colunas da tabela.`),lg(),Ml(1499,`p`),mN(1500,`Recebe um objeto `),Ml(1501,`code`),mN(1502,`{ column, type }`),lg(),mN(1503,` onde:`),lg(),Ml(1504,`ul`)(1505,`li`),mN(1506,`column (`),Ml(1507,`code`),mN(1508,`PoTableColumn`),lg(),mN(1509,`): objeto da coluna que foi clicada/ordenada.`),lg(),Ml(1510,`li`),mN(1511,`type (`),Ml(1512,`code`),mN(1513,`PoTableColumnSortType`),lg(),mN(1514,`): tipo da ordenação.`),lg()()()(),Ml(1515,`tr`,17)(1516,`td`,18)(1517,`div`,19)(1518,`span`,20),mN(1519,` p-spacing`),ql(1520,`br`),lg()()(),Ml(1521,`td`,21)(1522,`code`,31),mN(1523,`string`),lg()(),Ml(1524,`td`,23)(1525,`p`)(1526,`code`),mN(1527,`medium`),lg()()(),Ml(1528,`td`,24)(1529,`em`)(1530,`strong`),mN(1531,`(opcional)`),lg()(),Ml(1532,`p`),mN(1533,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Ml(1534,`strong`),mN(1535,`PoTableColumnSpacing`),lg(),mN(1536,`.`),lg(),Ml(1537,`blockquote`)(1538,`p`),mN(1539,`Em nível de acessibilidade `),Ml(1540,`strong`),mN(1541,`AA`),lg(),mN(1542,`, caso o valor de `),Ml(1543,`code`),mN(1544,`p-spacing`),lg(),mN(1545,` não seja definido, o valor padrão será `),Ml(1546,`code`),mN(1547,`extraSmall`),lg(),mN(1548,`
nos seguintes cen\xE1rios:`),lg(),Ml(1549,`ul`)(1550,`li`),mN(1551,`Quando o valor de `),Ml(1552,`code`),mN(1553,`p-components-size`),lg(),mN(1554,` for `),Ml(1555,`code`),mN(1556,`small`),lg(),mN(1557,`;`),lg(),Ml(1558,`li`),mN(1559,`Quando o valor padrão dos componentes for configurado como `),Ml(1560,`code`),mN(1561,`small`),lg(),mN(1562,` no
`),Ml(1563,`a`,32),mN(1564,`serviço de tema`),lg(),mN(1565,`.`),lg()()()()(),Ml(1566,`tr`,17)(1567,`td`,18)(1568,`div`,19)(1569,`span`,20),mN(1570,` p-striped`),ql(1571,`br`),lg()()(),Ml(1572,`td`,21)(1573,`code`,22),mN(1574,`boolean`),lg()(),Ml(1575,`td`,23)(1576,`p`)(1577,`code`),mN(1578,`false`),lg()()(),Ml(1579,`td`,24)(1580,`p`),mN(1581,`Habilita ou desabilita o estilo listrado da tabela (`),Ml(1582,`code`),mN(1583,`striped`),lg(),mN(1584,`).`),lg(),Ml(1585,`blockquote`)(1586,`p`),mN(1587,`Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.`),lg()()()(),Ml(1588,`tr`,17)(1589,`td`,18)(1590,`div`,19)(1591,`span`,20),mN(1592,` p-text-wrap`),ql(1593,`br`),lg()()(),Ml(1594,`td`,21)(1595,`code`,22),mN(1596,`boolean`),lg()(),Ml(1597,`td`,23)(1598,`p`)(1599,`code`),mN(1600,`false`),lg()()(),Ml(1601,`td`,24)(1602,`em`)(1603,`strong`),mN(1604,`(opcional)`),lg()(),Ml(1605,`p`),mN(1606,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg(),Ml(1607,`blockquote`)(1608,`p`),mN(1609,`Incompatível com `),Ml(1610,`code`),mN(1611,`virtual-scroll`),lg(),mN(1612,`, que requer altura fixa nas linhas.`),lg()()()(),Ml(1613,`tr`,17)(1614,`td`,18)(1615,`div`,27)(1616,`span`,28),mN(1617,` (p-unselected)`),ql(1618,`br`),lg()()(),Ml(1619,`td`,21)(1620,`code`,29),mN(1621,`EventEmitter`),lg()(),Ml(1622,`td`,23),mN(1623,`-`),lg(),Ml(1624,`td`,24)(1625,`em`)(1626,`strong`),mN(1627,`(opcional)`),lg()(),Ml(1628,`p`),mN(1629,`Evento executado ao desmarcar a seleção de uma linha do `),Ml(1630,`code`),mN(1631,`po-table`),lg(),mN(1632,`.`),lg()()(),Ml(1633,`tr`,17)(1634,`td`,18)(1635,`div`,19)(1636,`span`,20),mN(1637,` p-virtual-scroll`),ql(1638,`br`),lg()()(),Ml(1639,`td`,21)(1640,`code`,22),mN(1641,`boolean`),lg()(),Ml(1642,`td`,23)(1643,`p`)(1644,`code`),mN(1645,`true`),lg()()(),Ml(1646,`td`,24)(1647,`em`)(1648,`strong`),mN(1649,`(opcional)`),lg()(),Ml(1650,`p`),mN(1651,`Habilita o `),Ml(1652,`code`),mN(1653,`virtual-scroll`),lg(),mN(1654,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Ml(1655,`code`),mN(1656,`p-height`),lg(),mN(1657,`) para funcionar corretamente.`),lg(),Ml(1658,`blockquote`)(1659,`p`),mN(1660,`Incompatível com `),Ml(1661,`code`),mN(1662,`p-text-wrap`),lg(),mN(1663,` e `),Ml(1664,`code`),mN(1665,`master-detail`),lg(),mN(1666,`, pois o `),Ml(1667,`code`),mN(1668,`virtual-scroll`),lg(),mN(1669,` exige altura fixa nas linhas.`),lg()()()()(),Ml(1670,`h3`,13),mN(1671,`Métodos`),lg(),Ml(1672,`table`,42)(1673,`tr`,17)(1674,`th`,43)(1675,`div`,19)(1676,`h4`)(1677,`span`,20),mN(1678,` applyFilters `),lg()()()()(),Ml(1679,`tr`,24)(1680,`td`,24)(1681,`p`),mN(1682,`Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.`),lg(),Ml(1683,`p`),mN(1684,`Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:`),lg(),Ml(1685,`pre`)(1686,`code`),mN(1687,`url + ?page=1&pageSize=10
`),lg()(),Ml(1688,`blockquote`)(1689,`p`),mN(1690,`Obs: os parâmetros `),Ml(1691,`code`),mN(1692,`page`),lg(),mN(1693,` e `),Ml(1694,`code`),mN(1695,`pageSize`),lg(),mN(1696,` sempre serão chamados independente de ser enviados outros parâmetros.`),lg()(),Ml(1697,`p`),mN(1698,`Caso sejam informados os parâmetros `),Ml(1699,`code`),mN(1700,`{ name: 'JOHN', age: '23' }`),lg(),mN(1701,`, todos serão adicionados ao GET, conforme abaixo:`),lg(),Ml(1702,`pre`)(1703,`code`),mN(1704,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),lg()()()()(),Ml(1705,`h5`)(1706,`b`),mN(1707,`Parâmetros`),lg()(),Ml(1708,`table`,14)(1709,`tr`,15)(1710,`th`,16),mN(1711,`Nome`),lg(),Ml(1712,`th`,16),mN(1713,`Tipo`),lg(),Ml(1714,`th`,16),mN(1715,`Descrição`),lg()(),Ml(1716,`tr`,17)(1717,`td`,18),mN(1718,` queryParams`),lg(),Ml(1719,`td`,21)(1720,`code`,44),mN(1721,` { key: value } `),lg()(),Ml(1722,`td`,24)(1723,`p`),mN(1724,`Formato do objeto a ser enviado.`),lg(),Ml(1725,`blockquote`)(1726,`p`),mN(1727,`Pode ser utilizada qualquer string como key, e qualquer string ou number como value.`),lg()()()()(),ql(1728,`br`),Ml(1729,`table`,42)(1730,`tr`,17)(1731,`th`,43)(1732,`div`,19)(1733,`h4`)(1734,`span`,20),mN(1735,` applyFixedColumns `),lg()()()()(),Ml(1736,`tr`,24)(1737,`td`,24)(1738,`p`),mN(1739,`Verifica se columns possuem a propriedade width.`),lg()()()(),ql(1740,`br`),Ml(1741,`table`,42)(1742,`tr`,17)(1743,`th`,43)(1744,`div`,19)(1745,`h4`)(1746,`span`,20),mN(1747,` collapse `),lg()()()()(),Ml(1748,`tr`,24)(1749,`td`,24)(1750,`p`),mN(1751,`Método que colapsa uma linha com detalhe quando executada.`),lg()()()(),Ml(1752,`h5`)(1753,`b`),mN(1754,`Parâmetros`),lg()(),Ml(1755,`table`,14)(1756,`tr`,15)(1757,`th`,16),mN(1758,`Nome`),lg(),Ml(1759,`th`,16),mN(1760,`Tipo`),lg(),Ml(1761,`th`,16),mN(1762,`Descrição`),lg()(),Ml(1763,`tr`,17)(1764,`td`,18),mN(1765,` rowIndex`),lg(),Ml(1766,`td`,21)(1767,`code`,45),mN(1768,` number `),lg()(),Ml(1769,`td`,24)(1770,`p`),mN(1771,`Índice da linha que será colapsada.`),lg(),Ml(1772,`blockquote`)(1773,`p`),mN(1774,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),lg()()()()(),ql(1775,`br`),Ml(1776,`table`,42)(1777,`tr`,17)(1778,`th`,43)(1779,`div`,19)(1780,`h4`)(1781,`span`,20),mN(1782,` expand `),lg()()()()(),Ml(1783,`tr`,24)(1784,`td`,24)(1785,`p`),mN(1786,`Método que expande uma linha com detalhe quando executada.`),lg()()()(),Ml(1787,`h5`)(1788,`b`),mN(1789,`Parâmetros`),lg()(),Ml(1790,`table`,14)(1791,`tr`,15)(1792,`th`,16),mN(1793,`Nome`),lg(),Ml(1794,`th`,16),mN(1795,`Tipo`),lg(),Ml(1796,`th`,16),mN(1797,`Descrição`),lg()(),Ml(1798,`tr`,17)(1799,`td`,18),mN(1800,` rowIndex`),lg(),Ml(1801,`td`,21)(1802,`code`,45),mN(1803,` number `),lg()(),Ml(1804,`td`,24)(1805,`p`),mN(1806,`Índice da linha que será expandida.`),lg(),Ml(1807,`blockquote`)(1808,`p`),mN(1809,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),lg()()()()(),ql(1810,`br`),Ml(1811,`table`,42)(1812,`tr`,17)(1813,`th`,43)(1814,`div`,19)(1815,`h4`)(1816,`span`,20),mN(1817,` getSelectedRows `),lg()()()()(),Ml(1818,`tr`,24)(1819,`td`,24)(1820,`p`),mN(1821,`Retorna as linhas do `),Ml(1822,`code`),mN(1823,`po-table`),lg(),mN(1824,` que estão selecionadas.`),lg()()()(),ql(1825,`br`),Ml(1826,`table`,42)(1827,`tr`,17)(1828,`th`,43)(1829,`div`,19)(1830,`h4`)(1831,`span`,20),mN(1832,` getUnselectedRows `),lg()()()()(),Ml(1833,`tr`,24)(1834,`td`,24)(1835,`p`),mN(1836,`Retorna as linhas do `),Ml(1837,`code`),mN(1838,`po-table`),lg(),mN(1839,` que não estão selecionadas.`),lg()()()(),ql(1840,`br`),Ml(1841,`table`,42)(1842,`tr`,17)(1843,`th`,43)(1844,`div`,19)(1845,`h4`)(1846,`span`,20),mN(1847,` unselectRows `),lg()()()()(),Ml(1848,`tr`,24)(1849,`td`,24)(1850,`p`),mN(1851,`Desmarca as linhas que estão selecionadas.`),lg()()()(),ql(1852,`br`),Ml(1853,`table`,42)(1854,`tr`,17)(1855,`th`,43)(1856,`div`,19)(1857,`h4`)(1858,`span`,20),mN(1859,` unselectRowItem `),lg()()()()(),Ml(1860,`tr`,24)(1861,`td`,24)(1862,`p`),mN(1863,`Desmarca uma linha que está selecionada.`),lg()()()(),ql(1864,`br`),Ml(1865,`table`,42)(1866,`tr`,17)(1867,`th`,43)(1868,`div`,19)(1869,`h4`)(1870,`span`,20),mN(1871,` selectRowItem `),lg()()()()(),Ml(1872,`tr`,24)(1873,`td`,24)(1874,`p`),mN(1875,`Seleciona uma linha do 'po-table'.`),lg()()()(),ql(1876,`br`),Ml(1877,`table`,42)(1878,`tr`,17)(1879,`th`,43)(1880,`div`,19)(1881,`h4`)(1882,`span`,20),mN(1883,` deleteItems `),lg()()()()(),Ml(1884,`tr`,24)(1885,`td`,24)(1886,`p`),mN(1887,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Ml(1888,`code`),mN(1889,`p-service-delete`),lg(),mN(1890,`, será necessário excluir 1 item por vez.`),lg(),Ml(1891,`p`),mN(1892,`Ao utilizar `),Ml(1893,`code`),mN(1894,`p-service-delete`),lg(),mN(1895,` mas sem a propriedade `),Ml(1896,`code`),mN(1897,`p-service-api`),lg(),mN(1898,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),lg(),Ml(1899,`p`),mN(1900,`Caso a tabela utilize `),Ml(1901,`code`),mN(1902,`p-height`),lg(),mN(1903,` e esteja sem serviço, é necessário a reatribuição dos itens utilizando o evento `),Ml(1904,`code`),mN(1905,`(p-delete-items)`),lg(),mN(1906,`, por exemplo:`),lg(),Ml(1907,`pre`)(1908,`code`),mN(1909,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),lg()()()()(),ql(1910,`br`),Ml(1911,`table`,42)(1912,`tr`,17)(1913,`th`,43)(1914,`div`,19)(1915,`h4`)(1916,`span`,20),mN(1917,` updateSearchAIQuery `),lg()()()()(),Ml(1918,`tr`,24)(1919,`td`,24)(1920,`p`),mN(1921,`Atualiza programaticamente o valor do campo de busca por IA (`),Ml(1922,`code`),mN(1923,`po-search-ai`),lg(),mN(1924,`) integrado \xE0 tabela
via `),Ml(1925,`code`),mN(1926,`p-search-ai-field`),lg(),mN(1927,`.`),lg(),Ml(1928,`p`),mN(1929,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),lg(),Ml(1930,`blockquote`)(1931,`p`),mN(1932,`Só tem efeito quando a propriedade `),Ml(1933,`code`),mN(1934,`p-search-ai-field`),lg(),mN(1935,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),lg()()()()(),Ml(1936,`h5`)(1937,`b`),mN(1938,`Parâmetros`),lg()(),Ml(1939,`table`,14)(1940,`tr`,15)(1941,`th`,16),mN(1942,`Nome`),lg(),Ml(1943,`th`,16),mN(1944,`Tipo`),lg(),Ml(1945,`th`,16),mN(1946,`Descrição`),lg()(),Ml(1947,`tr`,17)(1948,`td`,18),mN(1949,` value`),lg(),Ml(1950,`td`,21)(1951,`code`,45),mN(1952,` string `),lg()(),Ml(1953,`td`,24)(1954,`p`),mN(1955,`Texto da consulta a ser inserido no campo de busca por IA.`),lg()()(),Ml(1956,`tr`,17)(1957,`td`,18),mN(1958,` triggerSearch`),lg(),Ml(1959,`td`,21)(1960,`code`,45),mN(1961,` boolean `),lg()(),Ml(1962,`td`,24)(1963,`p`),mN(1964,`Quando `),Ml(1965,`code`),mN(1966,`true`),lg(),mN(1967,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),Ml(1968,`code`),mN(1969,`false`),lg(),Ml(1970,`em`),mN(1971,`(padrão)`),lg(),mN(1972,`, apenas preenche o campo.`),lg()()()(),ql(1973,`br`),Ml(1974,`table`,42)(1975,`tr`,17)(1976,`th`,43)(1977,`div`,19)(1978,`h4`)(1979,`span`,20),mN(1980,` removeItem `),lg()()()()(),Ml(1981,`tr`,24)(1982,`td`,24)(1983,`p`),mN(1984,`Método que remove um item da tabela.`),lg()()()(),Ml(1985,`h5`)(1986,`b`),mN(1987,`Parâmetros`),lg()(),Ml(1988,`table`,14)(1989,`tr`,15)(1990,`th`,16),mN(1991,`Nome`),lg(),Ml(1992,`th`,16),mN(1993,`Tipo`),lg(),Ml(1994,`th`,16),mN(1995,`Descrição`),lg()(),Ml(1996,`tr`,17)(1997,`td`,18),mN(1998,` item`),lg(),Ml(1999,`td`,21)(2e3,`code`,35),mN(2001,` number `),lg(),Ml(2002,`code`,44),mN(2003,` { key: value } `),lg()(),Ml(2004,`td`,24)(2005,`p`),mN(2006,`Índice da linha ou o item que será removido.`),lg(),Ml(2007,`blockquote`)(2008,`p`),mN(2009,`Ao remover o item, a linha que o representa será excluída da tabela.`),lg()()()()(),ql(2010,`br`),Ml(2011,`table`,42)(2012,`tr`,17)(2013,`th`,43)(2014,`div`,19)(2015,`h4`)(2016,`span`,20),mN(2017,` updateItem `),lg()()()()(),Ml(2018,`tr`,24)(2019,`td`,24)(2020,`p`),mN(2021,`Método que atualiza um item da tabela.`),lg()()()(),Ml(2022,`h5`)(2023,`b`),mN(2024,`Parâmetros`),lg()(),Ml(2025,`table`,14)(2026,`tr`,15)(2027,`th`,16),mN(2028,`Nome`),lg(),Ml(2029,`th`,16),mN(2030,`Tipo`),lg(),Ml(2031,`th`,16),mN(2032,`Descrição`),lg()(),Ml(2033,`tr`,17)(2034,`td`,18),mN(2035,` item`),lg(),Ml(2036,`td`,21)(2037,`code`,35),mN(2038,` number `),lg(),Ml(2039,`code`,44),mN(2040,` { key: value } `),lg()(),Ml(2041,`td`,24)(2042,`p`),mN(2043,`Índice da linha ou o item que será atualizado.`),lg()()(),Ml(2044,`tr`,17)(2045,`td`,18),mN(2046,` updatedItem`),lg(),Ml(2047,`td`,21)(2048,`code`,44),mN(2049,` { key: value } `),lg()(),Ml(2050,`td`,24)(2051,`p`),mN(2052,`Item que foi atualizado.`),lg(),Ml(2053,`blockquote`)(2054,`p`),mN(2055,`Ao atualizar o item, a informação será alterada na tabela.`),lg()()()()(),ql(2056,`br`),Ml(2057,`h3`),mN(2058,`Interfaces`),lg(),Ml(2059,`h4`,46)(2060,`code`,5),mN(2061,`PoTableAction`),lg()(),Ml(2062,`div`,2)(2063,`p`),mN(2064,`Interface para lista de ações do componente. `),lg()(),Ml(2065,`h4`,13),mN(2066,`Propriedades`),lg(),Ml(2067,`table`,14)(2068,`tr`,15)(2069,`th`,16),mN(2070,`Nome`),lg(),Ml(2071,`th`,16),mN(2072,`Tipo`),lg(),Ml(2073,`th`,16),mN(2074,`Descrição`),lg()(),Ml(2075,`tr`,17)(2076,`td`,18)(2077,`div`,19)(2078,`span`,20),mN(2079,` action`),ql(2080,`br`),lg()()(),Ml(2081,`td`,21)(2082,`code`,47),mN(2083,`Function`),lg()(),Ml(2084,`td`,24)(2085,`em`)(2086,`strong`),mN(2087,`(opcional)`),lg()(),Ml(2088,`p`),mN(2089,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),lg(),Ml(2090,`p`),mN(2091,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Ml(2092,`code`),mN(2093,`subItems`),lg(),mN(2094,`.`),lg(),Ml(2095,`blockquote`)(2096,`p`),mN(2097,`Para que a função seja executada no contexto do componente, utilize `),Ml(2098,`em`),mN(2099,`bind`),lg(),mN(2100,`:
`),Ml(2101,`code`),mN(2102,`action: this.myFunction.bind(this)`),lg()()()()(),Ml(2103,`tr`,17)(2104,`td`,18)(2105,`div`,19)(2106,`span`,20),mN(2107,` disabled`),ql(2108,`br`),lg()()(),Ml(2109,`td`,21)(2110,`code`,22),mN(2111,`boolean `),lg(),Ml(2112,`code`,47),mN(2113,` Function`),lg()(),Ml(2114,`td`,24)(2115,`em`)(2116,`strong`),mN(2117,`(opcional)`),lg()(),Ml(2118,`p`),mN(2119,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()(),Ml(2120,`tr`,17)(2121,`td`,18)(2122,`div`,19)(2123,`span`,20),mN(2124,` icon`),ql(2125,`br`),lg()()(),Ml(2126,`td`,21)(2127,`code`,31),mN(2128,`string `),lg(),Ml(2129,`code`,48),mN(2130,` TemplateRef<void>`),lg()(),Ml(2131,`td`,24)(2132,`em`)(2133,`strong`),mN(2134,`(opcional)`),lg()(),Ml(2135,`p`),mN(2136,`Ícone exibido ao lado esquerdo do rótulo.`),lg(),Ml(2137,`p`),mN(2138,`Aceita ícones da `),Ml(2139,`a`,26),mN(2140,`Biblioteca de ícones`),lg(),mN(2141,`, fontes externas (ex: Font Awesome)
ou um `),Ml(2142,`code`),mN(2143,`TemplateRef`),lg(),mN(2144,` para ícones customizados.`),lg(),Ml(2145,`pre`)(2146,`code`),mN(2147,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),lg()()()(),Ml(2148,`tr`,17)(2149,`td`,18)(2150,`div`,19)(2151,`span`,20),mN(2152,` label`),ql(2153,`br`),lg()()(),Ml(2154,`td`,21)(2155,`code`,31),mN(2156,`string`),lg()(),Ml(2157,`td`,24)(2158,`p`),mN(2159,`Rótulo da ação.`),lg(),Ml(2160,`p`),mN(2161,`A label também pode representar o agrupador de subitens quando a ação possuir `),Ml(2162,`code`),mN(2163,`subItems`),lg(),mN(2164,`.`),lg()()(),Ml(2165,`tr`,17)(2166,`td`,18)(2167,`div`,19)(2168,`span`,20),mN(2169,` selected`),ql(2170,`br`),lg()()(),Ml(2171,`td`,21)(2172,`code`,22),mN(2173,`boolean`),lg()(),Ml(2174,`td`,24)(2175,`em`)(2176,`strong`),mN(2177,`(opcional)`),lg()(),Ml(2178,`p`),mN(2179,`Define se a ação está selecionada.`),lg()()(),Ml(2180,`tr`,17)(2181,`td`,18)(2182,`div`,19)(2183,`span`,20),mN(2184,` separator`),ql(2185,`br`),lg()()(),Ml(2186,`td`,21)(2187,`code`,22),mN(2188,`boolean`),lg()(),Ml(2189,`td`,24)(2190,`em`)(2191,`strong`),mN(2192,`(opcional)`),lg()(),Ml(2193,`p`),mN(2194,`Atribui uma linha separadora acima do item.`),lg()()(),Ml(2195,`tr`,17)(2196,`td`,18)(2197,`div`,19)(2198,`span`,20),mN(2199,` subItems`),ql(2200,`br`),lg()()(),Ml(2201,`td`,21)(2202,`code`,49),mN(2203,`Array<PoPopupAction>`),lg()(),Ml(2204,`td`,24)(2205,`em`)(2206,`strong`),mN(2207,`(opcional)`),lg()(),Ml(2208,`p`),mN(2209,`Define uma lista de subitens para criação de menus aninhados.`),lg(),Ml(2210,`p`),mN(2211,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),lg(),Ml(2212,`blockquote`)(2213,`p`),mN(2214,`As propriedades `),Ml(2215,`code`),mN(2216,`disabled`),lg(),mN(2217,`, `),Ml(2218,`code`),mN(2219,`type`),lg(),mN(2220,` e `),Ml(2221,`code`),mN(2222,`visible`),lg(),mN(2223,` não são aplicadas visualmente ao item agrupador.`),lg()(),Ml(2224,`blockquote`)(2225,`p`),mN(2226,`Quando `),Ml(2227,`code`),mN(2228,`url`),lg(),mN(2229,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),lg()(),Ml(2230,`blockquote`)(2231,`p`),mN(2232,`Em subníveis aninhados, o `),Ml(2233,`code`),mN(2234,`icon`),lg(),mN(2235,` do agrupador é substituído pelo indicador de navegação (seta).`),lg()()()(),Ml(2236,`tr`,17)(2237,`td`,18)(2238,`div`,19)(2239,`span`,20),mN(2240,` type`),ql(2241,`br`),lg()()(),Ml(2242,`td`,21)(2243,`code`,31),mN(2244,`string`),lg()(),Ml(2245,`td`,24)(2246,`em`)(2247,`strong`),mN(2248,`(opcional)`),lg()(),Ml(2249,`p`),mN(2250,`Define a cor do item.`),lg(),Ml(2251,`p`),mN(2252,`Valores válidos:`),lg(),Ml(2253,`ul`)(2254,`li`)(2255,`code`),mN(2256,`default`),lg()(),Ml(2257,`li`)(2258,`code`),mN(2259,`danger`),lg()()()()(),Ml(2260,`tr`,17)(2261,`td`,18)(2262,`div`,19)(2263,`span`,20),mN(2264,` url`),ql(2265,`br`),lg()()(),Ml(2266,`td`,21)(2267,`code`,31),mN(2268,`string`),lg()(),Ml(2269,`td`,24)(2270,`em`)(2271,`strong`),mN(2272,`(opcional)`),lg()(),Ml(2273,`p`),mN(2274,`URL para redirecionamento. Aceita rotas internas e links externos.`),lg(),Ml(2275,`p`),mN(2276,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Ml(2277,`code`),mN(2278,`url`),lg(),mN(2279,` é informada em um agrupador, o clique `),Ml(2280,`strong`),mN(2281,`não abrirá os subitens`),lg(),mN(2282,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),lg(),Ml(2283,`blockquote`)(2284,`p`),mN(2285,`Quando informada, tem prioridade sobre a propriedade `),Ml(2286,`code`),mN(2287,`action`),lg(),mN(2288,`.`),lg()()()(),Ml(2289,`tr`,17)(2290,`td`,18)(2291,`div`,19)(2292,`span`,20),mN(2293,` visible`),ql(2294,`br`),lg()()(),Ml(2295,`td`,21)(2296,`code`,22),mN(2297,`boolean `),lg(),Ml(2298,`code`,47),mN(2299,` Function`),lg()(),Ml(2300,`td`,24)(2301,`em`)(2302,`strong`),mN(2303,`(opcional)`),lg()(),Ml(2304,`p`),mN(2305,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),lg()()()(),Ml(2306,`h4`,46)(2307,`code`,5),mN(2308,`PoTableBoolean`),lg()(),Ml(2309,`div`,2)(2310,`p`),mN(2311,`Interface que define as colunas booleanas do `),Ml(2312,`code`),mN(2313,`po-table`),lg(),mN(2314,`.`),lg()(),Ml(2315,`h4`,13),mN(2316,`Propriedades`),lg(),Ml(2317,`table`,14)(2318,`tr`,15)(2319,`th`,16),mN(2320,`Nome`),lg(),Ml(2321,`th`,16),mN(2322,`Tipo`),lg(),Ml(2323,`th`,16),mN(2324,`Descrição`),lg()(),Ml(2325,`tr`,17)(2326,`td`,18)(2327,`div`,19)(2328,`span`,20),mN(2329,` falseLabel`),ql(2330,`br`),lg()()(),Ml(2331,`td`,21)(2332,`code`,31),mN(2333,`string`),lg()(),Ml(2334,`td`,24)(2335,`em`)(2336,`strong`),mN(2337,`(opcional)`),lg()(),Ml(2338,`p`),mN(2339,`Define o rótulo para valores `),Ml(2340,`code`),mN(2341,`false`),lg(),mN(2342,`.`),lg()()(),Ml(2343,`tr`,17)(2344,`td`,18)(2345,`div`,19)(2346,`span`,20),mN(2347,` trueLabel`),ql(2348,`br`),lg()()(),Ml(2349,`td`,21)(2350,`code`,31),mN(2351,`string`),lg()(),Ml(2352,`td`,24)(2353,`em`)(2354,`strong`),mN(2355,`(opcional)`),lg()(),Ml(2356,`p`),mN(2357,`Define o rótulo para valores `),Ml(2358,`code`),mN(2359,`true`),lg(),mN(2360,`.`),lg()()()(),Ml(2361,`h4`,46)(2362,`code`,5),mN(2363,`PoTableColumnSort`),lg()(),Ml(2364,`div`,2)(2365,`p`),mN(2366,`Interface para ordenação das colunas do componente table.`),lg()(),Ml(2367,`h4`,13),mN(2368,`Propriedades`),lg(),Ml(2369,`table`,14)(2370,`tr`,15)(2371,`th`,16),mN(2372,`Nome`),lg(),Ml(2373,`th`,16),mN(2374,`Tipo`),lg(),Ml(2375,`th`,16),mN(2376,`Descrição`),lg()(),Ml(2377,`tr`,17)(2378,`td`,18)(2379,`div`,19)(2380,`span`,20),mN(2381,` column`),ql(2382,`br`),lg()()(),Ml(2383,`td`,21)(2384,`code`,50),mN(2385,`PoTableColumn`),lg()(),Ml(2386,`td`,24)(2387,`em`)(2388,`strong`),mN(2389,`(opcional)`),lg()(),Ml(2390,`p`),mN(2391,`Coluna pela qual a tabela está ordenada.`),lg()()(),Ml(2392,`tr`,17)(2393,`td`,18)(2394,`div`,19)(2395,`span`,20),mN(2396,` type`),ql(2397,`br`),lg()()(),Ml(2398,`td`,21)(2399,`code`,51),mN(2400,`PoTableColumnSortType`),lg()(),Ml(2401,`td`,24)(2402,`p`),mN(2403,`Tipo da ordenação.`),lg()()()(),Ml(2404,`h4`,46)(2405,`code`,5),mN(2406,`PoTableColumn`),lg()(),Ml(2407,`div`,2)(2408,`p`),mN(2409,`Interface para configuração das colunas do `),Ml(2410,`code`),mN(2411,`po-table`),lg(),mN(2412,`.`),lg(),Ml(2413,`p`),mN(2414,`As definições das colunas serão aplicadas linha a linha.`),lg()(),Ml(2415,`h4`,13),mN(2416,`Propriedades`),lg(),Ml(2417,`table`,14)(2418,`tr`,15)(2419,`th`,16),mN(2420,`Nome`),lg(),Ml(2421,`th`,16),mN(2422,`Tipo`),lg(),Ml(2423,`th`,16),mN(2424,`Descrição`),lg()(),Ml(2425,`tr`,17)(2426,`td`,18)(2427,`div`,19)(2428,`span`,20),mN(2429,` action`),ql(2430,`br`),lg()()(),Ml(2431,`td`,21)(2432,`code`,47),mN(2433,`Function`),lg()(),Ml(2434,`td`,24)(2435,`em`)(2436,`strong`),mN(2437,`(opcional)`),lg()(),Ml(2438,`p`),mN(2439,`Define uma ação na coluna quando o tipo da coluna for `),Ml(2440,`code`),mN(2441,`link`),lg(),mN(2442,` ou `),Ml(2443,`code`),mN(2444,`icon`),lg(),mN(2445,`.`),lg(),Ml(2446,`blockquote`)(2447,`p`),mN(2448,`Quando for do tipo `),Ml(2449,`code`),mN(2450,`link`),lg(),mN(2451,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),lg()(),Ml(2452,`blockquote`)(2453,`p`),mN(2454,`Quando for do tipo `),Ml(2455,`code`),mN(2456,`icon`),lg(),mN(2457,` enviará o objeto completo da linha e o segundo parâmetro será a definição da coluna.`),lg()()()(),Ml(2458,`tr`,17)(2459,`td`,18)(2460,`div`,19)(2461,`span`,20),mN(2462,` boolean`),ql(2463,`br`),lg()()(),Ml(2464,`td`,21)(2465,`code`,52),mN(2466,`PoTableBoolean`),lg()(),Ml(2467,`td`,24)(2468,`em`)(2469,`strong`),mN(2470,`(opcional)`),lg()(),Ml(2471,`p`),mN(2472,`Define um objeto do tipo `),Ml(2473,`code`),mN(2474,`PoTableBoolean`),lg(),mN(2475,` para as colunas do tipo `),Ml(2476,`em`),mN(2477,`boolean`),lg(),mN(2478,`. Por exemplo:`),lg(),Ml(2479,`pre`)(2480,`code`),mN(2481,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),lg()(),Ml(2482,`blockquote`)(2483,`p`),mN(2484,`Caso não seja definido um objeto para colunas do tipo `),Ml(2485,`em`),mN(2486,`boolean`),lg(),mN(2487,`,
esta exibir\xE1 por padr\xE3o `),Ml(2488,`code`),mN(2489,`Sim`),lg(),mN(2490,` e `),Ml(2491,`code`),mN(2492,`Não`),lg(),mN(2493,` de acordo com os valores `),Ml(2494,`em`),mN(2495,`booleanos`),lg(),mN(2496,`.`),lg()()()(),Ml(2497,`tr`,17)(2498,`td`,18)(2499,`div`,19)(2500,`span`,20),mN(2501,` color`),ql(2502,`br`),lg()()(),Ml(2503,`td`,21)(2504,`code`,31),mN(2505,`string `),lg(),Ml(2506,`code`,47),mN(2507,` Function`),lg()(),Ml(2508,`td`,24)(2509,`em`)(2510,`strong`),mN(2511,`(opcional)`),lg()(),Ml(2512,`p`),mN(2513,`Define a cor que será aplicada no conteúdo da coluna.`),lg(),Ml(2514,`p`),mN(2515,`Valores válidos:`),lg(),Ml(2516,`ul`)(2517,`li`),ql(2518,`span`,53),Ml(2519,`code`),mN(2520,`color-01`),lg()(),Ml(2521,`li`),ql(2522,`span`,54),Ml(2523,`code`),mN(2524,`color-02`),lg()(),Ml(2525,`li`),ql(2526,`span`,55),Ml(2527,`code`),mN(2528,`color-03`),lg()(),Ml(2529,`li`),ql(2530,`span`,56),Ml(2531,`code`),mN(2532,`color-04`),lg()(),Ml(2533,`li`),ql(2534,`span`,57),Ml(2535,`code`),mN(2536,`color-05`),lg()(),Ml(2537,`li`),ql(2538,`span`,58),Ml(2539,`code`),mN(2540,`color-06`),lg()(),Ml(2541,`li`),ql(2542,`span`,59),Ml(2543,`code`),mN(2544,`color-07`),lg()(),Ml(2545,`li`),ql(2546,`span`,60),Ml(2547,`code`),mN(2548,`color-08`),lg()(),Ml(2549,`li`),ql(2550,`span`,61),Ml(2551,`code`),mN(2552,`color-09`),lg()(),Ml(2553,`li`),ql(2554,`span`,62),Ml(2555,`code`),mN(2556,`color-10`),lg()(),Ml(2557,`li`),ql(2558,`span`,63),Ml(2559,`code`),mN(2560,`color-11`),lg()(),Ml(2561,`li`),ql(2562,`span`,64),Ml(2563,`code`),mN(2564,`color-12`),lg()()(),Ml(2565,`blockquote`)(2566,`p`),mN(2567,`Também é possível utilizar as 35 cores da paleta `),Ml(2568,`strong`),mN(2569,`Caption Tag Colors`),lg(),mN(2570,`:`),lg()(),Ml(2571,`ul`)(2572,`li`),ql(2573,`span`,65),Ml(2574,`code`),mN(2575,`caption-tag-01`),lg(),ql(2576,`span`,66),Ml(2577,`code`),mN(2578,`caption-tag-02`),lg(),ql(2579,`span`,67),Ml(2580,`code`),mN(2581,`caption-tag-03`),lg(),ql(2582,`span`,68),Ml(2583,`code`),mN(2584,`caption-tag-04`),lg(),ql(2585,`span`,69),Ml(2586,`code`),mN(2587,`caption-tag-05`),lg()(),Ml(2588,`li`),ql(2589,`span`,70),Ml(2590,`code`),mN(2591,`caption-tag-06`),lg(),ql(2592,`span`,71),Ml(2593,`code`),mN(2594,`caption-tag-07`),lg(),ql(2595,`span`,72),Ml(2596,`code`),mN(2597,`caption-tag-08`),lg(),ql(2598,`span`,73),Ml(2599,`code`),mN(2600,`caption-tag-09`),lg(),ql(2601,`span`,74),Ml(2602,`code`),mN(2603,`caption-tag-10`),lg()(),Ml(2604,`li`),ql(2605,`span`,75),Ml(2606,`code`),mN(2607,`caption-tag-11`),lg(),ql(2608,`span`,76),Ml(2609,`code`),mN(2610,`caption-tag-12`),lg(),ql(2611,`span`,77),Ml(2612,`code`),mN(2613,`caption-tag-13`),lg(),ql(2614,`span`,78),Ml(2615,`code`),mN(2616,`caption-tag-14`),lg(),ql(2617,`span`,79),Ml(2618,`code`),mN(2619,`caption-tag-15`),lg()(),Ml(2620,`li`),ql(2621,`span`,80),Ml(2622,`code`),mN(2623,`caption-tag-16`),lg(),ql(2624,`span`,81),Ml(2625,`code`),mN(2626,`caption-tag-17`),lg(),ql(2627,`span`,82),Ml(2628,`code`),mN(2629,`caption-tag-18`),lg(),ql(2630,`span`,83),Ml(2631,`code`),mN(2632,`caption-tag-19`),lg(),ql(2633,`span`,84),Ml(2634,`code`),mN(2635,`caption-tag-20`),lg()(),Ml(2636,`li`),ql(2637,`span`,85),Ml(2638,`code`),mN(2639,`caption-tag-21`),lg(),ql(2640,`span`,86),Ml(2641,`code`),mN(2642,`caption-tag-22`),lg(),ql(2643,`span`,87),Ml(2644,`code`),mN(2645,`caption-tag-23`),lg(),ql(2646,`span`,88),Ml(2647,`code`),mN(2648,`caption-tag-24`),lg(),ql(2649,`span`,89),Ml(2650,`code`),mN(2651,`caption-tag-25`),lg()(),Ml(2652,`li`),ql(2653,`span`,90),Ml(2654,`code`),mN(2655,`caption-tag-26`),lg(),ql(2656,`span`,91),Ml(2657,`code`),mN(2658,`caption-tag-27`),lg(),ql(2659,`span`,92),Ml(2660,`code`),mN(2661,`caption-tag-28`),lg(),ql(2662,`span`,93),Ml(2663,`code`),mN(2664,`caption-tag-29`),lg(),ql(2665,`span`,94),Ml(2666,`code`),mN(2667,`caption-tag-30`),lg()(),Ml(2668,`li`),ql(2669,`span`,95),Ml(2670,`code`),mN(2671,`caption-tag-31`),lg(),ql(2672,`span`,96),Ml(2673,`code`),mN(2674,`caption-tag-32`),lg(),ql(2675,`span`,97),Ml(2676,`code`),mN(2677,`caption-tag-33`),lg(),ql(2678,`span`,98),Ml(2679,`code`),mN(2680,`caption-tag-34`),lg(),ql(2681,`span`,99),Ml(2682,`code`),mN(2683,`caption-tag-35`),lg()()(),Ml(2684,`blockquote`)(2685,`p`),mN(2686,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),lg()(),Ml(2687,`pre`)(2688,`code`),mN(2689,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),lg()(),Ml(2690,`blockquote`)(2691,`p`),mN(2692,`É possível também usá-la na coluna do tipo `),Ml(2693,`code`),mN(2694,`icons`),lg(),mN(2695,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),lg()(),Ml(2696,`pre`)(2697,`code`),mN(2698,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),lg()()()(),Ml(2699,`tr`,17)(2700,`td`,18)(2701,`div`,19)(2702,`span`,20),mN(2703,` detail`),ql(2704,`br`),lg()()(),Ml(2705,`td`,21)(2706,`code`,100),mN(2707,`PoTableDetail`),lg()(),Ml(2708,`td`,24)(2709,`em`)(2710,`strong`),mN(2711,`(opcional)`),lg()(),Ml(2712,`p`),mN(2713,`Define um objeto que segue a interface `),Ml(2714,`code`),mN(2715,`PoTableDetail`),lg(),mN(2716,`, para as colunas de detalhes. Por exemplo:`),lg(),Ml(2717,`pre`)(2718,`code`),mN(2719,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),lg()()()(),Ml(2720,`tr`,17)(2721,`td`,18)(2722,`div`,19)(2723,`span`,20),mN(2724,` disabled`),ql(2725,`br`),lg()()(),Ml(2726,`td`,21)(2727,`code`,47),mN(2728,`Function`),lg()(),Ml(2729,`td`,24)(2730,`em`)(2731,`strong`),mN(2732,`(opcional)`),lg()(),Ml(2733,`p`),mN(2734,`Função que deve retornar um booleano para habilitar ou desabilitar o `),Ml(2735,`em`),mN(2736,`link`),lg(),mN(2737,` e sua ação.`),lg(),Ml(2738,`blockquote`)(2739,`p`),mN(2740,`Propriedade disponível nas colunas do tipo `),Ml(2741,`code`),mN(2742,`link`),lg(),mN(2743,`.`),lg()()()(),Ml(2744,`tr`,17)(2745,`td`,18)(2746,`div`,19)(2747,`span`,20),mN(2748,` format`),ql(2749,`br`),lg()()(),Ml(2750,`td`,21)(2751,`code`,31),mN(2752,`string`),lg()(),Ml(2753,`td`,24)(2754,`em`)(2755,`strong`),mN(2756,`(opcional)`),lg()(),Ml(2757,`p`),mN(2758,`Formato de exibição do valor da coluna.`),lg(),Ml(2759,`table`)(2760,`thead`)(2761,`tr`)(2762,`th`),mN(2763,`Formatação`),lg(),Ml(2764,`th`),mN(2765,`Type da Coluna`),lg(),Ml(2766,`th`),mN(2767,`Descrição`),lg(),Ml(2768,`th`),mN(2769,`Exemplos`),lg()()(),Ml(2770,`tbody`)(2771,`tr`)(2772,`td`),mN(2773,`Monetário`),lg(),Ml(2774,`td`)(2775,`code`),mN(2776,`currency`),lg()(),Ml(2777,`td`),mN(2778,`Formato para valores monetários. Informe o código da moeda (ISO 4217).`),lg(),Ml(2779,`td`)(2780,`code`),mN(2781,`'BRL'`),lg(),mN(2782,`, `),Ml(2783,`code`),mN(2784,`'USD'`),lg(),mN(2785,`, `),Ml(2786,`code`),mN(2787,`'EUR'`),lg(),mN(2788,`, `),Ml(2789,`code`),mN(2790,`'RUB'`),lg()()(),Ml(2791,`tr`)(2792,`td`),mN(2793,`Data`),lg(),Ml(2794,`td`)(2795,`code`),mN(2796,`date`),lg()(),Ml(2797,`td`),mN(2798,`Aceita apenas os caracteres de dia(dd), mês(MM) e ano (yyyy ou yy), caso não seja informado um formato o mesmo será 'dd/MM/yyyy'`),lg(),Ml(2799,`td`)(2800,`code`),mN(2801,`'dd/MM/yyyy'`),lg(),mN(2802,`, `),Ml(2803,`code`),mN(2804,`'dd-MM-yy'`),lg(),mN(2805,`, `),Ml(2806,`code`),mN(2807,`'mm/dd/yyyy'`),lg()()(),Ml(2808,`tr`)(2809,`td`),mN(2810,`Data/Hora`),lg(),Ml(2811,`td`)(2812,`code`),mN(2813,`dateTime`),lg()(),Ml(2814,`td`),mN(2815,`Aceita os caracteres de dia(dd), mês(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e período(a para AM/PM). Caso não seja informado um formato o mesmo será 'dd/MM/yyyy HH:mm:ss'`),lg(),Ml(2816,`td`)(2817,`code`),mN(2818,`'dd/MM/yyyy HH:mm'`),lg(),mN(2819,`, `),Ml(2820,`code`),mN(2821,`'dd/MM/yyyy HH:mm:ss'`),lg(),mN(2822,`, `),Ml(2823,`code`),mN(2824,`'dd/MM/yyyy HH:mm:ss.SSS'`),lg(),mN(2825,`, `),Ml(2826,`code`),mN(2827,`'MM/dd/yyyy hh:mm a'`),lg(),mN(2828,`, `),Ml(2829,`code`),mN(2830,`'yyyy-MM-dd HH:mm'`),lg(),mN(2831,`, `),Ml(2832,`code`),mN(2833,`'short'`),lg(),mN(2834,`, `),Ml(2835,`code`),mN(2836,`'medium'`),lg()()(),Ml(2837,`tr`)(2838,`td`),mN(2839,`Hora`),lg(),Ml(2840,`td`)(2841,`code`),mN(2842,`time`),lg()(),Ml(2843,`td`),mN(2844,`Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos são opcionais, caso não seja informado um formato o mesmo será 'HH:mm:ss'`),lg(),Ml(2845,`td`)(2846,`code`),mN(2847,`'HH:mm'`),lg(),mN(2848,`, `),Ml(2849,`code`),mN(2850,`'HH:mm:ss.ffffff'`),lg(),mN(2851,`, `),Ml(2852,`code`),mN(2853,`'HH:mm:ss.ff'`),lg(),mN(2854,`, `),Ml(2855,`code`),mN(2856,`'mm:ss.fff'`),lg()()(),Ml(2857,`tr`)(2858,`td`),mN(2859,`Número`),lg(),Ml(2860,`td`)(2861,`code`),mN(2862,`number`),lg()(),Ml(2863,`td`),mN(2864,`Aceita um valor seguindo o padrão `),Ml(2865,`a`,101)(2866,`strong`),mN(2867,`DecimalPipe`),lg()(),mN(2868,` para formatação, e caso não seja informado, o número será exibido na sua forma original.`),lg(),Ml(2869,`td`)(2870,`code`),mN(2871,`'1.2-5'`),lg(),mN(2872,` (ex.: `),Ml(2873,`code`),mN(2874,`50`),lg(),mN(2875,` → `),Ml(2876,`code`),mN(2877,`50.00`),lg(),mN(2878,`)`),lg()()()(),Ml(2879,`p`),mN(2880,`Observação: caso não seja informado um formato, o valor será exibido em sua forma original.`),lg()()(),Ml(2881,`tr`,17)(2882,`td`,18)(2883,`div`,19)(2884,`span`,20),mN(2885,` icons`),ql(2886,`br`),lg()()(),Ml(2887,`td`,21)(2888,`code`,102),mN(2889,`Array<PoTableColumnIcon>`),lg()(),Ml(2890,`td`,24)(2891,`em`)(2892,`strong`),mN(2893,`(opcional)`),lg()(),Ml(2894,`p`),mN(2895,`Define um `),Ml(2896,`em`),mN(2897,`array`),lg(),mN(2898,` de objetos para colunas de ícones que irá sobrepor os valores como `),Ml(2899,`code`),mN(2900,`action`),lg(),mN(2901,` e `),Ml(2902,`code`),mN(2903,`color`),lg(),mN(2904,`
definidos na coluna, \xE0 partir do `),Ml(2905,`em`),mN(2906,`value`),lg(),mN(2907,` da `),Ml(2908,`a`,103)(2909,`code`),mN(2910,`PoTableColumnIcon`),lg()(),mN(2911,`, por exemplo:`),lg(),Ml(2912,`pre`)(2913,`code`),mN(2914,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),lg()(),Ml(2915,`pre`)(2916,`code`),mN(2917,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),lg()()()(),Ml(2918,`tr`,17)(2919,`td`,18)(2920,`div`,19)(2921,`span`,20),mN(2922,` label`),ql(2923,`br`),lg()()(),Ml(2924,`td`,21)(2925,`code`,31),mN(2926,`string`),lg()(),Ml(2927,`td`,24)(2928,`em`)(2929,`strong`),mN(2930,`(opcional)`),lg()(),Ml(2931,`p`),mN(2932,`Texto para título da coluna.`),lg(),Ml(2933,`p`),mN(2934,`Caso não seja informado, será utilizado como `),Ml(2935,`em`),mN(2936,`label`),lg(),mN(2937,` o valor da propriedade `),Ml(2938,`em`),mN(2939,`property`),lg(),mN(2940,` com a primeira letra em maiúsculo.`),lg()()(),Ml(2941,`tr`,17)(2942,`td`,18)(2943,`div`,19)(2944,`span`,20),mN(2945,` labels`),ql(2946,`br`),lg()()(),Ml(2947,`td`,21)(2948,`code`,104),mN(2949,`Array<PoTableColumnLabel>`),lg()(),Ml(2950,`td`,24)(2951,`em`)(2952,`strong`),mN(2953,`(opcional)`),lg()(),Ml(2954,`p`),mN(2955,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Ml(2956,`code`),mN(2957,`PoTableColumnLabel`),lg(),mN(2958,` na qual devem ser definidas os labels. Por exemplo:`),lg(),Ml(2959,`pre`)(2960,`code`),mN(2961,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),lg()()()(),Ml(2962,`tr`,17)(2963,`td`,18)(2964,`div`,19)(2965,`span`,20),mN(2966,` link`),ql(2967,`br`),lg()()(),Ml(2968,`td`,21)(2969,`code`,31),mN(2970,`string`),lg()(),Ml(2971,`td`,24)(2972,`em`)(2973,`strong`),mN(2974,`(opcional)`),lg()(),Ml(2975,`p`),mN(2976,`Define o nome da propriedade que conterá o `),Ml(2977,`code`),mN(2978,`link`),lg(),mN(2979,` a ser redirecionado.`),lg()()(),Ml(2980,`tr`,17)(2981,`td`,18)(2982,`div`,19)(2983,`span`,20),mN(2984,` mask`),ql(2985,`br`),lg()()(),Ml(2986,`td`,21)(2987,`code`,31),mN(2988,`string`),lg()(),Ml(2989,`td`,24)(2990,`em`)(2991,`strong`),mN(2992,`(opcional)`),lg()(),Ml(2993,`p`),mN(2994,`Define uma máscara para formatação do valor exibido na coluna.`),lg(),Ml(2995,`p`),mN(2996,`A máscara é aplicada somente para `),Ml(2997,`strong`),mN(2998,`exibição`),lg(),mN(2999,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),lg(),Ml(3e3,`p`),mN(3001,`Caracteres válidos para a máscara:`),lg(),Ml(3002,`ul`)(3003,`li`)(3004,`code`),mN(3005,`9`),lg(),mN(3006,` : aceita um dígito numérico (0-9).`),lg(),Ml(3007,`li`)(3008,`code`),mN(3009,`@`),lg(),mN(3010,` : aceita um caractere alfabético (a-z, A-Z).`),lg(),Ml(3011,`li`)(3012,`code`),mN(3013,`w`),lg(),mN(3014,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),lg(),Ml(3015,`li`),mN(3016,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Ml(3017,`code`),mN(3018,`.`),lg(),mN(3019,`, `),Ml(3020,`code`),mN(3021,`-`),lg(),mN(3022,`, `),Ml(3023,`code`),mN(3024,`/`),lg(),mN(3025,`, `),Ml(3026,`code`),mN(3027,`(`),lg(),mN(3028,`, `),Ml(3029,`code`),mN(3030,`)`),lg(),mN(3031,`, `),Ml(3032,`code`),mN(3033,`+`),lg(),mN(3034,`, `),ql(3035,`code`),mN(3036,`).`),lg()(),Ml(3037,`p`),mN(3038,`Exemplos de uso:`),lg(),Ml(3039,`pre`)(3040,`code`),mN(3041,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),lg()(),Ml(3042,`blockquote`)(3043,`p`),mN(3044,`Esta propriedade é utilizada apenas para colunas do tipo `),Ml(3045,`code`),mN(3046,`string`),lg(),mN(3047,` (padr\xE3o).
Caso a coluna possua um `),Ml(3048,`code`),mN(3049,`type`),lg(),mN(3050,` diferente de `),Ml(3051,`code`),mN(3052,`string`),lg(),mN(3053,`, a máscara será ignorada.`),lg()()()(),Ml(3054,`tr`,17)(3055,`td`,18)(3056,`div`,19)(3057,`span`,20),mN(3058,` property`),ql(3059,`br`),lg()()(),Ml(3060,`td`,21)(3061,`code`,31),mN(3062,`string`),lg()(),Ml(3063,`td`,24)(3064,`em`)(3065,`strong`),mN(3066,`(opcional)`),lg()(),Ml(3067,`p`),mN(3068,`Nome identificador da coluna. Também permite objetos aninhados conforme exemplo abaixo.`),lg(),Ml(3069,`pre`)(3070,`code`),mN(3071,`{ property: 'address.street', label: 'Rua' }
`),lg()()()(),Ml(3072,`tr`,17)(3073,`td`,18)(3074,`div`,19)(3075,`span`,20),mN(3076,` searchAiIgnore`),ql(3077,`br`),lg()()(),Ml(3078,`td`,21)(3079,`code`,22),mN(3080,`boolean`),lg()(),Ml(3081,`td`,24)(3082,`em`)(3083,`strong`),mN(3084,`(opcional)`),lg()(),Ml(3085,`p`),mN(3086,`Quando `),Ml(3087,`code`),mN(3088,`true`),lg(),mN(3089,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),Ml(3090,`code`),mN(3091,`p-search-ai-field`),lg(),mN(3092,`, independentemente de estar visível na tabela.`),lg(),Ml(3093,`p`),mN(3094,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),lg()()(),Ml(3095,`tr`,17)(3096,`td`,18)(3097,`div`,19)(3098,`span`,20),mN(3099,` sortable`),ql(3100,`br`),lg()()(),Ml(3101,`td`,21)(3102,`code`,22),mN(3103,`boolean`),lg()(),Ml(3104,`td`,24)(3105,`em`)(3106,`strong`),mN(3107,`(opcional)`),lg()(),Ml(3108,`p`),mN(3109,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),lg()()(),Ml(3110,`tr`,17)(3111,`td`,18)(3112,`div`,19)(3113,`span`,20),mN(3114,` subtitles`),ql(3115,`br`),lg()()(),Ml(3116,`td`,21)(3117,`code`,105),mN(3118,`Array<PoTableSubtitleColumn>`),lg()(),Ml(3119,`td`,24)(3120,`em`)(3121,`strong`),mN(3122,`(opcional)`),lg()(),Ml(3123,`p`),mN(3124,`Define um array de objetos para as colunas de legenda. Onde, `),Ml(3125,`code`),mN(3126,`subtitles`),lg(),mN(3127,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),lg(),Ml(3128,`pre`)(3129,`code`),mN(3130,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),lg()(),Ml(3131,`p`),mN(3132,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),lg()()(),Ml(3133,`tr`,17)(3134,`td`,18)(3135,`div`,19)(3136,`span`,20),mN(3137,` tooltip`),ql(3138,`br`),lg()()(),Ml(3139,`td`,21)(3140,`code`,31),mN(3141,`string`),lg()(),Ml(3142,`td`,24)(3143,`em`)(3144,`strong`),mN(3145,`(opcional)`),lg()(),Ml(3146,`p`),mN(3147,`Define um texto de ajuda que será exibido ao passar o `),Ml(3148,`em`),mN(3149,`mouse`),lg(),mN(3150,` sobre um texto.`),lg(),Ml(3151,`blockquote`)(3152,`p`),mN(3153,`O tooltip só será visível se for uma coluna do tipo `),Ml(3154,`em`),mN(3155,`link`),lg(),mN(3156,`.`),lg()(),Ml(3157,`blockquote`)(3158,`p`),mN(3159,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Ml(3160,`em`),mN(3161,`tooltip`),lg(),mN(3162,` e será exibido justamente o conteúdo da célula.`),lg()()()(),Ml(3163,`tr`,17)(3164,`td`,18)(3165,`div`,19)(3166,`span`,20),mN(3167,` type`),ql(3168,`br`),lg()()(),Ml(3169,`td`,21)(3170,`code`,31),mN(3171,`string`),lg()(),Ml(3172,`td`,24)(3173,`em`)(3174,`strong`),mN(3175,`(opcional)`),lg()(),Ml(3176,`p`),mN(3177,`Tipo da coluna.`),lg(),Ml(3178,`p`),mN(3179,`Valores válidos:`),lg(),Ml(3180,`ul`)(3181,`li`)(3182,`p`)(3183,`code`),mN(3184,`boolean`),lg(),mN(3185,`: Exibirá por padrão `),Ml(3186,`code`),mN(3187,`Sim`),lg(),mN(3188,` e `),Ml(3189,`code`),mN(3190,`Não`),lg(),mN(3191,` de acordo com os valores `),Ml(3192,`em`),mN(3193,`booleanos`),lg(),mN(3194,`.`),lg(),Ml(3195,`blockquote`)(3196,`p`),mN(3197,`Caso necessite exibir valores diferentes do padrão, deve-se utilizar a propriedade `),Ml(3198,`code`),mN(3199,`boolean`),lg(),mN(3200,` desta interface.`),lg()()(),Ml(3201,`li`)(3202,`p`)(3203,`code`),mN(3204,`currency`),lg(),mN(3205,`: valores monetários.`),lg()(),Ml(3206,`li`)(3207,`p`)(3208,`code`),mN(3209,`date`),lg(),mN(3210,`: valor de datas.`),lg(),Ml(3211,`ul`)(3212,`li`),mN(3213,`Aceita os tipos `),Ml(3214,`em`),mN(3215,`string`),lg(),mN(3216,` e `),Ml(3217,`em`),mN(3218,`Date`),lg(),mN(3219,` padr\xE3o do Javascript,
por exemplo: `),Ml(3220,`code`),mN(3221,`'2017-11-28'`),lg(),mN(3222,` ou `),Ml(3223,`code`),mN(3224,`new Date(2017, 10, 28)`),lg(),mN(3225,`.`),lg()()(),Ml(3226,`li`)(3227,`p`)(3228,`code`),mN(3229,`dateTime`),lg(),mN(3230,`: valor de data com horário.`),lg(),Ml(3231,`ul`)(3232,`li`),mN(3233,`Aceita o tipo `),Ml(3234,`em`),mN(3235,`string`),lg(),mN(3236,` no formato `),Ml(3237,`strong`),mN(3238,`ISO-8601`),lg(),mN(3239,` extendido `),Ml(3240,`strong`),mN(3241,`'yyyy-mm-ddTHH:mm:ss+|-hh:mm'`),lg(),mN(3242,`
ou `),Ml(3243,`strong`),mN(3244,`'yyyy-mm-ddTHH:mm+|-hh:mm'`),lg(),mN(3245,` (sem segundos),
e o tipo `),Ml(3246,`em`),mN(3247,`Date`),lg(),mN(3248,` padrão do Javascript, por exemplo: `),Ml(3249,`code`),mN(3250,`'2017-11-28T00:00:00-02:00'`),lg(),mN(3251,`, `),Ml(3252,`code`),mN(3253,`'2017-11-28T14:30-02:00'`),lg(),mN(3254,` ou `),Ml(3255,`code`),mN(3256,`new Date(2017, 10, 28)`),lg(),mN(3257,`.`),lg(),Ml(3258,`li`),mN(3259,`A formatação de exibição pode ser configurada pela propriedade `),Ml(3260,`code`),mN(3261,`format`),lg(),mN(3262,`.`),lg()()(),Ml(3263,`li`)(3264,`p`)(3265,`code`),mN(3266,`detail`),lg(),mN(3267,`: array de objetos para o master-detail.`),lg(),Ml(3268,`ul`)(3269,`li`),mN(3270,`Incompatível com `),Ml(3271,`code`),mN(3272,`virtual-scroll`),lg(),mN(3273,`, que requer altura fixa nas linhas.`),lg()()(),Ml(3274,`li`)(3275,`p`)(3276,`code`),mN(3277,`icon`),lg(),mN(3278,`: `),Ml(3279,`em`),mN(3280,`array`),lg(),mN(3281,` de `),Ml(3282,`em`),mN(3283,`string`),lg(),mN(3284,` ou objetos para a coluna de ícones.`),lg()(),Ml(3285,`li`)(3286,`p`)(3287,`code`),mN(3288,`label`),lg(),mN(3289,`: texto com destaque.`),lg()(),Ml(3290,`li`)(3291,`p`)(3292,`code`),mN(3293,`link`),lg(),mN(3294,`: habilita link na coluna para ação ou navegação.`),lg()(),Ml(3295,`li`)(3296,`p`)(3297,`code`),mN(3298,`number`),lg(),mN(3299,`: valores numéricos.`),lg()(),Ml(3300,`li`)(3301,`p`)(3302,`code`),mN(3303,`string`),lg(),mN(3304,`: textos.`),lg()(),Ml(3305,`li`)(3306,`p`)(3307,`code`),mN(3308,`subtitle`),lg(),mN(3309,`: array de objetos para a coluna de legenda.`),lg()(),Ml(3310,`li`)(3311,`p`)(3312,`code`),mN(3313,`time`),lg(),mN(3314,`: valor de horário.`),lg(),Ml(3315,`ul`)(3316,`li`),mN(3317,`Aceita o tipo `),Ml(3318,`em`),mN(3319,`string`),lg(),mN(3320,` nos formatos `),Ml(3321,`strong`),mN(3322,`'HH:mm:ss'`),lg(),mN(3323,` ou `),Ml(3324,`strong`),mN(3325,`'HH:mm:ss.ffffff'`),lg(),mN(3326,`, por exemplo: `),Ml(3327,`code`),mN(3328,`'23:12:45'`),lg(),mN(3329,`.`),lg()()(),Ml(3330,`li`)(3331,`p`)(3332,`code`),mN(3333,`cellTemplate`),lg(),mN(3334,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Ml(3335,`a`,8),mN(3336,`PoTableCellTemplate`),lg(),mN(3337,`.`),lg()(),Ml(3338,`li`)(3339,`p`)(3340,`code`),mN(3341,`columnTemplate`),lg(),mN(3342,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Ml(3343,`a`,7),mN(3344,`PoTableColumnTemplate`),lg(),mN(3345,`.`),lg()()()()(),Ml(3346,`tr`,17)(3347,`td`,18)(3348,`div`,19)(3349,`span`,20),mN(3350,` visible`),ql(3351,`br`),lg()()(),Ml(3352,`td`,21)(3353,`code`,22),mN(3354,`boolean`),lg()(),Ml(3355,`td`,24)(3356,`em`)(3357,`strong`),mN(3358,`(opcional)`),lg()(),Ml(3359,`p`),mN(3360,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Ml(3361,`strong`),mN(3362,`gerenciador de colunas`),lg(),mN(3363,`.`),lg(),Ml(3364,`blockquote`)(3365,`p`),mN(3366,`A disponibilidade de visualização pode limitar-se de acordo com a definição de `),Ml(3367,`code`),mN(3368,`p-max-columns`),lg(),mN(3369,`.`),lg()()()(),Ml(3370,`tr`,17)(3371,`td`,18)(3372,`div`,19)(3373,`span`,20),mN(3374,` width`),ql(3375,`br`),lg()()(),Ml(3376,`td`,21)(3377,`code`,31),mN(3378,`string`),lg()(),Ml(3379,`td`,24)(3380,`em`)(3381,`strong`),mN(3382,`(opcional)`),lg()(),Ml(3383,`p`),mN(3384,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),lg(),Ml(3385,`ul`)(3386,`li`),mN(3387,`para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px`),lg(),Ml(3388,`li`),mN(3389,`para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px`),lg()()()()(),Ml(3390,`h4`,46)(3391,`code`,5),mN(3392,`PoTableLiterals`),lg()(),Ml(3393,`div`,2)(3394,`p`),mN(3395,`Interface para definição das literais usadas no `),Ml(3396,`code`),mN(3397,`po-table`),lg(),mN(3398,`.`),lg()(),Ml(3399,`h4`,13),mN(3400,`Propriedades`),lg(),Ml(3401,`table`,14)(3402,`tr`,15)(3403,`th`,16),mN(3404,`Nome`),lg(),Ml(3405,`th`,16),mN(3406,`Tipo`),lg(),Ml(3407,`th`,16),mN(3408,`Descrição`),lg()(),Ml(3409,`tr`,17)(3410,`td`,18)(3411,`div`,19)(3412,`span`,20),mN(3413,` bodyDelete`),ql(3414,`br`),lg()()(),Ml(3415,`td`,21)(3416,`code`,31),mN(3417,`string`),lg()(),Ml(3418,`td`,24)(3419,`em`)(3420,`strong`),mN(3421,`(opcional)`),lg()(),Ml(3422,`p`),mN(3423,`Texto no corpo do Modal de exclusão`),lg()()(),Ml(3424,`tr`,17)(3425,`td`,18)(3426,`div`,19)(3427,`span`,20),mN(3428,` cancel`),ql(3429,`br`),lg()()(),Ml(3430,`td`,21)(3431,`code`,31),mN(3432,`string`),lg()(),Ml(3433,`td`,24)(3434,`em`)(3435,`strong`),mN(3436,`(opcional)`),lg()(),Ml(3437,`p`),mN(3438,`Texto no Modal para cancelar a exclusão`),lg()()(),Ml(3439,`tr`,17)(3440,`td`,18)(3441,`div`,19)(3442,`span`,20),mN(3443,` columnsManager`),ql(3444,`br`),lg()()(),Ml(3445,`td`,21)(3446,`code`,31),mN(3447,`string`),lg()(),Ml(3448,`td`,24)(3449,`em`)(3450,`strong`),mN(3451,`(opcional)`),lg()(),Ml(3452,`p`),mN(3453,`Texto do `),Ml(3454,`strong`),mN(3455,`Gerenciador de colunas`),lg(),mN(3456,` localizado no canto superior direito da tabela.`),lg()()(),Ml(3457,`tr`,17)(3458,`td`,18)(3459,`div`,19)(3460,`span`,20),mN(3461,` completeSubtitle`),ql(3462,`br`),lg()()(),Ml(3463,`td`,21)(3464,`code`,31),mN(3465,`string`),lg()(),Ml(3466,`td`,24)(3467,`em`)(3468,`strong`),mN(3469,`(opcional)`),lg()(),Ml(3470,`p`),mN(3471,`Título da modal 'Legenda completa' que aparece ao clicar no botão 'Ver legenda completa'.`),lg()()(),Ml(3472,`tr`,17)(3473,`td`,18)(3474,`div`,19)(3475,`span`,20),mN(3476,` delete`),ql(3477,`br`),lg()()(),Ml(3478,`td`,21)(3479,`code`,31),mN(3480,`string`),lg()(),Ml(3481,`td`,24)(3482,`em`)(3483,`strong`),mN(3484,`(opcional)`),lg()(),Ml(3485,`p`),mN(3486,`Texto no Modal para confirmar a exclusão`),lg()()(),Ml(3487,`tr`,17)(3488,`td`,18)(3489,`div`,19)(3490,`span`,20),mN(3491,` deleteApiError`),ql(3492,`br`),lg()()(),Ml(3493,`td`,21)(3494,`code`,31),mN(3495,`string`),lg()(),Ml(3496,`td`,24)(3497,`em`)(3498,`strong`),mN(3499,`(opcional)`),lg()(),Ml(3500,`p`),mN(3501,`Texto de notificação de erro na requisição Delete`),lg()()(),Ml(3502,`tr`,17)(3503,`td`,18)(3504,`div`,19)(3505,`span`,20),mN(3506,` deleteSuccessful`),ql(3507,`br`),lg()()(),Ml(3508,`td`,21)(3509,`code`,31),mN(3510,`string`),lg()(),Ml(3511,`td`,24)(3512,`em`)(3513,`strong`),mN(3514,`(opcional)`),lg()(),Ml(3515,`p`),mN(3516,`Texto de notificação de remoção com sucesso`),lg()()(),Ml(3517,`tr`,17)(3518,`td`,18)(3519,`div`,19)(3520,`span`,20),mN(3521,` loadMoreData`),ql(3522,`br`),lg()()(),Ml(3523,`td`,21)(3524,`code`,31),mN(3525,`string`),lg()(),Ml(3526,`td`,24)(3527,`em`)(3528,`strong`),mN(3529,`(opcional)`),lg()(),Ml(3530,`p`),mN(3531,`Texto do botão de `),Ml(3532,`strong`),mN(3533,`Carregar mais resultados`),lg(),mN(3534,` localizado no rodapé da tabela.`),lg()()(),Ml(3535,`tr`,17)(3536,`td`,18)(3537,`div`,19)(3538,`span`,20),mN(3539,` loadingData`),ql(3540,`br`),lg()()(),Ml(3541,`td`,21)(3542,`code`,31),mN(3543,`string`),lg()(),Ml(3544,`td`,24)(3545,`em`)(3546,`strong`),mN(3547,`(opcional)`),lg()(),Ml(3548,`p`),mN(3549,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),lg()()(),Ml(3550,`tr`,17)(3551,`td`,18)(3552,`div`,19)(3553,`span`,20),mN(3554,` multipleItems`),ql(3555,`br`),lg()()(),Ml(3556,`td`,21)(3557,`code`,31),mN(3558,`string`),lg()(),Ml(3559,`td`,24)(3560,`em`)(3561,`strong`),mN(3562,`(opcional)`),lg()(),Ml(3563,`p`),mN(3564,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),lg()()(),Ml(3565,`tr`,17)(3566,`td`,18)(3567,`div`,19)(3568,`span`,20),mN(3569,` noColumns`),ql(3570,`br`),lg()()(),Ml(3571,`td`,21)(3572,`code`,31),mN(3573,`string`),lg()(),Ml(3574,`td`,24)(3575,`em`)(3576,`strong`),mN(3577,`(opcional)`),lg()(),Ml(3578,`p`),mN(3579,`Texto exibido quando não existem colunas definidas para a tabela.`),lg()()(),Ml(3580,`tr`,17)(3581,`td`,18)(3582,`div`,19)(3583,`span`,20),mN(3584,` noData`),ql(3585,`br`),lg()()(),Ml(3586,`td`,21)(3587,`code`,31),mN(3588,`string`),lg()(),Ml(3589,`td`,24)(3590,`em`)(3591,`strong`),mN(3592,`(opcional)`),lg()(),Ml(3593,`p`),mN(3594,`Texto exibido quando não existem itens para serem exibidos na tabela.`),lg()()(),Ml(3595,`tr`,17)(3596,`td`,18)(3597,`div`,19)(3598,`span`,20),mN(3599,` noItem`),ql(3600,`br`),lg()()(),Ml(3601,`td`,21)(3602,`code`,31),mN(3603,`string`),lg()(),Ml(3604,`td`,24)(3605,`em`)(3606,`strong`),mN(3607,`(opcional)`),lg()(),Ml(3608,`p`),mN(3609,`Texto exibido quando nenhum item for selecionado no checkbox.`),lg()()(),Ml(3610,`tr`,17)(3611,`td`,18)(3612,`div`,19)(3613,`span`,20),mN(3614,` noVisibleColumn`),ql(3615,`br`),lg()()(),Ml(3616,`td`,21)(3617,`code`,31),mN(3618,`string`),lg()(),Ml(3619,`td`,24)(3620,`em`)(3621,`strong`),mN(3622,`(opcional)`),lg()(),Ml(3623,`p`),mN(3624,`Texto exibido quando não existem colunas visíveis para a tabela.`),lg()()(),Ml(3625,`tr`,17)(3626,`td`,18)(3627,`div`,19)(3628,`span`,20),mN(3629,` oneItem`),ql(3630,`br`),lg()()(),Ml(3631,`td`,21)(3632,`code`,31),mN(3633,`string`),lg()(),Ml(3634,`td`,24)(3635,`em`)(3636,`strong`),mN(3637,`(opcional)`),lg()(),Ml(3638,`p`),mN(3639,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),lg()()(),Ml(3640,`tr`,17)(3641,`td`,18)(3642,`div`,19)(3643,`span`,20),mN(3644,` searchAiPlaceholder`),ql(3645,`br`),lg()()(),Ml(3646,`td`,21)(3647,`code`,31),mN(3648,`string`),lg()(),Ml(3649,`td`,24)(3650,`em`)(3651,`strong`),mN(3652,`(opcional)`),lg()(),Ml(3653,`p`),mN(3654,`Texto exibido como placeholder padrão no campo de busca por IA (`),Ml(3655,`code`),mN(3656,`p-search-ai-field`),lg(),mN(3657,`) quando nenhum `),Ml(3658,`code`),mN(3659,`placeholder`),lg(),mN(3660,` é informado.`),lg()()(),Ml(3661,`tr`,17)(3662,`td`,18)(3663,`div`,19)(3664,`span`,20),mN(3665,` seeCompleteSubtitle`),ql(3666,`br`),lg()()(),Ml(3667,`td`,21)(3668,`code`,31),mN(3669,`string`),lg()(),Ml(3670,`td`,24)(3671,`em`)(3672,`strong`),mN(3673,`(opcional)`),lg()(),Ml(3674,`p`),mN(3675,`Texto do botão `),Ml(3676,`strong`),mN(3677,`Ver legenda completa`),lg(),mN(3678,` que aparece quando o rodapé de legendas é maior que a tabela.`),lg()()()(),Ml(3679,`h4`,46)(3680,`code`,5),mN(3681,`PoTableSearchAiField`),lg()(),Ml(3682,`div`,2)(3683,`p`),mN(3684,`Interface de configuração da busca por IA integrada ao `),Ml(3685,`code`),mN(3686,`po-table`),lg(),mN(3687,`, utilizada pela
propriedade `),Ml(3688,`code`),mN(3689,`p-search-ai-field`),lg(),mN(3690,`.`),lg(),Ml(3691,`p`),mN(3692,`Quando configurada, a tabela renderiza um campo `),Ml(3693,`code`),mN(3694,`po-search-ai`),lg(),mN(3695,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),Ml(3696,`code`),mN(3697,`po-search`),lg(),mN(3698,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),Ml(3699,`code`),mN(3700,`apply`),lg(),mN(3701,`.`),lg(),Ml(3702,`h4`),mN(3703,`Endpoint de IA (`),Ml(3704,`code`),mN(3705,`url`),lg(),mN(3706,`)`),lg(),Ml(3707,`p`),mN(3708,`O campo `),Ml(3709,`code`),mN(3710,`url`),lg(),mN(3711,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),Ml(3712,`code`),mN(3713,`po-search-ai`),lg(),mN(3714,`: recebe `),Ml(3715,`code`),mN(3716,`{ query, columns }`),lg(),mN(3717,` via `),Ml(3718,`code`),mN(3719,`POST`),lg(),mN(3720,` e responde com
`),Ml(3721,`code`),mN(3722,`{ filter, description, confidence }`),lg(),mN(3723,`.`),lg(),Ml(3724,`blockquote`)(3725,`p`),mN(3726,`A integração com a LLM e a guarda de chaves devem ocorrer `),Ml(3727,`strong`),mN(3728,`no backend`),lg(),mN(3729,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),Ml(3730,`a`,40)(3731,`code`),mN(3732,`po-sample-api`),lg()(),mN(3733,`.`),lg()(),Ml(3734,`h4`),mN(3735,`Colunas enviadas à IA`),lg(),Ml(3736,`p`),mN(3737,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),Ml(3738,`code`),mN(3739,`p-columns`),lg(),mN(3740,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),Ml(3741,`code`),mN(3742,`searchAiIgnore: true`),lg(),mN(3743,`. O campo `),Ml(3744,`code`),mN(3745,`columns`),lg(),mN(3746,` permite sobrescrever esse comportamento.`),lg(),Ml(3747,`h4`),mN(3748,`Estratégia de aplicação do filtro (`),Ml(3749,`code`),mN(3750,`apply`),lg(),mN(3751,`)`),lg(),Ml(3752,`table`)(3753,`thead`)(3754,`tr`)(3755,`th`),mN(3756,`Valor`),lg(),Ml(3757,`th`),mN(3758,`Comportamento`),lg()()(),Ml(3759,`tbody`)(3760,`tr`)(3761,`td`)(3762,`code`),mN(3763,`'auto'`),lg(),mN(3764,` (padrão)`),lg(),Ml(3765,`td`),mN(3766,`Modo serviço: envia `),Ml(3767,`code`),mN(3768,`$filter`),lg(),mN(3769,` ao `),Ml(3770,`code`),mN(3771,`p-service-api`),lg(),mN(3772,`; modo local: aplica o parser OData interno sobre `),Ml(3773,`code`),mN(3774,`p-items`),lg(),mN(3775,`.`),lg()(),Ml(3776,`tr`)(3777,`td`)(3778,`code`),mN(3779,`'parser'`),lg()(),Ml(3780,`td`),mN(3781,`Sempre usa o parser OData interno. No modo serviço, busca todos os dados e filtra localmente.`),lg()(),Ml(3782,`tr`)(3783,`td`)(3784,`code`),mN(3785,`'server'`),lg()(),Ml(3786,`td`),mN(3787,`Sempre delega o filtro ao `),Ml(3788,`code`),mN(3789,`p-service-api`),lg(),mN(3790,` via `),Ml(3791,`code`),mN(3792,`$filter`),lg(),mN(3793,`.`),lg()(),Ml(3794,`tr`)(3795,`td`)(3796,`code`),mN(3797,`'none'`),lg()(),Ml(3798,`td`),mN(3799,`Não aplica o filtro; apenas emite `),Ml(3800,`code`),mN(3801,`p-search-ai-result`),lg(),mN(3802,` para o desenvolvedor tratar.`),lg()(),Ml(3803,`tr`)(3804,`td`)(3805,`code`),mN(3806,`(result) => void`),lg()(),Ml(3807,`td`),mN(3808,`Override total: o desenvolvedor recebe o resultado e assume o controle.`),lg()()()()(),Ml(3809,`h4`,13),mN(3810,`Propriedades`),lg(),Ml(3811,`table`,14)(3812,`tr`,15)(3813,`th`,16),mN(3814,`Nome`),lg(),Ml(3815,`th`,16),mN(3816,`Tipo`),lg(),Ml(3817,`th`,16),mN(3818,`Descrição`),lg()(),Ml(3819,`tr`,17)(3820,`td`,18)(3821,`div`,19)(3822,`span`,20),mN(3823,` apply`),ql(3824,`br`),lg()()(),Ml(3825,`td`,21)(3826,`code`,106),mN(3827,`'auto' `),lg(),Ml(3828,`code`,107),mN(3829,` 'parser' `),lg(),Ml(3830,`code`,108),mN(3831,` 'server' `),lg(),Ml(3832,`code`,109),mN(3833,` 'none' `),lg(),Ml(3834,`code`,110),mN(3835,` ((result: PoSearchAiResult) => void)`),lg()(),Ml(3836,`td`,24)(3837,`em`)(3838,`strong`),mN(3839,`(opcional)`),lg()(),Ml(3840,`p`),mN(3841,`Define como o filtro OData retornado pela IA é aplicado à tabela.`),lg(),Ml(3842,`ul`)(3843,`li`)(3844,`code`),mN(3845,`'auto'`),lg(),Ml(3846,`em`),mN(3847,`(padrão)`),lg(),mN(3848,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),Ml(3849,`code`),mN(3850,`$filter`),lg(),mN(3851,` ao `),Ml(3852,`code`),mN(3853,`p-service-api`),lg(),mN(3854,`; modo local usa o parser
OData interno sobre `),Ml(3855,`code`),mN(3856,`p-items`),lg(),mN(3857,`.`),lg(),Ml(3858,`li`)(3859,`code`),mN(3860,`'parser'`),lg(),mN(3861,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),lg(),Ml(3862,`li`)(3863,`code`),mN(3864,`'server'`),lg(),mN(3865,`: sempre envia `),Ml(3866,`code`),mN(3867,`$filter`),lg(),mN(3868,` ao `),Ml(3869,`code`),mN(3870,`p-service-api`),lg(),mN(3871,`, independentemente
do modo da tabela.`),lg(),Ml(3872,`li`)(3873,`code`),mN(3874,`'none'`),lg(),mN(3875,`: não aplica o filtro; apenas emite `),Ml(3876,`code`),mN(3877,`p-search-ai-result`),lg(),mN(3878,`.`),lg(),Ml(3879,`li`)(3880,`code`),mN(3881,`(result: PoSearchAiResult) => void`),lg(),mN(3882,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),lg()()()(),Ml(3883,`tr`,17)(3884,`td`,18)(3885,`div`,19)(3886,`span`,20),mN(3887,` columns`),ql(3888,`br`),lg()()(),Ml(3889,`td`,21)(3890,`code`,111),mN(3891,`Array<PoSearchAiColumn>`),lg()(),Ml(3892,`td`,24)(3893,`em`)(3894,`strong`),mN(3895,`(opcional)`),lg()(),Ml(3896,`p`),mN(3897,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),Ml(3898,`code`),mN(3899,`p-columns`),lg(),mN(3900,` da tabela, excluindo colunas com
`),Ml(3901,`code`),mN(3902,`visible: false`),lg(),mN(3903,` ou `),Ml(3904,`code`),mN(3905,`searchAiIgnore: true`),lg(),mN(3906,`.`),lg()()(),Ml(3907,`tr`,17)(3908,`td`,18)(3909,`div`,19)(3910,`span`,20),mN(3911,` literals`),ql(3912,`br`),lg()()(),Ml(3913,`td`,21)(3914,`code`,112),mN(3915,`PoSearchAiLiterals`),lg()(),Ml(3916,`td`,24)(3917,`em`)(3918,`strong`),mN(3919,`(opcional)`),lg()(),Ml(3920,`p`),mN(3921,`Objeto com os literais usados pelo `),Ml(3922,`code`),mN(3923,`po-search-ai`),lg(),mN(3924,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),lg()()(),Ml(3925,`tr`,17)(3926,`td`,18)(3927,`div`,19)(3928,`span`,20),mN(3929,` minConfidence`),ql(3930,`br`),lg()()(),Ml(3931,`td`,21)(3932,`code`,35),mN(3933,`number`),lg()(),Ml(3934,`td`,24)(3935,`em`)(3936,`strong`),mN(3937,`(opcional)`),lg()(),Ml(3938,`p`),mN(3939,`Nível mínimo de confiança (`),Ml(3940,`code`),mN(3941,`0.0`),lg(),mN(3942,` a `),Ml(3943,`code`),mN(3944,`1.0`),lg(),mN(3945,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),Ml(3946,`code`),mN(3947,`p-search-ai-low-confidence`),lg(),mN(3948,` é emitido em vez de `),Ml(3949,`code`),mN(3950,`p-search-ai-result`),lg(),mN(3951,`.`),lg()()(),Ml(3952,`tr`,17)(3953,`td`,18)(3954,`div`,19)(3955,`span`,20),mN(3956,` placeholder`),ql(3957,`br`),lg()()(),Ml(3958,`td`,21)(3959,`code`,31),mN(3960,`string`),lg()(),Ml(3961,`td`,24)(3962,`em`)(3963,`strong`),mN(3964,`(opcional)`),lg()(),Ml(3965,`p`),mN(3966,`Texto exibido como placeholder no campo de busca por IA.`),lg()()(),Ml(3967,`tr`,17)(3968,`td`,18)(3969,`div`,19)(3970,`span`,20),mN(3971,` timeout`),ql(3972,`br`),lg()()(),Ml(3973,`td`,21)(3974,`code`,35),mN(3975,`number`),lg()(),Ml(3976,`td`,24)(3977,`em`)(3978,`strong`),mN(3979,`(opcional)`),lg()(),Ml(3980,`p`),mN(3981,`Tempo máximo de espera (em milissegundos) pela resposta do endpoint de IA.`),lg()()(),Ml(3982,`tr`,17)(3983,`td`,18)(3984,`div`,19)(3985,`span`,20),mN(3986,` url`),ql(3987,`br`),lg()()(),Ml(3988,`td`,21)(3989,`code`,31),mN(3990,`string`),lg()(),Ml(3991,`td`,24)(3992,`p`),mN(3993,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),Ml(3994,`code`),mN(3995,`po-search-ai`),lg(),mN(3996,` via `),Ml(3997,`code`),mN(3998,`p-url`),lg(),mN(3999,`.`),lg(),Ml(4e3,`p`),mN(4001,`O endpoint deve seguir o contrato do backend de referência (`),Ml(4002,`code`),mN(4003,`po-sample-api`),lg(),mN(4004,`):`),lg(),Ml(4005,`ul`)(4006,`li`),mN(4007,`Recebe: `),Ml(4008,`code`),mN(4009,`POST { query: string, columns: PoSearchAiColumn[] }`),lg()(),Ml(4010,`li`),mN(4011,`Responde: `),Ml(4012,`code`),mN(4013,`{ filter: string, description: string, confidence: number }`),lg()()()()()(),Ml(4014,`h4`,46)(4015,`code`,5),mN(4016,`PoTableColumnIcon`),lg()(),Ml(4017,`div`,2)(4018,`p`),ql(4019,`a`,113),lg(),Ml(4020,`p`),mN(4021,`Interface que define a coluna com ícone(s) do `),Ml(4022,`code`),mN(4023,`po-table`),lg(),mN(4024,`.`),lg()(),Ml(4025,`h4`,13),mN(4026,`Propriedades`),lg(),Ml(4027,`table`,14)(4028,`tr`,15)(4029,`th`,16),mN(4030,`Nome`),lg(),Ml(4031,`th`,16),mN(4032,`Tipo`),lg(),Ml(4033,`th`,16),mN(4034,`Descrição`),lg()(),Ml(4035,`tr`,17)(4036,`td`,18)(4037,`div`,19)(4038,`span`,20),mN(4039,` action`),ql(4040,`br`),lg()()(),Ml(4041,`td`,21)(4042,`code`,47),mN(4043,`Function`),lg()(),Ml(4044,`td`,24)(4045,`em`)(4046,`strong`),mN(4047,`(opcional)`),lg()(),Ml(4048,`p`),mN(4049,`Define a ação que será executada ao clicar no ícone.`),lg()()(),Ml(4050,`tr`,17)(4051,`td`,18)(4052,`div`,19)(4053,`span`,20),mN(4054,` color`),ql(4055,`br`),lg()()(),Ml(4056,`td`,21)(4057,`code`,31),mN(4058,`string `),lg(),Ml(4059,`code`,47),mN(4060,` Function`),lg()(),Ml(4061,`td`,24)(4062,`em`)(4063,`strong`),mN(4064,`(opcional)`),lg()(),Ml(4065,`p`),mN(4066,`Define a cor do ícone.`),lg(),Ml(4067,`p`),mN(4068,`Valores válidos:`),lg(),Ml(4069,`ul`)(4070,`li`),ql(4071,`span`,53),Ml(4072,`code`),mN(4073,`color-01`),lg()(),Ml(4074,`li`),ql(4075,`span`,54),Ml(4076,`code`),mN(4077,`color-02`),lg()(),Ml(4078,`li`),ql(4079,`span`,55),Ml(4080,`code`),mN(4081,`color-03`),lg()(),Ml(4082,`li`),ql(4083,`span`,56),Ml(4084,`code`),mN(4085,`color-04`),lg()(),Ml(4086,`li`),ql(4087,`span`,57),Ml(4088,`code`),mN(4089,`color-05`),lg()(),Ml(4090,`li`),ql(4091,`span`,58),Ml(4092,`code`),mN(4093,`color-06`),lg()(),Ml(4094,`li`),ql(4095,`span`,59),Ml(4096,`code`),mN(4097,`color-07`),lg()(),Ml(4098,`li`),ql(4099,`span`,60),Ml(4100,`code`),mN(4101,`color-08`),lg()(),Ml(4102,`li`),ql(4103,`span`,61),Ml(4104,`code`),mN(4105,`color-09`),lg()(),Ml(4106,`li`),ql(4107,`span`,62),Ml(4108,`code`),mN(4109,`color-10`),lg()(),Ml(4110,`li`),ql(4111,`span`,63),Ml(4112,`code`),mN(4113,`color-11`),lg()(),Ml(4114,`li`),ql(4115,`span`,64),Ml(4116,`code`),mN(4117,`color-12`),lg()()(),Ml(4118,`blockquote`)(4119,`p`),mN(4120,`Também é possível utilizar as 35 cores da paleta `),Ml(4121,`strong`),mN(4122,`Caption Tag Colors`),lg(),mN(4123,`:`),lg()(),Ml(4124,`ul`)(4125,`li`),ql(4126,`span`,65),Ml(4127,`code`),mN(4128,`caption-tag-01`),lg(),ql(4129,`span`,66),Ml(4130,`code`),mN(4131,`caption-tag-02`),lg(),ql(4132,`span`,67),Ml(4133,`code`),mN(4134,`caption-tag-03`),lg(),ql(4135,`span`,68),Ml(4136,`code`),mN(4137,`caption-tag-04`),lg(),ql(4138,`span`,69),Ml(4139,`code`),mN(4140,`caption-tag-05`),lg()(),Ml(4141,`li`),ql(4142,`span`,70),Ml(4143,`code`),mN(4144,`caption-tag-06`),lg(),ql(4145,`span`,71),Ml(4146,`code`),mN(4147,`caption-tag-07`),lg(),ql(4148,`span`,72),Ml(4149,`code`),mN(4150,`caption-tag-08`),lg(),ql(4151,`span`,73),Ml(4152,`code`),mN(4153,`caption-tag-09`),lg(),ql(4154,`span`,74),Ml(4155,`code`),mN(4156,`caption-tag-10`),lg()(),Ml(4157,`li`),ql(4158,`span`,75),Ml(4159,`code`),mN(4160,`caption-tag-11`),lg(),ql(4161,`span`,76),Ml(4162,`code`),mN(4163,`caption-tag-12`),lg(),ql(4164,`span`,77),Ml(4165,`code`),mN(4166,`caption-tag-13`),lg(),ql(4167,`span`,78),Ml(4168,`code`),mN(4169,`caption-tag-14`),lg(),ql(4170,`span`,79),Ml(4171,`code`),mN(4172,`caption-tag-15`),lg()(),Ml(4173,`li`),ql(4174,`span`,80),Ml(4175,`code`),mN(4176,`caption-tag-16`),lg(),ql(4177,`span`,81),Ml(4178,`code`),mN(4179,`caption-tag-17`),lg(),ql(4180,`span`,82),Ml(4181,`code`),mN(4182,`caption-tag-18`),lg(),ql(4183,`span`,83),Ml(4184,`code`),mN(4185,`caption-tag-19`),lg(),ql(4186,`span`,84),Ml(4187,`code`),mN(4188,`caption-tag-20`),lg()(),Ml(4189,`li`),ql(4190,`span`,85),Ml(4191,`code`),mN(4192,`caption-tag-21`),lg(),ql(4193,`span`,86),Ml(4194,`code`),mN(4195,`caption-tag-22`),lg(),ql(4196,`span`,87),Ml(4197,`code`),mN(4198,`caption-tag-23`),lg(),ql(4199,`span`,88),Ml(4200,`code`),mN(4201,`caption-tag-24`),lg(),ql(4202,`span`,89),Ml(4203,`code`),mN(4204,`caption-tag-25`),lg()(),Ml(4205,`li`),ql(4206,`span`,90),Ml(4207,`code`),mN(4208,`caption-tag-26`),lg(),ql(4209,`span`,91),Ml(4210,`code`),mN(4211,`caption-tag-27`),lg(),ql(4212,`span`,92),Ml(4213,`code`),mN(4214,`caption-tag-28`),lg(),ql(4215,`span`,93),Ml(4216,`code`),mN(4217,`caption-tag-29`),lg(),ql(4218,`span`,94),Ml(4219,`code`),mN(4220,`caption-tag-30`),lg()(),Ml(4221,`li`),ql(4222,`span`,95),Ml(4223,`code`),mN(4224,`caption-tag-31`),lg(),ql(4225,`span`,96),Ml(4226,`code`),mN(4227,`caption-tag-32`),lg(),ql(4228,`span`,97),Ml(4229,`code`),mN(4230,`caption-tag-33`),lg(),ql(4231,`span`,98),Ml(4232,`code`),mN(4233,`caption-tag-34`),lg(),ql(4234,`span`,99),Ml(4235,`code`),mN(4236,`caption-tag-35`),lg()()()()(),Ml(4237,`tr`,17)(4238,`td`,18)(4239,`div`,19)(4240,`span`,20),mN(4241,` disabled`),ql(4242,`br`),lg()()(),Ml(4243,`td`,21)(4244,`code`,47),mN(4245,`Function`),lg()(),Ml(4246,`td`,24)(4247,`em`)(4248,`strong`),mN(4249,`(opcional)`),lg()(),Ml(4250,`p`),mN(4251,`Função que deve retornar um booleano para habilitar ou desabilitar o ícone e sua ação.`),lg()()(),Ml(4252,`tr`,17)(4253,`td`,18)(4254,`div`,19)(4255,`span`,20),mN(4256,` icon`),ql(4257,`br`),lg()()(),Ml(4258,`td`,21)(4259,`code`,31),mN(4260,`string `),lg(),Ml(4261,`code`,48),mN(4262,` TemplateRef<void>`),lg()(),Ml(4263,`td`,24)(4264,`em`)(4265,`strong`),mN(4266,`(opcional)`),lg()(),Ml(4267,`p`),mN(4268,`É possível usar qualquer um dos ícones da `),Ml(4269,`a`,26),mN(4270,`Biblioteca de ícones`),lg(),mN(4271,`. conforme exemplo abaixo:`),lg(),Ml(4272,`pre`)(4273,`code`),mN(4274,`[ { icon: 'an an-plus' } ]
`),lg()(),Ml(4275,`p`),mN(4276,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),lg(),Ml(4277,`pre`)(4278,`code`),mN(4279,`[ {  icon: 'fas fa-plus' } ]
`),lg()(),Ml(4280,`p`),mN(4281,`Outra opção seria a customização do ícone através do `),Ml(4282,`code`),mN(4283,`TemplateRef`),lg(),mN(4284,`, conforme exemplo abaixo:
`),Ml(4285,`code`),mN(4286,`component.html`),lg(),mN(4287,`:`),lg(),Ml(4288,`pre`)(4289,`code`),mN(4290,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),lg()(),Ml(4291,`p`)(4292,`code`),mN(4293,`component.ts`),lg(),mN(4294,`:`),lg(),Ml(4295,`pre`)(4296,`code`),mN(4297,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),lg()(),Ml(4298,`blockquote`)(4299,`p`),mN(4300,`Caso esta propriedade não seja definida, a mesma receberá o valor contido em `),Ml(4301,`code`),mN(4302,`value`),lg(),mN(4303,`.`),lg()()()(),Ml(4304,`tr`,17)(4305,`td`,18)(4306,`div`,19)(4307,`span`,20),mN(4308,` tooltip`),ql(4309,`br`),lg()()(),Ml(4310,`td`,21)(4311,`code`,31),mN(4312,`string`),lg()(),Ml(4313,`td`,24)(4314,`em`)(4315,`strong`),mN(4316,`(opcional)`),lg()(),Ml(4317,`p`),mN(4318,`Define um texto de ajuda que será exibido ao passar o `),Ml(4319,`em`),mN(4320,`mouse`),lg(),mN(4321,` em cima do ícone.`),lg()()(),Ml(4322,`tr`,17)(4323,`td`,18)(4324,`div`,19)(4325,`span`,20),mN(4326,` value`),ql(4327,`br`),lg()()(),Ml(4328,`td`,21)(4329,`code`,31),mN(4330,`string`),lg()(),Ml(4331,`td`,24)(4332,`p`),mN(4333,`Define o valor do ícone que será exibido.`),lg()()()(),Ml(4334,`h4`,46)(4335,`code`,5),mN(4336,`PoTableColumnLabel`),lg()(),Ml(4337,`div`,2)(4338,`p`),mN(4339,`Interface para configuração das colunas de labels do `),Ml(4340,`code`),mN(4341,`po-table`),lg(),mN(4342,`.`),lg()(),Ml(4343,`h4`,13),mN(4344,`Propriedades`),lg(),Ml(4345,`table`,14)(4346,`tr`,15)(4347,`th`,16),mN(4348,`Nome`),lg(),Ml(4349,`th`,16),mN(4350,`Tipo`),lg(),Ml(4351,`th`,16),mN(4352,`Descrição`),lg()(),Ml(4353,`tr`,17)(4354,`td`,18)(4355,`div`,19)(4356,`span`,20),mN(4357,` color`),ql(4358,`br`),lg()()(),Ml(4359,`td`,21)(4360,`code`,31),mN(4361,`string`),lg()(),Ml(4362,`td`,24)(4363,`em`)(4364,`strong`),mN(4365,`(opcional)`),lg()(),Ml(4366,`p`),mN(4367,`Define a cor do label.`),lg(),Ml(4368,`p`),mN(4369,`Valores válidos:`),lg(),Ml(4370,`ul`)(4371,`li`),ql(4372,`span`,53),Ml(4373,`code`),mN(4374,`color-01`),lg()(),Ml(4375,`li`),ql(4376,`span`,54),Ml(4377,`code`),mN(4378,`color-02`),lg()(),Ml(4379,`li`),ql(4380,`span`,55),Ml(4381,`code`),mN(4382,`color-03`),lg()(),Ml(4383,`li`),ql(4384,`span`,56),Ml(4385,`code`),mN(4386,`color-04`),lg()(),Ml(4387,`li`),ql(4388,`span`,57),Ml(4389,`code`),mN(4390,`color-05`),lg()(),Ml(4391,`li`),ql(4392,`span`,58),Ml(4393,`code`),mN(4394,`color-06`),lg()(),Ml(4395,`li`),ql(4396,`span`,59),Ml(4397,`code`),mN(4398,`color-07`),lg()(),Ml(4399,`li`),ql(4400,`span`,60),Ml(4401,`code`),mN(4402,`color-08`),lg()(),Ml(4403,`li`),ql(4404,`span`,61),Ml(4405,`code`),mN(4406,`color-09`),lg()(),Ml(4407,`li`),ql(4408,`span`,62),Ml(4409,`code`),mN(4410,`color-10`),lg()(),Ml(4411,`li`),ql(4412,`span`,63),Ml(4413,`code`),mN(4414,`color-11`),lg()(),Ml(4415,`li`),ql(4416,`span`,64),Ml(4417,`code`),mN(4418,`color-12`),lg()()(),Ml(4419,`blockquote`)(4420,`p`),mN(4421,`Também é possível utilizar as 35 cores da paleta `),Ml(4422,`strong`),mN(4423,`Caption Tag Colors`),lg(),mN(4424,`:`),lg()(),Ml(4425,`ul`)(4426,`li`),ql(4427,`span`,65),Ml(4428,`code`),mN(4429,`caption-tag-01`),lg(),ql(4430,`span`,66),Ml(4431,`code`),mN(4432,`caption-tag-02`),lg(),ql(4433,`span`,67),Ml(4434,`code`),mN(4435,`caption-tag-03`),lg(),ql(4436,`span`,68),Ml(4437,`code`),mN(4438,`caption-tag-04`),lg(),ql(4439,`span`,69),Ml(4440,`code`),mN(4441,`caption-tag-05`),lg()(),Ml(4442,`li`),ql(4443,`span`,70),Ml(4444,`code`),mN(4445,`caption-tag-06`),lg(),ql(4446,`span`,71),Ml(4447,`code`),mN(4448,`caption-tag-07`),lg(),ql(4449,`span`,72),Ml(4450,`code`),mN(4451,`caption-tag-08`),lg(),ql(4452,`span`,73),Ml(4453,`code`),mN(4454,`caption-tag-09`),lg(),ql(4455,`span`,74),Ml(4456,`code`),mN(4457,`caption-tag-10`),lg()(),Ml(4458,`li`),ql(4459,`span`,75),Ml(4460,`code`),mN(4461,`caption-tag-11`),lg(),ql(4462,`span`,76),Ml(4463,`code`),mN(4464,`caption-tag-12`),lg(),ql(4465,`span`,77),Ml(4466,`code`),mN(4467,`caption-tag-13`),lg(),ql(4468,`span`,78),Ml(4469,`code`),mN(4470,`caption-tag-14`),lg(),ql(4471,`span`,79),Ml(4472,`code`),mN(4473,`caption-tag-15`),lg()(),Ml(4474,`li`),ql(4475,`span`,80),Ml(4476,`code`),mN(4477,`caption-tag-16`),lg(),ql(4478,`span`,81),Ml(4479,`code`),mN(4480,`caption-tag-17`),lg(),ql(4481,`span`,82),Ml(4482,`code`),mN(4483,`caption-tag-18`),lg(),ql(4484,`span`,83),Ml(4485,`code`),mN(4486,`caption-tag-19`),lg(),ql(4487,`span`,84),Ml(4488,`code`),mN(4489,`caption-tag-20`),lg()(),Ml(4490,`li`),ql(4491,`span`,85),Ml(4492,`code`),mN(4493,`caption-tag-21`),lg(),ql(4494,`span`,86),Ml(4495,`code`),mN(4496,`caption-tag-22`),lg(),ql(4497,`span`,87),Ml(4498,`code`),mN(4499,`caption-tag-23`),lg(),ql(4500,`span`,88),Ml(4501,`code`),mN(4502,`caption-tag-24`),lg(),ql(4503,`span`,89),Ml(4504,`code`),mN(4505,`caption-tag-25`),lg()(),Ml(4506,`li`),ql(4507,`span`,90),Ml(4508,`code`),mN(4509,`caption-tag-26`),lg(),ql(4510,`span`,91),Ml(4511,`code`),mN(4512,`caption-tag-27`),lg(),ql(4513,`span`,92),Ml(4514,`code`),mN(4515,`caption-tag-28`),lg(),ql(4516,`span`,93),Ml(4517,`code`),mN(4518,`caption-tag-29`),lg(),ql(4519,`span`,94),Ml(4520,`code`),mN(4521,`caption-tag-30`),lg()(),Ml(4522,`li`),ql(4523,`span`,95),Ml(4524,`code`),mN(4525,`caption-tag-31`),lg(),ql(4526,`span`,96),Ml(4527,`code`),mN(4528,`caption-tag-32`),lg(),ql(4529,`span`,97),Ml(4530,`code`),mN(4531,`caption-tag-33`),lg(),ql(4532,`span`,98),Ml(4533,`code`),mN(4534,`caption-tag-34`),lg(),ql(4535,`span`,99),Ml(4536,`code`),mN(4537,`caption-tag-35`),lg()()(),Ml(4538,`p`),mN(4539,`Exemplo de uso:`),lg(),Ml(4540,`pre`)(4541,`code`),mN(4542,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),lg()()()(),Ml(4543,`tr`,17)(4544,`td`,18)(4545,`div`,19)(4546,`span`,20),mN(4547,` icon`),ql(4548,`br`),lg()()(),Ml(4549,`td`,21)(4550,`code`,22),mN(4551,`boolean `),lg(),Ml(4552,`code`,31),mN(4553,` string `),lg(),Ml(4554,`code`,48),mN(4555,` TemplateRef<void>`),lg()(),Ml(4556,`td`,24)(4557,`em`)(4558,`strong`),mN(4559,`(opcional)`),lg()(),Ml(4560,`p`),mN(4561,`Define ou ativa um ícone que será exibido ao lado do valor da `),Ml(4562,`em`),mN(4563,`tag`),lg(),mN(4564,`.`),lg(),Ml(4565,`p`),mN(4566,`Quando `),Ml(4567,`code`),mN(4568,`p-type`),lg(),mN(4569,` estiver definida, basta informar um valor igual a `),Ml(4570,`code`),mN(4571,`true`),lg(),mN(4572,` para que o ícone seja exibido conforme descrições abaixo:`),lg(),Ml(4573,`ul`)(4574,`li`),ql(4575,`span`,114),mN(4576,` - `),Ml(4577,`code`),mN(4578,`success`),lg()(),Ml(4579,`li`),ql(4580,`span`,115),mN(4581,` - `),Ml(4582,`code`),mN(4583,`warning`),lg()(),Ml(4584,`li`),ql(4585,`span`,116),mN(4586,` - `),Ml(4587,`code`),mN(4588,`danger`),lg()(),Ml(4589,`li`),ql(4590,`span`,117),mN(4591,` - `),Ml(4592,`code`),mN(4593,`info`),lg()()(),Ml(4594,`p`),mN(4595,`Também É possível usar qualquer um dos ícones da `),Ml(4596,`a`,26),mN(4597,`Biblioteca de ícones`),lg(),mN(4598,`. conforme exemplo abaixo:`),lg(),Ml(4599,`pre`)(4600,`code`),mN(4601,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),lg()(),Ml(4602,`p`),mN(4603,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(4604,`em`),mN(4605,`Font Awesome`),lg(),mN(4606,`, da seguinte forma:`),lg(),Ml(4607,`pre`)(4608,`code`),mN(4609,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),lg()(),Ml(4610,`p`),mN(4611,`Outra opção seria a customização do ícone através do `),Ml(4612,`code`),mN(4613,`TemplateRef`),lg(),mN(4614,`, conforme exemplo abaixo:`),lg(),Ml(4615,`pre`)(4616,`code`),mN(4617,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(4618,`blockquote`)(4619,`p`),mN(4620,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(4621,`code`),mN(4622,`font-size: inherit`),lg(),mN(4623,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(4624,`tr`,17)(4625,`td`,18)(4626,`div`,19)(4627,`span`,20),mN(4628,` label`),ql(4629,`br`),lg()()(),Ml(4630,`td`,21)(4631,`code`,31),mN(4632,`string`),lg()(),Ml(4633,`td`,24)(4634,`p`),mN(4635,`Texto que será exibido na coluna.`),lg()()(),Ml(4636,`tr`,17)(4637,`td`,18)(4638,`div`,19)(4639,`span`,20),mN(4640,` textColor`),ql(4641,`br`),lg()()(),Ml(4642,`td`,21)(4643,`code`,31),mN(4644,`string`),lg()(),Ml(4645,`td`,24)(4646,`em`)(4647,`strong`),mN(4648,`(opcional)`),lg()(),Ml(4649,`p`),mN(4650,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),lg(),Ml(4651,`ul`)(4652,`li`)(4653,`p`),mN(4654,`Hexadeximal, por exemplo `),Ml(4655,`code`),mN(4656,`#c64840`),lg(),mN(4657,`;`),lg()(),Ml(4658,`li`)(4659,`p`),mN(4660,`RGB, como `),Ml(4661,`code`),mN(4662,`rgb(0, 0, 165)`),lg(),mN(4663,`;`),lg()(),Ml(4664,`li`)(4665,`p`),mN(4666,`O nome da cor, por exemplo `),Ml(4667,`code`),mN(4668,`blue`),lg(),mN(4669,`;`),lg()(),Ml(4670,`li`)(4671,`p`),mN(4672,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),lg(),Ml(4673,`ul`)(4674,`li`),ql(4675,`span`,53),Ml(4676,`code`),mN(4677,`color-01`),lg()(),Ml(4678,`li`),ql(4679,`span`,54),Ml(4680,`code`),mN(4681,`color-02`),lg()(),Ml(4682,`li`),ql(4683,`span`,55),Ml(4684,`code`),mN(4685,`color-03`),lg()(),Ml(4686,`li`),ql(4687,`span`,56),Ml(4688,`code`),mN(4689,`color-04`),lg()(),Ml(4690,`li`),ql(4691,`span`,57),Ml(4692,`code`),mN(4693,`color-05`),lg()(),Ml(4694,`li`),ql(4695,`span`,58),Ml(4696,`code`),mN(4697,`color-06`),lg()(),Ml(4698,`li`),ql(4699,`span`,59),Ml(4700,`code`),mN(4701,`color-07`),lg()(),Ml(4702,`li`),ql(4703,`span`,60),Ml(4704,`code`),mN(4705,`color-08`),lg()(),Ml(4706,`li`),ql(4707,`span`,61),Ml(4708,`code`),mN(4709,`color-09`),lg()(),Ml(4710,`li`),ql(4711,`span`,62),Ml(4712,`code`),mN(4713,`color-10`),lg()(),Ml(4714,`li`),ql(4715,`span`,63),Ml(4716,`code`),mN(4717,`color-11`),lg()(),Ml(4718,`li`),ql(4719,`span`,64),Ml(4720,`code`),mN(4721,`color-12`),lg()()()(),Ml(4722,`li`)(4723,`p`),mN(4724,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),lg()()(),Ml(4725,`blockquote`)(4726,`p`)(4727,`strong`),mN(4728,`Atenção:`),lg(),mN(4729,` A propriedade `),Ml(4730,`code`),mN(4731,`p-type`),lg(),mN(4732,` sobrepõe esta definição.`),lg()(),Ml(4733,`blockquote`)(4734,`p`)(4735,`strong`),mN(4736,`Atenção:`),lg(),mN(4737,` As cores da paleta `),Ml(4738,`strong`),mN(4739,`Caption Tag Colors`),lg(),mN(4740,` (`),Ml(4741,`code`),mN(4742,`caption-tag-01`),lg(),mN(4743,` a `),Ml(4744,`code`),mN(4745,`caption-tag-35`),lg(),mN(4746,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),lg()()()(),Ml(4747,`tr`,17)(4748,`td`,18)(4749,`div`,19)(4750,`span`,20),mN(4751,` tooltip`),ql(4752,`br`),lg()()(),Ml(4753,`td`,21)(4754,`code`,31),mN(4755,`string`),lg()(),Ml(4756,`td`,24)(4757,`em`)(4758,`strong`),mN(4759,`(opcional)`),lg()(),Ml(4760,`p`),mN(4761,`Define um texto de ajuda que será exibido ao passar o `),Ml(4762,`em`),mN(4763,`mouse`),lg(),mN(4764,` em cima do `),Ml(4765,`em`),mN(4766,`label`),lg(),mN(4767,`.`),lg(),Ml(4768,`blockquote`)(4769,`p`),mN(4770,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),lg()()()(),Ml(4771,`tr`,17)(4772,`td`,18)(4773,`div`,19)(4774,`span`,20),mN(4775,` type`),ql(4776,`br`),lg()()(),Ml(4777,`td`,21)(4778,`code`,118),mN(4779,`PoTagType`),lg()(),Ml(4780,`td`,24)(4781,`em`)(4782,`strong`),mN(4783,`(opcional)`),lg()(),Ml(4784,`p`),mN(4785,`Define o tipo da `),Ml(4786,`em`),mN(4787,`tag`),lg(),mN(4788,`.`),lg(),Ml(4789,`p`),mN(4790,`Valores válidos:`),lg(),Ml(4791,`ul`)(4792,`li`)(4793,`code`),mN(4794,`success`),lg(),mN(4795,`: cor verde utilizada para simbolizar sucesso ou êxito.`),lg(),Ml(4796,`li`)(4797,`code`),mN(4798,`warning`),lg(),mN(4799,`: cor amarela que representa aviso ou advertência.`),lg(),Ml(4800,`li`)(4801,`code`),mN(4802,`danger`),lg(),mN(4803,`: cor vermelha para erro ou aviso crítico.`),lg(),Ml(4804,`li`)(4805,`code`),mN(4806,`info`),lg(),mN(4807,`: cor cinza escuro que caracteriza conteúdo informativo.`),lg()(),Ml(4808,`blockquote`)(4809,`p`),mN(4810,`Quando esta propriedade for definida, irá sobrepor a definição de `),Ml(4811,`code`),mN(4812,`p-color`),lg(),mN(4813,` e `),Ml(4814,`code`),mN(4815,`p-icon`),lg(),mN(4816,` somente será exibido caso seja `),Ml(4817,`code`),mN(4818,`true`),lg(),mN(4819,`.`),lg()()()(),Ml(4820,`tr`,17)(4821,`td`,18)(4822,`div`,19)(4823,`span`,20),mN(4824,` value`),ql(4825,`br`),lg()()(),Ml(4826,`td`,21)(4827,`code`,31),mN(4828,`string `),lg(),Ml(4829,`code`,35),mN(4830,` number`),lg()(),Ml(4831,`td`,24)(4832,`p`),mN(4833,`Valor que será usado como referência para exibição do conteúdo na coluna.`),lg()()()(),Ml(4834,`h4`,46)(4835,`code`,5),mN(4836,`PoTableDetailColumn`),lg()(),Ml(4837,`div`,2)(4838,`p`),mN(4839,`Interface para configuração das colunas do `),Ml(4840,`code`),mN(4841,`po-table-detail`),lg(),mN(4842,`.`),lg()(),Ml(4843,`h4`,13),mN(4844,`Propriedades`),lg(),Ml(4845,`table`,14)(4846,`tr`,15)(4847,`th`,16),mN(4848,`Nome`),lg(),Ml(4849,`th`,16),mN(4850,`Tipo`),lg(),Ml(4851,`th`,16),mN(4852,`Descrição`),lg()(),Ml(4853,`tr`,17)(4854,`td`,18)(4855,`div`,19)(4856,`span`,20),mN(4857,` format`),ql(4858,`br`),lg()()(),Ml(4859,`td`,21)(4860,`code`,31),mN(4861,`string`),lg()(),Ml(4862,`td`,24)(4863,`em`)(4864,`strong`),mN(4865,`(opcional)`),lg()(),Ml(4866,`p`),mN(4867,`Formato de exibição do valor da coluna:`),lg(),Ml(4868,`ul`)(4869,`li`)(4870,`p`),mN(4871,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),lg()(),Ml(4872,`li`)(4873,`p`),mN(4874,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),lg()(),Ml(4875,`li`)(4876,`p`),mN(4877,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),lg()(),Ml(4878,`li`)(4879,`p`),mN(4880,`Formato para números (number): aceita um valor seguindo o padrão `),Ml(4881,`a`,119)(4882,`strong`),mN(4883,`DecimalPipe`),lg()(),mN(4884,` para formatação, e caso não seja informado, o número será exibido na sua forma original. Exemplo:`),lg(),Ml(4885,`ul`)(4886,`li`),mN(4887,`Valor de entrada: `),Ml(4888,`code`),mN(4889,`50`),lg(),mN(4890,` e valor para formatação: `),Ml(4891,`code`),mN(4892,`'1.2-5'`),lg(),mN(4893,` o resultado será: `),Ml(4894,`code`),mN(4895,`50.00`),lg()()()()()()(),Ml(4896,`tr`,17)(4897,`td`,18)(4898,`div`,19)(4899,`span`,20),mN(4900,` label`),ql(4901,`br`),lg()()(),Ml(4902,`td`,21)(4903,`code`,31),mN(4904,`string`),lg()(),Ml(4905,`td`,24)(4906,`em`)(4907,`strong`),mN(4908,`(opcional)`),lg()(),Ml(4909,`p`),mN(4910,`Texto para título da coluna.`),lg()()(),Ml(4911,`tr`,17)(4912,`td`,18)(4913,`div`,19)(4914,`span`,20),mN(4915,` property`),ql(4916,`br`),lg()()(),Ml(4917,`td`,21)(4918,`code`,31),mN(4919,`string`),lg()(),Ml(4920,`td`,24)(4921,`em`)(4922,`strong`),mN(4923,`(opcional)`),lg()(),Ml(4924,`p`),mN(4925,`Nome identificador da coluna.`),lg()()(),Ml(4926,`tr`,17)(4927,`td`,18)(4928,`div`,19)(4929,`span`,20),mN(4930,` type`),ql(4931,`br`),lg()()(),Ml(4932,`td`,21)(4933,`code`,31),mN(4934,`string`),lg()(),Ml(4935,`td`,24)(4936,`em`)(4937,`strong`),mN(4938,`(opcional)`),lg()(),Ml(4939,`p`),mN(4940,`Tipo da coluna.`),lg(),Ml(4941,`p`),mN(4942,`Valores válidos:`),lg(),Ml(4943,`ul`)(4944,`li`)(4945,`p`)(4946,`code`),mN(4947,`currency`),lg(),mN(4948,`: valores monetários.`),lg()(),Ml(4949,`li`)(4950,`p`)(4951,`code`),mN(4952,`date`),lg(),mN(4953,`: valor de datas.`),lg(),Ml(4954,`ul`)(4955,`li`),mN(4956,`Aceita os tipos `),Ml(4957,`em`),mN(4958,`string`),lg(),mN(4959,` e `),Ml(4960,`em`),mN(4961,`Date`),lg(),mN(4962,` padr\xE3o do Javascript,
por exemplo: `),Ml(4963,`code`),mN(4964,`'2017-11-28'`),lg(),mN(4965,` ou `),Ml(4966,`code`),mN(4967,`new Date(2017, 10, 28)`),lg(),mN(4968,`.`),lg()()(),Ml(4969,`li`)(4970,`p`)(4971,`code`),mN(4972,`time`),lg(),mN(4973,`: valor de horário.`),lg()(),Ml(4974,`li`)(4975,`p`)(4976,`code`),mN(4977,`number`),lg(),mN(4978,`: valores numéricos.`),lg()(),Ml(4979,`li`)(4980,`p`)(4981,`code`),mN(4982,`dateTime`),lg(),mN(4983,`: valor de data com horário.`),lg(),Ml(4984,`ul`)(4985,`li`),mN(4986,`Aceita o tipo `),Ml(4987,`em`),mN(4988,`string`),lg(),mN(4989,` no formato `),Ml(4990,`strong`),mN(4991,`ISO-8601`),lg(),mN(4992,` extendido `),Ml(4993,`strong`),mN(4994,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),lg(),mN(4995,`
e o tipo `),Ml(4996,`em`),mN(4997,`Date`),lg(),mN(4998,` padrão do Javascript, por exemplo: `),Ml(4999,`code`),mN(5e3,`'2017-11-28T00:00:00-02:00'`),lg(),mN(5001,` ou `),Ml(5002,`code`),mN(5003,`new Date(2017, 10, 28)`),lg(),mN(5004,`.`),lg(),Ml(5005,`li`),mN(5006,`Aceita o tipo `),Ml(5007,`em`),mN(5008,`string`),lg(),mN(5009,` nos formatos `),Ml(5010,`strong`),mN(5011,`'HH:mm:ss'`),lg(),mN(5012,` ou `),Ml(5013,`strong`),mN(5014,`'HH:mm:ss.ffffff'`),lg(),mN(5015,`, por exemplo: `),Ml(5016,`code`),mN(5017,`'23:12:45'`),lg(),mN(5018,`.`),lg()()()()()()(),Ml(5019,`h4`,46)(5020,`code`,5),mN(5021,`PoTableDetail`),lg()(),Ml(5022,`div`,2)(5023,`p`),mN(5024,`Interface para configuração do `),Ml(5025,`em`),mN(5026,`detail`),lg(),mN(5027,` do componente `),Ml(5028,`code`),mN(5029,`po-table`),lg(),mN(5030,`.`),lg()(),Ml(5031,`h4`,13),mN(5032,`Propriedades`),lg(),Ml(5033,`table`,14)(5034,`tr`,15)(5035,`th`,16),mN(5036,`Nome`),lg(),Ml(5037,`th`,16),mN(5038,`Tipo`),lg(),Ml(5039,`th`,16),mN(5040,`Descrição`),lg()(),Ml(5041,`tr`,17)(5042,`td`,18)(5043,`div`,19)(5044,`span`,20),mN(5045,` columns`),ql(5046,`br`),lg()()(),Ml(5047,`td`,21)(5048,`code`,120),mN(5049,`Array<PoTableDetailColumn>`),lg()(),Ml(5050,`td`,24)(5051,`p`),mN(5052,`Define uma lista do tipo `),Ml(5053,`code`),mN(5054,`PoTableDetailColumn`),lg(),mN(5055,` para as colunas do objet `),Ml(5056,`em`),mN(5057,`detail`),lg(),mN(5058,`. Por exemplo:`),lg(),Ml(5059,`pre`)(5060,`code`),mN(5061,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),lg()()()(),Ml(5062,`tr`,17)(5063,`td`,18)(5064,`div`,19)(5065,`span`,20),mN(5066,` hideSelect`),ql(5067,`br`),lg()()(),Ml(5068,`td`,21)(5069,`code`,22),mN(5070,`boolean`),lg()(),Ml(5071,`td`,24)(5072,`em`)(5073,`strong`),mN(5074,`(opcional)`),lg()(),Ml(5075,`p`),mN(5076,`Define se o checkbox de seleção do detail será exibido. Valor padrão 'false'.`),lg()()(),Ml(5077,`tr`,17)(5078,`td`,18)(5079,`div`,19)(5080,`span`,20),mN(5081,` typeHeader`),ql(5082,`br`),lg()()(),Ml(5083,`td`,21)(5084,`code`,31),mN(5085,`string`),lg()(),Ml(5086,`td`,24)(5087,`em`)(5088,`strong`),mN(5089,`(opcional)`),lg()(),Ml(5090,`p`),mN(5091,`Define o tipo de cabeçalho para o conteúdo do `),Ml(5092,`em`),mN(5093,`detail`),lg(),mN(5094,` .`),lg(),Ml(5095,`p`),mN(5096,`Valores válidos:`),lg(),Ml(5097,`ul`)(5098,`li`)(5099,`code`),mN(5100,`inline`),lg(),mN(5101,`: Atribui o cabeçalho na mesma linha do `),Ml(5102,`em`),mN(5103,`detail`),lg(),mN(5104,`.`),lg(),Ml(5105,`li`)(5106,`code`),mN(5107,`top`),lg(),mN(5108,`: Atribui o cabeçalho acima do `),Ml(5109,`em`),mN(5110,`detail`),lg(),mN(5111,`, idêntico ao `),Ml(5112,`code`),mN(5113,`po-table`),lg(),mN(5114,`.`),lg(),Ml(5115,`li`)(5116,`code`),mN(5117,`none`),lg(),mN(5118,`: Remove o cabeçalho do `),Ml(5119,`em`),mN(5120,`detail`),lg(),mN(5121,`.`),lg()()()()(),Ml(5122,`h4`,46)(5123,`code`,5),mN(5124,`PoTableSubtitleColumn`),lg()(),Ml(5125,`div`,2)(5126,`p`),mN(5127,`Interface para configuração das colunas de legenda do Po-Table.`),lg()(),Ml(5128,`h4`,13),mN(5129,`Propriedades`),lg(),Ml(5130,`table`,14)(5131,`tr`,15)(5132,`th`,16),mN(5133,`Nome`),lg(),Ml(5134,`th`,16),mN(5135,`Tipo`),lg(),Ml(5136,`th`,16),mN(5137,`Descrição`),lg()(),Ml(5138,`tr`,17)(5139,`td`,18)(5140,`div`,19)(5141,`span`,20),mN(5142,` color`),ql(5143,`br`),lg()()(),Ml(5144,`td`,21)(5145,`code`,31),mN(5146,`string`),lg()(),Ml(5147,`td`,24)(5148,`em`)(5149,`strong`),mN(5150,`(opcional)`),lg()(),Ml(5151,`p`),mN(5152,`Define a cor do `),Ml(5153,`em`),mN(5154,`status`),lg(),mN(5155,`.`),lg(),Ml(5156,`p`),mN(5157,`Valores válidos:`),lg(),Ml(5158,`ul`)(5159,`li`),ql(5160,`span`,53),Ml(5161,`code`),mN(5162,`color-01`),lg()(),Ml(5163,`li`),ql(5164,`span`,54),Ml(5165,`code`),mN(5166,`color-02`),lg()(),Ml(5167,`li`),ql(5168,`span`,55),Ml(5169,`code`),mN(5170,`color-03`),lg()(),Ml(5171,`li`),ql(5172,`span`,56),Ml(5173,`code`),mN(5174,`color-04`),lg()(),Ml(5175,`li`),ql(5176,`span`,57),Ml(5177,`code`),mN(5178,`color-05`),lg()(),Ml(5179,`li`),ql(5180,`span`,58),Ml(5181,`code`),mN(5182,`color-06`),lg()(),Ml(5183,`li`),ql(5184,`span`,59),Ml(5185,`code`),mN(5186,`color-07`),lg()(),Ml(5187,`li`),ql(5188,`span`,60),Ml(5189,`code`),mN(5190,`color-08`),lg()(),Ml(5191,`li`),ql(5192,`span`,61),Ml(5193,`code`),mN(5194,`color-09`),lg()(),Ml(5195,`li`),ql(5196,`span`,62),Ml(5197,`code`),mN(5198,`color-10`),lg()(),Ml(5199,`li`),ql(5200,`span`,63),Ml(5201,`code`),mN(5202,`color-11`),lg()(),Ml(5203,`li`),ql(5204,`span`,64),Ml(5205,`code`),mN(5206,`color-12`),lg()()(),Ml(5207,`blockquote`)(5208,`p`),mN(5209,`Também é possível utilizar as 35 cores da paleta `),Ml(5210,`strong`),mN(5211,`Caption Tag Colors`),lg(),mN(5212,`:`),lg()(),Ml(5213,`ul`)(5214,`li`),ql(5215,`span`,65),Ml(5216,`code`),mN(5217,`caption-tag-01`),lg(),ql(5218,`span`,66),Ml(5219,`code`),mN(5220,`caption-tag-02`),lg(),ql(5221,`span`,67),Ml(5222,`code`),mN(5223,`caption-tag-03`),lg(),ql(5224,`span`,68),Ml(5225,`code`),mN(5226,`caption-tag-04`),lg(),ql(5227,`span`,69),Ml(5228,`code`),mN(5229,`caption-tag-05`),lg()(),Ml(5230,`li`),ql(5231,`span`,70),Ml(5232,`code`),mN(5233,`caption-tag-06`),lg(),ql(5234,`span`,71),Ml(5235,`code`),mN(5236,`caption-tag-07`),lg(),ql(5237,`span`,72),Ml(5238,`code`),mN(5239,`caption-tag-08`),lg(),ql(5240,`span`,73),Ml(5241,`code`),mN(5242,`caption-tag-09`),lg(),ql(5243,`span`,74),Ml(5244,`code`),mN(5245,`caption-tag-10`),lg()(),Ml(5246,`li`),ql(5247,`span`,75),Ml(5248,`code`),mN(5249,`caption-tag-11`),lg(),ql(5250,`span`,76),Ml(5251,`code`),mN(5252,`caption-tag-12`),lg(),ql(5253,`span`,77),Ml(5254,`code`),mN(5255,`caption-tag-13`),lg(),ql(5256,`span`,78),Ml(5257,`code`),mN(5258,`caption-tag-14`),lg(),ql(5259,`span`,79),Ml(5260,`code`),mN(5261,`caption-tag-15`),lg()(),Ml(5262,`li`),ql(5263,`span`,80),Ml(5264,`code`),mN(5265,`caption-tag-16`),lg(),ql(5266,`span`,81),Ml(5267,`code`),mN(5268,`caption-tag-17`),lg(),ql(5269,`span`,82),Ml(5270,`code`),mN(5271,`caption-tag-18`),lg(),ql(5272,`span`,83),Ml(5273,`code`),mN(5274,`caption-tag-19`),lg(),ql(5275,`span`,84),Ml(5276,`code`),mN(5277,`caption-tag-20`),lg()(),Ml(5278,`li`),ql(5279,`span`,85),Ml(5280,`code`),mN(5281,`caption-tag-21`),lg(),ql(5282,`span`,86),Ml(5283,`code`),mN(5284,`caption-tag-22`),lg(),ql(5285,`span`,87),Ml(5286,`code`),mN(5287,`caption-tag-23`),lg(),ql(5288,`span`,88),Ml(5289,`code`),mN(5290,`caption-tag-24`),lg(),ql(5291,`span`,89),Ml(5292,`code`),mN(5293,`caption-tag-25`),lg()(),Ml(5294,`li`),ql(5295,`span`,90),Ml(5296,`code`),mN(5297,`caption-tag-26`),lg(),ql(5298,`span`,91),Ml(5299,`code`),mN(5300,`caption-tag-27`),lg(),ql(5301,`span`,92),Ml(5302,`code`),mN(5303,`caption-tag-28`),lg(),ql(5304,`span`,93),Ml(5305,`code`),mN(5306,`caption-tag-29`),lg(),ql(5307,`span`,94),Ml(5308,`code`),mN(5309,`caption-tag-30`),lg()(),Ml(5310,`li`),ql(5311,`span`,95),Ml(5312,`code`),mN(5313,`caption-tag-31`),lg(),ql(5314,`span`,96),Ml(5315,`code`),mN(5316,`caption-tag-32`),lg(),ql(5317,`span`,97),Ml(5318,`code`),mN(5319,`caption-tag-33`),lg(),ql(5320,`span`,98),Ml(5321,`code`),mN(5322,`caption-tag-34`),lg(),ql(5323,`span`,99),Ml(5324,`code`),mN(5325,`caption-tag-35`),lg()()()()(),Ml(5326,`tr`,17)(5327,`td`,18)(5328,`div`,19)(5329,`span`,20),mN(5330,` content`),ql(5331,`br`),lg()()(),Ml(5332,`td`,21)(5333,`code`,31),mN(5334,`string`),lg()(),Ml(5335,`td`,24)(5336,`p`),mN(5337,`Conteúdo que será exibido na coluna da tabela.`),lg()()(),Ml(5338,`tr`,17)(5339,`td`,18)(5340,`div`,19)(5341,`span`,20),mN(5342,` label`),ql(5343,`br`),lg()()(),Ml(5344,`td`,21)(5345,`code`,31),mN(5346,`string`),lg()(),Ml(5347,`td`,24)(5348,`p`),mN(5349,`Texto que será exibido no rodapé da tabela como legenda.`),lg()()(),Ml(5350,`tr`,17)(5351,`td`,18)(5352,`div`,19)(5353,`span`,20),mN(5354,` value`),ql(5355,`br`),lg()()(),Ml(5356,`td`,21)(5357,`code`,31),mN(5358,`string `),lg(),Ml(5359,`code`,35),mN(5360,` number`),lg()(),Ml(5361,`td`,24)(5362,`p`),mN(5363,`Valor que será usado como referência para exibição do conteúdo na coluna.`),lg()()()(),Ml(5364,`h3`),mN(5365,`Enums`),lg(),Ml(5366,`h4`,4)(5367,`code`,5),mN(5368,`PoTableColumnSortType`),lg()(),Ml(5369,`div`,2)(5370,`p`),mN(5371,`Tipos de ordenação das colunas da tabela.`),lg()(),Ml(5372,`h4`,13),mN(5373,`Propriedades`),lg(),Ml(5374,`table`,14)(5375,`tr`,15)(5376,`th`,16),mN(5377,`Nome`),lg(),Ml(5378,`th`,16),mN(5379,`Descrição`),lg()(),Ml(5380,`tr`,17)(5381,`td`,18)(5382,`div`,19)(5383,`span`,20),mN(5384,` Ascending`),ql(5385,`br`),lg()()(),Ml(5386,`td`,24)(5387,`p`),mN(5388,`Ordenação ascendente`),lg()()(),Ml(5389,`tr`,17)(5390,`td`,18)(5391,`div`,19)(5392,`span`,20),mN(5393,` Descending`),ql(5394,`br`),lg()()(),Ml(5395,`td`,24)(5396,`p`),mN(5397,`Ordenação descendente`),lg()()()(),Ml(5398,`h4`,4)(5399,`code`,5),mN(5400,`PoTableColumnSpacing`),lg()(),Ml(5401,`div`,2)(5402,`p`),mN(5403,`Tipos de espaçamento interno (padding) das células (`),Ml(5404,`strong`),mN(5405,`p-spacing`),lg(),mN(5406,`) do po-table.`),lg()(),Ml(5407,`h4`,13),mN(5408,`Propriedades`),lg(),Ml(5409,`table`,14)(5410,`tr`,15)(5411,`th`,16),mN(5412,`Nome`),lg(),Ml(5413,`th`,16),mN(5414,`Descrição`),lg()(),Ml(5415,`tr`,17)(5416,`td`,18)(5417,`div`,19)(5418,`span`,20),mN(5419,` ExtraSmall`),ql(5420,`br`),lg()()(),Ml(5421,`td`,24)(5422,`p`),mN(5423,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),lg()()(),Ml(5424,`tr`,17)(5425,`td`,18)(5426,`div`,19)(5427,`span`,20),mN(5428,` Small`),ql(5429,`br`),lg()()(),Ml(5430,`td`,24)(5431,`p`),mN(5432,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),lg()()(),Ml(5433,`tr`,17)(5434,`td`,18)(5435,`div`,19)(5436,`span`,20),mN(5437,` Medium`),ql(5438,`br`),lg()()(),Ml(5439,`td`,24)(5440,`p`),mN(5441,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),lg()()(),Ml(5442,`tr`,17)(5443,`td`,18)(5444,`div`,19)(5445,`span`,20),mN(5446,` Large`),ql(5447,`br`),lg()()(),Ml(5448,`td`,24)(5449,`p`),mN(5450,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return r})();var mn=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(w(Xn),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`ng-component`]],standalone:!1,decls:14,vars:4,consts:[[`p-title`,`Table`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),ql(3,`sample-po-table-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),ql(5,`sample-po-table-basic-view`)(6,`sample-po-table-labs-view`)(7,`sample-po-table-with-api-view`)(8,`sample-po-table-transport-view`)(9,`sample-po-table-airfare-view`)(10,`sample-po-table-components-view`)(11,`sample-po-table-heroes-view`)(12,`sample-po-table-draggable-view`)(13,`sample-po-table-search-ai-view`),lg()()()),l&2&&(cw(`p-actions`,a.actions),Up(2),cw(`p-active`,a.activeTab===`doc`),Up(2),cw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Je,Ze,et,nt,at,lt,mt,st,ct,ut],encapsulation:2,changeDetection:1})}return r})()}];var bt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue({imports:[NL.forChild(mn),NL]})}return r})();var xi=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue({imports:[ar,bt]})}return r})();export{xi as DocPoTableModule};