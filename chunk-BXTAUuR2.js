import{$r as Zn,Br as Sx,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,K as K3,Ki as px,Kn as Ag,Lr as SF,Pi as mt,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Sr as Mm,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,ga as xx,i as _a,ir as EF,ji as mO,ki as kF,mn as ni,ni as _o,nn as goe,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`textarea`,`p-label`,`PO Textarea`]],template:function(r,i){r&1&&nu(0,`po-textarea`,0)},dependencies:[goe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Textarea Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-textarea-basic/sample-po-textarea-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-textarea-basic/sample-po-textarea-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-textarea-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ee],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage=``,this.rows=void 0,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-labs`]],standalone:!1,decls:20,vars:33,consts:[[`f`,`ngForm`],[`name`,`textarea`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-rows`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`rows`,`p-clean`,``,`p-label`,`Rows`,`p-min`,`3`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`po-textarea`,1),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.textarea,l)||(i.textarea=l),v_(l)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.label,l)||(i.label=l),v_(l)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.help,l)||(i.help=l),v_(l)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.helperText,l)||(i.helperText=l),v_(l)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.placeholder,l)||(i.placeholder=l),v_(l)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),v_(l)}),wg(),jc(13,`po-number`,10),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.rows,l)||(i.rows=l),v_(l)}),wg(),jc(14,`po-number`,11),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.minlength,l)||(i.minlength=l),v_(l)}),wg(),jc(15,`po-number`,12),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.maxlength,l)||(i.maxlength=l),v_(l)}),wg(),jc(16,`po-checkbox-group`,13),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.properties,l)||(i.properties=l),v_(l)}),wg(),jc(17,`po-radio-group`,14),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.size,l)||(i.size=l),v_(l)}),wg(),jc(18,`div`,2)(19,`po-button`,15),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(ib(`ngModel`,i.textarea),jE(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-rows`,i.rows)(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),t0(),rg(3),jE(`p-value`,i.textarea),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.fieldErrorMessage),t0(),rg(),ib(`ngModel`,i.rows),t0(),rg(),ib(`ngModel`,i.minlength),t0(),rg(),ib(`ngModel`,i.maxlength),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,goe,_oe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Textarea Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-textarea-labs/sample-po-textarea-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-textarea>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

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

  <po-number class="po-md-6 po-lg-3" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-textarea-labs/sample-po-textarea-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  helperText: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  size: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-textarea-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ke,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return a})();var Fe=[`formEmail`];function Ve(a,Me){if(a&1&&(jc(0,`div`)(1,`div`,8),nu(2,`po-info`,13),wg(),nu(3,`po-divider`),wg()),a&2){let m=xx();rg(2),jE(`p-value`,m.cc)}}var Se=(()=>{class a{formEmail;poModal;cc=``;emailText=``;from=``;subject=``;to=``;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-email`]],viewQuery:function(r,i){if(r&1&&iu(Fe,7)(ea,7),r&2){let s;vo(s=_o())&&(i.formEmail=s.first),vo(s=_o())&&(i.poModal=s.first)}},standalone:!1,decls:19,vars:12,consts:[[`formEmail`,`ngForm`],[`p-title`,`Send email`,3,`p-actions`],[`name`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`emailText`,`p-label`,`E-mail`,`p-required`,``,`p-rows`,`8`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`po-page-default`,1)(1,`form`,null,0)(3,`po-email`,2),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.from,l)||(i.from=l),v_(l)}),wg(),jc(4,`po-email`,3),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.to,l)||(i.to=l),v_(l)}),wg(),jc(5,`po-email`,4),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.cc,l)||(i.cc=l),v_(l)}),wg(),jc(6,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.subject,l)||(i.subject=l),v_(l)}),wg(),jc(7,`po-textarea`,6),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.emailText,l)||(i.emailText=l),v_(l)}),wg()()(),jc(8,`po-modal`,7)(9,`div`,8),nu(10,`po-info`,9)(11,`po-info`,10),wg(),nu(12,`po-divider`),px(13,Ve,4,1,`div`),jc(14,`div`,8),nu(15,`po-info`,11),wg(),nu(16,`po-divider`),jc(17,`div`,8)(18,`po-textarea`,12),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.emailText,l)||(i.emailText=l),v_(l)}),wg()()()}r&2&&(jE(`p-actions`,i.getPageAction()),rg(3),ib(`ngModel`,i.from),t0(),rg(),ib(`ngModel`,i.to),t0(),rg(),ib(`ngModel`,i.cc),t0(),rg(),ib(`ngModel`,i.subject),t0(),rg(),ib(`ngModel`,i.emailText),t0(),rg(),jE(`p-primary-action`,i.primaryAction),rg(2),jE(`p-value`,i.from),rg(),jE(`p-value`,i.to),rg(2),mx(i.cc!==``?13:-1),rg(2),jE(`p-value`,i.subject),rg(3),ib(`ngModel`,i.emailText),t0())},dependencies:[wK,CK,EK,TF,EF,Lf,K3,A5,goe,_oe,ea,Kze],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-email-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Textarea - Email`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-textarea-email/sample-po-textarea-email.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-textarea-email/sample-po-textarea-email.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-textarea-email`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,We,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return a})();function je(a,Me){if(a&1&&(jc(0,`div`)(1,`div`,8),nu(2,`po-info`,13),wg(),nu(3,`po-divider`),wg()),a&2){let m=xx();rg(2),jE(`p-value`,m.formEmail.get(`cc`).value)}}var Ce=(()=>{class a{formBuilder=p(MK);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,Mm.required],to:[null,Mm.required],emailText:[null,Mm.required],subject:[null,Mm.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-email-reactive-form`]],viewQuery:function(r,i){if(r&1&&iu(ea,7),r&2){let s;vo(s=_o())&&(i.poModal=s.first)}},standalone:!1,decls:18,vars:8,consts:[[`p-title`,`Send email`,3,`p-actions`],[3,`formGroup`],[`name`,`from`,`formControlName`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`],[`name`,`to`,`formControlName`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`],[`name`,`cc`,`formControlName`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`],[`name`,`subject`,`formControlName`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`],[`name`,`emailText`,`formControlName`,`emailText`,`p-label`,`E-mail`,`p-rows`,`8`,`p-required`,``,1,`po-sm-12`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-required`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`form`,1)(2,`po-email`,2),JN(),wg(),jc(3,`po-email`,3),JN(),wg(),jc(4,`po-email`,4),JN(),wg(),jc(5,`po-input`,5),JN(),wg(),jc(6,`po-textarea`,6),JN(),wg()()(),jc(7,`po-modal`,7)(8,`div`,8),nu(9,`po-info`,9)(10,`po-info`,10),wg(),nu(11,`po-divider`),px(12,je,4,1,`div`),jc(13,`div`,8),nu(14,`po-info`,11),wg(),nu(15,`po-divider`),jc(16,`div`,8)(17,`po-textarea`,12),JN(),wg()()()),r&2&&(jE(`p-actions`,i.getPageAction()),rg(),jE(`formGroup`,i.formEmail),rg(),t0(),rg(),t0(),rg(),t0(),rg(),t0(),rg(),t0(),rg(),jE(`p-primary-action`,i.primaryAction),rg(2),jE(`p-value`,i.formEmail.get(`from`).value),rg(),jE(`p-value`,i.formEmail.get(`to`).value),rg(2),mx(i.formEmail.get(`cc`).value?12:-1),rg(2),jE(`p-value`,i.formEmail.get(`subject`).value),rg(3),jE(`ngModel`,i.formEmail.get(`emailText`).value),t0())},dependencies:[wK,CK,EK,TF,SF,kF,Lf,K3,A5,goe,_oe,ea,Kze],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-email-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Textarea - Email Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <po-divider />

  @if (formEmail.get('cc').value) {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-textarea-email-reactive-form`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ne,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ce],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-textarea-doc`]],standalone:!1,decls:902,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoTextareaComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),wg(),jc(24,`p`),iO(25,`Importante:`),wg(),jc(26,`ul`)(27,`li`),iO(28,`A propriedade `),jc(29,`code`),iO(30,`name`),wg(),iO(31,` é obrigatória para que o formulário e o `),jc(32,`code`),iO(33,`model`),wg(),iO(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),jc(35,`em`),iO(36,`Angular`),wg(),iO(37,`, onde será necessário informar o atributo `),jc(38,`code`),iO(39,`name`),wg(),iO(40,` ou o atributo `),jc(41,`code`),iO(42,`[ngModelOptions]="{standalone: true}"`),wg(),iO(43,`, por exemplo:`),wg()(),jc(44,`pre`)(45,`code`),iO(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),wg()(),jc(47,`h4`),iO(48,`Acessibilidade tratada no componente`),wg(),jc(49,`p`),iO(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),wg(),jc(51,`ul`)(52,`li`),iO(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),jc(54,`a`,6),iO(55,`WCAG 4.1.2: Name, Role, Value`),wg()(),jc(56,`li`),iO(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),jc(58,`a`,7),iO(59,`WCAG 2.4.12: Focus Appearance)`),wg()(),jc(60,`li`),iO(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),jc(62,`a`,8),iO(63,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),wg()()(),jc(64,`h4`),iO(65,`Tokens customizáveis`),wg(),jc(66,`p`),iO(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(68,`blockquote`)(69,`p`),iO(70,`Para maiores informações, acesse o guia `),jc(71,`a`,9),iO(72,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(73,`.`),wg()(),jc(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),iO(78,`Propriedade`),wg(),jc(79,`th`),iO(80,`Descrição`),wg(),jc(81,`th`),iO(82,`Valor Padrão`),wg()()(),jc(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),iO(87,`Default Values`),wg()(),nu(88,`td`)(89,`td`),wg(),jc(90,`tr`)(91,`td`)(92,`code`),iO(93,`--font-family`),wg()(),jc(94,`td`),iO(95,`Família tipográfica usada`),wg(),jc(96,`td`)(97,`code`),iO(98,`var(--font-family-theme)`),wg()()(),jc(99,`tr`)(100,`td`)(101,`code`),iO(102,`--font-size`),wg()(),jc(103,`td`),iO(104,`Tamanho da fonte`),wg(),jc(105,`td`)(106,`code`),iO(107,`var(--font-size-default)`),wg()()(),jc(108,`tr`)(109,`td`)(110,`code`),iO(111,`--text-color-placeholder`),wg()(),jc(112,`td`),iO(113,`Cor do texto placeholder`),wg(),jc(114,`td`)(115,`code`),iO(116,`var(--color-neutral-light-30)`),wg()()(),jc(117,`tr`)(118,`td`)(119,`code`),iO(120,`--color`),wg()(),jc(121,`td`),iO(122,`Cor pincipal do campo`),wg(),jc(123,`td`)(124,`code`),iO(125,`var(--color-neutral-dark-70)`),wg()()(),jc(126,`tr`)(127,`td`)(128,`code`),iO(129,`--background`),wg()(),jc(130,`td`),iO(131,`Cor de background`),wg(),jc(132,`td`)(133,`code`),iO(134,`var(--color-neutral-light-05)`),wg()()(),jc(135,`tr`)(136,`td`)(137,`code`),iO(138,`--field-container-title-justify`),wg()(),jc(139,`td`),iO(140,`Alinhamento horizontal do título (`),jc(141,`code`),iO(142,`justify-content`),wg(),iO(143,`)`),wg(),jc(144,`td`)(145,`code`),iO(146,`space-between`),wg()()(),jc(147,`tr`)(148,`td`)(149,`code`),iO(150,`--field-container-title-flex`),wg()(),jc(151,`td`),iO(152,`Flex do título (`),jc(153,`code`),iO(154,`flex`),wg(),iO(155,`)`),wg(),jc(156,`td`)(157,`code`),iO(158,`1 auto`),wg()()()()()(),jc(159,`div`,10)(160,`h4`,11),iO(161,`Seletor`),wg(),jc(162,`pre`,12),iO(163,`<po-textarea
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean"
    p-size="string" >
</po-textarea>
`),wg()(),jc(164,`h4`,13),iO(165,`Propriedades`),wg(),jc(166,`table`,14)(167,`tr`,15)(168,`th`,16),iO(169,`Nome`),wg(),jc(170,`th`,16),iO(171,`Tipo`),wg(),jc(172,`th`,16),iO(173,`Padrão`),wg(),jc(174,`th`,16),iO(175,`Descrição`),wg()(),jc(176,`tr`,17)(177,`td`,18)(178,`div`,19)(179,`span`,20),iO(180,` (p-additional-help)`),nu(181,`br`),wg()(),jc(182,`div`,21),iO(183,`Deprecated`),wg()(),jc(184,`td`,22)(185,`code`,23),iO(186,`EventEmitter`),wg()(),jc(187,`td`,24),iO(188,`-`),wg(),jc(189,`td`,25)(190,`em`)(191,`strong`),iO(192,`(opcional)`),wg()(),jc(193,`p`),iO(194,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(195,`blockquote`)(196,`p`),iO(197,`Essa propriedade está `),jc(198,`strong`),iO(199,`depreciada`),wg(),iO(200,` e será removida na versão `),jc(201,`code`),iO(202,`23.x.x`),wg(),iO(203,`. Recomendamos utilizar a propriedade `),jc(204,`code`),iO(205,`p-helper`),wg(),iO(206,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(207,`tr`,17)(208,`td`,18)(209,`div`,26)(210,`span`,27),iO(211,` p-additional-help-tooltip`),nu(212,`br`),wg()(),jc(213,`div`,21),iO(214,`Deprecated`),wg()(),jc(215,`td`,22)(216,`code`,28),iO(217,`string`),wg()(),jc(218,`td`,24),iO(219,`-`),wg(),jc(220,`td`,25)(221,`em`)(222,`strong`),iO(223,`(opcional)`),wg()(),jc(224,`p`),iO(225,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(226,`code`),iO(227,`po-helper`),wg(),iO(228,`.
`),jc(229,`strong`),iO(230,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(231,`blockquote`)(232,`p`),iO(233,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(234,`blockquote`)(235,`p`),iO(236,`Essa propriedade está `),jc(237,`strong`),iO(238,`depreciada`),wg(),iO(239,` e será removida na versão `),jc(240,`code`),iO(241,`23.x.x`),wg(),iO(242,`. Recomendamos utilizar a propriedade `),jc(243,`code`),iO(244,`p-helper`),wg(),iO(245,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(246,`tr`,17)(247,`td`,18)(248,`div`,26)(249,`span`,27),iO(250,` p-append-in-body`),nu(251,`br`),wg()()(),jc(252,`td`,22)(253,`code`,29),iO(254,`boolean`),wg()(),jc(255,`td`,24)(256,`p`)(257,`code`),iO(258,`false`),wg()()(),jc(259,`td`,25)(260,`em`)(261,`strong`),iO(262,`(opcional)`),wg()(),jc(263,`p`),iO(264,`Define que o popover (`),jc(265,`code`),iO(266,`p-helper`),wg(),iO(267,` e/ou `),jc(268,`code`),iO(269,`p-error-limit`),wg(),iO(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(271,`blockquote`)(272,`p`),iO(273,`Quando utilizado com `),jc(274,`code`),iO(275,`p-helper`),wg(),iO(276,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(277,`tr`,17)(278,`td`,18)(279,`div`,26)(280,`span`,27),iO(281,` p-auto-focus`),nu(282,`br`),wg()()(),jc(283,`td`,22)(284,`code`,29),iO(285,`boolean`),wg()(),jc(286,`td`,24)(287,`p`)(288,`code`),iO(289,`false`),wg()()(),jc(290,`td`,25)(291,`em`)(292,`strong`),iO(293,`(opcional)`),wg()(),jc(294,`p`),iO(295,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(296,`blockquote`)(297,`p`),iO(298,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(299,`tr`,17)(300,`td`,18)(301,`div`,19)(302,`span`,20),iO(303,` (p-blur)`),nu(304,`br`),wg()()(),jc(305,`td`,22)(306,`code`,23),iO(307,`EventEmitter`),wg()(),jc(308,`td`,24),iO(309,`-`),wg(),jc(310,`td`,25)(311,`em`)(312,`strong`),iO(313,`(opcional)`),wg()(),jc(314,`p`),iO(315,`Evento disparado ao sair do campo.`),wg()()(),jc(316,`tr`,17)(317,`td`,18)(318,`div`,19)(319,`span`,20),iO(320,` (p-change)`),nu(321,`br`),wg()()(),jc(322,`td`,22)(323,`code`,23),iO(324,`EventEmitter`),wg()(),jc(325,`td`,24),iO(326,`-`),wg(),jc(327,`td`,25)(328,`em`)(329,`strong`),iO(330,`(opcional)`),wg()(),jc(331,`p`),iO(332,`Evento disparado ao alterar valor e deixar o campo.`),wg()()(),jc(333,`tr`,17)(334,`td`,18)(335,`div`,19)(336,`span`,20),iO(337,` (p-change-model)`),nu(338,`br`),wg()()(),jc(339,`td`,22)(340,`code`,23),iO(341,`EventEmitter`),wg()(),jc(342,`td`,24),iO(343,`-`),wg(),jc(344,`td`,25)(345,`em`)(346,`strong`),iO(347,`(opcional)`),wg()(),jc(348,`p`),iO(349,`Evento disparado ao alterar valor do model.`),wg()()(),jc(350,`tr`,17)(351,`td`,18)(352,`div`,26)(353,`span`,27),iO(354,` p-compact-label`),nu(355,`br`),wg()()(),jc(356,`td`,22)(357,`code`,29),iO(358,`boolean`),wg()(),jc(359,`td`,24)(360,`p`)(361,`code`),iO(362,`false`),wg()()(),jc(363,`td`,25)(364,`em`)(365,`strong`),iO(366,`(opcional)`),wg()(),jc(367,`p`),iO(368,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(369,`p`),iO(370,`Quando habilitado (`),jc(371,`code`),iO(372,`true`),wg(),iO(373,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(374,`ul`)(375,`li`)(376,`code`),iO(377,`po-label`),wg()(),jc(378,`li`)(379,`code`),iO(380,`p-requirement (showRequired)`),wg()(),jc(381,`li`)(382,`code`),iO(383,`po-helper`),wg()()(),jc(384,`p`),iO(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(386,`p`),iO(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(388,`ul`)(389,`li`)(390,`code`),iO(391,`--field-container-title-justify`),wg()(),jc(392,`li`)(393,`code`),iO(394,`--field-container-title-flex`),wg()()(),jc(395,`p`),iO(396,`Exemplo:`),wg(),jc(397,`pre`)(398,`code`),iO(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(400,`p`),iO(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(402,`tr`,17)(403,`td`,18)(404,`div`,26)(405,`span`,27),iO(406,` p-disabled`),nu(407,`br`),wg()()(),jc(408,`td`,22)(409,`code`,29),iO(410,`boolean`),wg()(),jc(411,`td`,24)(412,`p`)(413,`code`),iO(414,`false`),wg()()(),jc(415,`td`,25)(416,`em`)(417,`strong`),iO(418,`(opcional)`),wg()(),jc(419,`p`),iO(420,`Indica que o campo será desabilitado.`),wg()()(),jc(421,`tr`,17)(422,`td`,18)(423,`div`,19)(424,`span`,20),iO(425,` (p-enter)`),nu(426,`br`),wg()()(),jc(427,`td`,22)(428,`code`,23),iO(429,`EventEmitter`),wg()(),jc(430,`td`,24),iO(431,`-`),wg(),jc(432,`td`,25)(433,`em`)(434,`strong`),iO(435,`(opcional)`),wg()(),jc(436,`p`),iO(437,`Evento disparado ao entrar do campo.`),wg()()(),jc(438,`tr`,17)(439,`td`,18)(440,`div`,26)(441,`span`,27),iO(442,` p-error-limit`),nu(443,`br`),wg()()(),jc(444,`td`,22)(445,`code`,29),iO(446,`boolean`),wg()(),jc(447,`td`,24)(448,`p`)(449,`code`),iO(450,`false`),wg()()(),jc(451,`td`,25)(452,`em`)(453,`strong`),iO(454,`(opcional)`),wg()(),jc(455,`p`),iO(456,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(457,`blockquote`)(458,`p`),iO(459,`Caso essa propriedade seja definida como `),jc(460,`code`),iO(461,`true`),wg(),iO(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(463,`tr`,17)(464,`td`,18)(465,`div`,26)(466,`span`,27),iO(467,` p-field-error-message`),nu(468,`br`),wg()()(),jc(469,`td`,22)(470,`code`,28),iO(471,`string`),wg()(),jc(472,`td`,24),iO(473,`-`),wg(),jc(474,`td`,25)(475,`em`)(476,`strong`),iO(477,`(opcional)`),wg()(),jc(478,`p`),iO(479,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(480,`blockquote`)(481,`p`),iO(482,`Necessário que a propriedade `),jc(483,`code`),iO(484,`p-required`),wg(),iO(485,` esteja habilitada.`),wg()()()(),jc(486,`tr`,17)(487,`td`,18)(488,`div`,26)(489,`span`,27),iO(490,` p-help`),nu(491,`br`),wg()()(),jc(492,`td`,22)(493,`code`,28),iO(494,`string`),wg()(),jc(495,`td`,24),iO(496,`-`),wg(),jc(497,`td`,25)(498,`em`)(499,`strong`),iO(500,`(opcional)`),wg()(),jc(501,`p`),iO(502,`Texto de apoio do campo.`),wg()()(),jc(503,`tr`,17)(504,`td`,18)(505,`div`,19)(506,`span`,20),iO(507,` (p-keydown)`),nu(508,`br`),wg()()(),jc(509,`td`,22)(510,`code`,23),iO(511,`EventEmitter`),wg()(),jc(512,`td`,24),iO(513,`-`),wg(),jc(514,`td`,25)(515,`em`)(516,`strong`),iO(517,`(opcional)`),wg()(),jc(518,`p`),iO(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(520,`code`),iO(521,`KeyboardEvent`),wg(),iO(522,` com informações sobre a tecla.`),wg()()(),jc(523,`tr`,17)(524,`td`,18)(525,`div`,26)(526,`span`,27),iO(527,` p-label`),nu(528,`br`),wg()()(),jc(529,`td`,22)(530,`code`,28),iO(531,`string`),wg()(),jc(532,`td`,24),iO(533,`-`),wg(),jc(534,`td`,25)(535,`em`)(536,`strong`),iO(537,`(opcional)`),wg()(),jc(538,`p`),iO(539,`Label do campo.`),wg()()(),jc(540,`tr`,17)(541,`td`,18)(542,`div`,26)(543,`span`,27),iO(544,` p-label-text-wrap`),nu(545,`br`),wg()()(),jc(546,`td`,22)(547,`code`,29),iO(548,`boolean`),wg()(),jc(549,`td`,24)(550,`p`)(551,`code`),iO(552,`false`),wg()()(),jc(553,`td`,25)(554,`em`)(555,`strong`),iO(556,`(opcional)`),wg()(),jc(557,`p`),iO(558,`Habilita a quebra automática do texto da propriedade `),jc(559,`code`),iO(560,`p-label`),wg(),iO(561,`. Quando `),jc(562,`code`),iO(563,`p-label-text-wrap`),wg(),iO(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(565,`tr`,17)(566,`td`,18)(567,`div`,26)(568,`span`,27),iO(569,` p-loading`),nu(570,`br`),wg()()(),jc(571,`td`,22)(572,`code`,29),iO(573,`boolean`),wg()(),jc(574,`td`,24)(575,`p`)(576,`code`),iO(577,`false`),wg()()(),jc(578,`td`,25)(579,`em`)(580,`strong`),iO(581,`(opcional)`),wg()(),jc(582,`p`),iO(583,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(584,`tr`,17)(585,`td`,18)(586,`div`,26)(587,`span`,27),iO(588,` p-maxlength`),nu(589,`br`),wg()()(),jc(590,`td`,22)(591,`code`,30),iO(592,`number`),wg()(),jc(593,`td`,24),iO(594,`-`),wg(),jc(595,`td`,25)(596,`em`)(597,`strong`),iO(598,`(opcional)`),wg()(),jc(599,`p`),iO(600,`Indica a quantidade máxima de caracteres que o campo aceita.`),wg()()(),jc(601,`tr`,17)(602,`td`,18)(603,`div`,26)(604,`span`,27),iO(605,` p-minlength`),nu(606,`br`),wg()()(),jc(607,`td`,22)(608,`code`,30),iO(609,`number`),wg()(),jc(610,`td`,24),iO(611,`-`),wg(),jc(612,`td`,25)(613,`em`)(614,`strong`),iO(615,`(opcional)`),wg()(),jc(616,`p`),iO(617,`Indica a quantidade mínima de caracteres que o campo aceita.`),wg()()(),jc(618,`tr`,17)(619,`td`,18)(620,`div`,26)(621,`span`,27),iO(622,` name`),nu(623,`br`),wg()()(),jc(624,`td`,22)(625,`code`,28),iO(626,`string`),wg()(),jc(627,`td`,24),iO(628,`-`),wg(),jc(629,`td`,25)(630,`p`),iO(631,`Nome e Id do componente.`),wg()()(),jc(632,`tr`,17)(633,`td`,18)(634,`div`,26)(635,`span`,27),iO(636,` p-optional`),nu(637,`br`),wg()()(),jc(638,`td`,22)(639,`code`,29),iO(640,`boolean`),wg()(),jc(641,`td`,24)(642,`p`)(643,`code`),iO(644,`false`),wg()()(),jc(645,`td`,25)(646,`em`)(647,`strong`),iO(648,`(opcional)`),wg()(),jc(649,`p`),iO(650,`Define se a indicação de campo opcional será exibida.`),wg(),jc(651,`blockquote`)(652,`p`),iO(653,`Não será exibida a indicação se:`),wg()(),jc(654,`ul`)(655,`li`),iO(656,`O campo conter `),jc(657,`code`),iO(658,`p-required`),wg(),iO(659,`;`),wg(),jc(660,`li`),iO(661,`Não possuir `),jc(662,`code`),iO(663,`p-help`),wg(),iO(664,` e/ou `),jc(665,`code`),iO(666,`p-label`),wg(),iO(667,`.`),wg()()()(),jc(668,`tr`,17)(669,`td`,18)(670,`div`,26)(671,`span`,27),iO(672,` p-placeholder`),nu(673,`br`),wg()()(),jc(674,`td`,22)(675,`code`,28),iO(676,`string`),wg()(),jc(677,`td`,24),iO(678,`-`),wg(),jc(679,`td`,25)(680,`p`),iO(681,`Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(682,`tr`,17)(683,`td`,18)(684,`div`,26)(685,`span`,27),iO(686,` p-helper`),nu(687,`br`),wg()()(),jc(688,`td`,22)(689,`code`,31),iO(690,`PoHelperOptions `),wg(),jc(691,`code`,28),iO(692,` string`),wg()(),jc(693,`td`,24),iO(694,`-`),wg(),jc(695,`td`,25)(696,`em`)(697,`strong`),iO(698,`(opcional)`),wg()(),jc(699,`p`),iO(700,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(701,`code`),iO(702,`p-label`),wg(),iO(703,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(704,`code`),iO(705,`p-label`),wg(),iO(706,`.`),wg(),jc(707,`blockquote`)(708,`p`),iO(709,`Para mais informações acesse: `),jc(710,`a`,32),iO(711,`https://po-ui.io/documentation/po-helper`),wg(),iO(712,`.`),wg()(),jc(713,`blockquote`)(714,`p`),iO(715,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(716,`code`),iO(717,`p-additional-help-tooltip`),wg(),iO(718,` e `),jc(719,`code`),iO(720,`p-additional-help`),wg(),iO(721,`) será ignorado.`),wg()()()(),jc(722,`tr`,17)(723,`td`,18)(724,`div`,26)(725,`span`,27),iO(726,` p-readonly`),nu(727,`br`),wg()()(),jc(728,`td`,22)(729,`code`,29),iO(730,`boolean`),wg()(),jc(731,`td`,24)(732,`p`)(733,`code`),iO(734,`false`),wg()()(),jc(735,`td`,25)(736,`em`)(737,`strong`),iO(738,`(opcional)`),wg()(),jc(739,`p`),iO(740,`Indica que o campo será somente leitura.`),wg()()(),jc(741,`tr`,17)(742,`td`,18)(743,`div`,26)(744,`span`,27),iO(745,` p-required`),nu(746,`br`),wg()()(),jc(747,`td`,22)(748,`code`,29),iO(749,`boolean`),wg()(),jc(750,`td`,24)(751,`p`)(752,`code`),iO(753,`false`),wg()()(),jc(754,`td`,25)(755,`em`)(756,`strong`),iO(757,`(opcional)`),wg()(),jc(758,`p`),iO(759,`Define que o campo será obrigatório.`),wg(),jc(760,`blockquote`)(761,`p`),iO(762,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(763,`code`),iO(764,`(p-disabled)`),wg(),iO(765,`.`),wg()()()(),jc(766,`tr`,17)(767,`td`,18)(768,`div`,26)(769,`span`,27),iO(770,` p-rows`),nu(771,`br`),wg()()(),jc(772,`td`,22)(773,`code`,30),iO(774,`number`),wg()(),jc(775,`td`,24)(776,`p`)(777,`code`),iO(778,`3`),wg()()(),jc(779,`td`,25)(780,`em`)(781,`strong`),iO(782,`(opcional)`),wg()(),jc(783,`p`),iO(784,`Indica a quantidade de linhas que serão exibidas.`),wg()()(),jc(785,`tr`,17)(786,`td`,18)(787,`div`,26)(788,`span`,27),iO(789,` p-show-required`),nu(790,`br`),wg()()(),jc(791,`td`,22)(792,`code`,29),iO(793,`boolean`),wg()(),jc(794,`td`,24),iO(795,`-`),wg(),jc(796,`td`,25)(797,`p`),iO(798,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(799,`blockquote`)(800,`p`),iO(801,`Não será exibida a indicação se:`),wg()(),jc(802,`ul`)(803,`li`),iO(804,`Não possuir `),jc(805,`code`),iO(806,`p-help`),wg(),iO(807,` e/ou `),jc(808,`code`),iO(809,`p-label`),wg(),iO(810,`.`),wg()()()(),jc(811,`tr`,17)(812,`td`,18)(813,`div`,26)(814,`span`,27),iO(815,` p-size`),nu(816,`br`),wg()()(),jc(817,`td`,22)(818,`code`,28),iO(819,`string`),wg()(),jc(820,`td`,24)(821,`p`)(822,`code`),iO(823,`medium`),wg()()(),jc(824,`td`,25)(825,`em`)(826,`strong`),iO(827,`(opcional)`),wg()(),jc(828,`p`),iO(829,`Define o tamanho do componente:`),wg(),jc(830,`ul`)(831,`li`)(832,`code`),iO(833,`small`),wg(),iO(834,` (disponível apenas para acessibilidade AA)`),wg(),jc(835,`li`)(836,`code`),iO(837,`medium`),wg()()(),jc(838,`blockquote`)(839,`p`),iO(840,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(841,`code`),iO(842,`medium`),wg(),iO(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(844,`a`,33),iO(845,`po-theme`),wg(),iO(846,`.`),wg()()()()(),jc(847,`h3`,13),iO(848,`Métodos`),wg(),jc(849,`table`,34)(850,`tr`,17)(851,`th`,35)(852,`div`,26)(853,`h4`)(854,`span`,27),iO(855,` focus `),wg()()()()(),jc(856,`tr`,25)(857,`td`,25)(858,`p`),iO(859,`Função que atribui foco ao componente.`),wg(),jc(860,`p`),iO(861,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(862,`pre`)(863,`code`),iO(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),wg()()()()(),nu(865,`br`),jc(866,`table`,34)(867,`tr`,17)(868,`th`,35)(869,`div`,26)(870,`h4`)(871,`span`,27),iO(872,` showAdditionalHelp `),wg()()()()(),jc(873,`tr`,25)(874,`td`,25)(875,`p`),iO(876,`Método que exibe `),jc(877,`code`),iO(878,`p-helper`),wg(),iO(879,` ou executa a ação definida em `),jc(880,`code`),iO(881,`p-helper{eventOnClick}`),wg(),iO(882,` ou em `),jc(883,`code`),iO(884,`p-additionalHelp`),wg(),iO(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(886,`code`),iO(887,`p-keydown`),wg(),iO(888,`.`),wg(),jc(889,`blockquote`)(890,`p`),iO(891,`Exibe ou oculta o conteúdo do componente `),jc(892,`code`),iO(893,`po-helper`),wg(),iO(894,` quando o componente estiver com foco.`),wg()(),jc(895,`pre`)(896,`code`),iO(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),wg()(),jc(898,`pre`)(899,`code`),iO(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(901,`br`),wg())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Re=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Textarea`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-textarea-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-textarea-basic-view`)(6,`sample-po-textarea-labs-view`)(7,`sample-po-textarea-email-view`)(8,`sample-po-textarea-email-reactive-form-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ge,he,fe,ve,Te],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(Re),C1]})}return a})();var yt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,we]})}return a})();export{yt as DocPoTextareaModule};