import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,aE as Bp,aj as ti,J as wl,N as Ul,R as ng,a$ as fO,ag as fP,aS as Vd,aT as Rd,z as Ux,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bB as ga,al as lx,am as pw,an as $0,ap as hw,aq as G0,ct as ma,aX as _x,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ie=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"sample-container"]],template:function(a,o){a&1&&(wl(0,"div",0),Ul(1,"po-loading-overlay"),ng());},dependencies:[ti],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var ve=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Loading Overlay Basic"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-loading-overlay-basic"),ng(),Ul(29,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ie],encapsulation:2})}return i})();var re=(()=>{class i{properties=[];text;size;sizesOptions=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}];propertiesOptions=[{value:"screenLock",label:"Screen Lock"}];ngOnInit(){this.restore();}onChangeCheckbox(p){p.includes("screenLock")&&setTimeout(()=>{this.properties=[];},2e3);}restore(){this.size="lg",this.text=null;}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs"]],standalone:false,decls:13,vars:8,consts:[["formProperties","ngForm"],[1,"sample-container"],[3,"p-screen-lock","p-text","p-size"],[1,"po-row"],["name","text","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(a,o){if(a&1){let d=lx();wl(0,"div",1),Ul(1,"po-loading-overlay",2),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",3)(6,"po-input",4),pw("ngModelChange",function(r){return Qy(d),$x(o.text,r)||(o.text=r),Jy(r)}),ng(),$0(),wl(7,"po-checkbox-group",5),pw("ngModelChange",function(r){return Qy(d),$x(o.properties,r)||(o.properties=r),Jy(r)}),ut("p-change",function(r){return o.onChangeCheckbox(r)}),ng(),$0(),ng(),wl(8,"div",3)(9,"po-radio-group",6),pw("ngModelChange",function(r){return Qy(d),$x(o.size,r)||(o.size=r),Jy(r)}),ng(),$0(),ng(),wl(10,"div",3)(11,"div",7)(12,"po-button",8),ut("p-click",function(){return o.restore()}),ng()()()();}a&2&&(Pp(),YE("p-screen-lock",o.properties==null?null:o.properties.includes("screenLock"))("p-text",o.text)("p-size",o.size),Pp(5),hw("ngModel",o.text),G0(),Pp(),hw("ngModel",o.properties),YE("p-options",o.propertiesOptions),G0(),Pp(2),hw("ngModel",o.size),YE("p-options",o.sizesOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ga,ti],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Loading Overlay Labs"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="sample-container">
  <po-loading-overlay
    [p-screen-lock]="$safeNavigationMigration(properties?.includes('screenLock'))"
    [p-text]="text"
    [p-size]="size"
  >
  </po-loading-overlay>
</div>

<po-divider />

<form #formProperties="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="text" [(ngModel)]="text" p-label="Text"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="onChangeCheckbox($event)"
    >
    </po-checkbox-group>
  </div>
  <div class="po-row">
    <po-radio-group class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <div class="po-md-3">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-labs',
  templateUrl: './sample-po-loading-overlay-labs.component.html',
  styleUrls: ['./sample-po-loading-overlay-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayLabsComponent implements OnInit {
  properties: Array<string> = [];
  text: string;
  size: string;
  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'screenLock', label: 'Screen Lock' }];

  ngOnInit() {
    this.restore();
  }

  onChangeCheckbox(checkbox: Array<string>) {
    if (checkbox.includes('screenLock')) {
      setTimeout(() => {
        this.properties = [];
      }, 2000);
    }
  }

  restore() {
    this.size = 'lg';
    this.text = null;
  }
}
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-loading-overlay-labs"),ng(),Ul(29,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ye,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return i})();var se=(()=>{class i{poNotification=f(Bp);environment={urlServer:"",urlDB:"",userDB:"",passwordDB:""};isHideLoading=true;connectionTest(){let p="Connection ok";this.isHideLoading=false,setTimeout(()=>{this.isHideLoading=true,this.poNotification.success(p);},450);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test"]],standalone:false,decls:11,vars:6,consts:[["formConfig","ngForm"],[3,"hidden"],[1,"po-row"],["name","urlServer","p-clean","","p-label","URL Server","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlDB","p-clean","","p-label","URL Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","userDB","p-clean","","p-label","User Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","passwordDB","p-clean","","p-label","Password Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Connect",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,o){if(a&1){let d=lx();wl(0,"form",null,0)(2,"div"),Ul(3,"po-loading-overlay",1),ng(),wl(4,"div",2)(5,"po-input",3),pw("ngModelChange",function(r){return Qy(d),$x(o.environment.urlServer,r)||(o.environment.urlServer=r),Jy(r)}),ng(),$0(),wl(6,"po-input",4),pw("ngModelChange",function(r){return Qy(d),$x(o.environment.urlDB,r)||(o.environment.urlDB=r),Jy(r)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(r){return Qy(d),$x(o.environment.userDB,r)||(o.environment.userDB=r),Jy(r)}),ng(),$0(),wl(8,"po-password",6),pw("ngModelChange",function(r){return Qy(d),$x(o.environment.passwordDB,r)||(o.environment.passwordDB=r),Jy(r)}),ng(),$0(),ng(),wl(9,"div",2)(10,"po-button",7),ut("p-click",function(){Qy(d);let r=_x(1);return o.connectionTest(),Jy(r.reset())}),ng()()();}if(a&2){let d=_x(1);Pp(3),YE("hidden",o.isHideLoading),Pp(2),hw("ngModel",o.environment.urlServer),G0(),Pp(),hw("ngModel",o.environment.urlDB),G0(),Pp(),hw("ngModel",o.environment.userDB),G0(),Pp(),hw("ngModel",o.environment.passwordDB),G0(),Pp(2),YE("p-disabled",d.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,Yo,ma,ti],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Loading Overlay - Connection Test"),ng(),wl(4,"a",2),ut("click",function(){return o.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #formConfig="ngForm">
  <div>
    <po-loading-overlay [hidden]="isHideLoading"></po-loading-overlay>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="urlServer"
      [(ngModel)]="environment.urlServer"
      p-clean
      p-label="URL Server"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="urlDB" [(ngModel)]="environment.urlDB" p-clean p-label="URL Database" p-required>
    </po-input>

    <po-input class="po-md-6" name="userDB" [(ngModel)]="environment.userDB" p-clean p-label="User Database" p-required>
    </po-input>

    <po-password
      class="po-md-6"
      name="passwordDB"
      [(ngModel)]="environment.passwordDB"
      p-clean
      p-label="Password Database"
      p-required
    >
    </po-password>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Connect"
      [p-disabled]="formConfig.invalid"
      (p-click)="connectionTest(); formConfig.reset()"
    >
    </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-connection-test',
  templateUrl: 'sample-po-loading-overlay-connection-test.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayConnectionTestComponent {
  private poNotification = inject(PoNotificationService);

  environment = {
    urlServer: '',
    urlDB: '',
    userDB: '',
    passwordDB: ''
  };

  isHideLoading = true;

  connectionTest() {
    const message = 'Connection ok';

    this.isHideLoading = false;

    setTimeout(() => {
      this.isHideLoading = true;
      this.poNotification.success(message);
    }, 450);
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-loading-overlay-connection-test"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+o.sampleCodeButtonIcon),Pp(),cg(" ",o.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,o.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return i})();var de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-doc"]],standalone:false,decls:255,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"]],template:function(a,o){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoLoadingModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-loading-overlay."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoLoadingOverlayComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"Este componente mostra ao usu\xE1rio uma imagem de "),wl(15,"em"),Ux(16,"loading"),ng(),Ux(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),ng(),wl(18,"h4"),Ux(19,"Tokens customiz\xE1veis"),ng(),wl(20,"p"),Ux(21,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(22,"br"),Ux(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(24,"code"),Ux(25,".po-loading"),ng()(),wl(26,"blockquote")(27,"p"),Ux(28,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(29,"a",6),Ux(30,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(31,"."),ng()(),wl(32,"table")(33,"thead")(34,"tr")(35,"th"),Ux(36,"Propriedade"),ng(),wl(37,"th"),Ux(38,"Descri\xE7\xE3o"),ng(),wl(39,"th"),Ux(40,"Valor Padr\xE3o"),ng()()(),wl(41,"tbody")(42,"tr")(43,"td")(44,"strong"),Ux(45,"Default Values"),ng()(),Ul(46,"td")(47,"td"),ng(),wl(48,"tr")(49,"td")(50,"code"),Ux(51,"--font-family"),ng()(),wl(52,"td"),Ux(53,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(54,"td")(55,"code"),Ux(56,"var(--font-family-theme)"),ng()()(),wl(57,"tr")(58,"td")(59,"code"),Ux(60,"--font-weight"),ng()(),wl(61,"td"),Ux(62,"Peso da fonte"),ng(),wl(63,"td")(64,"code"),Ux(65,"var(--font-weight-normal)"),ng()()(),wl(66,"tr")(67,"td")(68,"code"),Ux(69,"--text-color"),ng()(),wl(70,"td"),Ux(71,"Cor do texto"),ng(),wl(72,"td")(73,"code"),Ux(74,"var(--color-neutral-dark-70)"),ng()()(),wl(75,"tr")(76,"td")(77,"code"),Ux(78,"--border-radius"),ng()(),wl(79,"td"),Ux(80,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),ng(),wl(81,"td")(82,"code"),Ux(83,"var(--border-radius-md)"),ng()()(),wl(84,"tr")(85,"td")(86,"code"),Ux(87,"--border-width"),ng()(),wl(88,"td"),Ux(89,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),ng(),wl(90,"td")(91,"code"),Ux(92,"var(--border-width-sm)"),ng()()(),wl(93,"tr")(94,"td")(95,"code"),Ux(96,"--border-color"),ng()(),wl(97,"td"),Ux(98,"Cor da borda"),ng(),wl(99,"td")(100,"code"),Ux(101,"var(--color-neutral-light-20)"),ng()()(),wl(102,"tr")(103,"td")(104,"code"),Ux(105,"--background"),ng()(),wl(106,"td"),Ux(107,"Cor de background"),ng(),wl(108,"td")(109,"code"),Ux(110,"var(--color-neutral-light-00)"),ng()()(),wl(111,"tr")(112,"td")(113,"code"),Ux(114,"--shadow"),ng()(),wl(115,"td"),Ux(116,"Cont\xE9m o valor da sombra do elemento"),ng(),wl(117,"td")(118,"code"),Ux(119,"var(--shadow-md)"),ng()()(),wl(120,"tr")(121,"td")(122,"strong"),Ux(123,"po-loading-icon"),ng()(),Ul(124,"td")(125,"td"),ng(),wl(126,"tr")(127,"td")(128,"code"),Ux(129,"--color"),ng()(),wl(130,"td"),Ux(131,"Cor principal do spinner"),ng(),wl(132,"td")(133,"code"),Ux(134,"var(--color-action-default)"),ng()()()()()(),wl(135,"div",7)(136,"h4",8),Ux(137,"Seletor"),ng(),wl(138,"pre",9),Ux(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),ng()(),wl(140,"h4",10),Ux(141,"Propriedades"),ng(),wl(142,"table",11)(143,"tr",12)(144,"th",13),Ux(145,"Nome"),ng(),wl(146,"th",13),Ux(147,"Tipo"),ng(),wl(148,"th",13),Ux(149,"Padr\xE3o"),ng(),wl(150,"th",13),Ux(151,"Descri\xE7\xE3o"),ng()(),wl(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),Ux(156," p-screen-lock"),Ul(157,"br"),ng()()(),wl(158,"td",18)(159,"code",19),Ux(160,"boolean"),ng()(),wl(161,"td",20)(162,"p")(163,"code"),Ux(164,"false"),ng()()(),wl(165,"td",21)(166,"em")(167,"strong"),Ux(168,"(opcional)"),ng()(),wl(169,"p"),Ux(170,"Define se o "),wl(171,"em"),Ux(172,"overlay"),ng(),Ux(173," ser\xE1 aplicado a um "),wl(174,"em"),Ux(175,"container"),ng(),Ux(176," ou \xE0 p\xE1gina inteira."),ng(),wl(177,"p"),Ux(178,"Para utilizar o componente como um "),wl(179,"em"),Ux(180,"container"),ng(),Ux(181,", o elemento pai dever\xE1 receber uma posi\xE7\xE3o relativa, por exemplo:"),ng(),wl(182,"pre")(183,"code"),Ux(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),ng()()()(),wl(185,"tr",14)(186,"td",15)(187,"div",16)(188,"span",17),Ux(189," p-size"),Ul(190,"br"),ng()()(),wl(191,"td",18)(192,"code",22),Ux(193,"string"),ng()(),wl(194,"td",20)(195,"p")(196,"code"),Ux(197,"lg"),ng()()(),wl(198,"td",21)(199,"em")(200,"strong"),Ux(201,"(opcional)"),ng()(),wl(202,"p"),Ux(203,"Define o tamanho do componente com base no tamanho do \xEDcone de "),wl(204,"em"),Ux(205,"loading"),ng(),Ux(206,"."),ng(),wl(207,"p"),Ux(208,"Tamanhos dispon\xEDveis para o "),wl(209,"em"),Ux(210,"loading"),ng(),Ux(211,":"),ng(),wl(212,"ul")(213,"li")(214,"code"),Ux(215,"xs"),ng(),Ux(216,": 1rem"),ng(),wl(217,"li")(218,"code"),Ux(219,"sm"),ng(),Ux(220,": 1.5rem"),ng(),wl(221,"li")(222,"code"),Ux(223,"md"),ng(),Ux(224,": 3rem"),ng(),wl(225,"li")(226,"code"),Ux(227,"lg"),ng(),Ux(228,": 5rem (valor padr\xE3o)"),ng()()()(),wl(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),Ux(233," p-text"),Ul(234,"br"),ng()()(),wl(235,"td",18)(236,"code",22),Ux(237,"string"),ng()(),wl(238,"td",20)(239,"p")(240,"code"),Ux(241,"Carregando"),ng()()(),wl(242,"td",21)(243,"em")(244,"strong"),Ux(245,"(opcional)"),ng()(),wl(246,"p"),Ux(247,"Texto a ser exibido no componente."),ng(),wl(248,"blockquote")(249,"p"),Ux(250,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),wl(251,"a",23)(252,"strong"),Ux(253,"PoI18n"),ng()(),Ux(254," ou navegador."),ng()()()()()());},dependencies:[fP],encapsulation:2})}return i})();var ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Loading Overlay",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return o.changeTab("doc")}),Ul(3,"sample-po-loading-overlay-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return o.changeTab("web")}),Ul(5,"sample-po-loading-overlay-basic-view")(6,"sample-po-loading-overlay-labs-view")(7,"sample-po-loading-overlay-connection-test-view"),ng()()()),a&2&&(YE("p-actions",o.actions),Pp(2),YE("p-active",o.activeTab==="doc"),Pp(2),YE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[D3,Vd,Rd,le,pe,me,de],encapsulation:2})}return i})();var Te=[{path:"",component:ce}],ge=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[vL.forChild(Te),vL]})}return i})();var lt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[u5,ge]})}return i})();export{lt as DocPoLoadingOverlayModule};