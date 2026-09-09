import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nn as z0e,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,T as D8e,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var pe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Edit`]],template:function(r,i){r&1&&Gl(0,`po-page-edit`,0)},dependencies:[D8e],encapsulation:2,changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Edit Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-edit-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`disableSubmit`,label:`Disable Submit`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}cancel(){this.action=`Cancel`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.properties=[],this.title=`PO Page Edit`,this.subtitle=``}save(){this.action=`Save`}saveNew(){this.action=`Save and new`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-labs`]],standalone:!1,decls:34,vars:21,consts:[[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-cancel`,`p-save`,`p-save-new`,`p-breadcrumb`,`p-components-size`,`p-disable-submit`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Ax();Tl(0,`po-page-edit`,3),ht(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()})(`p-save-new`,function(){return i.saveNew()}),Tl(1,`div`,4),Gl(2,`po-info`,5),ag(),Gl(3,`po-divider`),Tl(4,`form`)(5,`div`,4)(6,`po-input`,6),ww(`ngModelChange`,function(a){return Ky(p),uN(i.title,a)||(i.title=a),Xy(a)}),ag(),a0(),Tl(7,`po-input`,7),ww(`ngModelChange`,function(a){return Ky(p),uN(i.subtitle,a)||(i.subtitle=a),Xy(a)}),ag(),a0(),Tl(8,`po-checkbox-group`,8),ww(`ngModelChange`,function(a){return Ky(p),uN(i.properties,a)||(i.properties=a),Xy(a)}),ag(),a0(),Tl(9,`po-radio-group`,9),ww(`ngModelChange`,function(a){return Ky(p),uN(i.componentsSize,a)||(i.componentsSize=a),Xy(a)}),ag(),a0(),ag(),Gl(10,`po-divider`),Tl(11,`form`,null,0)(13,`div`,4)(14,`po-input`,10),ww(`ngModelChange`,function(a){return Ky(p),uN(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),Xy(a)}),ag(),a0(),ag()(),Tl(15,`form`,null,1)(17,`div`,4)(18,`po-input`,11),ww(`ngModelChange`,function(a){return Ky(p),uN(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),Xy(a)}),ag(),a0(),Tl(19,`po-input`,12),ww(`ngModelChange`,function(a){return Ky(p),uN(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),Xy(a)}),ag(),a0(),ag(),Tl(20,`div`,4)(21,`po-button`,13),ht(`p-click`,function(){return i.addBreadcrumbItem()}),ag()()(),Gl(22,`po-divider`),Tl(23,`form`,null,2)(25,`div`,4)(26,`po-input`,14),ww(`ngModelChange`,function(a){return Ky(p),uN(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),Xy(a)}),ag(),a0(),Tl(27,`po-input`,15),ww(`ngModelChange`,function(a){return Ky(p),uN(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),Xy(a)}),ag(),a0(),ag(),Tl(28,`div`,4)(29,`po-button`,16),ht(`p-click`,function(){return i.addBreadcrumbParam()}),ag()()(),Tl(30,`div`,4)(31,`po-input`,17),ww(`ngModelChange`,function(a){return Ky(p),uN(i.literals,a)||(i.literals=a),Xy(a)}),ht(`p-change`,function(){return i.changeLiterals()}),ag(),a0(),ag(),Tl(32,`div`,4)(33,`po-button`,18),ht(`p-click`,function(){return i.restore()}),ag()()()()}if(r&2){let p=Bx(16),s=Bx(24);nw(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-disable-submit`,i.properties.includes(`disableSubmit`))(`p-literals`,i.customLiterals)(`p-title`,i.title)(`p-subtitle`,i.subtitle),jp(2),nw(`p-value`,i.action),jp(4),Ew(`ngModel`,i.title),l0(),jp(),Ew(`ngModel`,i.subtitle),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.componentsSize),nw(`p-options`,i.componentsSizeOptions),l0(),jp(5),Ew(`ngModel`,i.breadcrumb.favorite),l0(),jp(4),Ew(`ngModel`,i.breadcrumbItem.label),l0(),jp(),Ew(`ngModel`,i.breadcrumbItem.link),l0(),jp(2),nw(`p-disabled`,p.invalid),jp(5),Ew(`ngModel`,i.breadcrumbParams.property),l0(),jp(),Ew(`ngModel`,i.breadcrumbParams.value),l0(),jp(2),nw(`p-disabled`,s.invalid),jp(2),Ew(`ngModel`,i.literals),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,ybe,D8e],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Edit Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-edit
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-edit-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ce],encapsulation:2,changeDetection:1})}return o})();var xe=[`formEditUser`];var ge=(()=>{class o{route=f(Cn);poDialog=f(W0e);poNotification=f(Eu);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`User Edit`}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email=`john.doe@po-ui.com.br`,this.fathersName=`Mike Doe`,this.genre=`male`,this.graduation=`College Degree`,this.mothersName=`Jane Doe`,this.name=`John Doe`,this.nationality=`USA`,this.nickname=`John`,this.placeOfBirth=`Colorado`,this.userId=122635}save(){this.poNotification.success(`Save successfully`)}beforeRedirect(d){this.formEditUser.valid?this.route.navigate([`/`]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:`There is data that has not been saved yet. Are you sure you want to quit?`,confirm:()=>this.route.navigate([`/`])})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-user`]],viewQuery:function(r,i){if(r&1&&Yl(xe,7),r&2){let p;lo(p=uo())&&(i.formEditUser=p.first)}},standalone:!1,decls:18,vars:13,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Edit`,`p-subtitle`,`Fields marked with <b>*</b> are <u>required</u>`,3,`p-cancel`,`p-save`,`p-breadcrumb`,`p-disable-submit`],[1,`po-row`],[`name`,`userId`,`p-clean`,``,`p-label`,`User ID`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nickname`,`p-clean`,``,`p-label`,`Nickname`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nationality`,`p-clean`,``,`p-label`,`Nationality`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`placeOfBirth`,`p-clean`,``,`p-label`,`Place Of Birth`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`graduation`,`p-clean`,``,`p-label`,`Graduation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`fathersName`,`p-clean`,``,`p-label`,`Father's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`mothersName`,`p-clean`,``,`p-label`,`Mother's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let p=Ax();Tl(0,`po-page-edit`,1),ht(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()}),Tl(1,`form`,null,0)(3,`div`,2)(4,`po-number`,3),ww(`ngModelChange`,function(a){return Ky(p),uN(i.userId,a)||(i.userId=a),Xy(a)}),ag(),a0(),Tl(5,`po-email`,4),ww(`ngModelChange`,function(a){return Ky(p),uN(i.email,a)||(i.email=a),Xy(a)}),ag(),a0(),Tl(6,`po-input`,5),ww(`ngModelChange`,function(a){return Ky(p),uN(i.name,a)||(i.name=a),Xy(a)}),ag(),a0(),ag(),Tl(7,`div`,2)(8,`po-input`,6),ww(`ngModelChange`,function(a){return Ky(p),uN(i.nickname,a)||(i.nickname=a),Xy(a)}),ag(),a0(),Tl(9,`po-datepicker`,7),ww(`ngModelChange`,function(a){return Ky(p),uN(i.birthDate,a)||(i.birthDate=a),Xy(a)}),ag(),a0(),Tl(10,`po-input`,8),ww(`ngModelChange`,function(a){return Ky(p),uN(i.genre,a)||(i.genre=a),Xy(a)}),ag(),a0(),ag(),Tl(11,`div`,2)(12,`po-input`,9),ww(`ngModelChange`,function(a){return Ky(p),uN(i.nationality,a)||(i.nationality=a),Xy(a)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(a){return Ky(p),uN(i.placeOfBirth,a)||(i.placeOfBirth=a),Xy(a)}),ag(),a0(),Tl(14,`po-input`,11),ww(`ngModelChange`,function(a){return Ky(p),uN(i.graduation,a)||(i.graduation=a),Xy(a)}),ag(),a0(),ag(),Tl(15,`div`,2)(16,`po-input`,12),ww(`ngModelChange`,function(a){return Ky(p),uN(i.fathersName,a)||(i.fathersName=a),Xy(a)}),ag(),a0(),Tl(17,`po-input`,13),ww(`ngModelChange`,function(a){return Ky(p),uN(i.mothersName,a)||(i.mothersName=a),Xy(a)}),ag(),a0(),ag()()()}if(r&2){let p=Bx(2);nw(`p-breadcrumb`,i.breadcrumb)(`p-disable-submit`,p.invalid),jp(4),Ew(`ngModel`,i.userId),l0(),jp(),Ew(`ngModel`,i.email),l0(),jp(),Ew(`ngModel`,i.name),l0(),jp(2),Ew(`ngModel`,i.nickname),l0(),jp(),Ew(`ngModel`,i.birthDate),l0(),jp(),Ew(`ngModel`,i.genre),l0(),jp(2),Ew(`ngModel`,i.nationality),l0(),jp(),Ew(`ngModel`,i.placeOfBirth),l0(),jp(),Ew(`ngModel`,i.graduation),l0(),jp(2),Ew(`ngModel`,i.fathersName),l0(),jp(),Ew(`ngModel`,i.mothersName),l0()}},dependencies:[yY,gY,mY,Ak,Tk,z0e,qH,iU,ube,D8e],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Edit - User`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-edit
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-edit-user`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-page-edit-doc`]],standalone:!1,decls:605,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoPageEditLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo responsável pelos componentes de estrutura de página: `),Tl(7,`code`),cN(8,`po-page-default`),ag(),cN(9,`, `),Tl(10,`code`),cN(11,`po-page-detail`),ag(),cN(12,`,
`),Tl(13,`code`),cN(14,`po-page-edit`),ag(),cN(15,`, `),Tl(16,`code`),cN(17,`po-page-list`),ag(),cN(18,` e `),Tl(19,`code`),cN(20,`po-page-slide`),ag(),cN(21,`.`),ag()(),Tl(22,`h3`,3),cN(23,`Componente`),ag(),Tl(24,`h4`,4)(25,`code`,5),cN(26,`PoPageEditComponent`),ag()(),Tl(27,`div`,2)(28,`p`),cN(29,`O componente `),Tl(30,`strong`),cN(31,`po-page-edit`),ag(),cN(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),ag(),Tl(33,`p`),cN(34,`Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `),Tl(35,`code`),cN(36,`p-disable-submit`),ag(),cN(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),ag(),Tl(38,`h4`),cN(39,`Tokens customizáveis`),ag(),Tl(40,`blockquote`)(41,`p`),cN(42,`Para maiores informações, acesse o guia `),Tl(43,`a`,6),cN(44,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(45,`.`),ag()(),Tl(46,`table`)(47,`thead`)(48,`tr`)(49,`th`),cN(50,`Propriedade`),ag(),Tl(51,`th`),cN(52,`Descrição`),ag(),Tl(53,`th`),cN(54,`Valor Padrão`),ag()()(),Tl(55,`tbody`)(56,`tr`)(57,`td`)(58,`strong`),cN(59,`Header`),ag()(),Gl(60,`td`)(61,`td`),ag(),Tl(62,`tr`)(63,`td`)(64,`code`),cN(65,`--padding`),ag()(),Tl(66,`td`),cN(67,`Espaçamento do header`),ag(),Tl(68,`td`)(69,`code`),cN(70,`var(--spacing-xs) var(--spacing-md)`),ag()()(),Tl(71,`tr`)(72,`td`)(73,`code`),cN(74,`--gap`),ag()(),Tl(75,`td`),cN(76,`Espaçamento entre os breadcrumbs e o título`),ag(),Tl(77,`td`)(78,`code`),cN(79,`var(--spacing-md)`),ag()()(),Tl(80,`tr`)(81,`td`)(82,`code`),cN(83,`--gap-actions`),ag()(),Tl(84,`td`),cN(85,`Espaçamento entre as ações`),ag(),Tl(86,`td`)(87,`code`),cN(88,`var(--spacing-xs)`),ag()()(),Tl(89,`tr`)(90,`td`)(91,`code`),cN(92,`--font-family`),ag()(),Tl(93,`td`),cN(94,`Família tipográfica do título`),ag(),Tl(95,`td`)(96,`code`),cN(97,`var(--font-family-theme)`),ag()()(),Tl(98,`tr`)(99,`td`)(100,`strong`),cN(101,`Content`),ag()(),Gl(102,`td`)(103,`td`),ag(),Tl(104,`tr`)(105,`td`)(106,`code`),cN(107,`--padding-content`),ag()(),Tl(108,`td`),cN(109,`Espaçamento do conteúdo`),ag(),Tl(110,`td`)(111,`code`),cN(112,`var(--spacing-xs) var(--spacing-sm)`),ag()()()()()(),Tl(113,`div`,7)(114,`h4`,8),cN(115,`Seletor`),ag(),Tl(116,`pre`,9),cN(117,`<po-page-edit
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
`),ag()(),Tl(118,`h4`,10),cN(119,`Propriedades`),ag(),Tl(120,`table`,11)(121,`tr`,12)(122,`th`,13),cN(123,`Nome`),ag(),Tl(124,`th`,13),cN(125,`Tipo`),ag(),Tl(126,`th`,13),cN(127,`Padrão`),ag(),Tl(128,`th`,13),cN(129,`Descrição`),ag()(),Tl(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),cN(134,` p-breadcrumb`),Gl(135,`br`),ag()()(),Tl(136,`td`,18)(137,`code`,19),cN(138,`PoBreadcrumb`),ag()(),Tl(139,`td`,20),cN(140,`-`),ag(),Tl(141,`td`,21)(142,`em`)(143,`strong`),cN(144,`(opcional)`),ag()(),Tl(145,`p`),cN(146,`Objeto com propriedades do breadcrumb.`),ag()()(),Tl(147,`tr`,14)(148,`td`,15)(149,`div`,22)(150,`span`,23),cN(151,` (p-cancel)`),Gl(152,`br`),ag()()(),Tl(153,`td`,18)(154,`code`,24),cN(155,`EventEmitter`),ag()(),Tl(156,`td`,20),cN(157,`-`),ag(),Tl(158,`td`,21)(159,`p`),cN(160,`Evento que será disparado ao clicar no botão de "Cancelar".`),ag(),Tl(161,`pre`)(162,`code`),cN(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),ag()(),Tl(164,`blockquote`)(165,`p`),cN(166,`Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.`),ag()()()(),Tl(167,`tr`,14)(168,`td`,15)(169,`div`,16)(170,`span`,17),cN(171,` p-components-size`),Gl(172,`br`),ag()()(),Tl(173,`td`,18)(174,`code`,25),cN(175,`string`),ag()(),Tl(176,`td`,20)(177,`p`)(178,`code`),cN(179,`medium`),ag()()(),Tl(180,`td`,21)(181,`em`)(182,`strong`),cN(183,`(opcional)`),ag()(),Tl(184,`p`),cN(185,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(186,`ul`)(187,`li`)(188,`code`),cN(189,`small`),ag(),cN(190,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(191,`li`)(192,`code`),cN(193,`medium`),ag(),cN(194,`: aplica a medida medium de cada componente.`),ag()(),Tl(195,`blockquote`)(196,`p`),cN(197,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(198,`code`),cN(199,`medium`),ag(),cN(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(201,`a`,26),cN(202,`po-theme`),ag(),cN(203,`.`),ag()()()(),Tl(204,`tr`,14)(205,`td`,15)(206,`div`,16)(207,`span`,17),cN(208,` p-disable-submit`),Gl(209,`br`),ag()()(),Tl(210,`td`,18)(211,`code`,27),cN(212,`boolean`),ag()(),Tl(213,`td`,20),cN(214,`-`),ag(),Tl(215,`td`,21)(216,`em`)(217,`strong`),cN(218,`(opcional)`),ag()(),Tl(219,`p`),cN(220,`Desabilita botões de submissão (save e saveNew)`),ag()()(),Tl(221,`tr`,14)(222,`td`,15)(223,`div`,16)(224,`span`,17),cN(225,` p-literals`),Gl(226,`br`),ag()()(),Tl(227,`td`,18)(228,`code`,28),cN(229,`PoPageEditLiterals`),ag()(),Tl(230,`td`,20),cN(231,`-`),ag(),Tl(232,`td`,21)(233,`em`)(234,`strong`),cN(235,`(opcional)`),ag()(),Tl(236,`p`),cN(237,`Objeto com as literais usadas no `),Tl(238,`code`),cN(239,`po-page-edit`),ag(),cN(240,`.`),ag(),Tl(241,`p`),cN(242,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(243,`pre`)(244,`code`),cN(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),ag()(),Tl(246,`p`),cN(247,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(248,`pre`)(249,`code`),cN(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),ag()(),Tl(251,`p`),cN(252,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(253,`pre`)(254,`code`),cN(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),ag()(),Tl(256,`blockquote`)(257,`p`),cN(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(259,`a`,29)(260,`code`),cN(261,`PoI18nService`),ag()(),cN(262,` ou do browser.`),ag()()()(),Tl(263,`tr`,14)(264,`td`,15)(265,`div`,22)(266,`span`,23),cN(267,` (p-save)`),Gl(268,`br`),ag()()(),Tl(269,`td`,18)(270,`code`,24),cN(271,`EventEmitter`),ag()(),Tl(272,`td`,20),cN(273,`-`),ag(),Tl(274,`td`,21)(275,`p`),cN(276,`Evento que será disparado ao clicar no botão de "Salvar".`),ag(),Tl(277,`pre`)(278,`code`),cN(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),ag()(),Tl(280,`blockquote`)(281,`p`),cN(282,`Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.`),ag()()()(),Tl(283,`tr`,14)(284,`td`,15)(285,`div`,22)(286,`span`,23),cN(287,` (p-save-new)`),Gl(288,`br`),ag()()(),Tl(289,`td`,18)(290,`code`,24),cN(291,`EventEmitter`),ag()(),Tl(292,`td`,20),cN(293,`-`),ag(),Tl(294,`td`,21)(295,`p`),cN(296,`Evento que será disparado ao clicar no botão de "Salvar e Novo".`),ag(),Tl(297,`pre`)(298,`code`),cN(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),ag()(),Tl(300,`blockquote`)(301,`p`),cN(302,`Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.`),ag()()()(),Tl(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),cN(307,` p-subtitle`),Gl(308,`br`),ag()()(),Tl(309,`td`,18)(310,`code`,25),cN(311,`string`),ag()(),Tl(312,`td`,20),cN(313,`-`),ag(),Tl(314,`td`,21)(315,`em`)(316,`strong`),cN(317,`(opcional)`),ag()(),Tl(318,`p`),cN(319,`Subtitulo do Header da página.`),ag(),Tl(320,`p`),cN(321,`Suporta formatação básica com as tags `),Tl(322,`code`),cN(323,`<b>`),ag(),cN(324,` (negrito), `),Tl(325,`code`),cN(326,`<strong>`),ag(),cN(327,` (negrito), `),Tl(328,`code`),cN(329,`<i>`),ag(),cN(330,` (itálico), `),Tl(331,`code`),cN(332,`<em>`),ag(),cN(333,` (it\xE1lico) e
`),Tl(334,`code`),cN(335,`<u>`),ag(),cN(336,` (sublinhado).`),ag(),Tl(337,`p`),cN(338,`Exemplo:`),ag(),Tl(339,`pre`)(340,`code`,30),cN(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),ag()(),Tl(342,`blockquote`)(343,`p`),cN(344,`Requer que `),Tl(345,`code`),cN(346,`p-title`),ag(),cN(347,` esteja definido.`),ag()()()(),Tl(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),cN(352,` p-title`),Gl(353,`br`),ag()()(),Tl(354,`td`,18)(355,`code`,25),cN(356,`string`),ag()(),Tl(357,`td`,20),cN(358,`-`),ag(),Tl(359,`td`,21)(360,`p`),cN(361,`Título da página.`),ag()()()(),Tl(362,`h3`),cN(363,`Interfaces`),ag(),Tl(364,`h4`,31)(365,`code`,5),cN(366,`PoBreadcrumbItem`),ag()(),Tl(367,`div`,2)(368,`p`),cN(369,`Interface que define cada item do componente `),Tl(370,`strong`),cN(371,`po-breadcrumb`),ag(),cN(372,`.`),ag()(),Tl(373,`h4`,10),cN(374,`Propriedades`),ag(),Tl(375,`table`,11)(376,`tr`,12)(377,`th`,13),cN(378,`Nome`),ag(),Tl(379,`th`,13),cN(380,`Tipo`),ag(),Tl(381,`th`,13),cN(382,`Descrição`),ag()(),Tl(383,`tr`,14)(384,`td`,15)(385,`div`,16)(386,`span`,17),cN(387,` action`),Gl(388,`br`),ag()()(),Tl(389,`td`,18)(390,`code`,32),cN(391,`Function`),ag()(),Tl(392,`td`,21)(393,`em`)(394,`strong`),cN(395,`(opcional)`),ag()(),Tl(396,`p`),cN(397,`Ação executada ao clicar no item.`),ag(),Tl(398,`blockquote`)(399,`p`),cN(400,`A função atribuída a esta propriedade receberá o `),Tl(401,`em`),cN(402,`label`),ag(),cN(403,` do item como parâmetro para execução.`),ag()()()(),Tl(404,`tr`,14)(405,`td`,15)(406,`div`,16)(407,`span`,17),cN(408,` label`),Gl(409,`br`),ag()()(),Tl(410,`td`,18)(411,`code`,25),cN(412,`string`),ag()(),Tl(413,`td`,21)(414,`p`),cN(415,`Rótulo do item.`),ag()()(),Tl(416,`tr`,14)(417,`td`,15)(418,`div`,16)(419,`span`,17),cN(420,` link`),Gl(421,`br`),ag()()(),Tl(422,`td`,18)(423,`code`,25),cN(424,`string`),ag()(),Tl(425,`td`,21)(426,`em`)(427,`strong`),cN(428,`(opcional)`),ag()(),Tl(429,`p`),cN(430,`Url do item.`),ag(),Tl(431,`blockquote`)(432,`p`),cN(433,`Caso o item também contenha uma `),Tl(434,`em`),cN(435,`action`),ag(),cN(436,` definida, a preferência de execução será do `),Tl(437,`em`),cN(438,`link`),ag(),cN(439,`.`),ag()(),Tl(440,`blockquote`)(441,`p`),cN(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(443,`strong`)(444,`a`,33),cN(445,`Veja um exemplo de como criar rotas aqui`),ag()(),cN(446,`.`),ag()(),Tl(447,`blockquote`)(448,`p`),cN(449,`Esta propriedade é necessária para que a propriedade `),Tl(450,`code`),cN(451,`p-favorite-service`),ag(),cN(452,` consiga favoritar ou desfavoritar.`),ag()()()()(),Tl(453,`h4`,31)(454,`code`,5),cN(455,`PoBreadcrumb`),ag()(),Tl(456,`div`,2)(457,`p`),cN(458,`Interface que define o `),Tl(459,`code`),cN(460,`po-breadcrumb`),ag(),cN(461,`.`),ag()(),Tl(462,`h4`,10),cN(463,`Propriedades`),ag(),Tl(464,`table`,11)(465,`tr`,12)(466,`th`,13),cN(467,`Nome`),ag(),Tl(468,`th`,13),cN(469,`Tipo`),ag(),Tl(470,`th`,13),cN(471,`Descrição`),ag()(),Tl(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),cN(476,` favorite`),Gl(477,`br`),ag()()(),Tl(478,`td`,18)(479,`code`,25),cN(480,`string`),ag()(),Tl(481,`td`,21)(482,`em`)(483,`strong`),cN(484,`(opcional)`),ag()(),Tl(485,`p`),cN(486,`Permite definir uma URL para favoritar ou desfavoritar.`),ag(),Tl(487,`blockquote`)(488,`p`),cN(489,`Para maiores informações verificar a propriedade `),Tl(490,`code`),cN(491,`p-favorite-service`),ag(),cN(492,` do componente `),Tl(493,`code`),cN(494,`po-breadcrumb`),ag(),cN(495,`.`),ag()()()(),Tl(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),cN(500,` items`),Gl(501,`br`),ag()()(),Tl(502,`td`,18)(503,`code`,34),cN(504,`Array<PoBreadcrumbItem>`),ag()(),Tl(505,`td`,21)(506,`p`),cN(507,`Lista de itens do `),Tl(508,`em`),cN(509,`breadcrumb`),ag(),cN(510,`.`),ag(),Tl(511,`p`)(512,`strong`),cN(513,`Exemplo:`),ag()(),Tl(514,`pre`)(515,`code`),cN(516,`{ label: 'Po Portal', link: 'portal' }
`),ag()()()(),Tl(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),cN(521,` params`),Gl(522,`br`),ag()()(),Tl(523,`td`,18)(524,`code`,35),cN(525,`object`),ag()(),Tl(526,`td`,21)(527,`em`)(528,`strong`),cN(529,`(opcional)`),ag()(),Tl(530,`p`),cN(531,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ag()()()(),Tl(532,`h4`,31)(533,`code`,5),cN(534,`PoPageEditLiterals`),ag()(),Tl(535,`div`,2)(536,`p`),cN(537,`Interface para definição das literais usadas no `),Tl(538,`code`),cN(539,`po-page-edit`),ag(),cN(540,`.`),ag()(),Tl(541,`h4`,10),cN(542,`Propriedades`),ag(),Tl(543,`table`,11)(544,`tr`,12)(545,`th`,13),cN(546,`Nome`),ag(),Tl(547,`th`,13),cN(548,`Tipo`),ag(),Tl(549,`th`,13),cN(550,`Descrição`),ag()(),Tl(551,`tr`,14)(552,`td`,15)(553,`div`,16)(554,`span`,17),cN(555,` cancel`),Gl(556,`br`),ag()()(),Tl(557,`td`,18)(558,`code`,25),cN(559,`string`),ag()(),Tl(560,`td`,21)(561,`em`)(562,`strong`),cN(563,`(opcional)`),ag()(),Tl(564,`p`),cN(565,`Label da ação `),Tl(566,`code`),cN(567,`cancel`),ag(),cN(568,`.`),ag()()(),Tl(569,`tr`,14)(570,`td`,15)(571,`div`,16)(572,`span`,17),cN(573,` save`),Gl(574,`br`),ag()()(),Tl(575,`td`,18)(576,`code`,25),cN(577,`string`),ag()(),Tl(578,`td`,21)(579,`em`)(580,`strong`),cN(581,`(opcional)`),ag()(),Tl(582,`p`),cN(583,`Label da ação `),Tl(584,`code`),cN(585,`save`),ag(),cN(586,`.`),ag()()(),Tl(587,`tr`,14)(588,`td`,15)(589,`div`,16)(590,`span`,17),cN(591,` saveNew`),Gl(592,`br`),ag()()(),Tl(593,`td`,18)(594,`code`,25),cN(595,`string`),ag()(),Tl(596,`td`,21)(597,`em`)(598,`strong`),cN(599,`(opcional)`),ag()(),Tl(600,`p`),cN(601,`Label da ação `),Tl(602,`code`),cN(603,`saveNew`),ag(),cN(604,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-page-edit-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-page-edit-basic-view`)(6,`sample-po-page-edit-labs-view`)(7,`sample-po-page-edit-user-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,se,ue,be,Ee],encapsulation:2,changeDetection:1})}return o})()}];var Se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[bL.forChild(ke),bL]})}return o})();var mt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[ar,Se]})}return o})();export{mt as DocPoPageEditModule};