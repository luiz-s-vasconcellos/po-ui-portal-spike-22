import{$i as pt$1,$r as VN,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Ur as RN,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,ca as ue$1,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,i as _a,in as kte,k as D4,ki as he$1,kn as v4,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,ra as rk,rr as DN,si as aN,sr as FN,ua as ug,va as xN,wr as Kc,zi as kL}from"./main-EZZF3RMT.js";var Se=()=>({value:`1`,label:`Option 1`});var fe=()=>({value:`2`,label:`Option 2`});var Ce=(a,ge)=>[a,ge];var de=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&Kc(0,`po-checkbox-group`,0),p&2&&cE(`p-options`,xN(3,Ce,RN(1,Se),RN(2,fe)))},dependencies:[l4],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Checkbox Group Basic`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-checkbox-group-basic`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let s=Bx();Ac(0,`po-checkbox-group`,2),RE(`ngModelChange`,function(l){return Jv(s),DN(n.checkboxGroup,l)||(n.checkboxGroup=l),e_(l)}),pt$1(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,3),Kc(3,`po-info`,4),FN(4,`json`),Kc(5,`po-info`,5),ug(),Kc(6,`po-divider`),Ac(7,`form`,null,0)(9,`po-input`,6),RE(`ngModelChange`,function(l){return Jv(s),DN(n.option.value,l)||(n.option.value=l),e_(l)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(l){return Jv(s),DN(n.option.label,l)||(n.option.label=l),e_(l)}),ug(),p0(),Ac(11,`po-switch`,8),RE(`ngModelChange`,function(l){return Jv(s),DN(n.option.disabled,l)||(n.option.disabled=l),e_(l)}),ug(),p0(),Ac(12,`div`,3)(13,`po-button`,9),pt$1(`p-click`,function(){return n.addOption()}),ug()()(),Kc(14,`po-divider`),Ac(15,`form`,null,1)(17,`po-input`,10),RE(`ngModelChange`,function(l){return Jv(s),DN(n.label,l)||(n.label=l),e_(l)}),ug(),p0(),Ac(18,`po-input`,11),RE(`ngModelChange`,function(l){return Jv(s),DN(n.help,l)||(n.help=l),e_(l)}),ug(),p0(),Ac(19,`po-input`,12),RE(`ngModelChange`,function(l){return Jv(s),DN(n.helperText,l)||(n.helperText=l),e_(l)}),ug(),p0(),Ac(20,`po-input`,13),RE(`ngModelChange`,function(l){return Jv(s),DN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),e_(l)}),ug(),p0(),Ac(21,`po-checkbox-group`,14),RE(`ngModelChange`,function(l){return Jv(s),DN(n.properties,l)||(n.properties=l),e_(l)}),ug(),p0(),Ac(22,`po-radio-group`,15),RE(`ngModelChange`,function(l){return Jv(s),DN(n.columns,l)||(n.columns=l),e_(l)}),ug(),p0(),Ac(23,`po-radio-group`,16),RE(`ngModelChange`,function(l){return Jv(s),DN(n.size,l)||(n.size=l),e_(l)}),ug(),p0(),Ac(24,`div`,3)(25,`po-button`,17),pt$1(`p-click`,function(){return n.restore()}),ug()()()}if(p&2){let s=Zx(8);TE(`ngModel`,n.checkboxGroup),cE(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),m0(),Hp(3),cE(`p-value`,VN(4,32,n.checkboxGroup)),Hp(2),cE(`p-value`,n.event),Hp(4),TE(`ngModel`,n.option.value),m0(),Hp(),TE(`ngModel`,n.option.label),m0(),Hp(),TE(`ngModel`,n.option.disabled),m0(),Hp(2),cE(`p-disabled`,s.invalid),Hp(4),TE(`ngModel`,n.label),m0(),Hp(),TE(`ngModel`,n.help),m0(),Hp(),TE(`ngModel`,n.helperText),m0(),Hp(),TE(`ngModel`,n.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0(),Hp(),TE(`ngModel`,n.columns),cE(`p-options`,n.columnOptions),m0(),Hp(),TE(`ngModel`,n.size),cE(`p-options`,n.sizeOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,v4,hoe,rk],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Checkbox Group Labs`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-checkbox-group
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-checkbox-group-labs`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,se],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{poNotification=f(Ou);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let s=Bx();Ac(0,`div`,1),vN(1,`Password Rules`),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,2),Kc(6,`po-checkbox-group`,3),ug(),Kc(7,`po-divider`),Ac(8,`div`,2),Kc(9,`po-checkbox-group`,4),ug(),Kc(10,`po-divider`),Ac(11,`div`,2)(12,`po-switch`,5),RE(`ngModelChange`,function(l){return Jv(s),DN(n.expiration,l)||(n.expiration=l),e_(l)}),ug(),p0(),Kc(13,`po-number`,6),ug(),Ac(14,`div`,2)(15,`po-switch`,7),RE(`ngModelChange`,function(l){return Jv(s),DN(n.attempts,l)||(n.attempts=l),e_(l)}),ug(),p0(),Ac(16,`po-number`,8),RE(`ngModelChange`,function(l){return Jv(s),DN(n.maxAttempts,l)||(n.maxAttempts=l),e_(l)}),ug(),p0(),ug(),Ac(17,`div`,2)(18,`po-button`,9),pt$1(`p-click`,function(){return n.confirm()}),ug()()()}p&2&&(Hp(6),cE(`p-options`,n.systemOptions),Hp(3),cE(`p-options`,n.auditOptions),Hp(3),TE(`ngModel`,n.expiration),m0(),Hp(),cE(`p-disabled`,!n.expiration),Hp(2),TE(`ngModel`,n.attempts),m0(),Hp(),TE(`ngModel`,n.maxAttempts),cE(`p-disabled`,!n.attempts),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,roe,v4],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Checkbox Group – Security policy`),ug(),Ac(4,`a`,2),pt$1(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-checkbox-group-password-policy`),ug(),Kc(23,`hr`)),p&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ue],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(p,n){p&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoCheckboxGroupComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O componente `),Ac(24,`code`),vN(25,`po-checkbox-group`),ug(),vN(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),ug(),Ac(27,`blockquote`)(28,`p`),vN(29,`Para seleção única, utilize o `),Ac(30,`a`,6)(31,`strong`),vN(32,`PO Radio Group`),ug()(),vN(33,`.`),ug()(),Ac(34,`p`),vN(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),ug(),Ac(36,`pre`)(37,`code`),vN(38,`favorites = ['PO', 'Angular'];
`),ug()(),Ac(39,`p`),vN(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Ac(41,`code`),vN(42,`null`),ug(),vN(43,`), ou seja, nem marcado (`),Ac(44,`code`),vN(45,`true`),ug(),vN(46,`) e nem desmarcado (`),Ac(47,`code`),vN(48,`false`),ug(),vN(49,`),
deve setar a propriedade `),Ac(50,`code`),vN(51,`p-indeterminate`),ug(),vN(52,` como `),Ac(53,`code`),vN(54,`true`),ug(),vN(55,`.`),ug(),Ac(56,`p`),vN(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),ug(),Ac(58,`pre`)(59,`code`),vN(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),ug()()(),Ac(61,`div`,7)(62,`h4`,8),vN(63,`Seletor`),ug(),Ac(64,`pre`,9),vN(65,`<po-checkbox-group
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
`),ug()(),Ac(66,`h4`,10),vN(67,`Propriedades`),ug(),Ac(68,`table`,11)(69,`tr`,12)(70,`th`,13),vN(71,`Nome`),ug(),Ac(72,`th`,13),vN(73,`Tipo`),ug(),Ac(74,`th`,13),vN(75,`Padrão`),ug(),Ac(76,`th`,13),vN(77,`Descrição`),ug()(),Ac(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),vN(82,` (p-additional-help)`),Kc(83,`br`),ug()(),Ac(84,`div`,18),vN(85,`Deprecated`),ug()(),Ac(86,`td`,19)(87,`code`,20),vN(88,`EventEmitter`),ug()(),Ac(89,`td`,21),vN(90,`-`),ug(),Ac(91,`td`,22)(92,`em`)(93,`strong`),vN(94,`(opcional)`),ug()(),Ac(95,`p`),vN(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(97,`blockquote`)(98,`p`),vN(99,`Essa propriedade está `),Ac(100,`strong`),vN(101,`depreciada`),ug(),vN(102,` e será removida na versão `),Ac(103,`code`),vN(104,`23.x.x`),ug(),vN(105,`. Recomendamos utilizar a propriedade `),Ac(106,`code`),vN(107,`p-helper`),ug(),vN(108,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(109,`tr`,14)(110,`td`,15)(111,`div`,23)(112,`span`,24),vN(113,` p-additional-help-tooltip`),Kc(114,`br`),ug()(),Ac(115,`div`,18),vN(116,`Deprecated`),ug()(),Ac(117,`td`,19)(118,`code`,25),vN(119,`string`),ug()(),Ac(120,`td`,21),vN(121,`-`),ug(),Ac(122,`td`,22)(123,`em`)(124,`strong`),vN(125,`(opcional)`),ug()(),Ac(126,`p`),vN(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(128,`code`),vN(129,`po-helper`),ug(),vN(130,`.
`),Ac(131,`strong`),vN(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(133,`blockquote`)(134,`p`),vN(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(136,`blockquote`)(137,`p`),vN(138,`Essa propriedade está `),Ac(139,`strong`),vN(140,`depreciada`),ug(),vN(141,` e será removida na versão `),Ac(142,`code`),vN(143,`23.x.x`),ug(),vN(144,`. Recomendamos utilizar a propriedade `),Ac(145,`code`),vN(146,`p-helper`),ug(),vN(147,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(148,`tr`,14)(149,`td`,15)(150,`div`,23)(151,`span`,24),vN(152,` p-append-in-body`),Kc(153,`br`),ug()()(),Ac(154,`td`,19)(155,`code`,26),vN(156,`boolean`),ug()(),Ac(157,`td`,21)(158,`p`)(159,`code`),vN(160,`false`),ug()()(),Ac(161,`td`,22)(162,`em`)(163,`strong`),vN(164,`(opcional)`),ug()(),Ac(165,`p`),vN(166,`Define que o popover (`),Ac(167,`code`),vN(168,`p-helper`),ug(),vN(169,` e/ou `),Ac(170,`code`),vN(171,`p-error-limit`),ug(),vN(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(173,`blockquote`)(174,`p`),vN(175,`Quando utilizado com `),Ac(176,`code`),vN(177,`p-helper`),ug(),vN(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(179,`tr`,14)(180,`td`,15)(181,`div`,23)(182,`span`,24),vN(183,` p-auto-focus`),Kc(184,`br`),ug()()(),Ac(185,`td`,19)(186,`code`,26),vN(187,`boolean`),ug()(),Ac(188,`td`,21)(189,`p`)(190,`code`),vN(191,`false`),ug()()(),Ac(192,`td`,22)(193,`em`)(194,`strong`),vN(195,`(opcional)`),ug()(),Ac(196,`p`),vN(197,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(198,`blockquote`)(199,`p`),vN(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(201,`tr`,14)(202,`td`,15)(203,`div`,16)(204,`span`,17),vN(205,` (p-change)`),Kc(206,`br`),ug()()(),Ac(207,`td`,19)(208,`code`,20),vN(209,`EventEmitter`),ug()(),Ac(210,`td`,21),vN(211,`-`),ug(),Ac(212,`td`,22)(213,`em`)(214,`strong`),vN(215,`(opcional)`),ug()(),Ac(216,`p`),vN(217,`Evento disparado ao alterar valor do campo`),ug()()(),Ac(218,`tr`,14)(219,`td`,15)(220,`div`,16)(221,`span`,17),vN(222,` (p-change-model)`),Kc(223,`br`),ug()()(),Ac(224,`td`,19)(225,`code`,20),vN(226,`EventEmitter`),ug()(),Ac(227,`td`,21),vN(228,`-`),ug(),Ac(229,`td`,22)(230,`em`)(231,`strong`),vN(232,`(opcional)`),ug()(),Ac(233,`p`),vN(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(235,`code`),vN(236,`setValue`),ug(),vN(237,`, `),Ac(238,`code`),vN(239,`patchValue`),ug(),vN(240,`, carregamento assíncrono).`),ug(),Ac(241,`p`),vN(242,`Diferentemente do `),Ac(243,`code`),vN(244,`p-change`),ug(),vN(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(246,`code`),vN(247,`p-change-model`),ug(),vN(248,` cobre todos os cenários de alteração de valor.`),ug(),Ac(249,`p`),vN(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(251,`tr`,14)(252,`td`,15)(253,`div`,23)(254,`span`,24),vN(255,` p-columns`),Kc(256,`br`),ug()()(),Ac(257,`td`,19)(258,`code`,27),vN(259,`number`),ug()(),Ac(260,`td`,21)(261,`p`)(262,`code`),vN(263,`2`),ug()()(),Ac(264,`td`,22)(265,`em`)(266,`strong`),vN(267,`(opcional)`),ug()(),Ac(268,`p`),vN(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),Ac(270,`em`),vN(271,`checkbox`),ug(),vN(272,`.`),ug(),Ac(273,`ul`)(274,`li`),vN(275,`É possível exibir as opções entre `),Ac(276,`code`),vN(277,`1`),ug(),vN(278,` e `),Ac(279,`code`),vN(280,`4`),ug(),vN(281,` colunas.`),ug(),Ac(282,`li`),vN(283,`Para resolução `),Ac(284,`code`),vN(285,`sm`),ug(),vN(286,` a colunagem invariavelmente passa para `),Ac(287,`code`),vN(288,`1`),ug(),vN(289,` coluna.`),ug(),Ac(290,`li`),vN(291,`Quando se trata de resolução `),Ac(292,`code`),vN(293,`md`),ug(),vN(294,` e o valor estabelecido para colunas for superior a `),Ac(295,`code`),vN(296,`2`),ug(),vN(297,`,
o `),Ac(298,`em`),vN(299,`grid system`),ug(),vN(300,` será composto por `),Ac(301,`code`),vN(302,`2`),ug(),vN(303,` colunas.`),ug(),Ac(304,`li`),vN(305,`Para evitar a quebra de linha, prefira a utilização de `),Ac(306,`code`),vN(307,`1`),ug(),vN(308,` coluna para opções com textos grandes.`),ug()()()(),Ac(309,`tr`,14)(310,`td`,15)(311,`div`,23)(312,`span`,24),vN(313,` p-compact-label`),Kc(314,`br`),ug()()(),Ac(315,`td`,19)(316,`code`,26),vN(317,`boolean`),ug()(),Ac(318,`td`,21)(319,`p`)(320,`code`),vN(321,`false`),ug()()(),Ac(322,`td`,22)(323,`em`)(324,`strong`),vN(325,`(opcional)`),ug()(),Ac(326,`p`),vN(327,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(328,`p`),vN(329,`Quando habilitado (`),Ac(330,`code`),vN(331,`true`),ug(),vN(332,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(333,`ul`)(334,`li`)(335,`code`),vN(336,`po-label`),ug()(),Ac(337,`li`)(338,`code`),vN(339,`p-requirement (showRequired)`),ug()(),Ac(340,`li`)(341,`code`),vN(342,`po-helper`),ug()()(),Ac(343,`p`),vN(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(345,`p`),vN(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(347,`ul`)(348,`li`)(349,`code`),vN(350,`--field-container-title-justify`),ug()(),Ac(351,`li`)(352,`code`),vN(353,`--field-container-title-flex`),ug()()(),Ac(354,`p`),vN(355,`Exemplo:`),ug(),Ac(356,`pre`)(357,`code`),vN(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(359,`p`),vN(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),vN(365,` p-disabled`),Kc(366,`br`),ug()()(),Ac(367,`td`,19)(368,`code`,26),vN(369,`boolean`),ug()(),Ac(370,`td`,21)(371,`p`)(372,`code`),vN(373,`false`),ug()()(),Ac(374,`td`,22)(375,`em`)(376,`strong`),vN(377,`(opcional)`),ug()(),Ac(378,`p`),vN(379,`Desabilita todos os itens do checkbox.`),ug()()(),Ac(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),vN(384,` p-error-limit`),Kc(385,`br`),ug()()(),Ac(386,`td`,19)(387,`code`,26),vN(388,`boolean`),ug()(),Ac(389,`td`,21)(390,`p`)(391,`code`),vN(392,`false`),ug()()(),Ac(393,`td`,22)(394,`em`)(395,`strong`),vN(396,`(opcional)`),ug()(),Ac(397,`p`),vN(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(399,`blockquote`)(400,`p`),vN(401,`Caso essa propriedade seja definida como `),Ac(402,`code`),vN(403,`true`),ug(),vN(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(405,`tr`,14)(406,`td`,15)(407,`div`,23)(408,`span`,24),vN(409,` p-field-error-message`),Kc(410,`br`),ug()()(),Ac(411,`td`,19)(412,`code`,25),vN(413,`string`),ug()(),Ac(414,`td`,21),vN(415,`-`),ug(),Ac(416,`td`,22)(417,`em`)(418,`strong`),vN(419,`(opcional)`),ug()(),Ac(420,`p`),vN(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(422,`blockquote`)(423,`p`),vN(424,`Necessário que a propriedade `),Ac(425,`code`),vN(426,`p-required`),ug(),vN(427,` esteja habilitada.`),ug()()()(),Ac(428,`tr`,14)(429,`td`,15)(430,`div`,23)(431,`span`,24),vN(432,` p-help`),Kc(433,`br`),ug()()(),Ac(434,`td`,19)(435,`code`,25),vN(436,`string`),ug()(),Ac(437,`td`,21),vN(438,`-`),ug(),Ac(439,`td`,22)(440,`em`)(441,`strong`),vN(442,`(opcional)`),ug()(),Ac(443,`p`),vN(444,`Texto de apoio do campo`),ug()()(),Ac(445,`tr`,14)(446,`td`,15)(447,`div`,23)(448,`span`,24),vN(449,` p-indeterminate`),Kc(450,`br`),ug()()(),Ac(451,`td`,19)(452,`code`,26),vN(453,`boolean`),ug()(),Ac(454,`td`,21)(455,`p`)(456,`code`),vN(457,`false`),ug()()(),Ac(458,`td`,22)(459,`em`)(460,`strong`),vN(461,`(opcional)`),ug()(),Ac(462,`p`),vN(463,`Caso exista a necessidade de usar o valor indeterminado (`),Ac(464,`code`),vN(465,`null`),ug(),vN(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Ac(467,`code`),vN(468,`p-indeterminate`),ug(),vN(469,` como `),Ac(470,`code`),vN(471,`true`),ug(),vN(472,`, por padrão essa propriedade vem desabilitada (`),Ac(473,`code`),vN(474,`false`),ug(),vN(475,`).`),ug(),Ac(476,`p`),vN(477,`Quando essa propriedade é setada como `),Ac(478,`code`),vN(479,`true`),ug(),vN(480,`, o `),Ac(481,`em`),vN(482,`po-checkbox-group`),ug(),vN(483,` passa a devolver um objeto completo para o
`),Ac(484,`code`),vN(485,`ngModel`),ug(),vN(486,`, diferente do array que contém apenas os valores selecionados.`),ug()()(),Ac(487,`tr`,14)(488,`td`,15)(489,`div`,16)(490,`span`,17),vN(491,` (p-keydown)`),Kc(492,`br`),ug()()(),Ac(493,`td`,19)(494,`code`,20),vN(495,`EventEmitter`),ug()(),Ac(496,`td`,21),vN(497,`-`),ug(),Ac(498,`td`,22)(499,`em`)(500,`strong`),vN(501,`(opcional)`),ug()(),Ac(502,`p`),vN(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(504,`code`),vN(505,`KeyboardEvent`),ug(),vN(506,` com informações sobre a tecla.`),ug()()(),Ac(507,`tr`,14)(508,`td`,15)(509,`div`,23)(510,`span`,24),vN(511,` p-label`),Kc(512,`br`),ug()()(),Ac(513,`td`,19)(514,`code`,25),vN(515,`string`),ug()(),Ac(516,`td`,21),vN(517,`-`),ug(),Ac(518,`td`,22)(519,`em`)(520,`strong`),vN(521,`(opcional)`),ug()(),Ac(522,`p`),vN(523,`Label do campo`),ug()()(),Ac(524,`tr`,14)(525,`td`,15)(526,`div`,23)(527,`span`,24),vN(528,` p-label-text-wrap`),Kc(529,`br`),ug()()(),Ac(530,`td`,19)(531,`code`,26),vN(532,`boolean`),ug()(),Ac(533,`td`,21)(534,`p`)(535,`code`),vN(536,`false`),ug()()(),Ac(537,`td`,22)(538,`em`)(539,`strong`),vN(540,`(opcional)`),ug()(),Ac(541,`p`),vN(542,`Habilita a quebra automática do texto da propriedade `),Ac(543,`code`),vN(544,`p-label`),ug(),vN(545,`. Quando `),Ac(546,`code`),vN(547,`p-label-text-wrap`),ug(),vN(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(549,`tr`,14)(550,`td`,15)(551,`div`,23)(552,`span`,24),vN(553,` name`),Kc(554,`br`),ug()()(),Ac(555,`td`,19)(556,`code`,25),vN(557,`string`),ug()(),Ac(558,`td`,21),vN(559,`-`),ug(),Ac(560,`td`,22)(561,`p`),vN(562,`Nome dos checkboxes`),ug()()(),Ac(563,`tr`,14)(564,`td`,15)(565,`div`,16)(566,`span`,17),vN(567,` (ngModelChange)`),Kc(568,`br`),ug()()(),Ac(569,`td`,19)(570,`code`,20),vN(571,`EventEmitter`),ug()(),Ac(572,`td`,21),vN(573,`-`),ug(),Ac(574,`td`,22)(575,`em`)(576,`strong`),vN(577,`(opcional)`),ug()(),Ac(578,`p`),vN(579,`Função para atualizar o `),Ac(580,`code`),vN(581,`ngModel`),ug(),vN(582,` do componente, necessário quando não for utilizado dentro da tag form.`),ug(),Ac(583,`p`),vN(584,`Na versão 12.2.0 do Angular a verificação `),Ac(585,`code`),vN(586,`strictTemplates`),ug(),vN(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ug(),Ac(588,`pre`)(589,`code`),vN(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),ug()()()(),Ac(591,`tr`,14)(592,`td`,15)(593,`div`,23)(594,`span`,24),vN(595,` p-optional`),Kc(596,`br`),ug()()(),Ac(597,`td`,19)(598,`code`,26),vN(599,`boolean`),ug()(),Ac(600,`td`,21)(601,`p`)(602,`code`),vN(603,`false`),ug()()(),Ac(604,`td`,22)(605,`em`)(606,`strong`),vN(607,`(opcional)`),ug()(),Ac(608,`p`),vN(609,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(610,`blockquote`)(611,`p`),vN(612,`Não será exibida a indicação se:`),ug()(),Ac(613,`ul`)(614,`li`),vN(615,`O campo conter `),Ac(616,`code`),vN(617,`p-required`),ug(),vN(618,`;`),ug(),Ac(619,`li`),vN(620,`Não possuir `),Ac(621,`code`),vN(622,`p-help`),ug(),vN(623,` e/ou `),Ac(624,`code`),vN(625,`p-label`),ug(),vN(626,`.`),ug()()()(),Ac(627,`tr`,14)(628,`td`,15)(629,`div`,23)(630,`span`,24),vN(631,` p-options`),Kc(632,`br`),ug()()(),Ac(633,`td`,19)(634,`code`,28),vN(635,`PoCheckboxGroupOption[]`),ug()(),Ac(636,`td`,21),vN(637,`-`),ug(),Ac(638,`td`,22)(639,`em`)(640,`strong`),vN(641,`(opcional)`),ug()(),Ac(642,`p`),vN(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),ug()()(),Ac(644,`tr`,14)(645,`td`,15)(646,`div`,23)(647,`span`,24),vN(648,` p-helper`),Kc(649,`br`),ug()()(),Ac(650,`td`,19)(651,`code`,29),vN(652,`PoHelperOptions `),ug(),Ac(653,`code`,25),vN(654,` string`),ug()(),Ac(655,`td`,21),vN(656,`-`),ug(),Ac(657,`td`,22)(658,`em`)(659,`strong`),vN(660,`(opcional)`),ug()(),Ac(661,`p`),vN(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(663,`code`),vN(664,`p-label`),ug(),vN(665,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(666,`code`),vN(667,`p-label`),ug(),vN(668,`.`),ug(),Ac(669,`blockquote`)(670,`p`),vN(671,`Para mais informações acesse: `),Ac(672,`a`,30),vN(673,`https://po-ui.io/documentation/po-helper`),ug(),vN(674,`.`),ug()(),Ac(675,`blockquote`)(676,`p`),vN(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(678,`code`),vN(679,`p-additional-help-tooltip`),ug(),vN(680,` e `),Ac(681,`code`),vN(682,`p-additional-help`),ug(),vN(683,`) será ignorado.`),ug()()()(),Ac(684,`tr`,14)(685,`td`,15)(686,`div`,23)(687,`span`,24),vN(688,` p-required`),Kc(689,`br`),ug()()(),Ac(690,`td`,19)(691,`code`,26),vN(692,`boolean`),ug()(),Ac(693,`td`,21)(694,`p`)(695,`code`),vN(696,`false`),ug()()(),Ac(697,`td`,22)(698,`em`)(699,`strong`),vN(700,`(opcional)`),ug()(),Ac(701,`p`),vN(702,`Define que o campo será obrigatório.`),ug()()(),Ac(703,`tr`,14)(704,`td`,15)(705,`div`,23)(706,`span`,24),vN(707,` p-show-required`),Kc(708,`br`),ug()()(),Ac(709,`td`,19)(710,`code`,26),vN(711,`boolean`),ug()(),Ac(712,`td`,21),vN(713,`-`),ug(),Ac(714,`td`,22)(715,`p`),vN(716,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(717,`blockquote`)(718,`p`),vN(719,`Não será exibida a indicação se:`),ug()(),Ac(720,`ul`)(721,`li`),vN(722,`Não possuir `),Ac(723,`code`),vN(724,`p-help`),ug(),vN(725,` e/ou `),Ac(726,`code`),vN(727,`p-label`),ug(),vN(728,`.`),ug()()()(),Ac(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),vN(733,` p-size`),Kc(734,`br`),ug()()(),Ac(735,`td`,19)(736,`code`,25),vN(737,`string`),ug()(),Ac(738,`td`,21)(739,`p`)(740,`code`),vN(741,`medium`),ug()()(),Ac(742,`td`,22)(743,`em`)(744,`strong`),vN(745,`(opcional)`),ug()(),Ac(746,`p`),vN(747,`Define o tamanho dos checkboxes do componente:`),ug(),Ac(748,`ul`)(749,`li`)(750,`code`),vN(751,`small`),ug(),vN(752,`: 16x16 (disponível apenas para acessibilidade AA).`),ug(),Ac(753,`li`)(754,`code`),vN(755,`medium`),ug(),vN(756,`: 24x24.`),ug()(),Ac(757,`blockquote`)(758,`p`),vN(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(760,`code`),vN(761,`medium`),ug(),vN(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(763,`a`,31),vN(764,`po-theme`),ug(),vN(765,`.`),ug()()()()(),Ac(766,`h3`,10),vN(767,`Métodos`),ug(),Ac(768,`table`,32)(769,`tr`,14)(770,`th`,33)(771,`div`,23)(772,`h4`)(773,`span`,24),vN(774,` focus `),ug()()()()(),Ac(775,`tr`,22)(776,`td`,22)(777,`p`),vN(778,`Função que atribui foco ao componente.`),ug(),Ac(779,`p`),vN(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(781,`pre`)(782,`code`),vN(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),ug()()()()(),Kc(784,`br`),Ac(785,`table`,32)(786,`tr`,14)(787,`th`,33)(788,`div`,23)(789,`h4`)(790,`span`,24),vN(791,` showAdditionalHelp `),ug()()()()(),Ac(792,`tr`,22)(793,`td`,22)(794,`p`),vN(795,`Método que exibe `),Ac(796,`code`),vN(797,`p-helper`),ug(),vN(798,` ou executa a ação definida em `),Ac(799,`code`),vN(800,`p-helper{eventOnClick}`),ug(),vN(801,` ou em `),Ac(802,`code`),vN(803,`p-additionalHelp`),ug(),vN(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(805,`code`),vN(806,`p-keydown`),ug(),vN(807,`.`),ug(),Ac(808,`blockquote`)(809,`p`),vN(810,`Exibe ou oculta o conteúdo do componente `),Ac(811,`code`),vN(812,`po-helper`),ug(),vN(813,` quando o componente estiver com foco.`),ug()(),Ac(814,`pre`)(815,`code`),vN(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),ug()(),Ac(817,`pre`)(818,`code`),vN(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(820,`br`),Ac(821,`h3`),vN(822,`Interfaces`),ug(),Ac(823,`h4`,34)(824,`code`,5),vN(825,`PoCheckboxGroupOption`),ug()(),Ac(826,`div`,2)(827,`p`),vN(828,`Interface para as ações do componente po-checkbox-group.`),ug()(),Ac(829,`h4`,10),vN(830,`Propriedades`),ug(),Ac(831,`table`,11)(832,`tr`,12)(833,`th`,13),vN(834,`Nome`),ug(),Ac(835,`th`,13),vN(836,`Tipo`),ug(),Ac(837,`th`,13),vN(838,`Descrição`),ug()(),Ac(839,`tr`,14)(840,`td`,15)(841,`div`,23)(842,`span`,24),vN(843,` disabled`),Kc(844,`br`),ug()()(),Ac(845,`td`,19)(846,`code`,26),vN(847,`boolean`),ug()(),Ac(848,`td`,22)(849,`em`)(850,`strong`),vN(851,`(opcional)`),ug()(),Ac(852,`p`),vN(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),ug(),Ac(854,`p`),vN(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),ug()()(),Ac(856,`tr`,14)(857,`td`,15)(858,`div`,23)(859,`span`,24),vN(860,` label`),Kc(861,`br`),ug()()(),Ac(862,`td`,19)(863,`code`,25),vN(864,`string`),ug()(),Ac(865,`td`,22)(866,`p`),vN(867,`Texto exibido para o usuário ao lado do checkbox.`),ug()()(),Ac(868,`tr`,14)(869,`td`,15)(870,`div`,23)(871,`span`,24),vN(872,` value`),Kc(873,`br`),ug()()(),Ac(874,`td`,19)(875,`code`,25),vN(876,`string`),ug()(),Ac(877,`td`,22)(878,`p`),vN(879,`Valor retornado no model.`),ug(),Ac(880,`p`),vN(881,`É possível usar os valores `),Ac(882,`code`),vN(883,`true`),ug(),vN(884,` e `),Ac(885,`code`),vN(886,`false`),ug(),vN(887,`, caso a propriedade `),Ac(888,`code`),vN(889,`p-indeterminate`),ug(),vN(890,` esteja setada como `),Ac(891,`code`),vN(892,`true`),ug(),vN(893,`
passa a aceitar `),Ac(894,`code`),vN(895,`null`),ug(),vN(896,` também, por padrão esse valor sempre será setado como `),Ac(897,`code`),vN(898,`false`),ug(),vN(899,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt$1(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-checkbox-group-doc`),ug(),Ac(4,`po-tab`,3),pt$1(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-checkbox-group-basic-view`)(6,`sample-po-checkbox-group-labs-view`)(7,`sample-po-checkbox-group-password-policy-view`),ug()()()),p&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,me,ce,be,he],encapsulation:2,changeDetection:1})}return a})()}];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[kL.forChild(qe),kL]})}return a})();var pt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[Ta,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};