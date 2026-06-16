import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,aK as Pe,cX as ci,J as wl,z as Ux,R as ng,N as Ul,S as YE,as as $l,at as uo,au as fo,a$ as fO,ag as fP,aS as Vd,aT as Rd,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aL as di,bx as ia,aO as Yo,bB as ga,al as lx,am as pw,an as $0,ap as hw,aq as G0,i as K,aQ as dt,aX as _x,a3 as D3,cY as yi,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var le=(()=>{class i{poButton;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic"]],viewQuery:function(p,n){if(p&1&&$l(yi,7,K),p&2){let l;uo(l=fo())&&(n.poButton=l.first);}},standalone:false,decls:3,vars:1,consts:[[3,"p-target"],["p-label","Open Popover"]],template:function(p,n){p&1&&(wl(0,"po-popover",0),Ux(1," PO Popover "),ng(),Ul(2,"po-button",1)),p&2&&YE("p-target",n.poButton);},dependencies:[Pe,ci],encapsulation:2,changeDetection:1})}return i})();var he=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Popover Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-popover-basic/sample-po-popover-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-popover [p-target]="poButton"> PO Popover </po-popover>

<po-button p-label="Open Popover"> </po-button>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-popover-basic/sample-po-popover-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-popover-basic"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,he,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,le],encapsulation:2})}return i})();var xe=["buttonClick"],we=["buttonHover"],se=(()=>{class i{buttonClickRef;buttonHoverRef;content="";position="";properties=[];title="";positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];restore(){this.content="",this.position=void 0,this.properties=[],this.title="";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs"]],viewQuery:function(p,n){if(p&1&&$l(xe,7,K)(we,7,K),p&2){let l;uo(l=fo())&&(n.buttonClickRef=l.first),uo(l=fo())&&(n.buttonHoverRef=l.first);}},standalone:false,decls:22,vars:16,consts:[["buttonClick",""],["buttonHover",""],["f","ngForm"],["p-trigger","click",3,"p-hide-arrow","p-position","p-target","p-title"],["p-trigger","hover",3,"p-hide-arrow","p-position","p-target","p-title"],[1,"po-row"],[1,"po-offset-xl-1","po-offset-lg-1","po-md-6","po-lg-3"],["p-label","Popover with click"],["p-label","Popover with hover"],["name","title","p-clean","","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","content","p-clean","","p-label","Content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","position","p-label","Position",1,"po-md-8",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let l=lx();wl(0,"po-popover",3),Ux(1),ng(),wl(2,"po-popover",4),Ux(3),ng(),wl(4,"div",5)(5,"div",6),Ul(6,"po-button",7,0),ng(),wl(8,"div",6),Ul(9,"po-button",8,1),ng()(),Ul(11,"po-divider"),wl(12,"form",null,2)(14,"div",5)(15,"po-input",9),pw("ngModelChange",function(m){return Qy(l),$x(n.title,m)||(n.title=m),Jy(m)}),ng(),$0(),wl(16,"po-input",10),pw("ngModelChange",function(m){return Qy(l),$x(n.content,m)||(n.content=m),Jy(m)}),ng(),$0(),ng(),wl(17,"div",5)(18,"po-radio-group",11),pw("ngModelChange",function(m){return Qy(l),$x(n.position,m)||(n.position=m),Jy(m)}),ng(),$0(),wl(19,"po-checkbox-group",12),pw("ngModelChange",function(m){return Qy(l),$x(n.properties,m)||(n.properties=m),Jy(m)}),ng(),$0(),ng(),wl(20,"div",5)(21,"po-button",13),ut("p-click",function(){return n.restore()}),ng()()();}p&2&&(YE("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonClickRef)("p-title",n.title),Pp(),cg(" ",n.content,`
`),Pp(),YE("p-hide-arrow",n.properties.includes("hideArrow"))("p-position",n.position)("p-target",n.buttonHoverRef)("p-title",n.title),Pp(),cg(" ",n.content,`
`),Pp(12),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.content),G0(),Pp(2),hw("ngModel",n.position),YE("p-options",n.positionOptions),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ga,ci],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Popover Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-popover-labs/sample-po-popover-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-popover
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-popover-labs/sample-po-popover-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-popover-labs"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,_e,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return i})();var Me=["cardname"],ke=["cardcode"],De=["carddate"],ue=(()=>{class i{cardnameref;cardcoderef;carddateref;inputCardName;inputCardCode;inputCardValid;static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card"]],viewQuery:function(p,n){if(p&1&&$l(Me,7,K)(ke,7,K)(De,7,K),p&2){let l;uo(l=fo())&&(n.cardnameref=l.first),uo(l=fo())&&(n.cardcoderef=l.first),uo(l=fo())&&(n.carddateref=l.first);}},standalone:false,decls:28,vars:10,consts:[["f","ngForm"],["cardname",""],["cardcode",""],["carddate",""],["modalCreditCard",""],["p-trigger","hover",3,"p-target"],["src","assets/graphics/card-code.jpg"],["src","assets/graphics/card-date.jpg"],["src","assets/graphics/card-owner.jpg"],[1,"po-row"],["name","inputCardName","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","inputCardCode","p-clean","","p-label","Code","p-mask","9999 9999 9999 9999","p-mask-format-model","","p-pattern","\\d{4} \\d{4} \\d{4} \\d{4}","p-required","",1,"po-lg-4","po-md-9",3,"ngModelChange","ngModel"],["name","inputCardValid","p-clean","","p-label","Expiration Date","p-mask","12/99","p-mask-format-model","","p-pattern","\\d{2}\\/\\d{2}","p-required","",1,"po-lg-2","po-md-3",3,"ngModelChange","ngModel"],["p-label","Confirm",1,"po-md-2",3,"click","p-disabled"],["p-title","Your Credit Card"]],template:function(p,n){if(p&1){let l=lx();wl(0,"po-popover",5),Ul(1,"img",6),ng(),wl(2,"po-popover",5),Ul(3,"img",7),ng(),wl(4,"po-popover",5),Ul(5,"img",8),ng(),wl(6,"form",null,0)(8,"div",9)(9,"po-input",10,1),pw("ngModelChange",function(m){return Qy(l),$x(n.inputCardName,m)||(n.inputCardName=m),Jy(m)}),ng(),$0(),wl(11,"po-input",11,2),pw("ngModelChange",function(m){return Qy(l),$x(n.inputCardCode,m)||(n.inputCardCode=m),Jy(m)}),ng(),$0(),wl(13,"po-input",12,3),pw("ngModelChange",function(m){return Qy(l),$x(n.inputCardValid,m)||(n.inputCardValid=m),Jy(m)}),ng(),$0(),ng(),wl(15,"div",9)(16,"po-button",13),ut("click",function(){Qy(l);let m=_x(18);return Jy(m.open())}),ng()()(),wl(17,"po-modal",14,4)(19,"div",9)(20,"div"),Ux(21),ng()(),wl(22,"div",9)(23,"div"),Ux(24),ng()(),wl(25,"div",9)(26,"div"),Ux(27),ng()()();}if(p&2){let l=_x(7);YE("p-target",n.cardcoderef),Pp(2),YE("p-target",n.carddateref),Pp(2),YE("p-target",n.cardnameref),Pp(5),hw("ngModel",n.inputCardName),G0(),Pp(2),hw("ngModel",n.inputCardCode),G0(),Pp(2),hw("ngModel",n.inputCardValid),G0(),Pp(3),YE("p-disabled",l.form.invalid),Pp(5),cg("Card Code: ",n.inputCardCode),Pp(3),cg("Card Expiration: ",n.inputCardValid),Pp(3),cg("Card Owner: ",n.inputCardName);}},dependencies:[aY,iY,oY,ck,ok,Pe,Yo,dt,ci],encapsulation:2,changeDetection:1})}return i})();var Ve=i=>({"docs-sample-code-tabs":i}),ve=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-credit-card-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Popover - Credit Card"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-popover p-trigger="hover" [p-target]="cardcoderef">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-popover-credit-card/sample-po-popover-credit-card.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-popover-credit-card"),ng(),Ul(23,"hr")),p&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ve,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return i})();var ge=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-popover-doc"]],standalone:false,decls:338,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/documentation/po-tooltip?view=doc"],["href","https://po-ui.io/documentation/po-modal?view=doc"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","ElementRef"],["pan","",1,"docs-api-property-type","HTMLElement"]],template:function(p,n){p&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPopoverModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-popover."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoPopoverComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-popover"),ng(),Ux(17,` \xE9 um container pequeno recomendado para incluir v\xE1rios tipos de conte\xFAdo como:
gr\xE1ficos, textos, imagens e inputs. Ele abre sobreposto aos outros componentes.`),ng(),wl(18,"p"),Ux(19,`Para mostrar apenas pequenos textos recomenda-se o uso da diretiva
`),wl(20,"a",6)(21,"strong"),Ux(22,"po-tooltip"),ng()(),Ux(23,"."),ng(),wl(24,"p"),Ux(25,"Para conte\xFAdos maiores recomenda-se o uso do "),wl(26,"a",7)(27,"strong"),Ux(28,"po-modal"),ng()(),Ux(29,"."),ng(),wl(30,"p"),Ux(31,`Ele cont\xE9m um t\xEDtulo e tamb\xE9m \xE9 poss\xEDvel escolher as posi\xE7\xF5es do popover em rela\xE7\xE3o ao componente pai,
as posi\xE7\xF5es permitidas s\xE3o: `),wl(32,"code"),Ux(33,"right"),ng(),Ux(34,", "),wl(35,"code"),Ux(36,"right-top"),ng(),Ux(37,", "),wl(38,"code"),Ux(39,"right-bottom"),ng(),Ux(40,", "),wl(41,"code"),Ux(42,"top"),ng(),Ux(43,", "),wl(44,"code"),Ux(45,"top-left"),ng(),Ux(46,", "),wl(47,"code"),Ux(48,"top-right"),ng(),Ux(49,`,
`),wl(50,"code"),Ux(51,"left"),ng(),Ux(52,", "),wl(53,"code"),Ux(54,"left-top"),ng(),Ux(55,", "),wl(56,"code"),Ux(57,"left-bottom"),ng(),Ux(58,", "),wl(59,"code"),Ux(60,"bottom"),ng(),Ux(61,", "),wl(62,"code"),Ux(63,"bottom-left"),ng(),Ux(64," e "),wl(65,"code"),Ux(66,"bottom-right"),ng(),Ux(67,"."),ng(),wl(68,"p"),Ux(69,"Tamb\xE9m \xE9 poss\xEDvel escolher entre os dois eventos que podem abrir o "),wl(70,"em"),Ux(71,"popover"),ng(),Ux(72,`.
Os eventos permitidos s\xE3o: `),wl(73,"code"),Ux(74,"click"),ng(),Ux(75," e "),wl(76,"code"),Ux(77,"hover"),ng(),Ux(78,". "),ng()(),wl(79,"div",8)(80,"h4",9),Ux(81,"Seletor"),ng(),wl(82,"pre",10),Ux(83,`<po-popover
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
`),ng()(),wl(84,"h4",11),Ux(85,"Propriedades"),ng(),wl(86,"table",12)(87,"tr",13)(88,"th",14),Ux(89,"Nome"),ng(),wl(90,"th",14),Ux(91,"Tipo"),ng(),wl(92,"th",14),Ux(93,"Padr\xE3o"),ng(),wl(94,"th",14),Ux(95,"Descri\xE7\xE3o"),ng()(),wl(96,"tr",15)(97,"td",16)(98,"div",17)(99,"span",18),Ux(100," p-append-in-body"),Ul(101,"br"),ng()()(),wl(102,"td",19)(103,"code",20),Ux(104,"boolean"),ng()(),wl(105,"td",21)(106,"p")(107,"code"),Ux(108,"false"),ng()()(),wl(109,"td",22)(110,"em")(111,"strong"),Ux(112,"(opcional)"),ng()(),wl(113,"p"),Ux(114,"Define que o popover ser\xE1 inserido no body da p\xE1gina em vez do elemento definido em "),wl(115,"code"),Ux(116,"p-target"),ng(),Ux(117,`. Essa op\xE7\xE3o pode
ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o posicionamento
correto do conte\xFAdo pr\xF3ximo ao elemento.`),ng()()(),wl(118,"tr",15)(119,"td",16)(120,"div",23)(121,"span",24),Ux(122," (p-close)"),Ul(123,"br"),ng()()(),wl(124,"td",19)(125,"code",25),Ux(126,"EventEmitter"),ng()(),wl(127,"td",21),Ux(128,"-"),ng(),wl(129,"td",22)(130,"p"),Ux(131,"Evento disparado ao fechar o popover."),ng()()(),wl(132,"tr",15)(133,"td",16)(134,"div",17)(135,"span",18),Ux(136," p-custom-classes"),Ul(137,"br"),ng()()(),wl(138,"td",19)(139,"code",26),Ux(140,"string"),ng()(),wl(141,"td",21),Ux(142,"-"),ng(),wl(143,"td",22)(144,"em")(145,"strong"),Ux(146,"(opcional)"),ng()(),wl(147,"p"),Ux(148,"Permite a inclus\xE3o de classes CSS customizadas ao componente."),ng(),wl(149,"p"),Ux(150,"Exemplo: "),wl(151,"code"),Ux(152,'p-custom-classes="minha-classe-1 minha-classe-2"'),ng(),Ux(153,"."),ng()()(),wl(154,"tr",15)(155,"td",16)(156,"div",17)(157,"span",18),Ux(158," p-hide-arrow"),Ul(159,"br"),ng()()(),wl(160,"td",19)(161,"code",20),Ux(162,"boolean"),ng()(),wl(163,"td",21)(164,"p")(165,"code"),Ux(166,"false"),ng()()(),wl(167,"td",22)(168,"em")(169,"strong"),Ux(170,"(opcional)"),ng()(),wl(171,"p"),Ux(172,"Desabilita a seta do componente "),wl(173,"em"),Ux(174,"popover"),ng(),Ux(175,"."),ng()()(),wl(176,"tr",15)(177,"td",16)(178,"div",23)(179,"span",24),Ux(180," (p-open)"),Ul(181,"br"),ng()()(),wl(182,"td",19)(183,"code",25),Ux(184,"EventEmitter"),ng()(),wl(185,"td",21),Ux(186,"-"),ng(),wl(187,"td",22)(188,"p"),Ux(189,"Evento disparado ao abrir o popover."),ng()()(),wl(190,"tr",15)(191,"td",16)(192,"div",17)(193,"span",18),Ux(194," p-position"),Ul(195,"br"),ng()()(),wl(196,"td",19)(197,"code",26),Ux(198,"string"),ng()(),wl(199,"td",21)(200,"p"),Ux(201,"right"),ng()(),wl(202,"td",22)(203,"em")(204,"strong"),Ux(205,"(opcional)"),ng()(),wl(206,"p"),Ux(207,`Define a posi\xE7\xE3o que o po-popover abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o "right" (direita), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),ng(),wl(208,"p"),Ux(209,"Posi\xE7\xF5es v\xE1lidas:"),ng(),wl(210,"ul")(211,"li")(212,"code"),Ux(213,"right"),ng(),Ux(214,": Posiciona o po-popover no lado direito do componente alvo."),ng(),wl(215,"li")(216,"code"),Ux(217,"right-bottom"),ng(),Ux(218,": Posiciona o po-popover no lado direito inferior do componente alvo."),ng(),wl(219,"li")(220,"code"),Ux(221,"right-top"),ng(),Ux(222,": Posiciona o po-popover no lado direito superior do componente alvo."),ng(),wl(223,"li")(224,"code"),Ux(225,"bottom"),ng(),Ux(226,": Posiciona o po-popover abaixo do componente alvo."),ng(),wl(227,"li")(228,"code"),Ux(229,"bottom-left"),ng(),Ux(230,": Posiciona o po-popover abaixo e \xE0 esquerda do componente alvo."),ng(),wl(231,"li")(232,"code"),Ux(233,"bottom-right"),ng(),Ux(234,": Posiciona o po-popover abaixo e \xE0 direita do componente alvo."),ng(),wl(235,"li")(236,"code"),Ux(237,"left"),ng(),Ux(238,": Posiciona o po-popover no lado esquerdo do componente alvo."),ng(),wl(239,"li")(240,"code"),Ux(241,"left-top"),ng(),Ux(242,": Posiciona o po-popover no lado esquerdo superior do componente alvo."),ng(),wl(243,"li")(244,"code"),Ux(245,"left-bottom"),ng(),Ux(246,": Posiciona o po-popover no lado esquerdo inferior do componente alvo."),ng(),wl(247,"li")(248,"code"),Ux(249,"top"),ng(),Ux(250,": Posiciona o po-popover acima do componente alvo."),ng(),wl(251,"li")(252,"code"),Ux(253,"top-right"),ng(),Ux(254,": Posiciona o po-popover acima e \xE0 direita do componente alvo."),ng(),wl(255,"li")(256,"code"),Ux(257,"top-left"),ng(),Ux(258,": Posiciona o po-popover acima e \xE0 esquerda do componente alvo."),ng()()()(),wl(259,"tr",15)(260,"td",16)(261,"div",17)(262,"span",18),Ux(263," p-target"),Ul(264,"br"),ng()()(),wl(265,"td",19)(266,"code",27),Ux(267,"ElementRef "),ng(),wl(268,"code",28),Ux(269," HTMLElement"),ng()(),wl(270,"td",21),Ux(271,"-"),ng(),wl(272,"td",22)(273,"p"),Ux(274,`ElementRef do componente de origem respons\xE1vel por abrir o popover.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),ng(),wl(275,"pre")(276,"code"),Ux(277,`<po-button
  p-label="Open Popover">
</po-button>

<po-popover
  [p-target]="poButton"
  [p-title]="PO Popover">
</po-popover>
`),ng()(),wl(278,"p"),Ux(279,`Tamb\xE9m deve-se criar um ViewChild para cada popover, passando como refer\xEAncia o elemento do
HTML que ir\xE1 disparar o evento. Exemplo:`),ng(),wl(280,"pre")(281,"code"),Ux(282,`@ViewChild(PoButtonComponent, {read: ElementRef}) poButton: PoButtonComponent;
`),ng()(),wl(283,"p"),Ux(284,`Pode-se tambem informar diretamente o HTMLElement, para n\xE3o ter que utilizar o ViewChild.
Para utilizar o po-popover deve-se colocar uma vari\xE1vel no componente que vai disparar o evento
de abertura, exemplo:`),ng(),wl(285,"pre")(286,"code"),Ux(287,`<button #target>
  Abrir popover
</button>

<po-popover
    [p-target]="target"
    p-trigger="click" >
</po-popover>
`),ng()()()(),wl(288,"tr",15)(289,"td",16)(290,"div",17)(291,"span",18),Ux(292," p-title"),Ul(293,"br"),ng()()(),wl(294,"td",19)(295,"code",26),Ux(296,"string"),ng()(),wl(297,"td",21),Ux(298,"-"),ng(),wl(299,"td",22)(300,"em")(301,"strong"),Ux(302,"(opcional)"),ng()(),wl(303,"p"),Ux(304,"T\xEDtulo do popover."),ng()()(),wl(305,"tr",15)(306,"td",16)(307,"div",17)(308,"span",18),Ux(309," p-trigger"),Ul(310,"br"),ng()()(),wl(311,"td",19)(312,"code",26),Ux(313,"string"),ng()(),wl(314,"td",21)(315,"p"),Ux(316,"click"),ng()(),wl(317,"td",22)(318,"em")(319,"strong"),Ux(320,"(opcional)"),ng()(),wl(321,"p"),Ux(322,"Define o evento que abrir\xE1 o po-popover."),ng(),wl(323,"p"),Ux(324,"Valores v\xE1lidos:"),ng(),wl(325,"ul")(326,"li")(327,"code"),Ux(328,"click"),ng(),Ux(329,": Abre ao clicar no componente alvo."),ng(),wl(330,"li")(331,"code"),Ux(332,"hover"),ng(),Ux(333,": Abre ao passar o mouse sobre o componente alvo."),ng(),wl(334,"li")(335,"code"),Ux(336,"function"),ng(),Ux(337,": Abre atrav\xE9s de fun\xE7\xF5es p\xFAblicas do componente."),ng()()()()()());},dependencies:[fP],encapsulation:2})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(p){return new(p||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Popover",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-popover-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-popover-basic-view")(6,"sample-po-popover-labs-view")(7,"sample-po-popover-credit-card-view"),ng()()()),p&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,de,ce,ve,ge],encapsulation:2})}return i})();var qe=[{path:"",component:Ce}],fe=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(qe),vL]})}return i})();var xt=(()=>{class i{static \u0275fac=function(p){return new(p||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[u5,fe]})}return i})();export{xt as DocPoPopoverModule};