import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Nt as Y0e,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,X as KH,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,gt as R8e,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var pe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Edit`]],template:function(r,i){r&1&&ql(0,`po-page-edit`,0)},dependencies:[R8e],encapsulation:2,changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Edit Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-edit-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`disableSubmit`,label:`Disable Submit`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}cancel(){this.action=`Cancel`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.properties=[],this.title=`PO Page Edit`,this.subtitle=``}save(){this.action=`Save`}saveNew(){this.action=`Save and new`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-labs`]],standalone:!1,decls:34,vars:21,consts:[[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-cancel`,`p-save`,`p-save-new`,`p-breadcrumb`,`p-components-size`,`p-disable-submit`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Vx();Ml(0,`po-page-edit`,3),ht(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()})(`p-save-new`,function(){return i.saveNew()}),Ml(1,`div`,4),ql(2,`po-info`,5),lg(),ql(3,`po-divider`),Ml(4,`form`)(5,`div`,4)(6,`po-input`,6),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.title,a)||(i.title=a),Jy(a)}),lg(),f0(),Ml(7,`po-input`,7),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.subtitle,a)||(i.subtitle=a),Jy(a)}),lg(),f0(),Ml(8,`po-checkbox-group`,8),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.properties,a)||(i.properties=a),Jy(a)}),lg(),f0(),Ml(9,`po-radio-group`,9),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.componentsSize,a)||(i.componentsSize=a),Jy(a)}),lg(),f0(),lg(),ql(10,`po-divider`),Ml(11,`form`,null,0)(13,`div`,4)(14,`po-input`,10),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),Jy(a)}),lg(),f0(),lg()(),Ml(15,`form`,null,1)(17,`div`,4)(18,`po-input`,11),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),Jy(a)}),lg(),f0(),Ml(19,`po-input`,12),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),Jy(a)}),lg(),f0(),lg(),Ml(20,`div`,4)(21,`po-button`,13),ht(`p-click`,function(){return i.addBreadcrumbItem()}),lg()()(),ql(22,`po-divider`),Ml(23,`form`,null,2)(25,`div`,4)(26,`po-input`,14),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),Jy(a)}),lg(),f0(),Ml(27,`po-input`,15),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),Jy(a)}),lg(),f0(),lg(),Ml(28,`div`,4)(29,`po-button`,16),ht(`p-click`,function(){return i.addBreadcrumbParam()}),lg()()(),Ml(30,`div`,4)(31,`po-input`,17),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.literals,a)||(i.literals=a),Jy(a)}),ht(`p-change`,function(){return i.changeLiterals()}),lg(),f0(),lg(),Ml(32,`div`,4)(33,`po-button`,18),ht(`p-click`,function(){return i.restore()}),lg()()()()}if(r&2){let p=Yx(16),s=Yx(24);cw(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-disable-submit`,i.properties.includes(`disableSubmit`))(`p-literals`,i.customLiterals)(`p-title`,i.title)(`p-subtitle`,i.subtitle),Up(2),cw(`p-value`,i.action),Up(4),Tw(`ngModel`,i.title),p0(),Up(),Tw(`ngModel`,i.subtitle),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.componentsSize),cw(`p-options`,i.componentsSizeOptions),p0(),Up(5),Tw(`ngModel`,i.breadcrumb.favorite),p0(),Up(4),Tw(`ngModel`,i.breadcrumbItem.label),p0(),Up(),Tw(`ngModel`,i.breadcrumbItem.link),p0(),Up(2),cw(`p-disabled`,p.invalid),Up(5),Tw(`ngModel`,i.breadcrumbParams.property),p0(),Up(),Tw(`ngModel`,i.breadcrumbParams.value),p0(),Up(2),cw(`p-disabled`,s.invalid),Up(2),Tw(`ngModel`,i.literals),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,kbe,R8e],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Edit Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

      <po-checkbox-group
        class="po-md-12"
        name="properties"
        [(ngModel)]="properties"
        p-columns="4"
        p-label="Properties"
        [p-options]="propertiesOptions"
      >
      </po-checkbox-group>

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
    </div>

    <po-divider />

    <form #formBreadcrumbFavorite="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbFavorite"
          [(ngModel)]="breadcrumb.favorite"
          p-clean
          p-help="https://po-sample-api.onrender.com/v1/favorite"
          p-label="Breadcrumb favorite"
        >
        </po-input>
      </div>
    </form>

    <form #formBreadcrumbItems="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbItemLabel"
          [(ngModel)]="breadcrumbItem.label"
          p-clean
          p-label="Breadcrumb item label"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbItemLink"
          [(ngModel)]="breadcrumbItem.link"
          p-clean
          p-label="Breadcrumb item link"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb item"
          [p-disabled]="formBreadcrumbItems.invalid"
          (p-click)="addBreadcrumbItem()"
        >
        </po-button>
      </div>
    </form>

    <po-divider />

    <form #formBreadcrumbParams="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbParamsProperty"
          [(ngModel)]="breadcrumbParams.property"
          p-clean
          p-label="Breadcrumb params property"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbParamsValue"
          [(ngModel)]="breadcrumbParams.value"
          p-clean
          p-label="Breadcrumb params value"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
  ];

  ngOnInit() {
    this.restore();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-edit-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ce],encapsulation:2,changeDetection:1})}return o})();var xe=[`formEditUser`];var ge=(()=>{class o{route=f(Cn);poDialog=f(e_e);poNotification=f(Eu);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`User Edit`}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email=`john.doe@po-ui.com.br`,this.fathersName=`Mike Doe`,this.genre=`male`,this.graduation=`College Degree`,this.mothersName=`Jane Doe`,this.name=`John Doe`,this.nationality=`USA`,this.nickname=`John`,this.placeOfBirth=`Colorado`,this.userId=122635}save(){this.poNotification.success(`Save successfully`)}beforeRedirect(d){this.formEditUser.valid?this.route.navigate([`/`]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:`There is data that has not been saved yet. Are you sure you want to quit?`,confirm:()=>this.route.navigate([`/`])})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-user`]],viewQuery:function(r,i){if(r&1&&Zl(xe,7),r&2){let p;lo(p=uo())&&(i.formEditUser=p.first)}},standalone:!1,decls:18,vars:13,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Edit`,`p-subtitle`,`Fields marked with <b>*</b> are <u>required</u>`,3,`p-cancel`,`p-save`,`p-breadcrumb`,`p-disable-submit`],[1,`po-row`],[`name`,`userId`,`p-clean`,``,`p-label`,`User ID`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nickname`,`p-clean`,``,`p-label`,`Nickname`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nationality`,`p-clean`,``,`p-label`,`Nationality`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`placeOfBirth`,`p-clean`,``,`p-label`,`Place Of Birth`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`graduation`,`p-clean`,``,`p-label`,`Graduation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`fathersName`,`p-clean`,``,`p-label`,`Father's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`mothersName`,`p-clean`,``,`p-label`,`Mother's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let p=Vx();Ml(0,`po-page-edit`,1),ht(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()}),Ml(1,`form`,null,0)(3,`div`,2)(4,`po-number`,3),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.userId,a)||(i.userId=a),Jy(a)}),lg(),f0(),Ml(5,`po-email`,4),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.email,a)||(i.email=a),Jy(a)}),lg(),f0(),Ml(6,`po-input`,5),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.name,a)||(i.name=a),Jy(a)}),lg(),f0(),lg(),Ml(7,`div`,2)(8,`po-input`,6),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.nickname,a)||(i.nickname=a),Jy(a)}),lg(),f0(),Ml(9,`po-datepicker`,7),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.birthDate,a)||(i.birthDate=a),Jy(a)}),lg(),f0(),Ml(10,`po-input`,8),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.genre,a)||(i.genre=a),Jy(a)}),lg(),f0(),lg(),Ml(11,`div`,2)(12,`po-input`,9),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.nationality,a)||(i.nationality=a),Jy(a)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.placeOfBirth,a)||(i.placeOfBirth=a),Jy(a)}),lg(),f0(),Ml(14,`po-input`,11),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.graduation,a)||(i.graduation=a),Jy(a)}),lg(),f0(),lg(),Ml(15,`div`,2)(16,`po-input`,12),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.fathersName,a)||(i.fathersName=a),Jy(a)}),lg(),f0(),Ml(17,`po-input`,13),Mw(`ngModelChange`,function(a){return Qy(p),yN(i.mothersName,a)||(i.mothersName=a),Jy(a)}),lg(),f0(),lg()()()}if(r&2){let p=Yx(2);cw(`p-breadcrumb`,i.breadcrumb)(`p-disable-submit`,p.invalid),Up(4),Tw(`ngModel`,i.userId),p0(),Up(),Tw(`ngModel`,i.email),p0(),Up(),Tw(`ngModel`,i.name),p0(),Up(2),Tw(`ngModel`,i.nickname),p0(),Up(),Tw(`ngModel`,i.birthDate),p0(),Up(),Tw(`ngModel`,i.genre),p0(),Up(2),Tw(`ngModel`,i.nationality),p0(),Up(),Tw(`ngModel`,i.placeOfBirth),p0(),Up(),Tw(`ngModel`,i.graduation),p0(),Up(2),Tw(`ngModel`,i.fathersName),p0(),Up(),Tw(`ngModel`,i.mothersName),p0()}},dependencies:[IY,wY,CY,Vk,kk,Y0e,KH,lU,xbe,R8e],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Edit - User`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-edit
  p-title="User Edit"
  p-subtitle="Fields marked with <b>*</b> are <u>required</u>"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  private route = inject(Router);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-edit-user`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-doc`]],standalone:!1,decls:605,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoPageEditLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ml(7,`code`),mN(8,`po-page-default`),lg(),mN(9,`, `),Ml(10,`code`),mN(11,`po-page-detail`),lg(),mN(12,`,
