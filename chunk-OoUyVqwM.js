import {f as fe,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cN as q0,bC as Vp,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,aO as Yo,bT as ha,bB as ga,al as lx,am as pw,an as $0,ap as hw,aq as G0,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var Y=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Info","p-value","Value"]],template:function(a,i){a&1&&Ul(0,"po-info",0);},dependencies:[Vp],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Info Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-info-basic/sample-po-info-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-info-basic/sample-po-info-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-info-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,se,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Y],encapsulation:2})}return o})();var ne=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:"Horizontal",value:q0.Horizontal},{label:"Vertical",value:q0.Vertical}];ngOnInit(){this.restore();}restore(){this.label="PO Info",this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs"]],standalone:false,decls:13,vars:11,consts:[["f","ngForm"],[3,"p-label","p-label-size","p-orientation","p-url","p-value"],[1,"po-row"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","Url",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","labelSize","p-clean","","p-label","Label size","p-max","11","p-min","1",1,"po-lg-2","po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","Orientation",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=lx();Ul(0,"po-info",1)(1,"po-divider"),wl(2,"form",null,0)(4,"div",2)(5,"po-input",3),pw("ngModelChange",function(p){return Qy(c),$x(i.label,p)||(i.label=p),Jy(p)}),ng(),$0(),wl(6,"po-input",4),pw("ngModelChange",function(p){return Qy(c),$x(i.value,p)||(i.value=p),Jy(p)}),ng(),$0(),ng(),wl(7,"div",2)(8,"po-input",5),pw("ngModelChange",function(p){return Qy(c),$x(i.url,p)||(i.url=p),Jy(p)}),ng(),$0(),wl(9,"po-number",6),pw("ngModelChange",function(p){return Qy(c),$x(i.labelSize,p)||(i.labelSize=p),Jy(p)}),ng(),$0(),wl(10,"po-radio-group",7),pw("ngModelChange",function(p){return Qy(c),$x(i.orientation,p)||(i.orientation=p),Jy(p)}),ng(),$0(),ng(),wl(11,"div",2)(12,"po-button",8),ut("p-click",function(){return i.restore()}),ng()()();}a&2&&(YE("p-label",i.label)("p-label-size",i.labelSize)("p-orientation",i.orientation)("p-url",i.url)("p-value",i.value),Pp(5),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.value),G0(),Pp(2),hw("ngModel",i.url),G0(),Pp(),hw("ngModel",i.labelSize),G0(),Pp(),hw("ngModel",i.orientation),YE("p-options",i.orientationOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,Yo,ha,ga,Vp],encapsulation:2,changeDetection:1})}return o})();var ue=o=>({"docs-sample-code-tabs":o}),oe=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Info Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-info-labs/sample-po-info-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-info-labs/sample-po-info-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-info-labs"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ue,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ne],encapsulation:2})}return o})();var ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-doc"]],standalone:false,decls:223,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["href","/guides/grid-system"],["pan","",1,"docs-api-property-type","PoInfoOrientation"],["href","https://po-ui.io/documentation/po-theme"]],template:function(a,i){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoInfoModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-info."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoInfoComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),ng()(),wl(15,"div",6)(16,"h4",7),Ux(17,"Seletor"),ng(),wl(18,"pre",8),Ux(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),ng()(),wl(20,"h4",9),Ux(21,"Propriedades"),ng(),wl(22,"table",10)(23,"tr",11)(24,"th",12),Ux(25,"Nome"),ng(),wl(26,"th",12),Ux(27,"Tipo"),ng(),wl(28,"th",12),Ux(29,"Padr\xE3o"),ng(),wl(30,"th",12),Ux(31,"Descri\xE7\xE3o"),ng()(),wl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Ux(36," p-label"),Ul(37,"br"),ng()()(),wl(38,"td",17)(39,"code",18),Ux(40,"string"),ng()(),wl(41,"td",19),Ux(42,"-"),ng(),wl(43,"td",20)(44,"p"),Ux(45,"Valor do r\xF3tulo a ser exibido."),ng()()(),wl(46,"tr",13)(47,"td",14)(48,"div",15)(49,"span",16),Ux(50," p-label-size"),Ul(51,"br"),ng()()(),wl(52,"td",17)(53,"code",21),Ux(54,"number"),ng()(),wl(55,"td",19),Ux(56,"-"),ng(),wl(57,"td",20)(58,"em")(59,"strong"),Ux(60,"(opcional)"),ng()(),wl(61,"p"),Ux(62,"Quantidade de "),wl(63,"a",22),Ux(64,"colunas"),ng(),Ux(65," usadas para a exibi\xE7\xE3o da "),wl(66,"code"),Ux(67,"p-label"),ng(),Ux(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),ng(),wl(69,"p"),Ux(70,"Valores v\xE1lidos:"),ng(),wl(71,"ul")(72,"li")(73,"code"),Ux(74,"[1 .. 11]"),ng()()(),wl(75,"blockquote")(76,"p"),Ux(77,"A propriedade "),wl(78,"code"),Ux(79,"p-value"),ng(),Ux(80," recebe o n\xFAmero de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas."),ng()()()(),wl(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),Ux(85," p-orientation"),Ul(86,"br"),ng()()(),wl(87,"td",17)(88,"code",23),Ux(89,"PoInfoOrientation"),ng()(),wl(90,"td",19)(91,"p")(92,"code"),Ux(93,"vertical"),ng()()(),wl(94,"td",20)(95,"em")(96,"strong"),Ux(97,"(opcional)"),ng()(),wl(98,"p"),Ux(99,"Define o layout de exibi\xE7\xE3o."),ng(),wl(100,"blockquote")(101,"p"),Ux(102,"Quando definido na horizontal, pode-se utilizar a propriedade "),wl(103,"code"),Ux(104,"p-label-size"),ng(),Ux(105," para um maior controle das informa\xE7\xF5es exibidas."),ng()()()(),wl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),Ux(110," p-size"),Ul(111,"br"),ng()()(),wl(112,"td",17)(113,"code",18),Ux(114,"string"),ng()(),wl(115,"td",19)(116,"p")(117,"code"),Ux(118,"medium"),ng()()(),wl(119,"td",20)(120,"em")(121,"strong"),Ux(122,"(opcional)"),ng()(),wl(123,"p"),Ux(124,"Define o tamanho do componente entre "),wl(125,"code"),Ux(126,"small"),ng(),Ux(127," ou "),wl(128,"code"),Ux(129,"medium"),ng(),Ux(130,"."),ng(),wl(131,"blockquote")(132,"p"),Ux(133,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(134,"code"),Ux(135,"medium"),ng(),Ux(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(137,"a",24),Ux(138,"po-theme"),ng(),Ux(139,"."),ng()()()(),wl(140,"tr",13)(141,"td",14)(142,"div",15)(143,"span",16),Ux(144," p-url"),Ul(145,"br"),ng()()(),wl(146,"td",17)(147,"code",18),Ux(148,"string"),ng()(),wl(149,"td",19),Ux(150,"-"),ng(),wl(151,"td",20)(152,"em")(153,"strong"),Ux(154,"(opcional)"),ng()(),wl(155,"p"),Ux(156,"Ao informar uma URL, o conte\xFAdo ser\xE1 exibido na forma de um "),wl(157,"em"),Ux(158,"link"),ng(),Ux(159," e ao ser clicado ser\xE1 redirecionado para a URL informada."),ng(),wl(160,"blockquote")(161,"p"),Ux(162,"Caso informar "),wl(163,"code"),Ux(164,"http://"),ng(),Ux(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),wl(166,"code"),Ux(167,"/customers"),ng(),Ux(168,", ser\xE1 aberto na aba atual."),ng()()()(),wl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),Ux(173," p-value"),Ul(174,"br"),ng()()(),wl(175,"td",17)(176,"code",18),Ux(177,"string"),ng()(),wl(178,"td",19),Ux(179,"-"),ng(),wl(180,"td",20)(181,"em")(182,"strong"),Ux(183,"(opcional)"),ng()(),wl(184,"p"),Ux(185,"Valor do conte\xFAdo a ser exibido."),ng()()()(),wl(186,"h3"),Ux(187,"Enums"),ng(),wl(188,"h4",4)(189,"code",5),Ux(190,"PoInfoOrientation"),ng()(),wl(191,"div",2)(192,"p"),Ux(193,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),wl(194,"code"),Ux(195,"po-info"),ng(),Ux(196,"."),ng()(),wl(197,"h4",9),Ux(198,"Propriedades"),ng(),wl(199,"table",10)(200,"tr",11)(201,"th",12),Ux(202,"Nome"),ng(),wl(203,"th",12),Ux(204,"Descri\xE7\xE3o"),ng()(),wl(205,"tr",13)(206,"td",14)(207,"div",15)(208,"span",16),Ux(209," Horizontal"),Ul(210,"br"),ng()()(),wl(211,"td",20)(212,"p"),Ux(213,"O valor ser\xE1 exibido na horizontal, ao lado direito em rela\xE7\xE3o ao label."),ng()()(),wl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),Ux(218," Vertical"),Ul(219,"br"),ng()()(),wl(220,"td",20)(221,"p"),Ux(222,"Exibe o valor na vertical, ou seja, abaixo do label."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Info",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-info-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-info-basic-view")(6,"sample-po-info-labs-view"),ng()()()),a&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,te,oe,ie],encapsulation:2})}return o})();var ge=[{path:"",component:ae}],le=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[vL.forChild(ge),vL]})}return o})();var Ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue$1({imports:[u5,le]})}return o})();export{Ae as DocPoInfoModule};