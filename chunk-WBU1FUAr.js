import{$r as Xy$1,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Li as ht,Mn as ys,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,mt as T8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN}from"./main-3EWTGE7T.js";var ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-divider-basic`]],standalone:!1,decls:1,vars:0,template:function(a,n){a&1&&Gl(0,`po-divider`)},dependencies:[Xy],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o});var ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-divider-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Divider Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-divider-basic/sample-po-divider-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-divider></po-divider>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-divider-basic/sample-po-divider-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-divider-basic',
  templateUrl: './sample-po-divider-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-divider-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,se,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ee],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{borderWidth;label;borderWidthList=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}restore(){this.label=void 0,this.borderWidth=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-divider-labs`]],standalone:!1,decls:8,vars:5,consts:[[`f`,`ngForm`],[3,`p-label`,`p-border-width`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`borderWidth`,`p-label`,`Border width`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,n){if(a&1){let h=Ax();Gl(0,`po-divider`,1),Tl(1,`form`,null,0)(3,`div`,2)(4,`po-input`,3),ww(`ngModelChange`,function(g){return Ky(h),uN(n.label,g)||(n.label=g),Xy$1(g)}),ag(),a0(),Tl(5,`po-select`,4),ww(`ngModelChange`,function(g){return Ky(h),uN(n.borderWidth,g)||(n.borderWidth=g),Xy$1(g)}),ag(),a0(),ag(),Tl(6,`div`,2)(7,`po-button`,5),ht(`p-click`,function(){return n.restore()}),ag()()()}a&2&&(nw(`p-label`,n.label)(`p-border-width`,n.borderWidth),jp(4),Ew(`ngModel`,n.label),l0(),jp(),Ew(`ngModel`,n.borderWidth),nw(`p-options`,n.borderWidthList),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy,iU,fbe],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-divider-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Divider Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-divider-labs/sample-po-divider-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-divider [p-label]="label" [p-border-width]="borderWidth"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
    <po-select
      class="po-md-6"
      name="borderWidth"
      [(ngModel)]="borderWidth"
      p-label="Border width"
      [p-options]="borderWidthList"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-divider-labs/sample-po-divider-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-divider-labs',
  templateUrl: './sample-po-divider-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerLabsComponent implements OnInit {
  borderWidth: string;
  label: string;

  public readonly borderWidthList: Array<PoSelectOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = undefined;
    this.borderWidth = undefined;
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-divider-labs`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,oe],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{router=f(Cn);birthDate=`26/12/1978`;email=`john.doe@po-ui.com.br`;fathersName=`Mike Doe`;genre=`male`;graduation=`College Degree`;mothersName=`Jane Doe`;name=`John Doe`;nationality=`USA`;nickname=`Big John`;placeOfBirth=`Colorado`;statusValue=`Success`;userId=122635;breadcrumb={items:[{label:`Home`,link:`/`},{label:`User Detail`}]};static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-divider-user-detail`]],standalone:!1,decls:19,vars:13,consts:[[`p-title`,`User Detail`,3,`p-breadcrumb`],[1,`po-row`,`po-mb-4`],[`p-label`,`Status`,1,`po-md-12`],[`p-icon`,``,`p-label`,`Status`,`p-type`,`success`,1,`po-md-4`,3,`p-value`],[`p-label`,`User ID`,1,`po-md-4`,3,`p-value`],[`p-label`,`Personal data`,1,`po-md-12`],[`p-label`,`Name`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Nickname`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`E-mail`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Birthday`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Genre`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Nationality`,1,`po-md-4`,`po-mb-md-2`,3,`p-value`],[`p-label`,`Place of birth`,1,`po-md-4`,3,`p-value`],[`p-label`,`Gratuation`,1,`po-md-4`,3,`p-value`],[`p-label`,`Relationship`,1,`po-md-12`],[`p-label`,`Father's name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Mother's name`,1,`po-md-4`,3,`p-value`]],template:function(a,n){a&1&&(Tl(0,`po-page-detail`,0)(1,`div`,1),Gl(2,`po-divider`,2)(3,`po-tag`,3)(4,`po-info`,4),ag(),Tl(5,`div`,1),Gl(6,`po-divider`,5)(7,`po-info`,6)(8,`po-info`,7)(9,`po-info`,8)(10,`po-info`,9)(11,`po-info`,10)(12,`po-info`,11)(13,`po-info`,12)(14,`po-info`,13),ag(),Tl(15,`div`,1),Gl(16,`po-divider`,14)(17,`po-info`,15)(18,`po-info`,16),ag()()),a&2&&(nw(`p-breadcrumb`,n.breadcrumb),jp(3),nw(`p-value`,n.statusValue),jp(),nw(`p-value`,n.userId),jp(3),nw(`p-value`,n.name),jp(),nw(`p-value`,n.nickname),jp(),nw(`p-value`,n.email),jp(),nw(`p-value`,n.birthDate),jp(),nw(`p-value`,n.genre),jp(),nw(`p-value`,n.nationality),jp(),nw(`p-value`,n.placeOfBirth),jp(),nw(`p-value`,n.graduation),jp(3),nw(`p-value`,n.fathersName),jp(),nw(`p-value`,n.mothersName))},dependencies:[Xy,ys,ybe,T8e],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-divider-user-detail-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,n){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Divider - User Detail`),ag(),Tl(4,`a`,2),ht(`click`,function(){return n.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-divider-user-detail/sample-po-divider-user-detail.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb">
  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Status"></po-divider>

    <po-tag class="po-md-4" p-icon p-label="Status" p-type="success" [p-value]="statusValue"> </po-tag>

    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>
  </div>

  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Personal data"></po-divider>

    <po-info class="po-md-4 po-mb-md-2" p-label="Name" [p-value]="name"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Birthday" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Genre" [p-value]="genre"> </po-info>

    <po-info class="po-md-4 po-mb-md-2" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place of birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Gratuation" [p-value]="graduation"> </po-info>
  </div>

  <div class="po-row po-mb-4">
    <po-divider class="po-md-12" p-label="Relationship"></po-divider>

    <po-info class="po-md-4" p-label="Father's name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mother's name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-divider-user-detail/sample-po-divider-user-detail.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-divider-user-detail',
  templateUrl: './sample-po-divider-user-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerUserDetailComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'Big John';
  placeOfBirth: string = 'Colorado';
  statusValue: string = 'Success';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-divider-user-detail`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+n.sampleCodeButtonIcon),jp(),hg(` `,n.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ge,n.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ae],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-divider-doc`]],standalone:!1,decls:170,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,n){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoDividerModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-divider.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoDividerComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`Este componente apresenta uma linha demarcadora de blocos e pode conter um `),Tl(15,`em`),cN(16,`label`),ag(),cN(17,`. Seu uso \xE9 indicado para defini\xE7\xE3o
