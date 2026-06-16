import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cU as gE,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bB as ga,cr as tr,bC as Vp,a3 as D3,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,cS as fO$1,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var he=()=>({label:"PO HTML Framework",link:"/",icon:"an an-house-line"}),be=o=>[o],ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(a,i){a&1&&Ul(0,"po-menu-panel",0),a&2&&YE("p-menus",Jx(2,be,Qx(1,he)));},dependencies:[gE],encapsulation:2,changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Menu Panel Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-menu-panel-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ce,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ae],encapsulation:2})}return o})();var me=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"}];ngOnInit(){this.restore();}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a];}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0;}onMenuItemSelected(p){this.menuItemSelected=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs"]],standalone:false,decls:18,vars:9,consts:[["fMenuPanel","ngForm"],[1,"po-wrapper-menu-panel"],[3,"p-menus","p-logo"],["p-title","PO Menu Panel"],[1,"po-row"],["p-label","Menu Item Selected",3,"p-value"],["name","logo","p-label","Logo","p-help","Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg",1,"po-md-12",3,"ngModelChange","ngModel"],["name","label","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"]],template:function(a,i){if(a&1){let c=lx();wl(0,"div",1),Ul(1,"po-menu-panel",2),wl(2,"po-page-default",3)(3,"div",4),Ul(4,"po-info",5),ng(),Ul(5,"po-divider"),wl(6,"div",4)(7,"po-input",6),pw("ngModelChange",function(r){return Qy(c),$x(i.logo,r)||(i.logo=r),Jy(r)}),ng(),$0(),ng(),wl(8,"form",null,0)(10,"div",4)(11,"po-input",7),pw("ngModelChange",function(r){return Qy(c),$x(i.menuItem.label,r)||(i.menuItem.label=r),Jy(r)}),ng(),$0(),wl(12,"po-url",8),pw("ngModelChange",function(r){return Qy(c),$x(i.menuItem.link,r)||(i.menuItem.link=r),Jy(r)}),ng(),$0(),ng(),wl(13,"div",4)(14,"po-radio-group",9),pw("ngModelChange",function(r){return Qy(c),$x(i.menuItem.icon,r)||(i.menuItem.icon=r),Jy(r)}),ng(),$0(),ng(),wl(15,"div",4)(16,"po-button",10),ut("p-click",function(){Qy(c);let r=_x(9);return i.addMenuItem(i.menuItem),Jy(r.reset())}),ng(),wl(17,"po-button",11),ut("p-click",function(){Qy(c);let r=_x(9);return i.restore(),Jy(r.reset())}),ng()()()()();}if(a&2){let c=_x(9);Pp(),YE("p-menus",i.menuItems)("p-logo",i.logo),Pp(3),YE("p-value",i.menuItemSelected),Pp(3),hw("ngModel",i.logo),G0(),Pp(4),hw("ngModel",i.menuItem.label),G0(),Pp(),hw("ngModel",i.menuItem.link),G0(),Pp(2),hw("ngModel",i.menuItem.icon),YE("p-options",i.iconsOptions),G0(),Pp(2),YE("p-disabled",c.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,di,Yo,ga,tr,Vp,gE,D3],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Menu Panel Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-wrapper-menu-panel">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-menu-panel-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Me,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,me],encapsulation:2})}return o})();var re=(()=>{class o{title="Customers";menuItems=[{label:"Home",action:this.changeTitle.bind(this),icon:"an an-house-line"},{label:"Customers",action:this.changeTitle.bind(this),icon:"an an-user"},{label:"New Sale",action:this.changeTitle.bind(this),icon:"an an-money"},{label:"Reports",action:this.changeTitle.bind(this),icon:"an an-newspaper"},{label:"Settings",action:this.changeTitle.bind(this),icon:"an an-gear"}];changeTitle(p){this.title=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer"]],standalone:false,decls:4,vars:2,consts:[[1,"po-wrapper-menu-panel"],["p-title","PO - Customers"],["p-logo","https://po-ui.io/assets/po-logos/po_color_bg.svg",3,"p-menus"],[3,"p-title"]],template:function(a,i){a&1&&(wl(0,"div",0),Ul(1,"po-toolbar",1)(2,"po-menu-panel",2)(3,"po-page-default",3),ng()),a&2&&(Pp(2),YE("p-menus",i.menuItems),Pp(),YE("p-title",i.title));},dependencies:[gE,D3,fO$1],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Menu Panel - Customers"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-menu-panel-customer"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-doc"]],standalone:false,decls:195,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoMenuPanelItem[]"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoMenuPanelModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-menu-panel."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoMenuPanelComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),ng(),wl(15,"p"),Ux(16,"O componente "),wl(17,"code"),Ux(18,"po-menu-panel"),ng(),Ux(19," recebe uma lista de objetos do tipo "),wl(20,"code"),Ux(21,"MenuPanelItem"),ng(),Ux(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),wl(23,"code"),Ux(24,"RouterModule"),ng(),Ux(25," e "),wl(26,"code"),Ux(27,"Routes"),ng(),Ux(28," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),ng(),wl(29,"pre")(30,"code"),Ux(31,`import { RouterModule, Routes } from '@angular/router';

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
`),ng()(),wl(32,"p"),Ux(33,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),ng(),wl(34,"pre")(35,"code"),Ux(36,`import { NgModule } from '@angular/core';

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
`),ng()()(),wl(37,"div",6)(38,"h4",7),Ux(39,"Seletor"),ng(),wl(40,"pre",8),Ux(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),ng()(),wl(42,"h4",9),Ux(43,"Propriedades"),ng(),wl(44,"table",10)(45,"tr",11)(46,"th",12),Ux(47,"Nome"),ng(),wl(48,"th",12),Ux(49,"Tipo"),ng(),wl(50,"th",12),Ux(51,"Padr\xE3o"),ng(),wl(52,"th",12),Ux(53,"Descri\xE7\xE3o"),ng()(),wl(54,"tr",13)(55,"td",14)(56,"div",15)(57,"span",16),Ux(58," p-logo"),Ul(59,"br"),ng()()(),wl(60,"td",17)(61,"code",18),Ux(62,"string"),ng()(),wl(63,"td",19),Ux(64,"-"),ng(),wl(65,"td",20)(66,"em")(67,"strong"),Ux(68,"(opcional)"),ng()(),wl(69,"p"),Ux(70,"Caminho para a logomarca localizada na parte superior do menu."),ng(),wl(71,"blockquote")(72,"p")(73,"strong"),Ux(74,"Importante"),ng(),Ux(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),ng()()()(),wl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),Ux(80," p-logo-alt"),Ul(81,"br"),ng()()(),wl(82,"td",17)(83,"code",18),Ux(84,"string"),ng()(),wl(85,"td",19)(86,"p")(87,"code"),Ux(88,"Logomarca in\xEDcio"),ng()()(),wl(89,"td",20)(90,"em")(91,"strong"),Ux(92,"(opcional)"),ng()(),wl(93,"p"),Ux(94,"Define o texto alternativo para a logomarca."),ng(),wl(95,"blockquote")(96,"p")(97,"strong"),Ux(98,"Importante"),ng(),Ux(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),ng()()()(),wl(100,"tr",13)(101,"td",14)(102,"div",15)(103,"span",16),Ux(104," p-menus"),Ul(105,"br"),ng()()(),wl(106,"td",17)(107,"code",21),Ux(108,"PoMenuPanelItem[]"),ng()(),wl(109,"td",19),Ux(110,"-"),ng(),wl(111,"td",20)(112,"p"),Ux(113,"Lista dos itens do "),wl(114,"code"),Ux(115,"po-menu-panel"),ng(),Ux(116,". Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),ng()()()(),wl(117,"h3"),Ux(118,"Interfaces"),ng(),wl(119,"h4",22)(120,"code",5),Ux(121,"PoMenuPanelItem"),ng()(),wl(122,"div",2)(123,"p"),Ux(124,"Interface para os itens de menu do componente "),wl(125,"code"),Ux(126,"po-menu-panel"),ng(),Ux(127,"."),ng()(),wl(128,"h4",9),Ux(129,"Propriedades"),ng(),wl(130,"table",10)(131,"tr",11)(132,"th",12),Ux(133,"Nome"),ng(),wl(134,"th",12),Ux(135,"Tipo"),ng(),wl(136,"th",12),Ux(137,"Descri\xE7\xE3o"),ng()(),wl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),Ux(142," action"),Ul(143,"br"),ng()()(),wl(144,"td",17)(145,"code",23),Ux(146,"Function"),ng()(),wl(147,"td",20)(148,"em")(149,"strong"),Ux(150,"(opcional)"),ng()(),wl(151,"p"),Ux(152,"A\xE7\xE3o personalizada para clique do item de menu."),ng()()(),wl(153,"tr",13)(154,"td",14)(155,"div",15)(156,"span",16),Ux(157," icon"),Ul(158,"br"),ng()()(),wl(159,"td",17)(160,"code",18),Ux(161,"string"),ng()(),wl(162,"td",20)(163,"p"),Ux(164,"\xCDcone para o item de menu, os "),wl(165,"a",24),Ux(166,"\xEDcones aceitos"),ng(),Ux(167," s\xE3o os definidos no guia de estilo da PO."),ng()()(),wl(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),Ux(172," label"),Ul(173,"br"),ng()()(),wl(174,"td",17)(175,"code",18),Ux(176,"string"),ng()(),wl(177,"td",20)(178,"p"),Ux(179,"Texto do item de menu."),ng()()(),wl(180,"tr",13)(181,"td",14)(182,"div",15)(183,"span",16),Ux(184," link"),Ul(185,"br"),ng()()(),wl(186,"td",17)(187,"code",18),Ux(188,"string"),ng()(),wl(189,"td",20)(190,"em")(191,"strong"),Ux(192,"(opcional)"),ng()(),wl(193,"p"),Ux(194,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var ue=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu Panel",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-menu-panel-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-menu-panel-basic-view")(6,"sample-po-menu-panel-labs-view")(7,"sample-po-menu-panel-customer-view"),ng()()()),a&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,le,se,de,ce],encapsulation:2})}return o})();var ye=[{path:"",component:ue}],ge=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[vL.forChild(ye),vL]})}return o})();var ln=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[u5,ge]})}return o})();export{ln as DocPoMenuPanelModule};