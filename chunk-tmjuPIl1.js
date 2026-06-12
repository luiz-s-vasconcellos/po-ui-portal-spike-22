import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,dh as bNe,R as Hl,Z as ZE,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,a3 as SNe}from'./main-OS7VVRJY.js';var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:"id",label:"C\xF3digo",align:"right",readonly:true,freeze:true,width:120},{property:"name",label:"Nome",width:"200px",required:true},{property:"occupation",label:"Cargo",width:150},{property:"email",label:"E-mail",width:100,required:true},{property:"status",label:"Status",align:"center",width:80},{property:"lastActivity",label:"\xDAltima atividade",align:"center",width:140}];data=[{id:629131,name:"Jhonatas Silvano",occupation:"Developer",email:"jhonatas.silvano@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:78492341,name:"Rafael Gon\xE7alvez",occupation:"Engineer",email:"rafael.goncalvez@po-ui.com.br",status:"Active",lastActivity:"2018-12-10"},{id:986434,name:"Nicoli Pereira",occupation:"Developer",email:"nicoli.pereira@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:4235652,name:"Mauricio Jo\xE3o Mendez",occupation:"Developer",email:"mauricio.joao@po-ui.com.br",status:"Active",lastActivity:"2018-11-23"},{id:629131,name:"Leandro Oliveira",occupation:"Engineer",email:"leandro.oliveira@po-ui.com.br",status:"Active",lastActivity:"2018-11-30"}];onBeforeSave(a,o){return a.occupation!=="Engineer"}onAfterSave(a){}onBeforeRemove(a){return  true}onAfterRemove(a){}onBeforeInsert(a){return  true}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic"]],standalone:false,decls:1,vars:3,consts:[[3,"p-row-actions","p-data","p-columns"]],template:function(o,l){o&1&&Hl(0,"po-grid",0),o&2&&ZE("p-row-actions",l.rowActions)("p-data",l.data)("p-columns",l.columns);},dependencies:[bNe],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n}),M=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Grid Basic"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-grid-basic/sample-po-grid-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-grid-basic/sample-po-grid-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-grid-basic"),og(),Hl(23,"hr")),o&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,G],encapsulation:2})}return n})();var I=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-doc"]],standalone:false,decls:217,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoGridRowActions"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"]],template:function(o,l){o&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoGridModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,"M\xF3dulo do componente po-grid."),og()(),Cl(7,"h3",3),qx(8,"Componente"),og(),Cl(9,"h4",4)(10,"code",5),qx(11,"PoGridComponent"),og()(),Cl(12,"div",2)(13,"blockquote")(14,"p"),qx(15,"Componente em desenvolvimento, podendo haver BREAKING CHANGES nas pr\xF3ximas vers\xF5es."),og()(),Cl(16,"p"),qx(17,"Componente grid."),og(),Cl(18,"p"),qx(19,"A\xE7\xF5es / atalhos:"),og(),Cl(20,"ul")(21,"li"),qx(22,"ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;"),og(),Cl(23,"li"),qx(24,"ARROW-DOWN: Navega para celula inferior;"),og(),Cl(25,"li"),qx(26,"ARROW-RIGHT: Navega para celula direita;"),og(),Cl(27,"li"),qx(28,"ARROW-LEFT: Navega para celula esquerda;"),og(),Cl(29,"li"),qx(30,"TAB: Navega para pr\xF3xima celula;"),og(),Cl(31,"li"),qx(32,"SHIFT+TAB: Navega para celula anterior;"),og(),Cl(33,"li"),qx(34,"CTRL+DEL: Remove linha;"),og(),Cl(35,"li"),qx(36,"DEL/BACKSPACE: Limpa celula;"),og(),Cl(37,"li"),qx(38,"ENTER: Edita linha com valor atual/Confirma edi\xE7\xE3o da celula;"),og(),Cl(39,"li"),qx(40,"DOUBLE-CLICK: Edita linha com valor atual;"),og(),Cl(41,"li"),qx(42,"ESC: Cancela edi\xE7\xE3o da celula / Cancela inser\xE7\xE3o de linhas em branco;"),og(),Cl(43,"li"),qx(44,"A..Z/0..9: Inicia edi\xE7\xE3o com valor em branco."),og()()(),Cl(45,"div",6)(46,"h4",7),qx(47,"Seletor"),og(),Cl(48,"pre",8),qx(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),og()(),Cl(50,"h4",9),qx(51,"Propriedades"),og(),Cl(52,"table",10)(53,"tr",11)(54,"th",12),qx(55,"Nome"),og(),Cl(56,"th",12),qx(57,"Tipo"),og(),Cl(58,"th",12),qx(59,"Padr\xE3o"),og(),Cl(60,"th",12),qx(61,"Descri\xE7\xE3o"),og()(),Cl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),qx(66," p-columns"),Hl(67,"br"),og()()(),Cl(68,"td",17)(69,"code",18),qx(70,"Array<any>"),og()(),Cl(71,"td",19),qx(72,"-"),og(),Cl(73,"td",20)(74,"p"),qx(75,"Colunas exibidas no grid."),og()()(),Cl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),qx(80," p-data"),Hl(81,"br"),og()()(),Cl(82,"td",17)(83,"code",18),qx(84,"Array<any>"),og()(),Cl(85,"td",19),qx(86,"-"),og(),Cl(87,"td",20)(88,"p"),qx(89,"Lista com os dados que ser\xE3o exibidos no grid."),og()()(),Cl(90,"tr",13)(91,"td",14)(92,"div",15)(93,"span",16),qx(94," p-row-actions"),Hl(95,"br"),og()()(),Cl(96,"td",17)(97,"code",21),qx(98,"PoGridRowActions"),og()(),Cl(99,"td",19),qx(100,"-"),og(),Cl(101,"td",20)(102,"p"),qx(103,"A\xE7\xF5es disparadas quando uma linha do grid \xE9 manipulada."),og()()()(),Cl(104,"h3"),qx(105,"Interfaces"),og(),Cl(106,"h4",22)(107,"code",5),qx(108,"PoGridRowActions"),og()(),Cl(109,"div",2)(110,"p"),qx(111,"A\xE7\xF5es executadas durante a manipula\xE7\xE3o das linhas do grid."),og()(),Cl(112,"h4",9),qx(113,"Propriedades"),og(),Cl(114,"table",10)(115,"tr",11)(116,"th",12),qx(117,"Nome"),og(),Cl(118,"th",12),qx(119,"Tipo"),og(),Cl(120,"th",12),qx(121,"Descri\xE7\xE3o"),og()(),Cl(122,"tr",13)(123,"td",14)(124,"div",15)(125,"span",16),qx(126," afterRemove"),Hl(127,"br"),og()()(),Cl(128,"td",17)(129,"code",23),qx(130,"() => void"),og()(),Cl(131,"td",20)(132,"em")(133,"strong"),qx(134,"(opcional)"),og()(),Cl(135,"p"),qx(136,"M\xE9todo executado ap\xF3s uma linha do grid ser removida."),og()()(),Cl(137,"tr",13)(138,"td",14)(139,"div",15)(140,"span",16),qx(141," afterSave"),Hl(142,"br"),og()()(),Cl(143,"td",17)(144,"code",24),qx(145,"(row: any) => void"),og()(),Cl(146,"td",20)(147,"em")(148,"strong"),qx(149,"(opcional)"),og()(),Cl(150,"p"),qx(151,"M\xE9todo executado ap\xF3s uma linha do grid ser salva, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados."),og()()(),Cl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),qx(156," beforeInsert"),Hl(157,"br"),og()()(),Cl(158,"td",17)(159,"code",25),qx(160,"(row: any) => boolean"),og()(),Cl(161,"td",20)(162,"em")(163,"strong"),qx(164,"(opcional)"),og()(),Cl(165,"p"),qx(166,"M\xE9todo executado antes de uma nova linha ser inserida no grid, se o m\xE9todo retornar algo diferente de "),Cl(167,"code"),qx(168,"true"),og(),qx(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),og(),Cl(170,"p"),qx(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),og(),Cl(172,"pre")(173,"code"),qx(174,`rowActions: PoGridRowActions = {
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
`),og()()()(),Cl(175,"tr",13)(176,"td",14)(177,"div",15)(178,"span",16),qx(179," beforeRemove"),Hl(180,"br"),og()()(),Cl(181,"td",17)(182,"code",25),qx(183,"(row: any) => boolean"),og()(),Cl(184,"td",20)(185,"em")(186,"strong"),qx(187,"(opcional)"),og()(),Cl(188,"p"),qx(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Cl(190,"code"),qx(191,"true"),og(),qx(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),og()()(),Cl(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),qx(197," beforeSave"),Hl(198,"br"),og()()(),Cl(199,"td",17)(200,"code",26),qx(201,"(updatedRow: any, originalRow: any) => boolean"),og()(),Cl(202,"td",20)(203,"em")(204,"strong"),qx(205,"(opcional)"),og()(),Cl(206,"p"),qx(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Cl(208,"code"),qx(209,"true"),og(),qx(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),og(),Cl(211,"blockquote")(212,"p"),qx(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),og()(),Cl(214,"pre")(215,"code"),qx(216,`rowActions: PoGridRowActions = {
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
`),og()()()()()());},dependencies:[Zr],encapsulation:2})}return n})();var F=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(Cn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Grid",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return l.changeTab("doc")}),Hl(3,"sample-po-grid-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return l.changeTab("web")}),Hl(5,"sample-po-grid-basic-view"),og()()()),o&2&&(ZE("p-actions",l.actions),Lp(2),ZE("p-active",l.activeTab==="doc"),Lp(2),ZE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[SNe,ofe,lfe,M,I],encapsulation:2})}return n})();var z=[{path:"",component:F}],N=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[bL.forChild(z),bL]})}return n})();var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ca,N]})}return n})();export{oe as DocPoGridModule};