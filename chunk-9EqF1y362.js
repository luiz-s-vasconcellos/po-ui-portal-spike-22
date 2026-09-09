import{At as _Ce,Bi as jp,Fi as he,Gr as Un,Hr as Tl,Ii as hg,Li as ht,Nr as PO,Qn as DN,Qr as Xx,Xi as nw,Xr as Xn,Yn as Cn,fi as ag,gi as bL,jt as b8e,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:`id`,label:`Código`,align:`right`,readonly:!0,freeze:!0,width:120},{property:`name`,label:`Nome`,width:`200px`,required:!0},{property:`occupation`,label:`Cargo`,width:150},{property:`email`,label:`E-mail`,width:100,required:!0},{property:`status`,label:`Status`,align:`center`,width:80},{property:`lastActivity`,label:`Última atividade`,align:`center`,width:140}];data=[{id:629131,name:`Jhonatas Silvano`,occupation:`Developer`,email:`jhonatas.silvano@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:78492341,name:`Rafael Gonçalvez`,occupation:`Engineer`,email:`rafael.goncalvez@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-10`},{id:986434,name:`Nicoli Pereira`,occupation:`Developer`,email:`nicoli.pereira@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:4235652,name:`Mauricio João Mendez`,occupation:`Developer`,email:`mauricio.joao@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-23`},{id:629131,name:`Leandro Oliveira`,occupation:`Engineer`,email:`leandro.oliveira@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-30`}];onBeforeSave(a,o){return a.occupation!==`Engineer`}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-grid-basic`]],standalone:!1,decls:1,vars:3,consts:[[3,`p-row-actions`,`p-data`,`p-columns`]],template:function(o,l){o&1&&Gl(0,`po-grid`,0),o&2&&nw(`p-row-actions`,l.rowActions)(`p-data`,l.data)(`p-columns`,l.columns)},dependencies:[b8e],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n});var M=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-grid-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Grid Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-grid-basic/sample-po-grid-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-grid-basic/sample-po-grid-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-grid-basic`),ag(),Gl(23,`hr`)),o&2&&(jp(5),Xx(`po-icon `+l.sampleCodeButtonIcon),jp(),hg(` `,l.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_,l.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,G],encapsulation:2,changeDetection:1})}return n})();var I=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-grid-doc`]],standalone:!1,decls:217,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoGridRowActions`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(updatedRow:`,`any,`,`originalRow:`,`any)`,`=>`,`boolean`]],template:function(o,l){o&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoGridModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`Módulo do componente po-grid.`),ag()(),Tl(7,`h3`,3),cN(8,`Componente`),ag(),Tl(9,`h4`,4)(10,`code`,5),cN(11,`PoGridComponent`),ag()(),Tl(12,`div`,2)(13,`blockquote`)(14,`p`),cN(15,`Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.`),ag()(),Tl(16,`p`),cN(17,`Componente grid.`),ag(),Tl(18,`p`),cN(19,`Ações / atalhos:`),ag(),Tl(20,`ul`)(21,`li`),cN(22,`ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;`),ag(),Tl(23,`li`),cN(24,`ARROW-DOWN: Navega para celula inferior;`),ag(),Tl(25,`li`),cN(26,`ARROW-RIGHT: Navega para celula direita;`),ag(),Tl(27,`li`),cN(28,`ARROW-LEFT: Navega para celula esquerda;`),ag(),Tl(29,`li`),cN(30,`TAB: Navega para próxima celula;`),ag(),Tl(31,`li`),cN(32,`SHIFT+TAB: Navega para celula anterior;`),ag(),Tl(33,`li`),cN(34,`CTRL+DEL: Remove linha;`),ag(),Tl(35,`li`),cN(36,`DEL/BACKSPACE: Limpa celula;`),ag(),Tl(37,`li`),cN(38,`ENTER: Edita linha com valor atual/Confirma edição da celula;`),ag(),Tl(39,`li`),cN(40,`DOUBLE-CLICK: Edita linha com valor atual;`),ag(),Tl(41,`li`),cN(42,`ESC: Cancela edição da celula / Cancela inserção de linhas em branco;`),ag(),Tl(43,`li`),cN(44,`A..Z/0..9: Inicia edição com valor em branco.`),ag()()(),Tl(45,`div`,6)(46,`h4`,7),cN(47,`Seletor`),ag(),Tl(48,`pre`,8),cN(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),ag()(),Tl(50,`h4`,9),cN(51,`Propriedades`),ag(),Tl(52,`table`,10)(53,`tr`,11)(54,`th`,12),cN(55,`Nome`),ag(),Tl(56,`th`,12),cN(57,`Tipo`),ag(),Tl(58,`th`,12),cN(59,`Padrão`),ag(),Tl(60,`th`,12),cN(61,`Descrição`),ag()(),Tl(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),cN(66,` p-columns`),Gl(67,`br`),ag()()(),Tl(68,`td`,17)(69,`code`,18),cN(70,`Array<any>`),ag()(),Tl(71,`td`,19),cN(72,`-`),ag(),Tl(73,`td`,20)(74,`p`),cN(75,`Colunas exibidas no grid.`),ag()()(),Tl(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),cN(80,` p-data`),Gl(81,`br`),ag()()(),Tl(82,`td`,17)(83,`code`,18),cN(84,`Array<any>`),ag()(),Tl(85,`td`,19),cN(86,`-`),ag(),Tl(87,`td`,20)(88,`p`),cN(89,`Lista com os dados que serão exibidos no grid.`),ag()()(),Tl(90,`tr`,13)(91,`td`,14)(92,`div`,15)(93,`span`,16),cN(94,` p-row-actions`),Gl(95,`br`),ag()()(),Tl(96,`td`,17)(97,`code`,21),cN(98,`PoGridRowActions`),ag()(),Tl(99,`td`,19),cN(100,`-`),ag(),Tl(101,`td`,20)(102,`p`),cN(103,`Ações disparadas quando uma linha do grid é manipulada.`),ag()()()(),Tl(104,`h3`),cN(105,`Interfaces`),ag(),Tl(106,`h4`,22)(107,`code`,5),cN(108,`PoGridRowActions`),ag()(),Tl(109,`div`,2)(110,`p`),cN(111,`Ações executadas durante a manipulação das linhas do grid.`),ag()(),Tl(112,`h4`,9),cN(113,`Propriedades`),ag(),Tl(114,`table`,10)(115,`tr`,11)(116,`th`,12),cN(117,`Nome`),ag(),Tl(118,`th`,12),cN(119,`Tipo`),ag(),Tl(120,`th`,12),cN(121,`Descrição`),ag()(),Tl(122,`tr`,13)(123,`td`,14)(124,`div`,15)(125,`span`,16),cN(126,` afterRemove`),Gl(127,`br`),ag()()(),Tl(128,`td`,17)(129,`code`,23),cN(130,`() => void`),ag()(),Tl(131,`td`,20)(132,`em`)(133,`strong`),cN(134,`(opcional)`),ag()(),Tl(135,`p`),cN(136,`Método executado após uma linha do grid ser removida.`),ag()()(),Tl(137,`tr`,13)(138,`td`,14)(139,`div`,15)(140,`span`,16),cN(141,` afterSave`),Gl(142,`br`),ag()()(),Tl(143,`td`,17)(144,`code`,24),cN(145,`(row: any) => void`),ag()(),Tl(146,`td`,20)(147,`em`)(148,`strong`),cN(149,`(opcional)`),ag()(),Tl(150,`p`),cN(151,`Método executado após uma linha do grid ser salva, ao ser executado, o método irá receber um objeto com os dados atualizados.`),ag()()(),Tl(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),cN(156,` beforeInsert`),Gl(157,`br`),ag()()(),Tl(158,`td`,17)(159,`code`,25),cN(160,`(row: any) => boolean`),ag()(),Tl(161,`td`,20)(162,`em`)(163,`strong`),cN(164,`(opcional)`),ag()(),Tl(165,`p`),cN(166,`Método executado antes de uma nova linha ser inserida no grid, se o método retornar algo diferente de `),Tl(167,`code`),cN(168,`true`),ag(),cN(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),ag(),Tl(170,`p`),cN(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),ag(),Tl(172,`pre`)(173,`code`),cN(174,`rowActions: PoGridRowActions = {
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
`),ag()()()(),Tl(175,`tr`,13)(176,`td`,14)(177,`div`,15)(178,`span`,16),cN(179,` beforeRemove`),Gl(180,`br`),ag()()(),Tl(181,`td`,17)(182,`code`,25),cN(183,`(row: any) => boolean`),ag()(),Tl(184,`td`,20)(185,`em`)(186,`strong`),cN(187,`(opcional)`),ag()(),Tl(188,`p`),cN(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Tl(190,`code`),cN(191,`true`),ag(),cN(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),ag()()(),Tl(193,`tr`,13)(194,`td`,14)(195,`div`,15)(196,`span`,16),cN(197,` beforeSave`),Gl(198,`br`),ag()()(),Tl(199,`td`,17)(200,`code`,26),cN(201,`(updatedRow: any, originalRow: any) => boolean`),ag()(),Tl(202,`td`,20)(203,`em`)(204,`strong`),cN(205,`(opcional)`),ag()(),Tl(206,`p`),cN(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Tl(208,`code`),cN(209,`true`),ag(),cN(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),ag(),Tl(211,`blockquote`)(212,`p`),cN(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),ag()(),Tl(214,`pre`)(215,`code`),cN(216,`rowActions: PoGridRowActions = {
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
`),ag()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var z=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Grid`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),Gl(3,`sample-po-grid-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),Gl(5,`sample-po-grid-basic-view`),ag()()()),o&2&&(nw(`p-actions`,l.actions),jp(2),nw(`p-active`,l.activeTab===`doc`),jp(2),nw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,M,I],encapsulation:2,changeDetection:1})}return n})()}];var N=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[bL.forChild(z),bL]})}return n})();var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,N]})}return n})();export{oe as DocPoGridModule};