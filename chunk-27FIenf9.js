import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,dh as lv,c9 as Qhe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,b4 as F3,cp as Uhe,c8 as Pde,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Info","p-value","Value"]],template:function(a,i){a&1&&Wl(0,"po-info",0);},dependencies:[Qhe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Info Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-info-basic/sample-po-info-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-info-basic/sample-po-info-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-info-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,re,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Z],encapsulation:2})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:"Horizontal",value:lv.Horizontal},{label:"Vertical",value:lv.Vertical}];ngOnInit(){this.restore();}restore(){this.label="PO Info",this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs"]],standalone:false,decls:13,vars:11,consts:[["f","ngForm"],[3,"p-label","p-label-size","p-orientation","p-url","p-value"],[1,"po-row"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","Url",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","labelSize","p-clean","","p-label","Label size","p-max","11","p-min","1",1,"po-lg-2","po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","Orientation",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=Ex();Wl(0,"po-info",1)(1,"po-divider"),Sl(2,"form",null,0)(4,"div",2)(5,"po-input",3),Ew("ngModelChange",function(r){return Xy(c),tN(i.label,r)||(i.label=r),Qy(r)}),sg(),JA(),Sl(6,"po-input",4),Ew("ngModelChange",function(r){return Xy(c),tN(i.value,r)||(i.value=r),Qy(r)}),sg(),JA(),sg(),Sl(7,"div",2)(8,"po-input",5),Ew("ngModelChange",function(r){return Xy(c),tN(i.url,r)||(i.url=r),Qy(r)}),sg(),JA(),Sl(9,"po-number",6),Ew("ngModelChange",function(r){return Xy(c),tN(i.labelSize,r)||(i.labelSize=r),Qy(r)}),sg(),JA(),Sl(10,"po-radio-group",7),Ew("ngModelChange",function(r){return Xy(c),tN(i.orientation,r)||(i.orientation=r),Qy(r)}),sg(),JA(),sg(),Sl(11,"div",2)(12,"po-button",8),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(tw("p-label",i.label)("p-label-size",i.labelSize)("p-orientation",i.orientation)("p-url",i.url)("p-value",i.value),Vp(5),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.value),t0(),Vp(2),Dw("ngModel",i.url),t0(),Vp(),Dw("ngModel",i.labelSize),t0(),Vp(),Dw("ngModel",i.orientation),tw("p-options",i.orientationOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,F3,Uhe,Pde,Qhe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Info Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-info-labs/sample-po-info-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-info-labs/sample-po-info-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-info-labs"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,de,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,te],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-doc"]],standalone:false,decls:223,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["href","/guides/grid-system"],["pan","",1,"docs-api-property-type","PoInfoOrientation"],["href","https://po-ui.io/documentation/po-theme"]],template:function(a,i){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoInfoModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do componente po-info."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoInfoComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),sg()(),Sl(15,"div",6)(16,"h4",7),Jx(17,"Seletor"),sg(),Sl(18,"pre",8),Jx(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),sg()(),Sl(20,"h4",9),Jx(21,"Propriedades"),sg(),Sl(22,"table",10)(23,"tr",11)(24,"th",12),Jx(25,"Nome"),sg(),Sl(26,"th",12),Jx(27,"Tipo"),sg(),Sl(28,"th",12),Jx(29,"Padr\xE3o"),sg(),Sl(30,"th",12),Jx(31,"Descri\xE7\xE3o"),sg()(),Sl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Jx(36," p-label"),Wl(37,"br"),sg()()(),Sl(38,"td",17)(39,"code",18),Jx(40,"string"),sg()(),Sl(41,"td",19),Jx(42,"-"),sg(),Sl(43,"td",20)(44,"p"),Jx(45,"Valor do r\xF3tulo a ser exibido."),sg()()(),Sl(46,"tr",13)(47,"td",14)(48,"div",15)(49,"span",16),Jx(50," p-label-size"),Wl(51,"br"),sg()()(),Sl(52,"td",17)(53,"code",21),Jx(54,"number"),sg()(),Sl(55,"td",19),Jx(56,"-"),sg(),Sl(57,"td",20)(58,"em")(59,"strong"),Jx(60,"(opcional)"),sg()(),Sl(61,"p"),Jx(62,"Quantidade de "),Sl(63,"a",22),Jx(64,"colunas"),sg(),Jx(65," usadas para a exibi\xE7\xE3o da "),Sl(66,"code"),Jx(67,"p-label"),sg(),Jx(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),sg(),Sl(69,"p"),Jx(70,"Valores v\xE1lidos:"),sg(),Sl(71,"ul")(72,"li")(73,"code"),Jx(74,"[1 .. 11]"),sg()()(),Sl(75,"blockquote")(76,"p"),Jx(77,"A propriedade "),Sl(78,"code"),Jx(79,"p-value"),sg(),Jx(80," recebe o n\xFAmero de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas."),sg()()()(),Sl(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),Jx(85," p-orientation"),Wl(86,"br"),sg()()(),Sl(87,"td",17)(88,"code",23),Jx(89,"PoInfoOrientation"),sg()(),Sl(90,"td",19)(91,"p")(92,"code"),Jx(93,"vertical"),sg()()(),Sl(94,"td",20)(95,"em")(96,"strong"),Jx(97,"(opcional)"),sg()(),Sl(98,"p"),Jx(99,"Define o layout de exibi\xE7\xE3o."),sg(),Sl(100,"blockquote")(101,"p"),Jx(102,"Quando definido na horizontal, pode-se utilizar a propriedade "),Sl(103,"code"),Jx(104,"p-label-size"),sg(),Jx(105," para um maior controle das informa\xE7\xF5es exibidas."),sg()()()(),Sl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),Jx(110," p-size"),Wl(111,"br"),sg()()(),Sl(112,"td",17)(113,"code",18),Jx(114,"string"),sg()(),Sl(115,"td",19)(116,"p")(117,"code"),Jx(118,"medium"),sg()()(),Sl(119,"td",20)(120,"em")(121,"strong"),Jx(122,"(opcional)"),sg()(),Sl(123,"p"),Jx(124,"Define o tamanho do componente entre "),Sl(125,"code"),Jx(126,"small"),sg(),Jx(127," ou "),Sl(128,"code"),Jx(129,"medium"),sg(),Jx(130,"."),sg(),Sl(131,"blockquote")(132,"p"),Jx(133,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(134,"code"),Jx(135,"medium"),sg(),Jx(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(137,"a",24),Jx(138,"po-theme"),sg(),Jx(139,"."),sg()()()(),Sl(140,"tr",13)(141,"td",14)(142,"div",15)(143,"span",16),Jx(144," p-url"),Wl(145,"br"),sg()()(),Sl(146,"td",17)(147,"code",18),Jx(148,"string"),sg()(),Sl(149,"td",19),Jx(150,"-"),sg(),Sl(151,"td",20)(152,"em")(153,"strong"),Jx(154,"(opcional)"),sg()(),Sl(155,"p"),Jx(156,"Ao informar uma URL, o conte\xFAdo ser\xE1 exibido na forma de um "),Sl(157,"em"),Jx(158,"link"),sg(),Jx(159," e ao ser clicado ser\xE1 redirecionado para a URL informada."),sg(),Sl(160,"blockquote")(161,"p"),Jx(162,"Caso informar "),Sl(163,"code"),Jx(164,"http://"),sg(),Jx(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Sl(166,"code"),Jx(167,"/customers"),sg(),Jx(168,", ser\xE1 aberto na aba atual."),sg()()()(),Sl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),Jx(173," p-value"),Wl(174,"br"),sg()()(),Sl(175,"td",17)(176,"code",18),Jx(177,"string"),sg()(),Sl(178,"td",19),Jx(179,"-"),sg(),Sl(180,"td",20)(181,"em")(182,"strong"),Jx(183,"(opcional)"),sg()(),Sl(184,"p"),Jx(185,"Valor do conte\xFAdo a ser exibido."),sg()()()(),Sl(186,"h3"),Jx(187,"Enums"),sg(),Sl(188,"h4",4)(189,"code",5),Jx(190,"PoInfoOrientation"),sg()(),Sl(191,"div",2)(192,"p"),Jx(193,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Sl(194,"code"),Jx(195,"po-info"),sg(),Jx(196,"."),sg()(),Sl(197,"h4",9),Jx(198,"Propriedades"),sg(),Sl(199,"table",10)(200,"tr",11)(201,"th",12),Jx(202,"Nome"),sg(),Sl(203,"th",12),Jx(204,"Descri\xE7\xE3o"),sg()(),Sl(205,"tr",13)(206,"td",14)(207,"div",15)(208,"span",16),Jx(209," Horizontal"),Wl(210,"br"),sg()()(),Sl(211,"td",20)(212,"p"),Jx(213,"O valor ser\xE1 exibido na horizontal, ao lado direito em rela\xE7\xE3o ao label."),sg()()(),Sl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),Jx(218," Vertical"),Wl(219,"br"),sg()()(),Sl(220,"td",20)(221,"p"),Jx(222,"Exibe o valor na vertical, ou seja, abaixo do label."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Info",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-info-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-info-basic-view")(6,"sample-po-info-labs-view"),sg()()()),a&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ee,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ie}],ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[pL.forChild(fe),pL]})}return o})();var Be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,ae]})}return o})();export{Be as DocPoInfoModule};