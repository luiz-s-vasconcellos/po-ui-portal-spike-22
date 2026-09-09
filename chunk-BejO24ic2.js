import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,ca as um,er as EN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,tr as EY,ui as a0,ut as S8e,va as yY,xr as Lk,yi as cN,zi as jk}from"./main-3EWTGE7T.js";var Ce=()=>({label:`Option 1`,value:`1`});var we=()=>({label:`Option 2`,value:`2`});var ye=(i,ve)=>[i,ve];var de=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(r,n){r&1&&Gl(0,`po-radio-group`,0),r&2&&nw(`p-options`,EN(3,ye,_N(1,Ce),_N(2,we)))},dependencies:[L0e],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Radio Group Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-radio-group-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(r,n){if(r&1){let m=Ax();Tl(0,`po-radio-group`,2),ww(`ngModelChange`,function(l){return Ky(m),uN(n.radioGroup,l)||(n.radioGroup=l),Xy(l)}),ht(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,3),Gl(3,`po-info`,4)(4,`po-info`,5),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),ww(`ngModelChange`,function(l){return Ky(m),uN(n.option.label,l)||(n.option.label=l),Xy(l)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(l){return Ky(m),uN(n.option.value,l)||(n.option.value=l),Xy(l)}),ag(),a0(),Tl(11,`po-switch`,8),ww(`ngModelChange`,function(l){return Ky(m),uN(n.option.disabled,l)||(n.option.disabled=l),Xy(l)}),ag(),a0(),ag(),Tl(12,`div`,3)(13,`po-button`,9),ht(`p-click`,function(){Ky(m);let l=Bx(7);return n.addOption(),Xy(l.reset())}),ag()()(),Gl(14,`po-divider`),Tl(15,`form`,null,1)(17,`po-input`,10),ww(`ngModelChange`,function(l){return Ky(m),uN(n.label,l)||(n.label=l),Xy(l)}),ag(),a0(),Tl(18,`po-input`,11),ww(`ngModelChange`,function(l){return Ky(m),uN(n.help,l)||(n.help=l),Xy(l)}),ag(),a0(),Tl(19,`po-input`,12),ww(`ngModelChange`,function(l){return Ky(m),uN(n.helperText,l)||(n.helperText=l),Xy(l)}),ag(),a0(),Tl(20,`po-input`,13),ww(`ngModelChange`,function(l){return Ky(m),uN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Xy(l)}),ag(),a0(),Tl(21,`po-radio-group`,14),ww(`ngModelChange`,function(l){return Ky(m),uN(n.columns,l)||(n.columns=l),Xy(l)}),ag(),a0(),Tl(22,`po-checkbox-group`,15),ww(`ngModelChange`,function(l){return Ky(m),uN(n.properties,l)||(n.properties=l),Xy(l)}),ag(),a0(),Tl(23,`po-radio-group`,16),ww(`ngModelChange`,function(l){return Ky(m),uN(n.size,l)||(n.size=l),Xy(l)}),ag(),a0(),Tl(24,`div`,3)(25,`po-button`,17),ht(`click`,function(){return Ky(m),Bx(16).reset(),Xy(n.restore())}),ag()()()}if(r&2){let m=Bx(7);Ew(`ngModel`,n.radioGroup),nw(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),l0(),jp(3),nw(`p-value`,n.radioGroup),jp(),nw(`p-value`,n.event),jp(5),Ew(`ngModel`,n.option.label),l0(),jp(),Ew(`ngModel`,n.option.value),l0(),jp(),Ew(`ngModel`,n.option.disabled),l0(),jp(2),nw(`p-disabled`,m.invalid),jp(4),Ew(`ngModel`,n.label),l0(),jp(),Ew(`ngModel`,n.help),l0(),jp(),Ew(`ngModel`,n.helperText),l0(),jp(),Ew(`ngModel`,n.fieldErrorMessage),l0(),jp(),Ew(`ngModel`,n.columns),nw(`p-options`,n.columnOptions),l0(),jp(),Ew(`ngModel`,n.properties),nw(`p-options`,n.propertiesOptions),l0(),jp(),Ew(`ngModel`,n.size),nw(`p-options`,n.sizesOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,j4,ybe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Radio Group Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-radio-group
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-radio-group-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Re,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(r,n){if(r&1){let m=Ax();Tl(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),ww(`ngModelChange`,function(l){return Ky(m),uN(n.language,l)||(n.language=l),Xy(l)}),ht(`p-change`,function(l){return n.changeLanguage(l)}),ag(),a0(),Tl(4,`po-select`,3),ww(`ngModelChange`,function(l){return Ky(m),uN(n.original,l)||(n.original=l),Xy(l)}),ht(`p-change`,function(l){return n.changeLanguage(l)}),ag(),a0(),Tl(5,`po-input`,4),ww(`ngModelChange`,function(l){return Ky(m),uN(n.translated,l)||(n.translated=l),Xy(l)}),ag(),a0(),ag()()}r&2&&(jp(3),Ew(`ngModel`,n.language),nw(`p-options`,n.languageOptions),l0(),jp(),Ew(`ngModel`,n.original),nw(`p-options`,n.optionsList),l0(),jp(),Ew(`ngModel`,n.translated),l0())},dependencies:[yY,gY,mY,Ak,Tk,iU,L0e,fbe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Radio Group - Translator`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #f="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-radio-group-translator`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{formBuilder=f(EY);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,um.required],original:[void 0,um.required],translated:[void 0,um.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(r,n){r&1&&(Tl(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),ht(`p-change`,function(){return n.changeLanguage()}),ag(),a0(),Tl(3,`po-select`,3),ht(`p-change`,function(){return n.changeLanguage()}),ag(),a0(),Gl(4,`po-input`,4),a0(),ag()()),r&2&&(nw(`formGroup`,n.translatorForm),jp(2),nw(`p-options`,n.languageOptions),l0(),jp(),nw(`p-options`,n.optionsList),l0(),jp(),l0())},dependencies:[yY,gY,mY,jk,Lk,iU,L0e,fbe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Radio Group - Translator Reactive Form`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form [formGroup]="translatorForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-radio-group-translator-reactive-form`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Un({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,n){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoRadioGroupComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O componente `),Tl(24,`code`),cN(25,`po-radio-group`),ag(),cN(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Tl(27,`a`,6)(28,`strong`),cN(29,`po-combo`),ag()(),cN(30,` ou `),Tl(31,`a`,7)(32,`strong`),cN(33,`po-select`),ag()(),cN(34,`.`),ag(),Tl(35,`p`),cN(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Tl(37,`a`,8)(38,`strong`),cN(39,`po-checkbox-group`),ag()(),cN(40,`.`),ag(),Tl(41,`blockquote`)(42,`p`),cN(43,`Ao passar um valor para o `),Tl(44,`em`),cN(45,`model`),ag(),cN(46,` que não esteja na lista de opções, o mesmo será definido como `),Tl(47,`code`),cN(48,`undefined`),ag(),cN(49,`.`),ag()(),Tl(50,`h4`),cN(51,`Acessibilidade tratada no componente interno `),Tl(52,`code`),cN(53,`po-radio`),ag(),cN(54,`:`),ag(),Tl(55,`p`),cN(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ag(),Tl(57,`ul`)(58,`li`),cN(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Tl(60,`a`,9),cN(61,`WCAG 4.1.2: Name, Role, Value`),ag()(),Tl(62,`li`),cN(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),Tl(64,`a`,10),cN(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),ag()(),Tl(66,`li`),cN(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),Tl(68,`a`,11),cN(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),ag()(),Tl(70,`li`),cN(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Tl(72,`a`,12),cN(73,`(WCAG 2.4.12: Focus Appearance`),ag()()(),Tl(74,`p`),cN(75,`Conforme documentação em: `),Tl(76,`a`,13),cN(77,`https://doc.animaliads.io/docs/components/radio`),ag()(),Tl(78,`h4`),cN(79,`Tokens customizáveis`),ag(),Tl(80,`p`),cN(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(82,`br`),cN(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Tl(84,`code`),cN(85,`po-radio`),ag(),cN(86,` que compõem o grupo de opções. `),Gl(87,`br`),cN(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Tl(89,`code`),cN(90,`po-radio`),ag(),cN(91,` em vez do próprio `),Tl(92,`code`),cN(93,`po-radio-group`),ag(),cN(94,`.`),ag(),Tl(95,`blockquote`)(96,`p`),cN(97,`Para maiores informações, acesse o guia `),Tl(98,`a`,14),cN(99,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(100,`.`),ag()(),Tl(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),cN(105,`Propriedade`),ag(),Tl(106,`th`),cN(107,`Descrição`),ag(),Tl(108,`th`),cN(109,`Valor Padrão`),ag()()(),Tl(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),cN(114,`Default Values`),ag()(),Gl(115,`td`)(116,`td`),ag(),Tl(117,`tr`)(118,`td`)(119,`code`),cN(120,`--border-color`),ag()(),Tl(121,`td`),cN(122,`Cor da borda`),ag(),Tl(123,`td`)(124,`code`),cN(125,`var(--color-neutral-dark-70)`),ag()()(),Tl(126,`tr`)(127,`td`)(128,`code`),cN(129,`--field-container-title-justify`),ag()(),Tl(130,`td`),cN(131,`Alinhamento horizontal do título (`),Tl(132,`code`),cN(133,`justify-content`),ag(),cN(134,`)`),ag(),Tl(135,`td`)(136,`code`),cN(137,`space-between`),ag()()(),Tl(138,`tr`)(139,`td`)(140,`code`),cN(141,`--field-container-title-flex`),ag()(),Tl(142,`td`),cN(143,`Flex do título (`),Tl(144,`code`),cN(145,`flex`),ag(),cN(146,`)`),ag(),Tl(147,`td`)(148,`code`),cN(149,`1 auto`),ag()()(),Tl(150,`tr`)(151,`td`)(152,`strong`),cN(153,`Hover`),ag()(),Gl(154,`td`)(155,`td`),ag(),Tl(156,`tr`)(157,`td`)(158,`code`),cN(159,`--shadow-color-hover`),ag()(),Tl(160,`td`),cN(161,`Cor da sombra no estado hover`),ag(),Tl(162,`td`)(163,`code`),cN(164,`var(--color-brand-01-lighter)`),ag()()(),Tl(165,`tr`)(166,`td`)(167,`code`),cN(168,`--color-hover`),ag()(),Tl(169,`td`),cN(170,`Cor principal no estado hover`),ag(),Tl(171,`td`)(172,`code`),cN(173,`var(--color-brand-01-dark)`),ag()()(),Tl(174,`tr`)(175,`td`)(176,`strong`),cN(177,`Focused`),ag()(),Gl(178,`td`)(179,`td`),ag(),Tl(180,`tr`)(181,`td`)(182,`code`),cN(183,`--outline-color-focused`),ag()(),Tl(184,`td`),cN(185,`Cor do outline do estado de focus`),ag(),Tl(186,`td`)(187,`code`),cN(188,`var(--color-brand-01-darkest)`),ag()()(),Tl(189,`tr`)(190,`td`)(191,`strong`),cN(192,`checked`),ag()(),Gl(193,`td`)(194,`td`),ag(),Tl(195,`tr`)(196,`td`)(197,`code`),cN(198,`--color-unchecked`),ag()(),Tl(199,`td`),cN(200,`Cor quando não selecionado`),ag(),Tl(201,`td`)(202,`code`),cN(203,`var(--color-neutral-light-00)`),ag()()(),Tl(204,`tr`)(205,`td`)(206,`code`),cN(207,`--color-checked`),ag()(),Tl(208,`td`),cN(209,`Cor quando selecionado`),ag(),Tl(210,`td`)(211,`code`),cN(212,`var(--color-action-default)`),ag()()(),Tl(213,`tr`)(214,`td`)(215,`strong`),cN(216,`Disabled`),ag()(),Gl(217,`td`)(218,`td`),ag(),Tl(219,`tr`)(220,`td`)(221,`code`),cN(222,`--color-unchecked-disabled`),ag()(),Tl(223,`td`),cN(224,`Cor pricipal quando não selecionado no estado disabled`),ag(),Tl(225,`td`)(226,`code`),cN(227,`var(--color-neutral-light-30)`),ag()()(),Tl(228,`tr`)(229,`td`)(230,`code`),cN(231,`--color-checked-disabled`),ag()(),Tl(232,`td`),cN(233,`Cor pricipal quando selecionado no estado disabled`),ag(),Tl(234,`td`)(235,`code`),cN(236,`var(--color-neutral-dark-70)`),ag()()()()()(),Tl(237,`div`,15)(238,`h4`,16),cN(239,`Seletor`),ag(),Tl(240,`pre`,17),cN(241,`<po-radio-group
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
`),ag()(),Tl(242,`h4`,18),cN(243,`Propriedades`),ag(),Tl(244,`table`,19)(245,`tr`,20)(246,`th`,21),cN(247,`Nome`),ag(),Tl(248,`th`,21),cN(249,`Tipo`),ag(),Tl(250,`th`,21),cN(251,`Padrão`),ag(),Tl(252,`th`,21),cN(253,`Descrição`),ag()(),Tl(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),cN(258,` (p-additional-help)`),Gl(259,`br`),ag()(),Tl(260,`div`,26),cN(261,`Deprecated`),ag()(),Tl(262,`td`,27)(263,`code`,28),cN(264,`EventEmitter`),ag()(),Tl(265,`td`,29),cN(266,`-`),ag(),Tl(267,`td`,30)(268,`em`)(269,`strong`),cN(270,`(opcional)`),ag()(),Tl(271,`p`),cN(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(273,`blockquote`)(274,`p`),cN(275,`Essa propriedade está `),Tl(276,`strong`),cN(277,`depreciada`),ag(),cN(278,` e será removida na versão `),Tl(279,`code`),cN(280,`23.x.x`),ag(),cN(281,`. Recomendamos utilizar a propriedade `),Tl(282,`code`),cN(283,`p-helper`),ag(),cN(284,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(285,`tr`,22)(286,`td`,23)(287,`div`,31)(288,`span`,32),cN(289,` p-additional-help-tooltip`),Gl(290,`br`),ag()(),Tl(291,`div`,26),cN(292,`Deprecated`),ag()(),Tl(293,`td`,27)(294,`code`,33),cN(295,`string`),ag()(),Tl(296,`td`,29),cN(297,`-`),ag(),Tl(298,`td`,30)(299,`em`)(300,`strong`),cN(301,`(opcional)`),ag()(),Tl(302,`p`),cN(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(304,`code`),cN(305,`po-helper`),ag(),cN(306,`.
`),Tl(307,`strong`),cN(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(309,`blockquote`)(310,`p`),cN(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(312,`blockquote`)(313,`p`),cN(314,`Essa propriedade está `),Tl(315,`strong`),cN(316,`depreciada`),ag(),cN(317,` e será removida na versão `),Tl(318,`code`),cN(319,`23.x.x`),ag(),cN(320,`. Recomendamos utilizar a propriedade `),Tl(321,`code`),cN(322,`p-helper`),ag(),cN(323,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(324,`tr`,22)(325,`td`,23)(326,`div`,31)(327,`span`,32),cN(328,` p-append-in-body`),Gl(329,`br`),ag()()(),Tl(330,`td`,27)(331,`code`,34),cN(332,`boolean`),ag()(),Tl(333,`td`,29)(334,`p`)(335,`code`),cN(336,`false`),ag()()(),Tl(337,`td`,30)(338,`em`)(339,`strong`),cN(340,`(opcional)`),ag()(),Tl(341,`p`),cN(342,`Define que o popover (`),Tl(343,`code`),cN(344,`p-helper`),ag(),cN(345,` e/ou `),Tl(346,`code`),cN(347,`p-error-limit`),ag(),cN(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(349,`blockquote`)(350,`p`),cN(351,`Quando utilizado com `),Tl(352,`code`),cN(353,`p-helper`),ag(),cN(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(355,`tr`,22)(356,`td`,23)(357,`div`,31)(358,`span`,32),cN(359,` p-auto-focus`),Gl(360,`br`),ag()()(),Tl(361,`td`,27)(362,`code`,34),cN(363,`boolean`),ag()(),Tl(364,`td`,29)(365,`p`)(366,`code`),cN(367,`false`),ag()()(),Tl(368,`td`,30)(369,`em`)(370,`strong`),cN(371,`(opcional)`),ag()(),Tl(372,`p`),cN(373,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(374,`blockquote`)(375,`p`),cN(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(377,`tr`,22)(378,`td`,23)(379,`div`,24)(380,`span`,25),cN(381,` (p-change)`),Gl(382,`br`),ag()()(),Tl(383,`td`,27)(384,`code`,28),cN(385,`EventEmitter`),ag()(),Tl(386,`td`,29),cN(387,`-`),ag(),Tl(388,`td`,30)(389,`em`)(390,`strong`),cN(391,`(opcional)`),ag()(),Tl(392,`p`),cN(393,`Evento ao alterar valor do campo.`),ag()()(),Tl(394,`tr`,22)(395,`td`,23)(396,`div`,24)(397,`span`,25),cN(398,` (p-change-model)`),Gl(399,`br`),ag()()(),Tl(400,`td`,27)(401,`code`,28),cN(402,`EventEmitter`),ag()(),Tl(403,`td`,29),cN(404,`-`),ag(),Tl(405,`td`,30)(406,`em`)(407,`strong`),cN(408,`(opcional)`),ag()(),Tl(409,`p`),cN(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(411,`code`),cN(412,`setValue`),ag(),cN(413,`, `),Tl(414,`code`),cN(415,`patchValue`),ag(),cN(416,`, carregamento assíncrono).`),ag(),Tl(417,`p`),cN(418,`Diferentemente do `),Tl(419,`code`),cN(420,`p-change`),ag(),cN(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(422,`code`),cN(423,`p-change-model`),ag(),cN(424,` cobre todos os cenários de alteração de valor.`),ag(),Tl(425,`p`),cN(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(427,`tr`,22)(428,`td`,23)(429,`div`,31)(430,`span`,32),cN(431,` p-columns`),Gl(432,`br`),ag()()(),Tl(433,`td`,27)(434,`code`,35),cN(435,`number`),ag()(),Tl(436,`td`,29)(437,`p`)(438,`code`),cN(439,`2`),ag()()(),Tl(440,`td`,30)(441,`em`)(442,`strong`),cN(443,`(opcional)`),ag()(),Tl(444,`p`),cN(445,`Define a quantidade de colunas para exibição das opções.`),ag(),Tl(446,`p`)(447,`strong`),cN(448,`Considerações:`),ag()(),Tl(449,`ul`)(450,`li`),cN(451,`É possível exibir as opções entre `),Tl(452,`code`),cN(453,`1`),ag(),cN(454,` e `),Tl(455,`code`),cN(456,`4`),ag(),cN(457,` colunas.`),ag(),Tl(458,`li`),cN(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),Tl(460,`ul`)(461,`li`)(462,`code`),cN(463,`sm`),ag(),cN(464,`: `),Tl(465,`code`),cN(466,`1`),ag()(),Tl(467,`li`)(468,`code`),cN(469,`md`),ag(),cN(470,`: `),Tl(471,`code`),cN(472,`2`),ag()()()()()()(),Tl(473,`tr`,22)(474,`td`,23)(475,`div`,31)(476,`span`,32),cN(477,` p-compact-label`),Gl(478,`br`),ag()()(),Tl(479,`td`,27)(480,`code`,34),cN(481,`boolean`),ag()(),Tl(482,`td`,29)(483,`p`)(484,`code`),cN(485,`false`),ag()()(),Tl(486,`td`,30)(487,`em`)(488,`strong`),cN(489,`(opcional)`),ag()(),Tl(490,`p`),cN(491,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(492,`p`),cN(493,`Quando habilitado (`),Tl(494,`code`),cN(495,`true`),ag(),cN(496,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(497,`ul`)(498,`li`)(499,`code`),cN(500,`po-label`),ag()(),Tl(501,`li`)(502,`code`),cN(503,`p-requirement (showRequired)`),ag()(),Tl(504,`li`)(505,`code`),cN(506,`po-helper`),ag()()(),Tl(507,`p`),cN(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(509,`p`),cN(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(511,`ul`)(512,`li`)(513,`code`),cN(514,`--field-container-title-justify`),ag()(),Tl(515,`li`)(516,`code`),cN(517,`--field-container-title-flex`),ag()()(),Tl(518,`p`),cN(519,`Exemplo:`),ag(),Tl(520,`pre`)(521,`code`),cN(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(523,`p`),cN(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(525,`tr`,22)(526,`td`,23)(527,`div`,31)(528,`span`,32),cN(529,` p-disabled`),Gl(530,`br`),ag()()(),Tl(531,`td`,27)(532,`code`,34),cN(533,`boolean`),ag()(),Tl(534,`td`,29)(535,`p`)(536,`code`),cN(537,`false`),ag()()(),Tl(538,`td`,30)(539,`em`)(540,`strong`),cN(541,`(opcional)`),ag()(),Tl(542,`p`),cN(543,`Indica que o campo será desabilitado.`),ag()()(),Tl(544,`tr`,22)(545,`td`,23)(546,`div`,31)(547,`span`,32),cN(548,` p-error-limit`),Gl(549,`br`),ag()()(),Tl(550,`td`,27)(551,`code`,34),cN(552,`boolean`),ag()(),Tl(553,`td`,29)(554,`p`)(555,`code`),cN(556,`false`),ag()()(),Tl(557,`td`,30)(558,`em`)(559,`strong`),cN(560,`(opcional)`),ag()(),Tl(561,`p`),cN(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(563,`blockquote`)(564,`p`),cN(565,`Caso essa propriedade seja definida como `),Tl(566,`code`),cN(567,`true`),ag(),cN(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(569,`tr`,22)(570,`td`,23)(571,`div`,31)(572,`span`,32),cN(573,` p-field-error-message`),Gl(574,`br`),ag()()(),Tl(575,`td`,27)(576,`code`,33),cN(577,`string`),ag()(),Tl(578,`td`,29),cN(579,`-`),ag(),Tl(580,`td`,30)(581,`em`)(582,`strong`),cN(583,`(opcional)`),ag()(),Tl(584,`p`),cN(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ag(),Tl(586,`blockquote`)(587,`p`),cN(588,`Necessário que a propriedade `),Tl(589,`code`),cN(590,`p-required`),ag(),cN(591,` esteja habilitada.`),ag()()()(),Tl(592,`tr`,22)(593,`td`,23)(594,`div`,31)(595,`span`,32),cN(596,` p-help`),Gl(597,`br`),ag()()(),Tl(598,`td`,27)(599,`code`,33),cN(600,`string`),ag()(),Tl(601,`td`,29),cN(602,`-`),ag(),Tl(603,`td`,30)(604,`em`)(605,`strong`),cN(606,`(opcional)`),ag()(),Tl(607,`p`),cN(608,`Texto de apoio do campo.`),ag()()(),Tl(609,`tr`,22)(610,`td`,23)(611,`div`,24)(612,`span`,25),cN(613,` (p-keydown)`),Gl(614,`br`),ag()()(),Tl(615,`td`,27)(616,`code`,28),cN(617,`EventEmitter`),ag()(),Tl(618,`td`,29),cN(619,`-`),ag(),Tl(620,`td`,30)(621,`em`)(622,`strong`),cN(623,`(opcional)`),ag()(),Tl(624,`p`),cN(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(626,`code`),cN(627,`KeyboardEvent`),ag(),cN(628,` com informações sobre a tecla.`),ag()()(),Tl(629,`tr`,22)(630,`td`,23)(631,`div`,31)(632,`span`,32),cN(633,` p-label`),Gl(634,`br`),ag()()(),Tl(635,`td`,27)(636,`code`,33),cN(637,`string`),ag()(),Tl(638,`td`,29),cN(639,`-`),ag(),Tl(640,`td`,30)(641,`em`)(642,`strong`),cN(643,`(opcional)`),ag()(),Tl(644,`p`),cN(645,`Label do campo.`),ag()()(),Tl(646,`tr`,22)(647,`td`,23)(648,`div`,31)(649,`span`,32),cN(650,` p-label-text-wrap`),Gl(651,`br`),ag()()(),Tl(652,`td`,27)(653,`code`,34),cN(654,`boolean`),ag()(),Tl(655,`td`,29)(656,`p`)(657,`code`),cN(658,`false`),ag()()(),Tl(659,`td`,30)(660,`em`)(661,`strong`),cN(662,`(opcional)`),ag()(),Tl(663,`p`),cN(664,`Habilita a quebra automática do texto da propriedade `),Tl(665,`code`),cN(666,`p-label`),ag(),cN(667,`. Quando `),Tl(668,`code`),cN(669,`p-label-text-wrap`),ag(),cN(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(671,`tr`,22)(672,`td`,23)(673,`div`,31)(674,`span`,32),cN(675,` name`),Gl(676,`br`),ag()()(),Tl(677,`td`,27)(678,`code`,33),cN(679,`string`),ag()(),Tl(680,`td`,29),cN(681,`-`),ag(),Tl(682,`td`,30)(683,`p`),cN(684,`Nome das opções.`),ag()()(),Tl(685,`tr`,22)(686,`td`,23)(687,`div`,31)(688,`span`,32),cN(689,` p-optional`),Gl(690,`br`),ag()()(),Tl(691,`td`,27)(692,`code`,34),cN(693,`boolean`),ag()(),Tl(694,`td`,29)(695,`p`)(696,`code`),cN(697,`false`),ag()()(),Tl(698,`td`,30)(699,`em`)(700,`strong`),cN(701,`(opcional)`),ag()(),Tl(702,`p`),cN(703,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(704,`blockquote`)(705,`p`),cN(706,`Não será exibida a indicação se:`),ag()(),Tl(707,`ul`)(708,`li`),cN(709,`O campo conter `),Tl(710,`code`),cN(711,`p-required`),ag(),cN(712,`;`),ag(),Tl(713,`li`),cN(714,`Não possuir `),Tl(715,`code`),cN(716,`p-help`),ag(),cN(717,` e/ou `),Tl(718,`code`),cN(719,`p-label`),ag(),cN(720,`.`),ag()()()(),Tl(721,`tr`,22)(722,`td`,23)(723,`div`,31)(724,`span`,32),cN(725,` p-options`),Gl(726,`br`),ag()()(),Tl(727,`td`,27)(728,`code`,36),cN(729,`PoRadioGroupOption[]`),ag()(),Tl(730,`td`,29),cN(731,`-`),ag(),Tl(732,`td`,30)(733,`p`),cN(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),ag()()(),Tl(735,`tr`,22)(736,`td`,23)(737,`div`,31)(738,`span`,32),cN(739,` p-helper`),Gl(740,`br`),ag()()(),Tl(741,`td`,27)(742,`code`,37),cN(743,`PoHelperOptions `),ag(),Tl(744,`code`,33),cN(745,` string`),ag()(),Tl(746,`td`,29),cN(747,`-`),ag(),Tl(748,`td`,30)(749,`em`)(750,`strong`),cN(751,`(opcional)`),ag()(),Tl(752,`p`),cN(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(754,`code`),cN(755,`p-label`),ag(),cN(756,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(757,`code`),cN(758,`p-label`),ag(),cN(759,`.`),ag(),Tl(760,`blockquote`)(761,`p`),cN(762,`Para mais informações acesse: `),Tl(763,`a`,38),cN(764,`https://po-ui.io/documentation/po-helper`),ag(),cN(765,`.`),ag()(),Tl(766,`blockquote`)(767,`p`),cN(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(769,`code`),cN(770,`p-additional-help-tooltip`),ag(),cN(771,` e `),Tl(772,`code`),cN(773,`p-additional-help`),ag(),cN(774,`) será ignorado.`),ag()()()(),Tl(775,`tr`,22)(776,`td`,23)(777,`div`,31)(778,`span`,32),cN(779,` p-required`),Gl(780,`br`),ag()()(),Tl(781,`td`,27)(782,`code`,34),cN(783,`boolean`),ag()(),Tl(784,`td`,29)(785,`p`)(786,`code`),cN(787,`false`),ag()()(),Tl(788,`td`,30)(789,`em`)(790,`strong`),cN(791,`(opcional)`),ag()(),Tl(792,`p`),cN(793,`Define que o campo será obrigatório.`),ag()()(),Tl(794,`tr`,22)(795,`td`,23)(796,`div`,31)(797,`span`,32),cN(798,` p-show-required`),Gl(799,`br`),ag()()(),Tl(800,`td`,27)(801,`code`,34),cN(802,`boolean`),ag()(),Tl(803,`td`,29),cN(804,`-`),ag(),Tl(805,`td`,30)(806,`p`),cN(807,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(808,`blockquote`)(809,`p`),cN(810,`Não será exibida a indicação se:`),ag()(),Tl(811,`ul`)(812,`li`),cN(813,`Não possuir `),Tl(814,`code`),cN(815,`p-help`),ag(),cN(816,` e/ou `),Tl(817,`code`),cN(818,`p-label`),ag(),cN(819,`.`),ag()()()(),Tl(820,`tr`,22)(821,`td`,23)(822,`div`,31)(823,`span`,32),cN(824,` p-size`),Gl(825,`br`),ag()()(),Tl(826,`td`,27)(827,`code`,33),cN(828,`string`),ag()(),Tl(829,`td`,29)(830,`p`)(831,`code`),cN(832,`medium`),ag()()(),Tl(833,`td`,30)(834,`em`)(835,`strong`),cN(836,`(opcional)`),ag()(),Tl(837,`p`),cN(838,`Define o tamanho dos radios do componente:`),ag(),Tl(839,`ul`)(840,`li`)(841,`code`),cN(842,`small`),ag(),cN(843,`: 16x16 (disponível apenas para acessibilidade AA).`),ag(),Tl(844,`li`)(845,`code`),cN(846,`medium`),ag(),cN(847,`: 24x24.`),ag()(),Tl(848,`blockquote`)(849,`p`),cN(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(851,`code`),cN(852,`medium`),ag(),cN(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(854,`a`,39),cN(855,`po-theme`),ag(),cN(856,`.`),ag()()()()(),Tl(857,`h3`,18),cN(858,`Métodos`),ag(),Tl(859,`table`,40)(860,`tr`,22)(861,`th`,41)(862,`div`,31)(863,`h4`)(864,`span`,32),cN(865,` focus `),ag()()()()(),Tl(866,`tr`,30)(867,`td`,30)(868,`p`),cN(869,`Função que atribui foco ao componente.`),ag(),Tl(870,`p`),cN(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(872,`pre`)(873,`code`),cN(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),ag()()()()(),Gl(875,`br`),Tl(876,`table`,40)(877,`tr`,22)(878,`th`,41)(879,`div`,31)(880,`h4`)(881,`span`,32),cN(882,` showAdditionalHelp `),ag()()()()(),Tl(883,`tr`,30)(884,`td`,30)(885,`p`),cN(886,`Método que exibe `),Tl(887,`code`),cN(888,`p-helper`),ag(),cN(889,` ou executa a ação definida em `),Tl(890,`code`),cN(891,`p-helper{eventOnClick}`),ag(),cN(892,` ou em `),Tl(893,`code`),cN(894,`p-additionalHelp`),ag(),cN(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(896,`code`),cN(897,`p-keydown`),ag(),cN(898,`.`),ag(),Tl(899,`blockquote`)(900,`p`),cN(901,`Exibe ou oculta o conteúdo do componente `),Tl(902,`code`),cN(903,`po-helper`),ag(),cN(904,` quando o componente estiver com foco.`),ag()(),Tl(905,`pre`)(906,`code`),cN(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),ag()(),Tl(908,`pre`)(909,`code`),cN(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(911,`br`),Tl(912,`h3`),cN(913,`Interfaces`),ag(),Tl(914,`h4`,42)(915,`code`,5),cN(916,`PoRadioGroupOption`),ag()(),Tl(917,`div`,2)(918,`p`),cN(919,`Interface para as ações do componente po-radio-group.`),ag()(),Tl(920,`h4`,18),cN(921,`Propriedades`),ag(),Tl(922,`table`,19)(923,`tr`,20)(924,`th`,21),cN(925,`Nome`),ag(),Tl(926,`th`,21),cN(927,`Tipo`),ag(),Tl(928,`th`,21),cN(929,`Descrição`),ag()(),Tl(930,`tr`,22)(931,`td`,23)(932,`div`,31)(933,`span`,32),cN(934,` disabled`),Gl(935,`br`),ag()()(),Tl(936,`td`,27)(937,`code`,34),cN(938,`boolean`),ag()(),Tl(939,`td`,30)(940,`em`)(941,`strong`),cN(942,`(opcional)`),ag()(),Tl(943,`p`),cN(944,`Desabilita o radio.`),ag()()(),Tl(945,`tr`,22)(946,`td`,23)(947,`div`,31)(948,`span`,32),cN(949,` label`),Gl(950,`br`),ag()()(),Tl(951,`td`,27)(952,`code`,33),cN(953,`string`),ag()(),Tl(954,`td`,30)(955,`p`),cN(956,`Texto do radio.`),ag()()(),Tl(957,`tr`,22)(958,`td`,23)(959,`div`,31)(960,`span`,32),cN(961,` value`),Gl(962,`br`),ag()()(),Tl(963,`td`,27)(964,`code`,33),cN(965,`string `),ag(),Tl(966,`code`,35),cN(967,` number`),ag()(),Tl(968,`td`,30)(969,`p`),cN(970,`Valor do radio.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var Be=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(w(Xn),w(Cn))};static ɵcmp=Un({type:i,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Radio Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-radio-group-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-radio-group-basic-view`)(6,`sample-po-radio-group-labs-view`)(7,`sample-po-radio-group-translator-view`)(8,`sample-po-radio-group-translator-reactive-form-view`),ag()()()),r&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,me,ce,Ee,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[bL.forChild(Be),bL]})}return i})();var bt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[ar,fe]})}return i})();export{bt as DocPoRadioGroupModule};