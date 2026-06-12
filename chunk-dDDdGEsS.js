import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,a$ as Qt,bN as Que,aB as gx,Q as Cl,z as qx,T as og,a1 as dt,an as yO,aH as Zr,b7 as ofe,b8 as lfe,R as Hl,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,av as zl,aw as uo,ax as fo,bL as H3,dv as jue,a3 as SNe,aD as Jy,aE as e_,aT as Zx}from'./main-OS7VVRJY.js';var ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:false,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-page-slide",1,0),qx(2," Hello World! "),og(),Cl(3,"div",2)(4,"po-button",3),dt("p-click",function(){Jy(d);let a=Sx(1);return e_(a.open())}),og()();}},dependencies:[Qt,Que],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Slide Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-slide-basic"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,he,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ae],encapsulation:2})}return o})();var Ee=["poPageSlide"],re=(()=>{class o{poPageSlide;componentsSize;hideClose=false;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore();}openPage(){this.poPageSlide.open();}restore(){this.componentsSize="medium",this.hideClose=false,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[];}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&zl(Ee,5),l&2){let d;uo(d=fo())&&(n.poPageSlide=d.first);}},standalone:false,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-page-slide",2,0),qx(2),og(),Cl(3,"po-button",3),dt("p-click",function(){return n.openPage()}),og(),Hl(4,"po-divider"),Cl(5,"form",null,1)(7,"po-input",4),gw("ngModelChange",function(a){return Jy(d),Zx(n.title,a)||(n.title=a),e_(a)}),og(),Z0(),Cl(8,"po-input",5),gw("ngModelChange",function(a){return Jy(d),Zx(n.subtitle,a)||(n.subtitle=a),e_(a)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(a){return Jy(d),Zx(n.content,a)||(n.content=a),e_(a)}),og(),Z0(),Cl(10,"po-checkbox-group",7),gw("ngModelChange",function(a){return Jy(d),Zx(n.properties,a)||(n.properties=a),e_(a)}),og(),Z0(),Cl(11,"po-radio-group",8),gw("ngModelChange",function(a){return Jy(d),Zx(n.size,a)||(n.size=a),e_(a)}),og(),Z0(),Cl(12,"po-radio-group",9),gw("ngModelChange",function(a){return Jy(d),Zx(n.componentsSize,a)||(n.componentsSize=a),e_(a)}),og(),Z0(),Cl(13,"div",10)(14,"po-button",11),dt("p-click",function(){return n.restore()}),og()()();}if(l&2){let d=Sx(6);ZE("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),Lp(2),dg(" ",n.content,`
`),Lp(),ZE("p-disabled",d.form.invalid),Lp(4),pw("ngModel",n.title),X0(),Lp(),pw("ngModel",n.subtitle),X0(),Lp(),pw("ngModel",n.content),X0(),Lp(),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0(),Lp(),pw("ngModel",n.size),ZE("p-options",n.sizeOptions),X0(),Lp(),pw("ngModel",n.componentsSize),ZE("p-options",n.componentsSizeOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,Que],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Slide Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-slide
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-slide-labs"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Pe,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return o})();var me=(()=>{class o{router=f(Cn);bluetooth=true;locked=false;microphone=true;notification=true;favorited=false;localization=true;openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"]);}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:false,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=gx();Cl(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),gw("ngModelChange",function(a){return Jy(d),Zx(n.bluetooth,a)||(n.bluetooth=a),e_(a)}),og(),Z0(),Cl(4,"po-switch",4),gw("ngModelChange",function(a){return Jy(d),Zx(n.locked,a)||(n.locked=a),e_(a)}),og(),Z0(),og(),Cl(5,"div",2)(6,"po-switch",5),gw("ngModelChange",function(a){return Jy(d),Zx(n.microphone,a)||(n.microphone=a),e_(a)}),og(),Z0(),Cl(7,"po-switch",6),gw("ngModelChange",function(a){return Jy(d),Zx(n.notification,a)||(n.notification=a),e_(a)}),og(),Z0(),og(),Cl(8,"div",2)(9,"po-switch",7),gw("ngModelChange",function(a){return Jy(d),Zx(n.localization,a)||(n.localization=a),e_(a)}),og(),Z0(),Cl(10,"po-switch",8),gw("ngModelChange",function(a){return Jy(d),Zx(n.favorited,a)||(n.favorited=a),e_(a)}),og(),Z0(),og(),Hl(11,"po-divider"),Cl(12,"h2",9),qx(13,"About Page Slide"),og(),Cl(14,"section",10)(15,"h3",11),qx(16,"Usage"),og(),Cl(17,"ul",12)(18,"li"),qx(19,"To reveal additional navigation controls"),og(),Cl(20,"li"),qx(21,"In TV or mobile space since controls and/or space is limited"),og(),Cl(22,"li"),qx(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),og(),Cl(24,"li"),qx(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),og()()(),Cl(26,"section",10)(27,"h3",11),qx(28,"Challenges"),og(),Cl(29,"ul",12)(30,"li"),qx(31,"Discoverability"),og(),Cl(32,"li"),qx(33,"Losing context with the rest of the page"),og(),Cl(34,"li"),qx(35,"Make the disruption work for you"),og()()(),Cl(36,"section",10)(37,"h3",11),qx(38,"Recommendations"),og(),Cl(39,"ul",12)(40,"li"),qx(41,"Use it sparingly only for major context switches"),og(),Cl(42,"li"),qx(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),og(),Cl(44,"li"),qx(45,"Make the activation/deactivation dead simple"),og()()(),Cl(46,"p"),qx(47," For more information visit "),Cl(48,"a",13),qx(49,"Designing Web Interfaces: Page Slide"),og()(),Cl(50,"po-page-slide-footer")(51,"po-button",14),dt("p-click",function(){return n.openPageSlideFooterDocumentation()}),og()()(),Cl(52,"div",15)(53,"po-button",16),dt("p-click",function(){Jy(d);let a=Sx(1);return e_(a.open())}),og()();}l&2&&(Lp(3),pw("ngModel",n.bluetooth),X0(),Lp(),pw("ngModel",n.locked),X0(),Lp(2),pw("ngModel",n.microphone),X0(),Lp(),pw("ngModel",n.notification),X0(),Lp(2),pw("ngModel",n.localization),X0(),Lp(),pw("ngModel",n.favorited),X0());},dependencies:[sY,gk,Qt,_v,H3,Que,jue],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Slide - Configuration"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-slide-configuration"),og(),Hl(23,"hr")),l&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:false,decls:553,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),Cl(7,"code"),qx(8,"po-page-default"),og(),qx(9,", "),Cl(10,"code"),qx(11,"po-page-detail"),og(),qx(12,`,
`),Cl(13,"code"),qx(14,"po-page-edit"),og(),qx(15,", "),Cl(16,"code"),qx(17,"po-page-list"),og(),qx(18," e "),Cl(19,"code"),qx(20,"po-page-slide"),og(),qx(21,"."),og()(),Cl(22,"h3",3),qx(23,"Componente"),og(),Cl(24,"h4",4)(25,"code",5),qx(26,"PoPageSlideComponent"),og()(),Cl(27,"div",2)(28,"p"),qx(29,"O componente "),Cl(30,"code"),qx(31,"po-page-slide"),og(),qx(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),og(),Cl(33,"p"),qx(34,"Este componente \xE9 ativado a partir do m\xE9todo "),Cl(35,"code"),qx(36,"#open()"),og(),qx(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Cl(38,"code"),qx(39,"#close()"),og(),qx(40,"."),og(),Cl(41,"blockquote")(42,"p"),qx(43,"Para o correto funcionamento do componente "),Cl(44,"code"),qx(45,"po-page-slide"),og(),qx(46,`, deve ser
importado o m\xF3dulo `),Cl(47,"code"),qx(48,"BrowserAnimationsModule"),og(),qx(49,` no m\xF3dulo principal da sua
aplica\xE7\xE3o.`),og()(),Cl(50,"p"),qx(51,"M\xF3dulo da aplica\xE7\xE3o:"),og(),Cl(52,"pre")(53,"code"),qx(54,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),og()(),Cl(55,"p"),qx(56,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),og(),Cl(57,"pre")(58,"code"),qx(59,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),og()(),Cl(60,"p"),qx(61," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),Cl(62,"a",6),qx(63,"Grid System"),og(),qx(64,"."),og(),Cl(65,"p"),qx(66,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),Cl(67,"a",7)(68,"code"),qx(69,"PoPageSlideFooter"),og()(),qx(70," para customiza\xE7\xE3o do template."),og(),Cl(71,"ul")(72,"li")(73,"h4"),qx(74,"Tokens customiz\xE1veis"),og()()(),Cl(75,"p"),qx(76,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(77,"blockquote")(78,"p"),qx(79,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(80,"a",8),qx(81,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(82,"."),og()(),Cl(83,"table")(84,"thead")(85,"tr")(86,"th"),qx(87,"Propriedade"),og(),Cl(88,"th"),qx(89,"Descri\xE7\xE3o"),og(),Cl(90,"th"),qx(91,"Valor Padr\xE3o"),og()()(),Cl(92,"tbody")(93,"tr")(94,"td")(95,"code"),qx(96,"--font-family"),og()(),Cl(97,"td"),qx(98,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--font-family-theme)"),og()()(),Cl(102,"tr")(103,"td")(104,"code"),qx(105,"--font-weight"),og()(),Cl(106,"td"),qx(107,"Peso da fonte"),og(),Cl(108,"td")(109,"code"),qx(110,"var(--font-weight-bold)"),og()()(),Cl(111,"tr")(112,"td")(113,"code"),qx(114,"--padding-header"),og()(),Cl(115,"td"),qx(116,"Espa\xE7amento do header"),og(),Cl(117,"td")(118,"code"),qx(119,"var(--spacing-md)"),og()()(),Cl(120,"tr")(121,"td")(122,"code"),qx(123,"--padding-body"),og()(),Cl(124,"td"),qx(125,"Espa\xE7amento do conte\xFAdo"),og(),Cl(126,"td")(127,"code"),qx(128,"var(--line-height-none)"),og()()(),Cl(129,"tr")(130,"td")(131,"code"),qx(132,"--padding-footer"),og()(),Cl(133,"td"),qx(134,"Espa\xE7amento do footer"),og(),Cl(135,"td")(136,"code"),qx(137,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),og()()(),Cl(138,"tr")(139,"td")(140,"strong"),qx(141,"Default Values"),og()(),Hl(142,"td")(143,"td"),og(),Cl(144,"tr")(145,"td")(146,"code"),qx(147,"--color-overlay"),og()(),Cl(148,"td"),qx(149,"Cor do overlay"),og(),Cl(150,"td")(151,"code"),qx(152,"var(--color-neutral-dark-80)"),og()()(),Cl(153,"tr")(154,"td")(155,"code"),qx(156,"--opacity-overlay"),og()(),Cl(157,"td"),qx(158,"Cor da opacidade do overlay"),og(),Cl(159,"td")(160,"code"),qx(161,"0.7"),og()()(),Cl(162,"tr")(163,"td")(164,"code"),qx(165,"--background-color"),og()(),Cl(166,"td"),qx(167,"Cor de background"),og(),Cl(168,"td")(169,"code"),qx(170,"var(--color-neutral-light-00)"),og()()(),Cl(171,"tr")(172,"td")(173,"code"),qx(174,"--border-color"),og()(),Cl(175,"td"),qx(176,"Cor da borda"),og(),Cl(177,"td")(178,"code"),qx(179,"var(--color-neutral-light-20)"),og()()(),Cl(180,"tr")(181,"td")(182,"code"),qx(183,"--color-title"),og()(),Cl(184,"td"),qx(185,"Cor do titulo do header"),og(),Cl(186,"td")(187,"code"),qx(188,"var(--color-neutral-dark-95)"),og()()(),Cl(189,"tr")(190,"td")(191,"code"),qx(192,"--border-radius"),og()(),Cl(193,"td"),qx(194,"Radius da borda"),og(),Cl(195,"td")(196,"code"),qx(197,"var(--border-radius-md) 0 0 var(--border-radius-md)"),og()()(),Cl(198,"tr")(199,"td")(200,"code"),qx(201,"--transition-duration"),og()(),Cl(202,"td"),qx(203,"Dura\xE7\xE3o da transi\xE7\xE3o"),og(),Cl(204,"td")(205,"code"),qx(206,"var(--duration-extra-fast)"),og()()(),Cl(207,"tr")(208,"td")(209,"code"),qx(210,"--transition-timing"),og()(),Cl(211,"td"),qx(212,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),og(),Cl(213,"td")(214,"code"),qx(215,"var(--duration-extra-slow) var(--timing-standart)"),og()()(),Cl(216,"tr")(217,"td")(218,"code"),qx(219,"--page-slide-width-sm"),og()(),Cl(220,"td"),qx(221,"Tamanho da largura do componente no tamanho "),Cl(222,"code"),qx(223,"small"),og()(),Cl(224,"td")(225,"code"),qx(226,"40%"),og()()(),Cl(227,"tr")(228,"td")(229,"code"),qx(230,"--page-slide-width-md"),og()(),Cl(231,"td"),qx(232,"Tamanho da largura do componente no tamanho "),Cl(233,"code"),qx(234,"medium"),og()(),Cl(235,"td")(236,"code"),qx(237,"50%"),og()()(),Cl(238,"tr")(239,"td")(240,"code"),qx(241,"--page-slide-width-lg"),og()(),Cl(242,"td"),qx(243,"Tamanho da largura do componente no tamanho "),Cl(244,"code"),qx(245,"large"),og()(),Cl(246,"td")(247,"code"),qx(248,"60%"),og()()(),Cl(249,"tr")(250,"td")(251,"code"),qx(252,"--page-slide-width-xl"),og()(),Cl(253,"td"),qx(254,"Tamanho da largura do componente no tamanho "),Cl(255,"code"),qx(256,"extra large"),og()(),Cl(257,"td")(258,"code"),qx(259,"70%"),og()()(),Cl(260,"tr")(261,"td")(262,"code"),qx(263,"--page-slide-min-width-auto"),og()(),Cl(264,"td"),qx(265,"Tamanho da largura m\xEDnima do componente no tamanho "),Cl(266,"code"),qx(267,"auto"),og()(),Cl(268,"td")(269,"code"),qx(270,"40%"),og()()(),Cl(271,"tr")(272,"td")(273,"code"),qx(274,"--page-slide-max-width-auto"),og()(),Cl(275,"td"),qx(276,"Tamanho da largura m\xE1xima do componente no tamanho "),Cl(277,"code"),qx(278,"auto"),og()(),Cl(279,"td")(280,"code"),qx(281,"90%"),og()()()()()(),Cl(282,"div",9)(283,"h4",10),qx(284,"Seletor"),og(),Cl(285,"pre",11),qx(286,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),og()(),Cl(287,"h4",12),qx(288,"Propriedades"),og(),Cl(289,"table",13)(290,"tr",14)(291,"th",15),qx(292,"Nome"),og(),Cl(293,"th",15),qx(294,"Tipo"),og(),Cl(295,"th",15),qx(296,"Padr\xE3o"),og(),Cl(297,"th",15),qx(298,"Descri\xE7\xE3o"),og()(),Cl(299,"tr",16)(300,"td",17)(301,"div",18)(302,"span",19),qx(303," p-click-out"),Hl(304,"br"),og()()(),Cl(305,"td",20)(306,"code",21),qx(307,"boolean"),og()(),Cl(308,"td",22)(309,"p")(310,"code"),qx(311,"false"),og()()(),Cl(312,"td",23)(313,"em")(314,"strong"),qx(315,"(opcional)"),og()(),Cl(316,"p"),qx(317,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),og()()(),Cl(318,"tr",16)(319,"td",17)(320,"div",24)(321,"span",25),qx(322," (p-close)"),Hl(323,"br"),og()()(),Cl(324,"td",20)(325,"code",26),qx(326,"EventEmitter"),og()(),Cl(327,"td",22),qx(328,"-"),og(),Cl(329,"td",23)(330,"em")(331,"strong"),qx(332,"(opcional)"),og()(),Cl(333,"p"),qx(334,"Evento executado ao fechar o page slide."),og()()(),Cl(335,"tr",16)(336,"td",17)(337,"div",18)(338,"span",19),qx(339," p-components-size"),Hl(340,"br"),og()()(),Cl(341,"td",20)(342,"code",27),qx(343,"string"),og()(),Cl(344,"td",22)(345,"p")(346,"code"),qx(347,"medium"),og()()(),Cl(348,"td",23)(349,"em")(350,"strong"),qx(351,"(opcional)"),og()(),Cl(352,"p"),qx(353,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(354,"ul")(355,"li")(356,"code"),qx(357,"small"),og(),qx(358,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(359,"li")(360,"code"),qx(361,"medium"),og(),qx(362,": aplica a medida medium de cada componente."),og()(),Cl(363,"blockquote")(364,"p"),qx(365,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(366,"code"),qx(367,"medium"),og(),qx(368,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(369,"a",28),qx(370,"po-theme"),og(),qx(371,"."),og()()()(),Cl(372,"tr",16)(373,"td",17)(374,"div",18)(375,"span",19),qx(376," p-flexible-width"),Hl(377,"br"),og()()(),Cl(378,"td",20)(379,"code",21),qx(380,"boolean"),og()(),Cl(381,"td",22)(382,"p")(383,"code"),qx(384,"false"),og()()(),Cl(385,"td",23)(386,"em")(387,"strong"),qx(388,"(opcional)"),og()(),Cl(389,"p"),qx(390,"Permite a expans\xE3o din\xE2mica da largura do "),Cl(391,"code"),qx(392,"po-page-slide"),og(),qx(393," quando "),Cl(394,"code"),qx(395,"p-size"),og(),qx(396," for "),Cl(397,"code"),qx(398,"auto"),og(),qx(399,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Cl(400,"code"),qx(401,"po-table"),og(),qx(402," dentro do "),Cl(403,"code"),qx(404,"po-page-slide"),og()()()(),Cl(405,"tr",16)(406,"td",17)(407,"div",18)(408,"span",19),qx(409," p-hide-close"),Hl(410,"br"),og()()(),Cl(411,"td",20)(412,"code",21),qx(413,"boolean"),og()(),Cl(414,"td",22)(415,"p")(416,"code"),qx(417,"false"),og()()(),Cl(418,"td",23)(419,"em")(420,"strong"),qx(421,"(opcional)"),og()(),Cl(422,"p"),qx(423,"Oculta o bot\xE3o de encerramento da p\xE1gina."),og(),Cl(424,"p"),qx(425,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),Cl(426,"code"),qx(427,"p-click-out"),og(),qx(428," estiver habilitada."),og()()(),Cl(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),qx(433," p-size"),Hl(434,"br"),og()()(),Cl(435,"td",20)(436,"code",27),qx(437,"string"),og()(),Cl(438,"td",22)(439,"p")(440,"code"),qx(441,"md"),og()()(),Cl(442,"td",23)(443,"em")(444,"strong"),qx(445,"(opcional)"),og()(),Cl(446,"p"),qx(447,"Define o tamanho da p\xE1gina."),og(),Cl(448,"p"),qx(449,"Valores v\xE1lidos:"),og(),Cl(450,"ul")(451,"li")(452,"code"),qx(453,"sm"),og(),qx(454," (pequeno)"),og(),Cl(455,"li")(456,"code"),qx(457,"md"),og(),qx(458," (m\xE9dio)"),og(),Cl(459,"li")(460,"code"),qx(461,"lg"),og(),qx(462," (grande)"),og(),Cl(463,"li")(464,"code"),qx(465,"xl"),og(),qx(466," (extra-grande)"),og(),Cl(467,"li")(468,"code"),qx(469,"auto"),og(),qx(470," (autom\xE1tico)"),og()(),Cl(471,"blockquote")(472,"p"),qx(473,"Todas as op\xE7\xF5es de tamanho, exceto "),Cl(474,"code"),qx(475,"auto"),og(),qx(476,", possuem uma largura m\xE1xima de "),Cl(477,"strong"),qx(478,"768px"),og(),qx(479,"."),og()()()(),Cl(480,"tr",16)(481,"td",17)(482,"div",18)(483,"span",19),qx(484," p-subtitle"),Hl(485,"br"),og()()(),Cl(486,"td",20)(487,"code",27),qx(488,"string"),og()(),Cl(489,"td",22),qx(490,"-"),og(),Cl(491,"td",23)(492,"em")(493,"strong"),qx(494,"(opcional)"),og()(),Cl(495,"p"),qx(496,"Subt\xEDtulo da p\xE1gina."),og()()(),Cl(497,"tr",16)(498,"td",17)(499,"div",18)(500,"span",19),qx(501," p-title"),Hl(502,"br"),og()()(),Cl(503,"td",20)(504,"code",27),qx(505,"string"),og()(),Cl(506,"td",22),qx(507,"-"),og(),Cl(508,"td",23)(509,"p"),qx(510,"T\xEDtulo da p\xE1gina."),og()()()(),Cl(511,"h3",12),qx(512,"M\xE9todos"),og(),Cl(513,"table",29)(514,"tr",16)(515,"th",30)(516,"div",18)(517,"h4")(518,"span",19),qx(519," open "),og()()()()(),Cl(520,"tr",23)(521,"td",23)(522,"p"),qx(523,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),og(),Cl(524,"p"),qx(525,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Cl(526,"code"),qx(527,"ViewChild"),og(),qx(528," da seguinte forma:"),og(),Cl(529,"pre")(530,"code",31),qx(531,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),og()()()()(),Hl(532,"br"),Cl(533,"table",29)(534,"tr",16)(535,"th",30)(536,"div",18)(537,"h4")(538,"span",19),qx(539," close "),og()()()()(),Cl(540,"tr",23)(541,"td",23)(542,"p"),qx(543,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),og(),Cl(544,"p"),qx(545,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Cl(546,"code"),qx(547,"ViewChild"),og(),qx(548," da seguinte forma:"),og(),Cl(549,"pre")(550,"code",31),qx(551,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),og()()()()(),Hl(552,"br"),og());},dependencies:[Zr],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-page-slide-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),og()()()),l&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,pe,de,se,ce],encapsulation:2})}return o})();var Me=[{path:"",component:ue}],ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[bL.forChild(Me),bL]})}return o})();var tt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[ca,ge]})}return o})();export{tt as DocPoPageSlideModule};