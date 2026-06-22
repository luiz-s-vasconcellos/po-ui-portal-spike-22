import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,cn as r3,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,b4 as O3,c8 as Sde,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,b6 as Yo,ba as gNe,a3 as aNe,aD as Ky,aT as rN,aE as Xy,bd as Ox,c0 as HD}from'./main-LUSFEIN7.js';var te=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&Gl(0,"po-avatar",0);},dependencies:[r3],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Avatar Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-avatar-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ce,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,te],encapsulation:2})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore();}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0;}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs"]],standalone:false,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let u=Cx();Gl(0,"po-avatar",1)(1,"po-divider",2),Tl(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),Ew("ngModelChange",function(v){return Ky(u),rN(i.size,v)||(i.size=v),Xy(v)}),sg(),t0(),Tl(6,"po-input",5),Ew("ngModelChange",function(v){return Ky(u),rN(i.src,v)||(i.src=v),Xy(v)}),sg(),t0(),sg(),Tl(7,"div",3)(8,"po-button",6),ht("p-click",function(){return i.restore()}),sg()()();}o&2&&(tw("p-size",i.size)("p-src",i.src),Vp(5),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0(),Vp(),Dw("ngModel",i.src),r0());},dependencies:[nY,J9,eY,Ck,Dk,r3,Qt,mv,O3,Sde],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Avatar Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-avatar-labs"),sg(),Gl(23,"hr")),o&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ge,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,oe],encapsulation:2})}return n})();var le=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(l){window.open(`tel:${l}`,"_self");}sendContact(l){window.open(`mailto:${l}`,"_self");}formatPhoneNumber(l){return `(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:false,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let u=Cx();Tl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.callContact(i.contact.phone)})("p-secondary-action",function(){return i.sendContact(i.contact.email)}),Tl(2,"po-avatar",3),ht("p-click",function(){Ky(u);let v=Ox(17);return Xy(v.open())}),sg(),Tl(3,"div",4)(4,"p")(5,"strong"),tN(6,"Name:"),sg(),tN(7),sg(),Tl(8,"p")(9,"strong"),tN(10,"Phone:"),sg(),tN(11),sg(),Tl(12,"p")(13,"strong"),tN(14,"E-mail:"),sg(),tN(15),sg()()()(),Tl(16,"po-modal",5,0),Gl(18,"img",6),sg();}o&2&&(Vp(2),tw("p-src",i.avatar),Vp(5),fg(" ",i.contact.name),Vp(4),fg(" ",i.formatPhoneNumber(i.contact.phone)),Vp(4),fg(" ",i.contact.email),Vp(3),tw("src",i.avatar,HD));},dependencies:[r3,Yo,gNe],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Avatar - Business Card"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),sg(),Tl(13,"pre",7),tN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),tN(24,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.css"),sg(),Tl(25,"pre",11),tN(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-avatar-business-card"),sg(),Gl(29,"hr")),o&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ce,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,le],encapsulation:2})}return n})();var re=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-doc"]],standalone:false,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,"M\xF3dulo do componente po-avatar."),sg()(),Tl(7,"h3",3),tN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),tN(11,"PoAvatarComponent"),sg()(),Tl(12,"div",2)(13,"p"),tN(14,"O componente "),Tl(15,"code"),tN(16,"po-avatar"),sg(),tN(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),sg(),Tl(18,"p"),tN(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),Tl(20,"code"),tN(21,"po-avatar"),sg(),tN(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),sg()(),Tl(23,"div",6)(24,"h4",7),tN(25,"Seletor"),sg(),Tl(26,"pre",8),tN(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),sg()(),Tl(28,"h4",9),tN(29,"Propriedades"),sg(),Tl(30,"table",10)(31,"tr",11)(32,"th",12),tN(33,"Nome"),sg(),Tl(34,"th",12),tN(35,"Tipo"),sg(),Tl(36,"th",12),tN(37,"Padr\xE3o"),sg(),Tl(38,"th",12),tN(39,"Descri\xE7\xE3o"),sg()(),Tl(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),tN(44," (p-click)"),Gl(45,"br"),sg()()(),Tl(46,"td",17)(47,"code",18),tN(48,"EventEmitter"),sg()(),Tl(49,"td",19),tN(50,"-"),sg(),Tl(51,"td",20)(52,"p"),tN(53,"Evento disparado ao clicar na imagem do "),Tl(54,"em"),tN(55,"avatar"),sg(),tN(56,"."),sg()()(),Tl(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),tN(61," p-loading"),Gl(62,"br"),sg()()(),Tl(63,"td",17)(64,"code",23),tN(65,"'eager' "),sg(),Tl(66,"code",24),tN(67," 'lazy'"),sg()(),Tl(68,"td",19)(69,"p")(70,"code"),tN(71,"eager"),sg()()(),Tl(72,"td",20)(73,"em")(74,"strong"),tN(75,"(opcional)"),sg()(),Tl(76,"p"),tN(77,"Indica como o navegador deve carregar a imagem."),sg(),Tl(78,"p"),tN(79,"Valores v\xE1lidos:"),sg(),Tl(80,"ul")(81,"li")(82,"code"),tN(83,"eager"),sg(),tN(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),sg(),Tl(85,"li")(86,"code"),tN(87,"lazy"),sg(),tN(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),sg()()()(),Tl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),tN(93," p-size"),Gl(94,"br"),sg()()(),Tl(95,"td",17)(96,"code",25),tN(97,"string"),sg()(),Tl(98,"td",19)(99,"p")(100,"code"),tN(101,"md"),sg()()(),Tl(102,"td",20)(103,"em")(104,"strong"),tN(105,"(opcional)"),sg()(),Tl(106,"p"),tN(107,"Tamanho de exibi\xE7\xE3o do componente."),sg(),Tl(108,"p"),tN(109,"Valores v\xE1lidos:"),sg(),Tl(110,"ul")(111,"li")(112,"code"),tN(113,"xs"),sg(),tN(114," (24x24)"),sg(),Tl(115,"li")(116,"code"),tN(117,"sm"),sg(),tN(118," (32x32)"),sg(),Tl(119,"li")(120,"code"),tN(121,"md"),sg(),tN(122," (64x64)"),sg(),Tl(123,"li")(124,"code"),tN(125,"lg"),sg(),tN(126," (96x96)"),sg(),Tl(127,"li")(128,"code"),tN(129,"xl"),sg(),tN(130," (144x144)"),sg()()()(),Tl(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),tN(135," p-src"),Gl(136,"br"),sg()()(),Tl(137,"td",17)(138,"code",25),tN(139,"string"),sg()(),Tl(140,"td",19),tN(141,"-"),sg(),Tl(142,"td",20)(143,"p"),tN(144,"Fonte da imagem que pode ser um caminho local ("),Tl(145,"code"),tN(146,"./assets/images/logo-black-small.png"),sg(),tN(147,`)
ou um servidor externo (`),Tl(148,"code"),tN(149,"https://po-ui.io/assets/images/logo-black-small.png"),sg(),tN(150,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-avatar-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),sg()()()),o&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ne,ie,pe,re],encapsulation:2})}return n})();var Ee=[{path:"",component:se}],me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(Ee),vL]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,me]})}return n})();
export{Ue as DocPoAvatarModule};