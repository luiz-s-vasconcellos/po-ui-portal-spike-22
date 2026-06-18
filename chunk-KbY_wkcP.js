import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,b0 as Qt,bJ as zue,aB as Ex,H as Sl,J as Jx,O as sg,a1 as ht,an as bO,aH as Ga,b8 as Gme,b9 as Qme,M as Wl,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,av as ql,aw as lo,ax as uo,bH as E3,dq as Fue,a3 as pNe,aD as Xy,aE as Qy,aT as tN}from'./main-UTR4MKMU.js';var ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:false,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Ex();Sl(0,"po-page-slide",1,0),Jx(2," Hello World! "),sg(),Sl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Xy(d);let a=xx(1);return Qy(a.open())}),sg()();}},dependencies:[Qt,zue],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Slide Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-slide-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,he,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ae],encapsulation:2})}return o})();var Ee=["poPageSlide"],re=(()=>{class o{poPageSlide;componentsSize;hideClose=false;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore();}openPage(){this.poPageSlide.open();}restore(){this.componentsSize="medium",this.hideClose=false,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[];}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&ql(Ee,5),l&2){let d;lo(d=uo())&&(n.poPageSlide=d.first);}},standalone:false,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=Ex();Sl(0,"po-page-slide",2,0),Jx(2),sg(),Sl(3,"po-button",3),ht("p-click",function(){return n.openPage()}),sg(),Wl(4,"po-divider"),Sl(5,"form",null,1)(7,"po-input",4),Ew("ngModelChange",function(a){return Xy(d),tN(n.title,a)||(n.title=a),Qy(a)}),sg(),JA(),Sl(8,"po-input",5),Ew("ngModelChange",function(a){return Xy(d),tN(n.subtitle,a)||(n.subtitle=a),Qy(a)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(a){return Xy(d),tN(n.content,a)||(n.content=a),Qy(a)}),sg(),JA(),Sl(10,"po-checkbox-group",7),Ew("ngModelChange",function(a){return Xy(d),tN(n.properties,a)||(n.properties=a),Qy(a)}),sg(),JA(),Sl(11,"po-radio-group",8),Ew("ngModelChange",function(a){return Xy(d),tN(n.size,a)||(n.size=a),Qy(a)}),sg(),JA(),Sl(12,"po-radio-group",9),Ew("ngModelChange",function(a){return Xy(d),tN(n.componentsSize,a)||(n.componentsSize=a),Qy(a)}),sg(),JA(),Sl(13,"div",10)(14,"po-button",11),ht("p-click",function(){return n.restore()}),sg()()();}if(l&2){let d=xx(6);tw("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),Vp(2),fg(" ",n.content,`
`),Vp(),tw("p-disabled",d.form.invalid),Vp(4),Dw("ngModel",n.title),t0(),Vp(),Dw("ngModel",n.subtitle),t0(),Vp(),Dw("ngModel",n.content),t0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),t0(),Vp(),Dw("ngModel",n.size),tw("p-options",n.sizeOptions),t0(),Vp(),Dw("ngModel",n.componentsSize),tw("p-options",n.componentsSizeOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,zue],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Slide Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-slide
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-slide-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return o})();var me=(()=>{class o{router=f(wn);bluetooth=true;locked=false;microphone=true;notification=true;favorited=false;localization=true;openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"]);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:false,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Ex();Sl(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),Ew("ngModelChange",function(a){return Xy(d),tN(n.bluetooth,a)||(n.bluetooth=a),Qy(a)}),sg(),JA(),Sl(4,"po-switch",4),Ew("ngModelChange",function(a){return Xy(d),tN(n.locked,a)||(n.locked=a),Qy(a)}),sg(),JA(),sg(),Sl(5,"div",2)(6,"po-switch",5),Ew("ngModelChange",function(a){return Xy(d),tN(n.microphone,a)||(n.microphone=a),Qy(a)}),sg(),JA(),Sl(7,"po-switch",6),Ew("ngModelChange",function(a){return Xy(d),tN(n.notification,a)||(n.notification=a),Qy(a)}),sg(),JA(),sg(),Sl(8,"div",2)(9,"po-switch",7),Ew("ngModelChange",function(a){return Xy(d),tN(n.localization,a)||(n.localization=a),Qy(a)}),sg(),JA(),Sl(10,"po-switch",8),Ew("ngModelChange",function(a){return Xy(d),tN(n.favorited,a)||(n.favorited=a),Qy(a)}),sg(),JA(),sg(),Wl(11,"po-divider"),Sl(12,"h2",9),Jx(13,"About Page Slide"),sg(),Sl(14,"section",10)(15,"h3",11),Jx(16,"Usage"),sg(),Sl(17,"ul",12)(18,"li"),Jx(19,"To reveal additional navigation controls"),sg(),Sl(20,"li"),Jx(21,"In TV or mobile space since controls and/or space is limited"),sg(),Sl(22,"li"),Jx(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),sg(),Sl(24,"li"),Jx(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),sg()()(),Sl(26,"section",10)(27,"h3",11),Jx(28,"Challenges"),sg(),Sl(29,"ul",12)(30,"li"),Jx(31,"Discoverability"),sg(),Sl(32,"li"),Jx(33,"Losing context with the rest of the page"),sg(),Sl(34,"li"),Jx(35,"Make the disruption work for you"),sg()()(),Sl(36,"section",10)(37,"h3",11),Jx(38,"Recommendations"),sg(),Sl(39,"ul",12)(40,"li"),Jx(41,"Use it sparingly only for major context switches"),sg(),Sl(42,"li"),Jx(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),sg(),Sl(44,"li"),Jx(45,"Make the activation/deactivation dead simple"),sg()()(),Sl(46,"p"),Jx(47," For more information visit "),Sl(48,"a",13),Jx(49,"Designing Web Interfaces: Page Slide"),sg()(),Sl(50,"po-page-slide-footer")(51,"po-button",14),ht("p-click",function(){return n.openPageSlideFooterDocumentation()}),sg()()(),Sl(52,"div",15)(53,"po-button",16),ht("p-click",function(){Xy(d);let a=xx(1);return Qy(a.open())}),sg()();}l&2&&(Vp(3),Dw("ngModel",n.bluetooth),t0(),Vp(),Dw("ngModel",n.locked),t0(),Vp(2),Dw("ngModel",n.microphone),t0(),Vp(),Dw("ngModel",n.notification),t0(),Vp(2),Dw("ngModel",n.localization),t0(),Vp(),Dw("ngModel",n.favorited),t0());},dependencies:[K9,Dk,Qt,mv,E3,zue,Fue],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Slide - Configuration"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-slide-configuration"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:false,decls:534,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Sl(7,"code"),Jx(8,"po-page-default"),sg(),Jx(9,", "),Sl(10,"code"),Jx(11,"po-page-detail"),sg(),Jx(12,`,
`),Sl(13,"code"),Jx(14,"po-page-edit"),sg(),Jx(15,", "),Sl(16,"code"),Jx(17,"po-page-list"),sg(),Jx(18," e "),Sl(19,"code"),Jx(20,"po-page-slide"),sg(),Jx(21,"."),sg()(),Sl(22,"h3",3),Jx(23,"Componente"),sg(),Sl(24,"h4",4)(25,"code",5),Jx(26,"PoPageSlideComponent"),sg()(),Sl(27,"div",2)(28,"p"),Jx(29,"O componente "),Sl(30,"code"),Jx(31,"po-page-slide"),sg(),Jx(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),sg(),Sl(33,"p"),Jx(34,"Este componente \xE9 ativado a partir do m\xE9todo "),Sl(35,"code"),Jx(36,"#open()"),sg(),Jx(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Sl(38,"code"),Jx(39,"#close()"),sg(),Jx(40,"."),sg(),Sl(41,"p"),Jx(42," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),Sl(43,"a",6),Jx(44,"Grid System"),sg(),Jx(45,"."),sg(),Sl(46,"p"),Jx(47,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),Sl(48,"a",7)(49,"code"),Jx(50,"PoPageSlideFooter"),sg()(),Jx(51," para customiza\xE7\xE3o do template."),sg(),Sl(52,"ul")(53,"li")(54,"h4"),Jx(55,"Tokens customiz\xE1veis"),sg()()(),Sl(56,"p"),Jx(57,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(58,"blockquote")(59,"p"),Jx(60,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(61,"a",8),Jx(62,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(63,"."),sg()(),Sl(64,"table")(65,"thead")(66,"tr")(67,"th"),Jx(68,"Propriedade"),sg(),Sl(69,"th"),Jx(70,"Descri\xE7\xE3o"),sg(),Sl(71,"th"),Jx(72,"Valor Padr\xE3o"),sg()()(),Sl(73,"tbody")(74,"tr")(75,"td")(76,"code"),Jx(77,"--font-family"),sg()(),Sl(78,"td"),Jx(79,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--font-family-theme)"),sg()()(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--font-weight"),sg()(),Sl(87,"td"),Jx(88,"Peso da fonte"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--font-weight-bold)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--padding-header"),sg()(),Sl(96,"td"),Jx(97,"Espa\xE7amento do header"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--spacing-md)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--padding-body"),sg()(),Sl(105,"td"),Jx(106,"Espa\xE7amento do conte\xFAdo"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--line-height-none)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--padding-footer"),sg()(),Sl(114,"td"),Jx(115,"Espa\xE7amento do footer"),sg(),Sl(116,"td")(117,"code"),Jx(118,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),sg()()(),Sl(119,"tr")(120,"td")(121,"strong"),Jx(122,"Default Values"),sg()(),Wl(123,"td")(124,"td"),sg(),Sl(125,"tr")(126,"td")(127,"code"),Jx(128,"--color-overlay"),sg()(),Sl(129,"td"),Jx(130,"Cor do overlay"),sg(),Sl(131,"td")(132,"code"),Jx(133,"var(--color-neutral-dark-80)"),sg()()(),Sl(134,"tr")(135,"td")(136,"code"),Jx(137,"--opacity-overlay"),sg()(),Sl(138,"td"),Jx(139,"Cor da opacidade do overlay"),sg(),Sl(140,"td")(141,"code"),Jx(142,"0.7"),sg()()(),Sl(143,"tr")(144,"td")(145,"code"),Jx(146,"--background-color"),sg()(),Sl(147,"td"),Jx(148,"Cor de background"),sg(),Sl(149,"td")(150,"code"),Jx(151,"var(--color-neutral-light-00)"),sg()()(),Sl(152,"tr")(153,"td")(154,"code"),Jx(155,"--border-color"),sg()(),Sl(156,"td"),Jx(157,"Cor da borda"),sg(),Sl(158,"td")(159,"code"),Jx(160,"var(--color-neutral-light-20)"),sg()()(),Sl(161,"tr")(162,"td")(163,"code"),Jx(164,"--color-title"),sg()(),Sl(165,"td"),Jx(166,"Cor do titulo do header"),sg(),Sl(167,"td")(168,"code"),Jx(169,"var(--color-neutral-dark-95)"),sg()()(),Sl(170,"tr")(171,"td")(172,"code"),Jx(173,"--border-radius"),sg()(),Sl(174,"td"),Jx(175,"Radius da borda"),sg(),Sl(176,"td")(177,"code"),Jx(178,"var(--border-radius-md) 0 0 var(--border-radius-md)"),sg()()(),Sl(179,"tr")(180,"td")(181,"code"),Jx(182,"--transition-duration"),sg()(),Sl(183,"td"),Jx(184,"Dura\xE7\xE3o da transi\xE7\xE3o"),sg(),Sl(185,"td")(186,"code"),Jx(187,"var(--duration-extra-fast)"),sg()()(),Sl(188,"tr")(189,"td")(190,"code"),Jx(191,"--transition-timing"),sg()(),Sl(192,"td"),Jx(193,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),sg(),Sl(194,"td")(195,"code"),Jx(196,"var(--duration-extra-slow) var(--timing-standart)"),sg()()(),Sl(197,"tr")(198,"td")(199,"code"),Jx(200,"--page-slide-width-sm"),sg()(),Sl(201,"td"),Jx(202,"Tamanho da largura do componente no tamanho "),Sl(203,"code"),Jx(204,"small"),sg()(),Sl(205,"td")(206,"code"),Jx(207,"40%"),sg()()(),Sl(208,"tr")(209,"td")(210,"code"),Jx(211,"--page-slide-width-md"),sg()(),Sl(212,"td"),Jx(213,"Tamanho da largura do componente no tamanho "),Sl(214,"code"),Jx(215,"medium"),sg()(),Sl(216,"td")(217,"code"),Jx(218,"50%"),sg()()(),Sl(219,"tr")(220,"td")(221,"code"),Jx(222,"--page-slide-width-lg"),sg()(),Sl(223,"td"),Jx(224,"Tamanho da largura do componente no tamanho "),Sl(225,"code"),Jx(226,"large"),sg()(),Sl(227,"td")(228,"code"),Jx(229,"60%"),sg()()(),Sl(230,"tr")(231,"td")(232,"code"),Jx(233,"--page-slide-width-xl"),sg()(),Sl(234,"td"),Jx(235,"Tamanho da largura do componente no tamanho "),Sl(236,"code"),Jx(237,"extra large"),sg()(),Sl(238,"td")(239,"code"),Jx(240,"70%"),sg()()(),Sl(241,"tr")(242,"td")(243,"code"),Jx(244,"--page-slide-min-width-auto"),sg()(),Sl(245,"td"),Jx(246,"Tamanho da largura m\xEDnima do componente no tamanho "),Sl(247,"code"),Jx(248,"auto"),sg()(),Sl(249,"td")(250,"code"),Jx(251,"40%"),sg()()(),Sl(252,"tr")(253,"td")(254,"code"),Jx(255,"--page-slide-max-width-auto"),sg()(),Sl(256,"td"),Jx(257,"Tamanho da largura m\xE1xima do componente no tamanho "),Sl(258,"code"),Jx(259,"auto"),sg()(),Sl(260,"td")(261,"code"),Jx(262,"90%"),sg()()()()()(),Sl(263,"div",9)(264,"h4",10),Jx(265,"Seletor"),sg(),Sl(266,"pre",11),Jx(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),sg()(),Sl(268,"h4",12),Jx(269,"Propriedades"),sg(),Sl(270,"table",13)(271,"tr",14)(272,"th",15),Jx(273,"Nome"),sg(),Sl(274,"th",15),Jx(275,"Tipo"),sg(),Sl(276,"th",15),Jx(277,"Padr\xE3o"),sg(),Sl(278,"th",15),Jx(279,"Descri\xE7\xE3o"),sg()(),Sl(280,"tr",16)(281,"td",17)(282,"div",18)(283,"span",19),Jx(284," p-click-out"),Wl(285,"br"),sg()()(),Sl(286,"td",20)(287,"code",21),Jx(288,"boolean"),sg()(),Sl(289,"td",22)(290,"p")(291,"code"),Jx(292,"false"),sg()()(),Sl(293,"td",23)(294,"em")(295,"strong"),Jx(296,"(opcional)"),sg()(),Sl(297,"p"),Jx(298,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),sg()()(),Sl(299,"tr",16)(300,"td",17)(301,"div",24)(302,"span",25),Jx(303," (p-close)"),Wl(304,"br"),sg()()(),Sl(305,"td",20)(306,"code",26),Jx(307,"EventEmitter"),sg()(),Sl(308,"td",22),Jx(309,"-"),sg(),Sl(310,"td",23)(311,"em")(312,"strong"),Jx(313,"(opcional)"),sg()(),Sl(314,"p"),Jx(315,"Evento executado ao fechar o page slide."),sg()()(),Sl(316,"tr",16)(317,"td",17)(318,"div",18)(319,"span",19),Jx(320," p-components-size"),Wl(321,"br"),sg()()(),Sl(322,"td",20)(323,"code",27),Jx(324,"string"),sg()(),Sl(325,"td",22)(326,"p")(327,"code"),Jx(328,"medium"),sg()()(),Sl(329,"td",23)(330,"em")(331,"strong"),Jx(332,"(opcional)"),sg()(),Sl(333,"p"),Jx(334,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(335,"ul")(336,"li")(337,"code"),Jx(338,"small"),sg(),Jx(339,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(340,"li")(341,"code"),Jx(342,"medium"),sg(),Jx(343,": aplica a medida medium de cada componente."),sg()(),Sl(344,"blockquote")(345,"p"),Jx(346,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(347,"code"),Jx(348,"medium"),sg(),Jx(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(350,"a",28),Jx(351,"po-theme"),sg(),Jx(352,"."),sg()()()(),Sl(353,"tr",16)(354,"td",17)(355,"div",18)(356,"span",19),Jx(357," p-flexible-width"),Wl(358,"br"),sg()()(),Sl(359,"td",20)(360,"code",21),Jx(361,"boolean"),sg()(),Sl(362,"td",22)(363,"p")(364,"code"),Jx(365,"false"),sg()()(),Sl(366,"td",23)(367,"em")(368,"strong"),Jx(369,"(opcional)"),sg()(),Sl(370,"p"),Jx(371,"Permite a expans\xE3o din\xE2mica da largura do "),Sl(372,"code"),Jx(373,"po-page-slide"),sg(),Jx(374," quando "),Sl(375,"code"),Jx(376,"p-size"),sg(),Jx(377," for "),Sl(378,"code"),Jx(379,"auto"),sg(),Jx(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Sl(381,"code"),Jx(382,"po-table"),sg(),Jx(383," dentro do "),Sl(384,"code"),Jx(385,"po-page-slide"),sg()()()(),Sl(386,"tr",16)(387,"td",17)(388,"div",18)(389,"span",19),Jx(390," p-hide-close"),Wl(391,"br"),sg()()(),Sl(392,"td",20)(393,"code",21),Jx(394,"boolean"),sg()(),Sl(395,"td",22)(396,"p")(397,"code"),Jx(398,"false"),sg()()(),Sl(399,"td",23)(400,"em")(401,"strong"),Jx(402,"(opcional)"),sg()(),Sl(403,"p"),Jx(404,"Oculta o bot\xE3o de encerramento da p\xE1gina."),sg(),Sl(405,"p"),Jx(406,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),Sl(407,"code"),Jx(408,"p-click-out"),sg(),Jx(409," estiver habilitada."),sg()()(),Sl(410,"tr",16)(411,"td",17)(412,"div",18)(413,"span",19),Jx(414," p-size"),Wl(415,"br"),sg()()(),Sl(416,"td",20)(417,"code",27),Jx(418,"string"),sg()(),Sl(419,"td",22)(420,"p")(421,"code"),Jx(422,"md"),sg()()(),Sl(423,"td",23)(424,"em")(425,"strong"),Jx(426,"(opcional)"),sg()(),Sl(427,"p"),Jx(428,"Define o tamanho da p\xE1gina."),sg(),Sl(429,"p"),Jx(430,"Valores v\xE1lidos:"),sg(),Sl(431,"ul")(432,"li")(433,"code"),Jx(434,"sm"),sg(),Jx(435," (pequeno)"),sg(),Sl(436,"li")(437,"code"),Jx(438,"md"),sg(),Jx(439," (m\xE9dio)"),sg(),Sl(440,"li")(441,"code"),Jx(442,"lg"),sg(),Jx(443," (grande)"),sg(),Sl(444,"li")(445,"code"),Jx(446,"xl"),sg(),Jx(447," (extra-grande)"),sg(),Sl(448,"li")(449,"code"),Jx(450,"auto"),sg(),Jx(451," (autom\xE1tico)"),sg()(),Sl(452,"blockquote")(453,"p"),Jx(454,"Todas as op\xE7\xF5es de tamanho, exceto "),Sl(455,"code"),Jx(456,"auto"),sg(),Jx(457,", possuem uma largura m\xE1xima de "),Sl(458,"strong"),Jx(459,"768px"),sg(),Jx(460,"."),sg()()()(),Sl(461,"tr",16)(462,"td",17)(463,"div",18)(464,"span",19),Jx(465," p-subtitle"),Wl(466,"br"),sg()()(),Sl(467,"td",20)(468,"code",27),Jx(469,"string"),sg()(),Sl(470,"td",22),Jx(471,"-"),sg(),Sl(472,"td",23)(473,"em")(474,"strong"),Jx(475,"(opcional)"),sg()(),Sl(476,"p"),Jx(477,"Subt\xEDtulo da p\xE1gina."),sg()()(),Sl(478,"tr",16)(479,"td",17)(480,"div",18)(481,"span",19),Jx(482," p-title"),Wl(483,"br"),sg()()(),Sl(484,"td",20)(485,"code",27),Jx(486,"string"),sg()(),Sl(487,"td",22),Jx(488,"-"),sg(),Sl(489,"td",23)(490,"p"),Jx(491,"T\xEDtulo da p\xE1gina."),sg()()()(),Sl(492,"h3",12),Jx(493,"M\xE9todos"),sg(),Sl(494,"table",29)(495,"tr",16)(496,"th",30)(497,"div",18)(498,"h4")(499,"span",19),Jx(500," open "),sg()()()()(),Sl(501,"tr",23)(502,"td",23)(503,"p"),Jx(504,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),sg(),Sl(505,"p"),Jx(506,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Sl(507,"code"),Jx(508,"ViewChild"),sg(),Jx(509," da seguinte forma:"),sg(),Sl(510,"pre")(511,"code",31),Jx(512,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),sg()()()()(),Wl(513,"br"),Sl(514,"table",29)(515,"tr",16)(516,"th",30)(517,"div",18)(518,"h4")(519,"span",19),Jx(520," close "),sg()()()()(),Sl(521,"tr",23)(522,"td",23)(523,"p"),Jx(524,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),sg(),Sl(525,"p"),Jx(526,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Sl(527,"code"),Jx(528,"ViewChild"),sg(),Jx(529," da seguinte forma:"),sg(),Sl(530,"pre")(531,"code",31),Jx(532,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),sg()()()()(),Wl(533,"br"),sg());},dependencies:[Ga],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-page-slide-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),sg()()()),l&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,pe,de,se,ce],encapsulation:2})}return o})();var Me=[{path:"",component:ue}],ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[pL.forChild(Me),pL]})}return o})();var tt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,ge]})}return o})();export{tt as DocPoPageSlideModule};