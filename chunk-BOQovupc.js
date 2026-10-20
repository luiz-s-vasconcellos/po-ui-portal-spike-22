import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,O as E5,Pi as mt,Ri as nu,Rt as _oe,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,i as _a,in as iFe,ir as EF,ji as mO,mi as gO,mn as ni,on as jze,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ce=()=>({label:`PO HTML Framework`,link:`/`,icon:`an an-house-line`});var ue=o=>[o];var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-menu-panel-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(a,i){a&1&&nu(0,`po-menu-panel`,0),a&2&&jE(`p-menus`,mO(2,ue,gO(1,ce)))},dependencies:[jze],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-menu-panel-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Menu Panel Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-menu-panel-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,he,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,te],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`}];ngOnInit(){this.restore()}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(p){this.menuItemSelected=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-menu-panel-labs`]],standalone:!1,decls:18,vars:9,consts:[[`fMenuPanel`,`ngForm`],[1,`po-wrapper-menu-panel`],[3,`p-menus`,`p-logo`],[`p-title`,`PO Menu Panel`],[1,`po-row`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`logo`,`p-label`,`Logo`,`p-help`,`Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`]],template:function(a,i){if(a&1){let c=Sx();jc(0,`div`,1),nu(1,`po-menu-panel`,2),jc(2,`po-page-default`,3)(3,`div`,4),nu(4,`po-info`,5),wg(),nu(5,`po-divider`),jc(6,`div`,4)(7,`po-input`,6),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.logo,r)||(i.logo=r),v_(r)}),wg()(),jc(8,`form`,null,0)(10,`div`,4)(11,`po-input`,7),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.menuItem.label,r)||(i.menuItem.label=r),v_(r)}),wg(),jc(12,`po-url`,8),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.menuItem.link,r)||(i.menuItem.link=r),v_(r)}),wg()(),jc(13,`div`,4)(14,`po-radio-group`,9),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.menuItem.icon,r)||(i.menuItem.icon=r),v_(r)}),wg()(),jc(15,`div`,4)(16,`po-button`,10),mt(`p-click`,function(){y_(c);let r=Fx(9);return i.addMenuItem(i.menuItem),v_(r.reset())}),wg(),jc(17,`po-button`,11),mt(`p-click`,function(){y_(c);let r=Fx(9);return i.restore(),v_(r.reset())}),wg()()()()()}if(a&2){let c=Fx(9);rg(),jE(`p-menus`,i.menuItems)(`p-logo`,i.logo),rg(3),jE(`p-value`,i.menuItemSelected),rg(3),ib(`ngModel`,i.logo),t0(),rg(4),ib(`ngModel`,i.menuItem.label),t0(),rg(),ib(`ngModel`,i.menuItem.link),t0(),rg(2),ib(`ngModel`,i.menuItem.icon),jE(`p-options`,i.iconsOptions),t0(),rg(2),jE(`p-disabled`,c.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,Ote,E5,_oe,jze,Kze],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-menu-panel-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Menu Panel Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-wrapper-menu-panel">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-menu-panel-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,fe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ie],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{title=`Customers`;menuItems=[{label:`Home`,action:this.changeTitle.bind(this),icon:`an an-house-line`},{label:`Customers`,action:this.changeTitle.bind(this),icon:`an an-user`},{label:`New Sale`,action:this.changeTitle.bind(this),icon:`an an-money`},{label:`Reports`,action:this.changeTitle.bind(this),icon:`an an-newspaper`},{label:`Settings`,action:this.changeTitle.bind(this),icon:`an an-gear`}];changeTitle(p){this.title=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-menu-panel-customer`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-wrapper-menu-panel`],[`p-title`,`PO - Customers`],[`p-logo`,`https://po-ui.io/assets/po-logos/po_color_bg.svg`,3,`p-menus`],[3,`p-title`]],template:function(a,i){a&1&&(jc(0,`div`,0),nu(1,`po-toolbar`,1)(2,`po-menu-panel`,2)(3,`po-page-default`,3),wg()),a&2&&(rg(2),jE(`p-menus`,i.menuItems),rg(),jE(`p-title`,i.title))},dependencies:[jze,Kze,iFe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-menu-panel-customer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Menu Panel - Customers`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-menu-panel-customer`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Me,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,pe],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-menu-panel-doc`]],standalone:!1,decls:195,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoMenuPanelItem[]`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoMenuPanelModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-menu-panel.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoMenuPanelComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),wg(),jc(15,`p`),iO(16,`O componente `),jc(17,`code`),iO(18,`po-menu-panel`),wg(),iO(19,` recebe uma lista de objetos do tipo `),jc(20,`code`),iO(21,`MenuPanelItem`),wg(),iO(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),jc(23,`code`),iO(24,`RouterModule`),wg(),iO(25,` e `),jc(26,`code`),iO(27,`Routes`),wg(),iO(28,` do módulo principal de sua aplicação:`),wg(),jc(29,`pre`)(30,`code`),iO(31,`import { RouterModule, Routes } from '@angular/router';

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
`),wg()(),jc(32,`p`),iO(33,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),wg(),jc(34,`pre`)(35,`code`),iO(36,`import { NgModule } from '@angular/core';

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
`),wg()()(),jc(37,`div`,6)(38,`h4`,7),iO(39,`Seletor`),wg(),jc(40,`pre`,8),iO(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),wg()(),jc(42,`h4`,9),iO(43,`Propriedades`),wg(),jc(44,`table`,10)(45,`tr`,11)(46,`th`,12),iO(47,`Nome`),wg(),jc(48,`th`,12),iO(49,`Tipo`),wg(),jc(50,`th`,12),iO(51,`Padrão`),wg(),jc(52,`th`,12),iO(53,`Descrição`),wg()(),jc(54,`tr`,13)(55,`td`,14)(56,`div`,15)(57,`span`,16),iO(58,` p-logo`),nu(59,`br`),wg()()(),jc(60,`td`,17)(61,`code`,18),iO(62,`string`),wg()(),jc(63,`td`,19),iO(64,`-`),wg(),jc(65,`td`,20)(66,`em`)(67,`strong`),iO(68,`(opcional)`),wg()(),jc(69,`p`),iO(70,`Caminho para a logomarca localizada na parte superior do menu.`),wg(),jc(71,`blockquote`)(72,`p`)(73,`strong`),iO(74,`Importante`),wg(),iO(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),wg()()()(),jc(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),iO(80,` p-logo-alt`),nu(81,`br`),wg()()(),jc(82,`td`,17)(83,`code`,18),iO(84,`string`),wg()(),jc(85,`td`,19)(86,`p`)(87,`code`),iO(88,`Logomarca início`),wg()()(),jc(89,`td`,20)(90,`em`)(91,`strong`),iO(92,`(opcional)`),wg()(),jc(93,`p`),iO(94,`Define o texto alternativo para a logomarca.`),wg(),jc(95,`blockquote`)(96,`p`)(97,`strong`),iO(98,`Importante`),wg(),iO(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),wg()()()(),jc(100,`tr`,13)(101,`td`,14)(102,`div`,15)(103,`span`,16),iO(104,` p-menus`),nu(105,`br`),wg()()(),jc(106,`td`,17)(107,`code`,21),iO(108,`PoMenuPanelItem[]`),wg()(),jc(109,`td`,19),iO(110,`-`),wg(),jc(111,`td`,20)(112,`p`),iO(113,`Lista dos itens do `),jc(114,`code`),iO(115,`po-menu-panel`),wg(),iO(116,`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),wg()()()(),jc(117,`h3`),iO(118,`Interfaces`),wg(),jc(119,`h4`,22)(120,`code`,5),iO(121,`PoMenuPanelItem`),wg()(),jc(122,`div`,2)(123,`p`),iO(124,`Interface para os itens de menu do componente `),jc(125,`code`),iO(126,`po-menu-panel`),wg(),iO(127,`.`),wg()(),jc(128,`h4`,9),iO(129,`Propriedades`),wg(),jc(130,`table`,10)(131,`tr`,11)(132,`th`,12),iO(133,`Nome`),wg(),jc(134,`th`,12),iO(135,`Tipo`),wg(),jc(136,`th`,12),iO(137,`Descrição`),wg()(),jc(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),iO(142,` action`),nu(143,`br`),wg()()(),jc(144,`td`,17)(145,`code`,23),iO(146,`Function`),wg()(),jc(147,`td`,20)(148,`em`)(149,`strong`),iO(150,`(opcional)`),wg()(),jc(151,`p`),iO(152,`Ação personalizada para clique do item de menu.`),wg()()(),jc(153,`tr`,13)(154,`td`,14)(155,`div`,15)(156,`span`,16),iO(157,` icon`),nu(158,`br`),wg()()(),jc(159,`td`,17)(160,`code`,18),iO(161,`string`),wg()(),jc(162,`td`,20)(163,`p`),iO(164,`Ícone para o item de menu, os `),jc(165,`a`,24),iO(166,`ícones aceitos`),wg(),iO(167,` são os definidos no guia de estilo da PO.`),wg()()(),jc(168,`tr`,13)(169,`td`,14)(170,`div`,15)(171,`span`,16),iO(172,` label`),nu(173,`br`),wg()()(),jc(174,`td`,17)(175,`code`,18),iO(176,`string`),wg()(),jc(177,`td`,20)(178,`p`),iO(179,`Texto do item de menu.`),wg()()(),jc(180,`tr`,13)(181,`td`,14)(182,`div`,15)(183,`span`,16),iO(184,` link`),nu(185,`br`),wg()()(),jc(186,`td`,17)(187,`code`,18),iO(188,`string`),wg()(),jc(189,`td`,20)(190,`em`)(191,`strong`),iO(192,`(opcional)`),wg()(),jc(193,`p`),iO(194,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var we=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu Panel`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-menu-panel-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-menu-panel-basic-view`)(6,`sample-po-menu-panel-labs-view`)(7,`sample-po-menu-panel-customer-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ae,le,me,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[C1.forChild(we),C1]})}return o})();var Qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[Ta,de]})}return o})();export{Qe as DocPoMenuPanelModule};