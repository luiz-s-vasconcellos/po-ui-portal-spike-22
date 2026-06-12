import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,ck as zr,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,av as zl,aw as uo,ax as fo,a3 as SNe}from'./main-OS7VVRJY.js';var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:false,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&Hl(0,"po-page-dynamic-edit",0),o&2&&ZE("p-fields",oN(2,G,iN(1,V)));},dependencies:[zr],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Dynamic Edit Basic"),og(),Cl(4,"a",2),dt("click",function(){return d.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-dynamic-edit-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+d.sampleCodeButtonIcon),Lp(),dg(" ",d.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,W,d.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,B],encapsulation:2})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:true,required:true},{property:"name",divider:"Personal data",required:true},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&zl(J,7),o&2){let u;uo(u=fo())&&(d.dynamicEdit=u.first);}},standalone:false,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&Hl(0,"po-page-dynamic-edit",1,0),o&2&&ZE("p-auto-router",true)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi);},dependencies:[zr],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Page Dynamic Edit - User"),og(),Cl(4,"a",2),dt("click",function(){return d.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-dynamic-edit
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-page-dynamic-edit-user"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+d.sampleCodeButtonIcon),Lp(),dg(" ",d.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Z,d.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,j],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:false,decls:1475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do template do po-page-dynamic-detail."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoPageDynamicEditComponent"),og()(),Cl(12,"div",2)(13,"p"),qx(14,"O "),Cl(15,"code"),qx(16,"po-page-dynamic-edit"),og(),qx(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),og(),Cl(18,"h3"),qx(19,"Utiliza\xE7\xE3o via rota"),og(),Cl(20,"p"),qx(21,"Ao utilizar as rotas para inicializar o template, o "),Cl(22,"code"),qx(23,"page-dynamic-edit"),og(),qx(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),og(),Cl(25,"p"),qx(26,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(27,"p"),qx(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),Cl(29,"code"),qx(30,"app-routing.module.ts"),og()(),Cl(31,"pre")(32,"code"),qx(33,`const routes: Routes = [
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
`),og()(),Cl(34,"p"),qx(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),og(),Cl(36,"p"),qx(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),og(),Cl(38,"blockquote")(39,"p"),qx(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),og()(),Cl(41,"p"),qx(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),Cl(43,"code"),qx(44,"id"),og(),qx(45,":"),og(),Cl(46,"pre")(47,"code"),qx(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),og()(),Cl(49,"p"),qx(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),og(),Cl(51,"p"),qx(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Cl(53,"a",6),qx(54,"PoPageDynamicEditMetadata"),og(),qx(55,". Por exemplo:"),og(),Cl(56,"pre")(57,"code"),qx(58,` {
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
`),og()(),Cl(59,"blockquote")(60,"p"),qx(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),Cl(62,"code"),qx(63,"serviceApi"),og(),qx(64," da seguinte forma:"),og()(),Cl(65,"pre")(66,"code"),qx(67,`GET {end-point}/metadata?type=edit&version={version}
`),og()(),Cl(68,"h4"),qx(69,"Tokens customiz\xE1veis"),og(),Cl(70,"table")(71,"thead")(72,"tr")(73,"th"),qx(74,"Propriedade"),og(),Cl(75,"th"),qx(76,"Descri\xE7\xE3o"),og(),Cl(77,"th"),qx(78,"Valor Padr\xE3o"),og()()(),Cl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),qx(83,"Header"),og()(),Hl(84,"td")(85,"td"),og(),Cl(86,"tr")(87,"td")(88,"code"),qx(89,"--padding"),og()(),Cl(90,"td"),qx(91,"Espa\xE7amento do header"),og(),Cl(92,"td")(93,"code"),qx(94,"var(--spacing-xs) var(--spacing-md)"),og()()(),Cl(95,"tr")(96,"td")(97,"code"),qx(98,"--gap"),og()(),Cl(99,"td"),qx(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),og(),Cl(101,"td")(102,"code"),qx(103,"var(--spacing-md)"),og()()(),Cl(104,"tr")(105,"td")(106,"code"),qx(107,"--gap-actions"),og()(),Cl(108,"td"),qx(109,"Espa\xE7amento entre as a\xE7\xF5es"),og(),Cl(110,"td")(111,"code"),qx(112,"var(--spacing-xs)"),og()()(),Cl(113,"tr")(114,"td")(115,"code"),qx(116,"--font-family"),og()(),Cl(117,"td"),qx(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),og(),Cl(119,"td")(120,"code"),qx(121,"var(--font-family-theme)"),og()()(),Cl(122,"tr")(123,"td")(124,"strong"),qx(125,"Content"),og()(),Hl(126,"td")(127,"td"),og(),Cl(128,"tr")(129,"td")(130,"code"),qx(131,"--padding-content"),og()(),Cl(132,"td"),qx(133,"Espa\xE7amento do conte\xFAdo"),og(),Cl(134,"td")(135,"code"),qx(136,"var(--spacing-xs) var(--spacing-sm)"),og()()()()()(),Cl(137,"div",7)(138,"h4",8),qx(139,"Seletor"),og(),Cl(140,"pre",9),qx(141,`<po-page-dynamic-edit
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
`),og()(),Cl(142,"h4",10),qx(143,"Propriedades"),og(),Cl(144,"table",11)(145,"tr",12)(146,"th",13),qx(147,"Nome"),og(),Cl(148,"th",13),qx(149,"Tipo"),og(),Cl(150,"th",13),qx(151,"Padr\xE3o"),og(),Cl(152,"th",13),qx(153,"Descri\xE7\xE3o"),og()(),Cl(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),qx(158," p-actions"),Hl(159,"br"),og()()(),Cl(160,"td",18)(161,"code",19),qx(162,"PoPageDynamicEditActions"),og()(),Cl(163,"td",20),qx(164,"-"),og(),Cl(165,"td",21)(166,"em")(167,"strong"),qx(168,"(opcional)"),og()(),Cl(169,"p"),qx(170,"A\xE7\xF5es da p\xE1gina."),og()()(),Cl(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),qx(175," p-auto-router"),Hl(176,"br"),og()()(),Cl(177,"td",18)(178,"code",22),qx(179,"boolean"),og()(),Cl(180,"td",20)(181,"p"),qx(182,"false"),og()(),Cl(183,"td",21)(184,"em")(185,"strong"),qx(186,"(opcional)"),og()(),Cl(187,"p"),qx(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),og(),Cl(189,"blockquote")(190,"p"),qx(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),Cl(192,"code"),qx(193,"**"),og(),qx(194,") especificada."),og()()()(),Cl(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),qx(199," p-breadcrumb"),Hl(200,"br"),og()()(),Cl(201,"td",18)(202,"code",23),qx(203,"PoBreadcrumb"),og()(),Cl(204,"td",20),qx(205,"-"),og(),Cl(206,"td",21)(207,"em")(208,"strong"),qx(209,"(opcional)"),og()(),Cl(210,"p"),qx(211,"Objeto com propriedades do breadcrumb."),og()()(),Cl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),qx(216," p-components-size"),Hl(217,"br"),og()()(),Cl(218,"td",18)(219,"code",24),qx(220,"string"),og()(),Cl(221,"td",20)(222,"p")(223,"code"),qx(224,"medium"),og()()(),Cl(225,"td",21)(226,"em")(227,"strong"),qx(228,"(opcional)"),og()(),Cl(229,"p"),qx(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(231,"ul")(232,"li")(233,"code"),qx(234,"small"),og(),qx(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(236,"li")(237,"code"),qx(238,"medium"),og(),qx(239,": aplica a medida medium de cada componente."),og()(),Cl(240,"blockquote")(241,"p"),qx(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(243,"code"),qx(244,"medium"),og(),qx(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(246,"a",25),qx(247,"po-theme"),og(),qx(248,"."),og()()()(),Cl(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),qx(253," p-fields"),Hl(254,"br"),og()()(),Cl(255,"td",18)(256,"code",26),qx(257,"Array<PoPageDynamicEditField>"),og()(),Cl(258,"td",20),qx(259,"-"),og(),Cl(260,"td",21)(261,"p"),qx(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),og()()(),Cl(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),qx(267," p-literals"),Hl(268,"br"),og()()(),Cl(269,"td",18)(270,"code",27),qx(271,"PoPageDynamicEditLiterals"),og()(),Cl(272,"td",20),qx(273,"-"),og(),Cl(274,"td",21)(275,"em")(276,"strong"),qx(277,"(opcional)"),og()(),Cl(278,"p"),qx(279,"Objeto com as literais usadas no "),Cl(280,"code"),qx(281,"po-page-dynamic-edit"),og(),qx(282,"."),og(),Cl(283,"p"),qx(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),og(),Cl(285,"pre")(286,"code"),qx(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),og()(),Cl(288,"p"),qx(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),og(),Cl(290,"pre")(291,"code"),qx(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),og()(),Cl(293,"blockquote")(294,"p"),qx(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Cl(296,"a",28)(297,"code"),qx(298,"PoI18nService"),og()(),qx(299," ou "),Cl(300,"em"),qx(301,"browser"),og(),qx(302,"."),og()()()(),Cl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),qx(307," p-notification-type"),Hl(308,"br"),og()()(),Cl(309,"td",18)(310,"code",24),qx(311,"string"),og()(),Cl(312,"td",20)(313,"p"),qx(314,"warning"),og()(),Cl(315,"td",21)(316,"em")(317,"strong"),qx(318,"(opcional)"),og()(),Cl(319,"p"),qx(320,"Tipo da notifica\xE7\xE3o."),og(),Cl(321,"p"),qx(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),og(),Cl(323,"pre")(324,"code"),qx(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),og()(),Cl(326,"blockquote")(327,"p"),qx(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),og()()()(),Cl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),qx(333," p-load"),Hl(334,"br"),og()()(),Cl(335,"td",18)(336,"code",24),qx(337,"string "),og(),Cl(338,"code",29),qx(339," (() => PoPageDynamicEditOptions)"),og()(),Cl(340,"td",20),qx(341,"-"),og(),Cl(342,"td",21)(343,"p"),qx(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og(),Cl(345,"p"),qx(346,"A propriedade aceita os seguintes tipos:"),og(),Cl(347,"ul")(348,"li")(349,"code"),qx(350,"string"),og(),qx(351,": "),Cl(352,"em"),qx(353,"Endpoint"),og(),qx(354," usado pelo componente para requisi\xE7\xE3o via "),Cl(355,"code"),qx(356,"POST"),og(),qx(357,"."),og(),Cl(358,"li")(359,"code"),qx(360,"function"),og(),qx(361,": M\xE9todo que ser\xE1 executado."),og()(),Cl(362,"p"),qx(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Cl(364,"code"),qx(365,"PoPageDynamicEditOptions"),og(),qx(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),og(),Cl(367,"p"),qx(368,"Por exemplo:"),og(),Cl(369,"pre")(370,"code"),qx(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),og()(),Cl(372,"p"),qx(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Cl(374,"code"),qx(375,"bind"),og(),qx(376,", por exemplo:"),og(),Cl(377,"pre")(378,"code"),qx(379,`[p-load]="onLoadOptions.bind(this)"
`),og()()()(),Cl(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),qx(384," p-load-data"),Hl(385,"br"),og()()(),Cl(386,"td",18)(387,"code",30),qx(388,"unknown"),og()(),Cl(389,"td",20),qx(390,"-"),og(),Cl(391,"td",21)(392,"em")(393,"strong"),qx(394,"(opcional)"),og()(),Cl(395,"p"),qx(396,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),og(),Cl(397,"p"),qx(398,"A propriedade aceita os seguintes tipos:"),og(),Cl(399,"ul")(400,"li")(401,"code"),qx(402,"function"),og(),qx(403,": M\xE9todo que ser\xE1 executado."),og()(),Cl(404,"p"),qx(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),og(),Cl(406,"p"),qx(407,"Por exemplo:"),og(),Cl(408,"pre")(409,"code"),qx(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),og()(),Cl(411,"p"),qx(412,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Cl(413,"code"),qx(414,"bind"),og(),qx(415,", por exemplo:"),og(),Cl(416,"pre")(417,"code"),qx(418,`[p-load-data]="onLoadCustom.bind(this)"
`),og()()()(),Cl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),qx(423," p-service-api"),Hl(424,"br"),og()()(),Cl(425,"td",18)(426,"code",24),qx(427,"string"),og()(),Cl(428,"td",20),qx(429,"-"),og(),Cl(430,"td",21)(431,"p"),qx(432,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),og(),Cl(433,"p"),qx(434,"Para as a\xE7\xF5es de "),Cl(435,"code"),qx(436,"save"),og(),qx(437," e "),Cl(438,"code"),qx(439,"saveNew"),og(),qx(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),og(),Cl(441,"blockquote")(442,"p")(443,"code"),qx(444,"POST {end-point}"),og()()(),Cl(445,"pre")(446,"code"),qx(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),og()(),Cl(448,"p"),qx(449,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Cl(450,"code"),qx(451,"name"),og(),qx(452," e "),Cl(453,"code"),qx(454,"city"),og(),qx(455," foram preenchidas:"),og(),Cl(456,"pre")(457,"code"),qx(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),og()(),Cl(459,"p"),qx(460,"Request payload:"),og(),Cl(461,"pre")(462,"code"),qx(463,`{ "name": "Fulano", "city": "Smallville" }
`),og()(),Cl(464,"p"),qx(465,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),Cl(466,"code"),qx(467,"id"),og(),qx(468,"."),og(),Cl(469,"p"),qx(470,"Exemplo de configura\xE7\xE3o de rota:"),og(),Cl(471,"pre")(472,"code"),qx(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),og()(),Cl(474,"p"),qx(475,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),og(),Cl(476,"blockquote")(477,"p")(478,"code"),qx(479,"GET {end-point}/{id}"),og()()(),Cl(480,"p"),qx(481,"Nos m\xE9todos de "),Cl(482,"code"),qx(483,"save"),og(),qx(484," e "),Cl(485,"code"),qx(486,"saveNew"),og(),qx(487,", ao inv\xE9s de um "),Cl(488,"code"),qx(489,"POST"),og(),qx(490,", ser\xE1 disparado um "),Cl(491,"code"),qx(492,"PUT"),og(),qx(493,"."),og(),Cl(494,"p"),qx(495,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Cl(496,"code"),qx(497,"name"),og(),qx(498," e "),Cl(499,"code"),qx(500,"city"),og(),qx(501," foram preenchidas / atualizadas, e o "),Cl(502,"code"),qx(503,"id"),og(),qx(504," da url \xE9 2:"),og(),Cl(505,"pre")(506,"code"),qx(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),og()(),Cl(508,"p"),qx(509,"Request payload:"),og(),Cl(510,"pre")(511,"code"),qx(512,`{ "name": "Fulano", "city": "Metropolis" }
`),og()()()(),Cl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),qx(517," p-title"),Hl(518,"br"),og()()(),Cl(519,"td",18)(520,"code",24),qx(521,"string"),og()(),Cl(522,"td",20),qx(523,"-"),og(),Cl(524,"td",21)(525,"p"),qx(526,"T\xEDtulo da p\xE1gina."),og()()()(),Cl(527,"h3",10),qx(528,"M\xE9todos"),og(),Cl(529,"table",31)(530,"tr",14)(531,"th",32)(532,"div",16)(533,"h4")(534,"span",17),qx(535," showAdditionalHelp "),og()()()()(),Cl(536,"tr",21)(537,"td",21)(538,"p"),qx(539,"M\xE9todo que exibe "),Cl(540,"code"),qx(541,"p-helper"),og(),qx(542," ou executa a a\xE7\xE3o definida em "),Cl(543,"code"),qx(544,"p-helper{eventOnClick}"),og(),qx(545," ou em "),Cl(546,"code"),qx(547,"p-additionalHelp"),og(),qx(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(549,"code"),qx(550,"keydown"),og(),qx(551,"."),og(),Cl(552,"pre")(553,"code"),qx(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),og()()()()(),Cl(555,"h5")(556,"b"),qx(557,"Par\xE2metros"),og()(),Cl(558,"table",11)(559,"tr",12)(560,"th",13),qx(561,"Nome"),og(),Cl(562,"th",13),qx(563,"Tipo"),og(),Cl(564,"th",13),qx(565,"Descri\xE7\xE3o"),og()(),Cl(566,"tr",14)(567,"td",15),qx(568," property"),og(),Cl(569,"td",18)(570,"code",33),qx(571," string "),og()(),Cl(572,"td",21)(573,"p"),qx(574,"Identificador da coluna."),og()()()(),Hl(575,"br"),Cl(576,"h3"),qx(577,"Interfaces"),og(),Cl(578,"h4",34)(579,"code",5),qx(580,"PoPageDynamicEditActions"),og()(),Cl(581,"div",2)(582,"p"),qx(583,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),og()(),Cl(584,"h4",10),qx(585,"Propriedades"),og(),Cl(586,"table",11)(587,"tr",12)(588,"th",13),qx(589,"Nome"),og(),Cl(590,"th",13),qx(591,"Tipo"),og(),Cl(592,"th",13),qx(593,"Descri\xE7\xE3o"),og()(),Cl(594,"tr",14)(595,"td",15)(596,"div",16)(597,"span",17),qx(598," beforeCancel"),Hl(599,"br"),og()()(),Cl(600,"td",18)(601,"code",24),qx(602,"string "),og(),Cl(603,"code",35),qx(604," (() => PoPageDynamicEditBeforeCancel)"),og()(),Cl(605,"td",21)(606,"em")(607,"strong"),qx(608,"(opcional)"),og()(),Cl(609,"p"),qx(610,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),og(),Cl(611,"p"),qx(612,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Cl(613,"code"),qx(614,"PoPageDynamicEditBeforeCancel"),og(),qx(615,"."),og(),Cl(616,"blockquote")(617,"p"),qx(618,"A url ser\xE1 chamada via POST"),og()(),Cl(619,"p"),qx(620,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Cl(621,"strong"),qx(622,"beforeCancel"),og(),qx(623,`
ou definir a mensagem no atributo `),Cl(624,"code"),qx(625,"_messages"),og(),qx(626,` na resposta da API conforme definido
em `),Cl(627,"a",36),qx(628,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Cl(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),qx(633," beforeSave"),Hl(634,"br"),og()()(),Cl(635,"td",18)(636,"code",24),qx(637,"string "),og(),Cl(638,"code",37),qx(639," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),og()(),Cl(640,"td",21)(641,"em")(642,"strong"),qx(643,"(opcional)"),og()(),Cl(644,"p"),qx(645,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),og(),Cl(646,"p"),qx(647,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Cl(648,"code"),qx(649,"PoPageDynamicEditBeforeSave"),og(),qx(650,"."),og(),Cl(651,"blockquote")(652,"p"),qx(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Cl(654,"code"),qx(655,"POST {beforeSave}/{key}"),og(),qx(656,"."),og()(),Cl(657,"p"),qx(658,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Cl(659,"strong"),qx(660,"beforeSave"),og(),qx(661,`
ou definir a mensagem no atributo `),Cl(662,"code"),qx(663,"_messages"),og(),qx(664,` na resposta da API conforme definido
em `),Cl(665,"a",36),qx(666,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Cl(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),qx(671," beforeSaveNew"),Hl(672,"br"),og()()(),Cl(673,"td",18)(674,"code",24),qx(675,"string "),og(),Cl(676,"code",38),qx(677," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),og()(),Cl(678,"td",21)(679,"em")(680,"strong"),qx(681,"(opcional)"),og()(),Cl(682,"p"),qx(683,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),og(),Cl(684,"p"),qx(685,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Cl(686,"code"),qx(687,"PoPageDynamicEditBeforeSaveNew"),og(),qx(688,"."),og(),Cl(689,"blockquote")(690,"p"),qx(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Cl(692,"code"),qx(693,"POST {beforeSave}/{key}"),og(),qx(694,"."),og()(),Cl(695,"p"),qx(696,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Cl(697,"strong"),qx(698,"beforeSaveNew"),og(),qx(699,`
ou definir a mensagem no atributo `),Cl(700,"code"),qx(701,"_messages"),og(),qx(702,` na resposta da API conforme definido
em `),Cl(703,"a",36),qx(704,"Guia de implementa\xE7\xE3o de APIs"),og()()()(),Cl(705,"tr",14)(706,"td",15)(707,"div",16)(708,"span",17),qx(709," cancel"),Hl(710,"br"),og()()(),Cl(711,"td",18)(712,"code",24),qx(713,"string "),og(),Cl(714,"code",22),qx(715," boolean "),og(),Cl(716,"code",39),qx(717," Function"),og()(),Cl(718,"td",21)(719,"em")(720,"strong"),qx(721,"(opcional)"),og()(),Cl(722,"p"),qx(723,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),Cl(724,"code"),qx(725,"navigator.back()"),og(),qx(726,"."),og(),Cl(727,"blockquote")(728,"p"),qx(729,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),og()(),Cl(730,"blockquote")(731,"p"),qx(732,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),Cl(733,"code"),qx(734,"false"),og(),qx(735,";"),og()(),Cl(736,"pre")(737,"code"),qx(738,`actions = {
  cancel: '/'
};
`),og()()()(),Cl(739,"tr",14)(740,"td",15)(741,"div",16)(742,"span",17),qx(743," save"),Hl(744,"br"),og()()(),Cl(745,"td",18)(746,"code",24),qx(747,"string "),og(),Cl(748,"code",40),qx(749," ((resource: any, id: string) => void)"),og()(),Cl(750,"td",21)(751,"em")(752,"strong"),qx(753,"(opcional)"),og()(),Cl(754,"p"),qx(755,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),og(),Cl(756,"p"),qx(757,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),og(),Cl(758,"blockquote")(759,"p"),qx(760,"A rota pode conter um par\xE2metro chamando id."),og()(),Cl(761,"pre")(762,"code"),qx(763,`actions = {
  save: 'detail/:id'
};
`),og()(),Cl(764,"p"),qx(765,"Se for passado um m\xE9todo:"),og(),Cl(766,"ul")(767,"li"),qx(768,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),Cl(769,"code"),qx(770,"{ email: 'example@email.com' }"),og(),qx(771,"."),og(),Cl(772,"li"),qx(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),og()()()(),Cl(774,"tr",14)(775,"td",15)(776,"div",16)(777,"span",17),qx(778," saveNew"),Hl(779,"br"),og()()(),Cl(780,"td",18)(781,"code",24),qx(782,"string "),og(),Cl(783,"code",41),qx(784," ((resource: any, id?: string) => void)"),og()(),Cl(785,"td",21)(786,"em")(787,"strong"),qx(788,"(opcional)"),og()(),Cl(789,"p"),qx(790,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),og(),Cl(791,"p"),qx(792,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),og(),Cl(793,"blockquote")(794,"p"),qx(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),og()(),Cl(796,"pre")(797,"code"),qx(798,`actions = {
  saveNew: 'new'
};
`),og()(),Cl(799,"p"),qx(800,"A rota pode conter um par\xE2metro id."),og(),Cl(801,"pre")(802,"code"),qx(803,`actions = {
  saveNew: 'edit/:id'
};
`),og()(),Cl(804,"p"),qx(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),og()()()(),Cl(806,"h4",34)(807,"code",5),qx(808,"PoPageDynamicEditBeforeCancel"),og()(),Cl(809,"div",2)(810,"p"),qx(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Cl(812,"code"),qx(813,"beforeCancel"),og(),qx(814,"."),og()(),Cl(815,"h4",10),qx(816,"Propriedades"),og(),Cl(817,"table",11)(818,"tr",12)(819,"th",13),qx(820,"Nome"),og(),Cl(821,"th",13),qx(822,"Tipo"),og(),Cl(823,"th",13),qx(824,"Descri\xE7\xE3o"),og()(),Cl(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),qx(829," allowAction"),Hl(830,"br"),og()()(),Cl(831,"td",18)(832,"code",22),qx(833,"boolean"),og()(),Cl(834,"td",21)(835,"em")(836,"strong"),qx(837,"(opcional)"),og()(),Cl(838,"p"),qx(839,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),og()()(),Cl(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),qx(844," newUrl"),Hl(845,"br"),og()()(),Cl(846,"td",18)(847,"code",24),qx(848,"string"),og()(),Cl(849,"td",21)(850,"em")(851,"strong"),qx(852,"(opcional)"),og()(),Cl(853,"p"),qx(854,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),Cl(855,"code"),qx(856,"cancel"),og(),qx(857,"."),og()()()(),Cl(858,"h4",34)(859,"code",5),qx(860,"PoPageDynamicEditBeforeSaveNew"),og()(),Cl(861,"div",2)(862,"p"),qx(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Cl(864,"code"),qx(865,"beforeSaveNew"),og(),qx(866,"."),og()(),Cl(867,"h4",10),qx(868,"Propriedades"),og(),Cl(869,"table",11)(870,"tr",12)(871,"th",13),qx(872,"Nome"),og(),Cl(873,"th",13),qx(874,"Tipo"),og(),Cl(875,"th",13),qx(876,"Descri\xE7\xE3o"),og()(),Cl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),qx(881," allowAction"),Hl(882,"br"),og()()(),Cl(883,"td",18)(884,"code",22),qx(885,"boolean"),og()(),Cl(886,"td",21)(887,"em")(888,"strong"),qx(889,"(opcional)"),og()(),Cl(890,"p"),qx(891,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),og()()(),Cl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),qx(896," newUrl"),Hl(897,"br"),og()()(),Cl(898,"td",18)(899,"code",24),qx(900,"string"),og()(),Cl(901,"td",21)(902,"em")(903,"strong"),qx(904,"(opcional)"),og()(),Cl(905,"p"),qx(906,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),Cl(907,"code"),qx(908,"saveNew"),og(),qx(909,"."),og()()(),Cl(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),qx(914," resource"),Hl(915,"br"),og()()(),Cl(916,"td",18)(917,"code",42),qx(918,"any"),og()(),Cl(919,"td",21)(920,"em")(921,"strong"),qx(922,"(opcional)"),og()(),Cl(923,"p"),qx(924,"Recurso atualizado."),og(),Cl(925,"p"),qx(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Cl(927,"code"),qx(928,"key: true"),og(),qx(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),og(),Cl(930,"ul")(931,"li")(932,"p"),qx(933,"recurso anterior com a propriedade id foi que definida como "),Cl(934,"em"),qx(935,"key"),og(),qx(936,":"),og(),Cl(937,"pre")(938,"code"),qx(939,`{ id: 1, name: 'Ane' }
`),og()()(),Cl(940,"li")(941,"p"),qx(942,"recurso retornado no "),Cl(943,"code"),qx(944,"beforeSaveNew"),og(),qx(945,":"),og(),Cl(946,"pre")(947,"code"),qx(948,`{ id: 50, age: 23 }
`),og()()(),Cl(949,"li")(950,"p"),qx(951,"Mesclagem do recurso:"),og(),Cl(952,"pre")(953,"code"),qx(954,`{ id: 1, name: 'Ane', age: 23 }
`),og()()()(),Cl(955,"blockquote")(956,"p"),qx(957,"Caso "),Cl(958,"code"),qx(959,"allowAction"),og(),qx(960," seja "),Cl(961,"code"),qx(962,"false"),og(),qx(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),og()()()()(),Cl(964,"h4",34)(965,"code",5),qx(966,"PoPageDynamicEditBeforeSave"),og()(),Cl(967,"div",2)(968,"p"),qx(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Cl(970,"code"),qx(971,"beforeSave"),og(),qx(972,"."),og()(),Cl(973,"h4",10),qx(974,"Propriedades"),og(),Cl(975,"table",11)(976,"tr",12)(977,"th",13),qx(978,"Nome"),og(),Cl(979,"th",13),qx(980,"Tipo"),og(),Cl(981,"th",13),qx(982,"Descri\xE7\xE3o"),og()(),Cl(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),qx(987," allowAction"),Hl(988,"br"),og()()(),Cl(989,"td",18)(990,"code",22),qx(991,"boolean"),og()(),Cl(992,"td",21)(993,"em")(994,"strong"),qx(995,"(opcional)"),og()(),Cl(996,"p"),qx(997,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),og()()(),Cl(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),qx(1002," newUrl"),Hl(1003,"br"),og()()(),Cl(1004,"td",18)(1005,"code",24),qx(1006,"string"),og()(),Cl(1007,"td",21)(1008,"em")(1009,"strong"),qx(1010,"(opcional)"),og()(),Cl(1011,"p"),qx(1012,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),Cl(1013,"code"),qx(1014,"save"),og(),qx(1015,"."),og()()(),Cl(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),qx(1020," resource"),Hl(1021,"br"),og()()(),Cl(1022,"td",18)(1023,"code",42),qx(1024,"any"),og()(),Cl(1025,"td",21)(1026,"em")(1027,"strong"),qx(1028,"(opcional)"),og()(),Cl(1029,"p"),qx(1030,"Recurso atualizado."),og(),Cl(1031,"p"),qx(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),og(),Cl(1033,"ul")(1034,"li")(1035,"p"),qx(1036,"recurso anterior:"),og(),Cl(1037,"pre")(1038,"code"),qx(1039,`{ name: 'Ane' }
`),og()()(),Cl(1040,"li")(1041,"p"),qx(1042,"recurso retornado no "),Cl(1043,"code"),qx(1044,"beforeSave"),og(),qx(1045,":"),og(),Cl(1046,"pre")(1047,"code"),qx(1048,`{ age: 23 }
`),og()()(),Cl(1049,"li")(1050,"p"),qx(1051,"Mesclagem do recurso:"),og(),Cl(1052,"pre")(1053,"code"),qx(1054,`{ name: 'Ane', age: 23 }
`),og()()()(),Cl(1055,"blockquote")(1056,"p"),qx(1057,"Caso "),Cl(1058,"code"),qx(1059,"allowAction"),og(),qx(1060," seja "),Cl(1061,"code"),qx(1062,"false"),og(),qx(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),og()()()()(),Cl(1064,"h4",34)(1065,"code",5),qx(1066,"PoPageDynamicEditField"),og()(),Cl(1067,"div",2)(1068,"p"),qx(1069,"Interface dos fields usados para compor o template "),Cl(1070,"code"),qx(1071,"po-page-dynamic-edit"),og(),qx(1072,`.
Herda as defini\xE7\xF5es da interface
`),Cl(1073,"a",43),qx(1074,"PoDynamicFormField"),og(),qx(1075,"."),og()(),Cl(1076,"h4",10),qx(1077,"Propriedades"),og(),Cl(1078,"table",11)(1079,"tr",12)(1080,"th",13),qx(1081,"Nome"),og(),Cl(1082,"th",13),qx(1083,"Tipo"),og(),Cl(1084,"th",13),qx(1085,"Descri\xE7\xE3o"),og()(),Cl(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),qx(1090," duplicate"),Hl(1091,"br"),og()()(),Cl(1092,"td",18)(1093,"code",22),qx(1094,"boolean"),og()(),Cl(1095,"td",21)(1096,"em")(1097,"strong"),qx(1098,"(opcional)"),og()(),Cl(1099,"p"),qx(1100,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),og()()()(),Cl(1101,"h4",34)(1102,"code",5),qx(1103,"PoPageDynamicEditLiterals"),og()(),Cl(1104,"div",2)(1105,"p"),qx(1106,"Interface para defini\xE7\xE3o das literais usadas no "),Cl(1107,"code"),qx(1108,"po-page-dynamic-edit"),og(),qx(1109,"."),og()(),Cl(1110,"h4",10),qx(1111,"Propriedades"),og(),Cl(1112,"table",11)(1113,"tr",12)(1114,"th",13),qx(1115,"Nome"),og(),Cl(1116,"th",13),qx(1117,"Tipo"),og(),Cl(1118,"th",13),qx(1119,"Descri\xE7\xE3o"),og()(),Cl(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),qx(1124," cancelConfirmMessage"),Hl(1125,"br"),og()()(),Cl(1126,"td",18)(1127,"code",24),qx(1128,"string"),og()(),Cl(1129,"td",21)(1130,"em")(1131,"strong"),qx(1132,"(opcional)"),og()(),Cl(1133,"p"),qx(1134,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),og()()(),Cl(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),qx(1139," detailActionNew"),Hl(1140,"br"),og()()(),Cl(1141,"td",18)(1142,"code",24),qx(1143,"string"),og()(),Cl(1144,"td",21)(1145,"em")(1146,"strong"),qx(1147,"(opcional)"),og()(),Cl(1148,"p"),qx(1149,"R\xF3tulo exibido no bot\xE3o "),Cl(1150,"code"),qx(1151,"Novo"),og(),qx(1152,"."),og()()(),Cl(1153,"tr",14)(1154,"td",15)(1155,"div",16)(1156,"span",17),qx(1157," pageActionCancel"),Hl(1158,"br"),og()()(),Cl(1159,"td",18)(1160,"code",24),qx(1161,"string"),og()(),Cl(1162,"td",21)(1163,"em")(1164,"strong"),qx(1165,"(opcional)"),og()(),Cl(1166,"p"),qx(1167,"R\xF3tulo exibido no bot\xE3o "),Cl(1168,"code"),qx(1169,"Cancelar"),og(),qx(1170,"."),og()()(),Cl(1171,"tr",14)(1172,"td",15)(1173,"div",16)(1174,"span",17),qx(1175," pageActionSave"),Hl(1176,"br"),og()()(),Cl(1177,"td",18)(1178,"code",24),qx(1179,"string"),og()(),Cl(1180,"td",21)(1181,"em")(1182,"strong"),qx(1183,"(opcional)"),og()(),Cl(1184,"p"),qx(1185,"R\xF3tulo exibido no bot\xE3o "),Cl(1186,"code"),qx(1187,"Salvar"),og(),qx(1188,"."),og()()(),Cl(1189,"tr",14)(1190,"td",15)(1191,"div",16)(1192,"span",17),qx(1193," pageActionSaveNew"),Hl(1194,"br"),og()()(),Cl(1195,"td",18)(1196,"code",24),qx(1197,"string"),og()(),Cl(1198,"td",21)(1199,"em")(1200,"strong"),qx(1201,"(opcional)"),og()(),Cl(1202,"p"),qx(1203,"R\xF3tulo exibido no bot\xE3o "),Cl(1204,"code"),qx(1205,"Salvar e novo"),og(),qx(1206,"."),og()()(),Cl(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),qx(1211," registerNotFound"),Hl(1212,"br"),og()()(),Cl(1213,"td",18)(1214,"code",24),qx(1215,"string"),og()(),Cl(1216,"td",21)(1217,"em")(1218,"strong"),qx(1219,"(opcional)"),og()(),Cl(1220,"p"),qx(1221,"Texto exibido para resgistro n\xE3o encontrado."),og()()(),Cl(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),qx(1226," saveNotificationError"),Hl(1227,"br"),og()()(),Cl(1228,"td",18)(1229,"code",24),qx(1230,"string"),og()(),Cl(1231,"td",21)(1232,"em")(1233,"strong"),qx(1234,"(opcional)"),og()(),Cl(1235,"p"),qx(1236,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),og()()(),Cl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),qx(1241," saveNotificationSuccessSave"),Hl(1242,"br"),og()()(),Cl(1243,"td",18)(1244,"code",24),qx(1245,"string"),og()(),Cl(1246,"td",21)(1247,"em")(1248,"strong"),qx(1249,"(opcional)"),og()(),Cl(1250,"p"),qx(1251,"Texto exibido para recurso salvo com sucesso."),og()()(),Cl(1252,"tr",14)(1253,"td",15)(1254,"div",16)(1255,"span",17),qx(1256," saveNotificationSuccessUpdate"),Hl(1257,"br"),og()()(),Cl(1258,"td",18)(1259,"code",24),qx(1260,"string"),og()(),Cl(1261,"td",21)(1262,"em")(1263,"strong"),qx(1264,"(opcional)"),og()(),Cl(1265,"p"),qx(1266,"Texto exibido para recurso atualizado com sucesso."),og()()(),Cl(1267,"tr",14)(1268,"td",15)(1269,"div",16)(1270,"span",17),qx(1271," saveNotificationWarning"),Hl(1272,"br"),og()()(),Cl(1273,"td",18)(1274,"code",24),qx(1275,"string"),og()(),Cl(1276,"td",21)(1277,"em")(1278,"strong"),qx(1279,"(opcional)"),og()(),Cl(1280,"p"),qx(1281,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),og()()()(),Cl(1282,"h4",34)(1283,"code",5),qx(1284,"PoPageDynamicEditMetadata"),og()(),Cl(1285,"div",2)(1286,"p"),qx(1287,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),Hl(1288,"a",44),og()(),Cl(1289,"h4",10),qx(1290,"Propriedades"),og(),Cl(1291,"table",11)(1292,"tr",12)(1293,"th",13),qx(1294,"Nome"),og(),Cl(1295,"th",13),qx(1296,"Tipo"),og(),Cl(1297,"th",13),qx(1298,"Descri\xE7\xE3o"),og()(),Cl(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),qx(1303," actions"),Hl(1304,"br"),og()()(),Cl(1305,"td",18)(1306,"code",19),qx(1307,"PoPageDynamicEditActions"),og()(),Cl(1308,"td",21)(1309,"em")(1310,"strong"),qx(1311,"(opcional)"),og()(),Cl(1312,"p"),qx(1313,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),og()()(),Cl(1314,"tr",14)(1315,"td",15)(1316,"div",16)(1317,"span",17),qx(1318," autoRouter"),Hl(1319,"br"),og()()(),Cl(1320,"td",18)(1321,"code",22),qx(1322,"boolean"),og()(),Cl(1323,"td",21)(1324,"em")(1325,"strong"),qx(1326,"(opcional)"),og()(),Cl(1327,"p"),qx(1328,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),Cl(1329,"code"),qx(1330,"p-actions"),og()(),Cl(1331,"p"),qx(1332,"As rotas criadas ser\xE3o baseadas na propriedade "),Cl(1333,"code"),qx(1334,"p-actions"),og(),qx(1335,"."),og(),Cl(1336,"blockquote")(1337,"p"),qx(1338,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),Cl(1339,"code"),qx(1340,"**"),og(),qx(1341,") especificada."),og()()()(),Cl(1342,"tr",14)(1343,"td",15)(1344,"div",16)(1345,"span",17),qx(1346," breadcrumb"),Hl(1347,"br"),og()()(),Cl(1348,"td",18)(1349,"code",23),qx(1350,"PoBreadcrumb"),og()(),Cl(1351,"td",21)(1352,"em")(1353,"strong"),qx(1354,"(opcional)"),og()(),Cl(1355,"p"),qx(1356,"Objeto com propriedades do breadcrumb."),og()()(),Cl(1357,"tr",14)(1358,"td",15)(1359,"div",16)(1360,"span",17),qx(1361," fields"),Hl(1362,"br"),og()()(),Cl(1363,"td",18)(1364,"code",26),qx(1365,"Array<PoPageDynamicEditField>"),og()(),Cl(1366,"td",21)(1367,"em")(1368,"strong"),qx(1369,"(opcional)"),og()(),Cl(1370,"p"),qx(1371,"Lista dos campos usados."),og()()(),Cl(1372,"tr",14)(1373,"td",15)(1374,"div",16)(1375,"span",17),qx(1376," title"),Hl(1377,"br"),og()()(),Cl(1378,"td",18)(1379,"code",24),qx(1380,"string"),og()(),Cl(1381,"td",21)(1382,"em")(1383,"strong"),qx(1384,"(opcional)"),og()(),Cl(1385,"p"),qx(1386,"T\xEDtulo da p\xE1gina."),og()()(),Cl(1387,"tr",14)(1388,"td",15)(1389,"div",16)(1390,"span",17),qx(1391," version"),Hl(1392,"br"),og()()(),Cl(1393,"td",18)(1394,"code",45),qx(1395,"number"),og()(),Cl(1396,"td",21)(1397,"p"),qx(1398,"Vers\xE3o do metadado devolvido pelo backend."),og()()()(),Cl(1399,"h4",34)(1400,"code",5),qx(1401,"PoPageDynamicEditOptions"),og()(),Cl(1402,"div",2)(1403,"p"),qx(1404,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),og()(),Cl(1405,"h4",10),qx(1406,"Propriedades"),og(),Cl(1407,"table",11)(1408,"tr",12)(1409,"th",13),qx(1410,"Nome"),og(),Cl(1411,"th",13),qx(1412,"Tipo"),og(),Cl(1413,"th",13),qx(1414,"Descri\xE7\xE3o"),og()(),Cl(1415,"tr",14)(1416,"td",15)(1417,"div",16)(1418,"span",17),qx(1419," actions"),Hl(1420,"br"),og()()(),Cl(1421,"td",18)(1422,"code",19),qx(1423,"PoPageDynamicEditActions"),og()(),Cl(1424,"td",21)(1425,"em")(1426,"strong"),qx(1427,"(opcional)"),og()(),Cl(1428,"p"),qx(1429,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),og()()(),Cl(1430,"tr",14)(1431,"td",15)(1432,"div",16)(1433,"span",17),qx(1434," breadcrumb"),Hl(1435,"br"),og()()(),Cl(1436,"td",18)(1437,"code",23),qx(1438,"PoBreadcrumb"),og()(),Cl(1439,"td",21)(1440,"em")(1441,"strong"),qx(1442,"(opcional)"),og()(),Cl(1443,"p"),qx(1444,"Objeto com propriedades do breadcrumb."),og()()(),Cl(1445,"tr",14)(1446,"td",15)(1447,"div",16)(1448,"span",17),qx(1449," fields"),Hl(1450,"br"),og()()(),Cl(1451,"td",18)(1452,"code",26),qx(1453,"Array<PoPageDynamicEditField>"),og()(),Cl(1454,"td",21)(1455,"em")(1456,"strong"),qx(1457,"(opcional)"),og()(),Cl(1458,"p"),qx(1459,"Lista dos campos usados."),og()()(),Cl(1460,"tr",14)(1461,"td",15)(1462,"div",16)(1463,"span",17),qx(1464," title"),Hl(1465,"br"),og()()(),Cl(1466,"td",18)(1467,"code",24),qx(1468,"string"),og()(),Cl(1469,"td",21)(1470,"em")(1471,"strong"),qx(1472,"(opcional)"),og()(),Cl(1473,"p"),qx(1474,"T\xEDtulo da p\xE1gina."),og()()()()());},dependencies:[Zr],encapsulation:2})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return d.changeTab("doc")}),Hl(3,"sample-po-page-dynamic-edit-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return d.changeTab("web")}),Hl(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),og()()()),o&2&&(ZE("p-actions",d.actions),Lp(2),ZE("p-active",d.activeTab==="doc"),Lp(2),ZE("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[SNe,ofe,lfe,L,O,_],encapsulation:2})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[bL.forChild(te),bL]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ca,U]})}return a})();export{fe as DocPoPageDynamicEditModule};