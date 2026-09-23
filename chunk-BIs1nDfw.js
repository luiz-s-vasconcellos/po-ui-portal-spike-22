import{$i as ow,$r as Vx,Br as TN,Ci as eP,Et as V8e,F as G4,Fn as y0e,Hr as Tw,Ii as ht$1,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,Lr as RN,M as ECe,Mi as gg,Mn as xbe,Ni as he,Nt as Y0e,P as Eu,Qi as oN,Qn as EN,S as B4,Sa as yN,Si as db,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,X as KH,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_ as $8e,_r as Ml,aa as qk,an as k4,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,er as FN,ga as w,gi as bw,hr as MY,in as jye,ir as I,ki as fm,kn as vr,kr as PN,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,oi as YO,on as kbe,pt as Pbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx}from"./main-NT5YGKBQ.js";var at=()=>({value:`Option 1`});var lt=()=>({value:`Option 2`});var rt=(a,q)=>[a,q];var Ae=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`combo`,`p-label`,`PO Combo`,3,`p-options`]],template:function(p,n){p&1&&ql(0,`po-combo`,0),p&2&&cw(`p-options`,RN(3,rt,TN(1,at),TN(2,lt)))},dependencies:[B4],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo Basic`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-basic/sample-po-combo-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-basic/sample-po-combo-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-combo-basic`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,mt,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ae],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconsOptions=[{label:`an an-building-apartment`,value:`an an-building-apartment`},{label:`an an-gas-pump`,value:`an an-gas-pump`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];propertiesOptions=[{value:`changeOnEnter`,label:`Change On Enter`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`disabledInitFilter`,label:`Disabled Init Filter`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`sort`,label:`Sort`},{value:`clean`,label:`Clean`},{value:`disabledTabFilter`,label:`Disabled Tab Filter`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(m){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event=``,this.debounceTime=void 0,this.fieldLabel=``,this.fieldValue=``,this.filterMinlength=void 0,this.filterService=``,this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals=``,this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.selectedOptionsGroup=void 0,this.size=`medium`}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}]}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&`options`in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return[...m,{label:d,value:c}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-labs`]],standalone:!1,decls:44,vars:62,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`combo`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-change-on-enter`,`p-clean`,`p-debounce-time`,`p-disabled`,`p-disabled-init-filter`,`p-disabled-tab-filter`,`p-field-label`,`p-field-value`,`p-filter-minlength`,`p-filter-mode`,`p-filter-service`,`p-help`,`p-icon`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-sort`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`,`p-listbox-control-position`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po combo options group`],[`name`,`comboOptionGroupSwitch`,`p-label`,`Combo options group`,1,`po-lg-4`,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po combo options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter Mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`debounceTime`,`p-clean`,``,`p-label`,`Debounce Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterMinlength`,`p-clean`,``,`p-label`,`Filter Min Length`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let d=Vx();Ml(0,`po-combo`,2),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.combo,i)||(n.combo=i),Jy(i)}),ht$1(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,3),ql(3,`po-info`,4)(4,`po-info`,5),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0),ql(8,`po-divider`,6),Ml(9,`div`,3)(10,`po-switch`,7),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),Jy(i)}),lg(),f0(),Ml(11,`po-select`,8),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),Jy(i)}),ht$1(`p-change`,function(){return n.optionsGroupSelection()}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.optionsGroup,i)||(n.optionsGroup=i),Jy(i)}),lg(),f0(),lg(),ql(13,`po-divider`,10),Ml(14,`div`,3)(15,`po-input`,11),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.option.label,i)||(n.option.label=i),Jy(i)}),lg(),f0(),Ml(16,`po-input`,12),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.option.value,i)||(n.option.value=i),Jy(i)}),lg(),f0(),lg(),Ml(17,`div`,3)(18,`po-button`,13),ht$1(`p-click`,function(){return n.addOption()}),lg()()(),ql(19,`po-divider`),Ml(20,`form`,null,1)(22,`po-input`,14),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.label,i)||(n.label=i),Jy(i)}),lg(),f0(),Ml(23,`po-input`,15),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.help,i)||(n.help=i),Jy(i)}),lg(),f0(),Ml(24,`po-input`,16),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.helperText,i)||(n.helperText=i),Jy(i)}),lg(),f0(),Ml(25,`po-input`,17),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.placeholder,i)||(n.placeholder=i),Jy(i)}),lg(),f0(),Ml(26,`po-input`,18),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),Jy(i)}),lg(),f0(),Ml(27,`div`,3)(28,`po-checkbox-group`,19),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.properties,i)||(n.properties=i),Jy(i)}),lg(),f0(),Ml(29,`po-radio-group`,20),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.icon,i)||(n.icon=i),Jy(i)}),lg(),f0(),Ml(30,`po-radio-group`,21),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.filterMode,i)||(n.filterMode=i),Jy(i)}),lg(),f0(),Ml(31,`po-radio-group`,22),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.size,i)||(n.size=i),Jy(i)}),lg(),f0(),Ml(32,`po-radio-group`,23),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.listboxPosition,i)||(n.listboxPosition=i),Jy(i)}),lg(),f0(),lg(),Ml(33,`div`,3)(34,`po-input`,24),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.filterService,i)||(n.filterService=i),Jy(i)}),lg(),f0(),Ml(35,`po-input`,25),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.literals,i)||(n.literals=i),Jy(i)}),ht$1(`p-change`,function(){return n.changeLiterals()}),lg(),f0(),lg(),Ml(36,`div`,3)(37,`po-input`,26),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.fieldValue,i)||(n.fieldValue=i),Jy(i)}),lg(),f0(),Ml(38,`po-input`,27),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.fieldLabel,i)||(n.fieldLabel=i),Jy(i)}),lg(),f0(),lg(),Ml(39,`div`,3)(40,`po-number`,28),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.debounceTime,i)||(n.debounceTime=i),Jy(i)}),lg(),f0(),Ml(41,`po-number`,29),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.filterMinlength,i)||(n.filterMinlength=i),Jy(i)}),lg(),f0(),lg(),Ml(42,`div`,3)(43,`po-button`,30),ht$1(`p-click`,function(){return n.restore()}),lg()()()}if(p&2){let d=Yx(7);Tw(`ngModel`,n.combo),cw(`p-helper`,n.helperText)(`p-change-on-enter`,n.properties.includes(`changeOnEnter`))(`p-clean`,n.properties.includes(`clean`))(`p-debounce-time`,n.debounceTime)(`p-disabled`,n.properties.includes(`disabled`))(`p-disabled-init-filter`,n.properties.includes(`disableInitFilter`))(`p-disabled-tab-filter`,n.properties.includes(`disabledTabFilter`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-minlength`,n.filterMinlength)(`p-filter-mode`,n.filterMode)(`p-filter-service`,n.filterService)(`p-help`,n.help)(`p-icon`,n.icon)(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-sort`,n.properties.includes(`sort`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-listbox-control-position`,n.listboxPosition),p0(),Up(3),cw(`p-value`,n.combo),Up(),cw(`p-value`,n.event),Up(6),Tw(`ngModel`,n.comboOptionGroupSwitch),p0(),Up(),Tw(`ngModel`,n.selectedOptionsGroup),cw(`p-disabled`,!n.comboOptionGroupSwitch)(`p-options`,n.optionsGroupList),p0(),Up(),Tw(`ngModel`,n.optionsGroup),cw(`p-disabled`,!n.comboOptionGroupSwitch),p0(),Up(3),Tw(`ngModel`,n.option.label),p0(),Up(),Tw(`ngModel`,n.option.value),p0(),Up(2),cw(`p-disabled`,d.form.invalid),Up(4),Tw(`ngModel`,n.label),p0(),Up(),Tw(`ngModel`,n.help),p0(),Up(),Tw(`ngModel`,n.helperText),p0(),Up(),Tw(`ngModel`,n.placeholder),p0(),Up(),Tw(`ngModel`,n.fieldErrorMessage),p0(),Up(2),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0(),Up(),Tw(`ngModel`,n.icon),cw(`p-options`,n.iconsOptions),p0(),Up(),Tw(`ngModel`,n.filterMode),cw(`p-options`,n.filterModeOptions),p0(),Up(),Tw(`ngModel`,n.size),cw(`p-options`,n.sizeOptions),p0(),Up(),Tw(`ngModel`,n.listboxPosition),cw(`p-options`,n.listboxPositionOptions),p0(),Up(2),Tw(`ngModel`,n.filterService),p0(),Up(),Tw(`ngModel`,n.literals),p0(),Up(2),Tw(`ngModel`,n.fieldValue),p0(),Up(),Tw(`ngModel`,n.fieldLabel),p0(),Up(2),Tw(`ngModel`,n.debounceTime),p0(),Up(),Tw(`ngModel`,n.filterMinlength),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,B4,lU,xbe,q0e,Tbe,J4,kbe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo Labs`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-labs/sample-po-combo-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-helper]="helperText"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-labs/sample-po-combo-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  helperText: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
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

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-combo-labs`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ct,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ge],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{getcities(){return[{label:`São Paulo`,options:[{label:`São Paulo`,value:`sao paulo`},{label:`Campinas`,value:`campinas`}]},{label:`Paraná`,options:[{label:`São José dos Pinhais`,value:`sao jose dos pinhais`},{label:`Londrina`,value:`londrina`},{label:`Maringá`,value:`maringa`}]},{label:`Santa Catarina`,options:[{label:`Joinville`,value:`joinville`},{label:`Florianópolis`,value:`florianopolis`},{label:`Itajaí`,value:`itajai`}]}]}getMedicalSpecialty(){return[{specialty:`Allergist`,specialtyValue:`allergist`},{specialty:`Cardiologist`,specialtyValue:`cardiologist`},{specialty:`General practitioner`,specialtyValue:`generalPractitioner`},{specialty:`Dermatologist`,specialtyValue:`dermatologist`},{specialty:`Gynecologist`,specialtyValue:`gynecologist`},{specialty:`Nutritionist`,specialtyValue:`nutritionist`},{specialty:`Pediatrist`,specialtyValue:`pediatrist`},{specialty:`Psychiatrist`,specialtyValue:`psychiatrist`},{specialty:`Orthopaedist`,specialtyValue:`orthopaedist`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var bt=[`schedulingForm`];function gt(a,q){if(a&1&&(Ml(0,`div`,3),ql(1,`po-avatar`,15),Ml(2,`p`,14),mN(3),lg()()),a&2){let m=zx().$implicit,p=zx();Up(),cw(`p-src`,p.getStateByLabel(m.label)),Up(2),bw(m.label)}}function ht(a,q){if(a&1&&(Ml(0,`div`,14),mN(1),lg()),a&2){let m=zx().$implicit;Up(),bw(m.label)}}function St(a,q){if(a&1&&Tx(0,gt,4,2,`div`,3)(1,ht,2,1,`div`,14),a&2){let m=q.$implicit;Mx(m.options?0:1)}}var ze=(()=>{class a{poNotification=f(Eu);schedulingService=f(fe);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:`Particular`,value:`particular`},{label:`Health Insurance`,value:`healthInsurance`}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(m=``){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(m){return`https://thf.totvs.com.br/sample/api/static/assets/${{"São Paulo":`sp`,"Santa Catarina":`sc`,Paraná:`pr`}[m]}.png`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-scheduling`]],viewQuery:function(p,n){if(p&1&&Zl(bt,7),p&2){let d;lo(d=uo())&&(n.form=d.first)}},standalone:!1,features:[Ce([fe])],decls:20,vars:12,consts:[[`schedulingForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-placeholder`,`example@domain.com`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-label`,`Birthday`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-clean`,``,`p-label`,`Phone number`,`p-mask`,`(99) 99999-9999`,`p-placeholder`,`(99) 99999-9999`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-icon`,`an an-map-trifold`,`p-label`,`Select a location`,`p-placeholder`,`Select a location`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-combo-option-template`,``],[`name`,`typeScheduling`,`p-label`,`Type scheduling`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`medicalSpecialty`,`p-icon`,`an an-flask`,`p-label`,`Medical Specialty/Exam`,`p-required`,``,`p-sort`,``,`p-field-label`,`specialty`,`p-field-value`,`specialtyValue`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`informations`,`p-help`,`Additional informations`,`p-label`,`Informations`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Schedule`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[`p-size`,`xs`,1,`po-sm-2`,`po-md-3`,`po-lg-1`,`sample-combo-avatar-bg`,3,`p-src`]],template:function(p,n){if(p&1){let d=Vx();Ml(0,`div`,1)(1,`div`,2),mN(2,`Pre-appointment scheduling`),lg()(),Ml(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.name,i)||(n.name=i),Jy(i)}),lg(),f0(),Ml(7,`po-email`,5),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.email,i)||(n.email=i),Jy(i)}),lg(),f0(),lg(),Ml(8,`div`,3)(9,`po-datepicker`,6),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.birthday,i)||(n.birthday=i),Jy(i)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.phone,i)||(n.phone=i),Jy(i)}),lg(),f0(),lg(),Ml(11,`div`,3)(12,`po-combo`,8),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.city,i)||(n.city=i),Jy(i)}),ow(13,St,2,1,`ng-template`,9),lg(),f0(),Ml(14,`po-select`,10),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.typeScheduling,i)||(n.typeScheduling=i),Jy(i)}),lg(),f0(),Ml(15,`po-combo`,11),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.medicalSpecialty,i)||(n.medicalSpecialty=i),Jy(i)}),lg(),f0(),lg(),Ml(16,`div`,3)(17,`po-textarea`,12),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.informations,i)||(n.informations=i),Jy(i)}),lg(),f0(),lg(),Ml(18,`div`,3)(19,`po-button`,13),ht$1(`p-click`,function(){return n.confirmPreAppointment(n.name)}),lg()()()}if(p&2){let d=Yx(4);Up(6),Tw(`ngModel`,n.name),p0(),Up(),Tw(`ngModel`,n.email),p0(),Up(2),Tw(`ngModel`,n.birthday),p0(),Up(),Tw(`ngModel`,n.phone),p0(),Up(2),Tw(`ngModel`,n.city),cw(`p-options`,n.citiesOptions),p0(),Up(2),Tw(`ngModel`,n.typeScheduling),cw(`p-options`,n.typeSchedulings),p0(),Up(),Tw(`ngModel`,n.medicalSpecialty),cw(`p-options`,n.medicalSpecialtyOptions),p0(),Up(2),Tw(`ngModel`,n.informations),p0(),Up(2),cw(`p-disabled`,d.invalid)}},dependencies:[IY,wY,CY,Vk,kk,k4,Zt,B4,y0e,Y0e,KH,lU,Tbe,Pbe],styles:[`.sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}`],changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-scheduling-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo - Scheduling`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        @if (option.options) {
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1 sample-combo-avatar-bg"
              p-size="xs"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        }
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  styleUrls: ['./sample-po-combo-scheduling.component.css'],
  providers: [SamplePoComboSchedulingService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private schedulingService = inject(SamplePoComboSchedulingService);

  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),lg()()(),Ml(25,`po-tab`,10)(26,`div`)(27,`label`,6),mN(28,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`),lg(),Ml(29,`pre`,11),mN(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),lg()()()()(),Ml(31,`div`,12),ql(32,`sample-po-combo-scheduling`),lg(),ql(33,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ft,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ze],encapsulation:2,changeDetection:1})}return a})();var vt=[`transferForm`];function xt(a,q){if(a&1&&(Ml(0,`div`,3),ql(1,`po-avatar`,15),Ml(2,`div`,16)(3,`div`,17),mN(4),lg(),Ml(5,`div`,18),mN(6),lg()()()),a&2){let m=q.$implicit;Up(4),bw(m.label),Up(2),gg(`Account: `,m.value)}}var Ue=(()=>{class a{poNotification=f(Eu);form;poModal;contact;dateTransfer=new Date;typeAccount=`Checking Account`;value;cancelAction={label:`Cancel`,action:()=>this.poModal.close()};confirmAction={label:`Confirm`,action:()=>this.confirmTransfer()};typeAccounts=[{label:`Checking Account`,value:`Checking Account`},{label:`Savings Account`,value:`Savings Account`}];confirmTransfer(){this.poModal.close(),this.poNotification.success(`Successful Transfer`),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:`Checking Account`})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-transfer`]],viewQuery:function(p,n){if(p&1&&Zl(vt,7)(vr,7),p&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:15,consts:[[`transferForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`typeAccount`,`p-label`,`From`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`contact`,`p-field-value`,`id`,`p-field-label`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-icon`,`an an-user`,`p-label`,`To contact`,`p-placeholder`,`Select a contact`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-combo-option-template`,``],[`name`,`value`,`p-clean`,``,`p-label`,`Value to transfer`,`p-placeholder`,`R$ 0,00`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dateTransfer`,`p-label`,`Date to transfer`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Transfer`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Do you confirm transfer?`,3,`p-primary-action`,`p-secondary-action`],[`p-label`,`From`,1,`po-md-6`,3,`p-value`],[`p-label`,`To`,1,`po-md-6`,3,`p-value`],[`p-label`,`Value`,1,`po-md-6`,3,`p-value`],[`p-label`,`Date to transfer`,1,`po-md-6`,3,`p-value`],[`p-size`,`sm`,1,`po-sm-2`,`po-md-3`,`po-lg-1`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[1,`po-font-text-large-bold`],[1,`po-font-text-smaller`]],template:function(p,n){if(p&1){let d=Vx();Ml(0,`div`,1)(1,`div`,2),mN(2,`Banking Transfer`),lg()(),Ml(3,`form`,null,0)(5,`div`,3)(6,`po-select`,4),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.typeAccount,i)||(n.typeAccount=i),Jy(i)}),lg(),f0(),Ml(7,`po-combo`,5),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.contact,i)||(n.contact=i),Jy(i)}),ow(8,xt,7,2,`ng-template`,6),lg(),f0(),lg(),Ml(9,`div`,3)(10,`po-decimal`,7),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.value,i)||(n.value=i),Jy(i)}),lg(),f0(),Ml(11,`po-datepicker`,8),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.dateTransfer,i)||(n.dateTransfer=i),Jy(i)}),lg(),f0(),lg(),Ml(12,`div`,3)(13,`po-button`,9),ht$1(`p-click`,function(){return n.transfer()}),lg()()(),Ml(14,`po-modal`,10)(15,`div`,3),ql(16,`po-info`,11)(17,`po-info`,12),lg(),ql(18,`po-divider`),Ml(19,`div`,3),ql(20,`po-info`,13)(21,`po-info`,14),PN(22,`date`),lg()()}if(p&2){let d=Yx(4);Up(6),Tw(`ngModel`,n.typeAccount),cw(`p-options`,n.typeAccounts),p0(),Up(),Tw(`ngModel`,n.contact),p0(),Up(3),Tw(`ngModel`,n.value),p0(),Up(),Tw(`ngModel`,n.dateTransfer),p0(),Up(2),cw(`p-disabled`,d.invalid),Up(),cw(`p-primary-action`,n.confirmAction)(`p-secondary-action`,n.cancelAction),Up(2),cw(`p-value`,n.typeAccount),Up(),cw(`p-value`,n.contact),Up(3),cw(`p-value`,n.value),Up(),cw(`p-value`,EN(FN(22,13,n.dateTransfer)))}},dependencies:[IY,wY,CY,Vk,kk,k4,Zt,nb,B4,y0e,Y0e,jye,Tbe,kbe,vr,eP],encapsulation:2,changeDetection:1})}return a})();var _t=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-transfer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo - Banking Transfer`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboTransferComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-combo-transfer`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_t,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ue],encapsulation:2,changeDetection:1})}return a})();function Pt(a,q){if(a&1&&(Ml(0,`div`,0),ql(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),lg()),a&2){let m=q;Up(),cw(`p-value`,m.name),Up(),cw(`p-value`,m.nickname),Up(),cw(`p-value`,m.email)}}var Ke=(()=>{class a{http=f(db);hero$;heroName;get knowMoreLabel(){return this.heroName?`Know more`:void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[`name`,`heroName`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Ml(0,`div`,0)(1,`po-widget`,1),ht$1(`p-primary-action`,function(){return n.knowMore(n.heroName)}),Ml(2,`po-combo`,2),Mw(`ngModelChange`,function(c){return yN(n.heroName,c)||(n.heroName=c),c}),ht$1(`p-change`,function(c){return n.onChangeHero(c)}),lg(),f0(),Tx(3,Pt,4,3,`div`,0),PN(4,`async`),lg()()),p&2){let d;Up(),cw(`p-primary-label`,n.knowMoreLabel),Up(),Tw(`ngModel`,n.heroName),p0(),Up(),Mx((d=FN(4,3,n.hero$))?3:-1,d)}},dependencies:[wY,Vk,B4,kbe,$8e,YO],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo - Heroes`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesComponent {
  private http = inject(HttpClient);

  hero$: Observable<any>;
  heroName: string;

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-combo-heroes`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Tt,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ke],encapsulation:2,changeDetection:1})}return a})();function Dt(a,q){if(a&1&&(Ml(0,`div`,0),ql(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),lg()),a&2){let m=q;Up(),cw(`p-value`,m.name),Up(),cw(`p-value`,m.nickname),Up(),cw(`p-value`,m.email)}}var Ye=(()=>{class a{http=f(db);formBuilder=f(MY);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,fm.required]})}get knowMoreLabel(){return this.form.valid?`Know more`:void 0}knowMore(){let m=this.form.get(`hero`).value;window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes-reactive-form`]],standalone:!1,decls:6,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[3,`formGroup`],[`name`,`heroName`,`formControlName`,`hero`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`p-change`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Ml(0,`div`,0)(1,`po-widget`,1),ht$1(`p-primary-action`,function(){return n.knowMore()}),Ml(2,`div`,2)(3,`po-combo`,3),ht$1(`p-change`,function(c){return n.onChangeHero(c)}),lg(),f0(),lg(),Tx(4,Dt,4,3,`div`,0),PN(5,`async`),lg()()),p&2){let d;Up(),cw(`p-primary-label`,n.knowMoreLabel),Up(),cw(`formGroup`,n.form),Up(),p0(),Up(),Mx((d=FN(5,3,n.hero$))?4:-1,d)}},dependencies:[wY,CY,qk,Wk,B4,kbe,$8e,YO],encapsulation:2,changeDetection:1})}return a})();var Ot=a=>({"docs-sample-code-tabs":a});var Xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo - Heroes Reactive Form`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(UntypedFormBuilder);

  form: UntypedFormGroup;
  hero$: Observable<any>;

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-combo-heroes-reactive-form`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ot,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ye],encapsulation:2,changeDetection:1})}return a})();function qt(a,q){if(a&1&&(Ml(0,`div`,0),ql(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),lg()),a&2){let m=q;Up(),cw(`p-value`,m.name),Up(),cw(`p-value`,m.nickname),Up(),cw(`p-value`,m.email)}}var Ze=(()=>{class a{http=f(db);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m)}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-infinity-scroll`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`],[`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`People`,`name`,`people`,`p-field-label`,`name`,`p-field-value`,`id`,3,`ngModelChange`,`p-change`,`ngModel`,`p-infinite-scroll`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Ml(0,`div`,0)(1,`po-widget`,1)(2,`po-combo`,2),Mw(`ngModelChange`,function(c){return yN(n.peopleName,c)||(n.peopleName=c),c}),ht$1(`p-change`,function(c){return n.onChangePeople(c)}),lg(),f0(),Tx(3,qt,4,3,`div`,0),PN(4,`async`),lg()()),p&2){let d;Up(2),Tw(`ngModel`,n.peopleName),cw(`p-infinite-scroll`,!0),p0(),Up(),Mx((d=FN(4,3,n.people$))?3:-1,d)}},dependencies:[wY,Vk,B4,kbe,$8e,YO],encapsulation:2,changeDetection:1})}return a})();var Nt=a=>({"docs-sample-code-tabs":a});var $e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-infinity-scroll-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo - Inifity Scroll`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    @if (people$ | async; as people) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  private http = inject(HttpClient);

  peopleName: string;
  people$: Observable<any>;

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-combo-infinity-scroll`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Nt,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ze],encapsulation:2,changeDetection:1})}return a})();var Bt=[`bookingForm`];var Ht=[`datepicker`];var et=(()=>{class a{poNotification=f(Eu);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];roomsOptions=[{label:`1 Room`,value:1},{label:`2 Rooms`,value:2},{label:`3 Rooms`,value:3}];booking(){this.poNotification.success(`Hotel booked successfully`),this.formReset(),this.datepickerComponent.focus()}onChangeParams(m){this.filterParams=m?{category:`Luxo`}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-hotels`]],viewQuery:function(p,n){if(p&1&&Zl(Bt,7)(Ht,7),p&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`switch`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,`p-label`,`Only Luxury Category`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`rooms`,`p-label`,`Rooms`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hotel`,`p-debounce-time`,`500`,`p-disabled-init-filter`,``,`p-filter-minlength`,`1`,`p-icon`,`an an-magnifying-glass`,`p-required`,``,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Search a hotel`,`p-sort`,``,`p-filter-service`,`https://po-sample-api.onrender.com/v1/hotels`,`p-listbox-control-position`,`top`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-filter-params`],[`p-label`,`Booking`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(p,n){if(p&1){let d=Vx();Ml(0,`div`,2)(1,`div`,3),mN(2,`Booking a Hotel`),lg()(),Ml(3,`form`,null,0)(5,`div`,4)(6,`po-datepicker`,5,1),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.checkin,i)||(n.checkin=i),Jy(i)}),lg(),f0(),Ml(8,`po-datepicker`,6),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.checkout,i)||(n.checkout=i),Jy(i)}),lg(),f0(),Ml(9,`po-switch`,7),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.category,i)||(n.category=i),Jy(i)}),ht$1(`p-change`,function(i){return n.onChangeParams(i)}),lg(),f0(),lg(),Ml(10,`div`,4)(11,`po-select`,8),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.rooms,i)||(n.rooms=i),Jy(i)}),lg(),f0(),Ml(12,`po-select`,9),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.children,i)||(n.children=i),Jy(i)}),lg(),f0(),Ml(13,`po-select`,10),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.adults,i)||(n.adults=i),Jy(i)}),lg(),f0(),lg(),Ml(14,`div`,4)(15,`po-combo`,11),Mw(`ngModelChange`,function(i){return Qy(d),yN(n.hotel,i)||(n.hotel=i),Jy(i)}),lg(),f0(),lg(),Ml(16,`div`,4)(17,`po-button`,12),ht$1(`p-click`,function(){return n.booking()}),lg()()()}if(p&2){let d=Yx(4);Up(6),Tw(`ngModel`,n.checkin),cw(`p-max-date`,n.checkout),p0(),Up(2),Tw(`ngModel`,n.checkout),cw(`p-min-date`,n.checkin),p0(),Up(),Tw(`ngModel`,n.category),p0(),Up(2),Tw(`ngModel`,n.rooms),cw(`p-options`,n.roomsOptions),p0(),Up(),Tw(`ngModel`,n.children),cw(`p-options`,n.childrenOptions),p0(),Up(),Tw(`ngModel`,n.adults),cw(`p-options`,n.adultsOptions),p0(),Up(2),Tw(`ngModel`,n.hotel),cw(`p-filter-params`,n.filterParams),p0(),Up(2),cw(`p-disabled`,d.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,B4,Y0e,Tbe,J4],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a});var tt=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-hotels-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Combo - Booking Hotel`),lg(),Ml(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboHotelsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-combo-hotels`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,It,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-doc`]],standalone:!1,decls:1887,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilterMode`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption`],[`pan`,``,1,`docs-api-property-type`,`PoComboOptionGroup`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption>`]],template:function(p,n){p&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoComboComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O `),Ml(24,`code`),mN(25,`po-combo`),lg(),mN(26,` exibe uma lista de opções com fácil seleção e filtragem.`),lg(),Ml(27,`p`),mN(28,`Além da exibição padrão, nele é possível listar as opões em agrupamentos.`),lg(),Ml(29,`p`),mN(30,`É possível selecionar e navegar entre as opções da lista tanto através do `),Ml(31,`em`),mN(32,`mouse`),lg(),mN(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Ml(34,`em`),mN(35,`Enter`),lg(),mN(36,` na opção que desejar.`),lg(),Ml(37,`p`),mN(38,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Ml(39,`code`),mN(40,`p-filter-service`),lg(),mN(41,`.`),lg(),Ml(42,`p`),mN(43,`Em `),Ml(44,`code`),mN(45,`p-filter-mode`),lg(),mN(46,`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.`),lg(),Ml(47,`p`),mN(48,`O `),Ml(49,`code`),mN(50,`po-combo`),lg(),mN(51,` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando `),Ml(52,`em`),mN(53,`Esc`),lg(),mN(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Ml(55,`em`),mN(56,`Enter`),lg(),mN(57,`.`),lg(),Ml(58,`p`),mN(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),lg(),Ml(60,`h4`),mN(61,`Tokens customizáveis`),lg(),Ml(62,`p`),mN(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(64,`blockquote`)(65,`p`),mN(66,`Para maiores informações, acesse o guia `),Ml(67,`a`,6),mN(68,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(69,`.`),lg()(),Ml(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),mN(74,`Propriedade`),lg(),Ml(75,`th`),mN(76,`Descrição`),lg(),Ml(77,`th`),mN(78,`Valor Padrão`),lg()()(),Ml(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),mN(83,`Default Values`),lg()(),ql(84,`td`)(85,`td`),lg(),Ml(86,`tr`)(87,`td`)(88,`code`),mN(89,`--font-family`),lg()(),Ml(90,`td`),mN(91,`Família tipográfica usada`),lg(),Ml(92,`td`)(93,`code`),mN(94,`var(--font-family-theme)`),lg()()(),Ml(95,`tr`)(96,`td`)(97,`code`),mN(98,`--font-size`),lg()(),Ml(99,`td`),mN(100,`Tamanho da fonte`),lg(),Ml(101,`td`)(102,`code`),mN(103,`var(--font-size-default)`),lg()()(),Ml(104,`tr`)(105,`td`)(106,`code`),mN(107,`--text-color`),lg()(),Ml(108,`td`),mN(109,`Cor do texto`),lg(),Ml(110,`td`)(111,`code`),mN(112,`var(--color-neutral-dark-90)`),lg()()(),Ml(113,`tr`)(114,`td`)(115,`code`),mN(116,`--text-color-placeholder`),lg()(),Ml(117,`td`),mN(118,`Cor do texto no placeholder`),lg(),Ml(119,`td`)(120,`code`),mN(121,`var(--color-neutral-light-30)`),lg()()(),Ml(122,`tr`)(123,`td`)(124,`code`),mN(125,`--color`),lg()(),Ml(126,`td`),mN(127,`Cor principal do Combo`),lg(),Ml(128,`td`)(129,`code`),mN(130,`var(--color-neutral-dark-70)`),lg()()(),Ml(131,`tr`)(132,`td`)(133,`code`),mN(134,`--background`),lg()(),Ml(135,`td`),mN(136,`Cor de background`),lg(),Ml(137,`td`)(138,`code`),mN(139,`var(--color-neutral-light-05)`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`code`),mN(143,`--border-radius`),lg()(),Ml(144,`td`),mN(145,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(146,`td`)(147,`code`),mN(148,`var(--border-width-lg)`),lg()()(),Ml(149,`tr`)(150,`td`)(151,`code`),mN(152,`--min-width`),lg()(),Ml(153,`td`),mN(154,`Largura mínima do combo`),lg(),Ml(155,`td`)(156,`code`),mN(157,`150px`),lg()()(),Ml(158,`tr`)(159,`td`)(160,`code`),mN(161,`--field-container-title-justify`),lg()(),Ml(162,`td`),mN(163,`Alinhamento horizontal do título (`),Ml(164,`code`),mN(165,`justify-content`),lg(),mN(166,`)`),lg(),Ml(167,`td`)(168,`code`),mN(169,`space-between`),lg()()(),Ml(170,`tr`)(171,`td`)(172,`code`),mN(173,`--field-container-title-flex`),lg()(),Ml(174,`td`),mN(175,`Flex do título (`),Ml(176,`code`),mN(177,`flex`),lg(),mN(178,`)`),lg(),Ml(179,`td`)(180,`code`),mN(181,`1 auto`),lg()()(),Ml(182,`tr`)(183,`td`)(184,`strong`),mN(185,`Hover`),lg()(),ql(186,`td`)(187,`td`),lg(),Ml(188,`tr`)(189,`td`)(190,`code`),mN(191,`--color-hover`),lg()(),Ml(192,`td`),mN(193,`Cor principal no estado hover`),lg(),Ml(194,`td`)(195,`code`),mN(196,`var(--color-action-hover)`),lg()()(),Ml(197,`tr`)(198,`td`)(199,`code`),mN(200,`--background-hover`),lg()(),Ml(201,`td`),mN(202,`Cor de background no estado hover`),lg(),Ml(203,`td`)(204,`code`),mN(205,`var(--color-brand-01-lightest)`),lg()()(),Ml(206,`tr`)(207,`td`)(208,`strong`),mN(209,`Focused`),lg()(),ql(210,`td`)(211,`td`),lg(),Ml(212,`tr`)(213,`td`)(214,`code`),mN(215,`--color-focused`),lg()(),Ml(216,`td`),mN(217,`Cor principal no estado de focus`),lg(),Ml(218,`td`)(219,`code`),mN(220,`var(--color-action-default)`),lg()()(),Ml(221,`tr`)(222,`td`)(223,`code`),mN(224,`--outline-color-focused`),lg()(),Ml(225,`td`),mN(226,`Cor do outline do estado de focus`),lg(),Ml(227,`td`)(228,`code`),mN(229,`var(--color-action-focus)`),lg()()(),Ml(230,`tr`)(231,`td`)(232,`strong`),mN(233,`Error`),lg()(),ql(234,`td`)(235,`td`),lg(),Ml(236,`tr`)(237,`td`)(238,`code`),mN(239,`--color-error`),lg()(),Ml(240,`td`),mN(241,`Cor principal no estado de erro`),lg(),Ml(242,`td`)(243,`code`),mN(244,`var(--color-feedback-negative-base)`),lg()()(),Ml(245,`tr`)(246,`td`)(247,`strong`),mN(248,`Disabled`),lg()(),ql(249,`td`)(250,`td`),lg(),Ml(251,`tr`)(252,`td`)(253,`code`),mN(254,`--color-disabled`),lg()(),Ml(255,`td`),mN(256,`Cor principal no estado disabled`),lg(),Ml(257,`td`)(258,`code`),mN(259,`var(--color-neutral-light-30)`),lg()()(),Ml(260,`tr`)(261,`td`)(262,`code`),mN(263,`--background-disabled`),lg()(),Ml(264,`td`),mN(265,`Cor de background no estado disabled`),lg(),Ml(266,`td`)(267,`code`),mN(268,`var(--color-neutral-light-20)`),lg()()(),Ml(269,`tr`)(270,`td`)(271,`strong`),mN(272,`Suggestion`),lg()(),ql(273,`td`)(274,`td`),lg(),Ml(275,`tr`)(276,`td`)(277,`code`),mN(278,`--text-color-suggestion`),lg()(),Ml(279,`td`),mN(280,`Cor do texto no estado suggestion`),lg(),Ml(281,`td`)(282,`code`),mN(283,`var(--color-neutral-mid-60)`),lg()()(),Ml(284,`tr`)(285,`td`)(286,`code`),mN(287,`--background-suggestion`),lg()(),Ml(288,`td`),mN(289,`Cor do background no estado suggestion`),lg(),Ml(290,`td`)(291,`code`),mN(292,`var(--color-brand-01-lightest)`),lg()()()()()(),Ml(293,`div`,7)(294,`h4`,8),mN(295,`Seletor`),lg(),Ml(296,`pre`,9),mN(297,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),lg()(),Ml(298,`h4`,10),mN(299,`Propriedades`),lg(),Ml(300,`table`,11)(301,`tr`,12)(302,`th`,13),mN(303,`Nome`),lg(),Ml(304,`th`,13),mN(305,`Tipo`),lg(),Ml(306,`th`,13),mN(307,`Padrão`),lg(),Ml(308,`th`,13),mN(309,`Descrição`),lg()(),Ml(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),mN(314,` (p-additional-help)`),ql(315,`br`),lg()(),Ml(316,`div`,18),mN(317,`Deprecated`),lg()(),Ml(318,`td`,19)(319,`code`,20),mN(320,`EventEmitter`),lg()(),Ml(321,`td`,21),mN(322,`-`),lg(),Ml(323,`td`,22)(324,`em`)(325,`strong`),mN(326,`(opcional)`),lg()(),Ml(327,`p`),mN(328,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(329,`blockquote`)(330,`p`),mN(331,`Essa propriedade está `),Ml(332,`strong`),mN(333,`depreciada`),lg(),mN(334,` e será removida na versão `),Ml(335,`code`),mN(336,`23.x.x`),lg(),mN(337,`. Recomendamos utilizar a propriedade `),Ml(338,`code`),mN(339,`p-helper`),lg(),mN(340,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(341,`tr`,14)(342,`td`,15)(343,`div`,23)(344,`span`,24),mN(345,` p-additional-help-tooltip`),ql(346,`br`),lg()(),Ml(347,`div`,18),mN(348,`Deprecated`),lg()(),Ml(349,`td`,19)(350,`code`,25),mN(351,`string`),lg()(),Ml(352,`td`,21),mN(353,`-`),lg(),Ml(354,`td`,22)(355,`em`)(356,`strong`),mN(357,`(opcional)`),lg()(),Ml(358,`p`),mN(359,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(360,`code`),mN(361,`po-helper`),lg(),mN(362,`.
`),Ml(363,`strong`),mN(364,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(365,`blockquote`)(366,`p`),mN(367,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(368,`blockquote`)(369,`p`),mN(370,`Essa propriedade está `),Ml(371,`strong`),mN(372,`depreciada`),lg(),mN(373,` e será removida na versão `),Ml(374,`code`),mN(375,`23.x.x`),lg(),mN(376,`. Recomendamos utilizar a propriedade `),Ml(377,`code`),mN(378,`p-helper`),lg(),mN(379,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),mN(384,` p-append-in-body`),ql(385,`br`),lg()()(),Ml(386,`td`,19)(387,`code`,26),mN(388,`boolean`),lg()(),Ml(389,`td`,21)(390,`p`)(391,`code`),mN(392,`false`),lg()()(),Ml(393,`td`,22)(394,`em`)(395,`strong`),mN(396,`(opcional)`),lg()(),Ml(397,`p`),mN(398,`Define que o `),Ml(399,`code`),mN(400,`listbox`),lg(),mN(401,` e/ou popover (`),Ml(402,`code`),mN(403,`p-helper`),lg(),mN(404,` e/ou `),Ml(405,`code`),mN(406,`p-error-limit`),lg(),mN(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),lg(),Ml(408,`blockquote`)(409,`p`),mN(410,`Quando utilizado com `),Ml(411,`code`),mN(412,`p-helper`),lg(),mN(413,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(414,`tr`,14)(415,`td`,15)(416,`div`,23)(417,`span`,24),mN(418,` p-auto-focus`),ql(419,`br`),lg()()(),Ml(420,`td`,19)(421,`code`,26),mN(422,`boolean`),lg()(),Ml(423,`td`,21)(424,`p`)(425,`code`),mN(426,`false`),lg()()(),Ml(427,`td`,22)(428,`em`)(429,`strong`),mN(430,`(opcional)`),lg()(),Ml(431,`p`),mN(432,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(433,`blockquote`)(434,`p`),mN(435,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(436,`tr`,14)(437,`td`,15)(438,`div`,16)(439,`span`,17),mN(440,` (p-blur)`),ql(441,`br`),lg()()(),Ml(442,`td`,19)(443,`code`,20),mN(444,`EventEmitter`),lg()(),Ml(445,`td`,21),mN(446,`-`),lg(),Ml(447,`td`,22)(448,`em`)(449,`strong`),mN(450,`(opcional)`),lg()(),Ml(451,`p`),mN(452,`Evento disparado ao sair do campo.`),lg()()(),Ml(453,`tr`,14)(454,`td`,15)(455,`div`,23)(456,`span`,24),mN(457,` p-cache`),ql(458,`br`),lg()()(),Ml(459,`td`,19)(460,`code`,26),mN(461,`boolean`),lg()(),Ml(462,`td`,21)(463,`p`)(464,`code`),mN(465,`true`),lg()()(),Ml(466,`td`,22)(467,`em`)(468,`strong`),mN(469,`(opcional)`),lg()(),Ml(470,`p`),mN(471,`Define se o componente irá guardar o valor do model para evitar requisições repetidas.`),lg(),Ml(472,`blockquote`)(473,`p`),mN(474,`Caso o valor seja `),Ml(475,`code`),mN(476,`false`),lg(),mN(477,`, o componente fará uma nova requisição mesmo que o valor procurado seja o mesmo do model.`),lg()()()(),Ml(478,`tr`,14)(479,`td`,15)(480,`div`,16)(481,`span`,17),mN(482,` (p-change)`),ql(483,`br`),lg()()(),Ml(484,`td`,19)(485,`code`,20),mN(486,`EventEmitter`),lg()(),Ml(487,`td`,21),mN(488,`-`),lg(),Ml(489,`td`,22)(490,`em`)(491,`strong`),mN(492,`(opcional)`),lg()(),Ml(493,`p`),mN(494,`Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.`),lg(),Ml(495,`blockquote`)(496,`p`),mN(497,`Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `),Ml(498,`code`),mN(499,`p-emit-object-value`),lg(),mN(500,`.`),lg()()()(),Ml(501,`tr`,14)(502,`td`,15)(503,`div`,16)(504,`span`,17),mN(505,` (p-change-model)`),ql(506,`br`),lg()()(),Ml(507,`td`,19)(508,`code`,20),mN(509,`EventEmitter`),lg()(),Ml(510,`td`,21),mN(511,`-`),lg(),Ml(512,`td`,22)(513,`em`)(514,`strong`),mN(515,`(opcional)`),lg()(),Ml(516,`p`),mN(517,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(518,`code`),mN(519,`setValue`),lg(),mN(520,`, `),Ml(521,`code`),mN(522,`patchValue`),lg(),mN(523,`, carregamento assíncrono).`),lg(),Ml(524,`p`),mN(525,`Diferentemente do `),Ml(526,`code`),mN(527,`p-change`),lg(),mN(528,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(529,`code`),mN(530,`p-change-model`),lg(),mN(531,` cobre todos os cenários de alteração de valor.`),lg(),Ml(532,`p`),mN(533,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(534,`tr`,14)(535,`td`,15)(536,`div`,23)(537,`span`,24),mN(538,` p-change-on-enter`),ql(539,`br`),lg()()(),Ml(540,`td`,19)(541,`code`,26),mN(542,`boolean`),lg()(),Ml(543,`td`,21)(544,`p`)(545,`code`),mN(546,`false`),lg()()(),Ml(547,`td`,22)(548,`em`)(549,`strong`),mN(550,`(opcional)`),lg()(),Ml(551,`p`),mN(552,`Indica que o evento `),Ml(553,`code`),mN(554,`p-change`),lg(),mN(555,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.`),lg()()(),Ml(556,`tr`,14)(557,`td`,15)(558,`div`,23)(559,`span`,24),mN(560,` p-clean`),ql(561,`br`),lg()()(),Ml(562,`td`,19)(563,`code`,26),mN(564,`boolean`),lg()(),Ml(565,`td`,21),mN(566,`-`),lg(),Ml(567,`td`,22)(568,`em`)(569,`strong`),mN(570,`(opcional)`),lg()(),Ml(571,`p`),mN(572,`Se verdadeiro, o campo receberá um botão para ser limpo.`),lg()()(),Ml(573,`tr`,14)(574,`td`,15)(575,`div`,23)(576,`span`,24),mN(577,` p-compact-label`),ql(578,`br`),lg()()(),Ml(579,`td`,19)(580,`code`,26),mN(581,`boolean`),lg()(),Ml(582,`td`,21)(583,`p`)(584,`code`),mN(585,`false`),lg()()(),Ml(586,`td`,22)(587,`em`)(588,`strong`),mN(589,`(opcional)`),lg()(),Ml(590,`p`),mN(591,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(592,`p`),mN(593,`Quando habilitado (`),Ml(594,`code`),mN(595,`true`),lg(),mN(596,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(597,`ul`)(598,`li`)(599,`code`),mN(600,`po-label`),lg()(),Ml(601,`li`)(602,`code`),mN(603,`p-requirement (showRequired)`),lg()(),Ml(604,`li`)(605,`code`),mN(606,`po-helper`),lg()()(),Ml(607,`p`),mN(608,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(609,`p`),mN(610,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(611,`ul`)(612,`li`)(613,`code`),mN(614,`--field-container-title-justify`),lg()(),Ml(615,`li`)(616,`code`),mN(617,`--field-container-title-flex`),lg()()(),Ml(618,`p`),mN(619,`Exemplo:`),lg(),Ml(620,`pre`)(621,`code`),mN(622,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(623,`p`),mN(624,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),mN(629,` p-debounce-time`),ql(630,`br`),lg()()(),Ml(631,`td`,19)(632,`code`,27),mN(633,`number`),lg()(),Ml(634,`td`,21)(635,`p`)(636,`code`),mN(637,`400`),lg()()(),Ml(638,`td`,22)(639,`em`)(640,`strong`),mN(641,`(opcional)`),lg()(),Ml(642,`p`),mN(643,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Ml(644,`code`),mN(645,`p-filter-service`),lg(),mN(646,`).`),lg()()(),Ml(647,`tr`,14)(648,`td`,15)(649,`div`,23)(650,`span`,24),mN(651,` p-disabled`),ql(652,`br`),lg()()(),Ml(653,`td`,19)(654,`code`,26),mN(655,`boolean`),lg()(),Ml(656,`td`,21)(657,`p`)(658,`code`),mN(659,`false`),lg()()(),Ml(660,`td`,22)(661,`em`)(662,`strong`),mN(663,`(opcional)`),lg()(),Ml(664,`p`),mN(665,`Indica que o campo será desabilitado.`),lg()()(),Ml(666,`tr`,14)(667,`td`,15)(668,`div`,23)(669,`span`,24),mN(670,` p-disabled-init-filter`),ql(671,`br`),lg()()(),Ml(672,`td`,19)(673,`code`,26),mN(674,`boolean`),lg()(),Ml(675,`td`,21)(676,`p`)(677,`code`),mN(678,`false`),lg()()(),Ml(679,`td`,22)(680,`em`)(681,`strong`),mN(682,`(opcional)`),lg()(),Ml(683,`p`),mN(684,`Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.`),lg()()(),Ml(685,`tr`,14)(686,`td`,15)(687,`div`,23)(688,`span`,24),mN(689,` p-disabled-tab-filter`),ql(690,`br`),lg()()(),Ml(691,`td`,19)(692,`code`,26),mN(693,`boolean`),lg()(),Ml(694,`td`,21)(695,`p`)(696,`code`),mN(697,`false`),lg()()(),Ml(698,`td`,22)(699,`em`)(700,`strong`),mN(701,`(opcional)`),lg()(),Ml(702,`p`),mN(703,`Se verdadeiro, desabilitará a busca de um item via TAB.`),lg()()(),Ml(704,`tr`,14)(705,`td`,15)(706,`div`,23)(707,`span`,24),mN(708,` p-emit-object-value`),ql(709,`br`),lg()()(),Ml(710,`td`,19)(711,`code`,26),mN(712,`boolean`),lg()(),Ml(713,`td`,21)(714,`p`)(715,`code`),mN(716,`false`),lg()()(),Ml(717,`td`,22)(718,`em`)(719,`strong`),mN(720,`(opcional)`),lg()(),Ml(721,`p`),mN(722,`Se verdadeiro, o evento `),Ml(723,`code`),mN(724,`p-change`),lg(),mN(725,` receberá como argumento o `),Ml(726,`code`),mN(727,`PoComboOption`),lg(),mN(728,` referente à opção selecionada.`),lg()()(),Ml(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),mN(733,` p-error-limit`),ql(734,`br`),lg()()(),Ml(735,`td`,19)(736,`code`,26),mN(737,`boolean`),lg()(),Ml(738,`td`,21)(739,`p`)(740,`code`),mN(741,`false`),lg()()(),Ml(742,`td`,22)(743,`em`)(744,`strong`),mN(745,`(opcional)`),lg()(),Ml(746,`p`),mN(747,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(748,`blockquote`)(749,`p`),mN(750,`Caso essa propriedade seja definida como `),Ml(751,`code`),mN(752,`true`),lg(),mN(753,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(754,`tr`,14)(755,`td`,15)(756,`div`,23)(757,`span`,24),mN(758,` p-field-error-message`),ql(759,`br`),lg()()(),Ml(760,`td`,19)(761,`code`,25),mN(762,`string`),lg()(),Ml(763,`td`,21),mN(764,`-`),lg(),Ml(765,`td`,22)(766,`em`)(767,`strong`),mN(768,`(opcional)`),lg()(),Ml(769,`p`),mN(770,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),lg(),Ml(771,`blockquote`)(772,`p`),mN(773,`Necessário que a propriedade `),Ml(774,`code`),mN(775,`p-required`),lg(),mN(776,` esteja habilitada.`),lg()()()(),Ml(777,`tr`,14)(778,`td`,15)(779,`div`,23)(780,`span`,24),mN(781,` p-field-label`),ql(782,`br`),lg()()(),Ml(783,`td`,19)(784,`code`,25),mN(785,`string`),lg()(),Ml(786,`td`,21)(787,`p`)(788,`code`),mN(789,`label`),lg()()(),Ml(790,`td`,22)(791,`em`)(792,`strong`),mN(793,`(opcional)`),lg()(),Ml(794,`p`),mN(795,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ml(796,`code`),mN(797,`p-options`),lg(),mN(798,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),lg(),Ml(799,`p`),mN(800,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),lg()()(),Ml(801,`tr`,14)(802,`td`,15)(803,`div`,23)(804,`span`,24),mN(805,` p-field-value`),ql(806,`br`),lg()()(),Ml(807,`td`,19)(808,`code`,25),mN(809,`string`),lg()(),Ml(810,`td`,21)(811,`p`)(812,`code`),mN(813,`value`),lg()()(),Ml(814,`td`,22)(815,`em`)(816,`strong`),mN(817,`(opcional)`),lg()(),Ml(818,`p`),mN(819,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ml(820,`code`),mN(821,`p-options`),lg(),mN(822,`), esta propriedade será responsável pelo valor de cada item da lista.`),lg(),Ml(823,`p`),mN(824,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),lg()()(),Ml(825,`tr`,14)(826,`td`,15)(827,`div`,23)(828,`span`,24),mN(829,` p-filter-minlength`),ql(830,`br`),lg()()(),Ml(831,`td`,19)(832,`code`,27),mN(833,`number`),lg()(),Ml(834,`td`,21)(835,`p`)(836,`code`),mN(837,`0`),lg()()(),Ml(838,`td`,22)(839,`em`)(840,`strong`),mN(841,`(opcional)`),lg()(),Ml(842,`p`),mN(843,`Valor mínimo de caracteres para realizar o filtro no serviço.`),lg()()(),Ml(844,`tr`,14)(845,`td`,15)(846,`div`,23)(847,`span`,24),mN(848,` p-filter-mode`),ql(849,`br`),lg()()(),Ml(850,`td`,19)(851,`code`,28),mN(852,`PoComboFilterMode`),lg()(),Ml(853,`td`,21)(854,`p`)(855,`code`),mN(856,`startsWith`),lg()()(),Ml(857,`td`,22)(858,`em`)(859,`strong`),mN(860,`(opcional)`),lg()(),Ml(861,`p`),mN(862,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Ml(863,`code`),mN(864,`startsWith`),lg(),mN(865,`, `),Ml(866,`code`),mN(867,`contains`),lg(),mN(868,` ou `),Ml(869,`code`),mN(870,`endsWith`),lg(),mN(871,`.`),lg(),Ml(872,`blockquote`)(873,`p`),mN(874,`Quando utilizar a propriedade `),Ml(875,`code`),mN(876,`p-filter-service`),lg(),mN(877,` esta propriedade será ignorada.`),lg()()()(),Ml(878,`tr`,14)(879,`td`,15)(880,`div`,23)(881,`span`,24),mN(882,` p-filter-params`),ql(883,`br`),lg()()(),Ml(884,`td`,19)(885,`code`,29),mN(886,`any`),lg()(),Ml(887,`td`,21),mN(888,`-`),lg(),Ml(889,`td`,22)(890,`em`)(891,`strong`),mN(892,`(opcional)`),lg()(),Ml(893,`p`),mN(894,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Ml(895,`em`),mN(896,`PoComboFilter`),lg(),mN(897,`.`),lg(),Ml(898,`blockquote`)(899,`p`),mN(900,`Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.`),lg()()()(),Ml(901,`tr`,14)(902,`td`,15)(903,`div`,23)(904,`span`,24),mN(905,` p-filter-service`),ql(906,`br`),lg()()(),Ml(907,`td`,19)(908,`code`,30),mN(909,`PoComboFilter `),lg(),Ml(910,`code`,25),mN(911,` string`),lg()(),Ml(912,`td`,21),mN(913,`-`),lg(),Ml(914,`td`,22)(915,`em`)(916,`strong`),mN(917,`(opcional)`),lg()(),Ml(918,`p`),mN(919,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),lg(),Ml(920,`p`),mN(921,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Ml(922,`code`),mN(923,`p-field-label`),lg(),mN(924,` e `),Ml(925,`code`),mN(926,`p-field-value`),lg(),mN(927,` para a construção da lista de itens.`),lg(),Ml(928,`p`),mN(929,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),lg(),Ml(930,`pre`)(931,`code`),mN(932,`url + ?filter=Peter
`),lg()(),Ml(933,`p`),mN(934,`Se for definida a propriedade `),Ml(935,`code`),mN(936,`p-filter-params`),lg(),mN(937,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Ml(938,`code`),mN(939,`{ age: 23 }`),lg(),mN(940,` a URL ficaria:`),lg(),Ml(941,`pre`)(942,`code`),mN(943,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),lg()()()(),Ml(944,`tr`,14)(945,`td`,15)(946,`div`,23)(947,`span`,24),mN(948,` p-help`),ql(949,`br`),lg()()(),Ml(950,`td`,19)(951,`code`,25),mN(952,`string`),lg()(),Ml(953,`td`,21),mN(954,`-`),lg(),Ml(955,`td`,22)(956,`em`)(957,`strong`),mN(958,`(opcional)`),lg()(),Ml(959,`p`),mN(960,`Texto de apoio para o campo.`),lg()()(),Ml(961,`tr`,14)(962,`td`,15)(963,`div`,23)(964,`span`,24),mN(965,` p-icon`),ql(966,`br`),lg()()(),Ml(967,`td`,19)(968,`code`,25),mN(969,`string `),lg(),Ml(970,`code`,31),mN(971,` TemplateRef<void>`),lg()(),Ml(972,`td`,21),mN(973,`-`),lg(),Ml(974,`td`,22)(975,`em`)(976,`strong`),mN(977,`(opcional)`),lg()(),Ml(978,`p`),mN(979,`Define o ícone que será exibido no início do campo.`),lg(),Ml(980,`p`),mN(981,`É possível usar qualquer um dos ícones da `),Ml(982,`a`,32),mN(983,`Biblioteca de ícones`),lg(),mN(984,`. conforme exemplo abaixo:`),lg(),Ml(985,`pre`)(986,`code`),mN(987,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),lg()(),Ml(988,`p`),mN(989,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(990,`em`),mN(991,`Font Awesome`),lg(),mN(992,`, da seguinte forma:`),lg(),Ml(993,`pre`)(994,`code`),mN(995,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),lg()(),Ml(996,`p`),mN(997,`Outra opção seria a customização do ícone através do `),Ml(998,`code`),mN(999,`TemplateRef`),lg(),mN(1e3,`, conforme exemplo abaixo:`),lg(),Ml(1001,`pre`)(1002,`code`),mN(1003,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(1004,`blockquote`)(1005,`p`),mN(1006,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(1007,`code`),mN(1008,`font-size: inherit`),lg(),mN(1009,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(1010,`tr`,14)(1011,`td`,15)(1012,`div`,23)(1013,`span`,24),mN(1014,` p-infinite-scroll`),ql(1015,`br`),lg()()(),Ml(1016,`td`,19)(1017,`code`,26),mN(1018,`boolean`),lg()(),Ml(1019,`td`,21)(1020,`p`)(1021,`code`),mN(1022,`false`),lg()()(),Ml(1023,`td`,22)(1024,`em`)(1025,`strong`),mN(1026,`(opcional)`),lg()(),Ml(1027,`p`),mN(1028,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),lg()()(),Ml(1029,`tr`,14)(1030,`td`,15)(1031,`div`,23)(1032,`span`,24),mN(1033,` p-infinite-scroll-distance`),ql(1034,`br`),lg()()(),Ml(1035,`td`,19)(1036,`code`,27),mN(1037,`number`),lg()(),Ml(1038,`td`,21),mN(1039,`-`),lg(),Ml(1040,`td`,22)(1041,`em`)(1042,`strong`),mN(1043,`(opcional)`),lg()(),Ml(1044,`p`),mN(1045,`Define o percentual necessário para disparar o evento `),Ml(1046,`code`),mN(1047,`show-more`),lg(),mN(1048,`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.`),lg(),Ml(1049,`p`)(1050,`strong`),mN(1051,`Exemplos`),lg()(),Ml(1052,`ul`)(1053,`li`),mN(1054,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `),Ml(1055,`code`),mN(1056,`show-more`),lg(),mN(1057,` será disparado.`),lg()()()(),Ml(1058,`tr`,14)(1059,`td`,15)(1060,`div`,16)(1061,`span`,17),mN(1062,` (p-input-change)`),ql(1063,`br`),lg()()(),Ml(1064,`td`,19)(1065,`code`,20),mN(1066,`EventEmitter`),lg()(),Ml(1067,`td`,21),mN(1068,`-`),lg(),Ml(1069,`td`,22)(1070,`em`)(1071,`strong`),mN(1072,`(opcional)`),lg()(),Ml(1073,`p`),mN(1074,`Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.`),lg()()(),Ml(1075,`tr`,14)(1076,`td`,15)(1077,`div`,16)(1078,`span`,17),mN(1079,` (p-keydown)`),ql(1080,`br`),lg()()(),Ml(1081,`td`,19)(1082,`code`,20),mN(1083,`EventEmitter`),lg()(),Ml(1084,`td`,21),mN(1085,`-`),lg(),Ml(1086,`td`,22)(1087,`em`)(1088,`strong`),mN(1089,`(opcional)`),lg()(),Ml(1090,`p`),mN(1091,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(1092,`code`),mN(1093,`KeyboardEvent`),lg(),mN(1094,` com informações sobre a tecla.`),lg()()(),Ml(1095,`tr`,14)(1096,`td`,15)(1097,`div`,23)(1098,`span`,24),mN(1099,` p-label`),ql(1100,`br`),lg()()(),Ml(1101,`td`,19)(1102,`code`,25),mN(1103,`string`),lg()(),Ml(1104,`td`,21),mN(1105,`-`),lg(),Ml(1106,`td`,22)(1107,`em`)(1108,`strong`),mN(1109,`(opcional)`),lg()(),Ml(1110,`p`),mN(1111,`Label no componente.`),lg()()(),Ml(1112,`tr`,14)(1113,`td`,15)(1114,`div`,23)(1115,`span`,24),mN(1116,` p-label-text-wrap`),ql(1117,`br`),lg()()(),Ml(1118,`td`,19)(1119,`code`,26),mN(1120,`boolean`),lg()(),Ml(1121,`td`,21)(1122,`p`)(1123,`code`),mN(1124,`false`),lg()()(),Ml(1125,`td`,22)(1126,`em`)(1127,`strong`),mN(1128,`(opcional)`),lg()(),Ml(1129,`p`),mN(1130,`Habilita a quebra automática do texto da propriedade `),Ml(1131,`code`),mN(1132,`p-label`),lg(),mN(1133,`. Quando `),Ml(1134,`code`),mN(1135,`p-label-text-wrap`),lg(),mN(1136,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(1137,`tr`,14)(1138,`td`,15)(1139,`div`,23)(1140,`span`,24),mN(1141,` p-listbox-control-position`),ql(1142,`br`),lg()()(),Ml(1143,`td`,19)(1144,`code`,33),mN(1145,`'top' `),lg(),Ml(1146,`code`,34),mN(1147,` 'bottom'`),lg()(),Ml(1148,`td`,21)(1149,`p`)(1150,`code`),mN(1151,`bottom`),lg()()(),Ml(1152,`td`,22)(1153,`em`)(1154,`strong`),mN(1155,`(opcional)`),lg()(),Ml(1156,`p`),mN(1157,`Define a direção preferida para exibição do `),Ml(1158,`code`),mN(1159,`listbox`),lg(),mN(1160,` em relação ao campo (`),Ml(1161,`code`),mN(1162,`top`),lg(),mN(1163,` ou `),Ml(1164,`code`),mN(1165,`bottom`),lg(),mN(1166,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),lg()()(),Ml(1167,`tr`,14)(1168,`td`,15)(1169,`div`,23)(1170,`span`,24),mN(1171,` p-literals`),ql(1172,`br`),lg()()(),Ml(1173,`td`,19)(1174,`code`,35),mN(1175,`PoComboLiterals`),lg()(),Ml(1176,`td`,21),mN(1177,`-`),lg(),Ml(1178,`td`,22)(1179,`em`)(1180,`strong`),mN(1181,`(opcional)`),lg()(),Ml(1182,`p`),mN(1183,`Objeto com as literais usadas no `),Ml(1184,`code`),mN(1185,`po-combo`),lg(),mN(1186,`.`),lg(),Ml(1187,`p`),mN(1188,`Para utilizar basta passar a literal que deseja customizar:`),lg(),Ml(1189,`pre`)(1190,`code`),mN(1191,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),lg()(),Ml(1192,`p`),mN(1193,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),lg(),Ml(1194,`pre`)(1195,`code`),mN(1196,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),lg()(),Ml(1197,`blockquote`)(1198,`p`),mN(1199,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(1200,`a`,36)(1201,`code`),mN(1202,`PoI18nService`),lg()(),mN(1203,` ou do browser.`),lg()()()(),Ml(1204,`tr`,14)(1205,`td`,15)(1206,`div`,23)(1207,`span`,24),mN(1208,` p-loading`),ql(1209,`br`),lg()()(),Ml(1210,`td`,19)(1211,`code`,26),mN(1212,`boolean`),lg()(),Ml(1213,`td`,21)(1214,`p`)(1215,`code`),mN(1216,`false`),lg()()(),Ml(1217,`td`,22)(1218,`em`)(1219,`strong`),mN(1220,`(opcional)`),lg()(),Ml(1221,`p`),mN(1222,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(1223,`tr`,14)(1224,`td`,15)(1225,`div`,23)(1226,`span`,24),mN(1227,` name`),ql(1228,`br`),lg()()(),Ml(1229,`td`,19)(1230,`code`,25),mN(1231,`string`),lg()(),Ml(1232,`td`,21),mN(1233,`-`),lg(),Ml(1234,`td`,22)(1235,`p`),mN(1236,`Nome do componente.`),lg()()(),Ml(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),mN(1241,` (ngModelChange)`),ql(1242,`br`),lg()()(),Ml(1243,`td`,19)(1244,`code`,20),mN(1245,`EventEmitter`),lg()(),Ml(1246,`td`,21),mN(1247,`-`),lg(),Ml(1248,`td`,22)(1249,`em`)(1250,`strong`),mN(1251,`(opcional)`),lg()(),Ml(1252,`p`),mN(1253,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),lg(),Ml(1254,`p`),mN(1255,`Na versão 12.2.0 do Angular a verificação `),Ml(1256,`code`),mN(1257,`strictTemplates`),lg(),mN(1258,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),lg(),Ml(1259,`pre`)(1260,`code`),mN(1261,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),lg()()()(),Ml(1262,`tr`,14)(1263,`td`,15)(1264,`div`,23)(1265,`span`,24),mN(1266,` p-optional`),ql(1267,`br`),lg()()(),Ml(1268,`td`,19)(1269,`code`,26),mN(1270,`boolean`),lg()(),Ml(1271,`td`,21)(1272,`p`)(1273,`code`),mN(1274,`false`),lg()()(),Ml(1275,`td`,22)(1276,`em`)(1277,`strong`),mN(1278,`(opcional)`),lg()(),Ml(1279,`p`),mN(1280,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(1281,`blockquote`)(1282,`p`),mN(1283,`Não será exibida a indicação se:`),lg()(),Ml(1284,`ul`)(1285,`li`),mN(1286,`O campo conter `),Ml(1287,`code`),mN(1288,`p-required`),lg(),mN(1289,`;`),lg(),Ml(1290,`li`),mN(1291,`Não possuir `),Ml(1292,`code`),mN(1293,`p-help`),lg(),mN(1294,` e/ou `),Ml(1295,`code`),mN(1296,`p-label`),lg(),mN(1297,`.`),lg()()()(),Ml(1298,`tr`,14)(1299,`td`,15)(1300,`div`,23)(1301,`span`,24),mN(1302,` p-options`),ql(1303,`br`),lg()()(),Ml(1304,`td`,19)(1305,`code`,37),mN(1306,`Array<PoComboOption `),lg(),Ml(1307,`code`,38),mN(1308,` PoComboOptionGroup `),lg(),Ml(1309,`code`,39),mN(1310,` any>`),lg()(),Ml(1311,`td`,21),mN(1312,`-`),lg(),Ml(1313,`td`,22)(1314,`p`),mN(1315,`Nesta propriedade define a lista de opções do `),Ml(1316,`code`),mN(1317,`po-combo`),lg(),mN(1318,`.`),lg(),Ml(1319,`blockquote`)(1320,`p`),mN(1321,`A lista pode ser definida utilizando um array com o valor representando o `),Ml(1322,`code`),mN(1323,`value`),lg(),mN(1324,` e o `),Ml(1325,`code`),mN(1326,`label`),lg(),mN(1327,` das seguintes formas:`),lg()(),Ml(1328,`pre`)(1329,`code`),mN(1330,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),lg()(),Ml(1331,`pre`)(1332,`code`),mN(1333,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),lg()(),Ml(1334,`ul`)(1335,`li`),mN(1336,`Aconselha-se utilizar valores distintos no `),Ml(1337,`code`),mN(1338,`label`),lg(),mN(1339,` e `),Ml(1340,`code`),mN(1341,`value`),lg(),mN(1342,` dos itens.`),lg()()()(),Ml(1343,`tr`,14)(1344,`td`,15)(1345,`div`,23)(1346,`span`,24),mN(1347,` p-placeholder`),ql(1348,`br`),lg()()(),Ml(1349,`td`,19)(1350,`code`,25),mN(1351,`string`),lg()(),Ml(1352,`td`,21),mN(1353,`-`),lg(),Ml(1354,`td`,22)(1355,`p`),mN(1356,`Mensagem apresentada enquanto o campo estiver vazio.`),lg()()(),Ml(1357,`tr`,14)(1358,`td`,15)(1359,`div`,23)(1360,`span`,24),mN(1361,` p-helper`),ql(1362,`br`),lg()()(),Ml(1363,`td`,19)(1364,`code`,40),mN(1365,`PoHelperOptions `),lg(),Ml(1366,`code`,25),mN(1367,` string`),lg()(),Ml(1368,`td`,21),mN(1369,`-`),lg(),Ml(1370,`td`,22)(1371,`em`)(1372,`strong`),mN(1373,`(opcional)`),lg()(),Ml(1374,`p`),mN(1375,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1376,`code`),mN(1377,`p-label`),lg(),mN(1378,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1379,`code`),mN(1380,`p-label`),lg(),mN(1381,`.`),lg(),Ml(1382,`blockquote`)(1383,`p`),mN(1384,`Para mais informações acesse: `),Ml(1385,`a`,41),mN(1386,`https://po-ui.io/documentation/po-helper`),lg(),mN(1387,`.`),lg()(),Ml(1388,`blockquote`)(1389,`p`),mN(1390,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1391,`code`),mN(1392,`p-additional-help-tooltip`),lg(),mN(1393,` e `),Ml(1394,`code`),mN(1395,`p-additional-help`),lg(),mN(1396,`) será ignorado.`),lg()()()(),Ml(1397,`tr`,14)(1398,`td`,15)(1399,`div`,23)(1400,`span`,24),mN(1401,` p-remove-initial-filter`),ql(1402,`br`),lg()()(),Ml(1403,`td`,19)(1404,`code`,26),mN(1405,`boolean`),lg()(),Ml(1406,`td`,21)(1407,`p`)(1408,`code`),mN(1409,`false`),lg()()(),Ml(1410,`td`,22)(1411,`em`)(1412,`strong`),mN(1413,`(opcional)`),lg()(),Ml(1414,`p`),mN(1415,`Define se o filtro inicial será removido no primeiro clique do campo.`),lg(),Ml(1416,`p`),mN(1417,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),lg()()(),Ml(1418,`tr`,14)(1419,`td`,15)(1420,`div`,23)(1421,`span`,24),mN(1422,` p-required`),ql(1423,`br`),lg()()(),Ml(1424,`td`,19)(1425,`code`,26),mN(1426,`boolean`),lg()(),Ml(1427,`td`,21)(1428,`p`)(1429,`code`),mN(1430,`false`),lg()()(),Ml(1431,`td`,22)(1432,`em`)(1433,`strong`),mN(1434,`(opcional)`),lg()(),Ml(1435,`p`),mN(1436,`Define que o campo será obrigatório.`),lg()()(),Ml(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),mN(1441,` p-show-required`),ql(1442,`br`),lg()()(),Ml(1443,`td`,19)(1444,`code`,26),mN(1445,`boolean`),lg()(),Ml(1446,`td`,21),mN(1447,`-`),lg(),Ml(1448,`td`,22)(1449,`p`),mN(1450,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1451,`blockquote`)(1452,`p`),mN(1453,`Não será exibida a indicação se:`),lg()(),Ml(1454,`ul`)(1455,`li`),mN(1456,`Não possuir `),Ml(1457,`code`),mN(1458,`p-help`),lg(),mN(1459,` e/ou `),Ml(1460,`code`),mN(1461,`p-label`),lg(),mN(1462,`.`),lg()()()(),Ml(1463,`tr`,14)(1464,`td`,15)(1465,`div`,23)(1466,`span`,24),mN(1467,` p-size`),ql(1468,`br`),lg()()(),Ml(1469,`td`,19)(1470,`code`,25),mN(1471,`string`),lg()(),Ml(1472,`td`,21)(1473,`p`)(1474,`code`),mN(1475,`medium`),lg()()(),Ml(1476,`td`,22)(1477,`em`)(1478,`strong`),mN(1479,`(opcional)`),lg()(),Ml(1480,`p`),mN(1481,`Define o tamanho do componente:`),lg(),Ml(1482,`ul`)(1483,`li`)(1484,`code`),mN(1485,`small`),lg(),mN(1486,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1487,`li`)(1488,`code`),mN(1489,`medium`),lg(),mN(1490,`: altura do input como 44px.`),lg()(),Ml(1491,`blockquote`)(1492,`p`),mN(1493,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1494,`code`),mN(1495,`medium`),lg(),mN(1496,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1497,`a`,42),mN(1498,`po-theme`),lg(),mN(1499,`.`),lg()()()(),Ml(1500,`tr`,14)(1501,`td`,15)(1502,`div`,23)(1503,`span`,24),mN(1504,` p-sort`),ql(1505,`br`),lg()()(),Ml(1506,`td`,19)(1507,`code`,26),mN(1508,`boolean`),lg()(),Ml(1509,`td`,21),mN(1510,`-`),lg(),Ml(1511,`td`,22)(1512,`p`),mN(1513,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),lg()()()(),Ml(1514,`h3`,10),mN(1515,`Métodos`),lg(),Ml(1516,`table`,43)(1517,`tr`,14)(1518,`th`,44)(1519,`div`,23)(1520,`h4`)(1521,`span`,24),mN(1522,` focus `),lg()()()()(),Ml(1523,`tr`,22)(1524,`td`,22)(1525,`p`),mN(1526,`Função que atribui foco ao componente.`),lg(),Ml(1527,`p`),mN(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1529,`pre`)(1530,`code`),mN(1531,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),lg()()()()(),ql(1532,`br`),Ml(1533,`table`,43)(1534,`tr`,14)(1535,`th`,44)(1536,`div`,23)(1537,`h4`)(1538,`span`,24),mN(1539,` showAdditionalHelp `),lg()()()()(),Ml(1540,`tr`,22)(1541,`td`,22)(1542,`p`),mN(1543,`Método que exibe `),Ml(1544,`code`),mN(1545,`p-helper`),lg(),mN(1546,` ou executa a ação definida em `),Ml(1547,`code`),mN(1548,`p-helper{eventOnClick}`),lg(),mN(1549,` ou em `),Ml(1550,`code`),mN(1551,`p-additionalHelp`),lg(),mN(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1553,`code`),mN(1554,`p-keydown`),lg(),mN(1555,`.`),lg(),Ml(1556,`blockquote`)(1557,`p`),mN(1558,`Exibe ou oculta o conteúdo do componente `),Ml(1559,`code`),mN(1560,`po-helper`),lg(),mN(1561,` quando o componente estiver com foco.`),lg()(),Ml(1562,`pre`)(1563,`code`),mN(1564,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),lg()(),Ml(1565,`pre`)(1566,`code`),mN(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1568,`br`),Ml(1569,`h3`),mN(1570,`Interfaces`),lg(),Ml(1571,`h4`,45)(1572,`code`,5),mN(1573,`PoComboFilter`),lg()(),Ml(1574,`div`,2)(1575,`p`),mN(1576,`Interface para os serviços que serão utilizados no po-combo.`),lg()(),Ml(1577,`h4`,10),mN(1578,`Métodos`),lg(),Ml(1579,`table`,43)(1580,`tr`,14)(1581,`th`,44)(1582,`div`,23)(1583,`h4`)(1584,`span`,24),mN(1585,` getFilteredData `),lg()()()()(),Ml(1586,`tr`,22)(1587,`td`,22)(1588,`p`),mN(1589,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),lg()()()(),Ml(1590,`h5`)(1591,`b`),mN(1592,`Parâmetros`),lg()(),Ml(1593,`table`,11)(1594,`tr`,12)(1595,`th`,13),mN(1596,`Nome`),lg(),Ml(1597,`th`,13),mN(1598,`Tipo`),lg(),Ml(1599,`th`,13),mN(1600,`Descrição`),lg()(),Ml(1601,`tr`,14)(1602,`td`,15),mN(1603,` params`),lg(),Ml(1604,`td`,19)(1605,`code`,46),mN(1606,` any `),lg()(),Ml(1607,`td`,22)(1608,`p`),mN(1609,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),lg()()(),Ml(1610,`tr`,14)(1611,`td`,15),mN(1612,` filterParams`),lg(),Ml(1613,`td`,19)(1614,`code`,46),mN(1615,` any `),lg()(),Ml(1616,`td`,22)(1617,`p`),mN(1618,`Valor informado através da propriedade `),Ml(1619,`code`),mN(1620,`p-filter-params`),lg(),mN(1621,`.`),lg()()()(),ql(1622,`br`),Ml(1623,`table`,43)(1624,`tr`,14)(1625,`th`,44)(1626,`div`,23)(1627,`h4`)(1628,`span`,24),mN(1629,` getObjectByValue `),lg()()()()(),Ml(1630,`tr`,22)(1631,`td`,22)(1632,`p`),mN(1633,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),lg()()()(),Ml(1634,`h5`)(1635,`b`),mN(1636,`Parâmetros`),lg()(),Ml(1637,`table`,11)(1638,`tr`,12)(1639,`th`,13),mN(1640,`Nome`),lg(),Ml(1641,`th`,13),mN(1642,`Tipo`),lg(),Ml(1643,`th`,13),mN(1644,`Descrição`),lg()(),Ml(1645,`tr`,14)(1646,`td`,15),mN(1647,` value`),lg(),Ml(1648,`td`,19)(1649,`code`,25),mN(1650,` string `),lg(),Ml(1651,`code`,27),mN(1652,` number `),lg()(),Ml(1653,`td`,22)(1654,`p`),mN(1655,`Valor responsável por realizar a busca de um único objeto.`),lg()()(),Ml(1656,`tr`,14)(1657,`td`,15),mN(1658,` filterParams`),lg(),Ml(1659,`td`,19)(1660,`code`,46),mN(1661,` any `),lg()(),Ml(1662,`td`,22)(1663,`p`),mN(1664,`Valor informado através da propriedade `),Ml(1665,`code`),mN(1666,`p-filter-params`),lg(),mN(1667,`.`),lg()()()(),ql(1668,`br`),Ml(1669,`h4`,45)(1670,`code`,5),mN(1671,`PoComboLiterals`),lg()(),Ml(1672,`div`,2)(1673,`p`),mN(1674,`Interface para definição das literais usadas no `),Ml(1675,`code`),mN(1676,`po-combo`),lg(),mN(1677,`.`),lg()(),Ml(1678,`h4`,10),mN(1679,`Propriedades`),lg(),Ml(1680,`table`,11)(1681,`tr`,12)(1682,`th`,13),mN(1683,`Nome`),lg(),Ml(1684,`th`,13),mN(1685,`Tipo`),lg(),Ml(1686,`th`,13),mN(1687,`Descrição`),lg()(),Ml(1688,`tr`,14)(1689,`td`,15)(1690,`div`,23)(1691,`span`,24),mN(1692,` chooseOption`),ql(1693,`br`),lg()()(),Ml(1694,`td`,19)(1695,`code`,25),mN(1696,`string`),lg()(),Ml(1697,`td`,22)(1698,`em`)(1699,`strong`),mN(1700,`(opcional)`),lg()(),Ml(1701,`p`),mN(1702,`Texto exibido quando o combo estiver vazio.`),lg()()(),Ml(1703,`tr`,14)(1704,`td`,15)(1705,`div`,23)(1706,`span`,24),mN(1707,` clean`),ql(1708,`br`),lg()()(),Ml(1709,`td`,19)(1710,`code`,25),mN(1711,`string`),lg()(),Ml(1712,`td`,22)(1713,`em`)(1714,`strong`),mN(1715,`(opcional)`),lg()(),Ml(1716,`p`),mN(1717,`Texto do aria-label do botão de limpar`),lg()()(),Ml(1718,`tr`,14)(1719,`td`,15)(1720,`div`,23)(1721,`span`,24),mN(1722,` noData`),ql(1723,`br`),lg()()(),Ml(1724,`td`,19)(1725,`code`,25),mN(1726,`string`),lg()(),Ml(1727,`td`,22)(1728,`em`)(1729,`strong`),mN(1730,`(opcional)`),lg()(),Ml(1731,`p`),mN(1732,`Texto exibido quando não houver itens na lista ou se, a pesquisa do filtro não retornar nenhum item.`),lg()()()(),Ml(1733,`h4`,45)(1734,`code`,5),mN(1735,`PoComboOptionGroup`),lg()(),Ml(1736,`div`,2)(1737,`p`),mN(1738,`Interface dos agrupamentos da coleção que será exibida no dropdown do `),Ml(1739,`code`),mN(1740,`po-combo`),lg(),mN(1741,`.`),lg()(),Ml(1742,`h4`,10),mN(1743,`Propriedades`),lg(),Ml(1744,`table`,11)(1745,`tr`,12)(1746,`th`,13),mN(1747,`Nome`),lg(),Ml(1748,`th`,13),mN(1749,`Tipo`),lg(),Ml(1750,`th`,13),mN(1751,`Descrição`),lg()(),Ml(1752,`tr`,14)(1753,`td`,15)(1754,`div`,23)(1755,`span`,24),mN(1756,` label`),ql(1757,`br`),lg()()(),Ml(1758,`td`,19)(1759,`code`,25),mN(1760,`string`),lg()(),Ml(1761,`td`,22)(1762,`p`),mN(1763,`Título para cada grupo de opções.`),lg(),Ml(1764,`p`),mN(1765,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),lg()()(),Ml(1766,`tr`,14)(1767,`td`,15)(1768,`div`,23)(1769,`span`,24),mN(1770,` options`),ql(1771,`br`),lg()()(),Ml(1772,`td`,19)(1773,`code`,47),mN(1774,`Array<PoComboOption>`),lg()(),Ml(1775,`td`,22)(1776,`p`),mN(1777,`Lista de itens a serem exibidos.`),lg()()()(),Ml(1778,`h4`,45)(1779,`code`,5),mN(1780,`PoComboOption`),lg()(),Ml(1781,`div`,2)(1782,`p`),mN(1783,`Interface que define as opções que serão exibidas na lista do `),Ml(1784,`code`),mN(1785,`po-combo`),lg(),mN(1786,`.`),lg()(),Ml(1787,`h4`,10),mN(1788,`Propriedades`),lg(),Ml(1789,`table`,11)(1790,`tr`,12)(1791,`th`,13),mN(1792,`Nome`),lg(),Ml(1793,`th`,13),mN(1794,`Tipo`),lg(),Ml(1795,`th`,13),mN(1796,`Descrição`),lg()(),Ml(1797,`tr`,14)(1798,`td`,15)(1799,`div`,23)(1800,`span`,24),mN(1801,` label`),ql(1802,`br`),lg()()(),Ml(1803,`td`,19)(1804,`code`,25),mN(1805,`string`),lg()(),Ml(1806,`td`,22)(1807,`em`)(1808,`strong`),mN(1809,`(opcional)`),lg()(),Ml(1810,`p`),mN(1811,`Descrição exibida nas opções da lista.`),lg(),Ml(1812,`blockquote`)(1813,`p`),mN(1814,`Caso não seja definida será assumido o valor definido na propriedade `),Ml(1815,`code`),mN(1816,`value`),lg(),mN(1817,`.`),lg()()()(),Ml(1818,`tr`,14)(1819,`td`,15)(1820,`div`,23)(1821,`span`,24),mN(1822,` value`),ql(1823,`br`),lg()()(),Ml(1824,`td`,19)(1825,`code`,25),mN(1826,`string `),lg(),Ml(1827,`code`,27),mN(1828,` number`),lg()(),Ml(1829,`td`,22)(1830,`p`),mN(1831,`Valor do objeto que será atribuído ao `),Ml(1832,`em`),mN(1833,`model`),lg(),mN(1834,`.`),lg()()()(),Ml(1835,`h3`),mN(1836,`Enums`),lg(),Ml(1837,`h4`,4)(1838,`code`,5),mN(1839,`PoComboFilterMode`),lg()(),Ml(1840,`div`,2)(1841,`p`),mN(1842,`Define o tipo de busca usado no po-combo.`),lg()(),Ml(1843,`h4`,10),mN(1844,`Propriedades`),lg(),Ml(1845,`table`,11)(1846,`tr`,12)(1847,`th`,13),mN(1848,`Nome`),lg(),Ml(1849,`th`,13),mN(1850,`Descrição`),lg()(),Ml(1851,`tr`,14)(1852,`td`,15)(1853,`div`,23)(1854,`span`,24),mN(1855,` startsWith`),ql(1856,`br`),lg()()(),Ml(1857,`td`,22)(1858,`p`),mN(1859,`Verifica se o texto `),Ml(1860,`em`),mN(1861,`inicia`),lg(),mN(1862,` com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado.`),lg()()(),Ml(1863,`tr`,14)(1864,`td`,15)(1865,`div`,23)(1866,`span`,24),mN(1867,` contains`),ql(1868,`br`),lg()()(),Ml(1869,`td`,22)(1870,`p`),mN(1871,`Verifica se o texto `),Ml(1872,`em`),mN(1873,`contém`),lg(),mN(1874,` o valor pesquisado.`),lg()()(),Ml(1875,`tr`,14)(1876,`td`,15)(1877,`div`,23)(1878,`span`,24),mN(1879,` endsWith`),ql(1880,`br`),lg()()(),Ml(1881,`td`,22)(1882,`p`),mN(1883,`Verifica se o texto `),Ml(1884,`em`),mN(1885,`finaliza`),lg(),mN(1886,` com o valor pesquisado.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var zt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:13,vars:4,consts:[[`p-title`,`Combo`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-combo-doc`),lg(),Ml(4,`po-tab`,3),ht$1(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-combo-basic-view`)(6,`sample-po-combo-labs-view`)(7,`sample-po-combo-scheduling-view`)(8,`sample-po-combo-transfer-view`)(9,`sample-po-combo-heroes-view`)(10,`sample-po-combo-heroes-reactive-form-view`)(11,`sample-po-combo-infinity-scroll-view`)(12,`sample-po-combo-hotels-view`),lg()()()),p&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})()}];var it=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(zt),NL]})}return a})();var cn=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,it]})}return a})();export{cn as DocPoComboModule};