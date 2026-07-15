import {f as fe,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,b0 as Qt,bJ as Vue,aB as Sx,T as Tl,C as iN,M as sg,a1 as ht,an as AO,aH as Ga,b8 as Wme,b9 as jme,L as Gl,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b1 as mv,c4 as C3,b4 as O3,c8 as Dde,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,av as Yl,aw as uo,ax as fo,bH as M3,dp as Oue,a3 as lNe,aD as Ky,aE as Xy,aT as sN}from'./main-P7IRR5MZ.js';var ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:false,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Sx();Tl(0,"po-page-slide",1,0),iN(2," Hello World! "),sg(),Tl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Ky(d);let a=Fx(1);return Xy(a.open())}),sg()();}},dependencies:[Qt,Vue],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Page Slide Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-slide-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,he,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ae],encapsulation:2,changeDetection:1})}return o})();var Ee=["poPageSlide"],re=(()=>{class o{poPageSlide;componentsSize;hideClose=false;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore();}openPage(){this.poPageSlide.open();}restore(){this.componentsSize="medium",this.hideClose=false,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[];}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&Yl(Ee,5),l&2){let d;uo(d=fo())&&(n.poPageSlide=d.first);}},standalone:false,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=Sx();Tl(0,"po-page-slide",2,0),iN(2),sg(),Tl(3,"po-button",3),ht("p-click",function(){return n.openPage()}),sg(),Gl(4,"po-divider"),Tl(5,"form",null,1)(7,"po-input",4),ww("ngModelChange",function(a){return Ky(d),sN(n.title,a)||(n.title=a),Xy(a)}),sg(),r0(),Tl(8,"po-input",5),ww("ngModelChange",function(a){return Ky(d),sN(n.subtitle,a)||(n.subtitle=a),Xy(a)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(a){return Ky(d),sN(n.content,a)||(n.content=a),Xy(a)}),sg(),r0(),Tl(10,"po-checkbox-group",7),ww("ngModelChange",function(a){return Ky(d),sN(n.properties,a)||(n.properties=a),Xy(a)}),sg(),r0(),Tl(11,"po-radio-group",8),ww("ngModelChange",function(a){return Ky(d),sN(n.size,a)||(n.size=a),Xy(a)}),sg(),r0(),Tl(12,"po-radio-group",9),ww("ngModelChange",function(a){return Ky(d),sN(n.componentsSize,a)||(n.componentsSize=a),Xy(a)}),sg(),r0(),Tl(13,"div",10)(14,"po-button",11),ht("p-click",function(){return n.restore()}),sg()()();}if(l&2){let d=Fx(6);nw("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),Vp(2),fg(" ",n.content,`
`),Vp(),nw("p-disabled",d.form.invalid),Vp(4),Ew("ngModel",n.title),o0(),Vp(),Ew("ngModel",n.subtitle),o0(),Vp(),Ew("ngModel",n.content),o0(),Vp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),o0(),Vp(),Ew("ngModel",n.size),nw("p-options",n.sizeOptions),o0(),Vp(),Ew("ngModel",n.componentsSize),nw("p-options",n.componentsSizeOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Dde,Vue],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Page Slide Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-slide
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-slide-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,re],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{router=f(wn);bluetooth=true;locked=false;microphone=true;notification=true;favorited=false;localization=true;openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"]);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:false,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=Sx();Tl(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),ww("ngModelChange",function(a){return Ky(d),sN(n.bluetooth,a)||(n.bluetooth=a),Xy(a)}),sg(),r0(),Tl(4,"po-switch",4),ww("ngModelChange",function(a){return Ky(d),sN(n.locked,a)||(n.locked=a),Xy(a)}),sg(),r0(),sg(),Tl(5,"div",2)(6,"po-switch",5),ww("ngModelChange",function(a){return Ky(d),sN(n.microphone,a)||(n.microphone=a),Xy(a)}),sg(),r0(),Tl(7,"po-switch",6),ww("ngModelChange",function(a){return Ky(d),sN(n.notification,a)||(n.notification=a),Xy(a)}),sg(),r0(),sg(),Tl(8,"div",2)(9,"po-switch",7),ww("ngModelChange",function(a){return Ky(d),sN(n.localization,a)||(n.localization=a),Xy(a)}),sg(),r0(),Tl(10,"po-switch",8),ww("ngModelChange",function(a){return Ky(d),sN(n.favorited,a)||(n.favorited=a),Xy(a)}),sg(),r0(),sg(),Gl(11,"po-divider"),Tl(12,"h2",9),iN(13,"About Page Slide"),sg(),Tl(14,"section",10)(15,"h3",11),iN(16,"Usage"),sg(),Tl(17,"ul",12)(18,"li"),iN(19,"To reveal additional navigation controls"),sg(),Tl(20,"li"),iN(21,"In TV or mobile space since controls and/or space is limited"),sg(),Tl(22,"li"),iN(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),sg(),Tl(24,"li"),iN(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),sg()()(),Tl(26,"section",10)(27,"h3",11),iN(28,"Challenges"),sg(),Tl(29,"ul",12)(30,"li"),iN(31,"Discoverability"),sg(),Tl(32,"li"),iN(33,"Losing context with the rest of the page"),sg(),Tl(34,"li"),iN(35,"Make the disruption work for you"),sg()()(),Tl(36,"section",10)(37,"h3",11),iN(38,"Recommendations"),sg(),Tl(39,"ul",12)(40,"li"),iN(41,"Use it sparingly only for major context switches"),sg(),Tl(42,"li"),iN(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),sg(),Tl(44,"li"),iN(45,"Make the activation/deactivation dead simple"),sg()()(),Tl(46,"p"),iN(47," For more information visit "),Tl(48,"a",13),iN(49,"Designing Web Interfaces: Page Slide"),sg()(),Tl(50,"po-page-slide-footer")(51,"po-button",14),ht("p-click",function(){return n.openPageSlideFooterDocumentation()}),sg()()(),Tl(52,"div",15)(53,"po-button",16),ht("p-click",function(){Ky(d);let a=Fx(1);return Xy(a.open())}),sg()();}l&2&&(Vp(3),Ew("ngModel",n.bluetooth),o0(),Vp(),Ew("ngModel",n.locked),o0(),Vp(2),Ew("ngModel",n.microphone),o0(),Vp(),Ew("ngModel",n.notification),o0(),Vp(2),Ew("ngModel",n.localization),o0(),Vp(),Ew("ngModel",n.favorited),o0());},dependencies:[nY,Sk,Qt,mv,M3,Vue,Oue],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Page Slide - Configuration"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-slide-configuration"),sg(),Gl(23,"hr")),l&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,we,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:false,decls:534,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoPageModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Tl(7,"code"),iN(8,"po-page-default"),sg(),iN(9,", "),Tl(10,"code"),iN(11,"po-page-detail"),sg(),iN(12,`,
`),Tl(13,"code"),iN(14,"po-page-edit"),sg(),iN(15,", "),Tl(16,"code"),iN(17,"po-page-list"),sg(),iN(18," e "),Tl(19,"code"),iN(20,"po-page-slide"),sg(),iN(21,"."),sg()(),Tl(22,"h3",3),iN(23,"Componente"),sg(),Tl(24,"h4",4)(25,"code",5),iN(26,"PoPageSlideComponent"),sg()(),Tl(27,"div",2)(28,"p"),iN(29,"O componente "),Tl(30,"code"),iN(31,"po-page-slide"),sg(),iN(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),sg(),Tl(33,"p"),iN(34,"Este componente \xE9 ativado a partir do m\xE9todo "),Tl(35,"code"),iN(36,"#open()"),sg(),iN(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Tl(38,"code"),iN(39,"#close()"),sg(),iN(40,"."),sg(),Tl(41,"p"),iN(42," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),Tl(43,"a",6),iN(44,"Grid System"),sg(),iN(45,"."),sg(),Tl(46,"p"),iN(47,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),Tl(48,"a",7)(49,"code"),iN(50,"PoPageSlideFooter"),sg()(),iN(51," para customiza\xE7\xE3o do template."),sg(),Tl(52,"ul")(53,"li")(54,"h4"),iN(55,"Tokens customiz\xE1veis"),sg()()(),Tl(56,"p"),iN(57,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(58,"blockquote")(59,"p"),iN(60,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(61,"a",8),iN(62,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(63,"."),sg()(),Tl(64,"table")(65,"thead")(66,"tr")(67,"th"),iN(68,"Propriedade"),sg(),Tl(69,"th"),iN(70,"Descri\xE7\xE3o"),sg(),Tl(71,"th"),iN(72,"Valor Padr\xE3o"),sg()()(),Tl(73,"tbody")(74,"tr")(75,"td")(76,"code"),iN(77,"--font-family"),sg()(),Tl(78,"td"),iN(79,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(80,"td")(81,"code"),iN(82,"var(--font-family-theme)"),sg()()(),Tl(83,"tr")(84,"td")(85,"code"),iN(86,"--font-weight"),sg()(),Tl(87,"td"),iN(88,"Peso da fonte"),sg(),Tl(89,"td")(90,"code"),iN(91,"var(--font-weight-bold)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),iN(95,"--padding-header"),sg()(),Tl(96,"td"),iN(97,"Espa\xE7amento do header"),sg(),Tl(98,"td")(99,"code"),iN(100,"var(--spacing-md)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),iN(104,"--padding-body"),sg()(),Tl(105,"td"),iN(106,"Espa\xE7amento do conte\xFAdo"),sg(),Tl(107,"td")(108,"code"),iN(109,"var(--line-height-none)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),iN(113,"--padding-footer"),sg()(),Tl(114,"td"),iN(115,"Espa\xE7amento do footer"),sg(),Tl(116,"td")(117,"code"),iN(118,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),sg()()(),Tl(119,"tr")(120,"td")(121,"strong"),iN(122,"Default Values"),sg()(),Gl(123,"td")(124,"td"),sg(),Tl(125,"tr")(126,"td")(127,"code"),iN(128,"--color-overlay"),sg()(),Tl(129,"td"),iN(130,"Cor do overlay"),sg(),Tl(131,"td")(132,"code"),iN(133,"var(--color-neutral-dark-80)"),sg()()(),Tl(134,"tr")(135,"td")(136,"code"),iN(137,"--opacity-overlay"),sg()(),Tl(138,"td"),iN(139,"Cor da opacidade do overlay"),sg(),Tl(140,"td")(141,"code"),iN(142,"0.7"),sg()()(),Tl(143,"tr")(144,"td")(145,"code"),iN(146,"--background-color"),sg()(),Tl(147,"td"),iN(148,"Cor de background"),sg(),Tl(149,"td")(150,"code"),iN(151,"var(--color-neutral-light-00)"),sg()()(),Tl(152,"tr")(153,"td")(154,"code"),iN(155,"--border-color"),sg()(),Tl(156,"td"),iN(157,"Cor da borda"),sg(),Tl(158,"td")(159,"code"),iN(160,"var(--color-neutral-light-20)"),sg()()(),Tl(161,"tr")(162,"td")(163,"code"),iN(164,"--color-title"),sg()(),Tl(165,"td"),iN(166,"Cor do titulo do header"),sg(),Tl(167,"td")(168,"code"),iN(169,"var(--color-neutral-dark-95)"),sg()()(),Tl(170,"tr")(171,"td")(172,"code"),iN(173,"--border-radius"),sg()(),Tl(174,"td"),iN(175,"Radius da borda"),sg(),Tl(176,"td")(177,"code"),iN(178,"var(--border-radius-md) 0 0 var(--border-radius-md)"),sg()()(),Tl(179,"tr")(180,"td")(181,"code"),iN(182,"--transition-duration"),sg()(),Tl(183,"td"),iN(184,"Dura\xE7\xE3o da transi\xE7\xE3o"),sg(),Tl(185,"td")(186,"code"),iN(187,"var(--duration-extra-fast)"),sg()()(),Tl(188,"tr")(189,"td")(190,"code"),iN(191,"--transition-timing"),sg()(),Tl(192,"td"),iN(193,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),sg(),Tl(194,"td")(195,"code"),iN(196,"var(--duration-extra-slow) var(--timing-standart)"),sg()()(),Tl(197,"tr")(198,"td")(199,"code"),iN(200,"--page-slide-width-sm"),sg()(),Tl(201,"td"),iN(202,"Tamanho da largura do componente no tamanho "),Tl(203,"code"),iN(204,"small"),sg()(),Tl(205,"td")(206,"code"),iN(207,"40%"),sg()()(),Tl(208,"tr")(209,"td")(210,"code"),iN(211,"--page-slide-width-md"),sg()(),Tl(212,"td"),iN(213,"Tamanho da largura do componente no tamanho "),Tl(214,"code"),iN(215,"medium"),sg()(),Tl(216,"td")(217,"code"),iN(218,"50%"),sg()()(),Tl(219,"tr")(220,"td")(221,"code"),iN(222,"--page-slide-width-lg"),sg()(),Tl(223,"td"),iN(224,"Tamanho da largura do componente no tamanho "),Tl(225,"code"),iN(226,"large"),sg()(),Tl(227,"td")(228,"code"),iN(229,"60%"),sg()()(),Tl(230,"tr")(231,"td")(232,"code"),iN(233,"--page-slide-width-xl"),sg()(),Tl(234,"td"),iN(235,"Tamanho da largura do componente no tamanho "),Tl(236,"code"),iN(237,"extra large"),sg()(),Tl(238,"td")(239,"code"),iN(240,"70%"),sg()()(),Tl(241,"tr")(242,"td")(243,"code"),iN(244,"--page-slide-min-width-auto"),sg()(),Tl(245,"td"),iN(246,"Tamanho da largura m\xEDnima do componente no tamanho "),Tl(247,"code"),iN(248,"auto"),sg()(),Tl(249,"td")(250,"code"),iN(251,"40%"),sg()()(),Tl(252,"tr")(253,"td")(254,"code"),iN(255,"--page-slide-max-width-auto"),sg()(),Tl(256,"td"),iN(257,"Tamanho da largura m\xE1xima do componente no tamanho "),Tl(258,"code"),iN(259,"auto"),sg()(),Tl(260,"td")(261,"code"),iN(262,"90%"),sg()()()()()(),Tl(263,"div",9)(264,"h4",10),iN(265,"Seletor"),sg(),Tl(266,"pre",11),iN(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),sg()(),Tl(268,"h4",12),iN(269,"Propriedades"),sg(),Tl(270,"table",13)(271,"tr",14)(272,"th",15),iN(273,"Nome"),sg(),Tl(274,"th",15),iN(275,"Tipo"),sg(),Tl(276,"th",15),iN(277,"Padr\xE3o"),sg(),Tl(278,"th",15),iN(279,"Descri\xE7\xE3o"),sg()(),Tl(280,"tr",16)(281,"td",17)(282,"div",18)(283,"span",19),iN(284," p-click-out"),Gl(285,"br"),sg()()(),Tl(286,"td",20)(287,"code",21),iN(288,"boolean"),sg()(),Tl(289,"td",22)(290,"p")(291,"code"),iN(292,"false"),sg()()(),Tl(293,"td",23)(294,"em")(295,"strong"),iN(296,"(opcional)"),sg()(),Tl(297,"p"),iN(298,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),sg()()(),Tl(299,"tr",16)(300,"td",17)(301,"div",24)(302,"span",25),iN(303," (p-close)"),Gl(304,"br"),sg()()(),Tl(305,"td",20)(306,"code",26),iN(307,"EventEmitter"),sg()(),Tl(308,"td",22),iN(309,"-"),sg(),Tl(310,"td",23)(311,"em")(312,"strong"),iN(313,"(opcional)"),sg()(),Tl(314,"p"),iN(315,"Evento executado ao fechar o page slide."),sg()()(),Tl(316,"tr",16)(317,"td",17)(318,"div",18)(319,"span",19),iN(320," p-components-size"),Gl(321,"br"),sg()()(),Tl(322,"td",20)(323,"code",27),iN(324,"string"),sg()(),Tl(325,"td",22)(326,"p")(327,"code"),iN(328,"medium"),sg()()(),Tl(329,"td",23)(330,"em")(331,"strong"),iN(332,"(opcional)"),sg()(),Tl(333,"p"),iN(334,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(335,"ul")(336,"li")(337,"code"),iN(338,"small"),sg(),iN(339,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(340,"li")(341,"code"),iN(342,"medium"),sg(),iN(343,": aplica a medida medium de cada componente."),sg()(),Tl(344,"blockquote")(345,"p"),iN(346,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(347,"code"),iN(348,"medium"),sg(),iN(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(350,"a",28),iN(351,"po-theme"),sg(),iN(352,"."),sg()()()(),Tl(353,"tr",16)(354,"td",17)(355,"div",18)(356,"span",19),iN(357," p-flexible-width"),Gl(358,"br"),sg()()(),Tl(359,"td",20)(360,"code",21),iN(361,"boolean"),sg()(),Tl(362,"td",22)(363,"p")(364,"code"),iN(365,"false"),sg()()(),Tl(366,"td",23)(367,"em")(368,"strong"),iN(369,"(opcional)"),sg()(),Tl(370,"p"),iN(371,"Permite a expans\xE3o din\xE2mica da largura do "),Tl(372,"code"),iN(373,"po-page-slide"),sg(),iN(374," quando "),Tl(375,"code"),iN(376,"p-size"),sg(),iN(377," for "),Tl(378,"code"),iN(379,"auto"),sg(),iN(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Tl(381,"code"),iN(382,"po-table"),sg(),iN(383," dentro do "),Tl(384,"code"),iN(385,"po-page-slide"),sg()()()(),Tl(386,"tr",16)(387,"td",17)(388,"div",18)(389,"span",19),iN(390," p-hide-close"),Gl(391,"br"),sg()()(),Tl(392,"td",20)(393,"code",21),iN(394,"boolean"),sg()(),Tl(395,"td",22)(396,"p")(397,"code"),iN(398,"false"),sg()()(),Tl(399,"td",23)(400,"em")(401,"strong"),iN(402,"(opcional)"),sg()(),Tl(403,"p"),iN(404,"Oculta o bot\xE3o de encerramento da p\xE1gina."),sg(),Tl(405,"p"),iN(406,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),Tl(407,"code"),iN(408,"p-click-out"),sg(),iN(409," estiver habilitada."),sg()()(),Tl(410,"tr",16)(411,"td",17)(412,"div",18)(413,"span",19),iN(414," p-size"),Gl(415,"br"),sg()()(),Tl(416,"td",20)(417,"code",27),iN(418,"string"),sg()(),Tl(419,"td",22)(420,"p")(421,"code"),iN(422,"md"),sg()()(),Tl(423,"td",23)(424,"em")(425,"strong"),iN(426,"(opcional)"),sg()(),Tl(427,"p"),iN(428,"Define o tamanho da p\xE1gina."),sg(),Tl(429,"p"),iN(430,"Valores v\xE1lidos:"),sg(),Tl(431,"ul")(432,"li")(433,"code"),iN(434,"sm"),sg(),iN(435," (pequeno)"),sg(),Tl(436,"li")(437,"code"),iN(438,"md"),sg(),iN(439," (m\xE9dio)"),sg(),Tl(440,"li")(441,"code"),iN(442,"lg"),sg(),iN(443," (grande)"),sg(),Tl(444,"li")(445,"code"),iN(446,"xl"),sg(),iN(447," (extra-grande)"),sg(),Tl(448,"li")(449,"code"),iN(450,"auto"),sg(),iN(451," (autom\xE1tico)"),sg()(),Tl(452,"blockquote")(453,"p"),iN(454,"Todas as op\xE7\xF5es de tamanho, exceto "),Tl(455,"code"),iN(456,"auto"),sg(),iN(457,", possuem uma largura m\xE1xima de "),Tl(458,"strong"),iN(459,"768px"),sg(),iN(460,"."),sg()()()(),Tl(461,"tr",16)(462,"td",17)(463,"div",18)(464,"span",19),iN(465," p-subtitle"),Gl(466,"br"),sg()()(),Tl(467,"td",20)(468,"code",27),iN(469,"string"),sg()(),Tl(470,"td",22),iN(471,"-"),sg(),Tl(472,"td",23)(473,"em")(474,"strong"),iN(475,"(opcional)"),sg()(),Tl(476,"p"),iN(477,"Subt\xEDtulo da p\xE1gina."),sg()()(),Tl(478,"tr",16)(479,"td",17)(480,"div",18)(481,"span",19),iN(482," p-title"),Gl(483,"br"),sg()()(),Tl(484,"td",20)(485,"code",27),iN(486,"string"),sg()(),Tl(487,"td",22),iN(488,"-"),sg(),Tl(489,"td",23)(490,"p"),iN(491,"T\xEDtulo da p\xE1gina."),sg()()()(),Tl(492,"h3",12),iN(493,"M\xE9todos"),sg(),Tl(494,"table",29)(495,"tr",16)(496,"th",30)(497,"div",18)(498,"h4")(499,"span",19),iN(500," open "),sg()()()()(),Tl(501,"tr",23)(502,"td",23)(503,"p"),iN(504,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),sg(),Tl(505,"p"),iN(506,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Tl(507,"code"),iN(508,"ViewChild"),sg(),iN(509," da seguinte forma:"),sg(),Tl(510,"pre")(511,"code",31),iN(512,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),sg()()()()(),Gl(513,"br"),Tl(514,"table",29)(515,"tr",16)(516,"th",30)(517,"div",18)(518,"h4")(519,"span",19),iN(520," close "),sg()()()()(),Tl(521,"tr",23)(522,"td",23)(523,"p"),iN(524,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),sg(),Tl(525,"p"),iN(526,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Tl(527,"code"),iN(528,"ViewChild"),sg(),iN(529," da seguinte forma:"),sg(),Tl(530,"pre")(531,"code",31),iN(532,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),sg()()()()(),Gl(533,"br"),sg());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-page-slide-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),sg()()()),l&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[lNe,Wme,jme,pe,de,se,ce],encapsulation:2,changeDetection:1})}return o})();var Me=[{path:"",component:ue}],ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[DL.forChild(Me),DL]})}return o})();var tt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ar,ge]})}return o})();export{tt as DocPoPageSlideModule};