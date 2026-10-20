import{$r as Zn,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Y as Kze,Yi as rg,ai as b,dt as Sae,i as _a,ji as mO,pa as wg,r as Ta,ta as ue,wi as jE,xi as ir,y as $ze,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var G=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:`id`,label:`Código`,align:`right`,readonly:!0,freeze:!0,width:120},{property:`name`,label:`Nome`,width:`200px`,required:!0},{property:`occupation`,label:`Cargo`,width:150},{property:`email`,label:`E-mail`,width:100,required:!0},{property:`status`,label:`Status`,align:`center`,width:80},{property:`lastActivity`,label:`Última atividade`,align:`center`,width:140}];data=[{id:629131,name:`Jhonatas Silvano`,occupation:`Developer`,email:`jhonatas.silvano@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:78492341,name:`Rafael Gonçalvez`,occupation:`Engineer`,email:`rafael.goncalvez@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-10`},{id:986434,name:`Nicoli Pereira`,occupation:`Developer`,email:`nicoli.pereira@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:4235652,name:`Mauricio João Mendez`,occupation:`Developer`,email:`mauricio.joao@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-23`},{id:629131,name:`Leandro Oliveira`,occupation:`Engineer`,email:`leandro.oliveira@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-30`}];onBeforeSave(a,o){return a.occupation!==`Engineer`}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-grid-basic`]],standalone:!1,decls:1,vars:3,consts:[[3,`p-row-actions`,`p-data`,`p-columns`]],template:function(o,l){o&1&&nu(0,`po-grid`,0),o&2&&jE(`p-row-actions`,l.rowActions)(`p-data`,l.data)(`p-columns`,l.columns)},dependencies:[$ze],encapsulation:2,changeDetection:1})}return n})();var _=n=>({"docs-sample-code-tabs":n});var M=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-grid-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Grid Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return l.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-grid-basic/sample-po-grid-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-grid-basic/sample-po-grid-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-grid-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),qx(`po-icon `+l.sampleCodeButtonIcon),rg(),Ag(` `,l.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_,l.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,G],encapsulation:2,changeDetection:1})}return n})();var I=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Zn({type:n,selectors:[[`sample-po-grid-doc`]],standalone:!1,decls:217,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoGridRowActions`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(updatedRow:`,`any,`,`originalRow:`,`any)`,`=>`,`boolean`]],template:function(o,l){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoGridModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-grid.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoGridComponent`),wg()(),jc(12,`div`,2)(13,`blockquote`)(14,`p`),iO(15,`Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.`),wg()(),jc(16,`p`),iO(17,`Componente grid.`),wg(),jc(18,`p`),iO(19,`Ações / atalhos:`),wg(),jc(20,`ul`)(21,`li`),iO(22,`ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;`),wg(),jc(23,`li`),iO(24,`ARROW-DOWN: Navega para celula inferior;`),wg(),jc(25,`li`),iO(26,`ARROW-RIGHT: Navega para celula direita;`),wg(),jc(27,`li`),iO(28,`ARROW-LEFT: Navega para celula esquerda;`),wg(),jc(29,`li`),iO(30,`TAB: Navega para próxima celula;`),wg(),jc(31,`li`),iO(32,`SHIFT+TAB: Navega para celula anterior;`),wg(),jc(33,`li`),iO(34,`CTRL+DEL: Remove linha;`),wg(),jc(35,`li`),iO(36,`DEL/BACKSPACE: Limpa celula;`),wg(),jc(37,`li`),iO(38,`ENTER: Edita linha com valor atual/Confirma edição da celula;`),wg(),jc(39,`li`),iO(40,`DOUBLE-CLICK: Edita linha com valor atual;`),wg(),jc(41,`li`),iO(42,`ESC: Cancela edição da celula / Cancela inserção de linhas em branco;`),wg(),jc(43,`li`),iO(44,`A..Z/0..9: Inicia edição com valor em branco.`),wg()()(),jc(45,`div`,6)(46,`h4`,7),iO(47,`Seletor`),wg(),jc(48,`pre`,8),iO(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),wg()(),jc(50,`h4`,9),iO(51,`Propriedades`),wg(),jc(52,`table`,10)(53,`tr`,11)(54,`th`,12),iO(55,`Nome`),wg(),jc(56,`th`,12),iO(57,`Tipo`),wg(),jc(58,`th`,12),iO(59,`Padrão`),wg(),jc(60,`th`,12),iO(61,`Descrição`),wg()(),jc(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),iO(66,` p-columns`),nu(67,`br`),wg()()(),jc(68,`td`,17)(69,`code`,18),iO(70,`Array<any>`),wg()(),jc(71,`td`,19),iO(72,`-`),wg(),jc(73,`td`,20)(74,`p`),iO(75,`Colunas exibidas no grid.`),wg()()(),jc(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),iO(80,` p-data`),nu(81,`br`),wg()()(),jc(82,`td`,17)(83,`code`,18),iO(84,`Array<any>`),wg()(),jc(85,`td`,19),iO(86,`-`),wg(),jc(87,`td`,20)(88,`p`),iO(89,`Lista com os dados que serão exibidos no grid.`),wg()()(),jc(90,`tr`,13)(91,`td`,14)(92,`div`,15)(93,`span`,16),iO(94,` p-row-actions`),nu(95,`br`),wg()()(),jc(96,`td`,17)(97,`code`,21),iO(98,`PoGridRowActions`),wg()(),jc(99,`td`,19),iO(100,`-`),wg(),jc(101,`td`,20)(102,`p`),iO(103,`Ações disparadas quando uma linha do grid é manipulada.`),wg()()()(),jc(104,`h3`),iO(105,`Interfaces`),wg(),jc(106,`h4`,22)(107,`code`,5),iO(108,`PoGridRowActions`),wg()(),jc(109,`div`,2)(110,`p`),iO(111,`Ações executadas durante a manipulação das linhas do grid.`),wg()(),jc(112,`h4`,9),iO(113,`Propriedades`),wg(),jc(114,`table`,10)(115,`tr`,11)(116,`th`,12),iO(117,`Nome`),wg(),jc(118,`th`,12),iO(119,`Tipo`),wg(),jc(120,`th`,12),iO(121,`Descrição`),wg()(),jc(122,`tr`,13)(123,`td`,14)(124,`div`,15)(125,`span`,16),iO(126,` afterRemove`),nu(127,`br`),wg()()(),jc(128,`td`,17)(129,`code`,23),iO(130,`() => void`),wg()(),jc(131,`td`,20)(132,`em`)(133,`strong`),iO(134,`(opcional)`),wg()(),jc(135,`p`),iO(136,`Método executado após uma linha do grid ser removida.`),wg()()(),jc(137,`tr`,13)(138,`td`,14)(139,`div`,15)(140,`span`,16),iO(141,` afterSave`),nu(142,`br`),wg()()(),jc(143,`td`,17)(144,`code`,24),iO(145,`(row: any) => void`),wg()(),jc(146,`td`,20)(147,`em`)(148,`strong`),iO(149,`(opcional)`),wg()(),jc(150,`p`),iO(151,`Método executado após uma linha do grid ser salva, ao ser executado, o método irá receber um objeto com os dados atualizados.`),wg()()(),jc(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),iO(156,` beforeInsert`),nu(157,`br`),wg()()(),jc(158,`td`,17)(159,`code`,25),iO(160,`(row: any) => boolean`),wg()(),jc(161,`td`,20)(162,`em`)(163,`strong`),iO(164,`(opcional)`),wg()(),jc(165,`p`),iO(166,`Método executado antes de uma nova linha ser inserida no grid, se o método retornar algo diferente de `),jc(167,`code`),iO(168,`true`),wg(),iO(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),wg(),jc(170,`p`),iO(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),wg(),jc(172,`pre`)(173,`code`),iO(174,`rowActions: PoGridRowActions = {
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
`),wg()()()(),jc(175,`tr`,13)(176,`td`,14)(177,`div`,15)(178,`span`,16),iO(179,` beforeRemove`),nu(180,`br`),wg()()(),jc(181,`td`,17)(182,`code`,25),iO(183,`(row: any) => boolean`),wg()(),jc(184,`td`,20)(185,`em`)(186,`strong`),iO(187,`(opcional)`),wg()(),jc(188,`p`),iO(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),jc(190,`code`),iO(191,`true`),wg(),iO(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),wg()()(),jc(193,`tr`,13)(194,`td`,14)(195,`div`,15)(196,`span`,16),iO(197,` beforeSave`),nu(198,`br`),wg()()(),jc(199,`td`,17)(200,`code`,26),iO(201,`(updatedRow: any, originalRow: any) => boolean`),wg()(),jc(202,`td`,20)(203,`em`)(204,`strong`),iO(205,`(opcional)`),wg()(),jc(206,`p`),iO(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),jc(208,`code`),iO(209,`true`),wg(),iO(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),wg(),jc(211,`blockquote`)(212,`p`),iO(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),wg()(),jc(214,`pre`)(215,`code`),iO(216,`rowActions: PoGridRowActions = {
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
`),wg()()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return n})();var z=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(b(ir),b(Sn))};static ɵcmp=Zn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:6,vars:4,consts:[[`p-title`,`Grid`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(o,l){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return l.changeTab(`doc`)}),nu(3,`sample-po-grid-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return l.changeTab(`web`)}),nu(5,`sample-po-grid-basic-view`),wg()()()),o&2&&(jE(`p-actions`,l.actions),rg(2),jE(`p-active`,l.activeTab===`doc`),rg(2),jE(`p-hide`,l.hidePoWebSample)(`p-active`,l.activeTab===`web`))},dependencies:[Kze,bae,Sae,M,I],encapsulation:2,changeDetection:1})}return n})()}];var N=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[C1.forChild(z),C1]})}return n})();var oe=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=pe({type:n});static ɵinj=ue({imports:[Ta,N]})}return n})();export{oe as DocPoGridModule};