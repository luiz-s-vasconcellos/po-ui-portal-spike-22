import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,aW as Yp,aK as aS,T as Tl,J as Gl,L as sg,an as TO,aH as Ga,b8 as Hme,b9 as Gme,z as tN,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,cZ as Bhe,bd as Ox,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var ne=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"sample-container"]],template:function(a,o){a&1&&(Tl(0,"div",0),Gl(1,"po-loading-overlay"),sg());},dependencies:[aS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Loading Overlay Basic"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-loading-overlay-basic"),sg(),Gl(29,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ge,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ne],encapsulation:2})}return i})();var ae=(()=>{class i{properties=[];text;size;sizesOptions=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}];propertiesOptions=[{value:"screenLock",label:"Screen Lock"}];ngOnInit(){this.restore();}onChangeCheckbox(p){p.includes("screenLock")&&setTimeout(()=>{this.properties=[];},2e3);}restore(){this.size="lg",this.text=null;}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs"]],standalone:false,decls:13,vars:8,consts:[["formProperties","ngForm"],[1,"sample-container"],[3,"p-screen-lock","p-text","p-size"],[1,"po-row"],["name","text","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(a,o){if(a&1){let d=Cx();Tl(0,"div",1),Gl(1,"po-loading-overlay",2),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",3)(6,"po-input",4),Ew("ngModelChange",function(r){return Ky(d),rN(o.text,r)||(o.text=r),Xy(r)}),sg(),t0(),Tl(7,"po-checkbox-group",5),Ew("ngModelChange",function(r){return Ky(d),rN(o.properties,r)||(o.properties=r),Xy(r)}),ht("p-change",function(r){return o.onChangeCheckbox(r)}),sg(),t0(),sg(),Tl(8,"div",3)(9,"po-radio-group",6),Ew("ngModelChange",function(r){return Ky(d),rN(o.size,r)||(o.size=r),Xy(r)}),sg(),t0(),sg(),Tl(10,"div",3)(11,"div",7)(12,"po-button",8),ht("p-click",function(){return o.restore()}),sg()()()();}a&2&&(Vp(),tw("p-screen-lock",o.properties==null?null:o.properties.includes("screenLock"))("p-text",o.text)("p-size",o.size),Vp(5),Dw("ngModel",o.text),r0(),Vp(),Dw("ngModel",o.properties),tw("p-options",o.propertiesOptions),r0(),Vp(2),Dw("ngModel",o.size),tw("p-options",o.sizesOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Sde,aS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Loading Overlay Labs"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="sample-container">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-loading-overlay-labs"),sg(),Gl(29,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ce,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ae],encapsulation:2})}return i})();var re=(()=>{class i{poNotification=f(Yp);environment={urlServer:"",urlDB:"",userDB:"",passwordDB:""};isHideLoading=true;connectionTest(){let p="Connection ok";this.isHideLoading=false,setTimeout(()=>{this.isHideLoading=true,this.poNotification.success(p);},450);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test"]],standalone:false,decls:11,vars:6,consts:[["formConfig","ngForm"],[3,"hidden"],[1,"po-row"],["name","urlServer","p-clean","","p-label","URL Server","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlDB","p-clean","","p-label","URL Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","userDB","p-clean","","p-label","User Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","passwordDB","p-clean","","p-label","Password Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Connect",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,o){if(a&1){let d=Cx();Tl(0,"form",null,0)(2,"div"),Gl(3,"po-loading-overlay",1),sg(),Tl(4,"div",2)(5,"po-input",3),Ew("ngModelChange",function(r){return Ky(d),rN(o.environment.urlServer,r)||(o.environment.urlServer=r),Xy(r)}),sg(),t0(),Tl(6,"po-input",4),Ew("ngModelChange",function(r){return Ky(d),rN(o.environment.urlDB,r)||(o.environment.urlDB=r),Xy(r)}),sg(),t0(),Tl(7,"po-input",5),Ew("ngModelChange",function(r){return Ky(d),rN(o.environment.userDB,r)||(o.environment.userDB=r),Xy(r)}),sg(),t0(),Tl(8,"po-password",6),Ew("ngModelChange",function(r){return Ky(d),rN(o.environment.passwordDB,r)||(o.environment.passwordDB=r),Xy(r)}),sg(),t0(),sg(),Tl(9,"div",2)(10,"po-button",7),ht("p-click",function(){Ky(d);let r=Ox(1);return o.connectionTest(),Xy(r.reset())}),sg()()();}if(a&2){let d=Ox(1);Vp(3),tw("hidden",o.isHideLoading),Vp(2),Dw("ngModel",o.environment.urlServer),r0(),Vp(),Dw("ngModel",o.environment.urlDB),r0(),Vp(),Dw("ngModel",o.environment.userDB),r0(),Vp(),Dw("ngModel",o.environment.passwordDB),r0(),Vp(2),tw("p-disabled",d.invalid);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,O3,Bhe,aS],encapsulation:2,changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Loading Overlay - Connection Test"),sg(),Tl(4,"a",2),ht("click",function(){return o.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form #formConfig="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-loading-overlay-connection-test"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+o.sampleCodeButtonIcon),Vp(),fg(" ",o.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ye,o.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,re],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-doc"]],standalone:false,decls:255,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"]],template:function(a,o){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoLoadingModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-loading-overlay."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoLoadingOverlayComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"Este componente mostra ao usu\xE1rio uma imagem de "),Tl(15,"em"),tN(16,"loading"),sg(),tN(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),sg(),Tl(18,"h4"),tN(19,"Tokens customiz\xE1veis"),sg(),Tl(20,"p"),tN(21,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(22,"br"),tN(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(24,"code"),tN(25,".po-loading"),sg()(),Tl(26,"blockquote")(27,"p"),tN(28,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(29,"a",6),tN(30,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(31,"."),sg()(),Tl(32,"table")(33,"thead")(34,"tr")(35,"th"),tN(36,"Propriedade"),sg(),Tl(37,"th"),tN(38,"Descri\xE7\xE3o"),sg(),Tl(39,"th"),tN(40,"Valor Padr\xE3o"),sg()()(),Tl(41,"tbody")(42,"tr")(43,"td")(44,"strong"),tN(45,"Default Values"),sg()(),Gl(46,"td")(47,"td"),sg(),Tl(48,"tr")(49,"td")(50,"code"),tN(51,"--font-family"),sg()(),Tl(52,"td"),tN(53,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(54,"td")(55,"code"),tN(56,"var(--font-family-theme)"),sg()()(),Tl(57,"tr")(58,"td")(59,"code"),tN(60,"--font-weight"),sg()(),Tl(61,"td"),tN(62,"Peso da fonte"),sg(),Tl(63,"td")(64,"code"),tN(65,"var(--font-weight-normal)"),sg()()(),Tl(66,"tr")(67,"td")(68,"code"),tN(69,"--text-color"),sg()(),Tl(70,"td"),tN(71,"Cor do texto"),sg(),Tl(72,"td")(73,"code"),tN(74,"var(--color-neutral-dark-70)"),sg()()(),Tl(75,"tr")(76,"td")(77,"code"),tN(78,"--border-radius"),sg()(),Tl(79,"td"),tN(80,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),sg(),Tl(81,"td")(82,"code"),tN(83,"var(--border-radius-md)"),sg()()(),Tl(84,"tr")(85,"td")(86,"code"),tN(87,"--border-width"),sg()(),Tl(88,"td"),tN(89,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),sg(),Tl(90,"td")(91,"code"),tN(92,"var(--border-width-sm)"),sg()()(),Tl(93,"tr")(94,"td")(95,"code"),tN(96,"--border-color"),sg()(),Tl(97,"td"),tN(98,"Cor da borda"),sg(),Tl(99,"td")(100,"code"),tN(101,"var(--color-neutral-light-20)"),sg()()(),Tl(102,"tr")(103,"td")(104,"code"),tN(105,"--background"),sg()(),Tl(106,"td"),tN(107,"Cor de background"),sg(),Tl(108,"td")(109,"code"),tN(110,"var(--color-neutral-light-00)"),sg()()(),Tl(111,"tr")(112,"td")(113,"code"),tN(114,"--shadow"),sg()(),Tl(115,"td"),tN(116,"Cont\xE9m o valor da sombra do elemento"),sg(),Tl(117,"td")(118,"code"),tN(119,"var(--shadow-md)"),sg()()(),Tl(120,"tr")(121,"td")(122,"strong"),tN(123,"po-loading-icon"),sg()(),Gl(124,"td")(125,"td"),sg(),Tl(126,"tr")(127,"td")(128,"code"),tN(129,"--color"),sg()(),Tl(130,"td"),tN(131,"Cor principal do spinner"),sg(),Tl(132,"td")(133,"code"),tN(134,"var(--color-action-default)"),sg()()()()()(),Tl(135,"div",7)(136,"h4",8),tN(137,"Seletor"),sg(),Tl(138,"pre",9),tN(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),sg()(),Tl(140,"h4",10),tN(141,"Propriedades"),sg(),Tl(142,"table",11)(143,"tr",12)(144,"th",13),tN(145,"Nome"),sg(),Tl(146,"th",13),tN(147,"Tipo"),sg(),Tl(148,"th",13),tN(149,"Padr\xE3o"),sg(),Tl(150,"th",13),tN(151,"Descri\xE7\xE3o"),sg()(),Tl(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),tN(156," p-screen-lock"),Gl(157,"br"),sg()()(),Tl(158,"td",18)(159,"code",19),tN(160,"boolean"),sg()(),Tl(161,"td",20)(162,"p")(163,"code"),tN(164,"false"),sg()()(),Tl(165,"td",21)(166,"em")(167,"strong"),tN(168,"(opcional)"),sg()(),Tl(169,"p"),tN(170,"Define se o "),Tl(171,"em"),tN(172,"overlay"),sg(),tN(173," ser\xE1 aplicado a um "),Tl(174,"em"),tN(175,"container"),sg(),tN(176," ou \xE0 p\xE1gina inteira."),sg(),Tl(177,"p"),tN(178,"Para utilizar o componente como um "),Tl(179,"em"),tN(180,"container"),sg(),tN(181,", o elemento pai dever\xE1 receber uma posi\xE7\xE3o relativa, por exemplo:"),sg(),Tl(182,"pre")(183,"code"),tN(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),sg()()()(),Tl(185,"tr",14)(186,"td",15)(187,"div",16)(188,"span",17),tN(189," p-size"),Gl(190,"br"),sg()()(),Tl(191,"td",18)(192,"code",22),tN(193,"string"),sg()(),Tl(194,"td",20)(195,"p")(196,"code"),tN(197,"lg"),sg()()(),Tl(198,"td",21)(199,"em")(200,"strong"),tN(201,"(opcional)"),sg()(),Tl(202,"p"),tN(203,"Define o tamanho do componente com base no tamanho do \xEDcone de "),Tl(204,"em"),tN(205,"loading"),sg(),tN(206,"."),sg(),Tl(207,"p"),tN(208,"Tamanhos dispon\xEDveis para o "),Tl(209,"em"),tN(210,"loading"),sg(),tN(211,":"),sg(),Tl(212,"ul")(213,"li")(214,"code"),tN(215,"xs"),sg(),tN(216,": 1rem"),sg(),Tl(217,"li")(218,"code"),tN(219,"sm"),sg(),tN(220,": 1.5rem"),sg(),Tl(221,"li")(222,"code"),tN(223,"md"),sg(),tN(224,": 3rem"),sg(),Tl(225,"li")(226,"code"),tN(227,"lg"),sg(),tN(228,": 5rem (valor padr\xE3o)"),sg()()()(),Tl(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),tN(233," p-text"),Gl(234,"br"),sg()()(),Tl(235,"td",18)(236,"code",22),tN(237,"string"),sg()(),Tl(238,"td",20)(239,"p")(240,"code"),tN(241,"Carregando"),sg()()(),Tl(242,"td",21)(243,"em")(244,"strong"),tN(245,"(opcional)"),sg()(),Tl(246,"p"),tN(247,"Texto a ser exibido no componente."),sg(),Tl(248,"blockquote")(249,"p"),tN(250,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Tl(251,"a",23)(252,"strong"),tN(253,"PoI18n"),sg()(),tN(254," ou navegador."),sg()()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Loading Overlay",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return o.changeTab("doc")}),Gl(3,"sample-po-loading-overlay-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return o.changeTab("web")}),Gl(5,"sample-po-loading-overlay-basic-view")(6,"sample-po-loading-overlay-labs-view")(7,"sample-po-loading-overlay-connection-test-view"),sg()()()),a&2&&(tw("p-actions",o.actions),Vp(2),tw("p-active",o.activeTab==="doc"),Vp(2),tw("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ie,le,pe,se],encapsulation:2})}return i})();var xe=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[vL.forChild(xe),vL]})}return i})();var Ye=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,de]})}return i})();export{Ye as DocPoLoadingOverlayModule};