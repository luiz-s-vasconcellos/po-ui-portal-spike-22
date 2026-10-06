import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Tn as soe,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,fn as ni,i as _a,in as kte,it as OP,k as D4,ki as he,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-AGY457H2.js";var ne=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(a,i){a&1&&(Ac(0,`div`,0),Kc(1,`po-loading-overlay`),ug())},dependencies:[OP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Loading Overlay Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-loading-overlay-basic`),ug(),Kc(29,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ge,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ne],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(p){p.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(a,i){if(a&1){let d=Bx();Ac(0,`div`,1),Kc(1,`po-loading-overlay`,2),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),RE(`ngModelChange`,function(r){return Jv(d),DN(i.text,r)||(i.text=r),e_(r)}),ug(),p0(),Ac(7,`po-checkbox-group`,5),RE(`ngModelChange`,function(r){return Jv(d),DN(i.properties,r)||(i.properties=r),e_(r)}),pt(`p-change`,function(r){return i.onChangeCheckbox(r)}),ug(),p0(),ug(),Ac(8,`div`,3)(9,`po-radio-group`,6),RE(`ngModelChange`,function(r){return Jv(d),DN(i.size,r)||(i.size=r),e_(r)}),ug(),p0(),ug(),Ac(10,`div`,3)(11,`div`,7)(12,`po-button`,8),pt(`p-click`,function(){return i.restore()}),ug()()()()}a&2&&(Hp(),cE(`p-screen-lock`,i.properties?.includes(`screenLock`))(`p-text`,i.text)(`p-size`,i.size),Hp(5),TE(`ngModel`,i.text),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(2),TE(`ngModel`,i.size),cE(`p-options`,i.sizesOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,kte,OP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Loading Overlay Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="sample-container">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-loading-overlay-labs`),ug(),Kc(29,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ae],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{poNotification=f(Ou);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let p=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(p)},450)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,i){if(a&1){let d=Bx();Ac(0,`form`,null,0)(2,`div`),Kc(3,`po-loading-overlay`,1),ug(),Ac(4,`div`,2)(5,`po-input`,3),RE(`ngModelChange`,function(r){return Jv(d),DN(i.environment.urlServer,r)||(i.environment.urlServer=r),e_(r)}),ug(),p0(),Ac(6,`po-input`,4),RE(`ngModelChange`,function(r){return Jv(d),DN(i.environment.urlDB,r)||(i.environment.urlDB=r),e_(r)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(d),DN(i.environment.userDB,r)||(i.environment.userDB=r),e_(r)}),ug(),p0(),Ac(8,`po-password`,6),RE(`ngModelChange`,function(r){return Jv(d),DN(i.environment.passwordDB,r)||(i.environment.passwordDB=r),e_(r)}),ug(),p0(),ug(),Ac(9,`div`,2)(10,`po-button`,7),pt(`p-click`,function(){Jv(d);let r=Zx(1);return i.connectionTest(),e_(r.reset())}),ug()()()}if(a&2){let d=Zx(1);Hp(3),cE(`hidden`,i.isHideLoading),Hp(2),TE(`ngModel`,i.environment.urlServer),m0(),Hp(),TE(`ngModel`,i.environment.urlDB),m0(),Hp(),TE(`ngModel`,i.environment.userDB),m0(),Hp(),TE(`ngModel`,i.environment.passwordDB),m0(),Hp(2),cE(`p-disabled`,d.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,D4,soe,OP],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Loading Overlay - Connection Test`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #formConfig="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-loading-overlay-connection-test`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ye,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,re],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-loading-overlay.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoLoadingOverlayComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`Este componente mostra ao usuário uma imagem de `),Ac(15,`em`),vN(16,`loading`),ug(),vN(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),ug(),Ac(18,`h4`),vN(19,`Tokens customizáveis`),ug(),Ac(20,`p`),vN(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(22,`br`),vN(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(24,`code`),vN(25,`.po-loading`),ug()(),Ac(26,`blockquote`)(27,`p`),vN(28,`Para maiores informações, acesse o guia `),Ac(29,`a`,6),vN(30,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(31,`.`),ug()(),Ac(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),vN(36,`Propriedade`),ug(),Ac(37,`th`),vN(38,`Descrição`),ug(),Ac(39,`th`),vN(40,`Valor Padrão`),ug()()(),Ac(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),vN(45,`Default Values`),ug()(),Kc(46,`td`)(47,`td`),ug(),Ac(48,`tr`)(49,`td`)(50,`code`),vN(51,`--font-family`),ug()(),Ac(52,`td`),vN(53,`Família tipográfica usada`),ug(),Ac(54,`td`)(55,`code`),vN(56,`var(--font-family-theme)`),ug()()(),Ac(57,`tr`)(58,`td`)(59,`code`),vN(60,`--font-weight`),ug()(),Ac(61,`td`),vN(62,`Peso da fonte`),ug(),Ac(63,`td`)(64,`code`),vN(65,`var(--font-weight-normal)`),ug()()(),Ac(66,`tr`)(67,`td`)(68,`code`),vN(69,`--text-color`),ug()(),Ac(70,`td`),vN(71,`Cor do texto`),ug(),Ac(72,`td`)(73,`code`),vN(74,`var(--color-neutral-dark-70)`),ug()()(),Ac(75,`tr`)(76,`td`)(77,`code`),vN(78,`--border-radius`),ug()(),Ac(79,`td`),vN(80,`Contém o valor do raio dos cantos do elemento\xA0`),ug(),Ac(81,`td`)(82,`code`),vN(83,`var(--border-radius-md)`),ug()()(),Ac(84,`tr`)(85,`td`)(86,`code`),vN(87,`--border-width`),ug()(),Ac(88,`td`),vN(89,`Contém o valor da largura dos cantos do elemento\xA0`),ug(),Ac(90,`td`)(91,`code`),vN(92,`var(--border-width-sm)`),ug()()(),Ac(93,`tr`)(94,`td`)(95,`code`),vN(96,`--border-color`),ug()(),Ac(97,`td`),vN(98,`Cor da borda`),ug(),Ac(99,`td`)(100,`code`),vN(101,`var(--color-neutral-light-20)`),ug()()(),Ac(102,`tr`)(103,`td`)(104,`code`),vN(105,`--background`),ug()(),Ac(106,`td`),vN(107,`Cor de background`),ug(),Ac(108,`td`)(109,`code`),vN(110,`var(--color-neutral-light-00)`),ug()()(),Ac(111,`tr`)(112,`td`)(113,`code`),vN(114,`--shadow`),ug()(),Ac(115,`td`),vN(116,`Contém o valor da sombra do elemento`),ug(),Ac(117,`td`)(118,`code`),vN(119,`var(--shadow-md)`),ug()()(),Ac(120,`tr`)(121,`td`)(122,`strong`),vN(123,`po-loading-icon`),ug()(),Kc(124,`td`)(125,`td`),ug(),Ac(126,`tr`)(127,`td`)(128,`code`),vN(129,`--color`),ug()(),Ac(130,`td`),vN(131,`Cor principal do spinner`),ug(),Ac(132,`td`)(133,`code`),vN(134,`var(--color-action-default)`),ug()()()()()(),Ac(135,`div`,7)(136,`h4`,8),vN(137,`Seletor`),ug(),Ac(138,`pre`,9),vN(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),ug()(),Ac(140,`h4`,10),vN(141,`Propriedades`),ug(),Ac(142,`table`,11)(143,`tr`,12)(144,`th`,13),vN(145,`Nome`),ug(),Ac(146,`th`,13),vN(147,`Tipo`),ug(),Ac(148,`th`,13),vN(149,`Padrão`),ug(),Ac(150,`th`,13),vN(151,`Descrição`),ug()(),Ac(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),vN(156,` p-screen-lock`),Kc(157,`br`),ug()()(),Ac(158,`td`,18)(159,`code`,19),vN(160,`boolean`),ug()(),Ac(161,`td`,20)(162,`p`)(163,`code`),vN(164,`false`),ug()()(),Ac(165,`td`,21)(166,`em`)(167,`strong`),vN(168,`(opcional)`),ug()(),Ac(169,`p`),vN(170,`Define se o `),Ac(171,`em`),vN(172,`overlay`),ug(),vN(173,` será aplicado a um `),Ac(174,`em`),vN(175,`container`),ug(),vN(176,` ou à página inteira.`),ug(),Ac(177,`p`),vN(178,`Para utilizar o componente como um `),Ac(179,`em`),vN(180,`container`),ug(),vN(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),ug(),Ac(182,`pre`)(183,`code`),vN(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),ug()()()(),Ac(185,`tr`,14)(186,`td`,15)(187,`div`,16)(188,`span`,17),vN(189,` p-size`),Kc(190,`br`),ug()()(),Ac(191,`td`,18)(192,`code`,22),vN(193,`string`),ug()(),Ac(194,`td`,20)(195,`p`)(196,`code`),vN(197,`lg`),ug()()(),Ac(198,`td`,21)(199,`em`)(200,`strong`),vN(201,`(opcional)`),ug()(),Ac(202,`p`),vN(203,`Define o tamanho do componente com base no tamanho do ícone de `),Ac(204,`em`),vN(205,`loading`),ug(),vN(206,`.`),ug(),Ac(207,`p`),vN(208,`Tamanhos disponíveis para o `),Ac(209,`em`),vN(210,`loading`),ug(),vN(211,`:`),ug(),Ac(212,`ul`)(213,`li`)(214,`code`),vN(215,`xs`),ug(),vN(216,`: 1rem`),ug(),Ac(217,`li`)(218,`code`),vN(219,`sm`),ug(),vN(220,`: 1.5rem`),ug(),Ac(221,`li`)(222,`code`),vN(223,`md`),ug(),vN(224,`: 3rem`),ug(),Ac(225,`li`)(226,`code`),vN(227,`lg`),ug(),vN(228,`: 5rem (valor padrão)`),ug()()()(),Ac(229,`tr`,14)(230,`td`,15)(231,`div`,16)(232,`span`,17),vN(233,` p-text`),Kc(234,`br`),ug()()(),Ac(235,`td`,18)(236,`code`,22),vN(237,`string`),ug()(),Ac(238,`td`,20)(239,`p`)(240,`code`),vN(241,`Carregando`),ug()()(),Ac(242,`td`,21)(243,`em`)(244,`strong`),vN(245,`(opcional)`),ug()(),Ac(246,`p`),vN(247,`Texto a ser exibido no componente.`),ug(),Ac(248,`blockquote`)(249,`p`),vN(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),Ac(251,`a`,23)(252,`strong`),vN(253,`PoI18n`),ug()(),vN(254,` ou navegador.`),ug()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var xe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Loading Overlay`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-loading-overlay-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-loading-overlay-basic-view`)(6,`sample-po-loading-overlay-labs-view`)(7,`sample-po-loading-overlay-connection-test-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ie,le,pe,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(xe),kL]})}return o})();var Ye=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,de]})}return o})();export{Ye as DocPoLoadingOverlayModule};