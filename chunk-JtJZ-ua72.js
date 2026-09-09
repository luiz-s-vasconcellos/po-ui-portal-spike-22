import{$r as Xy,$t as iU,At as _Ce,Bi as jp,En as w4,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Rn as $D,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,ha as ww,l as ar,lr as Gl,nt as O8e,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,wn as vr,yi as cN}from"./main-3EWTGE7T.js";var te=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-src`,`https://po-ui.io/assets/graphics/logo-po.png`]],template:function(o,i){o&1&&Gl(0,`po-avatar`,0)},dependencies:[w4],encapsulation:2,changeDetection:1})}return n})();var de=n=>({"docs-sample-code-tabs":n});var ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Avatar Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-avatar-basic/sample-po-avatar-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-avatar-basic/sample-po-avatar-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-avatar-basic`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,de,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,te],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:`Extra Large (144x144)`,value:`xl`},{label:`Large (96x96)`,value:`lg`},{label:`Medium (64x64)`,value:`md`},{label:`Small (32x32)`,value:`sm`},{label:`Extra small (24x24)`,value:`xs`}];ngOnInit(){this.restore()}restore(){this.src=`http://lorempixel.com/144/144/cats`,this.size=void 0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-labs`]],standalone:!1,decls:9,vars:5,consts:[[`f`,`ngForm`],[3,`p-size`,`p-src`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`sizes`,`p-help`,`Select a size for the avatar`,`p-label`,`Size`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`src`,`p-clear`,``,`p-help`,`Enter a url or path of the image that will be displayed`,`p-label`,`Source`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let u=Ax();Gl(0,`po-avatar`,1)(1,`po-divider`,2),Tl(2,`form`,null,0)(4,`div`,3)(5,`po-radio-group`,4),ww(`ngModelChange`,function(v){return Ky(u),uN(i.size,v)||(i.size=v),Xy(v)}),ag(),a0(),Tl(6,`po-input`,5),ww(`ngModelChange`,function(v){return Ky(u),uN(i.src,v)||(i.src=v),Xy(v)}),ag(),a0(),ag(),Tl(7,`div`,3)(8,`po-button`,6),ht(`p-click`,function(){return i.restore()}),ag()()()}o&2&&(nw(`p-size`,i.size)(`p-src`,i.src),jp(5),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0(),jp(),Ew(`ngModel`,i.src),l0())},dependencies:[yY,gY,mY,Ak,Tk,w4,Zt,Xy$1,iU,L0e],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Avatar Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-avatar-labs/sample-po-avatar-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-avatar-labs/sample-po-avatar-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-avatar-labs`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ge,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,oe],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{avatar=`http://lorempixel.com/300/300/cats/`;contact={name:`Mr. Dev PO`,email:`dev.po@po-ui.com`,phone:`47912012015`};callContact(l){window.open(`tel:${l}`,`_self`)}sendContact(l){window.open(`mailto:${l}`,`_self`)}formatPhoneNumber(l){return`(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-business-card`]],standalone:!1,decls:19,vars:5,consts:[[`modal`,``],[1,`po-row`],[`p-height`,`250`,`p-title`,`Business Card`,`p-primary-label`,`Call`,`p-secondary-label`,`Send e-mail`,1,`po-sm-12`,`po-md-8`,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`],[`p-size`,`lg`,1,`po-md-4`,3,`p-click`,`p-src`],[1,`po-md-8`],[`p-title`,`Profile Image`],[1,`sample-center-image`,3,`src`]],template:function(o,i){if(o&1){let u=Ax();Tl(0,`div`,1)(1,`po-widget`,2),ht(`p-primary-action`,function(){return i.callContact(i.contact.phone)})(`p-secondary-action`,function(){return i.sendContact(i.contact.email)}),Tl(2,`po-avatar`,3),ht(`p-click`,function(){Ky(u);return Xy(Bx(17).open())}),ag(),Tl(3,`div`,4)(4,`p`)(5,`strong`),cN(6,`Name:`),ag(),cN(7),ag(),Tl(8,`p`)(9,`strong`),cN(10,`Phone:`),ag(),cN(11),ag(),Tl(12,`p`)(13,`strong`),cN(14,`E-mail:`),ag(),cN(15),ag()()()(),Tl(16,`po-modal`,5,0),Gl(18,`img`,6),ag()}o&2&&(jp(2),nw(`p-src`,i.avatar),jp(5),hg(` `,i.contact.name),jp(4),hg(` `,i.formatPhoneNumber(i.contact.phone)),jp(4),hg(` `,i.contact.email),jp(3),nw(`src`,i.avatar,$D))},dependencies:[w4,vr,O8e],styles:[`.sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}`],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-business-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Avatar - Business Card`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()(),Tl(21,`po-tab`,10)(22,`div`)(23,`label`,6),cN(24,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.css`),ag(),Tl(25,`pre`,11),cN(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),ag()()()()(),Tl(27,`div`,12),Gl(28,`sample-po-avatar-business-card`),ag(),Gl(29,`hr`)),o&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-doc`]],standalone:!1,decls:151,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`'eager'`],[`pan`,``,1,`docs-api-property-type`,`'lazy'`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(o,i){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoAvatarModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-avatar.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoAvatarComponent`),ag()(),Tl(12,`div`,2)(13,`p`),cN(14,`O componente `),Tl(15,`code`),cN(16,`po-avatar`),ag(),cN(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),ag(),Tl(18,`p`),cN(19,`Além de poder ser utilizado separadamente, é possível usar o `),Tl(20,`code`),cN(21,`po-avatar`),ag(),cN(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),ag()(),Tl(23,`div`,6)(24,`h4`,7),cN(25,`Seletor`),ag(),Tl(26,`pre`,8),cN(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),ag()(),Tl(28,`h4`,9),cN(29,`Propriedades`),ag(),Tl(30,`table`,10)(31,`tr`,11)(32,`th`,12),cN(33,`Nome`),ag(),Tl(34,`th`,12),cN(35,`Tipo`),ag(),Tl(36,`th`,12),cN(37,`Padrão`),ag(),Tl(38,`th`,12),cN(39,`Descrição`),ag()(),Tl(40,`tr`,13)(41,`td`,14)(42,`div`,15)(43,`span`,16),cN(44,` (p-click)`),Gl(45,`br`),ag()()(),Tl(46,`td`,17)(47,`code`,18),cN(48,`EventEmitter`),ag()(),Tl(49,`td`,19),cN(50,`-`),ag(),Tl(51,`td`,20)(52,`p`),cN(53,`Evento disparado ao clicar na imagem do `),Tl(54,`em`),cN(55,`avatar`),ag(),cN(56,`.`),ag()()(),Tl(57,`tr`,13)(58,`td`,14)(59,`div`,21)(60,`span`,22),cN(61,` p-loading`),Gl(62,`br`),ag()()(),Tl(63,`td`,17)(64,`code`,23),cN(65,`'eager' `),ag(),Tl(66,`code`,24),cN(67,` 'lazy'`),ag()(),Tl(68,`td`,19)(69,`p`)(70,`code`),cN(71,`eager`),ag()()(),Tl(72,`td`,20)(73,`em`)(74,`strong`),cN(75,`(opcional)`),ag()(),Tl(76,`p`),cN(77,`Indica como o navegador deve carregar a imagem.`),ag(),Tl(78,`p`),cN(79,`Valores válidos:`),ag(),Tl(80,`ul`)(81,`li`)(82,`code`),cN(83,`eager`),ag(),cN(84,` (a imagem é carregada imediatamente, independente de estar visível ou não)`),ag(),Tl(85,`li`)(86,`code`),cN(87,`lazy`),ag(),cN(88,` (a imagem só é carregada quando estiver próxima de ser renderizada)`),ag()()()(),Tl(89,`tr`,13)(90,`td`,14)(91,`div`,21)(92,`span`,22),cN(93,` p-size`),Gl(94,`br`),ag()()(),Tl(95,`td`,17)(96,`code`,25),cN(97,`string`),ag()(),Tl(98,`td`,19)(99,`p`)(100,`code`),cN(101,`md`),ag()()(),Tl(102,`td`,20)(103,`em`)(104,`strong`),cN(105,`(opcional)`),ag()(),Tl(106,`p`),cN(107,`Tamanho de exibição do componente.`),ag(),Tl(108,`p`),cN(109,`Valores válidos:`),ag(),Tl(110,`ul`)(111,`li`)(112,`code`),cN(113,`xs`),ag(),cN(114,` (24x24)`),ag(),Tl(115,`li`)(116,`code`),cN(117,`sm`),ag(),cN(118,` (32x32)`),ag(),Tl(119,`li`)(120,`code`),cN(121,`md`),ag(),cN(122,` (64x64)`),ag(),Tl(123,`li`)(124,`code`),cN(125,`lg`),ag(),cN(126,` (96x96)`),ag(),Tl(127,`li`)(128,`code`),cN(129,`xl`),ag(),cN(130,` (144x144)`),ag()()()(),Tl(131,`tr`,13)(132,`td`,14)(133,`div`,21)(134,`span`,22),cN(135,` p-src`),Gl(136,`br`),ag()()(),Tl(137,`td`,17)(138,`code`,25),cN(139,`string`),ag()(),Tl(140,`td`,19),cN(141,`-`),ag(),Tl(142,`td`,20)(143,`p`),cN(144,`Fonte da imagem que pode ser um caminho local (`),Tl(145,`code`),cN(146,`./assets/images/logo-black-small.png`),ag(),cN(147,`)
ou um servidor externo (`),Tl(148,`code`),cN(149,`https://po-ui.io/assets/images/logo-black-small.png`),ag(),cN(150,`).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Ee=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Avatar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-avatar-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-avatar-basic-view`)(6,`sample-po-avatar-labs-view`)(7,`sample-po-avatar-business-card-view`),ag()()()),o&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ne,ie,re,pe],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(Ee),bL]})}return n})();var Ue=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,me]})}return n})();export{Ue as DocPoAvatarModule};