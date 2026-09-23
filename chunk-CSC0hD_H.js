import{Et as V8e,Ii as ht,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,U as I8e,Ui as lg,Xn as Cn,Yi as mN,_r as Ml,bi as cw,br as NL,ga as w,l as ar,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe}from"./main-NT5YGKBQ.js";var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:`id`,label:`Código`,align:`right`,readonly:!0,freeze:!0,width:120},{property:`name`,label:`Nome`,width:`200px`,required:!0},{property:`occupation`,label:`Cargo`,width:150},{property:`email`,label:`E-mail`,width:100,required:!0},{property:`status`,label:`Status`,align:`center`,width:80},{property:`lastActivity`,label:`Última atividade`,align:`center`,width:140}];data=[{id:629131,name:`Jhonatas Silvano`,occupation:`Developer`,email:`jhonatas.silvano@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:78492341,name:`Rafael Gonçalvez`,occupation:`Engineer`,email:`rafael.goncalvez@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-10`},{id:986434,name:`Nicoli Pereira`,occupation:`Developer`,email:`nicoli.pereira@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:4235652,name:`Mauricio João Mendez`,occupation:`Developer`,email:`mauricio.joao@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-23`},{id:629131,name:`Leandro Oliveira`,occupation:`Engineer`,email:`leandro.oliveira@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-30`}];onBeforeSave(a,o){return a.occupation!==`Engineer`}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-grid-basic`]],standalone:!1,decls:1,vars:3,consts:[[3,`p-row-actions`,`p-data`,`p-columns`]],template:function(o,l){o&1&&ql(0,`po-grid`,0),o&2&&cw(`p-row-actions`,l.rowActions)(`p-data`,l.data)(`p-columns`,l.columns)},dependencies:[I8e],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n});var M=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-grid-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Grid Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return l.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-grid-basic/sample-po-grid-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-grid-basic/sample-po-grid-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-grid-basic`),lg(),ql(23,`hr`)),o&2&&(Up(5),oN(`po-icon `+l.sampleCodeButtonIcon),Up(),gg(` `,l.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_,l.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,G],encapsulation:2,changeDetection:1})}return n})();var I=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Un({type:n,selectors:[[`sample-po-grid-doc`]],standalone:!1,decls:217,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoGridRowActions`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(updatedRow:`,`any,`,`originalRow:`,`any)`,`=>`,`boolean`]],template:function(o,l){o&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoGridModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`Módulo do componente po-grid.`),lg()(),Ml(7,`h3`,3),mN(8,`Componente`),lg(),Ml(9,`h4`,4)(10,`code`,5),mN(11,`PoGridComponent`),lg()(),Ml(12,`div`,2)(13,`blockquote`)(14,`p`),mN(15,`Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.`),lg()(),Ml(16,`p`),mN(17,`Componente grid.`),lg(),Ml(18,`p`),mN(19,`Ações / atalhos:`),lg(),Ml(20,`ul`)(21,`li`),mN(22,`ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;`),lg(),Ml(23,`li`),mN(24,`ARROW-DOWN: Navega para celula inferior;`),lg(),Ml(25,`li`),mN(26,`ARROW-RIGHT: Navega para celula direita;`),lg(),Ml(27,`li`),mN(28,`ARROW-LEFT: Navega para celula esquerda;`),lg(),Ml(29,`li`),mN(30,`TAB: Navega para próxima celula;`),lg(),Ml(31,`li`),mN(32,`SHIFT+TAB: Navega para celula anterior;`),lg(),Ml(33,`li`),mN(34,`CTRL+DEL: Remove linha;`),lg(),Ml(35,`li`),mN(36,`DEL/BACKSPACE: Limpa celula;`),lg(),Ml(37,`li`),mN(38,`ENTER: Edita linha com valor atual/Confirma edição da celula;`),lg(),Ml(39,`li`),mN(40,`DOUBLE-CLICK: Edita linha com valor atual;`),lg(),Ml(41,`li`),mN(42,`ESC: Cancela edição da celula / Cancela inserção de linhas em branco;`),lg(),Ml(43,`li`),mN(44,`A..Z/0..9: Inicia edição com valor em branco.`),lg()()(),Ml(45,`div`,6)(46,`h4`,7),mN(47,`Seletor`),lg(),Ml(48,`pre`,8),mN(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),lg()(),Ml(50,`h4`,9),mN(51,`Propriedades`),lg(),Ml(52,`table`,10)(53,`tr`,11)(54,`th`,12),mN(55,`Nome`),lg(),Ml(56,`th`,12),mN(57,`Tipo`),lg(),Ml(58,`th`,12),mN(59,`Padrão`),lg(),Ml(60,`th`,12),mN(61,`Descrição`),lg()(),Ml(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),mN(66,` p-columns`),ql(67,`br`),lg()()(),Ml(68,`td`,17)(69,`code`,18),mN(70,`Array<any>`),lg()(),Ml(71,`td`,19),mN(72,`-`),lg(),Ml(73,`td`,20)(74,`p`),mN(75,`Colunas exibidas no grid.`),lg()()(),Ml(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),mN(80,` p-data`),ql(81,`br`),lg()()(),Ml(82,`td`,17)(83,`code`,18),mN(84,`Array<any>`),lg()(),Ml(85,`td`,19),mN(86,`-`),lg(),Ml(87,`td`,20)(88,`p`),mN(89,`Lista com os dados que serão exibidos no grid.`),lg()()(),Ml(90,`tr`,13)(91,`td`,14)(92,`div`,15)(93,`span`,16),mN(94,` p-row-actions`),ql(95,`br`),lg()()(),Ml(96,`td`,17)(97,`code`,21),mN(98,`PoGridRowActions`),lg()(),Ml(99,`td`,19),mN(100,`-`),lg(),Ml(101,`td`,20)(102,`p`),mN(103,`Ações disparadas quando uma linha do grid é manipulada.`),lg()()()(),Ml(104,`h3`),mN(105,`Interfaces`),lg(),Ml(106,`h4`,22)(107,`code`,5),mN(108,`PoGridRowActions`),lg()(),Ml(109,`div`,2)(110,`p`),mN(111,`Ações executadas durante a manipulação das linhas do grid.`),lg()(),Ml(112,`h4`,9),mN(113,`Propriedades`),lg(),Ml(114,`table`,10)(115,`tr`,11)(116,`th`,12),mN(117,`Nome`),lg(),Ml(118,`th`,12),mN(119,`Tipo`),lg(),Ml(120,`th`,12),mN(121,`Descrição`),lg()(),Ml(122,`tr`,13)(123,`td`,14)(124,`div`,15)(125,`span`,16),mN(126,` afterRemove`),ql(127,`br`),lg()()(),Ml(128,`td`,17)(129,`code`,23),mN(130,`() => void`),lg()(),Ml(131,`td`,20)(132,`em`)(133,`strong`),mN(134,`(opcional)`),lg()(),Ml(135,`p`),mN(136,`Método executado após uma linha do grid ser removida.`),lg()()(),Ml(137,`tr`,13)(138,`td`,14)(139,`div`,15)(140,`span`,16),mN(141,` afterSave`),ql(142,`br`),lg()()(),Ml(143,`td`,17)(144,`code`,24),mN(145,`(row: any) => void`),lg()(),Ml(146,`td`,20)(147,`em`)(148,`strong`),mN(149,`(opcional)`),lg()(),Ml(150,`p`),mN(151,`Método executado após uma linha do grid ser salva, ao ser executado, o método irá receber um objeto com os dados atualizados.`),lg()()(),Ml(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),mN(156,` beforeInsert`),ql(157,`br`),lg()()(),Ml(158,`td`,17)(159,`code`,25),mN(160,`(row: any) => boolean`),lg()(),Ml(161,`td`,20)(162,`em`)(163,`strong`),mN(164,`(opcional)`),lg()(),Ml(165,`p`),mN(166,`Método executado antes de uma nova linha ser inserida no grid, se o método retornar algo diferente de `),Ml(167,`code`),mN(168,`true`),lg(),mN(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),lg(),Ml(170,`p`),mN(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),lg(),Ml(172,`pre`)(173,`code`),mN(174,`rowActions: PoGridRowActions = {
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
`),lg()()()(),Ml(175,`tr`,13)(176,`td`,14)(177,`div`,15)(178,`span`,16),mN(179,` beforeRemove`),ql(180,`br`),lg()()(),Ml(181,`td`,17)(182,`code`,25),mN(183,`(row: any) => boolean`),lg()(),Ml(184,`td`,20)(185,`em`)(186,`strong`),mN(187,`(opcional)`),lg()(),Ml(188,`p`),mN(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Ml(190,`code`),mN(191,`true`),lg(),mN(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),lg()()(),Ml(193,`tr`,13)(194,`td`,14)(195,`div`,15)(196,`span`,16),mN(197,` beforeSave`),ql(198,`br`),lg()()(),Ml(199,`td`,17)(200,`code`,26),mN(201,`(updatedRow: any, originalRow: any) => boolean`),lg()(),Ml(202,`td`,20)(203,`em`)(204,`strong`),mN(205,`(opcional)`),lg()(),Ml(206,`p`),mN(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Ml(208,`code`),mN(209,`true`),lg(),mN(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),lg(),Ml(211,`blockquote`)(212,`p`),mN(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),lg()(),Ml(214,`pre`)(215,`code`),mN(216,`rowActions: PoGridRowActions = {
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
`),lg()()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return n})();var z=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(w(Xn),w(Cn))};static ɵcmp=Un({type:n,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Grid`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return l.changeTab(`doc`)}),ql(3,`sample-po-grid-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return l.changeTab(`web`)}),ql(5,`sample-po-grid-basic-view`),lg()()()),o&2&&(cw(`p-actions`,l.actions),Up(2),cw(`p-active`,l.activeTab===`doc`),Up(2),cw(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[V8e,SCe,ECe,M,I],encapsulation:2,changeDetection:1})}return n})()}];var N=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[NL.forChild(z),NL]})}return n})();var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=he({type:n});static ɵinj=ue({imports:[ar,N]})}return n})();export{oe as DocPoGridModule};