import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,w,d as f,aW as Yp,aI as dc,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,b5 as jhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,cz as Ez,b6 as Yo,a3 as pNe,b7 as A3,ba as bNe,X as we,av as ql,aw as lo,ax as uo,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic"]],standalone:false,decls:1,vars:0,template:function(a,i){a&1&&Wl(0,"po-container");},dependencies:[dc],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Container Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-container-basic/sample-po-container-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container></po-container>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-container-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,xe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore();}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs"]],standalone:false,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Ex();Sl(0,"po-container",1),Jx(1),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",2)(6,"po-input",3),Ew("ngModelChange",function(s){return Xy(m),tN(i.title,s)||(i.title=s),Qy(s)}),sg(),JA(),Sl(7,"po-number",4),Ew("ngModelChange",function(s){return Xy(m),tN(i.height,s)||(i.height=s),Qy(s)}),sg(),JA(),Sl(8,"po-checkbox-group",5),Ew("ngModelChange",function(s){return Xy(m),tN(i.properties,s)||(i.properties=s),Qy(s)}),sg(),JA(),sg(),Sl(9,"div",2)(10,"po-textarea",6),Ew("ngModelChange",function(s){return Xy(m),tN(i.content,s)||(i.content=s),Qy(s)}),sg(),JA(),sg(),Sl(11,"div",2)(12,"po-button",7),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(tw("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),Vp(),fg(" ",i.content,`
`),Vp(5),Dw("ngModel",i.title),t0(),Vp(),Dw("ngModel",i.height),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(2),Dw("ngModel",i.content),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,dc,mv,x3,F3,Uhe,jhe],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Container Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-container-labs/sample-po-container-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-container
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-container-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return o})();var U=(()=>{class o{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Me=["formShare"],ge=(()=>{class o{poNotification=f(Yp);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid;}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&ql(Me,7)(Yo,5),a&2){let m;lo(m=uo())&&(i.formShare=m.first),lo(m=uo())&&(i.poModal=m.first);}},standalone:false,features:[we([U])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let m=Ex();Sl(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),Jx(4,"540"),sg(),Sl(5,"div",5),Jx(6,"www.po.com.br"),sg()(),Sl(7,"po-widget",6)(8,"div",4),Jx(9,"300 views"),sg(),Sl(10,"div",5),Jx(11,"https://po-ui.io"),sg()(),Sl(12,"po-widget",7)(13,"div",4),Jx(14,"Online"),sg(),Sl(15,"div",5),Jx(16,"21 days"),sg()(),Sl(17,"po-widget",8)(18,"div",4),Jx(19,"266"),sg(),Sl(20,"div",5),Jx(21,"@po-ui/ng-components - 2.0.0"),sg()(),Sl(22,"po-widget",9)(23,"div",4),Jx(24,"800 questions"),sg(),Sl(25,"div",5),Jx(26,"https://devforum.po.com.br"),sg()(),Sl(27,"po-widget",10)(28,"div",4),Jx(29,"AngularJS - Angular 7"),sg(),Sl(30,"div",5),Jx(31,"Angular 7 most downloaded"),sg()()(),Sl(32,"po-container",2),Wl(33,"po-table",11),sg()(),Sl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),Ew("ngModelChange",function(s){return Xy(m),tN(i.email,s)||(i.email=s),Qy(s)}),sg(),JA(),sg()();}a&2&&(tw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),Vp(33),tw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Vp(),tw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Vp(3),Dw("ngModel",i.email),t0());},dependencies:[J9,K9,X9,Dk,vk,dc,Ez,Yo,pNe,A3,bNe],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Container - Dashboard"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()(),Sl(25,"po-tab",10)(26,"div")(27,"label",6),Jx(28,"sample-po-container-dashboard/sample-po-container-dashboard.component.css"),sg(),Sl(29,"pre",11),Jx(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),sg()()()()(),Sl(31,"div",12),Wl(32,"sample-po-container-dashboard"),sg(),Wl(33,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-doc"]],standalone:false,decls:277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoContainerModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente "),Sl(7,"code"),Jx(8,"po-container"),sg(),Jx(9,"."),sg()(),Sl(10,"h3",3),Jx(11,"Componente"),sg(),Sl(12,"h4",4)(13,"code",5),Jx(14,"PoContainerComponent"),sg()(),Sl(15,"div",2)(16,"p"),Jx(17,"O "),Sl(18,"code"),Jx(19,"po-container"),sg(),Jx(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Sl(21,"a",6),Jx(22,"Grid System"),sg(),Jx(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),sg(),Sl(24,"h4"),Jx(25,"Tokens customiz\xE1veis"),sg(),Sl(26,"p"),Jx(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(28,"blockquote")(29,"p"),Jx(30,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(31,"a",7),Jx(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(33,"."),sg()(),Sl(34,"table")(35,"thead")(36,"tr")(37,"th"),Jx(38,"Propriedade"),sg(),Sl(39,"th"),Jx(40,"Descri\xE7\xE3o"),sg(),Sl(41,"th"),Jx(42,"Valor Padr\xE3o"),sg()()(),Sl(43,"tbody")(44,"tr")(45,"td")(46,"strong"),Jx(47,"Default Values - CONTENT"),sg()(),Wl(48,"td")(49,"td"),sg(),Sl(50,"tr")(51,"td")(52,"code"),Jx(53,"--padding"),sg(),Jx(54," \xA0"),sg(),Sl(55,"td"),Jx(56,"Preenchimento"),sg(),Sl(57,"td")(58,"code"),Jx(59,"var(--spacing-sm)"),sg()()(),Sl(60,"tr")(61,"td")(62,"code"),Jx(63,"--border-radius"),sg(),Jx(64," \xA0"),sg(),Sl(65,"td"),Jx(66,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(67,"td")(68,"code"),Jx(69,"var(--border-radius-md)"),sg()()(),Sl(70,"tr")(71,"td")(72,"code"),Jx(73,"--border-width"),sg(),Jx(74," \xA0"),sg(),Sl(75,"td"),Jx(76,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(77,"td")(78,"code"),Jx(79,"var(--border-width-sm)"),sg()()(),Sl(80,"tr")(81,"td")(82,"code"),Jx(83,"--border-color"),sg(),Jx(84," \xA0"),sg(),Sl(85,"td"),Jx(86,"Cor da borda"),sg(),Sl(87,"td")(88,"code"),Jx(89,"var(--color-neutral-light-20)"),sg()()(),Sl(90,"tr")(91,"td")(92,"code"),Jx(93,"--background"),sg(),Jx(94," \xA0"),sg(),Sl(95,"td"),Jx(96,"Cor de background"),sg(),Sl(97,"td")(98,"code"),Jx(99,"var(--color-neutral-light-00)"),sg()()(),Sl(100,"tr")(101,"td")(102,"strong"),Jx(103,"Default Values - TITLE"),sg()(),Wl(104,"td")(105,"td"),sg(),Sl(106,"tr")(107,"td")(108,"code"),Jx(109,"--font-family"),sg(),Jx(110," \xA0"),sg(),Sl(111,"td"),Jx(112,"Font aplicado ao titulo"),sg(),Sl(113,"td")(114,"code"),Jx(115,"var(--font-family-theme)"),sg()()(),Sl(116,"tr")(117,"td")(118,"code"),Jx(119,"--line-weight"),sg(),Jx(120," \xA0"),sg(),Sl(121,"td"),Jx(122,"Espessura da Fonte a ser aplicada do titulo"),sg(),Sl(123,"td")(124,"code"),Jx(125,"var(--font-weight-semibold)"),sg()()(),Sl(126,"tr")(127,"td")(128,"code"),Jx(129,"--line-height"),sg(),Jx(130," \xA0"),sg(),Sl(131,"td"),Jx(132,"tamanho da linha do titulo"),sg(),Sl(133,"td")(134,"code"),Jx(135,"var(--line-height-md)"),sg()()(),Sl(136,"tr")(137,"td")(138,"code"),Jx(139,"--text-color"),sg(),Jx(140," \xA0"),sg(),Sl(141,"td"),Jx(142,"Cor do Texto do titulo"),sg(),Sl(143,"td")(144,"code"),Jx(145,"var(--color-neutral-dark-90)"),sg()()(),Sl(146,"tr")(147,"td")(148,"code"),Jx(149,"--font-size"),sg(),Jx(150," \xA0"),sg(),Sl(151,"td"),Jx(152,"Tamanho da fonte do titulo"),sg(),Sl(153,"td")(154,"code"),Jx(155,"1.125rem"),sg()()(),Sl(156,"tr")(157,"td")(158,"code"),Jx(159,"--letter-spacing"),sg(),Jx(160," \xA0"),sg(),Sl(161,"td"),Jx(162,"distancia entre letras do titulo"),sg(),Sl(163,"td")(164,"code"),Jx(165,"0.017rem"),sg()()(),Sl(166,"tr")(167,"td")(168,"code"),Jx(169,"--margin"),sg(),Jx(170," \xA0"),sg(),Sl(171,"td"),Jx(172,"Margin entre o titulo e o conteudo"),sg(),Sl(173,"td")(174,"code"),Jx(175,"0 0 var(--spacing-xs)"),sg()()()()()(),Sl(176,"div",8)(177,"h4",9),Jx(178,"Seletor"),sg(),Sl(179,"pre",10),Jx(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),sg()(),Sl(181,"h4",11),Jx(182,"Propriedades"),sg(),Sl(183,"table",12)(184,"tr",13)(185,"th",14),Jx(186,"Nome"),sg(),Sl(187,"th",14),Jx(188,"Tipo"),sg(),Sl(189,"th",14),Jx(190,"Padr\xE3o"),sg(),Sl(191,"th",14),Jx(192,"Descri\xE7\xE3o"),sg()(),Sl(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),Jx(197," p-height"),Wl(198,"br"),sg()()(),Sl(199,"td",19)(200,"code",20),Jx(201,"number"),sg()(),Sl(202,"td",21),Jx(203,"-"),sg(),Sl(204,"td",22)(205,"em")(206,"strong"),Jx(207,"(opcional)"),sg()(),Sl(208,"p"),Jx(209,"Define a altura do "),Sl(210,"code"),Jx(211,"po-container"),sg(),Jx(212,"."),sg(),Sl(213,"blockquote")(214,"p"),Jx(215,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),sg()()()(),Sl(216,"tr",15)(217,"td",16)(218,"div",17)(219,"span",18),Jx(220," p-no-border"),Wl(221,"br"),sg()()(),Sl(222,"td",19)(223,"code",23),Jx(224,"boolean"),sg()(),Sl(225,"td",21)(226,"p")(227,"code"),Jx(228,"false"),sg()()(),Sl(229,"td",22)(230,"em")(231,"strong"),Jx(232,"(opcional)"),sg()(),Sl(233,"p"),Jx(234,"Desabilita a borda e a sombra em torno do "),Sl(235,"code"),Jx(236,"po-container"),sg(),Jx(237,"."),sg()()(),Sl(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),Jx(242," p-no-padding"),Wl(243,"br"),sg()()(),Sl(244,"td",19)(245,"code",23),Jx(246,"boolean"),sg()(),Sl(247,"td",21)(248,"p")(249,"code"),Jx(250,"false"),sg()()(),Sl(251,"td",22)(252,"em")(253,"strong"),Jx(254,"(opcional)"),sg()(),Sl(255,"p"),Jx(256,"Desabilita o espa\xE7amento interno do "),Sl(257,"code"),Jx(258,"po-container"),sg(),Jx(259,"."),sg()()(),Sl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),Jx(264," p-title"),Wl(265,"br"),sg()()(),Sl(266,"td",19)(267,"code",24),Jx(268,"string"),sg()(),Sl(269,"td",21),Jx(270,"-"),sg(),Sl(271,"td",22)(272,"em")(273,"strong"),Jx(274,"(opcional)"),sg()(),Sl(275,"p"),Jx(276,"T\xEDtulo do Container."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-container-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ue,be,Ce,Se],encapsulation:2})}return o})();var Be=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[pL.forChild(Be),pL]})}return o})();var dt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ar,ve]})}return o})();export{dt as DocPoContainerModule};