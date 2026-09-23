import{$r as Vx,Br as TN,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,Lr as RN,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ea as p0,er as FN,ga as w,kr as PN,l as ar,la as tP,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var Se=()=>({value:`1`,label:`Option 1`});var fe=()=>({value:`2`,label:`Option 2`});var Ce=(a,ge)=>[a,ge];var de=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&ql(0,`po-checkbox-group`,0),p&2&&cw(`p-options`,RN(3,Ce,TN(1,Se),TN(2,fe)))},dependencies:[G4],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Checkbox Group Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-checkbox-group-basic`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let s=Vx();Ml(0,`po-checkbox-group`,2),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.checkboxGroup,l)||(n.checkboxGroup=l),Jy(l)}),ht(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,3),ql(3,`po-info`,4),PN(4,`json`),ql(5,`po-info`,5),lg(),ql(6,`po-divider`),Ml(7,`form`,null,0)(9,`po-input`,6),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.option.value,l)||(n.option.value=l),Jy(l)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.option.label,l)||(n.option.label=l),Jy(l)}),lg(),f0(),Ml(11,`po-switch`,8),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.option.disabled,l)||(n.option.disabled=l),Jy(l)}),lg(),f0(),Ml(12,`div`,3)(13,`po-button`,9),ht(`p-click`,function(){return n.addOption()}),lg()()(),ql(14,`po-divider`),Ml(15,`form`,null,1)(17,`po-input`,10),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.label,l)||(n.label=l),Jy(l)}),lg(),f0(),Ml(18,`po-input`,11),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.help,l)||(n.help=l),Jy(l)}),lg(),f0(),Ml(19,`po-input`,12),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.helperText,l)||(n.helperText=l),Jy(l)}),lg(),f0(),Ml(20,`po-input`,13),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Jy(l)}),lg(),f0(),Ml(21,`po-checkbox-group`,14),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.properties,l)||(n.properties=l),Jy(l)}),lg(),f0(),Ml(22,`po-radio-group`,15),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.columns,l)||(n.columns=l),Jy(l)}),lg(),f0(),Ml(23,`po-radio-group`,16),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.size,l)||(n.size=l),Jy(l)}),lg(),f0(),Ml(24,`div`,3)(25,`po-button`,17),ht(`p-click`,function(){return n.restore()}),lg()()()}if(p&2){let s=Yx(8);Tw(`ngModel`,n.checkboxGroup),cw(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),p0(),Up(3),cw(`p-value`,FN(4,32,n.checkboxGroup)),Up(2),cw(`p-value`,n.event),Up(4),Tw(`ngModel`,n.option.value),p0(),Up(),Tw(`ngModel`,n.option.label),p0(),Up(),Tw(`ngModel`,n.option.disabled),p0(),Up(2),cw(`p-disabled`,s.invalid),Up(4),Tw(`ngModel`,n.label),p0(),Up(),Tw(`ngModel`,n.help),p0(),Up(),Tw(`ngModel`,n.helperText),p0(),Up(),Tw(`ngModel`,n.fieldErrorMessage),p0(),Up(),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0(),Up(),Tw(`ngModel`,n.columns),cw(`p-options`,n.columnOptions),p0(),Up(),Tw(`ngModel`,n.size),cw(`p-options`,n.sizeOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,J4,kbe,tP],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Checkbox Group Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  helperText: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
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
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-checkbox-group-labs`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{poNotification=f(Eu);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let s=Vx();Ml(0,`div`,1),mN(1,`Password Rules`),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,2),ql(6,`po-checkbox-group`,3),lg(),ql(7,`po-divider`),Ml(8,`div`,2),ql(9,`po-checkbox-group`,4),lg(),ql(10,`po-divider`),Ml(11,`div`,2)(12,`po-switch`,5),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.expiration,l)||(n.expiration=l),Jy(l)}),lg(),f0(),ql(13,`po-number`,6),lg(),Ml(14,`div`,2)(15,`po-switch`,7),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.attempts,l)||(n.attempts=l),Jy(l)}),lg(),f0(),Ml(16,`po-number`,8),Mw(`ngModelChange`,function(l){return Qy(s),yN(n.maxAttempts,l)||(n.maxAttempts=l),Jy(l)}),lg(),f0(),lg(),Ml(17,`div`,2)(18,`po-button`,9),ht(`p-click`,function(){return n.confirm()}),lg()()()}p&2&&(Up(6),cw(`p-options`,n.systemOptions),Up(3),cw(`p-options`,n.auditOptions),Up(3),Tw(`ngModel`,n.expiration),p0(),Up(),cw(`p-disabled`,!n.expiration),Up(2),Tw(`ngModel`,n.attempts),p0(),Up(),Tw(`ngModel`,n.maxAttempts),cw(`p-disabled`,!n.attempts),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,xbe,J4],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Checkbox Group – Security policy`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-font-subtitle">Password Rules</div>

<po-divider />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  private poNotification = inject(PoNotificationService);

  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-checkbox-group-password-policy`),lg(),ql(23,`hr`)),p&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(p,n){p&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoCheckboxGroupComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O componente `),Ml(24,`code`),mN(25,`po-checkbox-group`),lg(),mN(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),lg(),Ml(27,`blockquote`)(28,`p`),mN(29,`Para seleção única, utilize o `),Ml(30,`a`,6)(31,`strong`),mN(32,`PO Radio Group`),lg()(),mN(33,`.`),lg()(),Ml(34,`p`),mN(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),lg(),Ml(36,`pre`)(37,`code`),mN(38,`favorites = ['PO', 'Angular'];
`),lg()(),Ml(39,`p`),mN(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Ml(41,`code`),mN(42,`null`),lg(),mN(43,`), ou seja, nem marcado (`),Ml(44,`code`),mN(45,`true`),lg(),mN(46,`) e nem desmarcado (`),Ml(47,`code`),mN(48,`false`),lg(),mN(49,`),
deve setar a propriedade `),Ml(50,`code`),mN(51,`p-indeterminate`),lg(),mN(52,` como `),Ml(53,`code`),mN(54,`true`),lg(),mN(55,`.`),lg(),Ml(56,`p`),mN(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),lg(),Ml(58,`pre`)(59,`code`),mN(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),lg()()(),Ml(61,`div`,7)(62,`h4`,8),mN(63,`Seletor`),lg(),Ml(64,`pre`,9),mN(65,`<po-checkbox-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),lg()(),Ml(66,`h4`,10),mN(67,`Propriedades`),lg(),Ml(68,`table`,11)(69,`tr`,12)(70,`th`,13),mN(71,`Nome`),lg(),Ml(72,`th`,13),mN(73,`Tipo`),lg(),Ml(74,`th`,13),mN(75,`Padrão`),lg(),Ml(76,`th`,13),mN(77,`Descrição`),lg()(),Ml(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),mN(82,` (p-additional-help)`),ql(83,`br`),lg()(),Ml(84,`div`,18),mN(85,`Deprecated`),lg()(),Ml(86,`td`,19)(87,`code`,20),mN(88,`EventEmitter`),lg()(),Ml(89,`td`,21),mN(90,`-`),lg(),Ml(91,`td`,22)(92,`em`)(93,`strong`),mN(94,`(opcional)`),lg()(),Ml(95,`p`),mN(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(97,`blockquote`)(98,`p`),mN(99,`Essa propriedade está `),Ml(100,`strong`),mN(101,`depreciada`),lg(),mN(102,` e será removida na versão `),Ml(103,`code`),mN(104,`23.x.x`),lg(),mN(105,`. Recomendamos utilizar a propriedade `),Ml(106,`code`),mN(107,`p-helper`),lg(),mN(108,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(109,`tr`,14)(110,`td`,15)(111,`div`,23)(112,`span`,24),mN(113,` p-additional-help-tooltip`),ql(114,`br`),lg()(),Ml(115,`div`,18),mN(116,`Deprecated`),lg()(),Ml(117,`td`,19)(118,`code`,25),mN(119,`string`),lg()(),Ml(120,`td`,21),mN(121,`-`),lg(),Ml(122,`td`,22)(123,`em`)(124,`strong`),mN(125,`(opcional)`),lg()(),Ml(126,`p`),mN(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(128,`code`),mN(129,`po-helper`),lg(),mN(130,`.
`),Ml(131,`strong`),mN(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(133,`blockquote`)(134,`p`),mN(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(136,`blockquote`)(137,`p`),mN(138,`Essa propriedade está `),Ml(139,`strong`),mN(140,`depreciada`),lg(),mN(141,` e será removida na versão `),Ml(142,`code`),mN(143,`23.x.x`),lg(),mN(144,`. Recomendamos utilizar a propriedade `),Ml(145,`code`),mN(146,`p-helper`),lg(),mN(147,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(148,`tr`,14)(149,`td`,15)(150,`div`,23)(151,`span`,24),mN(152,` p-append-in-body`),ql(153,`br`),lg()()(),Ml(154,`td`,19)(155,`code`,26),mN(156,`boolean`),lg()(),Ml(157,`td`,21)(158,`p`)(159,`code`),mN(160,`false`),lg()()(),Ml(161,`td`,22)(162,`em`)(163,`strong`),mN(164,`(opcional)`),lg()(),Ml(165,`p`),mN(166,`Define que o popover (`),Ml(167,`code`),mN(168,`p-helper`),lg(),mN(169,` e/ou `),Ml(170,`code`),mN(171,`p-error-limit`),lg(),mN(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(173,`blockquote`)(174,`p`),mN(175,`Quando utilizado com `),Ml(176,`code`),mN(177,`p-helper`),lg(),mN(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(179,`tr`,14)(180,`td`,15)(181,`div`,23)(182,`span`,24),mN(183,` p-auto-focus`),ql(184,`br`),lg()()(),Ml(185,`td`,19)(186,`code`,26),mN(187,`boolean`),lg()(),Ml(188,`td`,21)(189,`p`)(190,`code`),mN(191,`false`),lg()()(),Ml(192,`td`,22)(193,`em`)(194,`strong`),mN(195,`(opcional)`),lg()(),Ml(196,`p`),mN(197,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(198,`blockquote`)(199,`p`),mN(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(201,`tr`,14)(202,`td`,15)(203,`div`,16)(204,`span`,17),mN(205,` (p-change)`),ql(206,`br`),lg()()(),Ml(207,`td`,19)(208,`code`,20),mN(209,`EventEmitter`),lg()(),Ml(210,`td`,21),mN(211,`-`),lg(),Ml(212,`td`,22)(213,`em`)(214,`strong`),mN(215,`(opcional)`),lg()(),Ml(216,`p`),mN(217,`Evento disparado ao alterar valor do campo`),lg()()(),Ml(218,`tr`,14)(219,`td`,15)(220,`div`,16)(221,`span`,17),mN(222,` (p-change-model)`),ql(223,`br`),lg()()(),Ml(224,`td`,19)(225,`code`,20),mN(226,`EventEmitter`),lg()(),Ml(227,`td`,21),mN(228,`-`),lg(),Ml(229,`td`,22)(230,`em`)(231,`strong`),mN(232,`(opcional)`),lg()(),Ml(233,`p`),mN(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(235,`code`),mN(236,`setValue`),lg(),mN(237,`, `),Ml(238,`code`),mN(239,`patchValue`),lg(),mN(240,`, carregamento assíncrono).`),lg(),Ml(241,`p`),mN(242,`Diferentemente do `),Ml(243,`code`),mN(244,`p-change`),lg(),mN(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(246,`code`),mN(247,`p-change-model`),lg(),mN(248,` cobre todos os cenários de alteração de valor.`),lg(),Ml(249,`p`),mN(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(251,`tr`,14)(252,`td`,15)(253,`div`,23)(254,`span`,24),mN(255,` p-columns`),ql(256,`br`),lg()()(),Ml(257,`td`,19)(258,`code`,27),mN(259,`number`),lg()(),Ml(260,`td`,21)(261,`p`)(262,`code`),mN(263,`2`),lg()()(),Ml(264,`td`,22)(265,`em`)(266,`strong`),mN(267,`(opcional)`),lg()(),Ml(268,`p`),mN(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),Ml(270,`em`),mN(271,`checkbox`),lg(),mN(272,`.`),lg(),Ml(273,`ul`)(274,`li`),mN(275,`É possível exibir as opções entre `),Ml(276,`code`),mN(277,`1`),lg(),mN(278,` e `),Ml(279,`code`),mN(280,`4`),lg(),mN(281,` colunas.`),lg(),Ml(282,`li`),mN(283,`Para resolução `),Ml(284,`code`),mN(285,`sm`),lg(),mN(286,` a colunagem invariavelmente passa para `),Ml(287,`code`),mN(288,`1`),lg(),mN(289,` coluna.`),lg(),Ml(290,`li`),mN(291,`Quando se trata de resolução `),Ml(292,`code`),mN(293,`md`),lg(),mN(294,` e o valor estabelecido para colunas for superior a `),Ml(295,`code`),mN(296,`2`),lg(),mN(297,`,
o `),Ml(298,`em`),mN(299,`grid system`),lg(),mN(300,` será composto por `),Ml(301,`code`),mN(302,`2`),lg(),mN(303,` colunas.`),lg(),Ml(304,`li`),mN(305,`Para evitar a quebra de linha, prefira a utilização de `),Ml(306,`code`),mN(307,`1`),lg(),mN(308,` coluna para opções com textos grandes.`),lg()()()(),Ml(309,`tr`,14)(310,`td`,15)(311,`div`,23)(312,`span`,24),mN(313,` p-compact-label`),ql(314,`br`),lg()()(),Ml(315,`td`,19)(316,`code`,26),mN(317,`boolean`),lg()(),Ml(318,`td`,21)(319,`p`)(320,`code`),mN(321,`false`),lg()()(),Ml(322,`td`,22)(323,`em`)(324,`strong`),mN(325,`(opcional)`),lg()(),Ml(326,`p`),mN(327,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(328,`p`),mN(329,`Quando habilitado (`),Ml(330,`code`),mN(331,`true`),lg(),mN(332,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(333,`ul`)(334,`li`)(335,`code`),mN(336,`po-label`),lg()(),Ml(337,`li`)(338,`code`),mN(339,`p-requirement (showRequired)`),lg()(),Ml(340,`li`)(341,`code`),mN(342,`po-helper`),lg()()(),Ml(343,`p`),mN(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(345,`p`),mN(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(347,`ul`)(348,`li`)(349,`code`),mN(350,`--field-container-title-justify`),lg()(),Ml(351,`li`)(352,`code`),mN(353,`--field-container-title-flex`),lg()()(),Ml(354,`p`),mN(355,`Exemplo:`),lg(),Ml(356,`pre`)(357,`code`),mN(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(359,`p`),mN(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),mN(365,` p-disabled`),ql(366,`br`),lg()()(),Ml(367,`td`,19)(368,`code`,26),mN(369,`boolean`),lg()(),Ml(370,`td`,21)(371,`p`)(372,`code`),mN(373,`false`),lg()()(),Ml(374,`td`,22)(375,`em`)(376,`strong`),mN(377,`(opcional)`),lg()(),Ml(378,`p`),mN(379,`Desabilita todos os itens do checkbox.`),lg()()(),Ml(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),mN(384,` p-error-limit`),ql(385,`br`),lg()()(),Ml(386,`td`,19)(387,`code`,26),mN(388,`boolean`),lg()(),Ml(389,`td`,21)(390,`p`)(391,`code`),mN(392,`false`),lg()()(),Ml(393,`td`,22)(394,`em`)(395,`strong`),mN(396,`(opcional)`),lg()(),Ml(397,`p`),mN(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(399,`blockquote`)(400,`p`),mN(401,`Caso essa propriedade seja definida como `),Ml(402,`code`),mN(403,`true`),lg(),mN(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(405,`tr`,14)(406,`td`,15)(407,`div`,23)(408,`span`,24),mN(409,` p-field-error-message`),ql(410,`br`),lg()()(),Ml(411,`td`,19)(412,`code`,25),mN(413,`string`),lg()(),Ml(414,`td`,21),mN(415,`-`),lg(),Ml(416,`td`,22)(417,`em`)(418,`strong`),mN(419,`(opcional)`),lg()(),Ml(420,`p`),mN(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),lg(),Ml(422,`blockquote`)(423,`p`),mN(424,`Necessário que a propriedade `),Ml(425,`code`),mN(426,`p-required`),lg(),mN(427,` esteja habilitada.`),lg()()()(),Ml(428,`tr`,14)(429,`td`,15)(430,`div`,23)(431,`span`,24),mN(432,` p-help`),ql(433,`br`),lg()()(),Ml(434,`td`,19)(435,`code`,25),mN(436,`string`),lg()(),Ml(437,`td`,21),mN(438,`-`),lg(),Ml(439,`td`,22)(440,`em`)(441,`strong`),mN(442,`(opcional)`),lg()(),Ml(443,`p`),mN(444,`Texto de apoio do campo`),lg()()(),Ml(445,`tr`,14)(446,`td`,15)(447,`div`,23)(448,`span`,24),mN(449,` p-indeterminate`),ql(450,`br`),lg()()(),Ml(451,`td`,19)(452,`code`,26),mN(453,`boolean`),lg()(),Ml(454,`td`,21)(455,`p`)(456,`code`),mN(457,`false`),lg()()(),Ml(458,`td`,22)(459,`em`)(460,`strong`),mN(461,`(opcional)`),lg()(),Ml(462,`p`),mN(463,`Caso exista a necessidade de usar o valor indeterminado (`),Ml(464,`code`),mN(465,`null`),lg(),mN(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Ml(467,`code`),mN(468,`p-indeterminate`),lg(),mN(469,` como `),Ml(470,`code`),mN(471,`true`),lg(),mN(472,`, por padrão essa propriedade vem desabilitada (`),Ml(473,`code`),mN(474,`false`),lg(),mN(475,`).`),lg(),Ml(476,`p`),mN(477,`Quando essa propriedade é setada como `),Ml(478,`code`),mN(479,`true`),lg(),mN(480,`, o `),Ml(481,`em`),mN(482,`po-checkbox-group`),lg(),mN(483,` passa a devolver um objeto completo para o
`),Ml(484,`code`),mN(485,`ngModel`),lg(),mN(486,`, diferente do array que contém apenas os valores selecionados.`),lg()()(),Ml(487,`tr`,14)(488,`td`,15)(489,`div`,16)(490,`span`,17),mN(491,` (p-keydown)`),ql(492,`br`),lg()()(),Ml(493,`td`,19)(494,`code`,20),mN(495,`EventEmitter`),lg()(),Ml(496,`td`,21),mN(497,`-`),lg(),Ml(498,`td`,22)(499,`em`)(500,`strong`),mN(501,`(opcional)`),lg()(),Ml(502,`p`),mN(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(504,`code`),mN(505,`KeyboardEvent`),lg(),mN(506,` com informações sobre a tecla.`),lg()()(),Ml(507,`tr`,14)(508,`td`,15)(509,`div`,23)(510,`span`,24),mN(511,` p-label`),ql(512,`br`),lg()()(),Ml(513,`td`,19)(514,`code`,25),mN(515,`string`),lg()(),Ml(516,`td`,21),mN(517,`-`),lg(),Ml(518,`td`,22)(519,`em`)(520,`strong`),mN(521,`(opcional)`),lg()(),Ml(522,`p`),mN(523,`Label do campo`),lg()()(),Ml(524,`tr`,14)(525,`td`,15)(526,`div`,23)(527,`span`,24),mN(528,` p-label-text-wrap`),ql(529,`br`),lg()()(),Ml(530,`td`,19)(531,`code`,26),mN(532,`boolean`),lg()(),Ml(533,`td`,21)(534,`p`)(535,`code`),mN(536,`false`),lg()()(),Ml(537,`td`,22)(538,`em`)(539,`strong`),mN(540,`(opcional)`),lg()(),Ml(541,`p`),mN(542,`Habilita a quebra automática do texto da propriedade `),Ml(543,`code`),mN(544,`p-label`),lg(),mN(545,`. Quando `),Ml(546,`code`),mN(547,`p-label-text-wrap`),lg(),mN(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(549,`tr`,14)(550,`td`,15)(551,`div`,23)(552,`span`,24),mN(553,` name`),ql(554,`br`),lg()()(),Ml(555,`td`,19)(556,`code`,25),mN(557,`string`),lg()(),Ml(558,`td`,21),mN(559,`-`),lg(),Ml(560,`td`,22)(561,`p`),mN(562,`Nome dos checkboxes`),lg()()(),Ml(563,`tr`,14)(564,`td`,15)(565,`div`,16)(566,`span`,17),mN(567,` (ngModelChange)`),ql(568,`br`),lg()()(),Ml(569,`td`,19)(570,`code`,20),mN(571,`EventEmitter`),lg()(),Ml(572,`td`,21),mN(573,`-`),lg(),Ml(574,`td`,22)(575,`em`)(576,`strong`),mN(577,`(opcional)`),lg()(),Ml(578,`p`),mN(579,`Função para atualizar o `),Ml(580,`code`),mN(581,`ngModel`),lg(),mN(582,` do componente, necessário quando não for utilizado dentro da tag form.`),lg(),Ml(583,`p`),mN(584,`Na versão 12.2.0 do Angular a verificação `),Ml(585,`code`),mN(586,`strictTemplates`),lg(),mN(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),lg(),Ml(588,`pre`)(589,`code`),mN(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),lg()()()(),Ml(591,`tr`,14)(592,`td`,15)(593,`div`,23)(594,`span`,24),mN(595,` p-optional`),ql(596,`br`),lg()()(),Ml(597,`td`,19)(598,`code`,26),mN(599,`boolean`),lg()(),Ml(600,`td`,21)(601,`p`)(602,`code`),mN(603,`false`),lg()()(),Ml(604,`td`,22)(605,`em`)(606,`strong`),mN(607,`(opcional)`),lg()(),Ml(608,`p`),mN(609,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(610,`blockquote`)(611,`p`),mN(612,`Não será exibida a indicação se:`),lg()(),Ml(613,`ul`)(614,`li`),mN(615,`O campo conter `),Ml(616,`code`),mN(617,`p-required`),lg(),mN(618,`;`),lg(),Ml(619,`li`),mN(620,`Não possuir `),Ml(621,`code`),mN(622,`p-help`),lg(),mN(623,` e/ou `),Ml(624,`code`),mN(625,`p-label`),lg(),mN(626,`.`),lg()()()(),Ml(627,`tr`,14)(628,`td`,15)(629,`div`,23)(630,`span`,24),mN(631,` p-options`),ql(632,`br`),lg()()(),Ml(633,`td`,19)(634,`code`,28),mN(635,`PoCheckboxGroupOption[]`),lg()(),Ml(636,`td`,21),mN(637,`-`),lg(),Ml(638,`td`,22)(639,`em`)(640,`strong`),mN(641,`(opcional)`),lg()(),Ml(642,`p`),mN(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),lg()()(),Ml(644,`tr`,14)(645,`td`,15)(646,`div`,23)(647,`span`,24),mN(648,` p-helper`),ql(649,`br`),lg()()(),Ml(650,`td`,19)(651,`code`,29),mN(652,`PoHelperOptions `),lg(),Ml(653,`code`,25),mN(654,` string`),lg()(),Ml(655,`td`,21),mN(656,`-`),lg(),Ml(657,`td`,22)(658,`em`)(659,`strong`),mN(660,`(opcional)`),lg()(),Ml(661,`p`),mN(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(663,`code`),mN(664,`p-label`),lg(),mN(665,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(666,`code`),mN(667,`p-label`),lg(),mN(668,`.`),lg(),Ml(669,`blockquote`)(670,`p`),mN(671,`Para mais informações acesse: `),Ml(672,`a`,30),mN(673,`https://po-ui.io/documentation/po-helper`),lg(),mN(674,`.`),lg()(),Ml(675,`blockquote`)(676,`p`),mN(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(678,`code`),mN(679,`p-additional-help-tooltip`),lg(),mN(680,` e `),Ml(681,`code`),mN(682,`p-additional-help`),lg(),mN(683,`) será ignorado.`),lg()()()(),Ml(684,`tr`,14)(685,`td`,15)(686,`div`,23)(687,`span`,24),mN(688,` p-required`),ql(689,`br`),lg()()(),Ml(690,`td`,19)(691,`code`,26),mN(692,`boolean`),lg()(),Ml(693,`td`,21)(694,`p`)(695,`code`),mN(696,`false`),lg()()(),Ml(697,`td`,22)(698,`em`)(699,`strong`),mN(700,`(opcional)`),lg()(),Ml(701,`p`),mN(702,`Define que o campo será obrigatório.`),lg()()(),Ml(703,`tr`,14)(704,`td`,15)(705,`div`,23)(706,`span`,24),mN(707,` p-show-required`),ql(708,`br`),lg()()(),Ml(709,`td`,19)(710,`code`,26),mN(711,`boolean`),lg()(),Ml(712,`td`,21),mN(713,`-`),lg(),Ml(714,`td`,22)(715,`p`),mN(716,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(717,`blockquote`)(718,`p`),mN(719,`Não será exibida a indicação se:`),lg()(),Ml(720,`ul`)(721,`li`),mN(722,`Não possuir `),Ml(723,`code`),mN(724,`p-help`),lg(),mN(725,` e/ou `),Ml(726,`code`),mN(727,`p-label`),lg(),mN(728,`.`),lg()()()(),Ml(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),mN(733,` p-size`),ql(734,`br`),lg()()(),Ml(735,`td`,19)(736,`code`,25),mN(737,`string`),lg()(),Ml(738,`td`,21)(739,`p`)(740,`code`),mN(741,`medium`),lg()()(),Ml(742,`td`,22)(743,`em`)(744,`strong`),mN(745,`(opcional)`),lg()(),Ml(746,`p`),mN(747,`Define o tamanho dos checkboxes do componente:`),lg(),Ml(748,`ul`)(749,`li`)(750,`code`),mN(751,`small`),lg(),mN(752,`: 16x16 (disponível apenas para acessibilidade AA).`),lg(),Ml(753,`li`)(754,`code`),mN(755,`medium`),lg(),mN(756,`: 24x24.`),lg()(),Ml(757,`blockquote`)(758,`p`),mN(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(760,`code`),mN(761,`medium`),lg(),mN(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(763,`a`,31),mN(764,`po-theme`),lg(),mN(765,`.`),lg()()()()(),Ml(766,`h3`,10),mN(767,`Métodos`),lg(),Ml(768,`table`,32)(769,`tr`,14)(770,`th`,33)(771,`div`,23)(772,`h4`)(773,`span`,24),mN(774,` focus `),lg()()()()(),Ml(775,`tr`,22)(776,`td`,22)(777,`p`),mN(778,`Função que atribui foco ao componente.`),lg(),Ml(779,`p`),mN(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(781,`pre`)(782,`code`),mN(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),lg()()()()(),ql(784,`br`),Ml(785,`table`,32)(786,`tr`,14)(787,`th`,33)(788,`div`,23)(789,`h4`)(790,`span`,24),mN(791,` showAdditionalHelp `),lg()()()()(),Ml(792,`tr`,22)(793,`td`,22)(794,`p`),mN(795,`Método que exibe `),Ml(796,`code`),mN(797,`p-helper`),lg(),mN(798,` ou executa a ação definida em `),Ml(799,`code`),mN(800,`p-helper{eventOnClick}`),lg(),mN(801,` ou em `),Ml(802,`code`),mN(803,`p-additionalHelp`),lg(),mN(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(805,`code`),mN(806,`p-keydown`),lg(),mN(807,`.`),lg(),Ml(808,`blockquote`)(809,`p`),mN(810,`Exibe ou oculta o conteúdo do componente `),Ml(811,`code`),mN(812,`po-helper`),lg(),mN(813,` quando o componente estiver com foco.`),lg()(),Ml(814,`pre`)(815,`code`),mN(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),lg()(),Ml(817,`pre`)(818,`code`),mN(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(820,`br`),Ml(821,`h3`),mN(822,`Interfaces`),lg(),Ml(823,`h4`,34)(824,`code`,5),mN(825,`PoCheckboxGroupOption`),lg()(),Ml(826,`div`,2)(827,`p`),mN(828,`Interface para as ações do componente po-checkbox-group.`),lg()(),Ml(829,`h4`,10),mN(830,`Propriedades`),lg(),Ml(831,`table`,11)(832,`tr`,12)(833,`th`,13),mN(834,`Nome`),lg(),Ml(835,`th`,13),mN(836,`Tipo`),lg(),Ml(837,`th`,13),mN(838,`Descrição`),lg()(),Ml(839,`tr`,14)(840,`td`,15)(841,`div`,23)(842,`span`,24),mN(843,` disabled`),ql(844,`br`),lg()()(),Ml(845,`td`,19)(846,`code`,26),mN(847,`boolean`),lg()(),Ml(848,`td`,22)(849,`em`)(850,`strong`),mN(851,`(opcional)`),lg()(),Ml(852,`p`),mN(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),lg(),Ml(854,`p`),mN(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),lg()()(),Ml(856,`tr`,14)(857,`td`,15)(858,`div`,23)(859,`span`,24),mN(860,` label`),ql(861,`br`),lg()()(),Ml(862,`td`,19)(863,`code`,25),mN(864,`string`),lg()(),Ml(865,`td`,22)(866,`p`),mN(867,`Texto exibido para o usuário ao lado do checkbox.`),lg()()(),Ml(868,`tr`,14)(869,`td`,15)(870,`div`,23)(871,`span`,24),mN(872,` value`),ql(873,`br`),lg()()(),Ml(874,`td`,19)(875,`code`,25),mN(876,`string`),lg()(),Ml(877,`td`,22)(878,`p`),mN(879,`Valor retornado no model.`),lg(),Ml(880,`p`),mN(881,`É possível usar os valores `),Ml(882,`code`),mN(883,`true`),lg(),mN(884,` e `),Ml(885,`code`),mN(886,`false`),lg(),mN(887,`, caso a propriedade `),Ml(888,`code`),mN(889,`p-indeterminate`),lg(),mN(890,` esteja setada como `),Ml(891,`code`),mN(892,`true`),lg(),mN(893,`
passa a aceitar `),Ml(894,`code`),mN(895,`null`),lg(),mN(896,` também, por padrão esse valor sempre será setado como `),Ml(897,`code`),mN(898,`false`),lg(),mN(899,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-checkbox-group-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-checkbox-group-basic-view`)(6,`sample-po-checkbox-group-labs-view`)(7,`sample-po-checkbox-group-password-policy-view`),lg()()()),p&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,me,ce,be,he],encapsulation:2,changeDetection:1})}return a})()}];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[NL.forChild(qe),NL]})}return a})();var pt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[ar,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};