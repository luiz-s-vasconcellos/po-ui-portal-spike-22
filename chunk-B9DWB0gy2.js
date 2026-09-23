import{$r as Vx,Et as V8e,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_ as $8e,_r as Ml,ai as YD,an as k4,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ea as p0,ga as w,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var te=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-src`,`https://po-ui.io/assets/graphics/logo-po.png`]],template:function(o,i){o&1&&ql(0,`po-avatar`,0)},dependencies:[k4],encapsulation:2,changeDetection:1})}return n})();var de=n=>({"docs-sample-code-tabs":n});var ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Avatar Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-avatar-basic/sample-po-avatar-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-avatar-basic/sample-po-avatar-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-avatar-basic`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,de,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,te],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:`Extra Large (144x144)`,value:`xl`},{label:`Large (96x96)`,value:`lg`},{label:`Medium (64x64)`,value:`md`},{label:`Small (32x32)`,value:`sm`},{label:`Extra small (24x24)`,value:`xs`}];ngOnInit(){this.restore()}restore(){this.src=`http://lorempixel.com/144/144/cats`,this.size=void 0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-labs`]],standalone:!1,decls:9,vars:5,consts:[[`f`,`ngForm`],[3,`p-size`,`p-src`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`sizes`,`p-help`,`Select a size for the avatar`,`p-label`,`Size`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`src`,`p-clear`,``,`p-help`,`Enter a url or path of the image that will be displayed`,`p-label`,`Source`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let u=Vx();ql(0,`po-avatar`,1)(1,`po-divider`,2),Ml(2,`form`,null,0)(4,`div`,3)(5,`po-radio-group`,4),Mw(`ngModelChange`,function(v){return Qy(u),yN(i.size,v)||(i.size=v),Jy(v)}),lg(),f0(),Ml(6,`po-input`,5),Mw(`ngModelChange`,function(v){return Qy(u),yN(i.src,v)||(i.src=v),Jy(v)}),lg(),f0(),lg(),Ml(7,`div`,3)(8,`po-button`,6),ht(`p-click`,function(){return i.restore()}),lg()()()}o&2&&(cw(`p-size`,i.size)(`p-src`,i.src),Up(5),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0(),Up(),Tw(`ngModel`,i.src),p0())},dependencies:[IY,wY,CY,Vk,kk,k4,Zt,nb,lU,q0e],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Avatar Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-avatar-labs/sample-po-avatar-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-avatar-labs/sample-po-avatar-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-avatar-labs`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ge,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,oe],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{avatar=`http://lorempixel.com/300/300/cats/`;contact={name:`Mr. Dev PO`,email:`dev.po@po-ui.com`,phone:`47912012015`};callContact(l){window.open(`tel:${l}`,`_self`)}sendContact(l){window.open(`mailto:${l}`,`_self`)}formatPhoneNumber(l){return`(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-business-card`]],standalone:!1,decls:19,vars:5,consts:[[`modal`,``],[1,`po-row`],[`p-height`,`250`,`p-title`,`Business Card`,`p-primary-label`,`Call`,`p-secondary-label`,`Send e-mail`,1,`po-sm-12`,`po-md-8`,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`],[`p-size`,`lg`,1,`po-md-4`,3,`p-click`,`p-src`],[1,`po-md-8`],[`p-title`,`Profile Image`],[1,`sample-center-image`,3,`src`]],template:function(o,i){if(o&1){let u=Vx();Ml(0,`div`,1)(1,`po-widget`,2),ht(`p-primary-action`,function(){return i.callContact(i.contact.phone)})(`p-secondary-action`,function(){return i.sendContact(i.contact.email)}),Ml(2,`po-avatar`,3),ht(`p-click`,function(){Qy(u);return Jy(Yx(17).open())}),lg(),Ml(3,`div`,4)(4,`p`)(5,`strong`),mN(6,`Name:`),lg(),mN(7),lg(),Ml(8,`p`)(9,`strong`),mN(10,`Phone:`),lg(),mN(11),lg(),Ml(12,`p`)(13,`strong`),mN(14,`E-mail:`),lg(),mN(15),lg()()()(),Ml(16,`po-modal`,5,0),ql(18,`img`,6),lg()}o&2&&(Up(2),cw(`p-src`,i.avatar),Up(5),gg(` `,i.contact.name),Up(4),gg(` `,i.formatPhoneNumber(i.contact.phone)),Up(4),gg(` `,i.contact.email),Up(3),cw(`src`,i.avatar,YD))},dependencies:[k4,vr,$8e],styles:[`.sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}`],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-business-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Avatar - Business Card`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()(),Ml(21,`po-tab`,10)(22,`div`)(23,`label`,6),mN(24,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.css`),lg(),Ml(25,`pre`,11),mN(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),lg()()()()(),Ml(27,`div`,12),ql(28,`sample-po-avatar-business-card`),lg(),ql(29,`hr`)),o&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-avatar-doc`]],standalone:!1,decls:151,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`'eager'`],[`pan`,``,1,`docs-api-property-type`,`'lazy'`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(o,i){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoAvatarModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-avatar.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoAvatarComponent`),lg()(),Ml(12,`div`,2)(13,`p`),mN(14,`O componente `),Ml(15,`code`),mN(16,`po-avatar`),lg(),mN(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),lg(),Ml(18,`p`),mN(19,`Além de poder ser utilizado separadamente, é possível usar o `),Ml(20,`code`),mN(21,`po-avatar`),lg(),mN(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),lg()(),Ml(23,`div`,6)(24,`h4`,7),mN(25,`Seletor`),lg(),Ml(26,`pre`,8),mN(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),lg()(),Ml(28,`h4`,9),mN(29,`Propriedades`),lg(),Ml(30,`table`,10)(31,`tr`,11)(32,`th`,12),mN(33,`Nome`),lg(),Ml(34,`th`,12),mN(35,`Tipo`),lg(),Ml(36,`th`,12),mN(37,`Padrão`),lg(),Ml(38,`th`,12),mN(39,`Descrição`),lg()(),Ml(40,`tr`,13)(41,`td`,14)(42,`div`,15)(43,`span`,16),mN(44,` (p-click)`),ql(45,`br`),lg()()(),Ml(46,`td`,17)(47,`code`,18),mN(48,`EventEmitter`),lg()(),Ml(49,`td`,19),mN(50,`-`),lg(),Ml(51,`td`,20)(52,`p`),mN(53,`Evento disparado ao clicar na imagem do `),Ml(54,`em`),mN(55,`avatar`),lg(),mN(56,`.`),lg()()(),Ml(57,`tr`,13)(58,`td`,14)(59,`div`,21)(60,`span`,22),mN(61,` p-loading`),ql(62,`br`),lg()()(),Ml(63,`td`,17)(64,`code`,23),mN(65,`'eager' `),lg(),Ml(66,`code`,24),mN(67,` 'lazy'`),lg()(),Ml(68,`td`,19)(69,`p`)(70,`code`),mN(71,`eager`),lg()()(),Ml(72,`td`,20)(73,`em`)(74,`strong`),mN(75,`(opcional)`),lg()(),Ml(76,`p`),mN(77,`Indica como o navegador deve carregar a imagem.`),lg(),Ml(78,`p`),mN(79,`Valores válidos:`),lg(),Ml(80,`ul`)(81,`li`)(82,`code`),mN(83,`eager`),lg(),mN(84,` (a imagem é carregada imediatamente, independente de estar visível ou não)`),lg(),Ml(85,`li`)(86,`code`),mN(87,`lazy`),lg(),mN(88,` (a imagem só é carregada quando estiver próxima de ser renderizada)`),lg()()()(),Ml(89,`tr`,13)(90,`td`,14)(91,`div`,21)(92,`span`,22),mN(93,` p-size`),ql(94,`br`),lg()()(),Ml(95,`td`,17)(96,`code`,25),mN(97,`string`),lg()(),Ml(98,`td`,19)(99,`p`)(100,`code`),mN(101,`md`),lg()()(),Ml(102,`td`,20)(103,`em`)(104,`strong`),mN(105,`(opcional)`),lg()(),Ml(106,`p`),mN(107,`Tamanho de exibição do componente.`),lg(),Ml(108,`p`),mN(109,`Valores válidos:`),lg(),Ml(110,`ul`)(111,`li`)(112,`code`),mN(113,`xs`),lg(),mN(114,` (24x24)`),lg(),Ml(115,`li`)(116,`code`),mN(117,`sm`),lg(),mN(118,` (32x32)`),lg(),Ml(119,`li`)(120,`code`),mN(121,`md`),lg(),mN(122,` (64x64)`),lg(),Ml(123,`li`)(124,`code`),mN(125,`lg`),lg(),mN(126,` (96x96)`),lg(),Ml(127,`li`)(128,`code`),mN(129,`xl`),lg(),mN(130,` (144x144)`),lg()()()(),Ml(131,`tr`,13)(132,`td`,14)(133,`div`,21)(134,`span`,22),mN(135,` p-src`),ql(136,`br`),lg()()(),Ml(137,`td`,17)(138,`code`,25),mN(139,`string`),lg()(),Ml(140,`td`,19),mN(141,`-`),lg(),Ml(142,`td`,20)(143,`p`),mN(144,`Fonte da imagem que pode ser um caminho local (`),Ml(145,`code`),mN(146,`./assets/images/logo-black-small.png`),lg(),mN(147,`)
ou um servidor externo (`),Ml(148,`code`),mN(149,`https://po-ui.io/assets/images/logo-black-small.png`),lg(),mN(150,`).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var Ee=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Avatar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-avatar-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-avatar-basic-view`)(6,`sample-po-avatar-labs-view`)(7,`sample-po-avatar-business-card-view`),lg()()()),o&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ne,ie,re,pe],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(Ee),NL]})}return n})();var Ue=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,me]})}return n})();export{Ue as DocPoAvatarModule};