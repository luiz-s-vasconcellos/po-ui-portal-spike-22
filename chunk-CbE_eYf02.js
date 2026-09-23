import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,X as KH,Xn as Cn,Yi as mN,Yn as Ce$1,Zr as Vk,_ as $8e,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,da as uo,dn as oU,ea as p0,ga as w,ir as I,jn as wp,kn as vr,l as ar,mr as MN,nr as HO,oa as ql,pt as Pbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-basic`]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&ql(0,`po-container`)},dependencies:[wp],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Container Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-container-basic/sample-po-container-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container></po-container>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-container-basic/sample-po-container-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-container-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,xe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:`noBorder`,label:`No Border`},{value:`noPadding`,label:`No Padding`}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-labs`]],standalone:!1,decls:13,vars:10,consts:[[`f`,`ngForm`],[3,`p-title`,`p-height`,`p-no-border`,`p-no-padding`],[1,`po-row`],[`name`,`title`,`p-label`,`Titulo`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Vx();Ml(0,`po-container`,1),mN(1),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,2)(6,`po-input`,3),Mw(`ngModelChange`,function(s){return Qy(m),yN(i.title,s)||(i.title=s),Jy(s)}),lg(),f0(),Ml(7,`po-number`,4),Mw(`ngModelChange`,function(s){return Qy(m),yN(i.height,s)||(i.height=s),Jy(s)}),lg(),f0(),Ml(8,`po-checkbox-group`,5),Mw(`ngModelChange`,function(s){return Qy(m),yN(i.properties,s)||(i.properties=s),Jy(s)}),lg(),f0(),lg(),Ml(9,`div`,2)(10,`po-textarea`,6),Mw(`ngModelChange`,function(s){return Qy(m),yN(i.content,s)||(i.content=s),Jy(s)}),lg(),f0(),lg(),Ml(11,`div`,2)(12,`po-button`,7),ht(`p-click`,function(){return i.restore()}),lg()()()}a&2&&(cw(`p-title`,i.title)(`p-height`,i.height)(`p-no-border`,i.properties.includes(`noBorder`))(`p-no-padding`,i.properties.includes(`noPadding`)),Up(),gg(` `,i.content,`
`),Up(5),Tw(`ngModel`,i.title),p0(),Up(),Tw(`ngModel`,i.height),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(2),Tw(`ngModel`,i.content),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,wp,nb,G4,lU,xbe,Pbe],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Container Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-container-labs/sample-po-container-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-container
  [p-title]="title"
  [p-height]="height"
  [p-no-border]="properties.includes('noBorder')"
  [p-no-padding]="properties.includes('noPadding')"
>
  { { content }}
