import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,cn as Or,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,b1 as ume,b2 as _Ne,b6 as U3,b9 as ONe,co as Js,cp as Qs,a2 as WE,a3 as SNe,aB as gx,aA as Ex,aD as Jy,aE as e_}from'./main-OS7VVRJY.js';var N=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:false,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,m){o&1&&Hl(0,"po-page-job-scheduler",0),o&2&&ZE("p-breadcrumb",m.breadcrumb);},dependencies:[Or],encapsulation:2,changeDetection:1})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),G=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Job Scheduler - Background Process"),og(),Cl(4,"a",2),dt("click",function(){return m.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-job-scheduler-background-process"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+m.sampleCodeButtonIcon),Lp(),dg(" ",m.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ee,m.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,N],encapsulation:2})}return i})();function ne(i,_){if(i&1){let r=gx();Cl(0,"h1"),qx(1,"Etapa 1"),og(),Cl(2,"po-dynamic-form",4),dt("p-form",function(m){Jy(r);let c=Ex();return e_(c.getFormExample(m))}),og();}if(i&2){let r=Ex();Lp(2),ZE("p-fields",r.parametersForm);}}function ie(i,_){if(i&1){let r=gx();Cl(0,"po-table",5),dt("p-selected",function(m){Jy(r);let c=Ex();return e_(c.selectedItem(m))}),og();}if(i&2){let r=Ex();ZE("p-items",r.items)("p-selectable",true);}}function oe(i,_){if(i&1&&(Cl(0,"po-widget",6),Hl(1,"po-dynamic-view",7),og()),i&2){let r=Ex();Lp(),ZE("p-fields",r.fieldsSummary)("p-value",r.valueSummary);}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:true,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:true,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r;}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version};}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:false,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,m){o&1&&(Cl(0,"po-page-job-scheduler",0),WE(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),og()),o&2&&(ZE("p-step-execution-last",true),Lp(),ZE("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),Lp(),ZE("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue));},dependencies:[ume,_Ne,U3,ONe,Or,Js,Qs],encapsulation:2,changeDetection:1})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Job Scheduler - Directives"),og(),Cl(4,"a",2),dt("click",function(){return m.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-job-scheduler
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-job-scheduler-directives"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+m.sampleCodeButtonIcon),Lp(),dg(" ",m.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,re,m.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,W],encapsulation:2})}return i})();var $=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:false,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,m){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),og()(),Hl(4,"div",2),Cl(5,"h3",3),qx(6,"Componente"),og(),Cl(7,"h4",4)(8,"code",5),qx(9,"PoPageJobSchedulerComponent"),og()(),Cl(10,"div",2)(11,"p"),qx(12,"O "),Cl(13,"code"),qx(14,"po-page-job-scheduler"),og(),qx(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),og(),Cl(16,"p"),qx(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),og(),Cl(18,"p"),qx(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),Cl(20,"a",6),qx(21,"Guia de implementa\xE7\xE3o de APIs"),og(),qx(22,"."),og(),Cl(23,"h4"),qx(24,"Tokens customiz\xE1veis"),og(),Cl(25,"blockquote")(26,"p"),qx(27,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(28,"a",7),qx(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(30,"."),og()(),Cl(31,"table")(32,"thead")(33,"tr")(34,"th"),qx(35,"Propriedade"),og(),Cl(36,"th"),qx(37,"Descri\xE7\xE3o"),og(),Cl(38,"th"),qx(39,"Valor Padr\xE3o"),og()()(),Cl(40,"tbody")(41,"tr")(42,"td")(43,"strong"),qx(44,"Header"),og()(),Hl(45,"td")(46,"td"),og(),Cl(47,"tr")(48,"td")(49,"code"),qx(50,"--padding"),og()(),Cl(51,"td"),qx(52,"Espa\xE7amento do header"),og(),Cl(53,"td")(54,"code"),qx(55,"var(--spacing-xs) var(--spacing-md)"),og()()(),Cl(56,"tr")(57,"td")(58,"code"),qx(59,"--gap"),og()(),Cl(60,"td"),qx(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Cl(62,"td")(63,"code"),qx(64,"var(--spacing-md)"),og()()(),Cl(65,"tr")(66,"td")(67,"code"),qx(68,"--gap-actions"),og()(),Cl(69,"td"),qx(70,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Cl(71,"td")(72,"code"),qx(73,"var(--spacing-xs)"),og()()(),Cl(74,"tr")(75,"td")(76,"code"),qx(77,"--font-family"),og()(),Cl(78,"td"),qx(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Cl(80,"td")(81,"code"),qx(82,"var(--font-family-theme)"),og()()(),Cl(83,"tr")(84,"td")(85,"strong"),qx(86,"Content"),og()(),Hl(87,"td")(88,"td"),og(),Cl(89,"tr")(90,"td")(91,"code"),qx(92,"--padding-content"),og()(),Cl(93,"td"),qx(94,"Espa\xE7amento do conte\xFAdo"),og(),Cl(95,"td")(96,"code"),qx(97,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Cl(98,"div",8)(99,"h4",9),qx(100,"Seletor"),og(),Cl(101,"pre",10),qx(102,`<po-page-job-scheduler
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
`),og()(),Cl(103,"h4",11),qx(104,"Propriedades"),og(),Cl(105,"table",12)(106,"tr",13)(107,"th",14),qx(108,"Nome"),og(),Cl(109,"th",14),qx(110,"Tipo"),og(),Cl(111,"th",14),qx(112,"Padr\xE3o"),og(),Cl(113,"th",14),qx(114,"Descri\xE7\xE3o"),og()(),Cl(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),qx(119," p-before-send"),Hl(120,"br"),og()()(),Cl(121,"td",19)(122,"code",20),qx(123,"unknown"),og()(),Cl(124,"td",21),qx(125,"-"),og(),Cl(126,"td",22)(127,"em")(128,"strong"),qx(129,"(opcional)"),og()(),Cl(130,"p"),qx(131,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),og(),Cl(132,"blockquote")(133,"p"),qx(134,"Deve retornar um objeto do tipo "),Cl(135,"code"),qx(136,"PoPageJobScheduler"),og(),qx(137," para ser adicionado ao model do PoPageJobScheduler."),og()(),Cl(138,"blockquote")(139,"p"),qx(140,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),Cl(141,"code"),qx(142,"PoJobSchedulerInternal"),og(),qx(143,"."),og()(),Cl(144,"p"),qx(145,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Cl(146,"code"),qx(147,"PoPageJobScheduler"),og(),qx(148,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Cl(149,"code"),qx(150,"bind"),og(),qx(151,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Cl(152,"code"),qx(153,"beforeSend"),og(),qx(154,":"),og(),Cl(155,"pre")(156,"code"),qx(157,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),og()()()(),Cl(158,"tr",15)(159,"td",16)(160,"div",17)(161,"span",18),qx(162," p-breadcrumb"),Hl(163,"br"),og()()(),Cl(164,"td",19)(165,"code",23),qx(166,"PoBreadcrumb"),og()(),Cl(167,"td",21),qx(168,"-"),og(),Cl(169,"td",22)(170,"em")(171,"strong"),qx(172,"(opcional)"),og()(),Cl(173,"p"),qx(174,"Objeto com as propriedades do breadcrumb."),og()()(),Cl(175,"tr",15)(176,"td",16)(177,"div",17)(178,"span",18),qx(179," p-components-size"),Hl(180,"br"),og()()(),Cl(181,"td",19)(182,"code",24),qx(183,"string"),og()(),Cl(184,"td",21)(185,"p")(186,"code"),qx(187,"medium"),og()()(),Cl(188,"td",22)(189,"em")(190,"strong"),qx(191,"(opcional)"),og()(),Cl(192,"p"),qx(193,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(194,"ul")(195,"li")(196,"code"),qx(197,"small"),og(),qx(198,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(199,"li")(200,"code"),qx(201,"medium"),og(),qx(202,": aplica a medida medium de cada componente."),og()(),Cl(203,"blockquote")(204,"p"),qx(205,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(206,"code"),qx(207,"medium"),og(),qx(208,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(209,"a",25),qx(210,"po-theme"),og(),qx(211,"."),og()()()(),Cl(212,"tr",15)(213,"td",16)(214,"div",26)(215,"span",27),qx(216," (p-error)"),Hl(217,"br"),og()()(),Cl(218,"td",19)(219,"code",28),qx(220,"EventEmitter"),og()(),Cl(221,"td",21),qx(222,"-"),og(),Cl(223,"td",22)(224,"em")(225,"strong"),qx(226,"(opcional)"),og()(),Cl(227,"p"),qx(228,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),og()()(),Cl(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),qx(233," p-parameters"),Hl(234,"br"),og()()(),Cl(235,"td",19)(236,"code",29),qx(237,"Array<PoDynamicFormField>"),og()(),Cl(238,"td",21),qx(239,"-"),og(),Cl(240,"td",22)(241,"p"),qx(242,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),og(),Cl(243,"p"),qx(244,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),og()()(),Cl(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),qx(249," p-service-api"),Hl(250,"br"),og()()(),Cl(251,"td",19)(252,"code",24),qx(253,"string"),og()(),Cl(254,"td",21),qx(255,"-"),og(),Cl(256,"td",22)(257,"p"),qx(258,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),og(),Cl(259,"h4"),qx(260,"Processos"),og(),Cl(261,"p"),qx(262,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Cl(263,"code"),qx(264,"GET"),og(),qx(265," para o endpoint "),Cl(266,"code"),qx(267,"{service-api}/processes"),og(),qx(268,`, para buscar
essa lista de processos.`),og(),Cl(269,"p"),qx(270,"Este endpoint "),Cl(271,"code"),qx(272,"{service-api}/processes"),og(),qx(273," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),og(),Cl(274,"pre")(275,"code"),qx(276,`GET {service-api}/processes
`),og()(),Cl(277,"pre")(278,"code"),qx(279,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),og()(),Cl(280,"p"),qx(281,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),og(),Cl(282,"p"),qx(283,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Cl(284,"code"),qx(285,"search"),og(),qx(286,". Da seguinte forma:"),og(),Cl(287,"pre")(288,"code"),qx(289,`GET {service-api}/processes?search=relatorio
`),og()(),Cl(290,"blockquote")(291,"p"),qx(292,"Veja mais sobre pagina\xE7\xE3o e filtros no "),Cl(293,"a",6),qx(294,"Guia de implementa\xE7\xE3o de APIs"),og(),qx(295,`.
Caso seja informada a propriedade `),Cl(296,"code"),qx(297,"p-parameters"),og(),qx(298," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),og()(),Cl(299,"p"),qx(300,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Cl(301,"code"),qx(302,"{service-api}/processes"),og(),qx(303,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Cl(304,"strong"),qx(305,"identificador do processo - "),Cl(306,"code"),qx(307,"processID"),og()(),qx(308," e ao salvar ser\xE1 enviado um "),Cl(309,"code"),qx(310,"POST"),og(),qx(311," para o endpoint difinido "),Cl(312,"code"),qx(313,"serviceApi"),og(),qx(314," conforme abaixo:"),og(),Cl(315,"pre")(316,"code"),qx(317,`POST {service-api}
`),og()(),Cl(318,"p")(319,"em"),qx(320,"Request payload"),og(),qx(321," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Cl(322,"code"),qx(323,"PoJobScheduler"),og(),qx(324,":"),og(),Cl(325,"pre")(326,"code"),qx(327,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),og()(),Cl(328,"p"),qx(329,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),Cl(330,"code"),qx(331,"GET"),og(),qx(332,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Cl(333,"a",30),qx(334,"PoDynamicFormField"),og(),qx(335,". Por\xE9m, caso utilizar a propriedade "),Cl(336,"code"),qx(337,"p-parameters"),og(),qx(338,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),og(),Cl(339,"pre")(340,"code"),qx(341,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),og()(),Cl(342,"h4"),qx(343,"Salvar e Atualizar"),og(),Cl(344,"p"),qx(345,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),Cl(346,"em"),qx(347,"payload"),og(),qx(348,`.
Abaixo uma requisi\xE7\xE3o `),Cl(349,"code"),qx(350,"POST"),og(),qx(351," disparada, onde as propriedades do "),Cl(352,"em"),qx(353,"Job Scheduler"),og(),qx(354," foram preenchidas:"),og(),Cl(355,"pre")(356,"code"),qx(357,`POST {service-api}
`),og()(),Cl(358,"p")(359,"em"),qx(360,"Request payload"),og(),qx(361," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Cl(362,"code"),qx(363,"PoJobScheduler"),og(),qx(364,":"),og(),Cl(365,"pre")(366,"code"),qx(367,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),og()(),Cl(368,"p"),qx(369,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),Cl(370,"code"),qx(371,"id"),og(),qx(372,"."),og(),Cl(373,"p"),qx(374,"Exemplo de configura\xE7\xE3o de rota:"),og(),Cl(375,"pre")(376,"code"),qx(377,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),og()(),Cl(378,"p"),qx(379,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),og(),Cl(380,"pre")(381,"code"),qx(382,`GET {service-api}/{id}
`),og()(),Cl(383,"p"),qx(384,"Ao atualizar o agendamento, ser\xE1 disparado um "),Cl(385,"code"),qx(386,"PUT"),og(),qx(387,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Cl(388,"code"),qx(389,"PUT"),og(),qx(390," disparada, onde a propriedade "),Cl(391,"em"),qx(392,"recurrent"),og(),qx(393," e "),Cl(394,"em"),qx(395,"daily"),og(),qx(396," foram atualizadas:"),og(),Cl(397,"pre")(398,"code"),qx(399,`PUT {service-api}/{id}
`),og()(),Cl(400,"p")(401,"em"),qx(402,"Request payload"),og(),qx(403," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Cl(404,"code"),qx(405,"PoJobScheduler"),og(),qx(406,":"),og(),Cl(407,"pre")(408,"code"),qx(409,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),og()()()(),Cl(410,"tr",15)(411,"td",16)(412,"div",17)(413,"span",18),qx(414," p-step-execution-last"),Hl(415,"br"),og()()(),Cl(416,"td",19)(417,"code",31),qx(418,"boolean"),og()(),Cl(419,"td",21),qx(420,"-"),og(),Cl(421,"td",22)(422,"em")(423,"strong"),qx(424,"(opcional)"),og()(),Cl(425,"p"),qx(426,"Define se o step "),Cl(427,"code"),qx(428,"Agendamento"),og(),qx(429," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),og(),Cl(430,"blockquote")(431,"p"),qx(432,"Aplic\xE1vel apenas quando utilizado "),Cl(433,"code"),qx(434,"PoJobSchedulerParametersTemplateDirective"),og()()()()(),Cl(435,"tr",15)(436,"td",16)(437,"div",17)(438,"span",18),qx(439," p-orientation"),Hl(440,"br"),og()()(),Cl(441,"td",19)(442,"code",32),qx(443,"PoStepperOrientation"),og()(),Cl(444,"td",21),qx(445,"-"),og(),Cl(446,"td",22)(447,"em")(448,"strong"),qx(449,"(opcional)"),og()(),Cl(450,"p"),qx(451,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Cl(452,"code"),qx(453,"po-stepper"),og(),qx(454,"."),og(),Cl(455,"blockquote")(456,"p"),qx(457,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),og()(),Cl(458,"blockquote")(459,"p"),qx(460,"Veja os valores v\xE1lidos no "),Cl(461,"em"),qx(462,"enum"),og(),Cl(463,"a",33),qx(464,"PoStepperOrientation"),og(),qx(465,"."),og()()()(),Cl(466,"tr",15)(467,"td",16)(468,"div",26)(469,"span",27),qx(470," (p-success)"),Hl(471,"br"),og()()(),Cl(472,"td",19)(473,"code",28),qx(474,"EventEmitter"),og()(),Cl(475,"td",21),qx(476,"-"),og(),Cl(477,"td",22)(478,"em")(479,"strong"),qx(480,"(opcional)"),og()(),Cl(481,"p"),qx(482,"Evento disparado ao concluir o processo de agendamento com sucesso."),og()()(),Cl(483,"tr",15)(484,"td",16)(485,"div",17)(486,"span",18),qx(487," p-title"),Hl(488,"br"),og()()(),Cl(489,"td",19)(490,"code",24),qx(491,"string"),og()(),Cl(492,"td",21),qx(493,"-"),og(),Cl(494,"td",22)(495,"p"),qx(496,"T\xEDtulo da p\xE1gina."),og()()()(),Cl(497,"h3"),qx(498,"Interfaces"),og(),Cl(499,"h4",34)(500,"code",5),qx(501,"PoJobScheduler"),og()(),Cl(502,"div",2)(503,"p"),qx(504,"Estrutura do "),Cl(505,"em"),qx(506,"payload"),og(),qx(507," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),Cl(508,"em"),qx(509,"Job Scheduler"),og(),qx(510,"."),og()(),Cl(511,"h4",11),qx(512,"Propriedades"),og(),Cl(513,"table",12)(514,"tr",13)(515,"th",14),qx(516,"Nome"),og(),Cl(517,"th",14),qx(518,"Tipo"),og(),Cl(519,"th",14),qx(520,"Descri\xE7\xE3o"),og()(),Cl(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),qx(525," daily"),Hl(526,"br"),og()()(),Cl(527,"td",19)(528,"code",35),qx(529,`{ hour: number; minute: number;
}`),og()(),Cl(530,"td",22)(531,"em")(532,"strong"),qx(533,"(opcional)"),og()(),Cl(534,"p"),qx(535,"Define uma repeti\xE7\xE3o di\xE1ria."),og()()(),Cl(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),qx(540," executionParameter"),Hl(541,"br"),og()()(),Cl(542,"td",19)(543,"code",36),qx(544,"object"),og()(),Cl(545,"td",22)(546,"em")(547,"strong"),qx(548,"(opcional)"),og()(),Cl(549,"p"),qx(550,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),og()()(),Cl(551,"tr",15)(552,"td",16)(553,"div",17)(554,"span",18),qx(555," firstExecution"),Hl(556,"br"),og()()(),Cl(557,"td",19)(558,"code",24),qx(559,"string"),og()(),Cl(560,"td",22)(561,"em")(562,"strong"),qx(563,"(opcional)"),og()(),Cl(564,"p"),qx(565,"Data da primeira execu\xE7\xE3o."),og()()(),Cl(566,"tr",15)(567,"td",16)(568,"div",17)(569,"span",18),qx(570," monthly"),Hl(571,"br"),og()()(),Cl(572,"td",19)(573,"code",37),qx(574,`{ day: number; hour: number; minute: number;
}`),og()(),Cl(575,"td",22)(576,"em")(577,"strong"),qx(578,"(opcional)"),og()(),Cl(579,"p"),qx(580,"Define uma repeti\xE7\xE3o mensal."),og()()(),Cl(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),qx(585," processID"),Hl(586,"br"),og()()(),Cl(587,"td",19)(588,"code",24),qx(589,"string"),og()(),Cl(590,"td",22)(591,"p"),qx(592,"Identificador do processo."),og()()(),Cl(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),qx(597," recurrent"),Hl(598,"br"),og()()(),Cl(599,"td",19)(600,"code",31),qx(601,"boolean"),og()(),Cl(602,"td",22)(603,"em")(604,"strong"),qx(605,"(opcional)"),og()(),Cl(606,"p"),qx(607,"Permite uma execu\xE7\xE3o recorrente."),og()()(),Cl(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),qx(612," weekly"),Hl(613,"br"),og()()(),Cl(614,"td",19)(615,"code",38),qx(616,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),og()(),Cl(617,"td",22)(618,"em")(619,"strong"),qx(620,"(opcional)"),og()(),Cl(621,"p"),qx(622,"Define uma repeti\xE7\xE3o semanal."),og()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var X=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,m){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return m.changeTab("doc")}),Hl(3,"sample-po-page-job-scheduler-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return m.changeTab("web")}),Hl(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),og()()()),o&2&&(ZE("p-actions",m.actions),Lp(2),ZE("p-active",m.activeTab==="doc"),Lp(2),ZE("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[SNe,ofe,lfe,G,U,$],encapsulation:2})}return i})();var de=[{path:"",component:X}],Q=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[bL.forChild(de),bL]})}return i})();var Fe=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ca,Q]})}return i})();export{Fe as DocPoPageJobSchedulerModule};