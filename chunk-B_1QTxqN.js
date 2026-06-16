import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,bJ as J1,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,as as $l,at as uo,au as fo,a3 as D3}from'./main-6SPFG3VI.js';var G=()=>({property:"id",label:"User ID"}),K=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:false,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&Ul(0,"po-page-dynamic-edit",0),o&2&&YE("p-fields",Jx(2,K,Qx(1,G)));},dependencies:[J1],encapsulation:2,changeDetection:1})}return a})();var Q=a=>({"docs-sample-code-tabs":a}),j=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Dynamic Edit Basic"),ng(),wl(4,"a",2),ut("click",function(){return d.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-dynamic-edit-basic"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+d.sampleCodeButtonIcon),Pp(),cg(" ",d.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Q,d.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,B],encapsulation:2})}return a})();var X=["dynamicEdit"],O=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:true,required:true},{property:"name",divider:"Personal data",required:true},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&$l(X,7),o&2){let u;uo(u=fo())&&(d.dynamicEdit=u.first);}},standalone:false,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&Ul(0,"po-page-dynamic-edit",1,0),o&2&&YE("p-auto-router",true)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi);},dependencies:[J1],encapsulation:2,changeDetection:1})}return a})();var $=a=>({"docs-sample-code-tabs":a}),_=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Page Dynamic Edit - User"),ng(),wl(4,"a",2),ut("click",function(){return d.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-dynamic-edit
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-page-dynamic-edit-user"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+d.sampleCodeButtonIcon),Pp(),cg(" ",d.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,$,d.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,O],encapsulation:2})}return a})();var R=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:false,decls:1475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do template do po-page-dynamic-detail."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoPageDynamicEditComponent"),ng()(),wl(12,"div",2)(13,"p"),Ux(14,"O "),wl(15,"code"),Ux(16,"po-page-dynamic-edit"),ng(),Ux(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),ng(),wl(18,"h3"),Ux(19,"Utiliza\xE7\xE3o via rota"),ng(),wl(20,"p"),Ux(21,"Ao utilizar as rotas para inicializar o template, o "),wl(22,"code"),Ux(23,"page-dynamic-edit"),ng(),Ux(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),ng(),wl(25,"p"),Ux(26,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(27,"p"),Ux(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),wl(29,"code"),Ux(30,"app-routing.module.ts"),ng()(),wl(31,"pre")(32,"code"),Ux(33,`const routes: Routes = [
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
`),ng()(),wl(34,"p"),Ux(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),ng(),wl(36,"p"),Ux(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),ng(),wl(38,"blockquote")(39,"p"),Ux(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),ng()(),wl(41,"p"),Ux(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),wl(43,"code"),Ux(44,"id"),ng(),Ux(45,":"),ng(),wl(46,"pre")(47,"code"),Ux(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),ng()(),wl(49,"p"),Ux(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),ng(),wl(51,"p"),Ux(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),wl(53,"a",6),Ux(54,"PoPageDynamicEditMetadata"),ng(),Ux(55,". Por exemplo:"),ng(),wl(56,"pre")(57,"code"),Ux(58,` {
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
`),ng()(),wl(59,"blockquote")(60,"p"),Ux(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),wl(62,"code"),Ux(63,"serviceApi"),ng(),Ux(64," da seguinte forma:"),ng()(),wl(65,"pre")(66,"code"),Ux(67,`GET {end-point}/metadata?type=edit&version={version}
`),ng()(),wl(68,"h4"),Ux(69,"Tokens customiz\xE1veis"),ng(),wl(70,"table")(71,"thead")(72,"tr")(73,"th"),Ux(74,"Propriedade"),ng(),wl(75,"th"),Ux(76,"Descri\xE7\xE3o"),ng(),wl(77,"th"),Ux(78,"Valor Padr\xE3o"),ng()()(),wl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),Ux(83,"Header"),ng()(),Ul(84,"td")(85,"td"),ng(),wl(86,"tr")(87,"td")(88,"code"),Ux(89,"--padding"),ng()(),wl(90,"td"),Ux(91,"Espa\xE7amento do header"),ng(),wl(92,"td")(93,"code"),Ux(94,"var(--spacing-xs) var(--spacing-md)"),ng()()(),wl(95,"tr")(96,"td")(97,"code"),Ux(98,"--gap"),ng()(),wl(99,"td"),Ux(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),ng(),wl(101,"td")(102,"code"),Ux(103,"var(--spacing-md)"),ng()()(),wl(104,"tr")(105,"td")(106,"code"),Ux(107,"--gap-actions"),ng()(),wl(108,"td"),Ux(109,"Espa\xE7amento entre as a\xE7\xF5es"),ng(),wl(110,"td")(111,"code"),Ux(112,"var(--spacing-xs)"),ng()()(),wl(113,"tr")(114,"td")(115,"code"),Ux(116,"--font-family"),ng()(),wl(117,"td"),Ux(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),ng(),wl(119,"td")(120,"code"),Ux(121,"var(--font-family-theme)"),ng()()(),wl(122,"tr")(123,"td")(124,"strong"),Ux(125,"Content"),ng()(),Ul(126,"td")(127,"td"),ng(),wl(128,"tr")(129,"td")(130,"code"),Ux(131,"--padding-content"),ng()(),wl(132,"td"),Ux(133,"Espa\xE7amento do conte\xFAdo"),ng(),wl(134,"td")(135,"code"),Ux(136,"var(--spacing-xs) var(--spacing-sm)"),ng()()()()()(),wl(137,"div",7)(138,"h4",8),Ux(139,"Seletor"),ng(),wl(140,"pre",9),Ux(141,`<po-page-dynamic-edit
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
`),ng()(),wl(142,"h4",10),Ux(143,"Propriedades"),ng(),wl(144,"table",11)(145,"tr",12)(146,"th",13),Ux(147,"Nome"),ng(),wl(148,"th",13),Ux(149,"Tipo"),ng(),wl(150,"th",13),Ux(151,"Padr\xE3o"),ng(),wl(152,"th",13),Ux(153,"Descri\xE7\xE3o"),ng()(),wl(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),Ux(158," p-actions"),Ul(159,"br"),ng()()(),wl(160,"td",18)(161,"code",19),Ux(162,"PoPageDynamicEditActions"),ng()(),wl(163,"td",20),Ux(164,"-"),ng(),wl(165,"td",21)(166,"em")(167,"strong"),Ux(168,"(opcional)"),ng()(),wl(169,"p"),Ux(170,"A\xE7\xF5es da p\xE1gina."),ng()()(),wl(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),Ux(175," p-auto-router"),Ul(176,"br"),ng()()(),wl(177,"td",18)(178,"code",22),Ux(179,"boolean"),ng()(),wl(180,"td",20)(181,"p"),Ux(182,"false"),ng()(),wl(183,"td",21)(184,"em")(185,"strong"),Ux(186,"(opcional)"),ng()(),wl(187,"p"),Ux(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),ng(),wl(189,"blockquote")(190,"p"),Ux(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),wl(192,"code"),Ux(193,"**"),ng(),Ux(194,") especificada."),ng()()()(),wl(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),Ux(199," p-breadcrumb"),Ul(200,"br"),ng()()(),wl(201,"td",18)(202,"code",23),Ux(203,"PoBreadcrumb"),ng()(),wl(204,"td",20),Ux(205,"-"),ng(),wl(206,"td",21)(207,"em")(208,"strong"),Ux(209,"(opcional)"),ng()(),wl(210,"p"),Ux(211,"Objeto com propriedades do breadcrumb."),ng()()(),wl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),Ux(216," p-components-size"),Ul(217,"br"),ng()()(),wl(218,"td",18)(219,"code",24),Ux(220,"string"),ng()(),wl(221,"td",20)(222,"p")(223,"code"),Ux(224,"medium"),ng()()(),wl(225,"td",21)(226,"em")(227,"strong"),Ux(228,"(opcional)"),ng()(),wl(229,"p"),Ux(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(231,"ul")(232,"li")(233,"code"),Ux(234,"small"),ng(),Ux(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(236,"li")(237,"code"),Ux(238,"medium"),ng(),Ux(239,": aplica a medida medium de cada componente."),ng()(),wl(240,"blockquote")(241,"p"),Ux(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(243,"code"),Ux(244,"medium"),ng(),Ux(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(246,"a",25),Ux(247,"po-theme"),ng(),Ux(248,"."),ng()()()(),wl(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),Ux(253," p-fields"),Ul(254,"br"),ng()()(),wl(255,"td",18)(256,"code",26),Ux(257,"Array<PoPageDynamicEditField>"),ng()(),wl(258,"td",20),Ux(259,"-"),ng(),wl(260,"td",21)(261,"p"),Ux(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),ng()()(),wl(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),Ux(267," p-literals"),Ul(268,"br"),ng()()(),wl(269,"td",18)(270,"code",27),Ux(271,"PoPageDynamicEditLiterals"),ng()(),wl(272,"td",20),Ux(273,"-"),ng(),wl(274,"td",21)(275,"em")(276,"strong"),Ux(277,"(opcional)"),ng()(),wl(278,"p"),Ux(279,"Objeto com as literais usadas no "),wl(280,"code"),Ux(281,"po-page-dynamic-edit"),ng(),Ux(282,"."),ng(),wl(283,"p"),Ux(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),ng(),wl(285,"pre")(286,"code"),Ux(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),ng()(),wl(288,"p"),Ux(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),ng(),wl(290,"pre")(291,"code"),Ux(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),ng()(),wl(293,"blockquote")(294,"p"),Ux(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),wl(296,"a",28)(297,"code"),Ux(298,"PoI18nService"),ng()(),Ux(299," ou "),wl(300,"em"),Ux(301,"browser"),ng(),Ux(302,"."),ng()()()(),wl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),Ux(307," p-notification-type"),Ul(308,"br"),ng()()(),wl(309,"td",18)(310,"code",24),Ux(311,"string"),ng()(),wl(312,"td",20)(313,"p"),Ux(314,"warning"),ng()(),wl(315,"td",21)(316,"em")(317,"strong"),Ux(318,"(opcional)"),ng()(),wl(319,"p"),Ux(320,"Tipo da notifica\xE7\xE3o."),ng(),wl(321,"p"),Ux(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),ng(),wl(323,"pre")(324,"code"),Ux(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),ng()(),wl(326,"blockquote")(327,"p"),Ux(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),ng()()()(),wl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),Ux(333," p-load"),Ul(334,"br"),ng()()(),wl(335,"td",18)(336,"code",24),Ux(337,"string "),ng(),wl(338,"code",29),Ux(339," (() => PoPageDynamicEditOptions)"),ng()(),wl(340,"td",20),Ux(341,"-"),ng(),wl(342,"td",21)(343,"p"),Ux(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),ng(),wl(345,"p"),Ux(346,"A propriedade aceita os seguintes tipos:"),ng(),wl(347,"ul")(348,"li")(349,"code"),Ux(350,"string"),ng(),Ux(351,": "),wl(352,"em"),Ux(353,"Endpoint"),ng(),Ux(354," usado pelo componente para requisi\xE7\xE3o via "),wl(355,"code"),Ux(356,"POST"),ng(),Ux(357,"."),ng(),wl(358,"li")(359,"code"),Ux(360,"function"),ng(),Ux(361,": M\xE9todo que ser\xE1 executado."),ng()(),wl(362,"p"),Ux(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),wl(364,"code"),Ux(365,"PoPageDynamicEditOptions"),ng(),Ux(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),ng(),wl(367,"p"),Ux(368,"Por exemplo:"),ng(),wl(369,"pre")(370,"code"),Ux(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),ng()(),wl(372,"p"),Ux(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),wl(374,"code"),Ux(375,"bind"),ng(),Ux(376,", por exemplo:"),ng(),wl(377,"pre")(378,"code"),Ux(379,`[p-load]="onLoadOptions.bind(this)"
`),ng()()()(),wl(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),Ux(384," p-load-data"),Ul(385,"br"),ng()()(),wl(386,"td",18)(387,"code",30),Ux(388,"unknown"),ng()(),wl(389,"td",20),Ux(390,"-"),ng(),wl(391,"td",21)(392,"em")(393,"strong"),Ux(394,"(opcional)"),ng()(),wl(395,"p"),Ux(396,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),ng(),wl(397,"p"),Ux(398,"A propriedade aceita os seguintes tipos:"),ng(),wl(399,"ul")(400,"li")(401,"code"),Ux(402,"function"),ng(),Ux(403,": M\xE9todo que ser\xE1 executado."),ng()(),wl(404,"p"),Ux(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),ng(),wl(406,"p"),Ux(407,"Por exemplo:"),ng(),wl(408,"pre")(409,"code"),Ux(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),ng()(),wl(411,"p"),Ux(412,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),wl(413,"code"),Ux(414,"bind"),ng(),Ux(415,", por exemplo:"),ng(),wl(416,"pre")(417,"code"),Ux(418,`[p-load-data]="onLoadCustom.bind(this)"
`),ng()()()(),wl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),Ux(423," p-service-api"),Ul(424,"br"),ng()()(),wl(425,"td",18)(426,"code",24),Ux(427,"string"),ng()(),wl(428,"td",20),Ux(429,"-"),ng(),wl(430,"td",21)(431,"p"),Ux(432,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),ng(),wl(433,"p"),Ux(434,"Para as a\xE7\xF5es de "),wl(435,"code"),Ux(436,"save"),ng(),Ux(437," e "),wl(438,"code"),Ux(439,"saveNew"),ng(),Ux(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),ng(),wl(441,"blockquote")(442,"p")(443,"code"),Ux(444,"POST {end-point}"),ng()()(),wl(445,"pre")(446,"code"),Ux(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),ng()(),wl(448,"p"),Ux(449,"Resquisi\xE7\xE3o disparada, onde a propriedade "),wl(450,"code"),Ux(451,"name"),ng(),Ux(452," e "),wl(453,"code"),Ux(454,"city"),ng(),Ux(455," foram preenchidas:"),ng(),wl(456,"pre")(457,"code"),Ux(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),ng()(),wl(459,"p"),Ux(460,"Request payload:"),ng(),wl(461,"pre")(462,"code"),Ux(463,`{ "name": "Fulano", "city": "Smallville" }
`),ng()(),wl(464,"p"),Ux(465,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),wl(466,"code"),Ux(467,"id"),ng(),Ux(468,"."),ng(),wl(469,"p"),Ux(470,"Exemplo de configura\xE7\xE3o de rota:"),ng(),wl(471,"pre")(472,"code"),Ux(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),ng()(),wl(474,"p"),Ux(475,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),ng(),wl(476,"blockquote")(477,"p")(478,"code"),Ux(479,"GET {end-point}/{id}"),ng()()(),wl(480,"p"),Ux(481,"Nos m\xE9todos de "),wl(482,"code"),Ux(483,"save"),ng(),Ux(484," e "),wl(485,"code"),Ux(486,"saveNew"),ng(),Ux(487,", ao inv\xE9s de um "),wl(488,"code"),Ux(489,"POST"),ng(),Ux(490,", ser\xE1 disparado um "),wl(491,"code"),Ux(492,"PUT"),ng(),Ux(493,"."),ng(),wl(494,"p"),Ux(495,"Resquisi\xE7\xE3o disparada, onde a propriedade "),wl(496,"code"),Ux(497,"name"),ng(),Ux(498," e "),wl(499,"code"),Ux(500,"city"),ng(),Ux(501," foram preenchidas / atualizadas, e o "),wl(502,"code"),Ux(503,"id"),ng(),Ux(504," da url \xE9 2:"),ng(),wl(505,"pre")(506,"code"),Ux(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),ng()(),wl(508,"p"),Ux(509,"Request payload:"),ng(),wl(510,"pre")(511,"code"),Ux(512,`{ "name": "Fulano", "city": "Metropolis" }
`),ng()()()(),wl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),Ux(517," p-title"),Ul(518,"br"),ng()()(),wl(519,"td",18)(520,"code",24),Ux(521,"string"),ng()(),wl(522,"td",20),Ux(523,"-"),ng(),wl(524,"td",21)(525,"p"),Ux(526,"T\xEDtulo da p\xE1gina."),ng()()()(),wl(527,"h3",10),Ux(528,"M\xE9todos"),ng(),wl(529,"table",31)(530,"tr",14)(531,"th",32)(532,"div",16)(533,"h4")(534,"span",17),Ux(535," showAdditionalHelp "),ng()()()()(),wl(536,"tr",21)(537,"td",21)(538,"p"),Ux(539,"M\xE9todo que exibe "),wl(540,"code"),Ux(541,"p-helper"),ng(),Ux(542," ou executa a a\xE7\xE3o definida em "),wl(543,"code"),Ux(544,"p-helper{eventOnClick}"),ng(),Ux(545," ou em "),wl(546,"code"),Ux(547,"p-additionalHelp"),ng(),Ux(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(549,"code"),Ux(550,"keydown"),ng(),Ux(551,"."),ng(),wl(552,"pre")(553,"code"),Ux(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),ng()()()()(),wl(555,"h5")(556,"b"),Ux(557,"Par\xE2metros"),ng()(),wl(558,"table",11)(559,"tr",12)(560,"th",13),Ux(561,"Nome"),ng(),wl(562,"th",13),Ux(563,"Tipo"),ng(),wl(564,"th",13),Ux(565,"Descri\xE7\xE3o"),ng()(),wl(566,"tr",14)(567,"td",15),Ux(568," property"),ng(),wl(569,"td",18)(570,"code",33),Ux(571," string "),ng()(),wl(572,"td",21)(573,"p"),Ux(574,"Identificador da coluna."),ng()()()(),Ul(575,"br"),wl(576,"h3"),Ux(577,"Interfaces"),ng(),wl(578,"h4",34)(579,"code",5),Ux(580,"PoPageDynamicEditActions"),ng()(),wl(581,"div",2)(582,"p"),Ux(583,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),ng()(),wl(584,"h4",10),Ux(585,"Propriedades"),ng(),wl(586,"table",11)(587,"tr",12)(588,"th",13),Ux(589,"Nome"),ng(),wl(590,"th",13),Ux(591,"Tipo"),ng(),wl(592,"th",13),Ux(593,"Descri\xE7\xE3o"),ng()(),wl(594,"tr",14)(595,"td",15)(596,"div",16)(597,"span",17),Ux(598," beforeCancel"),Ul(599,"br"),ng()()(),wl(600,"td",18)(601,"code",24),Ux(602,"string "),ng(),wl(603,"code",35),Ux(604," (() => PoPageDynamicEditBeforeCancel)"),ng()(),wl(605,"td",21)(606,"em")(607,"strong"),Ux(608,"(opcional)"),ng()(),wl(609,"p"),Ux(610,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),ng(),wl(611,"p"),Ux(612,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),wl(613,"code"),Ux(614,"PoPageDynamicEditBeforeCancel"),ng(),Ux(615,"."),ng(),wl(616,"blockquote")(617,"p"),Ux(618,"A url ser\xE1 chamada via POST"),ng()(),wl(619,"p"),Ux(620,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),wl(621,"strong"),Ux(622,"beforeCancel"),ng(),Ux(623,`
ou definir a mensagem no atributo `),wl(624,"code"),Ux(625,"_messages"),ng(),Ux(626,` na resposta da API conforme definido
em `),wl(627,"a",36),Ux(628,"Guia de implementa\xE7\xE3o de APIs"),ng()()()(),wl(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),Ux(633," beforeSave"),Ul(634,"br"),ng()()(),wl(635,"td",18)(636,"code",24),Ux(637,"string "),ng(),wl(638,"code",37),Ux(639," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),ng()(),wl(640,"td",21)(641,"em")(642,"strong"),Ux(643,"(opcional)"),ng()(),wl(644,"p"),Ux(645,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),ng(),wl(646,"p"),Ux(647,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),wl(648,"code"),Ux(649,"PoPageDynamicEditBeforeSave"),ng(),Ux(650,"."),ng(),wl(651,"blockquote")(652,"p"),Ux(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),wl(654,"code"),Ux(655,"POST {beforeSave}/{key}"),ng(),Ux(656,"."),ng()(),wl(657,"p"),Ux(658,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),wl(659,"strong"),Ux(660,"beforeSave"),ng(),Ux(661,`
ou definir a mensagem no atributo `),wl(662,"code"),Ux(663,"_messages"),ng(),Ux(664,` na resposta da API conforme definido
em `),wl(665,"a",36),Ux(666,"Guia de implementa\xE7\xE3o de APIs"),ng()()()(),wl(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),Ux(671," beforeSaveNew"),Ul(672,"br"),ng()()(),wl(673,"td",18)(674,"code",24),Ux(675,"string "),ng(),wl(676,"code",38),Ux(677," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),ng()(),wl(678,"td",21)(679,"em")(680,"strong"),Ux(681,"(opcional)"),ng()(),wl(682,"p"),Ux(683,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),ng(),wl(684,"p"),Ux(685,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),wl(686,"code"),Ux(687,"PoPageDynamicEditBeforeSaveNew"),ng(),Ux(688,"."),ng(),wl(689,"blockquote")(690,"p"),Ux(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),wl(692,"code"),Ux(693,"POST {beforeSave}/{key}"),ng(),Ux(694,"."),ng()(),wl(695,"p"),Ux(696,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),wl(697,"strong"),Ux(698,"beforeSaveNew"),ng(),Ux(699,`
ou definir a mensagem no atributo `),wl(700,"code"),Ux(701,"_messages"),ng(),Ux(702,` na resposta da API conforme definido
em `),wl(703,"a",36),Ux(704,"Guia de implementa\xE7\xE3o de APIs"),ng()()()(),wl(705,"tr",14)(706,"td",15)(707,"div",16)(708,"span",17),Ux(709," cancel"),Ul(710,"br"),ng()()(),wl(711,"td",18)(712,"code",24),Ux(713,"string "),ng(),wl(714,"code",22),Ux(715," boolean "),ng(),wl(716,"code",39),Ux(717," Function"),ng()(),wl(718,"td",21)(719,"em")(720,"strong"),Ux(721,"(opcional)"),ng()(),wl(722,"p"),Ux(723,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),wl(724,"code"),Ux(725,"navigator.back()"),ng(),Ux(726,"."),ng(),wl(727,"blockquote")(728,"p"),Ux(729,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),ng()(),wl(730,"blockquote")(731,"p"),Ux(732,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),wl(733,"code"),Ux(734,"false"),ng(),Ux(735,";"),ng()(),wl(736,"pre")(737,"code"),Ux(738,`actions = {
  cancel: '/'
};
`),ng()()()(),wl(739,"tr",14)(740,"td",15)(741,"div",16)(742,"span",17),Ux(743," save"),Ul(744,"br"),ng()()(),wl(745,"td",18)(746,"code",24),Ux(747,"string "),ng(),wl(748,"code",40),Ux(749," ((resource: any, id: string) => void)"),ng()(),wl(750,"td",21)(751,"em")(752,"strong"),Ux(753,"(opcional)"),ng()(),wl(754,"p"),Ux(755,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),ng(),wl(756,"p"),Ux(757,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),ng(),wl(758,"blockquote")(759,"p"),Ux(760,"A rota pode conter um par\xE2metro chamando id."),ng()(),wl(761,"pre")(762,"code"),Ux(763,`actions = {
  save: 'detail/:id'
};
`),ng()(),wl(764,"p"),Ux(765,"Se for passado um m\xE9todo:"),ng(),wl(766,"ul")(767,"li"),Ux(768,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),wl(769,"code"),Ux(770,"{ email: 'example@email.com' }"),ng(),Ux(771,"."),ng(),wl(772,"li"),Ux(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),ng()()()(),wl(774,"tr",14)(775,"td",15)(776,"div",16)(777,"span",17),Ux(778," saveNew"),Ul(779,"br"),ng()()(),wl(780,"td",18)(781,"code",24),Ux(782,"string "),ng(),wl(783,"code",41),Ux(784," ((resource: any, id?: string) => void)"),ng()(),wl(785,"td",21)(786,"em")(787,"strong"),Ux(788,"(opcional)"),ng()(),wl(789,"p"),Ux(790,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),ng(),wl(791,"p"),Ux(792,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),ng(),wl(793,"blockquote")(794,"p"),Ux(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),ng()(),wl(796,"pre")(797,"code"),Ux(798,`actions = {
  saveNew: 'new'
};
`),ng()(),wl(799,"p"),Ux(800,"A rota pode conter um par\xE2metro id."),ng(),wl(801,"pre")(802,"code"),Ux(803,`actions = {
  saveNew: 'edit/:id'
};
`),ng()(),wl(804,"p"),Ux(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),ng()()()(),wl(806,"h4",34)(807,"code",5),Ux(808,"PoPageDynamicEditBeforeCancel"),ng()(),wl(809,"div",2)(810,"p"),Ux(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),wl(812,"code"),Ux(813,"beforeCancel"),ng(),Ux(814,"."),ng()(),wl(815,"h4",10),Ux(816,"Propriedades"),ng(),wl(817,"table",11)(818,"tr",12)(819,"th",13),Ux(820,"Nome"),ng(),wl(821,"th",13),Ux(822,"Tipo"),ng(),wl(823,"th",13),Ux(824,"Descri\xE7\xE3o"),ng()(),wl(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),Ux(829," allowAction"),Ul(830,"br"),ng()()(),wl(831,"td",18)(832,"code",22),Ux(833,"boolean"),ng()(),wl(834,"td",21)(835,"em")(836,"strong"),Ux(837,"(opcional)"),ng()(),wl(838,"p"),Ux(839,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),ng()()(),wl(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),Ux(844," newUrl"),Ul(845,"br"),ng()()(),wl(846,"td",18)(847,"code",24),Ux(848,"string"),ng()(),wl(849,"td",21)(850,"em")(851,"strong"),Ux(852,"(opcional)"),ng()(),wl(853,"p"),Ux(854,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),wl(855,"code"),Ux(856,"cancel"),ng(),Ux(857,"."),ng()()()(),wl(858,"h4",34)(859,"code",5),Ux(860,"PoPageDynamicEditBeforeSaveNew"),ng()(),wl(861,"div",2)(862,"p"),Ux(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),wl(864,"code"),Ux(865,"beforeSaveNew"),ng(),Ux(866,"."),ng()(),wl(867,"h4",10),Ux(868,"Propriedades"),ng(),wl(869,"table",11)(870,"tr",12)(871,"th",13),Ux(872,"Nome"),ng(),wl(873,"th",13),Ux(874,"Tipo"),ng(),wl(875,"th",13),Ux(876,"Descri\xE7\xE3o"),ng()(),wl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),Ux(881," allowAction"),Ul(882,"br"),ng()()(),wl(883,"td",18)(884,"code",22),Ux(885,"boolean"),ng()(),wl(886,"td",21)(887,"em")(888,"strong"),Ux(889,"(opcional)"),ng()(),wl(890,"p"),Ux(891,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),ng()()(),wl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),Ux(896," newUrl"),Ul(897,"br"),ng()()(),wl(898,"td",18)(899,"code",24),Ux(900,"string"),ng()(),wl(901,"td",21)(902,"em")(903,"strong"),Ux(904,"(opcional)"),ng()(),wl(905,"p"),Ux(906,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),wl(907,"code"),Ux(908,"saveNew"),ng(),Ux(909,"."),ng()()(),wl(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),Ux(914," resource"),Ul(915,"br"),ng()()(),wl(916,"td",18)(917,"code",42),Ux(918,"any"),ng()(),wl(919,"td",21)(920,"em")(921,"strong"),Ux(922,"(opcional)"),ng()(),wl(923,"p"),Ux(924,"Recurso atualizado."),ng(),wl(925,"p"),Ux(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),wl(927,"code"),Ux(928,"key: true"),ng(),Ux(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),ng(),wl(930,"ul")(931,"li")(932,"p"),Ux(933,"recurso anterior com a propriedade id foi que definida como "),wl(934,"em"),Ux(935,"key"),ng(),Ux(936,":"),ng(),wl(937,"pre")(938,"code"),Ux(939,`{ id: 1, name: 'Ane' }
`),ng()()(),wl(940,"li")(941,"p"),Ux(942,"recurso retornado no "),wl(943,"code"),Ux(944,"beforeSaveNew"),ng(),Ux(945,":"),ng(),wl(946,"pre")(947,"code"),Ux(948,`{ id: 50, age: 23 }
`),ng()()(),wl(949,"li")(950,"p"),Ux(951,"Mesclagem do recurso:"),ng(),wl(952,"pre")(953,"code"),Ux(954,`{ id: 1, name: 'Ane', age: 23 }
`),ng()()()(),wl(955,"blockquote")(956,"p"),Ux(957,"Caso "),wl(958,"code"),Ux(959,"allowAction"),ng(),Ux(960," seja "),wl(961,"code"),Ux(962,"false"),ng(),Ux(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),ng()()()()(),wl(964,"h4",34)(965,"code",5),Ux(966,"PoPageDynamicEditBeforeSave"),ng()(),wl(967,"div",2)(968,"p"),Ux(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),wl(970,"code"),Ux(971,"beforeSave"),ng(),Ux(972,"."),ng()(),wl(973,"h4",10),Ux(974,"Propriedades"),ng(),wl(975,"table",11)(976,"tr",12)(977,"th",13),Ux(978,"Nome"),ng(),wl(979,"th",13),Ux(980,"Tipo"),ng(),wl(981,"th",13),Ux(982,"Descri\xE7\xE3o"),ng()(),wl(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),Ux(987," allowAction"),Ul(988,"br"),ng()()(),wl(989,"td",18)(990,"code",22),Ux(991,"boolean"),ng()(),wl(992,"td",21)(993,"em")(994,"strong"),Ux(995,"(opcional)"),ng()(),wl(996,"p"),Ux(997,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),ng()()(),wl(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),Ux(1002," newUrl"),Ul(1003,"br"),ng()()(),wl(1004,"td",18)(1005,"code",24),Ux(1006,"string"),ng()(),wl(1007,"td",21)(1008,"em")(1009,"strong"),Ux(1010,"(opcional)"),ng()(),wl(1011,"p"),Ux(1012,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),wl(1013,"code"),Ux(1014,"save"),ng(),Ux(1015,"."),ng()()(),wl(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),Ux(1020," resource"),Ul(1021,"br"),ng()()(),wl(1022,"td",18)(1023,"code",42),Ux(1024,"any"),ng()(),wl(1025,"td",21)(1026,"em")(1027,"strong"),Ux(1028,"(opcional)"),ng()(),wl(1029,"p"),Ux(1030,"Recurso atualizado."),ng(),wl(1031,"p"),Ux(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),ng(),wl(1033,"ul")(1034,"li")(1035,"p"),Ux(1036,"recurso anterior:"),ng(),wl(1037,"pre")(1038,"code"),Ux(1039,`{ name: 'Ane' }
`),ng()()(),wl(1040,"li")(1041,"p"),Ux(1042,"recurso retornado no "),wl(1043,"code"),Ux(1044,"beforeSave"),ng(),Ux(1045,":"),ng(),wl(1046,"pre")(1047,"code"),Ux(1048,`{ age: 23 }
`),ng()()(),wl(1049,"li")(1050,"p"),Ux(1051,"Mesclagem do recurso:"),ng(),wl(1052,"pre")(1053,"code"),Ux(1054,`{ name: 'Ane', age: 23 }
`),ng()()()(),wl(1055,"blockquote")(1056,"p"),Ux(1057,"Caso "),wl(1058,"code"),Ux(1059,"allowAction"),ng(),Ux(1060," seja "),wl(1061,"code"),Ux(1062,"false"),ng(),Ux(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),ng()()()()(),wl(1064,"h4",34)(1065,"code",5),Ux(1066,"PoPageDynamicEditField"),ng()(),wl(1067,"div",2)(1068,"p"),Ux(1069,"Interface dos fields usados para compor o template "),wl(1070,"code"),Ux(1071,"po-page-dynamic-edit"),ng(),Ux(1072,`.
Herda as defini\xE7\xF5es da interface
`),wl(1073,"a",43),Ux(1074,"PoDynamicFormField"),ng(),Ux(1075,"."),ng()(),wl(1076,"h4",10),Ux(1077,"Propriedades"),ng(),wl(1078,"table",11)(1079,"tr",12)(1080,"th",13),Ux(1081,"Nome"),ng(),wl(1082,"th",13),Ux(1083,"Tipo"),ng(),wl(1084,"th",13),Ux(1085,"Descri\xE7\xE3o"),ng()(),wl(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),Ux(1090," duplicate"),Ul(1091,"br"),ng()()(),wl(1092,"td",18)(1093,"code",22),Ux(1094,"boolean"),ng()(),wl(1095,"td",21)(1096,"em")(1097,"strong"),Ux(1098,"(opcional)"),ng()(),wl(1099,"p"),Ux(1100,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),ng()()()(),wl(1101,"h4",34)(1102,"code",5),Ux(1103,"PoPageDynamicEditLiterals"),ng()(),wl(1104,"div",2)(1105,"p"),Ux(1106,"Interface para defini\xE7\xE3o das literais usadas no "),wl(1107,"code"),Ux(1108,"po-page-dynamic-edit"),ng(),Ux(1109,"."),ng()(),wl(1110,"h4",10),Ux(1111,"Propriedades"),ng(),wl(1112,"table",11)(1113,"tr",12)(1114,"th",13),Ux(1115,"Nome"),ng(),wl(1116,"th",13),Ux(1117,"Tipo"),ng(),wl(1118,"th",13),Ux(1119,"Descri\xE7\xE3o"),ng()(),wl(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),Ux(1124," cancelConfirmMessage"),Ul(1125,"br"),ng()()(),wl(1126,"td",18)(1127,"code",24),Ux(1128,"string"),ng()(),wl(1129,"td",21)(1130,"em")(1131,"strong"),Ux(1132,"(opcional)"),ng()(),wl(1133,"p"),Ux(1134,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),ng()()(),wl(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),Ux(1139," detailActionNew"),Ul(1140,"br"),ng()()(),wl(1141,"td",18)(1142,"code",24),Ux(1143,"string"),ng()(),wl(1144,"td",21)(1145,"em")(1146,"strong"),Ux(1147,"(opcional)"),ng()(),wl(1148,"p"),Ux(1149,"R\xF3tulo exibido no bot\xE3o "),wl(1150,"code"),Ux(1151,"Novo"),ng(),Ux(1152,"."),ng()()(),wl(1153,"tr",14)(1154,"td",15)(1155,"div",16)(1156,"span",17),Ux(1157," pageActionCancel"),Ul(1158,"br"),ng()()(),wl(1159,"td",18)(1160,"code",24),Ux(1161,"string"),ng()(),wl(1162,"td",21)(1163,"em")(1164,"strong"),Ux(1165,"(opcional)"),ng()(),wl(1166,"p"),Ux(1167,"R\xF3tulo exibido no bot\xE3o "),wl(1168,"code"),Ux(1169,"Cancelar"),ng(),Ux(1170,"."),ng()()(),wl(1171,"tr",14)(1172,"td",15)(1173,"div",16)(1174,"span",17),Ux(1175," pageActionSave"),Ul(1176,"br"),ng()()(),wl(1177,"td",18)(1178,"code",24),Ux(1179,"string"),ng()(),wl(1180,"td",21)(1181,"em")(1182,"strong"),Ux(1183,"(opcional)"),ng()(),wl(1184,"p"),Ux(1185,"R\xF3tulo exibido no bot\xE3o "),wl(1186,"code"),Ux(1187,"Salvar"),ng(),Ux(1188,"."),ng()()(),wl(1189,"tr",14)(1190,"td",15)(1191,"div",16)(1192,"span",17),Ux(1193," pageActionSaveNew"),Ul(1194,"br"),ng()()(),wl(1195,"td",18)(1196,"code",24),Ux(1197,"string"),ng()(),wl(1198,"td",21)(1199,"em")(1200,"strong"),Ux(1201,"(opcional)"),ng()(),wl(1202,"p"),Ux(1203,"R\xF3tulo exibido no bot\xE3o "),wl(1204,"code"),Ux(1205,"Salvar e novo"),ng(),Ux(1206,"."),ng()()(),wl(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),Ux(1211," registerNotFound"),Ul(1212,"br"),ng()()(),wl(1213,"td",18)(1214,"code",24),Ux(1215,"string"),ng()(),wl(1216,"td",21)(1217,"em")(1218,"strong"),Ux(1219,"(opcional)"),ng()(),wl(1220,"p"),Ux(1221,"Texto exibido para resgistro n\xE3o encontrado."),ng()()(),wl(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),Ux(1226," saveNotificationError"),Ul(1227,"br"),ng()()(),wl(1228,"td",18)(1229,"code",24),Ux(1230,"string"),ng()(),wl(1231,"td",21)(1232,"em")(1233,"strong"),Ux(1234,"(opcional)"),ng()(),wl(1235,"p"),Ux(1236,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),ng()()(),wl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),Ux(1241," saveNotificationSuccessSave"),Ul(1242,"br"),ng()()(),wl(1243,"td",18)(1244,"code",24),Ux(1245,"string"),ng()(),wl(1246,"td",21)(1247,"em")(1248,"strong"),Ux(1249,"(opcional)"),ng()(),wl(1250,"p"),Ux(1251,"Texto exibido para recurso salvo com sucesso."),ng()()(),wl(1252,"tr",14)(1253,"td",15)(1254,"div",16)(1255,"span",17),Ux(1256," saveNotificationSuccessUpdate"),Ul(1257,"br"),ng()()(),wl(1258,"td",18)(1259,"code",24),Ux(1260,"string"),ng()(),wl(1261,"td",21)(1262,"em")(1263,"strong"),Ux(1264,"(opcional)"),ng()(),wl(1265,"p"),Ux(1266,"Texto exibido para recurso atualizado com sucesso."),ng()()(),wl(1267,"tr",14)(1268,"td",15)(1269,"div",16)(1270,"span",17),Ux(1271," saveNotificationWarning"),Ul(1272,"br"),ng()()(),wl(1273,"td",18)(1274,"code",24),Ux(1275,"string"),ng()(),wl(1276,"td",21)(1277,"em")(1278,"strong"),Ux(1279,"(opcional)"),ng()(),wl(1280,"p"),Ux(1281,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),ng()()()(),wl(1282,"h4",34)(1283,"code",5),Ux(1284,"PoPageDynamicEditMetadata"),ng()(),wl(1285,"div",2)(1286,"p"),Ux(1287,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),Ul(1288,"a",44),ng()(),wl(1289,"h4",10),Ux(1290,"Propriedades"),ng(),wl(1291,"table",11)(1292,"tr",12)(1293,"th",13),Ux(1294,"Nome"),ng(),wl(1295,"th",13),Ux(1296,"Tipo"),ng(),wl(1297,"th",13),Ux(1298,"Descri\xE7\xE3o"),ng()(),wl(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),Ux(1303," actions"),Ul(1304,"br"),ng()()(),wl(1305,"td",18)(1306,"code",19),Ux(1307,"PoPageDynamicEditActions"),ng()(),wl(1308,"td",21)(1309,"em")(1310,"strong"),Ux(1311,"(opcional)"),ng()(),wl(1312,"p"),Ux(1313,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),ng()()(),wl(1314,"tr",14)(1315,"td",15)(1316,"div",16)(1317,"span",17),Ux(1318," autoRouter"),Ul(1319,"br"),ng()()(),wl(1320,"td",18)(1321,"code",22),Ux(1322,"boolean"),ng()(),wl(1323,"td",21)(1324,"em")(1325,"strong"),Ux(1326,"(opcional)"),ng()(),wl(1327,"p"),Ux(1328,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),wl(1329,"code"),Ux(1330,"p-actions"),ng()(),wl(1331,"p"),Ux(1332,"As rotas criadas ser\xE3o baseadas na propriedade "),wl(1333,"code"),Ux(1334,"p-actions"),ng(),Ux(1335,"."),ng(),wl(1336,"blockquote")(1337,"p"),Ux(1338,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),wl(1339,"code"),Ux(1340,"**"),ng(),Ux(1341,") especificada."),ng()()()(),wl(1342,"tr",14)(1343,"td",15)(1344,"div",16)(1345,"span",17),Ux(1346," breadcrumb"),Ul(1347,"br"),ng()()(),wl(1348,"td",18)(1349,"code",23),Ux(1350,"PoBreadcrumb"),ng()(),wl(1351,"td",21)(1352,"em")(1353,"strong"),Ux(1354,"(opcional)"),ng()(),wl(1355,"p"),Ux(1356,"Objeto com propriedades do breadcrumb."),ng()()(),wl(1357,"tr",14)(1358,"td",15)(1359,"div",16)(1360,"span",17),Ux(1361," fields"),Ul(1362,"br"),ng()()(),wl(1363,"td",18)(1364,"code",26),Ux(1365,"Array<PoPageDynamicEditField>"),ng()(),wl(1366,"td",21)(1367,"em")(1368,"strong"),Ux(1369,"(opcional)"),ng()(),wl(1370,"p"),Ux(1371,"Lista dos campos usados."),ng()()(),wl(1372,"tr",14)(1373,"td",15)(1374,"div",16)(1375,"span",17),Ux(1376," title"),Ul(1377,"br"),ng()()(),wl(1378,"td",18)(1379,"code",24),Ux(1380,"string"),ng()(),wl(1381,"td",21)(1382,"em")(1383,"strong"),Ux(1384,"(opcional)"),ng()(),wl(1385,"p"),Ux(1386,"T\xEDtulo da p\xE1gina."),ng()()(),wl(1387,"tr",14)(1388,"td",15)(1389,"div",16)(1390,"span",17),Ux(1391," version"),Ul(1392,"br"),ng()()(),wl(1393,"td",18)(1394,"code",45),Ux(1395,"number"),ng()(),wl(1396,"td",21)(1397,"p"),Ux(1398,"Vers\xE3o do metadado devolvido pelo backend."),ng()()()(),wl(1399,"h4",34)(1400,"code",5),Ux(1401,"PoPageDynamicEditOptions"),ng()(),wl(1402,"div",2)(1403,"p"),Ux(1404,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),ng()(),wl(1405,"h4",10),Ux(1406,"Propriedades"),ng(),wl(1407,"table",11)(1408,"tr",12)(1409,"th",13),Ux(1410,"Nome"),ng(),wl(1411,"th",13),Ux(1412,"Tipo"),ng(),wl(1413,"th",13),Ux(1414,"Descri\xE7\xE3o"),ng()(),wl(1415,"tr",14)(1416,"td",15)(1417,"div",16)(1418,"span",17),Ux(1419," actions"),Ul(1420,"br"),ng()()(),wl(1421,"td",18)(1422,"code",19),Ux(1423,"PoPageDynamicEditActions"),ng()(),wl(1424,"td",21)(1425,"em")(1426,"strong"),Ux(1427,"(opcional)"),ng()(),wl(1428,"p"),Ux(1429,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),ng()()(),wl(1430,"tr",14)(1431,"td",15)(1432,"div",16)(1433,"span",17),Ux(1434," breadcrumb"),Ul(1435,"br"),ng()()(),wl(1436,"td",18)(1437,"code",23),Ux(1438,"PoBreadcrumb"),ng()(),wl(1439,"td",21)(1440,"em")(1441,"strong"),Ux(1442,"(opcional)"),ng()(),wl(1443,"p"),Ux(1444,"Objeto com propriedades do breadcrumb."),ng()()(),wl(1445,"tr",14)(1446,"td",15)(1447,"div",16)(1448,"span",17),Ux(1449," fields"),Ul(1450,"br"),ng()()(),wl(1451,"td",18)(1452,"code",26),Ux(1453,"Array<PoPageDynamicEditField>"),ng()(),wl(1454,"td",21)(1455,"em")(1456,"strong"),Ux(1457,"(opcional)"),ng()(),wl(1458,"p"),Ux(1459,"Lista dos campos usados."),ng()()(),wl(1460,"tr",14)(1461,"td",15)(1462,"div",16)(1463,"span",17),Ux(1464," title"),Ul(1465,"br"),ng()()(),wl(1466,"td",18)(1467,"code",24),Ux(1468,"string"),ng()(),wl(1469,"td",21)(1470,"em")(1471,"strong"),Ux(1472,"(opcional)"),ng()(),wl(1473,"p"),Ux(1474,"T\xEDtulo da p\xE1gina."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var U=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return d.changeTab("doc")}),Ul(3,"sample-po-page-dynamic-edit-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return d.changeTab("web")}),Ul(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),ng()()()),o&2&&(YE("p-actions",d.actions),Pp(2),YE("p-active",d.activeTab==="doc"),Pp(2),YE("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[D3,Vd,Rd,j,_,R],encapsulation:2})}return a})();var ie=[{path:"",component:U}],H=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[vL.forChild(ie),vL]})}return a})();var Pe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe({type:a});static \u0275inj=ue({imports:[u5,H]})}return a})();export{Pe as DocPoPageDynamicEditModule};