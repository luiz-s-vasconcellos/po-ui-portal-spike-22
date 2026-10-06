import{$i as pt,Br as Qn,Ci as fo,Dn as ta,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Nn as x4,Qn as C9,Sa as zO,Vt as doe,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_ as $3,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,ca as ue$1,ci as b9,ct as Ou,di as cE,dr as Hn,fn as ni,hr as I,i as _a,j as Ec,ji as ho,k as D4,ki as he$1,ni as Xc,nr as D9,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,st as Ooe,ua as ug,ui as be$1,wr as Kc,zi as kL}from"./main-AGY457H2.js";var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-container-basic`]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&Kc(0,`po-container`)},dependencies:[Ec],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-container-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Container Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-container-basic/sample-po-container-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container></po-container>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-container-basic/sample-po-container-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-container-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,xe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,me],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:`noBorder`,label:`No Border`},{value:`noPadding`,label:`No Padding`}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-container-labs`]],standalone:!1,decls:13,vars:10,consts:[[`f`,`ngForm`],[3,`p-title`,`p-height`,`p-no-border`,`p-no-padding`],[1,`po-row`],[`name`,`title`,`p-label`,`Titulo`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Bx();Ac(0,`po-container`,1),vN(1),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,2)(6,`po-input`,3),RE(`ngModelChange`,function(s){return Jv(m),DN(i.title,s)||(i.title=s),e_(s)}),ug(),p0(),Ac(7,`po-number`,4),RE(`ngModelChange`,function(s){return Jv(m),DN(i.height,s)||(i.height=s),e_(s)}),ug(),p0(),Ac(8,`po-checkbox-group`,5),RE(`ngModelChange`,function(s){return Jv(m),DN(i.properties,s)||(i.properties=s),e_(s)}),ug(),p0(),ug(),Ac(9,`div`,2)(10,`po-textarea`,6),RE(`ngModelChange`,function(s){return Jv(m),DN(i.content,s)||(i.content=s),e_(s)}),ug(),p0(),ug(),Ac(11,`div`,2)(12,`po-button`,7),pt(`p-click`,function(){return i.restore()}),ug()()()}a&2&&(cE(`p-title`,i.title)(`p-height`,i.height)(`p-no-border`,i.properties.includes(`noBorder`))(`p-no-padding`,i.properties.includes(`noPadding`)),Hp(),mg(` `,i.content,`
`),Hp(5),TE(`ngModel`,i.title),m0(),Hp(),TE(`ngModel`,i.height),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(2),TE(`ngModel`,i.content),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ec,Ef,l4,D4,roe,doe],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-container-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Container Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-container-labs/sample-po-container-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-container
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-container-labs/sample-po-container-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-container-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,he],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`packageVersion`,label:`Package version`},{property:`downloads`}]}getItems(){return[{cities:`São Paulo`,packageVersion:`3.0.0-beta.1`,downloads:`2000`},{cities:`Joinville`,packageVersion:`2.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,packageVersion:`3.0.0`,downloads:`250`},{cities:`Santa Catarina`,packageVersion:`1.9.1`,downloads:`100`},{cities:`Curitiba`,packageVersion:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,packageVersion:`1.9.1`,downloads:`250`},{cities:`Londrina`,packageVersion:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,packageVersion:`1.9.1`,downloads:`1100`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Me=[`formShare`];var ge=(()=>{class o{poNotification=f(Ou);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`Disable notification`,icon:`an an-bell`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Invalid email.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-container-dashboard`]],viewQuery:function(a,i){if(a&1&&Xc(Me,7)(ta,5),a&2){let m;fo(m=ho())&&(i.formShare=m.first),fo(m=ho())&&(i.poModal=m.first)}},standalone:!1,features:[be$1([U])],decls:38,vars:8,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,3,`p-actions`,`p-breadcrumb`],[1,`po-lg-6`],[`p-title`,`Daily visitors`,1,`po-lg-6`,`po-mb-1`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-container-dashboard`],[`p-title`,`Most viewed page`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Website status`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`NPM downloads`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Devforum PO questions`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Angular versions supported`,1,`po-lg-6`,`po-mb-1`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(a,i){if(a&1){let m=Bx();Ac(0,`po-page-default`,1)(1,`po-container`,2)(2,`po-widget`,3)(3,`div`,4),vN(4,`540`),ug(),Ac(5,`div`,5),vN(6,`www.po.com.br`),ug()(),Ac(7,`po-widget`,6)(8,`div`,4),vN(9,`300 views`),ug(),Ac(10,`div`,5),vN(11,`https://po-ui.io`),ug()(),Ac(12,`po-widget`,7)(13,`div`,4),vN(14,`Online`),ug(),Ac(15,`div`,5),vN(16,`21 days`),ug()(),Ac(17,`po-widget`,8)(18,`div`,4),vN(19,`266`),ug(),Ac(20,`div`,5),vN(21,`@po-ui/ng-components - 2.0.0`),ug()(),Ac(22,`po-widget`,9)(23,`div`,4),vN(24,`800 questions`),ug(),Ac(25,`div`,5),vN(26,`https://devforum.po.com.br`),ug()(),Ac(27,`po-widget`,10)(28,`div`,4),vN(29,`AngularJS - Angular 7`),ug(),Ac(30,`div`,5),vN(31,`Angular 7 most downloaded`),ug()()(),Ac(32,`po-container`,2),Kc(33,`po-table`,11),ug()(),Ac(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),RE(`ngModelChange`,function(s){return Jv(m),DN(i.email,s)||(i.email=s),e_(s)}),ug(),p0(),ug()()}a&2&&(cE(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb),Hp(33),cE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),Hp(),cE(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),Hp(3),TE(`ngModel`,i.email),m0())},dependencies:[b9,D9,C9,BP,LP,Ec,$3,ta,$ze,x4,Ooe],styles:[`.sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}`],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-container-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Container - Dashboard`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-container-dashboard/sample-po-container-dashboard.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-container-dashboard/sample-po-container-dashboard.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-container-dashboard/sample-po-container-dashboard.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()(),Ac(25,`po-tab`,10)(26,`div`)(27,`label`,6),vN(28,`sample-po-container-dashboard/sample-po-container-dashboard.component.css`),ug(),Ac(29,`pre`,11),vN(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),ug()()()()(),Ac(31,`div`,12),Kc(32,`sample-po-container-dashboard`),ug(),Kc(33,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ge],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-container-doc`]],standalone:!1,decls:277,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoContainerModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente `),Ac(7,`code`),vN(8,`po-container`),ug(),vN(9,`.`),ug()(),Ac(10,`h3`,3),vN(11,`Componente`),ug(),Ac(12,`h4`,4)(13,`code`,5),vN(14,`PoContainerComponent`),ug()(),Ac(15,`div`,2)(16,`p`),vN(17,`O `),Ac(18,`code`),vN(19,`po-container`),ug(),vN(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Ac(21,`a`,6),vN(22,`Grid System`),ug(),vN(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),ug(),Ac(24,`h4`),vN(25,`Tokens customizáveis`),ug(),Ac(26,`p`),vN(27,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ug(),Ac(28,`blockquote`)(29,`p`),vN(30,`Para maiores informações, acesse o guia `),Ac(31,`a`,7),vN(32,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(33,`.`),ug()(),Ac(34,`table`)(35,`thead`)(36,`tr`)(37,`th`),vN(38,`Propriedade`),ug(),Ac(39,`th`),vN(40,`Descrição`),ug(),Ac(41,`th`),vN(42,`Valor Padrão`),ug()()(),Ac(43,`tbody`)(44,`tr`)(45,`td`)(46,`strong`),vN(47,`Default Values - CONTENT`),ug()(),Kc(48,`td`)(49,`td`),ug(),Ac(50,`tr`)(51,`td`)(52,`code`),vN(53,`--padding`),ug(),vN(54,` \xA0`),ug(),Ac(55,`td`),vN(56,`Preenchimento`),ug(),Ac(57,`td`)(58,`code`),vN(59,`var(--spacing-sm)`),ug()()(),Ac(60,`tr`)(61,`td`)(62,`code`),vN(63,`--border-radius`),ug(),vN(64,` \xA0`),ug(),Ac(65,`td`),vN(66,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(67,`td`)(68,`code`),vN(69,`var(--border-radius-md)`),ug()()(),Ac(70,`tr`)(71,`td`)(72,`code`),vN(73,`--border-width`),ug(),vN(74,` \xA0`),ug(),Ac(75,`td`),vN(76,`Contém o valor da largura dos cantos do elemento\xA0`),ug(),Ac(77,`td`)(78,`code`),vN(79,`var(--border-width-sm)`),ug()()(),Ac(80,`tr`)(81,`td`)(82,`code`),vN(83,`--border-color`),ug(),vN(84,` \xA0`),ug(),Ac(85,`td`),vN(86,`Cor da borda`),ug(),Ac(87,`td`)(88,`code`),vN(89,`var(--color-neutral-light-20)`),ug()()(),Ac(90,`tr`)(91,`td`)(92,`code`),vN(93,`--background`),ug(),vN(94,` \xA0`),ug(),Ac(95,`td`),vN(96,`Cor de background`),ug(),Ac(97,`td`)(98,`code`),vN(99,`var(--color-neutral-light-00)`),ug()()(),Ac(100,`tr`)(101,`td`)(102,`strong`),vN(103,`Default Values - TITLE`),ug()(),Kc(104,`td`)(105,`td`),ug(),Ac(106,`tr`)(107,`td`)(108,`code`),vN(109,`--font-family`),ug(),vN(110,` \xA0`),ug(),Ac(111,`td`),vN(112,`Font aplicado ao titulo`),ug(),Ac(113,`td`)(114,`code`),vN(115,`var(--font-family-theme)`),ug()()(),Ac(116,`tr`)(117,`td`)(118,`code`),vN(119,`--line-weight`),ug(),vN(120,` \xA0`),ug(),Ac(121,`td`),vN(122,`Espessura da Fonte a ser aplicada do titulo`),ug(),Ac(123,`td`)(124,`code`),vN(125,`var(--font-weight-semibold)`),ug()()(),Ac(126,`tr`)(127,`td`)(128,`code`),vN(129,`--line-height`),ug(),vN(130,` \xA0`),ug(),Ac(131,`td`),vN(132,`tamanho da linha do titulo`),ug(),Ac(133,`td`)(134,`code`),vN(135,`var(--line-height-md)`),ug()()(),Ac(136,`tr`)(137,`td`)(138,`code`),vN(139,`--text-color`),ug(),vN(140,` \xA0`),ug(),Ac(141,`td`),vN(142,`Cor do Texto do titulo`),ug(),Ac(143,`td`)(144,`code`),vN(145,`var(--color-neutral-dark-90)`),ug()()(),Ac(146,`tr`)(147,`td`)(148,`code`),vN(149,`--font-size`),ug(),vN(150,` \xA0`),ug(),Ac(151,`td`),vN(152,`Tamanho da fonte do titulo`),ug(),Ac(153,`td`)(154,`code`),vN(155,`1.125rem`),ug()()(),Ac(156,`tr`)(157,`td`)(158,`code`),vN(159,`--letter-spacing`),ug(),vN(160,` \xA0`),ug(),Ac(161,`td`),vN(162,`distancia entre letras do titulo`),ug(),Ac(163,`td`)(164,`code`),vN(165,`0.017rem`),ug()()(),Ac(166,`tr`)(167,`td`)(168,`code`),vN(169,`--margin`),ug(),vN(170,` \xA0`),ug(),Ac(171,`td`),vN(172,`Margin entre o titulo e o conteudo`),ug(),Ac(173,`td`)(174,`code`),vN(175,`0 0 var(--spacing-xs)`),ug()()()()()(),Ac(176,`div`,8)(177,`h4`,9),vN(178,`Seletor`),ug(),Ac(179,`pre`,10),vN(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),ug()(),Ac(181,`h4`,11),vN(182,`Propriedades`),ug(),Ac(183,`table`,12)(184,`tr`,13)(185,`th`,14),vN(186,`Nome`),ug(),Ac(187,`th`,14),vN(188,`Tipo`),ug(),Ac(189,`th`,14),vN(190,`Padrão`),ug(),Ac(191,`th`,14),vN(192,`Descrição`),ug()(),Ac(193,`tr`,15)(194,`td`,16)(195,`div`,17)(196,`span`,18),vN(197,` p-height`),Kc(198,`br`),ug()()(),Ac(199,`td`,19)(200,`code`,20),vN(201,`number`),ug()(),Ac(202,`td`,21),vN(203,`-`),ug(),Ac(204,`td`,22)(205,`em`)(206,`strong`),vN(207,`(opcional)`),ug()(),Ac(208,`p`),vN(209,`Define a altura do `),Ac(210,`code`),vN(211,`po-container`),ug(),vN(212,`.`),ug(),Ac(213,`blockquote`)(214,`p`),vN(215,`Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.`),ug()()()(),Ac(216,`tr`,15)(217,`td`,16)(218,`div`,17)(219,`span`,18),vN(220,` p-no-border`),Kc(221,`br`),ug()()(),Ac(222,`td`,19)(223,`code`,23),vN(224,`boolean`),ug()(),Ac(225,`td`,21)(226,`p`)(227,`code`),vN(228,`false`),ug()()(),Ac(229,`td`,22)(230,`em`)(231,`strong`),vN(232,`(opcional)`),ug()(),Ac(233,`p`),vN(234,`Desabilita a borda e a sombra em torno do `),Ac(235,`code`),vN(236,`po-container`),ug(),vN(237,`.`),ug()()(),Ac(238,`tr`,15)(239,`td`,16)(240,`div`,17)(241,`span`,18),vN(242,` p-no-padding`),Kc(243,`br`),ug()()(),Ac(244,`td`,19)(245,`code`,23),vN(246,`boolean`),ug()(),Ac(247,`td`,21)(248,`p`)(249,`code`),vN(250,`false`),ug()()(),Ac(251,`td`,22)(252,`em`)(253,`strong`),vN(254,`(opcional)`),ug()(),Ac(255,`p`),vN(256,`Desabilita o espaçamento interno do `),Ac(257,`code`),vN(258,`po-container`),ug(),vN(259,`.`),ug()()(),Ac(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),vN(264,` p-title`),Kc(265,`br`),ug()()(),Ac(266,`td`,19)(267,`code`,24),vN(268,`string`),ug()(),Ac(269,`td`,21),vN(270,`-`),ug(),Ac(271,`td`,22)(272,`em`)(273,`strong`),vN(274,`(opcional)`),ug()(),Ac(275,`p`),vN(276,`Título do Container.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Be=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Container`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-container-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-container-basic-view`)(6,`sample-po-container-labs-view`)(7,`sample-po-container-dashboard-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ue,be,Ce,Se],encapsulation:2,changeDetection:1})}return o})()}];var ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[kL.forChild(Be),kL]})}return o})();var dt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[Ta,ve]})}return o})();export{dt as DocPoContainerModule};