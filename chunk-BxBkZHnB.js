import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,cn as s3,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,b6 as Yo,ba as bNe,a3 as pNe,aD as Xy,aT as tN,aE as Qy,bd as xx,c0 as $D}from'./main-UTR4MKMU.js';var te=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&Wl(0,"po-avatar",0);},dependencies:[s3],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Avatar Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-avatar-basic"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ce,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,te],encapsulation:2})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore();}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0;}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs"]],standalone:false,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let u=Ex();Wl(0,"po-avatar",1)(1,"po-divider",2),Sl(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),Ew("ngModelChange",function(v){return Xy(u),tN(i.size,v)||(i.size=v),Qy(v)}),sg(),JA(),Sl(6,"po-input",5),Ew("ngModelChange",function(v){return Xy(u),tN(i.src,v)||(i.src=v),Qy(v)}),sg(),JA(),sg(),Sl(7,"div",3)(8,"po-button",6),ht("p-click",function(){return i.restore()}),sg()()();}o&2&&(tw("p-size",i.size)("p-src",i.src),Vp(5),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0(),Vp(),Dw("ngModel",i.src),t0());},dependencies:[J9,K9,X9,Dk,vk,s3,Qt,mv,F3,Pde],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Avatar Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-avatar-labs"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return n})();var le=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(l){window.open(`tel:${l}`,"_self");}sendContact(l){window.open(`mailto:${l}`,"_self");}formatPhoneNumber(l){return `(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:false,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let u=Ex();Sl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.callContact(i.contact.phone)})("p-secondary-action",function(){return i.sendContact(i.contact.email)}),Sl(2,"po-avatar",3),ht("p-click",function(){Xy(u);let v=xx(17);return Qy(v.open())}),sg(),Sl(3,"div",4)(4,"p")(5,"strong"),Jx(6,"Name:"),sg(),Jx(7),sg(),Sl(8,"p")(9,"strong"),Jx(10,"Phone:"),sg(),Jx(11),sg(),Sl(12,"p")(13,"strong"),Jx(14,"E-mail:"),sg(),Jx(15),sg()()()(),Sl(16,"po-modal",5,0),Wl(18,"img",6),sg();}o&2&&(Vp(2),tw("p-src",i.avatar),Vp(5),fg(" ",i.contact.name),Vp(4),fg(" ",i.formatPhoneNumber(i.contact.phone)),Vp(4),fg(" ",i.contact.email),Vp(3),tw("src",i.avatar,$D));},dependencies:[s3,Yo,bNe],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Avatar - Business Card"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Sl(21,"po-tab",10)(22,"div")(23,"label",6),Jx(24,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.css"),sg(),Sl(25,"pre",11),Jx(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),sg()()()()(),Sl(27,"div",12),Wl(28,"sample-po-avatar-business-card"),sg(),Wl(29,"hr")),o&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ce,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return n})();var re=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-doc"]],standalone:false,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-avatar."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoAvatarComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O componente "),Sl(15,"code"),Jx(16,"po-avatar"),sg(),Jx(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),sg(),Sl(18,"p"),Jx(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),Sl(20,"code"),Jx(21,"po-avatar"),sg(),Jx(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),sg()(),Sl(23,"div",6)(24,"h4",7),Jx(25,"Seletor"),sg(),Sl(26,"pre",8),Jx(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),sg()(),Sl(28,"h4",9),Jx(29,"Propriedades"),sg(),Sl(30,"table",10)(31,"tr",11)(32,"th",12),Jx(33,"Nome"),sg(),Sl(34,"th",12),Jx(35,"Tipo"),sg(),Sl(36,"th",12),Jx(37,"Padr\xE3o"),sg(),Sl(38,"th",12),Jx(39,"Descri\xE7\xE3o"),sg()(),Sl(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),Jx(44," (p-click)"),Wl(45,"br"),sg()()(),Sl(46,"td",17)(47,"code",18),Jx(48,"EventEmitter"),sg()(),Sl(49,"td",19),Jx(50,"-"),sg(),Sl(51,"td",20)(52,"p"),Jx(53,"Evento disparado ao clicar na imagem do "),Sl(54,"em"),Jx(55,"avatar"),sg(),Jx(56,"."),sg()()(),Sl(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),Jx(61," p-loading"),Wl(62,"br"),sg()()(),Sl(63,"td",17)(64,"code",23),Jx(65,"'eager' "),sg(),Sl(66,"code",24),Jx(67," 'lazy'"),sg()(),Sl(68,"td",19)(69,"p")(70,"code"),Jx(71,"eager"),sg()()(),Sl(72,"td",20)(73,"em")(74,"strong"),Jx(75,"(opcional)"),sg()(),Sl(76,"p"),Jx(77,"Indica como o navegador deve carregar a imagem."),sg(),Sl(78,"p"),Jx(79,"Valores v\xE1lidos:"),sg(),Sl(80,"ul")(81,"li")(82,"code"),Jx(83,"eager"),sg(),Jx(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),sg(),Sl(85,"li")(86,"code"),Jx(87,"lazy"),sg(),Jx(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),sg()()()(),Sl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),Jx(93," p-size"),Wl(94,"br"),sg()()(),Sl(95,"td",17)(96,"code",25),Jx(97,"string"),sg()(),Sl(98,"td",19)(99,"p")(100,"code"),Jx(101,"md"),sg()()(),Sl(102,"td",20)(103,"em")(104,"strong"),Jx(105,"(opcional)"),sg()(),Sl(106,"p"),Jx(107,"Tamanho de exibi\xE7\xE3o do componente."),sg(),Sl(108,"p"),Jx(109,"Valores v\xE1lidos:"),sg(),Sl(110,"ul")(111,"li")(112,"code"),Jx(113,"xs"),sg(),Jx(114," (24x24)"),sg(),Sl(115,"li")(116,"code"),Jx(117,"sm"),sg(),Jx(118," (32x32)"),sg(),Sl(119,"li")(120,"code"),Jx(121,"md"),sg(),Jx(122," (64x64)"),sg(),Sl(123,"li")(124,"code"),Jx(125,"lg"),sg(),Jx(126," (96x96)"),sg(),Sl(127,"li")(128,"code"),Jx(129,"xl"),sg(),Jx(130," (144x144)"),sg()()()(),Sl(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),Jx(135," p-src"),Wl(136,"br"),sg()()(),Sl(137,"td",17)(138,"code",25),Jx(139,"string"),sg()(),Sl(140,"td",19),Jx(141,"-"),sg(),Sl(142,"td",20)(143,"p"),Jx(144,"Fonte da imagem que pode ser um caminho local ("),Sl(145,"code"),Jx(146,"./assets/images/logo-black-small.png"),sg(),Jx(147,`)
ou um servidor externo (`),Sl(148,"code"),Jx(149,"https://po-ui.io/assets/images/logo-black-small.png"),sg(),Jx(150,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-avatar-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),sg()()()),o&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ne,ie,pe,re],encapsulation:2})}return n})();var Ee=[{path:"",component:se}],me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[pL.forChild(Ee),pL]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,me]})}return n})();
export{Ue as DocPoAvatarModule};