`),Ml(13,`code`),mN(14,`po-page-edit`),lg(),mN(15,`, `),Ml(16,`code`),mN(17,`po-page-list`),lg(),mN(18,` e `),Ml(19,`code`),mN(20,`po-page-slide`),lg(),mN(21,`.`),lg()(),Ml(22,`h3`,3),mN(23,`Componente`),lg(),Ml(24,`h4`,4)(25,`code`,5),mN(26,`PoPageEditComponent`),lg()(),Ml(27,`div`,2)(28,`p`),mN(29,`O componente `),Ml(30,`strong`),mN(31,`po-page-edit`),lg(),mN(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),lg(),Ml(33,`p`),mN(34,`Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `),Ml(35,`code`),mN(36,`p-disable-submit`),lg(),mN(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),lg(),Ml(38,`h4`),mN(39,`Tokens customizáveis`),lg(),Ml(40,`blockquote`)(41,`p`),mN(42,`Para maiores informações, acesse o guia `),Ml(43,`a`,6),mN(44,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(45,`.`),lg()(),Ml(46,`table`)(47,`thead`)(48,`tr`)(49,`th`),mN(50,`Propriedade`),lg(),Ml(51,`th`),mN(52,`Descrição`),lg(),Ml(53,`th`),mN(54,`Valor Padrão`),lg()()(),Ml(55,`tbody`)(56,`tr`)(57,`td`)(58,`strong`),mN(59,`Header`),lg()(),ql(60,`td`)(61,`td`),lg(),Ml(62,`tr`)(63,`td`)(64,`code`),mN(65,`--padding`),lg()(),Ml(66,`td`),mN(67,`Espaçamento do header`),lg(),Ml(68,`td`)(69,`code`),mN(70,`var(--spacing-xs) var(--spacing-md)`),lg()()(),Ml(71,`tr`)(72,`td`)(73,`code`),mN(74,`--gap`),lg()(),Ml(75,`td`),mN(76,`Espaçamento entre os breadcrumbs e o título`),lg(),Ml(77,`td`)(78,`code`),mN(79,`var(--spacing-md)`),lg()()(),Ml(80,`tr`)(81,`td`)(82,`code`),mN(83,`--gap-actions`),lg()(),Ml(84,`td`),mN(85,`Espaçamento entre as ações`),lg(),Ml(86,`td`)(87,`code`),mN(88,`var(--spacing-xs)`),lg()()(),Ml(89,`tr`)(90,`td`)(91,`code`),mN(92,`--font-family`),lg()(),Ml(93,`td`),mN(94,`Família tipográfica do título`),lg(),Ml(95,`td`)(96,`code`),mN(97,`var(--font-family-theme)`),lg()()(),Ml(98,`tr`)(99,`td`)(100,`strong`),mN(101,`Content`),lg()(),ql(102,`td`)(103,`td`),lg(),Ml(104,`tr`)(105,`td`)(106,`code`),mN(107,`--padding-content`),lg()(),Ml(108,`td`),mN(109,`Espaçamento do conteúdo`),lg(),Ml(110,`td`)(111,`code`),mN(112,`var(--spacing-xs) var(--spacing-sm)`),lg()()()()()(),Ml(113,`div`,7)(114,`h4`,8),mN(115,`Seletor`),lg(),Ml(116,`pre`,9),mN(117,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),lg()(),Ml(118,`h4`,10),mN(119,`Propriedades`),lg(),Ml(120,`table`,11)(121,`tr`,12)(122,`th`,13),mN(123,`Nome`),lg(),Ml(124,`th`,13),mN(125,`Tipo`),lg(),Ml(126,`th`,13),mN(127,`Padrão`),lg(),Ml(128,`th`,13),mN(129,`Descrição`),lg()(),Ml(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),mN(134,` p-breadcrumb`),ql(135,`br`),lg()()(),Ml(136,`td`,18)(137,`code`,19),mN(138,`PoBreadcrumb`),lg()(),Ml(139,`td`,20),mN(140,`-`),lg(),Ml(141,`td`,21)(142,`em`)(143,`strong`),mN(144,`(opcional)`),lg()(),Ml(145,`p`),mN(146,`Objeto com propriedades do breadcrumb.`),lg()()(),Ml(147,`tr`,14)(148,`td`,15)(149,`div`,22)(150,`span`,23),mN(151,` (p-cancel)`),ql(152,`br`),lg()()(),Ml(153,`td`,18)(154,`code`,24),mN(155,`EventEmitter`),lg()(),Ml(156,`td`,20),mN(157,`-`),lg(),Ml(158,`td`,21)(159,`p`),mN(160,`Evento que será disparado ao clicar no botão de "Cancelar".`),lg(),Ml(161,`pre`)(162,`code`),mN(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),lg()(),Ml(164,`blockquote`)(165,`p`),mN(166,`Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.`),lg()()()(),Ml(167,`tr`,14)(168,`td`,15)(169,`div`,16)(170,`span`,17),mN(171,` p-components-size`),ql(172,`br`),lg()()(),Ml(173,`td`,18)(174,`code`,25),mN(175,`string`),lg()(),Ml(176,`td`,20)(177,`p`)(178,`code`),mN(179,`medium`),lg()()(),Ml(180,`td`,21)(181,`em`)(182,`strong`),mN(183,`(opcional)`),lg()(),Ml(184,`p`),mN(185,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(186,`ul`)(187,`li`)(188,`code`),mN(189,`small`),lg(),mN(190,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(191,`li`)(192,`code`),mN(193,`medium`),lg(),mN(194,`: aplica a medida medium de cada componente.`),lg()(),Ml(195,`blockquote`)(196,`p`),mN(197,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(198,`code`),mN(199,`medium`),lg(),mN(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(201,`a`,26),mN(202,`po-theme`),lg(),mN(203,`.`),lg()()()(),Ml(204,`tr`,14)(205,`td`,15)(206,`div`,16)(207,`span`,17),mN(208,` p-disable-submit`),ql(209,`br`),lg()()(),Ml(210,`td`,18)(211,`code`,27),mN(212,`boolean`),lg()(),Ml(213,`td`,20),mN(214,`-`),lg(),Ml(215,`td`,21)(216,`em`)(217,`strong`),mN(218,`(opcional)`),lg()(),Ml(219,`p`),mN(220,`Desabilita botões de submissão (save e saveNew)`),lg()()(),Ml(221,`tr`,14)(222,`td`,15)(223,`div`,16)(224,`span`,17),mN(225,` p-literals`),ql(226,`br`),lg()()(),Ml(227,`td`,18)(228,`code`,28),mN(229,`PoPageEditLiterals`),lg()(),Ml(230,`td`,20),mN(231,`-`),lg(),Ml(232,`td`,21)(233,`em`)(234,`strong`),mN(235,`(opcional)`),lg()(),Ml(236,`p`),mN(237,`Objeto com as literais usadas no `),Ml(238,`code`),mN(239,`po-page-edit`),lg(),mN(240,`.`),lg(),Ml(241,`p`),mN(242,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(243,`pre`)(244,`code`),mN(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),lg()(),Ml(246,`p`),mN(247,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(248,`pre`)(249,`code`),mN(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),lg()(),Ml(251,`p`),mN(252,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(253,`pre`)(254,`code`),mN(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),lg()(),Ml(256,`blockquote`)(257,`p`),mN(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(259,`a`,29)(260,`code`),mN(261,`PoI18nService`),lg()(),mN(262,` ou do browser.`),lg()()()(),Ml(263,`tr`,14)(264,`td`,15)(265,`div`,22)(266,`span`,23),mN(267,` (p-save)`),ql(268,`br`),lg()()(),Ml(269,`td`,18)(270,`code`,24),mN(271,`EventEmitter`),lg()(),Ml(272,`td`,20),mN(273,`-`),lg(),Ml(274,`td`,21)(275,`p`),mN(276,`Evento que será disparado ao clicar no botão de "Salvar".`),lg(),Ml(277,`pre`)(278,`code`),mN(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),lg()(),Ml(280,`blockquote`)(281,`p`),mN(282,`Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.`),lg()()()(),Ml(283,`tr`,14)(284,`td`,15)(285,`div`,22)(286,`span`,23),mN(287,` (p-save-new)`),ql(288,`br`),lg()()(),Ml(289,`td`,18)(290,`code`,24),mN(291,`EventEmitter`),lg()(),Ml(292,`td`,20),mN(293,`-`),lg(),Ml(294,`td`,21)(295,`p`),mN(296,`Evento que será disparado ao clicar no botão de "Salvar e Novo".`),lg(),Ml(297,`pre`)(298,`code`),mN(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),lg()(),Ml(300,`blockquote`)(301,`p`),mN(302,`Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.`),lg()()()(),Ml(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),mN(307,` p-subtitle`),ql(308,`br`),lg()()(),Ml(309,`td`,18)(310,`code`,25),mN(311,`string`),lg()(),Ml(312,`td`,20),mN(313,`-`),lg(),Ml(314,`td`,21)(315,`em`)(316,`strong`),mN(317,`(opcional)`),lg()(),Ml(318,`p`),mN(319,`Subtitulo do Header da página.`),lg(),Ml(320,`p`),mN(321,`Suporta formatação básica com as tags `),Ml(322,`code`),mN(323,`<b>`),lg(),mN(324,` (negrito), `),Ml(325,`code`),mN(326,`<strong>`),lg(),mN(327,` (negrito), `),Ml(328,`code`),mN(329,`<i>`),lg(),mN(330,` (itálico), `),Ml(331,`code`),mN(332,`<em>`),lg(),mN(333,` (it\xE1lico) e
`),Ml(334,`code`),mN(335,`<u>`),lg(),mN(336,` (sublinhado).`),lg(),Ml(337,`p`),mN(338,`Exemplo:`),lg(),Ml(339,`pre`)(340,`code`,30),mN(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),lg()(),Ml(342,`blockquote`)(343,`p`),mN(344,`Requer que `),Ml(345,`code`),mN(346,`p-title`),lg(),mN(347,` esteja definido.`),lg()()()(),Ml(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),mN(352,` p-title`),ql(353,`br`),lg()()(),Ml(354,`td`,18)(355,`code`,25),mN(356,`string`),lg()(),Ml(357,`td`,20),mN(358,`-`),lg(),Ml(359,`td`,21)(360,`p`),mN(361,`Título da página.`),lg()()()(),Ml(362,`h3`),mN(363,`Interfaces`),lg(),Ml(364,`h4`,31)(365,`code`,5),mN(366,`PoBreadcrumbItem`),lg()(),Ml(367,`div`,2)(368,`p`),mN(369,`Interface que define cada item do componente `),Ml(370,`strong`),mN(371,`po-breadcrumb`),lg(),mN(372,`.`),lg()(),Ml(373,`h4`,10),mN(374,`Propriedades`),lg(),Ml(375,`table`,11)(376,`tr`,12)(377,`th`,13),mN(378,`Nome`),lg(),Ml(379,`th`,13),mN(380,`Tipo`),lg(),Ml(381,`th`,13),mN(382,`Descrição`),lg()(),Ml(383,`tr`,14)(384,`td`,15)(385,`div`,16)(386,`span`,17),mN(387,` action`),ql(388,`br`),lg()()(),Ml(389,`td`,18)(390,`code`,32),mN(391,`Function`),lg()(),Ml(392,`td`,21)(393,`em`)(394,`strong`),mN(395,`(opcional)`),lg()(),Ml(396,`p`),mN(397,`Ação executada ao clicar no item.`),lg(),Ml(398,`blockquote`)(399,`p`),mN(400,`A função atribuída a esta propriedade receberá o `),Ml(401,`em`),mN(402,`label`),lg(),mN(403,` do item como parâmetro para execução.`),lg()()()(),Ml(404,`tr`,14)(405,`td`,15)(406,`div`,16)(407,`span`,17),mN(408,` label`),ql(409,`br`),lg()()(),Ml(410,`td`,18)(411,`code`,25),mN(412,`string`),lg()(),Ml(413,`td`,21)(414,`p`),mN(415,`Rótulo do item.`),lg()()(),Ml(416,`tr`,14)(417,`td`,15)(418,`div`,16)(419,`span`,17),mN(420,` link`),ql(421,`br`),lg()()(),Ml(422,`td`,18)(423,`code`,25),mN(424,`string`),lg()(),Ml(425,`td`,21)(426,`em`)(427,`strong`),mN(428,`(opcional)`),lg()(),Ml(429,`p`),mN(430,`Url do item.`),lg(),Ml(431,`blockquote`)(432,`p`),mN(433,`Caso o item também contenha uma `),Ml(434,`em`),mN(435,`action`),lg(),mN(436,` definida, a preferência de execução será do `),Ml(437,`em`),mN(438,`link`),lg(),mN(439,`.`),lg()(),Ml(440,`blockquote`)(441,`p`),mN(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ml(443,`strong`)(444,`a`,33),mN(445,`Veja um exemplo de como criar rotas aqui`),lg()(),mN(446,`.`),lg()(),Ml(447,`blockquote`)(448,`p`),mN(449,`Esta propriedade é necessária para que a propriedade `),Ml(450,`code`),mN(451,`p-favorite-service`),lg(),mN(452,` consiga favoritar ou desfavoritar.`),lg()()()()(),Ml(453,`h4`,31)(454,`code`,5),mN(455,`PoBreadcrumb`),lg()(),Ml(456,`div`,2)(457,`p`),mN(458,`Interface que define o `),Ml(459,`code`),mN(460,`po-breadcrumb`),lg(),mN(461,`.`),lg()(),Ml(462,`h4`,10),mN(463,`Propriedades`),lg(),Ml(464,`table`,11)(465,`tr`,12)(466,`th`,13),mN(467,`Nome`),lg(),Ml(468,`th`,13),mN(469,`Tipo`),lg(),Ml(470,`th`,13),mN(471,`Descrição`),lg()(),Ml(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),mN(476,` favorite`),ql(477,`br`),lg()()(),Ml(478,`td`,18)(479,`code`,25),mN(480,`string`),lg()(),Ml(481,`td`,21)(482,`em`)(483,`strong`),mN(484,`(opcional)`),lg()(),Ml(485,`p`),mN(486,`Permite definir uma URL para favoritar ou desfavoritar.`),lg(),Ml(487,`blockquote`)(488,`p`),mN(489,`Para maiores informações verificar a propriedade `),Ml(490,`code`),mN(491,`p-favorite-service`),lg(),mN(492,` do componente `),Ml(493,`code`),mN(494,`po-breadcrumb`),lg(),mN(495,`.`),lg()()()(),Ml(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),mN(500,` items`),ql(501,`br`),lg()()(),Ml(502,`td`,18)(503,`code`,34),mN(504,`Array<PoBreadcrumbItem>`),lg()(),Ml(505,`td`,21)(506,`p`),mN(507,`Lista de itens do `),Ml(508,`em`),mN(509,`breadcrumb`),lg(),mN(510,`.`),lg(),Ml(511,`p`)(512,`strong`),mN(513,`Exemplo:`),lg()(),Ml(514,`pre`)(515,`code`),mN(516,`{ label: 'Po Portal', link: 'portal' }
`),lg()()()(),Ml(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),mN(521,` params`),ql(522,`br`),lg()()(),Ml(523,`td`,18)(524,`code`,35),mN(525,`object`),lg()(),Ml(526,`td`,21)(527,`em`)(528,`strong`),mN(529,`(opcional)`),lg()(),Ml(530,`p`),mN(531,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),lg()()()(),Ml(532,`h4`,31)(533,`code`,5),mN(534,`PoPageEditLiterals`),lg()(),Ml(535,`div`,2)(536,`p`),mN(537,`Interface para definição das literais usadas no `),Ml(538,`code`),mN(539,`po-page-edit`),lg(),mN(540,`.`),lg()(),Ml(541,`h4`,10),mN(542,`Propriedades`),lg(),Ml(543,`table`,11)(544,`tr`,12)(545,`th`,13),mN(546,`Nome`),lg(),Ml(547,`th`,13),mN(548,`Tipo`),lg(),Ml(549,`th`,13),mN(550,`Descrição`),lg()(),Ml(551,`tr`,14)(552,`td`,15)(553,`div`,16)(554,`span`,17),mN(555,` cancel`),ql(556,`br`),lg()()(),Ml(557,`td`,18)(558,`code`,25),mN(559,`string`),lg()(),Ml(560,`td`,21)(561,`em`)(562,`strong`),mN(563,`(opcional)`),lg()(),Ml(564,`p`),mN(565,`Label da ação `),Ml(566,`code`),mN(567,`cancel`),lg(),mN(568,`.`),lg()()(),Ml(569,`tr`,14)(570,`td`,15)(571,`div`,16)(572,`span`,17),mN(573,` save`),ql(574,`br`),lg()()(),Ml(575,`td`,18)(576,`code`,25),mN(577,`string`),lg()(),Ml(578,`td`,21)(579,`em`)(580,`strong`),mN(581,`(opcional)`),lg()(),Ml(582,`p`),mN(583,`Label da ação `),Ml(584,`code`),mN(585,`save`),lg(),mN(586,`.`),lg()()(),Ml(587,`tr`,14)(588,`td`,15)(589,`div`,16)(590,`span`,17),mN(591,` saveNew`),ql(592,`br`),lg()()(),Ml(593,`td`,18)(594,`code`,25),mN(595,`string`),lg()(),Ml(596,`td`,21)(597,`em`)(598,`strong`),mN(599,`(opcional)`),lg()(),Ml(600,`p`),mN(601,`Label da ação `),Ml(602,`code`),mN(603,`saveNew`),lg(),mN(604,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-page-edit-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-page-edit-basic-view`)(6,`sample-po-page-edit-labs-view`)(7,`sample-po-page-edit-user-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,se,ue,be,Ee],encapsulation:2,changeDetection:1})}return o})()}];var Se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[NL.forChild(ke),NL]})}return o})();var mt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[ar,Se]})}return o})();export{mt as DocPoPageEditModule};