import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,K as K3,Kn as Ag,Pi as mt,Pr as R,Qt as ea,Ri as nu,Si as iu,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,et as Noe,fa as we,i as _a,ir as EF,ji as mO,k as Ec,mn as ni,ni as _o,nn as goe,pa as wg,r as Ta,sa as vo,ta as ue$1,ua as wK,un as m5,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,z as I5,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-container-basic`]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&nu(0,`po-container`)},dependencies:[Ec],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-container-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Container Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-container-basic/sample-po-container-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container></po-container>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-container-basic/sample-po-container-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-container-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,xe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,me],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:`noBorder`,label:`No Border`},{value:`noPadding`,label:`No Padding`}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-container-labs`]],standalone:!1,decls:13,vars:10,consts:[[`f`,`ngForm`],[3,`p-title`,`p-height`,`p-no-border`,`p-no-padding`],[1,`po-row`],[`name`,`title`,`p-label`,`Titulo`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Sx();jc(0,`po-container`,1),iO(1),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,2)(6,`po-input`,3),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(i.title,s)||(i.title=s),v_(s)}),wg(),jc(7,`po-number`,4),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(i.height,s)||(i.height=s),v_(s)}),wg(),jc(8,`po-checkbox-group`,5),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(i.properties,s)||(i.properties=s),v_(s)}),wg()(),jc(9,`div`,2)(10,`po-textarea`,6),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(i.content,s)||(i.content=s),v_(s)}),wg()(),jc(11,`div`,2)(12,`po-button`,7),mt(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(jE(`p-title`,i.title)(`p-height`,i.height)(`p-no-border`,i.properties.includes(`noBorder`))(`p-no-padding`,i.properties.includes(`noPadding`)),rg(),Ag(` `,i.content,`
`),rg(5),ib(`ngModel`,i.title),t0(),rg(),ib(`ngModel`,i.height),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(2),ib(`ngModel`,i.content),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Ec,Lf,m5,A5,doe,goe],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-container-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Container Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-container-labs/sample-po-container-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-container
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-container-labs/sample-po-container-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-container-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`packageVersion`,label:`Package version`},{property:`downloads`}]}getItems(){return[{cities:`São Paulo`,packageVersion:`3.0.0-beta.1`,downloads:`2000`},{cities:`Joinville`,packageVersion:`2.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,packageVersion:`3.0.0`,downloads:`250`},{cities:`Santa Catarina`,packageVersion:`1.9.1`,downloads:`100`},{cities:`Curitiba`,packageVersion:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,packageVersion:`1.9.1`,downloads:`250`},{cities:`Londrina`,packageVersion:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,packageVersion:`1.9.1`,downloads:`1100`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Me=[`formShare`];var ge=(()=>{class o{poNotification=p(zu);sampleDashboardService=p(U);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`Disable notification`,icon:`an an-bell`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Invalid email.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-container-dashboard`]],viewQuery:function(a,i){if(a&1&&iu(Me,7)(ea,5),a&2){let m;vo(m=_o())&&(i.formShare=m.first),vo(m=_o())&&(i.poModal=m.first)}},standalone:!1,features:[we([U])],decls:38,vars:8,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,3,`p-actions`,`p-breadcrumb`],[1,`po-lg-6`],[`p-title`,`Daily visitors`,1,`po-lg-6`,`po-mb-1`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-container-dashboard`],[`p-title`,`Most viewed page`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Website status`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`NPM downloads`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Devforum PO questions`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Angular versions supported`,1,`po-lg-6`,`po-mb-1`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(a,i){if(a&1){let m=Sx();jc(0,`po-page-default`,1)(1,`po-container`,2)(2,`po-widget`,3)(3,`div`,4),iO(4,`540`),wg(),jc(5,`div`,5),iO(6,`www.po.com.br`),wg()(),jc(7,`po-widget`,6)(8,`div`,4),iO(9,`300 views`),wg(),jc(10,`div`,5),iO(11,`https://po-ui.io`),wg()(),jc(12,`po-widget`,7)(13,`div`,4),iO(14,`Online`),wg(),jc(15,`div`,5),iO(16,`21 days`),wg()(),jc(17,`po-widget`,8)(18,`div`,4),iO(19,`266`),wg(),jc(20,`div`,5),iO(21,`@po-ui/ng-components - 2.0.0`),wg()(),jc(22,`po-widget`,9)(23,`div`,4),iO(24,`800 questions`),wg(),jc(25,`div`,5),iO(26,`https://devforum.po.com.br`),wg()(),jc(27,`po-widget`,10)(28,`div`,4),iO(29,`AngularJS - Angular 7`),wg(),jc(30,`div`,5),iO(31,`Angular 7 most downloaded`),wg()()(),jc(32,`po-container`,2),nu(33,`po-table`,11),wg()(),jc(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),JN(),ob(`ngModelChange`,function(s){return y_(m),sO(i.email,s)||(i.email=s),v_(s)}),wg()()()}a&2&&(jE(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb),rg(33),jE(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),rg(),jE(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),rg(3),ib(`ngModel`,i.email),t0())},dependencies:[wK,CK,EK,TF,EF,Ec,K3,ea,Kze,I5,Noe],styles:[`.sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}`],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-container-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Container - Dashboard`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-container-dashboard/sample-po-container-dashboard.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-container-dashboard/sample-po-container-dashboard.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-container-dashboard/sample-po-container-dashboard.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()(),jc(25,`po-tab`,10)(26,`div`)(27,`label`,6),iO(28,`sample-po-container-dashboard/sample-po-container-dashboard.component.css`),wg(),jc(29,`pre`,11),iO(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),wg()()()()(),jc(31,`div`,12),nu(32,`sample-po-container-dashboard`),wg(),nu(33,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-container-doc`]],standalone:!1,decls:277,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoContainerModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente `),jc(7,`code`),iO(8,`po-container`),wg(),iO(9,`.`),wg()(),jc(10,`h3`,3),iO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),iO(14,`PoContainerComponent`),wg()(),jc(15,`div`,2)(16,`p`),iO(17,`O `),jc(18,`code`),iO(19,`po-container`),wg(),iO(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),jc(21,`a`,6),iO(22,`Grid System`),wg(),iO(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),wg(),jc(24,`h4`),iO(25,`Tokens customizáveis`),wg(),jc(26,`p`),iO(27,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(28,`blockquote`)(29,`p`),iO(30,`Para maiores informações, acesse o guia `),jc(31,`a`,7),iO(32,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(33,`.`),wg()(),jc(34,`table`)(35,`thead`)(36,`tr`)(37,`th`),iO(38,`Propriedade`),wg(),jc(39,`th`),iO(40,`Descrição`),wg(),jc(41,`th`),iO(42,`Valor Padrão`),wg()()(),jc(43,`tbody`)(44,`tr`)(45,`td`)(46,`strong`),iO(47,`Default Values - CONTENT`),wg()(),nu(48,`td`)(49,`td`),wg(),jc(50,`tr`)(51,`td`)(52,`code`),iO(53,`--padding`),wg(),iO(54,` \xA0`),wg(),jc(55,`td`),iO(56,`Preenchimento`),wg(),jc(57,`td`)(58,`code`),iO(59,`var(--spacing-sm)`),wg()()(),jc(60,`tr`)(61,`td`)(62,`code`),iO(63,`--border-radius`),wg(),iO(64,` \xA0`),wg(),jc(65,`td`),iO(66,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(67,`td`)(68,`code`),iO(69,`var(--border-radius-md)`),wg()()(),jc(70,`tr`)(71,`td`)(72,`code`),iO(73,`--border-width`),wg(),iO(74,` \xA0`),wg(),jc(75,`td`),iO(76,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(77,`td`)(78,`code`),iO(79,`var(--border-width-sm)`),wg()()(),jc(80,`tr`)(81,`td`)(82,`code`),iO(83,`--border-color`),wg(),iO(84,` \xA0`),wg(),jc(85,`td`),iO(86,`Cor da borda`),wg(),jc(87,`td`)(88,`code`),iO(89,`var(--color-neutral-light-20)`),wg()()(),jc(90,`tr`)(91,`td`)(92,`code`),iO(93,`--background`),wg(),iO(94,` \xA0`),wg(),jc(95,`td`),iO(96,`Cor de background`),wg(),jc(97,`td`)(98,`code`),iO(99,`var(--color-neutral-light-00)`),wg()()(),jc(100,`tr`)(101,`td`)(102,`strong`),iO(103,`Default Values - TITLE`),wg()(),nu(104,`td`)(105,`td`),wg(),jc(106,`tr`)(107,`td`)(108,`code`),iO(109,`--font-family`),wg(),iO(110,` \xA0`),wg(),jc(111,`td`),iO(112,`Font aplicado ao titulo`),wg(),jc(113,`td`)(114,`code`),iO(115,`var(--font-family-theme)`),wg()()(),jc(116,`tr`)(117,`td`)(118,`code`),iO(119,`--line-weight`),wg(),iO(120,` \xA0`),wg(),jc(121,`td`),iO(122,`Espessura da Fonte a ser aplicada do titulo`),wg(),jc(123,`td`)(124,`code`),iO(125,`var(--font-weight-semibold)`),wg()()(),jc(126,`tr`)(127,`td`)(128,`code`),iO(129,`--line-height`),wg(),iO(130,` \xA0`),wg(),jc(131,`td`),iO(132,`tamanho da linha do titulo`),wg(),jc(133,`td`)(134,`code`),iO(135,`var(--line-height-md)`),wg()()(),jc(136,`tr`)(137,`td`)(138,`code`),iO(139,`--text-color`),wg(),iO(140,` \xA0`),wg(),jc(141,`td`),iO(142,`Cor do Texto do titulo`),wg(),jc(143,`td`)(144,`code`),iO(145,`var(--color-neutral-dark-90)`),wg()()(),jc(146,`tr`)(147,`td`)(148,`code`),iO(149,`--font-size`),wg(),iO(150,` \xA0`),wg(),jc(151,`td`),iO(152,`Tamanho da fonte do titulo`),wg(),jc(153,`td`)(154,`code`),iO(155,`1.125rem`),wg()()(),jc(156,`tr`)(157,`td`)(158,`code`),iO(159,`--letter-spacing`),wg(),iO(160,` \xA0`),wg(),jc(161,`td`),iO(162,`distancia entre letras do titulo`),wg(),jc(163,`td`)(164,`code`),iO(165,`0.017rem`),wg()()(),jc(166,`tr`)(167,`td`)(168,`code`),iO(169,`--margin`),wg(),iO(170,` \xA0`),wg(),jc(171,`td`),iO(172,`Margin entre o titulo e o conteudo`),wg(),jc(173,`td`)(174,`code`),iO(175,`0 0 var(--spacing-xs)`),wg()()()()()(),jc(176,`div`,8)(177,`h4`,9),iO(178,`Seletor`),wg(),jc(179,`pre`,10),iO(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),wg()(),jc(181,`h4`,11),iO(182,`Propriedades`),wg(),jc(183,`table`,12)(184,`tr`,13)(185,`th`,14),iO(186,`Nome`),wg(),jc(187,`th`,14),iO(188,`Tipo`),wg(),jc(189,`th`,14),iO(190,`Padrão`),wg(),jc(191,`th`,14),iO(192,`Descrição`),wg()(),jc(193,`tr`,15)(194,`td`,16)(195,`div`,17)(196,`span`,18),iO(197,` p-height`),nu(198,`br`),wg()()(),jc(199,`td`,19)(200,`code`,20),iO(201,`number`),wg()(),jc(202,`td`,21),iO(203,`-`),wg(),jc(204,`td`,22)(205,`em`)(206,`strong`),iO(207,`(opcional)`),wg()(),jc(208,`p`),iO(209,`Define a altura do `),jc(210,`code`),iO(211,`po-container`),wg(),iO(212,`.`),wg(),jc(213,`blockquote`)(214,`p`),iO(215,`Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.`),wg()()()(),jc(216,`tr`,15)(217,`td`,16)(218,`div`,17)(219,`span`,18),iO(220,` p-no-border`),nu(221,`br`),wg()()(),jc(222,`td`,19)(223,`code`,23),iO(224,`boolean`),wg()(),jc(225,`td`,21)(226,`p`)(227,`code`),iO(228,`false`),wg()()(),jc(229,`td`,22)(230,`em`)(231,`strong`),iO(232,`(opcional)`),wg()(),jc(233,`p`),iO(234,`Desabilita a borda e a sombra em torno do `),jc(235,`code`),iO(236,`po-container`),wg(),iO(237,`.`),wg()()(),jc(238,`tr`,15)(239,`td`,16)(240,`div`,17)(241,`span`,18),iO(242,` p-no-padding`),nu(243,`br`),wg()()(),jc(244,`td`,19)(245,`code`,23),iO(246,`boolean`),wg()(),jc(247,`td`,21)(248,`p`)(249,`code`),iO(250,`false`),wg()()(),jc(251,`td`,22)(252,`em`)(253,`strong`),iO(254,`(opcional)`),wg()(),jc(255,`p`),iO(256,`Desabilita o espaçamento interno do `),jc(257,`code`),iO(258,`po-container`),wg(),iO(259,`.`),wg()()(),jc(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),iO(264,` p-title`),nu(265,`br`),wg()()(),jc(266,`td`,19)(267,`code`,24),iO(268,`string`),wg()(),jc(269,`td`,21),iO(270,`-`),wg(),jc(271,`td`,22)(272,`em`)(273,`strong`),iO(274,`(opcional)`),wg()(),jc(275,`p`),iO(276,`Título do Container.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Be=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Container`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-container-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-container-basic-view`)(6,`sample-po-container-labs-view`)(7,`sample-po-container-dashboard-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ue,be,Ce,Se],encapsulation:2,changeDetection:1})}return o})()}];var ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue$1({imports:[C1.forChild(Be),C1]})}return o})();var dt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue$1({imports:[Ta,ve]})}return o})();export{dt as DocPoContainerModule};