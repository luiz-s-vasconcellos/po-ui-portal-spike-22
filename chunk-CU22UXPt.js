import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,cM as oY,cN as lm,b5 as qhe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Nhe,c8 as Sde,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,cz as Mz,b6 as Yo,a3 as aNe,aq as fx,at as hx,av as Yl,aw as uo,ax as fo,cQ as Nk,cR as Ak,aD as Ky,aT as rN,aE as Xy,aA as Rx}from'./main-LUSFEIN7.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&Gl(0,"po-textarea",0);},dependencies:[qhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Textarea Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,_e,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ee],encapsulation:2})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Cx();Tl(0,"po-textarea",1),Ew("ngModelChange",function(l){return Ky(s),rN(i.textarea,l)||(i.textarea=l),Xy(l)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(l){return Ky(s),rN(i.label,l)||(i.label=l),Xy(l)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(l){return Ky(s),rN(i.help,l)||(i.help=l),Xy(l)}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(l){return Ky(s),rN(i.helperText,l)||(i.helperText=l),Xy(l)}),sg(),t0(),Tl(11,"po-input",8),Ew("ngModelChange",function(l){return Ky(s),rN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(l){return Ky(s),rN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Xy(l)}),sg(),t0(),Tl(13,"po-number",10),Ew("ngModelChange",function(l){return Ky(s),rN(i.rows,l)||(i.rows=l),Xy(l)}),sg(),t0(),Tl(14,"po-number",11),Ew("ngModelChange",function(l){return Ky(s),rN(i.minlength,l)||(i.minlength=l),Xy(l)}),sg(),t0(),Tl(15,"po-number",12),Ew("ngModelChange",function(l){return Ky(s),rN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),sg(),t0(),Tl(16,"po-checkbox-group",13),Ew("ngModelChange",function(l){return Ky(s),rN(i.properties,l)||(i.properties=l),Xy(l)}),sg(),t0(),Tl(17,"po-radio-group",14),Ew("ngModelChange",function(l){return Ky(s),rN(i.size,l)||(i.size=l),Xy(l)}),sg(),t0(),Tl(18,"div",2)(19,"po-button",15),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.textarea),tw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),r0(),Vp(3),tw("p-value",i.textarea),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.help),r0(),Vp(),Dw("ngModel",i.helperText),r0(),Vp(),Dw("ngModel",i.placeholder),r0(),Vp(),Dw("ngModel",i.fieldErrorMessage),r0(),Vp(),Dw("ngModel",i.rows),r0(),Vp(),Dw("ngModel",i.minlength),r0(),Vp(),Dw("ngModel",i.maxlength),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Nhe,Sde,qhe,$he],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Textarea Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-textarea
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
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ke,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,be],encapsulation:2})}return a})();var Fe=["formEmail"];function Ve(a,Me){if(a&1&&(Tl(0,"div")(1,"div",8),Gl(2,"po-info",13),sg(),Gl(3,"po-divider"),sg()),a&2){let m=Rx();Vp(2),tw("p-value",m.cc);}}var Se=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&Yl(Fe,7)(Yo,7),r&2){let s;uo(s=fo())&&(i.formEmail=s.first),uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=Cx();Tl(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),Ew("ngModelChange",function(l){return Ky(s),rN(i.from,l)||(i.from=l),Xy(l)}),sg(),t0(),Tl(4,"po-email",3),Ew("ngModelChange",function(l){return Ky(s),rN(i.to,l)||(i.to=l),Xy(l)}),sg(),t0(),Tl(5,"po-email",4),Ew("ngModelChange",function(l){return Ky(s),rN(i.cc,l)||(i.cc=l),Xy(l)}),sg(),t0(),Tl(6,"po-input",5),Ew("ngModelChange",function(l){return Ky(s),rN(i.subject,l)||(i.subject=l),Xy(l)}),sg(),t0(),Tl(7,"po-textarea",6),Ew("ngModelChange",function(l){return Ky(s),rN(i.emailText,l)||(i.emailText=l),Xy(l)}),sg(),t0(),sg()(),Tl(8,"po-modal",7)(9,"div",8),Gl(10,"po-info",9)(11,"po-info",10),sg(),Gl(12,"po-divider"),fx(13,Ve,4,1,"div"),Tl(14,"div",8),Gl(15,"po-info",11),sg(),Gl(16,"po-divider"),Tl(17,"div",8)(18,"po-textarea",12),Ew("ngModelChange",function(l){return Ky(s),rN(i.emailText,l)||(i.emailText=l),Xy(l)}),sg(),t0(),sg()();}r&2&&(tw("p-actions",i.getPageAction()),Vp(3),Dw("ngModel",i.from),r0(),Vp(),Dw("ngModel",i.to),r0(),Vp(),Dw("ngModel",i.cc),r0(),Vp(),Dw("ngModel",i.subject),r0(),Vp(),Dw("ngModel",i.emailText),r0(),Vp(),tw("p-primary-action",i.primaryAction),Vp(2),tw("p-value",i.from),Vp(),tw("p-value",i.to),Vp(2),hx(i.cc!==""?13:-1),Vp(2),tw("p-value",i.subject),Vp(3),Dw("ngModel",i.emailText),r0());},dependencies:[nY,J9,eY,Ck,Dk,mv,Mz,O3,qhe,$he,Yo,aNe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Textarea - Email"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-email"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,We,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Se],encapsulation:2})}return a})();function je(a,Me){if(a&1&&(Tl(0,"div")(1,"div",8),Gl(2,"po-info",13),sg(),Gl(3,"po-divider"),sg()),a&2){let m=Rx();Vp(2),tw("p-value",m.formEmail.get("cc").value);}}var Ce=(()=>{class a{formBuilder=f(oY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,lm.required],to:[null,lm.required],emailText:[null,lm.required],subject:[null,lm.required]});}getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&Yl(Yo,7),r&2){let s;uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"form",1),Gl(2,"po-email",2),t0(),Gl(3,"po-email",3),t0(),Gl(4,"po-email",4),t0(),Gl(5,"po-input",5),t0(),Gl(6,"po-textarea",6),t0(),sg()(),Tl(7,"po-modal",7)(8,"div",8),Gl(9,"po-info",9)(10,"po-info",10),sg(),Gl(11,"po-divider"),fx(12,je,4,1,"div"),Tl(13,"div",8),Gl(14,"po-info",11),sg(),Gl(15,"po-divider"),Tl(16,"div",8),Gl(17,"po-textarea",12),t0(),sg()()),r&2&&(tw("p-actions",i.getPageAction()),Vp(),tw("formGroup",i.formEmail),Vp(),r0(),Vp(),r0(),Vp(),r0(),Vp(),r0(),Vp(),r0(),Vp(),tw("p-primary-action",i.primaryAction),Vp(2),tw("p-value",i.formEmail.get("from").value),Vp(),tw("p-value",i.formEmail.get("to").value),Vp(2),hx(i.formEmail.get("cc").value?12:-1),Vp(2),tw("p-value",i.formEmail.get("subject").value),Vp(3),tw("ngModel",i.formEmail.get("emailText").value),r0());},dependencies:[nY,J9,eY,Ck,Nk,Ak,mv,Mz,O3,qhe,$he,Yo,aNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Textarea - Email Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-email-reactive-form"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ce],encapsulation:2})}return a})();var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoTextareaComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),sg(),Tl(24,"p"),tN(25,"Importante:"),sg(),Tl(26,"ul")(27,"li"),tN(28,"A propriedade "),Tl(29,"code"),tN(30,"name"),sg(),tN(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),Tl(32,"code"),tN(33,"model"),sg(),tN(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Tl(35,"em"),tN(36,"Angular"),sg(),tN(37,", onde ser\xE1 necess\xE1rio informar o atributo "),Tl(38,"code"),tN(39,"name"),sg(),tN(40," ou o atributo "),Tl(41,"code"),tN(42,'[ngModelOptions]="{standalone: true}"'),sg(),tN(43,", por exemplo:"),sg()(),Tl(44,"pre")(45,"code"),tN(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),sg()(),Tl(47,"h4"),tN(48,"Acessibilidade tratada no componente"),sg(),Tl(49,"p"),tN(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),sg(),Tl(51,"ul")(52,"li"),tN(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Tl(54,"a",6),tN(55,"WCAG 4.1.2: Name, Role, Value"),sg()(),Tl(56,"li"),tN(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Tl(58,"a",7),tN(59,"WCAG 2.4.12: Focus Appearance)"),sg()(),Tl(60,"li"),tN(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Tl(62,"a",8),tN(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),sg()()(),Tl(64,"h4"),tN(65,"Tokens customiz\xE1veis"),sg(),Tl(66,"p"),tN(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(68,"blockquote")(69,"p"),tN(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(71,"a",9),tN(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(73,"."),sg()(),Tl(74,"table")(75,"thead")(76,"tr")(77,"th"),tN(78,"Propriedade"),sg(),Tl(79,"th"),tN(80,"Descri\xE7\xE3o"),sg(),Tl(81,"th"),tN(82,"Valor Padr\xE3o"),sg()()(),Tl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),tN(87,"Default Values"),sg()(),Gl(88,"td")(89,"td"),sg(),Tl(90,"tr")(91,"td")(92,"code"),tN(93,"--font-family"),sg()(),Tl(94,"td"),tN(95,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(96,"td")(97,"code"),tN(98,"var(--font-family-theme)"),sg()()(),Tl(99,"tr")(100,"td")(101,"code"),tN(102,"--font-size"),sg()(),Tl(103,"td"),tN(104,"Tamanho da fonte"),sg(),Tl(105,"td")(106,"code"),tN(107,"var(--font-size-default)"),sg()()(),Tl(108,"tr")(109,"td")(110,"code"),tN(111,"--text-color-placeholder"),sg()(),Tl(112,"td"),tN(113,"Cor do texto placeholder"),sg(),Tl(114,"td")(115,"code"),tN(116,"var(--color-neutral-light-30)"),sg()()(),Tl(117,"tr")(118,"td")(119,"code"),tN(120,"--color"),sg()(),Tl(121,"td"),tN(122,"Cor pincipal do campo"),sg(),Tl(123,"td")(124,"code"),tN(125,"var(--color-neutral-dark-70)"),sg()()(),Tl(126,"tr")(127,"td")(128,"code"),tN(129,"--background"),sg()(),Tl(130,"td"),tN(131,"Cor de background"),sg(),Tl(132,"td")(133,"code"),tN(134,"var(--color-neutral-light-05)"),sg()()(),Tl(135,"tr")(136,"td")(137,"code"),tN(138,"--field-container-title-justify"),sg()(),Tl(139,"td"),tN(140,"Alinhamento horizontal do t\xEDtulo ("),Tl(141,"code"),tN(142,"justify-content"),sg(),tN(143,")"),sg(),Tl(144,"td")(145,"code"),tN(146,"space-between"),sg()()(),Tl(147,"tr")(148,"td")(149,"code"),tN(150,"--field-container-title-flex"),sg()(),Tl(151,"td"),tN(152,"Flex do t\xEDtulo ("),Tl(153,"code"),tN(154,"flex"),sg(),tN(155,")"),sg(),Tl(156,"td")(157,"code"),tN(158,"1 auto"),sg()()()()()(),Tl(159,"div",10)(160,"h4",11),tN(161,"Seletor"),sg(),Tl(162,"pre",12),tN(163,`<po-textarea
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
`),sg()(),Tl(164,"h4",13),tN(165,"Propriedades"),sg(),Tl(166,"table",14)(167,"tr",15)(168,"th",16),tN(169,"Nome"),sg(),Tl(170,"th",16),tN(171,"Tipo"),sg(),Tl(172,"th",16),tN(173,"Padr\xE3o"),sg(),Tl(174,"th",16),tN(175,"Descri\xE7\xE3o"),sg()(),Tl(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),tN(180," (p-additional-help)"),Gl(181,"br"),sg()(),Tl(182,"div",21),tN(183,"Deprecated"),sg()(),Tl(184,"td",22)(185,"code",23),tN(186,"EventEmitter"),sg()(),Tl(187,"td",24),tN(188,"-"),sg(),Tl(189,"td",25)(190,"em")(191,"strong"),tN(192,"(opcional)"),sg()(),Tl(193,"p"),tN(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(195,"blockquote")(196,"p"),tN(197,"Essa propriedade est\xE1 "),Tl(198,"strong"),tN(199,"depreciada"),sg(),tN(200," e ser\xE1 removida na vers\xE3o "),Tl(201,"code"),tN(202,"23.x.x"),sg(),tN(203,". Recomendamos utilizar a propriedade "),Tl(204,"code"),tN(205,"p-helper"),sg(),tN(206," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),tN(211," p-additional-help-tooltip"),Gl(212,"br"),sg()(),Tl(213,"div",21),tN(214,"Deprecated"),sg()(),Tl(215,"td",22)(216,"code",28),tN(217,"string"),sg()(),Tl(218,"td",24),tN(219,"-"),sg(),Tl(220,"td",25)(221,"em")(222,"strong"),tN(223,"(opcional)"),sg()(),Tl(224,"p"),tN(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(226,"code"),tN(227,"po-helper"),sg(),tN(228,`.
`),Tl(229,"strong"),tN(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(231,"blockquote")(232,"p"),tN(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(234,"blockquote")(235,"p"),tN(236,"Essa propriedade est\xE1 "),Tl(237,"strong"),tN(238,"depreciada"),sg(),tN(239," e ser\xE1 removida na vers\xE3o "),Tl(240,"code"),tN(241,"23.x.x"),sg(),tN(242,". Recomendamos utilizar a propriedade "),Tl(243,"code"),tN(244,"p-helper"),sg(),tN(245," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),tN(250," p-append-in-body"),Gl(251,"br"),sg()()(),Tl(252,"td",22)(253,"code",29),tN(254,"boolean"),sg()(),Tl(255,"td",24)(256,"p")(257,"code"),tN(258,"false"),sg()()(),Tl(259,"td",25)(260,"em")(261,"strong"),tN(262,"(opcional)"),sg()(),Tl(263,"p"),tN(264,"Define que o popover ("),Tl(265,"code"),tN(266,"p-helper"),sg(),tN(267," e/ou "),Tl(268,"code"),tN(269,"p-error-limit"),sg(),tN(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(271,"blockquote")(272,"p"),tN(273,"Quando utilizado com "),Tl(274,"code"),tN(275,"p-helper"),sg(),tN(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),tN(281," p-auto-focus"),Gl(282,"br"),sg()()(),Tl(283,"td",22)(284,"code",29),tN(285,"boolean"),sg()(),Tl(286,"td",24)(287,"p")(288,"code"),tN(289,"false"),sg()()(),Tl(290,"td",25)(291,"em")(292,"strong"),tN(293,"(opcional)"),sg()(),Tl(294,"p"),tN(295,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(296,"blockquote")(297,"p"),tN(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),tN(303," (p-blur)"),Gl(304,"br"),sg()()(),Tl(305,"td",22)(306,"code",23),tN(307,"EventEmitter"),sg()(),Tl(308,"td",24),tN(309,"-"),sg(),Tl(310,"td",25)(311,"em")(312,"strong"),tN(313,"(opcional)"),sg()(),Tl(314,"p"),tN(315,"Evento disparado ao sair do campo."),sg()()(),Tl(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),tN(320," (p-change)"),Gl(321,"br"),sg()()(),Tl(322,"td",22)(323,"code",23),tN(324,"EventEmitter"),sg()(),Tl(325,"td",24),tN(326,"-"),sg(),Tl(327,"td",25)(328,"em")(329,"strong"),tN(330,"(opcional)"),sg()(),Tl(331,"p"),tN(332,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Tl(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),tN(337," (p-change-model)"),Gl(338,"br"),sg()()(),Tl(339,"td",22)(340,"code",23),tN(341,"EventEmitter"),sg()(),Tl(342,"td",24),tN(343,"-"),sg(),Tl(344,"td",25)(345,"em")(346,"strong"),tN(347,"(opcional)"),sg()(),Tl(348,"p"),tN(349,"Evento disparado ao alterar valor do model."),sg()()(),Tl(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),tN(354," p-compact-label"),Gl(355,"br"),sg()()(),Tl(356,"td",22)(357,"code",29),tN(358,"boolean"),sg()(),Tl(359,"td",24)(360,"p")(361,"code"),tN(362,"false"),sg()()(),Tl(363,"td",25)(364,"em")(365,"strong"),tN(366,"(opcional)"),sg()(),Tl(367,"p"),tN(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(369,"p"),tN(370,"Quando habilitado ("),Tl(371,"code"),tN(372,"true"),sg(),tN(373,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(374,"ul")(375,"li")(376,"code"),tN(377,"po-label"),sg()(),Tl(378,"li")(379,"code"),tN(380,"p-requirement (showRequired)"),sg()(),Tl(381,"li")(382,"code"),tN(383,"po-helper"),sg()()(),Tl(384,"p"),tN(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(386,"p"),tN(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(388,"ul")(389,"li")(390,"code"),tN(391,"--field-container-title-justify"),sg()(),Tl(392,"li")(393,"code"),tN(394,"--field-container-title-flex"),sg()()(),Tl(395,"p"),tN(396,"Exemplo:"),sg(),Tl(397,"pre")(398,"code"),tN(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(400,"p"),tN(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),tN(406," p-disabled"),Gl(407,"br"),sg()()(),Tl(408,"td",22)(409,"code",29),tN(410,"boolean"),sg()(),Tl(411,"td",24)(412,"p")(413,"code"),tN(414,"false"),sg()()(),Tl(415,"td",25)(416,"em")(417,"strong"),tN(418,"(opcional)"),sg()(),Tl(419,"p"),tN(420,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),tN(425," (p-enter)"),Gl(426,"br"),sg()()(),Tl(427,"td",22)(428,"code",23),tN(429,"EventEmitter"),sg()(),Tl(430,"td",24),tN(431,"-"),sg(),Tl(432,"td",25)(433,"em")(434,"strong"),tN(435,"(opcional)"),sg()(),Tl(436,"p"),tN(437,"Evento disparado ao entrar do campo."),sg()()(),Tl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),tN(442," p-error-limit"),Gl(443,"br"),sg()()(),Tl(444,"td",22)(445,"code",29),tN(446,"boolean"),sg()(),Tl(447,"td",24)(448,"p")(449,"code"),tN(450,"false"),sg()()(),Tl(451,"td",25)(452,"em")(453,"strong"),tN(454,"(opcional)"),sg()(),Tl(455,"p"),tN(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(457,"blockquote")(458,"p"),tN(459,"Caso essa propriedade seja definida como "),Tl(460,"code"),tN(461,"true"),sg(),tN(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),tN(467," p-field-error-message"),Gl(468,"br"),sg()()(),Tl(469,"td",22)(470,"code",28),tN(471,"string"),sg()(),Tl(472,"td",24),tN(473,"-"),sg(),Tl(474,"td",25)(475,"em")(476,"strong"),tN(477,"(opcional)"),sg()(),Tl(478,"p"),tN(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(480,"blockquote")(481,"p"),tN(482,"Necess\xE1rio que a propriedade "),Tl(483,"code"),tN(484,"p-required"),sg(),tN(485," esteja habilitada."),sg()()()(),Tl(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),tN(490," p-help"),Gl(491,"br"),sg()()(),Tl(492,"td",22)(493,"code",28),tN(494,"string"),sg()(),Tl(495,"td",24),tN(496,"-"),sg(),Tl(497,"td",25)(498,"em")(499,"strong"),tN(500,"(opcional)"),sg()(),Tl(501,"p"),tN(502,"Texto de apoio do campo."),sg()()(),Tl(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),tN(507," (p-keydown)"),Gl(508,"br"),sg()()(),Tl(509,"td",22)(510,"code",23),tN(511,"EventEmitter"),sg()(),Tl(512,"td",24),tN(513,"-"),sg(),Tl(514,"td",25)(515,"em")(516,"strong"),tN(517,"(opcional)"),sg()(),Tl(518,"p"),tN(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(520,"code"),tN(521,"KeyboardEvent"),sg(),tN(522," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),tN(527," p-label"),Gl(528,"br"),sg()()(),Tl(529,"td",22)(530,"code",28),tN(531,"string"),sg()(),Tl(532,"td",24),tN(533,"-"),sg(),Tl(534,"td",25)(535,"em")(536,"strong"),tN(537,"(opcional)"),sg()(),Tl(538,"p"),tN(539,"Label do campo."),sg()()(),Tl(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),tN(544," p-label-text-wrap"),Gl(545,"br"),sg()()(),Tl(546,"td",22)(547,"code",29),tN(548,"boolean"),sg()(),Tl(549,"td",24)(550,"p")(551,"code"),tN(552,"false"),sg()()(),Tl(553,"td",25)(554,"em")(555,"strong"),tN(556,"(opcional)"),sg()(),Tl(557,"p"),tN(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(559,"code"),tN(560,"p-label"),sg(),tN(561,". Quando "),Tl(562,"code"),tN(563,"p-label-text-wrap"),sg(),tN(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),tN(569," p-loading"),Gl(570,"br"),sg()()(),Tl(571,"td",22)(572,"code",29),tN(573,"boolean"),sg()(),Tl(574,"td",24)(575,"p")(576,"code"),tN(577,"false"),sg()()(),Tl(578,"td",25)(579,"em")(580,"strong"),tN(581,"(opcional)"),sg()(),Tl(582,"p"),tN(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),tN(588," p-maxlength"),Gl(589,"br"),sg()()(),Tl(590,"td",22)(591,"code",30),tN(592,"number"),sg()(),Tl(593,"td",24),tN(594,"-"),sg(),Tl(595,"td",25)(596,"em")(597,"strong"),tN(598,"(opcional)"),sg()(),Tl(599,"p"),tN(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Tl(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),tN(605," p-minlength"),Gl(606,"br"),sg()()(),Tl(607,"td",22)(608,"code",30),tN(609,"number"),sg()(),Tl(610,"td",24),tN(611,"-"),sg(),Tl(612,"td",25)(613,"em")(614,"strong"),tN(615,"(opcional)"),sg()(),Tl(616,"p"),tN(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Tl(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),tN(622," name"),Gl(623,"br"),sg()()(),Tl(624,"td",22)(625,"code",28),tN(626,"string"),sg()(),Tl(627,"td",24),tN(628,"-"),sg(),Tl(629,"td",25)(630,"p"),tN(631,"Nome e Id do componente."),sg()()(),Tl(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),tN(636," p-optional"),Gl(637,"br"),sg()()(),Tl(638,"td",22)(639,"code",29),tN(640,"boolean"),sg()(),Tl(641,"td",24)(642,"p")(643,"code"),tN(644,"false"),sg()()(),Tl(645,"td",25)(646,"em")(647,"strong"),tN(648,"(opcional)"),sg()(),Tl(649,"p"),tN(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(651,"blockquote")(652,"p"),tN(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(654,"ul")(655,"li"),tN(656,"O campo conter "),Tl(657,"code"),tN(658,"p-required"),sg(),tN(659,";"),sg(),Tl(660,"li"),tN(661,"N\xE3o possuir "),Tl(662,"code"),tN(663,"p-help"),sg(),tN(664," e/ou "),Tl(665,"code"),tN(666,"p-label"),sg(),tN(667,"."),sg()()()(),Tl(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),tN(672," p-placeholder"),Gl(673,"br"),sg()()(),Tl(674,"td",22)(675,"code",28),tN(676,"string"),sg()(),Tl(677,"td",24),tN(678,"-"),sg(),Tl(679,"td",25)(680,"p"),tN(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),tN(686," p-helper"),Gl(687,"br"),sg()()(),Tl(688,"td",22)(689,"code",31),tN(690,"PoHelperOptions "),sg(),Tl(691,"code",28),tN(692," string"),sg()(),Tl(693,"td",24),tN(694,"-"),sg(),Tl(695,"td",25)(696,"em")(697,"strong"),tN(698,"(opcional)"),sg()(),Tl(699,"p"),tN(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(701,"code"),tN(702,"p-label"),sg(),tN(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(704,"code"),tN(705,"p-label"),sg(),tN(706,"."),sg(),Tl(707,"blockquote")(708,"p"),tN(709,"Para mais informa\xE7\xF5es acesse: "),Tl(710,"a",32),tN(711,"https://po-ui.io/documentation/po-helper"),sg(),tN(712,"."),sg()(),Tl(713,"blockquote")(714,"p"),tN(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(716,"code"),tN(717,"p-additional-help-tooltip"),sg(),tN(718," e "),Tl(719,"code"),tN(720,"p-additional-help"),sg(),tN(721,") ser\xE1 ignorado."),sg()()()(),Tl(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),tN(726," p-readonly"),Gl(727,"br"),sg()()(),Tl(728,"td",22)(729,"code",29),tN(730,"boolean"),sg()(),Tl(731,"td",24)(732,"p")(733,"code"),tN(734,"false"),sg()()(),Tl(735,"td",25)(736,"em")(737,"strong"),tN(738,"(opcional)"),sg()(),Tl(739,"p"),tN(740,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Tl(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),tN(745," p-required"),Gl(746,"br"),sg()()(),Tl(747,"td",22)(748,"code",29),tN(749,"boolean"),sg()(),Tl(750,"td",24)(751,"p")(752,"code"),tN(753,"false"),sg()()(),Tl(754,"td",25)(755,"em")(756,"strong"),tN(757,"(opcional)"),sg()(),Tl(758,"p"),tN(759,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(760,"blockquote")(761,"p"),tN(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(763,"code"),tN(764,"(p-disabled)"),sg(),tN(765,"."),sg()()()(),Tl(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),tN(770," p-rows"),Gl(771,"br"),sg()()(),Tl(772,"td",22)(773,"code",30),tN(774,"number"),sg()(),Tl(775,"td",24)(776,"p")(777,"code"),tN(778,"3"),sg()()(),Tl(779,"td",25)(780,"em")(781,"strong"),tN(782,"(opcional)"),sg()(),Tl(783,"p"),tN(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),sg()()(),Tl(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),tN(789," p-show-required"),Gl(790,"br"),sg()()(),Tl(791,"td",22)(792,"code",29),tN(793,"boolean"),sg()(),Tl(794,"td",24),tN(795,"-"),sg(),Tl(796,"td",25)(797,"p"),tN(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(799,"blockquote")(800,"p"),tN(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(802,"ul")(803,"li"),tN(804,"N\xE3o possuir "),Tl(805,"code"),tN(806,"p-help"),sg(),tN(807," e/ou "),Tl(808,"code"),tN(809,"p-label"),sg(),tN(810,"."),sg()()()(),Tl(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),tN(815," p-size"),Gl(816,"br"),sg()()(),Tl(817,"td",22)(818,"code",28),tN(819,"string"),sg()(),Tl(820,"td",24)(821,"p")(822,"code"),tN(823,"medium"),sg()()(),Tl(824,"td",25)(825,"em")(826,"strong"),tN(827,"(opcional)"),sg()(),Tl(828,"p"),tN(829,"Define o tamanho do componente:"),sg(),Tl(830,"ul")(831,"li")(832,"code"),tN(833,"small"),sg(),tN(834," (dispon\xEDvel apenas para acessibilidade AA)"),sg(),Tl(835,"li")(836,"code"),tN(837,"medium"),sg()()(),Tl(838,"blockquote")(839,"p"),tN(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(841,"code"),tN(842,"medium"),sg(),tN(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(844,"a",33),tN(845,"po-theme"),sg(),tN(846,"."),sg()()()()(),Tl(847,"h3",13),tN(848,"M\xE9todos"),sg(),Tl(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),tN(855," focus "),sg()()()()(),Tl(856,"tr",25)(857,"td",25)(858,"p"),tN(859,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(860,"p"),tN(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(862,"pre")(863,"code"),tN(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),sg()()()()(),Gl(865,"br"),Tl(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),tN(872," showAdditionalHelp "),sg()()()()(),Tl(873,"tr",25)(874,"td",25)(875,"p"),tN(876,"M\xE9todo que exibe "),Tl(877,"code"),tN(878,"p-helper"),sg(),tN(879," ou executa a a\xE7\xE3o definida em "),Tl(880,"code"),tN(881,"p-helper{eventOnClick}"),sg(),tN(882," ou em "),Tl(883,"code"),tN(884,"p-additionalHelp"),sg(),tN(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(886,"code"),tN(887,"p-keydown"),sg(),tN(888,"."),sg(),Tl(889,"blockquote")(890,"p"),tN(891,"Exibe ou oculta o conte\xFAdo do componente "),Tl(892,"code"),tN(893,"po-helper"),sg(),tN(894," quando o componente estiver com foco."),sg()(),Tl(895,"pre")(896,"code"),tN(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),sg()(),Tl(898,"pre")(899,"code"),tN(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(901,"br"),sg());},dependencies:[Ga],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-textarea-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ge,he,fe,ve,Te],encapsulation:2})}return a})();var Re=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Re),vL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,we]})}return a})();export{yt as DocPoTextareaModule};