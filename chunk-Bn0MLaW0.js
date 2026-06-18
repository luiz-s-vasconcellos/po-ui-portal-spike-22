import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,aW as Yp,aK as sS,H as Sl,M as Wl,O as sg,an as bO,aH as Ga,b8 as Gme,b9 as Qme,J as Jx,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,cZ as Whe,bd as xx,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var ne=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"sample-container"]],template:function(a,o){a&1&&(Sl(0,"div",0),Wl(1,"po-loading-overlay"),sg());},dependencies:[sS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Loading Overlay Basic"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-loading-overlay-basic"),sg(),Wl(29,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ne],encapsulation:2})}return i})();var ae=(()=>{class i{properties=[];text;size;sizesOptions=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}];propertiesOptions=[{value:"screenLock",label:"Screen Lock"}];ngOnInit(){this.restore();}onChangeCheckbox(p){p.includes("screenLock")&&setTimeout(()=>{this.properties=[];},2e3);}restore(){this.size="lg",this.text=null;}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs"]],standalone:false,decls:13,vars:8,consts:[["formProperties","ngForm"],[1,"sample-container"],[3,"p-screen-lock","p-text","p-size"],[1,"po-row"],["name","text","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(a,o){if(a&1){let d=Ex();Sl(0,"div",1),Wl(1,"po-loading-overlay",2),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",3)(6,"po-input",4),Ew("ngModelChange",function(r){return Xy(d),tN(o.text,r)||(o.text=r),Qy(r)}),sg(),JA(),Sl(7,"po-checkbox-group",5),Ew("ngModelChange",function(r){return Xy(d),tN(o.properties,r)||(o.properties=r),Qy(r)}),ht("p-change",function(r){return o.onChangeCheckbox(r)}),sg(),JA(),sg(),Sl(8,"div",3)(9,"po-radio-group",6),Ew("ngModelChange",function(r){return Xy(d),tN(o.size,r)||(o.size=r),Qy(r)}),sg(),JA(),sg(),Sl(10,"div",3)(11,"div",7)(12,"po-button",8),ht("p-click",function(){return o.restore()}),sg()()()();}a&2&&(Vp(),tw("p-screen-lock",o.properties==null?null:o.properties.includes("screenLock"))("p-text",o.text)("p-size",o.size),Vp(5),Dw("ngModel",o.text),t0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),t0(),Vp(2),Dw("ngModel",o.size),tw("p-options",o.sizesOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,sS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Loading Overlay Labs"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="sample-container">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-loading-overlay-labs"),sg(),Wl(29,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ce,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ae],encapsulation:2})}return i})();var re=(()=>{class i{poNotification=f(Yp);environment={urlServer:"",urlDB:"",userDB:"",passwordDB:""};isHideLoading=true;connectionTest(){let p="Connection ok";this.isHideLoading=false,setTimeout(()=>{this.isHideLoading=true,this.poNotification.success(p);},450);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test"]],standalone:false,decls:11,vars:6,consts:[["formConfig","ngForm"],[3,"hidden"],[1,"po-row"],["name","urlServer","p-clean","","p-label","URL Server","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlDB","p-clean","","p-label","URL Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","userDB","p-clean","","p-label","User Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","passwordDB","p-clean","","p-label","Password Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Connect",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,o){if(a&1){let d=Ex();Sl(0,"form",null,0)(2,"div"),Wl(3,"po-loading-overlay",1),sg(),Sl(4,"div",2)(5,"po-input",3),Ew("ngModelChange",function(r){return Xy(d),tN(o.environment.urlServer,r)||(o.environment.urlServer=r),Qy(r)}),sg(),JA(),Sl(6,"po-input",4),Ew("ngModelChange",function(r){return Xy(d),tN(o.environment.urlDB,r)||(o.environment.urlDB=r),Qy(r)}),sg(),JA(),Sl(7,"po-input",5),Ew("ngModelChange",function(r){return Xy(d),tN(o.environment.userDB,r)||(o.environment.userDB=r),Qy(r)}),sg(),JA(),Sl(8,"po-password",6),Ew("ngModelChange",function(r){return Xy(d),tN(o.environment.passwordDB,r)||(o.environment.passwordDB=r),Qy(r)}),sg(),JA(),sg(),Sl(9,"div",2)(10,"po-button",7),ht("p-click",function(){Xy(d);let r=xx(1);return o.connectionTest(),Qy(r.reset())}),sg()()();}if(a&2){let d=xx(1);Vp(3),tw("hidden",o.isHideLoading),Vp(2),Dw("ngModel",o.environment.urlServer),t0(),Vp(),Dw("ngModel",o.environment.urlDB),t0(),Vp(),Dw("ngModel",o.environment.userDB),t0(),Vp(),Dw("ngModel",o.environment.passwordDB),t0(),Vp(2),tw("p-disabled",d.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,F3,Whe,sS],encapsulation:2,changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Loading Overlay - Connection Test"),sg(),Sl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #formConfig="ngForm">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-loading-overlay-connection-test"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ye,o.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,re],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-doc"]],standalone:false,decls:255,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"]],template:function(a,o){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoLoadingModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-loading-overlay."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoLoadingOverlayComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"Este componente mostra ao usu\xE1rio uma imagem de "),Sl(15,"em"),Jx(16,"loading"),sg(),Jx(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),sg(),Sl(18,"h4"),Jx(19,"Tokens customiz\xE1veis"),sg(),Sl(20,"p"),Jx(21,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(22,"br"),Jx(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(24,"code"),Jx(25,".po-loading"),sg()(),Sl(26,"blockquote")(27,"p"),Jx(28,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(29,"a",6),Jx(30,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(31,"."),sg()(),Sl(32,"table")(33,"thead")(34,"tr")(35,"th"),Jx(36,"Propriedade"),sg(),Sl(37,"th"),Jx(38,"Descri\xE7\xE3o"),sg(),Sl(39,"th"),Jx(40,"Valor Padr\xE3o"),sg()()(),Sl(41,"tbody")(42,"tr")(43,"td")(44,"strong"),Jx(45,"Default Values"),sg()(),Wl(46,"td")(47,"td"),sg(),Sl(48,"tr")(49,"td")(50,"code"),Jx(51,"--font-family"),sg()(),Sl(52,"td"),Jx(53,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(54,"td")(55,"code"),Jx(56,"var(--font-family-theme)"),sg()()(),Sl(57,"tr")(58,"td")(59,"code"),Jx(60,"--font-weight"),sg()(),Sl(61,"td"),Jx(62,"Peso da fonte"),sg(),Sl(63,"td")(64,"code"),Jx(65,"var(--font-weight-normal)"),sg()()(),Sl(66,"tr")(67,"td")(68,"code"),Jx(69,"--text-color"),sg()(),Sl(70,"td"),Jx(71,"Cor do texto"),sg(),Sl(72,"td")(73,"code"),Jx(74,"var(--color-neutral-dark-70)"),sg()()(),Sl(75,"tr")(76,"td")(77,"code"),Jx(78,"--border-radius"),sg()(),Sl(79,"td"),Jx(80,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Sl(81,"td")(82,"code"),Jx(83,"var(--border-radius-md)"),sg()()(),Sl(84,"tr")(85,"td")(86,"code"),Jx(87,"--border-width"),sg()(),Sl(88,"td"),Jx(89,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Sl(90,"td")(91,"code"),Jx(92,"var(--border-width-sm)"),sg()()(),Sl(93,"tr")(94,"td")(95,"code"),Jx(96,"--border-color"),sg()(),Sl(97,"td"),Jx(98,"Cor da borda"),sg(),Sl(99,"td")(100,"code"),Jx(101,"var(--color-neutral-light-20)"),sg()()(),Sl(102,"tr")(103,"td")(104,"code"),Jx(105,"--background"),sg()(),Sl(106,"td"),Jx(107,"Cor de background"),sg(),Sl(108,"td")(109,"code"),Jx(110,"var(--color-neutral-light-00)"),sg()()(),Sl(111,"tr")(112,"td")(113,"code"),Jx(114,"--shadow"),sg()(),Sl(115,"td"),Jx(116,"Cont\xE9m o valor da sombra do elemento"),sg(),Sl(117,"td")(118,"code"),Jx(119,"var(--shadow-md)"),sg()()(),Sl(120,"tr")(121,"td")(122,"strong"),Jx(123,"po-loading-icon"),sg()(),Wl(124,"td")(125,"td"),sg(),Sl(126,"tr")(127,"td")(128,"code"),Jx(129,"--color"),sg()(),Sl(130,"td"),Jx(131,"Cor principal do spinner"),sg(),Sl(132,"td")(133,"code"),Jx(134,"var(--color-action-default)"),sg()()()()()(),Sl(135,"div",7)(136,"h4",8),Jx(137,"Seletor"),sg(),Sl(138,"pre",9),Jx(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),sg()(),Sl(140,"h4",10),Jx(141,"Propriedades"),sg(),Sl(142,"table",11)(143,"tr",12)(144,"th",13),Jx(145,"Nome"),sg(),Sl(146,"th",13),Jx(147,"Tipo"),sg(),Sl(148,"th",13),Jx(149,"Padr\xE3o"),sg(),Sl(150,"th",13),Jx(151,"Descri\xE7\xE3o"),sg()(),Sl(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),Jx(156," p-screen-lock"),Wl(157,"br"),sg()()(),Sl(158,"td",18)(159,"code",19),Jx(160,"boolean"),sg()(),Sl(161,"td",20)(162,"p")(163,"code"),Jx(164,"false"),sg()()(),Sl(165,"td",21)(166,"em")(167,"strong"),Jx(168,"(opcional)"),sg()(),Sl(169,"p"),Jx(170,"Define se o "),Sl(171,"em"),Jx(172,"overlay"),sg(),Jx(173," ser\xE1 aplicado a um "),Sl(174,"em"),Jx(175,"container"),sg(),Jx(176," ou \xE0 p\xE1gina inteira."),sg(),Sl(177,"p"),Jx(178,"Para utilizar o componente como um "),Sl(179,"em"),Jx(180,"container"),sg(),Jx(181,", o elemento pai dever\xE1 receber uma posi\xE7\xE3o relativa, por exemplo:"),sg(),Sl(182,"pre")(183,"code"),Jx(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),sg()()()(),Sl(185,"tr",14)(186,"td",15)(187,"div",16)(188,"span",17),Jx(189," p-size"),Wl(190,"br"),sg()()(),Sl(191,"td",18)(192,"code",22),Jx(193,"string"),sg()(),Sl(194,"td",20)(195,"p")(196,"code"),Jx(197,"lg"),sg()()(),Sl(198,"td",21)(199,"em")(200,"strong"),Jx(201,"(opcional)"),sg()(),Sl(202,"p"),Jx(203,"Define o tamanho do componente com base no tamanho do \xEDcone de "),Sl(204,"em"),Jx(205,"loading"),sg(),Jx(206,"."),sg(),Sl(207,"p"),Jx(208,"Tamanhos dispon\xEDveis para o "),Sl(209,"em"),Jx(210,"loading"),sg(),Jx(211,":"),sg(),Sl(212,"ul")(213,"li")(214,"code"),Jx(215,"xs"),sg(),Jx(216,": 1rem"),sg(),Sl(217,"li")(218,"code"),Jx(219,"sm"),sg(),Jx(220,": 1.5rem"),sg(),Sl(221,"li")(222,"code"),Jx(223,"md"),sg(),Jx(224,": 3rem"),sg(),Sl(225,"li")(226,"code"),Jx(227,"lg"),sg(),Jx(228,": 5rem (valor padr\xE3o)"),sg()()()(),Sl(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),Jx(233," p-text"),Wl(234,"br"),sg()()(),Sl(235,"td",18)(236,"code",22),Jx(237,"string"),sg()(),Sl(238,"td",20)(239,"p")(240,"code"),Jx(241,"Carregando"),sg()()(),Sl(242,"td",21)(243,"em")(244,"strong"),Jx(245,"(opcional)"),sg()(),Sl(246,"p"),Jx(247,"Texto a ser exibido no componente."),sg(),Sl(248,"blockquote")(249,"p"),Jx(250,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(251,"a",23)(252,"strong"),Jx(253,"PoI18n"),sg()(),Jx(254," ou navegador."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Loading Overlay",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Wl(3,"sample-po-loading-overlay-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Wl(5,"sample-po-loading-overlay-basic-view")(6,"sample-po-loading-overlay-labs-view")(7,"sample-po-loading-overlay-connection-test-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ie,le,pe,se],encapsulation:2})}return i})();var xe=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[pL.forChild(xe),pL]})}return i})();var Ye=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,de]})}return i})();export{Ye as DocPoLoadingOverlayModule};