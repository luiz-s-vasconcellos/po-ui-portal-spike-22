import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,a$ as Qt,dw as Sv,Q as Cl,z as qx,T as og,R as Hl,Z as ZE,av as zl,aw as uo,ax as fo,an as yO,aH as Zr,b7 as ofe,b8 as lfe,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,K,b5 as Ko,bc as Sx,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ie=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&zl(Qt,7,K),p&2){let l;uo(l=fo())&&(n.poButton=l.first);}},standalone:false,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(Cl(0,"po-popover",0),qx(1," PO Popover "),og(),Hl(2,"po-button",1)),p&2&&ZE("p-target",n.poButton);},dependencies:[Qt,Sv],encapsulation:2,changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ae=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Popover Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-popover-basic"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ie],encapsulation:2})}return i})();var fe=["buttonClick"],he=["buttonHover"],re=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title="";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&zl(fe,7,K)(he,7,K),p&2){let l;uo(l=fo())&&(n.buttonClickRef=l.first),uo(l=fo())&&(n.buttonHoverRef=l.first);}},standalone:false,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=gx();Cl(0,"po-popover",3),qx(1),og(),Cl(2,"po-popover",4),qx(3),og(),Cl(4,"div",5)(5,"div",6),Hl(6,"po-button",7,0),og(),Cl(8,"div",6),Hl(9,"po-button",8,1),og()(),Hl(11,"po-divider"),Cl(12,"form",null,2)(14,"div",5)(15,"po-input",9),gw("ngModelChange",function(m){return Jy(l),Zx(n.title,m)||(n.title=m),e_(m)}),og(),Z0(),Cl(16,"po-input",10),gw("ngModelChange",function(m){return Jy(l),Zx(n.content,m)||(n.content=m),e_(m)}),og(),Z0(),og(),Cl(17,"div",5)(18,"po-radio-group",11),gw("ngModelChange",function(m){return Jy(l),Zx(n.position,m)||(n.position=m),e_(m)}),og(),Z0(),Cl(19,"po-checkbox-group",12),gw("ngModelChange",function(m){return Jy(l),Zx(n.properties,m)||(n.properties=m),e_(m)}),og(),Z0(),og(),Cl(20,"div",5)(21,"po-button",13),dt("p-click",function(){return n.restore()}),og()()();}p&2&&(ZE("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(),ZE("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),Lp(),dg(" ",n.content,`
`),Lp(12),pw("ngModel",n.title),X0(),Lp(),pw("ngModel",n.content),X0(),Lp(2),pw("ngModel",n.position),ZE("p-options",n.positionOptions),X0(),Lp(),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,Sv],encapsulation:2,changeDetection:1})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Popover Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-popover
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-popover-labs"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Se,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return i})();var xe=["cardname"],we=["cardcode"],ye=["carddate"],me=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&zl(xe,7,K)(we,7,K)(ye,7,K),p&2){let l;uo(l=fo())&&(n.cardnameref=l.first),uo(l=fo())&&(n.cardcoderef=l.first),uo(l=fo())&&(n.carddateref=l.first);}},standalone:false,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=gx();Cl(0,"po-popover",5),Hl(1,"img",6),og(),Cl(2,"po-popover",5),Hl(3,"img",7),og(),Cl(4,"po-popover",5),Hl(5,"img",8),og(),Cl(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),gw("ngModelChange",function(m){return Jy(l),Zx(n.inputCardName,m)||(n.inputCardName=m),e_(m)}),og(),Z0(),Cl(11,"po-input",11,2),gw("ngModelChange",function(m){return Jy(l),Zx(n.inputCardCode,m)||(n.inputCardCode=m),e_(m)}),og(),Z0(),Cl(13,"po-input",12,3),gw("ngModelChange",function(m){return Jy(l),Zx(n.inputCardValid,m)||(n.inputCardValid=m),e_(m)}),og(),Z0(),og(),Cl(15,"div",9)(16,"po-button",13),dt("click",function(){Jy(l);let m=Sx(18);return e_(m.open())}),og()()(),Cl(17,"po-modal",14,4)(19,"div",9)(20,"div"),qx(21),og()(),Cl(22,"div",9)(23,"div"),qx(24),og()(),Cl(25,"div",9)(26,"div"),qx(27),og()()();}if(p&2){let l=Sx(7);ZE("p-target",n.cardcoderef),Lp(2),ZE("p-target",n.carddateref),Lp(2),ZE("p-target",n.cardnameref),Lp(5),pw("ngModel",n.inputCardName),X0(),Lp(2),pw("ngModel",n.inputCardCode),X0(),Lp(2),pw("ngModel",n.inputCardValid),X0(),Lp(3),ZE("p-disabled",l.form.invalid),Lp(5),dg("Card Code: ",n.inputCardCode),Lp(3),dg("Card Expiration: ",n.inputCardValid),Lp(3),dg("Card Owner: ",n.inputCardName);}},dependencies:[lY,sY,aY,gk,fk,Qt,q3,Ko,Sv],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Popover - Credit Card"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-popover-credit-card"),og(),Hl(23,"hr")),p&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-doc"]],standalone:false,decls:338,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-popover."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoPopoverComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-popover"),og(),qx(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),og(),Cl(18,"p"),qx(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),Cl(20,"a",6)(21,"strong"),qx(22,"po-tooltip"),og()(),qx(23,"."),og(),Cl(24,"p"),qx(25,"Para conte\xFAdos maiores recomenda-se o uso do "),Cl(26,"a",7)(27,"strong"),qx(28,"po-modal"),og()(),qx(29,"."),og(),Cl(30,"p"),qx(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),Cl(32,"code"),qx(33,"right"),og(),qx(34,", "),Cl(35,"code"),qx(36,"right-top"),og(),qx(37,", "),Cl(38,"code"),qx(39,"right-bottom"),og(),qx(40,", "),Cl(41,"code"),qx(42,"top"),og(),qx(43,", "),Cl(44,"code"),qx(45,"top-left"),og(),qx(46,", "),Cl(47,"code"),qx(48,"top-right"),og(),qx(49,`,
`),Cl(50,"code"),qx(51,"left"),og(),qx(52,", "),Cl(53,"code"),qx(54,"left-top"),og(),qx(55,", "),Cl(56,"code"),qx(57,"left-bottom"),og(),qx(58,", "),Cl(59,"code"),qx(60,"bottom"),og(),qx(61,", "),Cl(62,"code"),qx(63,"bottom-left"),og(),qx(64," e "),Cl(65,"code"),qx(66,"bottom-right"),og(),qx(67,"."),og(),Cl(68,"p"),qx(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),Cl(70,"em"),qx(71,"popover"),og(),qx(72,`.
Os eventos permitidos s\xE3o: `),Cl(73,"code"),qx(74,"click"),og(),qx(75," e "),Cl(76,"code"),qx(77,"hover"),og(),qx(78,". "),og()(),Cl(79,"div",8)(80,"h4",9),qx(81,"Seletor"),og(),Cl(82,"pre",10),qx(83,`<po-popover
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
`),og()(),Cl(84,"h4",11),qx(85,"Propriedades"),og(),Cl(86,"table",12)(87,"tr",13)(88,"th",14),qx(89,"Nome"),og(),Cl(90,"th",14),qx(91,"Tipo"),og(),Cl(92,"th",14),qx(93,"Padr\xE3o"),og(),Cl(94,"th",14),qx(95,"Descri\xE7\xE3o"),og()(),Cl(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),qx(100," p-append-in-body"),Hl(101,"br"),og()()(),Cl(102,"td",19)(103,"code",20),qx(104,"boolean"),og()(),Cl(105,"td",21)(106,"p")(107,"code"),qx(108,"false"),og()()(),Cl(109,"td",22)(110,"em")(111,"strong"),qx(112,"(opcional)"),og()(),Cl(113,"p"),qx(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),Cl(115,"code"),qx(116,"p-target"),og(),qx(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),og()()(),Cl(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),qx(122," (p-close)"),Hl(123,"br"),og()()(),Cl(124,"td",19)(125,"code",25),qx(126,"EventEmitter"),og()(),Cl(127,"td",21),qx(128,"-"),og(),Cl(129,"td",22)(130,"p"),qx(131,"Evento disparado ao fechar o popover."),og()()(),Cl(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),qx(136," p-custom-classes"),Hl(137,"br"),og()()(),Cl(138,"td",19)(139,"code",26),qx(140,"string"),og()(),Cl(141,"td",21),qx(142,"-"),og(),Cl(143,"td",22)(144,"em")(145,"strong"),qx(146,"(opcional)"),og()(),Cl(147,"p"),qx(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),og(),Cl(149,"p"),qx(150,"Exemplo: "),Cl(151,"code"),qx(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),og(),qx(153,"."),og()()(),Cl(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),qx(158," p-hide-arrow"),Hl(159,"br"),og()()(),Cl(160,"td",19)(161,"code",20),qx(162,"boolean"),og()(),Cl(163,"td",21)(164,"p")(165,"code"),qx(166,"false"),og()()(),Cl(167,"td",22)(168,"em")(169,"strong"),qx(170,"(opcional)"),og()(),Cl(171,"p"),qx(172,"Desabilita a seta do componente "),Cl(173,"em"),qx(174,"popover"),og(),qx(175,"."),og()()(),Cl(176,"tr",15)(177,"td",16)(178,"div",23)(179,"span",24),qx(180," (p-open)"),Hl(181,"br"),og()()(),Cl(182,"td",19)(183,"code",25),qx(184,"EventEmitter"),og()(),Cl(185,"td",21),qx(186,"-"),og(),Cl(187,"td",22)(188,"p"),qx(189,"Evento disparado ao abrir o popover."),og()()(),Cl(190,"tr",15)(191,"td",16)(192,"div",17)(193,"span",18),qx(194," p-position"),Hl(195,"br"),og()()(),Cl(196,"td",19)(197,"code",26),qx(198,"string"),og()(),Cl(199,"td",21)(200,"p"),qx(201,"right"),og()(),Cl(202,"td",22)(203,"em")(204,"strong"),qx(205,"(opcional)"),og()(),Cl(206,"p"),qx(207,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),og(),Cl(208,"p"),qx(209,"Posi\xE7\xF5es v\xE1lidas:"),og(),Cl(210,"ul")(211,"li")(212,"code"),qx(213,"right"),og(),qx(214,": Posiciona o po-popover no lado direito do componente alvo."),og(),Cl(215,"li")(216,"code"),qx(217,"right-bottom"),og(),qx(218,": Posiciona o po-popover no lado direito inferior do componente alvo."),og(),Cl(219,"li")(220,"code"),qx(221,"right-top"),og(),qx(222,": Posiciona o po-popover no lado direito superior do componente alvo."),og(),Cl(223,"li")(224,"code"),qx(225,"bottom"),og(),qx(226,": Posiciona o po-popover abaixo do componente alvo."),og(),Cl(227,"li")(228,"code"),qx(229,"bottom-left"),og(),qx(230,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),og(),Cl(231,"li")(232,"code"),qx(233,"bottom-right"),og(),qx(234,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),og(),Cl(235,"li")(236,"code"),qx(237,"left"),og(),qx(238,": Posiciona o po-popover no lado esquerdo do componente alvo."),og(),Cl(239,"li")(240,"code"),qx(241,"left-top"),og(),qx(242,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),og(),Cl(243,"li")(244,"code"),qx(245,"left-bottom"),og(),qx(246,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),og(),Cl(247,"li")(248,"code"),qx(249,"top"),og(),qx(250,": Posiciona o po-popover acima do componente alvo."),og(),Cl(251,"li")(252,"code"),qx(253,"top-right"),og(),qx(254,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),og(),Cl(255,"li")(256,"code"),qx(257,"top-left"),og(),qx(258,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),og()()()(),Cl(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),qx(263," p-target"),Hl(264,"br"),og()()(),Cl(265,"td",19)(266,"code",27),qx(267,"ElementRef "),og(),Cl(268,"code",28),qx(269," HTMLElement"),og()(),Cl(270,"td",21),qx(271,"-"),og(),Cl(272,"td",22)(273,"p"),qx(274,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Cl(275,"pre")(276,"code"),qx(277,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),og()(),Cl(278,"p"),qx(279,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),og(),Cl(280,"pre")(281,"code"),qx(282,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),og()(),Cl(283,"p"),qx(284,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),og(),Cl(285,"pre")(286,"code"),qx(287,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),og()()()(),Cl(288,"tr",15)(289,"td",16)(290,"div",17)(291,"span",18),qx(292," p-title"),Hl(293,"br"),og()()(),Cl(294,"td",19)(295,"code",26),qx(296,"string"),og()(),Cl(297,"td",21),qx(298,"-"),og(),Cl(299,"td",22)(300,"em")(301,"strong"),qx(302,"(opcional)"),og()(),Cl(303,"p"),qx(304,"T\xEDtulo do popover."),og()()(),Cl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),qx(309," p-trigger"),Hl(310,"br"),og()()(),Cl(311,"td",19)(312,"code",26),qx(313,"string"),og()(),Cl(314,"td",21)(315,"p"),qx(316,"click"),og()(),Cl(317,"td",22)(318,"em")(319,"strong"),qx(320,"(opcional)"),og()(),Cl(321,"p"),qx(322,"Define o evento que abrir\xE1 o po-popover."),og(),Cl(323,"p"),qx(324,"Valores v\xE1lidos:"),og(),Cl(325,"ul")(326,"li")(327,"code"),qx(328,"click"),og(),qx(329,": Abre ao clicar no componente alvo."),og(),Cl(330,"li")(331,"code"),qx(332,"hover"),og(),qx(333,": Abre ao passar o mouse sobre o componente alvo."),og(),Cl(334,"li")(335,"code"),qx(336,"function"),og(),qx(337,": Abre atrav\xE9s de fun\xE7\xF5es p\xFAblicas do componente."),og()()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-popover-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),og()()()),p&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ae,le,de,se],encapsulation:2})}return i})();var De=[{path:"",component:ce}],ue=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[bL.forChild(De),bL]})}return i})();var ut=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ca,ue]})}return i})();export{ut as DocPoPopoverModule};