import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,b0 as _v,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b3 as q3,aJ as nme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,bM as Pa,cd as sme,cO as TNe,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-basic"]],standalone:false,decls:1,vars:0,template:function(a,n){a&1&&Hl(0,"po-divider");},dependencies:[_v],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),ie=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Divider Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-divider-basic/sample-po-divider-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-divider></po-divider>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-divider-basic/sample-po-divider-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-divider-basic',
  templateUrl: './sample-po-divider-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDividerBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-divider-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,se,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ee],encapsulation:2})}return o})();var oe=(()=>{class o{borderWidth;label;borderWidthList=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore();}restore(){this.label=void 0,this.borderWidth=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-labs"]],standalone:false,decls:8,vars:5,consts:[["f","ngForm"],[3,"p-label","p-border-width"],[1,"po-row"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderWidth","p-label","Border width",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,n){if(a&1){let h=gx();Hl(0,"po-divider",1),Cl(1,"form",null,0)(3,"div",2)(4,"po-input",3),gw("ngModelChange",function(f){return Jy(h),Zx(n.label,f)||(n.label=f),e_(f)}),og(),Z0(),Cl(5,"po-select",4),gw("ngModelChange",function(f){return Jy(h),Zx(n.borderWidth,f)||(n.borderWidth=f),e_(f)}),og(),Z0(),og(),Cl(6,"div",2)(7,"po-button",5),dt("p-click",function(){return n.restore()}),og()()();}a&2&&(ZE("p-label",n.label)("p-border-width",n.borderWidth),Lp(4),pw("ngModel",n.label),X0(),Lp(),pw("ngModel",n.borderWidth),ZE("p-options",n.borderWidthList),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,nme],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Divider Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-divider-labs/sample-po-divider-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-divider [p-label]="label" [p-border-width]="borderWidth"></po-divider>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-divider-labs/sample-po-divider-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-divider-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,be,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return o})();var ae=(()=>{class o{router=f(Cn);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="Big John";placeOfBirth="Colorado";statusValue="Success";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-user-detail"]],standalone:false,decls:19,vars:13,consts:[["p-title","User Detail",3,"p-breadcrumb"],[1,"po-row","po-mb-4"],["p-label","Status",1,"po-md-12"],["p-icon","","p-label","Status","p-type","success",1,"po-md-4",3,"p-value"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","Personal data",1,"po-md-12"],["p-label","Name",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Nickname",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","E-mail",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Birthday",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Genre",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Nationality",1,"po-md-4","po-mb-md-2",3,"p-value"],["p-label","Place of birth",1,"po-md-4",3,"p-value"],["p-label","Gratuation",1,"po-md-4",3,"p-value"],["p-label","Relationship",1,"po-md-12"],["p-label","Father's name",1,"po-md-4",3,"p-value"],["p-label","Mother's name",1,"po-md-4",3,"p-value"]],template:function(a,n){a&1&&(Cl(0,"po-page-detail",0)(1,"div",1),Hl(2,"po-divider",2)(3,"po-tag",3)(4,"po-info",4),og(),Cl(5,"div",1),Hl(6,"po-divider",5)(7,"po-info",6)(8,"po-info",7)(9,"po-info",8)(10,"po-info",9)(11,"po-info",10)(12,"po-info",11)(13,"po-info",12)(14,"po-info",13),og(),Cl(15,"div",1),Hl(16,"po-divider",14)(17,"po-info",15)(18,"po-info",16),og()()),a&2&&(ZE("p-breadcrumb",n.breadcrumb),Lp(3),ZE("p-value",n.statusValue),Lp(),ZE("p-value",n.userId),Lp(3),ZE("p-value",n.name),Lp(),ZE("p-value",n.nickname),Lp(),ZE("p-value",n.email),Lp(),ZE("p-value",n.birthDate),Lp(),ZE("p-value",n.genre),Lp(),ZE("p-value",n.nationality),Lp(),ZE("p-value",n.placeOfBirth),Lp(),ZE("p-value",n.graduation),Lp(3),ZE("p-value",n.fathersName),Lp(),ZE("p-value",n.mothersName));},dependencies:[_v,Pa,sme,TNe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),le=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-user-detail-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Divider - User Detail"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-divider-user-detail/sample-po-divider-user-detail.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-divider-user-detail/sample-po-divider-user-detail.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-divider-user-detail"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,fe,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ae],encapsulation:2})}return o})();var pe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-divider-doc"]],standalone:false,decls:170,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"]],template:function(a,n){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoDividerModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-divider."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoDividerComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"Este componente apresenta uma linha demarcadora de blocos e pode conter um "),Cl(15,"em"),qx(16,"label"),og(),qx(17,`. Seu uso \xE9 indicado para defini\xE7\xE3o
