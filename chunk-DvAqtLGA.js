import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,bR as Qn,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bB as ga,al as lx,am as pw,an as $0,ap as hw,aq as G0,aQ as dt,aU as IR,a3 as D3,az as Qy,aB as $x,aA as Jy,aX as _x,bs as zD}from'./main-6SPFG3VI.js';var ne=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&Ul(0,"po-avatar",0);},dependencies:[Qn],encapsulation:2,changeDetection:1})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Avatar Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-avatar-basic"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ne],encapsulation:2})}return n})();var re=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore();}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0;}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs"]],standalone:false,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let u=lx();Ul(0,"po-avatar",1)(1,"po-divider",2),wl(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),pw("ngModelChange",function(v){return Qy(u),$x(i.size,v)||(i.size=v),Jy(v)}),ng(),$0(),wl(6,"po-input",5),pw("ngModelChange",function(v){return Qy(u),$x(i.src,v)||(i.src=v),Jy(v)}),ng(),$0(),ng(),wl(7,"div",3)(8,"po-button",6),ut("p-click",function(){return i.restore()}),ng()()();}o&2&&(YE("p-size",i.size)("p-src",i.src),Pp(5),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0(),Pp(),hw("ngModel",i.src),G0());},dependencies:[aY,iY,oY,ck,ok,Qn,Pe,di,Yo,ga],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Avatar Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-avatar-labs"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,be,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,re],encapsulation:2})}return n})();var le=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(r){window.open(`tel:${r}`,"_self");}sendContact(r){window.open(`mailto:${r}`,"_self");}formatPhoneNumber(r){return `(${r.substring(0,2)}) ${r.substring(2,7)}-${r.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:false,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let u=lx();wl(0,"div",1)(1,"po-widget",2),ut("p-primary-action",function(){return i.callContact(i.contact.phone)})("p-secondary-action",function(){return i.sendContact(i.contact.email)}),wl(2,"po-avatar",3),ut("p-click",function(){Qy(u);let v=_x(17);return Jy(v.open())}),ng(),wl(3,"div",4)(4,"p")(5,"strong"),Ux(6,"Name:"),ng(),Ux(7),ng(),wl(8,"p")(9,"strong"),Ux(10,"Phone:"),ng(),Ux(11),ng(),wl(12,"p")(13,"strong"),Ux(14,"E-mail:"),ng(),Ux(15),ng()()()(),wl(16,"po-modal",5,0),Ul(18,"img",6),ng();}o&2&&(Pp(2),YE("p-src",i.avatar),Pp(5),cg(" ",i.contact.name),Pp(4),cg(" ",i.formatPhoneNumber(i.contact.phone)),Pp(4),cg(" ",i.contact.email),Pp(3),YE("src",i.avatar,zD));},dependencies:[Qn,dt,IR],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"],changeDetection:1})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Avatar - Business Card"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()(),wl(21,"po-tab",10)(22,"div")(23,"label",6),Ux(24,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.css"),ng(),wl(25,"pre",11),Ux(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),ng()()()()(),wl(27,"div",12),Ul(28,"sample-po-avatar-business-card"),ng(),Ul(29,"hr")),o&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Se,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,le],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-doc"]],standalone:false,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-avatar."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoAvatarComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O componente "),wl(15,"code"),Ux(16,"po-avatar"),ng(),Ux(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),ng(),wl(18,"p"),Ux(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),wl(20,"code"),Ux(21,"po-avatar"),ng(),Ux(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),ng()(),wl(23,"div",6)(24,"h4",7),Ux(25,"Seletor"),ng(),wl(26,"pre",8),Ux(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),ng()(),wl(28,"h4",9),Ux(29,"Propriedades"),ng(),wl(30,"table",10)(31,"tr",11)(32,"th",12),Ux(33,"Nome"),ng(),wl(34,"th",12),Ux(35,"Tipo"),ng(),wl(36,"th",12),Ux(37,"Padr\xE3o"),ng(),wl(38,"th",12),Ux(39,"Descri\xE7\xE3o"),ng()(),wl(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),Ux(44," (p-click)"),Ul(45,"br"),ng()()(),wl(46,"td",17)(47,"code",18),Ux(48,"EventEmitter"),ng()(),wl(49,"td",19),Ux(50,"-"),ng(),wl(51,"td",20)(52,"p"),Ux(53,"Evento disparado ao clicar na imagem do "),wl(54,"em"),Ux(55,"avatar"),ng(),Ux(56,"."),ng()()(),wl(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),Ux(61," p-loading"),Ul(62,"br"),ng()()(),wl(63,"td",17)(64,"code",23),Ux(65,"'eager' "),ng(),wl(66,"code",24),Ux(67," 'lazy'"),ng()(),wl(68,"td",19)(69,"p")(70,"code"),Ux(71,"eager"),ng()()(),wl(72,"td",20)(73,"em")(74,"strong"),Ux(75,"(opcional)"),ng()(),wl(76,"p"),Ux(77,"Indica como o navegador deve carregar a imagem."),ng(),wl(78,"p"),Ux(79,"Valores v\xE1lidos:"),ng(),wl(80,"ul")(81,"li")(82,"code"),Ux(83,"eager"),ng(),Ux(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),ng(),wl(85,"li")(86,"code"),Ux(87,"lazy"),ng(),Ux(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),ng()()()(),wl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),Ux(93," p-size"),Ul(94,"br"),ng()()(),wl(95,"td",17)(96,"code",25),Ux(97,"string"),ng()(),wl(98,"td",19)(99,"p")(100,"code"),Ux(101,"md"),ng()()(),wl(102,"td",20)(103,"em")(104,"strong"),Ux(105,"(opcional)"),ng()(),wl(106,"p"),Ux(107,"Tamanho de exibi\xE7\xE3o do componente."),ng(),wl(108,"p"),Ux(109,"Valores v\xE1lidos:"),ng(),wl(110,"ul")(111,"li")(112,"code"),Ux(113,"xs"),ng(),Ux(114," (24x24)"),ng(),wl(115,"li")(116,"code"),Ux(117,"sm"),ng(),Ux(118," (32x32)"),ng(),wl(119,"li")(120,"code"),Ux(121,"md"),ng(),Ux(122," (64x64)"),ng(),wl(123,"li")(124,"code"),Ux(125,"lg"),ng(),Ux(126," (96x96)"),ng(),wl(127,"li")(128,"code"),Ux(129,"xl"),ng(),Ux(130," (144x144)"),ng()()()(),wl(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),Ux(135," p-src"),Ul(136,"br"),ng()()(),wl(137,"td",17)(138,"code",25),Ux(139,"string"),ng()(),wl(140,"td",19),Ux(141,"-"),ng(),wl(142,"td",20)(143,"p"),Ux(144,"Fonte da imagem que pode ser um caminho local ("),wl(145,"code"),Ux(146,"./assets/images/logo-black-small.png"),ng(),Ux(147,`)
ou um servidor externo (`),wl(148,"code"),Ux(149,"https://po-ui.io/assets/images/logo-black-small.png"),ng(),Ux(150,")."),ng()()()()());},dependencies:[fP],encapsulation:2})}return n})();var de=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-avatar-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),ng()()()),o&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ie,pe,se,me],encapsulation:2})}return n})();var ye=[{path:"",component:de}],ce=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(ye),vL]})}return n})();var tt=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,ce]})}return n})();
export{tt as DocPoAvatarModule};