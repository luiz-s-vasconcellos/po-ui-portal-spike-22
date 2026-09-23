import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,J as J_e,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,jt as X_e,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,q as J4,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var ae=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=Vx();Ml(0,`po-page-slide`,1,0),mN(2,` Hello World! `),lg(),Ml(3,`div`,2)(4,`po-button`,3),ht(`p-click`,function(){Qy(m);return Jy(Yx(1).open())}),lg()()}},dependencies:[Zt,J_e],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Slide Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-slide-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,he,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ae],encapsulation:2,changeDetection:1})}return o})();var fe=[`poPageSlide`];var re=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get isFullSize(){return this.size===`full`}get propertiesOptions(){return[{value:`click-out`,label:`Click Out`,disabled:this.isFullSize},{value:`hide-close`,label:`Hide Close`}]}sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`},{label:`Full`,value:`full`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}closePage(){this.poPageSlide.close()}onChangeSize(){this.isFullSize&&this.properties.includes(`click-out`)&&(this.properties=this.properties.filter(d=>d!==`click-out`))}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&Zl(fe,5),l&2){let m;lo(m=uo())&&(n.poPageSlide=m.first)}},standalone:!1,decls:18,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-kind`,`secondary`,`p-label`,`Cancelar`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Fechar`,3,`p-click`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`No modo full a página ocupa 100% da largura, portanto não há área externa para clicar e a propriedade Click Out não é aplicável. Utilize o botão do cabeçalho, a tecla Esc ou um botão no rodapé para fechar.`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let m=Vx();Ml(0,`po-page-slide`,2,0),mN(2),Ml(3,`po-page-slide-footer`)(4,`po-button`,3),ht(`p-click`,function(){return n.closePage()}),lg(),Ml(5,`po-button`,4),ht(`p-click`,function(){return n.closePage()}),lg()()(),Ml(6,`po-button`,5),ht(`p-click`,function(){return n.openPage()}),lg(),ql(7,`po-divider`),Ml(8,`form`,null,1)(10,`po-input`,6),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.title,a)||(n.title=a),Jy(a)}),lg(),f0(),Ml(11,`po-input`,7),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.subtitle,a)||(n.subtitle=a),Jy(a)}),lg(),f0(),Ml(12,`po-input`,8),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.content,a)||(n.content=a),Jy(a)}),lg(),f0(),Ml(13,`po-checkbox-group`,9),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.properties,a)||(n.properties=a),Jy(a)}),lg(),f0(),Ml(14,`po-radio-group`,10),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.size,a)||(n.size=a),Jy(a)}),ht(`ngModelChange`,function(){return n.onChangeSize()}),lg(),f0(),Ml(15,`po-radio-group`,11),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.componentsSize,a)||(n.componentsSize=a),Jy(a)}),lg(),f0(),Ml(16,`div`,12)(17,`po-button`,13),ht(`p-click`,function(){return n.restore()}),lg()()()}if(l&2){let m=Yx(9);cw(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),Up(2),gg(` `,n.content,` `),Up(4),cw(`p-disabled`,m.form.invalid),Up(4),Tw(`ngModel`,n.title),p0(),Up(),Tw(`ngModel`,n.subtitle),p0(),Up(),Tw(`ngModel`,n.content),p0(),Up(),Tw(`ngModel`,n.properties),cw(`p-options`,n.propertiesOptions),p0(),Up(),Tw(`ngModel`,n.size),cw(`p-options`,n.sizeOptions),p0(),Up(),Tw(`ngModel`,n.componentsSize),cw(`p-options`,n.componentsSizeOptions),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,J_e,X_e],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Slide Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-slide
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-slide-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Pe,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{router=f(Cn);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=Vx();Ml(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.bluetooth,a)||(n.bluetooth=a),Jy(a)}),lg(),f0(),Ml(4,`po-switch`,4),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.locked,a)||(n.locked=a),Jy(a)}),lg(),f0(),lg(),Ml(5,`div`,2)(6,`po-switch`,5),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.microphone,a)||(n.microphone=a),Jy(a)}),lg(),f0(),Ml(7,`po-switch`,6),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.notification,a)||(n.notification=a),Jy(a)}),lg(),f0(),lg(),Ml(8,`div`,2)(9,`po-switch`,7),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.localization,a)||(n.localization=a),Jy(a)}),lg(),f0(),Ml(10,`po-switch`,8),Mw(`ngModelChange`,function(a){return Qy(m),yN(n.favorited,a)||(n.favorited=a),Jy(a)}),lg(),f0(),lg(),ql(11,`po-divider`),Ml(12,`h2`,9),mN(13,`About Page Slide`),lg(),Ml(14,`section`,10)(15,`h3`,11),mN(16,`Usage`),lg(),Ml(17,`ul`,12)(18,`li`),mN(19,`To reveal additional navigation controls`),lg(),Ml(20,`li`),mN(21,`In TV or mobile space since controls and/or space is limited`),lg(),Ml(22,`li`),mN(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),lg(),Ml(24,`li`),mN(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),lg()()(),Ml(26,`section`,10)(27,`h3`,11),mN(28,`Challenges`),lg(),Ml(29,`ul`,12)(30,`li`),mN(31,`Discoverability`),lg(),Ml(32,`li`),mN(33,`Losing context with the rest of the page`),lg(),Ml(34,`li`),mN(35,`Make the disruption work for you`),lg()()(),Ml(36,`section`,10)(37,`h3`,11),mN(38,`Recommendations`),lg(),Ml(39,`ul`,12)(40,`li`),mN(41,`Use it sparingly only for major context switches`),lg(),Ml(42,`li`),mN(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),lg(),Ml(44,`li`),mN(45,`Make the activation/deactivation dead simple`),lg()()(),Ml(46,`p`),mN(47,` For more information visit `),Ml(48,`a`,13),mN(49,`Designing Web Interfaces: Page Slide`),lg()(),Ml(50,`po-page-slide-footer`)(51,`po-button`,14),ht(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),lg()()(),Ml(52,`div`,15)(53,`po-button`,16),ht(`p-click`,function(){Qy(m);return Jy(Yx(1).open())}),lg()()}l&2&&(Up(3),Tw(`ngModel`,n.bluetooth),p0(),Up(),Tw(`ngModel`,n.locked),p0(),Up(2),Tw(`ngModel`,n.microphone),p0(),Up(),Tw(`ngModel`,n.notification),p0(),Up(2),Tw(`ngModel`,n.localization),p0(),Up(),Tw(`ngModel`,n.favorited),p0())},dependencies:[wY,Vk,Zt,nb,J4,J_e,X_e],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Slide - Configuration`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-slide-configuration`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:568,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageSlideSize`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,n){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ml(7,`code`),mN(8,`po-page-default`),lg(),mN(9,`, `),Ml(10,`code`),mN(11,`po-page-detail`),lg(),mN(12,`,
`),Ml(13,`code`),mN(14,`po-page-edit`),lg(),mN(15,`, `),Ml(16,`code`),mN(17,`po-page-list`),lg(),mN(18,` e `),Ml(19,`code`),mN(20,`po-page-slide`),lg(),mN(21,`.`),lg()(),Ml(22,`h3`,3),mN(23,`Componente`),lg(),Ml(24,`h4`,4)(25,`code`,5),mN(26,`PoPageSlideComponent`),lg()(),Ml(27,`div`,2)(28,`p`),mN(29,`O componente `),Ml(30,`code`),mN(31,`po-page-slide`),lg(),mN(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),lg(),Ml(33,`p`),mN(34,`Este componente é ativado a partir do método `),Ml(35,`code`),mN(36,`#open()`),lg(),mN(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),Ml(38,`code`),mN(39,`#close()`),lg(),mN(40,`.`),lg(),Ml(41,`p`),mN(42,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),Ml(43,`a`,6),mN(44,`Grid System`),lg(),mN(45,`.`),lg(),Ml(46,`p`),mN(47,`No rodapé é possível utilizar o componente `),Ml(48,`a`,7)(49,`code`),mN(50,`PoPageSlideFooter`),lg()(),mN(51,` para customização do template.`),lg(),Ml(52,`ul`)(53,`li`)(54,`h4`),mN(55,`Tokens customizáveis`),lg()()(),Ml(56,`p`),mN(57,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(58,`blockquote`)(59,`p`),mN(60,`Para maiores informações, acesse o guia `),Ml(61,`a`,8),mN(62,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(63,`.`),lg()(),Ml(64,`table`)(65,`thead`)(66,`tr`)(67,`th`),mN(68,`Propriedade`),lg(),Ml(69,`th`),mN(70,`Descrição`),lg(),Ml(71,`th`),mN(72,`Valor Padrão`),lg()()(),Ml(73,`tbody`)(74,`tr`)(75,`td`)(76,`code`),mN(77,`--font-family`),lg()(),Ml(78,`td`),mN(79,`Família tipográfica usada`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--font-family-theme)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--font-weight`),lg()(),Ml(87,`td`),mN(88,`Peso da fonte`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--font-weight-bold)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--padding-header`),lg()(),Ml(96,`td`),mN(97,`Espaçamento do header`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--spacing-md)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--padding-body`),lg()(),Ml(105,`td`),mN(106,`Espaçamento do conteúdo`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--line-height-none)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--padding-footer`),lg()(),Ml(114,`td`),mN(115,`Espaçamento do footer`),lg(),Ml(116,`td`)(117,`code`),mN(118,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`strong`),mN(122,`Default Values`),lg()(),ql(123,`td`)(124,`td`),lg(),Ml(125,`tr`)(126,`td`)(127,`code`),mN(128,`--color-overlay`),lg()(),Ml(129,`td`),mN(130,`Cor do overlay`),lg(),Ml(131,`td`)(132,`code`),mN(133,`var(--color-neutral-dark-80)`),lg()()(),Ml(134,`tr`)(135,`td`)(136,`code`),mN(137,`--opacity-overlay`),lg()(),Ml(138,`td`),mN(139,`Cor da opacidade do overlay`),lg(),Ml(140,`td`)(141,`code`),mN(142,`0.7`),lg()()(),Ml(143,`tr`)(144,`td`)(145,`code`),mN(146,`--background-color`),lg()(),Ml(147,`td`),mN(148,`Cor de background`),lg(),Ml(149,`td`)(150,`code`),mN(151,`var(--color-neutral-light-00)`),lg()()(),Ml(152,`tr`)(153,`td`)(154,`code`),mN(155,`--border-color`),lg()(),Ml(156,`td`),mN(157,`Cor da borda`),lg(),Ml(158,`td`)(159,`code`),mN(160,`var(--color-neutral-light-20)`),lg()()(),Ml(161,`tr`)(162,`td`)(163,`code`),mN(164,`--color-title`),lg()(),Ml(165,`td`),mN(166,`Cor do titulo do header`),lg(),Ml(167,`td`)(168,`code`),mN(169,`var(--color-neutral-dark-95)`),lg()()(),Ml(170,`tr`)(171,`td`)(172,`code`),mN(173,`--border-radius`),lg()(),Ml(174,`td`),mN(175,`Radius da borda`),lg(),Ml(176,`td`)(177,`code`),mN(178,`var(--border-radius-md) 0 0 var(--border-radius-md)`),lg()()(),Ml(179,`tr`)(180,`td`)(181,`code`),mN(182,`--transition-duration`),lg()(),Ml(183,`td`),mN(184,`Duração da transição`),lg(),Ml(185,`td`)(186,`code`),mN(187,`var(--duration-extra-fast)`),lg()()(),Ml(188,`tr`)(189,`td`)(190,`code`),mN(191,`--transition-timing`),lg()(),Ml(192,`td`),mN(193,`Duração da transição com o tipo de transição`),lg(),Ml(194,`td`)(195,`code`),mN(196,`var(--duration-extra-slow) var(--timing-standart)`),lg()()(),Ml(197,`tr`)(198,`td`)(199,`code`),mN(200,`--page-slide-width-sm`),lg()(),Ml(201,`td`),mN(202,`Tamanho da largura do componente no tamanho `),Ml(203,`code`),mN(204,`small`),lg()(),Ml(205,`td`)(206,`code`),mN(207,`40%`),lg()()(),Ml(208,`tr`)(209,`td`)(210,`code`),mN(211,`--page-slide-width-md`),lg()(),Ml(212,`td`),mN(213,`Tamanho da largura do componente no tamanho `),Ml(214,`code`),mN(215,`medium`),lg()(),Ml(216,`td`)(217,`code`),mN(218,`50%`),lg()()(),Ml(219,`tr`)(220,`td`)(221,`code`),mN(222,`--page-slide-width-lg`),lg()(),Ml(223,`td`),mN(224,`Tamanho da largura do componente no tamanho `),Ml(225,`code`),mN(226,`large`),lg()(),Ml(227,`td`)(228,`code`),mN(229,`60%`),lg()()(),Ml(230,`tr`)(231,`td`)(232,`code`),mN(233,`--page-slide-width-xl`),lg()(),Ml(234,`td`),mN(235,`Tamanho da largura do componente no tamanho `),Ml(236,`code`),mN(237,`extra large`),lg()(),Ml(238,`td`)(239,`code`),mN(240,`70%`),lg()()(),Ml(241,`tr`)(242,`td`)(243,`code`),mN(244,`--page-slide-min-width-auto`),lg()(),Ml(245,`td`),mN(246,`Tamanho da largura mínima do componente no tamanho `),Ml(247,`code`),mN(248,`auto`),lg()(),Ml(249,`td`)(250,`code`),mN(251,`40%`),lg()()(),Ml(252,`tr`)(253,`td`)(254,`code`),mN(255,`--page-slide-max-width-auto`),lg()(),Ml(256,`td`),mN(257,`Tamanho da largura máxima do componente no tamanho `),Ml(258,`code`),mN(259,`auto`),lg()(),Ml(260,`td`)(261,`code`),mN(262,`90%`),lg()()()()()(),Ml(263,`div`,9)(264,`h4`,10),mN(265,`Seletor`),lg(),Ml(266,`pre`,11),mN(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="PoPageSlideSize"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),lg()(),Ml(268,`h4`,12),mN(269,`Propriedades`),lg(),Ml(270,`table`,13)(271,`tr`,14)(272,`th`,15),mN(273,`Nome`),lg(),Ml(274,`th`,15),mN(275,`Tipo`),lg(),Ml(276,`th`,15),mN(277,`Padrão`),lg(),Ml(278,`th`,15),mN(279,`Descrição`),lg()(),Ml(280,`tr`,16)(281,`td`,17)(282,`div`,18)(283,`span`,19),mN(284,` p-click-out`),ql(285,`br`),lg()()(),Ml(286,`td`,20)(287,`code`,21),mN(288,`boolean`),lg()(),Ml(289,`td`,22)(290,`p`)(291,`code`),mN(292,`false`),lg()()(),Ml(293,`td`,23)(294,`em`)(295,`strong`),mN(296,`(opcional)`),lg()(),Ml(297,`p`),mN(298,`Define se permite o encerramento da página ao clicar fora da mesma.`),lg()()(),Ml(299,`tr`,16)(300,`td`,17)(301,`div`,24)(302,`span`,25),mN(303,` (p-close)`),ql(304,`br`),lg()()(),Ml(305,`td`,20)(306,`code`,26),mN(307,`EventEmitter`),lg()(),Ml(308,`td`,22),mN(309,`-`),lg(),Ml(310,`td`,23)(311,`em`)(312,`strong`),mN(313,`(opcional)`),lg()(),Ml(314,`p`),mN(315,`Evento executado ao fechar o page slide.`),lg()()(),Ml(316,`tr`,16)(317,`td`,17)(318,`div`,18)(319,`span`,19),mN(320,` p-components-size`),ql(321,`br`),lg()()(),Ml(322,`td`,20)(323,`code`,27),mN(324,`string`),lg()(),Ml(325,`td`,22)(326,`p`)(327,`code`),mN(328,`medium`),lg()()(),Ml(329,`td`,23)(330,`em`)(331,`strong`),mN(332,`(opcional)`),lg()(),Ml(333,`p`),mN(334,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(335,`ul`)(336,`li`)(337,`code`),mN(338,`small`),lg(),mN(339,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(340,`li`)(341,`code`),mN(342,`medium`),lg(),mN(343,`: aplica a medida medium de cada componente.`),lg()(),Ml(344,`blockquote`)(345,`p`),mN(346,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(347,`code`),mN(348,`medium`),lg(),mN(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(350,`a`,28),mN(351,`po-theme`),lg(),mN(352,`.`),lg()()()(),Ml(353,`tr`,16)(354,`td`,17)(355,`div`,18)(356,`span`,19),mN(357,` p-flexible-width`),ql(358,`br`),lg()()(),Ml(359,`td`,20)(360,`code`,21),mN(361,`boolean`),lg()(),Ml(362,`td`,22)(363,`p`)(364,`code`),mN(365,`false`),lg()()(),Ml(366,`td`,23)(367,`em`)(368,`strong`),mN(369,`(opcional)`),lg()(),Ml(370,`p`),mN(371,`Permite a expansão dinâmica da largura do `),Ml(372,`code`),mN(373,`po-page-slide`),lg(),mN(374,` quando `),Ml(375,`code`),mN(376,`p-size`),lg(),mN(377,` for `),Ml(378,`code`),mN(379,`auto`),lg(),mN(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),Ml(381,`code`),mN(382,`po-table`),lg(),mN(383,` dentro do `),Ml(384,`code`),mN(385,`po-page-slide`),lg()()()(),Ml(386,`tr`,16)(387,`td`,17)(388,`div`,18)(389,`span`,19),mN(390,` p-hide-close`),ql(391,`br`),lg()()(),Ml(392,`td`,20)(393,`code`,21),mN(394,`boolean`),lg()(),Ml(395,`td`,22)(396,`p`)(397,`code`),mN(398,`false`),lg()()(),Ml(399,`td`,23)(400,`em`)(401,`strong`),mN(402,`(opcional)`),lg()(),Ml(403,`p`),mN(404,`Oculta o botão de encerramento da página.`),lg(),Ml(405,`blockquote`)(406,`p`),mN(407,`Para evitar que o usu\xE1rio fique sem forma de fechar, esta op\xE7\xE3o s\xF3 \xE9 mantida quando houver uma
a\xE7\xE3o alternativa de fechamento: `),Ml(408,`code`),mN(409,`p-click-out`),lg(),mN(410,` habilitado ou, no modo `),Ml(411,`code`),mN(412,`full`),lg(),mN(413,`, um
`),Ml(414,`a`,7)(415,`code`),mN(416,`po-page-slide-footer`),lg()(),mN(417,` com a\xE7\xE3o de fechar.
Caso contr\xE1rio, o bot\xE3o de fechar \xE9 reexibido automaticamente ao abrir.`),lg()()()(),Ml(418,`tr`,16)(419,`td`,17)(420,`div`,18)(421,`span`,19),mN(422,` p-size`),ql(423,`br`),lg()()(),Ml(424,`td`,20)(425,`code`,29),mN(426,`PoPageSlideSize`),lg()(),Ml(427,`td`,22)(428,`p`)(429,`code`),mN(430,`md`),lg()()(),Ml(431,`td`,23)(432,`em`)(433,`strong`),mN(434,`(opcional)`),lg()(),Ml(435,`p`),mN(436,`Define o tamanho da página.`),lg(),Ml(437,`p`),mN(438,`Valores válidos:`),lg(),Ml(439,`ul`)(440,`li`)(441,`code`),mN(442,`sm`),lg(),mN(443,` (pequeno)`),lg(),Ml(444,`li`)(445,`code`),mN(446,`md`),lg(),mN(447,` (médio)`),lg(),Ml(448,`li`)(449,`code`),mN(450,`lg`),lg(),mN(451,` (grande)`),lg(),Ml(452,`li`)(453,`code`),mN(454,`xl`),lg(),mN(455,` (extra-grande)`),lg(),Ml(456,`li`)(457,`code`),mN(458,`auto`),lg(),mN(459,` (automático)`),lg(),Ml(460,`li`)(461,`code`),mN(462,`full`),lg(),mN(463,` (tela cheia): a página ocupa 100% da largura da tela e o overlay de fundo não é renderizado.`),lg()(),Ml(464,`blockquote`)(465,`p`),mN(466,`Todas as opções de tamanho, exceto `),Ml(467,`code`),mN(468,`auto`),lg(),mN(469,` e `),Ml(470,`code`),mN(471,`full`),lg(),mN(472,`, possuem uma largura máxima de `),Ml(473,`strong`),mN(474,`768px`),lg(),mN(475,`.`),lg()(),Ml(476,`blockquote`)(477,`p`),mN(478,`No modo `),Ml(479,`code`),mN(480,`full`),lg(),mN(481,`, como não há overlay, o fechamento por clique fora (`),Ml(482,`code`),mN(483,`p-click-out`),lg(),mN(484,`) n\xE3o \xE9 aplic\xE1vel.
O encerramento continua dispon\xEDvel pelo bot\xE3o do cabe\xE7alho, pela tecla `),Ml(485,`code`),mN(486,`Escape`),lg(),mN(487,`, pelo método `),Ml(488,`code`),mN(489,`#close()`),lg(),mN(490,`
ou por um bot\xE3o no `),Ml(491,`a`,7)(492,`code`),mN(493,`po-page-slide-footer`),lg()(),mN(494,`.`),lg()()()(),Ml(495,`tr`,16)(496,`td`,17)(497,`div`,18)(498,`span`,19),mN(499,` p-subtitle`),ql(500,`br`),lg()()(),Ml(501,`td`,20)(502,`code`,27),mN(503,`string`),lg()(),Ml(504,`td`,22),mN(505,`-`),lg(),Ml(506,`td`,23)(507,`em`)(508,`strong`),mN(509,`(opcional)`),lg()(),Ml(510,`p`),mN(511,`Subtítulo da página.`),lg()()(),Ml(512,`tr`,16)(513,`td`,17)(514,`div`,18)(515,`span`,19),mN(516,` p-title`),ql(517,`br`),lg()()(),Ml(518,`td`,20)(519,`code`,27),mN(520,`string`),lg()(),Ml(521,`td`,22),mN(522,`-`),lg(),Ml(523,`td`,23)(524,`p`),mN(525,`Título da página.`),lg()()()(),Ml(526,`h3`,12),mN(527,`Métodos`),lg(),Ml(528,`table`,30)(529,`tr`,16)(530,`th`,31)(531,`div`,18)(532,`h4`)(533,`span`,19),mN(534,` open `),lg()()()()(),Ml(535,`tr`,23)(536,`td`,23)(537,`p`),mN(538,`Ativa a visualização da página.`),lg(),Ml(539,`p`),mN(540,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Ml(541,`code`),mN(542,`ViewChild`),lg(),mN(543,` da seguinte forma:`),lg(),Ml(544,`pre`)(545,`code`,32),mN(546,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),lg()()()()(),ql(547,`br`),Ml(548,`table`,30)(549,`tr`,16)(550,`th`,31)(551,`div`,18)(552,`h4`)(553,`span`,19),mN(554,` close `),lg()()()()(),Ml(555,`tr`,23)(556,`td`,23)(557,`p`),mN(558,`Encerra a visualização da página.`),lg(),Ml(559,`p`),mN(560,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),Ml(561,`code`),mN(562,`ViewChild`),lg(),mN(563,` da seguinte forma:`),lg(),Ml(564,`pre`)(565,`code`,32),mN(566,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),lg()()()()(),ql(567,`br`),lg())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-page-slide-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-page-slide-basic-view`)(6,`sample-po-page-slide-labs-view`)(7,`sample-po-page-slide-configuration-view`),lg()()()),l&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,de,se,ce],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[NL.forChild(ke),NL]})}return o})();var tt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=he$1({type:o});static ɵinj=ue({imports:[ar,ge]})}return o})();export{tt as DocPoPageSlideModule};