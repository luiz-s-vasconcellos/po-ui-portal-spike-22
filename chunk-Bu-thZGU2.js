import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Rn as z8e,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Detail`]],template:function(l,n){l&1&&ql(0,`po-page-detail`,0)},dependencies:[z8e],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a});var ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Detail Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-detail-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,se,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ee],encapsulation:2,changeDetection:1})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action=`back`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}edit(){this.action=`edit`}remove(){this.action=`remove`}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.title=`PO Page Detail`,this.subtitle=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-labs`]],standalone:!1,decls:33,vars:18,consts:[[`f`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-edit`,`p-remove`,`p-breadcrumb`,`p-components-size`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"back": "Retornar", "edit": "Edição", "remove": "Excluir registro"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let s=Vx();Ml(0,`po-page-detail`,4),ht(`p-back`,function(){return n.back()})(`p-edit`,function(){return n.edit()})(`p-remove`,function(){return n.remove()}),Ml(1,`div`,5),ql(2,`po-info`,6),lg(),ql(3,`po-divider`),Ml(4,`form`,null,0)(6,`po-input`,7),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.title,m)||(n.title=m),Jy(m)}),lg(),f0(),Ml(7,`po-input`,8),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.subtitle,m)||(n.subtitle=m),Jy(m)}),lg(),f0(),Ml(8,`po-radio-group`,9),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.componentsSize,m)||(n.componentsSize=m),Jy(m)}),lg(),f0(),ql(9,`po-divider`),Ml(10,`form`,null,1)(12,`div`,5)(13,`po-input`,10),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),Jy(m)}),lg(),f0(),lg()(),Ml(14,`form`,null,2)(16,`div`,5)(17,`po-input`,11),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),Jy(m)}),lg(),f0(),Ml(18,`po-input`,12),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),Jy(m)}),lg(),f0(),lg(),Ml(19,`div`,5)(20,`po-button`,13),ht(`p-click`,function(){return n.addBreadcrumbItem()}),lg()()(),ql(21,`po-divider`),Ml(22,`form`,null,3)(24,`div`,5)(25,`po-input`,14),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),Jy(m)}),lg(),f0(),Ml(26,`po-input`,15),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),Jy(m)}),lg(),f0(),lg(),Ml(27,`div`,5)(28,`po-button`,16),ht(`p-click`,function(){return n.addBreadcrumbParam()}),lg()()(),Ml(29,`div`,5)(30,`po-input`,17),Mw(`ngModelChange`,function(m){return Qy(s),yN(n.literals,m)||(n.literals=m),Jy(m)}),ht(`p-change`,function(){return n.changeLiterals()}),lg(),f0(),lg(),Ml(31,`div`,5)(32,`po-button`,18),ht(`p-click`,function(){return n.restore()}),lg()()()()}if(l&2){let s=Yx(15),c=Yx(23);cw(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),Up(2),cw(`p-value`,n.action),Up(4),Tw(`ngModel`,n.title),p0(),Up(),Tw(`ngModel`,n.subtitle),p0(),Up(),Tw(`ngModel`,n.componentsSize),cw(`p-options`,n.componentsSizeOptions),p0(),Up(5),Tw(`ngModel`,n.breadcrumb.favorite),p0(),Up(4),Tw(`ngModel`,n.breadcrumbItem.label),p0(),Up(),Tw(`ngModel`,n.breadcrumbItem.link),p0(),Up(2),cw(`p-disabled`,s.invalid),Up(5),Tw(`ngModel`,n.breadcrumbParams.property),p0(),Up(),Tw(`ngModel`,n.breadcrumbParams.value),p0(),Up(2),cw(`p-disabled`,c.invalid),Up(2),Tw(`ngModel`,n.literals),p0()}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,q0e,kbe,z8e],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Detail Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-detail
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-detail-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ne],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{router=f(Cn);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`John`;placeOfBirth=`Colorado`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};edit(){this.router.navigate([`/documentation/po-page-edit`],{queryParams:{view:`web`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-user`]],standalone:!1,decls:19,vars:12,consts:[[`p-title`,`User Detail`,`p-subtitle`,`Status: <b>Active</b> | Role: <i>Administrator</i>`,3,`p-edit`,`p-breadcrumb`],[1,`po-row`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,3,`p-value`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Birth Date`,1,`po-md-4`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,3,`p-value`],[`p-label`,`Place Of Birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Graduation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Fathers Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mothers Name`,1,`po-md-4`,3,`p-value`]],template:function(l,n){l&1&&(Ml(0,`po-page-detail`,0),ht(`p-edit`,function(){return n.edit()}),Ml(1,`div`,1),ql(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`div`,1),ql(7,`po-info`,5)(8,`po-info`,6)(9,`po-info`,7),lg(),ql(10,`po-divider`),Ml(11,`div`,1),ql(12,`po-info`,8)(13,`po-info`,9)(14,`po-info`,10),lg(),ql(15,`po-divider`),Ml(16,`div`,1),ql(17,`po-info`,11)(18,`po-info`,12),lg()()),l&2&&(cw(`p-breadcrumb`,n.breadcrumb),Up(2),cw(`p-value`,n.userId),Up(),cw(`p-value`,n.email),Up(),cw(`p-value`,n.name),Up(3),cw(`p-value`,n.nickname),Up(),cw(`p-value`,n.birthDate),Up(),cw(`p-value`,n.genre),Up(3),cw(`p-value`,n.nationality),Up(),cw(`p-value`,n.placeOfBirth),Up(),cw(`p-value`,n.graduation),Up(3),cw(`p-value`,n.fathersName),Up(),cw(`p-value`,n.mothersName))},dependencies:[nb,kbe,z8e],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Page Detail - User`),lg(),Ml(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-detail
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-page-detail-user`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+n.sampleCodeButtonIcon),Up(),gg(` `,n.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,n.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,oe],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-doc`]],standalone:!1,decls:580,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageDetailLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(l,n){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoPageModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ml(7,`code`),mN(8,`po-page-default`),lg(),mN(9,`, `),Ml(10,`code`),mN(11,`po-page-detail`),lg(),mN(12,`,
`),Ml(13,`code`),mN(14,`po-page-edit`),lg(),mN(15,`, `),Ml(16,`code`),mN(17,`po-page-list`),lg(),mN(18,` e `),Ml(19,`code`),mN(20,`po-page-slide`),lg(),mN(21,`.`),lg()(),Ml(22,`h3`,3),mN(23,`Componente`),lg(),Ml(24,`h4`,4)(25,`code`,5),mN(26,`PoPageDetailComponent`),lg()(),Ml(27,`div`,2)(28,`p`),mN(29,`O componente `),Ml(30,`strong`),mN(31,`po-page-detail`),lg(),mN(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),lg(),Ml(33,`h4`),mN(34,`Tokens customizáveis`),lg(),Ml(35,`blockquote`)(36,`p`),mN(37,`Para maiores informações, acesse o guia `),Ml(38,`a`,6),mN(39,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(40,`.`),lg()(),Ml(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),mN(45,`Propriedade`),lg(),Ml(46,`th`),mN(47,`Descrição`),lg(),Ml(48,`th`),mN(49,`Valor Padrão`),lg()()(),Ml(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),mN(54,`Header`),lg()(),ql(55,`td`)(56,`td`),lg(),Ml(57,`tr`)(58,`td`)(59,`code`),mN(60,`--padding`),lg()(),Ml(61,`td`),mN(62,`Espaçamento do header`),lg(),Ml(63,`td`)(64,`code`),mN(65,`var(--spacing-xs) var(--spacing-md)`),lg()()(),Ml(66,`tr`)(67,`td`)(68,`code`),mN(69,`--gap`),lg()(),Ml(70,`td`),mN(71,`Espaçamento entre os breadcrumbs e o título`),lg(),Ml(72,`td`)(73,`code`),mN(74,`var(--spacing-md)`),lg()()(),Ml(75,`tr`)(76,`td`)(77,`code`),mN(78,`--gap-actions`),lg()(),Ml(79,`td`),mN(80,`Espaçamento entre as ações`),lg(),Ml(81,`td`)(82,`code`),mN(83,`var(--spacing-xs)`),lg()()(),Ml(84,`tr`)(85,`td`)(86,`code`),mN(87,`--font-family`),lg()(),Ml(88,`td`),mN(89,`Família tipográfica do título`),lg(),Ml(90,`td`)(91,`code`),mN(92,`var(--font-family-theme)`),lg()()(),Ml(93,`tr`)(94,`td`)(95,`strong`),mN(96,`Content`),lg()(),ql(97,`td`)(98,`td`),lg(),Ml(99,`tr`)(100,`td`)(101,`code`),mN(102,`--padding-content`),lg()(),Ml(103,`td`),mN(104,`Espaçamento do conteúdo`),lg(),Ml(105,`td`)(106,`code`),mN(107,`var(--spacing-xs) var(--spacing-sm)`),lg()()()()()(),Ml(108,`div`,7)(109,`h4`,8),mN(110,`Seletor`),lg(),Ml(111,`pre`,9),mN(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),lg()(),Ml(113,`h4`,10),mN(114,`Propriedades`),lg(),Ml(115,`table`,11)(116,`tr`,12)(117,`th`,13),mN(118,`Nome`),lg(),Ml(119,`th`,13),mN(120,`Tipo`),lg(),Ml(121,`th`,13),mN(122,`Padrão`),lg(),Ml(123,`th`,13),mN(124,`Descrição`),lg()(),Ml(125,`tr`,14)(126,`td`,15)(127,`div`,16)(128,`span`,17),mN(129,` (p-back)`),ql(130,`br`),lg()()(),Ml(131,`td`,18)(132,`code`,19),mN(133,`EventEmitter`),lg()(),Ml(134,`td`,20),mN(135,`-`),lg(),Ml(136,`td`,21)(137,`p`),mN(138,`Evento que será disparado ao clicar no botão de "Voltar".`),lg(),Ml(139,`pre`)(140,`code`),mN(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),lg()(),Ml(142,`blockquote`)(143,`p`),mN(144,`Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.`),lg()()()(),Ml(145,`tr`,14)(146,`td`,15)(147,`div`,22)(148,`span`,23),mN(149,` p-breadcrumb`),ql(150,`br`),lg()()(),Ml(151,`td`,18)(152,`code`,24),mN(153,`PoBreadcrumb`),lg()(),Ml(154,`td`,20),mN(155,`-`),lg(),Ml(156,`td`,21)(157,`p`),mN(158,`Objeto com propriedades do breadcrumb.`),lg()()(),Ml(159,`tr`,14)(160,`td`,15)(161,`div`,22)(162,`span`,23),mN(163,` p-components-size`),ql(164,`br`),lg()()(),Ml(165,`td`,18)(166,`code`,25),mN(167,`string`),lg()(),Ml(168,`td`,20)(169,`p`)(170,`code`),mN(171,`medium`),lg()()(),Ml(172,`td`,21)(173,`em`)(174,`strong`),mN(175,`(opcional)`),lg()(),Ml(176,`p`),mN(177,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(178,`ul`)(179,`li`)(180,`code`),mN(181,`small`),lg(),mN(182,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(183,`li`)(184,`code`),mN(185,`medium`),lg(),mN(186,`: aplica a medida medium de cada componente.`),lg()(),Ml(187,`blockquote`)(188,`p`),mN(189,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(190,`code`),mN(191,`medium`),lg(),mN(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(193,`a`,26),mN(194,`po-theme`),lg(),mN(195,`.`),lg()()()(),Ml(196,`tr`,14)(197,`td`,15)(198,`div`,16)(199,`span`,17),mN(200,` (p-edit)`),ql(201,`br`),lg()()(),Ml(202,`td`,18)(203,`code`,19),mN(204,`EventEmitter`),lg()(),Ml(205,`td`,20),mN(206,`-`),lg(),Ml(207,`td`,21)(208,`p`),mN(209,`Evento que será disparado ao clicar no botão de "Editar".`),lg(),Ml(210,`pre`)(211,`code`),mN(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),lg()(),Ml(213,`blockquote`)(214,`p`),mN(215,`Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.`),lg()()()(),Ml(216,`tr`,14)(217,`td`,15)(218,`div`,22)(219,`span`,23),mN(220,` p-literals`),ql(221,`br`),lg()()(),Ml(222,`td`,18)(223,`code`,27),mN(224,`PoPageDetailLiterals`),lg()(),Ml(225,`td`,20),mN(226,`-`),lg(),Ml(227,`td`,21)(228,`em`)(229,`strong`),mN(230,`(opcional)`),lg()(),Ml(231,`p`),mN(232,`Objeto com as literais usadas no `),Ml(233,`code`),mN(234,`po-page-detail`),lg(),mN(235,`.`),lg(),Ml(236,`p`),mN(237,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),lg(),Ml(238,`pre`)(239,`code`),mN(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),lg()(),Ml(241,`p`),mN(242,`Ou passando apenas as literais que deseja customizar:`),lg(),Ml(243,`pre`)(244,`code`),mN(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),lg()(),Ml(246,`p`),mN(247,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),lg(),Ml(248,`pre`)(249,`code`),mN(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),lg()(),Ml(251,`blockquote`)(252,`p`),mN(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ml(254,`a`,28)(255,`code`),mN(256,`PoI18nService`),lg()(),mN(257,` ou do browser.`),lg()()()(),Ml(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),mN(262,` (p-remove)`),ql(263,`br`),lg()()(),Ml(264,`td`,18)(265,`code`,19),mN(266,`EventEmitter`),lg()(),Ml(267,`td`,20),mN(268,`-`),lg(),Ml(269,`td`,21)(270,`p`),mN(271,`Evento que será disparado ao clicar no botão de "Remover".`),lg(),Ml(272,`pre`)(273,`code`),mN(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),lg()(),Ml(275,`blockquote`)(276,`p`),mN(277,`Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.`),lg()()()(),Ml(278,`tr`,14)(279,`td`,15)(280,`div`,22)(281,`span`,23),mN(282,` p-subtitle`),ql(283,`br`),lg()()(),Ml(284,`td`,18)(285,`code`,25),mN(286,`string`),lg()(),Ml(287,`td`,20),mN(288,`-`),lg(),Ml(289,`td`,21)(290,`em`)(291,`strong`),mN(292,`(opcional)`),lg()(),Ml(293,`p`),mN(294,`Subtitulo do Header da página.`),lg(),Ml(295,`p`),mN(296,`Suporta formatação básica com as tags `),Ml(297,`code`),mN(298,`<b>`),lg(),mN(299,` (negrito), `),Ml(300,`code`),mN(301,`<strong>`),lg(),mN(302,` (negrito), `),Ml(303,`code`),mN(304,`<i>`),lg(),mN(305,` (itálico), `),Ml(306,`code`),mN(307,`<em>`),lg(),mN(308,` (it\xE1lico) e
`),Ml(309,`code`),mN(310,`<u>`),lg(),mN(311,` (sublinhado).`),lg(),Ml(312,`p`),mN(313,`Exemplo:`),lg(),Ml(314,`pre`)(315,`code`,29),mN(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),lg()(),Ml(317,`blockquote`)(318,`p`),mN(319,`Requer que `),Ml(320,`code`),mN(321,`p-title`),lg(),mN(322,` esteja definido.`),lg()()()(),Ml(323,`tr`,14)(324,`td`,15)(325,`div`,22)(326,`span`,23),mN(327,` p-title`),ql(328,`br`),lg()()(),Ml(329,`td`,18)(330,`code`,25),mN(331,`string`),lg()(),Ml(332,`td`,20),mN(333,`-`),lg(),Ml(334,`td`,21)(335,`p`),mN(336,`Título da página.`),lg()()()(),Ml(337,`h3`),mN(338,`Interfaces`),lg(),Ml(339,`h4`,30)(340,`code`,5),mN(341,`PoBreadcrumbItem`),lg()(),Ml(342,`div`,2)(343,`p`),mN(344,`Interface que define cada item do componente `),Ml(345,`strong`),mN(346,`po-breadcrumb`),lg(),mN(347,`.`),lg()(),Ml(348,`h4`,10),mN(349,`Propriedades`),lg(),Ml(350,`table`,11)(351,`tr`,12)(352,`th`,13),mN(353,`Nome`),lg(),Ml(354,`th`,13),mN(355,`Tipo`),lg(),Ml(356,`th`,13),mN(357,`Descrição`),lg()(),Ml(358,`tr`,14)(359,`td`,15)(360,`div`,22)(361,`span`,23),mN(362,` action`),ql(363,`br`),lg()()(),Ml(364,`td`,18)(365,`code`,31),mN(366,`Function`),lg()(),Ml(367,`td`,21)(368,`em`)(369,`strong`),mN(370,`(opcional)`),lg()(),Ml(371,`p`),mN(372,`Ação executada ao clicar no item.`),lg(),Ml(373,`blockquote`)(374,`p`),mN(375,`A função atribuída a esta propriedade receberá o `),Ml(376,`em`),mN(377,`label`),lg(),mN(378,` do item como parâmetro para execução.`),lg()()()(),Ml(379,`tr`,14)(380,`td`,15)(381,`div`,22)(382,`span`,23),mN(383,` label`),ql(384,`br`),lg()()(),Ml(385,`td`,18)(386,`code`,25),mN(387,`string`),lg()(),Ml(388,`td`,21)(389,`p`),mN(390,`Rótulo do item.`),lg()()(),Ml(391,`tr`,14)(392,`td`,15)(393,`div`,22)(394,`span`,23),mN(395,` link`),ql(396,`br`),lg()()(),Ml(397,`td`,18)(398,`code`,25),mN(399,`string`),lg()(),Ml(400,`td`,21)(401,`em`)(402,`strong`),mN(403,`(opcional)`),lg()(),Ml(404,`p`),mN(405,`Url do item.`),lg(),Ml(406,`blockquote`)(407,`p`),mN(408,`Caso o item também contenha uma `),Ml(409,`em`),mN(410,`action`),lg(),mN(411,` definida, a preferência de execução será do `),Ml(412,`em`),mN(413,`link`),lg(),mN(414,`.`),lg()(),Ml(415,`blockquote`)(416,`p`),mN(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ml(418,`strong`)(419,`a`,32),mN(420,`Veja um exemplo de como criar rotas aqui`),lg()(),mN(421,`.`),lg()(),Ml(422,`blockquote`)(423,`p`),mN(424,`Esta propriedade é necessária para que a propriedade `),Ml(425,`code`),mN(426,`p-favorite-service`),lg(),mN(427,` consiga favoritar ou desfavoritar.`),lg()()()()(),Ml(428,`h4`,30)(429,`code`,5),mN(430,`PoBreadcrumb`),lg()(),Ml(431,`div`,2)(432,`p`),mN(433,`Interface que define o `),Ml(434,`code`),mN(435,`po-breadcrumb`),lg(),mN(436,`.`),lg()(),Ml(437,`h4`,10),mN(438,`Propriedades`),lg(),Ml(439,`table`,11)(440,`tr`,12)(441,`th`,13),mN(442,`Nome`),lg(),Ml(443,`th`,13),mN(444,`Tipo`),lg(),Ml(445,`th`,13),mN(446,`Descrição`),lg()(),Ml(447,`tr`,14)(448,`td`,15)(449,`div`,22)(450,`span`,23),mN(451,` favorite`),ql(452,`br`),lg()()(),Ml(453,`td`,18)(454,`code`,25),mN(455,`string`),lg()(),Ml(456,`td`,21)(457,`em`)(458,`strong`),mN(459,`(opcional)`),lg()(),Ml(460,`p`),mN(461,`Permite definir uma URL para favoritar ou desfavoritar.`),lg(),Ml(462,`blockquote`)(463,`p`),mN(464,`Para maiores informações verificar a propriedade `),Ml(465,`code`),mN(466,`p-favorite-service`),lg(),mN(467,` do componente `),Ml(468,`code`),mN(469,`po-breadcrumb`),lg(),mN(470,`.`),lg()()()(),Ml(471,`tr`,14)(472,`td`,15)(473,`div`,22)(474,`span`,23),mN(475,` items`),ql(476,`br`),lg()()(),Ml(477,`td`,18)(478,`code`,33),mN(479,`Array<PoBreadcrumbItem>`),lg()(),Ml(480,`td`,21)(481,`p`),mN(482,`Lista de itens do `),Ml(483,`em`),mN(484,`breadcrumb`),lg(),mN(485,`.`),lg(),Ml(486,`p`)(487,`strong`),mN(488,`Exemplo:`),lg()(),Ml(489,`pre`)(490,`code`),mN(491,`{ label: 'Po Portal', link: 'portal' }
`),lg()()()(),Ml(492,`tr`,14)(493,`td`,15)(494,`div`,22)(495,`span`,23),mN(496,` params`),ql(497,`br`),lg()()(),Ml(498,`td`,18)(499,`code`,34),mN(500,`object`),lg()(),Ml(501,`td`,21)(502,`em`)(503,`strong`),mN(504,`(opcional)`),lg()(),Ml(505,`p`),mN(506,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),lg()()()(),Ml(507,`h4`,30)(508,`code`,5),mN(509,`PoPageDetailLiterals`),lg()(),Ml(510,`div`,2)(511,`p`),mN(512,`Interface para definição das literais usadas no `),Ml(513,`code`),mN(514,`po-page-detail`),lg(),mN(515,`.`),lg()(),Ml(516,`h4`,10),mN(517,`Propriedades`),lg(),Ml(518,`table`,11)(519,`tr`,12)(520,`th`,13),mN(521,`Nome`),lg(),Ml(522,`th`,13),mN(523,`Tipo`),lg(),Ml(524,`th`,13),mN(525,`Descrição`),lg()(),Ml(526,`tr`,14)(527,`td`,15)(528,`div`,22)(529,`span`,23),mN(530,` back`),ql(531,`br`),lg()()(),Ml(532,`td`,18)(533,`code`,25),mN(534,`string`),lg()(),Ml(535,`td`,21)(536,`em`)(537,`strong`),mN(538,`(opcional)`),lg()(),Ml(539,`p`),mN(540,`Label da ação `),Ml(541,`code`),mN(542,`back`),lg(),mN(543,`.`),lg()()(),Ml(544,`tr`,14)(545,`td`,15)(546,`div`,22)(547,`span`,23),mN(548,` edit`),ql(549,`br`),lg()()(),Ml(550,`td`,18)(551,`code`,25),mN(552,`string`),lg()(),Ml(553,`td`,21)(554,`em`)(555,`strong`),mN(556,`(opcional)`),lg()(),Ml(557,`p`),mN(558,`Label da ação `),Ml(559,`code`),mN(560,`edit`),lg(),mN(561,`.`),lg()()(),Ml(562,`tr`,14)(563,`td`,15)(564,`div`,22)(565,`span`,23),mN(566,` remove`),ql(567,`br`),lg()()(),Ml(568,`td`,18)(569,`code`,25),mN(570,`string`),lg()(),Ml(571,`td`,21)(572,`em`)(573,`strong`),mN(574,`(opcional)`),lg()(),Ml(575,`p`),mN(576,`Label da ação `),Ml(577,`code`),mN(578,`remove`),lg(),mN(579,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Detail`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),ql(3,`sample-po-page-detail-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),ql(5,`sample-po-page-detail-basic-view`)(6,`sample-po-page-detail-labs-view`)(7,`sample-po-page-detail-user-view`),lg()()()),l&2&&(cw(`p-actions`,n.actions),Up(2),cw(`p-active`,n.activeTab===`doc`),Up(2),cw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ie,ae,le,re],encapsulation:2,changeDetection:1})}return a})()}];var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(fe),NL]})}return a})();var Qe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,pe]})}return a})();export{Qe as DocPoPageDetailModule};