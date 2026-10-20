import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,I as Hie,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Mn as w5,Pi as mt,Ri as nu,Si as iu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,yt as Uie,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ae=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-slide-basic`]],standalone:!1,decls:5,vars:0,consts:[[`pageSlide`,``],[`p-title`,`Po Page Slide Title`],[1,`po-row`],[`p-label`,`View Page Slide`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=Sx();jc(0,`po-page-slide`,1,0),iO(2,` Hello World! `),wg(),jc(3,`div`,2)(4,`po-button`,3),mt(`p-click`,function(){y_(m);let a=Fx(1);return v_(a.open())}),wg()()}},dependencies:[ni,Uie],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-slide-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Slide Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-slide-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,he,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ae],encapsulation:2,changeDetection:1})}return o})();var fe=[`poPageSlide`];var re=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get isFullSize(){return this.size===`full`}get propertiesOptions(){return[{value:`click-out`,label:`Click Out`,disabled:this.isFullSize},{value:`hide-close`,label:`Hide Close`}]}sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`},{label:`Full`,value:`full`}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}closePage(){this.poPageSlide.close()}onChangeSize(){this.isFullSize&&this.properties.includes(`click-out`)&&(this.properties=this.properties.filter(d=>d!==`click-out`))}restore(){this.componentsSize=`medium`,this.hideClose=!1,this.title=``,this.subtitle=``,this.content=``,this.size=`md`,this.properties=[]}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-slide-labs`]],viewQuery:function(l,n){if(l&1&&iu(fe,5),l&2){let m;vo(m=_o())&&(n.poPageSlide=m.first)}},standalone:!1,decls:18,vars:17,consts:[[`poPageSlide`,``],[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-size`,`p-subtitle`,`p-title`],[`p-kind`,`secondary`,`p-label`,`Cancelar`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Fechar`,3,`p-click`],[`p-label`,`Open Page Slide`,3,`p-click`,`p-disabled`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Subtitle`,`p-clean`,``,`p-label`,`Subtitle`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`No modo full a página ocupa 100% da largura, portanto não há área externa para clicar e a propriedade Click Out não é aplicável. Utilize o botão do cabeçalho, a tecla Esc ou um botão no rodapé para fechar.`,`p-optional`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let m=Sx();jc(0,`po-page-slide`,2,0),iO(2),jc(3,`po-page-slide-footer`)(4,`po-button`,3),mt(`p-click`,function(){return n.closePage()}),wg(),jc(5,`po-button`,4),mt(`p-click`,function(){return n.closePage()}),wg()()(),jc(6,`po-button`,5),mt(`p-click`,function(){return n.openPage()}),wg(),nu(7,`po-divider`),jc(8,`form`,null,1)(10,`po-input`,6),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.title,a)||(n.title=a),v_(a)}),wg(),jc(11,`po-input`,7),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.subtitle,a)||(n.subtitle=a),v_(a)}),wg(),jc(12,`po-input`,8),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.content,a)||(n.content=a),v_(a)}),wg(),jc(13,`po-checkbox-group`,9),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.properties,a)||(n.properties=a),v_(a)}),wg(),jc(14,`po-radio-group`,10),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.size,a)||(n.size=a),v_(a)}),mt(`ngModelChange`,function(){return n.onChangeSize()}),wg(),jc(15,`po-radio-group`,11),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.componentsSize,a)||(n.componentsSize=a),v_(a)}),wg(),jc(16,`div`,12)(17,`po-button`,13),mt(`p-click`,function(){return n.restore()}),wg()()()}if(l&2){let m=Fx(9);jE(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-size`,n.size)(`p-subtitle`,n.subtitle)(`p-title`,n.title),rg(2),Ag(` `,n.content,` `),rg(4),jE(`p-disabled`,m.form.invalid),rg(4),ib(`ngModel`,n.title),t0(),rg(),ib(`ngModel`,n.subtitle),t0(),rg(),ib(`ngModel`,n.content),t0(),rg(),ib(`ngModel`,n.properties),jE(`p-options`,n.propertiesOptions),t0(),rg(),ib(`ngModel`,n.size),jE(`p-options`,n.sizeOptions),t0(),rg(),ib(`ngModel`,n.componentsSize),jE(`p-options`,n.componentsSizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,Uie,Hie],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-slide-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Slide Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-slide
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-slide-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Pe,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,re],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{router=p(Sn);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate([`documentation`,`po-page-slide-footer`])}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-slide-configuration`]],standalone:!1,decls:54,vars:6,consts:[[`pageSlide`,``],[`p-title`,`Configuration`,`p-size`,`sm`],[1,`po-row`,`po-mb-2`],[`p-label-off`,`Bluetooth`,`p-label-on`,`Bluetooth`,`name`,`bluetooth`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Unlocked`,`p-label-on`,`Locked`,`name`,`locked`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Microphone`,`p-label-on`,`Microphone`,`name`,`microphone`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Notification`,`p-label-on`,`Notification`,`name`,`notification`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Localization`,`p-label-on`,`Localization`,`name`,`localization`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[`p-label-off`,`Not favorited`,`p-label-on`,`Favorited`,`name`,`favorited`,1,`po-sm-6`,3,`ngModelChange`,`ngModel`],[1,`po-font-title`],[1,`po-m-2`],[1,`po-font-subtitle`,`po-mb-1`],[1,`po-ml-2`],[`href`,`http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern`,`target`,`_blank`,`rel`,`noopener`],[`p-label`,`Check footer`,3,`p-click`],[1,`po-row`],[`p-label`,`Open Configuration`,1,`po-sm-3`,3,`p-click`]],template:function(l,n){if(l&1){let m=Sx();jc(0,`po-page-slide`,1,0)(2,`div`,2)(3,`po-switch`,3),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.bluetooth,a)||(n.bluetooth=a),v_(a)}),wg(),jc(4,`po-switch`,4),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.locked,a)||(n.locked=a),v_(a)}),wg()(),jc(5,`div`,2)(6,`po-switch`,5),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.microphone,a)||(n.microphone=a),v_(a)}),wg(),jc(7,`po-switch`,6),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.notification,a)||(n.notification=a),v_(a)}),wg()(),jc(8,`div`,2)(9,`po-switch`,7),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.localization,a)||(n.localization=a),v_(a)}),wg(),jc(10,`po-switch`,8),JN(),ob(`ngModelChange`,function(a){return y_(m),sO(n.favorited,a)||(n.favorited=a),v_(a)}),wg()(),nu(11,`po-divider`),jc(12,`h2`,9),iO(13,`About Page Slide`),wg(),jc(14,`section`,10)(15,`h3`,11),iO(16,`Usage`),wg(),jc(17,`ul`,12)(18,`li`),iO(19,`To reveal additional navigation controls`),wg(),jc(20,`li`),iO(21,`In TV or mobile space since controls and/or space is limited`),wg(),jc(22,`li`),iO(23,`To expose a configuration panel (similar to the Module Configure Pattern)`),wg(),jc(24,`li`),iO(25,` To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) `),wg()()(),jc(26,`section`,10)(27,`h3`,11),iO(28,`Challenges`),wg(),jc(29,`ul`,12)(30,`li`),iO(31,`Discoverability`),wg(),jc(32,`li`),iO(33,`Losing context with the rest of the page`),wg(),jc(34,`li`),iO(35,`Make the disruption work for you`),wg()()(),jc(36,`section`,10)(37,`h3`,11),iO(38,`Recommendations`),wg(),jc(39,`ul`,12)(40,`li`),iO(41,`Use it sparingly only for major context switches`),wg(),jc(42,`li`),iO(43,`Make the animation fast. No reason to wow the user with your ability to scroll`),wg(),jc(44,`li`),iO(45,`Make the activation/deactivation dead simple`),wg()()(),jc(46,`p`),iO(47,` For more information visit `),jc(48,`a`,13),iO(49,`Designing Web Interfaces: Page Slide`),wg()(),jc(50,`po-page-slide-footer`)(51,`po-button`,14),mt(`p-click`,function(){return n.openPageSlideFooterDocumentation()}),wg()()(),jc(52,`div`,15)(53,`po-button`,16),mt(`p-click`,function(){y_(m);let a=Fx(1);return v_(a.open())}),wg()()}l&2&&(rg(3),ib(`ngModel`,n.bluetooth),t0(),rg(),ib(`ngModel`,n.locked),t0(),rg(2),ib(`ngModel`,n.microphone),t0(),rg(),ib(`ngModel`,n.notification),t0(),rg(2),ib(`ngModel`,n.localization),t0(),rg(),ib(`ngModel`,n.favorited),t0())},dependencies:[CK,TF,ni,Lf,w5,Uie,Hie],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-slide-configuration-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Slide - Configuration`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-slide-configuration`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-slide-doc`]],standalone:!1,decls:568,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`/documentation/po-page-slide-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageSlideSize`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-typescript`]],template:function(l,n){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPageModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo responsável pelos componentes de estrutura de página: `),jc(7,`code`),iO(8,`po-page-default`),wg(),iO(9,`, `),jc(10,`code`),iO(11,`po-page-detail`),wg(),iO(12,`,
`),jc(13,`code`),iO(14,`po-page-edit`),wg(),iO(15,`, `),jc(16,`code`),iO(17,`po-page-list`),wg(),iO(18,` e `),jc(19,`code`),iO(20,`po-page-slide`),wg(),iO(21,`.`),wg()(),jc(22,`h3`,3),iO(23,`Componente`),wg(),jc(24,`h4`,4)(25,`code`,5),iO(26,`PoPageSlideComponent`),wg()(),jc(27,`div`,2)(28,`p`),iO(29,`O componente `),jc(30,`code`),iO(31,`po-page-slide`),wg(),iO(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),wg(),jc(33,`p`),iO(34,`Este componente é ativado a partir do método `),jc(35,`code`),iO(36,`#open()`),wg(),iO(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),jc(38,`code`),iO(39,`#close()`),wg(),iO(40,`.`),wg(),jc(41,`p`),iO(42,` Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do `),jc(43,`a`,6),iO(44,`Grid System`),wg(),iO(45,`.`),wg(),jc(46,`p`),iO(47,`No rodapé é possível utilizar o componente `),jc(48,`a`,7)(49,`code`),iO(50,`PoPageSlideFooter`),wg()(),iO(51,` para customização do template.`),wg(),jc(52,`ul`)(53,`li`)(54,`h4`),iO(55,`Tokens customizáveis`),wg()()(),jc(56,`p`),iO(57,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(58,`blockquote`)(59,`p`),iO(60,`Para maiores informações, acesse o guia `),jc(61,`a`,8),iO(62,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(63,`.`),wg()(),jc(64,`table`)(65,`thead`)(66,`tr`)(67,`th`),iO(68,`Propriedade`),wg(),jc(69,`th`),iO(70,`Descrição`),wg(),jc(71,`th`),iO(72,`Valor Padrão`),wg()()(),jc(73,`tbody`)(74,`tr`)(75,`td`)(76,`code`),iO(77,`--font-family`),wg()(),jc(78,`td`),iO(79,`Família tipográfica usada`),wg(),jc(80,`td`)(81,`code`),iO(82,`var(--font-family-theme)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),iO(86,`--font-weight`),wg()(),jc(87,`td`),iO(88,`Peso da fonte`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--font-weight-bold)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--padding-header`),wg()(),jc(96,`td`),iO(97,`Espaçamento do header`),wg(),jc(98,`td`)(99,`code`),iO(100,`var(--spacing-md)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--padding-body`),wg()(),jc(105,`td`),iO(106,`Espaçamento do conteúdo`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--line-height-none)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),iO(113,`--padding-footer`),wg()(),jc(114,`td`),iO(115,`Espaçamento do footer`),wg(),jc(116,`td`)(117,`code`),iO(118,`var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)`),wg()()(),jc(119,`tr`)(120,`td`)(121,`strong`),iO(122,`Default Values`),wg()(),nu(123,`td`)(124,`td`),wg(),jc(125,`tr`)(126,`td`)(127,`code`),iO(128,`--color-overlay`),wg()(),jc(129,`td`),iO(130,`Cor do overlay`),wg(),jc(131,`td`)(132,`code`),iO(133,`var(--color-neutral-dark-80)`),wg()()(),jc(134,`tr`)(135,`td`)(136,`code`),iO(137,`--opacity-overlay`),wg()(),jc(138,`td`),iO(139,`Cor da opacidade do overlay`),wg(),jc(140,`td`)(141,`code`),iO(142,`0.7`),wg()()(),jc(143,`tr`)(144,`td`)(145,`code`),iO(146,`--background-color`),wg()(),jc(147,`td`),iO(148,`Cor de background`),wg(),jc(149,`td`)(150,`code`),iO(151,`var(--color-neutral-light-00)`),wg()()(),jc(152,`tr`)(153,`td`)(154,`code`),iO(155,`--border-color`),wg()(),jc(156,`td`),iO(157,`Cor da borda`),wg(),jc(158,`td`)(159,`code`),iO(160,`var(--color-neutral-light-20)`),wg()()(),jc(161,`tr`)(162,`td`)(163,`code`),iO(164,`--color-title`),wg()(),jc(165,`td`),iO(166,`Cor do titulo do header`),wg(),jc(167,`td`)(168,`code`),iO(169,`var(--color-neutral-dark-95)`),wg()()(),jc(170,`tr`)(171,`td`)(172,`code`),iO(173,`--border-radius`),wg()(),jc(174,`td`),iO(175,`Radius da borda`),wg(),jc(176,`td`)(177,`code`),iO(178,`var(--border-radius-md) 0 0 var(--border-radius-md)`),wg()()(),jc(179,`tr`)(180,`td`)(181,`code`),iO(182,`--transition-duration`),wg()(),jc(183,`td`),iO(184,`Duração da transição`),wg(),jc(185,`td`)(186,`code`),iO(187,`var(--duration-extra-fast)`),wg()()(),jc(188,`tr`)(189,`td`)(190,`code`),iO(191,`--transition-timing`),wg()(),jc(192,`td`),iO(193,`Duração da transição com o tipo de transição`),wg(),jc(194,`td`)(195,`code`),iO(196,`var(--duration-extra-slow) var(--timing-standart)`),wg()()(),jc(197,`tr`)(198,`td`)(199,`code`),iO(200,`--page-slide-width-sm`),wg()(),jc(201,`td`),iO(202,`Tamanho da largura do componente no tamanho `),jc(203,`code`),iO(204,`small`),wg()(),jc(205,`td`)(206,`code`),iO(207,`40%`),wg()()(),jc(208,`tr`)(209,`td`)(210,`code`),iO(211,`--page-slide-width-md`),wg()(),jc(212,`td`),iO(213,`Tamanho da largura do componente no tamanho `),jc(214,`code`),iO(215,`medium`),wg()(),jc(216,`td`)(217,`code`),iO(218,`50%`),wg()()(),jc(219,`tr`)(220,`td`)(221,`code`),iO(222,`--page-slide-width-lg`),wg()(),jc(223,`td`),iO(224,`Tamanho da largura do componente no tamanho `),jc(225,`code`),iO(226,`large`),wg()(),jc(227,`td`)(228,`code`),iO(229,`60%`),wg()()(),jc(230,`tr`)(231,`td`)(232,`code`),iO(233,`--page-slide-width-xl`),wg()(),jc(234,`td`),iO(235,`Tamanho da largura do componente no tamanho `),jc(236,`code`),iO(237,`extra large`),wg()(),jc(238,`td`)(239,`code`),iO(240,`70%`),wg()()(),jc(241,`tr`)(242,`td`)(243,`code`),iO(244,`--page-slide-min-width-auto`),wg()(),jc(245,`td`),iO(246,`Tamanho da largura mínima do componente no tamanho `),jc(247,`code`),iO(248,`auto`),wg()(),jc(249,`td`)(250,`code`),iO(251,`40%`),wg()()(),jc(252,`tr`)(253,`td`)(254,`code`),iO(255,`--page-slide-max-width-auto`),wg()(),jc(256,`td`),iO(257,`Tamanho da largura máxima do componente no tamanho `),jc(258,`code`),iO(259,`auto`),wg()(),jc(260,`td`)(261,`code`),iO(262,`90%`),wg()()()()()(),jc(263,`div`,9)(264,`h4`,10),iO(265,`Seletor`),wg(),jc(266,`pre`,11),iO(267,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="PoPageSlideSize"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),wg()(),jc(268,`h4`,12),iO(269,`Propriedades`),wg(),jc(270,`table`,13)(271,`tr`,14)(272,`th`,15),iO(273,`Nome`),wg(),jc(274,`th`,15),iO(275,`Tipo`),wg(),jc(276,`th`,15),iO(277,`Padrão`),wg(),jc(278,`th`,15),iO(279,`Descrição`),wg()(),jc(280,`tr`,16)(281,`td`,17)(282,`div`,18)(283,`span`,19),iO(284,` p-click-out`),nu(285,`br`),wg()()(),jc(286,`td`,20)(287,`code`,21),iO(288,`boolean`),wg()(),jc(289,`td`,22)(290,`p`)(291,`code`),iO(292,`false`),wg()()(),jc(293,`td`,23)(294,`em`)(295,`strong`),iO(296,`(opcional)`),wg()(),jc(297,`p`),iO(298,`Define se permite o encerramento da página ao clicar fora da mesma.`),wg()()(),jc(299,`tr`,16)(300,`td`,17)(301,`div`,24)(302,`span`,25),iO(303,` (p-close)`),nu(304,`br`),wg()()(),jc(305,`td`,20)(306,`code`,26),iO(307,`EventEmitter`),wg()(),jc(308,`td`,22),iO(309,`-`),wg(),jc(310,`td`,23)(311,`em`)(312,`strong`),iO(313,`(opcional)`),wg()(),jc(314,`p`),iO(315,`Evento executado ao fechar o page slide.`),wg()()(),jc(316,`tr`,16)(317,`td`,17)(318,`div`,18)(319,`span`,19),iO(320,` p-components-size`),nu(321,`br`),wg()()(),jc(322,`td`,20)(323,`code`,27),iO(324,`string`),wg()(),jc(325,`td`,22)(326,`p`)(327,`code`),iO(328,`medium`),wg()()(),jc(329,`td`,23)(330,`em`)(331,`strong`),iO(332,`(opcional)`),wg()(),jc(333,`p`),iO(334,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(335,`ul`)(336,`li`)(337,`code`),iO(338,`small`),wg(),iO(339,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(340,`li`)(341,`code`),iO(342,`medium`),wg(),iO(343,`: aplica a medida medium de cada componente.`),wg()(),jc(344,`blockquote`)(345,`p`),iO(346,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(347,`code`),iO(348,`medium`),wg(),iO(349,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(350,`a`,28),iO(351,`po-theme`),wg(),iO(352,`.`),wg()()()(),jc(353,`tr`,16)(354,`td`,17)(355,`div`,18)(356,`span`,19),iO(357,` p-flexible-width`),nu(358,`br`),wg()()(),jc(359,`td`,20)(360,`code`,21),iO(361,`boolean`),wg()(),jc(362,`td`,22)(363,`p`)(364,`code`),iO(365,`false`),wg()()(),jc(366,`td`,23)(367,`em`)(368,`strong`),iO(369,`(opcional)`),wg()(),jc(370,`p`),iO(371,`Permite a expansão dinâmica da largura do `),jc(372,`code`),iO(373,`po-page-slide`),wg(),iO(374,` quando `),jc(375,`code`),iO(376,`p-size`),wg(),iO(377,` for `),jc(378,`code`),iO(379,`auto`),wg(),iO(380,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),jc(381,`code`),iO(382,`po-table`),wg(),iO(383,` dentro do `),jc(384,`code`),iO(385,`po-page-slide`),wg()()()(),jc(386,`tr`,16)(387,`td`,17)(388,`div`,18)(389,`span`,19),iO(390,` p-hide-close`),nu(391,`br`),wg()()(),jc(392,`td`,20)(393,`code`,21),iO(394,`boolean`),wg()(),jc(395,`td`,22)(396,`p`)(397,`code`),iO(398,`false`),wg()()(),jc(399,`td`,23)(400,`em`)(401,`strong`),iO(402,`(opcional)`),wg()(),jc(403,`p`),iO(404,`Oculta o botão de encerramento da página.`),wg(),jc(405,`blockquote`)(406,`p`),iO(407,`Para evitar que o usu\xE1rio fique sem forma de fechar, esta op\xE7\xE3o s\xF3 \xE9 mantida quando houver uma
a\xE7\xE3o alternativa de fechamento: `),jc(408,`code`),iO(409,`p-click-out`),wg(),iO(410,` habilitado ou, no modo `),jc(411,`code`),iO(412,`full`),wg(),iO(413,`, um
`),jc(414,`a`,7)(415,`code`),iO(416,`po-page-slide-footer`),wg()(),iO(417,` com a\xE7\xE3o de fechar.
Caso contr\xE1rio, o bot\xE3o de fechar \xE9 reexibido automaticamente ao abrir.`),wg()()()(),jc(418,`tr`,16)(419,`td`,17)(420,`div`,18)(421,`span`,19),iO(422,` p-size`),nu(423,`br`),wg()()(),jc(424,`td`,20)(425,`code`,29),iO(426,`PoPageSlideSize`),wg()(),jc(427,`td`,22)(428,`p`)(429,`code`),iO(430,`md`),wg()()(),jc(431,`td`,23)(432,`em`)(433,`strong`),iO(434,`(opcional)`),wg()(),jc(435,`p`),iO(436,`Define o tamanho da página.`),wg(),jc(437,`p`),iO(438,`Valores válidos:`),wg(),jc(439,`ul`)(440,`li`)(441,`code`),iO(442,`sm`),wg(),iO(443,` (pequeno)`),wg(),jc(444,`li`)(445,`code`),iO(446,`md`),wg(),iO(447,` (médio)`),wg(),jc(448,`li`)(449,`code`),iO(450,`lg`),wg(),iO(451,` (grande)`),wg(),jc(452,`li`)(453,`code`),iO(454,`xl`),wg(),iO(455,` (extra-grande)`),wg(),jc(456,`li`)(457,`code`),iO(458,`auto`),wg(),iO(459,` (automático)`),wg(),jc(460,`li`)(461,`code`),iO(462,`full`),wg(),iO(463,` (tela cheia): a página ocupa 100% da largura da tela e o overlay de fundo não é renderizado.`),wg()(),jc(464,`blockquote`)(465,`p`),iO(466,`Todas as opções de tamanho, exceto `),jc(467,`code`),iO(468,`auto`),wg(),iO(469,` e `),jc(470,`code`),iO(471,`full`),wg(),iO(472,`, possuem uma largura máxima de `),jc(473,`strong`),iO(474,`768px`),wg(),iO(475,`.`),wg()(),jc(476,`blockquote`)(477,`p`),iO(478,`No modo `),jc(479,`code`),iO(480,`full`),wg(),iO(481,`, como não há overlay, o fechamento por clique fora (`),jc(482,`code`),iO(483,`p-click-out`),wg(),iO(484,`) n\xE3o \xE9 aplic\xE1vel.
O encerramento continua dispon\xEDvel pelo bot\xE3o do cabe\xE7alho, pela tecla `),jc(485,`code`),iO(486,`Escape`),wg(),iO(487,`, pelo método `),jc(488,`code`),iO(489,`#close()`),wg(),iO(490,`
ou por um bot\xE3o no `),jc(491,`a`,7)(492,`code`),iO(493,`po-page-slide-footer`),wg()(),iO(494,`.`),wg()()()(),jc(495,`tr`,16)(496,`td`,17)(497,`div`,18)(498,`span`,19),iO(499,` p-subtitle`),nu(500,`br`),wg()()(),jc(501,`td`,20)(502,`code`,27),iO(503,`string`),wg()(),jc(504,`td`,22),iO(505,`-`),wg(),jc(506,`td`,23)(507,`em`)(508,`strong`),iO(509,`(opcional)`),wg()(),jc(510,`p`),iO(511,`Subtítulo da página.`),wg()()(),jc(512,`tr`,16)(513,`td`,17)(514,`div`,18)(515,`span`,19),iO(516,` p-title`),nu(517,`br`),wg()()(),jc(518,`td`,20)(519,`code`,27),iO(520,`string`),wg()(),jc(521,`td`,22),iO(522,`-`),wg(),jc(523,`td`,23)(524,`p`),iO(525,`Título da página.`),wg()()()(),jc(526,`h3`,12),iO(527,`Métodos`),wg(),jc(528,`table`,30)(529,`tr`,16)(530,`th`,31)(531,`div`,18)(532,`h4`)(533,`span`,19),iO(534,` open `),wg()()()()(),jc(535,`tr`,23)(536,`td`,23)(537,`p`),iO(538,`Ativa a visualização da página.`),wg(),jc(539,`p`),iO(540,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),jc(541,`code`),iO(542,`ViewChild`),wg(),iO(543,` da seguinte forma:`),wg(),jc(544,`pre`)(545,`code`,32),iO(546,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),wg()()()()(),nu(547,`br`),jc(548,`table`,30)(549,`tr`,16)(550,`th`,31)(551,`div`,18)(552,`h4`)(553,`span`,19),iO(554,` close `),wg()()()()(),jc(555,`tr`,23)(556,`td`,23)(557,`p`),iO(558,`Encerra a visualização da página.`),wg(),jc(559,`p`),iO(560,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),jc(561,`code`),iO(562,`ViewChild`),wg(),iO(563,` da seguinte forma:`),wg(),jc(564,`pre`)(565,`code`,32),iO(566,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),wg()()()()(),nu(567,`br`),wg())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Slide`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-page-slide-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-page-slide-basic-view`)(6,`sample-po-page-slide-labs-view`)(7,`sample-po-page-slide-configuration-view`),wg()()()),l&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,pe,de,se,ce],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[C1.forChild(ke),C1]})}return o})();var tt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[Ta,ge]})}return o})();export{tt as DocPoPageSlideModule};