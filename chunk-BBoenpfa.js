import{$i as pt,Ai as ho,C as C4,Ca as zO,Cr as Kc,Er as LP,Gi as mg,Gt as eoe,J as Lte,Ji as p0,Jr as TE,Mn as wze,Oi as he,Ri as kL,Rt as cae,Si as fo,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Y as Lu,Zn as C9,_a as wn,ai as Zx,ca as ue$1,fr as Hp,gi as e_,gn as soe,i as _a,in as mae,ir as E,jn as wte,mn as rb,nr as DN,oi as aN,on as n4,ot as Pte,pa as vN,qn as BP,r as Ta,si as b9,ti as Xc,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,y as B3,yi as f,yr as Jv,zr as Qn}from"./main-DRZDQSOK.js";var pe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-edit-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Edit`]],template:function(r,i){r&1&&Kc(0,`po-page-edit`,0)},dependencies:[wze],encapsulation:2,changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Edit Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-edit-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,pe],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`disableSubmit`,label:`Disable Submit`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}cancel(){this.action=`Cancel`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.properties=[],this.title=`PO Page Edit`,this.subtitle=``}save(){this.action=`Save`}saveNew(){this.action=`Save and new`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-edit-labs`]],standalone:!1,decls:34,vars:21,consts:[[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-cancel`,`p-save`,`p-save-new`,`p-breadcrumb`,`p-components-size`,`p-disable-submit`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Bx();Ac(0,`po-page-edit`,3),pt(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()})(`p-save-new`,function(){return i.saveNew()}),Ac(1,`div`,4),Kc(2,`po-info`,5),ug(),Kc(3,`po-divider`),Ac(4,`form`)(5,`div`,4)(6,`po-input`,6),RE(`ngModelChange`,function(a){return Jv(p),DN(i.title,a)||(i.title=a),e_(a)}),ug(),p0(),Ac(7,`po-input`,7),RE(`ngModelChange`,function(a){return Jv(p),DN(i.subtitle,a)||(i.subtitle=a),e_(a)}),ug(),p0(),Ac(8,`po-checkbox-group`,8),RE(`ngModelChange`,function(a){return Jv(p),DN(i.properties,a)||(i.properties=a),e_(a)}),ug(),p0(),Ac(9,`po-radio-group`,9),RE(`ngModelChange`,function(a){return Jv(p),DN(i.componentsSize,a)||(i.componentsSize=a),e_(a)}),ug(),p0(),ug(),Kc(10,`po-divider`),Ac(11,`form`,null,0)(13,`div`,4)(14,`po-input`,10),RE(`ngModelChange`,function(a){return Jv(p),DN(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),e_(a)}),ug(),p0(),ug()(),Ac(15,`form`,null,1)(17,`div`,4)(18,`po-input`,11),RE(`ngModelChange`,function(a){return Jv(p),DN(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),e_(a)}),ug(),p0(),Ac(19,`po-input`,12),RE(`ngModelChange`,function(a){return Jv(p),DN(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),e_(a)}),ug(),p0(),ug(),Ac(20,`div`,4)(21,`po-button`,13),pt(`p-click`,function(){return i.addBreadcrumbItem()}),ug()()(),Kc(22,`po-divider`),Ac(23,`form`,null,2)(25,`div`,4)(26,`po-input`,14),RE(`ngModelChange`,function(a){return Jv(p),DN(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),e_(a)}),ug(),p0(),Ac(27,`po-input`,15),RE(`ngModelChange`,function(a){return Jv(p),DN(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),e_(a)}),ug(),p0(),ug(),Ac(28,`div`,4)(29,`po-button`,16),pt(`p-click`,function(){return i.addBreadcrumbParam()}),ug()()(),Ac(30,`div`,4)(31,`po-input`,17),RE(`ngModelChange`,function(a){return Jv(p),DN(i.literals,a)||(i.literals=a),e_(a)}),pt(`p-change`,function(){return i.changeLiterals()}),ug(),p0(),ug(),Ac(32,`div`,4)(33,`po-button`,18),pt(`p-click`,function(){return i.restore()}),ug()()()()}if(r&2){let p=Zx(16),s=Zx(24);cE(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-disable-submit`,i.properties.includes(`disableSubmit`))(`p-literals`,i.customLiterals)(`p-title`,i.title)(`p-subtitle`,i.subtitle),Hp(2),cE(`p-value`,i.action),Hp(4),TE(`ngModel`,i.title),m0(),Hp(),TE(`ngModel`,i.subtitle),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.componentsSize),cE(`p-options`,i.componentsSizeOptions),m0(),Hp(5),TE(`ngModel`,i.breadcrumb.favorite),m0(),Hp(4),TE(`ngModel`,i.breadcrumbItem.label),m0(),Hp(),TE(`ngModel`,i.breadcrumbItem.link),m0(),Hp(2),cE(`p-disabled`,p.invalid),Hp(5),TE(`ngModel`,i.breadcrumbParams.property),m0(),Hp(),TE(`ngModel`,i.breadcrumbParams.value),m0(),Hp(2),cE(`p-disabled`,s.invalid),Hp(2),TE(`ngModel`,i.literals),m0()}},dependencies:[b9,D9,C9,BP,LP,oi,rb,n4,C4,wte,soe,wze],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-edit-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Edit Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-edit
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-edit-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ye,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ce],encapsulation:2,changeDetection:1})}return o})();var xe=[`formEditUser`];var ge=(()=>{class o{route=f(wn);poDialog=f(Lte);poNotification=f(Lu);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`User Edit`}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email=`john.doe@po-ui.com.br`,this.fathersName=`Mike Doe`,this.genre=`male`,this.graduation=`College Degree`,this.mothersName=`Jane Doe`,this.name=`John Doe`,this.nationality=`USA`,this.nickname=`John`,this.placeOfBirth=`Colorado`,this.userId=122635}save(){this.poNotification.success(`Save successfully`)}beforeRedirect(d){this.formEditUser.valid?this.route.navigate([`/`]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:`There is data that has not been saved yet. Are you sure you want to quit?`,confirm:()=>this.route.navigate([`/`])})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-edit-user`]],viewQuery:function(r,i){if(r&1&&Xc(xe,7),r&2){let p;fo(p=ho())&&(i.formEditUser=p.first)}},standalone:!1,decls:18,vars:13,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Edit`,`p-subtitle`,`Fields marked with <b>*</b> are <u>required</u>`,3,`p-cancel`,`p-save`,`p-breadcrumb`,`p-disable-submit`],[1,`po-row`],[`name`,`userId`,`p-clean`,``,`p-label`,`User ID`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nickname`,`p-clean`,``,`p-label`,`Nickname`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nationality`,`p-clean`,``,`p-label`,`Nationality`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`placeOfBirth`,`p-clean`,``,`p-label`,`Place Of Birth`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`graduation`,`p-clean`,``,`p-label`,`Graduation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`fathersName`,`p-clean`,``,`p-label`,`Father's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`mothersName`,`p-clean`,``,`p-label`,`Mother's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let p=Bx();Ac(0,`po-page-edit`,1),pt(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()}),Ac(1,`form`,null,0)(3,`div`,2)(4,`po-number`,3),RE(`ngModelChange`,function(a){return Jv(p),DN(i.userId,a)||(i.userId=a),e_(a)}),ug(),p0(),Ac(5,`po-email`,4),RE(`ngModelChange`,function(a){return Jv(p),DN(i.email,a)||(i.email=a),e_(a)}),ug(),p0(),Ac(6,`po-input`,5),RE(`ngModelChange`,function(a){return Jv(p),DN(i.name,a)||(i.name=a),e_(a)}),ug(),p0(),ug(),Ac(7,`div`,2)(8,`po-input`,6),RE(`ngModelChange`,function(a){return Jv(p),DN(i.nickname,a)||(i.nickname=a),e_(a)}),ug(),p0(),Ac(9,`po-datepicker`,7),RE(`ngModelChange`,function(a){return Jv(p),DN(i.birthDate,a)||(i.birthDate=a),e_(a)}),ug(),p0(),Ac(10,`po-input`,8),RE(`ngModelChange`,function(a){return Jv(p),DN(i.genre,a)||(i.genre=a),e_(a)}),ug(),p0(),ug(),Ac(11,`div`,2)(12,`po-input`,9),RE(`ngModelChange`,function(a){return Jv(p),DN(i.nationality,a)||(i.nationality=a),e_(a)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(a){return Jv(p),DN(i.placeOfBirth,a)||(i.placeOfBirth=a),e_(a)}),ug(),p0(),Ac(14,`po-input`,11),RE(`ngModelChange`,function(a){return Jv(p),DN(i.graduation,a)||(i.graduation=a),e_(a)}),ug(),p0(),ug(),Ac(15,`div`,2)(16,`po-input`,12),RE(`ngModelChange`,function(a){return Jv(p),DN(i.fathersName,a)||(i.fathersName=a),e_(a)}),ug(),p0(),Ac(17,`po-input`,13),RE(`ngModelChange`,function(a){return Jv(p),DN(i.mothersName,a)||(i.mothersName=a),e_(a)}),ug(),p0(),ug()()()}if(r&2){let p=Zx(2);cE(`p-breadcrumb`,i.breadcrumb)(`p-disable-submit`,p.invalid),Hp(4),TE(`ngModel`,i.userId),m0(),Hp(),TE(`ngModel`,i.email),m0(),Hp(),TE(`ngModel`,i.name),m0(),Hp(2),TE(`ngModel`,i.nickname),m0(),Hp(),TE(`ngModel`,i.birthDate),m0(),Hp(),TE(`ngModel`,i.genre),m0(),Hp(2),TE(`ngModel`,i.nationality),m0(),Hp(),TE(`ngModel`,i.placeOfBirth),m0(),Hp(),TE(`ngModel`,i.graduation),m0(),Hp(2),TE(`ngModel`,i.fathersName),m0(),Hp(),TE(`ngModel`,i.mothersName),m0()}},dependencies:[b9,D9,C9,BP,LP,Pte,B3,C4,eoe,wze],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Edit - User`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-edit
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-edit-user`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ge],encapsulation:2,changeDetection:1})}return o})();var Ee=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-page-edit-doc`]],standalone:!1,decls:605,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoPageEditLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ac(7,`code`),vN(8,`po-page-default`),ug(),vN(9,`, `),Ac(10,`code`),vN(11,`po-page-detail`),ug(),vN(12,`,
`),Ac(13,`code`),vN(14,`po-page-edit`),ug(),vN(15,`, `),Ac(16,`code`),vN(17,`po-page-list`),ug(),vN(18,` e `),Ac(19,`code`),vN(20,`po-page-slide`),ug(),vN(21,`.`),ug()(),Ac(22,`h3`,3),vN(23,`Componente`),ug(),Ac(24,`h4`,4)(25,`code`,5),vN(26,`PoPageEditComponent`),ug()(),Ac(27,`div`,2)(28,`p`),vN(29,`O componente `),Ac(30,`strong`),vN(31,`po-page-edit`),ug(),vN(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),ug(),Ac(33,`p`),vN(34,`Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `),Ac(35,`code`),vN(36,`p-disable-submit`),ug(),vN(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),ug(),Ac(38,`h4`),vN(39,`Tokens customizáveis`),ug(),Ac(40,`blockquote`)(41,`p`),vN(42,`Para maiores informações, acesse o guia `),Ac(43,`a`,6),vN(44,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(45,`.`),ug()(),Ac(46,`table`)(47,`thead`)(48,`tr`)(49,`th`),vN(50,`Propriedade`),ug(),Ac(51,`th`),vN(52,`Descrição`),ug(),Ac(53,`th`),vN(54,`Valor Padrão`),ug()()(),Ac(55,`tbody`)(56,`tr`)(57,`td`)(58,`strong`),vN(59,`Header`),ug()(),Kc(60,`td`)(61,`td`),ug(),Ac(62,`tr`)(63,`td`)(64,`code`),vN(65,`--padding`),ug()(),Ac(66,`td`),vN(67,`Espaçamento do header`),ug(),Ac(68,`td`)(69,`code`),vN(70,`var(--spacing-xs) var(--spacing-md)`),ug()()(),Ac(71,`tr`)(72,`td`)(73,`code`),vN(74,`--gap`),ug()(),Ac(75,`td`),vN(76,`Espaçamento entre os breadcrumbs e o título`),ug(),Ac(77,`td`)(78,`code`),vN(79,`var(--spacing-md)`),ug()()(),Ac(80,`tr`)(81,`td`)(82,`code`),vN(83,`--gap-actions`),ug()(),Ac(84,`td`),vN(85,`Espaçamento entre as ações`),ug(),Ac(86,`td`)(87,`code`),vN(88,`var(--spacing-xs)`),ug()()(),Ac(89,`tr`)(90,`td`)(91,`code`),vN(92,`--font-family`),ug()(),Ac(93,`td`),vN(94,`Família tipográfica do título`),ug(),Ac(95,`td`)(96,`code`),vN(97,`var(--font-family-theme)`),ug()()(),Ac(98,`tr`)(99,`td`)(100,`strong`),vN(101,`Content`),ug()(),Kc(102,`td`)(103,`td`),ug(),Ac(104,`tr`)(105,`td`)(106,`code`),vN(107,`--padding-content`),ug()(),Ac(108,`td`),vN(109,`Espaçamento do conteúdo`),ug(),Ac(110,`td`)(111,`code`),vN(112,`var(--spacing-xs) var(--spacing-sm)`),ug()()()()()(),Ac(113,`div`,7)(114,`h4`,8),vN(115,`Seletor`),ug(),Ac(116,`pre`,9),vN(117,`<po-page-edit
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
`),ug()(),Ac(118,`h4`,10),vN(119,`Propriedades`),ug(),Ac(120,`table`,11)(121,`tr`,12)(122,`th`,13),vN(123,`Nome`),ug(),Ac(124,`th`,13),vN(125,`Tipo`),ug(),Ac(126,`th`,13),vN(127,`Padrão`),ug(),Ac(128,`th`,13),vN(129,`Descrição`),ug()(),Ac(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),vN(134,` p-breadcrumb`),Kc(135,`br`),ug()()(),Ac(136,`td`,18)(137,`code`,19),vN(138,`PoBreadcrumb`),ug()(),Ac(139,`td`,20),vN(140,`-`),ug(),Ac(141,`td`,21)(142,`em`)(143,`strong`),vN(144,`(opcional)`),ug()(),Ac(145,`p`),vN(146,`Objeto com propriedades do breadcrumb.`),ug()()(),Ac(147,`tr`,14)(148,`td`,15)(149,`div`,22)(150,`span`,23),vN(151,` (p-cancel)`),Kc(152,`br`),ug()()(),Ac(153,`td`,18)(154,`code`,24),vN(155,`EventEmitter`),ug()(),Ac(156,`td`,20),vN(157,`-`),ug(),Ac(158,`td`,21)(159,`p`),vN(160,`Evento que será disparado ao clicar no botão de "Cancelar".`),ug(),Ac(161,`pre`)(162,`code`),vN(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),ug()(),Ac(164,`blockquote`)(165,`p`),vN(166,`Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.`),ug()()()(),Ac(167,`tr`,14)(168,`td`,15)(169,`div`,16)(170,`span`,17),vN(171,` p-components-size`),Kc(172,`br`),ug()()(),Ac(173,`td`,18)(174,`code`,25),vN(175,`string`),ug()(),Ac(176,`td`,20)(177,`p`)(178,`code`),vN(179,`medium`),ug()()(),Ac(180,`td`,21)(181,`em`)(182,`strong`),vN(183,`(opcional)`),ug()(),Ac(184,`p`),vN(185,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(186,`ul`)(187,`li`)(188,`code`),vN(189,`small`),ug(),vN(190,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(191,`li`)(192,`code`),vN(193,`medium`),ug(),vN(194,`: aplica a medida medium de cada componente.`),ug()(),Ac(195,`blockquote`)(196,`p`),vN(197,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(198,`code`),vN(199,`medium`),ug(),vN(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(201,`a`,26),vN(202,`po-theme`),ug(),vN(203,`.`),ug()()()(),Ac(204,`tr`,14)(205,`td`,15)(206,`div`,16)(207,`span`,17),vN(208,` p-disable-submit`),Kc(209,`br`),ug()()(),Ac(210,`td`,18)(211,`code`,27),vN(212,`boolean`),ug()(),Ac(213,`td`,20),vN(214,`-`),ug(),Ac(215,`td`,21)(216,`em`)(217,`strong`),vN(218,`(opcional)`),ug()(),Ac(219,`p`),vN(220,`Desabilita botões de submissão (save e saveNew)`),ug()()(),Ac(221,`tr`,14)(222,`td`,15)(223,`div`,16)(224,`span`,17),vN(225,` p-literals`),Kc(226,`br`),ug()()(),Ac(227,`td`,18)(228,`code`,28),vN(229,`PoPageEditLiterals`),ug()(),Ac(230,`td`,20),vN(231,`-`),ug(),Ac(232,`td`,21)(233,`em`)(234,`strong`),vN(235,`(opcional)`),ug()(),Ac(236,`p`),vN(237,`Objeto com as literais usadas no `),Ac(238,`code`),vN(239,`po-page-edit`),ug(),vN(240,`.`),ug(),Ac(241,`p`),vN(242,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(243,`pre`)(244,`code`),vN(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),ug()(),Ac(246,`p`),vN(247,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(248,`pre`)(249,`code`),vN(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),ug()(),Ac(251,`p`),vN(252,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(253,`pre`)(254,`code`),vN(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),ug()(),Ac(256,`blockquote`)(257,`p`),vN(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(259,`a`,29)(260,`code`),vN(261,`PoI18nService`),ug()(),vN(262,` ou do browser.`),ug()()()(),Ac(263,`tr`,14)(264,`td`,15)(265,`div`,22)(266,`span`,23),vN(267,` (p-save)`),Kc(268,`br`),ug()()(),Ac(269,`td`,18)(270,`code`,24),vN(271,`EventEmitter`),ug()(),Ac(272,`td`,20),vN(273,`-`),ug(),Ac(274,`td`,21)(275,`p`),vN(276,`Evento que será disparado ao clicar no botão de "Salvar".`),ug(),Ac(277,`pre`)(278,`code`),vN(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),ug()(),Ac(280,`blockquote`)(281,`p`),vN(282,`Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.`),ug()()()(),Ac(283,`tr`,14)(284,`td`,15)(285,`div`,22)(286,`span`,23),vN(287,` (p-save-new)`),Kc(288,`br`),ug()()(),Ac(289,`td`,18)(290,`code`,24),vN(291,`EventEmitter`),ug()(),Ac(292,`td`,20),vN(293,`-`),ug(),Ac(294,`td`,21)(295,`p`),vN(296,`Evento que será disparado ao clicar no botão de "Salvar e Novo".`),ug(),Ac(297,`pre`)(298,`code`),vN(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),ug()(),Ac(300,`blockquote`)(301,`p`),vN(302,`Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.`),ug()()()(),Ac(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),vN(307,` p-subtitle`),Kc(308,`br`),ug()()(),Ac(309,`td`,18)(310,`code`,25),vN(311,`string`),ug()(),Ac(312,`td`,20),vN(313,`-`),ug(),Ac(314,`td`,21)(315,`em`)(316,`strong`),vN(317,`(opcional)`),ug()(),Ac(318,`p`),vN(319,`Subtitulo do Header da página.`),ug(),Ac(320,`p`),vN(321,`Suporta formatação básica com as tags `),Ac(322,`code`),vN(323,`<b>`),ug(),vN(324,` (negrito), `),Ac(325,`code`),vN(326,`<strong>`),ug(),vN(327,` (negrito), `),Ac(328,`code`),vN(329,`<i>`),ug(),vN(330,` (itálico), `),Ac(331,`code`),vN(332,`<em>`),ug(),vN(333,` (it\xE1lico) e
`),Ac(334,`code`),vN(335,`<u>`),ug(),vN(336,` (sublinhado).`),ug(),Ac(337,`p`),vN(338,`Exemplo:`),ug(),Ac(339,`pre`)(340,`code`,30),vN(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),ug()(),Ac(342,`blockquote`)(343,`p`),vN(344,`Requer que `),Ac(345,`code`),vN(346,`p-title`),ug(),vN(347,` esteja definido.`),ug()()()(),Ac(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),vN(352,` p-title`),Kc(353,`br`),ug()()(),Ac(354,`td`,18)(355,`code`,25),vN(356,`string`),ug()(),Ac(357,`td`,20),vN(358,`-`),ug(),Ac(359,`td`,21)(360,`p`),vN(361,`Título da página.`),ug()()()(),Ac(362,`h3`),vN(363,`Interfaces`),ug(),Ac(364,`h4`,31)(365,`code`,5),vN(366,`PoBreadcrumbItem`),ug()(),Ac(367,`div`,2)(368,`p`),vN(369,`Interface que define cada item do componente `),Ac(370,`strong`),vN(371,`po-breadcrumb`),ug(),vN(372,`.`),ug()(),Ac(373,`h4`,10),vN(374,`Propriedades`),ug(),Ac(375,`table`,11)(376,`tr`,12)(377,`th`,13),vN(378,`Nome`),ug(),Ac(379,`th`,13),vN(380,`Tipo`),ug(),Ac(381,`th`,13),vN(382,`Descrição`),ug()(),Ac(383,`tr`,14)(384,`td`,15)(385,`div`,16)(386,`span`,17),vN(387,` action`),Kc(388,`br`),ug()()(),Ac(389,`td`,18)(390,`code`,32),vN(391,`Function`),ug()(),Ac(392,`td`,21)(393,`em`)(394,`strong`),vN(395,`(opcional)`),ug()(),Ac(396,`p`),vN(397,`Ação executada ao clicar no item.`),ug(),Ac(398,`blockquote`)(399,`p`),vN(400,`A função atribuída a esta propriedade receberá o `),Ac(401,`em`),vN(402,`label`),ug(),vN(403,` do item como parâmetro para execução.`),ug()()()(),Ac(404,`tr`,14)(405,`td`,15)(406,`div`,16)(407,`span`,17),vN(408,` label`),Kc(409,`br`),ug()()(),Ac(410,`td`,18)(411,`code`,25),vN(412,`string`),ug()(),Ac(413,`td`,21)(414,`p`),vN(415,`Rótulo do item.`),ug()()(),Ac(416,`tr`,14)(417,`td`,15)(418,`div`,16)(419,`span`,17),vN(420,` link`),Kc(421,`br`),ug()()(),Ac(422,`td`,18)(423,`code`,25),vN(424,`string`),ug()(),Ac(425,`td`,21)(426,`em`)(427,`strong`),vN(428,`(opcional)`),ug()(),Ac(429,`p`),vN(430,`Url do item.`),ug(),Ac(431,`blockquote`)(432,`p`),vN(433,`Caso o item também contenha uma `),Ac(434,`em`),vN(435,`action`),ug(),vN(436,` definida, a preferência de execução será do `),Ac(437,`em`),vN(438,`link`),ug(),vN(439,`.`),ug()(),Ac(440,`blockquote`)(441,`p`),vN(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ac(443,`strong`)(444,`a`,33),vN(445,`Veja um exemplo de como criar rotas aqui`),ug()(),vN(446,`.`),ug()(),Ac(447,`blockquote`)(448,`p`),vN(449,`Esta propriedade é necessária para que a propriedade `),Ac(450,`code`),vN(451,`p-favorite-service`),ug(),vN(452,` consiga favoritar ou desfavoritar.`),ug()()()()(),Ac(453,`h4`,31)(454,`code`,5),vN(455,`PoBreadcrumb`),ug()(),Ac(456,`div`,2)(457,`p`),vN(458,`Interface que define o `),Ac(459,`code`),vN(460,`po-breadcrumb`),ug(),vN(461,`.`),ug()(),Ac(462,`h4`,10),vN(463,`Propriedades`),ug(),Ac(464,`table`,11)(465,`tr`,12)(466,`th`,13),vN(467,`Nome`),ug(),Ac(468,`th`,13),vN(469,`Tipo`),ug(),Ac(470,`th`,13),vN(471,`Descrição`),ug()(),Ac(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),vN(476,` favorite`),Kc(477,`br`),ug()()(),Ac(478,`td`,18)(479,`code`,25),vN(480,`string`),ug()(),Ac(481,`td`,21)(482,`em`)(483,`strong`),vN(484,`(opcional)`),ug()(),Ac(485,`p`),vN(486,`Permite definir uma URL para favoritar ou desfavoritar.`),ug(),Ac(487,`blockquote`)(488,`p`),vN(489,`Para maiores informações verificar a propriedade `),Ac(490,`code`),vN(491,`p-favorite-service`),ug(),vN(492,` do componente `),Ac(493,`code`),vN(494,`po-breadcrumb`),ug(),vN(495,`.`),ug()()()(),Ac(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),vN(500,` items`),Kc(501,`br`),ug()()(),Ac(502,`td`,18)(503,`code`,34),vN(504,`Array<PoBreadcrumbItem>`),ug()(),Ac(505,`td`,21)(506,`p`),vN(507,`Lista de itens do `),Ac(508,`em`),vN(509,`breadcrumb`),ug(),vN(510,`.`),ug(),Ac(511,`p`)(512,`strong`),vN(513,`Exemplo:`),ug()(),Ac(514,`pre`)(515,`code`),vN(516,`{ label: 'Po Portal', link: 'portal' }
`),ug()()()(),Ac(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),vN(521,` params`),Kc(522,`br`),ug()()(),Ac(523,`td`,18)(524,`code`,35),vN(525,`object`),ug()(),Ac(526,`td`,21)(527,`em`)(528,`strong`),vN(529,`(opcional)`),ug()(),Ac(530,`p`),vN(531,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ug()()()(),Ac(532,`h4`,31)(533,`code`,5),vN(534,`PoPageEditLiterals`),ug()(),Ac(535,`div`,2)(536,`p`),vN(537,`Interface para definição das literais usadas no `),Ac(538,`code`),vN(539,`po-page-edit`),ug(),vN(540,`.`),ug()(),Ac(541,`h4`,10),vN(542,`Propriedades`),ug(),Ac(543,`table`,11)(544,`tr`,12)(545,`th`,13),vN(546,`Nome`),ug(),Ac(547,`th`,13),vN(548,`Tipo`),ug(),Ac(549,`th`,13),vN(550,`Descrição`),ug()(),Ac(551,`tr`,14)(552,`td`,15)(553,`div`,16)(554,`span`,17),vN(555,` cancel`),Kc(556,`br`),ug()()(),Ac(557,`td`,18)(558,`code`,25),vN(559,`string`),ug()(),Ac(560,`td`,21)(561,`em`)(562,`strong`),vN(563,`(opcional)`),ug()(),Ac(564,`p`),vN(565,`Label da ação `),Ac(566,`code`),vN(567,`cancel`),ug(),vN(568,`.`),ug()()(),Ac(569,`tr`,14)(570,`td`,15)(571,`div`,16)(572,`span`,17),vN(573,` save`),Kc(574,`br`),ug()()(),Ac(575,`td`,18)(576,`code`,25),vN(577,`string`),ug()(),Ac(578,`td`,21)(579,`em`)(580,`strong`),vN(581,`(opcional)`),ug()(),Ac(582,`p`),vN(583,`Label da ação `),Ac(584,`code`),vN(585,`save`),ug(),vN(586,`.`),ug()()(),Ac(587,`tr`,14)(588,`td`,15)(589,`div`,16)(590,`span`,17),vN(591,` saveNew`),Kc(592,`br`),ug()()(),Ac(593,`td`,18)(594,`code`,25),vN(595,`string`),ug()(),Ac(596,`td`,21)(597,`em`)(598,`strong`),vN(599,`(opcional)`),ug()(),Ac(600,`p`),vN(601,`Label da ação `),Ac(602,`code`),vN(603,`saveNew`),ug(),vN(604,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var ke=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-page-edit-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-page-edit-basic-view`)(6,`sample-po-page-edit-labs-view`)(7,`sample-po-page-edit-user-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Cze,cae,mae,se,ue,be,Ee],encapsulation:2,changeDetection:1})}return o})()}];var Se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[kL.forChild(ke),kL]})}return o})();var mt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=he({type:o});static ɵinj=ue$1({imports:[Ta,Se]})}return o})();export{mt as DocPoPageEditModule};