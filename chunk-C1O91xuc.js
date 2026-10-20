import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Ca as zw,Ct as Wte,Di as jk,Ei as jc,H as Iu,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt$1,Pr as R,Qi as tb,Qt as ea,Ri as nu,Rt as _oe,Sa as zk,Si as iu,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Yt as dne,Zi as t0,_r as IO,aa as v_,ai as b,ar as EK,b as A5,bi as ib,ci as cO,cn as koe,cr as FE,da as wO,dn as moe,dt as Sae,ea as uO,et as Noe,fa as we,fi as fT,ga as xx,gr as I,ht as Tn,i as _a,ii as _x,ir as EF,ji as mO,la as vx,li as dO,mi as gO,mn as ni,ni as _o,nn as goe,or as EO,pa as wg,pt as Sf,qt as cne,r as Ta,rn as h5,rr as Dx,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var St=()=>({table:`PO Table`,angular:`PO-UI`});var xt=r=>[r];var $e=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-items`]],template:function(l,a){l&1&&nu(0,`po-table`,0),l&2&&jE(`p-items`,mO(2,xt,gO(1,St)))},dependencies:[I5],encapsulation:2,changeDetection:1})}return r})();var gt=r=>({"docs-sample-code-tabs":r});var Je=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table Basic`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-basic/sample-po-table-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-basic/sample-po-table-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-table-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,gt,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,$e],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{colors=[`color-01`,`color-02`,`color-03`,`color-04`,`color-05`,`color-06`,`color-07`,`color-08`,`color-09`,`color-10`,`color-11`,`color-12`,`caption-tag-01`,`caption-tag-03`,`caption-tag-06`,`caption-tag-08`,`caption-tag-11`,`caption-tag-13`,`caption-tag-16`,`caption-tag-18`,`caption-tag-21`,`caption-tag-23`,`caption-tag-26`,`caption-tag-28`,`caption-tag-31`,`caption-tag-33`];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:`https://po-ui.io/`,number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:`Detail Information 1`,date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:`Detail Information 2`,date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:`text`,width:`30%`},number:{property:`number`,type:`number`},date:{property:`date`,type:`date`},time:{property:`time`,type:`time`},dateTime:{property:`dateTime`,label:`DateTime`,type:`dateTime`},currency:{property:`currency`,type:`currency`,format:`USD`},link:{property:`page`,label:`Link`,type:`link`},icon:{property:`icon`,type:`icon`},boolean:{property:`boolean`,type:`boolean`},subtitle:{property:`subtitle`,type:`subtitle`,width:`10%`,subtitles:[{value:`color-01`,color:`color-01`,label:`Color 1`,content:`1`},{value:`color-02`,color:`color-02`,label:`Color 2`,content:`2`},{value:`color-03`,color:`color-03`,label:`Color 3`,content:`3`},{value:`color-04`,color:`color-04`,label:`Color 4`,content:`4`},{value:`color-05`,color:`color-05`,label:`Color 5`,content:`5`},{value:`color-06`,color:`color-06`,label:`Color 6`,content:`6`},{value:`color-07`,color:`color-07`,label:`Color 7`,content:`7`},{value:`color-08`,color:`color-08`,label:`Color 8`,content:`8`},{value:`color-09`,color:`color-09`,label:`Color 9`,content:`9`},{value:`color-10`,color:`color-10`,label:`Color 10`,content:`10`},{value:`color-11`,color:`color-11`,label:`Color 11`,content:`11`},{value:`color-12`,color:`color-12`,label:`Color 12`,content:`12`}]},label:{property:`label`,type:`label`,width:`10%`,labels:[{value:`color-01`,color:`color-01`,label:`Color 1`},{value:`color-02`,color:`color-02`,label:`Color 2`},{value:`color-03`,color:`color-03`,label:`Color 3`},{value:`color-04`,color:`color-04`,label:`Color 4`},{value:`color-05`,color:`color-05`,label:`Color 5`},{value:`color-06`,color:`color-06`,label:`Color 6`},{value:`color-07`,color:`color-07`,label:`Color 7`},{value:`color-08`,color:`color-08`,label:`Color 8`},{value:`color-09`,color:`color-09`,label:`Color 9`},{value:`color-10`,color:`color-10`,label:`Color 10`},{value:`color-11`,color:`color-11`,label:`Color 11`},{value:`color-12`,color:`color-12`,label:`Color 12`},{value:`caption-tag-01`,color:`caption-tag-01`,label:`Caption 01`},{value:`caption-tag-03`,color:`caption-tag-03`,label:`Caption 03`},{value:`caption-tag-06`,color:`caption-tag-06`,label:`Caption 06`},{value:`caption-tag-08`,color:`caption-tag-08`,label:`Caption 08`},{value:`caption-tag-11`,color:`caption-tag-11`,label:`Caption 11`},{value:`caption-tag-13`,color:`caption-tag-13`,label:`Caption 13`},{value:`caption-tag-16`,color:`caption-tag-16`,label:`Caption 16`},{value:`caption-tag-18`,color:`caption-tag-18`,label:`Caption 18`},{value:`caption-tag-21`,color:`caption-tag-21`,label:`Caption 21`},{value:`caption-tag-23`,color:`caption-tag-23`,label:`Caption 23`},{value:`caption-tag-26`,color:`caption-tag-26`,label:`Caption 26`},{value:`caption-tag-28`,color:`caption-tag-28`,label:`Caption 28`},{value:`caption-tag-31`,color:`caption-tag-31`,label:`Caption 31`},{value:`caption-tag-33`,color:`caption-tag-33`,label:`Caption 33`}]},color:{property:`color`,width:`10%`,color:this.changeColor},detail:{property:`detail`,type:`detail`,detail:{columns:[{property:`info`,label:`Detail`},{property:`date`,label:`Detail Date`,type:`date`,format:`dd-MM-yy`},{property:`time`,label:`Detail Time`,type:`time`},{property:`currency`,label:`Detail Currency`,type:`currency`}],typeHeader:`inline`}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?`caption-tag-08`:`caption-tag-13`}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=[`an an-copy`,`an an-check`,`an an-camera`,`an an-plant`,`an an-building-apartment`],a=[`an an-trash`,`an an-newspaper`,`an an-gas-pump`,`an an-chats`,`an an-bluetooth`],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return`${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}:${a<10?`0`+a.toString():a.toString()}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Ke=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:`First Action`};actionTableSecond={action:this.openModal.bind(this),label:`Second Action`};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=[`hideBatchActions`,`hideTableSearch`];selection;spacing=Tn.Medium;filterType=Iu.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:`Actions`,value:`actions`},{label:`Disable first action`,value:`disableAction`,disabled:!0},{label:`Single action`,value:`singleAction`},{label:`First action visible`,value:`visibleAction`}];selectionOptions=[{label:`Selectable`,value:`selectable`},{label:`Hide select all`,value:`hideSelectAll`,disabled:!0},{label:`Single select`,value:`singleSelect`,disabled:!0}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filterModeOptions=[{label:`Starts With`,value:Iu.startsWith},{label:`Contains`,value:Iu.contains},{label:`Ends With`,value:Iu.endsWith}];columnsOptions=[{value:`text`,label:`Text`},{value:`link`,label:`Link`},{value:`number`,label:`Number`},{value:`currency`,label:`Currency`},{value:`date`,label:`Date`},{value:`time`,label:`Time`},{value:`dateTime`,label:`DateTime`},{value:`subtitle`,label:`Subtitle`},{value:`detail`,label:`Detail`},{value:`label`,label:`Label`},{value:`color`,label:`Color`},{value:`icon`,label:`Icon`},{value:`boolean`,label:`Boolean`}];propertiesOptions=[{label:`Sort`,value:`sort`},{label:`Striped`,value:`striped`},{label:`Show more disabled`,value:`showMoreDisabled`},{label:`Loading show more`,value:`loadingShowMore`},{label:`Hide detail`,value:`hideDetail`},{label:`Loading`,value:`loading`},{label:`Auto collapse`,value:`autoCollapse`},{label:`Hide columns manager`,value:`hideColumnsManager`},{label:`Hide batch actions`,value:`hideBatchActions`},{label:`Actions Right`,value:`actionsRight`},{label:`Draggable`,value:`draggable`},{label:`Hide action fixed columns`,value:`fixed`},{label:`Hide Table Search`,value:`hideTableSearch`},{label:`Virtual Scroll`,value:`virtualScroll`}];typeHeaderOptions=[{label:`Inline`,value:`inline`},{label:`None`,value:`none`},{label:`Top`,value:`top`}];typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes(`singleSelect`),l=this.selection.includes(`selectable`);this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container=``,this.customLiterals=void 0,this.height=void 0,this.componentsSize=`medium`,this.items=[],this.itemIndex=0,this.literals=``,this.maxColumns=void 0,this.properties=[`hideBatchActions`,`hideTableSearch`],this.selection=[],this.spacing=Tn.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static ɵfac=function(l){return new(l||r)(b(Ee))};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-labs`]],viewQuery:function(l,a){if(l&1&&iu(ea,7),l&2){let m;vo(m=_o())&&(a.poModal=m.first)}},standalone:!1,features:[we([Ee])],decls:34,vars:51,consts:[[`f`,`ngForm`],[3,`p-all-selected`,`p-all-unselected`,`p-change-fixed-columns`,`p-collapsed`,`p-expanded`,`p-selected`,`p-show-more`,`p-unselected`,`p-delete-items`,`p-actions`,`p-actions-right`,`p-columns`,`p-container`,`p-height`,`p-filter-type`,`p-components-size`,`p-hide-detail`,`p-hide-columns-manager`,`p-hide-batch-actions`,`p-hide-table-search`,`p-hide-select-all`,`p-items`,`p-literals`,`p-filtered-columns`,`p-loading`,`p-max-columns`,`p-selectable`,`p-spacing`,`p-loading-show-more`,`p-show-more-disabled`,`p-single-select`,`p-sort`,`p-striped`,`p-virtual-scroll`,`p-auto-collapse`,`p-draggable`,`p-hide-action-fixed-columns`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`name`,`columnsName`,`p-label`,`Columns`,`p-columns`,`4`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-columns`,`3`,`name`,`typeHeader`,`p-label`,`Column detail typeHeader`,1,`po-lg-9`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hideSelect`,`p-label`,`Column detail hideSelect`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,`p-columns`,`4`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionsDefinition`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Actions`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`selection`,`p-columns`,`4`,`p-help`,`To enable 'hide select all' and 'single select' check 'selectable'.`,`p-label`,`Selection`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas não definidas"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filteredColumns`,`p-help`,`Ex.: "text, time"`,`p-label`,`Filter Columns`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Height of table`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxColumns`,`p-clean`,``,`p-help`,`Max columns to be visible`,`p-label`,`Max Columns`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,`p-title`,`PO Table`],[`p-label`,`Chosen Item:`,3,`p-value`]],template:function(l,a){if(l&1){let m=Sx();jc(0,`po-table`,1),mt$1(`p-all-selected`,function(){return a.changeEvent(`p-all-selected`)})(`p-all-unselected`,function(){return a.changeEvent(`p-all-unselected`)})(`p-change-fixed-columns`,function(){return a.changeEvent(`p-change-fixed-columns`)})(`p-collapsed`,function(){return a.changeEvent(`p-collapsed`)})(`p-expanded`,function(){return a.changeEvent(`p-expanded`)})(`p-selected`,function(){return a.changeEvent(`p-selected`)})(`p-show-more`,function(){return a.showMore()})(`p-unselected`,function(){return a.changeEvent(`p-unselected`)})(`p-delete-items`,function(s){return a.deleteItems(s)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),wg(),nu(4,`po-divider`),jc(5,`div`,2)(6,`po-button`,4),mt$1(`p-click`,function(){return a.addItem()}),wg()(),nu(7,`po-divider`),jc(8,`form`,null,0)(10,`div`,2)(11,`po-checkbox-group`,5),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.columnsName,s)||(a.columnsName=s),v_(s)}),mt$1(`p-change`,function(){return a.updateColumns()}),wg()(),jc(12,`div`,2)(13,`po-radio-group`,6),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.columnsDefinition.detail.detail.typeHeader,s)||(a.columnsDefinition.detail.detail.typeHeader=s),v_(s)}),wg(),jc(14,`po-switch`,7),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.columnsDefinition.detail.detail.hideSelect,s)||(a.columnsDefinition.detail.detail.hideSelect=s),v_(s)}),wg()(),jc(15,`div`,2)(16,`po-checkbox-group`,8),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.properties,s)||(a.properties=s),v_(s)}),wg()(),jc(17,`div`,2)(18,`po-checkbox-group`,9),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.actionsDefinition,s)||(a.actionsDefinition=s),v_(s)}),mt$1(`p-change`,function(){return a.changeActionOptions()}),wg()(),jc(19,`div`,2)(20,`po-radio-group`,10),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.spacing,s)||(a.spacing=s),v_(s)}),wg()(),jc(21,`div`,2)(22,`po-checkbox-group`,11),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.selection,s)||(a.selection=s),v_(s)}),mt$1(`p-change`,function(){return a.changeSelectionOptions()}),wg(),jc(23,`po-radio-group`,12),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.filterType,s)||(a.filterType=s),v_(s)}),wg(),jc(24,`po-radio-group`,13),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.componentsSize,s)||(a.componentsSize=s),v_(s)}),wg()(),jc(25,`div`,2)(26,`po-input`,14),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.literals,s)||(a.literals=s),v_(s)}),mt$1(`p-change`,function(){return a.changeLiterals()}),wg(),jc(27,`po-input`,15),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.filteredColumns,s)||(a.filteredColumns=s),v_(s)}),mt$1(`p-change`,function(){return a.changeFilteredColumns()}),wg(),jc(28,`po-number`,16),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.height,s)||(a.height=s),v_(s)}),wg(),jc(29,`po-number`,17),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.maxColumns,s)||(a.maxColumns=s),v_(s)}),wg()(),jc(30,`div`,2)(31,`po-button`,18),mt$1(`p-click`,function(){return a.restore()}),wg()()(),jc(32,`po-modal`,19),nu(33,`po-info`,20),wg()}l&2&&(jE(`p-actions`,a.actions)(`p-actions-right`,a.properties.includes(`actionsRight`))(`p-columns`,a.columns)(`p-container`,a.container)(`p-height`,a.height)(`p-filter-type`,a.filterType)(`p-components-size`,a.componentsSize)(`p-hide-detail`,a.properties.includes(`hideDetail`))(`p-hide-columns-manager`,a.properties.includes(`hideColumnsManager`))(`p-hide-batch-actions`,a.properties.includes(`hideBatchActions`))(`p-hide-table-search`,a.properties.includes(`hideTableSearch`))(`p-hide-select-all`,a.selection.includes(`hideSelectAll`))(`p-items`,a.items)(`p-literals`,a.customLiterals)(`p-filtered-columns`,a.filteredColumns)(`p-loading`,a.properties.includes(`loading`))(`p-max-columns`,a.maxColumns)(`p-selectable`,a.selection.includes(`selectable`))(`p-spacing`,a.spacing)(`p-loading-show-more`,a.properties.includes(`loadingShowMore`))(`p-show-more-disabled`,a.properties.includes(`showMoreDisabled`))(`p-single-select`,a.selection.includes(`singleSelect`))(`p-sort`,a.properties.includes(`sort`))(`p-striped`,a.properties.includes(`striped`))(`p-virtual-scroll`,a.properties.includes(`virtualScroll`))(`p-auto-collapse`,a.properties.includes(`autoCollapse`))(`p-draggable`,a.properties.includes(`draggable`))(`p-hide-action-fixed-columns`,a.properties.includes(`fixed`)),rg(3),jE(`p-value`,a.event),rg(8),ib(`ngModel`,a.columnsName),jE(`p-options`,a.columnsOptions),t0(),rg(2),ib(`ngModel`,a.columnsDefinition.detail.detail.typeHeader),jE(`p-options`,a.typeHeaderOptions),t0(),rg(),ib(`ngModel`,a.columnsDefinition.detail.detail.hideSelect),t0(),rg(2),ib(`ngModel`,a.properties),jE(`p-options`,a.propertiesOptions),t0(),rg(2),ib(`ngModel`,a.actionsDefinition),jE(`p-options`,a.actionsDefinitionOptions),t0(),rg(2),ib(`ngModel`,a.spacing),jE(`p-options`,a.typeSpacing),t0(),rg(2),ib(`ngModel`,a.selection),jE(`p-options`,a.selectionOptions),t0(),rg(),ib(`ngModel`,a.filterType),jE(`p-options`,a.filterModeOptions),t0(),rg(),ib(`ngModel`,a.componentsSize),jE(`p-options`,a.componentsSizeOptions),t0(),rg(2),ib(`ngModel`,a.literals),t0(),rg(),ib(`ngModel`,a.filteredColumns),t0(),rg(),ib(`ngModel`,a.height),t0(),rg(),ib(`ngModel`,a.maxColumns),t0(),rg(4),jE(`p-value`,a.currentItem))},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,w5,_oe,ea,I5],encapsulation:2,changeDetection:1})}return r})();var Ct=r=>({"docs-sample-code-tabs":r});var Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table Labs`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-labs/sample-po-table-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-table
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-labs/sample-po-table-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-table-labs/sample-po-table-labs.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-table-labs`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ct,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ke],encapsulation:2,changeDetection:1})}return r})();var Pt=[`table`];var Ye=(()=>{class r$1{tableComponent;service=``;key;value;sampleService=``;params;filters=[];columns=[{property:`id`},{property:`name`}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Zn({type:r$1,selectors:[[`sample-po-table-with-api`]],viewQuery:function(l,a){if(l&1&&iu(Pt,5),l&2){let m;vo(m=_o())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[[`table`,``],[1,`po-row`],[`p-label`,`URL API service`,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Columns`,1,`po-md-12`],[`p-label`,`Columns`,`p-help`,`[{ property: 'name' }]`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-rows`],[`p-label`,`Filters`,1,`po-md-12`],[`p-label`,`Key`,`p-help`,`Object key`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Value`,`p-help`,`Object value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Filter`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-mt-1`,`po-md-12`,3,`p-remove`,`p-remove-all`,`p-disclaimers`],[1,`po-mt-1`,`po-md-12`,3,`p-columns`,`p-service-api`,`p-height`,`p-hide-table-search`,`p-infinite-scroll`]],template:function(l,a){if(l&1){let m=Sx();jc(0,`div`,1)(1,`po-input`,2),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.service,s)||(a.service=s),v_(s)}),mt$1(`p-change`,function(){return a.changeService(a.service)}),wg()(),jc(2,`div`,1),nu(3,`po-divider`,3),jc(4,`po-textarea`,4),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.stringColumns,s)||(a.stringColumns=s),v_(s)}),mt$1(`p-change`,function(s){return a.onChangeColumns(s)}),wg()(),jc(5,`div`,1),nu(6,`po-divider`,5),jc(7,`po-input`,6),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.key,s)||(a.key=s),v_(s)}),wg(),jc(8,`po-input`,7),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(a.value,s)||(a.value=s),v_(s)}),wg()(),jc(9,`div`,1)(10,`po-button`,8),mt$1(`p-click`,function(){return a.addFilter(a.key,a.value)}),wg()(),jc(11,`div`,1)(12,`po-disclaimer-group`,9),mt$1(`p-remove`,function(s){return a.removeItem(s)})(`p-remove-all`,function(){return a.removeAllItems()}),wg()(),jc(13,`div`,1),nu(14,`po-table`,10,0),wg()}l&2&&(rg(),ib(`ngModel`,a.service),t0(),rg(3),ib(`ngModel`,a.stringColumns),jE(`p-rows`,5),t0(),rg(3),ib(`ngModel`,a.key),t0(),rg(),ib(`ngModel`,a.value),t0(),rg(2),jE(`p-disabled`,!a.key||!a.value),rg(2),jE(`p-disclaimers`,a.filters),rg(2),jE(`p-columns`,a.columns)(`p-service-api`,a.sampleService)(`p-height`,300)(`p-hide-table-search`,!1)(`p-infinite-scroll`,!0))},dependencies:[CK,TF,ni,h5,Lf,A5,goe,I5],encapsulation:2,changeDetection:1})}return r$1})();var wt=r=>({"docs-sample-code-tabs":r});var et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-with-api-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table using API`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-with-api/sample-po-table-with-api.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-with-api/sample-po-table-with-api.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-table-with-api`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,wt,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ye],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r{getColumns(){return[{property:`code`,type:`number`,width:`8%`},{property:`product`},{property:`customer`},{property:`exit_forecast`,label:`Exit forecast`,type:`dateTime`},{property:`time_since_purchase`,label:`Time since purchase`,type:`time`,visible:!1},{property:`quantity`,label:`Quantity (Tons)`,type:`number`,width:`15%`,visible:!1},{property:`icms`,label:`ICMS`,type:`number`,format:`1.2-5`,visible:!1},{property:`status`,type:`label`,width:`8%`,labels:[{value:`delivered`,color:`caption-tag-23`,label:`Delivered`},{value:`transport`,color:`caption-tag-14`,label:`Transport`},{value:`production`,color:`caption-tag-03`,label:`Production`},{value:`stock`,color:`caption-tag-33`,label:`Stock`,icon:`an an-package`}]}]}getItems(){return[{code:1200,product:`Rice`,customer:`Angeloni`,quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`delivered`,license_plate:`MDJD9191`,batch_product:18041822,driver:`José Oliveira`},{code:1355,product:`Margarine`,customer:`Giassi`,quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`XXA5454`,batch_product:18041821,driver:`Francisco Pereira`},{code:1496,product:`Wheat flour`,customer:`Walmart`,quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`QEW5779`,batch_product:18041820,driver:`Pedro da Costa`},{code:1712,product:`Milk`,customer:`Carrefour`,quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`WWW1247`,batch_product:18041819,driver:`João da Silva`},{code:1881,product:`Oil`,customer:`Carrefour`,quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`XXI2312`,batch_product:18041825,driver:`Antonio Lima`},{code:1551,product:`Cream cheese`,customer:`Barbosa`,quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`stock`,license_plate:`XXI2359`,batch_product:18041888,driver:`Vitoria Felix`}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59);return`00:${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}`}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function kt(r,W){if(r&1){let o=Sx();jc(0,`po-widget`,2)(1,`div`,3)(2,`po-select`,4),JN(),ob(`ngModelChange`,function(a){let m=y_(o).$implicit;return sO(m.status,a)||(m.status=a),v_(a)}),wg()(),jc(3,`div`,3),nu(4,`po-info`,5)(5,`po-info`,6)(6,`po-info`,7),wg()()}if(r&2){let o=W.$implicit,l=xx();jE(`p-title`,uO(`Transport detail `,o.code)),rg(2),ib(`ngModel`,o.status),jE(`p-options`,l.statusOptions),t0(),rg(2),jE(`p-value`,o.batch_product),rg(),jE(`p-value`,o.driver),rg(),jE(`p-value`,o.license_plate)}}var tt=(()=>{class r{transportService;columns;items;statusOptions=[{label:`Delivered`,value:`delivered`},{label:`Transport`,value:`transport`},{label:`Production`,value:`production`}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!==`delivered`}static ɵfac=function(l){return new(l||r)(b(be))};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-transport`]],standalone:!1,features:[we([be])],decls:2,vars:9,consts:[[`p-spacing`,`large`,3,`p-auto-collapse`,`p-columns`,`p-hide-columns-manager`,`p-hide-table-search`,`p-items`,`p-sort`,`p-striped`],[`p-table-row-template`,``,3,`p-table-row-template-arrow-direction`,`p-table-row-template-show`],[3,`p-title`],[1,`po-row`],[`name`,`status`,`p-label`,`Transport status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Batch of product`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`Driver`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`License plate`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`]],template:function(l,a){l&1&&(jc(0,`po-table`,0),FE(1,kt,7,7,`ng-template`,1),wg()),l&2&&(jE(`p-auto-collapse`,!0)(`p-columns`,a.columns)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-sort`,!0)(`p-striped`,!0),rg(),jE(`p-table-row-template-arrow-direction`,`right`)(`p-table-row-template-show`,a.isUndelivered))},dependencies:[CK,TF,moe,_oe,I5,dne,Noe],encapsulation:2,changeDetection:1})}return r})();var Mt=r=>({"docs-sample-code-tabs":r});var nt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-transport-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table - Transport`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-transport/sample-po-table-transport.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-table
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-transport/sample-po-table-transport.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-table-transport/sample-po-table-transport.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-table-transport`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Mt,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,tt],encapsulation:2,changeDetection:1})}return r})();var Se=(()=>{class r{getColumns(){return[{property:`status`,type:`label`,labels:[{value:`available`,color:`caption-tag-13`,label:`Available`},{value:`reserved`,color:`caption-tag-08`,label:`Reserved`},{value:`closed`,color:`caption-tag-03`,label:`Closed`}]},{property:`country`},{property:`destination`},{property:`region`,type:`subtitle`,width:`180px`,subtitles:[{value:`Alps`,color:`color-01`,label:`Alps`,content:`AL`},{value:`Australasia`,color:`color-02`,label:`Australasia`,content:`AU`},{value:`British Isle`,color:`color-03`,label:`British Isle`,content:`BI`},{value:`Caucasus`,color:`color-04`,label:`Caucasus`,content:`CA`},{value:`Danube`,color:`color-05`,label:`Danube`,content:`DA`},{value:`East Asia`,color:`color-06`,label:`East Asia`,content:`EA`},{value:`Latin America`,color:`color-07`,label:`Latin America`,content:`LA`},{value:`Mediterranean`,color:`color-08`,label:`Mediterranean`,content:`ME`},{value:`Nordics`,color:`color-09`,label:`Nordics`,content:`NO`},{value:`North America`,color:`color-10`,label:`North America`,content:`NA`},{value:`Southern Africa`,color:`color-11`,label:`Southern Africa`,content:`SA`},{value:`Western Africa`,color:`color-12`,label:`Western Africa`,content:`WA`}]},{property:`date`,type:`date`},{property:`returnDate`,label:`Return Date`,type:`date`},{property:`value`,type:`currency`,format:`USD`},{property:`id`,label:`Flight Number`,type:`number`},{property:`onBoardService`,label:`On Board Service`,type:`boolean`,boolean:{trueLabel:`Yes`,falseLabel:`No`}},{property:`detail`,label:`Details`,type:`detail`,detail:{columns:[{property:`package`},{property:`tour`},{property:`time`,label:`Departure time`,type:`time`,format:`HH:mm`},{property:`distance`,label:`Distance (Miles)`,type:`number`,format:`1.0-5`}],typeHeader:`top`}}]}getItems(){return[{id:11234,initials:`BR`,country:`Brazil`,value:1e3,date:`2018-10-09`,returnDate:`2018-11-01`,class:`Economic`,onBoardService:!1,destination:`Rio de Janeiro`,airline:`Azul`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`20:10:10`,distance:`1000`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`09:15:19`,distance:`2000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`07:10:20`,distance:`3000`}]},{id:22467,initials:`FR`,country:`France`,value:5e3,date:`2019-12-13`,returnDate:`2019-12-31`,class:`Economic`,onBoardService:!1,destination:`Paris`,airline:`British Airways`,status:`closed`,region:`Alps`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`10:15:10`,distance:`4800`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`22:15:10`,distance:`11000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`10:15:10`,distance:`1000`}]},{id:40670,initials:`SN`,country:`Senegal`,value:3200,date:`2017-11-22`,returnDate:`2018-12-01`,class:`Economic`,onBoardService:!1,destination:`Dakar`,airline:`Iberia`,status:`closed`,region:`Western Africa`},{id:34679,initials:`PT`,country:`Portugal`,value:5500,date:`2017-10-10`,returnDate:`2018-10-20`,class:`Economic`,onBoardService:!1,destination:`Lisbon`,airline:`Air Europa`,status:`closed`,region:`Mediterranean`},{id:48999,initials:`RU`,country:`Russia`,value:6700,date:`2019-01-17`,returnDate:`2019-02-20`,class:`First Class`,onBoardService:!0,destination:`Moscow`,airline:`Lufthansa`,status:`reserved`,region:`Caucasus`},{id:48999,initials:`US`,country:`United States`,value:2700.49,date:`2018-10-17`,returnDate:`2018-10-29`,class:`Economic`,onBoardService:!1,destination:`Los Angeles`,airline:`American Airlines`,status:`reserved`,region:`North America`},{id:54563,initials:`CL`,country:`Chile`,value:2e3,date:`2018-10-20`,returnDate:`2018-11-01`,destination:`Cusco`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`available`,region:`Latin America`},{id:64568,initials:`MX`,country:`Mexico`,value:2100,date:`2018-03-10`,returnDate:`2018-05-09`,destination:`Mexico City`,class:`Economic`,onBoardService:!1,airline:`Aero México`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`12:10:10`,distance:`2200`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`11:10:10`,distance:`1500`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`16:10:10`,distance:`1800`}]},{id:75456,initials:`IE`,country:`Ireland`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Cork`,class:`First Class`,onBoardService:!0,airline:`Lufthansa`,status:`reserved`,region:`British Isle`},{id:23445,initials:`ZA`,country:`South Africa`,value:1900,date:`2018-12-10`,returnDate:`2018-12-25`,destination:`Cape Town`,class:`Economic`,onBoardService:!1,airline:`South African Airways`,status:`available`,region:`Southern Africa`},{id:19238,initials:`AU`,country:`Australia`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Sydney`,class:`First Class`,onBoardService:!0,airline:`Jetstar Airways`,status:`reserved`,region:`Australasia`},{id:85456,initials:`JP`,country:`Japan`,value:5900,date:`2018-10-25`,returnDate:`2018-11-10`,destination:`Tokio`,class:`Executive`,onBoardService:!0,airline:`Japan Airlines`,status:`available`,region:`East Asia`},{id:94565,initials:`CN`,country:`China`,value:2900,date:`2018-10-10`,returnDate:`2018-10-25`,destination:`Beijing`,class:`Economic`,onBoardService:!1,airline:`Malaysia Airlines`,status:`available`,region:`East Asia`},{id:32330,initials:`UK`,country:`England`,value:2090.5,date:`2018-10-07`,returnDate:`2018-11-15`,destination:`London`,class:`Executive`,onBoardService:!0,airline:`British Airways`,status:`available`,region:`British Isle`},{id:14560,initials:`CA`,country:`Canada`,value:2090.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Quebec`,class:`Economic`,onBoardService:!1,airline:`American Airlines`,status:`available`,region:`North America`},{id:93800,initials:`IS`,country:`Iceland`,value:6300,date:`2018-10-12`,returnDate:`2018-10-27`,destination:`Reykjavík`,class:`Economic`,onBoardService:!1,airline:`Star Alliance`,status:`available`,region:`Nordics`},{id:34239,initials:`DE`,country:`Germany`,value:3070.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Berlin`,class:`Executive`,onBoardService:!0,airline:`LATAM`,status:`available`,region:`Danube`},{id:45611,initials:`AR`,country:`Argentina`,value:3500.5,date:`2018-12-07`,returnDate:`2018-12-29`,destination:`Ushuaia`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`reserved`,region:`Latin America`}]}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var it=(()=>{class r$2{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:`an an-currency-circle-dollar`,label:`Apply Discount`,disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:`an an-info`,label:`Details`},{action:this.remove.bind(this),icon:`po-icon an an-trash`,label:`Remove`}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem(`initial-columns`)){this.initialColumns=localStorage.getItem(`initial-columns`).split(`,`);let l=[...this.columns.map(a=>s(r({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem(`initial-columns`).split(`,`),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:`Add to cart`,message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case`available`:this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case`reserved`:this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case`closed`:this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`)}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=s(r({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem(`initial-columns`,o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static ɵfac=function(l){return new(l||r$2)(b(Se),b(zu),b(Wte))};static ɵcmp=Zn({type:r$2,selectors:[[`sample-po-table-airfare`]],viewQuery:function(l,a){if(l&1&&iu(ea,7)(I5,7),l&2){let m;vo(m=_o())&&(a.poModal=m.first),vo(m=_o())&&(a.poTable=m.first)}},standalone:!1,features:[we([Se,Wte])],decls:16,vars:24,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-change-visible-columns`,`p-restore-column-manager`,`p-delete-items`,`p-container`,`p-height`,`p-hide-batch-actions`,`p-hide-table-search`,`p-selectable`,`p-sort`,`p-striped`,`p-actions`,`p-columns`,`p-items`,`p-max-columns`,`p-virtual-scroll`],[`p-label`,`Total Value`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[`p-label`,`Expanded Itens`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[1,`po-row`],[`p-icon`,`an an-shopping-cart-simple`,`p-label`,`Add items to cart`,1,`po-md-3`,3,`p-click`],[`p-label`,`Expand all detail`,1,`po-md-3`,3,`p-click`],[`p-label`,`Collapse all detail`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[`p-label`,`Airline`,1,`po-sm-6`,3,`p-value`],[`p-label`,`Initials`,1,`po-sm-2`,3,`p-value`],[`p-label`,`Class`,1,`po-sm-4`,3,`p-value`]],template:function(l,a){l&1&&(jc(0,`div`,0),iO(1,`Choose one or more promotional airfares`),wg(),nu(2,`po-divider`),jc(3,`po-table`,1),mt$1(`p-collapsed`,function(){return a.onCollapseDetail()})(`p-expanded`,function(){return a.onExpandDetail()})(`p-selected`,function(p){return a.sumTotal(p)})(`p-unselected`,function(p){return a.decreaseTotal(p)})(`p-change-visible-columns`,function(p){return a.changeColumnVisible(p)})(`p-restore-column-manager`,function(){return a.restoreColumn()})(`p-delete-items`,function(p){return a.deleteItems(p)}),wg(),nu(4,`po-divider`)(5,`po-info`,2),EO(6,`currency`),nu(7,`po-info`,3),jc(8,`div`,4)(9,`po-button`,5),mt$1(`p-click`,function(){return a.addToCart()}),wg(),jc(10,`po-button`,6),mt$1(`p-click`,function(){return a.expandAll()}),wg(),jc(11,`po-button`,7),mt$1(`p-click`,function(){return a.collapseAll()}),wg()(),jc(12,`po-modal`,8),nu(13,`po-info`,9)(14,`po-info`,10)(15,`po-info`,11),wg()),l&2&&(rg(3),jE(`p-container`,!0)(`p-height`,400)(`p-hide-batch-actions`,!1)(`p-hide-table-search`,!1)(`p-selectable`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-actions`,a.actions)(`p-columns`,a.columns)(`p-items`,a.items)(`p-max-columns`,7)(`p-virtual-scroll`,!1),rg(2),jE(`p-value`,cO(IO(6,21,a.total,`USD`))),rg(2),jE(`p-value`,a.totalExpanded),rg(5),jE(`p-title`,dO(``,a.detail?.destination,` - `,a.detail?.country)),rg(),jE(`p-value`,a.detail?.airline),rg(),jE(`p-value`,a.detail?.initials),rg(),jE(`p-value`,a.detail?.class))},dependencies:[ni,Lf,_oe,ea,I5,zk],encapsulation:2,changeDetection:1})}return r$2})();var Lt=r=>({"docs-sample-code-tabs":r});var at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-airfare-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table - Airfare`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-airfare/sample-po-table-airfare.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-airfare/sample-po-table-airfare.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-table-airfare/sample-po-table-airfare.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-table-airfare`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Lt,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,it],encapsulation:2,changeDetection:1})}return r})();var H;(function(r){r[r.Stable=0]=`Stable`,r[r.Experimental=1]=`Experimental`,r[r.RoadMap=2]=`RoadMap`})(H||(H={}));var xe=(()=>{class r{items=[{component:{favorite:[`favorite`,`documentation`],name:`PO Select`,description:`Display a list of items and allows selection`,link:`/documentation/po-select`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Checkbox`,description:`Group of square buttons that allows multiple items to be selected`,link:`/documentation/po-checkbox-group`,extra:`Best Practices`,extras:[`Short and objective texts for items`,`Use with short lists`,`For big lists use PO Multiselect`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Login`,description:`Template for authentication`,link:`/documentation/po-page-login`,extra:`Features`,extras:[],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Number`,description:`Input that allows only numbers`,link:`/documentation/po-number`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Dynamic Table`,description:`Template for list resources with a table`,link:`/documentation/po-page-dynamic-table`,extra:`Features`,extras:[`6 defaults actions`,`Use Metadata to build your page`,`No code`,`Customization`],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Combo`,description:`Display a list of items with filter and allows selection`,link:`/documentation/po-combo`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Notification`,description:`Show notification easily and quickly`,link:`/documentation/po-notification`,extra:`Features`,extras:[`4 types of notifications`,`Define time for your notifications`,`Use actions in your notification`],status:0,type:`service`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Multiselect`,description:`Display a list of items and allows multiple selection`,link:`/documentation/po-multiselect`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[],name:`PO Grid`,description:`Create a grid for edition`,link:`/documentation/po-grid`,extra:`Features`,extras:[],status:2,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Input`,description:`Input for general texts`,link:`/documentation/po-input`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Textarea`,description:`Larger input for big texts`,link:`/documentation/po-textarea`,extra:`Best Practices`,extras:[`Recommended to large texts like observations and details`,`For short texts use po-input`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Datepicker`,description:`Input with calendar for dates`,link:`/documentation/po-datepicker`,extra:`Features`,extras:[`Multiple idioms ( pt, es , en)`,`Custom date formats`,`Period validation (start date and end date)`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Email`,description:`Input that allows valid email texts (username@email.com)`,link:`/documentation/po-email`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Url`,description:`Input that expects a valid url as text (http://www.url.com)`,link:`/documentation/po-url`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Password`,description:`Input with bullet text to type passwords`,link:`/documentation/po-password`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Login`,description:`Input with a user icon that represents a login field`,link:`/documentation/po-login`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Upload`,description:`Upload file(s) with a loading bar`,link:`/documentation/po-upload`,extra:`Features`,extras:[`Multiple file selection`,`Automatic upload after click`,`File format and size restriction`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Avatar`,description:`Creates a circle with a picture inside`,link:`/documentation/po-avatar`,extra:`Features`,extras:[`Multiple sizes`,`Default image`],status:0,type:`component`}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(`.`).length>1){let s=m.split(`.`)[0],ye=m.split(`.`)[1];return o[s][ye]<l[s][ye]?p===Sf.Ascending?-1:1:p===Sf.Ascending?1:-1}else return o[m]<l[m]?p===Sf.Ascending?-1:1:p===Sf.Ascending?1:-1}static ɵfac=function(l){return new(l||r)};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function zt(r,W){if(r&1&&(jc(0,`div`),iO(1),EO(2,`uppercase`),wg()),r&2){let o=W.$implicit;qx(uO(`badge `,o)),rg(),tb(wO(2,4,o))}}function Vt(r,W){if(r&1&&(jc(0,`ul`)(1,`li`,4),iO(2),wg(),nu(3,`po-divider`),wg()),r&2){let o=W.$implicit;rg(2),tb(o)}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:`component.status`,type:`label`,label:`Status`,width:`5%`,labels:[{value:H.Stable,color:`caption-tag-13`,label:`Stable`,textColor:`white`,tooltip:`Published component`},{value:H.Experimental,color:`caption-tag-08`,label:`Experimental`,textColor:`white`,tooltip:`Component in homologation`},{value:H.RoadMap,color:`caption-tag-03`,label:`Roadmap`,textColor:`white`,tooltip:`Component in roadmap`}]},{property:`component.name`,label:`Name`,type:`link`},{property:`component.type`,label:`Type`,type:`columnTemplate`,width:`10%`},{property:`component.description`,label:`Descrição`,color:this.experimentalColor.bind(this)},{property:`component.extra`,label:`Extras`,width:`10%`,type:`link`,tooltip:`Additional details`,action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:`component.favorite`,label:`Actions`,type:`icon`,sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:`an an-star`,tooltip:`Favorite`,value:`favorite`},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:`an an-arrow-square-out`,tooltip:`Click to go to documentation`,value:`documentation`}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===H.Experimental?`caption-tag-08`:`caption-tag-13`}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==H.Stable}canShowExtras(o){return o?.component?.status!==H.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?`caption-tag-08`:`caption-tag-13`}static ɵfac=function(l){return new(l||r)(b(xe),b(Sn))};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-components`]],viewQuery:function(l,a){if(l&1&&iu(ea,7),l&2){let m;vo(m=_o())&&(a.poModal=m.first)}},standalone:!1,features:[we([xe])],decls:8,vars:9,consts:[[1,`po-font-text-large`,`po-text-color-neutral-dark-40`],[`p-container`,`shadow`,3,`p-show-more`,`p-sort-by`,`p-loading-show-more`,`p-columns`,`p-items`,`p-show-more-disabled`,`p-sort`],[`p-table-column-template`,``,3,`p-property`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[1,`po-font-text`]],template:function(l,a){l&1&&(jc(0,`div`,0),iO(1,`PO UI Library`),wg(),nu(2,`po-divider`),jc(3,`po-table`,1),mt$1(`p-show-more`,function(p){return a.showMore(p)})(`p-sort-by`,function(p){return a.sort(p)}),FE(4,zt,3,6,`ng-template`,2),wg(),jc(5,`po-modal`,3),_x(6,Vt,4,1,`ul`,null,vx),wg()),l&2&&(rg(3),jE(`p-loading-show-more`,a.isLoading)(`p-columns`,a.columns)(`p-items`,a.items)(`p-show-more-disabled`,a.showMoreDisabled)(`p-sort`,!0),rg(),jE(`p-property`,`component.type`),rg(),jE(`p-title`,dO(``,a.title,` - `,a.extraInformation?.component)),rg(),Dx(a.extraInformation?.extras))},dependencies:[Lf,ea,I5,cne,jk],styles:[`.badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}`],changeDetection:1})}return r})();var jt=r=>({"docs-sample-code-tabs":r});var lt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-components-view`]],standalone:!1,decls:38,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table - Po Field Components`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-components/sample-po-table-components.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-components/sample-po-table-components.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-table-components/sample-po-table-components.enum.ts`),wg(),jc(23,`pre`,9),iO(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),wg(),jc(25,`label`,6),iO(26,`sample-po-table-components/sample-po-table-components.service.ts`),wg(),jc(27,`pre`,9),iO(28,`import { Injectable } from '@angular/core';

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
`),wg()()(),jc(29,`po-tab`,10)(30,`div`)(31,`label`,6),iO(32,`sample-po-table-components/sample-po-table-components.component.css`),wg(),jc(33,`pre`,11),iO(34,`.badge {
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
`),wg()()()()(),jc(35,`div`,12),nu(36,`sample-po-table-components`),wg(),nu(37,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,jt,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ot],encapsulation:2,changeDetection:1})}return r})();var he=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:`id`,label:`Id`,type:`string`,width:`90px`},{property:`label`,label:`Name`,type:`string`,width:`90px`},{property:`email`,label:`E-mail`,type:`string`,width:`120px`}]}getItems(){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes`).pipe(fT(`items`))}static ɵfac=function(l){return new(l||r)(I(zw))};static ɵprov=R({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Qt=[`POItemsOri`];var Gt=[`POItemsSelected`];var rt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l===`new`)this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static ɵfac=function(l){return new(l||r)(b(he))};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-heroes`]],viewQuery:function(l,a){if(l&1&&iu(Qt,7)(Gt,7),l&2){let m;vo(m=_o())&&(a.poItemsOri=m.first),vo(m=_o())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[we([he])],decls:11,vars:16,consts:[[`POItemsOri`,``],[`POItemsSelected`,``],[1,`po-row`,`po-pb-2`],[1,`po-md-6`],[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[`p-selectable`,`true`,`p-infinite-scroll-distance`,`80`,`p-height`,`300`,3,`p-selected`,`p-unselected`,`p-delete-items`,`p-columns`,`p-infinite-scroll`,`p-hide-select-all`,`p-hide-table-search`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`],[`p-height`,`300`,3,`p-columns`,`p-hide-table-search`,`p-striped`,`p-infinite-scroll`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`]],template:function(l,a){l&1&&(jc(0,`div`,2)(1,`div`,3)(2,`div`,4),iO(3,`Choose one or more heroes for your team`),wg(),jc(4,`po-table`,5,0),mt$1(`p-selected`,function(p){return a.changeOptions(p,`new`)})(`p-unselected`,function(p){return a.changeOptions(p,`change`)})(`p-delete-items`,function(p){return a.deleteItems(p)}),wg()(),jc(6,`div`,3)(7,`div`,4),iO(8,`Here your chosen heroes`),wg(),nu(9,`po-table`,6,1),wg()()),l&2&&(rg(4),jE(`p-columns`,a.columns)(`p-infinite-scroll`,!0)(`p-hide-select-all`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1),rg(5),jE(`p-columns`,a.columns)(`p-hide-table-search`,!1)(`p-striped`,!0)(`p-infinite-scroll`,!0)(`p-items`,a.itemsSelected)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1))},dependencies:[I5],encapsulation:2,changeDetection:1})}return r})();var Jt=r=>({"docs-sample-code-tabs":r});var mt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table - Heroes`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-heroes/sample-po-table-heroes.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row po-pb-2">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-heroes/sample-po-table-heroes.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-table-heroes/sample-po-table-heroes.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-table-heroes`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Jt,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,rt],encapsulation:2,changeDetection:1})}return r})();var Kt=()=>({code:`001`,table:`PO Table`,angular:`PO-UI`});var Zt=r=>[r];var dt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-draggable`]],standalone:!1,decls:4,vars:7,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-items`,`p-draggable`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(l,a){l&1&&(jc(0,`div`,0),iO(1,` Choose one column and drag to another horizontal position in the table and drop
`),wg(),nu(2,`po-divider`)(3,`po-table`,1)),l&2&&(rg(3),jE(`p-items`,mO(5,Zt,gO(4,Kt)))(`p-draggable`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[Lf,I5],encapsulation:2,changeDetection:1})}return r})();var en=r=>({"docs-sample-code-tabs":r});var st=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-draggable-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table Drag and Drop`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-draggable/sample-po-table-draggable.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-draggable/sample-po-table-draggable.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-table-draggable`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,en,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,dt],encapsulation:2,changeDetection:1})}return r})();function nn(r,W){if(r&1){let o=Sx();jc(0,`po-filter-chip`,6),mt$1(`p-selected-change`,function(a){let m=y_(o).$implicit,p=xx();return v_(p.onSuggestionChange(m,a))}),wg()}if(r&2){let o=W.$implicit,l=xx();jE(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}var pt=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=[`salário acima de 15000`,`funcionários de Curitiba`,`departamento Engenharia com salário acima de 10000`,`admitidos depois de 2020`,`com menos de 30 anos`,`de São Paulo com salário abaixo de 15000`,`departamento Design`,`salário entre 8000 e 12000`];AI_URL=`https://po-sample-api.onrender.com/v1/ai/filter`;columns=[{property:`name`,label:`Nome`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`},{property:`department`,label:`Departamento`},{property:`salary`,label:`Salário`,type:`currency`,format:`BRL`},{property:`hireDate`,label:`Admissão`,type:`date`}];items=[{name:`Tony Stark`,age:34,city:`São Paulo`,department:`Engenharia`,salary:12e3,hireDate:`2019-03-15`},{name:`Rachel Green`,age:28,city:`Curitiba`,department:`Design`,salary:8500,hireDate:`2021-07-01`},{name:`Michael Scott`,age:42,city:`São Paulo`,department:`Gestão`,salary:18e3,hireDate:`2015-11-20`},{name:`Hermione Granger`,age:25,city:`Recife`,department:`Engenharia`,salary:7200,hireDate:`2023-01-10`},{name:`Walter White`,age:30,city:`Belo Horizonte`,department:`Design`,salary:9500,hireDate:`2020-05-18`},{name:`Monica Geller`,age:38,city:`Rio de Janeiro`,department:`Gestão`,salary:15e3,hireDate:`2017-09-03`},{name:`Peter Parker`,age:27,city:`São Paulo`,department:`Engenharia`,salary:1e4,hireDate:`2022-04-12`},{name:`Daenerys Targaryen`,age:45,city:`Curitiba`,department:`Engenharia`,salary:21e3,hireDate:`2012-06-30`}];searchAiField={url:this.AI_URL,placeholder:`Ex: engenheiros de São Paulo com salário acima de 10000`};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||r)(b(zu))};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-search-ai`]],viewQuery:function(l,a){if(l&1&&iu(I5,5),l&2){let m;vo(m=_o())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,`po-font-text-large-bold`,`po-mt-2`,`po-mb-1`],[1,`po-font-text-small`,`po-mb-2`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[3,`p-search-ai-result`,`p-search-ai-low-confidence`,`p-search-ai-error`,`p-columns`,`p-items`,`p-search-ai-field`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`]],template:function(l,a){l&1&&(jc(0,`p`,0),iO(1,`PO Search A.I.`),wg(),jc(2,`p`,1),iO(3,` O `),jc(4,`strong`),iO(5,`PO Search A.I.`),wg(),iO(6,` é um recurso de busca inteligente integrado ao `),jc(7,`code`),iO(8,`po-table`),wg(),iO(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),wg(),jc(10,`p`,2),iO(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),wg(),jc(12,`div`,3),_x(13,nn,1,3,`po-filter-chip`,4,vx),wg(),jc(15,`po-table`,5),mt$1(`p-search-ai-result`,function(p){return a.onAiResult(p)})(`p-search-ai-low-confidence`,function(p){return a.onAiLowConfidence(p)})(`p-search-ai-error`,function(p){return a.onAiError(p)}),wg()),l&2&&(rg(13),Dx(a.examples),rg(2),jE(`p-columns`,a.columns)(`p-items`,a.items)(`p-search-ai-field`,a.searchAiField))},dependencies:[koe,I5],encapsulation:2})}return r})();var on=r=>({"docs-sample-code-tabs":r});var ct=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-search-ai-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Table - Search A.I.`),wg(),jc(4,`a`,2),mt$1(`click`,function(){return a.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`),wg(),jc(13,`pre`,7),iO(14,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-table-search-ai`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+a.sampleCodeButtonIcon),rg(),Ag(` `,a.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,on,a.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,pt],encapsulation:2,changeDetection:1})}return r})();var ut=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Zn({type:r,selectors:[[`sample-po-table-doc`]],standalone:!1,decls:5488,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table-row-template`],[`href`,`/documentation/po-table-column-template`],[`href`,`/documentation/po-table-cell-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableAction[]`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn[]`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoTableLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTableSearchAiField`],[`href`,`https://github.com/po-ui/po-sample-api`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`{`,`key:`,`value`,`}`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumnSortType`],[`pan`,``,1,`docs-api-property-type`,`PoTableBoolean`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoTableDetail`],[`href`,`https://angular.dev/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnIcon>`],[`href`,`documentation/po-table#tableColumnIcon`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnLabel>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableSubtitleColumn>`],[`pan`,``,1,`docs-api-property-type`,`'auto'`],[`pan`,``,1,`docs-api-property-type`,`'parser'`],[`pan`,``,1,`docs-api-property-type`,`'server'`],[`pan`,``,1,`docs-api-property-type`,`'none'`],[`pan`,``,1,`docs-api-property-type`,`((result:`,`PoSearchAiResult)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`tableColumnIcon`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableDetailColumn>`]],template:function(l,a){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoTableModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-table`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoTableComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),wg(),jc(15,`p`),iO(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),jc(17,`strong`),iO(18,`Carregar mais resultados`),wg(),iO(19,`.`),wg(),jc(20,`blockquote`)(21,`p`),iO(22,`As linhas de detalhes podem também ser customizadas através do `),jc(23,`a`,6)(24,`code`),iO(25,`p-table-row-template`),wg()(),iO(26,`.`),wg()(),jc(27,`blockquote`)(28,`p`),iO(29,`As colunas podem ser customizadas através dos templates `),jc(30,`a`,7)(31,`code`),iO(32,`p-table-column-template`),wg()(),iO(33,`
e `),jc(34,`a`,8)(35,`code`),iO(36,`p-table-cell-template`),wg()(),iO(37,`.`),wg()(),jc(38,`p`),iO(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),wg(),jc(40,`p`),iO(41,`Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um `),jc(42,`em`),iO(43,`scroll`),wg(),iO(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),wg(),jc(45,`h4`),iO(46,`Tokens customizáveis`),wg(),jc(47,`p`),iO(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(49,`blockquote`)(50,`p`),iO(51,`Para maiores informações, acesse o guia `),jc(52,`a`,9),iO(53,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(54,`.`),wg()(),jc(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),iO(59,`Propriedade`),wg(),jc(60,`th`),iO(61,`Descrição`),wg(),jc(62,`th`),iO(63,`Valor Padrão`),wg()()(),jc(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),iO(68,`Default Values`),wg()(),nu(69,`td`)(70,`td`),wg(),jc(71,`tr`)(72,`td`)(73,`code`),iO(74,`--font-family`),wg()(),jc(75,`td`),iO(76,`Família tipográfica usada`),wg(),jc(77,`td`)(78,`code`),iO(79,`var(--font-family-theme)`),wg()()(),jc(80,`tr`)(81,`td`)(82,`code`),iO(83,`--background-color`),wg()(),jc(84,`td`),iO(85,`Cor de background`),wg(),jc(86,`td`)(87,`code`),iO(88,`var(--color-neutral-light-00)`),wg()()(),jc(89,`tr`)(90,`td`)(91,`code`),iO(92,`--color`),wg()(),jc(93,`td`),iO(94,`Cor principal da table`),wg(),jc(95,`td`)(96,`code`),iO(97,`var(--color-neutral-dark-95)`),wg()()(),jc(98,`tr`)(99,`td`)(100,`code`),iO(101,`--background-striped-color`),wg()(),jc(102,`td`),iO(103,`Cor do background quando striped`),wg(),jc(104,`td`)(105,`code`),iO(106,`var(--color-neutral-light-05)`),wg()()(),jc(107,`tr`)(108,`td`)(109,`code`),iO(110,`--color-line`),wg()(),jc(111,`td`),iO(112,`Cor das linhas`),wg(),jc(113,`td`)(114,`code`),iO(115,`var(--color-neutral-mid-40)`),wg()()(),jc(116,`tr`)(117,`td`)(118,`strong`),iO(119,`Hover`),wg()(),nu(120,`td`)(121,`td`),wg(),jc(122,`tr`)(123,`td`)(124,`code`),iO(125,`--color-hover`),wg()(),jc(126,`td`),iO(127,`Cor principal no estado hover`),wg(),jc(128,`td`)(129,`code`),iO(130,`var(--color-action-hover)`),wg()()(),jc(131,`tr`)(132,`td`)(133,`code`),iO(134,`--background-color-hover`),wg()(),jc(135,`td`),iO(136,`Cor de background no estado hover`),wg(),jc(137,`td`)(138,`code`),iO(139,`var(--color-brand-01-lighter)`),wg()()(),jc(140,`tr`)(141,`td`)(142,`strong`),iO(143,`Focused`),wg()(),nu(144,`td`)(145,`td`),wg(),jc(146,`tr`)(147,`td`)(148,`code`),iO(149,`--outline-color-focused`),wg()(),jc(150,`td`),iO(151,`Cor do outline do estado de focus`),wg(),jc(152,`td`)(153,`code`),iO(154,`var(--color-action-focus)`),wg()()(),jc(155,`tr`)(156,`td`)(157,`strong`),iO(158,`Disabled`),wg()(),nu(159,`td`)(160,`td`),wg(),jc(161,`tr`)(162,`td`)(163,`code`),iO(164,`--color-disabled`),wg()(),jc(165,`td`),iO(166,`Cor principal no estado disabled`),wg(),jc(167,`td`)(168,`code`),iO(169,`var(--color-neutral-mid-40)`),wg()()(),jc(170,`tr`)(171,`td`)(172,`strong`),iO(173,`Headline`),wg()(),nu(174,`td`)(175,`td`),wg(),jc(176,`tr`)(177,`td`)(178,`code`),iO(179,`--background-color-headline`),wg(),iO(180,` \xA0`),wg(),jc(181,`td`),iO(182,`Cor do cabeçalho`),wg(),jc(183,`td`)(184,`code`),iO(185,`var(--color-neutral-light-10)`),wg()()(),jc(186,`tr`)(187,`td`)(188,`code`),iO(189,`--font-weight-headline`),wg()(),jc(190,`td`),iO(191,`Peso da fonte do cabeçalho`),wg(),jc(192,`td`)(193,`code`),iO(194,`var(--font-weight-bold)`),wg()()(),jc(195,`tr`)(196,`td`)(197,`strong`),iO(198,`Selected`),wg()(),nu(199,`td`)(200,`td`),wg(),jc(201,`tr`)(202,`td`)(203,`code`),iO(204,`--background-color-selected`),wg(),iO(205,`\xA0`),wg(),jc(206,`td`),iO(207,`Cor de background no estado de selecionado`),wg(),jc(208,`td`)(209,`code`),iO(210,`var(--color-brand-01-lightest)`),wg()()(),jc(211,`tr`)(212,`td`)(213,`strong`),iO(214,`Actived`),wg()(),nu(215,`td`)(216,`td`),wg(),jc(217,`tr`)(218,`td`)(219,`code`),iO(220,`--color-actived`),wg()(),jc(221,`td`),iO(222,`Cor do texto no estado de selecionado`),wg(),jc(223,`td`)(224,`code`),iO(225,`var(--color-neutral-dark-90)`),wg()()(),jc(226,`tr`)(227,`td`)(228,`code`),iO(229,`--background-color-actived`),wg()(),jc(230,`td`),iO(231,`Cor de background no estado de selecionado`),wg(),jc(232,`td`)(233,`code`),iO(234,`var(--color-brand-01-light)`),wg()()()()()(),jc(235,`div`,10)(236,`h4`,11),iO(237,`Seletor`),wg(),jc(238,`pre`,12),iO(239,`<po-table
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
`),wg()(),jc(240,`h4`,13),iO(241,`Propriedades`),wg(),jc(242,`table`,14)(243,`tr`,15)(244,`th`,16),iO(245,`Nome`),wg(),jc(246,`th`,16),iO(247,`Tipo`),wg(),jc(248,`th`,16),iO(249,`Padrão`),wg(),jc(250,`th`,16),iO(251,`Descrição`),wg()(),jc(252,`tr`,17)(253,`td`,18)(254,`div`,19)(255,`span`,20),iO(256,` p-actions-right`),nu(257,`br`),wg()()(),jc(258,`td`,21)(259,`code`,22),iO(260,`boolean`),wg()(),jc(261,`td`,23)(262,`p`)(263,`code`),iO(264,`false`),wg()()(),jc(265,`td`,24)(266,`em`)(267,`strong`),iO(268,`(opcional)`),wg()(),jc(269,`p`),iO(270,`Define que a coluna de ações ficará no lado direito da tabela.`),wg()()(),jc(271,`tr`,17)(272,`td`,18)(273,`div`,19)(274,`span`,20),iO(275,` p-actions`),nu(276,`br`),wg()()(),jc(277,`td`,21)(278,`code`,25),iO(279,`PoTableAction[]`),wg()(),jc(280,`td`,23),iO(281,`-`),wg(),jc(282,`td`,24)(283,`em`)(284,`strong`),iO(285,`(opcional)`),wg()(),jc(286,`p`),iO(287,`Define uma lista de ações.`),wg(),jc(288,`p`),iO(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),jc(290,`a`,26)(291,`strong`),iO(292,`an an-dots-three`),wg()(),iO(293,` que listará as ações ao ser clicado.`),wg(),jc(294,`p`)(295,`strong`),iO(296,`A coluna de ações não será exibida quando:`),wg()(),jc(297,`ul`)(298,`li`),iO(299,`a lista conter valores inválidos ou indefinidos.`),wg(),jc(300,`li`),iO(301,`tenha uma única ação e a mesma não for visível.`),wg()()()(),jc(302,`tr`,17)(303,`td`,18)(304,`div`,27)(305,`span`,28),iO(306,` (p-all-selected)`),nu(307,`br`),wg()()(),jc(308,`td`,21)(309,`code`,29),iO(310,`EventEmitter`),wg()(),jc(311,`td`,23),iO(312,`-`),wg(),jc(313,`td`,24)(314,`em`)(315,`strong`),iO(316,`(opcional)`),wg()(),jc(317,`p`),iO(318,`Evento executado quando todas as linhas são selecionadas por meio do `),jc(319,`em`),iO(320,`checkbox`),wg(),iO(321,` que seleciona todas as linhas.`),wg()()(),jc(322,`tr`,17)(323,`td`,18)(324,`div`,27)(325,`span`,28),iO(326,` (p-all-unselected)`),nu(327,`br`),wg()()(),jc(328,`td`,21)(329,`code`,29),iO(330,`EventEmitter`),wg()(),jc(331,`td`,23),iO(332,`-`),wg(),jc(333,`td`,24)(334,`em`)(335,`strong`),iO(336,`(opcional)`),wg()(),jc(337,`p`),iO(338,`Evento executado quando a seleção das linhas é desmarcada por meio do `),jc(339,`em`),iO(340,`checkbox`),wg(),iO(341,` que seleciona todas as linhas.`),wg()()(),jc(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),iO(346,` p-auto-collapse`),nu(347,`br`),wg()()(),jc(348,`td`,21)(349,`code`,22),iO(350,`boolean`),wg()(),jc(351,`td`,23)(352,`p`)(353,`code`),iO(354,`false`),wg()()(),jc(355,`td`,24)(356,`em`)(357,`strong`),iO(358,`(opcional)`),wg()(),jc(359,`p`),iO(360,`Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.`),wg()()(),jc(361,`tr`,17)(362,`td`,18)(363,`div`,27)(364,`span`,28),iO(365,` (p-change-fixed-columns)`),nu(366,`br`),wg()()(),jc(367,`td`,21)(368,`code`,29),iO(369,`EventEmitter`),wg()(),jc(370,`td`,23),iO(371,`-`),wg(),jc(372,`td`,24)(373,`em`)(374,`strong`),iO(375,`(opcional)`),wg()(),jc(376,`p`),iO(377,`Evento disparado ao alterar o estado de fixação de uma coluna no gerenciador de colunas.`),wg(),jc(378,`p`),iO(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),wg(),jc(380,`blockquote`)(381,`p`),iO(382,`Incompatível com `),jc(383,`code`),iO(384,`p-hide-action-fixed-columns`),wg(),iO(385,`. Quando esta propriedade estiver ativa, o evento não será disparado.`),wg()()()(),jc(386,`tr`,17)(387,`td`,18)(388,`div`,27)(389,`span`,28),iO(390,` (p-change-visible-columns)`),nu(391,`br`),wg()()(),jc(392,`td`,21)(393,`code`,29),iO(394,`EventEmitter`),wg()(),jc(395,`td`,23),iO(396,`-`),wg(),jc(397,`td`,24)(398,`em`)(399,`strong`),iO(400,`(opcional)`),wg()(),jc(401,`p`),iO(402,`Evento disparado ao fechar o page slide do gerenciador de colunas após alterar as colunas visíveis.`),wg(),jc(403,`p`),iO(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg()()(),jc(405,`tr`,17)(406,`td`,18)(407,`div`,27)(408,`span`,28),iO(409,` (p-collapsed)`),nu(410,`br`),wg()()(),jc(411,`td`,21)(412,`code`,29),iO(413,`EventEmitter`),wg()(),jc(414,`td`,23),iO(415,`-`),wg(),jc(416,`td`,24)(417,`em`)(418,`strong`),iO(419,`(opcional)`),wg()(),jc(420,`p`),iO(421,`Evento executado ao colapsar uma linha do `),jc(422,`code`),iO(423,`po-table`),wg(),iO(424,`.`),wg(),jc(425,`blockquote`)(426,`p`),iO(427,`Como parâmetro o componente envia o item colapsado.`),wg()()()(),jc(428,`tr`,17)(429,`td`,18)(430,`div`,27)(431,`span`,28),iO(432,` (p-restore-column-manager)`),nu(433,`br`),wg()()(),jc(434,`td`,21)(435,`code`,29),iO(436,`EventEmitter`),wg()(),jc(437,`td`,23),iO(438,`-`),wg(),jc(439,`td`,24)(440,`em`)(441,`strong`),iO(442,`(opcional)`),wg()(),jc(443,`p`),iO(444,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),wg(),jc(445,`p`),iO(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg()()(),jc(447,`tr`,17)(448,`td`,18)(449,`div`,19)(450,`span`,20),iO(451,` p-columns`),nu(452,`br`),wg()()(),jc(453,`td`,21)(454,`code`,30),iO(455,`PoTableColumn[]`),wg()(),jc(456,`td`,23),iO(457,`-`),wg(),jc(458,`td`,24)(459,`em`)(460,`strong`),iO(461,`(opcional)`),wg()(),jc(462,`p`),iO(463,`Lista das colunas da tabela, deve receber um `),jc(464,`em`),iO(465,`array`),wg(),iO(466,` de objetos que implementam a interface `),jc(467,`code`),iO(468,`PoTableColumn`),wg(),iO(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),wg(),jc(470,`blockquote`)(471,`p`),iO(472,`Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.`),wg()()()(),jc(473,`tr`,17)(474,`td`,18)(475,`div`,19)(476,`span`,20),iO(477,` p-components-size`),nu(478,`br`),wg()()(),jc(479,`td`,21)(480,`code`,31),iO(481,`string`),wg()(),jc(482,`td`,23)(483,`p`)(484,`code`),iO(485,`medium`),wg()()(),jc(486,`td`,24)(487,`em`)(488,`strong`),iO(489,`(opcional)`),wg()(),jc(490,`p`),iO(491,`Define o tamanho dos componentes de formulário no table:`),wg(),jc(492,`ul`)(493,`li`)(494,`code`),iO(495,`small`),wg(),iO(496,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(497,`li`)(498,`code`),iO(499,`medium`),wg(),iO(500,`: aplica a medida medium de cada componente.`),wg()(),jc(501,`blockquote`)(502,`p`),iO(503,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(504,`code`),iO(505,`medium`),wg(),iO(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(507,`a`,32),iO(508,`po-theme`),wg(),iO(509,`.`),wg()()()(),jc(510,`tr`,17)(511,`td`,18)(512,`div`,19)(513,`span`,20),iO(514,` p-container`),nu(515,`br`),wg()()(),jc(516,`td`,21)(517,`code`,31),iO(518,`string`),wg()(),jc(519,`td`,23)(520,`p`)(521,`code`),iO(522,`border`),wg()()(),jc(523,`td`,24)(524,`em`)(525,`strong`),iO(526,`(opcional)`),wg()(),jc(527,`p`),iO(528,`Adiciona um contorno arredondado ao `),jc(529,`code`),iO(530,`po-table`),wg(),iO(531,`, as opções são:`),wg(),jc(532,`ul`)(533,`li`)(534,`code`),iO(535,`border`),wg(),iO(536,`: com bordas/linhas.`),wg(),jc(537,`li`)(538,`code`),iO(539,`shadow`),wg(),iO(540,`: com sombras.`),wg()()()(),jc(541,`tr`,17)(542,`td`,18)(543,`div`,19)(544,`span`,20),iO(545,` p-draggable`),nu(546,`br`),wg()()(),jc(547,`td`,21)(548,`code`,22),iO(549,`boolean`),wg()(),jc(550,`td`,23)(551,`p`)(552,`code`),iO(553,`false`),wg()()(),jc(554,`td`,24)(555,`em`)(556,`strong`),iO(557,`(opcional)`),wg()(),jc(558,`p`),iO(559,`Habilita o modo drag and drop para as colunas da tabela.`),wg()()(),jc(560,`tr`,17)(561,`td`,18)(562,`div`,27)(563,`span`,28),iO(564,` (p-delete-items)`),nu(565,`br`),wg()()(),jc(566,`td`,21)(567,`code`,29),iO(568,`EventEmitter`),wg()(),jc(569,`td`,23),iO(570,`-`),wg(),jc(571,`td`,24)(572,`em`)(573,`strong`),iO(574,`(opcional)`),wg()(),jc(575,`p`),iO(576,`Evento executado após o método de exclusão ser finalizado.`),wg(),jc(577,`pre`)(578,`code`),iO(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),wg()(),jc(580,`blockquote`)(581,`p`),iO(582,`Como parâmetro o componente envia a lista atualizada, sem os itens excluídos.`),wg()()()(),jc(583,`tr`,17)(584,`td`,18)(585,`div`,27)(586,`span`,28),iO(587,` (p-expanded)`),nu(588,`br`),wg()()(),jc(589,`td`,21)(590,`code`,29),iO(591,`EventEmitter`),wg()(),jc(592,`td`,23),iO(593,`-`),wg(),jc(594,`td`,24)(595,`em`)(596,`strong`),iO(597,`(opcional)`),wg()(),jc(598,`p`),iO(599,`Evento executado ao expandir uma linha do `),jc(600,`code`),iO(601,`po-table`),wg(),iO(602,`.`),wg(),jc(603,`blockquote`)(604,`p`),iO(605,`Como parâmetro o componente envia o item expandido.`),wg()()()(),jc(606,`tr`,17)(607,`td`,18)(608,`div`,19)(609,`span`,20),iO(610,` p-filter-type`),nu(611,`br`),wg()()(),jc(612,`td`,21)(613,`code`,33),iO(614,`PoSearchFilterMode`),wg()(),jc(615,`td`,23)(616,`p`)(617,`code`),iO(618,`startsWith`),wg()()(),jc(619,`td`,24)(620,`em`)(621,`strong`),iO(622,`(opcional)`),wg()(),jc(623,`p`),iO(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),wg(),jc(625,`blockquote`)(626,`p`),iO(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),wg()()()(),jc(628,`tr`,17)(629,`td`,18)(630,`div`,19)(631,`span`,20),iO(632,` p-filtered-columns`),nu(633,`br`),wg()()(),jc(634,`td`,21)(635,`code`,34),iO(636,`Array<string>`),wg()(),jc(637,`td`,23),iO(638,`-`),wg(),jc(639,`td`,24)(640,`em`)(641,`strong`),iO(642,`(opcional)`),wg()(),jc(643,`p`),iO(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),wg()()(),jc(645,`tr`,17)(646,`td`,18)(647,`div`,19)(648,`span`,20),iO(649,` p-height`),nu(650,`br`),wg()()(),jc(651,`td`,21)(652,`code`,35),iO(653,`number`),wg()(),jc(654,`td`,23),iO(655,`-`),wg(),jc(656,`td`,24)(657,`em`)(658,`strong`),iO(659,`(opcional)`),wg()(),jc(660,`p`),iO(661,`Define a altura da tabela em `),jc(662,`em`),iO(663,`pixels`),wg(),iO(664,` e fixa o cabeçalho.`),wg(),jc(665,`p`),iO(666,`Ao utilizar essa propriedade será inserido o `),jc(667,`code`),iO(668,`virtual-scroll`),wg(),iO(669,` na tabela melhorando a performance.`),wg()()(),jc(670,`tr`,17)(671,`td`,18)(672,`div`,19)(673,`span`,20),iO(674,` p-hide-action-fixed-columns`),nu(675,`br`),wg()()(),jc(676,`td`,21)(677,`code`,22),iO(678,`boolean`),wg()(),jc(679,`td`,23)(680,`p`)(681,`code`),iO(682,`false`),wg()()(),jc(683,`td`,24)(684,`em`)(685,`strong`),iO(686,`(opcional)`),wg()(),jc(687,`p`),iO(688,`Permite que as ações para fixar uma coluna da tabela sejam escondidas.`),wg()()(),jc(689,`tr`,17)(690,`td`,18)(691,`div`,19)(692,`span`,20),iO(693,` p-hide-batch-actions`),nu(694,`br`),wg()()(),jc(695,`td`,21)(696,`code`,22),iO(697,`boolean`),wg()(),jc(698,`td`,23)(699,`p`)(700,`code`),iO(701,`true`),wg()()(),jc(702,`td`,24)(703,`em`)(704,`strong`),iO(705,`(opcional)`),wg()(),jc(706,`p`),iO(707,`Permite que as ações em lote, responsável por excluir e exibir a quantidade de itens, sejam escondidas.`),wg()()(),jc(708,`tr`,17)(709,`td`,18)(710,`div`,19)(711,`span`,20),iO(712,` p-hide-columns-manager`),nu(713,`br`),wg()()(),jc(714,`td`,21)(715,`code`,22),iO(716,`boolean`),wg()(),jc(717,`td`,23)(718,`p`)(719,`code`),iO(720,`false`),wg()()(),jc(721,`td`,24)(722,`em`)(723,`strong`),iO(724,`(opcional)`),wg()(),jc(725,`p`),iO(726,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),wg()()(),jc(727,`tr`,17)(728,`td`,18)(729,`div`,19)(730,`span`,20),iO(731,` p-hide-detail`),nu(732,`br`),wg()()(),jc(733,`td`,21)(734,`code`,22),iO(735,`boolean`),wg()(),jc(736,`td`,23)(737,`p`)(738,`code`),iO(739,`false`),wg()()(),jc(740,`td`,24)(741,`em`)(742,`strong`),iO(743,`(opcional)`),wg()(),jc(744,`p`),iO(745,`Habilita a visualização da lista de detalhes de cada linha da coluna.`),wg()()(),jc(746,`tr`,17)(747,`td`,18)(748,`div`,19)(749,`span`,20),iO(750,` p-hide-select-all`),nu(751,`br`),wg()()(),jc(752,`td`,21)(753,`code`,22),iO(754,`boolean`),wg()(),jc(755,`td`,23)(756,`p`)(757,`code`),iO(758,`false`),wg()()(),jc(759,`td`,24)(760,`p`),iO(761,`Esconde o `),jc(762,`em`),iO(763,`checkbox`),wg(),iO(764,` para seleção de todas as linhas.`),wg(),jc(765,`blockquote`)(766,`p`),iO(767,`Sempre receberá `),jc(768,`em`),iO(769,`true`),wg(),iO(770,` caso a seleção de apenas uma linha esteja ativa.`),wg()()()(),jc(771,`tr`,17)(772,`td`,18)(773,`div`,19)(774,`span`,20),iO(775,` p-hide-table-search`),nu(776,`br`),wg()()(),jc(777,`td`,21)(778,`code`,22),iO(779,`boolean`),wg()(),jc(780,`td`,23)(781,`p`)(782,`code`),iO(783,`true`),wg()()(),jc(784,`td`,24)(785,`em`)(786,`strong`),iO(787,`(opcional)`),wg()(),jc(788,`p`),iO(789,`Permite que o campo de pesquisa seja escondido.`),wg()()(),jc(790,`tr`,17)(791,`td`,18)(792,`div`,19)(793,`span`,20),iO(794,` p-infinite-scroll`),nu(795,`br`),wg()()(),jc(796,`td`,21)(797,`code`,22),iO(798,`boolean`),wg()(),jc(799,`td`,23)(800,`p`)(801,`code`),iO(802,`false`),wg()()(),jc(803,`td`,24)(804,`em`)(805,`strong`),iO(806,`(opcional)`),wg()(),jc(807,`p`),iO(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),jc(809,`code`),iO(810,`p-show-more`),wg(),iO(811,`.`),wg(),jc(812,`p`)(813,`strong`),iO(814,`Regras de utilização:`),wg()(),jc(815,`ul`)(816,`li`),iO(817,`O scroll infinito só funciona para tabelas que utilizam a propriedade `),jc(818,`code`),iO(819,`p-height`),wg(),iO(820,` e que possuem o scroll já na carga inicial dos dados.`),wg()()()(),jc(821,`tr`,17)(822,`td`,18)(823,`div`,19)(824,`span`,20),iO(825,` p-infinite-scroll-distance`),nu(826,`br`),wg()()(),jc(827,`td`,21)(828,`code`,35),iO(829,`number`),wg()(),jc(830,`td`,23),iO(831,`-`),wg(),jc(832,`td`,24)(833,`em`)(834,`strong`),iO(835,`(opcional)`),wg()(),jc(836,`p`),iO(837,`Define o percentual necessário para disparar o evento `),jc(838,`code`),iO(839,`p-show-more`),wg(),iO(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),wg(),jc(841,`p`)(842,`strong`),iO(843,`Exemplos:`),wg()(),jc(844,`ul`)(845,`li`),iO(846,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o `),jc(847,`code`),iO(848,`p-show-more`),wg(),iO(849,` será disparado.`),wg()()()(),jc(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),iO(854,` p-items`),nu(855,`br`),wg()()(),jc(856,`td`,21)(857,`code`,36),iO(858,`any[]`),wg()(),jc(859,`td`,23),iO(860,`-`),wg(),jc(861,`td`,24)(862,`p`),iO(863,`Lista de itens da tabela.`),wg(),jc(864,`blockquote`)(865,`p`),iO(866,`Se falso, será inicializado como um `),jc(867,`em`),iO(868,`array`),wg(),iO(869,` vazio.`),wg()()()(),jc(870,`tr`,17)(871,`td`,18)(872,`div`,19)(873,`span`,20),iO(874,` p-literals`),nu(875,`br`),wg()()(),jc(876,`td`,21)(877,`code`,37),iO(878,`PoTableLiterals`),wg()(),jc(879,`td`,23),iO(880,`-`),wg(),jc(881,`td`,24)(882,`em`)(883,`strong`),iO(884,`(opcional)`),wg()(),jc(885,`p`),iO(886,`Objeto com as literais usadas no `),jc(887,`code`),iO(888,`po-table`),wg(),iO(889,`.`),wg(),jc(890,`p`),iO(891,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(892,`pre`)(893,`code`),iO(894,`const customLiterals: PoTableLiterals = {
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
`),wg()(),jc(895,`p`),iO(896,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(897,`pre`)(898,`code`),iO(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),wg()(),jc(900,`p`),iO(901,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(902,`pre`)(903,`code`),iO(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),wg()(),jc(905,`blockquote`)(906,`p`),iO(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(908,`a`,38)(909,`code`),iO(910,`PoI18nService`),wg()(),iO(911,` ou do browser.`),wg()()()(),jc(912,`tr`,17)(913,`td`,18)(914,`div`,19)(915,`span`,20),iO(916,` p-loading`),nu(917,`br`),wg()()(),jc(918,`td`,21)(919,`code`,22),iO(920,`boolean`),wg()(),jc(921,`td`,23)(922,`p`)(923,`code`),iO(924,`false`),wg()()(),jc(925,`td`,24)(926,`em`)(927,`strong`),iO(928,`(opcional)`),wg()(),jc(929,`p`),iO(930,`Bloqueia a interação do usuário com os dados da `),jc(931,`em`),iO(932,`table`),wg(),iO(933,`.`),wg()()(),jc(934,`tr`,17)(935,`td`,18)(936,`div`,19)(937,`span`,20),iO(938,` p-loading-show-more`),nu(939,`br`),wg()()(),jc(940,`td`,21)(941,`code`,22),iO(942,`boolean`),wg()(),jc(943,`td`,23)(944,`p`)(945,`code`),iO(946,`false`),wg()()(),jc(947,`td`,24)(948,`em`)(949,`strong`),iO(950,`(opcional)`),wg()(),jc(951,`p`),iO(952,`Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".`),wg()()(),jc(953,`tr`,17)(954,`td`,18)(955,`div`,19)(956,`span`,20),iO(957,` p-max-columns`),nu(958,`br`),wg()()(),jc(959,`td`,21)(960,`code`,35),iO(961,`number`),wg()(),jc(962,`td`,23),iO(963,`-`),wg(),jc(964,`td`,24)(965,`em`)(966,`strong`),iO(967,`(opcional)`),wg()(),jc(968,`p`),iO(969,`Define uma quantidade máxima de colunas que serão exibidas na tabela.`),wg(),jc(970,`p`),iO(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),wg()()(),jc(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),iO(976,` p-param-delete-api`),nu(977,`br`),wg()()(),jc(978,`td`,21)(979,`code`,31),iO(980,`string`),wg()(),jc(981,`td`,23)(982,`p`)(983,`code`),iO(984,`id`),wg()()(),jc(985,`td`,24)(986,`em`)(987,`strong`),iO(988,`(opcional)`),wg()(),jc(989,`p`),iO(990,`Adiciona o parâmetro a ser enviado para a requisição de DELETE.`),wg(),jc(991,`p`),iO(992,`É necessário a utilização da propriedade `),jc(993,`code`),iO(994,`p-service-delete`),wg(),iO(995,` em conjunto.`),wg()()(),jc(996,`tr`,17)(997,`td`,18)(998,`div`,27)(999,`span`,28),iO(1e3,` (p-search-ai-error)`),nu(1001,`br`),wg()()(),jc(1002,`td`,21)(1003,`code`,29),iO(1004,`EventEmitter`),wg()(),jc(1005,`td`,23),iO(1006,`-`),wg(),jc(1007,`td`,24)(1008,`em`)(1009,`strong`),iO(1010,`(opcional)`),wg()(),jc(1011,`p`),iO(1012,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),jc(1013,`code`),iO(1014,`p-search-ai-field`),wg(),iO(1015,`.`),wg(),jc(1016,`p`),iO(1017,`O parâmetro enviado é um objeto `),jc(1018,`code`),iO(1019,`PoSearchAiError`),wg(),iO(1020,` contendo:`),wg(),jc(1021,`ul`)(1022,`li`)(1023,`code`),iO(1024,`statusCode`),wg(),iO(1025,`: código HTTP do erro (ex: `),jc(1026,`code`),iO(1027,`408`),wg(),iO(1028,` para timeout, `),jc(1029,`code`),iO(1030,`500`),wg(),iO(1031,` para erro interno).`),wg(),jc(1032,`li`)(1033,`code`),iO(1034,`message`),wg(),iO(1035,`: mensagem descritiva do erro.`),wg()()()(),jc(1036,`tr`,17)(1037,`td`,18)(1038,`div`,19)(1039,`span`,20),iO(1040,` p-search-ai-field`),nu(1041,`br`),wg()()(),jc(1042,`td`,21)(1043,`code`,39),iO(1044,`PoTableSearchAiField`),wg()(),jc(1045,`td`,23),iO(1046,`-`),wg(),jc(1047,`td`,24)(1048,`em`)(1049,`strong`),iO(1050,`(opcional)`),wg()(),jc(1051,`p`),iO(1052,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),jc(1053,`code`),iO(1054,`po-search`),wg(),iO(1055,`) pelo componente `),jc(1056,`code`),iO(1057,`po-search-ai`),wg(),iO(1058,` na barra de ações.`),wg(),jc(1059,`p`),iO(1060,`Recebe um objeto do tipo `),jc(1061,`code`),iO(1062,`PoTableSearchAiField`),wg(),iO(1063,` com as configurações necessárias:`),wg(),jc(1064,`ul`)(1065,`li`)(1066,`code`),iO(1067,`url`),wg(),jc(1068,`em`),iO(1069,`(obrigatório)`),wg(),iO(1070,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),jc(1071,`a`,40)(1072,`code`),iO(1073,`po-sample-api`),wg()(),iO(1074,`.`),wg(),jc(1075,`li`)(1076,`code`),iO(1077,`columns`),wg(),iO(1078,`: lista de colunas enviadas à IA; quando omitida, são derivadas de `),jc(1079,`code`),iO(1080,`p-columns`),wg(),iO(1081,`.`),wg(),jc(1082,`li`)(1083,`code`),iO(1084,`minConfidence`),wg(),iO(1085,`: confiança mínima para aplicação automática do filtro (padrão `),jc(1086,`code`),iO(1087,`0.5`),wg(),iO(1088,`).`),wg(),jc(1089,`li`)(1090,`code`),iO(1091,`timeout`),wg(),iO(1092,`: tempo máximo de espera pela resposta da IA em ms (padrão `),jc(1093,`code`),iO(1094,`10000`),wg(),iO(1095,`).`),wg(),jc(1096,`li`)(1097,`code`),iO(1098,`placeholder`),wg(),iO(1099,`: texto exibido como placeholder no campo.`),wg(),jc(1100,`li`)(1101,`code`),iO(1102,`literals`),wg(),iO(1103,`: literais customizadas do `),jc(1104,`code`),iO(1105,`po-search-ai`),wg(),iO(1106,`.`),wg(),jc(1107,`li`)(1108,`code`),iO(1109,`apply`),wg(),iO(1110,`: estratégia de aplicação do filtro — `),jc(1111,`code`),iO(1112,`'auto'`),wg(),iO(1113,` (padrão), `),jc(1114,`code`),iO(1115,`'parser'`),wg(),iO(1116,`, `),jc(1117,`code`),iO(1118,`'server'`),wg(),iO(1119,`, `),jc(1120,`code`),iO(1121,`'none'`),wg(),iO(1122,`
ou uma fun\xE7\xE3o `),jc(1123,`code`),iO(1124,`(result: PoSearchAiResult) => void`),wg(),iO(1125,`.`),wg()(),jc(1126,`p`),iO(1127,`Quando esta propriedade está definida, os eventos `),jc(1128,`code`),iO(1129,`p-search-ai-result`),wg(),iO(1130,`, `),jc(1131,`code`),iO(1132,`p-search-ai-low-confidence`),wg(),iO(1133,`
e `),jc(1134,`code`),iO(1135,`p-search-ai-error`),wg(),iO(1136,` ficam disponíveis para tratamento customizado.`),wg()()(),jc(1137,`tr`,17)(1138,`td`,18)(1139,`div`,27)(1140,`span`,28),iO(1141,` (p-search-ai-low-confidence)`),nu(1142,`br`),wg()()(),jc(1143,`td`,21)(1144,`code`,29),iO(1145,`EventEmitter`),wg()(),jc(1146,`td`,23),iO(1147,`-`),wg(),jc(1148,`td`,24)(1149,`em`)(1150,`strong`),iO(1151,`(opcional)`),wg()(),jc(1152,`p`),iO(1153,`Evento emitido quando o `),jc(1154,`code`),iO(1155,`po-search-ai`),wg(),iO(1156,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),jc(1157,`code`),iO(1158,`minConfidence`),wg(),iO(1159,` configurado em `),jc(1160,`code`),iO(1161,`p-search-ai-field`),wg(),iO(1162,`. Nesse caso, o filtro `),jc(1163,`strong`),iO(1164,`não`),wg(),iO(1165,` \xE9 aplicado
automaticamente.`),wg(),jc(1166,`p`),iO(1167,`O parâmetro enviado é um objeto `),jc(1168,`code`),iO(1169,`PoSearchAiResult`),wg(),iO(1170,` com os mesmos campos de `),jc(1171,`code`),iO(1172,`p-search-ai-result`),wg(),iO(1173,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),wg()()(),jc(1174,`tr`,17)(1175,`td`,18)(1176,`div`,27)(1177,`span`,28),iO(1178,` (p-search-ai-result)`),nu(1179,`br`),wg()()(),jc(1180,`td`,21)(1181,`code`,29),iO(1182,`EventEmitter`),wg()(),jc(1183,`td`,23),iO(1184,`-`),wg(),jc(1185,`td`,24)(1186,`em`)(1187,`strong`),iO(1188,`(opcional)`),wg()(),jc(1189,`p`),iO(1190,`Evento emitido quando o `),jc(1191,`code`),iO(1192,`po-search-ai`),wg(),iO(1193,` retorna um resultado com confian\xE7a igual ou superior
ao `),jc(1194,`code`),iO(1195,`minConfidence`),wg(),iO(1196,` configurado em `),jc(1197,`code`),iO(1198,`p-search-ai-field`),wg(),iO(1199,`.`),wg(),jc(1200,`p`),iO(1201,`O parâmetro enviado é um objeto `),jc(1202,`code`),iO(1203,`PoSearchAiResult`),wg(),iO(1204,` contendo:`),wg(),jc(1205,`ul`)(1206,`li`)(1207,`code`),iO(1208,`filter`),wg(),iO(1209,`: string de filtro OData v4 gerada pela IA (ex: `),jc(1210,`code`),iO(1211,`"city eq 'SP' and salary gt 5000"`),wg(),iO(1212,`).`),wg(),jc(1213,`li`)(1214,`code`),iO(1215,`description`),wg(),iO(1216,`: descrição em linguagem natural do filtro aplicado.`),wg(),jc(1217,`li`)(1218,`code`),iO(1219,`confidence`),wg(),iO(1220,`: nível de confiança da resposta (0.0 a 1.0).`),wg()(),jc(1221,`blockquote`)(1222,`p`),iO(1223,`Quando `),jc(1224,`code`),iO(1225,`apply`),wg(),iO(1226,` for diferente de `),jc(1227,`code`),iO(1228,`'none'`),wg(),iO(1229,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),wg()()()(),jc(1230,`tr`,17)(1231,`td`,18)(1232,`div`,19)(1233,`span`,20),iO(1234,` p-selectable`),nu(1235,`br`),wg()()(),jc(1236,`td`,21)(1237,`code`,22),iO(1238,`boolean`),wg()(),jc(1239,`td`,23)(1240,`p`)(1241,`code`),iO(1242,`false`),wg()()(),jc(1243,`td`,24)(1244,`em`)(1245,`strong`),iO(1246,`(opcional)`),wg()(),jc(1247,`p`),iO(1248,`Permite a seleção de linhas na tabela e, caso a propriedade `),jc(1249,`code`),iO(1250,`p-single-select`),wg(),iO(1251,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),wg(),jc(1252,`p`)(1253,`strong`),iO(1254,`Importante:`),wg()(),jc(1255,`ul`)(1256,`li`),iO(1257,`As linhas de detalhe definidas em `),jc(1258,`code`),iO(1259,`PoTableDetail`),wg(),iO(1260,` possuem comportamento independente da linha mestre;`),wg(),jc(1261,`li`),iO(1262,`Cada linha possui por padrão a propriedade dinâmica `),jc(1263,`code`),iO(1264,`$selected`),wg(),iO(1265,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),jc(1266,`code`),iO(1267,`item.$selected`),wg(),iO(1268,` ou `),jc(1269,`code`),iO(1270,`item['$selected']`),wg(),iO(1271,`.`),wg()()()(),jc(1272,`tr`,17)(1273,`td`,18)(1274,`div`,19)(1275,`span`,20),iO(1276,` p-selectable-entire-line`),nu(1277,`br`),wg()()(),jc(1278,`td`,21)(1279,`code`,22),iO(1280,`boolean`),wg()(),jc(1281,`td`,23)(1282,`p`)(1283,`code`),iO(1284,`true`),wg()()(),jc(1285,`td`,24)(1286,`p`),iO(1287,`Permite selecionar um item da tabela clicando na linha.`),wg(),jc(1288,`blockquote`)(1289,`p`),iO(1290,`Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `),jc(1291,`code`),iO(1292,`false`),wg(),iO(1293,`.`),wg()()()(),jc(1294,`tr`,17)(1295,`td`,18)(1296,`div`,27)(1297,`span`,28),iO(1298,` (p-selected)`),nu(1299,`br`),wg()()(),jc(1300,`td`,21)(1301,`code`,29),iO(1302,`EventEmitter`),wg()(),jc(1303,`td`,23),iO(1304,`-`),wg(),jc(1305,`td`,24)(1306,`em`)(1307,`strong`),iO(1308,`(opcional)`),wg()(),jc(1309,`p`),iO(1310,`Evento executado ao selecionar uma linha do `),jc(1311,`code`),iO(1312,`po-table`),wg(),iO(1313,`.`),wg()()(),jc(1314,`tr`,17)(1315,`td`,18)(1316,`div`,19)(1317,`span`,20),iO(1318,` p-service-api`),nu(1319,`br`),wg()()(),jc(1320,`td`,21)(1321,`code`,31),iO(1322,`string`),wg()(),jc(1323,`td`,23),iO(1324,`-`),wg(),jc(1325,`td`,24)(1326,`em`)(1327,`strong`),iO(1328,`(opcional)`),wg()(),jc(1329,`p`),iO(1330,`URL da API responsável por retornar os registros.`),wg(),jc(1331,`p`),iO(1332,`Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `),jc(1333,`code`),iO(1334,`page`),wg(),iO(1335,` e `),jc(1336,`code`),iO(1337,`pageSize`),wg(),iO(1338,`, conforme abaixo:`),wg(),jc(1339,`pre`)(1340,`code`),iO(1341,`url + ?page=1&pageSize=10
`),wg()(),jc(1342,`p`),iO(1343,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),jc(1344,`code`),iO(1345,`order`),wg(),iO(1346,`, por exemplo:`),wg(),jc(1347,`ul`)(1348,`li`)(1349,`p`),iO(1350,`Coluna decrescente:`),wg(),jc(1351,`pre`)(1352,`code`),iO(1353,`url + ?page=1&pageSize=10&order=-name
`),wg()()(),jc(1354,`li`)(1355,`p`),iO(1356,`Coluna ascendente:`),wg(),jc(1357,`pre`)(1358,`code`),iO(1359,`url + ?page=1&pageSize=10&order=name
`),wg()()()(),jc(1360,`blockquote`)(1361,`p`),iO(1362,`Esta URL deve retornar e receber os dados no padrão de `),jc(1363,`a`,41),iO(1364,`API do PO UI`),wg(),iO(1365,`.`),wg()()()(),jc(1366,`tr`,17)(1367,`td`,18)(1368,`div`,19)(1369,`span`,20),iO(1370,` p-service-delete`),nu(1371,`br`),wg()()(),jc(1372,`td`,21)(1373,`code`,31),iO(1374,`string`),wg()(),jc(1375,`td`,23),iO(1376,`-`),wg(),jc(1377,`td`,24)(1378,`em`)(1379,`strong`),iO(1380,`(opcional)`),wg()(),jc(1381,`p`),iO(1382,`URL da API responsável por excluir os registros.`),wg(),jc(1383,`p`),iO(1384,`Ao selecionar o botão de excluir itens, essa url será executada utilizando o parâmetro enviado na propriedade `),jc(1385,`code`),iO(1386,`p-param-delete-api`),wg(),iO(1387,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),jc(1388,`code`),iO(1389,`id`),wg(),iO(1390,`.`),wg(),jc(1391,`blockquote`)(1392,`p`),iO(1393,`Esta URL deve retornar e receber os dados no padrão de `),jc(1394,`a`,41),iO(1395,`API do PO UI`),wg(),iO(1396,`.`),wg()()()(),jc(1397,`tr`,17)(1398,`td`,18)(1399,`div`,27)(1400,`span`,28),iO(1401,` (p-show-more)`),nu(1402,`br`),wg()()(),jc(1403,`td`,21)(1404,`code`,29),iO(1405,`EventEmitter`),wg()(),jc(1406,`td`,23),iO(1407,`-`),wg(),jc(1408,`td`,24)(1409,`em`)(1410,`strong`),iO(1411,`(opcional)`),wg()(),jc(1412,`p`),iO(1413,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),wg(),jc(1414,`p`),iO(1415,`Recebe um objeto `),jc(1416,`code`),iO(1417,`{ column, type }`),wg(),iO(1418,` onde:`),wg(),jc(1419,`ul`)(1420,`li`),iO(1421,`column (`),jc(1422,`code`),iO(1423,`PoTableColumn`),wg(),iO(1424,`): objeto da coluna que está ordenada.`),wg(),jc(1425,`li`),iO(1426,`type (`),jc(1427,`code`),iO(1428,`PoTableColumnSortType`),wg(),iO(1429,`): tipo da ordenação.`),wg()()()(),jc(1430,`tr`,17)(1431,`td`,18)(1432,`div`,19)(1433,`span`,20),iO(1434,` p-show-more-disabled`),nu(1435,`br`),wg()()(),jc(1436,`td`,21)(1437,`code`,22),iO(1438,`boolean`),wg()(),jc(1439,`td`,23)(1440,`p`)(1441,`code`),iO(1442,`false`),wg()()(),jc(1443,`td`,24)(1444,`p`),iO(1445,`Se verdadeiro, torna habilitado o botão "Carregar mais resultados".`),wg()()(),jc(1446,`tr`,17)(1447,`td`,18)(1448,`div`,19)(1449,`span`,20),iO(1450,` p-single-select`),nu(1451,`br`),wg()()(),jc(1452,`td`,21)(1453,`code`,22),iO(1454,`boolean`),wg()(),jc(1455,`td`,23),iO(1456,`-`),wg(),jc(1457,`td`,24)(1458,`p`),iO(1459,`Define que somente uma linha da tabela pode ser selecionada.`),wg(),jc(1460,`blockquote`)(1461,`p`),iO(1462,`Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.`),wg()()()(),jc(1463,`tr`,17)(1464,`td`,18)(1465,`div`,19)(1466,`span`,20),iO(1467,` p-sort`),nu(1468,`br`),wg()()(),jc(1469,`td`,21)(1470,`code`,22),iO(1471,`boolean`),wg()(),jc(1472,`td`,23)(1473,`p`)(1474,`code`),iO(1475,`false`),wg()()(),jc(1476,`td`,24)(1477,`em`)(1478,`strong`),iO(1479,`(opcional)`),wg()(),jc(1480,`p`),iO(1481,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),wg()()(),jc(1482,`tr`,17)(1483,`td`,18)(1484,`div`,27)(1485,`span`,28),iO(1486,` (p-sort-by)`),nu(1487,`br`),wg()()(),jc(1488,`td`,21)(1489,`code`,29),iO(1490,`EventEmitter`),wg()(),jc(1491,`td`,23),iO(1492,`-`),wg(),jc(1493,`td`,24)(1494,`em`)(1495,`strong`),iO(1496,`(opcional)`),wg()(),jc(1497,`p`),iO(1498,`Evento executado ao ordenar colunas da tabela.`),wg(),jc(1499,`p`),iO(1500,`Recebe um objeto `),jc(1501,`code`),iO(1502,`{ column, type }`),wg(),iO(1503,` onde:`),wg(),jc(1504,`ul`)(1505,`li`),iO(1506,`column (`),jc(1507,`code`),iO(1508,`PoTableColumn`),wg(),iO(1509,`): objeto da coluna que foi clicada/ordenada.`),wg(),jc(1510,`li`),iO(1511,`type (`),jc(1512,`code`),iO(1513,`PoTableColumnSortType`),wg(),iO(1514,`): tipo da ordenação.`),wg()()()(),jc(1515,`tr`,17)(1516,`td`,18)(1517,`div`,19)(1518,`span`,20),iO(1519,` p-spacing`),nu(1520,`br`),wg()()(),jc(1521,`td`,21)(1522,`code`,31),iO(1523,`string`),wg()(),jc(1524,`td`,23)(1525,`p`)(1526,`code`),iO(1527,`medium`),wg()()(),jc(1528,`td`,24)(1529,`em`)(1530,`strong`),iO(1531,`(opcional)`),wg()(),jc(1532,`p`),iO(1533,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),jc(1534,`strong`),iO(1535,`PoTableColumnSpacing`),wg(),iO(1536,`.`),wg(),jc(1537,`blockquote`)(1538,`p`),iO(1539,`Em nível de acessibilidade `),jc(1540,`strong`),iO(1541,`AA`),wg(),iO(1542,`, caso o valor de `),jc(1543,`code`),iO(1544,`p-spacing`),wg(),iO(1545,` não seja definido, o valor padrão será `),jc(1546,`code`),iO(1547,`extraSmall`),wg(),iO(1548,`
nos seguintes cen\xE1rios:`),wg(),jc(1549,`ul`)(1550,`li`),iO(1551,`Quando o valor de `),jc(1552,`code`),iO(1553,`p-components-size`),wg(),iO(1554,` for `),jc(1555,`code`),iO(1556,`small`),wg(),iO(1557,`;`),wg(),jc(1558,`li`),iO(1559,`Quando o valor padrão dos componentes for configurado como `),jc(1560,`code`),iO(1561,`small`),wg(),iO(1562,` no
`),jc(1563,`a`,32),iO(1564,`serviço de tema`),wg(),iO(1565,`.`),wg()()()()(),jc(1566,`tr`,17)(1567,`td`,18)(1568,`div`,19)(1569,`span`,20),iO(1570,` p-striped`),nu(1571,`br`),wg()()(),jc(1572,`td`,21)(1573,`code`,22),iO(1574,`boolean`),wg()(),jc(1575,`td`,23)(1576,`p`)(1577,`code`),iO(1578,`false`),wg()()(),jc(1579,`td`,24)(1580,`p`),iO(1581,`Habilita ou desabilita o estilo listrado da tabela (`),jc(1582,`code`),iO(1583,`striped`),wg(),iO(1584,`).`),wg(),jc(1585,`blockquote`)(1586,`p`),iO(1587,`Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.`),wg()()()(),jc(1588,`tr`,17)(1589,`td`,18)(1590,`div`,19)(1591,`span`,20),iO(1592,` p-text-wrap`),nu(1593,`br`),wg()()(),jc(1594,`td`,21)(1595,`code`,22),iO(1596,`boolean`),wg()(),jc(1597,`td`,23)(1598,`p`)(1599,`code`),iO(1600,`false`),wg()()(),jc(1601,`td`,24)(1602,`em`)(1603,`strong`),iO(1604,`(opcional)`),wg()(),jc(1605,`p`),iO(1606,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg(),jc(1607,`blockquote`)(1608,`p`),iO(1609,`Incompatível com `),jc(1610,`code`),iO(1611,`virtual-scroll`),wg(),iO(1612,`, que requer altura fixa nas linhas.`),wg()()()(),jc(1613,`tr`,17)(1614,`td`,18)(1615,`div`,27)(1616,`span`,28),iO(1617,` (p-unselected)`),nu(1618,`br`),wg()()(),jc(1619,`td`,21)(1620,`code`,29),iO(1621,`EventEmitter`),wg()(),jc(1622,`td`,23),iO(1623,`-`),wg(),jc(1624,`td`,24)(1625,`em`)(1626,`strong`),iO(1627,`(opcional)`),wg()(),jc(1628,`p`),iO(1629,`Evento executado ao desmarcar a seleção de uma linha do `),jc(1630,`code`),iO(1631,`po-table`),wg(),iO(1632,`.`),wg()()(),jc(1633,`tr`,17)(1634,`td`,18)(1635,`div`,19)(1636,`span`,20),iO(1637,` p-virtual-scroll`),nu(1638,`br`),wg()()(),jc(1639,`td`,21)(1640,`code`,22),iO(1641,`boolean`),wg()(),jc(1642,`td`,23)(1643,`p`)(1644,`code`),iO(1645,`true`),wg()()(),jc(1646,`td`,24)(1647,`em`)(1648,`strong`),iO(1649,`(opcional)`),wg()(),jc(1650,`p`),iO(1651,`Habilita o `),jc(1652,`code`),iO(1653,`virtual-scroll`),wg(),iO(1654,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),jc(1655,`code`),iO(1656,`p-height`),wg(),iO(1657,`) para funcionar corretamente.`),wg(),jc(1658,`blockquote`)(1659,`p`),iO(1660,`Incompatível com `),jc(1661,`code`),iO(1662,`p-text-wrap`),wg(),iO(1663,` e `),jc(1664,`code`),iO(1665,`master-detail`),wg(),iO(1666,`, pois o `),jc(1667,`code`),iO(1668,`virtual-scroll`),wg(),iO(1669,` exige altura fixa nas linhas.`),wg()()()()(),jc(1670,`h3`,13),iO(1671,`Métodos`),wg(),jc(1672,`table`,42)(1673,`tr`,17)(1674,`th`,43)(1675,`div`,19)(1676,`h4`)(1677,`span`,20),iO(1678,` applyFilters `),wg()()()()(),jc(1679,`tr`,24)(1680,`td`,24)(1681,`p`),iO(1682,`Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.`),wg(),jc(1683,`p`),iO(1684,`Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:`),wg(),jc(1685,`pre`)(1686,`code`),iO(1687,`url + ?page=1&pageSize=10
`),wg()(),jc(1688,`blockquote`)(1689,`p`),iO(1690,`Obs: os parâmetros `),jc(1691,`code`),iO(1692,`page`),wg(),iO(1693,` e `),jc(1694,`code`),iO(1695,`pageSize`),wg(),iO(1696,` sempre serão chamados independente de ser enviados outros parâmetros.`),wg()(),jc(1697,`p`),iO(1698,`Caso sejam informados os parâmetros `),jc(1699,`code`),iO(1700,`{ name: 'JOHN', age: '23' }`),wg(),iO(1701,`, todos serão adicionados ao GET, conforme abaixo:`),wg(),jc(1702,`pre`)(1703,`code`),iO(1704,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),wg()()()()(),jc(1705,`h5`)(1706,`b`),iO(1707,`Parâmetros`),wg()(),jc(1708,`table`,14)(1709,`tr`,15)(1710,`th`,16),iO(1711,`Nome`),wg(),jc(1712,`th`,16),iO(1713,`Tipo`),wg(),jc(1714,`th`,16),iO(1715,`Descrição`),wg()(),jc(1716,`tr`,17)(1717,`td`,18),iO(1718,` queryParams`),wg(),jc(1719,`td`,21)(1720,`code`,44),iO(1721,` { key: value } `),wg()(),jc(1722,`td`,24)(1723,`p`),iO(1724,`Formato do objeto a ser enviado.`),wg(),jc(1725,`blockquote`)(1726,`p`),iO(1727,`Pode ser utilizada qualquer string como key, e qualquer string ou number como value.`),wg()()()()(),nu(1728,`br`),jc(1729,`table`,42)(1730,`tr`,17)(1731,`th`,43)(1732,`div`,19)(1733,`h4`)(1734,`span`,20),iO(1735,` applyFixedColumns `),wg()()()()(),jc(1736,`tr`,24)(1737,`td`,24)(1738,`p`),iO(1739,`Verifica se columns possuem a propriedade width.`),wg()()()(),nu(1740,`br`),jc(1741,`table`,42)(1742,`tr`,17)(1743,`th`,43)(1744,`div`,19)(1745,`h4`)(1746,`span`,20),iO(1747,` collapse `),wg()()()()(),jc(1748,`tr`,24)(1749,`td`,24)(1750,`p`),iO(1751,`Método que colapsa uma linha com detalhe quando executada.`),wg()()()(),jc(1752,`h5`)(1753,`b`),iO(1754,`Parâmetros`),wg()(),jc(1755,`table`,14)(1756,`tr`,15)(1757,`th`,16),iO(1758,`Nome`),wg(),jc(1759,`th`,16),iO(1760,`Tipo`),wg(),jc(1761,`th`,16),iO(1762,`Descrição`),wg()(),jc(1763,`tr`,17)(1764,`td`,18),iO(1765,` rowIndex`),wg(),jc(1766,`td`,21)(1767,`code`,45),iO(1768,` number `),wg()(),jc(1769,`td`,24)(1770,`p`),iO(1771,`Índice da linha que será colapsada.`),wg(),jc(1772,`blockquote`)(1773,`p`),iO(1774,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),wg()()()()(),nu(1775,`br`),jc(1776,`table`,42)(1777,`tr`,17)(1778,`th`,43)(1779,`div`,19)(1780,`h4`)(1781,`span`,20),iO(1782,` expand `),wg()()()()(),jc(1783,`tr`,24)(1784,`td`,24)(1785,`p`),iO(1786,`Método que expande uma linha com detalhe quando executada.`),wg()()()(),jc(1787,`h5`)(1788,`b`),iO(1789,`Parâmetros`),wg()(),jc(1790,`table`,14)(1791,`tr`,15)(1792,`th`,16),iO(1793,`Nome`),wg(),jc(1794,`th`,16),iO(1795,`Tipo`),wg(),jc(1796,`th`,16),iO(1797,`Descrição`),wg()(),jc(1798,`tr`,17)(1799,`td`,18),iO(1800,` rowIndex`),wg(),jc(1801,`td`,21)(1802,`code`,45),iO(1803,` number `),wg()(),jc(1804,`td`,24)(1805,`p`),iO(1806,`Índice da linha que será expandida.`),wg(),jc(1807,`blockquote`)(1808,`p`),iO(1809,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),wg()()()()(),nu(1810,`br`),jc(1811,`table`,42)(1812,`tr`,17)(1813,`th`,43)(1814,`div`,19)(1815,`h4`)(1816,`span`,20),iO(1817,` getSelectedRows `),wg()()()()(),jc(1818,`tr`,24)(1819,`td`,24)(1820,`p`),iO(1821,`Retorna as linhas do `),jc(1822,`code`),iO(1823,`po-table`),wg(),iO(1824,` que estão selecionadas.`),wg()()()(),nu(1825,`br`),jc(1826,`table`,42)(1827,`tr`,17)(1828,`th`,43)(1829,`div`,19)(1830,`h4`)(1831,`span`,20),iO(1832,` getUnselectedRows `),wg()()()()(),jc(1833,`tr`,24)(1834,`td`,24)(1835,`p`),iO(1836,`Retorna as linhas do `),jc(1837,`code`),iO(1838,`po-table`),wg(),iO(1839,` que não estão selecionadas.`),wg()()()(),nu(1840,`br`),jc(1841,`table`,42)(1842,`tr`,17)(1843,`th`,43)(1844,`div`,19)(1845,`h4`)(1846,`span`,20),iO(1847,` unselectRows `),wg()()()()(),jc(1848,`tr`,24)(1849,`td`,24)(1850,`p`),iO(1851,`Desmarca as linhas que estão selecionadas.`),wg()()()(),nu(1852,`br`),jc(1853,`table`,42)(1854,`tr`,17)(1855,`th`,43)(1856,`div`,19)(1857,`h4`)(1858,`span`,20),iO(1859,` unselectRowItem `),wg()()()()(),jc(1860,`tr`,24)(1861,`td`,24)(1862,`p`),iO(1863,`Desmarca uma linha que está selecionada.`),wg()()()(),nu(1864,`br`),jc(1865,`table`,42)(1866,`tr`,17)(1867,`th`,43)(1868,`div`,19)(1869,`h4`)(1870,`span`,20),iO(1871,` selectRowItem `),wg()()()()(),jc(1872,`tr`,24)(1873,`td`,24)(1874,`p`),iO(1875,`Seleciona uma linha do 'po-table'.`),wg()()()(),nu(1876,`br`),jc(1877,`table`,42)(1878,`tr`,17)(1879,`th`,43)(1880,`div`,19)(1881,`h4`)(1882,`span`,20),iO(1883,` deleteItems `),wg()()()()(),jc(1884,`tr`,24)(1885,`td`,24)(1886,`p`),iO(1887,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),jc(1888,`code`),iO(1889,`p-service-delete`),wg(),iO(1890,`, será necessário excluir 1 item por vez.`),wg(),jc(1891,`p`),iO(1892,`Ao utilizar `),jc(1893,`code`),iO(1894,`p-service-delete`),wg(),iO(1895,` mas sem a propriedade `),jc(1896,`code`),iO(1897,`p-service-api`),wg(),iO(1898,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),wg(),jc(1899,`p`),iO(1900,`Caso a tabela utilize `),jc(1901,`code`),iO(1902,`p-height`),wg(),iO(1903,` e esteja sem serviço, é necessário a reatribuição dos itens utilizando o evento `),jc(1904,`code`),iO(1905,`(p-delete-items)`),wg(),iO(1906,`, por exemplo:`),wg(),jc(1907,`pre`)(1908,`code`),iO(1909,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),wg()()()()(),nu(1910,`br`),jc(1911,`table`,42)(1912,`tr`,17)(1913,`th`,43)(1914,`div`,19)(1915,`h4`)(1916,`span`,20),iO(1917,` updateSearchAIQuery `),wg()()()()(),jc(1918,`tr`,24)(1919,`td`,24)(1920,`p`),iO(1921,`Atualiza programaticamente o valor do campo de busca por IA (`),jc(1922,`code`),iO(1923,`po-search-ai`),wg(),iO(1924,`) integrado \xE0 tabela
via `),jc(1925,`code`),iO(1926,`p-search-ai-field`),wg(),iO(1927,`.`),wg(),jc(1928,`p`),iO(1929,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),wg(),jc(1930,`blockquote`)(1931,`p`),iO(1932,`Só tem efeito quando a propriedade `),jc(1933,`code`),iO(1934,`p-search-ai-field`),wg(),iO(1935,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),wg()()()()(),jc(1936,`h5`)(1937,`b`),iO(1938,`Parâmetros`),wg()(),jc(1939,`table`,14)(1940,`tr`,15)(1941,`th`,16),iO(1942,`Nome`),wg(),jc(1943,`th`,16),iO(1944,`Tipo`),wg(),jc(1945,`th`,16),iO(1946,`Descrição`),wg()(),jc(1947,`tr`,17)(1948,`td`,18),iO(1949,` value`),wg(),jc(1950,`td`,21)(1951,`code`,45),iO(1952,` string `),wg()(),jc(1953,`td`,24)(1954,`p`),iO(1955,`Texto da consulta a ser inserido no campo de busca por IA.`),wg()()(),jc(1956,`tr`,17)(1957,`td`,18),iO(1958,` triggerSearch`),wg(),jc(1959,`td`,21)(1960,`code`,45),iO(1961,` boolean `),wg()(),jc(1962,`td`,24)(1963,`p`),iO(1964,`Quando `),jc(1965,`code`),iO(1966,`true`),wg(),iO(1967,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),jc(1968,`code`),iO(1969,`false`),wg(),jc(1970,`em`),iO(1971,`(padrão)`),wg(),iO(1972,`, apenas preenche o campo.`),wg()()()(),nu(1973,`br`),jc(1974,`table`,42)(1975,`tr`,17)(1976,`th`,43)(1977,`div`,19)(1978,`h4`)(1979,`span`,20),iO(1980,` removeItem `),wg()()()()(),jc(1981,`tr`,24)(1982,`td`,24)(1983,`p`),iO(1984,`Método que remove um item da tabela.`),wg()()()(),jc(1985,`h5`)(1986,`b`),iO(1987,`Parâmetros`),wg()(),jc(1988,`table`,14)(1989,`tr`,15)(1990,`th`,16),iO(1991,`Nome`),wg(),jc(1992,`th`,16),iO(1993,`Tipo`),wg(),jc(1994,`th`,16),iO(1995,`Descrição`),wg()(),jc(1996,`tr`,17)(1997,`td`,18),iO(1998,` item`),wg(),jc(1999,`td`,21)(2e3,`code`,35),iO(2001,` number `),wg(),jc(2002,`code`,44),iO(2003,` { key: value } `),wg()(),jc(2004,`td`,24)(2005,`p`),iO(2006,`Índice da linha ou o item que será removido.`),wg(),jc(2007,`blockquote`)(2008,`p`),iO(2009,`Ao remover o item, a linha que o representa será excluída da tabela.`),wg()()()()(),nu(2010,`br`),jc(2011,`table`,42)(2012,`tr`,17)(2013,`th`,43)(2014,`div`,19)(2015,`h4`)(2016,`span`,20),iO(2017,` updateItem `),wg()()()()(),jc(2018,`tr`,24)(2019,`td`,24)(2020,`p`),iO(2021,`Método que atualiza um item da tabela.`),wg()()()(),jc(2022,`h5`)(2023,`b`),iO(2024,`Parâmetros`),wg()(),jc(2025,`table`,14)(2026,`tr`,15)(2027,`th`,16),iO(2028,`Nome`),wg(),jc(2029,`th`,16),iO(2030,`Tipo`),wg(),jc(2031,`th`,16),iO(2032,`Descrição`),wg()(),jc(2033,`tr`,17)(2034,`td`,18),iO(2035,` item`),wg(),jc(2036,`td`,21)(2037,`code`,35),iO(2038,` number `),wg(),jc(2039,`code`,44),iO(2040,` { key: value } `),wg()(),jc(2041,`td`,24)(2042,`p`),iO(2043,`Índice da linha ou o item que será atualizado.`),wg()()(),jc(2044,`tr`,17)(2045,`td`,18),iO(2046,` updatedItem`),wg(),jc(2047,`td`,21)(2048,`code`,44),iO(2049,` { key: value } `),wg()(),jc(2050,`td`,24)(2051,`p`),iO(2052,`Item que foi atualizado.`),wg(),jc(2053,`blockquote`)(2054,`p`),iO(2055,`Ao atualizar o item, a informação será alterada na tabela.`),wg()()()()(),nu(2056,`br`),jc(2057,`h3`),iO(2058,`Interfaces`),wg(),jc(2059,`h4`,46)(2060,`code`,5),iO(2061,`PoTableAction`),wg()(),jc(2062,`div`,2)(2063,`p`),iO(2064,`Interface para lista de ações do componente. `),wg()(),jc(2065,`h4`,13),iO(2066,`Propriedades`),wg(),jc(2067,`table`,14)(2068,`tr`,15)(2069,`th`,16),iO(2070,`Nome`),wg(),jc(2071,`th`,16),iO(2072,`Tipo`),wg(),jc(2073,`th`,16),iO(2074,`Descrição`),wg()(),jc(2075,`tr`,17)(2076,`td`,18)(2077,`div`,19)(2078,`span`,20),iO(2079,` action`),nu(2080,`br`),wg()()(),jc(2081,`td`,21)(2082,`code`,47),iO(2083,`Function`),wg()(),jc(2084,`td`,24)(2085,`em`)(2086,`strong`),iO(2087,`(opcional)`),wg()(),jc(2088,`p`),iO(2089,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(2090,`p`),iO(2091,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(2092,`code`),iO(2093,`subItems`),wg(),iO(2094,`.`),wg(),jc(2095,`blockquote`)(2096,`p`),iO(2097,`Para que a função seja executada no contexto do componente, utilize `),jc(2098,`em`),iO(2099,`bind`),wg(),iO(2100,`:
`),jc(2101,`code`),iO(2102,`action: this.myFunction.bind(this)`),wg()()()()(),jc(2103,`tr`,17)(2104,`td`,18)(2105,`div`,19)(2106,`span`,20),iO(2107,` disabled`),nu(2108,`br`),wg()()(),jc(2109,`td`,21)(2110,`code`,22),iO(2111,`boolean `),wg(),jc(2112,`code`,47),iO(2113,` Function`),wg()(),jc(2114,`td`,24)(2115,`em`)(2116,`strong`),iO(2117,`(opcional)`),wg()(),jc(2118,`p`),iO(2119,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(2120,`tr`,17)(2121,`td`,18)(2122,`div`,19)(2123,`span`,20),iO(2124,` icon`),nu(2125,`br`),wg()()(),jc(2126,`td`,21)(2127,`code`,31),iO(2128,`string `),wg(),jc(2129,`code`,48),iO(2130,` TemplateRef<void>`),wg()(),jc(2131,`td`,24)(2132,`em`)(2133,`strong`),iO(2134,`(opcional)`),wg()(),jc(2135,`p`),iO(2136,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(2137,`p`),iO(2138,`Aceita ícones da `),jc(2139,`a`,26),iO(2140,`Biblioteca de ícones`),wg(),iO(2141,`, fontes externas (ex: Font Awesome)
ou um `),jc(2142,`code`),iO(2143,`TemplateRef`),wg(),iO(2144,` para ícones customizados.`),wg(),jc(2145,`pre`)(2146,`code`),iO(2147,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(2148,`tr`,17)(2149,`td`,18)(2150,`div`,19)(2151,`span`,20),iO(2152,` label`),nu(2153,`br`),wg()()(),jc(2154,`td`,21)(2155,`code`,31),iO(2156,`string`),wg()(),jc(2157,`td`,24)(2158,`p`),iO(2159,`Rótulo da ação.`),wg(),jc(2160,`p`),iO(2161,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(2162,`code`),iO(2163,`subItems`),wg(),iO(2164,`.`),wg()()(),jc(2165,`tr`,17)(2166,`td`,18)(2167,`div`,19)(2168,`span`,20),iO(2169,` selected`),nu(2170,`br`),wg()()(),jc(2171,`td`,21)(2172,`code`,22),iO(2173,`boolean`),wg()(),jc(2174,`td`,24)(2175,`em`)(2176,`strong`),iO(2177,`(opcional)`),wg()(),jc(2178,`p`),iO(2179,`Define se a ação está selecionada.`),wg()()(),jc(2180,`tr`,17)(2181,`td`,18)(2182,`div`,19)(2183,`span`,20),iO(2184,` separator`),nu(2185,`br`),wg()()(),jc(2186,`td`,21)(2187,`code`,22),iO(2188,`boolean`),wg()(),jc(2189,`td`,24)(2190,`em`)(2191,`strong`),iO(2192,`(opcional)`),wg()(),jc(2193,`p`),iO(2194,`Atribui uma linha separadora acima do item.`),wg()()(),jc(2195,`tr`,17)(2196,`td`,18)(2197,`div`,19)(2198,`span`,20),iO(2199,` subItems`),nu(2200,`br`),wg()()(),jc(2201,`td`,21)(2202,`code`,49),iO(2203,`Array<PoPopupAction>`),wg()(),jc(2204,`td`,24)(2205,`em`)(2206,`strong`),iO(2207,`(opcional)`),wg()(),jc(2208,`p`),iO(2209,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(2210,`pre`)(2211,`code`),iO(2212,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(2213,`p`),iO(2214,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(2215,`blockquote`)(2216,`p`),iO(2217,`As propriedades `),jc(2218,`code`),iO(2219,`disabled`),wg(),iO(2220,`, `),jc(2221,`code`),iO(2222,`type`),wg(),iO(2223,` e `),jc(2224,`code`),iO(2225,`visible`),wg(),iO(2226,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(2227,`blockquote`)(2228,`p`),iO(2229,`Quando `),jc(2230,`code`),iO(2231,`url`),wg(),iO(2232,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(2233,`blockquote`)(2234,`p`),iO(2235,`Em subníveis aninhados, o `),jc(2236,`code`),iO(2237,`icon`),wg(),iO(2238,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(2239,`tr`,17)(2240,`td`,18)(2241,`div`,19)(2242,`span`,20),iO(2243,` subItemsLazy`),nu(2244,`br`),wg()()(),jc(2245,`td`,21)(2246,`code`,50),iO(2247,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(2248,`td`,24)(2249,`em`)(2250,`strong`),iO(2251,`(opcional)`),wg()(),jc(2252,`p`),iO(2253,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(2254,`p`),iO(2255,`Recebe o item agrupador e retorna um `),jc(2256,`code`),iO(2257,`Observable<Array<PoPopupAction>>`),wg(),iO(2258,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(2259,`strong`),iO(2260,`apenas`),wg(),iO(2261,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(2262,`code`),iO(2263,`po-skeleton`),wg(),iO(2264,`
enquanto os dados s\xE3o carregados:`),wg(),jc(2265,`pre`)(2266,`code`),iO(2267,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(2268,`blockquote`)(2269,`p`),iO(2270,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(2271,`p`),iO(2272,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(2273,`tr`,17)(2274,`td`,18)(2275,`div`,19)(2276,`span`,20),iO(2277,` type`),nu(2278,`br`),wg()()(),jc(2279,`td`,21)(2280,`code`,31),iO(2281,`string`),wg()(),jc(2282,`td`,24)(2283,`em`)(2284,`strong`),iO(2285,`(opcional)`),wg()(),jc(2286,`p`),iO(2287,`Define a cor do item.`),wg(),jc(2288,`p`),iO(2289,`Valores válidos:`),wg(),jc(2290,`ul`)(2291,`li`)(2292,`code`),iO(2293,`default`),wg()(),jc(2294,`li`)(2295,`code`),iO(2296,`danger`),wg()()()()(),jc(2297,`tr`,17)(2298,`td`,18)(2299,`div`,19)(2300,`span`,20),iO(2301,` url`),nu(2302,`br`),wg()()(),jc(2303,`td`,21)(2304,`code`,31),iO(2305,`string`),wg()(),jc(2306,`td`,24)(2307,`em`)(2308,`strong`),iO(2309,`(opcional)`),wg()(),jc(2310,`p`),iO(2311,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(2312,`p`),iO(2313,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(2314,`code`),iO(2315,`url`),wg(),iO(2316,` é informada em um agrupador, o clique `),jc(2317,`strong`),iO(2318,`não abrirá os subitens`),wg(),iO(2319,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(2320,`blockquote`)(2321,`p`),iO(2322,`Quando informada, tem prioridade sobre a propriedade `),jc(2323,`code`),iO(2324,`action`),wg(),iO(2325,`.`),wg()()()(),jc(2326,`tr`,17)(2327,`td`,18)(2328,`div`,19)(2329,`span`,20),iO(2330,` visible`),nu(2331,`br`),wg()()(),jc(2332,`td`,21)(2333,`code`,22),iO(2334,`boolean `),wg(),jc(2335,`code`,47),iO(2336,` Function`),wg()(),jc(2337,`td`,24)(2338,`em`)(2339,`strong`),iO(2340,`(opcional)`),wg()(),jc(2341,`p`),iO(2342,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()(),jc(2343,`h4`,46)(2344,`code`,5),iO(2345,`PoTableBoolean`),wg()(),jc(2346,`div`,2)(2347,`p`),iO(2348,`Interface que define as colunas booleanas do `),jc(2349,`code`),iO(2350,`po-table`),wg(),iO(2351,`.`),wg()(),jc(2352,`h4`,13),iO(2353,`Propriedades`),wg(),jc(2354,`table`,14)(2355,`tr`,15)(2356,`th`,16),iO(2357,`Nome`),wg(),jc(2358,`th`,16),iO(2359,`Tipo`),wg(),jc(2360,`th`,16),iO(2361,`Descrição`),wg()(),jc(2362,`tr`,17)(2363,`td`,18)(2364,`div`,19)(2365,`span`,20),iO(2366,` falseLabel`),nu(2367,`br`),wg()()(),jc(2368,`td`,21)(2369,`code`,31),iO(2370,`string`),wg()(),jc(2371,`td`,24)(2372,`em`)(2373,`strong`),iO(2374,`(opcional)`),wg()(),jc(2375,`p`),iO(2376,`Define o rótulo para valores `),jc(2377,`code`),iO(2378,`false`),wg(),iO(2379,`.`),wg()()(),jc(2380,`tr`,17)(2381,`td`,18)(2382,`div`,19)(2383,`span`,20),iO(2384,` trueLabel`),nu(2385,`br`),wg()()(),jc(2386,`td`,21)(2387,`code`,31),iO(2388,`string`),wg()(),jc(2389,`td`,24)(2390,`em`)(2391,`strong`),iO(2392,`(opcional)`),wg()(),jc(2393,`p`),iO(2394,`Define o rótulo para valores `),jc(2395,`code`),iO(2396,`true`),wg(),iO(2397,`.`),wg()()()(),jc(2398,`h4`,46)(2399,`code`,5),iO(2400,`PoTableColumnSort`),wg()(),jc(2401,`div`,2)(2402,`p`),iO(2403,`Interface para ordenação das colunas do componente table.`),wg()(),jc(2404,`h4`,13),iO(2405,`Propriedades`),wg(),jc(2406,`table`,14)(2407,`tr`,15)(2408,`th`,16),iO(2409,`Nome`),wg(),jc(2410,`th`,16),iO(2411,`Tipo`),wg(),jc(2412,`th`,16),iO(2413,`Descrição`),wg()(),jc(2414,`tr`,17)(2415,`td`,18)(2416,`div`,19)(2417,`span`,20),iO(2418,` column`),nu(2419,`br`),wg()()(),jc(2420,`td`,21)(2421,`code`,51),iO(2422,`PoTableColumn`),wg()(),jc(2423,`td`,24)(2424,`em`)(2425,`strong`),iO(2426,`(opcional)`),wg()(),jc(2427,`p`),iO(2428,`Coluna pela qual a tabela está ordenada.`),wg()()(),jc(2429,`tr`,17)(2430,`td`,18)(2431,`div`,19)(2432,`span`,20),iO(2433,` type`),nu(2434,`br`),wg()()(),jc(2435,`td`,21)(2436,`code`,52),iO(2437,`PoTableColumnSortType`),wg()(),jc(2438,`td`,24)(2439,`p`),iO(2440,`Tipo da ordenação.`),wg()()()(),jc(2441,`h4`,46)(2442,`code`,5),iO(2443,`PoTableColumn`),wg()(),jc(2444,`div`,2)(2445,`p`),iO(2446,`Interface para configuração das colunas do `),jc(2447,`code`),iO(2448,`po-table`),wg(),iO(2449,`.`),wg(),jc(2450,`p`),iO(2451,`As definições das colunas serão aplicadas linha a linha.`),wg()(),jc(2452,`h4`,13),iO(2453,`Propriedades`),wg(),jc(2454,`table`,14)(2455,`tr`,15)(2456,`th`,16),iO(2457,`Nome`),wg(),jc(2458,`th`,16),iO(2459,`Tipo`),wg(),jc(2460,`th`,16),iO(2461,`Descrição`),wg()(),jc(2462,`tr`,17)(2463,`td`,18)(2464,`div`,19)(2465,`span`,20),iO(2466,` action`),nu(2467,`br`),wg()()(),jc(2468,`td`,21)(2469,`code`,47),iO(2470,`Function`),wg()(),jc(2471,`td`,24)(2472,`em`)(2473,`strong`),iO(2474,`(opcional)`),wg()(),jc(2475,`p`),iO(2476,`Define uma ação na coluna quando o tipo da coluna for `),jc(2477,`code`),iO(2478,`link`),wg(),iO(2479,` ou `),jc(2480,`code`),iO(2481,`icon`),wg(),iO(2482,`.`),wg(),jc(2483,`blockquote`)(2484,`p`),iO(2485,`Quando for do tipo `),jc(2486,`code`),iO(2487,`link`),wg(),iO(2488,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),wg()(),jc(2489,`blockquote`)(2490,`p`),iO(2491,`Quando for do tipo `),jc(2492,`code`),iO(2493,`icon`),wg(),iO(2494,` enviará o objeto completo da linha e o segundo parâmetro será a definição da coluna.`),wg()()()(),jc(2495,`tr`,17)(2496,`td`,18)(2497,`div`,19)(2498,`span`,20),iO(2499,` boolean`),nu(2500,`br`),wg()()(),jc(2501,`td`,21)(2502,`code`,53),iO(2503,`PoTableBoolean`),wg()(),jc(2504,`td`,24)(2505,`em`)(2506,`strong`),iO(2507,`(opcional)`),wg()(),jc(2508,`p`),iO(2509,`Define um objeto do tipo `),jc(2510,`code`),iO(2511,`PoTableBoolean`),wg(),iO(2512,` para as colunas do tipo `),jc(2513,`em`),iO(2514,`boolean`),wg(),iO(2515,`. Por exemplo:`),wg(),jc(2516,`pre`)(2517,`code`),iO(2518,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),wg()(),jc(2519,`blockquote`)(2520,`p`),iO(2521,`Caso não seja definido um objeto para colunas do tipo `),jc(2522,`em`),iO(2523,`boolean`),wg(),iO(2524,`,
esta exibir\xE1 por padr\xE3o `),jc(2525,`code`),iO(2526,`Sim`),wg(),iO(2527,` e `),jc(2528,`code`),iO(2529,`Não`),wg(),iO(2530,` de acordo com os valores `),jc(2531,`em`),iO(2532,`booleanos`),wg(),iO(2533,`.`),wg()()()(),jc(2534,`tr`,17)(2535,`td`,18)(2536,`div`,19)(2537,`span`,20),iO(2538,` color`),nu(2539,`br`),wg()()(),jc(2540,`td`,21)(2541,`code`,31),iO(2542,`string `),wg(),jc(2543,`code`,47),iO(2544,` Function`),wg()(),jc(2545,`td`,24)(2546,`em`)(2547,`strong`),iO(2548,`(opcional)`),wg()(),jc(2549,`p`),iO(2550,`Define a cor que será aplicada no conteúdo da coluna.`),wg(),jc(2551,`p`),iO(2552,`Valores válidos:`),wg(),jc(2553,`ul`)(2554,`li`),nu(2555,`span`,54),jc(2556,`code`),iO(2557,`color-01`),wg()(),jc(2558,`li`),nu(2559,`span`,55),jc(2560,`code`),iO(2561,`color-02`),wg()(),jc(2562,`li`),nu(2563,`span`,56),jc(2564,`code`),iO(2565,`color-03`),wg()(),jc(2566,`li`),nu(2567,`span`,57),jc(2568,`code`),iO(2569,`color-04`),wg()(),jc(2570,`li`),nu(2571,`span`,58),jc(2572,`code`),iO(2573,`color-05`),wg()(),jc(2574,`li`),nu(2575,`span`,59),jc(2576,`code`),iO(2577,`color-06`),wg()(),jc(2578,`li`),nu(2579,`span`,60),jc(2580,`code`),iO(2581,`color-07`),wg()(),jc(2582,`li`),nu(2583,`span`,61),jc(2584,`code`),iO(2585,`color-08`),wg()(),jc(2586,`li`),nu(2587,`span`,62),jc(2588,`code`),iO(2589,`color-09`),wg()(),jc(2590,`li`),nu(2591,`span`,63),jc(2592,`code`),iO(2593,`color-10`),wg()(),jc(2594,`li`),nu(2595,`span`,64),jc(2596,`code`),iO(2597,`color-11`),wg()(),jc(2598,`li`),nu(2599,`span`,65),jc(2600,`code`),iO(2601,`color-12`),wg()()(),jc(2602,`blockquote`)(2603,`p`),iO(2604,`Também é possível utilizar as 35 cores da paleta `),jc(2605,`strong`),iO(2606,`Caption Tag Colors`),wg(),iO(2607,`:`),wg()(),jc(2608,`ul`)(2609,`li`),nu(2610,`span`,66),jc(2611,`code`),iO(2612,`caption-tag-01`),wg(),nu(2613,`span`,67),jc(2614,`code`),iO(2615,`caption-tag-02`),wg(),nu(2616,`span`,68),jc(2617,`code`),iO(2618,`caption-tag-03`),wg(),nu(2619,`span`,69),jc(2620,`code`),iO(2621,`caption-tag-04`),wg(),nu(2622,`span`,70),jc(2623,`code`),iO(2624,`caption-tag-05`),wg()(),jc(2625,`li`),nu(2626,`span`,71),jc(2627,`code`),iO(2628,`caption-tag-06`),wg(),nu(2629,`span`,72),jc(2630,`code`),iO(2631,`caption-tag-07`),wg(),nu(2632,`span`,73),jc(2633,`code`),iO(2634,`caption-tag-08`),wg(),nu(2635,`span`,74),jc(2636,`code`),iO(2637,`caption-tag-09`),wg(),nu(2638,`span`,75),jc(2639,`code`),iO(2640,`caption-tag-10`),wg()(),jc(2641,`li`),nu(2642,`span`,76),jc(2643,`code`),iO(2644,`caption-tag-11`),wg(),nu(2645,`span`,77),jc(2646,`code`),iO(2647,`caption-tag-12`),wg(),nu(2648,`span`,78),jc(2649,`code`),iO(2650,`caption-tag-13`),wg(),nu(2651,`span`,79),jc(2652,`code`),iO(2653,`caption-tag-14`),wg(),nu(2654,`span`,80),jc(2655,`code`),iO(2656,`caption-tag-15`),wg()(),jc(2657,`li`),nu(2658,`span`,81),jc(2659,`code`),iO(2660,`caption-tag-16`),wg(),nu(2661,`span`,82),jc(2662,`code`),iO(2663,`caption-tag-17`),wg(),nu(2664,`span`,83),jc(2665,`code`),iO(2666,`caption-tag-18`),wg(),nu(2667,`span`,84),jc(2668,`code`),iO(2669,`caption-tag-19`),wg(),nu(2670,`span`,85),jc(2671,`code`),iO(2672,`caption-tag-20`),wg()(),jc(2673,`li`),nu(2674,`span`,86),jc(2675,`code`),iO(2676,`caption-tag-21`),wg(),nu(2677,`span`,87),jc(2678,`code`),iO(2679,`caption-tag-22`),wg(),nu(2680,`span`,88),jc(2681,`code`),iO(2682,`caption-tag-23`),wg(),nu(2683,`span`,89),jc(2684,`code`),iO(2685,`caption-tag-24`),wg(),nu(2686,`span`,90),jc(2687,`code`),iO(2688,`caption-tag-25`),wg()(),jc(2689,`li`),nu(2690,`span`,91),jc(2691,`code`),iO(2692,`caption-tag-26`),wg(),nu(2693,`span`,92),jc(2694,`code`),iO(2695,`caption-tag-27`),wg(),nu(2696,`span`,93),jc(2697,`code`),iO(2698,`caption-tag-28`),wg(),nu(2699,`span`,94),jc(2700,`code`),iO(2701,`caption-tag-29`),wg(),nu(2702,`span`,95),jc(2703,`code`),iO(2704,`caption-tag-30`),wg()(),jc(2705,`li`),nu(2706,`span`,96),jc(2707,`code`),iO(2708,`caption-tag-31`),wg(),nu(2709,`span`,97),jc(2710,`code`),iO(2711,`caption-tag-32`),wg(),nu(2712,`span`,98),jc(2713,`code`),iO(2714,`caption-tag-33`),wg(),nu(2715,`span`,99),jc(2716,`code`),iO(2717,`caption-tag-34`),wg(),nu(2718,`span`,100),jc(2719,`code`),iO(2720,`caption-tag-35`),wg()()(),jc(2721,`blockquote`)(2722,`p`),iO(2723,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),wg()(),jc(2724,`pre`)(2725,`code`),iO(2726,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),wg()(),jc(2727,`blockquote`)(2728,`p`),iO(2729,`É possível também usá-la na coluna do tipo `),jc(2730,`code`),iO(2731,`icons`),wg(),iO(2732,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),wg()(),jc(2733,`pre`)(2734,`code`),iO(2735,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),wg()()()(),jc(2736,`tr`,17)(2737,`td`,18)(2738,`div`,19)(2739,`span`,20),iO(2740,` detail`),nu(2741,`br`),wg()()(),jc(2742,`td`,21)(2743,`code`,101),iO(2744,`PoTableDetail`),wg()(),jc(2745,`td`,24)(2746,`em`)(2747,`strong`),iO(2748,`(opcional)`),wg()(),jc(2749,`p`),iO(2750,`Define um objeto que segue a interface `),jc(2751,`code`),iO(2752,`PoTableDetail`),wg(),iO(2753,`, para as colunas de detalhes. Por exemplo:`),wg(),jc(2754,`pre`)(2755,`code`),iO(2756,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),wg()()()(),jc(2757,`tr`,17)(2758,`td`,18)(2759,`div`,19)(2760,`span`,20),iO(2761,` disabled`),nu(2762,`br`),wg()()(),jc(2763,`td`,21)(2764,`code`,47),iO(2765,`Function`),wg()(),jc(2766,`td`,24)(2767,`em`)(2768,`strong`),iO(2769,`(opcional)`),wg()(),jc(2770,`p`),iO(2771,`Função que deve retornar um booleano para habilitar ou desabilitar o `),jc(2772,`em`),iO(2773,`link`),wg(),iO(2774,` e sua ação.`),wg(),jc(2775,`blockquote`)(2776,`p`),iO(2777,`Propriedade disponível nas colunas do tipo `),jc(2778,`code`),iO(2779,`link`),wg(),iO(2780,`.`),wg()()()(),jc(2781,`tr`,17)(2782,`td`,18)(2783,`div`,19)(2784,`span`,20),iO(2785,` format`),nu(2786,`br`),wg()()(),jc(2787,`td`,21)(2788,`code`,31),iO(2789,`string`),wg()(),jc(2790,`td`,24)(2791,`em`)(2792,`strong`),iO(2793,`(opcional)`),wg()(),jc(2794,`p`),iO(2795,`Formato de exibição do valor da coluna.`),wg(),jc(2796,`table`)(2797,`thead`)(2798,`tr`)(2799,`th`),iO(2800,`Formatação`),wg(),jc(2801,`th`),iO(2802,`Type da Coluna`),wg(),jc(2803,`th`),iO(2804,`Descrição`),wg(),jc(2805,`th`),iO(2806,`Exemplos`),wg()()(),jc(2807,`tbody`)(2808,`tr`)(2809,`td`),iO(2810,`Monetário`),wg(),jc(2811,`td`)(2812,`code`),iO(2813,`currency`),wg()(),jc(2814,`td`),iO(2815,`Formato para valores monetários. Informe o código da moeda (ISO 4217).`),wg(),jc(2816,`td`)(2817,`code`),iO(2818,`'BRL'`),wg(),iO(2819,`, `),jc(2820,`code`),iO(2821,`'USD'`),wg(),iO(2822,`, `),jc(2823,`code`),iO(2824,`'EUR'`),wg(),iO(2825,`, `),jc(2826,`code`),iO(2827,`'RUB'`),wg()()(),jc(2828,`tr`)(2829,`td`),iO(2830,`Data`),wg(),jc(2831,`td`)(2832,`code`),iO(2833,`date`),wg()(),jc(2834,`td`),iO(2835,`Aceita apenas os caracteres de dia(dd), mês(MM) e ano (yyyy ou yy), caso não seja informado um formato o mesmo será 'dd/MM/yyyy'`),wg(),jc(2836,`td`)(2837,`code`),iO(2838,`'dd/MM/yyyy'`),wg(),iO(2839,`, `),jc(2840,`code`),iO(2841,`'dd-MM-yy'`),wg(),iO(2842,`, `),jc(2843,`code`),iO(2844,`'mm/dd/yyyy'`),wg()()(),jc(2845,`tr`)(2846,`td`),iO(2847,`Data/Hora`),wg(),jc(2848,`td`)(2849,`code`),iO(2850,`dateTime`),wg()(),jc(2851,`td`),iO(2852,`Aceita os caracteres de dia(dd), mês(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e período(a para AM/PM). Caso não seja informado um formato o mesmo será 'dd/MM/yyyy HH:mm:ss'`),wg(),jc(2853,`td`)(2854,`code`),iO(2855,`'dd/MM/yyyy HH:mm'`),wg(),iO(2856,`, `),jc(2857,`code`),iO(2858,`'dd/MM/yyyy HH:mm:ss'`),wg(),iO(2859,`, `),jc(2860,`code`),iO(2861,`'dd/MM/yyyy HH:mm:ss.SSS'`),wg(),iO(2862,`, `),jc(2863,`code`),iO(2864,`'MM/dd/yyyy hh:mm a'`),wg(),iO(2865,`, `),jc(2866,`code`),iO(2867,`'yyyy-MM-dd HH:mm'`),wg(),iO(2868,`, `),jc(2869,`code`),iO(2870,`'short'`),wg(),iO(2871,`, `),jc(2872,`code`),iO(2873,`'medium'`),wg()()(),jc(2874,`tr`)(2875,`td`),iO(2876,`Hora`),wg(),jc(2877,`td`)(2878,`code`),iO(2879,`time`),wg()(),jc(2880,`td`),iO(2881,`Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos são opcionais, caso não seja informado um formato o mesmo será 'HH:mm:ss'`),wg(),jc(2882,`td`)(2883,`code`),iO(2884,`'HH:mm'`),wg(),iO(2885,`, `),jc(2886,`code`),iO(2887,`'HH:mm:ss.ffffff'`),wg(),iO(2888,`, `),jc(2889,`code`),iO(2890,`'HH:mm:ss.ff'`),wg(),iO(2891,`, `),jc(2892,`code`),iO(2893,`'mm:ss.fff'`),wg()()(),jc(2894,`tr`)(2895,`td`),iO(2896,`Número`),wg(),jc(2897,`td`)(2898,`code`),iO(2899,`number`),wg()(),jc(2900,`td`),iO(2901,`Aceita um valor seguindo o padrão `),jc(2902,`a`,102)(2903,`strong`),iO(2904,`DecimalPipe`),wg()(),iO(2905,` para formatação, e caso não seja informado, o número será exibido na sua forma original.`),wg(),jc(2906,`td`)(2907,`code`),iO(2908,`'1.2-5'`),wg(),iO(2909,` (ex.: `),jc(2910,`code`),iO(2911,`50`),wg(),iO(2912,` → `),jc(2913,`code`),iO(2914,`50.00`),wg(),iO(2915,`)`),wg()()()(),jc(2916,`p`),iO(2917,`Observação: caso não seja informado um formato, o valor será exibido em sua forma original.`),wg()()(),jc(2918,`tr`,17)(2919,`td`,18)(2920,`div`,19)(2921,`span`,20),iO(2922,` icons`),nu(2923,`br`),wg()()(),jc(2924,`td`,21)(2925,`code`,103),iO(2926,`Array<PoTableColumnIcon>`),wg()(),jc(2927,`td`,24)(2928,`em`)(2929,`strong`),iO(2930,`(opcional)`),wg()(),jc(2931,`p`),iO(2932,`Define um `),jc(2933,`em`),iO(2934,`array`),wg(),iO(2935,` de objetos para colunas de ícones que irá sobrepor os valores como `),jc(2936,`code`),iO(2937,`action`),wg(),iO(2938,` e `),jc(2939,`code`),iO(2940,`color`),wg(),iO(2941,`
definidos na coluna, \xE0 partir do `),jc(2942,`em`),iO(2943,`value`),wg(),iO(2944,` da `),jc(2945,`a`,104)(2946,`code`),iO(2947,`PoTableColumnIcon`),wg()(),iO(2948,`, por exemplo:`),wg(),jc(2949,`pre`)(2950,`code`),iO(2951,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),wg()(),jc(2952,`pre`)(2953,`code`),iO(2954,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),wg()()()(),jc(2955,`tr`,17)(2956,`td`,18)(2957,`div`,19)(2958,`span`,20),iO(2959,` label`),nu(2960,`br`),wg()()(),jc(2961,`td`,21)(2962,`code`,31),iO(2963,`string`),wg()(),jc(2964,`td`,24)(2965,`em`)(2966,`strong`),iO(2967,`(opcional)`),wg()(),jc(2968,`p`),iO(2969,`Texto para título da coluna.`),wg(),jc(2970,`p`),iO(2971,`Caso não seja informado, será utilizado como `),jc(2972,`em`),iO(2973,`label`),wg(),iO(2974,` o valor da propriedade `),jc(2975,`em`),iO(2976,`property`),wg(),iO(2977,` com a primeira letra em maiúsculo.`),wg()()(),jc(2978,`tr`,17)(2979,`td`,18)(2980,`div`,19)(2981,`span`,20),iO(2982,` labels`),nu(2983,`br`),wg()()(),jc(2984,`td`,21)(2985,`code`,105),iO(2986,`Array<PoTableColumnLabel>`),wg()(),jc(2987,`td`,24)(2988,`em`)(2989,`strong`),iO(2990,`(opcional)`),wg()(),jc(2991,`p`),iO(2992,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),jc(2993,`code`),iO(2994,`PoTableColumnLabel`),wg(),iO(2995,` na qual devem ser definidas os labels. Por exemplo:`),wg(),jc(2996,`pre`)(2997,`code`),iO(2998,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),wg()()()(),jc(2999,`tr`,17)(3e3,`td`,18)(3001,`div`,19)(3002,`span`,20),iO(3003,` link`),nu(3004,`br`),wg()()(),jc(3005,`td`,21)(3006,`code`,31),iO(3007,`string`),wg()(),jc(3008,`td`,24)(3009,`em`)(3010,`strong`),iO(3011,`(opcional)`),wg()(),jc(3012,`p`),iO(3013,`Define o nome da propriedade que conterá o `),jc(3014,`code`),iO(3015,`link`),wg(),iO(3016,` a ser redirecionado.`),wg()()(),jc(3017,`tr`,17)(3018,`td`,18)(3019,`div`,19)(3020,`span`,20),iO(3021,` mask`),nu(3022,`br`),wg()()(),jc(3023,`td`,21)(3024,`code`,31),iO(3025,`string`),wg()(),jc(3026,`td`,24)(3027,`em`)(3028,`strong`),iO(3029,`(opcional)`),wg()(),jc(3030,`p`),iO(3031,`Define uma máscara para formatação do valor exibido na coluna.`),wg(),jc(3032,`p`),iO(3033,`A máscara é aplicada somente para `),jc(3034,`strong`),iO(3035,`exibição`),wg(),iO(3036,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),wg(),jc(3037,`p`),iO(3038,`Caracteres válidos para a máscara:`),wg(),jc(3039,`ul`)(3040,`li`)(3041,`code`),iO(3042,`9`),wg(),iO(3043,` : aceita um dígito numérico (0-9).`),wg(),jc(3044,`li`)(3045,`code`),iO(3046,`@`),wg(),iO(3047,` : aceita um caractere alfabético (a-z, A-Z).`),wg(),jc(3048,`li`)(3049,`code`),iO(3050,`w`),wg(),iO(3051,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),wg(),jc(3052,`li`),iO(3053,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),jc(3054,`code`),iO(3055,`.`),wg(),iO(3056,`, `),jc(3057,`code`),iO(3058,`-`),wg(),iO(3059,`, `),jc(3060,`code`),iO(3061,`/`),wg(),iO(3062,`, `),jc(3063,`code`),iO(3064,`(`),wg(),iO(3065,`, `),jc(3066,`code`),iO(3067,`)`),wg(),iO(3068,`, `),jc(3069,`code`),iO(3070,`+`),wg(),iO(3071,`, `),nu(3072,`code`),iO(3073,`).`),wg()(),jc(3074,`p`),iO(3075,`Exemplos de uso:`),wg(),jc(3076,`pre`)(3077,`code`),iO(3078,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),wg()(),jc(3079,`blockquote`)(3080,`p`),iO(3081,`Esta propriedade é utilizada apenas para colunas do tipo `),jc(3082,`code`),iO(3083,`string`),wg(),iO(3084,` (padr\xE3o).
Caso a coluna possua um `),jc(3085,`code`),iO(3086,`type`),wg(),iO(3087,` diferente de `),jc(3088,`code`),iO(3089,`string`),wg(),iO(3090,`, a máscara será ignorada.`),wg()()()(),jc(3091,`tr`,17)(3092,`td`,18)(3093,`div`,19)(3094,`span`,20),iO(3095,` property`),nu(3096,`br`),wg()()(),jc(3097,`td`,21)(3098,`code`,31),iO(3099,`string`),wg()(),jc(3100,`td`,24)(3101,`em`)(3102,`strong`),iO(3103,`(opcional)`),wg()(),jc(3104,`p`),iO(3105,`Nome identificador da coluna. Também permite objetos aninhados conforme exemplo abaixo.`),wg(),jc(3106,`pre`)(3107,`code`),iO(3108,`{ property: 'address.street', label: 'Rua' }
`),wg()()()(),jc(3109,`tr`,17)(3110,`td`,18)(3111,`div`,19)(3112,`span`,20),iO(3113,` searchAiIgnore`),nu(3114,`br`),wg()()(),jc(3115,`td`,21)(3116,`code`,22),iO(3117,`boolean`),wg()(),jc(3118,`td`,24)(3119,`em`)(3120,`strong`),iO(3121,`(opcional)`),wg()(),jc(3122,`p`),iO(3123,`Quando `),jc(3124,`code`),iO(3125,`true`),wg(),iO(3126,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),jc(3127,`code`),iO(3128,`p-search-ai-field`),wg(),iO(3129,`, independentemente de estar visível na tabela.`),wg(),jc(3130,`p`),iO(3131,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),wg()()(),jc(3132,`tr`,17)(3133,`td`,18)(3134,`div`,19)(3135,`span`,20),iO(3136,` sortable`),nu(3137,`br`),wg()()(),jc(3138,`td`,21)(3139,`code`,22),iO(3140,`boolean`),wg()(),jc(3141,`td`,24)(3142,`em`)(3143,`strong`),iO(3144,`(opcional)`),wg()(),jc(3145,`p`),iO(3146,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),wg()()(),jc(3147,`tr`,17)(3148,`td`,18)(3149,`div`,19)(3150,`span`,20),iO(3151,` subtitles`),nu(3152,`br`),wg()()(),jc(3153,`td`,21)(3154,`code`,106),iO(3155,`Array<PoTableSubtitleColumn>`),wg()(),jc(3156,`td`,24)(3157,`em`)(3158,`strong`),iO(3159,`(opcional)`),wg()(),jc(3160,`p`),iO(3161,`Define um array de objetos para as colunas de legenda. Onde, `),jc(3162,`code`),iO(3163,`subtitles`),wg(),iO(3164,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),wg(),jc(3165,`pre`)(3166,`code`),iO(3167,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),wg()(),jc(3168,`p`),iO(3169,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),wg()()(),jc(3170,`tr`,17)(3171,`td`,18)(3172,`div`,19)(3173,`span`,20),iO(3174,` tooltip`),nu(3175,`br`),wg()()(),jc(3176,`td`,21)(3177,`code`,31),iO(3178,`string`),wg()(),jc(3179,`td`,24)(3180,`em`)(3181,`strong`),iO(3182,`(opcional)`),wg()(),jc(3183,`p`),iO(3184,`Define um texto de ajuda que será exibido ao passar o `),jc(3185,`em`),iO(3186,`mouse`),wg(),iO(3187,` sobre um texto.`),wg(),jc(3188,`blockquote`)(3189,`p`),iO(3190,`O tooltip só será visível se for uma coluna do tipo `),jc(3191,`em`),iO(3192,`link`),wg(),iO(3193,`.`),wg()(),jc(3194,`blockquote`)(3195,`p`),iO(3196,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),jc(3197,`em`),iO(3198,`tooltip`),wg(),iO(3199,` e será exibido justamente o conteúdo da célula.`),wg()()()(),jc(3200,`tr`,17)(3201,`td`,18)(3202,`div`,19)(3203,`span`,20),iO(3204,` type`),nu(3205,`br`),wg()()(),jc(3206,`td`,21)(3207,`code`,31),iO(3208,`string`),wg()(),jc(3209,`td`,24)(3210,`em`)(3211,`strong`),iO(3212,`(opcional)`),wg()(),jc(3213,`p`),iO(3214,`Tipo da coluna.`),wg(),jc(3215,`p`),iO(3216,`Valores válidos:`),wg(),jc(3217,`ul`)(3218,`li`)(3219,`p`)(3220,`code`),iO(3221,`boolean`),wg(),iO(3222,`: Exibirá por padrão `),jc(3223,`code`),iO(3224,`Sim`),wg(),iO(3225,` e `),jc(3226,`code`),iO(3227,`Não`),wg(),iO(3228,` de acordo com os valores `),jc(3229,`em`),iO(3230,`booleanos`),wg(),iO(3231,`.`),wg(),jc(3232,`blockquote`)(3233,`p`),iO(3234,`Caso necessite exibir valores diferentes do padrão, deve-se utilizar a propriedade `),jc(3235,`code`),iO(3236,`boolean`),wg(),iO(3237,` desta interface.`),wg()()(),jc(3238,`li`)(3239,`p`)(3240,`code`),iO(3241,`currency`),wg(),iO(3242,`: valores monetários.`),wg()(),jc(3243,`li`)(3244,`p`)(3245,`code`),iO(3246,`date`),wg(),iO(3247,`: valor de datas.`),wg(),jc(3248,`ul`)(3249,`li`),iO(3250,`Aceita os tipos `),jc(3251,`em`),iO(3252,`string`),wg(),iO(3253,` e `),jc(3254,`em`),iO(3255,`Date`),wg(),iO(3256,` padr\xE3o do Javascript,
por exemplo: `),jc(3257,`code`),iO(3258,`'2017-11-28'`),wg(),iO(3259,` ou `),jc(3260,`code`),iO(3261,`new Date(2017, 10, 28)`),wg(),iO(3262,`.`),wg()()(),jc(3263,`li`)(3264,`p`)(3265,`code`),iO(3266,`dateTime`),wg(),iO(3267,`: valor de data com horário.`),wg(),jc(3268,`ul`)(3269,`li`),iO(3270,`Aceita o tipo `),jc(3271,`em`),iO(3272,`string`),wg(),iO(3273,` no formato `),jc(3274,`strong`),iO(3275,`ISO-8601`),wg(),iO(3276,` extendido `),jc(3277,`strong`),iO(3278,`'yyyy-mm-ddTHH:mm:ss+|-hh:mm'`),wg(),iO(3279,`
ou `),jc(3280,`strong`),iO(3281,`'yyyy-mm-ddTHH:mm+|-hh:mm'`),wg(),iO(3282,` (sem segundos),
e o tipo `),jc(3283,`em`),iO(3284,`Date`),wg(),iO(3285,` padrão do Javascript, por exemplo: `),jc(3286,`code`),iO(3287,`'2017-11-28T00:00:00-02:00'`),wg(),iO(3288,`, `),jc(3289,`code`),iO(3290,`'2017-11-28T14:30-02:00'`),wg(),iO(3291,` ou `),jc(3292,`code`),iO(3293,`new Date(2017, 10, 28)`),wg(),iO(3294,`.`),wg(),jc(3295,`li`),iO(3296,`A formatação de exibição pode ser configurada pela propriedade `),jc(3297,`code`),iO(3298,`format`),wg(),iO(3299,`.`),wg()()(),jc(3300,`li`)(3301,`p`)(3302,`code`),iO(3303,`detail`),wg(),iO(3304,`: array de objetos para o master-detail.`),wg(),jc(3305,`ul`)(3306,`li`),iO(3307,`Incompatível com `),jc(3308,`code`),iO(3309,`virtual-scroll`),wg(),iO(3310,`, que requer altura fixa nas linhas.`),wg()()(),jc(3311,`li`)(3312,`p`)(3313,`code`),iO(3314,`icon`),wg(),iO(3315,`: `),jc(3316,`em`),iO(3317,`array`),wg(),iO(3318,` de `),jc(3319,`em`),iO(3320,`string`),wg(),iO(3321,` ou objetos para a coluna de ícones.`),wg()(),jc(3322,`li`)(3323,`p`)(3324,`code`),iO(3325,`label`),wg(),iO(3326,`: texto com destaque.`),wg()(),jc(3327,`li`)(3328,`p`)(3329,`code`),iO(3330,`link`),wg(),iO(3331,`: habilita link na coluna para ação ou navegação.`),wg()(),jc(3332,`li`)(3333,`p`)(3334,`code`),iO(3335,`number`),wg(),iO(3336,`: valores numéricos.`),wg()(),jc(3337,`li`)(3338,`p`)(3339,`code`),iO(3340,`string`),wg(),iO(3341,`: textos.`),wg()(),jc(3342,`li`)(3343,`p`)(3344,`code`),iO(3345,`subtitle`),wg(),iO(3346,`: array de objetos para a coluna de legenda.`),wg()(),jc(3347,`li`)(3348,`p`)(3349,`code`),iO(3350,`time`),wg(),iO(3351,`: valor de horário.`),wg(),jc(3352,`ul`)(3353,`li`),iO(3354,`Aceita o tipo `),jc(3355,`em`),iO(3356,`string`),wg(),iO(3357,` nos formatos `),jc(3358,`strong`),iO(3359,`'HH:mm:ss'`),wg(),iO(3360,` ou `),jc(3361,`strong`),iO(3362,`'HH:mm:ss.ffffff'`),wg(),iO(3363,`, por exemplo: `),jc(3364,`code`),iO(3365,`'23:12:45'`),wg(),iO(3366,`.`),wg()()(),jc(3367,`li`)(3368,`p`)(3369,`code`),iO(3370,`cellTemplate`),wg(),iO(3371,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),jc(3372,`a`,8),iO(3373,`PoTableCellTemplate`),wg(),iO(3374,`.`),wg()(),jc(3375,`li`)(3376,`p`)(3377,`code`),iO(3378,`columnTemplate`),wg(),iO(3379,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),jc(3380,`a`,7),iO(3381,`PoTableColumnTemplate`),wg(),iO(3382,`.`),wg()()()()(),jc(3383,`tr`,17)(3384,`td`,18)(3385,`div`,19)(3386,`span`,20),iO(3387,` visible`),nu(3388,`br`),wg()()(),jc(3389,`td`,21)(3390,`code`,22),iO(3391,`boolean`),wg()(),jc(3392,`td`,24)(3393,`em`)(3394,`strong`),iO(3395,`(opcional)`),wg()(),jc(3396,`p`),iO(3397,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),jc(3398,`strong`),iO(3399,`gerenciador de colunas`),wg(),iO(3400,`.`),wg(),jc(3401,`blockquote`)(3402,`p`),iO(3403,`A disponibilidade de visualização pode limitar-se de acordo com a definição de `),jc(3404,`code`),iO(3405,`p-max-columns`),wg(),iO(3406,`.`),wg()()()(),jc(3407,`tr`,17)(3408,`td`,18)(3409,`div`,19)(3410,`span`,20),iO(3411,` width`),nu(3412,`br`),wg()()(),jc(3413,`td`,21)(3414,`code`,31),iO(3415,`string`),wg()(),jc(3416,`td`,24)(3417,`em`)(3418,`strong`),iO(3419,`(opcional)`),wg()(),jc(3420,`p`),iO(3421,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),wg(),jc(3422,`ul`)(3423,`li`),iO(3424,`para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px`),wg(),jc(3425,`li`),iO(3426,`para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px`),wg()()()()(),jc(3427,`h4`,46)(3428,`code`,5),iO(3429,`PoTableLiterals`),wg()(),jc(3430,`div`,2)(3431,`p`),iO(3432,`Interface para definição das literais usadas no `),jc(3433,`code`),iO(3434,`po-table`),wg(),iO(3435,`.`),wg()(),jc(3436,`h4`,13),iO(3437,`Propriedades`),wg(),jc(3438,`table`,14)(3439,`tr`,15)(3440,`th`,16),iO(3441,`Nome`),wg(),jc(3442,`th`,16),iO(3443,`Tipo`),wg(),jc(3444,`th`,16),iO(3445,`Descrição`),wg()(),jc(3446,`tr`,17)(3447,`td`,18)(3448,`div`,19)(3449,`span`,20),iO(3450,` bodyDelete`),nu(3451,`br`),wg()()(),jc(3452,`td`,21)(3453,`code`,31),iO(3454,`string`),wg()(),jc(3455,`td`,24)(3456,`em`)(3457,`strong`),iO(3458,`(opcional)`),wg()(),jc(3459,`p`),iO(3460,`Texto no corpo do Modal de exclusão`),wg()()(),jc(3461,`tr`,17)(3462,`td`,18)(3463,`div`,19)(3464,`span`,20),iO(3465,` cancel`),nu(3466,`br`),wg()()(),jc(3467,`td`,21)(3468,`code`,31),iO(3469,`string`),wg()(),jc(3470,`td`,24)(3471,`em`)(3472,`strong`),iO(3473,`(opcional)`),wg()(),jc(3474,`p`),iO(3475,`Texto no Modal para cancelar a exclusão`),wg()()(),jc(3476,`tr`,17)(3477,`td`,18)(3478,`div`,19)(3479,`span`,20),iO(3480,` columnsManager`),nu(3481,`br`),wg()()(),jc(3482,`td`,21)(3483,`code`,31),iO(3484,`string`),wg()(),jc(3485,`td`,24)(3486,`em`)(3487,`strong`),iO(3488,`(opcional)`),wg()(),jc(3489,`p`),iO(3490,`Texto do `),jc(3491,`strong`),iO(3492,`Gerenciador de colunas`),wg(),iO(3493,` localizado no canto superior direito da tabela.`),wg()()(),jc(3494,`tr`,17)(3495,`td`,18)(3496,`div`,19)(3497,`span`,20),iO(3498,` completeSubtitle`),nu(3499,`br`),wg()()(),jc(3500,`td`,21)(3501,`code`,31),iO(3502,`string`),wg()(),jc(3503,`td`,24)(3504,`em`)(3505,`strong`),iO(3506,`(opcional)`),wg()(),jc(3507,`p`),iO(3508,`Título da modal 'Legenda completa' que aparece ao clicar no botão 'Ver legenda completa'.`),wg()()(),jc(3509,`tr`,17)(3510,`td`,18)(3511,`div`,19)(3512,`span`,20),iO(3513,` delete`),nu(3514,`br`),wg()()(),jc(3515,`td`,21)(3516,`code`,31),iO(3517,`string`),wg()(),jc(3518,`td`,24)(3519,`em`)(3520,`strong`),iO(3521,`(opcional)`),wg()(),jc(3522,`p`),iO(3523,`Texto no Modal para confirmar a exclusão`),wg()()(),jc(3524,`tr`,17)(3525,`td`,18)(3526,`div`,19)(3527,`span`,20),iO(3528,` deleteApiError`),nu(3529,`br`),wg()()(),jc(3530,`td`,21)(3531,`code`,31),iO(3532,`string`),wg()(),jc(3533,`td`,24)(3534,`em`)(3535,`strong`),iO(3536,`(opcional)`),wg()(),jc(3537,`p`),iO(3538,`Texto de notificação de erro na requisição Delete`),wg()()(),jc(3539,`tr`,17)(3540,`td`,18)(3541,`div`,19)(3542,`span`,20),iO(3543,` deleteSuccessful`),nu(3544,`br`),wg()()(),jc(3545,`td`,21)(3546,`code`,31),iO(3547,`string`),wg()(),jc(3548,`td`,24)(3549,`em`)(3550,`strong`),iO(3551,`(opcional)`),wg()(),jc(3552,`p`),iO(3553,`Texto de notificação de remoção com sucesso`),wg()()(),jc(3554,`tr`,17)(3555,`td`,18)(3556,`div`,19)(3557,`span`,20),iO(3558,` loadMoreData`),nu(3559,`br`),wg()()(),jc(3560,`td`,21)(3561,`code`,31),iO(3562,`string`),wg()(),jc(3563,`td`,24)(3564,`em`)(3565,`strong`),iO(3566,`(opcional)`),wg()(),jc(3567,`p`),iO(3568,`Texto do botão de `),jc(3569,`strong`),iO(3570,`Carregar mais resultados`),wg(),iO(3571,` localizado no rodapé da tabela.`),wg()()(),jc(3572,`tr`,17)(3573,`td`,18)(3574,`div`,19)(3575,`span`,20),iO(3576,` loadingData`),nu(3577,`br`),wg()()(),jc(3578,`td`,21)(3579,`code`,31),iO(3580,`string`),wg()(),jc(3581,`td`,24)(3582,`em`)(3583,`strong`),iO(3584,`(opcional)`),wg()(),jc(3585,`p`),iO(3586,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),wg()()(),jc(3587,`tr`,17)(3588,`td`,18)(3589,`div`,19)(3590,`span`,20),iO(3591,` multipleItems`),nu(3592,`br`),wg()()(),jc(3593,`td`,21)(3594,`code`,31),iO(3595,`string`),wg()(),jc(3596,`td`,24)(3597,`em`)(3598,`strong`),iO(3599,`(opcional)`),wg()(),jc(3600,`p`),iO(3601,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),wg()()(),jc(3602,`tr`,17)(3603,`td`,18)(3604,`div`,19)(3605,`span`,20),iO(3606,` noColumns`),nu(3607,`br`),wg()()(),jc(3608,`td`,21)(3609,`code`,31),iO(3610,`string`),wg()(),jc(3611,`td`,24)(3612,`em`)(3613,`strong`),iO(3614,`(opcional)`),wg()(),jc(3615,`p`),iO(3616,`Texto exibido quando não existem colunas definidas para a tabela.`),wg()()(),jc(3617,`tr`,17)(3618,`td`,18)(3619,`div`,19)(3620,`span`,20),iO(3621,` noData`),nu(3622,`br`),wg()()(),jc(3623,`td`,21)(3624,`code`,31),iO(3625,`string`),wg()(),jc(3626,`td`,24)(3627,`em`)(3628,`strong`),iO(3629,`(opcional)`),wg()(),jc(3630,`p`),iO(3631,`Texto exibido quando não existem itens para serem exibidos na tabela.`),wg()()(),jc(3632,`tr`,17)(3633,`td`,18)(3634,`div`,19)(3635,`span`,20),iO(3636,` noItem`),nu(3637,`br`),wg()()(),jc(3638,`td`,21)(3639,`code`,31),iO(3640,`string`),wg()(),jc(3641,`td`,24)(3642,`em`)(3643,`strong`),iO(3644,`(opcional)`),wg()(),jc(3645,`p`),iO(3646,`Texto exibido quando nenhum item for selecionado no checkbox.`),wg()()(),jc(3647,`tr`,17)(3648,`td`,18)(3649,`div`,19)(3650,`span`,20),iO(3651,` noVisibleColumn`),nu(3652,`br`),wg()()(),jc(3653,`td`,21)(3654,`code`,31),iO(3655,`string`),wg()(),jc(3656,`td`,24)(3657,`em`)(3658,`strong`),iO(3659,`(opcional)`),wg()(),jc(3660,`p`),iO(3661,`Texto exibido quando não existem colunas visíveis para a tabela.`),wg()()(),jc(3662,`tr`,17)(3663,`td`,18)(3664,`div`,19)(3665,`span`,20),iO(3666,` oneItem`),nu(3667,`br`),wg()()(),jc(3668,`td`,21)(3669,`code`,31),iO(3670,`string`),wg()(),jc(3671,`td`,24)(3672,`em`)(3673,`strong`),iO(3674,`(opcional)`),wg()(),jc(3675,`p`),iO(3676,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),wg()()(),jc(3677,`tr`,17)(3678,`td`,18)(3679,`div`,19)(3680,`span`,20),iO(3681,` searchAiPlaceholder`),nu(3682,`br`),wg()()(),jc(3683,`td`,21)(3684,`code`,31),iO(3685,`string`),wg()(),jc(3686,`td`,24)(3687,`em`)(3688,`strong`),iO(3689,`(opcional)`),wg()(),jc(3690,`p`),iO(3691,`Texto exibido como placeholder padrão no campo de busca por IA (`),jc(3692,`code`),iO(3693,`p-search-ai-field`),wg(),iO(3694,`) quando nenhum `),jc(3695,`code`),iO(3696,`placeholder`),wg(),iO(3697,` é informado.`),wg()()(),jc(3698,`tr`,17)(3699,`td`,18)(3700,`div`,19)(3701,`span`,20),iO(3702,` seeCompleteSubtitle`),nu(3703,`br`),wg()()(),jc(3704,`td`,21)(3705,`code`,31),iO(3706,`string`),wg()(),jc(3707,`td`,24)(3708,`em`)(3709,`strong`),iO(3710,`(opcional)`),wg()(),jc(3711,`p`),iO(3712,`Texto do botão `),jc(3713,`strong`),iO(3714,`Ver legenda completa`),wg(),iO(3715,` que aparece quando o rodapé de legendas é maior que a tabela.`),wg()()()(),jc(3716,`h4`,46)(3717,`code`,5),iO(3718,`PoTableSearchAiField`),wg()(),jc(3719,`div`,2)(3720,`p`),iO(3721,`Interface de configuração da busca por IA integrada ao `),jc(3722,`code`),iO(3723,`po-table`),wg(),iO(3724,`, utilizada pela
propriedade `),jc(3725,`code`),iO(3726,`p-search-ai-field`),wg(),iO(3727,`.`),wg(),jc(3728,`p`),iO(3729,`Quando configurada, a tabela renderiza um campo `),jc(3730,`code`),iO(3731,`po-search-ai`),wg(),iO(3732,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),jc(3733,`code`),iO(3734,`po-search`),wg(),iO(3735,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),jc(3736,`code`),iO(3737,`apply`),wg(),iO(3738,`.`),wg(),jc(3739,`h4`),iO(3740,`Endpoint de IA (`),jc(3741,`code`),iO(3742,`url`),wg(),iO(3743,`)`),wg(),jc(3744,`p`),iO(3745,`O campo `),jc(3746,`code`),iO(3747,`url`),wg(),iO(3748,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),jc(3749,`code`),iO(3750,`po-search-ai`),wg(),iO(3751,`: recebe `),jc(3752,`code`),iO(3753,`{ query, columns }`),wg(),iO(3754,` via `),jc(3755,`code`),iO(3756,`POST`),wg(),iO(3757,` e responde com
`),jc(3758,`code`),iO(3759,`{ filter, description, confidence }`),wg(),iO(3760,`.`),wg(),jc(3761,`blockquote`)(3762,`p`),iO(3763,`A integração com a LLM e a guarda de chaves devem ocorrer `),jc(3764,`strong`),iO(3765,`no backend`),wg(),iO(3766,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),jc(3767,`a`,40)(3768,`code`),iO(3769,`po-sample-api`),wg()(),iO(3770,`.`),wg()(),jc(3771,`h4`),iO(3772,`Colunas enviadas à IA`),wg(),jc(3773,`p`),iO(3774,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),jc(3775,`code`),iO(3776,`p-columns`),wg(),iO(3777,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),jc(3778,`code`),iO(3779,`searchAiIgnore: true`),wg(),iO(3780,`. O campo `),jc(3781,`code`),iO(3782,`columns`),wg(),iO(3783,` permite sobrescrever esse comportamento.`),wg(),jc(3784,`h4`),iO(3785,`Estratégia de aplicação do filtro (`),jc(3786,`code`),iO(3787,`apply`),wg(),iO(3788,`)`),wg(),jc(3789,`table`)(3790,`thead`)(3791,`tr`)(3792,`th`),iO(3793,`Valor`),wg(),jc(3794,`th`),iO(3795,`Comportamento`),wg()()(),jc(3796,`tbody`)(3797,`tr`)(3798,`td`)(3799,`code`),iO(3800,`'auto'`),wg(),iO(3801,` (padrão)`),wg(),jc(3802,`td`),iO(3803,`Modo serviço: envia `),jc(3804,`code`),iO(3805,`$filter`),wg(),iO(3806,` ao `),jc(3807,`code`),iO(3808,`p-service-api`),wg(),iO(3809,`; modo local: aplica o parser OData interno sobre `),jc(3810,`code`),iO(3811,`p-items`),wg(),iO(3812,`.`),wg()(),jc(3813,`tr`)(3814,`td`)(3815,`code`),iO(3816,`'parser'`),wg()(),jc(3817,`td`),iO(3818,`Sempre usa o parser OData interno. No modo serviço, busca todos os dados e filtra localmente.`),wg()(),jc(3819,`tr`)(3820,`td`)(3821,`code`),iO(3822,`'server'`),wg()(),jc(3823,`td`),iO(3824,`Sempre delega o filtro ao `),jc(3825,`code`),iO(3826,`p-service-api`),wg(),iO(3827,` via `),jc(3828,`code`),iO(3829,`$filter`),wg(),iO(3830,`.`),wg()(),jc(3831,`tr`)(3832,`td`)(3833,`code`),iO(3834,`'none'`),wg()(),jc(3835,`td`),iO(3836,`Não aplica o filtro; apenas emite `),jc(3837,`code`),iO(3838,`p-search-ai-result`),wg(),iO(3839,` para o desenvolvedor tratar.`),wg()(),jc(3840,`tr`)(3841,`td`)(3842,`code`),iO(3843,`(result) => void`),wg()(),jc(3844,`td`),iO(3845,`Override total: o desenvolvedor recebe o resultado e assume o controle.`),wg()()()()(),jc(3846,`h4`,13),iO(3847,`Propriedades`),wg(),jc(3848,`table`,14)(3849,`tr`,15)(3850,`th`,16),iO(3851,`Nome`),wg(),jc(3852,`th`,16),iO(3853,`Tipo`),wg(),jc(3854,`th`,16),iO(3855,`Descrição`),wg()(),jc(3856,`tr`,17)(3857,`td`,18)(3858,`div`,19)(3859,`span`,20),iO(3860,` apply`),nu(3861,`br`),wg()()(),jc(3862,`td`,21)(3863,`code`,107),iO(3864,`'auto' `),wg(),jc(3865,`code`,108),iO(3866,` 'parser' `),wg(),jc(3867,`code`,109),iO(3868,` 'server' `),wg(),jc(3869,`code`,110),iO(3870,` 'none' `),wg(),jc(3871,`code`,111),iO(3872,` ((result: PoSearchAiResult) => void)`),wg()(),jc(3873,`td`,24)(3874,`em`)(3875,`strong`),iO(3876,`(opcional)`),wg()(),jc(3877,`p`),iO(3878,`Define como o filtro OData retornado pela IA é aplicado à tabela.`),wg(),jc(3879,`ul`)(3880,`li`)(3881,`code`),iO(3882,`'auto'`),wg(),jc(3883,`em`),iO(3884,`(padrão)`),wg(),iO(3885,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),jc(3886,`code`),iO(3887,`$filter`),wg(),iO(3888,` ao `),jc(3889,`code`),iO(3890,`p-service-api`),wg(),iO(3891,`; modo local usa o parser
OData interno sobre `),jc(3892,`code`),iO(3893,`p-items`),wg(),iO(3894,`.`),wg(),jc(3895,`li`)(3896,`code`),iO(3897,`'parser'`),wg(),iO(3898,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),wg(),jc(3899,`li`)(3900,`code`),iO(3901,`'server'`),wg(),iO(3902,`: sempre envia `),jc(3903,`code`),iO(3904,`$filter`),wg(),iO(3905,` ao `),jc(3906,`code`),iO(3907,`p-service-api`),wg(),iO(3908,`, independentemente
do modo da tabela.`),wg(),jc(3909,`li`)(3910,`code`),iO(3911,`'none'`),wg(),iO(3912,`: não aplica o filtro; apenas emite `),jc(3913,`code`),iO(3914,`p-search-ai-result`),wg(),iO(3915,`.`),wg(),jc(3916,`li`)(3917,`code`),iO(3918,`(result: PoSearchAiResult) => void`),wg(),iO(3919,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),wg()()()(),jc(3920,`tr`,17)(3921,`td`,18)(3922,`div`,19)(3923,`span`,20),iO(3924,` columns`),nu(3925,`br`),wg()()(),jc(3926,`td`,21)(3927,`code`,112),iO(3928,`Array<PoSearchAiColumn>`),wg()(),jc(3929,`td`,24)(3930,`em`)(3931,`strong`),iO(3932,`(opcional)`),wg()(),jc(3933,`p`),iO(3934,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),jc(3935,`code`),iO(3936,`p-columns`),wg(),iO(3937,` da tabela, excluindo colunas com
`),jc(3938,`code`),iO(3939,`visible: false`),wg(),iO(3940,` ou `),jc(3941,`code`),iO(3942,`searchAiIgnore: true`),wg(),iO(3943,`.`),wg()()(),jc(3944,`tr`,17)(3945,`td`,18)(3946,`div`,19)(3947,`span`,20),iO(3948,` literals`),nu(3949,`br`),wg()()(),jc(3950,`td`,21)(3951,`code`,113),iO(3952,`PoSearchAiLiterals`),wg()(),jc(3953,`td`,24)(3954,`em`)(3955,`strong`),iO(3956,`(opcional)`),wg()(),jc(3957,`p`),iO(3958,`Objeto com os literais usados pelo `),jc(3959,`code`),iO(3960,`po-search-ai`),wg(),iO(3961,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),wg()()(),jc(3962,`tr`,17)(3963,`td`,18)(3964,`div`,19)(3965,`span`,20),iO(3966,` minConfidence`),nu(3967,`br`),wg()()(),jc(3968,`td`,21)(3969,`code`,35),iO(3970,`number`),wg()(),jc(3971,`td`,24)(3972,`em`)(3973,`strong`),iO(3974,`(opcional)`),wg()(),jc(3975,`p`),iO(3976,`Nível mínimo de confiança (`),jc(3977,`code`),iO(3978,`0.0`),wg(),iO(3979,` a `),jc(3980,`code`),iO(3981,`1.0`),wg(),iO(3982,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),jc(3983,`code`),iO(3984,`p-search-ai-low-confidence`),wg(),iO(3985,` é emitido em vez de `),jc(3986,`code`),iO(3987,`p-search-ai-result`),wg(),iO(3988,`.`),wg()()(),jc(3989,`tr`,17)(3990,`td`,18)(3991,`div`,19)(3992,`span`,20),iO(3993,` placeholder`),nu(3994,`br`),wg()()(),jc(3995,`td`,21)(3996,`code`,31),iO(3997,`string`),wg()(),jc(3998,`td`,24)(3999,`em`)(4e3,`strong`),iO(4001,`(opcional)`),wg()(),jc(4002,`p`),iO(4003,`Texto exibido como placeholder no campo de busca por IA.`),wg()()(),jc(4004,`tr`,17)(4005,`td`,18)(4006,`div`,19)(4007,`span`,20),iO(4008,` timeout`),nu(4009,`br`),wg()()(),jc(4010,`td`,21)(4011,`code`,35),iO(4012,`number`),wg()(),jc(4013,`td`,24)(4014,`em`)(4015,`strong`),iO(4016,`(opcional)`),wg()(),jc(4017,`p`),iO(4018,`Tempo máximo de espera (em milissegundos) pela resposta do endpoint de IA.`),wg()()(),jc(4019,`tr`,17)(4020,`td`,18)(4021,`div`,19)(4022,`span`,20),iO(4023,` url`),nu(4024,`br`),wg()()(),jc(4025,`td`,21)(4026,`code`,31),iO(4027,`string`),wg()(),jc(4028,`td`,24)(4029,`p`),iO(4030,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),jc(4031,`code`),iO(4032,`po-search-ai`),wg(),iO(4033,` via `),jc(4034,`code`),iO(4035,`p-url`),wg(),iO(4036,`.`),wg(),jc(4037,`p`),iO(4038,`O endpoint deve seguir o contrato do backend de referência (`),jc(4039,`code`),iO(4040,`po-sample-api`),wg(),iO(4041,`):`),wg(),jc(4042,`ul`)(4043,`li`),iO(4044,`Recebe: `),jc(4045,`code`),iO(4046,`POST { query: string, columns: PoSearchAiColumn[] }`),wg()(),jc(4047,`li`),iO(4048,`Responde: `),jc(4049,`code`),iO(4050,`{ filter: string, description: string, confidence: number }`),wg()()()()()(),jc(4051,`h4`,46)(4052,`code`,5),iO(4053,`PoTableColumnIcon`),wg()(),jc(4054,`div`,2)(4055,`p`),nu(4056,`a`,114),wg(),jc(4057,`p`),iO(4058,`Interface que define a coluna com ícone(s) do `),jc(4059,`code`),iO(4060,`po-table`),wg(),iO(4061,`.`),wg()(),jc(4062,`h4`,13),iO(4063,`Propriedades`),wg(),jc(4064,`table`,14)(4065,`tr`,15)(4066,`th`,16),iO(4067,`Nome`),wg(),jc(4068,`th`,16),iO(4069,`Tipo`),wg(),jc(4070,`th`,16),iO(4071,`Descrição`),wg()(),jc(4072,`tr`,17)(4073,`td`,18)(4074,`div`,19)(4075,`span`,20),iO(4076,` action`),nu(4077,`br`),wg()()(),jc(4078,`td`,21)(4079,`code`,47),iO(4080,`Function`),wg()(),jc(4081,`td`,24)(4082,`em`)(4083,`strong`),iO(4084,`(opcional)`),wg()(),jc(4085,`p`),iO(4086,`Define a ação que será executada ao clicar no ícone.`),wg()()(),jc(4087,`tr`,17)(4088,`td`,18)(4089,`div`,19)(4090,`span`,20),iO(4091,` color`),nu(4092,`br`),wg()()(),jc(4093,`td`,21)(4094,`code`,31),iO(4095,`string `),wg(),jc(4096,`code`,47),iO(4097,` Function`),wg()(),jc(4098,`td`,24)(4099,`em`)(4100,`strong`),iO(4101,`(opcional)`),wg()(),jc(4102,`p`),iO(4103,`Define a cor do ícone.`),wg(),jc(4104,`p`),iO(4105,`Valores válidos:`),wg(),jc(4106,`ul`)(4107,`li`),nu(4108,`span`,54),jc(4109,`code`),iO(4110,`color-01`),wg()(),jc(4111,`li`),nu(4112,`span`,55),jc(4113,`code`),iO(4114,`color-02`),wg()(),jc(4115,`li`),nu(4116,`span`,56),jc(4117,`code`),iO(4118,`color-03`),wg()(),jc(4119,`li`),nu(4120,`span`,57),jc(4121,`code`),iO(4122,`color-04`),wg()(),jc(4123,`li`),nu(4124,`span`,58),jc(4125,`code`),iO(4126,`color-05`),wg()(),jc(4127,`li`),nu(4128,`span`,59),jc(4129,`code`),iO(4130,`color-06`),wg()(),jc(4131,`li`),nu(4132,`span`,60),jc(4133,`code`),iO(4134,`color-07`),wg()(),jc(4135,`li`),nu(4136,`span`,61),jc(4137,`code`),iO(4138,`color-08`),wg()(),jc(4139,`li`),nu(4140,`span`,62),jc(4141,`code`),iO(4142,`color-09`),wg()(),jc(4143,`li`),nu(4144,`span`,63),jc(4145,`code`),iO(4146,`color-10`),wg()(),jc(4147,`li`),nu(4148,`span`,64),jc(4149,`code`),iO(4150,`color-11`),wg()(),jc(4151,`li`),nu(4152,`span`,65),jc(4153,`code`),iO(4154,`color-12`),wg()()(),jc(4155,`blockquote`)(4156,`p`),iO(4157,`Também é possível utilizar as 35 cores da paleta `),jc(4158,`strong`),iO(4159,`Caption Tag Colors`),wg(),iO(4160,`:`),wg()(),jc(4161,`ul`)(4162,`li`),nu(4163,`span`,66),jc(4164,`code`),iO(4165,`caption-tag-01`),wg(),nu(4166,`span`,67),jc(4167,`code`),iO(4168,`caption-tag-02`),wg(),nu(4169,`span`,68),jc(4170,`code`),iO(4171,`caption-tag-03`),wg(),nu(4172,`span`,69),jc(4173,`code`),iO(4174,`caption-tag-04`),wg(),nu(4175,`span`,70),jc(4176,`code`),iO(4177,`caption-tag-05`),wg()(),jc(4178,`li`),nu(4179,`span`,71),jc(4180,`code`),iO(4181,`caption-tag-06`),wg(),nu(4182,`span`,72),jc(4183,`code`),iO(4184,`caption-tag-07`),wg(),nu(4185,`span`,73),jc(4186,`code`),iO(4187,`caption-tag-08`),wg(),nu(4188,`span`,74),jc(4189,`code`),iO(4190,`caption-tag-09`),wg(),nu(4191,`span`,75),jc(4192,`code`),iO(4193,`caption-tag-10`),wg()(),jc(4194,`li`),nu(4195,`span`,76),jc(4196,`code`),iO(4197,`caption-tag-11`),wg(),nu(4198,`span`,77),jc(4199,`code`),iO(4200,`caption-tag-12`),wg(),nu(4201,`span`,78),jc(4202,`code`),iO(4203,`caption-tag-13`),wg(),nu(4204,`span`,79),jc(4205,`code`),iO(4206,`caption-tag-14`),wg(),nu(4207,`span`,80),jc(4208,`code`),iO(4209,`caption-tag-15`),wg()(),jc(4210,`li`),nu(4211,`span`,81),jc(4212,`code`),iO(4213,`caption-tag-16`),wg(),nu(4214,`span`,82),jc(4215,`code`),iO(4216,`caption-tag-17`),wg(),nu(4217,`span`,83),jc(4218,`code`),iO(4219,`caption-tag-18`),wg(),nu(4220,`span`,84),jc(4221,`code`),iO(4222,`caption-tag-19`),wg(),nu(4223,`span`,85),jc(4224,`code`),iO(4225,`caption-tag-20`),wg()(),jc(4226,`li`),nu(4227,`span`,86),jc(4228,`code`),iO(4229,`caption-tag-21`),wg(),nu(4230,`span`,87),jc(4231,`code`),iO(4232,`caption-tag-22`),wg(),nu(4233,`span`,88),jc(4234,`code`),iO(4235,`caption-tag-23`),wg(),nu(4236,`span`,89),jc(4237,`code`),iO(4238,`caption-tag-24`),wg(),nu(4239,`span`,90),jc(4240,`code`),iO(4241,`caption-tag-25`),wg()(),jc(4242,`li`),nu(4243,`span`,91),jc(4244,`code`),iO(4245,`caption-tag-26`),wg(),nu(4246,`span`,92),jc(4247,`code`),iO(4248,`caption-tag-27`),wg(),nu(4249,`span`,93),jc(4250,`code`),iO(4251,`caption-tag-28`),wg(),nu(4252,`span`,94),jc(4253,`code`),iO(4254,`caption-tag-29`),wg(),nu(4255,`span`,95),jc(4256,`code`),iO(4257,`caption-tag-30`),wg()(),jc(4258,`li`),nu(4259,`span`,96),jc(4260,`code`),iO(4261,`caption-tag-31`),wg(),nu(4262,`span`,97),jc(4263,`code`),iO(4264,`caption-tag-32`),wg(),nu(4265,`span`,98),jc(4266,`code`),iO(4267,`caption-tag-33`),wg(),nu(4268,`span`,99),jc(4269,`code`),iO(4270,`caption-tag-34`),wg(),nu(4271,`span`,100),jc(4272,`code`),iO(4273,`caption-tag-35`),wg()()()()(),jc(4274,`tr`,17)(4275,`td`,18)(4276,`div`,19)(4277,`span`,20),iO(4278,` disabled`),nu(4279,`br`),wg()()(),jc(4280,`td`,21)(4281,`code`,47),iO(4282,`Function`),wg()(),jc(4283,`td`,24)(4284,`em`)(4285,`strong`),iO(4286,`(opcional)`),wg()(),jc(4287,`p`),iO(4288,`Função que deve retornar um booleano para habilitar ou desabilitar o ícone e sua ação.`),wg()()(),jc(4289,`tr`,17)(4290,`td`,18)(4291,`div`,19)(4292,`span`,20),iO(4293,` icon`),nu(4294,`br`),wg()()(),jc(4295,`td`,21)(4296,`code`,31),iO(4297,`string `),wg(),jc(4298,`code`,48),iO(4299,` TemplateRef<void>`),wg()(),jc(4300,`td`,24)(4301,`em`)(4302,`strong`),iO(4303,`(opcional)`),wg()(),jc(4304,`p`),iO(4305,`É possível usar qualquer um dos ícones da `),jc(4306,`a`,26),iO(4307,`Biblioteca de ícones`),wg(),iO(4308,`. conforme exemplo abaixo:`),wg(),jc(4309,`pre`)(4310,`code`),iO(4311,`[ { icon: 'an an-plus' } ]
`),wg()(),jc(4312,`p`),iO(4313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),wg(),jc(4314,`pre`)(4315,`code`),iO(4316,`[ {  icon: 'fas fa-plus' } ]
`),wg()(),jc(4317,`p`),iO(4318,`Outra opção seria a customização do ícone através do `),jc(4319,`code`),iO(4320,`TemplateRef`),wg(),iO(4321,`, conforme exemplo abaixo:
`),jc(4322,`code`),iO(4323,`component.html`),wg(),iO(4324,`:`),wg(),jc(4325,`pre`)(4326,`code`),iO(4327,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),wg()(),jc(4328,`p`)(4329,`code`),iO(4330,`component.ts`),wg(),iO(4331,`:`),wg(),jc(4332,`pre`)(4333,`code`),iO(4334,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),wg()(),jc(4335,`blockquote`)(4336,`p`),iO(4337,`Caso esta propriedade não seja definida, a mesma receberá o valor contido em `),jc(4338,`code`),iO(4339,`value`),wg(),iO(4340,`.`),wg()()()(),jc(4341,`tr`,17)(4342,`td`,18)(4343,`div`,19)(4344,`span`,20),iO(4345,` tooltip`),nu(4346,`br`),wg()()(),jc(4347,`td`,21)(4348,`code`,31),iO(4349,`string`),wg()(),jc(4350,`td`,24)(4351,`em`)(4352,`strong`),iO(4353,`(opcional)`),wg()(),jc(4354,`p`),iO(4355,`Define um texto de ajuda que será exibido ao passar o `),jc(4356,`em`),iO(4357,`mouse`),wg(),iO(4358,` em cima do ícone.`),wg()()(),jc(4359,`tr`,17)(4360,`td`,18)(4361,`div`,19)(4362,`span`,20),iO(4363,` value`),nu(4364,`br`),wg()()(),jc(4365,`td`,21)(4366,`code`,31),iO(4367,`string`),wg()(),jc(4368,`td`,24)(4369,`p`),iO(4370,`Define o valor do ícone que será exibido.`),wg()()()(),jc(4371,`h4`,46)(4372,`code`,5),iO(4373,`PoTableColumnLabel`),wg()(),jc(4374,`div`,2)(4375,`p`),iO(4376,`Interface para configuração das colunas de labels do `),jc(4377,`code`),iO(4378,`po-table`),wg(),iO(4379,`.`),wg()(),jc(4380,`h4`,13),iO(4381,`Propriedades`),wg(),jc(4382,`table`,14)(4383,`tr`,15)(4384,`th`,16),iO(4385,`Nome`),wg(),jc(4386,`th`,16),iO(4387,`Tipo`),wg(),jc(4388,`th`,16),iO(4389,`Descrição`),wg()(),jc(4390,`tr`,17)(4391,`td`,18)(4392,`div`,19)(4393,`span`,20),iO(4394,` color`),nu(4395,`br`),wg()()(),jc(4396,`td`,21)(4397,`code`,31),iO(4398,`string`),wg()(),jc(4399,`td`,24)(4400,`em`)(4401,`strong`),iO(4402,`(opcional)`),wg()(),jc(4403,`p`),iO(4404,`Define a cor do label.`),wg(),jc(4405,`p`),iO(4406,`Valores válidos:`),wg(),jc(4407,`ul`)(4408,`li`),nu(4409,`span`,54),jc(4410,`code`),iO(4411,`color-01`),wg()(),jc(4412,`li`),nu(4413,`span`,55),jc(4414,`code`),iO(4415,`color-02`),wg()(),jc(4416,`li`),nu(4417,`span`,56),jc(4418,`code`),iO(4419,`color-03`),wg()(),jc(4420,`li`),nu(4421,`span`,57),jc(4422,`code`),iO(4423,`color-04`),wg()(),jc(4424,`li`),nu(4425,`span`,58),jc(4426,`code`),iO(4427,`color-05`),wg()(),jc(4428,`li`),nu(4429,`span`,59),jc(4430,`code`),iO(4431,`color-06`),wg()(),jc(4432,`li`),nu(4433,`span`,60),jc(4434,`code`),iO(4435,`color-07`),wg()(),jc(4436,`li`),nu(4437,`span`,61),jc(4438,`code`),iO(4439,`color-08`),wg()(),jc(4440,`li`),nu(4441,`span`,62),jc(4442,`code`),iO(4443,`color-09`),wg()(),jc(4444,`li`),nu(4445,`span`,63),jc(4446,`code`),iO(4447,`color-10`),wg()(),jc(4448,`li`),nu(4449,`span`,64),jc(4450,`code`),iO(4451,`color-11`),wg()(),jc(4452,`li`),nu(4453,`span`,65),jc(4454,`code`),iO(4455,`color-12`),wg()()(),jc(4456,`blockquote`)(4457,`p`),iO(4458,`Também é possível utilizar as 35 cores da paleta `),jc(4459,`strong`),iO(4460,`Caption Tag Colors`),wg(),iO(4461,`:`),wg()(),jc(4462,`ul`)(4463,`li`),nu(4464,`span`,66),jc(4465,`code`),iO(4466,`caption-tag-01`),wg(),nu(4467,`span`,67),jc(4468,`code`),iO(4469,`caption-tag-02`),wg(),nu(4470,`span`,68),jc(4471,`code`),iO(4472,`caption-tag-03`),wg(),nu(4473,`span`,69),jc(4474,`code`),iO(4475,`caption-tag-04`),wg(),nu(4476,`span`,70),jc(4477,`code`),iO(4478,`caption-tag-05`),wg()(),jc(4479,`li`),nu(4480,`span`,71),jc(4481,`code`),iO(4482,`caption-tag-06`),wg(),nu(4483,`span`,72),jc(4484,`code`),iO(4485,`caption-tag-07`),wg(),nu(4486,`span`,73),jc(4487,`code`),iO(4488,`caption-tag-08`),wg(),nu(4489,`span`,74),jc(4490,`code`),iO(4491,`caption-tag-09`),wg(),nu(4492,`span`,75),jc(4493,`code`),iO(4494,`caption-tag-10`),wg()(),jc(4495,`li`),nu(4496,`span`,76),jc(4497,`code`),iO(4498,`caption-tag-11`),wg(),nu(4499,`span`,77),jc(4500,`code`),iO(4501,`caption-tag-12`),wg(),nu(4502,`span`,78),jc(4503,`code`),iO(4504,`caption-tag-13`),wg(),nu(4505,`span`,79),jc(4506,`code`),iO(4507,`caption-tag-14`),wg(),nu(4508,`span`,80),jc(4509,`code`),iO(4510,`caption-tag-15`),wg()(),jc(4511,`li`),nu(4512,`span`,81),jc(4513,`code`),iO(4514,`caption-tag-16`),wg(),nu(4515,`span`,82),jc(4516,`code`),iO(4517,`caption-tag-17`),wg(),nu(4518,`span`,83),jc(4519,`code`),iO(4520,`caption-tag-18`),wg(),nu(4521,`span`,84),jc(4522,`code`),iO(4523,`caption-tag-19`),wg(),nu(4524,`span`,85),jc(4525,`code`),iO(4526,`caption-tag-20`),wg()(),jc(4527,`li`),nu(4528,`span`,86),jc(4529,`code`),iO(4530,`caption-tag-21`),wg(),nu(4531,`span`,87),jc(4532,`code`),iO(4533,`caption-tag-22`),wg(),nu(4534,`span`,88),jc(4535,`code`),iO(4536,`caption-tag-23`),wg(),nu(4537,`span`,89),jc(4538,`code`),iO(4539,`caption-tag-24`),wg(),nu(4540,`span`,90),jc(4541,`code`),iO(4542,`caption-tag-25`),wg()(),jc(4543,`li`),nu(4544,`span`,91),jc(4545,`code`),iO(4546,`caption-tag-26`),wg(),nu(4547,`span`,92),jc(4548,`code`),iO(4549,`caption-tag-27`),wg(),nu(4550,`span`,93),jc(4551,`code`),iO(4552,`caption-tag-28`),wg(),nu(4553,`span`,94),jc(4554,`code`),iO(4555,`caption-tag-29`),wg(),nu(4556,`span`,95),jc(4557,`code`),iO(4558,`caption-tag-30`),wg()(),jc(4559,`li`),nu(4560,`span`,96),jc(4561,`code`),iO(4562,`caption-tag-31`),wg(),nu(4563,`span`,97),jc(4564,`code`),iO(4565,`caption-tag-32`),wg(),nu(4566,`span`,98),jc(4567,`code`),iO(4568,`caption-tag-33`),wg(),nu(4569,`span`,99),jc(4570,`code`),iO(4571,`caption-tag-34`),wg(),nu(4572,`span`,100),jc(4573,`code`),iO(4574,`caption-tag-35`),wg()()(),jc(4575,`p`),iO(4576,`Exemplo de uso:`),wg(),jc(4577,`pre`)(4578,`code`),iO(4579,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),wg()()()(),jc(4580,`tr`,17)(4581,`td`,18)(4582,`div`,19)(4583,`span`,20),iO(4584,` icon`),nu(4585,`br`),wg()()(),jc(4586,`td`,21)(4587,`code`,22),iO(4588,`boolean `),wg(),jc(4589,`code`,31),iO(4590,` string `),wg(),jc(4591,`code`,48),iO(4592,` TemplateRef<void>`),wg()(),jc(4593,`td`,24)(4594,`em`)(4595,`strong`),iO(4596,`(opcional)`),wg()(),jc(4597,`p`),iO(4598,`Define ou ativa um ícone que será exibido ao lado do valor da `),jc(4599,`em`),iO(4600,`tag`),wg(),iO(4601,`.`),wg(),jc(4602,`p`),iO(4603,`Quando `),jc(4604,`code`),iO(4605,`p-type`),wg(),iO(4606,` estiver definida, basta informar um valor igual a `),jc(4607,`code`),iO(4608,`true`),wg(),iO(4609,` para que o ícone seja exibido conforme descrições abaixo:`),wg(),jc(4610,`ul`)(4611,`li`),nu(4612,`span`,115),iO(4613,` - `),jc(4614,`code`),iO(4615,`success`),wg()(),jc(4616,`li`),nu(4617,`span`,116),iO(4618,` - `),jc(4619,`code`),iO(4620,`warning`),wg()(),jc(4621,`li`),nu(4622,`span`,117),iO(4623,` - `),jc(4624,`code`),iO(4625,`danger`),wg()(),jc(4626,`li`),nu(4627,`span`,118),iO(4628,` - `),jc(4629,`code`),iO(4630,`info`),wg()()(),jc(4631,`p`),iO(4632,`Também É possível usar qualquer um dos ícones da `),jc(4633,`a`,26),iO(4634,`Biblioteca de ícones`),wg(),iO(4635,`. conforme exemplo abaixo:`),wg(),jc(4636,`pre`)(4637,`code`),iO(4638,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),wg()(),jc(4639,`p`),iO(4640,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(4641,`em`),iO(4642,`Font Awesome`),wg(),iO(4643,`, da seguinte forma:`),wg(),jc(4644,`pre`)(4645,`code`),iO(4646,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),wg()(),jc(4647,`p`),iO(4648,`Outra opção seria a customização do ícone através do `),jc(4649,`code`),iO(4650,`TemplateRef`),wg(),iO(4651,`, conforme exemplo abaixo:`),wg(),jc(4652,`pre`)(4653,`code`),iO(4654,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(4655,`blockquote`)(4656,`p`),iO(4657,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(4658,`code`),iO(4659,`font-size: inherit`),wg(),iO(4660,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(4661,`tr`,17)(4662,`td`,18)(4663,`div`,19)(4664,`span`,20),iO(4665,` label`),nu(4666,`br`),wg()()(),jc(4667,`td`,21)(4668,`code`,31),iO(4669,`string`),wg()(),jc(4670,`td`,24)(4671,`p`),iO(4672,`Texto que será exibido na coluna.`),wg()()(),jc(4673,`tr`,17)(4674,`td`,18)(4675,`div`,19)(4676,`span`,20),iO(4677,` textColor`),nu(4678,`br`),wg()()(),jc(4679,`td`,21)(4680,`code`,31),iO(4681,`string`),wg()(),jc(4682,`td`,24)(4683,`em`)(4684,`strong`),iO(4685,`(opcional)`),wg()(),jc(4686,`p`),iO(4687,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),wg(),jc(4688,`ul`)(4689,`li`)(4690,`p`),iO(4691,`Hexadeximal, por exemplo `),jc(4692,`code`),iO(4693,`#c64840`),wg(),iO(4694,`;`),wg()(),jc(4695,`li`)(4696,`p`),iO(4697,`RGB, como `),jc(4698,`code`),iO(4699,`rgb(0, 0, 165)`),wg(),iO(4700,`;`),wg()(),jc(4701,`li`)(4702,`p`),iO(4703,`O nome da cor, por exemplo `),jc(4704,`code`),iO(4705,`blue`),wg(),iO(4706,`;`),wg()(),jc(4707,`li`)(4708,`p`),iO(4709,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),wg(),jc(4710,`ul`)(4711,`li`),nu(4712,`span`,54),jc(4713,`code`),iO(4714,`color-01`),wg()(),jc(4715,`li`),nu(4716,`span`,55),jc(4717,`code`),iO(4718,`color-02`),wg()(),jc(4719,`li`),nu(4720,`span`,56),jc(4721,`code`),iO(4722,`color-03`),wg()(),jc(4723,`li`),nu(4724,`span`,57),jc(4725,`code`),iO(4726,`color-04`),wg()(),jc(4727,`li`),nu(4728,`span`,58),jc(4729,`code`),iO(4730,`color-05`),wg()(),jc(4731,`li`),nu(4732,`span`,59),jc(4733,`code`),iO(4734,`color-06`),wg()(),jc(4735,`li`),nu(4736,`span`,60),jc(4737,`code`),iO(4738,`color-07`),wg()(),jc(4739,`li`),nu(4740,`span`,61),jc(4741,`code`),iO(4742,`color-08`),wg()(),jc(4743,`li`),nu(4744,`span`,62),jc(4745,`code`),iO(4746,`color-09`),wg()(),jc(4747,`li`),nu(4748,`span`,63),jc(4749,`code`),iO(4750,`color-10`),wg()(),jc(4751,`li`),nu(4752,`span`,64),jc(4753,`code`),iO(4754,`color-11`),wg()(),jc(4755,`li`),nu(4756,`span`,65),jc(4757,`code`),iO(4758,`color-12`),wg()()()(),jc(4759,`li`)(4760,`p`),iO(4761,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),wg()()(),jc(4762,`blockquote`)(4763,`p`)(4764,`strong`),iO(4765,`Atenção:`),wg(),iO(4766,` A propriedade `),jc(4767,`code`),iO(4768,`p-type`),wg(),iO(4769,` sobrepõe esta definição.`),wg()(),jc(4770,`blockquote`)(4771,`p`)(4772,`strong`),iO(4773,`Atenção:`),wg(),iO(4774,` As cores da paleta `),jc(4775,`strong`),iO(4776,`Caption Tag Colors`),wg(),iO(4777,` (`),jc(4778,`code`),iO(4779,`caption-tag-01`),wg(),iO(4780,` a `),jc(4781,`code`),iO(4782,`caption-tag-35`),wg(),iO(4783,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),wg()()()(),jc(4784,`tr`,17)(4785,`td`,18)(4786,`div`,19)(4787,`span`,20),iO(4788,` tooltip`),nu(4789,`br`),wg()()(),jc(4790,`td`,21)(4791,`code`,31),iO(4792,`string`),wg()(),jc(4793,`td`,24)(4794,`em`)(4795,`strong`),iO(4796,`(opcional)`),wg()(),jc(4797,`p`),iO(4798,`Define um texto de ajuda que será exibido ao passar o `),jc(4799,`em`),iO(4800,`mouse`),wg(),iO(4801,` em cima do `),jc(4802,`em`),iO(4803,`label`),wg(),iO(4804,`.`),wg(),jc(4805,`blockquote`)(4806,`p`),iO(4807,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),wg()()()(),jc(4808,`tr`,17)(4809,`td`,18)(4810,`div`,19)(4811,`span`,20),iO(4812,` type`),nu(4813,`br`),wg()()(),jc(4814,`td`,21)(4815,`code`,119),iO(4816,`PoTagType`),wg()(),jc(4817,`td`,24)(4818,`em`)(4819,`strong`),iO(4820,`(opcional)`),wg()(),jc(4821,`p`),iO(4822,`Define o tipo da `),jc(4823,`em`),iO(4824,`tag`),wg(),iO(4825,`.`),wg(),jc(4826,`p`),iO(4827,`Valores válidos:`),wg(),jc(4828,`ul`)(4829,`li`)(4830,`code`),iO(4831,`success`),wg(),iO(4832,`: cor verde utilizada para simbolizar sucesso ou êxito.`),wg(),jc(4833,`li`)(4834,`code`),iO(4835,`warning`),wg(),iO(4836,`: cor amarela que representa aviso ou advertência.`),wg(),jc(4837,`li`)(4838,`code`),iO(4839,`danger`),wg(),iO(4840,`: cor vermelha para erro ou aviso crítico.`),wg(),jc(4841,`li`)(4842,`code`),iO(4843,`info`),wg(),iO(4844,`: cor cinza escuro que caracteriza conteúdo informativo.`),wg()(),jc(4845,`blockquote`)(4846,`p`),iO(4847,`Quando esta propriedade for definida, irá sobrepor a definição de `),jc(4848,`code`),iO(4849,`p-color`),wg(),iO(4850,` e `),jc(4851,`code`),iO(4852,`p-icon`),wg(),iO(4853,` somente será exibido caso seja `),jc(4854,`code`),iO(4855,`true`),wg(),iO(4856,`.`),wg()()()(),jc(4857,`tr`,17)(4858,`td`,18)(4859,`div`,19)(4860,`span`,20),iO(4861,` value`),nu(4862,`br`),wg()()(),jc(4863,`td`,21)(4864,`code`,31),iO(4865,`string `),wg(),jc(4866,`code`,35),iO(4867,` number`),wg()(),jc(4868,`td`,24)(4869,`p`),iO(4870,`Valor que será usado como referência para exibição do conteúdo na coluna.`),wg()()()(),jc(4871,`h4`,46)(4872,`code`,5),iO(4873,`PoTableDetailColumn`),wg()(),jc(4874,`div`,2)(4875,`p`),iO(4876,`Interface para configuração das colunas do `),jc(4877,`code`),iO(4878,`po-table-detail`),wg(),iO(4879,`.`),wg()(),jc(4880,`h4`,13),iO(4881,`Propriedades`),wg(),jc(4882,`table`,14)(4883,`tr`,15)(4884,`th`,16),iO(4885,`Nome`),wg(),jc(4886,`th`,16),iO(4887,`Tipo`),wg(),jc(4888,`th`,16),iO(4889,`Descrição`),wg()(),jc(4890,`tr`,17)(4891,`td`,18)(4892,`div`,19)(4893,`span`,20),iO(4894,` format`),nu(4895,`br`),wg()()(),jc(4896,`td`,21)(4897,`code`,31),iO(4898,`string`),wg()(),jc(4899,`td`,24)(4900,`em`)(4901,`strong`),iO(4902,`(opcional)`),wg()(),jc(4903,`p`),iO(4904,`Formato de exibição do valor da coluna:`),wg(),jc(4905,`ul`)(4906,`li`)(4907,`p`),iO(4908,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),wg()(),jc(4909,`li`)(4910,`p`),iO(4911,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),wg()(),jc(4912,`li`)(4913,`p`),iO(4914,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),wg()(),jc(4915,`li`)(4916,`p`),iO(4917,`Formato para números (number): aceita um valor seguindo o padrão `),jc(4918,`a`,120)(4919,`strong`),iO(4920,`DecimalPipe`),wg()(),iO(4921,` para formatação, e caso não seja informado, o número será exibido na sua forma original. Exemplo:`),wg(),jc(4922,`ul`)(4923,`li`),iO(4924,`Valor de entrada: `),jc(4925,`code`),iO(4926,`50`),wg(),iO(4927,` e valor para formatação: `),jc(4928,`code`),iO(4929,`'1.2-5'`),wg(),iO(4930,` o resultado será: `),jc(4931,`code`),iO(4932,`50.00`),wg()()()()()()(),jc(4933,`tr`,17)(4934,`td`,18)(4935,`div`,19)(4936,`span`,20),iO(4937,` label`),nu(4938,`br`),wg()()(),jc(4939,`td`,21)(4940,`code`,31),iO(4941,`string`),wg()(),jc(4942,`td`,24)(4943,`em`)(4944,`strong`),iO(4945,`(opcional)`),wg()(),jc(4946,`p`),iO(4947,`Texto para título da coluna.`),wg()()(),jc(4948,`tr`,17)(4949,`td`,18)(4950,`div`,19)(4951,`span`,20),iO(4952,` property`),nu(4953,`br`),wg()()(),jc(4954,`td`,21)(4955,`code`,31),iO(4956,`string`),wg()(),jc(4957,`td`,24)(4958,`em`)(4959,`strong`),iO(4960,`(opcional)`),wg()(),jc(4961,`p`),iO(4962,`Nome identificador da coluna.`),wg()()(),jc(4963,`tr`,17)(4964,`td`,18)(4965,`div`,19)(4966,`span`,20),iO(4967,` type`),nu(4968,`br`),wg()()(),jc(4969,`td`,21)(4970,`code`,31),iO(4971,`string`),wg()(),jc(4972,`td`,24)(4973,`em`)(4974,`strong`),iO(4975,`(opcional)`),wg()(),jc(4976,`p`),iO(4977,`Tipo da coluna.`),wg(),jc(4978,`p`),iO(4979,`Valores válidos:`),wg(),jc(4980,`ul`)(4981,`li`)(4982,`p`)(4983,`code`),iO(4984,`currency`),wg(),iO(4985,`: valores monetários.`),wg()(),jc(4986,`li`)(4987,`p`)(4988,`code`),iO(4989,`date`),wg(),iO(4990,`: valor de datas.`),wg(),jc(4991,`ul`)(4992,`li`),iO(4993,`Aceita os tipos `),jc(4994,`em`),iO(4995,`string`),wg(),iO(4996,` e `),jc(4997,`em`),iO(4998,`Date`),wg(),iO(4999,` padr\xE3o do Javascript,
por exemplo: `),jc(5e3,`code`),iO(5001,`'2017-11-28'`),wg(),iO(5002,` ou `),jc(5003,`code`),iO(5004,`new Date(2017, 10, 28)`),wg(),iO(5005,`.`),wg()()(),jc(5006,`li`)(5007,`p`)(5008,`code`),iO(5009,`time`),wg(),iO(5010,`: valor de horário.`),wg()(),jc(5011,`li`)(5012,`p`)(5013,`code`),iO(5014,`number`),wg(),iO(5015,`: valores numéricos.`),wg()(),jc(5016,`li`)(5017,`p`)(5018,`code`),iO(5019,`dateTime`),wg(),iO(5020,`: valor de data com horário.`),wg(),jc(5021,`ul`)(5022,`li`),iO(5023,`Aceita o tipo `),jc(5024,`em`),iO(5025,`string`),wg(),iO(5026,` no formato `),jc(5027,`strong`),iO(5028,`ISO-8601`),wg(),iO(5029,` extendido `),jc(5030,`strong`),iO(5031,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),wg(),iO(5032,`
e o tipo `),jc(5033,`em`),iO(5034,`Date`),wg(),iO(5035,` padrão do Javascript, por exemplo: `),jc(5036,`code`),iO(5037,`'2017-11-28T00:00:00-02:00'`),wg(),iO(5038,` ou `),jc(5039,`code`),iO(5040,`new Date(2017, 10, 28)`),wg(),iO(5041,`.`),wg(),jc(5042,`li`),iO(5043,`Aceita o tipo `),jc(5044,`em`),iO(5045,`string`),wg(),iO(5046,` nos formatos `),jc(5047,`strong`),iO(5048,`'HH:mm:ss'`),wg(),iO(5049,` ou `),jc(5050,`strong`),iO(5051,`'HH:mm:ss.ffffff'`),wg(),iO(5052,`, por exemplo: `),jc(5053,`code`),iO(5054,`'23:12:45'`),wg(),iO(5055,`.`),wg()()()()()()(),jc(5056,`h4`,46)(5057,`code`,5),iO(5058,`PoTableDetail`),wg()(),jc(5059,`div`,2)(5060,`p`),iO(5061,`Interface para configuração do `),jc(5062,`em`),iO(5063,`detail`),wg(),iO(5064,` do componente `),jc(5065,`code`),iO(5066,`po-table`),wg(),iO(5067,`.`),wg()(),jc(5068,`h4`,13),iO(5069,`Propriedades`),wg(),jc(5070,`table`,14)(5071,`tr`,15)(5072,`th`,16),iO(5073,`Nome`),wg(),jc(5074,`th`,16),iO(5075,`Tipo`),wg(),jc(5076,`th`,16),iO(5077,`Descrição`),wg()(),jc(5078,`tr`,17)(5079,`td`,18)(5080,`div`,19)(5081,`span`,20),iO(5082,` columns`),nu(5083,`br`),wg()()(),jc(5084,`td`,21)(5085,`code`,121),iO(5086,`Array<PoTableDetailColumn>`),wg()(),jc(5087,`td`,24)(5088,`p`),iO(5089,`Define uma lista do tipo `),jc(5090,`code`),iO(5091,`PoTableDetailColumn`),wg(),iO(5092,` para as colunas do objet `),jc(5093,`em`),iO(5094,`detail`),wg(),iO(5095,`. Por exemplo:`),wg(),jc(5096,`pre`)(5097,`code`),iO(5098,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),wg()()()(),jc(5099,`tr`,17)(5100,`td`,18)(5101,`div`,19)(5102,`span`,20),iO(5103,` hideSelect`),nu(5104,`br`),wg()()(),jc(5105,`td`,21)(5106,`code`,22),iO(5107,`boolean`),wg()(),jc(5108,`td`,24)(5109,`em`)(5110,`strong`),iO(5111,`(opcional)`),wg()(),jc(5112,`p`),iO(5113,`Define se o checkbox de seleção do detail será exibido. Valor padrão 'false'.`),wg()()(),jc(5114,`tr`,17)(5115,`td`,18)(5116,`div`,19)(5117,`span`,20),iO(5118,` typeHeader`),nu(5119,`br`),wg()()(),jc(5120,`td`,21)(5121,`code`,31),iO(5122,`string`),wg()(),jc(5123,`td`,24)(5124,`em`)(5125,`strong`),iO(5126,`(opcional)`),wg()(),jc(5127,`p`),iO(5128,`Define o tipo de cabeçalho para o conteúdo do `),jc(5129,`em`),iO(5130,`detail`),wg(),iO(5131,` .`),wg(),jc(5132,`p`),iO(5133,`Valores válidos:`),wg(),jc(5134,`ul`)(5135,`li`)(5136,`code`),iO(5137,`inline`),wg(),iO(5138,`: Atribui o cabeçalho na mesma linha do `),jc(5139,`em`),iO(5140,`detail`),wg(),iO(5141,`.`),wg(),jc(5142,`li`)(5143,`code`),iO(5144,`top`),wg(),iO(5145,`: Atribui o cabeçalho acima do `),jc(5146,`em`),iO(5147,`detail`),wg(),iO(5148,`, idêntico ao `),jc(5149,`code`),iO(5150,`po-table`),wg(),iO(5151,`.`),wg(),jc(5152,`li`)(5153,`code`),iO(5154,`none`),wg(),iO(5155,`: Remove o cabeçalho do `),jc(5156,`em`),iO(5157,`detail`),wg(),iO(5158,`.`),wg()()()()(),jc(5159,`h4`,46)(5160,`code`,5),iO(5161,`PoTableSubtitleColumn`),wg()(),jc(5162,`div`,2)(5163,`p`),iO(5164,`Interface para configuração das colunas de legenda do Po-Table.`),wg()(),jc(5165,`h4`,13),iO(5166,`Propriedades`),wg(),jc(5167,`table`,14)(5168,`tr`,15)(5169,`th`,16),iO(5170,`Nome`),wg(),jc(5171,`th`,16),iO(5172,`Tipo`),wg(),jc(5173,`th`,16),iO(5174,`Descrição`),wg()(),jc(5175,`tr`,17)(5176,`td`,18)(5177,`div`,19)(5178,`span`,20),iO(5179,` color`),nu(5180,`br`),wg()()(),jc(5181,`td`,21)(5182,`code`,31),iO(5183,`string`),wg()(),jc(5184,`td`,24)(5185,`em`)(5186,`strong`),iO(5187,`(opcional)`),wg()(),jc(5188,`p`),iO(5189,`Define a cor do `),jc(5190,`em`),iO(5191,`status`),wg(),iO(5192,`.`),wg(),jc(5193,`p`),iO(5194,`Valores válidos:`),wg(),jc(5195,`ul`)(5196,`li`),nu(5197,`span`,54),jc(5198,`code`),iO(5199,`color-01`),wg()(),jc(5200,`li`),nu(5201,`span`,55),jc(5202,`code`),iO(5203,`color-02`),wg()(),jc(5204,`li`),nu(5205,`span`,56),jc(5206,`code`),iO(5207,`color-03`),wg()(),jc(5208,`li`),nu(5209,`span`,57),jc(5210,`code`),iO(5211,`color-04`),wg()(),jc(5212,`li`),nu(5213,`span`,58),jc(5214,`code`),iO(5215,`color-05`),wg()(),jc(5216,`li`),nu(5217,`span`,59),jc(5218,`code`),iO(5219,`color-06`),wg()(),jc(5220,`li`),nu(5221,`span`,60),jc(5222,`code`),iO(5223,`color-07`),wg()(),jc(5224,`li`),nu(5225,`span`,61),jc(5226,`code`),iO(5227,`color-08`),wg()(),jc(5228,`li`),nu(5229,`span`,62),jc(5230,`code`),iO(5231,`color-09`),wg()(),jc(5232,`li`),nu(5233,`span`,63),jc(5234,`code`),iO(5235,`color-10`),wg()(),jc(5236,`li`),nu(5237,`span`,64),jc(5238,`code`),iO(5239,`color-11`),wg()(),jc(5240,`li`),nu(5241,`span`,65),jc(5242,`code`),iO(5243,`color-12`),wg()()(),jc(5244,`blockquote`)(5245,`p`),iO(5246,`Também é possível utilizar as 35 cores da paleta `),jc(5247,`strong`),iO(5248,`Caption Tag Colors`),wg(),iO(5249,`:`),wg()(),jc(5250,`ul`)(5251,`li`),nu(5252,`span`,66),jc(5253,`code`),iO(5254,`caption-tag-01`),wg(),nu(5255,`span`,67),jc(5256,`code`),iO(5257,`caption-tag-02`),wg(),nu(5258,`span`,68),jc(5259,`code`),iO(5260,`caption-tag-03`),wg(),nu(5261,`span`,69),jc(5262,`code`),iO(5263,`caption-tag-04`),wg(),nu(5264,`span`,70),jc(5265,`code`),iO(5266,`caption-tag-05`),wg()(),jc(5267,`li`),nu(5268,`span`,71),jc(5269,`code`),iO(5270,`caption-tag-06`),wg(),nu(5271,`span`,72),jc(5272,`code`),iO(5273,`caption-tag-07`),wg(),nu(5274,`span`,73),jc(5275,`code`),iO(5276,`caption-tag-08`),wg(),nu(5277,`span`,74),jc(5278,`code`),iO(5279,`caption-tag-09`),wg(),nu(5280,`span`,75),jc(5281,`code`),iO(5282,`caption-tag-10`),wg()(),jc(5283,`li`),nu(5284,`span`,76),jc(5285,`code`),iO(5286,`caption-tag-11`),wg(),nu(5287,`span`,77),jc(5288,`code`),iO(5289,`caption-tag-12`),wg(),nu(5290,`span`,78),jc(5291,`code`),iO(5292,`caption-tag-13`),wg(),nu(5293,`span`,79),jc(5294,`code`),iO(5295,`caption-tag-14`),wg(),nu(5296,`span`,80),jc(5297,`code`),iO(5298,`caption-tag-15`),wg()(),jc(5299,`li`),nu(5300,`span`,81),jc(5301,`code`),iO(5302,`caption-tag-16`),wg(),nu(5303,`span`,82),jc(5304,`code`),iO(5305,`caption-tag-17`),wg(),nu(5306,`span`,83),jc(5307,`code`),iO(5308,`caption-tag-18`),wg(),nu(5309,`span`,84),jc(5310,`code`),iO(5311,`caption-tag-19`),wg(),nu(5312,`span`,85),jc(5313,`code`),iO(5314,`caption-tag-20`),wg()(),jc(5315,`li`),nu(5316,`span`,86),jc(5317,`code`),iO(5318,`caption-tag-21`),wg(),nu(5319,`span`,87),jc(5320,`code`),iO(5321,`caption-tag-22`),wg(),nu(5322,`span`,88),jc(5323,`code`),iO(5324,`caption-tag-23`),wg(),nu(5325,`span`,89),jc(5326,`code`),iO(5327,`caption-tag-24`),wg(),nu(5328,`span`,90),jc(5329,`code`),iO(5330,`caption-tag-25`),wg()(),jc(5331,`li`),nu(5332,`span`,91),jc(5333,`code`),iO(5334,`caption-tag-26`),wg(),nu(5335,`span`,92),jc(5336,`code`),iO(5337,`caption-tag-27`),wg(),nu(5338,`span`,93),jc(5339,`code`),iO(5340,`caption-tag-28`),wg(),nu(5341,`span`,94),jc(5342,`code`),iO(5343,`caption-tag-29`),wg(),nu(5344,`span`,95),jc(5345,`code`),iO(5346,`caption-tag-30`),wg()(),jc(5347,`li`),nu(5348,`span`,96),jc(5349,`code`),iO(5350,`caption-tag-31`),wg(),nu(5351,`span`,97),jc(5352,`code`),iO(5353,`caption-tag-32`),wg(),nu(5354,`span`,98),jc(5355,`code`),iO(5356,`caption-tag-33`),wg(),nu(5357,`span`,99),jc(5358,`code`),iO(5359,`caption-tag-34`),wg(),nu(5360,`span`,100),jc(5361,`code`),iO(5362,`caption-tag-35`),wg()()()()(),jc(5363,`tr`,17)(5364,`td`,18)(5365,`div`,19)(5366,`span`,20),iO(5367,` content`),nu(5368,`br`),wg()()(),jc(5369,`td`,21)(5370,`code`,31),iO(5371,`string`),wg()(),jc(5372,`td`,24)(5373,`p`),iO(5374,`Conteúdo que será exibido na coluna da tabela.`),wg()()(),jc(5375,`tr`,17)(5376,`td`,18)(5377,`div`,19)(5378,`span`,20),iO(5379,` label`),nu(5380,`br`),wg()()(),jc(5381,`td`,21)(5382,`code`,31),iO(5383,`string`),wg()(),jc(5384,`td`,24)(5385,`p`),iO(5386,`Texto que será exibido no rodapé da tabela como legenda.`),wg()()(),jc(5387,`tr`,17)(5388,`td`,18)(5389,`div`,19)(5390,`span`,20),iO(5391,` value`),nu(5392,`br`),wg()()(),jc(5393,`td`,21)(5394,`code`,31),iO(5395,`string `),wg(),jc(5396,`code`,35),iO(5397,` number`),wg()(),jc(5398,`td`,24)(5399,`p`),iO(5400,`Valor que será usado como referência para exibição do conteúdo na coluna.`),wg()()()(),jc(5401,`h3`),iO(5402,`Enums`),wg(),jc(5403,`h4`,4)(5404,`code`,5),iO(5405,`PoTableColumnSortType`),wg()(),jc(5406,`div`,2)(5407,`p`),iO(5408,`Tipos de ordenação das colunas da tabela.`),wg()(),jc(5409,`h4`,13),iO(5410,`Propriedades`),wg(),jc(5411,`table`,14)(5412,`tr`,15)(5413,`th`,16),iO(5414,`Nome`),wg(),jc(5415,`th`,16),iO(5416,`Descrição`),wg()(),jc(5417,`tr`,17)(5418,`td`,18)(5419,`div`,19)(5420,`span`,20),iO(5421,` Ascending`),nu(5422,`br`),wg()()(),jc(5423,`td`,24)(5424,`p`),iO(5425,`Ordenação ascendente`),wg()()(),jc(5426,`tr`,17)(5427,`td`,18)(5428,`div`,19)(5429,`span`,20),iO(5430,` Descending`),nu(5431,`br`),wg()()(),jc(5432,`td`,24)(5433,`p`),iO(5434,`Ordenação descendente`),wg()()()(),jc(5435,`h4`,4)(5436,`code`,5),iO(5437,`PoTableColumnSpacing`),wg()(),jc(5438,`div`,2)(5439,`p`),iO(5440,`Tipos de espaçamento interno (padding) das células (`),jc(5441,`strong`),iO(5442,`p-spacing`),wg(),iO(5443,`) do po-table.`),wg()(),jc(5444,`h4`,13),iO(5445,`Propriedades`),wg(),jc(5446,`table`,14)(5447,`tr`,15)(5448,`th`,16),iO(5449,`Nome`),wg(),jc(5450,`th`,16),iO(5451,`Descrição`),wg()(),jc(5452,`tr`,17)(5453,`td`,18)(5454,`div`,19)(5455,`span`,20),iO(5456,` ExtraSmall`),nu(5457,`br`),wg()()(),jc(5458,`td`,24)(5459,`p`),iO(5460,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),wg()()(),jc(5461,`tr`,17)(5462,`td`,18)(5463,`div`,19)(5464,`span`,20),iO(5465,` Small`),nu(5466,`br`),wg()()(),jc(5467,`td`,24)(5468,`p`),iO(5469,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),wg()()(),jc(5470,`tr`,17)(5471,`td`,18)(5472,`div`,19)(5473,`span`,20),iO(5474,` Medium`),nu(5475,`br`),wg()()(),jc(5476,`td`,24)(5477,`p`),iO(5478,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),wg()()(),jc(5479,`tr`,17)(5480,`td`,18)(5481,`div`,19)(5482,`span`,20),iO(5483,` Large`),nu(5484,`br`),wg()()(),jc(5485,`td`,24)(5486,`p`),iO(5487,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return r})();var mn=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(b(ir),b(Sn))};static ɵcmp=Zn({type:r,selectors:[[`ng-component`]],standalone:!1,decls:14,vars:4,consts:[[`p-title`,`Table`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt$1(`p-click`,function(){return a.changeTab(`doc`)}),nu(3,`sample-po-table-doc`),wg(),jc(4,`po-tab`,3),mt$1(`p-click`,function(){return a.changeTab(`web`)}),nu(5,`sample-po-table-basic-view`)(6,`sample-po-table-labs-view`)(7,`sample-po-table-with-api-view`)(8,`sample-po-table-transport-view`)(9,`sample-po-table-airfare-view`)(10,`sample-po-table-components-view`)(11,`sample-po-table-heroes-view`)(12,`sample-po-table-draggable-view`)(13,`sample-po-table-search-ai-view`),wg()()()),l&2&&(jE(`p-actions`,a.actions),rg(2),jE(`p-active`,a.activeTab===`doc`),rg(2),jE(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[Kze,bae,Sae,Je,Ze,et,nt,at,lt,mt,st,ct,ut],encapsulation:2,changeDetection:1})}return r})()}];var bt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[C1.forChild(mn),C1]})}return r})();var xi=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=pe({type:r});static ɵinj=ue({imports:[Ta,bt]})}return r})();export{xi as DocPoTableModule};