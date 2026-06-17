import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,b0 as Qt,dr as bv,H as Sl,J as Jx,O as sg,M as Wl,T as tw,av as ql,aw as lo,ax as uo,an as bO,aH as Ga,b8 as Gme,b9 as Qme,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,Z,b6 as Yo,bd as xx,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var ie=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&ql(Qt,7,Z),p&2){let l;lo(l=uo())&&(n.poButton=l.first);}},standalone:false,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(Sl(0,"po-popover",0),Jx(1," PO Popover "),sg(),Wl(2,"po-button",1)),p&2&&tw("p-target",n.poButton);},dependencies:[Qt,bv],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Popover Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoButtonComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-basic',
  templateUrl: './sample-po-popover-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverBasicComponent {
  @ViewChild(PoButtonComponent, { read: ElementRef, static: true }) poButton: PoButtonComponent;
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-basic"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ie],encapsulation:2})}return i})();var fe=["buttonClick"],he=["buttonHover"],re=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title="";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&ql(fe,7,Z)(he,7,Z),p&2){let l;lo(l=uo())&&(n.buttonClickRef=l.first),lo(l=uo())&&(n.buttonHoverRef=l.first);}},standalone:false,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=Ex();Sl(0,"po-popover",3),Jx(1),sg(),Sl(2,"po-popover",4),Jx(3),sg(),Sl(4,"div",5)(5,"div",6),Wl(6,"po-button",7,0),sg(),Sl(8,"div",6),Wl(9,"po-button",8,1),sg()(),Wl(11,"po-divider"),Sl(12,"form",null,2)(14,"div",5)(15,"po-input",9),Ew("ngModelChange",function(m){return Xy(l),tN(n.title,m)||(n.title=m),Qy(m)}),sg(),JA(),Sl(16,"po-input",10),Ew("ngModelChange",function(m){return Xy(l),tN(n.content,m)||(n.content=m),Qy(m)}),sg(),JA(),sg(),Sl(17,"div",5)(18,"po-radio-group",11),Ew("ngModelChange",function(m){return Xy(l),tN(n.position,m)||(n.position=m),Qy(m)}),sg(),JA(),Sl(19,"po-checkbox-group",12),Ew("ngModelChange",function(m){return Xy(l),tN(n.properties,m)||(n.properties=m),Qy(m)}),sg(),JA(),sg(),Sl(20,"div",5)(21,"po-button",13),ht("p-click",function(){return n.restore()}),sg()()();}p&2&&(tw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),Vp(),fg(" ",n.content,`
`),Vp(),tw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),Vp(),fg(" ",n.content,`
`),Vp(12),Dw("ngModel",n.title),t0(),Vp(),Dw("ngModel",n.content),t0(),Vp(2),Dw("ngModel",n.position),tw("p-options",n.positionOptions),t0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,bv],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Popover Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-popover
  p-trigger="click"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonClickRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<po-popover
  p-trigger="hover"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-target]="buttonHoverRef"
  [p-title]="title"
>
  { { content }}
</po-popover>

<div class="po-row">
  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonClick p-label="Popover with click"> </po-button>
  </div>

  <div class="po-offset-xl-1 po-offset-lg-1 po-md-6 po-lg-3">
    <po-button #buttonHover p-label="Popover with hover"> </po-button>
  </div>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-clean p-label="Title"> </po-input>

    <po-input class="po-md-6" name="content" [(ngModel)]="content" p-clean p-label="Content"> </po-input>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-8"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-4"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popover-labs',
  templateUrl: './sample-po-popover-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverLabsComponent {
  @ViewChild('buttonClick', { read: ElementRef, static: true }) buttonClickRef: ElementRef;
  @ViewChild('buttonHover', { read: ElementRef, static: true }) buttonHoverRef: ElementRef;

  content: string = '';
  position: string = '';
  properties: Array<string> = [];
  title: string = '';

  public readonly positionOptions: Array<PoRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  restore() {
    this.content = '';
    this.position = undefined;
    this.properties = [];
    this.title = '';
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-labs"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Se,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return i})();var xe=["cardname"],we=["cardcode"],ye=["carddate"],me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&ql(xe,7,Z)(we,7,Z)(ye,7,Z),p&2){let l;lo(l=uo())&&(n.cardnameref=l.first),lo(l=uo())&&(n.cardcoderef=l.first),lo(l=uo())&&(n.carddateref=l.first);}},standalone:false,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=Ex();Sl(0,"po-popover",5),Wl(1,"img",6),sg(),Sl(2,"po-popover",5),Wl(3,"img",7),sg(),Sl(4,"po-popover",5),Wl(5,"img",8),sg(),Sl(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),Ew("ngModelChange",function(m){return Xy(l),tN(n.inputCardName,m)||(n.inputCardName=m),Qy(m)}),sg(),JA(),Sl(11,"po-input",11,2),Ew("ngModelChange",function(m){return Xy(l),tN(n.inputCardCode,m)||(n.inputCardCode=m),Qy(m)}),sg(),JA(),Sl(13,"po-input",12,3),Ew("ngModelChange",function(m){return Xy(l),tN(n.inputCardValid,m)||(n.inputCardValid=m),Qy(m)}),sg(),JA(),sg(),Sl(15,"div",9)(16,"po-button",13),ht("click",function(){Xy(l);let m=xx(18);return Qy(m.open())}),sg()()(),Sl(17,"po-modal",14,4)(19,"div",9)(20,"div"),Jx(21),sg()(),Sl(22,"div",9)(23,"div"),Jx(24),sg()(),Sl(25,"div",9)(26,"div"),Jx(27),sg()()();}if(p&2){let l=xx(7);tw("p-target",n.cardcoderef),Vp(2),tw("p-target",n.carddateref),Vp(2),tw("p-target",n.cardnameref),Vp(5),Dw("ngModel",n.inputCardName),t0(),Vp(2),Dw("ngModel",n.inputCardCode),t0(),Vp(2),Dw("ngModel",n.inputCardValid),t0(),Vp(3),tw("p-disabled",l.form.invalid),Vp(5),fg("Card Code: ",n.inputCardCode),Vp(3),fg("Card Expiration: ",n.inputCardValid),Vp(3),fg("Card Owner: ",n.inputCardName);}},dependencies:[J9,K9,X9,Dk,vk,Qt,F3,Yo,bv],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Popover - Credit Card"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
  <img src="assets/graphics/card-code.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="carddateref">
  <img src="assets/graphics/card-date.jpg" />
</po-popover>

<po-popover p-trigger="hover" [p-target]="cardnameref">
  <img src="assets/graphics/card-owner.jpg" />
</po-popover>

<form #f="ngForm">
  <div class="po-row">
    <po-input
      #cardname
      class="po-lg-6"
      name="inputCardName"
      [(ngModel)]="inputCardName"
      p-clean
      p-label="Name"
      p-required
    >
    </po-input>

    <po-input
      #cardcode
      class="po-lg-4 po-md-9"
      name="inputCardCode"
      [(ngModel)]="inputCardCode"
      p-clean
      p-label="Code"
      p-mask="9999 9999 9999 9999"
      p-mask-format-model
      p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
      p-required
    >
    </po-input>

    <po-input
      #carddate
      class="po-lg-2 po-md-3"
      name="inputCardValid"
      [(ngModel)]="inputCardValid"
      p-clean
      p-label="Expiration Date"
      p-mask="12/99"
      p-mask-format-model
      p-pattern="\\d{2}\\/\\d{2}"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-2" p-label="Confirm" [p-disabled]="f.form.invalid" (click)="modalCreditCard.open()">
    </po-button>
  </div>
</form>

<po-modal #modalCreditCard p-title="Your Credit Card">
  <div class="po-row">
    <div>Card Code: { { inputCardCode }}</div>
  </div>
  <div class="po-row">
    <div>Card Expiration: { { inputCardValid }}</div>
  </div>
  <div class="po-row">
    <div>Card Owner: { { inputCardName }}</div>
  </div>
</po-modal>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-popover-credit-card',
  templateUrl: './sample-po-popover-credit-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPopoverCreditCardComponent {
  @ViewChild('cardname', { read: ElementRef, static: true }) cardnameref: ElementRef;
  @ViewChild('cardcode', { read: ElementRef, static: true }) cardcoderef: ElementRef;
  @ViewChild('carddate', { read: ElementRef, static: true }) carddateref: ElementRef;

  public inputCardName: string;
  public inputCardCode: string;
  public inputCardValid: string;
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-popover-credit-card"),sg(),Wl(23,"hr")),p&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-doc"]],standalone:false,decls:338,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-popover."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoPopoverComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-popover"),sg(),Jx(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),sg(),Sl(18,"p"),Jx(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Sl(20,"a",6)(21,"strong"),Jx(22,"po-tooltip"),sg()(),Jx(23,"."),sg(),Sl(24,"p"),Jx(25,"Para conte\xFAdos maiores recomenda-se o uso do "),Sl(26,"a",7)(27,"strong"),Jx(28,"po-modal"),sg()(),Jx(29,"."),sg(),Sl(30,"p"),Jx(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Sl(32,"code"),Jx(33,"right"),sg(),Jx(34,", "),Sl(35,"code"),Jx(36,"right-top"),sg(),Jx(37,", "),Sl(38,"code"),Jx(39,"right-bottom"),sg(),Jx(40,", "),Sl(41,"code"),Jx(42,"top"),sg(),Jx(43,", "),Sl(44,"code"),Jx(45,"top-left"),sg(),Jx(46,", "),Sl(47,"code"),Jx(48,"top-right"),sg(),Jx(49,`,
`),Sl(50,"code"),Jx(51,"left"),sg(),Jx(52,", "),Sl(53,"code"),Jx(54,"left-top"),sg(),Jx(55,", "),Sl(56,"code"),Jx(57,"left-bottom"),sg(),Jx(58,", "),Sl(59,"code"),Jx(60,"bottom"),sg(),Jx(61,", "),Sl(62,"code"),Jx(63,"bottom-left"),sg(),Jx(64," e "),Sl(65,"code"),Jx(66,"bottom-right"),sg(),Jx(67,"."),sg(),Sl(68,"p"),Jx(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),Sl(70,"em"),Jx(71,"popover"),sg(),Jx(72,`.
Os eventos permitidos s\xE3o: `),Sl(73,"code"),Jx(74,"click"),sg(),Jx(75," e "),Sl(76,"code"),Jx(77,"hover"),sg(),Jx(78,". "),sg()(),Sl(79,"div",8)(80,"h4",9),Jx(81,"Seletor"),sg(),Sl(82,"pre",10),Jx(83,`<po-popover
    p-append-in-body="boolean"
    (p-close)="EventEmitter"
    p-custom-classes="string"
    p-hide-arrow="boolean"
    (p-open)="EventEmitter"
    p-position="string"
    p-target="ElementRef | HTMLElement"
    p-title="string"
    p-trigger="string" >
