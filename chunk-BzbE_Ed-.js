import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,Yt as hbe,_r as Ky,aa as uN,at as PP,fi as ag,gi as bL,ha as ww,k as Eu,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var ne=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(a,i){a&1&&(Tl(0,`div`,0),Gl(1,`po-loading-overlay`),ag())},dependencies:[PP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Loading Overlay Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-loading-overlay-basic`),ag(),Gl(29,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ge,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ne],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(p){p.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(a,i){if(a&1){let d=Ax();Tl(0,`div`,1),Gl(1,`po-loading-overlay`,2),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),ww(`ngModelChange`,function(r){return Ky(d),uN(i.text,r)||(i.text=r),Xy(r)}),ag(),a0(),Tl(7,`po-checkbox-group`,5),ww(`ngModelChange`,function(r){return Ky(d),uN(i.properties,r)||(i.properties=r),Xy(r)}),ht(`p-change`,function(r){return i.onChangeCheckbox(r)}),ag(),a0(),ag(),Tl(8,`div`,3)(9,`po-radio-group`,6),ww(`ngModelChange`,function(r){return Ky(d),uN(i.size,r)||(i.size=r),Xy(r)}),ag(),a0(),ag(),Tl(10,`div`,3)(11,`div`,7)(12,`po-button`,8),ht(`p-click`,function(){return i.restore()}),ag()()()()}a&2&&(jp(),nw(`p-screen-lock`,i.properties?.includes(`screenLock`))(`p-text`,i.text)(`p-size`,i.size),jp(5),Ew(`ngModel`,i.text),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(2),Ew(`ngModel`,i.size),nw(`p-options`,i.sizesOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,L0e,PP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var Ce=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Loading Overlay Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="sample-container">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-loading-overlay-labs`),ag(),Gl(29,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ae],encapsulation:2,changeDetection:1})}return o})();var re=(()=>{class o{poNotification=f(Eu);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let p=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(p)},450)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,i){if(a&1){let d=Ax();Tl(0,`form`,null,0)(2,`div`),Gl(3,`po-loading-overlay`,1),ag(),Tl(4,`div`,2)(5,`po-input`,3),ww(`ngModelChange`,function(r){return Ky(d),uN(i.environment.urlServer,r)||(i.environment.urlServer=r),Xy(r)}),ag(),a0(),Tl(6,`po-input`,4),ww(`ngModelChange`,function(r){return Ky(d),uN(i.environment.urlDB,r)||(i.environment.urlDB=r),Xy(r)}),ag(),a0(),Tl(7,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(d),uN(i.environment.userDB,r)||(i.environment.userDB=r),Xy(r)}),ag(),a0(),Tl(8,`po-password`,6),ww(`ngModelChange`,function(r){return Ky(d),uN(i.environment.passwordDB,r)||(i.environment.passwordDB=r),Xy(r)}),ag(),a0(),ag(),Tl(9,`div`,2)(10,`po-button`,7),ht(`p-click`,function(){Ky(d);let r=Bx(1);return i.connectionTest(),Xy(r.reset())}),ag()()()}if(a&2){let d=Bx(1);jp(3),nw(`hidden`,i.isHideLoading),jp(2),Ew(`ngModel`,i.environment.urlServer),l0(),jp(),Ew(`ngModel`,i.environment.urlDB),l0(),jp(),Ew(`ngModel`,i.environment.userDB),l0(),jp(),Ew(`ngModel`,i.environment.passwordDB),l0(),jp(2),nw(`p-disabled`,d.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,iU,hbe,PP],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Loading Overlay - Connection Test`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #formConfig="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-loading-overlay-connection-test`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ye,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,re],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-loading-overlay.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoLoadingOverlayComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Este componente mostra ao usuário uma imagem de `),Tl(15,`em`),cN(16,`loading`),ag(),cN(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),ag(),Tl(18,`h4`),cN(19,`Tokens customizáveis`),ag(),Tl(20,`p`),cN(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(22,`br`),cN(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(24,`code`),cN(25,`.po-loading`),ag()(),Tl(26,`blockquote`)(27,`p`),cN(28,`Para maiores informações, acesse o guia `),Tl(29,`a`,6),cN(30,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(31,`.`),ag()(),Tl(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),cN(36,`Propriedade`),ag(),Tl(37,`th`),cN(38,`Descrição`),ag(),Tl(39,`th`),cN(40,`Valor Padrão`),ag()()(),Tl(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),cN(45,`Default Values`),ag()(),Gl(46,`td`)(47,`td`),ag(),Tl(48,`tr`)(49,`td`)(50,`code`),cN(51,`--font-family`),ag()(),Tl(52,`td`),cN(53,`Família tipográfica usada`),ag(),Tl(54,`td`)(55,`code`),cN(56,`var(--font-family-theme)`),ag()()(),Tl(57,`tr`)(58,`td`)(59,`code`),cN(60,`--font-weight`),ag()(),Tl(61,`td`),cN(62,`Peso da fonte`),ag(),Tl(63,`td`)(64,`code`),cN(65,`var(--font-weight-normal)`),ag()()(),Tl(66,`tr`)(67,`td`)(68,`code`),cN(69,`--text-color`),ag()(),Tl(70,`td`),cN(71,`Cor do texto`),ag(),Tl(72,`td`)(73,`code`),cN(74,`var(--color-neutral-dark-70)`),ag()()(),Tl(75,`tr`)(76,`td`)(77,`code`),cN(78,`--border-radius`),ag()(),Tl(79,`td`),cN(80,`Contém o valor do raio dos cantos do elemento\xA0`),ag(),Tl(81,`td`)(82,`code`),cN(83,`var(--border-radius-md)`),ag()()(),Tl(84,`tr`)(85,`td`)(86,`code`),cN(87,`--border-width`),ag()(),Tl(88,`td`),cN(89,`Contém o valor da largura dos cantos do elemento\xA0`),ag(),Tl(90,`td`)(91,`code`),cN(92,`var(--border-width-sm)`),ag()()(),Tl(93,`tr`)(94,`td`)(95,`code`),cN(96,`--border-color`),ag()(),Tl(97,`td`),cN(98,`Cor da borda`),ag(),Tl(99,`td`)(100,`code`),cN(101,`var(--color-neutral-light-20)`),ag()()(),Tl(102,`tr`)(103,`td`)(104,`code`),cN(105,`--background`),ag()(),Tl(106,`td`),cN(107,`Cor de background`),ag(),Tl(108,`td`)(109,`code`),cN(110,`var(--color-neutral-light-00)`),ag()()(),Tl(111,`tr`)(112,`td`)(113,`code`),cN(114,`--shadow`),ag()(),Tl(115,`td`),cN(116,`Contém o valor da sombra do elemento`),ag(),Tl(117,`td`)(118,`code`),cN(119,`var(--shadow-md)`),ag()()(),Tl(120,`tr`)(121,`td`)(122,`strong`),cN(123,`po-loading-icon`),ag()(),Gl(124,`td`)(125,`td`),ag(),Tl(126,`tr`)(127,`td`)(128,`code`),cN(129,`--color`),ag()(),Tl(130,`td`),cN(131,`Cor principal do spinner`),ag(),Tl(132,`td`)(133,`code`),cN(134,`var(--color-action-default)`),ag()()()()()(),Tl(135,`div`,7)(136,`h4`,8),cN(137,`Seletor`),ag(),Tl(138,`pre`,9),cN(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),ag()(),Tl(140,`h4`,10),cN(141,`Propriedades`),ag(),Tl(142,`table`,11)(143,`tr`,12)(144,`th`,13),cN(145,`Nome`),ag(),Tl(146,`th`,13),cN(147,`Tipo`),ag(),Tl(148,`th`,13),cN(149,`Padrão`),ag(),Tl(150,`th`,13),cN(151,`Descrição`),ag()(),Tl(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),cN(156,` p-screen-lock`),Gl(157,`br`),ag()()(),Tl(158,`td`,18)(159,`code`,19),cN(160,`boolean`),ag()(),Tl(161,`td`,20)(162,`p`)(163,`code`),cN(164,`false`),ag()()(),Tl(165,`td`,21)(166,`em`)(167,`strong`),cN(168,`(opcional)`),ag()(),Tl(169,`p`),cN(170,`Define se o `),Tl(171,`em`),cN(172,`overlay`),ag(),cN(173,` será aplicado a um `),Tl(174,`em`),cN(175,`container`),ag(),cN(176,` ou à página inteira.`),ag(),Tl(177,`p`),cN(178,`Para utilizar o componente como um `),Tl(179,`em`),cN(180,`container`),ag(),cN(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),ag(),Tl(182,`pre`)(183,`code`),cN(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),ag()()()(),Tl(185,`tr`,14)(186,`td`,15)(187,`div`,16)(188,`span`,17),cN(189,` p-size`),Gl(190,`br`),ag()()(),Tl(191,`td`,18)(192,`code`,22),cN(193,`string`),ag()(),Tl(194,`td`,20)(195,`p`)(196,`code`),cN(197,`lg`),ag()()(),Tl(198,`td`,21)(199,`em`)(200,`strong`),cN(201,`(opcional)`),ag()(),Tl(202,`p`),cN(203,`Define o tamanho do componente com base no tamanho do ícone de `),Tl(204,`em`),cN(205,`loading`),ag(),cN(206,`.`),ag(),Tl(207,`p`),cN(208,`Tamanhos disponíveis para o `),Tl(209,`em`),cN(210,`loading`),ag(),cN(211,`:`),ag(),Tl(212,`ul`)(213,`li`)(214,`code`),cN(215,`xs`),ag(),cN(216,`: 1rem`),ag(),Tl(217,`li`)(218,`code`),cN(219,`sm`),ag(),cN(220,`: 1.5rem`),ag(),Tl(221,`li`)(222,`code`),cN(223,`md`),ag(),cN(224,`: 3rem`),ag(),Tl(225,`li`)(226,`code`),cN(227,`lg`),ag(),cN(228,`: 5rem (valor padrão)`),ag()()()(),Tl(229,`tr`,14)(230,`td`,15)(231,`div`,16)(232,`span`,17),cN(233,` p-text`),Gl(234,`br`),ag()()(),Tl(235,`td`,18)(236,`code`,22),cN(237,`string`),ag()(),Tl(238,`td`,20)(239,`p`)(240,`code`),cN(241,`Carregando`),ag()()(),Tl(242,`td`,21)(243,`em`)(244,`strong`),cN(245,`(opcional)`),ag()(),Tl(246,`p`),cN(247,`Texto a ser exibido no componente.`),ag(),Tl(248,`blockquote`)(249,`p`),cN(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),Tl(251,`a`,23)(252,`strong`),cN(253,`PoI18n`),ag()(),cN(254,` ou navegador.`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var xe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Loading Overlay`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-loading-overlay-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-loading-overlay-basic-view`)(6,`sample-po-loading-overlay-labs-view`)(7,`sample-po-loading-overlay-connection-test-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ie,le,pe,se],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(xe),bL]})}return o})();var Ye=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,de]})}return o})();export{Ye as DocPoLoadingOverlayModule};