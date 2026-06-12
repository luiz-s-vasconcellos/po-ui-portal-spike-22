import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dt as xNe,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,d0 as $3,cd as sme,a3 as SNe,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,ds as INe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ce=()=>({label:"PO HTML Framework",link:"/",icon:"an an-house-line"}),ue=o=>[o],te=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-menus"]],template:function(a,i){a&1&&Hl(0,"po-menu-panel",0),a&2&&ZE("p-menus",oN(2,ue,iN(1,ce)));},dependencies:[xNe],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Menu Panel Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-menu-panel [p-menus]="[{ label: 'PO HTML Framework', link: '/', icon: 'an an-house-line' }]"></po-menu-panel>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-menu-panel-basic/sample-po-menu-panel-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-menu-panel-basic',
  templateUrl: './sample-po-menu-panel-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoMenuPanelBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-menu-panel-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,he,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,te],encapsulation:2})}return o})();var ie=(()=>{class o{menuItem={icon:void 0,label:void 0};menuItems;menuItemSelected;logo;iconsOptions=[{label:"an an-newspaper",value:"an an-newspaper"},{label:"an an-camera",value:"an an-camera"},{label:"an an-calendar-dots",value:"an an-calendar-dots"},{label:"an an-user",value:"an an-user"},{label:"an an-chat",value:"an an-chat"},{label:"an an-package",value:"an an-package"}];ngOnInit(){this.restore();}addMenuItem(p){let a=Object.assign({},p,{action:this.onMenuItemSelected.bind(this)});this.menuItems=[...this.menuItems,a];}restore(){this.menuItems=[],this.menuItemSelected=void 0,this.logo=void 0;}onMenuItemSelected(p){this.menuItemSelected=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs"]],standalone:false,decls:18,vars:9,consts:[["fMenuPanel","ngForm"],[1,"po-wrapper-menu-panel"],[3,"p-menus","p-logo"],["p-title","PO Menu Panel"],[1,"po-row"],["p-label","Menu Item Selected",3,"p-value"],["name","logo","p-label","Logo","p-help","Exemplo: https://po-ui.io/assets/po-logos/po_inverse.svg",1,"po-md-12",3,"ngModelChange","ngModel"],["name","label","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","link","p-label","External link","p-placeholder","http://",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add",1,"po-xl-2","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-xl-3","po-md-5",3,"p-click"]],template:function(a,i){if(a&1){let c=gx();Cl(0,"div",1),Hl(1,"po-menu-panel",2),Cl(2,"po-page-default",3)(3,"div",4),Hl(4,"po-info",5),og(),Hl(5,"po-divider"),Cl(6,"div",4)(7,"po-input",6),gw("ngModelChange",function(r){return Jy(c),Zx(i.logo,r)||(i.logo=r),e_(r)}),og(),Z0(),og(),Cl(8,"form",null,0)(10,"div",4)(11,"po-input",7),gw("ngModelChange",function(r){return Jy(c),Zx(i.menuItem.label,r)||(i.menuItem.label=r),e_(r)}),og(),Z0(),Cl(12,"po-url",8),gw("ngModelChange",function(r){return Jy(c),Zx(i.menuItem.link,r)||(i.menuItem.link=r),e_(r)}),og(),Z0(),og(),Cl(13,"div",4)(14,"po-radio-group",9),gw("ngModelChange",function(r){return Jy(c),Zx(i.menuItem.icon,r)||(i.menuItem.icon=r),e_(r)}),og(),Z0(),og(),Cl(15,"div",4)(16,"po-button",10),dt("p-click",function(){Jy(c);let r=Sx(9);return i.addMenuItem(i.menuItem),e_(r.reset())}),og(),Cl(17,"po-button",11),dt("p-click",function(){Jy(c);let r=Sx(9);return i.restore(),e_(r.reset())}),og()()()()();}if(a&2){let c=Sx(9);Lp(),ZE("p-menus",i.menuItems)("p-logo",i.logo),Lp(3),ZE("p-value",i.menuItemSelected),Lp(3),pw("ngModel",i.logo),X0(),Lp(4),pw("ngModel",i.menuItem.label),X0(),Lp(),pw("ngModel",i.menuItem.link),X0(),Lp(2),pw("ngModel",i.menuItem.icon),ZE("p-options",i.iconsOptions),X0(),Lp(2),ZE("p-disabled",c.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Nde,$3,sme,xNe,SNe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Menu Panel Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-wrapper-menu-panel">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-menu-panel-labs/sample-po-menu-panel-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-menu-panel-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ie],encapsulation:2})}return o})();var pe=(()=>{class o{title="Customers";menuItems=[{label:"Home",action:this.changeTitle.bind(this),icon:"an an-house-line"},{label:"Customers",action:this.changeTitle.bind(this),icon:"an an-user"},{label:"New Sale",action:this.changeTitle.bind(this),icon:"an an-money"},{label:"Reports",action:this.changeTitle.bind(this),icon:"an an-newspaper"},{label:"Settings",action:this.changeTitle.bind(this),icon:"an an-gear"}];changeTitle(p){this.title=p.label;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer"]],standalone:false,decls:4,vars:2,consts:[[1,"po-wrapper-menu-panel"],["p-title","PO - Customers"],["p-logo","https://po-ui.io/assets/po-logos/po_color_bg.svg",3,"p-menus"],[3,"p-title"]],template:function(a,i){a&1&&(Cl(0,"div",0),Hl(1,"po-toolbar",1)(2,"po-menu-panel",2)(3,"po-page-default",3),og()),a&2&&(Lp(2),ZE("p-menus",i.menuItems),Lp(),ZE("p-title",i.title));},dependencies:[xNe,SNe,INe],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-customer-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Menu Panel - Customers"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-wrapper-menu-panel">
  <po-toolbar p-title="PO - Customers"></po-toolbar>

  <po-menu-panel [p-menus]="menuItems" p-logo="https://po-ui.io/assets/po-logos/po_color_bg.svg"></po-menu-panel>

  <po-page-default [p-title]="title"></po-page-default>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-menu-panel-customer/sample-po-menu-panel-customer.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-menu-panel-customer"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,pe],encapsulation:2})}return o})();var se=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-menu-panel-doc"]],standalone:false,decls:195,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoMenuPanelItem[]"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoMenuPanelModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-menu-panel."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoMenuPanelComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,`Este \xE9 um componente de menu lateral composto apenas por \xEDcones e com um n\xEDvel, utilizado para navega\xE7\xE3o
em p\xE1ginas internas, externas da aplica\xE7\xE3o ou aciona uma a\xE7\xE3o.`),og(),Cl(15,"p"),qx(16,"O componente "),Cl(17,"code"),qx(18,"po-menu-panel"),og(),qx(19," recebe uma lista de objetos do tipo "),Cl(20,"code"),qx(21,"MenuPanelItem"),og(),qx(22,` com as informa\xE7\xF5es dos
itens de menu como textos, links para redirecionamento, a\xE7\xF5es e \xEDcones. Para o menu funcionar corretamente \xE9 necess\xE1rio importar o `),Cl(23,"code"),qx(24,"RouterModule"),og(),qx(25," e "),Cl(26,"code"),qx(27,"Routes"),og(),qx(28," do m\xF3dulo principal de sua aplica\xE7\xE3o:"),og(),Cl(29,"pre")(30,"code"),qx(31,`import { RouterModule, Routes } from '@angular/router';

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
`),og()(),Cl(32,"p"),qx(33,"Al\xE9m disso \xE9 necess\xE1rio criar um m\xF3dulo configurando as rotas da aplica\xE7\xE3o."),og(),Cl(34,"pre")(35,"code"),qx(36,`import { NgModule } from '@angular/core';

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
`),og()()(),Cl(37,"div",6)(38,"h4",7),qx(39,"Seletor"),og(),Cl(40,"pre",8),qx(41,`<po-menu-panel
    p-logo="string"
    p-logo-alt="string"
    p-menus="PoMenuPanelItem[]" >
</po-menu-panel>
`),og()(),Cl(42,"h4",9),qx(43,"Propriedades"),og(),Cl(44,"table",10)(45,"tr",11)(46,"th",12),qx(47,"Nome"),og(),Cl(48,"th",12),qx(49,"Tipo"),og(),Cl(50,"th",12),qx(51,"Padr\xE3o"),og(),Cl(52,"th",12),qx(53,"Descri\xE7\xE3o"),og()(),Cl(54,"tr",13)(55,"td",14)(56,"div",15)(57,"span",16),qx(58," p-logo"),Hl(59,"br"),og()()(),Cl(60,"td",17)(61,"code",18),qx(62,"string"),og()(),Cl(63,"td",19),qx(64,"-"),og(),Cl(65,"td",20)(66,"em")(67,"strong"),qx(68,"(opcional)"),og()(),Cl(69,"p"),qx(70,"Caminho para a logomarca localizada na parte superior do menu."),og(),Cl(71,"blockquote")(72,"p")(73,"strong"),qx(74,"Importante"),og(),qx(75,`
Caso seja indefinida ser\xE1 aplicada a imagem default do PO UI.`),og()()()(),Cl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),qx(80," p-logo-alt"),Hl(81,"br"),og()()(),Cl(82,"td",17)(83,"code",18),qx(84,"string"),og()(),Cl(85,"td",19)(86,"p")(87,"code"),qx(88,"Logomarca in\xEDcio"),og()()(),Cl(89,"td",20)(90,"em")(91,"strong"),qx(92,"(opcional)"),og()(),Cl(93,"p"),qx(94,"Define o texto alternativo para a logomarca."),og(),Cl(95,"blockquote")(96,"p")(97,"strong"),qx(98,"Importante"),og(),qx(99,`
Caso esta propriedade n\xE3o seja definida o texto padr\xE3o ser\xE1 "Logomarca in\xEDcio".`),og()()()(),Cl(100,"tr",13)(101,"td",14)(102,"div",15)(103,"span",16),qx(104," p-menus"),Hl(105,"br"),og()()(),Cl(106,"td",17)(107,"code",21),qx(108,"PoMenuPanelItem[]"),og()(),Cl(109,"td",19),qx(110,"-"),og(),Cl(111,"td",20)(112,"p"),qx(113,"Lista dos itens do "),Cl(114,"code"),qx(115,"po-menu-panel"),og(),qx(116,". Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),og()()()(),Cl(117,"h3"),qx(118,"Interfaces"),og(),Cl(119,"h4",22)(120,"code",5),qx(121,"PoMenuPanelItem"),og()(),Cl(122,"div",2)(123,"p"),qx(124,"Interface para os itens de menu do componente "),Cl(125,"code"),qx(126,"po-menu-panel"),og(),qx(127,"."),og()(),Cl(128,"h4",9),qx(129,"Propriedades"),og(),Cl(130,"table",10)(131,"tr",11)(132,"th",12),qx(133,"Nome"),og(),Cl(134,"th",12),qx(135,"Tipo"),og(),Cl(136,"th",12),qx(137,"Descri\xE7\xE3o"),og()(),Cl(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),qx(142," action"),Hl(143,"br"),og()()(),Cl(144,"td",17)(145,"code",23),qx(146,"Function"),og()(),Cl(147,"td",20)(148,"em")(149,"strong"),qx(150,"(opcional)"),og()(),Cl(151,"p"),qx(152,"A\xE7\xE3o personalizada para clique do item de menu."),og()()(),Cl(153,"tr",13)(154,"td",14)(155,"div",15)(156,"span",16),qx(157," icon"),Hl(158,"br"),og()()(),Cl(159,"td",17)(160,"code",18),qx(161,"string"),og()(),Cl(162,"td",20)(163,"p"),qx(164,"\xCDcone para o item de menu, os "),Cl(165,"a",24),qx(166,"\xEDcones aceitos"),og(),qx(167," s\xE3o os definidos no guia de estilo da PO."),og()()(),Cl(168,"tr",13)(169,"td",14)(170,"div",15)(171,"span",16),qx(172," label"),Hl(173,"br"),og()()(),Cl(174,"td",17)(175,"code",18),qx(176,"string"),og()(),Cl(177,"td",20)(178,"p"),qx(179,"Texto do item de menu."),og()()(),Cl(180,"tr",13)(181,"td",14)(182,"div",15)(183,"span",16),qx(184," link"),Hl(185,"br"),og()()(),Cl(186,"td",17)(187,"code",18),qx(188,"string"),og()(),Cl(189,"td",20)(190,"em")(191,"strong"),qx(192,"(opcional)"),og()(),Cl(193,"p"),qx(194,"Link para redirecionamento no click do item do menu, podendo ser um link interno ou externo."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var re=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Menu Panel",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-menu-panel-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-menu-panel-basic-view")(6,"sample-po-menu-panel-labs-view")(7,"sample-po-menu-panel-customer-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ae,le,me,se],encapsulation:2})}return o})();var we=[{path:"",component:re}],de=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[bL.forChild(we),bL]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue$1({imports:[ca,de]})}return o})();export{Qe as DocPoMenuPanelModule};