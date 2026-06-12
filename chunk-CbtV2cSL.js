import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,S,d as f,aV as Xp,aI as gc,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt$1,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,b4 as rme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,cE as Uz,b5 as Ko,a3 as SNe,b6 as U3,b9 as ONe,W as we,av as zl,aw as uo,ax as fo,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic"]],standalone:false,decls:1,vars:0,template:function(a,i){a&1&&Hl(0,"po-container");},dependencies:[gc],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Container Basic"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-container-basic/sample-po-container-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container></po-container>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-container-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,xe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore();}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs"]],standalone:false,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=gx();Cl(0,"po-container",1),qx(1),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",2)(6,"po-input",3),gw("ngModelChange",function(s){return Jy(m),Zx(i.title,s)||(i.title=s),e_(s)}),og(),Z0(),Cl(7,"po-number",4),gw("ngModelChange",function(s){return Jy(m),Zx(i.height,s)||(i.height=s),e_(s)}),og(),Z0(),Cl(8,"po-checkbox-group",5),gw("ngModelChange",function(s){return Jy(m),Zx(i.properties,s)||(i.properties=s),e_(s)}),og(),Z0(),og(),Cl(9,"div",2)(10,"po-textarea",6),gw("ngModelChange",function(s){return Jy(m),Zx(i.content,s)||(i.content=s),e_(s)}),og(),Z0(),og(),Cl(11,"div",2)(12,"po-button",7),dt$1("p-click",function(){return i.restore()}),og()()();}a&2&&(ZE("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),Lp(),dg(" ",i.content,`
`),Lp(5),pw("ngModel",i.title),X0(),Lp(),pw("ngModel",i.height),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(2),pw("ngModel",i.content),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,gc,_v,L3,q3,Hhe,rme],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Container Labs"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-container-labs/sample-po-container-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-container
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-container-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,he],encapsulation:2})}return o})();var U=(()=>{class o{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Me=["formShare"],ge=(()=>{class o{poNotification=f(Xp);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid;}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&zl(Me,7)(Ko,5),a&2){let m;uo(m=fo())&&(i.formShare=m.first),uo(m=fo())&&(i.poModal=m.first);}},standalone:false,features:[we([U])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let m=gx();Cl(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),qx(4,"540"),og(),Cl(5,"div",5),qx(6,"www.po.com.br"),og()(),Cl(7,"po-widget",6)(8,"div",4),qx(9,"300 views"),og(),Cl(10,"div",5),qx(11,"https://po-ui.io"),og()(),Cl(12,"po-widget",7)(13,"div",4),qx(14,"Online"),og(),Cl(15,"div",5),qx(16,"21 days"),og()(),Cl(17,"po-widget",8)(18,"div",4),qx(19,"266"),og(),Cl(20,"div",5),qx(21,"@po-ui/ng-components - 2.0.0"),og()(),Cl(22,"po-widget",9)(23,"div",4),qx(24,"800 questions"),og(),Cl(25,"div",5),qx(26,"https://devforum.po.com.br"),og()(),Cl(27,"po-widget",10)(28,"div",4),qx(29,"AngularJS - Angular 7"),og(),Cl(30,"div",5),qx(31,"Angular 7 most downloaded"),og()()(),Cl(32,"po-container",2),Hl(33,"po-table",11),og()(),Cl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),gw("ngModelChange",function(s){return Jy(m),Zx(i.email,s)||(i.email=s),e_(s)}),og(),Z0(),og()();}a&2&&(ZE("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),Lp(33),ZE("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Lp(),ZE("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Lp(3),pw("ngModel",i.email),X0());},dependencies:[lY,sY,aY,gk,fk,gc,Uz,Ko,SNe,U3,ONe],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Container - Dashboard"),og(),Cl(4,"a",2),dt$1("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og(),Cl(21,"label",6),qx(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()(),Cl(25,"po-tab",10)(26,"div")(27,"label",6),qx(28,"sample-po-container-dashboard/sample-po-container-dashboard.component.css"),og(),Cl(29,"pre",11),qx(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),og()()()()(),Cl(31,"div",12),Hl(32,"sample-po-container-dashboard"),og(),Hl(33,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return o})();var Se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-doc"]],standalone:false,decls:277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoContainerModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente "),Cl(7,"code"),qx(8,"po-container"),og(),qx(9,"."),og()(),Cl(10,"h3",3),qx(11,"Componente"),og(),Cl(12,"h4",4)(13,"code",5),qx(14,"PoContainerComponent"),og()(),Cl(15,"div",2)(16,"p"),qx(17,"O "),Cl(18,"code"),qx(19,"po-container"),og(),qx(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Cl(21,"a",6),qx(22,"Grid System"),og(),qx(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),og(),Cl(24,"h4"),qx(25,"Tokens customiz\xE1veis"),og(),Cl(26,"p"),qx(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(28,"blockquote")(29,"p"),qx(30,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(31,"a",7),qx(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(33,"."),og()(),Cl(34,"table")(35,"thead")(36,"tr")(37,"th"),qx(38,"Propriedade"),og(),Cl(39,"th"),qx(40,"Descri\xE7\xE3o"),og(),Cl(41,"th"),qx(42,"Valor Padr\xE3o"),og()()(),Cl(43,"tbody")(44,"tr")(45,"td")(46,"strong"),qx(47,"Default Values - CONTENT"),og()(),Hl(48,"td")(49,"td"),og(),Cl(50,"tr")(51,"td")(52,"code"),qx(53,"--padding"),og(),qx(54," \xA0"),og(),Cl(55,"td"),qx(56,"Preenchimento"),og(),Cl(57,"td")(58,"code"),qx(59,"var(--spacing-sm)"),og()()(),Cl(60,"tr")(61,"td")(62,"code"),qx(63,"--border-radius"),og(),qx(64," \xA0"),og(),Cl(65,"td"),qx(66,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(67,"td")(68,"code"),qx(69,"var(--border-radius-md)"),og()()(),Cl(70,"tr")(71,"td")(72,"code"),qx(73,"--border-width"),og(),qx(74," \xA0"),og(),Cl(75,"td"),qx(76,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Cl(77,"td")(78,"code"),qx(79,"var(--border-width-sm)"),og()()(),Cl(80,"tr")(81,"td")(82,"code"),qx(83,"--border-color"),og(),qx(84," \xA0"),og(),Cl(85,"td"),qx(86,"Cor da borda"),og(),Cl(87,"td")(88,"code"),qx(89,"var(--color-neutral-light-20)"),og()()(),Cl(90,"tr")(91,"td")(92,"code"),qx(93,"--background"),og(),qx(94," \xA0"),og(),Cl(95,"td"),qx(96,"Cor de background"),og(),Cl(97,"td")(98,"code"),qx(99,"var(--color-neutral-light-00)"),og()()(),Cl(100,"tr")(101,"td")(102,"strong"),qx(103,"Default Values - TITLE"),og()(),Hl(104,"td")(105,"td"),og(),Cl(106,"tr")(107,"td")(108,"code"),qx(109,"--font-family"),og(),qx(110," \xA0"),og(),Cl(111,"td"),qx(112,"Font aplicado ao titulo"),og(),Cl(113,"td")(114,"code"),qx(115,"var(--font-family-theme)"),og()()(),Cl(116,"tr")(117,"td")(118,"code"),qx(119,"--line-weight"),og(),qx(120," \xA0"),og(),Cl(121,"td"),qx(122,"Espessura da Fonte a ser aplicada do titulo"),og(),Cl(123,"td")(124,"code"),qx(125,"var(--font-weight-semibold)"),og()()(),Cl(126,"tr")(127,"td")(128,"code"),qx(129,"--line-height"),og(),qx(130," \xA0"),og(),Cl(131,"td"),qx(132,"tamanho da linha do titulo"),og(),Cl(133,"td")(134,"code"),qx(135,"var(--line-height-md)"),og()()(),Cl(136,"tr")(137,"td")(138,"code"),qx(139,"--text-color"),og(),qx(140," \xA0"),og(),Cl(141,"td"),qx(142,"Cor do Texto do titulo"),og(),Cl(143,"td")(144,"code"),qx(145,"var(--color-neutral-dark-90)"),og()()(),Cl(146,"tr")(147,"td")(148,"code"),qx(149,"--font-size"),og(),qx(150," \xA0"),og(),Cl(151,"td"),qx(152,"Tamanho da fonte do titulo"),og(),Cl(153,"td")(154,"code"),qx(155,"1.125rem"),og()()(),Cl(156,"tr")(157,"td")(158,"code"),qx(159,"--letter-spacing"),og(),qx(160," \xA0"),og(),Cl(161,"td"),qx(162,"distancia entre letras do titulo"),og(),Cl(163,"td")(164,"code"),qx(165,"0.017rem"),og()()(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--margin"),og(),qx(170," \xA0"),og(),Cl(171,"td"),qx(172,"Margin entre o titulo e o conteudo"),og(),Cl(173,"td")(174,"code"),qx(175,"0 0 var(--spacing-xs)"),og()()()()()(),Cl(176,"div",8)(177,"h4",9),qx(178,"Seletor"),og(),Cl(179,"pre",10),qx(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),og()(),Cl(181,"h4",11),qx(182,"Propriedades"),og(),Cl(183,"table",12)(184,"tr",13)(185,"th",14),qx(186,"Nome"),og(),Cl(187,"th",14),qx(188,"Tipo"),og(),Cl(189,"th",14),qx(190,"Padr\xE3o"),og(),Cl(191,"th",14),qx(192,"Descri\xE7\xE3o"),og()(),Cl(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),qx(197," p-height"),Hl(198,"br"),og()()(),Cl(199,"td",19)(200,"code",20),qx(201,"number"),og()(),Cl(202,"td",21),qx(203,"-"),og(),Cl(204,"td",22)(205,"em")(206,"strong"),qx(207,"(opcional)"),og()(),Cl(208,"p"),qx(209,"Define a altura do "),Cl(210,"code"),qx(211,"po-container"),og(),qx(212,"."),og(),Cl(213,"blockquote")(214,"p"),qx(215,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),og()()()(),Cl(216,"tr",15)(217,"td",16)(218,"div",17)(219,"span",18),qx(220," p-no-border"),Hl(221,"br"),og()()(),Cl(222,"td",19)(223,"code",23),qx(224,"boolean"),og()(),Cl(225,"td",21)(226,"p")(227,"code"),qx(228,"false"),og()()(),Cl(229,"td",22)(230,"em")(231,"strong"),qx(232,"(opcional)"),og()(),Cl(233,"p"),qx(234,"Desabilita a borda e a sombra em torno do "),Cl(235,"code"),qx(236,"po-container"),og(),qx(237,"."),og()()(),Cl(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),qx(242," p-no-padding"),Hl(243,"br"),og()()(),Cl(244,"td",19)(245,"code",23),qx(246,"boolean"),og()(),Cl(247,"td",21)(248,"p")(249,"code"),qx(250,"false"),og()()(),Cl(251,"td",22)(252,"em")(253,"strong"),qx(254,"(opcional)"),og()(),Cl(255,"p"),qx(256,"Desabilita o espa\xE7amento interno do "),Cl(257,"code"),qx(258,"po-container"),og(),qx(259,"."),og()()(),Cl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),qx(264," p-title"),Hl(265,"br"),og()()(),Cl(266,"td",19)(267,"code",24),qx(268,"string"),og()(),Cl(269,"td",21),qx(270,"-"),og(),Cl(271,"td",22)(272,"em")(273,"strong"),qx(274,"(opcional)"),og()(),Cl(275,"p"),qx(276,"T\xEDtulo do Container."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt$1("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-container-doc"),og(),Cl(4,"po-tab",3),dt$1("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ue,be,Ce,Se],encapsulation:2})}return o})();var Be=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[bL.forChild(Be),bL]})}return o})();var dt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ca,ve]})}return o})();export{dt as DocPoContainerModule};