</po-container>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Titulo"> </po-input>

    <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height"> </po-number>

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
    <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-container-labs/sample-po-container-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-labs',
  templateUrl: './sample-po-container-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerLabsComponent implements OnInit {
  content: string;
  title: string;
  height: number;
  properties: Array<string>;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'noBorder', label: 'No Border' },
    { value: 'noPadding', label: 'No Padding' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.title = undefined;
    this.content = undefined;
    this.height = undefined;
    this.properties = [];
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-container-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`packageVersion`,label:`Package version`},{property:`downloads`}]}getItems(){return[{cities:`São Paulo`,packageVersion:`3.0.0-beta.1`,downloads:`2000`},{cities:`Joinville`,packageVersion:`2.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,packageVersion:`3.0.0`,downloads:`250`},{cities:`Santa Catarina`,packageVersion:`1.9.1`,downloads:`100`},{cities:`Curitiba`,packageVersion:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,packageVersion:`1.9.1`,downloads:`250`},{cities:`Londrina`,packageVersion:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,packageVersion:`1.9.1`,downloads:`1100`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Me=[`formShare`];var ge=(()=>{class o{poNotification=f(Eu);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`Disable notification`,icon:`an an-bell`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Invalid email.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-dashboard`]],viewQuery:function(a,i){if(a&1&&Zl(Me,7)(vr,5),a&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first)}},standalone:!1,features:[Ce$1([U])],decls:38,vars:8,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,3,`p-actions`,`p-breadcrumb`],[1,`po-lg-6`],[`p-title`,`Daily visitors`,1,`po-lg-6`,`po-mb-1`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-container-dashboard`],[`p-title`,`Most viewed page`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Website status`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`NPM downloads`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Devforum PO questions`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Angular versions supported`,1,`po-lg-6`,`po-mb-1`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(a,i){if(a&1){let m=Vx();Ml(0,`po-page-default`,1)(1,`po-container`,2)(2,`po-widget`,3)(3,`div`,4),mN(4,`540`),lg(),Ml(5,`div`,5),mN(6,`www.po.com.br`),lg()(),Ml(7,`po-widget`,6)(8,`div`,4),mN(9,`300 views`),lg(),Ml(10,`div`,5),mN(11,`https://po-ui.io`),lg()(),Ml(12,`po-widget`,7)(13,`div`,4),mN(14,`Online`),lg(),Ml(15,`div`,5),mN(16,`21 days`),lg()(),Ml(17,`po-widget`,8)(18,`div`,4),mN(19,`266`),lg(),Ml(20,`div`,5),mN(21,`@po-ui/ng-components - 2.0.0`),lg()(),Ml(22,`po-widget`,9)(23,`div`,4),mN(24,`800 questions`),lg(),Ml(25,`div`,5),mN(26,`https://devforum.po.com.br`),lg()(),Ml(27,`po-widget`,10)(28,`div`,4),mN(29,`AngularJS - Angular 7`),lg(),Ml(30,`div`,5),mN(31,`Angular 7 most downloaded`),lg()()(),Ml(32,`po-container`,2),ql(33,`po-table`,11),lg()(),Ml(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),Mw(`ngModelChange`,function(s){return Qy(m),yN(i.email,s)||(i.email=s),Jy(s)}),lg(),f0(),lg()()}a&2&&(cw(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb),Up(33),cw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Up(),cw(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),Up(3),Tw(`ngModel`,i.email),p0())},dependencies:[IY,wY,CY,Vk,kk,wp,KH,vr,V8e,oU,$8e],styles:[`.sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}`],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Container - Dashboard`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-container-dashboard/sample-po-container-dashboard.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <po-container class="po-lg-6">
    <po-widget class="po-lg-6 po-mb-1" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-container-dashboard">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-container-dashboard">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-container-dashboard">21 days</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-container-dashboard">&#64;po-ui/ng-components - 2.0.0</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-container-dashboard">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-lg-6 po-mb-1" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 7</div>
      <div class="po-text-center sample-container-dashboard">Angular 7 most downloaded</div>
    </po-widget>
  </po-container>

  <po-container class="po-lg-6">
    <po-table [p-columns]="columns" [p-items]="items" p-striped="true" [p-hide-table-search]="false"> </po-table>
  </po-container>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-container-dashboard/sample-po-container-dashboard.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SampleDashboardService } from './sample-po-container-dashboard.service';

import {
  PoBreadcrumb,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoTableColumn
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-container-dashboard',
  templateUrl: './sample-po-container-dashboard.component.html',
  styleUrls: ['./sample-po-container-dashboard.component.css'],
  providers: [SampleDashboardService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerDashboardComponent implements AfterContentChecked, OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    {
      label: 'Disable notification',
      icon: 'an an-bell',
      action: this.disableNotification.bind(this),
      disabled: () => this.isSubscribed
    }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit() {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  ngAfterContentChecked() {
    this.shareAction.danger = this.formShare.invalid;
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Invalid email.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-container-dashboard/sample-po-container-dashboard.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'packageVersion', label: 'Package version' },
      { property: 'downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', packageVersion: '3.0.0-beta.1', downloads: '2000' },
      { cities: 'Joinville', packageVersion: '2.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', packageVersion: '3.0.0', downloads: '250' },
      { cities: 'Santa Catarina', packageVersion: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', packageVersion: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', packageVersion: '1.9.1', downloads: '250' },
      { cities: 'Londrina', packageVersion: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', packageVersion: '1.9.1', downloads: '1100' }
    ];
  }
}
`),lg()()(),Ml(25,`po-tab`,10)(26,`div`)(27,`label`,6),mN(28,`sample-po-container-dashboard/sample-po-container-dashboard.component.css`),lg(),Ml(29,`pre`,11),mN(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),lg()()()()(),Ml(31,`div`,12),ql(32,`sample-po-container-dashboard`),lg(),ql(33,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-doc`]],standalone:!1,decls:277,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoContainerModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente `),Ml(7,`code`),mN(8,`po-container`),lg(),mN(9,`.`),lg()(),Ml(10,`h3`,3),mN(11,`Componente`),lg(),Ml(12,`h4`,4)(13,`code`,5),mN(14,`PoContainerComponent`),lg()(),Ml(15,`div`,2)(16,`p`),mN(17,`O `),Ml(18,`code`),mN(19,`po-container`),lg(),mN(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Ml(21,`a`,6),mN(22,`Grid System`),lg(),mN(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),lg(),Ml(24,`h4`),mN(25,`Tokens customizáveis`),lg(),Ml(26,`p`),mN(27,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),lg(),Ml(28,`blockquote`)(29,`p`),mN(30,`Para maiores informações, acesse o guia `),Ml(31,`a`,7),mN(32,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(33,`.`),lg()(),Ml(34,`table`)(35,`thead`)(36,`tr`)(37,`th`),mN(38,`Propriedade`),lg(),Ml(39,`th`),mN(40,`Descrição`),lg(),Ml(41,`th`),mN(42,`Valor Padrão`),lg()()(),Ml(43,`tbody`)(44,`tr`)(45,`td`)(46,`strong`),mN(47,`Default Values - CONTENT`),lg()(),ql(48,`td`)(49,`td`),lg(),Ml(50,`tr`)(51,`td`)(52,`code`),mN(53,`--padding`),lg(),mN(54,` \xA0`),lg(),Ml(55,`td`),mN(56,`Preenchimento`),lg(),Ml(57,`td`)(58,`code`),mN(59,`var(--spacing-sm)`),lg()()(),Ml(60,`tr`)(61,`td`)(62,`code`),mN(63,`--border-radius`),lg(),mN(64,` \xA0`),lg(),Ml(65,`td`),mN(66,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(67,`td`)(68,`code`),mN(69,`var(--border-radius-md)`),lg()()(),Ml(70,`tr`)(71,`td`)(72,`code`),mN(73,`--border-width`),lg(),mN(74,` \xA0`),lg(),Ml(75,`td`),mN(76,`Contém o valor da largura dos cantos do elemento\xA0`),lg(),Ml(77,`td`)(78,`code`),mN(79,`var(--border-width-sm)`),lg()()(),Ml(80,`tr`)(81,`td`)(82,`code`),mN(83,`--border-color`),lg(),mN(84,` \xA0`),lg(),Ml(85,`td`),mN(86,`Cor da borda`),lg(),Ml(87,`td`)(88,`code`),mN(89,`var(--color-neutral-light-20)`),lg()()(),Ml(90,`tr`)(91,`td`)(92,`code`),mN(93,`--background`),lg(),mN(94,` \xA0`),lg(),Ml(95,`td`),mN(96,`Cor de background`),lg(),Ml(97,`td`)(98,`code`),mN(99,`var(--color-neutral-light-00)`),lg()()(),Ml(100,`tr`)(101,`td`)(102,`strong`),mN(103,`Default Values - TITLE`),lg()(),ql(104,`td`)(105,`td`),lg(),Ml(106,`tr`)(107,`td`)(108,`code`),mN(109,`--font-family`),lg(),mN(110,` \xA0`),lg(),Ml(111,`td`),mN(112,`Font aplicado ao titulo`),lg(),Ml(113,`td`)(114,`code`),mN(115,`var(--font-family-theme)`),lg()()(),Ml(116,`tr`)(117,`td`)(118,`code`),mN(119,`--line-weight`),lg(),mN(120,` \xA0`),lg(),Ml(121,`td`),mN(122,`Espessura da Fonte a ser aplicada do titulo`),lg(),Ml(123,`td`)(124,`code`),mN(125,`var(--font-weight-semibold)`),lg()()(),Ml(126,`tr`)(127,`td`)(128,`code`),mN(129,`--line-height`),lg(),mN(130,` \xA0`),lg(),Ml(131,`td`),mN(132,`tamanho da linha do titulo`),lg(),Ml(133,`td`)(134,`code`),mN(135,`var(--line-height-md)`),lg()()(),Ml(136,`tr`)(137,`td`)(138,`code`),mN(139,`--text-color`),lg(),mN(140,` \xA0`),lg(),Ml(141,`td`),mN(142,`Cor do Texto do titulo`),lg(),Ml(143,`td`)(144,`code`),mN(145,`var(--color-neutral-dark-90)`),lg()()(),Ml(146,`tr`)(147,`td`)(148,`code`),mN(149,`--font-size`),lg(),mN(150,` \xA0`),lg(),Ml(151,`td`),mN(152,`Tamanho da fonte do titulo`),lg(),Ml(153,`td`)(154,`code`),mN(155,`1.125rem`),lg()()(),Ml(156,`tr`)(157,`td`)(158,`code`),mN(159,`--letter-spacing`),lg(),mN(160,` \xA0`),lg(),Ml(161,`td`),mN(162,`distancia entre letras do titulo`),lg(),Ml(163,`td`)(164,`code`),mN(165,`0.017rem`),lg()()(),Ml(166,`tr`)(167,`td`)(168,`code`),mN(169,`--margin`),lg(),mN(170,` \xA0`),lg(),Ml(171,`td`),mN(172,`Margin entre o titulo e o conteudo`),lg(),Ml(173,`td`)(174,`code`),mN(175,`0 0 var(--spacing-xs)`),lg()()()()()(),Ml(176,`div`,8)(177,`h4`,9),mN(178,`Seletor`),lg(),Ml(179,`pre`,10),mN(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),lg()(),Ml(181,`h4`,11),mN(182,`Propriedades`),lg(),Ml(183,`table`,12)(184,`tr`,13)(185,`th`,14),mN(186,`Nome`),lg(),Ml(187,`th`,14),mN(188,`Tipo`),lg(),Ml(189,`th`,14),mN(190,`Padrão`),lg(),Ml(191,`th`,14),mN(192,`Descrição`),lg()(),Ml(193,`tr`,15)(194,`td`,16)(195,`div`,17)(196,`span`,18),mN(197,` p-height`),ql(198,`br`),lg()()(),Ml(199,`td`,19)(200,`code`,20),mN(201,`number`),lg()(),Ml(202,`td`,21),mN(203,`-`),lg(),Ml(204,`td`,22)(205,`em`)(206,`strong`),mN(207,`(opcional)`),lg()(),Ml(208,`p`),mN(209,`Define a altura do `),Ml(210,`code`),mN(211,`po-container`),lg(),mN(212,`.`),lg(),Ml(213,`blockquote`)(214,`p`),mN(215,`Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.`),lg()()()(),Ml(216,`tr`,15)(217,`td`,16)(218,`div`,17)(219,`span`,18),mN(220,` p-no-border`),ql(221,`br`),lg()()(),Ml(222,`td`,19)(223,`code`,23),mN(224,`boolean`),lg()(),Ml(225,`td`,21)(226,`p`)(227,`code`),mN(228,`false`),lg()()(),Ml(229,`td`,22)(230,`em`)(231,`strong`),mN(232,`(opcional)`),lg()(),Ml(233,`p`),mN(234,`Desabilita a borda e a sombra em torno do `),Ml(235,`code`),mN(236,`po-container`),lg(),mN(237,`.`),lg()()(),Ml(238,`tr`,15)(239,`td`,16)(240,`div`,17)(241,`span`,18),mN(242,` p-no-padding`),ql(243,`br`),lg()()(),Ml(244,`td`,19)(245,`code`,23),mN(246,`boolean`),lg()(),Ml(247,`td`,21)(248,`p`)(249,`code`),mN(250,`false`),lg()()(),Ml(251,`td`,22)(252,`em`)(253,`strong`),mN(254,`(opcional)`),lg()(),Ml(255,`p`),mN(256,`Desabilita o espaçamento interno do `),Ml(257,`code`),mN(258,`po-container`),lg(),mN(259,`.`),lg()()(),Ml(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),mN(264,` p-title`),ql(265,`br`),lg()()(),Ml(266,`td`,19)(267,`code`,24),mN(268,`string`),lg()(),Ml(269,`td`,21),mN(270,`-`),lg(),Ml(271,`td`,22)(272,`em`)(273,`strong`),mN(274,`(opcional)`),lg()(),Ml(275,`p`),mN(276,`Título do Container.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Be=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Container`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-container-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-container-basic-view`)(6,`sample-po-container-labs-view`)(7,`sample-po-container-dashboard-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ue,be,Ce,Se],encapsulation:2,changeDetection:1})}return o})()}];var ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[NL.forChild(Be),NL]})}return o})();var dt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,ve]})}return o})();export{dt as DocPoContainerModule};