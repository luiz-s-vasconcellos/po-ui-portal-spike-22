import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aK as Pe,bf as Yo,al as lx,J as wl,z as Ux,R as ng,a1 as ut,a$ as fO,ag as fP,aS as Vd,aT as Rd,N as Ul,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aL as di,bx as ia,aO as Yo$1,bB as ga,am as pw,an as $0,aX as _x,ap as hw,aq as G0,as as $l,at as uo,au as fo,bd as na,cW as Xo,a3 as D3,az as Qy,aA as Jy,aB as $x}from'./main-6SPFG3VI.js';var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:false,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-page-slide",1,0),Ux(2," Hello World! "),ng(),wl(3,"div",2)(4,"po-button",3),ut("p-click",function(){Qy(d);let a=_x(1);return Jy(a.open())}),ng()();}},dependencies:[Pe,Yo],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Slide Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-slide-basic"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ee,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return o})();var ve=["poPageSlide"],se=(()=>{class o{poPageSlide;componentsSize;hideClose=false;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore();}openPage(){this.poPageSlide.open();}restore(){this.componentsSize="medium",this.hideClose=false,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[];}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&$l(ve,5),l&2){let d;uo(d=fo())&&(n.poPageSlide=d.first);}},standalone:false,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-page-slide",2,0),Ux(2),ng(),wl(3,"po-button",3),ut("p-click",function(){return n.openPage()}),ng(),Ul(4,"po-divider"),wl(5,"form",null,1)(7,"po-input",4),pw("ngModelChange",function(a){return Qy(d),$x(n.title,a)||(n.title=a),Jy(a)}),ng(),$0(),wl(8,"po-input",5),pw("ngModelChange",function(a){return Qy(d),$x(n.subtitle,a)||(n.subtitle=a),Jy(a)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(a){return Qy(d),$x(n.content,a)||(n.content=a),Jy(a)}),ng(),$0(),wl(10,"po-checkbox-group",7),pw("ngModelChange",function(a){return Qy(d),$x(n.properties,a)||(n.properties=a),Jy(a)}),ng(),$0(),wl(11,"po-radio-group",8),pw("ngModelChange",function(a){return Qy(d),$x(n.size,a)||(n.size=a),Jy(a)}),ng(),$0(),wl(12,"po-radio-group",9),pw("ngModelChange",function(a){return Qy(d),$x(n.componentsSize,a)||(n.componentsSize=a),Jy(a)}),ng(),$0(),wl(13,"div",10)(14,"po-button",11),ut("p-click",function(){return n.restore()}),ng()()();}if(l&2){let d=_x(6);YE("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),Pp(2),cg(" ",n.content,`
`),Pp(),YE("p-disabled",d.form.invalid),Pp(4),hw("ngModel",n.title),G0(),Pp(),hw("ngModel",n.subtitle),G0(),Pp(),hw("ngModel",n.content),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizeOptions),G0(),Pp(),hw("ngModel",n.componentsSize),YE("p-options",n.componentsSizeOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo$1,ga,Yo],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Slide Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  { { content }}
</po-page-slide>

