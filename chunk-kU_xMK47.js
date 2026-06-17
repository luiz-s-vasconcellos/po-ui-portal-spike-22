import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,cj as Fa,M as Wl,T as tw,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,b2 as eme,b3 as oNe,b7 as A3,ba as bNe,ck as Ws,cl as js,a2 as QE,a3 as pNe,aB as Ex,aA as Tx,aD as Xy,aE as Qy}from'./main-BY5NURRA.js';var N=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:false,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,m){o&1&&Wl(0,"po-page-job-scheduler",0),o&2&&tw("p-breadcrumb",m.breadcrumb);},dependencies:[Fa],encapsulation:2,changeDetection:1})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),G=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Job Scheduler - Background Process"),sg(),Sl(4,"a",2),ht("click",function(){return m.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-job-scheduler-background-process"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+m.sampleCodeButtonIcon),Vp(),fg(" ",m.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ee,m.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,N],encapsulation:2})}return i})();function ne(i,_){if(i&1){let r=Ex();Sl(0,"h1"),Jx(1,"Etapa 1"),sg(),Sl(2,"po-dynamic-form",4),ht("p-form",function(m){Xy(r);let c=Tx();return Qy(c.getFormExample(m))}),sg();}if(i&2){let r=Tx();Vp(2),tw("p-fields",r.parametersForm);}}function ie(i,_){if(i&1){let r=Ex();Sl(0,"po-table",5),ht("p-selected",function(m){Xy(r);let c=Tx();return Qy(c.selectedItem(m))}),sg();}if(i&2){let r=Tx();tw("p-items",r.items)("p-selectable",true);}}function oe(i,_){if(i&1&&(Sl(0,"po-widget",6),Wl(1,"po-dynamic-view",7),sg()),i&2){let r=Tx();Vp(),tw("p-fields",r.fieldsSummary)("p-value",r.valueSummary);}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:true,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:true,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r;}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version};}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:false,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,m){o&1&&(Sl(0,"po-page-job-scheduler",0),QE(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),sg()),o&2&&(tw("p-step-execution-last",true),Vp(),tw("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),Vp(),tw("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue));},dependencies:[eme,oNe,A3,bNe,Fa,Ws,js],encapsulation:2,changeDetection:1})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Job Scheduler - Directives"),sg(),Sl(4,"a",2),ht("click",function(){return m.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="$safeNavigationMigration(dynamicForm?.form.invalid)"
    [p-execution-parameter]="$safeNavigationMigration(dynamicForm?.form.value)"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-job-scheduler-directives"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+m.sampleCodeButtonIcon),Vp(),fg(" ",m.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,re,m.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,W],encapsulation:2})}return i})();var $=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:false,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,m){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),sg()(),Wl(4,"div",2),Sl(5,"h3",3),Jx(6,"Componente"),sg(),Sl(7,"h4",4)(8,"code",5),Jx(9,"PoPageJobSchedulerComponent"),sg()(),Sl(10,"div",2)(11,"p"),Jx(12,"O "),Sl(13,"code"),Jx(14,"po-page-job-scheduler"),sg(),Jx(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),sg(),Sl(16,"p"),Jx(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),sg(),Sl(18,"p"),Jx(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),Sl(20,"a",6),Jx(21,"Guia de implementa\xE7\xE3o de APIs"),sg(),Jx(22,"."),sg(),Sl(23,"h4"),Jx(24,"Tokens customiz\xE1veis"),sg(),Sl(25,"blockquote")(26,"p"),Jx(27,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(28,"a",7),Jx(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(30,"."),sg()(),Sl(31,"table")(32,"thead")(33,"tr")(34,"th"),Jx(35,"Propriedade"),sg(),Sl(36,"th"),Jx(37,"Descri\xE7\xE3o"),sg(),Sl(38,"th"),Jx(39,"Valor Padr\xE3o"),sg()()(),Sl(40,"tbody")(41,"tr")(42,"td")(43,"strong"),Jx(44,"Header"),sg()(),Wl(45,"td")(46,"td"),sg(),Sl(47,"tr")(48,"td")(49,"code"),Jx(50,"--padding"),sg()(),Sl(51,"td"),Jx(52,"Espa\xE7amento do header"),sg(),Sl(53,"td")(54,"code"),Jx(55,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Sl(56,"tr")(57,"td")(58,"code"),Jx(59,"--gap"),sg()(),Sl(60,"td"),Jx(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Sl(62,"td")(63,"code"),Jx(64,"var(--spacing-md)"),sg()()(),Sl(65,"tr")(66,"td")(67,"code"),Jx(68,"--gap-actions"),sg()(),Sl(69,"td"),Jx(70,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Sl(71,"td")(72,"code"),Jx(73,"var(--spacing-xs)"),sg()()(),Sl(74,"tr")(75,"td")(76,"code"),Jx(77,"--font-family"),sg()(),Sl(78,"td"),Jx(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--font-family-theme)"),sg()()(),Sl(83,"tr")(84,"td")(85,"strong"),Jx(86,"Content"),sg()(),Wl(87,"td")(88,"td"),sg(),Sl(89,"tr")(90,"td")(91,"code"),Jx(92,"--padding-content"),sg()(),Sl(93,"td"),Jx(94,"Espa\xE7amento do conte\xFAdo"),sg(),Sl(95,"td")(96,"code"),Jx(97,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Sl(98,"div",8)(99,"h4",9),Jx(100,"Seletor"),sg(),Sl(101,"pre",10),Jx(102,`<po-page-job-scheduler
    p-before-send="unknown"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),sg()(),Sl(103,"h4",11),Jx(104,"Propriedades"),sg(),Sl(105,"table",12)(106,"tr",13)(107,"th",14),Jx(108,"Nome"),sg(),Sl(109,"th",14),Jx(110,"Tipo"),sg(),Sl(111,"th",14),Jx(112,"Padr\xE3o"),sg(),Sl(113,"th",14),Jx(114,"Descri\xE7\xE3o"),sg()(),Sl(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),Jx(119," p-before-send"),Wl(120,"br"),sg()()(),Sl(121,"td",19)(122,"code",20),Jx(123,"unknown"),sg()(),Sl(124,"td",21),Jx(125,"-"),sg(),Sl(126,"td",22)(127,"em")(128,"strong"),Jx(129,"(opcional)"),sg()(),Sl(130,"p"),Jx(131,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),sg(),Sl(132,"blockquote")(133,"p"),Jx(134,"Deve retornar um objeto do tipo "),Sl(135,"code"),Jx(136,"PoPageJobScheduler"),sg(),Jx(137," para ser adicionado ao model do PoPageJobScheduler."),sg()(),Sl(138,"blockquote")(139,"p"),Jx(140,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),Sl(141,"code"),Jx(142,"PoJobSchedulerInternal"),sg(),Jx(143,"."),sg()(),Sl(144,"p"),Jx(145,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Sl(146,"code"),Jx(147,"PoPageJobScheduler"),sg(),Jx(148,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Sl(149,"code"),Jx(150,"bind"),sg(),Jx(151,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Sl(152,"code"),Jx(153,"beforeSend"),sg(),Jx(154,":"),sg(),Sl(155,"pre")(156,"code"),Jx(157,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),sg()()()(),Sl(158,"tr",15)(159,"td",16)(160,"div",17)(161,"span",18),Jx(162," p-breadcrumb"),Wl(163,"br"),sg()()(),Sl(164,"td",19)(165,"code",23),Jx(166,"PoBreadcrumb"),sg()(),Sl(167,"td",21),Jx(168,"-"),sg(),Sl(169,"td",22)(170,"em")(171,"strong"),Jx(172,"(opcional)"),sg()(),Sl(173,"p"),Jx(174,"Objeto com as propriedades do breadcrumb."),sg()()(),Sl(175,"tr",15)(176,"td",16)(177,"div",17)(178,"span",18),Jx(179," p-components-size"),Wl(180,"br"),sg()()(),Sl(181,"td",19)(182,"code",24),Jx(183,"string"),sg()(),Sl(184,"td",21)(185,"p")(186,"code"),Jx(187,"medium"),sg()()(),Sl(188,"td",22)(189,"em")(190,"strong"),Jx(191,"(opcional)"),sg()(),Sl(192,"p"),Jx(193,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(194,"ul")(195,"li")(196,"code"),Jx(197,"small"),sg(),Jx(198,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(199,"li")(200,"code"),Jx(201,"medium"),sg(),Jx(202,": aplica a medida medium de cada componente."),sg()(),Sl(203,"blockquote")(204,"p"),Jx(205,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(206,"code"),Jx(207,"medium"),sg(),Jx(208,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(209,"a",25),Jx(210,"po-theme"),sg(),Jx(211,"."),sg()()()(),Sl(212,"tr",15)(213,"td",16)(214,"div",26)(215,"span",27),Jx(216," (p-error)"),Wl(217,"br"),sg()()(),Sl(218,"td",19)(219,"code",28),Jx(220,"EventEmitter"),sg()(),Sl(221,"td",21),Jx(222,"-"),sg(),Sl(223,"td",22)(224,"em")(225,"strong"),Jx(226,"(opcional)"),sg()(),Sl(227,"p"),Jx(228,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),sg()()(),Sl(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),Jx(233," p-parameters"),Wl(234,"br"),sg()()(),Sl(235,"td",19)(236,"code",29),Jx(237,"Array<PoDynamicFormField>"),sg()(),Sl(238,"td",21),Jx(239,"-"),sg(),Sl(240,"td",22)(241,"p"),Jx(242,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),sg(),Sl(243,"p"),Jx(244,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),sg()()(),Sl(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),Jx(249," p-service-api"),Wl(250,"br"),sg()()(),Sl(251,"td",19)(252,"code",24),Jx(253,"string"),sg()(),Sl(254,"td",21),Jx(255,"-"),sg(),Sl(256,"td",22)(257,"p"),Jx(258,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),sg(),Sl(259,"h4"),Jx(260,"Processos"),sg(),Sl(261,"p"),Jx(262,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Sl(263,"code"),Jx(264,"GET"),sg(),Jx(265," para o endpoint "),Sl(266,"code"),Jx(267,"{service-api}/processes"),sg(),Jx(268,`, para buscar
essa lista de processos.`),sg(),Sl(269,"p"),Jx(270,"Este endpoint "),Sl(271,"code"),Jx(272,"{service-api}/processes"),sg(),Jx(273," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),sg(),Sl(274,"pre")(275,"code"),Jx(276,`GET {service-api}/processes
`),sg()(),Sl(277,"pre")(278,"code"),Jx(279,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),sg()(),Sl(280,"p"),Jx(281,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),sg(),Sl(282,"p"),Jx(283,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Sl(284,"code"),Jx(285,"search"),sg(),Jx(286,". Da seguinte forma:"),sg(),Sl(287,"pre")(288,"code"),Jx(289,`GET {service-api}/processes?search=relatorio
`),sg()(),Sl(290,"blockquote")(291,"p"),Jx(292,"Veja mais sobre pagina\xE7\xE3o e filtros no "),Sl(293,"a",6),Jx(294,"Guia de implementa\xE7\xE3o de APIs"),sg(),Jx(295,`.
Caso seja informada a propriedade `),Sl(296,"code"),Jx(297,"p-parameters"),sg(),Jx(298," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),sg()(),Sl(299,"p"),Jx(300,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Sl(301,"code"),Jx(302,"{service-api}/processes"),sg(),Jx(303,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Sl(304,"strong"),Jx(305,"identificador do processo - "),Sl(306,"code"),Jx(307,"processID"),sg()(),Jx(308," e ao salvar ser\xE1 enviado um "),Sl(309,"code"),Jx(310,"POST"),sg(),Jx(311," para o endpoint difinido "),Sl(312,"code"),Jx(313,"serviceApi"),sg(),Jx(314," conforme abaixo:"),sg(),Sl(315,"pre")(316,"code"),Jx(317,`POST {service-api}
`),sg()(),Sl(318,"p")(319,"em"),Jx(320,"Request payload"),sg(),Jx(321," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Sl(322,"code"),Jx(323,"PoJobScheduler"),sg(),Jx(324,":"),sg(),Sl(325,"pre")(326,"code"),Jx(327,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),sg()(),Sl(328,"p"),Jx(329,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),Sl(330,"code"),Jx(331,"GET"),sg(),Jx(332,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Sl(333,"a",30),Jx(334,"PoDynamicFormField"),sg(),Jx(335,". Por\xE9m, caso utilizar a propriedade "),Sl(336,"code"),Jx(337,"p-parameters"),sg(),Jx(338,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),sg(),Sl(339,"pre")(340,"code"),Jx(341,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),sg()(),Sl(342,"h4"),Jx(343,"Salvar e Atualizar"),sg(),Sl(344,"p"),Jx(345,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),Sl(346,"em"),Jx(347,"payload"),sg(),Jx(348,`.
Abaixo uma requisi\xE7\xE3o `),Sl(349,"code"),Jx(350,"POST"),sg(),Jx(351," disparada, onde as propriedades do "),Sl(352,"em"),Jx(353,"Job Scheduler"),sg(),Jx(354," foram preenchidas:"),sg(),Sl(355,"pre")(356,"code"),Jx(357,`POST {service-api}
`),sg()(),Sl(358,"p")(359,"em"),Jx(360,"Request payload"),sg(),Jx(361," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Sl(362,"code"),Jx(363,"PoJobScheduler"),sg(),Jx(364,":"),sg(),Sl(365,"pre")(366,"code"),Jx(367,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),sg()(),Sl(368,"p"),Jx(369,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),Sl(370,"code"),Jx(371,"id"),sg(),Jx(372,"."),sg(),Sl(373,"p"),Jx(374,"Exemplo de configura\xE7\xE3o de rota:"),sg(),Sl(375,"pre")(376,"code"),Jx(377,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),sg()(),Sl(378,"p"),Jx(379,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),sg(),Sl(380,"pre")(381,"code"),Jx(382,`GET {service-api}/{id}
`),sg()(),Sl(383,"p"),Jx(384,"Ao atualizar o agendamento, ser\xE1 disparado um "),Sl(385,"code"),Jx(386,"PUT"),sg(),Jx(387,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Sl(388,"code"),Jx(389,"PUT"),sg(),Jx(390," disparada, onde a propriedade "),Sl(391,"em"),Jx(392,"recurrent"),sg(),Jx(393," e "),Sl(394,"em"),Jx(395,"daily"),sg(),Jx(396," foram atualizadas:"),sg(),Sl(397,"pre")(398,"code"),Jx(399,`PUT {service-api}/{id}
`),sg()(),Sl(400,"p")(401,"em"),Jx(402,"Request payload"),sg(),Jx(403," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Sl(404,"code"),Jx(405,"PoJobScheduler"),sg(),Jx(406,":"),sg(),Sl(407,"pre")(408,"code"),Jx(409,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),sg()()()(),Sl(410,"tr",15)(411,"td",16)(412,"div",17)(413,"span",18),Jx(414," p-step-execution-last"),Wl(415,"br"),sg()()(),Sl(416,"td",19)(417,"code",31),Jx(418,"boolean"),sg()(),Sl(419,"td",21),Jx(420,"-"),sg(),Sl(421,"td",22)(422,"em")(423,"strong"),Jx(424,"(opcional)"),sg()(),Sl(425,"p"),Jx(426,"Define se o step "),Sl(427,"code"),Jx(428,"Agendamento"),sg(),Jx(429," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),sg(),Sl(430,"blockquote")(431,"p"),Jx(432,"Aplic\xE1vel apenas quando utilizado "),Sl(433,"code"),Jx(434,"PoJobSchedulerParametersTemplateDirective"),sg()()()()(),Sl(435,"tr",15)(436,"td",16)(437,"div",17)(438,"span",18),Jx(439," p-orientation"),Wl(440,"br"),sg()()(),Sl(441,"td",19)(442,"code",32),Jx(443,"PoStepperOrientation"),sg()(),Sl(444,"td",21),Jx(445,"-"),sg(),Sl(446,"td",22)(447,"em")(448,"strong"),Jx(449,"(opcional)"),sg()(),Sl(450,"p"),Jx(451,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Sl(452,"code"),Jx(453,"po-stepper"),sg(),Jx(454,"."),sg(),Sl(455,"blockquote")(456,"p"),Jx(457,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),sg()(),Sl(458,"blockquote")(459,"p"),Jx(460,"Veja os valores v\xE1lidos no "),Sl(461,"em"),Jx(462,"enum"),sg(),Sl(463,"a",33),Jx(464,"PoStepperOrientation"),sg(),Jx(465,"."),sg()()()(),Sl(466,"tr",15)(467,"td",16)(468,"div",26)(469,"span",27),Jx(470," (p-success)"),Wl(471,"br"),sg()()(),Sl(472,"td",19)(473,"code",28),Jx(474,"EventEmitter"),sg()(),Sl(475,"td",21),Jx(476,"-"),sg(),Sl(477,"td",22)(478,"em")(479,"strong"),Jx(480,"(opcional)"),sg()(),Sl(481,"p"),Jx(482,"Evento disparado ao concluir o processo de agendamento com sucesso."),sg()()(),Sl(483,"tr",15)(484,"td",16)(485,"div",17)(486,"span",18),Jx(487," p-title"),Wl(488,"br"),sg()()(),Sl(489,"td",19)(490,"code",24),Jx(491,"string"),sg()(),Sl(492,"td",21),Jx(493,"-"),sg(),Sl(494,"td",22)(495,"p"),Jx(496,"T\xEDtulo da p\xE1gina."),sg()()()(),Sl(497,"h3"),Jx(498,"Interfaces"),sg(),Sl(499,"h4",34)(500,"code",5),Jx(501,"PoJobScheduler"),sg()(),Sl(502,"div",2)(503,"p"),Jx(504,"Estrutura do "),Sl(505,"em"),Jx(506,"payload"),sg(),Jx(507," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),Sl(508,"em"),Jx(509,"Job Scheduler"),sg(),Jx(510,"."),sg()(),Sl(511,"h4",11),Jx(512,"Propriedades"),sg(),Sl(513,"table",12)(514,"tr",13)(515,"th",14),Jx(516,"Nome"),sg(),Sl(517,"th",14),Jx(518,"Tipo"),sg(),Sl(519,"th",14),Jx(520,"Descri\xE7\xE3o"),sg()(),Sl(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),Jx(525," daily"),Wl(526,"br"),sg()()(),Sl(527,"td",19)(528,"code",35),Jx(529,`{ hour: number; minute: number;
}`),sg()(),Sl(530,"td",22)(531,"em")(532,"strong"),Jx(533,"(opcional)"),sg()(),Sl(534,"p"),Jx(535,"Define uma repeti\xE7\xE3o di\xE1ria."),sg()()(),Sl(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),Jx(540," executionParameter"),Wl(541,"br"),sg()()(),Sl(542,"td",19)(543,"code",36),Jx(544,"object"),sg()(),Sl(545,"td",22)(546,"em")(547,"strong"),Jx(548,"(opcional)"),sg()(),Sl(549,"p"),Jx(550,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),sg()()(),Sl(551,"tr",15)(552,"td",16)(553,"div",17)(554,"span",18),Jx(555," firstExecution"),Wl(556,"br"),sg()()(),Sl(557,"td",19)(558,"code",24),Jx(559,"string"),sg()(),Sl(560,"td",22)(561,"em")(562,"strong"),Jx(563,"(opcional)"),sg()(),Sl(564,"p"),Jx(565,"Data da primeira execu\xE7\xE3o."),sg()()(),Sl(566,"tr",15)(567,"td",16)(568,"div",17)(569,"span",18),Jx(570," monthly"),Wl(571,"br"),sg()()(),Sl(572,"td",19)(573,"code",37),Jx(574,`{ day: number; hour: number; minute: number;
}`),sg()(),Sl(575,"td",22)(576,"em")(577,"strong"),Jx(578,"(opcional)"),sg()(),Sl(579,"p"),Jx(580,"Define uma repeti\xE7\xE3o mensal."),sg()()(),Sl(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),Jx(585," processID"),Wl(586,"br"),sg()()(),Sl(587,"td",19)(588,"code",24),Jx(589,"string"),sg()(),Sl(590,"td",22)(591,"p"),Jx(592,"Identificador do processo."),sg()()(),Sl(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),Jx(597," recurrent"),Wl(598,"br"),sg()()(),Sl(599,"td",19)(600,"code",31),Jx(601,"boolean"),sg()(),Sl(602,"td",22)(603,"em")(604,"strong"),Jx(605,"(opcional)"),sg()(),Sl(606,"p"),Jx(607,"Permite uma execu\xE7\xE3o recorrente."),sg()()(),Sl(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),Jx(612," weekly"),Wl(613,"br"),sg()()(),Sl(614,"td",19)(615,"code",38),Jx(616,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),sg()(),Sl(617,"td",22)(618,"em")(619,"strong"),Jx(620,"(opcional)"),sg()(),Sl(621,"p"),Jx(622,"Define uma repeti\xE7\xE3o semanal."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var X=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,m){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return m.changeTab("doc")}),Wl(3,"sample-po-page-job-scheduler-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return m.changeTab("web")}),Wl(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),sg()()()),o&2&&(tw("p-actions",m.actions),Vp(2),tw("p-active",m.activeTab==="doc"),Vp(2),tw("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[pNe,Gme,Qme,G,U,$],encapsulation:2})}return i})();var de=[{path:"",component:X}],Q=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[pL.forChild(de),pL]})}return i})();var Fe=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,Q]})}return i})();export{Fe as DocPoPageJobSchedulerModule};