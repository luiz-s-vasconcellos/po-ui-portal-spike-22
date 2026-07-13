import {f as fe$1,u as ue$1,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,I,c as f,aW as Yp,aI as dc,L as Gl,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as b3,b4 as L3,cp as Bhe,b5 as Ghe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,cz as Pz,b6 as Yo,a3 as sNe,b7 as M3,ba as vNe,Q as we,av as Yl,aw as uo,ax as fo,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic"]],standalone:false,decls:1,vars:0,template:function(a,i){a&1&&Gl(0,"po-container");},dependencies:[dc],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Container Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-container-basic/sample-po-container-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-container></po-container>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-container-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,xe,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,me],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore();}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs"]],standalone:false,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let m=Sx();Tl(0,"po-container",1),iN(1),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",2)(6,"po-input",3),ww("ngModelChange",function(s){return Ky(m),sN(i.title,s)||(i.title=s),Xy(s)}),sg(),r0(),Tl(7,"po-number",4),ww("ngModelChange",function(s){return Ky(m),sN(i.height,s)||(i.height=s),Xy(s)}),sg(),r0(),Tl(8,"po-checkbox-group",5),ww("ngModelChange",function(s){return Ky(m),sN(i.properties,s)||(i.properties=s),Xy(s)}),sg(),r0(),sg(),Tl(9,"div",2)(10,"po-textarea",6),ww("ngModelChange",function(s){return Ky(m),sN(i.content,s)||(i.content=s),Xy(s)}),sg(),r0(),sg(),Tl(11,"div",2)(12,"po-button",7),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(nw("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),Vp(),fg(" ",i.content,`
`),Vp(5),Ew("ngModel",i.title),o0(),Vp(),Ew("ngModel",i.height),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(2),Ew("ngModel",i.content),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,dc,mv,b3,L3,Bhe,Ghe],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Container Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-container-labs/sample-po-container-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-container
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-container-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,De,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,he],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Me=["formShare"],ge=(()=>{class o{poNotification=f(Yp);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid;}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&Yl(Me,7)(Yo,5),a&2){let m;uo(m=fo())&&(i.formShare=m.first),uo(m=fo())&&(i.poModal=m.first);}},standalone:false,features:[we([U])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let m=Sx();Tl(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),iN(4,"540"),sg(),Tl(5,"div",5),iN(6,"www.po.com.br"),sg()(),Tl(7,"po-widget",6)(8,"div",4),iN(9,"300 views"),sg(),Tl(10,"div",5),iN(11,"https://po-ui.io"),sg()(),Tl(12,"po-widget",7)(13,"div",4),iN(14,"Online"),sg(),Tl(15,"div",5),iN(16,"21 days"),sg()(),Tl(17,"po-widget",8)(18,"div",4),iN(19,"266"),sg(),Tl(20,"div",5),iN(21,"@po-ui/ng-components - 2.0.0"),sg()(),Tl(22,"po-widget",9)(23,"div",4),iN(24,"800 questions"),sg(),Tl(25,"div",5),iN(26,"https://devforum.po.com.br"),sg()(),Tl(27,"po-widget",10)(28,"div",4),iN(29,"AngularJS - Angular 7"),sg(),Tl(30,"div",5),iN(31,"Angular 7 most downloaded"),sg()()(),Tl(32,"po-container",2),Gl(33,"po-table",11),sg()(),Tl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),ww("ngModelChange",function(s){return Ky(m),sN(i.email,s)||(i.email=s),Xy(s)}),sg(),r0(),sg()();}a&2&&(nw("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),Vp(33),nw("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Vp(),nw("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Vp(3),Ew("ngModel",i.email),o0());},dependencies:[oY,nY,rY,Sk,Ck,dc,Pz,Yo,sNe,M3,vNe],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"],changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Container - Dashboard"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()(),Tl(25,"po-tab",10)(26,"div")(27,"label",6),iN(28,"sample-po-container-dashboard/sample-po-container-dashboard.component.css"),sg(),Tl(29,"pre",11),iN(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),sg()()()()(),Tl(31,"div",12),Gl(32,"sample-po-container-dashboard"),sg(),Gl(33,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,_e,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,ge],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-doc"]],standalone:false,decls:277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoContainerModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente "),Tl(7,"code"),iN(8,"po-container"),sg(),iN(9,"."),sg()(),Tl(10,"h3",3),iN(11,"Componente"),sg(),Tl(12,"h4",4)(13,"code",5),iN(14,"PoContainerComponent"),sg()(),Tl(15,"div",2)(16,"p"),iN(17,"O "),Tl(18,"code"),iN(19,"po-container"),sg(),iN(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),Tl(21,"a",6),iN(22,"Grid System"),sg(),iN(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),sg(),Tl(24,"h4"),iN(25,"Tokens customiz\xE1veis"),sg(),Tl(26,"p"),iN(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Tl(28,"blockquote")(29,"p"),iN(30,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(31,"a",7),iN(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(33,"."),sg()(),Tl(34,"table")(35,"thead")(36,"tr")(37,"th"),iN(38,"Propriedade"),sg(),Tl(39,"th"),iN(40,"Descri\xE7\xE3o"),sg(),Tl(41,"th"),iN(42,"Valor Padr\xE3o"),sg()()(),Tl(43,"tbody")(44,"tr")(45,"td")(46,"strong"),iN(47,"Default Values - CONTENT"),sg()(),Gl(48,"td")(49,"td"),sg(),Tl(50,"tr")(51,"td")(52,"code"),iN(53,"--padding"),sg(),iN(54," \xA0"),sg(),Tl(55,"td"),iN(56,"Preenchimento"),sg(),Tl(57,"td")(58,"code"),iN(59,"var(--spacing-sm)"),sg()()(),Tl(60,"tr")(61,"td")(62,"code"),iN(63,"--border-radius"),sg(),iN(64," \xA0"),sg(),Tl(65,"td"),iN(66,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(67,"td")(68,"code"),iN(69,"var(--border-radius-md)"),sg()()(),Tl(70,"tr")(71,"td")(72,"code"),iN(73,"--border-width"),sg(),iN(74," \xA0"),sg(),Tl(75,"td"),iN(76,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Tl(77,"td")(78,"code"),iN(79,"var(--border-width-sm)"),sg()()(),Tl(80,"tr")(81,"td")(82,"code"),iN(83,"--border-color"),sg(),iN(84," \xA0"),sg(),Tl(85,"td"),iN(86,"Cor da borda"),sg(),Tl(87,"td")(88,"code"),iN(89,"var(--color-neutral-light-20)"),sg()()(),Tl(90,"tr")(91,"td")(92,"code"),iN(93,"--background"),sg(),iN(94," \xA0"),sg(),Tl(95,"td"),iN(96,"Cor de background"),sg(),Tl(97,"td")(98,"code"),iN(99,"var(--color-neutral-light-00)"),sg()()(),Tl(100,"tr")(101,"td")(102,"strong"),iN(103,"Default Values - TITLE"),sg()(),Gl(104,"td")(105,"td"),sg(),Tl(106,"tr")(107,"td")(108,"code"),iN(109,"--font-family"),sg(),iN(110," \xA0"),sg(),Tl(111,"td"),iN(112,"Font aplicado ao titulo"),sg(),Tl(113,"td")(114,"code"),iN(115,"var(--font-family-theme)"),sg()()(),Tl(116,"tr")(117,"td")(118,"code"),iN(119,"--line-weight"),sg(),iN(120," \xA0"),sg(),Tl(121,"td"),iN(122,"Espessura da Fonte a ser aplicada do titulo"),sg(),Tl(123,"td")(124,"code"),iN(125,"var(--font-weight-semibold)"),sg()()(),Tl(126,"tr")(127,"td")(128,"code"),iN(129,"--line-height"),sg(),iN(130," \xA0"),sg(),Tl(131,"td"),iN(132,"tamanho da linha do titulo"),sg(),Tl(133,"td")(134,"code"),iN(135,"var(--line-height-md)"),sg()()(),Tl(136,"tr")(137,"td")(138,"code"),iN(139,"--text-color"),sg(),iN(140," \xA0"),sg(),Tl(141,"td"),iN(142,"Cor do Texto do titulo"),sg(),Tl(143,"td")(144,"code"),iN(145,"var(--color-neutral-dark-90)"),sg()()(),Tl(146,"tr")(147,"td")(148,"code"),iN(149,"--font-size"),sg(),iN(150," \xA0"),sg(),Tl(151,"td"),iN(152,"Tamanho da fonte do titulo"),sg(),Tl(153,"td")(154,"code"),iN(155,"1.125rem"),sg()()(),Tl(156,"tr")(157,"td")(158,"code"),iN(159,"--letter-spacing"),sg(),iN(160," \xA0"),sg(),Tl(161,"td"),iN(162,"distancia entre letras do titulo"),sg(),Tl(163,"td")(164,"code"),iN(165,"0.017rem"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),iN(169,"--margin"),sg(),iN(170," \xA0"),sg(),Tl(171,"td"),iN(172,"Margin entre o titulo e o conteudo"),sg(),Tl(173,"td")(174,"code"),iN(175,"0 0 var(--spacing-xs)"),sg()()()()()(),Tl(176,"div",8)(177,"h4",9),iN(178,"Seletor"),sg(),Tl(179,"pre",10),iN(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),sg()(),Tl(181,"h4",11),iN(182,"Propriedades"),sg(),Tl(183,"table",12)(184,"tr",13)(185,"th",14),iN(186,"Nome"),sg(),Tl(187,"th",14),iN(188,"Tipo"),sg(),Tl(189,"th",14),iN(190,"Padr\xE3o"),sg(),Tl(191,"th",14),iN(192,"Descri\xE7\xE3o"),sg()(),Tl(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),iN(197," p-height"),Gl(198,"br"),sg()()(),Tl(199,"td",19)(200,"code",20),iN(201,"number"),sg()(),Tl(202,"td",21),iN(203,"-"),sg(),Tl(204,"td",22)(205,"em")(206,"strong"),iN(207,"(opcional)"),sg()(),Tl(208,"p"),iN(209,"Define a altura do "),Tl(210,"code"),iN(211,"po-container"),sg(),iN(212,"."),sg(),Tl(213,"blockquote")(214,"p"),iN(215,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),sg()()()(),Tl(216,"tr",15)(217,"td",16)(218,"div",17)(219,"span",18),iN(220," p-no-border"),Gl(221,"br"),sg()()(),Tl(222,"td",19)(223,"code",23),iN(224,"boolean"),sg()(),Tl(225,"td",21)(226,"p")(227,"code"),iN(228,"false"),sg()()(),Tl(229,"td",22)(230,"em")(231,"strong"),iN(232,"(opcional)"),sg()(),Tl(233,"p"),iN(234,"Desabilita a borda e a sombra em torno do "),Tl(235,"code"),iN(236,"po-container"),sg(),iN(237,"."),sg()()(),Tl(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),iN(242," p-no-padding"),Gl(243,"br"),sg()()(),Tl(244,"td",19)(245,"code",23),iN(246,"boolean"),sg()(),Tl(247,"td",21)(248,"p")(249,"code"),iN(250,"false"),sg()()(),Tl(251,"td",22)(252,"em")(253,"strong"),iN(254,"(opcional)"),sg()(),Tl(255,"p"),iN(256,"Desabilita o espa\xE7amento interno do "),Tl(257,"code"),iN(258,"po-container"),sg(),iN(259,"."),sg()()(),Tl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),iN(264," p-title"),Gl(265,"br"),sg()()(),Tl(266,"td",19)(267,"code",24),iN(268,"string"),sg()(),Tl(269,"td",21),iN(270,"-"),sg(),Tl(271,"td",22)(272,"em")(273,"strong"),iN(274,"(opcional)"),sg()(),Tl(275,"p"),iN(276,"T\xEDtulo do Container."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-container-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),sg()()()),a&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ue,be,Ce,Se],encapsulation:2,changeDetection:1})}return o})();var Be=[{path:"",component:fe}],ve=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[DL.forChild(Be),DL]})}return o})();var dt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[sr,ve]})}return o})();export{dt as DocPoContainerModule};