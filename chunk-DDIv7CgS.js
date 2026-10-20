import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Ri as nu,Rt as _oe,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_a as yO,aa as v_,ai as b,ar as EK,b as A5,bi as ib,da as wO,dt as Sae,hr as Hk,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,or as EO,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Se=()=>({value:`1`,label:`Option 1`});var fe=()=>({value:`2`,label:`Option 2`});var Ce=(a,ge)=>[a,ge];var de=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&nu(0,`po-checkbox-group`,0),p&2&&jE(`p-options`,yO(3,Ce,gO(1,Se),gO(2,fe)))},dependencies:[m5],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Checkbox Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-group-basic`),wg(),nu(23,`hr`)),p&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ke,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let s=Sx();jc(0,`po-checkbox-group`,2),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.checkboxGroup,l)||(n.checkboxGroup=l),v_(l)}),mt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4),EO(4,`json`),nu(5,`po-info`,5),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`po-input`,6),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.option.value,l)||(n.option.value=l),v_(l)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.option.label,l)||(n.option.label=l),v_(l)}),wg(),jc(11,`po-switch`,8),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.option.disabled,l)||(n.option.disabled=l),v_(l)}),wg(),jc(12,`div`,3)(13,`po-button`,9),mt(`p-click`,function(){return n.addOption()}),wg()()(),nu(14,`po-divider`),jc(15,`form`,null,1)(17,`po-input`,10),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.label,l)||(n.label=l),v_(l)}),wg(),jc(18,`po-input`,11),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.help,l)||(n.help=l),v_(l)}),wg(),jc(19,`po-input`,12),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.helperText,l)||(n.helperText=l),v_(l)}),wg(),jc(20,`po-input`,13),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),v_(l)}),wg(),jc(21,`po-checkbox-group`,14),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.properties,l)||(n.properties=l),v_(l)}),wg(),jc(22,`po-radio-group`,15),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.columns,l)||(n.columns=l),v_(l)}),wg(),jc(23,`po-radio-group`,16),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.size,l)||(n.size=l),v_(l)}),wg(),jc(24,`div`,3)(25,`po-button`,17),mt(`p-click`,function(){return n.restore()}),wg()()()}if(p&2){let s=Fx(8);ib(`ngModel`,n.checkboxGroup),jE(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),t0(),rg(3),jE(`p-value`,wO(4,32,n.checkboxGroup)),rg(2),jE(`p-value`,n.event),rg(4),ib(`ngModel`,n.option.value),t0(),rg(),ib(`ngModel`,n.option.label),t0(),rg(),ib(`ngModel`,n.option.disabled),t0(),rg(2),jE(`p-disabled`,s.invalid),rg(4),ib(`ngModel`,n.label),t0(),rg(),ib(`ngModel`,n.help),t0(),rg(),ib(`ngModel`,n.helperText),t0(),rg(),ib(`ngModel`,n.fieldErrorMessage),t0(),rg(),ib(`ngModel`,n.properties),jE(`p-options`,n.propertiesOptions),t0(),rg(),ib(`ngModel`,n.columns),jE(`p-options`,n.columnOptions),t0(),rg(),ib(`ngModel`,n.size),jE(`p-options`,n.sizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,w5,_oe,Hk],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Checkbox Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-checkbox-group
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-group-labs`),wg(),nu(23,`hr`)),p&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{poNotification=p(zu);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let s=Sx();jc(0,`div`,1),iO(1,`Password Rules`),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,2),nu(6,`po-checkbox-group`,3),wg(),nu(7,`po-divider`),jc(8,`div`,2),nu(9,`po-checkbox-group`,4),wg(),nu(10,`po-divider`),jc(11,`div`,2)(12,`po-switch`,5),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.expiration,l)||(n.expiration=l),v_(l)}),wg(),nu(13,`po-number`,6),wg(),jc(14,`div`,2)(15,`po-switch`,7),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.attempts,l)||(n.attempts=l),v_(l)}),wg(),jc(16,`po-number`,8),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(n.maxAttempts,l)||(n.maxAttempts=l),v_(l)}),wg()(),jc(17,`div`,2)(18,`po-button`,9),mt(`p-click`,function(){return n.confirm()}),wg()()()}p&2&&(rg(6),jE(`p-options`,n.systemOptions),rg(3),jE(`p-options`,n.auditOptions),rg(3),ib(`ngModel`,n.expiration),t0(),rg(),jE(`p-disabled`,!n.expiration),rg(2),ib(`ngModel`,n.attempts),t0(),rg(),ib(`ngModel`,n.maxAttempts),jE(`p-disabled`,!n.attempts),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,doe,w5],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Checkbox Group – Security policy`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-group-password-policy`),wg(),nu(23,`hr`)),p&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(p,n){p&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoCheckboxGroupComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O componente `),jc(24,`code`),iO(25,`po-checkbox-group`),wg(),iO(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),wg(),jc(27,`blockquote`)(28,`p`),iO(29,`Para seleção única, utilize o `),jc(30,`a`,6)(31,`strong`),iO(32,`PO Radio Group`),wg()(),iO(33,`.`),wg()(),jc(34,`p`),iO(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),wg(),jc(36,`pre`)(37,`code`),iO(38,`favorites = ['PO', 'Angular'];
`),wg()(),jc(39,`p`),iO(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),jc(41,`code`),iO(42,`null`),wg(),iO(43,`), ou seja, nem marcado (`),jc(44,`code`),iO(45,`true`),wg(),iO(46,`) e nem desmarcado (`),jc(47,`code`),iO(48,`false`),wg(),iO(49,`),
deve setar a propriedade `),jc(50,`code`),iO(51,`p-indeterminate`),wg(),iO(52,` como `),jc(53,`code`),iO(54,`true`),wg(),iO(55,`.`),wg(),jc(56,`p`),iO(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),wg(),jc(58,`pre`)(59,`code`),iO(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),wg()()(),jc(61,`div`,7)(62,`h4`,8),iO(63,`Seletor`),wg(),jc(64,`pre`,9),iO(65,`<po-checkbox-group
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
`),wg()(),jc(66,`h4`,10),iO(67,`Propriedades`),wg(),jc(68,`table`,11)(69,`tr`,12)(70,`th`,13),iO(71,`Nome`),wg(),jc(72,`th`,13),iO(73,`Tipo`),wg(),jc(74,`th`,13),iO(75,`Padrão`),wg(),jc(76,`th`,13),iO(77,`Descrição`),wg()(),jc(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),iO(82,` (p-additional-help)`),nu(83,`br`),wg()(),jc(84,`div`,18),iO(85,`Deprecated`),wg()(),jc(86,`td`,19)(87,`code`,20),iO(88,`EventEmitter`),wg()(),jc(89,`td`,21),iO(90,`-`),wg(),jc(91,`td`,22)(92,`em`)(93,`strong`),iO(94,`(opcional)`),wg()(),jc(95,`p`),iO(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(97,`blockquote`)(98,`p`),iO(99,`Essa propriedade está `),jc(100,`strong`),iO(101,`depreciada`),wg(),iO(102,` e será removida na versão `),jc(103,`code`),iO(104,`23.x.x`),wg(),iO(105,`. Recomendamos utilizar a propriedade `),jc(106,`code`),iO(107,`p-helper`),wg(),iO(108,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(109,`tr`,14)(110,`td`,15)(111,`div`,23)(112,`span`,24),iO(113,` p-additional-help-tooltip`),nu(114,`br`),wg()(),jc(115,`div`,18),iO(116,`Deprecated`),wg()(),jc(117,`td`,19)(118,`code`,25),iO(119,`string`),wg()(),jc(120,`td`,21),iO(121,`-`),wg(),jc(122,`td`,22)(123,`em`)(124,`strong`),iO(125,`(opcional)`),wg()(),jc(126,`p`),iO(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(128,`code`),iO(129,`po-helper`),wg(),iO(130,`.
`),jc(131,`strong`),iO(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(133,`blockquote`)(134,`p`),iO(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(136,`blockquote`)(137,`p`),iO(138,`Essa propriedade está `),jc(139,`strong`),iO(140,`depreciada`),wg(),iO(141,` e será removida na versão `),jc(142,`code`),iO(143,`23.x.x`),wg(),iO(144,`. Recomendamos utilizar a propriedade `),jc(145,`code`),iO(146,`p-helper`),wg(),iO(147,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(148,`tr`,14)(149,`td`,15)(150,`div`,23)(151,`span`,24),iO(152,` p-append-in-body`),nu(153,`br`),wg()()(),jc(154,`td`,19)(155,`code`,26),iO(156,`boolean`),wg()(),jc(157,`td`,21)(158,`p`)(159,`code`),iO(160,`false`),wg()()(),jc(161,`td`,22)(162,`em`)(163,`strong`),iO(164,`(opcional)`),wg()(),jc(165,`p`),iO(166,`Define que o popover (`),jc(167,`code`),iO(168,`p-helper`),wg(),iO(169,` e/ou `),jc(170,`code`),iO(171,`p-error-limit`),wg(),iO(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(173,`blockquote`)(174,`p`),iO(175,`Quando utilizado com `),jc(176,`code`),iO(177,`p-helper`),wg(),iO(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(179,`tr`,14)(180,`td`,15)(181,`div`,23)(182,`span`,24),iO(183,` p-auto-focus`),nu(184,`br`),wg()()(),jc(185,`td`,19)(186,`code`,26),iO(187,`boolean`),wg()(),jc(188,`td`,21)(189,`p`)(190,`code`),iO(191,`false`),wg()()(),jc(192,`td`,22)(193,`em`)(194,`strong`),iO(195,`(opcional)`),wg()(),jc(196,`p`),iO(197,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(198,`blockquote`)(199,`p`),iO(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(201,`tr`,14)(202,`td`,15)(203,`div`,16)(204,`span`,17),iO(205,` (p-change)`),nu(206,`br`),wg()()(),jc(207,`td`,19)(208,`code`,20),iO(209,`EventEmitter`),wg()(),jc(210,`td`,21),iO(211,`-`),wg(),jc(212,`td`,22)(213,`em`)(214,`strong`),iO(215,`(opcional)`),wg()(),jc(216,`p`),iO(217,`Evento disparado ao alterar valor do campo`),wg()()(),jc(218,`tr`,14)(219,`td`,15)(220,`div`,16)(221,`span`,17),iO(222,` (p-change-model)`),nu(223,`br`),wg()()(),jc(224,`td`,19)(225,`code`,20),iO(226,`EventEmitter`),wg()(),jc(227,`td`,21),iO(228,`-`),wg(),jc(229,`td`,22)(230,`em`)(231,`strong`),iO(232,`(opcional)`),wg()(),jc(233,`p`),iO(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(235,`code`),iO(236,`setValue`),wg(),iO(237,`, `),jc(238,`code`),iO(239,`patchValue`),wg(),iO(240,`, carregamento assíncrono).`),wg(),jc(241,`p`),iO(242,`Diferentemente do `),jc(243,`code`),iO(244,`p-change`),wg(),iO(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(246,`code`),iO(247,`p-change-model`),wg(),iO(248,` cobre todos os cenários de alteração de valor.`),wg(),jc(249,`p`),iO(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(251,`tr`,14)(252,`td`,15)(253,`div`,23)(254,`span`,24),iO(255,` p-columns`),nu(256,`br`),wg()()(),jc(257,`td`,19)(258,`code`,27),iO(259,`number`),wg()(),jc(260,`td`,21)(261,`p`)(262,`code`),iO(263,`2`),wg()()(),jc(264,`td`,22)(265,`em`)(266,`strong`),iO(267,`(opcional)`),wg()(),jc(268,`p`),iO(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),jc(270,`em`),iO(271,`checkbox`),wg(),iO(272,`.`),wg(),jc(273,`ul`)(274,`li`),iO(275,`É possível exibir as opções entre `),jc(276,`code`),iO(277,`1`),wg(),iO(278,` e `),jc(279,`code`),iO(280,`4`),wg(),iO(281,` colunas.`),wg(),jc(282,`li`),iO(283,`Para resolução `),jc(284,`code`),iO(285,`sm`),wg(),iO(286,` a colunagem invariavelmente passa para `),jc(287,`code`),iO(288,`1`),wg(),iO(289,` coluna.`),wg(),jc(290,`li`),iO(291,`Quando se trata de resolução `),jc(292,`code`),iO(293,`md`),wg(),iO(294,` e o valor estabelecido para colunas for superior a `),jc(295,`code`),iO(296,`2`),wg(),iO(297,`,
o `),jc(298,`em`),iO(299,`grid system`),wg(),iO(300,` será composto por `),jc(301,`code`),iO(302,`2`),wg(),iO(303,` colunas.`),wg(),jc(304,`li`),iO(305,`Para evitar a quebra de linha, prefira a utilização de `),jc(306,`code`),iO(307,`1`),wg(),iO(308,` coluna para opções com textos grandes.`),wg()()()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,23)(312,`span`,24),iO(313,` p-compact-label`),nu(314,`br`),wg()()(),jc(315,`td`,19)(316,`code`,26),iO(317,`boolean`),wg()(),jc(318,`td`,21)(319,`p`)(320,`code`),iO(321,`false`),wg()()(),jc(322,`td`,22)(323,`em`)(324,`strong`),iO(325,`(opcional)`),wg()(),jc(326,`p`),iO(327,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(328,`p`),iO(329,`Quando habilitado (`),jc(330,`code`),iO(331,`true`),wg(),iO(332,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(333,`ul`)(334,`li`)(335,`code`),iO(336,`po-label`),wg()(),jc(337,`li`)(338,`code`),iO(339,`p-requirement (showRequired)`),wg()(),jc(340,`li`)(341,`code`),iO(342,`po-helper`),wg()()(),jc(343,`p`),iO(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(345,`p`),iO(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(347,`ul`)(348,`li`)(349,`code`),iO(350,`--field-container-title-justify`),wg()(),jc(351,`li`)(352,`code`),iO(353,`--field-container-title-flex`),wg()()(),jc(354,`p`),iO(355,`Exemplo:`),wg(),jc(356,`pre`)(357,`code`),iO(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(359,`p`),iO(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),iO(365,` p-disabled`),nu(366,`br`),wg()()(),jc(367,`td`,19)(368,`code`,26),iO(369,`boolean`),wg()(),jc(370,`td`,21)(371,`p`)(372,`code`),iO(373,`false`),wg()()(),jc(374,`td`,22)(375,`em`)(376,`strong`),iO(377,`(opcional)`),wg()(),jc(378,`p`),iO(379,`Desabilita todos os itens do checkbox.`),wg()()(),jc(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),iO(384,` p-error-limit`),nu(385,`br`),wg()()(),jc(386,`td`,19)(387,`code`,26),iO(388,`boolean`),wg()(),jc(389,`td`,21)(390,`p`)(391,`code`),iO(392,`false`),wg()()(),jc(393,`td`,22)(394,`em`)(395,`strong`),iO(396,`(opcional)`),wg()(),jc(397,`p`),iO(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(399,`blockquote`)(400,`p`),iO(401,`Caso essa propriedade seja definida como `),jc(402,`code`),iO(403,`true`),wg(),iO(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(405,`tr`,14)(406,`td`,15)(407,`div`,23)(408,`span`,24),iO(409,` p-field-error-message`),nu(410,`br`),wg()()(),jc(411,`td`,19)(412,`code`,25),iO(413,`string`),wg()(),jc(414,`td`,21),iO(415,`-`),wg(),jc(416,`td`,22)(417,`em`)(418,`strong`),iO(419,`(opcional)`),wg()(),jc(420,`p`),iO(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(422,`blockquote`)(423,`p`),iO(424,`Necessário que a propriedade `),jc(425,`code`),iO(426,`p-required`),wg(),iO(427,` esteja habilitada.`),wg()()()(),jc(428,`tr`,14)(429,`td`,15)(430,`div`,23)(431,`span`,24),iO(432,` p-help`),nu(433,`br`),wg()()(),jc(434,`td`,19)(435,`code`,25),iO(436,`string`),wg()(),jc(437,`td`,21),iO(438,`-`),wg(),jc(439,`td`,22)(440,`em`)(441,`strong`),iO(442,`(opcional)`),wg()(),jc(443,`p`),iO(444,`Texto de apoio do campo`),wg()()(),jc(445,`tr`,14)(446,`td`,15)(447,`div`,23)(448,`span`,24),iO(449,` p-indeterminate`),nu(450,`br`),wg()()(),jc(451,`td`,19)(452,`code`,26),iO(453,`boolean`),wg()(),jc(454,`td`,21)(455,`p`)(456,`code`),iO(457,`false`),wg()()(),jc(458,`td`,22)(459,`em`)(460,`strong`),iO(461,`(opcional)`),wg()(),jc(462,`p`),iO(463,`Caso exista a necessidade de usar o valor indeterminado (`),jc(464,`code`),iO(465,`null`),wg(),iO(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),jc(467,`code`),iO(468,`p-indeterminate`),wg(),iO(469,` como `),jc(470,`code`),iO(471,`true`),wg(),iO(472,`, por padrão essa propriedade vem desabilitada (`),jc(473,`code`),iO(474,`false`),wg(),iO(475,`).`),wg(),jc(476,`p`),iO(477,`Quando essa propriedade é setada como `),jc(478,`code`),iO(479,`true`),wg(),iO(480,`, o `),jc(481,`em`),iO(482,`po-checkbox-group`),wg(),iO(483,` passa a devolver um objeto completo para o
`),jc(484,`code`),iO(485,`ngModel`),wg(),iO(486,`, diferente do array que contém apenas os valores selecionados.`),wg()()(),jc(487,`tr`,14)(488,`td`,15)(489,`div`,16)(490,`span`,17),iO(491,` (p-keydown)`),nu(492,`br`),wg()()(),jc(493,`td`,19)(494,`code`,20),iO(495,`EventEmitter`),wg()(),jc(496,`td`,21),iO(497,`-`),wg(),jc(498,`td`,22)(499,`em`)(500,`strong`),iO(501,`(opcional)`),wg()(),jc(502,`p`),iO(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(504,`code`),iO(505,`KeyboardEvent`),wg(),iO(506,` com informações sobre a tecla.`),wg()()(),jc(507,`tr`,14)(508,`td`,15)(509,`div`,23)(510,`span`,24),iO(511,` p-label`),nu(512,`br`),wg()()(),jc(513,`td`,19)(514,`code`,25),iO(515,`string`),wg()(),jc(516,`td`,21),iO(517,`-`),wg(),jc(518,`td`,22)(519,`em`)(520,`strong`),iO(521,`(opcional)`),wg()(),jc(522,`p`),iO(523,`Label do campo`),wg()()(),jc(524,`tr`,14)(525,`td`,15)(526,`div`,23)(527,`span`,24),iO(528,` p-label-text-wrap`),nu(529,`br`),wg()()(),jc(530,`td`,19)(531,`code`,26),iO(532,`boolean`),wg()(),jc(533,`td`,21)(534,`p`)(535,`code`),iO(536,`false`),wg()()(),jc(537,`td`,22)(538,`em`)(539,`strong`),iO(540,`(opcional)`),wg()(),jc(541,`p`),iO(542,`Habilita a quebra automática do texto da propriedade `),jc(543,`code`),iO(544,`p-label`),wg(),iO(545,`. Quando `),jc(546,`code`),iO(547,`p-label-text-wrap`),wg(),iO(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(549,`tr`,14)(550,`td`,15)(551,`div`,23)(552,`span`,24),iO(553,` name`),nu(554,`br`),wg()()(),jc(555,`td`,19)(556,`code`,25),iO(557,`string`),wg()(),jc(558,`td`,21),iO(559,`-`),wg(),jc(560,`td`,22)(561,`p`),iO(562,`Nome dos checkboxes`),wg()()(),jc(563,`tr`,14)(564,`td`,15)(565,`div`,16)(566,`span`,17),iO(567,` (ngModelChange)`),nu(568,`br`),wg()()(),jc(569,`td`,19)(570,`code`,20),iO(571,`EventEmitter`),wg()(),jc(572,`td`,21),iO(573,`-`),wg(),jc(574,`td`,22)(575,`em`)(576,`strong`),iO(577,`(opcional)`),wg()(),jc(578,`p`),iO(579,`Função para atualizar o `),jc(580,`code`),iO(581,`ngModel`),wg(),iO(582,` do componente, necessário quando não for utilizado dentro da tag form.`),wg(),jc(583,`p`),iO(584,`Na versão 12.2.0 do Angular a verificação `),jc(585,`code`),iO(586,`strictTemplates`),wg(),iO(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),wg(),jc(588,`pre`)(589,`code`),iO(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),wg()()()(),jc(591,`tr`,14)(592,`td`,15)(593,`div`,23)(594,`span`,24),iO(595,` p-optional`),nu(596,`br`),wg()()(),jc(597,`td`,19)(598,`code`,26),iO(599,`boolean`),wg()(),jc(600,`td`,21)(601,`p`)(602,`code`),iO(603,`false`),wg()()(),jc(604,`td`,22)(605,`em`)(606,`strong`),iO(607,`(opcional)`),wg()(),jc(608,`p`),iO(609,`Define se a indicação de campo opcional será exibida.`),wg(),jc(610,`blockquote`)(611,`p`),iO(612,`Não será exibida a indicação se:`),wg()(),jc(613,`ul`)(614,`li`),iO(615,`O campo conter `),jc(616,`code`),iO(617,`p-required`),wg(),iO(618,`;`),wg(),jc(619,`li`),iO(620,`Não possuir `),jc(621,`code`),iO(622,`p-help`),wg(),iO(623,` e/ou `),jc(624,`code`),iO(625,`p-label`),wg(),iO(626,`.`),wg()()()(),jc(627,`tr`,14)(628,`td`,15)(629,`div`,23)(630,`span`,24),iO(631,` p-options`),nu(632,`br`),wg()()(),jc(633,`td`,19)(634,`code`,28),iO(635,`PoCheckboxGroupOption[]`),wg()(),jc(636,`td`,21),iO(637,`-`),wg(),jc(638,`td`,22)(639,`em`)(640,`strong`),iO(641,`(opcional)`),wg()(),jc(642,`p`),iO(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),wg()()(),jc(644,`tr`,14)(645,`td`,15)(646,`div`,23)(647,`span`,24),iO(648,` p-helper`),nu(649,`br`),wg()()(),jc(650,`td`,19)(651,`code`,29),iO(652,`PoHelperOptions `),wg(),jc(653,`code`,25),iO(654,` string`),wg()(),jc(655,`td`,21),iO(656,`-`),wg(),jc(657,`td`,22)(658,`em`)(659,`strong`),iO(660,`(opcional)`),wg()(),jc(661,`p`),iO(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(663,`code`),iO(664,`p-label`),wg(),iO(665,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(666,`code`),iO(667,`p-label`),wg(),iO(668,`.`),wg(),jc(669,`blockquote`)(670,`p`),iO(671,`Para mais informações acesse: `),jc(672,`a`,30),iO(673,`https://po-ui.io/documentation/po-helper`),wg(),iO(674,`.`),wg()(),jc(675,`blockquote`)(676,`p`),iO(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(678,`code`),iO(679,`p-additional-help-tooltip`),wg(),iO(680,` e `),jc(681,`code`),iO(682,`p-additional-help`),wg(),iO(683,`) será ignorado.`),wg()()()(),jc(684,`tr`,14)(685,`td`,15)(686,`div`,23)(687,`span`,24),iO(688,` p-required`),nu(689,`br`),wg()()(),jc(690,`td`,19)(691,`code`,26),iO(692,`boolean`),wg()(),jc(693,`td`,21)(694,`p`)(695,`code`),iO(696,`false`),wg()()(),jc(697,`td`,22)(698,`em`)(699,`strong`),iO(700,`(opcional)`),wg()(),jc(701,`p`),iO(702,`Define que o campo será obrigatório.`),wg()()(),jc(703,`tr`,14)(704,`td`,15)(705,`div`,23)(706,`span`,24),iO(707,` p-show-required`),nu(708,`br`),wg()()(),jc(709,`td`,19)(710,`code`,26),iO(711,`boolean`),wg()(),jc(712,`td`,21),iO(713,`-`),wg(),jc(714,`td`,22)(715,`p`),iO(716,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(717,`blockquote`)(718,`p`),iO(719,`Não será exibida a indicação se:`),wg()(),jc(720,`ul`)(721,`li`),iO(722,`Não possuir `),jc(723,`code`),iO(724,`p-help`),wg(),iO(725,` e/ou `),jc(726,`code`),iO(727,`p-label`),wg(),iO(728,`.`),wg()()()(),jc(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),iO(733,` p-size`),nu(734,`br`),wg()()(),jc(735,`td`,19)(736,`code`,25),iO(737,`string`),wg()(),jc(738,`td`,21)(739,`p`)(740,`code`),iO(741,`medium`),wg()()(),jc(742,`td`,22)(743,`em`)(744,`strong`),iO(745,`(opcional)`),wg()(),jc(746,`p`),iO(747,`Define o tamanho dos checkboxes do componente:`),wg(),jc(748,`ul`)(749,`li`)(750,`code`),iO(751,`small`),wg(),iO(752,`: 16x16 (disponível apenas para acessibilidade AA).`),wg(),jc(753,`li`)(754,`code`),iO(755,`medium`),wg(),iO(756,`: 24x24.`),wg()(),jc(757,`blockquote`)(758,`p`),iO(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(760,`code`),iO(761,`medium`),wg(),iO(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(763,`a`,31),iO(764,`po-theme`),wg(),iO(765,`.`),wg()()()()(),jc(766,`h3`,10),iO(767,`Métodos`),wg(),jc(768,`table`,32)(769,`tr`,14)(770,`th`,33)(771,`div`,23)(772,`h4`)(773,`span`,24),iO(774,` focus `),wg()()()()(),jc(775,`tr`,22)(776,`td`,22)(777,`p`),iO(778,`Função que atribui foco ao componente.`),wg(),jc(779,`p`),iO(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(781,`pre`)(782,`code`),iO(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),wg()()()()(),nu(784,`br`),jc(785,`table`,32)(786,`tr`,14)(787,`th`,33)(788,`div`,23)(789,`h4`)(790,`span`,24),iO(791,` showAdditionalHelp `),wg()()()()(),jc(792,`tr`,22)(793,`td`,22)(794,`p`),iO(795,`Método que exibe `),jc(796,`code`),iO(797,`p-helper`),wg(),iO(798,` ou executa a ação definida em `),jc(799,`code`),iO(800,`p-helper{eventOnClick}`),wg(),iO(801,` ou em `),jc(802,`code`),iO(803,`p-additionalHelp`),wg(),iO(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(805,`code`),iO(806,`p-keydown`),wg(),iO(807,`.`),wg(),jc(808,`blockquote`)(809,`p`),iO(810,`Exibe ou oculta o conteúdo do componente `),jc(811,`code`),iO(812,`po-helper`),wg(),iO(813,` quando o componente estiver com foco.`),wg()(),jc(814,`pre`)(815,`code`),iO(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),wg()(),jc(817,`pre`)(818,`code`),iO(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(820,`br`),jc(821,`h3`),iO(822,`Interfaces`),wg(),jc(823,`h4`,34)(824,`code`,5),iO(825,`PoCheckboxGroupOption`),wg()(),jc(826,`div`,2)(827,`p`),iO(828,`Interface para as ações do componente po-checkbox-group.`),wg()(),jc(829,`h4`,10),iO(830,`Propriedades`),wg(),jc(831,`table`,11)(832,`tr`,12)(833,`th`,13),iO(834,`Nome`),wg(),jc(835,`th`,13),iO(836,`Tipo`),wg(),jc(837,`th`,13),iO(838,`Descrição`),wg()(),jc(839,`tr`,14)(840,`td`,15)(841,`div`,23)(842,`span`,24),iO(843,` disabled`),nu(844,`br`),wg()()(),jc(845,`td`,19)(846,`code`,26),iO(847,`boolean`),wg()(),jc(848,`td`,22)(849,`em`)(850,`strong`),iO(851,`(opcional)`),wg()(),jc(852,`p`),iO(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),wg(),jc(854,`p`),iO(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),wg()()(),jc(856,`tr`,14)(857,`td`,15)(858,`div`,23)(859,`span`,24),iO(860,` label`),nu(861,`br`),wg()()(),jc(862,`td`,19)(863,`code`,25),iO(864,`string`),wg()(),jc(865,`td`,22)(866,`p`),iO(867,`Texto exibido para o usuário ao lado do checkbox.`),wg()()(),jc(868,`tr`,14)(869,`td`,15)(870,`div`,23)(871,`span`,24),iO(872,` value`),nu(873,`br`),wg()()(),jc(874,`td`,19)(875,`code`,25),iO(876,`string`),wg()(),jc(877,`td`,22)(878,`p`),iO(879,`Valor retornado no model.`),wg(),jc(880,`p`),iO(881,`É possível usar os valores `),jc(882,`code`),iO(883,`true`),wg(),iO(884,` e `),jc(885,`code`),iO(886,`false`),wg(),iO(887,`, caso a propriedade `),jc(888,`code`),iO(889,`p-indeterminate`),wg(),iO(890,` esteja setada como `),jc(891,`code`),iO(892,`true`),wg(),iO(893,`
passa a aceitar `),jc(894,`code`),iO(895,`null`),wg(),iO(896,` também, por padrão esse valor sempre será setado como `),jc(897,`code`),iO(898,`false`),wg(),iO(899,`.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-checkbox-group-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-checkbox-group-basic-view`)(6,`sample-po-checkbox-group-labs-view`)(7,`sample-po-checkbox-group-password-policy-view`),wg()()()),p&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,me,ce,be,he],encapsulation:2,changeDetection:1})}return a})()}];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue$1({imports:[C1.forChild(qe),C1]})}return a})();var pt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue$1({imports:[Ta,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};