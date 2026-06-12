import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,aV as Xp,aK as fS,Q as Cl,R as Hl,T as og,an as yO,aH as Zr,b7 as ofe,b8 as lfe,z as qx,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,d2 as Uhe,bc as Sx,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ne=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic"]],standalone:false,decls:2,vars:0,consts:[[1,"sample-container"]],template:function(a,o){a&1&&(Cl(0,"div",0),Hl(1,"po-loading-overlay"),og());},dependencies:[fS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-basic-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Loading Overlay Basic"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-loading-overlay-basic"),og(),Hl(29,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ne],encapsulation:2})}return i})();var ae=(()=>{class i{properties=[];text;size;sizesOptions=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"}];propertiesOptions=[{value:"screenLock",label:"Screen Lock"}];ngOnInit(){this.restore();}onChangeCheckbox(p){p.includes("screenLock")&&setTimeout(()=>{this.properties=[];},2e3);}restore(){this.size="lg",this.text=null;}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs"]],standalone:false,decls:13,vars:8,consts:[["formProperties","ngForm"],[1,"sample-container"],[3,"p-screen-lock","p-text","p-size"],[1,"po-row"],["name","text","p-label","Text",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],[1,"po-md-3"],["p-label","Sample Restore",3,"p-click"]],template:function(a,o){if(a&1){let d=gx();Cl(0,"div",1),Hl(1,"po-loading-overlay",2),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",3)(6,"po-input",4),gw("ngModelChange",function(r){return Jy(d),Zx(o.text,r)||(o.text=r),e_(r)}),og(),Z0(),Cl(7,"po-checkbox-group",5),gw("ngModelChange",function(r){return Jy(d),Zx(o.properties,r)||(o.properties=r),e_(r)}),dt("p-change",function(r){return o.onChangeCheckbox(r)}),og(),Z0(),og(),Cl(8,"div",3)(9,"po-radio-group",6),gw("ngModelChange",function(r){return Jy(d),Zx(o.size,r)||(o.size=r),e_(r)}),og(),Z0(),og(),Cl(10,"div",3)(11,"div",7)(12,"po-button",8),dt("p-click",function(){return o.restore()}),og()()()();}a&2&&(Lp(),ZE("p-screen-lock",o.properties==null?null:o.properties.includes("screenLock"))("p-text",o.text)("p-size",o.size),Lp(5),pw("ngModel",o.text),X0(),Lp(),pw("ngModel",o.properties),ZE("p-options",o.propertiesOptions),X0(),Lp(2),pw("ngModel",o.size),ZE("p-options",o.sizesOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,fS],styles:[".sample-container[_ngcontent-%COMP%]{position:relative;height:300px}"],changeDetection:1})}return i})();var Ce=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-labs-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Loading Overlay Labs"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="sample-container">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-loading-overlay-labs"),og(),Hl(29,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ce,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ae],encapsulation:2})}return i})();var re=(()=>{class i{poNotification=f(Xp);environment={urlServer:"",urlDB:"",userDB:"",passwordDB:""};isHideLoading=true;connectionTest(){let p="Connection ok";this.isHideLoading=false,setTimeout(()=>{this.isHideLoading=true,this.poNotification.success(p);},450);}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test"]],standalone:false,decls:11,vars:6,consts:[["formConfig","ngForm"],[3,"hidden"],[1,"po-row"],["name","urlServer","p-clean","","p-label","URL Server","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlDB","p-clean","","p-label","URL Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","userDB","p-clean","","p-label","User Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","passwordDB","p-clean","","p-label","Password Database","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Connect",1,"po-md-4",3,"p-click","p-disabled"]],template:function(a,o){if(a&1){let d=gx();Cl(0,"form",null,0)(2,"div"),Hl(3,"po-loading-overlay",1),og(),Cl(4,"div",2)(5,"po-input",3),gw("ngModelChange",function(r){return Jy(d),Zx(o.environment.urlServer,r)||(o.environment.urlServer=r),e_(r)}),og(),Z0(),Cl(6,"po-input",4),gw("ngModelChange",function(r){return Jy(d),Zx(o.environment.urlDB,r)||(o.environment.urlDB=r),e_(r)}),og(),Z0(),Cl(7,"po-input",5),gw("ngModelChange",function(r){return Jy(d),Zx(o.environment.userDB,r)||(o.environment.userDB=r),e_(r)}),og(),Z0(),Cl(8,"po-password",6),gw("ngModelChange",function(r){return Jy(d),Zx(o.environment.passwordDB,r)||(o.environment.passwordDB=r),e_(r)}),og(),Z0(),og(),Cl(9,"div",2)(10,"po-button",7),dt("p-click",function(){Jy(d);let r=Sx(1);return o.connectionTest(),e_(r.reset())}),og()()();}if(a&2){let d=Sx(1);Lp(3),ZE("hidden",o.isHideLoading),Lp(2),pw("ngModel",o.environment.urlServer),X0(),Lp(),pw("ngModel",o.environment.urlDB),X0(),Lp(),pw("ngModel",o.environment.userDB),X0(),Lp(),pw("ngModel",o.environment.passwordDB),X0(),Lp(2),ZE("p-disabled",d.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,q3,Uhe,fS],encapsulation:2,changeDetection:1})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-connection-test-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Loading Overlay - Connection Test"),og(),Cl(4,"a",2),dt("click",function(){return o.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #formConfig="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-loading-overlay-connection-test"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+o.sampleCodeButtonIcon),Lp(),dg(" ",o.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ye,o.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,re],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-loading-overlay-doc"]],standalone:false,decls:255,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"]],template:function(a,o){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoLoadingModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-loading-overlay."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoLoadingOverlayComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"Este componente mostra ao usu\xE1rio uma imagem de "),Cl(15,"em"),qx(16,"loading"),og(),qx(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),og(),Cl(18,"h4"),qx(19,"Tokens customiz\xE1veis"),og(),Cl(20,"p"),qx(21,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(22,"br"),qx(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(24,"code"),qx(25,".po-loading"),og()(),Cl(26,"blockquote")(27,"p"),qx(28,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(29,"a",6),qx(30,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(31,"."),og()(),Cl(32,"table")(33,"thead")(34,"tr")(35,"th"),qx(36,"Propriedade"),og(),Cl(37,"th"),qx(38,"Descri\xE7\xE3o"),og(),Cl(39,"th"),qx(40,"Valor Padr\xE3o"),og()()(),Cl(41,"tbody")(42,"tr")(43,"td")(44,"strong"),qx(45,"Default Values"),og()(),Hl(46,"td")(47,"td"),og(),Cl(48,"tr")(49,"td")(50,"code"),qx(51,"--font-family"),og()(),Cl(52,"td"),qx(53,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(54,"td")(55,"code"),qx(56,"var(--font-family-theme)"),og()()(),Cl(57,"tr")(58,"td")(59,"code"),qx(60,"--font-weight"),og()(),Cl(61,"td"),qx(62,"Peso da fonte"),og(),Cl(63,"td")(64,"code"),qx(65,"var(--font-weight-normal)"),og()()(),Cl(66,"tr")(67,"td")(68,"code"),qx(69,"--text-color"),og()(),Cl(70,"td"),qx(71,"Cor do texto"),og(),Cl(72,"td")(73,"code"),qx(74,"var(--color-neutral-dark-70)"),og()()(),Cl(75,"tr")(76,"td")(77,"code"),qx(78,"--border-radius"),og()(),Cl(79,"td"),qx(80,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),og(),Cl(81,"td")(82,"code"),qx(83,"var(--border-radius-md)"),og()()(),Cl(84,"tr")(85,"td")(86,"code"),qx(87,"--border-width"),og()(),Cl(88,"td"),qx(89,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),og(),Cl(90,"td")(91,"code"),qx(92,"var(--border-width-sm)"),og()()(),Cl(93,"tr")(94,"td")(95,"code"),qx(96,"--border-color"),og()(),Cl(97,"td"),qx(98,"Cor da borda"),og(),Cl(99,"td")(100,"code"),qx(101,"var(--color-neutral-light-20)"),og()()(),Cl(102,"tr")(103,"td")(104,"code"),qx(105,"--background"),og()(),Cl(106,"td"),qx(107,"Cor de background"),og(),Cl(108,"td")(109,"code"),qx(110,"var(--color-neutral-light-00)"),og()()(),Cl(111,"tr")(112,"td")(113,"code"),qx(114,"--shadow"),og()(),Cl(115,"td"),qx(116,"Cont\xE9m o valor da sombra do elemento"),og(),Cl(117,"td")(118,"code"),qx(119,"var(--shadow-md)"),og()()(),Cl(120,"tr")(121,"td")(122,"strong"),qx(123,"po-loading-icon"),og()(),Hl(124,"td")(125,"td"),og(),Cl(126,"tr")(127,"td")(128,"code"),qx(129,"--color"),og()(),Cl(130,"td"),qx(131,"Cor principal do spinner"),og(),Cl(132,"td")(133,"code"),qx(134,"var(--color-action-default)"),og()()()()()(),Cl(135,"div",7)(136,"h4",8),qx(137,"Seletor"),og(),Cl(138,"pre",9),qx(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),og()(),Cl(140,"h4",10),qx(141,"Propriedades"),og(),Cl(142,"table",11)(143,"tr",12)(144,"th",13),qx(145,"Nome"),og(),Cl(146,"th",13),qx(147,"Tipo"),og(),Cl(148,"th",13),qx(149,"Padr\xE3o"),og(),Cl(150,"th",13),qx(151,"Descri\xE7\xE3o"),og()(),Cl(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),qx(156," p-screen-lock"),Hl(157,"br"),og()()(),Cl(158,"td",18)(159,"code",19),qx(160,"boolean"),og()(),Cl(161,"td",20)(162,"p")(163,"code"),qx(164,"false"),og()()(),Cl(165,"td",21)(166,"em")(167,"strong"),qx(168,"(opcional)"),og()(),Cl(169,"p"),qx(170,"Define se o "),Cl(171,"em"),qx(172,"overlay"),og(),qx(173," ser\xE1 aplicado a um "),Cl(174,"em"),qx(175,"container"),og(),qx(176," ou \xE0 p\xE1gina inteira."),og(),Cl(177,"p"),qx(178,"Para utilizar o componente como um "),Cl(179,"em"),qx(180,"container"),og(),qx(181,", o elemento pai dever\xE1 receber uma posi\xE7\xE3o relativa, por exemplo:"),og(),Cl(182,"pre")(183,"code"),qx(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),og()()()(),Cl(185,"tr",14)(186,"td",15)(187,"div",16)(188,"span",17),qx(189," p-size"),Hl(190,"br"),og()()(),Cl(191,"td",18)(192,"code",22),qx(193,"string"),og()(),Cl(194,"td",20)(195,"p")(196,"code"),qx(197,"lg"),og()()(),Cl(198,"td",21)(199,"em")(200,"strong"),qx(201,"(opcional)"),og()(),Cl(202,"p"),qx(203,"Define o tamanho do componente com base no tamanho do \xEDcone de "),Cl(204,"em"),qx(205,"loading"),og(),qx(206,"."),og(),Cl(207,"p"),qx(208,"Tamanhos dispon\xEDveis para o "),Cl(209,"em"),qx(210,"loading"),og(),qx(211,":"),og(),Cl(212,"ul")(213,"li")(214,"code"),qx(215,"xs"),og(),qx(216,": 1rem"),og(),Cl(217,"li")(218,"code"),qx(219,"sm"),og(),qx(220,": 1.5rem"),og(),Cl(221,"li")(222,"code"),qx(223,"md"),og(),qx(224,": 3rem"),og(),Cl(225,"li")(226,"code"),qx(227,"lg"),og(),qx(228,": 5rem (valor padr\xE3o)"),og()()()(),Cl(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),qx(233," p-text"),Hl(234,"br"),og()()(),Cl(235,"td",18)(236,"code",22),qx(237,"string"),og()(),Cl(238,"td",20)(239,"p")(240,"code"),qx(241,"Carregando"),og()()(),Cl(242,"td",21)(243,"em")(244,"strong"),qx(245,"(opcional)"),og()(),Cl(246,"p"),qx(247,"Texto a ser exibido no componente."),og(),Cl(248,"blockquote")(249,"p"),qx(250,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Cl(251,"a",23)(252,"strong"),qx(253,"PoI18n"),og()(),qx(254," ou navegador."),og()()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var me=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Loading Overlay",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return o.changeTab("doc")}),Hl(3,"sample-po-loading-overlay-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return o.changeTab("web")}),Hl(5,"sample-po-loading-overlay-basic-view")(6,"sample-po-loading-overlay-labs-view")(7,"sample-po-loading-overlay-connection-test-view"),og()()()),a&2&&(ZE("p-actions",o.actions),Lp(2),ZE("p-active",o.activeTab==="doc"),Lp(2),ZE("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ie,le,pe,se],encapsulation:2})}return i})();var xe=[{path:"",component:me}],de=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[bL.forChild(xe),bL]})}return i})();var Ye=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ca,de]})}return i})();export{Ye as DocPoLoadingOverlayModule};