import{$i as pt,Ai as hm,Br as Qn,Cr as KP,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kr as S9,Lt as bae,M as Ef,Qn as C9,Sa as zO,Ur as RN,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,i as _a,in as kte,k as D4,ki as he$1,kn as v4,na as qP,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,va as xN,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var Ce=()=>({label:`Option 1`,value:`1`});var we=()=>({label:`Option 2`,value:`2`});var ye=(i,ve)=>[i,ve];var de=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(r,n){r&1&&Kc(0,`po-radio-group`,0),r&2&&cE(`p-options`,xN(3,ye,RN(1,Ce),RN(2,we)))},dependencies:[kte],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Radio Group Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-radio-group-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(r,n){if(r&1){let m=Bx();Ac(0,`po-radio-group`,2),RE(`ngModelChange`,function(l){return Jv(m),DN(n.radioGroup,l)||(n.radioGroup=l),e_(l)}),pt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,3),Kc(3,`po-info`,4)(4,`po-info`,5),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),RE(`ngModelChange`,function(l){return Jv(m),DN(n.option.label,l)||(n.option.label=l),e_(l)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(l){return Jv(m),DN(n.option.value,l)||(n.option.value=l),e_(l)}),ug(),p0(),Ac(11,`po-switch`,8),RE(`ngModelChange`,function(l){return Jv(m),DN(n.option.disabled,l)||(n.option.disabled=l),e_(l)}),ug(),p0(),ug(),Ac(12,`div`,3)(13,`po-button`,9),pt(`p-click`,function(){Jv(m);let l=Zx(7);return n.addOption(),e_(l.reset())}),ug()()(),Kc(14,`po-divider`),Ac(15,`form`,null,1)(17,`po-input`,10),RE(`ngModelChange`,function(l){return Jv(m),DN(n.label,l)||(n.label=l),e_(l)}),ug(),p0(),Ac(18,`po-input`,11),RE(`ngModelChange`,function(l){return Jv(m),DN(n.help,l)||(n.help=l),e_(l)}),ug(),p0(),Ac(19,`po-input`,12),RE(`ngModelChange`,function(l){return Jv(m),DN(n.helperText,l)||(n.helperText=l),e_(l)}),ug(),p0(),Ac(20,`po-input`,13),RE(`ngModelChange`,function(l){return Jv(m),DN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),e_(l)}),ug(),p0(),Ac(21,`po-radio-group`,14),RE(`ngModelChange`,function(l){return Jv(m),DN(n.columns,l)||(n.columns=l),e_(l)}),ug(),p0(),Ac(22,`po-checkbox-group`,15),RE(`ngModelChange`,function(l){return Jv(m),DN(n.properties,l)||(n.properties=l),e_(l)}),ug(),p0(),Ac(23,`po-radio-group`,16),RE(`ngModelChange`,function(l){return Jv(m),DN(n.size,l)||(n.size=l),e_(l)}),ug(),p0(),Ac(24,`div`,3)(25,`po-button`,17),pt(`click`,function(){return Jv(m),Zx(16).reset(),e_(n.restore())}),ug()()()}if(r&2){let m=Zx(7);TE(`ngModel`,n.radioGroup),cE(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),m0(),Hp(3),cE(`p-value`,n.radioGroup),Hp(),cE(`p-value`,n.event),Hp(5),TE(`ngModel`,n.option.label),m0(),Hp(),TE(`ngModel`,n.option.value),m0(),Hp(),TE(`ngModel`,n.option.disabled),m0(),Hp(2),cE(`p-disabled`,m.invalid),Hp(4),TE(`ngModel`,n.label),m0(),Hp(),TE(`ngModel`,n.help),m0(),Hp(),TE(`ngModel`,n.helperText),m0(),Hp(),TE(`ngModel`,n.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,n.columns),cE(`p-options`,n.columnOptions),m0(),Hp(),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0(),Hp(),TE(`ngModel`,n.size),cE(`p-options`,n.sizesOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,v4,hoe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Radio Group Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-radio-group
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-radio-group-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Re,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ue],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(r,n){if(r&1){let m=Bx();Ac(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),RE(`ngModelChange`,function(l){return Jv(m),DN(n.language,l)||(n.language=l),e_(l)}),pt(`p-change`,function(l){return n.changeLanguage(l)}),ug(),p0(),Ac(4,`po-select`,3),RE(`ngModelChange`,function(l){return Jv(m),DN(n.original,l)||(n.original=l),e_(l)}),pt(`p-change`,function(l){return n.changeLanguage(l)}),ug(),p0(),Ac(5,`po-input`,4),RE(`ngModelChange`,function(l){return Jv(m),DN(n.translated,l)||(n.translated=l),e_(l)}),ug(),p0(),ug()()}r&2&&(Hp(3),TE(`ngModel`,n.language),cE(`p-options`,n.languageOptions),m0(),Hp(),TE(`ngModel`,n.original),cE(`p-options`,n.optionsList),m0(),Hp(),TE(`ngModel`,n.translated),m0())},dependencies:[b9,D9,C9,BP,LP,D4,kte,poe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Radio Group - Translator`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #f="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-radio-group-translator`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ge],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{formBuilder=f(S9);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,hm.required],original:[void 0,hm.required],translated:[void 0,hm.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(r,n){r&1&&(Ac(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),pt(`p-change`,function(){return n.changeLanguage()}),ug(),p0(),Ac(3,`po-select`,3),pt(`p-change`,function(){return n.changeLanguage()}),ug(),p0(),Kc(4,`po-input`,4),p0(),ug()()),r&2&&(cE(`formGroup`,n.translatorForm),Hp(2),cE(`p-options`,n.languageOptions),m0(),Hp(),cE(`p-options`,n.optionsList),m0(),Hp(),m0())},dependencies:[b9,D9,C9,KP,qP,D4,kte,poe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Radio Group - Translator Reactive Form`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form [formGroup]="translatorForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-radio-group-translator-reactive-form`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Hn({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(r,n){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoRadioGroupComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O componente `),Ac(24,`code`),vN(25,`po-radio-group`),ug(),vN(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Ac(27,`a`,6)(28,`strong`),vN(29,`po-combo`),ug()(),vN(30,` ou `),Ac(31,`a`,7)(32,`strong`),vN(33,`po-select`),ug()(),vN(34,`.`),ug(),Ac(35,`p`),vN(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Ac(37,`a`,8)(38,`strong`),vN(39,`po-checkbox-group`),ug()(),vN(40,`.`),ug(),Ac(41,`blockquote`)(42,`p`),vN(43,`Ao passar um valor para o `),Ac(44,`em`),vN(45,`model`),ug(),vN(46,` que não esteja na lista de opções, o mesmo será definido como `),Ac(47,`code`),vN(48,`undefined`),ug(),vN(49,`.`),ug()(),Ac(50,`h4`),vN(51,`Acessibilidade tratada no componente interno `),Ac(52,`code`),vN(53,`po-radio`),ug(),vN(54,`:`),ug(),Ac(55,`p`),vN(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),ug(),Ac(57,`ul`)(58,`li`),vN(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Ac(60,`a`,9),vN(61,`WCAG 4.1.2: Name, Role, Value`),ug()(),Ac(62,`li`),vN(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),Ac(64,`a`,10),vN(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),ug()(),Ac(66,`li`),vN(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),Ac(68,`a`,11),vN(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),ug()(),Ac(70,`li`),vN(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Ac(72,`a`,12),vN(73,`(WCAG 2.4.12: Focus Appearance`),ug()()(),Ac(74,`p`),vN(75,`Conforme documentação em: `),Ac(76,`a`,13),vN(77,`https://doc.animaliads.io/docs/components/radio`),ug()(),Ac(78,`h4`),vN(79,`Tokens customizáveis`),ug(),Ac(80,`p`),vN(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(82,`br`),vN(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Ac(84,`code`),vN(85,`po-radio`),ug(),vN(86,` que compõem o grupo de opções. `),Kc(87,`br`),vN(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Ac(89,`code`),vN(90,`po-radio`),ug(),vN(91,` em vez do próprio `),Ac(92,`code`),vN(93,`po-radio-group`),ug(),vN(94,`.`),ug(),Ac(95,`blockquote`)(96,`p`),vN(97,`Para maiores informações, acesse o guia `),Ac(98,`a`,14),vN(99,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(100,`.`),ug()(),Ac(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),vN(105,`Propriedade`),ug(),Ac(106,`th`),vN(107,`Descrição`),ug(),Ac(108,`th`),vN(109,`Valor Padrão`),ug()()(),Ac(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),vN(114,`Default Values`),ug()(),Kc(115,`td`)(116,`td`),ug(),Ac(117,`tr`)(118,`td`)(119,`code`),vN(120,`--border-color`),ug()(),Ac(121,`td`),vN(122,`Cor da borda`),ug(),Ac(123,`td`)(124,`code`),vN(125,`var(--color-neutral-dark-70)`),ug()()(),Ac(126,`tr`)(127,`td`)(128,`code`),vN(129,`--field-container-title-justify`),ug()(),Ac(130,`td`),vN(131,`Alinhamento horizontal do título (`),Ac(132,`code`),vN(133,`justify-content`),ug(),vN(134,`)`),ug(),Ac(135,`td`)(136,`code`),vN(137,`space-between`),ug()()(),Ac(138,`tr`)(139,`td`)(140,`code`),vN(141,`--field-container-title-flex`),ug()(),Ac(142,`td`),vN(143,`Flex do título (`),Ac(144,`code`),vN(145,`flex`),ug(),vN(146,`)`),ug(),Ac(147,`td`)(148,`code`),vN(149,`1 auto`),ug()()(),Ac(150,`tr`)(151,`td`)(152,`strong`),vN(153,`Hover`),ug()(),Kc(154,`td`)(155,`td`),ug(),Ac(156,`tr`)(157,`td`)(158,`code`),vN(159,`--shadow-color-hover`),ug()(),Ac(160,`td`),vN(161,`Cor da sombra no estado hover`),ug(),Ac(162,`td`)(163,`code`),vN(164,`var(--color-brand-01-lighter)`),ug()()(),Ac(165,`tr`)(166,`td`)(167,`code`),vN(168,`--color-hover`),ug()(),Ac(169,`td`),vN(170,`Cor principal no estado hover`),ug(),Ac(171,`td`)(172,`code`),vN(173,`var(--color-brand-01-dark)`),ug()()(),Ac(174,`tr`)(175,`td`)(176,`strong`),vN(177,`Focused`),ug()(),Kc(178,`td`)(179,`td`),ug(),Ac(180,`tr`)(181,`td`)(182,`code`),vN(183,`--outline-color-focused`),ug()(),Ac(184,`td`),vN(185,`Cor do outline do estado de focus`),ug(),Ac(186,`td`)(187,`code`),vN(188,`var(--color-brand-01-darkest)`),ug()()(),Ac(189,`tr`)(190,`td`)(191,`strong`),vN(192,`checked`),ug()(),Kc(193,`td`)(194,`td`),ug(),Ac(195,`tr`)(196,`td`)(197,`code`),vN(198,`--color-unchecked`),ug()(),Ac(199,`td`),vN(200,`Cor quando não selecionado`),ug(),Ac(201,`td`)(202,`code`),vN(203,`var(--color-neutral-light-00)`),ug()()(),Ac(204,`tr`)(205,`td`)(206,`code`),vN(207,`--color-checked`),ug()(),Ac(208,`td`),vN(209,`Cor quando selecionado`),ug(),Ac(210,`td`)(211,`code`),vN(212,`var(--color-action-default)`),ug()()(),Ac(213,`tr`)(214,`td`)(215,`strong`),vN(216,`Disabled`),ug()(),Kc(217,`td`)(218,`td`),ug(),Ac(219,`tr`)(220,`td`)(221,`code`),vN(222,`--color-unchecked-disabled`),ug()(),Ac(223,`td`),vN(224,`Cor pricipal quando não selecionado no estado disabled`),ug(),Ac(225,`td`)(226,`code`),vN(227,`var(--color-neutral-light-30)`),ug()()(),Ac(228,`tr`)(229,`td`)(230,`code`),vN(231,`--color-checked-disabled`),ug()(),Ac(232,`td`),vN(233,`Cor pricipal quando selecionado no estado disabled`),ug(),Ac(234,`td`)(235,`code`),vN(236,`var(--color-neutral-dark-70)`),ug()()()()()(),Ac(237,`div`,15)(238,`h4`,16),vN(239,`Seletor`),ug(),Ac(240,`pre`,17),vN(241,`<po-radio-group
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
`),ug()(),Ac(242,`h4`,18),vN(243,`Propriedades`),ug(),Ac(244,`table`,19)(245,`tr`,20)(246,`th`,21),vN(247,`Nome`),ug(),Ac(248,`th`,21),vN(249,`Tipo`),ug(),Ac(250,`th`,21),vN(251,`Padrão`),ug(),Ac(252,`th`,21),vN(253,`Descrição`),ug()(),Ac(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),vN(258,` (p-additional-help)`),Kc(259,`br`),ug()(),Ac(260,`div`,26),vN(261,`Deprecated`),ug()(),Ac(262,`td`,27)(263,`code`,28),vN(264,`EventEmitter`),ug()(),Ac(265,`td`,29),vN(266,`-`),ug(),Ac(267,`td`,30)(268,`em`)(269,`strong`),vN(270,`(opcional)`),ug()(),Ac(271,`p`),vN(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(273,`blockquote`)(274,`p`),vN(275,`Essa propriedade está `),Ac(276,`strong`),vN(277,`depreciada`),ug(),vN(278,` e será removida na versão `),Ac(279,`code`),vN(280,`23.x.x`),ug(),vN(281,`. Recomendamos utilizar a propriedade `),Ac(282,`code`),vN(283,`p-helper`),ug(),vN(284,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(285,`tr`,22)(286,`td`,23)(287,`div`,31)(288,`span`,32),vN(289,` p-additional-help-tooltip`),Kc(290,`br`),ug()(),Ac(291,`div`,26),vN(292,`Deprecated`),ug()(),Ac(293,`td`,27)(294,`code`,33),vN(295,`string`),ug()(),Ac(296,`td`,29),vN(297,`-`),ug(),Ac(298,`td`,30)(299,`em`)(300,`strong`),vN(301,`(opcional)`),ug()(),Ac(302,`p`),vN(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(304,`code`),vN(305,`po-helper`),ug(),vN(306,`.
`),Ac(307,`strong`),vN(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(309,`blockquote`)(310,`p`),vN(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(312,`blockquote`)(313,`p`),vN(314,`Essa propriedade está `),Ac(315,`strong`),vN(316,`depreciada`),ug(),vN(317,` e será removida na versão `),Ac(318,`code`),vN(319,`23.x.x`),ug(),vN(320,`. Recomendamos utilizar a propriedade `),Ac(321,`code`),vN(322,`p-helper`),ug(),vN(323,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(324,`tr`,22)(325,`td`,23)(326,`div`,31)(327,`span`,32),vN(328,` p-append-in-body`),Kc(329,`br`),ug()()(),Ac(330,`td`,27)(331,`code`,34),vN(332,`boolean`),ug()(),Ac(333,`td`,29)(334,`p`)(335,`code`),vN(336,`false`),ug()()(),Ac(337,`td`,30)(338,`em`)(339,`strong`),vN(340,`(opcional)`),ug()(),Ac(341,`p`),vN(342,`Define que o popover (`),Ac(343,`code`),vN(344,`p-helper`),ug(),vN(345,` e/ou `),Ac(346,`code`),vN(347,`p-error-limit`),ug(),vN(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(349,`blockquote`)(350,`p`),vN(351,`Quando utilizado com `),Ac(352,`code`),vN(353,`p-helper`),ug(),vN(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(355,`tr`,22)(356,`td`,23)(357,`div`,31)(358,`span`,32),vN(359,` p-auto-focus`),Kc(360,`br`),ug()()(),Ac(361,`td`,27)(362,`code`,34),vN(363,`boolean`),ug()(),Ac(364,`td`,29)(365,`p`)(366,`code`),vN(367,`false`),ug()()(),Ac(368,`td`,30)(369,`em`)(370,`strong`),vN(371,`(opcional)`),ug()(),Ac(372,`p`),vN(373,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(374,`blockquote`)(375,`p`),vN(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(377,`tr`,22)(378,`td`,23)(379,`div`,24)(380,`span`,25),vN(381,` (p-change)`),Kc(382,`br`),ug()()(),Ac(383,`td`,27)(384,`code`,28),vN(385,`EventEmitter`),ug()(),Ac(386,`td`,29),vN(387,`-`),ug(),Ac(388,`td`,30)(389,`em`)(390,`strong`),vN(391,`(opcional)`),ug()(),Ac(392,`p`),vN(393,`Evento ao alterar valor do campo.`),ug()()(),Ac(394,`tr`,22)(395,`td`,23)(396,`div`,24)(397,`span`,25),vN(398,` (p-change-model)`),Kc(399,`br`),ug()()(),Ac(400,`td`,27)(401,`code`,28),vN(402,`EventEmitter`),ug()(),Ac(403,`td`,29),vN(404,`-`),ug(),Ac(405,`td`,30)(406,`em`)(407,`strong`),vN(408,`(opcional)`),ug()(),Ac(409,`p`),vN(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(411,`code`),vN(412,`setValue`),ug(),vN(413,`, `),Ac(414,`code`),vN(415,`patchValue`),ug(),vN(416,`, carregamento assíncrono).`),ug(),Ac(417,`p`),vN(418,`Diferentemente do `),Ac(419,`code`),vN(420,`p-change`),ug(),vN(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(422,`code`),vN(423,`p-change-model`),ug(),vN(424,` cobre todos os cenários de alteração de valor.`),ug(),Ac(425,`p`),vN(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(427,`tr`,22)(428,`td`,23)(429,`div`,31)(430,`span`,32),vN(431,` p-columns`),Kc(432,`br`),ug()()(),Ac(433,`td`,27)(434,`code`,35),vN(435,`number`),ug()(),Ac(436,`td`,29)(437,`p`)(438,`code`),vN(439,`2`),ug()()(),Ac(440,`td`,30)(441,`em`)(442,`strong`),vN(443,`(opcional)`),ug()(),Ac(444,`p`),vN(445,`Define a quantidade de colunas para exibição das opções.`),ug(),Ac(446,`p`)(447,`strong`),vN(448,`Considerações:`),ug()(),Ac(449,`ul`)(450,`li`),vN(451,`É possível exibir as opções entre `),Ac(452,`code`),vN(453,`1`),ug(),vN(454,` e `),Ac(455,`code`),vN(456,`4`),ug(),vN(457,` colunas.`),ug(),Ac(458,`li`),vN(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),Ac(460,`ul`)(461,`li`)(462,`code`),vN(463,`sm`),ug(),vN(464,`: `),Ac(465,`code`),vN(466,`1`),ug()(),Ac(467,`li`)(468,`code`),vN(469,`md`),ug(),vN(470,`: `),Ac(471,`code`),vN(472,`2`),ug()()()()()()(),Ac(473,`tr`,22)(474,`td`,23)(475,`div`,31)(476,`span`,32),vN(477,` p-compact-label`),Kc(478,`br`),ug()()(),Ac(479,`td`,27)(480,`code`,34),vN(481,`boolean`),ug()(),Ac(482,`td`,29)(483,`p`)(484,`code`),vN(485,`false`),ug()()(),Ac(486,`td`,30)(487,`em`)(488,`strong`),vN(489,`(opcional)`),ug()(),Ac(490,`p`),vN(491,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(492,`p`),vN(493,`Quando habilitado (`),Ac(494,`code`),vN(495,`true`),ug(),vN(496,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(497,`ul`)(498,`li`)(499,`code`),vN(500,`po-label`),ug()(),Ac(501,`li`)(502,`code`),vN(503,`p-requirement (showRequired)`),ug()(),Ac(504,`li`)(505,`code`),vN(506,`po-helper`),ug()()(),Ac(507,`p`),vN(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(509,`p`),vN(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(511,`ul`)(512,`li`)(513,`code`),vN(514,`--field-container-title-justify`),ug()(),Ac(515,`li`)(516,`code`),vN(517,`--field-container-title-flex`),ug()()(),Ac(518,`p`),vN(519,`Exemplo:`),ug(),Ac(520,`pre`)(521,`code`),vN(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(523,`p`),vN(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(525,`tr`,22)(526,`td`,23)(527,`div`,31)(528,`span`,32),vN(529,` p-disabled`),Kc(530,`br`),ug()()(),Ac(531,`td`,27)(532,`code`,34),vN(533,`boolean`),ug()(),Ac(534,`td`,29)(535,`p`)(536,`code`),vN(537,`false`),ug()()(),Ac(538,`td`,30)(539,`em`)(540,`strong`),vN(541,`(opcional)`),ug()(),Ac(542,`p`),vN(543,`Indica que o campo será desabilitado.`),ug()()(),Ac(544,`tr`,22)(545,`td`,23)(546,`div`,31)(547,`span`,32),vN(548,` p-error-limit`),Kc(549,`br`),ug()()(),Ac(550,`td`,27)(551,`code`,34),vN(552,`boolean`),ug()(),Ac(553,`td`,29)(554,`p`)(555,`code`),vN(556,`false`),ug()()(),Ac(557,`td`,30)(558,`em`)(559,`strong`),vN(560,`(opcional)`),ug()(),Ac(561,`p`),vN(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(563,`blockquote`)(564,`p`),vN(565,`Caso essa propriedade seja definida como `),Ac(566,`code`),vN(567,`true`),ug(),vN(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(569,`tr`,22)(570,`td`,23)(571,`div`,31)(572,`span`,32),vN(573,` p-field-error-message`),Kc(574,`br`),ug()()(),Ac(575,`td`,27)(576,`code`,33),vN(577,`string`),ug()(),Ac(578,`td`,29),vN(579,`-`),ug(),Ac(580,`td`,30)(581,`em`)(582,`strong`),vN(583,`(opcional)`),ug()(),Ac(584,`p`),vN(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(586,`blockquote`)(587,`p`),vN(588,`Necessário que a propriedade `),Ac(589,`code`),vN(590,`p-required`),ug(),vN(591,` esteja habilitada.`),ug()()()(),Ac(592,`tr`,22)(593,`td`,23)(594,`div`,31)(595,`span`,32),vN(596,` p-help`),Kc(597,`br`),ug()()(),Ac(598,`td`,27)(599,`code`,33),vN(600,`string`),ug()(),Ac(601,`td`,29),vN(602,`-`),ug(),Ac(603,`td`,30)(604,`em`)(605,`strong`),vN(606,`(opcional)`),ug()(),Ac(607,`p`),vN(608,`Texto de apoio do campo.`),ug()()(),Ac(609,`tr`,22)(610,`td`,23)(611,`div`,24)(612,`span`,25),vN(613,` (p-keydown)`),Kc(614,`br`),ug()()(),Ac(615,`td`,27)(616,`code`,28),vN(617,`EventEmitter`),ug()(),Ac(618,`td`,29),vN(619,`-`),ug(),Ac(620,`td`,30)(621,`em`)(622,`strong`),vN(623,`(opcional)`),ug()(),Ac(624,`p`),vN(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(626,`code`),vN(627,`KeyboardEvent`),ug(),vN(628,` com informações sobre a tecla.`),ug()()(),Ac(629,`tr`,22)(630,`td`,23)(631,`div`,31)(632,`span`,32),vN(633,` p-label`),Kc(634,`br`),ug()()(),Ac(635,`td`,27)(636,`code`,33),vN(637,`string`),ug()(),Ac(638,`td`,29),vN(639,`-`),ug(),Ac(640,`td`,30)(641,`em`)(642,`strong`),vN(643,`(opcional)`),ug()(),Ac(644,`p`),vN(645,`Label do campo.`),ug()()(),Ac(646,`tr`,22)(647,`td`,23)(648,`div`,31)(649,`span`,32),vN(650,` p-label-text-wrap`),Kc(651,`br`),ug()()(),Ac(652,`td`,27)(653,`code`,34),vN(654,`boolean`),ug()(),Ac(655,`td`,29)(656,`p`)(657,`code`),vN(658,`false`),ug()()(),Ac(659,`td`,30)(660,`em`)(661,`strong`),vN(662,`(opcional)`),ug()(),Ac(663,`p`),vN(664,`Habilita a quebra automática do texto da propriedade `),Ac(665,`code`),vN(666,`p-label`),ug(),vN(667,`. Quando `),Ac(668,`code`),vN(669,`p-label-text-wrap`),ug(),vN(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(671,`tr`,22)(672,`td`,23)(673,`div`,31)(674,`span`,32),vN(675,` name`),Kc(676,`br`),ug()()(),Ac(677,`td`,27)(678,`code`,33),vN(679,`string`),ug()(),Ac(680,`td`,29),vN(681,`-`),ug(),Ac(682,`td`,30)(683,`p`),vN(684,`Nome das opções.`),ug()()(),Ac(685,`tr`,22)(686,`td`,23)(687,`div`,31)(688,`span`,32),vN(689,` p-optional`),Kc(690,`br`),ug()()(),Ac(691,`td`,27)(692,`code`,34),vN(693,`boolean`),ug()(),Ac(694,`td`,29)(695,`p`)(696,`code`),vN(697,`false`),ug()()(),Ac(698,`td`,30)(699,`em`)(700,`strong`),vN(701,`(opcional)`),ug()(),Ac(702,`p`),vN(703,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(704,`blockquote`)(705,`p`),vN(706,`Não será exibida a indicação se:`),ug()(),Ac(707,`ul`)(708,`li`),vN(709,`O campo conter `),Ac(710,`code`),vN(711,`p-required`),ug(),vN(712,`;`),ug(),Ac(713,`li`),vN(714,`Não possuir `),Ac(715,`code`),vN(716,`p-help`),ug(),vN(717,` e/ou `),Ac(718,`code`),vN(719,`p-label`),ug(),vN(720,`.`),ug()()()(),Ac(721,`tr`,22)(722,`td`,23)(723,`div`,31)(724,`span`,32),vN(725,` p-options`),Kc(726,`br`),ug()()(),Ac(727,`td`,27)(728,`code`,36),vN(729,`PoRadioGroupOption[]`),ug()(),Ac(730,`td`,29),vN(731,`-`),ug(),Ac(732,`td`,30)(733,`p`),vN(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),ug()()(),Ac(735,`tr`,22)(736,`td`,23)(737,`div`,31)(738,`span`,32),vN(739,` p-helper`),Kc(740,`br`),ug()()(),Ac(741,`td`,27)(742,`code`,37),vN(743,`PoHelperOptions `),ug(),Ac(744,`code`,33),vN(745,` string`),ug()(),Ac(746,`td`,29),vN(747,`-`),ug(),Ac(748,`td`,30)(749,`em`)(750,`strong`),vN(751,`(opcional)`),ug()(),Ac(752,`p`),vN(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(754,`code`),vN(755,`p-label`),ug(),vN(756,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(757,`code`),vN(758,`p-label`),ug(),vN(759,`.`),ug(),Ac(760,`blockquote`)(761,`p`),vN(762,`Para mais informações acesse: `),Ac(763,`a`,38),vN(764,`https://po-ui.io/documentation/po-helper`),ug(),vN(765,`.`),ug()(),Ac(766,`blockquote`)(767,`p`),vN(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(769,`code`),vN(770,`p-additional-help-tooltip`),ug(),vN(771,` e `),Ac(772,`code`),vN(773,`p-additional-help`),ug(),vN(774,`) será ignorado.`),ug()()()(),Ac(775,`tr`,22)(776,`td`,23)(777,`div`,31)(778,`span`,32),vN(779,` p-required`),Kc(780,`br`),ug()()(),Ac(781,`td`,27)(782,`code`,34),vN(783,`boolean`),ug()(),Ac(784,`td`,29)(785,`p`)(786,`code`),vN(787,`false`),ug()()(),Ac(788,`td`,30)(789,`em`)(790,`strong`),vN(791,`(opcional)`),ug()(),Ac(792,`p`),vN(793,`Define que o campo será obrigatório.`),ug()()(),Ac(794,`tr`,22)(795,`td`,23)(796,`div`,31)(797,`span`,32),vN(798,` p-show-required`),Kc(799,`br`),ug()()(),Ac(800,`td`,27)(801,`code`,34),vN(802,`boolean`),ug()(),Ac(803,`td`,29),vN(804,`-`),ug(),Ac(805,`td`,30)(806,`p`),vN(807,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(808,`blockquote`)(809,`p`),vN(810,`Não será exibida a indicação se:`),ug()(),Ac(811,`ul`)(812,`li`),vN(813,`Não possuir `),Ac(814,`code`),vN(815,`p-help`),ug(),vN(816,` e/ou `),Ac(817,`code`),vN(818,`p-label`),ug(),vN(819,`.`),ug()()()(),Ac(820,`tr`,22)(821,`td`,23)(822,`div`,31)(823,`span`,32),vN(824,` p-size`),Kc(825,`br`),ug()()(),Ac(826,`td`,27)(827,`code`,33),vN(828,`string`),ug()(),Ac(829,`td`,29)(830,`p`)(831,`code`),vN(832,`medium`),ug()()(),Ac(833,`td`,30)(834,`em`)(835,`strong`),vN(836,`(opcional)`),ug()(),Ac(837,`p`),vN(838,`Define o tamanho dos radios do componente:`),ug(),Ac(839,`ul`)(840,`li`)(841,`code`),vN(842,`small`),ug(),vN(843,`: 16x16 (disponível apenas para acessibilidade AA).`),ug(),Ac(844,`li`)(845,`code`),vN(846,`medium`),ug(),vN(847,`: 24x24.`),ug()(),Ac(848,`blockquote`)(849,`p`),vN(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(851,`code`),vN(852,`medium`),ug(),vN(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(854,`a`,39),vN(855,`po-theme`),ug(),vN(856,`.`),ug()()()()(),Ac(857,`h3`,18),vN(858,`Métodos`),ug(),Ac(859,`table`,40)(860,`tr`,22)(861,`th`,41)(862,`div`,31)(863,`h4`)(864,`span`,32),vN(865,` focus `),ug()()()()(),Ac(866,`tr`,30)(867,`td`,30)(868,`p`),vN(869,`Função que atribui foco ao componente.`),ug(),Ac(870,`p`),vN(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(872,`pre`)(873,`code`),vN(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),ug()()()()(),Kc(875,`br`),Ac(876,`table`,40)(877,`tr`,22)(878,`th`,41)(879,`div`,31)(880,`h4`)(881,`span`,32),vN(882,` showAdditionalHelp `),ug()()()()(),Ac(883,`tr`,30)(884,`td`,30)(885,`p`),vN(886,`Método que exibe `),Ac(887,`code`),vN(888,`p-helper`),ug(),vN(889,` ou executa a ação definida em `),Ac(890,`code`),vN(891,`p-helper{eventOnClick}`),ug(),vN(892,` ou em `),Ac(893,`code`),vN(894,`p-additionalHelp`),ug(),vN(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(896,`code`),vN(897,`p-keydown`),ug(),vN(898,`.`),ug(),Ac(899,`blockquote`)(900,`p`),vN(901,`Exibe ou oculta o conteúdo do componente `),Ac(902,`code`),vN(903,`po-helper`),ug(),vN(904,` quando o componente estiver com foco.`),ug()(),Ac(905,`pre`)(906,`code`),vN(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),ug()(),Ac(908,`pre`)(909,`code`),vN(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(911,`br`),Ac(912,`h3`),vN(913,`Interfaces`),ug(),Ac(914,`h4`,42)(915,`code`,5),vN(916,`PoRadioGroupOption`),ug()(),Ac(917,`div`,2)(918,`p`),vN(919,`Interface para as ações do componente po-radio-group.`),ug()(),Ac(920,`h4`,18),vN(921,`Propriedades`),ug(),Ac(922,`table`,19)(923,`tr`,20)(924,`th`,21),vN(925,`Nome`),ug(),Ac(926,`th`,21),vN(927,`Tipo`),ug(),Ac(928,`th`,21),vN(929,`Descrição`),ug()(),Ac(930,`tr`,22)(931,`td`,23)(932,`div`,31)(933,`span`,32),vN(934,` disabled`),Kc(935,`br`),ug()()(),Ac(936,`td`,27)(937,`code`,34),vN(938,`boolean`),ug()(),Ac(939,`td`,30)(940,`em`)(941,`strong`),vN(942,`(opcional)`),ug()(),Ac(943,`p`),vN(944,`Desabilita o radio.`),ug()()(),Ac(945,`tr`,22)(946,`td`,23)(947,`div`,31)(948,`span`,32),vN(949,` label`),Kc(950,`br`),ug()()(),Ac(951,`td`,27)(952,`code`,33),vN(953,`string`),ug()(),Ac(954,`td`,30)(955,`p`),vN(956,`Texto do radio.`),ug()()(),Ac(957,`tr`,22)(958,`td`,23)(959,`div`,31)(960,`span`,32),vN(961,` value`),Kc(962,`br`),ug()()(),Ac(963,`td`,27)(964,`code`,33),vN(965,`string `),ug(),Ac(966,`code`,35),vN(967,` number`),ug()(),Ac(968,`td`,30)(969,`p`),vN(970,`Valor do radio.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var Be=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(E(Qn),E(wn))};static ɵcmp=Hn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Radio Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,n){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-radio-group-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-radio-group-basic-view`)(6,`sample-po-radio-group-labs-view`)(7,`sample-po-radio-group-translator-view`)(8,`sample-po-radio-group-translator-reactive-form-view`),ug()()()),r&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,me,ce,Ee,he,Se],encapsulation:2,changeDetection:1})}return i})()}];var fe=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[kL.forChild(Be),kL]})}return i})();var bt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=he$1({type:i});static ɵinj=ue$1({imports:[Ta,fe]})}return i})();export{bt as DocPoRadioGroupModule};