<po-button p-label="Open Page Slide" [p-disabled]="f.form.invalid" (p-click)="openPage()"></po-button>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required></po-input>
  <po-input class="po-md-6" name="Subtitle" [(ngModel)]="subtitle" p-clean p-label="Subtitle" p-optional></po-input>
  <po-input class="po-md-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-required></po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  ></po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="Size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizeOptions"
    p-optional
  ></po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="componentsSize"
    p-columns="4"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PoCheckboxGroupOption, PoPageSlideComponent, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-slide-labs',
  templateUrl: './sample-po-page-slide-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideLabsComponent implements OnInit {
  @ViewChild('poPageSlide')
  private readonly poPageSlide: PoPageSlideComponent;

  public componentsSize: string;
  public hideClose = false;
  public title: string;
  public subtitle: string;
  public content: string;
  public size: string;
  public properties: Array<string>;

  public componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [
    {
      value: 'click-out',
      label: 'Click Out'
    },
    {
      value: 'hide-close',
      label: 'Hide Close'
    }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    {
      label: 'Small',
      value: 'sm'
    },
    {
      label: 'Medium',
      value: 'md'
    },
    {
      label: 'Large',
      value: 'lg'
    },
    {
      label: 'Extra large',
      value: 'xl'
    },
    {
      label: 'Automatic',
      value: 'auto'
    }
  ];

  ngOnInit() {
    this.restore();
  }

  public openPage() {
    this.poPageSlide.open();
  }

  public restore() {
    this.componentsSize = 'medium';
    this.hideClose = false;
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.size = 'md';
    this.properties = [];
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-slide-labs"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return o})();var ue=(()=>{class o{router=f(Cn);bluetooth=true;locked=false;microphone=true;notification=true;favorited=false;localization=true;openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"]);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:false,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=lx();wl(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),pw("ngModelChange",function(a){return Qy(d),$x(n.bluetooth,a)||(n.bluetooth=a),Jy(a)}),ng(),$0(),wl(4,"po-switch",4),pw("ngModelChange",function(a){return Qy(d),$x(n.locked,a)||(n.locked=a),Jy(a)}),ng(),$0(),ng(),wl(5,"div",2)(6,"po-switch",5),pw("ngModelChange",function(a){return Qy(d),$x(n.microphone,a)||(n.microphone=a),Jy(a)}),ng(),$0(),wl(7,"po-switch",6),pw("ngModelChange",function(a){return Qy(d),$x(n.notification,a)||(n.notification=a),Jy(a)}),ng(),$0(),ng(),wl(8,"div",2)(9,"po-switch",7),pw("ngModelChange",function(a){return Qy(d),$x(n.localization,a)||(n.localization=a),Jy(a)}),ng(),$0(),wl(10,"po-switch",8),pw("ngModelChange",function(a){return Qy(d),$x(n.favorited,a)||(n.favorited=a),Jy(a)}),ng(),$0(),ng(),Ul(11,"po-divider"),wl(12,"h2",9),Ux(13,"About Page Slide"),ng(),wl(14,"section",10)(15,"h3",11),Ux(16,"Usage"),ng(),wl(17,"ul",12)(18,"li"),Ux(19,"To reveal additional navigation controls"),ng(),wl(20,"li"),Ux(21,"In TV or mobile space since controls and/or space is limited"),ng(),wl(22,"li"),Ux(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),ng(),wl(24,"li"),Ux(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),ng()()(),wl(26,"section",10)(27,"h3",11),Ux(28,"Challenges"),ng(),wl(29,"ul",12)(30,"li"),Ux(31,"Discoverability"),ng(),wl(32,"li"),Ux(33,"Losing context with the rest of the page"),ng(),wl(34,"li"),Ux(35,"Make the disruption work for you"),ng()()(),wl(36,"section",10)(37,"h3",11),Ux(38,"Recommendations"),ng(),wl(39,"ul",12)(40,"li"),Ux(41,"Use it sparingly only for major context switches"),ng(),wl(42,"li"),Ux(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),ng(),wl(44,"li"),Ux(45,"Make the activation/deactivation dead simple"),ng()()(),wl(46,"p"),Ux(47," For more information visit "),wl(48,"a",13),Ux(49,"Designing Web Interfaces: Page Slide"),ng()(),wl(50,"po-page-slide-footer")(51,"po-button",14),ut("p-click",function(){return n.openPageSlideFooterDocumentation()}),ng()()(),wl(52,"div",15)(53,"po-button",16),ut("p-click",function(){Qy(d);let a=_x(1);return Jy(a.open())}),ng()();}l&2&&(Pp(3),hw("ngModel",n.bluetooth),G0(),Pp(),hw("ngModel",n.locked),G0(),Pp(2),hw("ngModel",n.microphone),G0(),Pp(),hw("ngModel",n.notification),G0(),Pp(2),hw("ngModel",n.localization),G0(),Pp(),hw("ngModel",n.favorited),G0());},dependencies:[iY,ck,Pe,di,na,Yo,Xo],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Slide - Configuration"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Bluetooth"
      p-label-on="Bluetooth"
      name="bluetooth"
      [(ngModel)]="bluetooth"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Unlocked"
      p-label-on="Locked"
      name="locked"
      [(ngModel)]="locked"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Microphone"
      p-label-on="Microphone"
      name="microphone"
      [(ngModel)]="microphone"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Notification"
      p-label-on="Notification"
      name="notification"
      [(ngModel)]="notification"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Localization"
      p-label-on="Localization"
      name="localization"
      [(ngModel)]="localization"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Not favorited"
      p-label-on="Favorited"
      name="favorited"
      [(ngModel)]="favorited"
    ></po-switch>
  </div>

  <po-divider />

  <h2 class="po-font-title">About Page Slide</h2>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Usage</h3>
    <ul class="po-ml-2">
      <li>To reveal additional navigation controls</li>
      <li>In TV or mobile space since controls and/or space is limited</li>
      <li>To expose a configuration panel (similar to the Module Configure Pattern)</li>
      <li>
        To a lesser extent to reveal help or contextual information (the partial hiding of the related content might
        make it a poor choice for this)
      </li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Challenges</h3>
    <ul class="po-ml-2">
      <li>Discoverability</li>
      <li>Losing context with the rest of the page</li>
      <li>Make the disruption work for you</li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Recommendations</h3>
    <ul class="po-ml-2">
      <li>Use it sparingly only for major context switches</li>
      <li>Make the animation fast. No reason to wow the user with your ability to scroll</li>
      <li>Make the activation/deactivation dead simple</li>
    </ul>
  </section>

  <p>
    For more information visit
    <a href="http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern" target="_blank" rel="noopener"
      >Designing Web Interfaces: Page Slide</a
    >
  </p>
  <po-page-slide-footer>
    <po-button p-label="Check footer" (p-click)="openPageSlideFooterDocumentation()"> </po-button>
  </po-page-slide-footer>
