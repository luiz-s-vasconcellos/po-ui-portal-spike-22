import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,dn as lNe,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,cX as O3,c9 as Qhe,a3 as pNe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,dm as _Ne,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var ce=()=>({label:"PO HTML Framework",link:"/",icon:"an an-house-line"}),ue=o=>[o],te=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(a,i){a&1&&Wl(0,"po-menu-panel",0),a&2&&tw("p-menus",dN(2,ue,uN(1,ce)));},dependencies:[lNe],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Menu Panel Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-menu-panel-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,he,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,te],encapsulation:2})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"}];ngOnInit(){this.restore();}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a];}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0;}onMenuItemSelected(p){this.menuItemSelected=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs"]],standalone:false,decls:18,vars:9,consts:[["fMenuPanel","ngForm"],[1,"po-wrapper-menu-panel"],[3,"p-menus","p-logo"],["p-title","PO Menu Panel"],[1,"po-row"],["p-label","Menu Item Selected",3,"p-value"],["name","logo","p-label","Logo","p-help","Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg",1,"po-md-12",3,"ngModelChange","ngModel"],["name","label","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"]],template:function(a,i){if(a&1){let c=Ex();Sl(0,"div",1),Wl(1,"po-menu-panel",2),Sl(2,"po-page-default",3)(3,"div",4),Wl(4,"po-info",5),sg(),Wl(5,"po-divider"),Sl(6,"div",4)(7,"po-input",6),Ew("ngModelChange",function(r){return Xy(c),tN(i.logo,r)||(i.logo=r),Qy(r)}),sg(),JA(),sg(),Sl(8,"form",null,0)(10,"div",4)(11,"po-input",7),Ew("ngModelChange",function(r){return Xy(c),tN(i.menuItem.label,r)||(i.menuItem.label=r),Qy(r)}),sg(),JA(),Sl(12,"po-url",8),Ew("ngModelChange",function(r){return Xy(c),tN(i.menuItem.link,r)||(i.menuItem.link=r),Qy(r)}),sg(),JA(),sg(),Sl(13,"div",4)(14,"po-radio-group",9),Ew("ngModelChange",function(r){return Xy(c),tN(i.menuItem.icon,r)||(i.menuItem.icon=r),Qy(r)}),sg(),JA(),sg(),Sl(15,"div",4)(16,"po-button",10),ht("p-click",function(){Xy(c);let r=xx(9);return i.addMenuItem(i.menuItem),Qy(r.reset())}),sg(),Sl(17,"po-button",11),ht("p-click",function(){Xy(c);let r=xx(9);return i.restore(),Qy(r.reset())}),sg()()()()();}if(a&2){let c=xx(9);Vp(),tw("p-menus",i.menuItems)("p-logo",i.logo),Vp(3),tw("p-value",i.menuItemSelected),Vp(3),Dw("ngModel",i.logo),t0(),Vp(4),Dw("ngModel",i.menuItem.label),t0(),Vp(),Dw("ngModel",i.menuItem.link),t0(),Vp(2),Dw("ngModel",i.menuItem.icon),tw("p-options",i.iconsOptions),t0(),Vp(2),tw("p-disabled",c.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Pde,O3,Qhe,lNe,pNe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Menu Panel Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-wrapper-menu-panel">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-menu-panel-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,fe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ie],encapsulation:2})}return o})();var pe=(()=>{class o{title="Customers";menuItems=[{label:"Home",action:this.changeTitle.bind(this),icon:"an an-house-line"},{label:"Customers",action:this.changeTitle.bind(this),icon:"an an-user"},{label:"New Sale",action:this.changeTitle.bind(this),icon:"an an-money"},{label:"Reports",action:this.changeTitle.bind(this),icon:"an an-newspaper"},{label:"Settings",action:this.changeTitle.bind(this),icon:"an an-gear"}];changeTitle(p){this.title=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer"]],standalone:false,decls:4,vars:2,consts:[[1,"po-wrapper-menu-panel"],["p-title","PO - Customers"],["p-logo","https://po-ui.io/assets/po-logos/po_color_bg.svg",3,"p-menus"],[3,"p-title"]],template:function(a,i){a&1&&(Sl(0,"div",0),Wl(1,"po-toolbar",1)(2,"po-menu-panel",2)(3,"po-page-default",3),sg()),a&2&&(Vp(2),tw("p-menus",i.menuItems),Vp(),tw("p-title",i.title));},dependencies:[lNe,pNe,_Ne],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Menu Panel - Customers"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-menu-panel-customer"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,pe],encapsulation:2})}return o})();var se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-doc"]],standalone:false,decls:195,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoMenuPanelItem[]"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoMenuPanelModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-menu-panel."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoMenuPanelComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),sg(),Sl(15,"p"),Jx(16,"O componente "),Sl(17,"code"),Jx(18,"po-menu-panel"),sg(),Jx(19," recebe uma lista de objetos do tipo "),Sl(20,"code"),Jx(21,"MenuPanelItem"),sg(),Jx(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Sl(23,"code"),Jx(24,"RouterModule"),sg(),Jx(25," e "),Sl(26,"code"),Jx(27,"Routes"),sg(),Jx(28," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),sg(),Sl(29,"pre")(30,"code"),Jx(31,`import { RouterModule, Routes } from '@angular/router';

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
`),sg()(),Sl(32,"p"),Jx(33,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),sg(),Sl(34,"pre")(35,"code"),Jx(36,`import { NgModule } from '@angular/core';

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
`),sg()()(),Sl(37,"div",6)(38,"h4",7),Jx(39,"Seletor"),sg(),Sl(40,"pre",8),Jx(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),sg()(),Sl(42,"h4",9),Jx(43,"Propriedades"),sg(),Sl(44,"table",10)(45,"tr",11)(46,"th",12),Jx(47,"Nome"),sg(),Sl(48,"th",12),Jx(49,"Tipo"),sg(),Sl(50,"th",12),Jx(51,"Padr\xE3o"),sg(),Sl(52,"th",12),Jx(53,"Descri\xE7\xE3o"),sg()(),Sl(54,"tr",13)(55,"td",14)(56,"div",15)(57,"span",16),Jx(58," p-logo"),Wl(59,"br"),sg()()(),Sl(60,"td",17)(61,"code",18),Jx(62,"string"),sg()(),Sl(63,"td",19),Jx(64,"-"),sg(),Sl(65,"td",20)(66,"em")(67,"strong"),Jx(68,"(opcional)"),sg()(),Sl(69,"p"),Jx(70,"Caminho para a logomarca localizada na parte superior do menu."),sg(),Sl(71,"blockquote")(72,"p")(73,"strong"),Jx(74,"Importante"),sg(),Jx(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),sg()()()(),Sl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),Jx(80," p-logo-alt"),Wl(81,"br"),sg()()(),Sl(82,"td",17)(83,"code",18),Jx(84,"string"),sg()(),Sl(85,"td",19)(86,"p")(87,"code"),Jx(88,"Logomarca in\xEDcio"),sg()()(),Sl(89,"td",20)(90,"em")(91,"strong"),Jx(92,"(opcional)"),sg()(),Sl(93,"p"),Jx(94,"Define o texto alternativo para a logomarca."),sg(),Sl(95,"blockquote")(96,"p")(97,"strong"),Jx(98,"Importante"),sg(),Jx(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),sg()()()(),Sl(100,"tr",13)(101,"td",14)(102,"div",15)(103,"span",16),Jx(104," p-menus"),Wl(105,"br"),sg()()(),Sl(106,"td",17)(107,"code",21),Jx(108,"PoMenuPanelItem[]"),sg()(),Sl(109,"td",19),Jx(110,"-"),sg(),Sl(111,"td",20)(112,"p"),Jx(113,"Lista dos itens do "),Sl(114,"code"),Jx(115,"po-menu-panel"),sg(),Jx(116,". Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),sg()()()(),Sl(117,"h3"),Jx(118,"Interfaces"),sg(),Sl(119,"h4",22)(120,"code",5),Jx(121,"PoMenuPanelItem"),sg()(),Sl(122,"div",2)(123,"p"),Jx(124,"Interface para os itens de menu do componente "),Sl(125,"code"),Jx(126,"po-menu-panel"),sg(),Jx(127,"."),sg()(),Sl(128,"h4",9),Jx(129,"Propriedades"),sg(),Sl(130,"table",10)(131,"tr",11)(132,"th",12),Jx(133,"Nome"),sg(),Sl(134,"th",12),Jx(135,"Tipo"),sg(),Sl(136,"th",12),Jx(137,"Descri\xE7\xE3o"),sg()(),Sl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),Jx(142," action"),Wl(143,"br"),sg()()(),Sl(144,"td",17)(145,"code",23),Jx(146,"Function"),sg()(),Sl(147,"td",20)(148,"em")(149,"strong"),Jx(150,"(opcional)"),sg()(),Sl(151,"p"),Jx(152,"A\xE7\xE3o personalizada para clique do item de menu."),sg()()(),Sl(153,"tr",13)(154,"td",14)(155,"div",15)(156,"span",16),Jx(157," icon"),Wl(158,"br"),sg()()(),Sl(159,"td",17)(160,"code",18),Jx(161,"string"),sg()(),Sl(162,"td",20)(163,"p"),Jx(164,"\xCDcone para o item de menu, os "),Sl(165,"a",24),Jx(166,"\xEDcones aceitos"),sg(),Jx(167," s\xE3o os definidos no guia de estilo da PO."),sg()()(),Sl(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),Jx(172," label"),Wl(173,"br"),sg()()(),Sl(174,"td",17)(175,"code",18),Jx(176,"string"),sg()(),Sl(177,"td",20)(178,"p"),Jx(179,"Texto do item de menu."),sg()()(),Sl(180,"tr",13)(181,"td",14)(182,"div",15)(183,"span",16),Jx(184," link"),Wl(185,"br"),sg()()(),Sl(186,"td",17)(187,"code",18),Jx(188,"string"),sg()(),Sl(189,"td",20)(190,"em")(191,"strong"),Jx(192,"(opcional)"),sg()(),Sl(193,"p"),Jx(194,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var re=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu Panel",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-menu-panel-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-menu-panel-basic-view")(6,"sample-po-menu-panel-labs-view")(7,"sample-po-menu-panel-customer-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ae,le,me,se],encapsulation:2})}return o})();var we=[{path:"",component:re}],de=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[pL.forChild(we),pL]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ar,de]})}return o})();export{Qe as DocPoMenuPanelModule};