e organiza\xE7\xE3o de informa\xE7\xF5es em uma tela e sua caracter\xEDstica \xE9 semelhante \xE0 tag `),Cl(18,"code"),qx(19,"<hr>"),og(),qx(20,"."),og(),Cl(21,"h4"),qx(22,"Tokens customiz\xE1veis"),og(),Cl(23,"p"),qx(24,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),og(),Cl(25,"blockquote")(26,"p"),qx(27,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(28,"a",6),qx(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(30,"."),og()(),Cl(31,"table")(32,"thead")(33,"tr")(34,"th"),qx(35,"Propriedade"),og(),Cl(36,"th"),qx(37,"Descri\xE7\xE3o"),og(),Cl(38,"th"),qx(39,"Valor Padr\xE3o"),og()()(),Cl(40,"tbody")(41,"tr")(42,"td")(43,"strong"),qx(44,"Default Values"),og()(),Hl(45,"td")(46,"td"),og(),Cl(47,"tr")(48,"td")(49,"code"),qx(50,"--color"),og()(),Cl(51,"td"),qx(52,"Cor principla do divider\xA0"),og(),Cl(53,"td")(54,"code"),qx(55,"var(--color-neutral-mid-40)"),og()()(),Cl(56,"tr")(57,"td")(58,"code"),qx(59,"--stroke-linecap"),og()(),Cl(60,"td"),qx(61,"Extremidade da linha\xA0"),og(),Cl(62,"td")(63,"code"),qx(64,"round"),og()()()()()(),Cl(65,"div",7)(66,"h4",8),qx(67,"Seletor"),og(),Cl(68,"pre",9),qx(69,`<po-divider
    p-border-width="string"
    p-label="string" >
</po-divider>
`),og()(),Cl(70,"h4",10),qx(71,"Propriedades"),og(),Cl(72,"table",11)(73,"tr",12)(74,"th",13),qx(75,"Nome"),og(),Cl(76,"th",13),qx(77,"Tipo"),og(),Cl(78,"th",13),qx(79,"Padr\xE3o"),og(),Cl(80,"th",13),qx(81,"Descri\xE7\xE3o"),og()(),Cl(82,"tr",14)(83,"td",15)(84,"div",16)(85,"span",17),qx(86," p-border-width"),Hl(87,"br"),og()()(),Cl(88,"td",18)(89,"code",19),qx(90,"string"),og()(),Cl(91,"td",20)(92,"p")(93,"code"),qx(94,"small"),og()()(),Cl(95,"td",21)(96,"em")(97,"strong"),qx(98,"(opcional)"),og()(),Cl(99,"p"),qx(100,"Define a espessura da linha."),og(),Cl(101,"p"),qx(102,"Valores v\xE1lidos:"),og(),Cl(103,"ul")(104,"li"),qx(105,"small"),og(),Cl(106,"li"),qx(107,"medium"),og(),Cl(108,"li"),qx(109,"large"),og()()()(),Cl(110,"tr",14)(111,"td",15)(112,"div",16)(113,"span",17),qx(114," p-label"),Hl(115,"br"),og()()(),Cl(116,"td",18)(117,"code",19),qx(118,"string"),og()(),Cl(119,"td",20),qx(120,"-"),og(),Cl(121,"td",21)(122,"em")(123,"strong"),qx(124,"(opcional)"),og()(),Cl(125,"p"),qx(126,"Valor do r\xF3tulo a ser exibido."),og()()()(),Cl(127,"h3"),qx(128,"Enums"),og(),Cl(129,"h4",4)(130,"code",5),qx(131,"PoDividerSize"),og()(),Cl(132,"div",2)(133,"p"),qx(134,"Enum para defini\xE7\xE3o da espessura da linha."),og()(),Cl(135,"h4",10),qx(136,"Propriedades"),og(),Cl(137,"table",11)(138,"tr",12)(139,"th",13),qx(140,"Nome"),og(),Cl(141,"th",13),qx(142,"Descri\xE7\xE3o"),og()(),Cl(143,"tr",14)(144,"td",15)(145,"div",16)(146,"span",17),qx(147," small"),Hl(148,"br"),og()()(),Cl(149,"td",21)(150,"p"),qx(151,"A espessura da linha fica com 1px."),og()()(),Cl(152,"tr",14)(153,"td",15)(154,"div",16)(155,"span",17),qx(156," medium"),Hl(157,"br"),og()()(),Cl(158,"td",21)(159,"p"),qx(160,"A espessura da linha fica com 2px."),og()()(),Cl(161,"tr",14)(162,"td",15)(163,"div",16)(164,"span",17),qx(165," large"),Hl(166,"br"),og()()(),Cl(167,"td",21)(168,"p"),qx(169,"A espessura da linha fica com 4px."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var re=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Divider",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-divider-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-divider-basic-view")(6,"sample-po-divider-labs-view")(7,"sample-po-divider-user-detail-view"),og()()()),a&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ie,ne,le,pe],encapsulation:2})}return o})();var Ce=[{path:"",component:re}],me=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[bL.forChild(Ce),bL]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ca,me]})}return o})();export{Qe as DocPoDividerModule};