import{$r as Vx,An as wbe,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ea as p0,ga as w,l as ar,lt as OP,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var ne=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(a,i){a&1&&(Ml(0,`div`,0),ql(1,`po-loading-overlay`),lg())},dependencies:[OP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Loading Overlay Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-loading-overlay-basic`),lg(),ql(29,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ge,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ne],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(p){p.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(a,i){if(a&1){let d=Vx();Ml(0,`div`,1),ql(1,`po-loading-overlay`,2),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),Mw(`ngModelChange`,function(r){return Qy(d),yN(i.text,r)||(i.text=r),Jy(r)}),lg(),f0(),Ml(7,`po-checkbox-group`,5),Mw(`ngModelChange`,function(r){return Qy(d),yN(i.properties,r)||(i.properties=r),Jy(r)}),ht(`p-change`,function(r){return i.onChangeCheckbox(r)}),lg(),f0(),lg(),Ml(8,`div`,3)(9,`po-radio-group`,6),Mw(`ngModelChange`,function(r){return Qy(d),yN(i.size,r)||(i.size=r),Jy(r)}),lg(),f0(),lg(),Ml(10,`div`,3)(11,`div`,7)(12,`po-button`,8),ht(`p-click`,function(){return i.restore()}),lg()()()()}a&2&&(Up(),cw(`p-screen-lock`,i.properties?.includes(`screenLock`))(`p-text`,i.text)(`p-size`,i.size),Up(5),Tw(`ngModel`,i.text),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(2),Tw(`ngModel`,i.size),cw(`p-options`,i.sizesOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,q0e,OP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Loading Overlay Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="sample-container">
  <po-loading-overlay [p-screen-lock]="properties?.includes('screenLock')" [p-text]="text" [p-size]="size">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-loading-overlay-labs`),lg(),ql(29,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ae],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{poNotification=f(Eu);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let p=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(p)},450)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,i){if(a&1){let d=Vx();Ml(0,`form`,null,0)(2,`div`),ql(3,`po-loading-overlay`,1),lg(),Ml(4,`div`,2)(5,`po-input`,3),Mw(`ngModelChange`,function(r){return Qy(d),yN(i.environment.urlServer,r)||(i.environment.urlServer=r),Jy(r)}),lg(),f0(),Ml(6,`po-input`,4),Mw(`ngModelChange`,function(r){return Qy(d),yN(i.environment.urlDB,r)||(i.environment.urlDB=r),Jy(r)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(d),yN(i.environment.userDB,r)||(i.environment.userDB=r),Jy(r)}),lg(),f0(),Ml(8,`po-password`,6),Mw(`ngModelChange`,function(r){return Qy(d),yN(i.environment.passwordDB,r)||(i.environment.passwordDB=r),Jy(r)}),lg(),f0(),lg(),Ml(9,`div`,2)(10,`po-button`,7),ht(`p-click`,function(){Qy(d);let r=Yx(1);return i.connectionTest(),Jy(r.reset())}),lg()()()}if(a&2){let d=Yx(1);Up(3),cw(`hidden`,i.isHideLoading),Up(2),Tw(`ngModel`,i.environment.urlServer),p0(),Up(),Tw(`ngModel`,i.environment.urlDB),p0(),Up(),Tw(`ngModel`,i.environment.userDB),p0(),Up(),Tw(`ngModel`,i.environment.passwordDB),p0(),Up(2),cw(`p-disabled`,d.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,lU,wbe,OP],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Loading Overlay - Connection Test`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #formConfig="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-loading-overlay-connection-test`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ye,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,re],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-loading-overlay.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoLoadingOverlayComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`Este componente mostra ao usuário uma imagem de `),Ml(15,`em`),mN(16,`loading`),lg(),mN(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),lg(),Ml(18,`h4`),mN(19,`Tokens customizáveis`),lg(),Ml(20,`p`),mN(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(22,`br`),mN(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(24,`code`),mN(25,`.po-loading`),lg()(),Ml(26,`blockquote`)(27,`p`),mN(28,`Para maiores informações, acesse o guia `),Ml(29,`a`,6),mN(30,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(31,`.`),lg()(),Ml(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),mN(36,`Propriedade`),lg(),Ml(37,`th`),mN(38,`Descrição`),lg(),Ml(39,`th`),mN(40,`Valor Padrão`),lg()()(),Ml(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),mN(45,`Default Values`),lg()(),ql(46,`td`)(47,`td`),lg(),Ml(48,`tr`)(49,`td`)(50,`code`),mN(51,`--font-family`),lg()(),Ml(52,`td`),mN(53,`Família tipográfica usada`),lg(),Ml(54,`td`)(55,`code`),mN(56,`var(--font-family-theme)`),lg()()(),Ml(57,`tr`)(58,`td`)(59,`code`),mN(60,`--font-weight`),lg()(),Ml(61,`td`),mN(62,`Peso da fonte`),lg(),Ml(63,`td`)(64,`code`),mN(65,`var(--font-weight-normal)`),lg()()(),Ml(66,`tr`)(67,`td`)(68,`code`),mN(69,`--text-color`),lg()(),Ml(70,`td`),mN(71,`Cor do texto`),lg(),Ml(72,`td`)(73,`code`),mN(74,`var(--color-neutral-dark-70)`),lg()()(),Ml(75,`tr`)(76,`td`)(77,`code`),mN(78,`--border-radius`),lg()(),Ml(79,`td`),mN(80,`Contém o valor do raio dos cantos do elemento\xA0`),lg(),Ml(81,`td`)(82,`code`),mN(83,`var(--border-radius-md)`),lg()()(),Ml(84,`tr`)(85,`td`)(86,`code`),mN(87,`--border-width`),lg()(),Ml(88,`td`),mN(89,`Contém o valor da largura dos cantos do elemento\xA0`),lg(),Ml(90,`td`)(91,`code`),mN(92,`var(--border-width-sm)`),lg()()(),Ml(93,`tr`)(94,`td`)(95,`code`),mN(96,`--border-color`),lg()(),Ml(97,`td`),mN(98,`Cor da borda`),lg(),Ml(99,`td`)(100,`code`),mN(101,`var(--color-neutral-light-20)`),lg()()(),Ml(102,`tr`)(103,`td`)(104,`code`),mN(105,`--background`),lg()(),Ml(106,`td`),mN(107,`Cor de background`),lg(),Ml(108,`td`)(109,`code`),mN(110,`var(--color-neutral-light-00)`),lg()()(),Ml(111,`tr`)(112,`td`)(113,`code`),mN(114,`--shadow`),lg()(),Ml(115,`td`),mN(116,`Contém o valor da sombra do elemento`),lg(),Ml(117,`td`)(118,`code`),mN(119,`var(--shadow-md)`),lg()()(),Ml(120,`tr`)(121,`td`)(122,`strong`),mN(123,`po-loading-icon`),lg()(),ql(124,`td`)(125,`td`),lg(),Ml(126,`tr`)(127,`td`)(128,`code`),mN(129,`--color`),lg()(),Ml(130,`td`),mN(131,`Cor principal do spinner`),lg(),Ml(132,`td`)(133,`code`),mN(134,`var(--color-action-default)`),lg()()()()()(),Ml(135,`div`,7)(136,`h4`,8),mN(137,`Seletor`),lg(),Ml(138,`pre`,9),mN(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),lg()(),Ml(140,`h4`,10),mN(141,`Propriedades`),lg(),Ml(142,`table`,11)(143,`tr`,12)(144,`th`,13),mN(145,`Nome`),lg(),Ml(146,`th`,13),mN(147,`Tipo`),lg(),Ml(148,`th`,13),mN(149,`Padrão`),lg(),Ml(150,`th`,13),mN(151,`Descrição`),lg()(),Ml(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),mN(156,` p-screen-lock`),ql(157,`br`),lg()()(),Ml(158,`td`,18)(159,`code`,19),mN(160,`boolean`),lg()(),Ml(161,`td`,20)(162,`p`)(163,`code`),mN(164,`false`),lg()()(),Ml(165,`td`,21)(166,`em`)(167,`strong`),mN(168,`(opcional)`),lg()(),Ml(169,`p`),mN(170,`Define se o `),Ml(171,`em`),mN(172,`overlay`),lg(),mN(173,` será aplicado a um `),Ml(174,`em`),mN(175,`container`),lg(),mN(176,` ou à página inteira.`),lg(),Ml(177,`p`),mN(178,`Para utilizar o componente como um `),Ml(179,`em`),mN(180,`container`),lg(),mN(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),lg(),Ml(182,`pre`)(183,`code`),mN(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),lg()()()(),Ml(185,`tr`,14)(186,`td`,15)(187,`div`,16)(188,`span`,17),mN(189,` p-size`),ql(190,`br`),lg()()(),Ml(191,`td`,18)(192,`code`,22),mN(193,`string`),lg()(),Ml(194,`td`,20)(195,`p`)(196,`code`),mN(197,`lg`),lg()()(),Ml(198,`td`,21)(199,`em`)(200,`strong`),mN(201,`(opcional)`),lg()(),Ml(202,`p`),mN(203,`Define o tamanho do componente com base no tamanho do ícone de `),Ml(204,`em`),mN(205,`loading`),lg(),mN(206,`.`),lg(),Ml(207,`p`),mN(208,`Tamanhos disponíveis para o `),Ml(209,`em`),mN(210,`loading`),lg(),mN(211,`:`),lg(),Ml(212,`ul`)(213,`li`)(214,`code`),mN(215,`xs`),lg(),mN(216,`: 1rem`),lg(),Ml(217,`li`)(218,`code`),mN(219,`sm`),lg(),mN(220,`: 1.5rem`),lg(),Ml(221,`li`)(222,`code`),mN(223,`md`),lg(),mN(224,`: 3rem`),lg(),Ml(225,`li`)(226,`code`),mN(227,`lg`),lg(),mN(228,`: 5rem (valor padrão)`),lg()()()(),Ml(229,`tr`,14)(230,`td`,15)(231,`div`,16)(232,`span`,17),mN(233,` p-text`),ql(234,`br`),lg()()(),Ml(235,`td`,18)(236,`code`,22),mN(237,`string`),lg()(),Ml(238,`td`,20)(239,`p`)(240,`code`),mN(241,`Carregando`),lg()()(),Ml(242,`td`,21)(243,`em`)(244,`strong`),mN(245,`(opcional)`),lg()(),Ml(246,`p`),mN(247,`Texto a ser exibido no componente.`),lg(),Ml(248,`blockquote`)(249,`p`),mN(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ml(251,`a`,23)(252,`strong`),mN(253,`PoI18n`),lg()(),mN(254,` ou navegador.`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var xe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Loading Overlay`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-loading-overlay-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-loading-overlay-basic-view`)(6,`sample-po-loading-overlay-labs-view`)(7,`sample-po-loading-overlay-connection-test-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ie,le,pe,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(xe),NL]})}return o})();var Ye=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,de]})}return o})();export{Ye as DocPoLoadingOverlayModule};