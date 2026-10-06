import{$i as pt,$r as VN,Ai as hm,Br as Qn,Ci as fo,Cr as KP,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Gr as Rx,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Ki as nk,Kn as Ax,Kr as S9,Lt as bae,M as Ef,N as Ene,Ni as hw,Qn as C9,R as G5,Sa as zO,Ur as RN,Vt as doe,Wi as m0,Wn as AN,Yr as TE,Z as Lte,Zn as Bx,_ as $3,_a as wn,_i as e_,ai as ZO,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,gr as IE,hn as ote,hr as I,i as _a,ia as sE,in as kte,ji as ho,k as D4,ki as he,kn as v4,li as bN,na as qP,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,sr as FN,st as Ooe,ti as Wx,ua as ug,ui as be,un as n4,va as xN,wr as Kc,zi as kL}from"./main-EZZF3RMT.js";var at=()=>({value:`Option 1`});var lt=()=>({value:`Option 2`});var rt=(a,q)=>[a,q];var Ae=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`combo`,`p-label`,`PO Combo`,3,`p-options`]],template:function(p,n){p&1&&Kc(0,`po-combo`,0),p&2&&cE(`p-options`,xN(3,rt,RN(1,at),RN(2,lt)))},dependencies:[n4],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-basic/sample-po-combo-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-basic/sample-po-combo-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-combo-basic`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,mt,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ae],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconsOptions=[{label:`an an-building-apartment`,value:`an an-building-apartment`},{label:`an an-gas-pump`,value:`an an-gas-pump`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];propertiesOptions=[{value:`changeOnEnter`,label:`Change On Enter`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`disabledInitFilter`,label:`Disabled Init Filter`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`sort`,label:`Sort`},{value:`clean`,label:`Clean`},{value:`disabledTabFilter`,label:`Disabled Tab Filter`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(m){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event=``,this.debounceTime=void 0,this.fieldLabel=``,this.fieldValue=``,this.filterMinlength=void 0,this.filterService=``,this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals=``,this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.selectedOptionsGroup=void 0,this.size=`medium`}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}]}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&`options`in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return[...m,{label:d,value:c}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-labs`]],standalone:!1,decls:44,vars:62,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`combo`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-change-on-enter`,`p-clean`,`p-debounce-time`,`p-disabled`,`p-disabled-init-filter`,`p-disabled-tab-filter`,`p-field-label`,`p-field-value`,`p-filter-minlength`,`p-filter-mode`,`p-filter-service`,`p-help`,`p-icon`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-sort`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`,`p-listbox-control-position`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po combo options group`],[`name`,`comboOptionGroupSwitch`,`p-label`,`Combo options group`,1,`po-lg-4`,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po combo options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter Mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`debounceTime`,`p-clean`,``,`p-label`,`Debounce Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterMinlength`,`p-clean`,``,`p-label`,`Filter Min Length`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let d=Bx();Ac(0,`po-combo`,2),RE(`ngModelChange`,function(i){return Jv(d),DN(n.combo,i)||(n.combo=i),e_(i)}),pt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,3),Kc(3,`po-info`,4)(4,`po-info`,5),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0),Kc(8,`po-divider`,6),Ac(9,`div`,3)(10,`po-switch`,7),RE(`ngModelChange`,function(i){return Jv(d),DN(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),e_(i)}),ug(),p0(),Ac(11,`po-select`,8),RE(`ngModelChange`,function(i){return Jv(d),DN(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),e_(i)}),pt(`p-change`,function(){return n.optionsGroupSelection()}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(i){return Jv(d),DN(n.optionsGroup,i)||(n.optionsGroup=i),e_(i)}),ug(),p0(),ug(),Kc(13,`po-divider`,10),Ac(14,`div`,3)(15,`po-input`,11),RE(`ngModelChange`,function(i){return Jv(d),DN(n.option.label,i)||(n.option.label=i),e_(i)}),ug(),p0(),Ac(16,`po-input`,12),RE(`ngModelChange`,function(i){return Jv(d),DN(n.option.value,i)||(n.option.value=i),e_(i)}),ug(),p0(),ug(),Ac(17,`div`,3)(18,`po-button`,13),pt(`p-click`,function(){return n.addOption()}),ug()()(),Kc(19,`po-divider`),Ac(20,`form`,null,1)(22,`po-input`,14),RE(`ngModelChange`,function(i){return Jv(d),DN(n.label,i)||(n.label=i),e_(i)}),ug(),p0(),Ac(23,`po-input`,15),RE(`ngModelChange`,function(i){return Jv(d),DN(n.help,i)||(n.help=i),e_(i)}),ug(),p0(),Ac(24,`po-input`,16),RE(`ngModelChange`,function(i){return Jv(d),DN(n.helperText,i)||(n.helperText=i),e_(i)}),ug(),p0(),Ac(25,`po-input`,17),RE(`ngModelChange`,function(i){return Jv(d),DN(n.placeholder,i)||(n.placeholder=i),e_(i)}),ug(),p0(),Ac(26,`po-input`,18),RE(`ngModelChange`,function(i){return Jv(d),DN(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),e_(i)}),ug(),p0(),Ac(27,`div`,3)(28,`po-checkbox-group`,19),RE(`ngModelChange`,function(i){return Jv(d),DN(n.properties,i)||(n.properties=i),e_(i)}),ug(),p0(),Ac(29,`po-radio-group`,20),RE(`ngModelChange`,function(i){return Jv(d),DN(n.icon,i)||(n.icon=i),e_(i)}),ug(),p0(),Ac(30,`po-radio-group`,21),RE(`ngModelChange`,function(i){return Jv(d),DN(n.filterMode,i)||(n.filterMode=i),e_(i)}),ug(),p0(),Ac(31,`po-radio-group`,22),RE(`ngModelChange`,function(i){return Jv(d),DN(n.size,i)||(n.size=i),e_(i)}),ug(),p0(),Ac(32,`po-radio-group`,23),RE(`ngModelChange`,function(i){return Jv(d),DN(n.listboxPosition,i)||(n.listboxPosition=i),e_(i)}),ug(),p0(),ug(),Ac(33,`div`,3)(34,`po-input`,24),RE(`ngModelChange`,function(i){return Jv(d),DN(n.filterService,i)||(n.filterService=i),e_(i)}),ug(),p0(),Ac(35,`po-input`,25),RE(`ngModelChange`,function(i){return Jv(d),DN(n.literals,i)||(n.literals=i),e_(i)}),pt(`p-change`,function(){return n.changeLiterals()}),ug(),p0(),ug(),Ac(36,`div`,3)(37,`po-input`,26),RE(`ngModelChange`,function(i){return Jv(d),DN(n.fieldValue,i)||(n.fieldValue=i),e_(i)}),ug(),p0(),Ac(38,`po-input`,27),RE(`ngModelChange`,function(i){return Jv(d),DN(n.fieldLabel,i)||(n.fieldLabel=i),e_(i)}),ug(),p0(),ug(),Ac(39,`div`,3)(40,`po-number`,28),RE(`ngModelChange`,function(i){return Jv(d),DN(n.debounceTime,i)||(n.debounceTime=i),e_(i)}),ug(),p0(),Ac(41,`po-number`,29),RE(`ngModelChange`,function(i){return Jv(d),DN(n.filterMinlength,i)||(n.filterMinlength=i),e_(i)}),ug(),p0(),ug(),Ac(42,`div`,3)(43,`po-button`,30),pt(`p-click`,function(){return n.restore()}),ug()()()}if(p&2){let d=Zx(7);TE(`ngModel`,n.combo),cE(`p-helper`,n.helperText)(`p-change-on-enter`,n.properties.includes(`changeOnEnter`))(`p-clean`,n.properties.includes(`clean`))(`p-debounce-time`,n.debounceTime)(`p-disabled`,n.properties.includes(`disabled`))(`p-disabled-init-filter`,n.properties.includes(`disableInitFilter`))(`p-disabled-tab-filter`,n.properties.includes(`disabledTabFilter`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-minlength`,n.filterMinlength)(`p-filter-mode`,n.filterMode)(`p-filter-service`,n.filterService)(`p-help`,n.help)(`p-icon`,n.icon)(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-sort`,n.properties.includes(`sort`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-listbox-control-position`,n.listboxPosition),m0(),Hp(3),cE(`p-value`,n.combo),Hp(),cE(`p-value`,n.event),Hp(6),TE(`ngModel`,n.comboOptionGroupSwitch),m0(),Hp(),TE(`ngModel`,n.selectedOptionsGroup),cE(`p-disabled`,!n.comboOptionGroupSwitch)(`p-options`,n.optionsGroupList),m0(),Hp(),TE(`ngModel`,n.optionsGroup),cE(`p-disabled`,!n.comboOptionGroupSwitch),m0(),Hp(3),TE(`ngModel`,n.option.label),m0(),Hp(),TE(`ngModel`,n.option.value),m0(),Hp(2),cE(`p-disabled`,d.form.invalid),Hp(4),TE(`ngModel`,n.label),m0(),Hp(),TE(`ngModel`,n.help),m0(),Hp(),TE(`ngModel`,n.helperText),m0(),Hp(),TE(`ngModel`,n.placeholder),m0(),Hp(),TE(`ngModel`,n.fieldErrorMessage),m0(),Hp(2),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0(),Hp(),TE(`ngModel`,n.icon),cE(`p-options`,n.iconsOptions),m0(),Hp(),TE(`ngModel`,n.filterMode),cE(`p-options`,n.filterModeOptions),m0(),Hp(),TE(`ngModel`,n.size),cE(`p-options`,n.sizeOptions),m0(),Hp(),TE(`ngModel`,n.listboxPosition),cE(`p-options`,n.listboxPositionOptions),m0(),Hp(2),TE(`ngModel`,n.filterService),m0(),Hp(),TE(`ngModel`,n.literals),m0(),Hp(2),TE(`ngModel`,n.fieldValue),m0(),Hp(),TE(`ngModel`,n.fieldLabel),m0(),Hp(2),TE(`ngModel`,n.debounceTime),m0(),Hp(),TE(`ngModel`,n.filterMinlength),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,n4,D4,roe,kte,poe,v4,hoe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-labs/sample-po-combo-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-combo
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-labs/sample-po-combo-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-combo-labs`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ct,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ge],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{getcities(){return[{label:`São Paulo`,options:[{label:`São Paulo`,value:`sao paulo`},{label:`Campinas`,value:`campinas`}]},{label:`Paraná`,options:[{label:`São José dos Pinhais`,value:`sao jose dos pinhais`},{label:`Londrina`,value:`londrina`},{label:`Maringá`,value:`maringa`}]},{label:`Santa Catarina`,options:[{label:`Joinville`,value:`joinville`},{label:`Florianópolis`,value:`florianopolis`},{label:`Itajaí`,value:`itajai`}]}]}getMedicalSpecialty(){return[{specialty:`Allergist`,specialtyValue:`allergist`},{specialty:`Cardiologist`,specialtyValue:`cardiologist`},{specialty:`General practitioner`,specialtyValue:`generalPractitioner`},{specialty:`Dermatologist`,specialtyValue:`dermatologist`},{specialty:`Gynecologist`,specialtyValue:`gynecologist`},{specialty:`Nutritionist`,specialtyValue:`nutritionist`},{specialty:`Pediatrist`,specialtyValue:`pediatrist`},{specialty:`Psychiatrist`,specialtyValue:`psychiatrist`},{specialty:`Orthopaedist`,specialtyValue:`orthopaedist`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var bt=[`schedulingForm`];function gt(a,q){if(a&1&&(Ac(0,`div`,3),Kc(1,`po-avatar`,15),Ac(2,`p`,14),vN(3),ug()()),a&2){let m=Wx().$implicit,p=Wx();Hp(),cE(`p-src`,p.getStateByLabel(m.label)),Hp(2),IE(m.label)}}function ht(a,q){if(a&1&&(Ac(0,`div`,14),vN(1),ug()),a&2){let m=Wx().$implicit;Hp(),IE(m.label)}}function St(a,q){if(a&1&&Rx(0,gt,4,2,`div`,3)(1,ht,2,1,`div`,14),a&2){let m=q.$implicit;Ax(m.options?0:1)}}var ze=(()=>{class a{poNotification=f(Ou);schedulingService=f(fe);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:`Particular`,value:`particular`},{label:`Health Insurance`,value:`healthInsurance`}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(m=``){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(m){return`https://thf.totvs.com.br/sample/api/static/assets/${{"São Paulo":`sp`,"Santa Catarina":`sc`,Paraná:`pr`}[m]}.png`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-scheduling`]],viewQuery:function(p,n){if(p&1&&Xc(bt,7),p&2){let d;fo(d=ho())&&(n.form=d.first)}},standalone:!1,features:[be([fe])],decls:20,vars:12,consts:[[`schedulingForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-placeholder`,`example@domain.com`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-label`,`Birthday`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-clean`,``,`p-label`,`Phone number`,`p-mask`,`(99) 99999-9999`,`p-placeholder`,`(99) 99999-9999`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-icon`,`an an-map-trifold`,`p-label`,`Select a location`,`p-placeholder`,`Select a location`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-combo-option-template`,``],[`name`,`typeScheduling`,`p-label`,`Type scheduling`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`medicalSpecialty`,`p-icon`,`an an-flask`,`p-label`,`Medical Specialty/Exam`,`p-required`,``,`p-sort`,``,`p-field-label`,`specialty`,`p-field-value`,`specialtyValue`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`informations`,`p-help`,`Additional informations`,`p-label`,`Informations`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Schedule`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[`p-size`,`xs`,1,`po-sm-2`,`po-md-3`,`po-lg-1`,`sample-combo-avatar-bg`,3,`p-src`]],template:function(p,n){if(p&1){let d=Bx();Ac(0,`div`,1)(1,`div`,2),vN(2,`Pre-appointment scheduling`),ug()(),Ac(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),RE(`ngModelChange`,function(i){return Jv(d),DN(n.name,i)||(n.name=i),e_(i)}),ug(),p0(),Ac(7,`po-email`,5),RE(`ngModelChange`,function(i){return Jv(d),DN(n.email,i)||(n.email=i),e_(i)}),ug(),p0(),ug(),Ac(8,`div`,3)(9,`po-datepicker`,6),RE(`ngModelChange`,function(i){return Jv(d),DN(n.birthday,i)||(n.birthday=i),e_(i)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(i){return Jv(d),DN(n.phone,i)||(n.phone=i),e_(i)}),ug(),p0(),ug(),Ac(11,`div`,3)(12,`po-combo`,8),RE(`ngModelChange`,function(i){return Jv(d),DN(n.city,i)||(n.city=i),e_(i)}),sE(13,St,2,1,`ng-template`,9),ug(),p0(),Ac(14,`po-select`,10),RE(`ngModelChange`,function(i){return Jv(d),DN(n.typeScheduling,i)||(n.typeScheduling=i),e_(i)}),ug(),p0(),Ac(15,`po-combo`,11),RE(`ngModelChange`,function(i){return Jv(d),DN(n.medicalSpecialty,i)||(n.medicalSpecialty=i),e_(i)}),ug(),p0(),ug(),Ac(16,`div`,3)(17,`po-textarea`,12),RE(`ngModelChange`,function(i){return Jv(d),DN(n.informations,i)||(n.informations=i),e_(i)}),ug(),p0(),ug(),Ac(18,`div`,3)(19,`po-button`,13),pt(`p-click`,function(){return n.confirmPreAppointment(n.name)}),ug()()()}if(p&2){let d=Zx(4);Hp(6),TE(`ngModel`,n.name),m0(),Hp(),TE(`ngModel`,n.email),m0(),Hp(2),TE(`ngModel`,n.birthday),m0(),Hp(),TE(`ngModel`,n.phone),m0(),Hp(2),TE(`ngModel`,n.city),cE(`p-options`,n.citiesOptions),m0(),Hp(2),TE(`ngModel`,n.typeScheduling),cE(`p-options`,n.typeSchedulings),m0(),Hp(),TE(`ngModel`,n.medicalSpecialty),cE(`p-options`,n.medicalSpecialtyOptions),m0(),Hp(2),TE(`ngModel`,n.informations),m0(),Hp(2),cE(`p-disabled`,d.invalid)}},dependencies:[b9,D9,C9,BP,LP,G5,ni,n4,ote,Lte,$3,D4,poe,doe],styles:[`.sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}`],changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-scheduling-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo - Scheduling`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-text-center">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()(),Ac(25,`po-tab`,10)(26,`div`)(27,`label`,6),vN(28,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`),ug(),Ac(29,`pre`,11),vN(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),ug()()()()(),Ac(31,`div`,12),Kc(32,`sample-po-combo-scheduling`),ug(),Kc(33,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ft,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ze],encapsulation:2,changeDetection:1})}return a})();var vt=[`transferForm`];function xt(a,q){if(a&1&&(Ac(0,`div`,3),Kc(1,`po-avatar`,15),Ac(2,`div`,16)(3,`div`,17),vN(4),ug(),Ac(5,`div`,18),vN(6),ug()()()),a&2){let m=q.$implicit;Hp(4),IE(m.label),Hp(2),mg(`Account: `,m.value)}}var Ue=(()=>{class a{poNotification=f(Ou);form;poModal;contact;dateTransfer=new Date;typeAccount=`Checking Account`;value;cancelAction={label:`Cancel`,action:()=>this.poModal.close()};confirmAction={label:`Confirm`,action:()=>this.confirmTransfer()};typeAccounts=[{label:`Checking Account`,value:`Checking Account`},{label:`Savings Account`,value:`Savings Account`}];confirmTransfer(){this.poModal.close(),this.poNotification.success(`Successful Transfer`),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:`Checking Account`})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-transfer`]],viewQuery:function(p,n){if(p&1&&Xc(vt,7)(ta,7),p&2){let d;fo(d=ho())&&(n.form=d.first),fo(d=ho())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:15,consts:[[`transferForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`typeAccount`,`p-label`,`From`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`contact`,`p-field-value`,`id`,`p-field-label`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-icon`,`an an-user`,`p-label`,`To contact`,`p-placeholder`,`Select a contact`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-combo-option-template`,``],[`name`,`value`,`p-clean`,``,`p-label`,`Value to transfer`,`p-placeholder`,`R$ 0,00`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dateTransfer`,`p-label`,`Date to transfer`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Transfer`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Do you confirm transfer?`,3,`p-primary-action`,`p-secondary-action`],[`p-label`,`From`,1,`po-md-6`,3,`p-value`],[`p-label`,`To`,1,`po-md-6`,3,`p-value`],[`p-label`,`Value`,1,`po-md-6`,3,`p-value`],[`p-label`,`Date to transfer`,1,`po-md-6`,3,`p-value`],[`p-size`,`sm`,1,`po-sm-2`,`po-md-3`,`po-lg-1`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[1,`po-font-text-large-bold`],[1,`po-font-text-smaller`]],template:function(p,n){if(p&1){let d=Bx();Ac(0,`div`,1)(1,`div`,2),vN(2,`Banking Transfer`),ug()(),Ac(3,`form`,null,0)(5,`div`,3)(6,`po-select`,4),RE(`ngModelChange`,function(i){return Jv(d),DN(n.typeAccount,i)||(n.typeAccount=i),e_(i)}),ug(),p0(),Ac(7,`po-combo`,5),RE(`ngModelChange`,function(i){return Jv(d),DN(n.contact,i)||(n.contact=i),e_(i)}),sE(8,xt,7,2,`ng-template`,6),ug(),p0(),ug(),Ac(9,`div`,3)(10,`po-decimal`,7),RE(`ngModelChange`,function(i){return Jv(d),DN(n.value,i)||(n.value=i),e_(i)}),ug(),p0(),Ac(11,`po-datepicker`,8),RE(`ngModelChange`,function(i){return Jv(d),DN(n.dateTransfer,i)||(n.dateTransfer=i),e_(i)}),ug(),p0(),ug(),Ac(12,`div`,3)(13,`po-button`,9),pt(`p-click`,function(){return n.transfer()}),ug()()(),Ac(14,`po-modal`,10)(15,`div`,3),Kc(16,`po-info`,11)(17,`po-info`,12),ug(),Kc(18,`po-divider`),Ac(19,`div`,3),Kc(20,`po-info`,13)(21,`po-info`,14),FN(22,`date`),ug()()}if(p&2){let d=Zx(4);Hp(6),TE(`ngModel`,n.typeAccount),cE(`p-options`,n.typeAccounts),m0(),Hp(),TE(`ngModel`,n.contact),m0(),Hp(3),TE(`ngModel`,n.value),m0(),Hp(),TE(`ngModel`,n.dateTransfer),m0(),Hp(2),cE(`p-disabled`,d.invalid),Hp(),cE(`p-primary-action`,n.confirmAction)(`p-secondary-action`,n.cancelAction),Hp(2),cE(`p-value`,n.typeAccount),Hp(),cE(`p-value`,n.contact),Hp(3),cE(`p-value`,n.value),Hp(),cE(`p-value`,bN(VN(22,13,n.dateTransfer)))}},dependencies:[b9,D9,C9,BP,LP,G5,ni,Ef,n4,ote,Lte,Ene,poe,hoe,ta,nk],encapsulation:2,changeDetection:1})}return a})();var _t=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-transfer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo - Banking Transfer`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-text-center">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-combo-transfer`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_t,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ue],encapsulation:2,changeDetection:1})}return a})();function Pt(a,q){if(a&1&&(Ac(0,`div`,0),Kc(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),ug()),a&2){let m=q;Hp(),cE(`p-value`,m.name),Hp(),cE(`p-value`,m.nickname),Hp(),cE(`p-value`,m.email)}}var Ke=(()=>{class a{http=f(hw);hero$;heroName;get knowMoreLabel(){return this.heroName?`Know more`:void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-heroes`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[`name`,`heroName`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Ac(0,`div`,0)(1,`po-widget`,1),pt(`p-primary-action`,function(){return n.knowMore(n.heroName)}),Ac(2,`po-combo`,2),RE(`ngModelChange`,function(c){return DN(n.heroName,c)||(n.heroName=c),c}),pt(`p-change`,function(c){return n.onChangeHero(c)}),ug(),p0(),Rx(3,Pt,4,3,`div`,0),FN(4,`async`),ug()()),p&2){let d;Hp(),cE(`p-primary-label`,n.knowMoreLabel),Hp(),TE(`ngModel`,n.heroName),m0(),Hp(),Ax((d=VN(4,3,n.hero$))?3:-1,d)}},dependencies:[D9,BP,n4,hoe,Ooe,ZO],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-heroes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo - Heroes`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-combo-heroes`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Tt,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ke],encapsulation:2,changeDetection:1})}return a})();function Dt(a,q){if(a&1&&(Ac(0,`div`,0),Kc(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),ug()),a&2){let m=q;Hp(),cE(`p-value`,m.name),Hp(),cE(`p-value`,m.nickname),Hp(),cE(`p-value`,m.email)}}var Ye=(()=>{class a{http=f(hw);formBuilder=f(S9);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,hm.required]})}get knowMoreLabel(){return this.form.valid?`Know more`:void 0}knowMore(){let m=this.form.get(`hero`).value;window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form`]],standalone:!1,decls:6,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[3,`formGroup`],[`name`,`heroName`,`formControlName`,`hero`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`p-change`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Ac(0,`div`,0)(1,`po-widget`,1),pt(`p-primary-action`,function(){return n.knowMore()}),Ac(2,`div`,2)(3,`po-combo`,3),pt(`p-change`,function(c){return n.onChangeHero(c)}),ug(),p0(),ug(),Rx(4,Dt,4,3,`div`,0),FN(5,`async`),ug()()),p&2){let d;Hp(),cE(`p-primary-label`,n.knowMoreLabel),Hp(),cE(`formGroup`,n.form),Hp(),m0(),Hp(),Ax((d=VN(5,3,n.hero$))?4:-1,d)}},dependencies:[D9,C9,KP,qP,n4,hoe,Ooe,ZO],encapsulation:2,changeDetection:1})}return a})();var Ot=a=>({"docs-sample-code-tabs":a});var Xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-heroes-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo - Heroes Reactive Form`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-combo-heroes-reactive-form`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ot,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ye],encapsulation:2,changeDetection:1})}return a})();function qt(a,q){if(a&1&&(Ac(0,`div`,0),Kc(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),ug()),a&2){let m=q;Hp(),cE(`p-value`,m.name),Hp(),cE(`p-value`,m.nickname),Hp(),cE(`p-value`,m.email)}}var Ze=(()=>{class a{http=f(hw);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m)}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-infinity-scroll`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`],[`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`People`,`name`,`people`,`p-field-label`,`name`,`p-field-value`,`id`,3,`ngModelChange`,`p-change`,`ngModel`,`p-infinite-scroll`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Ac(0,`div`,0)(1,`po-widget`,1)(2,`po-combo`,2),RE(`ngModelChange`,function(c){return DN(n.peopleName,c)||(n.peopleName=c),c}),pt(`p-change`,function(c){return n.onChangePeople(c)}),ug(),p0(),Rx(3,qt,4,3,`div`,0),FN(4,`async`),ug()()),p&2){let d;Hp(2),TE(`ngModel`,n.peopleName),cE(`p-infinite-scroll`,!0),m0(),Hp(),Ax((d=VN(4,3,n.people$))?3:-1,d)}},dependencies:[D9,BP,n4,hoe,Ooe,ZO],encapsulation:2,changeDetection:1})}return a})();var Nt=a=>({"docs-sample-code-tabs":a});var $e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-infinity-scroll-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo - Inifity Scroll`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { HttpClient } from '@angular/common/http';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-combo-infinity-scroll`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Nt,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ze],encapsulation:2,changeDetection:1})}return a})();var Bt=[`bookingForm`];var Ht=[`datepicker`];var et=(()=>{class a{poNotification=f(Ou);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];roomsOptions=[{label:`1 Room`,value:1},{label:`2 Rooms`,value:2},{label:`3 Rooms`,value:3}];booking(){this.poNotification.success(`Hotel booked successfully`),this.formReset(),this.datepickerComponent.focus()}onChangeParams(m){this.filterParams=m?{category:`Luxo`}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-hotels`]],viewQuery:function(p,n){if(p&1&&Xc(Bt,7)(Ht,7),p&2){let d;fo(d=ho())&&(n.form=d.first),fo(d=ho())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`switch`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,`p-label`,`Only Luxury Category`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`rooms`,`p-label`,`Rooms`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hotel`,`p-debounce-time`,`500`,`p-disabled-init-filter`,``,`p-filter-minlength`,`1`,`p-icon`,`an an-magnifying-glass`,`p-required`,``,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Search a hotel`,`p-sort`,``,`p-filter-service`,`https://po-sample-api.onrender.com/v1/hotels`,`p-listbox-control-position`,`top`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-filter-params`],[`p-label`,`Booking`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(p,n){if(p&1){let d=Bx();Ac(0,`div`,2)(1,`div`,3),vN(2,`Booking a Hotel`),ug()(),Ac(3,`form`,null,0)(5,`div`,4)(6,`po-datepicker`,5,1),RE(`ngModelChange`,function(i){return Jv(d),DN(n.checkin,i)||(n.checkin=i),e_(i)}),ug(),p0(),Ac(8,`po-datepicker`,6),RE(`ngModelChange`,function(i){return Jv(d),DN(n.checkout,i)||(n.checkout=i),e_(i)}),ug(),p0(),Ac(9,`po-switch`,7),RE(`ngModelChange`,function(i){return Jv(d),DN(n.category,i)||(n.category=i),e_(i)}),pt(`p-change`,function(i){return n.onChangeParams(i)}),ug(),p0(),ug(),Ac(10,`div`,4)(11,`po-select`,8),RE(`ngModelChange`,function(i){return Jv(d),DN(n.rooms,i)||(n.rooms=i),e_(i)}),ug(),p0(),Ac(12,`po-select`,9),RE(`ngModelChange`,function(i){return Jv(d),DN(n.children,i)||(n.children=i),e_(i)}),ug(),p0(),Ac(13,`po-select`,10),RE(`ngModelChange`,function(i){return Jv(d),DN(n.adults,i)||(n.adults=i),e_(i)}),ug(),p0(),ug(),Ac(14,`div`,4)(15,`po-combo`,11),RE(`ngModelChange`,function(i){return Jv(d),DN(n.hotel,i)||(n.hotel=i),e_(i)}),ug(),p0(),ug(),Ac(16,`div`,4)(17,`po-button`,12),pt(`p-click`,function(){return n.booking()}),ug()()()}if(p&2){let d=Zx(4);Hp(6),TE(`ngModel`,n.checkin),cE(`p-max-date`,n.checkout),m0(),Hp(2),TE(`ngModel`,n.checkout),cE(`p-min-date`,n.checkin),m0(),Hp(),TE(`ngModel`,n.category),m0(),Hp(2),TE(`ngModel`,n.rooms),cE(`p-options`,n.roomsOptions),m0(),Hp(),TE(`ngModel`,n.children),cE(`p-options`,n.childrenOptions),m0(),Hp(),TE(`ngModel`,n.adults),cE(`p-options`,n.adultsOptions),m0(),Hp(2),TE(`ngModel`,n.hotel),cE(`p-filter-params`,n.filterParams),m0(),Hp(2),cE(`p-disabled`,d.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,n4,Lte,poe,v4],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a});var tt=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-hotels-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Combo - Booking Hotel`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-text-center">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-combo-hotels`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,It,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-combo-doc`]],standalone:!1,decls:1887,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilterMode`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption`],[`pan`,``,1,`docs-api-property-type`,`PoComboOptionGroup`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption>`]],template:function(p,n){p&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoComboComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O `),Ac(24,`code`),vN(25,`po-combo`),ug(),vN(26,` exibe uma lista de opções com fácil seleção e filtragem.`),ug(),Ac(27,`p`),vN(28,`Além da exibição padrão, nele é possível listar as opões em agrupamentos.`),ug(),Ac(29,`p`),vN(30,`É possível selecionar e navegar entre as opções da lista tanto através do `),Ac(31,`em`),vN(32,`mouse`),ug(),vN(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Ac(34,`em`),vN(35,`Enter`),ug(),vN(36,` na opção que desejar.`),ug(),Ac(37,`p`),vN(38,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Ac(39,`code`),vN(40,`p-filter-service`),ug(),vN(41,`.`),ug(),Ac(42,`p`),vN(43,`Em `),Ac(44,`code`),vN(45,`p-filter-mode`),ug(),vN(46,`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.`),ug(),Ac(47,`p`),vN(48,`O `),Ac(49,`code`),vN(50,`po-combo`),ug(),vN(51,` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando `),Ac(52,`em`),vN(53,`Esc`),ug(),vN(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Ac(55,`em`),vN(56,`Enter`),ug(),vN(57,`.`),ug(),Ac(58,`p`),vN(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),ug(),Ac(60,`h4`),vN(61,`Tokens customizáveis`),ug(),Ac(62,`p`),vN(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(64,`blockquote`)(65,`p`),vN(66,`Para maiores informações, acesse o guia `),Ac(67,`a`,6),vN(68,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(69,`.`),ug()(),Ac(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),vN(74,`Propriedade`),ug(),Ac(75,`th`),vN(76,`Descrição`),ug(),Ac(77,`th`),vN(78,`Valor Padrão`),ug()()(),Ac(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),vN(83,`Default Values`),ug()(),Kc(84,`td`)(85,`td`),ug(),Ac(86,`tr`)(87,`td`)(88,`code`),vN(89,`--font-family`),ug()(),Ac(90,`td`),vN(91,`Família tipográfica usada`),ug(),Ac(92,`td`)(93,`code`),vN(94,`var(--font-family-theme)`),ug()()(),Ac(95,`tr`)(96,`td`)(97,`code`),vN(98,`--font-size`),ug()(),Ac(99,`td`),vN(100,`Tamanho da fonte`),ug(),Ac(101,`td`)(102,`code`),vN(103,`var(--font-size-default)`),ug()()(),Ac(104,`tr`)(105,`td`)(106,`code`),vN(107,`--text-color`),ug()(),Ac(108,`td`),vN(109,`Cor do texto`),ug(),Ac(110,`td`)(111,`code`),vN(112,`var(--color-neutral-dark-90)`),ug()()(),Ac(113,`tr`)(114,`td`)(115,`code`),vN(116,`--text-color-placeholder`),ug()(),Ac(117,`td`),vN(118,`Cor do texto no placeholder`),ug(),Ac(119,`td`)(120,`code`),vN(121,`var(--color-neutral-light-30)`),ug()()(),Ac(122,`tr`)(123,`td`)(124,`code`),vN(125,`--color`),ug()(),Ac(126,`td`),vN(127,`Cor principal do Combo`),ug(),Ac(128,`td`)(129,`code`),vN(130,`var(--color-neutral-dark-70)`),ug()()(),Ac(131,`tr`)(132,`td`)(133,`code`),vN(134,`--background`),ug()(),Ac(135,`td`),vN(136,`Cor de background`),ug(),Ac(137,`td`)(138,`code`),vN(139,`var(--color-neutral-light-05)`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`code`),vN(143,`--border-radius`),ug()(),Ac(144,`td`),vN(145,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(146,`td`)(147,`code`),vN(148,`var(--border-width-lg)`),ug()()(),Ac(149,`tr`)(150,`td`)(151,`code`),vN(152,`--min-width`),ug()(),Ac(153,`td`),vN(154,`Largura mínima do combo`),ug(),Ac(155,`td`)(156,`code`),vN(157,`150px`),ug()()(),Ac(158,`tr`)(159,`td`)(160,`code`),vN(161,`--field-container-title-justify`),ug()(),Ac(162,`td`),vN(163,`Alinhamento horizontal do título (`),Ac(164,`code`),vN(165,`justify-content`),ug(),vN(166,`)`),ug(),Ac(167,`td`)(168,`code`),vN(169,`space-between`),ug()()(),Ac(170,`tr`)(171,`td`)(172,`code`),vN(173,`--field-container-title-flex`),ug()(),Ac(174,`td`),vN(175,`Flex do título (`),Ac(176,`code`),vN(177,`flex`),ug(),vN(178,`)`),ug(),Ac(179,`td`)(180,`code`),vN(181,`1 auto`),ug()()(),Ac(182,`tr`)(183,`td`)(184,`strong`),vN(185,`Hover`),ug()(),Kc(186,`td`)(187,`td`),ug(),Ac(188,`tr`)(189,`td`)(190,`code`),vN(191,`--color-hover`),ug()(),Ac(192,`td`),vN(193,`Cor principal no estado hover`),ug(),Ac(194,`td`)(195,`code`),vN(196,`var(--color-action-hover)`),ug()()(),Ac(197,`tr`)(198,`td`)(199,`code`),vN(200,`--background-hover`),ug()(),Ac(201,`td`),vN(202,`Cor de background no estado hover`),ug(),Ac(203,`td`)(204,`code`),vN(205,`var(--color-brand-01-lightest)`),ug()()(),Ac(206,`tr`)(207,`td`)(208,`strong`),vN(209,`Focused`),ug()(),Kc(210,`td`)(211,`td`),ug(),Ac(212,`tr`)(213,`td`)(214,`code`),vN(215,`--color-focused`),ug()(),Ac(216,`td`),vN(217,`Cor principal no estado de focus`),ug(),Ac(218,`td`)(219,`code`),vN(220,`var(--color-action-default)`),ug()()(),Ac(221,`tr`)(222,`td`)(223,`code`),vN(224,`--outline-color-focused`),ug()(),Ac(225,`td`),vN(226,`Cor do outline do estado de focus`),ug(),Ac(227,`td`)(228,`code`),vN(229,`var(--color-action-focus)`),ug()()(),Ac(230,`tr`)(231,`td`)(232,`strong`),vN(233,`Error`),ug()(),Kc(234,`td`)(235,`td`),ug(),Ac(236,`tr`)(237,`td`)(238,`code`),vN(239,`--color-error`),ug()(),Ac(240,`td`),vN(241,`Cor principal no estado de erro`),ug(),Ac(242,`td`)(243,`code`),vN(244,`var(--color-feedback-negative-base)`),ug()()(),Ac(245,`tr`)(246,`td`)(247,`strong`),vN(248,`Disabled`),ug()(),Kc(249,`td`)(250,`td`),ug(),Ac(251,`tr`)(252,`td`)(253,`code`),vN(254,`--color-disabled`),ug()(),Ac(255,`td`),vN(256,`Cor principal no estado disabled`),ug(),Ac(257,`td`)(258,`code`),vN(259,`var(--color-neutral-light-30)`),ug()()(),Ac(260,`tr`)(261,`td`)(262,`code`),vN(263,`--background-disabled`),ug()(),Ac(264,`td`),vN(265,`Cor de background no estado disabled`),ug(),Ac(266,`td`)(267,`code`),vN(268,`var(--color-neutral-light-20)`),ug()()(),Ac(269,`tr`)(270,`td`)(271,`strong`),vN(272,`Suggestion`),ug()(),Kc(273,`td`)(274,`td`),ug(),Ac(275,`tr`)(276,`td`)(277,`code`),vN(278,`--text-color-suggestion`),ug()(),Ac(279,`td`),vN(280,`Cor do texto no estado suggestion`),ug(),Ac(281,`td`)(282,`code`),vN(283,`var(--color-neutral-mid-60)`),ug()()(),Ac(284,`tr`)(285,`td`)(286,`code`),vN(287,`--background-suggestion`),ug()(),Ac(288,`td`),vN(289,`Cor do background no estado suggestion`),ug(),Ac(290,`td`)(291,`code`),vN(292,`var(--color-brand-01-lightest)`),ug()()()()()(),Ac(293,`div`,7)(294,`h4`,8),vN(295,`Seletor`),ug(),Ac(296,`pre`,9),vN(297,`<po-combo
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
`),ug()(),Ac(298,`h4`,10),vN(299,`Propriedades`),ug(),Ac(300,`table`,11)(301,`tr`,12)(302,`th`,13),vN(303,`Nome`),ug(),Ac(304,`th`,13),vN(305,`Tipo`),ug(),Ac(306,`th`,13),vN(307,`Padrão`),ug(),Ac(308,`th`,13),vN(309,`Descrição`),ug()(),Ac(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),vN(314,` (p-additional-help)`),Kc(315,`br`),ug()(),Ac(316,`div`,18),vN(317,`Deprecated`),ug()(),Ac(318,`td`,19)(319,`code`,20),vN(320,`EventEmitter`),ug()(),Ac(321,`td`,21),vN(322,`-`),ug(),Ac(323,`td`,22)(324,`em`)(325,`strong`),vN(326,`(opcional)`),ug()(),Ac(327,`p`),vN(328,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(329,`blockquote`)(330,`p`),vN(331,`Essa propriedade está `),Ac(332,`strong`),vN(333,`depreciada`),ug(),vN(334,` e será removida na versão `),Ac(335,`code`),vN(336,`23.x.x`),ug(),vN(337,`. Recomendamos utilizar a propriedade `),Ac(338,`code`),vN(339,`p-helper`),ug(),vN(340,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(341,`tr`,14)(342,`td`,15)(343,`div`,23)(344,`span`,24),vN(345,` p-additional-help-tooltip`),Kc(346,`br`),ug()(),Ac(347,`div`,18),vN(348,`Deprecated`),ug()(),Ac(349,`td`,19)(350,`code`,25),vN(351,`string`),ug()(),Ac(352,`td`,21),vN(353,`-`),ug(),Ac(354,`td`,22)(355,`em`)(356,`strong`),vN(357,`(opcional)`),ug()(),Ac(358,`p`),vN(359,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(360,`code`),vN(361,`po-helper`),ug(),vN(362,`.
`),Ac(363,`strong`),vN(364,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(365,`blockquote`)(366,`p`),vN(367,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(368,`blockquote`)(369,`p`),vN(370,`Essa propriedade está `),Ac(371,`strong`),vN(372,`depreciada`),ug(),vN(373,` e será removida na versão `),Ac(374,`code`),vN(375,`23.x.x`),ug(),vN(376,`. Recomendamos utilizar a propriedade `),Ac(377,`code`),vN(378,`p-helper`),ug(),vN(379,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),vN(384,` p-append-in-body`),Kc(385,`br`),ug()()(),Ac(386,`td`,19)(387,`code`,26),vN(388,`boolean`),ug()(),Ac(389,`td`,21)(390,`p`)(391,`code`),vN(392,`false`),ug()()(),Ac(393,`td`,22)(394,`em`)(395,`strong`),vN(396,`(opcional)`),ug()(),Ac(397,`p`),vN(398,`Define que o `),Ac(399,`code`),vN(400,`listbox`),ug(),vN(401,` e/ou popover (`),Ac(402,`code`),vN(403,`p-helper`),ug(),vN(404,` e/ou `),Ac(405,`code`),vN(406,`p-error-limit`),ug(),vN(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ug(),Ac(408,`blockquote`)(409,`p`),vN(410,`Quando utilizado com `),Ac(411,`code`),vN(412,`p-helper`),ug(),vN(413,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(414,`tr`,14)(415,`td`,15)(416,`div`,23)(417,`span`,24),vN(418,` p-auto-focus`),Kc(419,`br`),ug()()(),Ac(420,`td`,19)(421,`code`,26),vN(422,`boolean`),ug()(),Ac(423,`td`,21)(424,`p`)(425,`code`),vN(426,`false`),ug()()(),Ac(427,`td`,22)(428,`em`)(429,`strong`),vN(430,`(opcional)`),ug()(),Ac(431,`p`),vN(432,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(433,`blockquote`)(434,`p`),vN(435,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(436,`tr`,14)(437,`td`,15)(438,`div`,16)(439,`span`,17),vN(440,` (p-blur)`),Kc(441,`br`),ug()()(),Ac(442,`td`,19)(443,`code`,20),vN(444,`EventEmitter`),ug()(),Ac(445,`td`,21),vN(446,`-`),ug(),Ac(447,`td`,22)(448,`em`)(449,`strong`),vN(450,`(opcional)`),ug()(),Ac(451,`p`),vN(452,`Evento disparado ao sair do campo.`),ug()()(),Ac(453,`tr`,14)(454,`td`,15)(455,`div`,23)(456,`span`,24),vN(457,` p-cache`),Kc(458,`br`),ug()()(),Ac(459,`td`,19)(460,`code`,26),vN(461,`boolean`),ug()(),Ac(462,`td`,21)(463,`p`)(464,`code`),vN(465,`true`),ug()()(),Ac(466,`td`,22)(467,`em`)(468,`strong`),vN(469,`(opcional)`),ug()(),Ac(470,`p`),vN(471,`Define se o componente irá guardar o valor do model para evitar requisições repetidas.`),ug(),Ac(472,`blockquote`)(473,`p`),vN(474,`Caso o valor seja `),Ac(475,`code`),vN(476,`false`),ug(),vN(477,`, o componente fará uma nova requisição mesmo que o valor procurado seja o mesmo do model.`),ug()()()(),Ac(478,`tr`,14)(479,`td`,15)(480,`div`,16)(481,`span`,17),vN(482,` (p-change)`),Kc(483,`br`),ug()()(),Ac(484,`td`,19)(485,`code`,20),vN(486,`EventEmitter`),ug()(),Ac(487,`td`,21),vN(488,`-`),ug(),Ac(489,`td`,22)(490,`em`)(491,`strong`),vN(492,`(opcional)`),ug()(),Ac(493,`p`),vN(494,`Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.`),ug(),Ac(495,`blockquote`)(496,`p`),vN(497,`Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `),Ac(498,`code`),vN(499,`p-emit-object-value`),ug(),vN(500,`.`),ug()()()(),Ac(501,`tr`,14)(502,`td`,15)(503,`div`,16)(504,`span`,17),vN(505,` (p-change-model)`),Kc(506,`br`),ug()()(),Ac(507,`td`,19)(508,`code`,20),vN(509,`EventEmitter`),ug()(),Ac(510,`td`,21),vN(511,`-`),ug(),Ac(512,`td`,22)(513,`em`)(514,`strong`),vN(515,`(opcional)`),ug()(),Ac(516,`p`),vN(517,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(518,`code`),vN(519,`setValue`),ug(),vN(520,`, `),Ac(521,`code`),vN(522,`patchValue`),ug(),vN(523,`, carregamento assíncrono).`),ug(),Ac(524,`p`),vN(525,`Diferentemente do `),Ac(526,`code`),vN(527,`p-change`),ug(),vN(528,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(529,`code`),vN(530,`p-change-model`),ug(),vN(531,` cobre todos os cenários de alteração de valor.`),ug(),Ac(532,`p`),vN(533,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(534,`tr`,14)(535,`td`,15)(536,`div`,23)(537,`span`,24),vN(538,` p-change-on-enter`),Kc(539,`br`),ug()()(),Ac(540,`td`,19)(541,`code`,26),vN(542,`boolean`),ug()(),Ac(543,`td`,21)(544,`p`)(545,`code`),vN(546,`false`),ug()()(),Ac(547,`td`,22)(548,`em`)(549,`strong`),vN(550,`(opcional)`),ug()(),Ac(551,`p`),vN(552,`Indica que o evento `),Ac(553,`code`),vN(554,`p-change`),ug(),vN(555,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.`),ug()()(),Ac(556,`tr`,14)(557,`td`,15)(558,`div`,23)(559,`span`,24),vN(560,` p-clean`),Kc(561,`br`),ug()()(),Ac(562,`td`,19)(563,`code`,26),vN(564,`boolean`),ug()(),Ac(565,`td`,21),vN(566,`-`),ug(),Ac(567,`td`,22)(568,`em`)(569,`strong`),vN(570,`(opcional)`),ug()(),Ac(571,`p`),vN(572,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ug()()(),Ac(573,`tr`,14)(574,`td`,15)(575,`div`,23)(576,`span`,24),vN(577,` p-compact-label`),Kc(578,`br`),ug()()(),Ac(579,`td`,19)(580,`code`,26),vN(581,`boolean`),ug()(),Ac(582,`td`,21)(583,`p`)(584,`code`),vN(585,`false`),ug()()(),Ac(586,`td`,22)(587,`em`)(588,`strong`),vN(589,`(opcional)`),ug()(),Ac(590,`p`),vN(591,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(592,`p`),vN(593,`Quando habilitado (`),Ac(594,`code`),vN(595,`true`),ug(),vN(596,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(597,`ul`)(598,`li`)(599,`code`),vN(600,`po-label`),ug()(),Ac(601,`li`)(602,`code`),vN(603,`p-requirement (showRequired)`),ug()(),Ac(604,`li`)(605,`code`),vN(606,`po-helper`),ug()()(),Ac(607,`p`),vN(608,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(609,`p`),vN(610,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(611,`ul`)(612,`li`)(613,`code`),vN(614,`--field-container-title-justify`),ug()(),Ac(615,`li`)(616,`code`),vN(617,`--field-container-title-flex`),ug()()(),Ac(618,`p`),vN(619,`Exemplo:`),ug(),Ac(620,`pre`)(621,`code`),vN(622,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(623,`p`),vN(624,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),vN(629,` p-debounce-time`),Kc(630,`br`),ug()()(),Ac(631,`td`,19)(632,`code`,27),vN(633,`number`),ug()(),Ac(634,`td`,21)(635,`p`)(636,`code`),vN(637,`400`),ug()()(),Ac(638,`td`,22)(639,`em`)(640,`strong`),vN(641,`(opcional)`),ug()(),Ac(642,`p`),vN(643,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Ac(644,`code`),vN(645,`p-filter-service`),ug(),vN(646,`).`),ug()()(),Ac(647,`tr`,14)(648,`td`,15)(649,`div`,23)(650,`span`,24),vN(651,` p-disabled`),Kc(652,`br`),ug()()(),Ac(653,`td`,19)(654,`code`,26),vN(655,`boolean`),ug()(),Ac(656,`td`,21)(657,`p`)(658,`code`),vN(659,`false`),ug()()(),Ac(660,`td`,22)(661,`em`)(662,`strong`),vN(663,`(opcional)`),ug()(),Ac(664,`p`),vN(665,`Indica que o campo será desabilitado.`),ug()()(),Ac(666,`tr`,14)(667,`td`,15)(668,`div`,23)(669,`span`,24),vN(670,` p-disabled-init-filter`),Kc(671,`br`),ug()()(),Ac(672,`td`,19)(673,`code`,26),vN(674,`boolean`),ug()(),Ac(675,`td`,21)(676,`p`)(677,`code`),vN(678,`false`),ug()()(),Ac(679,`td`,22)(680,`em`)(681,`strong`),vN(682,`(opcional)`),ug()(),Ac(683,`p`),vN(684,`Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.`),ug()()(),Ac(685,`tr`,14)(686,`td`,15)(687,`div`,23)(688,`span`,24),vN(689,` p-disabled-tab-filter`),Kc(690,`br`),ug()()(),Ac(691,`td`,19)(692,`code`,26),vN(693,`boolean`),ug()(),Ac(694,`td`,21)(695,`p`)(696,`code`),vN(697,`false`),ug()()(),Ac(698,`td`,22)(699,`em`)(700,`strong`),vN(701,`(opcional)`),ug()(),Ac(702,`p`),vN(703,`Se verdadeiro, desabilitará a busca de um item via TAB.`),ug()()(),Ac(704,`tr`,14)(705,`td`,15)(706,`div`,23)(707,`span`,24),vN(708,` p-emit-object-value`),Kc(709,`br`),ug()()(),Ac(710,`td`,19)(711,`code`,26),vN(712,`boolean`),ug()(),Ac(713,`td`,21)(714,`p`)(715,`code`),vN(716,`false`),ug()()(),Ac(717,`td`,22)(718,`em`)(719,`strong`),vN(720,`(opcional)`),ug()(),Ac(721,`p`),vN(722,`Se verdadeiro, o evento `),Ac(723,`code`),vN(724,`p-change`),ug(),vN(725,` receberá como argumento o `),Ac(726,`code`),vN(727,`PoComboOption`),ug(),vN(728,` referente à opção selecionada.`),ug()()(),Ac(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),vN(733,` p-error-limit`),Kc(734,`br`),ug()()(),Ac(735,`td`,19)(736,`code`,26),vN(737,`boolean`),ug()(),Ac(738,`td`,21)(739,`p`)(740,`code`),vN(741,`false`),ug()()(),Ac(742,`td`,22)(743,`em`)(744,`strong`),vN(745,`(opcional)`),ug()(),Ac(746,`p`),vN(747,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(748,`blockquote`)(749,`p`),vN(750,`Caso essa propriedade seja definida como `),Ac(751,`code`),vN(752,`true`),ug(),vN(753,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(754,`tr`,14)(755,`td`,15)(756,`div`,23)(757,`span`,24),vN(758,` p-field-error-message`),Kc(759,`br`),ug()()(),Ac(760,`td`,19)(761,`code`,25),vN(762,`string`),ug()(),Ac(763,`td`,21),vN(764,`-`),ug(),Ac(765,`td`,22)(766,`em`)(767,`strong`),vN(768,`(opcional)`),ug()(),Ac(769,`p`),vN(770,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(771,`blockquote`)(772,`p`),vN(773,`Necessário que a propriedade `),Ac(774,`code`),vN(775,`p-required`),ug(),vN(776,` esteja habilitada.`),ug()()()(),Ac(777,`tr`,14)(778,`td`,15)(779,`div`,23)(780,`span`,24),vN(781,` p-field-label`),Kc(782,`br`),ug()()(),Ac(783,`td`,19)(784,`code`,25),vN(785,`string`),ug()(),Ac(786,`td`,21)(787,`p`)(788,`code`),vN(789,`label`),ug()()(),Ac(790,`td`,22)(791,`em`)(792,`strong`),vN(793,`(opcional)`),ug()(),Ac(794,`p`),vN(795,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ac(796,`code`),vN(797,`p-options`),ug(),vN(798,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),ug(),Ac(799,`p`),vN(800,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),ug()()(),Ac(801,`tr`,14)(802,`td`,15)(803,`div`,23)(804,`span`,24),vN(805,` p-field-value`),Kc(806,`br`),ug()()(),Ac(807,`td`,19)(808,`code`,25),vN(809,`string`),ug()(),Ac(810,`td`,21)(811,`p`)(812,`code`),vN(813,`value`),ug()()(),Ac(814,`td`,22)(815,`em`)(816,`strong`),vN(817,`(opcional)`),ug()(),Ac(818,`p`),vN(819,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Ac(820,`code`),vN(821,`p-options`),ug(),vN(822,`), esta propriedade será responsável pelo valor de cada item da lista.`),ug(),Ac(823,`p`),vN(824,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),ug()()(),Ac(825,`tr`,14)(826,`td`,15)(827,`div`,23)(828,`span`,24),vN(829,` p-filter-minlength`),Kc(830,`br`),ug()()(),Ac(831,`td`,19)(832,`code`,27),vN(833,`number`),ug()(),Ac(834,`td`,21)(835,`p`)(836,`code`),vN(837,`0`),ug()()(),Ac(838,`td`,22)(839,`em`)(840,`strong`),vN(841,`(opcional)`),ug()(),Ac(842,`p`),vN(843,`Valor mínimo de caracteres para realizar o filtro no serviço.`),ug()()(),Ac(844,`tr`,14)(845,`td`,15)(846,`div`,23)(847,`span`,24),vN(848,` p-filter-mode`),Kc(849,`br`),ug()()(),Ac(850,`td`,19)(851,`code`,28),vN(852,`PoComboFilterMode`),ug()(),Ac(853,`td`,21)(854,`p`)(855,`code`),vN(856,`startsWith`),ug()()(),Ac(857,`td`,22)(858,`em`)(859,`strong`),vN(860,`(opcional)`),ug()(),Ac(861,`p`),vN(862,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Ac(863,`code`),vN(864,`startsWith`),ug(),vN(865,`, `),Ac(866,`code`),vN(867,`contains`),ug(),vN(868,` ou `),Ac(869,`code`),vN(870,`endsWith`),ug(),vN(871,`.`),ug(),Ac(872,`blockquote`)(873,`p`),vN(874,`Quando utilizar a propriedade `),Ac(875,`code`),vN(876,`p-filter-service`),ug(),vN(877,` esta propriedade será ignorada.`),ug()()()(),Ac(878,`tr`,14)(879,`td`,15)(880,`div`,23)(881,`span`,24),vN(882,` p-filter-params`),Kc(883,`br`),ug()()(),Ac(884,`td`,19)(885,`code`,29),vN(886,`any`),ug()(),Ac(887,`td`,21),vN(888,`-`),ug(),Ac(889,`td`,22)(890,`em`)(891,`strong`),vN(892,`(opcional)`),ug()(),Ac(893,`p`),vN(894,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Ac(895,`em`),vN(896,`PoComboFilter`),ug(),vN(897,`.`),ug(),Ac(898,`blockquote`)(899,`p`),vN(900,`Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.`),ug()()()(),Ac(901,`tr`,14)(902,`td`,15)(903,`div`,23)(904,`span`,24),vN(905,` p-filter-service`),Kc(906,`br`),ug()()(),Ac(907,`td`,19)(908,`code`,30),vN(909,`PoComboFilter `),ug(),Ac(910,`code`,25),vN(911,` string`),ug()(),Ac(912,`td`,21),vN(913,`-`),ug(),Ac(914,`td`,22)(915,`em`)(916,`strong`),vN(917,`(opcional)`),ug()(),Ac(918,`p`),vN(919,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),ug(),Ac(920,`p`),vN(921,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Ac(922,`code`),vN(923,`p-field-label`),ug(),vN(924,` e `),Ac(925,`code`),vN(926,`p-field-value`),ug(),vN(927,` para a construção da lista de itens.`),ug(),Ac(928,`p`),vN(929,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),ug(),Ac(930,`pre`)(931,`code`),vN(932,`url + ?filter=Peter
`),ug()(),Ac(933,`p`),vN(934,`Se for definida a propriedade `),Ac(935,`code`),vN(936,`p-filter-params`),ug(),vN(937,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Ac(938,`code`),vN(939,`{ age: 23 }`),ug(),vN(940,` a URL ficaria:`),ug(),Ac(941,`pre`)(942,`code`),vN(943,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),ug()()()(),Ac(944,`tr`,14)(945,`td`,15)(946,`div`,23)(947,`span`,24),vN(948,` p-help`),Kc(949,`br`),ug()()(),Ac(950,`td`,19)(951,`code`,25),vN(952,`string`),ug()(),Ac(953,`td`,21),vN(954,`-`),ug(),Ac(955,`td`,22)(956,`em`)(957,`strong`),vN(958,`(opcional)`),ug()(),Ac(959,`p`),vN(960,`Texto de apoio para o campo.`),ug()()(),Ac(961,`tr`,14)(962,`td`,15)(963,`div`,23)(964,`span`,24),vN(965,` p-icon`),Kc(966,`br`),ug()()(),Ac(967,`td`,19)(968,`code`,25),vN(969,`string `),ug(),Ac(970,`code`,31),vN(971,` TemplateRef<void>`),ug()(),Ac(972,`td`,21),vN(973,`-`),ug(),Ac(974,`td`,22)(975,`em`)(976,`strong`),vN(977,`(opcional)`),ug()(),Ac(978,`p`),vN(979,`Define o ícone que será exibido no início do campo.`),ug(),Ac(980,`p`),vN(981,`É possível usar qualquer um dos ícones da `),Ac(982,`a`,32),vN(983,`Biblioteca de ícones`),ug(),vN(984,`. conforme exemplo abaixo:`),ug(),Ac(985,`pre`)(986,`code`),vN(987,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),ug()(),Ac(988,`p`),vN(989,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(990,`em`),vN(991,`Font Awesome`),ug(),vN(992,`, da seguinte forma:`),ug(),Ac(993,`pre`)(994,`code`),vN(995,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),ug()(),Ac(996,`p`),vN(997,`Outra opção seria a customização do ícone através do `),Ac(998,`code`),vN(999,`TemplateRef`),ug(),vN(1e3,`, conforme exemplo abaixo:`),ug(),Ac(1001,`pre`)(1002,`code`),vN(1003,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(1004,`blockquote`)(1005,`p`),vN(1006,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(1007,`code`),vN(1008,`font-size: inherit`),ug(),vN(1009,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(1010,`tr`,14)(1011,`td`,15)(1012,`div`,23)(1013,`span`,24),vN(1014,` p-infinite-scroll`),Kc(1015,`br`),ug()()(),Ac(1016,`td`,19)(1017,`code`,26),vN(1018,`boolean`),ug()(),Ac(1019,`td`,21)(1020,`p`)(1021,`code`),vN(1022,`false`),ug()()(),Ac(1023,`td`,22)(1024,`em`)(1025,`strong`),vN(1026,`(opcional)`),ug()(),Ac(1027,`p`),vN(1028,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),ug()()(),Ac(1029,`tr`,14)(1030,`td`,15)(1031,`div`,23)(1032,`span`,24),vN(1033,` p-infinite-scroll-distance`),Kc(1034,`br`),ug()()(),Ac(1035,`td`,19)(1036,`code`,27),vN(1037,`number`),ug()(),Ac(1038,`td`,21),vN(1039,`-`),ug(),Ac(1040,`td`,22)(1041,`em`)(1042,`strong`),vN(1043,`(opcional)`),ug()(),Ac(1044,`p`),vN(1045,`Define o percentual necessário para disparar o evento `),Ac(1046,`code`),vN(1047,`show-more`),ug(),vN(1048,`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.`),ug(),Ac(1049,`p`)(1050,`strong`),vN(1051,`Exemplos`),ug()(),Ac(1052,`ul`)(1053,`li`),vN(1054,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `),Ac(1055,`code`),vN(1056,`show-more`),ug(),vN(1057,` será disparado.`),ug()()()(),Ac(1058,`tr`,14)(1059,`td`,15)(1060,`div`,16)(1061,`span`,17),vN(1062,` (p-input-change)`),Kc(1063,`br`),ug()()(),Ac(1064,`td`,19)(1065,`code`,20),vN(1066,`EventEmitter`),ug()(),Ac(1067,`td`,21),vN(1068,`-`),ug(),Ac(1069,`td`,22)(1070,`em`)(1071,`strong`),vN(1072,`(opcional)`),ug()(),Ac(1073,`p`),vN(1074,`Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.`),ug()()(),Ac(1075,`tr`,14)(1076,`td`,15)(1077,`div`,16)(1078,`span`,17),vN(1079,` (p-keydown)`),Kc(1080,`br`),ug()()(),Ac(1081,`td`,19)(1082,`code`,20),vN(1083,`EventEmitter`),ug()(),Ac(1084,`td`,21),vN(1085,`-`),ug(),Ac(1086,`td`,22)(1087,`em`)(1088,`strong`),vN(1089,`(opcional)`),ug()(),Ac(1090,`p`),vN(1091,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(1092,`code`),vN(1093,`KeyboardEvent`),ug(),vN(1094,` com informações sobre a tecla.`),ug()()(),Ac(1095,`tr`,14)(1096,`td`,15)(1097,`div`,23)(1098,`span`,24),vN(1099,` p-label`),Kc(1100,`br`),ug()()(),Ac(1101,`td`,19)(1102,`code`,25),vN(1103,`string`),ug()(),Ac(1104,`td`,21),vN(1105,`-`),ug(),Ac(1106,`td`,22)(1107,`em`)(1108,`strong`),vN(1109,`(opcional)`),ug()(),Ac(1110,`p`),vN(1111,`Label no componente.`),ug()()(),Ac(1112,`tr`,14)(1113,`td`,15)(1114,`div`,23)(1115,`span`,24),vN(1116,` p-label-text-wrap`),Kc(1117,`br`),ug()()(),Ac(1118,`td`,19)(1119,`code`,26),vN(1120,`boolean`),ug()(),Ac(1121,`td`,21)(1122,`p`)(1123,`code`),vN(1124,`false`),ug()()(),Ac(1125,`td`,22)(1126,`em`)(1127,`strong`),vN(1128,`(opcional)`),ug()(),Ac(1129,`p`),vN(1130,`Habilita a quebra automática do texto da propriedade `),Ac(1131,`code`),vN(1132,`p-label`),ug(),vN(1133,`. Quando `),Ac(1134,`code`),vN(1135,`p-label-text-wrap`),ug(),vN(1136,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(1137,`tr`,14)(1138,`td`,15)(1139,`div`,23)(1140,`span`,24),vN(1141,` p-listbox-control-position`),Kc(1142,`br`),ug()()(),Ac(1143,`td`,19)(1144,`code`,33),vN(1145,`'top' `),ug(),Ac(1146,`code`,34),vN(1147,` 'bottom'`),ug()(),Ac(1148,`td`,21)(1149,`p`)(1150,`code`),vN(1151,`bottom`),ug()()(),Ac(1152,`td`,22)(1153,`em`)(1154,`strong`),vN(1155,`(opcional)`),ug()(),Ac(1156,`p`),vN(1157,`Define a direção preferida para exibição do `),Ac(1158,`code`),vN(1159,`listbox`),ug(),vN(1160,` em relação ao campo (`),Ac(1161,`code`),vN(1162,`top`),ug(),vN(1163,` ou `),Ac(1164,`code`),vN(1165,`bottom`),ug(),vN(1166,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ug()()(),Ac(1167,`tr`,14)(1168,`td`,15)(1169,`div`,23)(1170,`span`,24),vN(1171,` p-literals`),Kc(1172,`br`),ug()()(),Ac(1173,`td`,19)(1174,`code`,35),vN(1175,`PoComboLiterals`),ug()(),Ac(1176,`td`,21),vN(1177,`-`),ug(),Ac(1178,`td`,22)(1179,`em`)(1180,`strong`),vN(1181,`(opcional)`),ug()(),Ac(1182,`p`),vN(1183,`Objeto com as literais usadas no `),Ac(1184,`code`),vN(1185,`po-combo`),ug(),vN(1186,`.`),ug(),Ac(1187,`p`),vN(1188,`Para utilizar basta passar a literal que deseja customizar:`),ug(),Ac(1189,`pre`)(1190,`code`),vN(1191,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),ug()(),Ac(1192,`p`),vN(1193,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),ug(),Ac(1194,`pre`)(1195,`code`),vN(1196,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),ug()(),Ac(1197,`blockquote`)(1198,`p`),vN(1199,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(1200,`a`,36)(1201,`code`),vN(1202,`PoI18nService`),ug()(),vN(1203,` ou do browser.`),ug()()()(),Ac(1204,`tr`,14)(1205,`td`,15)(1206,`div`,23)(1207,`span`,24),vN(1208,` p-loading`),Kc(1209,`br`),ug()()(),Ac(1210,`td`,19)(1211,`code`,26),vN(1212,`boolean`),ug()(),Ac(1213,`td`,21)(1214,`p`)(1215,`code`),vN(1216,`false`),ug()()(),Ac(1217,`td`,22)(1218,`em`)(1219,`strong`),vN(1220,`(opcional)`),ug()(),Ac(1221,`p`),vN(1222,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(1223,`tr`,14)(1224,`td`,15)(1225,`div`,23)(1226,`span`,24),vN(1227,` name`),Kc(1228,`br`),ug()()(),Ac(1229,`td`,19)(1230,`code`,25),vN(1231,`string`),ug()(),Ac(1232,`td`,21),vN(1233,`-`),ug(),Ac(1234,`td`,22)(1235,`p`),vN(1236,`Nome do componente.`),ug()()(),Ac(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),vN(1241,` (ngModelChange)`),Kc(1242,`br`),ug()()(),Ac(1243,`td`,19)(1244,`code`,20),vN(1245,`EventEmitter`),ug()(),Ac(1246,`td`,21),vN(1247,`-`),ug(),Ac(1248,`td`,22)(1249,`em`)(1250,`strong`),vN(1251,`(opcional)`),ug()(),Ac(1252,`p`),vN(1253,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),ug(),Ac(1254,`p`),vN(1255,`Na versão 12.2.0 do Angular a verificação `),Ac(1256,`code`),vN(1257,`strictTemplates`),ug(),vN(1258,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ug(),Ac(1259,`pre`)(1260,`code`),vN(1261,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),ug()()()(),Ac(1262,`tr`,14)(1263,`td`,15)(1264,`div`,23)(1265,`span`,24),vN(1266,` p-optional`),Kc(1267,`br`),ug()()(),Ac(1268,`td`,19)(1269,`code`,26),vN(1270,`boolean`),ug()(),Ac(1271,`td`,21)(1272,`p`)(1273,`code`),vN(1274,`false`),ug()()(),Ac(1275,`td`,22)(1276,`em`)(1277,`strong`),vN(1278,`(opcional)`),ug()(),Ac(1279,`p`),vN(1280,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(1281,`blockquote`)(1282,`p`),vN(1283,`Não será exibida a indicação se:`),ug()(),Ac(1284,`ul`)(1285,`li`),vN(1286,`O campo conter `),Ac(1287,`code`),vN(1288,`p-required`),ug(),vN(1289,`;`),ug(),Ac(1290,`li`),vN(1291,`Não possuir `),Ac(1292,`code`),vN(1293,`p-help`),ug(),vN(1294,` e/ou `),Ac(1295,`code`),vN(1296,`p-label`),ug(),vN(1297,`.`),ug()()()(),Ac(1298,`tr`,14)(1299,`td`,15)(1300,`div`,23)(1301,`span`,24),vN(1302,` p-options`),Kc(1303,`br`),ug()()(),Ac(1304,`td`,19)(1305,`code`,37),vN(1306,`Array<PoComboOption `),ug(),Ac(1307,`code`,38),vN(1308,` PoComboOptionGroup `),ug(),Ac(1309,`code`,39),vN(1310,` any>`),ug()(),Ac(1311,`td`,21),vN(1312,`-`),ug(),Ac(1313,`td`,22)(1314,`p`),vN(1315,`Nesta propriedade define a lista de opções do `),Ac(1316,`code`),vN(1317,`po-combo`),ug(),vN(1318,`.`),ug(),Ac(1319,`blockquote`)(1320,`p`),vN(1321,`A lista pode ser definida utilizando um array com o valor representando o `),Ac(1322,`code`),vN(1323,`value`),ug(),vN(1324,` e o `),Ac(1325,`code`),vN(1326,`label`),ug(),vN(1327,` das seguintes formas:`),ug()(),Ac(1328,`pre`)(1329,`code`),vN(1330,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),ug()(),Ac(1331,`pre`)(1332,`code`),vN(1333,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),ug()(),Ac(1334,`ul`)(1335,`li`),vN(1336,`Aconselha-se utilizar valores distintos no `),Ac(1337,`code`),vN(1338,`label`),ug(),vN(1339,` e `),Ac(1340,`code`),vN(1341,`value`),ug(),vN(1342,` dos itens.`),ug()()()(),Ac(1343,`tr`,14)(1344,`td`,15)(1345,`div`,23)(1346,`span`,24),vN(1347,` p-placeholder`),Kc(1348,`br`),ug()()(),Ac(1349,`td`,19)(1350,`code`,25),vN(1351,`string`),ug()(),Ac(1352,`td`,21),vN(1353,`-`),ug(),Ac(1354,`td`,22)(1355,`p`),vN(1356,`Mensagem apresentada enquanto o campo estiver vazio.`),ug()()(),Ac(1357,`tr`,14)(1358,`td`,15)(1359,`div`,23)(1360,`span`,24),vN(1361,` p-helper`),Kc(1362,`br`),ug()()(),Ac(1363,`td`,19)(1364,`code`,40),vN(1365,`PoHelperOptions `),ug(),Ac(1366,`code`,25),vN(1367,` string`),ug()(),Ac(1368,`td`,21),vN(1369,`-`),ug(),Ac(1370,`td`,22)(1371,`em`)(1372,`strong`),vN(1373,`(opcional)`),ug()(),Ac(1374,`p`),vN(1375,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1376,`code`),vN(1377,`p-label`),ug(),vN(1378,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1379,`code`),vN(1380,`p-label`),ug(),vN(1381,`.`),ug(),Ac(1382,`blockquote`)(1383,`p`),vN(1384,`Para mais informações acesse: `),Ac(1385,`a`,41),vN(1386,`https://po-ui.io/documentation/po-helper`),ug(),vN(1387,`.`),ug()(),Ac(1388,`blockquote`)(1389,`p`),vN(1390,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1391,`code`),vN(1392,`p-additional-help-tooltip`),ug(),vN(1393,` e `),Ac(1394,`code`),vN(1395,`p-additional-help`),ug(),vN(1396,`) será ignorado.`),ug()()()(),Ac(1397,`tr`,14)(1398,`td`,15)(1399,`div`,23)(1400,`span`,24),vN(1401,` p-remove-initial-filter`),Kc(1402,`br`),ug()()(),Ac(1403,`td`,19)(1404,`code`,26),vN(1405,`boolean`),ug()(),Ac(1406,`td`,21)(1407,`p`)(1408,`code`),vN(1409,`false`),ug()()(),Ac(1410,`td`,22)(1411,`em`)(1412,`strong`),vN(1413,`(opcional)`),ug()(),Ac(1414,`p`),vN(1415,`Define se o filtro inicial será removido no primeiro clique do campo.`),ug(),Ac(1416,`p`),vN(1417,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),ug()()(),Ac(1418,`tr`,14)(1419,`td`,15)(1420,`div`,23)(1421,`span`,24),vN(1422,` p-required`),Kc(1423,`br`),ug()()(),Ac(1424,`td`,19)(1425,`code`,26),vN(1426,`boolean`),ug()(),Ac(1427,`td`,21)(1428,`p`)(1429,`code`),vN(1430,`false`),ug()()(),Ac(1431,`td`,22)(1432,`em`)(1433,`strong`),vN(1434,`(opcional)`),ug()(),Ac(1435,`p`),vN(1436,`Define que o campo será obrigatório.`),ug()()(),Ac(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),vN(1441,` p-show-required`),Kc(1442,`br`),ug()()(),Ac(1443,`td`,19)(1444,`code`,26),vN(1445,`boolean`),ug()(),Ac(1446,`td`,21),vN(1447,`-`),ug(),Ac(1448,`td`,22)(1449,`p`),vN(1450,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1451,`blockquote`)(1452,`p`),vN(1453,`Não será exibida a indicação se:`),ug()(),Ac(1454,`ul`)(1455,`li`),vN(1456,`Não possuir `),Ac(1457,`code`),vN(1458,`p-help`),ug(),vN(1459,` e/ou `),Ac(1460,`code`),vN(1461,`p-label`),ug(),vN(1462,`.`),ug()()()(),Ac(1463,`tr`,14)(1464,`td`,15)(1465,`div`,23)(1466,`span`,24),vN(1467,` p-size`),Kc(1468,`br`),ug()()(),Ac(1469,`td`,19)(1470,`code`,25),vN(1471,`string`),ug()(),Ac(1472,`td`,21)(1473,`p`)(1474,`code`),vN(1475,`medium`),ug()()(),Ac(1476,`td`,22)(1477,`em`)(1478,`strong`),vN(1479,`(opcional)`),ug()(),Ac(1480,`p`),vN(1481,`Define o tamanho do componente:`),ug(),Ac(1482,`ul`)(1483,`li`)(1484,`code`),vN(1485,`small`),ug(),vN(1486,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1487,`li`)(1488,`code`),vN(1489,`medium`),ug(),vN(1490,`: altura do input como 44px.`),ug()(),Ac(1491,`blockquote`)(1492,`p`),vN(1493,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1494,`code`),vN(1495,`medium`),ug(),vN(1496,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1497,`a`,42),vN(1498,`po-theme`),ug(),vN(1499,`.`),ug()()()(),Ac(1500,`tr`,14)(1501,`td`,15)(1502,`div`,23)(1503,`span`,24),vN(1504,` p-sort`),Kc(1505,`br`),ug()()(),Ac(1506,`td`,19)(1507,`code`,26),vN(1508,`boolean`),ug()(),Ac(1509,`td`,21),vN(1510,`-`),ug(),Ac(1511,`td`,22)(1512,`p`),vN(1513,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),ug()()()(),Ac(1514,`h3`,10),vN(1515,`Métodos`),ug(),Ac(1516,`table`,43)(1517,`tr`,14)(1518,`th`,44)(1519,`div`,23)(1520,`h4`)(1521,`span`,24),vN(1522,` focus `),ug()()()()(),Ac(1523,`tr`,22)(1524,`td`,22)(1525,`p`),vN(1526,`Função que atribui foco ao componente.`),ug(),Ac(1527,`p`),vN(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1529,`pre`)(1530,`code`),vN(1531,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),ug()()()()(),Kc(1532,`br`),Ac(1533,`table`,43)(1534,`tr`,14)(1535,`th`,44)(1536,`div`,23)(1537,`h4`)(1538,`span`,24),vN(1539,` showAdditionalHelp `),ug()()()()(),Ac(1540,`tr`,22)(1541,`td`,22)(1542,`p`),vN(1543,`Método que exibe `),Ac(1544,`code`),vN(1545,`p-helper`),ug(),vN(1546,` ou executa a ação definida em `),Ac(1547,`code`),vN(1548,`p-helper{eventOnClick}`),ug(),vN(1549,` ou em `),Ac(1550,`code`),vN(1551,`p-additionalHelp`),ug(),vN(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1553,`code`),vN(1554,`p-keydown`),ug(),vN(1555,`.`),ug(),Ac(1556,`blockquote`)(1557,`p`),vN(1558,`Exibe ou oculta o conteúdo do componente `),Ac(1559,`code`),vN(1560,`po-helper`),ug(),vN(1561,` quando o componente estiver com foco.`),ug()(),Ac(1562,`pre`)(1563,`code`),vN(1564,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),ug()(),Ac(1565,`pre`)(1566,`code`),vN(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1568,`br`),Ac(1569,`h3`),vN(1570,`Interfaces`),ug(),Ac(1571,`h4`,45)(1572,`code`,5),vN(1573,`PoComboFilter`),ug()(),Ac(1574,`div`,2)(1575,`p`),vN(1576,`Interface para os serviços que serão utilizados no po-combo.`),ug()(),Ac(1577,`h4`,10),vN(1578,`Métodos`),ug(),Ac(1579,`table`,43)(1580,`tr`,14)(1581,`th`,44)(1582,`div`,23)(1583,`h4`)(1584,`span`,24),vN(1585,` getFilteredData `),ug()()()()(),Ac(1586,`tr`,22)(1587,`td`,22)(1588,`p`),vN(1589,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),ug()()()(),Ac(1590,`h5`)(1591,`b`),vN(1592,`Parâmetros`),ug()(),Ac(1593,`table`,11)(1594,`tr`,12)(1595,`th`,13),vN(1596,`Nome`),ug(),Ac(1597,`th`,13),vN(1598,`Tipo`),ug(),Ac(1599,`th`,13),vN(1600,`Descrição`),ug()(),Ac(1601,`tr`,14)(1602,`td`,15),vN(1603,` params`),ug(),Ac(1604,`td`,19)(1605,`code`,46),vN(1606,` any `),ug()(),Ac(1607,`td`,22)(1608,`p`),vN(1609,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),ug()()(),Ac(1610,`tr`,14)(1611,`td`,15),vN(1612,` filterParams`),ug(),Ac(1613,`td`,19)(1614,`code`,46),vN(1615,` any `),ug()(),Ac(1616,`td`,22)(1617,`p`),vN(1618,`Valor informado através da propriedade `),Ac(1619,`code`),vN(1620,`p-filter-params`),ug(),vN(1621,`.`),ug()()()(),Kc(1622,`br`),Ac(1623,`table`,43)(1624,`tr`,14)(1625,`th`,44)(1626,`div`,23)(1627,`h4`)(1628,`span`,24),vN(1629,` getObjectByValue `),ug()()()()(),Ac(1630,`tr`,22)(1631,`td`,22)(1632,`p`),vN(1633,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),ug()()()(),Ac(1634,`h5`)(1635,`b`),vN(1636,`Parâmetros`),ug()(),Ac(1637,`table`,11)(1638,`tr`,12)(1639,`th`,13),vN(1640,`Nome`),ug(),Ac(1641,`th`,13),vN(1642,`Tipo`),ug(),Ac(1643,`th`,13),vN(1644,`Descrição`),ug()(),Ac(1645,`tr`,14)(1646,`td`,15),vN(1647,` value`),ug(),Ac(1648,`td`,19)(1649,`code`,25),vN(1650,` string `),ug(),Ac(1651,`code`,27),vN(1652,` number `),ug()(),Ac(1653,`td`,22)(1654,`p`),vN(1655,`Valor responsável por realizar a busca de um único objeto.`),ug()()(),Ac(1656,`tr`,14)(1657,`td`,15),vN(1658,` filterParams`),ug(),Ac(1659,`td`,19)(1660,`code`,46),vN(1661,` any `),ug()(),Ac(1662,`td`,22)(1663,`p`),vN(1664,`Valor informado através da propriedade `),Ac(1665,`code`),vN(1666,`p-filter-params`),ug(),vN(1667,`.`),ug()()()(),Kc(1668,`br`),Ac(1669,`h4`,45)(1670,`code`,5),vN(1671,`PoComboLiterals`),ug()(),Ac(1672,`div`,2)(1673,`p`),vN(1674,`Interface para definição das literais usadas no `),Ac(1675,`code`),vN(1676,`po-combo`),ug(),vN(1677,`.`),ug()(),Ac(1678,`h4`,10),vN(1679,`Propriedades`),ug(),Ac(1680,`table`,11)(1681,`tr`,12)(1682,`th`,13),vN(1683,`Nome`),ug(),Ac(1684,`th`,13),vN(1685,`Tipo`),ug(),Ac(1686,`th`,13),vN(1687,`Descrição`),ug()(),Ac(1688,`tr`,14)(1689,`td`,15)(1690,`div`,23)(1691,`span`,24),vN(1692,` chooseOption`),Kc(1693,`br`),ug()()(),Ac(1694,`td`,19)(1695,`code`,25),vN(1696,`string`),ug()(),Ac(1697,`td`,22)(1698,`em`)(1699,`strong`),vN(1700,`(opcional)`),ug()(),Ac(1701,`p`),vN(1702,`Texto exibido quando o combo estiver vazio.`),ug()()(),Ac(1703,`tr`,14)(1704,`td`,15)(1705,`div`,23)(1706,`span`,24),vN(1707,` clean`),Kc(1708,`br`),ug()()(),Ac(1709,`td`,19)(1710,`code`,25),vN(1711,`string`),ug()(),Ac(1712,`td`,22)(1713,`em`)(1714,`strong`),vN(1715,`(opcional)`),ug()(),Ac(1716,`p`),vN(1717,`Texto do aria-label do botão de limpar`),ug()()(),Ac(1718,`tr`,14)(1719,`td`,15)(1720,`div`,23)(1721,`span`,24),vN(1722,` noData`),Kc(1723,`br`),ug()()(),Ac(1724,`td`,19)(1725,`code`,25),vN(1726,`string`),ug()(),Ac(1727,`td`,22)(1728,`em`)(1729,`strong`),vN(1730,`(opcional)`),ug()(),Ac(1731,`p`),vN(1732,`Texto exibido quando não houver itens na lista ou se, a pesquisa do filtro não retornar nenhum item.`),ug()()()(),Ac(1733,`h4`,45)(1734,`code`,5),vN(1735,`PoComboOptionGroup`),ug()(),Ac(1736,`div`,2)(1737,`p`),vN(1738,`Interface dos agrupamentos da coleção que será exibida no dropdown do `),Ac(1739,`code`),vN(1740,`po-combo`),ug(),vN(1741,`.`),ug()(),Ac(1742,`h4`,10),vN(1743,`Propriedades`),ug(),Ac(1744,`table`,11)(1745,`tr`,12)(1746,`th`,13),vN(1747,`Nome`),ug(),Ac(1748,`th`,13),vN(1749,`Tipo`),ug(),Ac(1750,`th`,13),vN(1751,`Descrição`),ug()(),Ac(1752,`tr`,14)(1753,`td`,15)(1754,`div`,23)(1755,`span`,24),vN(1756,` label`),Kc(1757,`br`),ug()()(),Ac(1758,`td`,19)(1759,`code`,25),vN(1760,`string`),ug()(),Ac(1761,`td`,22)(1762,`p`),vN(1763,`Título para cada grupo de opções.`),ug(),Ac(1764,`p`),vN(1765,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),ug()()(),Ac(1766,`tr`,14)(1767,`td`,15)(1768,`div`,23)(1769,`span`,24),vN(1770,` options`),Kc(1771,`br`),ug()()(),Ac(1772,`td`,19)(1773,`code`,47),vN(1774,`Array<PoComboOption>`),ug()(),Ac(1775,`td`,22)(1776,`p`),vN(1777,`Lista de itens a serem exibidos.`),ug()()()(),Ac(1778,`h4`,45)(1779,`code`,5),vN(1780,`PoComboOption`),ug()(),Ac(1781,`div`,2)(1782,`p`),vN(1783,`Interface que define as opções que serão exibidas na lista do `),Ac(1784,`code`),vN(1785,`po-combo`),ug(),vN(1786,`.`),ug()(),Ac(1787,`h4`,10),vN(1788,`Propriedades`),ug(),Ac(1789,`table`,11)(1790,`tr`,12)(1791,`th`,13),vN(1792,`Nome`),ug(),Ac(1793,`th`,13),vN(1794,`Tipo`),ug(),Ac(1795,`th`,13),vN(1796,`Descrição`),ug()(),Ac(1797,`tr`,14)(1798,`td`,15)(1799,`div`,23)(1800,`span`,24),vN(1801,` label`),Kc(1802,`br`),ug()()(),Ac(1803,`td`,19)(1804,`code`,25),vN(1805,`string`),ug()(),Ac(1806,`td`,22)(1807,`em`)(1808,`strong`),vN(1809,`(opcional)`),ug()(),Ac(1810,`p`),vN(1811,`Descrição exibida nas opções da lista.`),ug(),Ac(1812,`blockquote`)(1813,`p`),vN(1814,`Caso não seja definida será assumido o valor definido na propriedade `),Ac(1815,`code`),vN(1816,`value`),ug(),vN(1817,`.`),ug()()()(),Ac(1818,`tr`,14)(1819,`td`,15)(1820,`div`,23)(1821,`span`,24),vN(1822,` value`),Kc(1823,`br`),ug()()(),Ac(1824,`td`,19)(1825,`code`,25),vN(1826,`string `),ug(),Ac(1827,`code`,27),vN(1828,` number`),ug()(),Ac(1829,`td`,22)(1830,`p`),vN(1831,`Valor do objeto que será atribuído ao `),Ac(1832,`em`),vN(1833,`model`),ug(),vN(1834,`.`),ug()()()(),Ac(1835,`h3`),vN(1836,`Enums`),ug(),Ac(1837,`h4`,4)(1838,`code`,5),vN(1839,`PoComboFilterMode`),ug()(),Ac(1840,`div`,2)(1841,`p`),vN(1842,`Define o tipo de busca usado no po-combo.`),ug()(),Ac(1843,`h4`,10),vN(1844,`Propriedades`),ug(),Ac(1845,`table`,11)(1846,`tr`,12)(1847,`th`,13),vN(1848,`Nome`),ug(),Ac(1849,`th`,13),vN(1850,`Descrição`),ug()(),Ac(1851,`tr`,14)(1852,`td`,15)(1853,`div`,23)(1854,`span`,24),vN(1855,` startsWith`),Kc(1856,`br`),ug()()(),Ac(1857,`td`,22)(1858,`p`),vN(1859,`Verifica se o texto `),Ac(1860,`em`),vN(1861,`inicia`),ug(),vN(1862,` com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado.`),ug()()(),Ac(1863,`tr`,14)(1864,`td`,15)(1865,`div`,23)(1866,`span`,24),vN(1867,` contains`),Kc(1868,`br`),ug()()(),Ac(1869,`td`,22)(1870,`p`),vN(1871,`Verifica se o texto `),Ac(1872,`em`),vN(1873,`contém`),ug(),vN(1874,` o valor pesquisado.`),ug()()(),Ac(1875,`tr`,14)(1876,`td`,15)(1877,`div`,23)(1878,`span`,24),vN(1879,` endsWith`),Kc(1880,`br`),ug()()(),Ac(1881,`td`,22)(1882,`p`),vN(1883,`Verifica se o texto `),Ac(1884,`em`),vN(1885,`finaliza`),ug(),vN(1886,` com o valor pesquisado.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var zt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:13,vars:4,consts:[[`p-title`,`Combo`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-combo-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-combo-basic-view`)(6,`sample-po-combo-labs-view`)(7,`sample-po-combo-scheduling-view`)(8,`sample-po-combo-transfer-view`)(9,`sample-po-combo-heroes-view`)(10,`sample-po-combo-heroes-reactive-form-view`)(11,`sample-po-combo-infinity-scroll-view`)(12,`sample-po-combo-hotels-view`),ug()()()),p&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})()}];var it=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(zt),kL]})}return a})();var cn=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,it]})}return a})();export{cn as DocPoComboModule};