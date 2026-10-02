import{Br as RE,Di as he,Dt as aae,Hn as AN,Kn as BP,Li as kL,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Wi as mg,Xn as C9,Yn as Bx,_n as tb,ai as aN,dr as Hp,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,la as ug,li as cE,lr as Hn,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,un as roe,vr as Jv,wt as _4}from"./main-TFA52GHY.js";var Z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(a,i){a&1&&Kc(0,`po-info`,0)},dependencies:[roe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o});var ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Info Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-info-basic/sample-po-info-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-info-basic/sample-po-info-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-info-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,re,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:tb.Horizontal},{label:`Vertical`,value:tb.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let c=Bx();Kc(0,`po-info`,1)(1,`po-divider`),Ac(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),RE(`ngModelChange`,function(r){return Jv(c),DN(i.label,r)||(i.label=r),e_(r)}),ug(),p0(),Ac(6,`po-input`,4),RE(`ngModelChange`,function(r){return Jv(c),DN(i.value,r)||(i.value=r),e_(r)}),ug(),p0(),ug(),Ac(7,`div`,2)(8,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(c),DN(i.url,r)||(i.url=r),e_(r)}),ug(),p0(),Ac(9,`po-number`,6),RE(`ngModelChange`,function(r){return Jv(c),DN(i.labelSize,r)||(i.labelSize=r),e_(r)}),ug(),p0(),Ac(10,`po-radio-group`,7),RE(`ngModelChange`,function(r){return Jv(c),DN(i.orientation,r)||(i.orientation=r),e_(r)}),ug(),p0(),ug(),Ac(11,`div`,2)(12,`po-button`,8),pt(`p-click`,function(){return i.restore()}),ug()()()}a&2&&(cE(`p-label`,i.label)(`p-label-size`,i.labelSize)(`p-orientation`,i.orientation)(`p-url`,i.url)(`p-value`,i.value),Hp(5),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.value),m0(),Hp(2),TE(`ngModel`,i.url),m0(),Hp(),TE(`ngModel`,i.labelSize),m0(),Hp(),TE(`ngModel`,i.orientation),cE(`p-options`,i.orientationOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,_4,Jne,Cte,roe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Info Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-info-labs/sample-po-info-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-info-labs/sample-po-info-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-info-labs`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,de,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(a,i){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoInfoModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-info.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoInfoComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),ug()(),Ac(15,`div`,6)(16,`h4`,7),vN(17,`Seletor`),ug(),Ac(18,`pre`,8),vN(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),ug()(),Ac(20,`h4`,9),vN(21,`Propriedades`),ug(),Ac(22,`table`,10)(23,`tr`,11)(24,`th`,12),vN(25,`Nome`),ug(),Ac(26,`th`,12),vN(27,`Tipo`),ug(),Ac(28,`th`,12),vN(29,`Padrão`),ug(),Ac(30,`th`,12),vN(31,`Descrição`),ug()(),Ac(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),vN(36,` p-label`),Kc(37,`br`),ug()()(),Ac(38,`td`,17)(39,`code`,18),vN(40,`string`),ug()(),Ac(41,`td`,19),vN(42,`-`),ug(),Ac(43,`td`,20)(44,`p`),vN(45,`Valor do rótulo a ser exibido.`),ug()()(),Ac(46,`tr`,13)(47,`td`,14)(48,`div`,15)(49,`span`,16),vN(50,` p-label-size`),Kc(51,`br`),ug()()(),Ac(52,`td`,17)(53,`code`,21),vN(54,`number`),ug()(),Ac(55,`td`,19),vN(56,`-`),ug(),Ac(57,`td`,20)(58,`em`)(59,`strong`),vN(60,`(opcional)`),ug()(),Ac(61,`p`),vN(62,`Quantidade de `),Ac(63,`a`,22),vN(64,`colunas`),ug(),vN(65,` usadas para a exibição da `),Ac(66,`code`),vN(67,`p-label`),ug(),vN(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),ug(),Ac(69,`p`),vN(70,`Valores válidos:`),ug(),Ac(71,`ul`)(72,`li`)(73,`code`),vN(74,`[1 .. 11]`),ug()()(),Ac(75,`blockquote`)(76,`p`),vN(77,`A propriedade `),Ac(78,`code`),vN(79,`p-value`),ug(),vN(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),ug()()()(),Ac(81,`tr`,13)(82,`td`,14)(83,`div`,15)(84,`span`,16),vN(85,` p-orientation`),Kc(86,`br`),ug()()(),Ac(87,`td`,17)(88,`code`,23),vN(89,`PoInfoOrientation`),ug()(),Ac(90,`td`,19)(91,`p`)(92,`code`),vN(93,`vertical`),ug()()(),Ac(94,`td`,20)(95,`em`)(96,`strong`),vN(97,`(opcional)`),ug()(),Ac(98,`p`),vN(99,`Define o layout de exibição.`),ug(),Ac(100,`blockquote`)(101,`p`),vN(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),Ac(103,`code`),vN(104,`p-label-size`),ug(),vN(105,` para um maior controle das informações exibidas.`),ug()()()(),Ac(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),vN(110,` p-size`),Kc(111,`br`),ug()()(),Ac(112,`td`,17)(113,`code`,18),vN(114,`string`),ug()(),Ac(115,`td`,19)(116,`p`)(117,`code`),vN(118,`medium`),ug()()(),Ac(119,`td`,20)(120,`em`)(121,`strong`),vN(122,`(opcional)`),ug()(),Ac(123,`p`),vN(124,`Define o tamanho do componente entre `),Ac(125,`code`),vN(126,`small`),ug(),vN(127,` ou `),Ac(128,`code`),vN(129,`medium`),ug(),vN(130,`.`),ug(),Ac(131,`blockquote`)(132,`p`),vN(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(134,`code`),vN(135,`medium`),ug(),vN(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(137,`a`,24),vN(138,`po-theme`),ug(),vN(139,`.`),ug()()()(),Ac(140,`tr`,13)(141,`td`,14)(142,`div`,15)(143,`span`,16),vN(144,` p-url`),Kc(145,`br`),ug()()(),Ac(146,`td`,17)(147,`code`,18),vN(148,`string`),ug()(),Ac(149,`td`,19),vN(150,`-`),ug(),Ac(151,`td`,20)(152,`em`)(153,`strong`),vN(154,`(opcional)`),ug()(),Ac(155,`p`),vN(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),Ac(157,`em`),vN(158,`link`),ug(),vN(159,` e ao ser clicado será redirecionado para a URL informada.`),ug(),Ac(160,`blockquote`)(161,`p`),vN(162,`Caso informar `),Ac(163,`code`),vN(164,`http://`),ug(),vN(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Ac(166,`code`),vN(167,`/customers`),ug(),vN(168,`, será aberto na aba atual.`),ug()()()(),Ac(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),vN(173,` p-value`),Kc(174,`br`),ug()()(),Ac(175,`td`,17)(176,`code`,18),vN(177,`string`),ug()(),Ac(178,`td`,19),vN(179,`-`),ug(),Ac(180,`td`,20)(181,`em`)(182,`strong`),vN(183,`(opcional)`),ug()(),Ac(184,`p`),vN(185,`Valor do conteúdo a ser exibido.`),ug()()()(),Ac(186,`h3`),vN(187,`Enums`),ug(),Ac(188,`h4`,4)(189,`code`,5),vN(190,`PoInfoOrientation`),ug()(),Ac(191,`div`,2)(192,`p`),vN(193,`Define os tipos de orientações disponíveis para o `),Ac(194,`code`),vN(195,`po-info`),ug(),vN(196,`.`),ug()(),Ac(197,`h4`,9),vN(198,`Propriedades`),ug(),Ac(199,`table`,10)(200,`tr`,11)(201,`th`,12),vN(202,`Nome`),ug(),Ac(203,`th`,12),vN(204,`Descrição`),ug()(),Ac(205,`tr`,13)(206,`td`,14)(207,`div`,15)(208,`span`,16),vN(209,` Horizontal`),Kc(210,`br`),ug()()(),Ac(211,`td`,20)(212,`p`),vN(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),ug()()(),Ac(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),vN(218,` Vertical`),Kc(219,`br`),ug()()(),Ac(220,`td`,20)(221,`p`),vN(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Info`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-info-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-info-basic-view`)(6,`sample-po-info-labs-view`),ug()()()),a&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(fe),kL]})}return o})();var Be=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,ae]})}return o})();export{Be as DocPoInfoModule};