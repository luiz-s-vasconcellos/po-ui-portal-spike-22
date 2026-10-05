import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,H as Gze,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,i as _a,in as kte,k as D4,ki as he,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-detail-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Detail`]],template:function(l,n){l&1&&Kc(0,`po-page-detail`,0)},dependencies:[Gze],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a});var ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-detail-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Detail Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-detail-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,se,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ee],encapsulation:2,changeDetection:1})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action=`back`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}edit(){this.action=`edit`}remove(){this.action=`remove`}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.title=`PO Page Detail`,this.subtitle=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-detail-labs`]],standalone:!1,decls:33,vars:18,consts:[[`f`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-edit`,`p-remove`,`p-breadcrumb`,`p-components-size`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"back": "Retornar", "edit": "Edição", "remove": "Excluir registro"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let s=Bx();Ac(0,`po-page-detail`,4),pt(`p-back`,function(){return n.back()})(`p-edit`,function(){return n.edit()})(`p-remove`,function(){return n.remove()}),Ac(1,`div`,5),Kc(2,`po-info`,6),ug(),Kc(3,`po-divider`),Ac(4,`form`,null,0)(6,`po-input`,7),RE(`ngModelChange`,function(m){return Jv(s),DN(n.title,m)||(n.title=m),e_(m)}),ug(),p0(),Ac(7,`po-input`,8),RE(`ngModelChange`,function(m){return Jv(s),DN(n.subtitle,m)||(n.subtitle=m),e_(m)}),ug(),p0(),Ac(8,`po-radio-group`,9),RE(`ngModelChange`,function(m){return Jv(s),DN(n.componentsSize,m)||(n.componentsSize=m),e_(m)}),ug(),p0(),Kc(9,`po-divider`),Ac(10,`form`,null,1)(12,`div`,5)(13,`po-input`,10),RE(`ngModelChange`,function(m){return Jv(s),DN(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),e_(m)}),ug(),p0(),ug()(),Ac(14,`form`,null,2)(16,`div`,5)(17,`po-input`,11),RE(`ngModelChange`,function(m){return Jv(s),DN(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),e_(m)}),ug(),p0(),Ac(18,`po-input`,12),RE(`ngModelChange`,function(m){return Jv(s),DN(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),e_(m)}),ug(),p0(),ug(),Ac(19,`div`,5)(20,`po-button`,13),pt(`p-click`,function(){return n.addBreadcrumbItem()}),ug()()(),Kc(21,`po-divider`),Ac(22,`form`,null,3)(24,`div`,5)(25,`po-input`,14),RE(`ngModelChange`,function(m){return Jv(s),DN(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),e_(m)}),ug(),p0(),Ac(26,`po-input`,15),RE(`ngModelChange`,function(m){return Jv(s),DN(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),e_(m)}),ug(),p0(),ug(),Ac(27,`div`,5)(28,`po-button`,16),pt(`p-click`,function(){return n.addBreadcrumbParam()}),ug()()(),Ac(29,`div`,5)(30,`po-input`,17),RE(`ngModelChange`,function(m){return Jv(s),DN(n.literals,m)||(n.literals=m),e_(m)}),pt(`p-change`,function(){return n.changeLiterals()}),ug(),p0(),ug(),Ac(31,`div`,5)(32,`po-button`,18),pt(`p-click`,function(){return n.restore()}),ug()()()()}if(l&2){let s=Zx(15),c=Zx(23);cE(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),Hp(2),cE(`p-value`,n.action),Hp(4),TE(`ngModel`,n.title),m0(),Hp(),TE(`ngModel`,n.subtitle),m0(),Hp(),TE(`ngModel`,n.componentsSize),cE(`p-options`,n.componentsSizeOptions),m0(),Hp(5),TE(`ngModel`,n.breadcrumb.favorite),m0(),Hp(4),TE(`ngModel`,n.breadcrumbItem.label),m0(),Hp(),TE(`ngModel`,n.breadcrumbItem.link),m0(),Hp(2),cE(`p-disabled`,s.invalid),Hp(5),TE(`ngModel`,n.breadcrumbParams.property),m0(),Hp(),TE(`ngModel`,n.breadcrumbParams.value),m0(),Hp(2),cE(`p-disabled`,c.invalid),Hp(2),TE(`ngModel`,n.literals),m0()}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,D4,kte,hoe,Gze],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-detail-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Detail Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-detail
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-detail-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ne],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{router=f(wn);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`John`;placeOfBirth=`Colorado`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};edit(){this.router.navigate([`/documentation/po-page-edit`],{queryParams:{view:`web`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-detail-user`]],standalone:!1,decls:19,vars:12,consts:[[`p-title`,`User Detail`,`p-subtitle`,`Status: <b>Active</b> | Role: <i>Administrator</i>`,3,`p-edit`,`p-breadcrumb`],[1,`po-row`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,3,`p-value`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Birth Date`,1,`po-md-4`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,3,`p-value`],[`p-label`,`Place Of Birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Graduation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Fathers Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mothers Name`,1,`po-md-4`,3,`p-value`]],template:function(l,n){l&1&&(Ac(0,`po-page-detail`,0),pt(`p-edit`,function(){return n.edit()}),Ac(1,`div`,1),Kc(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`div`,1),Kc(7,`po-info`,5)(8,`po-info`,6)(9,`po-info`,7),ug(),Kc(10,`po-divider`),Ac(11,`div`,1),Kc(12,`po-info`,8)(13,`po-info`,9)(14,`po-info`,10),ug(),Kc(15,`po-divider`),Ac(16,`div`,1),Kc(17,`po-info`,11)(18,`po-info`,12),ug()()),l&2&&(cE(`p-breadcrumb`,n.breadcrumb),Hp(2),cE(`p-value`,n.userId),Hp(),cE(`p-value`,n.email),Hp(),cE(`p-value`,n.name),Hp(3),cE(`p-value`,n.nickname),Hp(),cE(`p-value`,n.birthDate),Hp(),cE(`p-value`,n.genre),Hp(3),cE(`p-value`,n.nationality),Hp(),cE(`p-value`,n.placeOfBirth),Hp(),cE(`p-value`,n.graduation),Hp(3),cE(`p-value`,n.fathersName),Hp(),cE(`p-value`,n.mothersName))},dependencies:[Ef,hoe,Gze],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-detail-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Page Detail - User`),ug(),Ac(4,`a`,2),pt(`click`,function(){return n.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-detail
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-page-detail-user`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+n.sampleCodeButtonIcon),Hp(),mg(` `,n.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,n.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,oe],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-page-detail-doc`]],standalone:!1,decls:580,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageDetailLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(l,n){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo responsável pelos componentes de estrutura de página: `),Ac(7,`code`),vN(8,`po-page-default`),ug(),vN(9,`, `),Ac(10,`code`),vN(11,`po-page-detail`),ug(),vN(12,`,
`),Ac(13,`code`),vN(14,`po-page-edit`),ug(),vN(15,`, `),Ac(16,`code`),vN(17,`po-page-list`),ug(),vN(18,` e `),Ac(19,`code`),vN(20,`po-page-slide`),ug(),vN(21,`.`),ug()(),Ac(22,`h3`,3),vN(23,`Componente`),ug(),Ac(24,`h4`,4)(25,`code`,5),vN(26,`PoPageDetailComponent`),ug()(),Ac(27,`div`,2)(28,`p`),vN(29,`O componente `),Ac(30,`strong`),vN(31,`po-page-detail`),ug(),vN(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),ug(),Ac(33,`h4`),vN(34,`Tokens customizáveis`),ug(),Ac(35,`blockquote`)(36,`p`),vN(37,`Para maiores informações, acesse o guia `),Ac(38,`a`,6),vN(39,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(40,`.`),ug()(),Ac(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),vN(45,`Propriedade`),ug(),Ac(46,`th`),vN(47,`Descrição`),ug(),Ac(48,`th`),vN(49,`Valor Padrão`),ug()()(),Ac(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),vN(54,`Header`),ug()(),Kc(55,`td`)(56,`td`),ug(),Ac(57,`tr`)(58,`td`)(59,`code`),vN(60,`--padding`),ug()(),Ac(61,`td`),vN(62,`Espaçamento do header`),ug(),Ac(63,`td`)(64,`code`),vN(65,`var(--spacing-xs) var(--spacing-md)`),ug()()(),Ac(66,`tr`)(67,`td`)(68,`code`),vN(69,`--gap`),ug()(),Ac(70,`td`),vN(71,`Espaçamento entre os breadcrumbs e o título`),ug(),Ac(72,`td`)(73,`code`),vN(74,`var(--spacing-md)`),ug()()(),Ac(75,`tr`)(76,`td`)(77,`code`),vN(78,`--gap-actions`),ug()(),Ac(79,`td`),vN(80,`Espaçamento entre as ações`),ug(),Ac(81,`td`)(82,`code`),vN(83,`var(--spacing-xs)`),ug()()(),Ac(84,`tr`)(85,`td`)(86,`code`),vN(87,`--font-family`),ug()(),Ac(88,`td`),vN(89,`Família tipográfica do título`),ug(),Ac(90,`td`)(91,`code`),vN(92,`var(--font-family-theme)`),ug()()(),Ac(93,`tr`)(94,`td`)(95,`strong`),vN(96,`Content`),ug()(),Kc(97,`td`)(98,`td`),ug(),Ac(99,`tr`)(100,`td`)(101,`code`),vN(102,`--padding-content`),ug()(),Ac(103,`td`),vN(104,`Espaçamento do conteúdo`),ug(),Ac(105,`td`)(106,`code`),vN(107,`var(--spacing-xs) var(--spacing-sm)`),ug()()()()()(),Ac(108,`div`,7)(109,`h4`,8),vN(110,`Seletor`),ug(),Ac(111,`pre`,9),vN(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),ug()(),Ac(113,`h4`,10),vN(114,`Propriedades`),ug(),Ac(115,`table`,11)(116,`tr`,12)(117,`th`,13),vN(118,`Nome`),ug(),Ac(119,`th`,13),vN(120,`Tipo`),ug(),Ac(121,`th`,13),vN(122,`Padrão`),ug(),Ac(123,`th`,13),vN(124,`Descrição`),ug()(),Ac(125,`tr`,14)(126,`td`,15)(127,`div`,16)(128,`span`,17),vN(129,` (p-back)`),Kc(130,`br`),ug()()(),Ac(131,`td`,18)(132,`code`,19),vN(133,`EventEmitter`),ug()(),Ac(134,`td`,20),vN(135,`-`),ug(),Ac(136,`td`,21)(137,`p`),vN(138,`Evento que será disparado ao clicar no botão de "Voltar".`),ug(),Ac(139,`pre`)(140,`code`),vN(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),ug()(),Ac(142,`blockquote`)(143,`p`),vN(144,`Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.`),ug()()()(),Ac(145,`tr`,14)(146,`td`,15)(147,`div`,22)(148,`span`,23),vN(149,` p-breadcrumb`),Kc(150,`br`),ug()()(),Ac(151,`td`,18)(152,`code`,24),vN(153,`PoBreadcrumb`),ug()(),Ac(154,`td`,20),vN(155,`-`),ug(),Ac(156,`td`,21)(157,`p`),vN(158,`Objeto com propriedades do breadcrumb.`),ug()()(),Ac(159,`tr`,14)(160,`td`,15)(161,`div`,22)(162,`span`,23),vN(163,` p-components-size`),Kc(164,`br`),ug()()(),Ac(165,`td`,18)(166,`code`,25),vN(167,`string`),ug()(),Ac(168,`td`,20)(169,`p`)(170,`code`),vN(171,`medium`),ug()()(),Ac(172,`td`,21)(173,`em`)(174,`strong`),vN(175,`(opcional)`),ug()(),Ac(176,`p`),vN(177,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(178,`ul`)(179,`li`)(180,`code`),vN(181,`small`),ug(),vN(182,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(183,`li`)(184,`code`),vN(185,`medium`),ug(),vN(186,`: aplica a medida medium de cada componente.`),ug()(),Ac(187,`blockquote`)(188,`p`),vN(189,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(190,`code`),vN(191,`medium`),ug(),vN(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(193,`a`,26),vN(194,`po-theme`),ug(),vN(195,`.`),ug()()()(),Ac(196,`tr`,14)(197,`td`,15)(198,`div`,16)(199,`span`,17),vN(200,` (p-edit)`),Kc(201,`br`),ug()()(),Ac(202,`td`,18)(203,`code`,19),vN(204,`EventEmitter`),ug()(),Ac(205,`td`,20),vN(206,`-`),ug(),Ac(207,`td`,21)(208,`p`),vN(209,`Evento que será disparado ao clicar no botão de "Editar".`),ug(),Ac(210,`pre`)(211,`code`),vN(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),ug()(),Ac(213,`blockquote`)(214,`p`),vN(215,`Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.`),ug()()()(),Ac(216,`tr`,14)(217,`td`,15)(218,`div`,22)(219,`span`,23),vN(220,` p-literals`),Kc(221,`br`),ug()()(),Ac(222,`td`,18)(223,`code`,27),vN(224,`PoPageDetailLiterals`),ug()(),Ac(225,`td`,20),vN(226,`-`),ug(),Ac(227,`td`,21)(228,`em`)(229,`strong`),vN(230,`(opcional)`),ug()(),Ac(231,`p`),vN(232,`Objeto com as literais usadas no `),Ac(233,`code`),vN(234,`po-page-detail`),ug(),vN(235,`.`),ug(),Ac(236,`p`),vN(237,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ug(),Ac(238,`pre`)(239,`code`),vN(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),ug()(),Ac(241,`p`),vN(242,`Ou passando apenas as literais que deseja customizar:`),ug(),Ac(243,`pre`)(244,`code`),vN(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),ug()(),Ac(246,`p`),vN(247,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ug(),Ac(248,`pre`)(249,`code`),vN(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),ug()(),Ac(251,`blockquote`)(252,`p`),vN(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Ac(254,`a`,28)(255,`code`),vN(256,`PoI18nService`),ug()(),vN(257,` ou do browser.`),ug()()()(),Ac(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),vN(262,` (p-remove)`),Kc(263,`br`),ug()()(),Ac(264,`td`,18)(265,`code`,19),vN(266,`EventEmitter`),ug()(),Ac(267,`td`,20),vN(268,`-`),ug(),Ac(269,`td`,21)(270,`p`),vN(271,`Evento que será disparado ao clicar no botão de "Remover".`),ug(),Ac(272,`pre`)(273,`code`),vN(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),ug()(),Ac(275,`blockquote`)(276,`p`),vN(277,`Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.`),ug()()()(),Ac(278,`tr`,14)(279,`td`,15)(280,`div`,22)(281,`span`,23),vN(282,` p-subtitle`),Kc(283,`br`),ug()()(),Ac(284,`td`,18)(285,`code`,25),vN(286,`string`),ug()(),Ac(287,`td`,20),vN(288,`-`),ug(),Ac(289,`td`,21)(290,`em`)(291,`strong`),vN(292,`(opcional)`),ug()(),Ac(293,`p`),vN(294,`Subtitulo do Header da página.`),ug(),Ac(295,`p`),vN(296,`Suporta formatação básica com as tags `),Ac(297,`code`),vN(298,`<b>`),ug(),vN(299,` (negrito), `),Ac(300,`code`),vN(301,`<strong>`),ug(),vN(302,` (negrito), `),Ac(303,`code`),vN(304,`<i>`),ug(),vN(305,` (itálico), `),Ac(306,`code`),vN(307,`<em>`),ug(),vN(308,` (it\xE1lico) e
`),Ac(309,`code`),vN(310,`<u>`),ug(),vN(311,` (sublinhado).`),ug(),Ac(312,`p`),vN(313,`Exemplo:`),ug(),Ac(314,`pre`)(315,`code`,29),vN(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),ug()(),Ac(317,`blockquote`)(318,`p`),vN(319,`Requer que `),Ac(320,`code`),vN(321,`p-title`),ug(),vN(322,` esteja definido.`),ug()()()(),Ac(323,`tr`,14)(324,`td`,15)(325,`div`,22)(326,`span`,23),vN(327,` p-title`),Kc(328,`br`),ug()()(),Ac(329,`td`,18)(330,`code`,25),vN(331,`string`),ug()(),Ac(332,`td`,20),vN(333,`-`),ug(),Ac(334,`td`,21)(335,`p`),vN(336,`Título da página.`),ug()()()(),Ac(337,`h3`),vN(338,`Interfaces`),ug(),Ac(339,`h4`,30)(340,`code`,5),vN(341,`PoBreadcrumbItem`),ug()(),Ac(342,`div`,2)(343,`p`),vN(344,`Interface que define cada item do componente `),Ac(345,`strong`),vN(346,`po-breadcrumb`),ug(),vN(347,`.`),ug()(),Ac(348,`h4`,10),vN(349,`Propriedades`),ug(),Ac(350,`table`,11)(351,`tr`,12)(352,`th`,13),vN(353,`Nome`),ug(),Ac(354,`th`,13),vN(355,`Tipo`),ug(),Ac(356,`th`,13),vN(357,`Descrição`),ug()(),Ac(358,`tr`,14)(359,`td`,15)(360,`div`,22)(361,`span`,23),vN(362,` action`),Kc(363,`br`),ug()()(),Ac(364,`td`,18)(365,`code`,31),vN(366,`Function`),ug()(),Ac(367,`td`,21)(368,`em`)(369,`strong`),vN(370,`(opcional)`),ug()(),Ac(371,`p`),vN(372,`Ação executada ao clicar no item.`),ug(),Ac(373,`blockquote`)(374,`p`),vN(375,`A função atribuída a esta propriedade receberá o `),Ac(376,`em`),vN(377,`label`),ug(),vN(378,` do item como parâmetro para execução.`),ug()()()(),Ac(379,`tr`,14)(380,`td`,15)(381,`div`,22)(382,`span`,23),vN(383,` label`),Kc(384,`br`),ug()()(),Ac(385,`td`,18)(386,`code`,25),vN(387,`string`),ug()(),Ac(388,`td`,21)(389,`p`),vN(390,`Rótulo do item.`),ug()()(),Ac(391,`tr`,14)(392,`td`,15)(393,`div`,22)(394,`span`,23),vN(395,` link`),Kc(396,`br`),ug()()(),Ac(397,`td`,18)(398,`code`,25),vN(399,`string`),ug()(),Ac(400,`td`,21)(401,`em`)(402,`strong`),vN(403,`(opcional)`),ug()(),Ac(404,`p`),vN(405,`Url do item.`),ug(),Ac(406,`blockquote`)(407,`p`),vN(408,`Caso o item também contenha uma `),Ac(409,`em`),vN(410,`action`),ug(),vN(411,` definida, a preferência de execução será do `),Ac(412,`em`),vN(413,`link`),ug(),vN(414,`.`),ug()(),Ac(415,`blockquote`)(416,`p`),vN(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Ac(418,`strong`)(419,`a`,32),vN(420,`Veja um exemplo de como criar rotas aqui`),ug()(),vN(421,`.`),ug()(),Ac(422,`blockquote`)(423,`p`),vN(424,`Esta propriedade é necessária para que a propriedade `),Ac(425,`code`),vN(426,`p-favorite-service`),ug(),vN(427,` consiga favoritar ou desfavoritar.`),ug()()()()(),Ac(428,`h4`,30)(429,`code`,5),vN(430,`PoBreadcrumb`),ug()(),Ac(431,`div`,2)(432,`p`),vN(433,`Interface que define o `),Ac(434,`code`),vN(435,`po-breadcrumb`),ug(),vN(436,`.`),ug()(),Ac(437,`h4`,10),vN(438,`Propriedades`),ug(),Ac(439,`table`,11)(440,`tr`,12)(441,`th`,13),vN(442,`Nome`),ug(),Ac(443,`th`,13),vN(444,`Tipo`),ug(),Ac(445,`th`,13),vN(446,`Descrição`),ug()(),Ac(447,`tr`,14)(448,`td`,15)(449,`div`,22)(450,`span`,23),vN(451,` favorite`),Kc(452,`br`),ug()()(),Ac(453,`td`,18)(454,`code`,25),vN(455,`string`),ug()(),Ac(456,`td`,21)(457,`em`)(458,`strong`),vN(459,`(opcional)`),ug()(),Ac(460,`p`),vN(461,`Permite definir uma URL para favoritar ou desfavoritar.`),ug(),Ac(462,`blockquote`)(463,`p`),vN(464,`Para maiores informações verificar a propriedade `),Ac(465,`code`),vN(466,`p-favorite-service`),ug(),vN(467,` do componente `),Ac(468,`code`),vN(469,`po-breadcrumb`),ug(),vN(470,`.`),ug()()()(),Ac(471,`tr`,14)(472,`td`,15)(473,`div`,22)(474,`span`,23),vN(475,` items`),Kc(476,`br`),ug()()(),Ac(477,`td`,18)(478,`code`,33),vN(479,`Array<PoBreadcrumbItem>`),ug()(),Ac(480,`td`,21)(481,`p`),vN(482,`Lista de itens do `),Ac(483,`em`),vN(484,`breadcrumb`),ug(),vN(485,`.`),ug(),Ac(486,`p`)(487,`strong`),vN(488,`Exemplo:`),ug()(),Ac(489,`pre`)(490,`code`),vN(491,`{ label: 'Po Portal', link: 'portal' }
`),ug()()()(),Ac(492,`tr`,14)(493,`td`,15)(494,`div`,22)(495,`span`,23),vN(496,` params`),Kc(497,`br`),ug()()(),Ac(498,`td`,18)(499,`code`,34),vN(500,`object`),ug()(),Ac(501,`td`,21)(502,`em`)(503,`strong`),vN(504,`(opcional)`),ug()(),Ac(505,`p`),vN(506,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ug()()()(),Ac(507,`h4`,30)(508,`code`,5),vN(509,`PoPageDetailLiterals`),ug()(),Ac(510,`div`,2)(511,`p`),vN(512,`Interface para definição das literais usadas no `),Ac(513,`code`),vN(514,`po-page-detail`),ug(),vN(515,`.`),ug()(),Ac(516,`h4`,10),vN(517,`Propriedades`),ug(),Ac(518,`table`,11)(519,`tr`,12)(520,`th`,13),vN(521,`Nome`),ug(),Ac(522,`th`,13),vN(523,`Tipo`),ug(),Ac(524,`th`,13),vN(525,`Descrição`),ug()(),Ac(526,`tr`,14)(527,`td`,15)(528,`div`,22)(529,`span`,23),vN(530,` back`),Kc(531,`br`),ug()()(),Ac(532,`td`,18)(533,`code`,25),vN(534,`string`),ug()(),Ac(535,`td`,21)(536,`em`)(537,`strong`),vN(538,`(opcional)`),ug()(),Ac(539,`p`),vN(540,`Label da ação `),Ac(541,`code`),vN(542,`back`),ug(),vN(543,`.`),ug()()(),Ac(544,`tr`,14)(545,`td`,15)(546,`div`,22)(547,`span`,23),vN(548,` edit`),Kc(549,`br`),ug()()(),Ac(550,`td`,18)(551,`code`,25),vN(552,`string`),ug()(),Ac(553,`td`,21)(554,`em`)(555,`strong`),vN(556,`(opcional)`),ug()(),Ac(557,`p`),vN(558,`Label da ação `),Ac(559,`code`),vN(560,`edit`),ug(),vN(561,`.`),ug()()(),Ac(562,`tr`,14)(563,`td`,15)(564,`div`,22)(565,`span`,23),vN(566,` remove`),Kc(567,`br`),ug()()(),Ac(568,`td`,18)(569,`code`,25),vN(570,`string`),ug()(),Ac(571,`td`,21)(572,`em`)(573,`strong`),vN(574,`(opcional)`),ug()(),Ac(575,`p`),vN(576,`Label da ação `),Ac(577,`code`),vN(578,`remove`),ug(),vN(579,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Detail`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return n.changeTab(`doc`)}),Kc(3,`sample-po-page-detail-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return n.changeTab(`web`)}),Kc(5,`sample-po-page-detail-basic-view`)(6,`sample-po-page-detail-labs-view`)(7,`sample-po-page-detail-user-view`),ug()()()),l&2&&(cE(`p-actions`,n.actions),Hp(2),cE(`p-active`,n.activeTab===`doc`),Hp(2),cE(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[$ze,gae,bae,ie,ae,le,re],encapsulation:2,changeDetection:1})}return a})()}];var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(fe),kL]})}return a})();var Qe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,pe]})}return a})();export{Qe as DocPoPageDetailModule};