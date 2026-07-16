import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,cn as r3,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as O3,c8 as Dde,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,b6 as Yo,ba as _Ne,a3 as lNe,aD as Ky,aT as sN,aE as Xy,bd as Fx,c0 as $D}from'./main-56B5DD5U.js';var te=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&Gl(0,"po-avatar",0);},dependencies:[r3],encapsulation:2,changeDetection:1})}return n})();var de=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Avatar Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-avatar-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,de,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,te],encapsulation:2,changeDetection:1})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore();}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0;}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs"]],standalone:false,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let u=Sx();Gl(0,"po-avatar",1)(1,"po-divider",2),Tl(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),ww("ngModelChange",function(v){return Ky(u),sN(i.size,v)||(i.size=v),Xy(v)}),sg(),r0(),Tl(6,"po-input",5),ww("ngModelChange",function(v){return Ky(u),sN(i.src,v)||(i.src=v),Xy(v)}),sg(),r0(),sg(),Tl(7,"div",3)(8,"po-button",6),ht("p-click",function(){return i.restore()}),sg()()();}o&2&&(nw("p-size",i.size)("p-src",i.src),Vp(5),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0(),Vp(),Ew("ngModel",i.src),o0());},dependencies:[oY,nY,rY,Sk,Ck,r3,Qt,mv,O3,Dde],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Avatar Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-avatar-labs"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ge,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,oe],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(l){window.open(`tel:${l}`,"_self");}sendContact(l){window.open(`mailto:${l}`,"_self");}formatPhoneNumber(l){return `(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:false,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let u=Sx();Tl(0,"div",1)(1,"po-widget",2),ht("p-primary-action",function(){return i.callContact(i.contact.phone)})("p-secondary-action",function(){return i.sendContact(i.contact.email)}),Tl(2,"po-avatar",3),ht("p-click",function(){Ky(u);let v=Fx(17);return Xy(v.open())}),sg(),Tl(3,"div",4)(4,"p")(5,"strong"),iN(6,"Name:"),sg(),iN(7),sg(),Tl(8,"p")(9,"strong"),iN(10,"Phone:"),sg(),iN(11),sg(),Tl(12,"p")(13,"strong"),iN(14,"E-mail:"),sg(),iN(15),sg()()()(),Tl(16,"po-modal",5,0),Gl(18,"img",6),sg();}o&2&&(Vp(2),nw("p-src",i.avatar),Vp(5),fg(" ",i.contact.name),Vp(4),fg(" ",i.formatPhoneNumber(i.contact.phone)),Vp(4),fg(" ",i.contact.email),Vp(3),nw("src",i.avatar,$D));},dependencies:[r3,Yo,_Ne],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Avatar - Business Card"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()(),Tl(21,"po-tab",10)(22,"div")(23,"label",6),iN(24,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.css"),sg(),Tl(25,"pre",11),iN(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),sg()()()()(),Tl(27,"div",12),Gl(28,"sample-po-avatar-business-card"),sg(),Gl(29,"hr")),o&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ce,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,le],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-doc"]],standalone:false,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-avatar."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoAvatarComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O componente "),Tl(15,"code"),iN(16,"po-avatar"),sg(),iN(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),sg(),Tl(18,"p"),iN(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),Tl(20,"code"),iN(21,"po-avatar"),sg(),iN(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),sg()(),Tl(23,"div",6)(24,"h4",7),iN(25,"Seletor"),sg(),Tl(26,"pre",8),iN(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),sg()(),Tl(28,"h4",9),iN(29,"Propriedades"),sg(),Tl(30,"table",10)(31,"tr",11)(32,"th",12),iN(33,"Nome"),sg(),Tl(34,"th",12),iN(35,"Tipo"),sg(),Tl(36,"th",12),iN(37,"Padr\xE3o"),sg(),Tl(38,"th",12),iN(39,"Descri\xE7\xE3o"),sg()(),Tl(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),iN(44," (p-click)"),Gl(45,"br"),sg()()(),Tl(46,"td",17)(47,"code",18),iN(48,"EventEmitter"),sg()(),Tl(49,"td",19),iN(50,"-"),sg(),Tl(51,"td",20)(52,"p"),iN(53,"Evento disparado ao clicar na imagem do "),Tl(54,"em"),iN(55,"avatar"),sg(),iN(56,"."),sg()()(),Tl(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),iN(61," p-loading"),Gl(62,"br"),sg()()(),Tl(63,"td",17)(64,"code",23),iN(65,"'eager' "),sg(),Tl(66,"code",24),iN(67," 'lazy'"),sg()(),Tl(68,"td",19)(69,"p")(70,"code"),iN(71,"eager"),sg()()(),Tl(72,"td",20)(73,"em")(74,"strong"),iN(75,"(opcional)"),sg()(),Tl(76,"p"),iN(77,"Indica como o navegador deve carregar a imagem."),sg(),Tl(78,"p"),iN(79,"Valores v\xE1lidos:"),sg(),Tl(80,"ul")(81,"li")(82,"code"),iN(83,"eager"),sg(),iN(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),sg(),Tl(85,"li")(86,"code"),iN(87,"lazy"),sg(),iN(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),sg()()()(),Tl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),iN(93," p-size"),Gl(94,"br"),sg()()(),Tl(95,"td",17)(96,"code",25),iN(97,"string"),sg()(),Tl(98,"td",19)(99,"p")(100,"code"),iN(101,"md"),sg()()(),Tl(102,"td",20)(103,"em")(104,"strong"),iN(105,"(opcional)"),sg()(),Tl(106,"p"),iN(107,"Tamanho de exibi\xE7\xE3o do componente."),sg(),Tl(108,"p"),iN(109,"Valores v\xE1lidos:"),sg(),Tl(110,"ul")(111,"li")(112,"code"),iN(113,"xs"),sg(),iN(114," (24x24)"),sg(),Tl(115,"li")(116,"code"),iN(117,"sm"),sg(),iN(118," (32x32)"),sg(),Tl(119,"li")(120,"code"),iN(121,"md"),sg(),iN(122," (64x64)"),sg(),Tl(123,"li")(124,"code"),iN(125,"lg"),sg(),iN(126," (96x96)"),sg(),Tl(127,"li")(128,"code"),iN(129,"xl"),sg(),iN(130," (144x144)"),sg()()()(),Tl(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),iN(135," p-src"),Gl(136,"br"),sg()()(),Tl(137,"td",17)(138,"code",25),iN(139,"string"),sg()(),Tl(140,"td",19),iN(141,"-"),sg(),Tl(142,"td",20)(143,"p"),iN(144,"Fonte da imagem que pode ser um caminho local ("),Tl(145,"code"),iN(146,"./assets/images/logo-black-small.png"),sg(),iN(147,`)
ou um servidor externo (`),Tl(148,"code"),iN(149,"https://po-ui.io/assets/images/logo-black-small.png"),sg(),iN(150,")."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-avatar-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),sg()()()),o&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,ne,ie,re,pe],encapsulation:2,changeDetection:1})}return n})();var Ee=[{path:"",component:se}],me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[DL.forChild(Ee),DL]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,me]})}return n})();
export{Ue as DocPoAvatarModule};