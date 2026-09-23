import{$r as Vx,Br as TN,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Qi as oN,Sa as yN,Sn as sU,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ct as O8e,ea as p0,ga as w,gn as q8e,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var ce=()=>({label:`PO HTML Framework`,link:`/`,icon:`an an-house-line`});var ue=o=>[o];var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(a,i){a&1&&ql(0,`po-menu-panel`,0),a&2&&cw(`p-menus`,MN(2,ue,TN(1,ce)))},dependencies:[O8e],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Menu Panel Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-menu-panel-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,he,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,te],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`}];ngOnInit(){this.restore()}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(p){this.menuItemSelected=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-labs`]],standalone:!1,decls:18,vars:9,consts:[[`fMenuPanel`,`ngForm`],[1,`po-wrapper-menu-panel`],[3,`p-menus`,`p-logo`],[`p-title`,`PO Menu Panel`],[1,`po-row`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`logo`,`p-label`,`Logo`,`p-help`,`Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`]],template:function(a,i){if(a&1){let c=Vx();Ml(0,`div`,1),ql(1,`po-menu-panel`,2),Ml(2,`po-page-default`,3)(3,`div`,4),ql(4,`po-info`,5),lg(),ql(5,`po-divider`),Ml(6,`div`,4)(7,`po-input`,6),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.logo,r)||(i.logo=r),Jy(r)}),lg(),f0(),lg(),Ml(8,`form`,null,0)(10,`div`,4)(11,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.menuItem.label,r)||(i.menuItem.label=r),Jy(r)}),lg(),f0(),Ml(12,`po-url`,8),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.menuItem.link,r)||(i.menuItem.link=r),Jy(r)}),lg(),f0(),lg(),Ml(13,`div`,4)(14,`po-radio-group`,9),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.menuItem.icon,r)||(i.menuItem.icon=r),Jy(r)}),lg(),f0(),lg(),Ml(15,`div`,4)(16,`po-button`,10),ht(`p-click`,function(){Qy(c);let r=Yx(9);return i.addMenuItem(i.menuItem),Jy(r.reset())}),lg(),Ml(17,`po-button`,11),ht(`p-click`,function(){Qy(c);let r=Yx(9);return i.restore(),Jy(r.reset())}),lg()()()()()}if(a&2){let c=Yx(9);Up(),cw(`p-menus`,i.menuItems)(`p-logo`,i.logo),Up(3),cw(`p-value`,i.menuItemSelected),Up(3),Tw(`ngModel`,i.logo),p0(),Up(4),Tw(`ngModel`,i.menuItem.label),p0(),Up(),Tw(`ngModel`,i.menuItem.link),p0(),Up(2),Tw(`ngModel`,i.menuItem.icon),cw(`p-options`,i.iconsOptions),p0(),Up(2),cw(`p-disabled`,c.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,q0e,sU,kbe,O8e,V8e],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Menu Panel Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-wrapper-menu-panel">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-menu-panel-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,fe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ie],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{title=`Customers`;menuItems=[{label:`Home`,action:this.changeTitle.bind(this),icon:`an an-house-line`},{label:`Customers`,action:this.changeTitle.bind(this),icon:`an an-user`},{label:`New Sale`,action:this.changeTitle.bind(this),icon:`an an-money`},{label:`Reports`,action:this.changeTitle.bind(this),icon:`an an-newspaper`},{label:`Settings`,action:this.changeTitle.bind(this),icon:`an an-gear`}];changeTitle(p){this.title=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-customer`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-wrapper-menu-panel`],[`p-title`,`PO - Customers`],[`p-logo`,`https://po-ui.io/assets/po-logos/po_color_bg.svg`,3,`p-menus`],[3,`p-title`]],template:function(a,i){a&1&&(Ml(0,`div`,0),ql(1,`po-toolbar`,1)(2,`po-menu-panel`,2)(3,`po-page-default`,3),lg()),a&2&&(Up(2),cw(`p-menus`,i.menuItems),Up(),cw(`p-title`,i.title))},dependencies:[O8e,V8e,q8e],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-customer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Menu Panel - Customers`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-menu-panel-customer`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Me,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-menu-panel-doc`]],standalone:!1,decls:195,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoMenuPanelItem[]`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoMenuPanelModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-menu-panel.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoMenuPanelComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),lg(),Ml(15,`p`),mN(16,`O componente `),Ml(17,`code`),mN(18,`po-menu-panel`),lg(),mN(19,` recebe uma lista de objetos do tipo `),Ml(20,`code`),mN(21,`MenuPanelItem`),lg(),mN(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Ml(23,`code`),mN(24,`RouterModule`),lg(),mN(25,` e `),Ml(26,`code`),mN(27,`Routes`),lg(),mN(28,` do módulo principal de sua aplicação:`),lg(),Ml(29,`pre`)(30,`code`),mN(31,`import { RouterModule, Routes } from '@angular/router';

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
`),lg()(),Ml(32,`p`),mN(33,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),lg(),Ml(34,`pre`)(35,`code`),mN(36,`import { NgModule } from '@angular/core';

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
`),lg()()(),Ml(37,`div`,6)(38,`h4`,7),mN(39,`Seletor`),lg(),Ml(40,`pre`,8),mN(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),lg()(),Ml(42,`h4`,9),mN(43,`Propriedades`),lg(),Ml(44,`table`,10)(45,`tr`,11)(46,`th`,12),mN(47,`Nome`),lg(),Ml(48,`th`,12),mN(49,`Tipo`),lg(),Ml(50,`th`,12),mN(51,`Padrão`),lg(),Ml(52,`th`,12),mN(53,`Descrição`),lg()(),Ml(54,`tr`,13)(55,`td`,14)(56,`div`,15)(57,`span`,16),mN(58,` p-logo`),ql(59,`br`),lg()()(),Ml(60,`td`,17)(61,`code`,18),mN(62,`string`),lg()(),Ml(63,`td`,19),mN(64,`-`),lg(),Ml(65,`td`,20)(66,`em`)(67,`strong`),mN(68,`(opcional)`),lg()(),Ml(69,`p`),mN(70,`Caminho para a logomarca localizada na parte superior do menu.`),lg(),Ml(71,`blockquote`)(72,`p`)(73,`strong`),mN(74,`Importante`),lg(),mN(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),lg()()()(),Ml(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),mN(80,` p-logo-alt`),ql(81,`br`),lg()()(),Ml(82,`td`,17)(83,`code`,18),mN(84,`string`),lg()(),Ml(85,`td`,19)(86,`p`)(87,`code`),mN(88,`Logomarca início`),lg()()(),Ml(89,`td`,20)(90,`em`)(91,`strong`),mN(92,`(opcional)`),lg()(),Ml(93,`p`),mN(94,`Define o texto alternativo para a logomarca.`),lg(),Ml(95,`blockquote`)(96,`p`)(97,`strong`),mN(98,`Importante`),lg(),mN(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),lg()()()(),Ml(100,`tr`,13)(101,`td`,14)(102,`div`,15)(103,`span`,16),mN(104,` p-menus`),ql(105,`br`),lg()()(),Ml(106,`td`,17)(107,`code`,21),mN(108,`PoMenuPanelItem[]`),lg()(),Ml(109,`td`,19),mN(110,`-`),lg(),Ml(111,`td`,20)(112,`p`),mN(113,`Lista dos itens do `),Ml(114,`code`),mN(115,`po-menu-panel`),lg(),mN(116,`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),lg()()()(),Ml(117,`h3`),mN(118,`Interfaces`),lg(),Ml(119,`h4`,22)(120,`code`,5),mN(121,`PoMenuPanelItem`),lg()(),Ml(122,`div`,2)(123,`p`),mN(124,`Interface para os itens de menu do componente `),Ml(125,`code`),mN(126,`po-menu-panel`),lg(),mN(127,`.`),lg()(),Ml(128,`h4`,9),mN(129,`Propriedades`),lg(),Ml(130,`table`,10)(131,`tr`,11)(132,`th`,12),mN(133,`Nome`),lg(),Ml(134,`th`,12),mN(135,`Tipo`),lg(),Ml(136,`th`,12),mN(137,`Descrição`),lg()(),Ml(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),mN(142,` action`),ql(143,`br`),lg()()(),Ml(144,`td`,17)(145,`code`,23),mN(146,`Function`),lg()(),Ml(147,`td`,20)(148,`em`)(149,`strong`),mN(150,`(opcional)`),lg()(),Ml(151,`p`),mN(152,`Ação personalizada para clique do item de menu.`),lg()()(),Ml(153,`tr`,13)(154,`td`,14)(155,`div`,15)(156,`span`,16),mN(157,` icon`),ql(158,`br`),lg()()(),Ml(159,`td`,17)(160,`code`,18),mN(161,`string`),lg()(),Ml(162,`td`,20)(163,`p`),mN(164,`Ícone para o item de menu, os `),Ml(165,`a`,24),mN(166,`ícones aceitos`),lg(),mN(167,` são os definidos no guia de estilo da PO.`),lg()()(),Ml(168,`tr`,13)(169,`td`,14)(170,`div`,15)(171,`span`,16),mN(172,` label`),ql(173,`br`),lg()()(),Ml(174,`td`,17)(175,`code`,18),mN(176,`string`),lg()(),Ml(177,`td`,20)(178,`p`),mN(179,`Texto do item de menu.`),lg()()(),Ml(180,`tr`,13)(181,`td`,14)(182,`div`,15)(183,`span`,16),mN(184,` link`),ql(185,`br`),lg()()(),Ml(186,`td`,17)(187,`code`,18),mN(188,`string`),lg()(),Ml(189,`td`,20)(190,`em`)(191,`strong`),mN(192,`(opcional)`),lg()(),Ml(193,`p`),mN(194,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var we=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu Panel`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-menu-panel-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-menu-panel-basic-view`)(6,`sample-po-menu-panel-labs-view`)(7,`sample-po-menu-panel-customer-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ae,le,me,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[NL.forChild(we),NL]})}return o})();var Qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[ar,de]})}return o})();export{Qe as DocPoMenuPanelModule};