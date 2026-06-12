import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,cr as _3,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,b5 as Ko,b9 as ONe,a3 as SNe,aD as Jy,aT as Zx,aE as e_,bc as Sx,c4 as GD}from'./main-OS7VVRJY.js';var te=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic"]],standalone:false,decls:1,vars:0,consts:[["p-src","https://po-ui.io/assets/graphics/logo-po.png"]],template:function(o,i){o&1&&Hl(0,"po-avatar",0);},dependencies:[_3],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Avatar Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-avatar-basic/sample-po-avatar-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-avatar p-src="https://po-ui.io/assets/graphics/logo-po.png"> </po-avatar>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-avatar-basic/sample-po-avatar-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-avatar-basic',
  templateUrl: './sample-po-avatar-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoAvatarBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-avatar-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ce,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,te],encapsulation:2})}return n})();var oe=(()=>{class n{src;size;sizeOptions=[{label:"Extra Large (144x144)",value:"xl"},{label:"Large (96x96)",value:"lg"},{label:"Medium (64x64)",value:"md"},{label:"Small (32x32)",value:"sm"},{label:"Extra small (24x24)",value:"xs"}];ngOnInit(){this.restore();}restore(){this.src="http://lorempixel.com/144/144/cats",this.size=void 0;}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs"]],standalone:false,decls:9,vars:5,consts:[["f","ngForm"],[3,"p-size","p-src"],["p-label","Properties"],[1,"po-row"],["name","sizes","p-help","Select a size for the avatar","p-label","Size",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","src","p-clear","","p-help","Enter a url or path of the image that will be displayed","p-label","Source",1,"po-lg-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,i){if(o&1){let u=gx();Hl(0,"po-avatar",1)(1,"po-divider",2),Cl(2,"form",null,0)(4,"div",3)(5,"po-radio-group",4),gw("ngModelChange",function(v){return Jy(u),Zx(i.size,v)||(i.size=v),e_(v)}),og(),Z0(),Cl(6,"po-input",5),gw("ngModelChange",function(v){return Jy(u),Zx(i.src,v)||(i.src=v),e_(v)}),og(),Z0(),og(),Cl(7,"div",3)(8,"po-button",6),dt("p-click",function(){return i.restore()}),og()()();}o&2&&(ZE("p-size",i.size)("p-src",i.src),Lp(5),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0(),Lp(),pw("ngModel",i.src),X0());},dependencies:[lY,sY,aY,gk,fk,_3,Qt,_v,q3,Nde],encapsulation:2,changeDetection:1})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),ie=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Avatar Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-avatar-labs/sample-po-avatar-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-avatar [p-size]="size" [p-src]="src"> </po-avatar>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-avatar-labs/sample-po-avatar-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-avatar-labs"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return n})();var le=(()=>{class n{avatar="http://lorempixel.com/300/300/cats/";contact={name:"Mr. Dev PO",email:"dev.po@po-ui.com",phone:"47912012015"};callContact(l){window.open(`tel:${l}`,"_self");}sendContact(l){window.open(`mailto:${l}`,"_self");}formatPhoneNumber(l){return `(${l.substring(0,2)}) ${l.substring(2,7)}-${l.substring(7)}`}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card"]],standalone:false,decls:19,vars:5,consts:[["modal",""],[1,"po-row"],["p-height","250","p-title","Business Card","p-primary-label","Call","p-secondary-label","Send e-mail",1,"po-sm-12","po-md-8","po-lg-6",3,"p-primary-action","p-secondary-action"],["p-size","lg",1,"po-md-4",3,"p-click","p-src"],[1,"po-md-8"],["p-title","Profile Image"],[1,"sample-center-image",3,"src"]],template:function(o,i){if(o&1){let u=gx();Cl(0,"div",1)(1,"po-widget",2),dt("p-primary-action",function(){return i.callContact(i.contact.phone)})("p-secondary-action",function(){return i.sendContact(i.contact.email)}),Cl(2,"po-avatar",3),dt("p-click",function(){Jy(u);let v=Sx(17);return e_(v.open())}),og(),Cl(3,"div",4)(4,"p")(5,"strong"),qx(6,"Name:"),og(),qx(7),og(),Cl(8,"p")(9,"strong"),qx(10,"Phone:"),og(),qx(11),og(),Cl(12,"p")(13,"strong"),qx(14,"E-mail:"),og(),qx(15),og()()()(),Cl(16,"po-modal",5,0),Hl(18,"img",6),og();}o&2&&(Lp(2),ZE("p-src",i.avatar),Lp(5),dg(" ",i.contact.name),Lp(4),dg(" ",i.formatPhoneNumber(i.contact.phone)),Lp(4),dg(" ",i.contact.email),Lp(3),ZE("src",i.avatar,GD));},dependencies:[_3,Ko,ONe],styles:[".sample-center-image[_ngcontent-%COMP%]{display:block;margin:0 auto}"],changeDetection:1})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-business-card-view"]],standalone:false,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Avatar - Business Card"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()(),Cl(21,"po-tab",10)(22,"div")(23,"label",6),qx(24,"sample-po-avatar-business-card/sample-po-avatar-business-card.component.css"),og(),Cl(25,"pre",11),qx(26,`.sample-center-image {
  display: block;
  margin: 0 auto;
}
`),og()()()()(),Cl(27,"div",12),Hl(28,"sample-po-avatar-business-card"),og(),Hl(29,"hr")),o&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ce,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return n})();var re=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-avatar-doc"]],standalone:false,decls:151,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","'eager'"],["pan","",1,"docs-api-property-type","'lazy'"],["pan","",1,"docs-api-property-type","string"]],template:function(o,i){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoAvatarModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-avatar."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoAvatarComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O componente "),Cl(15,"code"),qx(16,"po-avatar"),og(),qx(17,` \xE9 um container para imagens em miniatura, possui um formato redondo e cinco op\xE7\xF5es de
tamanho, pode ser utilizado para mostrar a foto do perfil de um usu\xE1rio, entre outras possibilidades.`),og(),Cl(18,"p"),qx(19,"Al\xE9m de poder ser utilizado separadamente, \xE9 poss\xEDvel usar o "),Cl(20,"code"),qx(21,"po-avatar"),og(),qx(22,` juntamente com outros componentes e criar
layouts ricos e bem interessantes para os usu\xE1rios, como por exemplo, uma lista de itens ou produtos. `),og()(),Cl(23,"div",6)(24,"h4",7),qx(25,"Seletor"),og(),Cl(26,"pre",8),qx(27,`<po-avatar
    (p-click)="EventEmitter"
    p-loading="'eager' | 'lazy'"
    p-size="string"
    p-src="string" >
