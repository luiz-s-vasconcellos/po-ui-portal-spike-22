import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,b1 as mv,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b4 as F3,aJ as Ghe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,bI as Sa,c9 as Qhe,cJ as dNe,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-basic"]],standalone:false,decls:1,vars:0,template:function(a,n){a&1&&Wl(0,"po-divider");},dependencies:[mv],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),ie=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Divider Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-divider-basic/sample-po-divider-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-divider></po-divider>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-divider-basic/sample-po-divider-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-divider-basic',
  templateUrl: './sample-po-divider-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-divider-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,se,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ee],encapsulation:2})}return o})();var oe=(()=>{class o{borderWidth;label;borderWidthList=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}restore(){this.label=void 0,this.borderWidth=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-labs"]],standalone:false,decls:8,vars:5,consts:[["f","ngForm"],[3,"p-label","p-border-width"],[1,"po-row"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderWidth","p-label","Border width",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,n){if(a&1){let h=Ex();Wl(0,"po-divider",1),Sl(1,"form",null,0)(3,"div",2)(4,"po-input",3),Ew("ngModelChange",function(f){return Xy(h),tN(n.label,f)||(n.label=f),Qy(f)}),sg(),JA(),Sl(5,"po-select",4),Ew("ngModelChange",function(f){return Xy(h),tN(n.borderWidth,f)||(n.borderWidth=f),Qy(f)}),sg(),JA(),sg(),Sl(6,"div",2)(7,"po-button",5),ht("p-click",function(){return n.restore()}),sg()()();}a&2&&(tw("p-label",n.label)("p-border-width",n.borderWidth),Vp(4),Dw("ngModel",n.label),t0(),Vp(),Dw("ngModel",n.borderWidth),tw("p-options",n.borderWidthList),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Ghe],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Divider Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-divider-labs/sample-po-divider-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-divider [p-label]="label" [p-border-width]="borderWidth"></po-divider>

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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-divider-labs/sample-po-divider-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-divider-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,be,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return o})();var ae=(()=>{class o{router=f(wn);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="Big John";placeOfBirth="Colorado";statusValue="Success";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-user-detail"]],standalone:false,decls:19,vars:13,consts:[["p-title","User Detail",3,"p-breadcrumb"],[1,"po-row","po-mb-4"],["p-label","Status",1,"po-md-12"],["p-icon","","p-label","Status","p-type","success",1,"po-md-4",3,"p-value"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","Personal data",1,"po-md-12"],["p-label","Name",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Nickname",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","E-mail",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Birthday",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Genre",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Nationality",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Place of birth",1,"po-md-4",3,"p-value"],["p-label","Gratuation",1,"po-md-4",3,"p-value"],["p-label","Relationship",1,"po-md-12"],["p-label","Father's name",1,"po-md-4",3,"p-value"],["p-label","Mother's name",1,"po-md-4",3,"p-value"]],template:function(a,n){a&1&&(Sl(0,"po-page-detail",0)(1,"div",1),Wl(2,"po-divider",2)(3,"po-tag",3)(4,"po-info",4),sg(),Sl(5,"div",1),Wl(6,"po-divider",5)(7,"po-info",6)(8,"po-info",7)(9,"po-info",8)(10,"po-info",9)(11,"po-info",10)(12,"po-info",11)(13,"po-info",12)(14,"po-info",13),sg(),Sl(15,"div",1),Wl(16,"po-divider",14)(17,"po-info",15)(18,"po-info",16),sg()()),a&2&&(tw("p-breadcrumb",n.breadcrumb),Vp(3),tw("p-value",n.statusValue),Vp(),tw("p-value",n.userId),Vp(3),tw("p-value",n.name),Vp(),tw("p-value",n.nickname),Vp(),tw("p-value",n.email),Vp(),tw("p-value",n.birthDate),Vp(),tw("p-value",n.genre),Vp(),tw("p-value",n.nationality),Vp(),tw("p-value",n.placeOfBirth),Vp(),tw("p-value",n.graduation),Vp(3),tw("p-value",n.fathersName),Vp(),tw("p-value",n.mothersName));},dependencies:[mv,Sa,Qhe,dNe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-user-detail-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Divider - User Detail"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-divider-user-detail/sample-po-divider-user-detail.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-divider-user-detail/sample-po-divider-user-detail.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-divider-user-detail"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,fe,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ae],encapsulation:2})}return o})();var pe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-doc"]],standalone:false,decls:170,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,n){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoDividerModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-divider."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoDividerComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"Este componente apresenta uma linha demarcadora de blocos e pode conter um "),Sl(15,"em"),Jx(16,"label"),sg(),Jx(17,`. Seu uso \xE9 indicado para defini\xE7\xE3o
e organiza\xE7\xE3o de informa\xE7\xF5es em uma tela e sua caracter\xEDstica \xE9 semelhante \xE0 tag `),Sl(18,"code"),Jx(19,"<hr>"),sg(),Jx(20,"."),sg(),Sl(21,"h4"),Jx(22,"Tokens customiz\xE1veis"),sg(),Sl(23,"p"),Jx(24,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),sg(),Sl(25,"blockquote")(26,"p"),Jx(27,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(28,"a",6),Jx(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(30,"."),sg()(),Sl(31,"table")(32,"thead")(33,"tr")(34,"th"),Jx(35,"Propriedade"),sg(),Sl(36,"th"),Jx(37,"Descri\xE7\xE3o"),sg(),Sl(38,"th"),Jx(39,"Valor Padr\xE3o"),sg()()(),Sl(40,"tbody")(41,"tr")(42,"td")(43,"strong"),Jx(44,"Default Values"),sg()(),Wl(45,"td")(46,"td"),sg(),Sl(47,"tr")(48,"td")(49,"code"),Jx(50,"--color"),sg()(),Sl(51,"td"),Jx(52,"Cor principla do divider\xA0"),sg(),Sl(53,"td")(54,"code"),Jx(55,"var(--color-neutral-mid-40)"),sg()()(),Sl(56,"tr")(57,"td")(58,"code"),Jx(59,"--stroke-linecap"),sg()(),Sl(60,"td"),Jx(61,"Extremidade da linha\xA0"),sg(),Sl(62,"td")(63,"code"),Jx(64,"round"),sg()()()()()(),Sl(65,"div",7)(66,"h4",8),Jx(67,"Seletor"),sg(),Sl(68,"pre",9),Jx(69,`<po-divider
    p-border-width="string"
    p-label="string" >
</po-divider>
`),sg()(),Sl(70,"h4",10),Jx(71,"Propriedades"),sg(),Sl(72,"table",11)(73,"tr",12)(74,"th",13),Jx(75,"Nome"),sg(),Sl(76,"th",13),Jx(77,"Tipo"),sg(),Sl(78,"th",13),Jx(79,"Padr\xE3o"),sg(),Sl(80,"th",13),Jx(81,"Descri\xE7\xE3o"),sg()(),Sl(82,"tr",14)(83,"td",15)(84,"div",16)(85,"span",17),Jx(86," p-border-width"),Wl(87,"br"),sg()()(),Sl(88,"td",18)(89,"code",19),Jx(90,"string"),sg()(),Sl(91,"td",20)(92,"p")(93,"code"),Jx(94,"small"),sg()()(),Sl(95,"td",21)(96,"em")(97,"strong"),Jx(98,"(opcional)"),sg()(),Sl(99,"p"),Jx(100,"Define a espessura da linha."),sg(),Sl(101,"p"),Jx(102,"Valores v\xE1lidos:"),sg(),Sl(103,"ul")(104,"li"),Jx(105,"small"),sg(),Sl(106,"li"),Jx(107,"medium"),sg(),Sl(108,"li"),Jx(109,"large"),sg()()()(),Sl(110,"tr",14)(111,"td",15)(112,"div",16)(113,"span",17),Jx(114," p-label"),Wl(115,"br"),sg()()(),Sl(116,"td",18)(117,"code",19),Jx(118,"string"),sg()(),Sl(119,"td",20),Jx(120,"-"),sg(),Sl(121,"td",21)(122,"em")(123,"strong"),Jx(124,"(opcional)"),sg()(),Sl(125,"p"),Jx(126,"Valor do r\xF3tulo a ser exibido."),sg()()()(),Sl(127,"h3"),Jx(128,"Enums"),sg(),Sl(129,"h4",4)(130,"code",5),Jx(131,"PoDividerSize"),sg()(),Sl(132,"div",2)(133,"p"),Jx(134,"Enum para defini\xE7\xE3o da espessura da linha."),sg()(),Sl(135,"h4",10),Jx(136,"Propriedades"),sg(),Sl(137,"table",11)(138,"tr",12)(139,"th",13),Jx(140,"Nome"),sg(),Sl(141,"th",13),Jx(142,"Descri\xE7\xE3o"),sg()(),Sl(143,"tr",14)(144,"td",15)(145,"div",16)(146,"span",17),Jx(147," small"),Wl(148,"br"),sg()()(),Sl(149,"td",21)(150,"p"),Jx(151,"A espessura da linha fica com 1px."),sg()()(),Sl(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),Jx(156," medium"),Wl(157,"br"),sg()()(),Sl(158,"td",21)(159,"p"),Jx(160,"A espessura da linha fica com 2px."),sg()()(),Sl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),Jx(165," large"),Wl(166,"br"),sg()()(),Sl(167,"td",21)(168,"p"),Jx(169,"A espessura da linha fica com 4px."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var re=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Divider",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-divider-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-divider-basic-view")(6,"sample-po-divider-labs-view")(7,"sample-po-divider-user-detail-view"),sg()()()),a&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ie,ne,le,pe],encapsulation:2})}return o})();var Ce=[{path:"",component:re}],me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[pL.forChild(Ce),pL]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,me]})}return o})();export{Qe as DocPoDividerModule};