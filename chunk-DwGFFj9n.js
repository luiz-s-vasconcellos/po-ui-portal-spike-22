import{$r as Zn,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Lr as SF,Mn as w5,Pi as mt,Ri as nu,Rt as _oe,Sr as Mm,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,_a as yO,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,ki as kF,mi as gO,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Ce=()=>({label:`Option 1`,value:`1`});var we=()=>({label:`Option 2`,value:`2`});var ye=(i,ve)=>[i,ve];var de=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(r,n){r&1&&nu(0,`po-radio-group`,0),r&2&&jE(`p-options`,yO(3,ye,gO(1,Ce),gO(2,we)))},dependencies:[Ote],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Radio Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-radio-group-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(r,n){if(r&1){let m=Sx();jc(0,`po-radio-group`,2),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.radioGroup,l)||(n.radioGroup=l),v_(l)}),mt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4)(4,`po-info`,5),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.option.label,l)||(n.option.label=l),v_(l)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.option.value,l)||(n.option.value=l),v_(l)}),wg(),jc(11,`po-switch`,8),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.option.disabled,l)||(n.option.disabled=l),v_(l)}),wg()(),jc(12,`div`,3)(13,`po-button`,9),mt(`p-click`,function(){y_(m);let l=Fx(7);return n.addOption(),v_(l.reset())}),wg()()(),nu(14,`po-divider`),jc(15,`form`,null,1)(17,`po-input`,10),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.label,l)||(n.label=l),v_(l)}),wg(),jc(18,`po-input`,11),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.help,l)||(n.help=l),v_(l)}),wg(),jc(19,`po-input`,12),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.helperText,l)||(n.helperText=l),v_(l)}),wg(),jc(20,`po-input`,13),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),v_(l)}),wg(),jc(21,`po-radio-group`,14),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.columns,l)||(n.columns=l),v_(l)}),wg(),jc(22,`po-checkbox-group`,15),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.properties,l)||(n.properties=l),v_(l)}),wg(),jc(23,`po-radio-group`,16),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.size,l)||(n.size=l),v_(l)}),wg(),jc(24,`div`,3)(25,`po-button`,17),mt(`click`,function(){return y_(m),Fx(16).reset(),v_(n.restore())}),wg()()()}if(r&2){let m=Fx(7);ib(`ngModel`,n.radioGroup),jE(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),t0(),rg(3),jE(`p-value`,n.radioGroup),rg(),jE(`p-value`,n.event),rg(5),ib(`ngModel`,n.option.label),t0(),rg(),ib(`ngModel`,n.option.value),t0(),rg(),ib(`ngModel`,n.option.disabled),t0(),rg(2),jE(`p-disabled`,m.invalid),rg(4),ib(`ngModel`,n.label),t0(),rg(),ib(`ngModel`,n.help),t0(),rg(),ib(`ngModel`,n.helperText),t0(),rg(),ib(`ngModel`,n.fieldErrorMessage),t0(),rg(),ib(`ngModel`,n.columns),jE(`p-options`,n.columnOptions),t0(),rg(),ib(`ngModel`,n.properties),jE(`p-options`,n.propertiesOptions),t0(),rg(),ib(`ngModel`,n.size),jE(`p-options`,n.sizesOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,w5,_oe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Radio Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-radio-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
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

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  helperText: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-radio-group-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Re,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(r,n){if(r&1){let m=Sx();jc(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.language,l)||(n.language=l),v_(l)}),mt(`p-change`,function(l){return n.changeLanguage(l)}),wg(),jc(4,`po-select`,3),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.original,l)||(n.original=l),v_(l)}),mt(`p-change`,function(l){return n.changeLanguage(l)}),wg(),jc(5,`po-input`,4),JN(),ob(`ngModelChange`,function(l){return y_(m),sO(n.translated,l)||(n.translated=l),v_(l)}),wg()()()}r&2&&(rg(3),ib(`ngModel`,n.language),jE(`p-options`,n.languageOptions),t0(),rg(),ib(`ngModel`,n.original),jE(`p-options`,n.optionsList),t0(),rg(),ib(`ngModel`,n.translated),t0())},dependencies:[wK,CK,EK,TF,EF,A5,Ote,moe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Radio Group - Translator`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-radio-group-translator`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{formBuilder=p(MK);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,Mm.required],original:[void 0,Mm.required],translated:[void 0,Mm.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(r,n){r&1&&(jc(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),JN(),mt(`p-change`,function(){return n.changeLanguage()}),wg(),jc(3,`po-select`,3),JN(),mt(`p-change`,function(){return n.changeLanguage()}),wg(),jc(4,`po-input`,4),JN(),wg()()()),r&2&&(jE(`formGroup`,n.translatorForm),rg(2),jE(`p-options`,n.languageOptions),t0(),rg(),jE(`p-options`,n.optionsList),t0(),rg(),t0())},dependencies:[wK,CK,EK,SF,kF,A5,Ote,moe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Radio Group - Translator Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-radio-group-translator-reactive-form`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ke,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,n){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoRadioGroupComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O componente `),jc(24,`code`),iO(25,`po-radio-group`),wg(),iO(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),jc(27,`a`,6)(28,`strong`),iO(29,`po-combo`),wg()(),iO(30,` ou `),jc(31,`a`,7)(32,`strong`),iO(33,`po-select`),wg()(),iO(34,`.`),wg(),jc(35,`p`),iO(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),jc(37,`a`,8)(38,`strong`),iO(39,`po-checkbox-group`),wg()(),iO(40,`.`),wg(),jc(41,`blockquote`)(42,`p`),iO(43,`Ao passar um valor para o `),jc(44,`em`),iO(45,`model`),wg(),iO(46,` que não esteja na lista de opções, o mesmo será definido como `),jc(47,`code`),iO(48,`undefined`),wg(),iO(49,`.`),wg()(),jc(50,`h4`),iO(51,`Acessibilidade tratada no componente interno `),jc(52,`code`),iO(53,`po-radio`),wg(),iO(54,`:`),wg(),jc(55,`p`),iO(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(57,`ul`)(58,`li`),iO(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),jc(60,`a`,9),iO(61,`WCAG 4.1.2: Name, Role, Value`),wg()(),jc(62,`li`),iO(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),jc(64,`a`,10),iO(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),wg()(),jc(66,`li`),iO(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),jc(68,`a`,11),iO(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),wg()(),jc(70,`li`),iO(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(72,`a`,12),iO(73,`(WCAG 2.4.12: Focus Appearance`),wg()()(),jc(74,`p`),iO(75,`Conforme documentação em: `),jc(76,`a`,13),iO(77,`https://doc.animaliads.io/docs/components/radio`),wg()(),jc(78,`h4`),iO(79,`Tokens customizáveis`),wg(),jc(80,`p`),iO(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(82,`br`),iO(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),jc(84,`code`),iO(85,`po-radio`),wg(),iO(86,` que compõem o grupo de opções. `),nu(87,`br`),iO(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),jc(89,`code`),iO(90,`po-radio`),wg(),iO(91,` em vez do próprio `),jc(92,`code`),iO(93,`po-radio-group`),wg(),iO(94,`.`),wg(),jc(95,`blockquote`)(96,`p`),iO(97,`Para maiores informações, acesse o guia `),jc(98,`a`,14),iO(99,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(100,`.`),wg()(),jc(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),iO(105,`Propriedade`),wg(),jc(106,`th`),iO(107,`Descrição`),wg(),jc(108,`th`),iO(109,`Valor Padrão`),wg()()(),jc(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),iO(114,`Default Values`),wg()(),nu(115,`td`)(116,`td`),wg(),jc(117,`tr`)(118,`td`)(119,`code`),iO(120,`--border-color`),wg()(),jc(121,`td`),iO(122,`Cor da borda`),wg(),jc(123,`td`)(124,`code`),iO(125,`var(--color-neutral-dark-70)`),wg()()(),jc(126,`tr`)(127,`td`)(128,`code`),iO(129,`--field-container-title-justify`),wg()(),jc(130,`td`),iO(131,`Alinhamento horizontal do título (`),jc(132,`code`),iO(133,`justify-content`),wg(),iO(134,`)`),wg(),jc(135,`td`)(136,`code`),iO(137,`space-between`),wg()()(),jc(138,`tr`)(139,`td`)(140,`code`),iO(141,`--field-container-title-flex`),wg()(),jc(142,`td`),iO(143,`Flex do título (`),jc(144,`code`),iO(145,`flex`),wg(),iO(146,`)`),wg(),jc(147,`td`)(148,`code`),iO(149,`1 auto`),wg()()(),jc(150,`tr`)(151,`td`)(152,`strong`),iO(153,`Hover`),wg()(),nu(154,`td`)(155,`td`),wg(),jc(156,`tr`)(157,`td`)(158,`code`),iO(159,`--shadow-color-hover`),wg()(),jc(160,`td`),iO(161,`Cor da sombra no estado hover`),wg(),jc(162,`td`)(163,`code`),iO(164,`var(--color-brand-01-lighter)`),wg()()(),jc(165,`tr`)(166,`td`)(167,`code`),iO(168,`--color-hover`),wg()(),jc(169,`td`),iO(170,`Cor principal no estado hover`),wg(),jc(171,`td`)(172,`code`),iO(173,`var(--color-brand-01-dark)`),wg()()(),jc(174,`tr`)(175,`td`)(176,`strong`),iO(177,`Focused`),wg()(),nu(178,`td`)(179,`td`),wg(),jc(180,`tr`)(181,`td`)(182,`code`),iO(183,`--outline-color-focused`),wg()(),jc(184,`td`),iO(185,`Cor do outline do estado de focus`),wg(),jc(186,`td`)(187,`code`),iO(188,`var(--color-brand-01-darkest)`),wg()()(),jc(189,`tr`)(190,`td`)(191,`strong`),iO(192,`checked`),wg()(),nu(193,`td`)(194,`td`),wg(),jc(195,`tr`)(196,`td`)(197,`code`),iO(198,`--color-unchecked`),wg()(),jc(199,`td`),iO(200,`Cor quando não selecionado`),wg(),jc(201,`td`)(202,`code`),iO(203,`var(--color-neutral-light-00)`),wg()()(),jc(204,`tr`)(205,`td`)(206,`code`),iO(207,`--color-checked`),wg()(),jc(208,`td`),iO(209,`Cor quando selecionado`),wg(),jc(210,`td`)(211,`code`),iO(212,`var(--color-action-default)`),wg()()(),jc(213,`tr`)(214,`td`)(215,`strong`),iO(216,`Disabled`),wg()(),nu(217,`td`)(218,`td`),wg(),jc(219,`tr`)(220,`td`)(221,`code`),iO(222,`--color-unchecked-disabled`),wg()(),jc(223,`td`),iO(224,`Cor pricipal quando não selecionado no estado disabled`),wg(),jc(225,`td`)(226,`code`),iO(227,`var(--color-neutral-light-30)`),wg()()(),jc(228,`tr`)(229,`td`)(230,`code`),iO(231,`--color-checked-disabled`),wg()(),jc(232,`td`),iO(233,`Cor pricipal quando selecionado no estado disabled`),wg(),jc(234,`td`)(235,`code`),iO(236,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(237,`div`,15)(238,`h4`,16),iO(239,`Seletor`),wg(),jc(240,`pre`,17),iO(241,`<po-radio-group
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
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),wg()(),jc(242,`h4`,18),iO(243,`Propriedades`),wg(),jc(244,`table`,19)(245,`tr`,20)(246,`th`,21),iO(247,`Nome`),wg(),jc(248,`th`,21),iO(249,`Tipo`),wg(),jc(250,`th`,21),iO(251,`Padrão`),wg(),jc(252,`th`,21),iO(253,`Descrição`),wg()(),jc(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),iO(258,` (p-additional-help)`),nu(259,`br`),wg()(),jc(260,`div`,26),iO(261,`Deprecated`),wg()(),jc(262,`td`,27)(263,`code`,28),iO(264,`EventEmitter`),wg()(),jc(265,`td`,29),iO(266,`-`),wg(),jc(267,`td`,30)(268,`em`)(269,`strong`),iO(270,`(opcional)`),wg()(),jc(271,`p`),iO(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(273,`blockquote`)(274,`p`),iO(275,`Essa propriedade está `),jc(276,`strong`),iO(277,`depreciada`),wg(),iO(278,` e será removida na versão `),jc(279,`code`),iO(280,`23.x.x`),wg(),iO(281,`. Recomendamos utilizar a propriedade `),jc(282,`code`),iO(283,`p-helper`),wg(),iO(284,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(285,`tr`,22)(286,`td`,23)(287,`div`,31)(288,`span`,32),iO(289,` p-additional-help-tooltip`),nu(290,`br`),wg()(),jc(291,`div`,26),iO(292,`Deprecated`),wg()(),jc(293,`td`,27)(294,`code`,33),iO(295,`string`),wg()(),jc(296,`td`,29),iO(297,`-`),wg(),jc(298,`td`,30)(299,`em`)(300,`strong`),iO(301,`(opcional)`),wg()(),jc(302,`p`),iO(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(304,`code`),iO(305,`po-helper`),wg(),iO(306,`.
`),jc(307,`strong`),iO(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(309,`blockquote`)(310,`p`),iO(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(312,`blockquote`)(313,`p`),iO(314,`Essa propriedade está `),jc(315,`strong`),iO(316,`depreciada`),wg(),iO(317,` e será removida na versão `),jc(318,`code`),iO(319,`23.x.x`),wg(),iO(320,`. Recomendamos utilizar a propriedade `),jc(321,`code`),iO(322,`p-helper`),wg(),iO(323,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(324,`tr`,22)(325,`td`,23)(326,`div`,31)(327,`span`,32),iO(328,` p-append-in-body`),nu(329,`br`),wg()()(),jc(330,`td`,27)(331,`code`,34),iO(332,`boolean`),wg()(),jc(333,`td`,29)(334,`p`)(335,`code`),iO(336,`false`),wg()()(),jc(337,`td`,30)(338,`em`)(339,`strong`),iO(340,`(opcional)`),wg()(),jc(341,`p`),iO(342,`Define que o popover (`),jc(343,`code`),iO(344,`p-helper`),wg(),iO(345,` e/ou `),jc(346,`code`),iO(347,`p-error-limit`),wg(),iO(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(349,`blockquote`)(350,`p`),iO(351,`Quando utilizado com `),jc(352,`code`),iO(353,`p-helper`),wg(),iO(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(355,`tr`,22)(356,`td`,23)(357,`div`,31)(358,`span`,32),iO(359,` p-auto-focus`),nu(360,`br`),wg()()(),jc(361,`td`,27)(362,`code`,34),iO(363,`boolean`),wg()(),jc(364,`td`,29)(365,`p`)(366,`code`),iO(367,`false`),wg()()(),jc(368,`td`,30)(369,`em`)(370,`strong`),iO(371,`(opcional)`),wg()(),jc(372,`p`),iO(373,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(374,`blockquote`)(375,`p`),iO(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(377,`tr`,22)(378,`td`,23)(379,`div`,24)(380,`span`,25),iO(381,` (p-change)`),nu(382,`br`),wg()()(),jc(383,`td`,27)(384,`code`,28),iO(385,`EventEmitter`),wg()(),jc(386,`td`,29),iO(387,`-`),wg(),jc(388,`td`,30)(389,`em`)(390,`strong`),iO(391,`(opcional)`),wg()(),jc(392,`p`),iO(393,`Evento ao alterar valor do campo.`),wg()()(),jc(394,`tr`,22)(395,`td`,23)(396,`div`,24)(397,`span`,25),iO(398,` (p-change-model)`),nu(399,`br`),wg()()(),jc(400,`td`,27)(401,`code`,28),iO(402,`EventEmitter`),wg()(),jc(403,`td`,29),iO(404,`-`),wg(),jc(405,`td`,30)(406,`em`)(407,`strong`),iO(408,`(opcional)`),wg()(),jc(409,`p`),iO(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(411,`code`),iO(412,`setValue`),wg(),iO(413,`, `),jc(414,`code`),iO(415,`patchValue`),wg(),iO(416,`, carregamento assíncrono).`),wg(),jc(417,`p`),iO(418,`Diferentemente do `),jc(419,`code`),iO(420,`p-change`),wg(),iO(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(422,`code`),iO(423,`p-change-model`),wg(),iO(424,` cobre todos os cenários de alteração de valor.`),wg(),jc(425,`p`),iO(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(427,`tr`,22)(428,`td`,23)(429,`div`,31)(430,`span`,32),iO(431,` p-columns`),nu(432,`br`),wg()()(),jc(433,`td`,27)(434,`code`,35),iO(435,`number`),wg()(),jc(436,`td`,29)(437,`p`)(438,`code`),iO(439,`2`),wg()()(),jc(440,`td`,30)(441,`em`)(442,`strong`),iO(443,`(opcional)`),wg()(),jc(444,`p`),iO(445,`Define a quantidade de colunas para exibição das opções.`),wg(),jc(446,`p`)(447,`strong`),iO(448,`Considerações:`),wg()(),jc(449,`ul`)(450,`li`),iO(451,`É possível exibir as opções entre `),jc(452,`code`),iO(453,`1`),wg(),iO(454,` e `),jc(455,`code`),iO(456,`4`),wg(),iO(457,` colunas.`),wg(),jc(458,`li`),iO(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),jc(460,`ul`)(461,`li`)(462,`code`),iO(463,`sm`),wg(),iO(464,`: `),jc(465,`code`),iO(466,`1`),wg()(),jc(467,`li`)(468,`code`),iO(469,`md`),wg(),iO(470,`: `),jc(471,`code`),iO(472,`2`),wg()()()()()()(),jc(473,`tr`,22)(474,`td`,23)(475,`div`,31)(476,`span`,32),iO(477,` p-compact-label`),nu(478,`br`),wg()()(),jc(479,`td`,27)(480,`code`,34),iO(481,`boolean`),wg()(),jc(482,`td`,29)(483,`p`)(484,`code`),iO(485,`false`),wg()()(),jc(486,`td`,30)(487,`em`)(488,`strong`),iO(489,`(opcional)`),wg()(),jc(490,`p`),iO(491,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(492,`p`),iO(493,`Quando habilitado (`),jc(494,`code`),iO(495,`true`),wg(),iO(496,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(497,`ul`)(498,`li`)(499,`code`),iO(500,`po-label`),wg()(),jc(501,`li`)(502,`code`),iO(503,`p-requirement (showRequired)`),wg()(),jc(504,`li`)(505,`code`),iO(506,`po-helper`),wg()()(),jc(507,`p`),iO(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(509,`p`),iO(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(511,`ul`)(512,`li`)(513,`code`),iO(514,`--field-container-title-justify`),wg()(),jc(515,`li`)(516,`code`),iO(517,`--field-container-title-flex`),wg()()(),jc(518,`p`),iO(519,`Exemplo:`),wg(),jc(520,`pre`)(521,`code`),iO(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(523,`p`),iO(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(525,`tr`,22)(526,`td`,23)(527,`div`,31)(528,`span`,32),iO(529,` p-disabled`),nu(530,`br`),wg()()(),jc(531,`td`,27)(532,`code`,34),iO(533,`boolean`),wg()(),jc(534,`td`,29)(535,`p`)(536,`code`),iO(537,`false`),wg()()(),jc(538,`td`,30)(539,`em`)(540,`strong`),iO(541,`(opcional)`),wg()(),jc(542,`p`),iO(543,`Indica que o campo será desabilitado.`),wg()()(),jc(544,`tr`,22)(545,`td`,23)(546,`div`,31)(547,`span`,32),iO(548,` p-error-limit`),nu(549,`br`),wg()()(),jc(550,`td`,27)(551,`code`,34),iO(552,`boolean`),wg()(),jc(553,`td`,29)(554,`p`)(555,`code`),iO(556,`false`),wg()()(),jc(557,`td`,30)(558,`em`)(559,`strong`),iO(560,`(opcional)`),wg()(),jc(561,`p`),iO(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(563,`blockquote`)(564,`p`),iO(565,`Caso essa propriedade seja definida como `),jc(566,`code`),iO(567,`true`),wg(),iO(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(569,`tr`,22)(570,`td`,23)(571,`div`,31)(572,`span`,32),iO(573,` p-field-error-message`),nu(574,`br`),wg()()(),jc(575,`td`,27)(576,`code`,33),iO(577,`string`),wg()(),jc(578,`td`,29),iO(579,`-`),wg(),jc(580,`td`,30)(581,`em`)(582,`strong`),iO(583,`(opcional)`),wg()(),jc(584,`p`),iO(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(586,`blockquote`)(587,`p`),iO(588,`Necessário que a propriedade `),jc(589,`code`),iO(590,`p-required`),wg(),iO(591,` esteja habilitada.`),wg()()()(),jc(592,`tr`,22)(593,`td`,23)(594,`div`,31)(595,`span`,32),iO(596,` p-help`),nu(597,`br`),wg()()(),jc(598,`td`,27)(599,`code`,33),iO(600,`string`),wg()(),jc(601,`td`,29),iO(602,`-`),wg(),jc(603,`td`,30)(604,`em`)(605,`strong`),iO(606,`(opcional)`),wg()(),jc(607,`p`),iO(608,`Texto de apoio do campo.`),wg()()(),jc(609,`tr`,22)(610,`td`,23)(611,`div`,24)(612,`span`,25),iO(613,` (p-keydown)`),nu(614,`br`),wg()()(),jc(615,`td`,27)(616,`code`,28),iO(617,`EventEmitter`),wg()(),jc(618,`td`,29),iO(619,`-`),wg(),jc(620,`td`,30)(621,`em`)(622,`strong`),iO(623,`(opcional)`),wg()(),jc(624,`p`),iO(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(626,`code`),iO(627,`KeyboardEvent`),wg(),iO(628,` com informações sobre a tecla.`),wg()()(),jc(629,`tr`,22)(630,`td`,23)(631,`div`,31)(632,`span`,32),iO(633,` p-label`),nu(634,`br`),wg()()(),jc(635,`td`,27)(636,`code`,33),iO(637,`string`),wg()(),jc(638,`td`,29),iO(639,`-`),wg(),jc(640,`td`,30)(641,`em`)(642,`strong`),iO(643,`(opcional)`),wg()(),jc(644,`p`),iO(645,`Label do campo.`),wg()()(),jc(646,`tr`,22)(647,`td`,23)(648,`div`,31)(649,`span`,32),iO(650,` p-label-text-wrap`),nu(651,`br`),wg()()(),jc(652,`td`,27)(653,`code`,34),iO(654,`boolean`),wg()(),jc(655,`td`,29)(656,`p`)(657,`code`),iO(658,`false`),wg()()(),jc(659,`td`,30)(660,`em`)(661,`strong`),iO(662,`(opcional)`),wg()(),jc(663,`p`),iO(664,`Habilita a quebra automática do texto da propriedade `),jc(665,`code`),iO(666,`p-label`),wg(),iO(667,`. Quando `),jc(668,`code`),iO(669,`p-label-text-wrap`),wg(),iO(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(671,`tr`,22)(672,`td`,23)(673,`div`,31)(674,`span`,32),iO(675,` name`),nu(676,`br`),wg()()(),jc(677,`td`,27)(678,`code`,33),iO(679,`string`),wg()(),jc(680,`td`,29),iO(681,`-`),wg(),jc(682,`td`,30)(683,`p`),iO(684,`Nome das opções.`),wg()()(),jc(685,`tr`,22)(686,`td`,23)(687,`div`,31)(688,`span`,32),iO(689,` p-optional`),nu(690,`br`),wg()()(),jc(691,`td`,27)(692,`code`,34),iO(693,`boolean`),wg()(),jc(694,`td`,29)(695,`p`)(696,`code`),iO(697,`false`),wg()()(),jc(698,`td`,30)(699,`em`)(700,`strong`),iO(701,`(opcional)`),wg()(),jc(702,`p`),iO(703,`Define se a indicação de campo opcional será exibida.`),wg(),jc(704,`blockquote`)(705,`p`),iO(706,`Não será exibida a indicação se:`),wg()(),jc(707,`ul`)(708,`li`),iO(709,`O campo conter `),jc(710,`code`),iO(711,`p-required`),wg(),iO(712,`;`),wg(),jc(713,`li`),iO(714,`Não possuir `),jc(715,`code`),iO(716,`p-help`),wg(),iO(717,` e/ou `),jc(718,`code`),iO(719,`p-label`),wg(),iO(720,`.`),wg()()()(),jc(721,`tr`,22)(722,`td`,23)(723,`div`,31)(724,`span`,32),iO(725,` p-options`),nu(726,`br`),wg()()(),jc(727,`td`,27)(728,`code`,36),iO(729,`PoRadioGroupOption[]`),wg()(),jc(730,`td`,29),iO(731,`-`),wg(),jc(732,`td`,30)(733,`p`),iO(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),wg()()(),jc(735,`tr`,22)(736,`td`,23)(737,`div`,31)(738,`span`,32),iO(739,` p-helper`),nu(740,`br`),wg()()(),jc(741,`td`,27)(742,`code`,37),iO(743,`PoHelperOptions `),wg(),jc(744,`code`,33),iO(745,` string`),wg()(),jc(746,`td`,29),iO(747,`-`),wg(),jc(748,`td`,30)(749,`em`)(750,`strong`),iO(751,`(opcional)`),wg()(),jc(752,`p`),iO(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(754,`code`),iO(755,`p-label`),wg(),iO(756,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(757,`code`),iO(758,`p-label`),wg(),iO(759,`.`),wg(),jc(760,`blockquote`)(761,`p`),iO(762,`Para mais informações acesse: `),jc(763,`a`,38),iO(764,`https://po-ui.io/documentation/po-helper`),wg(),iO(765,`.`),wg()(),jc(766,`blockquote`)(767,`p`),iO(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(769,`code`),iO(770,`p-additional-help-tooltip`),wg(),iO(771,` e `),jc(772,`code`),iO(773,`p-additional-help`),wg(),iO(774,`) será ignorado.`),wg()()()(),jc(775,`tr`,22)(776,`td`,23)(777,`div`,31)(778,`span`,32),iO(779,` p-required`),nu(780,`br`),wg()()(),jc(781,`td`,27)(782,`code`,34),iO(783,`boolean`),wg()(),jc(784,`td`,29)(785,`p`)(786,`code`),iO(787,`false`),wg()()(),jc(788,`td`,30)(789,`em`)(790,`strong`),iO(791,`(opcional)`),wg()(),jc(792,`p`),iO(793,`Define que o campo será obrigatório.`),wg()()(),jc(794,`tr`,22)(795,`td`,23)(796,`div`,31)(797,`span`,32),iO(798,` p-show-required`),nu(799,`br`),wg()()(),jc(800,`td`,27)(801,`code`,34),iO(802,`boolean`),wg()(),jc(803,`td`,29),iO(804,`-`),wg(),jc(805,`td`,30)(806,`p`),iO(807,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(808,`blockquote`)(809,`p`),iO(810,`Não será exibida a indicação se:`),wg()(),jc(811,`ul`)(812,`li`),iO(813,`Não possuir `),jc(814,`code`),iO(815,`p-help`),wg(),iO(816,` e/ou `),jc(817,`code`),iO(818,`p-label`),wg(),iO(819,`.`),wg()()()(),jc(820,`tr`,22)(821,`td`,23)(822,`div`,31)(823,`span`,32),iO(824,` p-size`),nu(825,`br`),wg()()(),jc(826,`td`,27)(827,`code`,33),iO(828,`string`),wg()(),jc(829,`td`,29)(830,`p`)(831,`code`),iO(832,`medium`),wg()()(),jc(833,`td`,30)(834,`em`)(835,`strong`),iO(836,`(opcional)`),wg()(),jc(837,`p`),iO(838,`Define o tamanho dos radios do componente:`),wg(),jc(839,`ul`)(840,`li`)(841,`code`),iO(842,`small`),wg(),iO(843,`: 16x16 (disponível apenas para acessibilidade AA).`),wg(),jc(844,`li`)(845,`code`),iO(846,`medium`),wg(),iO(847,`: 24x24.`),wg()(),jc(848,`blockquote`)(849,`p`),iO(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(851,`code`),iO(852,`medium`),wg(),iO(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(854,`a`,39),iO(855,`po-theme`),wg(),iO(856,`.`),wg()()()()(),jc(857,`h3`,18),iO(858,`Métodos`),wg(),jc(859,`table`,40)(860,`tr`,22)(861,`th`,41)(862,`div`,31)(863,`h4`)(864,`span`,32),iO(865,` focus `),wg()()()()(),jc(866,`tr`,30)(867,`td`,30)(868,`p`),iO(869,`Função que atribui foco ao componente.`),wg(),jc(870,`p`),iO(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(872,`pre`)(873,`code`),iO(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),wg()()()()(),nu(875,`br`),jc(876,`table`,40)(877,`tr`,22)(878,`th`,41)(879,`div`,31)(880,`h4`)(881,`span`,32),iO(882,` showAdditionalHelp `),wg()()()()(),jc(883,`tr`,30)(884,`td`,30)(885,`p`),iO(886,`Método que exibe `),jc(887,`code`),iO(888,`p-helper`),wg(),iO(889,` ou executa a ação definida em `),jc(890,`code`),iO(891,`p-helper{eventOnClick}`),wg(),iO(892,` ou em `),jc(893,`code`),iO(894,`p-additionalHelp`),wg(),iO(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(896,`code`),iO(897,`p-keydown`),wg(),iO(898,`.`),wg(),jc(899,`blockquote`)(900,`p`),iO(901,`Exibe ou oculta o conteúdo do componente `),jc(902,`code`),iO(903,`po-helper`),wg(),iO(904,` quando o componente estiver com foco.`),wg()(),jc(905,`pre`)(906,`code`),iO(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),wg()(),jc(908,`pre`)(909,`code`),iO(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(911,`br`),jc(912,`h3`),iO(913,`Interfaces`),wg(),jc(914,`h4`,42)(915,`code`,5),iO(916,`PoRadioGroupOption`),wg()(),jc(917,`div`,2)(918,`p`),iO(919,`Interface para as ações do componente po-radio-group.`),wg()(),jc(920,`h4`,18),iO(921,`Propriedades`),wg(),jc(922,`table`,19)(923,`tr`,20)(924,`th`,21),iO(925,`Nome`),wg(),jc(926,`th`,21),iO(927,`Tipo`),wg(),jc(928,`th`,21),iO(929,`Descrição`),wg()(),jc(930,`tr`,22)(931,`td`,23)(932,`div`,31)(933,`span`,32),iO(934,` disabled`),nu(935,`br`),wg()()(),jc(936,`td`,27)(937,`code`,34),iO(938,`boolean`),wg()(),jc(939,`td`,30)(940,`em`)(941,`strong`),iO(942,`(opcional)`),wg()(),jc(943,`p`),iO(944,`Desabilita o radio.`),wg()()(),jc(945,`tr`,22)(946,`td`,23)(947,`div`,31)(948,`span`,32),iO(949,` label`),nu(950,`br`),wg()()(),jc(951,`td`,27)(952,`code`,33),iO(953,`string`),wg()(),jc(954,`td`,30)(955,`p`),iO(956,`Texto do radio.`),wg()()(),jc(957,`tr`,22)(958,`td`,23)(959,`div`,31)(960,`span`,32),iO(961,` value`),nu(962,`br`),wg()()(),jc(963,`td`,27)(964,`code`,33),iO(965,`string `),wg(),jc(966,`code`,35),iO(967,` number`),wg()(),jc(968,`td`,30)(969,`p`),iO(970,`Valor do radio.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var Be=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Radio Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-radio-group-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-radio-group-basic-view`)(6,`sample-po-radio-group-labs-view`)(7,`sample-po-radio-group-translator-view`)(8,`sample-po-radio-group-translator-reactive-form-view`),wg()()()),r&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,me,ce,Ee,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[C1.forChild(Be),C1]})}return i})();var bt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[Ta,fe]})}return i})();export{bt as DocPoRadioGroupModule};