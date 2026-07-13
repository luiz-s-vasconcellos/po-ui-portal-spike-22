import {f as fe$1,u as ue,s as sr,D as DL,w,c3 as Xn,a as wn,U as Un,dg as lv,c9 as jhe,L as Gl,an as AO,aH as Ka,b8 as Ume,b9 as $me,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,b4 as L3,cp as Bhe,c8 as Tde,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,a3 as sNe,aD as Ky,aT as sN,aE as Xy}from'./main-JFQ6NFFH.js';var Z=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic"]],standalone:false,decls:1,vars:0,consts:[["p-label","PO Info","p-value","Value"]],template:function(a,i){a&1&&Gl(0,"po-info",0);},dependencies:[jhe],encapsulation:2,changeDetection:1})}return o})();var re=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Info Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-info-basic/sample-po-info-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-info-basic/sample-po-info-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-info-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,re,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:"Horizontal",value:lv.Horizontal},{label:"Vertical",value:lv.Vertical}];ngOnInit(){this.restore();}restore(){this.label="PO Info",this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0;}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs"]],standalone:false,decls:13,vars:11,consts:[["f","ngForm"],[3,"p-label","p-label-size","p-orientation","p-url","p-value"],[1,"po-row"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","Url",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel"],["name","labelSize","p-clean","","p-label","Label size","p-max","11","p-min","1",1,"po-lg-2","po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","Orientation",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=Sx();Gl(0,"po-info",1)(1,"po-divider"),Tl(2,"form",null,0)(4,"div",2)(5,"po-input",3),ww("ngModelChange",function(r){return Ky(c),sN(i.label,r)||(i.label=r),Xy(r)}),sg(),r0(),Tl(6,"po-input",4),ww("ngModelChange",function(r){return Ky(c),sN(i.value,r)||(i.value=r),Xy(r)}),sg(),r0(),sg(),Tl(7,"div",2)(8,"po-input",5),ww("ngModelChange",function(r){return Ky(c),sN(i.url,r)||(i.url=r),Xy(r)}),sg(),r0(),Tl(9,"po-number",6),ww("ngModelChange",function(r){return Ky(c),sN(i.labelSize,r)||(i.labelSize=r),Xy(r)}),sg(),r0(),Tl(10,"po-radio-group",7),ww("ngModelChange",function(r){return Ky(c),sN(i.orientation,r)||(i.orientation=r),Xy(r)}),sg(),r0(),sg(),Tl(11,"div",2)(12,"po-button",8),ht("p-click",function(){return i.restore()}),sg()()();}a&2&&(nw("p-label",i.label)("p-label-size",i.labelSize)("p-orientation",i.orientation)("p-url",i.url)("p-value",i.value),Vp(5),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.value),o0(),Vp(2),Ew("ngModel",i.url),o0(),Vp(),Ew("ngModel",i.labelSize),o0(),Vp(),Ew("ngModel",i.orientation),nw("p-options",i.orientationOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,L3,Bhe,Tde,jhe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Info Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-info-labs/sample-po-info-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-info-labs/sample-po-info-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-info-labs"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,de,i.hideSampleCodeTabs)));},dependencies:[AO,Ka,Ume,$me,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-info-doc"]],standalone:false,decls:223,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["href","/guides/grid-system"],["pan","",1,"docs-api-property-type","PoInfoOrientation"],["href","https://po-ui.io/documentation/po-theme"]],template:function(a,i){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoInfoModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-info."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoInfoComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),sg()(),Tl(15,"div",6)(16,"h4",7),iN(17,"Seletor"),sg(),Tl(18,"pre",8),iN(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),sg()(),Tl(20,"h4",9),iN(21,"Propriedades"),sg(),Tl(22,"table",10)(23,"tr",11)(24,"th",12),iN(25,"Nome"),sg(),Tl(26,"th",12),iN(27,"Tipo"),sg(),Tl(28,"th",12),iN(29,"Padr\xE3o"),sg(),Tl(30,"th",12),iN(31,"Descri\xE7\xE3o"),sg()(),Tl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),iN(36," p-label"),Gl(37,"br"),sg()()(),Tl(38,"td",17)(39,"code",18),iN(40,"string"),sg()(),Tl(41,"td",19),iN(42,"-"),sg(),Tl(43,"td",20)(44,"p"),iN(45,"Valor do r\xF3tulo a ser exibido."),sg()()(),Tl(46,"tr",13)(47,"td",14)(48,"div",15)(49,"span",16),iN(50," p-label-size"),Gl(51,"br"),sg()()(),Tl(52,"td",17)(53,"code",21),iN(54,"number"),sg()(),Tl(55,"td",19),iN(56,"-"),sg(),Tl(57,"td",20)(58,"em")(59,"strong"),iN(60,"(opcional)"),sg()(),Tl(61,"p"),iN(62,"Quantidade de "),Tl(63,"a",22),iN(64,"colunas"),sg(),iN(65," usadas para a exibi\xE7\xE3o da "),Tl(66,"code"),iN(67,"p-label"),sg(),iN(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),sg(),Tl(69,"p"),iN(70,"Valores v\xE1lidos:"),sg(),Tl(71,"ul")(72,"li")(73,"code"),iN(74,"[1 .. 11]"),sg()()(),Tl(75,"blockquote")(76,"p"),iN(77,"A propriedade "),Tl(78,"code"),iN(79,"p-value"),sg(),iN(80," recebe o n\xFAmero de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas."),sg()()()(),Tl(81,"tr",13)(82,"td",14)(83,"div",15)(84,"span",16),iN(85," p-orientation"),Gl(86,"br"),sg()()(),Tl(87,"td",17)(88,"code",23),iN(89,"PoInfoOrientation"),sg()(),Tl(90,"td",19)(91,"p")(92,"code"),iN(93,"vertical"),sg()()(),Tl(94,"td",20)(95,"em")(96,"strong"),iN(97,"(opcional)"),sg()(),Tl(98,"p"),iN(99,"Define o layout de exibi\xE7\xE3o."),sg(),Tl(100,"blockquote")(101,"p"),iN(102,"Quando definido na horizontal, pode-se utilizar a propriedade "),Tl(103,"code"),iN(104,"p-label-size"),sg(),iN(105," para um maior controle das informa\xE7\xF5es exibidas."),sg()()()(),Tl(106,"tr",13)(107,"td",14)(108,"div",15)(109,"span",16),iN(110," p-size"),Gl(111,"br"),sg()()(),Tl(112,"td",17)(113,"code",18),iN(114,"string"),sg()(),Tl(115,"td",19)(116,"p")(117,"code"),iN(118,"medium"),sg()()(),Tl(119,"td",20)(120,"em")(121,"strong"),iN(122,"(opcional)"),sg()(),Tl(123,"p"),iN(124,"Define o tamanho do componente entre "),Tl(125,"code"),iN(126,"small"),sg(),iN(127," ou "),Tl(128,"code"),iN(129,"medium"),sg(),iN(130,"."),sg(),Tl(131,"blockquote")(132,"p"),iN(133,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(134,"code"),iN(135,"medium"),sg(),iN(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(137,"a",24),iN(138,"po-theme"),sg(),iN(139,"."),sg()()()(),Tl(140,"tr",13)(141,"td",14)(142,"div",15)(143,"span",16),iN(144," p-url"),Gl(145,"br"),sg()()(),Tl(146,"td",17)(147,"code",18),iN(148,"string"),sg()(),Tl(149,"td",19),iN(150,"-"),sg(),Tl(151,"td",20)(152,"em")(153,"strong"),iN(154,"(opcional)"),sg()(),Tl(155,"p"),iN(156,"Ao informar uma URL, o conte\xFAdo ser\xE1 exibido na forma de um "),Tl(157,"em"),iN(158,"link"),sg(),iN(159," e ao ser clicado ser\xE1 redirecionado para a URL informada."),sg(),Tl(160,"blockquote")(161,"p"),iN(162,"Caso informar "),Tl(163,"code"),iN(164,"http://"),sg(),iN(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Tl(166,"code"),iN(167,"/customers"),sg(),iN(168,", ser\xE1 aberto na aba atual."),sg()()()(),Tl(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),iN(173," p-value"),Gl(174,"br"),sg()()(),Tl(175,"td",17)(176,"code",18),iN(177,"string"),sg()(),Tl(178,"td",19),iN(179,"-"),sg(),Tl(180,"td",20)(181,"em")(182,"strong"),iN(183,"(opcional)"),sg()(),Tl(184,"p"),iN(185,"Valor do conte\xFAdo a ser exibido."),sg()()()(),Tl(186,"h3"),iN(187,"Enums"),sg(),Tl(188,"h4",4)(189,"code",5),iN(190,"PoInfoOrientation"),sg()(),Tl(191,"div",2)(192,"p"),iN(193,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),Tl(194,"code"),iN(195,"po-info"),sg(),iN(196,"."),sg()(),Tl(197,"h4",9),iN(198,"Propriedades"),sg(),Tl(199,"table",10)(200,"tr",11)(201,"th",12),iN(202,"Nome"),sg(),Tl(203,"th",12),iN(204,"Descri\xE7\xE3o"),sg()(),Tl(205,"tr",13)(206,"td",14)(207,"div",15)(208,"span",16),iN(209," Horizontal"),Gl(210,"br"),sg()()(),Tl(211,"td",20)(212,"p"),iN(213,"O valor ser\xE1 exibido na horizontal, ao lado direito em rela\xE7\xE3o ao label."),sg()()(),Tl(214,"tr",13)(215,"td",14)(216,"div",15)(217,"span",16),iN(218," Vertical"),Gl(219,"br"),sg()()(),Tl(220,"td",20)(221,"p"),iN(222,"Exibe o valor na vertical, ou seja, abaixo do label."),sg()()()()());},dependencies:[Ka],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,a){this.route=p,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let a=p.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Info",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-info-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-info-basic-view")(6,"sample-po-info-labs-view"),sg()()()),a&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[sNe,Ume,$me,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:"",component:ie}],ae=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[DL.forChild(fe),DL]})}return o})();var Be=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[sr,ae]})}return o})();export{Be as DocPoInfoModule};