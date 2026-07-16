import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,cM as cY,cN as lm,b5 as $he,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,c9 as Yhe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,cz as kz,b6 as Yo,a3 as lNe,aq as gx,at as mx,av as Yl,aw as uo,ax as fo,cQ as kk,cR as Ok,aD as Ky,aT as sN,aE as Xy,aA as Nx}from'./main-56B5DD5U.js';var Ee=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic"]],standalone:false,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&Gl(0,"po-textarea",0);},dependencies:[$he],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Textarea Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,_e,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ee],encapsulation:2,changeDetection:1})}return a})();var be=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs"]],standalone:false,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Sx();Tl(0,"po-textarea",1),ww("ngModelChange",function(l){return Ky(s),sN(i.textarea,l)||(i.textarea=l),Xy(l)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(l){return Ky(s),sN(i.label,l)||(i.label=l),Xy(l)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(l){return Ky(s),sN(i.help,l)||(i.help=l),Xy(l)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(l){return Ky(s),sN(i.helperText,l)||(i.helperText=l),Xy(l)}),sg(),r0(),Tl(11,"po-input",8),ww("ngModelChange",function(l){return Ky(s),sN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),sg(),r0(),Tl(12,"po-input",9),ww("ngModelChange",function(l){return Ky(s),sN(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),Xy(l)}),sg(),r0(),Tl(13,"po-number",10),ww("ngModelChange",function(l){return Ky(s),sN(i.rows,l)||(i.rows=l),Xy(l)}),sg(),r0(),Tl(14,"po-number",11),ww("ngModelChange",function(l){return Ky(s),sN(i.minlength,l)||(i.minlength=l),Xy(l)}),sg(),r0(),Tl(15,"po-number",12),ww("ngModelChange",function(l){return Ky(s),sN(i.maxlength,l)||(i.maxlength=l),Xy(l)}),sg(),r0(),Tl(16,"po-checkbox-group",13),ww("ngModelChange",function(l){return Ky(s),sN(i.properties,l)||(i.properties=l),Xy(l)}),sg(),r0(),Tl(17,"po-radio-group",14),ww("ngModelChange",function(l){return Ky(s),sN(i.size,l)||(i.size=l),Xy(l)}),sg(),r0(),Tl(18,"div",2)(19,"po-button",15),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Ew("ngModel",i.textarea),nw("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),o0(),Vp(3),nw("p-value",i.textarea),Vp(),nw("p-value",i.event),Vp(4),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.helperText),o0(),Vp(),Ew("ngModel",i.placeholder),o0(),Vp(),Ew("ngModel",i.fieldErrorMessage),o0(),Vp(),Ew("ngModel",i.rows),o0(),Vp(),Ew("ngModel",i.minlength),o0(),Vp(),Ew("ngModel",i.maxlength),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Hhe,Dde,$he,Yhe],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Textarea Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-textarea
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ke,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,be],encapsulation:2,changeDetection:1})}return a})();var Fe=["formEmail"];function Ve(a,Me){if(a&1&&(Tl(0,"div")(1,"div",8),Gl(2,"po-info",13),sg(),Gl(3,"po-divider"),sg()),a&2){let m=Nx();Vp(2),nw("p-value",m.cc);}}var Se=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&Yl(Fe,7)(Yo,7),r&2){let s;uo(s=fo())&&(i.formEmail=s.first),uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=Sx();Tl(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),ww("ngModelChange",function(l){return Ky(s),sN(i.from,l)||(i.from=l),Xy(l)}),sg(),r0(),Tl(4,"po-email",3),ww("ngModelChange",function(l){return Ky(s),sN(i.to,l)||(i.to=l),Xy(l)}),sg(),r0(),Tl(5,"po-email",4),ww("ngModelChange",function(l){return Ky(s),sN(i.cc,l)||(i.cc=l),Xy(l)}),sg(),r0(),Tl(6,"po-input",5),ww("ngModelChange",function(l){return Ky(s),sN(i.subject,l)||(i.subject=l),Xy(l)}),sg(),r0(),Tl(7,"po-textarea",6),ww("ngModelChange",function(l){return Ky(s),sN(i.emailText,l)||(i.emailText=l),Xy(l)}),sg(),r0(),sg()(),Tl(8,"po-modal",7)(9,"div",8),Gl(10,"po-info",9)(11,"po-info",10),sg(),Gl(12,"po-divider"),gx(13,Ve,4,1,"div"),Tl(14,"div",8),Gl(15,"po-info",11),sg(),Gl(16,"po-divider"),Tl(17,"div",8)(18,"po-textarea",12),ww("ngModelChange",function(l){return Ky(s),sN(i.emailText,l)||(i.emailText=l),Xy(l)}),sg(),r0(),sg()();}r&2&&(nw("p-actions",i.getPageAction()),Vp(3),Ew("ngModel",i.from),o0(),Vp(),Ew("ngModel",i.to),o0(),Vp(),Ew("ngModel",i.cc),o0(),Vp(),Ew("ngModel",i.subject),o0(),Vp(),Ew("ngModel",i.emailText),o0(),Vp(),nw("p-primary-action",i.primaryAction),Vp(2),nw("p-value",i.from),Vp(),nw("p-value",i.to),Vp(2),mx(i.cc!==""?13:-1),Vp(2),nw("p-value",i.subject),Vp(3),Ew("ngModel",i.emailText),o0());},dependencies:[oY,nY,rY,Sk,Ck,mv,kz,O3,$he,Yhe,Yo,lNe],encapsulation:2,changeDetection:1})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Textarea - Email"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-email"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,We,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Se],encapsulation:2,changeDetection:1})}return a})();function je(a,Me){if(a&1&&(Tl(0,"div")(1,"div",8),Gl(2,"po-info",13),sg(),Gl(3,"po-divider"),sg()),a&2){let m=Nx();Vp(2),nw("p-value",m.formEmail.get("cc").value);}}var Ce=(()=>{class a{formBuilder=f(cY);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset();},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,lm.required],to:[null,lm.required],emailText:[null,lm.required],subject:[null,lm.required]});}getPageAction(){let m=this.formEmail?!this.formEmail.valid:true;return [{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset();}send(){this.poModal.open();}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&Yl(Yo,7),r&2){let s;uo(s=fo())&&(i.poModal=s.first);}},standalone:false,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"form",1),Gl(2,"po-email",2),r0(),Gl(3,"po-email",3),r0(),Gl(4,"po-email",4),r0(),Gl(5,"po-input",5),r0(),Gl(6,"po-textarea",6),r0(),sg()(),Tl(7,"po-modal",7)(8,"div",8),Gl(9,"po-info",9)(10,"po-info",10),sg(),Gl(11,"po-divider"),gx(12,je,4,1,"div"),Tl(13,"div",8),Gl(14,"po-info",11),sg(),Gl(15,"po-divider"),Tl(16,"div",8),Gl(17,"po-textarea",12),r0(),sg()()),r&2&&(nw("p-actions",i.getPageAction()),Vp(),nw("formGroup",i.formEmail),Vp(),o0(),Vp(),o0(),Vp(),o0(),Vp(),o0(),Vp(),o0(),Vp(),nw("p-primary-action",i.primaryAction),Vp(2),nw("p-value",i.formEmail.get("from").value),Vp(),nw("p-value",i.formEmail.get("to").value),Vp(2),mx(i.formEmail.get("cc").value?12:-1),Vp(2),nw("p-value",i.formEmail.get("subject").value),Vp(3),nw("ngModel",i.formEmail.get("emailText").value),o0());},dependencies:[oY,nY,rY,Sk,kk,Ok,mv,kz,O3,$he,Yhe,Yo,lNe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Textarea - Email Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-textarea-email-reactive-form"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ce],encapsulation:2,changeDetection:1})}return a})();var Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-textarea-doc"]],standalone:false,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoTextareaComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),sg(),Tl(24,"p"),iN(25,"Importante:"),sg(),Tl(26,"ul")(27,"li"),iN(28,"A propriedade "),Tl(29,"code"),iN(30,"name"),sg(),iN(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),Tl(32,"code"),iN(33,"model"),sg(),iN(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),Tl(35,"em"),iN(36,"Angular"),sg(),iN(37,", onde ser\xE1 necess\xE1rio informar o atributo "),Tl(38,"code"),iN(39,"name"),sg(),iN(40," ou o atributo "),Tl(41,"code"),iN(42,'[ngModelOptions]="{standalone: true}"'),sg(),iN(43,", por exemplo:"),sg()(),Tl(44,"pre")(45,"code"),iN(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),sg()(),Tl(47,"h4"),iN(48,"Acessibilidade tratada no componente"),sg(),Tl(49,"p"),iN(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),sg(),Tl(51,"ul")(52,"li"),iN(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),Tl(54,"a",6),iN(55,"WCAG 4.1.2: Name, Role, Value"),sg()(),Tl(56,"li"),iN(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),Tl(58,"a",7),iN(59,"WCAG 2.4.12: Focus Appearance)"),sg()(),Tl(60,"li"),iN(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),Tl(62,"a",8),iN(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),sg()()(),Tl(64,"h4"),iN(65,"Tokens customiz\xE1veis"),sg(),Tl(66,"p"),iN(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(68,"blockquote")(69,"p"),iN(70,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(71,"a",9),iN(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(73,"."),sg()(),Tl(74,"table")(75,"thead")(76,"tr")(77,"th"),iN(78,"Propriedade"),sg(),Tl(79,"th"),iN(80,"Descri\xE7\xE3o"),sg(),Tl(81,"th"),iN(82,"Valor Padr\xE3o"),sg()()(),Tl(83,"tbody")(84,"tr")(85,"td")(86,"strong"),iN(87,"Default Values"),sg()(),Gl(88,"td")(89,"td"),sg(),Tl(90,"tr")(91,"td")(92,"code"),iN(93,"--font-family"),sg()(),Tl(94,"td"),iN(95,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(96,"td")(97,"code"),iN(98,"var(--font-family-theme)"),sg()()(),Tl(99,"tr")(100,"td")(101,"code"),iN(102,"--font-size"),sg()(),Tl(103,"td"),iN(104,"Tamanho da fonte"),sg(),Tl(105,"td")(106,"code"),iN(107,"var(--font-size-default)"),sg()()(),Tl(108,"tr")(109,"td")(110,"code"),iN(111,"--text-color-placeholder"),sg()(),Tl(112,"td"),iN(113,"Cor do texto placeholder"),sg(),Tl(114,"td")(115,"code"),iN(116,"var(--color-neutral-light-30)"),sg()()(),Tl(117,"tr")(118,"td")(119,"code"),iN(120,"--color"),sg()(),Tl(121,"td"),iN(122,"Cor pincipal do campo"),sg(),Tl(123,"td")(124,"code"),iN(125,"var(--color-neutral-dark-70)"),sg()()(),Tl(126,"tr")(127,"td")(128,"code"),iN(129,"--background"),sg()(),Tl(130,"td"),iN(131,"Cor de background"),sg(),Tl(132,"td")(133,"code"),iN(134,"var(--color-neutral-light-05)"),sg()()(),Tl(135,"tr")(136,"td")(137,"code"),iN(138,"--field-container-title-justify"),sg()(),Tl(139,"td"),iN(140,"Alinhamento horizontal do t\xEDtulo ("),Tl(141,"code"),iN(142,"justify-content"),sg(),iN(143,")"),sg(),Tl(144,"td")(145,"code"),iN(146,"space-between"),sg()()(),Tl(147,"tr")(148,"td")(149,"code"),iN(150,"--field-container-title-flex"),sg()(),Tl(151,"td"),iN(152,"Flex do t\xEDtulo ("),Tl(153,"code"),iN(154,"flex"),sg(),iN(155,")"),sg(),Tl(156,"td")(157,"code"),iN(158,"1 auto"),sg()()()()()(),Tl(159,"div",10)(160,"h4",11),iN(161,"Seletor"),sg(),Tl(162,"pre",12),iN(163,`<po-textarea
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
`),sg()(),Tl(164,"h4",13),iN(165,"Propriedades"),sg(),Tl(166,"table",14)(167,"tr",15)(168,"th",16),iN(169,"Nome"),sg(),Tl(170,"th",16),iN(171,"Tipo"),sg(),Tl(172,"th",16),iN(173,"Padr\xE3o"),sg(),Tl(174,"th",16),iN(175,"Descri\xE7\xE3o"),sg()(),Tl(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),iN(180," (p-additional-help)"),Gl(181,"br"),sg()(),Tl(182,"div",21),iN(183,"Deprecated"),sg()(),Tl(184,"td",22)(185,"code",23),iN(186,"EventEmitter"),sg()(),Tl(187,"td",24),iN(188,"-"),sg(),Tl(189,"td",25)(190,"em")(191,"strong"),iN(192,"(opcional)"),sg()(),Tl(193,"p"),iN(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(195,"blockquote")(196,"p"),iN(197,"Essa propriedade est\xE1 "),Tl(198,"strong"),iN(199,"depreciada"),sg(),iN(200," e ser\xE1 removida na vers\xE3o "),Tl(201,"code"),iN(202,"23.x.x"),sg(),iN(203,". Recomendamos utilizar a propriedade "),Tl(204,"code"),iN(205,"p-helper"),sg(),iN(206," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),iN(211," p-additional-help-tooltip"),Gl(212,"br"),sg()(),Tl(213,"div",21),iN(214,"Deprecated"),sg()(),Tl(215,"td",22)(216,"code",28),iN(217,"string"),sg()(),Tl(218,"td",24),iN(219,"-"),sg(),Tl(220,"td",25)(221,"em")(222,"strong"),iN(223,"(opcional)"),sg()(),Tl(224,"p"),iN(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(226,"code"),iN(227,"po-helper"),sg(),iN(228,`.
`),Tl(229,"strong"),iN(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(231,"blockquote")(232,"p"),iN(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(234,"blockquote")(235,"p"),iN(236,"Essa propriedade est\xE1 "),Tl(237,"strong"),iN(238,"depreciada"),sg(),iN(239," e ser\xE1 removida na vers\xE3o "),Tl(240,"code"),iN(241,"23.x.x"),sg(),iN(242,". Recomendamos utilizar a propriedade "),Tl(243,"code"),iN(244,"p-helper"),sg(),iN(245," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),iN(250," p-append-in-body"),Gl(251,"br"),sg()()(),Tl(252,"td",22)(253,"code",29),iN(254,"boolean"),sg()(),Tl(255,"td",24)(256,"p")(257,"code"),iN(258,"false"),sg()()(),Tl(259,"td",25)(260,"em")(261,"strong"),iN(262,"(opcional)"),sg()(),Tl(263,"p"),iN(264,"Define que o popover ("),Tl(265,"code"),iN(266,"p-helper"),sg(),iN(267," e/ou "),Tl(268,"code"),iN(269,"p-error-limit"),sg(),iN(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(271,"blockquote")(272,"p"),iN(273,"Quando utilizado com "),Tl(274,"code"),iN(275,"p-helper"),sg(),iN(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),iN(281," p-auto-focus"),Gl(282,"br"),sg()()(),Tl(283,"td",22)(284,"code",29),iN(285,"boolean"),sg()(),Tl(286,"td",24)(287,"p")(288,"code"),iN(289,"false"),sg()()(),Tl(290,"td",25)(291,"em")(292,"strong"),iN(293,"(opcional)"),sg()(),Tl(294,"p"),iN(295,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(296,"blockquote")(297,"p"),iN(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),iN(303," (p-blur)"),Gl(304,"br"),sg()()(),Tl(305,"td",22)(306,"code",23),iN(307,"EventEmitter"),sg()(),Tl(308,"td",24),iN(309,"-"),sg(),Tl(310,"td",25)(311,"em")(312,"strong"),iN(313,"(opcional)"),sg()(),Tl(314,"p"),iN(315,"Evento disparado ao sair do campo."),sg()()(),Tl(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),iN(320," (p-change)"),Gl(321,"br"),sg()()(),Tl(322,"td",22)(323,"code",23),iN(324,"EventEmitter"),sg()(),Tl(325,"td",24),iN(326,"-"),sg(),Tl(327,"td",25)(328,"em")(329,"strong"),iN(330,"(opcional)"),sg()(),Tl(331,"p"),iN(332,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Tl(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),iN(337," (p-change-model)"),Gl(338,"br"),sg()()(),Tl(339,"td",22)(340,"code",23),iN(341,"EventEmitter"),sg()(),Tl(342,"td",24),iN(343,"-"),sg(),Tl(344,"td",25)(345,"em")(346,"strong"),iN(347,"(opcional)"),sg()(),Tl(348,"p"),iN(349,"Evento disparado ao alterar valor do model."),sg()()(),Tl(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),iN(354," p-compact-label"),Gl(355,"br"),sg()()(),Tl(356,"td",22)(357,"code",29),iN(358,"boolean"),sg()(),Tl(359,"td",24)(360,"p")(361,"code"),iN(362,"false"),sg()()(),Tl(363,"td",25)(364,"em")(365,"strong"),iN(366,"(opcional)"),sg()(),Tl(367,"p"),iN(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(369,"p"),iN(370,"Quando habilitado ("),Tl(371,"code"),iN(372,"true"),sg(),iN(373,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(374,"ul")(375,"li")(376,"code"),iN(377,"po-label"),sg()(),Tl(378,"li")(379,"code"),iN(380,"p-requirement (showRequired)"),sg()(),Tl(381,"li")(382,"code"),iN(383,"po-helper"),sg()()(),Tl(384,"p"),iN(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(386,"p"),iN(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(388,"ul")(389,"li")(390,"code"),iN(391,"--field-container-title-justify"),sg()(),Tl(392,"li")(393,"code"),iN(394,"--field-container-title-flex"),sg()()(),Tl(395,"p"),iN(396,"Exemplo:"),sg(),Tl(397,"pre")(398,"code"),iN(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(400,"p"),iN(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),iN(406," p-disabled"),Gl(407,"br"),sg()()(),Tl(408,"td",22)(409,"code",29),iN(410,"boolean"),sg()(),Tl(411,"td",24)(412,"p")(413,"code"),iN(414,"false"),sg()()(),Tl(415,"td",25)(416,"em")(417,"strong"),iN(418,"(opcional)"),sg()(),Tl(419,"p"),iN(420,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),iN(425," (p-enter)"),Gl(426,"br"),sg()()(),Tl(427,"td",22)(428,"code",23),iN(429,"EventEmitter"),sg()(),Tl(430,"td",24),iN(431,"-"),sg(),Tl(432,"td",25)(433,"em")(434,"strong"),iN(435,"(opcional)"),sg()(),Tl(436,"p"),iN(437,"Evento disparado ao entrar do campo."),sg()()(),Tl(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),iN(442," p-error-limit"),Gl(443,"br"),sg()()(),Tl(444,"td",22)(445,"code",29),iN(446,"boolean"),sg()(),Tl(447,"td",24)(448,"p")(449,"code"),iN(450,"false"),sg()()(),Tl(451,"td",25)(452,"em")(453,"strong"),iN(454,"(opcional)"),sg()(),Tl(455,"p"),iN(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(457,"blockquote")(458,"p"),iN(459,"Caso essa propriedade seja definida como "),Tl(460,"code"),iN(461,"true"),sg(),iN(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),iN(467," p-field-error-message"),Gl(468,"br"),sg()()(),Tl(469,"td",22)(470,"code",28),iN(471,"string"),sg()(),Tl(472,"td",24),iN(473,"-"),sg(),Tl(474,"td",25)(475,"em")(476,"strong"),iN(477,"(opcional)"),sg()(),Tl(478,"p"),iN(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(480,"blockquote")(481,"p"),iN(482,"Necess\xE1rio que a propriedade "),Tl(483,"code"),iN(484,"p-required"),sg(),iN(485," esteja habilitada."),sg()()()(),Tl(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),iN(490," p-help"),Gl(491,"br"),sg()()(),Tl(492,"td",22)(493,"code",28),iN(494,"string"),sg()(),Tl(495,"td",24),iN(496,"-"),sg(),Tl(497,"td",25)(498,"em")(499,"strong"),iN(500,"(opcional)"),sg()(),Tl(501,"p"),iN(502,"Texto de apoio do campo."),sg()()(),Tl(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),iN(507," (p-keydown)"),Gl(508,"br"),sg()()(),Tl(509,"td",22)(510,"code",23),iN(511,"EventEmitter"),sg()(),Tl(512,"td",24),iN(513,"-"),sg(),Tl(514,"td",25)(515,"em")(516,"strong"),iN(517,"(opcional)"),sg()(),Tl(518,"p"),iN(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(520,"code"),iN(521,"KeyboardEvent"),sg(),iN(522," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),iN(527," p-label"),Gl(528,"br"),sg()()(),Tl(529,"td",22)(530,"code",28),iN(531,"string"),sg()(),Tl(532,"td",24),iN(533,"-"),sg(),Tl(534,"td",25)(535,"em")(536,"strong"),iN(537,"(opcional)"),sg()(),Tl(538,"p"),iN(539,"Label do campo."),sg()()(),Tl(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),iN(544," p-label-text-wrap"),Gl(545,"br"),sg()()(),Tl(546,"td",22)(547,"code",29),iN(548,"boolean"),sg()(),Tl(549,"td",24)(550,"p")(551,"code"),iN(552,"false"),sg()()(),Tl(553,"td",25)(554,"em")(555,"strong"),iN(556,"(opcional)"),sg()(),Tl(557,"p"),iN(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(559,"code"),iN(560,"p-label"),sg(),iN(561,". Quando "),Tl(562,"code"),iN(563,"p-label-text-wrap"),sg(),iN(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),iN(569," p-loading"),Gl(570,"br"),sg()()(),Tl(571,"td",22)(572,"code",29),iN(573,"boolean"),sg()(),Tl(574,"td",24)(575,"p")(576,"code"),iN(577,"false"),sg()()(),Tl(578,"td",25)(579,"em")(580,"strong"),iN(581,"(opcional)"),sg()(),Tl(582,"p"),iN(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),iN(588," p-maxlength"),Gl(589,"br"),sg()()(),Tl(590,"td",22)(591,"code",30),iN(592,"number"),sg()(),Tl(593,"td",24),iN(594,"-"),sg(),Tl(595,"td",25)(596,"em")(597,"strong"),iN(598,"(opcional)"),sg()(),Tl(599,"p"),iN(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Tl(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),iN(605," p-minlength"),Gl(606,"br"),sg()()(),Tl(607,"td",22)(608,"code",30),iN(609,"number"),sg()(),Tl(610,"td",24),iN(611,"-"),sg(),Tl(612,"td",25)(613,"em")(614,"strong"),iN(615,"(opcional)"),sg()(),Tl(616,"p"),iN(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Tl(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),iN(622," name"),Gl(623,"br"),sg()()(),Tl(624,"td",22)(625,"code",28),iN(626,"string"),sg()(),Tl(627,"td",24),iN(628,"-"),sg(),Tl(629,"td",25)(630,"p"),iN(631,"Nome e Id do componente."),sg()()(),Tl(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),iN(636," p-optional"),Gl(637,"br"),sg()()(),Tl(638,"td",22)(639,"code",29),iN(640,"boolean"),sg()(),Tl(641,"td",24)(642,"p")(643,"code"),iN(644,"false"),sg()()(),Tl(645,"td",25)(646,"em")(647,"strong"),iN(648,"(opcional)"),sg()(),Tl(649,"p"),iN(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(651,"blockquote")(652,"p"),iN(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(654,"ul")(655,"li"),iN(656,"O campo conter "),Tl(657,"code"),iN(658,"p-required"),sg(),iN(659,";"),sg(),Tl(660,"li"),iN(661,"N\xE3o possuir "),Tl(662,"code"),iN(663,"p-help"),sg(),iN(664," e/ou "),Tl(665,"code"),iN(666,"p-label"),sg(),iN(667,"."),sg()()()(),Tl(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),iN(672," p-placeholder"),Gl(673,"br"),sg()()(),Tl(674,"td",22)(675,"code",28),iN(676,"string"),sg()(),Tl(677,"td",24),iN(678,"-"),sg(),Tl(679,"td",25)(680,"p"),iN(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),iN(686," p-helper"),Gl(687,"br"),sg()()(),Tl(688,"td",22)(689,"code",31),iN(690,"PoHelperOptions "),sg(),Tl(691,"code",28),iN(692," string"),sg()(),Tl(693,"td",24),iN(694,"-"),sg(),Tl(695,"td",25)(696,"em")(697,"strong"),iN(698,"(opcional)"),sg()(),Tl(699,"p"),iN(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(701,"code"),iN(702,"p-label"),sg(),iN(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(704,"code"),iN(705,"p-label"),sg(),iN(706,"."),sg(),Tl(707,"blockquote")(708,"p"),iN(709,"Para mais informa\xE7\xF5es acesse: "),Tl(710,"a",32),iN(711,"https://po-ui.io/documentation/po-helper"),sg(),iN(712,"."),sg()(),Tl(713,"blockquote")(714,"p"),iN(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(716,"code"),iN(717,"p-additional-help-tooltip"),sg(),iN(718," e "),Tl(719,"code"),iN(720,"p-additional-help"),sg(),iN(721,") ser\xE1 ignorado."),sg()()()(),Tl(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),iN(726," p-readonly"),Gl(727,"br"),sg()()(),Tl(728,"td",22)(729,"code",29),iN(730,"boolean"),sg()(),Tl(731,"td",24)(732,"p")(733,"code"),iN(734,"false"),sg()()(),Tl(735,"td",25)(736,"em")(737,"strong"),iN(738,"(opcional)"),sg()(),Tl(739,"p"),iN(740,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Tl(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),iN(745," p-required"),Gl(746,"br"),sg()()(),Tl(747,"td",22)(748,"code",29),iN(749,"boolean"),sg()(),Tl(750,"td",24)(751,"p")(752,"code"),iN(753,"false"),sg()()(),Tl(754,"td",25)(755,"em")(756,"strong"),iN(757,"(opcional)"),sg()(),Tl(758,"p"),iN(759,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(760,"blockquote")(761,"p"),iN(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(763,"code"),iN(764,"(p-disabled)"),sg(),iN(765,"."),sg()()()(),Tl(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),iN(770," p-rows"),Gl(771,"br"),sg()()(),Tl(772,"td",22)(773,"code",30),iN(774,"number"),sg()(),Tl(775,"td",24)(776,"p")(777,"code"),iN(778,"3"),sg()()(),Tl(779,"td",25)(780,"em")(781,"strong"),iN(782,"(opcional)"),sg()(),Tl(783,"p"),iN(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),sg()()(),Tl(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),iN(789," p-show-required"),Gl(790,"br"),sg()()(),Tl(791,"td",22)(792,"code",29),iN(793,"boolean"),sg()(),Tl(794,"td",24),iN(795,"-"),sg(),Tl(796,"td",25)(797,"p"),iN(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(799,"blockquote")(800,"p"),iN(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(802,"ul")(803,"li"),iN(804,"N\xE3o possuir "),Tl(805,"code"),iN(806,"p-help"),sg(),iN(807," e/ou "),Tl(808,"code"),iN(809,"p-label"),sg(),iN(810,"."),sg()()()(),Tl(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),iN(815," p-size"),Gl(816,"br"),sg()()(),Tl(817,"td",22)(818,"code",28),iN(819,"string"),sg()(),Tl(820,"td",24)(821,"p")(822,"code"),iN(823,"medium"),sg()()(),Tl(824,"td",25)(825,"em")(826,"strong"),iN(827,"(opcional)"),sg()(),Tl(828,"p"),iN(829,"Define o tamanho do componente:"),sg(),Tl(830,"ul")(831,"li")(832,"code"),iN(833,"small"),sg(),iN(834," (dispon\xEDvel apenas para acessibilidade AA)"),sg(),Tl(835,"li")(836,"code"),iN(837,"medium"),sg()()(),Tl(838,"blockquote")(839,"p"),iN(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(841,"code"),iN(842,"medium"),sg(),iN(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(844,"a",33),iN(845,"po-theme"),sg(),iN(846,"."),sg()()()()(),Tl(847,"h3",13),iN(848,"M\xE9todos"),sg(),Tl(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),iN(855," focus "),sg()()()()(),Tl(856,"tr",25)(857,"td",25)(858,"p"),iN(859,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(860,"p"),iN(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(862,"pre")(863,"code"),iN(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),sg()()()()(),Gl(865,"br"),Tl(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),iN(872," showAdditionalHelp "),sg()()()()(),Tl(873,"tr",25)(874,"td",25)(875,"p"),iN(876,"M\xE9todo que exibe "),Tl(877,"code"),iN(878,"p-helper"),sg(),iN(879," ou executa a a\xE7\xE3o definida em "),Tl(880,"code"),iN(881,"p-helper{eventOnClick}"),sg(),iN(882," ou em "),Tl(883,"code"),iN(884,"p-additionalHelp"),sg(),iN(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(886,"code"),iN(887,"p-keydown"),sg(),iN(888,"."),sg(),Tl(889,"blockquote")(890,"p"),iN(891,"Exibe ou oculta o conte\xFAdo do componente "),Tl(892,"code"),iN(893,"po-helper"),sg(),iN(894," quando o componente estiver com foco."),sg()(),Tl(895,"pre")(896,"code"),iN(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),sg()(),Tl(898,"pre")(899,"code"),iN(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(901,"br"),sg());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-textarea-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),sg()()()),r&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,ge,he,fe,ve,Te],encapsulation:2,changeDetection:1})}return a})();var Re=[{path:"",component:ye}],we=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[DL.forChild(Re),DL]})}return a})();var yt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,we]})}return a})();export{yt as DocPoTextareaModule};