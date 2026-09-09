import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,mt as T8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Detail`]],template:function(l,n){l&1&&Gl(0,`po-page-detail`,0)},dependencies:[T8e],encapsulation:2,changeDetection:1})}return a})();var se=a=>({"docs-sample-code-tabs":a});var ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Detail Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-detail-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,se,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ee],encapsulation:2,changeDetection:1})}return a})();var ne=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action=`back`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}edit(){this.action=`edit`}remove(){this.action=`remove`}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.title=`PO Page Detail`,this.subtitle=``}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-labs`]],standalone:!1,decls:33,vars:18,consts:[[`f`,`ngForm`],[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-back`,`p-edit`,`p-remove`,`p-breadcrumb`,`p-components-size`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"back": "Retornar", "edit": "Edição", "remove": "Excluir registro"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let s=Ax();Tl(0,`po-page-detail`,4),ht(`p-back`,function(){return n.back()})(`p-edit`,function(){return n.edit()})(`p-remove`,function(){return n.remove()}),Tl(1,`div`,5),Gl(2,`po-info`,6),ag(),Gl(3,`po-divider`),Tl(4,`form`,null,0)(6,`po-input`,7),ww(`ngModelChange`,function(m){return Ky(s),uN(n.title,m)||(n.title=m),Xy(m)}),ag(),a0(),Tl(7,`po-input`,8),ww(`ngModelChange`,function(m){return Ky(s),uN(n.subtitle,m)||(n.subtitle=m),Xy(m)}),ag(),a0(),Tl(8,`po-radio-group`,9),ww(`ngModelChange`,function(m){return Ky(s),uN(n.componentsSize,m)||(n.componentsSize=m),Xy(m)}),ag(),a0(),Gl(9,`po-divider`),Tl(10,`form`,null,1)(12,`div`,5)(13,`po-input`,10),ww(`ngModelChange`,function(m){return Ky(s),uN(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),Xy(m)}),ag(),a0(),ag()(),Tl(14,`form`,null,2)(16,`div`,5)(17,`po-input`,11),ww(`ngModelChange`,function(m){return Ky(s),uN(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),Xy(m)}),ag(),a0(),Tl(18,`po-input`,12),ww(`ngModelChange`,function(m){return Ky(s),uN(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),Xy(m)}),ag(),a0(),ag(),Tl(19,`div`,5)(20,`po-button`,13),ht(`p-click`,function(){return n.addBreadcrumbItem()}),ag()()(),Gl(21,`po-divider`),Tl(22,`form`,null,3)(24,`div`,5)(25,`po-input`,14),ww(`ngModelChange`,function(m){return Ky(s),uN(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),Xy(m)}),ag(),a0(),Tl(26,`po-input`,15),ww(`ngModelChange`,function(m){return Ky(s),uN(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),Xy(m)}),ag(),a0(),ag(),Tl(27,`div`,5)(28,`po-button`,16),ht(`p-click`,function(){return n.addBreadcrumbParam()}),ag()()(),Tl(29,`div`,5)(30,`po-input`,17),ww(`ngModelChange`,function(m){return Ky(s),uN(n.literals,m)||(n.literals=m),Xy(m)}),ht(`p-change`,function(){return n.changeLiterals()}),ag(),a0(),ag(),Tl(31,`div`,5)(32,`po-button`,18),ht(`p-click`,function(){return n.restore()}),ag()()()()}if(l&2){let s=Bx(15),c=Bx(23);nw(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),jp(2),nw(`p-value`,n.action),jp(4),Ew(`ngModel`,n.title),l0(),jp(),Ew(`ngModel`,n.subtitle),l0(),jp(),Ew(`ngModel`,n.componentsSize),nw(`p-options`,n.componentsSizeOptions),l0(),jp(5),Ew(`ngModel`,n.breadcrumb.favorite),l0(),jp(4),Ew(`ngModel`,n.breadcrumbItem.label),l0(),jp(),Ew(`ngModel`,n.breadcrumbItem.link),l0(),jp(2),nw(`p-disabled`,s.invalid),jp(5),Ew(`ngModel`,n.breadcrumbParams.property),l0(),jp(),Ew(`ngModel`,n.breadcrumbParams.value),l0(),jp(2),nw(`p-disabled`,c.invalid),jp(2),Ew(`ngModel`,n.literals),l0()}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,L0e,ybe,T8e],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Detail Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-detail
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-detail-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ne],encapsulation:2,changeDetection:1})}return a})();var oe=(()=>{class a{router=f(Cn);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`John`;placeOfBirth=`Colorado`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};edit(){this.router.navigate([`/documentation/po-page-edit`],{queryParams:{view:`web`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-user`]],standalone:!1,decls:19,vars:12,consts:[[`p-title`,`User Detail`,`p-subtitle`,`Status: <b>Active</b> | Role: <i>Administrator</i>`,3,`p-edit`,`p-breadcrumb`],[1,`po-row`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,3,`p-value`],[`p-label`,`Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,3,`p-value`],[`p-label`,`Birth Date`,1,`po-md-4`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,3,`p-value`],[`p-label`,`Place Of Birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Graduation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Fathers Name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mothers Name`,1,`po-md-4`,3,`p-value`]],template:function(l,n){l&1&&(Tl(0,`po-page-detail`,0),ht(`p-edit`,function(){return n.edit()}),Tl(1,`div`,1),Gl(2,`po-info`,2)(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`div`,1),Gl(7,`po-info`,5)(8,`po-info`,6)(9,`po-info`,7),ag(),Gl(10,`po-divider`),Tl(11,`div`,1),Gl(12,`po-info`,8)(13,`po-info`,9)(14,`po-info`,10),ag(),Gl(15,`po-divider`),Tl(16,`div`,1),Gl(17,`po-info`,11)(18,`po-info`,12),ag()()),l&2&&(nw(`p-breadcrumb`,n.breadcrumb),jp(2),nw(`p-value`,n.userId),jp(),nw(`p-value`,n.email),jp(),nw(`p-value`,n.name),jp(3),nw(`p-value`,n.nickname),jp(),nw(`p-value`,n.birthDate),jp(),nw(`p-value`,n.genre),jp(3),nw(`p-value`,n.nationality),jp(),nw(`p-value`,n.placeOfBirth),jp(),nw(`p-value`,n.graduation),jp(3),nw(`p-value`,n.fathersName),jp(),nw(`p-value`,n.mothersName))},dependencies:[Xy$1,ybe,T8e],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Page Detail - User`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-page-detail-user/sample-po-page-detail-user.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-detail
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-page-detail-user/sample-po-page-detail-user.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-page-detail-user`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Se,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,oe],encapsulation:2,changeDetection:1})}return a})();var re=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-page-detail-doc`]],standalone:!1,decls:580,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoPageDetailLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(l,n){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoPageModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo responsável pelos componentes de estrutura de página: `),Tl(7,`code`),cN(8,`po-page-default`),ag(),cN(9,`, `),Tl(10,`code`),cN(11,`po-page-detail`),ag(),cN(12,`,
`),Tl(13,`code`),cN(14,`po-page-edit`),ag(),cN(15,`, `),Tl(16,`code`),cN(17,`po-page-list`),ag(),cN(18,` e `),Tl(19,`code`),cN(20,`po-page-slide`),ag(),cN(21,`.`),ag()(),Tl(22,`h3`,3),cN(23,`Componente`),ag(),Tl(24,`h4`,4)(25,`code`,5),cN(26,`PoPageDetailComponent`),ag()(),Tl(27,`div`,2)(28,`p`),cN(29,`O componente `),Tl(30,`strong`),cN(31,`po-page-detail`),ag(),cN(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),ag(),Tl(33,`h4`),cN(34,`Tokens customizáveis`),ag(),Tl(35,`blockquote`)(36,`p`),cN(37,`Para maiores informações, acesse o guia `),Tl(38,`a`,6),cN(39,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(40,`.`),ag()(),Tl(41,`table`)(42,`thead`)(43,`tr`)(44,`th`),cN(45,`Propriedade`),ag(),Tl(46,`th`),cN(47,`Descrição`),ag(),Tl(48,`th`),cN(49,`Valor Padrão`),ag()()(),Tl(50,`tbody`)(51,`tr`)(52,`td`)(53,`strong`),cN(54,`Header`),ag()(),Gl(55,`td`)(56,`td`),ag(),Tl(57,`tr`)(58,`td`)(59,`code`),cN(60,`--padding`),ag()(),Tl(61,`td`),cN(62,`Espaçamento do header`),ag(),Tl(63,`td`)(64,`code`),cN(65,`var(--spacing-xs) var(--spacing-md)`),ag()()(),Tl(66,`tr`)(67,`td`)(68,`code`),cN(69,`--gap`),ag()(),Tl(70,`td`),cN(71,`Espaçamento entre os breadcrumbs e o título`),ag(),Tl(72,`td`)(73,`code`),cN(74,`var(--spacing-md)`),ag()()(),Tl(75,`tr`)(76,`td`)(77,`code`),cN(78,`--gap-actions`),ag()(),Tl(79,`td`),cN(80,`Espaçamento entre as ações`),ag(),Tl(81,`td`)(82,`code`),cN(83,`var(--spacing-xs)`),ag()()(),Tl(84,`tr`)(85,`td`)(86,`code`),cN(87,`--font-family`),ag()(),Tl(88,`td`),cN(89,`Família tipográfica do título`),ag(),Tl(90,`td`)(91,`code`),cN(92,`var(--font-family-theme)`),ag()()(),Tl(93,`tr`)(94,`td`)(95,`strong`),cN(96,`Content`),ag()(),Gl(97,`td`)(98,`td`),ag(),Tl(99,`tr`)(100,`td`)(101,`code`),cN(102,`--padding-content`),ag()(),Tl(103,`td`),cN(104,`Espaçamento do conteúdo`),ag(),Tl(105,`td`)(106,`code`),cN(107,`var(--spacing-xs) var(--spacing-sm)`),ag()()()()()(),Tl(108,`div`,7)(109,`h4`,8),cN(110,`Seletor`),ag(),Tl(111,`pre`,9),cN(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),ag()(),Tl(113,`h4`,10),cN(114,`Propriedades`),ag(),Tl(115,`table`,11)(116,`tr`,12)(117,`th`,13),cN(118,`Nome`),ag(),Tl(119,`th`,13),cN(120,`Tipo`),ag(),Tl(121,`th`,13),cN(122,`Padrão`),ag(),Tl(123,`th`,13),cN(124,`Descrição`),ag()(),Tl(125,`tr`,14)(126,`td`,15)(127,`div`,16)(128,`span`,17),cN(129,` (p-back)`),Gl(130,`br`),ag()()(),Tl(131,`td`,18)(132,`code`,19),cN(133,`EventEmitter`),ag()(),Tl(134,`td`,20),cN(135,`-`),ag(),Tl(136,`td`,21)(137,`p`),cN(138,`Evento que será disparado ao clicar no botão de "Voltar".`),ag(),Tl(139,`pre`)(140,`code`),cN(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),ag()(),Tl(142,`blockquote`)(143,`p`),cN(144,`Caso não utilizar esta propriedade, o botão de "Voltar" não será exibido.`),ag()()()(),Tl(145,`tr`,14)(146,`td`,15)(147,`div`,22)(148,`span`,23),cN(149,` p-breadcrumb`),Gl(150,`br`),ag()()(),Tl(151,`td`,18)(152,`code`,24),cN(153,`PoBreadcrumb`),ag()(),Tl(154,`td`,20),cN(155,`-`),ag(),Tl(156,`td`,21)(157,`p`),cN(158,`Objeto com propriedades do breadcrumb.`),ag()()(),Tl(159,`tr`,14)(160,`td`,15)(161,`div`,22)(162,`span`,23),cN(163,` p-components-size`),Gl(164,`br`),ag()()(),Tl(165,`td`,18)(166,`code`,25),cN(167,`string`),ag()(),Tl(168,`td`,20)(169,`p`)(170,`code`),cN(171,`medium`),ag()()(),Tl(172,`td`,21)(173,`em`)(174,`strong`),cN(175,`(opcional)`),ag()(),Tl(176,`p`),cN(177,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(178,`ul`)(179,`li`)(180,`code`),cN(181,`small`),ag(),cN(182,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(183,`li`)(184,`code`),cN(185,`medium`),ag(),cN(186,`: aplica a medida medium de cada componente.`),ag()(),Tl(187,`blockquote`)(188,`p`),cN(189,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(190,`code`),cN(191,`medium`),ag(),cN(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(193,`a`,26),cN(194,`po-theme`),ag(),cN(195,`.`),ag()()()(),Tl(196,`tr`,14)(197,`td`,15)(198,`div`,16)(199,`span`,17),cN(200,` (p-edit)`),Gl(201,`br`),ag()()(),Tl(202,`td`,18)(203,`code`,19),cN(204,`EventEmitter`),ag()(),Tl(205,`td`,20),cN(206,`-`),ag(),Tl(207,`td`,21)(208,`p`),cN(209,`Evento que será disparado ao clicar no botão de "Editar".`),ag(),Tl(210,`pre`)(211,`code`),cN(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),ag()(),Tl(213,`blockquote`)(214,`p`),cN(215,`Caso não utilizar esta propriedade, o botão de "Editar" não será exibido.`),ag()()()(),Tl(216,`tr`,14)(217,`td`,15)(218,`div`,22)(219,`span`,23),cN(220,` p-literals`),Gl(221,`br`),ag()()(),Tl(222,`td`,18)(223,`code`,27),cN(224,`PoPageDetailLiterals`),ag()(),Tl(225,`td`,20),cN(226,`-`),ag(),Tl(227,`td`,21)(228,`em`)(229,`strong`),cN(230,`(opcional)`),ag()(),Tl(231,`p`),cN(232,`Objeto com as literais usadas no `),Tl(233,`code`),cN(234,`po-page-detail`),ag(),cN(235,`.`),ag(),Tl(236,`p`),cN(237,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),ag(),Tl(238,`pre`)(239,`code`),cN(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),ag()(),Tl(241,`p`),cN(242,`Ou passando apenas as literais que deseja customizar:`),ag(),Tl(243,`pre`)(244,`code`),cN(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),ag()(),Tl(246,`p`),cN(247,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),ag(),Tl(248,`pre`)(249,`code`),cN(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),ag()(),Tl(251,`blockquote`)(252,`p`),cN(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Tl(254,`a`,28)(255,`code`),cN(256,`PoI18nService`),ag()(),cN(257,` ou do browser.`),ag()()()(),Tl(258,`tr`,14)(259,`td`,15)(260,`div`,16)(261,`span`,17),cN(262,` (p-remove)`),Gl(263,`br`),ag()()(),Tl(264,`td`,18)(265,`code`,19),cN(266,`EventEmitter`),ag()(),Tl(267,`td`,20),cN(268,`-`),ag(),Tl(269,`td`,21)(270,`p`),cN(271,`Evento que será disparado ao clicar no botão de "Remover".`),ag(),Tl(272,`pre`)(273,`code`),cN(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),ag()(),Tl(275,`blockquote`)(276,`p`),cN(277,`Caso não utilizar esta propriedade, o botão de "Remover" não será exibido.`),ag()()()(),Tl(278,`tr`,14)(279,`td`,15)(280,`div`,22)(281,`span`,23),cN(282,` p-subtitle`),Gl(283,`br`),ag()()(),Tl(284,`td`,18)(285,`code`,25),cN(286,`string`),ag()(),Tl(287,`td`,20),cN(288,`-`),ag(),Tl(289,`td`,21)(290,`em`)(291,`strong`),cN(292,`(opcional)`),ag()(),Tl(293,`p`),cN(294,`Subtitulo do Header da página.`),ag(),Tl(295,`p`),cN(296,`Suporta formatação básica com as tags `),Tl(297,`code`),cN(298,`<b>`),ag(),cN(299,` (negrito), `),Tl(300,`code`),cN(301,`<strong>`),ag(),cN(302,` (negrito), `),Tl(303,`code`),cN(304,`<i>`),ag(),cN(305,` (itálico), `),Tl(306,`code`),cN(307,`<em>`),ag(),cN(308,` (it\xE1lico) e
`),Tl(309,`code`),cN(310,`<u>`),ag(),cN(311,` (sublinhado).`),ag(),Tl(312,`p`),cN(313,`Exemplo:`),ag(),Tl(314,`pre`)(315,`code`,29),cN(316,`subtitle = 'Status: <b>Active</b> | Role: <i>Administrator</i>';
`),ag()(),Tl(317,`blockquote`)(318,`p`),cN(319,`Requer que `),Tl(320,`code`),cN(321,`p-title`),ag(),cN(322,` esteja definido.`),ag()()()(),Tl(323,`tr`,14)(324,`td`,15)(325,`div`,22)(326,`span`,23),cN(327,` p-title`),Gl(328,`br`),ag()()(),Tl(329,`td`,18)(330,`code`,25),cN(331,`string`),ag()(),Tl(332,`td`,20),cN(333,`-`),ag(),Tl(334,`td`,21)(335,`p`),cN(336,`Título da página.`),ag()()()(),Tl(337,`h3`),cN(338,`Interfaces`),ag(),Tl(339,`h4`,30)(340,`code`,5),cN(341,`PoBreadcrumbItem`),ag()(),Tl(342,`div`,2)(343,`p`),cN(344,`Interface que define cada item do componente `),Tl(345,`strong`),cN(346,`po-breadcrumb`),ag(),cN(347,`.`),ag()(),Tl(348,`h4`,10),cN(349,`Propriedades`),ag(),Tl(350,`table`,11)(351,`tr`,12)(352,`th`,13),cN(353,`Nome`),ag(),Tl(354,`th`,13),cN(355,`Tipo`),ag(),Tl(356,`th`,13),cN(357,`Descrição`),ag()(),Tl(358,`tr`,14)(359,`td`,15)(360,`div`,22)(361,`span`,23),cN(362,` action`),Gl(363,`br`),ag()()(),Tl(364,`td`,18)(365,`code`,31),cN(366,`Function`),ag()(),Tl(367,`td`,21)(368,`em`)(369,`strong`),cN(370,`(opcional)`),ag()(),Tl(371,`p`),cN(372,`Ação executada ao clicar no item.`),ag(),Tl(373,`blockquote`)(374,`p`),cN(375,`A função atribuída a esta propriedade receberá o `),Tl(376,`em`),cN(377,`label`),ag(),cN(378,` do item como parâmetro para execução.`),ag()()()(),Tl(379,`tr`,14)(380,`td`,15)(381,`div`,22)(382,`span`,23),cN(383,` label`),Gl(384,`br`),ag()()(),Tl(385,`td`,18)(386,`code`,25),cN(387,`string`),ag()(),Tl(388,`td`,21)(389,`p`),cN(390,`Rótulo do item.`),ag()()(),Tl(391,`tr`,14)(392,`td`,15)(393,`div`,22)(394,`span`,23),cN(395,` link`),Gl(396,`br`),ag()()(),Tl(397,`td`,18)(398,`code`,25),cN(399,`string`),ag()(),Tl(400,`td`,21)(401,`em`)(402,`strong`),cN(403,`(opcional)`),ag()(),Tl(404,`p`),cN(405,`Url do item.`),ag(),Tl(406,`blockquote`)(407,`p`),cN(408,`Caso o item também contenha uma `),Tl(409,`em`),cN(410,`action`),ag(),cN(411,` definida, a preferência de execução será do `),Tl(412,`em`),cN(413,`link`),ag(),cN(414,`.`),ag()(),Tl(415,`blockquote`)(416,`p`),cN(417,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Tl(418,`strong`)(419,`a`,32),cN(420,`Veja um exemplo de como criar rotas aqui`),ag()(),cN(421,`.`),ag()(),Tl(422,`blockquote`)(423,`p`),cN(424,`Esta propriedade é necessária para que a propriedade `),Tl(425,`code`),cN(426,`p-favorite-service`),ag(),cN(427,` consiga favoritar ou desfavoritar.`),ag()()()()(),Tl(428,`h4`,30)(429,`code`,5),cN(430,`PoBreadcrumb`),ag()(),Tl(431,`div`,2)(432,`p`),cN(433,`Interface que define o `),Tl(434,`code`),cN(435,`po-breadcrumb`),ag(),cN(436,`.`),ag()(),Tl(437,`h4`,10),cN(438,`Propriedades`),ag(),Tl(439,`table`,11)(440,`tr`,12)(441,`th`,13),cN(442,`Nome`),ag(),Tl(443,`th`,13),cN(444,`Tipo`),ag(),Tl(445,`th`,13),cN(446,`Descrição`),ag()(),Tl(447,`tr`,14)(448,`td`,15)(449,`div`,22)(450,`span`,23),cN(451,` favorite`),Gl(452,`br`),ag()()(),Tl(453,`td`,18)(454,`code`,25),cN(455,`string`),ag()(),Tl(456,`td`,21)(457,`em`)(458,`strong`),cN(459,`(opcional)`),ag()(),Tl(460,`p`),cN(461,`Permite definir uma URL para favoritar ou desfavoritar.`),ag(),Tl(462,`blockquote`)(463,`p`),cN(464,`Para maiores informações verificar a propriedade `),Tl(465,`code`),cN(466,`p-favorite-service`),ag(),cN(467,` do componente `),Tl(468,`code`),cN(469,`po-breadcrumb`),ag(),cN(470,`.`),ag()()()(),Tl(471,`tr`,14)(472,`td`,15)(473,`div`,22)(474,`span`,23),cN(475,` items`),Gl(476,`br`),ag()()(),Tl(477,`td`,18)(478,`code`,33),cN(479,`Array<PoBreadcrumbItem>`),ag()(),Tl(480,`td`,21)(481,`p`),cN(482,`Lista de itens do `),Tl(483,`em`),cN(484,`breadcrumb`),ag(),cN(485,`.`),ag(),Tl(486,`p`)(487,`strong`),cN(488,`Exemplo:`),ag()(),Tl(489,`pre`)(490,`code`),cN(491,`{ label: 'Po Portal', link: 'portal' }
`),ag()()()(),Tl(492,`tr`,14)(493,`td`,15)(494,`div`,22)(495,`span`,23),cN(496,` params`),Gl(497,`br`),ag()()(),Tl(498,`td`,18)(499,`code`,34),cN(500,`object`),ag()(),Tl(501,`td`,21)(502,`em`)(503,`strong`),cN(504,`(opcional)`),ag()(),Tl(505,`p`),cN(506,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),ag()()()(),Tl(507,`h4`,30)(508,`code`,5),cN(509,`PoPageDetailLiterals`),ag()(),Tl(510,`div`,2)(511,`p`),cN(512,`Interface para definição das literais usadas no `),Tl(513,`code`),cN(514,`po-page-detail`),ag(),cN(515,`.`),ag()(),Tl(516,`h4`,10),cN(517,`Propriedades`),ag(),Tl(518,`table`,11)(519,`tr`,12)(520,`th`,13),cN(521,`Nome`),ag(),Tl(522,`th`,13),cN(523,`Tipo`),ag(),Tl(524,`th`,13),cN(525,`Descrição`),ag()(),Tl(526,`tr`,14)(527,`td`,15)(528,`div`,22)(529,`span`,23),cN(530,` back`),Gl(531,`br`),ag()()(),Tl(532,`td`,18)(533,`code`,25),cN(534,`string`),ag()(),Tl(535,`td`,21)(536,`em`)(537,`strong`),cN(538,`(opcional)`),ag()(),Tl(539,`p`),cN(540,`Label da ação `),Tl(541,`code`),cN(542,`back`),ag(),cN(543,`.`),ag()()(),Tl(544,`tr`,14)(545,`td`,15)(546,`div`,22)(547,`span`,23),cN(548,` edit`),Gl(549,`br`),ag()()(),Tl(550,`td`,18)(551,`code`,25),cN(552,`string`),ag()(),Tl(553,`td`,21)(554,`em`)(555,`strong`),cN(556,`(opcional)`),ag()(),Tl(557,`p`),cN(558,`Label da ação `),Tl(559,`code`),cN(560,`edit`),ag(),cN(561,`.`),ag()()(),Tl(562,`tr`,14)(563,`td`,15)(564,`div`,22)(565,`span`,23),cN(566,` remove`),Gl(567,`br`),ag()()(),Tl(568,`td`,18)(569,`code`,25),cN(570,`string`),ag()(),Tl(571,`td`,21)(572,`em`)(573,`strong`),cN(574,`(opcional)`),ag()(),Tl(575,`p`),cN(576,`Label da ação `),Tl(577,`code`),cN(578,`remove`),ag(),cN(579,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Page Detail`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,n){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-page-detail-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-page-detail-basic-view`)(6,`sample-po-page-detail-labs-view`)(7,`sample-po-page-detail-user-view`),ag()()()),l&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ie,ae,le,re],encapsulation:2,changeDetection:1})}return a})()}];var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(fe),bL]})}return a})();var Qe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,pe]})}return a})();export{Qe as DocPoPageDetailModule};