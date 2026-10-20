import{$r as Zn,Br as Sx,Ei as jc,Gt as cb,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Rt as _oe,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(a,i){a&1&&nu(0,`po-info`,0)},dependencies:[_oe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o});var ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Info Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-info-basic/sample-po-info-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-info-basic/sample-po-info-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-info-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,re,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:cb.Horizontal},{label:`Vertical`,value:cb.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let c=Sx();nu(0,`po-info`,1)(1,`po-divider`),jc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.label,r)||(i.label=r),v_(r)}),wg(),jc(6,`po-input`,4),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.value,r)||(i.value=r),v_(r)}),wg()(),jc(7,`div`,2)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.url,r)||(i.url=r),v_(r)}),wg(),jc(9,`po-number`,6),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.labelSize,r)||(i.labelSize=r),v_(r)}),wg(),jc(10,`po-radio-group`,7),JN(),ob(`ngModelChange`,function(r){return y_(c),sO(i.orientation,r)||(i.orientation=r),v_(r)}),wg()(),jc(11,`div`,2)(12,`po-button`,8),mt(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(jE(`p-label`,i.label)(`p-label-size`,i.labelSize)(`p-orientation`,i.orientation)(`p-url`,i.url)(`p-value`,i.value),rg(5),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.value),t0(),rg(2),ib(`ngModel`,i.url),t0(),rg(),ib(`ngModel`,i.labelSize),t0(),rg(),ib(`ngModel`,i.orientation),jE(`p-options`,i.orientationOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,A5,doe,Ote,_oe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Info Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-info-labs/sample-po-info-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
</po-info>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="url" [(ngModel)]="url" p-clean p-label="Url"> </po-input>

    <po-number
      class="po-lg-2 po-md-6"
      name="labelSize"
      [(ngModel)]="labelSize"
      p-clean
      p-label="Label size"
      p-max="11"
      p-min="1"
    >
    </po-number>

    <po-radio-group
      class="po-lg-6 po-md-12"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-info-labs/sample-po-info-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoInfoOrientation, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-info-labs',
  templateUrl: './sample-po-info-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoLabsComponent implements OnInit {
  label: string;
  labelSize: number;
  orientation: PoInfoOrientation;
  url: string;
  value: string;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoInfoOrientation.Horizontal },
    { label: 'Vertical', value: PoInfoOrientation.Vertical }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = 'PO Info';
    this.labelSize = undefined;
    this.orientation = undefined;
    this.url = undefined;
    this.value = undefined;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-info-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,de,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoInfoModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-info.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoInfoComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),wg()(),jc(15,`div`,6)(16,`h4`,7),iO(17,`Seletor`),wg(),jc(18,`pre`,8),iO(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),wg()(),jc(20,`h4`,9),iO(21,`Propriedades`),wg(),jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),iO(25,`Nome`),wg(),jc(26,`th`,12),iO(27,`Tipo`),wg(),jc(28,`th`,12),iO(29,`Padrão`),wg(),jc(30,`th`,12),iO(31,`Descrição`),wg()(),jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),iO(36,` p-label`),nu(37,`br`),wg()()(),jc(38,`td`,17)(39,`code`,18),iO(40,`string`),wg()(),jc(41,`td`,19),iO(42,`-`),wg(),jc(43,`td`,20)(44,`p`),iO(45,`Valor do rótulo a ser exibido.`),wg()()(),jc(46,`tr`,13)(47,`td`,14)(48,`div`,15)(49,`span`,16),iO(50,` p-label-size`),nu(51,`br`),wg()()(),jc(52,`td`,17)(53,`code`,21),iO(54,`number`),wg()(),jc(55,`td`,19),iO(56,`-`),wg(),jc(57,`td`,20)(58,`em`)(59,`strong`),iO(60,`(opcional)`),wg()(),jc(61,`p`),iO(62,`Quantidade de `),jc(63,`a`,22),iO(64,`colunas`),wg(),iO(65,` usadas para a exibição da `),jc(66,`code`),iO(67,`p-label`),wg(),iO(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),wg(),jc(69,`p`),iO(70,`Valores válidos:`),wg(),jc(71,`ul`)(72,`li`)(73,`code`),iO(74,`[1 .. 11]`),wg()()(),jc(75,`blockquote`)(76,`p`),iO(77,`A propriedade `),jc(78,`code`),iO(79,`p-value`),wg(),iO(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),wg()()()(),jc(81,`tr`,13)(82,`td`,14)(83,`div`,15)(84,`span`,16),iO(85,` p-orientation`),nu(86,`br`),wg()()(),jc(87,`td`,17)(88,`code`,23),iO(89,`PoInfoOrientation`),wg()(),jc(90,`td`,19)(91,`p`)(92,`code`),iO(93,`vertical`),wg()()(),jc(94,`td`,20)(95,`em`)(96,`strong`),iO(97,`(opcional)`),wg()(),jc(98,`p`),iO(99,`Define o layout de exibição.`),wg(),jc(100,`blockquote`)(101,`p`),iO(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),jc(103,`code`),iO(104,`p-label-size`),wg(),iO(105,` para um maior controle das informações exibidas.`),wg()()()(),jc(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),iO(110,` p-size`),nu(111,`br`),wg()()(),jc(112,`td`,17)(113,`code`,18),iO(114,`string`),wg()(),jc(115,`td`,19)(116,`p`)(117,`code`),iO(118,`medium`),wg()()(),jc(119,`td`,20)(120,`em`)(121,`strong`),iO(122,`(opcional)`),wg()(),jc(123,`p`),iO(124,`Define o tamanho do componente entre `),jc(125,`code`),iO(126,`small`),wg(),iO(127,` ou `),jc(128,`code`),iO(129,`medium`),wg(),iO(130,`.`),wg(),jc(131,`blockquote`)(132,`p`),iO(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(134,`code`),iO(135,`medium`),wg(),iO(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(137,`a`,24),iO(138,`po-theme`),wg(),iO(139,`.`),wg()()()(),jc(140,`tr`,13)(141,`td`,14)(142,`div`,15)(143,`span`,16),iO(144,` p-url`),nu(145,`br`),wg()()(),jc(146,`td`,17)(147,`code`,18),iO(148,`string`),wg()(),jc(149,`td`,19),iO(150,`-`),wg(),jc(151,`td`,20)(152,`em`)(153,`strong`),iO(154,`(opcional)`),wg()(),jc(155,`p`),iO(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),jc(157,`em`),iO(158,`link`),wg(),iO(159,` e ao ser clicado será redirecionado para a URL informada.`),wg(),jc(160,`blockquote`)(161,`p`),iO(162,`Caso informar `),jc(163,`code`),iO(164,`http://`),wg(),iO(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),jc(166,`code`),iO(167,`/customers`),wg(),iO(168,`, será aberto na aba atual.`),wg()()()(),jc(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),iO(173,` p-value`),nu(174,`br`),wg()()(),jc(175,`td`,17)(176,`code`,18),iO(177,`string`),wg()(),jc(178,`td`,19),iO(179,`-`),wg(),jc(180,`td`,20)(181,`em`)(182,`strong`),iO(183,`(opcional)`),wg()(),jc(184,`p`),iO(185,`Valor do conteúdo a ser exibido.`),wg()()()(),jc(186,`h3`),iO(187,`Enums`),wg(),jc(188,`h4`,4)(189,`code`,5),iO(190,`PoInfoOrientation`),wg()(),jc(191,`div`,2)(192,`p`),iO(193,`Define os tipos de orientações disponíveis para o `),jc(194,`code`),iO(195,`po-info`),wg(),iO(196,`.`),wg()(),jc(197,`h4`,9),iO(198,`Propriedades`),wg(),jc(199,`table`,10)(200,`tr`,11)(201,`th`,12),iO(202,`Nome`),wg(),jc(203,`th`,12),iO(204,`Descrição`),wg()(),jc(205,`tr`,13)(206,`td`,14)(207,`div`,15)(208,`span`,16),iO(209,` Horizontal`),nu(210,`br`),wg()()(),jc(211,`td`,20)(212,`p`),iO(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),wg()()(),jc(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),iO(218,` Vertical`),nu(219,`br`),wg()()(),jc(220,`td`,20)(221,`p`),iO(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Info`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-info-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-info-basic-view`)(6,`sample-po-info-labs-view`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(fe),C1]})}return o})();var Be=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,ae]})}return o})();export{Be as DocPoInfoModule};