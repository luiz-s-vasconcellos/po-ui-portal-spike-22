import{$n as Dx,$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ca as um,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,la as uo,li as _x,lr as Gl,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,sr as Fx,tr as EY,ui as a0,ut as S8e,va as yY,wn as vr,xr as Lk,yi as cN,yn as ube,zi as jk}from"./main-3EWTGE7T.js";var Ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`textarea`,`p-label`,`PO Textarea`]],template:function(r,i){r&1&&Gl(0,`po-textarea`,0)},dependencies:[vbe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Textarea Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-textarea-basic/sample-po-textarea-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-textarea-basic/sample-po-textarea-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-textarea-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ee],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage=``,this.rows=void 0,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-labs`]],standalone:!1,decls:20,vars:33,consts:[[`f`,`ngForm`],[`name`,`textarea`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-field-error-message`,`p-show-required`,`p-rows`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`rows`,`p-clean`,``,`p-label`,`Rows`,`p-min`,`3`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`po-textarea`,1),ww(`ngModelChange`,function(l){return Ky(s),uN(i.textarea,l)||(i.textarea=l),Xy(l)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(s),uN(i.label,l)||(i.label=l),Xy(l)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(l){return Ky(s),uN(i.help,l)||(i.help=l),Xy(l)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(l){return Ky(s),uN(i.helperText,l)||(i.helperText=l),Xy(l)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(l){return Ky(s),uN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(l){return Ky(s),uN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Xy(l)}),ag(),a0(),Tl(13,`po-number`,10),ww(`ngModelChange`,function(l){return Ky(s),uN(i.rows,l)||(i.rows=l),Xy(l)}),ag(),a0(),Tl(14,`po-number`,11),ww(`ngModelChange`,function(l){return Ky(s),uN(i.minlength,l)||(i.minlength=l),Xy(l)}),ag(),a0(),Tl(15,`po-number`,12),ww(`ngModelChange`,function(l){return Ky(s),uN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),ag(),a0(),Tl(16,`po-checkbox-group`,13),ww(`ngModelChange`,function(l){return Ky(s),uN(i.properties,l)||(i.properties=l),Xy(l)}),ag(),a0(),Tl(17,`po-radio-group`,14),ww(`ngModelChange`,function(l){return Ky(s),uN(i.size,l)||(i.size=l),Xy(l)}),ag(),a0(),Tl(18,`div`,2)(19,`po-button`,15),ht(`p-click`,function(){return i.restore()}),ag()()()}r&2&&(Ew(`ngModel`,i.textarea),nw(`p-helper`,i.helperText)(`p-disabled`,i.properties.includes(`disabled`))(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-field-error-message`,i.fieldErrorMessage)(`p-show-required`,i.properties.includes(`showRequired`))(`p-rows`,i.rows)(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),l0(),jp(3),nw(`p-value`,i.textarea),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.fieldErrorMessage),l0(),jp(),Ew(`ngModel`,i.rows),l0(),jp(),Ew(`ngModel`,i.minlength),l0(),jp(),Ew(`ngModel`,i.maxlength),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,ube,L0e,vbe,ybe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Textarea Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-textarea-labs/sample-po-textarea-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-textarea
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-textarea-labs/sample-po-textarea-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-textarea-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return a})();var Fe=[`formEmail`];function Ve(a,Me){if(a&1&&(Tl(0,`div`)(1,`div`,8),Gl(2,`po-info`,13),ag(),Gl(3,`po-divider`),ag()),a&2){let m=Fx();jp(2),nw(`p-value`,m.cc)}}var Se=(()=>{class a{formEmail;poModal;cc=``;emailText=``;from=``;subject=``;to=``;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email`]],viewQuery:function(r,i){if(r&1&&Yl(Fe,7)(vr,7),r&2){let s;lo(s=uo())&&(i.formEmail=s.first),lo(s=uo())&&(i.poModal=s.first)}},standalone:!1,decls:19,vars:12,consts:[[`formEmail`,`ngForm`],[`p-title`,`Send email`,3,`p-actions`],[`name`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`name`,`emailText`,`p-label`,`E-mail`,`p-required`,``,`p-rows`,`8`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`po-page-default`,1)(1,`form`,null,0)(3,`po-email`,2),ww(`ngModelChange`,function(l){return Ky(s),uN(i.from,l)||(i.from=l),Xy(l)}),ag(),a0(),Tl(4,`po-email`,3),ww(`ngModelChange`,function(l){return Ky(s),uN(i.to,l)||(i.to=l),Xy(l)}),ag(),a0(),Tl(5,`po-email`,4),ww(`ngModelChange`,function(l){return Ky(s),uN(i.cc,l)||(i.cc=l),Xy(l)}),ag(),a0(),Tl(6,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(s),uN(i.subject,l)||(i.subject=l),Xy(l)}),ag(),a0(),Tl(7,`po-textarea`,6),ww(`ngModelChange`,function(l){return Ky(s),uN(i.emailText,l)||(i.emailText=l),Xy(l)}),ag(),a0(),ag()(),Tl(8,`po-modal`,7)(9,`div`,8),Gl(10,`po-info`,9)(11,`po-info`,10),ag(),Gl(12,`po-divider`),_x(13,Ve,4,1,`div`),Tl(14,`div`,8),Gl(15,`po-info`,11),ag(),Gl(16,`po-divider`),Tl(17,`div`,8)(18,`po-textarea`,12),ww(`ngModelChange`,function(l){return Ky(s),uN(i.emailText,l)||(i.emailText=l),Xy(l)}),ag(),a0(),ag()()}r&2&&(nw(`p-actions`,i.getPageAction()),jp(3),Ew(`ngModel`,i.from),l0(),jp(),Ew(`ngModel`,i.to),l0(),jp(),Ew(`ngModel`,i.cc),l0(),jp(),Ew(`ngModel`,i.subject),l0(),jp(),Ew(`ngModel`,i.emailText),l0(),jp(),nw(`p-primary-action`,i.primaryAction),jp(2),nw(`p-value`,i.from),jp(),nw(`p-value`,i.to),jp(2),Dx(i.cc!==``?13:-1),jp(2),nw(`p-value`,i.subject),jp(3),Ew(`ngModel`,i.emailText),l0())},dependencies:[yY,gY,mY,Ak,Tk,Xy$1,qH,iU,vbe,ybe,vr,S8e],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Textarea - Email`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-textarea-email/sample-po-textarea-email.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-textarea-email/sample-po-textarea-email.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-textarea-email`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,We,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return a})();function je(a,Me){if(a&1&&(Tl(0,`div`)(1,`div`,8),Gl(2,`po-info`,13),ag(),Gl(3,`po-divider`),ag()),a&2){let m=Fx();jp(2),nw(`p-value`,m.formEmail.get(`cc`).value)}}var Ce=(()=>{class a{formBuilder=f(EY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:`Ok`};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,um.required],to:[null,um.required],emailText:[null,um.required],subject:[null,um.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:`Send`,action:this.send.bind(this),disabled:m},{label:`Clean`,action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email-reactive-form`]],viewQuery:function(r,i){if(r&1&&Yl(vr,7),r&2){let s;lo(s=uo())&&(i.poModal=s.first)}},standalone:!1,decls:18,vars:8,consts:[[`p-title`,`Send email`,3,`p-actions`],[3,`formGroup`],[`name`,`from`,`formControlName`,`from`,`p-clean`,``,`p-label`,`From`,`p-required`,``,1,`po-sm-12`],[`name`,`to`,`formControlName`,`to`,`p-clean`,``,`p-label`,`To`,`p-required`,``,1,`po-sm-12`],[`name`,`cc`,`formControlName`,`cc`,`p-clean`,``,`p-label`,`CC`,1,`po-sm-12`],[`name`,`subject`,`formControlName`,`subject`,`p-clean`,``,`p-label`,`Subject`,`p-required`,``,1,`po-sm-12`],[`name`,`emailText`,`formControlName`,`emailText`,`p-label`,`E-mail`,`p-rows`,`8`,`p-required`,``,1,`po-sm-12`],[`p-title`,`Email successfully sent`,3,`p-primary-action`],[1,`po-row`],[`p-label`,`From:`,1,`po-md-6`,3,`p-value`],[`p-label`,`To:`,1,`po-md-6`,3,`p-value`],[`p-label`,`Subject:`,1,`po-md-12`,3,`p-value`],[`name`,`text`,`p-label`,`E-mail`,`p-readonly`,``,`p-required`,``,`p-rows`,`6`,1,`po-md-12`,3,`ngModel`],[`p-label`,`CC:`,1,`po-md-12`,3,`p-value`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`form`,1),Gl(2,`po-email`,2),a0(),Gl(3,`po-email`,3),a0(),Gl(4,`po-email`,4),a0(),Gl(5,`po-input`,5),a0(),Gl(6,`po-textarea`,6),a0(),ag()(),Tl(7,`po-modal`,7)(8,`div`,8),Gl(9,`po-info`,9)(10,`po-info`,10),ag(),Gl(11,`po-divider`),_x(12,je,4,1,`div`),Tl(13,`div`,8),Gl(14,`po-info`,11),ag(),Gl(15,`po-divider`),Tl(16,`div`,8),Gl(17,`po-textarea`,12),a0(),ag()()),r&2&&(nw(`p-actions`,i.getPageAction()),jp(),nw(`formGroup`,i.formEmail),jp(),l0(),jp(),l0(),jp(),l0(),jp(),l0(),jp(),l0(),jp(),nw(`p-primary-action`,i.primaryAction),jp(2),nw(`p-value`,i.formEmail.get(`from`).value),jp(),nw(`p-value`,i.formEmail.get(`to`).value),jp(2),Dx(i.formEmail.get(`cc`).value?12:-1),jp(2),nw(`p-value`,i.formEmail.get(`subject`).value),jp(3),nw(`ngModel`,i.formEmail.get(`emailText`).value),l0())},dependencies:[yY,gY,mY,Ak,jk,Lk,Xy$1,qH,iU,vbe,ybe,vr,S8e],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-email-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Textarea - Email Reactive Form`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-textarea-email-reactive-form`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ce],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-textarea-doc`]],standalone:!1,decls:902,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoTextareaComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),ag(),Tl(24,`p`),cN(25,`Importante:`),ag(),Tl(26,`ul`)(27,`li`),cN(28,`A propriedade `),Tl(29,`code`),cN(30,`name`),ag(),cN(31,` é obrigatória para que o formulário e o `),Tl(32,`code`),cN(33,`model`),ag(),cN(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Tl(35,`em`),cN(36,`Angular`),ag(),cN(37,`, onde será necessário informar o atributo `),Tl(38,`code`),cN(39,`name`),ag(),cN(40,` ou o atributo `),Tl(41,`code`),cN(42,`[ngModelOptions]="{standalone: true}"`),ag(),cN(43,`, por exemplo:`),ag()(),Tl(44,`pre`)(45,`code`),cN(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),ag()(),Tl(47,`h4`),cN(48,`Acessibilidade tratada no componente`),ag(),Tl(49,`p`),cN(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas. São elas:`),ag(),Tl(51,`ul`)(52,`li`),cN(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Tl(54,`a`,6),cN(55,`WCAG 4.1.2: Name, Role, Value`),ag()(),Tl(56,`li`),cN(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Tl(58,`a`,7),cN(59,`WCAG 2.4.12: Focus Appearance)`),ag()(),Tl(60,`li`),cN(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Tl(62,`a`,8),cN(63,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),ag()()(),Tl(64,`h4`),cN(65,`Tokens customizáveis`),ag(),Tl(66,`p`),cN(67,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(68,`blockquote`)(69,`p`),cN(70,`Para maiores informações, acesse o guia `),Tl(71,`a`,9),cN(72,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(73,`.`),ag()(),Tl(74,`table`)(75,`thead`)(76,`tr`)(77,`th`),cN(78,`Propriedade`),ag(),Tl(79,`th`),cN(80,`Descrição`),ag(),Tl(81,`th`),cN(82,`Valor Padrão`),ag()()(),Tl(83,`tbody`)(84,`tr`)(85,`td`)(86,`strong`),cN(87,`Default Values`),ag()(),Gl(88,`td`)(89,`td`),ag(),Tl(90,`tr`)(91,`td`)(92,`code`),cN(93,`--font-family`),ag()(),Tl(94,`td`),cN(95,`Família tipográfica usada`),ag(),Tl(96,`td`)(97,`code`),cN(98,`var(--font-family-theme)`),ag()()(),Tl(99,`tr`)(100,`td`)(101,`code`),cN(102,`--font-size`),ag()(),Tl(103,`td`),cN(104,`Tamanho da fonte`),ag(),Tl(105,`td`)(106,`code`),cN(107,`var(--font-size-default)`),ag()()(),Tl(108,`tr`)(109,`td`)(110,`code`),cN(111,`--text-color-placeholder`),ag()(),Tl(112,`td`),cN(113,`Cor do texto placeholder`),ag(),Tl(114,`td`)(115,`code`),cN(116,`var(--color-neutral-light-30)`),ag()()(),Tl(117,`tr`)(118,`td`)(119,`code`),cN(120,`--color`),ag()(),Tl(121,`td`),cN(122,`Cor pincipal do campo`),ag(),Tl(123,`td`)(124,`code`),cN(125,`var(--color-neutral-dark-70)`),ag()()(),Tl(126,`tr`)(127,`td`)(128,`code`),cN(129,`--background`),ag()(),Tl(130,`td`),cN(131,`Cor de background`),ag(),Tl(132,`td`)(133,`code`),cN(134,`var(--color-neutral-light-05)`),ag()()(),Tl(135,`tr`)(136,`td`)(137,`code`),cN(138,`--field-container-title-justify`),ag()(),Tl(139,`td`),cN(140,`Alinhamento horizontal do título (`),Tl(141,`code`),cN(142,`justify-content`),ag(),cN(143,`)`),ag(),Tl(144,`td`)(145,`code`),cN(146,`space-between`),ag()()(),Tl(147,`tr`)(148,`td`)(149,`code`),cN(150,`--field-container-title-flex`),ag()(),Tl(151,`td`),cN(152,`Flex do título (`),Tl(153,`code`),cN(154,`flex`),ag(),cN(155,`)`),ag(),Tl(156,`td`)(157,`code`),cN(158,`1 auto`),ag()()()()()(),Tl(159,`div`,10)(160,`h4`,11),cN(161,`Seletor`),ag(),Tl(162,`pre`,12),cN(163,`<po-textarea
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
`),ag()(),Tl(164,`h4`,13),cN(165,`Propriedades`),ag(),Tl(166,`table`,14)(167,`tr`,15)(168,`th`,16),cN(169,`Nome`),ag(),Tl(170,`th`,16),cN(171,`Tipo`),ag(),Tl(172,`th`,16),cN(173,`Padrão`),ag(),Tl(174,`th`,16),cN(175,`Descrição`),ag()(),Tl(176,`tr`,17)(177,`td`,18)(178,`div`,19)(179,`span`,20),cN(180,` (p-additional-help)`),Gl(181,`br`),ag()(),Tl(182,`div`,21),cN(183,`Deprecated`),ag()(),Tl(184,`td`,22)(185,`code`,23),cN(186,`EventEmitter`),ag()(),Tl(187,`td`,24),cN(188,`-`),ag(),Tl(189,`td`,25)(190,`em`)(191,`strong`),cN(192,`(opcional)`),ag()(),Tl(193,`p`),cN(194,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(195,`blockquote`)(196,`p`),cN(197,`Essa propriedade está `),Tl(198,`strong`),cN(199,`depreciada`),ag(),cN(200,` e será removida na versão `),Tl(201,`code`),cN(202,`23.x.x`),ag(),cN(203,`. Recomendamos utilizar a propriedade `),Tl(204,`code`),cN(205,`p-helper`),ag(),cN(206,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(207,`tr`,17)(208,`td`,18)(209,`div`,26)(210,`span`,27),cN(211,` p-additional-help-tooltip`),Gl(212,`br`),ag()(),Tl(213,`div`,21),cN(214,`Deprecated`),ag()(),Tl(215,`td`,22)(216,`code`,28),cN(217,`string`),ag()(),Tl(218,`td`,24),cN(219,`-`),ag(),Tl(220,`td`,25)(221,`em`)(222,`strong`),cN(223,`(opcional)`),ag()(),Tl(224,`p`),cN(225,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(226,`code`),cN(227,`po-helper`),ag(),cN(228,`.
`),Tl(229,`strong`),cN(230,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(231,`blockquote`)(232,`p`),cN(233,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(234,`blockquote`)(235,`p`),cN(236,`Essa propriedade está `),Tl(237,`strong`),cN(238,`depreciada`),ag(),cN(239,` e será removida na versão `),Tl(240,`code`),cN(241,`23.x.x`),ag(),cN(242,`. Recomendamos utilizar a propriedade `),Tl(243,`code`),cN(244,`p-helper`),ag(),cN(245,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(246,`tr`,17)(247,`td`,18)(248,`div`,26)(249,`span`,27),cN(250,` p-append-in-body`),Gl(251,`br`),ag()()(),Tl(252,`td`,22)(253,`code`,29),cN(254,`boolean`),ag()(),Tl(255,`td`,24)(256,`p`)(257,`code`),cN(258,`false`),ag()()(),Tl(259,`td`,25)(260,`em`)(261,`strong`),cN(262,`(opcional)`),ag()(),Tl(263,`p`),cN(264,`Define que o popover (`),Tl(265,`code`),cN(266,`p-helper`),ag(),cN(267,` e/ou `),Tl(268,`code`),cN(269,`p-error-limit`),ag(),cN(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(271,`blockquote`)(272,`p`),cN(273,`Quando utilizado com `),Tl(274,`code`),cN(275,`p-helper`),ag(),cN(276,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(277,`tr`,17)(278,`td`,18)(279,`div`,26)(280,`span`,27),cN(281,` p-auto-focus`),Gl(282,`br`),ag()()(),Tl(283,`td`,22)(284,`code`,29),cN(285,`boolean`),ag()(),Tl(286,`td`,24)(287,`p`)(288,`code`),cN(289,`false`),ag()()(),Tl(290,`td`,25)(291,`em`)(292,`strong`),cN(293,`(opcional)`),ag()(),Tl(294,`p`),cN(295,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(296,`blockquote`)(297,`p`),cN(298,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(299,`tr`,17)(300,`td`,18)(301,`div`,19)(302,`span`,20),cN(303,` (p-blur)`),Gl(304,`br`),ag()()(),Tl(305,`td`,22)(306,`code`,23),cN(307,`EventEmitter`),ag()(),Tl(308,`td`,24),cN(309,`-`),ag(),Tl(310,`td`,25)(311,`em`)(312,`strong`),cN(313,`(opcional)`),ag()(),Tl(314,`p`),cN(315,`Evento disparado ao sair do campo.`),ag()()(),Tl(316,`tr`,17)(317,`td`,18)(318,`div`,19)(319,`span`,20),cN(320,` (p-change)`),Gl(321,`br`),ag()()(),Tl(322,`td`,22)(323,`code`,23),cN(324,`EventEmitter`),ag()(),Tl(325,`td`,24),cN(326,`-`),ag(),Tl(327,`td`,25)(328,`em`)(329,`strong`),cN(330,`(opcional)`),ag()(),Tl(331,`p`),cN(332,`Evento disparado ao alterar valor e deixar o campo.`),ag()()(),Tl(333,`tr`,17)(334,`td`,18)(335,`div`,19)(336,`span`,20),cN(337,` (p-change-model)`),Gl(338,`br`),ag()()(),Tl(339,`td`,22)(340,`code`,23),cN(341,`EventEmitter`),ag()(),Tl(342,`td`,24),cN(343,`-`),ag(),Tl(344,`td`,25)(345,`em`)(346,`strong`),cN(347,`(opcional)`),ag()(),Tl(348,`p`),cN(349,`Evento disparado ao alterar valor do model.`),ag()()(),Tl(350,`tr`,17)(351,`td`,18)(352,`div`,26)(353,`span`,27),cN(354,` p-compact-label`),Gl(355,`br`),ag()()(),Tl(356,`td`,22)(357,`code`,29),cN(358,`boolean`),ag()(),Tl(359,`td`,24)(360,`p`)(361,`code`),cN(362,`false`),ag()()(),Tl(363,`td`,25)(364,`em`)(365,`strong`),cN(366,`(opcional)`),ag()(),Tl(367,`p`),cN(368,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(369,`p`),cN(370,`Quando habilitado (`),Tl(371,`code`),cN(372,`true`),ag(),cN(373,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(374,`ul`)(375,`li`)(376,`code`),cN(377,`po-label`),ag()(),Tl(378,`li`)(379,`code`),cN(380,`p-requirement (showRequired)`),ag()(),Tl(381,`li`)(382,`code`),cN(383,`po-helper`),ag()()(),Tl(384,`p`),cN(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(386,`p`),cN(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(388,`ul`)(389,`li`)(390,`code`),cN(391,`--field-container-title-justify`),ag()(),Tl(392,`li`)(393,`code`),cN(394,`--field-container-title-flex`),ag()()(),Tl(395,`p`),cN(396,`Exemplo:`),ag(),Tl(397,`pre`)(398,`code`),cN(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(400,`p`),cN(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(402,`tr`,17)(403,`td`,18)(404,`div`,26)(405,`span`,27),cN(406,` p-disabled`),Gl(407,`br`),ag()()(),Tl(408,`td`,22)(409,`code`,29),cN(410,`boolean`),ag()(),Tl(411,`td`,24)(412,`p`)(413,`code`),cN(414,`false`),ag()()(),Tl(415,`td`,25)(416,`em`)(417,`strong`),cN(418,`(opcional)`),ag()(),Tl(419,`p`),cN(420,`Indica que o campo será desabilitado.`),ag()()(),Tl(421,`tr`,17)(422,`td`,18)(423,`div`,19)(424,`span`,20),cN(425,` (p-enter)`),Gl(426,`br`),ag()()(),Tl(427,`td`,22)(428,`code`,23),cN(429,`EventEmitter`),ag()(),Tl(430,`td`,24),cN(431,`-`),ag(),Tl(432,`td`,25)(433,`em`)(434,`strong`),cN(435,`(opcional)`),ag()(),Tl(436,`p`),cN(437,`Evento disparado ao entrar do campo.`),ag()()(),Tl(438,`tr`,17)(439,`td`,18)(440,`div`,26)(441,`span`,27),cN(442,` p-error-limit`),Gl(443,`br`),ag()()(),Tl(444,`td`,22)(445,`code`,29),cN(446,`boolean`),ag()(),Tl(447,`td`,24)(448,`p`)(449,`code`),cN(450,`false`),ag()()(),Tl(451,`td`,25)(452,`em`)(453,`strong`),cN(454,`(opcional)`),ag()(),Tl(455,`p`),cN(456,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(457,`blockquote`)(458,`p`),cN(459,`Caso essa propriedade seja definida como `),Tl(460,`code`),cN(461,`true`),ag(),cN(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(463,`tr`,17)(464,`td`,18)(465,`div`,26)(466,`span`,27),cN(467,` p-field-error-message`),Gl(468,`br`),ag()()(),Tl(469,`td`,22)(470,`code`,28),cN(471,`string`),ag()(),Tl(472,`td`,24),cN(473,`-`),ag(),Tl(474,`td`,25)(475,`em`)(476,`strong`),cN(477,`(opcional)`),ag()(),Tl(478,`p`),cN(479,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),ag(),Tl(480,`blockquote`)(481,`p`),cN(482,`Necessário que a propriedade `),Tl(483,`code`),cN(484,`p-required`),ag(),cN(485,` esteja habilitada.`),ag()()()(),Tl(486,`tr`,17)(487,`td`,18)(488,`div`,26)(489,`span`,27),cN(490,` p-help`),Gl(491,`br`),ag()()(),Tl(492,`td`,22)(493,`code`,28),cN(494,`string`),ag()(),Tl(495,`td`,24),cN(496,`-`),ag(),Tl(497,`td`,25)(498,`em`)(499,`strong`),cN(500,`(opcional)`),ag()(),Tl(501,`p`),cN(502,`Texto de apoio do campo.`),ag()()(),Tl(503,`tr`,17)(504,`td`,18)(505,`div`,19)(506,`span`,20),cN(507,` (p-keydown)`),Gl(508,`br`),ag()()(),Tl(509,`td`,22)(510,`code`,23),cN(511,`EventEmitter`),ag()(),Tl(512,`td`,24),cN(513,`-`),ag(),Tl(514,`td`,25)(515,`em`)(516,`strong`),cN(517,`(opcional)`),ag()(),Tl(518,`p`),cN(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(520,`code`),cN(521,`KeyboardEvent`),ag(),cN(522,` com informações sobre a tecla.`),ag()()(),Tl(523,`tr`,17)(524,`td`,18)(525,`div`,26)(526,`span`,27),cN(527,` p-label`),Gl(528,`br`),ag()()(),Tl(529,`td`,22)(530,`code`,28),cN(531,`string`),ag()(),Tl(532,`td`,24),cN(533,`-`),ag(),Tl(534,`td`,25)(535,`em`)(536,`strong`),cN(537,`(opcional)`),ag()(),Tl(538,`p`),cN(539,`Label do campo.`),ag()()(),Tl(540,`tr`,17)(541,`td`,18)(542,`div`,26)(543,`span`,27),cN(544,` p-label-text-wrap`),Gl(545,`br`),ag()()(),Tl(546,`td`,22)(547,`code`,29),cN(548,`boolean`),ag()(),Tl(549,`td`,24)(550,`p`)(551,`code`),cN(552,`false`),ag()()(),Tl(553,`td`,25)(554,`em`)(555,`strong`),cN(556,`(opcional)`),ag()(),Tl(557,`p`),cN(558,`Habilita a quebra automática do texto da propriedade `),Tl(559,`code`),cN(560,`p-label`),ag(),cN(561,`. Quando `),Tl(562,`code`),cN(563,`p-label-text-wrap`),ag(),cN(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(565,`tr`,17)(566,`td`,18)(567,`div`,26)(568,`span`,27),cN(569,` p-loading`),Gl(570,`br`),ag()()(),Tl(571,`td`,22)(572,`code`,29),cN(573,`boolean`),ag()(),Tl(574,`td`,24)(575,`p`)(576,`code`),cN(577,`false`),ag()()(),Tl(578,`td`,25)(579,`em`)(580,`strong`),cN(581,`(opcional)`),ag()(),Tl(582,`p`),cN(583,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(584,`tr`,17)(585,`td`,18)(586,`div`,26)(587,`span`,27),cN(588,` p-maxlength`),Gl(589,`br`),ag()()(),Tl(590,`td`,22)(591,`code`,30),cN(592,`number`),ag()(),Tl(593,`td`,24),cN(594,`-`),ag(),Tl(595,`td`,25)(596,`em`)(597,`strong`),cN(598,`(opcional)`),ag()(),Tl(599,`p`),cN(600,`Indica a quantidade máxima de caracteres que o campo aceita.`),ag()()(),Tl(601,`tr`,17)(602,`td`,18)(603,`div`,26)(604,`span`,27),cN(605,` p-minlength`),Gl(606,`br`),ag()()(),Tl(607,`td`,22)(608,`code`,30),cN(609,`number`),ag()(),Tl(610,`td`,24),cN(611,`-`),ag(),Tl(612,`td`,25)(613,`em`)(614,`strong`),cN(615,`(opcional)`),ag()(),Tl(616,`p`),cN(617,`Indica a quantidade mínima de caracteres que o campo aceita.`),ag()()(),Tl(618,`tr`,17)(619,`td`,18)(620,`div`,26)(621,`span`,27),cN(622,` name`),Gl(623,`br`),ag()()(),Tl(624,`td`,22)(625,`code`,28),cN(626,`string`),ag()(),Tl(627,`td`,24),cN(628,`-`),ag(),Tl(629,`td`,25)(630,`p`),cN(631,`Nome e Id do componente.`),ag()()(),Tl(632,`tr`,17)(633,`td`,18)(634,`div`,26)(635,`span`,27),cN(636,` p-optional`),Gl(637,`br`),ag()()(),Tl(638,`td`,22)(639,`code`,29),cN(640,`boolean`),ag()(),Tl(641,`td`,24)(642,`p`)(643,`code`),cN(644,`false`),ag()()(),Tl(645,`td`,25)(646,`em`)(647,`strong`),cN(648,`(opcional)`),ag()(),Tl(649,`p`),cN(650,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(651,`blockquote`)(652,`p`),cN(653,`Não será exibida a indicação se:`),ag()(),Tl(654,`ul`)(655,`li`),cN(656,`O campo conter `),Tl(657,`code`),cN(658,`p-required`),ag(),cN(659,`;`),ag(),Tl(660,`li`),cN(661,`Não possuir `),Tl(662,`code`),cN(663,`p-help`),ag(),cN(664,` e/ou `),Tl(665,`code`),cN(666,`p-label`),ag(),cN(667,`.`),ag()()()(),Tl(668,`tr`,17)(669,`td`,18)(670,`div`,26)(671,`span`,27),cN(672,` p-placeholder`),Gl(673,`br`),ag()()(),Tl(674,`td`,22)(675,`code`,28),cN(676,`string`),ag()(),Tl(677,`td`,24),cN(678,`-`),ag(),Tl(679,`td`,25)(680,`p`),cN(681,`Placeholder, mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(682,`tr`,17)(683,`td`,18)(684,`div`,26)(685,`span`,27),cN(686,` p-helper`),Gl(687,`br`),ag()()(),Tl(688,`td`,22)(689,`code`,31),cN(690,`PoHelperOptions `),ag(),Tl(691,`code`,28),cN(692,` string`),ag()(),Tl(693,`td`,24),cN(694,`-`),ag(),Tl(695,`td`,25)(696,`em`)(697,`strong`),cN(698,`(opcional)`),ag()(),Tl(699,`p`),cN(700,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(701,`code`),cN(702,`p-label`),ag(),cN(703,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(704,`code`),cN(705,`p-label`),ag(),cN(706,`.`),ag(),Tl(707,`blockquote`)(708,`p`),cN(709,`Para mais informações acesse: `),Tl(710,`a`,32),cN(711,`https://po-ui.io/documentation/po-helper`),ag(),cN(712,`.`),ag()(),Tl(713,`blockquote`)(714,`p`),cN(715,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(716,`code`),cN(717,`p-additional-help-tooltip`),ag(),cN(718,` e `),Tl(719,`code`),cN(720,`p-additional-help`),ag(),cN(721,`) será ignorado.`),ag()()()(),Tl(722,`tr`,17)(723,`td`,18)(724,`div`,26)(725,`span`,27),cN(726,` p-readonly`),Gl(727,`br`),ag()()(),Tl(728,`td`,22)(729,`code`,29),cN(730,`boolean`),ag()(),Tl(731,`td`,24)(732,`p`)(733,`code`),cN(734,`false`),ag()()(),Tl(735,`td`,25)(736,`em`)(737,`strong`),cN(738,`(opcional)`),ag()(),Tl(739,`p`),cN(740,`Indica que o campo será somente leitura.`),ag()()(),Tl(741,`tr`,17)(742,`td`,18)(743,`div`,26)(744,`span`,27),cN(745,` p-required`),Gl(746,`br`),ag()()(),Tl(747,`td`,22)(748,`code`,29),cN(749,`boolean`),ag()(),Tl(750,`td`,24)(751,`p`)(752,`code`),cN(753,`false`),ag()()(),Tl(754,`td`,25)(755,`em`)(756,`strong`),cN(757,`(opcional)`),ag()(),Tl(758,`p`),cN(759,`Define que o campo será obrigatório.`),ag(),Tl(760,`blockquote`)(761,`p`),cN(762,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(763,`code`),cN(764,`(p-disabled)`),ag(),cN(765,`.`),ag()()()(),Tl(766,`tr`,17)(767,`td`,18)(768,`div`,26)(769,`span`,27),cN(770,` p-rows`),Gl(771,`br`),ag()()(),Tl(772,`td`,22)(773,`code`,30),cN(774,`number`),ag()(),Tl(775,`td`,24)(776,`p`)(777,`code`),cN(778,`3`),ag()()(),Tl(779,`td`,25)(780,`em`)(781,`strong`),cN(782,`(opcional)`),ag()(),Tl(783,`p`),cN(784,`Indica a quantidade de linhas que serão exibidas.`),ag()()(),Tl(785,`tr`,17)(786,`td`,18)(787,`div`,26)(788,`span`,27),cN(789,` p-show-required`),Gl(790,`br`),ag()()(),Tl(791,`td`,22)(792,`code`,29),cN(793,`boolean`),ag()(),Tl(794,`td`,24),cN(795,`-`),ag(),Tl(796,`td`,25)(797,`p`),cN(798,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(799,`blockquote`)(800,`p`),cN(801,`Não será exibida a indicação se:`),ag()(),Tl(802,`ul`)(803,`li`),cN(804,`Não possuir `),Tl(805,`code`),cN(806,`p-help`),ag(),cN(807,` e/ou `),Tl(808,`code`),cN(809,`p-label`),ag(),cN(810,`.`),ag()()()(),Tl(811,`tr`,17)(812,`td`,18)(813,`div`,26)(814,`span`,27),cN(815,` p-size`),Gl(816,`br`),ag()()(),Tl(817,`td`,22)(818,`code`,28),cN(819,`string`),ag()(),Tl(820,`td`,24)(821,`p`)(822,`code`),cN(823,`medium`),ag()()(),Tl(824,`td`,25)(825,`em`)(826,`strong`),cN(827,`(opcional)`),ag()(),Tl(828,`p`),cN(829,`Define o tamanho do componente:`),ag(),Tl(830,`ul`)(831,`li`)(832,`code`),cN(833,`small`),ag(),cN(834,` (disponível apenas para acessibilidade AA)`),ag(),Tl(835,`li`)(836,`code`),cN(837,`medium`),ag()()(),Tl(838,`blockquote`)(839,`p`),cN(840,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(841,`code`),cN(842,`medium`),ag(),cN(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(844,`a`,33),cN(845,`po-theme`),ag(),cN(846,`.`),ag()()()()(),Tl(847,`h3`,13),cN(848,`Métodos`),ag(),Tl(849,`table`,34)(850,`tr`,17)(851,`th`,35)(852,`div`,26)(853,`h4`)(854,`span`,27),cN(855,` focus `),ag()()()()(),Tl(856,`tr`,25)(857,`td`,25)(858,`p`),cN(859,`Função que atribui foco ao componente.`),ag(),Tl(860,`p`),cN(861,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(862,`pre`)(863,`code`),cN(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),ag()()()()(),Gl(865,`br`),Tl(866,`table`,34)(867,`tr`,17)(868,`th`,35)(869,`div`,26)(870,`h4`)(871,`span`,27),cN(872,` showAdditionalHelp `),ag()()()()(),Tl(873,`tr`,25)(874,`td`,25)(875,`p`),cN(876,`Método que exibe `),Tl(877,`code`),cN(878,`p-helper`),ag(),cN(879,` ou executa a ação definida em `),Tl(880,`code`),cN(881,`p-helper{eventOnClick}`),ag(),cN(882,` ou em `),Tl(883,`code`),cN(884,`p-additionalHelp`),ag(),cN(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(886,`code`),cN(887,`p-keydown`),ag(),cN(888,`.`),ag(),Tl(889,`blockquote`)(890,`p`),cN(891,`Exibe ou oculta o conteúdo do componente `),Tl(892,`code`),cN(893,`po-helper`),ag(),cN(894,` quando o componente estiver com foco.`),ag()(),Tl(895,`pre`)(896,`code`),cN(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),ag()(),Tl(898,`pre`)(899,`code`),cN(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(901,`br`),ag())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Re=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Textarea`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-textarea-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-textarea-basic-view`)(6,`sample-po-textarea-labs-view`)(7,`sample-po-textarea-email-view`)(8,`sample-po-textarea-email-reactive-form-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ge,he,fe,ve,Te],encapsulation:2,changeDetection:1})}return a})()}];var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[bL.forChild(Re),bL]})}return a})();var yt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,we]})}return a})();export{yt as DocPoTextareaModule};