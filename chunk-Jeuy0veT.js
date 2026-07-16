import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,cj as Fa,L as Gl,O as nw,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,b2 as Jhe,b3 as nNe,b7 as E3,ba as _Ne,ck as Ws,cl as js,a2 as JE,a3 as lNe,aB as Sx,aA as Nx,aD as Ky,aE as Xy}from'./main-56B5DD5U.js';var N=(()=>{class i{breadcrumb={items:[{label:"Home",link:"/"},{label:"Pipelines",link:"/"},{label:"Background Process Scheduler"}]};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process"]],standalone:false,decls:1,vars:1,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-title","Background Process Scheduler",3,"p-breadcrumb"]],template:function(o,m){o&1&&Gl(0,"po-page-job-scheduler",0),o&2&&nw("p-breadcrumb",m.breadcrumb);},dependencies:[Fa],encapsulation:2,changeDetection:1})}return i})();var ee=i=>({"docs-sample-code-tabs":i}),G=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-background-process-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Page Job Scheduler - Background Process"),sg(),Tl(4,"a",2),ht("click",function(){return m.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-job-scheduler-background-process"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+m.sampleCodeButtonIcon),Vp(),fg(" ",m.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ee,m.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,N],encapsulation:2,changeDetection:1})}return i})();function ne(i,_){if(i&1){let r=Sx();Tl(0,"h1"),iN(1,"Etapa 1"),sg(),Tl(2,"po-dynamic-form",4),ht("p-form",function(m){Ky(r);let c=Nx();return Xy(c.getFormExample(m))}),sg();}if(i&2){let r=Nx();Vp(2),nw("p-fields",r.parametersForm);}}function ie(i,_){if(i&1){let r=Sx();Tl(0,"po-table",5),ht("p-selected",function(m){Ky(r);let c=Nx();return Xy(c.selectedItem(m))}),sg();}if(i&2){let r=Nx();nw("p-items",r.items)("p-selectable",true);}}function oe(i,_){if(i&1&&(Tl(0,"po-widget",6),Gl(1,"po-dynamic-view",7),sg()),i&2){let r=Nx();Vp(),nw("p-fields",r.fieldsSummary)("p-value",r.valueSummary);}}var W=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:"version",label:"Vers\xE3o",required:true,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:"version",label:"Vers\xE3o",gridColumns:6,gridSmColumns:12},{property:"selectedValue",label:"Valor selecionado na tabela",isArrayOrObject:true,fieldLabel:"customer",gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:"Angeloni",driver:"Jos\xE9 Oliveira"},{code:1355,customer:"Giassi",driver:"Francisco Pereira"},{code:1496,customer:"Walmart",driver:"Pedro da Costa"},{code:1712,customer:"Carrefour",driver:"Jo\xE3o da Silva"}];getFormExample(r){this.dynamicForm=r;}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version};}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives"]],standalone:false,decls:4,vars:5,consts:[["p-service-api","https://po-sample-api.onrender.com/v1/scheduler","p-orientation","horizontal",3,"p-step-execution-last"],["p-job-scheduler-parameters-template","","p-title","1",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-parameters-template","",3,"p-disable-advance","p-execution-parameter"],["p-job-scheduler-summary-template",""],[3,"p-form","p-fields"],[3,"p-selected","p-items","p-selectable"],["p-title","Par\xE2metros"],[3,"p-fields","p-value"]],template:function(o,m){o&1&&(Tl(0,"po-page-job-scheduler",0),JE(1,ne,3,1,"ng-template",1)(2,ie,1,2,"ng-template",2)(3,oe,2,2,"ng-template",3),sg()),o&2&&(nw("p-step-execution-last",true),Vp(),nw("p-disable-advance",m.dynamicForm==null?null:m.dynamicForm.form.invalid)("p-execution-parameter",m.dynamicForm==null?null:m.dynamicForm.form.value),Vp(),nw("p-disable-advance",!m.selectedValue.select.length)("p-execution-parameter",m.selectedValue));},dependencies:[Jhe,nNe,E3,_Ne,Fa,Ws,js],encapsulation:2,changeDetection:1})}return i})();var re=i=>({"docs-sample-code-tabs":i}),U=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-directives-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,m){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Page Job Scheduler - Directives"),sg(),Tl(4,"a",2),ht("click",function(){return m.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-job-scheduler
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-job-scheduler-directives"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+m.sampleCodeButtonIcon),Vp(),fg(" ",m.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,re,m.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,W],encapsulation:2,changeDetection:1})}return i})();var $=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-page-job-scheduler-doc"]],standalone:false,decls:623,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],["href","/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoStepperOrientation"],["href","documentation/po-stepper#stepperOrientation"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","{","day:","number;","hour:","number;","minute:","number;","}"],["pan","",1,"docs-api-property-type","{","daysOfWeek:","Array<string>;","hour:","number;","minute:","number;","}"]],template:function(o,m){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),iN(6,"Componente"),sg(),Tl(7,"h4",4)(8,"code",5),iN(9,"PoPageJobSchedulerComponent"),sg()(),Tl(10,"div",2)(11,"p"),iN(12,"O "),Tl(13,"code"),iN(14,"po-page-job-scheduler"),sg(),iN(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),sg(),Tl(16,"p"),iN(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),sg(),Tl(18,"p"),iN(19,"Veja mais sobre os padr\xF5es utilizados nas requisi\xE7\xF5es no "),Tl(20,"a",6),iN(21,"Guia de implementa\xE7\xE3o de APIs"),sg(),iN(22,"."),sg(),Tl(23,"h4"),iN(24,"Tokens customiz\xE1veis"),sg(),Tl(25,"blockquote")(26,"p"),iN(27,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(28,"a",7),iN(29,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(30,"."),sg()(),Tl(31,"table")(32,"thead")(33,"tr")(34,"th"),iN(35,"Propriedade"),sg(),Tl(36,"th"),iN(37,"Descri\xE7\xE3o"),sg(),Tl(38,"th"),iN(39,"Valor Padr\xE3o"),sg()()(),Tl(40,"tbody")(41,"tr")(42,"td")(43,"strong"),iN(44,"Header"),sg()(),Gl(45,"td")(46,"td"),sg(),Tl(47,"tr")(48,"td")(49,"code"),iN(50,"--padding"),sg()(),Tl(51,"td"),iN(52,"Espa\xE7amento do header"),sg(),Tl(53,"td")(54,"code"),iN(55,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Tl(56,"tr")(57,"td")(58,"code"),iN(59,"--gap"),sg()(),Tl(60,"td"),iN(61,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Tl(62,"td")(63,"code"),iN(64,"var(--spacing-md)"),sg()()(),Tl(65,"tr")(66,"td")(67,"code"),iN(68,"--gap-actions"),sg()(),Tl(69,"td"),iN(70,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Tl(71,"td")(72,"code"),iN(73,"var(--spacing-xs)"),sg()()(),Tl(74,"tr")(75,"td")(76,"code"),iN(77,"--font-family"),sg()(),Tl(78,"td"),iN(79,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Tl(80,"td")(81,"code"),iN(82,"var(--font-family-theme)"),sg()()(),Tl(83,"tr")(84,"td")(85,"strong"),iN(86,"Content"),sg()(),Gl(87,"td")(88,"td"),sg(),Tl(89,"tr")(90,"td")(91,"code"),iN(92,"--padding-content"),sg()(),Tl(93,"td"),iN(94,"Espa\xE7amento do conte\xFAdo"),sg(),Tl(95,"td")(96,"code"),iN(97,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Tl(98,"div",8)(99,"h4",9),iN(100,"Seletor"),sg(),Tl(101,"pre",10),iN(102,`<po-page-job-scheduler
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
`),sg()(),Tl(103,"h4",11),iN(104,"Propriedades"),sg(),Tl(105,"table",12)(106,"tr",13)(107,"th",14),iN(108,"Nome"),sg(),Tl(109,"th",14),iN(110,"Tipo"),sg(),Tl(111,"th",14),iN(112,"Padr\xE3o"),sg(),Tl(113,"th",14),iN(114,"Descri\xE7\xE3o"),sg()(),Tl(115,"tr",15)(116,"td",16)(117,"div",17)(118,"span",18),iN(119," p-before-send"),Gl(120,"br"),sg()()(),Tl(121,"td",19)(122,"code",20),iN(123,"unknown"),sg()(),Tl(124,"td",21),iN(125,"-"),sg(),Tl(126,"td",22)(127,"em")(128,"strong"),iN(129,"(opcional)"),sg()(),Tl(130,"p"),iN(131,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),sg(),Tl(132,"blockquote")(133,"p"),iN(134,"Deve retornar um objeto do tipo "),Tl(135,"code"),iN(136,"PoPageJobScheduler"),sg(),iN(137," para ser adicionado ao model do PoPageJobScheduler."),sg()(),Tl(138,"blockquote")(139,"p"),iN(140,"Ao ser disparada, a mesma receber\xE1 por par\xE2metro o model do PoPageJobScheduler de interface "),Tl(141,"code"),iN(142,"PoJobSchedulerInternal"),sg(),iN(143,"."),sg()(),Tl(144,"p"),iN(145,"O contexto da fun\xE7\xE3o que ser\xE1 chamada, ser\xE1 o mesmo que o do "),Tl(146,"code"),iN(147,"PoPageJobScheduler"),sg(),iN(148,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Tl(149,"code"),iN(150,"bind"),sg(),iN(151,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Tl(152,"code"),iN(153,"beforeSend"),sg(),iN(154,":"),sg(),Tl(155,"pre")(156,"code"),iN(157,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),sg()()()(),Tl(158,"tr",15)(159,"td",16)(160,"div",17)(161,"span",18),iN(162," p-breadcrumb"),Gl(163,"br"),sg()()(),Tl(164,"td",19)(165,"code",23),iN(166,"PoBreadcrumb"),sg()(),Tl(167,"td",21),iN(168,"-"),sg(),Tl(169,"td",22)(170,"em")(171,"strong"),iN(172,"(opcional)"),sg()(),Tl(173,"p"),iN(174,"Objeto com as propriedades do breadcrumb."),sg()()(),Tl(175,"tr",15)(176,"td",16)(177,"div",17)(178,"span",18),iN(179," p-components-size"),Gl(180,"br"),sg()()(),Tl(181,"td",19)(182,"code",24),iN(183,"string"),sg()(),Tl(184,"td",21)(185,"p")(186,"code"),iN(187,"medium"),sg()()(),Tl(188,"td",22)(189,"em")(190,"strong"),iN(191,"(opcional)"),sg()(),Tl(192,"p"),iN(193,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(194,"ul")(195,"li")(196,"code"),iN(197,"small"),sg(),iN(198,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(199,"li")(200,"code"),iN(201,"medium"),sg(),iN(202,": aplica a medida medium de cada componente."),sg()(),Tl(203,"blockquote")(204,"p"),iN(205,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(206,"code"),iN(207,"medium"),sg(),iN(208,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(209,"a",25),iN(210,"po-theme"),sg(),iN(211,"."),sg()()()(),Tl(212,"tr",15)(213,"td",16)(214,"div",26)(215,"span",27),iN(216," (p-error)"),Gl(217,"br"),sg()()(),Tl(218,"td",19)(219,"code",28),iN(220,"EventEmitter"),sg()(),Tl(221,"td",21),iN(222,"-"),sg(),Tl(223,"td",22)(224,"em")(225,"strong"),iN(226,"(opcional)"),sg()(),Tl(227,"p"),iN(228,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),sg()()(),Tl(229,"tr",15)(230,"td",16)(231,"div",17)(232,"span",18),iN(233," p-parameters"),Gl(234,"br"),sg()()(),Tl(235,"td",19)(236,"code",29),iN(237,"Array<PoDynamicFormField>"),sg()(),Tl(238,"td",21),iN(239,"-"),sg(),Tl(240,"td",22)(241,"p"),iN(242,"Par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),sg(),Tl(243,"p"),iN(244,"Ao utilizar esta propriedade, o componente n\xE3o buscar\xE1 automaticamente os par\xE2metros da API e o campo para preenchimento do processo n\xE3o ser\xE1 exibido."),sg()()(),Tl(245,"tr",15)(246,"td",16)(247,"div",17)(248,"span",18),iN(249," p-service-api"),Gl(250,"br"),sg()()(),Tl(251,"td",19)(252,"code",24),iN(253,"string"),sg()(),Tl(254,"td",21),iN(255,"-"),sg(),Tl(256,"td",22)(257,"p"),iN(258,"Endpoint usado pelo componente para busca dos processos e par\xE2metros que ser\xE3o utilizados para cria\xE7\xE3o e edi\xE7\xE3o dos agendamentos."),sg(),Tl(259,"h4"),iN(260,"Processos"),sg(),Tl(261,"p"),iN(262,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Tl(263,"code"),iN(264,"GET"),sg(),iN(265," para o endpoint "),Tl(266,"code"),iN(267,"{service-api}/processes"),sg(),iN(268,`, para buscar
essa lista de processos.`),sg(),Tl(269,"p"),iN(270,"Este endpoint "),Tl(271,"code"),iN(272,"{service-api}/processes"),sg(),iN(273," deve retornar uma lista de objetos que seguem a defini\xE7\xE3o de dados abaixo:"),sg(),Tl(274,"pre")(275,"code"),iN(276,`GET {service-api}/processes
`),sg()(),Tl(277,"pre")(278,"code"),iN(279,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),sg()(),Tl(280,"p"),iN(281,"Desta forma ser\xE1 renderizado um componente para selecionar o processo e/ou filtr\xE1-los."),sg(),Tl(282,"p"),iN(283,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Tl(284,"code"),iN(285,"search"),sg(),iN(286,". Da seguinte forma:"),sg(),Tl(287,"pre")(288,"code"),iN(289,`GET {service-api}/processes?search=relatorio
`),sg()(),Tl(290,"blockquote")(291,"p"),iN(292,"Veja mais sobre pagina\xE7\xE3o e filtros no "),Tl(293,"a",6),iN(294,"Guia de implementa\xE7\xE3o de APIs"),sg(),iN(295,`.
Caso seja informada a propriedade `),Tl(296,"code"),iN(297,"p-parameters"),sg(),iN(298," n\xE3o ser\xE3o realizadas as requisi\xE7\xF5es de processos e nem de parametros automaticamente."),sg()(),Tl(299,"p"),iN(300,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Tl(301,"code"),iN(302,"{service-api}/processes"),sg(),iN(303,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Tl(304,"strong"),iN(305,"identificador do processo - "),Tl(306,"code"),iN(307,"processID"),sg()(),iN(308," e ao salvar ser\xE1 enviado um "),Tl(309,"code"),iN(310,"POST"),sg(),iN(311," para o endpoint difinido "),Tl(312,"code"),iN(313,"serviceApi"),sg(),iN(314," conforme abaixo:"),sg(),Tl(315,"pre")(316,"code"),iN(317,`POST {service-api}
`),sg()(),Tl(318,"p")(319,"em"),iN(320,"Request payload"),sg(),iN(321," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Tl(322,"code"),iN(323,"PoJobScheduler"),sg(),iN(324,":"),sg(),Tl(325,"pre")(326,"code"),iN(327,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),sg()(),Tl(328,"p"),iN(329,"Caso seja necess\xE1rio informar par\xE2metros e adicionar configura\xE7\xF5es no processo selecionado, ser\xE1 realizado um "),Tl(330,"code"),iN(331,"GET"),sg(),iN(332,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Tl(333,"a",30),iN(334,"PoDynamicFormField"),sg(),iN(335,". Por\xE9m, caso utilizar a propriedade "),Tl(336,"code"),iN(337,"p-parameters"),sg(),iN(338,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),sg(),Tl(339,"pre")(340,"code"),iN(341,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),sg()(),Tl(342,"h4"),iN(343,"Salvar e Atualizar"),sg(),Tl(344,"p"),iN(345,"Para salvar o agendamento, ser\xE1 feita uma requisi\xE7\xE3o de cria\xE7\xE3o, passando os valores preenchidos pelo usu\xE1rio via "),Tl(346,"em"),iN(347,"payload"),sg(),iN(348,`.
Abaixo uma requisi\xE7\xE3o `),Tl(349,"code"),iN(350,"POST"),sg(),iN(351," disparada, onde as propriedades do "),Tl(352,"em"),iN(353,"Job Scheduler"),sg(),iN(354," foram preenchidas:"),sg(),Tl(355,"pre")(356,"code"),iN(357,`POST {service-api}
`),sg()(),Tl(358,"p")(359,"em"),iN(360,"Request payload"),sg(),iN(361," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Tl(362,"code"),iN(363,"PoJobScheduler"),sg(),iN(364,":"),sg(),Tl(365,"pre")(366,"code"),iN(367,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),sg()(),Tl(368,"p"),iN(369,"Caso queira que o componente carregue um agendamento j\xE1 existente, deve ser inclu\xEDdo um par\xE2metro na rota chamado "),Tl(370,"code"),iN(371,"id"),sg(),iN(372,"."),sg(),Tl(373,"p"),iN(374,"Exemplo de configura\xE7\xE3o de rota:"),sg(),Tl(375,"pre")(376,"code"),iN(377,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),sg()(),Tl(378,"p"),iN(379,"Baseado nisso, na inicializa\xE7\xE3o do template ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),sg(),Tl(380,"pre")(381,"code"),iN(382,`GET {service-api}/{id}
`),sg()(),Tl(383,"p"),iN(384,"Ao atualizar o agendamento, ser\xE1 disparado um "),Tl(385,"code"),iN(386,"PUT"),sg(),iN(387,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Tl(388,"code"),iN(389,"PUT"),sg(),iN(390," disparada, onde a propriedade "),Tl(391,"em"),iN(392,"recurrent"),sg(),iN(393," e "),Tl(394,"em"),iN(395,"daily"),sg(),iN(396," foram atualizadas:"),sg(),Tl(397,"pre")(398,"code"),iN(399,`PUT {service-api}/{id}
`),sg()(),Tl(400,"p")(401,"em"),iN(402,"Request payload"),sg(),iN(403," - estrutura de dados enviada no corpo da requisi\xE7\xE3o conforme interface "),Tl(404,"code"),iN(405,"PoJobScheduler"),sg(),iN(406,":"),sg(),Tl(407,"pre")(408,"code"),iN(409,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),sg()()()(),Tl(410,"tr",15)(411,"td",16)(412,"div",17)(413,"span",18),iN(414," p-step-execution-last"),Gl(415,"br"),sg()()(),Tl(416,"td",19)(417,"code",31),iN(418,"boolean"),sg()(),Tl(419,"td",21),iN(420,"-"),sg(),Tl(421,"td",22)(422,"em")(423,"strong"),iN(424,"(opcional)"),sg()(),Tl(425,"p"),iN(426,"Define se o step "),Tl(427,"code"),iN(428,"Agendamento"),sg(),iN(429," deve ser exibido como o \xFAltimo na sequ\xEAncia de steps"),sg(),Tl(430,"blockquote")(431,"p"),iN(432,"Aplic\xE1vel apenas quando utilizado "),Tl(433,"code"),iN(434,"PoJobSchedulerParametersTemplateDirective"),sg()()()()(),Tl(435,"tr",15)(436,"td",16)(437,"div",17)(438,"span",18),iN(439," p-orientation"),Gl(440,"br"),sg()()(),Tl(441,"td",19)(442,"code",32),iN(443,"PoStepperOrientation"),sg()(),Tl(444,"td",21),iN(445,"-"),sg(),Tl(446,"td",22)(447,"em")(448,"strong"),iN(449,"(opcional)"),sg()(),Tl(450,"p"),iN(451,"Define a orienta\xE7\xE3o de exibi\xE7\xE3o do "),Tl(452,"code"),iN(453,"po-stepper"),sg(),iN(454,"."),sg(),Tl(455,"blockquote")(456,"p"),iN(457,"Quando n\xE3o utilizada, segue o comportamento com base nas dimens\xF5es da tela."),sg()(),Tl(458,"blockquote")(459,"p"),iN(460,"Veja os valores v\xE1lidos no "),Tl(461,"em"),iN(462,"enum"),sg(),Tl(463,"a",33),iN(464,"PoStepperOrientation"),sg(),iN(465,"."),sg()()()(),Tl(466,"tr",15)(467,"td",16)(468,"div",26)(469,"span",27),iN(470," (p-success)"),Gl(471,"br"),sg()()(),Tl(472,"td",19)(473,"code",28),iN(474,"EventEmitter"),sg()(),Tl(475,"td",21),iN(476,"-"),sg(),Tl(477,"td",22)(478,"em")(479,"strong"),iN(480,"(opcional)"),sg()(),Tl(481,"p"),iN(482,"Evento disparado ao concluir o processo de agendamento com sucesso."),sg()()(),Tl(483,"tr",15)(484,"td",16)(485,"div",17)(486,"span",18),iN(487," p-title"),Gl(488,"br"),sg()()(),Tl(489,"td",19)(490,"code",24),iN(491,"string"),sg()(),Tl(492,"td",21),iN(493,"-"),sg(),Tl(494,"td",22)(495,"p"),iN(496,"T\xEDtulo da p\xE1gina."),sg()()()(),Tl(497,"h3"),iN(498,"Interfaces"),sg(),Tl(499,"h4",34)(500,"code",5),iN(501,"PoJobScheduler"),sg()(),Tl(502,"div",2)(503,"p"),iN(504,"Estrutura do "),Tl(505,"em"),iN(506,"payload"),sg(),iN(507," enviado nas requisi\xE7\xF5es para salvar e/ou atualizar as tarefas do "),Tl(508,"em"),iN(509,"Job Scheduler"),sg(),iN(510,"."),sg()(),Tl(511,"h4",11),iN(512,"Propriedades"),sg(),Tl(513,"table",12)(514,"tr",13)(515,"th",14),iN(516,"Nome"),sg(),Tl(517,"th",14),iN(518,"Tipo"),sg(),Tl(519,"th",14),iN(520,"Descri\xE7\xE3o"),sg()(),Tl(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),iN(525," daily"),Gl(526,"br"),sg()()(),Tl(527,"td",19)(528,"code",35),iN(529,`{ hour: number; minute: number;
}`),sg()(),Tl(530,"td",22)(531,"em")(532,"strong"),iN(533,"(opcional)"),sg()(),Tl(534,"p"),iN(535,"Define uma repeti\xE7\xE3o di\xE1ria."),sg()()(),Tl(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),iN(540," executionParameter"),Gl(541,"br"),sg()()(),Tl(542,"td",19)(543,"code",36),iN(544,"object"),sg()(),Tl(545,"td",22)(546,"em")(547,"strong"),iN(548,"(opcional)"),sg()(),Tl(549,"p"),iN(550,"Objeto contendo os nomes das propriedades dos par\xE2metros e os valores preenchidos pelo usu\xE1rio."),sg()()(),Tl(551,"tr",15)(552,"td",16)(553,"div",17)(554,"span",18),iN(555," firstExecution"),Gl(556,"br"),sg()()(),Tl(557,"td",19)(558,"code",24),iN(559,"string"),sg()(),Tl(560,"td",22)(561,"em")(562,"strong"),iN(563,"(opcional)"),sg()(),Tl(564,"p"),iN(565,"Data da primeira execu\xE7\xE3o."),sg()()(),Tl(566,"tr",15)(567,"td",16)(568,"div",17)(569,"span",18),iN(570," monthly"),Gl(571,"br"),sg()()(),Tl(572,"td",19)(573,"code",37),iN(574,`{ day: number; hour: number; minute: number;
}`),sg()(),Tl(575,"td",22)(576,"em")(577,"strong"),iN(578,"(opcional)"),sg()(),Tl(579,"p"),iN(580,"Define uma repeti\xE7\xE3o mensal."),sg()()(),Tl(581,"tr",15)(582,"td",16)(583,"div",17)(584,"span",18),iN(585," processID"),Gl(586,"br"),sg()()(),Tl(587,"td",19)(588,"code",24),iN(589,"string"),sg()(),Tl(590,"td",22)(591,"p"),iN(592,"Identificador do processo."),sg()()(),Tl(593,"tr",15)(594,"td",16)(595,"div",17)(596,"span",18),iN(597," recurrent"),Gl(598,"br"),sg()()(),Tl(599,"td",19)(600,"code",31),iN(601,"boolean"),sg()(),Tl(602,"td",22)(603,"em")(604,"strong"),iN(605,"(opcional)"),sg()(),Tl(606,"p"),iN(607,"Permite uma execu\xE7\xE3o recorrente."),sg()()(),Tl(608,"tr",15)(609,"td",16)(610,"div",17)(611,"span",18),iN(612," weekly"),Gl(613,"br"),sg()()(),Tl(614,"td",19)(615,"code",38),iN(616,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),sg()(),Tl(617,"td",22)(618,"em")(619,"strong"),iN(620,"(opcional)"),sg()(),Tl(621,"p"),iN(622,"Define uma repeti\xE7\xE3o semanal."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var X=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Job Scheduler",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,m){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return m.changeTab("doc")}),Gl(3,"sample-po-page-job-scheduler-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return m.changeTab("web")}),Gl(5,"sample-po-page-job-scheduler-background-process-view")(6,"sample-po-page-job-scheduler-directives-view"),sg()()()),o&2&&(nw("p-actions",m.actions),Vp(2),nw("p-active",m.activeTab==="doc"),Vp(2),nw("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"));},dependencies:[lNe,Wme,jme,G,U,$],encapsulation:2,changeDetection:1})}return i})();var de=[{path:"",component:X}],Q=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[DL.forChild(de),DL]})}return i})();var Fe=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=fe({type:i});static \u0275inj=ue({imports:[ar,Q]})}return i})();export{Fe as DocPoPageJobSchedulerModule};