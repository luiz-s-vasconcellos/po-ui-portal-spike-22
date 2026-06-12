import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,cR as fY,cS as am,b4 as rme,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,cE as Uz,b5 as Ko,a3 as SNe,aq as ix,at as ox,av as zl,aw as uo,ax as fo,cV as bk,cW as wk,aD as Jy,aT as Zx,aE as e_,aA as Ex}from'./main-OS7VVRJY.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&Hl(0,"po-textarea",0);},dependencies:[rme],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Textarea Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-textarea-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ee],encapsulation:2})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"po-textarea",1),gw("ngModelChange",function(l){return Jy(s),Zx(i.textarea,l)||(i.textarea=l),e_(l)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(l){return Jy(s),Zx(i.label,l)||(i.label=l),e_(l)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(l){return Jy(s),Zx(i.help,l)||(i.help=l),e_(l)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(l){return Jy(s),Zx(i.helperText,l)||(i.helperText=l),e_(l)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(l){return Jy(s),Zx(i.placeholder,l)||(i.placeholder=l),e_(l)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(l){return Jy(s),Zx(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),e_(l)}),og(),Z0(),Cl(13,"po-number",10),gw("ngModelChange",function(l){return Jy(s),Zx(i.rows,l)||(i.rows=l),e_(l)}),og(),Z0(),Cl(14,"po-number",11),gw("ngModelChange",function(l){return Jy(s),Zx(i.minlength,l)||(i.minlength=l),e_(l)}),og(),Z0(),Cl(15,"po-number",12),gw("ngModelChange",function(l){return Jy(s),Zx(i.maxlength,l)||(i.maxlength=l),e_(l)}),og(),Z0(),Cl(16,"po-checkbox-group",13),gw("ngModelChange",function(l){return Jy(s),Zx(i.properties,l)||(i.properties=l),e_(l)}),og(),Z0(),Cl(17,"po-radio-group",14),gw("ngModelChange",function(l){return Jy(s),Zx(i.size,l)||(i.size=l),e_(l)}),og(),Z0(),Cl(18,"div",2)(19,"po-button",15),dt("p-click",function(){return i.restore()}),og()()();}r&2&&(pw("ngModel",i.textarea),ZE("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",i.textarea),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.fieldErrorMessage),X0(),Lp(),pw("ngModel",i.rows),X0(),Lp(),pw("ngModel",i.minlength),X0(),Lp(),pw("ngModel",i.maxlength),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Nde,rme,sme],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Textarea Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-textarea
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-textarea-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ke,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return a})();var Fe=["formEmail"];function Ve(a,Me){if(a&1&&(Cl(0,"div")(1,"div",8),Hl(2,"po-info",13),og(),Hl(3,"po-divider"),og()),a&2){let m=Ex();Lp(2),ZE("p-value",m.cc);}}var Se=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&zl(Fe,7)(Ko,7),r&2){let s;uo(s=fo())&&(i.formEmail=s.first),uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),gw("ngModelChange",function(l){return Jy(s),Zx(i.from,l)||(i.from=l),e_(l)}),og(),Z0(),Cl(4,"po-email",3),gw("ngModelChange",function(l){return Jy(s),Zx(i.to,l)||(i.to=l),e_(l)}),og(),Z0(),Cl(5,"po-email",4),gw("ngModelChange",function(l){return Jy(s),Zx(i.cc,l)||(i.cc=l),e_(l)}),og(),Z0(),Cl(6,"po-input",5),gw("ngModelChange",function(l){return Jy(s),Zx(i.subject,l)||(i.subject=l),e_(l)}),og(),Z0(),Cl(7,"po-textarea",6),gw("ngModelChange",function(l){return Jy(s),Zx(i.emailText,l)||(i.emailText=l),e_(l)}),og(),Z0(),og()(),Cl(8,"po-modal",7)(9,"div",8),Hl(10,"po-info",9)(11,"po-info",10),og(),Hl(12,"po-divider"),ix(13,Ve,4,1,"div"),Cl(14,"div",8),Hl(15,"po-info",11),og(),Hl(16,"po-divider"),Cl(17,"div",8)(18,"po-textarea",12),gw("ngModelChange",function(l){return Jy(s),Zx(i.emailText,l)||(i.emailText=l),e_(l)}),og(),Z0(),og()();}r&2&&(ZE("p-actions",i.getPageAction()),Lp(3),pw("ngModel",i.from),X0(),Lp(),pw("ngModel",i.to),X0(),Lp(),pw("ngModel",i.cc),X0(),Lp(),pw("ngModel",i.subject),X0(),Lp(),pw("ngModel",i.emailText),X0(),Lp(),ZE("p-primary-action",i.primaryAction),Lp(2),ZE("p-value",i.from),Lp(),ZE("p-value",i.to),Lp(2),ox(i.cc!==""?13:-1),Lp(2),ZE("p-value",i.subject),Lp(3),pw("ngModel",i.emailText),X0());},dependencies:[lY,sY,aY,gk,fk,_v,Uz,q3,rme,sme,Ko,SNe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Textarea - Email"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-textarea-email"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,We,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return a})();function je(a,Me){if(a&1&&(Cl(0,"div")(1,"div",8),Hl(2,"po-info",13),og(),Hl(3,"po-divider"),og()),a&2){let m=Ex();Lp(2),ZE("p-value",m.formEmail.get("cc").value);}}var Ce=(()=>{class a{formBuilder=f(fY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,am.required],to:[null,am.required],emailText:[null,am.required],subject:[null,am.required]});}getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&zl(Ko,7),r&2){let s;uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"form",1),Hl(2,"po-email",2),Z0(),Hl(3,"po-email",3),Z0(),Hl(4,"po-email",4),Z0(),Hl(5,"po-input",5),Z0(),Hl(6,"po-textarea",6),Z0(),og()(),Cl(7,"po-modal",7)(8,"div",8),Hl(9,"po-info",9)(10,"po-info",10),og(),Hl(11,"po-divider"),ix(12,je,4,1,"div"),Cl(13,"div",8),Hl(14,"po-info",11),og(),Hl(15,"po-divider"),Cl(16,"div",8),Hl(17,"po-textarea",12),Z0(),og()()),r&2&&(ZE("p-actions",i.getPageAction()),Lp(),ZE("formGroup",i.formEmail),Lp(),X0(),Lp(),X0(),Lp(),X0(),Lp(),X0(),Lp(),X0(),Lp(),ZE("p-primary-action",i.primaryAction),Lp(2),ZE("p-value",i.formEmail.get("from").value),Lp(),ZE("p-value",i.formEmail.get("to").value),Lp(2),ox(i.formEmail.get("cc").value?12:-1),Lp(2),ZE("p-value",i.formEmail.get("subject").value),Lp(3),ZE("ngModel",i.formEmail.get("emailText").value),X0());},dependencies:[lY,sY,aY,gk,bk,wk,_v,Uz,q3,rme,sme,Ko,SNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Textarea - Email Reactive Form"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-textarea-email-reactive-form"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ce],encapsulation:2})}return a})();var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoTextareaComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),og(),Cl(24,"p"),qx(25,"Importante:"),og(),Cl(26,"ul")(27,"li"),qx(28,"A propriedade "),Cl(29,"code"),qx(30,"name"),og(),qx(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),Cl(32,"code"),qx(33,"model"),og(),qx(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Cl(35,"em"),qx(36,"Angular"),og(),qx(37,", onde ser\xE1 necess\xE1rio informar o atributo "),Cl(38,"code"),qx(39,"name"),og(),qx(40," ou o atributo "),Cl(41,"code"),qx(42,'[ngModelOptions]="{standalone: true}"'),og(),qx(43,", por exemplo:"),og()(),Cl(44,"pre")(45,"code"),qx(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),og()(),Cl(47,"h4"),qx(48,"Acessibilidade tratada no componente"),og(),Cl(49,"p"),qx(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),og(),Cl(51,"ul")(52,"li"),qx(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Cl(54,"a",6),qx(55,"WCAG 4.1.2: Name, Role, Value"),og()(),Cl(56,"li"),qx(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Cl(58,"a",7),qx(59,"WCAG 2.4.12: Focus Appearance)"),og()(),Cl(60,"li"),qx(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Cl(62,"a",8),qx(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()()(),Cl(64,"h4"),qx(65,"Tokens customiz\xE1veis"),og(),Cl(66,"p"),qx(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(68,"blockquote")(69,"p"),qx(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(71,"a",9),qx(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(73,"."),og()(),Cl(74,"table")(75,"thead")(76,"tr")(77,"th"),qx(78,"Propriedade"),og(),Cl(79,"th"),qx(80,"Descri\xE7\xE3o"),og(),Cl(81,"th"),qx(82,"Valor Padr\xE3o"),og()()(),Cl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),qx(87,"Default Values"),og()(),Hl(88,"td")(89,"td"),og(),Cl(90,"tr")(91,"td")(92,"code"),qx(93,"--font-family"),og()(),Cl(94,"td"),qx(95,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(96,"td")(97,"code"),qx(98,"var(--font-family-theme)"),og()()(),Cl(99,"tr")(100,"td")(101,"code"),qx(102,"--font-size"),og()(),Cl(103,"td"),qx(104,"Tamanho da fonte"),og(),Cl(105,"td")(106,"code"),qx(107,"var(--font-size-default)"),og()()(),Cl(108,"tr")(109,"td")(110,"code"),qx(111,"--text-color-placeholder"),og()(),Cl(112,"td"),qx(113,"Cor do texto placeholder"),og(),Cl(114,"td")(115,"code"),qx(116,"var(--color-neutral-light-30)"),og()()(),Cl(117,"tr")(118,"td")(119,"code"),qx(120,"--color"),og()(),Cl(121,"td"),qx(122,"Cor pincipal do campo"),og(),Cl(123,"td")(124,"code"),qx(125,"var(--color-neutral-dark-70)"),og()()(),Cl(126,"tr")(127,"td")(128,"code"),qx(129,"--background"),og()(),Cl(130,"td"),qx(131,"Cor de background"),og(),Cl(132,"td")(133,"code"),qx(134,"var(--color-neutral-light-05)"),og()()(),Cl(135,"tr")(136,"td")(137,"code"),qx(138,"--field-container-title-justify"),og()(),Cl(139,"td"),qx(140,"Alinhamento horizontal do t\xEDtulo ("),Cl(141,"code"),qx(142,"justify-content"),og(),qx(143,")"),og(),Cl(144,"td")(145,"code"),qx(146,"space-between"),og()()(),Cl(147,"tr")(148,"td")(149,"code"),qx(150,"--field-container-title-flex"),og()(),Cl(151,"td"),qx(152,"Flex do t\xEDtulo ("),Cl(153,"code"),qx(154,"flex"),og(),qx(155,")"),og(),Cl(156,"td")(157,"code"),qx(158,"1 auto"),og()()()()()(),Cl(159,"div",10)(160,"h4",11),qx(161,"Seletor"),og(),Cl(162,"pre",12),qx(163,`<po-textarea
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
`),og()(),Cl(164,"h4",13),qx(165,"Propriedades"),og(),Cl(166,"table",14)(167,"tr",15)(168,"th",16),qx(169,"Nome"),og(),Cl(170,"th",16),qx(171,"Tipo"),og(),Cl(172,"th",16),qx(173,"Padr\xE3o"),og(),Cl(174,"th",16),qx(175,"Descri\xE7\xE3o"),og()(),Cl(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),qx(180," (p-additional-help)"),Hl(181,"br"),og()(),Cl(182,"div",21),qx(183,"Deprecated"),og()(),Cl(184,"td",22)(185,"code",23),qx(186,"EventEmitter"),og()(),Cl(187,"td",24),qx(188,"-"),og(),Cl(189,"td",25)(190,"em")(191,"strong"),qx(192,"(opcional)"),og()(),Cl(193,"p"),qx(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(195,"blockquote")(196,"p"),qx(197,"Essa propriedade est\xE1 "),Cl(198,"strong"),qx(199,"depreciada"),og(),qx(200," e ser\xE1 removida na vers\xE3o "),Cl(201,"code"),qx(202,"23.x.x"),og(),qx(203,". Recomendamos utilizar a propriedade "),Cl(204,"code"),qx(205,"p-helper"),og(),qx(206," que oferece mais recursos e flexibilidade."),og()()()(),Cl(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),qx(211," p-additional-help-tooltip"),Hl(212,"br"),og()(),Cl(213,"div",21),qx(214,"Deprecated"),og()(),Cl(215,"td",22)(216,"code",28),qx(217,"string"),og()(),Cl(218,"td",24),qx(219,"-"),og(),Cl(220,"td",25)(221,"em")(222,"strong"),qx(223,"(opcional)"),og()(),Cl(224,"p"),qx(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(226,"code"),qx(227,"po-helper"),og(),qx(228,`.
`),Cl(229,"strong"),qx(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(231,"blockquote")(232,"p"),qx(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(234,"blockquote")(235,"p"),qx(236,"Essa propriedade est\xE1 "),Cl(237,"strong"),qx(238,"depreciada"),og(),qx(239," e ser\xE1 removida na vers\xE3o "),Cl(240,"code"),qx(241,"23.x.x"),og(),qx(242,". Recomendamos utilizar a propriedade "),Cl(243,"code"),qx(244,"p-helper"),og(),qx(245," que oferece mais recursos e flexibilidade."),og()()()(),Cl(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),qx(250," p-append-in-body"),Hl(251,"br"),og()()(),Cl(252,"td",22)(253,"code",29),qx(254,"boolean"),og()(),Cl(255,"td",24)(256,"p")(257,"code"),qx(258,"false"),og()()(),Cl(259,"td",25)(260,"em")(261,"strong"),qx(262,"(opcional)"),og()(),Cl(263,"p"),qx(264,"Define que o popover ("),Cl(265,"code"),qx(266,"p-helper"),og(),qx(267," e/ou "),Cl(268,"code"),qx(269,"p-error-limit"),og(),qx(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(271,"blockquote")(272,"p"),qx(273,"Quando utilizado com "),Cl(274,"code"),qx(275,"p-helper"),og(),qx(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),qx(281," p-auto-focus"),Hl(282,"br"),og()()(),Cl(283,"td",22)(284,"code",29),qx(285,"boolean"),og()(),Cl(286,"td",24)(287,"p")(288,"code"),qx(289,"false"),og()()(),Cl(290,"td",25)(291,"em")(292,"strong"),qx(293,"(opcional)"),og()(),Cl(294,"p"),qx(295,"Aplica foco no elemento ao ser iniciado."),og(),Cl(296,"blockquote")(297,"p"),qx(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),qx(303," (p-blur)"),Hl(304,"br"),og()()(),Cl(305,"td",22)(306,"code",23),qx(307,"EventEmitter"),og()(),Cl(308,"td",24),qx(309,"-"),og(),Cl(310,"td",25)(311,"em")(312,"strong"),qx(313,"(opcional)"),og()(),Cl(314,"p"),qx(315,"Evento disparado ao sair do campo."),og()()(),Cl(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),qx(320," (p-change)"),Hl(321,"br"),og()()(),Cl(322,"td",22)(323,"code",23),qx(324,"EventEmitter"),og()(),Cl(325,"td",24),qx(326,"-"),og(),Cl(327,"td",25)(328,"em")(329,"strong"),qx(330,"(opcional)"),og()(),Cl(331,"p"),qx(332,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Cl(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),qx(337," (p-change-model)"),Hl(338,"br"),og()()(),Cl(339,"td",22)(340,"code",23),qx(341,"EventEmitter"),og()(),Cl(342,"td",24),qx(343,"-"),og(),Cl(344,"td",25)(345,"em")(346,"strong"),qx(347,"(opcional)"),og()(),Cl(348,"p"),qx(349,"Evento disparado ao alterar valor do model."),og()()(),Cl(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),qx(354," p-compact-label"),Hl(355,"br"),og()()(),Cl(356,"td",22)(357,"code",29),qx(358,"boolean"),og()(),Cl(359,"td",24)(360,"p")(361,"code"),qx(362,"false"),og()()(),Cl(363,"td",25)(364,"em")(365,"strong"),qx(366,"(opcional)"),og()(),Cl(367,"p"),qx(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(369,"p"),qx(370,"Quando habilitado ("),Cl(371,"code"),qx(372,"true"),og(),qx(373,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(374,"ul")(375,"li")(376,"code"),qx(377,"po-label"),og()(),Cl(378,"li")(379,"code"),qx(380,"p-requirement (showRequired)"),og()(),Cl(381,"li")(382,"code"),qx(383,"po-helper"),og()()(),Cl(384,"p"),qx(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(386,"p"),qx(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(388,"ul")(389,"li")(390,"code"),qx(391,"--field-container-title-justify"),og()(),Cl(392,"li")(393,"code"),qx(394,"--field-container-title-flex"),og()()(),Cl(395,"p"),qx(396,"Exemplo:"),og(),Cl(397,"pre")(398,"code"),qx(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(400,"p"),qx(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),qx(406," p-disabled"),Hl(407,"br"),og()()(),Cl(408,"td",22)(409,"code",29),qx(410,"boolean"),og()(),Cl(411,"td",24)(412,"p")(413,"code"),qx(414,"false"),og()()(),Cl(415,"td",25)(416,"em")(417,"strong"),qx(418,"(opcional)"),og()(),Cl(419,"p"),qx(420,"Indica que o campo ser\xE1 desabilitado."),og()()(),Cl(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),qx(425," (p-enter)"),Hl(426,"br"),og()()(),Cl(427,"td",22)(428,"code",23),qx(429,"EventEmitter"),og()(),Cl(430,"td",24),qx(431,"-"),og(),Cl(432,"td",25)(433,"em")(434,"strong"),qx(435,"(opcional)"),og()(),Cl(436,"p"),qx(437,"Evento disparado ao entrar do campo."),og()()(),Cl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),qx(442," p-error-limit"),Hl(443,"br"),og()()(),Cl(444,"td",22)(445,"code",29),qx(446,"boolean"),og()(),Cl(447,"td",24)(448,"p")(449,"code"),qx(450,"false"),og()()(),Cl(451,"td",25)(452,"em")(453,"strong"),qx(454,"(opcional)"),og()(),Cl(455,"p"),qx(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(457,"blockquote")(458,"p"),qx(459,"Caso essa propriedade seja definida como "),Cl(460,"code"),qx(461,"true"),og(),qx(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),qx(467," p-field-error-message"),Hl(468,"br"),og()()(),Cl(469,"td",22)(470,"code",28),qx(471,"string"),og()(),Cl(472,"td",24),qx(473,"-"),og(),Cl(474,"td",25)(475,"em")(476,"strong"),qx(477,"(opcional)"),og()(),Cl(478,"p"),qx(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Cl(480,"blockquote")(481,"p"),qx(482,"Necess\xE1rio que a propriedade "),Cl(483,"code"),qx(484,"p-required"),og(),qx(485," esteja habilitada."),og()()()(),Cl(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),qx(490," p-help"),Hl(491,"br"),og()()(),Cl(492,"td",22)(493,"code",28),qx(494,"string"),og()(),Cl(495,"td",24),qx(496,"-"),og(),Cl(497,"td",25)(498,"em")(499,"strong"),qx(500,"(opcional)"),og()(),Cl(501,"p"),qx(502,"Texto de apoio do campo."),og()()(),Cl(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),qx(507," (p-keydown)"),Hl(508,"br"),og()()(),Cl(509,"td",22)(510,"code",23),qx(511,"EventEmitter"),og()(),Cl(512,"td",24),qx(513,"-"),og(),Cl(514,"td",25)(515,"em")(516,"strong"),qx(517,"(opcional)"),og()(),Cl(518,"p"),qx(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(520,"code"),qx(521,"KeyboardEvent"),og(),qx(522," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),qx(527," p-label"),Hl(528,"br"),og()()(),Cl(529,"td",22)(530,"code",28),qx(531,"string"),og()(),Cl(532,"td",24),qx(533,"-"),og(),Cl(534,"td",25)(535,"em")(536,"strong"),qx(537,"(opcional)"),og()(),Cl(538,"p"),qx(539,"Label do campo."),og()()(),Cl(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),qx(544," p-label-text-wrap"),Hl(545,"br"),og()()(),Cl(546,"td",22)(547,"code",29),qx(548,"boolean"),og()(),Cl(549,"td",24)(550,"p")(551,"code"),qx(552,"false"),og()()(),Cl(553,"td",25)(554,"em")(555,"strong"),qx(556,"(opcional)"),og()(),Cl(557,"p"),qx(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(559,"code"),qx(560,"p-label"),og(),qx(561,". Quando "),Cl(562,"code"),qx(563,"p-label-text-wrap"),og(),qx(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),qx(569," p-loading"),Hl(570,"br"),og()()(),Cl(571,"td",22)(572,"code",29),qx(573,"boolean"),og()(),Cl(574,"td",24)(575,"p")(576,"code"),qx(577,"false"),og()()(),Cl(578,"td",25)(579,"em")(580,"strong"),qx(581,"(opcional)"),og()(),Cl(582,"p"),qx(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),qx(588," p-maxlength"),Hl(589,"br"),og()()(),Cl(590,"td",22)(591,"code",30),qx(592,"number"),og()(),Cl(593,"td",24),qx(594,"-"),og(),Cl(595,"td",25)(596,"em")(597,"strong"),qx(598,"(opcional)"),og()(),Cl(599,"p"),qx(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Cl(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),qx(605," p-minlength"),Hl(606,"br"),og()()(),Cl(607,"td",22)(608,"code",30),qx(609,"number"),og()(),Cl(610,"td",24),qx(611,"-"),og(),Cl(612,"td",25)(613,"em")(614,"strong"),qx(615,"(opcional)"),og()(),Cl(616,"p"),qx(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Cl(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),qx(622," name"),Hl(623,"br"),og()()(),Cl(624,"td",22)(625,"code",28),qx(626,"string"),og()(),Cl(627,"td",24),qx(628,"-"),og(),Cl(629,"td",25)(630,"p"),qx(631,"Nome e Id do componente."),og()()(),Cl(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),qx(636," p-optional"),Hl(637,"br"),og()()(),Cl(638,"td",22)(639,"code",29),qx(640,"boolean"),og()(),Cl(641,"td",24)(642,"p")(643,"code"),qx(644,"false"),og()()(),Cl(645,"td",25)(646,"em")(647,"strong"),qx(648,"(opcional)"),og()(),Cl(649,"p"),qx(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(651,"blockquote")(652,"p"),qx(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(654,"ul")(655,"li"),qx(656,"O campo conter "),Cl(657,"code"),qx(658,"p-required"),og(),qx(659,";"),og(),Cl(660,"li"),qx(661,"N\xE3o possuir "),Cl(662,"code"),qx(663,"p-help"),og(),qx(664," e/ou "),Cl(665,"code"),qx(666,"p-label"),og(),qx(667,"."),og()()()(),Cl(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),qx(672," p-placeholder"),Hl(673,"br"),og()()(),Cl(674,"td",22)(675,"code",28),qx(676,"string"),og()(),Cl(677,"td",24),qx(678,"-"),og(),Cl(679,"td",25)(680,"p"),qx(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),qx(686," p-helper"),Hl(687,"br"),og()()(),Cl(688,"td",22)(689,"code",31),qx(690,"PoHelperOptions "),og(),Cl(691,"code",28),qx(692," string"),og()(),Cl(693,"td",24),qx(694,"-"),og(),Cl(695,"td",25)(696,"em")(697,"strong"),qx(698,"(opcional)"),og()(),Cl(699,"p"),qx(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(701,"code"),qx(702,"p-label"),og(),qx(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(704,"code"),qx(705,"p-label"),og(),qx(706,"."),og(),Cl(707,"blockquote")(708,"p"),qx(709,"Para mais informa\xE7\xF5es acesse: "),Cl(710,"a",32),qx(711,"https://po-ui.io/documentation/po-helper"),og(),qx(712,"."),og()(),Cl(713,"blockquote")(714,"p"),qx(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(716,"code"),qx(717,"p-additional-help-tooltip"),og(),qx(718," e "),Cl(719,"code"),qx(720,"p-additional-help"),og(),qx(721,") ser\xE1 ignorado."),og()()()(),Cl(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),qx(726," p-readonly"),Hl(727,"br"),og()()(),Cl(728,"td",22)(729,"code",29),qx(730,"boolean"),og()(),Cl(731,"td",24)(732,"p")(733,"code"),qx(734,"false"),og()()(),Cl(735,"td",25)(736,"em")(737,"strong"),qx(738,"(opcional)"),og()(),Cl(739,"p"),qx(740,"Indica que o campo ser\xE1 somente leitura."),og()()(),Cl(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),qx(745," p-required"),Hl(746,"br"),og()()(),Cl(747,"td",22)(748,"code",29),qx(749,"boolean"),og()(),Cl(750,"td",24)(751,"p")(752,"code"),qx(753,"false"),og()()(),Cl(754,"td",25)(755,"em")(756,"strong"),qx(757,"(opcional)"),og()(),Cl(758,"p"),qx(759,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(760,"blockquote")(761,"p"),qx(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(763,"code"),qx(764,"(p-disabled)"),og(),qx(765,"."),og()()()(),Cl(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),qx(770," p-rows"),Hl(771,"br"),og()()(),Cl(772,"td",22)(773,"code",30),qx(774,"number"),og()(),Cl(775,"td",24)(776,"p")(777,"code"),qx(778,"3"),og()()(),Cl(779,"td",25)(780,"em")(781,"strong"),qx(782,"(opcional)"),og()(),Cl(783,"p"),qx(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),og()()(),Cl(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),qx(789," p-show-required"),Hl(790,"br"),og()()(),Cl(791,"td",22)(792,"code",29),qx(793,"boolean"),og()(),Cl(794,"td",24),qx(795,"-"),og(),Cl(796,"td",25)(797,"p"),qx(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(799,"blockquote")(800,"p"),qx(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(802,"ul")(803,"li"),qx(804,"N\xE3o possuir "),Cl(805,"code"),qx(806,"p-help"),og(),qx(807," e/ou "),Cl(808,"code"),qx(809,"p-label"),og(),qx(810,"."),og()()()(),Cl(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),qx(815," p-size"),Hl(816,"br"),og()()(),Cl(817,"td",22)(818,"code",28),qx(819,"string"),og()(),Cl(820,"td",24)(821,"p")(822,"code"),qx(823,"medium"),og()()(),Cl(824,"td",25)(825,"em")(826,"strong"),qx(827,"(opcional)"),og()(),Cl(828,"p"),qx(829,"Define o tamanho do componente:"),og(),Cl(830,"ul")(831,"li")(832,"code"),qx(833,"small"),og(),qx(834," (dispon\xEDvel apenas para acessibilidade AA)"),og(),Cl(835,"li")(836,"code"),qx(837,"medium"),og()()(),Cl(838,"blockquote")(839,"p"),qx(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(841,"code"),qx(842,"medium"),og(),qx(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(844,"a",33),qx(845,"po-theme"),og(),qx(846,"."),og()()()()(),Cl(847,"h3",13),qx(848,"M\xE9todos"),og(),Cl(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),qx(855," focus "),og()()()()(),Cl(856,"tr",25)(857,"td",25)(858,"p"),qx(859,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(860,"p"),qx(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(862,"pre")(863,"code"),qx(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),og()()()()(),Hl(865,"br"),Cl(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),qx(872," showAdditionalHelp "),og()()()()(),Cl(873,"tr",25)(874,"td",25)(875,"p"),qx(876,"M\xE9todo que exibe "),Cl(877,"code"),qx(878,"p-helper"),og(),qx(879," ou executa a a\xE7\xE3o definida em "),Cl(880,"code"),qx(881,"p-helper{eventOnClick}"),og(),qx(882," ou em "),Cl(883,"code"),qx(884,"p-additionalHelp"),og(),qx(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(886,"code"),qx(887,"p-keydown"),og(),qx(888,"."),og(),Cl(889,"blockquote")(890,"p"),qx(891,"Exibe ou oculta o conte\xFAdo do componente "),Cl(892,"code"),qx(893,"po-helper"),og(),qx(894," quando o componente estiver com foco."),og()(),Cl(895,"pre")(896,"code"),qx(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),og()(),Cl(898,"pre")(899,"code"),qx(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(901,"br"),og());},dependencies:[Zr],encapsulation:2})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-textarea-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ge,he,fe,ve,Te],encapsulation:2})}return a})();var Re=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(Re),bL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,we]})}return a})();export{yt as DocPoTextareaModule};