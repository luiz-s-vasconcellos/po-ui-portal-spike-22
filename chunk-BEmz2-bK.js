import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,J as Jze,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Ur as RN,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,ar as E,b as $ze,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,i as _a,in as kte,k as D4,ki as he$1,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,vn as qze,wr as Kc,yt as T4,zi as kL}from"./main-AGY457H2.js";var ce=()=>({label:`PO HTML Framework`,link:`/`,icon:`an an-house-line`});var ue=o=>[o];var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-menu-panel-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-menus`]],template:function(a,i){a&1&&Kc(0,`po-menu-panel`,0),a&2&&cE(`p-menus`,AN(2,ue,RN(1,ce)))},dependencies:[qze],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-menu-panel-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Menu Panel Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-menu-panel-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,he,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,te],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-camera`,value:`an an-camera`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`an an-chat`,value:`an an-chat`},{label:`an an-package`,value:`an an-package`}];ngOnInit(){this.restore()}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a]}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0}onMenuItemSelected(p){this.menuItemSelected=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-menu-panel-labs`]],standalone:!1,decls:18,vars:9,consts:[[`fMenuPanel`,`ngForm`],[1,`po-wrapper-menu-panel`],[3,`p-menus`,`p-logo`],[`p-title`,`PO Menu Panel`],[1,`po-row`],[`p-label`,`Menu Item Selected`,3,`p-value`],[`name`,`logo`,`p-label`,`Logo`,`p-help`,`Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`label`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`link`,`p-label`,`External link`,`p-placeholder`,`http://`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add`,1,`po-xl-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-xl-3`,`po-md-5`,3,`p-click`]],template:function(a,i){if(a&1){let c=Bx();Ac(0,`div`,1),Kc(1,`po-menu-panel`,2),Ac(2,`po-page-default`,3)(3,`div`,4),Kc(4,`po-info`,5),ug(),Kc(5,`po-divider`),Ac(6,`div`,4)(7,`po-input`,6),RE(`ngModelChange`,function(r){return Jv(c),DN(i.logo,r)||(i.logo=r),e_(r)}),ug(),p0(),ug(),Ac(8,`form`,null,0)(10,`div`,4)(11,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(c),DN(i.menuItem.label,r)||(i.menuItem.label=r),e_(r)}),ug(),p0(),Ac(12,`po-url`,8),RE(`ngModelChange`,function(r){return Jv(c),DN(i.menuItem.link,r)||(i.menuItem.link=r),e_(r)}),ug(),p0(),ug(),Ac(13,`div`,4)(14,`po-radio-group`,9),RE(`ngModelChange`,function(r){return Jv(c),DN(i.menuItem.icon,r)||(i.menuItem.icon=r),e_(r)}),ug(),p0(),ug(),Ac(15,`div`,4)(16,`po-button`,10),pt(`p-click`,function(){Jv(c);let r=Zx(9);return i.addMenuItem(i.menuItem),e_(r.reset())}),ug(),Ac(17,`po-button`,11),pt(`p-click`,function(){Jv(c);let r=Zx(9);return i.restore(),e_(r.reset())}),ug()()()()()}if(a&2){let c=Zx(9);Hp(),cE(`p-menus`,i.menuItems)(`p-logo`,i.logo),Hp(3),cE(`p-value`,i.menuItemSelected),Hp(3),TE(`ngModel`,i.logo),m0(),Hp(4),TE(`ngModel`,i.menuItem.label),m0(),Hp(),TE(`ngModel`,i.menuItem.link),m0(),Hp(2),TE(`ngModel`,i.menuItem.icon),cE(`p-options`,i.iconsOptions),m0(),Hp(2),cE(`p-disabled`,c.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,D4,kte,T4,hoe,qze,$ze],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-menu-panel-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Menu Panel Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-wrapper-menu-panel">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-menu-panel-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,fe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ie],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{title=`Customers`;menuItems=[{label:`Home`,action:this.changeTitle.bind(this),icon:`an an-house-line`},{label:`Customers`,action:this.changeTitle.bind(this),icon:`an an-user`},{label:`New Sale`,action:this.changeTitle.bind(this),icon:`an an-money`},{label:`Reports`,action:this.changeTitle.bind(this),icon:`an an-newspaper`},{label:`Settings`,action:this.changeTitle.bind(this),icon:`an an-gear`}];changeTitle(p){this.title=p.label}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-menu-panel-customer`]],standalone:!1,decls:4,vars:2,consts:[[1,`po-wrapper-menu-panel`],[`p-title`,`PO - Customers`],[`p-logo`,`https://po-ui.io/assets/po-logos/po_color_bg.svg`,3,`p-menus`],[3,`p-title`]],template:function(a,i){a&1&&(Ac(0,`div`,0),Kc(1,`po-toolbar`,1)(2,`po-menu-panel`,2)(3,`po-page-default`,3),ug()),a&2&&(Hp(2),cE(`p-menus`,i.menuItems),Hp(),cE(`p-title`,i.title))},dependencies:[qze,$ze,Jze],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-menu-panel-customer-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Menu Panel - Customers`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-menu-panel-customer`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Me,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,pe],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-menu-panel-doc`]],standalone:!1,decls:195,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoMenuPanelItem[]`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoMenuPanelModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-menu-panel.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoMenuPanelComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),ug(),Ac(15,`p`),vN(16,`O componente `),Ac(17,`code`),vN(18,`po-menu-panel`),ug(),vN(19,` recebe uma lista de objetos do tipo `),Ac(20,`code`),vN(21,`MenuPanelItem`),ug(),vN(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Ac(23,`code`),vN(24,`RouterModule`),ug(),vN(25,` e `),Ac(26,`code`),vN(27,`Routes`),ug(),vN(28,` do módulo principal de sua aplicação:`),ug(),Ac(29,`pre`)(30,`code`),vN(31,`import { RouterModule, Routes } from '@angular/router';

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
`),ug()(),Ac(32,`p`),vN(33,`Além disso é necessário criar um módulo configurando as rotas da aplicação.`),ug(),Ac(34,`pre`)(35,`code`),vN(36,`import { NgModule } from '@angular/core';

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
`),ug()()(),Ac(37,`div`,6)(38,`h4`,7),vN(39,`Seletor`),ug(),Ac(40,`pre`,8),vN(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),ug()(),Ac(42,`h4`,9),vN(43,`Propriedades`),ug(),Ac(44,`table`,10)(45,`tr`,11)(46,`th`,12),vN(47,`Nome`),ug(),Ac(48,`th`,12),vN(49,`Tipo`),ug(),Ac(50,`th`,12),vN(51,`Padrão`),ug(),Ac(52,`th`,12),vN(53,`Descrição`),ug()(),Ac(54,`tr`,13)(55,`td`,14)(56,`div`,15)(57,`span`,16),vN(58,` p-logo`),Kc(59,`br`),ug()()(),Ac(60,`td`,17)(61,`code`,18),vN(62,`string`),ug()(),Ac(63,`td`,19),vN(64,`-`),ug(),Ac(65,`td`,20)(66,`em`)(67,`strong`),vN(68,`(opcional)`),ug()(),Ac(69,`p`),vN(70,`Caminho para a logomarca localizada na parte superior do menu.`),ug(),Ac(71,`blockquote`)(72,`p`)(73,`strong`),vN(74,`Importante`),ug(),vN(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),ug()()()(),Ac(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),vN(80,` p-logo-alt`),Kc(81,`br`),ug()()(),Ac(82,`td`,17)(83,`code`,18),vN(84,`string`),ug()(),Ac(85,`td`,19)(86,`p`)(87,`code`),vN(88,`Logomarca início`),ug()()(),Ac(89,`td`,20)(90,`em`)(91,`strong`),vN(92,`(opcional)`),ug()(),Ac(93,`p`),vN(94,`Define o texto alternativo para a logomarca.`),ug(),Ac(95,`blockquote`)(96,`p`)(97,`strong`),vN(98,`Importante`),ug(),vN(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),ug()()()(),Ac(100,`tr`,13)(101,`td`,14)(102,`div`,15)(103,`span`,16),vN(104,` p-menus`),Kc(105,`br`),ug()()(),Ac(106,`td`,17)(107,`code`,21),vN(108,`PoMenuPanelItem[]`),ug()(),Ac(109,`td`,19),vN(110,`-`),ug(),Ac(111,`td`,20)(112,`p`),vN(113,`Lista dos itens do `),Ac(114,`code`),vN(115,`po-menu-panel`),ug(),vN(116,`. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),ug()()()(),Ac(117,`h3`),vN(118,`Interfaces`),ug(),Ac(119,`h4`,22)(120,`code`,5),vN(121,`PoMenuPanelItem`),ug()(),Ac(122,`div`,2)(123,`p`),vN(124,`Interface para os itens de menu do componente `),Ac(125,`code`),vN(126,`po-menu-panel`),ug(),vN(127,`.`),ug()(),Ac(128,`h4`,9),vN(129,`Propriedades`),ug(),Ac(130,`table`,10)(131,`tr`,11)(132,`th`,12),vN(133,`Nome`),ug(),Ac(134,`th`,12),vN(135,`Tipo`),ug(),Ac(136,`th`,12),vN(137,`Descrição`),ug()(),Ac(138,`tr`,13)(139,`td`,14)(140,`div`,15)(141,`span`,16),vN(142,` action`),Kc(143,`br`),ug()()(),Ac(144,`td`,17)(145,`code`,23),vN(146,`Function`),ug()(),Ac(147,`td`,20)(148,`em`)(149,`strong`),vN(150,`(opcional)`),ug()(),Ac(151,`p`),vN(152,`Ação personalizada para clique do item de menu.`),ug()()(),Ac(153,`tr`,13)(154,`td`,14)(155,`div`,15)(156,`span`,16),vN(157,` icon`),Kc(158,`br`),ug()()(),Ac(159,`td`,17)(160,`code`,18),vN(161,`string`),ug()(),Ac(162,`td`,20)(163,`p`),vN(164,`Ícone para o item de menu, os `),Ac(165,`a`,24),vN(166,`ícones aceitos`),ug(),vN(167,` são os definidos no guia de estilo da PO.`),ug()()(),Ac(168,`tr`,13)(169,`td`,14)(170,`div`,15)(171,`span`,16),vN(172,` label`),Kc(173,`br`),ug()()(),Ac(174,`td`,17)(175,`code`,18),vN(176,`string`),ug()(),Ac(177,`td`,20)(178,`p`),vN(179,`Texto do item de menu.`),ug()()(),Ac(180,`tr`,13)(181,`td`,14)(182,`div`,15)(183,`span`,16),vN(184,` link`),Kc(185,`br`),ug()()(),Ac(186,`td`,17)(187,`code`,18),vN(188,`string`),ug()(),Ac(189,`td`,20)(190,`em`)(191,`strong`),vN(192,`(opcional)`),ug()(),Ac(193,`p`),vN(194,`Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var we=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Menu Panel`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-menu-panel-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-menu-panel-basic-view`)(6,`sample-po-menu-panel-labs-view`)(7,`sample-po-menu-panel-customer-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ae,le,me,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[kL.forChild(we),kL]})}return o})();var Qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he$1({type:o});static ɵinj=ue$1({imports:[Ta,de]})}return o})();export{Qe as DocPoMenuPanelModule};