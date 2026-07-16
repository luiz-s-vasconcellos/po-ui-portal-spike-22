import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,cg as La,L as Gl,O as nw,bs as mN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,av as Yl,aw as uo,ax as fo,a3 as lNe}from'./main-56B5DD5U.js';var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:false,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&Gl(0,"po-page-dynamic-edit",0),o&2&&nw("p-fields",mN(2,G,gN(1,V)));},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Page Dynamic Edit Basic"),sg(),Tl(4,"a",2),ht("click",function(){return d.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-dynamic-edit-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+d.sampleCodeButtonIcon),Vp(),fg(" ",d.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,W,d.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,B],encapsulation:2,changeDetection:1})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:true,required:true},{property:"name",divider:"Personal data",required:true},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r);}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&Yl(J,7),o&2){let u;uo(u=fo())&&(d.dynamicEdit=u.first);}},standalone:false,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&Gl(0,"po-page-dynamic-edit",1,0),o&2&&nw("p-auto-router",true)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi);},dependencies:[La],encapsulation:2,changeDetection:1})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Page Dynamic Edit - User"),sg(),Tl(4,"a",2),ht("click",function(){return d.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-dynamic-edit
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-page-dynamic-edit-user"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+d.sampleCodeButtonIcon),Vp(),fg(" ",d.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Z,d.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,j],encapsulation:2,changeDetection:1})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:false,decls:1475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do template do po-page-dynamic-detail."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoPageDynamicEditComponent"),sg()(),Tl(12,"div",2)(13,"p"),iN(14,"O "),Tl(15,"code"),iN(16,"po-page-dynamic-edit"),sg(),iN(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),sg(),Tl(18,"h3"),iN(19,"Utiliza\xE7\xE3o via rota"),sg(),Tl(20,"p"),iN(21,"Ao utilizar as rotas para inicializar o template, o "),Tl(22,"code"),iN(23,"page-dynamic-edit"),sg(),iN(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),sg(),Tl(25,"p"),iN(26,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(27,"p"),iN(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),Tl(29,"code"),iN(30,"app-routing.module.ts"),sg()(),Tl(31,"pre")(32,"code"),iN(33,`const routes: Routes = [
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
`),sg()(),Tl(34,"p"),iN(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),sg(),Tl(36,"p"),iN(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),sg(),Tl(38,"blockquote")(39,"p"),iN(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),sg()(),Tl(41,"p"),iN(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),Tl(43,"code"),iN(44,"id"),sg(),iN(45,":"),sg(),Tl(46,"pre")(47,"code"),iN(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),sg()(),Tl(49,"p"),iN(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),sg(),Tl(51,"p"),iN(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Tl(53,"a",6),iN(54,"PoPageDynamicEditMetadata"),sg(),iN(55,". Por exemplo:"),sg(),Tl(56,"pre")(57,"code"),iN(58,` {
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
`),sg()(),Tl(59,"blockquote")(60,"p"),iN(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),Tl(62,"code"),iN(63,"serviceApi"),sg(),iN(64," da seguinte forma:"),sg()(),Tl(65,"pre")(66,"code"),iN(67,`GET {end-point}/metadata?type=edit&version={version}
`),sg()(),Tl(68,"h4"),iN(69,"Tokens customiz\xE1veis"),sg(),Tl(70,"table")(71,"thead")(72,"tr")(73,"th"),iN(74,"Propriedade"),sg(),Tl(75,"th"),iN(76,"Descri\xE7\xE3o"),sg(),Tl(77,"th"),iN(78,"Valor Padr\xE3o"),sg()()(),Tl(79,"tbody")(80,"tr")(81,"td")(82,"strong"),iN(83,"Header"),sg()(),Gl(84,"td")(85,"td"),sg(),Tl(86,"tr")(87,"td")(88,"code"),iN(89,"--padding"),sg()(),Tl(90,"td"),iN(91,"Espa\xE7amento do header"),sg(),Tl(92,"td")(93,"code"),iN(94,"var(--spacing-xs) var(--spacing-md)"),sg()()(),Tl(95,"tr")(96,"td")(97,"code"),iN(98,"--gap"),sg()(),Tl(99,"td"),iN(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),sg(),Tl(101,"td")(102,"code"),iN(103,"var(--spacing-md)"),sg()()(),Tl(104,"tr")(105,"td")(106,"code"),iN(107,"--gap-actions"),sg()(),Tl(108,"td"),iN(109,"Espa\xE7amento entre as a\xE7\xF5es"),sg(),Tl(110,"td")(111,"code"),iN(112,"var(--spacing-xs)"),sg()()(),Tl(113,"tr")(114,"td")(115,"code"),iN(116,"--font-family"),sg()(),Tl(117,"td"),iN(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),sg(),Tl(119,"td")(120,"code"),iN(121,"var(--font-family-theme)"),sg()()(),Tl(122,"tr")(123,"td")(124,"strong"),iN(125,"Content"),sg()(),Gl(126,"td")(127,"td"),sg(),Tl(128,"tr")(129,"td")(130,"code"),iN(131,"--padding-content"),sg()(),Tl(132,"td"),iN(133,"Espa\xE7amento do conte\xFAdo"),sg(),Tl(134,"td")(135,"code"),iN(136,"var(--spacing-xs) var(--spacing-sm)"),sg()()()()()(),Tl(137,"div",7)(138,"h4",8),iN(139,"Seletor"),sg(),Tl(140,"pre",9),iN(141,`<po-page-dynamic-edit
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
`),sg()(),Tl(142,"h4",10),iN(143,"Propriedades"),sg(),Tl(144,"table",11)(145,"tr",12)(146,"th",13),iN(147,"Nome"),sg(),Tl(148,"th",13),iN(149,"Tipo"),sg(),Tl(150,"th",13),iN(151,"Padr\xE3o"),sg(),Tl(152,"th",13),iN(153,"Descri\xE7\xE3o"),sg()(),Tl(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),iN(158," p-actions"),Gl(159,"br"),sg()()(),Tl(160,"td",18)(161,"code",19),iN(162,"PoPageDynamicEditActions"),sg()(),Tl(163,"td",20),iN(164,"-"),sg(),Tl(165,"td",21)(166,"em")(167,"strong"),iN(168,"(opcional)"),sg()(),Tl(169,"p"),iN(170,"A\xE7\xF5es da p\xE1gina."),sg()()(),Tl(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),iN(175," p-auto-router"),Gl(176,"br"),sg()()(),Tl(177,"td",18)(178,"code",22),iN(179,"boolean"),sg()(),Tl(180,"td",20)(181,"p"),iN(182,"false"),sg()(),Tl(183,"td",21)(184,"em")(185,"strong"),iN(186,"(opcional)"),sg()(),Tl(187,"p"),iN(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),sg(),Tl(189,"blockquote")(190,"p"),iN(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),Tl(192,"code"),iN(193,"**"),sg(),iN(194,") especificada."),sg()()()(),Tl(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),iN(199," p-breadcrumb"),Gl(200,"br"),sg()()(),Tl(201,"td",18)(202,"code",23),iN(203,"PoBreadcrumb"),sg()(),Tl(204,"td",20),iN(205,"-"),sg(),Tl(206,"td",21)(207,"em")(208,"strong"),iN(209,"(opcional)"),sg()(),Tl(210,"p"),iN(211,"Objeto com propriedades do breadcrumb."),sg()()(),Tl(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),iN(216," p-components-size"),Gl(217,"br"),sg()()(),Tl(218,"td",18)(219,"code",24),iN(220,"string"),sg()(),Tl(221,"td",20)(222,"p")(223,"code"),iN(224,"medium"),sg()()(),Tl(225,"td",21)(226,"em")(227,"strong"),iN(228,"(opcional)"),sg()(),Tl(229,"p"),iN(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(231,"ul")(232,"li")(233,"code"),iN(234,"small"),sg(),iN(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(236,"li")(237,"code"),iN(238,"medium"),sg(),iN(239,": aplica a medida medium de cada componente."),sg()(),Tl(240,"blockquote")(241,"p"),iN(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(243,"code"),iN(244,"medium"),sg(),iN(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(246,"a",25),iN(247,"po-theme"),sg(),iN(248,"."),sg()()()(),Tl(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),iN(253," p-fields"),Gl(254,"br"),sg()()(),Tl(255,"td",18)(256,"code",26),iN(257,"Array<PoPageDynamicEditField>"),sg()(),Tl(258,"td",20),iN(259,"-"),sg(),Tl(260,"td",21)(261,"p"),iN(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),sg()()(),Tl(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),iN(267," p-literals"),Gl(268,"br"),sg()()(),Tl(269,"td",18)(270,"code",27),iN(271,"PoPageDynamicEditLiterals"),sg()(),Tl(272,"td",20),iN(273,"-"),sg(),Tl(274,"td",21)(275,"em")(276,"strong"),iN(277,"(opcional)"),sg()(),Tl(278,"p"),iN(279,"Objeto com as literais usadas no "),Tl(280,"code"),iN(281,"po-page-dynamic-edit"),sg(),iN(282,"."),sg(),Tl(283,"p"),iN(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),sg(),Tl(285,"pre")(286,"code"),iN(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),sg()(),Tl(288,"p"),iN(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),sg(),Tl(290,"pre")(291,"code"),iN(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),sg()(),Tl(293,"blockquote")(294,"p"),iN(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),Tl(296,"a",28)(297,"code"),iN(298,"PoI18nService"),sg()(),iN(299," ou "),Tl(300,"em"),iN(301,"browser"),sg(),iN(302,"."),sg()()()(),Tl(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),iN(307," p-notification-type"),Gl(308,"br"),sg()()(),Tl(309,"td",18)(310,"code",24),iN(311,"string"),sg()(),Tl(312,"td",20)(313,"p"),iN(314,"warning"),sg()(),Tl(315,"td",21)(316,"em")(317,"strong"),iN(318,"(opcional)"),sg()(),Tl(319,"p"),iN(320,"Tipo da notifica\xE7\xE3o."),sg(),Tl(321,"p"),iN(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),sg(),Tl(323,"pre")(324,"code"),iN(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),sg()(),Tl(326,"blockquote")(327,"p"),iN(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),sg()()()(),Tl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),iN(333," p-load"),Gl(334,"br"),sg()()(),Tl(335,"td",18)(336,"code",24),iN(337,"string "),sg(),Tl(338,"code",29),iN(339," (() => PoPageDynamicEditOptions)"),sg()(),Tl(340,"td",20),iN(341,"-"),sg(),Tl(342,"td",21)(343,"p"),iN(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),sg(),Tl(345,"p"),iN(346,"A propriedade aceita os seguintes tipos:"),sg(),Tl(347,"ul")(348,"li")(349,"code"),iN(350,"string"),sg(),iN(351,": "),Tl(352,"em"),iN(353,"Endpoint"),sg(),iN(354," usado pelo componente para requisi\xE7\xE3o via "),Tl(355,"code"),iN(356,"POST"),sg(),iN(357,"."),sg(),Tl(358,"li")(359,"code"),iN(360,"function"),sg(),iN(361,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(362,"p"),iN(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(364,"code"),iN(365,"PoPageDynamicEditOptions"),sg(),iN(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),sg(),Tl(367,"p"),iN(368,"Por exemplo:"),sg(),Tl(369,"pre")(370,"code"),iN(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),sg()(),Tl(372,"p"),iN(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(374,"code"),iN(375,"bind"),sg(),iN(376,", por exemplo:"),sg(),Tl(377,"pre")(378,"code"),iN(379,`[p-load]="onLoadOptions.bind(this)"
`),sg()()()(),Tl(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),iN(384," p-load-data"),Gl(385,"br"),sg()()(),Tl(386,"td",18)(387,"code",30),iN(388,"unknown"),sg()(),Tl(389,"td",20),iN(390,"-"),sg(),Tl(391,"td",21)(392,"em")(393,"strong"),iN(394,"(opcional)"),sg()(),Tl(395,"p"),iN(396,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),sg(),Tl(397,"p"),iN(398,"A propriedade aceita os seguintes tipos:"),sg(),Tl(399,"ul")(400,"li")(401,"code"),iN(402,"function"),sg(),iN(403,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(404,"p"),iN(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),sg(),Tl(406,"p"),iN(407,"Por exemplo:"),sg(),Tl(408,"pre")(409,"code"),iN(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),sg()(),Tl(411,"p"),iN(412,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(413,"code"),iN(414,"bind"),sg(),iN(415,", por exemplo:"),sg(),Tl(416,"pre")(417,"code"),iN(418,`[p-load-data]="onLoadCustom.bind(this)"
`),sg()()()(),Tl(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),iN(423," p-service-api"),Gl(424,"br"),sg()()(),Tl(425,"td",18)(426,"code",24),iN(427,"string"),sg()(),Tl(428,"td",20),iN(429,"-"),sg(),Tl(430,"td",21)(431,"p"),iN(432,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),sg(),Tl(433,"p"),iN(434,"Para as a\xE7\xF5es de "),Tl(435,"code"),iN(436,"save"),sg(),iN(437," e "),Tl(438,"code"),iN(439,"saveNew"),sg(),iN(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),sg(),Tl(441,"blockquote")(442,"p")(443,"code"),iN(444,"POST {end-point}"),sg()()(),Tl(445,"pre")(446,"code"),iN(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),sg()(),Tl(448,"p"),iN(449,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Tl(450,"code"),iN(451,"name"),sg(),iN(452," e "),Tl(453,"code"),iN(454,"city"),sg(),iN(455," foram preenchidas:"),sg(),Tl(456,"pre")(457,"code"),iN(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),sg()(),Tl(459,"p"),iN(460,"Request payload:"),sg(),Tl(461,"pre")(462,"code"),iN(463,`{ "name": "Fulano", "city": "Smallville" }
`),sg()(),Tl(464,"p"),iN(465,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),Tl(466,"code"),iN(467,"id"),sg(),iN(468,"."),sg(),Tl(469,"p"),iN(470,"Exemplo de configura\xE7\xE3o de rota:"),sg(),Tl(471,"pre")(472,"code"),iN(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),sg()(),Tl(474,"p"),iN(475,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),sg(),Tl(476,"blockquote")(477,"p")(478,"code"),iN(479,"GET {end-point}/{id}"),sg()()(),Tl(480,"p"),iN(481,"Nos m\xE9todos de "),Tl(482,"code"),iN(483,"save"),sg(),iN(484," e "),Tl(485,"code"),iN(486,"saveNew"),sg(),iN(487,", ao inv\xE9s de um "),Tl(488,"code"),iN(489,"POST"),sg(),iN(490,", ser\xE1 disparado um "),Tl(491,"code"),iN(492,"PUT"),sg(),iN(493,"."),sg(),Tl(494,"p"),iN(495,"Resquisi\xE7\xE3o disparada, onde a propriedade "),Tl(496,"code"),iN(497,"name"),sg(),iN(498," e "),Tl(499,"code"),iN(500,"city"),sg(),iN(501," foram preenchidas / atualizadas, e o "),Tl(502,"code"),iN(503,"id"),sg(),iN(504," da url \xE9 2:"),sg(),Tl(505,"pre")(506,"code"),iN(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),sg()(),Tl(508,"p"),iN(509,"Request payload:"),sg(),Tl(510,"pre")(511,"code"),iN(512,`{ "name": "Fulano", "city": "Metropolis" }
`),sg()()()(),Tl(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),iN(517," p-title"),Gl(518,"br"),sg()()(),Tl(519,"td",18)(520,"code",24),iN(521,"string"),sg()(),Tl(522,"td",20),iN(523,"-"),sg(),Tl(524,"td",21)(525,"p"),iN(526,"T\xEDtulo da p\xE1gina."),sg()()()(),Tl(527,"h3",10),iN(528,"M\xE9todos"),sg(),Tl(529,"table",31)(530,"tr",14)(531,"th",32)(532,"div",16)(533,"h4")(534,"span",17),iN(535," showAdditionalHelp "),sg()()()()(),Tl(536,"tr",21)(537,"td",21)(538,"p"),iN(539,"M\xE9todo que exibe "),Tl(540,"code"),iN(541,"p-helper"),sg(),iN(542," ou executa a a\xE7\xE3o definida em "),Tl(543,"code"),iN(544,"p-helper{eventOnClick}"),sg(),iN(545," ou em "),Tl(546,"code"),iN(547,"p-additionalHelp"),sg(),iN(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(549,"code"),iN(550,"keydown"),sg(),iN(551,"."),sg(),Tl(552,"pre")(553,"code"),iN(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),sg()()()()(),Tl(555,"h5")(556,"b"),iN(557,"Par\xE2metros"),sg()(),Tl(558,"table",11)(559,"tr",12)(560,"th",13),iN(561,"Nome"),sg(),Tl(562,"th",13),iN(563,"Tipo"),sg(),Tl(564,"th",13),iN(565,"Descri\xE7\xE3o"),sg()(),Tl(566,"tr",14)(567,"td",15),iN(568," property"),sg(),Tl(569,"td",18)(570,"code",33),iN(571," string "),sg()(),Tl(572,"td",21)(573,"p"),iN(574,"Identificador da coluna."),sg()()()(),Gl(575,"br"),Tl(576,"h3"),iN(577,"Interfaces"),sg(),Tl(578,"h4",34)(579,"code",5),iN(580,"PoPageDynamicEditActions"),sg()(),Tl(581,"div",2)(582,"p"),iN(583,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),sg()(),Tl(584,"h4",10),iN(585,"Propriedades"),sg(),Tl(586,"table",11)(587,"tr",12)(588,"th",13),iN(589,"Nome"),sg(),Tl(590,"th",13),iN(591,"Tipo"),sg(),Tl(592,"th",13),iN(593,"Descri\xE7\xE3o"),sg()(),Tl(594,"tr",14)(595,"td",15)(596,"div",16)(597,"span",17),iN(598," beforeCancel"),Gl(599,"br"),sg()()(),Tl(600,"td",18)(601,"code",24),iN(602,"string "),sg(),Tl(603,"code",35),iN(604," (() => PoPageDynamicEditBeforeCancel)"),sg()(),Tl(605,"td",21)(606,"em")(607,"strong"),iN(608,"(opcional)"),sg()(),Tl(609,"p"),iN(610,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),sg(),Tl(611,"p"),iN(612,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Tl(613,"code"),iN(614,"PoPageDynamicEditBeforeCancel"),sg(),iN(615,"."),sg(),Tl(616,"blockquote")(617,"p"),iN(618,"A url ser\xE1 chamada via POST"),sg()(),Tl(619,"p"),iN(620,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Tl(621,"strong"),iN(622,"beforeCancel"),sg(),iN(623,`
ou definir a mensagem no atributo `),Tl(624,"code"),iN(625,"_messages"),sg(),iN(626,` na resposta da API conforme definido
em `),Tl(627,"a",36),iN(628,"Guia de implementa\xE7\xE3o de APIs"),sg()()()(),Tl(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),iN(633," beforeSave"),Gl(634,"br"),sg()()(),Tl(635,"td",18)(636,"code",24),iN(637,"string "),sg(),Tl(638,"code",37),iN(639," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),sg()(),Tl(640,"td",21)(641,"em")(642,"strong"),iN(643,"(opcional)"),sg()(),Tl(644,"p"),iN(645,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),sg(),Tl(646,"p"),iN(647,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Tl(648,"code"),iN(649,"PoPageDynamicEditBeforeSave"),sg(),iN(650,"."),sg(),Tl(651,"blockquote")(652,"p"),iN(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Tl(654,"code"),iN(655,"POST {beforeSave}/{key}"),sg(),iN(656,"."),sg()(),Tl(657,"p"),iN(658,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Tl(659,"strong"),iN(660,"beforeSave"),sg(),iN(661,`
ou definir a mensagem no atributo `),Tl(662,"code"),iN(663,"_messages"),sg(),iN(664,` na resposta da API conforme definido
em `),Tl(665,"a",36),iN(666,"Guia de implementa\xE7\xE3o de APIs"),sg()()()(),Tl(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),iN(671," beforeSaveNew"),Gl(672,"br"),sg()()(),Tl(673,"td",18)(674,"code",24),iN(675,"string "),sg(),Tl(676,"code",38),iN(677," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),sg()(),Tl(678,"td",21)(679,"em")(680,"strong"),iN(681,"(opcional)"),sg()(),Tl(682,"p"),iN(683,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),sg(),Tl(684,"p"),iN(685,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),Tl(686,"code"),iN(687,"PoPageDynamicEditBeforeSaveNew"),sg(),iN(688,"."),sg(),Tl(689,"blockquote")(690,"p"),iN(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Tl(692,"code"),iN(693,"POST {beforeSave}/{key}"),sg(),iN(694,"."),sg()(),Tl(695,"p"),iN(696,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),Tl(697,"strong"),iN(698,"beforeSaveNew"),sg(),iN(699,`
ou definir a mensagem no atributo `),Tl(700,"code"),iN(701,"_messages"),sg(),iN(702,` na resposta da API conforme definido
em `),Tl(703,"a",36),iN(704,"Guia de implementa\xE7\xE3o de APIs"),sg()()()(),Tl(705,"tr",14)(706,"td",15)(707,"div",16)(708,"span",17),iN(709," cancel"),Gl(710,"br"),sg()()(),Tl(711,"td",18)(712,"code",24),iN(713,"string "),sg(),Tl(714,"code",22),iN(715," boolean "),sg(),Tl(716,"code",39),iN(717," Function"),sg()(),Tl(718,"td",21)(719,"em")(720,"strong"),iN(721,"(opcional)"),sg()(),Tl(722,"p"),iN(723,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),Tl(724,"code"),iN(725,"navigator.back()"),sg(),iN(726,"."),sg(),Tl(727,"blockquote")(728,"p"),iN(729,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),sg()(),Tl(730,"blockquote")(731,"p"),iN(732,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),Tl(733,"code"),iN(734,"false"),sg(),iN(735,";"),sg()(),Tl(736,"pre")(737,"code"),iN(738,`actions = {
  cancel: '/'
};
`),sg()()()(),Tl(739,"tr",14)(740,"td",15)(741,"div",16)(742,"span",17),iN(743," save"),Gl(744,"br"),sg()()(),Tl(745,"td",18)(746,"code",24),iN(747,"string "),sg(),Tl(748,"code",40),iN(749," ((resource: any, id: string) => void)"),sg()(),Tl(750,"td",21)(751,"em")(752,"strong"),iN(753,"(opcional)"),sg()(),Tl(754,"p"),iN(755,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),sg(),Tl(756,"p"),iN(757,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),sg(),Tl(758,"blockquote")(759,"p"),iN(760,"A rota pode conter um par\xE2metro chamando id."),sg()(),Tl(761,"pre")(762,"code"),iN(763,`actions = {
  save: 'detail/:id'
};
`),sg()(),Tl(764,"p"),iN(765,"Se for passado um m\xE9todo:"),sg(),Tl(766,"ul")(767,"li"),iN(768,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),Tl(769,"code"),iN(770,"{ email: 'example@email.com' }"),sg(),iN(771,"."),sg(),Tl(772,"li"),iN(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),sg()()()(),Tl(774,"tr",14)(775,"td",15)(776,"div",16)(777,"span",17),iN(778," saveNew"),Gl(779,"br"),sg()()(),Tl(780,"td",18)(781,"code",24),iN(782,"string "),sg(),Tl(783,"code",41),iN(784," ((resource: any, id?: string) => void)"),sg()(),Tl(785,"td",21)(786,"em")(787,"strong"),iN(788,"(opcional)"),sg()(),Tl(789,"p"),iN(790,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),sg(),Tl(791,"p"),iN(792,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),sg(),Tl(793,"blockquote")(794,"p"),iN(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),sg()(),Tl(796,"pre")(797,"code"),iN(798,`actions = {
  saveNew: 'new'
};
`),sg()(),Tl(799,"p"),iN(800,"A rota pode conter um par\xE2metro id."),sg(),Tl(801,"pre")(802,"code"),iN(803,`actions = {
  saveNew: 'edit/:id'
};
`),sg()(),Tl(804,"p"),iN(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),sg()()()(),Tl(806,"h4",34)(807,"code",5),iN(808,"PoPageDynamicEditBeforeCancel"),sg()(),Tl(809,"div",2)(810,"p"),iN(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Tl(812,"code"),iN(813,"beforeCancel"),sg(),iN(814,"."),sg()(),Tl(815,"h4",10),iN(816,"Propriedades"),sg(),Tl(817,"table",11)(818,"tr",12)(819,"th",13),iN(820,"Nome"),sg(),Tl(821,"th",13),iN(822,"Tipo"),sg(),Tl(823,"th",13),iN(824,"Descri\xE7\xE3o"),sg()(),Tl(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),iN(829," allowAction"),Gl(830,"br"),sg()()(),Tl(831,"td",18)(832,"code",22),iN(833,"boolean"),sg()(),Tl(834,"td",21)(835,"em")(836,"strong"),iN(837,"(opcional)"),sg()(),Tl(838,"p"),iN(839,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),sg()()(),Tl(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),iN(844," newUrl"),Gl(845,"br"),sg()()(),Tl(846,"td",18)(847,"code",24),iN(848,"string"),sg()(),Tl(849,"td",21)(850,"em")(851,"strong"),iN(852,"(opcional)"),sg()(),Tl(853,"p"),iN(854,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),Tl(855,"code"),iN(856,"cancel"),sg(),iN(857,"."),sg()()()(),Tl(858,"h4",34)(859,"code",5),iN(860,"PoPageDynamicEditBeforeSaveNew"),sg()(),Tl(861,"div",2)(862,"p"),iN(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Tl(864,"code"),iN(865,"beforeSaveNew"),sg(),iN(866,"."),sg()(),Tl(867,"h4",10),iN(868,"Propriedades"),sg(),Tl(869,"table",11)(870,"tr",12)(871,"th",13),iN(872,"Nome"),sg(),Tl(873,"th",13),iN(874,"Tipo"),sg(),Tl(875,"th",13),iN(876,"Descri\xE7\xE3o"),sg()(),Tl(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),iN(881," allowAction"),Gl(882,"br"),sg()()(),Tl(883,"td",18)(884,"code",22),iN(885,"boolean"),sg()(),Tl(886,"td",21)(887,"em")(888,"strong"),iN(889,"(opcional)"),sg()(),Tl(890,"p"),iN(891,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),sg()()(),Tl(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),iN(896," newUrl"),Gl(897,"br"),sg()()(),Tl(898,"td",18)(899,"code",24),iN(900,"string"),sg()(),Tl(901,"td",21)(902,"em")(903,"strong"),iN(904,"(opcional)"),sg()(),Tl(905,"p"),iN(906,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),Tl(907,"code"),iN(908,"saveNew"),sg(),iN(909,"."),sg()()(),Tl(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),iN(914," resource"),Gl(915,"br"),sg()()(),Tl(916,"td",18)(917,"code",42),iN(918,"any"),sg()(),Tl(919,"td",21)(920,"em")(921,"strong"),iN(922,"(opcional)"),sg()(),Tl(923,"p"),iN(924,"Recurso atualizado."),sg(),Tl(925,"p"),iN(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Tl(927,"code"),iN(928,"key: true"),sg(),iN(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),sg(),Tl(930,"ul")(931,"li")(932,"p"),iN(933,"recurso anterior com a propriedade id foi que definida como "),Tl(934,"em"),iN(935,"key"),sg(),iN(936,":"),sg(),Tl(937,"pre")(938,"code"),iN(939,`{ id: 1, name: 'Ane' }
`),sg()()(),Tl(940,"li")(941,"p"),iN(942,"recurso retornado no "),Tl(943,"code"),iN(944,"beforeSaveNew"),sg(),iN(945,":"),sg(),Tl(946,"pre")(947,"code"),iN(948,`{ id: 50, age: 23 }
`),sg()()(),Tl(949,"li")(950,"p"),iN(951,"Mesclagem do recurso:"),sg(),Tl(952,"pre")(953,"code"),iN(954,`{ id: 1, name: 'Ane', age: 23 }
`),sg()()()(),Tl(955,"blockquote")(956,"p"),iN(957,"Caso "),Tl(958,"code"),iN(959,"allowAction"),sg(),iN(960," seja "),Tl(961,"code"),iN(962,"false"),sg(),iN(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),sg()()()()(),Tl(964,"h4",34)(965,"code",5),iN(966,"PoPageDynamicEditBeforeSave"),sg()(),Tl(967,"div",2)(968,"p"),iN(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Tl(970,"code"),iN(971,"beforeSave"),sg(),iN(972,"."),sg()(),Tl(973,"h4",10),iN(974,"Propriedades"),sg(),Tl(975,"table",11)(976,"tr",12)(977,"th",13),iN(978,"Nome"),sg(),Tl(979,"th",13),iN(980,"Tipo"),sg(),Tl(981,"th",13),iN(982,"Descri\xE7\xE3o"),sg()(),Tl(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),iN(987," allowAction"),Gl(988,"br"),sg()()(),Tl(989,"td",18)(990,"code",22),iN(991,"boolean"),sg()(),Tl(992,"td",21)(993,"em")(994,"strong"),iN(995,"(opcional)"),sg()(),Tl(996,"p"),iN(997,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),sg()()(),Tl(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),iN(1002," newUrl"),Gl(1003,"br"),sg()()(),Tl(1004,"td",18)(1005,"code",24),iN(1006,"string"),sg()(),Tl(1007,"td",21)(1008,"em")(1009,"strong"),iN(1010,"(opcional)"),sg()(),Tl(1011,"p"),iN(1012,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),Tl(1013,"code"),iN(1014,"save"),sg(),iN(1015,"."),sg()()(),Tl(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),iN(1020," resource"),Gl(1021,"br"),sg()()(),Tl(1022,"td",18)(1023,"code",42),iN(1024,"any"),sg()(),Tl(1025,"td",21)(1026,"em")(1027,"strong"),iN(1028,"(opcional)"),sg()(),Tl(1029,"p"),iN(1030,"Recurso atualizado."),sg(),Tl(1031,"p"),iN(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),sg(),Tl(1033,"ul")(1034,"li")(1035,"p"),iN(1036,"recurso anterior:"),sg(),Tl(1037,"pre")(1038,"code"),iN(1039,`{ name: 'Ane' }
`),sg()()(),Tl(1040,"li")(1041,"p"),iN(1042,"recurso retornado no "),Tl(1043,"code"),iN(1044,"beforeSave"),sg(),iN(1045,":"),sg(),Tl(1046,"pre")(1047,"code"),iN(1048,`{ age: 23 }
`),sg()()(),Tl(1049,"li")(1050,"p"),iN(1051,"Mesclagem do recurso:"),sg(),Tl(1052,"pre")(1053,"code"),iN(1054,`{ name: 'Ane', age: 23 }
`),sg()()()(),Tl(1055,"blockquote")(1056,"p"),iN(1057,"Caso "),Tl(1058,"code"),iN(1059,"allowAction"),sg(),iN(1060," seja "),Tl(1061,"code"),iN(1062,"false"),sg(),iN(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),sg()()()()(),Tl(1064,"h4",34)(1065,"code",5),iN(1066,"PoPageDynamicEditField"),sg()(),Tl(1067,"div",2)(1068,"p"),iN(1069,"Interface dos fields usados para compor o template "),Tl(1070,"code"),iN(1071,"po-page-dynamic-edit"),sg(),iN(1072,`.
Herda as defini\xE7\xF5es da interface
`),Tl(1073,"a",43),iN(1074,"PoDynamicFormField"),sg(),iN(1075,"."),sg()(),Tl(1076,"h4",10),iN(1077,"Propriedades"),sg(),Tl(1078,"table",11)(1079,"tr",12)(1080,"th",13),iN(1081,"Nome"),sg(),Tl(1082,"th",13),iN(1083,"Tipo"),sg(),Tl(1084,"th",13),iN(1085,"Descri\xE7\xE3o"),sg()(),Tl(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),iN(1090," duplicate"),Gl(1091,"br"),sg()()(),Tl(1092,"td",18)(1093,"code",22),iN(1094,"boolean"),sg()(),Tl(1095,"td",21)(1096,"em")(1097,"strong"),iN(1098,"(opcional)"),sg()(),Tl(1099,"p"),iN(1100,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),sg()()()(),Tl(1101,"h4",34)(1102,"code",5),iN(1103,"PoPageDynamicEditLiterals"),sg()(),Tl(1104,"div",2)(1105,"p"),iN(1106,"Interface para defini\xE7\xE3o das literais usadas no "),Tl(1107,"code"),iN(1108,"po-page-dynamic-edit"),sg(),iN(1109,"."),sg()(),Tl(1110,"h4",10),iN(1111,"Propriedades"),sg(),Tl(1112,"table",11)(1113,"tr",12)(1114,"th",13),iN(1115,"Nome"),sg(),Tl(1116,"th",13),iN(1117,"Tipo"),sg(),Tl(1118,"th",13),iN(1119,"Descri\xE7\xE3o"),sg()(),Tl(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),iN(1124," cancelConfirmMessage"),Gl(1125,"br"),sg()()(),Tl(1126,"td",18)(1127,"code",24),iN(1128,"string"),sg()(),Tl(1129,"td",21)(1130,"em")(1131,"strong"),iN(1132,"(opcional)"),sg()(),Tl(1133,"p"),iN(1134,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),sg()()(),Tl(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),iN(1139," detailActionNew"),Gl(1140,"br"),sg()()(),Tl(1141,"td",18)(1142,"code",24),iN(1143,"string"),sg()(),Tl(1144,"td",21)(1145,"em")(1146,"strong"),iN(1147,"(opcional)"),sg()(),Tl(1148,"p"),iN(1149,"R\xF3tulo exibido no bot\xE3o "),Tl(1150,"code"),iN(1151,"Novo"),sg(),iN(1152,"."),sg()()(),Tl(1153,"tr",14)(1154,"td",15)(1155,"div",16)(1156,"span",17),iN(1157," pageActionCancel"),Gl(1158,"br"),sg()()(),Tl(1159,"td",18)(1160,"code",24),iN(1161,"string"),sg()(),Tl(1162,"td",21)(1163,"em")(1164,"strong"),iN(1165,"(opcional)"),sg()(),Tl(1166,"p"),iN(1167,"R\xF3tulo exibido no bot\xE3o "),Tl(1168,"code"),iN(1169,"Cancelar"),sg(),iN(1170,"."),sg()()(),Tl(1171,"tr",14)(1172,"td",15)(1173,"div",16)(1174,"span",17),iN(1175," pageActionSave"),Gl(1176,"br"),sg()()(),Tl(1177,"td",18)(1178,"code",24),iN(1179,"string"),sg()(),Tl(1180,"td",21)(1181,"em")(1182,"strong"),iN(1183,"(opcional)"),sg()(),Tl(1184,"p"),iN(1185,"R\xF3tulo exibido no bot\xE3o "),Tl(1186,"code"),iN(1187,"Salvar"),sg(),iN(1188,"."),sg()()(),Tl(1189,"tr",14)(1190,"td",15)(1191,"div",16)(1192,"span",17),iN(1193," pageActionSaveNew"),Gl(1194,"br"),sg()()(),Tl(1195,"td",18)(1196,"code",24),iN(1197,"string"),sg()(),Tl(1198,"td",21)(1199,"em")(1200,"strong"),iN(1201,"(opcional)"),sg()(),Tl(1202,"p"),iN(1203,"R\xF3tulo exibido no bot\xE3o "),Tl(1204,"code"),iN(1205,"Salvar e novo"),sg(),iN(1206,"."),sg()()(),Tl(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),iN(1211," registerNotFound"),Gl(1212,"br"),sg()()(),Tl(1213,"td",18)(1214,"code",24),iN(1215,"string"),sg()(),Tl(1216,"td",21)(1217,"em")(1218,"strong"),iN(1219,"(opcional)"),sg()(),Tl(1220,"p"),iN(1221,"Texto exibido para resgistro n\xE3o encontrado."),sg()()(),Tl(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),iN(1226," saveNotificationError"),Gl(1227,"br"),sg()()(),Tl(1228,"td",18)(1229,"code",24),iN(1230,"string"),sg()(),Tl(1231,"td",21)(1232,"em")(1233,"strong"),iN(1234,"(opcional)"),sg()(),Tl(1235,"p"),iN(1236,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),sg()()(),Tl(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),iN(1241," saveNotificationSuccessSave"),Gl(1242,"br"),sg()()(),Tl(1243,"td",18)(1244,"code",24),iN(1245,"string"),sg()(),Tl(1246,"td",21)(1247,"em")(1248,"strong"),iN(1249,"(opcional)"),sg()(),Tl(1250,"p"),iN(1251,"Texto exibido para recurso salvo com sucesso."),sg()()(),Tl(1252,"tr",14)(1253,"td",15)(1254,"div",16)(1255,"span",17),iN(1256," saveNotificationSuccessUpdate"),Gl(1257,"br"),sg()()(),Tl(1258,"td",18)(1259,"code",24),iN(1260,"string"),sg()(),Tl(1261,"td",21)(1262,"em")(1263,"strong"),iN(1264,"(opcional)"),sg()(),Tl(1265,"p"),iN(1266,"Texto exibido para recurso atualizado com sucesso."),sg()()(),Tl(1267,"tr",14)(1268,"td",15)(1269,"div",16)(1270,"span",17),iN(1271," saveNotificationWarning"),Gl(1272,"br"),sg()()(),Tl(1273,"td",18)(1274,"code",24),iN(1275,"string"),sg()(),Tl(1276,"td",21)(1277,"em")(1278,"strong"),iN(1279,"(opcional)"),sg()(),Tl(1280,"p"),iN(1281,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),sg()()()(),Tl(1282,"h4",34)(1283,"code",5),iN(1284,"PoPageDynamicEditMetadata"),sg()(),Tl(1285,"div",2)(1286,"p"),iN(1287,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),Gl(1288,"a",44),sg()(),Tl(1289,"h4",10),iN(1290,"Propriedades"),sg(),Tl(1291,"table",11)(1292,"tr",12)(1293,"th",13),iN(1294,"Nome"),sg(),Tl(1295,"th",13),iN(1296,"Tipo"),sg(),Tl(1297,"th",13),iN(1298,"Descri\xE7\xE3o"),sg()(),Tl(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),iN(1303," actions"),Gl(1304,"br"),sg()()(),Tl(1305,"td",18)(1306,"code",19),iN(1307,"PoPageDynamicEditActions"),sg()(),Tl(1308,"td",21)(1309,"em")(1310,"strong"),iN(1311,"(opcional)"),sg()(),Tl(1312,"p"),iN(1313,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),sg()()(),Tl(1314,"tr",14)(1315,"td",15)(1316,"div",16)(1317,"span",17),iN(1318," autoRouter"),Gl(1319,"br"),sg()()(),Tl(1320,"td",18)(1321,"code",22),iN(1322,"boolean"),sg()(),Tl(1323,"td",21)(1324,"em")(1325,"strong"),iN(1326,"(opcional)"),sg()(),Tl(1327,"p"),iN(1328,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),Tl(1329,"code"),iN(1330,"p-actions"),sg()(),Tl(1331,"p"),iN(1332,"As rotas criadas ser\xE3o baseadas na propriedade "),Tl(1333,"code"),iN(1334,"p-actions"),sg(),iN(1335,"."),sg(),Tl(1336,"blockquote")(1337,"p"),iN(1338,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),Tl(1339,"code"),iN(1340,"**"),sg(),iN(1341,") especificada."),sg()()()(),Tl(1342,"tr",14)(1343,"td",15)(1344,"div",16)(1345,"span",17),iN(1346," breadcrumb"),Gl(1347,"br"),sg()()(),Tl(1348,"td",18)(1349,"code",23),iN(1350,"PoBreadcrumb"),sg()(),Tl(1351,"td",21)(1352,"em")(1353,"strong"),iN(1354,"(opcional)"),sg()(),Tl(1355,"p"),iN(1356,"Objeto com propriedades do breadcrumb."),sg()()(),Tl(1357,"tr",14)(1358,"td",15)(1359,"div",16)(1360,"span",17),iN(1361," fields"),Gl(1362,"br"),sg()()(),Tl(1363,"td",18)(1364,"code",26),iN(1365,"Array<PoPageDynamicEditField>"),sg()(),Tl(1366,"td",21)(1367,"em")(1368,"strong"),iN(1369,"(opcional)"),sg()(),Tl(1370,"p"),iN(1371,"Lista dos campos usados."),sg()()(),Tl(1372,"tr",14)(1373,"td",15)(1374,"div",16)(1375,"span",17),iN(1376," title"),Gl(1377,"br"),sg()()(),Tl(1378,"td",18)(1379,"code",24),iN(1380,"string"),sg()(),Tl(1381,"td",21)(1382,"em")(1383,"strong"),iN(1384,"(opcional)"),sg()(),Tl(1385,"p"),iN(1386,"T\xEDtulo da p\xE1gina."),sg()()(),Tl(1387,"tr",14)(1388,"td",15)(1389,"div",16)(1390,"span",17),iN(1391," version"),Gl(1392,"br"),sg()()(),Tl(1393,"td",18)(1394,"code",45),iN(1395,"number"),sg()(),Tl(1396,"td",21)(1397,"p"),iN(1398,"Vers\xE3o do metadado devolvido pelo backend."),sg()()()(),Tl(1399,"h4",34)(1400,"code",5),iN(1401,"PoPageDynamicEditOptions"),sg()(),Tl(1402,"div",2)(1403,"p"),iN(1404,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),sg()(),Tl(1405,"h4",10),iN(1406,"Propriedades"),sg(),Tl(1407,"table",11)(1408,"tr",12)(1409,"th",13),iN(1410,"Nome"),sg(),Tl(1411,"th",13),iN(1412,"Tipo"),sg(),Tl(1413,"th",13),iN(1414,"Descri\xE7\xE3o"),sg()(),Tl(1415,"tr",14)(1416,"td",15)(1417,"div",16)(1418,"span",17),iN(1419," actions"),Gl(1420,"br"),sg()()(),Tl(1421,"td",18)(1422,"code",19),iN(1423,"PoPageDynamicEditActions"),sg()(),Tl(1424,"td",21)(1425,"em")(1426,"strong"),iN(1427,"(opcional)"),sg()(),Tl(1428,"p"),iN(1429,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),sg()()(),Tl(1430,"tr",14)(1431,"td",15)(1432,"div",16)(1433,"span",17),iN(1434," breadcrumb"),Gl(1435,"br"),sg()()(),Tl(1436,"td",18)(1437,"code",23),iN(1438,"PoBreadcrumb"),sg()(),Tl(1439,"td",21)(1440,"em")(1441,"strong"),iN(1442,"(opcional)"),sg()(),Tl(1443,"p"),iN(1444,"Objeto com propriedades do breadcrumb."),sg()()(),Tl(1445,"tr",14)(1446,"td",15)(1447,"div",16)(1448,"span",17),iN(1449," fields"),Gl(1450,"br"),sg()()(),Tl(1451,"td",18)(1452,"code",26),iN(1453,"Array<PoPageDynamicEditField>"),sg()(),Tl(1454,"td",21)(1455,"em")(1456,"strong"),iN(1457,"(opcional)"),sg()(),Tl(1458,"p"),iN(1459,"Lista dos campos usados."),sg()()(),Tl(1460,"tr",14)(1461,"td",15)(1462,"div",16)(1463,"span",17),iN(1464," title"),Gl(1465,"br"),sg()()(),Tl(1466,"td",18)(1467,"code",24),iN(1468,"string"),sg()(),Tl(1469,"td",21)(1470,"em")(1471,"strong"),iN(1472,"(opcional)"),sg()(),Tl(1473,"p"),iN(1474,"T\xEDtulo da p\xE1gina."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return d.changeTab("doc")}),Gl(3,"sample-po-page-dynamic-edit-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return d.changeTab("web")}),Gl(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),sg()()()),o&2&&(nw("p-actions",d.actions),Vp(2),nw("p-active",d.activeTab==="doc"),Vp(2),nw("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"));},dependencies:[lNe,Wme,jme,L,O,_],encapsulation:2,changeDetection:1})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[DL.forChild(te),DL]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,U]})}return a})();export{fe as DocPoPageDynamicEditModule};