import{$r as Wx,Br as RE,Di as he$1,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,Oi as hm,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Ur as Rx,Wi as mg,Wn as Ax,Wr as S9,Xn as C9,Yn as Bx,ai as aN,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,ht as V3,i as _a,in as ooe,ki as ho,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,ta as qP,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo,xr as KP}from"./main-LIMZAZLW.js";var Ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`textarea`,`p-label`,`PO Textarea`]],template:function(r,i){r&1&&Kc(0,`po-textarea`,0)},dependencies:[ooe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Textarea Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-textarea-basic/sample-po-textarea-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-textarea-basic/sample-po-textarea-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-textarea-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ee],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage=``,this.rows=void 0,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-labs`]],standalone:!1,decls:20,vars:33,consts:[[`f`,`ngForm`],[`name`,`textarea`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-rows`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`rows`,`p-clean`,``,`p-label`,`Rows`,`p-min`,`3`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`po-textarea`,1),RE(`ngModelChange`,function(l){return Jv(s),DN(i.textarea,l)||(i.textarea=l),e_(l)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(s),DN(i.label,l)||(i.label=l),e_(l)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(l){return Jv(s),DN(i.help,l)||(i.help=l),e_(l)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(l){return Jv(s),DN(i.helperText,l)||(i.helperText=l),e_(l)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(l){return Jv(s),DN(i.placeholder,l)||(i.placeholder=l),e_(l)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(l){return Jv(s),DN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),e_(l)}),ug(),p0(),Ac(13,`po-number`,10),RE(`ngModelChange`,function(l){return Jv(s),DN(i.rows,l)||(i.rows=l),e_(l)}),ug(),p0(),Ac(14,`po-number`,11),RE(`ngModelChange`,function(l){return Jv(s),DN(i.minlength,l)||(i.minlength=l),e_(l)}),ug(),p0(),Ac(15,`po-number`,12),RE(`ngModelChange`,function(l){return Jv(s),DN(i.maxlength,l)||(i.maxlength=l),e_(l)}),ug(),p0(),Ac(16,`po-checkbox-group`,13),RE(`ngModelChange`,function(l){return Jv(s),DN(i.properties,l)||(i.properties=l),e_(l)}),ug(),p0(),Ac(17,`po-radio-group`,14),RE(`ngModelChange`,function(l){return Jv(s),DN(i.size,l)||(i.size=l),e_(l)}),ug(),p0(),Ac(18,`div`,2)(19,`po-button`,15),pt(`p-click`,function(){return i.restore()}),ug()()()}r&2&&(TE(`ngModel`,i.textarea),cE(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-rows`,i.rows)(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),m0(),Hp(3),cE(`p-value`,i.textarea),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.fieldErrorMessage),m0(),Hp(),TE(`ngModel`,i.rows),m0(),Hp(),TE(`ngModel`,i.minlength),m0(),Hp(),TE(`ngModel`,i.maxlength),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Jne,Cte,ooe,roe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Textarea Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-textarea-labs/sample-po-textarea-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-textarea
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-textarea-labs/sample-po-textarea-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-textarea-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,be],encapsulation:2,changeDetection:1})}return a})();var Fe=[`formEmail`];function Ve(a,Me){if(a&1&&(Ac(0,`div`)(1,`div`,8),Kc(2,`po-info`,13),ug(),Kc(3,`po-divider`),ug()),a&2){let m=Wx();Hp(2),cE(`p-value`,m.cc)}}var Se=(()=>{class a{formEmail;poModal;cc=``;emailText=``;from=``;subject=``;to=``;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-email`]],viewQuery:function(r,i){if(r&1&&Xc(Fe,7)(wa,7),r&2){let s;fo(s=ho())&&(i.formEmail=s.first),fo(s=ho())&&(i.poModal=s.first)}},standalone:!1,decls:19,vars:12,consts:[[`formEmail`,`ngForm`],[`p-title`,`Send email`,3,`p-actions`],[`name`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`emailText`,`p-label`,`E-mail`,`p-required`,``,`p-rows`,`8`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`po-page-default`,1)(1,`form`,null,0)(3,`po-email`,2),RE(`ngModelChange`,function(l){return Jv(s),DN(i.from,l)||(i.from=l),e_(l)}),ug(),p0(),Ac(4,`po-email`,3),RE(`ngModelChange`,function(l){return Jv(s),DN(i.to,l)||(i.to=l),e_(l)}),ug(),p0(),Ac(5,`po-email`,4),RE(`ngModelChange`,function(l){return Jv(s),DN(i.cc,l)||(i.cc=l),e_(l)}),ug(),p0(),Ac(6,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(s),DN(i.subject,l)||(i.subject=l),e_(l)}),ug(),p0(),Ac(7,`po-textarea`,6),RE(`ngModelChange`,function(l){return Jv(s),DN(i.emailText,l)||(i.emailText=l),e_(l)}),ug(),p0(),ug()(),Ac(8,`po-modal`,7)(9,`div`,8),Kc(10,`po-info`,9)(11,`po-info`,10),ug(),Kc(12,`po-divider`),Rx(13,Ve,4,1,`div`),Ac(14,`div`,8),Kc(15,`po-info`,11),ug(),Kc(16,`po-divider`),Ac(17,`div`,8)(18,`po-textarea`,12),RE(`ngModelChange`,function(l){return Jv(s),DN(i.emailText,l)||(i.emailText=l),e_(l)}),ug(),p0(),ug()()}r&2&&(cE(`p-actions`,i.getPageAction()),Hp(3),TE(`ngModel`,i.from),m0(),Hp(),TE(`ngModel`,i.to),m0(),Hp(),TE(`ngModel`,i.cc),m0(),Hp(),TE(`ngModel`,i.subject),m0(),Hp(),TE(`ngModel`,i.emailText),m0(),Hp(),cE(`p-primary-action`,i.primaryAction),Hp(2),cE(`p-value`,i.from),Hp(),cE(`p-value`,i.to),Hp(2),Ax(i.cc!==``?13:-1),Hp(2),cE(`p-value`,i.subject),Hp(3),TE(`ngModel`,i.emailText),m0())},dependencies:[b9,D9,C9,BP,LP,ob,V3,_4,ooe,roe,wa,vze],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-email-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Textarea - Email`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-textarea-email/sample-po-textarea-email.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-textarea-email/sample-po-textarea-email.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-textarea-email`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,We,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Se],encapsulation:2,changeDetection:1})}return a})();function je(a,Me){if(a&1&&(Ac(0,`div`)(1,`div`,8),Kc(2,`po-info`,13),ug(),Kc(3,`po-divider`),ug()),a&2){let m=Wx();Hp(2),cE(`p-value`,m.formEmail.get(`cc`).value)}}var Ce=(()=>{class a{formBuilder=f(S9);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,hm.required],to:[null,hm.required],emailText:[null,hm.required],subject:[null,hm.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-email-reactive-form`]],viewQuery:function(r,i){if(r&1&&Xc(wa,7),r&2){let s;fo(s=ho())&&(i.poModal=s.first)}},standalone:!1,decls:18,vars:8,consts:[[`p-title`,`Send email`,3,`p-actions`],[3,`formGroup`],[`name`,`from`,`formControlName`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`],[`name`,`to`,`formControlName`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`],[`name`,`cc`,`formControlName`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`],[`name`,`subject`,`formControlName`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`],[`name`,`emailText`,`formControlName`,`emailText`,`p-label`,`E-mail`,`p-rows`,`8`,`p-required`,``,1,`po-sm-12`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-required`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`form`,1),Kc(2,`po-email`,2),p0(),Kc(3,`po-email`,3),p0(),Kc(4,`po-email`,4),p0(),Kc(5,`po-input`,5),p0(),Kc(6,`po-textarea`,6),p0(),ug()(),Ac(7,`po-modal`,7)(8,`div`,8),Kc(9,`po-info`,9)(10,`po-info`,10),ug(),Kc(11,`po-divider`),Rx(12,je,4,1,`div`),Ac(13,`div`,8),Kc(14,`po-info`,11),ug(),Kc(15,`po-divider`),Ac(16,`div`,8),Kc(17,`po-textarea`,12),p0(),ug()()),r&2&&(cE(`p-actions`,i.getPageAction()),Hp(),cE(`formGroup`,i.formEmail),Hp(),m0(),Hp(),m0(),Hp(),m0(),Hp(),m0(),Hp(),m0(),Hp(),cE(`p-primary-action`,i.primaryAction),Hp(2),cE(`p-value`,i.formEmail.get(`from`).value),Hp(),cE(`p-value`,i.formEmail.get(`to`).value),Hp(2),Ax(i.formEmail.get(`cc`).value?12:-1),Hp(2),cE(`p-value`,i.formEmail.get(`subject`).value),Hp(3),cE(`ngModel`,i.formEmail.get(`emailText`).value),m0())},dependencies:[b9,D9,C9,BP,KP,qP,ob,V3,_4,ooe,roe,wa,vze],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-email-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Textarea - Email Reactive Form`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-textarea-email-reactive-form`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Ce],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-textarea-doc`]],standalone:!1,decls:902,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoTextareaComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),ug(),Ac(24,`p`),vN(25,`Importante:`),ug(),Ac(26,`ul`)(27,`li`),vN(28,`A propriedade `),Ac(29,`code`),vN(30,`name`),ug(),vN(31,` é obrigatória para que o formulário e o `),Ac(32,`code`),vN(33,`model`),ug(),vN(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Ac(35,`em`),vN(36,`Angular`),ug(),vN(37,`, onde será necessário informar o atributo `),Ac(38,`code`),vN(39,`name`),ug(),vN(40,` ou o atributo `),Ac(41,`code`),vN(42,`[ngModelOptions]="{standalone: true}"`),ug(),vN(43,`, por exemplo:`),ug()(),Ac(44,`pre`)(45,`code`),vN(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),ug()(),Ac(47,`h4`),vN(48,`Acessibilidade tratada no componente`),ug(),Ac(49,`p`),vN(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),ug(),Ac(51,`ul`)(52,`li`),vN(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Ac(54,`a`,6),vN(55,`WCAG 4.1.2: Name, Role, Value`),ug()(),Ac(56,`li`),vN(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Ac(58,`a`,7),vN(59,`WCAG 2.4.12: Focus Appearance)`),ug()(),Ac(60,`li`),vN(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Ac(62,`a`,8),vN(63,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),ug()()(),Ac(64,`h4`),vN(65,`Tokens customizáveis`),ug(),Ac(66,`p`),vN(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(68,`blockquote`)(69,`p`),vN(70,`Para maiores informações, acesse o guia `),Ac(71,`a`,9),vN(72,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(73,`.`),ug()(),Ac(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),vN(78,`Propriedade`),ug(),Ac(79,`th`),vN(80,`Descrição`),ug(),Ac(81,`th`),vN(82,`Valor Padrão`),ug()()(),Ac(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),vN(87,`Default Values`),ug()(),Kc(88,`td`)(89,`td`),ug(),Ac(90,`tr`)(91,`td`)(92,`code`),vN(93,`--font-family`),ug()(),Ac(94,`td`),vN(95,`Família tipográfica usada`),ug(),Ac(96,`td`)(97,`code`),vN(98,`var(--font-family-theme)`),ug()()(),Ac(99,`tr`)(100,`td`)(101,`code`),vN(102,`--font-size`),ug()(),Ac(103,`td`),vN(104,`Tamanho da fonte`),ug(),Ac(105,`td`)(106,`code`),vN(107,`var(--font-size-default)`),ug()()(),Ac(108,`tr`)(109,`td`)(110,`code`),vN(111,`--text-color-placeholder`),ug()(),Ac(112,`td`),vN(113,`Cor do texto placeholder`),ug(),Ac(114,`td`)(115,`code`),vN(116,`var(--color-neutral-light-30)`),ug()()(),Ac(117,`tr`)(118,`td`)(119,`code`),vN(120,`--color`),ug()(),Ac(121,`td`),vN(122,`Cor pincipal do campo`),ug(),Ac(123,`td`)(124,`code`),vN(125,`var(--color-neutral-dark-70)`),ug()()(),Ac(126,`tr`)(127,`td`)(128,`code`),vN(129,`--background`),ug()(),Ac(130,`td`),vN(131,`Cor de background`),ug(),Ac(132,`td`)(133,`code`),vN(134,`var(--color-neutral-light-05)`),ug()()(),Ac(135,`tr`)(136,`td`)(137,`code`),vN(138,`--field-container-title-justify`),ug()(),Ac(139,`td`),vN(140,`Alinhamento horizontal do título (`),Ac(141,`code`),vN(142,`justify-content`),ug(),vN(143,`)`),ug(),Ac(144,`td`)(145,`code`),vN(146,`space-between`),ug()()(),Ac(147,`tr`)(148,`td`)(149,`code`),vN(150,`--field-container-title-flex`),ug()(),Ac(151,`td`),vN(152,`Flex do título (`),Ac(153,`code`),vN(154,`flex`),ug(),vN(155,`)`),ug(),Ac(156,`td`)(157,`code`),vN(158,`1 auto`),ug()()()()()(),Ac(159,`div`,10)(160,`h4`,11),vN(161,`Seletor`),ug(),Ac(162,`pre`,12),vN(163,`<po-textarea
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
`),ug()(),Ac(164,`h4`,13),vN(165,`Propriedades`),ug(),Ac(166,`table`,14)(167,`tr`,15)(168,`th`,16),vN(169,`Nome`),ug(),Ac(170,`th`,16),vN(171,`Tipo`),ug(),Ac(172,`th`,16),vN(173,`Padrão`),ug(),Ac(174,`th`,16),vN(175,`Descrição`),ug()(),Ac(176,`tr`,17)(177,`td`,18)(178,`div`,19)(179,`span`,20),vN(180,` (p-additional-help)`),Kc(181,`br`),ug()(),Ac(182,`div`,21),vN(183,`Deprecated`),ug()(),Ac(184,`td`,22)(185,`code`,23),vN(186,`EventEmitter`),ug()(),Ac(187,`td`,24),vN(188,`-`),ug(),Ac(189,`td`,25)(190,`em`)(191,`strong`),vN(192,`(opcional)`),ug()(),Ac(193,`p`),vN(194,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(195,`blockquote`)(196,`p`),vN(197,`Essa propriedade está `),Ac(198,`strong`),vN(199,`depreciada`),ug(),vN(200,` e será removida na versão `),Ac(201,`code`),vN(202,`23.x.x`),ug(),vN(203,`. Recomendamos utilizar a propriedade `),Ac(204,`code`),vN(205,`p-helper`),ug(),vN(206,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(207,`tr`,17)(208,`td`,18)(209,`div`,26)(210,`span`,27),vN(211,` p-additional-help-tooltip`),Kc(212,`br`),ug()(),Ac(213,`div`,21),vN(214,`Deprecated`),ug()(),Ac(215,`td`,22)(216,`code`,28),vN(217,`string`),ug()(),Ac(218,`td`,24),vN(219,`-`),ug(),Ac(220,`td`,25)(221,`em`)(222,`strong`),vN(223,`(opcional)`),ug()(),Ac(224,`p`),vN(225,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(226,`code`),vN(227,`po-helper`),ug(),vN(228,`.
`),Ac(229,`strong`),vN(230,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(231,`blockquote`)(232,`p`),vN(233,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(234,`blockquote`)(235,`p`),vN(236,`Essa propriedade está `),Ac(237,`strong`),vN(238,`depreciada`),ug(),vN(239,` e será removida na versão `),Ac(240,`code`),vN(241,`23.x.x`),ug(),vN(242,`. Recomendamos utilizar a propriedade `),Ac(243,`code`),vN(244,`p-helper`),ug(),vN(245,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(246,`tr`,17)(247,`td`,18)(248,`div`,26)(249,`span`,27),vN(250,` p-append-in-body`),Kc(251,`br`),ug()()(),Ac(252,`td`,22)(253,`code`,29),vN(254,`boolean`),ug()(),Ac(255,`td`,24)(256,`p`)(257,`code`),vN(258,`false`),ug()()(),Ac(259,`td`,25)(260,`em`)(261,`strong`),vN(262,`(opcional)`),ug()(),Ac(263,`p`),vN(264,`Define que o popover (`),Ac(265,`code`),vN(266,`p-helper`),ug(),vN(267,` e/ou `),Ac(268,`code`),vN(269,`p-error-limit`),ug(),vN(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(271,`blockquote`)(272,`p`),vN(273,`Quando utilizado com `),Ac(274,`code`),vN(275,`p-helper`),ug(),vN(276,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(277,`tr`,17)(278,`td`,18)(279,`div`,26)(280,`span`,27),vN(281,` p-auto-focus`),Kc(282,`br`),ug()()(),Ac(283,`td`,22)(284,`code`,29),vN(285,`boolean`),ug()(),Ac(286,`td`,24)(287,`p`)(288,`code`),vN(289,`false`),ug()()(),Ac(290,`td`,25)(291,`em`)(292,`strong`),vN(293,`(opcional)`),ug()(),Ac(294,`p`),vN(295,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(296,`blockquote`)(297,`p`),vN(298,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(299,`tr`,17)(300,`td`,18)(301,`div`,19)(302,`span`,20),vN(303,` (p-blur)`),Kc(304,`br`),ug()()(),Ac(305,`td`,22)(306,`code`,23),vN(307,`EventEmitter`),ug()(),Ac(308,`td`,24),vN(309,`-`),ug(),Ac(310,`td`,25)(311,`em`)(312,`strong`),vN(313,`(opcional)`),ug()(),Ac(314,`p`),vN(315,`Evento disparado ao sair do campo.`),ug()()(),Ac(316,`tr`,17)(317,`td`,18)(318,`div`,19)(319,`span`,20),vN(320,` (p-change)`),Kc(321,`br`),ug()()(),Ac(322,`td`,22)(323,`code`,23),vN(324,`EventEmitter`),ug()(),Ac(325,`td`,24),vN(326,`-`),ug(),Ac(327,`td`,25)(328,`em`)(329,`strong`),vN(330,`(opcional)`),ug()(),Ac(331,`p`),vN(332,`Evento disparado ao alterar valor e deixar o campo.`),ug()()(),Ac(333,`tr`,17)(334,`td`,18)(335,`div`,19)(336,`span`,20),vN(337,` (p-change-model)`),Kc(338,`br`),ug()()(),Ac(339,`td`,22)(340,`code`,23),vN(341,`EventEmitter`),ug()(),Ac(342,`td`,24),vN(343,`-`),ug(),Ac(344,`td`,25)(345,`em`)(346,`strong`),vN(347,`(opcional)`),ug()(),Ac(348,`p`),vN(349,`Evento disparado ao alterar valor do model.`),ug()()(),Ac(350,`tr`,17)(351,`td`,18)(352,`div`,26)(353,`span`,27),vN(354,` p-compact-label`),Kc(355,`br`),ug()()(),Ac(356,`td`,22)(357,`code`,29),vN(358,`boolean`),ug()(),Ac(359,`td`,24)(360,`p`)(361,`code`),vN(362,`false`),ug()()(),Ac(363,`td`,25)(364,`em`)(365,`strong`),vN(366,`(opcional)`),ug()(),Ac(367,`p`),vN(368,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(369,`p`),vN(370,`Quando habilitado (`),Ac(371,`code`),vN(372,`true`),ug(),vN(373,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(374,`ul`)(375,`li`)(376,`code`),vN(377,`po-label`),ug()(),Ac(378,`li`)(379,`code`),vN(380,`p-requirement (showRequired)`),ug()(),Ac(381,`li`)(382,`code`),vN(383,`po-helper`),ug()()(),Ac(384,`p`),vN(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(386,`p`),vN(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(388,`ul`)(389,`li`)(390,`code`),vN(391,`--field-container-title-justify`),ug()(),Ac(392,`li`)(393,`code`),vN(394,`--field-container-title-flex`),ug()()(),Ac(395,`p`),vN(396,`Exemplo:`),ug(),Ac(397,`pre`)(398,`code`),vN(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(400,`p`),vN(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(402,`tr`,17)(403,`td`,18)(404,`div`,26)(405,`span`,27),vN(406,` p-disabled`),Kc(407,`br`),ug()()(),Ac(408,`td`,22)(409,`code`,29),vN(410,`boolean`),ug()(),Ac(411,`td`,24)(412,`p`)(413,`code`),vN(414,`false`),ug()()(),Ac(415,`td`,25)(416,`em`)(417,`strong`),vN(418,`(opcional)`),ug()(),Ac(419,`p`),vN(420,`Indica que o campo será desabilitado.`),ug()()(),Ac(421,`tr`,17)(422,`td`,18)(423,`div`,19)(424,`span`,20),vN(425,` (p-enter)`),Kc(426,`br`),ug()()(),Ac(427,`td`,22)(428,`code`,23),vN(429,`EventEmitter`),ug()(),Ac(430,`td`,24),vN(431,`-`),ug(),Ac(432,`td`,25)(433,`em`)(434,`strong`),vN(435,`(opcional)`),ug()(),Ac(436,`p`),vN(437,`Evento disparado ao entrar do campo.`),ug()()(),Ac(438,`tr`,17)(439,`td`,18)(440,`div`,26)(441,`span`,27),vN(442,` p-error-limit`),Kc(443,`br`),ug()()(),Ac(444,`td`,22)(445,`code`,29),vN(446,`boolean`),ug()(),Ac(447,`td`,24)(448,`p`)(449,`code`),vN(450,`false`),ug()()(),Ac(451,`td`,25)(452,`em`)(453,`strong`),vN(454,`(opcional)`),ug()(),Ac(455,`p`),vN(456,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(457,`blockquote`)(458,`p`),vN(459,`Caso essa propriedade seja definida como `),Ac(460,`code`),vN(461,`true`),ug(),vN(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(463,`tr`,17)(464,`td`,18)(465,`div`,26)(466,`span`,27),vN(467,` p-field-error-message`),Kc(468,`br`),ug()()(),Ac(469,`td`,22)(470,`code`,28),vN(471,`string`),ug()(),Ac(472,`td`,24),vN(473,`-`),ug(),Ac(474,`td`,25)(475,`em`)(476,`strong`),vN(477,`(opcional)`),ug()(),Ac(478,`p`),vN(479,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ug(),Ac(480,`blockquote`)(481,`p`),vN(482,`Necessário que a propriedade `),Ac(483,`code`),vN(484,`p-required`),ug(),vN(485,` esteja habilitada.`),ug()()()(),Ac(486,`tr`,17)(487,`td`,18)(488,`div`,26)(489,`span`,27),vN(490,` p-help`),Kc(491,`br`),ug()()(),Ac(492,`td`,22)(493,`code`,28),vN(494,`string`),ug()(),Ac(495,`td`,24),vN(496,`-`),ug(),Ac(497,`td`,25)(498,`em`)(499,`strong`),vN(500,`(opcional)`),ug()(),Ac(501,`p`),vN(502,`Texto de apoio do campo.`),ug()()(),Ac(503,`tr`,17)(504,`td`,18)(505,`div`,19)(506,`span`,20),vN(507,` (p-keydown)`),Kc(508,`br`),ug()()(),Ac(509,`td`,22)(510,`code`,23),vN(511,`EventEmitter`),ug()(),Ac(512,`td`,24),vN(513,`-`),ug(),Ac(514,`td`,25)(515,`em`)(516,`strong`),vN(517,`(opcional)`),ug()(),Ac(518,`p`),vN(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(520,`code`),vN(521,`KeyboardEvent`),ug(),vN(522,` com informações sobre a tecla.`),ug()()(),Ac(523,`tr`,17)(524,`td`,18)(525,`div`,26)(526,`span`,27),vN(527,` p-label`),Kc(528,`br`),ug()()(),Ac(529,`td`,22)(530,`code`,28),vN(531,`string`),ug()(),Ac(532,`td`,24),vN(533,`-`),ug(),Ac(534,`td`,25)(535,`em`)(536,`strong`),vN(537,`(opcional)`),ug()(),Ac(538,`p`),vN(539,`Label do campo.`),ug()()(),Ac(540,`tr`,17)(541,`td`,18)(542,`div`,26)(543,`span`,27),vN(544,` p-label-text-wrap`),Kc(545,`br`),ug()()(),Ac(546,`td`,22)(547,`code`,29),vN(548,`boolean`),ug()(),Ac(549,`td`,24)(550,`p`)(551,`code`),vN(552,`false`),ug()()(),Ac(553,`td`,25)(554,`em`)(555,`strong`),vN(556,`(opcional)`),ug()(),Ac(557,`p`),vN(558,`Habilita a quebra automática do texto da propriedade `),Ac(559,`code`),vN(560,`p-label`),ug(),vN(561,`. Quando `),Ac(562,`code`),vN(563,`p-label-text-wrap`),ug(),vN(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(565,`tr`,17)(566,`td`,18)(567,`div`,26)(568,`span`,27),vN(569,` p-loading`),Kc(570,`br`),ug()()(),Ac(571,`td`,22)(572,`code`,29),vN(573,`boolean`),ug()(),Ac(574,`td`,24)(575,`p`)(576,`code`),vN(577,`false`),ug()()(),Ac(578,`td`,25)(579,`em`)(580,`strong`),vN(581,`(opcional)`),ug()(),Ac(582,`p`),vN(583,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(584,`tr`,17)(585,`td`,18)(586,`div`,26)(587,`span`,27),vN(588,` p-maxlength`),Kc(589,`br`),ug()()(),Ac(590,`td`,22)(591,`code`,30),vN(592,`number`),ug()(),Ac(593,`td`,24),vN(594,`-`),ug(),Ac(595,`td`,25)(596,`em`)(597,`strong`),vN(598,`(opcional)`),ug()(),Ac(599,`p`),vN(600,`Indica a quantidade máxima de caracteres que o campo aceita.`),ug()()(),Ac(601,`tr`,17)(602,`td`,18)(603,`div`,26)(604,`span`,27),vN(605,` p-minlength`),Kc(606,`br`),ug()()(),Ac(607,`td`,22)(608,`code`,30),vN(609,`number`),ug()(),Ac(610,`td`,24),vN(611,`-`),ug(),Ac(612,`td`,25)(613,`em`)(614,`strong`),vN(615,`(opcional)`),ug()(),Ac(616,`p`),vN(617,`Indica a quantidade mínima de caracteres que o campo aceita.`),ug()()(),Ac(618,`tr`,17)(619,`td`,18)(620,`div`,26)(621,`span`,27),vN(622,` name`),Kc(623,`br`),ug()()(),Ac(624,`td`,22)(625,`code`,28),vN(626,`string`),ug()(),Ac(627,`td`,24),vN(628,`-`),ug(),Ac(629,`td`,25)(630,`p`),vN(631,`Nome e Id do componente.`),ug()()(),Ac(632,`tr`,17)(633,`td`,18)(634,`div`,26)(635,`span`,27),vN(636,` p-optional`),Kc(637,`br`),ug()()(),Ac(638,`td`,22)(639,`code`,29),vN(640,`boolean`),ug()(),Ac(641,`td`,24)(642,`p`)(643,`code`),vN(644,`false`),ug()()(),Ac(645,`td`,25)(646,`em`)(647,`strong`),vN(648,`(opcional)`),ug()(),Ac(649,`p`),vN(650,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(651,`blockquote`)(652,`p`),vN(653,`Não será exibida a indicação se:`),ug()(),Ac(654,`ul`)(655,`li`),vN(656,`O campo conter `),Ac(657,`code`),vN(658,`p-required`),ug(),vN(659,`;`),ug(),Ac(660,`li`),vN(661,`Não possuir `),Ac(662,`code`),vN(663,`p-help`),ug(),vN(664,` e/ou `),Ac(665,`code`),vN(666,`p-label`),ug(),vN(667,`.`),ug()()()(),Ac(668,`tr`,17)(669,`td`,18)(670,`div`,26)(671,`span`,27),vN(672,` p-placeholder`),Kc(673,`br`),ug()()(),Ac(674,`td`,22)(675,`code`,28),vN(676,`string`),ug()(),Ac(677,`td`,24),vN(678,`-`),ug(),Ac(679,`td`,25)(680,`p`),vN(681,`Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(682,`tr`,17)(683,`td`,18)(684,`div`,26)(685,`span`,27),vN(686,` p-helper`),Kc(687,`br`),ug()()(),Ac(688,`td`,22)(689,`code`,31),vN(690,`PoHelperOptions `),ug(),Ac(691,`code`,28),vN(692,` string`),ug()(),Ac(693,`td`,24),vN(694,`-`),ug(),Ac(695,`td`,25)(696,`em`)(697,`strong`),vN(698,`(opcional)`),ug()(),Ac(699,`p`),vN(700,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(701,`code`),vN(702,`p-label`),ug(),vN(703,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(704,`code`),vN(705,`p-label`),ug(),vN(706,`.`),ug(),Ac(707,`blockquote`)(708,`p`),vN(709,`Para mais informações acesse: `),Ac(710,`a`,32),vN(711,`https://po-ui.io/documentation/po-helper`),ug(),vN(712,`.`),ug()(),Ac(713,`blockquote`)(714,`p`),vN(715,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(716,`code`),vN(717,`p-additional-help-tooltip`),ug(),vN(718,` e `),Ac(719,`code`),vN(720,`p-additional-help`),ug(),vN(721,`) será ignorado.`),ug()()()(),Ac(722,`tr`,17)(723,`td`,18)(724,`div`,26)(725,`span`,27),vN(726,` p-readonly`),Kc(727,`br`),ug()()(),Ac(728,`td`,22)(729,`code`,29),vN(730,`boolean`),ug()(),Ac(731,`td`,24)(732,`p`)(733,`code`),vN(734,`false`),ug()()(),Ac(735,`td`,25)(736,`em`)(737,`strong`),vN(738,`(opcional)`),ug()(),Ac(739,`p`),vN(740,`Indica que o campo será somente leitura.`),ug()()(),Ac(741,`tr`,17)(742,`td`,18)(743,`div`,26)(744,`span`,27),vN(745,` p-required`),Kc(746,`br`),ug()()(),Ac(747,`td`,22)(748,`code`,29),vN(749,`boolean`),ug()(),Ac(750,`td`,24)(751,`p`)(752,`code`),vN(753,`false`),ug()()(),Ac(754,`td`,25)(755,`em`)(756,`strong`),vN(757,`(opcional)`),ug()(),Ac(758,`p`),vN(759,`Define que o campo será obrigatório.`),ug(),Ac(760,`blockquote`)(761,`p`),vN(762,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(763,`code`),vN(764,`(p-disabled)`),ug(),vN(765,`.`),ug()()()(),Ac(766,`tr`,17)(767,`td`,18)(768,`div`,26)(769,`span`,27),vN(770,` p-rows`),Kc(771,`br`),ug()()(),Ac(772,`td`,22)(773,`code`,30),vN(774,`number`),ug()(),Ac(775,`td`,24)(776,`p`)(777,`code`),vN(778,`3`),ug()()(),Ac(779,`td`,25)(780,`em`)(781,`strong`),vN(782,`(opcional)`),ug()(),Ac(783,`p`),vN(784,`Indica a quantidade de linhas que serão exibidas.`),ug()()(),Ac(785,`tr`,17)(786,`td`,18)(787,`div`,26)(788,`span`,27),vN(789,` p-show-required`),Kc(790,`br`),ug()()(),Ac(791,`td`,22)(792,`code`,29),vN(793,`boolean`),ug()(),Ac(794,`td`,24),vN(795,`-`),ug(),Ac(796,`td`,25)(797,`p`),vN(798,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(799,`blockquote`)(800,`p`),vN(801,`Não será exibida a indicação se:`),ug()(),Ac(802,`ul`)(803,`li`),vN(804,`Não possuir `),Ac(805,`code`),vN(806,`p-help`),ug(),vN(807,` e/ou `),Ac(808,`code`),vN(809,`p-label`),ug(),vN(810,`.`),ug()()()(),Ac(811,`tr`,17)(812,`td`,18)(813,`div`,26)(814,`span`,27),vN(815,` p-size`),Kc(816,`br`),ug()()(),Ac(817,`td`,22)(818,`code`,28),vN(819,`string`),ug()(),Ac(820,`td`,24)(821,`p`)(822,`code`),vN(823,`medium`),ug()()(),Ac(824,`td`,25)(825,`em`)(826,`strong`),vN(827,`(opcional)`),ug()(),Ac(828,`p`),vN(829,`Define o tamanho do componente:`),ug(),Ac(830,`ul`)(831,`li`)(832,`code`),vN(833,`small`),ug(),vN(834,` (disponível apenas para acessibilidade AA)`),ug(),Ac(835,`li`)(836,`code`),vN(837,`medium`),ug()()(),Ac(838,`blockquote`)(839,`p`),vN(840,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(841,`code`),vN(842,`medium`),ug(),vN(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(844,`a`,33),vN(845,`po-theme`),ug(),vN(846,`.`),ug()()()()(),Ac(847,`h3`,13),vN(848,`Métodos`),ug(),Ac(849,`table`,34)(850,`tr`,17)(851,`th`,35)(852,`div`,26)(853,`h4`)(854,`span`,27),vN(855,` focus `),ug()()()()(),Ac(856,`tr`,25)(857,`td`,25)(858,`p`),vN(859,`Função que atribui foco ao componente.`),ug(),Ac(860,`p`),vN(861,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(862,`pre`)(863,`code`),vN(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),ug()()()()(),Kc(865,`br`),Ac(866,`table`,34)(867,`tr`,17)(868,`th`,35)(869,`div`,26)(870,`h4`)(871,`span`,27),vN(872,` showAdditionalHelp `),ug()()()()(),Ac(873,`tr`,25)(874,`td`,25)(875,`p`),vN(876,`Método que exibe `),Ac(877,`code`),vN(878,`p-helper`),ug(),vN(879,` ou executa a ação definida em `),Ac(880,`code`),vN(881,`p-helper{eventOnClick}`),ug(),vN(882,` ou em `),Ac(883,`code`),vN(884,`p-additionalHelp`),ug(),vN(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(886,`code`),vN(887,`p-keydown`),ug(),vN(888,`.`),ug(),Ac(889,`blockquote`)(890,`p`),vN(891,`Exibe ou oculta o conteúdo do componente `),Ac(892,`code`),vN(893,`po-helper`),ug(),vN(894,` quando o componente estiver com foco.`),ug()(),Ac(895,`pre`)(896,`code`),vN(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),ug()(),Ac(898,`pre`)(899,`code`),vN(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(901,`br`),ug())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Re=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Textarea`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-textarea-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-textarea-basic-view`)(6,`sample-po-textarea-labs-view`)(7,`sample-po-textarea-email-view`)(8,`sample-po-textarea-email-reactive-form-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,ge,he,fe,ve,Te],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[kL.forChild(Re),kL]})}return a})();var yt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[Ta,we]})}return a})();export{yt as DocPoTextareaModule};