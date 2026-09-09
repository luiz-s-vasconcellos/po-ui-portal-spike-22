import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,I as H_e,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ei as Yl,fi as ag,gi as bL,ha as ww,l as ar,la as uo,lr as Gl,nn as j4,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,xt as W_e,yi as cN}from"./main-3EWTGE7T.js";var ae=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=Ax();Tl(0,`po-page-slide`,1,0),cN(2,` Hello World! `),ag(),Tl(3,`div`,2)(4,`po-button`,3),ht(`p-click`,function(){Ky(d);return Xy(Bx(1).open())}),ag()()}},dependencies:[Zt,W_e],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Slide Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-slide-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,he,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ae],encapsulation:2,changeDetection:1})}return o})();var Ee=[`poPageSlide`];var re=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&Yl(Ee,5),l&2){let d;lo(d=uo())&&(n.poPageSlide=d.first)}},standalone:!1,decls:15,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let d=Ax();Tl(0,`po-page-slide`,2,0),cN(2),ag(),Tl(3,`po-button`,3),ht(`p-click`,function(){return n.openPage()}),ag(),Gl(4,`po-divider`),Tl(5,`form`,null,1)(7,`po-input`,4),ww(`ngModelChange`,function(a){return Ky(d),uN(n.title,a)||(n.title=a),Xy(a)}),ag(),a0(),Tl(8,`po-input`,5),ww(`ngModelChange`,function(a){return Ky(d),uN(n.subtitle,a)||(n.subtitle=a),Xy(a)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(a){return Ky(d),uN(n.content,a)||(n.content=a),Xy(a)}),ag(),a0(),Tl(10,`po-checkbox-group`,7),ww(`ngModelChange`,function(a){return Ky(d),uN(n.properties,a)||(n.properties=a),Xy(a)}),ag(),a0(),Tl(11,`po-radio-group`,8),ww(`ngModelChange`,function(a){return Ky(d),uN(n.size,a)||(n.size=a),Xy(a)}),ag(),a0(),Tl(12,`po-radio-group`,9),ww(`ngModelChange`,function(a){return Ky(d),uN(n.componentsSize,a)||(n.componentsSize=a),Xy(a)}),ag(),a0(),Tl(13,`div`,10)(14,`po-button`,11),ht(`p-click`,function(){return n.restore()}),ag()()()}if(l&2){let d=Bx(6);nw(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),jp(2),hg(` `,n.content,`
`),jp(),nw(`p-disabled`,d.form.invalid),jp(4),Ew(`ngModel`,n.title),l0(),jp(),Ew(`ngModel`,n.subtitle),l0(),jp(),Ew(`ngModel`,n.content),l0(),jp(),Ew(`ngModel`,n.properties),nw(`p-options`,n.propertiesOptions),l0(),jp(),Ew(`ngModel`,n.size),nw(`p-options`,n.sizeOptions),l0(),jp(),Ew(`ngModel`,n.componentsSize),nw(`p-options`,n.componentsSizeOptions),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,W_e],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Slide Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-slide
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-slide-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Pe,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{router=f(Cn);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let d=Ax();Tl(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),ww(`ngModelChange`,function(a){return Ky(d),uN(n.bluetooth,a)||(n.bluetooth=a),Xy(a)}),ag(),a0(),Tl(4,`po-switch`,4),ww(`ngModelChange`,function(a){return Ky(d),uN(n.locked,a)||(n.locked=a),Xy(a)}),ag(),a0(),ag(),Tl(5,`div`,2)(6,`po-switch`,5),ww(`ngModelChange`,function(a){return Ky(d),uN(n.microphone,a)||(n.microphone=a),Xy(a)}),ag(),a0(),Tl(7,`po-switch`,6),ww(`ngModelChange`,function(a){return Ky(d),uN(n.notification,a)||(n.notification=a),Xy(a)}),ag(),a0(),ag(),Tl(8,`div`,2)(9,`po-switch`,7),ww(`ngModelChange`,function(a){return Ky(d),uN(n.localization,a)||(n.localization=a),Xy(a)}),ag(),a0(),Tl(10,`po-switch`,8),ww(`ngModelChange`,function(a){return Ky(d),uN(n.favorited,a)||(n.favorited=a),Xy(a)}),ag(),a0(),ag(),Gl(11,`po-divider`),Tl(12,`h2`,9),cN(13,`About Page Slide`),ag(),Tl(14,`section`,10)(15,`h3`,11),cN(16,`Usage`),ag(),Tl(17,`ul`,12)(18,`li`),cN(19,`To reveal additional navigation controls`),ag(),Tl(20,`li`),cN(21,`In TV or mobile space since controls and/or space is limited`),ag(),Tl(22,`li`),cN(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),ag(),Tl(24,`li`),cN(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),ag()()(),Tl(26,`section`,10)(27,`h3`,11),cN(28,`Challenges`),ag(),Tl(29,`ul`,12)(30,`li`),cN(31,`Discoverability`),ag(),Tl(32,`li`),cN(33,`Losing context with the rest of the page`),ag(),Tl(34,`li`),cN(35,`Make the disruption work for you`),ag()()(),Tl(36,`section`,10)(37,`h3`,11),cN(38,`Recommendations`),ag(),Tl(39,`ul`,12)(40,`li`),cN(41,`Use it sparingly only for major context switches`),ag(),Tl(42,`li`),cN(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),ag(),Tl(44,`li`),cN(45,`Make the activation/deactivation dead simple`),ag()()(),Tl(46,`p`),cN(47,` For more information visit `),Tl(48,`a`,13),cN(49,`Designing Web Interfaces: Page Slide`),ag()(),Tl(50,`po-page-slide-footer`)(51,`po-button`,14),ht(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),ag()()(),Tl(52,`div`,15)(53,`po-button`,16),ht(`p-click`,function(){Ky(d);return Xy(Bx(1).open())}),ag()()}l&2&&(jp(3),Ew(`ngModel`,n.bluetooth),l0(),jp(),Ew(`ngModel`,n.locked),l0(),jp(2),Ew(`ngModel`,n.microphone),l0(),jp(),Ew(`ngModel`,n.notification),l0(),jp(2),Ew(`ngModel`,n.localization),l0(),jp(),Ew(`ngModel`,n.favorited),l0())},dependencies:[gY,Ak,Zt,Xy$1,j4,W_e,H_e],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Slide - Configuration`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-slide-configuration`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:534,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,n){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo responsável pelos componentes de estrutura de página: `),Tl(7,`code`),cN(8,`po-page-default`),ag(),cN(9,`, `),Tl(10,`code`),cN(11,`po-page-detail`),ag(),cN(12,`,
`),Tl(13,`code`),cN(14,`po-page-edit`),ag(),cN(15,`, `),Tl(16,`code`),cN(17,`po-page-list`),ag(),cN(18,` e `),Tl(19,`code`),cN(20,`po-page-slide`),ag(),cN(21,`.`),ag()(),Tl(22,`h3`,3),cN(23,`Componente`),ag(),Tl(24,`h4`,4)(25,`code`,5),cN(26,`PoPageSlideComponent`),ag()(),Tl(27,`div`,2)(28,`p`),cN(29,`O componente `),Tl(30,`code`),cN(31,`po-page-slide`),ag(),cN(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),ag(),Tl(33,`p`),cN(34,`Este componente é ativado a partir do método `),Tl(35,`code`),cN(36,`#open()`),ag(),cN(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Tl(38,`code`),cN(39,`#close()`),ag(),cN(40,`.`),ag(),Tl(41,`p`),cN(42,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),Tl(43,`a`,6),cN(44,`Grid System`),ag(),cN(45,`.`),ag(),Tl(46,`p`),cN(47,`No rodapé é possível utilizar o componente `),Tl(48,`a`,7)(49,`code`),cN(50,`PoPageSlideFooter`),ag()(),cN(51,` para customização do template.`),ag(),Tl(52,`ul`)(53,`li`)(54,`h4`),cN(55,`Tokens customizáveis`),ag()()(),Tl(56,`p`),cN(57,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(58,`blockquote`)(59,`p`),cN(60,`Para maiores informações, acesse o guia `),Tl(61,`a`,8),cN(62,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(63,`.`),ag()(),Tl(64,`table`)(65,`thead`)(66,`tr`)(67,`th`),cN(68,`Propriedade`),ag(),Tl(69,`th`),cN(70,`Descrição`),ag(),Tl(71,`th`),cN(72,`Valor Padrão`),ag()()(),Tl(73,`tbody`)(74,`tr`)(75,`td`)(76,`code`),cN(77,`--font-family`),ag()(),Tl(78,`td`),cN(79,`Família tipográfica usada`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--font-family-theme)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--font-weight`),ag()(),Tl(87,`td`),cN(88,`Peso da fonte`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--font-weight-bold)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--padding-header`),ag()(),Tl(96,`td`),cN(97,`Espaçamento do header`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--spacing-md)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--padding-body`),ag()(),Tl(105,`td`),cN(106,`Espaçamento do conteúdo`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--line-height-none)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--padding-footer`),ag()(),Tl(114,`td`),cN(115,`Espaçamento do footer`),ag(),Tl(116,`td`)(117,`code`),cN(118,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`strong`),cN(122,`Default Values`),ag()(),Gl(123,`td`)(124,`td`),ag(),Tl(125,`tr`)(126,`td`)(127,`code`),cN(128,`--color-overlay`),ag()(),Tl(129,`td`),cN(130,`Cor do overlay`),ag(),Tl(131,`td`)(132,`code`),cN(133,`var(--color-neutral-dark-80)`),ag()()(),Tl(134,`tr`)(135,`td`)(136,`code`),cN(137,`--opacity-overlay`),ag()(),Tl(138,`td`),cN(139,`Cor da opacidade do overlay`),ag(),Tl(140,`td`)(141,`code`),cN(142,`0.7`),ag()()(),Tl(143,`tr`)(144,`td`)(145,`code`),cN(146,`--background-color`),ag()(),Tl(147,`td`),cN(148,`Cor de background`),ag(),Tl(149,`td`)(150,`code`),cN(151,`var(--color-neutral-light-00)`),ag()()(),Tl(152,`tr`)(153,`td`)(154,`code`),cN(155,`--border-color`),ag()(),Tl(156,`td`),cN(157,`Cor da borda`),ag(),Tl(158,`td`)(159,`code`),cN(160,`var(--color-neutral-light-20)`),ag()()(),Tl(161,`tr`)(162,`td`)(163,`code`),cN(164,`--color-title`),ag()(),Tl(165,`td`),cN(166,`Cor do titulo do header`),ag(),Tl(167,`td`)(168,`code`),cN(169,`var(--color-neutral-dark-95)`),ag()()(),Tl(170,`tr`)(171,`td`)(172,`code`),cN(173,`--border-radius`),ag()(),Tl(174,`td`),cN(175,`Radius da borda`),ag(),Tl(176,`td`)(177,`code`),cN(178,`var(--border-radius-md) 0 0 var(--border-radius-md)`),ag()()(),Tl(179,`tr`)(180,`td`)(181,`code`),cN(182,`--transition-duration`),ag()(),Tl(183,`td`),cN(184,`Duração da transição`),ag(),Tl(185,`td`)(186,`code`),cN(187,`var(--duration-extra-fast)`),ag()()(),Tl(188,`tr`)(189,`td`)(190,`code`),cN(191,`--transition-timing`),ag()(),Tl(192,`td`),cN(193,`Duração da transição com o tipo de transição`),ag(),Tl(194,`td`)(195,`code`),cN(196,`var(--duration-extra-slow) var(--timing-standart)`),ag()()(),Tl(197,`tr`)(198,`td`)(199,`code`),cN(200,`--page-slide-width-sm`),ag()(),Tl(201,`td`),cN(202,`Tamanho da largura do componente no tamanho `),Tl(203,`code`),cN(204,`small`),ag()(),Tl(205,`td`)(206,`code`),cN(207,`40%`),ag()()(),Tl(208,`tr`)(209,`td`)(210,`code`),cN(211,`--page-slide-width-md`),ag()(),Tl(212,`td`),cN(213,`Tamanho da largura do componente no tamanho `),Tl(214,`code`),cN(215,`medium`),ag()(),Tl(216,`td`)(217,`code`),cN(218,`50%`),ag()()(),Tl(219,`tr`)(220,`td`)(221,`code`),cN(222,`--page-slide-width-lg`),ag()(),Tl(223,`td`),cN(224,`Tamanho da largura do componente no tamanho `),Tl(225,`code`),cN(226,`large`),ag()(),Tl(227,`td`)(228,`code`),cN(229,`60%`),ag()()(),Tl(230,`tr`)(231,`td`)(232,`code`),cN(233,`--page-slide-width-xl`),ag()(),Tl(234,`td`),cN(235,`Tamanho da largura do componente no tamanho `),Tl(236,`code`),cN(237,`extra large`),ag()(),Tl(238,`td`)(239,`code`),cN(240,`70%`),ag()()(),Tl(241,`tr`)(242,`td`)(243,`code`),cN(244,`--page-slide-min-width-auto`),ag()(),Tl(245,`td`),cN(246,`Tamanho da largura mínima do componente no tamanho `),Tl(247,`code`),cN(248,`auto`),ag()(),Tl(249,`td`)(250,`code`),cN(251,`40%`),ag()()(),Tl(252,`tr`)(253,`td`)(254,`code`),cN(255,`--page-slide-max-width-auto`),ag()(),Tl(256,`td`),cN(257,`Tamanho da largura máxima do componente no tamanho `),Tl(258,`code`),cN(259,`auto`),ag()(),Tl(260,`td`)(261,`code`),cN(262,`90%`),ag()()()()()(),Tl(263,`div`,9)(264,`h4`,10),cN(265,`Seletor`),ag(),Tl(266,`pre`,11),cN(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),ag()(),Tl(268,`h4`,12),cN(269,`Propriedades`),ag(),Tl(270,`table`,13)(271,`tr`,14)(272,`th`,15),cN(273,`Nome`),ag(),Tl(274,`th`,15),cN(275,`Tipo`),ag(),Tl(276,`th`,15),cN(277,`Padrão`),ag(),Tl(278,`th`,15),cN(279,`Descrição`),ag()(),Tl(280,`tr`,16)(281,`td`,17)(282,`div`,18)(283,`span`,19),cN(284,` p-click-out`),Gl(285,`br`),ag()()(),Tl(286,`td`,20)(287,`code`,21),cN(288,`boolean`),ag()(),Tl(289,`td`,22)(290,`p`)(291,`code`),cN(292,`false`),ag()()(),Tl(293,`td`,23)(294,`em`)(295,`strong`),cN(296,`(opcional)`),ag()(),Tl(297,`p`),cN(298,`Define se permite o encerramento da página ao clicar fora da mesma.`),ag()()(),Tl(299,`tr`,16)(300,`td`,17)(301,`div`,24)(302,`span`,25),cN(303,` (p-close)`),Gl(304,`br`),ag()()(),Tl(305,`td`,20)(306,`code`,26),cN(307,`EventEmitter`),ag()(),Tl(308,`td`,22),cN(309,`-`),ag(),Tl(310,`td`,23)(311,`em`)(312,`strong`),cN(313,`(opcional)`),ag()(),Tl(314,`p`),cN(315,`Evento executado ao fechar o page slide.`),ag()()(),Tl(316,`tr`,16)(317,`td`,17)(318,`div`,18)(319,`span`,19),cN(320,` p-components-size`),Gl(321,`br`),ag()()(),Tl(322,`td`,20)(323,`code`,27),cN(324,`string`),ag()(),Tl(325,`td`,22)(326,`p`)(327,`code`),cN(328,`medium`),ag()()(),Tl(329,`td`,23)(330,`em`)(331,`strong`),cN(332,`(opcional)`),ag()(),Tl(333,`p`),cN(334,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(335,`ul`)(336,`li`)(337,`code`),cN(338,`small`),ag(),cN(339,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(340,`li`)(341,`code`),cN(342,`medium`),ag(),cN(343,`: aplica a medida medium de cada componente.`),ag()(),Tl(344,`blockquote`)(345,`p`),cN(346,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(347,`code`),cN(348,`medium`),ag(),cN(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(350,`a`,28),cN(351,`po-theme`),ag(),cN(352,`.`),ag()()()(),Tl(353,`tr`,16)(354,`td`,17)(355,`div`,18)(356,`span`,19),cN(357,` p-flexible-width`),Gl(358,`br`),ag()()(),Tl(359,`td`,20)(360,`code`,21),cN(361,`boolean`),ag()(),Tl(362,`td`,22)(363,`p`)(364,`code`),cN(365,`false`),ag()()(),Tl(366,`td`,23)(367,`em`)(368,`strong`),cN(369,`(opcional)`),ag()(),Tl(370,`p`),cN(371,`Permite a expansão dinâmica da largura do `),Tl(372,`code`),cN(373,`po-page-slide`),ag(),cN(374,` quando `),Tl(375,`code`),cN(376,`p-size`),ag(),cN(377,` for `),Tl(378,`code`),cN(379,`auto`),ag(),cN(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Tl(381,`code`),cN(382,`po-table`),ag(),cN(383,` dentro do `),Tl(384,`code`),cN(385,`po-page-slide`),ag()()()(),Tl(386,`tr`,16)(387,`td`,17)(388,`div`,18)(389,`span`,19),cN(390,` p-hide-close`),Gl(391,`br`),ag()()(),Tl(392,`td`,20)(393,`code`,21),cN(394,`boolean`),ag()(),Tl(395,`td`,22)(396,`p`)(397,`code`),cN(398,`false`),ag()()(),Tl(399,`td`,23)(400,`em`)(401,`strong`),cN(402,`(opcional)`),ag()(),Tl(403,`p`),cN(404,`Oculta o botão de encerramento da página.`),ag(),Tl(405,`p`),cN(406,`Esta opção só é possível se a propriedade `),Tl(407,`code`),cN(408,`p-click-out`),ag(),cN(409,` estiver habilitada.`),ag()()(),Tl(410,`tr`,16)(411,`td`,17)(412,`div`,18)(413,`span`,19),cN(414,` p-size`),Gl(415,`br`),ag()()(),Tl(416,`td`,20)(417,`code`,27),cN(418,`string`),ag()(),Tl(419,`td`,22)(420,`p`)(421,`code`),cN(422,`md`),ag()()(),Tl(423,`td`,23)(424,`em`)(425,`strong`),cN(426,`(opcional)`),ag()(),Tl(427,`p`),cN(428,`Define o tamanho da página.`),ag(),Tl(429,`p`),cN(430,`Valores válidos:`),ag(),Tl(431,`ul`)(432,`li`)(433,`code`),cN(434,`sm`),ag(),cN(435,` (pequeno)`),ag(),Tl(436,`li`)(437,`code`),cN(438,`md`),ag(),cN(439,` (médio)`),ag(),Tl(440,`li`)(441,`code`),cN(442,`lg`),ag(),cN(443,` (grande)`),ag(),Tl(444,`li`)(445,`code`),cN(446,`xl`),ag(),cN(447,` (extra-grande)`),ag(),Tl(448,`li`)(449,`code`),cN(450,`auto`),ag(),cN(451,` (automático)`),ag()(),Tl(452,`blockquote`)(453,`p`),cN(454,`Todas as opções de tamanho, exceto `),Tl(455,`code`),cN(456,`auto`),ag(),cN(457,`, possuem uma largura máxima de `),Tl(458,`strong`),cN(459,`768px`),ag(),cN(460,`.`),ag()()()(),Tl(461,`tr`,16)(462,`td`,17)(463,`div`,18)(464,`span`,19),cN(465,` p-subtitle`),Gl(466,`br`),ag()()(),Tl(467,`td`,20)(468,`code`,27),cN(469,`string`),ag()(),Tl(470,`td`,22),cN(471,`-`),ag(),Tl(472,`td`,23)(473,`em`)(474,`strong`),cN(475,`(opcional)`),ag()(),Tl(476,`p`),cN(477,`Subtítulo da página.`),ag()()(),Tl(478,`tr`,16)(479,`td`,17)(480,`div`,18)(481,`span`,19),cN(482,` p-title`),Gl(483,`br`),ag()()(),Tl(484,`td`,20)(485,`code`,27),cN(486,`string`),ag()(),Tl(487,`td`,22),cN(488,`-`),ag(),Tl(489,`td`,23)(490,`p`),cN(491,`Título da página.`),ag()()()(),Tl(492,`h3`,12),cN(493,`Métodos`),ag(),Tl(494,`table`,29)(495,`tr`,16)(496,`th`,30)(497,`div`,18)(498,`h4`)(499,`span`,19),cN(500,` open `),ag()()()()(),Tl(501,`tr`,23)(502,`td`,23)(503,`p`),cN(504,`Ativa a visualização da página.`),ag(),Tl(505,`p`),cN(506,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Tl(507,`code`),cN(508,`ViewChild`),ag(),cN(509,` da seguinte forma:`),ag(),Tl(510,`pre`)(511,`code`,31),cN(512,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),ag()()()()(),Gl(513,`br`),Tl(514,`table`,29)(515,`tr`,16)(516,`th`,30)(517,`div`,18)(518,`h4`)(519,`span`,19),cN(520,` close `),ag()()()()(),Tl(521,`tr`,23)(522,`td`,23)(523,`p`),cN(524,`Encerra a visualização da página.`),ag(),Tl(525,`p`),cN(526,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Tl(527,`code`),cN(528,`ViewChild`),ag(),cN(529,` da seguinte forma:`),ag(),Tl(530,`pre`)(531,`code`,31),cN(532,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),ag()()()()(),Gl(533,`br`),ag())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-page-slide-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-page-slide-basic-view`)(6,`sample-po-page-slide-labs-view`)(7,`sample-po-page-slide-configuration-view`),ag()()()),l&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,de,se,ce],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[bL.forChild(Me),bL]})}return o})();var tt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[ar,ge]})}return o})();export{tt as DocPoPageSlideModule};