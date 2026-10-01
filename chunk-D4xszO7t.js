import{Br as RE,Di as he,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,Q as Pze,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,Ui as m0,Un as Ac,Wi as mg,X as N5,Xn as C9,Yn as Bx,ai as aN,br as KD,dr as Hp,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,la as ug,li as cE,lr as Hn,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,vr as Jv,wt as _4}from"./main-VW33P2VM.js";var te=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-avatar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-src`,`https://po-ui.io/assets/graphics/logo-po.png`]],template:function(o,i){o&1&&Kc(0,`po-avatar`,0)},dependencies:[N5],encapsulation:2,changeDetection:1})}return n})();var de=n=>({"docs-sample-code-tabs":n});var ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-avatar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Avatar Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-avatar-basic/sample-po-avatar-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-avatar-basic/sample-po-avatar-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-avatar-basic`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,de,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,te],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:`Extra Large (144x144)`,value:`xl`},{label:`Large (96x96)`,value:`lg`},{label:`Medium (64x64)`,value:`md`},{label:`Small (32x32)`,value:`sm`},{label:`Extra small (24x24)`,value:`xs`}];ngOnInit(){this.restore()}restore(){this.src=`http://lorempixel.com/144/144/cats`,this.size=void 0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-avatar-labs`]],standalone:!1,decls:9,vars:5,consts:[[`f`,`ngForm`],[3,`p-size`,`p-src`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`sizes`,`p-help`,`Select a size for the avatar`,`p-label`,`Size`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`src`,`p-clear`,``,`p-help`,`Enter a url or path of the image that will be displayed`,`p-label`,`Source`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let u=Bx();Kc(0,`po-avatar`,1)(1,`po-divider`,2),Ac(2,`form`,null,0)(4,`div`,3)(5,`po-radio-group`,4),RE(`ngModelChange`,function(v){return Jv(u),DN(i.size,v)||(i.size=v),e_(v)}),ug(),p0(),Ac(6,`po-input`,5),RE(`ngModelChange`,function(v){return Jv(u),DN(i.src,v)||(i.src=v),e_(v)}),ug(),p0(),ug(),Ac(7,`div`,3)(8,`po-button`,6),pt(`p-click`,function(){return i.restore()}),ug()()()}o&2&&(cE(`p-size`,i.size)(`p-src`,i.src),Hp(5),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0(),Hp(),TE(`ngModel`,i.src),m0())},dependencies:[b9,D9,C9,BP,LP,N5,ni,ob,_4,Cte],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-avatar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Avatar Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-avatar-labs/sample-po-avatar-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-6"
      name="sizes"
      [(ngModel)]="size"
      p-help="Select a size for the avatar"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-input
      class="po-lg-6"
      name="src"
      [(ngModel)]="src"
      p-clear
      p-help="Enter a url or path of the image that will be displayed"
      p-label="Source"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-avatar-labs/sample-po-avatar-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-avatar-labs',
  templateUrl: './sample-po-avatar-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarLabsComponent implements OnInit {
  src: string;
  size: string;

  sizeOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Extra Large (144x144)', value: 'xl' },
    { label: 'Large (96x96)', value: 'lg' },
    { label: 'Medium (64x64)', value: 'md' },
    { label: 'Small (32x32)', value: 'sm' },
    { label: 'Extra small (24x24)', value: 'xs' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.src = 'http://lorempixel.com/144/144/cats';
    this.size = undefined;
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-avatar-labs`),ug(),Kc(23,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ge,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,oe],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{avatar=`http://lorempixel.com/300/300/cats/`;contact={name:`Mr. Dev PO`,email:`dev.po@po-ui.com`,phone:`47912012015`};callContact(l){window.open(`tel:${l}`,`_self`)}sendContact(l){window.open(`mailto:${l}`,`_self`)}formatPhoneNumber(l){return`(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-avatar-business-card`]],standalone:!1,decls:19,vars:5,consts:[[`modal`,``],[1,`po-row`],[`p-height`,`250`,`p-title`,`Business Card`,`p-primary-label`,`Call`,`p-secondary-label`,`Send e-mail`,1,`po-sm-12`,`po-md-8`,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`],[`p-size`,`lg`,1,`po-md-4`,3,`p-click`,`p-src`],[1,`po-md-8`],[`p-title`,`Profile Image`],[1,`sample-center-image`,3,`src`]],template:function(o,i){if(o&1){let u=Bx();Ac(0,`div`,1)(1,`po-widget`,2),pt(`p-primary-action`,function(){return i.callContact(i.contact.phone)})(`p-secondary-action`,function(){return i.sendContact(i.contact.email)}),Ac(2,`po-avatar`,3),pt(`p-click`,function(){Jv(u);let v=Zx(17);return e_(v.open())}),ug(),Ac(3,`div`,4)(4,`p`)(5,`strong`),vN(6,`Name:`),ug(),vN(7),ug(),Ac(8,`p`)(9,`strong`),vN(10,`Phone:`),ug(),vN(11),ug(),Ac(12,`p`)(13,`strong`),vN(14,`E-mail:`),ug(),vN(15),ug()()()(),Ac(16,`po-modal`,5,0),Kc(18,`img`,6),ug()}o&2&&(Hp(2),cE(`p-src`,i.avatar),Hp(5),mg(` `,i.contact.name),Hp(4),mg(` `,i.formatPhoneNumber(i.contact.phone)),Hp(4),mg(` `,i.contact.email),Hp(3),cE(`src`,i.avatar,KD))},dependencies:[N5,wa,Pze],styles:[`.sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}`],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-avatar-business-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Avatar - Business Card`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
  <po-widget
    class="po-sm-12 po-md-8 po-lg-6"
    p-height="250"
    p-title="Business Card"
    p-primary-label="Call"
    p-secondary-label="Send e-mail"
    (p-primary-action)="callContact(contact.phone)"
    (p-secondary-action)="sendContact(contact.email)"
  >
    <po-avatar class="po-md-4" p-size="lg" [p-src]="avatar" (p-click)="modal.open()"> </po-avatar>

    <div class="po-md-8">
      <p><strong>Name:</strong> { { contact.name }}</p>
      <p><strong>Phone:</strong> { { formatPhoneNumber(contact.phone) }}</p>
      <p><strong>E-mail:</strong> { { contact.email }}</p>
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Profile Image">
  <img [src]="avatar" class="sample-center-image" />
</po-modal>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-business-card',
  styleUrls: ['./sample-po-avatar-business-card.component.css'],
  templateUrl: './sample-po-avatar-business-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBusinessCardComponent {
  avatar = 'http://lorempixel.com/300/300/cats/';

  contact = {
    name: 'Mr. Dev PO',
    email: 'dev.po@po-ui.com',
    phone: '47912012015'
  };

  callContact(phone) {
    window.open(\`tel:\${phone}\`, '_self');
  }

  sendContact(email) {
    window.open(\`mailto:\${email}\`, '_self');
  }

  formatPhoneNumber(phone) {
    return \`(\${phone.substring(0, 2)}) \${phone.substring(2, 7)}-\${phone.substring(7)}\`;
  }
}
`),ug()()(),Ac(21,`po-tab`,10)(22,`div`)(23,`label`,6),vN(24,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.css`),ug(),Ac(25,`pre`,11),vN(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),ug()()()()(),Ac(27,`div`,12),Kc(28,`sample-po-avatar-business-card`),ug(),Kc(29,`hr`)),o&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,le],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Hn({type:n,selectors:[[`sample-po-avatar-doc`]],standalone:!1,decls:151,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`'eager'`],[`pan`,``,1,`docs-api-property-type`,`'lazy'`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(o,i){o&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoAvatarModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`Módulo do componente po-avatar.`),ug()(),Ac(7,`h3`,3),vN(8,`Componente`),ug(),Ac(9,`h4`,4)(10,`code`,5),vN(11,`PoAvatarComponent`),ug()(),Ac(12,`div`,2)(13,`p`),vN(14,`O componente `),Ac(15,`code`),vN(16,`po-avatar`),ug(),vN(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),ug(),Ac(18,`p`),vN(19,`Além de poder ser utilizado separadamente, é possível usar o `),Ac(20,`code`),vN(21,`po-avatar`),ug(),vN(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),ug()(),Ac(23,`div`,6)(24,`h4`,7),vN(25,`Seletor`),ug(),Ac(26,`pre`,8),vN(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),ug()(),Ac(28,`h4`,9),vN(29,`Propriedades`),ug(),Ac(30,`table`,10)(31,`tr`,11)(32,`th`,12),vN(33,`Nome`),ug(),Ac(34,`th`,12),vN(35,`Tipo`),ug(),Ac(36,`th`,12),vN(37,`Padrão`),ug(),Ac(38,`th`,12),vN(39,`Descrição`),ug()(),Ac(40,`tr`,13)(41,`td`,14)(42,`div`,15)(43,`span`,16),vN(44,` (p-click)`),Kc(45,`br`),ug()()(),Ac(46,`td`,17)(47,`code`,18),vN(48,`EventEmitter`),ug()(),Ac(49,`td`,19),vN(50,`-`),ug(),Ac(51,`td`,20)(52,`p`),vN(53,`Evento disparado ao clicar na imagem do `),Ac(54,`em`),vN(55,`avatar`),ug(),vN(56,`.`),ug()()(),Ac(57,`tr`,13)(58,`td`,14)(59,`div`,21)(60,`span`,22),vN(61,` p-loading`),Kc(62,`br`),ug()()(),Ac(63,`td`,17)(64,`code`,23),vN(65,`'eager' `),ug(),Ac(66,`code`,24),vN(67,` 'lazy'`),ug()(),Ac(68,`td`,19)(69,`p`)(70,`code`),vN(71,`eager`),ug()()(),Ac(72,`td`,20)(73,`em`)(74,`strong`),vN(75,`(opcional)`),ug()(),Ac(76,`p`),vN(77,`Indica como o navegador deve carregar a imagem.`),ug(),Ac(78,`p`),vN(79,`Valores válidos:`),ug(),Ac(80,`ul`)(81,`li`)(82,`code`),vN(83,`eager`),ug(),vN(84,` (a imagem é carregada imediatamente, independente de estar visível ou não)`),ug(),Ac(85,`li`)(86,`code`),vN(87,`lazy`),ug(),vN(88,` (a imagem só é carregada quando estiver próxima de ser renderizada)`),ug()()()(),Ac(89,`tr`,13)(90,`td`,14)(91,`div`,21)(92,`span`,22),vN(93,` p-size`),Kc(94,`br`),ug()()(),Ac(95,`td`,17)(96,`code`,25),vN(97,`string`),ug()(),Ac(98,`td`,19)(99,`p`)(100,`code`),vN(101,`md`),ug()()(),Ac(102,`td`,20)(103,`em`)(104,`strong`),vN(105,`(opcional)`),ug()(),Ac(106,`p`),vN(107,`Tamanho de exibição do componente.`),ug(),Ac(108,`p`),vN(109,`Valores válidos:`),ug(),Ac(110,`ul`)(111,`li`)(112,`code`),vN(113,`xs`),ug(),vN(114,` (24x24)`),ug(),Ac(115,`li`)(116,`code`),vN(117,`sm`),ug(),vN(118,` (32x32)`),ug(),Ac(119,`li`)(120,`code`),vN(121,`md`),ug(),vN(122,` (64x64)`),ug(),Ac(123,`li`)(124,`code`),vN(125,`lg`),ug(),vN(126,` (96x96)`),ug(),Ac(127,`li`)(128,`code`),vN(129,`xl`),ug(),vN(130,` (144x144)`),ug()()()(),Ac(131,`tr`,13)(132,`td`,14)(133,`div`,21)(134,`span`,22),vN(135,` p-src`),Kc(136,`br`),ug()()(),Ac(137,`td`,17)(138,`code`,25),vN(139,`string`),ug()(),Ac(140,`td`,19),vN(141,`-`),ug(),Ac(142,`td`,20)(143,`p`),vN(144,`Fonte da imagem que pode ser um caminho local (`),Ac(145,`code`),vN(146,`./assets/images/logo-black-small.png`),ug(),vN(147,`)
ou um servidor externo (`),Ac(148,`code`),vN(149,`https://po-ui.io/assets/images/logo-black-small.png`),ug(),vN(150,`).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var Ee=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(E(Qn),E(wn))};static ɵcmp=Hn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Avatar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-avatar-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-avatar-basic-view`)(6,`sample-po-avatar-labs-view`)(7,`sample-po-avatar-business-card-view`),ug()()()),o&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,ne,ie,re,pe],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[kL.forChild(Ee),kL]})}return n})();var Ue=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[Ta,me]})}return n})();export{Ue as DocPoAvatarModule};