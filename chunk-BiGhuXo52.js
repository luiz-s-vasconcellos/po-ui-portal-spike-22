import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Mt as Xy,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,cn as lU,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var Z=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(a,i){a&1&&ql(0,`po-info`,0)},dependencies:[kbe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o});var ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Info Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-info-basic/sample-po-info-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-info-basic/sample-po-info-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-info-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,re,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:Xy.Horizontal},{label:`Vertical`,value:Xy.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let c=Vx();ql(0,`po-info`,1)(1,`po-divider`),Ml(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.label,r)||(i.label=r),Jy(r)}),lg(),f0(),Ml(6,`po-input`,4),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.value,r)||(i.value=r),Jy(r)}),lg(),f0(),lg(),Ml(7,`div`,2)(8,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.url,r)||(i.url=r),Jy(r)}),lg(),f0(),Ml(9,`po-number`,6),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.labelSize,r)||(i.labelSize=r),Jy(r)}),lg(),f0(),Ml(10,`po-radio-group`,7),Mw(`ngModelChange`,function(r){return Qy(c),yN(i.orientation,r)||(i.orientation=r),Jy(r)}),lg(),f0(),lg(),Ml(11,`div`,2)(12,`po-button`,8),ht(`p-click`,function(){return i.restore()}),lg()()()}a&2&&(cw(`p-label`,i.label)(`p-label-size`,i.labelSize)(`p-orientation`,i.orientation)(`p-url`,i.url)(`p-value`,i.value),Up(5),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.value),p0(),Up(2),Tw(`ngModel`,i.url),p0(),Up(),Tw(`ngModel`,i.labelSize),p0(),Up(),Tw(`ngModel`,i.orientation),cw(`p-options`,i.orientationOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,lU,xbe,q0e,kbe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Info Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-info-labs/sample-po-info-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-info-labs/sample-po-info-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-info-labs`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,de,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(a,i){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoInfoModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-info.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoInfoComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),lg()(),Ml(15,`div`,6)(16,`h4`,7),mN(17,`Seletor`),lg(),Ml(18,`pre`,8),mN(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),lg()(),Ml(20,`h4`,9),mN(21,`Propriedades`),lg(),Ml(22,`table`,10)(23,`tr`,11)(24,`th`,12),mN(25,`Nome`),lg(),Ml(26,`th`,12),mN(27,`Tipo`),lg(),Ml(28,`th`,12),mN(29,`Padrão`),lg(),Ml(30,`th`,12),mN(31,`Descrição`),lg()(),Ml(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),mN(36,` p-label`),ql(37,`br`),lg()()(),Ml(38,`td`,17)(39,`code`,18),mN(40,`string`),lg()(),Ml(41,`td`,19),mN(42,`-`),lg(),Ml(43,`td`,20)(44,`p`),mN(45,`Valor do rótulo a ser exibido.`),lg()()(),Ml(46,`tr`,13)(47,`td`,14)(48,`div`,15)(49,`span`,16),mN(50,` p-label-size`),ql(51,`br`),lg()()(),Ml(52,`td`,17)(53,`code`,21),mN(54,`number`),lg()(),Ml(55,`td`,19),mN(56,`-`),lg(),Ml(57,`td`,20)(58,`em`)(59,`strong`),mN(60,`(opcional)`),lg()(),Ml(61,`p`),mN(62,`Quantidade de `),Ml(63,`a`,22),mN(64,`colunas`),lg(),mN(65,` usadas para a exibição da `),Ml(66,`code`),mN(67,`p-label`),lg(),mN(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),lg(),Ml(69,`p`),mN(70,`Valores válidos:`),lg(),Ml(71,`ul`)(72,`li`)(73,`code`),mN(74,`[1 .. 11]`),lg()()(),Ml(75,`blockquote`)(76,`p`),mN(77,`A propriedade `),Ml(78,`code`),mN(79,`p-value`),lg(),mN(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),lg()()()(),Ml(81,`tr`,13)(82,`td`,14)(83,`div`,15)(84,`span`,16),mN(85,` p-orientation`),ql(86,`br`),lg()()(),Ml(87,`td`,17)(88,`code`,23),mN(89,`PoInfoOrientation`),lg()(),Ml(90,`td`,19)(91,`p`)(92,`code`),mN(93,`vertical`),lg()()(),Ml(94,`td`,20)(95,`em`)(96,`strong`),mN(97,`(opcional)`),lg()(),Ml(98,`p`),mN(99,`Define o layout de exibição.`),lg(),Ml(100,`blockquote`)(101,`p`),mN(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),Ml(103,`code`),mN(104,`p-label-size`),lg(),mN(105,` para um maior controle das informações exibidas.`),lg()()()(),Ml(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),mN(110,` p-size`),ql(111,`br`),lg()()(),Ml(112,`td`,17)(113,`code`,18),mN(114,`string`),lg()(),Ml(115,`td`,19)(116,`p`)(117,`code`),mN(118,`medium`),lg()()(),Ml(119,`td`,20)(120,`em`)(121,`strong`),mN(122,`(opcional)`),lg()(),Ml(123,`p`),mN(124,`Define o tamanho do componente entre `),Ml(125,`code`),mN(126,`small`),lg(),mN(127,` ou `),Ml(128,`code`),mN(129,`medium`),lg(),mN(130,`.`),lg(),Ml(131,`blockquote`)(132,`p`),mN(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(134,`code`),mN(135,`medium`),lg(),mN(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(137,`a`,24),mN(138,`po-theme`),lg(),mN(139,`.`),lg()()()(),Ml(140,`tr`,13)(141,`td`,14)(142,`div`,15)(143,`span`,16),mN(144,` p-url`),ql(145,`br`),lg()()(),Ml(146,`td`,17)(147,`code`,18),mN(148,`string`),lg()(),Ml(149,`td`,19),mN(150,`-`),lg(),Ml(151,`td`,20)(152,`em`)(153,`strong`),mN(154,`(opcional)`),lg()(),Ml(155,`p`),mN(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),Ml(157,`em`),mN(158,`link`),lg(),mN(159,` e ao ser clicado será redirecionado para a URL informada.`),lg(),Ml(160,`blockquote`)(161,`p`),mN(162,`Caso informar `),Ml(163,`code`),mN(164,`http://`),lg(),mN(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Ml(166,`code`),mN(167,`/customers`),lg(),mN(168,`, será aberto na aba atual.`),lg()()()(),Ml(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),mN(173,` p-value`),ql(174,`br`),lg()()(),Ml(175,`td`,17)(176,`code`,18),mN(177,`string`),lg()(),Ml(178,`td`,19),mN(179,`-`),lg(),Ml(180,`td`,20)(181,`em`)(182,`strong`),mN(183,`(opcional)`),lg()(),Ml(184,`p`),mN(185,`Valor do conteúdo a ser exibido.`),lg()()()(),Ml(186,`h3`),mN(187,`Enums`),lg(),Ml(188,`h4`,4)(189,`code`,5),mN(190,`PoInfoOrientation`),lg()(),Ml(191,`div`,2)(192,`p`),mN(193,`Define os tipos de orientações disponíveis para o `),Ml(194,`code`),mN(195,`po-info`),lg(),mN(196,`.`),lg()(),Ml(197,`h4`,9),mN(198,`Propriedades`),lg(),Ml(199,`table`,10)(200,`tr`,11)(201,`th`,12),mN(202,`Nome`),lg(),Ml(203,`th`,12),mN(204,`Descrição`),lg()(),Ml(205,`tr`,13)(206,`td`,14)(207,`div`,15)(208,`span`,16),mN(209,` Horizontal`),ql(210,`br`),lg()()(),Ml(211,`td`,20)(212,`p`),mN(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),lg()()(),Ml(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),mN(218,` Vertical`),ql(219,`br`),lg()()(),Ml(220,`td`,20)(221,`p`),mN(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Info`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,i){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-info-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-info-basic-view`)(6,`sample-po-info-labs-view`),lg()()()),a&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(fe),NL]})}return o})();var Be=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,ae]})}return o})();export{Be as DocPoInfoModule};