</po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="Open Configuration" (p-click)="pageSlide.open()"></po-button>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sample-po-page-slide-configuration',
  templateUrl: './sample-po-page-slide-configuration.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideConfigurationComponent {
  private router = inject(Router);

  public bluetooth = true;
  public locked = false;
  public microphone = true;
  public notification = true;
  public favorited = false;
  public localization = true;

  openPageSlideFooterDocumentation() {
    this.router.navigate(['documentation', 'po-page-slide-footer']);
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-slide-configuration"),ng(),Ul(23,"hr")),l&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ke,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:false,decls:553,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),wl(7,"code"),Ux(8,"po-page-default"),ng(),Ux(9,", "),wl(10,"code"),Ux(11,"po-page-detail"),ng(),Ux(12,`,
`),wl(13,"code"),Ux(14,"po-page-edit"),ng(),Ux(15,", "),wl(16,"code"),Ux(17,"po-page-list"),ng(),Ux(18," e "),wl(19,"code"),Ux(20,"po-page-slide"),ng(),Ux(21,"."),ng()(),wl(22,"h3",3),Ux(23,"Componente"),ng(),wl(24,"h4",4)(25,"code",5),Ux(26,"PoPageSlideComponent"),ng()(),wl(27,"div",2)(28,"p"),Ux(29,"O componente "),wl(30,"code"),Ux(31,"po-page-slide"),ng(),Ux(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),ng(),wl(33,"p"),Ux(34,"Este componente \xE9 ativado a partir do m\xE9todo "),wl(35,"code"),Ux(36,"#open()"),ng(),Ux(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),wl(38,"code"),Ux(39,"#close()"),ng(),Ux(40,"."),ng(),wl(41,"blockquote")(42,"p"),Ux(43,"Para o correto funcionamento do componente "),wl(44,"code"),Ux(45,"po-page-slide"),ng(),Ux(46,`, deve ser
importado o m\xF3dulo `),wl(47,"code"),Ux(48,"BrowserAnimationsModule"),ng(),Ux(49,` no m\xF3dulo principal da sua
aplica\xE7\xE3o.`),ng()(),wl(50,"p"),Ux(51,"M\xF3dulo da aplica\xE7\xE3o:"),ng(),wl(52,"pre")(53,"code"),Ux(54,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),ng()(),wl(55,"p"),Ux(56,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),ng(),wl(57,"pre")(58,"code"),Ux(59,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),ng()(),wl(60,"p"),Ux(61," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),wl(62,"a",6),Ux(63,"Grid System"),ng(),Ux(64,"."),ng(),wl(65,"p"),Ux(66,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),wl(67,"a",7)(68,"code"),Ux(69,"PoPageSlideFooter"),ng()(),Ux(70," para customiza\xE7\xE3o do template."),ng(),wl(71,"ul")(72,"li")(73,"h4"),Ux(74,"Tokens customiz\xE1veis"),ng()()(),wl(75,"p"),Ux(76,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(77,"blockquote")(78,"p"),Ux(79,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(80,"a",8),Ux(81,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(82,"."),ng()(),wl(83,"table")(84,"thead")(85,"tr")(86,"th"),Ux(87,"Propriedade"),ng(),wl(88,"th"),Ux(89,"Descri\xE7\xE3o"),ng(),wl(90,"th"),Ux(91,"Valor Padr\xE3o"),ng()()(),wl(92,"tbody")(93,"tr")(94,"td")(95,"code"),Ux(96,"--font-family"),ng()(),wl(97,"td"),Ux(98,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(99,"td")(100,"code"),Ux(101,"var(--font-family-theme)"),ng()()(),wl(102,"tr")(103,"td")(104,"code"),Ux(105,"--font-weight"),ng()(),wl(106,"td"),Ux(107,"Peso da fonte"),ng(),wl(108,"td")(109,"code"),Ux(110,"var(--font-weight-bold)"),ng()()(),wl(111,"tr")(112,"td")(113,"code"),Ux(114,"--padding-header"),ng()(),wl(115,"td"),Ux(116,"Espa\xE7amento do header"),ng(),wl(117,"td")(118,"code"),Ux(119,"var(--spacing-md)"),ng()()(),wl(120,"tr")(121,"td")(122,"code"),Ux(123,"--padding-body"),ng()(),wl(124,"td"),Ux(125,"Espa\xE7amento do conte\xFAdo"),ng(),wl(126,"td")(127,"code"),Ux(128,"var(--line-height-none)"),ng()()(),wl(129,"tr")(130,"td")(131,"code"),Ux(132,"--padding-footer"),ng()(),wl(133,"td"),Ux(134,"Espa\xE7amento do footer"),ng(),wl(135,"td")(136,"code"),Ux(137,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),ng()()(),wl(138,"tr")(139,"td")(140,"strong"),Ux(141,"Default Values"),ng()(),Ul(142,"td")(143,"td"),ng(),wl(144,"tr")(145,"td")(146,"code"),Ux(147,"--color-overlay"),ng()(),wl(148,"td"),Ux(149,"Cor do overlay"),ng(),wl(150,"td")(151,"code"),Ux(152,"var(--color-neutral-dark-80)"),ng()()(),wl(153,"tr")(154,"td")(155,"code"),Ux(156,"--opacity-overlay"),ng()(),wl(157,"td"),Ux(158,"Cor da opacidade do overlay"),ng(),wl(159,"td")(160,"code"),Ux(161,"0.7"),ng()()(),wl(162,"tr")(163,"td")(164,"code"),Ux(165,"--background-color"),ng()(),wl(166,"td"),Ux(167,"Cor de background"),ng(),wl(168,"td")(169,"code"),Ux(170,"var(--color-neutral-light-00)"),ng()()(),wl(171,"tr")(172,"td")(173,"code"),Ux(174,"--border-color"),ng()(),wl(175,"td"),Ux(176,"Cor da borda"),ng(),wl(177,"td")(178,"code"),Ux(179,"var(--color-neutral-light-20)"),ng()()(),wl(180,"tr")(181,"td")(182,"code"),Ux(183,"--color-title"),ng()(),wl(184,"td"),Ux(185,"Cor do titulo do header"),ng(),wl(186,"td")(187,"code"),Ux(188,"var(--color-neutral-dark-95)"),ng()()(),wl(189,"tr")(190,"td")(191,"code"),Ux(192,"--border-radius"),ng()(),wl(193,"td"),Ux(194,"Radius da borda"),ng(),wl(195,"td")(196,"code"),Ux(197,"var(--border-radius-md) 0 0 var(--border-radius-md)"),ng()()(),wl(198,"tr")(199,"td")(200,"code"),Ux(201,"--transition-duration"),ng()(),wl(202,"td"),Ux(203,"Dura\xE7\xE3o da transi\xE7\xE3o"),ng(),wl(204,"td")(205,"code"),Ux(206,"var(--duration-extra-fast)"),ng()()(),wl(207,"tr")(208,"td")(209,"code"),Ux(210,"--transition-timing"),ng()(),wl(211,"td"),Ux(212,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),ng(),wl(213,"td")(214,"code"),Ux(215,"var(--duration-extra-slow) var(--timing-standart)"),ng()()(),wl(216,"tr")(217,"td")(218,"code"),Ux(219,"--page-slide-width-sm"),ng()(),wl(220,"td"),Ux(221,"Tamanho da largura do componente no tamanho "),wl(222,"code"),Ux(223,"small"),ng()(),wl(224,"td")(225,"code"),Ux(226,"40%"),ng()()(),wl(227,"tr")(228,"td")(229,"code"),Ux(230,"--page-slide-width-md"),ng()(),wl(231,"td"),Ux(232,"Tamanho da largura do componente no tamanho "),wl(233,"code"),Ux(234,"medium"),ng()(),wl(235,"td")(236,"code"),Ux(237,"50%"),ng()()(),wl(238,"tr")(239,"td")(240,"code"),Ux(241,"--page-slide-width-lg"),ng()(),wl(242,"td"),Ux(243,"Tamanho da largura do componente no tamanho "),wl(244,"code"),Ux(245,"large"),ng()(),wl(246,"td")(247,"code"),Ux(248,"60%"),ng()()(),wl(249,"tr")(250,"td")(251,"code"),Ux(252,"--page-slide-width-xl"),ng()(),wl(253,"td"),Ux(254,"Tamanho da largura do componente no tamanho "),wl(255,"code"),Ux(256,"extra large"),ng()(),wl(257,"td")(258,"code"),Ux(259,"70%"),ng()()(),wl(260,"tr")(261,"td")(262,"code"),Ux(263,"--page-slide-min-width-auto"),ng()(),wl(264,"td"),Ux(265,"Tamanho da largura m\xEDnima do componente no tamanho "),wl(266,"code"),Ux(267,"auto"),ng()(),wl(268,"td")(269,"code"),Ux(270,"40%"),ng()()(),wl(271,"tr")(272,"td")(273,"code"),Ux(274,"--page-slide-max-width-auto"),ng()(),wl(275,"td"),Ux(276,"Tamanho da largura m\xE1xima do componente no tamanho "),wl(277,"code"),Ux(278,"auto"),ng()(),wl(279,"td")(280,"code"),Ux(281,"90%"),ng()()()()()(),wl(282,"div",9)(283,"h4",10),Ux(284,"Seletor"),ng(),wl(285,"pre",11),Ux(286,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),ng()(),wl(287,"h4",12),Ux(288,"Propriedades"),ng(),wl(289,"table",13)(290,"tr",14)(291,"th",15),Ux(292,"Nome"),ng(),wl(293,"th",15),Ux(294,"Tipo"),ng(),wl(295,"th",15),Ux(296,"Padr\xE3o"),ng(),wl(297,"th",15),Ux(298,"Descri\xE7\xE3o"),ng()(),wl(299,"tr",16)(300,"td",17)(301,"div",18)(302,"span",19),Ux(303," p-click-out"),Ul(304,"br"),ng()()(),wl(305,"td",20)(306,"code",21),Ux(307,"boolean"),ng()(),wl(308,"td",22)(309,"p")(310,"code"),Ux(311,"false"),ng()()(),wl(312,"td",23)(313,"em")(314,"strong"),Ux(315,"(opcional)"),ng()(),wl(316,"p"),Ux(317,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),ng()()(),wl(318,"tr",16)(319,"td",17)(320,"div",24)(321,"span",25),Ux(322," (p-close)"),Ul(323,"br"),ng()()(),wl(324,"td",20)(325,"code",26),Ux(326,"EventEmitter"),ng()(),wl(327,"td",22),Ux(328,"-"),ng(),wl(329,"td",23)(330,"em")(331,"strong"),Ux(332,"(opcional)"),ng()(),wl(333,"p"),Ux(334,"Evento executado ao fechar o page slide."),ng()()(),wl(335,"tr",16)(336,"td",17)(337,"div",18)(338,"span",19),Ux(339," p-components-size"),Ul(340,"br"),ng()()(),wl(341,"td",20)(342,"code",27),Ux(343,"string"),ng()(),wl(344,"td",22)(345,"p")(346,"code"),Ux(347,"medium"),ng()()(),wl(348,"td",23)(349,"em")(350,"strong"),Ux(351,"(opcional)"),ng()(),wl(352,"p"),Ux(353,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(354,"ul")(355,"li")(356,"code"),Ux(357,"small"),ng(),Ux(358,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(359,"li")(360,"code"),Ux(361,"medium"),ng(),Ux(362,": aplica a medida medium de cada componente."),ng()(),wl(363,"blockquote")(364,"p"),Ux(365,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(366,"code"),Ux(367,"medium"),ng(),Ux(368,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(369,"a",28),Ux(370,"po-theme"),ng(),Ux(371,"."),ng()()()(),wl(372,"tr",16)(373,"td",17)(374,"div",18)(375,"span",19),Ux(376," p-flexible-width"),Ul(377,"br"),ng()()(),wl(378,"td",20)(379,"code",21),Ux(380,"boolean"),ng()(),wl(381,"td",22)(382,"p")(383,"code"),Ux(384,"false"),ng()()(),wl(385,"td",23)(386,"em")(387,"strong"),Ux(388,"(opcional)"),ng()(),wl(389,"p"),Ux(390,"Permite a expans\xE3o din\xE2mica da largura do "),wl(391,"code"),Ux(392,"po-page-slide"),ng(),Ux(393," quando "),wl(394,"code"),Ux(395,"p-size"),ng(),Ux(396," for "),wl(397,"code"),Ux(398,"auto"),ng(),Ux(399,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),wl(400,"code"),Ux(401,"po-table"),ng(),Ux(402," dentro do "),wl(403,"code"),Ux(404,"po-page-slide"),ng()()()(),wl(405,"tr",16)(406,"td",17)(407,"div",18)(408,"span",19),Ux(409," p-hide-close"),Ul(410,"br"),ng()()(),wl(411,"td",20)(412,"code",21),Ux(413,"boolean"),ng()(),wl(414,"td",22)(415,"p")(416,"code"),Ux(417,"false"),ng()()(),wl(418,"td",23)(419,"em")(420,"strong"),Ux(421,"(opcional)"),ng()(),wl(422,"p"),Ux(423,"Oculta o bot\xE3o de encerramento da p\xE1gina."),ng(),wl(424,"p"),Ux(425,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),wl(426,"code"),Ux(427,"p-click-out"),ng(),Ux(428," estiver habilitada."),ng()()(),wl(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),Ux(433," p-size"),Ul(434,"br"),ng()()(),wl(435,"td",20)(436,"code",27),Ux(437,"string"),ng()(),wl(438,"td",22)(439,"p")(440,"code"),Ux(441,"md"),ng()()(),wl(442,"td",23)(443,"em")(444,"strong"),Ux(445,"(opcional)"),ng()(),wl(446,"p"),Ux(447,"Define o tamanho da p\xE1gina."),ng(),wl(448,"p"),Ux(449,"Valores v\xE1lidos:"),ng(),wl(450,"ul")(451,"li")(452,"code"),Ux(453,"sm"),ng(),Ux(454," (pequeno)"),ng(),wl(455,"li")(456,"code"),Ux(457,"md"),ng(),Ux(458," (m\xE9dio)"),ng(),wl(459,"li")(460,"code"),Ux(461,"lg"),ng(),Ux(462," (grande)"),ng(),wl(463,"li")(464,"code"),Ux(465,"xl"),ng(),Ux(466," (extra-grande)"),ng(),wl(467,"li")(468,"code"),Ux(469,"auto"),ng(),Ux(470," (autom\xE1tico)"),ng()(),wl(471,"blockquote")(472,"p"),Ux(473,"Todas as op\xE7\xF5es de tamanho, exceto "),wl(474,"code"),Ux(475,"auto"),ng(),Ux(476,", possuem uma largura m\xE1xima de "),wl(477,"strong"),Ux(478,"768px"),ng(),Ux(479,"."),ng()()()(),wl(480,"tr",16)(481,"td",17)(482,"div",18)(483,"span",19),Ux(484," p-subtitle"),Ul(485,"br"),ng()()(),wl(486,"td",20)(487,"code",27),Ux(488,"string"),ng()(),wl(489,"td",22),Ux(490,"-"),ng(),wl(491,"td",23)(492,"em")(493,"strong"),Ux(494,"(opcional)"),ng()(),wl(495,"p"),Ux(496,"Subt\xEDtulo da p\xE1gina."),ng()()(),wl(497,"tr",16)(498,"td",17)(499,"div",18)(500,"span",19),Ux(501," p-title"),Ul(502,"br"),ng()()(),wl(503,"td",20)(504,"code",27),Ux(505,"string"),ng()(),wl(506,"td",22),Ux(507,"-"),ng(),wl(508,"td",23)(509,"p"),Ux(510,"T\xEDtulo da p\xE1gina."),ng()()()(),wl(511,"h3",12),Ux(512,"M\xE9todos"),ng(),wl(513,"table",29)(514,"tr",16)(515,"th",30)(516,"div",18)(517,"h4")(518,"span",19),Ux(519," open "),ng()()()()(),wl(520,"tr",23)(521,"td",23)(522,"p"),Ux(523,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),ng(),wl(524,"p"),Ux(525,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),wl(526,"code"),Ux(527,"ViewChild"),ng(),Ux(528," da seguinte forma:"),ng(),wl(529,"pre")(530,"code",31),Ux(531,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),ng()()()()(),Ul(532,"br"),wl(533,"table",29)(534,"tr",16)(535,"th",30)(536,"div",18)(537,"h4")(538,"span",19),Ux(539," close "),ng()()()()(),wl(540,"tr",23)(541,"td",23)(542,"p"),Ux(543,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),ng(),wl(544,"p"),Ux(545,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),wl(546,"code"),Ux(547,"ViewChild"),ng(),Ux(548," da seguinte forma:"),ng(),wl(549,"pre")(550,"code",31),Ux(551,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),ng()()()()(),Ul(552,"br"),ng());},dependencies:[fP],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-page-slide-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),ng()()()),l&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,me,ce,ge,Se],encapsulation:2})}return o})();var ze=[{path:"",component:he}],be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[vL.forChild(ze),vL]})}return o})();var st=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[u5,be]})}return o})();export{st as DocPoPageSlideModule};