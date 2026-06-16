import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,E,d as f,aE as Bp,ah as uo,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,aP as Da,al as lx,am as pw,an as $0,ap as hw,aq as G0,c2 as Ap,aQ as dt,a3 as D3,aR as ty,aU as IR,X as we$1,as as $l,c3 as zo,at as uo$1,au as fo,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var he=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic"]],standalone:false,decls:1,vars:0,template:function(a,i){a&1&&Ul(0,"po-container");},dependencies:[uo],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Container Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-container-basic/sample-po-container-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container></po-container>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-container-basic/sample-po-container-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-container-basic',
  templateUrl: './sample-po-container-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoContainerBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-container-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return o})();var Ce=(()=>{class o{content;title;height;properties;propertiesOptions=[{value:"noBorder",label:"No Border"},{value:"noPadding",label:"No Padding"}];ngOnInit(){this.restore();}restore(){this.title=void 0,this.content=void 0,this.height=void 0,this.properties=[];}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs"]],standalone:false,decls:13,vars:10,consts:[["f","ngForm"],[3,"p-title","p-height","p-no-border","p-no-padding"],[1,"po-row"],["name","title","p-label","Titulo",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let d=lx();wl(0,"po-container",1),Ux(1),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",2)(6,"po-input",3),pw("ngModelChange",function(s){return Qy(d),$x(i.title,s)||(i.title=s),Jy(s)}),ng(),$0(),wl(7,"po-number",4),pw("ngModelChange",function(s){return Qy(d),$x(i.height,s)||(i.height=s),Jy(s)}),ng(),$0(),wl(8,"po-checkbox-group",5),pw("ngModelChange",function(s){return Qy(d),$x(i.properties,s)||(i.properties=s),Jy(s)}),ng(),$0(),ng(),wl(9,"div",2)(10,"po-textarea",6),pw("ngModelChange",function(s){return Qy(d),$x(i.content,s)||(i.content=s),Jy(s)}),ng(),$0(),ng(),wl(11,"div",2)(12,"po-button",7),ut("p-click",function(){return i.restore()}),ng()()();}a&2&&(YE("p-title",i.title)("p-height",i.height)("p-no-border",i.properties.includes("noBorder"))("p-no-padding",i.properties.includes("noPadding")),Pp(),cg(" ",i.content,`
