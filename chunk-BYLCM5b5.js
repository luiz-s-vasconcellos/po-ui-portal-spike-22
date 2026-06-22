import {f as fe$1,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,b0 as Qt,dq as bv,T as Tl,z as tN,L as sg,J as Gl,M as tw,av as Yl,aw as uo,ax as fo,an as TO,aH as Ga,b8 as Hme,b9 as Gme,a1 as ht,F as Vp,ar as zx,au as fg,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,l as K,b6 as Yo,bd as Ox,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ie=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&Yl(Qt,7,K),p&2){let l;uo(l=fo())&&(n.poButton=l.first);}},standalone:false,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(Tl(0,"po-popover",0),tN(1," PO Popover "),sg(),Gl(2,"po-button",1)),p&2&&tw("p-target",n.poButton);},dependencies:[Qt,bv],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Popover Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-popover-basic"),sg(),Gl(23,"hr")),p&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ge,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ie],encapsulation:2})}return i})();var fe=["buttonClick"],he=["buttonHover"],re=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title="";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&Yl(fe,7,K)(he,7,K),p&2){let l;uo(l=fo())&&(n.buttonClickRef=l.first),uo(l=fo())&&(n.buttonHoverRef=l.first);}},standalone:false,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=Cx();Tl(0,"po-popover",3),tN(1),sg(),Tl(2,"po-popover",4),tN(3),sg(),Tl(4,"div",5)(5,"div",6),Gl(6,"po-button",7,0),sg(),Tl(8,"div",6),Gl(9,"po-button",8,1),sg()(),Gl(11,"po-divider"),Tl(12,"form",null,2)(14,"div",5)(15,"po-input",9),Ew("ngModelChange",function(m){return Ky(l),rN(n.title,m)||(n.title=m),Xy(m)}),sg(),t0(),Tl(16,"po-input",10),Ew("ngModelChange",function(m){return Ky(l),rN(n.content,m)||(n.content=m),Xy(m)}),sg(),t0(),sg(),Tl(17,"div",5)(18,"po-radio-group",11),Ew("ngModelChange",function(m){return Ky(l),rN(n.position,m)||(n.position=m),Xy(m)}),sg(),t0(),Tl(19,"po-checkbox-group",12),Ew("ngModelChange",function(m){return Ky(l),rN(n.properties,m)||(n.properties=m),Xy(m)}),sg(),t0(),sg(),Tl(20,"div",5)(21,"po-button",13),ht("p-click",function(){return n.restore()}),sg()()();}p&2&&(tw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),Vp(),fg(" ",n.content,`
`),Vp(),tw("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),Vp(),fg(" ",n.content,`
`),Vp(12),Dw("ngModel",n.title),r0(),Vp(),Dw("ngModel",n.content),r0(),Vp(2),Dw("ngModel",n.position),tw("p-options",n.positionOptions),r0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,bv],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Popover Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-popover
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-popover-labs"),sg(),Gl(23,"hr")),p&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Se,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,re],encapsulation:2})}return i})();var xe=["cardname"],we=["cardcode"],ye=["carddate"],me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&Yl(xe,7,K)(we,7,K)(ye,7,K),p&2){let l;uo(l=fo())&&(n.cardnameref=l.first),uo(l=fo())&&(n.cardcoderef=l.first),uo(l=fo())&&(n.carddateref=l.first);}},standalone:false,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=Cx();Tl(0,"po-popover",5),Gl(1,"img",6),sg(),Tl(2,"po-popover",5),Gl(3,"img",7),sg(),Tl(4,"po-popover",5),Gl(5,"img",8),sg(),Tl(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),Ew("ngModelChange",function(m){return Ky(l),rN(n.inputCardName,m)||(n.inputCardName=m),Xy(m)}),sg(),t0(),Tl(11,"po-input",11,2),Ew("ngModelChange",function(m){return Ky(l),rN(n.inputCardCode,m)||(n.inputCardCode=m),Xy(m)}),sg(),t0(),Tl(13,"po-input",12,3),Ew("ngModelChange",function(m){return Ky(l),rN(n.inputCardValid,m)||(n.inputCardValid=m),Xy(m)}),sg(),t0(),sg(),Tl(15,"div",9)(16,"po-button",13),ht("click",function(){Ky(l);let m=Ox(18);return Xy(m.open())}),sg()()(),Tl(17,"po-modal",14,4)(19,"div",9)(20,"div"),tN(21),sg()(),Tl(22,"div",9)(23,"div"),tN(24),sg()(),Tl(25,"div",9)(26,"div"),tN(27),sg()()();}if(p&2){let l=Ox(7);tw("p-target",n.cardcoderef),Vp(2),tw("p-target",n.carddateref),Vp(2),tw("p-target",n.cardnameref),Vp(5),Dw("ngModel",n.inputCardName),r0(),Vp(2),Dw("ngModel",n.inputCardCode),r0(),Vp(2),Dw("ngModel",n.inputCardValid),r0(),Vp(3),tw("p-disabled",l.form.invalid),Vp(5),fg("Card Code: ",n.inputCardCode),Vp(3),fg("Card Expiration: ",n.inputCardValid),Vp(3),fg("Card Owner: ",n.inputCardName);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,O3,Yo,bv],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Popover - Credit Card"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-popover-credit-card"),sg(),Gl(23,"hr")),p&2&&(Vp(5),zx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Te,n.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,me],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-doc"]],standalone:false,decls:338,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-popover."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoPopoverComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-popover"),sg(),tN(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),sg(),Tl(18,"p"),tN(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Tl(20,"a",6)(21,"strong"),tN(22,"po-tooltip"),sg()(),tN(23,"."),sg(),Tl(24,"p"),tN(25,"Para conte\xFAdos maiores recomenda-se o uso do "),Tl(26,"a",7)(27,"strong"),tN(28,"po-modal"),sg()(),tN(29,"."),sg(),Tl(30,"p"),tN(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Tl(32,"code"),tN(33,"right"),sg(),tN(34,", "),Tl(35,"code"),tN(36,"right-top"),sg(),tN(37,", "),Tl(38,"code"),tN(39,"right-bottom"),sg(),tN(40,", "),Tl(41,"code"),tN(42,"top"),sg(),tN(43,", "),Tl(44,"code"),tN(45,"top-left"),sg(),tN(46,", "),Tl(47,"code"),tN(48,"top-right"),sg(),tN(49,`,
`),Tl(50,"code"),tN(51,"left"),sg(),tN(52,", "),Tl(53,"code"),tN(54,"left-top"),sg(),tN(55,", "),Tl(56,"code"),tN(57,"left-bottom"),sg(),tN(58,", "),Tl(59,"code"),tN(60,"bottom"),sg(),tN(61,", "),Tl(62,"code"),tN(63,"bottom-left"),sg(),tN(64," e "),Tl(65,"code"),tN(66,"bottom-right"),sg(),tN(67,"."),sg(),Tl(68,"p"),tN(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),Tl(70,"em"),tN(71,"popover"),sg(),tN(72,`.
Os eventos permitidos s\xE3o: `),Tl(73,"code"),tN(74,"click"),sg(),tN(75," e "),Tl(76,"code"),tN(77,"hover"),sg(),tN(78,". "),sg()(),Tl(79,"div",8)(80,"h4",9),tN(81,"Seletor"),sg(),Tl(82,"pre",10),tN(83,`<po-popover
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
`),sg()(),Tl(84,"h4",11),tN(85,"Propriedades"),sg(),Tl(86,"table",12)(87,"tr",13)(88,"th",14),tN(89,"Nome"),sg(),Tl(90,"th",14),tN(91,"Tipo"),sg(),Tl(92,"th",14),tN(93,"Padr\xE3o"),sg(),Tl(94,"th",14),tN(95,"Descri\xE7\xE3o"),sg()(),Tl(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),tN(100," p-append-in-body"),Gl(101,"br"),sg()()(),Tl(102,"td",19)(103,"code",20),tN(104,"boolean"),sg()(),Tl(105,"td",21)(106,"p")(107,"code"),tN(108,"false"),sg()()(),Tl(109,"td",22)(110,"em")(111,"strong"),tN(112,"(opcional)"),sg()(),Tl(113,"p"),tN(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Tl(115,"code"),tN(116,"p-target"),sg(),tN(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),sg()()(),Tl(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),tN(122," (p-close)"),Gl(123,"br"),sg()()(),Tl(124,"td",19)(125,"code",25),tN(126,"EventEmitter"),sg()(),Tl(127,"td",21),tN(128,"-"),sg(),Tl(129,"td",22)(130,"p"),tN(131,"Evento disparado ao fechar o popover."),sg()()(),Tl(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),tN(136," p-custom-classes"),Gl(137,"br"),sg()()(),Tl(138,"td",19)(139,"code",26),tN(140,"string"),sg()(),Tl(141,"td",21),tN(142,"-"),sg(),Tl(143,"td",22)(144,"em")(145,"strong"),tN(146,"(opcional)"),sg()(),Tl(147,"p"),tN(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),sg(),Tl(149,"p"),tN(150,"Exemplo: "),Tl(151,"code"),tN(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),sg(),tN(153,"."),sg()()(),Tl(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),tN(158," p-hide-arrow"),Gl(159,"br"),sg()()(),Tl(160,"td",19)(161,"code",20),tN(162,"boolean"),sg()(),Tl(163,"td",21)(164,"p")(165,"code"),tN(166,"false"),sg()()(),Tl(167,"td",22)(168,"em")(169,"strong"),tN(170,"(opcional)"),sg()(),Tl(171,"p"),tN(172,"Desabilita a seta do componente "),Tl(173,"em"),tN(174,"popover"),sg(),tN(175,"."),sg()()(),Tl(176,"tr",15)(177,"td",16)(178,"div",23)(179,"span",24),tN(180," (p-open)"),Gl(181,"br"),sg()()(),Tl(182,"td",19)(183,"code",25),tN(184,"EventEmitter"),sg()(),Tl(185,"td",21),tN(186,"-"),sg(),Tl(187,"td",22)(188,"p"),tN(189,"Evento disparado ao abrir o popover."),sg()()(),Tl(190,"tr",15)(191,"td",16)(192,"div",17)(193,"span",18),tN(194," p-position"),Gl(195,"br"),sg()()(),Tl(196,"td",19)(197,"code",26),tN(198,"string"),sg()(),Tl(199,"td",21)(200,"p"),tN(201,"right"),sg()(),Tl(202,"td",22)(203,"em")(204,"strong"),tN(205,"(opcional)"),sg()(),Tl(206,"p"),tN(207,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),sg(),Tl(208,"p"),tN(209,"Posi\xE7\xF5es v\xE1lidas:"),sg(),Tl(210,"ul")(211,"li")(212,"code"),tN(213,"right"),sg(),tN(214,": Posiciona o po-popover no lado direito do componente alvo."),sg(),Tl(215,"li")(216,"code"),tN(217,"right-bottom"),sg(),tN(218,": Posiciona o po-popover no lado direito inferior do componente alvo."),sg(),Tl(219,"li")(220,"code"),tN(221,"right-top"),sg(),tN(222,": Posiciona o po-popover no lado direito superior do componente alvo."),sg(),Tl(223,"li")(224,"code"),tN(225,"bottom"),sg(),tN(226,": Posiciona o po-popover abaixo do componente alvo."),sg(),Tl(227,"li")(228,"code"),tN(229,"bottom-left"),sg(),tN(230,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),sg(),Tl(231,"li")(232,"code"),tN(233,"bottom-right"),sg(),tN(234,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),sg(),Tl(235,"li")(236,"code"),tN(237,"left"),sg(),tN(238,": Posiciona o po-popover no lado esquerdo do componente alvo."),sg(),Tl(239,"li")(240,"code"),tN(241,"left-top"),sg(),tN(242,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),sg(),Tl(243,"li")(244,"code"),tN(245,"left-bottom"),sg(),tN(246,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),sg(),Tl(247,"li")(248,"code"),tN(249,"top"),sg(),tN(250,": Posiciona o po-popover acima do componente alvo."),sg(),Tl(251,"li")(252,"code"),tN(253,"top-right"),sg(),tN(254,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),sg(),Tl(255,"li")(256,"code"),tN(257,"top-left"),sg(),tN(258,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),sg()()()(),Tl(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),tN(263," p-target"),Gl(264,"br"),sg()()(),Tl(265,"td",19)(266,"code",27),tN(267,"ElementRef "),sg(),Tl(268,"code",28),tN(269," HTMLElement"),sg()(),Tl(270,"td",21),tN(271,"-"),sg(),Tl(272,"td",22)(273,"p"),tN(274,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),sg(),Tl(275,"pre")(276,"code"),tN(277,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),sg()(),Tl(278,"p"),tN(279,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),sg(),Tl(280,"pre")(281,"code"),tN(282,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),sg()(),Tl(283,"p"),tN(284,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),sg(),Tl(285,"pre")(286,"code"),tN(287,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),sg()()()(),Tl(288,"tr",15)(289,"td",16)(290,"div",17)(291,"span",18),tN(292," p-title"),Gl(293,"br"),sg()()(),Tl(294,"td",19)(295,"code",26),tN(296,"string"),sg()(),Tl(297,"td",21),tN(298,"-"),sg(),Tl(299,"td",22)(300,"em")(301,"strong"),tN(302,"(opcional)"),sg()(),Tl(303,"p"),tN(304,"T\xEDtulo do popover."),sg()()(),Tl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),tN(309," p-trigger"),Gl(310,"br"),sg()()(),Tl(311,"td",19)(312,"code",26),tN(313,"string"),sg()(),Tl(314,"td",21)(315,"p"),tN(316,"click"),sg()(),Tl(317,"td",22)(318,"em")(319,"strong"),tN(320,"(opcional)"),sg()(),Tl(321,"p"),tN(322,"Define o evento que abrir\xE1 o po-popover."),sg(),Tl(323,"p"),tN(324,"Valores v\xE1lidos:"),sg(),Tl(325,"ul")(326,"li")(327,"code"),tN(328,"click"),sg(),tN(329,": Abre ao clicar no componente alvo."),sg(),Tl(330,"li")(331,"code"),tN(332,"hover"),sg(),tN(333,": Abre ao passar o mouse sobre o componente alvo."),sg(),Tl(334,"li")(335,"code"),tN(336,"function"),sg(),tN(337,": Abre atrav\xE9s de fun\xE7\xF5es p\xFAblicas do componente."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-popover-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),sg()()()),p&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ae,le,de,se],encapsulation:2})}return i})();var De=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(De),vL]})}return i})();var ut=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,ue]})}return i})();export{ut as DocPoPopoverModule};