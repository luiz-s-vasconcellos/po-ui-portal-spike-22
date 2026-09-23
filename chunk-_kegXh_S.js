import{$r as Vx,Br as TN,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,Lr as RN,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,ea as p0,ga as w,hr as MY,ki as fm,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var Ce=()=>({label:`Option 1`,value:`1`});var we=()=>({label:`Option 2`,value:`2`});var ye=(i,ve)=>[i,ve];var de=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(r,n){r&1&&ql(0,`po-radio-group`,0),r&2&&cw(`p-options`,RN(3,ye,TN(1,Ce),TN(2,we)))},dependencies:[q0e],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Radio Group Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-radio-group-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(r,n){if(r&1){let m=Vx();Ml(0,`po-radio-group`,2),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.radioGroup,l)||(n.radioGroup=l),Jy(l)}),ht(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,3),ql(3,`po-info`,4)(4,`po-info`,5),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.option.label,l)||(n.option.label=l),Jy(l)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.option.value,l)||(n.option.value=l),Jy(l)}),lg(),f0(),Ml(11,`po-switch`,8),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.option.disabled,l)||(n.option.disabled=l),Jy(l)}),lg(),f0(),lg(),Ml(12,`div`,3)(13,`po-button`,9),ht(`p-click`,function(){Qy(m);let l=Yx(7);return n.addOption(),Jy(l.reset())}),lg()()(),ql(14,`po-divider`),Ml(15,`form`,null,1)(17,`po-input`,10),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.label,l)||(n.label=l),Jy(l)}),lg(),f0(),Ml(18,`po-input`,11),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.help,l)||(n.help=l),Jy(l)}),lg(),f0(),Ml(19,`po-input`,12),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.helperText,l)||(n.helperText=l),Jy(l)}),lg(),f0(),Ml(20,`po-input`,13),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Jy(l)}),lg(),f0(),Ml(21,`po-radio-group`,14),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.columns,l)||(n.columns=l),Jy(l)}),lg(),f0(),Ml(22,`po-checkbox-group`,15),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.properties,l)||(n.properties=l),Jy(l)}),lg(),f0(),Ml(23,`po-radio-group`,16),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.size,l)||(n.size=l),Jy(l)}),lg(),f0(),Ml(24,`div`,3)(25,`po-button`,17),ht(`click`,function(){return Qy(m),Yx(16).reset(),Jy(n.restore())}),lg()()()}if(r&2){let m=Yx(7);Tw(`ngModel`,n.radioGroup),cw(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),p0(),Up(3),cw(`p-value`,n.radioGroup),Up(),cw(`p-value`,n.event),Up(5),Tw(`ngModel`,n.option.label),p0(),Up(),Tw(`ngModel`,n.option.value),p0(),Up(),Tw(`ngModel`,n.option.disabled),p0(),Up(2),cw(`p-disabled`,m.invalid),Up(4),Tw(`ngModel`,n.label),p0(),Up(),Tw(`ngModel`,n.help),p0(),Up(),Tw(`ngModel`,n.helperText),p0(),Up(),Tw(`ngModel`,n.fieldErrorMessage),p0(),Up(),Tw(`ngModel`,n.columns),cw(`p-options`,n.columnOptions),p0(),Up(),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0(),Up(),Tw(`ngModel`,n.size),cw(`p-options`,n.sizesOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,J4,kbe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Radio Group Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-radio-group
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-radio-group-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Re,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(r,n){if(r&1){let m=Vx();Ml(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.language,l)||(n.language=l),Jy(l)}),ht(`p-change`,function(l){return n.changeLanguage(l)}),lg(),f0(),Ml(4,`po-select`,3),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.original,l)||(n.original=l),Jy(l)}),ht(`p-change`,function(l){return n.changeLanguage(l)}),lg(),f0(),Ml(5,`po-input`,4),Mw(`ngModelChange`,function(l){return Qy(m),yN(n.translated,l)||(n.translated=l),Jy(l)}),lg(),f0(),lg()()}r&2&&(Up(3),Tw(`ngModel`,n.language),cw(`p-options`,n.languageOptions),p0(),Up(),Tw(`ngModel`,n.original),cw(`p-options`,n.optionsList),p0(),Up(),Tw(`ngModel`,n.translated),p0())},dependencies:[IY,wY,CY,Vk,kk,lU,q0e,Tbe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Radio Group - Translator`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #f="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-radio-group-translator`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{formBuilder=f(MY);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,fm.required],original:[void 0,fm.required],translated:[void 0,fm.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(r,n){r&1&&(Ml(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),ht(`p-change`,function(){return n.changeLanguage()}),lg(),f0(),Ml(3,`po-select`,3),ht(`p-change`,function(){return n.changeLanguage()}),lg(),f0(),ql(4,`po-input`,4),f0(),lg()()),r&2&&(cw(`formGroup`,n.translatorForm),Up(2),cw(`p-options`,n.languageOptions),p0(),Up(),cw(`p-options`,n.optionsList),p0(),Up(),p0())},dependencies:[IY,wY,CY,qk,Wk,lU,q0e,Tbe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Radio Group - Translator Reactive Form`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form [formGroup]="translatorForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-radio-group-translator-reactive-form`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,n){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoRadioGroupComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O componente `),Ml(24,`code`),mN(25,`po-radio-group`),lg(),mN(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Ml(27,`a`,6)(28,`strong`),mN(29,`po-combo`),lg()(),mN(30,` ou `),Ml(31,`a`,7)(32,`strong`),mN(33,`po-select`),lg()(),mN(34,`.`),lg(),Ml(35,`p`),mN(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Ml(37,`a`,8)(38,`strong`),mN(39,`po-checkbox-group`),lg()(),mN(40,`.`),lg(),Ml(41,`blockquote`)(42,`p`),mN(43,`Ao passar um valor para o `),Ml(44,`em`),mN(45,`model`),lg(),mN(46,` que não esteja na lista de opções, o mesmo será definido como `),Ml(47,`code`),mN(48,`undefined`),lg(),mN(49,`.`),lg()(),Ml(50,`h4`),mN(51,`Acessibilidade tratada no componente interno `),Ml(52,`code`),mN(53,`po-radio`),lg(),mN(54,`:`),lg(),Ml(55,`p`),mN(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),lg(),Ml(57,`ul`)(58,`li`),mN(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Ml(60,`a`,9),mN(61,`WCAG 4.1.2: Name, Role, Value`),lg()(),Ml(62,`li`),mN(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),Ml(64,`a`,10),mN(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),lg()(),Ml(66,`li`),mN(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),Ml(68,`a`,11),mN(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),lg()(),Ml(70,`li`),mN(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Ml(72,`a`,12),mN(73,`(WCAG 2.4.12: Focus Appearance`),lg()()(),Ml(74,`p`),mN(75,`Conforme documentação em: `),Ml(76,`a`,13),mN(77,`https://doc.animaliads.io/docs/components/radio`),lg()(),Ml(78,`h4`),mN(79,`Tokens customizáveis`),lg(),Ml(80,`p`),mN(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(82,`br`),mN(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Ml(84,`code`),mN(85,`po-radio`),lg(),mN(86,` que compõem o grupo de opções. `),ql(87,`br`),mN(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Ml(89,`code`),mN(90,`po-radio`),lg(),mN(91,` em vez do próprio `),Ml(92,`code`),mN(93,`po-radio-group`),lg(),mN(94,`.`),lg(),Ml(95,`blockquote`)(96,`p`),mN(97,`Para maiores informações, acesse o guia `),Ml(98,`a`,14),mN(99,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(100,`.`),lg()(),Ml(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),mN(105,`Propriedade`),lg(),Ml(106,`th`),mN(107,`Descrição`),lg(),Ml(108,`th`),mN(109,`Valor Padrão`),lg()()(),Ml(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),mN(114,`Default Values`),lg()(),ql(115,`td`)(116,`td`),lg(),Ml(117,`tr`)(118,`td`)(119,`code`),mN(120,`--border-color`),lg()(),Ml(121,`td`),mN(122,`Cor da borda`),lg(),Ml(123,`td`)(124,`code`),mN(125,`var(--color-neutral-dark-70)`),lg()()(),Ml(126,`tr`)(127,`td`)(128,`code`),mN(129,`--field-container-title-justify`),lg()(),Ml(130,`td`),mN(131,`Alinhamento horizontal do título (`),Ml(132,`code`),mN(133,`justify-content`),lg(),mN(134,`)`),lg(),Ml(135,`td`)(136,`code`),mN(137,`space-between`),lg()()(),Ml(138,`tr`)(139,`td`)(140,`code`),mN(141,`--field-container-title-flex`),lg()(),Ml(142,`td`),mN(143,`Flex do título (`),Ml(144,`code`),mN(145,`flex`),lg(),mN(146,`)`),lg(),Ml(147,`td`)(148,`code`),mN(149,`1 auto`),lg()()(),Ml(150,`tr`)(151,`td`)(152,`strong`),mN(153,`Hover`),lg()(),ql(154,`td`)(155,`td`),lg(),Ml(156,`tr`)(157,`td`)(158,`code`),mN(159,`--shadow-color-hover`),lg()(),Ml(160,`td`),mN(161,`Cor da sombra no estado hover`),lg(),Ml(162,`td`)(163,`code`),mN(164,`var(--color-brand-01-lighter)`),lg()()(),Ml(165,`tr`)(166,`td`)(167,`code`),mN(168,`--color-hover`),lg()(),Ml(169,`td`),mN(170,`Cor principal no estado hover`),lg(),Ml(171,`td`)(172,`code`),mN(173,`var(--color-brand-01-dark)`),lg()()(),Ml(174,`tr`)(175,`td`)(176,`strong`),mN(177,`Focused`),lg()(),ql(178,`td`)(179,`td`),lg(),Ml(180,`tr`)(181,`td`)(182,`code`),mN(183,`--outline-color-focused`),lg()(),Ml(184,`td`),mN(185,`Cor do outline do estado de focus`),lg(),Ml(186,`td`)(187,`code`),mN(188,`var(--color-brand-01-darkest)`),lg()()(),Ml(189,`tr`)(190,`td`)(191,`strong`),mN(192,`checked`),lg()(),ql(193,`td`)(194,`td`),lg(),Ml(195,`tr`)(196,`td`)(197,`code`),mN(198,`--color-unchecked`),lg()(),Ml(199,`td`),mN(200,`Cor quando não selecionado`),lg(),Ml(201,`td`)(202,`code`),mN(203,`var(--color-neutral-light-00)`),lg()()(),Ml(204,`tr`)(205,`td`)(206,`code`),mN(207,`--color-checked`),lg()(),Ml(208,`td`),mN(209,`Cor quando selecionado`),lg(),Ml(210,`td`)(211,`code`),mN(212,`var(--color-action-default)`),lg()()(),Ml(213,`tr`)(214,`td`)(215,`strong`),mN(216,`Disabled`),lg()(),ql(217,`td`)(218,`td`),lg(),Ml(219,`tr`)(220,`td`)(221,`code`),mN(222,`--color-unchecked-disabled`),lg()(),Ml(223,`td`),mN(224,`Cor pricipal quando não selecionado no estado disabled`),lg(),Ml(225,`td`)(226,`code`),mN(227,`var(--color-neutral-light-30)`),lg()()(),Ml(228,`tr`)(229,`td`)(230,`code`),mN(231,`--color-checked-disabled`),lg()(),Ml(232,`td`),mN(233,`Cor pricipal quando selecionado no estado disabled`),lg(),Ml(234,`td`)(235,`code`),mN(236,`var(--color-neutral-dark-70)`),lg()()()()()(),Ml(237,`div`,15)(238,`h4`,16),mN(239,`Seletor`),lg(),Ml(240,`pre`,17),mN(241,`<po-radio-group
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
`),lg()(),Ml(242,`h4`,18),mN(243,`Propriedades`),lg(),Ml(244,`table`,19)(245,`tr`,20)(246,`th`,21),mN(247,`Nome`),lg(),Ml(248,`th`,21),mN(249,`Tipo`),lg(),Ml(250,`th`,21),mN(251,`Padrão`),lg(),Ml(252,`th`,21),mN(253,`Descrição`),lg()(),Ml(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),mN(258,` (p-additional-help)`),ql(259,`br`),lg()(),Ml(260,`div`,26),mN(261,`Deprecated`),lg()(),Ml(262,`td`,27)(263,`code`,28),mN(264,`EventEmitter`),lg()(),Ml(265,`td`,29),mN(266,`-`),lg(),Ml(267,`td`,30)(268,`em`)(269,`strong`),mN(270,`(opcional)`),lg()(),Ml(271,`p`),mN(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(273,`blockquote`)(274,`p`),mN(275,`Essa propriedade está `),Ml(276,`strong`),mN(277,`depreciada`),lg(),mN(278,` e será removida na versão `),Ml(279,`code`),mN(280,`23.x.x`),lg(),mN(281,`. Recomendamos utilizar a propriedade `),Ml(282,`code`),mN(283,`p-helper`),lg(),mN(284,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(285,`tr`,22)(286,`td`,23)(287,`div`,31)(288,`span`,32),mN(289,` p-additional-help-tooltip`),ql(290,`br`),lg()(),Ml(291,`div`,26),mN(292,`Deprecated`),lg()(),Ml(293,`td`,27)(294,`code`,33),mN(295,`string`),lg()(),Ml(296,`td`,29),mN(297,`-`),lg(),Ml(298,`td`,30)(299,`em`)(300,`strong`),mN(301,`(opcional)`),lg()(),Ml(302,`p`),mN(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(304,`code`),mN(305,`po-helper`),lg(),mN(306,`.
`),Ml(307,`strong`),mN(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(309,`blockquote`)(310,`p`),mN(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(312,`blockquote`)(313,`p`),mN(314,`Essa propriedade está `),Ml(315,`strong`),mN(316,`depreciada`),lg(),mN(317,` e será removida na versão `),Ml(318,`code`),mN(319,`23.x.x`),lg(),mN(320,`. Recomendamos utilizar a propriedade `),Ml(321,`code`),mN(322,`p-helper`),lg(),mN(323,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(324,`tr`,22)(325,`td`,23)(326,`div`,31)(327,`span`,32),mN(328,` p-append-in-body`),ql(329,`br`),lg()()(),Ml(330,`td`,27)(331,`code`,34),mN(332,`boolean`),lg()(),Ml(333,`td`,29)(334,`p`)(335,`code`),mN(336,`false`),lg()()(),Ml(337,`td`,30)(338,`em`)(339,`strong`),mN(340,`(opcional)`),lg()(),Ml(341,`p`),mN(342,`Define que o popover (`),Ml(343,`code`),mN(344,`p-helper`),lg(),mN(345,` e/ou `),Ml(346,`code`),mN(347,`p-error-limit`),lg(),mN(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(349,`blockquote`)(350,`p`),mN(351,`Quando utilizado com `),Ml(352,`code`),mN(353,`p-helper`),lg(),mN(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(355,`tr`,22)(356,`td`,23)(357,`div`,31)(358,`span`,32),mN(359,` p-auto-focus`),ql(360,`br`),lg()()(),Ml(361,`td`,27)(362,`code`,34),mN(363,`boolean`),lg()(),Ml(364,`td`,29)(365,`p`)(366,`code`),mN(367,`false`),lg()()(),Ml(368,`td`,30)(369,`em`)(370,`strong`),mN(371,`(opcional)`),lg()(),Ml(372,`p`),mN(373,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(374,`blockquote`)(375,`p`),mN(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(377,`tr`,22)(378,`td`,23)(379,`div`,24)(380,`span`,25),mN(381,` (p-change)`),ql(382,`br`),lg()()(),Ml(383,`td`,27)(384,`code`,28),mN(385,`EventEmitter`),lg()(),Ml(386,`td`,29),mN(387,`-`),lg(),Ml(388,`td`,30)(389,`em`)(390,`strong`),mN(391,`(opcional)`),lg()(),Ml(392,`p`),mN(393,`Evento ao alterar valor do campo.`),lg()()(),Ml(394,`tr`,22)(395,`td`,23)(396,`div`,24)(397,`span`,25),mN(398,` (p-change-model)`),ql(399,`br`),lg()()(),Ml(400,`td`,27)(401,`code`,28),mN(402,`EventEmitter`),lg()(),Ml(403,`td`,29),mN(404,`-`),lg(),Ml(405,`td`,30)(406,`em`)(407,`strong`),mN(408,`(opcional)`),lg()(),Ml(409,`p`),mN(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(411,`code`),mN(412,`setValue`),lg(),mN(413,`, `),Ml(414,`code`),mN(415,`patchValue`),lg(),mN(416,`, carregamento assíncrono).`),lg(),Ml(417,`p`),mN(418,`Diferentemente do `),Ml(419,`code`),mN(420,`p-change`),lg(),mN(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(422,`code`),mN(423,`p-change-model`),lg(),mN(424,` cobre todos os cenários de alteração de valor.`),lg(),Ml(425,`p`),mN(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(427,`tr`,22)(428,`td`,23)(429,`div`,31)(430,`span`,32),mN(431,` p-columns`),ql(432,`br`),lg()()(),Ml(433,`td`,27)(434,`code`,35),mN(435,`number`),lg()(),Ml(436,`td`,29)(437,`p`)(438,`code`),mN(439,`2`),lg()()(),Ml(440,`td`,30)(441,`em`)(442,`strong`),mN(443,`(opcional)`),lg()(),Ml(444,`p`),mN(445,`Define a quantidade de colunas para exibição das opções.`),lg(),Ml(446,`p`)(447,`strong`),mN(448,`Considerações:`),lg()(),Ml(449,`ul`)(450,`li`),mN(451,`É possível exibir as opções entre `),Ml(452,`code`),mN(453,`1`),lg(),mN(454,` e `),Ml(455,`code`),mN(456,`4`),lg(),mN(457,` colunas.`),lg(),Ml(458,`li`),mN(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),Ml(460,`ul`)(461,`li`)(462,`code`),mN(463,`sm`),lg(),mN(464,`: `),Ml(465,`code`),mN(466,`1`),lg()(),Ml(467,`li`)(468,`code`),mN(469,`md`),lg(),mN(470,`: `),Ml(471,`code`),mN(472,`2`),lg()()()()()()(),Ml(473,`tr`,22)(474,`td`,23)(475,`div`,31)(476,`span`,32),mN(477,` p-compact-label`),ql(478,`br`),lg()()(),Ml(479,`td`,27)(480,`code`,34),mN(481,`boolean`),lg()(),Ml(482,`td`,29)(483,`p`)(484,`code`),mN(485,`false`),lg()()(),Ml(486,`td`,30)(487,`em`)(488,`strong`),mN(489,`(opcional)`),lg()(),Ml(490,`p`),mN(491,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(492,`p`),mN(493,`Quando habilitado (`),Ml(494,`code`),mN(495,`true`),lg(),mN(496,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(497,`ul`)(498,`li`)(499,`code`),mN(500,`po-label`),lg()(),Ml(501,`li`)(502,`code`),mN(503,`p-requirement (showRequired)`),lg()(),Ml(504,`li`)(505,`code`),mN(506,`po-helper`),lg()()(),Ml(507,`p`),mN(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(509,`p`),mN(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(511,`ul`)(512,`li`)(513,`code`),mN(514,`--field-container-title-justify`),lg()(),Ml(515,`li`)(516,`code`),mN(517,`--field-container-title-flex`),lg()()(),Ml(518,`p`),mN(519,`Exemplo:`),lg(),Ml(520,`pre`)(521,`code`),mN(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(523,`p`),mN(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(525,`tr`,22)(526,`td`,23)(527,`div`,31)(528,`span`,32),mN(529,` p-disabled`),ql(530,`br`),lg()()(),Ml(531,`td`,27)(532,`code`,34),mN(533,`boolean`),lg()(),Ml(534,`td`,29)(535,`p`)(536,`code`),mN(537,`false`),lg()()(),Ml(538,`td`,30)(539,`em`)(540,`strong`),mN(541,`(opcional)`),lg()(),Ml(542,`p`),mN(543,`Indica que o campo será desabilitado.`),lg()()(),Ml(544,`tr`,22)(545,`td`,23)(546,`div`,31)(547,`span`,32),mN(548,` p-error-limit`),ql(549,`br`),lg()()(),Ml(550,`td`,27)(551,`code`,34),mN(552,`boolean`),lg()(),Ml(553,`td`,29)(554,`p`)(555,`code`),mN(556,`false`),lg()()(),Ml(557,`td`,30)(558,`em`)(559,`strong`),mN(560,`(opcional)`),lg()(),Ml(561,`p`),mN(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(563,`blockquote`)(564,`p`),mN(565,`Caso essa propriedade seja definida como `),Ml(566,`code`),mN(567,`true`),lg(),mN(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(569,`tr`,22)(570,`td`,23)(571,`div`,31)(572,`span`,32),mN(573,` p-field-error-message`),ql(574,`br`),lg()()(),Ml(575,`td`,27)(576,`code`,33),mN(577,`string`),lg()(),Ml(578,`td`,29),mN(579,`-`),lg(),Ml(580,`td`,30)(581,`em`)(582,`strong`),mN(583,`(opcional)`),lg()(),Ml(584,`p`),mN(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),lg(),Ml(586,`blockquote`)(587,`p`),mN(588,`Necessário que a propriedade `),Ml(589,`code`),mN(590,`p-required`),lg(),mN(591,` esteja habilitada.`),lg()()()(),Ml(592,`tr`,22)(593,`td`,23)(594,`div`,31)(595,`span`,32),mN(596,` p-help`),ql(597,`br`),lg()()(),Ml(598,`td`,27)(599,`code`,33),mN(600,`string`),lg()(),Ml(601,`td`,29),mN(602,`-`),lg(),Ml(603,`td`,30)(604,`em`)(605,`strong`),mN(606,`(opcional)`),lg()(),Ml(607,`p`),mN(608,`Texto de apoio do campo.`),lg()()(),Ml(609,`tr`,22)(610,`td`,23)(611,`div`,24)(612,`span`,25),mN(613,` (p-keydown)`),ql(614,`br`),lg()()(),Ml(615,`td`,27)(616,`code`,28),mN(617,`EventEmitter`),lg()(),Ml(618,`td`,29),mN(619,`-`),lg(),Ml(620,`td`,30)(621,`em`)(622,`strong`),mN(623,`(opcional)`),lg()(),Ml(624,`p`),mN(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(626,`code`),mN(627,`KeyboardEvent`),lg(),mN(628,` com informações sobre a tecla.`),lg()()(),Ml(629,`tr`,22)(630,`td`,23)(631,`div`,31)(632,`span`,32),mN(633,` p-label`),ql(634,`br`),lg()()(),Ml(635,`td`,27)(636,`code`,33),mN(637,`string`),lg()(),Ml(638,`td`,29),mN(639,`-`),lg(),Ml(640,`td`,30)(641,`em`)(642,`strong`),mN(643,`(opcional)`),lg()(),Ml(644,`p`),mN(645,`Label do campo.`),lg()()(),Ml(646,`tr`,22)(647,`td`,23)(648,`div`,31)(649,`span`,32),mN(650,` p-label-text-wrap`),ql(651,`br`),lg()()(),Ml(652,`td`,27)(653,`code`,34),mN(654,`boolean`),lg()(),Ml(655,`td`,29)(656,`p`)(657,`code`),mN(658,`false`),lg()()(),Ml(659,`td`,30)(660,`em`)(661,`strong`),mN(662,`(opcional)`),lg()(),Ml(663,`p`),mN(664,`Habilita a quebra automática do texto da propriedade `),Ml(665,`code`),mN(666,`p-label`),lg(),mN(667,`. Quando `),Ml(668,`code`),mN(669,`p-label-text-wrap`),lg(),mN(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(671,`tr`,22)(672,`td`,23)(673,`div`,31)(674,`span`,32),mN(675,` name`),ql(676,`br`),lg()()(),Ml(677,`td`,27)(678,`code`,33),mN(679,`string`),lg()(),Ml(680,`td`,29),mN(681,`-`),lg(),Ml(682,`td`,30)(683,`p`),mN(684,`Nome das opções.`),lg()()(),Ml(685,`tr`,22)(686,`td`,23)(687,`div`,31)(688,`span`,32),mN(689,` p-optional`),ql(690,`br`),lg()()(),Ml(691,`td`,27)(692,`code`,34),mN(693,`boolean`),lg()(),Ml(694,`td`,29)(695,`p`)(696,`code`),mN(697,`false`),lg()()(),Ml(698,`td`,30)(699,`em`)(700,`strong`),mN(701,`(opcional)`),lg()(),Ml(702,`p`),mN(703,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(704,`blockquote`)(705,`p`),mN(706,`Não será exibida a indicação se:`),lg()(),Ml(707,`ul`)(708,`li`),mN(709,`O campo conter `),Ml(710,`code`),mN(711,`p-required`),lg(),mN(712,`;`),lg(),Ml(713,`li`),mN(714,`Não possuir `),Ml(715,`code`),mN(716,`p-help`),lg(),mN(717,` e/ou `),Ml(718,`code`),mN(719,`p-label`),lg(),mN(720,`.`),lg()()()(),Ml(721,`tr`,22)(722,`td`,23)(723,`div`,31)(724,`span`,32),mN(725,` p-options`),ql(726,`br`),lg()()(),Ml(727,`td`,27)(728,`code`,36),mN(729,`PoRadioGroupOption[]`),lg()(),Ml(730,`td`,29),mN(731,`-`),lg(),Ml(732,`td`,30)(733,`p`),mN(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),lg()()(),Ml(735,`tr`,22)(736,`td`,23)(737,`div`,31)(738,`span`,32),mN(739,` p-helper`),ql(740,`br`),lg()()(),Ml(741,`td`,27)(742,`code`,37),mN(743,`PoHelperOptions `),lg(),Ml(744,`code`,33),mN(745,` string`),lg()(),Ml(746,`td`,29),mN(747,`-`),lg(),Ml(748,`td`,30)(749,`em`)(750,`strong`),mN(751,`(opcional)`),lg()(),Ml(752,`p`),mN(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(754,`code`),mN(755,`p-label`),lg(),mN(756,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(757,`code`),mN(758,`p-label`),lg(),mN(759,`.`),lg(),Ml(760,`blockquote`)(761,`p`),mN(762,`Para mais informações acesse: `),Ml(763,`a`,38),mN(764,`https://po-ui.io/documentation/po-helper`),lg(),mN(765,`.`),lg()(),Ml(766,`blockquote`)(767,`p`),mN(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(769,`code`),mN(770,`p-additional-help-tooltip`),lg(),mN(771,` e `),Ml(772,`code`),mN(773,`p-additional-help`),lg(),mN(774,`) será ignorado.`),lg()()()(),Ml(775,`tr`,22)(776,`td`,23)(777,`div`,31)(778,`span`,32),mN(779,` p-required`),ql(780,`br`),lg()()(),Ml(781,`td`,27)(782,`code`,34),mN(783,`boolean`),lg()(),Ml(784,`td`,29)(785,`p`)(786,`code`),mN(787,`false`),lg()()(),Ml(788,`td`,30)(789,`em`)(790,`strong`),mN(791,`(opcional)`),lg()(),Ml(792,`p`),mN(793,`Define que o campo será obrigatório.`),lg()()(),Ml(794,`tr`,22)(795,`td`,23)(796,`div`,31)(797,`span`,32),mN(798,` p-show-required`),ql(799,`br`),lg()()(),Ml(800,`td`,27)(801,`code`,34),mN(802,`boolean`),lg()(),Ml(803,`td`,29),mN(804,`-`),lg(),Ml(805,`td`,30)(806,`p`),mN(807,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(808,`blockquote`)(809,`p`),mN(810,`Não será exibida a indicação se:`),lg()(),Ml(811,`ul`)(812,`li`),mN(813,`Não possuir `),Ml(814,`code`),mN(815,`p-help`),lg(),mN(816,` e/ou `),Ml(817,`code`),mN(818,`p-label`),lg(),mN(819,`.`),lg()()()(),Ml(820,`tr`,22)(821,`td`,23)(822,`div`,31)(823,`span`,32),mN(824,` p-size`),ql(825,`br`),lg()()(),Ml(826,`td`,27)(827,`code`,33),mN(828,`string`),lg()(),Ml(829,`td`,29)(830,`p`)(831,`code`),mN(832,`medium`),lg()()(),Ml(833,`td`,30)(834,`em`)(835,`strong`),mN(836,`(opcional)`),lg()(),Ml(837,`p`),mN(838,`Define o tamanho dos radios do componente:`),lg(),Ml(839,`ul`)(840,`li`)(841,`code`),mN(842,`small`),lg(),mN(843,`: 16x16 (disponível apenas para acessibilidade AA).`),lg(),Ml(844,`li`)(845,`code`),mN(846,`medium`),lg(),mN(847,`: 24x24.`),lg()(),Ml(848,`blockquote`)(849,`p`),mN(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(851,`code`),mN(852,`medium`),lg(),mN(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(854,`a`,39),mN(855,`po-theme`),lg(),mN(856,`.`),lg()()()()(),Ml(857,`h3`,18),mN(858,`Métodos`),lg(),Ml(859,`table`,40)(860,`tr`,22)(861,`th`,41)(862,`div`,31)(863,`h4`)(864,`span`,32),mN(865,` focus `),lg()()()()(),Ml(866,`tr`,30)(867,`td`,30)(868,`p`),mN(869,`Função que atribui foco ao componente.`),lg(),Ml(870,`p`),mN(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(872,`pre`)(873,`code`),mN(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),lg()()()()(),ql(875,`br`),Ml(876,`table`,40)(877,`tr`,22)(878,`th`,41)(879,`div`,31)(880,`h4`)(881,`span`,32),mN(882,` showAdditionalHelp `),lg()()()()(),Ml(883,`tr`,30)(884,`td`,30)(885,`p`),mN(886,`Método que exibe `),Ml(887,`code`),mN(888,`p-helper`),lg(),mN(889,` ou executa a ação definida em `),Ml(890,`code`),mN(891,`p-helper{eventOnClick}`),lg(),mN(892,` ou em `),Ml(893,`code`),mN(894,`p-additionalHelp`),lg(),mN(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(896,`code`),mN(897,`p-keydown`),lg(),mN(898,`.`),lg(),Ml(899,`blockquote`)(900,`p`),mN(901,`Exibe ou oculta o conteúdo do componente `),Ml(902,`code`),mN(903,`po-helper`),lg(),mN(904,` quando o componente estiver com foco.`),lg()(),Ml(905,`pre`)(906,`code`),mN(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),lg()(),Ml(908,`pre`)(909,`code`),mN(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(911,`br`),Ml(912,`h3`),mN(913,`Interfaces`),lg(),Ml(914,`h4`,42)(915,`code`,5),mN(916,`PoRadioGroupOption`),lg()(),Ml(917,`div`,2)(918,`p`),mN(919,`Interface para as ações do componente po-radio-group.`),lg()(),Ml(920,`h4`,18),mN(921,`Propriedades`),lg(),Ml(922,`table`,19)(923,`tr`,20)(924,`th`,21),mN(925,`Nome`),lg(),Ml(926,`th`,21),mN(927,`Tipo`),lg(),Ml(928,`th`,21),mN(929,`Descrição`),lg()(),Ml(930,`tr`,22)(931,`td`,23)(932,`div`,31)(933,`span`,32),mN(934,` disabled`),ql(935,`br`),lg()()(),Ml(936,`td`,27)(937,`code`,34),mN(938,`boolean`),lg()(),Ml(939,`td`,30)(940,`em`)(941,`strong`),mN(942,`(opcional)`),lg()(),Ml(943,`p`),mN(944,`Desabilita o radio.`),lg()()(),Ml(945,`tr`,22)(946,`td`,23)(947,`div`,31)(948,`span`,32),mN(949,` label`),ql(950,`br`),lg()()(),Ml(951,`td`,27)(952,`code`,33),mN(953,`string`),lg()(),Ml(954,`td`,30)(955,`p`),mN(956,`Texto do radio.`),lg()()(),Ml(957,`tr`,22)(958,`td`,23)(959,`div`,31)(960,`span`,32),mN(961,` value`),ql(962,`br`),lg()()(),Ml(963,`td`,27)(964,`code`,33),mN(965,`string `),lg(),Ml(966,`code`,35),mN(967,` number`),lg()(),Ml(968,`td`,30)(969,`p`),mN(970,`Valor do radio.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var Be=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Radio Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-radio-group-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-radio-group-basic-view`)(6,`sample-po-radio-group-labs-view`)(7,`sample-po-radio-group-translator-view`)(8,`sample-po-radio-group-translator-reactive-form-view`),lg()()()),r&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,me,ce,Ee,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[NL.forChild(Be),NL]})}return i})();var bt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,fe]})}return i})();export{bt as DocPoRadioGroupModule};