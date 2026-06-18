import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,cg as La,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,av as ql,aw as lo,ax as uo,a3 as pNe}from'./main-QNYCBKHQ.js';var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:false,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&Wl(0,"po-page-dynamic-edit",0),o&2&&tw("p-fields",dN(2,G,uN(1,V)));},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Dynamic Edit Basic"),sg(),Sl(4,"a",2),ht("click",function(){return d.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-dynamic-edit-basic"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+d.sampleCodeButtonIcon),Vp(),fg(" ",d.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,W,d.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,B],encapsulation:2})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:true,required:true},{property:"name",divider:"Personal data",required:true},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&ql(J,7),o&2){let u;lo(u=uo())&&(d.dynamicEdit=u.first);}},standalone:false,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&Wl(0,"po-page-dynamic-edit",1,0),o&2&&tw("p-auto-router",true)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi);},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Page Dynamic Edit - User"),sg(),Sl(4,"a",2),ht("click",function(){return d.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-page-dynamic-edit-user"),sg(),Wl(23,"hr")),o&2&&(Vp(5),Hx("po-icon "+d.sampleCodeButtonIcon),Vp(),fg(" ",d.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Z,d.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,j],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:false,decls:1475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,"M\xF3dulo do template do po-page-dynamic-detail."),sg()(),Sl(7,"h3",3),Jx(8,"Componente"),sg(),Sl(9,"h4",4)(10,"code",5),Jx(11,"PoPageDynamicEditComponent"),sg()(),Sl(12,"div",2)(13,"p"),Jx(14,"O "),Sl(15,"code"),Jx(16,"po-page-dynamic-edit"),sg(),Jx(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),sg(),Sl(18,"h3"),Jx(19,"Utiliza\xE7\xE3o via rota"),sg(),Sl(20,"p"),Jx(21,"Ao utilizar as rotas para inicializar o template, o "),Sl(22,"code"),Jx(23,"page-dynamic-edit"),sg(),Jx(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),sg(),Sl(25,"p"),Jx(26,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(27,"p"),Jx(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),Sl(29,"code"),Jx(30,"app-routing.module.ts"),sg()(),Sl(31,"pre")(32,"code"),Jx(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),sg()(),Sl(34,"p"),Jx(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),sg(),Sl(36,"p"),Jx(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),sg(),Sl(38,"blockquote")(39,"p"),Jx(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),sg()(),Sl(41,"p"),Jx(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),Sl(43,"code"),Jx(44,"id"),sg(),Jx(45,":"),sg(),Sl(46,"pre")(47,"code"),Jx(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),sg()(),Sl(49,"p"),Jx(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),sg(),Sl(51,"p"),Jx(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Sl(53,"a",6),Jx(54,"PoPageDynamicEditMetadata"),sg(),Jx(55,". Por exemplo:"),sg(),Sl(56,"pre")(57,"code"),Jx(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),sg()(),Sl(59,"blockquote")(60,"p"),Jx(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),Sl(62,"code"),Jx(63,"serviceApi"),sg(),Jx(64," da seguinte forma:"),sg()(),Sl(65,"pre")(66,"code"),Jx(67,`GET {end-point}/metadata?type=edit&version={version}
`),sg()(),Sl(68,"h4"),Jx(69,"Tokens customiz\xE1veis"),sg(),Sl(70,"table")(71,"thead")(72,"tr")(73,"th"),Jx(74,"Propriedade"),sg(),Sl(75,"th"),Jx(76,"Descri\xE7\xE3o"),sg(),Sl(77,"th"),Jx(78,"Valor Padr\xE3o"),sg()()(),Sl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),Jx(83,"Header"),sg()(),Wl(84,"td")(85,"td"),sg(),Sl(86,"tr")(87,"td")(88,"code"),Jx(89,"--padding"),sg()(),Sl(90,"td"),Jx(91,"Espa\xE7amento do header"),sg(),Sl(92,"td")(93,"code"),Jx(94,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Sl(95,"tr")(96,"td")(97,"code"),Jx(98,"--gap"),sg()(),Sl(99,"td"),Jx(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Sl(101,"td")(102,"code"),Jx(103,"var(--spacing-md)"),sg()()(),Sl(104,"tr")(105,"td")(106,"code"),Jx(107,"--gap-actions"),sg()(),Sl(108,"td"),Jx(109,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Sl(110,"td")(111,"code"),Jx(112,"var(--spacing-xs)"),sg()()(),Sl(113,"tr")(114,"td")(115,"code"),Jx(116,"--font-family"),sg()(),Sl(117,"td"),Jx(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Sl(119,"td")(120,"code"),Jx(121,"var(--font-family-theme)"),sg()()(),Sl(122,"tr")(123,"td")(124,"strong"),Jx(125,"Content"),sg()(),Wl(126,"td")(127,"td"),sg(),Sl(128,"tr")(129,"td")(130,"code"),Jx(131,"--padding-content"),sg()(),Sl(132,"td"),Jx(133,"Espa\xE7amento do conte\xFAdo"),sg(),Sl(134,"td")(135,"code"),Jx(136,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Sl(137,"div",7)(138,"h4",8),Jx(139,"Seletor"),sg(),Sl(140,"pre",9),Jx(141,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="unknown"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),sg()(),Sl(142,"h4",10),Jx(143,"Propriedades"),sg(),Sl(144,"table",11)(145,"tr",12)(146,"th",13),Jx(147,"Nome"),sg(),Sl(148,"th",13),Jx(149,"Tipo"),sg(),Sl(150,"th",13),Jx(151,"Padr\xE3o"),sg(),Sl(152,"th",13),Jx(153,"Descri\xE7\xE3o"),sg()(),Sl(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),Jx(158," p-actions"),Wl(159,"br"),sg()()(),Sl(160,"td",18)(161,"code",19),Jx(162,"PoPageDynamicEditActions"),sg()(),Sl(163,"td",20),Jx(164,"-"),sg(),Sl(165,"td",21)(166,"em")(167,"strong"),Jx(168,"(opcional)"),sg()(),Sl(169,"p"),Jx(170,"A\xE7\xF5es da p\xE1gina."),sg()()(),Sl(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),Jx(175," p-auto-router"),Wl(176,"br"),sg()()(),Sl(177,"td",18)(178,"code",22),Jx(179,"boolean"),sg()(),Sl(180,"td",20)(181,"p"),Jx(182,"false"),sg()(),Sl(183,"td",21)(184,"em")(185,"strong"),Jx(186,"(opcional)"),sg()(),Sl(187,"p"),Jx(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),sg(),Sl(189,"blockquote")(190,"p"),Jx(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),Sl(192,"code"),Jx(193,"**"),sg(),Jx(194,") especificada."),sg()()()(),Sl(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),Jx(199," p-breadcrumb"),Wl(200,"br"),sg()()(),Sl(201,"td",18)(202,"code",23),Jx(203,"PoBreadcrumb"),sg()(),Sl(204,"td",20),Jx(205,"-"),sg(),Sl(206,"td",21)(207,"em")(208,"strong"),Jx(209,"(opcional)"),sg()(),Sl(210,"p"),Jx(211,"Objeto com propriedades do breadcrumb."),sg()()(),Sl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),Jx(216," p-components-size"),Wl(217,"br"),sg()()(),Sl(218,"td",18)(219,"code",24),Jx(220,"string"),sg()(),Sl(221,"td",20)(222,"p")(223,"code"),Jx(224,"medium"),sg()()(),Sl(225,"td",21)(226,"em")(227,"strong"),Jx(228,"(opcional)"),sg()(),Sl(229,"p"),Jx(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(231,"ul")(232,"li")(233,"code"),Jx(234,"small"),sg(),Jx(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(236,"li")(237,"code"),Jx(238,"medium"),sg(),Jx(239,": aplica a medida medium de cada componente."),sg()(),Sl(240,"blockquote")(241,"p"),Jx(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(243,"code"),Jx(244,"medium"),sg(),Jx(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(246,"a",25),Jx(247,"po-theme"),sg(),Jx(248,"."),sg()()()(),Sl(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),Jx(253," p-fields"),Wl(254,"br"),sg()()(),Sl(255,"td",18)(256,"code",26),Jx(257,"Array<PoPageDynamicEditField>"),sg()(),Sl(258,"td",20),Jx(259,"-"),sg(),Sl(260,"td",21)(261,"p"),Jx(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),sg()()(),Sl(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),Jx(267," p-literals"),Wl(268,"br"),sg()()(),Sl(269,"td",18)(270,"code",27),Jx(271,"PoPageDynamicEditLiterals"),sg()(),Sl(272,"td",20),Jx(273,"-"),sg(),Sl(274,"td",21)(275,"em")(276,"strong"),Jx(277,"(opcional)"),sg()(),Sl(278,"p"),Jx(279,"Objeto com as literais usadas no "),Sl(280,"code"),Jx(281,"po-page-dynamic-edit"),sg(),Jx(282,"."),sg(),Sl(283,"p"),Jx(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),sg(),Sl(285,"pre")(286,"code"),Jx(287,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),sg()(),Sl(288,"p"),Jx(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Sl(290,"pre")(291,"code"),Jx(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),sg()(),Sl(293,"blockquote")(294,"p"),Jx(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Sl(296,"a",28)(297,"code"),Jx(298,"PoI18nService"),sg()(),Jx(299," ou "),Sl(300,"em"),Jx(301,"browser"),sg(),Jx(302,"."),sg()()()(),Sl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),Jx(307," p-notification-type"),Wl(308,"br"),sg()()(),Sl(309,"td",18)(310,"code",24),Jx(311,"string"),sg()(),Sl(312,"td",20)(313,"p"),Jx(314,"warning"),sg()(),Sl(315,"td",21)(316,"em")(317,"strong"),Jx(318,"(opcional)"),sg()(),Sl(319,"p"),Jx(320,"Tipo da notifica\xE7\xE3o."),sg(),Sl(321,"p"),Jx(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),sg(),Sl(323,"pre")(324,"code"),Jx(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),sg()(),Sl(326,"blockquote")(327,"p"),Jx(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),sg()()()(),Sl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),Jx(333," p-load"),Wl(334,"br"),sg()()(),Sl(335,"td",18)(336,"code",24),Jx(337,"string "),sg(),Sl(338,"code",29),Jx(339," (() => PoPageDynamicEditOptions)"),sg()(),Sl(340,"td",20),Jx(341,"-"),sg(),Sl(342,"td",21)(343,"p"),Jx(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),sg(),Sl(345,"p"),Jx(346,"A propriedade aceita os seguintes tipos:"),sg(),Sl(347,"ul")(348,"li")(349,"code"),Jx(350,"string"),sg(),Jx(351,": "),Sl(352,"em"),Jx(353,"Endpoint"),sg(),Jx(354," usado pelo componente para requisi\xE7\xE3o via "),Sl(355,"code"),Jx(356,"POST"),sg(),Jx(357,"."),sg(),Sl(358,"li")(359,"code"),Jx(360,"function"),sg(),Jx(361,": M\xE9todo que ser\xE1 executado."),sg()(),Sl(362,"p"),Jx(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(364,"code"),Jx(365,"PoPageDynamicEditOptions"),sg(),Jx(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),sg(),Sl(367,"p"),Jx(368,"Por exemplo:"),sg(),Sl(369,"pre")(370,"code"),Jx(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),sg()(),Sl(372,"p"),Jx(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(374,"code"),Jx(375,"bind"),sg(),Jx(376,", por exemplo:"),sg(),Sl(377,"pre")(378,"code"),Jx(379,`[p-load]="onLoadOptions.bind(this)"
`),sg()()()(),Sl(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),Jx(384," p-load-data"),Wl(385,"br"),sg()()(),Sl(386,"td",18)(387,"code",30),Jx(388,"unknown"),sg()(),Sl(389,"td",20),Jx(390,"-"),sg(),Sl(391,"td",21)(392,"em")(393,"strong"),Jx(394,"(opcional)"),sg()(),Sl(395,"p"),Jx(396,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),sg(),Sl(397,"p"),Jx(398,"A propriedade aceita os seguintes tipos:"),sg(),Sl(399,"ul")(400,"li")(401,"code"),Jx(402,"function"),sg(),Jx(403,": M\xE9todo que ser\xE1 executado."),sg()(),Sl(404,"p"),Jx(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),sg(),Sl(406,"p"),Jx(407,"Por exemplo:"),sg(),Sl(408,"pre")(409,"code"),Jx(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),sg()(),Sl(411,"p"),Jx(412,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(413,"code"),Jx(414,"bind"),sg(),Jx(415,", por exemplo:"),sg(),Sl(416,"pre")(417,"code"),Jx(418,`[p-load-data]="onLoadCustom.bind(this)"
`),sg()()()(),Sl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Jx(423," p-service-api"),Wl(424,"br"),sg()()(),Sl(425,"td",18)(426,"code",24),Jx(427,"string"),sg()(),Sl(428,"td",20),Jx(429,"-"),sg(),Sl(430,"td",21)(431,"p"),Jx(432,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),sg(),Sl(433,"p"),Jx(434,"Para as a\xE7\xF5es de "),Sl(435,"code"),Jx(436,"save"),sg(),Jx(437," e "),Sl(438,"code"),Jx(439,"saveNew"),sg(),Jx(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),sg(),Sl(441,"blockquote")(442,"p")(443,"code"),Jx(444,"POST {end-point}"),sg()()(),Sl(445,"pre")(446,"code"),Jx(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),sg()(),Sl(448,"p"),Jx(449,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Sl(450,"code"),Jx(451,"name"),sg(),Jx(452," e "),Sl(453,"code"),Jx(454,"city"),sg(),Jx(455," foram preenchidas:"),sg(),Sl(456,"pre")(457,"code"),Jx(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),sg()(),Sl(459,"p"),Jx(460,"Request payload:"),sg(),Sl(461,"pre")(462,"code"),Jx(463,`{ "name": "Fulano", "city": "Smallville" }
`),sg()(),Sl(464,"p"),Jx(465,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),Sl(466,"code"),Jx(467,"id"),sg(),Jx(468,"."),sg(),Sl(469,"p"),Jx(470,"Exemplo de configura\xE7\xE3o de rota:"),sg(),Sl(471,"pre")(472,"code"),Jx(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),sg()(),Sl(474,"p"),Jx(475,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),sg(),Sl(476,"blockquote")(477,"p")(478,"code"),Jx(479,"GET {end-point}/{id}"),sg()()(),Sl(480,"p"),Jx(481,"Nos m\xE9todos de "),Sl(482,"code"),Jx(483,"save"),sg(),Jx(484," e "),Sl(485,"code"),Jx(486,"saveNew"),sg(),Jx(487,", ao inv\xE9s de um "),Sl(488,"code"),Jx(489,"POST"),sg(),Jx(490,", ser\xE1 disparado um "),Sl(491,"code"),Jx(492,"PUT"),sg(),Jx(493,"."),sg(),Sl(494,"p"),Jx(495,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Sl(496,"code"),Jx(497,"name"),sg(),Jx(498," e "),Sl(499,"code"),Jx(500,"city"),sg(),Jx(501," foram preenchidas / atualizadas, e o "),Sl(502,"code"),Jx(503,"id"),sg(),Jx(504," da url \xE9 2:"),sg(),Sl(505,"pre")(506,"code"),Jx(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),sg()(),Sl(508,"p"),Jx(509,"Request payload:"),sg(),Sl(510,"pre")(511,"code"),Jx(512,`{ "name": "Fulano", "city": "Metropolis" }
`),sg()()()(),Sl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),Jx(517," p-title"),Wl(518,"br"),sg()()(),Sl(519,"td",18)(520,"code",24),Jx(521,"string"),sg()(),Sl(522,"td",20),Jx(523,"-"),sg(),Sl(524,"td",21)(525,"p"),Jx(526,"T\xEDtulo da p\xE1gina."),sg()()()(),Sl(527,"h3",10),Jx(528,"M\xE9todos"),sg(),Sl(529,"table",31)(530,"tr",14)(531,"th",32)(532,"div",16)(533,"h4")(534,"span",17),Jx(535," showAdditionalHelp "),sg()()()()(),Sl(536,"tr",21)(537,"td",21)(538,"p"),Jx(539,"M\xE9todo que exibe "),Sl(540,"code"),Jx(541,"p-helper"),sg(),Jx(542," ou executa a a\xE7\xE3o definida em "),Sl(543,"code"),Jx(544,"p-helper{eventOnClick}"),sg(),Jx(545," ou em "),Sl(546,"code"),Jx(547,"p-additionalHelp"),sg(),Jx(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(549,"code"),Jx(550,"keydown"),sg(),Jx(551,"."),sg(),Sl(552,"pre")(553,"code"),Jx(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),sg()()()()(),Sl(555,"h5")(556,"b"),Jx(557,"Par\xE2metros"),sg()(),Sl(558,"table",11)(559,"tr",12)(560,"th",13),Jx(561,"Nome"),sg(),Sl(562,"th",13),Jx(563,"Tipo"),sg(),Sl(564,"th",13),Jx(565,"Descri\xE7\xE3o"),sg()(),Sl(566,"tr",14)(567,"td",15),Jx(568," property"),sg(),Sl(569,"td",18)(570,"code",33),Jx(571," string "),sg()(),Sl(572,"td",21)(573,"p"),Jx(574,"Identificador da coluna."),sg()()()(),Wl(575,"br"),Sl(576,"h3"),Jx(577,"Interfaces"),sg(),Sl(578,"h4",34)(579,"code",5),Jx(580,"PoPageDynamicEditActions"),sg()(),Sl(581,"div",2)(582,"p"),Jx(583,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),sg()(),Sl(584,"h4",10),Jx(585,"Propriedades"),sg(),Sl(586,"table",11)(587,"tr",12)(588,"th",13),Jx(589,"Nome"),sg(),Sl(590,"th",13),Jx(591,"Tipo"),sg(),Sl(592,"th",13),Jx(593,"Descri\xE7\xE3o"),sg()(),Sl(594,"tr",14)(595,"td",15)(596,"div",16)(597,"span",17),Jx(598," beforeCancel"),Wl(599,"br"),sg()()(),Sl(600,"td",18)(601,"code",24),Jx(602,"string "),sg(),Sl(603,"code",35),Jx(604," (() => PoPageDynamicEditBeforeCancel)"),sg()(),Sl(605,"td",21)(606,"em")(607,"strong"),Jx(608,"(opcional)"),sg()(),Sl(609,"p"),Jx(610,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),sg(),Sl(611,"p"),Jx(612,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Sl(613,"code"),Jx(614,"PoPageDynamicEditBeforeCancel"),sg(),Jx(615,"."),sg(),Sl(616,"blockquote")(617,"p"),Jx(618,"A url ser\xE1 chamada via POST"),sg()(),Sl(619,"p"),Jx(620,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Sl(621,"strong"),Jx(622,"beforeCancel"),sg(),Jx(623,`
ou definir a mensagem no atributo `),Sl(624,"code"),Jx(625,"_messages"),sg(),Jx(626,` na resposta da API conforme definido
em `),Sl(627,"a",36),Jx(628,"Guia de implementa\xE7\xE3o de APIs"),sg()()()(),Sl(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),Jx(633," beforeSave"),Wl(634,"br"),sg()()(),Sl(635,"td",18)(636,"code",24),Jx(637,"string "),sg(),Sl(638,"code",37),Jx(639," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),sg()(),Sl(640,"td",21)(641,"em")(642,"strong"),Jx(643,"(opcional)"),sg()(),Sl(644,"p"),Jx(645,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),sg(),Sl(646,"p"),Jx(647,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Sl(648,"code"),Jx(649,"PoPageDynamicEditBeforeSave"),sg(),Jx(650,"."),sg(),Sl(651,"blockquote")(652,"p"),Jx(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Sl(654,"code"),Jx(655,"POST {beforeSave}/{key}"),sg(),Jx(656,"."),sg()(),Sl(657,"p"),Jx(658,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Sl(659,"strong"),Jx(660,"beforeSave"),sg(),Jx(661,`
ou definir a mensagem no atributo `),Sl(662,"code"),Jx(663,"_messages"),sg(),Jx(664,` na resposta da API conforme definido
em `),Sl(665,"a",36),Jx(666,"Guia de implementa\xE7\xE3o de APIs"),sg()()()(),Sl(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),Jx(671," beforeSaveNew"),Wl(672,"br"),sg()()(),Sl(673,"td",18)(674,"code",24),Jx(675,"string "),sg(),Sl(676,"code",38),Jx(677," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),sg()(),Sl(678,"td",21)(679,"em")(680,"strong"),Jx(681,"(opcional)"),sg()(),Sl(682,"p"),Jx(683,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),sg(),Sl(684,"p"),Jx(685,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Sl(686,"code"),Jx(687,"PoPageDynamicEditBeforeSaveNew"),sg(),Jx(688,"."),sg(),Sl(689,"blockquote")(690,"p"),Jx(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Sl(692,"code"),Jx(693,"POST {beforeSave}/{key}"),sg(),Jx(694,"."),sg()(),Sl(695,"p"),Jx(696,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Sl(697,"strong"),Jx(698,"beforeSaveNew"),sg(),Jx(699,`
ou definir a mensagem no atributo `),Sl(700,"code"),Jx(701,"_messages"),sg(),Jx(702,` na resposta da API conforme definido
em `),Sl(703,"a",36),Jx(704,"Guia de implementa\xE7\xE3o de APIs"),sg()()()(),Sl(705,"tr",14)(706,"td",15)(707,"div",16)(708,"span",17),Jx(709," cancel"),Wl(710,"br"),sg()()(),Sl(711,"td",18)(712,"code",24),Jx(713,"string "),sg(),Sl(714,"code",22),Jx(715," boolean "),sg(),Sl(716,"code",39),Jx(717," Function"),sg()(),Sl(718,"td",21)(719,"em")(720,"strong"),Jx(721,"(opcional)"),sg()(),Sl(722,"p"),Jx(723,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),Sl(724,"code"),Jx(725,"navigator.back()"),sg(),Jx(726,"."),sg(),Sl(727,"blockquote")(728,"p"),Jx(729,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),sg()(),Sl(730,"blockquote")(731,"p"),Jx(732,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),Sl(733,"code"),Jx(734,"false"),sg(),Jx(735,";"),sg()(),Sl(736,"pre")(737,"code"),Jx(738,`actions = {
  cancel: '/'
};
`),sg()()()(),Sl(739,"tr",14)(740,"td",15)(741,"div",16)(742,"span",17),Jx(743," save"),Wl(744,"br"),sg()()(),Sl(745,"td",18)(746,"code",24),Jx(747,"string "),sg(),Sl(748,"code",40),Jx(749," ((resource: any, id: string) => void)"),sg()(),Sl(750,"td",21)(751,"em")(752,"strong"),Jx(753,"(opcional)"),sg()(),Sl(754,"p"),Jx(755,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),sg(),Sl(756,"p"),Jx(757,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),sg(),Sl(758,"blockquote")(759,"p"),Jx(760,"A rota pode conter um par\xE2metro chamando id."),sg()(),Sl(761,"pre")(762,"code"),Jx(763,`actions = {
  save: 'detail/:id'
};
`),sg()(),Sl(764,"p"),Jx(765,"Se for passado um m\xE9todo:"),sg(),Sl(766,"ul")(767,"li"),Jx(768,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),Sl(769,"code"),Jx(770,"{ email: 'example@email.com' }"),sg(),Jx(771,"."),sg(),Sl(772,"li"),Jx(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),sg()()()(),Sl(774,"tr",14)(775,"td",15)(776,"div",16)(777,"span",17),Jx(778," saveNew"),Wl(779,"br"),sg()()(),Sl(780,"td",18)(781,"code",24),Jx(782,"string "),sg(),Sl(783,"code",41),Jx(784," ((resource: any, id?: string) => void)"),sg()(),Sl(785,"td",21)(786,"em")(787,"strong"),Jx(788,"(opcional)"),sg()(),Sl(789,"p"),Jx(790,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),sg(),Sl(791,"p"),Jx(792,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),sg(),Sl(793,"blockquote")(794,"p"),Jx(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),sg()(),Sl(796,"pre")(797,"code"),Jx(798,`actions = {
  saveNew: 'new'
};
`),sg()(),Sl(799,"p"),Jx(800,"A rota pode conter um par\xE2metro id."),sg(),Sl(801,"pre")(802,"code"),Jx(803,`actions = {
  saveNew: 'edit/:id'
};
`),sg()(),Sl(804,"p"),Jx(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),sg()()()(),Sl(806,"h4",34)(807,"code",5),Jx(808,"PoPageDynamicEditBeforeCancel"),sg()(),Sl(809,"div",2)(810,"p"),Jx(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Sl(812,"code"),Jx(813,"beforeCancel"),sg(),Jx(814,"."),sg()(),Sl(815,"h4",10),Jx(816,"Propriedades"),sg(),Sl(817,"table",11)(818,"tr",12)(819,"th",13),Jx(820,"Nome"),sg(),Sl(821,"th",13),Jx(822,"Tipo"),sg(),Sl(823,"th",13),Jx(824,"Descri\xE7\xE3o"),sg()(),Sl(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),Jx(829," allowAction"),Wl(830,"br"),sg()()(),Sl(831,"td",18)(832,"code",22),Jx(833,"boolean"),sg()(),Sl(834,"td",21)(835,"em")(836,"strong"),Jx(837,"(opcional)"),sg()(),Sl(838,"p"),Jx(839,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),sg()()(),Sl(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),Jx(844," newUrl"),Wl(845,"br"),sg()()(),Sl(846,"td",18)(847,"code",24),Jx(848,"string"),sg()(),Sl(849,"td",21)(850,"em")(851,"strong"),Jx(852,"(opcional)"),sg()(),Sl(853,"p"),Jx(854,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),Sl(855,"code"),Jx(856,"cancel"),sg(),Jx(857,"."),sg()()()(),Sl(858,"h4",34)(859,"code",5),Jx(860,"PoPageDynamicEditBeforeSaveNew"),sg()(),Sl(861,"div",2)(862,"p"),Jx(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Sl(864,"code"),Jx(865,"beforeSaveNew"),sg(),Jx(866,"."),sg()(),Sl(867,"h4",10),Jx(868,"Propriedades"),sg(),Sl(869,"table",11)(870,"tr",12)(871,"th",13),Jx(872,"Nome"),sg(),Sl(873,"th",13),Jx(874,"Tipo"),sg(),Sl(875,"th",13),Jx(876,"Descri\xE7\xE3o"),sg()(),Sl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),Jx(881," allowAction"),Wl(882,"br"),sg()()(),Sl(883,"td",18)(884,"code",22),Jx(885,"boolean"),sg()(),Sl(886,"td",21)(887,"em")(888,"strong"),Jx(889,"(opcional)"),sg()(),Sl(890,"p"),Jx(891,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),sg()()(),Sl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),Jx(896," newUrl"),Wl(897,"br"),sg()()(),Sl(898,"td",18)(899,"code",24),Jx(900,"string"),sg()(),Sl(901,"td",21)(902,"em")(903,"strong"),Jx(904,"(opcional)"),sg()(),Sl(905,"p"),Jx(906,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),Sl(907,"code"),Jx(908,"saveNew"),sg(),Jx(909,"."),sg()()(),Sl(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),Jx(914," resource"),Wl(915,"br"),sg()()(),Sl(916,"td",18)(917,"code",42),Jx(918,"any"),sg()(),Sl(919,"td",21)(920,"em")(921,"strong"),Jx(922,"(opcional)"),sg()(),Sl(923,"p"),Jx(924,"Recurso atualizado."),sg(),Sl(925,"p"),Jx(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Sl(927,"code"),Jx(928,"key: true"),sg(),Jx(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),sg(),Sl(930,"ul")(931,"li")(932,"p"),Jx(933,"recurso anterior com a propriedade id foi que definida como "),Sl(934,"em"),Jx(935,"key"),sg(),Jx(936,":"),sg(),Sl(937,"pre")(938,"code"),Jx(939,`{ id: 1, name: 'Ane' }
`),sg()()(),Sl(940,"li")(941,"p"),Jx(942,"recurso retornado no "),Sl(943,"code"),Jx(944,"beforeSaveNew"),sg(),Jx(945,":"),sg(),Sl(946,"pre")(947,"code"),Jx(948,`{ id: 50, age: 23 }
`),sg()()(),Sl(949,"li")(950,"p"),Jx(951,"Mesclagem do recurso:"),sg(),Sl(952,"pre")(953,"code"),Jx(954,`{ id: 1, name: 'Ane', age: 23 }
`),sg()()()(),Sl(955,"blockquote")(956,"p"),Jx(957,"Caso "),Sl(958,"code"),Jx(959,"allowAction"),sg(),Jx(960," seja "),Sl(961,"code"),Jx(962,"false"),sg(),Jx(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),sg()()()()(),Sl(964,"h4",34)(965,"code",5),Jx(966,"PoPageDynamicEditBeforeSave"),sg()(),Sl(967,"div",2)(968,"p"),Jx(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Sl(970,"code"),Jx(971,"beforeSave"),sg(),Jx(972,"."),sg()(),Sl(973,"h4",10),Jx(974,"Propriedades"),sg(),Sl(975,"table",11)(976,"tr",12)(977,"th",13),Jx(978,"Nome"),sg(),Sl(979,"th",13),Jx(980,"Tipo"),sg(),Sl(981,"th",13),Jx(982,"Descri\xE7\xE3o"),sg()(),Sl(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),Jx(987," allowAction"),Wl(988,"br"),sg()()(),Sl(989,"td",18)(990,"code",22),Jx(991,"boolean"),sg()(),Sl(992,"td",21)(993,"em")(994,"strong"),Jx(995,"(opcional)"),sg()(),Sl(996,"p"),Jx(997,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),sg()()(),Sl(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),Jx(1002," newUrl"),Wl(1003,"br"),sg()()(),Sl(1004,"td",18)(1005,"code",24),Jx(1006,"string"),sg()(),Sl(1007,"td",21)(1008,"em")(1009,"strong"),Jx(1010,"(opcional)"),sg()(),Sl(1011,"p"),Jx(1012,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),Sl(1013,"code"),Jx(1014,"save"),sg(),Jx(1015,"."),sg()()(),Sl(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),Jx(1020," resource"),Wl(1021,"br"),sg()()(),Sl(1022,"td",18)(1023,"code",42),Jx(1024,"any"),sg()(),Sl(1025,"td",21)(1026,"em")(1027,"strong"),Jx(1028,"(opcional)"),sg()(),Sl(1029,"p"),Jx(1030,"Recurso atualizado."),sg(),Sl(1031,"p"),Jx(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),sg(),Sl(1033,"ul")(1034,"li")(1035,"p"),Jx(1036,"recurso anterior:"),sg(),Sl(1037,"pre")(1038,"code"),Jx(1039,`{ name: 'Ane' }
`),sg()()(),Sl(1040,"li")(1041,"p"),Jx(1042,"recurso retornado no "),Sl(1043,"code"),Jx(1044,"beforeSave"),sg(),Jx(1045,":"),sg(),Sl(1046,"pre")(1047,"code"),Jx(1048,`{ age: 23 }
`),sg()()(),Sl(1049,"li")(1050,"p"),Jx(1051,"Mesclagem do recurso:"),sg(),Sl(1052,"pre")(1053,"code"),Jx(1054,`{ name: 'Ane', age: 23 }
`),sg()()()(),Sl(1055,"blockquote")(1056,"p"),Jx(1057,"Caso "),Sl(1058,"code"),Jx(1059,"allowAction"),sg(),Jx(1060," seja "),Sl(1061,"code"),Jx(1062,"false"),sg(),Jx(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),sg()()()()(),Sl(1064,"h4",34)(1065,"code",5),Jx(1066,"PoPageDynamicEditField"),sg()(),Sl(1067,"div",2)(1068,"p"),Jx(1069,"Interface dos fields usados para compor o template "),Sl(1070,"code"),Jx(1071,"po-page-dynamic-edit"),sg(),Jx(1072,`.
Herda as defini\xE7\xF5es da interface
`),Sl(1073,"a",43),Jx(1074,"PoDynamicFormField"),sg(),Jx(1075,"."),sg()(),Sl(1076,"h4",10),Jx(1077,"Propriedades"),sg(),Sl(1078,"table",11)(1079,"tr",12)(1080,"th",13),Jx(1081,"Nome"),sg(),Sl(1082,"th",13),Jx(1083,"Tipo"),sg(),Sl(1084,"th",13),Jx(1085,"Descri\xE7\xE3o"),sg()(),Sl(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),Jx(1090," duplicate"),Wl(1091,"br"),sg()()(),Sl(1092,"td",18)(1093,"code",22),Jx(1094,"boolean"),sg()(),Sl(1095,"td",21)(1096,"em")(1097,"strong"),Jx(1098,"(opcional)"),sg()(),Sl(1099,"p"),Jx(1100,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),sg()()()(),Sl(1101,"h4",34)(1102,"code",5),Jx(1103,"PoPageDynamicEditLiterals"),sg()(),Sl(1104,"div",2)(1105,"p"),Jx(1106,"Interface para defini\xE7\xE3o das literais usadas no "),Sl(1107,"code"),Jx(1108,"po-page-dynamic-edit"),sg(),Jx(1109,"."),sg()(),Sl(1110,"h4",10),Jx(1111,"Propriedades"),sg(),Sl(1112,"table",11)(1113,"tr",12)(1114,"th",13),Jx(1115,"Nome"),sg(),Sl(1116,"th",13),Jx(1117,"Tipo"),sg(),Sl(1118,"th",13),Jx(1119,"Descri\xE7\xE3o"),sg()(),Sl(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),Jx(1124," cancelConfirmMessage"),Wl(1125,"br"),sg()()(),Sl(1126,"td",18)(1127,"code",24),Jx(1128,"string"),sg()(),Sl(1129,"td",21)(1130,"em")(1131,"strong"),Jx(1132,"(opcional)"),sg()(),Sl(1133,"p"),Jx(1134,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),sg()()(),Sl(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),Jx(1139," detailActionNew"),Wl(1140,"br"),sg()()(),Sl(1141,"td",18)(1142,"code",24),Jx(1143,"string"),sg()(),Sl(1144,"td",21)(1145,"em")(1146,"strong"),Jx(1147,"(opcional)"),sg()(),Sl(1148,"p"),Jx(1149,"R\xF3tulo exibido no bot\xE3o "),Sl(1150,"code"),Jx(1151,"Novo"),sg(),Jx(1152,"."),sg()()(),Sl(1153,"tr",14)(1154,"td",15)(1155,"div",16)(1156,"span",17),Jx(1157," pageActionCancel"),Wl(1158,"br"),sg()()(),Sl(1159,"td",18)(1160,"code",24),Jx(1161,"string"),sg()(),Sl(1162,"td",21)(1163,"em")(1164,"strong"),Jx(1165,"(opcional)"),sg()(),Sl(1166,"p"),Jx(1167,"R\xF3tulo exibido no bot\xE3o "),Sl(1168,"code"),Jx(1169,"Cancelar"),sg(),Jx(1170,"."),sg()()(),Sl(1171,"tr",14)(1172,"td",15)(1173,"div",16)(1174,"span",17),Jx(1175," pageActionSave"),Wl(1176,"br"),sg()()(),Sl(1177,"td",18)(1178,"code",24),Jx(1179,"string"),sg()(),Sl(1180,"td",21)(1181,"em")(1182,"strong"),Jx(1183,"(opcional)"),sg()(),Sl(1184,"p"),Jx(1185,"R\xF3tulo exibido no bot\xE3o "),Sl(1186,"code"),Jx(1187,"Salvar"),sg(),Jx(1188,"."),sg()()(),Sl(1189,"tr",14)(1190,"td",15)(1191,"div",16)(1192,"span",17),Jx(1193," pageActionSaveNew"),Wl(1194,"br"),sg()()(),Sl(1195,"td",18)(1196,"code",24),Jx(1197,"string"),sg()(),Sl(1198,"td",21)(1199,"em")(1200,"strong"),Jx(1201,"(opcional)"),sg()(),Sl(1202,"p"),Jx(1203,"R\xF3tulo exibido no bot\xE3o "),Sl(1204,"code"),Jx(1205,"Salvar e novo"),sg(),Jx(1206,"."),sg()()(),Sl(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),Jx(1211," registerNotFound"),Wl(1212,"br"),sg()()(),Sl(1213,"td",18)(1214,"code",24),Jx(1215,"string"),sg()(),Sl(1216,"td",21)(1217,"em")(1218,"strong"),Jx(1219,"(opcional)"),sg()(),Sl(1220,"p"),Jx(1221,"Texto exibido para resgistro n\xE3o encontrado."),sg()()(),Sl(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),Jx(1226," saveNotificationError"),Wl(1227,"br"),sg()()(),Sl(1228,"td",18)(1229,"code",24),Jx(1230,"string"),sg()(),Sl(1231,"td",21)(1232,"em")(1233,"strong"),Jx(1234,"(opcional)"),sg()(),Sl(1235,"p"),Jx(1236,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),sg()()(),Sl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),Jx(1241," saveNotificationSuccessSave"),Wl(1242,"br"),sg()()(),Sl(1243,"td",18)(1244,"code",24),Jx(1245,"string"),sg()(),Sl(1246,"td",21)(1247,"em")(1248,"strong"),Jx(1249,"(opcional)"),sg()(),Sl(1250,"p"),Jx(1251,"Texto exibido para recurso salvo com sucesso."),sg()()(),Sl(1252,"tr",14)(1253,"td",15)(1254,"div",16)(1255,"span",17),Jx(1256," saveNotificationSuccessUpdate"),Wl(1257,"br"),sg()()(),Sl(1258,"td",18)(1259,"code",24),Jx(1260,"string"),sg()(),Sl(1261,"td",21)(1262,"em")(1263,"strong"),Jx(1264,"(opcional)"),sg()(),Sl(1265,"p"),Jx(1266,"Texto exibido para recurso atualizado com sucesso."),sg()()(),Sl(1267,"tr",14)(1268,"td",15)(1269,"div",16)(1270,"span",17),Jx(1271," saveNotificationWarning"),Wl(1272,"br"),sg()()(),Sl(1273,"td",18)(1274,"code",24),Jx(1275,"string"),sg()(),Sl(1276,"td",21)(1277,"em")(1278,"strong"),Jx(1279,"(opcional)"),sg()(),Sl(1280,"p"),Jx(1281,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),sg()()()(),Sl(1282,"h4",34)(1283,"code",5),Jx(1284,"PoPageDynamicEditMetadata"),sg()(),Sl(1285,"div",2)(1286,"p"),Jx(1287,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),Wl(1288,"a",44),sg()(),Sl(1289,"h4",10),Jx(1290,"Propriedades"),sg(),Sl(1291,"table",11)(1292,"tr",12)(1293,"th",13),Jx(1294,"Nome"),sg(),Sl(1295,"th",13),Jx(1296,"Tipo"),sg(),Sl(1297,"th",13),Jx(1298,"Descri\xE7\xE3o"),sg()(),Sl(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),Jx(1303," actions"),Wl(1304,"br"),sg()()(),Sl(1305,"td",18)(1306,"code",19),Jx(1307,"PoPageDynamicEditActions"),sg()(),Sl(1308,"td",21)(1309,"em")(1310,"strong"),Jx(1311,"(opcional)"),sg()(),Sl(1312,"p"),Jx(1313,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),sg()()(),Sl(1314,"tr",14)(1315,"td",15)(1316,"div",16)(1317,"span",17),Jx(1318," autoRouter"),Wl(1319,"br"),sg()()(),Sl(1320,"td",18)(1321,"code",22),Jx(1322,"boolean"),sg()(),Sl(1323,"td",21)(1324,"em")(1325,"strong"),Jx(1326,"(opcional)"),sg()(),Sl(1327,"p"),Jx(1328,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),Sl(1329,"code"),Jx(1330,"p-actions"),sg()(),Sl(1331,"p"),Jx(1332,"As rotas criadas ser\xE3o baseadas na propriedade "),Sl(1333,"code"),Jx(1334,"p-actions"),sg(),Jx(1335,"."),sg(),Sl(1336,"blockquote")(1337,"p"),Jx(1338,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),Sl(1339,"code"),Jx(1340,"**"),sg(),Jx(1341,") especificada."),sg()()()(),Sl(1342,"tr",14)(1343,"td",15)(1344,"div",16)(1345,"span",17),Jx(1346," breadcrumb"),Wl(1347,"br"),sg()()(),Sl(1348,"td",18)(1349,"code",23),Jx(1350,"PoBreadcrumb"),sg()(),Sl(1351,"td",21)(1352,"em")(1353,"strong"),Jx(1354,"(opcional)"),sg()(),Sl(1355,"p"),Jx(1356,"Objeto com propriedades do breadcrumb."),sg()()(),Sl(1357,"tr",14)(1358,"td",15)(1359,"div",16)(1360,"span",17),Jx(1361," fields"),Wl(1362,"br"),sg()()(),Sl(1363,"td",18)(1364,"code",26),Jx(1365,"Array<PoPageDynamicEditField>"),sg()(),Sl(1366,"td",21)(1367,"em")(1368,"strong"),Jx(1369,"(opcional)"),sg()(),Sl(1370,"p"),Jx(1371,"Lista dos campos usados."),sg()()(),Sl(1372,"tr",14)(1373,"td",15)(1374,"div",16)(1375,"span",17),Jx(1376," title"),Wl(1377,"br"),sg()()(),Sl(1378,"td",18)(1379,"code",24),Jx(1380,"string"),sg()(),Sl(1381,"td",21)(1382,"em")(1383,"strong"),Jx(1384,"(opcional)"),sg()(),Sl(1385,"p"),Jx(1386,"T\xEDtulo da p\xE1gina."),sg()()(),Sl(1387,"tr",14)(1388,"td",15)(1389,"div",16)(1390,"span",17),Jx(1391," version"),Wl(1392,"br"),sg()()(),Sl(1393,"td",18)(1394,"code",45),Jx(1395,"number"),sg()(),Sl(1396,"td",21)(1397,"p"),Jx(1398,"Vers\xE3o do metadado devolvido pelo backend."),sg()()()(),Sl(1399,"h4",34)(1400,"code",5),Jx(1401,"PoPageDynamicEditOptions"),sg()(),Sl(1402,"div",2)(1403,"p"),Jx(1404,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),sg()(),Sl(1405,"h4",10),Jx(1406,"Propriedades"),sg(),Sl(1407,"table",11)(1408,"tr",12)(1409,"th",13),Jx(1410,"Nome"),sg(),Sl(1411,"th",13),Jx(1412,"Tipo"),sg(),Sl(1413,"th",13),Jx(1414,"Descri\xE7\xE3o"),sg()(),Sl(1415,"tr",14)(1416,"td",15)(1417,"div",16)(1418,"span",17),Jx(1419," actions"),Wl(1420,"br"),sg()()(),Sl(1421,"td",18)(1422,"code",19),Jx(1423,"PoPageDynamicEditActions"),sg()(),Sl(1424,"td",21)(1425,"em")(1426,"strong"),Jx(1427,"(opcional)"),sg()(),Sl(1428,"p"),Jx(1429,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),sg()()(),Sl(1430,"tr",14)(1431,"td",15)(1432,"div",16)(1433,"span",17),Jx(1434," breadcrumb"),Wl(1435,"br"),sg()()(),Sl(1436,"td",18)(1437,"code",23),Jx(1438,"PoBreadcrumb"),sg()(),Sl(1439,"td",21)(1440,"em")(1441,"strong"),Jx(1442,"(opcional)"),sg()(),Sl(1443,"p"),Jx(1444,"Objeto com propriedades do breadcrumb."),sg()()(),Sl(1445,"tr",14)(1446,"td",15)(1447,"div",16)(1448,"span",17),Jx(1449," fields"),Wl(1450,"br"),sg()()(),Sl(1451,"td",18)(1452,"code",26),Jx(1453,"Array<PoPageDynamicEditField>"),sg()(),Sl(1454,"td",21)(1455,"em")(1456,"strong"),Jx(1457,"(opcional)"),sg()(),Sl(1458,"p"),Jx(1459,"Lista dos campos usados."),sg()()(),Sl(1460,"tr",14)(1461,"td",15)(1462,"div",16)(1463,"span",17),Jx(1464," title"),Wl(1465,"br"),sg()()(),Sl(1466,"td",18)(1467,"code",24),Jx(1468,"string"),sg()(),Sl(1469,"td",21)(1470,"em")(1471,"strong"),Jx(1472,"(opcional)"),sg()(),Sl(1473,"p"),Jx(1474,"T\xEDtulo da p\xE1gina."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return d.changeTab("doc")}),Wl(3,"sample-po-page-dynamic-edit-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return d.changeTab("web")}),Wl(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),sg()()()),o&2&&(tw("p-actions",d.actions),Vp(2),tw("p-active",d.activeTab==="doc"),Vp(2),tw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[pNe,Gme,Qme,L,O,_],encapsulation:2})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(te),pL]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,U]})}return a})();export{fe as DocPoPageDynamicEditModule};