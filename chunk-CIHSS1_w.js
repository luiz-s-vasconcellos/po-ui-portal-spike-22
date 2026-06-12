import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dm as uv,cd as sme,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,b3 as q3,ct as Hhe,cc as Nde,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Info","p-value","Value"]],template:function(a,i){a&1&&Hl(0,"po-info",0);},dependencies:[sme],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Info Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-info-basic/sample-po-info-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-info-basic/sample-po-info-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-info-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,re,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Z],encapsulation:2})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:"Horizontal",value:uv.Horizontal},{label:"Vertical",value:uv.Vertical}];ngOnInit(){this.restore();}restore(){this.label="PO Info",this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs"]],standalone:false,decls:13,vars:11,consts:[["f","ngForm"],[3,"p-label","p-label-size","p-orientation","p-url","p-value"],[1,"po-row"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","Url",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","labelSize","p-clean","","p-label","Label size","p-max","11","p-min","1",1,"po-lg-2","po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","Orientation",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=gx();Hl(0,"po-info",1)(1,"po-divider"),Cl(2,"form",null,0)(4,"div",2)(5,"po-input",3),gw("ngModelChange",function(r){return Jy(c),Zx(i.label,r)||(i.label=r),e_(r)}),og(),Z0(),Cl(6,"po-input",4),gw("ngModelChange",function(r){return Jy(c),Zx(i.value,r)||(i.value=r),e_(r)}),og(),Z0(),og(),Cl(7,"div",2)(8,"po-input",5),gw("ngModelChange",function(r){return Jy(c),Zx(i.url,r)||(i.url=r),e_(r)}),og(),Z0(),Cl(9,"po-number",6),gw("ngModelChange",function(r){return Jy(c),Zx(i.labelSize,r)||(i.labelSize=r),e_(r)}),og(),Z0(),Cl(10,"po-radio-group",7),gw("ngModelChange",function(r){return Jy(c),Zx(i.orientation,r)||(i.orientation=r),e_(r)}),og(),Z0(),og(),Cl(11,"div",2)(12,"po-button",8),dt("p-click",function(){return i.restore()}),og()()();}a&2&&(ZE("p-label",i.label)("p-label-size",i.labelSize)("p-orientation",i.orientation)("p-url",i.url)("p-value",i.value),Lp(5),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.value),X0(),Lp(2),pw("ngModel",i.url),X0(),Lp(),pw("ngModel",i.labelSize),X0(),Lp(),pw("ngModel",i.orientation),ZE("p-options",i.orientationOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,q3,Hhe,Nde,sme],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Info Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-info-labs/sample-po-info-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
</po-info>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="url" [(ngModel)]="url" p-clean p-label="Url"> </po-input>

    <po-number
      class="po-lg-2 po-md-6"
      name="labelSize"
      [(ngModel)]="labelSize"
      p-clean
      p-label="Label size"
      p-max="11"
      p-min="1"
    >
    </po-number>

    <po-radio-group
      class="po-lg-6 po-md-12"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-info-labs/sample-po-info-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoInfoOrientation, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-info-labs',
  templateUrl: './sample-po-info-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoLabsComponent implements OnInit {
  label: string;
  labelSize: number;
  orientation: PoInfoOrientation;
  url: string;
  value: string;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoInfoOrientation.Horizontal },
    { label: 'Vertical', value: PoInfoOrientation.Vertical }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = 'PO Info';
    this.labelSize = undefined;
    this.orientation = undefined;
    this.url = undefined;
    this.value = undefined;
  }
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-info-labs"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,de,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,te],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-doc"]],standalone:false,decls:223,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["href","/guides/grid-system"],["pan","",1,"docs-api-property-type","PoInfoOrientation"],["href","https://po-ui.io/documentation/po-theme"]],template:function(a,i){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoInfoModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-info."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoInfoComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),og()(),Cl(15,"div",6)(16,"h4",7),qx(17,"Seletor"),og(),Cl(18,"pre",8),qx(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),og()(),Cl(20,"h4",9),qx(21,"Propriedades"),og(),Cl(22,"table",10)(23,"tr",11)(24,"th",12),qx(25,"Nome"),og(),Cl(26,"th",12),qx(27,"Tipo"),og(),Cl(28,"th",12),qx(29,"Padr\xE3o"),og(),Cl(30,"th",12),qx(31,"Descri\xE7\xE3o"),og()(),Cl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),qx(36," p-label"),Hl(37,"br"),og()()(),Cl(38,"td",17)(39,"code",18),qx(40,"string"),og()(),Cl(41,"td",19),qx(42,"-"),og(),Cl(43,"td",20)(44,"p"),qx(45,"Valor do r\xF3tulo a ser exibido."),og()()(),Cl(46,"tr",13)(47,"td",14)(48,"div",15)(49,"span",16),qx(50," p-label-size"),Hl(51,"br"),og()()(),Cl(52,"td",17)(53,"code",21),qx(54,"number"),og()(),Cl(55,"td",19),qx(56,"-"),og(),Cl(57,"td",20)(58,"em")(59,"strong"),qx(60,"(opcional)"),og()(),Cl(61,"p"),qx(62,"Quantidade de "),Cl(63,"a",22),qx(64,"colunas"),og(),qx(65," usadas para a exibi\xE7\xE3o da "),Cl(66,"code"),qx(67,"p-label"),og(),qx(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),og(),Cl(69,"p"),qx(70,"Valores v\xE1lidos:"),og(),Cl(71,"ul")(72,"li")(73,"code"),qx(74,"[1 .. 11]"),og()()(),Cl(75,"blockquote")(76,"p"),qx(77,"A propriedade "),Cl(78,"code"),qx(79,"p-value"),og(),qx(80," recebe o n\xFAmero de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas."),og()()()(),Cl(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),qx(85," p-orientation"),Hl(86,"br"),og()()(),Cl(87,"td",17)(88,"code",23),qx(89,"PoInfoOrientation"),og()(),Cl(90,"td",19)(91,"p")(92,"code"),qx(93,"vertical"),og()()(),Cl(94,"td",20)(95,"em")(96,"strong"),qx(97,"(opcional)"),og()(),Cl(98,"p"),qx(99,"Define o layout de exibi\xE7\xE3o."),og(),Cl(100,"blockquote")(101,"p"),qx(102,"Quando definido na horizontal, pode-se utilizar a propriedade "),Cl(103,"code"),qx(104,"p-label-size"),og(),qx(105," para um maior controle das informa\xE7\xF5es exibidas."),og()()()(),Cl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),qx(110," p-size"),Hl(111,"br"),og()()(),Cl(112,"td",17)(113,"code",18),qx(114,"string"),og()(),Cl(115,"td",19)(116,"p")(117,"code"),qx(118,"medium"),og()()(),Cl(119,"td",20)(120,"em")(121,"strong"),qx(122,"(opcional)"),og()(),Cl(123,"p"),qx(124,"Define o tamanho do componente entre "),Cl(125,"code"),qx(126,"small"),og(),qx(127," ou "),Cl(128,"code"),qx(129,"medium"),og(),qx(130,"."),og(),Cl(131,"blockquote")(132,"p"),qx(133,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(134,"code"),qx(135,"medium"),og(),qx(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(137,"a",24),qx(138,"po-theme"),og(),qx(139,"."),og()()()(),Cl(140,"tr",13)(141,"td",14)(142,"div",15)(143,"span",16),qx(144," p-url"),Hl(145,"br"),og()()(),Cl(146,"td",17)(147,"code",18),qx(148,"string"),og()(),Cl(149,"td",19),qx(150,"-"),og(),Cl(151,"td",20)(152,"em")(153,"strong"),qx(154,"(opcional)"),og()(),Cl(155,"p"),qx(156,"Ao informar uma URL, o conte\xFAdo ser\xE1 exibido na forma de um "),Cl(157,"em"),qx(158,"link"),og(),qx(159," e ao ser clicado ser\xE1 redirecionado para a URL informada."),og(),Cl(160,"blockquote")(161,"p"),qx(162,"Caso informar "),Cl(163,"code"),qx(164,"http://"),og(),qx(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Cl(166,"code"),qx(167,"/customers"),og(),qx(168,", ser\xE1 aberto na aba atual."),og()()()(),Cl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),qx(173," p-value"),Hl(174,"br"),og()()(),Cl(175,"td",17)(176,"code",18),qx(177,"string"),og()(),Cl(178,"td",19),qx(179,"-"),og(),Cl(180,"td",20)(181,"em")(182,"strong"),qx(183,"(opcional)"),og()(),Cl(184,"p"),qx(185,"Valor do conte\xFAdo a ser exibido."),og()()()(),Cl(186,"h3"),qx(187,"Enums"),og(),Cl(188,"h4",4)(189,"code",5),qx(190,"PoInfoOrientation"),og()(),Cl(191,"div",2)(192,"p"),qx(193,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Cl(194,"code"),qx(195,"po-info"),og(),qx(196,"."),og()(),Cl(197,"h4",9),qx(198,"Propriedades"),og(),Cl(199,"table",10)(200,"tr",11)(201,"th",12),qx(202,"Nome"),og(),Cl(203,"th",12),qx(204,"Descri\xE7\xE3o"),og()(),Cl(205,"tr",13)(206,"td",14)(207,"div",15)(208,"span",16),qx(209," Horizontal"),Hl(210,"br"),og()()(),Cl(211,"td",20)(212,"p"),qx(213,"O valor ser\xE1 exibido na horizontal, ao lado direito em rela\xE7\xE3o ao label."),og()()(),Cl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),qx(218," Vertical"),Hl(219,"br"),og()()(),Cl(220,"td",20)(221,"p"),qx(222,"Exibe o valor na vertical, ou seja, abaixo do label."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Info",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-info-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-info-basic-view")(6,"sample-po-info-labs-view"),og()()()),a&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ee,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ie}],ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[bL.forChild(fe),bL]})}return o})();var Be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ca,ae]})}return o})();export{Be as DocPoInfoModule};