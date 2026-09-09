import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rn as jy,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var Z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(a,i){a&1&&Gl(0,`po-info`,0)},dependencies:[ybe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o});var ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Info Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-info-basic/sample-po-info-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-info-basic/sample-po-info-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-info-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,re,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:jy.Horizontal},{label:`Vertical`,value:jy.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let c=Ax();Gl(0,`po-info`,1)(1,`po-divider`),Tl(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),ww(`ngModelChange`,function(r){return Ky(c),uN(i.label,r)||(i.label=r),Xy(r)}),ag(),a0(),Tl(6,`po-input`,4),ww(`ngModelChange`,function(r){return Ky(c),uN(i.value,r)||(i.value=r),Xy(r)}),ag(),a0(),ag(),Tl(7,`div`,2)(8,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(c),uN(i.url,r)||(i.url=r),Xy(r)}),ag(),a0(),Tl(9,`po-number`,6),ww(`ngModelChange`,function(r){return Ky(c),uN(i.labelSize,r)||(i.labelSize=r),Xy(r)}),ag(),a0(),Tl(10,`po-radio-group`,7),ww(`ngModelChange`,function(r){return Ky(c),uN(i.orientation,r)||(i.orientation=r),Xy(r)}),ag(),a0(),ag(),Tl(11,`div`,2)(12,`po-button`,8),ht(`p-click`,function(){return i.restore()}),ag()()()}a&2&&(nw(`p-label`,i.label)(`p-label-size`,i.labelSize)(`p-orientation`,i.orientation)(`p-url`,i.url)(`p-value`,i.value),jp(5),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.value),l0(),jp(2),Ew(`ngModel`,i.url),l0(),jp(),Ew(`ngModel`,i.labelSize),l0(),jp(),Ew(`ngModel`,i.orientation),nw(`p-options`,i.orientationOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,iU,ube,L0e,ybe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Info Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-info-labs/sample-po-info-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-info-labs/sample-po-info-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-info-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,de,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(a,i){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoInfoModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-info.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoInfoComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),ag()(),Tl(15,`div`,6)(16,`h4`,7),cN(17,`Seletor`),ag(),Tl(18,`pre`,8),cN(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),ag()(),Tl(20,`h4`,9),cN(21,`Propriedades`),ag(),Tl(22,`table`,10)(23,`tr`,11)(24,`th`,12),cN(25,`Nome`),ag(),Tl(26,`th`,12),cN(27,`Tipo`),ag(),Tl(28,`th`,12),cN(29,`Padrão`),ag(),Tl(30,`th`,12),cN(31,`Descrição`),ag()(),Tl(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),cN(36,` p-label`),Gl(37,`br`),ag()()(),Tl(38,`td`,17)(39,`code`,18),cN(40,`string`),ag()(),Tl(41,`td`,19),cN(42,`-`),ag(),Tl(43,`td`,20)(44,`p`),cN(45,`Valor do rótulo a ser exibido.`),ag()()(),Tl(46,`tr`,13)(47,`td`,14)(48,`div`,15)(49,`span`,16),cN(50,` p-label-size`),Gl(51,`br`),ag()()(),Tl(52,`td`,17)(53,`code`,21),cN(54,`number`),ag()(),Tl(55,`td`,19),cN(56,`-`),ag(),Tl(57,`td`,20)(58,`em`)(59,`strong`),cN(60,`(opcional)`),ag()(),Tl(61,`p`),cN(62,`Quantidade de `),Tl(63,`a`,22),cN(64,`colunas`),ag(),cN(65,` usadas para a exibição da `),Tl(66,`code`),cN(67,`p-label`),ag(),cN(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),ag(),Tl(69,`p`),cN(70,`Valores válidos:`),ag(),Tl(71,`ul`)(72,`li`)(73,`code`),cN(74,`[1 .. 11]`),ag()()(),Tl(75,`blockquote`)(76,`p`),cN(77,`A propriedade `),Tl(78,`code`),cN(79,`p-value`),ag(),cN(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),ag()()()(),Tl(81,`tr`,13)(82,`td`,14)(83,`div`,15)(84,`span`,16),cN(85,` p-orientation`),Gl(86,`br`),ag()()(),Tl(87,`td`,17)(88,`code`,23),cN(89,`PoInfoOrientation`),ag()(),Tl(90,`td`,19)(91,`p`)(92,`code`),cN(93,`vertical`),ag()()(),Tl(94,`td`,20)(95,`em`)(96,`strong`),cN(97,`(opcional)`),ag()(),Tl(98,`p`),cN(99,`Define o layout de exibição.`),ag(),Tl(100,`blockquote`)(101,`p`),cN(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),Tl(103,`code`),cN(104,`p-label-size`),ag(),cN(105,` para um maior controle das informações exibidas.`),ag()()()(),Tl(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),cN(110,` p-size`),Gl(111,`br`),ag()()(),Tl(112,`td`,17)(113,`code`,18),cN(114,`string`),ag()(),Tl(115,`td`,19)(116,`p`)(117,`code`),cN(118,`medium`),ag()()(),Tl(119,`td`,20)(120,`em`)(121,`strong`),cN(122,`(opcional)`),ag()(),Tl(123,`p`),cN(124,`Define o tamanho do componente entre `),Tl(125,`code`),cN(126,`small`),ag(),cN(127,` ou `),Tl(128,`code`),cN(129,`medium`),ag(),cN(130,`.`),ag(),Tl(131,`blockquote`)(132,`p`),cN(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(134,`code`),cN(135,`medium`),ag(),cN(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(137,`a`,24),cN(138,`po-theme`),ag(),cN(139,`.`),ag()()()(),Tl(140,`tr`,13)(141,`td`,14)(142,`div`,15)(143,`span`,16),cN(144,` p-url`),Gl(145,`br`),ag()()(),Tl(146,`td`,17)(147,`code`,18),cN(148,`string`),ag()(),Tl(149,`td`,19),cN(150,`-`),ag(),Tl(151,`td`,20)(152,`em`)(153,`strong`),cN(154,`(opcional)`),ag()(),Tl(155,`p`),cN(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),Tl(157,`em`),cN(158,`link`),ag(),cN(159,` e ao ser clicado será redirecionado para a URL informada.`),ag(),Tl(160,`blockquote`)(161,`p`),cN(162,`Caso informar `),Tl(163,`code`),cN(164,`http://`),ag(),cN(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Tl(166,`code`),cN(167,`/customers`),ag(),cN(168,`, será aberto na aba atual.`),ag()()()(),Tl(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),cN(173,` p-value`),Gl(174,`br`),ag()()(),Tl(175,`td`,17)(176,`code`,18),cN(177,`string`),ag()(),Tl(178,`td`,19),cN(179,`-`),ag(),Tl(180,`td`,20)(181,`em`)(182,`strong`),cN(183,`(opcional)`),ag()(),Tl(184,`p`),cN(185,`Valor do conteúdo a ser exibido.`),ag()()()(),Tl(186,`h3`),cN(187,`Enums`),ag(),Tl(188,`h4`,4)(189,`code`,5),cN(190,`PoInfoOrientation`),ag()(),Tl(191,`div`,2)(192,`p`),cN(193,`Define os tipos de orientações disponíveis para o `),Tl(194,`code`),cN(195,`po-info`),ag(),cN(196,`.`),ag()(),Tl(197,`h4`,9),cN(198,`Propriedades`),ag(),Tl(199,`table`,10)(200,`tr`,11)(201,`th`,12),cN(202,`Nome`),ag(),Tl(203,`th`,12),cN(204,`Descrição`),ag()(),Tl(205,`tr`,13)(206,`td`,14)(207,`div`,15)(208,`span`,16),cN(209,` Horizontal`),Gl(210,`br`),ag()()(),Tl(211,`td`,20)(212,`p`),cN(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),ag()()(),Tl(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),cN(218,` Vertical`),Gl(219,`br`),ag()()(),Tl(220,`td`,20)(221,`p`),cN(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Info`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-info-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-info-basic-view`)(6,`sample-po-info-labs-view`),ag()()()),a&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(fe),bL]})}return o})();var Be=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,ae]})}return o})();export{Be as DocPoInfoModule};