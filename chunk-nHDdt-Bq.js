import{$r as Zn,An as uoe,Bn as zu,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,i as _a,ir as EF,j as FP,ji as mO,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ne=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(a,i){a&1&&(jc(0,`div`,0),nu(1,`po-loading-overlay`),wg())},dependencies:[FP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Loading Overlay Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-loading-overlay-basic`),wg(),nu(29,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ge,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ne],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(p){p.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(a,i){if(a&1){let d=Sx();jc(0,`div`,1),nu(1,`po-loading-overlay`,2),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(i.text,r)||(i.text=r),v_(r)}),wg(),jc(7,`po-checkbox-group`,5),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(i.properties,r)||(i.properties=r),v_(r)}),mt(`p-change`,function(r){return i.onChangeCheckbox(r)}),wg()(),jc(8,`div`,3)(9,`po-radio-group`,6),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(i.size,r)||(i.size=r),v_(r)}),wg()(),jc(10,`div`,3)(11,`div`,7)(12,`po-button`,8),mt(`p-click`,function(){return i.restore()}),wg()()()()}a&2&&(rg(),jE(`p-screen-lock`,i.properties?.includes(`screenLock`))(`p-text`,i.text)(`p-size`,i.size),rg(5),ib(`ngModel`,i.text),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(2),ib(`ngModel`,i.size),jE(`p-options`,i.sizesOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,Ote,FP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Loading Overlay Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="sample-container">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-loading-overlay-labs`),wg(),nu(29,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ce,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ae],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{poNotification=p(zu);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let p=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(p)},450)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,i){if(a&1){let d=Sx();jc(0,`form`,null,0)(2,`div`),nu(3,`po-loading-overlay`,1),wg(),jc(4,`div`,2)(5,`po-input`,3),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(i.environment.urlServer,r)||(i.environment.urlServer=r),v_(r)}),wg(),jc(6,`po-input`,4),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(i.environment.urlDB,r)||(i.environment.urlDB=r),v_(r)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(i.environment.userDB,r)||(i.environment.userDB=r),v_(r)}),wg(),jc(8,`po-password`,6),JN(),ob(`ngModelChange`,function(r){return y_(d),sO(i.environment.passwordDB,r)||(i.environment.passwordDB=r),v_(r)}),wg()(),jc(9,`div`,2)(10,`po-button`,7),mt(`p-click`,function(){y_(d);let r=Fx(1);return i.connectionTest(),v_(r.reset())}),wg()()()}if(a&2){let d=Fx(1);rg(3),jE(`hidden`,i.isHideLoading),rg(2),ib(`ngModel`,i.environment.urlServer),t0(),rg(),ib(`ngModel`,i.environment.urlDB),t0(),rg(),ib(`ngModel`,i.environment.userDB),t0(),rg(),ib(`ngModel`,i.environment.passwordDB),t0(),rg(2),jE(`p-disabled`,d.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,A5,uoe,FP],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Loading Overlay - Connection Test`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #formConfig="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-loading-overlay-connection-test`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ye,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,re],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-loading-overlay.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoLoadingOverlayComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`Este componente mostra ao usuário uma imagem de `),jc(15,`em`),iO(16,`loading`),wg(),iO(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),wg(),jc(18,`h4`),iO(19,`Tokens customizáveis`),wg(),jc(20,`p`),iO(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(22,`br`),iO(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(24,`code`),iO(25,`.po-loading`),wg()(),jc(26,`blockquote`)(27,`p`),iO(28,`Para maiores informações, acesse o guia `),jc(29,`a`,6),iO(30,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(31,`.`),wg()(),jc(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),iO(36,`Propriedade`),wg(),jc(37,`th`),iO(38,`Descrição`),wg(),jc(39,`th`),iO(40,`Valor Padrão`),wg()()(),jc(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),iO(45,`Default Values`),wg()(),nu(46,`td`)(47,`td`),wg(),jc(48,`tr`)(49,`td`)(50,`code`),iO(51,`--font-family`),wg()(),jc(52,`td`),iO(53,`Família tipográfica usada`),wg(),jc(54,`td`)(55,`code`),iO(56,`var(--font-family-theme)`),wg()()(),jc(57,`tr`)(58,`td`)(59,`code`),iO(60,`--font-weight`),wg()(),jc(61,`td`),iO(62,`Peso da fonte`),wg(),jc(63,`td`)(64,`code`),iO(65,`var(--font-weight-normal)`),wg()()(),jc(66,`tr`)(67,`td`)(68,`code`),iO(69,`--text-color`),wg()(),jc(70,`td`),iO(71,`Cor do texto`),wg(),jc(72,`td`)(73,`code`),iO(74,`var(--color-neutral-dark-70)`),wg()()(),jc(75,`tr`)(76,`td`)(77,`code`),iO(78,`--border-radius`),wg()(),jc(79,`td`),iO(80,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(81,`td`)(82,`code`),iO(83,`var(--border-radius-md)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),iO(87,`--border-width`),wg()(),jc(88,`td`),iO(89,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(90,`td`)(91,`code`),iO(92,`var(--border-width-sm)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`code`),iO(96,`--border-color`),wg()(),jc(97,`td`),iO(98,`Cor da borda`),wg(),jc(99,`td`)(100,`code`),iO(101,`var(--color-neutral-light-20)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),iO(105,`--background`),wg()(),jc(106,`td`),iO(107,`Cor de background`),wg(),jc(108,`td`)(109,`code`),iO(110,`var(--color-neutral-light-00)`),wg()()(),jc(111,`tr`)(112,`td`)(113,`code`),iO(114,`--shadow`),wg()(),jc(115,`td`),iO(116,`Contém o valor da sombra do elemento`),wg(),jc(117,`td`)(118,`code`),iO(119,`var(--shadow-md)`),wg()()(),jc(120,`tr`)(121,`td`)(122,`strong`),iO(123,`po-loading-icon`),wg()(),nu(124,`td`)(125,`td`),wg(),jc(126,`tr`)(127,`td`)(128,`code`),iO(129,`--color`),wg()(),jc(130,`td`),iO(131,`Cor principal do spinner`),wg(),jc(132,`td`)(133,`code`),iO(134,`var(--color-action-default)`),wg()()()()()(),jc(135,`div`,7)(136,`h4`,8),iO(137,`Seletor`),wg(),jc(138,`pre`,9),iO(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),wg()(),jc(140,`h4`,10),iO(141,`Propriedades`),wg(),jc(142,`table`,11)(143,`tr`,12)(144,`th`,13),iO(145,`Nome`),wg(),jc(146,`th`,13),iO(147,`Tipo`),wg(),jc(148,`th`,13),iO(149,`Padrão`),wg(),jc(150,`th`,13),iO(151,`Descrição`),wg()(),jc(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),iO(156,` p-screen-lock`),nu(157,`br`),wg()()(),jc(158,`td`,18)(159,`code`,19),iO(160,`boolean`),wg()(),jc(161,`td`,20)(162,`p`)(163,`code`),iO(164,`false`),wg()()(),jc(165,`td`,21)(166,`em`)(167,`strong`),iO(168,`(opcional)`),wg()(),jc(169,`p`),iO(170,`Define se o `),jc(171,`em`),iO(172,`overlay`),wg(),iO(173,` será aplicado a um `),jc(174,`em`),iO(175,`container`),wg(),iO(176,` ou à página inteira.`),wg(),jc(177,`p`),iO(178,`Para utilizar o componente como um `),jc(179,`em`),iO(180,`container`),wg(),iO(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),wg(),jc(182,`pre`)(183,`code`),iO(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),wg()()()(),jc(185,`tr`,14)(186,`td`,15)(187,`div`,16)(188,`span`,17),iO(189,` p-size`),nu(190,`br`),wg()()(),jc(191,`td`,18)(192,`code`,22),iO(193,`string`),wg()(),jc(194,`td`,20)(195,`p`)(196,`code`),iO(197,`lg`),wg()()(),jc(198,`td`,21)(199,`em`)(200,`strong`),iO(201,`(opcional)`),wg()(),jc(202,`p`),iO(203,`Define o tamanho do componente com base no tamanho do ícone de `),jc(204,`em`),iO(205,`loading`),wg(),iO(206,`.`),wg(),jc(207,`p`),iO(208,`Tamanhos disponíveis para o `),jc(209,`em`),iO(210,`loading`),wg(),iO(211,`:`),wg(),jc(212,`ul`)(213,`li`)(214,`code`),iO(215,`xs`),wg(),iO(216,`: 1rem`),wg(),jc(217,`li`)(218,`code`),iO(219,`sm`),wg(),iO(220,`: 1.5rem`),wg(),jc(221,`li`)(222,`code`),iO(223,`md`),wg(),iO(224,`: 3rem`),wg(),jc(225,`li`)(226,`code`),iO(227,`lg`),wg(),iO(228,`: 5rem (valor padrão)`),wg()()()(),jc(229,`tr`,14)(230,`td`,15)(231,`div`,16)(232,`span`,17),iO(233,` p-text`),nu(234,`br`),wg()()(),jc(235,`td`,18)(236,`code`,22),iO(237,`string`),wg()(),jc(238,`td`,20)(239,`p`)(240,`code`),iO(241,`Carregando`),wg()()(),jc(242,`td`,21)(243,`em`)(244,`strong`),iO(245,`(opcional)`),wg()(),jc(246,`p`),iO(247,`Texto a ser exibido no componente.`),wg(),jc(248,`blockquote`)(249,`p`),iO(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),jc(251,`a`,23)(252,`strong`),iO(253,`PoI18n`),wg()(),iO(254,` ou navegador.`),wg()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var xe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Loading Overlay`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-loading-overlay-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-loading-overlay-basic-view`)(6,`sample-po-loading-overlay-labs-view`)(7,`sample-po-loading-overlay-connection-test-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ie,le,pe,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[C1.forChild(xe),C1]})}return o})();var Ye=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[Ta,de]})}return o})();export{Ye as DocPoLoadingOverlayModule};