import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Ur as Tx,Vi as kk,X as KH,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,cn as lU,da as uo,ea as p0,ga as w,hr as MY,ki as fm,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,pt as Pbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wa as zx,wi as f,yr as Mx}from"./main-NT5YGKBQ.js";var Ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`textarea`,`p-label`,`PO Textarea`]],template:function(r,i){r&1&&ql(0,`po-textarea`,0)},dependencies:[Pbe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Textarea Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-textarea-basic/sample-po-textarea-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-textarea-basic/sample-po-textarea-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-textarea-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ee],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage=``,this.rows=void 0,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-labs`]],standalone:!1,decls:20,vars:33,consts:[[`f`,`ngForm`],[`name`,`textarea`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-rows`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`rows`,`p-clean`,``,`p-label`,`Rows`,`p-min`,`3`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`po-textarea`,1),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.textarea,l)||(i.textarea=l),Jy(l)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.label,l)||(i.label=l),Jy(l)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.help,l)||(i.help=l),Jy(l)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.helperText,l)||(i.helperText=l),Jy(l)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.placeholder,l)||(i.placeholder=l),Jy(l)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Jy(l)}),lg(),f0(),Ml(13,`po-number`,10),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.rows,l)||(i.rows=l),Jy(l)}),lg(),f0(),Ml(14,`po-number`,11),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.minlength,l)||(i.minlength=l),Jy(l)}),lg(),f0(),Ml(15,`po-number`,12),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.maxlength,l)||(i.maxlength=l),Jy(l)}),lg(),f0(),Ml(16,`po-checkbox-group`,13),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.properties,l)||(i.properties=l),Jy(l)}),lg(),f0(),Ml(17,`po-radio-group`,14),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.size,l)||(i.size=l),Jy(l)}),lg(),f0(),Ml(18,`div`,2)(19,`po-button`,15),ht(`p-click`,function(){return i.restore()}),lg()()()}r&2&&(Tw(`ngModel`,i.textarea),cw(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-rows`,i.rows)(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),p0(),Up(3),cw(`p-value`,i.textarea),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.fieldErrorMessage),p0(),Up(),Tw(`ngModel`,i.rows),p0(),Up(),Tw(`ngModel`,i.minlength),p0(),Up(),Tw(`ngModel`,i.maxlength),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,q0e,Pbe,kbe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Textarea Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-textarea-labs/sample-po-textarea-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-textarea
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-textarea-labs/sample-po-textarea-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-textarea-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return a})();var Fe=[`formEmail`];function Ve(a,Me){if(a&1&&(Ml(0,`div`)(1,`div`,8),ql(2,`po-info`,13),lg(),ql(3,`po-divider`),lg()),a&2){let m=zx();Up(2),cw(`p-value`,m.cc)}}var Se=(()=>{class a{formEmail;poModal;cc=``;emailText=``;from=``;subject=``;to=``;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email`]],viewQuery:function(r,i){if(r&1&&Zl(Fe,7)(vr,7),r&2){let s;lo(s=uo())&&(i.formEmail=s.first),lo(s=uo())&&(i.poModal=s.first)}},standalone:!1,decls:19,vars:12,consts:[[`formEmail`,`ngForm`],[`p-title`,`Send email`,3,`p-actions`],[`name`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`emailText`,`p-label`,`E-mail`,`p-required`,``,`p-rows`,`8`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`po-page-default`,1)(1,`form`,null,0)(3,`po-email`,2),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.from,l)||(i.from=l),Jy(l)}),lg(),f0(),Ml(4,`po-email`,3),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.to,l)||(i.to=l),Jy(l)}),lg(),f0(),Ml(5,`po-email`,4),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.cc,l)||(i.cc=l),Jy(l)}),lg(),f0(),Ml(6,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.subject,l)||(i.subject=l),Jy(l)}),lg(),f0(),Ml(7,`po-textarea`,6),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.emailText,l)||(i.emailText=l),Jy(l)}),lg(),f0(),lg()(),Ml(8,`po-modal`,7)(9,`div`,8),ql(10,`po-info`,9)(11,`po-info`,10),lg(),ql(12,`po-divider`),Tx(13,Ve,4,1,`div`),Ml(14,`div`,8),ql(15,`po-info`,11),lg(),ql(16,`po-divider`),Ml(17,`div`,8)(18,`po-textarea`,12),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.emailText,l)||(i.emailText=l),Jy(l)}),lg(),f0(),lg()()}r&2&&(cw(`p-actions`,i.getPageAction()),Up(3),Tw(`ngModel`,i.from),p0(),Up(),Tw(`ngModel`,i.to),p0(),Up(),Tw(`ngModel`,i.cc),p0(),Up(),Tw(`ngModel`,i.subject),p0(),Up(),Tw(`ngModel`,i.emailText),p0(),Up(),cw(`p-primary-action`,i.primaryAction),Up(2),cw(`p-value`,i.from),Up(),cw(`p-value`,i.to),Up(2),Mx(i.cc!==``?13:-1),Up(2),cw(`p-value`,i.subject),Up(3),Tw(`ngModel`,i.emailText),p0())},dependencies:[IY,wY,CY,Vk,kk,nb,KH,lU,Pbe,kbe,vr,V8e],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Textarea - Email`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-textarea-email/sample-po-textarea-email.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-textarea-email/sample-po-textarea-email.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-textarea-email`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,We,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return a})();function je(a,Me){if(a&1&&(Ml(0,`div`)(1,`div`,8),ql(2,`po-info`,13),lg(),ql(3,`po-divider`),lg()),a&2){let m=zx();Up(2),cw(`p-value`,m.formEmail.get(`cc`).value)}}var Ce=(()=>{class a{formBuilder=f(MY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,fm.required],to:[null,fm.required],emailText:[null,fm.required],subject:[null,fm.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email-reactive-form`]],viewQuery:function(r,i){if(r&1&&Zl(vr,7),r&2){let s;lo(s=uo())&&(i.poModal=s.first)}},standalone:!1,decls:18,vars:8,consts:[[`p-title`,`Send email`,3,`p-actions`],[3,`formGroup`],[`name`,`from`,`formControlName`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`],[`name`,`to`,`formControlName`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`],[`name`,`cc`,`formControlName`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`],[`name`,`subject`,`formControlName`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`],[`name`,`emailText`,`formControlName`,`emailText`,`p-label`,`E-mail`,`p-rows`,`8`,`p-required`,``,1,`po-sm-12`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-required`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`form`,1),ql(2,`po-email`,2),f0(),ql(3,`po-email`,3),f0(),ql(4,`po-email`,4),f0(),ql(5,`po-input`,5),f0(),ql(6,`po-textarea`,6),f0(),lg()(),Ml(7,`po-modal`,7)(8,`div`,8),ql(9,`po-info`,9)(10,`po-info`,10),lg(),ql(11,`po-divider`),Tx(12,je,4,1,`div`),Ml(13,`div`,8),ql(14,`po-info`,11),lg(),ql(15,`po-divider`),Ml(16,`div`,8),ql(17,`po-textarea`,12),f0(),lg()()),r&2&&(cw(`p-actions`,i.getPageAction()),Up(),cw(`formGroup`,i.formEmail),Up(),p0(),Up(),p0(),Up(),p0(),Up(),p0(),Up(),p0(),Up(),cw(`p-primary-action`,i.primaryAction),Up(2),cw(`p-value`,i.formEmail.get(`from`).value),Up(),cw(`p-value`,i.formEmail.get(`to`).value),Up(2),Mx(i.formEmail.get(`cc`).value?12:-1),Up(2),cw(`p-value`,i.formEmail.get(`subject`).value),Up(3),cw(`ngModel`,i.formEmail.get(`emailText`).value),p0())},dependencies:[IY,wY,CY,Vk,qk,Wk,nb,KH,lU,Pbe,kbe,vr,V8e],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Textarea - Email Reactive Form`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-textarea-email-reactive-form`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ce],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-doc`]],standalone:!1,decls:902,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoTextareaComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),lg(),Ml(24,`p`),mN(25,`Importante:`),lg(),Ml(26,`ul`)(27,`li`),mN(28,`A propriedade `),Ml(29,`code`),mN(30,`name`),lg(),mN(31,` é obrigatória para que o formulário e o `),Ml(32,`code`),mN(33,`model`),lg(),mN(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Ml(35,`em`),mN(36,`Angular`),lg(),mN(37,`, onde será necessário informar o atributo `),Ml(38,`code`),mN(39,`name`),lg(),mN(40,` ou o atributo `),Ml(41,`code`),mN(42,`[ngModelOptions]="{standalone: true}"`),lg(),mN(43,`, por exemplo:`),lg()(),Ml(44,`pre`)(45,`code`),mN(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),lg()(),Ml(47,`h4`),mN(48,`Acessibilidade tratada no componente`),lg(),Ml(49,`p`),mN(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),lg(),Ml(51,`ul`)(52,`li`),mN(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Ml(54,`a`,6),mN(55,`WCAG 4.1.2: Name, Role, Value`),lg()(),Ml(56,`li`),mN(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Ml(58,`a`,7),mN(59,`WCAG 2.4.12: Focus Appearance)`),lg()(),Ml(60,`li`),mN(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Ml(62,`a`,8),mN(63,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),lg()()(),Ml(64,`h4`),mN(65,`Tokens customizáveis`),lg(),Ml(66,`p`),mN(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(68,`blockquote`)(69,`p`),mN(70,`Para maiores informações, acesse o guia `),Ml(71,`a`,9),mN(72,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(73,`.`),lg()(),Ml(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),mN(78,`Propriedade`),lg(),Ml(79,`th`),mN(80,`Descrição`),lg(),Ml(81,`th`),mN(82,`Valor Padrão`),lg()()(),Ml(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),mN(87,`Default Values`),lg()(),ql(88,`td`)(89,`td`),lg(),Ml(90,`tr`)(91,`td`)(92,`code`),mN(93,`--font-family`),lg()(),Ml(94,`td`),mN(95,`Família tipográfica usada`),lg(),Ml(96,`td`)(97,`code`),mN(98,`var(--font-family-theme)`),lg()()(),Ml(99,`tr`)(100,`td`)(101,`code`),mN(102,`--font-size`),lg()(),Ml(103,`td`),mN(104,`Tamanho da fonte`),lg(),Ml(105,`td`)(106,`code`),mN(107,`var(--font-size-default)`),lg()()(),Ml(108,`tr`)(109,`td`)(110,`code`),mN(111,`--text-color-placeholder`),lg()(),Ml(112,`td`),mN(113,`Cor do texto placeholder`),lg(),Ml(114,`td`)(115,`code`),mN(116,`var(--color-neutral-light-30)`),lg()()(),Ml(117,`tr`)(118,`td`)(119,`code`),mN(120,`--color`),lg()(),Ml(121,`td`),mN(122,`Cor pincipal do campo`),lg(),Ml(123,`td`)(124,`code`),mN(125,`var(--color-neutral-dark-70)`),lg()()(),Ml(126,`tr`)(127,`td`)(128,`code`),mN(129,`--background`),lg()(),Ml(130,`td`),mN(131,`Cor de background`),lg(),Ml(132,`td`)(133,`code`),mN(134,`var(--color-neutral-light-05)`),lg()()(),Ml(135,`tr`)(136,`td`)(137,`code`),mN(138,`--field-container-title-justify`),lg()(),Ml(139,`td`),mN(140,`Alinhamento horizontal do título (`),Ml(141,`code`),mN(142,`justify-content`),lg(),mN(143,`)`),lg(),Ml(144,`td`)(145,`code`),mN(146,`space-between`),lg()()(),Ml(147,`tr`)(148,`td`)(149,`code`),mN(150,`--field-container-title-flex`),lg()(),Ml(151,`td`),mN(152,`Flex do título (`),Ml(153,`code`),mN(154,`flex`),lg(),mN(155,`)`),lg(),Ml(156,`td`)(157,`code`),mN(158,`1 auto`),lg()()()()()(),Ml(159,`div`,10)(160,`h4`,11),mN(161,`Seletor`),lg(),Ml(162,`pre`,12),mN(163,`<po-textarea
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
`),lg()(),Ml(164,`h4`,13),mN(165,`Propriedades`),lg(),Ml(166,`table`,14)(167,`tr`,15)(168,`th`,16),mN(169,`Nome`),lg(),Ml(170,`th`,16),mN(171,`Tipo`),lg(),Ml(172,`th`,16),mN(173,`Padrão`),lg(),Ml(174,`th`,16),mN(175,`Descrição`),lg()(),Ml(176,`tr`,17)(177,`td`,18)(178,`div`,19)(179,`span`,20),mN(180,` (p-additional-help)`),ql(181,`br`),lg()(),Ml(182,`div`,21),mN(183,`Deprecated`),lg()(),Ml(184,`td`,22)(185,`code`,23),mN(186,`EventEmitter`),lg()(),Ml(187,`td`,24),mN(188,`-`),lg(),Ml(189,`td`,25)(190,`em`)(191,`strong`),mN(192,`(opcional)`),lg()(),Ml(193,`p`),mN(194,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(195,`blockquote`)(196,`p`),mN(197,`Essa propriedade está `),Ml(198,`strong`),mN(199,`depreciada`),lg(),mN(200,` e será removida na versão `),Ml(201,`code`),mN(202,`23.x.x`),lg(),mN(203,`. Recomendamos utilizar a propriedade `),Ml(204,`code`),mN(205,`p-helper`),lg(),mN(206,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(207,`tr`,17)(208,`td`,18)(209,`div`,26)(210,`span`,27),mN(211,` p-additional-help-tooltip`),ql(212,`br`),lg()(),Ml(213,`div`,21),mN(214,`Deprecated`),lg()(),Ml(215,`td`,22)(216,`code`,28),mN(217,`string`),lg()(),Ml(218,`td`,24),mN(219,`-`),lg(),Ml(220,`td`,25)(221,`em`)(222,`strong`),mN(223,`(opcional)`),lg()(),Ml(224,`p`),mN(225,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(226,`code`),mN(227,`po-helper`),lg(),mN(228,`.
`),Ml(229,`strong`),mN(230,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(231,`blockquote`)(232,`p`),mN(233,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(234,`blockquote`)(235,`p`),mN(236,`Essa propriedade está `),Ml(237,`strong`),mN(238,`depreciada`),lg(),mN(239,` e será removida na versão `),Ml(240,`code`),mN(241,`23.x.x`),lg(),mN(242,`. Recomendamos utilizar a propriedade `),Ml(243,`code`),mN(244,`p-helper`),lg(),mN(245,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(246,`tr`,17)(247,`td`,18)(248,`div`,26)(249,`span`,27),mN(250,` p-append-in-body`),ql(251,`br`),lg()()(),Ml(252,`td`,22)(253,`code`,29),mN(254,`boolean`),lg()(),Ml(255,`td`,24)(256,`p`)(257,`code`),mN(258,`false`),lg()()(),Ml(259,`td`,25)(260,`em`)(261,`strong`),mN(262,`(opcional)`),lg()(),Ml(263,`p`),mN(264,`Define que o popover (`),Ml(265,`code`),mN(266,`p-helper`),lg(),mN(267,` e/ou `),Ml(268,`code`),mN(269,`p-error-limit`),lg(),mN(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(271,`blockquote`)(272,`p`),mN(273,`Quando utilizado com `),Ml(274,`code`),mN(275,`p-helper`),lg(),mN(276,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(277,`tr`,17)(278,`td`,18)(279,`div`,26)(280,`span`,27),mN(281,` p-auto-focus`),ql(282,`br`),lg()()(),Ml(283,`td`,22)(284,`code`,29),mN(285,`boolean`),lg()(),Ml(286,`td`,24)(287,`p`)(288,`code`),mN(289,`false`),lg()()(),Ml(290,`td`,25)(291,`em`)(292,`strong`),mN(293,`(opcional)`),lg()(),Ml(294,`p`),mN(295,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(296,`blockquote`)(297,`p`),mN(298,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(299,`tr`,17)(300,`td`,18)(301,`div`,19)(302,`span`,20),mN(303,` (p-blur)`),ql(304,`br`),lg()()(),Ml(305,`td`,22)(306,`code`,23),mN(307,`EventEmitter`),lg()(),Ml(308,`td`,24),mN(309,`-`),lg(),Ml(310,`td`,25)(311,`em`)(312,`strong`),mN(313,`(opcional)`),lg()(),Ml(314,`p`),mN(315,`Evento disparado ao sair do campo.`),lg()()(),Ml(316,`tr`,17)(317,`td`,18)(318,`div`,19)(319,`span`,20),mN(320,` (p-change)`),ql(321,`br`),lg()()(),Ml(322,`td`,22)(323,`code`,23),mN(324,`EventEmitter`),lg()(),Ml(325,`td`,24),mN(326,`-`),lg(),Ml(327,`td`,25)(328,`em`)(329,`strong`),mN(330,`(opcional)`),lg()(),Ml(331,`p`),mN(332,`Evento disparado ao alterar valor e deixar o campo.`),lg()()(),Ml(333,`tr`,17)(334,`td`,18)(335,`div`,19)(336,`span`,20),mN(337,` (p-change-model)`),ql(338,`br`),lg()()(),Ml(339,`td`,22)(340,`code`,23),mN(341,`EventEmitter`),lg()(),Ml(342,`td`,24),mN(343,`-`),lg(),Ml(344,`td`,25)(345,`em`)(346,`strong`),mN(347,`(opcional)`),lg()(),Ml(348,`p`),mN(349,`Evento disparado ao alterar valor do model.`),lg()()(),Ml(350,`tr`,17)(351,`td`,18)(352,`div`,26)(353,`span`,27),mN(354,` p-compact-label`),ql(355,`br`),lg()()(),Ml(356,`td`,22)(357,`code`,29),mN(358,`boolean`),lg()(),Ml(359,`td`,24)(360,`p`)(361,`code`),mN(362,`false`),lg()()(),Ml(363,`td`,25)(364,`em`)(365,`strong`),mN(366,`(opcional)`),lg()(),Ml(367,`p`),mN(368,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(369,`p`),mN(370,`Quando habilitado (`),Ml(371,`code`),mN(372,`true`),lg(),mN(373,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(374,`ul`)(375,`li`)(376,`code`),mN(377,`po-label`),lg()(),Ml(378,`li`)(379,`code`),mN(380,`p-requirement (showRequired)`),lg()(),Ml(381,`li`)(382,`code`),mN(383,`po-helper`),lg()()(),Ml(384,`p`),mN(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(386,`p`),mN(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(388,`ul`)(389,`li`)(390,`code`),mN(391,`--field-container-title-justify`),lg()(),Ml(392,`li`)(393,`code`),mN(394,`--field-container-title-flex`),lg()()(),Ml(395,`p`),mN(396,`Exemplo:`),lg(),Ml(397,`pre`)(398,`code`),mN(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(400,`p`),mN(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(402,`tr`,17)(403,`td`,18)(404,`div`,26)(405,`span`,27),mN(406,` p-disabled`),ql(407,`br`),lg()()(),Ml(408,`td`,22)(409,`code`,29),mN(410,`boolean`),lg()(),Ml(411,`td`,24)(412,`p`)(413,`code`),mN(414,`false`),lg()()(),Ml(415,`td`,25)(416,`em`)(417,`strong`),mN(418,`(opcional)`),lg()(),Ml(419,`p`),mN(420,`Indica que o campo será desabilitado.`),lg()()(),Ml(421,`tr`,17)(422,`td`,18)(423,`div`,19)(424,`span`,20),mN(425,` (p-enter)`),ql(426,`br`),lg()()(),Ml(427,`td`,22)(428,`code`,23),mN(429,`EventEmitter`),lg()(),Ml(430,`td`,24),mN(431,`-`),lg(),Ml(432,`td`,25)(433,`em`)(434,`strong`),mN(435,`(opcional)`),lg()(),Ml(436,`p`),mN(437,`Evento disparado ao entrar do campo.`),lg()()(),Ml(438,`tr`,17)(439,`td`,18)(440,`div`,26)(441,`span`,27),mN(442,` p-error-limit`),ql(443,`br`),lg()()(),Ml(444,`td`,22)(445,`code`,29),mN(446,`boolean`),lg()(),Ml(447,`td`,24)(448,`p`)(449,`code`),mN(450,`false`),lg()()(),Ml(451,`td`,25)(452,`em`)(453,`strong`),mN(454,`(opcional)`),lg()(),Ml(455,`p`),mN(456,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(457,`blockquote`)(458,`p`),mN(459,`Caso essa propriedade seja definida como `),Ml(460,`code`),mN(461,`true`),lg(),mN(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(463,`tr`,17)(464,`td`,18)(465,`div`,26)(466,`span`,27),mN(467,` p-field-error-message`),ql(468,`br`),lg()()(),Ml(469,`td`,22)(470,`code`,28),mN(471,`string`),lg()(),Ml(472,`td`,24),mN(473,`-`),lg(),Ml(474,`td`,25)(475,`em`)(476,`strong`),mN(477,`(opcional)`),lg()(),Ml(478,`p`),mN(479,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),lg(),Ml(480,`blockquote`)(481,`p`),mN(482,`Necessário que a propriedade `),Ml(483,`code`),mN(484,`p-required`),lg(),mN(485,` esteja habilitada.`),lg()()()(),Ml(486,`tr`,17)(487,`td`,18)(488,`div`,26)(489,`span`,27),mN(490,` p-help`),ql(491,`br`),lg()()(),Ml(492,`td`,22)(493,`code`,28),mN(494,`string`),lg()(),Ml(495,`td`,24),mN(496,`-`),lg(),Ml(497,`td`,25)(498,`em`)(499,`strong`),mN(500,`(opcional)`),lg()(),Ml(501,`p`),mN(502,`Texto de apoio do campo.`),lg()()(),Ml(503,`tr`,17)(504,`td`,18)(505,`div`,19)(506,`span`,20),mN(507,` (p-keydown)`),ql(508,`br`),lg()()(),Ml(509,`td`,22)(510,`code`,23),mN(511,`EventEmitter`),lg()(),Ml(512,`td`,24),mN(513,`-`),lg(),Ml(514,`td`,25)(515,`em`)(516,`strong`),mN(517,`(opcional)`),lg()(),Ml(518,`p`),mN(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(520,`code`),mN(521,`KeyboardEvent`),lg(),mN(522,` com informações sobre a tecla.`),lg()()(),Ml(523,`tr`,17)(524,`td`,18)(525,`div`,26)(526,`span`,27),mN(527,` p-label`),ql(528,`br`),lg()()(),Ml(529,`td`,22)(530,`code`,28),mN(531,`string`),lg()(),Ml(532,`td`,24),mN(533,`-`),lg(),Ml(534,`td`,25)(535,`em`)(536,`strong`),mN(537,`(opcional)`),lg()(),Ml(538,`p`),mN(539,`Label do campo.`),lg()()(),Ml(540,`tr`,17)(541,`td`,18)(542,`div`,26)(543,`span`,27),mN(544,` p-label-text-wrap`),ql(545,`br`),lg()()(),Ml(546,`td`,22)(547,`code`,29),mN(548,`boolean`),lg()(),Ml(549,`td`,24)(550,`p`)(551,`code`),mN(552,`false`),lg()()(),Ml(553,`td`,25)(554,`em`)(555,`strong`),mN(556,`(opcional)`),lg()(),Ml(557,`p`),mN(558,`Habilita a quebra automática do texto da propriedade `),Ml(559,`code`),mN(560,`p-label`),lg(),mN(561,`. Quando `),Ml(562,`code`),mN(563,`p-label-text-wrap`),lg(),mN(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(565,`tr`,17)(566,`td`,18)(567,`div`,26)(568,`span`,27),mN(569,` p-loading`),ql(570,`br`),lg()()(),Ml(571,`td`,22)(572,`code`,29),mN(573,`boolean`),lg()(),Ml(574,`td`,24)(575,`p`)(576,`code`),mN(577,`false`),lg()()(),Ml(578,`td`,25)(579,`em`)(580,`strong`),mN(581,`(opcional)`),lg()(),Ml(582,`p`),mN(583,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(584,`tr`,17)(585,`td`,18)(586,`div`,26)(587,`span`,27),mN(588,` p-maxlength`),ql(589,`br`),lg()()(),Ml(590,`td`,22)(591,`code`,30),mN(592,`number`),lg()(),Ml(593,`td`,24),mN(594,`-`),lg(),Ml(595,`td`,25)(596,`em`)(597,`strong`),mN(598,`(opcional)`),lg()(),Ml(599,`p`),mN(600,`Indica a quantidade máxima de caracteres que o campo aceita.`),lg()()(),Ml(601,`tr`,17)(602,`td`,18)(603,`div`,26)(604,`span`,27),mN(605,` p-minlength`),ql(606,`br`),lg()()(),Ml(607,`td`,22)(608,`code`,30),mN(609,`number`),lg()(),Ml(610,`td`,24),mN(611,`-`),lg(),Ml(612,`td`,25)(613,`em`)(614,`strong`),mN(615,`(opcional)`),lg()(),Ml(616,`p`),mN(617,`Indica a quantidade mínima de caracteres que o campo aceita.`),lg()()(),Ml(618,`tr`,17)(619,`td`,18)(620,`div`,26)(621,`span`,27),mN(622,` name`),ql(623,`br`),lg()()(),Ml(624,`td`,22)(625,`code`,28),mN(626,`string`),lg()(),Ml(627,`td`,24),mN(628,`-`),lg(),Ml(629,`td`,25)(630,`p`),mN(631,`Nome e Id do componente.`),lg()()(),Ml(632,`tr`,17)(633,`td`,18)(634,`div`,26)(635,`span`,27),mN(636,` p-optional`),ql(637,`br`),lg()()(),Ml(638,`td`,22)(639,`code`,29),mN(640,`boolean`),lg()(),Ml(641,`td`,24)(642,`p`)(643,`code`),mN(644,`false`),lg()()(),Ml(645,`td`,25)(646,`em`)(647,`strong`),mN(648,`(opcional)`),lg()(),Ml(649,`p`),mN(650,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(651,`blockquote`)(652,`p`),mN(653,`Não será exibida a indicação se:`),lg()(),Ml(654,`ul`)(655,`li`),mN(656,`O campo conter `),Ml(657,`code`),mN(658,`p-required`),lg(),mN(659,`;`),lg(),Ml(660,`li`),mN(661,`Não possuir `),Ml(662,`code`),mN(663,`p-help`),lg(),mN(664,` e/ou `),Ml(665,`code`),mN(666,`p-label`),lg(),mN(667,`.`),lg()()()(),Ml(668,`tr`,17)(669,`td`,18)(670,`div`,26)(671,`span`,27),mN(672,` p-placeholder`),ql(673,`br`),lg()()(),Ml(674,`td`,22)(675,`code`,28),mN(676,`string`),lg()(),Ml(677,`td`,24),mN(678,`-`),lg(),Ml(679,`td`,25)(680,`p`),mN(681,`Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(682,`tr`,17)(683,`td`,18)(684,`div`,26)(685,`span`,27),mN(686,` p-helper`),ql(687,`br`),lg()()(),Ml(688,`td`,22)(689,`code`,31),mN(690,`PoHelperOptions `),lg(),Ml(691,`code`,28),mN(692,` string`),lg()(),Ml(693,`td`,24),mN(694,`-`),lg(),Ml(695,`td`,25)(696,`em`)(697,`strong`),mN(698,`(opcional)`),lg()(),Ml(699,`p`),mN(700,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(701,`code`),mN(702,`p-label`),lg(),mN(703,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(704,`code`),mN(705,`p-label`),lg(),mN(706,`.`),lg(),Ml(707,`blockquote`)(708,`p`),mN(709,`Para mais informações acesse: `),Ml(710,`a`,32),mN(711,`https://po-ui.io/documentation/po-helper`),lg(),mN(712,`.`),lg()(),Ml(713,`blockquote`)(714,`p`),mN(715,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(716,`code`),mN(717,`p-additional-help-tooltip`),lg(),mN(718,` e `),Ml(719,`code`),mN(720,`p-additional-help`),lg(),mN(721,`) será ignorado.`),lg()()()(),Ml(722,`tr`,17)(723,`td`,18)(724,`div`,26)(725,`span`,27),mN(726,` p-readonly`),ql(727,`br`),lg()()(),Ml(728,`td`,22)(729,`code`,29),mN(730,`boolean`),lg()(),Ml(731,`td`,24)(732,`p`)(733,`code`),mN(734,`false`),lg()()(),Ml(735,`td`,25)(736,`em`)(737,`strong`),mN(738,`(opcional)`),lg()(),Ml(739,`p`),mN(740,`Indica que o campo será somente leitura.`),lg()()(),Ml(741,`tr`,17)(742,`td`,18)(743,`div`,26)(744,`span`,27),mN(745,` p-required`),ql(746,`br`),lg()()(),Ml(747,`td`,22)(748,`code`,29),mN(749,`boolean`),lg()(),Ml(750,`td`,24)(751,`p`)(752,`code`),mN(753,`false`),lg()()(),Ml(754,`td`,25)(755,`em`)(756,`strong`),mN(757,`(opcional)`),lg()(),Ml(758,`p`),mN(759,`Define que o campo será obrigatório.`),lg(),Ml(760,`blockquote`)(761,`p`),mN(762,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(763,`code`),mN(764,`(p-disabled)`),lg(),mN(765,`.`),lg()()()(),Ml(766,`tr`,17)(767,`td`,18)(768,`div`,26)(769,`span`,27),mN(770,` p-rows`),ql(771,`br`),lg()()(),Ml(772,`td`,22)(773,`code`,30),mN(774,`number`),lg()(),Ml(775,`td`,24)(776,`p`)(777,`code`),mN(778,`3`),lg()()(),Ml(779,`td`,25)(780,`em`)(781,`strong`),mN(782,`(opcional)`),lg()(),Ml(783,`p`),mN(784,`Indica a quantidade de linhas que serão exibidas.`),lg()()(),Ml(785,`tr`,17)(786,`td`,18)(787,`div`,26)(788,`span`,27),mN(789,` p-show-required`),ql(790,`br`),lg()()(),Ml(791,`td`,22)(792,`code`,29),mN(793,`boolean`),lg()(),Ml(794,`td`,24),mN(795,`-`),lg(),Ml(796,`td`,25)(797,`p`),mN(798,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(799,`blockquote`)(800,`p`),mN(801,`Não será exibida a indicação se:`),lg()(),Ml(802,`ul`)(803,`li`),mN(804,`Não possuir `),Ml(805,`code`),mN(806,`p-help`),lg(),mN(807,` e/ou `),Ml(808,`code`),mN(809,`p-label`),lg(),mN(810,`.`),lg()()()(),Ml(811,`tr`,17)(812,`td`,18)(813,`div`,26)(814,`span`,27),mN(815,` p-size`),ql(816,`br`),lg()()(),Ml(817,`td`,22)(818,`code`,28),mN(819,`string`),lg()(),Ml(820,`td`,24)(821,`p`)(822,`code`),mN(823,`medium`),lg()()(),Ml(824,`td`,25)(825,`em`)(826,`strong`),mN(827,`(opcional)`),lg()(),Ml(828,`p`),mN(829,`Define o tamanho do componente:`),lg(),Ml(830,`ul`)(831,`li`)(832,`code`),mN(833,`small`),lg(),mN(834,` (disponível apenas para acessibilidade AA)`),lg(),Ml(835,`li`)(836,`code`),mN(837,`medium`),lg()()(),Ml(838,`blockquote`)(839,`p`),mN(840,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(841,`code`),mN(842,`medium`),lg(),mN(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(844,`a`,33),mN(845,`po-theme`),lg(),mN(846,`.`),lg()()()()(),Ml(847,`h3`,13),mN(848,`Métodos`),lg(),Ml(849,`table`,34)(850,`tr`,17)(851,`th`,35)(852,`div`,26)(853,`h4`)(854,`span`,27),mN(855,` focus `),lg()()()()(),Ml(856,`tr`,25)(857,`td`,25)(858,`p`),mN(859,`Função que atribui foco ao componente.`),lg(),Ml(860,`p`),mN(861,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(862,`pre`)(863,`code`),mN(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),lg()()()()(),ql(865,`br`),Ml(866,`table`,34)(867,`tr`,17)(868,`th`,35)(869,`div`,26)(870,`h4`)(871,`span`,27),mN(872,` showAdditionalHelp `),lg()()()()(),Ml(873,`tr`,25)(874,`td`,25)(875,`p`),mN(876,`Método que exibe `),Ml(877,`code`),mN(878,`p-helper`),lg(),mN(879,` ou executa a ação definida em `),Ml(880,`code`),mN(881,`p-helper{eventOnClick}`),lg(),mN(882,` ou em `),Ml(883,`code`),mN(884,`p-additionalHelp`),lg(),mN(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(886,`code`),mN(887,`p-keydown`),lg(),mN(888,`.`),lg(),Ml(889,`blockquote`)(890,`p`),mN(891,`Exibe ou oculta o conteúdo do componente `),Ml(892,`code`),mN(893,`po-helper`),lg(),mN(894,` quando o componente estiver com foco.`),lg()(),Ml(895,`pre`)(896,`code`),mN(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),lg()(),Ml(898,`pre`)(899,`code`),mN(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(901,`br`),lg())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Re=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Textarea`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-textarea-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-textarea-basic-view`)(6,`sample-po-textarea-labs-view`)(7,`sample-po-textarea-email-view`)(8,`sample-po-textarea-email-reactive-form-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ge,he,fe,ve,Te],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[NL.forChild(Re),NL]})}return a})();var yt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,we]})}return a})();export{yt as DocPoTextareaModule};