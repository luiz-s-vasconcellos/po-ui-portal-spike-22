import{$i as pt,Br as Qn,Ci as fo,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,P as Fie,Qn as C9,Sa as zO,St as Vie,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,fn as ni,i as _a,in as kte,ji as ho,k as D4,ki as he$1,kn as v4,ni as Xc,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var ae=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=Bx();Ac(0,`po-page-slide`,1,0),vN(2,` Hello World! `),ug(),Ac(3,`div`,2)(4,`po-button`,3),pt(`p-click`,function(){Jv(m);let a=Zx(1);return e_(a.open())}),ug()()}},dependencies:[ni,Vie],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Slide Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-slide-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,he,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ae],encapsulation:2,changeDetection:1})}return o})();var fe=[`poPageSlide`];var re=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get isFullSize(){return this.size===`full`}get propertiesOptions(){return[{value:`click-out`,label:`Click Out`,disabled:this.isFullSize},{value:`hide-close`,label:`Hide Close`}]}sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`},{label:`Full`,value:`full`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}closePage(){this.poPageSlide.close()}onChangeSize(){this.isFullSize&&this.properties.includes(`click-out`)&&(this.properties=this.properties.filter(d=>d!==`click-out`))}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&Xc(fe,5),l&2){let m;fo(m=ho())&&(n.poPageSlide=m.first)}},standalone:!1,decls:18,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-kind`,`secondary`,`p-label`,`Cancelar`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Fechar`,3,`p-click`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`No modo full a página ocupa 100% da largura, portanto não há área externa para clicar e a propriedade Click Out não é aplicável. Utilize o botão do cabeçalho, a tecla Esc ou um botão no rodapé para fechar.`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let m=Bx();Ac(0,`po-page-slide`,2,0),vN(2),Ac(3,`po-page-slide-footer`)(4,`po-button`,3),pt(`p-click`,function(){return n.closePage()}),ug(),Ac(5,`po-button`,4),pt(`p-click`,function(){return n.closePage()}),ug()()(),Ac(6,`po-button`,5),pt(`p-click`,function(){return n.openPage()}),ug(),Kc(7,`po-divider`),Ac(8,`form`,null,1)(10,`po-input`,6),RE(`ngModelChange`,function(a){return Jv(m),DN(n.title,a)||(n.title=a),e_(a)}),ug(),p0(),Ac(11,`po-input`,7),RE(`ngModelChange`,function(a){return Jv(m),DN(n.subtitle,a)||(n.subtitle=a),e_(a)}),ug(),p0(),Ac(12,`po-input`,8),RE(`ngModelChange`,function(a){return Jv(m),DN(n.content,a)||(n.content=a),e_(a)}),ug(),p0(),Ac(13,`po-checkbox-group`,9),RE(`ngModelChange`,function(a){return Jv(m),DN(n.properties,a)||(n.properties=a),e_(a)}),ug(),p0(),Ac(14,`po-radio-group`,10),RE(`ngModelChange`,function(a){return Jv(m),DN(n.size,a)||(n.size=a),e_(a)}),pt(`ngModelChange`,function(){return n.onChangeSize()}),ug(),p0(),Ac(15,`po-radio-group`,11),RE(`ngModelChange`,function(a){return Jv(m),DN(n.componentsSize,a)||(n.componentsSize=a),e_(a)}),ug(),p0(),Ac(16,`div`,12)(17,`po-button`,13),pt(`p-click`,function(){return n.restore()}),ug()()()}if(l&2){let m=Zx(9);cE(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),Hp(2),mg(` `,n.content,` `),Hp(4),cE(`p-disabled`,m.form.invalid),Hp(4),TE(`ngModel`,n.title),m0(),Hp(),TE(`ngModel`,n.subtitle),m0(),Hp(),TE(`ngModel`,n.content),m0(),Hp(),TE(`ngModel`,n.properties),cE(`p-options`,n.propertiesOptions),m0(),Hp(),TE(`ngModel`,n.size),cE(`p-options`,n.sizeOptions),m0(),Hp(),TE(`ngModel`,n.componentsSize),cE(`p-options`,n.componentsSizeOptions),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,Vie,Fie],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Slide Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  { { content }}

  <po-page-slide-footer>
    <po-button p-kind="secondary" p-label="Cancelar" (p-click)="closePage()"></po-button>
    <po-button p-kind="primary" p-label="Fechar" (p-click)="closePage()"></po-button>
  </po-page-slide-footer>
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
    p-help="No modo full a p\xE1gina ocupa 100% da largura, portanto n\xE3o h\xE1 \xE1rea externa para clicar e a propriedade Click Out n\xE3o \xE9 aplic\xE1vel. Utilize o bot\xE3o do cabe\xE7alho, a tecla Esc ou um bot\xE3o no rodap\xE9 para fechar."
    [p-options]="sizeOptions"
    p-optional
    (ngModelChange)="onChangeSize()"
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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

  public get isFullSize(): boolean {
    return this.size === 'full';
  }

  public get propertiesOptions(): Array<PoCheckboxGroupOption> {
    return [
      {
        value: 'click-out',
        label: 'Click Out',
        disabled: this.isFullSize
      },
      {
        value: 'hide-close',
        label: 'Hide Close'
      }
    ];
  }

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
    },
    {
      label: 'Full',
      value: 'full'
    }
  ];

  ngOnInit() {
    this.restore();
  }

  public openPage() {
    this.poPageSlide.open();
  }

  public closePage() {
    this.poPageSlide.close();
  }

  public onChangeSize() {
    if (this.isFullSize && this.properties.includes('click-out')) {
      this.properties = this.properties.filter(property => property !== 'click-out');
    }
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-slide-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Pe,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{router=f(wn);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=Bx();Ac(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),RE(`ngModelChange`,function(a){return Jv(m),DN(n.bluetooth,a)||(n.bluetooth=a),e_(a)}),ug(),p0(),Ac(4,`po-switch`,4),RE(`ngModelChange`,function(a){return Jv(m),DN(n.locked,a)||(n.locked=a),e_(a)}),ug(),p0(),ug(),Ac(5,`div`,2)(6,`po-switch`,5),RE(`ngModelChange`,function(a){return Jv(m),DN(n.microphone,a)||(n.microphone=a),e_(a)}),ug(),p0(),Ac(7,`po-switch`,6),RE(`ngModelChange`,function(a){return Jv(m),DN(n.notification,a)||(n.notification=a),e_(a)}),ug(),p0(),ug(),Ac(8,`div`,2)(9,`po-switch`,7),RE(`ngModelChange`,function(a){return Jv(m),DN(n.localization,a)||(n.localization=a),e_(a)}),ug(),p0(),Ac(10,`po-switch`,8),RE(`ngModelChange`,function(a){return Jv(m),DN(n.favorited,a)||(n.favorited=a),e_(a)}),ug(),p0(),ug(),Kc(11,`po-divider`),Ac(12,`h2`,9),vN(13,`About Page Slide`),ug(),Ac(14,`section`,10)(15,`h3`,11),vN(16,`Usage`),ug(),Ac(17,`ul`,12)(18,`li`),vN(19,`To reveal additional navigation controls`),ug(),Ac(20,`li`),vN(21,`In TV or mobile space since controls and/or space is limited`),ug(),Ac(22,`li`),vN(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),ug(),Ac(24,`li`),vN(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),ug()()(),Ac(26,`section`,10)(27,`h3`,11),vN(28,`Challenges`),ug(),Ac(29,`ul`,12)(30,`li`),vN(31,`Discoverability`),ug(),Ac(32,`li`),vN(33,`Losing context with the rest of the page`),ug(),Ac(34,`li`),vN(35,`Make the disruption work for you`),ug()()(),Ac(36,`section`,10)(37,`h3`,11),vN(38,`Recommendations`),ug(),Ac(39,`ul`,12)(40,`li`),vN(41,`Use it sparingly only for major context switches`),ug(),Ac(42,`li`),vN(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),ug(),Ac(44,`li`),vN(45,`Make the activation/deactivation dead simple`),ug()()(),Ac(46,`p`),vN(47,` For more information visit `),Ac(48,`a`,13),vN(49,`Designing Web Interfaces: Page Slide`),ug()(),Ac(50,`po-page-slide-footer`)(51,`po-button`,14),pt(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),ug()()(),Ac(52,`div`,15)(53,`po-button`,16),pt(`p-click`,function(){Jv(m);let a=Zx(1);return e_(a.open())}),ug()()}l&2&&(Hp(3),TE(`ngModel`,n.bluetooth),m0(),Hp(),TE(`ngModel`,n.locked),m0(),Hp(2),TE(`ngModel`,n.microphone),m0(),Hp(),TE(`ngModel`,n.notification),m0(),Hp(2),TE(`ngModel`,n.localization),m0(),Hp(),TE(`ngModel`,n.favorited),m0())},dependencies:[D9,BP,ni,Ef,v4,Vie,Fie],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Slide - Configuration`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-slide-configuration`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:568,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageSlideSize`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,n){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ac(7,`code`),vN(8,`po-page-default`),ug(),vN(9,`, `),Ac(10,`code`),vN(11,`po-page-detail`),ug(),vN(12,`,
`),Ac(13,`code`),vN(14,`po-page-edit`),ug(),vN(15,`, `),Ac(16,`code`),vN(17,`po-page-list`),ug(),vN(18,` e `),Ac(19,`code`),vN(20,`po-page-slide`),ug(),vN(21,`.`),ug()(),Ac(22,`h3`,3),vN(23,`Componente`),ug(),Ac(24,`h4`,4)(25,`code`,5),vN(26,`PoPageSlideComponent`),ug()(),Ac(27,`div`,2)(28,`p`),vN(29,`O componente `),Ac(30,`code`),vN(31,`po-page-slide`),ug(),vN(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),ug(),Ac(33,`p`),vN(34,`Este componente é ativado a partir do método `),Ac(35,`code`),vN(36,`#open()`),ug(),vN(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Ac(38,`code`),vN(39,`#close()`),ug(),vN(40,`.`),ug(),Ac(41,`p`),vN(42,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),Ac(43,`a`,6),vN(44,`Grid System`),ug(),vN(45,`.`),ug(),Ac(46,`p`),vN(47,`No rodapé é possível utilizar o componente `),Ac(48,`a`,7)(49,`code`),vN(50,`PoPageSlideFooter`),ug()(),vN(51,` para customização do template.`),ug(),Ac(52,`ul`)(53,`li`)(54,`h4`),vN(55,`Tokens customizáveis`),ug()()(),Ac(56,`p`),vN(57,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(58,`blockquote`)(59,`p`),vN(60,`Para maiores informações, acesse o guia `),Ac(61,`a`,8),vN(62,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(63,`.`),ug()(),Ac(64,`table`)(65,`thead`)(66,`tr`)(67,`th`),vN(68,`Propriedade`),ug(),Ac(69,`th`),vN(70,`Descrição`),ug(),Ac(71,`th`),vN(72,`Valor Padrão`),ug()()(),Ac(73,`tbody`)(74,`tr`)(75,`td`)(76,`code`),vN(77,`--font-family`),ug()(),Ac(78,`td`),vN(79,`Família tipográfica usada`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--font-family-theme)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--font-weight`),ug()(),Ac(87,`td`),vN(88,`Peso da fonte`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--font-weight-bold)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--padding-header`),ug()(),Ac(96,`td`),vN(97,`Espaçamento do header`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--spacing-md)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--padding-body`),ug()(),Ac(105,`td`),vN(106,`Espaçamento do conteúdo`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--line-height-none)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--padding-footer`),ug()(),Ac(114,`td`),vN(115,`Espaçamento do footer`),ug(),Ac(116,`td`)(117,`code`),vN(118,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`strong`),vN(122,`Default Values`),ug()(),Kc(123,`td`)(124,`td`),ug(),Ac(125,`tr`)(126,`td`)(127,`code`),vN(128,`--color-overlay`),ug()(),Ac(129,`td`),vN(130,`Cor do overlay`),ug(),Ac(131,`td`)(132,`code`),vN(133,`var(--color-neutral-dark-80)`),ug()()(),Ac(134,`tr`)(135,`td`)(136,`code`),vN(137,`--opacity-overlay`),ug()(),Ac(138,`td`),vN(139,`Cor da opacidade do overlay`),ug(),Ac(140,`td`)(141,`code`),vN(142,`0.7`),ug()()(),Ac(143,`tr`)(144,`td`)(145,`code`),vN(146,`--background-color`),ug()(),Ac(147,`td`),vN(148,`Cor de background`),ug(),Ac(149,`td`)(150,`code`),vN(151,`var(--color-neutral-light-00)`),ug()()(),Ac(152,`tr`)(153,`td`)(154,`code`),vN(155,`--border-color`),ug()(),Ac(156,`td`),vN(157,`Cor da borda`),ug(),Ac(158,`td`)(159,`code`),vN(160,`var(--color-neutral-light-20)`),ug()()(),Ac(161,`tr`)(162,`td`)(163,`code`),vN(164,`--color-title`),ug()(),Ac(165,`td`),vN(166,`Cor do titulo do header`),ug(),Ac(167,`td`)(168,`code`),vN(169,`var(--color-neutral-dark-95)`),ug()()(),Ac(170,`tr`)(171,`td`)(172,`code`),vN(173,`--border-radius`),ug()(),Ac(174,`td`),vN(175,`Radius da borda`),ug(),Ac(176,`td`)(177,`code`),vN(178,`var(--border-radius-md) 0 0 var(--border-radius-md)`),ug()()(),Ac(179,`tr`)(180,`td`)(181,`code`),vN(182,`--transition-duration`),ug()(),Ac(183,`td`),vN(184,`Duração da transição`),ug(),Ac(185,`td`)(186,`code`),vN(187,`var(--duration-extra-fast)`),ug()()(),Ac(188,`tr`)(189,`td`)(190,`code`),vN(191,`--transition-timing`),ug()(),Ac(192,`td`),vN(193,`Duração da transição com o tipo de transição`),ug(),Ac(194,`td`)(195,`code`),vN(196,`var(--duration-extra-slow) var(--timing-standart)`),ug()()(),Ac(197,`tr`)(198,`td`)(199,`code`),vN(200,`--page-slide-width-sm`),ug()(),Ac(201,`td`),vN(202,`Tamanho da largura do componente no tamanho `),Ac(203,`code`),vN(204,`small`),ug()(),Ac(205,`td`)(206,`code`),vN(207,`40%`),ug()()(),Ac(208,`tr`)(209,`td`)(210,`code`),vN(211,`--page-slide-width-md`),ug()(),Ac(212,`td`),vN(213,`Tamanho da largura do componente no tamanho `),Ac(214,`code`),vN(215,`medium`),ug()(),Ac(216,`td`)(217,`code`),vN(218,`50%`),ug()()(),Ac(219,`tr`)(220,`td`)(221,`code`),vN(222,`--page-slide-width-lg`),ug()(),Ac(223,`td`),vN(224,`Tamanho da largura do componente no tamanho `),Ac(225,`code`),vN(226,`large`),ug()(),Ac(227,`td`)(228,`code`),vN(229,`60%`),ug()()(),Ac(230,`tr`)(231,`td`)(232,`code`),vN(233,`--page-slide-width-xl`),ug()(),Ac(234,`td`),vN(235,`Tamanho da largura do componente no tamanho `),Ac(236,`code`),vN(237,`extra large`),ug()(),Ac(238,`td`)(239,`code`),vN(240,`70%`),ug()()(),Ac(241,`tr`)(242,`td`)(243,`code`),vN(244,`--page-slide-min-width-auto`),ug()(),Ac(245,`td`),vN(246,`Tamanho da largura mínima do componente no tamanho `),Ac(247,`code`),vN(248,`auto`),ug()(),Ac(249,`td`)(250,`code`),vN(251,`40%`),ug()()(),Ac(252,`tr`)(253,`td`)(254,`code`),vN(255,`--page-slide-max-width-auto`),ug()(),Ac(256,`td`),vN(257,`Tamanho da largura máxima do componente no tamanho `),Ac(258,`code`),vN(259,`auto`),ug()(),Ac(260,`td`)(261,`code`),vN(262,`90%`),ug()()()()()(),Ac(263,`div`,9)(264,`h4`,10),vN(265,`Seletor`),ug(),Ac(266,`pre`,11),vN(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="PoPageSlideSize"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),ug()(),Ac(268,`h4`,12),vN(269,`Propriedades`),ug(),Ac(270,`table`,13)(271,`tr`,14)(272,`th`,15),vN(273,`Nome`),ug(),Ac(274,`th`,15),vN(275,`Tipo`),ug(),Ac(276,`th`,15),vN(277,`Padrão`),ug(),Ac(278,`th`,15),vN(279,`Descrição`),ug()(),Ac(280,`tr`,16)(281,`td`,17)(282,`div`,18)(283,`span`,19),vN(284,` p-click-out`),Kc(285,`br`),ug()()(),Ac(286,`td`,20)(287,`code`,21),vN(288,`boolean`),ug()(),Ac(289,`td`,22)(290,`p`)(291,`code`),vN(292,`false`),ug()()(),Ac(293,`td`,23)(294,`em`)(295,`strong`),vN(296,`(opcional)`),ug()(),Ac(297,`p`),vN(298,`Define se permite o encerramento da página ao clicar fora da mesma.`),ug()()(),Ac(299,`tr`,16)(300,`td`,17)(301,`div`,24)(302,`span`,25),vN(303,` (p-close)`),Kc(304,`br`),ug()()(),Ac(305,`td`,20)(306,`code`,26),vN(307,`EventEmitter`),ug()(),Ac(308,`td`,22),vN(309,`-`),ug(),Ac(310,`td`,23)(311,`em`)(312,`strong`),vN(313,`(opcional)`),ug()(),Ac(314,`p`),vN(315,`Evento executado ao fechar o page slide.`),ug()()(),Ac(316,`tr`,16)(317,`td`,17)(318,`div`,18)(319,`span`,19),vN(320,` p-components-size`),Kc(321,`br`),ug()()(),Ac(322,`td`,20)(323,`code`,27),vN(324,`string`),ug()(),Ac(325,`td`,22)(326,`p`)(327,`code`),vN(328,`medium`),ug()()(),Ac(329,`td`,23)(330,`em`)(331,`strong`),vN(332,`(opcional)`),ug()(),Ac(333,`p`),vN(334,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(335,`ul`)(336,`li`)(337,`code`),vN(338,`small`),ug(),vN(339,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(340,`li`)(341,`code`),vN(342,`medium`),ug(),vN(343,`: aplica a medida medium de cada componente.`),ug()(),Ac(344,`blockquote`)(345,`p`),vN(346,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(347,`code`),vN(348,`medium`),ug(),vN(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(350,`a`,28),vN(351,`po-theme`),ug(),vN(352,`.`),ug()()()(),Ac(353,`tr`,16)(354,`td`,17)(355,`div`,18)(356,`span`,19),vN(357,` p-flexible-width`),Kc(358,`br`),ug()()(),Ac(359,`td`,20)(360,`code`,21),vN(361,`boolean`),ug()(),Ac(362,`td`,22)(363,`p`)(364,`code`),vN(365,`false`),ug()()(),Ac(366,`td`,23)(367,`em`)(368,`strong`),vN(369,`(opcional)`),ug()(),Ac(370,`p`),vN(371,`Permite a expansão dinâmica da largura do `),Ac(372,`code`),vN(373,`po-page-slide`),ug(),vN(374,` quando `),Ac(375,`code`),vN(376,`p-size`),ug(),vN(377,` for `),Ac(378,`code`),vN(379,`auto`),ug(),vN(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Ac(381,`code`),vN(382,`po-table`),ug(),vN(383,` dentro do `),Ac(384,`code`),vN(385,`po-page-slide`),ug()()()(),Ac(386,`tr`,16)(387,`td`,17)(388,`div`,18)(389,`span`,19),vN(390,` p-hide-close`),Kc(391,`br`),ug()()(),Ac(392,`td`,20)(393,`code`,21),vN(394,`boolean`),ug()(),Ac(395,`td`,22)(396,`p`)(397,`code`),vN(398,`false`),ug()()(),Ac(399,`td`,23)(400,`em`)(401,`strong`),vN(402,`(opcional)`),ug()(),Ac(403,`p`),vN(404,`Oculta o botão de encerramento da página.`),ug(),Ac(405,`blockquote`)(406,`p`),vN(407,`Para evitar que o usu\xE1rio fique sem forma de fechar, esta op\xE7\xE3o s\xF3 \xE9 mantida quando houver uma
a\xE7\xE3o alternativa de fechamento: `),Ac(408,`code`),vN(409,`p-click-out`),ug(),vN(410,` habilitado ou, no modo `),Ac(411,`code`),vN(412,`full`),ug(),vN(413,`, um
`),Ac(414,`a`,7)(415,`code`),vN(416,`po-page-slide-footer`),ug()(),vN(417,` com a\xE7\xE3o de fechar.
Caso contr\xE1rio, o bot\xE3o de fechar \xE9 reexibido automaticamente ao abrir.`),ug()()()(),Ac(418,`tr`,16)(419,`td`,17)(420,`div`,18)(421,`span`,19),vN(422,` p-size`),Kc(423,`br`),ug()()(),Ac(424,`td`,20)(425,`code`,29),vN(426,`PoPageSlideSize`),ug()(),Ac(427,`td`,22)(428,`p`)(429,`code`),vN(430,`md`),ug()()(),Ac(431,`td`,23)(432,`em`)(433,`strong`),vN(434,`(opcional)`),ug()(),Ac(435,`p`),vN(436,`Define o tamanho da página.`),ug(),Ac(437,`p`),vN(438,`Valores válidos:`),ug(),Ac(439,`ul`)(440,`li`)(441,`code`),vN(442,`sm`),ug(),vN(443,` (pequeno)`),ug(),Ac(444,`li`)(445,`code`),vN(446,`md`),ug(),vN(447,` (médio)`),ug(),Ac(448,`li`)(449,`code`),vN(450,`lg`),ug(),vN(451,` (grande)`),ug(),Ac(452,`li`)(453,`code`),vN(454,`xl`),ug(),vN(455,` (extra-grande)`),ug(),Ac(456,`li`)(457,`code`),vN(458,`auto`),ug(),vN(459,` (automático)`),ug(),Ac(460,`li`)(461,`code`),vN(462,`full`),ug(),vN(463,` (tela cheia): a página ocupa 100% da largura da tela e o overlay de fundo não é renderizado.`),ug()(),Ac(464,`blockquote`)(465,`p`),vN(466,`Todas as opções de tamanho, exceto `),Ac(467,`code`),vN(468,`auto`),ug(),vN(469,` e `),Ac(470,`code`),vN(471,`full`),ug(),vN(472,`, possuem uma largura máxima de `),Ac(473,`strong`),vN(474,`768px`),ug(),vN(475,`.`),ug()(),Ac(476,`blockquote`)(477,`p`),vN(478,`No modo `),Ac(479,`code`),vN(480,`full`),ug(),vN(481,`, como não há overlay, o fechamento por clique fora (`),Ac(482,`code`),vN(483,`p-click-out`),ug(),vN(484,`) n\xE3o \xE9 aplic\xE1vel.
O encerramento continua dispon\xEDvel pelo bot\xE3o do cabe\xE7alho, pela tecla `),Ac(485,`code`),vN(486,`Escape`),ug(),vN(487,`, pelo método `),Ac(488,`code`),vN(489,`#close()`),ug(),vN(490,`
ou por um bot\xE3o no `),Ac(491,`a`,7)(492,`code`),vN(493,`po-page-slide-footer`),ug()(),vN(494,`.`),ug()()()(),Ac(495,`tr`,16)(496,`td`,17)(497,`div`,18)(498,`span`,19),vN(499,` p-subtitle`),Kc(500,`br`),ug()()(),Ac(501,`td`,20)(502,`code`,27),vN(503,`string`),ug()(),Ac(504,`td`,22),vN(505,`-`),ug(),Ac(506,`td`,23)(507,`em`)(508,`strong`),vN(509,`(opcional)`),ug()(),Ac(510,`p`),vN(511,`Subtítulo da página.`),ug()()(),Ac(512,`tr`,16)(513,`td`,17)(514,`div`,18)(515,`span`,19),vN(516,` p-title`),Kc(517,`br`),ug()()(),Ac(518,`td`,20)(519,`code`,27),vN(520,`string`),ug()(),Ac(521,`td`,22),vN(522,`-`),ug(),Ac(523,`td`,23)(524,`p`),vN(525,`Título da página.`),ug()()()(),Ac(526,`h3`,12),vN(527,`Métodos`),ug(),Ac(528,`table`,30)(529,`tr`,16)(530,`th`,31)(531,`div`,18)(532,`h4`)(533,`span`,19),vN(534,` open `),ug()()()()(),Ac(535,`tr`,23)(536,`td`,23)(537,`p`),vN(538,`Ativa a visualização da página.`),ug(),Ac(539,`p`),vN(540,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Ac(541,`code`),vN(542,`ViewChild`),ug(),vN(543,` da seguinte forma:`),ug(),Ac(544,`pre`)(545,`code`,32),vN(546,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),ug()()()()(),Kc(547,`br`),Ac(548,`table`,30)(549,`tr`,16)(550,`th`,31)(551,`div`,18)(552,`h4`)(553,`span`,19),vN(554,` close `),ug()()()()(),Ac(555,`tr`,23)(556,`td`,23)(557,`p`),vN(558,`Encerra a visualização da página.`),ug(),Ac(559,`p`),vN(560,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Ac(561,`code`),vN(562,`ViewChild`),ug(),vN(563,` da seguinte forma:`),ug(),Ac(564,`pre`)(565,`code`,32),vN(566,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),ug()()()()(),Kc(567,`br`),ug())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-page-slide-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-page-slide-basic-view`)(6,`sample-po-page-slide-labs-view`)(7,`sample-po-page-slide-configuration-view`),ug()()()),l&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,pe,de,se,ce],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[kL.forChild(ke),kL]})}return o})();var tt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[Ta,ge]})}return o})();export{tt as DocPoPageSlideModule};