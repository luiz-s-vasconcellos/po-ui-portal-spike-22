import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,cM as nY,cN as lm,b5 as jhe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,cz as Ez,b6 as Yo,a3 as pNe,aq as ux,at as dx,av as ql,aw as lo,ax as uo,cQ as Rk,cR as Tk,aD as Xy,aT as tN,aE as Qy,aA as Tx}from'./main-UTR4MKMU.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&Wl(0,"po-textarea",0);},dependencies:[jhe],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Textarea Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ee],encapsulation:2})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"po-textarea",1),Ew("ngModelChange",function(l){return Xy(s),tN(i.textarea,l)||(i.textarea=l),Qy(l)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(l){return Xy(s),tN(i.label,l)||(i.label=l),Qy(l)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(l){return Xy(s),tN(i.help,l)||(i.help=l),Qy(l)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(l){return Xy(s),tN(i.helperText,l)||(i.helperText=l),Qy(l)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(l){return Xy(s),tN(i.placeholder,l)||(i.placeholder=l),Qy(l)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(l){return Xy(s),tN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Qy(l)}),sg(),JA(),Sl(13,"po-number",10),Ew("ngModelChange",function(l){return Xy(s),tN(i.rows,l)||(i.rows=l),Qy(l)}),sg(),JA(),Sl(14,"po-number",11),Ew("ngModelChange",function(l){return Xy(s),tN(i.minlength,l)||(i.minlength=l),Qy(l)}),sg(),JA(),Sl(15,"po-number",12),Ew("ngModelChange",function(l){return Xy(s),tN(i.maxlength,l)||(i.maxlength=l),Qy(l)}),sg(),JA(),Sl(16,"po-checkbox-group",13),Ew("ngModelChange",function(l){return Xy(s),tN(i.properties,l)||(i.properties=l),Qy(l)}),sg(),JA(),Sl(17,"po-radio-group",14),Ew("ngModelChange",function(l){return Xy(s),tN(i.size,l)||(i.size=l),Qy(l)}),sg(),JA(),Sl(18,"div",2)(19,"po-button",15),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.textarea),tw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),t0(),Vp(3),tw("p-value",i.textarea),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.fieldErrorMessage),t0(),Vp(),Dw("ngModel",i.rows),t0(),Vp(),Dw("ngModel",i.minlength),t0(),Vp(),Dw("ngModel",i.maxlength),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,Pde,jhe,Qhe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Textarea Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-textarea
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ke,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return a})();var Fe=["formEmail"];function Ve(a,Me){if(a&1&&(Sl(0,"div")(1,"div",8),Wl(2,"po-info",13),sg(),Wl(3,"po-divider"),sg()),a&2){let m=Tx();Vp(2),tw("p-value",m.cc);}}var Se=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&ql(Fe,7)(Yo,7),r&2){let s;lo(s=uo())&&(i.formEmail=s.first),lo(s=uo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),Ew("ngModelChange",function(l){return Xy(s),tN(i.from,l)||(i.from=l),Qy(l)}),sg(),JA(),Sl(4,"po-email",3),Ew("ngModelChange",function(l){return Xy(s),tN(i.to,l)||(i.to=l),Qy(l)}),sg(),JA(),Sl(5,"po-email",4),Ew("ngModelChange",function(l){return Xy(s),tN(i.cc,l)||(i.cc=l),Qy(l)}),sg(),JA(),Sl(6,"po-input",5),Ew("ngModelChange",function(l){return Xy(s),tN(i.subject,l)||(i.subject=l),Qy(l)}),sg(),JA(),Sl(7,"po-textarea",6),Ew("ngModelChange",function(l){return Xy(s),tN(i.emailText,l)||(i.emailText=l),Qy(l)}),sg(),JA(),sg()(),Sl(8,"po-modal",7)(9,"div",8),Wl(10,"po-info",9)(11,"po-info",10),sg(),Wl(12,"po-divider"),ux(13,Ve,4,1,"div"),Sl(14,"div",8),Wl(15,"po-info",11),sg(),Wl(16,"po-divider"),Sl(17,"div",8)(18,"po-textarea",12),Ew("ngModelChange",function(l){return Xy(s),tN(i.emailText,l)||(i.emailText=l),Qy(l)}),sg(),JA(),sg()();}r&2&&(tw("p-actions",i.getPageAction()),Vp(3),Dw("ngModel",i.from),t0(),Vp(),Dw("ngModel",i.to),t0(),Vp(),Dw("ngModel",i.cc),t0(),Vp(),Dw("ngModel",i.subject),t0(),Vp(),Dw("ngModel",i.emailText),t0(),Vp(),tw("p-primary-action",i.primaryAction),Vp(2),tw("p-value",i.from),Vp(),tw("p-value",i.to),Vp(2),dx(i.cc!==""?13:-1),Vp(2),tw("p-value",i.subject),Vp(3),Dw("ngModel",i.emailText),t0());},dependencies:[J9,K9,X9,Dk,vk,mv,Ez,F3,jhe,Qhe,Yo,pNe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Textarea - Email"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-email"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,We,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return a})();function je(a,Me){if(a&1&&(Sl(0,"div")(1,"div",8),Wl(2,"po-info",13),sg(),Wl(3,"po-divider"),sg()),a&2){let m=Tx();Vp(2),tw("p-value",m.formEmail.get("cc").value);}}var Ce=(()=>{class a{formBuilder=f(nY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,lm.required],to:[null,lm.required],emailText:[null,lm.required],subject:[null,lm.required]});}getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&ql(Yo,7),r&2){let s;lo(s=uo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"form",1),Wl(2,"po-email",2),JA(),Wl(3,"po-email",3),JA(),Wl(4,"po-email",4),JA(),Wl(5,"po-input",5),JA(),Wl(6,"po-textarea",6),JA(),sg()(),Sl(7,"po-modal",7)(8,"div",8),Wl(9,"po-info",9)(10,"po-info",10),sg(),Wl(11,"po-divider"),ux(12,je,4,1,"div"),Sl(13,"div",8),Wl(14,"po-info",11),sg(),Wl(15,"po-divider"),Sl(16,"div",8),Wl(17,"po-textarea",12),JA(),sg()()),r&2&&(tw("p-actions",i.getPageAction()),Vp(),tw("formGroup",i.formEmail),Vp(),t0(),Vp(),t0(),Vp(),t0(),Vp(),t0(),Vp(),t0(),Vp(),tw("p-primary-action",i.primaryAction),Vp(2),tw("p-value",i.formEmail.get("from").value),Vp(),tw("p-value",i.formEmail.get("to").value),Vp(2),dx(i.formEmail.get("cc").value?12:-1),Vp(2),tw("p-value",i.formEmail.get("subject").value),Vp(3),tw("ngModel",i.formEmail.get("emailText").value),t0());},dependencies:[J9,K9,X9,Dk,Rk,Tk,mv,Ez,F3,jhe,Qhe,Yo,pNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Textarea - Email Reactive Form"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-textarea-email-reactive-form"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ce],encapsulation:2})}return a})();var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoTextareaComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),sg(),Sl(24,"p"),Jx(25,"Importante:"),sg(),Sl(26,"ul")(27,"li"),Jx(28,"A propriedade "),Sl(29,"code"),Jx(30,"name"),sg(),Jx(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),Sl(32,"code"),Jx(33,"model"),sg(),Jx(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Sl(35,"em"),Jx(36,"Angular"),sg(),Jx(37,", onde ser\xE1 necess\xE1rio informar o atributo "),Sl(38,"code"),Jx(39,"name"),sg(),Jx(40," ou o atributo "),Sl(41,"code"),Jx(42,'[ngModelOptions]="{standalone: true}"'),sg(),Jx(43,", por exemplo:"),sg()(),Sl(44,"pre")(45,"code"),Jx(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),sg()(),Sl(47,"h4"),Jx(48,"Acessibilidade tratada no componente"),sg(),Sl(49,"p"),Jx(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),sg(),Sl(51,"ul")(52,"li"),Jx(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Sl(54,"a",6),Jx(55,"WCAG 4.1.2: Name, Role, Value"),sg()(),Sl(56,"li"),Jx(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Sl(58,"a",7),Jx(59,"WCAG 2.4.12: Focus Appearance)"),sg()(),Sl(60,"li"),Jx(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Sl(62,"a",8),Jx(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),sg()()(),Sl(64,"h4"),Jx(65,"Tokens customiz\xE1veis"),sg(),Sl(66,"p"),Jx(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(68,"blockquote")(69,"p"),Jx(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(71,"a",9),Jx(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(73,"."),sg()(),Sl(74,"table")(75,"thead")(76,"tr")(77,"th"),Jx(78,"Propriedade"),sg(),Sl(79,"th"),Jx(80,"Descri\xE7\xE3o"),sg(),Sl(81,"th"),Jx(82,"Valor Padr\xE3o"),sg()()(),Sl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),Jx(87,"Default Values"),sg()(),Wl(88,"td")(89,"td"),sg(),Sl(90,"tr")(91,"td")(92,"code"),Jx(93,"--font-family"),sg()(),Sl(94,"td"),Jx(95,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(96,"td")(97,"code"),Jx(98,"var(--font-family-theme)"),sg()()(),Sl(99,"tr")(100,"td")(101,"code"),Jx(102,"--font-size"),sg()(),Sl(103,"td"),Jx(104,"Tamanho da fonte"),sg(),Sl(105,"td")(106,"code"),Jx(107,"var(--font-size-default)"),sg()()(),Sl(108,"tr")(109,"td")(110,"code"),Jx(111,"--text-color-placeholder"),sg()(),Sl(112,"td"),Jx(113,"Cor do texto placeholder"),sg(),Sl(114,"td")(115,"code"),Jx(116,"var(--color-neutral-light-30)"),sg()()(),Sl(117,"tr")(118,"td")(119,"code"),Jx(120,"--color"),sg()(),Sl(121,"td"),Jx(122,"Cor pincipal do campo"),sg(),Sl(123,"td")(124,"code"),Jx(125,"var(--color-neutral-dark-70)"),sg()()(),Sl(126,"tr")(127,"td")(128,"code"),Jx(129,"--background"),sg()(),Sl(130,"td"),Jx(131,"Cor de background"),sg(),Sl(132,"td")(133,"code"),Jx(134,"var(--color-neutral-light-05)"),sg()()(),Sl(135,"tr")(136,"td")(137,"code"),Jx(138,"--field-container-title-justify"),sg()(),Sl(139,"td"),Jx(140,"Alinhamento horizontal do t\xEDtulo ("),Sl(141,"code"),Jx(142,"justify-content"),sg(),Jx(143,")"),sg(),Sl(144,"td")(145,"code"),Jx(146,"space-between"),sg()()(),Sl(147,"tr")(148,"td")(149,"code"),Jx(150,"--field-container-title-flex"),sg()(),Sl(151,"td"),Jx(152,"Flex do t\xEDtulo ("),Sl(153,"code"),Jx(154,"flex"),sg(),Jx(155,")"),sg(),Sl(156,"td")(157,"code"),Jx(158,"1 auto"),sg()()()()()(),Sl(159,"div",10)(160,"h4",11),Jx(161,"Seletor"),sg(),Sl(162,"pre",12),Jx(163,`<po-textarea
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
`),sg()(),Sl(164,"h4",13),Jx(165,"Propriedades"),sg(),Sl(166,"table",14)(167,"tr",15)(168,"th",16),Jx(169,"Nome"),sg(),Sl(170,"th",16),Jx(171,"Tipo"),sg(),Sl(172,"th",16),Jx(173,"Padr\xE3o"),sg(),Sl(174,"th",16),Jx(175,"Descri\xE7\xE3o"),sg()(),Sl(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),Jx(180," (p-additional-help)"),Wl(181,"br"),sg()(),Sl(182,"div",21),Jx(183,"Deprecated"),sg()(),Sl(184,"td",22)(185,"code",23),Jx(186,"EventEmitter"),sg()(),Sl(187,"td",24),Jx(188,"-"),sg(),Sl(189,"td",25)(190,"em")(191,"strong"),Jx(192,"(opcional)"),sg()(),Sl(193,"p"),Jx(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(195,"blockquote")(196,"p"),Jx(197,"Essa propriedade est\xE1 "),Sl(198,"strong"),Jx(199,"depreciada"),sg(),Jx(200," e ser\xE1 removida na vers\xE3o "),Sl(201,"code"),Jx(202,"23.x.x"),sg(),Jx(203,". Recomendamos utilizar a propriedade "),Sl(204,"code"),Jx(205,"p-helper"),sg(),Jx(206," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),Jx(211," p-additional-help-tooltip"),Wl(212,"br"),sg()(),Sl(213,"div",21),Jx(214,"Deprecated"),sg()(),Sl(215,"td",22)(216,"code",28),Jx(217,"string"),sg()(),Sl(218,"td",24),Jx(219,"-"),sg(),Sl(220,"td",25)(221,"em")(222,"strong"),Jx(223,"(opcional)"),sg()(),Sl(224,"p"),Jx(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(226,"code"),Jx(227,"po-helper"),sg(),Jx(228,`.
`),Sl(229,"strong"),Jx(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(231,"blockquote")(232,"p"),Jx(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(234,"blockquote")(235,"p"),Jx(236,"Essa propriedade est\xE1 "),Sl(237,"strong"),Jx(238,"depreciada"),sg(),Jx(239," e ser\xE1 removida na vers\xE3o "),Sl(240,"code"),Jx(241,"23.x.x"),sg(),Jx(242,". Recomendamos utilizar a propriedade "),Sl(243,"code"),Jx(244,"p-helper"),sg(),Jx(245," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),Jx(250," p-append-in-body"),Wl(251,"br"),sg()()(),Sl(252,"td",22)(253,"code",29),Jx(254,"boolean"),sg()(),Sl(255,"td",24)(256,"p")(257,"code"),Jx(258,"false"),sg()()(),Sl(259,"td",25)(260,"em")(261,"strong"),Jx(262,"(opcional)"),sg()(),Sl(263,"p"),Jx(264,"Define que o popover ("),Sl(265,"code"),Jx(266,"p-helper"),sg(),Jx(267," e/ou "),Sl(268,"code"),Jx(269,"p-error-limit"),sg(),Jx(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(271,"blockquote")(272,"p"),Jx(273,"Quando utilizado com "),Sl(274,"code"),Jx(275,"p-helper"),sg(),Jx(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),Jx(281," p-auto-focus"),Wl(282,"br"),sg()()(),Sl(283,"td",22)(284,"code",29),Jx(285,"boolean"),sg()(),Sl(286,"td",24)(287,"p")(288,"code"),Jx(289,"false"),sg()()(),Sl(290,"td",25)(291,"em")(292,"strong"),Jx(293,"(opcional)"),sg()(),Sl(294,"p"),Jx(295,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(296,"blockquote")(297,"p"),Jx(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),Jx(303," (p-blur)"),Wl(304,"br"),sg()()(),Sl(305,"td",22)(306,"code",23),Jx(307,"EventEmitter"),sg()(),Sl(308,"td",24),Jx(309,"-"),sg(),Sl(310,"td",25)(311,"em")(312,"strong"),Jx(313,"(opcional)"),sg()(),Sl(314,"p"),Jx(315,"Evento disparado ao sair do campo."),sg()()(),Sl(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),Jx(320," (p-change)"),Wl(321,"br"),sg()()(),Sl(322,"td",22)(323,"code",23),Jx(324,"EventEmitter"),sg()(),Sl(325,"td",24),Jx(326,"-"),sg(),Sl(327,"td",25)(328,"em")(329,"strong"),Jx(330,"(opcional)"),sg()(),Sl(331,"p"),Jx(332,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Sl(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),Jx(337," (p-change-model)"),Wl(338,"br"),sg()()(),Sl(339,"td",22)(340,"code",23),Jx(341,"EventEmitter"),sg()(),Sl(342,"td",24),Jx(343,"-"),sg(),Sl(344,"td",25)(345,"em")(346,"strong"),Jx(347,"(opcional)"),sg()(),Sl(348,"p"),Jx(349,"Evento disparado ao alterar valor do model."),sg()()(),Sl(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),Jx(354," p-compact-label"),Wl(355,"br"),sg()()(),Sl(356,"td",22)(357,"code",29),Jx(358,"boolean"),sg()(),Sl(359,"td",24)(360,"p")(361,"code"),Jx(362,"false"),sg()()(),Sl(363,"td",25)(364,"em")(365,"strong"),Jx(366,"(opcional)"),sg()(),Sl(367,"p"),Jx(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(369,"p"),Jx(370,"Quando habilitado ("),Sl(371,"code"),Jx(372,"true"),sg(),Jx(373,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(374,"ul")(375,"li")(376,"code"),Jx(377,"po-label"),sg()(),Sl(378,"li")(379,"code"),Jx(380,"p-requirement (showRequired)"),sg()(),Sl(381,"li")(382,"code"),Jx(383,"po-helper"),sg()()(),Sl(384,"p"),Jx(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(386,"p"),Jx(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(388,"ul")(389,"li")(390,"code"),Jx(391,"--field-container-title-justify"),sg()(),Sl(392,"li")(393,"code"),Jx(394,"--field-container-title-flex"),sg()()(),Sl(395,"p"),Jx(396,"Exemplo:"),sg(),Sl(397,"pre")(398,"code"),Jx(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(400,"p"),Jx(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),Jx(406," p-disabled"),Wl(407,"br"),sg()()(),Sl(408,"td",22)(409,"code",29),Jx(410,"boolean"),sg()(),Sl(411,"td",24)(412,"p")(413,"code"),Jx(414,"false"),sg()()(),Sl(415,"td",25)(416,"em")(417,"strong"),Jx(418,"(opcional)"),sg()(),Sl(419,"p"),Jx(420,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Sl(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),Jx(425," (p-enter)"),Wl(426,"br"),sg()()(),Sl(427,"td",22)(428,"code",23),Jx(429,"EventEmitter"),sg()(),Sl(430,"td",24),Jx(431,"-"),sg(),Sl(432,"td",25)(433,"em")(434,"strong"),Jx(435,"(opcional)"),sg()(),Sl(436,"p"),Jx(437,"Evento disparado ao entrar do campo."),sg()()(),Sl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),Jx(442," p-error-limit"),Wl(443,"br"),sg()()(),Sl(444,"td",22)(445,"code",29),Jx(446,"boolean"),sg()(),Sl(447,"td",24)(448,"p")(449,"code"),Jx(450,"false"),sg()()(),Sl(451,"td",25)(452,"em")(453,"strong"),Jx(454,"(opcional)"),sg()(),Sl(455,"p"),Jx(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(457,"blockquote")(458,"p"),Jx(459,"Caso essa propriedade seja definida como "),Sl(460,"code"),Jx(461,"true"),sg(),Jx(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),Jx(467," p-field-error-message"),Wl(468,"br"),sg()()(),Sl(469,"td",22)(470,"code",28),Jx(471,"string"),sg()(),Sl(472,"td",24),Jx(473,"-"),sg(),Sl(474,"td",25)(475,"em")(476,"strong"),Jx(477,"(opcional)"),sg()(),Sl(478,"p"),Jx(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Sl(480,"blockquote")(481,"p"),Jx(482,"Necess\xE1rio que a propriedade "),Sl(483,"code"),Jx(484,"p-required"),sg(),Jx(485," esteja habilitada."),sg()()()(),Sl(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),Jx(490," p-help"),Wl(491,"br"),sg()()(),Sl(492,"td",22)(493,"code",28),Jx(494,"string"),sg()(),Sl(495,"td",24),Jx(496,"-"),sg(),Sl(497,"td",25)(498,"em")(499,"strong"),Jx(500,"(opcional)"),sg()(),Sl(501,"p"),Jx(502,"Texto de apoio do campo."),sg()()(),Sl(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),Jx(507," (p-keydown)"),Wl(508,"br"),sg()()(),Sl(509,"td",22)(510,"code",23),Jx(511,"EventEmitter"),sg()(),Sl(512,"td",24),Jx(513,"-"),sg(),Sl(514,"td",25)(515,"em")(516,"strong"),Jx(517,"(opcional)"),sg()(),Sl(518,"p"),Jx(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(520,"code"),Jx(521,"KeyboardEvent"),sg(),Jx(522," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),Jx(527," p-label"),Wl(528,"br"),sg()()(),Sl(529,"td",22)(530,"code",28),Jx(531,"string"),sg()(),Sl(532,"td",24),Jx(533,"-"),sg(),Sl(534,"td",25)(535,"em")(536,"strong"),Jx(537,"(opcional)"),sg()(),Sl(538,"p"),Jx(539,"Label do campo."),sg()()(),Sl(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),Jx(544," p-label-text-wrap"),Wl(545,"br"),sg()()(),Sl(546,"td",22)(547,"code",29),Jx(548,"boolean"),sg()(),Sl(549,"td",24)(550,"p")(551,"code"),Jx(552,"false"),sg()()(),Sl(553,"td",25)(554,"em")(555,"strong"),Jx(556,"(opcional)"),sg()(),Sl(557,"p"),Jx(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(559,"code"),Jx(560,"p-label"),sg(),Jx(561,". Quando "),Sl(562,"code"),Jx(563,"p-label-text-wrap"),sg(),Jx(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),Jx(569," p-loading"),Wl(570,"br"),sg()()(),Sl(571,"td",22)(572,"code",29),Jx(573,"boolean"),sg()(),Sl(574,"td",24)(575,"p")(576,"code"),Jx(577,"false"),sg()()(),Sl(578,"td",25)(579,"em")(580,"strong"),Jx(581,"(opcional)"),sg()(),Sl(582,"p"),Jx(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),Jx(588," p-maxlength"),Wl(589,"br"),sg()()(),Sl(590,"td",22)(591,"code",30),Jx(592,"number"),sg()(),Sl(593,"td",24),Jx(594,"-"),sg(),Sl(595,"td",25)(596,"em")(597,"strong"),Jx(598,"(opcional)"),sg()(),Sl(599,"p"),Jx(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Sl(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),Jx(605," p-minlength"),Wl(606,"br"),sg()()(),Sl(607,"td",22)(608,"code",30),Jx(609,"number"),sg()(),Sl(610,"td",24),Jx(611,"-"),sg(),Sl(612,"td",25)(613,"em")(614,"strong"),Jx(615,"(opcional)"),sg()(),Sl(616,"p"),Jx(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Sl(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),Jx(622," name"),Wl(623,"br"),sg()()(),Sl(624,"td",22)(625,"code",28),Jx(626,"string"),sg()(),Sl(627,"td",24),Jx(628,"-"),sg(),Sl(629,"td",25)(630,"p"),Jx(631,"Nome e Id do componente."),sg()()(),Sl(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),Jx(636," p-optional"),Wl(637,"br"),sg()()(),Sl(638,"td",22)(639,"code",29),Jx(640,"boolean"),sg()(),Sl(641,"td",24)(642,"p")(643,"code"),Jx(644,"false"),sg()()(),Sl(645,"td",25)(646,"em")(647,"strong"),Jx(648,"(opcional)"),sg()(),Sl(649,"p"),Jx(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(651,"blockquote")(652,"p"),Jx(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(654,"ul")(655,"li"),Jx(656,"O campo conter "),Sl(657,"code"),Jx(658,"p-required"),sg(),Jx(659,";"),sg(),Sl(660,"li"),Jx(661,"N\xE3o possuir "),Sl(662,"code"),Jx(663,"p-help"),sg(),Jx(664," e/ou "),Sl(665,"code"),Jx(666,"p-label"),sg(),Jx(667,"."),sg()()()(),Sl(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),Jx(672," p-placeholder"),Wl(673,"br"),sg()()(),Sl(674,"td",22)(675,"code",28),Jx(676,"string"),sg()(),Sl(677,"td",24),Jx(678,"-"),sg(),Sl(679,"td",25)(680,"p"),Jx(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),Jx(686," p-helper"),Wl(687,"br"),sg()()(),Sl(688,"td",22)(689,"code",31),Jx(690,"PoHelperOptions "),sg(),Sl(691,"code",28),Jx(692," string"),sg()(),Sl(693,"td",24),Jx(694,"-"),sg(),Sl(695,"td",25)(696,"em")(697,"strong"),Jx(698,"(opcional)"),sg()(),Sl(699,"p"),Jx(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(701,"code"),Jx(702,"p-label"),sg(),Jx(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(704,"code"),Jx(705,"p-label"),sg(),Jx(706,"."),sg(),Sl(707,"blockquote")(708,"p"),Jx(709,"Para mais informa\xE7\xF5es acesse: "),Sl(710,"a",32),Jx(711,"https://po-ui.io/documentation/po-helper"),sg(),Jx(712,"."),sg()(),Sl(713,"blockquote")(714,"p"),Jx(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(716,"code"),Jx(717,"p-additional-help-tooltip"),sg(),Jx(718," e "),Sl(719,"code"),Jx(720,"p-additional-help"),sg(),Jx(721,") ser\xE1 ignorado."),sg()()()(),Sl(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),Jx(726," p-readonly"),Wl(727,"br"),sg()()(),Sl(728,"td",22)(729,"code",29),Jx(730,"boolean"),sg()(),Sl(731,"td",24)(732,"p")(733,"code"),Jx(734,"false"),sg()()(),Sl(735,"td",25)(736,"em")(737,"strong"),Jx(738,"(opcional)"),sg()(),Sl(739,"p"),Jx(740,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Sl(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),Jx(745," p-required"),Wl(746,"br"),sg()()(),Sl(747,"td",22)(748,"code",29),Jx(749,"boolean"),sg()(),Sl(750,"td",24)(751,"p")(752,"code"),Jx(753,"false"),sg()()(),Sl(754,"td",25)(755,"em")(756,"strong"),Jx(757,"(opcional)"),sg()(),Sl(758,"p"),Jx(759,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Sl(760,"blockquote")(761,"p"),Jx(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(763,"code"),Jx(764,"(p-disabled)"),sg(),Jx(765,"."),sg()()()(),Sl(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),Jx(770," p-rows"),Wl(771,"br"),sg()()(),Sl(772,"td",22)(773,"code",30),Jx(774,"number"),sg()(),Sl(775,"td",24)(776,"p")(777,"code"),Jx(778,"3"),sg()()(),Sl(779,"td",25)(780,"em")(781,"strong"),Jx(782,"(opcional)"),sg()(),Sl(783,"p"),Jx(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),sg()()(),Sl(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),Jx(789," p-show-required"),Wl(790,"br"),sg()()(),Sl(791,"td",22)(792,"code",29),Jx(793,"boolean"),sg()(),Sl(794,"td",24),Jx(795,"-"),sg(),Sl(796,"td",25)(797,"p"),Jx(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(799,"blockquote")(800,"p"),Jx(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(802,"ul")(803,"li"),Jx(804,"N\xE3o possuir "),Sl(805,"code"),Jx(806,"p-help"),sg(),Jx(807," e/ou "),Sl(808,"code"),Jx(809,"p-label"),sg(),Jx(810,"."),sg()()()(),Sl(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),Jx(815," p-size"),Wl(816,"br"),sg()()(),Sl(817,"td",22)(818,"code",28),Jx(819,"string"),sg()(),Sl(820,"td",24)(821,"p")(822,"code"),Jx(823,"medium"),sg()()(),Sl(824,"td",25)(825,"em")(826,"strong"),Jx(827,"(opcional)"),sg()(),Sl(828,"p"),Jx(829,"Define o tamanho do componente:"),sg(),Sl(830,"ul")(831,"li")(832,"code"),Jx(833,"small"),sg(),Jx(834," (dispon\xEDvel apenas para acessibilidade AA)"),sg(),Sl(835,"li")(836,"code"),Jx(837,"medium"),sg()()(),Sl(838,"blockquote")(839,"p"),Jx(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(841,"code"),Jx(842,"medium"),sg(),Jx(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(844,"a",33),Jx(845,"po-theme"),sg(),Jx(846,"."),sg()()()()(),Sl(847,"h3",13),Jx(848,"M\xE9todos"),sg(),Sl(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),Jx(855," focus "),sg()()()()(),Sl(856,"tr",25)(857,"td",25)(858,"p"),Jx(859,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(860,"p"),Jx(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(862,"pre")(863,"code"),Jx(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),sg()()()()(),Wl(865,"br"),Sl(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),Jx(872," showAdditionalHelp "),sg()()()()(),Sl(873,"tr",25)(874,"td",25)(875,"p"),Jx(876,"M\xE9todo que exibe "),Sl(877,"code"),Jx(878,"p-helper"),sg(),Jx(879," ou executa a a\xE7\xE3o definida em "),Sl(880,"code"),Jx(881,"p-helper{eventOnClick}"),sg(),Jx(882," ou em "),Sl(883,"code"),Jx(884,"p-additionalHelp"),sg(),Jx(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(886,"code"),Jx(887,"p-keydown"),sg(),Jx(888,"."),sg(),Sl(889,"blockquote")(890,"p"),Jx(891,"Exibe ou oculta o conte\xFAdo do componente "),Sl(892,"code"),Jx(893,"po-helper"),sg(),Jx(894," quando o componente estiver com foco."),sg()(),Sl(895,"pre")(896,"code"),Jx(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),sg()(),Sl(898,"pre")(899,"code"),Jx(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(901,"br"),sg());},dependencies:[Ga],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-textarea-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ge,he,fe,ve,Te],encapsulation:2})}return a})();var Re=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(Re),pL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,we]})}return a})();export{yt as DocPoTextareaModule};