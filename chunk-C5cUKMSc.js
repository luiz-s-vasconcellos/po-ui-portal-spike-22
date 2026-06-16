import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,cg as uY,ch as om,aP as Da,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,c2 as Ap,aQ as dt,a3 as D3,ao as QA,ar as JA,as as $l,c3 as zo,at as uo,au as fo,ck as vk,cl as gk,az as Qy,aB as $x,aA as Jy,ax as gx}from'./main-6SPFG3VI.js';var be=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&Ul(0,"po-textarea",0);},dependencies:[Da],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Textarea Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-textarea-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ae,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return a})();var Te=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=lx();wl(0,"po-textarea",1),pw("ngModelChange",function(l){return Qy(s),$x(i.textarea,l)||(i.textarea=l),Jy(l)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(l){return Qy(s),$x(i.label,l)||(i.label=l),Jy(l)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(l){return Qy(s),$x(i.help,l)||(i.help=l),Jy(l)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(l){return Qy(s),$x(i.helperText,l)||(i.helperText=l),Jy(l)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(l){return Qy(s),$x(i.placeholder,l)||(i.placeholder=l),Jy(l)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(l){return Qy(s),$x(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Jy(l)}),ng(),$0(),wl(13,"po-number",10),pw("ngModelChange",function(l){return Qy(s),$x(i.rows,l)||(i.rows=l),Jy(l)}),ng(),$0(),wl(14,"po-number",11),pw("ngModelChange",function(l){return Qy(s),$x(i.minlength,l)||(i.minlength=l),Jy(l)}),ng(),$0(),wl(15,"po-number",12),pw("ngModelChange",function(l){return Qy(s),$x(i.maxlength,l)||(i.maxlength=l),Jy(l)}),ng(),$0(),wl(16,"po-checkbox-group",13),pw("ngModelChange",function(l){return Qy(s),$x(i.properties,l)||(i.properties=l),Jy(l)}),ng(),$0(),wl(17,"po-radio-group",14),pw("ngModelChange",function(l){return Qy(s),$x(i.size,l)||(i.size=l),Jy(l)}),ng(),$0(),wl(18,"div",2)(19,"po-button",15),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(hw("ngModel",i.textarea),YE("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),G0(),Pp(3),YE("p-value",i.textarea),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.fieldErrorMessage),G0(),Pp(),hw("ngModel",i.rows),G0(),Pp(),hw("ngModel",i.minlength),G0(),Pp(),hw("ngModel",i.maxlength),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ha,ga,Da,Vp],encapsulation:2,changeDetection:1})}return a})();var je=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Textarea Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-textarea
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-textarea-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,je,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Te],encapsulation:2})}return a})();var Ie=["formEmail"];function Re(a,Fe){if(a&1&&(wl(0,"div")(1,"div",8),Ul(2,"po-info",13),ng(),Ul(3,"po-divider"),ng()),a&2){let p=gx();Pp(2),YE("p-value",p.cc);}}var Me=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let p=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:p},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&$l(Ie,7)(zo,7),r&2){let s;uo(s=fo())&&(i.formEmail=s.first),uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=lx();wl(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),pw("ngModelChange",function(l){return Qy(s),$x(i.from,l)||(i.from=l),Jy(l)}),ng(),$0(),wl(4,"po-email",3),pw("ngModelChange",function(l){return Qy(s),$x(i.to,l)||(i.to=l),Jy(l)}),ng(),$0(),wl(5,"po-email",4),pw("ngModelChange",function(l){return Qy(s),$x(i.cc,l)||(i.cc=l),Jy(l)}),ng(),$0(),wl(6,"po-input",5),pw("ngModelChange",function(l){return Qy(s),$x(i.subject,l)||(i.subject=l),Jy(l)}),ng(),$0(),wl(7,"po-textarea",6),pw("ngModelChange",function(l){return Qy(s),$x(i.emailText,l)||(i.emailText=l),Jy(l)}),ng(),$0(),ng()(),wl(8,"po-modal",7)(9,"div",8),Ul(10,"po-info",9)(11,"po-info",10),ng(),Ul(12,"po-divider"),QA(13,Re,4,1,"div"),wl(14,"div",8),Ul(15,"po-info",11),ng(),Ul(16,"po-divider"),wl(17,"div",8)(18,"po-textarea",12),pw("ngModelChange",function(l){return Qy(s),$x(i.emailText,l)||(i.emailText=l),Jy(l)}),ng(),$0(),ng()();}r&2&&(YE("p-actions",i.getPageAction()),Pp(3),hw("ngModel",i.from),G0(),Pp(),hw("ngModel",i.to),G0(),Pp(),hw("ngModel",i.cc),G0(),Pp(),hw("ngModel",i.subject),G0(),Pp(),hw("ngModel",i.emailText),G0(),Pp(),YE("p-primary-action",i.primaryAction),Pp(2),YE("p-value",i.from),Pp(),YE("p-value",i.to),Pp(2),JA(i.cc!==""?13:-1),Pp(2),YE("p-value",i.subject),Pp(3),hw("ngModel",i.emailText),G0());},dependencies:[aY,iY,oY,ck,ok,di,Ap,Yo,Da,Vp,dt,D3],encapsulation:2,changeDetection:1})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Textarea - Email"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-textarea-email"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ge,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Me],encapsulation:2})}return a})();function Qe(a,Fe){if(a&1&&(wl(0,"div")(1,"div",8),Ul(2,"po-info",13),ng(),Ul(3,"po-divider"),ng()),a&2){let p=gx();Pp(2),YE("p-value",p.formEmail.get("cc").value);}}var _e=(()=>{class a{formBuilder=f(uY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,om.required],to:[null,om.required],emailText:[null,om.required],subject:[null,om.required]});}getPageAction(){let p=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:p},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&$l(zo,7),r&2){let s;uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"form",1),Ul(2,"po-email",2),$0(),Ul(3,"po-email",3),$0(),Ul(4,"po-email",4),$0(),Ul(5,"po-input",5),$0(),Ul(6,"po-textarea",6),$0(),ng()(),wl(7,"po-modal",7)(8,"div",8),Ul(9,"po-info",9)(10,"po-info",10),ng(),Ul(11,"po-divider"),QA(12,Qe,4,1,"div"),wl(13,"div",8),Ul(14,"po-info",11),ng(),Ul(15,"po-divider"),wl(16,"div",8),Ul(17,"po-textarea",12),$0(),ng()()),r&2&&(YE("p-actions",i.getPageAction()),Pp(),YE("formGroup",i.formEmail),Pp(),G0(),Pp(),G0(),Pp(),G0(),Pp(),G0(),Pp(),G0(),Pp(),YE("p-primary-action",i.primaryAction),Pp(2),YE("p-value",i.formEmail.get("from").value),Pp(),YE("p-value",i.formEmail.get("to").value),Pp(2),JA(i.formEmail.get("cc").value?12:-1),Pp(2),YE("p-value",i.formEmail.get("subject").value),Pp(3),YE("ngModel",i.formEmail.get("emailText").value),G0());},dependencies:[aY,iY,oY,ck,vk,gk,di,Ap,Yo,Da,Vp,dt,D3],encapsulation:2,changeDetection:1})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Textarea - Email Reactive Form"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-textarea-email-reactive-form"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Je,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,_e],encapsulation:2})}return a})();var qe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoTextareaComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),ng(),wl(24,"p"),Ux(25,"Importante:"),ng(),wl(26,"ul")(27,"li"),Ux(28,"A propriedade "),wl(29,"code"),Ux(30,"name"),ng(),Ux(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),wl(32,"code"),Ux(33,"model"),ng(),Ux(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),wl(35,"em"),Ux(36,"Angular"),ng(),Ux(37,", onde ser\xE1 necess\xE1rio informar o atributo "),wl(38,"code"),Ux(39,"name"),ng(),Ux(40," ou o atributo "),wl(41,"code"),Ux(42,'[ngModelOptions]="{standalone: true}"'),ng(),Ux(43,", por exemplo:"),ng()(),wl(44,"pre")(45,"code"),Ux(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),ng()(),wl(47,"h4"),Ux(48,"Acessibilidade tratada no componente"),ng(),wl(49,"p"),Ux(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),ng(),wl(51,"ul")(52,"li"),Ux(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),wl(54,"a",6),Ux(55,"WCAG 4.1.2: Name, Role, Value"),ng()(),wl(56,"li"),Ux(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),wl(58,"a",7),Ux(59,"WCAG 2.4.12: Focus Appearance)"),ng()(),wl(60,"li"),Ux(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),wl(62,"a",8),Ux(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),ng()()(),wl(64,"h4"),Ux(65,"Tokens customiz\xE1veis"),ng(),wl(66,"p"),Ux(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(68,"blockquote")(69,"p"),Ux(70,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(71,"a",9),Ux(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(73,"."),ng()(),wl(74,"table")(75,"thead")(76,"tr")(77,"th"),Ux(78,"Propriedade"),ng(),wl(79,"th"),Ux(80,"Descri\xE7\xE3o"),ng(),wl(81,"th"),Ux(82,"Valor Padr\xE3o"),ng()()(),wl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),Ux(87,"Default Values"),ng()(),Ul(88,"td")(89,"td"),ng(),wl(90,"tr")(91,"td")(92,"code"),Ux(93,"--font-family"),ng()(),wl(94,"td"),Ux(95,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(96,"td")(97,"code"),Ux(98,"var(--font-family-theme)"),ng()()(),wl(99,"tr")(100,"td")(101,"code"),Ux(102,"--font-size"),ng()(),wl(103,"td"),Ux(104,"Tamanho da fonte"),ng(),wl(105,"td")(106,"code"),Ux(107,"var(--font-size-default)"),ng()()(),wl(108,"tr")(109,"td")(110,"code"),Ux(111,"--text-color-placeholder"),ng()(),wl(112,"td"),Ux(113,"Cor do texto placeholder"),ng(),wl(114,"td")(115,"code"),Ux(116,"var(--color-neutral-light-30)"),ng()()(),wl(117,"tr")(118,"td")(119,"code"),Ux(120,"--color"),ng()(),wl(121,"td"),Ux(122,"Cor pincipal do campo"),ng(),wl(123,"td")(124,"code"),Ux(125,"var(--color-neutral-dark-70)"),ng()()(),wl(126,"tr")(127,"td")(128,"code"),Ux(129,"--background"),ng()(),wl(130,"td"),Ux(131,"Cor de background"),ng(),wl(132,"td")(133,"code"),Ux(134,"var(--color-neutral-light-05)"),ng()()(),wl(135,"tr")(136,"td")(137,"code"),Ux(138,"--field-container-title-justify"),ng()(),wl(139,"td"),Ux(140,"Alinhamento horizontal do t\xEDtulo ("),wl(141,"code"),Ux(142,"justify-content"),ng(),Ux(143,")"),ng(),wl(144,"td")(145,"code"),Ux(146,"space-between"),ng()()(),wl(147,"tr")(148,"td")(149,"code"),Ux(150,"--field-container-title-flex"),ng()(),wl(151,"td"),Ux(152,"Flex do t\xEDtulo ("),wl(153,"code"),Ux(154,"flex"),ng(),Ux(155,")"),ng(),wl(156,"td")(157,"code"),Ux(158,"1 auto"),ng()()()()()(),wl(159,"div",10)(160,"h4",11),Ux(161,"Seletor"),ng(),wl(162,"pre",12),Ux(163,`<po-textarea
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
`),ng()(),wl(164,"h4",13),Ux(165,"Propriedades"),ng(),wl(166,"table",14)(167,"tr",15)(168,"th",16),Ux(169,"Nome"),ng(),wl(170,"th",16),Ux(171,"Tipo"),ng(),wl(172,"th",16),Ux(173,"Padr\xE3o"),ng(),wl(174,"th",16),Ux(175,"Descri\xE7\xE3o"),ng()(),wl(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),Ux(180," (p-additional-help)"),Ul(181,"br"),ng()(),wl(182,"div",21),Ux(183,"Deprecated"),ng()(),wl(184,"td",22)(185,"code",23),Ux(186,"EventEmitter"),ng()(),wl(187,"td",24),Ux(188,"-"),ng(),wl(189,"td",25)(190,"em")(191,"strong"),Ux(192,"(opcional)"),ng()(),wl(193,"p"),Ux(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(195,"blockquote")(196,"p"),Ux(197,"Essa propriedade est\xE1 "),wl(198,"strong"),Ux(199,"depreciada"),ng(),Ux(200," e ser\xE1 removida na vers\xE3o "),wl(201,"code"),Ux(202,"23.x.x"),ng(),Ux(203,". Recomendamos utilizar a propriedade "),wl(204,"code"),Ux(205,"p-helper"),ng(),Ux(206," que oferece mais recursos e flexibilidade."),ng()()()(),wl(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),Ux(211," p-additional-help-tooltip"),Ul(212,"br"),ng()(),wl(213,"div",21),Ux(214,"Deprecated"),ng()(),wl(215,"td",22)(216,"code",28),Ux(217,"string"),ng()(),wl(218,"td",24),Ux(219,"-"),ng(),wl(220,"td",25)(221,"em")(222,"strong"),Ux(223,"(opcional)"),ng()(),wl(224,"p"),Ux(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(226,"code"),Ux(227,"po-helper"),ng(),Ux(228,`.
`),wl(229,"strong"),Ux(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(231,"blockquote")(232,"p"),Ux(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(234,"blockquote")(235,"p"),Ux(236,"Essa propriedade est\xE1 "),wl(237,"strong"),Ux(238,"depreciada"),ng(),Ux(239," e ser\xE1 removida na vers\xE3o "),wl(240,"code"),Ux(241,"23.x.x"),ng(),Ux(242,". Recomendamos utilizar a propriedade "),wl(243,"code"),Ux(244,"p-helper"),ng(),Ux(245," que oferece mais recursos e flexibilidade."),ng()()()(),wl(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),Ux(250," p-append-in-body"),Ul(251,"br"),ng()()(),wl(252,"td",22)(253,"code",29),Ux(254,"boolean"),ng()(),wl(255,"td",24)(256,"p")(257,"code"),Ux(258,"false"),ng()()(),wl(259,"td",25)(260,"em")(261,"strong"),Ux(262,"(opcional)"),ng()(),wl(263,"p"),Ux(264,"Define que o popover ("),wl(265,"code"),Ux(266,"p-helper"),ng(),Ux(267," e/ou "),wl(268,"code"),Ux(269,"p-error-limit"),ng(),Ux(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(271,"blockquote")(272,"p"),Ux(273,"Quando utilizado com "),wl(274,"code"),Ux(275,"p-helper"),ng(),Ux(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),Ux(281," p-auto-focus"),Ul(282,"br"),ng()()(),wl(283,"td",22)(284,"code",29),Ux(285,"boolean"),ng()(),wl(286,"td",24)(287,"p")(288,"code"),Ux(289,"false"),ng()()(),wl(290,"td",25)(291,"em")(292,"strong"),Ux(293,"(opcional)"),ng()(),wl(294,"p"),Ux(295,"Aplica foco no elemento ao ser iniciado."),ng(),wl(296,"blockquote")(297,"p"),Ux(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),Ux(303," (p-blur)"),Ul(304,"br"),ng()()(),wl(305,"td",22)(306,"code",23),Ux(307,"EventEmitter"),ng()(),wl(308,"td",24),Ux(309,"-"),ng(),wl(310,"td",25)(311,"em")(312,"strong"),Ux(313,"(opcional)"),ng()(),wl(314,"p"),Ux(315,"Evento disparado ao sair do campo."),ng()()(),wl(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),Ux(320," (p-change)"),Ul(321,"br"),ng()()(),wl(322,"td",22)(323,"code",23),Ux(324,"EventEmitter"),ng()(),wl(325,"td",24),Ux(326,"-"),ng(),wl(327,"td",25)(328,"em")(329,"strong"),Ux(330,"(opcional)"),ng()(),wl(331,"p"),Ux(332,"Evento disparado ao alterar valor e deixar o campo."),ng()()(),wl(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),Ux(337," (p-change-model)"),Ul(338,"br"),ng()()(),wl(339,"td",22)(340,"code",23),Ux(341,"EventEmitter"),ng()(),wl(342,"td",24),Ux(343,"-"),ng(),wl(344,"td",25)(345,"em")(346,"strong"),Ux(347,"(opcional)"),ng()(),wl(348,"p"),Ux(349,"Evento disparado ao alterar valor do model."),ng()()(),wl(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),Ux(354," p-compact-label"),Ul(355,"br"),ng()()(),wl(356,"td",22)(357,"code",29),Ux(358,"boolean"),ng()(),wl(359,"td",24)(360,"p")(361,"code"),Ux(362,"false"),ng()()(),wl(363,"td",25)(364,"em")(365,"strong"),Ux(366,"(opcional)"),ng()(),wl(367,"p"),Ux(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(369,"p"),Ux(370,"Quando habilitado ("),wl(371,"code"),Ux(372,"true"),ng(),Ux(373,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(374,"ul")(375,"li")(376,"code"),Ux(377,"po-label"),ng()(),wl(378,"li")(379,"code"),Ux(380,"p-requirement (showRequired)"),ng()(),wl(381,"li")(382,"code"),Ux(383,"po-helper"),ng()()(),wl(384,"p"),Ux(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(386,"p"),Ux(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(388,"ul")(389,"li")(390,"code"),Ux(391,"--field-container-title-justify"),ng()(),wl(392,"li")(393,"code"),Ux(394,"--field-container-title-flex"),ng()()(),wl(395,"p"),Ux(396,"Exemplo:"),ng(),wl(397,"pre")(398,"code"),Ux(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(400,"p"),Ux(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),Ux(406," p-disabled"),Ul(407,"br"),ng()()(),wl(408,"td",22)(409,"code",29),Ux(410,"boolean"),ng()(),wl(411,"td",24)(412,"p")(413,"code"),Ux(414,"false"),ng()()(),wl(415,"td",25)(416,"em")(417,"strong"),Ux(418,"(opcional)"),ng()(),wl(419,"p"),Ux(420,"Indica que o campo ser\xE1 desabilitado."),ng()()(),wl(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),Ux(425," (p-enter)"),Ul(426,"br"),ng()()(),wl(427,"td",22)(428,"code",23),Ux(429,"EventEmitter"),ng()(),wl(430,"td",24),Ux(431,"-"),ng(),wl(432,"td",25)(433,"em")(434,"strong"),Ux(435,"(opcional)"),ng()(),wl(436,"p"),Ux(437,"Evento disparado ao entrar do campo."),ng()()(),wl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),Ux(442," p-error-limit"),Ul(443,"br"),ng()()(),wl(444,"td",22)(445,"code",29),Ux(446,"boolean"),ng()(),wl(447,"td",24)(448,"p")(449,"code"),Ux(450,"false"),ng()()(),wl(451,"td",25)(452,"em")(453,"strong"),Ux(454,"(opcional)"),ng()(),wl(455,"p"),Ux(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(457,"blockquote")(458,"p"),Ux(459,"Caso essa propriedade seja definida como "),wl(460,"code"),Ux(461,"true"),ng(),Ux(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),Ux(467," p-field-error-message"),Ul(468,"br"),ng()()(),wl(469,"td",22)(470,"code",28),Ux(471,"string"),ng()(),wl(472,"td",24),Ux(473,"-"),ng(),wl(474,"td",25)(475,"em")(476,"strong"),Ux(477,"(opcional)"),ng()(),wl(478,"p"),Ux(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),ng(),wl(480,"blockquote")(481,"p"),Ux(482,"Necess\xE1rio que a propriedade "),wl(483,"code"),Ux(484,"p-required"),ng(),Ux(485," esteja habilitada."),ng()()()(),wl(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),Ux(490," p-help"),Ul(491,"br"),ng()()(),wl(492,"td",22)(493,"code",28),Ux(494,"string"),ng()(),wl(495,"td",24),Ux(496,"-"),ng(),wl(497,"td",25)(498,"em")(499,"strong"),Ux(500,"(opcional)"),ng()(),wl(501,"p"),Ux(502,"Texto de apoio do campo."),ng()()(),wl(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),Ux(507," (p-keydown)"),Ul(508,"br"),ng()()(),wl(509,"td",22)(510,"code",23),Ux(511,"EventEmitter"),ng()(),wl(512,"td",24),Ux(513,"-"),ng(),wl(514,"td",25)(515,"em")(516,"strong"),Ux(517,"(opcional)"),ng()(),wl(518,"p"),Ux(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(520,"code"),Ux(521,"KeyboardEvent"),ng(),Ux(522," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),Ux(527," p-label"),Ul(528,"br"),ng()()(),wl(529,"td",22)(530,"code",28),Ux(531,"string"),ng()(),wl(532,"td",24),Ux(533,"-"),ng(),wl(534,"td",25)(535,"em")(536,"strong"),Ux(537,"(opcional)"),ng()(),wl(538,"p"),Ux(539,"Label do campo."),ng()()(),wl(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),Ux(544," p-label-text-wrap"),Ul(545,"br"),ng()()(),wl(546,"td",22)(547,"code",29),Ux(548,"boolean"),ng()(),wl(549,"td",24)(550,"p")(551,"code"),Ux(552,"false"),ng()()(),wl(553,"td",25)(554,"em")(555,"strong"),Ux(556,"(opcional)"),ng()(),wl(557,"p"),Ux(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(559,"code"),Ux(560,"p-label"),ng(),Ux(561,". Quando "),wl(562,"code"),Ux(563,"p-label-text-wrap"),ng(),Ux(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),Ux(569," p-loading"),Ul(570,"br"),ng()()(),wl(571,"td",22)(572,"code",29),Ux(573,"boolean"),ng()(),wl(574,"td",24)(575,"p")(576,"code"),Ux(577,"false"),ng()()(),wl(578,"td",25)(579,"em")(580,"strong"),Ux(581,"(opcional)"),ng()(),wl(582,"p"),Ux(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),Ux(588," p-maxlength"),Ul(589,"br"),ng()()(),wl(590,"td",22)(591,"code",30),Ux(592,"number"),ng()(),wl(593,"td",24),Ux(594,"-"),ng(),wl(595,"td",25)(596,"em")(597,"strong"),Ux(598,"(opcional)"),ng()(),wl(599,"p"),Ux(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),ng()()(),wl(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),Ux(605," p-minlength"),Ul(606,"br"),ng()()(),wl(607,"td",22)(608,"code",30),Ux(609,"number"),ng()(),wl(610,"td",24),Ux(611,"-"),ng(),wl(612,"td",25)(613,"em")(614,"strong"),Ux(615,"(opcional)"),ng()(),wl(616,"p"),Ux(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),ng()()(),wl(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),Ux(622," name"),Ul(623,"br"),ng()()(),wl(624,"td",22)(625,"code",28),Ux(626,"string"),ng()(),wl(627,"td",24),Ux(628,"-"),ng(),wl(629,"td",25)(630,"p"),Ux(631,"Nome e Id do componente."),ng()()(),wl(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),Ux(636," p-optional"),Ul(637,"br"),ng()()(),wl(638,"td",22)(639,"code",29),Ux(640,"boolean"),ng()(),wl(641,"td",24)(642,"p")(643,"code"),Ux(644,"false"),ng()()(),wl(645,"td",25)(646,"em")(647,"strong"),Ux(648,"(opcional)"),ng()(),wl(649,"p"),Ux(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(651,"blockquote")(652,"p"),Ux(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(654,"ul")(655,"li"),Ux(656,"O campo conter "),wl(657,"code"),Ux(658,"p-required"),ng(),Ux(659,";"),ng(),wl(660,"li"),Ux(661,"N\xE3o possuir "),wl(662,"code"),Ux(663,"p-help"),ng(),Ux(664," e/ou "),wl(665,"code"),Ux(666,"p-label"),ng(),Ux(667,"."),ng()()()(),wl(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),Ux(672," p-placeholder"),Ul(673,"br"),ng()()(),wl(674,"td",22)(675,"code",28),Ux(676,"string"),ng()(),wl(677,"td",24),Ux(678,"-"),ng(),wl(679,"td",25)(680,"p"),Ux(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),Ux(686," p-helper"),Ul(687,"br"),ng()()(),wl(688,"td",22)(689,"code",31),Ux(690,"PoHelperOptions "),ng(),wl(691,"code",28),Ux(692," string"),ng()(),wl(693,"td",24),Ux(694,"-"),ng(),wl(695,"td",25)(696,"em")(697,"strong"),Ux(698,"(opcional)"),ng()(),wl(699,"p"),Ux(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(701,"code"),Ux(702,"p-label"),ng(),Ux(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(704,"code"),Ux(705,"p-label"),ng(),Ux(706,"."),ng(),wl(707,"blockquote")(708,"p"),Ux(709,"Para mais informa\xE7\xF5es acesse: "),wl(710,"a",32),Ux(711,"https://po-ui.io/documentation/po-helper"),ng(),Ux(712,"."),ng()(),wl(713,"blockquote")(714,"p"),Ux(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(716,"code"),Ux(717,"p-additional-help-tooltip"),ng(),Ux(718," e "),wl(719,"code"),Ux(720,"p-additional-help"),ng(),Ux(721,") ser\xE1 ignorado."),ng()()()(),wl(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),Ux(726," p-readonly"),Ul(727,"br"),ng()()(),wl(728,"td",22)(729,"code",29),Ux(730,"boolean"),ng()(),wl(731,"td",24)(732,"p")(733,"code"),Ux(734,"false"),ng()()(),wl(735,"td",25)(736,"em")(737,"strong"),Ux(738,"(opcional)"),ng()(),wl(739,"p"),Ux(740,"Indica que o campo ser\xE1 somente leitura."),ng()()(),wl(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),Ux(745," p-required"),Ul(746,"br"),ng()()(),wl(747,"td",22)(748,"code",29),Ux(749,"boolean"),ng()(),wl(750,"td",24)(751,"p")(752,"code"),Ux(753,"false"),ng()()(),wl(754,"td",25)(755,"em")(756,"strong"),Ux(757,"(opcional)"),ng()(),wl(758,"p"),Ux(759,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(760,"blockquote")(761,"p"),Ux(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(763,"code"),Ux(764,"(p-disabled)"),ng(),Ux(765,"."),ng()()()(),wl(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),Ux(770," p-rows"),Ul(771,"br"),ng()()(),wl(772,"td",22)(773,"code",30),Ux(774,"number"),ng()(),wl(775,"td",24)(776,"p")(777,"code"),Ux(778,"3"),ng()()(),wl(779,"td",25)(780,"em")(781,"strong"),Ux(782,"(opcional)"),ng()(),wl(783,"p"),Ux(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),ng()()(),wl(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),Ux(789," p-show-required"),Ul(790,"br"),ng()()(),wl(791,"td",22)(792,"code",29),Ux(793,"boolean"),ng()(),wl(794,"td",24),Ux(795,"-"),ng(),wl(796,"td",25)(797,"p"),Ux(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(799,"blockquote")(800,"p"),Ux(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(802,"ul")(803,"li"),Ux(804,"N\xE3o possuir "),wl(805,"code"),Ux(806,"p-help"),ng(),Ux(807," e/ou "),wl(808,"code"),Ux(809,"p-label"),ng(),Ux(810,"."),ng()()()(),wl(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),Ux(815," p-size"),Ul(816,"br"),ng()()(),wl(817,"td",22)(818,"code",28),Ux(819,"string"),ng()(),wl(820,"td",24)(821,"p")(822,"code"),Ux(823,"medium"),ng()()(),wl(824,"td",25)(825,"em")(826,"strong"),Ux(827,"(opcional)"),ng()(),wl(828,"p"),Ux(829,"Define o tamanho do componente:"),ng(),wl(830,"ul")(831,"li")(832,"code"),Ux(833,"small"),ng(),Ux(834," (dispon\xEDvel apenas para acessibilidade AA)"),ng(),wl(835,"li")(836,"code"),Ux(837,"medium"),ng()()(),wl(838,"blockquote")(839,"p"),Ux(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(841,"code"),Ux(842,"medium"),ng(),Ux(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(844,"a",33),Ux(845,"po-theme"),ng(),Ux(846,"."),ng()()()()(),wl(847,"h3",13),Ux(848,"M\xE9todos"),ng(),wl(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),Ux(855," focus "),ng()()()()(),wl(856,"tr",25)(857,"td",25)(858,"p"),Ux(859,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(860,"p"),Ux(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(862,"pre")(863,"code"),Ux(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),ng()()()()(),Ul(865,"br"),wl(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),Ux(872," showAdditionalHelp "),ng()()()()(),wl(873,"tr",25)(874,"td",25)(875,"p"),Ux(876,"M\xE9todo que exibe "),wl(877,"code"),Ux(878,"p-helper"),ng(),Ux(879," ou executa a a\xE7\xE3o definida em "),wl(880,"code"),Ux(881,"p-helper{eventOnClick}"),ng(),Ux(882," ou em "),wl(883,"code"),Ux(884,"p-additionalHelp"),ng(),Ux(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(886,"code"),Ux(887,"p-keydown"),ng(),Ux(888,"."),ng(),wl(889,"blockquote")(890,"p"),Ux(891,"Exibe ou oculta o conte\xFAdo do componente "),wl(892,"code"),Ux(893,"po-helper"),ng(),Ux(894," quando o componente estiver com foco."),ng()(),wl(895,"pre")(896,"code"),Ux(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),ng()(),wl(898,"pre")(899,"code"),Ux(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(901,"br"),ng());},dependencies:[fP],encapsulation:2})}return a})();var ke=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-textarea-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,he,ye,Pe,De,qe],encapsulation:2})}return a})();var Ze=[{path:"",component:ke}],Le=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(Ze),vL]})}return a})();var Bt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,Le]})}return a})();export{Bt as DocPoTextareaModule};