e organiza\xE7\xE3o de informa\xE7\xF5es em uma tela e sua caracter\xEDstica \xE9 semelhante \xE0 tag `),Tl(18,`code`),cN(19,`<hr>`),ag(),cN(20,`.`),ag(),Tl(21,`h4`),cN(22,`Tokens customizáveis`),ag(),Tl(23,`p`),cN(24,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),ag(),Tl(25,`blockquote`)(26,`p`),cN(27,`Para maiores informações, acesse o guia `),Tl(28,`a`,6),cN(29,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(30,`.`),ag()(),Tl(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),cN(35,`Propriedade`),ag(),Tl(36,`th`),cN(37,`Descrição`),ag(),Tl(38,`th`),cN(39,`Valor Padrão`),ag()()(),Tl(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),cN(44,`Default Values`),ag()(),Gl(45,`td`)(46,`td`),ag(),Tl(47,`tr`)(48,`td`)(49,`code`),cN(50,`--color`),ag()(),Tl(51,`td`),cN(52,`Cor principla do divider\xA0`),ag(),Tl(53,`td`)(54,`code`),cN(55,`var(--color-neutral-mid-40)`),ag()()(),Tl(56,`tr`)(57,`td`)(58,`code`),cN(59,`--stroke-linecap`),ag()(),Tl(60,`td`),cN(61,`Extremidade da linha\xA0`),ag(),Tl(62,`td`)(63,`code`),cN(64,`round`),ag()()()()()(),Tl(65,`div`,7)(66,`h4`,8),cN(67,`Seletor`),ag(),Tl(68,`pre`,9),cN(69,`<po-divider
    p-border-width="string"
    p-label="string" >
