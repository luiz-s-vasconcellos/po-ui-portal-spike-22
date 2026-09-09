import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ct as X4,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce$1,Ki as lo,Li as ht,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Sn as vbe,Tt as Xy$1,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,dr as I,ei as Yl,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,la as uo,lr as Gl,nt as O8e,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-basic`]],standalone:!1,decls:1,vars:0,template:function(a,i){a&1&&Gl(0,`po-container`)},dependencies:[xp],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Container Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-container-basic/sample-po-container-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container></po-container>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-container-basic/sample-po-container-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-container-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,xe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:`noBorder`,label:`No Border`},{value:`noPadding`,label:`No Padding`}];ngOnInit(){this.restore()}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-labs`]],standalone:!1,decls:13,vars:10,consts:[[`f`,`ngForm`],[3,`p-title`,`p-height`,`p-no-border`,`p-no-padding`],[1,`po-row`],[`name`,`title`,`p-label`,`Titulo`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`height`,`p-label`,`Height`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`content`,`p-label`,`Content`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let m=Ax();Tl(0,`po-container`,1),cN(1),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,2)(6,`po-input`,3),ww(`ngModelChange`,function(s){return Ky(m),uN(i.title,s)||(i.title=s),Xy(s)}),ag(),a0(),Tl(7,`po-number`,4),ww(`ngModelChange`,function(s){return Ky(m),uN(i.height,s)||(i.height=s),Xy(s)}),ag(),a0(),Tl(8,`po-checkbox-group`,5),ww(`ngModelChange`,function(s){return Ky(m),uN(i.properties,s)||(i.properties=s),Xy(s)}),ag(),a0(),ag(),Tl(9,`div`,2)(10,`po-textarea`,6),ww(`ngModelChange`,function(s){return Ky(m),uN(i.content,s)||(i.content=s),Xy(s)}),ag(),a0(),ag(),Tl(11,`div`,2)(12,`po-button`,7),ht(`p-click`,function(){return i.restore()}),ag()()()}a&2&&(nw(`p-title`,i.title)(`p-height`,i.height)(`p-no-border`,i.properties.includes(`noBorder`))(`p-no-padding`,i.properties.includes(`noPadding`)),jp(),hg(` `,i.content,`
`),jp(5),Ew(`ngModel`,i.title),l0(),jp(),Ew(`ngModel`,i.height),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(2),Ew(`ngModel`,i.content),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,xp,Xy$1,N4,iU,ube,vbe],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Container Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-container-labs/sample-po-container-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-container
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-container-labs/sample-po-container-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-container-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getColumns(){return[{property:`cities`,label:`Cities that most downloaded PO`},{property:`packageVersion`,label:`Package version`},{property:`downloads`}]}getItems(){return[{cities:`São Paulo`,packageVersion:`3.0.0-beta.1`,downloads:`2000`},{cities:`Joinville`,packageVersion:`2.9.1`,downloads:`1000`},{cities:`Rio de Janeiro`,packageVersion:`3.0.0`,downloads:`250`},{cities:`Santa Catarina`,packageVersion:`1.9.1`,downloads:`100`},{cities:`Curitiba`,packageVersion:`2.0.0-beta.2`,downloads:`1040`},{cities:`Goiania`,packageVersion:`1.9.1`,downloads:`250`},{cities:`Londrina`,packageVersion:`1.9.1`,downloads:`35`},{cities:`Belo Horizonte`,packageVersion:`1.9.1`,downloads:`1100`}]}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Me=[`formShare`];var ge=(()=>{class o{poNotification=f(Eu);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:`Share`,action:this.modalOpen.bind(this),icon:`an an-share`},{label:`Disable notification`,icon:`an an-bell`,action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:`Home`,link:`/`},{label:`Dashboard`}]};cancelAction={action:()=>{this.modalClose()},label:`Cancel`};shareAction={action:()=>{this.share()},label:`Share`};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error(`Invalid email.`),this.modalClose()}disableNotification(){this.isSubscribed=!0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-dashboard`]],viewQuery:function(a,i){if(a&1&&Yl(Me,7)(vr,5),a&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first)}},standalone:!1,features:[Ce$1([U])],decls:38,vars:8,consts:[[`formShare`,`ngForm`],[`p-title`,`Dashboard`,3,`p-actions`,`p-breadcrumb`],[1,`po-lg-6`],[`p-title`,`Daily visitors`,1,`po-lg-6`,`po-mb-1`],[1,`po-font-subtitle`,`po-text-center`],[1,`po-text-center`,`sample-container-dashboard`],[`p-title`,`Most viewed page`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Website status`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`NPM downloads`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Devforum PO questions`,1,`po-lg-6`,`po-mb-1`],[`p-title`,`Angular versions supported`,1,`po-lg-6`,`po-mb-1`],[`p-striped`,`true`,3,`p-columns`,`p-items`,`p-hide-table-search`],[`p-title`,`Share webpage`,3,`p-primary-action`,`p-secondary-action`],[`name`,`email`,`p-clean`,``,`p-label`,`Type an e-mail for sharing webpage: http://www.po.com.br`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`]],template:function(a,i){if(a&1){let m=Ax();Tl(0,`po-page-default`,1)(1,`po-container`,2)(2,`po-widget`,3)(3,`div`,4),cN(4,`540`),ag(),Tl(5,`div`,5),cN(6,`www.po.com.br`),ag()(),Tl(7,`po-widget`,6)(8,`div`,4),cN(9,`300 views`),ag(),Tl(10,`div`,5),cN(11,`https://po-ui.io`),ag()(),Tl(12,`po-widget`,7)(13,`div`,4),cN(14,`Online`),ag(),Tl(15,`div`,5),cN(16,`21 days`),ag()(),Tl(17,`po-widget`,8)(18,`div`,4),cN(19,`266`),ag(),Tl(20,`div`,5),cN(21,`@po-ui/ng-components - 2.0.0`),ag()(),Tl(22,`po-widget`,9)(23,`div`,4),cN(24,`800 questions`),ag(),Tl(25,`div`,5),cN(26,`https://devforum.po.com.br`),ag()(),Tl(27,`po-widget`,10)(28,`div`,4),cN(29,`AngularJS - Angular 7`),ag(),Tl(30,`div`,5),cN(31,`Angular 7 most downloaded`),ag()()(),Tl(32,`po-container`,2),Gl(33,`po-table`,11),ag()(),Tl(34,`po-modal`,12)(35,`form`,null,0)(37,`po-email`,13),ww(`ngModelChange`,function(s){return Ky(m),uN(i.email,s)||(i.email=s),Xy(s)}),ag(),a0(),ag()()}a&2&&(nw(`p-actions`,i.actions)(`p-breadcrumb`,i.breadcrumb),jp(33),nw(`p-columns`,i.columns)(`p-items`,i.items)(`p-hide-table-search`,!1),jp(),nw(`p-primary-action`,i.shareAction)(`p-secondary-action`,i.cancelAction),jp(3),Ew(`ngModel`,i.email),l0())},dependencies:[yY,gY,mY,Ak,Tk,xp,qH,vr,S8e,X4,O8e],styles:[`.sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}`],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-dashboard-view`]],standalone:!1,decls:34,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Container - Dashboard`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-container-dashboard/sample-po-container-dashboard.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-container-dashboard/sample-po-container-dashboard.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-container-dashboard/sample-po-container-dashboard.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()(),Tl(25,`po-tab`,10)(26,`div`)(27,`label`,6),cN(28,`sample-po-container-dashboard/sample-po-container-dashboard.component.css`),ag(),Tl(29,`pre`,11),cN(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),ag()()()()(),Tl(31,`div`,12),Gl(32,`sample-po-container-dashboard`),ag(),Gl(33,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-container-doc`]],standalone:!1,decls:277,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoContainerModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente `),Tl(7,`code`),cN(8,`po-container`),ag(),cN(9,`.`),ag()(),Tl(10,`h3`,3),cN(11,`Componente`),ag(),Tl(12,`h4`,4)(13,`code`,5),cN(14,`PoContainerComponent`),ag()(),Tl(15,`div`,2)(16,`p`),cN(17,`O `),Tl(18,`code`),cN(19,`po-container`),ag(),cN(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Tl(21,`a`,6),cN(22,`Grid System`),ag(),cN(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),ag(),Tl(24,`h4`),cN(25,`Tokens customizáveis`),ag(),Tl(26,`p`),cN(27,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(28,`blockquote`)(29,`p`),cN(30,`Para maiores informações, acesse o guia `),Tl(31,`a`,7),cN(32,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(33,`.`),ag()(),Tl(34,`table`)(35,`thead`)(36,`tr`)(37,`th`),cN(38,`Propriedade`),ag(),Tl(39,`th`),cN(40,`Descrição`),ag(),Tl(41,`th`),cN(42,`Valor Padrão`),ag()()(),Tl(43,`tbody`)(44,`tr`)(45,`td`)(46,`strong`),cN(47,`Default Values - CONTENT`),ag()(),Gl(48,`td`)(49,`td`),ag(),Tl(50,`tr`)(51,`td`)(52,`code`),cN(53,`--padding`),ag(),cN(54,` \xA0`),ag(),Tl(55,`td`),cN(56,`Preenchimento`),ag(),Tl(57,`td`)(58,`code`),cN(59,`var(--spacing-sm)`),ag()()(),Tl(60,`tr`)(61,`td`)(62,`code`),cN(63,`--border-radius`),ag(),cN(64,` \xA0`),ag(),Tl(65,`td`),cN(66,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(67,`td`)(68,`code`),cN(69,`var(--border-radius-md)`),ag()()(),Tl(70,`tr`)(71,`td`)(72,`code`),cN(73,`--border-width`),ag(),cN(74,` \xA0`),ag(),Tl(75,`td`),cN(76,`Contém o valor da largura dos cantos do elemento\xA0`),ag(),Tl(77,`td`)(78,`code`),cN(79,`var(--border-width-sm)`),ag()()(),Tl(80,`tr`)(81,`td`)(82,`code`),cN(83,`--border-color`),ag(),cN(84,` \xA0`),ag(),Tl(85,`td`),cN(86,`Cor da borda`),ag(),Tl(87,`td`)(88,`code`),cN(89,`var(--color-neutral-light-20)`),ag()()(),Tl(90,`tr`)(91,`td`)(92,`code`),cN(93,`--background`),ag(),cN(94,` \xA0`),ag(),Tl(95,`td`),cN(96,`Cor de background`),ag(),Tl(97,`td`)(98,`code`),cN(99,`var(--color-neutral-light-00)`),ag()()(),Tl(100,`tr`)(101,`td`)(102,`strong`),cN(103,`Default Values - TITLE`),ag()(),Gl(104,`td`)(105,`td`),ag(),Tl(106,`tr`)(107,`td`)(108,`code`),cN(109,`--font-family`),ag(),cN(110,` \xA0`),ag(),Tl(111,`td`),cN(112,`Font aplicado ao titulo`),ag(),Tl(113,`td`)(114,`code`),cN(115,`var(--font-family-theme)`),ag()()(),Tl(116,`tr`)(117,`td`)(118,`code`),cN(119,`--line-weight`),ag(),cN(120,` \xA0`),ag(),Tl(121,`td`),cN(122,`Espessura da Fonte a ser aplicada do titulo`),ag(),Tl(123,`td`)(124,`code`),cN(125,`var(--font-weight-semibold)`),ag()()(),Tl(126,`tr`)(127,`td`)(128,`code`),cN(129,`--line-height`),ag(),cN(130,` \xA0`),ag(),Tl(131,`td`),cN(132,`tamanho da linha do titulo`),ag(),Tl(133,`td`)(134,`code`),cN(135,`var(--line-height-md)`),ag()()(),Tl(136,`tr`)(137,`td`)(138,`code`),cN(139,`--text-color`),ag(),cN(140,` \xA0`),ag(),Tl(141,`td`),cN(142,`Cor do Texto do titulo`),ag(),Tl(143,`td`)(144,`code`),cN(145,`var(--color-neutral-dark-90)`),ag()()(),Tl(146,`tr`)(147,`td`)(148,`code`),cN(149,`--font-size`),ag(),cN(150,` \xA0`),ag(),Tl(151,`td`),cN(152,`Tamanho da fonte do titulo`),ag(),Tl(153,`td`)(154,`code`),cN(155,`1.125rem`),ag()()(),Tl(156,`tr`)(157,`td`)(158,`code`),cN(159,`--letter-spacing`),ag(),cN(160,` \xA0`),ag(),Tl(161,`td`),cN(162,`distancia entre letras do titulo`),ag(),Tl(163,`td`)(164,`code`),cN(165,`0.017rem`),ag()()(),Tl(166,`tr`)(167,`td`)(168,`code`),cN(169,`--margin`),ag(),cN(170,` \xA0`),ag(),Tl(171,`td`),cN(172,`Margin entre o titulo e o conteudo`),ag(),Tl(173,`td`)(174,`code`),cN(175,`0 0 var(--spacing-xs)`),ag()()()()()(),Tl(176,`div`,8)(177,`h4`,9),cN(178,`Seletor`),ag(),Tl(179,`pre`,10),cN(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),ag()(),Tl(181,`h4`,11),cN(182,`Propriedades`),ag(),Tl(183,`table`,12)(184,`tr`,13)(185,`th`,14),cN(186,`Nome`),ag(),Tl(187,`th`,14),cN(188,`Tipo`),ag(),Tl(189,`th`,14),cN(190,`Padrão`),ag(),Tl(191,`th`,14),cN(192,`Descrição`),ag()(),Tl(193,`tr`,15)(194,`td`,16)(195,`div`,17)(196,`span`,18),cN(197,` p-height`),Gl(198,`br`),ag()()(),Tl(199,`td`,19)(200,`code`,20),cN(201,`number`),ag()(),Tl(202,`td`,21),cN(203,`-`),ag(),Tl(204,`td`,22)(205,`em`)(206,`strong`),cN(207,`(opcional)`),ag()(),Tl(208,`p`),cN(209,`Define a altura do `),Tl(210,`code`),cN(211,`po-container`),ag(),cN(212,`.`),ag(),Tl(213,`blockquote`)(214,`p`),cN(215,`Caso não seja definido um valor, a altura se ajustará de acordo com o conteúdo.`),ag()()()(),Tl(216,`tr`,15)(217,`td`,16)(218,`div`,17)(219,`span`,18),cN(220,` p-no-border`),Gl(221,`br`),ag()()(),Tl(222,`td`,19)(223,`code`,23),cN(224,`boolean`),ag()(),Tl(225,`td`,21)(226,`p`)(227,`code`),cN(228,`false`),ag()()(),Tl(229,`td`,22)(230,`em`)(231,`strong`),cN(232,`(opcional)`),ag()(),Tl(233,`p`),cN(234,`Desabilita a borda e a sombra em torno do `),Tl(235,`code`),cN(236,`po-container`),ag(),cN(237,`.`),ag()()(),Tl(238,`tr`,15)(239,`td`,16)(240,`div`,17)(241,`span`,18),cN(242,` p-no-padding`),Gl(243,`br`),ag()()(),Tl(244,`td`,19)(245,`code`,23),cN(246,`boolean`),ag()(),Tl(247,`td`,21)(248,`p`)(249,`code`),cN(250,`false`),ag()()(),Tl(251,`td`,22)(252,`em`)(253,`strong`),cN(254,`(opcional)`),ag()(),Tl(255,`p`),cN(256,`Desabilita o espaçamento interno do `),Tl(257,`code`),cN(258,`po-container`),ag(),cN(259,`.`),ag()()(),Tl(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),cN(264,` p-title`),Gl(265,`br`),ag()()(),Tl(266,`td`,19)(267,`code`,24),cN(268,`string`),ag()(),Tl(269,`td`,21),cN(270,`-`),ag(),Tl(271,`td`,22)(272,`em`)(273,`strong`),cN(274,`(opcional)`),ag()(),Tl(275,`p`),cN(276,`Título do Container.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Be=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Container`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-container-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-container-basic-view`)(6,`sample-po-container-labs-view`)(7,`sample-po-container-dashboard-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ue,be,Ce,Se],encapsulation:2,changeDetection:1})}return o})()}];var ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[bL.forChild(Be),bL]})}return o})();var dt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,ve]})}return o})();export{dt as DocPoContainerModule};