import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,bM as Y1,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aM as lT,aN as sD,aR as ty,aU as IR,bN as kh,bO as Mh,a2 as GE,a3 as D3,al as lx,ax as gx,az as Qy,aA as Jy}from'./main-6SPFG3VI.js';var H=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:false,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,m){o&1&&Ul(0,"po-page-job-scheduler",0),o&2&&YE("p-breadcrumb",m.breadcrumb);},dependencies:[Y1],encapsulation:2,changeDetection:1})}return i})();var te=i=>({"docs-sample-code-tabs":i}),W=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Job Scheduler - Background Process"),ng(),wl(4,"a",2),ut("click",function(){return m.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-job-scheduler-background-process"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+m.sampleCodeButtonIcon),Pp(),cg(" ",m.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,te,m.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,H],encapsulation:2})}return i})();function ie(i,j){if(i&1){let r=lx();wl(0,"h1"),Ux(1,"Etapa 1"),ng(),wl(2,"po-dynamic-form",4),ut("p-form",function(m){Qy(r);let c=gx();return Jy(c.getFormExample(m))}),ng();}if(i&2){let r=gx();Pp(2),YE("p-fields",r.parametersForm);}}function oe(i,j){if(i&1){let r=lx();wl(0,"po-table",5),ut("p-selected",function(m){Qy(r);let c=gx();return Jy(c.selectedItem(m))}),ng();}if(i&2){let r=gx();YE("p-items",r.items)("p-selectable",true);}}function ae(i,j){if(i&1&&(wl(0,"po-widget",6),Ul(1,"po-dynamic-view",7),ng()),i&2){let r=gx();Pp(),YE("p-fields",r.fieldsSummary)("p-value",r.valueSummary);}}var U=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:true,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:true,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r;}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version};}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:false,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,m){o&1&&(wl(0,"po-page-job-scheduler",0),GE(1,ie,3,1,"ng-template",1)(2,oe,1,2,"ng-template",2)(3,ae,2,2,"ng-template",3),ng()),o&2&&(YE("p-step-execution-last",true),Pp(),YE("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),Pp(),YE("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue));},dependencies:[lT,sD,ty,IR,Y1,kh,Mh],encapsulation:2,changeDetection:1})}return i})();var me=i=>({"docs-sample-code-tabs":i}),$=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Job Scheduler - Directives"),ng(),wl(4,"a",2),ut("click",function(){return m.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-job-scheduler
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-job-scheduler-directives"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+m.sampleCodeButtonIcon),Pp(),cg(" ",m.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,me,m.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,U],encapsulation:2})}return i})();var X=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:false,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,m){o&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),ng()(),Ul(4,"div",2),wl(5,"h3",3),Ux(6,"Componente"),ng(),wl(7,"h4",4)(8,"code",5),Ux(9,"PoPageJobSchedulerComponent"),ng()(),wl(10,"div",2)(11,"p"),Ux(12,"O "),wl(13,"code"),Ux(14,"po-page-job-scheduler"),ng(),Ux(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),ng(),wl(16,"p"),Ux(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),ng(),wl(18,"p"),Ux(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),wl(20,"a",6),Ux(21,"Guia de implementa\xE7\xE3o de APIs"),ng(),Ux(22,"."),ng(),wl(23,"h4"),Ux(24,"Tokens customiz\xE1veis"),ng(),wl(25,"blockquote")(26,"p"),Ux(27,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(28,"a",7),Ux(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(30,"."),ng()(),wl(31,"table")(32,"thead")(33,"tr")(34,"th"),Ux(35,"Propriedade"),ng(),wl(36,"th"),Ux(37,"Descri\xE7\xE3o"),ng(),wl(38,"th"),Ux(39,"Valor Padr\xE3o"),ng()()(),wl(40,"tbody")(41,"tr")(42,"td")(43,"strong"),Ux(44,"Header"),ng()(),Ul(45,"td")(46,"td"),ng(),wl(47,"tr")(48,"td")(49,"code"),Ux(50,"--padding"),ng()(),wl(51,"td"),Ux(52,"Espa\xE7amento do header"),ng(),wl(53,"td")(54,"code"),Ux(55,"var(--spacing-xs) var(--spacing-md)"),ng()()(),wl(56,"tr")(57,"td")(58,"code"),Ux(59,"--gap"),ng()(),wl(60,"td"),Ux(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),ng(),wl(62,"td")(63,"code"),Ux(64,"var(--spacing-md)"),ng()()(),wl(65,"tr")(66,"td")(67,"code"),Ux(68,"--gap-actions"),ng()(),wl(69,"td"),Ux(70,"Espa\xE7amento entre as a\xE7\xF5es"),ng(),wl(71,"td")(72,"code"),Ux(73,"var(--spacing-xs)"),ng()()(),wl(74,"tr")(75,"td")(76,"code"),Ux(77,"--font-family"),ng()(),wl(78,"td"),Ux(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),ng(),wl(80,"td")(81,"code"),Ux(82,"var(--font-family-theme)"),ng()()(),wl(83,"tr")(84,"td")(85,"strong"),Ux(86,"Content"),ng()(),Ul(87,"td")(88,"td"),ng(),wl(89,"tr")(90,"td")(91,"code"),Ux(92,"--padding-content"),ng()(),wl(93,"td"),Ux(94,"Espa\xE7amento do conte\xFAdo"),ng(),wl(95,"td")(96,"code"),Ux(97,"var(--spacing-xs) var(--spacing-sm)"),ng()()()()()(),wl(98,"div",8)(99,"h4",9),Ux(100,"Seletor"),ng(),wl(101,"pre",10),Ux(102,`<po-page-job-scheduler
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
`),ng()(),wl(103,"h4",11),Ux(104,"Propriedades"),ng(),wl(105,"table",12)(106,"tr",13)(107,"th",14),Ux(108,"Nome"),ng(),wl(109,"th",14),Ux(110,"Tipo"),ng(),wl(111,"th",14),Ux(112,"Padr\xE3o"),ng(),wl(113,"th",14),Ux(114,"Descri\xE7\xE3o"),ng()(),wl(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),Ux(119," p-before-send"),Ul(120,"br"),ng()()(),wl(121,"td",19)(122,"code",20),Ux(123,"unknown"),ng()(),wl(124,"td",21),Ux(125,"-"),ng(),wl(126,"td",22)(127,"em")(128,"strong"),Ux(129,"(opcional)"),ng()(),wl(130,"p"),Ux(131,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),ng(),wl(132,"blockquote")(133,"p"),Ux(134,"Deve retornar um objeto do tipo "),wl(135,"code"),Ux(136,"PoPageJobScheduler"),ng(),Ux(137," para ser adicionado ao model do PoPageJobScheduler."),ng()(),wl(138,"blockquote")(139,"p"),Ux(140,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),wl(141,"code"),Ux(142,"PoJobSchedulerInternal"),ng(),Ux(143,"."),ng()(),wl(144,"p"),Ux(145,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),wl(146,"code"),Ux(147,"PoPageJobScheduler"),ng(),Ux(148,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),wl(149,"code"),Ux(150,"bind"),ng(),Ux(151,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),wl(152,"code"),Ux(153,"beforeSend"),ng(),Ux(154,":"),ng(),wl(155,"pre")(156,"code"),Ux(157,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),ng()()()(),wl(158,"tr",15)(159,"td",16)(160,"div",17)(161,"span",18),Ux(162," p-breadcrumb"),Ul(163,"br"),ng()()(),wl(164,"td",19)(165,"code",23),Ux(166,"PoBreadcrumb"),ng()(),wl(167,"td",21),Ux(168,"-"),ng(),wl(169,"td",22)(170,"em")(171,"strong"),Ux(172,"(opcional)"),ng()(),wl(173,"p"),Ux(174,"Objeto com as propriedades do breadcrumb."),ng()()(),wl(175,"tr",15)(176,"td",16)(177,"div",17)(178,"span",18),Ux(179," p-components-size"),Ul(180,"br"),ng()()(),wl(181,"td",19)(182,"code",24),Ux(183,"string"),ng()(),wl(184,"td",21)(185,"p")(186,"code"),Ux(187,"medium"),ng()()(),wl(188,"td",22)(189,"em")(190,"strong"),Ux(191,"(opcional)"),ng()(),wl(192,"p"),Ux(193,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(194,"ul")(195,"li")(196,"code"),Ux(197,"small"),ng(),Ux(198,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(199,"li")(200,"code"),Ux(201,"medium"),ng(),Ux(202,": aplica a medida medium de cada componente."),ng()(),wl(203,"blockquote")(204,"p"),Ux(205,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(206,"code"),Ux(207,"medium"),ng(),Ux(208,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(209,"a",25),Ux(210,"po-theme"),ng(),Ux(211,"."),ng()()()(),wl(212,"tr",15)(213,"td",16)(214,"div",26)(215,"span",27),Ux(216," (p-error)"),Ul(217,"br"),ng()()(),wl(218,"td",19)(219,"code",28),Ux(220,"EventEmitter"),ng()(),wl(221,"td",21),Ux(222,"-"),ng(),wl(223,"td",22)(224,"em")(225,"strong"),Ux(226,"(opcional)"),ng()(),wl(227,"p"),Ux(228,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),ng()()(),wl(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),Ux(233," p-parameters"),Ul(234,"br"),ng()()(),wl(235,"td",19)(236,"code",29),Ux(237,"Array<PoDynamicFormField>"),ng()(),wl(238,"td",21),Ux(239,"-"),ng(),wl(240,"td",22)(241,"p"),Ux(242,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),ng(),wl(243,"p"),Ux(244,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),ng()()(),wl(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),Ux(249," p-service-api"),Ul(250,"br"),ng()()(),wl(251,"td",19)(252,"code",24),Ux(253,"string"),ng()(),wl(254,"td",21),Ux(255,"-"),ng(),wl(256,"td",22)(257,"p"),Ux(258,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),ng(),wl(259,"h4"),Ux(260,"Processos"),ng(),wl(261,"p"),Ux(262,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),wl(263,"code"),Ux(264,"GET"),ng(),Ux(265," para o endpoint "),wl(266,"code"),Ux(267,"{service-api}/processes"),ng(),Ux(268,`, para buscar
essa lista de processos.`),ng(),wl(269,"p"),Ux(270,"Este endpoint "),wl(271,"code"),Ux(272,"{service-api}/processes"),ng(),Ux(273," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),ng(),wl(274,"pre")(275,"code"),Ux(276,`GET {service-api}/processes
`),ng()(),wl(277,"pre")(278,"code"),Ux(279,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),ng()(),wl(280,"p"),Ux(281,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),ng(),wl(282,"p"),Ux(283,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),wl(284,"code"),Ux(285,"search"),ng(),Ux(286,". Da seguinte forma:"),ng(),wl(287,"pre")(288,"code"),Ux(289,`GET {service-api}/processes?search=relatorio
`),ng()(),wl(290,"blockquote")(291,"p"),Ux(292,"Veja mais sobre pagina\xE7\xE3o e filtros no "),wl(293,"a",6),Ux(294,"Guia de implementa\xE7\xE3o de APIs"),ng(),Ux(295,`.
Caso seja informada a propriedade `),wl(296,"code"),Ux(297,"p-parameters"),ng(),Ux(298," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),ng()(),wl(299,"p"),Ux(300,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),wl(301,"code"),Ux(302,"{service-api}/processes"),ng(),Ux(303,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),wl(304,"strong"),Ux(305,"identificador do processo - "),wl(306,"code"),Ux(307,"processID"),ng()(),Ux(308," e ao salvar ser\xE1 enviado um "),wl(309,"code"),Ux(310,"POST"),ng(),Ux(311," para o endpoint difinido "),wl(312,"code"),Ux(313,"serviceApi"),ng(),Ux(314," conforme abaixo:"),ng(),wl(315,"pre")(316,"code"),Ux(317,`POST {service-api}
`),ng()(),wl(318,"p")(319,"em"),Ux(320,"Request payload"),ng(),Ux(321," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),wl(322,"code"),Ux(323,"PoJobScheduler"),ng(),Ux(324,":"),ng(),wl(325,"pre")(326,"code"),Ux(327,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),ng()(),wl(328,"p"),Ux(329,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),wl(330,"code"),Ux(331,"GET"),ng(),Ux(332,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),wl(333,"a",30),Ux(334,"PoDynamicFormField"),ng(),Ux(335,". Por\xE9m, caso utilizar a propriedade "),wl(336,"code"),Ux(337,"p-parameters"),ng(),Ux(338,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),ng(),wl(339,"pre")(340,"code"),Ux(341,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),ng()(),wl(342,"h4"),Ux(343,"Salvar e Atualizar"),ng(),wl(344,"p"),Ux(345,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),wl(346,"em"),Ux(347,"payload"),ng(),Ux(348,`.
Abaixo uma requisi\xE7\xE3o `),wl(349,"code"),Ux(350,"POST"),ng(),Ux(351," disparada, onde as propriedades do "),wl(352,"em"),Ux(353,"Job Scheduler"),ng(),Ux(354," foram preenchidas:"),ng(),wl(355,"pre")(356,"code"),Ux(357,`POST {service-api}
`),ng()(),wl(358,"p")(359,"em"),Ux(360,"Request payload"),ng(),Ux(361," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),wl(362,"code"),Ux(363,"PoJobScheduler"),ng(),Ux(364,":"),ng(),wl(365,"pre")(366,"code"),Ux(367,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),ng()(),wl(368,"p"),Ux(369,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),wl(370,"code"),Ux(371,"id"),ng(),Ux(372,"."),ng(),wl(373,"p"),Ux(374,"Exemplo de configura\xE7\xE3o de rota:"),ng(),wl(375,"pre")(376,"code"),Ux(377,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),ng()(),wl(378,"p"),Ux(379,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),ng(),wl(380,"pre")(381,"code"),Ux(382,`GET {service-api}/{id}
`),ng()(),wl(383,"p"),Ux(384,"Ao atualizar o agendamento, ser\xE1 disparado um "),wl(385,"code"),Ux(386,"PUT"),ng(),Ux(387,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),wl(388,"code"),Ux(389,"PUT"),ng(),Ux(390," disparada, onde a propriedade "),wl(391,"em"),Ux(392,"recurrent"),ng(),Ux(393," e "),wl(394,"em"),Ux(395,"daily"),ng(),Ux(396," foram atualizadas:"),ng(),wl(397,"pre")(398,"code"),Ux(399,`PUT {service-api}/{id}
`),ng()(),wl(400,"p")(401,"em"),Ux(402,"Request payload"),ng(),Ux(403," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),wl(404,"code"),Ux(405,"PoJobScheduler"),ng(),Ux(406,":"),ng(),wl(407,"pre")(408,"code"),Ux(409,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),ng()()()(),wl(410,"tr",15)(411,"td",16)(412,"div",17)(413,"span",18),Ux(414," p-step-execution-last"),Ul(415,"br"),ng()()(),wl(416,"td",19)(417,"code",31),Ux(418,"boolean"),ng()(),wl(419,"td",21),Ux(420,"-"),ng(),wl(421,"td",22)(422,"em")(423,"strong"),Ux(424,"(opcional)"),ng()(),wl(425,"p"),Ux(426,"Define se o step "),wl(427,"code"),Ux(428,"Agendamento"),ng(),Ux(429," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),ng(),wl(430,"blockquote")(431,"p"),Ux(432,"Aplic\xE1vel apenas quando utilizado "),wl(433,"code"),Ux(434,"PoJobSchedulerParametersTemplateDirective"),ng()()()()(),wl(435,"tr",15)(436,"td",16)(437,"div",17)(438,"span",18),Ux(439," p-orientation"),Ul(440,"br"),ng()()(),wl(441,"td",19)(442,"code",32),Ux(443,"PoStepperOrientation"),ng()(),wl(444,"td",21),Ux(445,"-"),ng(),wl(446,"td",22)(447,"em")(448,"strong"),Ux(449,"(opcional)"),ng()(),wl(450,"p"),Ux(451,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),wl(452,"code"),Ux(453,"po-stepper"),ng(),Ux(454,"."),ng(),wl(455,"blockquote")(456,"p"),Ux(457,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),ng()(),wl(458,"blockquote")(459,"p"),Ux(460,"Veja os valores v\xE1lidos no "),wl(461,"em"),Ux(462,"enum"),ng(),wl(463,"a",33),Ux(464,"PoStepperOrientation"),ng(),Ux(465,"."),ng()()()(),wl(466,"tr",15)(467,"td",16)(468,"div",26)(469,"span",27),Ux(470," (p-success)"),Ul(471,"br"),ng()()(),wl(472,"td",19)(473,"code",28),Ux(474,"EventEmitter"),ng()(),wl(475,"td",21),Ux(476,"-"),ng(),wl(477,"td",22)(478,"em")(479,"strong"),Ux(480,"(opcional)"),ng()(),wl(481,"p"),Ux(482,"Evento disparado ao concluir o processo de agendamento com sucesso."),ng()()(),wl(483,"tr",15)(484,"td",16)(485,"div",17)(486,"span",18),Ux(487," p-title"),Ul(488,"br"),ng()()(),wl(489,"td",19)(490,"code",24),Ux(491,"string"),ng()(),wl(492,"td",21),Ux(493,"-"),ng(),wl(494,"td",22)(495,"p"),Ux(496,"T\xEDtulo da p\xE1gina."),ng()()()(),wl(497,"h3"),Ux(498,"Interfaces"),ng(),wl(499,"h4",34)(500,"code",5),Ux(501,"PoJobScheduler"),ng()(),wl(502,"div",2)(503,"p"),Ux(504,"Estrutura do "),wl(505,"em"),Ux(506,"payload"),ng(),Ux(507," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),wl(508,"em"),Ux(509,"Job Scheduler"),ng(),Ux(510,"."),ng()(),wl(511,"h4",11),Ux(512,"Propriedades"),ng(),wl(513,"table",12)(514,"tr",13)(515,"th",14),Ux(516,"Nome"),ng(),wl(517,"th",14),Ux(518,"Tipo"),ng(),wl(519,"th",14),Ux(520,"Descri\xE7\xE3o"),ng()(),wl(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),Ux(525," daily"),Ul(526,"br"),ng()()(),wl(527,"td",19)(528,"code",35),Ux(529,`{ hour: number; minute: number;
}`),ng()(),wl(530,"td",22)(531,"em")(532,"strong"),Ux(533,"(opcional)"),ng()(),wl(534,"p"),Ux(535,"Define uma repeti\xE7\xE3o di\xE1ria."),ng()()(),wl(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),Ux(540," executionParameter"),Ul(541,"br"),ng()()(),wl(542,"td",19)(543,"code",36),Ux(544,"object"),ng()(),wl(545,"td",22)(546,"em")(547,"strong"),Ux(548,"(opcional)"),ng()(),wl(549,"p"),Ux(550,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),ng()()(),wl(551,"tr",15)(552,"td",16)(553,"div",17)(554,"span",18),Ux(555," firstExecution"),Ul(556,"br"),ng()()(),wl(557,"td",19)(558,"code",24),Ux(559,"string"),ng()(),wl(560,"td",22)(561,"em")(562,"strong"),Ux(563,"(opcional)"),ng()(),wl(564,"p"),Ux(565,"Data da primeira execu\xE7\xE3o."),ng()()(),wl(566,"tr",15)(567,"td",16)(568,"div",17)(569,"span",18),Ux(570," monthly"),Ul(571,"br"),ng()()(),wl(572,"td",19)(573,"code",37),Ux(574,`{ day: number; hour: number; minute: number;
}`),ng()(),wl(575,"td",22)(576,"em")(577,"strong"),Ux(578,"(opcional)"),ng()(),wl(579,"p"),Ux(580,"Define uma repeti\xE7\xE3o mensal."),ng()()(),wl(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),Ux(585," processID"),Ul(586,"br"),ng()()(),wl(587,"td",19)(588,"code",24),Ux(589,"string"),ng()(),wl(590,"td",22)(591,"p"),Ux(592,"Identificador do processo."),ng()()(),wl(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),Ux(597," recurrent"),Ul(598,"br"),ng()()(),wl(599,"td",19)(600,"code",31),Ux(601,"boolean"),ng()(),wl(602,"td",22)(603,"em")(604,"strong"),Ux(605,"(opcional)"),ng()(),wl(606,"p"),Ux(607,"Permite uma execu\xE7\xE3o recorrente."),ng()()(),wl(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),Ux(612," weekly"),Ul(613,"br"),ng()()(),wl(614,"td",19)(615,"code",38),Ux(616,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),ng()(),wl(617,"td",22)(618,"em")(619,"strong"),Ux(620,"(opcional)"),ng()(),wl(621,"p"),Ux(622,"Define uma repeti\xE7\xE3o semanal."),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var Q=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,m){o&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return m.changeTab("doc")}),Ul(3,"sample-po-page-job-scheduler-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return m.changeTab("web")}),Ul(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),ng()()()),o&2&&(YE("p-actions",m.actions),Pp(2),YE("p-active",m.activeTab==="doc"),Pp(2),YE("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[D3,Vd,Rd,W,$,X],encapsulation:2})}return i})();var se=[{path:"",component:Q}],K=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[vL.forChild(se),vL]})}return i})();var ze=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[u5,K]})}return i})();export{ze as DocPoPageJobSchedulerModule};