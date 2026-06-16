import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cI as lI,N as Ul,S as YE,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,a3 as D3}from'./main-6SPFG3VI.js';var T=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:"id",label:"C\xF3digo",align:"right",readonly:true,freeze:true,width:120},{property:"name",label:"Nome",width:"200px",required:true},{property:"occupation",label:"Cargo",width:150},{property:"email",label:"E-mail",width:100,required:true},{property:"status",label:"Status",align:"center",width:80},{property:"lastActivity",label:"\xDAltima atividade",align:"center",width:140}];data=[{id:629131,name:"Jhonatas Silvano",occupation:"Developer",email:"jhonatas.silvano@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:78492341,name:"Rafael Gon\xE7alvez",occupation:"Engineer",email:"rafael.goncalvez@po-ui.com.br",status:"Active",lastActivity:"2018-12-10"},{id:986434,name:"Nicoli Pereira",occupation:"Developer",email:"nicoli.pereira@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:4235652,name:"Mauricio Jo\xE3o Mendez",occupation:"Developer",email:"mauricio.joao@po-ui.com.br",status:"Active",lastActivity:"2018-11-23"},{id:629131,name:"Leandro Oliveira",occupation:"Engineer",email:"leandro.oliveira@po-ui.com.br",status:"Active",lastActivity:"2018-11-30"}];onBeforeSave(a,o){return a.occupation!=="Engineer"}onAfterSave(a){}onBeforeRemove(a){return  true}onAfterRemove(a){}onBeforeInsert(a){return  true}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic"]],standalone:false,decls:1,vars:3,consts:[[3,"p-row-actions","p-data","p-columns"]],template:function(o,l){o&1&&Ul(0,"po-grid",0),o&2&&YE("p-row-actions",l.rowActions)("p-data",l.data)("p-columns",l.columns);},dependencies:[lI],encapsulation:2,changeDetection:1})}return n})();var q=n=>({"docs-sample-code-tabs":n}),G=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Grid Basic"),ng(),wl(4,"a",2),ut("click",function(){return l.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-grid-basic/sample-po-grid-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-grid-basic/sample-po-grid-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-grid-basic',
  templateUrl: './sample-po-grid-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGridBasicComponent {
  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),
    afterSave: this.onAfterSave.bind(this),
    beforeRemove: this.onBeforeRemove.bind(this),
    afterRemove: this.onAfterRemove.bind(this),
    beforeInsert: this.onBeforeInsert.bind(this)
  };

  columns = [
    { property: 'id', label: 'C\xF3digo', align: 'right', readonly: true, freeze: true, width: 120 },
    { property: 'name', label: 'Nome', width: '200px', required: true },
    { property: 'occupation', label: 'Cargo', width: 150 },
    { property: 'email', label: 'E-mail', width: 100, required: true },
    { property: 'status', label: 'Status', align: 'center', width: 80 },
    { property: 'lastActivity', label: '\xDAltima atividade', align: 'center', width: 140 }
  ];

  data = [
    {
      id: 629131,
      name: 'Jhonatas Silvano',
      occupation: 'Developer',
      email: 'jhonatas.silvano@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 78492341,
      name: 'Rafael Gon\xE7alvez',
      occupation: 'Engineer',
      email: 'rafael.goncalvez@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-10'
    },
    {
      id: 986434,
      name: 'Nicoli Pereira',
      occupation: 'Developer',
      email: 'nicoli.pereira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 4235652,
      name: 'Mauricio Jo\xE3o Mendez',
      occupation: 'Developer',
      email: 'mauricio.joao@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-23'
    },
    {
      id: 629131,
      name: 'Leandro Oliveira',
      occupation: 'Engineer',
      email: 'leandro.oliveira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-30'
    }
  ];

  onBeforeSave(row: any, old: any) {
    return row.occupation !== 'Engineer';
  }

  onAfterSave(row) {
    // console.log('onAfterSave(new): ', row);
  }

  onBeforeRemove(row) {
    // console.log('onBeforeRemove: ', row);

    return true;
  }

  onAfterRemove(row) {
    // console.log('onAfterRemove: ', row);
  }

  onBeforeInsert(row) {
    // console.log('onBeforeInsert: ', row);

    return true;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-grid-basic"),ng(),Ul(23,"hr")),o&2&&(Pp(5),Ax("po-icon "+l.sampleCodeButtonIcon),Pp(),cg(" ",l.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,q,l.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,T],encapsulation:2})}return n})();var M=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-doc"]],standalone:false,decls:217,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoGridRowActions"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"]],template:function(o,l){o&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoGridModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,"M\xF3dulo do componente po-grid."),ng()(),wl(7,"h3",3),Ux(8,"Componente"),ng(),wl(9,"h4",4)(10,"code",5),Ux(11,"PoGridComponent"),ng()(),wl(12,"div",2)(13,"blockquote")(14,"p"),Ux(15,"Componente em desenvolvimento, podendo haver BREAKING CHANGES nas pr\xF3ximas vers\xF5es."),ng()(),wl(16,"p"),Ux(17,"Componente grid."),ng(),wl(18,"p"),Ux(19,"A\xE7\xF5es / atalhos:"),ng(),wl(20,"ul")(21,"li"),Ux(22,"ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;"),ng(),wl(23,"li"),Ux(24,"ARROW-DOWN: Navega para celula inferior;"),ng(),wl(25,"li"),Ux(26,"ARROW-RIGHT: Navega para celula direita;"),ng(),wl(27,"li"),Ux(28,"ARROW-LEFT: Navega para celula esquerda;"),ng(),wl(29,"li"),Ux(30,"TAB: Navega para pr\xF3xima celula;"),ng(),wl(31,"li"),Ux(32,"SHIFT+TAB: Navega para celula anterior;"),ng(),wl(33,"li"),Ux(34,"CTRL+DEL: Remove linha;"),ng(),wl(35,"li"),Ux(36,"DEL/BACKSPACE: Limpa celula;"),ng(),wl(37,"li"),Ux(38,"ENTER: Edita linha com valor atual/Confirma edi\xE7\xE3o da celula;"),ng(),wl(39,"li"),Ux(40,"DOUBLE-CLICK: Edita linha com valor atual;"),ng(),wl(41,"li"),Ux(42,"ESC: Cancela edi\xE7\xE3o da celula / Cancela inser\xE7\xE3o de linhas em branco;"),ng(),wl(43,"li"),Ux(44,"A..Z/0..9: Inicia edi\xE7\xE3o com valor em branco."),ng()()(),wl(45,"div",6)(46,"h4",7),Ux(47,"Seletor"),ng(),wl(48,"pre",8),Ux(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),ng()(),wl(50,"h4",9),Ux(51,"Propriedades"),ng(),wl(52,"table",10)(53,"tr",11)(54,"th",12),Ux(55,"Nome"),ng(),wl(56,"th",12),Ux(57,"Tipo"),ng(),wl(58,"th",12),Ux(59,"Padr\xE3o"),ng(),wl(60,"th",12),Ux(61,"Descri\xE7\xE3o"),ng()(),wl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),Ux(66," p-columns"),Ul(67,"br"),ng()()(),wl(68,"td",17)(69,"code",18),Ux(70,"Array<any>"),ng()(),wl(71,"td",19),Ux(72,"-"),ng(),wl(73,"td",20)(74,"p"),Ux(75,"Colunas exibidas no grid."),ng()()(),wl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),Ux(80," p-data"),Ul(81,"br"),ng()()(),wl(82,"td",17)(83,"code",18),Ux(84,"Array<any>"),ng()(),wl(85,"td",19),Ux(86,"-"),ng(),wl(87,"td",20)(88,"p"),Ux(89,"Lista com os dados que ser\xE3o exibidos no grid."),ng()()(),wl(90,"tr",13)(91,"td",14)(92,"div",15)(93,"span",16),Ux(94," p-row-actions"),Ul(95,"br"),ng()()(),wl(96,"td",17)(97,"code",21),Ux(98,"PoGridRowActions"),ng()(),wl(99,"td",19),Ux(100,"-"),ng(),wl(101,"td",20)(102,"p"),Ux(103,"A\xE7\xF5es disparadas quando uma linha do grid \xE9 manipulada."),ng()()()(),wl(104,"h3"),Ux(105,"Interfaces"),ng(),wl(106,"h4",22)(107,"code",5),Ux(108,"PoGridRowActions"),ng()(),wl(109,"div",2)(110,"p"),Ux(111,"A\xE7\xF5es executadas durante a manipula\xE7\xE3o das linhas do grid."),ng()(),wl(112,"h4",9),Ux(113,"Propriedades"),ng(),wl(114,"table",10)(115,"tr",11)(116,"th",12),Ux(117,"Nome"),ng(),wl(118,"th",12),Ux(119,"Tipo"),ng(),wl(120,"th",12),Ux(121,"Descri\xE7\xE3o"),ng()(),wl(122,"tr",13)(123,"td",14)(124,"div",15)(125,"span",16),Ux(126," afterRemove"),Ul(127,"br"),ng()()(),wl(128,"td",17)(129,"code",23),Ux(130,"() => void"),ng()(),wl(131,"td",20)(132,"em")(133,"strong"),Ux(134,"(opcional)"),ng()(),wl(135,"p"),Ux(136,"M\xE9todo executado ap\xF3s uma linha do grid ser removida."),ng()()(),wl(137,"tr",13)(138,"td",14)(139,"div",15)(140,"span",16),Ux(141," afterSave"),Ul(142,"br"),ng()()(),wl(143,"td",17)(144,"code",24),Ux(145,"(row: any) => void"),ng()(),wl(146,"td",20)(147,"em")(148,"strong"),Ux(149,"(opcional)"),ng()(),wl(150,"p"),Ux(151,"M\xE9todo executado ap\xF3s uma linha do grid ser salva, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados."),ng()()(),wl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),Ux(156," beforeInsert"),Ul(157,"br"),ng()()(),wl(158,"td",17)(159,"code",25),Ux(160,"(row: any) => boolean"),ng()(),wl(161,"td",20)(162,"em")(163,"strong"),Ux(164,"(opcional)"),ng()(),wl(165,"p"),Ux(166,"M\xE9todo executado antes de uma nova linha ser inserida no grid, se o m\xE9todo retornar algo diferente de "),wl(167,"code"),Ux(168,"true"),ng(),Ux(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),ng(),wl(170,"p"),Ux(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),ng(),wl(172,"pre")(173,"code"),Ux(174,`rowActions: PoGridRowActions = {
  beforeInsert: this.onBeforeInsert.bind(this);
  ...
};

// Inicia a linha j\xE1 com as propriedades \`name\` e \`created\` preenchidas.
onBeforeInsert(row: any) {
  row.name = 'Fulano';
  row.created = '2018-20-12';
  ...

  return true;
}
`),ng()()()(),wl(175,"tr",13)(176,"td",14)(177,"div",15)(178,"span",16),Ux(179," beforeRemove"),Ul(180,"br"),ng()()(),wl(181,"td",17)(182,"code",25),Ux(183,"(row: any) => boolean"),ng()(),wl(184,"td",20)(185,"em")(186,"strong"),Ux(187,"(opcional)"),ng()(),wl(188,"p"),Ux(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),wl(190,"code"),Ux(191,"true"),ng(),Ux(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),ng()()(),wl(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),Ux(197," beforeSave"),Ul(198,"br"),ng()()(),wl(199,"td",17)(200,"code",26),Ux(201,"(updatedRow: any, originalRow: any) => boolean"),ng()(),wl(202,"td",20)(203,"em")(204,"strong"),Ux(205,"(opcional)"),ng()(),wl(206,"p"),Ux(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),wl(208,"code"),Ux(209,"true"),ng(),Ux(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),ng(),wl(211,"blockquote")(212,"p"),Ux(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),ng()(),wl(214,"pre")(215,"code"),Ux(216,`rowActions: PoGridRowActions = {
  beforeSave: this.onBeforeSave.bind(this);
  ...
};

onBeforeSave(updatedRow: any, originalRow: any) {
  // Verifica se a propriedade \`name\` foi alterada.
  if (updatedRow.name !== originalRow.name) {
    return false;
  }

  // Verifica se \xE9 menor de idade
  if (updatedRow.age < 18) {
    return false;
  }
  ...

  updatedRow.updated = '2018-20-12';

  return true;
}
`),ng()()()()()());},dependencies:[fP],encapsulation:2})}return n})();var I=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(C(Xn),C(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Grid",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return l.changeTab("doc")}),Ul(3,"sample-po-grid-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return l.changeTab("web")}),Ul(5,"sample-po-grid-basic-view"),ng()()()),o&2&&(YE("p-actions",l.actions),Pp(2),YE("p-active",l.activeTab==="doc"),Pp(2),YE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[D3,Vd,Rd,G,M],encapsulation:2})}return n})();var O=[{path:"",component:I}],F=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[vL.forChild(O),vL]})}return n})();var le=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[u5,F]})}return n})();export{le as DocPoGridModule};