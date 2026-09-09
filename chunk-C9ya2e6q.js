import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Dn as x8e,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,L as I8e,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ai as _N,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,vn as tU,yi as cN}from"./main-3EWTGE7T.js";var ce=()=>({label:`PO HTML Framework`,link:`/`,icon:`an an-house-line`});var ue=o=>[o];var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(a,i){a&1&&Gl(0,`po-menu-panel`,0),a&2&&nw(`p-menus`,DN(2,ue,_N(1,ce)))},dependencies:[x8e],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Menu Panel Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-menu-panel-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,he,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,te],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`}];ngOnInit(){this.restore()}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(p){this.menuItemSelected=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-labs`]],standalone:!1,decls:18,vars:9,consts:[[`fMenuPanel`,`ngForm`],[1,`po-wrapper-menu-panel`],[3,`p-menus`,`p-logo`],[`p-title`,`PO Menu Panel`],[1,`po-row`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`logo`,`p-label`,`Logo`,`p-help`,`Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`]],template:function(a,i){if(a&1){let c=Ax();Tl(0,`div`,1),Gl(1,`po-menu-panel`,2),Tl(2,`po-page-default`,3)(3,`div`,4),Gl(4,`po-info`,5),ag(),Gl(5,`po-divider`),Tl(6,`div`,4)(7,`po-input`,6),ww(`ngModelChange`,function(r){return Ky(c),uN(i.logo,r)||(i.logo=r),Xy(r)}),ag(),a0(),ag(),Tl(8,`form`,null,0)(10,`div`,4)(11,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(c),uN(i.menuItem.label,r)||(i.menuItem.label=r),Xy(r)}),ag(),a0(),Tl(12,`po-url`,8),ww(`ngModelChange`,function(r){return Ky(c),uN(i.menuItem.link,r)||(i.menuItem.link=r),Xy(r)}),ag(),a0(),ag(),Tl(13,`div`,4)(14,`po-radio-group`,9),ww(`ngModelChange`,function(r){return Ky(c),uN(i.menuItem.icon,r)||(i.menuItem.icon=r),Xy(r)}),ag(),a0(),ag(),Tl(15,`div`,4)(16,`po-button`,10),ht(`p-click`,function(){Ky(c);let r=Bx(9);return i.addMenuItem(i.menuItem),Xy(r.reset())}),ag(),Tl(17,`po-button`,11),ht(`p-click`,function(){Ky(c);let r=Bx(9);return i.restore(),Xy(r.reset())}),ag()()()()()}if(a&2){let c=Bx(9);jp(),nw(`p-menus`,i.menuItems)(`p-logo`,i.logo),jp(3),nw(`p-value`,i.menuItemSelected),jp(3),Ew(`ngModel`,i.logo),l0(),jp(4),Ew(`ngModel`,i.menuItem.label),l0(),jp(),Ew(`ngModel`,i.menuItem.link),l0(),jp(2),Ew(`ngModel`,i.menuItem.icon),nw(`p-options`,i.iconsOptions),l0(),jp(2),nw(`p-disabled`,c.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,L0e,tU,ybe,x8e,S8e],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Menu Panel Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-wrapper-menu-panel">
  <po-menu-panel [p-menus]="menuItems" [p-logo]="logo"> </po-menu-panel>

  <po-page-default p-title="PO Menu Panel">
    <div class="po-row">
      <po-info p-label="Menu Item Selected" [p-value]="menuItemSelected"> </po-info>
    </div>

    <po-divider />

    <div class="po-row">
      <po-input
        class="po-md-12"
        name="logo"
        [(ngModel)]="logo"
        p-label="Logo"
        p-help="Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg"
      >
      </po-input>
    </div>

    <form #fMenuPanel="ngForm">
      <div class="po-row">
        <po-input class="po-md-6" name="label" [(ngModel)]="menuItem.label" p-label="Label" p-required> </po-input>

        <po-url class="po-md-6" name="link" [(ngModel)]="menuItem.link" p-label="External link" p-placeholder="http://">
        </po-url>
      </div>

      <div class="po-row">
        <po-radio-group
          class="po-lg-12"
          name="icon"
          [(ngModel)]="menuItem.icon"
          p-label="Icon"
          p-required
          [p-options]="iconsOptions"
        >
        </po-radio-group>
      </div>

      <div class="po-row">
        <po-button
          class="po-xl-2 po-md-4"
          [p-disabled]="fMenuPanel.invalid"
          p-label="Add"
          (p-click)="addMenuItem(menuItem); fMenuPanel.reset()"
        >
        </po-button>

        <po-button class="po-xl-3 po-md-5" p-label="Sample Restore" (p-click)="restore(); fMenuPanel.reset()">
        </po-button>
      </div>
    </form>
  </po-page-default>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuPanelItem, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-labs',
  templateUrl: './sample-po-menu-panel-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelLabsComponent implements OnInit {
  menuItem: PoMenuPanelItem = { icon: undefined, label: undefined };
  menuItems: Array<PoMenuPanelItem>;
  menuItemSelected: string;
  logo: string;

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-camera', value: 'an an-camera' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-chat', value: 'an an-chat' },
    { label: 'an an-package', value: 'an an-package' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  addMenuItem(menuItem: PoMenuPanelItem) {
    const newMenuItem = Object.assign({}, menuItem, { action: this.onMenuItemSelected.bind(this) });

    this.menuItems = [...this.menuItems, newMenuItem];
  }

  restore() {
    this.menuItems = [];
    this.menuItemSelected = undefined;
    this.logo = undefined;
  }

  private onMenuItemSelected(menu: PoMenuPanelItem) {
    this.menuItemSelected = menu.label;
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-menu-panel-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,fe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ie],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{title=`Customers`;menuItems=[{label:`Home`,action:this.changeTitle.bind(this),icon:`an an-house-line`},{label:`Customers`,action:this.changeTitle.bind(this),icon:`an an-user`},{label:`New Sale`,action:this.changeTitle.bind(this),icon:`an an-money`},{label:`Reports`,action:this.changeTitle.bind(this),icon:`an an-newspaper`},{label:`Settings`,action:this.changeTitle.bind(this),icon:`an an-gear`}];changeTitle(p){this.title=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-customer`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-wrapper-menu-panel`],[`p-title`,`PO - Customers`],[`p-logo`,`https://po-ui.io/assets/po-logos/po_color_bg.svg`,3,`p-menus`],[3,`p-title`]],template:function(a,i){a&1&&(Tl(0,`div`,0),Gl(1,`po-toolbar`,1)(2,`po-menu-panel`,2)(3,`po-page-default`,3),ag()),a&2&&(jp(2),nw(`p-menus`,i.menuItems),jp(),nw(`p-title`,i.title))},dependencies:[x8e,S8e,I8e],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-customer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Menu Panel - Customers`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-menu-panel-customer',
  templateUrl: './sample-po-menu-panel-customer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelCustomerComponent {
  title: string = 'Customers';

  public readonly menuItems: Array<PoMenuPanelItem> = [
    { label: 'Home', action: this.changeTitle.bind(this), icon: 'an an-house-line' },
    { label: 'Customers', action: this.changeTitle.bind(this), icon: 'an an-user' },
    { label: 'New Sale', action: this.changeTitle.bind(this), icon: 'an an-money' },
    { label: 'Reports', action: this.changeTitle.bind(this), icon: 'an an-newspaper' },
    { label: 'Settings', action: this.changeTitle.bind(this), icon: 'an an-gear' }
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-menu-panel-customer`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Me,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-doc`]],standalone:!1,decls:195,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoMenuPanelItem[]`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoMenuPanelModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-menu-panel.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoMenuPanelComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),ag(),Tl(15,`p`),cN(16,`O componente `),Tl(17,`code`),cN(18,`po-menu-panel`),ag(),cN(19,` recebe uma lista de objetos do tipo `),Tl(20,`code`),cN(21,`MenuPanelItem`),ag(),cN(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Tl(23,`code`),cN(24,`RouterModule`),ag(),cN(25,` e `),Tl(26,`code`),cN(27,`Routes`),ag(),cN(28,` do módulo principal de sua aplicação:`),ag(),Tl(29,`pre`)(30,`code`),cN(31,`import { RouterModule, Routes } from '@angular/router';

...

@NgModule({
  imports: [
    RouterModule,
    Routes,
    ...
    PoModule,
    ...
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),ag()(),Tl(32,`p`),cN(33,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),ag(),Tl(34,`pre`)(35,`code`),cN(36,`import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'hello-world', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`),ag()()(),Tl(37,`div`,6)(38,`h4`,7),cN(39,`Seletor`),ag(),Tl(40,`pre`,8),cN(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),ag()(),Tl(42,`h4`,9),cN(43,`Propriedades`),ag(),Tl(44,`table`,10)(45,`tr`,11)(46,`th`,12),cN(47,`Nome`),ag(),Tl(48,`th`,12),cN(49,`Tipo`),ag(),Tl(50,`th`,12),cN(51,`Padrão`),ag(),Tl(52,`th`,12),cN(53,`Descrição`),ag()(),Tl(54,`tr`,13)(55,`td`,14)(56,`div`,15)(57,`span`,16),cN(58,` p-logo`),Gl(59,`br`),ag()()(),Tl(60,`td`,17)(61,`code`,18),cN(62,`string`),ag()(),Tl(63,`td`,19),cN(64,`-`),ag(),Tl(65,`td`,20)(66,`em`)(67,`strong`),cN(68,`(opcional)`),ag()(),Tl(69,`p`),cN(70,`Caminho para a logomarca localizada na parte superior do menu.`),ag(),Tl(71,`blockquote`)(72,`p`)(73,`strong`),cN(74,`Importante`),ag(),cN(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),ag()()()(),Tl(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),cN(80,` p-logo-alt`),Gl(81,`br`),ag()()(),Tl(82,`td`,17)(83,`code`,18),cN(84,`string`),ag()(),Tl(85,`td`,19)(86,`p`)(87,`code`),cN(88,`Logomarca início`),ag()()(),Tl(89,`td`,20)(90,`em`)(91,`strong`),cN(92,`(opcional)`),ag()(),Tl(93,`p`),cN(94,`Define o texto alternativo para a logomarca.`),ag(),Tl(95,`blockquote`)(96,`p`)(97,`strong`),cN(98,`Importante`),ag(),cN(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),ag()()()(),Tl(100,`tr`,13)(101,`td`,14)(102,`div`,15)(103,`span`,16),cN(104,` p-menus`),Gl(105,`br`),ag()()(),Tl(106,`td`,17)(107,`code`,21),cN(108,`PoMenuPanelItem[]`),ag()(),Tl(109,`td`,19),cN(110,`-`),ag(),Tl(111,`td`,20)(112,`p`),cN(113,`Lista dos itens do `),Tl(114,`code`),cN(115,`po-menu-panel`),ag(),cN(116,`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ag()()()(),Tl(117,`h3`),cN(118,`Interfaces`),ag(),Tl(119,`h4`,22)(120,`code`,5),cN(121,`PoMenuPanelItem`),ag()(),Tl(122,`div`,2)(123,`p`),cN(124,`Interface para os itens de menu do componente `),Tl(125,`code`),cN(126,`po-menu-panel`),ag(),cN(127,`.`),ag()(),Tl(128,`h4`,9),cN(129,`Propriedades`),ag(),Tl(130,`table`,10)(131,`tr`,11)(132,`th`,12),cN(133,`Nome`),ag(),Tl(134,`th`,12),cN(135,`Tipo`),ag(),Tl(136,`th`,12),cN(137,`Descrição`),ag()(),Tl(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),cN(142,` action`),Gl(143,`br`),ag()()(),Tl(144,`td`,17)(145,`code`,23),cN(146,`Function`),ag()(),Tl(147,`td`,20)(148,`em`)(149,`strong`),cN(150,`(opcional)`),ag()(),Tl(151,`p`),cN(152,`Ação personalizada para clique do item de menu.`),ag()()(),Tl(153,`tr`,13)(154,`td`,14)(155,`div`,15)(156,`span`,16),cN(157,` icon`),Gl(158,`br`),ag()()(),Tl(159,`td`,17)(160,`code`,18),cN(161,`string`),ag()(),Tl(162,`td`,20)(163,`p`),cN(164,`Ícone para o item de menu, os `),Tl(165,`a`,24),cN(166,`ícones aceitos`),ag(),cN(167,` são os definidos no guia de estilo da PO.`),ag()()(),Tl(168,`tr`,13)(169,`td`,14)(170,`div`,15)(171,`span`,16),cN(172,` label`),Gl(173,`br`),ag()()(),Tl(174,`td`,17)(175,`code`,18),cN(176,`string`),ag()(),Tl(177,`td`,20)(178,`p`),cN(179,`Texto do item de menu.`),ag()()(),Tl(180,`tr`,13)(181,`td`,14)(182,`div`,15)(183,`span`,16),cN(184,` link`),Gl(185,`br`),ag()()(),Tl(186,`td`,17)(187,`code`,18),cN(188,`string`),ag()(),Tl(189,`td`,20)(190,`em`)(191,`strong`),cN(192,`(opcional)`),ag()(),Tl(193,`p`),cN(194,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var we=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu Panel`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-menu-panel-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-menu-panel-basic-view`)(6,`sample-po-menu-panel-labs-view`)(7,`sample-po-menu-panel-customer-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ae,le,me,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[bL.forChild(we),bL]})}return o})();var Qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,de]})}return o})();export{Qe as DocPoMenuPanelModule};