</po-divider>
`),ag()(),Tl(70,`h4`,10),cN(71,`Propriedades`),ag(),Tl(72,`table`,11)(73,`tr`,12)(74,`th`,13),cN(75,`Nome`),ag(),Tl(76,`th`,13),cN(77,`Tipo`),ag(),Tl(78,`th`,13),cN(79,`Padrão`),ag(),Tl(80,`th`,13),cN(81,`Descrição`),ag()(),Tl(82,`tr`,14)(83,`td`,15)(84,`div`,16)(85,`span`,17),cN(86,` p-border-width`),Gl(87,`br`),ag()()(),Tl(88,`td`,18)(89,`code`,19),cN(90,`string`),ag()(),Tl(91,`td`,20)(92,`p`)(93,`code`),cN(94,`small`),ag()()(),Tl(95,`td`,21)(96,`em`)(97,`strong`),cN(98,`(opcional)`),ag()(),Tl(99,`p`),cN(100,`Define a espessura da linha.`),ag(),Tl(101,`p`),cN(102,`Valores válidos:`),ag(),Tl(103,`ul`)(104,`li`),cN(105,`small`),ag(),Tl(106,`li`),cN(107,`medium`),ag(),Tl(108,`li`),cN(109,`large`),ag()()()(),Tl(110,`tr`,14)(111,`td`,15)(112,`div`,16)(113,`span`,17),cN(114,` p-label`),Gl(115,`br`),ag()()(),Tl(116,`td`,18)(117,`code`,19),cN(118,`string`),ag()(),Tl(119,`td`,20),cN(120,`-`),ag(),Tl(121,`td`,21)(122,`em`)(123,`strong`),cN(124,`(opcional)`),ag()(),Tl(125,`p`),cN(126,`Valor do rótulo a ser exibido.`),ag()()()(),Tl(127,`h3`),cN(128,`Enums`),ag(),Tl(129,`h4`,4)(130,`code`,5),cN(131,`PoDividerSize`),ag()(),Tl(132,`div`,2)(133,`p`),cN(134,`Enum para definição da espessura da linha.`),ag()(),Tl(135,`h4`,10),cN(136,`Propriedades`),ag(),Tl(137,`table`,11)(138,`tr`,12)(139,`th`,13),cN(140,`Nome`),ag(),Tl(141,`th`,13),cN(142,`Descrição`),ag()(),Tl(143,`tr`,14)(144,`td`,15)(145,`div`,16)(146,`span`,17),cN(147,` small`),Gl(148,`br`),ag()()(),Tl(149,`td`,21)(150,`p`),cN(151,`A espessura da linha fica com 1px.`),ag()()(),Tl(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),cN(156,` medium`),Gl(157,`br`),ag()()(),Tl(158,`td`,21)(159,`p`),cN(160,`A espessura da linha fica com 2px.`),ag()()(),Tl(161,`tr`,14)(162,`td`,15)(163,`div`,16)(164,`span`,17),cN(165,` large`),Gl(166,`br`),ag()()(),Tl(167,`td`,21)(168,`p`),cN(169,`A espessura da linha fica com 4px.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ce=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Divider`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,n){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return n.changeTab(`doc`)}),Gl(3,`sample-po-divider-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return n.changeTab(`web`)}),Gl(5,`sample-po-divider-basic-view`)(6,`sample-po-divider-labs-view`)(7,`sample-po-divider-user-detail-view`),ag()()()),a&2&&(nw(`p-actions`,n.actions),jp(2),nw(`p-active`,n.activeTab===`doc`),jp(2),nw(`p-hide`,n.hidePoWebSample)(`p-active`,n.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ie,ne,le,pe],encapsulation:2,changeDetection:1})}return o})()}];var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(Ce),bL]})}return o})();var Qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,me]})}return o})();export{Qe as DocPoDividerModule};