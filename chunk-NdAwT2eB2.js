import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,En as w4,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,In as zye,Ji as mY,Jn as Ce,Ki as lo,Kn as Bx,Li as ht$1,Ni as gY,Nn as z0e,Nr as PO,Ot as Zt,Pi as hN,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,U as L0e,Ui as l0,Un as BO,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,_r as Ky,aa as uN,ai as _N,an as l0e,ba as yw,ca as um,cr as GO,dr as I,ei as Yl,er as EN,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,la as uo,li as _x,lr as Gl,mr as JE,nn as j4,nt as O8e,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,sr as Fx,tr as EY,tt as O4,ui as a0,ut as S8e,va as yY,wn as vr,wr as MN,xr as Lk,yi as cN,yn as ube,zi as jk,zr as SN}from"./main-3EWTGE7T.js";var at=()=>({value:`Option 1`});var lt=()=>({value:`Option 2`});var rt=(a,q)=>[a,q];var Ae=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`combo`,`p-label`,`PO Combo`,3,`p-options`]],template:function(p,n){p&1&&Gl(0,`po-combo`,0),p&2&&nw(`p-options`,EN(3,rt,_N(1,at),_N(2,lt)))},dependencies:[O4],encapsulation:2,changeDetection:1})}return a})();var mt=a=>({"docs-sample-code-tabs":a});var Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo Basic`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-basic/sample-po-combo-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-basic/sample-po-combo-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-combo-basic`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,mt,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ae],encapsulation:2,changeDetection:1})}return a})();var Ge=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition=`bottom`;filterModeOptions=[{label:`Starts With`,value:`startsWith`},{label:`Contains`,value:`contains`},{label:`Ends With`,value:`endsWith`}];listboxPositionOptions=[{label:`top`,value:`top`},{label:`bottom`,value:`bottom`}];iconsOptions=[{label:`an an-building-apartment`,value:`an an-building-apartment`},{label:`an an-gas-pump`,value:`an an-gas-pump`},{label:`fa fa-calculator`,value:`fa fa-calculator`}];propertiesOptions=[{value:`changeOnEnter`,label:`Change On Enter`},{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`disabledInitFilter`,label:`Disabled Init Filter`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`sort`,label:`Sort`},{value:`clean`,label:`Clean`},{value:`disabledTabFilter`,label:`Disabled Tab Filter`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(m){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText=``,this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event=``,this.debounceTime=void 0,this.fieldLabel=``,this.fieldValue=``,this.filterMinlength=void 0,this.filterService=``,this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals=``,this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder=``,this.properties=[],this.fieldErrorMessage=``,this.selectedOptionsGroup=void 0,this.size=`medium`}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}]}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Ce=>Ce.label===n&&`options`in Ce);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return[...m,{label:d,value:c}]}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-labs`]],standalone:!1,decls:44,vars:62,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`combo`,1,`po-md-12`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-change-on-enter`,`p-clean`,`p-debounce-time`,`p-disabled`,`p-disabled-init-filter`,`p-disabled-tab-filter`,`p-field-label`,`p-field-value`,`p-filter-minlength`,`p-filter-mode`,`p-filter-service`,`p-help`,`p-icon`,`p-label`,`p-literals`,`p-loading`,`p-optional`,`p-options`,`p-placeholder`,`p-required`,`p-field-error-message`,`p-show-required`,`p-sort`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`,`p-listbox-control-position`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`p-label`,`Po combo options group`],[`name`,`comboOptionGroupSwitch`,`p-label`,`Combo options group`,1,`po-lg-4`,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`selectedsOptionsGroup`,`p-label`,`Options group list`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`,`p-options`],[`name`,`optionsGroup`,`p-label`,`New Options Group`,`p-required`,``,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Po combo options`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterMode`,`p-columns`,`4`,`p-label`,`Filter Mode`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`listboxPosition`,`p-label`,`Listbox Position`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`filterService`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Filter Service`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"noData": "Sem dados a serem exibidos"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`fieldValue`,`p-clean`,``,`p-label`,`Field Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldLabel`,`p-clean`,``,`p-label`,`Field Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`debounceTime`,`p-clean`,``,`p-label`,`Debounce Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`filterMinlength`,`p-clean`,``,`p-label`,`Filter Min Length`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let d=Ax();Tl(0,`po-combo`,2),ww(`ngModelChange`,function(i){return Ky(d),uN(n.combo,i)||(n.combo=i),Xy(i)}),ht$1(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,3),Gl(3,`po-info`,4)(4,`po-info`,5),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0),Gl(8,`po-divider`,6),Tl(9,`div`,3)(10,`po-switch`,7),ww(`ngModelChange`,function(i){return Ky(d),uN(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),Xy(i)}),ag(),a0(),Tl(11,`po-select`,8),ww(`ngModelChange`,function(i){return Ky(d),uN(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),Xy(i)}),ht$1(`p-change`,function(){return n.optionsGroupSelection()}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(i){return Ky(d),uN(n.optionsGroup,i)||(n.optionsGroup=i),Xy(i)}),ag(),a0(),ag(),Gl(13,`po-divider`,10),Tl(14,`div`,3)(15,`po-input`,11),ww(`ngModelChange`,function(i){return Ky(d),uN(n.option.label,i)||(n.option.label=i),Xy(i)}),ag(),a0(),Tl(16,`po-input`,12),ww(`ngModelChange`,function(i){return Ky(d),uN(n.option.value,i)||(n.option.value=i),Xy(i)}),ag(),a0(),ag(),Tl(17,`div`,3)(18,`po-button`,13),ht$1(`p-click`,function(){return n.addOption()}),ag()()(),Gl(19,`po-divider`),Tl(20,`form`,null,1)(22,`po-input`,14),ww(`ngModelChange`,function(i){return Ky(d),uN(n.label,i)||(n.label=i),Xy(i)}),ag(),a0(),Tl(23,`po-input`,15),ww(`ngModelChange`,function(i){return Ky(d),uN(n.help,i)||(n.help=i),Xy(i)}),ag(),a0(),Tl(24,`po-input`,16),ww(`ngModelChange`,function(i){return Ky(d),uN(n.helperText,i)||(n.helperText=i),Xy(i)}),ag(),a0(),Tl(25,`po-input`,17),ww(`ngModelChange`,function(i){return Ky(d),uN(n.placeholder,i)||(n.placeholder=i),Xy(i)}),ag(),a0(),Tl(26,`po-input`,18),ww(`ngModelChange`,function(i){return Ky(d),uN(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),Xy(i)}),ag(),a0(),Tl(27,`div`,3)(28,`po-checkbox-group`,19),ww(`ngModelChange`,function(i){return Ky(d),uN(n.properties,i)||(n.properties=i),Xy(i)}),ag(),a0(),Tl(29,`po-radio-group`,20),ww(`ngModelChange`,function(i){return Ky(d),uN(n.icon,i)||(n.icon=i),Xy(i)}),ag(),a0(),Tl(30,`po-radio-group`,21),ww(`ngModelChange`,function(i){return Ky(d),uN(n.filterMode,i)||(n.filterMode=i),Xy(i)}),ag(),a0(),Tl(31,`po-radio-group`,22),ww(`ngModelChange`,function(i){return Ky(d),uN(n.size,i)||(n.size=i),Xy(i)}),ag(),a0(),Tl(32,`po-radio-group`,23),ww(`ngModelChange`,function(i){return Ky(d),uN(n.listboxPosition,i)||(n.listboxPosition=i),Xy(i)}),ag(),a0(),ag(),Tl(33,`div`,3)(34,`po-input`,24),ww(`ngModelChange`,function(i){return Ky(d),uN(n.filterService,i)||(n.filterService=i),Xy(i)}),ag(),a0(),Tl(35,`po-input`,25),ww(`ngModelChange`,function(i){return Ky(d),uN(n.literals,i)||(n.literals=i),Xy(i)}),ht$1(`p-change`,function(){return n.changeLiterals()}),ag(),a0(),ag(),Tl(36,`div`,3)(37,`po-input`,26),ww(`ngModelChange`,function(i){return Ky(d),uN(n.fieldValue,i)||(n.fieldValue=i),Xy(i)}),ag(),a0(),Tl(38,`po-input`,27),ww(`ngModelChange`,function(i){return Ky(d),uN(n.fieldLabel,i)||(n.fieldLabel=i),Xy(i)}),ag(),a0(),ag(),Tl(39,`div`,3)(40,`po-number`,28),ww(`ngModelChange`,function(i){return Ky(d),uN(n.debounceTime,i)||(n.debounceTime=i),Xy(i)}),ag(),a0(),Tl(41,`po-number`,29),ww(`ngModelChange`,function(i){return Ky(d),uN(n.filterMinlength,i)||(n.filterMinlength=i),Xy(i)}),ag(),a0(),ag(),Tl(42,`div`,3)(43,`po-button`,30),ht$1(`p-click`,function(){return n.restore()}),ag()()()}if(p&2){let d=Bx(7);Ew(`ngModel`,n.combo),nw(`p-helper`,n.helperText)(`p-change-on-enter`,n.properties.includes(`changeOnEnter`))(`p-clean`,n.properties.includes(`clean`))(`p-debounce-time`,n.debounceTime)(`p-disabled`,n.properties.includes(`disabled`))(`p-disabled-init-filter`,n.properties.includes(`disableInitFilter`))(`p-disabled-tab-filter`,n.properties.includes(`disabledTabFilter`))(`p-field-label`,n.fieldLabel)(`p-field-value`,n.fieldValue)(`p-filter-minlength`,n.filterMinlength)(`p-filter-mode`,n.filterMode)(`p-filter-service`,n.filterService)(`p-help`,n.help)(`p-icon`,n.icon)(`p-label`,n.label)(`p-literals`,n.customLiterals)(`p-loading`,n.properties.includes(`loading`))(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-placeholder`,n.placeholder)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-sort`,n.properties.includes(`sort`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-listbox-control-position`,n.listboxPosition),l0(),jp(3),nw(`p-value`,n.combo),jp(),nw(`p-value`,n.event),jp(6),Ew(`ngModel`,n.comboOptionGroupSwitch),l0(),jp(),Ew(`ngModel`,n.selectedOptionsGroup),nw(`p-disabled`,!n.comboOptionGroupSwitch)(`p-options`,n.optionsGroupList),l0(),jp(),Ew(`ngModel`,n.optionsGroup),nw(`p-disabled`,!n.comboOptionGroupSwitch),l0(),jp(3),Ew(`ngModel`,n.option.label),l0(),jp(),Ew(`ngModel`,n.option.value),l0(),jp(2),nw(`p-disabled`,d.form.invalid),jp(4),Ew(`ngModel`,n.label),l0(),jp(),Ew(`ngModel`,n.help),l0(),jp(),Ew(`ngModel`,n.helperText),l0(),jp(),Ew(`ngModel`,n.placeholder),l0(),jp(),Ew(`ngModel`,n.fieldErrorMessage),l0(),jp(2),Ew(`ngModel`,n.properties),nw(`p-options`,n.propertiesOptions),l0(),jp(),Ew(`ngModel`,n.icon),nw(`p-options`,n.iconsOptions),l0(),jp(),Ew(`ngModel`,n.filterMode),nw(`p-options`,n.filterModeOptions),l0(),jp(),Ew(`ngModel`,n.size),nw(`p-options`,n.sizeOptions),l0(),jp(),Ew(`ngModel`,n.listboxPosition),nw(`p-options`,n.listboxPositionOptions),l0(),jp(2),Ew(`ngModel`,n.filterService),l0(),jp(),Ew(`ngModel`,n.literals),l0(),jp(2),Ew(`ngModel`,n.fieldValue),l0(),jp(),Ew(`ngModel`,n.fieldLabel),l0(),jp(2),Ew(`ngModel`,n.debounceTime),l0(),jp(),Ew(`ngModel`,n.filterMinlength),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,O4,iU,ube,L0e,fbe,j4,ybe],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo Labs`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-labs/sample-po-combo-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-combo
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-labs/sample-po-combo-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-combo-labs`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ct,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ge],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{getcities(){return[{label:`São Paulo`,options:[{label:`São Paulo`,value:`sao paulo`},{label:`Campinas`,value:`campinas`}]},{label:`Paraná`,options:[{label:`São José dos Pinhais`,value:`sao jose dos pinhais`},{label:`Londrina`,value:`londrina`},{label:`Maringá`,value:`maringa`}]},{label:`Santa Catarina`,options:[{label:`Joinville`,value:`joinville`},{label:`Florianópolis`,value:`florianopolis`},{label:`Itajaí`,value:`itajai`}]}]}getMedicalSpecialty(){return[{specialty:`Allergist`,specialtyValue:`allergist`},{specialty:`Cardiologist`,specialtyValue:`cardiologist`},{specialty:`General practitioner`,specialtyValue:`generalPractitioner`},{specialty:`Dermatologist`,specialtyValue:`dermatologist`},{specialty:`Gynecologist`,specialtyValue:`gynecologist`},{specialty:`Nutritionist`,specialtyValue:`nutritionist`},{specialty:`Pediatrist`,specialtyValue:`pediatrist`},{specialty:`Psychiatrist`,specialtyValue:`psychiatrist`},{specialty:`Orthopaedist`,specialtyValue:`orthopaedist`}]}static ɵfac=function(p){return new(p||a)};static ɵprov=I({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var bt=[`schedulingForm`];function gt(a,q){if(a&1&&(Tl(0,`div`,3),Gl(1,`po-avatar`,15),Tl(2,`p`,14),cN(3),ag()()),a&2){let m=Fx().$implicit,p=Fx();jp(),nw(`p-src`,p.getStateByLabel(m.label)),jp(2),yw(m.label)}}function ht(a,q){if(a&1&&(Tl(0,`div`,14),cN(1),ag()),a&2){let m=Fx().$implicit;jp(),yw(m.label)}}function St(a,q){if(a&1&&_x(0,gt,4,2,`div`,3)(1,ht,2,1,`div`,14),a&2){let m=q.$implicit;Dx(m.options?0:1)}}var ze=(()=>{class a{poNotification=f(Eu);schedulingService=f(fe);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:`Particular`,value:`particular`},{label:`Health Insurance`,value:`healthInsurance`}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(m=``){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(m){return`https://thf.totvs.com.br/sample/api/static/assets/${{"São Paulo":`sp`,"Santa Catarina":`sc`,Paraná:`pr`}[m]}.png`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-scheduling`]],viewQuery:function(p,n){if(p&1&&Yl(bt,7),p&2){let d;lo(d=uo())&&(n.form=d.first)}},standalone:!1,features:[Ce([fe])],decls:20,vars:12,consts:[[`schedulingForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-placeholder`,`example@domain.com`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-clean`,``,`p-label`,`Birthday`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-clean`,``,`p-label`,`Phone number`,`p-mask`,`(99) 99999-9999`,`p-placeholder`,`(99) 99999-9999`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-icon`,`an an-map-trifold`,`p-label`,`Select a location`,`p-placeholder`,`Select a location`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-combo-option-template`,``],[`name`,`typeScheduling`,`p-label`,`Type scheduling`,`p-required`,``,`p-sort`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`medicalSpecialty`,`p-icon`,`an an-flask`,`p-label`,`Medical Specialty/Exam`,`p-required`,``,`p-sort`,``,`p-field-label`,`specialty`,`p-field-value`,`specialtyValue`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`informations`,`p-help`,`Additional informations`,`p-label`,`Informations`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Schedule`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[`p-size`,`xs`,1,`po-sm-2`,`po-md-3`,`po-lg-1`,`sample-combo-avatar-bg`,3,`p-src`]],template:function(p,n){if(p&1){let d=Ax();Tl(0,`div`,1)(1,`div`,2),cN(2,`Pre-appointment scheduling`),ag()(),Tl(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),ww(`ngModelChange`,function(i){return Ky(d),uN(n.name,i)||(n.name=i),Xy(i)}),ag(),a0(),Tl(7,`po-email`,5),ww(`ngModelChange`,function(i){return Ky(d),uN(n.email,i)||(n.email=i),Xy(i)}),ag(),a0(),ag(),Tl(8,`div`,3)(9,`po-datepicker`,6),ww(`ngModelChange`,function(i){return Ky(d),uN(n.birthday,i)||(n.birthday=i),Xy(i)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(i){return Ky(d),uN(n.phone,i)||(n.phone=i),Xy(i)}),ag(),a0(),ag(),Tl(11,`div`,3)(12,`po-combo`,8),ww(`ngModelChange`,function(i){return Ky(d),uN(n.city,i)||(n.city=i),Xy(i)}),JE(13,St,2,1,`ng-template`,9),ag(),a0(),Tl(14,`po-select`,10),ww(`ngModelChange`,function(i){return Ky(d),uN(n.typeScheduling,i)||(n.typeScheduling=i),Xy(i)}),ag(),a0(),Tl(15,`po-combo`,11),ww(`ngModelChange`,function(i){return Ky(d),uN(n.medicalSpecialty,i)||(n.medicalSpecialty=i),Xy(i)}),ag(),a0(),ag(),Tl(16,`div`,3)(17,`po-textarea`,12),ww(`ngModelChange`,function(i){return Ky(d),uN(n.informations,i)||(n.informations=i),Xy(i)}),ag(),a0(),ag(),Tl(18,`div`,3)(19,`po-button`,13),ht$1(`p-click`,function(){return n.confirmPreAppointment(n.name)}),ag()()()}if(p&2){let d=Bx(4);jp(6),Ew(`ngModel`,n.name),l0(),jp(),Ew(`ngModel`,n.email),l0(),jp(2),Ew(`ngModel`,n.birthday),l0(),jp(),Ew(`ngModel`,n.phone),l0(),jp(2),Ew(`ngModel`,n.city),nw(`p-options`,n.citiesOptions),l0(),jp(2),Ew(`ngModel`,n.typeScheduling),nw(`p-options`,n.typeSchedulings),l0(),jp(),Ew(`ngModel`,n.medicalSpecialty),nw(`p-options`,n.medicalSpecialtyOptions),l0(),jp(2),Ew(`ngModel`,n.informations),l0(),jp(2),nw(`p-disabled`,d.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,w4,Zt,O4,l0e,z0e,qH,iU,fbe,vbe],styles:[`.sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}`],changeDetection:1})}return a})();var ft=a=>({"docs-sample-code-tabs":a});var Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-scheduling-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo - Scheduling`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-text-center">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()(),Tl(25,`po-tab`,10)(26,`div`)(27,`label`,6),cN(28,`sample-po-combo-scheduling/sample-po-combo-scheduling.component.css`),ag(),Tl(29,`pre`,11),cN(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),ag()()()()(),Tl(31,`div`,12),Gl(32,`sample-po-combo-scheduling`),ag(),Gl(33,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ft,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ze],encapsulation:2,changeDetection:1})}return a})();var vt=[`transferForm`];function xt(a,q){if(a&1&&(Tl(0,`div`,3),Gl(1,`po-avatar`,15),Tl(2,`div`,16)(3,`div`,17),cN(4),ag(),Tl(5,`div`,18),cN(6),ag()()()),a&2){let m=q.$implicit;jp(4),yw(m.label),jp(2),hg(`Account: `,m.value)}}var Ue=(()=>{class a{poNotification=f(Eu);form;poModal;contact;dateTransfer=new Date;typeAccount=`Checking Account`;value;cancelAction={label:`Cancel`,action:()=>this.poModal.close()};confirmAction={label:`Confirm`,action:()=>this.confirmTransfer()};typeAccounts=[{label:`Checking Account`,value:`Checking Account`},{label:`Savings Account`,value:`Savings Account`}];confirmTransfer(){this.poModal.close(),this.poNotification.success(`Successful Transfer`),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:`Checking Account`})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-transfer`]],viewQuery:function(p,n){if(p&1&&Yl(vt,7)(vr,7),p&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:15,consts:[[`transferForm`,`ngForm`],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`typeAccount`,`p-label`,`From`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`contact`,`p-field-value`,`id`,`p-field-label`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-icon`,`an an-user`,`p-label`,`To contact`,`p-placeholder`,`Select a contact`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-combo-option-template`,``],[`name`,`value`,`p-clean`,``,`p-label`,`Value to transfer`,`p-placeholder`,`R$ 0,00`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`dateTransfer`,`p-label`,`Date to transfer`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Transfer`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Do you confirm transfer?`,3,`p-primary-action`,`p-secondary-action`],[`p-label`,`From`,1,`po-md-6`,3,`p-value`],[`p-label`,`To`,1,`po-md-6`,3,`p-value`],[`p-label`,`Value`,1,`po-md-6`,3,`p-value`],[`p-label`,`Date to transfer`,1,`po-md-6`,3,`p-value`],[`p-size`,`sm`,1,`po-sm-2`,`po-md-3`,`po-lg-1`],[1,`po-sm-10`,`po-md-9`,`po-lg-11`],[1,`po-font-text-large-bold`],[1,`po-font-text-smaller`]],template:function(p,n){if(p&1){let d=Ax();Tl(0,`div`,1)(1,`div`,2),cN(2,`Banking Transfer`),ag()(),Tl(3,`form`,null,0)(5,`div`,3)(6,`po-select`,4),ww(`ngModelChange`,function(i){return Ky(d),uN(n.typeAccount,i)||(n.typeAccount=i),Xy(i)}),ag(),a0(),Tl(7,`po-combo`,5),ww(`ngModelChange`,function(i){return Ky(d),uN(n.contact,i)||(n.contact=i),Xy(i)}),JE(8,xt,7,2,`ng-template`,6),ag(),a0(),ag(),Tl(9,`div`,3)(10,`po-decimal`,7),ww(`ngModelChange`,function(i){return Ky(d),uN(n.value,i)||(n.value=i),Xy(i)}),ag(),a0(),Tl(11,`po-datepicker`,8),ww(`ngModelChange`,function(i){return Ky(d),uN(n.dateTransfer,i)||(n.dateTransfer=i),Xy(i)}),ag(),a0(),ag(),Tl(12,`div`,3)(13,`po-button`,9),ht$1(`p-click`,function(){return n.transfer()}),ag()()(),Tl(14,`po-modal`,10)(15,`div`,3),Gl(16,`po-info`,11)(17,`po-info`,12),ag(),Gl(18,`po-divider`),Tl(19,`div`,3),Gl(20,`po-info`,13)(21,`po-info`,14),SN(22,`date`),ag()()}if(p&2){let d=Bx(4);jp(6),Ew(`ngModel`,n.typeAccount),nw(`p-options`,n.typeAccounts),l0(),jp(),Ew(`ngModel`,n.contact),l0(),jp(3),Ew(`ngModel`,n.value),l0(),jp(),Ew(`ngModel`,n.dateTransfer),l0(),jp(2),nw(`p-disabled`,d.invalid),jp(),nw(`p-primary-action`,n.confirmAction)(`p-secondary-action`,n.cancelAction),jp(2),nw(`p-value`,n.typeAccount),jp(),nw(`p-value`,n.contact),jp(3),nw(`p-value`,n.value),jp(),nw(`p-value`,hN(MN(22,13,n.dateTransfer)))}},dependencies:[yY,gY,mY,Ak,Tk,w4,Zt,Xy$1,O4,l0e,z0e,zye,fbe,ybe,vr,GO],encapsulation:2,changeDetection:1})}return a})();var _t=a=>({"docs-sample-code-tabs":a});var Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-transfer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo - Banking Transfer`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-transfer/sample-po-combo-transfer.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-text-center">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-transfer/sample-po-combo-transfer.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-combo-transfer`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_t,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ue],encapsulation:2,changeDetection:1})}return a})();function Pt(a,q){if(a&1&&(Tl(0,`div`,0),Gl(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),ag()),a&2){let m=q;jp(),nw(`p-value`,m.name),jp(),nw(`p-value`,m.nickname),jp(),nw(`p-value`,m.email)}}var Ke=(()=>{class a{http=f(ob);hero$;heroName;get knowMoreLabel(){return this.heroName?`Know more`:void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[`name`,`heroName`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Tl(0,`div`,0)(1,`po-widget`,1),ht$1(`p-primary-action`,function(){return n.knowMore(n.heroName)}),Tl(2,`po-combo`,2),ww(`ngModelChange`,function(c){return uN(n.heroName,c)||(n.heroName=c),c}),ht$1(`p-change`,function(c){return n.onChangeHero(c)}),ag(),a0(),_x(3,Pt,4,3,`div`,0),SN(4,`async`),ag()()),p&2){let d;jp(),nw(`p-primary-label`,n.knowMoreLabel),jp(),Ew(`ngModel`,n.heroName),l0(),jp(),Dx((d=MN(4,3,n.hero$))?3:-1,d)}},dependencies:[gY,Ak,O4,ybe,O8e,BO],encapsulation:2,changeDetection:1})}return a})();var Tt=a=>({"docs-sample-code-tabs":a});var Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo - Heroes`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-heroes/sample-po-combo-heroes.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-heroes/sample-po-combo-heroes.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-combo-heroes`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Tt,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ke],encapsulation:2,changeDetection:1})}return a})();function Dt(a,q){if(a&1&&(Tl(0,`div`,0),Gl(1,`po-info`,4)(2,`po-info`,5)(3,`po-info`,6),ag()),a&2){let m=q;jp(),nw(`p-value`,m.name),jp(),nw(`p-value`,m.nickname),jp(),nw(`p-value`,m.email)}}var Ye=(()=>{class a{http=f(ob);formBuilder=f(EY);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,um.required]})}get knowMoreLabel(){return this.form.valid?`Know more`:void 0}knowMore(){let m=this.form.get(`hero`).value;window.open(`http://google.com/search?q=${m}`,`_blank`)}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes-reactive-form`]],standalone:!1,decls:6,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`,3,`p-primary-action`,`p-primary-label`],[3,`formGroup`],[`name`,`heroName`,`formControlName`,`hero`,`p-field-label`,`nickname`,`p-field-value`,`name`,`p-filter-service`,`https://po-sample-api.onrender.com/v1/heroes`,`p-label`,`Search a Hero`,`p-sort`,``,3,`p-change`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Tl(0,`div`,0)(1,`po-widget`,1),ht$1(`p-primary-action`,function(){return n.knowMore()}),Tl(2,`div`,2)(3,`po-combo`,3),ht$1(`p-change`,function(c){return n.onChangeHero(c)}),ag(),a0(),ag(),_x(4,Dt,4,3,`div`,0),SN(5,`async`),ag()()),p&2){let d;jp(),nw(`p-primary-label`,n.knowMoreLabel),jp(),nw(`formGroup`,n.form),jp(),l0(),jp(),Dx((d=MN(5,3,n.hero$))?4:-1,d)}},dependencies:[gY,mY,jk,Lk,O4,ybe,O8e,BO],encapsulation:2,changeDetection:1})}return a})();var Ot=a=>({"docs-sample-code-tabs":a});var Xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-heroes-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo - Heroes Reactive Form`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-combo-heroes-reactive-form`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ot,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ye],encapsulation:2,changeDetection:1})}return a})();function qt(a,q){if(a&1&&(Tl(0,`div`,0),Gl(1,`po-info`,3)(2,`po-info`,4)(3,`po-info`,5),ag()),a&2){let m=q;jp(),nw(`p-value`,m.name),jp(),nw(`p-value`,m.nickname),jp(),nw(`p-value`,m.email)}}var Ze=(()=>{class a{http=f(ob);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m)}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-infinity-scroll`]],standalone:!1,decls:5,vars:5,consts:[[1,`po-row`],[1,`po-lg-6`],[`p-filter-service`,`https://po-sample-api.onrender.com/v1/people`,`p-label`,`People`,`name`,`people`,`p-field-label`,`name`,`p-field-value`,`id`,3,`ngModelChange`,`p-change`,`ngModel`,`p-infinite-scroll`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Email`,1,`po-md-4`,3,`p-value`]],template:function(p,n){if(p&1&&(Tl(0,`div`,0)(1,`po-widget`,1)(2,`po-combo`,2),ww(`ngModelChange`,function(c){return uN(n.peopleName,c)||(n.peopleName=c),c}),ht$1(`p-change`,function(c){return n.onChangePeople(c)}),ag(),a0(),_x(3,qt,4,3,`div`,0),SN(4,`async`),ag()()),p&2){let d;jp(2),Ew(`ngModel`,n.peopleName),nw(`p-infinite-scroll`,!0),l0(),jp(),Dx((d=MN(4,3,n.people$))?3:-1,d)}},dependencies:[gY,Ak,O4,ybe,O8e,BO],encapsulation:2,changeDetection:1})}return a})();var Nt=a=>({"docs-sample-code-tabs":a});var $e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-infinity-scroll-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo - Inifity Scroll`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { HttpClient } from '@angular/common/http';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-combo-infinity-scroll`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Nt,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ze],encapsulation:2,changeDetection:1})}return a})();var Bt=[`bookingForm`];var Ht=[`datepicker`];var et=(()=>{class a{poNotification=f(Eu);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:`1 Adult`,value:1},{label:`2 Adults`,value:2},{label:`3 Adults`,value:3},{label:`4 Adults`,value:4}];childrenOptions=[{label:`No Child`,value:0},{label:`1 Child`,value:1},{label:`2 Children`,value:2}];roomsOptions=[{label:`1 Room`,value:1},{label:`2 Rooms`,value:2},{label:`3 Rooms`,value:3}];booking(){this.poNotification.success(`Hotel booked successfully`),this.formReset(),this.datepickerComponent.focus()}onChangeParams(m){this.filterParams=m?{category:`Luxo`}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-hotels`]],viewQuery:function(p,n){if(p&1&&Yl(Bt,7)(Ht,7),p&2){let d;lo(d=uo())&&(n.form=d.first),lo(d=uo())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[[`bookingForm`,`ngForm`],[`datepicker`,``],[1,`po-text-center`],[1,`po-font-title`],[1,`po-row`],[`name`,`checkin`,`p-label`,`Check In`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`checkout`,`p-label`,`Check Out`,`p-placeholder`,`dd/mm/yyyy`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`switch`,`p-label-off`,`No, thank you.`,`p-label-on`,`Yes, please.`,`p-label`,`Only Luxury Category`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`rooms`,`p-label`,`Rooms`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`children`,`p-label`,`Children`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`adults`,`p-label`,`Adults`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`hotel`,`p-debounce-time`,`500`,`p-disabled-init-filter`,``,`p-filter-minlength`,`1`,`p-icon`,`an an-magnifying-glass`,`p-required`,``,`p-field-label`,`name`,`p-field-value`,`value`,`p-label`,`Search a hotel`,`p-sort`,``,`p-filter-service`,`https://po-sample-api.onrender.com/v1/hotels`,`p-listbox-control-position`,`top`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-filter-params`],[`p-label`,`Booking`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(p,n){if(p&1){let d=Ax();Tl(0,`div`,2)(1,`div`,3),cN(2,`Booking a Hotel`),ag()(),Tl(3,`form`,null,0)(5,`div`,4)(6,`po-datepicker`,5,1),ww(`ngModelChange`,function(i){return Ky(d),uN(n.checkin,i)||(n.checkin=i),Xy(i)}),ag(),a0(),Tl(8,`po-datepicker`,6),ww(`ngModelChange`,function(i){return Ky(d),uN(n.checkout,i)||(n.checkout=i),Xy(i)}),ag(),a0(),Tl(9,`po-switch`,7),ww(`ngModelChange`,function(i){return Ky(d),uN(n.category,i)||(n.category=i),Xy(i)}),ht$1(`p-change`,function(i){return n.onChangeParams(i)}),ag(),a0(),ag(),Tl(10,`div`,4)(11,`po-select`,8),ww(`ngModelChange`,function(i){return Ky(d),uN(n.rooms,i)||(n.rooms=i),Xy(i)}),ag(),a0(),Tl(12,`po-select`,9),ww(`ngModelChange`,function(i){return Ky(d),uN(n.children,i)||(n.children=i),Xy(i)}),ag(),a0(),Tl(13,`po-select`,10),ww(`ngModelChange`,function(i){return Ky(d),uN(n.adults,i)||(n.adults=i),Xy(i)}),ag(),a0(),ag(),Tl(14,`div`,4)(15,`po-combo`,11),ww(`ngModelChange`,function(i){return Ky(d),uN(n.hotel,i)||(n.hotel=i),Xy(i)}),ag(),a0(),ag(),Tl(16,`div`,4)(17,`po-button`,12),ht$1(`p-click`,function(){return n.booking()}),ag()()()}if(p&2){let d=Bx(4);jp(6),Ew(`ngModel`,n.checkin),nw(`p-max-date`,n.checkout),l0(),jp(2),Ew(`ngModel`,n.checkout),nw(`p-min-date`,n.checkin),l0(),jp(),Ew(`ngModel`,n.category),l0(),jp(2),Ew(`ngModel`,n.rooms),nw(`p-options`,n.roomsOptions),l0(),jp(),Ew(`ngModel`,n.children),nw(`p-options`,n.childrenOptions),l0(),jp(),Ew(`ngModel`,n.adults),nw(`p-options`,n.adultsOptions),l0(),jp(2),Ew(`ngModel`,n.hotel),nw(`p-filter-params`,n.filterParams),l0(),jp(2),nw(`p-disabled`,d.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,O4,z0e,fbe,j4],encapsulation:2,changeDetection:1})}return a})();var It=a=>({"docs-sample-code-tabs":a});var tt=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-hotels-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Combo - Booking Hotel`),ag(),Tl(4,`a`,2),ht$1(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-combo-hotels/sample-po-combo-hotels.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-text-center">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-combo-hotels/sample-po-combo-hotels.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-combo-hotels`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,It,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,et],encapsulation:2,changeDetection:1})}return a})();var ot=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-combo-doc`]],standalone:!1,decls:1887,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilterMode`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption`],[`pan`,``,1,`docs-api-property-type`,`PoComboOptionGroup`],[`pan`,``,1,`docs-api-property-type`,`any>`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`],[`pan`,``,1,`docs-api-property-type`,`Array<PoComboOption>`]],template:function(p,n){p&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoComboComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O `),Tl(24,`code`),cN(25,`po-combo`),ag(),cN(26,` exibe uma lista de opções com fácil seleção e filtragem.`),ag(),Tl(27,`p`),cN(28,`Além da exibição padrão, nele é possível listar as opões em agrupamentos.`),ag(),Tl(29,`p`),cN(30,`É possível selecionar e navegar entre as opções da lista tanto através do `),Tl(31,`em`),cN(32,`mouse`),ag(),cN(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),Tl(34,`em`),cN(35,`Enter`),ag(),cN(36,` na opção que desejar.`),ag(),Tl(37,`p`),cN(38,`Com ele também é possível definir uma lista à partir da requisição de um serviço definido em `),Tl(39,`code`),cN(40,`p-filter-service`),ag(),cN(41,`.`),ag(),Tl(42,`p`),cN(43,`Em `),Tl(44,`code`),cN(45,`p-filter-mode`),ag(),cN(46,`, o filtro poderá ser configurado para buscar opões que correspondam ao início, fim ou que contenha o valor digitado.`),ag(),Tl(47,`p`),cN(48,`O `),Tl(49,`code`),cN(50,`po-combo`),ag(),cN(51,` guarda o último valor caso o usuário desista de uma busca, deixando o campo ou pressionando `),Tl(52,`em`),cN(53,`Esc`),ag(),cN(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),Tl(55,`em`),cN(56,`Enter`),ag(),cN(57,`.`),ag(),Tl(58,`p`),cN(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),ag(),Tl(60,`h4`),cN(61,`Tokens customizáveis`),ag(),Tl(62,`p`),cN(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(64,`blockquote`)(65,`p`),cN(66,`Para maiores informações, acesse o guia `),Tl(67,`a`,6),cN(68,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(69,`.`),ag()(),Tl(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),cN(74,`Propriedade`),ag(),Tl(75,`th`),cN(76,`Descrição`),ag(),Tl(77,`th`),cN(78,`Valor Padrão`),ag()()(),Tl(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),cN(83,`Default Values`),ag()(),Gl(84,`td`)(85,`td`),ag(),Tl(86,`tr`)(87,`td`)(88,`code`),cN(89,`--font-family`),ag()(),Tl(90,`td`),cN(91,`Família tipográfica usada`),ag(),Tl(92,`td`)(93,`code`),cN(94,`var(--font-family-theme)`),ag()()(),Tl(95,`tr`)(96,`td`)(97,`code`),cN(98,`--font-size`),ag()(),Tl(99,`td`),cN(100,`Tamanho da fonte`),ag(),Tl(101,`td`)(102,`code`),cN(103,`var(--font-size-default)`),ag()()(),Tl(104,`tr`)(105,`td`)(106,`code`),cN(107,`--text-color`),ag()(),Tl(108,`td`),cN(109,`Cor do texto`),ag(),Tl(110,`td`)(111,`code`),cN(112,`var(--color-neutral-dark-90)`),ag()()(),Tl(113,`tr`)(114,`td`)(115,`code`),cN(116,`--text-color-placeholder`),ag()(),Tl(117,`td`),cN(118,`Cor do texto no placeholder`),ag(),Tl(119,`td`)(120,`code`),cN(121,`var(--color-neutral-light-30)`),ag()()(),Tl(122,`tr`)(123,`td`)(124,`code`),cN(125,`--color`),ag()(),Tl(126,`td`),cN(127,`Cor principal do Combo`),ag(),Tl(128,`td`)(129,`code`),cN(130,`var(--color-neutral-dark-70)`),ag()()(),Tl(131,`tr`)(132,`td`)(133,`code`),cN(134,`--background`),ag()(),Tl(135,`td`),cN(136,`Cor de background`),ag(),Tl(137,`td`)(138,`code`),cN(139,`var(--color-neutral-light-05)`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`code`),cN(143,`--border-radius`),ag()(),Tl(144,`td`),cN(145,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(146,`td`)(147,`code`),cN(148,`var(--border-width-lg)`),ag()()(),Tl(149,`tr`)(150,`td`)(151,`code`),cN(152,`--min-width`),ag()(),Tl(153,`td`),cN(154,`Largura mínima do combo`),ag(),Tl(155,`td`)(156,`code`),cN(157,`150px`),ag()()(),Tl(158,`tr`)(159,`td`)(160,`code`),cN(161,`--field-container-title-justify`),ag()(),Tl(162,`td`),cN(163,`Alinhamento horizontal do título (`),Tl(164,`code`),cN(165,`justify-content`),ag(),cN(166,`)`),ag(),Tl(167,`td`)(168,`code`),cN(169,`space-between`),ag()()(),Tl(170,`tr`)(171,`td`)(172,`code`),cN(173,`--field-container-title-flex`),ag()(),Tl(174,`td`),cN(175,`Flex do título (`),Tl(176,`code`),cN(177,`flex`),ag(),cN(178,`)`),ag(),Tl(179,`td`)(180,`code`),cN(181,`1 auto`),ag()()(),Tl(182,`tr`)(183,`td`)(184,`strong`),cN(185,`Hover`),ag()(),Gl(186,`td`)(187,`td`),ag(),Tl(188,`tr`)(189,`td`)(190,`code`),cN(191,`--color-hover`),ag()(),Tl(192,`td`),cN(193,`Cor principal no estado hover`),ag(),Tl(194,`td`)(195,`code`),cN(196,`var(--color-action-hover)`),ag()()(),Tl(197,`tr`)(198,`td`)(199,`code`),cN(200,`--background-hover`),ag()(),Tl(201,`td`),cN(202,`Cor de background no estado hover`),ag(),Tl(203,`td`)(204,`code`),cN(205,`var(--color-brand-01-lightest)`),ag()()(),Tl(206,`tr`)(207,`td`)(208,`strong`),cN(209,`Focused`),ag()(),Gl(210,`td`)(211,`td`),ag(),Tl(212,`tr`)(213,`td`)(214,`code`),cN(215,`--color-focused`),ag()(),Tl(216,`td`),cN(217,`Cor principal no estado de focus`),ag(),Tl(218,`td`)(219,`code`),cN(220,`var(--color-action-default)`),ag()()(),Tl(221,`tr`)(222,`td`)(223,`code`),cN(224,`--outline-color-focused`),ag()(),Tl(225,`td`),cN(226,`Cor do outline do estado de focus`),ag(),Tl(227,`td`)(228,`code`),cN(229,`var(--color-action-focus)`),ag()()(),Tl(230,`tr`)(231,`td`)(232,`strong`),cN(233,`Error`),ag()(),Gl(234,`td`)(235,`td`),ag(),Tl(236,`tr`)(237,`td`)(238,`code`),cN(239,`--color-error`),ag()(),Tl(240,`td`),cN(241,`Cor principal no estado de erro`),ag(),Tl(242,`td`)(243,`code`),cN(244,`var(--color-feedback-negative-base)`),ag()()(),Tl(245,`tr`)(246,`td`)(247,`strong`),cN(248,`Disabled`),ag()(),Gl(249,`td`)(250,`td`),ag(),Tl(251,`tr`)(252,`td`)(253,`code`),cN(254,`--color-disabled`),ag()(),Tl(255,`td`),cN(256,`Cor principal no estado disabled`),ag(),Tl(257,`td`)(258,`code`),cN(259,`var(--color-neutral-light-30)`),ag()()(),Tl(260,`tr`)(261,`td`)(262,`code`),cN(263,`--background-disabled`),ag()(),Tl(264,`td`),cN(265,`Cor de background no estado disabled`),ag(),Tl(266,`td`)(267,`code`),cN(268,`var(--color-neutral-light-20)`),ag()()(),Tl(269,`tr`)(270,`td`)(271,`strong`),cN(272,`Suggestion`),ag()(),Gl(273,`td`)(274,`td`),ag(),Tl(275,`tr`)(276,`td`)(277,`code`),cN(278,`--text-color-suggestion`),ag()(),Tl(279,`td`),cN(280,`Cor do texto no estado suggestion`),ag(),Tl(281,`td`)(282,`code`),cN(283,`var(--color-neutral-mid-60)`),ag()()(),Tl(284,`tr`)(285,`td`)(286,`code`),cN(287,`--background-suggestion`),ag()(),Tl(288,`td`),cN(289,`Cor do background no estado suggestion`),ag(),Tl(290,`td`)(291,`code`),cN(292,`var(--color-brand-01-lightest)`),ag()()()()()(),Tl(293,`div`,7)(294,`h4`,8),cN(295,`Seletor`),ag(),Tl(296,`pre`,9),cN(297,`<po-combo
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
`),ag()(),Tl(298,`h4`,10),cN(299,`Propriedades`),ag(),Tl(300,`table`,11)(301,`tr`,12)(302,`th`,13),cN(303,`Nome`),ag(),Tl(304,`th`,13),cN(305,`Tipo`),ag(),Tl(306,`th`,13),cN(307,`Padrão`),ag(),Tl(308,`th`,13),cN(309,`Descrição`),ag()(),Tl(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),cN(314,` (p-additional-help)`),Gl(315,`br`),ag()(),Tl(316,`div`,18),cN(317,`Deprecated`),ag()(),Tl(318,`td`,19)(319,`code`,20),cN(320,`EventEmitter`),ag()(),Tl(321,`td`,21),cN(322,`-`),ag(),Tl(323,`td`,22)(324,`em`)(325,`strong`),cN(326,`(opcional)`),ag()(),Tl(327,`p`),cN(328,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(329,`blockquote`)(330,`p`),cN(331,`Essa propriedade está `),Tl(332,`strong`),cN(333,`depreciada`),ag(),cN(334,` e será removida na versão `),Tl(335,`code`),cN(336,`23.x.x`),ag(),cN(337,`. Recomendamos utilizar a propriedade `),Tl(338,`code`),cN(339,`p-helper`),ag(),cN(340,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(341,`tr`,14)(342,`td`,15)(343,`div`,23)(344,`span`,24),cN(345,` p-additional-help-tooltip`),Gl(346,`br`),ag()(),Tl(347,`div`,18),cN(348,`Deprecated`),ag()(),Tl(349,`td`,19)(350,`code`,25),cN(351,`string`),ag()(),Tl(352,`td`,21),cN(353,`-`),ag(),Tl(354,`td`,22)(355,`em`)(356,`strong`),cN(357,`(opcional)`),ag()(),Tl(358,`p`),cN(359,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(360,`code`),cN(361,`po-helper`),ag(),cN(362,`.
`),Tl(363,`strong`),cN(364,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(365,`blockquote`)(366,`p`),cN(367,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(368,`blockquote`)(369,`p`),cN(370,`Essa propriedade está `),Tl(371,`strong`),cN(372,`depreciada`),ag(),cN(373,` e será removida na versão `),Tl(374,`code`),cN(375,`23.x.x`),ag(),cN(376,`. Recomendamos utilizar a propriedade `),Tl(377,`code`),cN(378,`p-helper`),ag(),cN(379,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),cN(384,` p-append-in-body`),Gl(385,`br`),ag()()(),Tl(386,`td`,19)(387,`code`,26),cN(388,`boolean`),ag()(),Tl(389,`td`,21)(390,`p`)(391,`code`),cN(392,`false`),ag()()(),Tl(393,`td`,22)(394,`em`)(395,`strong`),cN(396,`(opcional)`),ag()(),Tl(397,`p`),cN(398,`Define que o `),Tl(399,`code`),cN(400,`listbox`),ag(),cN(401,` e/ou popover (`),Tl(402,`code`),cN(403,`p-helper`),ag(),cN(404,` e/ou `),Tl(405,`code`),cN(406,`p-error-limit`),ag(),cN(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ag(),Tl(408,`blockquote`)(409,`p`),cN(410,`Quando utilizado com `),Tl(411,`code`),cN(412,`p-helper`),ag(),cN(413,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(414,`tr`,14)(415,`td`,15)(416,`div`,23)(417,`span`,24),cN(418,` p-auto-focus`),Gl(419,`br`),ag()()(),Tl(420,`td`,19)(421,`code`,26),cN(422,`boolean`),ag()(),Tl(423,`td`,21)(424,`p`)(425,`code`),cN(426,`false`),ag()()(),Tl(427,`td`,22)(428,`em`)(429,`strong`),cN(430,`(opcional)`),ag()(),Tl(431,`p`),cN(432,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(433,`blockquote`)(434,`p`),cN(435,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(436,`tr`,14)(437,`td`,15)(438,`div`,16)(439,`span`,17),cN(440,` (p-blur)`),Gl(441,`br`),ag()()(),Tl(442,`td`,19)(443,`code`,20),cN(444,`EventEmitter`),ag()(),Tl(445,`td`,21),cN(446,`-`),ag(),Tl(447,`td`,22)(448,`em`)(449,`strong`),cN(450,`(opcional)`),ag()(),Tl(451,`p`),cN(452,`Evento disparado ao sair do campo.`),ag()()(),Tl(453,`tr`,14)(454,`td`,15)(455,`div`,23)(456,`span`,24),cN(457,` p-cache`),Gl(458,`br`),ag()()(),Tl(459,`td`,19)(460,`code`,26),cN(461,`boolean`),ag()(),Tl(462,`td`,21)(463,`p`)(464,`code`),cN(465,`true`),ag()()(),Tl(466,`td`,22)(467,`em`)(468,`strong`),cN(469,`(opcional)`),ag()(),Tl(470,`p`),cN(471,`Define se o componente irá guardar o valor do model para evitar requisições repetidas.`),ag(),Tl(472,`blockquote`)(473,`p`),cN(474,`Caso o valor seja `),Tl(475,`code`),cN(476,`false`),ag(),cN(477,`, o componente fará uma nova requisição mesmo que o valor procurado seja o mesmo do model.`),ag()()()(),Tl(478,`tr`,14)(479,`td`,15)(480,`div`,16)(481,`span`,17),cN(482,` (p-change)`),Gl(483,`br`),ag()()(),Tl(484,`td`,19)(485,`code`,20),cN(486,`EventEmitter`),ag()(),Tl(487,`td`,21),cN(488,`-`),ag(),Tl(489,`td`,22)(490,`em`)(491,`strong`),cN(492,`(opcional)`),ag()(),Tl(493,`p`),cN(494,`Deve ser informada uma função que será disparada quando houver alterações no ngModel. A função receberá como argumento o model modificado.`),ag(),Tl(495,`blockquote`)(496,`p`),cN(497,`Pode-se optar pelo recebimento do objeto selecionado ao invés do model através da propriedade `),Tl(498,`code`),cN(499,`p-emit-object-value`),ag(),cN(500,`.`),ag()()()(),Tl(501,`tr`,14)(502,`td`,15)(503,`div`,16)(504,`span`,17),cN(505,` (p-change-model)`),Gl(506,`br`),ag()()(),Tl(507,`td`,19)(508,`code`,20),cN(509,`EventEmitter`),ag()(),Tl(510,`td`,21),cN(511,`-`),ag(),Tl(512,`td`,22)(513,`em`)(514,`strong`),cN(515,`(opcional)`),ag()(),Tl(516,`p`),cN(517,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(518,`code`),cN(519,`setValue`),ag(),cN(520,`, `),Tl(521,`code`),cN(522,`patchValue`),ag(),cN(523,`, carregamento assíncrono).`),ag(),Tl(524,`p`),cN(525,`Diferentemente do `),Tl(526,`code`),cN(527,`p-change`),ag(),cN(528,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(529,`code`),cN(530,`p-change-model`),ag(),cN(531,` cobre todos os cenários de alteração de valor.`),ag(),Tl(532,`p`),cN(533,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(534,`tr`,14)(535,`td`,15)(536,`div`,23)(537,`span`,24),cN(538,` p-change-on-enter`),Gl(539,`br`),ag()()(),Tl(540,`td`,19)(541,`code`,26),cN(542,`boolean`),ag()(),Tl(543,`td`,21)(544,`p`)(545,`code`),cN(546,`false`),ag()()(),Tl(547,`td`,22)(548,`em`)(549,`strong`),cN(550,`(opcional)`),ag()(),Tl(551,`p`),cN(552,`Indica que o evento `),Tl(553,`code`),cN(554,`p-change`),ag(),cN(555,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada.`),ag()()(),Tl(556,`tr`,14)(557,`td`,15)(558,`div`,23)(559,`span`,24),cN(560,` p-clean`),Gl(561,`br`),ag()()(),Tl(562,`td`,19)(563,`code`,26),cN(564,`boolean`),ag()(),Tl(565,`td`,21),cN(566,`-`),ag(),Tl(567,`td`,22)(568,`em`)(569,`strong`),cN(570,`(opcional)`),ag()(),Tl(571,`p`),cN(572,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ag()()(),Tl(573,`tr`,14)(574,`td`,15)(575,`div`,23)(576,`span`,24),cN(577,` p-compact-label`),Gl(578,`br`),ag()()(),Tl(579,`td`,19)(580,`code`,26),cN(581,`boolean`),ag()(),Tl(582,`td`,21)(583,`p`)(584,`code`),cN(585,`false`),ag()()(),Tl(586,`td`,22)(587,`em`)(588,`strong`),cN(589,`(opcional)`),ag()(),Tl(590,`p`),cN(591,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(592,`p`),cN(593,`Quando habilitado (`),Tl(594,`code`),cN(595,`true`),ag(),cN(596,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(597,`ul`)(598,`li`)(599,`code`),cN(600,`po-label`),ag()(),Tl(601,`li`)(602,`code`),cN(603,`p-requirement (showRequired)`),ag()(),Tl(604,`li`)(605,`code`),cN(606,`po-helper`),ag()()(),Tl(607,`p`),cN(608,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(609,`p`),cN(610,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(611,`ul`)(612,`li`)(613,`code`),cN(614,`--field-container-title-justify`),ag()(),Tl(615,`li`)(616,`code`),cN(617,`--field-container-title-flex`),ag()()(),Tl(618,`p`),cN(619,`Exemplo:`),ag(),Tl(620,`pre`)(621,`code`),cN(622,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(623,`p`),cN(624,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(625,`tr`,14)(626,`td`,15)(627,`div`,23)(628,`span`,24),cN(629,` p-debounce-time`),Gl(630,`br`),ag()()(),Tl(631,`td`,19)(632,`code`,27),cN(633,`number`),ag()(),Tl(634,`td`,21)(635,`p`)(636,`code`),cN(637,`400`),ag()()(),Tl(638,`td`,22)(639,`em`)(640,`strong`),cN(641,`(opcional)`),ag()(),Tl(642,`p`),cN(643,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),Tl(644,`code`),cN(645,`p-filter-service`),ag(),cN(646,`).`),ag()()(),Tl(647,`tr`,14)(648,`td`,15)(649,`div`,23)(650,`span`,24),cN(651,` p-disabled`),Gl(652,`br`),ag()()(),Tl(653,`td`,19)(654,`code`,26),cN(655,`boolean`),ag()(),Tl(656,`td`,21)(657,`p`)(658,`code`),cN(659,`false`),ag()()(),Tl(660,`td`,22)(661,`em`)(662,`strong`),cN(663,`(opcional)`),ag()(),Tl(664,`p`),cN(665,`Indica que o campo será desabilitado.`),ag()()(),Tl(666,`tr`,14)(667,`td`,15)(668,`div`,23)(669,`span`,24),cN(670,` p-disabled-init-filter`),Gl(671,`br`),ag()()(),Tl(672,`td`,19)(673,`code`,26),cN(674,`boolean`),ag()(),Tl(675,`td`,21)(676,`p`)(677,`code`),cN(678,`false`),ag()()(),Tl(679,`td`,22)(680,`em`)(681,`strong`),cN(682,`(opcional)`),ag()(),Tl(683,`p`),cN(684,`Desabilita o filtro inicial no serviço, que é executado no primeiro clique no campo.`),ag()()(),Tl(685,`tr`,14)(686,`td`,15)(687,`div`,23)(688,`span`,24),cN(689,` p-disabled-tab-filter`),Gl(690,`br`),ag()()(),Tl(691,`td`,19)(692,`code`,26),cN(693,`boolean`),ag()(),Tl(694,`td`,21)(695,`p`)(696,`code`),cN(697,`false`),ag()()(),Tl(698,`td`,22)(699,`em`)(700,`strong`),cN(701,`(opcional)`),ag()(),Tl(702,`p`),cN(703,`Se verdadeiro, desabilitará a busca de um item via TAB.`),ag()()(),Tl(704,`tr`,14)(705,`td`,15)(706,`div`,23)(707,`span`,24),cN(708,` p-emit-object-value`),Gl(709,`br`),ag()()(),Tl(710,`td`,19)(711,`code`,26),cN(712,`boolean`),ag()(),Tl(713,`td`,21)(714,`p`)(715,`code`),cN(716,`false`),ag()()(),Tl(717,`td`,22)(718,`em`)(719,`strong`),cN(720,`(opcional)`),ag()(),Tl(721,`p`),cN(722,`Se verdadeiro, o evento `),Tl(723,`code`),cN(724,`p-change`),ag(),cN(725,` receberá como argumento o `),Tl(726,`code`),cN(727,`PoComboOption`),ag(),cN(728,` referente à opção selecionada.`),ag()()(),Tl(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),cN(733,` p-error-limit`),Gl(734,`br`),ag()()(),Tl(735,`td`,19)(736,`code`,26),cN(737,`boolean`),ag()(),Tl(738,`td`,21)(739,`p`)(740,`code`),cN(741,`false`),ag()()(),Tl(742,`td`,22)(743,`em`)(744,`strong`),cN(745,`(opcional)`),ag()(),Tl(746,`p`),cN(747,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(748,`blockquote`)(749,`p`),cN(750,`Caso essa propriedade seja definida como `),Tl(751,`code`),cN(752,`true`),ag(),cN(753,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(754,`tr`,14)(755,`td`,15)(756,`div`,23)(757,`span`,24),cN(758,` p-field-error-message`),Gl(759,`br`),ag()()(),Tl(760,`td`,19)(761,`code`,25),cN(762,`string`),ag()(),Tl(763,`td`,21),cN(764,`-`),ag(),Tl(765,`td`,22)(766,`em`)(767,`strong`),cN(768,`(opcional)`),ag()(),Tl(769,`p`),cN(770,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ag(),Tl(771,`blockquote`)(772,`p`),cN(773,`Necessário que a propriedade `),Tl(774,`code`),cN(775,`p-required`),ag(),cN(776,` esteja habilitada.`),ag()()()(),Tl(777,`tr`,14)(778,`td`,15)(779,`div`,23)(780,`span`,24),cN(781,` p-field-label`),Gl(782,`br`),ag()()(),Tl(783,`td`,19)(784,`code`,25),cN(785,`string`),ag()(),Tl(786,`td`,21)(787,`p`)(788,`code`),cN(789,`label`),ag()()(),Tl(790,`td`,22)(791,`em`)(792,`strong`),cN(793,`(opcional)`),ag()(),Tl(794,`p`),cN(795,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(796,`code`),cN(797,`p-options`),ag(),cN(798,`), esta propriedade será responsável pelo texto de apresentação de cada item da lista.`),ag(),Tl(799,`p`),cN(800,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),ag()()(),Tl(801,`tr`,14)(802,`td`,15)(803,`div`,23)(804,`span`,24),cN(805,` p-field-value`),Gl(806,`br`),ag()()(),Tl(807,`td`,19)(808,`code`,25),cN(809,`string`),ag()(),Tl(810,`td`,21)(811,`p`)(812,`code`),cN(813,`value`),ag()()(),Tl(814,`td`,22)(815,`em`)(816,`strong`),cN(817,`(opcional)`),ag()(),Tl(818,`p`),cN(819,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),Tl(820,`code`),cN(821,`p-options`),ag(),cN(822,`), esta propriedade será responsável pelo valor de cada item da lista.`),ag(),Tl(823,`p`),cN(824,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),ag()()(),Tl(825,`tr`,14)(826,`td`,15)(827,`div`,23)(828,`span`,24),cN(829,` p-filter-minlength`),Gl(830,`br`),ag()()(),Tl(831,`td`,19)(832,`code`,27),cN(833,`number`),ag()(),Tl(834,`td`,21)(835,`p`)(836,`code`),cN(837,`0`),ag()()(),Tl(838,`td`,22)(839,`em`)(840,`strong`),cN(841,`(opcional)`),ag()(),Tl(842,`p`),cN(843,`Valor mínimo de caracteres para realizar o filtro no serviço.`),ag()()(),Tl(844,`tr`,14)(845,`td`,15)(846,`div`,23)(847,`span`,24),cN(848,` p-filter-mode`),Gl(849,`br`),ag()()(),Tl(850,`td`,19)(851,`code`,28),cN(852,`PoComboFilterMode`),ag()(),Tl(853,`td`,21)(854,`p`)(855,`code`),cN(856,`startsWith`),ag()()(),Tl(857,`td`,22)(858,`em`)(859,`strong`),cN(860,`(opcional)`),ag()(),Tl(861,`p`),cN(862,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Tl(863,`code`),cN(864,`startsWith`),ag(),cN(865,`, `),Tl(866,`code`),cN(867,`contains`),ag(),cN(868,` ou `),Tl(869,`code`),cN(870,`endsWith`),ag(),cN(871,`.`),ag(),Tl(872,`blockquote`)(873,`p`),cN(874,`Quando utilizar a propriedade `),Tl(875,`code`),cN(876,`p-filter-service`),ag(),cN(877,` esta propriedade será ignorada.`),ag()()()(),Tl(878,`tr`,14)(879,`td`,15)(880,`div`,23)(881,`span`,24),cN(882,` p-filter-params`),Gl(883,`br`),ag()()(),Tl(884,`td`,19)(885,`code`,29),cN(886,`any`),ag()(),Tl(887,`td`,21),cN(888,`-`),ag(),Tl(889,`td`,22)(890,`em`)(891,`strong`),cN(892,`(opcional)`),ag()(),Tl(893,`p`),cN(894,`Valor que será repassado como parâmetro para a URL ou aos métodos do serviço que implementam a interface `),Tl(895,`em`),cN(896,`PoComboFilter`),ag(),cN(897,`.`),ag(),Tl(898,`blockquote`)(899,`p`),cN(900,`Caso a lista contenha agrupamentos, os mesmos só serão exibidos se houver no mínimo uma opção que corresponda à pesquisa.`),ag()()()(),Tl(901,`tr`,14)(902,`td`,15)(903,`div`,23)(904,`span`,24),cN(905,` p-filter-service`),Gl(906,`br`),ag()()(),Tl(907,`td`,19)(908,`code`,30),cN(909,`PoComboFilter `),ag(),Tl(910,`code`,25),cN(911,` string`),ag()(),Tl(912,`td`,21),cN(913,`-`),ag(),Tl(914,`td`,22)(915,`em`)(916,`strong`),cN(917,`(opcional)`),ag()(),Tl(918,`p`),cN(919,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),ag(),Tl(920,`p`),cN(921,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),Tl(922,`code`),cN(923,`p-field-label`),ag(),cN(924,` e `),Tl(925,`code`),cN(926,`p-field-value`),ag(),cN(927,` para a construção da lista de itens.`),ag(),Tl(928,`p`),cN(929,`Quando utilizada uma URL de serviço, então será concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:`),ag(),Tl(930,`pre`)(931,`code`),cN(932,`url + ?filter=Peter
`),ag()(),Tl(933,`p`),cN(934,`Se for definida a propriedade `),Tl(935,`code`),cN(936,`p-filter-params`),ag(),cN(937,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),Tl(938,`code`),cN(939,`{ age: 23 }`),ag(),cN(940,` a URL ficaria:`),ag(),Tl(941,`pre`)(942,`code`),cN(943,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),ag()()()(),Tl(944,`tr`,14)(945,`td`,15)(946,`div`,23)(947,`span`,24),cN(948,` p-help`),Gl(949,`br`),ag()()(),Tl(950,`td`,19)(951,`code`,25),cN(952,`string`),ag()(),Tl(953,`td`,21),cN(954,`-`),ag(),Tl(955,`td`,22)(956,`em`)(957,`strong`),cN(958,`(opcional)`),ag()(),Tl(959,`p`),cN(960,`Texto de apoio para o campo.`),ag()()(),Tl(961,`tr`,14)(962,`td`,15)(963,`div`,23)(964,`span`,24),cN(965,` p-icon`),Gl(966,`br`),ag()()(),Tl(967,`td`,19)(968,`code`,25),cN(969,`string `),ag(),Tl(970,`code`,31),cN(971,` TemplateRef<void>`),ag()(),Tl(972,`td`,21),cN(973,`-`),ag(),Tl(974,`td`,22)(975,`em`)(976,`strong`),cN(977,`(opcional)`),ag()(),Tl(978,`p`),cN(979,`Define o ícone que será exibido no início do campo.`),ag(),Tl(980,`p`),cN(981,`É possível usar qualquer um dos ícones da `),Tl(982,`a`,32),cN(983,`Biblioteca de ícones`),ag(),cN(984,`. conforme exemplo abaixo:`),ag(),Tl(985,`pre`)(986,`code`),cN(987,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),ag()(),Tl(988,`p`),cN(989,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(990,`em`),cN(991,`Font Awesome`),ag(),cN(992,`, da seguinte forma:`),ag(),Tl(993,`pre`)(994,`code`),cN(995,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),ag()(),Tl(996,`p`),cN(997,`Outra opção seria a customização do ícone através do `),Tl(998,`code`),cN(999,`TemplateRef`),ag(),cN(1e3,`, conforme exemplo abaixo:`),ag(),Tl(1001,`pre`)(1002,`code`),cN(1003,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(1004,`blockquote`)(1005,`p`),cN(1006,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(1007,`code`),cN(1008,`font-size: inherit`),ag(),cN(1009,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(1010,`tr`,14)(1011,`td`,15)(1012,`div`,23)(1013,`span`,24),cN(1014,` p-infinite-scroll`),Gl(1015,`br`),ag()()(),Tl(1016,`td`,19)(1017,`code`,26),cN(1018,`boolean`),ag()(),Tl(1019,`td`,21)(1020,`p`)(1021,`code`),cN(1022,`false`),ag()()(),Tl(1023,`td`,22)(1024,`em`)(1025,`strong`),cN(1026,`(opcional)`),ag()(),Tl(1027,`p`),cN(1028,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),ag()()(),Tl(1029,`tr`,14)(1030,`td`,15)(1031,`div`,23)(1032,`span`,24),cN(1033,` p-infinite-scroll-distance`),Gl(1034,`br`),ag()()(),Tl(1035,`td`,19)(1036,`code`,27),cN(1037,`number`),ag()(),Tl(1038,`td`,21),cN(1039,`-`),ag(),Tl(1040,`td`,22)(1041,`em`)(1042,`strong`),cN(1043,`(opcional)`),ag()(),Tl(1044,`p`),cN(1045,`Define o percentual necessário para disparar o evento `),Tl(1046,`code`),cN(1047,`show-more`),ag(),cN(1048,`, que é responsável por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padrão será 100%.`),ag(),Tl(1049,`p`)(1050,`strong`),cN(1051,`Exemplos`),ag()(),Tl(1052,`ul`)(1053,`li`),cN(1054,`p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o `),Tl(1055,`code`),cN(1056,`show-more`),ag(),cN(1057,` será disparado.`),ag()()()(),Tl(1058,`tr`,14)(1059,`td`,15)(1060,`div`,16)(1061,`span`,17),cN(1062,` (p-input-change)`),Gl(1063,`br`),ag()()(),Tl(1064,`td`,19)(1065,`code`,20),cN(1066,`EventEmitter`),ag()(),Tl(1067,`td`,21),cN(1068,`-`),ag(),Tl(1069,`td`,22)(1070,`em`)(1071,`strong`),cN(1072,`(opcional)`),ag()(),Tl(1073,`p`),cN(1074,`Deve ser informada uma função que será disparada quando houver alterações no Search input. A função receberá como argumento o input modificado.`),ag()()(),Tl(1075,`tr`,14)(1076,`td`,15)(1077,`div`,16)(1078,`span`,17),cN(1079,` (p-keydown)`),Gl(1080,`br`),ag()()(),Tl(1081,`td`,19)(1082,`code`,20),cN(1083,`EventEmitter`),ag()(),Tl(1084,`td`,21),cN(1085,`-`),ag(),Tl(1086,`td`,22)(1087,`em`)(1088,`strong`),cN(1089,`(opcional)`),ag()(),Tl(1090,`p`),cN(1091,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(1092,`code`),cN(1093,`KeyboardEvent`),ag(),cN(1094,` com informações sobre a tecla.`),ag()()(),Tl(1095,`tr`,14)(1096,`td`,15)(1097,`div`,23)(1098,`span`,24),cN(1099,` p-label`),Gl(1100,`br`),ag()()(),Tl(1101,`td`,19)(1102,`code`,25),cN(1103,`string`),ag()(),Tl(1104,`td`,21),cN(1105,`-`),ag(),Tl(1106,`td`,22)(1107,`em`)(1108,`strong`),cN(1109,`(opcional)`),ag()(),Tl(1110,`p`),cN(1111,`Label no componente.`),ag()()(),Tl(1112,`tr`,14)(1113,`td`,15)(1114,`div`,23)(1115,`span`,24),cN(1116,` p-label-text-wrap`),Gl(1117,`br`),ag()()(),Tl(1118,`td`,19)(1119,`code`,26),cN(1120,`boolean`),ag()(),Tl(1121,`td`,21)(1122,`p`)(1123,`code`),cN(1124,`false`),ag()()(),Tl(1125,`td`,22)(1126,`em`)(1127,`strong`),cN(1128,`(opcional)`),ag()(),Tl(1129,`p`),cN(1130,`Habilita a quebra automática do texto da propriedade `),Tl(1131,`code`),cN(1132,`p-label`),ag(),cN(1133,`. Quando `),Tl(1134,`code`),cN(1135,`p-label-text-wrap`),ag(),cN(1136,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(1137,`tr`,14)(1138,`td`,15)(1139,`div`,23)(1140,`span`,24),cN(1141,` p-listbox-control-position`),Gl(1142,`br`),ag()()(),Tl(1143,`td`,19)(1144,`code`,33),cN(1145,`'top' `),ag(),Tl(1146,`code`,34),cN(1147,` 'bottom'`),ag()(),Tl(1148,`td`,21)(1149,`p`)(1150,`code`),cN(1151,`bottom`),ag()()(),Tl(1152,`td`,22)(1153,`em`)(1154,`strong`),cN(1155,`(opcional)`),ag()(),Tl(1156,`p`),cN(1157,`Define a direção preferida para exibição do `),Tl(1158,`code`),cN(1159,`listbox`),ag(),cN(1160,` em relação ao campo (`),Tl(1161,`code`),cN(1162,`top`),ag(),cN(1163,` ou `),Tl(1164,`code`),cN(1165,`bottom`),ag(),cN(1166,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ag()()(),Tl(1167,`tr`,14)(1168,`td`,15)(1169,`div`,23)(1170,`span`,24),cN(1171,` p-literals`),Gl(1172,`br`),ag()()(),Tl(1173,`td`,19)(1174,`code`,35),cN(1175,`PoComboLiterals`),ag()(),Tl(1176,`td`,21),cN(1177,`-`),ag(),Tl(1178,`td`,22)(1179,`em`)(1180,`strong`),cN(1181,`(opcional)`),ag()(),Tl(1182,`p`),cN(1183,`Objeto com as literais usadas no `),Tl(1184,`code`),cN(1185,`po-combo`),ag(),cN(1186,`.`),ag(),Tl(1187,`p`),cN(1188,`Para utilizar basta passar a literal que deseja customizar:`),ag(),Tl(1189,`pre`)(1190,`code`),cN(1191,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),ag()(),Tl(1192,`p`),cN(1193,`E para carregar a literal customizada, basta apenas passar o objeto para o componente.`),ag(),Tl(1194,`pre`)(1195,`code`),cN(1196,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),ag()(),Tl(1197,`blockquote`)(1198,`p`),cN(1199,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(1200,`a`,36)(1201,`code`),cN(1202,`PoI18nService`),ag()(),cN(1203,` ou do browser.`),ag()()()(),Tl(1204,`tr`,14)(1205,`td`,15)(1206,`div`,23)(1207,`span`,24),cN(1208,` p-loading`),Gl(1209,`br`),ag()()(),Tl(1210,`td`,19)(1211,`code`,26),cN(1212,`boolean`),ag()(),Tl(1213,`td`,21)(1214,`p`)(1215,`code`),cN(1216,`false`),ag()()(),Tl(1217,`td`,22)(1218,`em`)(1219,`strong`),cN(1220,`(opcional)`),ag()(),Tl(1221,`p`),cN(1222,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(1223,`tr`,14)(1224,`td`,15)(1225,`div`,23)(1226,`span`,24),cN(1227,` name`),Gl(1228,`br`),ag()()(),Tl(1229,`td`,19)(1230,`code`,25),cN(1231,`string`),ag()(),Tl(1232,`td`,21),cN(1233,`-`),ag(),Tl(1234,`td`,22)(1235,`p`),cN(1236,`Nome do componente.`),ag()()(),Tl(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),cN(1241,` (ngModelChange)`),Gl(1242,`br`),ag()()(),Tl(1243,`td`,19)(1244,`code`,20),cN(1245,`EventEmitter`),ag()(),Tl(1246,`td`,21),cN(1247,`-`),ag(),Tl(1248,`td`,22)(1249,`em`)(1250,`strong`),cN(1251,`(opcional)`),ag()(),Tl(1252,`p`),cN(1253,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da tag form.`),ag(),Tl(1254,`p`),cN(1255,`Na versão 12.2.0 do Angular a verificação `),Tl(1256,`code`),cN(1257,`strictTemplates`),ag(),cN(1258,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ag(),Tl(1259,`pre`)(1260,`code`),cN(1261,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),ag()()()(),Tl(1262,`tr`,14)(1263,`td`,15)(1264,`div`,23)(1265,`span`,24),cN(1266,` p-optional`),Gl(1267,`br`),ag()()(),Tl(1268,`td`,19)(1269,`code`,26),cN(1270,`boolean`),ag()(),Tl(1271,`td`,21)(1272,`p`)(1273,`code`),cN(1274,`false`),ag()()(),Tl(1275,`td`,22)(1276,`em`)(1277,`strong`),cN(1278,`(opcional)`),ag()(),Tl(1279,`p`),cN(1280,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(1281,`blockquote`)(1282,`p`),cN(1283,`Não será exibida a indicação se:`),ag()(),Tl(1284,`ul`)(1285,`li`),cN(1286,`O campo conter `),Tl(1287,`code`),cN(1288,`p-required`),ag(),cN(1289,`;`),ag(),Tl(1290,`li`),cN(1291,`Não possuir `),Tl(1292,`code`),cN(1293,`p-help`),ag(),cN(1294,` e/ou `),Tl(1295,`code`),cN(1296,`p-label`),ag(),cN(1297,`.`),ag()()()(),Tl(1298,`tr`,14)(1299,`td`,15)(1300,`div`,23)(1301,`span`,24),cN(1302,` p-options`),Gl(1303,`br`),ag()()(),Tl(1304,`td`,19)(1305,`code`,37),cN(1306,`Array<PoComboOption `),ag(),Tl(1307,`code`,38),cN(1308,` PoComboOptionGroup `),ag(),Tl(1309,`code`,39),cN(1310,` any>`),ag()(),Tl(1311,`td`,21),cN(1312,`-`),ag(),Tl(1313,`td`,22)(1314,`p`),cN(1315,`Nesta propriedade define a lista de opções do `),Tl(1316,`code`),cN(1317,`po-combo`),ag(),cN(1318,`.`),ag(),Tl(1319,`blockquote`)(1320,`p`),cN(1321,`A lista pode ser definida utilizando um array com o valor representando o `),Tl(1322,`code`),cN(1323,`value`),ag(),cN(1324,` e o `),Tl(1325,`code`),cN(1326,`label`),ag(),cN(1327,` das seguintes formas:`),ag()(),Tl(1328,`pre`)(1329,`code`),cN(1330,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),ag()(),Tl(1331,`pre`)(1332,`code`),cN(1333,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),ag()(),Tl(1334,`ul`)(1335,`li`),cN(1336,`Aconselha-se utilizar valores distintos no `),Tl(1337,`code`),cN(1338,`label`),ag(),cN(1339,` e `),Tl(1340,`code`),cN(1341,`value`),ag(),cN(1342,` dos itens.`),ag()()()(),Tl(1343,`tr`,14)(1344,`td`,15)(1345,`div`,23)(1346,`span`,24),cN(1347,` p-placeholder`),Gl(1348,`br`),ag()()(),Tl(1349,`td`,19)(1350,`code`,25),cN(1351,`string`),ag()(),Tl(1352,`td`,21),cN(1353,`-`),ag(),Tl(1354,`td`,22)(1355,`p`),cN(1356,`Mensagem apresentada enquanto o campo estiver vazio.`),ag()()(),Tl(1357,`tr`,14)(1358,`td`,15)(1359,`div`,23)(1360,`span`,24),cN(1361,` p-helper`),Gl(1362,`br`),ag()()(),Tl(1363,`td`,19)(1364,`code`,40),cN(1365,`PoHelperOptions `),ag(),Tl(1366,`code`,25),cN(1367,` string`),ag()(),Tl(1368,`td`,21),cN(1369,`-`),ag(),Tl(1370,`td`,22)(1371,`em`)(1372,`strong`),cN(1373,`(opcional)`),ag()(),Tl(1374,`p`),cN(1375,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1376,`code`),cN(1377,`p-label`),ag(),cN(1378,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1379,`code`),cN(1380,`p-label`),ag(),cN(1381,`.`),ag(),Tl(1382,`blockquote`)(1383,`p`),cN(1384,`Para mais informações acesse: `),Tl(1385,`a`,41),cN(1386,`https://po-ui.io/documentation/po-helper`),ag(),cN(1387,`.`),ag()(),Tl(1388,`blockquote`)(1389,`p`),cN(1390,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1391,`code`),cN(1392,`p-additional-help-tooltip`),ag(),cN(1393,` e `),Tl(1394,`code`),cN(1395,`p-additional-help`),ag(),cN(1396,`) será ignorado.`),ag()()()(),Tl(1397,`tr`,14)(1398,`td`,15)(1399,`div`,23)(1400,`span`,24),cN(1401,` p-remove-initial-filter`),Gl(1402,`br`),ag()()(),Tl(1403,`td`,19)(1404,`code`,26),cN(1405,`boolean`),ag()(),Tl(1406,`td`,21)(1407,`p`)(1408,`code`),cN(1409,`false`),ag()()(),Tl(1410,`td`,22)(1411,`em`)(1412,`strong`),cN(1413,`(opcional)`),ag()(),Tl(1414,`p`),cN(1415,`Define se o filtro inicial será removido no primeiro clique do campo.`),ag(),Tl(1416,`p`),cN(1417,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),ag()()(),Tl(1418,`tr`,14)(1419,`td`,15)(1420,`div`,23)(1421,`span`,24),cN(1422,` p-required`),Gl(1423,`br`),ag()()(),Tl(1424,`td`,19)(1425,`code`,26),cN(1426,`boolean`),ag()(),Tl(1427,`td`,21)(1428,`p`)(1429,`code`),cN(1430,`false`),ag()()(),Tl(1431,`td`,22)(1432,`em`)(1433,`strong`),cN(1434,`(opcional)`),ag()(),Tl(1435,`p`),cN(1436,`Define que o campo será obrigatório.`),ag()()(),Tl(1437,`tr`,14)(1438,`td`,15)(1439,`div`,23)(1440,`span`,24),cN(1441,` p-show-required`),Gl(1442,`br`),ag()()(),Tl(1443,`td`,19)(1444,`code`,26),cN(1445,`boolean`),ag()(),Tl(1446,`td`,21),cN(1447,`-`),ag(),Tl(1448,`td`,22)(1449,`p`),cN(1450,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1451,`blockquote`)(1452,`p`),cN(1453,`Não será exibida a indicação se:`),ag()(),Tl(1454,`ul`)(1455,`li`),cN(1456,`Não possuir `),Tl(1457,`code`),cN(1458,`p-help`),ag(),cN(1459,` e/ou `),Tl(1460,`code`),cN(1461,`p-label`),ag(),cN(1462,`.`),ag()()()(),Tl(1463,`tr`,14)(1464,`td`,15)(1465,`div`,23)(1466,`span`,24),cN(1467,` p-size`),Gl(1468,`br`),ag()()(),Tl(1469,`td`,19)(1470,`code`,25),cN(1471,`string`),ag()(),Tl(1472,`td`,21)(1473,`p`)(1474,`code`),cN(1475,`medium`),ag()()(),Tl(1476,`td`,22)(1477,`em`)(1478,`strong`),cN(1479,`(opcional)`),ag()(),Tl(1480,`p`),cN(1481,`Define o tamanho do componente:`),ag(),Tl(1482,`ul`)(1483,`li`)(1484,`code`),cN(1485,`small`),ag(),cN(1486,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1487,`li`)(1488,`code`),cN(1489,`medium`),ag(),cN(1490,`: altura do input como 44px.`),ag()(),Tl(1491,`blockquote`)(1492,`p`),cN(1493,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1494,`code`),cN(1495,`medium`),ag(),cN(1496,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1497,`a`,42),cN(1498,`po-theme`),ag(),cN(1499,`.`),ag()()()(),Tl(1500,`tr`,14)(1501,`td`,15)(1502,`div`,23)(1503,`span`,24),cN(1504,` p-sort`),Gl(1505,`br`),ag()()(),Tl(1506,`td`,19)(1507,`code`,26),cN(1508,`boolean`),ag()(),Tl(1509,`td`,21),cN(1510,`-`),ag(),Tl(1511,`td`,22)(1512,`p`),cN(1513,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),ag()()()(),Tl(1514,`h3`,10),cN(1515,`Métodos`),ag(),Tl(1516,`table`,43)(1517,`tr`,14)(1518,`th`,44)(1519,`div`,23)(1520,`h4`)(1521,`span`,24),cN(1522,` focus `),ag()()()()(),Tl(1523,`tr`,22)(1524,`td`,22)(1525,`p`),cN(1526,`Função que atribui foco ao componente.`),ag(),Tl(1527,`p`),cN(1528,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1529,`pre`)(1530,`code`),cN(1531,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),ag()()()()(),Gl(1532,`br`),Tl(1533,`table`,43)(1534,`tr`,14)(1535,`th`,44)(1536,`div`,23)(1537,`h4`)(1538,`span`,24),cN(1539,` showAdditionalHelp `),ag()()()()(),Tl(1540,`tr`,22)(1541,`td`,22)(1542,`p`),cN(1543,`Método que exibe `),Tl(1544,`code`),cN(1545,`p-helper`),ag(),cN(1546,` ou executa a ação definida em `),Tl(1547,`code`),cN(1548,`p-helper{eventOnClick}`),ag(),cN(1549,` ou em `),Tl(1550,`code`),cN(1551,`p-additionalHelp`),ag(),cN(1552,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1553,`code`),cN(1554,`p-keydown`),ag(),cN(1555,`.`),ag(),Tl(1556,`blockquote`)(1557,`p`),cN(1558,`Exibe ou oculta o conteúdo do componente `),Tl(1559,`code`),cN(1560,`po-helper`),ag(),cN(1561,` quando o componente estiver com foco.`),ag()(),Tl(1562,`pre`)(1563,`code`),cN(1564,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),ag()(),Tl(1565,`pre`)(1566,`code`),cN(1567,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1568,`br`),Tl(1569,`h3`),cN(1570,`Interfaces`),ag(),Tl(1571,`h4`,45)(1572,`code`,5),cN(1573,`PoComboFilter`),ag()(),Tl(1574,`div`,2)(1575,`p`),cN(1576,`Interface para os serviços que serão utilizados no po-combo.`),ag()(),Tl(1577,`h4`,10),cN(1578,`Métodos`),ag(),Tl(1579,`table`,43)(1580,`tr`,14)(1581,`th`,44)(1582,`div`,23)(1583,`h4`)(1584,`span`,24),cN(1585,` getFilteredData `),ag()()()()(),Tl(1586,`tr`,22)(1587,`td`,22)(1588,`p`),cN(1589,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),ag()()()(),Tl(1590,`h5`)(1591,`b`),cN(1592,`Parâmetros`),ag()(),Tl(1593,`table`,11)(1594,`tr`,12)(1595,`th`,13),cN(1596,`Nome`),ag(),Tl(1597,`th`,13),cN(1598,`Tipo`),ag(),Tl(1599,`th`,13),cN(1600,`Descrição`),ag()(),Tl(1601,`tr`,14)(1602,`td`,15),cN(1603,` params`),ag(),Tl(1604,`td`,19)(1605,`code`,46),cN(1606,` any `),ag()(),Tl(1607,`td`,22)(1608,`p`),cN(1609,`Objeto contendo a propriedade e o valor responsável por realizar o filtro.`),ag()()(),Tl(1610,`tr`,14)(1611,`td`,15),cN(1612,` filterParams`),ag(),Tl(1613,`td`,19)(1614,`code`,46),cN(1615,` any `),ag()(),Tl(1616,`td`,22)(1617,`p`),cN(1618,`Valor informado através da propriedade `),Tl(1619,`code`),cN(1620,`p-filter-params`),ag(),cN(1621,`.`),ag()()()(),Gl(1622,`br`),Tl(1623,`table`,43)(1624,`tr`,14)(1625,`th`,44)(1626,`div`,23)(1627,`h4`)(1628,`span`,24),cN(1629,` getObjectByValue `),ag()()()()(),Tl(1630,`tr`,22)(1631,`td`,22)(1632,`p`),cN(1633,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),ag()()()(),Tl(1634,`h5`)(1635,`b`),cN(1636,`Parâmetros`),ag()(),Tl(1637,`table`,11)(1638,`tr`,12)(1639,`th`,13),cN(1640,`Nome`),ag(),Tl(1641,`th`,13),cN(1642,`Tipo`),ag(),Tl(1643,`th`,13),cN(1644,`Descrição`),ag()(),Tl(1645,`tr`,14)(1646,`td`,15),cN(1647,` value`),ag(),Tl(1648,`td`,19)(1649,`code`,25),cN(1650,` string `),ag(),Tl(1651,`code`,27),cN(1652,` number `),ag()(),Tl(1653,`td`,22)(1654,`p`),cN(1655,`Valor responsável por realizar a busca de um único objeto.`),ag()()(),Tl(1656,`tr`,14)(1657,`td`,15),cN(1658,` filterParams`),ag(),Tl(1659,`td`,19)(1660,`code`,46),cN(1661,` any `),ag()(),Tl(1662,`td`,22)(1663,`p`),cN(1664,`Valor informado através da propriedade `),Tl(1665,`code`),cN(1666,`p-filter-params`),ag(),cN(1667,`.`),ag()()()(),Gl(1668,`br`),Tl(1669,`h4`,45)(1670,`code`,5),cN(1671,`PoComboLiterals`),ag()(),Tl(1672,`div`,2)(1673,`p`),cN(1674,`Interface para definição das literais usadas no `),Tl(1675,`code`),cN(1676,`po-combo`),ag(),cN(1677,`.`),ag()(),Tl(1678,`h4`,10),cN(1679,`Propriedades`),ag(),Tl(1680,`table`,11)(1681,`tr`,12)(1682,`th`,13),cN(1683,`Nome`),ag(),Tl(1684,`th`,13),cN(1685,`Tipo`),ag(),Tl(1686,`th`,13),cN(1687,`Descrição`),ag()(),Tl(1688,`tr`,14)(1689,`td`,15)(1690,`div`,23)(1691,`span`,24),cN(1692,` chooseOption`),Gl(1693,`br`),ag()()(),Tl(1694,`td`,19)(1695,`code`,25),cN(1696,`string`),ag()(),Tl(1697,`td`,22)(1698,`em`)(1699,`strong`),cN(1700,`(opcional)`),ag()(),Tl(1701,`p`),cN(1702,`Texto exibido quando o combo estiver vazio.`),ag()()(),Tl(1703,`tr`,14)(1704,`td`,15)(1705,`div`,23)(1706,`span`,24),cN(1707,` clean`),Gl(1708,`br`),ag()()(),Tl(1709,`td`,19)(1710,`code`,25),cN(1711,`string`),ag()(),Tl(1712,`td`,22)(1713,`em`)(1714,`strong`),cN(1715,`(opcional)`),ag()(),Tl(1716,`p`),cN(1717,`Texto do aria-label do botão de limpar`),ag()()(),Tl(1718,`tr`,14)(1719,`td`,15)(1720,`div`,23)(1721,`span`,24),cN(1722,` noData`),Gl(1723,`br`),ag()()(),Tl(1724,`td`,19)(1725,`code`,25),cN(1726,`string`),ag()(),Tl(1727,`td`,22)(1728,`em`)(1729,`strong`),cN(1730,`(opcional)`),ag()(),Tl(1731,`p`),cN(1732,`Texto exibido quando não houver itens na lista ou se, a pesquisa do filtro não retornar nenhum item.`),ag()()()(),Tl(1733,`h4`,45)(1734,`code`,5),cN(1735,`PoComboOptionGroup`),ag()(),Tl(1736,`div`,2)(1737,`p`),cN(1738,`Interface dos agrupamentos da coleção que será exibida no dropdown do `),Tl(1739,`code`),cN(1740,`po-combo`),ag(),cN(1741,`.`),ag()(),Tl(1742,`h4`,10),cN(1743,`Propriedades`),ag(),Tl(1744,`table`,11)(1745,`tr`,12)(1746,`th`,13),cN(1747,`Nome`),ag(),Tl(1748,`th`,13),cN(1749,`Tipo`),ag(),Tl(1750,`th`,13),cN(1751,`Descrição`),ag()(),Tl(1752,`tr`,14)(1753,`td`,15)(1754,`div`,23)(1755,`span`,24),cN(1756,` label`),Gl(1757,`br`),ag()()(),Tl(1758,`td`,19)(1759,`code`,25),cN(1760,`string`),ag()(),Tl(1761,`td`,22)(1762,`p`),cN(1763,`Título para cada grupo de opções.`),ag(),Tl(1764,`p`),cN(1765,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),ag()()(),Tl(1766,`tr`,14)(1767,`td`,15)(1768,`div`,23)(1769,`span`,24),cN(1770,` options`),Gl(1771,`br`),ag()()(),Tl(1772,`td`,19)(1773,`code`,47),cN(1774,`Array<PoComboOption>`),ag()(),Tl(1775,`td`,22)(1776,`p`),cN(1777,`Lista de itens a serem exibidos.`),ag()()()(),Tl(1778,`h4`,45)(1779,`code`,5),cN(1780,`PoComboOption`),ag()(),Tl(1781,`div`,2)(1782,`p`),cN(1783,`Interface que define as opções que serão exibidas na lista do `),Tl(1784,`code`),cN(1785,`po-combo`),ag(),cN(1786,`.`),ag()(),Tl(1787,`h4`,10),cN(1788,`Propriedades`),ag(),Tl(1789,`table`,11)(1790,`tr`,12)(1791,`th`,13),cN(1792,`Nome`),ag(),Tl(1793,`th`,13),cN(1794,`Tipo`),ag(),Tl(1795,`th`,13),cN(1796,`Descrição`),ag()(),Tl(1797,`tr`,14)(1798,`td`,15)(1799,`div`,23)(1800,`span`,24),cN(1801,` label`),Gl(1802,`br`),ag()()(),Tl(1803,`td`,19)(1804,`code`,25),cN(1805,`string`),ag()(),Tl(1806,`td`,22)(1807,`em`)(1808,`strong`),cN(1809,`(opcional)`),ag()(),Tl(1810,`p`),cN(1811,`Descrição exibida nas opções da lista.`),ag(),Tl(1812,`blockquote`)(1813,`p`),cN(1814,`Caso não seja definida será assumido o valor definido na propriedade `),Tl(1815,`code`),cN(1816,`value`),ag(),cN(1817,`.`),ag()()()(),Tl(1818,`tr`,14)(1819,`td`,15)(1820,`div`,23)(1821,`span`,24),cN(1822,` value`),Gl(1823,`br`),ag()()(),Tl(1824,`td`,19)(1825,`code`,25),cN(1826,`string `),ag(),Tl(1827,`code`,27),cN(1828,` number`),ag()(),Tl(1829,`td`,22)(1830,`p`),cN(1831,`Valor do objeto que será atribuído ao `),Tl(1832,`em`),cN(1833,`model`),ag(),cN(1834,`.`),ag()()()(),Tl(1835,`h3`),cN(1836,`Enums`),ag(),Tl(1837,`h4`,4)(1838,`code`,5),cN(1839,`PoComboFilterMode`),ag()(),Tl(1840,`div`,2)(1841,`p`),cN(1842,`Define o tipo de busca usado no po-combo.`),ag()(),Tl(1843,`h4`,10),cN(1844,`Propriedades`),ag(),Tl(1845,`table`,11)(1846,`tr`,12)(1847,`th`,13),cN(1848,`Nome`),ag(),Tl(1849,`th`,13),cN(1850,`Descrição`),ag()(),Tl(1851,`tr`,14)(1852,`td`,15)(1853,`div`,23)(1854,`span`,24),cN(1855,` startsWith`),Gl(1856,`br`),ag()()(),Tl(1857,`td`,22)(1858,`p`),cN(1859,`Verifica se o texto `),Tl(1860,`em`),cN(1861,`inicia`),ag(),cN(1862,` com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado.`),ag()()(),Tl(1863,`tr`,14)(1864,`td`,15)(1865,`div`,23)(1866,`span`,24),cN(1867,` contains`),Gl(1868,`br`),ag()()(),Tl(1869,`td`,22)(1870,`p`),cN(1871,`Verifica se o texto `),Tl(1872,`em`),cN(1873,`contém`),ag(),cN(1874,` o valor pesquisado.`),ag()()(),Tl(1875,`tr`,14)(1876,`td`,15)(1877,`div`,23)(1878,`span`,24),cN(1879,` endsWith`),Gl(1880,`br`),ag()()(),Tl(1881,`td`,22)(1882,`p`),cN(1883,`Verifica se o texto `),Tl(1884,`em`),cN(1885,`finaliza`),ag(),cN(1886,` com o valor pesquisado.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var zt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:13,vars:4,consts:[[`p-title`,`Combo`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht$1(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-combo-doc`),ag(),Tl(4,`po-tab`,3),ht$1(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-combo-basic-view`)(6,`sample-po-combo-labs-view`)(7,`sample-po-combo-scheduling-view`)(8,`sample-po-combo-transfer-view`)(9,`sample-po-combo-heroes-view`)(10,`sample-po-combo-heroes-reactive-form-view`)(11,`sample-po-combo-infinity-scroll-view`)(12,`sample-po-combo-hotels-view`),ag()()()),p&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Ie,je,Re,Qe,Je,Xe,$e,tt,ot],encapsulation:2,changeDetection:1})}return a})()}];var it=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(zt),bL]})}return a})();var cn=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,it]})}return a})();export{cn as DocPoComboModule};