</po-popover>
`),sg()(),Sl(84,"h4",11),Jx(85,"Propriedades"),sg(),Sl(86,"table",12)(87,"tr",13)(88,"th",14),Jx(89,"Nome"),sg(),Sl(90,"th",14),Jx(91,"Tipo"),sg(),Sl(92,"th",14),Jx(93,"Padr\xE3o"),sg(),Sl(94,"th",14),Jx(95,"Descri\xE7\xE3o"),sg()(),Sl(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),Jx(100," p-append-in-body"),Wl(101,"br"),sg()()(),Sl(102,"td",19)(103,"code",20),Jx(104,"boolean"),sg()(),Sl(105,"td",21)(106,"p")(107,"code"),Jx(108,"false"),sg()()(),Sl(109,"td",22)(110,"em")(111,"strong"),Jx(112,"(opcional)"),sg()(),Sl(113,"p"),Jx(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Sl(115,"code"),Jx(116,"p-target"),sg(),Jx(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),sg()()(),Sl(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),Jx(122," (p-close)"),Wl(123,"br"),sg()()(),Sl(124,"td",19)(125,"code",25),Jx(126,"EventEmitter"),sg()(),Sl(127,"td",21),Jx(128,"-"),sg(),Sl(129,"td",22)(130,"p"),Jx(131,"Evento disparado ao fechar o popover."),sg()()(),Sl(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),Jx(136," p-custom-classes"),Wl(137,"br"),sg()()(),Sl(138,"td",19)(139,"code",26),Jx(140,"string"),sg()(),Sl(141,"td",21),Jx(142,"-"),sg(),Sl(143,"td",22)(144,"em")(145,"strong"),Jx(146,"(opcional)"),sg()(),Sl(147,"p"),Jx(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),sg(),Sl(149,"p"),Jx(150,"Exemplo: "),Sl(151,"code"),Jx(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),sg(),Jx(153,"."),sg()()(),Sl(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),Jx(158," p-hide-arrow"),Wl(159,"br"),sg()()(),Sl(160,"td",19)(161,"code",20),Jx(162,"boolean"),sg()(),Sl(163,"td",21)(164,"p")(165,"code"),Jx(166,"false"),sg()()(),Sl(167,"td",22)(168,"em")(169,"strong"),Jx(170,"(opcional)"),sg()(),Sl(171,"p"),Jx(172,"Desabilita a seta do componente "),Sl(173,"em"),Jx(174,"popover"),sg(),Jx(175,"."),sg()()(),Sl(176,"tr",15)(177,"td",16)(178,"div",23)(179,"span",24),Jx(180," (p-open)"),Wl(181,"br"),sg()()(),Sl(182,"td",19)(183,"code",25),Jx(184,"EventEmitter"),sg()(),Sl(185,"td",21),Jx(186,"-"),sg(),Sl(187,"td",22)(188,"p"),Jx(189,"Evento disparado ao abrir o popover."),sg()()(),Sl(190,"tr",15)(191,"td",16)(192,"div",17)(193,"span",18),Jx(194," p-position"),Wl(195,"br"),sg()()(),Sl(196,"td",19)(197,"code",26),Jx(198,"string"),sg()(),Sl(199,"td",21)(200,"p"),Jx(201,"right"),sg()(),Sl(202,"td",22)(203,"em")(204,"strong"),Jx(205,"(opcional)"),sg()(),Sl(206,"p"),Jx(207,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),sg(),Sl(208,"p"),Jx(209,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Sl(210,"ul")(211,"li")(212,"code"),Jx(213,"right"),sg(),Jx(214,": Posiciona o po-popover no lado direito do componente alvo."),sg(),Sl(215,"li")(216,"code"),Jx(217,"right-bottom"),sg(),Jx(218,": Posiciona o po-popover no lado direito inferior do componente alvo."),sg(),Sl(219,"li")(220,"code"),Jx(221,"right-top"),sg(),Jx(222,": Posiciona o po-popover no lado direito superior do componente alvo."),sg(),Sl(223,"li")(224,"code"),Jx(225,"bottom"),sg(),Jx(226,": Posiciona o po-popover abaixo do componente alvo."),sg(),Sl(227,"li")(228,"code"),Jx(229,"bottom-left"),sg(),Jx(230,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),sg(),Sl(231,"li")(232,"code"),Jx(233,"bottom-right"),sg(),Jx(234,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),sg(),Sl(235,"li")(236,"code"),Jx(237,"left"),sg(),Jx(238,": Posiciona o po-popover no lado esquerdo do componente alvo."),sg(),Sl(239,"li")(240,"code"),Jx(241,"left-top"),sg(),Jx(242,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),sg(),Sl(243,"li")(244,"code"),Jx(245,"left-bottom"),sg(),Jx(246,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),sg(),Sl(247,"li")(248,"code"),Jx(249,"top"),sg(),Jx(250,": Posiciona o po-popover acima do componente alvo."),sg(),Sl(251,"li")(252,"code"),Jx(253,"top-right"),sg(),Jx(254,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),sg(),Sl(255,"li")(256,"code"),Jx(257,"top-left"),sg(),Jx(258,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),sg()()()(),Sl(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),Jx(263," p-target"),Wl(264,"br"),sg()()(),Sl(265,"td",19)(266,"code",27),Jx(267,"ElementRef "),sg(),Sl(268,"code",28),Jx(269," HTMLElement"),sg()(),Sl(270,"td",21),Jx(271,"-"),sg(),Sl(272,"td",22)(273,"p"),Jx(274,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),sg(),Sl(275,"pre")(276,"code"),Jx(277,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),sg()(),Sl(278,"p"),Jx(279,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),sg(),Sl(280,"pre")(281,"code"),Jx(282,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),sg()(),Sl(283,"p"),Jx(284,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),sg(),Sl(285,"pre")(286,"code"),Jx(287,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),sg()()()(),Sl(288,"tr",15)(289,"td",16)(290,"div",17)(291,"span",18),Jx(292," p-title"),Wl(293,"br"),sg()()(),Sl(294,"td",19)(295,"code",26),Jx(296,"string"),sg()(),Sl(297,"td",21),Jx(298,"-"),sg(),Sl(299,"td",22)(300,"em")(301,"strong"),Jx(302,"(opcional)"),sg()(),Sl(303,"p"),Jx(304,"T\xEDtulo do popover."),sg()()(),Sl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),Jx(309," p-trigger"),Wl(310,"br"),sg()()(),Sl(311,"td",19)(312,"code",26),Jx(313,"string"),sg()(),Sl(314,"td",21)(315,"p"),Jx(316,"click"),sg()(),Sl(317,"td",22)(318,"em")(319,"strong"),Jx(320,"(opcional)"),sg()(),Sl(321,"p"),Jx(322,"Define o evento que abrir\xE1 o po-popover."),sg(),Sl(323,"p"),Jx(324,"Valores v\xE1lidos:"),sg(),Sl(325,"ul")(326,"li")(327,"code"),Jx(328,"click"),sg(),Jx(329,": Abre ao clicar no componente alvo."),sg(),Sl(330,"li")(331,"code"),Jx(332,"hover"),sg(),Jx(333,": Abre ao passar o mouse sobre o componente alvo."),sg(),Sl(334,"li")(335,"code"),Jx(336,"function"),sg(),Jx(337,": Abre atrav\xE9s de fun\xE7\xF5es p\xFAblicas do componente."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-popover-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),sg()()()),p&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ae,le,de,se],encapsulation:2})}return i})();var De=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[pL.forChild(De),pL]})}return i})();var ut=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,ue]})}return i})();export{ut as DocPoPopoverModule};