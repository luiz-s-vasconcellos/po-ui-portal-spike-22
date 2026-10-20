import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Rt as _oe,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,ct as Qze,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-detail-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Detail`]],template:function(l,n){l&1&&nu(0,`po-page-detail`,0)},dependencies:[Qze],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a});var ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-detail-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Detail Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-detail-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,se,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ee],encapsulation:2,changeDetection:1})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action=`back`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}edit(){this.action=`edit`}remove(){this.action=`remove`}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.title=`PO Page Detail`,this.subtitle=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-detail-labs`]],standalone:!1,decls:33,vars:18,consts:[[`f`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-edit`,`p-remove`,`p-breadcrumb`,`p-components-size`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"back": "Retornar", "edit": "Edição", "remove": "Excluir registro"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let s=Sx();jc(0,`po-page-detail`,4),mt(`p-back`,function(){return n.back()})(`p-edit`,function(){return n.edit()})(`p-remove`,function(){return n.remove()}),jc(1,`div`,5),nu(2,`po-info`,6),wg(),nu(3,`po-divider`),jc(4,`form`,null,0)(6,`po-input`,7),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.title,m)||(n.title=m),v_(m)}),wg(),jc(7,`po-input`,8),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.subtitle,m)||(n.subtitle=m),v_(m)}),wg(),jc(8,`po-radio-group`,9),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.componentsSize,m)||(n.componentsSize=m),v_(m)}),wg(),nu(9,`po-divider`),jc(10,`form`,null,1)(12,`div`,5)(13,`po-input`,10),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),v_(m)}),wg()()(),jc(14,`form`,null,2)(16,`div`,5)(17,`po-input`,11),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),v_(m)}),wg(),jc(18,`po-input`,12),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),v_(m)}),wg()(),jc(19,`div`,5)(20,`po-button`,13),mt(`p-click`,function(){return n.addBreadcrumbItem()}),wg()()(),nu(21,`po-divider`),jc(22,`form`,null,3)(24,`div`,5)(25,`po-input`,14),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),v_(m)}),wg(),jc(26,`po-input`,15),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),v_(m)}),wg()(),jc(27,`div`,5)(28,`po-button`,16),mt(`p-click`,function(){return n.addBreadcrumbParam()}),wg()()(),jc(29,`div`,5)(30,`po-input`,17),JN(),ob(`ngModelChange`,function(m){return y_(s),sO(n.literals,m)||(n.literals=m),v_(m)}),mt(`p-change`,function(){return n.changeLiterals()}),wg()(),jc(31,`div`,5)(32,`po-button`,18),mt(`p-click`,function(){return n.restore()}),wg()()()()}if(l&2){let s=Fx(15),c=Fx(23);jE(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),rg(2),jE(`p-value`,n.action),rg(4),ib(`ngModel`,n.title),t0(),rg(),ib(`ngModel`,n.subtitle),t0(),rg(),ib(`ngModel`,n.componentsSize),jE(`p-options`,n.componentsSizeOptions),t0(),rg(5),ib(`ngModel`,n.breadcrumb.favorite),t0(),rg(4),ib(`ngModel`,n.breadcrumbItem.label),t0(),rg(),ib(`ngModel`,n.breadcrumbItem.link),t0(),rg(2),jE(`p-disabled`,s.invalid),rg(5),ib(`ngModel`,n.breadcrumbParams.property),t0(),rg(),ib(`ngModel`,n.breadcrumbParams.value),t0(),rg(2),jE(`p-disabled`,c.invalid),rg(2),ib(`ngModel`,n.literals),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,Ote,_oe,Qze],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-detail-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Detail Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-detail-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,be,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ne],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{router=p(Sn);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`John`;placeOfBirth=`Colorado`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};edit(){this.router.navigate([`/documentation/po-page-edit`],{queryParams:{view:`web`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-detail-user`]],standalone:!1,decls:19,vars:12,consts:[[`p-title`,`User Detail`,`p-subtitle`,`Status: <b>Active</b> | Role: <i>Administrator</i>`,3,`p-edit`,`p-breadcrumb`],[1,`po-row`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,3,`p-value`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Birth Date`,1,`po-md-4`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,3,`p-value`],[`p-label`,`Place Of Birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Graduation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Fathers Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mothers Name`,1,`po-md-4`,3,`p-value`]],template:function(l,n){l&1&&(jc(0,`po-page-detail`,0),mt(`p-edit`,function(){return n.edit()}),jc(1,`div`,1),nu(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`div`,1),nu(7,`po-info`,5)(8,`po-info`,6)(9,`po-info`,7),wg(),nu(10,`po-divider`),jc(11,`div`,1),nu(12,`po-info`,8)(13,`po-info`,9)(14,`po-info`,10),wg(),nu(15,`po-divider`),jc(16,`div`,1),nu(17,`po-info`,11)(18,`po-info`,12),wg()()),l&2&&(jE(`p-breadcrumb`,n.breadcrumb),rg(2),jE(`p-value`,n.userId),rg(),jE(`p-value`,n.email),rg(),jE(`p-value`,n.name),rg(3),jE(`p-value`,n.nickname),rg(),jE(`p-value`,n.birthDate),rg(),jE(`p-value`,n.genre),rg(3),jE(`p-value`,n.nationality),rg(),jE(`p-value`,n.placeOfBirth),rg(),jE(`p-value`,n.graduation),rg(3),jE(`p-value`,n.fathersName),rg(),jE(`p-value`,n.mothersName))},dependencies:[Lf,_oe,Qze],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-detail-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Page Detail - User`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-detail
  p-title="User Detail"
  p-subtitle="Status: <b>Active</b> | Role: <i>Administrator</i>"
  [p-breadcrumb]="breadcrumb"
  (p-edit)="edit()"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-detail-user`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Se,n.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,oe],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-detail-doc`]],standalone:!1,decls:580,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageDetailLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(l,n){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoPageModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo responsável pelos componentes de estrutura de página: `),jc(7,`code`),iO(8,`po-page-default`),wg(),iO(9,`, `),jc(10,`code`),iO(11,`po-page-detail`),wg(),iO(12,`,
`),jc(13,`code`),iO(14,`po-page-edit`),wg(),iO(15,`, `),jc(16,`code`),iO(17,`po-page-list`),wg(),iO(18,` e `),jc(19,`code`),iO(20,`po-page-slide`),wg(),iO(21,`.`),wg()(),jc(22,`h3`,3),iO(23,`Componente`),wg(),jc(24,`h4`,4)(25,`code`,5),iO(26,`PoPageDetailComponent`),wg()(),jc(27,`div`,2)(28,`p`),iO(29,`O componente `),jc(30,`strong`),iO(31,`po-page-detail`),wg(),iO(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),wg(),jc(33,`h4`),iO(34,`Tokens customizáveis`),wg(),jc(35,`blockquote`)(36,`p`),iO(37,`Para maiores informações, acesse o guia `),jc(38,`a`,6),iO(39,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(40,`.`),wg()(),jc(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),iO(45,`Propriedade`),wg(),jc(46,`th`),iO(47,`Descrição`),wg(),jc(48,`th`),iO(49,`Valor Padrão`),wg()()(),jc(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),iO(54,`Header`),wg()(),nu(55,`td`)(56,`td`),wg(),jc(57,`tr`)(58,`td`)(59,`code`),iO(60,`--padding`),wg()(),jc(61,`td`),iO(62,`Espaçamento do header`),wg(),jc(63,`td`)(64,`code`),iO(65,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(66,`tr`)(67,`td`)(68,`code`),iO(69,`--gap`),wg()(),jc(70,`td`),iO(71,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(72,`td`)(73,`code`),iO(74,`var(--spacing-md)`),wg()()(),jc(75,`tr`)(76,`td`)(77,`code`),iO(78,`--gap-actions`),wg()(),jc(79,`td`),iO(80,`Espaçamento entre as ações`),wg(),jc(81,`td`)(82,`code`),iO(83,`var(--spacing-xs)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),iO(87,`--font-family`),wg()(),jc(88,`td`),iO(89,`Família tipográfica do título`),wg(),jc(90,`td`)(91,`code`),iO(92,`var(--font-family-theme)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`strong`),iO(96,`Content`),wg()(),nu(97,`td`)(98,`td`),wg(),jc(99,`tr`)(100,`td`)(101,`code`),iO(102,`--padding-content`),wg()(),jc(103,`td`),iO(104,`Espaçamento do conteúdo`),wg(),jc(105,`td`)(106,`code`),iO(107,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(108,`div`,7)(109,`h4`,8),iO(110,`Seletor`),wg(),jc(111,`pre`,9),iO(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),wg()(),jc(113,`h4`,10),iO(114,`Propriedades`),wg(),jc(115,`table`,11)(116,`tr`,12)(117,`th`,13),iO(118,`Nome`),wg(),jc(119,`th`,13),iO(120,`Tipo`),wg(),jc(121,`th`,13),iO(122,`Padrão`),wg(),jc(123,`th`,13),iO(124,`Descrição`),wg()(),jc(125,`tr`,14)(126,`td`,15)(127,`div`,16)(128,`span`,17),iO(129,` (p-back)`),nu(130,`br`),wg()()(),jc(131,`td`,18)(132,`code`,19),iO(133,`EventEmitter`),wg()(),jc(134,`td`,20),iO(135,`-`),wg(),jc(136,`td`,21)(137,`p`),iO(138,`Evento que será disparado ao clicar no botão de "Voltar".`),wg(),jc(139,`pre`)(140,`code`),iO(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),wg()(),jc(142,`blockquote`)(143,`p`),iO(144,`Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.`),wg()()()(),jc(145,`tr`,14)(146,`td`,15)(147,`div`,22)(148,`span`,23),iO(149,` p-breadcrumb`),nu(150,`br`),wg()()(),jc(151,`td`,18)(152,`code`,24),iO(153,`PoBreadcrumb`),wg()(),jc(154,`td`,20),iO(155,`-`),wg(),jc(156,`td`,21)(157,`p`),iO(158,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(159,`tr`,14)(160,`td`,15)(161,`div`,22)(162,`span`,23),iO(163,` p-components-size`),nu(164,`br`),wg()()(),jc(165,`td`,18)(166,`code`,25),iO(167,`string`),wg()(),jc(168,`td`,20)(169,`p`)(170,`code`),iO(171,`medium`),wg()()(),jc(172,`td`,21)(173,`em`)(174,`strong`),iO(175,`(opcional)`),wg()(),jc(176,`p`),iO(177,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(178,`ul`)(179,`li`)(180,`code`),iO(181,`small`),wg(),iO(182,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(183,`li`)(184,`code`),iO(185,`medium`),wg(),iO(186,`: aplica a medida medium de cada componente.`),wg()(),jc(187,`blockquote`)(188,`p`),iO(189,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(190,`code`),iO(191,`medium`),wg(),iO(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(193,`a`,26),iO(194,`po-theme`),wg(),iO(195,`.`),wg()()()(),jc(196,`tr`,14)(197,`td`,15)(198,`div`,16)(199,`span`,17),iO(200,` (p-edit)`),nu(201,`br`),wg()()(),jc(202,`td`,18)(203,`code`,19),iO(204,`EventEmitter`),wg()(),jc(205,`td`,20),iO(206,`-`),wg(),jc(207,`td`,21)(208,`p`),iO(209,`Evento que será disparado ao clicar no botão de "Editar".`),wg(),jc(210,`pre`)(211,`code`),iO(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),wg()(),jc(213,`blockquote`)(214,`p`),iO(215,`Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.`),wg()()()(),jc(216,`tr`,14)(217,`td`,15)(218,`div`,22)(219,`span`,23),iO(220,` p-literals`),nu(221,`br`),wg()()(),jc(222,`td`,18)(223,`code`,27),iO(224,`PoPageDetailLiterals`),wg()(),jc(225,`td`,20),iO(226,`-`),wg(),jc(227,`td`,21)(228,`em`)(229,`strong`),iO(230,`(opcional)`),wg()(),jc(231,`p`),iO(232,`Objeto com as literais usadas no `),jc(233,`code`),iO(234,`po-page-detail`),wg(),iO(235,`.`),wg(),jc(236,`p`),iO(237,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(238,`pre`)(239,`code`),iO(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),wg()(),jc(241,`p`),iO(242,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(243,`pre`)(244,`code`),iO(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),wg()(),jc(246,`p`),iO(247,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(248,`pre`)(249,`code`),iO(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),wg()(),jc(251,`blockquote`)(252,`p`),iO(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(254,`a`,28)(255,`code`),iO(256,`PoI18nService`),wg()(),iO(257,` ou do browser.`),wg()()()(),jc(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),iO(262,` (p-remove)`),nu(263,`br`),wg()()(),jc(264,`td`,18)(265,`code`,19),iO(266,`EventEmitter`),wg()(),jc(267,`td`,20),iO(268,`-`),wg(),jc(269,`td`,21)(270,`p`),iO(271,`Evento que será disparado ao clicar no botão de "Remover".`),wg(),jc(272,`pre`)(273,`code`),iO(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),wg()(),jc(275,`blockquote`)(276,`p`),iO(277,`Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.`),wg()()()(),jc(278,`tr`,14)(279,`td`,15)(280,`div`,22)(281,`span`,23),iO(282,` p-subtitle`),nu(283,`br`),wg()()(),jc(284,`td`,18)(285,`code`,25),iO(286,`string`),wg()(),jc(287,`td`,20),iO(288,`-`),wg(),jc(289,`td`,21)(290,`em`)(291,`strong`),iO(292,`(opcional)`),wg()(),jc(293,`p`),iO(294,`Subtitulo do Header da página.`),wg(),jc(295,`p`),iO(296,`Suporta formatação básica com as tags `),jc(297,`code`),iO(298,`<b>`),wg(),iO(299,` (negrito), `),jc(300,`code`),iO(301,`<strong>`),wg(),iO(302,` (negrito), `),jc(303,`code`),iO(304,`<i>`),wg(),iO(305,` (itálico), `),jc(306,`code`),iO(307,`<em>`),wg(),iO(308,` (it\xE1lico) e
`),jc(309,`code`),iO(310,`<u>`),wg(),iO(311,` (sublinhado).`),wg(),jc(312,`p`),iO(313,`Exemplo:`),wg(),jc(314,`pre`)(315,`code`,29),iO(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),wg()(),jc(317,`blockquote`)(318,`p`),iO(319,`Requer que `),jc(320,`code`),iO(321,`p-title`),wg(),iO(322,` esteja definido.`),wg()()()(),jc(323,`tr`,14)(324,`td`,15)(325,`div`,22)(326,`span`,23),iO(327,` p-title`),nu(328,`br`),wg()()(),jc(329,`td`,18)(330,`code`,25),iO(331,`string`),wg()(),jc(332,`td`,20),iO(333,`-`),wg(),jc(334,`td`,21)(335,`p`),iO(336,`Título da página.`),wg()()()(),jc(337,`h3`),iO(338,`Interfaces`),wg(),jc(339,`h4`,30)(340,`code`,5),iO(341,`PoBreadcrumbItem`),wg()(),jc(342,`div`,2)(343,`p`),iO(344,`Interface que define cada item do componente `),jc(345,`strong`),iO(346,`po-breadcrumb`),wg(),iO(347,`.`),wg()(),jc(348,`h4`,10),iO(349,`Propriedades`),wg(),jc(350,`table`,11)(351,`tr`,12)(352,`th`,13),iO(353,`Nome`),wg(),jc(354,`th`,13),iO(355,`Tipo`),wg(),jc(356,`th`,13),iO(357,`Descrição`),wg()(),jc(358,`tr`,14)(359,`td`,15)(360,`div`,22)(361,`span`,23),iO(362,` action`),nu(363,`br`),wg()()(),jc(364,`td`,18)(365,`code`,31),iO(366,`Function`),wg()(),jc(367,`td`,21)(368,`em`)(369,`strong`),iO(370,`(opcional)`),wg()(),jc(371,`p`),iO(372,`Ação executada ao clicar no item.`),wg(),jc(373,`blockquote`)(374,`p`),iO(375,`A função atribuída a esta propriedade receberá o `),jc(376,`em`),iO(377,`label`),wg(),iO(378,` do item como parâmetro para execução.`),wg()()()(),jc(379,`tr`,14)(380,`td`,15)(381,`div`,22)(382,`span`,23),iO(383,` label`),nu(384,`br`),wg()()(),jc(385,`td`,18)(386,`code`,25),iO(387,`string`),wg()(),jc(388,`td`,21)(389,`p`),iO(390,`Rótulo do item.`),wg()()(),jc(391,`tr`,14)(392,`td`,15)(393,`div`,22)(394,`span`,23),iO(395,` link`),nu(396,`br`),wg()()(),jc(397,`td`,18)(398,`code`,25),iO(399,`string`),wg()(),jc(400,`td`,21)(401,`em`)(402,`strong`),iO(403,`(opcional)`),wg()(),jc(404,`p`),iO(405,`Url do item.`),wg(),jc(406,`blockquote`)(407,`p`),iO(408,`Caso o item também contenha uma `),jc(409,`em`),iO(410,`action`),wg(),iO(411,` definida, a preferência de execução será do `),jc(412,`em`),iO(413,`link`),wg(),iO(414,`.`),wg()(),jc(415,`blockquote`)(416,`p`),iO(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),jc(418,`strong`)(419,`a`,32),iO(420,`Veja um exemplo de como criar rotas aqui`),wg()(),iO(421,`.`),wg()(),jc(422,`blockquote`)(423,`p`),iO(424,`Esta propriedade é necessária para que a propriedade `),jc(425,`code`),iO(426,`p-favorite-service`),wg(),iO(427,` consiga favoritar ou desfavoritar.`),wg()()()()(),jc(428,`h4`,30)(429,`code`,5),iO(430,`PoBreadcrumb`),wg()(),jc(431,`div`,2)(432,`p`),iO(433,`Interface que define o `),jc(434,`code`),iO(435,`po-breadcrumb`),wg(),iO(436,`.`),wg()(),jc(437,`h4`,10),iO(438,`Propriedades`),wg(),jc(439,`table`,11)(440,`tr`,12)(441,`th`,13),iO(442,`Nome`),wg(),jc(443,`th`,13),iO(444,`Tipo`),wg(),jc(445,`th`,13),iO(446,`Descrição`),wg()(),jc(447,`tr`,14)(448,`td`,15)(449,`div`,22)(450,`span`,23),iO(451,` favorite`),nu(452,`br`),wg()()(),jc(453,`td`,18)(454,`code`,25),iO(455,`string`),wg()(),jc(456,`td`,21)(457,`em`)(458,`strong`),iO(459,`(opcional)`),wg()(),jc(460,`p`),iO(461,`Permite definir uma URL para favoritar ou desfavoritar.`),wg(),jc(462,`blockquote`)(463,`p`),iO(464,`Para maiores informações verificar a propriedade `),jc(465,`code`),iO(466,`p-favorite-service`),wg(),iO(467,` do componente `),jc(468,`code`),iO(469,`po-breadcrumb`),wg(),iO(470,`.`),wg()()()(),jc(471,`tr`,14)(472,`td`,15)(473,`div`,22)(474,`span`,23),iO(475,` items`),nu(476,`br`),wg()()(),jc(477,`td`,18)(478,`code`,33),iO(479,`Array<PoBreadcrumbItem>`),wg()(),jc(480,`td`,21)(481,`p`),iO(482,`Lista de itens do `),jc(483,`em`),iO(484,`breadcrumb`),wg(),iO(485,`.`),wg(),jc(486,`p`)(487,`strong`),iO(488,`Exemplo:`),wg()(),jc(489,`pre`)(490,`code`),iO(491,`{ label: 'Po Portal', link: 'portal' }
`),wg()()()(),jc(492,`tr`,14)(493,`td`,15)(494,`div`,22)(495,`span`,23),iO(496,` params`),nu(497,`br`),wg()()(),jc(498,`td`,18)(499,`code`,34),iO(500,`object`),wg()(),jc(501,`td`,21)(502,`em`)(503,`strong`),iO(504,`(opcional)`),wg()(),jc(505,`p`),iO(506,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),wg()()()(),jc(507,`h4`,30)(508,`code`,5),iO(509,`PoPageDetailLiterals`),wg()(),jc(510,`div`,2)(511,`p`),iO(512,`Interface para definição das literais usadas no `),jc(513,`code`),iO(514,`po-page-detail`),wg(),iO(515,`.`),wg()(),jc(516,`h4`,10),iO(517,`Propriedades`),wg(),jc(518,`table`,11)(519,`tr`,12)(520,`th`,13),iO(521,`Nome`),wg(),jc(522,`th`,13),iO(523,`Tipo`),wg(),jc(524,`th`,13),iO(525,`Descrição`),wg()(),jc(526,`tr`,14)(527,`td`,15)(528,`div`,22)(529,`span`,23),iO(530,` back`),nu(531,`br`),wg()()(),jc(532,`td`,18)(533,`code`,25),iO(534,`string`),wg()(),jc(535,`td`,21)(536,`em`)(537,`strong`),iO(538,`(opcional)`),wg()(),jc(539,`p`),iO(540,`Label da ação `),jc(541,`code`),iO(542,`back`),wg(),iO(543,`.`),wg()()(),jc(544,`tr`,14)(545,`td`,15)(546,`div`,22)(547,`span`,23),iO(548,` edit`),nu(549,`br`),wg()()(),jc(550,`td`,18)(551,`code`,25),iO(552,`string`),wg()(),jc(553,`td`,21)(554,`em`)(555,`strong`),iO(556,`(opcional)`),wg()(),jc(557,`p`),iO(558,`Label da ação `),jc(559,`code`),iO(560,`edit`),wg(),iO(561,`.`),wg()()(),jc(562,`tr`,14)(563,`td`,15)(564,`div`,22)(565,`span`,23),iO(566,` remove`),nu(567,`br`),wg()()(),jc(568,`td`,18)(569,`code`,25),iO(570,`string`),wg()(),jc(571,`td`,21)(572,`em`)(573,`strong`),iO(574,`(opcional)`),wg()(),jc(575,`p`),iO(576,`Label da ação `),jc(577,`code`),iO(578,`remove`),wg(),iO(579,`.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Detail`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(3,`sample-po-page-detail-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`web`)}),nu(5,`sample-po-page-detail-basic-view`)(6,`sample-po-page-detail-labs-view`)(7,`sample-po-page-detail-user-view`),wg()()()),l&2&&(jE(`p-actions`,n.actions),rg(2),jE(`p-active`,n.activeTab===`doc`),rg(2),jE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[Kze,bae,Sae,ie,ae,le,re],encapsulation:2,changeDetection:1})}return a})()}];var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue({imports:[C1.forChild(fe),C1]})}return a})();var Qe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe$1({type:a});static ɵinj=ue({imports:[Ta,pe]})}return a})();export{Qe as DocPoPageDetailModule};