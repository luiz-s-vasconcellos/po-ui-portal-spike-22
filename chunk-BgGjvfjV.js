import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,d0 as $3,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,b6 as U3,bc as Sx,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_,K}from'./main-OS7VVRJY.js';var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-url-basic"]],standalone:false,decls:1,vars:0,consts:[["name","url","p-label","PO Url"]],template:function(l,i){l&1&&Hl(0,"po-url",0);},dependencies:[$3],encapsulation:2,changeDetection:1})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-url-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Url Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-url-basic/sample-po-url-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-url name="url" p-label="PO Url"> </po-url>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-url-basic/sample-po-url-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-url-basic',
  templateUrl: './sample-po-url-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUrlBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-url-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return a})();var se=(()=>{class a{helperText;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;url;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"showRequired",label:"Show Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"required",label:"Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.size="medium",this.url="",this.event="";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-url-labs"]],standalone:false,decls:19,vars:34,consts:[["f","ngForm"],["name","url",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=gx();Cl(0,"po-url",1),gw("ngModelChange",function(r){return Jy(p),Zx(i.url,r)||(i.url=r),e_(r)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(r){return Jy(p),Zx(i.label,r)||(i.label=r),e_(r)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(r){return Jy(p),Zx(i.help,r)||(i.help=r),e_(r)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(r){return Jy(p),Zx(i.helperText,r)||(i.helperText=r),e_(r)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(r){return Jy(p),Zx(i.placeholder,r)||(i.placeholder=r),e_(r)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(r){return Jy(p),Zx(i.errorPattern,r)||(i.errorPattern=r),e_(r)}),og(),Z0(),Cl(13,"po-number",10),gw("ngModelChange",function(r){return Jy(p),Zx(i.minlength,r)||(i.minlength=r),e_(r)}),og(),Z0(),Cl(14,"po-number",11),gw("ngModelChange",function(r){return Jy(p),Zx(i.maxlength,r)||(i.maxlength=r),e_(r)}),og(),Z0(),Cl(15,"po-checkbox-group",12),gw("ngModelChange",function(r){return Jy(p),Zx(i.properties,r)||(i.properties=r),e_(r)}),og(),Z0(),Cl(16,"po-radio-group",13),gw("ngModelChange",function(r){return Jy(p),Zx(i.size,r)||(i.size=r),e_(r)}),og(),Z0(),Cl(17,"div",2)(18,"po-button",14),dt("p-click",function(){return i.restore()}),og()()();}l&2&&(pw("ngModel",i.url),ZE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",i.url),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.errorPattern),X0(),Lp(),pw("ngModel",i.minlength),X0(),Lp(),pw("ngModel",i.maxlength),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Nde,$3,sme],encapsulation:2,changeDetection:1})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-url-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Url Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-url-labs/sample-po-url-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-url
  name="url"
  [(ngModel)]="url"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
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
</po-url>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="url"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-url-labs/sample-po-url-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-labs',
  templateUrl: './sample-po-url-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUrlLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  url: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'required', label: 'Required' }
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
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;
    this.size = 'medium';
    this.url = '';
    this.event = '';
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-url-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ye,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return a})();var Pe=["boxUrl"],ue=(()=>{class a{poNotification=f(Xp);boxUrlElement;baseUrls=[];shortenedUrl;url;urlColumns=[{property:"url",label:"Long URL"},{property:"short",label:"Shortened URL"}];copyToClipboard(){this.boxUrlElement.nativeElement.querySelector("input").select(),document.execCommand("copy"),this.poNotification.success("Text copied!");}shortenUrl(){let d=btoa(this.url.replace(/http|www|com|br|\/|\./gi,"").trim());this.shortenedUrl=`po.com/${d.substr(d.length-3)}`+this.baseUrls.length,this.baseUrls.push({url:this.url,short:this.shortenedUrl});}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-url-shortener"]],viewQuery:function(l,i){if(l&1&&zl(Pe,7,K),l&2){let p;uo(p=fo())&&(i.boxUrlElement=p.first);}},standalone:false,decls:11,vars:7,consts:[["f","ngForm"],["boxUrl",""],[1,"po-row"],["name","url","p-label","Type your URL to be shortened","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","shortenedUrl","p-label","URL shortened","p-readonly","",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Shorten URL","p-kind","primary",1,"po-lg-2",3,"p-click","p-disabled"],["p-icon","an an-copy","p-label","Copy",1,"po-offset-lg-4","po-offset-xl-4","po-lg-2",3,"click","p-disabled"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){if(l&1){let p=gx();Cl(0,"form",null,0)(2,"div",2)(3,"po-url",3),gw("ngModelChange",function(r){return Jy(p),Zx(i.url,r)||(i.url=r),e_(r)}),og(),Z0(),Cl(4,"po-input",4,1),gw("ngModelChange",function(r){return Jy(p),Zx(i.shortenedUrl,r)||(i.shortenedUrl=r),e_(r)}),og(),Z0(),og(),Cl(6,"div",2)(7,"po-button",5),dt("p-click",function(){return i.shortenUrl()}),og(),Cl(8,"po-button",6),dt("click",function(){return i.copyToClipboard()}),og()()(),Hl(9,"po-divider")(10,"po-table",7);}if(l&2){let p=Sx(1);Lp(3),pw("ngModel",i.url),X0(),Lp(),pw("ngModel",i.shortenedUrl),X0(),Lp(3),ZE("p-disabled",p.invalid),Lp(),ZE("p-disabled",!i.shortenedUrl),Lp(2),ZE("p-columns",i.urlColumns)("p-items",i.baseUrls)("p-hide-table-search",false);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,$3,U3],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-url-shortener-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Url - Shortener"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-url-shortener/sample-po-url-shortener.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #f="ngForm">
  <div class="po-row">
    <po-url class="po-lg-6" name="url" [(ngModel)]="url" p-label="Type your URL to be shortened" p-required> </po-url>

    <po-input #boxUrl class="po-lg-6" name="shortenedUrl" [(ngModel)]="shortenedUrl" p-label="URL shortened" p-readonly>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2" p-label="Shorten URL" p-kind="primary" [p-disabled]="f.invalid" (p-click)="shortenUrl()">
    </po-button>

    <po-button
      class="po-offset-lg-4 po-offset-xl-4 po-lg-2"
      p-icon="an an-copy"
      p-label="Copy"
      [p-disabled]="!shortenedUrl"
      (click)="copyToClipboard()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<po-table p-striped="true" [p-columns]="urlColumns" [p-items]="baseUrls" [p-hide-table-search]="false"> </po-table>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-url-shortener/sample-po-url-shortener.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ElementRef, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-url-shortener',
  templateUrl: './sample-po-url-shortener.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUrlShortenerComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('boxUrl', { read: ElementRef, static: true }) boxUrlElement;

  baseUrls: Array<any> = [];
  shortenedUrl: string;
  url: string;

  public readonly urlColumns: Array<PoTableColumn> = [
    { property: 'url', label: 'Long URL' },
    { property: 'short', label: 'Shortened URL' }
  ];

  copyToClipboard() {
    this.boxUrlElement.nativeElement.querySelector('input').select();
    document.execCommand('copy');
    this.poNotification.success('Text copied!');
  }

  shortenUrl() {
    const urlBase64 = btoa(this.url.replace(/http|www|com|br|\\/|\\./gi, '').trim());

    this.shortenedUrl = \`po.com/\${urlBase64.substr(urlBase64.length - 3)}\` + this.baseUrls.length;
    this.baseUrls.push({ url: this.url, short: this.shortenedUrl });
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-url-shortener"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return a})();var Se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-url-doc"]],standalone:false,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoUrlComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Cl(24,"p"),qx(25,"Importante:"),og(),Cl(26,"ul")(27,"li"),qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Cl(29,"h4"),qx(30,"Tokens customiz\xE1veis"),og(),Cl(31,"p"),qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(33,"br"),qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(35,"code"),qx(36,".po-input"),og()(),Cl(37,"blockquote")(38,"p"),qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Cl(40,"a",6),qx(41,"Grid System"),og(),qx(42,"."),og()(),Cl(43,"blockquote")(44,"p"),qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(46,"a",7),qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(48,"."),og()(),Cl(49,"table")(50,"thead")(51,"tr")(52,"th"),qx(53,"Propriedade"),og(),Cl(54,"th"),qx(55,"Descri\xE7\xE3o"),og(),Cl(56,"th"),qx(57,"Valor Padr\xE3o"),og()()(),Cl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),qx(62,"Default Values"),og()(),Hl(63,"td")(64,"td"),og(),Cl(65,"tr")(66,"td")(67,"code"),qx(68,"--font-family"),og()(),Cl(69,"td"),qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(71,"td")(72,"code"),qx(73,"var(--font-family-theme)"),og()()(),Cl(74,"tr")(75,"td")(76,"code"),qx(77,"--font-size"),og()(),Cl(78,"td"),qx(79,"Tamanho da fonte"),og(),Cl(80,"td")(81,"code"),qx(82,"var(--font-size-default)"),og()()(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--text-color-placeholder"),og()(),Cl(87,"td"),qx(88,"Cor do texto placeholder"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--color-neutral-light-30)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--color"),og()(),Cl(96,"td"),qx(97,"Cor pincipal do input"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--color-neutral-dark-70)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--background"),og()(),Cl(105,"td"),qx(106,"Cor de background"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--color-neutral-light-05)"),og()()(),Cl(110,"tr")(111,"td")(112,"code"),qx(113,"--padding"),og()(),Cl(114,"td"),qx(115,"Preenchimento"),og(),Cl(116,"td")(117,"code"),qx(118,"0 0.5rem"),og()()(),Cl(119,"tr")(120,"td")(121,"code"),qx(122,"--text-color"),og()(),Cl(123,"td"),qx(124,"Cor do texto"),og(),Cl(125,"td")(126,"code"),qx(127,"var(--color-neutral-dark-90)"),og()()(),Cl(128,"tr")(129,"td")(130,"code"),qx(131,"--field-container-title-justify"),og()(),Cl(132,"td"),qx(133,"Alinhamento horizontal do t\xEDtulo ("),Cl(134,"code"),qx(135,"justify-content"),og(),qx(136,")"),og(),Cl(137,"td")(138,"code"),qx(139,"space-between"),og()()(),Cl(140,"tr")(141,"td")(142,"code"),qx(143,"--field-container-title-flex"),og()(),Cl(144,"td"),qx(145,"Flex do t\xEDtulo ("),Cl(146,"code"),qx(147,"flex"),og(),qx(148,")"),og(),Cl(149,"td")(150,"code"),qx(151,"1 auto"),og()()(),Cl(152,"tr")(153,"td")(154,"strong"),qx(155,"Hover"),og()(),Hl(156,"td")(157,"td"),og(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--color-hover"),og()(),Cl(162,"td"),qx(163,"Cor principal no estado hover"),og(),Cl(164,"td")(165,"code"),qx(166,"var(--color-brand-01-dark)"),og()()(),Cl(167,"tr")(168,"td")(169,"code"),qx(170,"--background-hover"),og()(),Cl(171,"td"),qx(172,"Cor de background no estado hover"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--color-brand-01-lightest)"),og()()(),Cl(176,"tr")(177,"td")(178,"strong"),qx(179,"Focused"),og()(),Hl(180,"td")(181,"td"),og(),Cl(182,"tr")(183,"td")(184,"code"),qx(185,"--color-focused"),og()(),Cl(186,"td"),qx(187,"Cor principal no estado de focus"),og(),Cl(188,"td")(189,"code"),qx(190,"var(--color-action-default)"),og()()(),Cl(191,"tr")(192,"td")(193,"code"),qx(194,"--outline-color-focused"),og()(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Disabled"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-disabled"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado disabled"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-neutral-light-30)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-disabled"),og()(),Cl(219,"td"),qx(220,"Cor de background no estado disabled"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-neutral-light-20)"),og()()(),Cl(224,"tr")(225,"td")(226,"code"),qx(227,"--text-color-disabled"),og()(),Cl(228,"td"),qx(229,"Cor do texto no estado disabled"),og(),Cl(230,"td")(231,"code"),qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Cl(233,"p"),Hl(234,"br"),qx(235," O "),Cl(236,"code"),qx(237,"po-url"),og(),qx(238," \xE9 um input espec\xEDfico para receber URL, com o pattern j\xE1 configurado."),og()(),Cl(239,"div",8)(240,"h4",9),qx(241,"Seletor"),og(),Cl(242,"pre",10),qx(243,`<po-url
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-upper-case="boolean" >
</po-url>
`),og()(),Cl(244,"h4",11),qx(245,"Propriedades"),og(),Cl(246,"table",12)(247,"tr",13)(248,"th",14),qx(249,"Nome"),og(),Cl(250,"th",14),qx(251,"Tipo"),og(),Cl(252,"th",14),qx(253,"Padr\xE3o"),og(),Cl(254,"th",14),qx(255,"Descri\xE7\xE3o"),og()(),Cl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),qx(260," (p-additional-help)"),Hl(261,"br"),og()(),Cl(262,"div",19),qx(263,"Deprecated"),og()(),Cl(264,"td",20)(265,"code",21),qx(266,"EventEmitter"),og()(),Cl(267,"td",22),qx(268,"-"),og(),Cl(269,"td",23)(270,"em")(271,"strong"),qx(272,"(opcional)"),og()(),Cl(273,"p"),qx(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(275,"blockquote")(276,"p"),qx(277,"Essa propriedade est\xE1 "),Cl(278,"strong"),qx(279,"depreciada"),og(),qx(280," e ser\xE1 removida na vers\xE3o "),Cl(281,"code"),qx(282,"23.x.x"),og(),qx(283,". Recomendamos utilizar a propriedade "),Cl(284,"code"),qx(285,"p-helper"),og(),qx(286," que oferece mais recursos e flexibilidade."),og()()()(),Cl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),qx(291," p-additional-help-tooltip"),Hl(292,"br"),og()(),Cl(293,"div",19),qx(294,"Deprecated"),og()(),Cl(295,"td",20)(296,"code",26),qx(297,"string"),og()(),Cl(298,"td",22),qx(299,"-"),og(),Cl(300,"td",23)(301,"em")(302,"strong"),qx(303,"(opcional)"),og()(),Cl(304,"p"),qx(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(306,"code"),qx(307,"po-helper"),og(),qx(308,`.
`),Cl(309,"strong"),qx(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(311,"blockquote")(312,"p"),qx(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(314,"blockquote")(315,"p"),qx(316,"Essa propriedade est\xE1 "),Cl(317,"strong"),qx(318,"depreciada"),og(),qx(319," e ser\xE1 removida na vers\xE3o "),Cl(320,"code"),qx(321,"23.x.x"),og(),qx(322,". Recomendamos utilizar a propriedade "),Cl(323,"code"),qx(324,"p-helper"),og(),qx(325," que oferece mais recursos e flexibilidade."),og()()()(),Cl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),qx(330," p-append-in-body"),Hl(331,"br"),og()()(),Cl(332,"td",20)(333,"code",27),qx(334,"boolean"),og()(),Cl(335,"td",22)(336,"p")(337,"code"),qx(338,"false"),og()()(),Cl(339,"td",23)(340,"em")(341,"strong"),qx(342,"(opcional)"),og()(),Cl(343,"p"),qx(344,"Define que o popover ("),Cl(345,"code"),qx(346,"p-helper"),og(),qx(347," e/ou "),Cl(348,"code"),qx(349,"p-error-limit"),og(),qx(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(351,"blockquote")(352,"p"),qx(353,"Quando utilizado com "),Cl(354,"code"),qx(355,"p-helper"),og(),qx(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),qx(361," p-auto-focus"),Hl(362,"br"),og()()(),Cl(363,"td",20)(364,"code",27),qx(365,"boolean"),og()(),Cl(366,"td",22)(367,"p")(368,"code"),qx(369,"false"),og()()(),Cl(370,"td",23)(371,"em")(372,"strong"),qx(373,"(opcional)"),og()(),Cl(374,"p"),qx(375,"Aplica foco no elemento ao ser iniciado."),og(),Cl(376,"blockquote")(377,"p"),qx(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),qx(383," (p-blur)"),Hl(384,"br"),og()()(),Cl(385,"td",20)(386,"code",21),qx(387,"EventEmitter"),og()(),Cl(388,"td",22),qx(389,"-"),og(),Cl(390,"td",23)(391,"em")(392,"strong"),qx(393,"(opcional)"),og()(),Cl(394,"p"),qx(395,"Evento disparado ao sair do campo."),og()()(),Cl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),qx(400," (p-change)"),Hl(401,"br"),og()()(),Cl(402,"td",20)(403,"code",21),qx(404,"EventEmitter"),og()(),Cl(405,"td",22),qx(406,"-"),og(),Cl(407,"td",23)(408,"em")(409,"strong"),qx(410,"(opcional)"),og()(),Cl(411,"p"),qx(412,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Cl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),qx(417," (p-change-model)"),Hl(418,"br"),og()()(),Cl(419,"td",20)(420,"code",21),qx(421,"EventEmitter"),og()(),Cl(422,"td",22),qx(423,"-"),og(),Cl(424,"td",23)(425,"em")(426,"strong"),qx(427,"(opcional)"),og()(),Cl(428,"p"),qx(429,"Evento disparado ao alterar valor do model."),og()()(),Cl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),qx(434,"p-clean"),Hl(435,"br"),og()()(),Cl(436,"td",20)(437,"code",27),qx(438,"boolean"),og()(),Cl(439,"td",22),qx(440,"-"),og(),Cl(441,"td",23)(442,"em")(443,"strong"),qx(444,"(opcional)"),og()(),Cl(445,"p"),qx(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Cl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),qx(451," p-compact-label"),Hl(452,"br"),og()()(),Cl(453,"td",20)(454,"code",27),qx(455,"boolean"),og()(),Cl(456,"td",22)(457,"p")(458,"code"),qx(459,"false"),og()()(),Cl(460,"td",23)(461,"em")(462,"strong"),qx(463,"(opcional)"),og()(),Cl(464,"p"),qx(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(466,"p"),qx(467,"Quando habilitado ("),Cl(468,"code"),qx(469,"true"),og(),qx(470,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(471,"ul")(472,"li")(473,"code"),qx(474,"po-label"),og()(),Cl(475,"li")(476,"code"),qx(477,"p-requirement (showRequired)"),og()(),Cl(478,"li")(479,"code"),qx(480,"po-helper"),og()()(),Cl(481,"p"),qx(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(483,"p"),qx(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(485,"ul")(486,"li")(487,"code"),qx(488,"--field-container-title-justify"),og()(),Cl(489,"li")(490,"code"),qx(491,"--field-container-title-flex"),og()()(),Cl(492,"p"),qx(493,"Exemplo:"),og(),Cl(494,"pre")(495,"code"),qx(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(497,"p"),qx(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),qx(503,"p-disabled"),Hl(504,"br"),og()()(),Cl(505,"td",20)(506,"code",27),qx(507,"boolean"),og()(),Cl(508,"td",22)(509,"p")(510,"code"),qx(511,"false"),og()()(),Cl(512,"td",23)(513,"em")(514,"strong"),qx(515,"(opcional)"),og()(),Cl(516,"p"),qx(517,"Se verdadeiro, desabilita o campo."),og()()(),Cl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),qx(522," p-emit-all-changes"),Hl(523,"br"),og()()(),Cl(524,"td",20)(525,"code",27),qx(526,"boolean"),og()(),Cl(527,"td",22)(528,"p")(529,"code"),qx(530,"false"),og()()(),Cl(531,"td",23)(532,"em")(533,"strong"),qx(534,"(opcional)"),og()(),Cl(535,"p"),qx(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Cl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),qx(541," (p-enter)"),Hl(542,"br"),og()()(),Cl(543,"td",20)(544,"code",21),qx(545,"EventEmitter"),og()(),Cl(546,"td",22),qx(547,"-"),og(),Cl(548,"td",23)(549,"em")(550,"strong"),qx(551,"(opcional)"),og()(),Cl(552,"p"),qx(553,"Evento disparado ao entrar do campo."),og()()(),Cl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),qx(558," p-error-async-properties"),Hl(559,"br"),og()()(),Cl(560,"td",20)(561,"code",28),qx(562,"ErrorAsyncProperties"),og()(),Cl(563,"td",22),qx(564,"-"),og(),Cl(565,"td",23)(566,"em")(567,"strong"),qx(568,"(opcional)"),og()(),Cl(569,"p"),qx(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Cl(571,"code"),qx(572,"Reactive Forms"),og(),qx(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Cl(574,"code"),qx(575,"asyncValidators"),og(),qx(576,"."),og()()(),Cl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),qx(581," p-error-limit"),Hl(582,"br"),og()()(),Cl(583,"td",20)(584,"code",27),qx(585,"boolean"),og()(),Cl(586,"td",22)(587,"p")(588,"code"),qx(589,"false"),og()()(),Cl(590,"td",23)(591,"em")(592,"strong"),qx(593,"(opcional)"),og()(),Cl(594,"p"),qx(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(596,"blockquote")(597,"p"),qx(598,"Caso essa propriedade seja definida como "),Cl(599,"code"),qx(600,"true"),og(),qx(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),qx(606," p-error-pattern"),Hl(607,"br"),og()()(),Cl(608,"td",20)(609,"code",26),qx(610,"string"),og()(),Cl(611,"td",22),qx(612,"-"),og(),Cl(613,"td",23)(614,"em")(615,"strong"),qx(616,"(opcional)"),og()(),Cl(617,"p"),qx(618,"Mensagem que ser\xE1 apresentada quando o "),Cl(619,"code"),qx(620,"pattern"),og(),qx(621," ou a m\xE1scara n\xE3o for satisfeita."),og(),Cl(622,"blockquote")(623,"p"),qx(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Cl(625,"code"),qx(626,"p-required-field-error-message"),og(),qx(627," em conjunto."),og()()()(),Cl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),qx(632," p-help"),Hl(633,"br"),og()()(),Cl(634,"td",20)(635,"code",26),qx(636,"string"),og()(),Cl(637,"td",22),qx(638,"-"),og(),Cl(639,"td",23)(640,"em")(641,"strong"),qx(642,"(opcional)"),og()(),Cl(643,"p"),qx(644,"Texto de apoio do campo."),og()()(),Cl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),qx(649," p-icon"),Hl(650,"br"),og()()(),Cl(651,"td",20)(652,"code",26),qx(653,"string "),og(),Cl(654,"code",29),qx(655," TemplateRef<void>"),og()(),Cl(656,"td",22),qx(657,"-"),og(),Cl(658,"td",23)(659,"em")(660,"strong"),qx(661,"(opcional)"),og()(),Cl(662,"p"),qx(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(664,"p"),qx(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(666,"a",30),qx(667,"Biblioteca de \xEDcones"),og(),qx(668,". conforme exemplo abaixo:"),og(),Cl(669,"pre")(670,"code"),qx(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Cl(672,"p"),qx(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(674,"em"),qx(675,"Font Awesome"),og(),qx(676,", da seguinte forma:"),og(),Cl(677,"pre")(678,"code"),qx(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Cl(680,"p"),qx(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(682,"code"),qx(683,"TemplateRef"),og(),qx(684,", conforme exemplo abaixo:"),og(),Cl(685,"pre")(686,"code"),qx(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(688,"blockquote")(689,"p"),qx(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(691,"code"),qx(692,"font-size: inherit"),og(),qx(693," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),qx(698," (p-keydown)"),Hl(699,"br"),og()()(),Cl(700,"td",20)(701,"code",21),qx(702,"EventEmitter"),og()(),Cl(703,"td",22),qx(704,"-"),og(),Cl(705,"td",23)(706,"em")(707,"strong"),qx(708,"(opcional)"),og()(),Cl(709,"p"),qx(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(711,"code"),qx(712,"KeyboardEvent"),og(),qx(713," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),qx(718," p-label"),Hl(719,"br"),og()()(),Cl(720,"td",20)(721,"code",26),qx(722,"string"),og()(),Cl(723,"td",22),qx(724,"-"),og(),Cl(725,"td",23)(726,"em")(727,"strong"),qx(728,"(opcional)"),og()(),Cl(729,"p"),qx(730,"R\xF3tulo do campo."),og()()(),Cl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),qx(735," p-label-text-wrap"),Hl(736,"br"),og()()(),Cl(737,"td",20)(738,"code",27),qx(739,"boolean"),og()(),Cl(740,"td",22)(741,"p")(742,"code"),qx(743,"false"),og()()(),Cl(744,"td",23)(745,"em")(746,"strong"),qx(747,"(opcional)"),og()(),Cl(748,"p"),qx(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(750,"code"),qx(751,"p-label"),og(),qx(752,". Quando "),Cl(753,"code"),qx(754,"p-label-text-wrap"),og(),qx(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),qx(760," p-loading"),Hl(761,"br"),og()()(),Cl(762,"td",20)(763,"code",27),qx(764,"boolean"),og()(),Cl(765,"td",22)(766,"p")(767,"code"),qx(768,"false"),og()()(),Cl(769,"td",23)(770,"em")(771,"strong"),qx(772,"(opcional)"),og()(),Cl(773,"p"),qx(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),qx(779,"p-mask"),Hl(780,"br"),og()()(),Cl(781,"td",20)(782,"code",26),qx(783,"string"),og()(),Cl(784,"td",22),qx(785,"-"),og(),Cl(786,"td",23)(787,"em")(788,"strong"),qx(789,"(opcional)"),og()(),Cl(790,"p"),qx(791,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Cl(792,"tr",15)(793,"td",16)(794,"div",24)(795,"span",25),qx(796,"p-mask-format-model"),Hl(797,"br"),og()()(),Cl(798,"td",20)(799,"code",27),qx(800,"boolean"),og()(),Cl(801,"td",22)(802,"p")(803,"code"),qx(804,"false"),og()()(),Cl(805,"td",23)(806,"em")(807,"strong"),qx(808,"(opcional)"),og()(),Cl(809,"p"),qx(810,"Indica se o "),Cl(811,"code"),qx(812,"model"),og(),qx(813," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Cl(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),qx(818," p-mask-no-length-validation"),Hl(819,"br"),og()()(),Cl(820,"td",20)(821,"code",27),qx(822,"boolean"),og()(),Cl(823,"td",22)(824,"p")(825,"code"),qx(826,"false"),og()()(),Cl(827,"td",23)(828,"p"),qx(829,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Cl(830,"code"),qx(831,"minLength"),og(),qx(832,") e m\xE1ximo ("),Cl(833,"code"),qx(834,"maxLength"),og(),qx(835,") quando h\xE1 uma m\xE1scara ("),Cl(836,"code"),qx(837,"p-mask"),og(),qx(838,") definida."),og(),Cl(839,"ul")(840,"li"),qx(841,"Quando "),Cl(842,"code"),qx(843,"true"),og(),qx(844,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Cl(845,"li"),qx(846,"Quando "),Cl(847,"code"),qx(848,"false"),og(),qx(849,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Cl(850,"blockquote")(851,"p"),qx(852,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Cl(853,"code"),qx(854,"p-mask-format-model"),og(),qx(855,"."),og()(),Cl(856,"p"),qx(857,"Exemplo:"),og(),Cl(858,"pre")(859,"code"),qx(860,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Cl(861,"ul")(862,"li"),qx(863,"Entrada: "),Cl(864,"code"),qx(865,"123-456"),og(),qx(866," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Cl(867,"code"),qx(868,"-"),og(),qx(869,"."),og()()()(),Cl(870,"tr",15)(871,"td",16)(872,"div",24)(873,"span",25),qx(874," p-maxlength"),Hl(875,"br"),og()()(),Cl(876,"td",20)(877,"code",31),qx(878,"number"),og()(),Cl(879,"td",22),qx(880,"-"),og(),Cl(881,"td",23)(882,"em")(883,"strong"),qx(884,"(opcional)"),og()(),Cl(885,"p"),qx(886,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Cl(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),qx(891," p-minlength"),Hl(892,"br"),og()()(),Cl(893,"td",20)(894,"code",31),qx(895,"number"),og()(),Cl(896,"td",22),qx(897,"-"),og(),Cl(898,"td",23)(899,"em")(900,"strong"),qx(901,"(opcional)"),og()(),Cl(902,"p"),qx(903,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Cl(904,"tr",15)(905,"td",16)(906,"div",24)(907,"span",25),qx(908," name"),Hl(909,"br"),og()()(),Cl(910,"td",20)(911,"code",26),qx(912,"string"),og()(),Cl(913,"td",22),qx(914,"-"),og(),Cl(915,"td",23)(916,"p"),qx(917,"Nome e identificador do campo."),og()()(),Cl(918,"tr",15)(919,"td",16)(920,"div",24)(921,"span",25),qx(922," p-no-autocomplete"),Hl(923,"br"),og()()(),Cl(924,"td",20)(925,"code",27),qx(926,"boolean"),og()(),Cl(927,"td",22)(928,"p")(929,"code"),qx(930,"false"),og()()(),Cl(931,"td",23)(932,"em")(933,"strong"),qx(934,"(opcional)"),og()(),Cl(935,"p"),qx(936,"Define a propriedade nativa "),Cl(937,"code"),qx(938,"autocomplete"),og(),qx(939," do campo como "),Cl(940,"code"),qx(941,"off"),og(),qx(942,"."),og(),Cl(943,"blockquote")(944,"p"),qx(945,"No componente "),Cl(946,"code"),qx(947,"po-password"),og(),qx(948," ser\xE1 definido como "),Cl(949,"code"),qx(950,"new-password"),og(),qx(951,"."),og()(),Cl(952,"p"),qx(953,"Nos componentes "),Cl(954,"code"),qx(955,"po-password"),og(),qx(956," e "),Cl(957,"code"),qx(958,"po-login"),og(),qx(959," o valor padr\xE3o ser\xE1 "),Cl(960,"code"),qx(961,"true"),og(),qx(962,"."),og()()(),Cl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),qx(967," p-optional"),Hl(968,"br"),og()()(),Cl(969,"td",20)(970,"code",27),qx(971,"boolean"),og()(),Cl(972,"td",22)(973,"p")(974,"code"),qx(975,"false"),og()()(),Cl(976,"td",23)(977,"em")(978,"strong"),qx(979,"(opcional)"),og()(),Cl(980,"p"),qx(981,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(982,"blockquote")(983,"p"),qx(984,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(985,"ul")(986,"li"),qx(987,"O campo conter "),Cl(988,"code"),qx(989,"p-required"),og(),qx(990,";"),og(),Cl(991,"li"),qx(992,"N\xE3o possuir "),Cl(993,"code"),qx(994,"p-help"),og(),qx(995," e/ou "),Cl(996,"code"),qx(997,"p-label"),og(),qx(998,"."),og()()()(),Cl(999,"tr",15)(1e3,"td",16)(1001,"div",24)(1002,"span",25),qx(1003,"p-pattern"),Hl(1004,"br"),og()()(),Cl(1005,"td",20)(1006,"code",26),qx(1007,"string"),og()(),Cl(1008,"td",22),qx(1009,"-"),og(),Cl(1010,"td",23)(1011,"em")(1012,"strong"),qx(1013,"(opcional)"),og()(),Cl(1014,"p"),qx(1015,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Cl(1016,"code"),qx(1017,"(p-mask)"),og(),qx(1018,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Cl(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),qx(1023," p-placeholder"),Hl(1024,"br"),og()()(),Cl(1025,"td",20)(1026,"code",26),qx(1027,"string"),og()(),Cl(1028,"td",22)(1029,"p"),qx(1030,"''"),og()(),Cl(1031,"td",23)(1032,"em")(1033,"strong"),qx(1034,"(opcional)"),og()(),Cl(1035,"p"),qx(1036,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),qx(1041," p-helper"),Hl(1042,"br"),og()()(),Cl(1043,"td",20)(1044,"code",32),qx(1045,"PoHelperOptions "),og(),Cl(1046,"code",26),qx(1047," string"),og()(),Cl(1048,"td",22),qx(1049,"-"),og(),Cl(1050,"td",23)(1051,"em")(1052,"strong"),qx(1053,"(opcional)"),og()(),Cl(1054,"p"),qx(1055,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1056,"code"),qx(1057,"p-label"),og(),qx(1058," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1059,"code"),qx(1060,"p-label"),og(),qx(1061,"."),og(),Cl(1062,"blockquote")(1063,"p"),qx(1064,"Para mais informa\xE7\xF5es acesse: "),Cl(1065,"a",33),qx(1066,"https://po-ui.io/documentation/po-helper"),og(),qx(1067,"."),og()(),Cl(1068,"blockquote")(1069,"p"),qx(1070,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1071,"code"),qx(1072,"p-additional-help-tooltip"),og(),qx(1073," e "),Cl(1074,"code"),qx(1075,"p-additional-help"),og(),qx(1076,") ser\xE1 ignorado."),og()()()(),Cl(1077,"tr",15)(1078,"td",16)(1079,"div",24)(1080,"span",25),qx(1081,"p-readonly"),Hl(1082,"br"),og()()(),Cl(1083,"td",20)(1084,"code",27),qx(1085,"boolean"),og()(),Cl(1086,"td",22),qx(1087,"-"),og(),Cl(1088,"td",23)(1089,"em")(1090,"strong"),qx(1091,"(opcional)"),og()(),Cl(1092,"p"),qx(1093,"Indica que o campo ser\xE1 somente leitura."),og()()(),Cl(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),qx(1098,"p-required"),Hl(1099,"br"),og()()(),Cl(1100,"td",20)(1101,"code",27),qx(1102,"boolean"),og()(),Cl(1103,"td",22)(1104,"p")(1105,"code"),qx(1106,"false"),og()()(),Cl(1107,"td",23)(1108,"em")(1109,"strong"),qx(1110,"(opcional)"),og()(),Cl(1111,"p"),qx(1112,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(1113,"blockquote")(1114,"p"),qx(1115,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(1116,"code"),qx(1117,"(p-disabled)"),og(),qx(1118,"."),og()()()(),Cl(1119,"tr",15)(1120,"td",16)(1121,"div",24)(1122,"span",25),qx(1123," p-required-field-error-message"),Hl(1124,"br"),og()()(),Cl(1125,"td",20)(1126,"code",27),qx(1127,"boolean"),og()(),Cl(1128,"td",22)(1129,"p")(1130,"code"),qx(1131,"false"),og()()(),Cl(1132,"td",23)(1133,"em")(1134,"strong"),qx(1135,"(opcional)"),og()(),Cl(1136,"p"),qx(1137,"Exibe a mensagem setada na propriedade "),Cl(1138,"code"),qx(1139,"p-error-pattern"),og(),qx(1140," se o campo estiver vazio e for requerido."),og(),Cl(1141,"blockquote")(1142,"p"),qx(1143,"Necess\xE1rio que a propriedade "),Cl(1144,"code"),qx(1145,"p-required"),og(),qx(1146," esteja habilitada."),og()()()(),Cl(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),qx(1151," p-show-required"),Hl(1152,"br"),og()()(),Cl(1153,"td",20)(1154,"code",27),qx(1155,"boolean"),og()(),Cl(1156,"td",22),qx(1157,"-"),og(),Cl(1158,"td",23)(1159,"p"),qx(1160,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1161,"blockquote")(1162,"p"),qx(1163,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1164,"ul")(1165,"li"),qx(1166,"N\xE3o possuir "),Cl(1167,"code"),qx(1168,"p-help"),og(),qx(1169," e/ou "),Cl(1170,"code"),qx(1171,"p-label"),og(),qx(1172,"."),og()()()(),Cl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),qx(1177," p-size"),Hl(1178,"br"),og()()(),Cl(1179,"td",20)(1180,"code",26),qx(1181,"string"),og()(),Cl(1182,"td",22)(1183,"p")(1184,"code"),qx(1185,"medium"),og()()(),Cl(1186,"td",23)(1187,"em")(1188,"strong"),qx(1189,"(opcional)"),og()(),Cl(1190,"p"),qx(1191,"Define o tamanho do componente:"),og(),Cl(1192,"ul")(1193,"li")(1194,"code"),qx(1195,"small"),og(),qx(1196,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1197,"li")(1198,"code"),qx(1199,"medium"),og(),qx(1200,": altura do input como 44px."),og()(),Cl(1201,"blockquote")(1202,"p"),qx(1203,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1204,"code"),qx(1205,"medium"),og(),qx(1206,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1207,"a",34),qx(1208,"po-theme"),og(),qx(1209,"."),og()()()(),Cl(1210,"tr",15)(1211,"td",16)(1212,"div",24)(1213,"span",25),qx(1214," p-upper-case"),Hl(1215,"br"),og()()(),Cl(1216,"td",20)(1217,"code",27),qx(1218,"boolean"),og()(),Cl(1219,"td",22),qx(1220,"-"),og(),Cl(1221,"td",23)(1222,"p"),qx(1223,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Cl(1224,"h3",11),qx(1225,"M\xE9todos"),og(),Cl(1226,"table",35)(1227,"tr",15)(1228,"th",36)(1229,"div",24)(1230,"h4")(1231,"span",25),qx(1232," showAdditionalHelp "),og()()()()(),Cl(1233,"tr",23)(1234,"td",23)(1235,"p"),qx(1236,"M\xE9todo que exibe "),Cl(1237,"code"),qx(1238,"p-helper"),og(),qx(1239," ou executa a a\xE7\xE3o definida em "),Cl(1240,"code"),qx(1241,"p-helper{eventOnClick}"),og(),qx(1242," ou em "),Cl(1243,"code"),qx(1244,"p-additionalHelp"),og(),qx(1245,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1246,"code"),qx(1247,"p-keydown"),og(),qx(1248,"."),og(),Cl(1249,"blockquote")(1250,"p"),qx(1251,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1252,"code"),qx(1253,"po-helper"),og(),qx(1254," quando o componente estiver com foco."),og()(),Cl(1255,"pre")(1256,"code"),qx(1257,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Cl(1258,"pre")(1259,"code"),qx(1260,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1261,"br"),Cl(1262,"table",35)(1263,"tr",15)(1264,"th",36)(1265,"div",24)(1266,"h4")(1267,"span",25),qx(1268," focus "),og()()()()(),Cl(1269,"tr",23)(1270,"td",23)(1271,"p"),qx(1272,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1273,"p"),qx(1274,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1275,"pre")(1276,"code"),qx(1277,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Hl(1278,"br"),Cl(1279,"h3"),qx(1280,"Interfaces"),og(),Cl(1281,"h4",37)(1282,"code",5),qx(1283,"ErrorAsyncProperties"),og()(),Cl(1284,"div",2)(1285,"p"),qx(1286,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Cl(1287,"h4",11),qx(1288,"Propriedades"),og(),Cl(1289,"table",12)(1290,"tr",13)(1291,"th",14),qx(1292,"Nome"),og(),Cl(1293,"th",14),qx(1294,"Tipo"),og(),Cl(1295,"th",14),qx(1296,"Descri\xE7\xE3o"),og()(),Cl(1297,"tr",15)(1298,"td",16)(1299,"div",24)(1300,"span",25),qx(1301," errorAsync"),Hl(1302,"br"),og()()(),Cl(1303,"td",20)(1304,"code",38),qx(1305,"(value) => Observable<boolean>"),og()(),Cl(1306,"td",23)(1307,"p"),qx(1308,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(1309,"code"),qx(1310,"change"),og(),qx(1311," ou "),Cl(1312,"code"),qx(1313,"change-model"),og(),qx(1314,", dependendo do valor da propriedade "),Cl(1315,"code"),qx(1316,"triggerMode"),og(),qx(1317,"."),og()()(),Cl(1318,"tr",15)(1319,"td",16)(1320,"div",24)(1321,"span",25),qx(1322," triggerMode"),Hl(1323,"br"),og()()(),Cl(1324,"td",20)(1325,"code",39),qx(1326,"'change' "),og(),Cl(1327,"code",40),qx(1328," 'changeModel'"),og()(),Cl(1329,"td",23)(1330,"em")(1331,"strong"),qx(1332,"(opcional)"),og()(),Cl(1333,"p"),qx(1334,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Cl(1335,"code"),qx(1336,"change"),og(),qx(1337," ou "),Cl(1338,"code"),qx(1339,"change-model"),og(),qx(1340,"."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Url",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-url-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-url-basic-view")(6,"sample-po-url-labs-view")(7,"sample-po-url-shortener-view"),og()()()),l&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,pe,ce,Ee,Se],encapsulation:2})}return a})();var De=[{path:"",component:be}],he=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[bL.forChild(De),bL]})}return a})();var at=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe({type:a});static \u0275inj=ue$1({imports:[ca,he]})}return a})();export{at as DocPoUrlModule};