</po-avatar>
`),og()(),Cl(28,"h4",9),qx(29,"Propriedades"),og(),Cl(30,"table",10)(31,"tr",11)(32,"th",12),qx(33,"Nome"),og(),Cl(34,"th",12),qx(35,"Tipo"),og(),Cl(36,"th",12),qx(37,"Padr\xE3o"),og(),Cl(38,"th",12),qx(39,"Descri\xE7\xE3o"),og()(),Cl(40,"tr",13)(41,"td",14)(42,"div",15)(43,"span",16),qx(44," (p-click)"),Hl(45,"br"),og()()(),Cl(46,"td",17)(47,"code",18),qx(48,"EventEmitter"),og()(),Cl(49,"td",19),qx(50,"-"),og(),Cl(51,"td",20)(52,"p"),qx(53,"Evento disparado ao clicar na imagem do "),Cl(54,"em"),qx(55,"avatar"),og(),qx(56,"."),og()()(),Cl(57,"tr",13)(58,"td",14)(59,"div",21)(60,"span",22),qx(61," p-loading"),Hl(62,"br"),og()()(),Cl(63,"td",17)(64,"code",23),qx(65,"'eager' "),og(),Cl(66,"code",24),qx(67," 'lazy'"),og()(),Cl(68,"td",19)(69,"p")(70,"code"),qx(71,"eager"),og()()(),Cl(72,"td",20)(73,"em")(74,"strong"),qx(75,"(opcional)"),og()(),Cl(76,"p"),qx(77,"Indica como o navegador deve carregar a imagem."),og(),Cl(78,"p"),qx(79,"Valores v\xE1lidos:"),og(),Cl(80,"ul")(81,"li")(82,"code"),qx(83,"eager"),og(),qx(84," (a imagem \xE9 carregada imediatamente, independente de estar vis\xEDvel ou n\xE3o)"),og(),Cl(85,"li")(86,"code"),qx(87,"lazy"),og(),qx(88," (a imagem s\xF3 \xE9 carregada quando estiver pr\xF3xima de ser renderizada)"),og()()()(),Cl(89,"tr",13)(90,"td",14)(91,"div",21)(92,"span",22),qx(93," p-size"),Hl(94,"br"),og()()(),Cl(95,"td",17)(96,"code",25),qx(97,"string"),og()(),Cl(98,"td",19)(99,"p")(100,"code"),qx(101,"md"),og()()(),Cl(102,"td",20)(103,"em")(104,"strong"),qx(105,"(opcional)"),og()(),Cl(106,"p"),qx(107,"Tamanho de exibi\xE7\xE3o do componente."),og(),Cl(108,"p"),qx(109,"Valores v\xE1lidos:"),og(),Cl(110,"ul")(111,"li")(112,"code"),qx(113,"xs"),og(),qx(114," (24x24)"),og(),Cl(115,"li")(116,"code"),qx(117,"sm"),og(),qx(118," (32x32)"),og(),Cl(119,"li")(120,"code"),qx(121,"md"),og(),qx(122," (64x64)"),og(),Cl(123,"li")(124,"code"),qx(125,"lg"),og(),qx(126," (96x96)"),og(),Cl(127,"li")(128,"code"),qx(129,"xl"),og(),qx(130," (144x144)"),og()()()(),Cl(131,"tr",13)(132,"td",14)(133,"div",21)(134,"span",22),qx(135," p-src"),Hl(136,"br"),og()()(),Cl(137,"td",17)(138,"code",25),qx(139,"string"),og()(),Cl(140,"td",19),qx(141,"-"),og(),Cl(142,"td",20)(143,"p"),qx(144,"Fonte da imagem que pode ser um caminho local ("),Cl(145,"code"),qx(146,"./assets/images/logo-black-small.png"),og(),qx(147,`)
ou um servidor externo (`),Cl(148,"code"),qx(149,"https://po-ui.io/assets/images/logo-black-small.png"),og(),qx(150,")."),og()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,o){this.route=l,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let o=l.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Avatar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-avatar-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-avatar-basic-view")(6,"sample-po-avatar-labs-view")(7,"sample-po-avatar-business-card-view"),og()()()),o&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ne,ie,pe,re],encapsulation:2})}return n})();var Ee=[{path:"",component:se}],me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[bL.forChild(Ee),bL]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ca,me]})}return n})();
export{Ue as DocPoAvatarModule};