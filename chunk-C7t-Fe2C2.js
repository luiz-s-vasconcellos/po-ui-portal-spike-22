import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ea as qO,er as EN,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,wr as MN,yi as cN,yn as ube,zr as SN}from"./main-3EWTGE7T.js";var Se=()=>({value:`1`,label:`Option 1`});var fe=()=>({value:`2`,label:`Option 2`});var Ce=(a,ge)=>[a,ge];var de=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&Gl(0,`po-checkbox-group`,0),p&2&&nw(`p-options`,EN(3,Ce,_N(1,Se),_N(2,fe)))},dependencies:[N4],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Checkbox Group Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-checkbox-group-basic`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let s=Ax();Tl(0,`po-checkbox-group`,2),ww(`ngModelChange`,function(l){return Ky(s),uN(n.checkboxGroup,l)||(n.checkboxGroup=l),Xy(l)}),ht(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,3),Gl(3,`po-info`,4),SN(4,`json`),Gl(5,`po-info`,5),ag(),Gl(6,`po-divider`),Tl(7,`form`,null,0)(9,`po-input`,6),ww(`ngModelChange`,function(l){return Ky(s),uN(n.option.value,l)||(n.option.value=l),Xy(l)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(l){return Ky(s),uN(n.option.label,l)||(n.option.label=l),Xy(l)}),ag(),a0(),Tl(11,`po-switch`,8),ww(`ngModelChange`,function(l){return Ky(s),uN(n.option.disabled,l)||(n.option.disabled=l),Xy(l)}),ag(),a0(),Tl(12,`div`,3)(13,`po-button`,9),ht(`p-click`,function(){return n.addOption()}),ag()()(),Gl(14,`po-divider`),Tl(15,`form`,null,1)(17,`po-input`,10),ww(`ngModelChange`,function(l){return Ky(s),uN(n.label,l)||(n.label=l),Xy(l)}),ag(),a0(),Tl(18,`po-input`,11),ww(`ngModelChange`,function(l){return Ky(s),uN(n.help,l)||(n.help=l),Xy(l)}),ag(),a0(),Tl(19,`po-input`,12),ww(`ngModelChange`,function(l){return Ky(s),uN(n.helperText,l)||(n.helperText=l),Xy(l)}),ag(),a0(),Tl(20,`po-input`,13),ww(`ngModelChange`,function(l){return Ky(s),uN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Xy(l)}),ag(),a0(),Tl(21,`po-checkbox-group`,14),ww(`ngModelChange`,function(l){return Ky(s),uN(n.properties,l)||(n.properties=l),Xy(l)}),ag(),a0(),Tl(22,`po-radio-group`,15),ww(`ngModelChange`,function(l){return Ky(s),uN(n.columns,l)||(n.columns=l),Xy(l)}),ag(),a0(),Tl(23,`po-radio-group`,16),ww(`ngModelChange`,function(l){return Ky(s),uN(n.size,l)||(n.size=l),Xy(l)}),ag(),a0(),Tl(24,`div`,3)(25,`po-button`,17),ht(`p-click`,function(){return n.restore()}),ag()()()}if(p&2){let s=Bx(8);Ew(`ngModel`,n.checkboxGroup),nw(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),l0(),jp(3),nw(`p-value`,MN(4,32,n.checkboxGroup)),jp(2),nw(`p-value`,n.event),jp(4),Ew(`ngModel`,n.option.value),l0(),jp(),Ew(`ngModel`,n.option.label),l0(),jp(),Ew(`ngModel`,n.option.disabled),l0(),jp(2),nw(`p-disabled`,s.invalid),jp(4),Ew(`ngModel`,n.label),l0(),jp(),Ew(`ngModel`,n.help),l0(),jp(),Ew(`ngModel`,n.helperText),l0(),jp(),Ew(`ngModel`,n.fieldErrorMessage),l0(),jp(),Ew(`ngModel`,n.properties),nw(`p-options`,n.propertiesOptions),l0(),jp(),Ew(`ngModel`,n.columns),nw(`p-options`,n.columnOptions),l0(),jp(),Ew(`ngModel`,n.size),nw(`p-options`,n.sizeOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,j4,ybe,qO],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Checkbox Group Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-checkbox-group
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-checkbox-group-labs`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{poNotification=f(Eu);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let s=Ax();Tl(0,`div`,1),cN(1,`Password Rules`),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,2),Gl(6,`po-checkbox-group`,3),ag(),Gl(7,`po-divider`),Tl(8,`div`,2),Gl(9,`po-checkbox-group`,4),ag(),Gl(10,`po-divider`),Tl(11,`div`,2)(12,`po-switch`,5),ww(`ngModelChange`,function(l){return Ky(s),uN(n.expiration,l)||(n.expiration=l),Xy(l)}),ag(),a0(),Gl(13,`po-number`,6),ag(),Tl(14,`div`,2)(15,`po-switch`,7),ww(`ngModelChange`,function(l){return Ky(s),uN(n.attempts,l)||(n.attempts=l),Xy(l)}),ag(),a0(),Tl(16,`po-number`,8),ww(`ngModelChange`,function(l){return Ky(s),uN(n.maxAttempts,l)||(n.maxAttempts=l),Xy(l)}),ag(),a0(),ag(),Tl(17,`div`,2)(18,`po-button`,9),ht(`p-click`,function(){return n.confirm()}),ag()()()}p&2&&(jp(6),nw(`p-options`,n.systemOptions),jp(3),nw(`p-options`,n.auditOptions),jp(3),Ew(`ngModel`,n.expiration),l0(),jp(),nw(`p-disabled`,!n.expiration),jp(2),Ew(`ngModel`,n.attempts),l0(),jp(),Ew(`ngModel`,n.maxAttempts),nw(`p-disabled`,!n.attempts),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,ube,j4],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Checkbox Group – Security policy`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-checkbox-group-password-policy`),ag(),Gl(23,`hr`)),p&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(p,n){p&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoCheckboxGroupComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O componente `),Tl(24,`code`),cN(25,`po-checkbox-group`),ag(),cN(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),ag(),Tl(27,`blockquote`)(28,`p`),cN(29,`Para seleção única, utilize o `),Tl(30,`a`,6)(31,`strong`),cN(32,`PO Radio Group`),ag()(),cN(33,`.`),ag()(),Tl(34,`p`),cN(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),ag(),Tl(36,`pre`)(37,`code`),cN(38,`favorites = ['PO', 'Angular'];
`),ag()(),Tl(39,`p`),cN(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Tl(41,`code`),cN(42,`null`),ag(),cN(43,`), ou seja, nem marcado (`),Tl(44,`code`),cN(45,`true`),ag(),cN(46,`) e nem desmarcado (`),Tl(47,`code`),cN(48,`false`),ag(),cN(49,`),
deve setar a propriedade `),Tl(50,`code`),cN(51,`p-indeterminate`),ag(),cN(52,` como `),Tl(53,`code`),cN(54,`true`),ag(),cN(55,`.`),ag(),Tl(56,`p`),cN(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),ag(),Tl(58,`pre`)(59,`code`),cN(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),ag()()(),Tl(61,`div`,7)(62,`h4`,8),cN(63,`Seletor`),ag(),Tl(64,`pre`,9),cN(65,`<po-checkbox-group
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
`),ag()(),Tl(66,`h4`,10),cN(67,`Propriedades`),ag(),Tl(68,`table`,11)(69,`tr`,12)(70,`th`,13),cN(71,`Nome`),ag(),Tl(72,`th`,13),cN(73,`Tipo`),ag(),Tl(74,`th`,13),cN(75,`Padrão`),ag(),Tl(76,`th`,13),cN(77,`Descrição`),ag()(),Tl(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),cN(82,` (p-additional-help)`),Gl(83,`br`),ag()(),Tl(84,`div`,18),cN(85,`Deprecated`),ag()(),Tl(86,`td`,19)(87,`code`,20),cN(88,`EventEmitter`),ag()(),Tl(89,`td`,21),cN(90,`-`),ag(),Tl(91,`td`,22)(92,`em`)(93,`strong`),cN(94,`(opcional)`),ag()(),Tl(95,`p`),cN(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(97,`blockquote`)(98,`p`),cN(99,`Essa propriedade está `),Tl(100,`strong`),cN(101,`depreciada`),ag(),cN(102,` e será removida na versão `),Tl(103,`code`),cN(104,`23.x.x`),ag(),cN(105,`. Recomendamos utilizar a propriedade `),Tl(106,`code`),cN(107,`p-helper`),ag(),cN(108,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(109,`tr`,14)(110,`td`,15)(111,`div`,23)(112,`span`,24),cN(113,` p-additional-help-tooltip`),Gl(114,`br`),ag()(),Tl(115,`div`,18),cN(116,`Deprecated`),ag()(),Tl(117,`td`,19)(118,`code`,25),cN(119,`string`),ag()(),Tl(120,`td`,21),cN(121,`-`),ag(),Tl(122,`td`,22)(123,`em`)(124,`strong`),cN(125,`(opcional)`),ag()(),Tl(126,`p`),cN(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(128,`code`),cN(129,`po-helper`),ag(),cN(130,`.
`),Tl(131,`strong`),cN(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(133,`blockquote`)(134,`p`),cN(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(136,`blockquote`)(137,`p`),cN(138,`Essa propriedade está `),Tl(139,`strong`),cN(140,`depreciada`),ag(),cN(141,` e será removida na versão `),Tl(142,`code`),cN(143,`23.x.x`),ag(),cN(144,`. Recomendamos utilizar a propriedade `),Tl(145,`code`),cN(146,`p-helper`),ag(),cN(147,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(148,`tr`,14)(149,`td`,15)(150,`div`,23)(151,`span`,24),cN(152,` p-append-in-body`),Gl(153,`br`),ag()()(),Tl(154,`td`,19)(155,`code`,26),cN(156,`boolean`),ag()(),Tl(157,`td`,21)(158,`p`)(159,`code`),cN(160,`false`),ag()()(),Tl(161,`td`,22)(162,`em`)(163,`strong`),cN(164,`(opcional)`),ag()(),Tl(165,`p`),cN(166,`Define que o popover (`),Tl(167,`code`),cN(168,`p-helper`),ag(),cN(169,` e/ou `),Tl(170,`code`),cN(171,`p-error-limit`),ag(),cN(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(173,`blockquote`)(174,`p`),cN(175,`Quando utilizado com `),Tl(176,`code`),cN(177,`p-helper`),ag(),cN(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(179,`tr`,14)(180,`td`,15)(181,`div`,23)(182,`span`,24),cN(183,` p-auto-focus`),Gl(184,`br`),ag()()(),Tl(185,`td`,19)(186,`code`,26),cN(187,`boolean`),ag()(),Tl(188,`td`,21)(189,`p`)(190,`code`),cN(191,`false`),ag()()(),Tl(192,`td`,22)(193,`em`)(194,`strong`),cN(195,`(opcional)`),ag()(),Tl(196,`p`),cN(197,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(198,`blockquote`)(199,`p`),cN(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(201,`tr`,14)(202,`td`,15)(203,`div`,16)(204,`span`,17),cN(205,` (p-change)`),Gl(206,`br`),ag()()(),Tl(207,`td`,19)(208,`code`,20),cN(209,`EventEmitter`),ag()(),Tl(210,`td`,21),cN(211,`-`),ag(),Tl(212,`td`,22)(213,`em`)(214,`strong`),cN(215,`(opcional)`),ag()(),Tl(216,`p`),cN(217,`Evento disparado ao alterar valor do campo`),ag()()(),Tl(218,`tr`,14)(219,`td`,15)(220,`div`,16)(221,`span`,17),cN(222,` (p-change-model)`),Gl(223,`br`),ag()()(),Tl(224,`td`,19)(225,`code`,20),cN(226,`EventEmitter`),ag()(),Tl(227,`td`,21),cN(228,`-`),ag(),Tl(229,`td`,22)(230,`em`)(231,`strong`),cN(232,`(opcional)`),ag()(),Tl(233,`p`),cN(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(235,`code`),cN(236,`setValue`),ag(),cN(237,`, `),Tl(238,`code`),cN(239,`patchValue`),ag(),cN(240,`, carregamento assíncrono).`),ag(),Tl(241,`p`),cN(242,`Diferentemente do `),Tl(243,`code`),cN(244,`p-change`),ag(),cN(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(246,`code`),cN(247,`p-change-model`),ag(),cN(248,` cobre todos os cenários de alteração de valor.`),ag(),Tl(249,`p`),cN(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(251,`tr`,14)(252,`td`,15)(253,`div`,23)(254,`span`,24),cN(255,` p-columns`),Gl(256,`br`),ag()()(),Tl(257,`td`,19)(258,`code`,27),cN(259,`number`),ag()(),Tl(260,`td`,21)(261,`p`)(262,`code`),cN(263,`2`),ag()()(),Tl(264,`td`,22)(265,`em`)(266,`strong`),cN(267,`(opcional)`),ag()(),Tl(268,`p`),cN(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),Tl(270,`em`),cN(271,`checkbox`),ag(),cN(272,`.`),ag(),Tl(273,`ul`)(274,`li`),cN(275,`É possível exibir as opções entre `),Tl(276,`code`),cN(277,`1`),ag(),cN(278,` e `),Tl(279,`code`),cN(280,`4`),ag(),cN(281,` colunas.`),ag(),Tl(282,`li`),cN(283,`Para resolução `),Tl(284,`code`),cN(285,`sm`),ag(),cN(286,` a colunagem invariavelmente passa para `),Tl(287,`code`),cN(288,`1`),ag(),cN(289,` coluna.`),ag(),Tl(290,`li`),cN(291,`Quando se trata de resolução `),Tl(292,`code`),cN(293,`md`),ag(),cN(294,` e o valor estabelecido para colunas for superior a `),Tl(295,`code`),cN(296,`2`),ag(),cN(297,`,
o `),Tl(298,`em`),cN(299,`grid system`),ag(),cN(300,` será composto por `),Tl(301,`code`),cN(302,`2`),ag(),cN(303,` colunas.`),ag(),Tl(304,`li`),cN(305,`Para evitar a quebra de linha, prefira a utilização de `),Tl(306,`code`),cN(307,`1`),ag(),cN(308,` coluna para opções com textos grandes.`),ag()()()(),Tl(309,`tr`,14)(310,`td`,15)(311,`div`,23)(312,`span`,24),cN(313,` p-compact-label`),Gl(314,`br`),ag()()(),Tl(315,`td`,19)(316,`code`,26),cN(317,`boolean`),ag()(),Tl(318,`td`,21)(319,`p`)(320,`code`),cN(321,`false`),ag()()(),Tl(322,`td`,22)(323,`em`)(324,`strong`),cN(325,`(opcional)`),ag()(),Tl(326,`p`),cN(327,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(328,`p`),cN(329,`Quando habilitado (`),Tl(330,`code`),cN(331,`true`),ag(),cN(332,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(333,`ul`)(334,`li`)(335,`code`),cN(336,`po-label`),ag()(),Tl(337,`li`)(338,`code`),cN(339,`p-requirement (showRequired)`),ag()(),Tl(340,`li`)(341,`code`),cN(342,`po-helper`),ag()()(),Tl(343,`p`),cN(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(345,`p`),cN(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(347,`ul`)(348,`li`)(349,`code`),cN(350,`--field-container-title-justify`),ag()(),Tl(351,`li`)(352,`code`),cN(353,`--field-container-title-flex`),ag()()(),Tl(354,`p`),cN(355,`Exemplo:`),ag(),Tl(356,`pre`)(357,`code`),cN(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(359,`p`),cN(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),cN(365,` p-disabled`),Gl(366,`br`),ag()()(),Tl(367,`td`,19)(368,`code`,26),cN(369,`boolean`),ag()(),Tl(370,`td`,21)(371,`p`)(372,`code`),cN(373,`false`),ag()()(),Tl(374,`td`,22)(375,`em`)(376,`strong`),cN(377,`(opcional)`),ag()(),Tl(378,`p`),cN(379,`Desabilita todos os itens do checkbox.`),ag()()(),Tl(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),cN(384,` p-error-limit`),Gl(385,`br`),ag()()(),Tl(386,`td`,19)(387,`code`,26),cN(388,`boolean`),ag()(),Tl(389,`td`,21)(390,`p`)(391,`code`),cN(392,`false`),ag()()(),Tl(393,`td`,22)(394,`em`)(395,`strong`),cN(396,`(opcional)`),ag()(),Tl(397,`p`),cN(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(399,`blockquote`)(400,`p`),cN(401,`Caso essa propriedade seja definida como `),Tl(402,`code`),cN(403,`true`),ag(),cN(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(405,`tr`,14)(406,`td`,15)(407,`div`,23)(408,`span`,24),cN(409,` p-field-error-message`),Gl(410,`br`),ag()()(),Tl(411,`td`,19)(412,`code`,25),cN(413,`string`),ag()(),Tl(414,`td`,21),cN(415,`-`),ag(),Tl(416,`td`,22)(417,`em`)(418,`strong`),cN(419,`(opcional)`),ag()(),Tl(420,`p`),cN(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ag(),Tl(422,`blockquote`)(423,`p`),cN(424,`Necessário que a propriedade `),Tl(425,`code`),cN(426,`p-required`),ag(),cN(427,` esteja habilitada.`),ag()()()(),Tl(428,`tr`,14)(429,`td`,15)(430,`div`,23)(431,`span`,24),cN(432,` p-help`),Gl(433,`br`),ag()()(),Tl(434,`td`,19)(435,`code`,25),cN(436,`string`),ag()(),Tl(437,`td`,21),cN(438,`-`),ag(),Tl(439,`td`,22)(440,`em`)(441,`strong`),cN(442,`(opcional)`),ag()(),Tl(443,`p`),cN(444,`Texto de apoio do campo`),ag()()(),Tl(445,`tr`,14)(446,`td`,15)(447,`div`,23)(448,`span`,24),cN(449,` p-indeterminate`),Gl(450,`br`),ag()()(),Tl(451,`td`,19)(452,`code`,26),cN(453,`boolean`),ag()(),Tl(454,`td`,21)(455,`p`)(456,`code`),cN(457,`false`),ag()()(),Tl(458,`td`,22)(459,`em`)(460,`strong`),cN(461,`(opcional)`),ag()(),Tl(462,`p`),cN(463,`Caso exista a necessidade de usar o valor indeterminado (`),Tl(464,`code`),cN(465,`null`),ag(),cN(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Tl(467,`code`),cN(468,`p-indeterminate`),ag(),cN(469,` como `),Tl(470,`code`),cN(471,`true`),ag(),cN(472,`, por padrão essa propriedade vem desabilitada (`),Tl(473,`code`),cN(474,`false`),ag(),cN(475,`).`),ag(),Tl(476,`p`),cN(477,`Quando essa propriedade é setada como `),Tl(478,`code`),cN(479,`true`),ag(),cN(480,`, o `),Tl(481,`em`),cN(482,`po-checkbox-group`),ag(),cN(483,` passa a devolver um objeto completo para o
`),Tl(484,`code`),cN(485,`ngModel`),ag(),cN(486,`, diferente do array que contém apenas os valores selecionados.`),ag()()(),Tl(487,`tr`,14)(488,`td`,15)(489,`div`,16)(490,`span`,17),cN(491,` (p-keydown)`),Gl(492,`br`),ag()()(),Tl(493,`td`,19)(494,`code`,20),cN(495,`EventEmitter`),ag()(),Tl(496,`td`,21),cN(497,`-`),ag(),Tl(498,`td`,22)(499,`em`)(500,`strong`),cN(501,`(opcional)`),ag()(),Tl(502,`p`),cN(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(504,`code`),cN(505,`KeyboardEvent`),ag(),cN(506,` com informações sobre a tecla.`),ag()()(),Tl(507,`tr`,14)(508,`td`,15)(509,`div`,23)(510,`span`,24),cN(511,` p-label`),Gl(512,`br`),ag()()(),Tl(513,`td`,19)(514,`code`,25),cN(515,`string`),ag()(),Tl(516,`td`,21),cN(517,`-`),ag(),Tl(518,`td`,22)(519,`em`)(520,`strong`),cN(521,`(opcional)`),ag()(),Tl(522,`p`),cN(523,`Label do campo`),ag()()(),Tl(524,`tr`,14)(525,`td`,15)(526,`div`,23)(527,`span`,24),cN(528,` p-label-text-wrap`),Gl(529,`br`),ag()()(),Tl(530,`td`,19)(531,`code`,26),cN(532,`boolean`),ag()(),Tl(533,`td`,21)(534,`p`)(535,`code`),cN(536,`false`),ag()()(),Tl(537,`td`,22)(538,`em`)(539,`strong`),cN(540,`(opcional)`),ag()(),Tl(541,`p`),cN(542,`Habilita a quebra automática do texto da propriedade `),Tl(543,`code`),cN(544,`p-label`),ag(),cN(545,`. Quando `),Tl(546,`code`),cN(547,`p-label-text-wrap`),ag(),cN(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(549,`tr`,14)(550,`td`,15)(551,`div`,23)(552,`span`,24),cN(553,` name`),Gl(554,`br`),ag()()(),Tl(555,`td`,19)(556,`code`,25),cN(557,`string`),ag()(),Tl(558,`td`,21),cN(559,`-`),ag(),Tl(560,`td`,22)(561,`p`),cN(562,`Nome dos checkboxes`),ag()()(),Tl(563,`tr`,14)(564,`td`,15)(565,`div`,16)(566,`span`,17),cN(567,` (ngModelChange)`),Gl(568,`br`),ag()()(),Tl(569,`td`,19)(570,`code`,20),cN(571,`EventEmitter`),ag()(),Tl(572,`td`,21),cN(573,`-`),ag(),Tl(574,`td`,22)(575,`em`)(576,`strong`),cN(577,`(opcional)`),ag()(),Tl(578,`p`),cN(579,`Função para atualizar o `),Tl(580,`code`),cN(581,`ngModel`),ag(),cN(582,` do componente, necessário quando não for utilizado dentro da tag form.`),ag(),Tl(583,`p`),cN(584,`Na versão 12.2.0 do Angular a verificação `),Tl(585,`code`),cN(586,`strictTemplates`),ag(),cN(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),ag(),Tl(588,`pre`)(589,`code`),cN(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),ag()()()(),Tl(591,`tr`,14)(592,`td`,15)(593,`div`,23)(594,`span`,24),cN(595,` p-optional`),Gl(596,`br`),ag()()(),Tl(597,`td`,19)(598,`code`,26),cN(599,`boolean`),ag()(),Tl(600,`td`,21)(601,`p`)(602,`code`),cN(603,`false`),ag()()(),Tl(604,`td`,22)(605,`em`)(606,`strong`),cN(607,`(opcional)`),ag()(),Tl(608,`p`),cN(609,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(610,`blockquote`)(611,`p`),cN(612,`Não será exibida a indicação se:`),ag()(),Tl(613,`ul`)(614,`li`),cN(615,`O campo conter `),Tl(616,`code`),cN(617,`p-required`),ag(),cN(618,`;`),ag(),Tl(619,`li`),cN(620,`Não possuir `),Tl(621,`code`),cN(622,`p-help`),ag(),cN(623,` e/ou `),Tl(624,`code`),cN(625,`p-label`),ag(),cN(626,`.`),ag()()()(),Tl(627,`tr`,14)(628,`td`,15)(629,`div`,23)(630,`span`,24),cN(631,` p-options`),Gl(632,`br`),ag()()(),Tl(633,`td`,19)(634,`code`,28),cN(635,`PoCheckboxGroupOption[]`),ag()(),Tl(636,`td`,21),cN(637,`-`),ag(),Tl(638,`td`,22)(639,`em`)(640,`strong`),cN(641,`(opcional)`),ag()(),Tl(642,`p`),cN(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),ag()()(),Tl(644,`tr`,14)(645,`td`,15)(646,`div`,23)(647,`span`,24),cN(648,` p-helper`),Gl(649,`br`),ag()()(),Tl(650,`td`,19)(651,`code`,29),cN(652,`PoHelperOptions `),ag(),Tl(653,`code`,25),cN(654,` string`),ag()(),Tl(655,`td`,21),cN(656,`-`),ag(),Tl(657,`td`,22)(658,`em`)(659,`strong`),cN(660,`(opcional)`),ag()(),Tl(661,`p`),cN(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(663,`code`),cN(664,`p-label`),ag(),cN(665,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(666,`code`),cN(667,`p-label`),ag(),cN(668,`.`),ag(),Tl(669,`blockquote`)(670,`p`),cN(671,`Para mais informações acesse: `),Tl(672,`a`,30),cN(673,`https://po-ui.io/documentation/po-helper`),ag(),cN(674,`.`),ag()(),Tl(675,`blockquote`)(676,`p`),cN(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(678,`code`),cN(679,`p-additional-help-tooltip`),ag(),cN(680,` e `),Tl(681,`code`),cN(682,`p-additional-help`),ag(),cN(683,`) será ignorado.`),ag()()()(),Tl(684,`tr`,14)(685,`td`,15)(686,`div`,23)(687,`span`,24),cN(688,` p-required`),Gl(689,`br`),ag()()(),Tl(690,`td`,19)(691,`code`,26),cN(692,`boolean`),ag()(),Tl(693,`td`,21)(694,`p`)(695,`code`),cN(696,`false`),ag()()(),Tl(697,`td`,22)(698,`em`)(699,`strong`),cN(700,`(opcional)`),ag()(),Tl(701,`p`),cN(702,`Define que o campo será obrigatório.`),ag()()(),Tl(703,`tr`,14)(704,`td`,15)(705,`div`,23)(706,`span`,24),cN(707,` p-show-required`),Gl(708,`br`),ag()()(),Tl(709,`td`,19)(710,`code`,26),cN(711,`boolean`),ag()(),Tl(712,`td`,21),cN(713,`-`),ag(),Tl(714,`td`,22)(715,`p`),cN(716,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(717,`blockquote`)(718,`p`),cN(719,`Não será exibida a indicação se:`),ag()(),Tl(720,`ul`)(721,`li`),cN(722,`Não possuir `),Tl(723,`code`),cN(724,`p-help`),ag(),cN(725,` e/ou `),Tl(726,`code`),cN(727,`p-label`),ag(),cN(728,`.`),ag()()()(),Tl(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),cN(733,` p-size`),Gl(734,`br`),ag()()(),Tl(735,`td`,19)(736,`code`,25),cN(737,`string`),ag()(),Tl(738,`td`,21)(739,`p`)(740,`code`),cN(741,`medium`),ag()()(),Tl(742,`td`,22)(743,`em`)(744,`strong`),cN(745,`(opcional)`),ag()(),Tl(746,`p`),cN(747,`Define o tamanho dos checkboxes do componente:`),ag(),Tl(748,`ul`)(749,`li`)(750,`code`),cN(751,`small`),ag(),cN(752,`: 16x16 (disponível apenas para acessibilidade AA).`),ag(),Tl(753,`li`)(754,`code`),cN(755,`medium`),ag(),cN(756,`: 24x24.`),ag()(),Tl(757,`blockquote`)(758,`p`),cN(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(760,`code`),cN(761,`medium`),ag(),cN(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(763,`a`,31),cN(764,`po-theme`),ag(),cN(765,`.`),ag()()()()(),Tl(766,`h3`,10),cN(767,`Métodos`),ag(),Tl(768,`table`,32)(769,`tr`,14)(770,`th`,33)(771,`div`,23)(772,`h4`)(773,`span`,24),cN(774,` focus `),ag()()()()(),Tl(775,`tr`,22)(776,`td`,22)(777,`p`),cN(778,`Função que atribui foco ao componente.`),ag(),Tl(779,`p`),cN(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(781,`pre`)(782,`code`),cN(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),ag()()()()(),Gl(784,`br`),Tl(785,`table`,32)(786,`tr`,14)(787,`th`,33)(788,`div`,23)(789,`h4`)(790,`span`,24),cN(791,` showAdditionalHelp `),ag()()()()(),Tl(792,`tr`,22)(793,`td`,22)(794,`p`),cN(795,`Método que exibe `),Tl(796,`code`),cN(797,`p-helper`),ag(),cN(798,` ou executa a ação definida em `),Tl(799,`code`),cN(800,`p-helper{eventOnClick}`),ag(),cN(801,` ou em `),Tl(802,`code`),cN(803,`p-additionalHelp`),ag(),cN(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(805,`code`),cN(806,`p-keydown`),ag(),cN(807,`.`),ag(),Tl(808,`blockquote`)(809,`p`),cN(810,`Exibe ou oculta o conteúdo do componente `),Tl(811,`code`),cN(812,`po-helper`),ag(),cN(813,` quando o componente estiver com foco.`),ag()(),Tl(814,`pre`)(815,`code`),cN(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),ag()(),Tl(817,`pre`)(818,`code`),cN(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(820,`br`),Tl(821,`h3`),cN(822,`Interfaces`),ag(),Tl(823,`h4`,34)(824,`code`,5),cN(825,`PoCheckboxGroupOption`),ag()(),Tl(826,`div`,2)(827,`p`),cN(828,`Interface para as ações do componente po-checkbox-group.`),ag()(),Tl(829,`h4`,10),cN(830,`Propriedades`),ag(),Tl(831,`table`,11)(832,`tr`,12)(833,`th`,13),cN(834,`Nome`),ag(),Tl(835,`th`,13),cN(836,`Tipo`),ag(),Tl(837,`th`,13),cN(838,`Descrição`),ag()(),Tl(839,`tr`,14)(840,`td`,15)(841,`div`,23)(842,`span`,24),cN(843,` disabled`),Gl(844,`br`),ag()()(),Tl(845,`td`,19)(846,`code`,26),cN(847,`boolean`),ag()(),Tl(848,`td`,22)(849,`em`)(850,`strong`),cN(851,`(opcional)`),ag()(),Tl(852,`p`),cN(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),ag(),Tl(854,`p`),cN(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),ag()()(),Tl(856,`tr`,14)(857,`td`,15)(858,`div`,23)(859,`span`,24),cN(860,` label`),Gl(861,`br`),ag()()(),Tl(862,`td`,19)(863,`code`,25),cN(864,`string`),ag()(),Tl(865,`td`,22)(866,`p`),cN(867,`Texto exibido para o usuário ao lado do checkbox.`),ag()()(),Tl(868,`tr`,14)(869,`td`,15)(870,`div`,23)(871,`span`,24),cN(872,` value`),Gl(873,`br`),ag()()(),Tl(874,`td`,19)(875,`code`,25),cN(876,`string`),ag()(),Tl(877,`td`,22)(878,`p`),cN(879,`Valor retornado no model.`),ag(),Tl(880,`p`),cN(881,`É possível usar os valores `),Tl(882,`code`),cN(883,`true`),ag(),cN(884,` e `),Tl(885,`code`),cN(886,`false`),ag(),cN(887,`, caso a propriedade `),Tl(888,`code`),cN(889,`p-indeterminate`),ag(),cN(890,` esteja setada como `),Tl(891,`code`),cN(892,`true`),ag(),cN(893,`
passa a aceitar `),Tl(894,`code`),cN(895,`null`),ag(),cN(896,` também, por padrão esse valor sempre será setado como `),Tl(897,`code`),cN(898,`false`),ag(),cN(899,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var qe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Checkbox Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(p,n){p&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-checkbox-group-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-checkbox-group-basic-view`)(6,`sample-po-checkbox-group-labs-view`)(7,`sample-po-checkbox-group-password-policy-view`),ag()()()),p&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,me,ce,be,he],encapsulation:2,changeDetection:1})}return a})()}];var Ee=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[bL.forChild(qe),bL]})}return a})();var pt=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=he$1({type:a});static ɵinj=ue$1({imports:[ar,Ee]})}return a})();export{pt as DocPoCheckboxGroupModule};