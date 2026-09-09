import{n as s,t as r}from"./chunk-zystk1pz.js";import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Cn as vn,Ct as X4,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ir as RN,It as dye,Ji as mY,Jn as Ce,Ki as lo,Li as ht,Lr as RT,Mi as gN,Ni as gY,Nr as PO,Ot as Zt$1,Pi as hN,Qi as pN,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xn as Cx,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,ai as _N,ba as yw,bn as uye,bt as W0e,dr as I,ei as Yl,fi as ag,ga as wx,gi as bL,ha as ww,hi as b,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,mr as JE,nn as j4,nt as O8e,on as mCe,pa as w,q as Mbe,r as Ga,ri as ZO,rr as Ew,sa as ue,sr as Fx,st as R4,ui as a0,un as pf,ut as S8e,va as yY,vi as bx,w as Cu,wn as vr,wr as MN,xa as zO,yi as cN,yn as ube,zr as SN}from"./main-3EWTGE7T.js";var St=()=>({table:`PO Table`,angular:`PO-UI`});var xt=r=>[r];var $e=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-items`]],template:function(l,a){l&1&&Gl(0,`po-table`,0),l&2&&nw(`p-items`,DN(2,xt,_N(1,St)))},dependencies:[X4],encapsulation:2,changeDetection:1})}return r})();var gt=r=>({"docs-sample-code-tabs":r});var Je=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-basic/sample-po-table-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-basic/sample-po-table-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-table-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,gt,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,$e],encapsulation:2,changeDetection:1})}return r})();var Ee=(()=>{class r{colors=[`color-01`,`color-02`,`color-03`,`color-04`,`color-05`,`color-06`,`color-07`,`color-08`,`color-09`,`color-10`,`color-11`,`color-12`,`caption-tag-01`,`caption-tag-03`,`caption-tag-06`,`caption-tag-08`,`caption-tag-11`,`caption-tag-13`,`caption-tag-16`,`caption-tag-18`,`caption-tag-21`,`caption-tag-23`,`caption-tag-26`,`caption-tag-28`,`caption-tag-31`,`caption-tag-33`];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:`https://po-ui.io/`,number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:`Detail Information 1`,date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:`Detail Information 2`,date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:`text`,width:`30%`},number:{property:`number`,type:`number`},date:{property:`date`,type:`date`},time:{property:`time`,type:`time`},dateTime:{property:`dateTime`,label:`DateTime`,type:`dateTime`},currency:{property:`currency`,type:`currency`,format:`USD`},link:{property:`page`,label:`Link`,type:`link`},icon:{property:`icon`,type:`icon`},boolean:{property:`boolean`,type:`boolean`},subtitle:{property:`subtitle`,type:`subtitle`,width:`10%`,subtitles:[{value:`color-01`,color:`color-01`,label:`Color 1`,content:`1`},{value:`color-02`,color:`color-02`,label:`Color 2`,content:`2`},{value:`color-03`,color:`color-03`,label:`Color 3`,content:`3`},{value:`color-04`,color:`color-04`,label:`Color 4`,content:`4`},{value:`color-05`,color:`color-05`,label:`Color 5`,content:`5`},{value:`color-06`,color:`color-06`,label:`Color 6`,content:`6`},{value:`color-07`,color:`color-07`,label:`Color 7`,content:`7`},{value:`color-08`,color:`color-08`,label:`Color 8`,content:`8`},{value:`color-09`,color:`color-09`,label:`Color 9`,content:`9`},{value:`color-10`,color:`color-10`,label:`Color 10`,content:`10`},{value:`color-11`,color:`color-11`,label:`Color 11`,content:`11`},{value:`color-12`,color:`color-12`,label:`Color 12`,content:`12`}]},label:{property:`label`,type:`label`,width:`10%`,labels:[{value:`color-01`,color:`color-01`,label:`Color 1`},{value:`color-02`,color:`color-02`,label:`Color 2`},{value:`color-03`,color:`color-03`,label:`Color 3`},{value:`color-04`,color:`color-04`,label:`Color 4`},{value:`color-05`,color:`color-05`,label:`Color 5`},{value:`color-06`,color:`color-06`,label:`Color 6`},{value:`color-07`,color:`color-07`,label:`Color 7`},{value:`color-08`,color:`color-08`,label:`Color 8`},{value:`color-09`,color:`color-09`,label:`Color 9`},{value:`color-10`,color:`color-10`,label:`Color 10`},{value:`color-11`,color:`color-11`,label:`Color 11`},{value:`color-12`,color:`color-12`,label:`Color 12`},{value:`caption-tag-01`,color:`caption-tag-01`,label:`Caption 01`},{value:`caption-tag-03`,color:`caption-tag-03`,label:`Caption 03`},{value:`caption-tag-06`,color:`caption-tag-06`,label:`Caption 06`},{value:`caption-tag-08`,color:`caption-tag-08`,label:`Caption 08`},{value:`caption-tag-11`,color:`caption-tag-11`,label:`Caption 11`},{value:`caption-tag-13`,color:`caption-tag-13`,label:`Caption 13`},{value:`caption-tag-16`,color:`caption-tag-16`,label:`Caption 16`},{value:`caption-tag-18`,color:`caption-tag-18`,label:`Caption 18`},{value:`caption-tag-21`,color:`caption-tag-21`,label:`Caption 21`},{value:`caption-tag-23`,color:`caption-tag-23`,label:`Caption 23`},{value:`caption-tag-26`,color:`caption-tag-26`,label:`Caption 26`},{value:`caption-tag-28`,color:`caption-tag-28`,label:`Caption 28`},{value:`caption-tag-31`,color:`caption-tag-31`,label:`Caption 31`},{value:`caption-tag-33`,color:`caption-tag-33`,label:`Caption 33`}]},color:{property:`color`,width:`10%`,color:this.changeColor},detail:{property:`detail`,type:`detail`,detail:{columns:[{property:`info`,label:`Detail`},{property:`date`,label:`Detail Date`,type:`date`,format:`dd-MM-yy`},{property:`time`,label:`Detail Time`,type:`time`},{property:`currency`,label:`Detail Currency`,type:`currency`}],typeHeader:`inline`}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?`caption-tag-08`:`caption-tag-13`}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=[`an an-copy`,`an an-check`,`an an-camera`,`an an-plant`,`an an-building-apartment`],a=[`an an-trash`,`an an-newspaper`,`an an-gas-pump`,`an an-chats`,`an an-bluetooth`],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return`${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}:${a<10?`0`+a.toString():a.toString()}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Ke=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:`First Action`};actionTableSecond={action:this.openModal.bind(this),label:`Second Action`};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=[`hideBatchActions`,`hideTableSearch`];selection;spacing=vn.Medium;filterType=Cu.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:`Actions`,value:`actions`},{label:`Disable first action`,value:`disableAction`,disabled:!0},{label:`Single action`,value:`singleAction`},{label:`First action visible`,value:`visibleAction`}];selectionOptions=[{label:`Selectable`,value:`selectable`},{label:`Hide select all`,value:`hideSelectAll`,disabled:!0},{label:`Single select`,value:`singleSelect`,disabled:!0}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];filterModeOptions=[{label:`Starts With`,value:Cu.startsWith},{label:`Contains`,value:Cu.contains},{label:`Ends With`,value:Cu.endsWith}];columnsOptions=[{value:`text`,label:`Text`},{value:`link`,label:`Link`},{value:`number`,label:`Number`},{value:`currency`,label:`Currency`},{value:`date`,label:`Date`},{value:`time`,label:`Time`},{value:`dateTime`,label:`DateTime`},{value:`subtitle`,label:`Subtitle`},{value:`detail`,label:`Detail`},{value:`label`,label:`Label`},{value:`color`,label:`Color`},{value:`icon`,label:`Icon`},{value:`boolean`,label:`Boolean`}];propertiesOptions=[{label:`Sort`,value:`sort`},{label:`Striped`,value:`striped`},{label:`Show more disabled`,value:`showMoreDisabled`},{label:`Loading show more`,value:`loadingShowMore`},{label:`Hide detail`,value:`hideDetail`},{label:`Loading`,value:`loading`},{label:`Auto collapse`,value:`autoCollapse`},{label:`Hide columns manager`,value:`hideColumnsManager`},{label:`Hide batch actions`,value:`hideBatchActions`},{label:`Actions Right`,value:`actionsRight`},{label:`Draggable`,value:`draggable`},{label:`Hide action fixed columns`,value:`fixed`},{label:`Hide Table Search`,value:`hideTableSearch`},{label:`Virtual Scroll`,value:`virtualScroll`}];typeHeaderOptions=[{label:`Inline`,value:`inline`},{label:`None`,value:`none`},{label:`Top`,value:`top`}];typeSpacing=[{label:`ExtraSmall`,value:`extraSmall`},{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes(`singleSelect`),l=this.selection.includes(`selectable`);this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container=``,this.customLiterals=void 0,this.height=void 0,this.componentsSize=`medium`,this.items=[],this.itemIndex=0,this.literals=``,this.maxColumns=void 0,this.properties=[`hideBatchActions`,`hideTableSearch`],this.selection=[],this.spacing=vn.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static ɵfac=function(l){return new(l||r)(w(Ee))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-labs`]],viewQuery:function(l,a){if(l&1&&Yl(vr,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first)}},standalone:!1,features:[Ce([Ee])],decls:34,vars:51,consts:[[`f`,`ngForm`],[3,`p-all-selected`,`p-all-unselected`,`p-change-fixed-columns`,`p-collapsed`,`p-expanded`,`p-selected`,`p-show-more`,`p-unselected`,`p-delete-items`,`p-actions`,`p-actions-right`,`p-columns`,`p-container`,`p-height`,`p-filter-type`,`p-components-size`,`p-hide-detail`,`p-hide-columns-manager`,`p-hide-batch-actions`,`p-hide-table-search`,`p-hide-select-all`,`p-items`,`p-literals`,`p-filtered-columns`,`p-loading`,`p-max-columns`,`p-selectable`,`p-spacing`,`p-loading-show-more`,`p-show-more-disabled`,`p-single-select`,`p-sort`,`p-striped`,`p-virtual-scroll`,`p-auto-collapse`,`p-draggable`,`p-hide-action-fixed-columns`],[1,`po-row`],[`p-label`,`Event`,1,`po-md-12`,3,`p-value`],[`p-label`,`Add Item`,1,`po-md-3`,3,`p-click`],[`name`,`columnsName`,`p-label`,`Columns`,`p-columns`,`4`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-columns`,`3`,`name`,`typeHeader`,`p-label`,`Column detail typeHeader`,1,`po-lg-9`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hideSelect`,`p-label`,`Column detail hideSelect`,1,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,`p-columns`,`4`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`actionsDefinition`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Actions`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`spacing`,`p-columns`,`4`,`p-help`,`Para aplicar o tamanho extraSmall, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,`p-label`,`Spacing`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`selection`,`p-columns`,`4`,`p-help`,`To enable 'hide select all' and 'single select' check 'selectable'.`,`p-label`,`Selection`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas não definidas"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`filteredColumns`,`p-help`,`Ex.: "text, time"`,`p-label`,`Filter Columns`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`height`,`p-clean`,``,`p-help`,`Height of table`,`p-label`,`Height`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxColumns`,`p-clean`,``,`p-help`,`Max columns to be visible`,`p-label`,`Max Columns`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,`p-title`,`PO Table`],[`p-label`,`Chosen Item:`,3,`p-value`]],template:function(l,a){if(l&1){let m=Ax();Tl(0,`po-table`,1),ht(`p-all-selected`,function(){return a.changeEvent(`p-all-selected`)})(`p-all-unselected`,function(){return a.changeEvent(`p-all-unselected`)})(`p-change-fixed-columns`,function(){return a.changeEvent(`p-change-fixed-columns`)})(`p-collapsed`,function(){return a.changeEvent(`p-collapsed`)})(`p-expanded`,function(){return a.changeEvent(`p-expanded`)})(`p-selected`,function(){return a.changeEvent(`p-selected`)})(`p-show-more`,function(){return a.showMore()})(`p-unselected`,function(){return a.changeEvent(`p-unselected`)})(`p-delete-items`,function(s){return a.deleteItems(s)}),ag(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3),ag(),Gl(4,`po-divider`),Tl(5,`div`,2)(6,`po-button`,4),ht(`p-click`,function(){return a.addItem()}),ag()(),Gl(7,`po-divider`),Tl(8,`form`,null,0)(10,`div`,2)(11,`po-checkbox-group`,5),ww(`ngModelChange`,function(s){return Ky(m),uN(a.columnsName,s)||(a.columnsName=s),Xy(s)}),ht(`p-change`,function(){return a.updateColumns()}),ag(),a0(),ag(),Tl(12,`div`,2)(13,`po-radio-group`,6),ww(`ngModelChange`,function(s){return Ky(m),uN(a.columnsDefinition.detail.detail.typeHeader,s)||(a.columnsDefinition.detail.detail.typeHeader=s),Xy(s)}),ag(),a0(),Tl(14,`po-switch`,7),ww(`ngModelChange`,function(s){return Ky(m),uN(a.columnsDefinition.detail.detail.hideSelect,s)||(a.columnsDefinition.detail.detail.hideSelect=s),Xy(s)}),ag(),a0(),ag(),Tl(15,`div`,2)(16,`po-checkbox-group`,8),ww(`ngModelChange`,function(s){return Ky(m),uN(a.properties,s)||(a.properties=s),Xy(s)}),ag(),a0(),ag(),Tl(17,`div`,2)(18,`po-checkbox-group`,9),ww(`ngModelChange`,function(s){return Ky(m),uN(a.actionsDefinition,s)||(a.actionsDefinition=s),Xy(s)}),ht(`p-change`,function(){return a.changeActionOptions()}),ag(),a0(),ag(),Tl(19,`div`,2)(20,`po-radio-group`,10),ww(`ngModelChange`,function(s){return Ky(m),uN(a.spacing,s)||(a.spacing=s),Xy(s)}),ag(),a0(),ag(),Tl(21,`div`,2)(22,`po-checkbox-group`,11),ww(`ngModelChange`,function(s){return Ky(m),uN(a.selection,s)||(a.selection=s),Xy(s)}),ht(`p-change`,function(){return a.changeSelectionOptions()}),ag(),a0(),Tl(23,`po-radio-group`,12),ww(`ngModelChange`,function(s){return Ky(m),uN(a.filterType,s)||(a.filterType=s),Xy(s)}),ag(),a0(),Tl(24,`po-radio-group`,13),ww(`ngModelChange`,function(s){return Ky(m),uN(a.componentsSize,s)||(a.componentsSize=s),Xy(s)}),ag(),a0(),ag(),Tl(25,`div`,2)(26,`po-input`,14),ww(`ngModelChange`,function(s){return Ky(m),uN(a.literals,s)||(a.literals=s),Xy(s)}),ht(`p-change`,function(){return a.changeLiterals()}),ag(),a0(),Tl(27,`po-input`,15),ww(`ngModelChange`,function(s){return Ky(m),uN(a.filteredColumns,s)||(a.filteredColumns=s),Xy(s)}),ht(`p-change`,function(){return a.changeFilteredColumns()}),ag(),a0(),Tl(28,`po-number`,16),ww(`ngModelChange`,function(s){return Ky(m),uN(a.height,s)||(a.height=s),Xy(s)}),ag(),a0(),Tl(29,`po-number`,17),ww(`ngModelChange`,function(s){return Ky(m),uN(a.maxColumns,s)||(a.maxColumns=s),Xy(s)}),ag(),a0(),ag(),Tl(30,`div`,2)(31,`po-button`,18),ht(`p-click`,function(){return a.restore()}),ag()()(),Tl(32,`po-modal`,19),Gl(33,`po-info`,20),ag()}l&2&&(nw(`p-actions`,a.actions)(`p-actions-right`,a.properties.includes(`actionsRight`))(`p-columns`,a.columns)(`p-container`,a.container)(`p-height`,a.height)(`p-filter-type`,a.filterType)(`p-components-size`,a.componentsSize)(`p-hide-detail`,a.properties.includes(`hideDetail`))(`p-hide-columns-manager`,a.properties.includes(`hideColumnsManager`))(`p-hide-batch-actions`,a.properties.includes(`hideBatchActions`))(`p-hide-table-search`,a.properties.includes(`hideTableSearch`))(`p-hide-select-all`,a.selection.includes(`hideSelectAll`))(`p-items`,a.items)(`p-literals`,a.customLiterals)(`p-filtered-columns`,a.filteredColumns)(`p-loading`,a.properties.includes(`loading`))(`p-max-columns`,a.maxColumns)(`p-selectable`,a.selection.includes(`selectable`))(`p-spacing`,a.spacing)(`p-loading-show-more`,a.properties.includes(`loadingShowMore`))(`p-show-more-disabled`,a.properties.includes(`showMoreDisabled`))(`p-single-select`,a.selection.includes(`singleSelect`))(`p-sort`,a.properties.includes(`sort`))(`p-striped`,a.properties.includes(`striped`))(`p-virtual-scroll`,a.properties.includes(`virtualScroll`))(`p-auto-collapse`,a.properties.includes(`autoCollapse`))(`p-draggable`,a.properties.includes(`draggable`))(`p-hide-action-fixed-columns`,a.properties.includes(`fixed`)),jp(3),nw(`p-value`,a.event),jp(8),Ew(`ngModel`,a.columnsName),nw(`p-options`,a.columnsOptions),l0(),jp(2),Ew(`ngModel`,a.columnsDefinition.detail.detail.typeHeader),nw(`p-options`,a.typeHeaderOptions),l0(),jp(),Ew(`ngModel`,a.columnsDefinition.detail.detail.hideSelect),l0(),jp(2),Ew(`ngModel`,a.properties),nw(`p-options`,a.propertiesOptions),l0(),jp(2),Ew(`ngModel`,a.actionsDefinition),nw(`p-options`,a.actionsDefinitionOptions),l0(),jp(2),Ew(`ngModel`,a.spacing),nw(`p-options`,a.typeSpacing),l0(),jp(2),Ew(`ngModel`,a.selection),nw(`p-options`,a.selectionOptions),l0(),jp(),Ew(`ngModel`,a.filterType),nw(`p-options`,a.filterModeOptions),l0(),jp(),Ew(`ngModel`,a.componentsSize),nw(`p-options`,a.componentsSizeOptions),l0(),jp(2),Ew(`ngModel`,a.literals),l0(),jp(),Ew(`ngModel`,a.filteredColumns),l0(),jp(),Ew(`ngModel`,a.height),l0(),jp(),Ew(`ngModel`,a.maxColumns),l0(),jp(4),nw(`p-value`,a.currentItem))},dependencies:[yY,gY,mY,Ak,Tk,Zt$1,Xy$1,N4,iU,ube,L0e,j4,ybe,vr,X4],encapsulation:2,changeDetection:1})}return r})();var Ct=r=>({"docs-sample-code-tabs":r});var Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-labs-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-labs/sample-po-table-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-table
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-labs/sample-po-table-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-table-labs/sample-po-table-labs.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-table-labs`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ct,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ke],encapsulation:2,changeDetection:1})}return r})();var Pt=[`table`];var Ye=(()=>{class r$1{tableComponent;service=``;key;value;sampleService=``;params;filters=[];columns=[{property:`id`},{property:`name`}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=s(r({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static ɵfac=function(l){return new(l||r$1)};static ɵcmp=Un({type:r$1,selectors:[[`sample-po-table-with-api`]],viewQuery:function(l,a){if(l&1&&Yl(Pt,5),l&2){let m;lo(m=uo())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[[`table`,``],[1,`po-row`],[`p-label`,`URL API service`,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Columns`,1,`po-md-12`],[`p-label`,`Columns`,`p-help`,`[{ property: 'name' }]`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-rows`],[`p-label`,`Filters`,1,`po-md-12`],[`p-label`,`Key`,`p-help`,`Object key`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Value`,`p-help`,`Object value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Filter`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-mt-1`,`po-md-12`,3,`p-remove`,`p-remove-all`,`p-disclaimers`],[1,`po-mt-1`,`po-md-12`,3,`p-columns`,`p-service-api`,`p-height`,`p-hide-table-search`,`p-infinite-scroll`]],template:function(l,a){if(l&1){let m=Ax();Tl(0,`div`,1)(1,`po-input`,2),ww(`ngModelChange`,function(s){return Ky(m),uN(a.service,s)||(a.service=s),Xy(s)}),ht(`p-change`,function(){return a.changeService(a.service)}),ag(),a0(),ag(),Tl(2,`div`,1),Gl(3,`po-divider`,3),Tl(4,`po-textarea`,4),ww(`ngModelChange`,function(s){return Ky(m),uN(a.stringColumns,s)||(a.stringColumns=s),Xy(s)}),ht(`p-change`,function(s){return a.onChangeColumns(s)}),ag(),a0(),ag(),Tl(5,`div`,1),Gl(6,`po-divider`,5),Tl(7,`po-input`,6),ww(`ngModelChange`,function(s){return Ky(m),uN(a.key,s)||(a.key=s),Xy(s)}),ag(),a0(),Tl(8,`po-input`,7),ww(`ngModelChange`,function(s){return Ky(m),uN(a.value,s)||(a.value=s),Xy(s)}),ag(),a0(),ag(),Tl(9,`div`,1)(10,`po-button`,8),ht(`p-click`,function(){return a.addFilter(a.key,a.value)}),ag()(),Tl(11,`div`,1)(12,`po-disclaimer-group`,9),ht(`p-remove`,function(s){return a.removeItem(s)})(`p-remove-all`,function(){return a.removeAllItems()}),ag()(),Tl(13,`div`,1),Gl(14,`po-table`,10,0),ag()}l&2&&(jp(),Ew(`ngModel`,a.service),l0(),jp(3),Ew(`ngModel`,a.stringColumns),nw(`p-rows`,5),l0(),jp(3),Ew(`ngModel`,a.key),l0(),jp(),Ew(`ngModel`,a.value),l0(),jp(2),nw(`p-disabled`,!a.key||!a.value),jp(2),nw(`p-disclaimers`,a.filters),jp(2),nw(`p-columns`,a.columns)(`p-service-api`,a.sampleService)(`p-height`,300)(`p-hide-table-search`,!1)(`p-infinite-scroll`,!0))},dependencies:[gY,Ak,Zt$1,R4,Xy$1,iU,vbe,X4],encapsulation:2,changeDetection:1})}return r$1})();var wt=r=>({"docs-sample-code-tabs":r});var et=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-with-api-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table using API`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-with-api/sample-po-table-with-api.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-with-api/sample-po-table-with-api.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-table-with-api`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,wt,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ye],encapsulation:2,changeDetection:1})}return r})();var be=(()=>{class r{getColumns(){return[{property:`code`,type:`number`,width:`8%`},{property:`product`},{property:`customer`},{property:`exit_forecast`,label:`Exit forecast`,type:`dateTime`},{property:`time_since_purchase`,label:`Time since purchase`,type:`time`,visible:!1},{property:`quantity`,label:`Quantity (Tons)`,type:`number`,width:`15%`,visible:!1},{property:`icms`,label:`ICMS`,type:`number`,format:`1.2-5`,visible:!1},{property:`status`,type:`label`,width:`8%`,labels:[{value:`delivered`,color:`caption-tag-23`,label:`Delivered`},{value:`transport`,color:`caption-tag-14`,label:`Transport`},{value:`production`,color:`caption-tag-03`,label:`Production`},{value:`stock`,color:`caption-tag-33`,label:`Stock`,icon:`an an-package`}]}]}getItems(){return[{code:1200,product:`Rice`,customer:`Angeloni`,quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`delivered`,license_plate:`MDJD9191`,batch_product:18041822,driver:`José Oliveira`},{code:1355,product:`Margarine`,customer:`Giassi`,quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`XXA5454`,batch_product:18041821,driver:`Francisco Pereira`},{code:1496,product:`Wheat flour`,customer:`Walmart`,quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`transport`,license_plate:`QEW5779`,batch_product:18041820,driver:`Pedro da Costa`},{code:1712,product:`Milk`,customer:`Carrefour`,quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`WWW1247`,batch_product:18041819,driver:`João da Silva`},{code:1881,product:`Oil`,customer:`Carrefour`,quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`production`,license_plate:`XXI2312`,batch_product:18041825,driver:`Antonio Lima`},{code:1551,product:`Cream cheese`,customer:`Barbosa`,quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:`stock`,license_plate:`XXI2359`,batch_product:18041888,driver:`Vitoria Felix`}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59);return`00:${o<10?`0`+o.toString():o.toString()}:${l<10?`0`+l.toString():l.toString()}`}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function kt(r,W){if(r&1){let o=Ax();Tl(0,`po-widget`,2)(1,`div`,3)(2,`po-select`,4),ww(`ngModelChange`,function(a){let m=Ky(o).$implicit;return uN(m.status,a)||(m.status=a),Xy(a)}),ag(),a0(),ag(),Tl(3,`div`,3),Gl(4,`po-info`,5)(5,`po-info`,6)(6,`po-info`,7),ag()()}if(r&2){let o=W.$implicit,l=Fx();nw(`p-title`,pN(`Transport detail `,o.code)),jp(2),Ew(`ngModel`,o.status),nw(`p-options`,l.statusOptions),l0(),jp(2),nw(`p-value`,o.batch_product),jp(),nw(`p-value`,o.driver),jp(),nw(`p-value`,o.license_plate)}}var tt=(()=>{class r{transportService;columns;items;statusOptions=[{label:`Delivered`,value:`delivered`},{label:`Transport`,value:`transport`},{label:`Production`,value:`production`}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!==`delivered`}static ɵfac=function(l){return new(l||r)(w(be))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-transport`]],standalone:!1,features:[Ce([be])],decls:2,vars:9,consts:[[`p-spacing`,`large`,3,`p-auto-collapse`,`p-columns`,`p-hide-columns-manager`,`p-hide-table-search`,`p-items`,`p-sort`,`p-striped`],[`p-table-row-template`,``,3,`p-table-row-template-arrow-direction`,`p-table-row-template-show`],[3,`p-title`],[1,`po-row`],[`name`,`status`,`p-label`,`Transport status`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Batch of product`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`Driver`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`],[`p-label`,`License plate`,`p-orientation`,`horizontal`,1,`po-md-4`,3,`p-value`]],template:function(l,a){l&1&&(Tl(0,`po-table`,0),JE(1,kt,7,7,`ng-template`,1),ag()),l&2&&(nw(`p-auto-collapse`,!0)(`p-columns`,a.columns)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-sort`,!0)(`p-striped`,!0),jp(),nw(`p-table-row-template-arrow-direction`,`right`)(`p-table-row-template-show`,a.isUndelivered))},dependencies:[gY,Ak,fbe,ybe,X4,uye,O8e],encapsulation:2,changeDetection:1})}return r})();var It=r=>({"docs-sample-code-tabs":r});var nt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-transport-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table - Transport`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-transport/sample-po-table-transport.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-table
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-transport/sample-po-table-transport.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-table-transport/sample-po-table-transport.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-table-transport`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,It,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,tt],encapsulation:2,changeDetection:1})}return r})();var Se=(()=>{class r{getColumns(){return[{property:`status`,type:`label`,labels:[{value:`available`,color:`caption-tag-13`,label:`Available`},{value:`reserved`,color:`caption-tag-08`,label:`Reserved`},{value:`closed`,color:`caption-tag-03`,label:`Closed`}]},{property:`country`},{property:`destination`},{property:`region`,type:`subtitle`,width:`180px`,subtitles:[{value:`Alps`,color:`color-01`,label:`Alps`,content:`AL`},{value:`Australasia`,color:`color-02`,label:`Australasia`,content:`AU`},{value:`British Isle`,color:`color-03`,label:`British Isle`,content:`BI`},{value:`Caucasus`,color:`color-04`,label:`Caucasus`,content:`CA`},{value:`Danube`,color:`color-05`,label:`Danube`,content:`DA`},{value:`East Asia`,color:`color-06`,label:`East Asia`,content:`EA`},{value:`Latin America`,color:`color-07`,label:`Latin America`,content:`LA`},{value:`Mediterranean`,color:`color-08`,label:`Mediterranean`,content:`ME`},{value:`Nordics`,color:`color-09`,label:`Nordics`,content:`NO`},{value:`North America`,color:`color-10`,label:`North America`,content:`NA`},{value:`Southern Africa`,color:`color-11`,label:`Southern Africa`,content:`SA`},{value:`Western Africa`,color:`color-12`,label:`Western Africa`,content:`WA`}]},{property:`date`,type:`date`},{property:`returnDate`,label:`Return Date`,type:`date`},{property:`value`,type:`currency`,format:`USD`},{property:`id`,label:`Flight Number`,type:`number`},{property:`onBoardService`,label:`On Board Service`,type:`boolean`,boolean:{trueLabel:`Yes`,falseLabel:`No`}},{property:`detail`,label:`Details`,type:`detail`,detail:{columns:[{property:`package`},{property:`tour`},{property:`time`,label:`Departure time`,type:`time`,format:`HH:mm`},{property:`distance`,label:`Distance (Miles)`,type:`number`,format:`1.0-5`}],typeHeader:`top`}}]}getItems(){return[{id:11234,initials:`BR`,country:`Brazil`,value:1e3,date:`2018-10-09`,returnDate:`2018-11-01`,class:`Economic`,onBoardService:!1,destination:`Rio de Janeiro`,airline:`Azul`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`20:10:10`,distance:`1000`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`09:15:19`,distance:`2000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`07:10:20`,distance:`3000`}]},{id:22467,initials:`FR`,country:`France`,value:5e3,date:`2019-12-13`,returnDate:`2019-12-31`,class:`Economic`,onBoardService:!1,destination:`Paris`,airline:`British Airways`,status:`closed`,region:`Alps`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`10:15:10`,distance:`4800`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`22:15:10`,distance:`11000`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`10:15:10`,distance:`1000`}]},{id:40670,initials:`SN`,country:`Senegal`,value:3200,date:`2017-11-22`,returnDate:`2018-12-01`,class:`Economic`,onBoardService:!1,destination:`Dakar`,airline:`Iberia`,status:`closed`,region:`Western Africa`},{id:34679,initials:`PT`,country:`Portugal`,value:5500,date:`2017-10-10`,returnDate:`2018-10-20`,class:`Economic`,onBoardService:!1,destination:`Lisbon`,airline:`Air Europa`,status:`closed`,region:`Mediterranean`},{id:48999,initials:`RU`,country:`Russia`,value:6700,date:`2019-01-17`,returnDate:`2019-02-20`,class:`First Class`,onBoardService:!0,destination:`Moscow`,airline:`Lufthansa`,status:`reserved`,region:`Caucasus`},{id:48999,initials:`US`,country:`United States`,value:2700.49,date:`2018-10-17`,returnDate:`2018-10-29`,class:`Economic`,onBoardService:!1,destination:`Los Angeles`,airline:`American Airlines`,status:`reserved`,region:`North America`},{id:54563,initials:`CL`,country:`Chile`,value:2e3,date:`2018-10-20`,returnDate:`2018-11-01`,destination:`Cusco`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`available`,region:`Latin America`},{id:64568,initials:`MX`,country:`Mexico`,value:2100,date:`2018-03-10`,returnDate:`2018-05-09`,destination:`Mexico City`,class:`Economic`,onBoardService:!1,airline:`Aero México`,status:`available`,region:`Latin America`,detail:[{package:`Basic`,tour:`City tour by public bus and visit to the main museums.`,time:`12:10:10`,distance:`2200`},{package:`Intermediary`,tour:`City tour by van and guided visit to the main museums.`,time:`11:10:10`,distance:`1500`},{package:`Complete`,tour:`VIP city tour, music show with dinner and guided tour to the main museums.`,time:`16:10:10`,distance:`1800`}]},{id:75456,initials:`IE`,country:`Ireland`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Cork`,class:`First Class`,onBoardService:!0,airline:`Lufthansa`,status:`reserved`,region:`British Isle`},{id:23445,initials:`ZA`,country:`South Africa`,value:1900,date:`2018-12-10`,returnDate:`2018-12-25`,destination:`Cape Town`,class:`Economic`,onBoardService:!1,airline:`South African Airways`,status:`available`,region:`Southern Africa`},{id:19238,initials:`AU`,country:`Australia`,value:6300,date:`2018-10-14`,returnDate:`2018-10-30`,destination:`Sydney`,class:`First Class`,onBoardService:!0,airline:`Jetstar Airways`,status:`reserved`,region:`Australasia`},{id:85456,initials:`JP`,country:`Japan`,value:5900,date:`2018-10-25`,returnDate:`2018-11-10`,destination:`Tokio`,class:`Executive`,onBoardService:!0,airline:`Japan Airlines`,status:`available`,region:`East Asia`},{id:94565,initials:`CN`,country:`China`,value:2900,date:`2018-10-10`,returnDate:`2018-10-25`,destination:`Beijing`,class:`Economic`,onBoardService:!1,airline:`Malaysia Airlines`,status:`available`,region:`East Asia`},{id:32330,initials:`UK`,country:`England`,value:2090.5,date:`2018-10-07`,returnDate:`2018-11-15`,destination:`London`,class:`Executive`,onBoardService:!0,airline:`British Airways`,status:`available`,region:`British Isle`},{id:14560,initials:`CA`,country:`Canada`,value:2090.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Quebec`,class:`Economic`,onBoardService:!1,airline:`American Airlines`,status:`available`,region:`North America`},{id:93800,initials:`IS`,country:`Iceland`,value:6300,date:`2018-10-12`,returnDate:`2018-10-27`,destination:`Reykjavík`,class:`Economic`,onBoardService:!1,airline:`Star Alliance`,status:`available`,region:`Nordics`},{id:34239,initials:`DE`,country:`Germany`,value:3070.5,date:`2018-10-07`,returnDate:`2018-10-20`,destination:`Berlin`,class:`Executive`,onBoardService:!0,airline:`LATAM`,status:`available`,region:`Danube`},{id:45611,initials:`AR`,country:`Argentina`,value:3500.5,date:`2018-12-07`,returnDate:`2018-12-29`,destination:`Ushuaia`,class:`Economic`,onBoardService:!1,airline:`LATAM`,status:`reserved`,region:`Latin America`}]}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var it=(()=>{class r$2{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:`an an-currency-circle-dollar`,label:`Apply Discount`,disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:`an an-info`,label:`Details`},{action:this.remove.bind(this),icon:`po-icon an an-trash`,label:`Remove`}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem(`initial-columns`)){this.initialColumns=localStorage.getItem(`initial-columns`).split(`,`);let l=[...this.columns.map(a=>s(r({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem(`initial-columns`).split(`,`),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:`Add to cart`,message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case`available`:this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case`reserved`:this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case`closed`:this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=s(r({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem(`initial-columns`,o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static ɵfac=function(l){return new(l||r$2)(w(Se),w(Eu),w(W0e))};static ɵcmp=Un({type:r$2,selectors:[[`sample-po-table-airfare`]],viewQuery:function(l,a){if(l&1&&Yl(vr,7)(X4,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first),lo(m=uo())&&(a.poTable=m.first)}},standalone:!1,features:[Ce([Se,W0e])],decls:16,vars:24,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-collapsed`,`p-expanded`,`p-selected`,`p-unselected`,`p-change-visible-columns`,`p-restore-column-manager`,`p-delete-items`,`p-container`,`p-height`,`p-hide-batch-actions`,`p-hide-table-search`,`p-selectable`,`p-sort`,`p-striped`,`p-actions`,`p-columns`,`p-items`,`p-max-columns`,`p-virtual-scroll`],[`p-label`,`Total Value`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[`p-label`,`Expanded Itens`,`p-orientation`,`horizontal`,1,`po-md-6`,`po-mb-sm-2`,`po-mb-md-2`,`po-lb-lg-2`,3,`p-value`],[1,`po-row`],[`p-icon`,`an an-shopping-cart-simple`,`p-label`,`Add items to cart`,1,`po-md-3`,3,`p-click`],[`p-label`,`Expand all detail`,1,`po-md-3`,3,`p-click`],[`p-label`,`Collapse all detail`,1,`po-md-3`,3,`p-click`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[`p-label`,`Airline`,1,`po-sm-6`,3,`p-value`],[`p-label`,`Initials`,1,`po-sm-2`,3,`p-value`],[`p-label`,`Class`,1,`po-sm-4`,3,`p-value`]],template:function(l,a){l&1&&(Tl(0,`div`,0),cN(1,`Choose one or more promotional airfares`),ag(),Gl(2,`po-divider`),Tl(3,`po-table`,1),ht(`p-collapsed`,function(){return a.onCollapseDetail()})(`p-expanded`,function(){return a.onExpandDetail()})(`p-selected`,function(p){return a.sumTotal(p)})(`p-unselected`,function(p){return a.decreaseTotal(p)})(`p-change-visible-columns`,function(p){return a.changeColumnVisible(p)})(`p-restore-column-manager`,function(){return a.restoreColumn()})(`p-delete-items`,function(p){return a.deleteItems(p)}),ag(),Gl(4,`po-divider`)(5,`po-info`,2),SN(6,`currency`),Gl(7,`po-info`,3),Tl(8,`div`,4)(9,`po-button`,5),ht(`p-click`,function(){return a.addToCart()}),ag(),Tl(10,`po-button`,6),ht(`p-click`,function(){return a.expandAll()}),ag(),Tl(11,`po-button`,7),ht(`p-click`,function(){return a.collapseAll()}),ag()(),Tl(12,`po-modal`,8),Gl(13,`po-info`,9)(14,`po-info`,10)(15,`po-info`,11),ag()),l&2&&(jp(3),nw(`p-container`,!0)(`p-height`,400)(`p-hide-batch-actions`,!1)(`p-hide-table-search`,!1)(`p-selectable`,!0)(`p-sort`,!0)(`p-striped`,!0)(`p-actions`,a.actions)(`p-columns`,a.columns)(`p-items`,a.items)(`p-max-columns`,7)(`p-virtual-scroll`,!1),jp(2),nw(`p-value`,hN(RN(6,21,a.total,`USD`))),jp(2),nw(`p-value`,a.totalExpanded),jp(5),nw(`p-title`,gN(``,a.detail?.destination,` - `,a.detail?.country)),jp(),nw(`p-value`,a.detail?.airline),jp(),nw(`p-value`,a.detail?.initials),jp(),nw(`p-value`,a.detail?.class))},dependencies:[Zt$1,Xy$1,ybe,vr,X4,ZO],encapsulation:2,changeDetection:1})}return r$2})();var Lt=r=>({"docs-sample-code-tabs":r});var at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-airfare-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table - Airfare`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-airfare/sample-po-table-airfare.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-airfare/sample-po-table-airfare.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-table-airfare/sample-po-table-airfare.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-table-airfare`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Lt,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,it],encapsulation:2,changeDetection:1})}return r})();var j=(function(r){return r[r.Stable=0]=`Stable`,r[r.Experimental=1]=`Experimental`,r[r.RoadMap=2]=`RoadMap`,r})(j||{});var xe=(()=>{class r{items=[{component:{favorite:[`favorite`,`documentation`],name:`PO Select`,description:`Display a list of items and allows selection`,link:`/documentation/po-select`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Checkbox`,description:`Group of square buttons that allows multiple items to be selected`,link:`/documentation/po-checkbox-group`,extra:`Best Practices`,extras:[`Short and objective texts for items`,`Use with short lists`,`For big lists use PO Multiselect`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Login`,description:`Template for authentication`,link:`/documentation/po-page-login`,extra:`Features`,extras:[],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Number`,description:`Input that allows only numbers`,link:`/documentation/po-number`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Page Dynamic Table`,description:`Template for list resources with a table`,link:`/documentation/po-page-dynamic-table`,extra:`Features`,extras:[`6 defaults actions`,`Use Metadata to build your page`,`No code`,`Customization`],status:0,type:`template`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Combo`,description:`Display a list of items with filter and allows selection`,link:`/documentation/po-combo`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Notification`,description:`Show notification easily and quickly`,link:`/documentation/po-notification`,extra:`Features`,extras:[`4 types of notifications`,`Define time for your notifications`,`Use actions in your notification`],status:0,type:`service`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Multiselect`,description:`Display a list of items and allows multiple selection`,link:`/documentation/po-multiselect`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:1,type:`component`}},{component:{favorite:[],name:`PO Grid`,description:`Create a grid for edition`,link:`/documentation/po-grid`,extra:`Features`,extras:[],status:2,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Input`,description:`Input for general texts`,link:`/documentation/po-input`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Textarea`,description:`Larger input for big texts`,link:`/documentation/po-textarea`,extra:`Best Practices`,extras:[`Recommended to large texts like observations and details`,`For short texts use po-input`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Datepicker`,description:`Input with calendar for dates`,link:`/documentation/po-datepicker`,extra:`Features`,extras:[`Multiple idioms ( pt, es , en)`,`Custom date formats`,`Period validation (start date and end date)`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Email`,description:`Input that allows valid email texts (username@email.com)`,link:`/documentation/po-email`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Url`,description:`Input that expects a valid url as text (http://www.url.com)`,link:`/documentation/po-url`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Password`,description:`Input with bullet text to type passwords`,link:`/documentation/po-password`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Login`,description:`Input with a user icon that represents a login field`,link:`/documentation/po-login`,extra:`Features`,extras:[`Filter options (starts, contains, ends)`,`Custom services`,`Navigation by keys`],status:0,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Upload`,description:`Upload file(s) with a loading bar`,link:`/documentation/po-upload`,extra:`Features`,extras:[`Multiple file selection`,`Automatic upload after click`,`File format and size restriction`],status:1,type:`component`}},{component:{favorite:[`favorite`,`documentation`],name:`PO Avatar`,description:`Creates a circle with a picture inside`,link:`/documentation/po-avatar`,extra:`Features`,extras:[`Multiple sizes`,`Default image`],status:0,type:`component`}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(`.`).length>1){let s=m.split(`.`)[0],ye=m.split(`.`)[1];return o[s][ye]<l[s][ye]?p===pf.Ascending?-1:1:p===pf.Ascending?1:-1}else return o[m]<l[m]?p===pf.Ascending?-1:1:p===pf.Ascending?1:-1}static ɵfac=function(l){return new(l||r)};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function Vt(r,W){if(r&1&&(Tl(0,`div`),cN(1),SN(2,`uppercase`),ag()),r&2){let o=W.$implicit;Xx(pN(`badge `,o)),jp(),yw(MN(2,4,o))}}function zt(r,W){if(r&1&&(Tl(0,`ul`)(1,`li`,4),cN(2),ag(),Gl(3,`po-divider`),ag()),r&2){let o=W.$implicit;jp(2),yw(o)}}var ot=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:`component.status`,type:`label`,label:`Status`,width:`5%`,labels:[{value:j.Stable,color:`caption-tag-13`,label:`Stable`,textColor:`white`,tooltip:`Published component`},{value:j.Experimental,color:`caption-tag-08`,label:`Experimental`,textColor:`white`,tooltip:`Component in homologation`},{value:j.RoadMap,color:`caption-tag-03`,label:`Roadmap`,textColor:`white`,tooltip:`Component in roadmap`}]},{property:`component.name`,label:`Name`,type:`link`},{property:`component.type`,label:`Type`,type:`columnTemplate`,width:`10%`},{property:`component.description`,label:`Descrição`,color:this.experimentalColor.bind(this)},{property:`component.extra`,label:`Extras`,width:`10%`,type:`link`,tooltip:`Additional details`,action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:`component.favorite`,label:`Actions`,type:`icon`,sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:`an an-star`,tooltip:`Favorite`,value:`favorite`},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:`an an-arrow-square-out`,tooltip:`Click to go to documentation`,value:`documentation`}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===j.Experimental?`caption-tag-08`:`caption-tag-13`}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==j.Stable}canShowExtras(o){return o?.component?.status!==j.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?`caption-tag-08`:`caption-tag-13`}static ɵfac=function(l){return new(l||r)(w(xe),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-components`]],viewQuery:function(l,a){if(l&1&&Yl(vr,7),l&2){let m;lo(m=uo())&&(a.poModal=m.first)}},standalone:!1,features:[Ce([xe])],decls:8,vars:9,consts:[[1,`po-font-text-large`,`po-text-color-neutral-dark-40`],[`p-container`,`shadow`,3,`p-show-more`,`p-sort-by`,`p-loading-show-more`,`p-columns`,`p-items`,`p-show-more-disabled`,`p-sort`],[`p-table-column-template`,``,3,`p-property`],[`p-click-out`,`true`,`p-size`,`sm`,3,`p-title`],[1,`po-font-text`]],template:function(l,a){l&1&&(Tl(0,`div`,0),cN(1,`PO UI Library`),ag(),Gl(2,`po-divider`),Tl(3,`po-table`,1),ht(`p-show-more`,function(p){return a.showMore(p)})(`p-sort-by`,function(p){return a.sort(p)}),JE(4,Vt,3,6,`ng-template`,2),ag(),Tl(5,`po-modal`,3),Cx(6,zt,4,1,`ul`,null,wx),ag()),l&2&&(jp(3),nw(`p-loading-show-more`,a.isLoading)(`p-columns`,a.columns)(`p-items`,a.items)(`p-show-more-disabled`,a.showMoreDisabled)(`p-sort`,!0),jp(),nw(`p-property`,`component.type`),jp(),nw(`p-title`,gN(``,a.title,` - `,a.extraInformation?.component)),jp(),bx(a.extraInformation?.extras))},dependencies:[Xy$1,vr,X4,dye,zO],styles:[`.badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}`],changeDetection:1})}return r})();var jt=r=>({"docs-sample-code-tabs":r});var lt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-components-view`]],standalone:!1,decls:38,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table - Po Field Components`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-components/sample-po-table-components.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-components/sample-po-table-components.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-table-components/sample-po-table-components.enum.ts`),ag(),Tl(23,`pre`,9),cN(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),ag(),Tl(25,`label`,6),cN(26,`sample-po-table-components/sample-po-table-components.service.ts`),ag(),Tl(27,`pre`,9),cN(28,`import { Injectable } from '@angular/core';

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
`),ag()()(),Tl(29,`po-tab`,10)(30,`div`)(31,`label`,6),cN(32,`sample-po-table-components/sample-po-table-components.component.css`),ag(),Tl(33,`pre`,11),cN(34,`.badge {
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
`),ag()()()()(),Tl(35,`div`,12),Gl(36,`sample-po-table-components`),ag(),Gl(37,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,jt,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ot],encapsulation:2,changeDetection:1})}return r})();var he=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:`id`,label:`Id`,type:`string`,width:`90px`},{property:`label`,label:`Name`,type:`string`,width:`90px`},{property:`email`,label:`E-mail`,type:`string`,width:`120px`}]}getItems(){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes`).pipe(RT(`items`))}static ɵfac=function(l){return new(l||r)(b(ob))};static ɵprov=I({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();var Qt=[`POItemsOri`];var Gt=[`POItemsSelected`];var rt=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l===`new`)this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static ɵfac=function(l){return new(l||r)(w(he))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-heroes`]],viewQuery:function(l,a){if(l&1&&Yl(Qt,7)(Gt,7),l&2){let m;lo(m=uo())&&(a.poItemsOri=m.first),lo(m=uo())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[Ce([he])],decls:11,vars:16,consts:[[`POItemsOri`,``],[`POItemsSelected`,``],[1,`po-row`,`po-pb-2`],[1,`po-md-6`],[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[`p-selectable`,`true`,`p-infinite-scroll-distance`,`80`,`p-height`,`300`,3,`p-selected`,`p-unselected`,`p-delete-items`,`p-columns`,`p-infinite-scroll`,`p-hide-select-all`,`p-hide-table-search`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`],[`p-height`,`300`,3,`p-columns`,`p-hide-table-search`,`p-striped`,`p-infinite-scroll`,`p-items`,`p-hide-action-fixed-columns`,`p-text-wrap`,`p-virtual-scroll`]],template:function(l,a){l&1&&(Tl(0,`div`,2)(1,`div`,3)(2,`div`,4),cN(3,`Choose one or more heroes for your team`),ag(),Tl(4,`po-table`,5,0),ht(`p-selected`,function(p){return a.changeOptions(p,`new`)})(`p-unselected`,function(p){return a.changeOptions(p,`change`)})(`p-delete-items`,function(p){return a.deleteItems(p)}),ag()(),Tl(6,`div`,3)(7,`div`,4),cN(8,`Here your chosen heroes`),ag(),Gl(9,`po-table`,6,1),ag()()),l&2&&(jp(4),nw(`p-columns`,a.columns)(`p-infinite-scroll`,!0)(`p-hide-select-all`,!0)(`p-hide-table-search`,!1)(`p-items`,a.items)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1),jp(5),nw(`p-columns`,a.columns)(`p-hide-table-search`,!1)(`p-striped`,!0)(`p-infinite-scroll`,!0)(`p-items`,a.itemsSelected)(`p-hide-action-fixed-columns`,!0)(`p-text-wrap`,!0)(`p-virtual-scroll`,!1))},dependencies:[X4],encapsulation:2,changeDetection:1})}return r})();var Jt=r=>({"docs-sample-code-tabs":r});var mt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-heroes-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table - Heroes`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-heroes/sample-po-table-heroes.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row po-pb-2">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-heroes/sample-po-table-heroes.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-table-heroes/sample-po-table-heroes.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-table-heroes`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Jt,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,rt],encapsulation:2,changeDetection:1})}return r})();var Kt=()=>({code:`001`,table:`PO Table`,angular:`PO-UI`});var Zt=r=>[r];var dt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-draggable`]],standalone:!1,decls:4,vars:7,consts:[[1,`po-font-text-bold`,`po-text-color-neutral-dark-40`],[3,`p-items`,`p-draggable`,`p-hide-columns-manager`,`p-hide-table-search`]],template:function(l,a){l&1&&(Tl(0,`div`,0),cN(1,` Choose one column and drag to another horizontal position in the table and drop
`),ag(),Gl(2,`po-divider`)(3,`po-table`,1)),l&2&&(jp(3),nw(`p-items`,DN(5,Zt,_N(4,Kt)))(`p-draggable`,!0)(`p-hide-columns-manager`,!0)(`p-hide-table-search`,!1))},dependencies:[Xy$1,X4],encapsulation:2,changeDetection:1})}return r})();var en=r=>({"docs-sample-code-tabs":r});var st=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-draggable-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table Drag and Drop`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-draggable/sample-po-table-draggable.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-draggable/sample-po-table-draggable.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-table-draggable`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,en,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,dt],encapsulation:2,changeDetection:1})}return r})();function nn(r,W){if(r&1){let o=Ax();Tl(0,`po-filter-chip`,6),ht(`p-selected-change`,function(a){let m=Ky(o).$implicit;return Xy(Fx().onSuggestionChange(m,a))}),ag()}if(r&2){let o=W.$implicit,l=Fx();nw(`p-label`,o)(`p-selected`,l.selectedSuggestion===o)(`p-disabled`,l.suggestionsLocked&&l.selectedSuggestion!==o)}}var pt=(()=>{class r{poNotification;table;selectedSuggestion;suggestionsLocked=!1;examples=[`salário acima de 15000`,`funcionários de Curitiba`,`departamento Engenharia com salário acima de 10000`,`admitidos depois de 2020`,`com menos de 30 anos`,`de São Paulo com salário abaixo de 15000`,`departamento Design`,`salário entre 8000 e 12000`];AI_URL=`https://po-sample-api.onrender.com/v1/ai/filter`;columns=[{property:`name`,label:`Nome`},{property:`age`,label:`Idade`,type:`number`},{property:`city`,label:`Cidade`},{property:`department`,label:`Departamento`},{property:`salary`,label:`Salário`,type:`currency`,format:`BRL`},{property:`hireDate`,label:`Admissão`,type:`date`}];items=[{name:`Tony Stark`,age:34,city:`São Paulo`,department:`Engenharia`,salary:12e3,hireDate:`2019-03-15`},{name:`Rachel Green`,age:28,city:`Curitiba`,department:`Design`,salary:8500,hireDate:`2021-07-01`},{name:`Michael Scott`,age:42,city:`São Paulo`,department:`Gestão`,salary:18e3,hireDate:`2015-11-20`},{name:`Hermione Granger`,age:25,city:`Recife`,department:`Engenharia`,salary:7200,hireDate:`2023-01-10`},{name:`Walter White`,age:30,city:`Belo Horizonte`,department:`Design`,salary:9500,hireDate:`2020-05-18`},{name:`Monica Geller`,age:38,city:`Rio de Janeiro`,department:`Gestão`,salary:15e3,hireDate:`2017-09-03`},{name:`Peter Parker`,age:27,city:`São Paulo`,department:`Engenharia`,salary:1e4,hireDate:`2022-04-12`},{name:`Daenerys Targaryen`,age:45,city:`Curitiba`,department:`Engenharia`,salary:21e3,hireDate:`2012-06-30`}];searchAiField={url:this.AI_URL,placeholder:`Ex: engenheiros de São Paulo com salário acima de 10000`};SUGGESTION_LOCK_TIME=3e3;lockTimeout;constructor(o){this.poNotification=o}applySuggestion(o){this.table.updateSearchAIQuery(o,!0)}onSuggestionChange(o,l){!l.selected||this.suggestionsLocked||(this.selectedSuggestion=o,this.applySuggestion(o),this.lockSuggestions())}onAiResult(o){this.poNotification.success(`Busca conclu\xEDda para "${o.query}".`)}onAiLowConfidence(o){this.poNotification.warning(`Baixa confian\xE7a (${Math.round((o.confidence??0)*100)}%): verifique se o resultado reflete a busca por "${o.query}".`)}onAiError(o){this.poNotification.error(`Erro ${o.statusCode}: ${o.message}`)}lockSuggestions(){this.suggestionsLocked=!0,clearTimeout(this.lockTimeout),this.lockTimeout=setTimeout(()=>{this.suggestionsLocked=!1},this.SUGGESTION_LOCK_TIME)}static ɵfac=function(l){return new(l||r)(w(Eu))};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-search-ai`]],viewQuery:function(l,a){if(l&1&&Yl(X4,5),l&2){let m;lo(m=uo())&&(a.table=m.first)}},standalone:!1,decls:16,vars:3,consts:[[1,`po-font-text-large-bold`,`po-mt-2`,`po-mb-1`],[1,`po-font-text-small`,`po-mb-2`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-font-text-small`,`po-mt-2`,`po-mb-1`,2,`color`,`var(--color-neutral-mid-tone)`],[1,`po-mb-1`,2,`display`,`flex`,`flex-wrap`,`wrap`,`gap`,`0.5rem`],[3,`p-label`,`p-selected`,`p-disabled`],[3,`p-search-ai-result`,`p-search-ai-low-confidence`,`p-search-ai-error`,`p-columns`,`p-items`,`p-search-ai-field`],[3,`p-selected-change`,`p-label`,`p-selected`,`p-disabled`]],template:function(l,a){l&1&&(Tl(0,`p`,0),cN(1,`PO Search A.I.`),ag(),Tl(2,`p`,1),cN(3,` O `),Tl(4,`strong`),cN(5,`PO Search A.I.`),ag(),cN(6,` é um recurso de busca inteligente integrado ao `),Tl(7,`code`),cN(8,`po-table`),ag(),cN(9,` que utiliza intelig\xEAncia artificial para interpretar consultas em linguagem natural. Em vez de filtros exatos, o usu\xE1rio descreve o que procura de forma livre (ex.: "departamento Engenharia com sal\xE1rio acima de 10000") e o componente traduz essa inten\xE7\xE3o em filtros aplicados automaticamente \xE0 tabela, tornando a experi\xEAncia de busca mais r\xE1pida e intuitiva.
`),ag(),Tl(10,`p`,2),cN(11,` Sugest\xF5es \u2014 clique para preencher e buscar automaticamente
`),ag(),Tl(12,`div`,3),Cx(13,nn,1,3,`po-filter-chip`,4,wx),ag(),Tl(15,`po-table`,5),ht(`p-search-ai-result`,function(p){return a.onAiResult(p)})(`p-search-ai-low-confidence`,function(p){return a.onAiLowConfidence(p)})(`p-search-ai-error`,function(p){return a.onAiError(p)}),ag()),l&2&&(jp(13),bx(a.examples),jp(2),nw(`p-columns`,a.columns)(`p-items`,a.items)(`p-search-ai-field`,a.searchAiField))},dependencies:[Mbe,X4],encapsulation:2})}return r})();var on=r=>({"docs-sample-code-tabs":r});var ct=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-search-ai-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,a){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Table - Search A.I. (EXPERIMENTAL)`),ag(),Tl(4,`a`,2),ht(`click`,function(){return a.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-table-search-ai/sample-po-table-search-ai.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<p class="po-font-text-large-bold po-mt-2 po-mb-1">PO Search A.I.</p>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-table-search-ai/sample-po-table-search-ai.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-table-search-ai`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+a.sampleCodeButtonIcon),jp(),hg(` `,a.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,on,a.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pt],encapsulation:2,changeDetection:1})}return r})();var ut=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵcmp=Un({type:r,selectors:[[`sample-po-table-doc`]],standalone:!1,decls:5451,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-table-row-template`],[`href`,`/documentation/po-table-column-template`],[`href`,`/documentation/po-table-cell-template`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableAction[]`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn[]`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoSearchFilterMode`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`any[]`],[`pan`,``,1,`docs-api-property-type`,`PoTableLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoTableSearchAiField`],[`href`,`https://github.com/po-ui/po-sample-api`],[`href`,`https://po-ui.io/guides/api`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`{`,`key:`,`value`,`}`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumn`],[`pan`,``,1,`docs-api-property-type`,`PoTableColumnSortType`],[`pan`,``,1,`docs-api-property-type`,`PoTableBoolean`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[1,`dot`,`po-caption-tag-01`],[1,`dot`,`po-caption-tag-02`],[1,`dot`,`po-caption-tag-03`],[1,`dot`,`po-caption-tag-04`],[1,`dot`,`po-caption-tag-05`],[1,`dot`,`po-caption-tag-06`],[1,`dot`,`po-caption-tag-07`],[1,`dot`,`po-caption-tag-08`],[1,`dot`,`po-caption-tag-09`],[1,`dot`,`po-caption-tag-10`],[1,`dot`,`po-caption-tag-11`],[1,`dot`,`po-caption-tag-12`],[1,`dot`,`po-caption-tag-13`],[1,`dot`,`po-caption-tag-14`],[1,`dot`,`po-caption-tag-15`],[1,`dot`,`po-caption-tag-16`],[1,`dot`,`po-caption-tag-17`],[1,`dot`,`po-caption-tag-18`],[1,`dot`,`po-caption-tag-19`],[1,`dot`,`po-caption-tag-20`],[1,`dot`,`po-caption-tag-21`],[1,`dot`,`po-caption-tag-22`],[1,`dot`,`po-caption-tag-23`],[1,`dot`,`po-caption-tag-24`],[1,`dot`,`po-caption-tag-25`],[1,`dot`,`po-caption-tag-26`],[1,`dot`,`po-caption-tag-27`],[1,`dot`,`po-caption-tag-28`],[1,`dot`,`po-caption-tag-29`],[1,`dot`,`po-caption-tag-30`],[1,`dot`,`po-caption-tag-31`],[1,`dot`,`po-caption-tag-32`],[1,`dot`,`po-caption-tag-33`],[1,`dot`,`po-caption-tag-34`],[1,`dot`,`po-caption-tag-35`],[`pan`,``,1,`docs-api-property-type`,`PoTableDetail`],[`href`,`https://angular.dev/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnIcon>`],[`href`,`documentation/po-table#tableColumnIcon`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableColumnLabel>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableSubtitleColumn>`],[`pan`,``,1,`docs-api-property-type`,`'auto'`],[`pan`,``,1,`docs-api-property-type`,`'parser'`],[`pan`,``,1,`docs-api-property-type`,`'server'`],[`pan`,``,1,`docs-api-property-type`,`'none'`],[`pan`,``,1,`docs-api-property-type`,`((result:`,`PoSearchAiResult)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSearchAiColumn>`],[`pan`,``,1,`docs-api-property-type`,`PoSearchAiLiterals`],[`id`,`tableColumnIcon`],[1,`an`,`an-check`],[1,`an`,`an-warning-circle`],[1,`an`,`an-x`],[1,`an`,`an-info`],[`pan`,``,1,`docs-api-property-type`,`PoTagType`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`Array<PoTableDetailColumn>`]],template:function(l,a){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoTableModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-table`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoTableComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),ag(),Tl(15,`p`),cN(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),Tl(17,`strong`),cN(18,`Carregar mais resultados`),ag(),cN(19,`.`),ag(),Tl(20,`blockquote`)(21,`p`),cN(22,`As linhas de detalhes podem também ser customizadas através do `),Tl(23,`a`,6)(24,`code`),cN(25,`p-table-row-template`),ag()(),cN(26,`.`),ag()(),Tl(27,`blockquote`)(28,`p`),cN(29,`As colunas podem ser customizadas através dos templates `),Tl(30,`a`,7)(31,`code`),cN(32,`p-table-column-template`),ag()(),cN(33,`
e `),Tl(34,`a`,8)(35,`code`),cN(36,`p-table-cell-template`),ag()(),cN(37,`.`),ag()(),Tl(38,`p`),cN(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),ag(),Tl(40,`p`),cN(41,`Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, será exibido um `),Tl(42,`em`),cN(43,`scroll`),ag(),cN(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),ag(),Tl(45,`h4`),cN(46,`Tokens customizáveis`),ag(),Tl(47,`p`),cN(48,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(49,`blockquote`)(50,`p`),cN(51,`Para maiores informações, acesse o guia `),Tl(52,`a`,9),cN(53,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(54,`.`),ag()(),Tl(55,`table`)(56,`thead`)(57,`tr`)(58,`th`),cN(59,`Propriedade`),ag(),Tl(60,`th`),cN(61,`Descrição`),ag(),Tl(62,`th`),cN(63,`Valor Padrão`),ag()()(),Tl(64,`tbody`)(65,`tr`)(66,`td`)(67,`strong`),cN(68,`Default Values`),ag()(),Gl(69,`td`)(70,`td`),ag(),Tl(71,`tr`)(72,`td`)(73,`code`),cN(74,`--font-family`),ag()(),Tl(75,`td`),cN(76,`Família tipográfica usada`),ag(),Tl(77,`td`)(78,`code`),cN(79,`var(--font-family-theme)`),ag()()(),Tl(80,`tr`)(81,`td`)(82,`code`),cN(83,`--background-color`),ag()(),Tl(84,`td`),cN(85,`Cor de background`),ag(),Tl(86,`td`)(87,`code`),cN(88,`var(--color-neutral-light-00)`),ag()()(),Tl(89,`tr`)(90,`td`)(91,`code`),cN(92,`--color`),ag()(),Tl(93,`td`),cN(94,`Cor principal da table`),ag(),Tl(95,`td`)(96,`code`),cN(97,`var(--color-neutral-dark-95)`),ag()()(),Tl(98,`tr`)(99,`td`)(100,`code`),cN(101,`--background-striped-color`),ag()(),Tl(102,`td`),cN(103,`Cor do background quando striped`),ag(),Tl(104,`td`)(105,`code`),cN(106,`var(--color-neutral-light-05)`),ag()()(),Tl(107,`tr`)(108,`td`)(109,`code`),cN(110,`--color-line`),ag()(),Tl(111,`td`),cN(112,`Cor das linhas`),ag(),Tl(113,`td`)(114,`code`),cN(115,`var(--color-neutral-mid-40)`),ag()()(),Tl(116,`tr`)(117,`td`)(118,`strong`),cN(119,`Hover`),ag()(),Gl(120,`td`)(121,`td`),ag(),Tl(122,`tr`)(123,`td`)(124,`code`),cN(125,`--color-hover`),ag()(),Tl(126,`td`),cN(127,`Cor principal no estado hover`),ag(),Tl(128,`td`)(129,`code`),cN(130,`var(--color-action-hover)`),ag()()(),Tl(131,`tr`)(132,`td`)(133,`code`),cN(134,`--background-color-hover`),ag()(),Tl(135,`td`),cN(136,`Cor de background no estado hover`),ag(),Tl(137,`td`)(138,`code`),cN(139,`var(--color-brand-01-lighter)`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`strong`),cN(143,`Focused`),ag()(),Gl(144,`td`)(145,`td`),ag(),Tl(146,`tr`)(147,`td`)(148,`code`),cN(149,`--outline-color-focused`),ag()(),Tl(150,`td`),cN(151,`Cor do outline do estado de focus`),ag(),Tl(152,`td`)(153,`code`),cN(154,`var(--color-action-focus)`),ag()()(),Tl(155,`tr`)(156,`td`)(157,`strong`),cN(158,`Disabled`),ag()(),Gl(159,`td`)(160,`td`),ag(),Tl(161,`tr`)(162,`td`)(163,`code`),cN(164,`--color-disabled`),ag()(),Tl(165,`td`),cN(166,`Cor principal no estado disabled`),ag(),Tl(167,`td`)(168,`code`),cN(169,`var(--color-neutral-mid-40)`),ag()()(),Tl(170,`tr`)(171,`td`)(172,`strong`),cN(173,`Headline`),ag()(),Gl(174,`td`)(175,`td`),ag(),Tl(176,`tr`)(177,`td`)(178,`code`),cN(179,`--background-color-headline`),ag(),cN(180,` \xA0`),ag(),Tl(181,`td`),cN(182,`Cor do cabeçalho`),ag(),Tl(183,`td`)(184,`code`),cN(185,`var(--color-neutral-light-10)`),ag()()(),Tl(186,`tr`)(187,`td`)(188,`code`),cN(189,`--font-weight-headline`),ag()(),Tl(190,`td`),cN(191,`Peso da fonte do cabeçalho`),ag(),Tl(192,`td`)(193,`code`),cN(194,`var(--font-weight-bold)`),ag()()(),Tl(195,`tr`)(196,`td`)(197,`strong`),cN(198,`Selected`),ag()(),Gl(199,`td`)(200,`td`),ag(),Tl(201,`tr`)(202,`td`)(203,`code`),cN(204,`--background-color-selected`),ag(),cN(205,`\xA0`),ag(),Tl(206,`td`),cN(207,`Cor de background no estado de selecionado`),ag(),Tl(208,`td`)(209,`code`),cN(210,`var(--color-brand-01-lightest)`),ag()()(),Tl(211,`tr`)(212,`td`)(213,`strong`),cN(214,`Actived`),ag()(),Gl(215,`td`)(216,`td`),ag(),Tl(217,`tr`)(218,`td`)(219,`code`),cN(220,`--color-actived`),ag()(),Tl(221,`td`),cN(222,`Cor do texto no estado de selecionado`),ag(),Tl(223,`td`)(224,`code`),cN(225,`var(--color-neutral-dark-90)`),ag()()(),Tl(226,`tr`)(227,`td`)(228,`code`),cN(229,`--background-color-actived`),ag()(),Tl(230,`td`),cN(231,`Cor de background no estado de selecionado`),ag(),Tl(232,`td`)(233,`code`),cN(234,`var(--color-brand-01-light)`),ag()()()()()(),Tl(235,`div`,10)(236,`h4`,11),cN(237,`Seletor`),ag(),Tl(238,`pre`,12),cN(239,`<po-table
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
`),ag()(),Tl(240,`h4`,13),cN(241,`Propriedades`),ag(),Tl(242,`table`,14)(243,`tr`,15)(244,`th`,16),cN(245,`Nome`),ag(),Tl(246,`th`,16),cN(247,`Tipo`),ag(),Tl(248,`th`,16),cN(249,`Padrão`),ag(),Tl(250,`th`,16),cN(251,`Descrição`),ag()(),Tl(252,`tr`,17)(253,`td`,18)(254,`div`,19)(255,`span`,20),cN(256,` p-actions-right`),Gl(257,`br`),ag()()(),Tl(258,`td`,21)(259,`code`,22),cN(260,`boolean`),ag()(),Tl(261,`td`,23)(262,`p`)(263,`code`),cN(264,`false`),ag()()(),Tl(265,`td`,24)(266,`em`)(267,`strong`),cN(268,`(opcional)`),ag()(),Tl(269,`p`),cN(270,`Define que a coluna de ações ficará no lado direito da tabela.`),ag()()(),Tl(271,`tr`,17)(272,`td`,18)(273,`div`,19)(274,`span`,20),cN(275,` p-actions`),Gl(276,`br`),ag()()(),Tl(277,`td`,21)(278,`code`,25),cN(279,`PoTableAction[]`),ag()(),Tl(280,`td`,23),cN(281,`-`),ag(),Tl(282,`td`,24)(283,`em`)(284,`strong`),cN(285,`(opcional)`),ag()(),Tl(286,`p`),cN(287,`Define uma lista de ações.`),ag(),Tl(288,`p`),cN(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),Tl(290,`a`,26)(291,`strong`),cN(292,`an an-dots-three`),ag()(),cN(293,` que listará as ações ao ser clicado.`),ag(),Tl(294,`p`)(295,`strong`),cN(296,`A coluna de ações não será exibida quando:`),ag()(),Tl(297,`ul`)(298,`li`),cN(299,`a lista conter valores inválidos ou indefinidos.`),ag(),Tl(300,`li`),cN(301,`tenha uma única ação e a mesma não for visível.`),ag()()()(),Tl(302,`tr`,17)(303,`td`,18)(304,`div`,27)(305,`span`,28),cN(306,` (p-all-selected)`),Gl(307,`br`),ag()()(),Tl(308,`td`,21)(309,`code`,29),cN(310,`EventEmitter`),ag()(),Tl(311,`td`,23),cN(312,`-`),ag(),Tl(313,`td`,24)(314,`em`)(315,`strong`),cN(316,`(opcional)`),ag()(),Tl(317,`p`),cN(318,`Evento executado quando todas as linhas são selecionadas por meio do `),Tl(319,`em`),cN(320,`checkbox`),ag(),cN(321,` que seleciona todas as linhas.`),ag()()(),Tl(322,`tr`,17)(323,`td`,18)(324,`div`,27)(325,`span`,28),cN(326,` (p-all-unselected)`),Gl(327,`br`),ag()()(),Tl(328,`td`,21)(329,`code`,29),cN(330,`EventEmitter`),ag()(),Tl(331,`td`,23),cN(332,`-`),ag(),Tl(333,`td`,24)(334,`em`)(335,`strong`),cN(336,`(opcional)`),ag()(),Tl(337,`p`),cN(338,`Evento executado quando a seleção das linhas é desmarcada por meio do `),Tl(339,`em`),cN(340,`checkbox`),ag(),cN(341,` que seleciona todas as linhas.`),ag()()(),Tl(342,`tr`,17)(343,`td`,18)(344,`div`,19)(345,`span`,20),cN(346,` p-auto-collapse`),Gl(347,`br`),ag()()(),Tl(348,`td`,21)(349,`code`,22),cN(350,`boolean`),ag()(),Tl(351,`td`,23)(352,`p`)(353,`code`),cN(354,`false`),ag()()(),Tl(355,`td`,24)(356,`em`)(357,`strong`),cN(358,`(opcional)`),ag()(),Tl(359,`p`),cN(360,`Permite fechar um detalhe ou row template automaticamente, ao abrir outro item.`),ag()()(),Tl(361,`tr`,17)(362,`td`,18)(363,`div`,27)(364,`span`,28),cN(365,` (p-change-fixed-columns)`),Gl(366,`br`),ag()()(),Tl(367,`td`,21)(368,`code`,29),cN(369,`EventEmitter`),ag()(),Tl(370,`td`,23),cN(371,`-`),ag(),Tl(372,`td`,24)(373,`em`)(374,`strong`),cN(375,`(opcional)`),ag()(),Tl(376,`p`),cN(377,`Evento disparado ao alterar o estado de fixação de uma coluna no gerenciador de colunas.`),ag(),Tl(378,`p`),cN(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),ag(),Tl(380,`blockquote`)(381,`p`),cN(382,`Incompatível com `),Tl(383,`code`),cN(384,`p-hide-action-fixed-columns`),ag(),cN(385,`. Quando esta propriedade estiver ativa, o evento não será disparado.`),ag()()()(),Tl(386,`tr`,17)(387,`td`,18)(388,`div`,27)(389,`span`,28),cN(390,` (p-change-visible-columns)`),Gl(391,`br`),ag()()(),Tl(392,`td`,21)(393,`code`,29),cN(394,`EventEmitter`),ag()(),Tl(395,`td`,23),cN(396,`-`),ag(),Tl(397,`td`,24)(398,`em`)(399,`strong`),cN(400,`(opcional)`),ag()(),Tl(401,`p`),cN(402,`Evento disparado ao fechar o page slide do gerenciador de colunas após alterar as colunas visíveis.`),ag(),Tl(403,`p`),cN(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag()()(),Tl(405,`tr`,17)(406,`td`,18)(407,`div`,27)(408,`span`,28),cN(409,` (p-collapsed)`),Gl(410,`br`),ag()()(),Tl(411,`td`,21)(412,`code`,29),cN(413,`EventEmitter`),ag()(),Tl(414,`td`,23),cN(415,`-`),ag(),Tl(416,`td`,24)(417,`em`)(418,`strong`),cN(419,`(opcional)`),ag()(),Tl(420,`p`),cN(421,`Evento executado ao colapsar uma linha do `),Tl(422,`code`),cN(423,`po-table`),ag(),cN(424,`.`),ag(),Tl(425,`blockquote`)(426,`p`),cN(427,`Como parâmetro o componente envia o item colapsado.`),ag()()()(),Tl(428,`tr`,17)(429,`td`,18)(430,`div`,27)(431,`span`,28),cN(432,` (p-restore-column-manager)`),Gl(433,`br`),ag()()(),Tl(434,`td`,21)(435,`code`,29),cN(436,`EventEmitter`),ag()(),Tl(437,`td`,23),cN(438,`-`),ag(),Tl(439,`td`,24)(440,`em`)(441,`strong`),cN(442,`(opcional)`),ag()(),Tl(443,`p`),cN(444,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ag(),Tl(445,`p`),cN(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag()()(),Tl(447,`tr`,17)(448,`td`,18)(449,`div`,19)(450,`span`,20),cN(451,` p-columns`),Gl(452,`br`),ag()()(),Tl(453,`td`,21)(454,`code`,30),cN(455,`PoTableColumn[]`),ag()(),Tl(456,`td`,23),cN(457,`-`),ag(),Tl(458,`td`,24)(459,`em`)(460,`strong`),cN(461,`(opcional)`),ag()(),Tl(462,`p`),cN(463,`Lista das colunas da tabela, deve receber um `),Tl(464,`em`),cN(465,`array`),ag(),cN(466,` de objetos que implementam a interface `),Tl(467,`code`),cN(468,`PoTableColumn`),ag(),cN(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),ag(),Tl(470,`blockquote`)(471,`p`),cN(472,`Caso não encontre valor, a mensagem 'Nenhuma definição de colunas' será exibida.`),ag()()()(),Tl(473,`tr`,17)(474,`td`,18)(475,`div`,19)(476,`span`,20),cN(477,` p-components-size`),Gl(478,`br`),ag()()(),Tl(479,`td`,21)(480,`code`,31),cN(481,`string`),ag()(),Tl(482,`td`,23)(483,`p`)(484,`code`),cN(485,`medium`),ag()()(),Tl(486,`td`,24)(487,`em`)(488,`strong`),cN(489,`(opcional)`),ag()(),Tl(490,`p`),cN(491,`Define o tamanho dos componentes de formulário no table:`),ag(),Tl(492,`ul`)(493,`li`)(494,`code`),cN(495,`small`),ag(),cN(496,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(497,`li`)(498,`code`),cN(499,`medium`),ag(),cN(500,`: aplica a medida medium de cada componente.`),ag()(),Tl(501,`blockquote`)(502,`p`),cN(503,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(504,`code`),cN(505,`medium`),ag(),cN(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(507,`a`,32),cN(508,`po-theme`),ag(),cN(509,`.`),ag()()()(),Tl(510,`tr`,17)(511,`td`,18)(512,`div`,19)(513,`span`,20),cN(514,` p-container`),Gl(515,`br`),ag()()(),Tl(516,`td`,21)(517,`code`,31),cN(518,`string`),ag()(),Tl(519,`td`,23)(520,`p`)(521,`code`),cN(522,`border`),ag()()(),Tl(523,`td`,24)(524,`em`)(525,`strong`),cN(526,`(opcional)`),ag()(),Tl(527,`p`),cN(528,`Adiciona um contorno arredondado ao `),Tl(529,`code`),cN(530,`po-table`),ag(),cN(531,`, as opções são:`),ag(),Tl(532,`ul`)(533,`li`)(534,`code`),cN(535,`border`),ag(),cN(536,`: com bordas/linhas.`),ag(),Tl(537,`li`)(538,`code`),cN(539,`shadow`),ag(),cN(540,`: com sombras.`),ag()()()(),Tl(541,`tr`,17)(542,`td`,18)(543,`div`,19)(544,`span`,20),cN(545,` p-draggable`),Gl(546,`br`),ag()()(),Tl(547,`td`,21)(548,`code`,22),cN(549,`boolean`),ag()(),Tl(550,`td`,23)(551,`p`)(552,`code`),cN(553,`false`),ag()()(),Tl(554,`td`,24)(555,`em`)(556,`strong`),cN(557,`(opcional)`),ag()(),Tl(558,`p`),cN(559,`Habilita o modo drag and drop para as colunas da tabela.`),ag()()(),Tl(560,`tr`,17)(561,`td`,18)(562,`div`,27)(563,`span`,28),cN(564,` (p-delete-items)`),Gl(565,`br`),ag()()(),Tl(566,`td`,21)(567,`code`,29),cN(568,`EventEmitter`),ag()(),Tl(569,`td`,23),cN(570,`-`),ag(),Tl(571,`td`,24)(572,`em`)(573,`strong`),cN(574,`(opcional)`),ag()(),Tl(575,`p`),cN(576,`Evento executado após o método de exclusão ser finalizado.`),ag(),Tl(577,`pre`)(578,`code`),cN(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),ag()(),Tl(580,`blockquote`)(581,`p`),cN(582,`Como parâmetro o componente envia a lista atualizada, sem os itens excluídos.`),ag()()()(),Tl(583,`tr`,17)(584,`td`,18)(585,`div`,27)(586,`span`,28),cN(587,` (p-expanded)`),Gl(588,`br`),ag()()(),Tl(589,`td`,21)(590,`code`,29),cN(591,`EventEmitter`),ag()(),Tl(592,`td`,23),cN(593,`-`),ag(),Tl(594,`td`,24)(595,`em`)(596,`strong`),cN(597,`(opcional)`),ag()(),Tl(598,`p`),cN(599,`Evento executado ao expandir uma linha do `),Tl(600,`code`),cN(601,`po-table`),ag(),cN(602,`.`),ag(),Tl(603,`blockquote`)(604,`p`),cN(605,`Como parâmetro o componente envia o item expandido.`),ag()()()(),Tl(606,`tr`,17)(607,`td`,18)(608,`div`,19)(609,`span`,20),cN(610,` p-filter-type`),Gl(611,`br`),ag()()(),Tl(612,`td`,21)(613,`code`,33),cN(614,`PoSearchFilterMode`),ag()(),Tl(615,`td`,23)(616,`p`)(617,`code`),cN(618,`startsWith`),ag()()(),Tl(619,`td`,24)(620,`em`)(621,`strong`),cN(622,`(opcional)`),ag()(),Tl(623,`p`),cN(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),ag(),Tl(625,`blockquote`)(626,`p`),cN(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),ag()()()(),Tl(628,`tr`,17)(629,`td`,18)(630,`div`,19)(631,`span`,20),cN(632,` p-filtered-columns`),Gl(633,`br`),ag()()(),Tl(634,`td`,21)(635,`code`,34),cN(636,`Array<string>`),ag()(),Tl(637,`td`,23),cN(638,`-`),ag(),Tl(639,`td`,24)(640,`em`)(641,`strong`),cN(642,`(opcional)`),ag()(),Tl(643,`p`),cN(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),ag()()(),Tl(645,`tr`,17)(646,`td`,18)(647,`div`,19)(648,`span`,20),cN(649,` p-height`),Gl(650,`br`),ag()()(),Tl(651,`td`,21)(652,`code`,35),cN(653,`number`),ag()(),Tl(654,`td`,23),cN(655,`-`),ag(),Tl(656,`td`,24)(657,`em`)(658,`strong`),cN(659,`(opcional)`),ag()(),Tl(660,`p`),cN(661,`Define a altura da tabela em `),Tl(662,`em`),cN(663,`pixels`),ag(),cN(664,` e fixa o cabeçalho.`),ag(),Tl(665,`p`),cN(666,`Ao utilizar essa propriedade será inserido o `),Tl(667,`code`),cN(668,`virtual-scroll`),ag(),cN(669,` na tabela melhorando a performance.`),ag()()(),Tl(670,`tr`,17)(671,`td`,18)(672,`div`,19)(673,`span`,20),cN(674,` p-hide-action-fixed-columns`),Gl(675,`br`),ag()()(),Tl(676,`td`,21)(677,`code`,22),cN(678,`boolean`),ag()(),Tl(679,`td`,23)(680,`p`)(681,`code`),cN(682,`false`),ag()()(),Tl(683,`td`,24)(684,`em`)(685,`strong`),cN(686,`(opcional)`),ag()(),Tl(687,`p`),cN(688,`Permite que as ações para fixar uma coluna da tabela sejam escondidas.`),ag()()(),Tl(689,`tr`,17)(690,`td`,18)(691,`div`,19)(692,`span`,20),cN(693,` p-hide-batch-actions`),Gl(694,`br`),ag()()(),Tl(695,`td`,21)(696,`code`,22),cN(697,`boolean`),ag()(),Tl(698,`td`,23)(699,`p`)(700,`code`),cN(701,`true`),ag()()(),Tl(702,`td`,24)(703,`em`)(704,`strong`),cN(705,`(opcional)`),ag()(),Tl(706,`p`),cN(707,`Permite que as ações em lote, responsável por excluir e exibir a quantidade de itens, sejam escondidas.`),ag()()(),Tl(708,`tr`,17)(709,`td`,18)(710,`div`,19)(711,`span`,20),cN(712,` p-hide-columns-manager`),Gl(713,`br`),ag()()(),Tl(714,`td`,21)(715,`code`,22),cN(716,`boolean`),ag()(),Tl(717,`td`,23)(718,`p`)(719,`code`),cN(720,`false`),ag()()(),Tl(721,`td`,24)(722,`em`)(723,`strong`),cN(724,`(opcional)`),ag()(),Tl(725,`p`),cN(726,`Permite que o gerenciador de colunas, responsável pela definição de quais colunas serão exibidas, seja escondido.`),ag()()(),Tl(727,`tr`,17)(728,`td`,18)(729,`div`,19)(730,`span`,20),cN(731,` p-hide-detail`),Gl(732,`br`),ag()()(),Tl(733,`td`,21)(734,`code`,22),cN(735,`boolean`),ag()(),Tl(736,`td`,23)(737,`p`)(738,`code`),cN(739,`false`),ag()()(),Tl(740,`td`,24)(741,`em`)(742,`strong`),cN(743,`(opcional)`),ag()(),Tl(744,`p`),cN(745,`Habilita a visualização da lista de detalhes de cada linha da coluna.`),ag()()(),Tl(746,`tr`,17)(747,`td`,18)(748,`div`,19)(749,`span`,20),cN(750,` p-hide-select-all`),Gl(751,`br`),ag()()(),Tl(752,`td`,21)(753,`code`,22),cN(754,`boolean`),ag()(),Tl(755,`td`,23)(756,`p`)(757,`code`),cN(758,`false`),ag()()(),Tl(759,`td`,24)(760,`p`),cN(761,`Esconde o `),Tl(762,`em`),cN(763,`checkbox`),ag(),cN(764,` para seleção de todas as linhas.`),ag(),Tl(765,`blockquote`)(766,`p`),cN(767,`Sempre receberá `),Tl(768,`em`),cN(769,`true`),ag(),cN(770,` caso a seleção de apenas uma linha esteja ativa.`),ag()()()(),Tl(771,`tr`,17)(772,`td`,18)(773,`div`,19)(774,`span`,20),cN(775,` p-hide-table-search`),Gl(776,`br`),ag()()(),Tl(777,`td`,21)(778,`code`,22),cN(779,`boolean`),ag()(),Tl(780,`td`,23)(781,`p`)(782,`code`),cN(783,`true`),ag()()(),Tl(784,`td`,24)(785,`em`)(786,`strong`),cN(787,`(opcional)`),ag()(),Tl(788,`p`),cN(789,`Permite que o campo de pesquisa seja escondido.`),ag()()(),Tl(790,`tr`,17)(791,`td`,18)(792,`div`,19)(793,`span`,20),cN(794,` p-infinite-scroll`),Gl(795,`br`),ag()()(),Tl(796,`td`,21)(797,`code`,22),cN(798,`boolean`),ag()(),Tl(799,`td`,23)(800,`p`)(801,`code`),cN(802,`false`),ag()()(),Tl(803,`td`,24)(804,`em`)(805,`strong`),cN(806,`(opcional)`),ag()(),Tl(807,`p`),cN(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),Tl(809,`code`),cN(810,`p-show-more`),ag(),cN(811,`.`),ag(),Tl(812,`p`)(813,`strong`),cN(814,`Regras de utilização:`),ag()(),Tl(815,`ul`)(816,`li`),cN(817,`O scroll infinito só funciona para tabelas que utilizam a propriedade `),Tl(818,`code`),cN(819,`p-height`),ag(),cN(820,` e que possuem o scroll já na carga inicial dos dados.`),ag()()()(),Tl(821,`tr`,17)(822,`td`,18)(823,`div`,19)(824,`span`,20),cN(825,` p-infinite-scroll-distance`),Gl(826,`br`),ag()()(),Tl(827,`td`,21)(828,`code`,35),cN(829,`number`),ag()(),Tl(830,`td`,23),cN(831,`-`),ag(),Tl(832,`td`,24)(833,`em`)(834,`strong`),cN(835,`(opcional)`),ag()(),Tl(836,`p`),cN(837,`Define o percentual necessário para disparar o evento `),Tl(838,`code`),cN(839,`p-show-more`),ag(),cN(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),ag(),Tl(841,`p`)(842,`strong`),cN(843,`Exemplos:`),ag()(),Tl(844,`ul`)(845,`li`),cN(846,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o `),Tl(847,`code`),cN(848,`p-show-more`),ag(),cN(849,` será disparado.`),ag()()()(),Tl(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),cN(854,` p-items`),Gl(855,`br`),ag()()(),Tl(856,`td`,21)(857,`code`,36),cN(858,`any[]`),ag()(),Tl(859,`td`,23),cN(860,`-`),ag(),Tl(861,`td`,24)(862,`p`),cN(863,`Lista de itens da tabela.`),ag(),Tl(864,`blockquote`)(865,`p`),cN(866,`Se falso, será inicializado como um `),Tl(867,`em`),cN(868,`array`),ag(),cN(869,` vazio.`),ag()()()(),Tl(870,`tr`,17)(871,`td`,18)(872,`div`,19)(873,`span`,20),cN(874,` p-literals`),Gl(875,`br`),ag()()(),Tl(876,`td`,21)(877,`code`,37),cN(878,`PoTableLiterals`),ag()(),Tl(879,`td`,23),cN(880,`-`),ag(),Tl(881,`td`,24)(882,`em`)(883,`strong`),cN(884,`(opcional)`),ag()(),Tl(885,`p`),cN(886,`Objeto com as literais usadas no `),Tl(887,`code`),cN(888,`po-table`),ag(),cN(889,`.`),ag(),Tl(890,`p`),cN(891,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(892,`pre`)(893,`code`),cN(894,`const customLiterals: PoTableLiterals = {
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
`),ag()(),Tl(895,`p`),cN(896,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(897,`pre`)(898,`code`),cN(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),ag()(),Tl(900,`p`),cN(901,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(902,`pre`)(903,`code`),cN(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),ag()(),Tl(905,`blockquote`)(906,`p`),cN(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(908,`a`,38)(909,`code`),cN(910,`PoI18nService`),ag()(),cN(911,` ou do browser.`),ag()()()(),Tl(912,`tr`,17)(913,`td`,18)(914,`div`,19)(915,`span`,20),cN(916,` p-loading`),Gl(917,`br`),ag()()(),Tl(918,`td`,21)(919,`code`,22),cN(920,`boolean`),ag()(),Tl(921,`td`,23)(922,`p`)(923,`code`),cN(924,`false`),ag()()(),Tl(925,`td`,24)(926,`em`)(927,`strong`),cN(928,`(opcional)`),ag()(),Tl(929,`p`),cN(930,`Bloqueia a interação do usuário com os dados da `),Tl(931,`em`),cN(932,`table`),ag(),cN(933,`.`),ag()()(),Tl(934,`tr`,17)(935,`td`,18)(936,`div`,19)(937,`span`,20),cN(938,` p-loading-show-more`),Gl(939,`br`),ag()()(),Tl(940,`td`,21)(941,`code`,22),cN(942,`boolean`),ag()(),Tl(943,`td`,23)(944,`p`)(945,`code`),cN(946,`false`),ag()()(),Tl(947,`td`,24)(948,`em`)(949,`strong`),cN(950,`(opcional)`),ag()(),Tl(951,`p`),cN(952,`Permite que seja adicionado o estado de carregamento no botão "Carregar mais resultados".`),ag()()(),Tl(953,`tr`,17)(954,`td`,18)(955,`div`,19)(956,`span`,20),cN(957,` p-max-columns`),Gl(958,`br`),ag()()(),Tl(959,`td`,21)(960,`code`,35),cN(961,`number`),ag()(),Tl(962,`td`,23),cN(963,`-`),ag(),Tl(964,`td`,24)(965,`em`)(966,`strong`),cN(967,`(opcional)`),ag()(),Tl(968,`p`),cN(969,`Define uma quantidade máxima de colunas que serão exibidas na tabela.`),ag(),Tl(970,`p`),cN(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),ag()()(),Tl(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),cN(976,` p-param-delete-api`),Gl(977,`br`),ag()()(),Tl(978,`td`,21)(979,`code`,31),cN(980,`string`),ag()(),Tl(981,`td`,23)(982,`p`)(983,`code`),cN(984,`id`),ag()()(),Tl(985,`td`,24)(986,`em`)(987,`strong`),cN(988,`(opcional)`),ag()(),Tl(989,`p`),cN(990,`Adiciona o parâmetro a ser enviado para a requisição de DELETE.`),ag(),Tl(991,`p`),cN(992,`É necessário a utilização da propriedade `),Tl(993,`code`),cN(994,`p-service-delete`),ag(),cN(995,` em conjunto.`),ag()()(),Tl(996,`tr`,17)(997,`td`,18)(998,`div`,27)(999,`span`,28),cN(1e3,` (p-search-ai-error)`),Gl(1001,`br`),ag()()(),Tl(1002,`td`,21)(1003,`code`,29),cN(1004,`EventEmitter`),ag()(),Tl(1005,`td`,23),cN(1006,`-`),ag(),Tl(1007,`td`,24)(1008,`em`)(1009,`strong`),cN(1010,`(opcional)`),ag()(),Tl(1011,`p`),cN(1012,`Evento emitido quando ocorre um erro na requisi\xE7\xE3o ao endpoint de IA configurado em
`),Tl(1013,`code`),cN(1014,`p-search-ai-field`),ag(),cN(1015,`.`),ag(),Tl(1016,`p`),cN(1017,`O parâmetro enviado é um objeto `),Tl(1018,`code`),cN(1019,`PoSearchAiError`),ag(),cN(1020,` contendo:`),ag(),Tl(1021,`ul`)(1022,`li`)(1023,`code`),cN(1024,`statusCode`),ag(),cN(1025,`: código HTTP do erro (ex: `),Tl(1026,`code`),cN(1027,`408`),ag(),cN(1028,` para timeout, `),Tl(1029,`code`),cN(1030,`500`),ag(),cN(1031,` para erro interno).`),ag(),Tl(1032,`li`)(1033,`code`),cN(1034,`message`),ag(),cN(1035,`: mensagem descritiva do erro.`),ag()()()(),Tl(1036,`tr`,17)(1037,`td`,18)(1038,`div`,19)(1039,`span`,20),cN(1040,` p-search-ai-field`),Gl(1041,`br`),ag()()(),Tl(1042,`td`,21)(1043,`code`,39),cN(1044,`PoTableSearchAiField`),ag()(),Tl(1045,`td`,23),cN(1046,`-`),ag(),Tl(1047,`td`,24)(1048,`em`)(1049,`strong`),cN(1050,`(opcional)`),ag()(),Tl(1051,`p`),cN(1052,`Configura a busca por linguagem natural integrada \xE0 tabela, substituindo o campo de busca padr\xE3o
(`),Tl(1053,`code`),cN(1054,`po-search`),ag(),cN(1055,`) pelo componente `),Tl(1056,`code`),cN(1057,`po-search-ai`),ag(),cN(1058,` na barra de ações.`),ag(),Tl(1059,`p`),cN(1060,`Recebe um objeto do tipo `),Tl(1061,`code`),cN(1062,`PoTableSearchAiField`),ag(),cN(1063,` com as configurações necessárias:`),ag(),Tl(1064,`ul`)(1065,`li`)(1066,`code`),cN(1067,`url`),ag(),Tl(1068,`em`),cN(1069,`(obrigatório)`),ag(),cN(1070,`: endpoint (proxy) de IA que traduz a consulta em linguagem natural para um filtro
estruturado (OData v4). O backend deve seguir o contrato do
`),Tl(1071,`a`,40)(1072,`code`),cN(1073,`po-sample-api`),ag()(),cN(1074,`.`),ag(),Tl(1075,`li`)(1076,`code`),cN(1077,`columns`),ag(),cN(1078,`: lista de colunas enviadas à IA; quando omitida, são derivadas de `),Tl(1079,`code`),cN(1080,`p-columns`),ag(),cN(1081,`.`),ag(),Tl(1082,`li`)(1083,`code`),cN(1084,`minConfidence`),ag(),cN(1085,`: confiança mínima para aplicação automática do filtro (padrão `),Tl(1086,`code`),cN(1087,`0.5`),ag(),cN(1088,`).`),ag(),Tl(1089,`li`)(1090,`code`),cN(1091,`timeout`),ag(),cN(1092,`: tempo máximo de espera pela resposta da IA em ms (padrão `),Tl(1093,`code`),cN(1094,`10000`),ag(),cN(1095,`).`),ag(),Tl(1096,`li`)(1097,`code`),cN(1098,`placeholder`),ag(),cN(1099,`: texto exibido como placeholder no campo.`),ag(),Tl(1100,`li`)(1101,`code`),cN(1102,`literals`),ag(),cN(1103,`: literais customizadas do `),Tl(1104,`code`),cN(1105,`po-search-ai`),ag(),cN(1106,`.`),ag(),Tl(1107,`li`)(1108,`code`),cN(1109,`apply`),ag(),cN(1110,`: estratégia de aplicação do filtro — `),Tl(1111,`code`),cN(1112,`'auto'`),ag(),cN(1113,` (padrão), `),Tl(1114,`code`),cN(1115,`'parser'`),ag(),cN(1116,`, `),Tl(1117,`code`),cN(1118,`'server'`),ag(),cN(1119,`, `),Tl(1120,`code`),cN(1121,`'none'`),ag(),cN(1122,`
ou uma fun\xE7\xE3o `),Tl(1123,`code`),cN(1124,`(result: PoSearchAiResult) => void`),ag(),cN(1125,`.`),ag()(),Tl(1126,`p`),cN(1127,`Quando esta propriedade está definida, os eventos `),Tl(1128,`code`),cN(1129,`p-search-ai-result`),ag(),cN(1130,`, `),Tl(1131,`code`),cN(1132,`p-search-ai-low-confidence`),ag(),cN(1133,`
e `),Tl(1134,`code`),cN(1135,`p-search-ai-error`),ag(),cN(1136,` ficam disponíveis para tratamento customizado.`),ag()()(),Tl(1137,`tr`,17)(1138,`td`,18)(1139,`div`,27)(1140,`span`,28),cN(1141,` (p-search-ai-low-confidence)`),Gl(1142,`br`),ag()()(),Tl(1143,`td`,21)(1144,`code`,29),cN(1145,`EventEmitter`),ag()(),Tl(1146,`td`,23),cN(1147,`-`),ag(),Tl(1148,`td`,24)(1149,`em`)(1150,`strong`),cN(1151,`(opcional)`),ag()(),Tl(1152,`p`),cN(1153,`Evento emitido quando o `),Tl(1154,`code`),cN(1155,`po-search-ai`),ag(),cN(1156,` retorna um resultado cuja confian\xE7a \xE9 inferior ao
`),Tl(1157,`code`),cN(1158,`minConfidence`),ag(),cN(1159,` configurado em `),Tl(1160,`code`),cN(1161,`p-search-ai-field`),ag(),cN(1162,`. Nesse caso, o filtro `),Tl(1163,`strong`),cN(1164,`não`),ag(),cN(1165,` \xE9 aplicado
automaticamente.`),ag(),Tl(1166,`p`),cN(1167,`O parâmetro enviado é um objeto `),Tl(1168,`code`),cN(1169,`PoSearchAiResult`),ag(),cN(1170,` com os mesmos campos de `),Tl(1171,`code`),cN(1172,`p-search-ai-result`),ag(),cN(1173,`,
permitindo que o desenvolvedor decida como tratar o resultado de baixa confian\xE7a.`),ag()()(),Tl(1174,`tr`,17)(1175,`td`,18)(1176,`div`,27)(1177,`span`,28),cN(1178,` (p-search-ai-result)`),Gl(1179,`br`),ag()()(),Tl(1180,`td`,21)(1181,`code`,29),cN(1182,`EventEmitter`),ag()(),Tl(1183,`td`,23),cN(1184,`-`),ag(),Tl(1185,`td`,24)(1186,`em`)(1187,`strong`),cN(1188,`(opcional)`),ag()(),Tl(1189,`p`),cN(1190,`Evento emitido quando o `),Tl(1191,`code`),cN(1192,`po-search-ai`),ag(),cN(1193,` retorna um resultado com confian\xE7a igual ou superior
ao `),Tl(1194,`code`),cN(1195,`minConfidence`),ag(),cN(1196,` configurado em `),Tl(1197,`code`),cN(1198,`p-search-ai-field`),ag(),cN(1199,`.`),ag(),Tl(1200,`p`),cN(1201,`O parâmetro enviado é um objeto `),Tl(1202,`code`),cN(1203,`PoSearchAiResult`),ag(),cN(1204,` contendo:`),ag(),Tl(1205,`ul`)(1206,`li`)(1207,`code`),cN(1208,`filter`),ag(),cN(1209,`: string de filtro OData v4 gerada pela IA (ex: `),Tl(1210,`code`),cN(1211,`"city eq 'SP' and salary gt 5000"`),ag(),cN(1212,`).`),ag(),Tl(1213,`li`)(1214,`code`),cN(1215,`description`),ag(),cN(1216,`: descrição em linguagem natural do filtro aplicado.`),ag(),Tl(1217,`li`)(1218,`code`),cN(1219,`confidence`),ag(),cN(1220,`: nível de confiança da resposta (0.0 a 1.0).`),ag()(),Tl(1221,`blockquote`)(1222,`p`),cN(1223,`Quando `),Tl(1224,`code`),cN(1225,`apply`),ag(),cN(1226,` for diferente de `),Tl(1227,`code`),cN(1228,`'none'`),ag(),cN(1229,`, o filtro j\xE1 \xE9 aplicado automaticamente pela tabela
antes deste evento ser emitido.`),ag()()()(),Tl(1230,`tr`,17)(1231,`td`,18)(1232,`div`,19)(1233,`span`,20),cN(1234,` p-selectable`),Gl(1235,`br`),ag()()(),Tl(1236,`td`,21)(1237,`code`,22),cN(1238,`boolean`),ag()(),Tl(1239,`td`,23)(1240,`p`)(1241,`code`),cN(1242,`false`),ag()()(),Tl(1243,`td`,24)(1244,`em`)(1245,`strong`),cN(1246,`(opcional)`),ag()(),Tl(1247,`p`),cN(1248,`Permite a seleção de linhas na tabela e, caso a propriedade `),Tl(1249,`code`),cN(1250,`p-single-select`),ag(),cN(1251,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),ag(),Tl(1252,`p`)(1253,`strong`),cN(1254,`Importante:`),ag()(),Tl(1255,`ul`)(1256,`li`),cN(1257,`As linhas de detalhe definidas em `),Tl(1258,`code`),cN(1259,`PoTableDetail`),ag(),cN(1260,` possuem comportamento independente da linha mestre;`),ag(),Tl(1261,`li`),cN(1262,`Cada linha possui por padrão a propriedade dinâmica `),Tl(1263,`code`),cN(1264,`$selected`),ag(),cN(1265,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),Tl(1266,`code`),cN(1267,`item.$selected`),ag(),cN(1268,` ou `),Tl(1269,`code`),cN(1270,`item['$selected']`),ag(),cN(1271,`.`),ag()()()(),Tl(1272,`tr`,17)(1273,`td`,18)(1274,`div`,19)(1275,`span`,20),cN(1276,` p-selectable-entire-line`),Gl(1277,`br`),ag()()(),Tl(1278,`td`,21)(1279,`code`,22),cN(1280,`boolean`),ag()(),Tl(1281,`td`,23)(1282,`p`)(1283,`code`),cN(1284,`true`),ag()()(),Tl(1285,`td`,24)(1286,`p`),cN(1287,`Permite selecionar um item da tabela clicando na linha.`),ag(),Tl(1288,`blockquote`)(1289,`p`),cN(1290,`Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como `),Tl(1291,`code`),cN(1292,`false`),ag(),cN(1293,`.`),ag()()()(),Tl(1294,`tr`,17)(1295,`td`,18)(1296,`div`,27)(1297,`span`,28),cN(1298,` (p-selected)`),Gl(1299,`br`),ag()()(),Tl(1300,`td`,21)(1301,`code`,29),cN(1302,`EventEmitter`),ag()(),Tl(1303,`td`,23),cN(1304,`-`),ag(),Tl(1305,`td`,24)(1306,`em`)(1307,`strong`),cN(1308,`(opcional)`),ag()(),Tl(1309,`p`),cN(1310,`Evento executado ao selecionar uma linha do `),Tl(1311,`code`),cN(1312,`po-table`),ag(),cN(1313,`.`),ag()()(),Tl(1314,`tr`,17)(1315,`td`,18)(1316,`div`,19)(1317,`span`,20),cN(1318,` p-service-api`),Gl(1319,`br`),ag()()(),Tl(1320,`td`,21)(1321,`code`,31),cN(1322,`string`),ag()(),Tl(1323,`td`,23),cN(1324,`-`),ag(),Tl(1325,`td`,24)(1326,`em`)(1327,`strong`),cN(1328,`(opcional)`),ag()(),Tl(1329,`p`),cN(1330,`URL da API responsável por retornar os registros.`),ag(),Tl(1331,`p`),cN(1332,`Ao realizar a busca de mais registros via paginação (Carregar mais resultados), será enviado os parâmetros `),Tl(1333,`code`),cN(1334,`page`),ag(),cN(1335,` e `),Tl(1336,`code`),cN(1337,`pageSize`),ag(),cN(1338,`, conforme abaixo:`),ag(),Tl(1339,`pre`)(1340,`code`),cN(1341,`url + ?page=1&pageSize=10
`),ag()(),Tl(1342,`p`),cN(1343,`Caso utilizar ordenação, a coluna ordenada será enviada através do parâmetro `),Tl(1344,`code`),cN(1345,`order`),ag(),cN(1346,`, por exemplo:`),ag(),Tl(1347,`ul`)(1348,`li`)(1349,`p`),cN(1350,`Coluna decrescente:`),ag(),Tl(1351,`pre`)(1352,`code`),cN(1353,`url + ?page=1&pageSize=10&order=-name
`),ag()()(),Tl(1354,`li`)(1355,`p`),cN(1356,`Coluna ascendente:`),ag(),Tl(1357,`pre`)(1358,`code`),cN(1359,`url + ?page=1&pageSize=10&order=name
`),ag()()()(),Tl(1360,`blockquote`)(1361,`p`),cN(1362,`Esta URL deve retornar e receber os dados no padrão de `),Tl(1363,`a`,41),cN(1364,`API do PO UI`),ag(),cN(1365,`.`),ag()()()(),Tl(1366,`tr`,17)(1367,`td`,18)(1368,`div`,19)(1369,`span`,20),cN(1370,` p-service-delete`),Gl(1371,`br`),ag()()(),Tl(1372,`td`,21)(1373,`code`,31),cN(1374,`string`),ag()(),Tl(1375,`td`,23),cN(1376,`-`),ag(),Tl(1377,`td`,24)(1378,`em`)(1379,`strong`),cN(1380,`(opcional)`),ag()(),Tl(1381,`p`),cN(1382,`URL da API responsável por excluir os registros.`),ag(),Tl(1383,`p`),cN(1384,`Ao selecionar o botão de excluir itens, essa url será executada utilizando o parâmetro enviado na propriedade `),Tl(1385,`code`),cN(1386,`p-param-delete-api`),ag(),cN(1387,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),Tl(1388,`code`),cN(1389,`id`),ag(),cN(1390,`.`),ag(),Tl(1391,`blockquote`)(1392,`p`),cN(1393,`Esta URL deve retornar e receber os dados no padrão de `),Tl(1394,`a`,41),cN(1395,`API do PO UI`),ag(),cN(1396,`.`),ag()()()(),Tl(1397,`tr`,17)(1398,`td`,18)(1399,`div`,27)(1400,`span`,28),cN(1401,` (p-show-more)`),Gl(1402,`br`),ag()()(),Tl(1403,`td`,21)(1404,`code`,29),cN(1405,`EventEmitter`),ag()(),Tl(1406,`td`,23),cN(1407,`-`),ag(),Tl(1408,`td`,24)(1409,`em`)(1410,`strong`),cN(1411,`(opcional)`),ag()(),Tl(1412,`p`),cN(1413,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),ag(),Tl(1414,`p`),cN(1415,`Recebe um objeto `),Tl(1416,`code`),cN(1417,`{ column, type }`),ag(),cN(1418,` onde:`),ag(),Tl(1419,`ul`)(1420,`li`),cN(1421,`column (`),Tl(1422,`code`),cN(1423,`PoTableColumn`),ag(),cN(1424,`): objeto da coluna que está ordenada.`),ag(),Tl(1425,`li`),cN(1426,`type (`),Tl(1427,`code`),cN(1428,`PoTableColumnSortType`),ag(),cN(1429,`): tipo da ordenação.`),ag()()()(),Tl(1430,`tr`,17)(1431,`td`,18)(1432,`div`,19)(1433,`span`,20),cN(1434,` p-show-more-disabled`),Gl(1435,`br`),ag()()(),Tl(1436,`td`,21)(1437,`code`,22),cN(1438,`boolean`),ag()(),Tl(1439,`td`,23)(1440,`p`)(1441,`code`),cN(1442,`false`),ag()()(),Tl(1443,`td`,24)(1444,`p`),cN(1445,`Se verdadeiro, torna habilitado o botão "Carregar mais resultados".`),ag()()(),Tl(1446,`tr`,17)(1447,`td`,18)(1448,`div`,19)(1449,`span`,20),cN(1450,` p-single-select`),Gl(1451,`br`),ag()()(),Tl(1452,`td`,21)(1453,`code`,22),cN(1454,`boolean`),ag()(),Tl(1455,`td`,23),cN(1456,`-`),ag(),Tl(1457,`td`,24)(1458,`p`),cN(1459,`Define que somente uma linha da tabela pode ser selecionada.`),ag(),Tl(1460,`blockquote`)(1461,`p`),cN(1462,`Esta definição não se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai.`),ag()()()(),Tl(1463,`tr`,17)(1464,`td`,18)(1465,`div`,19)(1466,`span`,20),cN(1467,` p-sort`),Gl(1468,`br`),ag()()(),Tl(1469,`td`,21)(1470,`code`,22),cN(1471,`boolean`),ag()(),Tl(1472,`td`,23)(1473,`p`)(1474,`code`),cN(1475,`false`),ag()()(),Tl(1476,`td`,24)(1477,`em`)(1478,`strong`),cN(1479,`(opcional)`),ag()(),Tl(1480,`p`),cN(1481,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),ag()()(),Tl(1482,`tr`,17)(1483,`td`,18)(1484,`div`,27)(1485,`span`,28),cN(1486,` (p-sort-by)`),Gl(1487,`br`),ag()()(),Tl(1488,`td`,21)(1489,`code`,29),cN(1490,`EventEmitter`),ag()(),Tl(1491,`td`,23),cN(1492,`-`),ag(),Tl(1493,`td`,24)(1494,`em`)(1495,`strong`),cN(1496,`(opcional)`),ag()(),Tl(1497,`p`),cN(1498,`Evento executado ao ordenar colunas da tabela.`),ag(),Tl(1499,`p`),cN(1500,`Recebe um objeto `),Tl(1501,`code`),cN(1502,`{ column, type }`),ag(),cN(1503,` onde:`),ag(),Tl(1504,`ul`)(1505,`li`),cN(1506,`column (`),Tl(1507,`code`),cN(1508,`PoTableColumn`),ag(),cN(1509,`): objeto da coluna que foi clicada/ordenada.`),ag(),Tl(1510,`li`),cN(1511,`type (`),Tl(1512,`code`),cN(1513,`PoTableColumnSortType`),ag(),cN(1514,`): tipo da ordenação.`),ag()()()(),Tl(1515,`tr`,17)(1516,`td`,18)(1517,`div`,19)(1518,`span`,20),cN(1519,` p-spacing`),Gl(1520,`br`),ag()()(),Tl(1521,`td`,21)(1522,`code`,31),cN(1523,`string`),ag()(),Tl(1524,`td`,23)(1525,`p`)(1526,`code`),cN(1527,`medium`),ag()()(),Tl(1528,`td`,24)(1529,`em`)(1530,`strong`),cN(1531,`(opcional)`),ag()(),Tl(1532,`p`),cN(1533,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),Tl(1534,`strong`),cN(1535,`PoTableColumnSpacing`),ag(),cN(1536,`.`),ag(),Tl(1537,`blockquote`)(1538,`p`),cN(1539,`Em nível de acessibilidade `),Tl(1540,`strong`),cN(1541,`AA`),ag(),cN(1542,`, caso o valor de `),Tl(1543,`code`),cN(1544,`p-spacing`),ag(),cN(1545,` não seja definido, o valor padrão será `),Tl(1546,`code`),cN(1547,`extraSmall`),ag(),cN(1548,`
nos seguintes cen\xE1rios:`),ag(),Tl(1549,`ul`)(1550,`li`),cN(1551,`Quando o valor de `),Tl(1552,`code`),cN(1553,`p-components-size`),ag(),cN(1554,` for `),Tl(1555,`code`),cN(1556,`small`),ag(),cN(1557,`;`),ag(),Tl(1558,`li`),cN(1559,`Quando o valor padrão dos componentes for configurado como `),Tl(1560,`code`),cN(1561,`small`),ag(),cN(1562,` no
`),Tl(1563,`a`,32),cN(1564,`serviço de tema`),ag(),cN(1565,`.`),ag()()()()(),Tl(1566,`tr`,17)(1567,`td`,18)(1568,`div`,19)(1569,`span`,20),cN(1570,` p-striped`),Gl(1571,`br`),ag()()(),Tl(1572,`td`,21)(1573,`code`,22),cN(1574,`boolean`),ag()(),Tl(1575,`td`,23)(1576,`p`)(1577,`code`),cN(1578,`false`),ag()()(),Tl(1579,`td`,24)(1580,`p`),cN(1581,`Habilita ou desabilita o estilo listrado da tabela (`),Tl(1582,`code`),cN(1583,`striped`),ag(),cN(1584,`).`),ag(),Tl(1585,`blockquote`)(1586,`p`),cN(1587,`Recomendado para tabelas com maior número de dados, facilitando a sua visualização na tabela.`),ag()()()(),Tl(1588,`tr`,17)(1589,`td`,18)(1590,`div`,19)(1591,`span`,20),cN(1592,` p-text-wrap`),Gl(1593,`br`),ag()()(),Tl(1594,`td`,21)(1595,`code`,22),cN(1596,`boolean`),ag()(),Tl(1597,`td`,23)(1598,`p`)(1599,`code`),cN(1600,`false`),ag()()(),Tl(1601,`td`,24)(1602,`em`)(1603,`strong`),cN(1604,`(opcional)`),ag()(),Tl(1605,`p`),cN(1606,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag(),Tl(1607,`blockquote`)(1608,`p`),cN(1609,`Incompatível com `),Tl(1610,`code`),cN(1611,`virtual-scroll`),ag(),cN(1612,`, que requer altura fixa nas linhas.`),ag()()()(),Tl(1613,`tr`,17)(1614,`td`,18)(1615,`div`,27)(1616,`span`,28),cN(1617,` (p-unselected)`),Gl(1618,`br`),ag()()(),Tl(1619,`td`,21)(1620,`code`,29),cN(1621,`EventEmitter`),ag()(),Tl(1622,`td`,23),cN(1623,`-`),ag(),Tl(1624,`td`,24)(1625,`em`)(1626,`strong`),cN(1627,`(opcional)`),ag()(),Tl(1628,`p`),cN(1629,`Evento executado ao desmarcar a seleção de uma linha do `),Tl(1630,`code`),cN(1631,`po-table`),ag(),cN(1632,`.`),ag()()(),Tl(1633,`tr`,17)(1634,`td`,18)(1635,`div`,19)(1636,`span`,20),cN(1637,` p-virtual-scroll`),Gl(1638,`br`),ag()()(),Tl(1639,`td`,21)(1640,`code`,22),cN(1641,`boolean`),ag()(),Tl(1642,`td`,23)(1643,`p`)(1644,`code`),cN(1645,`true`),ag()()(),Tl(1646,`td`,24)(1647,`em`)(1648,`strong`),cN(1649,`(opcional)`),ag()(),Tl(1650,`p`),cN(1651,`Habilita o `),Tl(1652,`code`),cN(1653,`virtual-scroll`),ag(),cN(1654,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),Tl(1655,`code`),cN(1656,`p-height`),ag(),cN(1657,`) para funcionar corretamente.`),ag(),Tl(1658,`blockquote`)(1659,`p`),cN(1660,`Incompatível com `),Tl(1661,`code`),cN(1662,`p-text-wrap`),ag(),cN(1663,` e `),Tl(1664,`code`),cN(1665,`master-detail`),ag(),cN(1666,`, pois o `),Tl(1667,`code`),cN(1668,`virtual-scroll`),ag(),cN(1669,` exige altura fixa nas linhas.`),ag()()()()(),Tl(1670,`h3`,13),cN(1671,`Métodos`),ag(),Tl(1672,`table`,42)(1673,`tr`,17)(1674,`th`,43)(1675,`div`,19)(1676,`h4`)(1677,`span`,20),cN(1678,` applyFilters `),ag()()()()(),Tl(1679,`tr`,24)(1680,`td`,24)(1681,`p`),cN(1682,`Método responsável por realizar busca no serviço de dados podendo informar filtros e com o retorno, atualiza a tabela.`),ag(),Tl(1683,`p`),cN(1684,`Caso não seja informado parâmetro, nada será adicionado ao GET, conforme abaixo:`),ag(),Tl(1685,`pre`)(1686,`code`),cN(1687,`url + ?page=1&pageSize=10
`),ag()(),Tl(1688,`blockquote`)(1689,`p`),cN(1690,`Obs: os parâmetros `),Tl(1691,`code`),cN(1692,`page`),ag(),cN(1693,` e `),Tl(1694,`code`),cN(1695,`pageSize`),ag(),cN(1696,` sempre serão chamados independente de ser enviados outros parâmetros.`),ag()(),Tl(1697,`p`),cN(1698,`Caso sejam informados os parâmetros `),Tl(1699,`code`),cN(1700,`{ name: 'JOHN', age: '23' }`),ag(),cN(1701,`, todos serão adicionados ao GET, conforme abaixo:`),ag(),Tl(1702,`pre`)(1703,`code`),cN(1704,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),ag()()()()(),Tl(1705,`h5`)(1706,`b`),cN(1707,`Parâmetros`),ag()(),Tl(1708,`table`,14)(1709,`tr`,15)(1710,`th`,16),cN(1711,`Nome`),ag(),Tl(1712,`th`,16),cN(1713,`Tipo`),ag(),Tl(1714,`th`,16),cN(1715,`Descrição`),ag()(),Tl(1716,`tr`,17)(1717,`td`,18),cN(1718,` queryParams`),ag(),Tl(1719,`td`,21)(1720,`code`,44),cN(1721,` { key: value } `),ag()(),Tl(1722,`td`,24)(1723,`p`),cN(1724,`Formato do objeto a ser enviado.`),ag(),Tl(1725,`blockquote`)(1726,`p`),cN(1727,`Pode ser utilizada qualquer string como key, e qualquer string ou number como value.`),ag()()()()(),Gl(1728,`br`),Tl(1729,`table`,42)(1730,`tr`,17)(1731,`th`,43)(1732,`div`,19)(1733,`h4`)(1734,`span`,20),cN(1735,` applyFixedColumns `),ag()()()()(),Tl(1736,`tr`,24)(1737,`td`,24)(1738,`p`),cN(1739,`Verifica se columns possuem a propriedade width.`),ag()()()(),Gl(1740,`br`),Tl(1741,`table`,42)(1742,`tr`,17)(1743,`th`,43)(1744,`div`,19)(1745,`h4`)(1746,`span`,20),cN(1747,` collapse `),ag()()()()(),Tl(1748,`tr`,24)(1749,`td`,24)(1750,`p`),cN(1751,`Método que colapsa uma linha com detalhe quando executada.`),ag()()()(),Tl(1752,`h5`)(1753,`b`),cN(1754,`Parâmetros`),ag()(),Tl(1755,`table`,14)(1756,`tr`,15)(1757,`th`,16),cN(1758,`Nome`),ag(),Tl(1759,`th`,16),cN(1760,`Tipo`),ag(),Tl(1761,`th`,16),cN(1762,`Descrição`),ag()(),Tl(1763,`tr`,17)(1764,`td`,18),cN(1765,` rowIndex`),ag(),Tl(1766,`td`,21)(1767,`code`,45),cN(1768,` number `),ag()(),Tl(1769,`td`,24)(1770,`p`),cN(1771,`Índice da linha que será colapsada.`),ag(),Tl(1772,`blockquote`)(1773,`p`),cN(1774,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),ag()()()()(),Gl(1775,`br`),Tl(1776,`table`,42)(1777,`tr`,17)(1778,`th`,43)(1779,`div`,19)(1780,`h4`)(1781,`span`,20),cN(1782,` expand `),ag()()()()(),Tl(1783,`tr`,24)(1784,`td`,24)(1785,`p`),cN(1786,`Método que expande uma linha com detalhe quando executada.`),ag()()()(),Tl(1787,`h5`)(1788,`b`),cN(1789,`Parâmetros`),ag()(),Tl(1790,`table`,14)(1791,`tr`,15)(1792,`th`,16),cN(1793,`Nome`),ag(),Tl(1794,`th`,16),cN(1795,`Tipo`),ag(),Tl(1796,`th`,16),cN(1797,`Descrição`),ag()(),Tl(1798,`tr`,17)(1799,`td`,18),cN(1800,` rowIndex`),ag(),Tl(1801,`td`,21)(1802,`code`,45),cN(1803,` number `),ag()(),Tl(1804,`td`,24)(1805,`p`),cN(1806,`Índice da linha que será expandida.`),ag(),Tl(1807,`blockquote`)(1808,`p`),cN(1809,`Ao reordenar os dados da tabela, o valor contido neste índice será alterado conforme a ordenação.`),ag()()()()(),Gl(1810,`br`),Tl(1811,`table`,42)(1812,`tr`,17)(1813,`th`,43)(1814,`div`,19)(1815,`h4`)(1816,`span`,20),cN(1817,` getSelectedRows `),ag()()()()(),Tl(1818,`tr`,24)(1819,`td`,24)(1820,`p`),cN(1821,`Retorna as linhas do `),Tl(1822,`code`),cN(1823,`po-table`),ag(),cN(1824,` que estão selecionadas.`),ag()()()(),Gl(1825,`br`),Tl(1826,`table`,42)(1827,`tr`,17)(1828,`th`,43)(1829,`div`,19)(1830,`h4`)(1831,`span`,20),cN(1832,` getUnselectedRows `),ag()()()()(),Tl(1833,`tr`,24)(1834,`td`,24)(1835,`p`),cN(1836,`Retorna as linhas do `),Tl(1837,`code`),cN(1838,`po-table`),ag(),cN(1839,` que não estão selecionadas.`),ag()()()(),Gl(1840,`br`),Tl(1841,`table`,42)(1842,`tr`,17)(1843,`th`,43)(1844,`div`,19)(1845,`h4`)(1846,`span`,20),cN(1847,` unselectRows `),ag()()()()(),Tl(1848,`tr`,24)(1849,`td`,24)(1850,`p`),cN(1851,`Desmarca as linhas que estão selecionadas.`),ag()()()(),Gl(1852,`br`),Tl(1853,`table`,42)(1854,`tr`,17)(1855,`th`,43)(1856,`div`,19)(1857,`h4`)(1858,`span`,20),cN(1859,` unselectRowItem `),ag()()()()(),Tl(1860,`tr`,24)(1861,`td`,24)(1862,`p`),cN(1863,`Desmarca uma linha que está selecionada.`),ag()()()(),Gl(1864,`br`),Tl(1865,`table`,42)(1866,`tr`,17)(1867,`th`,43)(1868,`div`,19)(1869,`h4`)(1870,`span`,20),cN(1871,` selectRowItem `),ag()()()()(),Tl(1872,`tr`,24)(1873,`td`,24)(1874,`p`),cN(1875,`Seleciona uma linha do 'po-table'.`),ag()()()(),Gl(1876,`br`),Tl(1877,`table`,42)(1878,`tr`,17)(1879,`th`,43)(1880,`div`,19)(1881,`h4`)(1882,`span`,20),cN(1883,` deleteItems `),ag()()()()(),Tl(1884,`tr`,24)(1885,`td`,24)(1886,`p`),cN(1887,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),Tl(1888,`code`),cN(1889,`p-service-delete`),ag(),cN(1890,`, será necessário excluir 1 item por vez.`),ag(),Tl(1891,`p`),cN(1892,`Ao utilizar `),Tl(1893,`code`),cN(1894,`p-service-delete`),ag(),cN(1895,` mas sem a propriedade `),Tl(1896,`code`),cN(1897,`p-service-api`),ag(),cN(1898,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),ag(),Tl(1899,`p`),cN(1900,`Caso a tabela utilize `),Tl(1901,`code`),cN(1902,`p-height`),ag(),cN(1903,` e esteja sem serviço, é necessário a reatribuição dos itens utilizando o evento `),Tl(1904,`code`),cN(1905,`(p-delete-items)`),ag(),cN(1906,`, por exemplo:`),ag(),Tl(1907,`pre`)(1908,`code`),cN(1909,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),ag()()()()(),Gl(1910,`br`),Tl(1911,`table`,42)(1912,`tr`,17)(1913,`th`,43)(1914,`div`,19)(1915,`h4`)(1916,`span`,20),cN(1917,` updateSearchAIQuery `),ag()()()()(),Tl(1918,`tr`,24)(1919,`td`,24)(1920,`p`),cN(1921,`Atualiza programaticamente o valor do campo de busca por IA (`),Tl(1922,`code`),cN(1923,`po-search-ai`),ag(),cN(1924,`) integrado \xE0 tabela
via `),Tl(1925,`code`),cN(1926,`p-search-ai-field`),ag(),cN(1927,`.`),ag(),Tl(1928,`p`),cN(1929,`\xDAtil quando a aplica\xE7\xE3o precisa preencher a busca a partir de uma a\xE7\xE3o externa (por exemplo, o
clique em um bot\xE3o que sugere uma consulta pronta), opcionalmente disparando a busca em seguida.`),ag(),Tl(1930,`blockquote`)(1931,`p`),cN(1932,`Só tem efeito quando a propriedade `),Tl(1933,`code`),cN(1934,`p-search-ai-field`),ag(),cN(1935,` est\xE1 configurada. Caso contr\xE1rio, o m\xE9todo
n\xE3o executa nenhuma a\xE7\xE3o.`),ag()()()()(),Tl(1936,`h5`)(1937,`b`),cN(1938,`Parâmetros`),ag()(),Tl(1939,`table`,14)(1940,`tr`,15)(1941,`th`,16),cN(1942,`Nome`),ag(),Tl(1943,`th`,16),cN(1944,`Tipo`),ag(),Tl(1945,`th`,16),cN(1946,`Descrição`),ag()(),Tl(1947,`tr`,17)(1948,`td`,18),cN(1949,` value`),ag(),Tl(1950,`td`,21)(1951,`code`,45),cN(1952,` string `),ag()(),Tl(1953,`td`,24)(1954,`p`),cN(1955,`Texto da consulta a ser inserido no campo de busca por IA.`),ag()()(),Tl(1956,`tr`,17)(1957,`td`,18),cN(1958,` triggerSearch`),ag(),Tl(1959,`td`,21)(1960,`code`,45),cN(1961,` boolean `),ag()(),Tl(1962,`td`,24)(1963,`p`),cN(1964,`Quando `),Tl(1965,`code`),cN(1966,`true`),ag(),cN(1967,`, dispara automaticamente a busca ap\xF3s preencher o
valor. Quando `),Tl(1968,`code`),cN(1969,`false`),ag(),Tl(1970,`em`),cN(1971,`(padrão)`),ag(),cN(1972,`, apenas preenche o campo.`),ag()()()(),Gl(1973,`br`),Tl(1974,`table`,42)(1975,`tr`,17)(1976,`th`,43)(1977,`div`,19)(1978,`h4`)(1979,`span`,20),cN(1980,` removeItem `),ag()()()()(),Tl(1981,`tr`,24)(1982,`td`,24)(1983,`p`),cN(1984,`Método que remove um item da tabela.`),ag()()()(),Tl(1985,`h5`)(1986,`b`),cN(1987,`Parâmetros`),ag()(),Tl(1988,`table`,14)(1989,`tr`,15)(1990,`th`,16),cN(1991,`Nome`),ag(),Tl(1992,`th`,16),cN(1993,`Tipo`),ag(),Tl(1994,`th`,16),cN(1995,`Descrição`),ag()(),Tl(1996,`tr`,17)(1997,`td`,18),cN(1998,` item`),ag(),Tl(1999,`td`,21)(2e3,`code`,35),cN(2001,` number `),ag(),Tl(2002,`code`,44),cN(2003,` { key: value } `),ag()(),Tl(2004,`td`,24)(2005,`p`),cN(2006,`Índice da linha ou o item que será removido.`),ag(),Tl(2007,`blockquote`)(2008,`p`),cN(2009,`Ao remover o item, a linha que o representa será excluída da tabela.`),ag()()()()(),Gl(2010,`br`),Tl(2011,`table`,42)(2012,`tr`,17)(2013,`th`,43)(2014,`div`,19)(2015,`h4`)(2016,`span`,20),cN(2017,` updateItem `),ag()()()()(),Tl(2018,`tr`,24)(2019,`td`,24)(2020,`p`),cN(2021,`Método que atualiza um item da tabela.`),ag()()()(),Tl(2022,`h5`)(2023,`b`),cN(2024,`Parâmetros`),ag()(),Tl(2025,`table`,14)(2026,`tr`,15)(2027,`th`,16),cN(2028,`Nome`),ag(),Tl(2029,`th`,16),cN(2030,`Tipo`),ag(),Tl(2031,`th`,16),cN(2032,`Descrição`),ag()(),Tl(2033,`tr`,17)(2034,`td`,18),cN(2035,` item`),ag(),Tl(2036,`td`,21)(2037,`code`,35),cN(2038,` number `),ag(),Tl(2039,`code`,44),cN(2040,` { key: value } `),ag()(),Tl(2041,`td`,24)(2042,`p`),cN(2043,`Índice da linha ou o item que será atualizado.`),ag()()(),Tl(2044,`tr`,17)(2045,`td`,18),cN(2046,` updatedItem`),ag(),Tl(2047,`td`,21)(2048,`code`,44),cN(2049,` { key: value } `),ag()(),Tl(2050,`td`,24)(2051,`p`),cN(2052,`Item que foi atualizado.`),ag(),Tl(2053,`blockquote`)(2054,`p`),cN(2055,`Ao atualizar o item, a informação será alterada na tabela.`),ag()()()()(),Gl(2056,`br`),Tl(2057,`h3`),cN(2058,`Interfaces`),ag(),Tl(2059,`h4`,46)(2060,`code`,5),cN(2061,`PoTableAction`),ag()(),Tl(2062,`div`,2)(2063,`p`),cN(2064,`Interface para lista de ações do componente. `),ag()(),Tl(2065,`h4`,13),cN(2066,`Propriedades`),ag(),Tl(2067,`table`,14)(2068,`tr`,15)(2069,`th`,16),cN(2070,`Nome`),ag(),Tl(2071,`th`,16),cN(2072,`Tipo`),ag(),Tl(2073,`th`,16),cN(2074,`Descrição`),ag()(),Tl(2075,`tr`,17)(2076,`td`,18)(2077,`div`,19)(2078,`span`,20),cN(2079,` action`),Gl(2080,`br`),ag()()(),Tl(2081,`td`,21)(2082,`code`,47),cN(2083,`Function`),ag()(),Tl(2084,`td`,24)(2085,`em`)(2086,`strong`),cN(2087,`(opcional)`),ag()(),Tl(2088,`p`),cN(2089,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),ag(),Tl(2090,`p`),cN(2091,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),Tl(2092,`code`),cN(2093,`subItems`),ag(),cN(2094,`.`),ag(),Tl(2095,`blockquote`)(2096,`p`),cN(2097,`Para que a função seja executada no contexto do componente, utilize `),Tl(2098,`em`),cN(2099,`bind`),ag(),cN(2100,`:
`),Tl(2101,`code`),cN(2102,`action: this.myFunction.bind(this)`),ag()()()()(),Tl(2103,`tr`,17)(2104,`td`,18)(2105,`div`,19)(2106,`span`,20),cN(2107,` disabled`),Gl(2108,`br`),ag()()(),Tl(2109,`td`,21)(2110,`code`,22),cN(2111,`boolean `),ag(),Tl(2112,`code`,47),cN(2113,` Function`),ag()(),Tl(2114,`td`,24)(2115,`em`)(2116,`strong`),cN(2117,`(opcional)`),ag()(),Tl(2118,`p`),cN(2119,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()(),Tl(2120,`tr`,17)(2121,`td`,18)(2122,`div`,19)(2123,`span`,20),cN(2124,` icon`),Gl(2125,`br`),ag()()(),Tl(2126,`td`,21)(2127,`code`,31),cN(2128,`string `),ag(),Tl(2129,`code`,48),cN(2130,` TemplateRef<void>`),ag()(),Tl(2131,`td`,24)(2132,`em`)(2133,`strong`),cN(2134,`(opcional)`),ag()(),Tl(2135,`p`),cN(2136,`Ícone exibido ao lado esquerdo do rótulo.`),ag(),Tl(2137,`p`),cN(2138,`Aceita ícones da `),Tl(2139,`a`,26),cN(2140,`Biblioteca de ícones`),ag(),cN(2141,`, fontes externas (ex: Font Awesome)
ou um `),Tl(2142,`code`),cN(2143,`TemplateRef`),ag(),cN(2144,` para ícones customizados.`),ag(),Tl(2145,`pre`)(2146,`code`),cN(2147,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),ag()()()(),Tl(2148,`tr`,17)(2149,`td`,18)(2150,`div`,19)(2151,`span`,20),cN(2152,` label`),Gl(2153,`br`),ag()()(),Tl(2154,`td`,21)(2155,`code`,31),cN(2156,`string`),ag()(),Tl(2157,`td`,24)(2158,`p`),cN(2159,`Rótulo da ação.`),ag(),Tl(2160,`p`),cN(2161,`A label também pode representar o agrupador de subitens quando a ação possuir `),Tl(2162,`code`),cN(2163,`subItems`),ag(),cN(2164,`.`),ag()()(),Tl(2165,`tr`,17)(2166,`td`,18)(2167,`div`,19)(2168,`span`,20),cN(2169,` selected`),Gl(2170,`br`),ag()()(),Tl(2171,`td`,21)(2172,`code`,22),cN(2173,`boolean`),ag()(),Tl(2174,`td`,24)(2175,`em`)(2176,`strong`),cN(2177,`(opcional)`),ag()(),Tl(2178,`p`),cN(2179,`Define se a ação está selecionada.`),ag()()(),Tl(2180,`tr`,17)(2181,`td`,18)(2182,`div`,19)(2183,`span`,20),cN(2184,` separator`),Gl(2185,`br`),ag()()(),Tl(2186,`td`,21)(2187,`code`,22),cN(2188,`boolean`),ag()(),Tl(2189,`td`,24)(2190,`em`)(2191,`strong`),cN(2192,`(opcional)`),ag()(),Tl(2193,`p`),cN(2194,`Atribui uma linha separadora acima do item.`),ag()()(),Tl(2195,`tr`,17)(2196,`td`,18)(2197,`div`,19)(2198,`span`,20),cN(2199,` subItems`),Gl(2200,`br`),ag()()(),Tl(2201,`td`,21)(2202,`code`,49),cN(2203,`Array<PoPopupAction>`),ag()(),Tl(2204,`td`,24)(2205,`em`)(2206,`strong`),cN(2207,`(opcional)`),ag()(),Tl(2208,`p`),cN(2209,`Define uma lista de subitens para criação de menus aninhados.`),ag(),Tl(2210,`p`),cN(2211,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),ag(),Tl(2212,`blockquote`)(2213,`p`),cN(2214,`As propriedades `),Tl(2215,`code`),cN(2216,`disabled`),ag(),cN(2217,`, `),Tl(2218,`code`),cN(2219,`type`),ag(),cN(2220,` e `),Tl(2221,`code`),cN(2222,`visible`),ag(),cN(2223,` não são aplicadas visualmente ao item agrupador.`),ag()(),Tl(2224,`blockquote`)(2225,`p`),cN(2226,`Quando `),Tl(2227,`code`),cN(2228,`url`),ag(),cN(2229,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),ag()(),Tl(2230,`blockquote`)(2231,`p`),cN(2232,`Em subníveis aninhados, o `),Tl(2233,`code`),cN(2234,`icon`),ag(),cN(2235,` do agrupador é substituído pelo indicador de navegação (seta).`),ag()()()(),Tl(2236,`tr`,17)(2237,`td`,18)(2238,`div`,19)(2239,`span`,20),cN(2240,` type`),Gl(2241,`br`),ag()()(),Tl(2242,`td`,21)(2243,`code`,31),cN(2244,`string`),ag()(),Tl(2245,`td`,24)(2246,`em`)(2247,`strong`),cN(2248,`(opcional)`),ag()(),Tl(2249,`p`),cN(2250,`Define a cor do item.`),ag(),Tl(2251,`p`),cN(2252,`Valores válidos:`),ag(),Tl(2253,`ul`)(2254,`li`)(2255,`code`),cN(2256,`default`),ag()(),Tl(2257,`li`)(2258,`code`),cN(2259,`danger`),ag()()()()(),Tl(2260,`tr`,17)(2261,`td`,18)(2262,`div`,19)(2263,`span`,20),cN(2264,` url`),Gl(2265,`br`),ag()()(),Tl(2266,`td`,21)(2267,`code`,31),cN(2268,`string`),ag()(),Tl(2269,`td`,24)(2270,`em`)(2271,`strong`),cN(2272,`(opcional)`),ag()(),Tl(2273,`p`),cN(2274,`URL para redirecionamento. Aceita rotas internas e links externos.`),ag(),Tl(2275,`p`),cN(2276,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),Tl(2277,`code`),cN(2278,`url`),ag(),cN(2279,` é informada em um agrupador, o clique `),Tl(2280,`strong`),cN(2281,`não abrirá os subitens`),ag(),cN(2282,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),ag(),Tl(2283,`blockquote`)(2284,`p`),cN(2285,`Quando informada, tem prioridade sobre a propriedade `),Tl(2286,`code`),cN(2287,`action`),ag(),cN(2288,`.`),ag()()()(),Tl(2289,`tr`,17)(2290,`td`,18)(2291,`div`,19)(2292,`span`,20),cN(2293,` visible`),Gl(2294,`br`),ag()()(),Tl(2295,`td`,21)(2296,`code`,22),cN(2297,`boolean `),ag(),Tl(2298,`code`,47),cN(2299,` Function`),ag()(),Tl(2300,`td`,24)(2301,`em`)(2302,`strong`),cN(2303,`(opcional)`),ag()(),Tl(2304,`p`),cN(2305,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),ag()()()(),Tl(2306,`h4`,46)(2307,`code`,5),cN(2308,`PoTableBoolean`),ag()(),Tl(2309,`div`,2)(2310,`p`),cN(2311,`Interface que define as colunas booleanas do `),Tl(2312,`code`),cN(2313,`po-table`),ag(),cN(2314,`.`),ag()(),Tl(2315,`h4`,13),cN(2316,`Propriedades`),ag(),Tl(2317,`table`,14)(2318,`tr`,15)(2319,`th`,16),cN(2320,`Nome`),ag(),Tl(2321,`th`,16),cN(2322,`Tipo`),ag(),Tl(2323,`th`,16),cN(2324,`Descrição`),ag()(),Tl(2325,`tr`,17)(2326,`td`,18)(2327,`div`,19)(2328,`span`,20),cN(2329,` falseLabel`),Gl(2330,`br`),ag()()(),Tl(2331,`td`,21)(2332,`code`,31),cN(2333,`string`),ag()(),Tl(2334,`td`,24)(2335,`em`)(2336,`strong`),cN(2337,`(opcional)`),ag()(),Tl(2338,`p`),cN(2339,`Define o rótulo para valores `),Tl(2340,`code`),cN(2341,`false`),ag(),cN(2342,`.`),ag()()(),Tl(2343,`tr`,17)(2344,`td`,18)(2345,`div`,19)(2346,`span`,20),cN(2347,` trueLabel`),Gl(2348,`br`),ag()()(),Tl(2349,`td`,21)(2350,`code`,31),cN(2351,`string`),ag()(),Tl(2352,`td`,24)(2353,`em`)(2354,`strong`),cN(2355,`(opcional)`),ag()(),Tl(2356,`p`),cN(2357,`Define o rótulo para valores `),Tl(2358,`code`),cN(2359,`true`),ag(),cN(2360,`.`),ag()()()(),Tl(2361,`h4`,46)(2362,`code`,5),cN(2363,`PoTableColumnSort`),ag()(),Tl(2364,`div`,2)(2365,`p`),cN(2366,`Interface para ordenação das colunas do componente table.`),ag()(),Tl(2367,`h4`,13),cN(2368,`Propriedades`),ag(),Tl(2369,`table`,14)(2370,`tr`,15)(2371,`th`,16),cN(2372,`Nome`),ag(),Tl(2373,`th`,16),cN(2374,`Tipo`),ag(),Tl(2375,`th`,16),cN(2376,`Descrição`),ag()(),Tl(2377,`tr`,17)(2378,`td`,18)(2379,`div`,19)(2380,`span`,20),cN(2381,` column`),Gl(2382,`br`),ag()()(),Tl(2383,`td`,21)(2384,`code`,50),cN(2385,`PoTableColumn`),ag()(),Tl(2386,`td`,24)(2387,`em`)(2388,`strong`),cN(2389,`(opcional)`),ag()(),Tl(2390,`p`),cN(2391,`Coluna pela qual a tabela está ordenada.`),ag()()(),Tl(2392,`tr`,17)(2393,`td`,18)(2394,`div`,19)(2395,`span`,20),cN(2396,` type`),Gl(2397,`br`),ag()()(),Tl(2398,`td`,21)(2399,`code`,51),cN(2400,`PoTableColumnSortType`),ag()(),Tl(2401,`td`,24)(2402,`p`),cN(2403,`Tipo da ordenação.`),ag()()()(),Tl(2404,`h4`,46)(2405,`code`,5),cN(2406,`PoTableColumn`),ag()(),Tl(2407,`div`,2)(2408,`p`),cN(2409,`Interface para configuração das colunas do `),Tl(2410,`code`),cN(2411,`po-table`),ag(),cN(2412,`.`),ag(),Tl(2413,`p`),cN(2414,`As definições das colunas serão aplicadas linha a linha.`),ag()(),Tl(2415,`h4`,13),cN(2416,`Propriedades`),ag(),Tl(2417,`table`,14)(2418,`tr`,15)(2419,`th`,16),cN(2420,`Nome`),ag(),Tl(2421,`th`,16),cN(2422,`Tipo`),ag(),Tl(2423,`th`,16),cN(2424,`Descrição`),ag()(),Tl(2425,`tr`,17)(2426,`td`,18)(2427,`div`,19)(2428,`span`,20),cN(2429,` action`),Gl(2430,`br`),ag()()(),Tl(2431,`td`,21)(2432,`code`,47),cN(2433,`Function`),ag()(),Tl(2434,`td`,24)(2435,`em`)(2436,`strong`),cN(2437,`(opcional)`),ag()(),Tl(2438,`p`),cN(2439,`Define uma ação na coluna quando o tipo da coluna for `),Tl(2440,`code`),cN(2441,`link`),ag(),cN(2442,` ou `),Tl(2443,`code`),cN(2444,`icon`),ag(),cN(2445,`.`),ag(),Tl(2446,`blockquote`)(2447,`p`),cN(2448,`Quando for do tipo `),Tl(2449,`code`),cN(2450,`link`),ag(),cN(2451,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),ag()(),Tl(2452,`blockquote`)(2453,`p`),cN(2454,`Quando for do tipo `),Tl(2455,`code`),cN(2456,`icon`),ag(),cN(2457,` enviará o objeto completo da linha e o segundo parâmetro será a definição da coluna.`),ag()()()(),Tl(2458,`tr`,17)(2459,`td`,18)(2460,`div`,19)(2461,`span`,20),cN(2462,` boolean`),Gl(2463,`br`),ag()()(),Tl(2464,`td`,21)(2465,`code`,52),cN(2466,`PoTableBoolean`),ag()(),Tl(2467,`td`,24)(2468,`em`)(2469,`strong`),cN(2470,`(opcional)`),ag()(),Tl(2471,`p`),cN(2472,`Define um objeto do tipo `),Tl(2473,`code`),cN(2474,`PoTableBoolean`),ag(),cN(2475,` para as colunas do tipo `),Tl(2476,`em`),cN(2477,`boolean`),ag(),cN(2478,`. Por exemplo:`),ag(),Tl(2479,`pre`)(2480,`code`),cN(2481,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),ag()(),Tl(2482,`blockquote`)(2483,`p`),cN(2484,`Caso não seja definido um objeto para colunas do tipo `),Tl(2485,`em`),cN(2486,`boolean`),ag(),cN(2487,`,
esta exibir\xE1 por padr\xE3o `),Tl(2488,`code`),cN(2489,`Sim`),ag(),cN(2490,` e `),Tl(2491,`code`),cN(2492,`Não`),ag(),cN(2493,` de acordo com os valores `),Tl(2494,`em`),cN(2495,`booleanos`),ag(),cN(2496,`.`),ag()()()(),Tl(2497,`tr`,17)(2498,`td`,18)(2499,`div`,19)(2500,`span`,20),cN(2501,` color`),Gl(2502,`br`),ag()()(),Tl(2503,`td`,21)(2504,`code`,31),cN(2505,`string `),ag(),Tl(2506,`code`,47),cN(2507,` Function`),ag()(),Tl(2508,`td`,24)(2509,`em`)(2510,`strong`),cN(2511,`(opcional)`),ag()(),Tl(2512,`p`),cN(2513,`Define a cor que será aplicada no conteúdo da coluna.`),ag(),Tl(2514,`p`),cN(2515,`Valores válidos:`),ag(),Tl(2516,`ul`)(2517,`li`),Gl(2518,`span`,53),Tl(2519,`code`),cN(2520,`color-01`),ag()(),Tl(2521,`li`),Gl(2522,`span`,54),Tl(2523,`code`),cN(2524,`color-02`),ag()(),Tl(2525,`li`),Gl(2526,`span`,55),Tl(2527,`code`),cN(2528,`color-03`),ag()(),Tl(2529,`li`),Gl(2530,`span`,56),Tl(2531,`code`),cN(2532,`color-04`),ag()(),Tl(2533,`li`),Gl(2534,`span`,57),Tl(2535,`code`),cN(2536,`color-05`),ag()(),Tl(2537,`li`),Gl(2538,`span`,58),Tl(2539,`code`),cN(2540,`color-06`),ag()(),Tl(2541,`li`),Gl(2542,`span`,59),Tl(2543,`code`),cN(2544,`color-07`),ag()(),Tl(2545,`li`),Gl(2546,`span`,60),Tl(2547,`code`),cN(2548,`color-08`),ag()(),Tl(2549,`li`),Gl(2550,`span`,61),Tl(2551,`code`),cN(2552,`color-09`),ag()(),Tl(2553,`li`),Gl(2554,`span`,62),Tl(2555,`code`),cN(2556,`color-10`),ag()(),Tl(2557,`li`),Gl(2558,`span`,63),Tl(2559,`code`),cN(2560,`color-11`),ag()(),Tl(2561,`li`),Gl(2562,`span`,64),Tl(2563,`code`),cN(2564,`color-12`),ag()()(),Tl(2565,`blockquote`)(2566,`p`),cN(2567,`Também é possível utilizar as 35 cores da paleta `),Tl(2568,`strong`),cN(2569,`Caption Tag Colors`),ag(),cN(2570,`:`),ag()(),Tl(2571,`ul`)(2572,`li`),Gl(2573,`span`,65),Tl(2574,`code`),cN(2575,`caption-tag-01`),ag(),Gl(2576,`span`,66),Tl(2577,`code`),cN(2578,`caption-tag-02`),ag(),Gl(2579,`span`,67),Tl(2580,`code`),cN(2581,`caption-tag-03`),ag(),Gl(2582,`span`,68),Tl(2583,`code`),cN(2584,`caption-tag-04`),ag(),Gl(2585,`span`,69),Tl(2586,`code`),cN(2587,`caption-tag-05`),ag()(),Tl(2588,`li`),Gl(2589,`span`,70),Tl(2590,`code`),cN(2591,`caption-tag-06`),ag(),Gl(2592,`span`,71),Tl(2593,`code`),cN(2594,`caption-tag-07`),ag(),Gl(2595,`span`,72),Tl(2596,`code`),cN(2597,`caption-tag-08`),ag(),Gl(2598,`span`,73),Tl(2599,`code`),cN(2600,`caption-tag-09`),ag(),Gl(2601,`span`,74),Tl(2602,`code`),cN(2603,`caption-tag-10`),ag()(),Tl(2604,`li`),Gl(2605,`span`,75),Tl(2606,`code`),cN(2607,`caption-tag-11`),ag(),Gl(2608,`span`,76),Tl(2609,`code`),cN(2610,`caption-tag-12`),ag(),Gl(2611,`span`,77),Tl(2612,`code`),cN(2613,`caption-tag-13`),ag(),Gl(2614,`span`,78),Tl(2615,`code`),cN(2616,`caption-tag-14`),ag(),Gl(2617,`span`,79),Tl(2618,`code`),cN(2619,`caption-tag-15`),ag()(),Tl(2620,`li`),Gl(2621,`span`,80),Tl(2622,`code`),cN(2623,`caption-tag-16`),ag(),Gl(2624,`span`,81),Tl(2625,`code`),cN(2626,`caption-tag-17`),ag(),Gl(2627,`span`,82),Tl(2628,`code`),cN(2629,`caption-tag-18`),ag(),Gl(2630,`span`,83),Tl(2631,`code`),cN(2632,`caption-tag-19`),ag(),Gl(2633,`span`,84),Tl(2634,`code`),cN(2635,`caption-tag-20`),ag()(),Tl(2636,`li`),Gl(2637,`span`,85),Tl(2638,`code`),cN(2639,`caption-tag-21`),ag(),Gl(2640,`span`,86),Tl(2641,`code`),cN(2642,`caption-tag-22`),ag(),Gl(2643,`span`,87),Tl(2644,`code`),cN(2645,`caption-tag-23`),ag(),Gl(2646,`span`,88),Tl(2647,`code`),cN(2648,`caption-tag-24`),ag(),Gl(2649,`span`,89),Tl(2650,`code`),cN(2651,`caption-tag-25`),ag()(),Tl(2652,`li`),Gl(2653,`span`,90),Tl(2654,`code`),cN(2655,`caption-tag-26`),ag(),Gl(2656,`span`,91),Tl(2657,`code`),cN(2658,`caption-tag-27`),ag(),Gl(2659,`span`,92),Tl(2660,`code`),cN(2661,`caption-tag-28`),ag(),Gl(2662,`span`,93),Tl(2663,`code`),cN(2664,`caption-tag-29`),ag(),Gl(2665,`span`,94),Tl(2666,`code`),cN(2667,`caption-tag-30`),ag()(),Tl(2668,`li`),Gl(2669,`span`,95),Tl(2670,`code`),cN(2671,`caption-tag-31`),ag(),Gl(2672,`span`,96),Tl(2673,`code`),cN(2674,`caption-tag-32`),ag(),Gl(2675,`span`,97),Tl(2676,`code`),cN(2677,`caption-tag-33`),ag(),Gl(2678,`span`,98),Tl(2679,`code`),cN(2680,`caption-tag-34`),ag(),Gl(2681,`span`,99),Tl(2682,`code`),cN(2683,`caption-tag-35`),ag()()(),Tl(2684,`blockquote`)(2685,`p`),cN(2686,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),ag()(),Tl(2687,`pre`)(2688,`code`),cN(2689,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),ag()(),Tl(2690,`blockquote`)(2691,`p`),cN(2692,`É possível também usá-la na coluna do tipo `),Tl(2693,`code`),cN(2694,`icons`),ag(),cN(2695,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),ag()(),Tl(2696,`pre`)(2697,`code`),cN(2698,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),ag()()()(),Tl(2699,`tr`,17)(2700,`td`,18)(2701,`div`,19)(2702,`span`,20),cN(2703,` detail`),Gl(2704,`br`),ag()()(),Tl(2705,`td`,21)(2706,`code`,100),cN(2707,`PoTableDetail`),ag()(),Tl(2708,`td`,24)(2709,`em`)(2710,`strong`),cN(2711,`(opcional)`),ag()(),Tl(2712,`p`),cN(2713,`Define um objeto que segue a interface `),Tl(2714,`code`),cN(2715,`PoTableDetail`),ag(),cN(2716,`, para as colunas de detalhes. Por exemplo:`),ag(),Tl(2717,`pre`)(2718,`code`),cN(2719,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),ag()()()(),Tl(2720,`tr`,17)(2721,`td`,18)(2722,`div`,19)(2723,`span`,20),cN(2724,` disabled`),Gl(2725,`br`),ag()()(),Tl(2726,`td`,21)(2727,`code`,47),cN(2728,`Function`),ag()(),Tl(2729,`td`,24)(2730,`em`)(2731,`strong`),cN(2732,`(opcional)`),ag()(),Tl(2733,`p`),cN(2734,`Função que deve retornar um booleano para habilitar ou desabilitar o `),Tl(2735,`em`),cN(2736,`link`),ag(),cN(2737,` e sua ação.`),ag(),Tl(2738,`blockquote`)(2739,`p`),cN(2740,`Propriedade disponível nas colunas do tipo `),Tl(2741,`code`),cN(2742,`link`),ag(),cN(2743,`.`),ag()()()(),Tl(2744,`tr`,17)(2745,`td`,18)(2746,`div`,19)(2747,`span`,20),cN(2748,` format`),Gl(2749,`br`),ag()()(),Tl(2750,`td`,21)(2751,`code`,31),cN(2752,`string`),ag()(),Tl(2753,`td`,24)(2754,`em`)(2755,`strong`),cN(2756,`(opcional)`),ag()(),Tl(2757,`p`),cN(2758,`Formato de exibição do valor da coluna.`),ag(),Tl(2759,`table`)(2760,`thead`)(2761,`tr`)(2762,`th`),cN(2763,`Formatação`),ag(),Tl(2764,`th`),cN(2765,`Type da Coluna`),ag(),Tl(2766,`th`),cN(2767,`Descrição`),ag(),Tl(2768,`th`),cN(2769,`Exemplos`),ag()()(),Tl(2770,`tbody`)(2771,`tr`)(2772,`td`),cN(2773,`Monetário`),ag(),Tl(2774,`td`)(2775,`code`),cN(2776,`currency`),ag()(),Tl(2777,`td`),cN(2778,`Formato para valores monetários. Informe o código da moeda (ISO 4217).`),ag(),Tl(2779,`td`)(2780,`code`),cN(2781,`'BRL'`),ag(),cN(2782,`, `),Tl(2783,`code`),cN(2784,`'USD'`),ag(),cN(2785,`, `),Tl(2786,`code`),cN(2787,`'EUR'`),ag(),cN(2788,`, `),Tl(2789,`code`),cN(2790,`'RUB'`),ag()()(),Tl(2791,`tr`)(2792,`td`),cN(2793,`Data`),ag(),Tl(2794,`td`)(2795,`code`),cN(2796,`date`),ag()(),Tl(2797,`td`),cN(2798,`Aceita apenas os caracteres de dia(dd), mês(MM) e ano (yyyy ou yy), caso não seja informado um formato o mesmo será 'dd/MM/yyyy'`),ag(),Tl(2799,`td`)(2800,`code`),cN(2801,`'dd/MM/yyyy'`),ag(),cN(2802,`, `),Tl(2803,`code`),cN(2804,`'dd-MM-yy'`),ag(),cN(2805,`, `),Tl(2806,`code`),cN(2807,`'mm/dd/yyyy'`),ag()()(),Tl(2808,`tr`)(2809,`td`),cN(2810,`Data/Hora`),ag(),Tl(2811,`td`)(2812,`code`),cN(2813,`dateTime`),ag()(),Tl(2814,`td`),cN(2815,`Aceita os caracteres de dia(dd), mês(MM), ano(yyyy), hora(HH para 24h ou hh para 12h), minutos(mm), segundos(ss), milissegundos(SSS) e período(a para AM/PM). Caso não seja informado um formato o mesmo será 'dd/MM/yyyy HH:mm:ss'`),ag(),Tl(2816,`td`)(2817,`code`),cN(2818,`'dd/MM/yyyy HH:mm'`),ag(),cN(2819,`, `),Tl(2820,`code`),cN(2821,`'dd/MM/yyyy HH:mm:ss'`),ag(),cN(2822,`, `),Tl(2823,`code`),cN(2824,`'dd/MM/yyyy HH:mm:ss.SSS'`),ag(),cN(2825,`, `),Tl(2826,`code`),cN(2827,`'MM/dd/yyyy hh:mm a'`),ag(),cN(2828,`, `),Tl(2829,`code`),cN(2830,`'yyyy-MM-dd HH:mm'`),ag(),cN(2831,`, `),Tl(2832,`code`),cN(2833,`'short'`),ag(),cN(2834,`, `),Tl(2835,`code`),cN(2836,`'medium'`),ag()()(),Tl(2837,`tr`)(2838,`td`),cN(2839,`Hora`),ag(),Tl(2840,`td`)(2841,`code`),cN(2842,`time`),ag()(),Tl(2843,`td`),cN(2844,`Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos são opcionais, caso não seja informado um formato o mesmo será 'HH:mm:ss'`),ag(),Tl(2845,`td`)(2846,`code`),cN(2847,`'HH:mm'`),ag(),cN(2848,`, `),Tl(2849,`code`),cN(2850,`'HH:mm:ss.ffffff'`),ag(),cN(2851,`, `),Tl(2852,`code`),cN(2853,`'HH:mm:ss.ff'`),ag(),cN(2854,`, `),Tl(2855,`code`),cN(2856,`'mm:ss.fff'`),ag()()(),Tl(2857,`tr`)(2858,`td`),cN(2859,`Número`),ag(),Tl(2860,`td`)(2861,`code`),cN(2862,`number`),ag()(),Tl(2863,`td`),cN(2864,`Aceita um valor seguindo o padrão `),Tl(2865,`a`,101)(2866,`strong`),cN(2867,`DecimalPipe`),ag()(),cN(2868,` para formatação, e caso não seja informado, o número será exibido na sua forma original.`),ag(),Tl(2869,`td`)(2870,`code`),cN(2871,`'1.2-5'`),ag(),cN(2872,` (ex.: `),Tl(2873,`code`),cN(2874,`50`),ag(),cN(2875,` → `),Tl(2876,`code`),cN(2877,`50.00`),ag(),cN(2878,`)`),ag()()()(),Tl(2879,`p`),cN(2880,`Observação: caso não seja informado um formato, o valor será exibido em sua forma original.`),ag()()(),Tl(2881,`tr`,17)(2882,`td`,18)(2883,`div`,19)(2884,`span`,20),cN(2885,` icons`),Gl(2886,`br`),ag()()(),Tl(2887,`td`,21)(2888,`code`,102),cN(2889,`Array<PoTableColumnIcon>`),ag()(),Tl(2890,`td`,24)(2891,`em`)(2892,`strong`),cN(2893,`(opcional)`),ag()(),Tl(2894,`p`),cN(2895,`Define um `),Tl(2896,`em`),cN(2897,`array`),ag(),cN(2898,` de objetos para colunas de ícones que irá sobrepor os valores como `),Tl(2899,`code`),cN(2900,`action`),ag(),cN(2901,` e `),Tl(2902,`code`),cN(2903,`color`),ag(),cN(2904,`
definidos na coluna, \xE0 partir do `),Tl(2905,`em`),cN(2906,`value`),ag(),cN(2907,` da `),Tl(2908,`a`,103)(2909,`code`),cN(2910,`PoTableColumnIcon`),ag()(),cN(2911,`, por exemplo:`),ag(),Tl(2912,`pre`)(2913,`code`),cN(2914,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),ag()(),Tl(2915,`pre`)(2916,`code`),cN(2917,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),ag()()()(),Tl(2918,`tr`,17)(2919,`td`,18)(2920,`div`,19)(2921,`span`,20),cN(2922,` label`),Gl(2923,`br`),ag()()(),Tl(2924,`td`,21)(2925,`code`,31),cN(2926,`string`),ag()(),Tl(2927,`td`,24)(2928,`em`)(2929,`strong`),cN(2930,`(opcional)`),ag()(),Tl(2931,`p`),cN(2932,`Texto para título da coluna.`),ag(),Tl(2933,`p`),cN(2934,`Caso não seja informado, será utilizado como `),Tl(2935,`em`),cN(2936,`label`),ag(),cN(2937,` o valor da propriedade `),Tl(2938,`em`),cN(2939,`property`),ag(),cN(2940,` com a primeira letra em maiúsculo.`),ag()()(),Tl(2941,`tr`,17)(2942,`td`,18)(2943,`div`,19)(2944,`span`,20),cN(2945,` labels`),Gl(2946,`br`),ag()()(),Tl(2947,`td`,21)(2948,`code`,104),cN(2949,`Array<PoTableColumnLabel>`),ag()(),Tl(2950,`td`,24)(2951,`em`)(2952,`strong`),cN(2953,`(opcional)`),ag()(),Tl(2954,`p`),cN(2955,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),Tl(2956,`code`),cN(2957,`PoTableColumnLabel`),ag(),cN(2958,` na qual devem ser definidas os labels. Por exemplo:`),ag(),Tl(2959,`pre`)(2960,`code`),cN(2961,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),ag()()()(),Tl(2962,`tr`,17)(2963,`td`,18)(2964,`div`,19)(2965,`span`,20),cN(2966,` link`),Gl(2967,`br`),ag()()(),Tl(2968,`td`,21)(2969,`code`,31),cN(2970,`string`),ag()(),Tl(2971,`td`,24)(2972,`em`)(2973,`strong`),cN(2974,`(opcional)`),ag()(),Tl(2975,`p`),cN(2976,`Define o nome da propriedade que conterá o `),Tl(2977,`code`),cN(2978,`link`),ag(),cN(2979,` a ser redirecionado.`),ag()()(),Tl(2980,`tr`,17)(2981,`td`,18)(2982,`div`,19)(2983,`span`,20),cN(2984,` mask`),Gl(2985,`br`),ag()()(),Tl(2986,`td`,21)(2987,`code`,31),cN(2988,`string`),ag()(),Tl(2989,`td`,24)(2990,`em`)(2991,`strong`),cN(2992,`(opcional)`),ag()(),Tl(2993,`p`),cN(2994,`Define uma máscara para formatação do valor exibido na coluna.`),ag(),Tl(2995,`p`),cN(2996,`A máscara é aplicada somente para `),Tl(2997,`strong`),cN(2998,`exibição`),ag(),cN(2999,` na tabela, formatando o valor bruto
armazenado no model antes de apresent\xE1-lo ao usu\xE1rio.`),ag(),Tl(3e3,`p`),cN(3001,`Caracteres válidos para a máscara:`),ag(),Tl(3002,`ul`)(3003,`li`)(3004,`code`),cN(3005,`9`),ag(),cN(3006,` : aceita um dígito numérico (0-9).`),ag(),Tl(3007,`li`)(3008,`code`),cN(3009,`@`),ag(),cN(3010,` : aceita um caractere alfabético (a-z, A-Z).`),ag(),Tl(3011,`li`)(3012,`code`),cN(3013,`w`),ag(),cN(3014,` : aceita um caractere alfanumérico (a-z, A-Z, 0-9).`),ag(),Tl(3015,`li`),cN(3016,`Demais caracteres s\xE3o considerados fixos e inseridos automaticamente na formata\xE7\xE3o
(por exemplo: `),Tl(3017,`code`),cN(3018,`.`),ag(),cN(3019,`, `),Tl(3020,`code`),cN(3021,`-`),ag(),cN(3022,`, `),Tl(3023,`code`),cN(3024,`/`),ag(),cN(3025,`, `),Tl(3026,`code`),cN(3027,`(`),ag(),cN(3028,`, `),Tl(3029,`code`),cN(3030,`)`),ag(),cN(3031,`, `),Tl(3032,`code`),cN(3033,`+`),ag(),cN(3034,`, `),Gl(3035,`code`),cN(3036,`).`),ag()(),Tl(3037,`p`),cN(3038,`Exemplos de uso:`),ag(),Tl(3039,`pre`)(3040,`code`),cN(3041,`// CPF
{ property: 'cpf', label: 'CPF', mask: '999.999.999-99' }

// CNPJ
{ property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99' }

// Telefone
{ property: 'phone', label: 'Telefone', mask: '(99) 99999-9999' }

// CEP
{ property: 'zipCode', label: 'CEP', mask: '99999-999' }
`),ag()(),Tl(3042,`blockquote`)(3043,`p`),cN(3044,`Esta propriedade é utilizada apenas para colunas do tipo `),Tl(3045,`code`),cN(3046,`string`),ag(),cN(3047,` (padr\xE3o).
Caso a coluna possua um `),Tl(3048,`code`),cN(3049,`type`),ag(),cN(3050,` diferente de `),Tl(3051,`code`),cN(3052,`string`),ag(),cN(3053,`, a máscara será ignorada.`),ag()()()(),Tl(3054,`tr`,17)(3055,`td`,18)(3056,`div`,19)(3057,`span`,20),cN(3058,` property`),Gl(3059,`br`),ag()()(),Tl(3060,`td`,21)(3061,`code`,31),cN(3062,`string`),ag()(),Tl(3063,`td`,24)(3064,`em`)(3065,`strong`),cN(3066,`(opcional)`),ag()(),Tl(3067,`p`),cN(3068,`Nome identificador da coluna. Também permite objetos aninhados conforme exemplo abaixo.`),ag(),Tl(3069,`pre`)(3070,`code`),cN(3071,`{ property: 'address.street', label: 'Rua' }
`),ag()()()(),Tl(3072,`tr`,17)(3073,`td`,18)(3074,`div`,19)(3075,`span`,20),cN(3076,` searchAiIgnore`),Gl(3077,`br`),ag()()(),Tl(3078,`td`,21)(3079,`code`,22),cN(3080,`boolean`),ag()(),Tl(3081,`td`,24)(3082,`em`)(3083,`strong`),cN(3084,`(opcional)`),ag()(),Tl(3085,`p`),cN(3086,`Quando `),Tl(3087,`code`),cN(3088,`true`),ag(),cN(3089,`, exclui a coluna dos metadados enviados ao endpoint de IA configurado
em `),Tl(3090,`code`),cN(3091,`p-search-ai-field`),ag(),cN(3092,`, independentemente de estar visível na tabela.`),ag(),Tl(3093,`p`),cN(3094,`\xDAtil para ocultar colunas de controle interno (IDs, flags t\xE9cnicos, etc.) da
interpreta\xE7\xE3o da linguagem natural.`),ag()()(),Tl(3095,`tr`,17)(3096,`td`,18)(3097,`div`,19)(3098,`span`,20),cN(3099,` sortable`),Gl(3100,`br`),ag()()(),Tl(3101,`td`,21)(3102,`code`,22),cN(3103,`boolean`),ag()(),Tl(3104,`td`,24)(3105,`em`)(3106,`strong`),cN(3107,`(opcional)`),ag()(),Tl(3108,`p`),cN(3109,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),ag()()(),Tl(3110,`tr`,17)(3111,`td`,18)(3112,`div`,19)(3113,`span`,20),cN(3114,` subtitles`),Gl(3115,`br`),ag()()(),Tl(3116,`td`,21)(3117,`code`,105),cN(3118,`Array<PoTableSubtitleColumn>`),ag()(),Tl(3119,`td`,24)(3120,`em`)(3121,`strong`),cN(3122,`(opcional)`),ag()(),Tl(3123,`p`),cN(3124,`Define um array de objetos para as colunas de legenda. Onde, `),Tl(3125,`code`),cN(3126,`subtitles`),ag(),cN(3127,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),ag(),Tl(3128,`pre`)(3129,`code`),cN(3130,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),ag()(),Tl(3131,`p`),cN(3132,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),ag()()(),Tl(3133,`tr`,17)(3134,`td`,18)(3135,`div`,19)(3136,`span`,20),cN(3137,` tooltip`),Gl(3138,`br`),ag()()(),Tl(3139,`td`,21)(3140,`code`,31),cN(3141,`string`),ag()(),Tl(3142,`td`,24)(3143,`em`)(3144,`strong`),cN(3145,`(opcional)`),ag()(),Tl(3146,`p`),cN(3147,`Define um texto de ajuda que será exibido ao passar o `),Tl(3148,`em`),cN(3149,`mouse`),ag(),cN(3150,` sobre um texto.`),ag(),Tl(3151,`blockquote`)(3152,`p`),cN(3153,`O tooltip só será visível se for uma coluna do tipo `),Tl(3154,`em`),cN(3155,`link`),ag(),cN(3156,`.`),ag()(),Tl(3157,`blockquote`)(3158,`p`),cN(3159,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),Tl(3160,`em`),cN(3161,`tooltip`),ag(),cN(3162,` e será exibido justamente o conteúdo da célula.`),ag()()()(),Tl(3163,`tr`,17)(3164,`td`,18)(3165,`div`,19)(3166,`span`,20),cN(3167,` type`),Gl(3168,`br`),ag()()(),Tl(3169,`td`,21)(3170,`code`,31),cN(3171,`string`),ag()(),Tl(3172,`td`,24)(3173,`em`)(3174,`strong`),cN(3175,`(opcional)`),ag()(),Tl(3176,`p`),cN(3177,`Tipo da coluna.`),ag(),Tl(3178,`p`),cN(3179,`Valores válidos:`),ag(),Tl(3180,`ul`)(3181,`li`)(3182,`p`)(3183,`code`),cN(3184,`boolean`),ag(),cN(3185,`: Exibirá por padrão `),Tl(3186,`code`),cN(3187,`Sim`),ag(),cN(3188,` e `),Tl(3189,`code`),cN(3190,`Não`),ag(),cN(3191,` de acordo com os valores `),Tl(3192,`em`),cN(3193,`booleanos`),ag(),cN(3194,`.`),ag(),Tl(3195,`blockquote`)(3196,`p`),cN(3197,`Caso necessite exibir valores diferentes do padrão, deve-se utilizar a propriedade `),Tl(3198,`code`),cN(3199,`boolean`),ag(),cN(3200,` desta interface.`),ag()()(),Tl(3201,`li`)(3202,`p`)(3203,`code`),cN(3204,`currency`),ag(),cN(3205,`: valores monetários.`),ag()(),Tl(3206,`li`)(3207,`p`)(3208,`code`),cN(3209,`date`),ag(),cN(3210,`: valor de datas.`),ag(),Tl(3211,`ul`)(3212,`li`),cN(3213,`Aceita os tipos `),Tl(3214,`em`),cN(3215,`string`),ag(),cN(3216,` e `),Tl(3217,`em`),cN(3218,`Date`),ag(),cN(3219,` padr\xE3o do Javascript,
por exemplo: `),Tl(3220,`code`),cN(3221,`'2017-11-28'`),ag(),cN(3222,` ou `),Tl(3223,`code`),cN(3224,`new Date(2017, 10, 28)`),ag(),cN(3225,`.`),ag()()(),Tl(3226,`li`)(3227,`p`)(3228,`code`),cN(3229,`dateTime`),ag(),cN(3230,`: valor de data com horário.`),ag(),Tl(3231,`ul`)(3232,`li`),cN(3233,`Aceita o tipo `),Tl(3234,`em`),cN(3235,`string`),ag(),cN(3236,` no formato `),Tl(3237,`strong`),cN(3238,`ISO-8601`),ag(),cN(3239,` extendido `),Tl(3240,`strong`),cN(3241,`'yyyy-mm-ddTHH:mm:ss+|-hh:mm'`),ag(),cN(3242,`
ou `),Tl(3243,`strong`),cN(3244,`'yyyy-mm-ddTHH:mm+|-hh:mm'`),ag(),cN(3245,` (sem segundos),
e o tipo `),Tl(3246,`em`),cN(3247,`Date`),ag(),cN(3248,` padrão do Javascript, por exemplo: `),Tl(3249,`code`),cN(3250,`'2017-11-28T00:00:00-02:00'`),ag(),cN(3251,`, `),Tl(3252,`code`),cN(3253,`'2017-11-28T14:30-02:00'`),ag(),cN(3254,` ou `),Tl(3255,`code`),cN(3256,`new Date(2017, 10, 28)`),ag(),cN(3257,`.`),ag(),Tl(3258,`li`),cN(3259,`A formatação de exibição pode ser configurada pela propriedade `),Tl(3260,`code`),cN(3261,`format`),ag(),cN(3262,`.`),ag()()(),Tl(3263,`li`)(3264,`p`)(3265,`code`),cN(3266,`detail`),ag(),cN(3267,`: array de objetos para o master-detail.`),ag(),Tl(3268,`ul`)(3269,`li`),cN(3270,`Incompatível com `),Tl(3271,`code`),cN(3272,`virtual-scroll`),ag(),cN(3273,`, que requer altura fixa nas linhas.`),ag()()(),Tl(3274,`li`)(3275,`p`)(3276,`code`),cN(3277,`icon`),ag(),cN(3278,`: `),Tl(3279,`em`),cN(3280,`array`),ag(),cN(3281,` de `),Tl(3282,`em`),cN(3283,`string`),ag(),cN(3284,` ou objetos para a coluna de ícones.`),ag()(),Tl(3285,`li`)(3286,`p`)(3287,`code`),cN(3288,`label`),ag(),cN(3289,`: texto com destaque.`),ag()(),Tl(3290,`li`)(3291,`p`)(3292,`code`),cN(3293,`link`),ag(),cN(3294,`: habilita link na coluna para ação ou navegação.`),ag()(),Tl(3295,`li`)(3296,`p`)(3297,`code`),cN(3298,`number`),ag(),cN(3299,`: valores numéricos.`),ag()(),Tl(3300,`li`)(3301,`p`)(3302,`code`),cN(3303,`string`),ag(),cN(3304,`: textos.`),ag()(),Tl(3305,`li`)(3306,`p`)(3307,`code`),cN(3308,`subtitle`),ag(),cN(3309,`: array de objetos para a coluna de legenda.`),ag()(),Tl(3310,`li`)(3311,`p`)(3312,`code`),cN(3313,`time`),ag(),cN(3314,`: valor de horário.`),ag(),Tl(3315,`ul`)(3316,`li`),cN(3317,`Aceita o tipo `),Tl(3318,`em`),cN(3319,`string`),ag(),cN(3320,` nos formatos `),Tl(3321,`strong`),cN(3322,`'HH:mm:ss'`),ag(),cN(3323,` ou `),Tl(3324,`strong`),cN(3325,`'HH:mm:ss.ffffff'`),ag(),cN(3326,`, por exemplo: `),Tl(3327,`code`),cN(3328,`'23:12:45'`),ag(),cN(3329,`.`),ag()()(),Tl(3330,`li`)(3331,`p`)(3332,`code`),cN(3333,`cellTemplate`),ag(),cN(3334,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Tl(3335,`a`,8),cN(3336,`PoTableCellTemplate`),ag(),cN(3337,`.`),ag()(),Tl(3338,`li`)(3339,`p`)(3340,`code`),cN(3341,`columnTemplate`),ag(),cN(3342,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),Tl(3343,`a`,7),cN(3344,`PoTableColumnTemplate`),ag(),cN(3345,`.`),ag()()()()(),Tl(3346,`tr`,17)(3347,`td`,18)(3348,`div`,19)(3349,`span`,20),cN(3350,` visible`),Gl(3351,`br`),ag()()(),Tl(3352,`td`,21)(3353,`code`,22),cN(3354,`boolean`),ag()(),Tl(3355,`td`,24)(3356,`em`)(3357,`strong`),cN(3358,`(opcional)`),ag()(),Tl(3359,`p`),cN(3360,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),Tl(3361,`strong`),cN(3362,`gerenciador de colunas`),ag(),cN(3363,`.`),ag(),Tl(3364,`blockquote`)(3365,`p`),cN(3366,`A disponibilidade de visualização pode limitar-se de acordo com a definição de `),Tl(3367,`code`),cN(3368,`p-max-columns`),ag(),cN(3369,`.`),ag()()()(),Tl(3370,`tr`,17)(3371,`td`,18)(3372,`div`,19)(3373,`span`,20),cN(3374,` width`),Gl(3375,`br`),ag()()(),Tl(3376,`td`,21)(3377,`code`,31),cN(3378,`string`),ag()(),Tl(3379,`td`,24)(3380,`em`)(3381,`strong`),cN(3382,`(opcional)`),ag()(),Tl(3383,`p`),cN(3384,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),ag(),Tl(3385,`ul`)(3386,`li`),cN(3387,`para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px`),ag(),Tl(3388,`li`),cN(3389,`para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px`),ag()()()()(),Tl(3390,`h4`,46)(3391,`code`,5),cN(3392,`PoTableLiterals`),ag()(),Tl(3393,`div`,2)(3394,`p`),cN(3395,`Interface para definição das literais usadas no `),Tl(3396,`code`),cN(3397,`po-table`),ag(),cN(3398,`.`),ag()(),Tl(3399,`h4`,13),cN(3400,`Propriedades`),ag(),Tl(3401,`table`,14)(3402,`tr`,15)(3403,`th`,16),cN(3404,`Nome`),ag(),Tl(3405,`th`,16),cN(3406,`Tipo`),ag(),Tl(3407,`th`,16),cN(3408,`Descrição`),ag()(),Tl(3409,`tr`,17)(3410,`td`,18)(3411,`div`,19)(3412,`span`,20),cN(3413,` bodyDelete`),Gl(3414,`br`),ag()()(),Tl(3415,`td`,21)(3416,`code`,31),cN(3417,`string`),ag()(),Tl(3418,`td`,24)(3419,`em`)(3420,`strong`),cN(3421,`(opcional)`),ag()(),Tl(3422,`p`),cN(3423,`Texto no corpo do Modal de exclusão`),ag()()(),Tl(3424,`tr`,17)(3425,`td`,18)(3426,`div`,19)(3427,`span`,20),cN(3428,` cancel`),Gl(3429,`br`),ag()()(),Tl(3430,`td`,21)(3431,`code`,31),cN(3432,`string`),ag()(),Tl(3433,`td`,24)(3434,`em`)(3435,`strong`),cN(3436,`(opcional)`),ag()(),Tl(3437,`p`),cN(3438,`Texto no Modal para cancelar a exclusão`),ag()()(),Tl(3439,`tr`,17)(3440,`td`,18)(3441,`div`,19)(3442,`span`,20),cN(3443,` columnsManager`),Gl(3444,`br`),ag()()(),Tl(3445,`td`,21)(3446,`code`,31),cN(3447,`string`),ag()(),Tl(3448,`td`,24)(3449,`em`)(3450,`strong`),cN(3451,`(opcional)`),ag()(),Tl(3452,`p`),cN(3453,`Texto do `),Tl(3454,`strong`),cN(3455,`Gerenciador de colunas`),ag(),cN(3456,` localizado no canto superior direito da tabela.`),ag()()(),Tl(3457,`tr`,17)(3458,`td`,18)(3459,`div`,19)(3460,`span`,20),cN(3461,` completeSubtitle`),Gl(3462,`br`),ag()()(),Tl(3463,`td`,21)(3464,`code`,31),cN(3465,`string`),ag()(),Tl(3466,`td`,24)(3467,`em`)(3468,`strong`),cN(3469,`(opcional)`),ag()(),Tl(3470,`p`),cN(3471,`Título da modal 'Legenda completa' que aparece ao clicar no botão 'Ver legenda completa'.`),ag()()(),Tl(3472,`tr`,17)(3473,`td`,18)(3474,`div`,19)(3475,`span`,20),cN(3476,` delete`),Gl(3477,`br`),ag()()(),Tl(3478,`td`,21)(3479,`code`,31),cN(3480,`string`),ag()(),Tl(3481,`td`,24)(3482,`em`)(3483,`strong`),cN(3484,`(opcional)`),ag()(),Tl(3485,`p`),cN(3486,`Texto no Modal para confirmar a exclusão`),ag()()(),Tl(3487,`tr`,17)(3488,`td`,18)(3489,`div`,19)(3490,`span`,20),cN(3491,` deleteApiError`),Gl(3492,`br`),ag()()(),Tl(3493,`td`,21)(3494,`code`,31),cN(3495,`string`),ag()(),Tl(3496,`td`,24)(3497,`em`)(3498,`strong`),cN(3499,`(opcional)`),ag()(),Tl(3500,`p`),cN(3501,`Texto de notificação de erro na requisição Delete`),ag()()(),Tl(3502,`tr`,17)(3503,`td`,18)(3504,`div`,19)(3505,`span`,20),cN(3506,` deleteSuccessful`),Gl(3507,`br`),ag()()(),Tl(3508,`td`,21)(3509,`code`,31),cN(3510,`string`),ag()(),Tl(3511,`td`,24)(3512,`em`)(3513,`strong`),cN(3514,`(opcional)`),ag()(),Tl(3515,`p`),cN(3516,`Texto de notificação de remoção com sucesso`),ag()()(),Tl(3517,`tr`,17)(3518,`td`,18)(3519,`div`,19)(3520,`span`,20),cN(3521,` loadMoreData`),Gl(3522,`br`),ag()()(),Tl(3523,`td`,21)(3524,`code`,31),cN(3525,`string`),ag()(),Tl(3526,`td`,24)(3527,`em`)(3528,`strong`),cN(3529,`(opcional)`),ag()(),Tl(3530,`p`),cN(3531,`Texto do botão de `),Tl(3532,`strong`),cN(3533,`Carregar mais resultados`),ag(),cN(3534,` localizado no rodapé da tabela.`),ag()()(),Tl(3535,`tr`,17)(3536,`td`,18)(3537,`div`,19)(3538,`span`,20),cN(3539,` loadingData`),Gl(3540,`br`),ag()()(),Tl(3541,`td`,21)(3542,`code`,31),cN(3543,`string`),ag()(),Tl(3544,`td`,24)(3545,`em`)(3546,`strong`),cN(3547,`(opcional)`),ag()(),Tl(3548,`p`),cN(3549,`Texto exibido enquanto uma requisição está sendo executada para carregar dados na tabela.`),ag()()(),Tl(3550,`tr`,17)(3551,`td`,18)(3552,`div`,19)(3553,`span`,20),cN(3554,` multipleItems`),Gl(3555,`br`),ag()()(),Tl(3556,`td`,21)(3557,`code`,31),cN(3558,`string`),ag()(),Tl(3559,`td`,24)(3560,`em`)(3561,`strong`),cN(3562,`(opcional)`),ag()(),Tl(3563,`p`),cN(3564,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),ag()()(),Tl(3565,`tr`,17)(3566,`td`,18)(3567,`div`,19)(3568,`span`,20),cN(3569,` noColumns`),Gl(3570,`br`),ag()()(),Tl(3571,`td`,21)(3572,`code`,31),cN(3573,`string`),ag()(),Tl(3574,`td`,24)(3575,`em`)(3576,`strong`),cN(3577,`(opcional)`),ag()(),Tl(3578,`p`),cN(3579,`Texto exibido quando não existem colunas definidas para a tabela.`),ag()()(),Tl(3580,`tr`,17)(3581,`td`,18)(3582,`div`,19)(3583,`span`,20),cN(3584,` noData`),Gl(3585,`br`),ag()()(),Tl(3586,`td`,21)(3587,`code`,31),cN(3588,`string`),ag()(),Tl(3589,`td`,24)(3590,`em`)(3591,`strong`),cN(3592,`(opcional)`),ag()(),Tl(3593,`p`),cN(3594,`Texto exibido quando não existem itens para serem exibidos na tabela.`),ag()()(),Tl(3595,`tr`,17)(3596,`td`,18)(3597,`div`,19)(3598,`span`,20),cN(3599,` noItem`),Gl(3600,`br`),ag()()(),Tl(3601,`td`,21)(3602,`code`,31),cN(3603,`string`),ag()(),Tl(3604,`td`,24)(3605,`em`)(3606,`strong`),cN(3607,`(opcional)`),ag()(),Tl(3608,`p`),cN(3609,`Texto exibido quando nenhum item for selecionado no checkbox.`),ag()()(),Tl(3610,`tr`,17)(3611,`td`,18)(3612,`div`,19)(3613,`span`,20),cN(3614,` noVisibleColumn`),Gl(3615,`br`),ag()()(),Tl(3616,`td`,21)(3617,`code`,31),cN(3618,`string`),ag()(),Tl(3619,`td`,24)(3620,`em`)(3621,`strong`),cN(3622,`(opcional)`),ag()(),Tl(3623,`p`),cN(3624,`Texto exibido quando não existem colunas visíveis para a tabela.`),ag()()(),Tl(3625,`tr`,17)(3626,`td`,18)(3627,`div`,19)(3628,`span`,20),cN(3629,` oneItem`),Gl(3630,`br`),ag()()(),Tl(3631,`td`,21)(3632,`code`,31),cN(3633,`string`),ag()(),Tl(3634,`td`,24)(3635,`em`)(3636,`strong`),cN(3637,`(opcional)`),ag()(),Tl(3638,`p`),cN(3639,`Texto exibido quando apenas 1 item for selecionado no checkbox.`),ag()()(),Tl(3640,`tr`,17)(3641,`td`,18)(3642,`div`,19)(3643,`span`,20),cN(3644,` searchAiPlaceholder`),Gl(3645,`br`),ag()()(),Tl(3646,`td`,21)(3647,`code`,31),cN(3648,`string`),ag()(),Tl(3649,`td`,24)(3650,`em`)(3651,`strong`),cN(3652,`(opcional)`),ag()(),Tl(3653,`p`),cN(3654,`Texto exibido como placeholder padrão no campo de busca por IA (`),Tl(3655,`code`),cN(3656,`p-search-ai-field`),ag(),cN(3657,`) quando nenhum `),Tl(3658,`code`),cN(3659,`placeholder`),ag(),cN(3660,` é informado.`),ag()()(),Tl(3661,`tr`,17)(3662,`td`,18)(3663,`div`,19)(3664,`span`,20),cN(3665,` seeCompleteSubtitle`),Gl(3666,`br`),ag()()(),Tl(3667,`td`,21)(3668,`code`,31),cN(3669,`string`),ag()(),Tl(3670,`td`,24)(3671,`em`)(3672,`strong`),cN(3673,`(opcional)`),ag()(),Tl(3674,`p`),cN(3675,`Texto do botão `),Tl(3676,`strong`),cN(3677,`Ver legenda completa`),ag(),cN(3678,` que aparece quando o rodapé de legendas é maior que a tabela.`),ag()()()(),Tl(3679,`h4`,46)(3680,`code`,5),cN(3681,`PoTableSearchAiField`),ag()(),Tl(3682,`div`,2)(3683,`p`),cN(3684,`Interface de configuração da busca por IA integrada ao `),Tl(3685,`code`),cN(3686,`po-table`),ag(),cN(3687,`, utilizada pela
propriedade `),Tl(3688,`code`),cN(3689,`p-search-ai-field`),ag(),cN(3690,`.`),ag(),Tl(3691,`p`),cN(3692,`Quando configurada, a tabela renderiza um campo `),Tl(3693,`code`),cN(3694,`po-search-ai`),ag(),cN(3695,` na barra de a\xE7\xF5es,
no lugar da busca textual padr\xE3o (`),Tl(3696,`code`),cN(3697,`po-search`),ag(),cN(3698,`). O filtro gerado pela IA \xE9 aplicado
automaticamente aos dados da tabela, conforme a estrat\xE9gia definida em `),Tl(3699,`code`),cN(3700,`apply`),ag(),cN(3701,`.`),ag(),Tl(3702,`h4`),cN(3703,`Endpoint de IA (`),Tl(3704,`code`),cN(3705,`url`),ag(),cN(3706,`)`),ag(),Tl(3707,`p`),cN(3708,`O campo `),Tl(3709,`code`),cN(3710,`url`),ag(),cN(3711,` deve apontar para um endpoint (proxy) que implemente o contrato do
`),Tl(3712,`code`),cN(3713,`po-search-ai`),ag(),cN(3714,`: recebe `),Tl(3715,`code`),cN(3716,`{ query, columns }`),ag(),cN(3717,` via `),Tl(3718,`code`),cN(3719,`POST`),ag(),cN(3720,` e responde com
`),Tl(3721,`code`),cN(3722,`{ filter, description, confidence }`),ag(),cN(3723,`.`),ag(),Tl(3724,`blockquote`)(3725,`p`),cN(3726,`A integração com a LLM e a guarda de chaves devem ocorrer `),Tl(3727,`strong`),cN(3728,`no backend`),ag(),cN(3729,`, nunca
no client-side. O backend de refer\xEAncia open source est\xE1 dispon\xEDvel em
`),Tl(3730,`a`,40)(3731,`code`),cN(3732,`po-sample-api`),ag()(),cN(3733,`.`),ag()(),Tl(3734,`h4`),cN(3735,`Colunas enviadas à IA`),ag(),Tl(3736,`p`),cN(3737,`Por padr\xE3o, os metadados enviados ao endpoint s\xE3o derivados automaticamente de
`),Tl(3738,`code`),cN(3739,`p-columns`),ag(),cN(3740,` da tabela, respeitando as colunas vis\xEDveis e excluindo aquelas com
`),Tl(3741,`code`),cN(3742,`searchAiIgnore: true`),ag(),cN(3743,`. O campo `),Tl(3744,`code`),cN(3745,`columns`),ag(),cN(3746,` permite sobrescrever esse comportamento.`),ag(),Tl(3747,`h4`),cN(3748,`Estratégia de aplicação do filtro (`),Tl(3749,`code`),cN(3750,`apply`),ag(),cN(3751,`)`),ag(),Tl(3752,`table`)(3753,`thead`)(3754,`tr`)(3755,`th`),cN(3756,`Valor`),ag(),Tl(3757,`th`),cN(3758,`Comportamento`),ag()()(),Tl(3759,`tbody`)(3760,`tr`)(3761,`td`)(3762,`code`),cN(3763,`'auto'`),ag(),cN(3764,` (padrão)`),ag(),Tl(3765,`td`),cN(3766,`Modo serviço: envia `),Tl(3767,`code`),cN(3768,`$filter`),ag(),cN(3769,` ao `),Tl(3770,`code`),cN(3771,`p-service-api`),ag(),cN(3772,`; modo local: aplica o parser OData interno sobre `),Tl(3773,`code`),cN(3774,`p-items`),ag(),cN(3775,`.`),ag()(),Tl(3776,`tr`)(3777,`td`)(3778,`code`),cN(3779,`'parser'`),ag()(),Tl(3780,`td`),cN(3781,`Sempre usa o parser OData interno. No modo serviço, busca todos os dados e filtra localmente.`),ag()(),Tl(3782,`tr`)(3783,`td`)(3784,`code`),cN(3785,`'server'`),ag()(),Tl(3786,`td`),cN(3787,`Sempre delega o filtro ao `),Tl(3788,`code`),cN(3789,`p-service-api`),ag(),cN(3790,` via `),Tl(3791,`code`),cN(3792,`$filter`),ag(),cN(3793,`.`),ag()(),Tl(3794,`tr`)(3795,`td`)(3796,`code`),cN(3797,`'none'`),ag()(),Tl(3798,`td`),cN(3799,`Não aplica o filtro; apenas emite `),Tl(3800,`code`),cN(3801,`p-search-ai-result`),ag(),cN(3802,` para o desenvolvedor tratar.`),ag()(),Tl(3803,`tr`)(3804,`td`)(3805,`code`),cN(3806,`(result) => void`),ag()(),Tl(3807,`td`),cN(3808,`Override total: o desenvolvedor recebe o resultado e assume o controle.`),ag()()()()(),Tl(3809,`h4`,13),cN(3810,`Propriedades`),ag(),Tl(3811,`table`,14)(3812,`tr`,15)(3813,`th`,16),cN(3814,`Nome`),ag(),Tl(3815,`th`,16),cN(3816,`Tipo`),ag(),Tl(3817,`th`,16),cN(3818,`Descrição`),ag()(),Tl(3819,`tr`,17)(3820,`td`,18)(3821,`div`,19)(3822,`span`,20),cN(3823,` apply`),Gl(3824,`br`),ag()()(),Tl(3825,`td`,21)(3826,`code`,106),cN(3827,`'auto' `),ag(),Tl(3828,`code`,107),cN(3829,` 'parser' `),ag(),Tl(3830,`code`,108),cN(3831,` 'server' `),ag(),Tl(3832,`code`,109),cN(3833,` 'none' `),ag(),Tl(3834,`code`,110),cN(3835,` ((result: PoSearchAiResult) => void)`),ag()(),Tl(3836,`td`,24)(3837,`em`)(3838,`strong`),cN(3839,`(opcional)`),ag()(),Tl(3840,`p`),cN(3841,`Define como o filtro OData retornado pela IA é aplicado à tabela.`),ag(),Tl(3842,`ul`)(3843,`li`)(3844,`code`),cN(3845,`'auto'`),ag(),Tl(3846,`em`),cN(3847,`(padrão)`),ag(),cN(3848,`: aplica automaticamente conforme o modo da tabela \u2014
modo servi\xE7o envia `),Tl(3849,`code`),cN(3850,`$filter`),ag(),cN(3851,` ao `),Tl(3852,`code`),cN(3853,`p-service-api`),ag(),cN(3854,`; modo local usa o parser
OData interno sobre `),Tl(3855,`code`),cN(3856,`p-items`),ag(),cN(3857,`.`),ag(),Tl(3858,`li`)(3859,`code`),cN(3860,`'parser'`),ag(),cN(3861,`: sempre usa o parser OData interno. No modo servi\xE7o, busca todos
os dados primeiro e filtra localmente em seguida.`),ag(),Tl(3862,`li`)(3863,`code`),cN(3864,`'server'`),ag(),cN(3865,`: sempre envia `),Tl(3866,`code`),cN(3867,`$filter`),ag(),cN(3868,` ao `),Tl(3869,`code`),cN(3870,`p-service-api`),ag(),cN(3871,`, independentemente
do modo da tabela.`),ag(),Tl(3872,`li`)(3873,`code`),cN(3874,`'none'`),ag(),cN(3875,`: não aplica o filtro; apenas emite `),Tl(3876,`code`),cN(3877,`p-search-ai-result`),ag(),cN(3878,`.`),ag(),Tl(3879,`li`)(3880,`code`),cN(3881,`(result: PoSearchAiResult) => void`),ag(),cN(3882,`: override total \u2014 o desenvolvedor recebe
o resultado e assume o controle da aplica\xE7\xE3o do filtro.`),ag()()()(),Tl(3883,`tr`,17)(3884,`td`,18)(3885,`div`,19)(3886,`span`,20),cN(3887,` columns`),Gl(3888,`br`),ag()()(),Tl(3889,`td`,21)(3890,`code`,111),cN(3891,`Array<PoSearchAiColumn>`),ag()(),Tl(3892,`td`,24)(3893,`em`)(3894,`strong`),cN(3895,`(opcional)`),ag()(),Tl(3896,`p`),cN(3897,`Override das colunas enviadas ao endpoint de IA. Quando omitido, os metadados
s\xE3o derivados automaticamente de `),Tl(3898,`code`),cN(3899,`p-columns`),ag(),cN(3900,` da tabela, excluindo colunas com
`),Tl(3901,`code`),cN(3902,`visible: false`),ag(),cN(3903,` ou `),Tl(3904,`code`),cN(3905,`searchAiIgnore: true`),ag(),cN(3906,`.`),ag()()(),Tl(3907,`tr`,17)(3908,`td`,18)(3909,`div`,19)(3910,`span`,20),cN(3911,` literals`),Gl(3912,`br`),ag()()(),Tl(3913,`td`,21)(3914,`code`,112),cN(3915,`PoSearchAiLiterals`),ag()(),Tl(3916,`td`,24)(3917,`em`)(3918,`strong`),cN(3919,`(opcional)`),ag()(),Tl(3920,`p`),cN(3921,`Objeto com os literais usados pelo `),Tl(3922,`code`),cN(3923,`po-search-ai`),ag(),cN(3924,` integrado \xE0 tabela. Permite
sobrescrever as mensagens padr\xE3o para internacionaliza\xE7\xE3o ou customiza\xE7\xE3o.`),ag()()(),Tl(3925,`tr`,17)(3926,`td`,18)(3927,`div`,19)(3928,`span`,20),cN(3929,` minConfidence`),Gl(3930,`br`),ag()()(),Tl(3931,`td`,21)(3932,`code`,35),cN(3933,`number`),ag()(),Tl(3934,`td`,24)(3935,`em`)(3936,`strong`),cN(3937,`(opcional)`),ag()(),Tl(3938,`p`),cN(3939,`Nível mínimo de confiança (`),Tl(3940,`code`),cN(3941,`0.0`),ag(),cN(3942,` a `),Tl(3943,`code`),cN(3944,`1.0`),ag(),cN(3945,`) para que o filtro gerado pela IA seja
aplicado automaticamente. Quando a confian\xE7a for inferior, o evento
`),Tl(3946,`code`),cN(3947,`p-search-ai-low-confidence`),ag(),cN(3948,` é emitido em vez de `),Tl(3949,`code`),cN(3950,`p-search-ai-result`),ag(),cN(3951,`.`),ag()()(),Tl(3952,`tr`,17)(3953,`td`,18)(3954,`div`,19)(3955,`span`,20),cN(3956,` placeholder`),Gl(3957,`br`),ag()()(),Tl(3958,`td`,21)(3959,`code`,31),cN(3960,`string`),ag()(),Tl(3961,`td`,24)(3962,`em`)(3963,`strong`),cN(3964,`(opcional)`),ag()(),Tl(3965,`p`),cN(3966,`Texto exibido como placeholder no campo de busca por IA.`),ag()()(),Tl(3967,`tr`,17)(3968,`td`,18)(3969,`div`,19)(3970,`span`,20),cN(3971,` timeout`),Gl(3972,`br`),ag()()(),Tl(3973,`td`,21)(3974,`code`,35),cN(3975,`number`),ag()(),Tl(3976,`td`,24)(3977,`em`)(3978,`strong`),cN(3979,`(opcional)`),ag()(),Tl(3980,`p`),cN(3981,`Tempo máximo de espera (em milissegundos) pela resposta do endpoint de IA.`),ag()()(),Tl(3982,`tr`,17)(3983,`td`,18)(3984,`div`,19)(3985,`span`,20),cN(3986,` url`),Gl(3987,`br`),ag()()(),Tl(3988,`td`,21)(3989,`code`,31),cN(3990,`string`),ag()(),Tl(3991,`td`,24)(3992,`p`),cN(3993,`Endpoint (proxy) de IA respons\xE1vel por converter a consulta em linguagem natural
em um filtro estruturado (OData). Repassado ao `),Tl(3994,`code`),cN(3995,`po-search-ai`),ag(),cN(3996,` via `),Tl(3997,`code`),cN(3998,`p-url`),ag(),cN(3999,`.`),ag(),Tl(4e3,`p`),cN(4001,`O endpoint deve seguir o contrato do backend de referência (`),Tl(4002,`code`),cN(4003,`po-sample-api`),ag(),cN(4004,`):`),ag(),Tl(4005,`ul`)(4006,`li`),cN(4007,`Recebe: `),Tl(4008,`code`),cN(4009,`POST { query: string, columns: PoSearchAiColumn[] }`),ag()(),Tl(4010,`li`),cN(4011,`Responde: `),Tl(4012,`code`),cN(4013,`{ filter: string, description: string, confidence: number }`),ag()()()()()(),Tl(4014,`h4`,46)(4015,`code`,5),cN(4016,`PoTableColumnIcon`),ag()(),Tl(4017,`div`,2)(4018,`p`),Gl(4019,`a`,113),ag(),Tl(4020,`p`),cN(4021,`Interface que define a coluna com ícone(s) do `),Tl(4022,`code`),cN(4023,`po-table`),ag(),cN(4024,`.`),ag()(),Tl(4025,`h4`,13),cN(4026,`Propriedades`),ag(),Tl(4027,`table`,14)(4028,`tr`,15)(4029,`th`,16),cN(4030,`Nome`),ag(),Tl(4031,`th`,16),cN(4032,`Tipo`),ag(),Tl(4033,`th`,16),cN(4034,`Descrição`),ag()(),Tl(4035,`tr`,17)(4036,`td`,18)(4037,`div`,19)(4038,`span`,20),cN(4039,` action`),Gl(4040,`br`),ag()()(),Tl(4041,`td`,21)(4042,`code`,47),cN(4043,`Function`),ag()(),Tl(4044,`td`,24)(4045,`em`)(4046,`strong`),cN(4047,`(opcional)`),ag()(),Tl(4048,`p`),cN(4049,`Define a ação que será executada ao clicar no ícone.`),ag()()(),Tl(4050,`tr`,17)(4051,`td`,18)(4052,`div`,19)(4053,`span`,20),cN(4054,` color`),Gl(4055,`br`),ag()()(),Tl(4056,`td`,21)(4057,`code`,31),cN(4058,`string `),ag(),Tl(4059,`code`,47),cN(4060,` Function`),ag()(),Tl(4061,`td`,24)(4062,`em`)(4063,`strong`),cN(4064,`(opcional)`),ag()(),Tl(4065,`p`),cN(4066,`Define a cor do ícone.`),ag(),Tl(4067,`p`),cN(4068,`Valores válidos:`),ag(),Tl(4069,`ul`)(4070,`li`),Gl(4071,`span`,53),Tl(4072,`code`),cN(4073,`color-01`),ag()(),Tl(4074,`li`),Gl(4075,`span`,54),Tl(4076,`code`),cN(4077,`color-02`),ag()(),Tl(4078,`li`),Gl(4079,`span`,55),Tl(4080,`code`),cN(4081,`color-03`),ag()(),Tl(4082,`li`),Gl(4083,`span`,56),Tl(4084,`code`),cN(4085,`color-04`),ag()(),Tl(4086,`li`),Gl(4087,`span`,57),Tl(4088,`code`),cN(4089,`color-05`),ag()(),Tl(4090,`li`),Gl(4091,`span`,58),Tl(4092,`code`),cN(4093,`color-06`),ag()(),Tl(4094,`li`),Gl(4095,`span`,59),Tl(4096,`code`),cN(4097,`color-07`),ag()(),Tl(4098,`li`),Gl(4099,`span`,60),Tl(4100,`code`),cN(4101,`color-08`),ag()(),Tl(4102,`li`),Gl(4103,`span`,61),Tl(4104,`code`),cN(4105,`color-09`),ag()(),Tl(4106,`li`),Gl(4107,`span`,62),Tl(4108,`code`),cN(4109,`color-10`),ag()(),Tl(4110,`li`),Gl(4111,`span`,63),Tl(4112,`code`),cN(4113,`color-11`),ag()(),Tl(4114,`li`),Gl(4115,`span`,64),Tl(4116,`code`),cN(4117,`color-12`),ag()()(),Tl(4118,`blockquote`)(4119,`p`),cN(4120,`Também é possível utilizar as 35 cores da paleta `),Tl(4121,`strong`),cN(4122,`Caption Tag Colors`),ag(),cN(4123,`:`),ag()(),Tl(4124,`ul`)(4125,`li`),Gl(4126,`span`,65),Tl(4127,`code`),cN(4128,`caption-tag-01`),ag(),Gl(4129,`span`,66),Tl(4130,`code`),cN(4131,`caption-tag-02`),ag(),Gl(4132,`span`,67),Tl(4133,`code`),cN(4134,`caption-tag-03`),ag(),Gl(4135,`span`,68),Tl(4136,`code`),cN(4137,`caption-tag-04`),ag(),Gl(4138,`span`,69),Tl(4139,`code`),cN(4140,`caption-tag-05`),ag()(),Tl(4141,`li`),Gl(4142,`span`,70),Tl(4143,`code`),cN(4144,`caption-tag-06`),ag(),Gl(4145,`span`,71),Tl(4146,`code`),cN(4147,`caption-tag-07`),ag(),Gl(4148,`span`,72),Tl(4149,`code`),cN(4150,`caption-tag-08`),ag(),Gl(4151,`span`,73),Tl(4152,`code`),cN(4153,`caption-tag-09`),ag(),Gl(4154,`span`,74),Tl(4155,`code`),cN(4156,`caption-tag-10`),ag()(),Tl(4157,`li`),Gl(4158,`span`,75),Tl(4159,`code`),cN(4160,`caption-tag-11`),ag(),Gl(4161,`span`,76),Tl(4162,`code`),cN(4163,`caption-tag-12`),ag(),Gl(4164,`span`,77),Tl(4165,`code`),cN(4166,`caption-tag-13`),ag(),Gl(4167,`span`,78),Tl(4168,`code`),cN(4169,`caption-tag-14`),ag(),Gl(4170,`span`,79),Tl(4171,`code`),cN(4172,`caption-tag-15`),ag()(),Tl(4173,`li`),Gl(4174,`span`,80),Tl(4175,`code`),cN(4176,`caption-tag-16`),ag(),Gl(4177,`span`,81),Tl(4178,`code`),cN(4179,`caption-tag-17`),ag(),Gl(4180,`span`,82),Tl(4181,`code`),cN(4182,`caption-tag-18`),ag(),Gl(4183,`span`,83),Tl(4184,`code`),cN(4185,`caption-tag-19`),ag(),Gl(4186,`span`,84),Tl(4187,`code`),cN(4188,`caption-tag-20`),ag()(),Tl(4189,`li`),Gl(4190,`span`,85),Tl(4191,`code`),cN(4192,`caption-tag-21`),ag(),Gl(4193,`span`,86),Tl(4194,`code`),cN(4195,`caption-tag-22`),ag(),Gl(4196,`span`,87),Tl(4197,`code`),cN(4198,`caption-tag-23`),ag(),Gl(4199,`span`,88),Tl(4200,`code`),cN(4201,`caption-tag-24`),ag(),Gl(4202,`span`,89),Tl(4203,`code`),cN(4204,`caption-tag-25`),ag()(),Tl(4205,`li`),Gl(4206,`span`,90),Tl(4207,`code`),cN(4208,`caption-tag-26`),ag(),Gl(4209,`span`,91),Tl(4210,`code`),cN(4211,`caption-tag-27`),ag(),Gl(4212,`span`,92),Tl(4213,`code`),cN(4214,`caption-tag-28`),ag(),Gl(4215,`span`,93),Tl(4216,`code`),cN(4217,`caption-tag-29`),ag(),Gl(4218,`span`,94),Tl(4219,`code`),cN(4220,`caption-tag-30`),ag()(),Tl(4221,`li`),Gl(4222,`span`,95),Tl(4223,`code`),cN(4224,`caption-tag-31`),ag(),Gl(4225,`span`,96),Tl(4226,`code`),cN(4227,`caption-tag-32`),ag(),Gl(4228,`span`,97),Tl(4229,`code`),cN(4230,`caption-tag-33`),ag(),Gl(4231,`span`,98),Tl(4232,`code`),cN(4233,`caption-tag-34`),ag(),Gl(4234,`span`,99),Tl(4235,`code`),cN(4236,`caption-tag-35`),ag()()()()(),Tl(4237,`tr`,17)(4238,`td`,18)(4239,`div`,19)(4240,`span`,20),cN(4241,` disabled`),Gl(4242,`br`),ag()()(),Tl(4243,`td`,21)(4244,`code`,47),cN(4245,`Function`),ag()(),Tl(4246,`td`,24)(4247,`em`)(4248,`strong`),cN(4249,`(opcional)`),ag()(),Tl(4250,`p`),cN(4251,`Função que deve retornar um booleano para habilitar ou desabilitar o ícone e sua ação.`),ag()()(),Tl(4252,`tr`,17)(4253,`td`,18)(4254,`div`,19)(4255,`span`,20),cN(4256,` icon`),Gl(4257,`br`),ag()()(),Tl(4258,`td`,21)(4259,`code`,31),cN(4260,`string `),ag(),Tl(4261,`code`,48),cN(4262,` TemplateRef<void>`),ag()(),Tl(4263,`td`,24)(4264,`em`)(4265,`strong`),cN(4266,`(opcional)`),ag()(),Tl(4267,`p`),cN(4268,`É possível usar qualquer um dos ícones da `),Tl(4269,`a`,26),cN(4270,`Biblioteca de ícones`),ag(),cN(4271,`. conforme exemplo abaixo:`),ag(),Tl(4272,`pre`)(4273,`code`),cN(4274,`[ { icon: 'an an-plus' } ]
`),ag()(),Tl(4275,`p`),cN(4276,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),ag(),Tl(4277,`pre`)(4278,`code`),cN(4279,`[ {  icon: 'fas fa-plus' } ]
`),ag()(),Tl(4280,`p`),cN(4281,`Outra opção seria a customização do ícone através do `),Tl(4282,`code`),cN(4283,`TemplateRef`),ag(),cN(4284,`, conforme exemplo abaixo:
`),Tl(4285,`code`),cN(4286,`component.html`),ag(),cN(4287,`:`),ag(),Tl(4288,`pre`)(4289,`code`),cN(4290,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),ag()(),Tl(4291,`p`)(4292,`code`),cN(4293,`component.ts`),ag(),cN(4294,`:`),ag(),Tl(4295,`pre`)(4296,`code`),cN(4297,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),ag()(),Tl(4298,`blockquote`)(4299,`p`),cN(4300,`Caso esta propriedade não seja definida, a mesma receberá o valor contido em `),Tl(4301,`code`),cN(4302,`value`),ag(),cN(4303,`.`),ag()()()(),Tl(4304,`tr`,17)(4305,`td`,18)(4306,`div`,19)(4307,`span`,20),cN(4308,` tooltip`),Gl(4309,`br`),ag()()(),Tl(4310,`td`,21)(4311,`code`,31),cN(4312,`string`),ag()(),Tl(4313,`td`,24)(4314,`em`)(4315,`strong`),cN(4316,`(opcional)`),ag()(),Tl(4317,`p`),cN(4318,`Define um texto de ajuda que será exibido ao passar o `),Tl(4319,`em`),cN(4320,`mouse`),ag(),cN(4321,` em cima do ícone.`),ag()()(),Tl(4322,`tr`,17)(4323,`td`,18)(4324,`div`,19)(4325,`span`,20),cN(4326,` value`),Gl(4327,`br`),ag()()(),Tl(4328,`td`,21)(4329,`code`,31),cN(4330,`string`),ag()(),Tl(4331,`td`,24)(4332,`p`),cN(4333,`Define o valor do ícone que será exibido.`),ag()()()(),Tl(4334,`h4`,46)(4335,`code`,5),cN(4336,`PoTableColumnLabel`),ag()(),Tl(4337,`div`,2)(4338,`p`),cN(4339,`Interface para configuração das colunas de labels do `),Tl(4340,`code`),cN(4341,`po-table`),ag(),cN(4342,`.`),ag()(),Tl(4343,`h4`,13),cN(4344,`Propriedades`),ag(),Tl(4345,`table`,14)(4346,`tr`,15)(4347,`th`,16),cN(4348,`Nome`),ag(),Tl(4349,`th`,16),cN(4350,`Tipo`),ag(),Tl(4351,`th`,16),cN(4352,`Descrição`),ag()(),Tl(4353,`tr`,17)(4354,`td`,18)(4355,`div`,19)(4356,`span`,20),cN(4357,` color`),Gl(4358,`br`),ag()()(),Tl(4359,`td`,21)(4360,`code`,31),cN(4361,`string`),ag()(),Tl(4362,`td`,24)(4363,`em`)(4364,`strong`),cN(4365,`(opcional)`),ag()(),Tl(4366,`p`),cN(4367,`Define a cor do label.`),ag(),Tl(4368,`p`),cN(4369,`Valores válidos:`),ag(),Tl(4370,`ul`)(4371,`li`),Gl(4372,`span`,53),Tl(4373,`code`),cN(4374,`color-01`),ag()(),Tl(4375,`li`),Gl(4376,`span`,54),Tl(4377,`code`),cN(4378,`color-02`),ag()(),Tl(4379,`li`),Gl(4380,`span`,55),Tl(4381,`code`),cN(4382,`color-03`),ag()(),Tl(4383,`li`),Gl(4384,`span`,56),Tl(4385,`code`),cN(4386,`color-04`),ag()(),Tl(4387,`li`),Gl(4388,`span`,57),Tl(4389,`code`),cN(4390,`color-05`),ag()(),Tl(4391,`li`),Gl(4392,`span`,58),Tl(4393,`code`),cN(4394,`color-06`),ag()(),Tl(4395,`li`),Gl(4396,`span`,59),Tl(4397,`code`),cN(4398,`color-07`),ag()(),Tl(4399,`li`),Gl(4400,`span`,60),Tl(4401,`code`),cN(4402,`color-08`),ag()(),Tl(4403,`li`),Gl(4404,`span`,61),Tl(4405,`code`),cN(4406,`color-09`),ag()(),Tl(4407,`li`),Gl(4408,`span`,62),Tl(4409,`code`),cN(4410,`color-10`),ag()(),Tl(4411,`li`),Gl(4412,`span`,63),Tl(4413,`code`),cN(4414,`color-11`),ag()(),Tl(4415,`li`),Gl(4416,`span`,64),Tl(4417,`code`),cN(4418,`color-12`),ag()()(),Tl(4419,`blockquote`)(4420,`p`),cN(4421,`Também é possível utilizar as 35 cores da paleta `),Tl(4422,`strong`),cN(4423,`Caption Tag Colors`),ag(),cN(4424,`:`),ag()(),Tl(4425,`ul`)(4426,`li`),Gl(4427,`span`,65),Tl(4428,`code`),cN(4429,`caption-tag-01`),ag(),Gl(4430,`span`,66),Tl(4431,`code`),cN(4432,`caption-tag-02`),ag(),Gl(4433,`span`,67),Tl(4434,`code`),cN(4435,`caption-tag-03`),ag(),Gl(4436,`span`,68),Tl(4437,`code`),cN(4438,`caption-tag-04`),ag(),Gl(4439,`span`,69),Tl(4440,`code`),cN(4441,`caption-tag-05`),ag()(),Tl(4442,`li`),Gl(4443,`span`,70),Tl(4444,`code`),cN(4445,`caption-tag-06`),ag(),Gl(4446,`span`,71),Tl(4447,`code`),cN(4448,`caption-tag-07`),ag(),Gl(4449,`span`,72),Tl(4450,`code`),cN(4451,`caption-tag-08`),ag(),Gl(4452,`span`,73),Tl(4453,`code`),cN(4454,`caption-tag-09`),ag(),Gl(4455,`span`,74),Tl(4456,`code`),cN(4457,`caption-tag-10`),ag()(),Tl(4458,`li`),Gl(4459,`span`,75),Tl(4460,`code`),cN(4461,`caption-tag-11`),ag(),Gl(4462,`span`,76),Tl(4463,`code`),cN(4464,`caption-tag-12`),ag(),Gl(4465,`span`,77),Tl(4466,`code`),cN(4467,`caption-tag-13`),ag(),Gl(4468,`span`,78),Tl(4469,`code`),cN(4470,`caption-tag-14`),ag(),Gl(4471,`span`,79),Tl(4472,`code`),cN(4473,`caption-tag-15`),ag()(),Tl(4474,`li`),Gl(4475,`span`,80),Tl(4476,`code`),cN(4477,`caption-tag-16`),ag(),Gl(4478,`span`,81),Tl(4479,`code`),cN(4480,`caption-tag-17`),ag(),Gl(4481,`span`,82),Tl(4482,`code`),cN(4483,`caption-tag-18`),ag(),Gl(4484,`span`,83),Tl(4485,`code`),cN(4486,`caption-tag-19`),ag(),Gl(4487,`span`,84),Tl(4488,`code`),cN(4489,`caption-tag-20`),ag()(),Tl(4490,`li`),Gl(4491,`span`,85),Tl(4492,`code`),cN(4493,`caption-tag-21`),ag(),Gl(4494,`span`,86),Tl(4495,`code`),cN(4496,`caption-tag-22`),ag(),Gl(4497,`span`,87),Tl(4498,`code`),cN(4499,`caption-tag-23`),ag(),Gl(4500,`span`,88),Tl(4501,`code`),cN(4502,`caption-tag-24`),ag(),Gl(4503,`span`,89),Tl(4504,`code`),cN(4505,`caption-tag-25`),ag()(),Tl(4506,`li`),Gl(4507,`span`,90),Tl(4508,`code`),cN(4509,`caption-tag-26`),ag(),Gl(4510,`span`,91),Tl(4511,`code`),cN(4512,`caption-tag-27`),ag(),Gl(4513,`span`,92),Tl(4514,`code`),cN(4515,`caption-tag-28`),ag(),Gl(4516,`span`,93),Tl(4517,`code`),cN(4518,`caption-tag-29`),ag(),Gl(4519,`span`,94),Tl(4520,`code`),cN(4521,`caption-tag-30`),ag()(),Tl(4522,`li`),Gl(4523,`span`,95),Tl(4524,`code`),cN(4525,`caption-tag-31`),ag(),Gl(4526,`span`,96),Tl(4527,`code`),cN(4528,`caption-tag-32`),ag(),Gl(4529,`span`,97),Tl(4530,`code`),cN(4531,`caption-tag-33`),ag(),Gl(4532,`span`,98),Tl(4533,`code`),cN(4534,`caption-tag-34`),ag(),Gl(4535,`span`,99),Tl(4536,`code`),cN(4537,`caption-tag-35`),ag()()(),Tl(4538,`p`),cN(4539,`Exemplo de uso:`),ag(),Tl(4540,`pre`)(4541,`code`),cN(4542,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),ag()()()(),Tl(4543,`tr`,17)(4544,`td`,18)(4545,`div`,19)(4546,`span`,20),cN(4547,` icon`),Gl(4548,`br`),ag()()(),Tl(4549,`td`,21)(4550,`code`,22),cN(4551,`boolean `),ag(),Tl(4552,`code`,31),cN(4553,` string `),ag(),Tl(4554,`code`,48),cN(4555,` TemplateRef<void>`),ag()(),Tl(4556,`td`,24)(4557,`em`)(4558,`strong`),cN(4559,`(opcional)`),ag()(),Tl(4560,`p`),cN(4561,`Define ou ativa um ícone que será exibido ao lado do valor da `),Tl(4562,`em`),cN(4563,`tag`),ag(),cN(4564,`.`),ag(),Tl(4565,`p`),cN(4566,`Quando `),Tl(4567,`code`),cN(4568,`p-type`),ag(),cN(4569,` estiver definida, basta informar um valor igual a `),Tl(4570,`code`),cN(4571,`true`),ag(),cN(4572,` para que o ícone seja exibido conforme descrições abaixo:`),ag(),Tl(4573,`ul`)(4574,`li`),Gl(4575,`span`,114),cN(4576,` - `),Tl(4577,`code`),cN(4578,`success`),ag()(),Tl(4579,`li`),Gl(4580,`span`,115),cN(4581,` - `),Tl(4582,`code`),cN(4583,`warning`),ag()(),Tl(4584,`li`),Gl(4585,`span`,116),cN(4586,` - `),Tl(4587,`code`),cN(4588,`danger`),ag()(),Tl(4589,`li`),Gl(4590,`span`,117),cN(4591,` - `),Tl(4592,`code`),cN(4593,`info`),ag()()(),Tl(4594,`p`),cN(4595,`Também É possível usar qualquer um dos ícones da `),Tl(4596,`a`,26),cN(4597,`Biblioteca de ícones`),ag(),cN(4598,`. conforme exemplo abaixo:`),ag(),Tl(4599,`pre`)(4600,`code`),cN(4601,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),ag()(),Tl(4602,`p`),cN(4603,`como também utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(4604,`em`),cN(4605,`Font Awesome`),ag(),cN(4606,`, da seguinte forma:`),ag(),Tl(4607,`pre`)(4608,`code`),cN(4609,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),ag()(),Tl(4610,`p`),cN(4611,`Outra opção seria a customização do ícone através do `),Tl(4612,`code`),cN(4613,`TemplateRef`),ag(),cN(4614,`, conforme exemplo abaixo:`),ag(),Tl(4615,`pre`)(4616,`code`),cN(4617,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(4618,`blockquote`)(4619,`p`),cN(4620,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(4621,`code`),cN(4622,`font-size: inherit`),ag(),cN(4623,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(4624,`tr`,17)(4625,`td`,18)(4626,`div`,19)(4627,`span`,20),cN(4628,` label`),Gl(4629,`br`),ag()()(),Tl(4630,`td`,21)(4631,`code`,31),cN(4632,`string`),ag()(),Tl(4633,`td`,24)(4634,`p`),cN(4635,`Texto que será exibido na coluna.`),ag()()(),Tl(4636,`tr`,17)(4637,`td`,18)(4638,`div`,19)(4639,`span`,20),cN(4640,` textColor`),Gl(4641,`br`),ag()()(),Tl(4642,`td`,21)(4643,`code`,31),cN(4644,`string`),ag()(),Tl(4645,`td`,24)(4646,`em`)(4647,`strong`),cN(4648,`(opcional)`),ag()(),Tl(4649,`p`),cN(4650,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),ag(),Tl(4651,`ul`)(4652,`li`)(4653,`p`),cN(4654,`Hexadeximal, por exemplo `),Tl(4655,`code`),cN(4656,`#c64840`),ag(),cN(4657,`;`),ag()(),Tl(4658,`li`)(4659,`p`),cN(4660,`RGB, como `),Tl(4661,`code`),cN(4662,`rgb(0, 0, 165)`),ag(),cN(4663,`;`),ag()(),Tl(4664,`li`)(4665,`p`),cN(4666,`O nome da cor, por exemplo `),Tl(4667,`code`),cN(4668,`blue`),ag(),cN(4669,`;`),ag()(),Tl(4670,`li`)(4671,`p`),cN(4672,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),ag(),Tl(4673,`ul`)(4674,`li`),Gl(4675,`span`,53),Tl(4676,`code`),cN(4677,`color-01`),ag()(),Tl(4678,`li`),Gl(4679,`span`,54),Tl(4680,`code`),cN(4681,`color-02`),ag()(),Tl(4682,`li`),Gl(4683,`span`,55),Tl(4684,`code`),cN(4685,`color-03`),ag()(),Tl(4686,`li`),Gl(4687,`span`,56),Tl(4688,`code`),cN(4689,`color-04`),ag()(),Tl(4690,`li`),Gl(4691,`span`,57),Tl(4692,`code`),cN(4693,`color-05`),ag()(),Tl(4694,`li`),Gl(4695,`span`,58),Tl(4696,`code`),cN(4697,`color-06`),ag()(),Tl(4698,`li`),Gl(4699,`span`,59),Tl(4700,`code`),cN(4701,`color-07`),ag()(),Tl(4702,`li`),Gl(4703,`span`,60),Tl(4704,`code`),cN(4705,`color-08`),ag()(),Tl(4706,`li`),Gl(4707,`span`,61),Tl(4708,`code`),cN(4709,`color-09`),ag()(),Tl(4710,`li`),Gl(4711,`span`,62),Tl(4712,`code`),cN(4713,`color-10`),ag()(),Tl(4714,`li`),Gl(4715,`span`,63),Tl(4716,`code`),cN(4717,`color-11`),ag()(),Tl(4718,`li`),Gl(4719,`span`,64),Tl(4720,`code`),cN(4721,`color-12`),ag()()()(),Tl(4722,`li`)(4723,`p`),cN(4724,`Para uma melhor acessibilidade no uso do componente é recomendável utilizar cores com um melhor contraste em relação ao background.`),ag()()(),Tl(4725,`blockquote`)(4726,`p`)(4727,`strong`),cN(4728,`Atenção:`),ag(),cN(4729,` A propriedade `),Tl(4730,`code`),cN(4731,`p-type`),ag(),cN(4732,` sobrepõe esta definição.`),ag()(),Tl(4733,`blockquote`)(4734,`p`)(4735,`strong`),cN(4736,`Atenção:`),ag(),cN(4737,` As cores da paleta `),Tl(4738,`strong`),cN(4739,`Caption Tag Colors`),ag(),cN(4740,` (`),Tl(4741,`code`),cN(4742,`caption-tag-01`),ag(),cN(4743,` a `),Tl(4744,`code`),cN(4745,`caption-tag-35`),ag(),cN(4746,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),ag()()()(),Tl(4747,`tr`,17)(4748,`td`,18)(4749,`div`,19)(4750,`span`,20),cN(4751,` tooltip`),Gl(4752,`br`),ag()()(),Tl(4753,`td`,21)(4754,`code`,31),cN(4755,`string`),ag()(),Tl(4756,`td`,24)(4757,`em`)(4758,`strong`),cN(4759,`(opcional)`),ag()(),Tl(4760,`p`),cN(4761,`Define um texto de ajuda que será exibido ao passar o `),Tl(4762,`em`),cN(4763,`mouse`),ag(),cN(4764,` em cima do `),Tl(4765,`em`),cN(4766,`label`),ag(),cN(4767,`.`),ag(),Tl(4768,`blockquote`)(4769,`p`),cN(4770,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),ag()()()(),Tl(4771,`tr`,17)(4772,`td`,18)(4773,`div`,19)(4774,`span`,20),cN(4775,` type`),Gl(4776,`br`),ag()()(),Tl(4777,`td`,21)(4778,`code`,118),cN(4779,`PoTagType`),ag()(),Tl(4780,`td`,24)(4781,`em`)(4782,`strong`),cN(4783,`(opcional)`),ag()(),Tl(4784,`p`),cN(4785,`Define o tipo da `),Tl(4786,`em`),cN(4787,`tag`),ag(),cN(4788,`.`),ag(),Tl(4789,`p`),cN(4790,`Valores válidos:`),ag(),Tl(4791,`ul`)(4792,`li`)(4793,`code`),cN(4794,`success`),ag(),cN(4795,`: cor verde utilizada para simbolizar sucesso ou êxito.`),ag(),Tl(4796,`li`)(4797,`code`),cN(4798,`warning`),ag(),cN(4799,`: cor amarela que representa aviso ou advertência.`),ag(),Tl(4800,`li`)(4801,`code`),cN(4802,`danger`),ag(),cN(4803,`: cor vermelha para erro ou aviso crítico.`),ag(),Tl(4804,`li`)(4805,`code`),cN(4806,`info`),ag(),cN(4807,`: cor cinza escuro que caracteriza conteúdo informativo.`),ag()(),Tl(4808,`blockquote`)(4809,`p`),cN(4810,`Quando esta propriedade for definida, irá sobrepor a definição de `),Tl(4811,`code`),cN(4812,`p-color`),ag(),cN(4813,` e `),Tl(4814,`code`),cN(4815,`p-icon`),ag(),cN(4816,` somente será exibido caso seja `),Tl(4817,`code`),cN(4818,`true`),ag(),cN(4819,`.`),ag()()()(),Tl(4820,`tr`,17)(4821,`td`,18)(4822,`div`,19)(4823,`span`,20),cN(4824,` value`),Gl(4825,`br`),ag()()(),Tl(4826,`td`,21)(4827,`code`,31),cN(4828,`string `),ag(),Tl(4829,`code`,35),cN(4830,` number`),ag()(),Tl(4831,`td`,24)(4832,`p`),cN(4833,`Valor que será usado como referência para exibição do conteúdo na coluna.`),ag()()()(),Tl(4834,`h4`,46)(4835,`code`,5),cN(4836,`PoTableDetailColumn`),ag()(),Tl(4837,`div`,2)(4838,`p`),cN(4839,`Interface para configuração das colunas do `),Tl(4840,`code`),cN(4841,`po-table-detail`),ag(),cN(4842,`.`),ag()(),Tl(4843,`h4`,13),cN(4844,`Propriedades`),ag(),Tl(4845,`table`,14)(4846,`tr`,15)(4847,`th`,16),cN(4848,`Nome`),ag(),Tl(4849,`th`,16),cN(4850,`Tipo`),ag(),Tl(4851,`th`,16),cN(4852,`Descrição`),ag()(),Tl(4853,`tr`,17)(4854,`td`,18)(4855,`div`,19)(4856,`span`,20),cN(4857,` format`),Gl(4858,`br`),ag()()(),Tl(4859,`td`,21)(4860,`code`,31),cN(4861,`string`),ag()(),Tl(4862,`td`,24)(4863,`em`)(4864,`strong`),cN(4865,`(opcional)`),ag()(),Tl(4866,`p`),cN(4867,`Formato de exibição do valor da coluna:`),ag(),Tl(4868,`ul`)(4869,`li`)(4870,`p`),cN(4871,`Formato para moeda (currency). Exemplos: 'BRL', 'USD'.`),ag()(),Tl(4872,`li`)(4873,`p`),cN(4874,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ag()(),Tl(4875,`li`)(4876,`p`),cN(4877,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),ag()(),Tl(4878,`li`)(4879,`p`),cN(4880,`Formato para números (number): aceita um valor seguindo o padrão `),Tl(4881,`a`,119)(4882,`strong`),cN(4883,`DecimalPipe`),ag()(),cN(4884,` para formatação, e caso não seja informado, o número será exibido na sua forma original. Exemplo:`),ag(),Tl(4885,`ul`)(4886,`li`),cN(4887,`Valor de entrada: `),Tl(4888,`code`),cN(4889,`50`),ag(),cN(4890,` e valor para formatação: `),Tl(4891,`code`),cN(4892,`'1.2-5'`),ag(),cN(4893,` o resultado será: `),Tl(4894,`code`),cN(4895,`50.00`),ag()()()()()()(),Tl(4896,`tr`,17)(4897,`td`,18)(4898,`div`,19)(4899,`span`,20),cN(4900,` label`),Gl(4901,`br`),ag()()(),Tl(4902,`td`,21)(4903,`code`,31),cN(4904,`string`),ag()(),Tl(4905,`td`,24)(4906,`em`)(4907,`strong`),cN(4908,`(opcional)`),ag()(),Tl(4909,`p`),cN(4910,`Texto para título da coluna.`),ag()()(),Tl(4911,`tr`,17)(4912,`td`,18)(4913,`div`,19)(4914,`span`,20),cN(4915,` property`),Gl(4916,`br`),ag()()(),Tl(4917,`td`,21)(4918,`code`,31),cN(4919,`string`),ag()(),Tl(4920,`td`,24)(4921,`em`)(4922,`strong`),cN(4923,`(opcional)`),ag()(),Tl(4924,`p`),cN(4925,`Nome identificador da coluna.`),ag()()(),Tl(4926,`tr`,17)(4927,`td`,18)(4928,`div`,19)(4929,`span`,20),cN(4930,` type`),Gl(4931,`br`),ag()()(),Tl(4932,`td`,21)(4933,`code`,31),cN(4934,`string`),ag()(),Tl(4935,`td`,24)(4936,`em`)(4937,`strong`),cN(4938,`(opcional)`),ag()(),Tl(4939,`p`),cN(4940,`Tipo da coluna.`),ag(),Tl(4941,`p`),cN(4942,`Valores válidos:`),ag(),Tl(4943,`ul`)(4944,`li`)(4945,`p`)(4946,`code`),cN(4947,`currency`),ag(),cN(4948,`: valores monetários.`),ag()(),Tl(4949,`li`)(4950,`p`)(4951,`code`),cN(4952,`date`),ag(),cN(4953,`: valor de datas.`),ag(),Tl(4954,`ul`)(4955,`li`),cN(4956,`Aceita os tipos `),Tl(4957,`em`),cN(4958,`string`),ag(),cN(4959,` e `),Tl(4960,`em`),cN(4961,`Date`),ag(),cN(4962,` padr\xE3o do Javascript,
por exemplo: `),Tl(4963,`code`),cN(4964,`'2017-11-28'`),ag(),cN(4965,` ou `),Tl(4966,`code`),cN(4967,`new Date(2017, 10, 28)`),ag(),cN(4968,`.`),ag()()(),Tl(4969,`li`)(4970,`p`)(4971,`code`),cN(4972,`time`),ag(),cN(4973,`: valor de horário.`),ag()(),Tl(4974,`li`)(4975,`p`)(4976,`code`),cN(4977,`number`),ag(),cN(4978,`: valores numéricos.`),ag()(),Tl(4979,`li`)(4980,`p`)(4981,`code`),cN(4982,`dateTime`),ag(),cN(4983,`: valor de data com horário.`),ag(),Tl(4984,`ul`)(4985,`li`),cN(4986,`Aceita o tipo `),Tl(4987,`em`),cN(4988,`string`),ag(),cN(4989,` no formato `),Tl(4990,`strong`),cN(4991,`ISO-8601`),ag(),cN(4992,` extendido `),Tl(4993,`strong`),cN(4994,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ag(),cN(4995,`
e o tipo `),Tl(4996,`em`),cN(4997,`Date`),ag(),cN(4998,` padrão do Javascript, por exemplo: `),Tl(4999,`code`),cN(5e3,`'2017-11-28T00:00:00-02:00'`),ag(),cN(5001,` ou `),Tl(5002,`code`),cN(5003,`new Date(2017, 10, 28)`),ag(),cN(5004,`.`),ag(),Tl(5005,`li`),cN(5006,`Aceita o tipo `),Tl(5007,`em`),cN(5008,`string`),ag(),cN(5009,` nos formatos `),Tl(5010,`strong`),cN(5011,`'HH:mm:ss'`),ag(),cN(5012,` ou `),Tl(5013,`strong`),cN(5014,`'HH:mm:ss.ffffff'`),ag(),cN(5015,`, por exemplo: `),Tl(5016,`code`),cN(5017,`'23:12:45'`),ag(),cN(5018,`.`),ag()()()()()()(),Tl(5019,`h4`,46)(5020,`code`,5),cN(5021,`PoTableDetail`),ag()(),Tl(5022,`div`,2)(5023,`p`),cN(5024,`Interface para configuração do `),Tl(5025,`em`),cN(5026,`detail`),ag(),cN(5027,` do componente `),Tl(5028,`code`),cN(5029,`po-table`),ag(),cN(5030,`.`),ag()(),Tl(5031,`h4`,13),cN(5032,`Propriedades`),ag(),Tl(5033,`table`,14)(5034,`tr`,15)(5035,`th`,16),cN(5036,`Nome`),ag(),Tl(5037,`th`,16),cN(5038,`Tipo`),ag(),Tl(5039,`th`,16),cN(5040,`Descrição`),ag()(),Tl(5041,`tr`,17)(5042,`td`,18)(5043,`div`,19)(5044,`span`,20),cN(5045,` columns`),Gl(5046,`br`),ag()()(),Tl(5047,`td`,21)(5048,`code`,120),cN(5049,`Array<PoTableDetailColumn>`),ag()(),Tl(5050,`td`,24)(5051,`p`),cN(5052,`Define uma lista do tipo `),Tl(5053,`code`),cN(5054,`PoTableDetailColumn`),ag(),cN(5055,` para as colunas do objet `),Tl(5056,`em`),cN(5057,`detail`),ag(),cN(5058,`. Por exemplo:`),ag(),Tl(5059,`pre`)(5060,`code`),cN(5061,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),ag()()()(),Tl(5062,`tr`,17)(5063,`td`,18)(5064,`div`,19)(5065,`span`,20),cN(5066,` hideSelect`),Gl(5067,`br`),ag()()(),Tl(5068,`td`,21)(5069,`code`,22),cN(5070,`boolean`),ag()(),Tl(5071,`td`,24)(5072,`em`)(5073,`strong`),cN(5074,`(opcional)`),ag()(),Tl(5075,`p`),cN(5076,`Define se o checkbox de seleção do detail será exibido. Valor padrão 'false'.`),ag()()(),Tl(5077,`tr`,17)(5078,`td`,18)(5079,`div`,19)(5080,`span`,20),cN(5081,` typeHeader`),Gl(5082,`br`),ag()()(),Tl(5083,`td`,21)(5084,`code`,31),cN(5085,`string`),ag()(),Tl(5086,`td`,24)(5087,`em`)(5088,`strong`),cN(5089,`(opcional)`),ag()(),Tl(5090,`p`),cN(5091,`Define o tipo de cabeçalho para o conteúdo do `),Tl(5092,`em`),cN(5093,`detail`),ag(),cN(5094,` .`),ag(),Tl(5095,`p`),cN(5096,`Valores válidos:`),ag(),Tl(5097,`ul`)(5098,`li`)(5099,`code`),cN(5100,`inline`),ag(),cN(5101,`: Atribui o cabeçalho na mesma linha do `),Tl(5102,`em`),cN(5103,`detail`),ag(),cN(5104,`.`),ag(),Tl(5105,`li`)(5106,`code`),cN(5107,`top`),ag(),cN(5108,`: Atribui o cabeçalho acima do `),Tl(5109,`em`),cN(5110,`detail`),ag(),cN(5111,`, idêntico ao `),Tl(5112,`code`),cN(5113,`po-table`),ag(),cN(5114,`.`),ag(),Tl(5115,`li`)(5116,`code`),cN(5117,`none`),ag(),cN(5118,`: Remove o cabeçalho do `),Tl(5119,`em`),cN(5120,`detail`),ag(),cN(5121,`.`),ag()()()()(),Tl(5122,`h4`,46)(5123,`code`,5),cN(5124,`PoTableSubtitleColumn`),ag()(),Tl(5125,`div`,2)(5126,`p`),cN(5127,`Interface para configuração das colunas de legenda do Po-Table.`),ag()(),Tl(5128,`h4`,13),cN(5129,`Propriedades`),ag(),Tl(5130,`table`,14)(5131,`tr`,15)(5132,`th`,16),cN(5133,`Nome`),ag(),Tl(5134,`th`,16),cN(5135,`Tipo`),ag(),Tl(5136,`th`,16),cN(5137,`Descrição`),ag()(),Tl(5138,`tr`,17)(5139,`td`,18)(5140,`div`,19)(5141,`span`,20),cN(5142,` color`),Gl(5143,`br`),ag()()(),Tl(5144,`td`,21)(5145,`code`,31),cN(5146,`string`),ag()(),Tl(5147,`td`,24)(5148,`em`)(5149,`strong`),cN(5150,`(opcional)`),ag()(),Tl(5151,`p`),cN(5152,`Define a cor do `),Tl(5153,`em`),cN(5154,`status`),ag(),cN(5155,`.`),ag(),Tl(5156,`p`),cN(5157,`Valores válidos:`),ag(),Tl(5158,`ul`)(5159,`li`),Gl(5160,`span`,53),Tl(5161,`code`),cN(5162,`color-01`),ag()(),Tl(5163,`li`),Gl(5164,`span`,54),Tl(5165,`code`),cN(5166,`color-02`),ag()(),Tl(5167,`li`),Gl(5168,`span`,55),Tl(5169,`code`),cN(5170,`color-03`),ag()(),Tl(5171,`li`),Gl(5172,`span`,56),Tl(5173,`code`),cN(5174,`color-04`),ag()(),Tl(5175,`li`),Gl(5176,`span`,57),Tl(5177,`code`),cN(5178,`color-05`),ag()(),Tl(5179,`li`),Gl(5180,`span`,58),Tl(5181,`code`),cN(5182,`color-06`),ag()(),Tl(5183,`li`),Gl(5184,`span`,59),Tl(5185,`code`),cN(5186,`color-07`),ag()(),Tl(5187,`li`),Gl(5188,`span`,60),Tl(5189,`code`),cN(5190,`color-08`),ag()(),Tl(5191,`li`),Gl(5192,`span`,61),Tl(5193,`code`),cN(5194,`color-09`),ag()(),Tl(5195,`li`),Gl(5196,`span`,62),Tl(5197,`code`),cN(5198,`color-10`),ag()(),Tl(5199,`li`),Gl(5200,`span`,63),Tl(5201,`code`),cN(5202,`color-11`),ag()(),Tl(5203,`li`),Gl(5204,`span`,64),Tl(5205,`code`),cN(5206,`color-12`),ag()()(),Tl(5207,`blockquote`)(5208,`p`),cN(5209,`Também é possível utilizar as 35 cores da paleta `),Tl(5210,`strong`),cN(5211,`Caption Tag Colors`),ag(),cN(5212,`:`),ag()(),Tl(5213,`ul`)(5214,`li`),Gl(5215,`span`,65),Tl(5216,`code`),cN(5217,`caption-tag-01`),ag(),Gl(5218,`span`,66),Tl(5219,`code`),cN(5220,`caption-tag-02`),ag(),Gl(5221,`span`,67),Tl(5222,`code`),cN(5223,`caption-tag-03`),ag(),Gl(5224,`span`,68),Tl(5225,`code`),cN(5226,`caption-tag-04`),ag(),Gl(5227,`span`,69),Tl(5228,`code`),cN(5229,`caption-tag-05`),ag()(),Tl(5230,`li`),Gl(5231,`span`,70),Tl(5232,`code`),cN(5233,`caption-tag-06`),ag(),Gl(5234,`span`,71),Tl(5235,`code`),cN(5236,`caption-tag-07`),ag(),Gl(5237,`span`,72),Tl(5238,`code`),cN(5239,`caption-tag-08`),ag(),Gl(5240,`span`,73),Tl(5241,`code`),cN(5242,`caption-tag-09`),ag(),Gl(5243,`span`,74),Tl(5244,`code`),cN(5245,`caption-tag-10`),ag()(),Tl(5246,`li`),Gl(5247,`span`,75),Tl(5248,`code`),cN(5249,`caption-tag-11`),ag(),Gl(5250,`span`,76),Tl(5251,`code`),cN(5252,`caption-tag-12`),ag(),Gl(5253,`span`,77),Tl(5254,`code`),cN(5255,`caption-tag-13`),ag(),Gl(5256,`span`,78),Tl(5257,`code`),cN(5258,`caption-tag-14`),ag(),Gl(5259,`span`,79),Tl(5260,`code`),cN(5261,`caption-tag-15`),ag()(),Tl(5262,`li`),Gl(5263,`span`,80),Tl(5264,`code`),cN(5265,`caption-tag-16`),ag(),Gl(5266,`span`,81),Tl(5267,`code`),cN(5268,`caption-tag-17`),ag(),Gl(5269,`span`,82),Tl(5270,`code`),cN(5271,`caption-tag-18`),ag(),Gl(5272,`span`,83),Tl(5273,`code`),cN(5274,`caption-tag-19`),ag(),Gl(5275,`span`,84),Tl(5276,`code`),cN(5277,`caption-tag-20`),ag()(),Tl(5278,`li`),Gl(5279,`span`,85),Tl(5280,`code`),cN(5281,`caption-tag-21`),ag(),Gl(5282,`span`,86),Tl(5283,`code`),cN(5284,`caption-tag-22`),ag(),Gl(5285,`span`,87),Tl(5286,`code`),cN(5287,`caption-tag-23`),ag(),Gl(5288,`span`,88),Tl(5289,`code`),cN(5290,`caption-tag-24`),ag(),Gl(5291,`span`,89),Tl(5292,`code`),cN(5293,`caption-tag-25`),ag()(),Tl(5294,`li`),Gl(5295,`span`,90),Tl(5296,`code`),cN(5297,`caption-tag-26`),ag(),Gl(5298,`span`,91),Tl(5299,`code`),cN(5300,`caption-tag-27`),ag(),Gl(5301,`span`,92),Tl(5302,`code`),cN(5303,`caption-tag-28`),ag(),Gl(5304,`span`,93),Tl(5305,`code`),cN(5306,`caption-tag-29`),ag(),Gl(5307,`span`,94),Tl(5308,`code`),cN(5309,`caption-tag-30`),ag()(),Tl(5310,`li`),Gl(5311,`span`,95),Tl(5312,`code`),cN(5313,`caption-tag-31`),ag(),Gl(5314,`span`,96),Tl(5315,`code`),cN(5316,`caption-tag-32`),ag(),Gl(5317,`span`,97),Tl(5318,`code`),cN(5319,`caption-tag-33`),ag(),Gl(5320,`span`,98),Tl(5321,`code`),cN(5322,`caption-tag-34`),ag(),Gl(5323,`span`,99),Tl(5324,`code`),cN(5325,`caption-tag-35`),ag()()()()(),Tl(5326,`tr`,17)(5327,`td`,18)(5328,`div`,19)(5329,`span`,20),cN(5330,` content`),Gl(5331,`br`),ag()()(),Tl(5332,`td`,21)(5333,`code`,31),cN(5334,`string`),ag()(),Tl(5335,`td`,24)(5336,`p`),cN(5337,`Conteúdo que será exibido na coluna da tabela.`),ag()()(),Tl(5338,`tr`,17)(5339,`td`,18)(5340,`div`,19)(5341,`span`,20),cN(5342,` label`),Gl(5343,`br`),ag()()(),Tl(5344,`td`,21)(5345,`code`,31),cN(5346,`string`),ag()(),Tl(5347,`td`,24)(5348,`p`),cN(5349,`Texto que será exibido no rodapé da tabela como legenda.`),ag()()(),Tl(5350,`tr`,17)(5351,`td`,18)(5352,`div`,19)(5353,`span`,20),cN(5354,` value`),Gl(5355,`br`),ag()()(),Tl(5356,`td`,21)(5357,`code`,31),cN(5358,`string `),ag(),Tl(5359,`code`,35),cN(5360,` number`),ag()(),Tl(5361,`td`,24)(5362,`p`),cN(5363,`Valor que será usado como referência para exibição do conteúdo na coluna.`),ag()()()(),Tl(5364,`h3`),cN(5365,`Enums`),ag(),Tl(5366,`h4`,4)(5367,`code`,5),cN(5368,`PoTableColumnSortType`),ag()(),Tl(5369,`div`,2)(5370,`p`),cN(5371,`Tipos de ordenação das colunas da tabela.`),ag()(),Tl(5372,`h4`,13),cN(5373,`Propriedades`),ag(),Tl(5374,`table`,14)(5375,`tr`,15)(5376,`th`,16),cN(5377,`Nome`),ag(),Tl(5378,`th`,16),cN(5379,`Descrição`),ag()(),Tl(5380,`tr`,17)(5381,`td`,18)(5382,`div`,19)(5383,`span`,20),cN(5384,` Ascending`),Gl(5385,`br`),ag()()(),Tl(5386,`td`,24)(5387,`p`),cN(5388,`Ordenação ascendente`),ag()()(),Tl(5389,`tr`,17)(5390,`td`,18)(5391,`div`,19)(5392,`span`,20),cN(5393,` Descending`),Gl(5394,`br`),ag()()(),Tl(5395,`td`,24)(5396,`p`),cN(5397,`Ordenação descendente`),ag()()()(),Tl(5398,`h4`,4)(5399,`code`,5),cN(5400,`PoTableColumnSpacing`),ag()(),Tl(5401,`div`,2)(5402,`p`),cN(5403,`Tipos de espaçamento interno (padding) das células (`),Tl(5404,`strong`),cN(5405,`p-spacing`),ag(),cN(5406,`) do po-table.`),ag()(),Tl(5407,`h4`,13),cN(5408,`Propriedades`),ag(),Tl(5409,`table`,14)(5410,`tr`,15)(5411,`th`,16),cN(5412,`Nome`),ag(),Tl(5413,`th`,16),cN(5414,`Descrição`),ag()(),Tl(5415,`tr`,17)(5416,`td`,18)(5417,`div`,19)(5418,`span`,20),cN(5419,` ExtraSmall`),Gl(5420,`br`),ag()()(),Tl(5421,`td`,24)(5422,`p`),cN(5423,`Espaçamento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal).`),ag()()(),Tl(5424,`tr`,17)(5425,`td`,18)(5426,`div`,19)(5427,`span`,20),cN(5428,` Small`),Gl(5429,`br`),ag()()(),Tl(5430,`td`,24)(5431,`p`),cN(5432,`Espaçamento pequeno: 0.5rem (vertical) x 1rem (horizontal).`),ag()()(),Tl(5433,`tr`,17)(5434,`td`,18)(5435,`div`,19)(5436,`span`,20),cN(5437,` Medium`),Gl(5438,`br`),ag()()(),Tl(5439,`td`,24)(5440,`p`),cN(5441,`Espaçamento médio: 0.75rem (vertical) x 1rem (horizontal).`),ag()()(),Tl(5442,`tr`,17)(5443,`td`,18)(5444,`div`,19)(5445,`span`,20),cN(5446,` Large`),Gl(5447,`br`),ag()()(),Tl(5448,`td`,24)(5449,`p`),cN(5450,`Espaçamento grande: 1rem (vertical) x 1rem (horizontal).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return r})();var mn=[{path:``,component:(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=9;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:`merge`}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||r)(w(Xn),w(Cn))};static ɵcmp=Un({type:r,selectors:[[`ng-component`]],standalone:!1,decls:14,vars:4,consts:[[`p-title`,`Table`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,a){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return a.changeTab(`doc`)}),Gl(3,`sample-po-table-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return a.changeTab(`web`)}),Gl(5,`sample-po-table-basic-view`)(6,`sample-po-table-labs-view`)(7,`sample-po-table-with-api-view`)(8,`sample-po-table-transport-view`)(9,`sample-po-table-airfare-view`)(10,`sample-po-table-components-view`)(11,`sample-po-table-heroes-view`)(12,`sample-po-table-draggable-view`)(13,`sample-po-table-search-ai-view`),ag()()()),l&2&&(nw(`p-actions`,a.actions),jp(2),nw(`p-active`,a.activeTab===`doc`),jp(2),nw(`p-hide`,a.hidePoWebSample)(`p-active`,a.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Je,Ze,et,nt,at,lt,mt,st,ct,ut],encapsulation:2,changeDetection:1})}return r})()}];var bt=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue({imports:[bL.forChild(mn),bL]})}return r})();var xi=(()=>{class r{static ɵfac=function(l){return new(l||r)};static ɵmod=he$1({type:r});static ɵinj=ue({imports:[ar,bt]})}return r})();export{xi as DocPoTableModule};