`),Pp(5),hw("ngModel",i.title),G0(),Pp(),hw("ngModel",i.height),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(2),hw("ngModel",i.content),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,uo,di,ia,Yo,ha,Da],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Container Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-container-labs/sample-po-container-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-container
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-container-labs/sample-po-container-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-container-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ke,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ce],encapsulation:2})}return o})();var U=(()=>{class o{getColumns(){return [{property:"cities",label:"Cities that most downloaded PO"},{property:"packageVersion",label:"Package version"},{property:"downloads"}]}getItems(){return [{cities:"S\xE3o Paulo",packageVersion:"3.0.0-beta.1",downloads:"2000"},{cities:"Joinville",packageVersion:"2.9.1",downloads:"1000"},{cities:"Rio de Janeiro",packageVersion:"3.0.0",downloads:"250"},{cities:"Santa Catarina",packageVersion:"1.9.1",downloads:"100"},{cities:"Curitiba",packageVersion:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",packageVersion:"1.9.1",downloads:"250"},{cities:"Londrina",packageVersion:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",packageVersion:"1.9.1",downloads:"1100"}]}static \u0275fac=function(a){return new(a||o)};static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ae=["formShare"],Se=(()=>{class o{poNotification=f(Bp);sampleDashboardService=f(U);formShare;poModal;columns;email=void 0;isSubscribed=false;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"Disable notification",icon:"an an-bell",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose();},label:"Cancel"};shareAction={action:()=>{this.share();},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems();}ngAfterContentChecked(){this.shareAction.danger=this.formShare.invalid;}modalClose(){this.poModal.close(),this.formShare.reset();}modalOpen(){this.poModal.open();}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Invalid email."),this.modalClose();}disableNotification(){this.isSubscribed=true;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard"]],viewQuery:function(a,i){if(a&1&&$l(Ae,7)(zo,5),a&2){let d;uo$1(d=fo())&&(i.formShare=d.first),uo$1(d=fo())&&(i.poModal=d.first);}},standalone:false,features:[we$1([U])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-lg-6"],["p-title","Daily visitors",1,"po-lg-6","po-mb-1"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-container-dashboard"],["p-title","Most viewed page",1,"po-lg-6","po-mb-1"],["p-title","Website status",1,"po-lg-6","po-mb-1"],["p-title","NPM downloads",1,"po-lg-6","po-mb-1"],["p-title","Devforum PO questions",1,"po-lg-6","po-mb-1"],["p-title","Angular versions supported",1,"po-lg-6","po-mb-1"],["p-striped","true",3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(a,i){if(a&1){let d=lx();wl(0,"po-page-default",1)(1,"po-container",2)(2,"po-widget",3)(3,"div",4),Ux(4,"540"),ng(),wl(5,"div",5),Ux(6,"www.po.com.br"),ng()(),wl(7,"po-widget",6)(8,"div",4),Ux(9,"300 views"),ng(),wl(10,"div",5),Ux(11,"https://po-ui.io"),ng()(),wl(12,"po-widget",7)(13,"div",4),Ux(14,"Online"),ng(),wl(15,"div",5),Ux(16,"21 days"),ng()(),wl(17,"po-widget",8)(18,"div",4),Ux(19,"266"),ng(),wl(20,"div",5),Ux(21,"@po-ui/ng-components - 2.0.0"),ng()(),wl(22,"po-widget",9)(23,"div",4),Ux(24,"800 questions"),ng(),wl(25,"div",5),Ux(26,"https://devforum.po.com.br"),ng()(),wl(27,"po-widget",10)(28,"div",4),Ux(29,"AngularJS - Angular 7"),ng(),wl(30,"div",5),Ux(31,"Angular 7 most downloaded"),ng()()(),wl(32,"po-container",2),Ul(33,"po-table",11),ng()(),wl(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),pw("ngModelChange",function(s){return Qy(d),$x(i.email,s)||(i.email=s),Jy(s)}),ng(),$0(),ng()();}a&2&&(YE("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),Pp(33),YE("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",false),Pp(),YE("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),Pp(3),hw("ngModel",i.email),G0());},dependencies:[aY,iY,oY,ck,ok,uo,Ap,dt,D3,ty,IR],styles:[".sample-container-dashboard[_ngcontent-%COMP%]{color:#9da7a9;font-family:NunitoSans;font-size:14px}"],changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-dashboard-view"]],standalone:false,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Container - Dashboard"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-container-dashboard/sample-po-container-dashboard.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-container-dashboard/sample-po-container-dashboard.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { AfterContentChecked, Component, ViewChild, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-container-dashboard/sample-po-container-dashboard.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()(),wl(25,"po-tab",10)(26,"div")(27,"label",6),Ux(28,"sample-po-container-dashboard/sample-po-container-dashboard.component.css"),ng(),wl(29,"pre",11),Ux(30,`.sample-container-dashboard {
  color: #9da7a9;
  font-family: NunitoSans;
  font-size: 14px;
}
`),ng()()()()(),wl(31,"div",12),Ul(32,"sample-po-container-dashboard"),ng(),Ul(33,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ne,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Se],encapsulation:2})}return o})();var Ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-container-doc"]],standalone:false,decls:277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"]],template:function(a,i){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoContainerModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente "),wl(7,"code"),Ux(8,"po-container"),ng(),Ux(9,"."),ng()(),wl(10,"h3",3),Ux(11,"Componente"),ng(),wl(12,"h4",4)(13,"code",5),Ux(14,"PoContainerComponent"),ng()(),wl(15,"div",2)(16,"p"),Ux(17,"O "),wl(18,"code"),Ux(19,"po-container"),ng(),Ux(20,` \xE9 um componente que visa facilitar o agrupamento de conte\xFAdos.
Por padr\xE3o o mesmo exibe uma borda, um efeito de sombra ao seu redor e um espa\xE7amento em sua parte interna, os quais
podem ser desabilitados. Ao remover sua borda a sombra tamb\xE9m ser\xE1 removida. Al\xE9m disso, sua altura acompanha a
quantidade do conte\xFAdo, por\xE9m pode ser fixada. Para controlar sua largura, utilize o `),wl(21,"a",6),Ux(22,"Grid System"),ng(),Ux(23,`,
assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),ng(),wl(24,"h4"),Ux(25,"Tokens customiz\xE1veis"),ng(),wl(26,"p"),Ux(27,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),ng(),wl(28,"blockquote")(29,"p"),Ux(30,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(31,"a",7),Ux(32,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(33,"."),ng()(),wl(34,"table")(35,"thead")(36,"tr")(37,"th"),Ux(38,"Propriedade"),ng(),wl(39,"th"),Ux(40,"Descri\xE7\xE3o"),ng(),wl(41,"th"),Ux(42,"Valor Padr\xE3o"),ng()()(),wl(43,"tbody")(44,"tr")(45,"td")(46,"strong"),Ux(47,"Default Values - CONTENT"),ng()(),Ul(48,"td")(49,"td"),ng(),wl(50,"tr")(51,"td")(52,"code"),Ux(53,"--padding"),ng(),Ux(54," \xA0"),ng(),wl(55,"td"),Ux(56,"Preenchimento"),ng(),wl(57,"td")(58,"code"),Ux(59,"var(--spacing-sm)"),ng()()(),wl(60,"tr")(61,"td")(62,"code"),Ux(63,"--border-radius"),ng(),Ux(64," \xA0"),ng(),wl(65,"td"),Ux(66,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(67,"td")(68,"code"),Ux(69,"var(--border-radius-md)"),ng()()(),wl(70,"tr")(71,"td")(72,"code"),Ux(73,"--border-width"),ng(),Ux(74," \xA0"),ng(),wl(75,"td"),Ux(76,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),ng(),wl(77,"td")(78,"code"),Ux(79,"var(--border-width-sm)"),ng()()(),wl(80,"tr")(81,"td")(82,"code"),Ux(83,"--border-color"),ng(),Ux(84," \xA0"),ng(),wl(85,"td"),Ux(86,"Cor da borda"),ng(),wl(87,"td")(88,"code"),Ux(89,"var(--color-neutral-light-20)"),ng()()(),wl(90,"tr")(91,"td")(92,"code"),Ux(93,"--background"),ng(),Ux(94," \xA0"),ng(),wl(95,"td"),Ux(96,"Cor de background"),ng(),wl(97,"td")(98,"code"),Ux(99,"var(--color-neutral-light-00)"),ng()()(),wl(100,"tr")(101,"td")(102,"strong"),Ux(103,"Default Values - TITLE"),ng()(),Ul(104,"td")(105,"td"),ng(),wl(106,"tr")(107,"td")(108,"code"),Ux(109,"--font-family"),ng(),Ux(110," \xA0"),ng(),wl(111,"td"),Ux(112,"Font aplicado ao titulo"),ng(),wl(113,"td")(114,"code"),Ux(115,"var(--font-family-theme)"),ng()()(),wl(116,"tr")(117,"td")(118,"code"),Ux(119,"--line-weight"),ng(),Ux(120," \xA0"),ng(),wl(121,"td"),Ux(122,"Espessura da Fonte a ser aplicada do titulo"),ng(),wl(123,"td")(124,"code"),Ux(125,"var(--font-weight-semibold)"),ng()()(),wl(126,"tr")(127,"td")(128,"code"),Ux(129,"--line-height"),ng(),Ux(130," \xA0"),ng(),wl(131,"td"),Ux(132,"tamanho da linha do titulo"),ng(),wl(133,"td")(134,"code"),Ux(135,"var(--line-height-md)"),ng()()(),wl(136,"tr")(137,"td")(138,"code"),Ux(139,"--text-color"),ng(),Ux(140," \xA0"),ng(),wl(141,"td"),Ux(142,"Cor do Texto do titulo"),ng(),wl(143,"td")(144,"code"),Ux(145,"var(--color-neutral-dark-90)"),ng()()(),wl(146,"tr")(147,"td")(148,"code"),Ux(149,"--font-size"),ng(),Ux(150," \xA0"),ng(),wl(151,"td"),Ux(152,"Tamanho da fonte do titulo"),ng(),wl(153,"td")(154,"code"),Ux(155,"1.125rem"),ng()()(),wl(156,"tr")(157,"td")(158,"code"),Ux(159,"--letter-spacing"),ng(),Ux(160," \xA0"),ng(),wl(161,"td"),Ux(162,"distancia entre letras do titulo"),ng(),wl(163,"td")(164,"code"),Ux(165,"0.017rem"),ng()()(),wl(166,"tr")(167,"td")(168,"code"),Ux(169,"--margin"),ng(),Ux(170," \xA0"),ng(),wl(171,"td"),Ux(172,"Margin entre o titulo e o conteudo"),ng(),wl(173,"td")(174,"code"),Ux(175,"0 0 var(--spacing-xs)"),ng()()()()()(),wl(176,"div",8)(177,"h4",9),Ux(178,"Seletor"),ng(),wl(179,"pre",10),Ux(180,`<po-container
    p-height="number"
    p-no-border="boolean"
    p-no-padding="boolean"
    p-title="string" >
</po-container>
`),ng()(),wl(181,"h4",11),Ux(182,"Propriedades"),ng(),wl(183,"table",12)(184,"tr",13)(185,"th",14),Ux(186,"Nome"),ng(),wl(187,"th",14),Ux(188,"Tipo"),ng(),wl(189,"th",14),Ux(190,"Padr\xE3o"),ng(),wl(191,"th",14),Ux(192,"Descri\xE7\xE3o"),ng()(),wl(193,"tr",15)(194,"td",16)(195,"div",17)(196,"span",18),Ux(197," p-height"),Ul(198,"br"),ng()()(),wl(199,"td",19)(200,"code",20),Ux(201,"number"),ng()(),wl(202,"td",21),Ux(203,"-"),ng(),wl(204,"td",22)(205,"em")(206,"strong"),Ux(207,"(opcional)"),ng()(),wl(208,"p"),Ux(209,"Define a altura do "),wl(210,"code"),Ux(211,"po-container"),ng(),Ux(212,"."),ng(),wl(213,"blockquote")(214,"p"),Ux(215,"Caso n\xE3o seja definido um valor, a altura se ajustar\xE1 de acordo com o conte\xFAdo."),ng()()()(),wl(216,"tr",15)(217,"td",16)(218,"div",17)(219,"span",18),Ux(220," p-no-border"),Ul(221,"br"),ng()()(),wl(222,"td",19)(223,"code",23),Ux(224,"boolean"),ng()(),wl(225,"td",21)(226,"p")(227,"code"),Ux(228,"false"),ng()()(),wl(229,"td",22)(230,"em")(231,"strong"),Ux(232,"(opcional)"),ng()(),wl(233,"p"),Ux(234,"Desabilita a borda e a sombra em torno do "),wl(235,"code"),Ux(236,"po-container"),ng(),Ux(237,"."),ng()()(),wl(238,"tr",15)(239,"td",16)(240,"div",17)(241,"span",18),Ux(242," p-no-padding"),Ul(243,"br"),ng()()(),wl(244,"td",19)(245,"code",23),Ux(246,"boolean"),ng()(),wl(247,"td",21)(248,"p")(249,"code"),Ux(250,"false"),ng()()(),wl(251,"td",22)(252,"em")(253,"strong"),Ux(254,"(opcional)"),ng()(),wl(255,"p"),Ux(256,"Desabilita o espa\xE7amento interno do "),wl(257,"code"),Ux(258,"po-container"),ng(),Ux(259,"."),ng()()(),wl(260,"tr",15)(261,"td",16)(262,"div",17)(263,"span",18),Ux(264," p-title"),Ul(265,"br"),ng()()(),wl(266,"td",19)(267,"code",24),Ux(268,"string"),ng()(),wl(269,"td",21),Ux(270,"-"),ng(),wl(271,"td",22)(272,"em")(273,"strong"),Ux(274,"(opcional)"),ng()(),wl(275,"p"),Ux(276,"T\xEDtulo do Container."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var xe=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Container",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-container-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-container-basic-view")(6,"sample-po-container-labs-view")(7,"sample-po-container-dashboard-view"),ng()()()),a&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ge,fe,ve,Ee],encapsulation:2})}return o})();var Oe=[{path:"",component:xe}],we=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[vL.forChild(Oe),vL]})}return o})();var Pt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[u5,we]})}return o})();export{Pt as DocPoContainerModule};