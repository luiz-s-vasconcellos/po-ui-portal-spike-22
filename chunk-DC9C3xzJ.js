import{$r as Zn,Br as Sx,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Qt as ea,Ri as nu,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dt as Sae,et as Noe,i as _a,ir as EF,ji as mO,mn as ni,ot as Q4,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var ee=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-src`,`https://po-ui.io/assets/graphics/logo-po.png`]],template:function(o,i){o&1&&nu(0,`po-avatar`,0)},dependencies:[Q4],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n});var ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Avatar Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-avatar-basic/sample-po-avatar-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-avatar-basic/sample-po-avatar-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-avatar-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ce,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ee],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{src;size;sizeOptions=[{label:`Extra Large (144x144)`,value:`xl`},{label:`Large (96x96)`,value:`lg`},{label:`Medium (64x64)`,value:`md`},{label:`Small (32x32)`,value:`sm`},{label:`Extra small (24x24)`,value:`xs`}];ngOnInit(){this.restore()}restore(){this.src=`http://lorempixel.com/144/144/cats`,this.size=void 0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-labs`]],standalone:!1,decls:9,vars:5,consts:[[`f`,`ngForm`],[3,`p-size`,`p-src`],[`p-label`,`Properties`],[1,`po-row`],[`name`,`sizes`,`p-help`,`Select a size for the avatar`,`p-label`,`Size`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`src`,`p-clear`,``,`p-help`,`Enter a url or path of the image that will be displayed`,`p-label`,`Source`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(o,i){if(o&1){let u=Sx();nu(0,`po-avatar`,1)(1,`po-divider`,2),jc(2,`form`,null,0)(4,`div`,3)(5,`po-radio-group`,4),JN(),ob(`ngModelChange`,function(v){return y_(u),sO(i.size,v)||(i.size=v),v_(v)}),wg(),jc(6,`po-input`,5),JN(),ob(`ngModelChange`,function(v){return y_(u),sO(i.src,v)||(i.src=v),v_(v)}),wg()(),jc(7,`div`,3)(8,`po-button`,6),mt(`p-click`,function(){return i.restore()}),wg()()()}o&2&&(jE(`p-size`,i.size)(`p-src`,i.src),rg(5),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0(),rg(),ib(`ngModel`,i.src),t0())},dependencies:[wK,CK,EK,TF,EF,Q4,ni,Lf,A5,Ote],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n});var oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Avatar Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-avatar-labs/sample-po-avatar-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-avatar-labs/sample-po-avatar-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-avatar-labs`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ne],encapsulation:2,changeDetection:1})}return n})();var ie=(()=>{class n{avatar=`http://lorempixel.com/300/300/cats/`;contact={name:`Mr. Dev PO`,email:`dev.po@po-ui.com`,phone:`47912012015`};callContact(r){window.open(`tel:${r}`,`_self`)}sendContact(r){window.open(`mailto:${r}`,`_self`)}formatPhoneNumber(r){return`(${r.substring(0,2)}) ${r.substring(2,7)}-${r.substring(7)}`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-business-card`]],standalone:!1,decls:19,vars:5,consts:[[`modal`,``],[1,`po-row`],[`p-height`,`250`,`p-title`,`Business Card`,`p-primary-label`,`Call`,`p-secondary-label`,`Send e-mail`,1,`po-sm-12`,`po-md-8`,`po-lg-6`,3,`p-primary-action`,`p-secondary-action`],[`p-size`,`lg`,1,`po-md-4`,3,`p-click`,`p-src`],[1,`po-md-8`],[`p-title`,`Profile Image`],[1,`sample-center-image`,3,`src`]],template:function(o,i){if(o&1){let u=Sx();jc(0,`div`,1)(1,`po-widget`,2),mt(`p-primary-action`,function(){return i.callContact(i.contact.phone)})(`p-secondary-action`,function(){return i.sendContact(i.contact.email)}),jc(2,`po-avatar`,3),mt(`p-click`,function(){y_(u);let v=Fx(17);return v_(v.open())}),wg(),jc(3,`div`,4)(4,`p`)(5,`strong`),iO(6,`Name:`),wg(),iO(7),wg(),jc(8,`p`)(9,`strong`),iO(10,`Phone:`),wg(),iO(11),wg(),jc(12,`p`)(13,`strong`),iO(14,`E-mail:`),wg(),iO(15),wg()()()(),jc(16,`po-modal`,5,0),nu(18,`img`,6),wg()}o&2&&(rg(2),jE(`p-src`,i.avatar),rg(5),Ag(` `,i.contact.name),rg(4),Ag(` `,i.formatPhoneNumber(i.contact.phone)),rg(4),Ag(` `,i.contact.email),rg(3),jE(`src`,i.avatar))},dependencies:[Q4,ea,Noe],styles:[`.sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}`],changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-business-card-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(o,i){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Avatar - Business Card`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),iO(24,`sample-po-avatar-business-card/sample-po-avatar-business-card.component.css`),wg(),jc(25,`pre`,11),iO(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-avatar-business-card`),wg(),nu(29,`hr`)),o&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,be,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ie],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-avatar-doc`]],standalone:!1,decls:151,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`'eager'`],[`pan`,``,1,`docs-api-property-type`,`'lazy'`],[`pan`,``,1,`docs-api-property-type`,`string`]],template:function(o,i){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoAvatarModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-avatar.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoAvatarComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-avatar`),wg(),iO(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),wg(),jc(18,`p`),iO(19,`Além de poder ser utilizado separadamente, é possível usar o `),jc(20,`code`),iO(21,`po-avatar`),wg(),iO(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),wg()(),jc(23,`div`,6)(24,`h4`,7),iO(25,`Seletor`),wg(),jc(26,`pre`,8),iO(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),wg()(),jc(28,`h4`,9),iO(29,`Propriedades`),wg(),jc(30,`table`,10)(31,`tr`,11)(32,`th`,12),iO(33,`Nome`),wg(),jc(34,`th`,12),iO(35,`Tipo`),wg(),jc(36,`th`,12),iO(37,`Padrão`),wg(),jc(38,`th`,12),iO(39,`Descrição`),wg()(),jc(40,`tr`,13)(41,`td`,14)(42,`div`,15)(43,`span`,16),iO(44,` (p-click)`),nu(45,`br`),wg()()(),jc(46,`td`,17)(47,`code`,18),iO(48,`EventEmitter`),wg()(),jc(49,`td`,19),iO(50,`-`),wg(),jc(51,`td`,20)(52,`p`),iO(53,`Evento disparado ao clicar na imagem do `),jc(54,`em`),iO(55,`avatar`),wg(),iO(56,`.`),wg()()(),jc(57,`tr`,13)(58,`td`,14)(59,`div`,21)(60,`span`,22),iO(61,` p-loading`),nu(62,`br`),wg()()(),jc(63,`td`,17)(64,`code`,23),iO(65,`'eager' `),wg(),jc(66,`code`,24),iO(67,` 'lazy'`),wg()(),jc(68,`td`,19)(69,`p`)(70,`code`),iO(71,`eager`),wg()()(),jc(72,`td`,20)(73,`em`)(74,`strong`),iO(75,`(opcional)`),wg()(),jc(76,`p`),iO(77,`Indica como o navegador deve carregar a imagem.`),wg(),jc(78,`p`),iO(79,`Valores válidos:`),wg(),jc(80,`ul`)(81,`li`)(82,`code`),iO(83,`eager`),wg(),iO(84,` (a imagem é carregada imediatamente, independente de estar visível ou não)`),wg(),jc(85,`li`)(86,`code`),iO(87,`lazy`),wg(),iO(88,` (a imagem só é carregada quando estiver próxima de ser renderizada)`),wg()()()(),jc(89,`tr`,13)(90,`td`,14)(91,`div`,21)(92,`span`,22),iO(93,` p-size`),nu(94,`br`),wg()()(),jc(95,`td`,17)(96,`code`,25),iO(97,`string`),wg()(),jc(98,`td`,19)(99,`p`)(100,`code`),iO(101,`md`),wg()()(),jc(102,`td`,20)(103,`em`)(104,`strong`),iO(105,`(opcional)`),wg()(),jc(106,`p`),iO(107,`Tamanho de exibição do componente.`),wg(),jc(108,`p`),iO(109,`Valores válidos:`),wg(),jc(110,`ul`)(111,`li`)(112,`code`),iO(113,`xs`),wg(),iO(114,` (24x24)`),wg(),jc(115,`li`)(116,`code`),iO(117,`sm`),wg(),iO(118,` (32x32)`),wg(),jc(119,`li`)(120,`code`),iO(121,`md`),wg(),iO(122,` (64x64)`),wg(),jc(123,`li`)(124,`code`),iO(125,`lg`),wg(),iO(126,` (96x96)`),wg(),jc(127,`li`)(128,`code`),iO(129,`xl`),wg(),iO(130,` (144x144)`),wg()()()(),jc(131,`tr`,13)(132,`td`,14)(133,`div`,21)(134,`span`,22),iO(135,` p-src`),nu(136,`br`),wg()()(),jc(137,`td`,17)(138,`code`,25),iO(139,`string`),wg()(),jc(140,`td`,19),iO(141,`-`),wg(),jc(142,`td`,20)(143,`p`),iO(144,`Fonte da imagem que pode ser um caminho local (`),jc(145,`code`),iO(146,`./assets/images/logo-black-small.png`),wg(),iO(147,`)
ou um servidor externo (`),jc(148,`code`),iO(149,`https://po-ui.io/assets/images/logo-black-small.png`),wg(),iO(150,`).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var fe=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Avatar`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,i){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-avatar-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-avatar-basic-view`)(6,`sample-po-avatar-labs-view`)(7,`sample-po-avatar-business-card-view`),wg()()()),o&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ae,oe,re,le],encapsulation:2,changeDetection:1})}return n})()}];var se=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[C1.forChild(fe),C1]})}return n})();var $e=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[Ta,se]})}return n})();export{$e as DocPoAvatarModule};