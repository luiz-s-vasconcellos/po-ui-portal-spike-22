import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,db as oNe,L as Gl,O as nw,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,a3 as lNe}from'./main-56B5DD5U.js';var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:"id",label:"C\xF3digo",align:"right",readonly:true,freeze:true,width:120},{property:"name",label:"Nome",width:"200px",required:true},{property:"occupation",label:"Cargo",width:150},{property:"email",label:"E-mail",width:100,required:true},{property:"status",label:"Status",align:"center",width:80},{property:"lastActivity",label:"\xDAltima atividade",align:"center",width:140}];data=[{id:629131,name:"Jhonatas Silvano",occupation:"Developer",email:"jhonatas.silvano@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:78492341,name:"Rafael Gon\xE7alvez",occupation:"Engineer",email:"rafael.goncalvez@po-ui.com.br",status:"Active",lastActivity:"2018-12-10"},{id:986434,name:"Nicoli Pereira",occupation:"Developer",email:"nicoli.pereira@po-ui.com.br",status:"Active",lastActivity:"2018-12-12"},{id:4235652,name:"Mauricio Jo\xE3o Mendez",occupation:"Developer",email:"mauricio.joao@po-ui.com.br",status:"Active",lastActivity:"2018-11-23"},{id:629131,name:"Leandro Oliveira",occupation:"Engineer",email:"leandro.oliveira@po-ui.com.br",status:"Active",lastActivity:"2018-11-30"}];onBeforeSave(a,o){return a.occupation!=="Engineer"}onAfterSave(a){}onBeforeRemove(a){return  true}onAfterRemove(a){}onBeforeInsert(a){return  true}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic"]],standalone:false,decls:1,vars:3,consts:[[3,"p-row-actions","p-data","p-columns"]],template:function(o,l){o&1&&Gl(0,"po-grid",0),o&2&&nw("p-row-actions",l.rowActions)("p-data",l.data)("p-columns",l.columns);},dependencies:[oNe],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n}),M=(()=>{class n{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Grid Basic"),sg(),Tl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-grid-basic/sample-po-grid-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-grid-basic/sample-po-grid-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-grid-basic"),sg(),Gl(23,"hr")),o&2&&(Vp(5),qx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,_,l.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,G],encapsulation:2,changeDetection:1})}return n})();var I=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=Un({type:n,selectors:[["sample-po-grid-doc"]],standalone:false,decls:217,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoGridRowActions"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","()","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"]],template:function(o,l){o&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoGridModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,"M\xF3dulo do componente po-grid."),sg()(),Tl(7,"h3",3),iN(8,"Componente"),sg(),Tl(9,"h4",4)(10,"code",5),iN(11,"PoGridComponent"),sg()(),Tl(12,"div",2)(13,"blockquote")(14,"p"),iN(15,"Componente em desenvolvimento, podendo haver BREAKING CHANGES nas pr\xF3ximas vers\xF5es."),sg()(),Tl(16,"p"),iN(17,"Componente grid."),sg(),Tl(18,"p"),iN(19,"A\xE7\xF5es / atalhos:"),sg(),Tl(20,"ul")(21,"li"),iN(22,"ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;"),sg(),Tl(23,"li"),iN(24,"ARROW-DOWN: Navega para celula inferior;"),sg(),Tl(25,"li"),iN(26,"ARROW-RIGHT: Navega para celula direita;"),sg(),Tl(27,"li"),iN(28,"ARROW-LEFT: Navega para celula esquerda;"),sg(),Tl(29,"li"),iN(30,"TAB: Navega para pr\xF3xima celula;"),sg(),Tl(31,"li"),iN(32,"SHIFT+TAB: Navega para celula anterior;"),sg(),Tl(33,"li"),iN(34,"CTRL+DEL: Remove linha;"),sg(),Tl(35,"li"),iN(36,"DEL/BACKSPACE: Limpa celula;"),sg(),Tl(37,"li"),iN(38,"ENTER: Edita linha com valor atual/Confirma edi\xE7\xE3o da celula;"),sg(),Tl(39,"li"),iN(40,"DOUBLE-CLICK: Edita linha com valor atual;"),sg(),Tl(41,"li"),iN(42,"ESC: Cancela edi\xE7\xE3o da celula / Cancela inser\xE7\xE3o de linhas em branco;"),sg(),Tl(43,"li"),iN(44,"A..Z/0..9: Inicia edi\xE7\xE3o com valor em branco."),sg()()(),Tl(45,"div",6)(46,"h4",7),iN(47,"Seletor"),sg(),Tl(48,"pre",8),iN(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),sg()(),Tl(50,"h4",9),iN(51,"Propriedades"),sg(),Tl(52,"table",10)(53,"tr",11)(54,"th",12),iN(55,"Nome"),sg(),Tl(56,"th",12),iN(57,"Tipo"),sg(),Tl(58,"th",12),iN(59,"Padr\xE3o"),sg(),Tl(60,"th",12),iN(61,"Descri\xE7\xE3o"),sg()(),Tl(62,"tr",13)(63,"td",14)(64,"div",15)(65,"span",16),iN(66," p-columns"),Gl(67,"br"),sg()()(),Tl(68,"td",17)(69,"code",18),iN(70,"Array<any>"),sg()(),Tl(71,"td",19),iN(72,"-"),sg(),Tl(73,"td",20)(74,"p"),iN(75,"Colunas exibidas no grid."),sg()()(),Tl(76,"tr",13)(77,"td",14)(78,"div",15)(79,"span",16),iN(80," p-data"),Gl(81,"br"),sg()()(),Tl(82,"td",17)(83,"code",18),iN(84,"Array<any>"),sg()(),Tl(85,"td",19),iN(86,"-"),sg(),Tl(87,"td",20)(88,"p"),iN(89,"Lista com os dados que ser\xE3o exibidos no grid."),sg()()(),Tl(90,"tr",13)(91,"td",14)(92,"div",15)(93,"span",16),iN(94," p-row-actions"),Gl(95,"br"),sg()()(),Tl(96,"td",17)(97,"code",21),iN(98,"PoGridRowActions"),sg()(),Tl(99,"td",19),iN(100,"-"),sg(),Tl(101,"td",20)(102,"p"),iN(103,"A\xE7\xF5es disparadas quando uma linha do grid \xE9 manipulada."),sg()()()(),Tl(104,"h3"),iN(105,"Interfaces"),sg(),Tl(106,"h4",22)(107,"code",5),iN(108,"PoGridRowActions"),sg()(),Tl(109,"div",2)(110,"p"),iN(111,"A\xE7\xF5es executadas durante a manipula\xE7\xE3o das linhas do grid."),sg()(),Tl(112,"h4",9),iN(113,"Propriedades"),sg(),Tl(114,"table",10)(115,"tr",11)(116,"th",12),iN(117,"Nome"),sg(),Tl(118,"th",12),iN(119,"Tipo"),sg(),Tl(120,"th",12),iN(121,"Descri\xE7\xE3o"),sg()(),Tl(122,"tr",13)(123,"td",14)(124,"div",15)(125,"span",16),iN(126," afterRemove"),Gl(127,"br"),sg()()(),Tl(128,"td",17)(129,"code",23),iN(130,"() => void"),sg()(),Tl(131,"td",20)(132,"em")(133,"strong"),iN(134,"(opcional)"),sg()(),Tl(135,"p"),iN(136,"M\xE9todo executado ap\xF3s uma linha do grid ser removida."),sg()()(),Tl(137,"tr",13)(138,"td",14)(139,"div",15)(140,"span",16),iN(141," afterSave"),Gl(142,"br"),sg()()(),Tl(143,"td",17)(144,"code",24),iN(145,"(row: any) => void"),sg()(),Tl(146,"td",20)(147,"em")(148,"strong"),iN(149,"(opcional)"),sg()(),Tl(150,"p"),iN(151,"M\xE9todo executado ap\xF3s uma linha do grid ser salva, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados."),sg()()(),Tl(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),iN(156," beforeInsert"),Gl(157,"br"),sg()()(),Tl(158,"td",17)(159,"code",25),iN(160,"(row: any) => boolean"),sg()(),Tl(161,"td",20)(162,"em")(163,"strong"),iN(164,"(opcional)"),sg()(),Tl(165,"p"),iN(166,"M\xE9todo executado antes de uma nova linha ser inserida no grid, se o m\xE9todo retornar algo diferente de "),Tl(167,"code"),iN(168,"true"),sg(),iN(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),sg(),Tl(170,"p"),iN(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),sg(),Tl(172,"pre")(173,"code"),iN(174,`rowActions: PoGridRowActions = {
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
`),sg()()()(),Tl(175,"tr",13)(176,"td",14)(177,"div",15)(178,"span",16),iN(179," beforeRemove"),Gl(180,"br"),sg()()(),Tl(181,"td",17)(182,"code",25),iN(183,"(row: any) => boolean"),sg()(),Tl(184,"td",20)(185,"em")(186,"strong"),iN(187,"(opcional)"),sg()(),Tl(188,"p"),iN(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Tl(190,"code"),iN(191,"true"),sg(),iN(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),sg()()(),Tl(193,"tr",13)(194,"td",14)(195,"div",15)(196,"span",16),iN(197," beforeSave"),Gl(198,"br"),sg()()(),Tl(199,"td",17)(200,"code",26),iN(201,"(updatedRow: any, originalRow: any) => boolean"),sg()(),Tl(202,"td",20)(203,"em")(204,"strong"),iN(205,"(opcional)"),sg()(),Tl(206,"p"),iN(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Tl(208,"code"),iN(209,"true"),sg(),iN(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),sg(),Tl(211,"blockquote")(212,"p"),iN(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),sg()(),Tl(214,"pre")(215,"code"),iN(216,`rowActions: PoGridRowActions = {
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
`),sg()()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var F=(()=>{class n{route;router;sub;hidePoWebSample=true;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(o){return new(o||n)(w(Xn),w(wn))};static \u0275cmp=Un({type:n,selectors:[["ng-component"]],standalone:false,decls:6,vars:4,consts:[["p-title","Grid",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Gl(3,"sample-po-grid-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),Gl(5,"sample-po-grid-basic-view"),sg()()()),o&2&&(nw("p-actions",l.actions),Vp(2),nw("p-active",l.activeTab==="doc"),Vp(2),nw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[lNe,Wme,jme,M,I],encapsulation:2,changeDetection:1})}return n})();var z=[{path:"",component:F}],N=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[DL.forChild(z),DL]})}return n})();var oe=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=fe({type:n});static \u0275inj=ue({imports:[ar,N]})}return n})();export{oe as DocPoGridModule};